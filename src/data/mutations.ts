import { gql } from "@apollo/client";

export const CREATE_DIARY = gql`
  mutation Mutation($newDaily: CreateDailyInput!) {
    createDaily(newDaily: $newDaily) {
      id
      userId
      title
      description
      isCompleted
      resetDay
      createdAt
    }
  }
`;

export const CREATE_WEEKLY = gql`
  mutation Mutation($newWeekly: CreateWeeklyInput!) {
    createWeekly(newWeekly: $newWeekly) {
      id
      userId
      title
      description
      isCompleted
      resetDay
      createdAt
    }
  }
`;

export const DELETE_DIARY = gql`
  mutation Mutation($id: String!) {
    deleteDaily(id: $id)
  }
`;

export const DELETE_WEEKLY = gql`
  mutation Mutation($id: String!) {
    deleteWeekly(id: $id)
  }
`;

export const UPDATE_DAILY_IS_COMPLETED = gql`
  mutation Mutation($updateDailyIsCompletedId: String!) {
    updateDailyIsCompleted(id: $updateDailyIsCompletedId) {
      id
      userId
      title
      description
      isCompleted
      resetDay
      createdAt
      updatedAt
    }
  }
`;

export const UPDATE_WEEKLY_IS_COMPLETED = gql`
  mutation Mutation($updateDailyIsCompletedId: String!) {
    updateDailyIsCompleted(id: $updateDailyIsCompletedId) {
      id
      userId
      title
      description
      isCompleted
      resetDay
      createdAt
      updatedAt
    }
  }
`;
