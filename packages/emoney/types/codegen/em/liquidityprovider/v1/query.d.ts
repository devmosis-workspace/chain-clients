import { LiquidityProviderAccount, LiquidityProviderAccountAmino, LiquidityProviderAccountSDKType } from "./liquidityprovider";
import { Coin, CoinAmino, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { BinaryWriter } from "../../../binary";
export interface QueryListRequest {
}
export interface QueryListRequestProtoMsg {
    typeUrl: "/em.liquidityprovider.v1.QueryListRequest";
    value: Uint8Array;
}
export interface QueryListRequestAmino {
}
export interface QueryListRequestAminoMsg {
    type: "/em.liquidityprovider.v1.QueryListRequest";
    value: QueryListRequestAmino;
}
export interface QueryListRequestSDKType {
}
export interface QueryListResponse {
    liquidityProviders: LiquidityProviderAccount[];
}
export interface QueryListResponseProtoMsg {
    typeUrl: "/em.liquidityprovider.v1.QueryListResponse";
    value: Uint8Array;
}
export interface QueryListResponseAmino {
    liquidity_providers: LiquidityProviderAccountAmino[];
}
export interface QueryListResponseAminoMsg {
    type: "/em.liquidityprovider.v1.QueryListResponse";
    value: QueryListResponseAmino;
}
export interface QueryListResponseSDKType {
    liquidity_providers: LiquidityProviderAccountSDKType[];
}
export interface QueryMintableRequest {
    /** address defines the liquidity provider address to query mintable. */
    address: string;
}
export interface QueryMintableRequestProtoMsg {
    typeUrl: "/em.liquidityprovider.v1.QueryMintableRequest";
    value: Uint8Array;
}
export interface QueryMintableRequestAmino {
    /** address defines the liquidity provider address to query mintable. */
    address: string;
}
export interface QueryMintableRequestAminoMsg {
    type: "/em.liquidityprovider.v1.QueryMintableRequest";
    value: QueryMintableRequestAmino;
}
export interface QueryMintableRequestSDKType {
    address: string;
}
export interface QueryMintableResponse {
    mintable: Coin[];
}
export interface QueryMintableResponseProtoMsg {
    typeUrl: "/em.liquidityprovider.v1.QueryMintableResponse";
    value: Uint8Array;
}
export interface QueryMintableResponseAmino {
    mintable: CoinAmino[];
}
export interface QueryMintableResponseAminoMsg {
    type: "/em.liquidityprovider.v1.QueryMintableResponse";
    value: QueryMintableResponseAmino;
}
export interface QueryMintableResponseSDKType {
    mintable: CoinSDKType[];
}
export declare const QueryListRequest: {
    typeUrl: string;
    encode(_: QueryListRequest, writer?: BinaryWriter): BinaryWriter;
    fromJSON(_: any): QueryListRequest;
    fromPartial(_: Partial<QueryListRequest>): QueryListRequest;
    fromAmino(_: QueryListRequestAmino): QueryListRequest;
    toAmino(_: QueryListRequest): QueryListRequestAmino;
    fromAminoMsg(object: QueryListRequestAminoMsg): QueryListRequest;
    fromProtoMsg(message: QueryListRequestProtoMsg): QueryListRequest;
    toProto(message: QueryListRequest): Uint8Array;
    toProtoMsg(message: QueryListRequest): QueryListRequestProtoMsg;
};
export declare const QueryListResponse: {
    typeUrl: string;
    encode(message: QueryListResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryListResponse;
    fromPartial(object: Partial<QueryListResponse>): QueryListResponse;
    fromAmino(object: QueryListResponseAmino): QueryListResponse;
    toAmino(message: QueryListResponse): QueryListResponseAmino;
    fromAminoMsg(object: QueryListResponseAminoMsg): QueryListResponse;
    fromProtoMsg(message: QueryListResponseProtoMsg): QueryListResponse;
    toProto(message: QueryListResponse): Uint8Array;
    toProtoMsg(message: QueryListResponse): QueryListResponseProtoMsg;
};
export declare const QueryMintableRequest: {
    typeUrl: string;
    encode(message: QueryMintableRequest, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryMintableRequest;
    fromPartial(object: Partial<QueryMintableRequest>): QueryMintableRequest;
    fromAmino(object: QueryMintableRequestAmino): QueryMintableRequest;
    toAmino(message: QueryMintableRequest): QueryMintableRequestAmino;
    fromAminoMsg(object: QueryMintableRequestAminoMsg): QueryMintableRequest;
    fromProtoMsg(message: QueryMintableRequestProtoMsg): QueryMintableRequest;
    toProto(message: QueryMintableRequest): Uint8Array;
    toProtoMsg(message: QueryMintableRequest): QueryMintableRequestProtoMsg;
};
export declare const QueryMintableResponse: {
    typeUrl: string;
    encode(message: QueryMintableResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryMintableResponse;
    fromPartial(object: Partial<QueryMintableResponse>): QueryMintableResponse;
    fromAmino(object: QueryMintableResponseAmino): QueryMintableResponse;
    toAmino(message: QueryMintableResponse): QueryMintableResponseAmino;
    fromAminoMsg(object: QueryMintableResponseAminoMsg): QueryMintableResponse;
    fromProtoMsg(message: QueryMintableResponseProtoMsg): QueryMintableResponse;
    toProto(message: QueryMintableResponse): Uint8Array;
    toProtoMsg(message: QueryMintableResponse): QueryMintableResponseProtoMsg;
};
