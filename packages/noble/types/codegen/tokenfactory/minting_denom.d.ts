import { BinaryWriter } from "../binary";
export interface MintingDenom {
    denom: string;
}
export interface MintingDenomProtoMsg {
    typeUrl: "/noble.tokenfactory.MintingDenom";
    value: Uint8Array;
}
export interface MintingDenomAmino {
    denom: string;
}
export interface MintingDenomAminoMsg {
    type: "/noble.tokenfactory.MintingDenom";
    value: MintingDenomAmino;
}
export interface MintingDenomSDKType {
    denom: string;
}
export declare const MintingDenom: {
    typeUrl: string;
    encode(message: MintingDenom, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): MintingDenom;
    fromPartial(object: Partial<MintingDenom>): MintingDenom;
    fromAmino(object: MintingDenomAmino): MintingDenom;
    toAmino(message: MintingDenom): MintingDenomAmino;
    fromAminoMsg(object: MintingDenomAminoMsg): MintingDenom;
    fromProtoMsg(message: MintingDenomProtoMsg): MintingDenom;
    toProto(message: MintingDenom): Uint8Array;
    toProtoMsg(message: MintingDenom): MintingDenomProtoMsg;
};
