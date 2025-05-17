// src/app/not-found.tsx
import styles from '@/styles/not-found.module.css';

export default function NotFound() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>404</h1>
      <p className={styles.subtitle}>Oops! Page not found.</p>
      <p className={styles.description}>
        The page you're looking for might have been removed or doesn't exist.
      </p>
      <a href="/" className={styles.link}>← Back to Home</a>
    </div>
  );
}
