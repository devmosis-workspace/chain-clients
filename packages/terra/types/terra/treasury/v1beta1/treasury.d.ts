import { Coin, CoinAmino, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { BinaryWriter } from "../../../binary";
/** Params defines the parameters for the oracle module. */
export interface Params {
    taxPolicy: PolicyConstraints;
    rewardPolicy: PolicyConstraints;
    seigniorageBurdenTarget: string;
    miningIncrement: string;
    windowShort: bigint;
    windowLong: bigint;
    windowProbation: bigint;
    burnTaxSplit: string;
    minInitialDepositRatio: string;
}
export interface ParamsProtoMsg {
    typeUrl: "/terra.treasury.v1beta1.Params";
    value: Uint8Array;
}
/** Params defines the parameters for the oracle module. */
export interface ParamsAmino {
    tax_policy?: PolicyConstraintsAmino;
    reward_policy?: PolicyConstraintsAmino;
    seigniorage_burden_target?: string;
    mining_increment?: string;
    window_short?: string;
    window_long?: string;
    window_probation?: string;
    burn_tax_split?: string;
    min_initial_deposit_ratio?: string;
}
export interface ParamsAminoMsg {
    type: "/terra.treasury.v1beta1.Params";
    value: ParamsAmino;
}
/** Params defines the parameters for the oracle module. */
export interface ParamsSDKType {
    tax_policy: PolicyConstraintsSDKType;
    reward_policy: PolicyConstraintsSDKType;
    seigniorage_burden_target: string;
    mining_increment: string;
    window_short: bigint;
    window_long: bigint;
    window_probation: bigint;
    burn_tax_split: string;
    min_initial_deposit_ratio: string;
}
/** PolicyConstraints - defines policy constraints can be applied in tax & reward policies */
export interface PolicyConstraints {
    rateMin: string;
    rateMax: string;
    cap: Coin;
    changeRateMax: string;
}
export interface PolicyConstraintsProtoMsg {
    typeUrl: "/terra.treasury.v1beta1.PolicyConstraints";
    value: Uint8Array;
}
/** PolicyConstraints - defines policy constraints can be applied in tax & reward policies */
export interface PolicyConstraintsAmino {
    rate_min?: string;
    rate_max?: string;
    cap?: CoinAmino;
    change_rate_max?: string;
}
export interface PolicyConstraintsAminoMsg {
    type: "/terra.treasury.v1beta1.PolicyConstraints";
    value: PolicyConstraintsAmino;
}
/** PolicyConstraints - defines policy constraints can be applied in tax & reward policies */
export interface PolicyConstraintsSDKType {
    rate_min: string;
    rate_max: string;
    cap: CoinSDKType;
    change_rate_max: string;
}
/**
 * EpochTaxProceeds represents the tax amount
 * collected at the current epoch
 */
export interface EpochTaxProceeds {
    taxProceeds: Coin[];
}
export interface EpochTaxProceedsProtoMsg {
    typeUrl: "/terra.treasury.v1beta1.EpochTaxProceeds";
    value: Uint8Array;
}
/**
 * EpochTaxProceeds represents the tax amount
 * collected at the current epoch
 */
export interface EpochTaxProceedsAmino {
    tax_proceeds?: CoinAmino[];
}
export interface EpochTaxProceedsAminoMsg {
    type: "/terra.treasury.v1beta1.EpochTaxProceeds";
    value: EpochTaxProceedsAmino;
}
/**
 * EpochTaxProceeds represents the tax amount
 * collected at the current epoch
 */
export interface EpochTaxProceedsSDKType {
    tax_proceeds: CoinSDKType[];
}
/**
 * EpochInitialIssuance represents initial issuance
 * of the currrent epoch
 */
export interface EpochInitialIssuance {
    issuance: Coin[];
}
export interface EpochInitialIssuanceProtoMsg {
    typeUrl: "/terra.treasury.v1beta1.EpochInitialIssuance";
    value: Uint8Array;
}
/**
 * EpochInitialIssuance represents initial issuance
 * of the currrent epoch
 */
export interface EpochInitialIssuanceAmino {
    issuance?: CoinAmino[];
}
export interface EpochInitialIssuanceAminoMsg {
    type: "/terra.treasury.v1beta1.EpochInitialIssuance";
    value: EpochInitialIssuanceAmino;
}
/**
 * EpochInitialIssuance represents initial issuance
 * of the currrent epoch
 */
export interface EpochInitialIssuanceSDKType {
    issuance: CoinSDKType[];
}
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
export declare const PolicyConstraints: {
    typeUrl: string;
    encode(message: PolicyConstraints, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): PolicyConstraints;
    fromPartial(object: Partial<PolicyConstraints>): PolicyConstraints;
    fromAmino(object: PolicyConstraintsAmino): PolicyConstraints;
    toAmino(message: PolicyConstraints): PolicyConstraintsAmino;
    fromAminoMsg(object: PolicyConstraintsAminoMsg): PolicyConstraints;
    fromProtoMsg(message: PolicyConstraintsProtoMsg): PolicyConstraints;
    toProto(message: PolicyConstraints): Uint8Array;
    toProtoMsg(message: PolicyConstraints): PolicyConstraintsProtoMsg;
};
export declare const EpochTaxProceeds: {
    typeUrl: string;
    encode(message: EpochTaxProceeds, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): EpochTaxProceeds;
    fromPartial(object: Partial<EpochTaxProceeds>): EpochTaxProceeds;
    fromAmino(object: EpochTaxProceedsAmino): EpochTaxProceeds;
    toAmino(message: EpochTaxProceeds): EpochTaxProceedsAmino;
    fromAminoMsg(object: EpochTaxProceedsAminoMsg): EpochTaxProceeds;
    fromProtoMsg(message: EpochTaxProceedsProtoMsg): EpochTaxProceeds;
    toProto(message: EpochTaxProceeds): Uint8Array;
    toProtoMsg(message: EpochTaxProceeds): EpochTaxProceedsProtoMsg;
};
export declare const EpochInitialIssuance: {
    typeUrl: string;
    encode(message: EpochInitialIssuance, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): EpochInitialIssuance;
    fromPartial(object: Partial<EpochInitialIssuance>): EpochInitialIssuance;
    fromAmino(object: EpochInitialIssuanceAmino): EpochInitialIssuance;
    toAmino(message: EpochInitialIssuance): EpochInitialIssuanceAmino;
    fromAminoMsg(object: EpochInitialIssuanceAminoMsg): EpochInitialIssuance;
    fromProtoMsg(message: EpochInitialIssuanceProtoMsg): EpochInitialIssuance;
    toProto(message: EpochInitialIssuance): Uint8Array;
    toProtoMsg(message: EpochInitialIssuance): EpochInitialIssuanceProtoMsg;
};
