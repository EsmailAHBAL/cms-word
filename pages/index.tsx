import Head from 'next/head'
import { GetStaticProps } from 'next'
import Container from '../components/container'
import MoreStories from '../components/more-stories'
import HeroPost from '../components/hero-post'
import Intro from '../components/intro'
import Layout from '../components/layout'
import { getAllPostsForHome } from '../lib/api'
import { CMS_NAME } from '../lib/constants'
import SideCat from '../components/SiderCat'
import More from '../components/More'
import Meta from '../components/meta'
import Alert from '../components/alert'
import CatNav from '../components/CateNav'
import { useEffect, useState } from 'react'
import Pagination from '../components/Pagination'
import Footer from '../components/footer'
import SliderHero from '../components/SliderHero'

export default function Index({ allPosts: { edges }, preview }) {
  const [currentPage,setCurrentPage ]= useState(1)
  const [numberOfPage,setNumberOfPage]=useState<number>(0)
const ITEMS = 12
const lastIndex = currentPage * ITEMS
const firstIndex = lastIndex - ITEMS
 useEffect(() => {
    setNumberOfPage(edges.length)

 },[])
  const getCurrentPage = (n: number)=> {
    setCurrentPage(n)
    }

  return (
    <>
     <Meta />
        <Alert preview={preview} />
      <div className="">
   <CatNav />
    </div>
    <section>
      <Head>
        <title>Smart Mini Car</title>
      </Head>
       <div className="grid grid-cols-1 md:grid-cols-6 ">
        <div className="col-span-1 order-last md:order-none">
          <SideCat></SideCat>
        </div>
        <div className="col-span-5  my-auto">
          <div className="h-[73vh] lg:h-[90vh] rounded-lg relative md:my-1">
            hero 
          </div>
      <div className="-mt-11">
      <div className="pr-10 ">
      <Container >
   
   <section className="grid grid-cols-1 lg:grid-cols-2 gap-x-3">
     {
       edges.slice(firstIndex,lastIndex).map((heroPost:any,i:number )=> (
         <div className="" key={i}>
           <HeroPost
       title={heroPost.node.title}
       author={heroPost.autho}
       coverImage={heroPost.node.featuredImage}
       date={heroPost.node.date}
       slug={heroPost.node.slug}
       excerpt={heroPost.node.excerpt}
       />
         </div>
       ))
      }
      
   </section>
 </Container>
 <div className="">
 <div className="py-4 border-t-2 border-black  mt-3 shadow-lg shadow-white">
      <Pagination getCurrentPage={getCurrentPage} nPage={numberOfPage} number="12"/>    </div>
 </div>
      </div>
    
      </div>
        </div>
       </div>
    </section>
    <Footer/>
</>
  )
}

export const getStaticProps: GetStaticProps = async ({ preview = false }) => {
  const allPosts = await getAllPostsForHome(preview)
  
  return {
    props: { allPosts, preview },
    revalidate: 10,
  }
}
