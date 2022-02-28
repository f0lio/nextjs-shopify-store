import Hero from "@components/Hero";
import Layout from "@components/Layout";
import HomeProducts from "@components/Lists";
import FeaturedProducts from "@components/Featured";
import { storefront, gql } from "utils";

export default function Home({ products }) {
  // console.log({ products });
  return (
    <Layout title="Home">
      <Hero />
      <FeaturedProducts />
      <HomeProducts />
    </Layout>
  );
}

const query = gql`
  {
    products(first: 10) {
      edges {
        node {
          title
          description
          images(first: 10) {
            edges {
              node {
                altText
                url
                height
                width
              }
            }
          }
        }
      }
    }
  }
`;

export async function getStaticProps() {
  const { data } = await storefront(query);

  return {
    props: {
      products: data.products,
    },
  };
}
