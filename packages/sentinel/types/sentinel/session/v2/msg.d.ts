import { Proof, ProofAmino, ProofSDKType } from "./proof";
import { BinaryWriter } from "../../../binary";
/** MsgStartRequest defines the SDK message for starting a session */
export interface MsgStartRequest {
    from: string;
    id: bigint;
    address: string;
}
export interface MsgStartRequestProtoMsg {
    typeUrl: "/sentinel.session.v2.MsgStartRequest";
    value: Uint8Array;
}
/** MsgStartRequest defines the SDK message for starting a session */
export interface MsgStartRequestAmino {
    from?: string;
    id?: string;
    address?: string;
}
export interface MsgStartRequestAminoMsg {
    type: "/sentinel.session.v2.MsgStartRequest";
    value: MsgStartRequestAmino;
}
/** MsgStartRequest defines the SDK message for starting a session */
export interface MsgStartRequestSDKType {
    from: string;
    id: bigint;
    address: string;
}
/** MsgUpdateDetailsRequest defines the SDK message for updating a session */
export interface MsgUpdateDetailsRequest {
    from: string;
    proof: Proof;
    signature: Uint8Array;
}
export interface MsgUpdateDetailsRequestProtoMsg {
    typeUrl: "/sentinel.session.v2.MsgUpdateDetailsRequest";
    value: Uint8Array;
}
/** MsgUpdateDetailsRequest defines the SDK message for updating a session */
export interface MsgUpdateDetailsRequestAmino {
    from?: string;
    proof?: ProofAmino;
    signature?: string;
}
export interface MsgUpdateDetailsRequestAminoMsg {
    type: "/sentinel.session.v2.MsgUpdateDetailsRequest";
    value: MsgUpdateDetailsRequestAmino;
}
/** MsgUpdateDetailsRequest defines the SDK message for updating a session */
export interface MsgUpdateDetailsRequestSDKType {
    from: string;
    proof: ProofSDKType;
    signature: Uint8Array;
}
/** MsgEndRequest defines the SDK message for ending a session */
export interface MsgEndRequest {
    from: string;
    id: bigint;
    rating: bigint;
}
export interface MsgEndRequestProtoMsg {
    typeUrl: "/sentinel.session.v2.MsgEndRequest";
    value: Uint8Array;
}
/** MsgEndRequest defines the SDK message for ending a session */
export interface MsgEndRequestAmino {
    from?: string;
    id?: string;
    rating?: string;
}
export interface MsgEndRequestAminoMsg {
    type: "/sentinel.session.v2.MsgEndRequest";
    value: MsgEndRequestAmino;
}
/** MsgEndRequest defines the SDK message for ending a session */
export interface MsgEndRequestSDKType {
    from: string;
    id: bigint;
    rating: bigint;
}
/** MsgStartResponse defines the response of message MsgStartRequest */
export interface MsgStartResponse {
}
export interface MsgStartResponseProtoMsg {
    typeUrl: "/sentinel.session.v2.MsgStartResponse";
    value: Uint8Array;
}
/** MsgStartResponse defines the response of message MsgStartRequest */
export interface MsgStartResponseAmino {
}
export interface MsgStartResponseAminoMsg {
    type: "/sentinel.session.v2.MsgStartResponse";
    value: MsgStartResponseAmino;
}
/** MsgStartResponse defines the response of message MsgStartRequest */
export interface MsgStartResponseSDKType {
}
/**
 * MsgUpdateDetailsResponse defines the response of message
 * MsgUpdateDetailsRequest
 */
export interface MsgUpdateDetailsResponse {
}
export interface MsgUpdateDetailsResponseProtoMsg {
    typeUrl: "/sentinel.session.v2.MsgUpdateDetailsResponse";
    value: Uint8Array;
}
/**
 * MsgUpdateDetailsResponse defines the response of message
 * MsgUpdateDetailsRequest
 */
