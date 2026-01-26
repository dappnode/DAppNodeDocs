import { useLocation } from '@docusaurus/router';
import styles from './ViewMarkdownButton.module.css';

export default function ViewMarkdownButton() {
  const location = useLocation();

  // Only show in production (markdown files only exist after build)
  const isDev = process.env.NODE_ENV === 'development';

  if (isDev) {
    return null;
  }

  // Construct the markdown URL from current path
  // Remove trailing slash if present, then append .md
  const currentPath = location.pathname.replace(/\/$/, '');
  const markdownUrl = `${currentPath}.md`;

  return (
    <div className={styles.container}>
      <a
        href={markdownUrl}
        target="_blank"
        rel="noopener noreferrer"
        className={styles.button}
        title="View raw markdown (optimized for LLMs)"
      >
        View as Markdown
      </a>
    </div>
  );
}
