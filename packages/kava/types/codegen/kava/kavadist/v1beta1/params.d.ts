import { Coin, CoinAmino, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { Timestamp, TimestampAmino, TimestampSDKType } from "../../../google/protobuf/timestamp";
import { BinaryWriter } from "../../../binary";
/** Params governance parameters for kavadist module */
export interface Params {
    active: boolean;
    periods: Period[];
    infrastructureParams: InfrastructureParams;
}
export interface ParamsProtoMsg {
    typeUrl: "/kava.kavadist.v1beta1.Params";
    value: Uint8Array;
}
/** Params governance parameters for kavadist module */
export interface ParamsAmino {
    active: boolean;
    periods: PeriodAmino[];
    infrastructure_params?: InfrastructureParamsAmino;
}
export interface ParamsAminoMsg {
    type: "/kava.kavadist.v1beta1.Params";
    value: ParamsAmino;
}
/** Params governance parameters for kavadist module */
export interface ParamsSDKType {
    active: boolean;
    periods: PeriodSDKType[];
    infrastructure_params: InfrastructureParamsSDKType;
}
/** InfrastructureParams define the parameters for infrastructure rewards. */
export interface InfrastructureParams {
    infrastructurePeriods: Period[];
    coreRewards: CoreReward[];
    partnerRewards: PartnerReward[];
}
export interface InfrastructureParamsProtoMsg {
    typeUrl: "/kava.kavadist.v1beta1.InfrastructureParams";
    value: Uint8Array;
}
/** InfrastructureParams define the parameters for infrastructure rewards. */
export interface InfrastructureParamsAmino {
    infrastructure_periods: PeriodAmino[];
    core_rewards: CoreRewardAmino[];
    partner_rewards: PartnerRewardAmino[];
}
export interface InfrastructureParamsAminoMsg {
    type: "/kava.kavadist.v1beta1.InfrastructureParams";
    value: InfrastructureParamsAmino;
}
/** InfrastructureParams define the parameters for infrastructure rewards. */
export interface InfrastructureParamsSDKType {
    infrastructure_periods: PeriodSDKType[];
    core_rewards: CoreRewardSDKType[];
    partner_rewards: PartnerRewardSDKType[];
}
/** CoreReward defines the reward weights for core infrastructure providers. */
export interface CoreReward {
    address: Uint8Array;
    weight: string;
}
export interface CoreRewardProtoMsg {
    typeUrl: "/kava.kavadist.v1beta1.CoreReward";
    value: Uint8Array;
}
/** CoreReward defines the reward weights for core infrastructure providers. */
export interface CoreRewardAmino {
    address: Uint8Array;
    weight: string;
}
export interface CoreRewardAminoMsg {
    type: "/kava.kavadist.v1beta1.CoreReward";
    value: CoreRewardAmino;
}
/** CoreReward defines the reward weights for core infrastructure providers. */
export interface CoreRewardSDKType {
    address: Uint8Array;
    weight: string;
}
/** PartnerRewards defines the reward schedule for partner infrastructure providers. */
export interface PartnerReward {
    address: Uint8Array;
    rewardsPerSecond: Coin;
}
export interface PartnerRewardProtoMsg {
    typeUrl: "/kava.kavadist.v1beta1.PartnerReward";
    value: Uint8Array;
}
/** PartnerRewards defines the reward schedule for partner infrastructure providers. */
export interface PartnerRewardAmino {
    address: Uint8Array;
    rewards_per_second?: CoinAmino;
}
export interface PartnerRewardAminoMsg {
    type: "/kava.kavadist.v1beta1.PartnerReward";
    value: PartnerRewardAmino;
}
/** PartnerRewards defines the reward schedule for partner infrastructure providers. */
export interface PartnerRewardSDKType {
    address: Uint8Array;
    rewards_per_second: CoinSDKType;
}
/**
 * Period stores the specified start and end dates, and the inflation, expressed as a decimal
 * representing the yearly APR of KAVA tokens that will be minted during that period
 */
export interface Period {
    /** example "2020-03-01T15:20:00Z" */
    start: Timestamp;
    /** example "2020-06-01T15:20:00Z" */
    end: Timestamp;
    /** example "1.000000003022265980"  - 10% inflation */
    inflation: Uint8Array;
}
export interface PeriodProtoMsg {
    typeUrl: "/kava.kavadist.v1beta1.Period";
    value: Uint8Array;
}
/**
 * Period stores the specified start and end dates, and the inflation, expressed as a decimal
 * representing the yearly APR of KAVA tokens that will be minted during that period
 */
export interface PeriodAmino {
    /** example "2020-03-01T15:20:00Z" */
    start?: TimestampAmino;
    /** example "2020-06-01T15:20:00Z" */
    end?: TimestampAmino;
    /** example "1.000000003022265980"  - 10% inflation */
    inflation: Uint8Array;
}
export interface PeriodAminoMsg {
    type: "/kava.kavadist.v1beta1.Period";
    value: PeriodAmino;
}
/**
 * Period stores the specified start and end dates, and the inflation, expressed as a decimal
 * representing the yearly APR of KAVA tokens that will be minted during that period
 */
export interface PeriodSDKType {
    start: TimestampSDKType;
    end: TimestampSDKType;
    inflation: Uint8Array;
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
export declare const InfrastructureParams: {
    typeUrl: string;
    encode(message: InfrastructureParams, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): InfrastructureParams;
    fromPartial(object: Partial<InfrastructureParams>): InfrastructureParams;
    fromAmino(object: InfrastructureParamsAmino): InfrastructureParams;
    toAmino(message: InfrastructureParams): InfrastructureParamsAmino;
    fromAminoMsg(object: InfrastructureParamsAminoMsg): InfrastructureParams;
    fromProtoMsg(message: InfrastructureParamsProtoMsg): InfrastructureParams;
    toProto(message: InfrastructureParams): Uint8Array;
    toProtoMsg(message: InfrastructureParams): InfrastructureParamsProtoMsg;
};
export declare const CoreReward: {
    typeUrl: string;
    encode(message: CoreReward, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): CoreReward;
    fromPartial(object: Partial<CoreReward>): CoreReward;
    fromAmino(object: CoreRewardAmino): CoreReward;
    toAmino(message: CoreReward): CoreRewardAmino;
    fromAminoMsg(object: CoreRewardAminoMsg): CoreReward;
    fromProtoMsg(message: CoreRewardProtoMsg): CoreReward;
    toProto(message: CoreReward): Uint8Array;
    toProtoMsg(message: CoreReward): CoreRewardProtoMsg;
};
export declare const PartnerReward: {
    typeUrl: string;
    encode(message: PartnerReward, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): PartnerReward;
    fromPartial(object: Partial<PartnerReward>): PartnerReward;
    fromAmino(object: PartnerRewardAmino): PartnerReward;
    toAmino(message: PartnerReward): PartnerRewardAmino;
    fromAminoMsg(object: PartnerRewardAminoMsg): PartnerReward;
    fromProtoMsg(message: PartnerRewardProtoMsg): PartnerReward;
    toProto(message: PartnerReward): Uint8Array;
    toProtoMsg(message: PartnerReward): PartnerRewardProtoMsg;
};
export declare const Period: {
    typeUrl: string;
    encode(message: Period, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): Period;
    fromPartial(object: Partial<Period>): Period;
    fromAmino(object: PeriodAmino): Period;
    toAmino(message: Period): PeriodAmino;
    fromAminoMsg(object: PeriodAminoMsg): Period;
    fromProtoMsg(message: PeriodProtoMsg): Period;
    toProto(message: Period): Uint8Array;
    toProtoMsg(message: Period): PeriodProtoMsg;
};
