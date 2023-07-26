import { useLazyQuery, useMutation } from "@apollo/client";
import {
	EditGroupDocument,
	GroupDocument,
	GroupsByName,
	GroupsByNameDocument,
	GroupsByOrganizer,
	GroupsByOrganizerDocument,
	GroupsByRadius,
	GroupsByRadiusDocument,
	GroupsByTags,
	GroupsByTagsDocument,
	NewGroupDocument,
} from "../__generated__/graphql";

// Queries

const useGroup = (id: string) =>
	useLazyQuery(GroupDocument, { variables: { id } });

const useGroupsByRadius = (input: GroupsByRadius) =>
	useLazyQuery(GroupsByRadiusDocument, {
		variables: {
			input,
		},
	});

const useGroupsByName = (input: GroupsByName) =>
	useLazyQuery(GroupsByNameDocument, { variables: { input } });

const useGroupsByTags = (input: GroupsByTags) =>
	useLazyQuery(GroupsByTagsDocument, { variables: { input } });

const useGroupsByOrganizer = (input: GroupsByOrganizer) =>
	useLazyQuery(GroupsByOrganizerDocument, { variables: { input } });

export {
	useGroup,
	useGroupsByRadius,
	useGroupsByName,
	useGroupsByTags,
	useGroupsByOrganizer,
};

// Mutations

const useNewGroup = () => useMutation(NewGroupDocument);

const useEditGroup = () => useMutation(EditGroupDocument);

export { useNewGroup, useEditGroup };
