//create sanity client
import {create} from 'domain';
import { createClient } from 'next-sanity';

export const client = createClient({
    apiVersion: '2023-05-03',
    dataset: 'production',
    projectId: 'mack8g4f',
    useCdn: false,
})