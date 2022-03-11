import React from "react";
import Link from "next/link";
import slugify from "slugify";
import { Button } from "@components/common";
import { Product } from "@interfaces/index";

/* TODO:
    -Seperate products by category
        -two rows for each category
*/

export const ProductCard: React.FC<Product> = ({
  product,
}: {
  product: Product;
}) => {
  const images = product.images.edges.map(({ node: { url, altText } }) => ({
    url,
    altText,
  }));
  return (
    <Link href={"products/" + slugify(product.title, { lower: true })}>
      <div key={product.id} className="group relative cursor-pointer">
        <div className="min-h-80 aspect-w-1 aspect-h-1 w-full overflow-hidden  rounded-md border bg-gray-200 group-hover:opacity-75 lg:aspect-none lg:h-80">
          <img
            src={images[0]?.url}
            alt={images[0]?.altText}
            className="h-full w-full object-cover object-center lg:h-full lg:w-full"
          />
        </div>
        <div className="mt-4 flex justify-between">
          <div>
            <h3 className="text-sm text-gray-700">
              <a href={product.url}>
                <span aria-hidden="true" className="absolute inset-0" />
                {product.title}
              </a>
            </h3>
            <p className="mt-1 text-sm text-gray-500">{product?.color}</p>
          </div>
          <p className="text-sm font-medium text-gray-900">{product?.price}</p>
        </div>
      </div>
    </Link>
  );
};

export default ({ products, name }: { products: Product[]; name: String }) => {
  return (
    <ul className="flex w-full justify-center ">
      <div className="w-full px-4 py-16 sm:py-24 lg:max-w-7xl">
        <h2 className="text-2xl font-extrabold tracking-tight text-gray-900">
          {name}
        </h2>

        <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {products?.map((product, key) => (
            <ProductCard key={key} product={product} />
          ))}
        </div>
        <div className="flex justify-center py-8">
          <Button>Show More</Button>
        </div>
      </div>
    </ul>
  );
};
