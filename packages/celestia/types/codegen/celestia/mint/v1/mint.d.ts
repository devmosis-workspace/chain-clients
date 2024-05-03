import { Timestamp, TimestampSDKType } from "../../../google/protobuf/timestamp";
import { BinaryWriter } from "../../../binary";
/** Minter represents the mint state. */
export interface Minter {
    /**
     * InflationRate is the rate at which new tokens should be minted for the
     * current year. For example if InflationRate=0.1, then 10% of the total
     * supply will be minted over the course of the year.
     */
    inflationRate: string;
    /**
     * AnnualProvisions is the total number of tokens to be minted in the current
     * year due to inflation.
     */
    annualProvisions: string;
    /** PreviousBlockTime is the timestamp of the previous block. */
    previousBlockTime?: Timestamp;
    /** BondDenom is the denomination of the token that should be minted. */
    bondDenom: string;
}
export interface MinterProtoMsg {
    typeUrl: "/celestia.mint.v1.Minter";
    value: Uint8Array;
}
/** Minter represents the mint state. */
export interface MinterAmino {
    /**
     * InflationRate is the rate at which new tokens should be minted for the
     * current year. For example if InflationRate=0.1, then 10% of the total
     * supply will be minted over the course of the year.
     */
    inflation_rate?: string;
    /**
     * AnnualProvisions is the total number of tokens to be minted in the current
     * year due to inflation.
     */
    annual_provisions?: string;
    /** PreviousBlockTime is the timestamp of the previous block. */
    previous_block_time?: string;
    /** BondDenom is the denomination of the token that should be minted. */
    bond_denom?: string;
}
export interface MinterAminoMsg {
    type: "/celestia.mint.v1.Minter";
    value: MinterAmino;
}
/** Minter represents the mint state. */
export interface MinterSDKType {
    inflation_rate: string;
    annual_provisions: string;
    previous_block_time?: TimestampSDKType;
    bond_denom: string;
}
/** GenesisTime contains the timestamp of the genesis block. */
export interface GenesisTime {
    /** GenesisTime is the timestamp of the genesis block. */
    genesisTime?: Timestamp;
}
export interface GenesisTimeProtoMsg {
    typeUrl: "/celestia.mint.v1.GenesisTime";
    value: Uint8Array;
}
/** GenesisTime contains the timestamp of the genesis block. */
export interface GenesisTimeAmino {
    /** GenesisTime is the timestamp of the genesis block. */
    genesis_time?: string;
}
export interface GenesisTimeAminoMsg {
    type: "/celestia.mint.v1.GenesisTime";
    value: GenesisTimeAmino;
}
/** GenesisTime contains the timestamp of the genesis block. */
export interface GenesisTimeSDKType {
    genesis_time?: TimestampSDKType;
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
export declare const GenesisTime: {
    typeUrl: string;
    encode(message: GenesisTime, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): GenesisTime;
    fromPartial(object: Partial<GenesisTime>): GenesisTime;
    fromAmino(object: GenesisTimeAmino): GenesisTime;
    toAmino(message: GenesisTime): GenesisTimeAmino;
    fromAminoMsg(object: GenesisTimeAminoMsg): GenesisTime;
    fromProtoMsg(message: GenesisTimeProtoMsg): GenesisTime;
    toProto(message: GenesisTime): Uint8Array;
    toProtoMsg(message: GenesisTime): GenesisTimeProtoMsg;
};
