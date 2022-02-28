import { useState } from "react";

import { useRouter } from "next/router";

import Image from "next/image";

import { StarIcon } from "@heroicons/react/solid";
import { RadioGroup } from "@headlessui/react";
import Layout from "@components/Layout";
import Breadcrumb from "@components/Layout/Breadcrumb";
import { Button } from "@components/common";

import cn from "classnames";

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

const OtherImages = ({ images, currentImage, setCurrentImage }) => {

  return (
    <div>
      {[...images].map((image, index) => (
        <div className='pb-6' key={index} >
          <img
            className={cn('border-black cursor-pointer h-14 w-12 object-cover',
              index == currentImage && ' ring-1')}
            onClick={() => setCurrentImage(index)}
            src={image?.src || ""}
            alt={image?.alt || ""}
          />
          {/* <Image
            src={image?.src || ""}
            alt={image?.alt || ""}
            width={48}
            height={64}
            objectFit="cover"
            layout='responsive'
            className='border-black cursor-pointer'
            onClick={() => setCurrentImage(index)}
          /> */}
          {/* <p >HOLA</p> */}
        </div>
      ))}
    </div>
  )
}

const ProductGallery = ({ images }) => {
  const [currentImage, setCurrentImage] = useState(0);
  return (
    <div className="grid sm:px-4 grid-cols-12 max-h-screen h-full">
      <div className='col-span-1 hidden sm:flex sm:justify-center'>
        <OtherImages images={images} currentImage={currentImage} setCurrentImage={setCurrentImage} />
      </div>
      <figure className="rounded-lg col-span-11 h-full px-4">
        <img
          className='cursor-zoom-in w-full '
          src={images[currentImage]?.src || "https://images.unsplash.com/photo-1564859228273-274232fdb516?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1887&q=80"}
          alt={images[currentImage]?.alt}
        />
        {/* <Image
          src={images[currentImage]?.src || "https://images.unsplash.com/photo-1564859228273-274232fdb516?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1887&q=80"}
          alt={images[currentImage]?.alt}
          width={800}
          height={800}
          quality={100}
          // layout="responsive"
          objectFit="contain"
          className='cursor-zoom-in w-full h-full top-0'
        /> */}
      </figure>
    </div>
  )

}

//product reviews component
const ProductReviews = ({ reviews }) => {
  return (
    <div className="mt-6">
      <h3 className="sr-only">Reviews</h3>
      <div className="flex items-center">
        <div className="flex items-center">
          {[0, 1, 2, 3, 4].map((rating) => (
            <StarIcon
              key={rating}
              className={cn(
                reviews.average > rating
                  ? "text-gray-900"
                  : "text-gray-200",
                "h-5 w-5 flex-shrink-0"
              )}
              aria-hidden="true"
            />
          ))}
        </div>
        <p className="sr-only">{reviews.average} out of 5 stars</p>
        <a
          href={reviews.href}
          className="ml-3 text-sm font-medium text-indigo-600 hover:text-indigo-500"
        >
          {reviews.totalCount} reviews
        </a>
      </div>
    </div>)
}

