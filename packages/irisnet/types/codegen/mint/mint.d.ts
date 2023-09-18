import { Timestamp, TimestampAmino, TimestampSDKType } from "../google/protobuf/timestamp";
import { BinaryWriter } from "../binary";
/** Minter represents the minting state */
export interface Minter {
    /** time which the last update was made to the minter */
    lastUpdate: Timestamp;
    /** base inflation */
    inflationBase: string;
}
export interface MinterProtoMsg {
    typeUrl: "/irishub.mint.Minter";
    value: Uint8Array;
}
/** Minter represents the minting state */
export interface MinterAmino {
    /** time which the last update was made to the minter */
    last_update?: TimestampAmino;
    /** base inflation */
    inflation_base: string;
}
export interface MinterAminoMsg {
    type: "/irishub.mint.Minter";
    value: MinterAmino;
}
/** Minter represents the minting state */
export interface MinterSDKType {
    last_update: TimestampSDKType;
    inflation_base: string;
}
/** Params defines mint module's parameters */
export interface Params {
    /** type of coin to mint */
    mintDenom: string;
    /** inflation rate */
    inflation: string;
}
export interface ParamsProtoMsg {
    typeUrl: "/irishub.mint.Params";
    value: Uint8Array;
}
/** Params defines mint module's parameters */
export interface ParamsAmino {
    /** type of coin to mint */
    mint_denom: string;
    /** inflation rate */
    inflation: string;
}
export interface ParamsAminoMsg {
    type: "/irishub.mint.Params";
    value: ParamsAmino;
}
/** Params defines mint module's parameters */
export interface ParamsSDKType {
    mint_denom: string;
    inflation: string;
}
export declare const Minter: {
    typeUrl: string;
    encode(message: Minter, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): Minter;
    fromPartial(object: Partial<Minter>): Minter;
    fromAmino(object: MinterAmino): Minter;
    toAmino(message: Minter): MinterAmino;
    fromAminoMsg(object: MinterAminoMsg): Minter;
    fromProtoMsg(message: MinterProtoMsg): Minter;
    toProto(message: Minter): Uint8Array;
    toProtoMsg(message: Minter): MinterProtoMsg;
};
export declare const Params: {
    typeUrl: string;
    encode(message: Params, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): Params;
    fromPartial(object: Partial<Params>): Params;
    fromAmino(object: ParamsAmino): Params;
    toAmino(message: Params): ParamsAmino;
    fromAminoMsg(object: ParamsAminoMsg): Params;
    fromProtoMsg(message: ParamsProtoMsg): Params;
    toProto(message: Params): Uint8Array;
    toProtoMsg(message: Params): ParamsProtoMsg;
};
