import { Timestamp, TimestampSDKType } from "../google/protobuf/timestamp";
import { BinaryWriter } from "../binary";
export interface DistributionProportion {
    proportion: string;
    address: string;
}
export interface DistributionProportionProtoMsg {
    typeUrl: "/gitopia.gitopia.gitopia.DistributionProportion";
    value: Uint8Array;
}
export interface DistributionProportionAmino {
    proportion?: string;
    address?: string;
}
export interface DistributionProportionAminoMsg {
    type: "/gitopia.gitopia.gitopia.DistributionProportion";
    value: DistributionProportionAmino;
}
export interface DistributionProportionSDKType {
    proportion: string;
    address: string;
}
export interface PoolProportions {
    ecosystem?: DistributionProportion;
    team?: DistributionProportion;
    platform?: DistributionProportion;
}
export interface PoolProportionsProtoMsg {
    typeUrl: "/gitopia.gitopia.gitopia.PoolProportions";
    value: Uint8Array;
}
export interface PoolProportionsAmino {
    ecosystem?: DistributionProportionAmino;
    team?: DistributionProportionAmino;
    platform?: DistributionProportionAmino;
}
export interface PoolProportionsAminoMsg {
    type: "/gitopia.gitopia.gitopia.PoolProportions";
    value: PoolProportionsAmino;
}
export interface PoolProportionsSDKType {
    ecosystem?: DistributionProportionSDKType;
    team?: DistributionProportionSDKType;
    platform?: DistributionProportionSDKType;
}
/** Params defines the parameters for the module. */
export interface Params {
    nextInflationTime: Timestamp;
    poolProportions: PoolProportions;
    teamProportions: DistributionProportion[];
    genesisTime: Timestamp;
    gitServer: string;
    storageProvider: string;
}
export interface ParamsProtoMsg {
    typeUrl: "/gitopia.gitopia.gitopia.Params";
    value: Uint8Array;
}
/** Params defines the parameters for the module. */
export interface ParamsAmino {
    next_inflation_time?: string;
    pool_proportions?: PoolProportionsAmino;
    team_proportions?: DistributionProportionAmino[];
    genesis_time?: string;
    git_server?: string;
    storage_provider?: string;
}
export interface ParamsAminoMsg {
    type: "/gitopia.gitopia.gitopia.Params";
    value: ParamsAmino;
}
/** Params defines the parameters for the module. */
export interface ParamsSDKType {
    next_inflation_time: TimestampSDKType;
    pool_proportions: PoolProportionsSDKType;
    team_proportions: DistributionProportionSDKType[];
    genesis_time: TimestampSDKType;
    git_server: string;
    storage_provider: string;
}
export declare const DistributionProportion: {
    typeUrl: string;
    encode(message: DistributionProportion, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): DistributionProportion;
    fromPartial(object: Partial<DistributionProportion>): DistributionProportion;
    fromAmino(object: DistributionProportionAmino): DistributionProportion;
    toAmino(message: DistributionProportion): DistributionProportionAmino;
    fromAminoMsg(object: DistributionProportionAminoMsg): DistributionProportion;
    fromProtoMsg(message: DistributionProportionProtoMsg): DistributionProportion;
    toProto(message: DistributionProportion): Uint8Array;
    toProtoMsg(message: DistributionProportion): DistributionProportionProtoMsg;
};
export declare const PoolProportions: {
    typeUrl: string;
    encode(message: PoolProportions, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): PoolProportions;
    fromPartial(object: Partial<PoolProportions>): PoolProportions;
    fromAmino(object: PoolProportionsAmino): PoolProportions;
    toAmino(message: PoolProportions): PoolProportionsAmino;
    fromAminoMsg(object: PoolProportionsAminoMsg): PoolProportions;
    fromProtoMsg(message: PoolProportionsProtoMsg): PoolProportions;
    toProto(message: PoolProportions): Uint8Array;
    toProtoMsg(message: PoolProportions): PoolProportionsProtoMsg;
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
