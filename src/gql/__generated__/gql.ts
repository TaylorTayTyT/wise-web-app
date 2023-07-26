/* eslint-disable */
import * as types from './graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 */
const documents = {
    "query BCGN($id: ID!) {\n  bcgn(id: $id) {\n    name\n    description\n    tags\n    services\n    groupIds\n    eventIds\n    reviews\n    contactInfo {\n      phone\n      email\n      website\n    }\n    location {\n      address\n      coordinates\n    }\n  }\n}\n\nquery BCGNsByRadius($input: BCGNsByRadius!) {\n  bcgnsByRadius(input: $input) {\n    _id\n    name\n    description\n    location {\n      address\n      coordinates\n    }\n  }\n}\n\nquery BCGNsByName($input: BCGNsByName!) {\n  bcgnsByName(input: $input) {\n    _id\n    name\n    description\n    location {\n      address\n      coordinates\n    }\n  }\n}\n\nquery BCGNsByTags($input: BCGNsByTags!) {\n  bcgnsByTags(input: $input) {\n    _id\n    name\n    description\n    location {\n      address\n      coordinates\n    }\n  }\n}\n\nmutation NewBCGN($input: NewBCGN!) {\n  newBCGN(input: $input)\n}\n\nmutation EditBCGN($input: EditBCGN!) {\n  editBCGN(input: $input)\n}": types.BcgnDocument,
    "query Event($id: ID!) {\n  event(id: $id) {\n    name\n    description\n    dateTime\n    location {\n      address\n      coordinates\n    }\n    contactInfo {\n      phone\n      email\n      website\n    }\n    rsvp\n    tags\n    organizerId\n  }\n}\n\nquery EventsByRadius($input: EventsByRadius!) {\n  eventsByRadius(input: $input) {\n    _id\n    name\n    description\n    tags\n    location {\n      address\n      coordinates\n    }\n  }\n}\n\nquery EventsByName($input: EventsByName!) {\n  eventsByName(input: $input) {\n    _id\n    name\n    description\n    tags\n    location {\n      address\n      coordinates\n    }\n  }\n}\n\nquery EventsByTags($input: EventsByTags!) {\n  eventsByTags(input: $input) {\n    _id\n    name\n    description\n    tags\n    location {\n      address\n      coordinates\n    }\n  }\n}\n\nquery EventsByOrganizer($input: EventsByOrganizer!) {\n  eventsByOrganizer(input: $input) {\n    _id\n    name\n    description\n    tags\n    location {\n      address\n      coordinates\n    }\n  }\n}\n\nmutation NewEvent($input: NewEvent!) {\n  newEvent(input: $input)\n}\n\nmutation EditEvent($input: EditEvent!) {\n  editEvent(input: $input)\n}": types.EventDocument,
    "query Group($id: ID!) {\n  group(id: $id) {\n    name\n    description\n    tags\n    activities\n    organizerId\n    eventIds\n    contactInfo {\n      phone\n      email\n      website\n    }\n    location {\n      address\n      coordinates\n    }\n  }\n}\n\nquery GroupsByRadius($input: GroupsByRadius!) {\n  groupsByRadius(input: $input) {\n    _id\n    name\n    description\n    location {\n      address\n      coordinates\n    }\n  }\n}\n\nquery GroupsByName($input: GroupsByName!) {\n  groupsByName(input: $input) {\n    _id\n    name\n    description\n    location {\n      address\n      coordinates\n    }\n  }\n}\n\nquery GroupsByTags($input: GroupsByTags!) {\n  groupsByTags(input: $input) {\n    _id\n    name\n    description\n    location {\n      address\n      coordinates\n    }\n  }\n}\n\nquery GroupsByOrganizer($input: GroupsByOrganizer!) {\n  groupsByOrganizer(input: $input) {\n    _id\n    name\n    description\n    tags\n    location {\n      address\n      coordinates\n    }\n  }\n}\n\nmutation NewGroup($input: NewGroup!) {\n  newGroup(input: $input)\n}\n\nmutation EditGroup($input: EditGroup!) {\n  editGroup(input: $input)\n}": types.GroupDocument,
};

