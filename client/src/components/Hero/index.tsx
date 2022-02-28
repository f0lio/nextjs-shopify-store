import react from "react";
import Image from "next/image";
import Link from "next/link";

export default () => (
  <div className=" bg-white grid grid-cols-1 lg:grid-cols-2 overflow-hidden w-full max-w-7xl  py-16 sm:py-24">
    <section className="lg:text-left flex items-center px-4  ">
      <div className="flex-col">
        <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
          <span className="">Always in</span>{" "}
          <span className=" text-indigo-600">style!</span>
        </h1>
        <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
          Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem
          cupidatat commodo. Elit sunt amet fugiat veniam occaecat fugiat
          aliqua.
        </p>
        <div className="mt-5 sm:mt-8 sm:flex  lg:justify-start">
          <div>
            <Link href="/explore">
              <button className=" flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-2xl text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10">
                Explore
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>

    <figure className="py-4">
      <img
        className="h-full w-full object-cover  "
        src="https://images.unsplash.com/photo-1488998427799-e3362cec87c3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&h=4870"
        alt="Featured product"
      />
    </figure>
  </div>
);
