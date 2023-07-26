/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
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
  Time: { input: Date; output: Date; }
  URL: { input: URL; output: URL; }
};

export enum AccountType {
  Admin = 'Admin',
  EndUser = 'EndUser',
  Team = 'Team',
  Wise = 'WISE'
}

export type Bcgn = MongoRow & {
  __typename?: 'BCGN';
  _id: Scalars['ID']['output'];
  adminIds: Array<Scalars['ID']['output']>;
  contactInfo: ContactInfo;
  createdAt: Scalars['Time']['output'];
  description: Scalars['String']['output'];
  eventIds: Array<Scalars['ID']['output']>;
  groupIds: Array<Scalars['ID']['output']>;
  image?: Maybe<Scalars['URL']['output']>;
  location?: Maybe<Location>;
  name: Scalars['String']['output'];
  reviews: Scalars['URL']['output'];
  services: Array<Scalars['String']['output']>;
  tags: Array<Scalars['String']['output']>;
  type: BcgnType;
  updatedAt: Scalars['Time']['output'];
};

export enum BcgnType {
  Business = 'Business',
  Community = 'Community',
  GovernmentEntity = 'GovernmentEntity',
  NonProfit = 'NonProfit'
}

export type BcgNsByName = {
  language?: InputMaybe<Language>;
  name: Scalars['String']['input'];
  sortDir?: InputMaybe<SortDir>;
  type: BcgnType;
};

export type BcgNsByOrganizer = {
  id: Scalars['ID']['input'];
  language?: InputMaybe<Language>;
  sortDir?: InputMaybe<SortDir>;
};

export type BcgNsByRadius = {
  language?: InputMaybe<Language>;
  location?: InputMaybe<LocationInput>;
  radius: Radius;
  sortDir?: InputMaybe<SortDir>;
  type: BcgnType;
};

export type BcgNsByTags = {
  language?: InputMaybe<Language>;
  sortDir?: InputMaybe<SortDir>;
  tags: Array<Scalars['String']['input']>;
  type: BcgnType;
};

export type ContactInfo = {
  __typename?: 'ContactInfo';
  email?: Maybe<Scalars['String']['output']>;
  phone?: Maybe<Scalars['String']['output']>;
  website?: Maybe<Scalars['String']['output']>;
};

export type ContactInfoInput = {
  email?: InputMaybe<Scalars['String']['input']>;
  phone?: InputMaybe<Scalars['String']['input']>;
  website?: InputMaybe<Scalars['String']['input']>;
};

export type EditBcgn = {
  _id: Scalars['ID']['input'];
  adminIDs?: InputMaybe<Array<Scalars['ID']['input']>>;
  contactInfo?: InputMaybe<ContactInfoInput>;
  description?: InputMaybe<Scalars['String']['input']>;
  eventIds?: InputMaybe<Array<Scalars['ID']['input']>>;
  image?: InputMaybe<Scalars['URL']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  reviews?: InputMaybe<Scalars['URL']['input']>;
  services?: InputMaybe<Array<Scalars['String']['input']>>;
  tags?: InputMaybe<Array<Scalars['String']['input']>>;
};

export type EditEvent = {
  contactInfo?: InputMaybe<ContactInfoInput>;
  dateTime?: InputMaybe<Scalars['Time']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['ID']['input'];
  image?: InputMaybe<Scalars['URL']['input']>;
  isPublic?: InputMaybe<Scalars['Boolean']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  tags?: InputMaybe<Array<Scalars['String']['input']>>;
};

export type EditGroup = {
  activities?: InputMaybe<Array<Scalars['String']['input']>>;
  contactInfo?: InputMaybe<ContactInfoInput>;
  description?: InputMaybe<Scalars['String']['input']>;
  eventIds?: InputMaybe<Array<Scalars['ID']['input']>>;
  id: Scalars['ID']['input'];
  image?: InputMaybe<Scalars['URL']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  tags?: InputMaybe<Array<Scalars['String']['input']>>;
};

