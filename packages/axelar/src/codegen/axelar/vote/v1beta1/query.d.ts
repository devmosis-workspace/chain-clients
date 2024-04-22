import { Params, ParamsAmino, ParamsSDKType } from "./params";
import { BinaryWriter } from "../../../binary";
/** ParamsRequest represents a message that queries the params */
export interface ParamsRequest {
}
export interface ParamsRequestProtoMsg {
    typeUrl: "/axelar.vote.v1beta1.ParamsRequest";
    value: Uint8Array;
}
/** ParamsRequest represents a message that queries the params */
export interface ParamsRequestAmino {
}
export interface ParamsRequestAminoMsg {
    type: "/axelar.vote.v1beta1.ParamsRequest";
    value: ParamsRequestAmino;
}
/** ParamsRequest represents a message that queries the params */
export interface ParamsRequestSDKType {
}
export interface ParamsResponse {
    params: Params;
}
export interface ParamsResponseProtoMsg {
    typeUrl: "/axelar.vote.v1beta1.ParamsResponse";
    value: Uint8Array;
}
export interface ParamsResponseAmino {
    params?: ParamsAmino;
}
export interface ParamsResponseAminoMsg {
    type: "/axelar.vote.v1beta1.ParamsResponse";
    value: ParamsResponseAmino;
}
export interface ParamsResponseSDKType {
    params: ParamsSDKType;
}
export declare const ParamsRequest: {
    typeUrl: string;
    encode(_: ParamsRequest, writer?: BinaryWriter): BinaryWriter;
    fromJSON(_: any): ParamsRequest;
    fromPartial(_: Partial<ParamsRequest>): ParamsRequest;
    fromAmino(_: ParamsRequestAmino): ParamsRequest;
    toAmino(_: ParamsRequest): ParamsRequestAmino;
    fromAminoMsg(object: ParamsRequestAminoMsg): ParamsRequest;
    fromProtoMsg(message: ParamsRequestProtoMsg): ParamsRequest;
    toProto(message: ParamsRequest): Uint8Array;
    toProtoMsg(message: ParamsRequest): ParamsRequestProtoMsg;
};
export declare const ParamsResponse: {
    typeUrl: string;
    encode(message: ParamsResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): ParamsResponse;
    fromPartial(object: Partial<ParamsResponse>): ParamsResponse;
    fromAmino(object: ParamsResponseAmino): ParamsResponse;
    toAmino(message: ParamsResponse): ParamsResponseAmino;
    fromAminoMsg(object: ParamsResponseAminoMsg): ParamsResponse;
    fromProtoMsg(message: ParamsResponseProtoMsg): ParamsResponse;
    toProto(message: ParamsResponse): Uint8Array;
    toProtoMsg(message: ParamsResponse): ParamsResponseProtoMsg;
};
