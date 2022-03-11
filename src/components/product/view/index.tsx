import React from "react";

import Breadcrumb from "@components/common/Breadcrumb";
import { Product } from "@interfaces/index";

import ProductDetails from "./Details";
import ProductGallery from "./MainGallery";
import ProductVariants from "./Variants";

const ProductView = ({ product }: { product: Product }) => {
  return (
    <div className="min-h-screen max-w-7xl bg-white">
      <div className="pt-6">
        <Breadcrumb
          breadcrumb={null}
          pageName={product?.title}
        />
      </div>
      <div className="grid w-full grid-cols-1 px-1 py-16 sm:px-0 lg:grid-cols-6">
        <div className="col-span-4 w-full pb-10 lg:px-8 lg:pt-0 lg:pb-24">
          <ProductGallery
            //responses better be formatted
            images={product?.images?.edges?.map(({ node }) => ({
              src: node.url,
              alt: node.altText,
            }))}
          />
        </div>
        <div className="col-span-2 px-4">
          <div className="pt-10 pb-10 lg:pt-0 lg:pb-24 ">
            <ProductDetails product={product} />
          </div>
          <div className="mt-4 lg:row-span-3 lg:mt-0 lg:px-0 ">
            <h2 className="sr-only">Product information</h2>
            <p className="text-3xl text-gray-900">${product?.price}</p>
            <ProductVariants product={product} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductView;
