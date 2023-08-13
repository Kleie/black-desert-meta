import { gql } from "@apollo/client";

export const CREATE_DIARY = gql`
  mutation Mutation($newDiary: CreateDiaryInput!) {
    createDiary(newDiary: $newDiary) {
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
    deleteDiary(id: $id)
  }
`;

export const DELETE_WEEKLY = gql`
  mutation Mutation($id: String!) {
    deleteWeekly(id: $id)
  }
`;

export const UPDATE_META_IS_COMPLETED = gql`
  mutation Mutation($id: String!, $metaType: MetaTypeInput) {
    updateMetaIsCompleted(id: $id, metaType: $metaType) {
      id
      title
      description
      isCompleted
      resetDay
      createdAt
    }
  }
`;
