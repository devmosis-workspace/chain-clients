import { Coin, CoinAmino, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { ModuleRoute, ModuleRouteAmino, ModuleRouteSDKType } from "./module_route";
import { BinaryWriter } from "../../../binary";
/** Params holds parameters for the poolmanager module */
export interface Params {
    poolCreationFee: Coin[];
    /** taker_fee_params is the container of taker fee parameters. */
    takerFeeParams: TakerFeeParams;
    /**
     * authorized_quote_denoms is a list of quote denoms that can be used as
     * token1 when creating a concentrated pool. We limit the quote assets to a
     * small set for the purposes of having convinient price increments stemming
     * from tick to price conversion. These increments are in a human readable
     * magnitude only for token1 as a quote. For limit orders in the future, this
     * will be a desirable property in terms of UX as to allow users to set limit
     * orders at prices in terms of token1 (quote asset) that are easy to reason
     * about.
     */
    authorizedQuoteDenoms: string[];
}
export interface ParamsProtoMsg {
    typeUrl: "/osmosis.poolmanager.v1beta1.Params";
    value: Uint8Array;
}
/** Params holds parameters for the poolmanager module */
export interface ParamsAmino {
    pool_creation_fee: CoinAmino[];
    /** taker_fee_params is the container of taker fee parameters. */
    taker_fee_params?: TakerFeeParamsAmino;
    /**
     * authorized_quote_denoms is a list of quote denoms that can be used as
     * token1 when creating a concentrated pool. We limit the quote assets to a
     * small set for the purposes of having convinient price increments stemming
     * from tick to price conversion. These increments are in a human readable
     * magnitude only for token1 as a quote. For limit orders in the future, this
     * will be a desirable property in terms of UX as to allow users to set limit
     * orders at prices in terms of token1 (quote asset) that are easy to reason
     * about.
     */
    authorized_quote_denoms: string[];
}
export interface ParamsAminoMsg {
    type: "osmosis/poolmanager/params";
    value: ParamsAmino;
}
/** Params holds parameters for the poolmanager module */
export interface ParamsSDKType {
    pool_creation_fee: CoinSDKType[];
    taker_fee_params: TakerFeeParamsSDKType;
    authorized_quote_denoms: string[];
}
/** GenesisState defines the poolmanager module's genesis state. */
export interface GenesisState {
    /** the next_pool_id */
    nextPoolId: bigint;
    /** params is the container of poolmanager parameters. */
    params: Params;
    /** pool_routes is the container of the mappings from pool id to pool type. */
    poolRoutes: ModuleRoute[];
}
export interface GenesisStateProtoMsg {
    typeUrl: "/osmosis.poolmanager.v1beta1.GenesisState";
    value: Uint8Array;
}
/** GenesisState defines the poolmanager module's genesis state. */
export interface GenesisStateAmino {
    /** the next_pool_id */
    next_pool_id: string;
    /** params is the container of poolmanager parameters. */
    params?: ParamsAmino;
    /** pool_routes is the container of the mappings from pool id to pool type. */
    pool_routes: ModuleRouteAmino[];
}
export interface GenesisStateAminoMsg {
    type: "osmosis/poolmanager/genesis-state";
    value: GenesisStateAmino;
}
/** GenesisState defines the poolmanager module's genesis state. */
export interface GenesisStateSDKType {
    next_pool_id: bigint;
    params: ParamsSDKType;
    pool_routes: ModuleRouteSDKType[];
}
/** TakerFeeParams consolidates the taker fee parameters for the poolmanager. */
export interface TakerFeeParams {
    /**
     * default_taker_fee is the fee used when creating a new pool that doesn't
     * fall under a custom pool taker fee or stableswap taker fee category.
     */
    defaultTakerFee: string;
    /**
     * osmo_taker_fee_distribution defines the distribution of taker fees
     * generated in OSMO. As of this writing, it has two catagories:
     * - staking_rewards: the percent of the taker fee that gets distributed to
     *   stakers.
     * - community_pool: the percent of the taker fee that gets sent to the
     *   community pool.
     */
    osmoTakerFeeDistribution: TakerFeeDistributionPercentage;
    /**
     * non_osmo_taker_fee_distribution defines the distribution of taker fees
     * generated in non-OSMO. As of this writing, it has two categories:
     * - staking_rewards: the percent of the taker fee that gets swapped to OSMO
     *   and then distirbuted to stakers.
     * - community_pool: the percent of the taker fee that gets sent to the
     *   community pool. Note: If the non-OSMO asset is an authorized_quote_denom,
     *   that denom is sent directly to the community pool. Otherwise, it is
     *   swapped to the community_pool_denom_to_swap_non_whitelisted_assets_to and
     *   then sent to the community pool as that denom.
     */
    nonOsmoTakerFeeDistribution: TakerFeeDistributionPercentage;
    /**
     * admin_addresses is a list of addresses that are allowed to set and remove
     * custom taker fees for denom pairs. Governance also has the ability to set
     * and remove custom taker fees for denom pairs, but with the normal
     * governance delay.
     */
    adminAddresses: string[];
    /**
     * community_pool_denom_to_swap_non_whitelisted_assets_to is the denom that
     * non-whitelisted taker fees will be swapped to before being sent to
     * the community pool.
     */
    communityPoolDenomToSwapNonWhitelistedAssetsTo: string;
}
export interface TakerFeeParamsProtoMsg {
    typeUrl: "/osmosis.poolmanager.v1beta1.TakerFeeParams";
    value: Uint8Array;
}
/** TakerFeeParams consolidates the taker fee parameters for the poolmanager. */
export interface TakerFeeParamsAmino {
    /**
     * default_taker_fee is the fee used when creating a new pool that doesn't
     * fall under a custom pool taker fee or stableswap taker fee category.
     */
    default_taker_fee: string;
    /**
     * osmo_taker_fee_distribution defines the distribution of taker fees
     * generated in OSMO. As of this writing, it has two catagories:
     * - staking_rewards: the percent of the taker fee that gets distributed to
     *   stakers.
     * - community_pool: the percent of the taker fee that gets sent to the
     *   community pool.
     */
    osmo_taker_fee_distribution?: TakerFeeDistributionPercentageAmino;
    /**
     * non_osmo_taker_fee_distribution defines the distribution of taker fees
     * generated in non-OSMO. As of this writing, it has two categories:
     * - staking_rewards: the percent of the taker fee that gets swapped to OSMO
     *   and then distirbuted to stakers.
     * - community_pool: the percent of the taker fee that gets sent to the
     *   community pool. Note: If the non-OSMO asset is an authorized_quote_denom,
     *   that denom is sent directly to the community pool. Otherwise, it is
     *   swapped to the community_pool_denom_to_swap_non_whitelisted_assets_to and
     *   then sent to the community pool as that denom.
     */
    non_osmo_taker_fee_distribution?: TakerFeeDistributionPercentageAmino;
    /**
     * admin_addresses is a list of addresses that are allowed to set and remove
     * custom taker fees for denom pairs. Governance also has the ability to set
     * and remove custom taker fees for denom pairs, but with the normal
     * governance delay.
     */
    admin_addresses: string[];
    /**
     * community_pool_denom_to_swap_non_whitelisted_assets_to is the denom that
     * non-whitelisted taker fees will be swapped to before being sent to
     * the community pool.
     */
    community_pool_denom_to_swap_non_whitelisted_assets_to: string;
}
export interface TakerFeeParamsAminoMsg {
    type: "osmosis/poolmanager/taker-fee-params";
    value: TakerFeeParamsAmino;
}
/** TakerFeeParams consolidates the taker fee parameters for the poolmanager. */
export interface TakerFeeParamsSDKType {
    default_taker_fee: string;
    osmo_taker_fee_distribution: TakerFeeDistributionPercentageSDKType;
    non_osmo_taker_fee_distribution: TakerFeeDistributionPercentageSDKType;
    admin_addresses: string[];
    community_pool_denom_to_swap_non_whitelisted_assets_to: string;
}
/**
 * TakerFeeDistributionPercentage defines what percent of the taker fee category
 * gets distributed to the available categories.
 */
export interface TakerFeeDistributionPercentage {
    stakingRewards: string;
    communityPool: string;
}
export interface TakerFeeDistributionPercentageProtoMsg {
    typeUrl: "/osmosis.poolmanager.v1beta1.TakerFeeDistributionPercentage";
    value: Uint8Array;
}
/**
 * TakerFeeDistributionPercentage defines what percent of the taker fee category
 * gets distributed to the available categories.
 */
export interface TakerFeeDistributionPercentageAmino {
    staking_rewards: string;
    community_pool: string;
}
export interface TakerFeeDistributionPercentageAminoMsg {
    type: "osmosis/poolmanager/taker-fee-distribution-percentage";
    value: TakerFeeDistributionPercentageAmino;
}
/**
 * TakerFeeDistributionPercentage defines what percent of the taker fee category
 * gets distributed to the available categories.
 */
export interface TakerFeeDistributionPercentageSDKType {
    staking_rewards: string;
    community_pool: string;
}
export declare const Params: {
    typeUrl: string;
    encode(message: Params, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): Params;
    fromPartial(object: Partial<Params>): Params;
    fromAmino(object: ParamsAmino): Params;
    toAmino(message: Params): ParamsAmino;
    fromAminoMsg(object: ParamsAminoMsg): Params;
    toAminoMsg(message: Params): ParamsAminoMsg;
    fromProtoMsg(message: ParamsProtoMsg): Params;
    toProto(message: Params): Uint8Array;
    toProtoMsg(message: Params): ParamsProtoMsg;
};
export declare const GenesisState: {
    typeUrl: string;
    encode(message: GenesisState, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): GenesisState;
    fromPartial(object: Partial<GenesisState>): GenesisState;
    fromAmino(object: GenesisStateAmino): GenesisState;
    toAmino(message: GenesisState): GenesisStateAmino;
    fromAminoMsg(object: GenesisStateAminoMsg): GenesisState;
    toAminoMsg(message: GenesisState): GenesisStateAminoMsg;
    fromProtoMsg(message: GenesisStateProtoMsg): GenesisState;
    toProto(message: GenesisState): Uint8Array;
    toProtoMsg(message: GenesisState): GenesisStateProtoMsg;
};
export declare const TakerFeeParams: {
    typeUrl: string;
    encode(message: TakerFeeParams, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): TakerFeeParams;
    fromPartial(object: Partial<TakerFeeParams>): TakerFeeParams;
    fromAmino(object: TakerFeeParamsAmino): TakerFeeParams;
    toAmino(message: TakerFeeParams): TakerFeeParamsAmino;
    fromAminoMsg(object: TakerFeeParamsAminoMsg): TakerFeeParams;
    toAminoMsg(message: TakerFeeParams): TakerFeeParamsAminoMsg;
    fromProtoMsg(message: TakerFeeParamsProtoMsg): TakerFeeParams;
    toProto(message: TakerFeeParams): Uint8Array;
    toProtoMsg(message: TakerFeeParams): TakerFeeParamsProtoMsg;
};
export declare const TakerFeeDistributionPercentage: {
    typeUrl: string;
    encode(message: TakerFeeDistributionPercentage, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): TakerFeeDistributionPercentage;
    fromPartial(object: Partial<TakerFeeDistributionPercentage>): TakerFeeDistributionPercentage;
    fromAmino(object: TakerFeeDistributionPercentageAmino): TakerFeeDistributionPercentage;
    toAmino(message: TakerFeeDistributionPercentage): TakerFeeDistributionPercentageAmino;
    fromAminoMsg(object: TakerFeeDistributionPercentageAminoMsg): TakerFeeDistributionPercentage;
    toAminoMsg(message: TakerFeeDistributionPercentage): TakerFeeDistributionPercentageAminoMsg;
    fromProtoMsg(message: TakerFeeDistributionPercentageProtoMsg): TakerFeeDistributionPercentage;
    toProto(message: TakerFeeDistributionPercentage): Uint8Array;
    toProtoMsg(message: TakerFeeDistributionPercentage): TakerFeeDistributionPercentageProtoMsg;
};