export type EditUser = {
  accountType: AccountType;
  bio?: InputMaybe<Scalars['String']['input']>;
  blockedIds?: InputMaybe<Array<Scalars['ID']['input']>>;
  eventIds?: InputMaybe<Array<Scalars['ID']['input']>>;
  firstName?: InputMaybe<Scalars['String']['input']>;
  friendIds?: InputMaybe<Array<Scalars['ID']['input']>>;
  groupIds?: InputMaybe<Array<Scalars['ID']['input']>>;
  id: Scalars['ID']['input'];
  image?: InputMaybe<Scalars['URL']['input']>;
  incomingFriendRequestIds?: InputMaybe<Array<Scalars['ID']['input']>>;
  lastLocation?: InputMaybe<LocationInput>;
  lastName?: InputMaybe<Scalars['String']['input']>;
  outgoingFriendRequestIds?: InputMaybe<Array<Scalars['ID']['input']>>;
  settings?: InputMaybe<SettingsInput>;
  tags?: InputMaybe<Array<Scalars['String']['input']>>;
};

export type Event = MongoRow & {
  __typename?: 'Event';
  _id: Scalars['ID']['output'];
  contactInfo: ContactInfo;
  createdAt: Scalars['Time']['output'];
  dateTime: Scalars['Time']['output'];
  description: Scalars['String']['output'];
  hostGroupId?: Maybe<Scalars['ID']['output']>;
  image?: Maybe<Scalars['URL']['output']>;
  isPublic: Scalars['Boolean']['output'];
  location?: Maybe<Location>;
  name: Scalars['String']['output'];
  organizerId: Scalars['ID']['output'];
  rsvp?: Maybe<Scalars['URL']['output']>;
  tags: Array<Scalars['String']['output']>;
  updatedAt: Scalars['Time']['output'];
};

export type EventsByName = {
  language?: InputMaybe<Language>;
  name: Scalars['String']['input'];
  sortDir?: InputMaybe<SortDir>;
};

export type EventsByOrganizer = {
  id: Scalars['ID']['input'];
  language?: InputMaybe<Language>;
  sortDir?: InputMaybe<SortDir>;
};

export type EventsByRadius = {
  language?: InputMaybe<Language>;
  location?: InputMaybe<LocationInput>;
  radius: Radius;
  sortDir?: InputMaybe<SortDir>;
};

export type EventsByTags = {
  language?: InputMaybe<Language>;
  sortDir?: InputMaybe<SortDir>;
  tags: Array<Scalars['String']['input']>;
};

export type Group = MongoRow & {
  __typename?: 'Group';
  _id: Scalars['ID']['output'];
  activities: Array<Scalars['String']['output']>;
  contactInfo: ContactInfo;
  createdAt: Scalars['Time']['output'];
  description: Scalars['String']['output'];
  eventIds: Array<Scalars['ID']['output']>;
  image?: Maybe<Scalars['URL']['output']>;
  location?: Maybe<Location>;
  name: Scalars['String']['output'];
  organizerId: Scalars['ID']['output'];
  tags: Array<Scalars['String']['output']>;
  updatedAt: Scalars['Time']['output'];
};

export type GroupsByName = {
  language?: InputMaybe<Language>;
  name: Scalars['String']['input'];
  sortDir?: InputMaybe<SortDir>;
};

export type GroupsByOrganizer = {
  id: Scalars['ID']['input'];
  language?: InputMaybe<Language>;
  sortDir?: InputMaybe<SortDir>;
};

export type GroupsByRadius = {
  language?: InputMaybe<Language>;
  location?: InputMaybe<LocationInput>;
  radius: Radius;
  sortDir?: InputMaybe<SortDir>;
};

export type GroupsByTags = {
  language?: InputMaybe<Language>;
  sortDir?: InputMaybe<SortDir>;
  tags: Array<Scalars['String']['input']>;
};

export enum Language {
  Arabic = 'Arabic',
  Chinese = 'Chinese',
  English = 'English',
  Filipino = 'Filipino',
  French = 'French',
  German = 'German',
  Greek = 'Greek',
  Hindi = 'Hindi',
  Italian = 'Italian',
  Japanese = 'Japanese',
  Korean = 'Korean',
  Polish = 'Polish',
  Russian = 'Russian',
  Spanish = 'Spanish',
  Vietnamese = 'Vietnamese'
}

export type Location = {
  __typename?: 'Location';
  address?: Maybe<Scalars['String']['output']>;
  coordinates: Array<Scalars['Float']['output']>;
};

export type LocationInput = {
  address?: InputMaybe<Scalars['String']['input']>;
  coordinates: Array<Scalars['Float']['input']>;
};

