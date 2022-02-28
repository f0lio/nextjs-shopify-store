import React from "react";

import { useRouter } from "next/router";

import Layout from "@components/Layout";

import {
  ProductVariants,
  ProductDetails,
  ProductGallery,
} from "@components/ProductPage";
import { ProductReviews } from "@components/ProductPage/Details";

import Breadcrumb from "@components/Layout/Breadcrumb";

const product = {
  name: "Basic Tee 6-Pack",
  price: "9.99",
  href: "#",
  breadcrumbs: [
    { id: 1, name: "Men", href: "#" },
    { id: 2, name: "Clothing", href: "#" },
  ],
  images: [
    {
      src: "https://tailwindui.com/img/ecommerce-images/product-page-02-secondary-product-shot.jpg",
      alt: "Two each of gray, white, and black shirts laying flat.",
    },
    {
      src: "https://tailwindui.com/img/ecommerce-images/product-page-02-tertiary-product-shot-01.jpg",
      alt: "Model wearing plain black basic tee.",
    },
    {
      src: "https://tailwindui.com/img/ecommerce-images/product-page-02-tertiary-product-shot-02.jpg",
      alt: "Model wearing plain gray basic tee.",
    },
    {
      src: "https://tailwindui.com/img/ecommerce-images/product-page-02-featured-product-shot.jpg",
      alt: "Model wearing plain white basic tee.",
    },
  ],
  colors: [
    { name: "White", class: "bg-white", selectedClass: "ring-gray-400" },
    { name: "Gray", class: "bg-gray-200", selectedClass: "ring-gray-400" },
    { name: "Black", class: "bg-gray-900", selectedClass: "ring-gray-900" },
  ],
  sizes: [
    { name: "XXS", inStock: false },
    { name: "XS", inStock: true },
    { name: "S", inStock: true },
    { name: "M", inStock: true },
    { name: "L", inStock: true },
    { name: "XL", inStock: true },
    { name: "2XL", inStock: true },
    { name: "3XL", inStock: true },
  ],
  description:
    'The Basic Tee 6-Pack allows you to fully express your vibrant personality with three grayscale options. Feeling adventurous? Put on a heather gray tee. Want to be a trendsetter? Try our exclusive colorway: "Black". Need to add an extra pop of color to your outfit? Our white tee has you covered.',
  highlights: [
    "Hand cut and sewn locally",
    "Dyed with our proprietary colors",
    "Pre-washed & pre-shrunk",
    "Ultra-soft 100% cotton",
  ],
  details:
    'The 6-Pack includes two black, two white, and two heather gray Basic Tees. Sign up for our subscription service and be the first to get new, exciting colors, like our upcoming "Charcoal Gray" limited release.',
};
const reviews = { href: "#", average: 4, totalCount: 117 };

// function classNames(...classes) {
//   return classes.filter(Boolean).join(" ");
// }

// interface ProductInterface {
//   ir: number;
//   title: string;
//   description: string;
//   image: string;
//   status: "Available" | "OutOfStock";
//   // variants?: string[];
//   price: number;
//   tags?: string[];
// }

const ProductPage = () => {
  const router = useRouter();
  const { slug } = router.query;
  return (
    <Layout title="">
      <div className="max-w-7xl bg-white">
        <div className="pt-6">
          <Breadcrumb
            breadcrumb={product?.breadcrumbs}
            pageName={product?.name}
          />
        </div>

        <div className="grid w-full grid-cols-1 px-4 py-16 sm:px-0 lg:grid-cols-6">
          <div className=" col-span-4 w-full pb-10 lg:px-8 lg:pt-0 lg:pb-24">
            <ProductGallery images={product?.images} />
          </div>

          <div className="col-span-2">
            <div className="pt-10 pb-10 lg:pt-0 lg:pb-24 ">
              <ProductDetails product={product} />
            </div>
            <div className="mt-4 lg:row-span-3 lg:mt-0 ">
              <h2 className="sr-only">Product information</h2>
              <p className="text-3xl text-gray-900">${product?.price}</p>
              <ProductReviews reviews={reviews} />
              <ProductVariants product={product} />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ProductPage;
