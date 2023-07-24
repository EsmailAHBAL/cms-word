import { useRouter } from 'next/router'
import ErrorPage from 'next/error'
import Head from 'next/head'
import { GetStaticPaths, GetStaticProps } from 'next'
import Container from '../../components/container'
import PostBody from '../../components/post-body'
import MoreStories from '../../components/more-stories'
import Header from '../../components/header'
import PostHeader from '../../components/post-header'
import SectionSeparator from '../../components/section-separator'
import Layout from '../../components/layout'
import PostTitle from '../../components/post-title'
import Tags from '../../components/tags'
import { getAllPostsWithSlug, getCategoryBySlug, getPostsByCategoryId } from '../../lib/api'
import { CMS_NAME } from '../../lib/constants'
import Link from 'next/link'
import HeroPost from '../../components/hero-post'

export default function index({ posts ,preview}) {
if(!posts?.edges.length) return <Layout preview={preview}><div className="flex justify-center items-center w-full h-[40vh]">.... No Post  In This Category 😅 </div></Layout>

  return (
  <Layout preview={preview}>
  <section>
          {
          
              posts?.edges.map((heroPost:any,i:number )=> (
                <div className="" key={i}>
                  <HeroPost
              title={heroPost.node.title}
              coverImage={heroPost.node.featuredImage}
              date={heroPost.node.date}
              author={heroPost.node.author}
              slug={heroPost.node.slug}
              excerpt={heroPost.node.excerpt}
            />
                </div>
              ))
            
          }
        </section>  </Layout>

  )
}

export const getStaticProps: GetStaticProps = async ({
  params,
  preview = false,
}) => {
  const {category} = await getCategoryBySlug(params?.slug as string, preview)
  
  if (!category) {
   return {
     props: {},
     notFound: true,
   };
 }
  const {posts} = await getPostsByCategoryId(category.databaseId,preview)  
  return {
    props: {
      preview,
      posts : posts
    },
    revalidate: 10,
  }
}

export const getStaticPaths: GetStaticPaths = async () => {
  const AllCategories = await getAllPostsWithSlug()
 
  return {
    paths: AllCategories.edges.map(({ node }) => `/categories/${node.slug}`) || [],
    fallback: true,
  }
}
