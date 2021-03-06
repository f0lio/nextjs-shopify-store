import React from "react";
import Head from "next/head";
import Navbar from "@components/common/layout/Navbar";
import Footer from "@components/common/layout/Footer";

type Props = {
  children: React.ReactNode;
  title?: string;
};

const Layout: React.FC<Props> = ({ title, children }) => {
  return (
    <div>
      <Head>
        {title ? <title>eKom - {title} </title> : <title>eKom</title>}
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
