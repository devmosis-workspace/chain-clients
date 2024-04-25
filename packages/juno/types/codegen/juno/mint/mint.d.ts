import { BinaryWriter } from "../../binary";
/** Minter represents the minting state. */
export interface Minter {
    /** current annual inflation rate */
    inflation: string;
    phase: bigint;
    startPhaseBlock: bigint;
    /** current annual expected provisions */
    annualProvisions: string;
    targetSupply: string;
}
export interface MinterProtoMsg {
    typeUrl: "/juno.mint.Minter";
    value: Uint8Array;
}
/** Minter represents the minting state. */
export interface MinterAmino {
    /** current annual inflation rate */
    inflation?: string;
    phase?: string;
    start_phase_block?: string;
    /** current annual expected provisions */
    annual_provisions?: string;
    target_supply?: string;
}
export interface MinterAminoMsg {
    type: "/juno.mint.Minter";
    value: MinterAmino;
}
/** Minter represents the minting state. */
export interface MinterSDKType {
    inflation: string;
    phase: bigint;
    start_phase_block: bigint;
    annual_provisions: string;
    target_supply: string;
}
/** Params holds parameters for the mint module. */
export interface Params {
    /** type of coin to mint */
    mintDenom: string;
    /** expected blocks per year */
    blocksPerYear: bigint;
}
export interface ParamsProtoMsg {
    typeUrl: "/juno.mint.Params";
    value: Uint8Array;
}
/** Params holds parameters for the mint module. */
export interface ParamsAmino {
    /** type of coin to mint */
    mint_denom?: string;
    /** expected blocks per year */
    blocks_per_year?: string;
}
export interface ParamsAminoMsg {
    type: "/juno.mint.Params";
    value: ParamsAmino;
}
/** Params holds parameters for the mint module. */
export interface ParamsSDKType {
    mint_denom: string;
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
