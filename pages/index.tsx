import Head from 'next/head'
import { GetStaticProps } from 'next'
import Container from '../components/container'
import MoreStories from '../components/more-stories'
import HeroPost from '../components/hero-post'
import Intro from '../components/intro'
import Layout from '../components/layout'
import { getAllPostsForHome } from '../lib/api'
import { CMS_NAME } from '../lib/constants'

export default function Index({ allPosts: { edges }, preview }) {

  return (
    <Layout preview={preview}>
      <Head>
        <title>Smart Mini Car</title>
      </Head>
      <Container>
        <Intro />
        <section>
          {
            edges.map((heroPost:any,i:number )=> (
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
        </section>
      </Container>
    </Layout>
  )
}

export const getStaticProps: GetStaticProps = async ({ preview = false }) => {
  const allPosts = await getAllPostsForHome(preview)

  return {
    props: { allPosts, preview },
    revalidate: 10,
  }
}
