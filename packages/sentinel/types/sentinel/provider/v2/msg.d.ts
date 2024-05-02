import { Status } from "../../types/v1/status";
import { BinaryWriter } from "../../../binary";
/** MsgRegisterRequest defines the SDK message for registering a provider */
export interface MsgRegisterRequest {
    from: string;
    name: string;
    identity: string;
    website: string;
    description: string;
}
export interface MsgRegisterRequestProtoMsg {
    typeUrl: "/sentinel.provider.v2.MsgRegisterRequest";
    value: Uint8Array;
}
/** MsgRegisterRequest defines the SDK message for registering a provider */
export interface MsgRegisterRequestAmino {
    from?: string;
    name?: string;
    identity?: string;
    website?: string;
    description?: string;
}
export interface MsgRegisterRequestAminoMsg {
    type: "/sentinel.provider.v2.MsgRegisterRequest";
    value: MsgRegisterRequestAmino;
}
/** MsgRegisterRequest defines the SDK message for registering a provider */
export interface MsgRegisterRequestSDKType {
    from: string;
    name: string;
    identity: string;
    website: string;
    description: string;
}
/** MsgUpdateRequest defines the SDK message for updating a provider */
export interface MsgUpdateRequest {
    from: string;
    name: string;
    identity: string;
    website: string;
    description: string;
    status: Status;
}
export interface MsgUpdateRequestProtoMsg {
    typeUrl: "/sentinel.provider.v2.MsgUpdateRequest";
    value: Uint8Array;
}
/** MsgUpdateRequest defines the SDK message for updating a provider */
export interface MsgUpdateRequestAmino {
    from?: string;
    name?: string;
    identity?: string;
    website?: string;
    description?: string;
    status?: Status;
}
export interface MsgUpdateRequestAminoMsg {
    type: "/sentinel.provider.v2.MsgUpdateRequest";
    value: MsgUpdateRequestAmino;
}
/** MsgUpdateRequest defines the SDK message for updating a provider */
export interface MsgUpdateRequestSDKType {
    from: string;
    name: string;
    identity: string;
    website: string;
    description: string;
    status: Status;
}
/** MsgRegisterResponse defines the response of message MsgRegisterRequest */
export interface MsgRegisterResponse {
}
export interface MsgRegisterResponseProtoMsg {
    typeUrl: "/sentinel.provider.v2.MsgRegisterResponse";
    value: Uint8Array;
}
/** MsgRegisterResponse defines the response of message MsgRegisterRequest */
export interface MsgRegisterResponseAmino {
}
export interface MsgRegisterResponseAminoMsg {
    type: "/sentinel.provider.v2.MsgRegisterResponse";
    value: MsgRegisterResponseAmino;
}
/** MsgRegisterResponse defines the response of message MsgRegisterRequest */
export interface MsgRegisterResponseSDKType {
}
/** MsgUpdateResponse defines the response of message MsgUpdateRequest */
export interface MsgUpdateResponse {
}
export interface MsgUpdateResponseProtoMsg {
    typeUrl: "/sentinel.provider.v2.MsgUpdateResponse";
    value: Uint8Array;
}
/** MsgUpdateResponse defines the response of message MsgUpdateRequest */
export interface MsgUpdateResponseAmino {
}
export interface MsgUpdateResponseAminoMsg {
    type: "/sentinel.provider.v2.MsgUpdateResponse";
    value: MsgUpdateResponseAmino;
}
/** MsgUpdateResponse defines the response of message MsgUpdateRequest */
export interface MsgUpdateResponseSDKType {
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
export declare const MsgUpdateRequest: {
    typeUrl: string;
    encode(message: MsgUpdateRequest, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): MsgUpdateRequest;
    fromPartial(object: Partial<MsgUpdateRequest>): MsgUpdateRequest;
    fromAmino(object: MsgUpdateRequestAmino): MsgUpdateRequest;
    toAmino(message: MsgUpdateRequest): MsgUpdateRequestAmino;
    fromAminoMsg(object: MsgUpdateRequestAminoMsg): MsgUpdateRequest;
    fromProtoMsg(message: MsgUpdateRequestProtoMsg): MsgUpdateRequest;
    toProto(message: MsgUpdateRequest): Uint8Array;
    toProtoMsg(message: MsgUpdateRequest): MsgUpdateRequestProtoMsg;
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
export declare const MsgUpdateResponse: {
    typeUrl: string;
    encode(_: MsgUpdateResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(_: any): MsgUpdateResponse;
    fromPartial(_: Partial<MsgUpdateResponse>): MsgUpdateResponse;
    fromAmino(_: MsgUpdateResponseAmino): MsgUpdateResponse;
    toAmino(_: MsgUpdateResponse): MsgUpdateResponseAmino;
    fromAminoMsg(object: MsgUpdateResponseAminoMsg): MsgUpdateResponse;
    fromProtoMsg(message: MsgUpdateResponseProtoMsg): MsgUpdateResponse;
    toProto(message: MsgUpdateResponse): Uint8Array;
    toProtoMsg(message: MsgUpdateResponse): MsgUpdateResponseProtoMsg;
};
