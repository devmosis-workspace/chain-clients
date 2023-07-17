import { Long } from "../../../helpers";
import * as _m0 from "protobufjs/minimal";
export declare enum Position {
    UNSPECIFIED = 0,
    LONG = 1,
    SHORT = 2,
    UNRECOGNIZED = -1
}
export declare const PositionSDKType: typeof Position;
export declare function positionFromJSON(object: any): Position;
export declare function positionToJSON(object: Position): string;
export interface GenesisState {
    params?: Params;
}
export interface GenesisStateSDKType {
    params?: ParamsSDKType;
}
export interface Params {
    leverageMax: string;
    interestRateMax: string;
    interestRateMin: string;
    interestRateIncrease: string;
    interestRateDecrease: string;
    healthGainFactor: string;
    epochLength: Long;
    pools: string[];
    removalQueueThreshold: string;
    maxOpenPositions: Long;
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
export interface ParamsSDKType {
    leverage_max: string;
    interest_rate_max: string;
    interest_rate_min: string;
    interest_rate_increase: string;
    interest_rate_decrease: string;
    health_gain_factor: string;
    epoch_length: Long;
    pools: string[];
    removal_queue_threshold: string;
    max_open_positions: Long;
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
export interface MTP {
    address: string;
    collateralAsset: string;
    collateralAmount: string;
    liabilities: string;
    interestPaidCollateral: string;
    interestPaidCustody: string;
    interestUnpaidCollateral: string;
    custodyAsset: string;
    custodyAmount: string;
    leverage: string;
    mtpHealth: string;
    position: Position;
    id: Long;
}
export interface MTPSDKType {
    address: string;
    collateral_asset: string;
    collateral_amount: string;
    liabilities: string;
    interest_paid_collateral: string;
    interest_paid_custody: string;
    interest_unpaid_collateral: string;
    custody_asset: string;
    custody_amount: string;
    leverage: string;
    mtp_health: string;
    position: Position;
    id: Long;
}
export declare const GenesisState: {
    encode(message: GenesisState, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): GenesisState;
    fromPartial(object: Partial<GenesisState>): GenesisState;
};
export declare const Params: {
    encode(message: Params, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): Params;
    fromPartial(object: Partial<Params>): Params;
};
export declare const MTP: {
    encode(message: MTP, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): MTP;
    fromPartial(object: Partial<MTP>): MTP;
};
