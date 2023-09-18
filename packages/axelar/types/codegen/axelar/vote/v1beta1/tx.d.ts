import { Any, AnyProtoMsg, AnyAmino, AnySDKType } from "../../../google/protobuf/any";
import { BinaryReader, BinaryWriter } from "../../../binary";
export interface VoteRequest {
    sender: Uint8Array;
    pollId: bigint;
    vote: (Any) | undefined;
}
export interface VoteRequestProtoMsg {
    typeUrl: "/axelar.vote.v1beta1.VoteRequest";
    value: Uint8Array;
}
export type VoteRequestEncoded = Omit<VoteRequest, "vote"> & {
    vote?: AnyProtoMsg | undefined;
};
export interface VoteRequestAmino {
    sender: Uint8Array;
    poll_id: string;
    vote?: AnyAmino;
}
export interface VoteRequestAminoMsg {
    type: "/axelar.vote.v1beta1.VoteRequest";
    value: VoteRequestAmino;
}
export interface VoteRequestSDKType {
    sender: Uint8Array;
    poll_id: bigint;
    vote: AnySDKType | undefined;
}
export interface VoteResponse {
    log: string;
}
export interface VoteResponseProtoMsg {
    typeUrl: "/axelar.vote.v1beta1.VoteResponse";
    value: Uint8Array;
}
export interface VoteResponseAmino {
    log: string;
}
export interface VoteResponseAminoMsg {
    type: "/axelar.vote.v1beta1.VoteResponse";
    value: VoteResponseAmino;
}
export interface VoteResponseSDKType {
    log: string;
}
export declare const VoteRequest: {
    typeUrl: string;
    encode(message: VoteRequest, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): VoteRequest;
    fromPartial(object: Partial<VoteRequest>): VoteRequest;
    fromAmino(object: VoteRequestAmino): VoteRequest;
    toAmino(message: VoteRequest): VoteRequestAmino;
    fromAminoMsg(object: VoteRequestAminoMsg): VoteRequest;
    fromProtoMsg(message: VoteRequestProtoMsg): VoteRequest;
    toProto(message: VoteRequest): Uint8Array;
    toProtoMsg(message: VoteRequest): VoteRequestProtoMsg;
};
export declare const VoteResponse: {
    typeUrl: string;
    encode(message: VoteResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): VoteResponse;
    fromPartial(object: Partial<VoteResponse>): VoteResponse;
    fromAmino(object: VoteResponseAmino): VoteResponse;
    toAmino(message: VoteResponse): VoteResponseAmino;
    fromAminoMsg(object: VoteResponseAminoMsg): VoteResponse;
    fromProtoMsg(message: VoteResponseProtoMsg): VoteResponse;
    toProto(message: VoteResponse): Uint8Array;
    toProtoMsg(message: VoteResponse): VoteResponseProtoMsg;
};
export declare const Github_com_cosmos_codec_ProtoMarshaler_InterfaceDecoder: (input: BinaryReader | Uint8Array) => Any;
export declare const Github_com_cosmos_codec_ProtoMarshaler_FromAmino: (content: AnyAmino) => Any;
export declare const Github_com_cosmos_codec_ProtoMarshaler_ToAmino: (content: Any) => AnyAmino;
