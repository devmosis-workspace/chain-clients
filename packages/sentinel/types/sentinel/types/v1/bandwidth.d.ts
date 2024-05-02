import { BinaryWriter } from "../../../binary";
export interface Bandwidth {
    upload: string;
    download: string;
}
export interface BandwidthProtoMsg {
    typeUrl: "/sentinel.types.v1.Bandwidth";
    value: Uint8Array;
}
export interface BandwidthAmino {
    upload?: string;
    download?: string;
}
export interface BandwidthAminoMsg {
    type: "/sentinel.types.v1.Bandwidth";
    value: BandwidthAmino;
}
export interface BandwidthSDKType {
    upload: string;
    download: string;
}
export declare const Bandwidth: {
    typeUrl: string;
    encode(message: Bandwidth, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): Bandwidth;
    fromPartial(object: Partial<Bandwidth>): Bandwidth;
    fromAmino(object: BandwidthAmino): Bandwidth;
    toAmino(message: Bandwidth): BandwidthAmino;
    fromAminoMsg(object: BandwidthAminoMsg): Bandwidth;
    fromProtoMsg(message: BandwidthProtoMsg): Bandwidth;
    toProto(message: Bandwidth): Uint8Array;
    toProtoMsg(message: Bandwidth): BandwidthProtoMsg;
};
