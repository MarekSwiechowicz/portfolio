import Layout from '@/components/Layout';
import Head from 'next/head';
import Image from 'next/image';
import profilePic from '../../public/developer-pic-1.png';
import AnimatedText from '@/components/AnimatedText';

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
      </Head>
      <main className='flex items-center text-dark w-full min-h-screen'>
        <Layout className='pt-0'>
          <div className='flex items-center justify-between w-full'>
            <div className='w-1/2'>
              <Image
                src={profilePic}
                alt='CodeBucks'
                className='w-full h-auto'
              ></Image>
            </div>
            <div className='w-1/2'>
              <AnimatedText text='Turning Vision Into Reality With Code And Design.'></AnimatedText>
              <p>
                As a skilled full-stack developer, I am dedicated to turning
                ideas into innovative web applications. Explore my latest
                projects and articles, showcasing my expertise in React.js and
                web development.
              </p>
            </div>
          </div>
        </Layout>
      </main>
    </>
  );
}
