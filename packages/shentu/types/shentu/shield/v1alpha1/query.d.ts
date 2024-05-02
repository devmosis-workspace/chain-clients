import { Pool, PoolAmino, PoolSDKType, PurchaseList, PurchaseListAmino, PurchaseListSDKType, Purchase, PurchaseAmino, PurchaseSDKType, Provider, ProviderAmino, ProviderSDKType, ShieldStaking, ShieldStakingAmino, ShieldStakingSDKType } from "./shield";
import { PoolParams, PoolParamsAmino, PoolParamsSDKType, ClaimProposalParams, ClaimProposalParamsAmino, ClaimProposalParamsSDKType, DistributionParams, DistributionParamsAmino, DistributionParamsSDKType, Reimbursement, ReimbursementAmino, ReimbursementSDKType, ProposalIDReimbursementPair, ProposalIDReimbursementPairAmino, ProposalIDReimbursementPairSDKType } from "./genesis";
import { DecCoin, DecCoinAmino, DecCoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { BinaryWriter } from "../../../binary";
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
export interface QueryPoolsRequest {
}
export interface QueryPoolsRequestProtoMsg {
    typeUrl: "/shentu.shield.v1alpha1.QueryPoolsRequest";
    value: Uint8Array;
}
export interface QueryPoolsRequestAmino {
}
export interface QueryPoolsRequestAminoMsg {
    type: "/shentu.shield.v1alpha1.QueryPoolsRequest";
    value: QueryPoolsRequestAmino;
}
export interface QueryPoolsRequestSDKType {
}
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
export interface QueryPurchasesRequest {
}
export interface QueryPurchasesRequestProtoMsg {
    typeUrl: "/shentu.shield.v1alpha1.QueryPurchasesRequest";
    value: Uint8Array;
}
export interface QueryPurchasesRequestAmino {
}
export interface QueryPurchasesRequestAminoMsg {
    type: "/shentu.shield.v1alpha1.QueryPurchasesRequest";
    value: QueryPurchasesRequestAmino;
}
export interface QueryPurchasesRequestSDKType {
}
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
export interface QueryProvidersRequest {
}
export interface QueryProvidersRequestProtoMsg {
    typeUrl: "/shentu.shield.v1alpha1.QueryProvidersRequest";
    value: Uint8Array;
}
export interface QueryProvidersRequestAmino {
}
export interface QueryProvidersRequestAminoMsg {
    type: "/shentu.shield.v1alpha1.QueryProvidersRequest";
    value: QueryProvidersRequestAmino;
}
export interface QueryProvidersRequestSDKType {
}
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
export interface QueryPoolParamsRequest {
}
export interface QueryPoolParamsRequestProtoMsg {
    typeUrl: "/shentu.shield.v1alpha1.QueryPoolParamsRequest";
    value: Uint8Array;
}
export interface QueryPoolParamsRequestAmino {
}
export interface QueryPoolParamsRequestAminoMsg {
    type: "/shentu.shield.v1alpha1.QueryPoolParamsRequest";
    value: QueryPoolParamsRequestAmino;
}
export interface QueryPoolParamsRequestSDKType {
}
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
export interface QueryClaimParamsRequest {
}
export interface QueryClaimParamsRequestProtoMsg {
    typeUrl: "/shentu.shield.v1alpha1.QueryClaimParamsRequest";
    value: Uint8Array;
}
export interface QueryClaimParamsRequestAmino {
}
export interface QueryClaimParamsRequestAminoMsg {
    type: "/shentu.shield.v1alpha1.QueryClaimParamsRequest";
    value: QueryClaimParamsRequestAmino;
}
export interface QueryClaimParamsRequestSDKType {
}
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
export interface QueryDistrParamsRequest {
}
export interface QueryDistrParamsRequestProtoMsg {
    typeUrl: "/shentu.shield.v1alpha1.QueryDistrParamsRequest";
    value: Uint8Array;
}
export interface QueryDistrParamsRequestAmino {
}
export interface QueryDistrParamsRequestAminoMsg {
    type: "/shentu.shield.v1alpha1.QueryDistrParamsRequest";
    value: QueryDistrParamsRequestAmino;
}
export interface QueryDistrParamsRequestSDKType {
}
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
export interface QueryShieldStatusRequest {
}
export interface QueryShieldStatusRequestProtoMsg {
    typeUrl: "/shentu.shield.v1alpha1.QueryShieldStatusRequest";
    value: Uint8Array;
}
export interface QueryShieldStatusRequestAmino {
}
export interface QueryShieldStatusRequestAminoMsg {
    type: "/shentu.shield.v1alpha1.QueryShieldStatusRequest";
    value: QueryShieldStatusRequestAmino;
}
export interface QueryShieldStatusRequestSDKType {
}
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
export interface QueryShieldStakingRateRequest {
}
export interface QueryShieldStakingRateRequestProtoMsg {
    typeUrl: "/shentu.shield.v1alpha1.QueryShieldStakingRateRequest";
    value: Uint8Array;
}
export interface QueryShieldStakingRateRequestAmino {
}
export interface QueryShieldStakingRateRequestAminoMsg {
    type: "/shentu.shield.v1alpha1.QueryShieldStakingRateRequest";
    value: QueryShieldStakingRateRequestAmino;
}
export interface QueryShieldStakingRateRequestSDKType {
}
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
export interface QueryReimbursementsRequest {
}
export interface QueryReimbursementsRequestProtoMsg {
    typeUrl: "/shentu.shield.v1alpha1.QueryReimbursementsRequest";
    value: Uint8Array;
}
export interface QueryReimbursementsRequestAmino {
}
export interface QueryReimbursementsRequestAminoMsg {
    type: "/shentu.shield.v1alpha1.QueryReimbursementsRequest";
    value: QueryReimbursementsRequestAmino;
}
export interface QueryReimbursementsRequestSDKType {
}
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
export declare const QueryPoolRequest: {
    typeUrl: string;
    encode(message: QueryPoolRequest, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryPoolRequest;
    fromPartial(object: Partial<QueryPoolRequest>): QueryPoolRequest;
    fromAmino(object: QueryPoolRequestAmino): QueryPoolRequest;
    toAmino(message: QueryPoolRequest): QueryPoolRequestAmino;
    fromAminoMsg(object: QueryPoolRequestAminoMsg): QueryPoolRequest;
    fromProtoMsg(message: QueryPoolRequestProtoMsg): QueryPoolRequest;
    toProto(message: QueryPoolRequest): Uint8Array;
    toProtoMsg(message: QueryPoolRequest): QueryPoolRequestProtoMsg;
};
export declare const QueryPoolResponse: {
    typeUrl: string;
    encode(message: QueryPoolResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryPoolResponse;
    fromPartial(object: Partial<QueryPoolResponse>): QueryPoolResponse;
    fromAmino(object: QueryPoolResponseAmino): QueryPoolResponse;
    toAmino(message: QueryPoolResponse): QueryPoolResponseAmino;
    fromAminoMsg(object: QueryPoolResponseAminoMsg): QueryPoolResponse;
    fromProtoMsg(message: QueryPoolResponseProtoMsg): QueryPoolResponse;
    toProto(message: QueryPoolResponse): Uint8Array;
    toProtoMsg(message: QueryPoolResponse): QueryPoolResponseProtoMsg;
};
export declare const QuerySponsorRequest: {
    typeUrl: string;
    encode(message: QuerySponsorRequest, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QuerySponsorRequest;
    fromPartial(object: Partial<QuerySponsorRequest>): QuerySponsorRequest;
    fromAmino(object: QuerySponsorRequestAmino): QuerySponsorRequest;
    toAmino(message: QuerySponsorRequest): QuerySponsorRequestAmino;
    fromAminoMsg(object: QuerySponsorRequestAminoMsg): QuerySponsorRequest;
    fromProtoMsg(message: QuerySponsorRequestProtoMsg): QuerySponsorRequest;
    toProto(message: QuerySponsorRequest): Uint8Array;
    toProtoMsg(message: QuerySponsorRequest): QuerySponsorRequestProtoMsg;
};
export declare const QuerySponsorResponse: {
    typeUrl: string;
    encode(message: QuerySponsorResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QuerySponsorResponse;
    fromPartial(object: Partial<QuerySponsorResponse>): QuerySponsorResponse;
    fromAmino(object: QuerySponsorResponseAmino): QuerySponsorResponse;
    toAmino(message: QuerySponsorResponse): QuerySponsorResponseAmino;
    fromAminoMsg(object: QuerySponsorResponseAminoMsg): QuerySponsorResponse;
    fromProtoMsg(message: QuerySponsorResponseProtoMsg): QuerySponsorResponse;
    toProto(message: QuerySponsorResponse): Uint8Array;
    toProtoMsg(message: QuerySponsorResponse): QuerySponsorResponseProtoMsg;
};
export declare const QueryPoolsRequest: {
    typeUrl: string;
    encode(_: QueryPoolsRequest, writer?: BinaryWriter): BinaryWriter;
    fromJSON(_: any): QueryPoolsRequest;
    fromPartial(_: Partial<QueryPoolsRequest>): QueryPoolsRequest;
    fromAmino(_: QueryPoolsRequestAmino): QueryPoolsRequest;
    toAmino(_: QueryPoolsRequest): QueryPoolsRequestAmino;
    fromAminoMsg(object: QueryPoolsRequestAminoMsg): QueryPoolsRequest;
    fromProtoMsg(message: QueryPoolsRequestProtoMsg): QueryPoolsRequest;
    toProto(message: QueryPoolsRequest): Uint8Array;
    toProtoMsg(message: QueryPoolsRequest): QueryPoolsRequestProtoMsg;
};
export declare const QueryPoolsResponse: {
    typeUrl: string;
    encode(message: QueryPoolsResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryPoolsResponse;
    fromPartial(object: Partial<QueryPoolsResponse>): QueryPoolsResponse;
    fromAmino(object: QueryPoolsResponseAmino): QueryPoolsResponse;
    toAmino(message: QueryPoolsResponse): QueryPoolsResponseAmino;
    fromAminoMsg(object: QueryPoolsResponseAminoMsg): QueryPoolsResponse;
    fromProtoMsg(message: QueryPoolsResponseProtoMsg): QueryPoolsResponse;
    toProto(message: QueryPoolsResponse): Uint8Array;
    toProtoMsg(message: QueryPoolsResponse): QueryPoolsResponseProtoMsg;
};
export declare const QueryPoolPurchaseListsRequest: {
    typeUrl: string;
    encode(message: QueryPoolPurchaseListsRequest, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryPoolPurchaseListsRequest;
    fromPartial(object: Partial<QueryPoolPurchaseListsRequest>): QueryPoolPurchaseListsRequest;
    fromAmino(object: QueryPoolPurchaseListsRequestAmino): QueryPoolPurchaseListsRequest;
    toAmino(message: QueryPoolPurchaseListsRequest): QueryPoolPurchaseListsRequestAmino;
    fromAminoMsg(object: QueryPoolPurchaseListsRequestAminoMsg): QueryPoolPurchaseListsRequest;
    fromProtoMsg(message: QueryPoolPurchaseListsRequestProtoMsg): QueryPoolPurchaseListsRequest;
    toProto(message: QueryPoolPurchaseListsRequest): Uint8Array;
    toProtoMsg(message: QueryPoolPurchaseListsRequest): QueryPoolPurchaseListsRequestProtoMsg;
};
export declare const QueryPurchaseListsRequest: {
    typeUrl: string;
    encode(message: QueryPurchaseListsRequest, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryPurchaseListsRequest;
    fromPartial(object: Partial<QueryPurchaseListsRequest>): QueryPurchaseListsRequest;
    fromAmino(object: QueryPurchaseListsRequestAmino): QueryPurchaseListsRequest;
    toAmino(message: QueryPurchaseListsRequest): QueryPurchaseListsRequestAmino;
    fromAminoMsg(object: QueryPurchaseListsRequestAminoMsg): QueryPurchaseListsRequest;
    fromProtoMsg(message: QueryPurchaseListsRequestProtoMsg): QueryPurchaseListsRequest;
    toProto(message: QueryPurchaseListsRequest): Uint8Array;
    toProtoMsg(message: QueryPurchaseListsRequest): QueryPurchaseListsRequestProtoMsg;
};
export declare const QueryPurchaseListsResponse: {
    typeUrl: string;
    encode(message: QueryPurchaseListsResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryPurchaseListsResponse;
    fromPartial(object: Partial<QueryPurchaseListsResponse>): QueryPurchaseListsResponse;
    fromAmino(object: QueryPurchaseListsResponseAmino): QueryPurchaseListsResponse;
    toAmino(message: QueryPurchaseListsResponse): QueryPurchaseListsResponseAmino;
    fromAminoMsg(object: QueryPurchaseListsResponseAminoMsg): QueryPurchaseListsResponse;
    fromProtoMsg(message: QueryPurchaseListsResponseProtoMsg): QueryPurchaseListsResponse;
    toProto(message: QueryPurchaseListsResponse): Uint8Array;
    toProtoMsg(message: QueryPurchaseListsResponse): QueryPurchaseListsResponseProtoMsg;
};
export declare const QueryPurchaseListRequest: {
    typeUrl: string;
    encode(message: QueryPurchaseListRequest, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryPurchaseListRequest;
    fromPartial(object: Partial<QueryPurchaseListRequest>): QueryPurchaseListRequest;
    fromAmino(object: QueryPurchaseListRequestAmino): QueryPurchaseListRequest;
    toAmino(message: QueryPurchaseListRequest): QueryPurchaseListRequestAmino;
    fromAminoMsg(object: QueryPurchaseListRequestAminoMsg): QueryPurchaseListRequest;
    fromProtoMsg(message: QueryPurchaseListRequestProtoMsg): QueryPurchaseListRequest;
    toProto(message: QueryPurchaseListRequest): Uint8Array;
    toProtoMsg(message: QueryPurchaseListRequest): QueryPurchaseListRequestProtoMsg;
};
export declare const QueryPurchaseListResponse: {
    typeUrl: string;
    encode(message: QueryPurchaseListResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryPurchaseListResponse;
    fromPartial(object: Partial<QueryPurchaseListResponse>): QueryPurchaseListResponse;
    fromAmino(object: QueryPurchaseListResponseAmino): QueryPurchaseListResponse;
    toAmino(message: QueryPurchaseListResponse): QueryPurchaseListResponseAmino;
    fromAminoMsg(object: QueryPurchaseListResponseAminoMsg): QueryPurchaseListResponse;
    fromProtoMsg(message: QueryPurchaseListResponseProtoMsg): QueryPurchaseListResponse;
    toProto(message: QueryPurchaseListResponse): Uint8Array;
    toProtoMsg(message: QueryPurchaseListResponse): QueryPurchaseListResponseProtoMsg;
};
export declare const QueryPurchasesRequest: {
    typeUrl: string;
    encode(_: QueryPurchasesRequest, writer?: BinaryWriter): BinaryWriter;
    fromJSON(_: any): QueryPurchasesRequest;
    fromPartial(_: Partial<QueryPurchasesRequest>): QueryPurchasesRequest;
    fromAmino(_: QueryPurchasesRequestAmino): QueryPurchasesRequest;
    toAmino(_: QueryPurchasesRequest): QueryPurchasesRequestAmino;
    fromAminoMsg(object: QueryPurchasesRequestAminoMsg): QueryPurchasesRequest;
    fromProtoMsg(message: QueryPurchasesRequestProtoMsg): QueryPurchasesRequest;
    toProto(message: QueryPurchasesRequest): Uint8Array;
    toProtoMsg(message: QueryPurchasesRequest): QueryPurchasesRequestProtoMsg;
};
export declare const QueryPurchasesResponse: {
    typeUrl: string;
    encode(message: QueryPurchasesResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryPurchasesResponse;
    fromPartial(object: Partial<QueryPurchasesResponse>): QueryPurchasesResponse;
    fromAmino(object: QueryPurchasesResponseAmino): QueryPurchasesResponse;
    toAmino(message: QueryPurchasesResponse): QueryPurchasesResponseAmino;
    fromAminoMsg(object: QueryPurchasesResponseAminoMsg): QueryPurchasesResponse;
    fromProtoMsg(message: QueryPurchasesResponseProtoMsg): QueryPurchasesResponse;
    toProto(message: QueryPurchasesResponse): Uint8Array;
    toProtoMsg(message: QueryPurchasesResponse): QueryPurchasesResponseProtoMsg;
};
export declare const QueryProviderRequest: {
    typeUrl: string;
    encode(message: QueryProviderRequest, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryProviderRequest;
    fromPartial(object: Partial<QueryProviderRequest>): QueryProviderRequest;
    fromAmino(object: QueryProviderRequestAmino): QueryProviderRequest;
    toAmino(message: QueryProviderRequest): QueryProviderRequestAmino;
    fromAminoMsg(object: QueryProviderRequestAminoMsg): QueryProviderRequest;
    fromProtoMsg(message: QueryProviderRequestProtoMsg): QueryProviderRequest;
    toProto(message: QueryProviderRequest): Uint8Array;
    toProtoMsg(message: QueryProviderRequest): QueryProviderRequestProtoMsg;
};
export declare const QueryProviderResponse: {
    typeUrl: string;
    encode(message: QueryProviderResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryProviderResponse;
    fromPartial(object: Partial<QueryProviderResponse>): QueryProviderResponse;
    fromAmino(object: QueryProviderResponseAmino): QueryProviderResponse;
    toAmino(message: QueryProviderResponse): QueryProviderResponseAmino;
    fromAminoMsg(object: QueryProviderResponseAminoMsg): QueryProviderResponse;
    fromProtoMsg(message: QueryProviderResponseProtoMsg): QueryProviderResponse;
    toProto(message: QueryProviderResponse): Uint8Array;
    toProtoMsg(message: QueryProviderResponse): QueryProviderResponseProtoMsg;
};
export declare const QueryProvidersRequest: {
    typeUrl: string;
    encode(_: QueryProvidersRequest, writer?: BinaryWriter): BinaryWriter;
    fromJSON(_: any): QueryProvidersRequest;
    fromPartial(_: Partial<QueryProvidersRequest>): QueryProvidersRequest;
    fromAmino(_: QueryProvidersRequestAmino): QueryProvidersRequest;
    toAmino(_: QueryProvidersRequest): QueryProvidersRequestAmino;
    fromAminoMsg(object: QueryProvidersRequestAminoMsg): QueryProvidersRequest;
    fromProtoMsg(message: QueryProvidersRequestProtoMsg): QueryProvidersRequest;
    toProto(message: QueryProvidersRequest): Uint8Array;
    toProtoMsg(message: QueryProvidersRequest): QueryProvidersRequestProtoMsg;
};
export declare const QueryProvidersResponse: {
    typeUrl: string;
    encode(message: QueryProvidersResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryProvidersResponse;
    fromPartial(object: Partial<QueryProvidersResponse>): QueryProvidersResponse;
    fromAmino(object: QueryProvidersResponseAmino): QueryProvidersResponse;
    toAmino(message: QueryProvidersResponse): QueryProvidersResponseAmino;
    fromAminoMsg(object: QueryProvidersResponseAminoMsg): QueryProvidersResponse;
    fromProtoMsg(message: QueryProvidersResponseProtoMsg): QueryProvidersResponse;
    toProto(message: QueryProvidersResponse): Uint8Array;
    toProtoMsg(message: QueryProvidersResponse): QueryProvidersResponseProtoMsg;
};
export declare const QueryPoolParamsRequest: {
    typeUrl: string;
    encode(_: QueryPoolParamsRequest, writer?: BinaryWriter): BinaryWriter;
    fromJSON(_: any): QueryPoolParamsRequest;
    fromPartial(_: Partial<QueryPoolParamsRequest>): QueryPoolParamsRequest;
    fromAmino(_: QueryPoolParamsRequestAmino): QueryPoolParamsRequest;
    toAmino(_: QueryPoolParamsRequest): QueryPoolParamsRequestAmino;
    fromAminoMsg(object: QueryPoolParamsRequestAminoMsg): QueryPoolParamsRequest;
    fromProtoMsg(message: QueryPoolParamsRequestProtoMsg): QueryPoolParamsRequest;
    toProto(message: QueryPoolParamsRequest): Uint8Array;
    toProtoMsg(message: QueryPoolParamsRequest): QueryPoolParamsRequestProtoMsg;
};
export declare const QueryPoolParamsResponse: {
    typeUrl: string;
    encode(message: QueryPoolParamsResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryPoolParamsResponse;
    fromPartial(object: Partial<QueryPoolParamsResponse>): QueryPoolParamsResponse;
    fromAmino(object: QueryPoolParamsResponseAmino): QueryPoolParamsResponse;
    toAmino(message: QueryPoolParamsResponse): QueryPoolParamsResponseAmino;
    fromAminoMsg(object: QueryPoolParamsResponseAminoMsg): QueryPoolParamsResponse;
    fromProtoMsg(message: QueryPoolParamsResponseProtoMsg): QueryPoolParamsResponse;
    toProto(message: QueryPoolParamsResponse): Uint8Array;
    toProtoMsg(message: QueryPoolParamsResponse): QueryPoolParamsResponseProtoMsg;
};
export declare const QueryClaimParamsRequest: {
    typeUrl: string;
    encode(_: QueryClaimParamsRequest, writer?: BinaryWriter): BinaryWriter;
    fromJSON(_: any): QueryClaimParamsRequest;
    fromPartial(_: Partial<QueryClaimParamsRequest>): QueryClaimParamsRequest;
    fromAmino(_: QueryClaimParamsRequestAmino): QueryClaimParamsRequest;
    toAmino(_: QueryClaimParamsRequest): QueryClaimParamsRequestAmino;
    fromAminoMsg(object: QueryClaimParamsRequestAminoMsg): QueryClaimParamsRequest;
    fromProtoMsg(message: QueryClaimParamsRequestProtoMsg): QueryClaimParamsRequest;
    toProto(message: QueryClaimParamsRequest): Uint8Array;
    toProtoMsg(message: QueryClaimParamsRequest): QueryClaimParamsRequestProtoMsg;
};
export declare const QueryClaimParamsResponse: {
    typeUrl: string;
    encode(message: QueryClaimParamsResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryClaimParamsResponse;
    fromPartial(object: Partial<QueryClaimParamsResponse>): QueryClaimParamsResponse;
    fromAmino(object: QueryClaimParamsResponseAmino): QueryClaimParamsResponse;
    toAmino(message: QueryClaimParamsResponse): QueryClaimParamsResponseAmino;
    fromAminoMsg(object: QueryClaimParamsResponseAminoMsg): QueryClaimParamsResponse;
    fromProtoMsg(message: QueryClaimParamsResponseProtoMsg): QueryClaimParamsResponse;
    toProto(message: QueryClaimParamsResponse): Uint8Array;
    toProtoMsg(message: QueryClaimParamsResponse): QueryClaimParamsResponseProtoMsg;
};
export declare const QueryDistrParamsRequest: {
    typeUrl: string;
    encode(_: QueryDistrParamsRequest, writer?: BinaryWriter): BinaryWriter;
    fromJSON(_: any): QueryDistrParamsRequest;
    fromPartial(_: Partial<QueryDistrParamsRequest>): QueryDistrParamsRequest;
    fromAmino(_: QueryDistrParamsRequestAmino): QueryDistrParamsRequest;
    toAmino(_: QueryDistrParamsRequest): QueryDistrParamsRequestAmino;
    fromAminoMsg(object: QueryDistrParamsRequestAminoMsg): QueryDistrParamsRequest;
    fromProtoMsg(message: QueryDistrParamsRequestProtoMsg): QueryDistrParamsRequest;
    toProto(message: QueryDistrParamsRequest): Uint8Array;
    toProtoMsg(message: QueryDistrParamsRequest): QueryDistrParamsRequestProtoMsg;
};
export declare const QueryDistrParamsResponse: {
    typeUrl: string;
    encode(message: QueryDistrParamsResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryDistrParamsResponse;
    fromPartial(object: Partial<QueryDistrParamsResponse>): QueryDistrParamsResponse;
    fromAmino(object: QueryDistrParamsResponseAmino): QueryDistrParamsResponse;
    toAmino(message: QueryDistrParamsResponse): QueryDistrParamsResponseAmino;
    fromAminoMsg(object: QueryDistrParamsResponseAminoMsg): QueryDistrParamsResponse;
    fromProtoMsg(message: QueryDistrParamsResponseProtoMsg): QueryDistrParamsResponse;
    toProto(message: QueryDistrParamsResponse): Uint8Array;
    toProtoMsg(message: QueryDistrParamsResponse): QueryDistrParamsResponseProtoMsg;
};
export declare const QueryShieldStatusRequest: {
    typeUrl: string;
    encode(_: QueryShieldStatusRequest, writer?: BinaryWriter): BinaryWriter;
    fromJSON(_: any): QueryShieldStatusRequest;
    fromPartial(_: Partial<QueryShieldStatusRequest>): QueryShieldStatusRequest;
    fromAmino(_: QueryShieldStatusRequestAmino): QueryShieldStatusRequest;
    toAmino(_: QueryShieldStatusRequest): QueryShieldStatusRequestAmino;
    fromAminoMsg(object: QueryShieldStatusRequestAminoMsg): QueryShieldStatusRequest;
    fromProtoMsg(message: QueryShieldStatusRequestProtoMsg): QueryShieldStatusRequest;
    toProto(message: QueryShieldStatusRequest): Uint8Array;
    toProtoMsg(message: QueryShieldStatusRequest): QueryShieldStatusRequestProtoMsg;
};
export declare const QueryShieldStatusResponse: {
    typeUrl: string;
    encode(message: QueryShieldStatusResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryShieldStatusResponse;
    fromPartial(object: Partial<QueryShieldStatusResponse>): QueryShieldStatusResponse;
    fromAmino(object: QueryShieldStatusResponseAmino): QueryShieldStatusResponse;
    toAmino(message: QueryShieldStatusResponse): QueryShieldStatusResponseAmino;
    fromAminoMsg(object: QueryShieldStatusResponseAminoMsg): QueryShieldStatusResponse;
    fromProtoMsg(message: QueryShieldStatusResponseProtoMsg): QueryShieldStatusResponse;
    toProto(message: QueryShieldStatusResponse): Uint8Array;
    toProtoMsg(message: QueryShieldStatusResponse): QueryShieldStatusResponseProtoMsg;
};
export declare const QueryShieldStakingRequest: {
    typeUrl: string;
    encode(message: QueryShieldStakingRequest, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryShieldStakingRequest;
    fromPartial(object: Partial<QueryShieldStakingRequest>): QueryShieldStakingRequest;
    fromAmino(object: QueryShieldStakingRequestAmino): QueryShieldStakingRequest;
    toAmino(message: QueryShieldStakingRequest): QueryShieldStakingRequestAmino;
    fromAminoMsg(object: QueryShieldStakingRequestAminoMsg): QueryShieldStakingRequest;
    fromProtoMsg(message: QueryShieldStakingRequestProtoMsg): QueryShieldStakingRequest;
    toProto(message: QueryShieldStakingRequest): Uint8Array;
    toProtoMsg(message: QueryShieldStakingRequest): QueryShieldStakingRequestProtoMsg;
};
export declare const QueryShieldStakingResponse: {
    typeUrl: string;
    encode(message: QueryShieldStakingResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryShieldStakingResponse;
    fromPartial(object: Partial<QueryShieldStakingResponse>): QueryShieldStakingResponse;
    fromAmino(object: QueryShieldStakingResponseAmino): QueryShieldStakingResponse;
    toAmino(message: QueryShieldStakingResponse): QueryShieldStakingResponseAmino;
    fromAminoMsg(object: QueryShieldStakingResponseAminoMsg): QueryShieldStakingResponse;
    fromProtoMsg(message: QueryShieldStakingResponseProtoMsg): QueryShieldStakingResponse;
    toProto(message: QueryShieldStakingResponse): Uint8Array;
    toProtoMsg(message: QueryShieldStakingResponse): QueryShieldStakingResponseProtoMsg;
};
export declare const QueryShieldStakingRateRequest: {
    typeUrl: string;
    encode(_: QueryShieldStakingRateRequest, writer?: BinaryWriter): BinaryWriter;
    fromJSON(_: any): QueryShieldStakingRateRequest;
    fromPartial(_: Partial<QueryShieldStakingRateRequest>): QueryShieldStakingRateRequest;
    fromAmino(_: QueryShieldStakingRateRequestAmino): QueryShieldStakingRateRequest;
    toAmino(_: QueryShieldStakingRateRequest): QueryShieldStakingRateRequestAmino;
    fromAminoMsg(object: QueryShieldStakingRateRequestAminoMsg): QueryShieldStakingRateRequest;
    fromProtoMsg(message: QueryShieldStakingRateRequestProtoMsg): QueryShieldStakingRateRequest;
    toProto(message: QueryShieldStakingRateRequest): Uint8Array;
    toProtoMsg(message: QueryShieldStakingRateRequest): QueryShieldStakingRateRequestProtoMsg;
};
export declare const QueryShieldStakingRateResponse: {
    typeUrl: string;
    encode(message: QueryShieldStakingRateResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryShieldStakingRateResponse;
    fromPartial(object: Partial<QueryShieldStakingRateResponse>): QueryShieldStakingRateResponse;
    fromAmino(object: QueryShieldStakingRateResponseAmino): QueryShieldStakingRateResponse;
    toAmino(message: QueryShieldStakingRateResponse): QueryShieldStakingRateResponseAmino;
    fromAminoMsg(object: QueryShieldStakingRateResponseAminoMsg): QueryShieldStakingRateResponse;
    fromProtoMsg(message: QueryShieldStakingRateResponseProtoMsg): QueryShieldStakingRateResponse;
    toProto(message: QueryShieldStakingRateResponse): Uint8Array;
    toProtoMsg(message: QueryShieldStakingRateResponse): QueryShieldStakingRateResponseProtoMsg;
};
export declare const QueryReimbursementRequest: {
    typeUrl: string;
    encode(message: QueryReimbursementRequest, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryReimbursementRequest;
    fromPartial(object: Partial<QueryReimbursementRequest>): QueryReimbursementRequest;
    fromAmino(object: QueryReimbursementRequestAmino): QueryReimbursementRequest;
    toAmino(message: QueryReimbursementRequest): QueryReimbursementRequestAmino;
    fromAminoMsg(object: QueryReimbursementRequestAminoMsg): QueryReimbursementRequest;
    fromProtoMsg(message: QueryReimbursementRequestProtoMsg): QueryReimbursementRequest;
    toProto(message: QueryReimbursementRequest): Uint8Array;
    toProtoMsg(message: QueryReimbursementRequest): QueryReimbursementRequestProtoMsg;
};
export declare const QueryReimbursementResponse: {
    typeUrl: string;
    encode(message: QueryReimbursementResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryReimbursementResponse;
    fromPartial(object: Partial<QueryReimbursementResponse>): QueryReimbursementResponse;
    fromAmino(object: QueryReimbursementResponseAmino): QueryReimbursementResponse;
    toAmino(message: QueryReimbursementResponse): QueryReimbursementResponseAmino;
    fromAminoMsg(object: QueryReimbursementResponseAminoMsg): QueryReimbursementResponse;
    fromProtoMsg(message: QueryReimbursementResponseProtoMsg): QueryReimbursementResponse;
    toProto(message: QueryReimbursementResponse): Uint8Array;
    toProtoMsg(message: QueryReimbursementResponse): QueryReimbursementResponseProtoMsg;
};
export declare const QueryReimbursementsRequest: {
    typeUrl: string;
    encode(_: QueryReimbursementsRequest, writer?: BinaryWriter): BinaryWriter;
    fromJSON(_: any): QueryReimbursementsRequest;
    fromPartial(_: Partial<QueryReimbursementsRequest>): QueryReimbursementsRequest;
    fromAmino(_: QueryReimbursementsRequestAmino): QueryReimbursementsRequest;
    toAmino(_: QueryReimbursementsRequest): QueryReimbursementsRequestAmino;
    fromAminoMsg(object: QueryReimbursementsRequestAminoMsg): QueryReimbursementsRequest;
    fromProtoMsg(message: QueryReimbursementsRequestProtoMsg): QueryReimbursementsRequest;
    toProto(message: QueryReimbursementsRequest): Uint8Array;
    toProtoMsg(message: QueryReimbursementsRequest): QueryReimbursementsRequestProtoMsg;
};
export declare const QueryReimbursementsResponse: {
    typeUrl: string;
    encode(message: QueryReimbursementsResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryReimbursementsResponse;
    fromPartial(object: Partial<QueryReimbursementsResponse>): QueryReimbursementsResponse;
    fromAmino(object: QueryReimbursementsResponseAmino): QueryReimbursementsResponse;
    toAmino(message: QueryReimbursementsResponse): QueryReimbursementsResponseAmino;
    fromAminoMsg(object: QueryReimbursementsResponseAminoMsg): QueryReimbursementsResponse;
    fromProtoMsg(message: QueryReimbursementsResponseProtoMsg): QueryReimbursementsResponse;
    toProto(message: QueryReimbursementsResponse): Uint8Array;
    toProtoMsg(message: QueryReimbursementsResponse): QueryReimbursementsResponseProtoMsg;
};
