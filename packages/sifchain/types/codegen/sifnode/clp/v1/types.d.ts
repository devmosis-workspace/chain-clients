import { Long } from "../../../helpers";
import * as _m0 from "protobufjs/minimal";
export interface Asset {
    symbol: string;
}
export interface AssetSDKType {
    symbol: string;
}
export interface Pool {
    externalAsset?: Asset;
    nativeAssetBalance: string;
    externalAssetBalance: string;
    poolUnits: string;
    swapPriceNative: string;
    swapPriceExternal: string;
    rewardPeriodNativeDistributed: string;
    externalLiabilities: string;
    externalCustody: string;
    nativeLiabilities: string;
    nativeCustody: string;
    health: string;
    interestRate: string;
    lastHeightInterestRateComputed: Long;
    unsettledExternalLiabilities: string;
    unsettledNativeLiabilities: string;
    blockInterestNative: string;
    blockInterestExternal: string;
}
export interface PoolSDKType {
    external_asset?: AssetSDKType;
    native_asset_balance: string;
    external_asset_balance: string;
    pool_units: string;
    swap_price_native: string;
    swap_price_external: string;
    reward_period_native_distributed: string;
    external_liabilities: string;
    external_custody: string;
    native_liabilities: string;
    native_custody: string;
    health: string;
    interest_rate: string;
    last_height_interest_rate_computed: Long;
    unsettled_external_liabilities: string;
    unsettled_native_liabilities: string;
    block_interest_native: string;
    block_interest_external: string;
}
export interface LiquidityProvider {
    asset?: Asset;
    liquidityProviderUnits: string;
    liquidityProviderAddress: string;
    unlocks: LiquidityUnlock[];
}
export interface LiquidityProviderSDKType {
    asset?: AssetSDKType;
    liquidity_provider_units: string;
    liquidity_provider_address: string;
    unlocks: LiquidityUnlockSDKType[];
}
export interface LiquidityUnlock {
    requestHeight: Long;
    units: string;
}
export interface LiquidityUnlockSDKType {
    request_height: Long;
    units: string;
}
export interface PmtpEpoch {
    epochCounter: Long;
    blockCounter: Long;
}
export interface PmtpEpochSDKType {
    epoch_counter: Long;
    block_counter: Long;
}
export interface WhiteList {
    validatorList: string[];
}
export interface WhiteListSDKType {
    validator_list: string[];
}
export interface LiquidityProviderData {
    liquidityProvider?: LiquidityProvider;
    nativeAssetBalance: string;
    externalAssetBalance: string;
}
export interface LiquidityProviderDataSDKType {
    liquidity_provider?: LiquidityProviderSDKType;
    native_asset_balance: string;
    external_asset_balance: string;
}
export interface EventPolicy {
    eventType: string;
    pmtpPeriodStartBlock: string;
    pmtpPeriodEndBlock: string;
}
export interface EventPolicySDKType {
    event_type: string;
    pmtp_period_start_block: string;
    pmtp_period_end_block: string;
}
export interface RemovalQueue {
    count: Long;
    id: Long;
    startHeight: Long;
    totalValue: string;
}
export interface RemovalQueueSDKType {
    count: Long;
    id: Long;
    start_height: Long;
    total_value: string;
}
export declare const Asset: {
    encode(message: Asset, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): Asset;
    fromPartial(object: Partial<Asset>): Asset;
};
export declare const Pool: {
    encode(message: Pool, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): Pool;
    fromPartial(object: Partial<Pool>): Pool;
};
export declare const LiquidityProvider: {
    encode(message: LiquidityProvider, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): LiquidityProvider;
    fromPartial(object: Partial<LiquidityProvider>): LiquidityProvider;
};
export declare const LiquidityUnlock: {
    encode(message: LiquidityUnlock, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): LiquidityUnlock;
    fromPartial(object: Partial<LiquidityUnlock>): LiquidityUnlock;
};
export declare const PmtpEpoch: {
    encode(message: PmtpEpoch, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): PmtpEpoch;
    fromPartial(object: Partial<PmtpEpoch>): PmtpEpoch;
};
export declare const WhiteList: {
    encode(message: WhiteList, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): WhiteList;
    fromPartial(object: Partial<WhiteList>): WhiteList;
};
export declare const LiquidityProviderData: {
    encode(message: LiquidityProviderData, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): LiquidityProviderData;
    fromPartial(object: Partial<LiquidityProviderData>): LiquidityProviderData;
};
export declare const EventPolicy: {
    encode(message: EventPolicy, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): EventPolicy;
    fromPartial(object: Partial<EventPolicy>): EventPolicy;
};
export declare const RemovalQueue: {
    encode(message: RemovalQueue, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): RemovalQueue;
    fromPartial(object: Partial<RemovalQueue>): RemovalQueue;
};
