import { simpleBlogCard } from "./lib/interface";
import { client } from "./lib/sanity";

async function getData() {
  const query = `
  *[_type == 'blog'] | order(_createAt desc){
    title,
      description,
      "currentSlug": slug.current
  }`

  const data = await client.fetch(query)

  return data;
}


export default async function Home() {
  const data: simpleBlogCard[] = await getData();

  console.log(data);
  return (
   <div>
   
    <h1>Hello from index</h1>
   </div>
  );
}
