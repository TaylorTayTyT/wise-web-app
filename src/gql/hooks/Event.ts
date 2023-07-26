import { useLazyQuery, useMutation } from "@apollo/client";
import {
	EditEventDocument,
	EventDocument,
	EventsByName,
	EventsByNameDocument,
	EventsByOrganizer,
	EventsByOrganizerDocument,
	EventsByRadius,
	EventsByRadiusDocument,
	EventsByTags,
	EventsByTagsDocument,
	NewEventDocument,
} from "../__generated__/graphql";

// Queries

const useEvent = (id: string) =>
	useLazyQuery(EventDocument, { variables: { id } });

const useEventsByRadius = (input: EventsByRadius) =>
	useLazyQuery(EventsByRadiusDocument, {
		variables: {
			input,
		},
	});

const useEventsByName = (input: EventsByName) =>
	useLazyQuery(EventsByNameDocument, { variables: { input } });

const useEventsByTags = (input: EventsByTags) =>
	useLazyQuery(EventsByTagsDocument, { variables: { input } });

const useEventsByOrganizer = (input: EventsByOrganizer) =>
	useLazyQuery(EventsByOrganizerDocument, { variables: { input } });

export {
	useEvent,
	useEventsByRadius,
	useEventsByName,
	useEventsByTags,
	useEventsByOrganizer,
};

// Mutations

const useNewEvent = () => useMutation(NewEventDocument);

const useEditEvent = () => useMutation(EditEventDocument);

export { useNewEvent, useEditEvent };
