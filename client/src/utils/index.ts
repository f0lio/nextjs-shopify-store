export const gql = String.raw;

export const storefront = async (query: string) => {
  console.log(process.env.API_URL);
  const res = await fetch(process.env.API_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "X-Shopify-Storefront-Access-Token": process.env.ACCESS_TOKEN,
    },
    body: JSON.stringify({ query }),
  });
  return res.json();
};
