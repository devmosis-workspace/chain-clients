import { BinaryWriter } from "../../../binary";
export interface Params {
    leverageMax: string;
    interestRateMax: string;
    interestRateMin: string;
    interestRateIncrease: string;
    interestRateDecrease: string;
    healthGainFactor: string;
    epochLength: bigint;
    pools: string[];
    removalQueueThreshold: string;
    maxOpenPositions: bigint;
    poolOpenThreshold: string;
    forceCloseFundPercentage: string;
    forceCloseFundAddress: string;
    incrementalInterestPaymentFundPercentage: string;
    incrementalInterestPaymentFundAddress: string;
    sqModifier: string;
    safetyFactor: string;
    closedPools: string[];
    incrementalInterestPaymentEnabled: boolean;
    whitelistingEnabled: boolean;
    rowanCollateralEnabled: boolean;
}
export interface ParamsProtoMsg {
    typeUrl: "/sifnode.margin.v1.Params";
    value: Uint8Array;
}
export interface ParamsAmino {
    leverage_max?: string;
    interest_rate_max?: string;
    interest_rate_min?: string;
    interest_rate_increase?: string;
    interest_rate_decrease?: string;
    health_gain_factor?: string;
    epoch_length?: string;
    pools?: string[];
    removal_queue_threshold?: string;
    max_open_positions?: string;
    pool_open_threshold?: string;
    force_close_fund_percentage?: string;
    force_close_fund_address?: string;
    incremental_interest_payment_fund_percentage?: string;
    incremental_interest_payment_fund_address?: string;
    sq_modifier?: string;
    safety_factor?: string;
    closed_pools?: string[];
    incremental_interest_payment_enabled?: boolean;
    whitelisting_enabled?: boolean;
    rowan_collateral_enabled?: boolean;
}
export interface ParamsAminoMsg {
    type: "/sifnode.margin.v1.Params";
    value: ParamsAmino;
}
export interface ParamsSDKType {
    leverage_max: string;
    interest_rate_max: string;
    interest_rate_min: string;
    interest_rate_increase: string;
    interest_rate_decrease: string;
    health_gain_factor: string;
    epoch_length: bigint;
    pools: string[];
    removal_queue_threshold: string;
    max_open_positions: bigint;
    pool_open_threshold: string;
    force_close_fund_percentage: string;
    force_close_fund_address: string;
    incremental_interest_payment_fund_percentage: string;
    incremental_interest_payment_fund_address: string;
    sq_modifier: string;
    safety_factor: string;
    closed_pools: string[];
    incremental_interest_payment_enabled: boolean;
    whitelisting_enabled: boolean;
    rowan_collateral_enabled: boolean;
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
