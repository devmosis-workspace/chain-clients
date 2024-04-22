import { BinaryWriter } from "../../../binary";
export interface RegisterProxyRequest {
    sender: Uint8Array;
    proxyAddr: Uint8Array;
}
export interface RegisterProxyRequestProtoMsg {
    typeUrl: "/axelar.snapshot.v1beta1.RegisterProxyRequest";
    value: Uint8Array;
}
export interface RegisterProxyRequestAmino {
    sender?: string;
    proxy_addr?: string;
}
export interface RegisterProxyRequestAminoMsg {
    type: "/axelar.snapshot.v1beta1.RegisterProxyRequest";
    value: RegisterProxyRequestAmino;
}
export interface RegisterProxyRequestSDKType {
    sender: Uint8Array;
    proxy_addr: Uint8Array;
}
export interface RegisterProxyResponse {
}
export interface RegisterProxyResponseProtoMsg {
    typeUrl: "/axelar.snapshot.v1beta1.RegisterProxyResponse";
    value: Uint8Array;
}
export interface RegisterProxyResponseAmino {
}
export interface RegisterProxyResponseAminoMsg {
    type: "/axelar.snapshot.v1beta1.RegisterProxyResponse";
    value: RegisterProxyResponseAmino;
}
export interface RegisterProxyResponseSDKType {
}
export interface DeactivateProxyRequest {
    sender: Uint8Array;
}
export interface DeactivateProxyRequestProtoMsg {
    typeUrl: "/axelar.snapshot.v1beta1.DeactivateProxyRequest";
    value: Uint8Array;
}
export interface DeactivateProxyRequestAmino {
    sender?: string;
}
export interface DeactivateProxyRequestAminoMsg {
    type: "/axelar.snapshot.v1beta1.DeactivateProxyRequest";
    value: DeactivateProxyRequestAmino;
}
export interface DeactivateProxyRequestSDKType {
    sender: Uint8Array;
}
export interface DeactivateProxyResponse {
}
export interface DeactivateProxyResponseProtoMsg {
    typeUrl: "/axelar.snapshot.v1beta1.DeactivateProxyResponse";
    value: Uint8Array;
}
export interface DeactivateProxyResponseAmino {
}
export interface DeactivateProxyResponseAminoMsg {
    type: "/axelar.snapshot.v1beta1.DeactivateProxyResponse";
    value: DeactivateProxyResponseAmino;
}
export interface DeactivateProxyResponseSDKType {
}
export declare const RegisterProxyRequest: {
    typeUrl: string;
    encode(message: RegisterProxyRequest, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): RegisterProxyRequest;
    fromPartial(object: Partial<RegisterProxyRequest>): RegisterProxyRequest;
    fromAmino(object: RegisterProxyRequestAmino): RegisterProxyRequest;
    toAmino(message: RegisterProxyRequest): RegisterProxyRequestAmino;
    fromAminoMsg(object: RegisterProxyRequestAminoMsg): RegisterProxyRequest;
    fromProtoMsg(message: RegisterProxyRequestProtoMsg): RegisterProxyRequest;
    toProto(message: RegisterProxyRequest): Uint8Array;
    toProtoMsg(message: RegisterProxyRequest): RegisterProxyRequestProtoMsg;
};
export declare const RegisterProxyResponse: {
    typeUrl: string;
    encode(_: RegisterProxyResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(_: any): RegisterProxyResponse;
    fromPartial(_: Partial<RegisterProxyResponse>): RegisterProxyResponse;
    fromAmino(_: RegisterProxyResponseAmino): RegisterProxyResponse;
    toAmino(_: RegisterProxyResponse): RegisterProxyResponseAmino;
    fromAminoMsg(object: RegisterProxyResponseAminoMsg): RegisterProxyResponse;
    fromProtoMsg(message: RegisterProxyResponseProtoMsg): RegisterProxyResponse;
    toProto(message: RegisterProxyResponse): Uint8Array;
    toProtoMsg(message: RegisterProxyResponse): RegisterProxyResponseProtoMsg;
};
export declare const DeactivateProxyRequest: {
    typeUrl: string;
    encode(message: DeactivateProxyRequest, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): DeactivateProxyRequest;
    fromPartial(object: Partial<DeactivateProxyRequest>): DeactivateProxyRequest;
    fromAmino(object: DeactivateProxyRequestAmino): DeactivateProxyRequest;
    toAmino(message: DeactivateProxyRequest): DeactivateProxyRequestAmino;
    fromAminoMsg(object: DeactivateProxyRequestAminoMsg): DeactivateProxyRequest;
    fromProtoMsg(message: DeactivateProxyRequestProtoMsg): DeactivateProxyRequest;
    toProto(message: DeactivateProxyRequest): Uint8Array;
    toProtoMsg(message: DeactivateProxyRequest): DeactivateProxyRequestProtoMsg;
};
export declare const DeactivateProxyResponse: {
    typeUrl: string;
    encode(_: DeactivateProxyResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(_: any): DeactivateProxyResponse;
    fromPartial(_: Partial<DeactivateProxyResponse>): DeactivateProxyResponse;
    fromAmino(_: DeactivateProxyResponseAmino): DeactivateProxyResponse;
    toAmino(_: DeactivateProxyResponse): DeactivateProxyResponseAmino;
    fromAminoMsg(object: DeactivateProxyResponseAminoMsg): DeactivateProxyResponse;
    fromProtoMsg(message: DeactivateProxyResponseProtoMsg): DeactivateProxyResponse;
    toProto(message: DeactivateProxyResponse): Uint8Array;
    toProtoMsg(message: DeactivateProxyResponse): DeactivateProxyResponseProtoMsg;
};
