import Link from 'next/link';
import FormattedDate from '../date';

import styles from './card.module.scss';

interface cardProps {
  imageUrl: string;
  title: string;
  description: string;
  date: string;
  slug: string;
}

export default function Card({
  imageUrl,
  title,
  description,
  date,
  slug,
}: cardProps) {
  return (
    <div className={styles.component}>
      <div className={styles.thumbnail}>
        <img src={imageUrl} alt={title} />
      </div>
      <div className={styles.body}>
        <h2>{title}</h2>
        <p>{description}</p>
        <FormattedDate>{date}</FormattedDate>
        <Link href={`/blog/${slug}`}>
          <button>Leia mais</button>
        </Link>
      </div>
    </div>
  );
}
