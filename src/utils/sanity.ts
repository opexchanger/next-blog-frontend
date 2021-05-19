import sanityClient from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

import { ImageReference, BlogPost } from './sanityTypes';

const client = sanityClient({
  projectId: 'o6wenex0',
  dataset: 'production',
  apiVersion: '2021-05-01',
  useCdn: false,
});

export type GetAllPosts = () => Promise<BlogPost[]>;

export const getAllPosts: GetAllPosts = async () => {
  const blogPosts = await client.fetch(`
  *[_type == 'post'] {
    'slug': slug.current,
    title,
    description,
    date,
    coverImage,
  }`);

  return blogPosts;
};

export type GetPostBySlug = (slug: string) => Promise<BlogPost>;

export const getPostBySlug: GetPostBySlug = async (slug) => {
  const blogPost = await client
    .fetch(
      `
        *[_type == 'post' && slug.current == $slug] {
          title,
          description,
          date,
          coverImage,
          content,
          'author': author-> {
            name,
            avatar
          }
        }
      `,
      { slug }
    )
    .then((res) => res[0]);

  return blogPost;
};

const builder = imageUrlBuilder(client);

export function urlFor(src: ImageReference) {
  return builder.image(src);
}
