import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
  // uri: "http://localhost:4003/",
  uri: "http://localhost:4003/graphql",
  headers: {
    "ngrok-skip-browser-warning": "any",
    Authorization:
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI3MTY2NzYzMDQ5Nzk4ODYxNjEiLCJpYXQiOjE2OTE4NzE3MjYsImV4cCI6MTY5MjQ3NjUyNn0.Uj4rD7bdGCKjs6F1fg4tQpu33POzwBpBSGDh2-KsKXY",
  },
  cache: new InMemoryCache(),
});
