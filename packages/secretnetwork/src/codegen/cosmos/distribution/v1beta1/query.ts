import { PageRequest, PageRequestAmino, PageRequestSDKType, PageResponse, PageResponseAmino, PageResponseSDKType } from "../../base/query/v1beta1/pagination";
import { Params, ParamsAmino, ParamsSDKType, ValidatorOutstandingRewards, ValidatorOutstandingRewardsAmino, ValidatorOutstandingRewardsSDKType, ValidatorAccumulatedCommission, ValidatorAccumulatedCommissionAmino, ValidatorAccumulatedCommissionSDKType, ValidatorSlashEvent, ValidatorSlashEventAmino, ValidatorSlashEventSDKType, DelegationDelegatorReward, DelegationDelegatorRewardAmino, DelegationDelegatorRewardSDKType } from "./distribution";
import { DecCoin, DecCoinAmino, DecCoinSDKType } from "../../base/v1beta1/coin";
import { BinaryWriter } from "../../../binary";
import { isSet } from "../../../helpers";
import { Decimal } from "@cosmjs/math";
/** QueryRestakeThresholdRequest is the request type for the Query/Params RPC method. */
export interface QueryRestakeEntriesRequest {
  delegator: string;
}
export interface QueryRestakeEntriesRequestProtoMsg {
  typeUrl: "/cosmos.distribution.v1beta1.QueryRestakeEntriesRequest";
  value: Uint8Array;
}
/** QueryRestakeThresholdRequest is the request type for the Query/Params RPC method. */
export interface QueryRestakeEntriesRequestAmino {
  delegator?: string;
}
export interface QueryRestakeEntriesRequestAminoMsg {
  type: "cosmos-sdk/QueryRestakeEntriesRequest";
  value: QueryRestakeEntriesRequestAmino;
}
/** QueryRestakeThresholdRequest is the request type for the Query/Params RPC method. */
export interface QueryRestakeEntriesRequestSDKType {
  delegator: string;
}
/** QueryRestakeThresholdResponse is the request type for the Query/Params RPC method. */
export interface QueryRestakingEntriesResponse {
  /** threshold = minimum amount in uscrt that you need to have delegated to enable restaking */
  validators: string[];
}
export interface QueryRestakingEntriesResponseProtoMsg {
  typeUrl: "/cosmos.distribution.v1beta1.QueryRestakingEntriesResponse";
  value: Uint8Array;
}
/** QueryRestakeThresholdResponse is the request type for the Query/Params RPC method. */
export interface QueryRestakingEntriesResponseAmino {
  /** threshold = minimum amount in uscrt that you need to have delegated to enable restaking */
  validators?: string[];
}
export interface QueryRestakingEntriesResponseAminoMsg {
  type: "cosmos-sdk/QueryRestakingEntriesResponse";
  value: QueryRestakingEntriesResponseAmino;
}
/** QueryRestakeThresholdResponse is the request type for the Query/Params RPC method. */
export interface QueryRestakingEntriesResponseSDKType {
  validators: string[];
}
/** QueryRestakeThresholdRequest is the request type for the Query/Params RPC method. */
export interface QueryRestakeThresholdRequest {}
export interface QueryRestakeThresholdRequestProtoMsg {
  typeUrl: "/cosmos.distribution.v1beta1.QueryRestakeThresholdRequest";
  value: Uint8Array;
}
/** QueryRestakeThresholdRequest is the request type for the Query/Params RPC method. */
export interface QueryRestakeThresholdRequestAmino {}
export interface QueryRestakeThresholdRequestAminoMsg {
  type: "cosmos-sdk/QueryRestakeThresholdRequest";
  value: QueryRestakeThresholdRequestAmino;
}
/** QueryRestakeThresholdRequest is the request type for the Query/Params RPC method. */
export interface QueryRestakeThresholdRequestSDKType {}
/** QueryRestakeThresholdResponse is the request type for the Query/Params RPC method. */
export interface QueryRestakeThresholdResponse {
  /** threshold = minimum amount in uscrt that you need to have delegated to enable restaking */
  threshold: string;
}
export interface QueryRestakeThresholdResponseProtoMsg {
  typeUrl: "/cosmos.distribution.v1beta1.QueryRestakeThresholdResponse";
  value: Uint8Array;
}
/** QueryRestakeThresholdResponse is the request type for the Query/Params RPC method. */
export interface QueryRestakeThresholdResponseAmino {
  /** threshold = minimum amount in uscrt that you need to have delegated to enable restaking */
  threshold?: string;
}
export interface QueryRestakeThresholdResponseAminoMsg {
  type: "cosmos-sdk/QueryRestakeThresholdResponse";
  value: QueryRestakeThresholdResponseAmino;
}
/** QueryRestakeThresholdResponse is the request type for the Query/Params RPC method. */
export interface QueryRestakeThresholdResponseSDKType {
  threshold: string;
}
/** QueryParamsRequest is the request type for the Query/Params RPC method. */
export interface QueryParamsRequest {}
export interface QueryParamsRequestProtoMsg {
  typeUrl: "/cosmos.distribution.v1beta1.QueryParamsRequest";
  value: Uint8Array;
}
/** QueryParamsRequest is the request type for the Query/Params RPC method. */
export interface QueryParamsRequestAmino {}
export interface QueryParamsRequestAminoMsg {
  type: "cosmos-sdk/QueryParamsRequest";
  value: QueryParamsRequestAmino;
}
/** QueryParamsRequest is the request type for the Query/Params RPC method. */
export interface QueryParamsRequestSDKType {}
/** QueryParamsResponse is the response type for the Query/Params RPC method. */
export interface QueryParamsResponse {
  /** params defines the parameters of the module. */
  params: Params;
}
export interface QueryParamsResponseProtoMsg {
  typeUrl: "/cosmos.distribution.v1beta1.QueryParamsResponse";
  value: Uint8Array;
}
/** QueryParamsResponse is the response type for the Query/Params RPC method. */
export interface QueryParamsResponseAmino {
  /** params defines the parameters of the module. */
  params?: ParamsAmino;
}
export interface QueryParamsResponseAminoMsg {
  type: "cosmos-sdk/QueryParamsResponse";
  value: QueryParamsResponseAmino;
}
/** QueryParamsResponse is the response type for the Query/Params RPC method. */
export interface QueryParamsResponseSDKType {
  params: ParamsSDKType;
}
/**
 * QueryValidatorOutstandingRewardsRequest is the request type for the
 * Query/ValidatorOutstandingRewards RPC method.
 */
export interface QueryValidatorOutstandingRewardsRequest {
  /** validator_address defines the validator address to query for. */
  validatorAddress: string;
}
export interface QueryValidatorOutstandingRewardsRequestProtoMsg {
  typeUrl: "/cosmos.distribution.v1beta1.QueryValidatorOutstandingRewardsRequest";
  value: Uint8Array;
}
/**
 * QueryValidatorOutstandingRewardsRequest is the request type for the
 * Query/ValidatorOutstandingRewards RPC method.
 */
export interface QueryValidatorOutstandingRewardsRequestAmino {
  /** validator_address defines the validator address to query for. */
  validator_address?: string;
}
export interface QueryValidatorOutstandingRewardsRequestAminoMsg {
  type: "cosmos-sdk/QueryValidatorOutstandingRewardsRequest";
  value: QueryValidatorOutstandingRewardsRequestAmino;
}
/**
 * QueryValidatorOutstandingRewardsRequest is the request type for the
 * Query/ValidatorOutstandingRewards RPC method.
 */
export interface QueryValidatorOutstandingRewardsRequestSDKType {
  validator_address: string;
}
/**
 * QueryValidatorOutstandingRewardsResponse is the response type for the
 * Query/ValidatorOutstandingRewards RPC method.
 */
export interface QueryValidatorOutstandingRewardsResponse {
  rewards: ValidatorOutstandingRewards;
}
export interface QueryValidatorOutstandingRewardsResponseProtoMsg {
  typeUrl: "/cosmos.distribution.v1beta1.QueryValidatorOutstandingRewardsResponse";
  value: Uint8Array;
}
/**
 * QueryValidatorOutstandingRewardsResponse is the response type for the
 * Query/ValidatorOutstandingRewards RPC method.
 */
export interface QueryValidatorOutstandingRewardsResponseAmino {
  rewards?: ValidatorOutstandingRewardsAmino;
}
export interface QueryValidatorOutstandingRewardsResponseAminoMsg {
  type: "cosmos-sdk/QueryValidatorOutstandingRewardsResponse";
  value: QueryValidatorOutstandingRewardsResponseAmino;
}
/**
 * QueryValidatorOutstandingRewardsResponse is the response type for the
 * Query/ValidatorOutstandingRewards RPC method.
 */
export interface QueryValidatorOutstandingRewardsResponseSDKType {
  rewards: ValidatorOutstandingRewardsSDKType;
}
/**
 * QueryValidatorCommissionRequest is the request type for the
 * Query/ValidatorCommission RPC method
 */
export interface QueryValidatorCommissionRequest {
  /** validator_address defines the validator address to query for. */
  validatorAddress: string;
}
export interface QueryValidatorCommissionRequestProtoMsg {
  typeUrl: "/cosmos.distribution.v1beta1.QueryValidatorCommissionRequest";
  value: Uint8Array;
}
/**
 * QueryValidatorCommissionRequest is the request type for the
 * Query/ValidatorCommission RPC method
 */
export interface QueryValidatorCommissionRequestAmino {
  /** validator_address defines the validator address to query for. */
  validator_address?: string;
}
export interface QueryValidatorCommissionRequestAminoMsg {
  type: "cosmos-sdk/QueryValidatorCommissionRequest";
  value: QueryValidatorCommissionRequestAmino;
}
/**
 * QueryValidatorCommissionRequest is the request type for the
 * Query/ValidatorCommission RPC method
 */
export interface QueryValidatorCommissionRequestSDKType {
  validator_address: string;
}
/**
 * QueryValidatorCommissionResponse is the response type for the
 * Query/ValidatorCommission RPC method
 */
export interface QueryValidatorCommissionResponse {
  /** commission defines the commision the validator received. */
  commission: ValidatorAccumulatedCommission;
}
export interface QueryValidatorCommissionResponseProtoMsg {
  typeUrl: "/cosmos.distribution.v1beta1.QueryValidatorCommissionResponse";
  value: Uint8Array;
}
/**
 * QueryValidatorCommissionResponse is the response type for the
 * Query/ValidatorCommission RPC method
 */
export interface QueryValidatorCommissionResponseAmino {
  /** commission defines the commision the validator received. */
  commission?: ValidatorAccumulatedCommissionAmino;
}
export interface QueryValidatorCommissionResponseAminoMsg {
  type: "cosmos-sdk/QueryValidatorCommissionResponse";
  value: QueryValidatorCommissionResponseAmino;
}
/**
 * QueryValidatorCommissionResponse is the response type for the
 * Query/ValidatorCommission RPC method
 */
export interface QueryValidatorCommissionResponseSDKType {
  commission: ValidatorAccumulatedCommissionSDKType;
}
/**
 * QueryValidatorSlashesRequest is the request type for the
 * Query/ValidatorSlashes RPC method
 */
