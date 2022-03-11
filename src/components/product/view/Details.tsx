import React from "react";

import { StarIcon } from "@heroicons/react/solid";
import cn from "classnames";
import { Product } from "@interfaces/index";

const reviews = { href: "#", average: 4, totalCount: 117 };

export const ProductReviews = ({ reviews }) => {
  if (!reviews) return <></>;
  return (
    <>
      <h3 className="sr-only">Reviews</h3>
      <div className="flex items-center">
        <div className="flex items-center">
          {[0, 1, 2, 3, 4].map((rating) => (
            <StarIcon
              key={rating}
              className={cn(
                reviews.average > rating ? "text-gray-900" : "text-gray-200",
                "h-4 w-4 flex-shrink-0",
              )}
              aria-hidden="true"
            />
          ))}
        </div>
        <p className="sr-only">{reviews.average} out of 5 stars</p>
        <a
          href={reviews.href}
          className="ml-3 text-xs font-medium text-indigo-600 hover:text-indigo-500"
        >
          {reviews.totalCount} reviews
        </a>
      </div>
    </>
  );
};

const ProductDetails = ({ product }: { product: Product }) => {
  return (
    <div className="w-full">
      <div className="lg:col-span-2 lg:pr-8">
        <h1 className="pb-2 text-2xl font-extrabold tracking-tight text-gray-900 sm:text-3xl">
          {product?.title}
        </h1>
        <ProductReviews reviews={reviews} />
      </div>
      <div className="w-full lg:col-span-2 lg:border-b  lg:border-gray-200 lg:pt-2 lg:pb-8 ">
        <div>
          <h3 className="sr-only">Description</h3>

          <div className="space-y-4">
            <p className="text-base text-gray-500">{product?.description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
