import { BinaryWriter } from "../../binary";
export interface PairID {
    token0: string;
    token1: string;
}
export interface PairIDProtoMsg {
    typeUrl: "/neutron.dex.PairID";
    value: Uint8Array;
}
export interface PairIDAmino {
    token0?: string;
    token1?: string;
}
export interface PairIDAminoMsg {
    type: "/neutron.dex.PairID";
    value: PairIDAmino;
}
export interface PairIDSDKType {
    token0: string;
    token1: string;
}
export declare const PairID: {
    typeUrl: string;
    encode(message: PairID, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): PairID;
    fromPartial(object: Partial<PairID>): PairID;
    fromAmino(object: PairIDAmino): PairID;
    toAmino(message: PairID): PairIDAmino;
    fromAminoMsg(object: PairIDAminoMsg): PairID;
    fromProtoMsg(message: PairIDProtoMsg): PairID;
    toProto(message: PairID): Uint8Array;
    toProtoMsg(message: PairID): PairIDProtoMsg;
};
