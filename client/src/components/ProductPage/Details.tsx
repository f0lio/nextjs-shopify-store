import React from "react";

import { StarIcon } from "@heroicons/react/solid";
import cn from "classnames";

export const ProductReviews = ({ reviews }) => {
  return (
    <div className="mt-6">
      <h3 className="sr-only">Reviews</h3>
      <div className="flex items-center">
        <div className="flex items-center">
          {[0, 1, 2, 3, 4].map((rating) => (
            <StarIcon
              key={rating}
              className={cn(
                reviews.average > rating ? "text-gray-900" : "text-gray-200",
                "h-5 w-5 flex-shrink-0",
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
    </div>
  );
};

const ProductDetails = ({ product }) => {
  return (
    <div className="w-full px-4">
      <div className="lg:col-span-2 lg:pr-8">
        <h1 className="text-2xl font-extrabold tracking-tight text-gray-900 sm:text-3xl">
          {product?.name}
        </h1>
      </div>
      <div className="w-full lg:col-span-2 lg:border-b lg:border-gray-200 lg:pt-6 lg:pb-8 ">
        <div>
          <h3 className="sr-only">Description</h3>

          <div className="space-y-4">
            <p className="text-base text-gray-900">{product?.description}</p>
          </div>
        </div>

        <div className="mt-10">
          <h3 className="text-sm font-medium text-gray-900">Highlights</h3>

          <div className="mt-4">
            <ul role="list" className="list-disc space-y-2 pl-4 text-sm">
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
  );
};

export default ProductDetails;
