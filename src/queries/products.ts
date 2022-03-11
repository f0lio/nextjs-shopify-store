import { gql } from "../utils";

export const HOME_PRODUCTS_QUERY = gql`
  {
    products(first: 10) {
      edges {
        node {
          title
          description
          images(first: 1) {
            edges {
              node {
                url
                altText
              }
            }
          }
          variants(first: 6) {
            edges {
              node {
                price
                image {
                  altText
                  url
                }
              }
            }
          }
        }
      }
    }
  }
`;

export const PRODUCT_QUERY = gql`
  query product($handle: String!) {
    product(handle: $handle) {
      title
      handle
      description
      images(first: 6) {
        edges {
          node {
            url
            altText
          }
        }
      }
      variants(first: 3) {
        edges {
          node {
            priceV2 {
              amount
              currencyCode
            }
            image {
              altText
              url
            }
          }
        }
      }
    }
  }
`;

export const PRODUCT_HANDLES_QUERY = gql`
  query products($count: Int!) {
    products(first: $count) {
      edges {
        node {
          handle
        }
      }
    }
  }
`;
