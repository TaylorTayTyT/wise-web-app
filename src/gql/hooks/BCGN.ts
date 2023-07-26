import { useLazyQuery, useMutation } from "@apollo/client";
import {
	EditBcgnDocument,
	BcgnDocument,
	BcgNsByName,
	BcgNsByNameDocument,
	BcgNsByRadius,
	BcgNsByRadiusDocument,
	BcgNsByTags,
	BcgNsByTagsDocument,
	NewBcgnDocument,
	BcgnType,
} from "../__generated__/graphql";

// Queries

const useBusiness = (id: string) =>
	useLazyQuery(BcgnDocument, { variables: { id } });
const useCommunity = useBusiness;
const useGovernmentEntity = useBusiness;
const useNonProfit = useBusiness;

const useBCGNsByRadius = (type: BcgnType, input: BcgNsByRadius) =>
	useLazyQuery(BcgNsByRadiusDocument, {
		variables: {
			input: { ...input, type },
		},
	});
const useBusinessesByRadius = (input: BcgNsByRadius) =>
	useBCGNsByRadius(BcgnType.Business, input);
const useCommunitiesByRadius = (input: BcgNsByRadius) =>
	useBCGNsByRadius(BcgnType.Community, input);
const useGovernmentEntitiesByRadius = (input: BcgNsByRadius) =>
	useBCGNsByRadius(BcgnType.GovernmentEntity, input);
const useNonProfitsByRadius = (input: BcgNsByRadius) =>
	useBCGNsByRadius(BcgnType.NonProfit, input);

const useBCGNsByName = (type: BcgnType, input: BcgNsByName) =>
	useLazyQuery(BcgNsByNameDocument, {
		variables: { input: { ...input, type } },
	});
const useBusinessesByName = (input: BcgNsByName) =>
	useBCGNsByName(BcgnType.Business, input);
const useCommunitiesByName = (input: BcgNsByName) =>
	useBCGNsByName(BcgnType.Community, input);
const useGovernmentEntitiesByName = (input: BcgNsByName) =>
	useBCGNsByName(BcgnType.GovernmentEntity, input);
const useNonProfitsByName = (input: BcgNsByName) =>
	useBCGNsByName(BcgnType.NonProfit, input);

const useBCGNsByTags = (type: BcgnType, input: BcgNsByTags) =>
	useLazyQuery(BcgNsByTagsDocument, { variables: { input } });
const useBusinessesByTags = (input: BcgNsByTags) =>
	useBCGNsByTags(BcgnType.Business, input);
const useCommunitiesByTags = (input: BcgNsByTags) =>
	useBCGNsByTags(BcgnType.Community, input);
const useGovernmentEntitiesByTags = (input: BcgNsByTags) =>
	useBCGNsByTags(BcgnType.GovernmentEntity, input);
const useNonProfitsByTags = (input: BcgNsByTags) =>
	useBCGNsByTags(BcgnType.NonProfit, input);

export {
	useBusiness,
	useCommunity,
	useGovernmentEntity,
	useNonProfit,
	useBusinessesByName,
	useBusinessesByRadius,
	useBusinessesByTags,
	useCommunitiesByName,
	useCommunitiesByRadius,
	useCommunitiesByTags,
	useGovernmentEntitiesByName,
	useGovernmentEntitiesByRadius,
	useGovernmentEntitiesByTags,
	useNonProfitsByName,
	useNonProfitsByRadius,
	useNonProfitsByTags,
};

// Mutations

const useNewBCGN = () => useMutation(NewBcgnDocument);

const useEditBCGN = () => useMutation(EditBcgnDocument);

export { useNewBCGN, useEditBCGN };
