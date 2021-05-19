import { ReactNode } from 'react';
import styles from './feed.module.scss';

interface feedProps {
  children: ReactNode;
}

export default function Feed({ children }: feedProps) {
  return (
    <div className={styles.container}>
      <ul className={styles.limiter}>{children}</ul>;
    </div>
  );
}
