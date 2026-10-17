import express, { Request, Response } from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import dotenv from 'dotenv';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = Number(process.env.PORT) || 3000;

app.use(express.json());

// In-memory inquiry store for demo/preview persistence
interface ContactInquiry {
  id: string;
  name: string;
  email: string;
  projectType: string;
  budgetRange?: string;
  message: string;
  createdAt: string;
}

const inquiries: ContactInquiry[] = [];

// Contact form API endpoint
app.post('/api/contact', (req: Request, res: Response): any => {
  try {
    const { name, email, projectType, budgetRange, message } = req.body;

    if (!name || !email || !message) {
      return res.status(400).json({
        success: false,
        error: 'Please provide all required fields: name, email, and message.'
      });
    }

    // Basic email format validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({
        success: false,
        error: 'Please enter a valid email address.'
      });
    }

    const inquiry: ContactInquiry = {
      id: `inq_${Date.now()}_${Math.random().toString(36).substring(2, 7)}`,
      name: String(name).trim(),
      email: String(email).trim().toLowerCase(),
      projectType: String(projectType || 'General Inquiry'),
      budgetRange: budgetRange ? String(budgetRange) : undefined,
      message: String(message).trim(),
      createdAt: new Date().toISOString()
    };

    inquiries.unshift(inquiry);
    console.log(`[New Portfolio Inquiry Received] From: ${inquiry.name} <${inquiry.email}> | Project: ${inquiry.projectType}`);

    return res.status(200).json({
      success: true,
      message: 'Thank you! Your project inquiry has been received. Raj will get back to you within 24 hours.',
      inquiryId: inquiry.id
    });
  } catch (err: any) {
    console.error('Error handling contact form:', err);
    return res.status(500).json({
      success: false,
      error: 'An internal server error occurred while processing your request. Please email directly at rajbillionaire07@gmail.com'
    });
  }
});

// Health check
app.get('/api/health', (_req: Request, res: Response) => {
  res.json({
    status: 'ok',
    timestamp: new Date().toISOString(),
    inquiryCount: inquiries.length
  });
});

async function startServer() {
  if (process.env.NODE_ENV === 'production') {
    // Serve static files in production
    app.use(express.static(path.resolve(__dirname, 'dist')));
    app.get('*', (_req, res) => {
      res.sendFile(path.resolve(__dirname, 'dist', 'index.html'));
    });
  } else {
    // Mount Vite dev server in development
    const { createServer: createViteServer } = await import('vite');
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server running on http://0.0.0.0:${PORT}`);
  });
}

startServer();
