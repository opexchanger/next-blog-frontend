import { GetServerSideProps } from 'next';

import { getPostBySlug, urlFor } from '../../../utils/sanity';
import { BlogPost } from '../../../utils/sanityTypes';

import Article from '../../../containers/article';

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  let { slug } = params;
  if (slug instanceof Array) slug = slug[0];

  const blogPost = await getPostBySlug(slug);
  return {
    props: {
      blogPost,
    },
  };
};

interface PostProps {
  blogPost: BlogPost;
}

export default function Post({ blogPost }: PostProps) {
  const { title, description, author, date, coverImage, content } = blogPost;
  return (
    <Article
      title={title}
      description={description}
      authorName={author.name}
      authorAvatarUrl={urlFor(author.avatar).width(40).url()}
      coverImageUrl={urlFor(coverImage).width(720).url()}
      date={date}
      content={content}
    />
  );
}
