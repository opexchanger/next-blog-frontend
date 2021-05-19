import BlockContent from '@sanity/block-content-to-react';

import FormattedDate from '../../components/date';
import { urlFor } from '../../utils/sanity';
import { ContentItem } from '../../utils/sanityTypes';

import styles from './article.module.scss';

interface ArticleProps {
  title: string;
  description: string;
  date: string;
  authorName: string;
  authorAvatarUrl: string;
  coverImageUrl: string;
  content: ContentItem[];
}

const serializers = {
  types: {
    image: ({ node: { asset, caption } }) => (
      <figure>
        <img src={urlFor(asset).width(720).url()} alt={caption} />
        <figcaption>{caption}</figcaption>
      </figure>
    ),
  },
};

export default function Article(props: ArticleProps) {
  const {
    title,
    date,
    description,
    authorName,
    authorAvatarUrl,
    coverImageUrl,
    content,
  } = props;
  return (
    <article className={styles.container}>
      <div className={styles.limiter}>
        <div className={styles.head}>
          <h1>{title}</h1>
          <p>{description}</p>
          <FormattedDate>{date}</FormattedDate>
        </div>
        <div className={styles.authorSnippet}>
          <div className={styles.avatar}>
            <img src={authorAvatarUrl} alt={authorName} />
          </div>
          <span>{authorName}</span>
        </div>
        <div className={styles.coverImage}>
          <img src={coverImageUrl} alt={title} />
        </div>
        <BlockContent
          className={styles.blockContent}
          blocks={content}
          serializers={serializers}
        />
      </div>
    </article>
  );
}
