import { BinaryWriter } from "../binary";
export interface Blacklister {
    address: string;
}
export interface BlacklisterProtoMsg {
    typeUrl: "/noble.tokenfactory.Blacklister";
    value: Uint8Array;
}
export interface BlacklisterAmino {
    address: string;
}
export interface BlacklisterAminoMsg {
    type: "/noble.tokenfactory.Blacklister";
    value: BlacklisterAmino;
}
export interface BlacklisterSDKType {
    address: string;
}
export declare const Blacklister: {
    typeUrl: string;
    encode(message: Blacklister, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): Blacklister;
    fromPartial(object: Partial<Blacklister>): Blacklister;
    fromAmino(object: BlacklisterAmino): Blacklister;
    toAmino(message: Blacklister): BlacklisterAmino;
    fromAminoMsg(object: BlacklisterAminoMsg): Blacklister;
    fromProtoMsg(message: BlacklisterProtoMsg): Blacklister;
    toProto(message: Blacklister): Uint8Array;
    toProtoMsg(message: Blacklister): BlacklisterProtoMsg;
};
