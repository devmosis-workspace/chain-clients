import { Status, ZoneDrop, ZoneDropAmino, ZoneDropSDKType, ClaimRecord, ClaimRecordAmino, ClaimRecordSDKType } from "./airdrop";
import { PageRequest, PageRequestAmino, PageRequestSDKType, PageResponse, PageResponseAmino, PageResponseSDKType } from "../../../cosmos/base/query/v1beta1/pagination";
import { Params, ParamsAmino, ParamsSDKType } from "./params";
import { Coin, CoinAmino, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { BinaryWriter } from "../../../binary";
/** QueryParamsRequest is the request type for the Query/Params RPC method. */
export interface QueryParamsRequest {
}
export interface QueryParamsRequestProtoMsg {
    typeUrl: "/quicksilver.airdrop.v1.QueryParamsRequest";
    value: Uint8Array;
}
/** QueryParamsRequest is the request type for the Query/Params RPC method. */
export interface QueryParamsRequestAmino {
}
export interface QueryParamsRequestAminoMsg {
    type: "/quicksilver.airdrop.v1.QueryParamsRequest";
    value: QueryParamsRequestAmino;
}
/** QueryParamsRequest is the request type for the Query/Params RPC method. */
export interface QueryParamsRequestSDKType {
}
/** QueryParamsResponse is the response type for the Query/Params RPC method. */
export interface QueryParamsResponse {
    /** params defines the parameters of the module. */
    params: Params;
}
export interface QueryParamsResponseProtoMsg {
    typeUrl: "/quicksilver.airdrop.v1.QueryParamsResponse";
    value: Uint8Array;
}
/** QueryParamsResponse is the response type for the Query/Params RPC method. */
export interface QueryParamsResponseAmino {
    /** params defines the parameters of the module. */
    params?: ParamsAmino;
}
export interface QueryParamsResponseAminoMsg {
    type: "/quicksilver.airdrop.v1.QueryParamsResponse";
    value: QueryParamsResponseAmino;
}
/** QueryParamsResponse is the response type for the Query/Params RPC method. */
export interface QueryParamsResponseSDKType {
    params: ParamsSDKType;
}
/** QueryZoneDropRequest is the request type for Query/ZoneDrop RPC method. */
export interface QueryZoneDropRequest {
    /** chain_id identifies the zone. */
    chainId: string;
}
export interface QueryZoneDropRequestProtoMsg {
    typeUrl: "/quicksilver.airdrop.v1.QueryZoneDropRequest";
    value: Uint8Array;
}
/** QueryZoneDropRequest is the request type for Query/ZoneDrop RPC method. */
export interface QueryZoneDropRequestAmino {
    /** chain_id identifies the zone. */
    chain_id?: string;
}
export interface QueryZoneDropRequestAminoMsg {
    type: "/quicksilver.airdrop.v1.QueryZoneDropRequest";
    value: QueryZoneDropRequestAmino;
}
/** QueryZoneDropRequest is the request type for Query/ZoneDrop RPC method. */
export interface QueryZoneDropRequestSDKType {
    chain_id: string;
}
/** QueryZoneDropResponse is the response type for Query/ZoneDrop RPC method. */
export interface QueryZoneDropResponse {
    zoneDrop: ZoneDrop;
}
export interface QueryZoneDropResponseProtoMsg {
    typeUrl: "/quicksilver.airdrop.v1.QueryZoneDropResponse";
    value: Uint8Array;
}
/** QueryZoneDropResponse is the response type for Query/ZoneDrop RPC method. */
export interface QueryZoneDropResponseAmino {
    zone_drop?: ZoneDropAmino;
}
export interface QueryZoneDropResponseAminoMsg {
    type: "/quicksilver.airdrop.v1.QueryZoneDropResponse";
    value: QueryZoneDropResponseAmino;
}
/** QueryZoneDropResponse is the response type for Query/ZoneDrop RPC method. */
export interface QueryZoneDropResponseSDKType {
    zone_drop: ZoneDropSDKType;
}
/**
 * QueryAccountBalanceRequest is the request type for Query/AccountBalance RPC
 * method.
 */
export interface QueryAccountBalanceRequest {
    /** chain_id identifies the zone. */
    chainId: string;
}
export interface QueryAccountBalanceRequestProtoMsg {
    typeUrl: "/quicksilver.airdrop.v1.QueryAccountBalanceRequest";
    value: Uint8Array;
}
/**
 * QueryAccountBalanceRequest is the request type for Query/AccountBalance RPC
 * method.
 */
export interface QueryAccountBalanceRequestAmino {
    /** chain_id identifies the zone. */
    chain_id?: string;
}
export interface QueryAccountBalanceRequestAminoMsg {
    type: "/quicksilver.airdrop.v1.QueryAccountBalanceRequest";
    value: QueryAccountBalanceRequestAmino;
}
/**
 * QueryAccountBalanceRequest is the request type for Query/AccountBalance RPC
 * method.
 */
export interface QueryAccountBalanceRequestSDKType {
    chain_id: string;
}
/**
 * QueryAccountBalanceResponse is the response type for Query/AccountBalance RPC
 * method.
 */
export interface QueryAccountBalanceResponse {
    accountBalance?: Coin;
}
export interface QueryAccountBalanceResponseProtoMsg {
    typeUrl: "/quicksilver.airdrop.v1.QueryAccountBalanceResponse";
    value: Uint8Array;
}
/**
 * QueryAccountBalanceResponse is the response type for Query/AccountBalance RPC
 * method.
 */
export interface QueryAccountBalanceResponseAmino {
    account_balance?: CoinAmino;
}
export interface QueryAccountBalanceResponseAminoMsg {
    type: "/quicksilver.airdrop.v1.QueryAccountBalanceResponse";
    value: QueryAccountBalanceResponseAmino;
}
/**
 * QueryAccountBalanceResponse is the response type for Query/AccountBalance RPC
 * method.
 */
export interface QueryAccountBalanceResponseSDKType {
    account_balance?: CoinSDKType;
}
/** QueryZoneDropsRequest is the request type for Query/ZoneDrops RPC method. */
export interface QueryZoneDropsRequest {
    /**
     * status enables to query zone airdrops matching a given status:
     *  - Active
     *  - Future
     *  - Expired
     */
    status: Status;
    pagination?: PageRequest;
}
export interface QueryZoneDropsRequestProtoMsg {
    typeUrl: "/quicksilver.airdrop.v1.QueryZoneDropsRequest";
    value: Uint8Array;
}
/** QueryZoneDropsRequest is the request type for Query/ZoneDrops RPC method. */
export interface QueryZoneDropsRequestAmino {
    /**
     * status enables to query zone airdrops matching a given status:
     *  - Active
     *  - Future
     *  - Expired
     */
    status?: Status;
    pagination?: PageRequestAmino;
}
export interface QueryZoneDropsRequestAminoMsg {
    type: "/quicksilver.airdrop.v1.QueryZoneDropsRequest";
    value: QueryZoneDropsRequestAmino;
}
/** QueryZoneDropsRequest is the request type for Query/ZoneDrops RPC method. */
export interface QueryZoneDropsRequestSDKType {
    status: Status;
    pagination?: PageRequestSDKType;
}
/** QueryZoneDropResponse is the response type for Query/ZoneDrops RPC method. */
export interface QueryZoneDropsResponse {
    zoneDrops: ZoneDrop[];
    pagination?: PageResponse;
}
export interface QueryZoneDropsResponseProtoMsg {
    typeUrl: "/quicksilver.airdrop.v1.QueryZoneDropsResponse";
    value: Uint8Array;
}
/** QueryZoneDropResponse is the response type for Query/ZoneDrops RPC method. */
export interface QueryZoneDropsResponseAmino {
    zone_drops?: ZoneDropAmino[];
    pagination?: PageResponseAmino;
}
export interface QueryZoneDropsResponseAminoMsg {
    type: "/quicksilver.airdrop.v1.QueryZoneDropsResponse";
    value: QueryZoneDropsResponseAmino;
}
/** QueryZoneDropResponse is the response type for Query/ZoneDrops RPC method. */
export interface QueryZoneDropsResponseSDKType {
    zone_drops: ZoneDropSDKType[];
    pagination?: PageResponseSDKType;
}
/** QueryClaimRecordRequest is the request type for Query/ClaimRecord RPC method. */
export interface QueryClaimRecordRequest {
    chainId: string;
    address: string;
}
export interface QueryClaimRecordRequestProtoMsg {
    typeUrl: "/quicksilver.airdrop.v1.QueryClaimRecordRequest";
    value: Uint8Array;
}
/** QueryClaimRecordRequest is the request type for Query/ClaimRecord RPC method. */
export interface QueryClaimRecordRequestAmino {
    chain_id?: string;
    address?: string;
}
export interface QueryClaimRecordRequestAminoMsg {
    type: "/quicksilver.airdrop.v1.QueryClaimRecordRequest";
    value: QueryClaimRecordRequestAmino;
}
/** QueryClaimRecordRequest is the request type for Query/ClaimRecord RPC method. */
export interface QueryClaimRecordRequestSDKType {
    chain_id: string;
    address: string;
}
/**
 * QueryClaimRecordResponse is the response type for Query/ClaimRecord RPC
 * method.
 */
export interface QueryClaimRecordResponse {
    claimRecord?: ClaimRecord;
}
export interface QueryClaimRecordResponseProtoMsg {
    typeUrl: "/quicksilver.airdrop.v1.QueryClaimRecordResponse";
    value: Uint8Array;
}
/**
 * QueryClaimRecordResponse is the response type for Query/ClaimRecord RPC
 * method.
 */
export interface QueryClaimRecordResponseAmino {
    claim_record?: ClaimRecordAmino;
}
export interface QueryClaimRecordResponseAminoMsg {
    type: "/quicksilver.airdrop.v1.QueryClaimRecordResponse";
    value: QueryClaimRecordResponseAmino;
}
/**
 * QueryClaimRecordResponse is the response type for Query/ClaimRecord RPC
 * method.
 */
export interface QueryClaimRecordResponseSDKType {
    claim_record?: ClaimRecordSDKType;
}
/**
 * QueryClaimRecordsRequest is the request type for Query/ClaimRecords RPC
 * method.
 */
export interface QueryClaimRecordsRequest {
    chainId: string;
    pagination?: PageRequest;
}
export interface QueryClaimRecordsRequestProtoMsg {
    typeUrl: "/quicksilver.airdrop.v1.QueryClaimRecordsRequest";
    value: Uint8Array;
}
/**
 * QueryClaimRecordsRequest is the request type for Query/ClaimRecords RPC
 * method.
 */
export interface QueryClaimRecordsRequestAmino {
    chain_id?: string;
    pagination?: PageRequestAmino;
}
export interface QueryClaimRecordsRequestAminoMsg {
    type: "/quicksilver.airdrop.v1.QueryClaimRecordsRequest";
    value: QueryClaimRecordsRequestAmino;
}
/**
 * QueryClaimRecordsRequest is the request type for Query/ClaimRecords RPC
 * method.
 */
export interface QueryClaimRecordsRequestSDKType {
    chain_id: string;
    pagination?: PageRequestSDKType;
}
/**
 * QueryClaimRecordsResponse is the response type for Query/ClaimRecords RPC
 * method.
 */
export interface QueryClaimRecordsResponse {
    claimRecords: ClaimRecord[];
    pagination?: PageResponse;
}
export interface QueryClaimRecordsResponseProtoMsg {
    typeUrl: "/quicksilver.airdrop.v1.QueryClaimRecordsResponse";
    value: Uint8Array;
}
/**
 * QueryClaimRecordsResponse is the response type for Query/ClaimRecords RPC
 * method.
 */
export interface QueryClaimRecordsResponseAmino {
    claim_records?: ClaimRecordAmino[];
    pagination?: PageResponseAmino;
}
export interface QueryClaimRecordsResponseAminoMsg {
    type: "/quicksilver.airdrop.v1.QueryClaimRecordsResponse";
    value: QueryClaimRecordsResponseAmino;
}
/**
 * QueryClaimRecordsResponse is the response type for Query/ClaimRecords RPC
 * method.
 */
export interface QueryClaimRecordsResponseSDKType {
    claim_records: ClaimRecordSDKType[];
    pagination?: PageResponseSDKType;
}
export declare const QueryParamsRequest: {
    typeUrl: string;
    encode(_: QueryParamsRequest, writer?: BinaryWriter): BinaryWriter;
    fromJSON(_: any): QueryParamsRequest;
    fromPartial(_: Partial<QueryParamsRequest>): QueryParamsRequest;
    fromAmino(_: QueryParamsRequestAmino): QueryParamsRequest;
    toAmino(_: QueryParamsRequest): QueryParamsRequestAmino;
    fromAminoMsg(object: QueryParamsRequestAminoMsg): QueryParamsRequest;
    fromProtoMsg(message: QueryParamsRequestProtoMsg): QueryParamsRequest;
    toProto(message: QueryParamsRequest): Uint8Array;
    toProtoMsg(message: QueryParamsRequest): QueryParamsRequestProtoMsg;
};
export declare const QueryParamsResponse: {
    typeUrl: string;
    encode(message: QueryParamsResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryParamsResponse;
    fromPartial(object: Partial<QueryParamsResponse>): QueryParamsResponse;
    fromAmino(object: QueryParamsResponseAmino): QueryParamsResponse;
    toAmino(message: QueryParamsResponse): QueryParamsResponseAmino;
    fromAminoMsg(object: QueryParamsResponseAminoMsg): QueryParamsResponse;
    fromProtoMsg(message: QueryParamsResponseProtoMsg): QueryParamsResponse;
    toProto(message: QueryParamsResponse): Uint8Array;
    toProtoMsg(message: QueryParamsResponse): QueryParamsResponseProtoMsg;
};
export declare const QueryZoneDropRequest: {
    typeUrl: string;
    encode(message: QueryZoneDropRequest, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryZoneDropRequest;
    fromPartial(object: Partial<QueryZoneDropRequest>): QueryZoneDropRequest;
    fromAmino(object: QueryZoneDropRequestAmino): QueryZoneDropRequest;
    toAmino(message: QueryZoneDropRequest): QueryZoneDropRequestAmino;
    fromAminoMsg(object: QueryZoneDropRequestAminoMsg): QueryZoneDropRequest;
    fromProtoMsg(message: QueryZoneDropRequestProtoMsg): QueryZoneDropRequest;
    toProto(message: QueryZoneDropRequest): Uint8Array;
    toProtoMsg(message: QueryZoneDropRequest): QueryZoneDropRequestProtoMsg;
};
export declare const QueryZoneDropResponse: {
    typeUrl: string;
    encode(message: QueryZoneDropResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryZoneDropResponse;
    fromPartial(object: Partial<QueryZoneDropResponse>): QueryZoneDropResponse;
    fromAmino(object: QueryZoneDropResponseAmino): QueryZoneDropResponse;
    toAmino(message: QueryZoneDropResponse): QueryZoneDropResponseAmino;
    fromAminoMsg(object: QueryZoneDropResponseAminoMsg): QueryZoneDropResponse;
    fromProtoMsg(message: QueryZoneDropResponseProtoMsg): QueryZoneDropResponse;
    toProto(message: QueryZoneDropResponse): Uint8Array;
    toProtoMsg(message: QueryZoneDropResponse): QueryZoneDropResponseProtoMsg;
};
export declare const QueryAccountBalanceRequest: {
    typeUrl: string;
    encode(message: QueryAccountBalanceRequest, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryAccountBalanceRequest;
    fromPartial(object: Partial<QueryAccountBalanceRequest>): QueryAccountBalanceRequest;
    fromAmino(object: QueryAccountBalanceRequestAmino): QueryAccountBalanceRequest;
    toAmino(message: QueryAccountBalanceRequest): QueryAccountBalanceRequestAmino;
    fromAminoMsg(object: QueryAccountBalanceRequestAminoMsg): QueryAccountBalanceRequest;
    fromProtoMsg(message: QueryAccountBalanceRequestProtoMsg): QueryAccountBalanceRequest;
    toProto(message: QueryAccountBalanceRequest): Uint8Array;
    toProtoMsg(message: QueryAccountBalanceRequest): QueryAccountBalanceRequestProtoMsg;
};
export declare const QueryAccountBalanceResponse: {
    typeUrl: string;
    encode(message: QueryAccountBalanceResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryAccountBalanceResponse;
    fromPartial(object: Partial<QueryAccountBalanceResponse>): QueryAccountBalanceResponse;
    fromAmino(object: QueryAccountBalanceResponseAmino): QueryAccountBalanceResponse;
    toAmino(message: QueryAccountBalanceResponse): QueryAccountBalanceResponseAmino;
    fromAminoMsg(object: QueryAccountBalanceResponseAminoMsg): QueryAccountBalanceResponse;
    fromProtoMsg(message: QueryAccountBalanceResponseProtoMsg): QueryAccountBalanceResponse;
    toProto(message: QueryAccountBalanceResponse): Uint8Array;
    toProtoMsg(message: QueryAccountBalanceResponse): QueryAccountBalanceResponseProtoMsg;
};
export declare const QueryZoneDropsRequest: {
    typeUrl: string;
    encode(message: QueryZoneDropsRequest, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryZoneDropsRequest;
    fromPartial(object: Partial<QueryZoneDropsRequest>): QueryZoneDropsRequest;
    fromAmino(object: QueryZoneDropsRequestAmino): QueryZoneDropsRequest;
    toAmino(message: QueryZoneDropsRequest): QueryZoneDropsRequestAmino;
    fromAminoMsg(object: QueryZoneDropsRequestAminoMsg): QueryZoneDropsRequest;
    fromProtoMsg(message: QueryZoneDropsRequestProtoMsg): QueryZoneDropsRequest;
    toProto(message: QueryZoneDropsRequest): Uint8Array;
    toProtoMsg(message: QueryZoneDropsRequest): QueryZoneDropsRequestProtoMsg;
};
export declare const QueryZoneDropsResponse: {
    typeUrl: string;
    encode(message: QueryZoneDropsResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryZoneDropsResponse;
    fromPartial(object: Partial<QueryZoneDropsResponse>): QueryZoneDropsResponse;
    fromAmino(object: QueryZoneDropsResponseAmino): QueryZoneDropsResponse;
    toAmino(message: QueryZoneDropsResponse): QueryZoneDropsResponseAmino;
    fromAminoMsg(object: QueryZoneDropsResponseAminoMsg): QueryZoneDropsResponse;
    fromProtoMsg(message: QueryZoneDropsResponseProtoMsg): QueryZoneDropsResponse;
    toProto(message: QueryZoneDropsResponse): Uint8Array;
    toProtoMsg(message: QueryZoneDropsResponse): QueryZoneDropsResponseProtoMsg;
};
export declare const QueryClaimRecordRequest: {
    typeUrl: string;
    encode(message: QueryClaimRecordRequest, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryClaimRecordRequest;
    fromPartial(object: Partial<QueryClaimRecordRequest>): QueryClaimRecordRequest;
    fromAmino(object: QueryClaimRecordRequestAmino): QueryClaimRecordRequest;
    toAmino(message: QueryClaimRecordRequest): QueryClaimRecordRequestAmino;
    fromAminoMsg(object: QueryClaimRecordRequestAminoMsg): QueryClaimRecordRequest;
    fromProtoMsg(message: QueryClaimRecordRequestProtoMsg): QueryClaimRecordRequest;
    toProto(message: QueryClaimRecordRequest): Uint8Array;
    toProtoMsg(message: QueryClaimRecordRequest): QueryClaimRecordRequestProtoMsg;
};
export declare const QueryClaimRecordResponse: {
    typeUrl: string;
    encode(message: QueryClaimRecordResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryClaimRecordResponse;
    fromPartial(object: Partial<QueryClaimRecordResponse>): QueryClaimRecordResponse;
    fromAmino(object: QueryClaimRecordResponseAmino): QueryClaimRecordResponse;
    toAmino(message: QueryClaimRecordResponse): QueryClaimRecordResponseAmino;
    fromAminoMsg(object: QueryClaimRecordResponseAminoMsg): QueryClaimRecordResponse;
    fromProtoMsg(message: QueryClaimRecordResponseProtoMsg): QueryClaimRecordResponse;
    toProto(message: QueryClaimRecordResponse): Uint8Array;
    toProtoMsg(message: QueryClaimRecordResponse): QueryClaimRecordResponseProtoMsg;
};
export declare const QueryClaimRecordsRequest: {
    typeUrl: string;
    encode(message: QueryClaimRecordsRequest, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryClaimRecordsRequest;
    fromPartial(object: Partial<QueryClaimRecordsRequest>): QueryClaimRecordsRequest;
    fromAmino(object: QueryClaimRecordsRequestAmino): QueryClaimRecordsRequest;
    toAmino(message: QueryClaimRecordsRequest): QueryClaimRecordsRequestAmino;
    fromAminoMsg(object: QueryClaimRecordsRequestAminoMsg): QueryClaimRecordsRequest;
    fromProtoMsg(message: QueryClaimRecordsRequestProtoMsg): QueryClaimRecordsRequest;
    toProto(message: QueryClaimRecordsRequest): Uint8Array;
    toProtoMsg(message: QueryClaimRecordsRequest): QueryClaimRecordsRequestProtoMsg;
};
export declare const QueryClaimRecordsResponse: {
    typeUrl: string;
    encode(message: QueryClaimRecordsResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryClaimRecordsResponse;
    fromPartial(object: Partial<QueryClaimRecordsResponse>): QueryClaimRecordsResponse;
    fromAmino(object: QueryClaimRecordsResponseAmino): QueryClaimRecordsResponse;
    toAmino(message: QueryClaimRecordsResponse): QueryClaimRecordsResponseAmino;
    fromAminoMsg(object: QueryClaimRecordsResponseAminoMsg): QueryClaimRecordsResponse;
    fromProtoMsg(message: QueryClaimRecordsResponseProtoMsg): QueryClaimRecordsResponse;
    toProto(message: QueryClaimRecordsResponse): Uint8Array;
    toProtoMsg(message: QueryClaimRecordsResponse): QueryClaimRecordsResponseProtoMsg;
};
