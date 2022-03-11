export const gql = String.raw;

export const storefront = async (query: string, variables?: Object) => {
  try {
    const res = await fetch(process.env.API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-Shopify-Storefront-Access-Token": process.env.ACCESS_TOKEN,
      },
      body: JSON.stringify({
        query,
        variables: { ...variables },
      }),
    });
    return await res.json();
  } catch (error) {
    console.log("RRROOOOOTTT:", error);
    throw new Error(error);
  }
};