export type MongoRow = {
  _id: Scalars['ID']['output'];
  createdAt: Scalars['Time']['output'];
  updatedAt: Scalars['Time']['output'];
};

export type Mutation = {
  __typename?: 'Mutation';
  editBCGN?: Maybe<Scalars['Boolean']['output']>;
  editEvent?: Maybe<Scalars['Boolean']['output']>;
  editGroup?: Maybe<Scalars['Boolean']['output']>;
  editUser?: Maybe<Scalars['Boolean']['output']>;
  newBCGN?: Maybe<Scalars['ID']['output']>;
  newEvent?: Maybe<Scalars['ID']['output']>;
  newGroup?: Maybe<Scalars['ID']['output']>;
  newUser?: Maybe<Scalars['ID']['output']>;
  wipeCollection?: Maybe<Scalars['Boolean']['output']>;
};


export type MutationEditBcgnArgs = {
  input: EditBcgn;
};


export type MutationEditEventArgs = {
  input: EditEvent;
};


export type MutationEditGroupArgs = {
  input: EditGroup;
};


export type MutationEditUserArgs = {
  input: EditUser;
};


export type MutationNewBcgnArgs = {
  input: NewBcgn;
};


export type MutationNewEventArgs = {
  input: NewEvent;
};


export type MutationNewGroupArgs = {
  input: NewGroup;
};


export type MutationNewUserArgs = {
  input: NewUser;
};


export type MutationWipeCollectionArgs = {
  collection: Scalars['String']['input'];
};

export type NewBcgn = {
  adminIDs: Array<Scalars['ID']['input']>;
  contactInfo: ContactInfoInput;
  description: Scalars['String']['input'];
  image?: InputMaybe<Scalars['URL']['input']>;
  location?: InputMaybe<LocationInput>;
  name: Scalars['String']['input'];
  reviews: Scalars['URL']['input'];
  services: Array<Scalars['String']['input']>;
  tags: Array<Scalars['String']['input']>;
  type: BcgnType;
};

export type NewEvent = {
  contactInfo: ContactInfoInput;
  dateTime: Scalars['Time']['input'];
  description: Scalars['String']['input'];
  hostGroupId?: InputMaybe<Scalars['ID']['input']>;
  image?: InputMaybe<Scalars['URL']['input']>;
  isPublic: Scalars['Boolean']['input'];
  location?: InputMaybe<LocationInput>;
  name: Scalars['String']['input'];
  organizerId: Scalars['ID']['input'];
  tags: Array<Scalars['String']['input']>;
};

export type NewGroup = {
  activities: Array<Scalars['String']['input']>;
  contactInfo: ContactInfoInput;
  description: Scalars['String']['input'];
  image?: InputMaybe<Scalars['URL']['input']>;
  location?: InputMaybe<LocationInput>;
  name: Scalars['String']['input'];
  organizerId: Scalars['ID']['input'];
  tags: Array<Scalars['String']['input']>;
};

export type NewUser = {
  accountType: AccountType;
  bio: Scalars['String']['input'];
  contactInfo: ContactInfoInput;
  firstName: Scalars['String']['input'];
  image: Scalars['URL']['input'];
  lastLocation: LocationInput;
  lastName: Scalars['String']['input'];
  outgoingFriendRequestIds?: InputMaybe<Array<Scalars['ID']['input']>>;
  settings?: InputMaybe<SettingsInput>;
  tags: Array<Scalars['String']['input']>;
};

export type Query = {
  __typename?: 'Query';
  allBCGNs: Array<Bcgn>;
  allEvents: Array<Event>;
  allGroups: Array<Group>;
  allUsers: Array<User>;
  bcgn?: Maybe<Bcgn>;
  bcgnsByName: Array<Maybe<Bcgn>>;
  bcgnsByRadius: Array<Maybe<Bcgn>>;
  bcgnsByTags: Array<Maybe<Bcgn>>;
  event?: Maybe<Event>;
  eventsByName: Array<Maybe<Event>>;
  eventsByOrganizer: Array<Maybe<Event>>;
  eventsByRadius: Array<Maybe<Event>>;
  eventsByTags: Array<Maybe<Event>>;
  group?: Maybe<Group>;
  groupsByName: Array<Maybe<Group>>;
  groupsByOrganizer: Array<Maybe<Group>>;
  groupsByRadius: Array<Maybe<Group>>;
  groupsByTags: Array<Maybe<Group>>;
  user?: Maybe<User>;
};