export interface QueryValidatorSlashesRequest {
  /** validator_address defines the validator address to query for. */
  validatorAddress: string;
  /** starting_height defines the optional starting height to query the slashes. */
  startingHeight: bigint;
  /** starting_height defines the optional ending height to query the slashes. */
  endingHeight: bigint;
  /** pagination defines an optional pagination for the request. */
  pagination?: PageRequest;
}
export interface QueryValidatorSlashesRequestProtoMsg {
  typeUrl: "/cosmos.distribution.v1beta1.QueryValidatorSlashesRequest";
  value: Uint8Array;
}
/**
 * QueryValidatorSlashesRequest is the request type for the
 * Query/ValidatorSlashes RPC method
 */
export interface QueryValidatorSlashesRequestAmino {
  /** validator_address defines the validator address to query for. */
  validator_address?: string;
  /** starting_height defines the optional starting height to query the slashes. */
  starting_height?: string;
  /** starting_height defines the optional ending height to query the slashes. */
  ending_height?: string;
  /** pagination defines an optional pagination for the request. */
  pagination?: PageRequestAmino;
}
export interface QueryValidatorSlashesRequestAminoMsg {
  type: "cosmos-sdk/QueryValidatorSlashesRequest";
  value: QueryValidatorSlashesRequestAmino;
}
/**
 * QueryValidatorSlashesRequest is the request type for the
 * Query/ValidatorSlashes RPC method
 */
export interface QueryValidatorSlashesRequestSDKType {
  validator_address: string;
  starting_height: bigint;
  ending_height: bigint;
  pagination?: PageRequestSDKType;
}
/**
 * QueryValidatorSlashesResponse is the response type for the
 * Query/ValidatorSlashes RPC method.
 */
export interface QueryValidatorSlashesResponse {
  /** slashes defines the slashes the validator received. */
  slashes: ValidatorSlashEvent[];
  /** pagination defines the pagination in the response. */
  pagination?: PageResponse;
}
export interface QueryValidatorSlashesResponseProtoMsg {
  typeUrl: "/cosmos.distribution.v1beta1.QueryValidatorSlashesResponse";
  value: Uint8Array;
}
/**
 * QueryValidatorSlashesResponse is the response type for the
 * Query/ValidatorSlashes RPC method.
 */
export interface QueryValidatorSlashesResponseAmino {
  /** slashes defines the slashes the validator received. */
  slashes?: ValidatorSlashEventAmino[];
  /** pagination defines the pagination in the response. */
  pagination?: PageResponseAmino;
}
export interface QueryValidatorSlashesResponseAminoMsg {
  type: "cosmos-sdk/QueryValidatorSlashesResponse";
  value: QueryValidatorSlashesResponseAmino;
}
/**
 * QueryValidatorSlashesResponse is the response type for the
 * Query/ValidatorSlashes RPC method.
 */
export interface QueryValidatorSlashesResponseSDKType {
  slashes: ValidatorSlashEventSDKType[];
  pagination?: PageResponseSDKType;
}
/**
 * QueryDelegationRewardsRequest is the request type for the
 * Query/DelegationRewards RPC method.
 */
export interface QueryDelegationRewardsRequest {
  /** delegator_address defines the delegator address to query for. */
  delegatorAddress: string;
  /** validator_address defines the validator address to query for. */
  validatorAddress: string;
}
export interface QueryDelegationRewardsRequestProtoMsg {
  typeUrl: "/cosmos.distribution.v1beta1.QueryDelegationRewardsRequest";
  value: Uint8Array;
}
/**
 * QueryDelegationRewardsRequest is the request type for the
 * Query/DelegationRewards RPC method.
 */
export interface QueryDelegationRewardsRequestAmino {
  /** delegator_address defines the delegator address to query for. */
  delegator_address?: string;
  /** validator_address defines the validator address to query for. */
  validator_address?: string;
}
export interface QueryDelegationRewardsRequestAminoMsg {
  type: "cosmos-sdk/QueryDelegationRewardsRequest";
  value: QueryDelegationRewardsRequestAmino;
}
/**
 * QueryDelegationRewardsRequest is the request type for the
 * Query/DelegationRewards RPC method.
 */
export interface QueryDelegationRewardsRequestSDKType {
  delegator_address: string;
  validator_address: string;
}
/**
 * QueryDelegationRewardsResponse is the response type for the
 * Query/DelegationRewards RPC method.
 */
export interface QueryDelegationRewardsResponse {
  /** rewards defines the rewards accrued by a delegation. */
  rewards: DecCoin[];
}
export interface QueryDelegationRewardsResponseProtoMsg {
  typeUrl: "/cosmos.distribution.v1beta1.QueryDelegationRewardsResponse";
  value: Uint8Array;
}
/**
 * QueryDelegationRewardsResponse is the response type for the
 * Query/DelegationRewards RPC method.
 */
export interface QueryDelegationRewardsResponseAmino {
  /** rewards defines the rewards accrued by a delegation. */
  rewards?: DecCoinAmino[];
}
export interface QueryDelegationRewardsResponseAminoMsg {
  type: "cosmos-sdk/QueryDelegationRewardsResponse";
  value: QueryDelegationRewardsResponseAmino;
}
/**
 * QueryDelegationRewardsResponse is the response type for the
 * Query/DelegationRewards RPC method.
 */
export interface QueryDelegationRewardsResponseSDKType {
  rewards: DecCoinSDKType[];
}
/**
 * QueryDelegationTotalRewardsRequest is the request type for the
 * Query/DelegationTotalRewards RPC method.
 */
export interface QueryDelegationTotalRewardsRequest {
  /** delegator_address defines the delegator address to query for. */
  delegatorAddress: string;
}
export interface QueryDelegationTotalRewardsRequestProtoMsg {
  typeUrl: "/cosmos.distribution.v1beta1.QueryDelegationTotalRewardsRequest";
  value: Uint8Array;
}
/**
 * QueryDelegationTotalRewardsRequest is the request type for the
 * Query/DelegationTotalRewards RPC method.
 */
export interface QueryDelegationTotalRewardsRequestAmino {
  /** delegator_address defines the delegator address to query for. */
  delegator_address?: string;
}
export interface QueryDelegationTotalRewardsRequestAminoMsg {
  type: "cosmos-sdk/QueryDelegationTotalRewardsRequest";
  value: QueryDelegationTotalRewardsRequestAmino;
}
/**
 * QueryDelegationTotalRewardsRequest is the request type for the
 * Query/DelegationTotalRewards RPC method.
 */
export interface QueryDelegationTotalRewardsRequestSDKType {
  delegator_address: string;
}
/**
 * QueryDelegationTotalRewardsResponse is the response type for the
 * Query/DelegationTotalRewards RPC method.
 */
export interface QueryDelegationTotalRewardsResponse {
  /** rewards defines all the rewards accrued by a delegator. */
  rewards: DelegationDelegatorReward[];
  /** total defines the sum of all the rewards. */
  total: DecCoin[];
}
export interface QueryDelegationTotalRewardsResponseProtoMsg {
  typeUrl: "/cosmos.distribution.v1beta1.QueryDelegationTotalRewardsResponse";
  value: Uint8Array;
}
/**
 * QueryDelegationTotalRewardsResponse is the response type for the
 * Query/DelegationTotalRewards RPC method.
 */
export interface QueryDelegationTotalRewardsResponseAmino {
  /** rewards defines all the rewards accrued by a delegator. */
  rewards?: DelegationDelegatorRewardAmino[];
  /** total defines the sum of all the rewards. */
  total?: DecCoinAmino[];
}
export interface QueryDelegationTotalRewardsResponseAminoMsg {
  type: "cosmos-sdk/QueryDelegationTotalRewardsResponse";
  value: QueryDelegationTotalRewardsResponseAmino;
}
/**
 * QueryDelegationTotalRewardsResponse is the response type for the
 * Query/DelegationTotalRewards RPC method.
 */
export interface QueryDelegationTotalRewardsResponseSDKType {
  rewards: DelegationDelegatorRewardSDKType[];
  total: DecCoinSDKType[];
}
/**
 * QueryDelegatorValidatorsRequest is the request type for the
 * Query/DelegatorValidators RPC method.
 */
export interface QueryDelegatorValidatorsRequest {
  /** delegator_address defines the delegator address to query for. */
  delegatorAddress: string;
}
export interface QueryDelegatorValidatorsRequestProtoMsg {
  typeUrl: "/cosmos.distribution.v1beta1.QueryDelegatorValidatorsRequest";
  value: Uint8Array;
}
/**
 * QueryDelegatorValidatorsRequest is the request type for the
 * Query/DelegatorValidators RPC method.
 */
export interface QueryDelegatorValidatorsRequestAmino {
  /** delegator_address defines the delegator address to query for. */
  delegator_address?: string;
}
export interface QueryDelegatorValidatorsRequestAminoMsg {
  type: "cosmos-sdk/QueryDelegatorValidatorsRequest";
  value: QueryDelegatorValidatorsRequestAmino;
}
/**
 * QueryDelegatorValidatorsRequest is the request type for the
 * Query/DelegatorValidators RPC method.
 */
export interface QueryDelegatorValidatorsRequestSDKType {
  delegator_address: string;
}
/**
 * QueryDelegatorValidatorsResponse is the response type for the
 * Query/DelegatorValidators RPC method.
 */
export interface QueryDelegatorValidatorsResponse {
  /** validators defines the validators a delegator is delegating for. */
  validators: string[];
}
export interface QueryDelegatorValidatorsResponseProtoMsg {
  typeUrl: "/cosmos.distribution.v1beta1.QueryDelegatorValidatorsResponse";
  value: Uint8Array;
}
/**
 * QueryDelegatorValidatorsResponse is the response type for the
 * Query/DelegatorValidators RPC method.
 */
export interface QueryDelegatorValidatorsResponseAmino {
  /** validators defines the validators a delegator is delegating for. */
  validators?: string[];
}
export interface QueryDelegatorValidatorsResponseAminoMsg {
  type: "cosmos-sdk/QueryDelegatorValidatorsResponse";
  value: QueryDelegatorValidatorsResponseAmino;
}
/**
 * QueryDelegatorValidatorsResponse is the response type for the
 * Query/DelegatorValidators RPC method.
 */
export interface QueryDelegatorValidatorsResponseSDKType {
  validators: string[];
}
/**
 * QueryDelegatorWithdrawAddressRequest is the request type for the
 * Query/DelegatorWithdrawAddress RPC method.
 */
export interface QueryDelegatorWithdrawAddressRequest {
  /** delegator_address defines the delegator address to query for. */
  delegatorAddress: string;
}
export interface QueryDelegatorWithdrawAddressRequestProtoMsg {
  typeUrl: "/cosmos.distribution.v1beta1.QueryDelegatorWithdrawAddressRequest";
  value: Uint8Array;
}
/**
 * QueryDelegatorWithdrawAddressRequest is the request type for the
 * Query/DelegatorWithdrawAddress RPC method.
 */
