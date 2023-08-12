/* eslint-disable */
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
};

export type CreateDiaryInput = {
  description: Scalars['String']['input'];
  resetDay: Scalars['String']['input'];
  title: Scalars['String']['input'];
  userId: Scalars['String']['input'];
};

export type CreateWeeklyInput = {
  description: Scalars['String']['input'];
  resetDay: Scalars['String']['input'];
  title: Scalars['String']['input'];
  userId: Scalars['String']['input'];
};

export type DiaryAndWeekly = {
  __typename?: 'DiaryAndWeekly';
  createdAt: Scalars['String']['output'];
  description: Scalars['String']['output'];
  id: Scalars['String']['output'];
  isCompleted: Scalars['Boolean']['output'];
  resetDay: Scalars['String']['output'];
  title: Scalars['String']['output'];
  updatedAt: Scalars['String']['output'];
  userId: Scalars['String']['output'];
};

export type Mutation = {
  __typename?: 'Mutation';
  _empty?: Maybe<Scalars['Boolean']['output']>;
  createDiary: DiaryAndWeekly;
  createWeekly: DiaryAndWeekly;
  deleteDiary: Scalars['Boolean']['output'];
  deleteWeekly: Scalars['Boolean']['output'];
  updateDiary: DiaryAndWeekly;
  updateWeekly: DiaryAndWeekly;
};


export type MutationCreateDiaryArgs = {
  data: CreateDiaryInput;
};


export type MutationCreateWeeklyArgs = {
  data: CreateWeeklyInput;
};


export type MutationDeleteDiaryArgs = {
  id: Scalars['String']['input'];
};


export type MutationDeleteWeeklyArgs = {
  id: Scalars['String']['input'];
};


export type MutationUpdateDiaryArgs = {
  data: UpdateDiaryInput;
  id: Scalars['String']['input'];
};


export type MutationUpdateWeeklyArgs = {
  data: UpdateWeeklyInput;
  id: Scalars['String']['input'];
};

export type Query = {
  __typename?: 'Query';
  _empty?: Maybe<Scalars['Boolean']['output']>;
  diaries: Array<DiaryAndWeekly>;
  user: User;
  users: Array<User>;
  weeklies: Array<DiaryAndWeekly>;
};


export type QueryDiariesArgs = {
  userId: Scalars['String']['input'];
};


export type QueryUserArgs = {
  id: Scalars['String']['input'];
};


export type QueryWeekliesArgs = {
  userId: Scalars['String']['input'];
};

export type UpdateDiaryInput = {
  description?: InputMaybe<Scalars['String']['input']>;
  isCompleted?: InputMaybe<Scalars['Boolean']['input']>;
  resetDay?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateWeeklyInput = {
  description?: InputMaybe<Scalars['String']['input']>;
  isCompleted?: InputMaybe<Scalars['Boolean']['input']>;
  resetDay?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
};

export type User = {
  __typename?: 'User';
  avatar: Scalars['String']['output'];
  createdAt: Scalars['String']['output'];
  diaries: Array<DiaryAndWeekly>;
  discord_id: Scalars['String']['output'];
  id: Scalars['String']['output'];
  updatedAt: Scalars['String']['output'];
  username: Scalars['String']['output'];
  weeklies: Array<DiaryAndWeekly>;
};
