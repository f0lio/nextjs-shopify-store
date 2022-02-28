import react from "react";
import Image from "next/image";
import Link from "next/link";
// import { FaShippingFast } from "react-icons/fa";

const FeaturedCard = ({ title, imgSrc }) => (
  <article className="h-24 p-4">
    {/* <p className="py-3 font-bold text-center">{title}</p> */}
  </article>
);

export default () => (
  <section className="flex-col-2 flex h-96 w-full justify-center bg-gray-100">
    <div className="flex w-full max-w-7xl items-center justify-between px-3">
      <FeaturedCard title="Lorem">
        {/* <FaShippingFast className="w-full h-full" /> */}
      </FeaturedCard>
      <FeaturedCard title="Lorem">
        {/* <FaShippingFast className="w-full h-full" /> */}
      </FeaturedCard>
      <FeaturedCard title="Lorem">
        {/* <FaShippingFast className="w-full h-full" /> */}
      </FeaturedCard>
    </div>
  </section>
);
