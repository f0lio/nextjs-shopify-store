import React from "react";

import Layout from "@components/common/layout";

import { storefront } from "utils";
import { PRODUCT_QUERY, PRODUCT_HANDLES_QUERY } from "@queries/products";
import { Product } from "@interfaces/index";

import ProductView from "@components/product/view";

export const getStaticPaths = async () => {
  const { data } = await storefront(PRODUCT_HANDLES_QUERY, { count: 100 });

  const setPath = ({ node }) => ({
    params: { handle: node.handle },
  });
  const paths = data?.products?.edges?.map(setPath);
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async ({ params }) => {
  try {
    const { data } = await storefront(PRODUCT_QUERY, { handle: params.handle });
    return {
      props: {
        product: data?.product || null,
      },
    };
  } catch (error) {
    console.error("Oops: Product!");
    return {
      redirect: {
        destination: "/explore",
      },
    };
  }
};

const ProductPage = ({ product }: { product: Product }) => {
  return (
    <Layout title="">
      <ProductView product={product} />
    </Layout>
  );
};

export default ProductPage;
