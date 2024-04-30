import { Coin, CoinAmino, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { BinaryWriter } from "../../../binary";
export interface QueryAddress {
    channel: string;
    recipient: string;
}
export interface QueryAddressProtoMsg {
    typeUrl: "/noble.forwarding.v1.QueryAddress";
    value: Uint8Array;
}
export interface QueryAddressAmino {
    channel?: string;
    recipient?: string;
}
export interface QueryAddressAminoMsg {
    type: "/noble.forwarding.v1.QueryAddress";
    value: QueryAddressAmino;
}
export interface QueryAddressSDKType {
    channel: string;
    recipient: string;
}
export interface QueryAddressResponse {
    address: string;
    exists: boolean;
}
export interface QueryAddressResponseProtoMsg {
    typeUrl: "/noble.forwarding.v1.QueryAddressResponse";
    value: Uint8Array;
}
export interface QueryAddressResponseAmino {
    address?: string;
    exists?: boolean;
}
export interface QueryAddressResponseAminoMsg {
    type: "/noble.forwarding.v1.QueryAddressResponse";
    value: QueryAddressResponseAmino;
}
export interface QueryAddressResponseSDKType {
    address: string;
    exists: boolean;
}
export interface QueryStatsByChannel {
    channel: string;
}
export interface QueryStatsByChannelProtoMsg {
    typeUrl: "/noble.forwarding.v1.QueryStatsByChannel";
    value: Uint8Array;
}
export interface QueryStatsByChannelAmino {
    channel?: string;
}
export interface QueryStatsByChannelAminoMsg {
    type: "/noble.forwarding.v1.QueryStatsByChannel";
    value: QueryStatsByChannelAmino;
}
export interface QueryStatsByChannelSDKType {
    channel: string;
}
export interface QueryStatsByChannelResponse {
    numOfAccounts: bigint;
    numOfForwards: bigint;
    totalForwarded: Coin[];
}
export interface QueryStatsByChannelResponseProtoMsg {
    typeUrl: "/noble.forwarding.v1.QueryStatsByChannelResponse";
    value: Uint8Array;
}
export interface QueryStatsByChannelResponseAmino {
    num_of_accounts?: string;
    num_of_forwards?: string;
    total_forwarded?: CoinAmino[];
}
export interface QueryStatsByChannelResponseAminoMsg {
    type: "/noble.forwarding.v1.QueryStatsByChannelResponse";
    value: QueryStatsByChannelResponseAmino;
}
export interface QueryStatsByChannelResponseSDKType {
    num_of_accounts: bigint;
    num_of_forwards: bigint;
    total_forwarded: CoinSDKType[];
}
export declare const QueryAddress: {
    typeUrl: string;
    encode(message: QueryAddress, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryAddress;
    fromPartial(object: Partial<QueryAddress>): QueryAddress;
    fromAmino(object: QueryAddressAmino): QueryAddress;
    toAmino(message: QueryAddress): QueryAddressAmino;
    fromAminoMsg(object: QueryAddressAminoMsg): QueryAddress;
    fromProtoMsg(message: QueryAddressProtoMsg): QueryAddress;
    toProto(message: QueryAddress): Uint8Array;
    toProtoMsg(message: QueryAddress): QueryAddressProtoMsg;
};
export declare const QueryAddressResponse: {
    typeUrl: string;
    encode(message: QueryAddressResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryAddressResponse;
    fromPartial(object: Partial<QueryAddressResponse>): QueryAddressResponse;
    fromAmino(object: QueryAddressResponseAmino): QueryAddressResponse;
    toAmino(message: QueryAddressResponse): QueryAddressResponseAmino;
    fromAminoMsg(object: QueryAddressResponseAminoMsg): QueryAddressResponse;
    fromProtoMsg(message: QueryAddressResponseProtoMsg): QueryAddressResponse;
    toProto(message: QueryAddressResponse): Uint8Array;
    toProtoMsg(message: QueryAddressResponse): QueryAddressResponseProtoMsg;
};
export declare const QueryStatsByChannel: {
    typeUrl: string;
    encode(message: QueryStatsByChannel, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryStatsByChannel;
    fromPartial(object: Partial<QueryStatsByChannel>): QueryStatsByChannel;
    fromAmino(object: QueryStatsByChannelAmino): QueryStatsByChannel;
    toAmino(message: QueryStatsByChannel): QueryStatsByChannelAmino;
    fromAminoMsg(object: QueryStatsByChannelAminoMsg): QueryStatsByChannel;
    fromProtoMsg(message: QueryStatsByChannelProtoMsg): QueryStatsByChannel;
    toProto(message: QueryStatsByChannel): Uint8Array;
    toProtoMsg(message: QueryStatsByChannel): QueryStatsByChannelProtoMsg;
};
export declare const QueryStatsByChannelResponse: {
    typeUrl: string;
    encode(message: QueryStatsByChannelResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryStatsByChannelResponse;
    fromPartial(object: Partial<QueryStatsByChannelResponse>): QueryStatsByChannelResponse;
    fromAmino(object: QueryStatsByChannelResponseAmino): QueryStatsByChannelResponse;
    toAmino(message: QueryStatsByChannelResponse): QueryStatsByChannelResponseAmino;
    fromAminoMsg(object: QueryStatsByChannelResponseAminoMsg): QueryStatsByChannelResponse;
    fromProtoMsg(message: QueryStatsByChannelResponseProtoMsg): QueryStatsByChannelResponse;
    toProto(message: QueryStatsByChannelResponse): Uint8Array;
    toProtoMsg(message: QueryStatsByChannelResponse): QueryStatsByChannelResponseProtoMsg;
};
