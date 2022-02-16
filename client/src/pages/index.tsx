import Hero from "@components/Hero";
import Layout from "@components/Layout";
import HomeProducts from "@components/Lists";

export default function Home() {
  return (
    <Layout title="Home">
      <Hero />
      <HomeProducts />
    </Layout>
  );
}