export type QueryAllBcgNsArgs = {
  type: BcgnType;
};


export type QueryBcgnArgs = {
  id: Scalars['ID']['input'];
  language?: InputMaybe<Language>;
};


export type QueryBcgnsByNameArgs = {
  input?: InputMaybe<BcgNsByName>;
};


export type QueryBcgnsByRadiusArgs = {
  input?: InputMaybe<BcgNsByRadius>;
};


export type QueryBcgnsByTagsArgs = {
  input?: InputMaybe<BcgNsByTags>;
};


export type QueryEventArgs = {
  id: Scalars['ID']['input'];
  language?: InputMaybe<Language>;
};


export type QueryEventsByNameArgs = {
  input?: InputMaybe<EventsByName>;
};


export type QueryEventsByOrganizerArgs = {
  input?: InputMaybe<EventsByOrganizer>;
};


export type QueryEventsByRadiusArgs = {
  input?: InputMaybe<EventsByRadius>;
};


export type QueryEventsByTagsArgs = {
  input?: InputMaybe<EventsByTags>;
};


export type QueryGroupArgs = {
  id: Scalars['ID']['input'];
  language?: InputMaybe<Language>;
};


export type QueryGroupsByNameArgs = {
  input?: InputMaybe<GroupsByName>;
};


export type QueryGroupsByOrganizerArgs = {
  input?: InputMaybe<GroupsByOrganizer>;
};


export type QueryGroupsByRadiusArgs = {
  input?: InputMaybe<GroupsByRadius>;
};


export type QueryGroupsByTagsArgs = {
  input?: InputMaybe<GroupsByTags>;
};


export type QueryUserArgs = {
  id: Scalars['ID']['input'];
};

export enum Radius {
  Lr_01 = 'LR_01',
  Lr_05 = 'LR_05',
  Lr_10 = 'LR_10',
  Lr_20 = 'LR_20',
  Lr_30 = 'LR_30',
  Lr_40 = 'LR_40',
  Lr_50 = 'LR_50',
  LrVir = 'LR_VIR'
}

export type Settings = {
  __typename?: 'Settings';
  language?: Maybe<Language>;
};

export type SettingsInput = {
  language?: InputMaybe<Language>;
};

export type SignUp = {
  eventId?: InputMaybe<Scalars['ID']['input']>;
  groupId?: InputMaybe<Scalars['ID']['input']>;
  userId: Scalars['ID']['input'];
};

export enum SortDir {
  Asc = 'ASC',
  Dsc = 'DSC'
}

export type User = MongoRow & {
  __typename?: 'User';
  _id: Scalars['ID']['output'];
  accountType: AccountType;
  bio: Scalars['String']['output'];
  blockedIds: Array<Scalars['ID']['output']>;
  contactInfo: ContactInfo;
  createdAt: Scalars['Time']['output'];
  eventIds: Array<Scalars['ID']['output']>;
  firstName: Scalars['String']['output'];
  friendIds: Array<Scalars['ID']['output']>;
  groupIds: Array<Scalars['ID']['output']>;
  image: Scalars['URL']['output'];
  incomingFriendRequestIds: Array<Scalars['ID']['output']>;
  lastLocation: Location;
  lastName: Scalars['String']['output'];
  outgoingFriendRequestIds: Array<Scalars['ID']['output']>;
  settings: Settings;
  tags: Array<Scalars['String']['output']>;
  updatedAt: Scalars['Time']['output'];
};

export type BcgnQueryVariables = Exact<{
  id: Scalars['ID']['input'];
}>;


export type BcgnQuery = { __typename?: 'Query', bcgn?: { __typename?: 'BCGN', name: string, description: string, tags: Array<string>, services: Array<string>, groupIds: Array<string>, eventIds: Array<string>, reviews: URL, contactInfo: { __typename?: 'ContactInfo', phone?: string | null, email?: string | null, website?: string | null }, location?: { __typename?: 'Location', address?: string | null, coordinates: Array<number> } | null } | null };

export type BcgNsByRadiusQueryVariables = Exact<{
  input: BcgNsByRadius;
}>;


export type BcgNsByRadiusQuery = { __typename?: 'Query', bcgnsByRadius: Array<{ __typename?: 'BCGN', _id: string, name: string, description: string, location?: { __typename?: 'Location', address?: string | null, coordinates: Array<number> } | null } | null> };

