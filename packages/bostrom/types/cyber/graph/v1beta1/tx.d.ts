import { Link, LinkAmino, LinkSDKType } from "./types";
import { BinaryWriter } from "../../../binary";
export interface MsgCyberlink {
    neuron: string;
    links: Link[];
}
export interface MsgCyberlinkProtoMsg {
    typeUrl: "/cyber.graph.v1beta1.MsgCyberlink";
    value: Uint8Array;
}
export interface MsgCyberlinkAmino {
    neuron?: string;
    links?: LinkAmino[];
}
export interface MsgCyberlinkAminoMsg {
    type: "/cyber.graph.v1beta1.MsgCyberlink";
    value: MsgCyberlinkAmino;
}
export interface MsgCyberlinkSDKType {
    neuron: string;
    links: LinkSDKType[];
}
export interface MsgCyberlinkResponse {
}
export interface MsgCyberlinkResponseProtoMsg {
    typeUrl: "/cyber.graph.v1beta1.MsgCyberlinkResponse";
    value: Uint8Array;
}
export interface MsgCyberlinkResponseAmino {
}
export interface MsgCyberlinkResponseAminoMsg {
    type: "/cyber.graph.v1beta1.MsgCyberlinkResponse";
    value: MsgCyberlinkResponseAmino;
}
export interface MsgCyberlinkResponseSDKType {
}
export declare const MsgCyberlink: {
    typeUrl: string;
    encode(message: MsgCyberlink, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): MsgCyberlink;
    fromPartial(object: Partial<MsgCyberlink>): MsgCyberlink;
    fromAmino(object: MsgCyberlinkAmino): MsgCyberlink;
    toAmino(message: MsgCyberlink): MsgCyberlinkAmino;
    fromAminoMsg(object: MsgCyberlinkAminoMsg): MsgCyberlink;
    fromProtoMsg(message: MsgCyberlinkProtoMsg): MsgCyberlink;
    toProto(message: MsgCyberlink): Uint8Array;
    toProtoMsg(message: MsgCyberlink): MsgCyberlinkProtoMsg;
};
export declare const MsgCyberlinkResponse: {
    typeUrl: string;
    encode(_: MsgCyberlinkResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(_: any): MsgCyberlinkResponse;
    fromPartial(_: Partial<MsgCyberlinkResponse>): MsgCyberlinkResponse;
    fromAmino(_: MsgCyberlinkResponseAmino): MsgCyberlinkResponse;
    toAmino(_: MsgCyberlinkResponse): MsgCyberlinkResponseAmino;
    fromAminoMsg(object: MsgCyberlinkResponseAminoMsg): MsgCyberlinkResponse;
    fromProtoMsg(message: MsgCyberlinkResponseProtoMsg): MsgCyberlinkResponse;
    toProto(message: MsgCyberlinkResponse): Uint8Array;
    toProtoMsg(message: MsgCyberlinkResponse): MsgCyberlinkResponseProtoMsg;
};