/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = gql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function gql(source: string): unknown;

/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "query BCGN($id: ID!) {\n  bcgn(id: $id) {\n    name\n    description\n    tags\n    services\n    groupIds\n    eventIds\n    reviews\n    contactInfo {\n      phone\n      email\n      website\n    }\n    location {\n      address\n      coordinates\n    }\n  }\n}\n\nquery BCGNsByRadius($input: BCGNsByRadius!) {\n  bcgnsByRadius(input: $input) {\n    _id\n    name\n    description\n    location {\n      address\n      coordinates\n    }\n  }\n}\n\nquery BCGNsByName($input: BCGNsByName!) {\n  bcgnsByName(input: $input) {\n    _id\n    name\n    description\n    location {\n      address\n      coordinates\n    }\n  }\n}\n\nquery BCGNsByTags($input: BCGNsByTags!) {\n  bcgnsByTags(input: $input) {\n    _id\n    name\n    description\n    location {\n      address\n      coordinates\n    }\n  }\n}\n\nmutation NewBCGN($input: NewBCGN!) {\n  newBCGN(input: $input)\n}\n\nmutation EditBCGN($input: EditBCGN!) {\n  editBCGN(input: $input)\n}"): (typeof documents)["query BCGN($id: ID!) {\n  bcgn(id: $id) {\n    name\n    description\n    tags\n    services\n    groupIds\n    eventIds\n    reviews\n    contactInfo {\n      phone\n      email\n      website\n    }\n    location {\n      address\n      coordinates\n    }\n  }\n}\n\nquery BCGNsByRadius($input: BCGNsByRadius!) {\n  bcgnsByRadius(input: $input) {\n    _id\n    name\n    description\n    location {\n      address\n      coordinates\n    }\n  }\n}\n\nquery BCGNsByName($input: BCGNsByName!) {\n  bcgnsByName(input: $input) {\n    _id\n    name\n    description\n    location {\n      address\n      coordinates\n    }\n  }\n}\n\nquery BCGNsByTags($input: BCGNsByTags!) {\n  bcgnsByTags(input: $input) {\n    _id\n    name\n    description\n    location {\n      address\n      coordinates\n    }\n  }\n}\n\nmutation NewBCGN($input: NewBCGN!) {\n  newBCGN(input: $input)\n}\n\nmutation EditBCGN($input: EditBCGN!) {\n  editBCGN(input: $input)\n}"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "query Event($id: ID!) {\n  event(id: $id) {\n    name\n    description\n    dateTime\n    location {\n      address\n      coordinates\n    }\n    contactInfo {\n      phone\n      email\n      website\n    }\n    rsvp\n    tags\n    organizerId\n  }\n}\n\nquery EventsByRadius($input: EventsByRadius!) {\n  eventsByRadius(input: $input) {\n    _id\n    name\n    description\n    tags\n    location {\n      address\n      coordinates\n    }\n  }\n}\n\nquery EventsByName($input: EventsByName!) {\n  eventsByName(input: $input) {\n    _id\n    name\n    description\n    tags\n    location {\n      address\n      coordinates\n    }\n  }\n}\n\nquery EventsByTags($input: EventsByTags!) {\n  eventsByTags(input: $input) {\n    _id\n    name\n    description\n    tags\n    location {\n      address\n      coordinates\n    }\n  }\n}\n\nquery EventsByOrganizer($input: EventsByOrganizer!) {\n  eventsByOrganizer(input: $input) {\n    _id\n    name\n    description\n    tags\n    location {\n      address\n      coordinates\n    }\n  }\n}\n\nmutation NewEvent($input: NewEvent!) {\n  newEvent(input: $input)\n}\n\nmutation EditEvent($input: EditEvent!) {\n  editEvent(input: $input)\n}"): (typeof documents)["query Event($id: ID!) {\n  event(id: $id) {\n    name\n    description\n    dateTime\n    location {\n      address\n      coordinates\n    }\n    contactInfo {\n      phone\n      email\n      website\n    }\n    rsvp\n    tags\n    organizerId\n  }\n}\n\nquery EventsByRadius($input: EventsByRadius!) {\n  eventsByRadius(input: $input) {\n    _id\n    name\n    description\n    tags\n    location {\n      address\n      coordinates\n    }\n  }\n}\n\nquery EventsByName($input: EventsByName!) {\n  eventsByName(input: $input) {\n    _id\n    name\n    description\n    tags\n    location {\n      address\n      coordinates\n    }\n  }\n}\n\nquery EventsByTags($input: EventsByTags!) {\n  eventsByTags(input: $input) {\n    _id\n    name\n    description\n    tags\n    location {\n      address\n      coordinates\n    }\n  }\n}\n\nquery EventsByOrganizer($input: EventsByOrganizer!) {\n  eventsByOrganizer(input: $input) {\n    _id\n    name\n    description\n    tags\n    location {\n      address\n      coordinates\n    }\n  }\n}\n\nmutation NewEvent($input: NewEvent!) {\n  newEvent(input: $input)\n}\n\nmutation EditEvent($input: EditEvent!) {\n  editEvent(input: $input)\n}"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "query Group($id: ID!) {\n  group(id: $id) {\n    name\n    description\n    tags\n    activities\n    organizerId\n    eventIds\n    contactInfo {\n      phone\n      email\n      website\n    }\n    location {\n      address\n      coordinates\n    }\n  }\n}\n\nquery GroupsByRadius($input: GroupsByRadius!) {\n  groupsByRadius(input: $input) {\n    _id\n    name\n    description\n    location {\n      address\n      coordinates\n    }\n  }\n}\n\nquery GroupsByName($input: GroupsByName!) {\n  groupsByName(input: $input) {\n    _id\n    name\n    description\n    location {\n      address\n      coordinates\n    }\n  }\n}\n\nquery GroupsByTags($input: GroupsByTags!) {\n  groupsByTags(input: $input) {\n    _id\n    name\n    description\n    location {\n      address\n      coordinates\n    }\n  }\n}\n\nquery GroupsByOrganizer($input: GroupsByOrganizer!) {\n  groupsByOrganizer(input: $input) {\n    _id\n    name\n    description\n    tags\n    location {\n      address\n      coordinates\n    }\n  }\n}\n\nmutation NewGroup($input: NewGroup!) {\n  newGroup(input: $input)\n}\n\nmutation EditGroup($input: EditGroup!) {\n  editGroup(input: $input)\n}"): (typeof documents)["query Group($id: ID!) {\n  group(id: $id) {\n    name\n    description\n    tags\n    activities\n    organizerId\n    eventIds\n    contactInfo {\n      phone\n      email\n      website\n    }\n    location {\n      address\n      coordinates\n    }\n  }\n}\n\nquery GroupsByRadius($input: GroupsByRadius!) {\n  groupsByRadius(input: $input) {\n    _id\n    name\n    description\n    location {\n      address\n      coordinates\n    }\n  }\n}\n\nquery GroupsByName($input: GroupsByName!) {\n  groupsByName(input: $input) {\n    _id\n    name\n    description\n    location {\n      address\n      coordinates\n    }\n  }\n}\n\nquery GroupsByTags($input: GroupsByTags!) {\n  groupsByTags(input: $input) {\n    _id\n    name\n    description\n    location {\n      address\n      coordinates\n    }\n  }\n}\n\nquery GroupsByOrganizer($input: GroupsByOrganizer!) {\n  groupsByOrganizer(input: $input) {\n    _id\n    name\n    description\n    tags\n    location {\n      address\n      coordinates\n    }\n  }\n}\n\nmutation NewGroup($input: NewGroup!) {\n  newGroup(input: $input)\n}\n\nmutation EditGroup($input: EditGroup!) {\n  editGroup(input: $input)\n}"];

export function gql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;