export type BcgNsByNameQueryVariables = Exact<{
  input: BcgNsByName;
}>;


export type BcgNsByNameQuery = { __typename?: 'Query', bcgnsByName: Array<{ __typename?: 'BCGN', _id: string, name: string, description: string, location?: { __typename?: 'Location', address?: string | null, coordinates: Array<number> } | null } | null> };

export type BcgNsByTagsQueryVariables = Exact<{
  input: BcgNsByTags;
}>;


export type BcgNsByTagsQuery = { __typename?: 'Query', bcgnsByTags: Array<{ __typename?: 'BCGN', _id: string, name: string, description: string, location?: { __typename?: 'Location', address?: string | null, coordinates: Array<number> } | null } | null> };

export type NewBcgnMutationVariables = Exact<{
  input: NewBcgn;
}>;


export type NewBcgnMutation = { __typename?: 'Mutation', newBCGN?: string | null };

export type EditBcgnMutationVariables = Exact<{
  input: EditBcgn;
}>;


export type EditBcgnMutation = { __typename?: 'Mutation', editBCGN?: boolean | null };

export type EventQueryVariables = Exact<{
  id: Scalars['ID']['input'];
}>;


export type EventQuery = { __typename?: 'Query', event?: { __typename?: 'Event', name: string, description: string, dateTime: Date, rsvp?: URL | null, tags: Array<string>, organizerId: string, location?: { __typename?: 'Location', address?: string | null, coordinates: Array<number> } | null, contactInfo: { __typename?: 'ContactInfo', phone?: string | null, email?: string | null, website?: string | null } } | null };

export type EventsByRadiusQueryVariables = Exact<{
  input: EventsByRadius;
}>;


export type EventsByRadiusQuery = { __typename?: 'Query', eventsByRadius: Array<{ __typename?: 'Event', _id: string, name: string, description: string, tags: Array<string>, location?: { __typename?: 'Location', address?: string | null, coordinates: Array<number> } | null } | null> };

export type EventsByNameQueryVariables = Exact<{
  input: EventsByName;
}>;


export type EventsByNameQuery = { __typename?: 'Query', eventsByName: Array<{ __typename?: 'Event', _id: string, name: string, description: string, tags: Array<string>, location?: { __typename?: 'Location', address?: string | null, coordinates: Array<number> } | null } | null> };

export type EventsByTagsQueryVariables = Exact<{
  input: EventsByTags;
}>;


export type EventsByTagsQuery = { __typename?: 'Query', eventsByTags: Array<{ __typename?: 'Event', _id: string, name: string, description: string, tags: Array<string>, location?: { __typename?: 'Location', address?: string | null, coordinates: Array<number> } | null } | null> };

export type EventsByOrganizerQueryVariables = Exact<{
  input: EventsByOrganizer;
}>;


export type EventsByOrganizerQuery = { __typename?: 'Query', eventsByOrganizer: Array<{ __typename?: 'Event', _id: string, name: string, description: string, tags: Array<string>, location?: { __typename?: 'Location', address?: string | null, coordinates: Array<number> } | null } | null> };

export type NewEventMutationVariables = Exact<{
  input: NewEvent;
}>;


export type NewEventMutation = { __typename?: 'Mutation', newEvent?: string | null };

export type EditEventMutationVariables = Exact<{
  input: EditEvent;
}>;


export type EditEventMutation = { __typename?: 'Mutation', editEvent?: boolean | null };

export type GroupQueryVariables = Exact<{
  id: Scalars['ID']['input'];
}>;


export type GroupQuery = { __typename?: 'Query', group?: { __typename?: 'Group', name: string, description: string, tags: Array<string>, activities: Array<string>, organizerId: string, eventIds: Array<string>, contactInfo: { __typename?: 'ContactInfo', phone?: string | null, email?: string | null, website?: string | null }, location?: { __typename?: 'Location', address?: string | null, coordinates: Array<number> } | null } | null };

export type GroupsByRadiusQueryVariables = Exact<{
  input: GroupsByRadius;
}>;


export type GroupsByRadiusQuery = { __typename?: 'Query', groupsByRadius: Array<{ __typename?: 'Group', _id: string, name: string, description: string, location?: { __typename?: 'Location', address?: string | null, coordinates: Array<number> } | null } | null> };

export type GroupsByNameQueryVariables = Exact<{
  input: GroupsByName;
}>;


