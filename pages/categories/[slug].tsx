import { useRouter } from "next/router";
import ErrorPage from "next/error";
import Head from "next/head";
import { GetStaticPaths, GetStaticProps } from "next";
import Container from "../../components/container";
import PostBody from "../../components/post-body";
import MoreStories from "../../components/more-stories";
import Header from "../../components/header";
import PostHeader from "../../components/post-header";
import SectionSeparator from "../../components/section-separator";
import Layout from "../../components/layout";
import PostTitle from "../../components/post-title";
import Tags from "../../components/tags";
import {
  getAllPostsWithSlug,
  getCategoryBySlug,
  getPostsByCategoryId,
  getAllCategoriesOfCars,
} from "../../lib/api";
import { CMS_NAME } from "../../lib/constants";
import Link from "next/link";
import HeroPost from "../../components/hero-post";
import Pagination from "../../components/Pagination";
import { useEffect, useState } from "react";

export default function index({ posts, preview }) {
  const [currentPage, setCurrentPage] = useState(1);
  const [numberOfPage, setNumberOfPage] = useState<number>(0);
  const ITEMS = 6;
  const lastIndex = currentPage * ITEMS;
  const firstIndex = lastIndex - ITEMS;
  useEffect(() => {
    setCurrentPage(1);
    setNumberOfPage(posts?.edges.length);
  }, [posts?.edges.length]);
  const getCurrentPage = (n: number) => {
    setCurrentPage(n);
  };
  if (!posts?.edges.length)
    return (
      <Layout preview={preview}>
        <div className="flex justify-center items-center w-full h-[40vh]">
          .... No Post In This Category 😅{" "}
        </div>
      </Layout>
    );

  return (
    <Layout preview={preview}>
      <section>
        {posts?.edges
          .slice(firstIndex, lastIndex)
          .map((heroPost: any, i: number) => (
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
          ))}
      </section>
      <div className="py-4 border-t-2 border-black  mt-3 shadow-lg shadow-white">
        <Pagination
          getCurrentPage={getCurrentPage}
          nPage={numberOfPage}
          number={ITEMS}
        />
      </div>
    </Layout>
  );
}

export const getStaticProps: GetStaticProps = async ({
  params,
  preview = false,
}) => {
  const { category } = await getCategoryBySlug(params?.slug as string, preview);

  if (!category) {
    return {
      props: {},
      notFound: true,
    };
  }
  const { posts } = await getPostsByCategoryId(category.databaseId, preview);
  return {
    props: {
      preview,
      posts: posts,
    },
    revalidate: 10,
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const AllCategories = await getAllPostsWithSlug();

  return {
    paths:
      AllCategories.edges.map(({ node }) => `/categories/${node.slug}`) || [],
    fallback: true,
  };
};
