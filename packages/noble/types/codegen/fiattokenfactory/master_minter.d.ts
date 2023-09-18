import { BinaryWriter } from "../binary";
export interface MasterMinter {
    address: string;
}
export interface MasterMinterProtoMsg {
    typeUrl: "/noble.fiattokenfactory.MasterMinter";
    value: Uint8Array;
}
export interface MasterMinterAmino {
    address: string;
}
export interface MasterMinterAminoMsg {
    type: "/noble.fiattokenfactory.MasterMinter";
    value: MasterMinterAmino;
}
export interface MasterMinterSDKType {
    address: string;
}
export declare const MasterMinter: {
    typeUrl: string;
    encode(message: MasterMinter, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): MasterMinter;
    fromPartial(object: Partial<MasterMinter>): MasterMinter;
    fromAmino(object: MasterMinterAmino): MasterMinter;
    toAmino(message: MasterMinter): MasterMinterAmino;
    fromAminoMsg(object: MasterMinterAminoMsg): MasterMinter;
    fromProtoMsg(message: MasterMinterProtoMsg): MasterMinter;
    toProto(message: MasterMinter): Uint8Array;
    toProtoMsg(message: MasterMinter): MasterMinterProtoMsg;
};
