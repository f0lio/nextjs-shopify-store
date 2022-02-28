import react from "react";
import Image from "next/image";
import Link from "next/link";
// import { FaShippingFast } from "react-icons/fa";

const FeaturedCard = ({ title, imgSrc }) => (
  <article className="h-24 p-4">
    {/* <p className="text-center py-3 font-bold">{title}</p> */}
  </article>
);

export default () => (
  <section className="bg-gray-100 h-96 w-full flex flex-col-2 justify-center">
    <div className=" max-w-7xl w-full  flex items-center justify-between px-3">
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

