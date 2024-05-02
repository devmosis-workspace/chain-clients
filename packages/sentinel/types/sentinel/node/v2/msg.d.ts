import { Coin, CoinAmino, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { Status } from "../../types/v1/status";
import { BinaryWriter } from "../../../binary";
/** MsgRegisterRequest defines the SDK message for registering a node */
export interface MsgRegisterRequest {
    from: string;
    gigabytePrices: Coin[];
    hourlyPrices: Coin[];
    remoteUrl: string;
}
export interface MsgRegisterRequestProtoMsg {
    typeUrl: "/sentinel.node.v2.MsgRegisterRequest";
    value: Uint8Array;
}
/** MsgRegisterRequest defines the SDK message for registering a node */
export interface MsgRegisterRequestAmino {
    from?: string;
    gigabyte_prices?: CoinAmino[];
    hourly_prices?: CoinAmino[];
    remote_url?: string;
}
export interface MsgRegisterRequestAminoMsg {
    type: "/sentinel.node.v2.MsgRegisterRequest";
    value: MsgRegisterRequestAmino;
}
/** MsgRegisterRequest defines the SDK message for registering a node */
export interface MsgRegisterRequestSDKType {
    from: string;
    gigabyte_prices: CoinSDKType[];
    hourly_prices: CoinSDKType[];
    remote_url: string;
}
/** MsgUpdateDetailsRequest defines the SDK message for updating the node details */
export interface MsgUpdateDetailsRequest {
    from: string;
    gigabytePrices: Coin[];
    hourlyPrices: Coin[];
    remoteUrl: string;
}
export interface MsgUpdateDetailsRequestProtoMsg {
    typeUrl: "/sentinel.node.v2.MsgUpdateDetailsRequest";
    value: Uint8Array;
}
/** MsgUpdateDetailsRequest defines the SDK message for updating the node details */
export interface MsgUpdateDetailsRequestAmino {
    from?: string;
    gigabyte_prices?: CoinAmino[];
    hourly_prices?: CoinAmino[];
    remote_url?: string;
}
export interface MsgUpdateDetailsRequestAminoMsg {
    type: "/sentinel.node.v2.MsgUpdateDetailsRequest";
    value: MsgUpdateDetailsRequestAmino;
}
/** MsgUpdateDetailsRequest defines the SDK message for updating the node details */
export interface MsgUpdateDetailsRequestSDKType {
    from: string;
    gigabyte_prices: CoinSDKType[];
    hourly_prices: CoinSDKType[];
    remote_url: string;
}
/** MsgUpdateStatusRequest defines the SDK message for updating the node status */
export interface MsgUpdateStatusRequest {
    from: string;
    status: Status;
}
export interface MsgUpdateStatusRequestProtoMsg {
    typeUrl: "/sentinel.node.v2.MsgUpdateStatusRequest";
    value: Uint8Array;
}
/** MsgUpdateStatusRequest defines the SDK message for updating the node status */
export interface MsgUpdateStatusRequestAmino {
    from?: string;
    status?: Status;
}
export interface MsgUpdateStatusRequestAminoMsg {
    type: "/sentinel.node.v2.MsgUpdateStatusRequest";
    value: MsgUpdateStatusRequestAmino;
}
/** MsgUpdateStatusRequest defines the SDK message for updating the node status */
export interface MsgUpdateStatusRequestSDKType {
    from: string;
    status: Status;
}
/** MsgSubscribeRequest defines the SDK message for subscribe to a node */
export interface MsgSubscribeRequest {
    from: string;
    nodeAddress: string;
    gigabytes: bigint;
    hours: bigint;
    denom: string;
}
export interface MsgSubscribeRequestProtoMsg {
    typeUrl: "/sentinel.node.v2.MsgSubscribeRequest";
    value: Uint8Array;
}
/** MsgSubscribeRequest defines the SDK message for subscribe to a node */
export interface MsgSubscribeRequestAmino {
    from?: string;
    node_address?: string;
    gigabytes?: string;
    hours?: string;
    denom?: string;
}
export interface MsgSubscribeRequestAminoMsg {
    type: "/sentinel.node.v2.MsgSubscribeRequest";
    value: MsgSubscribeRequestAmino;
}
/** MsgSubscribeRequest defines the SDK message for subscribe to a node */
export interface MsgSubscribeRequestSDKType {
    from: string;
    node_address: string;
    gigabytes: bigint;
    hours: bigint;
    denom: string;
}
/** MsgRegisterResponse defines the response of message MsgRegisterRequest */
export interface MsgRegisterResponse {
}
export interface MsgRegisterResponseProtoMsg {
    typeUrl: "/sentinel.node.v2.MsgRegisterResponse";
    value: Uint8Array;
}
/** MsgRegisterResponse defines the response of message MsgRegisterRequest */
export interface MsgRegisterResponseAmino {
}
export interface MsgRegisterResponseAminoMsg {
    type: "/sentinel.node.v2.MsgRegisterResponse";
    value: MsgRegisterResponseAmino;
}
/** MsgRegisterResponse defines the response of message MsgRegisterRequest */
export interface MsgRegisterResponseSDKType {
}
/**
 * MsgUpdateDetailsResponse defines the response of message
 * MsgUpdateDetailsRequest
 */
export interface MsgUpdateDetailsResponse {
}
export interface MsgUpdateDetailsResponseProtoMsg {
    typeUrl: "/sentinel.node.v2.MsgUpdateDetailsResponse";
    value: Uint8Array;
}
/**
 * MsgUpdateDetailsResponse defines the response of message
 * MsgUpdateDetailsRequest
 */
export interface MsgUpdateDetailsResponseAmino {
}
export interface MsgUpdateDetailsResponseAminoMsg {
    type: "/sentinel.node.v2.MsgUpdateDetailsResponse";
    value: MsgUpdateDetailsResponseAmino;
}
/**
 * MsgUpdateDetailsResponse defines the response of message
 * MsgUpdateDetailsRequest
 */
export interface MsgUpdateDetailsResponseSDKType {
}
/**
 * MsgUpdateStatusResponse defines the response of message
 * MsgUpdateStatusRequest
 */
export interface MsgUpdateStatusResponse {
}
export interface MsgUpdateStatusResponseProtoMsg {
    typeUrl: "/sentinel.node.v2.MsgUpdateStatusResponse";
    value: Uint8Array;
}
/**
 * MsgUpdateStatusResponse defines the response of message
 * MsgUpdateStatusRequest
 */
export interface MsgUpdateStatusResponseAmino {
}
export interface MsgUpdateStatusResponseAminoMsg {
    type: "/sentinel.node.v2.MsgUpdateStatusResponse";
    value: MsgUpdateStatusResponseAmino;
}
/**
 * MsgUpdateStatusResponse defines the response of message
 * MsgUpdateStatusRequest
 */
export interface MsgUpdateStatusResponseSDKType {
}
/** MsgSubscribeResponse defines the response of message MsgSubscribeRequest */
export interface MsgSubscribeResponse {
}
export interface MsgSubscribeResponseProtoMsg {
    typeUrl: "/sentinel.node.v2.MsgSubscribeResponse";
    value: Uint8Array;
}
/** MsgSubscribeResponse defines the response of message MsgSubscribeRequest */
export interface MsgSubscribeResponseAmino {
}
export interface MsgSubscribeResponseAminoMsg {
    type: "/sentinel.node.v2.MsgSubscribeResponse";
    value: MsgSubscribeResponseAmino;
}
/** MsgSubscribeResponse defines the response of message MsgSubscribeRequest */
export interface MsgSubscribeResponseSDKType {
}
export declare const MsgRegisterRequest: {
    typeUrl: string;
    encode(message: MsgRegisterRequest, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): MsgRegisterRequest;
    fromPartial(object: Partial<MsgRegisterRequest>): MsgRegisterRequest;
    fromAmino(object: MsgRegisterRequestAmino): MsgRegisterRequest;
    toAmino(message: MsgRegisterRequest): MsgRegisterRequestAmino;
    fromAminoMsg(object: MsgRegisterRequestAminoMsg): MsgRegisterRequest;
    fromProtoMsg(message: MsgRegisterRequestProtoMsg): MsgRegisterRequest;
    toProto(message: MsgRegisterRequest): Uint8Array;
    toProtoMsg(message: MsgRegisterRequest): MsgRegisterRequestProtoMsg;
};
export declare const MsgUpdateDetailsRequest: {
    typeUrl: string;
    encode(message: MsgUpdateDetailsRequest, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): MsgUpdateDetailsRequest;
    fromPartial(object: Partial<MsgUpdateDetailsRequest>): MsgUpdateDetailsRequest;
    fromAmino(object: MsgUpdateDetailsRequestAmino): MsgUpdateDetailsRequest;
    toAmino(message: MsgUpdateDetailsRequest): MsgUpdateDetailsRequestAmino;
    fromAminoMsg(object: MsgUpdateDetailsRequestAminoMsg): MsgUpdateDetailsRequest;
    fromProtoMsg(message: MsgUpdateDetailsRequestProtoMsg): MsgUpdateDetailsRequest;
    toProto(message: MsgUpdateDetailsRequest): Uint8Array;
    toProtoMsg(message: MsgUpdateDetailsRequest): MsgUpdateDetailsRequestProtoMsg;
};
export declare const MsgUpdateStatusRequest: {
    typeUrl: string;
    encode(message: MsgUpdateStatusRequest, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): MsgUpdateStatusRequest;
    fromPartial(object: Partial<MsgUpdateStatusRequest>): MsgUpdateStatusRequest;
    fromAmino(object: MsgUpdateStatusRequestAmino): MsgUpdateStatusRequest;
    toAmino(message: MsgUpdateStatusRequest): MsgUpdateStatusRequestAmino;
    fromAminoMsg(object: MsgUpdateStatusRequestAminoMsg): MsgUpdateStatusRequest;
    fromProtoMsg(message: MsgUpdateStatusRequestProtoMsg): MsgUpdateStatusRequest;
    toProto(message: MsgUpdateStatusRequest): Uint8Array;
    toProtoMsg(message: MsgUpdateStatusRequest): MsgUpdateStatusRequestProtoMsg;
};
export declare const MsgSubscribeRequest: {
    typeUrl: string;
    encode(message: MsgSubscribeRequest, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): MsgSubscribeRequest;
    fromPartial(object: Partial<MsgSubscribeRequest>): MsgSubscribeRequest;
    fromAmino(object: MsgSubscribeRequestAmino): MsgSubscribeRequest;
    toAmino(message: MsgSubscribeRequest): MsgSubscribeRequestAmino;
    fromAminoMsg(object: MsgSubscribeRequestAminoMsg): MsgSubscribeRequest;
    fromProtoMsg(message: MsgSubscribeRequestProtoMsg): MsgSubscribeRequest;
    toProto(message: MsgSubscribeRequest): Uint8Array;
    toProtoMsg(message: MsgSubscribeRequest): MsgSubscribeRequestProtoMsg;
};
export declare const MsgRegisterResponse: {
    typeUrl: string;
    encode(_: MsgRegisterResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(_: any): MsgRegisterResponse;
    fromPartial(_: Partial<MsgRegisterResponse>): MsgRegisterResponse;
    fromAmino(_: MsgRegisterResponseAmino): MsgRegisterResponse;
    toAmino(_: MsgRegisterResponse): MsgRegisterResponseAmino;
    fromAminoMsg(object: MsgRegisterResponseAminoMsg): MsgRegisterResponse;
    fromProtoMsg(message: MsgRegisterResponseProtoMsg): MsgRegisterResponse;
    toProto(message: MsgRegisterResponse): Uint8Array;
    toProtoMsg(message: MsgRegisterResponse): MsgRegisterResponseProtoMsg;
};
export declare const MsgUpdateDetailsResponse: {
    typeUrl: string;
    encode(_: MsgUpdateDetailsResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(_: any): MsgUpdateDetailsResponse;
    fromPartial(_: Partial<MsgUpdateDetailsResponse>): MsgUpdateDetailsResponse;
    fromAmino(_: MsgUpdateDetailsResponseAmino): MsgUpdateDetailsResponse;
    toAmino(_: MsgUpdateDetailsResponse): MsgUpdateDetailsResponseAmino;
    fromAminoMsg(object: MsgUpdateDetailsResponseAminoMsg): MsgUpdateDetailsResponse;
    fromProtoMsg(message: MsgUpdateDetailsResponseProtoMsg): MsgUpdateDetailsResponse;
    toProto(message: MsgUpdateDetailsResponse): Uint8Array;
    toProtoMsg(message: MsgUpdateDetailsResponse): MsgUpdateDetailsResponseProtoMsg;
};
export declare const MsgUpdateStatusResponse: {
    typeUrl: string;
    encode(_: MsgUpdateStatusResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(_: any): MsgUpdateStatusResponse;
    fromPartial(_: Partial<MsgUpdateStatusResponse>): MsgUpdateStatusResponse;
    fromAmino(_: MsgUpdateStatusResponseAmino): MsgUpdateStatusResponse;
    toAmino(_: MsgUpdateStatusResponse): MsgUpdateStatusResponseAmino;
    fromAminoMsg(object: MsgUpdateStatusResponseAminoMsg): MsgUpdateStatusResponse;
    fromProtoMsg(message: MsgUpdateStatusResponseProtoMsg): MsgUpdateStatusResponse;
    toProto(message: MsgUpdateStatusResponse): Uint8Array;
    toProtoMsg(message: MsgUpdateStatusResponse): MsgUpdateStatusResponseProtoMsg;
};
export declare const MsgSubscribeResponse: {
    typeUrl: string;
    encode(_: MsgSubscribeResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(_: any): MsgSubscribeResponse;
    fromPartial(_: Partial<MsgSubscribeResponse>): MsgSubscribeResponse;
    fromAmino(_: MsgSubscribeResponseAmino): MsgSubscribeResponse;
    toAmino(_: MsgSubscribeResponse): MsgSubscribeResponseAmino;
    fromAminoMsg(object: MsgSubscribeResponseAminoMsg): MsgSubscribeResponse;
    fromProtoMsg(message: MsgSubscribeResponseProtoMsg): MsgSubscribeResponse;
    toProto(message: MsgSubscribeResponse): Uint8Array;
    toProtoMsg(message: MsgSubscribeResponse): MsgSubscribeResponseProtoMsg;
};
