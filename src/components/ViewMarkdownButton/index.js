import { useEffect } from 'react';
import { useLocation } from '@docusaurus/router';
import styles from './ViewMarkdownButton.module.css';

export default function ViewMarkdownButton() {
  const location = useLocation();

  // Only show in production (markdown files only exist after build)
  const isDev = process.env.NODE_ENV === 'development';

  useEffect(() => {
    if (isDev) return;

    // Find the main h1 title in the document
    const title = document.querySelector('article header h1, article h1');
    if (!title) return;

    // Check if button already exists (prevent duplicates)
    const existingButton = title.querySelector(`.${styles.button}`);
    if (existingButton) {
      existingButton.remove();
    }

    // Create button element directly in DOM (not managed by React)
    const button = document.createElement('a');
    const currentPath = location.pathname.replace(/\/$/, '');
    button.href = `${currentPath}.md`;
    button.target = '_blank';
    button.rel = 'noopener noreferrer';
    button.className = styles.button;
    button.title = 'View raw markdown (optimized for LLMs)';
    button.textContent = 'View as Markdown';

    // Style the title as flex container
    title.style.display = 'flex';
    title.style.alignItems = 'center';
    title.style.flexWrap = 'wrap';
    title.style.gap = '0.75rem';

    // Add button to title
    title.appendChild(button);

    // Cleanup on unmount or path change
    return () => {
      button.remove();
    };
  }, [isDev, location.pathname]);

  // Return null - we're creating the button directly in the DOM
  return null;
}
