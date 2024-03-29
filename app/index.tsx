'use client'

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { GetStaticProps } from 'next';

interface Post {
  id: number;
  title: string;
  slug: string;
}

interface HomeProps {
  posts: Post[];
}

export default function Home({ posts }: HomeProps) {
  return (
    <div>
      <h1>Welcome to My Blog!</h1>
      <ul>
        {posts.map(post => (
          <li key={post.id}>
            <Link href={`/post/${post.slug}`}>
              <a>{post.title}</a>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export const getStaticProps: GetStaticProps<HomeProps> = async () => {
  
  const res = await fetch('');
  const posts: Post[] = await res.json();

  return {
    props: {
      posts
    }
  };
};
