import React from "react";

import HomeProducts from "@components/product/List";

import Layout from "@components/common/layout";
import { Product } from "@interfaces/index";
import { HOME_PRODUCTS_QUERY } from "@queries/products";
import { storefront } from "utils";
import Link from "next/link";

const Hero = () => (
  <div className="grid w-full max-w-7xl grid-cols-1 overflow-hidden bg-white py-16 sm:py-24 lg:grid-cols-2">
    <section className="flex items-center px-4 lg:text-left ">
      <div className="flex-col">
        <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
          <span className="">Always in</span>{" "}
          <span className="text-indigo-600 ">style!</span>
        </h1>
        <p className="mt-3 text-base text-gray-500 sm:mx-auto sm:mt-5 sm:max-w-xl sm:text-lg md:mt-5 md:text-xl lg:mx-0">
          Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem
          cupidatat commodo. Elit sunt amet fugiat veniam occaecat fugiat
          aliqua.
        </p>
        <div className="mt-5 sm:mt-8 sm:flex lg:justify-start">
          <div>
            <Link href="/explore">
              <button className="flex items-center justify-center rounded-2xl border border-transparent bg-indigo-600 px-8 py-3 text-base font-medium text-white hover:bg-indigo-700 md:py-4 md:px-10 md:text-lg">
                Explore
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>

    <figure className="py-4">
      <img
        className="h-full w-full object-cover "
        src="https://images.unsplash.com/photo-1488998427799-e3362cec87c3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&h=4870"
        alt="Featured product"
      />
    </figure>
  </div>
);

const FeaturedCard = ({ name, imgSrc = "" }: { name: String, imgSrc?: String }) => (
  <article className="h-24 p-4">
    {/* <p className="py-3 font-bold text-center">{name}</p> */}
  </article>
);

const FeaturedDeals = () => (
  <section className="flex-col-2 flex h-96 w-full justify-center bg-gray-100">
    <div className="flex w-full max-w-7xl items-center justify-between px-3">
      <FeaturedCard name="Lorem">
        {/* <FaShippingFast className="w-full h-full" /> */}
      </FeaturedCard>
      <FeaturedCard name="Lorem">
        {/* <FaShippingFast className="w-full h-full" /> */}
      </FeaturedCard>
      <FeaturedCard name="Lorem">
        {/* <FaShippingFast className="w-full h-full" /> */}
      </FeaturedCard>
    </div>
  </section>
);

export default function Home({ products }: { products: Product[] }) {
  return (
    <Layout title="Always In Style!">
      <Hero />
      <FeaturedDeals />
      <HomeProducts products={products} name="Trending" />
    </Layout>
  );
}

export async function getStaticProps() {
  const { data } = await storefront(HOME_PRODUCTS_QUERY);
  return {
    props: {
      products: (data?.products?.edges?.map(({ node }) => node) ?? []) || data,
    },
  };
  //shoud revalidate!
}
