import { NetAddress, NetAddressAmino, NetAddressSDKType } from "./types";
import { BinaryWriter } from "../../binary";
export interface PexRequest {
}
export interface PexRequestProtoMsg {
    typeUrl: "/tendermint.p2p.PexRequest";
    value: Uint8Array;
}
export interface PexRequestAmino {
}
export interface PexRequestAminoMsg {
    type: "/tendermint.p2p.PexRequest";
    value: PexRequestAmino;
}
export interface PexRequestSDKType {
}
export interface PexAddrs {
    addrs: NetAddress[];
}
export interface PexAddrsProtoMsg {
    typeUrl: "/tendermint.p2p.PexAddrs";
    value: Uint8Array;
}
export interface PexAddrsAmino {
    addrs: NetAddressAmino[];
}
export interface PexAddrsAminoMsg {
    type: "/tendermint.p2p.PexAddrs";
    value: PexAddrsAmino;
}
export interface PexAddrsSDKType {
    addrs: NetAddressSDKType[];
}
export interface Message {
    pexRequest?: PexRequest;
    pexAddrs?: PexAddrs;
}
export interface MessageProtoMsg {
    typeUrl: "/tendermint.p2p.Message";
    value: Uint8Array;
}
export interface MessageAmino {
    pex_request?: PexRequestAmino;
    pex_addrs?: PexAddrsAmino;
}
export interface MessageAminoMsg {
    type: "/tendermint.p2p.Message";
    value: MessageAmino;
}
export interface MessageSDKType {
    pex_request?: PexRequestSDKType;
    pex_addrs?: PexAddrsSDKType;
}
export declare const PexRequest: {
    typeUrl: string;
    encode(_: PexRequest, writer?: BinaryWriter): BinaryWriter;
    fromJSON(_: any): PexRequest;
    fromPartial(_: Partial<PexRequest>): PexRequest;
    fromAmino(_: PexRequestAmino): PexRequest;
    toAmino(_: PexRequest): PexRequestAmino;
    fromAminoMsg(object: PexRequestAminoMsg): PexRequest;
    fromProtoMsg(message: PexRequestProtoMsg): PexRequest;
    toProto(message: PexRequest): Uint8Array;
    toProtoMsg(message: PexRequest): PexRequestProtoMsg;
};
export declare const PexAddrs: {
    typeUrl: string;
    encode(message: PexAddrs, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): PexAddrs;
    fromPartial(object: Partial<PexAddrs>): PexAddrs;
    fromAmino(object: PexAddrsAmino): PexAddrs;
    toAmino(message: PexAddrs): PexAddrsAmino;
    fromAminoMsg(object: PexAddrsAminoMsg): PexAddrs;
    fromProtoMsg(message: PexAddrsProtoMsg): PexAddrs;
    toProto(message: PexAddrs): Uint8Array;
    toProtoMsg(message: PexAddrs): PexAddrsProtoMsg;
};
export declare const Message: {
    typeUrl: string;
    encode(message: Message, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): Message;
    fromPartial(object: Partial<Message>): Message;
    fromAmino(object: MessageAmino): Message;
    toAmino(message: Message): MessageAmino;
    fromAminoMsg(object: MessageAminoMsg): Message;
    fromProtoMsg(message: MessageProtoMsg): Message;
    toProto(message: Message): Uint8Array;
    toProtoMsg(message: Message): MessageProtoMsg;
};