export interface QueryDelegatorWithdrawAddressRequestAmino {
  /** delegator_address defines the delegator address to query for. */
  delegator_address?: string;
}
export interface QueryDelegatorWithdrawAddressRequestAminoMsg {
  type: "cosmos-sdk/QueryDelegatorWithdrawAddressRequest";
  value: QueryDelegatorWithdrawAddressRequestAmino;
}
/**
 * QueryDelegatorWithdrawAddressRequest is the request type for the
 * Query/DelegatorWithdrawAddress RPC method.
 */
export interface QueryDelegatorWithdrawAddressRequestSDKType {
  delegator_address: string;
}
/**
 * QueryDelegatorWithdrawAddressResponse is the response type for the
 * Query/DelegatorWithdrawAddress RPC method.
 */
export interface QueryDelegatorWithdrawAddressResponse {
  /** withdraw_address defines the delegator address to query for. */
  withdrawAddress: string;
}
export interface QueryDelegatorWithdrawAddressResponseProtoMsg {
  typeUrl: "/cosmos.distribution.v1beta1.QueryDelegatorWithdrawAddressResponse";
  value: Uint8Array;
}
/**
 * QueryDelegatorWithdrawAddressResponse is the response type for the
 * Query/DelegatorWithdrawAddress RPC method.
 */
export interface QueryDelegatorWithdrawAddressResponseAmino {
  /** withdraw_address defines the delegator address to query for. */
  withdraw_address?: string;
}
export interface QueryDelegatorWithdrawAddressResponseAminoMsg {
  type: "cosmos-sdk/QueryDelegatorWithdrawAddressResponse";
  value: QueryDelegatorWithdrawAddressResponseAmino;
}
/**
 * QueryDelegatorWithdrawAddressResponse is the response type for the
 * Query/DelegatorWithdrawAddress RPC method.
 */
export interface QueryDelegatorWithdrawAddressResponseSDKType {
  withdraw_address: string;
}
/**
 * QueryFoundationTaxRequest is the request type for the
 * Query/FoundationTax RPC method.
 */
export interface QueryFoundationTaxRequest {}
export interface QueryFoundationTaxRequestProtoMsg {
  typeUrl: "/cosmos.distribution.v1beta1.QueryFoundationTaxRequest";
  value: Uint8Array;
}
/**
 * QueryFoundationTaxRequest is the request type for the
 * Query/FoundationTax RPC method.
 */
export interface QueryFoundationTaxRequestAmino {}
export interface QueryFoundationTaxRequestAminoMsg {
  type: "cosmos-sdk/QueryFoundationTaxRequest";
  value: QueryFoundationTaxRequestAmino;
}
/**
 * QueryFoundationTaxRequest is the request type for the
 * Query/FoundationTax RPC method.
 */
export interface QueryFoundationTaxRequestSDKType {}
/**
 * QueryDelegatorWithdrawAddressResponse is the response type for the
 * Query/DelegatorWithdrawAddress RPC method.
 */
export interface QueryFoundationTaxResponse {
  /** withdraw_address defines the delegator address to query for. */
  tax: string;
  foundationAddress: string;
}
export interface QueryFoundationTaxResponseProtoMsg {
  typeUrl: "/cosmos.distribution.v1beta1.QueryFoundationTaxResponse";
  value: Uint8Array;
}
/**
 * QueryDelegatorWithdrawAddressResponse is the response type for the
 * Query/DelegatorWithdrawAddress RPC method.
 */
export interface QueryFoundationTaxResponseAmino {
  /** withdraw_address defines the delegator address to query for. */
  tax?: string;
  foundation_address?: string;
}
export interface QueryFoundationTaxResponseAminoMsg {
  type: "cosmos-sdk/QueryFoundationTaxResponse";
  value: QueryFoundationTaxResponseAmino;
}
/**
 * QueryDelegatorWithdrawAddressResponse is the response type for the
 * Query/DelegatorWithdrawAddress RPC method.
 */
export interface QueryFoundationTaxResponseSDKType {
  tax: string;
  foundation_address: string;
}
/**
 * QueryCommunityPoolRequest is the request type for the Query/CommunityPool RPC
 * method.
 */
export interface QueryCommunityPoolRequest {}
export interface QueryCommunityPoolRequestProtoMsg {
  typeUrl: "/cosmos.distribution.v1beta1.QueryCommunityPoolRequest";
  value: Uint8Array;
}
/**
 * QueryCommunityPoolRequest is the request type for the Query/CommunityPool RPC
 * method.
 */
export interface QueryCommunityPoolRequestAmino {}
export interface QueryCommunityPoolRequestAminoMsg {
  type: "cosmos-sdk/QueryCommunityPoolRequest";
  value: QueryCommunityPoolRequestAmino;
}
/**
 * QueryCommunityPoolRequest is the request type for the Query/CommunityPool RPC
 * method.
 */
export interface QueryCommunityPoolRequestSDKType {}
/**
 * QueryCommunityPoolResponse is the response type for the Query/CommunityPool
 * RPC method.
 */
export interface QueryCommunityPoolResponse {
  /** pool defines community pool's coins. */
  pool: DecCoin[];
}
export interface QueryCommunityPoolResponseProtoMsg {
  typeUrl: "/cosmos.distribution.v1beta1.QueryCommunityPoolResponse";
  value: Uint8Array;
}
/**
 * QueryCommunityPoolResponse is the response type for the Query/CommunityPool
 * RPC method.
 */
export interface QueryCommunityPoolResponseAmino {
  /** pool defines community pool's coins. */
  pool?: DecCoinAmino[];
}
export interface QueryCommunityPoolResponseAminoMsg {
  type: "cosmos-sdk/QueryCommunityPoolResponse";
  value: QueryCommunityPoolResponseAmino;
}
/**
 * QueryCommunityPoolResponse is the response type for the Query/CommunityPool
 * RPC method.
 */