export type GroupsByNameQuery = { __typename?: 'Query', groupsByName: Array<{ __typename?: 'Group', _id: string, name: string, description: string, location?: { __typename?: 'Location', address?: string | null, coordinates: Array<number> } | null } | null> };

export type GroupsByTagsQueryVariables = Exact<{
  input: GroupsByTags;
}>;


export type GroupsByTagsQuery = { __typename?: 'Query', groupsByTags: Array<{ __typename?: 'Group', _id: string, name: string, description: string, location?: { __typename?: 'Location', address?: string | null, coordinates: Array<number> } | null } | null> };

export type GroupsByOrganizerQueryVariables = Exact<{
  input: GroupsByOrganizer;
}>;


export type GroupsByOrganizerQuery = { __typename?: 'Query', groupsByOrganizer: Array<{ __typename?: 'Group', _id: string, name: string, description: string, tags: Array<string>, location?: { __typename?: 'Location', address?: string | null, coordinates: Array<number> } | null } | null> };

export type NewGroupMutationVariables = Exact<{
  input: NewGroup;
}>;


export type NewGroupMutation = { __typename?: 'Mutation', newGroup?: string | null };

export type EditGroupMutationVariables = Exact<{
  input: EditGroup;
}>;


export type EditGroupMutation = { __typename?: 'Mutation', editGroup?: boolean | null };


