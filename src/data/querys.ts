import { gql } from "@apollo/client";

export const GET_USER = gql`
  query GET_USER {
    user {
      id
      username
      avatar
      dailies {
        id
        title
        description
        isCompleted
        resetDay
        createdAt
        updatedAt
      }
      weeklies {
        id
        title
        description
        isCompleted
        resetDay
        createdAt
        updatedAt
      }
      goals {
        id
        item {
          id
          name
          price
          tier
          image
          type
        }
      }
    }
  }
`;