export interface QueryCommunityPoolResponseSDKType {
  pool: DecCoinSDKType[];
}
function createBaseQueryRestakeEntriesRequest(): QueryRestakeEntriesRequest {
  return {
    delegator: ""
  };
}
export const QueryRestakeEntriesRequest = {
  typeUrl: "/cosmos.distribution.v1beta1.QueryRestakeEntriesRequest",
  encode(message: QueryRestakeEntriesRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.delegator !== "") {
      writer.uint32(10).string(message.delegator);
    }
    return writer;
  },
  fromJSON(object: any): QueryRestakeEntriesRequest {
    return {
      delegator: isSet(object.delegator) ? String(object.delegator) : ""
    };
  },
  fromPartial(object: Partial<QueryRestakeEntriesRequest>): QueryRestakeEntriesRequest {
    const message = createBaseQueryRestakeEntriesRequest();
    message.delegator = object.delegator ?? "";
    return message;
  },
  fromAmino(object: QueryRestakeEntriesRequestAmino): QueryRestakeEntriesRequest {
    const message = createBaseQueryRestakeEntriesRequest();
    if (object.delegator !== undefined && object.delegator !== null) {
      message.delegator = object.delegator;
    }
    return message;
  },
  toAmino(message: QueryRestakeEntriesRequest): QueryRestakeEntriesRequestAmino {
    const obj: any = {};
    obj.delegator = message.delegator === "" ? undefined : message.delegator;
    return obj;
  },
  fromAminoMsg(object: QueryRestakeEntriesRequestAminoMsg): QueryRestakeEntriesRequest {
    return QueryRestakeEntriesRequest.fromAmino(object.value);
  },
  toAminoMsg(message: QueryRestakeEntriesRequest): QueryRestakeEntriesRequestAminoMsg {
    return {
      type: "cosmos-sdk/QueryRestakeEntriesRequest",
      value: QueryRestakeEntriesRequest.toAmino(message)
    };
  },
  fromProtoMsg(message: QueryRestakeEntriesRequestProtoMsg): QueryRestakeEntriesRequest {
    return QueryRestakeEntriesRequest.decode(message.value);
  },
  toProto(message: QueryRestakeEntriesRequest): Uint8Array {
    return QueryRestakeEntriesRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryRestakeEntriesRequest): QueryRestakeEntriesRequestProtoMsg {
    return {
      typeUrl: "/cosmos.distribution.v1beta1.QueryRestakeEntriesRequest",
      value: QueryRestakeEntriesRequest.encode(message).finish()
    };
  }
};
function createBaseQueryRestakingEntriesResponse(): QueryRestakingEntriesResponse {
  return {
    validators: []
  };
}
export const QueryRestakingEntriesResponse = {
  typeUrl: "/cosmos.distribution.v1beta1.QueryRestakingEntriesResponse",
  encode(message: QueryRestakingEntriesResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.validators) {
      writer.uint32(10).string(v!);
    }
    return writer;
  },
  fromJSON(object: any): QueryRestakingEntriesResponse {
    return {
      validators: Array.isArray(object?.validators) ? object.validators.map((e: any) => String(e)) : []
    };
  },
  fromPartial(object: Partial<QueryRestakingEntriesResponse>): QueryRestakingEntriesResponse {
    const message = createBaseQueryRestakingEntriesResponse();
    message.validators = object.validators?.map(e => e) || [];
    return message;
  },
  fromAmino(object: QueryRestakingEntriesResponseAmino): QueryRestakingEntriesResponse {
    const message = createBaseQueryRestakingEntriesResponse();
    message.validators = object.validators?.map(e => e) || [];
    return message;
  },
  toAmino(message: QueryRestakingEntriesResponse): QueryRestakingEntriesResponseAmino {
    const obj: any = {};
    if (message.validators) {
      obj.validators = message.validators.map(e => e);
    } else {
      obj.validators = message.validators;
    }
    return obj;
  },
  fromAminoMsg(object: QueryRestakingEntriesResponseAminoMsg): QueryRestakingEntriesResponse {
    return QueryRestakingEntriesResponse.fromAmino(object.value);
  },
  toAminoMsg(message: QueryRestakingEntriesResponse): QueryRestakingEntriesResponseAminoMsg {
    return {
      type: "cosmos-sdk/QueryRestakingEntriesResponse",
      value: QueryRestakingEntriesResponse.toAmino(message)
    };
  },
  fromProtoMsg(message: QueryRestakingEntriesResponseProtoMsg): QueryRestakingEntriesResponse {
    return QueryRestakingEntriesResponse.decode(message.value);
  },
  toProto(message: QueryRestakingEntriesResponse): Uint8Array {
    return QueryRestakingEntriesResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryRestakingEntriesResponse): QueryRestakingEntriesResponseProtoMsg {
    return {
      typeUrl: "/cosmos.distribution.v1beta1.QueryRestakingEntriesResponse",
      value: QueryRestakingEntriesResponse.encode(message).finish()
    };
  }
};
function createBaseQueryRestakeThresholdRequest(): QueryRestakeThresholdRequest {
  return {};
}
export const QueryRestakeThresholdRequest = {
  typeUrl: "/cosmos.distribution.v1beta1.QueryRestakeThresholdRequest",
  encode(_: QueryRestakeThresholdRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  fromJSON(_: any): QueryRestakeThresholdRequest {
    return {};
  },
  fromPartial(_: Partial<QueryRestakeThresholdRequest>): QueryRestakeThresholdRequest {
    const message = createBaseQueryRestakeThresholdRequest();
    return message;
  },
  fromAmino(_: QueryRestakeThresholdRequestAmino): QueryRestakeThresholdRequest {
    const message = createBaseQueryRestakeThresholdRequest();
    return message;
  },
  toAmino(_: QueryRestakeThresholdRequest): QueryRestakeThresholdRequestAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: QueryRestakeThresholdRequestAminoMsg): QueryRestakeThresholdRequest {
    return QueryRestakeThresholdRequest.fromAmino(object.value);
  },
  toAminoMsg(message: QueryRestakeThresholdRequest): QueryRestakeThresholdRequestAminoMsg {
    return {
      type: "cosmos-sdk/QueryRestakeThresholdRequest",
      value: QueryRestakeThresholdRequest.toAmino(message)
    };
  },
  fromProtoMsg(message: QueryRestakeThresholdRequestProtoMsg): QueryRestakeThresholdRequest {
    return QueryRestakeThresholdRequest.decode(message.value);
  },
  toProto(message: QueryRestakeThresholdRequest): Uint8Array {
    return QueryRestakeThresholdRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryRestakeThresholdRequest): QueryRestakeThresholdRequestProtoMsg {
    return {
      typeUrl: "/cosmos.distribution.v1beta1.QueryRestakeThresholdRequest",
      value: QueryRestakeThresholdRequest.encode(message).finish()
    };
  }
};
function createBaseQueryRestakeThresholdResponse(): QueryRestakeThresholdResponse {
  return {
    threshold: ""
  };
}
export const QueryRestakeThresholdResponse = {
  typeUrl: "/cosmos.distribution.v1beta1.QueryRestakeThresholdResponse",
  encode(message: QueryRestakeThresholdResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.threshold !== "") {
      writer.uint32(10).string(Decimal.fromUserInput(message.threshold, 18).atomics);
    }
    return writer;
  },
  fromJSON(object: any): QueryRestakeThresholdResponse {
    return {
      threshold: isSet(object.threshold) ? String(object.threshold) : ""
    };
  },
  fromPartial(object: Partial<QueryRestakeThresholdResponse>): QueryRestakeThresholdResponse {
    const message = createBaseQueryRestakeThresholdResponse();
    message.threshold = object.threshold ?? "";
    return message;
  },
  fromAmino(object: QueryRestakeThresholdResponseAmino): QueryRestakeThresholdResponse {
    const message = createBaseQueryRestakeThresholdResponse();
    if (object.threshold !== undefined && object.threshold !== null) {
      message.threshold = object.threshold;
    }
    return message;
  },
  toAmino(message: QueryRestakeThresholdResponse): QueryRestakeThresholdResponseAmino {
    const obj: any = {};
    obj.threshold = message.threshold === "" ? undefined : message.threshold;
    return obj;
  },
  fromAminoMsg(object: QueryRestakeThresholdResponseAminoMsg): QueryRestakeThresholdResponse {
    return QueryRestakeThresholdResponse.fromAmino(object.value);
  },
  toAminoMsg(message: QueryRestakeThresholdResponse): QueryRestakeThresholdResponseAminoMsg {
    return {
      type: "cosmos-sdk/QueryRestakeThresholdResponse",
      value: QueryRestakeThresholdResponse.toAmino(message)
    };
  },
  fromProtoMsg(message: QueryRestakeThresholdResponseProtoMsg): QueryRestakeThresholdResponse {
    return QueryRestakeThresholdResponse.decode(message.value);
  },
  toProto(message: QueryRestakeThresholdResponse): Uint8Array {
    return QueryRestakeThresholdResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryRestakeThresholdResponse): QueryRestakeThresholdResponseProtoMsg {
    return {
      typeUrl: "/cosmos.distribution.v1beta1.QueryRestakeThresholdResponse",
      value: QueryRestakeThresholdResponse.encode(message).finish()
    };
  }
};
function createBaseQueryParamsRequest(): QueryParamsRequest {
  return {};
}
export const QueryParamsRequest = {
  typeUrl: "/cosmos.distribution.v1beta1.QueryParamsRequest",
  encode(_: QueryParamsRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  fromJSON(_: any): QueryParamsRequest {
    return {};
  },
  fromPartial(_: Partial<QueryParamsRequest>): QueryParamsRequest {
    const message = createBaseQueryParamsRequest();
    return message;
  },
  fromAmino(_: QueryParamsRequestAmino): QueryParamsRequest {
    const message = createBaseQueryParamsRequest();
    return message;
  },
  toAmino(_: QueryParamsRequest): QueryParamsRequestAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: QueryParamsRequestAminoMsg): QueryParamsRequest {
    return QueryParamsRequest.fromAmino(object.value);
  },
  toAminoMsg(message: QueryParamsRequest): QueryParamsRequestAminoMsg {
    return {
      type: "cosmos-sdk/QueryParamsRequest",
      value: QueryParamsRequest.toAmino(message)
    };
  },
  fromProtoMsg(message: QueryParamsRequestProtoMsg): QueryParamsRequest {
    return QueryParamsRequest.decode(message.value);
  },
  toProto(message: QueryParamsRequest): Uint8Array {
    return QueryParamsRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryParamsRequest): QueryParamsRequestProtoMsg {
    return {
      typeUrl: "/cosmos.distribution.v1beta1.QueryParamsRequest",
      value: QueryParamsRequest.encode(message).finish()
    };
  }
};
function createBaseQueryParamsResponse(): QueryParamsResponse {
  return {
    params: Params.fromPartial({})
  };
}
export const QueryParamsResponse = {
  typeUrl: "/cosmos.distribution.v1beta1.QueryParamsResponse",
  encode(message: QueryParamsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): QueryParamsResponse {
    return {
      params: isSet(object.params) ? Params.fromJSON(object.params) : undefined
    };
  },
  fromPartial(object: Partial<QueryParamsResponse>): QueryParamsResponse {
    const message = createBaseQueryParamsResponse();
    message.params = object.params !== undefined && object.params !== null ? Params.fromPartial(object.params) : undefined;
    return message;
  },
  fromAmino(object: QueryParamsResponseAmino): QueryParamsResponse {
    const message = createBaseQueryParamsResponse();
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromAmino(object.params);
    }
    return message;
  },
  toAmino(message: QueryParamsResponse): QueryParamsResponseAmino {
    const obj: any = {};
    obj.params = message.params ? Params.toAmino(message.params) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryParamsResponseAminoMsg): QueryParamsResponse {
    return QueryParamsResponse.fromAmino(object.value);
  },
  toAminoMsg(message: QueryParamsResponse): QueryParamsResponseAminoMsg {
    return {
      type: "cosmos-sdk/QueryParamsResponse",
      value: QueryParamsResponse.toAmino(message)
    };
  },
  fromProtoMsg(message: QueryParamsResponseProtoMsg): QueryParamsResponse {
    return QueryParamsResponse.decode(message.value);
  },
  toProto(message: QueryParamsResponse): Uint8Array {
    return QueryParamsResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryParamsResponse): QueryParamsResponseProtoMsg {
    return {
      typeUrl: "/cosmos.distribution.v1beta1.QueryParamsResponse",
      value: QueryParamsResponse.encode(message).finish()
    };
  }
};
function createBaseQueryValidatorOutstandingRewardsRequest(): QueryValidatorOutstandingRewardsRequest {
  return {
    validatorAddress: ""
  };
}
export const QueryValidatorOutstandingRewardsRequest = {
  typeUrl: "/cosmos.distribution.v1beta1.QueryValidatorOutstandingRewardsRequest",
  encode(message: QueryValidatorOutstandingRewardsRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.validatorAddress !== "") {
      writer.uint32(10).string(message.validatorAddress);
    }
    return writer;
  },
  fromJSON(object: any): QueryValidatorOutstandingRewardsRequest {
    return {
      validatorAddress: isSet(object.validatorAddress) ? String(object.validatorAddress) : ""
    };
  },
  fromPartial(object: Partial<QueryValidatorOutstandingRewardsRequest>): QueryValidatorOutstandingRewardsRequest {
    const message = createBaseQueryValidatorOutstandingRewardsRequest();
    message.validatorAddress = object.validatorAddress ?? "";
    return message;
  },
  fromAmino(object: QueryValidatorOutstandingRewardsRequestAmino): QueryValidatorOutstandingRewardsRequest {
    const message = createBaseQueryValidatorOutstandingRewardsRequest();
    if (object.validator_address !== undefined && object.validator_address !== null) {
      message.validatorAddress = object.validator_address;
    }
    return message;
  },
  toAmino(message: QueryValidatorOutstandingRewardsRequest): QueryValidatorOutstandingRewardsRequestAmino {
    const obj: any = {};
    obj.validator_address = message.validatorAddress === "" ? undefined : message.validatorAddress;
    return obj;
  },
  fromAminoMsg(object: QueryValidatorOutstandingRewardsRequestAminoMsg): QueryValidatorOutstandingRewardsRequest {
    return QueryValidatorOutstandingRewardsRequest.fromAmino(object.value);
  },
  toAminoMsg(message: QueryValidatorOutstandingRewardsRequest): QueryValidatorOutstandingRewardsRequestAminoMsg {
    return {
      type: "cosmos-sdk/QueryValidatorOutstandingRewardsRequest",
      value: QueryValidatorOutstandingRewardsRequest.toAmino(message)
    };
  },
  fromProtoMsg(message: QueryValidatorOutstandingRewardsRequestProtoMsg): QueryValidatorOutstandingRewardsRequest {
    return QueryValidatorOutstandingRewardsRequest.decode(message.value);
  },
  toProto(message: QueryValidatorOutstandingRewardsRequest): Uint8Array {
    return QueryValidatorOutstandingRewardsRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryValidatorOutstandingRewardsRequest): QueryValidatorOutstandingRewardsRequestProtoMsg {
    return {
      typeUrl: "/cosmos.distribution.v1beta1.QueryValidatorOutstandingRewardsRequest",
      value: QueryValidatorOutstandingRewardsRequest.encode(message).finish()
    };
  }
};
function createBaseQueryValidatorOutstandingRewardsResponse(): QueryValidatorOutstandingRewardsResponse {
  return {
    rewards: ValidatorOutstandingRewards.fromPartial({})
  };
}
export const QueryValidatorOutstandingRewardsResponse = {
  typeUrl: "/cosmos.distribution.v1beta1.QueryValidatorOutstandingRewardsResponse",
  encode(message: QueryValidatorOutstandingRewardsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.rewards !== undefined) {
      ValidatorOutstandingRewards.encode(message.rewards, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): QueryValidatorOutstandingRewardsResponse {
    return {
      rewards: isSet(object.rewards) ? ValidatorOutstandingRewards.fromJSON(object.rewards) : undefined
    };
  },
  fromPartial(object: Partial<QueryValidatorOutstandingRewardsResponse>): QueryValidatorOutstandingRewardsResponse {
    const message = createBaseQueryValidatorOutstandingRewardsResponse();
    message.rewards = object.rewards !== undefined && object.rewards !== null ? ValidatorOutstandingRewards.fromPartial(object.rewards) : undefined;
    return message;
  },
  fromAmino(object: QueryValidatorOutstandingRewardsResponseAmino): QueryValidatorOutstandingRewardsResponse {
    const message = createBaseQueryValidatorOutstandingRewardsResponse();
    if (object.rewards !== undefined && object.rewards !== null) {
      message.rewards = ValidatorOutstandingRewards.fromAmino(object.rewards);
    }
    return message;
  },
  toAmino(message: QueryValidatorOutstandingRewardsResponse): QueryValidatorOutstandingRewardsResponseAmino {
    const obj: any = {};
    obj.rewards = message.rewards ? ValidatorOutstandingRewards.toAmino(message.rewards) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryValidatorOutstandingRewardsResponseAminoMsg): QueryValidatorOutstandingRewardsResponse {
    return QueryValidatorOutstandingRewardsResponse.fromAmino(object.value);
  },
  toAminoMsg(message: QueryValidatorOutstandingRewardsResponse): QueryValidatorOutstandingRewardsResponseAminoMsg {
    return {
      type: "cosmos-sdk/QueryValidatorOutstandingRewardsResponse",
      value: QueryValidatorOutstandingRewardsResponse.toAmino(message)
    };
  },
  fromProtoMsg(message: QueryValidatorOutstandingRewardsResponseProtoMsg): QueryValidatorOutstandingRewardsResponse {
    return QueryValidatorOutstandingRewardsResponse.decode(message.value);
  },
  toProto(message: QueryValidatorOutstandingRewardsResponse): Uint8Array {
    return QueryValidatorOutstandingRewardsResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryValidatorOutstandingRewardsResponse): QueryValidatorOutstandingRewardsResponseProtoMsg {
    return {
      typeUrl: "/cosmos.distribution.v1beta1.QueryValidatorOutstandingRewardsResponse",
      value: QueryValidatorOutstandingRewardsResponse.encode(message).finish()
    };
  }
};
function createBaseQueryValidatorCommissionRequest(): QueryValidatorCommissionRequest {
  return {
    validatorAddress: ""
  };
}
export const QueryValidatorCommissionRequest = {
  typeUrl: "/cosmos.distribution.v1beta1.QueryValidatorCommissionRequest",
  encode(message: QueryValidatorCommissionRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.validatorAddress !== "") {
      writer.uint32(10).string(message.validatorAddress);
    }
    return writer;
  },
  fromJSON(object: any): QueryValidatorCommissionRequest {
    return {
      validatorAddress: isSet(object.validatorAddress) ? String(object.validatorAddress) : ""
    };
  },
  fromPartial(object: Partial<QueryValidatorCommissionRequest>): QueryValidatorCommissionRequest {
    const message = createBaseQueryValidatorCommissionRequest();
    message.validatorAddress = object.validatorAddress ?? "";
    return message;
  },
  fromAmino(object: QueryValidatorCommissionRequestAmino): QueryValidatorCommissionRequest {
    const message = createBaseQueryValidatorCommissionRequest();
    if (object.validator_address !== undefined && object.validator_address !== null) {
      message.validatorAddress = object.validator_address;
    }
    return message;
  },
  toAmino(message: QueryValidatorCommissionRequest): QueryValidatorCommissionRequestAmino {
    const obj: any = {};
    obj.validator_address = message.validatorAddress === "" ? undefined : message.validatorAddress;
    return obj;
  },
  fromAminoMsg(object: QueryValidatorCommissionRequestAminoMsg): QueryValidatorCommissionRequest {
    return QueryValidatorCommissionRequest.fromAmino(object.value);
  },
  toAminoMsg(message: QueryValidatorCommissionRequest): QueryValidatorCommissionRequestAminoMsg {
    return {
      type: "cosmos-sdk/QueryValidatorCommissionRequest",
      value: QueryValidatorCommissionRequest.toAmino(message)
    };
  },
  fromProtoMsg(message: QueryValidatorCommissionRequestProtoMsg): QueryValidatorCommissionRequest {
    return QueryValidatorCommissionRequest.decode(message.value);
  },
  toProto(message: QueryValidatorCommissionRequest): Uint8Array {
    return QueryValidatorCommissionRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryValidatorCommissionRequest): QueryValidatorCommissionRequestProtoMsg {
    return {
      typeUrl: "/cosmos.distribution.v1beta1.QueryValidatorCommissionRequest",
      value: QueryValidatorCommissionRequest.encode(message).finish()
    };
  }
};
function createBaseQueryValidatorCommissionResponse(): QueryValidatorCommissionResponse {
  return {
    commission: ValidatorAccumulatedCommission.fromPartial({})
  };
}
export const QueryValidatorCommissionResponse = {
  typeUrl: "/cosmos.distribution.v1beta1.QueryValidatorCommissionResponse",
  encode(message: QueryValidatorCommissionResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.commission !== undefined) {
      ValidatorAccumulatedCommission.encode(message.commission, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): QueryValidatorCommissionResponse {
    return {
      commission: isSet(object.commission) ? ValidatorAccumulatedCommission.fromJSON(object.commission) : undefined
    };
  },
  fromPartial(object: Partial<QueryValidatorCommissionResponse>): QueryValidatorCommissionResponse {
    const message = createBaseQueryValidatorCommissionResponse();
    message.commission = object.commission !== undefined && object.commission !== null ? ValidatorAccumulatedCommission.fromPartial(object.commission) : undefined;
    return message;
  },
  fromAmino(object: QueryValidatorCommissionResponseAmino): QueryValidatorCommissionResponse {
    const message = createBaseQueryValidatorCommissionResponse();
    if (object.commission !== undefined && object.commission !== null) {
      message.commission = ValidatorAccumulatedCommission.fromAmino(object.commission);
    }
    return message;
  },
  toAmino(message: QueryValidatorCommissionResponse): QueryValidatorCommissionResponseAmino {
    const obj: any = {};
    obj.commission = message.commission ? ValidatorAccumulatedCommission.toAmino(message.commission) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryValidatorCommissionResponseAminoMsg): QueryValidatorCommissionResponse {
    return QueryValidatorCommissionResponse.fromAmino(object.value);
  },
  toAminoMsg(message: QueryValidatorCommissionResponse): QueryValidatorCommissionResponseAminoMsg {
    return {
      type: "cosmos-sdk/QueryValidatorCommissionResponse",
      value: QueryValidatorCommissionResponse.toAmino(message)
    };
  },
  fromProtoMsg(message: QueryValidatorCommissionResponseProtoMsg): QueryValidatorCommissionResponse {
    return QueryValidatorCommissionResponse.decode(message.value);
  },
  toProto(message: QueryValidatorCommissionResponse): Uint8Array {
    return QueryValidatorCommissionResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryValidatorCommissionResponse): QueryValidatorCommissionResponseProtoMsg {
    return {
      typeUrl: "/cosmos.distribution.v1beta1.QueryValidatorCommissionResponse",
      value: QueryValidatorCommissionResponse.encode(message).finish()
    };
  }
};
function createBaseQueryValidatorSlashesRequest(): QueryValidatorSlashesRequest {
  return {
    validatorAddress: "",
    startingHeight: BigInt(0),
    endingHeight: BigInt(0),
    pagination: undefined
  };
}
export const QueryValidatorSlashesRequest = {
  typeUrl: "/cosmos.distribution.v1beta1.QueryValidatorSlashesRequest",
  encode(message: QueryValidatorSlashesRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.validatorAddress !== "") {
      writer.uint32(10).string(message.validatorAddress);
    }
    if (message.startingHeight !== BigInt(0)) {
      writer.uint32(16).uint64(message.startingHeight);
    }
    if (message.endingHeight !== BigInt(0)) {
      writer.uint32(24).uint64(message.endingHeight);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): QueryValidatorSlashesRequest {
    return {
      validatorAddress: isSet(object.validatorAddress) ? String(object.validatorAddress) : "",
      startingHeight: isSet(object.startingHeight) ? BigInt(object.startingHeight.toString()) : BigInt(0),
      endingHeight: isSet(object.endingHeight) ? BigInt(object.endingHeight.toString()) : BigInt(0),
      pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined
    };
  },
  fromPartial(object: Partial<QueryValidatorSlashesRequest>): QueryValidatorSlashesRequest {
    const message = createBaseQueryValidatorSlashesRequest();
    message.validatorAddress = object.validatorAddress ?? "";
    message.startingHeight = object.startingHeight !== undefined && object.startingHeight !== null ? BigInt(object.startingHeight.toString()) : BigInt(0);
    message.endingHeight = object.endingHeight !== undefined && object.endingHeight !== null ? BigInt(object.endingHeight.toString()) : BigInt(0);
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryValidatorSlashesRequestAmino): QueryValidatorSlashesRequest {
    const message = createBaseQueryValidatorSlashesRequest();
    if (object.validator_address !== undefined && object.validator_address !== null) {
      message.validatorAddress = object.validator_address;
    }
    if (object.starting_height !== undefined && object.starting_height !== null) {
      message.startingHeight = BigInt(object.starting_height);
    }
    if (object.ending_height !== undefined && object.ending_height !== null) {
      message.endingHeight = BigInt(object.ending_height);
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryValidatorSlashesRequest): QueryValidatorSlashesRequestAmino {
    const obj: any = {};
    obj.validator_address = message.validatorAddress === "" ? undefined : message.validatorAddress;
    obj.starting_height = message.startingHeight !== BigInt(0) ? message.startingHeight.toString() : undefined;
    obj.ending_height = message.endingHeight !== BigInt(0) ? message.endingHeight.toString() : undefined;
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryValidatorSlashesRequestAminoMsg): QueryValidatorSlashesRequest {
    return QueryValidatorSlashesRequest.fromAmino(object.value);
  },
  toAminoMsg(message: QueryValidatorSlashesRequest): QueryValidatorSlashesRequestAminoMsg {
    return {
      type: "cosmos-sdk/QueryValidatorSlashesRequest",
      value: QueryValidatorSlashesRequest.toAmino(message)
    };
  },
  fromProtoMsg(message: QueryValidatorSlashesRequestProtoMsg): QueryValidatorSlashesRequest {
    return QueryValidatorSlashesRequest.decode(message.value);
  },
  toProto(message: QueryValidatorSlashesRequest): Uint8Array {
    return QueryValidatorSlashesRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryValidatorSlashesRequest): QueryValidatorSlashesRequestProtoMsg {
    return {
      typeUrl: "/cosmos.distribution.v1beta1.QueryValidatorSlashesRequest",
      value: QueryValidatorSlashesRequest.encode(message).finish()
    };
  }
};
function createBaseQueryValidatorSlashesResponse(): QueryValidatorSlashesResponse {
  return {
    slashes: [],
    pagination: undefined
  };
}
export const QueryValidatorSlashesResponse = {
  typeUrl: "/cosmos.distribution.v1beta1.QueryValidatorSlashesResponse",
  encode(message: QueryValidatorSlashesResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.slashes) {
      ValidatorSlashEvent.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): QueryValidatorSlashesResponse {
    return {
      slashes: Array.isArray(object?.slashes) ? object.slashes.map((e: any) => ValidatorSlashEvent.fromJSON(e)) : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined
    };
  },
  fromPartial(object: Partial<QueryValidatorSlashesResponse>): QueryValidatorSlashesResponse {
    const message = createBaseQueryValidatorSlashesResponse();
    message.slashes = object.slashes?.map(e => ValidatorSlashEvent.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryValidatorSlashesResponseAmino): QueryValidatorSlashesResponse {
    const message = createBaseQueryValidatorSlashesResponse();
    message.slashes = object.slashes?.map(e => ValidatorSlashEvent.fromAmino(e)) || [];
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryValidatorSlashesResponse): QueryValidatorSlashesResponseAmino {
    const obj: any = {};
    if (message.slashes) {
      obj.slashes = message.slashes.map(e => e ? ValidatorSlashEvent.toAmino(e) : undefined);
    } else {
      obj.slashes = message.slashes;
    }
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryValidatorSlashesResponseAminoMsg): QueryValidatorSlashesResponse {
    return QueryValidatorSlashesResponse.fromAmino(object.value);
  },
  toAminoMsg(message: QueryValidatorSlashesResponse): QueryValidatorSlashesResponseAminoMsg {
    return {
      type: "cosmos-sdk/QueryValidatorSlashesResponse",
      value: QueryValidatorSlashesResponse.toAmino(message)
    };
  },
  fromProtoMsg(message: QueryValidatorSlashesResponseProtoMsg): QueryValidatorSlashesResponse {
    return QueryValidatorSlashesResponse.decode(message.value);
  },
  toProto(message: QueryValidatorSlashesResponse): Uint8Array {
    return QueryValidatorSlashesResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryValidatorSlashesResponse): QueryValidatorSlashesResponseProtoMsg {
    return {
      typeUrl: "/cosmos.distribution.v1beta1.QueryValidatorSlashesResponse",
      value: QueryValidatorSlashesResponse.encode(message).finish()
    };
  }
};
function createBaseQueryDelegationRewardsRequest(): QueryDelegationRewardsRequest {
  return {
    delegatorAddress: "",
    validatorAddress: ""
  };
}
export const QueryDelegationRewardsRequest = {
  typeUrl: "/cosmos.distribution.v1beta1.QueryDelegationRewardsRequest",
  encode(message: QueryDelegationRewardsRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.delegatorAddress !== "") {
      writer.uint32(10).string(message.delegatorAddress);
    }
    if (message.validatorAddress !== "") {
      writer.uint32(18).string(message.validatorAddress);
    }
    return writer;
  },
  fromJSON(object: any): QueryDelegationRewardsRequest {
    return {
      delegatorAddress: isSet(object.delegatorAddress) ? String(object.delegatorAddress) : "",
      validatorAddress: isSet(object.validatorAddress) ? String(object.validatorAddress) : ""
    };
  },
  fromPartial(object: Partial<QueryDelegationRewardsRequest>): QueryDelegationRewardsRequest {
    const message = createBaseQueryDelegationRewardsRequest();
    message.delegatorAddress = object.delegatorAddress ?? "";
    message.validatorAddress = object.validatorAddress ?? "";
    return message;
  },
  fromAmino(object: QueryDelegationRewardsRequestAmino): QueryDelegationRewardsRequest {
    const message = createBaseQueryDelegationRewardsRequest();
    if (object.delegator_address !== undefined && object.delegator_address !== null) {
      message.delegatorAddress = object.delegator_address;
    }
    if (object.validator_address !== undefined && object.validator_address !== null) {
      message.validatorAddress = object.validator_address;
    }
    return message;
  },
  toAmino(message: QueryDelegationRewardsRequest): QueryDelegationRewardsRequestAmino {
    const obj: any = {};
    obj.delegator_address = message.delegatorAddress === "" ? undefined : message.delegatorAddress;
    obj.validator_address = message.validatorAddress === "" ? undefined : message.validatorAddress;
    return obj;
  },
  fromAminoMsg(object: QueryDelegationRewardsRequestAminoMsg): QueryDelegationRewardsRequest {
    return QueryDelegationRewardsRequest.fromAmino(object.value);
  },
  toAminoMsg(message: QueryDelegationRewardsRequest): QueryDelegationRewardsRequestAminoMsg {
    return {
      type: "cosmos-sdk/QueryDelegationRewardsRequest",
      value: QueryDelegationRewardsRequest.toAmino(message)
    };
  },
  fromProtoMsg(message: QueryDelegationRewardsRequestProtoMsg): QueryDelegationRewardsRequest {
    return QueryDelegationRewardsRequest.decode(message.value);
  },
  toProto(message: QueryDelegationRewardsRequest): Uint8Array {
    return QueryDelegationRewardsRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryDelegationRewardsRequest): QueryDelegationRewardsRequestProtoMsg {
    return {
      typeUrl: "/cosmos.distribution.v1beta1.QueryDelegationRewardsRequest",
      value: QueryDelegationRewardsRequest.encode(message).finish()
    };
  }
};
function createBaseQueryDelegationRewardsResponse(): QueryDelegationRewardsResponse {
  return {
    rewards: []
  };
}
export const QueryDelegationRewardsResponse = {
  typeUrl: "/cosmos.distribution.v1beta1.QueryDelegationRewardsResponse",
  encode(message: QueryDelegationRewardsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.rewards) {
      DecCoin.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): QueryDelegationRewardsResponse {
    return {
      rewards: Array.isArray(object?.rewards) ? object.rewards.map((e: any) => DecCoin.fromJSON(e)) : []
    };
  },
  fromPartial(object: Partial<QueryDelegationRewardsResponse>): QueryDelegationRewardsResponse {
    const message = createBaseQueryDelegationRewardsResponse();
    message.rewards = object.rewards?.map(e => DecCoin.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: QueryDelegationRewardsResponseAmino): QueryDelegationRewardsResponse {
    const message = createBaseQueryDelegationRewardsResponse();
    message.rewards = object.rewards?.map(e => DecCoin.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: QueryDelegationRewardsResponse): QueryDelegationRewardsResponseAmino {
    const obj: any = {};
    if (message.rewards) {
      obj.rewards = message.rewards.map(e => e ? DecCoin.toAmino(e) : undefined);
    } else {
      obj.rewards = message.rewards;
    }
    return obj;
  },
  fromAminoMsg(object: QueryDelegationRewardsResponseAminoMsg): QueryDelegationRewardsResponse {
    return QueryDelegationRewardsResponse.fromAmino(object.value);
  },
  toAminoMsg(message: QueryDelegationRewardsResponse): QueryDelegationRewardsResponseAminoMsg {
    return {
      type: "cosmos-sdk/QueryDelegationRewardsResponse",
      value: QueryDelegationRewardsResponse.toAmino(message)
    };
  },
  fromProtoMsg(message: QueryDelegationRewardsResponseProtoMsg): QueryDelegationRewardsResponse {
    return QueryDelegationRewardsResponse.decode(message.value);
  },
  toProto(message: QueryDelegationRewardsResponse): Uint8Array {
    return QueryDelegationRewardsResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryDelegationRewardsResponse): QueryDelegationRewardsResponseProtoMsg {
    return {
      typeUrl: "/cosmos.distribution.v1beta1.QueryDelegationRewardsResponse",
      value: QueryDelegationRewardsResponse.encode(message).finish()
    };
  }
};
function createBaseQueryDelegationTotalRewardsRequest(): QueryDelegationTotalRewardsRequest {
  return {
    delegatorAddress: ""
  };
}
export const QueryDelegationTotalRewardsRequest = {
  typeUrl: "/cosmos.distribution.v1beta1.QueryDelegationTotalRewardsRequest",
  encode(message: QueryDelegationTotalRewardsRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.delegatorAddress !== "") {
      writer.uint32(10).string(message.delegatorAddress);
    }
    return writer;
  },
  fromJSON(object: any): QueryDelegationTotalRewardsRequest {
    return {
      delegatorAddress: isSet(object.delegatorAddress) ? String(object.delegatorAddress) : ""
    };
  },
  fromPartial(object: Partial<QueryDelegationTotalRewardsRequest>): QueryDelegationTotalRewardsRequest {
    const message = createBaseQueryDelegationTotalRewardsRequest();
    message.delegatorAddress = object.delegatorAddress ?? "";
    return message;
  },
  fromAmino(object: QueryDelegationTotalRewardsRequestAmino): QueryDelegationTotalRewardsRequest {
    const message = createBaseQueryDelegationTotalRewardsRequest();
    if (object.delegator_address !== undefined && object.delegator_address !== null) {
      message.delegatorAddress = object.delegator_address;
    }
    return message;
  },
  toAmino(message: QueryDelegationTotalRewardsRequest): QueryDelegationTotalRewardsRequestAmino {
    const obj: any = {};
    obj.delegator_address = message.delegatorAddress === "" ? undefined : message.delegatorAddress;
    return obj;
  },
  fromAminoMsg(object: QueryDelegationTotalRewardsRequestAminoMsg): QueryDelegationTotalRewardsRequest {
    return QueryDelegationTotalRewardsRequest.fromAmino(object.value);
  },
  toAminoMsg(message: QueryDelegationTotalRewardsRequest): QueryDelegationTotalRewardsRequestAminoMsg {
    return {
      type: "cosmos-sdk/QueryDelegationTotalRewardsRequest",
      value: QueryDelegationTotalRewardsRequest.toAmino(message)
    };
  },
  fromProtoMsg(message: QueryDelegationTotalRewardsRequestProtoMsg): QueryDelegationTotalRewardsRequest {
    return QueryDelegationTotalRewardsRequest.decode(message.value);
  },
  toProto(message: QueryDelegationTotalRewardsRequest): Uint8Array {
    return QueryDelegationTotalRewardsRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryDelegationTotalRewardsRequest): QueryDelegationTotalRewardsRequestProtoMsg {
    return {
      typeUrl: "/cosmos.distribution.v1beta1.QueryDelegationTotalRewardsRequest",
      value: QueryDelegationTotalRewardsRequest.encode(message).finish()
    };
  }
};
function createBaseQueryDelegationTotalRewardsResponse(): QueryDelegationTotalRewardsResponse {
  return {
    rewards: [],
    total: []
  };
}
export const QueryDelegationTotalRewardsResponse = {
  typeUrl: "/cosmos.distribution.v1beta1.QueryDelegationTotalRewardsResponse",
  encode(message: QueryDelegationTotalRewardsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.rewards) {
      DelegationDelegatorReward.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.total) {
      DecCoin.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): QueryDelegationTotalRewardsResponse {
    return {
      rewards: Array.isArray(object?.rewards) ? object.rewards.map((e: any) => DelegationDelegatorReward.fromJSON(e)) : [],
      total: Array.isArray(object?.total) ? object.total.map((e: any) => DecCoin.fromJSON(e)) : []
    };
  },
  fromPartial(object: Partial<QueryDelegationTotalRewardsResponse>): QueryDelegationTotalRewardsResponse {
    const message = createBaseQueryDelegationTotalRewardsResponse();
    message.rewards = object.rewards?.map(e => DelegationDelegatorReward.fromPartial(e)) || [];
    message.total = object.total?.map(e => DecCoin.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: QueryDelegationTotalRewardsResponseAmino): QueryDelegationTotalRewardsResponse {
    const message = createBaseQueryDelegationTotalRewardsResponse();
    message.rewards = object.rewards?.map(e => DelegationDelegatorReward.fromAmino(e)) || [];
    message.total = object.total?.map(e => DecCoin.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: QueryDelegationTotalRewardsResponse): QueryDelegationTotalRewardsResponseAmino {
    const obj: any = {};
    if (message.rewards) {
      obj.rewards = message.rewards.map(e => e ? DelegationDelegatorReward.toAmino(e) : undefined);
    } else {
      obj.rewards = message.rewards;
    }
    if (message.total) {
      obj.total = message.total.map(e => e ? DecCoin.toAmino(e) : undefined);
    } else {
      obj.total = message.total;
    }
    return obj;
  },
  fromAminoMsg(object: QueryDelegationTotalRewardsResponseAminoMsg): QueryDelegationTotalRewardsResponse {
    return QueryDelegationTotalRewardsResponse.fromAmino(object.value);
  },
  toAminoMsg(message: QueryDelegationTotalRewardsResponse): QueryDelegationTotalRewardsResponseAminoMsg {
    return {
      type: "cosmos-sdk/QueryDelegationTotalRewardsResponse",
      value: QueryDelegationTotalRewardsResponse.toAmino(message)
    };
  },
  fromProtoMsg(message: QueryDelegationTotalRewardsResponseProtoMsg): QueryDelegationTotalRewardsResponse {
    return QueryDelegationTotalRewardsResponse.decode(message.value);
  },
  toProto(message: QueryDelegationTotalRewardsResponse): Uint8Array {
    return QueryDelegationTotalRewardsResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryDelegationTotalRewardsResponse): QueryDelegationTotalRewardsResponseProtoMsg {
    return {
      typeUrl: "/cosmos.distribution.v1beta1.QueryDelegationTotalRewardsResponse",
      value: QueryDelegationTotalRewardsResponse.encode(message).finish()
    };
  }
};
function createBaseQueryDelegatorValidatorsRequest(): QueryDelegatorValidatorsRequest {
  return {
    delegatorAddress: ""
  };
}
export const QueryDelegatorValidatorsRequest = {
  typeUrl: "/cosmos.distribution.v1beta1.QueryDelegatorValidatorsRequest",
  encode(message: QueryDelegatorValidatorsRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.delegatorAddress !== "") {
      writer.uint32(10).string(message.delegatorAddress);
    }
    return writer;
  },
  fromJSON(object: any): QueryDelegatorValidatorsRequest {
    return {
      delegatorAddress: isSet(object.delegatorAddress) ? String(object.delegatorAddress) : ""
    };
  },
  fromPartial(object: Partial<QueryDelegatorValidatorsRequest>): QueryDelegatorValidatorsRequest {
    const message = createBaseQueryDelegatorValidatorsRequest();
    message.delegatorAddress = object.delegatorAddress ?? "";
    return message;
  },
  fromAmino(object: QueryDelegatorValidatorsRequestAmino): QueryDelegatorValidatorsRequest {
    const message = createBaseQueryDelegatorValidatorsRequest();
    if (object.delegator_address !== undefined && object.delegator_address !== null) {
      message.delegatorAddress = object.delegator_address;
    }
    return message;
  },
  toAmino(message: QueryDelegatorValidatorsRequest): QueryDelegatorValidatorsRequestAmino {
    const obj: any = {};
    obj.delegator_address = message.delegatorAddress === "" ? undefined : message.delegatorAddress;
    return obj;
  },
  fromAminoMsg(object: QueryDelegatorValidatorsRequestAminoMsg): QueryDelegatorValidatorsRequest {
    return QueryDelegatorValidatorsRequest.fromAmino(object.value);
  },
  toAminoMsg(message: QueryDelegatorValidatorsRequest): QueryDelegatorValidatorsRequestAminoMsg {
    return {
      type: "cosmos-sdk/QueryDelegatorValidatorsRequest",
      value: QueryDelegatorValidatorsRequest.toAmino(message)
    };
  },
  fromProtoMsg(message: QueryDelegatorValidatorsRequestProtoMsg): QueryDelegatorValidatorsRequest {
    return QueryDelegatorValidatorsRequest.decode(message.value);
  },
  toProto(message: QueryDelegatorValidatorsRequest): Uint8Array {
    return QueryDelegatorValidatorsRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryDelegatorValidatorsRequest): QueryDelegatorValidatorsRequestProtoMsg {
    return {
      typeUrl: "/cosmos.distribution.v1beta1.QueryDelegatorValidatorsRequest",
      value: QueryDelegatorValidatorsRequest.encode(message).finish()
    };
  }
};
function createBaseQueryDelegatorValidatorsResponse(): QueryDelegatorValidatorsResponse {
  return {
    validators: []
  };
}
export const QueryDelegatorValidatorsResponse = {
  typeUrl: "/cosmos.distribution.v1beta1.QueryDelegatorValidatorsResponse",
  encode(message: QueryDelegatorValidatorsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.validators) {
      writer.uint32(10).string(v!);
    }
    return writer;
  },
  fromJSON(object: any): QueryDelegatorValidatorsResponse {
    return {
      validators: Array.isArray(object?.validators) ? object.validators.map((e: any) => String(e)) : []
    };
  },
  fromPartial(object: Partial<QueryDelegatorValidatorsResponse>): QueryDelegatorValidatorsResponse {
    const message = createBaseQueryDelegatorValidatorsResponse();
    message.validators = object.validators?.map(e => e) || [];
    return message;
  },
  fromAmino(object: QueryDelegatorValidatorsResponseAmino): QueryDelegatorValidatorsResponse {
    const message = createBaseQueryDelegatorValidatorsResponse();
    message.validators = object.validators?.map(e => e) || [];
    return message;
  },
  toAmino(message: QueryDelegatorValidatorsResponse): QueryDelegatorValidatorsResponseAmino {
    const obj: any = {};
    if (message.validators) {
      obj.validators = message.validators.map(e => e);
    } else {
      obj.validators = message.validators;
    }
    return obj;
  },
  fromAminoMsg(object: QueryDelegatorValidatorsResponseAminoMsg): QueryDelegatorValidatorsResponse {
    return QueryDelegatorValidatorsResponse.fromAmino(object.value);
  },
  toAminoMsg(message: QueryDelegatorValidatorsResponse): QueryDelegatorValidatorsResponseAminoMsg {
    return {
      type: "cosmos-sdk/QueryDelegatorValidatorsResponse",
      value: QueryDelegatorValidatorsResponse.toAmino(message)
    };
  },
  fromProtoMsg(message: QueryDelegatorValidatorsResponseProtoMsg): QueryDelegatorValidatorsResponse {
    return QueryDelegatorValidatorsResponse.decode(message.value);
  },
  toProto(message: QueryDelegatorValidatorsResponse): Uint8Array {
    return QueryDelegatorValidatorsResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryDelegatorValidatorsResponse): QueryDelegatorValidatorsResponseProtoMsg {
    return {
      typeUrl: "/cosmos.distribution.v1beta1.QueryDelegatorValidatorsResponse",
      value: QueryDelegatorValidatorsResponse.encode(message).finish()
    };
  }
};
function createBaseQueryDelegatorWithdrawAddressRequest(): QueryDelegatorWithdrawAddressRequest {
  return {
    delegatorAddress: ""
  };
}
export const QueryDelegatorWithdrawAddressRequest = {
  typeUrl: "/cosmos.distribution.v1beta1.QueryDelegatorWithdrawAddressRequest",
  encode(message: QueryDelegatorWithdrawAddressRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.delegatorAddress !== "") {
      writer.uint32(10).string(message.delegatorAddress);
    }
    return writer;
  },
  fromJSON(object: any): QueryDelegatorWithdrawAddressRequest {
    return {
      delegatorAddress: isSet(object.delegatorAddress) ? String(object.delegatorAddress) : ""
    };
  },
  fromPartial(object: Partial<QueryDelegatorWithdrawAddressRequest>): QueryDelegatorWithdrawAddressRequest {
    const message = createBaseQueryDelegatorWithdrawAddressRequest();
    message.delegatorAddress = object.delegatorAddress ?? "";
    return message;
  },
  fromAmino(object: QueryDelegatorWithdrawAddressRequestAmino): QueryDelegatorWithdrawAddressRequest {
    const message = createBaseQueryDelegatorWithdrawAddressRequest();
    if (object.delegator_address !== undefined && object.delegator_address !== null) {
      message.delegatorAddress = object.delegator_address;
    }
    return message;
  },
  toAmino(message: QueryDelegatorWithdrawAddressRequest): QueryDelegatorWithdrawAddressRequestAmino {
    const obj: any = {};
    obj.delegator_address = message.delegatorAddress === "" ? undefined : message.delegatorAddress;
    return obj;
  },
  fromAminoMsg(object: QueryDelegatorWithdrawAddressRequestAminoMsg): QueryDelegatorWithdrawAddressRequest {
    return QueryDelegatorWithdrawAddressRequest.fromAmino(object.value);
  },
  toAminoMsg(message: QueryDelegatorWithdrawAddressRequest): QueryDelegatorWithdrawAddressRequestAminoMsg {
    return {
      type: "cosmos-sdk/QueryDelegatorWithdrawAddressRequest",
      value: QueryDelegatorWithdrawAddressRequest.toAmino(message)
    };
  },
  fromProtoMsg(message: QueryDelegatorWithdrawAddressRequestProtoMsg): QueryDelegatorWithdrawAddressRequest {
    return QueryDelegatorWithdrawAddressRequest.decode(message.value);
  },
  toProto(message: QueryDelegatorWithdrawAddressRequest): Uint8Array {
    return QueryDelegatorWithdrawAddressRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryDelegatorWithdrawAddressRequest): QueryDelegatorWithdrawAddressRequestProtoMsg {
    return {
      typeUrl: "/cosmos.distribution.v1beta1.QueryDelegatorWithdrawAddressRequest",
      value: QueryDelegatorWithdrawAddressRequest.encode(message).finish()
    };
  }
};
function createBaseQueryDelegatorWithdrawAddressResponse(): QueryDelegatorWithdrawAddressResponse {
  return {
    withdrawAddress: ""
  };
}
export const QueryDelegatorWithdrawAddressResponse = {
  typeUrl: "/cosmos.distribution.v1beta1.QueryDelegatorWithdrawAddressResponse",
  encode(message: QueryDelegatorWithdrawAddressResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.withdrawAddress !== "") {
      writer.uint32(10).string(message.withdrawAddress);
    }
    return writer;
  },
  fromJSON(object: any): QueryDelegatorWithdrawAddressResponse {
    return {
      withdrawAddress: isSet(object.withdrawAddress) ? String(object.withdrawAddress) : ""
    };
  },
  fromPartial(object: Partial<QueryDelegatorWithdrawAddressResponse>): QueryDelegatorWithdrawAddressResponse {
    const message = createBaseQueryDelegatorWithdrawAddressResponse();
    message.withdrawAddress = object.withdrawAddress ?? "";
    return message;
  },
  fromAmino(object: QueryDelegatorWithdrawAddressResponseAmino): QueryDelegatorWithdrawAddressResponse {
    const message = createBaseQueryDelegatorWithdrawAddressResponse();
    if (object.withdraw_address !== undefined && object.withdraw_address !== null) {
      message.withdrawAddress = object.withdraw_address;
    }
    return message;
  },
  toAmino(message: QueryDelegatorWithdrawAddressResponse): QueryDelegatorWithdrawAddressResponseAmino {
    const obj: any = {};
    obj.withdraw_address = message.withdrawAddress === "" ? undefined : message.withdrawAddress;
    return obj;
  },
  fromAminoMsg(object: QueryDelegatorWithdrawAddressResponseAminoMsg): QueryDelegatorWithdrawAddressResponse {
    return QueryDelegatorWithdrawAddressResponse.fromAmino(object.value);
  },
  toAminoMsg(message: QueryDelegatorWithdrawAddressResponse): QueryDelegatorWithdrawAddressResponseAminoMsg {
    return {
      type: "cosmos-sdk/QueryDelegatorWithdrawAddressResponse",
      value: QueryDelegatorWithdrawAddressResponse.toAmino(message)
    };
  },
  fromProtoMsg(message: QueryDelegatorWithdrawAddressResponseProtoMsg): QueryDelegatorWithdrawAddressResponse {
    return QueryDelegatorWithdrawAddressResponse.decode(message.value);
  },
  toProto(message: QueryDelegatorWithdrawAddressResponse): Uint8Array {
    return QueryDelegatorWithdrawAddressResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryDelegatorWithdrawAddressResponse): QueryDelegatorWithdrawAddressResponseProtoMsg {
    return {
      typeUrl: "/cosmos.distribution.v1beta1.QueryDelegatorWithdrawAddressResponse",
      value: QueryDelegatorWithdrawAddressResponse.encode(message).finish()
    };
  }
};
function createBaseQueryFoundationTaxRequest(): QueryFoundationTaxRequest {
  return {};
}
export const QueryFoundationTaxRequest = {
  typeUrl: "/cosmos.distribution.v1beta1.QueryFoundationTaxRequest",
  encode(_: QueryFoundationTaxRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  fromJSON(_: any): QueryFoundationTaxRequest {
    return {};
  },
  fromPartial(_: Partial<QueryFoundationTaxRequest>): QueryFoundationTaxRequest {
    const message = createBaseQueryFoundationTaxRequest();
    return message;
  },
  fromAmino(_: QueryFoundationTaxRequestAmino): QueryFoundationTaxRequest {
    const message = createBaseQueryFoundationTaxRequest();
    return message;
  },
  toAmino(_: QueryFoundationTaxRequest): QueryFoundationTaxRequestAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: QueryFoundationTaxRequestAminoMsg): QueryFoundationTaxRequest {
    return QueryFoundationTaxRequest.fromAmino(object.value);
  },
  toAminoMsg(message: QueryFoundationTaxRequest): QueryFoundationTaxRequestAminoMsg {
    return {
      type: "cosmos-sdk/QueryFoundationTaxRequest",
      value: QueryFoundationTaxRequest.toAmino(message)
    };
  },
  fromProtoMsg(message: QueryFoundationTaxRequestProtoMsg): QueryFoundationTaxRequest {
    return QueryFoundationTaxRequest.decode(message.value);
  },
  toProto(message: QueryFoundationTaxRequest): Uint8Array {
    return QueryFoundationTaxRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryFoundationTaxRequest): QueryFoundationTaxRequestProtoMsg {
    return {
      typeUrl: "/cosmos.distribution.v1beta1.QueryFoundationTaxRequest",
      value: QueryFoundationTaxRequest.encode(message).finish()
    };
  }
};
function createBaseQueryFoundationTaxResponse(): QueryFoundationTaxResponse {
  return {
    tax: "",
    foundationAddress: ""
  };
}
export const QueryFoundationTaxResponse = {
  typeUrl: "/cosmos.distribution.v1beta1.QueryFoundationTaxResponse",
  encode(message: QueryFoundationTaxResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.tax !== "") {
      writer.uint32(10).string(message.tax);
    }
    if (message.foundationAddress !== "") {
      writer.uint32(18).string(message.foundationAddress);
    }
    return writer;
  },
  fromJSON(object: any): QueryFoundationTaxResponse {
    return {
      tax: isSet(object.tax) ? String(object.tax) : "",
      foundationAddress: isSet(object.foundationAddress) ? String(object.foundationAddress) : ""
    };
  },
  fromPartial(object: Partial<QueryFoundationTaxResponse>): QueryFoundationTaxResponse {
    const message = createBaseQueryFoundationTaxResponse();
    message.tax = object.tax ?? "";
    message.foundationAddress = object.foundationAddress ?? "";
    return message;
  },
  fromAmino(object: QueryFoundationTaxResponseAmino): QueryFoundationTaxResponse {
    const message = createBaseQueryFoundationTaxResponse();
    if (object.tax !== undefined && object.tax !== null) {
      message.tax = object.tax;
    }
    if (object.foundation_address !== undefined && object.foundation_address !== null) {
      message.foundationAddress = object.foundation_address;
    }
    return message;
  },
  toAmino(message: QueryFoundationTaxResponse): QueryFoundationTaxResponseAmino {
    const obj: any = {};
    obj.tax = message.tax === "" ? undefined : message.tax;
    obj.foundation_address = message.foundationAddress === "" ? undefined : message.foundationAddress;
    return obj;
  },
  fromAminoMsg(object: QueryFoundationTaxResponseAminoMsg): QueryFoundationTaxResponse {
    return QueryFoundationTaxResponse.fromAmino(object.value);
  },
  toAminoMsg(message: QueryFoundationTaxResponse): QueryFoundationTaxResponseAminoMsg {
    return {
      type: "cosmos-sdk/QueryFoundationTaxResponse",
      value: QueryFoundationTaxResponse.toAmino(message)
    };
  },
  fromProtoMsg(message: QueryFoundationTaxResponseProtoMsg): QueryFoundationTaxResponse {
    return QueryFoundationTaxResponse.decode(message.value);
  },
  toProto(message: QueryFoundationTaxResponse): Uint8Array {
    return QueryFoundationTaxResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryFoundationTaxResponse): QueryFoundationTaxResponseProtoMsg {
    return {
      typeUrl: "/cosmos.distribution.v1beta1.QueryFoundationTaxResponse",
      value: QueryFoundationTaxResponse.encode(message).finish()
    };
  }
};
function createBaseQueryCommunityPoolRequest(): QueryCommunityPoolRequest {
  return {};
}
export const QueryCommunityPoolRequest = {
  typeUrl: "/cosmos.distribution.v1beta1.QueryCommunityPoolRequest",
  encode(_: QueryCommunityPoolRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  fromJSON(_: any): QueryCommunityPoolRequest {
    return {};
  },
  fromPartial(_: Partial<QueryCommunityPoolRequest>): QueryCommunityPoolRequest {
    const message = createBaseQueryCommunityPoolRequest();
    return message;
  },
  fromAmino(_: QueryCommunityPoolRequestAmino): QueryCommunityPoolRequest {
    const message = createBaseQueryCommunityPoolRequest();
    return message;
  },
  toAmino(_: QueryCommunityPoolRequest): QueryCommunityPoolRequestAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: QueryCommunityPoolRequestAminoMsg): QueryCommunityPoolRequest {
    return QueryCommunityPoolRequest.fromAmino(object.value);
  },
  toAminoMsg(message: QueryCommunityPoolRequest): QueryCommunityPoolRequestAminoMsg {
    return {
      type: "cosmos-sdk/QueryCommunityPoolRequest",
      value: QueryCommunityPoolRequest.toAmino(message)
    };
  },
  fromProtoMsg(message: QueryCommunityPoolRequestProtoMsg): QueryCommunityPoolRequest {
    return QueryCommunityPoolRequest.decode(message.value);
  },
  toProto(message: QueryCommunityPoolRequest): Uint8Array {
    return QueryCommunityPoolRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryCommunityPoolRequest): QueryCommunityPoolRequestProtoMsg {
    return {
      typeUrl: "/cosmos.distribution.v1beta1.QueryCommunityPoolRequest",
      value: QueryCommunityPoolRequest.encode(message).finish()
    };
  }
};
function createBaseQueryCommunityPoolResponse(): QueryCommunityPoolResponse {
  return {
    pool: []
  };
}
export const QueryCommunityPoolResponse = {
  typeUrl: "/cosmos.distribution.v1beta1.QueryCommunityPoolResponse",
  encode(message: QueryCommunityPoolResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.pool) {
      DecCoin.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): QueryCommunityPoolResponse {
    return {
      pool: Array.isArray(object?.pool) ? object.pool.map((e: any) => DecCoin.fromJSON(e)) : []
    };
  },
  fromPartial(object: Partial<QueryCommunityPoolResponse>): QueryCommunityPoolResponse {
    const message = createBaseQueryCommunityPoolResponse();
    message.pool = object.pool?.map(e => DecCoin.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: QueryCommunityPoolResponseAmino): QueryCommunityPoolResponse {
    const message = createBaseQueryCommunityPoolResponse();
    message.pool = object.pool?.map(e => DecCoin.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: QueryCommunityPoolResponse): QueryCommunityPoolResponseAmino {
    const obj: any = {};
    if (message.pool) {
      obj.pool = message.pool.map(e => e ? DecCoin.toAmino(e) : undefined);
    } else {
      obj.pool = message.pool;
    }
    return obj;
  },
  fromAminoMsg(object: QueryCommunityPoolResponseAminoMsg): QueryCommunityPoolResponse {
    return QueryCommunityPoolResponse.fromAmino(object.value);
  },
  toAminoMsg(message: QueryCommunityPoolResponse): QueryCommunityPoolResponseAminoMsg {
    return {
      type: "cosmos-sdk/QueryCommunityPoolResponse",
      value: QueryCommunityPoolResponse.toAmino(message)
    };
  },
  fromProtoMsg(message: QueryCommunityPoolResponseProtoMsg): QueryCommunityPoolResponse {
    return QueryCommunityPoolResponse.decode(message.value);
  },
  toProto(message: QueryCommunityPoolResponse): Uint8Array {
    return QueryCommunityPoolResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryCommunityPoolResponse): QueryCommunityPoolResponseProtoMsg {
    return {
      typeUrl: "/cosmos.distribution.v1beta1.QueryCommunityPoolResponse",
      value: QueryCommunityPoolResponse.encode(message).finish()
    };
  }
};