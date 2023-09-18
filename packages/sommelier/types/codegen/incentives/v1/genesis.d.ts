import { Coin, CoinAmino, CoinSDKType } from "../../cosmos/base/v1beta1/coin";
import { BinaryWriter } from "../../binary";
export interface GenesisState {
    params: Params;
}
export interface GenesisStateProtoMsg {
    typeUrl: "/incentives.v1.GenesisState";
    value: Uint8Array;
}
export interface GenesisStateAmino {
    params?: ParamsAmino;
}
export interface GenesisStateAminoMsg {
    type: "/incentives.v1.GenesisState";
    value: GenesisStateAmino;
}
export interface GenesisStateSDKType {
    params: ParamsSDKType;
}
/** Params incentives parameters */
export interface Params {
    /** DistributionPerBlock defines the coin to be sent to the distribution module from the community pool every block */
    distributionPerBlock: Coin;
    /**
     * IncentivesCutoffHeight defines the block height after which the incentives module will stop sending coins to the distribution module from
     * the community pool
     */
    incentivesCutoffHeight: bigint;
}
export interface ParamsProtoMsg {
    typeUrl: "/incentives.v1.Params";
    value: Uint8Array;
}
/** Params incentives parameters */
export interface ParamsAmino {
    /** DistributionPerBlock defines the coin to be sent to the distribution module from the community pool every block */
    distribution_per_block?: CoinAmino;
    /**
     * IncentivesCutoffHeight defines the block height after which the incentives module will stop sending coins to the distribution module from
     * the community pool
     */
    incentives_cutoff_height: string;
}
export interface ParamsAminoMsg {
    type: "/incentives.v1.Params";
    value: ParamsAmino;
}
/** Params incentives parameters */
export interface ParamsSDKType {
    distribution_per_block: CoinSDKType;
    incentives_cutoff_height: bigint;
}
export declare const GenesisState: {
    typeUrl: string;
    encode(message: GenesisState, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): GenesisState;
    fromPartial(object: Partial<GenesisState>): GenesisState;
    fromAmino(object: GenesisStateAmino): GenesisState;
    toAmino(message: GenesisState): GenesisStateAmino;
    fromAminoMsg(object: GenesisStateAminoMsg): GenesisState;
    fromProtoMsg(message: GenesisStateProtoMsg): GenesisState;
    toProto(message: GenesisState): Uint8Array;
    toProtoMsg(message: GenesisState): GenesisStateProtoMsg;
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
