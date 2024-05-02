import { Timestamp, TimestampSDKType } from "../../../../google/protobuf/timestamp";
import { BinaryWriter } from "../../../../binary";
/** Minter represents the minting state. */
export interface Minter {
    /** current annual expected provisions */
    annualProvisions: string;
}
export interface MinterProtoMsg {
    typeUrl: "/publicawesome.stargaze.mint.v1beta1.Minter";
    value: Uint8Array;
}
/** Minter represents the minting state. */
export interface MinterAmino {
    /** current annual expected provisions */
    annual_provisions?: string;
}
export interface MinterAminoMsg {
    type: "/publicawesome.stargaze.mint.v1beta1.Minter";
    value: MinterAmino;
}
/** Minter represents the minting state. */
export interface MinterSDKType {
    annual_provisions: string;
}
/** Params holds parameters for the mint module. */
export interface Params {
    /** type of coin to mint */
    mintDenom: string;
    /** the time the chain starts */
    startTime: Timestamp;
    /** initial annual provisions */
    initialAnnualProvisions: string;
    /** factor to reduce inflation by each year */
    reductionFactor: string;
    /** expected blocks per year */
    blocksPerYear: bigint;
}
export interface ParamsProtoMsg {
    typeUrl: "/publicawesome.stargaze.mint.v1beta1.Params";
    value: Uint8Array;
}
/** Params holds parameters for the mint module. */
export interface ParamsAmino {
    /** type of coin to mint */
    mint_denom?: string;
    /** the time the chain starts */
    start_time?: string;
    /** initial annual provisions */
    initial_annual_provisions?: string;
    /** factor to reduce inflation by each year */
    reduction_factor?: string;
    /** expected blocks per year */
    blocks_per_year?: string;
}
export interface ParamsAminoMsg {
    type: "/publicawesome.stargaze.mint.v1beta1.Params";
    value: ParamsAmino;
}
/** Params holds parameters for the mint module. */
export interface ParamsSDKType {
    mint_denom: string;
    start_time: TimestampSDKType;
    initial_annual_provisions: string;
    reduction_factor: string;
    blocks_per_year: bigint;
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