export const BcgnDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"BCGN"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"bcgn"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"tags"}},{"kind":"Field","name":{"kind":"Name","value":"services"}},{"kind":"Field","name":{"kind":"Name","value":"groupIds"}},{"kind":"Field","name":{"kind":"Name","value":"eventIds"}},{"kind":"Field","name":{"kind":"Name","value":"reviews"}},{"kind":"Field","name":{"kind":"Name","value":"contactInfo"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"phone"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"website"}}]}},{"kind":"Field","name":{"kind":"Name","value":"location"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"address"}},{"kind":"Field","name":{"kind":"Name","value":"coordinates"}}]}}]}}]}}]} as unknown as DocumentNode<BcgnQuery, BcgnQueryVariables>;
export const BcgNsByRadiusDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"BCGNsByRadius"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"BCGNsByRadius"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"bcgnsByRadius"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"_id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"location"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"address"}},{"kind":"Field","name":{"kind":"Name","value":"coordinates"}}]}}]}}]}}]} as unknown as DocumentNode<BcgNsByRadiusQuery, BcgNsByRadiusQueryVariables>;
export const BcgNsByNameDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"BCGNsByName"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"BCGNsByName"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"bcgnsByName"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"_id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"location"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"address"}},{"kind":"Field","name":{"kind":"Name","value":"coordinates"}}]}}]}}]}}]} as unknown as DocumentNode<BcgNsByNameQuery, BcgNsByNameQueryVariables>;
export const BcgNsByTagsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"BCGNsByTags"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"BCGNsByTags"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"bcgnsByTags"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"_id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"location"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"address"}},{"kind":"Field","name":{"kind":"Name","value":"coordinates"}}]}}]}}]}}]} as unknown as DocumentNode<BcgNsByTagsQuery, BcgNsByTagsQueryVariables>;
export const NewBcgnDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"NewBCGN"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"NewBCGN"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"newBCGN"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}]}]}}]} as unknown as DocumentNode<NewBcgnMutation, NewBcgnMutationVariables>;
export const EditBcgnDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"EditBCGN"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"EditBCGN"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"editBCGN"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}]}]}}]} as unknown as DocumentNode<EditBcgnMutation, EditBcgnMutationVariables>;
export const EventDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"Event"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"event"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"dateTime"}},{"kind":"Field","name":{"kind":"Name","value":"location"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"address"}},{"kind":"Field","name":{"kind":"Name","value":"coordinates"}}]}},{"kind":"Field","name":{"kind":"Name","value":"contactInfo"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"phone"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"website"}}]}},{"kind":"Field","name":{"kind":"Name","value":"rsvp"}},{"kind":"Field","name":{"kind":"Name","value":"tags"}},{"kind":"Field","name":{"kind":"Name","value":"organizerId"}}]}}]}}]} as unknown as DocumentNode<EventQuery, EventQueryVariables>;
export const EventsByRadiusDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"EventsByRadius"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"EventsByRadius"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"eventsByRadius"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"_id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"tags"}},{"kind":"Field","name":{"kind":"Name","value":"location"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"address"}},{"kind":"Field","name":{"kind":"Name","value":"coordinates"}}]}}]}}]}}]} as unknown as DocumentNode<EventsByRadiusQuery, EventsByRadiusQueryVariables>;
export const EventsByNameDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"EventsByName"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"EventsByName"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"eventsByName"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"_id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"tags"}},{"kind":"Field","name":{"kind":"Name","value":"location"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"address"}},{"kind":"Field","name":{"kind":"Name","value":"coordinates"}}]}}]}}]}}]} as unknown as DocumentNode<EventsByNameQuery, EventsByNameQueryVariables>;
export const EventsByTagsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"EventsByTags"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"EventsByTags"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"eventsByTags"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"_id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"tags"}},{"kind":"Field","name":{"kind":"Name","value":"location"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"address"}},{"kind":"Field","name":{"kind":"Name","value":"coordinates"}}]}}]}}]}}]} as unknown as DocumentNode<EventsByTagsQuery, EventsByTagsQueryVariables>;
export const EventsByOrganizerDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"EventsByOrganizer"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"EventsByOrganizer"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"eventsByOrganizer"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"_id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"tags"}},{"kind":"Field","name":{"kind":"Name","value":"location"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"address"}},{"kind":"Field","name":{"kind":"Name","value":"coordinates"}}]}}]}}]}}]} as unknown as DocumentNode<EventsByOrganizerQuery, EventsByOrganizerQueryVariables>;
export const NewEventDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"NewEvent"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"NewEvent"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"newEvent"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}]}]}}]} as unknown as DocumentNode<NewEventMutation, NewEventMutationVariables>;
export const EditEventDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"EditEvent"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"EditEvent"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"editEvent"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}]}]}}]} as unknown as DocumentNode<EditEventMutation, EditEventMutationVariables>;
export const GroupDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"Group"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"group"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"tags"}},{"kind":"Field","name":{"kind":"Name","value":"activities"}},{"kind":"Field","name":{"kind":"Name","value":"organizerId"}},{"kind":"Field","name":{"kind":"Name","value":"eventIds"}},{"kind":"Field","name":{"kind":"Name","value":"contactInfo"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"phone"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"website"}}]}},{"kind":"Field","name":{"kind":"Name","value":"location"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"address"}},{"kind":"Field","name":{"kind":"Name","value":"coordinates"}}]}}]}}]}}]} as unknown as DocumentNode<GroupQuery, GroupQueryVariables>;
export const GroupsByRadiusDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GroupsByRadius"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"GroupsByRadius"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"groupsByRadius"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"_id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"location"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"address"}},{"kind":"Field","name":{"kind":"Name","value":"coordinates"}}]}}]}}]}}]} as unknown as DocumentNode<GroupsByRadiusQuery, GroupsByRadiusQueryVariables>;
export const GroupsByNameDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GroupsByName"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"GroupsByName"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"groupsByName"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"_id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"location"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"address"}},{"kind":"Field","name":{"kind":"Name","value":"coordinates"}}]}}]}}]}}]} as unknown as DocumentNode<GroupsByNameQuery, GroupsByNameQueryVariables>;
export const GroupsByTagsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GroupsByTags"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"GroupsByTags"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"groupsByTags"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"_id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"location"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"address"}},{"kind":"Field","name":{"kind":"Name","value":"coordinates"}}]}}]}}]}}]} as unknown as DocumentNode<GroupsByTagsQuery, GroupsByTagsQueryVariables>;
export const GroupsByOrganizerDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GroupsByOrganizer"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"GroupsByOrganizer"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"groupsByOrganizer"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"_id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"tags"}},{"kind":"Field","name":{"kind":"Name","value":"location"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"address"}},{"kind":"Field","name":{"kind":"Name","value":"coordinates"}}]}}]}}]}}]} as unknown as DocumentNode<GroupsByOrganizerQuery, GroupsByOrganizerQueryVariables>;
export const NewGroupDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"NewGroup"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"NewGroup"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"newGroup"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}]}]}}]} as unknown as DocumentNode<NewGroupMutation, NewGroupMutationVariables>;
export const EditGroupDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"EditGroup"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"EditGroup"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"editGroup"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}]}]}}]} as unknown as DocumentNode<EditGroupMutation, EditGroupMutationVariables>;