export interface MsgUpdateDetailsResponseAmino {
}
export interface MsgUpdateDetailsResponseAminoMsg {
    type: "/sentinel.session.v2.MsgUpdateDetailsResponse";
    value: MsgUpdateDetailsResponseAmino;
}
/**
 * MsgUpdateDetailsResponse defines the response of message
 * MsgUpdateDetailsRequest
 */
export interface MsgUpdateDetailsResponseSDKType {
}
/** MsgEndResponse defines the response of message MsgEndRequest */
export interface MsgEndResponse {
}
export interface MsgEndResponseProtoMsg {
    typeUrl: "/sentinel.session.v2.MsgEndResponse";
    value: Uint8Array;
}
/** MsgEndResponse defines the response of message MsgEndRequest */
export interface MsgEndResponseAmino {
}
export interface MsgEndResponseAminoMsg {
    type: "/sentinel.session.v2.MsgEndResponse";
    value: MsgEndResponseAmino;
}
/** MsgEndResponse defines the response of message MsgEndRequest */
export interface MsgEndResponseSDKType {
}
export declare const MsgStartRequest: {
    typeUrl: string;
    encode(message: MsgStartRequest, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): MsgStartRequest;
    fromPartial(object: Partial<MsgStartRequest>): MsgStartRequest;
    fromAmino(object: MsgStartRequestAmino): MsgStartRequest;
    toAmino(message: MsgStartRequest): MsgStartRequestAmino;
    fromAminoMsg(object: MsgStartRequestAminoMsg): MsgStartRequest;
    fromProtoMsg(message: MsgStartRequestProtoMsg): MsgStartRequest;
    toProto(message: MsgStartRequest): Uint8Array;
    toProtoMsg(message: MsgStartRequest): MsgStartRequestProtoMsg;
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
export declare const MsgEndRequest: {
    typeUrl: string;
    encode(message: MsgEndRequest, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): MsgEndRequest;
    fromPartial(object: Partial<MsgEndRequest>): MsgEndRequest;
    fromAmino(object: MsgEndRequestAmino): MsgEndRequest;
    toAmino(message: MsgEndRequest): MsgEndRequestAmino;
    fromAminoMsg(object: MsgEndRequestAminoMsg): MsgEndRequest;
    fromProtoMsg(message: MsgEndRequestProtoMsg): MsgEndRequest;
    toProto(message: MsgEndRequest): Uint8Array;
    toProtoMsg(message: MsgEndRequest): MsgEndRequestProtoMsg;
};
export declare const MsgStartResponse: {
    typeUrl: string;
    encode(_: MsgStartResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(_: any): MsgStartResponse;
    fromPartial(_: Partial<MsgStartResponse>): MsgStartResponse;
    fromAmino(_: MsgStartResponseAmino): MsgStartResponse;
    toAmino(_: MsgStartResponse): MsgStartResponseAmino;
    fromAminoMsg(object: MsgStartResponseAminoMsg): MsgStartResponse;
    fromProtoMsg(message: MsgStartResponseProtoMsg): MsgStartResponse;
    toProto(message: MsgStartResponse): Uint8Array;
    toProtoMsg(message: MsgStartResponse): MsgStartResponseProtoMsg;
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
export declare const MsgEndResponse: {
    typeUrl: string;
    encode(_: MsgEndResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(_: any): MsgEndResponse;
    fromPartial(_: Partial<MsgEndResponse>): MsgEndResponse;
    fromAmino(_: MsgEndResponseAmino): MsgEndResponse;
    toAmino(_: MsgEndResponse): MsgEndResponseAmino;
    fromAminoMsg(object: MsgEndResponseAminoMsg): MsgEndResponse;
    fromProtoMsg(message: MsgEndResponseProtoMsg): MsgEndResponse;
    toProto(message: MsgEndResponse): Uint8Array;
    toProtoMsg(message: MsgEndResponse): MsgEndResponseProtoMsg;
};
