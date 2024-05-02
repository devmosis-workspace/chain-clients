import { Pool, PoolAmino, PoolSDKType, PurchaseList, PurchaseListAmino, PurchaseListSDKType, Purchase, PurchaseAmino, PurchaseSDKType, Provider, ProviderAmino, ProviderSDKType, ShieldStaking, ShieldStakingAmino, ShieldStakingSDKType } from "./shield";
import { PoolParams, PoolParamsAmino, PoolParamsSDKType, ClaimProposalParams, ClaimProposalParamsAmino, ClaimProposalParamsSDKType, DistributionParams, DistributionParamsAmino, DistributionParamsSDKType, Reimbursement, ReimbursementAmino, ReimbursementSDKType, ProposalIDReimbursementPair, ProposalIDReimbursementPairAmino, ProposalIDReimbursementPairSDKType } from "./genesis";
import { DecCoin, DecCoinAmino, DecCoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { BinaryWriter } from "../../../binary";
import { isSet } from "../../../helpers";
import { Decimal } from "@cosmjs/math";
export interface QueryPoolRequest {
  poolId: bigint;
}
export interface QueryPoolRequestProtoMsg {
  typeUrl: "/shentu.shield.v1alpha1.QueryPoolRequest";
  value: Uint8Array;
}
export interface QueryPoolRequestAmino {
  pool_id?: string;
}
export interface QueryPoolRequestAminoMsg {
  type: "/shentu.shield.v1alpha1.QueryPoolRequest";
  value: QueryPoolRequestAmino;
}
export interface QueryPoolRequestSDKType {
  pool_id: bigint;
}
export interface QueryPoolResponse {
  pool: Pool;
}
export interface QueryPoolResponseProtoMsg {
  typeUrl: "/shentu.shield.v1alpha1.QueryPoolResponse";
  value: Uint8Array;
}
export interface QueryPoolResponseAmino {
  pool?: PoolAmino;
}
export interface QueryPoolResponseAminoMsg {
  type: "/shentu.shield.v1alpha1.QueryPoolResponse";
  value: QueryPoolResponseAmino;
}
export interface QueryPoolResponseSDKType {
  pool: PoolSDKType;
}
export interface QuerySponsorRequest {
  sponsor: string;
}
export interface QuerySponsorRequestProtoMsg {
  typeUrl: "/shentu.shield.v1alpha1.QuerySponsorRequest";
  value: Uint8Array;
}
export interface QuerySponsorRequestAmino {
  sponsor?: string;
}
export interface QuerySponsorRequestAminoMsg {
  type: "/shentu.shield.v1alpha1.QuerySponsorRequest";
  value: QuerySponsorRequestAmino;
}
export interface QuerySponsorRequestSDKType {
  sponsor: string;
}
export interface QuerySponsorResponse {
  pools: Pool[];
}
export interface QuerySponsorResponseProtoMsg {
  typeUrl: "/shentu.shield.v1alpha1.QuerySponsorResponse";
  value: Uint8Array;
}
export interface QuerySponsorResponseAmino {
  pools?: PoolAmino[];
}
export interface QuerySponsorResponseAminoMsg {
  type: "/shentu.shield.v1alpha1.QuerySponsorResponse";
  value: QuerySponsorResponseAmino;
}
export interface QuerySponsorResponseSDKType {
  pools: PoolSDKType[];
}
export interface QueryPoolsRequest {}
export interface QueryPoolsRequestProtoMsg {
  typeUrl: "/shentu.shield.v1alpha1.QueryPoolsRequest";
  value: Uint8Array;
}
export interface QueryPoolsRequestAmino {}
export interface QueryPoolsRequestAminoMsg {
  type: "/shentu.shield.v1alpha1.QueryPoolsRequest";
  value: QueryPoolsRequestAmino;
}
export interface QueryPoolsRequestSDKType {}
export interface QueryPoolsResponse {
  pools: Pool[];
}
export interface QueryPoolsResponseProtoMsg {
  typeUrl: "/shentu.shield.v1alpha1.QueryPoolsResponse";
  value: Uint8Array;
}
export interface QueryPoolsResponseAmino {
  pools?: PoolAmino[];
}
export interface QueryPoolsResponseAminoMsg {
  type: "/shentu.shield.v1alpha1.QueryPoolsResponse";
  value: QueryPoolsResponseAmino;
}
export interface QueryPoolsResponseSDKType {
  pools: PoolSDKType[];
}
export interface QueryPoolPurchaseListsRequest {
  poolId: bigint;
}
export interface QueryPoolPurchaseListsRequestProtoMsg {
  typeUrl: "/shentu.shield.v1alpha1.QueryPoolPurchaseListsRequest";
  value: Uint8Array;
}
export interface QueryPoolPurchaseListsRequestAmino {
  pool_id?: string;
}
export interface QueryPoolPurchaseListsRequestAminoMsg {
  type: "/shentu.shield.v1alpha1.QueryPoolPurchaseListsRequest";
  value: QueryPoolPurchaseListsRequestAmino;
}
export interface QueryPoolPurchaseListsRequestSDKType {
  pool_id: bigint;
}
export interface QueryPurchaseListsRequest {
  purchaser: string;
}
export interface QueryPurchaseListsRequestProtoMsg {
  typeUrl: "/shentu.shield.v1alpha1.QueryPurchaseListsRequest";
  value: Uint8Array;
}
export interface QueryPurchaseListsRequestAmino {
  purchaser?: string;
}
export interface QueryPurchaseListsRequestAminoMsg {
  type: "/shentu.shield.v1alpha1.QueryPurchaseListsRequest";
  value: QueryPurchaseListsRequestAmino;
}
export interface QueryPurchaseListsRequestSDKType {
  purchaser: string;
}
export interface QueryPurchaseListsResponse {
  purchaseLists: PurchaseList[];
}
export interface QueryPurchaseListsResponseProtoMsg {
  typeUrl: "/shentu.shield.v1alpha1.QueryPurchaseListsResponse";
  value: Uint8Array;
}
export interface QueryPurchaseListsResponseAmino {
  purchase_lists?: PurchaseListAmino[];
}
export interface QueryPurchaseListsResponseAminoMsg {
  type: "/shentu.shield.v1alpha1.QueryPurchaseListsResponse";
  value: QueryPurchaseListsResponseAmino;
}
export interface QueryPurchaseListsResponseSDKType {
  purchase_lists: PurchaseListSDKType[];
}
export interface QueryPurchaseListRequest {
  poolId: bigint;
  purchaser: string;
}
export interface QueryPurchaseListRequestProtoMsg {
  typeUrl: "/shentu.shield.v1alpha1.QueryPurchaseListRequest";
  value: Uint8Array;
}
export interface QueryPurchaseListRequestAmino {
  pool_id?: string;
  purchaser?: string;
}
export interface QueryPurchaseListRequestAminoMsg {
  type: "/shentu.shield.v1alpha1.QueryPurchaseListRequest";
  value: QueryPurchaseListRequestAmino;
}
export interface QueryPurchaseListRequestSDKType {
  pool_id: bigint;
  purchaser: string;
}
export interface QueryPurchaseListResponse {
  purchaseList: PurchaseList;
}
export interface QueryPurchaseListResponseProtoMsg {
  typeUrl: "/shentu.shield.v1alpha1.QueryPurchaseListResponse";
  value: Uint8Array;
}
export interface QueryPurchaseListResponseAmino {
  purchase_list?: PurchaseListAmino;
}
export interface QueryPurchaseListResponseAminoMsg {
  type: "/shentu.shield.v1alpha1.QueryPurchaseListResponse";
  value: QueryPurchaseListResponseAmino;
}
export interface QueryPurchaseListResponseSDKType {
  purchase_list: PurchaseListSDKType;
}
export interface QueryPurchasesRequest {}
export interface QueryPurchasesRequestProtoMsg {
  typeUrl: "/shentu.shield.v1alpha1.QueryPurchasesRequest";
  value: Uint8Array;
}
export interface QueryPurchasesRequestAmino {}
export interface QueryPurchasesRequestAminoMsg {
  type: "/shentu.shield.v1alpha1.QueryPurchasesRequest";
  value: QueryPurchasesRequestAmino;
}
export interface QueryPurchasesRequestSDKType {}
export interface QueryPurchasesResponse {
  purchases: Purchase[];
}
export interface QueryPurchasesResponseProtoMsg {
  typeUrl: "/shentu.shield.v1alpha1.QueryPurchasesResponse";
  value: Uint8Array;
}
export interface QueryPurchasesResponseAmino {
  purchases?: PurchaseAmino[];
}
export interface QueryPurchasesResponseAminoMsg {
  type: "/shentu.shield.v1alpha1.QueryPurchasesResponse";
  value: QueryPurchasesResponseAmino;
}
export interface QueryPurchasesResponseSDKType {
  purchases: PurchaseSDKType[];
}
export interface QueryProviderRequest {
  address: string;
}
export interface QueryProviderRequestProtoMsg {
  typeUrl: "/shentu.shield.v1alpha1.QueryProviderRequest";
  value: Uint8Array;
}
export interface QueryProviderRequestAmino {
  address?: string;
}
export interface QueryProviderRequestAminoMsg {
  type: "/shentu.shield.v1alpha1.QueryProviderRequest";
  value: QueryProviderRequestAmino;
}
export interface QueryProviderRequestSDKType {
  address: string;
}
export interface QueryProviderResponse {
  provider: Provider;
}
export interface QueryProviderResponseProtoMsg {
  typeUrl: "/shentu.shield.v1alpha1.QueryProviderResponse";
  value: Uint8Array;
}
export interface QueryProviderResponseAmino {
  provider?: ProviderAmino;
}
export interface QueryProviderResponseAminoMsg {
  type: "/shentu.shield.v1alpha1.QueryProviderResponse";
  value: QueryProviderResponseAmino;
}
export interface QueryProviderResponseSDKType {
  provider: ProviderSDKType;
}
export interface QueryProvidersRequest {}
export interface QueryProvidersRequestProtoMsg {
  typeUrl: "/shentu.shield.v1alpha1.QueryProvidersRequest";
  value: Uint8Array;
}
export interface QueryProvidersRequestAmino {}
export interface QueryProvidersRequestAminoMsg {
  type: "/shentu.shield.v1alpha1.QueryProvidersRequest";
  value: QueryProvidersRequestAmino;
}
export interface QueryProvidersRequestSDKType {}
export interface QueryProvidersResponse {
  providers: Provider[];
}
export interface QueryProvidersResponseProtoMsg {
  typeUrl: "/shentu.shield.v1alpha1.QueryProvidersResponse";
  value: Uint8Array;
}
export interface QueryProvidersResponseAmino {
  providers?: ProviderAmino[];
}
export interface QueryProvidersResponseAminoMsg {
  type: "/shentu.shield.v1alpha1.QueryProvidersResponse";
  value: QueryProvidersResponseAmino;
}
export interface QueryProvidersResponseSDKType {
  providers: ProviderSDKType[];
}
export interface QueryPoolParamsRequest {}
export interface QueryPoolParamsRequestProtoMsg {
  typeUrl: "/shentu.shield.v1alpha1.QueryPoolParamsRequest";
  value: Uint8Array;
}
export interface QueryPoolParamsRequestAmino {}
export interface QueryPoolParamsRequestAminoMsg {
  type: "/shentu.shield.v1alpha1.QueryPoolParamsRequest";
  value: QueryPoolParamsRequestAmino;
}
export interface QueryPoolParamsRequestSDKType {}
export interface QueryPoolParamsResponse {
  params: PoolParams;
}
export interface QueryPoolParamsResponseProtoMsg {
  typeUrl: "/shentu.shield.v1alpha1.QueryPoolParamsResponse";
  value: Uint8Array;
}
export interface QueryPoolParamsResponseAmino {
  params?: PoolParamsAmino;
}
export interface QueryPoolParamsResponseAminoMsg {
  type: "/shentu.shield.v1alpha1.QueryPoolParamsResponse";
  value: QueryPoolParamsResponseAmino;
}
export interface QueryPoolParamsResponseSDKType {
  params: PoolParamsSDKType;
}
export interface QueryClaimParamsRequest {}
export interface QueryClaimParamsRequestProtoMsg {
  typeUrl: "/shentu.shield.v1alpha1.QueryClaimParamsRequest";
  value: Uint8Array;
}
export interface QueryClaimParamsRequestAmino {}
export interface QueryClaimParamsRequestAminoMsg {
  type: "/shentu.shield.v1alpha1.QueryClaimParamsRequest";
  value: QueryClaimParamsRequestAmino;
}
export interface QueryClaimParamsRequestSDKType {}
export interface QueryClaimParamsResponse {
  params: ClaimProposalParams;
}
export interface QueryClaimParamsResponseProtoMsg {
  typeUrl: "/shentu.shield.v1alpha1.QueryClaimParamsResponse";
  value: Uint8Array;
}
export interface QueryClaimParamsResponseAmino {
  params?: ClaimProposalParamsAmino;
}
export interface QueryClaimParamsResponseAminoMsg {
  type: "/shentu.shield.v1alpha1.QueryClaimParamsResponse";
  value: QueryClaimParamsResponseAmino;
}
export interface QueryClaimParamsResponseSDKType {
  params: ClaimProposalParamsSDKType;
}
export interface QueryDistrParamsRequest {}
export interface QueryDistrParamsRequestProtoMsg {
  typeUrl: "/shentu.shield.v1alpha1.QueryDistrParamsRequest";
  value: Uint8Array;
}
export interface QueryDistrParamsRequestAmino {}
export interface QueryDistrParamsRequestAminoMsg {
  type: "/shentu.shield.v1alpha1.QueryDistrParamsRequest";
  value: QueryDistrParamsRequestAmino;
}
export interface QueryDistrParamsRequestSDKType {}
export interface QueryDistrParamsResponse {
  params: DistributionParams;
}
export interface QueryDistrParamsResponseProtoMsg {
  typeUrl: "/shentu.shield.v1alpha1.QueryDistrParamsResponse";
  value: Uint8Array;
}
export interface QueryDistrParamsResponseAmino {
  params?: DistributionParamsAmino;
}
export interface QueryDistrParamsResponseAminoMsg {
  type: "/shentu.shield.v1alpha1.QueryDistrParamsResponse";
  value: QueryDistrParamsResponseAmino;
}
export interface QueryDistrParamsResponseSDKType {
  params: DistributionParamsSDKType;
}
export interface QueryShieldStatusRequest {}
export interface QueryShieldStatusRequestProtoMsg {
  typeUrl: "/shentu.shield.v1alpha1.QueryShieldStatusRequest";
  value: Uint8Array;
}
export interface QueryShieldStatusRequestAmino {}
export interface QueryShieldStatusRequestAminoMsg {
  type: "/shentu.shield.v1alpha1.QueryShieldStatusRequest";
  value: QueryShieldStatusRequestAmino;
}
export interface QueryShieldStatusRequestSDKType {}
export interface QueryShieldStatusResponse {
  totalCollateral: string;
  totalShield: string;
  totalWithdrawing: string;
  currentServiceFees: DecCoin[];
  remainingServiceFees: DecCoin[];
  globalShieldStakingPool: string;
}
export interface QueryShieldStatusResponseProtoMsg {
  typeUrl: "/shentu.shield.v1alpha1.QueryShieldStatusResponse";
  value: Uint8Array;
}
export interface QueryShieldStatusResponseAmino {
  total_collateral?: string;
  total_shield?: string;
  total_withdrawing?: string;
  current_service_fees?: DecCoinAmino[];
  remaining_service_fees?: DecCoinAmino[];
  global_shield_staking_pool?: string;
}
export interface QueryShieldStatusResponseAminoMsg {
  type: "/shentu.shield.v1alpha1.QueryShieldStatusResponse";
  value: QueryShieldStatusResponseAmino;
}
export interface QueryShieldStatusResponseSDKType {
  total_collateral: string;
  total_shield: string;
  total_withdrawing: string;
  current_service_fees: DecCoinSDKType[];
  remaining_service_fees: DecCoinSDKType[];
  global_shield_staking_pool: string;
}
export interface QueryShieldStakingRequest {
  poolId: bigint;
  purchaser: string;
}
export interface QueryShieldStakingRequestProtoMsg {
  typeUrl: "/shentu.shield.v1alpha1.QueryShieldStakingRequest";
  value: Uint8Array;
}
export interface QueryShieldStakingRequestAmino {
  pool_id?: string;
  purchaser?: string;
}
export interface QueryShieldStakingRequestAminoMsg {
  type: "/shentu.shield.v1alpha1.QueryShieldStakingRequest";
  value: QueryShieldStakingRequestAmino;
}
export interface QueryShieldStakingRequestSDKType {
  pool_id: bigint;
  purchaser: string;
}
export interface QueryShieldStakingResponse {
  shieldStaking: ShieldStaking;
}
export interface QueryShieldStakingResponseProtoMsg {
  typeUrl: "/shentu.shield.v1alpha1.QueryShieldStakingResponse";
  value: Uint8Array;
}
export interface QueryShieldStakingResponseAmino {
  shield_staking?: ShieldStakingAmino;
}
export interface QueryShieldStakingResponseAminoMsg {
  type: "/shentu.shield.v1alpha1.QueryShieldStakingResponse";
  value: QueryShieldStakingResponseAmino;
}
export interface QueryShieldStakingResponseSDKType {
  shield_staking: ShieldStakingSDKType;
}
export interface QueryShieldStakingRateRequest {}
export interface QueryShieldStakingRateRequestProtoMsg {
  typeUrl: "/shentu.shield.v1alpha1.QueryShieldStakingRateRequest";
  value: Uint8Array;
}
export interface QueryShieldStakingRateRequestAmino {}
export interface QueryShieldStakingRateRequestAminoMsg {
  type: "/shentu.shield.v1alpha1.QueryShieldStakingRateRequest";
  value: QueryShieldStakingRateRequestAmino;
}
export interface QueryShieldStakingRateRequestSDKType {}
export interface QueryShieldStakingRateResponse {
  rate: string;
}
export interface QueryShieldStakingRateResponseProtoMsg {
  typeUrl: "/shentu.shield.v1alpha1.QueryShieldStakingRateResponse";
  value: Uint8Array;
}
export interface QueryShieldStakingRateResponseAmino {
  rate?: string;
}
export interface QueryShieldStakingRateResponseAminoMsg {
  type: "/shentu.shield.v1alpha1.QueryShieldStakingRateResponse";
  value: QueryShieldStakingRateResponseAmino;
}
export interface QueryShieldStakingRateResponseSDKType {
  rate: string;
}
export interface QueryReimbursementRequest {
  proposalId: bigint;
}
export interface QueryReimbursementRequestProtoMsg {
  typeUrl: "/shentu.shield.v1alpha1.QueryReimbursementRequest";
  value: Uint8Array;
}
export interface QueryReimbursementRequestAmino {
  proposal_id?: string;
}
export interface QueryReimbursementRequestAminoMsg {
  type: "/shentu.shield.v1alpha1.QueryReimbursementRequest";
  value: QueryReimbursementRequestAmino;
}
export interface QueryReimbursementRequestSDKType {
  proposal_id: bigint;
}
export interface QueryReimbursementResponse {
  reimbursement: Reimbursement;
}
export interface QueryReimbursementResponseProtoMsg {
  typeUrl: "/shentu.shield.v1alpha1.QueryReimbursementResponse";
  value: Uint8Array;
}
export interface QueryReimbursementResponseAmino {
  reimbursement?: ReimbursementAmino;
}
export interface QueryReimbursementResponseAminoMsg {
  type: "/shentu.shield.v1alpha1.QueryReimbursementResponse";
  value: QueryReimbursementResponseAmino;
}
export interface QueryReimbursementResponseSDKType {
  reimbursement: ReimbursementSDKType;
}
export interface QueryReimbursementsRequest {}
export interface QueryReimbursementsRequestProtoMsg {
  typeUrl: "/shentu.shield.v1alpha1.QueryReimbursementsRequest";
  value: Uint8Array;
}
export interface QueryReimbursementsRequestAmino {}
export interface QueryReimbursementsRequestAminoMsg {
  type: "/shentu.shield.v1alpha1.QueryReimbursementsRequest";
  value: QueryReimbursementsRequestAmino;
}
export interface QueryReimbursementsRequestSDKType {}
export interface QueryReimbursementsResponse {
  pairs: ProposalIDReimbursementPair[];
}
export interface QueryReimbursementsResponseProtoMsg {
  typeUrl: "/shentu.shield.v1alpha1.QueryReimbursementsResponse";
  value: Uint8Array;
}
export interface QueryReimbursementsResponseAmino {
  pairs?: ProposalIDReimbursementPairAmino[];
}
export interface QueryReimbursementsResponseAminoMsg {
  type: "/shentu.shield.v1alpha1.QueryReimbursementsResponse";
  value: QueryReimbursementsResponseAmino;
}
export interface QueryReimbursementsResponseSDKType {
  pairs: ProposalIDReimbursementPairSDKType[];
}
function createBaseQueryPoolRequest(): QueryPoolRequest {
  return {
    poolId: BigInt(0)
  };
}
export const QueryPoolRequest = {
  typeUrl: "/shentu.shield.v1alpha1.QueryPoolRequest",
  encode(message: QueryPoolRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.poolId !== BigInt(0)) {
      writer.uint32(8).uint64(message.poolId);
    }
    return writer;
  },
  fromJSON(object: any): QueryPoolRequest {
    return {
      poolId: isSet(object.poolId) ? BigInt(object.poolId.toString()) : BigInt(0)
    };
  },
  fromPartial(object: Partial<QueryPoolRequest>): QueryPoolRequest {
    const message = createBaseQueryPoolRequest();
    message.poolId = object.poolId !== undefined && object.poolId !== null ? BigInt(object.poolId.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: QueryPoolRequestAmino): QueryPoolRequest {
    const message = createBaseQueryPoolRequest();
    if (object.pool_id !== undefined && object.pool_id !== null) {
      message.poolId = BigInt(object.pool_id);
    }
    return message;
  },
  toAmino(message: QueryPoolRequest): QueryPoolRequestAmino {
    const obj: any = {};
    obj.pool_id = message.poolId !== BigInt(0) ? message.poolId.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryPoolRequestAminoMsg): QueryPoolRequest {
    return QueryPoolRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryPoolRequestProtoMsg): QueryPoolRequest {
    return QueryPoolRequest.decode(message.value);
  },
  toProto(message: QueryPoolRequest): Uint8Array {
    return QueryPoolRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryPoolRequest): QueryPoolRequestProtoMsg {
    return {
      typeUrl: "/shentu.shield.v1alpha1.QueryPoolRequest",
      value: QueryPoolRequest.encode(message).finish()
    };
  }
};
function createBaseQueryPoolResponse(): QueryPoolResponse {
  return {
    pool: Pool.fromPartial({})
  };
}
export const QueryPoolResponse = {
  typeUrl: "/shentu.shield.v1alpha1.QueryPoolResponse",
  encode(message: QueryPoolResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.pool !== undefined) {
      Pool.encode(message.pool, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): QueryPoolResponse {
    return {
      pool: isSet(object.pool) ? Pool.fromJSON(object.pool) : undefined
    };
  },
  fromPartial(object: Partial<QueryPoolResponse>): QueryPoolResponse {
    const message = createBaseQueryPoolResponse();
    message.pool = object.pool !== undefined && object.pool !== null ? Pool.fromPartial(object.pool) : undefined;
    return message;
  },
  fromAmino(object: QueryPoolResponseAmino): QueryPoolResponse {
    const message = createBaseQueryPoolResponse();
    if (object.pool !== undefined && object.pool !== null) {
      message.pool = Pool.fromAmino(object.pool);
    }
    return message;
  },
  toAmino(message: QueryPoolResponse): QueryPoolResponseAmino {
    const obj: any = {};
    obj.pool = message.pool ? Pool.toAmino(message.pool) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryPoolResponseAminoMsg): QueryPoolResponse {
    return QueryPoolResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryPoolResponseProtoMsg): QueryPoolResponse {
    return QueryPoolResponse.decode(message.value);
  },
  toProto(message: QueryPoolResponse): Uint8Array {
    return QueryPoolResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryPoolResponse): QueryPoolResponseProtoMsg {
    return {
      typeUrl: "/shentu.shield.v1alpha1.QueryPoolResponse",
      value: QueryPoolResponse.encode(message).finish()
    };
  }
};
function createBaseQuerySponsorRequest(): QuerySponsorRequest {
  return {
    sponsor: ""
  };
}
export const QuerySponsorRequest = {
  typeUrl: "/shentu.shield.v1alpha1.QuerySponsorRequest",
  encode(message: QuerySponsorRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.sponsor !== "") {
      writer.uint32(10).string(message.sponsor);
    }
    return writer;
  },
  fromJSON(object: any): QuerySponsorRequest {
    return {
      sponsor: isSet(object.sponsor) ? String(object.sponsor) : ""
    };
  },
  fromPartial(object: Partial<QuerySponsorRequest>): QuerySponsorRequest {
    const message = createBaseQuerySponsorRequest();
    message.sponsor = object.sponsor ?? "";
    return message;
  },
  fromAmino(object: QuerySponsorRequestAmino): QuerySponsorRequest {
    const message = createBaseQuerySponsorRequest();
    if (object.sponsor !== undefined && object.sponsor !== null) {
      message.sponsor = object.sponsor;
    }
    return message;
  },
  toAmino(message: QuerySponsorRequest): QuerySponsorRequestAmino {
    const obj: any = {};
    obj.sponsor = message.sponsor === "" ? undefined : message.sponsor;
    return obj;
  },
  fromAminoMsg(object: QuerySponsorRequestAminoMsg): QuerySponsorRequest {
    return QuerySponsorRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QuerySponsorRequestProtoMsg): QuerySponsorRequest {
    return QuerySponsorRequest.decode(message.value);
  },
  toProto(message: QuerySponsorRequest): Uint8Array {
    return QuerySponsorRequest.encode(message).finish();
  },
  toProtoMsg(message: QuerySponsorRequest): QuerySponsorRequestProtoMsg {
    return {
      typeUrl: "/shentu.shield.v1alpha1.QuerySponsorRequest",
      value: QuerySponsorRequest.encode(message).finish()
    };
  }
};
function createBaseQuerySponsorResponse(): QuerySponsorResponse {
  return {
    pools: []
  };
}
export const QuerySponsorResponse = {
  typeUrl: "/shentu.shield.v1alpha1.QuerySponsorResponse",
  encode(message: QuerySponsorResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.pools) {
      Pool.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): QuerySponsorResponse {
    return {
      pools: Array.isArray(object?.pools) ? object.pools.map((e: any) => Pool.fromJSON(e)) : []
    };
  },
  fromPartial(object: Partial<QuerySponsorResponse>): QuerySponsorResponse {
    const message = createBaseQuerySponsorResponse();
    message.pools = object.pools?.map(e => Pool.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: QuerySponsorResponseAmino): QuerySponsorResponse {
    const message = createBaseQuerySponsorResponse();
    message.pools = object.pools?.map(e => Pool.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: QuerySponsorResponse): QuerySponsorResponseAmino {
    const obj: any = {};
    if (message.pools) {
      obj.pools = message.pools.map(e => e ? Pool.toAmino(e) : undefined);
    } else {
      obj.pools = message.pools;
    }
    return obj;
  },
  fromAminoMsg(object: QuerySponsorResponseAminoMsg): QuerySponsorResponse {
    return QuerySponsorResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QuerySponsorResponseProtoMsg): QuerySponsorResponse {
    return QuerySponsorResponse.decode(message.value);
  },
  toProto(message: QuerySponsorResponse): Uint8Array {
    return QuerySponsorResponse.encode(message).finish();
  },
  toProtoMsg(message: QuerySponsorResponse): QuerySponsorResponseProtoMsg {
    return {
      typeUrl: "/shentu.shield.v1alpha1.QuerySponsorResponse",
      value: QuerySponsorResponse.encode(message).finish()
    };
  }
};
function createBaseQueryPoolsRequest(): QueryPoolsRequest {
  return {};
}
export const QueryPoolsRequest = {
  typeUrl: "/shentu.shield.v1alpha1.QueryPoolsRequest",
  encode(_: QueryPoolsRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  fromJSON(_: any): QueryPoolsRequest {
    return {};
  },
  fromPartial(_: Partial<QueryPoolsRequest>): QueryPoolsRequest {
    const message = createBaseQueryPoolsRequest();
    return message;
  },
  fromAmino(_: QueryPoolsRequestAmino): QueryPoolsRequest {
    const message = createBaseQueryPoolsRequest();
    return message;
  },
  toAmino(_: QueryPoolsRequest): QueryPoolsRequestAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: QueryPoolsRequestAminoMsg): QueryPoolsRequest {
    return QueryPoolsRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryPoolsRequestProtoMsg): QueryPoolsRequest {
    return QueryPoolsRequest.decode(message.value);
  },
  toProto(message: QueryPoolsRequest): Uint8Array {
    return QueryPoolsRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryPoolsRequest): QueryPoolsRequestProtoMsg {
    return {
      typeUrl: "/shentu.shield.v1alpha1.QueryPoolsRequest",
      value: QueryPoolsRequest.encode(message).finish()
    };
  }
};
function createBaseQueryPoolsResponse(): QueryPoolsResponse {
  return {
    pools: []
  };
}
export const QueryPoolsResponse = {
  typeUrl: "/shentu.shield.v1alpha1.QueryPoolsResponse",
  encode(message: QueryPoolsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.pools) {
      Pool.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): QueryPoolsResponse {
    return {
      pools: Array.isArray(object?.pools) ? object.pools.map((e: any) => Pool.fromJSON(e)) : []
    };
  },
  fromPartial(object: Partial<QueryPoolsResponse>): QueryPoolsResponse {
    const message = createBaseQueryPoolsResponse();
    message.pools = object.pools?.map(e => Pool.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: QueryPoolsResponseAmino): QueryPoolsResponse {
    const message = createBaseQueryPoolsResponse();
    message.pools = object.pools?.map(e => Pool.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: QueryPoolsResponse): QueryPoolsResponseAmino {
    const obj: any = {};
    if (message.pools) {
      obj.pools = message.pools.map(e => e ? Pool.toAmino(e) : undefined);
    } else {
      obj.pools = message.pools;
    }
    return obj;
  },
  fromAminoMsg(object: QueryPoolsResponseAminoMsg): QueryPoolsResponse {
    return QueryPoolsResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryPoolsResponseProtoMsg): QueryPoolsResponse {
    return QueryPoolsResponse.decode(message.value);
  },
  toProto(message: QueryPoolsResponse): Uint8Array {
    return QueryPoolsResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryPoolsResponse): QueryPoolsResponseProtoMsg {
    return {
      typeUrl: "/shentu.shield.v1alpha1.QueryPoolsResponse",
      value: QueryPoolsResponse.encode(message).finish()
    };
  }
};
function createBaseQueryPoolPurchaseListsRequest(): QueryPoolPurchaseListsRequest {
  return {
    poolId: BigInt(0)
  };
}
export const QueryPoolPurchaseListsRequest = {
  typeUrl: "/shentu.shield.v1alpha1.QueryPoolPurchaseListsRequest",
  encode(message: QueryPoolPurchaseListsRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.poolId !== BigInt(0)) {
      writer.uint32(8).uint64(message.poolId);
    }
    return writer;
  },
  fromJSON(object: any): QueryPoolPurchaseListsRequest {
    return {
      poolId: isSet(object.poolId) ? BigInt(object.poolId.toString()) : BigInt(0)
    };
  },
  fromPartial(object: Partial<QueryPoolPurchaseListsRequest>): QueryPoolPurchaseListsRequest {
    const message = createBaseQueryPoolPurchaseListsRequest();
    message.poolId = object.poolId !== undefined && object.poolId !== null ? BigInt(object.poolId.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: QueryPoolPurchaseListsRequestAmino): QueryPoolPurchaseListsRequest {
    const message = createBaseQueryPoolPurchaseListsRequest();
    if (object.pool_id !== undefined && object.pool_id !== null) {
      message.poolId = BigInt(object.pool_id);
    }
    return message;
  },
  toAmino(message: QueryPoolPurchaseListsRequest): QueryPoolPurchaseListsRequestAmino {
    const obj: any = {};
    obj.pool_id = message.poolId !== BigInt(0) ? message.poolId.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryPoolPurchaseListsRequestAminoMsg): QueryPoolPurchaseListsRequest {
    return QueryPoolPurchaseListsRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryPoolPurchaseListsRequestProtoMsg): QueryPoolPurchaseListsRequest {
    return QueryPoolPurchaseListsRequest.decode(message.value);
  },
  toProto(message: QueryPoolPurchaseListsRequest): Uint8Array {
    return QueryPoolPurchaseListsRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryPoolPurchaseListsRequest): QueryPoolPurchaseListsRequestProtoMsg {
    return {
      typeUrl: "/shentu.shield.v1alpha1.QueryPoolPurchaseListsRequest",
      value: QueryPoolPurchaseListsRequest.encode(message).finish()
    };
  }
};
function createBaseQueryPurchaseListsRequest(): QueryPurchaseListsRequest {
  return {
    purchaser: ""
  };
}
export const QueryPurchaseListsRequest = {
  typeUrl: "/shentu.shield.v1alpha1.QueryPurchaseListsRequest",
  encode(message: QueryPurchaseListsRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.purchaser !== "") {
      writer.uint32(10).string(message.purchaser);
    }
    return writer;
  },
  fromJSON(object: any): QueryPurchaseListsRequest {
    return {
      purchaser: isSet(object.purchaser) ? String(object.purchaser) : ""
    };
  },
  fromPartial(object: Partial<QueryPurchaseListsRequest>): QueryPurchaseListsRequest {
    const message = createBaseQueryPurchaseListsRequest();
    message.purchaser = object.purchaser ?? "";
    return message;
  },
  fromAmino(object: QueryPurchaseListsRequestAmino): QueryPurchaseListsRequest {
    const message = createBaseQueryPurchaseListsRequest();
    if (object.purchaser !== undefined && object.purchaser !== null) {
      message.purchaser = object.purchaser;
    }
    return message;
  },
  toAmino(message: QueryPurchaseListsRequest): QueryPurchaseListsRequestAmino {
    const obj: any = {};
    obj.purchaser = message.purchaser === "" ? undefined : message.purchaser;
    return obj;
  },
  fromAminoMsg(object: QueryPurchaseListsRequestAminoMsg): QueryPurchaseListsRequest {
    return QueryPurchaseListsRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryPurchaseListsRequestProtoMsg): QueryPurchaseListsRequest {
    return QueryPurchaseListsRequest.decode(message.value);
  },
  toProto(message: QueryPurchaseListsRequest): Uint8Array {
    return QueryPurchaseListsRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryPurchaseListsRequest): QueryPurchaseListsRequestProtoMsg {
    return {
      typeUrl: "/shentu.shield.v1alpha1.QueryPurchaseListsRequest",
      value: QueryPurchaseListsRequest.encode(message).finish()
    };
  }
};
function createBaseQueryPurchaseListsResponse(): QueryPurchaseListsResponse {
  return {
    purchaseLists: []
  };
}
export const QueryPurchaseListsResponse = {
  typeUrl: "/shentu.shield.v1alpha1.QueryPurchaseListsResponse",
  encode(message: QueryPurchaseListsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.purchaseLists) {
      PurchaseList.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): QueryPurchaseListsResponse {
    return {
      purchaseLists: Array.isArray(object?.purchaseLists) ? object.purchaseLists.map((e: any) => PurchaseList.fromJSON(e)) : []
    };
  },
  fromPartial(object: Partial<QueryPurchaseListsResponse>): QueryPurchaseListsResponse {
    const message = createBaseQueryPurchaseListsResponse();
    message.purchaseLists = object.purchaseLists?.map(e => PurchaseList.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: QueryPurchaseListsResponseAmino): QueryPurchaseListsResponse {
    const message = createBaseQueryPurchaseListsResponse();
    message.purchaseLists = object.purchase_lists?.map(e => PurchaseList.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: QueryPurchaseListsResponse): QueryPurchaseListsResponseAmino {
    const obj: any = {};
    if (message.purchaseLists) {
      obj.purchase_lists = message.purchaseLists.map(e => e ? PurchaseList.toAmino(e) : undefined);
    } else {
      obj.purchase_lists = message.purchaseLists;
    }
    return obj;
  },
  fromAminoMsg(object: QueryPurchaseListsResponseAminoMsg): QueryPurchaseListsResponse {
    return QueryPurchaseListsResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryPurchaseListsResponseProtoMsg): QueryPurchaseListsResponse {
    return QueryPurchaseListsResponse.decode(message.value);
  },
  toProto(message: QueryPurchaseListsResponse): Uint8Array {
    return QueryPurchaseListsResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryPurchaseListsResponse): QueryPurchaseListsResponseProtoMsg {
    return {
      typeUrl: "/shentu.shield.v1alpha1.QueryPurchaseListsResponse",
      value: QueryPurchaseListsResponse.encode(message).finish()
    };
  }
};
function createBaseQueryPurchaseListRequest(): QueryPurchaseListRequest {
  return {
    poolId: BigInt(0),
    purchaser: ""
  };
}
export const QueryPurchaseListRequest = {
  typeUrl: "/shentu.shield.v1alpha1.QueryPurchaseListRequest",
  encode(message: QueryPurchaseListRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.poolId !== BigInt(0)) {
      writer.uint32(8).uint64(message.poolId);
    }
    if (message.purchaser !== "") {
      writer.uint32(18).string(message.purchaser);
    }
    return writer;
  },
  fromJSON(object: any): QueryPurchaseListRequest {
    return {
      poolId: isSet(object.poolId) ? BigInt(object.poolId.toString()) : BigInt(0),
      purchaser: isSet(object.purchaser) ? String(object.purchaser) : ""
    };
  },
  fromPartial(object: Partial<QueryPurchaseListRequest>): QueryPurchaseListRequest {
    const message = createBaseQueryPurchaseListRequest();
    message.poolId = object.poolId !== undefined && object.poolId !== null ? BigInt(object.poolId.toString()) : BigInt(0);
    message.purchaser = object.purchaser ?? "";
    return message;
  },
  fromAmino(object: QueryPurchaseListRequestAmino): QueryPurchaseListRequest {
    const message = createBaseQueryPurchaseListRequest();
    if (object.pool_id !== undefined && object.pool_id !== null) {
      message.poolId = BigInt(object.pool_id);
    }
    if (object.purchaser !== undefined && object.purchaser !== null) {
      message.purchaser = object.purchaser;
    }
    return message;
  },
  toAmino(message: QueryPurchaseListRequest): QueryPurchaseListRequestAmino {
    const obj: any = {};
    obj.pool_id = message.poolId !== BigInt(0) ? message.poolId.toString() : undefined;
    obj.purchaser = message.purchaser === "" ? undefined : message.purchaser;
    return obj;
  },
  fromAminoMsg(object: QueryPurchaseListRequestAminoMsg): QueryPurchaseListRequest {
    return QueryPurchaseListRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryPurchaseListRequestProtoMsg): QueryPurchaseListRequest {
    return QueryPurchaseListRequest.decode(message.value);
  },
  toProto(message: QueryPurchaseListRequest): Uint8Array {
    return QueryPurchaseListRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryPurchaseListRequest): QueryPurchaseListRequestProtoMsg {
    return {
      typeUrl: "/shentu.shield.v1alpha1.QueryPurchaseListRequest",
      value: QueryPurchaseListRequest.encode(message).finish()
    };
  }
};
function createBaseQueryPurchaseListResponse(): QueryPurchaseListResponse {
  return {
    purchaseList: PurchaseList.fromPartial({})
  };
}
export const QueryPurchaseListResponse = {
  typeUrl: "/shentu.shield.v1alpha1.QueryPurchaseListResponse",
  encode(message: QueryPurchaseListResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.purchaseList !== undefined) {
      PurchaseList.encode(message.purchaseList, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): QueryPurchaseListResponse {
    return {
      purchaseList: isSet(object.purchaseList) ? PurchaseList.fromJSON(object.purchaseList) : undefined
    };
  },
  fromPartial(object: Partial<QueryPurchaseListResponse>): QueryPurchaseListResponse {
    const message = createBaseQueryPurchaseListResponse();
    message.purchaseList = object.purchaseList !== undefined && object.purchaseList !== null ? PurchaseList.fromPartial(object.purchaseList) : undefined;
    return message;
  },
  fromAmino(object: QueryPurchaseListResponseAmino): QueryPurchaseListResponse {
    const message = createBaseQueryPurchaseListResponse();
    if (object.purchase_list !== undefined && object.purchase_list !== null) {
      message.purchaseList = PurchaseList.fromAmino(object.purchase_list);
    }
    return message;
  },
  toAmino(message: QueryPurchaseListResponse): QueryPurchaseListResponseAmino {
    const obj: any = {};
    obj.purchase_list = message.purchaseList ? PurchaseList.toAmino(message.purchaseList) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryPurchaseListResponseAminoMsg): QueryPurchaseListResponse {
    return QueryPurchaseListResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryPurchaseListResponseProtoMsg): QueryPurchaseListResponse {
    return QueryPurchaseListResponse.decode(message.value);
  },
  toProto(message: QueryPurchaseListResponse): Uint8Array {
    return QueryPurchaseListResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryPurchaseListResponse): QueryPurchaseListResponseProtoMsg {
    return {
      typeUrl: "/shentu.shield.v1alpha1.QueryPurchaseListResponse",
      value: QueryPurchaseListResponse.encode(message).finish()
    };
  }
};
function createBaseQueryPurchasesRequest(): QueryPurchasesRequest {
  return {};
}
export const QueryPurchasesRequest = {
  typeUrl: "/shentu.shield.v1alpha1.QueryPurchasesRequest",
  encode(_: QueryPurchasesRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  fromJSON(_: any): QueryPurchasesRequest {
    return {};
  },
  fromPartial(_: Partial<QueryPurchasesRequest>): QueryPurchasesRequest {
    const message = createBaseQueryPurchasesRequest();
    return message;
  },
  fromAmino(_: QueryPurchasesRequestAmino): QueryPurchasesRequest {
    const message = createBaseQueryPurchasesRequest();
    return message;
  },
  toAmino(_: QueryPurchasesRequest): QueryPurchasesRequestAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: QueryPurchasesRequestAminoMsg): QueryPurchasesRequest {
    return QueryPurchasesRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryPurchasesRequestProtoMsg): QueryPurchasesRequest {
    return QueryPurchasesRequest.decode(message.value);
  },
  toProto(message: QueryPurchasesRequest): Uint8Array {
    return QueryPurchasesRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryPurchasesRequest): QueryPurchasesRequestProtoMsg {
    return {
      typeUrl: "/shentu.shield.v1alpha1.QueryPurchasesRequest",
      value: QueryPurchasesRequest.encode(message).finish()
    };
  }
};
function createBaseQueryPurchasesResponse(): QueryPurchasesResponse {
  return {
    purchases: []
  };
}
export const QueryPurchasesResponse = {
  typeUrl: "/shentu.shield.v1alpha1.QueryPurchasesResponse",
  encode(message: QueryPurchasesResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.purchases) {
      Purchase.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): QueryPurchasesResponse {
    return {
      purchases: Array.isArray(object?.purchases) ? object.purchases.map((e: any) => Purchase.fromJSON(e)) : []
    };
  },
  fromPartial(object: Partial<QueryPurchasesResponse>): QueryPurchasesResponse {
    const message = createBaseQueryPurchasesResponse();
    message.purchases = object.purchases?.map(e => Purchase.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: QueryPurchasesResponseAmino): QueryPurchasesResponse {
    const message = createBaseQueryPurchasesResponse();
    message.purchases = object.purchases?.map(e => Purchase.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: QueryPurchasesResponse): QueryPurchasesResponseAmino {
    const obj: any = {};
    if (message.purchases) {
      obj.purchases = message.purchases.map(e => e ? Purchase.toAmino(e) : undefined);
    } else {
      obj.purchases = message.purchases;
    }
    return obj;
  },
  fromAminoMsg(object: QueryPurchasesResponseAminoMsg): QueryPurchasesResponse {
    return QueryPurchasesResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryPurchasesResponseProtoMsg): QueryPurchasesResponse {
    return QueryPurchasesResponse.decode(message.value);
  },
  toProto(message: QueryPurchasesResponse): Uint8Array {
    return QueryPurchasesResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryPurchasesResponse): QueryPurchasesResponseProtoMsg {
    return {
      typeUrl: "/shentu.shield.v1alpha1.QueryPurchasesResponse",
      value: QueryPurchasesResponse.encode(message).finish()
    };
  }
};
function createBaseQueryProviderRequest(): QueryProviderRequest {
  return {
    address: ""
  };
}
export const QueryProviderRequest = {
  typeUrl: "/shentu.shield.v1alpha1.QueryProviderRequest",
  encode(message: QueryProviderRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    return writer;
  },
  fromJSON(object: any): QueryProviderRequest {
    return {
      address: isSet(object.address) ? String(object.address) : ""
    };
  },
  fromPartial(object: Partial<QueryProviderRequest>): QueryProviderRequest {
    const message = createBaseQueryProviderRequest();
    message.address = object.address ?? "";
    return message;
  },
  fromAmino(object: QueryProviderRequestAmino): QueryProviderRequest {
    const message = createBaseQueryProviderRequest();
    if (object.address !== undefined && object.address !== null) {
      message.address = object.address;
    }
    return message;
  },
  toAmino(message: QueryProviderRequest): QueryProviderRequestAmino {
    const obj: any = {};
    obj.address = message.address === "" ? undefined : message.address;
    return obj;
  },
  fromAminoMsg(object: QueryProviderRequestAminoMsg): QueryProviderRequest {
    return QueryProviderRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryProviderRequestProtoMsg): QueryProviderRequest {
    return QueryProviderRequest.decode(message.value);
  },
  toProto(message: QueryProviderRequest): Uint8Array {
    return QueryProviderRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryProviderRequest): QueryProviderRequestProtoMsg {
    return {
      typeUrl: "/shentu.shield.v1alpha1.QueryProviderRequest",
      value: QueryProviderRequest.encode(message).finish()
    };
  }
};
function createBaseQueryProviderResponse(): QueryProviderResponse {
  return {
    provider: Provider.fromPartial({})
  };
}
export const QueryProviderResponse = {
  typeUrl: "/shentu.shield.v1alpha1.QueryProviderResponse",
  encode(message: QueryProviderResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.provider !== undefined) {
      Provider.encode(message.provider, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): QueryProviderResponse {
    return {
      provider: isSet(object.provider) ? Provider.fromJSON(object.provider) : undefined
    };
  },
  fromPartial(object: Partial<QueryProviderResponse>): QueryProviderResponse {
    const message = createBaseQueryProviderResponse();
    message.provider = object.provider !== undefined && object.provider !== null ? Provider.fromPartial(object.provider) : undefined;
    return message;
  },
  fromAmino(object: QueryProviderResponseAmino): QueryProviderResponse {
    const message = createBaseQueryProviderResponse();
    if (object.provider !== undefined && object.provider !== null) {
      message.provider = Provider.fromAmino(object.provider);
    }
    return message;
  },
  toAmino(message: QueryProviderResponse): QueryProviderResponseAmino {
    const obj: any = {};
    obj.provider = message.provider ? Provider.toAmino(message.provider) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryProviderResponseAminoMsg): QueryProviderResponse {
    return QueryProviderResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryProviderResponseProtoMsg): QueryProviderResponse {
    return QueryProviderResponse.decode(message.value);
  },
  toProto(message: QueryProviderResponse): Uint8Array {
    return QueryProviderResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryProviderResponse): QueryProviderResponseProtoMsg {
    return {
      typeUrl: "/shentu.shield.v1alpha1.QueryProviderResponse",
      value: QueryProviderResponse.encode(message).finish()
    };
  }
};
function createBaseQueryProvidersRequest(): QueryProvidersRequest {
  return {};
}
export const QueryProvidersRequest = {
  typeUrl: "/shentu.shield.v1alpha1.QueryProvidersRequest",
  encode(_: QueryProvidersRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  fromJSON(_: any): QueryProvidersRequest {
    return {};
  },
  fromPartial(_: Partial<QueryProvidersRequest>): QueryProvidersRequest {
    const message = createBaseQueryProvidersRequest();
    return message;
  },
  fromAmino(_: QueryProvidersRequestAmino): QueryProvidersRequest {
    const message = createBaseQueryProvidersRequest();
    return message;
  },
  toAmino(_: QueryProvidersRequest): QueryProvidersRequestAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: QueryProvidersRequestAminoMsg): QueryProvidersRequest {
    return QueryProvidersRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryProvidersRequestProtoMsg): QueryProvidersRequest {
    return QueryProvidersRequest.decode(message.value);
  },
  toProto(message: QueryProvidersRequest): Uint8Array {
    return QueryProvidersRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryProvidersRequest): QueryProvidersRequestProtoMsg {
    return {
      typeUrl: "/shentu.shield.v1alpha1.QueryProvidersRequest",
      value: QueryProvidersRequest.encode(message).finish()
    };
  }
};
function createBaseQueryProvidersResponse(): QueryProvidersResponse {
  return {
    providers: []
  };
}
export const QueryProvidersResponse = {
  typeUrl: "/shentu.shield.v1alpha1.QueryProvidersResponse",
  encode(message: QueryProvidersResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.providers) {
      Provider.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): QueryProvidersResponse {
    return {
      providers: Array.isArray(object?.providers) ? object.providers.map((e: any) => Provider.fromJSON(e)) : []
    };
  },
  fromPartial(object: Partial<QueryProvidersResponse>): QueryProvidersResponse {
    const message = createBaseQueryProvidersResponse();
    message.providers = object.providers?.map(e => Provider.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: QueryProvidersResponseAmino): QueryProvidersResponse {
    const message = createBaseQueryProvidersResponse();
    message.providers = object.providers?.map(e => Provider.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: QueryProvidersResponse): QueryProvidersResponseAmino {
    const obj: any = {};
    if (message.providers) {
      obj.providers = message.providers.map(e => e ? Provider.toAmino(e) : undefined);
    } else {
      obj.providers = message.providers;
    }
    return obj;
  },
  fromAminoMsg(object: QueryProvidersResponseAminoMsg): QueryProvidersResponse {
    return QueryProvidersResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryProvidersResponseProtoMsg): QueryProvidersResponse {
    return QueryProvidersResponse.decode(message.value);
  },
  toProto(message: QueryProvidersResponse): Uint8Array {
    return QueryProvidersResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryProvidersResponse): QueryProvidersResponseProtoMsg {
    return {
      typeUrl: "/shentu.shield.v1alpha1.QueryProvidersResponse",
      value: QueryProvidersResponse.encode(message).finish()
    };
  }
};
function createBaseQueryPoolParamsRequest(): QueryPoolParamsRequest {
  return {};
}
export const QueryPoolParamsRequest = {
  typeUrl: "/shentu.shield.v1alpha1.QueryPoolParamsRequest",
  encode(_: QueryPoolParamsRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  fromJSON(_: any): QueryPoolParamsRequest {
    return {};
  },
  fromPartial(_: Partial<QueryPoolParamsRequest>): QueryPoolParamsRequest {
    const message = createBaseQueryPoolParamsRequest();
    return message;
  },
  fromAmino(_: QueryPoolParamsRequestAmino): QueryPoolParamsRequest {
    const message = createBaseQueryPoolParamsRequest();
    return message;
  },
  toAmino(_: QueryPoolParamsRequest): QueryPoolParamsRequestAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: QueryPoolParamsRequestAminoMsg): QueryPoolParamsRequest {
    return QueryPoolParamsRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryPoolParamsRequestProtoMsg): QueryPoolParamsRequest {
    return QueryPoolParamsRequest.decode(message.value);
  },
  toProto(message: QueryPoolParamsRequest): Uint8Array {
    return QueryPoolParamsRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryPoolParamsRequest): QueryPoolParamsRequestProtoMsg {
    return {
      typeUrl: "/shentu.shield.v1alpha1.QueryPoolParamsRequest",
      value: QueryPoolParamsRequest.encode(message).finish()
    };
  }
};
function createBaseQueryPoolParamsResponse(): QueryPoolParamsResponse {
  return {
    params: PoolParams.fromPartial({})
  };
}
export const QueryPoolParamsResponse = {
  typeUrl: "/shentu.shield.v1alpha1.QueryPoolParamsResponse",
  encode(message: QueryPoolParamsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.params !== undefined) {
      PoolParams.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): QueryPoolParamsResponse {
    return {
      params: isSet(object.params) ? PoolParams.fromJSON(object.params) : undefined
    };
  },
  fromPartial(object: Partial<QueryPoolParamsResponse>): QueryPoolParamsResponse {
    const message = createBaseQueryPoolParamsResponse();
    message.params = object.params !== undefined && object.params !== null ? PoolParams.fromPartial(object.params) : undefined;
    return message;
  },
  fromAmino(object: QueryPoolParamsResponseAmino): QueryPoolParamsResponse {
    const message = createBaseQueryPoolParamsResponse();
    if (object.params !== undefined && object.params !== null) {
      message.params = PoolParams.fromAmino(object.params);
    }
    return message;
  },
  toAmino(message: QueryPoolParamsResponse): QueryPoolParamsResponseAmino {
    const obj: any = {};
    obj.params = message.params ? PoolParams.toAmino(message.params) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryPoolParamsResponseAminoMsg): QueryPoolParamsResponse {
    return QueryPoolParamsResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryPoolParamsResponseProtoMsg): QueryPoolParamsResponse {
    return QueryPoolParamsResponse.decode(message.value);
  },
  toProto(message: QueryPoolParamsResponse): Uint8Array {
    return QueryPoolParamsResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryPoolParamsResponse): QueryPoolParamsResponseProtoMsg {
    return {
      typeUrl: "/shentu.shield.v1alpha1.QueryPoolParamsResponse",
      value: QueryPoolParamsResponse.encode(message).finish()
    };
  }
};
function createBaseQueryClaimParamsRequest(): QueryClaimParamsRequest {
  return {};
}
export const QueryClaimParamsRequest = {
  typeUrl: "/shentu.shield.v1alpha1.QueryClaimParamsRequest",
  encode(_: QueryClaimParamsRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  fromJSON(_: any): QueryClaimParamsRequest {
    return {};
  },
  fromPartial(_: Partial<QueryClaimParamsRequest>): QueryClaimParamsRequest {
    const message = createBaseQueryClaimParamsRequest();
    return message;
  },
  fromAmino(_: QueryClaimParamsRequestAmino): QueryClaimParamsRequest {
    const message = createBaseQueryClaimParamsRequest();
    return message;
  },
  toAmino(_: QueryClaimParamsRequest): QueryClaimParamsRequestAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: QueryClaimParamsRequestAminoMsg): QueryClaimParamsRequest {
    return QueryClaimParamsRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryClaimParamsRequestProtoMsg): QueryClaimParamsRequest {
    return QueryClaimParamsRequest.decode(message.value);
  },
  toProto(message: QueryClaimParamsRequest): Uint8Array {
    return QueryClaimParamsRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryClaimParamsRequest): QueryClaimParamsRequestProtoMsg {
    return {
      typeUrl: "/shentu.shield.v1alpha1.QueryClaimParamsRequest",
      value: QueryClaimParamsRequest.encode(message).finish()
    };
  }
};
function createBaseQueryClaimParamsResponse(): QueryClaimParamsResponse {
  return {
    params: ClaimProposalParams.fromPartial({})
  };
}
export const QueryClaimParamsResponse = {
  typeUrl: "/shentu.shield.v1alpha1.QueryClaimParamsResponse",
  encode(message: QueryClaimParamsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.params !== undefined) {
      ClaimProposalParams.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): QueryClaimParamsResponse {
    return {
      params: isSet(object.params) ? ClaimProposalParams.fromJSON(object.params) : undefined
    };
  },
  fromPartial(object: Partial<QueryClaimParamsResponse>): QueryClaimParamsResponse {
    const message = createBaseQueryClaimParamsResponse();
    message.params = object.params !== undefined && object.params !== null ? ClaimProposalParams.fromPartial(object.params) : undefined;
    return message;
  },
  fromAmino(object: QueryClaimParamsResponseAmino): QueryClaimParamsResponse {
    const message = createBaseQueryClaimParamsResponse();
    if (object.params !== undefined && object.params !== null) {
      message.params = ClaimProposalParams.fromAmino(object.params);
    }
    return message;
  },
  toAmino(message: QueryClaimParamsResponse): QueryClaimParamsResponseAmino {
    const obj: any = {};
    obj.params = message.params ? ClaimProposalParams.toAmino(message.params) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryClaimParamsResponseAminoMsg): QueryClaimParamsResponse {
    return QueryClaimParamsResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryClaimParamsResponseProtoMsg): QueryClaimParamsResponse {
    return QueryClaimParamsResponse.decode(message.value);
  },
  toProto(message: QueryClaimParamsResponse): Uint8Array {
    return QueryClaimParamsResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryClaimParamsResponse): QueryClaimParamsResponseProtoMsg {
    return {
      typeUrl: "/shentu.shield.v1alpha1.QueryClaimParamsResponse",
      value: QueryClaimParamsResponse.encode(message).finish()
    };
  }
};
function createBaseQueryDistrParamsRequest(): QueryDistrParamsRequest {
  return {};
}
export const QueryDistrParamsRequest = {
  typeUrl: "/shentu.shield.v1alpha1.QueryDistrParamsRequest",
  encode(_: QueryDistrParamsRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  fromJSON(_: any): QueryDistrParamsRequest {
    return {};
  },
  fromPartial(_: Partial<QueryDistrParamsRequest>): QueryDistrParamsRequest {
    const message = createBaseQueryDistrParamsRequest();
    return message;
  },
  fromAmino(_: QueryDistrParamsRequestAmino): QueryDistrParamsRequest {
    const message = createBaseQueryDistrParamsRequest();
    return message;
  },
  toAmino(_: QueryDistrParamsRequest): QueryDistrParamsRequestAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: QueryDistrParamsRequestAminoMsg): QueryDistrParamsRequest {
    return QueryDistrParamsRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryDistrParamsRequestProtoMsg): QueryDistrParamsRequest {
    return QueryDistrParamsRequest.decode(message.value);
  },
  toProto(message: QueryDistrParamsRequest): Uint8Array {
    return QueryDistrParamsRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryDistrParamsRequest): QueryDistrParamsRequestProtoMsg {
    return {
      typeUrl: "/shentu.shield.v1alpha1.QueryDistrParamsRequest",
      value: QueryDistrParamsRequest.encode(message).finish()
    };
  }
};
function createBaseQueryDistrParamsResponse(): QueryDistrParamsResponse {
  return {
    params: DistributionParams.fromPartial({})
  };
}
export const QueryDistrParamsResponse = {
  typeUrl: "/shentu.shield.v1alpha1.QueryDistrParamsResponse",
  encode(message: QueryDistrParamsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.params !== undefined) {
      DistributionParams.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): QueryDistrParamsResponse {
    return {
      params: isSet(object.params) ? DistributionParams.fromJSON(object.params) : undefined
    };
  },
  fromPartial(object: Partial<QueryDistrParamsResponse>): QueryDistrParamsResponse {
    const message = createBaseQueryDistrParamsResponse();
    message.params = object.params !== undefined && object.params !== null ? DistributionParams.fromPartial(object.params) : undefined;
    return message;
  },
  fromAmino(object: QueryDistrParamsResponseAmino): QueryDistrParamsResponse {
    const message = createBaseQueryDistrParamsResponse();
    if (object.params !== undefined && object.params !== null) {
      message.params = DistributionParams.fromAmino(object.params);
    }
    return message;
  },
  toAmino(message: QueryDistrParamsResponse): QueryDistrParamsResponseAmino {
    const obj: any = {};
    obj.params = message.params ? DistributionParams.toAmino(message.params) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryDistrParamsResponseAminoMsg): QueryDistrParamsResponse {
    return QueryDistrParamsResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryDistrParamsResponseProtoMsg): QueryDistrParamsResponse {
    return QueryDistrParamsResponse.decode(message.value);
  },
  toProto(message: QueryDistrParamsResponse): Uint8Array {
    return QueryDistrParamsResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryDistrParamsResponse): QueryDistrParamsResponseProtoMsg {
    return {
      typeUrl: "/shentu.shield.v1alpha1.QueryDistrParamsResponse",
      value: QueryDistrParamsResponse.encode(message).finish()
    };
  }
};
function createBaseQueryShieldStatusRequest(): QueryShieldStatusRequest {
  return {};
}
export const QueryShieldStatusRequest = {
  typeUrl: "/shentu.shield.v1alpha1.QueryShieldStatusRequest",
  encode(_: QueryShieldStatusRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  fromJSON(_: any): QueryShieldStatusRequest {
    return {};
  },
  fromPartial(_: Partial<QueryShieldStatusRequest>): QueryShieldStatusRequest {
    const message = createBaseQueryShieldStatusRequest();
    return message;
  },
  fromAmino(_: QueryShieldStatusRequestAmino): QueryShieldStatusRequest {
    const message = createBaseQueryShieldStatusRequest();
    return message;
  },
  toAmino(_: QueryShieldStatusRequest): QueryShieldStatusRequestAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: QueryShieldStatusRequestAminoMsg): QueryShieldStatusRequest {
    return QueryShieldStatusRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryShieldStatusRequestProtoMsg): QueryShieldStatusRequest {
    return QueryShieldStatusRequest.decode(message.value);
  },
  toProto(message: QueryShieldStatusRequest): Uint8Array {
    return QueryShieldStatusRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryShieldStatusRequest): QueryShieldStatusRequestProtoMsg {
    return {
      typeUrl: "/shentu.shield.v1alpha1.QueryShieldStatusRequest",
      value: QueryShieldStatusRequest.encode(message).finish()
    };
  }
};
function createBaseQueryShieldStatusResponse(): QueryShieldStatusResponse {
  return {
    totalCollateral: "",
    totalShield: "",
    totalWithdrawing: "",
    currentServiceFees: [],
    remainingServiceFees: [],
    globalShieldStakingPool: ""
  };
}
export const QueryShieldStatusResponse = {
  typeUrl: "/shentu.shield.v1alpha1.QueryShieldStatusResponse",
  encode(message: QueryShieldStatusResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.totalCollateral !== "") {
      writer.uint32(10).string(message.totalCollateral);
    }
    if (message.totalShield !== "") {
      writer.uint32(18).string(message.totalShield);
    }
    if (message.totalWithdrawing !== "") {
      writer.uint32(26).string(message.totalWithdrawing);
    }
    for (const v of message.currentServiceFees) {
      DecCoin.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    for (const v of message.remainingServiceFees) {
      DecCoin.encode(v!, writer.uint32(42).fork()).ldelim();
    }
    if (message.globalShieldStakingPool !== "") {
      writer.uint32(50).string(message.globalShieldStakingPool);
    }
    return writer;
  },
  fromJSON(object: any): QueryShieldStatusResponse {
    return {
      totalCollateral: isSet(object.totalCollateral) ? String(object.totalCollateral) : "",
      totalShield: isSet(object.totalShield) ? String(object.totalShield) : "",
      totalWithdrawing: isSet(object.totalWithdrawing) ? String(object.totalWithdrawing) : "",
      currentServiceFees: Array.isArray(object?.currentServiceFees) ? object.currentServiceFees.map((e: any) => DecCoin.fromJSON(e)) : [],
      remainingServiceFees: Array.isArray(object?.remainingServiceFees) ? object.remainingServiceFees.map((e: any) => DecCoin.fromJSON(e)) : [],
      globalShieldStakingPool: isSet(object.globalShieldStakingPool) ? String(object.globalShieldStakingPool) : ""
    };
  },
  fromPartial(object: Partial<QueryShieldStatusResponse>): QueryShieldStatusResponse {
    const message = createBaseQueryShieldStatusResponse();
    message.totalCollateral = object.totalCollateral ?? "";
    message.totalShield = object.totalShield ?? "";
    message.totalWithdrawing = object.totalWithdrawing ?? "";
    message.currentServiceFees = object.currentServiceFees?.map(e => DecCoin.fromPartial(e)) || [];
    message.remainingServiceFees = object.remainingServiceFees?.map(e => DecCoin.fromPartial(e)) || [];
    message.globalShieldStakingPool = object.globalShieldStakingPool ?? "";
    return message;
  },
  fromAmino(object: QueryShieldStatusResponseAmino): QueryShieldStatusResponse {
    const message = createBaseQueryShieldStatusResponse();
    if (object.total_collateral !== undefined && object.total_collateral !== null) {
      message.totalCollateral = object.total_collateral;
    }
    if (object.total_shield !== undefined && object.total_shield !== null) {
      message.totalShield = object.total_shield;
    }
    if (object.total_withdrawing !== undefined && object.total_withdrawing !== null) {
      message.totalWithdrawing = object.total_withdrawing;
    }
    message.currentServiceFees = object.current_service_fees?.map(e => DecCoin.fromAmino(e)) || [];
    message.remainingServiceFees = object.remaining_service_fees?.map(e => DecCoin.fromAmino(e)) || [];
    if (object.global_shield_staking_pool !== undefined && object.global_shield_staking_pool !== null) {
      message.globalShieldStakingPool = object.global_shield_staking_pool;
    }
    return message;
  },
  toAmino(message: QueryShieldStatusResponse): QueryShieldStatusResponseAmino {
    const obj: any = {};
    obj.total_collateral = message.totalCollateral === "" ? undefined : message.totalCollateral;
    obj.total_shield = message.totalShield === "" ? undefined : message.totalShield;
    obj.total_withdrawing = message.totalWithdrawing === "" ? undefined : message.totalWithdrawing;
    if (message.currentServiceFees) {
      obj.current_service_fees = message.currentServiceFees.map(e => e ? DecCoin.toAmino(e) : undefined);
    } else {
      obj.current_service_fees = message.currentServiceFees;
    }
    if (message.remainingServiceFees) {
      obj.remaining_service_fees = message.remainingServiceFees.map(e => e ? DecCoin.toAmino(e) : undefined);
    } else {
      obj.remaining_service_fees = message.remainingServiceFees;
    }
    obj.global_shield_staking_pool = message.globalShieldStakingPool === "" ? undefined : message.globalShieldStakingPool;
    return obj;
  },
  fromAminoMsg(object: QueryShieldStatusResponseAminoMsg): QueryShieldStatusResponse {
    return QueryShieldStatusResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryShieldStatusResponseProtoMsg): QueryShieldStatusResponse {
    return QueryShieldStatusResponse.decode(message.value);
  },
  toProto(message: QueryShieldStatusResponse): Uint8Array {
    return QueryShieldStatusResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryShieldStatusResponse): QueryShieldStatusResponseProtoMsg {
    return {
      typeUrl: "/shentu.shield.v1alpha1.QueryShieldStatusResponse",
      value: QueryShieldStatusResponse.encode(message).finish()
    };
  }
};
function createBaseQueryShieldStakingRequest(): QueryShieldStakingRequest {
  return {
    poolId: BigInt(0),
    purchaser: ""
  };
}
export const QueryShieldStakingRequest = {
  typeUrl: "/shentu.shield.v1alpha1.QueryShieldStakingRequest",
  encode(message: QueryShieldStakingRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.poolId !== BigInt(0)) {
      writer.uint32(8).uint64(message.poolId);
    }
    if (message.purchaser !== "") {
      writer.uint32(18).string(message.purchaser);
    }
    return writer;
  },
  fromJSON(object: any): QueryShieldStakingRequest {
    return {
      poolId: isSet(object.poolId) ? BigInt(object.poolId.toString()) : BigInt(0),
      purchaser: isSet(object.purchaser) ? String(object.purchaser) : ""
    };
  },
  fromPartial(object: Partial<QueryShieldStakingRequest>): QueryShieldStakingRequest {
    const message = createBaseQueryShieldStakingRequest();
    message.poolId = object.poolId !== undefined && object.poolId !== null ? BigInt(object.poolId.toString()) : BigInt(0);
    message.purchaser = object.purchaser ?? "";
    return message;
  },
  fromAmino(object: QueryShieldStakingRequestAmino): QueryShieldStakingRequest {
    const message = createBaseQueryShieldStakingRequest();
    if (object.pool_id !== undefined && object.pool_id !== null) {
      message.poolId = BigInt(object.pool_id);
    }
    if (object.purchaser !== undefined && object.purchaser !== null) {
      message.purchaser = object.purchaser;
    }
    return message;
  },
  toAmino(message: QueryShieldStakingRequest): QueryShieldStakingRequestAmino {
    const obj: any = {};
    obj.pool_id = message.poolId !== BigInt(0) ? message.poolId.toString() : undefined;
    obj.purchaser = message.purchaser === "" ? undefined : message.purchaser;
    return obj;
  },
  fromAminoMsg(object: QueryShieldStakingRequestAminoMsg): QueryShieldStakingRequest {
    return QueryShieldStakingRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryShieldStakingRequestProtoMsg): QueryShieldStakingRequest {
    return QueryShieldStakingRequest.decode(message.value);
  },
  toProto(message: QueryShieldStakingRequest): Uint8Array {
    return QueryShieldStakingRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryShieldStakingRequest): QueryShieldStakingRequestProtoMsg {
    return {
      typeUrl: "/shentu.shield.v1alpha1.QueryShieldStakingRequest",
      value: QueryShieldStakingRequest.encode(message).finish()
    };
  }
};
function createBaseQueryShieldStakingResponse(): QueryShieldStakingResponse {
  return {
    shieldStaking: ShieldStaking.fromPartial({})
  };
}
export const QueryShieldStakingResponse = {
  typeUrl: "/shentu.shield.v1alpha1.QueryShieldStakingResponse",
  encode(message: QueryShieldStakingResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.shieldStaking !== undefined) {
      ShieldStaking.encode(message.shieldStaking, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): QueryShieldStakingResponse {
    return {
      shieldStaking: isSet(object.shieldStaking) ? ShieldStaking.fromJSON(object.shieldStaking) : undefined
    };
  },
  fromPartial(object: Partial<QueryShieldStakingResponse>): QueryShieldStakingResponse {
    const message = createBaseQueryShieldStakingResponse();
    message.shieldStaking = object.shieldStaking !== undefined && object.shieldStaking !== null ? ShieldStaking.fromPartial(object.shieldStaking) : undefined;
    return message;
  },
  fromAmino(object: QueryShieldStakingResponseAmino): QueryShieldStakingResponse {
    const message = createBaseQueryShieldStakingResponse();
    if (object.shield_staking !== undefined && object.shield_staking !== null) {
      message.shieldStaking = ShieldStaking.fromAmino(object.shield_staking);
    }
    return message;
  },
  toAmino(message: QueryShieldStakingResponse): QueryShieldStakingResponseAmino {
    const obj: any = {};
    obj.shield_staking = message.shieldStaking ? ShieldStaking.toAmino(message.shieldStaking) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryShieldStakingResponseAminoMsg): QueryShieldStakingResponse {
    return QueryShieldStakingResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryShieldStakingResponseProtoMsg): QueryShieldStakingResponse {
    return QueryShieldStakingResponse.decode(message.value);
  },
  toProto(message: QueryShieldStakingResponse): Uint8Array {
    return QueryShieldStakingResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryShieldStakingResponse): QueryShieldStakingResponseProtoMsg {
    return {
      typeUrl: "/shentu.shield.v1alpha1.QueryShieldStakingResponse",
      value: QueryShieldStakingResponse.encode(message).finish()
    };
  }
};
function createBaseQueryShieldStakingRateRequest(): QueryShieldStakingRateRequest {
  return {};
}
export const QueryShieldStakingRateRequest = {
  typeUrl: "/shentu.shield.v1alpha1.QueryShieldStakingRateRequest",
  encode(_: QueryShieldStakingRateRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  fromJSON(_: any): QueryShieldStakingRateRequest {
    return {};
  },
  fromPartial(_: Partial<QueryShieldStakingRateRequest>): QueryShieldStakingRateRequest {
    const message = createBaseQueryShieldStakingRateRequest();
    return message;
  },
  fromAmino(_: QueryShieldStakingRateRequestAmino): QueryShieldStakingRateRequest {
    const message = createBaseQueryShieldStakingRateRequest();
    return message;
  },
  toAmino(_: QueryShieldStakingRateRequest): QueryShieldStakingRateRequestAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: QueryShieldStakingRateRequestAminoMsg): QueryShieldStakingRateRequest {
    return QueryShieldStakingRateRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryShieldStakingRateRequestProtoMsg): QueryShieldStakingRateRequest {
    return QueryShieldStakingRateRequest.decode(message.value);
  },
  toProto(message: QueryShieldStakingRateRequest): Uint8Array {
    return QueryShieldStakingRateRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryShieldStakingRateRequest): QueryShieldStakingRateRequestProtoMsg {
    return {
      typeUrl: "/shentu.shield.v1alpha1.QueryShieldStakingRateRequest",
      value: QueryShieldStakingRateRequest.encode(message).finish()
    };
  }
};
function createBaseQueryShieldStakingRateResponse(): QueryShieldStakingRateResponse {
  return {
    rate: ""
  };
}
export const QueryShieldStakingRateResponse = {
  typeUrl: "/shentu.shield.v1alpha1.QueryShieldStakingRateResponse",
  encode(message: QueryShieldStakingRateResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.rate !== "") {
      writer.uint32(10).string(Decimal.fromUserInput(message.rate, 18).atomics);
    }
    return writer;
  },
  fromJSON(object: any): QueryShieldStakingRateResponse {
    return {
      rate: isSet(object.rate) ? String(object.rate) : ""
    };
  },
  fromPartial(object: Partial<QueryShieldStakingRateResponse>): QueryShieldStakingRateResponse {
    const message = createBaseQueryShieldStakingRateResponse();
    message.rate = object.rate ?? "";
    return message;
  },
  fromAmino(object: QueryShieldStakingRateResponseAmino): QueryShieldStakingRateResponse {
    const message = createBaseQueryShieldStakingRateResponse();
    if (object.rate !== undefined && object.rate !== null) {
      message.rate = object.rate;
    }
    return message;
  },
  toAmino(message: QueryShieldStakingRateResponse): QueryShieldStakingRateResponseAmino {
    const obj: any = {};
    obj.rate = message.rate === "" ? undefined : message.rate;
    return obj;
  },
  fromAminoMsg(object: QueryShieldStakingRateResponseAminoMsg): QueryShieldStakingRateResponse {
    return QueryShieldStakingRateResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryShieldStakingRateResponseProtoMsg): QueryShieldStakingRateResponse {
    return QueryShieldStakingRateResponse.decode(message.value);
  },
  toProto(message: QueryShieldStakingRateResponse): Uint8Array {
    return QueryShieldStakingRateResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryShieldStakingRateResponse): QueryShieldStakingRateResponseProtoMsg {
    return {
      typeUrl: "/shentu.shield.v1alpha1.QueryShieldStakingRateResponse",
      value: QueryShieldStakingRateResponse.encode(message).finish()
    };
  }
};
function createBaseQueryReimbursementRequest(): QueryReimbursementRequest {
  return {
    proposalId: BigInt(0)
  };
}
export const QueryReimbursementRequest = {
  typeUrl: "/shentu.shield.v1alpha1.QueryReimbursementRequest",
  encode(message: QueryReimbursementRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.proposalId !== BigInt(0)) {
      writer.uint32(8).uint64(message.proposalId);
    }
    return writer;
  },
  fromJSON(object: any): QueryReimbursementRequest {
    return {
      proposalId: isSet(object.proposalId) ? BigInt(object.proposalId.toString()) : BigInt(0)
    };
  },
  fromPartial(object: Partial<QueryReimbursementRequest>): QueryReimbursementRequest {
    const message = createBaseQueryReimbursementRequest();
    message.proposalId = object.proposalId !== undefined && object.proposalId !== null ? BigInt(object.proposalId.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: QueryReimbursementRequestAmino): QueryReimbursementRequest {
    const message = createBaseQueryReimbursementRequest();
    if (object.proposal_id !== undefined && object.proposal_id !== null) {
      message.proposalId = BigInt(object.proposal_id);
    }
    return message;
  },
  toAmino(message: QueryReimbursementRequest): QueryReimbursementRequestAmino {
    const obj: any = {};
    obj.proposal_id = message.proposalId !== BigInt(0) ? message.proposalId.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryReimbursementRequestAminoMsg): QueryReimbursementRequest {
    return QueryReimbursementRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryReimbursementRequestProtoMsg): QueryReimbursementRequest {
    return QueryReimbursementRequest.decode(message.value);
  },
  toProto(message: QueryReimbursementRequest): Uint8Array {
    return QueryReimbursementRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryReimbursementRequest): QueryReimbursementRequestProtoMsg {
    return {
      typeUrl: "/shentu.shield.v1alpha1.QueryReimbursementRequest",
      value: QueryReimbursementRequest.encode(message).finish()
    };
  }
};
function createBaseQueryReimbursementResponse(): QueryReimbursementResponse {
  return {
    reimbursement: Reimbursement.fromPartial({})
  };
}
export const QueryReimbursementResponse = {
  typeUrl: "/shentu.shield.v1alpha1.QueryReimbursementResponse",
  encode(message: QueryReimbursementResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.reimbursement !== undefined) {
      Reimbursement.encode(message.reimbursement, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): QueryReimbursementResponse {
    return {
      reimbursement: isSet(object.reimbursement) ? Reimbursement.fromJSON(object.reimbursement) : undefined
    };
  },
  fromPartial(object: Partial<QueryReimbursementResponse>): QueryReimbursementResponse {
    const message = createBaseQueryReimbursementResponse();
    message.reimbursement = object.reimbursement !== undefined && object.reimbursement !== null ? Reimbursement.fromPartial(object.reimbursement) : undefined;
    return message;
  },
  fromAmino(object: QueryReimbursementResponseAmino): QueryReimbursementResponse {
    const message = createBaseQueryReimbursementResponse();
    if (object.reimbursement !== undefined && object.reimbursement !== null) {
      message.reimbursement = Reimbursement.fromAmino(object.reimbursement);
    }
    return message;
  },
  toAmino(message: QueryReimbursementResponse): QueryReimbursementResponseAmino {
    const obj: any = {};
    obj.reimbursement = message.reimbursement ? Reimbursement.toAmino(message.reimbursement) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryReimbursementResponseAminoMsg): QueryReimbursementResponse {
    return QueryReimbursementResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryReimbursementResponseProtoMsg): QueryReimbursementResponse {
    return QueryReimbursementResponse.decode(message.value);
  },
  toProto(message: QueryReimbursementResponse): Uint8Array {
    return QueryReimbursementResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryReimbursementResponse): QueryReimbursementResponseProtoMsg {
    return {
      typeUrl: "/shentu.shield.v1alpha1.QueryReimbursementResponse",
      value: QueryReimbursementResponse.encode(message).finish()
    };
  }
};
function createBaseQueryReimbursementsRequest(): QueryReimbursementsRequest {
  return {};
}
export const QueryReimbursementsRequest = {
  typeUrl: "/shentu.shield.v1alpha1.QueryReimbursementsRequest",
  encode(_: QueryReimbursementsRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  fromJSON(_: any): QueryReimbursementsRequest {
    return {};
  },
  fromPartial(_: Partial<QueryReimbursementsRequest>): QueryReimbursementsRequest {
    const message = createBaseQueryReimbursementsRequest();
    return message;
  },
  fromAmino(_: QueryReimbursementsRequestAmino): QueryReimbursementsRequest {
    const message = createBaseQueryReimbursementsRequest();
    return message;
  },
  toAmino(_: QueryReimbursementsRequest): QueryReimbursementsRequestAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: QueryReimbursementsRequestAminoMsg): QueryReimbursementsRequest {
    return QueryReimbursementsRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryReimbursementsRequestProtoMsg): QueryReimbursementsRequest {
    return QueryReimbursementsRequest.decode(message.value);
  },
  toProto(message: QueryReimbursementsRequest): Uint8Array {
    return QueryReimbursementsRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryReimbursementsRequest): QueryReimbursementsRequestProtoMsg {
    return {
      typeUrl: "/shentu.shield.v1alpha1.QueryReimbursementsRequest",
      value: QueryReimbursementsRequest.encode(message).finish()
    };
  }
};
function createBaseQueryReimbursementsResponse(): QueryReimbursementsResponse {
  return {
    pairs: []
  };
}
export const QueryReimbursementsResponse = {
  typeUrl: "/shentu.shield.v1alpha1.QueryReimbursementsResponse",
  encode(message: QueryReimbursementsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.pairs) {
      ProposalIDReimbursementPair.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): QueryReimbursementsResponse {
    return {
      pairs: Array.isArray(object?.pairs) ? object.pairs.map((e: any) => ProposalIDReimbursementPair.fromJSON(e)) : []
    };
  },
  fromPartial(object: Partial<QueryReimbursementsResponse>): QueryReimbursementsResponse {
    const message = createBaseQueryReimbursementsResponse();
    message.pairs = object.pairs?.map(e => ProposalIDReimbursementPair.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: QueryReimbursementsResponseAmino): QueryReimbursementsResponse {
    const message = createBaseQueryReimbursementsResponse();
    message.pairs = object.pairs?.map(e => ProposalIDReimbursementPair.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: QueryReimbursementsResponse): QueryReimbursementsResponseAmino {
    const obj: any = {};
    if (message.pairs) {
      obj.pairs = message.pairs.map(e => e ? ProposalIDReimbursementPair.toAmino(e) : undefined);
    } else {
      obj.pairs = message.pairs;
    }
    return obj;
  },
  fromAminoMsg(object: QueryReimbursementsResponseAminoMsg): QueryReimbursementsResponse {
    return QueryReimbursementsResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryReimbursementsResponseProtoMsg): QueryReimbursementsResponse {
    return QueryReimbursementsResponse.decode(message.value);
  },
  toProto(message: QueryReimbursementsResponse): Uint8Array {
    return QueryReimbursementsResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryReimbursementsResponse): QueryReimbursementsResponseProtoMsg {
    return {
      typeUrl: "/shentu.shield.v1alpha1.QueryReimbursementsResponse",
      value: QueryReimbursementsResponse.encode(message).finish()
    };
  }
};