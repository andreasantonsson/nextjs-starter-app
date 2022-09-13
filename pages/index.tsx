import { FC } from 'react';
import Head from 'next/head';
import Link from 'next/link';

const Home: FC = () => {
  return (
    <div>
      <Head>
        {/* <title>{siteTitle}</title> */}
      </Head>
      <section>
        <p>[Your Self Introduction]</p>
        <Link href="/about">Go to about</Link>
        <p>
          (This is a sample website - you’ll be building a site like this in{' '}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
        </p>
      </section>
    </div>
  );
};

export default Home;
