/**
 * Helper to detect and format video embeds for YouTube, YouTube Shorts,
 * Vimeo, local /public/videos/ files, and direct MP4/WebM URLs.
 */

export interface VideoInfo {
  type: 'youtube' | 'vimeo' | 'gdrive' | 'mp4' | 'none';
  embedUrl?: string;
  directSrc?: string;
}

export function getVideoInfo(url?: string, youtubeId?: string): VideoInfo {
  if (youtubeId) {
    return {
      type: 'youtube',
      embedUrl: `https://www.youtube-nocookie.com/embed/${youtubeId}?autoplay=1&rel=0&modestbranding=1`
    };
  }

  if (!url || typeof url !== 'string' || !url.trim()) {
    return { type: 'none' };
  }

  const cleanUrl = url.trim();

  // Google Drive video links:
  // e.g. https://drive.google.com/file/d/1a2b3c4d5e/view?usp=sharing
  // e.g. https://drive.google.com/file/d/1a2b3c4d5e/preview
  // e.g. https://drive.google.com/open?id=1a2b3c4d5e
  const gdriveRegex = /(?:drive\.google\.com\/(?:file\/d\/|open\?id=))([\w-]+)/;
  const gdriveMatch = cleanUrl.match(gdriveRegex);
  if (gdriveMatch && gdriveMatch[1]) {
    return {
      type: 'gdrive',
      embedUrl: `https://drive.google.com/file/d/${gdriveMatch[1]}/preview`
    };
  }

  // YouTube standard, youtu.be, embed, or YouTube Shorts:
  // e.g. https://www.youtube.com/watch?v=dQw4w9WgXcQ
  // e.g. https://youtu.be/dQw4w9WgXcQ
  // e.g. https://www.youtube.com/shorts/3i_rJ7U0Mbg
  const ytRegex = /(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=|shorts\/|live\/))([\w-]{11})/;
  const ytMatch = cleanUrl.match(ytRegex);
  if (ytMatch && ytMatch[1]) {
    return {
      type: 'youtube',
      embedUrl: `https://www.youtube-nocookie.com/embed/${ytMatch[1]}?autoplay=1&rel=0&modestbranding=1`
    };
  }

  // Vimeo:
  // e.g. https://vimeo.com/123456789
  const vimeoRegex = /vimeo\.com\/(?:video\/)?(\d+)/;
  const vimeoMatch = cleanUrl.match(vimeoRegex);
  if (vimeoMatch && vimeoMatch[1]) {
    return {
      type: 'vimeo',
      embedUrl: `https://player.vimeo.com/video/${vimeoMatch[1]}?autoplay=1&title=0&byline=0`
    };
  }

  // Local / public videos, Blob URLs, Data URLs, direct MP4 / WebM / MOV
  if (
    cleanUrl.startsWith('/videos/') ||
    cleanUrl.startsWith('blob:') ||
    cleanUrl.startsWith('data:') ||
    cleanUrl.endsWith('.mp4') ||
    cleanUrl.endsWith('.webm') ||
    cleanUrl.endsWith('.mov') ||
    cleanUrl.endsWith('.m4v') ||
    cleanUrl.includes('.mp4?') ||
    cleanUrl.includes('.webm?')
  ) {
    return {
      type: 'mp4',
      directSrc: cleanUrl
    };
  }

  // Generic fallback if it's an http/https link that could be a stream or direct file
  if (cleanUrl.startsWith('http://') || cleanUrl.startsWith('https://') || cleanUrl.startsWith('/')) {
    return {
      type: 'mp4',
      directSrc: cleanUrl
    };
  }

  return { type: 'none' };
}
