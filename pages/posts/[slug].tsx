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
import { getAllPostsWithSlug, getPostAndMorePosts } from '../../lib/api'
import { CMS_NAME } from '../../lib/constants'
import { FacebookIcon, FacebookMessengerIcon, FacebookMessengerShareButton, FacebookShareButton, LinkedinIcon, LinkedinShareButton, RedditIcon, RedditShareButton, TelegramIcon, TelegramShareButton, TwitterIcon, TwitterShareButton, WhatsappIcon, WhatsappShareButton } from 'react-share'

export default function Post({ post, posts, preview }) {
  const router = useRouter()
  const fullURL = typeof window !== 'undefined' ? window.location.href : '';
  const morePosts = posts?.edges

  if (!router.isFallback && !post?.slug) {
    return <ErrorPage statusCode={404} />
  }

  return (
    <Layout preview={preview}>
      <Container>
        <Header />
        {router.isFallback ? (
          <PostTitle>Loading…</PostTitle>
        ) : (
          <>
            <article>
              <Head>
                <title>
                  {`${post.title} | Next.js Blog Example with ${CMS_NAME}`}
                </title>
                <meta
                  property="og:image"
                  content={post.featuredImage?.node.sourceUrl}
                />
              </Head>
              <PostHeader
                title={post.title}
                coverImage={post.featuredImage}
                date={post.date}
                author={post.author}
                categories={post.categories}
              />
              <PostBody content={post.content} />
               <div className="w-full h-full flex justify-center">
                <div className="grid grid-cols-3 md:grid-cols-6 gap-x-4 gap-y-4">
                    <WhatsappShareButton  url={fullURL}>
                                  <WhatsappIcon  ></WhatsappIcon>
                      </WhatsappShareButton>
                      <FacebookShareButton  url={fullURL} >
                                  <FacebookIcon  ></FacebookIcon>
                      </FacebookShareButton>
                      <TelegramShareButton url={fullURL}>
                        <TelegramIcon ></TelegramIcon>
                      </TelegramShareButton>
                       <TwitterShareButton url={fullURL}>
                        <TwitterIcon ></TwitterIcon>
                       </TwitterShareButton>
                       <LinkedinShareButton url={fullURL}>
                        <LinkedinIcon ></LinkedinIcon>
                       </LinkedinShareButton>
                       <RedditShareButton url={fullURL}>
                        <RedditIcon ></RedditIcon>
                       </RedditShareButton>
                </div>
               </div>
        
              <footer>
                {post.tags.edges.length > 0 && <Tags tags={post.tags} />}
              </footer>
            </article>

          </>
        )}
      </Container>
    </Layout>
  )
}

export const getStaticProps: GetStaticProps = async ({
  params,
  preview = false,
  previewData,
}) => {
  const data = await getPostAndMorePosts(params?.slug, preview, previewData)

  return {
    props: {
      preview,
      post: data.post,
      posts: data.posts,
    },
    revalidate: 10,
  }
}

export const getStaticPaths: GetStaticPaths = async () => {
  const allPosts = await getAllPostsWithSlug()

  return {
    paths: allPosts.edges.map(({ node }) => `/posts/${node.slug}`) || [],
    fallback: true,
  }
}
