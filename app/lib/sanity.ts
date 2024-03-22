//create sanity client

import { createClient } from 'next-sanity';
import imageUrlBuilder from '@sanity/image-url';

export const client = createClient({
    apiVersion: '2023-05-03',
    dataset: 'production',
    projectId: 'mack8g4f',
    useCdn: false,
})

//convert sanity image to a url
const builder = imageUrlBuilder(client);

export function urlFor(source: any){
    return builder.image(source);
}