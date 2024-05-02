import { PageRequest, PageRequestAmino, PageRequestSDKType, PageResponse, PageResponseAmino, PageResponseSDKType } from "../../../cosmos/base/query/v1beta1/pagination";
import { Deposit, DepositAmino, DepositSDKType } from "./deposit";
import { BinaryWriter } from "../../../binary";
export interface QueryDepositsRequest {
    pagination?: PageRequest;
}
export interface QueryDepositsRequestProtoMsg {
    typeUrl: "/sentinel.deposit.v1.QueryDepositsRequest";
    value: Uint8Array;
}
export interface QueryDepositsRequestAmino {
    pagination?: PageRequestAmino;
}
export interface QueryDepositsRequestAminoMsg {
    type: "/sentinel.deposit.v1.QueryDepositsRequest";
    value: QueryDepositsRequestAmino;
}
export interface QueryDepositsRequestSDKType {
    pagination?: PageRequestSDKType;
}
export interface QueryDepositRequest {
    address: string;
}
export interface QueryDepositRequestProtoMsg {
    typeUrl: "/sentinel.deposit.v1.QueryDepositRequest";
    value: Uint8Array;
}
export interface QueryDepositRequestAmino {
    address?: string;
}
export interface QueryDepositRequestAminoMsg {
    type: "/sentinel.deposit.v1.QueryDepositRequest";
    value: QueryDepositRequestAmino;
}
export interface QueryDepositRequestSDKType {
    address: string;
}
export interface QueryDepositsResponse {
    deposits: Deposit[];
    pagination?: PageResponse;
}
export interface QueryDepositsResponseProtoMsg {
    typeUrl: "/sentinel.deposit.v1.QueryDepositsResponse";
    value: Uint8Array;
}
export interface QueryDepositsResponseAmino {
    deposits?: DepositAmino[];
    pagination?: PageResponseAmino;
}
export interface QueryDepositsResponseAminoMsg {
    type: "/sentinel.deposit.v1.QueryDepositsResponse";
    value: QueryDepositsResponseAmino;
}
export interface QueryDepositsResponseSDKType {
    deposits: DepositSDKType[];
    pagination?: PageResponseSDKType;
}
export interface QueryDepositResponse {
    deposit: Deposit;
}
export interface QueryDepositResponseProtoMsg {
    typeUrl: "/sentinel.deposit.v1.QueryDepositResponse";
    value: Uint8Array;
}
export interface QueryDepositResponseAmino {
    deposit?: DepositAmino;
}
export interface QueryDepositResponseAminoMsg {
    type: "/sentinel.deposit.v1.QueryDepositResponse";
    value: QueryDepositResponseAmino;
}
export interface QueryDepositResponseSDKType {
    deposit: DepositSDKType;
}
export declare const QueryDepositsRequest: {
    typeUrl: string;
    encode(message: QueryDepositsRequest, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryDepositsRequest;
    fromPartial(object: Partial<QueryDepositsRequest>): QueryDepositsRequest;
    fromAmino(object: QueryDepositsRequestAmino): QueryDepositsRequest;
    toAmino(message: QueryDepositsRequest): QueryDepositsRequestAmino;
    fromAminoMsg(object: QueryDepositsRequestAminoMsg): QueryDepositsRequest;
    fromProtoMsg(message: QueryDepositsRequestProtoMsg): QueryDepositsRequest;
    toProto(message: QueryDepositsRequest): Uint8Array;
    toProtoMsg(message: QueryDepositsRequest): QueryDepositsRequestProtoMsg;
};
export declare const QueryDepositRequest: {
    typeUrl: string;
    encode(message: QueryDepositRequest, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryDepositRequest;
    fromPartial(object: Partial<QueryDepositRequest>): QueryDepositRequest;
    fromAmino(object: QueryDepositRequestAmino): QueryDepositRequest;
    toAmino(message: QueryDepositRequest): QueryDepositRequestAmino;
    fromAminoMsg(object: QueryDepositRequestAminoMsg): QueryDepositRequest;
    fromProtoMsg(message: QueryDepositRequestProtoMsg): QueryDepositRequest;
    toProto(message: QueryDepositRequest): Uint8Array;
    toProtoMsg(message: QueryDepositRequest): QueryDepositRequestProtoMsg;
};
export declare const QueryDepositsResponse: {
    typeUrl: string;
    encode(message: QueryDepositsResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryDepositsResponse;
    fromPartial(object: Partial<QueryDepositsResponse>): QueryDepositsResponse;
    fromAmino(object: QueryDepositsResponseAmino): QueryDepositsResponse;
    toAmino(message: QueryDepositsResponse): QueryDepositsResponseAmino;
    fromAminoMsg(object: QueryDepositsResponseAminoMsg): QueryDepositsResponse;
    fromProtoMsg(message: QueryDepositsResponseProtoMsg): QueryDepositsResponse;
    toProto(message: QueryDepositsResponse): Uint8Array;
    toProtoMsg(message: QueryDepositsResponse): QueryDepositsResponseProtoMsg;
};
export declare const QueryDepositResponse: {
    typeUrl: string;
    encode(message: QueryDepositResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryDepositResponse;
    fromPartial(object: Partial<QueryDepositResponse>): QueryDepositResponse;
    fromAmino(object: QueryDepositResponseAmino): QueryDepositResponse;
    toAmino(message: QueryDepositResponse): QueryDepositResponseAmino;
    fromAminoMsg(object: QueryDepositResponseAminoMsg): QueryDepositResponse;
    fromProtoMsg(message: QueryDepositResponseProtoMsg): QueryDepositResponse;
    toProto(message: QueryDepositResponse): Uint8Array;
    toProtoMsg(message: QueryDepositResponse): QueryDepositResponseProtoMsg;
};
