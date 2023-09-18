import { BinaryWriter } from "../binary";
export interface Paused {
    paused: boolean;
}
export interface PausedProtoMsg {
    typeUrl: "/noble.fiattokenfactory.Paused";
    value: Uint8Array;
}
export interface PausedAmino {
    paused: boolean;
}
export interface PausedAminoMsg {
    type: "/noble.fiattokenfactory.Paused";
    value: PausedAmino;
}
export interface PausedSDKType {
    paused: boolean;
}
export declare const Paused: {
    typeUrl: string;
    encode(message: Paused, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): Paused;
    fromPartial(object: Partial<Paused>): Paused;
    fromAmino(object: PausedAmino): Paused;
    toAmino(message: Paused): PausedAmino;
    fromAminoMsg(object: PausedAminoMsg): Paused;
    fromProtoMsg(message: PausedProtoMsg): Paused;
    toProto(message: Paused): Uint8Array;
    toProtoMsg(message: Paused): PausedProtoMsg;
};
