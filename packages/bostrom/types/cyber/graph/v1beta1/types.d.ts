import { BinaryWriter } from "../../../binary";
export interface Link {
    from: string;
    to: string;
}
export interface LinkProtoMsg {
    typeUrl: "/cyber.graph.v1beta1.Link";
    value: Uint8Array;
}
export interface LinkAmino {
    from?: string;
    to?: string;
}
export interface LinkAminoMsg {
    type: "/cyber.graph.v1beta1.Link";
    value: LinkAmino;
}
export interface LinkSDKType {
    from: string;
    to: string;
}
export declare const Link: {
    typeUrl: string;
    encode(message: Link, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): Link;
    fromPartial(object: Partial<Link>): Link;
    fromAmino(object: LinkAmino): Link;
    toAmino(message: Link): LinkAmino;
    fromAminoMsg(object: LinkAminoMsg): Link;
    fromProtoMsg(message: LinkProtoMsg): Link;
    toProto(message: Link): Uint8Array;
    toProtoMsg(message: Link): LinkProtoMsg;
};
