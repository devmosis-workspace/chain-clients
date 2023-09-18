import { Coin, CoinAmino, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { Timestamp, TimestampAmino, TimestampSDKType } from "../../../google/protobuf/timestamp";
import { BinaryWriter } from "../../../binary";
export interface QueryBalanceRequest {
}
export interface QueryBalanceRequestProtoMsg {
    typeUrl: "/em.buyback.v1.QueryBalanceRequest";
    value: Uint8Array;
}
export interface QueryBalanceRequestAmino {
}
export interface QueryBalanceRequestAminoMsg {
    type: "/em.buyback.v1.QueryBalanceRequest";
    value: QueryBalanceRequestAmino;
}
export interface QueryBalanceRequestSDKType {
}
export interface QueryBalanceResponse {
    balance: Coin[];
}
export interface QueryBalanceResponseProtoMsg {
    typeUrl: "/em.buyback.v1.QueryBalanceResponse";
    value: Uint8Array;
}
export interface QueryBalanceResponseAmino {
    balance: CoinAmino[];
}
export interface QueryBalanceResponseAminoMsg {
    type: "/em.buyback.v1.QueryBalanceResponse";
    value: QueryBalanceResponseAmino;
}
export interface QueryBalanceResponseSDKType {
    balance: CoinSDKType[];
}
export interface QueryBuybackTimeRequest {
}
export interface QueryBuybackTimeRequestProtoMsg {
    typeUrl: "/em.buyback.v1.QueryBuybackTimeRequest";
    value: Uint8Array;
}
export interface QueryBuybackTimeRequestAmino {
}
export interface QueryBuybackTimeRequestAminoMsg {
    type: "/em.buyback.v1.QueryBuybackTimeRequest";
    value: QueryBuybackTimeRequestAmino;
}
export interface QueryBuybackTimeRequestSDKType {
}
export interface QueryBuybackTimeResponse {
    lastRun: Timestamp;
    nextRun: Timestamp;
}
export interface QueryBuybackTimeResponseProtoMsg {
    typeUrl: "/em.buyback.v1.QueryBuybackTimeResponse";
    value: Uint8Array;
}
export interface QueryBuybackTimeResponseAmino {
    last_run?: TimestampAmino;
    next_run?: TimestampAmino;
}
export interface QueryBuybackTimeResponseAminoMsg {
    type: "/em.buyback.v1.QueryBuybackTimeResponse";
    value: QueryBuybackTimeResponseAmino;
}
export interface QueryBuybackTimeResponseSDKType {
    last_run: TimestampSDKType;
    next_run: TimestampSDKType;
}
export declare const QueryBalanceRequest: {
    typeUrl: string;
    encode(_: QueryBalanceRequest, writer?: BinaryWriter): BinaryWriter;
    fromJSON(_: any): QueryBalanceRequest;
    fromPartial(_: Partial<QueryBalanceRequest>): QueryBalanceRequest;
    fromAmino(_: QueryBalanceRequestAmino): QueryBalanceRequest;
    toAmino(_: QueryBalanceRequest): QueryBalanceRequestAmino;
    fromAminoMsg(object: QueryBalanceRequestAminoMsg): QueryBalanceRequest;
    fromProtoMsg(message: QueryBalanceRequestProtoMsg): QueryBalanceRequest;
    toProto(message: QueryBalanceRequest): Uint8Array;
    toProtoMsg(message: QueryBalanceRequest): QueryBalanceRequestProtoMsg;
};
export declare const QueryBalanceResponse: {
    typeUrl: string;
    encode(message: QueryBalanceResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryBalanceResponse;
    fromPartial(object: Partial<QueryBalanceResponse>): QueryBalanceResponse;
    fromAmino(object: QueryBalanceResponseAmino): QueryBalanceResponse;
    toAmino(message: QueryBalanceResponse): QueryBalanceResponseAmino;
    fromAminoMsg(object: QueryBalanceResponseAminoMsg): QueryBalanceResponse;
    fromProtoMsg(message: QueryBalanceResponseProtoMsg): QueryBalanceResponse;
    toProto(message: QueryBalanceResponse): Uint8Array;
    toProtoMsg(message: QueryBalanceResponse): QueryBalanceResponseProtoMsg;
};
export declare const QueryBuybackTimeRequest: {
    typeUrl: string;
    encode(_: QueryBuybackTimeRequest, writer?: BinaryWriter): BinaryWriter;
    fromJSON(_: any): QueryBuybackTimeRequest;
    fromPartial(_: Partial<QueryBuybackTimeRequest>): QueryBuybackTimeRequest;
    fromAmino(_: QueryBuybackTimeRequestAmino): QueryBuybackTimeRequest;
    toAmino(_: QueryBuybackTimeRequest): QueryBuybackTimeRequestAmino;
    fromAminoMsg(object: QueryBuybackTimeRequestAminoMsg): QueryBuybackTimeRequest;
    fromProtoMsg(message: QueryBuybackTimeRequestProtoMsg): QueryBuybackTimeRequest;
    toProto(message: QueryBuybackTimeRequest): Uint8Array;
    toProtoMsg(message: QueryBuybackTimeRequest): QueryBuybackTimeRequestProtoMsg;
};
export declare const QueryBuybackTimeResponse: {
    typeUrl: string;
    encode(message: QueryBuybackTimeResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryBuybackTimeResponse;
    fromPartial(object: Partial<QueryBuybackTimeResponse>): QueryBuybackTimeResponse;
    fromAmino(object: QueryBuybackTimeResponseAmino): QueryBuybackTimeResponse;
    toAmino(message: QueryBuybackTimeResponse): QueryBuybackTimeResponseAmino;
    fromAminoMsg(object: QueryBuybackTimeResponseAminoMsg): QueryBuybackTimeResponse;
    fromProtoMsg(message: QueryBuybackTimeResponseProtoMsg): QueryBuybackTimeResponse;
    toProto(message: QueryBuybackTimeResponse): Uint8Array;
    toProtoMsg(message: QueryBuybackTimeResponse): QueryBuybackTimeResponseProtoMsg;
};