const ProductSizeSelector = ({ sizes }) => {
  const [selectedSize, setSelectedSize] = useState(sizes[2]);
  return (

    <>
      <div className="mt-10">
        <div className="flex items-center justify-between">
          <h3 className="text-sm text-gray-900 font-medium">Size</h3>
          <a
            href="#"
            className="text-sm font-medium text-indigo-600 hover:text-indigo-500"
          >
            Size guide
          </a>
        </div>

        <RadioGroup
          value={selectedSize}
          onChange={setSelectedSize}
          className="mt-4"
        >
          <RadioGroup.Label className="sr-only">
            Choose a size
          </RadioGroup.Label>
          <div className="grid grid-cols-4 gap-4 sm:grid-cols-8 lg:grid-cols-4">
            {sizes.map((size) => (
              <RadioGroup.Option
                key={size.name}
                value={size}
                disabled={!size.inStock}
                className={({ active }) =>
                  cn(
                    size.inStock
                      ? "bg-white shadow-sm text-gray-900 cursor-pointer"
                      : "bg-gray-50 text-gray-200 cursor-not-allowed",
                    active ? "ring-2 ring-indigo-500" : "",
                    "group relative border rounded-md py-3 px-4 flex items-center justify-center text-sm font-medium uppercase hover:bg-gray-50 focus:outline-none sm:flex-1 sm:py-6"
                  )
                }
              >
                {({ active, checked }) => (
                  <>
                    <RadioGroup.Label as="p">
                      {size.name}
                    </RadioGroup.Label>
                    {size.inStock ? (
                      <div
                        className={cn(
                          active ? "border" : "border-2",
                          checked
                            ? "border-indigo-500"
                            : "border-transparent",
                          "absolute -inset-px rounded-md pointer-events-none"
                        )}
                        aria-hidden="true"
                      />
                    ) : (
                      <div
                        aria-hidden="true"
                        className="absolute -inset-px rounded-md border-2 border-gray-200 pointer-events-none"
                      >
                        <svg
                          className="absolute inset-0 w-full h-full text-gray-200 stroke-2"
                          viewBox="0 0 100 100"
                          preserveAspectRatio="none"
                          stroke="currentColor"
                        >
                          <line
                            x1={0}
                            y1={100}
                            x2={100}
                            y2={0}
                            vectorEffect="non-scaling-stroke"
                          />
                        </svg>
                      </div>
                    )}
                  </>
                )}
              </RadioGroup.Option>
            ))}
          </div>
        </RadioGroup>
      </div>
    </>
  )
}
const ProductColorSelector = ({ colors }) => {
  const [selectedColor, setSelectedColor] = useState(product?.colors[0]);
  return (

    <div>
      <h3 className="text-sm text-gray-900 font-medium">Color</h3>
      <RadioGroup
        value={selectedColor}
        onChange={setSelectedColor}
        className="mt-4"
      >
        <RadioGroup.Label className="sr-only">
          Choose a color
        </RadioGroup.Label>
        <div className="flex items-center space-x-3">
          {colors.map((color) => (
            <RadioGroup.Option
              key={color.name}
              value={color}
              className={({ active, checked }) =>
                cn(
                  color.selectedClass,
                  active && checked ? "ring ring-offset-1" : "",
                  !active && checked ? "ring-2" : "",
                  "-m-0.5 relative rounded-full p-0.5 flex items-center justify-center cursor-pointer focus:outline-none"
                )
              }
            >
              <RadioGroup.Label as="p" className="sr-only">
                {color.name}
              </RadioGroup.Label>
              <span
                aria-hidden="true"
                className={cn(
                  color.class,
                  "h-8 w-8 border border-black border-opacity-10 rounded-full"
                )}
              />
            </RadioGroup.Option>
          ))}
        </div>
      </RadioGroup>
    </div>
  )
}

const ProductVariants = ({ product }) => {
  return (
    <form className="mt-10" onSubmit={() => { }}>

      <ProductColorSelector colors={product.colors} />
      <ProductSizeSelector sizes={product.sizes} />

      <div className='py-4'>

        <Button size='normal' className='rounded-md px-10 py-4'>

          Add to bag
        </Button>
      </div>

    </form >
  )
}


const ProductDetails = ({ product }) => {

  return (
    <div className='px-4 w-full'>
      <div className="lg:col-span-2 lg:pr-8">
        <h1 className="text-2xl font-extrabold tracking-tight text-gray-900 sm:text-3xl">
          {product?.name}
        </h1>
      </div>
      <div className="lg:border-b lg:pt-6 lg:pb-8 w-full  lg:col-span-2  lg:border-gray-200 ">
        <div>
          <h3 className="sr-only">Description</h3>

          <div className="space-y-4">
            <p className="text-base text-gray-900">
              {product?.description}
            </p>
          </div>
        </div>

        <div className="mt-10">
          <h3 className="text-sm font-medium text-gray-900">
            Highlights
          </h3>

          <div className="mt-4">
            <ul role="list" className="pl-4 list-disc text-sm space-y-2">
              {product?.highlights.map((highlight) => (
                <li key={highlight} className="text-gray-400">
                  <span className="text-gray-600">{highlight}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-10">
          <h2 className="text-sm font-medium text-gray-900">Details</h2>

          <div className="mt-4 space-y-6">
            <p className="text-sm text-gray-600">{product?.details}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

const ProductPage = () => {

  const router = useRouter();
  const { slug } = router.query;

  return (
    <Layout title="">
      <div className="bg-white max-w-7xl">
        <div className="pt-6">
          <Breadcrumb
            breadcrumb={product?.breadcrumbs}
            pageName={product?.name}
          />
        </div>

        <div className='grid grid-cols-1 lg:grid-cols-6 px-4 py-16 sm:px-0 w-full'>

          <div className=" pb-10 lg:pt-0 lg:pb-24 lg:px-8 w-full col-span-4">
            <ProductGallery images={product?.images} />
          </div>

          <div className='col-span-2'>
            <div className="pt-10 pb-10 lg:pt-0 lg:pb-24 ">
              <ProductDetails product={product} />
            </div>
            <div className="mt-4 lg:mt-0 lg:row-span-3 ">
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
