import { Coin, CoinAmino, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { BinaryWriter } from "../../../binary";
export interface QueryCirculatingRequest {
}
export interface QueryCirculatingRequestProtoMsg {
    typeUrl: "/em.queries.v1.QueryCirculatingRequest";
    value: Uint8Array;
}
export interface QueryCirculatingRequestAmino {
}
export interface QueryCirculatingRequestAminoMsg {
    type: "/em.queries.v1.QueryCirculatingRequest";
    value: QueryCirculatingRequestAmino;
}
export interface QueryCirculatingRequestSDKType {
}
export interface QueryCirculatingResponse {
    total: Coin[];
}
export interface QueryCirculatingResponseProtoMsg {
    typeUrl: "/em.queries.v1.QueryCirculatingResponse";
    value: Uint8Array;
}
export interface QueryCirculatingResponseAmino {
    total: CoinAmino[];
}
export interface QueryCirculatingResponseAminoMsg {
    type: "/em.queries.v1.QueryCirculatingResponse";
    value: QueryCirculatingResponseAmino;
}
export interface QueryCirculatingResponseSDKType {
    total: CoinSDKType[];
}
export interface QuerySpendableRequest {
    address: string;
}
export interface QuerySpendableRequestProtoMsg {
    typeUrl: "/em.queries.v1.QuerySpendableRequest";
    value: Uint8Array;
}
export interface QuerySpendableRequestAmino {
    address: string;
}
export interface QuerySpendableRequestAminoMsg {
    type: "/em.queries.v1.QuerySpendableRequest";
    value: QuerySpendableRequestAmino;
}
export interface QuerySpendableRequestSDKType {
    address: string;
}
export interface QuerySpendableResponse {
    balance: Coin[];
}
export interface QuerySpendableResponseProtoMsg {
    typeUrl: "/em.queries.v1.QuerySpendableResponse";
    value: Uint8Array;
}
export interface QuerySpendableResponseAmino {
    balance: CoinAmino[];
}
export interface QuerySpendableResponseAminoMsg {
    type: "/em.queries.v1.QuerySpendableResponse";
    value: QuerySpendableResponseAmino;
}
export interface QuerySpendableResponseSDKType {
    balance: CoinSDKType[];
}
export interface QueryMissedBlocksRequest {
    /** cons_address is the address to query the missed blocks signing info */
    consAddress: string;
}
export interface QueryMissedBlocksRequestProtoMsg {
    typeUrl: "/em.queries.v1.QueryMissedBlocksRequest";
    value: Uint8Array;
}
export interface QueryMissedBlocksRequestAmino {
    /** cons_address is the address to query the missed blocks signing info */
    cons_address: string;
}
export interface QueryMissedBlocksRequestAminoMsg {
    type: "/em.queries.v1.QueryMissedBlocksRequest";
    value: QueryMissedBlocksRequestAmino;
}
export interface QueryMissedBlocksRequestSDKType {
    cons_address: string;
}
export interface QueryMissedBlocksResponse {
    /** val_signing_info is the signing info of requested val cons address */
    missedBlocksInfo: MissedBlocksInfo;
}
export interface QueryMissedBlocksResponseProtoMsg {
    typeUrl: "/em.queries.v1.QueryMissedBlocksResponse";
    value: Uint8Array;
}
export interface QueryMissedBlocksResponseAmino {
    /** val_signing_info is the signing info of requested val cons address */
    missed_blocks_info?: MissedBlocksInfoAmino;
}
export interface QueryMissedBlocksResponseAminoMsg {
    type: "/em.queries.v1.QueryMissedBlocksResponse";
    value: QueryMissedBlocksResponseAmino;
}
export interface QueryMissedBlocksResponseSDKType {
    missed_blocks_info: MissedBlocksInfoSDKType;
}
/** ValidatorSigningInfo defines a validator's missed blocks info. */
export interface MissedBlocksInfo {
    consAddress: string;
    /** missed blocks counter (to avoid scanning the array every time) */
    missedBlocksCounter: bigint;
    totalBlocksCounter: bigint;
}
export interface MissedBlocksInfoProtoMsg {
    typeUrl: "/em.queries.v1.MissedBlocksInfo";
    value: Uint8Array;
}
/** ValidatorSigningInfo defines a validator's missed blocks info. */
export interface MissedBlocksInfoAmino {
    cons_address: string;
    /** missed blocks counter (to avoid scanning the array every time) */
    missed_blocks_counter: string;
    total_blocks_counter: string;
}
export interface MissedBlocksInfoAminoMsg {
    type: "/em.queries.v1.MissedBlocksInfo";
    value: MissedBlocksInfoAmino;
}
/** ValidatorSigningInfo defines a validator's missed blocks info. */
export interface MissedBlocksInfoSDKType {
    cons_address: string;
    missed_blocks_counter: bigint;
    total_blocks_counter: bigint;
}
export declare const QueryCirculatingRequest: {
    typeUrl: string;
    encode(_: QueryCirculatingRequest, writer?: BinaryWriter): BinaryWriter;
    fromJSON(_: any): QueryCirculatingRequest;
    fromPartial(_: Partial<QueryCirculatingRequest>): QueryCirculatingRequest;
    fromAmino(_: QueryCirculatingRequestAmino): QueryCirculatingRequest;
    toAmino(_: QueryCirculatingRequest): QueryCirculatingRequestAmino;
    fromAminoMsg(object: QueryCirculatingRequestAminoMsg): QueryCirculatingRequest;
    fromProtoMsg(message: QueryCirculatingRequestProtoMsg): QueryCirculatingRequest;
    toProto(message: QueryCirculatingRequest): Uint8Array;
    toProtoMsg(message: QueryCirculatingRequest): QueryCirculatingRequestProtoMsg;
};
export declare const QueryCirculatingResponse: {
    typeUrl: string;
    encode(message: QueryCirculatingResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryCirculatingResponse;
    fromPartial(object: Partial<QueryCirculatingResponse>): QueryCirculatingResponse;
    fromAmino(object: QueryCirculatingResponseAmino): QueryCirculatingResponse;
    toAmino(message: QueryCirculatingResponse): QueryCirculatingResponseAmino;
    fromAminoMsg(object: QueryCirculatingResponseAminoMsg): QueryCirculatingResponse;
    fromProtoMsg(message: QueryCirculatingResponseProtoMsg): QueryCirculatingResponse;
    toProto(message: QueryCirculatingResponse): Uint8Array;
    toProtoMsg(message: QueryCirculatingResponse): QueryCirculatingResponseProtoMsg;
};
export declare const QuerySpendableRequest: {
    typeUrl: string;
    encode(message: QuerySpendableRequest, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QuerySpendableRequest;
    fromPartial(object: Partial<QuerySpendableRequest>): QuerySpendableRequest;
    fromAmino(object: QuerySpendableRequestAmino): QuerySpendableRequest;
    toAmino(message: QuerySpendableRequest): QuerySpendableRequestAmino;
    fromAminoMsg(object: QuerySpendableRequestAminoMsg): QuerySpendableRequest;
    fromProtoMsg(message: QuerySpendableRequestProtoMsg): QuerySpendableRequest;
    toProto(message: QuerySpendableRequest): Uint8Array;
    toProtoMsg(message: QuerySpendableRequest): QuerySpendableRequestProtoMsg;
};
export declare const QuerySpendableResponse: {
    typeUrl: string;
    encode(message: QuerySpendableResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QuerySpendableResponse;
    fromPartial(object: Partial<QuerySpendableResponse>): QuerySpendableResponse;
    fromAmino(object: QuerySpendableResponseAmino): QuerySpendableResponse;
    toAmino(message: QuerySpendableResponse): QuerySpendableResponseAmino;
    fromAminoMsg(object: QuerySpendableResponseAminoMsg): QuerySpendableResponse;
    fromProtoMsg(message: QuerySpendableResponseProtoMsg): QuerySpendableResponse;
    toProto(message: QuerySpendableResponse): Uint8Array;
    toProtoMsg(message: QuerySpendableResponse): QuerySpendableResponseProtoMsg;
};
export declare const QueryMissedBlocksRequest: {
    typeUrl: string;
    encode(message: QueryMissedBlocksRequest, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryMissedBlocksRequest;
    fromPartial(object: Partial<QueryMissedBlocksRequest>): QueryMissedBlocksRequest;
    fromAmino(object: QueryMissedBlocksRequestAmino): QueryMissedBlocksRequest;
    toAmino(message: QueryMissedBlocksRequest): QueryMissedBlocksRequestAmino;
    fromAminoMsg(object: QueryMissedBlocksRequestAminoMsg): QueryMissedBlocksRequest;
    fromProtoMsg(message: QueryMissedBlocksRequestProtoMsg): QueryMissedBlocksRequest;
    toProto(message: QueryMissedBlocksRequest): Uint8Array;
    toProtoMsg(message: QueryMissedBlocksRequest): QueryMissedBlocksRequestProtoMsg;
};
export declare const QueryMissedBlocksResponse: {
    typeUrl: string;
    encode(message: QueryMissedBlocksResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryMissedBlocksResponse;
    fromPartial(object: Partial<QueryMissedBlocksResponse>): QueryMissedBlocksResponse;
    fromAmino(object: QueryMissedBlocksResponseAmino): QueryMissedBlocksResponse;
    toAmino(message: QueryMissedBlocksResponse): QueryMissedBlocksResponseAmino;
    fromAminoMsg(object: QueryMissedBlocksResponseAminoMsg): QueryMissedBlocksResponse;
    fromProtoMsg(message: QueryMissedBlocksResponseProtoMsg): QueryMissedBlocksResponse;
    toProto(message: QueryMissedBlocksResponse): Uint8Array;
    toProtoMsg(message: QueryMissedBlocksResponse): QueryMissedBlocksResponseProtoMsg;
};
export declare const MissedBlocksInfo: {
    typeUrl: string;
    encode(message: MissedBlocksInfo, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): MissedBlocksInfo;
    fromPartial(object: Partial<MissedBlocksInfo>): MissedBlocksInfo;
    fromAmino(object: MissedBlocksInfoAmino): MissedBlocksInfo;
    toAmino(message: MissedBlocksInfo): MissedBlocksInfoAmino;
    fromAminoMsg(object: MissedBlocksInfoAminoMsg): MissedBlocksInfo;
    fromProtoMsg(message: MissedBlocksInfoProtoMsg): MissedBlocksInfo;
    toProto(message: MissedBlocksInfo): Uint8Array;
    toProtoMsg(message: MissedBlocksInfo): MissedBlocksInfoProtoMsg;
};
