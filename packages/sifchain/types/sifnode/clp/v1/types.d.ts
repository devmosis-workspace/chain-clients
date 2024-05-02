import { Coin, CoinAmino, CoinSDKType } from "../../../cosmos/base/coin";
import { BinaryWriter } from "../../../binary";
export interface Asset {
    symbol: string;
}
export interface AssetProtoMsg {
    typeUrl: "/sifnode.clp.v1.Asset";
    value: Uint8Array;
}
export interface AssetAmino {
    symbol?: string;
}
export interface AssetAminoMsg {
    type: "/sifnode.clp.v1.Asset";
    value: AssetAmino;
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
    lastHeightInterestRateComputed: bigint;
    unsettledExternalLiabilities: string;
    unsettledNativeLiabilities: string;
    blockInterestNative: string;
    blockInterestExternal: string;
    /** the amount of external asset rewards distributed to liquidity providers from reward buckets */
    rewardAmountExternal: string;
}
export interface PoolProtoMsg {
    typeUrl: "/sifnode.clp.v1.Pool";
    value: Uint8Array;
}
export interface PoolAmino {
    external_asset?: AssetAmino;
    native_asset_balance?: string;
    external_asset_balance?: string;
    pool_units?: string;
    swap_price_native?: string;
    swap_price_external?: string;
    reward_period_native_distributed?: string;
    external_liabilities?: string;
    external_custody?: string;
    native_liabilities?: string;
    native_custody?: string;
    health?: string;
    interest_rate?: string;
    last_height_interest_rate_computed?: string;
    unsettled_external_liabilities?: string;
    unsettled_native_liabilities?: string;
    block_interest_native?: string;
    block_interest_external?: string;
    /** the amount of external asset rewards distributed to liquidity providers from reward buckets */
    reward_amount_external?: string;
}
export interface PoolAminoMsg {
    type: "/sifnode.clp.v1.Pool";
    value: PoolAmino;
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
    last_height_interest_rate_computed: bigint;
    unsettled_external_liabilities: string;
    unsettled_native_liabilities: string;
    block_interest_native: string;
    block_interest_external: string;
    reward_amount_external: string;
}
export interface LiquidityProvider {
    asset?: Asset;
    liquidityProviderUnits: string;
    liquidityProviderAddress: string;
    unlocks: LiquidityUnlock[];
    /**
     * contains the block height of the last update
     * distributed or added to liquidity provider shares rewards
     */
    lastUpdatedBlock: bigint;
    rewardAmount: Coin[];
}
export interface LiquidityProviderProtoMsg {
    typeUrl: "/sifnode.clp.v1.LiquidityProvider";
    value: Uint8Array;
}
export interface LiquidityProviderAmino {
    asset?: AssetAmino;
    liquidity_provider_units?: string;
    liquidity_provider_address?: string;
    unlocks?: LiquidityUnlockAmino[];
    /**
     * contains the block height of the last update
     * distributed or added to liquidity provider shares rewards
     */
    last_updated_block?: string;
    reward_amount?: CoinAmino[];
}
export interface LiquidityProviderAminoMsg {
    type: "/sifnode.clp.v1.LiquidityProvider";
    value: LiquidityProviderAmino;
}
export interface LiquidityProviderSDKType {
    asset?: AssetSDKType;
    liquidity_provider_units: string;
    liquidity_provider_address: string;
    unlocks: LiquidityUnlockSDKType[];
    last_updated_block: bigint;
    reward_amount: CoinSDKType[];
}
export interface LiquidityUnlock {
    requestHeight: bigint;
    units: string;
}
export interface LiquidityUnlockProtoMsg {
    typeUrl: "/sifnode.clp.v1.LiquidityUnlock";
    value: Uint8Array;
}
export interface LiquidityUnlockAmino {
    request_height?: string;
    units?: string;
}
export interface LiquidityUnlockAminoMsg {
    type: "/sifnode.clp.v1.LiquidityUnlock";
    value: LiquidityUnlockAmino;
}
export interface LiquidityUnlockSDKType {
    request_height: bigint;
    units: string;
}
export interface PmtpEpoch {
    epochCounter: bigint;
    blockCounter: bigint;
}
export interface PmtpEpochProtoMsg {
    typeUrl: "/sifnode.clp.v1.PmtpEpoch";
    value: Uint8Array;
}
export interface PmtpEpochAmino {
    epoch_counter?: string;
    block_counter?: string;
}
export interface PmtpEpochAminoMsg {
    type: "/sifnode.clp.v1.PmtpEpoch";
    value: PmtpEpochAmino;
}
export interface PmtpEpochSDKType {
    epoch_counter: bigint;
    block_counter: bigint;
}
export interface WhiteList {
    validatorList: string[];
}
export interface WhiteListProtoMsg {
    typeUrl: "/sifnode.clp.v1.WhiteList";
    value: Uint8Array;
}
export interface WhiteListAmino {
    validator_list?: string[];
}
export interface WhiteListAminoMsg {
    type: "/sifnode.clp.v1.WhiteList";
    value: WhiteListAmino;
}
export interface WhiteListSDKType {
    validator_list: string[];
}
export interface LiquidityProviderData {
    liquidityProvider?: LiquidityProvider;
    nativeAssetBalance: string;
    externalAssetBalance: string;
}
export interface LiquidityProviderDataProtoMsg {
    typeUrl: "/sifnode.clp.v1.LiquidityProviderData";
    value: Uint8Array;
}
export interface LiquidityProviderDataAmino {
    liquidity_provider?: LiquidityProviderAmino;
    native_asset_balance?: string;
    external_asset_balance?: string;
}
export interface LiquidityProviderDataAminoMsg {
    type: "/sifnode.clp.v1.LiquidityProviderData";
    value: LiquidityProviderDataAmino;
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
export interface EventPolicyProtoMsg {
    typeUrl: "/sifnode.clp.v1.EventPolicy";
    value: Uint8Array;
}
export interface EventPolicyAmino {
    event_type?: string;
    pmtp_period_start_block?: string;
    pmtp_period_end_block?: string;
}
export interface EventPolicyAminoMsg {
    type: "/sifnode.clp.v1.EventPolicy";
    value: EventPolicyAmino;
}
export interface EventPolicySDKType {
    event_type: string;
    pmtp_period_start_block: string;
    pmtp_period_end_block: string;
}
export interface RemovalQueue {
    count: bigint;
    id: bigint;
    startHeight: bigint;
    totalValue: string;
}
export interface RemovalQueueProtoMsg {
    typeUrl: "/sifnode.clp.v1.RemovalQueue";
    value: Uint8Array;
}
export interface RemovalQueueAmino {
    count?: string;
    id?: string;
    start_height?: string;
    total_value?: string;
}
export interface RemovalQueueAminoMsg {
    type: "/sifnode.clp.v1.RemovalQueue";
    value: RemovalQueueAmino;
}
export interface RemovalQueueSDKType {
    count: bigint;
    id: bigint;
    start_height: bigint;
    total_value: string;
}
export declare const Asset: {
    typeUrl: string;
    encode(message: Asset, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): Asset;
    fromPartial(object: Partial<Asset>): Asset;
    fromAmino(object: AssetAmino): Asset;
    toAmino(message: Asset): AssetAmino;
    fromAminoMsg(object: AssetAminoMsg): Asset;
    fromProtoMsg(message: AssetProtoMsg): Asset;
    toProto(message: Asset): Uint8Array;
    toProtoMsg(message: Asset): AssetProtoMsg;
};
export declare const Pool: {
    typeUrl: string;
    encode(message: Pool, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): Pool;
    fromPartial(object: Partial<Pool>): Pool;
    fromAmino(object: PoolAmino): Pool;
    toAmino(message: Pool): PoolAmino;
    fromAminoMsg(object: PoolAminoMsg): Pool;
    fromProtoMsg(message: PoolProtoMsg): Pool;
    toProto(message: Pool): Uint8Array;
    toProtoMsg(message: Pool): PoolProtoMsg;
};
export declare const LiquidityProvider: {
    typeUrl: string;
    encode(message: LiquidityProvider, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): LiquidityProvider;
    fromPartial(object: Partial<LiquidityProvider>): LiquidityProvider;
    fromAmino(object: LiquidityProviderAmino): LiquidityProvider;
    toAmino(message: LiquidityProvider): LiquidityProviderAmino;
    fromAminoMsg(object: LiquidityProviderAminoMsg): LiquidityProvider;
    fromProtoMsg(message: LiquidityProviderProtoMsg): LiquidityProvider;
    toProto(message: LiquidityProvider): Uint8Array;
    toProtoMsg(message: LiquidityProvider): LiquidityProviderProtoMsg;
};
export declare const LiquidityUnlock: {
    typeUrl: string;
    encode(message: LiquidityUnlock, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): LiquidityUnlock;
    fromPartial(object: Partial<LiquidityUnlock>): LiquidityUnlock;
    fromAmino(object: LiquidityUnlockAmino): LiquidityUnlock;
    toAmino(message: LiquidityUnlock): LiquidityUnlockAmino;
    fromAminoMsg(object: LiquidityUnlockAminoMsg): LiquidityUnlock;
    fromProtoMsg(message: LiquidityUnlockProtoMsg): LiquidityUnlock;
    toProto(message: LiquidityUnlock): Uint8Array;
    toProtoMsg(message: LiquidityUnlock): LiquidityUnlockProtoMsg;
};
export declare const PmtpEpoch: {
    typeUrl: string;
    encode(message: PmtpEpoch, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): PmtpEpoch;
    fromPartial(object: Partial<PmtpEpoch>): PmtpEpoch;
    fromAmino(object: PmtpEpochAmino): PmtpEpoch;
    toAmino(message: PmtpEpoch): PmtpEpochAmino;
    fromAminoMsg(object: PmtpEpochAminoMsg): PmtpEpoch;
    fromProtoMsg(message: PmtpEpochProtoMsg): PmtpEpoch;
    toProto(message: PmtpEpoch): Uint8Array;
    toProtoMsg(message: PmtpEpoch): PmtpEpochProtoMsg;
};
export declare const WhiteList: {
    typeUrl: string;
    encode(message: WhiteList, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): WhiteList;
    fromPartial(object: Partial<WhiteList>): WhiteList;
    fromAmino(object: WhiteListAmino): WhiteList;
    toAmino(message: WhiteList): WhiteListAmino;
    fromAminoMsg(object: WhiteListAminoMsg): WhiteList;
    fromProtoMsg(message: WhiteListProtoMsg): WhiteList;
    toProto(message: WhiteList): Uint8Array;
    toProtoMsg(message: WhiteList): WhiteListProtoMsg;
};
export declare const LiquidityProviderData: {
    typeUrl: string;
    encode(message: LiquidityProviderData, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): LiquidityProviderData;
    fromPartial(object: Partial<LiquidityProviderData>): LiquidityProviderData;
    fromAmino(object: LiquidityProviderDataAmino): LiquidityProviderData;
    toAmino(message: LiquidityProviderData): LiquidityProviderDataAmino;
    fromAminoMsg(object: LiquidityProviderDataAminoMsg): LiquidityProviderData;
    fromProtoMsg(message: LiquidityProviderDataProtoMsg): LiquidityProviderData;
    toProto(message: LiquidityProviderData): Uint8Array;
    toProtoMsg(message: LiquidityProviderData): LiquidityProviderDataProtoMsg;
};
export declare const EventPolicy: {
    typeUrl: string;
    encode(message: EventPolicy, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): EventPolicy;
    fromPartial(object: Partial<EventPolicy>): EventPolicy;
    fromAmino(object: EventPolicyAmino): EventPolicy;
    toAmino(message: EventPolicy): EventPolicyAmino;
    fromAminoMsg(object: EventPolicyAminoMsg): EventPolicy;
    fromProtoMsg(message: EventPolicyProtoMsg): EventPolicy;
    toProto(message: EventPolicy): Uint8Array;
    toProtoMsg(message: EventPolicy): EventPolicyProtoMsg;
};
export declare const RemovalQueue: {
    typeUrl: string;
    encode(message: RemovalQueue, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): RemovalQueue;
    fromPartial(object: Partial<RemovalQueue>): RemovalQueue;
    fromAmino(object: RemovalQueueAmino): RemovalQueue;
    toAmino(message: RemovalQueue): RemovalQueueAmino;
    fromAminoMsg(object: RemovalQueueAminoMsg): RemovalQueue;
    fromProtoMsg(message: RemovalQueueProtoMsg): RemovalQueue;
    toProto(message: RemovalQueue): Uint8Array;
    toProtoMsg(message: RemovalQueue): RemovalQueueProtoMsg;
};
