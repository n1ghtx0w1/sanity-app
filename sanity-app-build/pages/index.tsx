import type { NextPage } from 'next'
import Head from 'next/head'
import Header from '../components/Header'

const Home: NextPage = () => {
  return (
    <div className="max-w-7xl mx-auto">
      <Head>
        <title>Business Blog</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

     <Header />
     
     <div className='flex justify-between items-center bg-blue-400 border-y border-black py-10 lg:py-0'>
      <div className='px-10 space-y-5 my-5'>
        <h1 className='text-6xl max-w-xl font-serif'><span className="underline decoration-black decoration-4">Business-Blog</span>{" "} is a blog to write read and connect</h1>
        <h2>It's easy to get started.  Post your thoughts on any topic
          and connect with millions of users.
        </h2>
         </div>
         <img className="hidden md:inline-flex h-32 w-28 lg:h-full mx-5" src="/images/b_logo.png" alt="" />
     </div>
     {/* Posts */}
    </div>
  )
}

export default Home
