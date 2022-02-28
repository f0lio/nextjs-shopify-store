import React from "react";
import Head from "next/head";
import Navbar from "@components/Layout/Navbar";
import Footer from "@components/Layout/Footer";

type Props = {
  title: string;
  children: React.ReactNode;
};

const Layout: React.FC<Props> = ({ title, children }) => {
  return (
    <div>
      <Head>
        <title>{title} | eKom</title>
        <meta name="description" content="" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <main className="flex w-full flex-col items-center justify-center ">
        {children}
      </main>
      <Footer />
    </div>
  );
};
export default Layout;
