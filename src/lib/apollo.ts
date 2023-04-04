import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
  uri: `https://api-sa-east-1.hygraph.com/v2/clfwfbwrb53m101upc30jfrna/master`,
  cache: new InMemoryCache(),
});
