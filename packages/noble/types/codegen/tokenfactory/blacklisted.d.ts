import { BinaryWriter } from "../binary";
export interface Blacklisted {
    addressBz: Uint8Array;
}
export interface BlacklistedProtoMsg {
    typeUrl: "/noble.tokenfactory.Blacklisted";
    value: Uint8Array;
}
export interface BlacklistedAmino {
    addressBz: Uint8Array;
}
export interface BlacklistedAminoMsg {
    type: "/noble.tokenfactory.Blacklisted";
    value: BlacklistedAmino;
}
export interface BlacklistedSDKType {
    addressBz: Uint8Array;
}
export declare const Blacklisted: {
    typeUrl: string;
    encode(message: Blacklisted, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): Blacklisted;
    fromPartial(object: Partial<Blacklisted>): Blacklisted;
    fromAmino(object: BlacklistedAmino): Blacklisted;
    toAmino(message: Blacklisted): BlacklistedAmino;
    fromAminoMsg(object: BlacklistedAminoMsg): Blacklisted;
    fromProtoMsg(message: BlacklistedProtoMsg): Blacklisted;
    toProto(message: Blacklisted): Uint8Array;
    toProtoMsg(message: Blacklisted): BlacklistedProtoMsg;
};
