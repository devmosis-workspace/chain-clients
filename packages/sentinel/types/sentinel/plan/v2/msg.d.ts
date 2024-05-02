import { Duration, DurationAmino, DurationSDKType } from "../../../google/protobuf/duration";
import { Coin, CoinAmino, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { Status } from "../../types/v1/status";
import { BinaryWriter } from "../../../binary";
/** MsgCreateRequest defines the SDK message for creating a subscription plan */
export interface MsgCreateRequest {
    from: string;
    duration: Duration;
    gigabytes: bigint;
    prices: Coin[];
}
export interface MsgCreateRequestProtoMsg {
    typeUrl: "/sentinel.plan.v2.MsgCreateRequest";
    value: Uint8Array;
}
/** MsgCreateRequest defines the SDK message for creating a subscription plan */
export interface MsgCreateRequestAmino {
    from?: string;
    duration?: DurationAmino;
    gigabytes?: string;
    prices?: CoinAmino[];
}
export interface MsgCreateRequestAminoMsg {
    type: "/sentinel.plan.v2.MsgCreateRequest";
    value: MsgCreateRequestAmino;
}
/** MsgCreateRequest defines the SDK message for creating a subscription plan */
export interface MsgCreateRequestSDKType {
    from: string;
    duration: DurationSDKType;
    gigabytes: bigint;
    prices: CoinSDKType[];
}
/**
 * MsgUpdateStatusRequest defines the SDK message for modifying the status of a
 * subscription plan
 */
export interface MsgUpdateStatusRequest {
    from: string;
    id: bigint;
    status: Status;
}
export interface MsgUpdateStatusRequestProtoMsg {
    typeUrl: "/sentinel.plan.v2.MsgUpdateStatusRequest";
    value: Uint8Array;
}
/**
 * MsgUpdateStatusRequest defines the SDK message for modifying the status of a
 * subscription plan
 */
export interface MsgUpdateStatusRequestAmino {
    from?: string;
    id?: string;
    status?: Status;
}
export interface MsgUpdateStatusRequestAminoMsg {
    type: "/sentinel.plan.v2.MsgUpdateStatusRequest";
    value: MsgUpdateStatusRequestAmino;
}
/**
 * MsgUpdateStatusRequest defines the SDK message for modifying the status of a
 * subscription plan
 */
export interface MsgUpdateStatusRequestSDKType {
    from: string;
    id: bigint;
    status: Status;
}
/**
 * MsgLinkNodeRequest defines the SDK message for adding a node to a
 * subscription plan
 */
export interface MsgLinkNodeRequest {
    from: string;
    id: bigint;
    nodeAddress: string;
}
export interface MsgLinkNodeRequestProtoMsg {
    typeUrl: "/sentinel.plan.v2.MsgLinkNodeRequest";
    value: Uint8Array;
}
/**
 * MsgLinkNodeRequest defines the SDK message for adding a node to a
 * subscription plan
 */
export interface MsgLinkNodeRequestAmino {
    from?: string;
    id?: string;
    node_address?: string;
}
export interface MsgLinkNodeRequestAminoMsg {
    type: "/sentinel.plan.v2.MsgLinkNodeRequest";
    value: MsgLinkNodeRequestAmino;
}
/**
 * MsgLinkNodeRequest defines the SDK message for adding a node to a
 * subscription plan
 */
export interface MsgLinkNodeRequestSDKType {
    from: string;
    id: bigint;
    node_address: string;
}
/**
 * MsgUnlinkNodeRequest defines the SDK message for removing a node from a
 * subscription plan
 */
export interface MsgUnlinkNodeRequest {
    from: string;
    id: bigint;
    nodeAddress: string;
}
export interface MsgUnlinkNodeRequestProtoMsg {
    typeUrl: "/sentinel.plan.v2.MsgUnlinkNodeRequest";
    value: Uint8Array;
}
/**
 * MsgUnlinkNodeRequest defines the SDK message for removing a node from a
 * subscription plan
 */
export interface MsgUnlinkNodeRequestAmino {
    from?: string;
    id?: string;
    node_address?: string;
}
export interface MsgUnlinkNodeRequestAminoMsg {
    type: "/sentinel.plan.v2.MsgUnlinkNodeRequest";
    value: MsgUnlinkNodeRequestAmino;
}
/**
 * MsgUnlinkNodeRequest defines the SDK message for removing a node from a
 * subscription plan
 */
export interface MsgUnlinkNodeRequestSDKType {
    from: string;
    id: bigint;
    node_address: string;
}
/**
 * MsgSubscribeRequest defines the SDK message for subscribing to a subscription
 * plan
 */
export interface MsgSubscribeRequest {
    from: string;
    id: bigint;
    denom: string;
}
export interface MsgSubscribeRequestProtoMsg {
    typeUrl: "/sentinel.plan.v2.MsgSubscribeRequest";
    value: Uint8Array;
}
/**
 * MsgSubscribeRequest defines the SDK message for subscribing to a subscription
 * plan
 */
export interface MsgSubscribeRequestAmino {
    from?: string;
    id?: string;
    denom?: string;
}
export interface MsgSubscribeRequestAminoMsg {
    type: "/sentinel.plan.v2.MsgSubscribeRequest";
    value: MsgSubscribeRequestAmino;
}
/**
 * MsgSubscribeRequest defines the SDK message for subscribing to a subscription
 * plan
 */
export interface MsgSubscribeRequestSDKType {
    from: string;
    id: bigint;
    denom: string;
}
/** MsgCreateResponse defines the response of message MsgCreateRequest */
export interface MsgCreateResponse {
}
export interface MsgCreateResponseProtoMsg {
    typeUrl: "/sentinel.plan.v2.MsgCreateResponse";
    value: Uint8Array;
}
/** MsgCreateResponse defines the response of message MsgCreateRequest */
export interface MsgCreateResponseAmino {
}
export interface MsgCreateResponseAminoMsg {
    type: "/sentinel.plan.v2.MsgCreateResponse";
    value: MsgCreateResponseAmino;
}
/** MsgCreateResponse defines the response of message MsgCreateRequest */
export interface MsgCreateResponseSDKType {
}
/**
 * MsgUpdateStatusResponse defines the response of message
 * MsgUpdateStatusRequest
 */
export interface MsgUpdateStatusResponse {
}
export interface MsgUpdateStatusResponseProtoMsg {
    typeUrl: "/sentinel.plan.v2.MsgUpdateStatusResponse";
    value: Uint8Array;
}
/**
 * MsgUpdateStatusResponse defines the response of message
 * MsgUpdateStatusRequest
 */
export interface MsgUpdateStatusResponseAmino {
}
export interface MsgUpdateStatusResponseAminoMsg {
    type: "/sentinel.plan.v2.MsgUpdateStatusResponse";
    value: MsgUpdateStatusResponseAmino;
}
/**
 * MsgUpdateStatusResponse defines the response of message
 * MsgUpdateStatusRequest
 */
export interface MsgUpdateStatusResponseSDKType {
}
/** MsgLinkNodeResponse defines the response of message MsgLinkNodeRequest */
export interface MsgLinkNodeResponse {
}
export interface MsgLinkNodeResponseProtoMsg {
    typeUrl: "/sentinel.plan.v2.MsgLinkNodeResponse";
    value: Uint8Array;
}
/** MsgLinkNodeResponse defines the response of message MsgLinkNodeRequest */
export interface MsgLinkNodeResponseAmino {
}
export interface MsgLinkNodeResponseAminoMsg {
    type: "/sentinel.plan.v2.MsgLinkNodeResponse";
    value: MsgLinkNodeResponseAmino;
}
/** MsgLinkNodeResponse defines the response of message MsgLinkNodeRequest */
export interface MsgLinkNodeResponseSDKType {
}
/** MsgUnlinkNodeResponse defines the response of message MsgUnlinkNodeRequest */
export interface MsgUnlinkNodeResponse {
}
export interface MsgUnlinkNodeResponseProtoMsg {
    typeUrl: "/sentinel.plan.v2.MsgUnlinkNodeResponse";
    value: Uint8Array;
}
/** MsgUnlinkNodeResponse defines the response of message MsgUnlinkNodeRequest */
export interface MsgUnlinkNodeResponseAmino {
}
export interface MsgUnlinkNodeResponseAminoMsg {
    type: "/sentinel.plan.v2.MsgUnlinkNodeResponse";
    value: MsgUnlinkNodeResponseAmino;
}
/** MsgUnlinkNodeResponse defines the response of message MsgUnlinkNodeRequest */
export interface MsgUnlinkNodeResponseSDKType {
}
/** MsgSubscribeResponse defines the response of message MsgSubscribeRequest */
export interface MsgSubscribeResponse {
}
export interface MsgSubscribeResponseProtoMsg {
    typeUrl: "/sentinel.plan.v2.MsgSubscribeResponse";
    value: Uint8Array;
}
/** MsgSubscribeResponse defines the response of message MsgSubscribeRequest */
export interface MsgSubscribeResponseAmino {
}
export interface MsgSubscribeResponseAminoMsg {
    type: "/sentinel.plan.v2.MsgSubscribeResponse";
    value: MsgSubscribeResponseAmino;
}
/** MsgSubscribeResponse defines the response of message MsgSubscribeRequest */
export interface MsgSubscribeResponseSDKType {
}
export declare const MsgCreateRequest: {
    typeUrl: string;
    encode(message: MsgCreateRequest, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): MsgCreateRequest;
    fromPartial(object: Partial<MsgCreateRequest>): MsgCreateRequest;
    fromAmino(object: MsgCreateRequestAmino): MsgCreateRequest;
    toAmino(message: MsgCreateRequest): MsgCreateRequestAmino;
    fromAminoMsg(object: MsgCreateRequestAminoMsg): MsgCreateRequest;
    fromProtoMsg(message: MsgCreateRequestProtoMsg): MsgCreateRequest;
    toProto(message: MsgCreateRequest): Uint8Array;
    toProtoMsg(message: MsgCreateRequest): MsgCreateRequestProtoMsg;
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
export declare const MsgLinkNodeRequest: {
    typeUrl: string;
    encode(message: MsgLinkNodeRequest, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): MsgLinkNodeRequest;
    fromPartial(object: Partial<MsgLinkNodeRequest>): MsgLinkNodeRequest;
    fromAmino(object: MsgLinkNodeRequestAmino): MsgLinkNodeRequest;
    toAmino(message: MsgLinkNodeRequest): MsgLinkNodeRequestAmino;
    fromAminoMsg(object: MsgLinkNodeRequestAminoMsg): MsgLinkNodeRequest;
    fromProtoMsg(message: MsgLinkNodeRequestProtoMsg): MsgLinkNodeRequest;
    toProto(message: MsgLinkNodeRequest): Uint8Array;
    toProtoMsg(message: MsgLinkNodeRequest): MsgLinkNodeRequestProtoMsg;
};
export declare const MsgUnlinkNodeRequest: {
    typeUrl: string;
    encode(message: MsgUnlinkNodeRequest, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): MsgUnlinkNodeRequest;
    fromPartial(object: Partial<MsgUnlinkNodeRequest>): MsgUnlinkNodeRequest;
    fromAmino(object: MsgUnlinkNodeRequestAmino): MsgUnlinkNodeRequest;
    toAmino(message: MsgUnlinkNodeRequest): MsgUnlinkNodeRequestAmino;
    fromAminoMsg(object: MsgUnlinkNodeRequestAminoMsg): MsgUnlinkNodeRequest;
    fromProtoMsg(message: MsgUnlinkNodeRequestProtoMsg): MsgUnlinkNodeRequest;
    toProto(message: MsgUnlinkNodeRequest): Uint8Array;
    toProtoMsg(message: MsgUnlinkNodeRequest): MsgUnlinkNodeRequestProtoMsg;
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
export declare const MsgCreateResponse: {
    typeUrl: string;
    encode(_: MsgCreateResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(_: any): MsgCreateResponse;
    fromPartial(_: Partial<MsgCreateResponse>): MsgCreateResponse;
    fromAmino(_: MsgCreateResponseAmino): MsgCreateResponse;
    toAmino(_: MsgCreateResponse): MsgCreateResponseAmino;
    fromAminoMsg(object: MsgCreateResponseAminoMsg): MsgCreateResponse;
    fromProtoMsg(message: MsgCreateResponseProtoMsg): MsgCreateResponse;
    toProto(message: MsgCreateResponse): Uint8Array;
    toProtoMsg(message: MsgCreateResponse): MsgCreateResponseProtoMsg;
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
export declare const MsgLinkNodeResponse: {
    typeUrl: string;
    encode(_: MsgLinkNodeResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(_: any): MsgLinkNodeResponse;
    fromPartial(_: Partial<MsgLinkNodeResponse>): MsgLinkNodeResponse;
    fromAmino(_: MsgLinkNodeResponseAmino): MsgLinkNodeResponse;
    toAmino(_: MsgLinkNodeResponse): MsgLinkNodeResponseAmino;
    fromAminoMsg(object: MsgLinkNodeResponseAminoMsg): MsgLinkNodeResponse;
    fromProtoMsg(message: MsgLinkNodeResponseProtoMsg): MsgLinkNodeResponse;
    toProto(message: MsgLinkNodeResponse): Uint8Array;
    toProtoMsg(message: MsgLinkNodeResponse): MsgLinkNodeResponseProtoMsg;
};
export declare const MsgUnlinkNodeResponse: {
    typeUrl: string;
    encode(_: MsgUnlinkNodeResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(_: any): MsgUnlinkNodeResponse;
    fromPartial(_: Partial<MsgUnlinkNodeResponse>): MsgUnlinkNodeResponse;
    fromAmino(_: MsgUnlinkNodeResponseAmino): MsgUnlinkNodeResponse;
    toAmino(_: MsgUnlinkNodeResponse): MsgUnlinkNodeResponseAmino;
    fromAminoMsg(object: MsgUnlinkNodeResponseAminoMsg): MsgUnlinkNodeResponse;
    fromProtoMsg(message: MsgUnlinkNodeResponseProtoMsg): MsgUnlinkNodeResponse;
    toProto(message: MsgUnlinkNodeResponse): Uint8Array;
    toProtoMsg(message: MsgUnlinkNodeResponse): MsgUnlinkNodeResponseProtoMsg;
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
