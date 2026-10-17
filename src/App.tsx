import { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TrustStrip from './components/TrustStrip';
import FeaturedWork from './components/FeaturedWork';
import About from './components/About';
import Services from './components/Services';
import CreativeProcess from './components/CreativeProcess';
import ToolsWorkflow from './components/ToolsWorkflow';
import BeforeAfterShowcase from './components/BeforeAfterShowcase';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import CaseStudyModal from './components/CaseStudyModal';
import ShowreelModal from './components/ShowreelModal';
import ResumeModal from './components/ResumeModal';
import SetupGuideModal from './components/SetupGuideModal';
import VideoManagerModal from './components/VideoManagerModal';
import { PORTFOLIO_DATA, Project } from './data/portfolioData';

export default function App() {
  const [projectsList, setProjectsList] = useState<Project[]>(PORTFOLIO_DATA.projects);
  const [selectedCaseStudy, setSelectedCaseStudy] = useState<Project | null>(null);
  const [videoModalOpen, setVideoModalOpen] = useState(false);
  const [videoModalProject, setVideoModalProject] = useState<Project | null>(null);
  const [resumeModalOpen, setResumeModalOpen] = useState(false);
  const [setupGuideOpen, setSetupGuideOpen] = useState(false);
  const [videoManagerOpen, setVideoManagerOpen] = useState(false);
  const [videoManagerTargetId, setVideoManagerTargetId] = useState<string | undefined>(undefined);
  const [inquiryService, setInquiryService] = useState<string>('');

  const handleOpenCaseStudyById = (projectId: string) => {
    const found = projectsList.find((p) => p.id === projectId);
    if (found) {
      setSelectedCaseStudy(found);
    }
  };

  const handleOpenShowreel = () => {
    setVideoModalProject(null);
    setVideoModalOpen(true);
  };

  const handleOpenVideoPreview = (project: Project) => {
    setVideoModalProject(project);
    setVideoModalOpen(true);
  };

  const handleOpenVideoManager = (projectId?: string) => {
    setVideoManagerTargetId(projectId);
    setVideoManagerOpen(true);
  };

  const handleUpdateProjectVideo = (projectId: string, newVideoUrl: string) => {
    setProjectsList((prev) =>
      prev.map((p) => (p.id === projectId ? { ...p, videoUrl: newVideoUrl } : p))
    );
    if (selectedCaseStudy && selectedCaseStudy.id === projectId) {
      setSelectedCaseStudy((prev) => (prev ? { ...prev, videoUrl: newVideoUrl } : null));
    }
    if (videoModalProject && videoModalProject.id === projectId) {
      setVideoModalProject((prev) => (prev ? { ...prev, videoUrl: newVideoUrl } : null));
    }
  };

  const handleSelectServiceForInquiry = (serviceTitle: string) => {
    setInquiryService(serviceTitle);
    const contactEl = document.getElementById('contact');
    if (contactEl) {
      contactEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleOpenContact = (serviceTitle?: string) => {
    if (serviceTitle) setInquiryService(serviceTitle);
    const contactEl = document.getElementById('contact');
    if (contactEl) {
      contactEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#090a0f] text-slate-100 flex flex-col font-sans selection:bg-indigo-500/30 selection:text-white">
      {/* Top Navbar */}
      <Navbar
        onOpenSetupGuide={() => setSetupGuideOpen(true)}
        onOpenContact={handleOpenContact}
        onOpenVideoManager={() => handleOpenVideoManager()}
        onOpenResume={() => setResumeModalOpen(true)}
      />

      <main className="flex-1">
        {/* Cinematic Hero */}
        <Hero
          onOpenShowreel={handleOpenShowreel}
          onOpenContact={() => handleOpenContact()}
          onOpenResume={() => setResumeModalOpen(true)}
        />

        {/* Trust & Capabilities Strip */}
        <TrustStrip onSelectProject={handleOpenCaseStudyById} />

        {/* Featured Projects Gallery */}
        <FeaturedWork
          projects={projectsList}
          onSelectProject={(project) => setSelectedCaseStudy(project)}
          onOpenVideoPreview={handleOpenVideoPreview}
        />

        {/* About & Philosophy */}
        <About
          onOpenResume={() => setResumeModalOpen(true)}
          onOpenContact={() => handleOpenContact()}
        />

        {/* Services & Offerings */}
        <Services onSelectServiceForInquiry={handleSelectServiceForInquiry} />

        {/* Creative Production Process */}
        <CreativeProcess />

        {/* Tools & Workflows */}
        <ToolsWorkflow onOpenSetupGuide={() => setSetupGuideOpen(true)} />

        {/* Before & After Polish Comparison */}
        <BeforeAfterShowcase />

        {/* Client Feedback / References */}
        <Testimonials onOpenContact={() => handleOpenContact()} />

        {/* High-Conversion Contact Section */}
        <Contact initialService={inquiryService} />
      </main>

      {/* Footer */}
      <Footer
        onOpenSetupGuide={() => setSetupGuideOpen(true)}
        onOpenResume={() => setResumeModalOpen(true)}
      />

      {/* Modals & Overlays */}
      <CaseStudyModal
        project={selectedCaseStudy}
        onClose={() => setSelectedCaseStudy(null)}
        onSelectProject={(p) => setSelectedCaseStudy(p)}
        onOpenVideoPreview={(p) => {
          setSelectedCaseStudy(null);
          handleOpenVideoPreview(p);
        }}
        onOpenVideoManager={(projectId) => {
          setSelectedCaseStudy(null);
          handleOpenVideoManager(projectId);
        }}
      />

      <ShowreelModal
        isOpen={videoModalOpen}
        onClose={() => setVideoModalOpen(false)}
        activeProject={videoModalProject}
        onOpenVideoManager={(projectId) => handleOpenVideoManager(projectId)}
      />

      <VideoManagerModal
        isOpen={videoManagerOpen}
        onClose={() => setVideoManagerOpen(false)}
        selectedProjectId={videoManagerTargetId}
        onUpdateProjectVideo={handleUpdateProjectVideo}
      />

      <ResumeModal
        isOpen={resumeModalOpen}
        onClose={() => setResumeModalOpen(false)}
        onOpenContact={() => {
          setResumeModalOpen(false);
          handleOpenContact();
        }}
      />

      <SetupGuideModal
        isOpen={setupGuideOpen}
        onClose={() => setSetupGuideOpen(false)}
      />
    </div>
  );
}
