import { BinaryWriter } from "../binary";
export interface Owner {
    address: string;
}
export interface OwnerProtoMsg {
    typeUrl: "/noble.tokenfactory.Owner";
    value: Uint8Array;
}
export interface OwnerAmino {
    address: string;
}
export interface OwnerAminoMsg {
    type: "/noble.tokenfactory.Owner";
    value: OwnerAmino;
}
export interface OwnerSDKType {
    address: string;
}
export declare const Owner: {
    typeUrl: string;
    encode(message: Owner, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): Owner;
    fromPartial(object: Partial<Owner>): Owner;
    fromAmino(object: OwnerAmino): Owner;
    toAmino(message: Owner): OwnerAmino;
    fromAminoMsg(object: OwnerAminoMsg): Owner;
    fromProtoMsg(message: OwnerProtoMsg): Owner;
    toProto(message: Owner): Uint8Array;
    toProtoMsg(message: Owner): OwnerProtoMsg;
};
