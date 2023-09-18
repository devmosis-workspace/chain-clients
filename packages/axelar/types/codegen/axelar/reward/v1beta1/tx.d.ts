import { Any, AnyProtoMsg, AnyAmino, AnySDKType } from "../../../google/protobuf/any";
import { BinaryReader, BinaryWriter } from "../../../binary";
export interface RefundMsgRequest {
    sender: Uint8Array;
    innerMessage: (Any) | undefined;
}
export interface RefundMsgRequestProtoMsg {
    typeUrl: "/axelar.reward.v1beta1.RefundMsgRequest";
    value: Uint8Array;
}
export type RefundMsgRequestEncoded = Omit<RefundMsgRequest, "innerMessage"> & {
    innerMessage?: AnyProtoMsg | undefined;
};
export interface RefundMsgRequestAmino {
    sender: Uint8Array;
    inner_message?: AnyAmino;
}
export interface RefundMsgRequestAminoMsg {
    type: "/axelar.reward.v1beta1.RefundMsgRequest";
    value: RefundMsgRequestAmino;
}
export interface RefundMsgRequestSDKType {
    sender: Uint8Array;
    inner_message: AnySDKType | undefined;
}
export interface RefundMsgResponse {
    data: Uint8Array;
    log: string;
}
export interface RefundMsgResponseProtoMsg {
    typeUrl: "/axelar.reward.v1beta1.RefundMsgResponse";
    value: Uint8Array;
}
export interface RefundMsgResponseAmino {
    data: Uint8Array;
    log: string;
}
export interface RefundMsgResponseAminoMsg {
    type: "/axelar.reward.v1beta1.RefundMsgResponse";
    value: RefundMsgResponseAmino;
}
export interface RefundMsgResponseSDKType {
    data: Uint8Array;
    log: string;
}
export declare const RefundMsgRequest: {
    typeUrl: string;
    encode(message: RefundMsgRequest, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): RefundMsgRequest;
    fromPartial(object: Partial<RefundMsgRequest>): RefundMsgRequest;
    fromAmino(object: RefundMsgRequestAmino): RefundMsgRequest;
    toAmino(message: RefundMsgRequest): RefundMsgRequestAmino;
    fromAminoMsg(object: RefundMsgRequestAminoMsg): RefundMsgRequest;
    fromProtoMsg(message: RefundMsgRequestProtoMsg): RefundMsgRequest;
    toProto(message: RefundMsgRequest): Uint8Array;
    toProtoMsg(message: RefundMsgRequest): RefundMsgRequestProtoMsg;
};
export declare const RefundMsgResponse: {
    typeUrl: string;
    encode(message: RefundMsgResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): RefundMsgResponse;
    fromPartial(object: Partial<RefundMsgResponse>): RefundMsgResponse;
    fromAmino(object: RefundMsgResponseAmino): RefundMsgResponse;
    toAmino(message: RefundMsgResponse): RefundMsgResponseAmino;
    fromAminoMsg(object: RefundMsgResponseAminoMsg): RefundMsgResponse;
    fromProtoMsg(message: RefundMsgResponseProtoMsg): RefundMsgResponse;
    toProto(message: RefundMsgResponse): Uint8Array;
    toProtoMsg(message: RefundMsgResponse): RefundMsgResponseProtoMsg;
};
export declare const Refundable_InterfaceDecoder: (input: BinaryReader | Uint8Array) => Any;
export declare const Refundable_FromAmino: (content: AnyAmino) => Any;
export declare const Refundable_ToAmino: (content: Any) => AnyAmino;
