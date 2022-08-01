import sanityClient from '@sanity/client';
import { ImageUrlBuilder } from '@sanity/image-url';

export const client = sanityClient({
  projectId: '9zyp1c7v',
  dataset: 'production',
  apiVersion: '2022-08-01',
  useCdn: true,
  token: process.env.NEXT_PUBLIC_SANITY_TOKEN,
});

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);
