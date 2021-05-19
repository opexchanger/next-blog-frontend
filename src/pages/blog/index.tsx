import { GetServerSideProps } from 'next';
import { ReactNode } from 'react';

import { getAllPosts, urlFor } from '../../utils/sanity';
import { BlogPost } from '../../utils/sanityTypes';
import Card from '../../components/card';
import Feed from '../../containers/feed';

export const getServerSideProps: GetServerSideProps = async () => {
  const blogPosts = await getAllPosts();

  return {
    props: {
      blogPosts,
    },
  };
};

interface BlogProps {
  blogPosts: BlogPost[];
}

export default function Blog({ blogPosts }: BlogProps) {
  let content: ReactNode;
  if (blogPosts && blogPosts.length) {
    content = (
      <Feed>
        {blogPosts.map((post) => (
          <li key={post?.slug}>
            <Card
              title={post?.title}
              imageUrl={urlFor(post?.coverImage).width(400).height(200).url()}
              description={post?.description}
              date={post?.date}
              slug={post?.slug}
            />
          </li>
        ))}
      </Feed>
    );
  } else {
    content = <h2>Nenhuma postagem ainda! :(</h2>;
  }
  return content;
}
