import { gql } from "@apollo/client";

export const GET_USER = gql`
  query Query($userId: String!) {
    user(id: $userId) {
      diaries {
        id
        title
        description
        isCompleted
        resetDay
        createdAt
      }
      weeklies {
        id
        title
        description
        isCompleted
        resetDay
        createdAt
      }
      id
    }
  }
`;
