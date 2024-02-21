import { Coin, CoinAmino, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { TakerFeesTracker, TakerFeesTrackerAmino, TakerFeesTrackerSDKType } from "../../poolmanager/v1beta1/genesis";
import { BinaryWriter } from "../../../binary";
/** TokenPairArbRoutes tracks all of the hot routes for a given pair of tokens */
export interface TokenPairArbRoutes {
    /** Stores all of the possible hot paths for a given pair of tokens */
    arbRoutes: Route[];
    /** Token denomination of the first asset */
    tokenIn: string;
    /** Token denomination of the second asset */
    tokenOut: string;
}
export interface TokenPairArbRoutesProtoMsg {
    typeUrl: "/osmosis.protorev.v1beta1.TokenPairArbRoutes";
    value: Uint8Array;
}
/** TokenPairArbRoutes tracks all of the hot routes for a given pair of tokens */
export interface TokenPairArbRoutesAmino {
    /** Stores all of the possible hot paths for a given pair of tokens */
    arb_routes?: RouteAmino[];
    /** Token denomination of the first asset */
    token_in?: string;
    /** Token denomination of the second asset */
    token_out?: string;
}
export interface TokenPairArbRoutesAminoMsg {
    type: "osmosis/protorev/token-pair-arb-routes";
    value: TokenPairArbRoutesAmino;
}
/** TokenPairArbRoutes tracks all of the hot routes for a given pair of tokens */
export interface TokenPairArbRoutesSDKType {
    arb_routes: RouteSDKType[];
    token_in: string;
    token_out: string;
}
/** Route is a hot route for a given pair of tokens */
export interface Route {
    /**
     * The pool IDs that are traversed in the directed cyclic graph (traversed
     * left
     * -> right)
     */
    trades: Trade[];
    /**
     * The step size that will be used to find the optimal swap amount in the
     * binary search
     */
    stepSize: string;
}
export interface RouteProtoMsg {
    typeUrl: "/osmosis.protorev.v1beta1.Route";
    value: Uint8Array;
}
/** Route is a hot route for a given pair of tokens */
export interface RouteAmino {
    /**
     * The pool IDs that are traversed in the directed cyclic graph (traversed
     * left
     * -> right)
     */
    trades?: TradeAmino[];
    /**
     * The step size that will be used to find the optimal swap amount in the
     * binary search
     */
    step_size?: string;
}
export interface RouteAminoMsg {
    type: "osmosis/protorev/route";
    value: RouteAmino;
}
/** Route is a hot route for a given pair of tokens */
export interface RouteSDKType {
    trades: TradeSDKType[];
    step_size: string;
}
/** Trade is a single trade in a route */
export interface Trade {
    /** The pool id of the pool that is traded on */
    pool: bigint;
    /** The denom of the token that is traded */
    tokenIn: string;
    /** The denom of the token that is received */
    tokenOut: string;
}
export interface TradeProtoMsg {
    typeUrl: "/osmosis.protorev.v1beta1.Trade";
    value: Uint8Array;
}
/** Trade is a single trade in a route */
export interface TradeAmino {
    /** The pool id of the pool that is traded on */
    pool?: string;
    /** The denom of the token that is traded */
    token_in?: string;
    /** The denom of the token that is received */
    token_out?: string;
}
export interface TradeAminoMsg {
    type: "osmosis/protorev/trade";
    value: TradeAmino;
}
/** Trade is a single trade in a route */
export interface TradeSDKType {
    pool: bigint;
    token_in: string;
    token_out: string;
}
/**
 * RouteStatistics contains the number of trades the module has executed after a
 * swap on a given route and the profits from the trades
 */
export interface RouteStatistics {
    /** profits is the total profit from all trades on this route */
    profits: Coin[];
    /**
     * number_of_trades is the number of trades the module has executed using this
     * route
     */
    numberOfTrades: string;
    /** route is the route that was used (pool ids along the arbitrage route) */
    route: bigint[];
}
export interface RouteStatisticsProtoMsg {
    typeUrl: "/osmosis.protorev.v1beta1.RouteStatistics";
    value: Uint8Array;
}
/**
 * RouteStatistics contains the number of trades the module has executed after a
 * swap on a given route and the profits from the trades
 */
export interface RouteStatisticsAmino {
    /** profits is the total profit from all trades on this route */
    profits?: CoinAmino[];
    /**
     * number_of_trades is the number of trades the module has executed using this
     * route
     */
    number_of_trades?: string;
    /** route is the route that was used (pool ids along the arbitrage route) */
    route?: string[];
}
export interface RouteStatisticsAminoMsg {
    type: "osmosis/protorev/route-statistics";
    value: RouteStatisticsAmino;
}
/**
 * RouteStatistics contains the number of trades the module has executed after a
 * swap on a given route and the profits from the trades
 */
export interface RouteStatisticsSDKType {
    profits: CoinSDKType[];
    number_of_trades: string;
    route: bigint[];
}
/**
 * PoolWeights contains the weights of all of the different pool types. This
 * distinction is made and necessary because the execution time ranges
 * significantly between the different pool types. Each weight roughly
 * corresponds to the amount of time (in ms) it takes to execute a swap on that
 * pool type.
 *
 * DEPRECATED: This field is deprecated and will be removed in the next
 * release. It is replaced by the `info_by_pool_type` field.
 */
export interface PoolWeights {
    /** The weight of a stableswap pool */
    stableWeight: bigint;
    /** The weight of a balancer pool */
    balancerWeight: bigint;
    /** The weight of a concentrated pool */
    concentratedWeight: bigint;
    /** The weight of a cosmwasm pool */
    cosmwasmWeight: bigint;
}
export interface PoolWeightsProtoMsg {
    typeUrl: "/osmosis.protorev.v1beta1.PoolWeights";
    value: Uint8Array;
}
/**
 * PoolWeights contains the weights of all of the different pool types. This
 * distinction is made and necessary because the execution time ranges
 * significantly between the different pool types. Each weight roughly
 * corresponds to the amount of time (in ms) it takes to execute a swap on that
 * pool type.
 *
 * DEPRECATED: This field is deprecated and will be removed in the next
 * release. It is replaced by the `info_by_pool_type` field.
 */
export interface PoolWeightsAmino {
    /** The weight of a stableswap pool */
    stable_weight?: string;
    /** The weight of a balancer pool */
    balancer_weight?: string;
    /** The weight of a concentrated pool */
    concentrated_weight?: string;
    /** The weight of a cosmwasm pool */
    cosmwasm_weight?: string;
}
export interface PoolWeightsAminoMsg {
    type: "osmosis/protorev/pool-weights";
    value: PoolWeightsAmino;
}
/**
 * PoolWeights contains the weights of all of the different pool types. This
 * distinction is made and necessary because the execution time ranges
 * significantly between the different pool types. Each weight roughly
 * corresponds to the amount of time (in ms) it takes to execute a swap on that
 * pool type.
 *
 * DEPRECATED: This field is deprecated and will be removed in the next
 * release. It is replaced by the `info_by_pool_type` field.
 */
export interface PoolWeightsSDKType {
    stable_weight: bigint;
    balancer_weight: bigint;
    concentrated_weight: bigint;
    cosmwasm_weight: bigint;
}
/**
 * InfoByPoolType contains information pertaining to how expensive (in terms of
 * gas and time) it is to execute a swap on a given pool type. This distinction
 * is made and necessary because the execution time ranges significantly between
 * the different pool types.
 */
export interface InfoByPoolType {
    /** The stable pool info */
    stable: StablePoolInfo;
    /** The balancer pool info */
    balancer: BalancerPoolInfo;
    /** The concentrated pool info */
    concentrated: ConcentratedPoolInfo;
    /** The cosmwasm pool info */
    cosmwasm: CosmwasmPoolInfo;
}
export interface InfoByPoolTypeProtoMsg {
    typeUrl: "/osmosis.protorev.v1beta1.InfoByPoolType";
    value: Uint8Array;
}
/**
 * InfoByPoolType contains information pertaining to how expensive (in terms of
 * gas and time) it is to execute a swap on a given pool type. This distinction
 * is made and necessary because the execution time ranges significantly between
 * the different pool types.
 */
export interface InfoByPoolTypeAmino {
    /** The stable pool info */
    stable?: StablePoolInfoAmino;
    /** The balancer pool info */
    balancer?: BalancerPoolInfoAmino;
    /** The concentrated pool info */
    concentrated?: ConcentratedPoolInfoAmino;
    /** The cosmwasm pool info */
    cosmwasm?: CosmwasmPoolInfoAmino;
}
export interface InfoByPoolTypeAminoMsg {
    type: "osmosis/protorev/info-by-pool-type";
    value: InfoByPoolTypeAmino;
}
/**
 * InfoByPoolType contains information pertaining to how expensive (in terms of
 * gas and time) it is to execute a swap on a given pool type. This distinction
 * is made and necessary because the execution time ranges significantly between
 * the different pool types.
 */
export interface InfoByPoolTypeSDKType {
    stable: StablePoolInfoSDKType;
    balancer: BalancerPoolInfoSDKType;
    concentrated: ConcentratedPoolInfoSDKType;
    cosmwasm: CosmwasmPoolInfoSDKType;
}
/** StablePoolInfo contains meta data pertaining to a stableswap pool type. */
export interface StablePoolInfo {
    /** The weight of a stableswap pool */
    weight: bigint;
}
export interface StablePoolInfoProtoMsg {
    typeUrl: "/osmosis.protorev.v1beta1.StablePoolInfo";
    value: Uint8Array;
}
/** StablePoolInfo contains meta data pertaining to a stableswap pool type. */
export interface StablePoolInfoAmino {
    /** The weight of a stableswap pool */
    weight?: string;
}
export interface StablePoolInfoAminoMsg {
    type: "osmosis/protorev/stable-pool-info";
    value: StablePoolInfoAmino;
}
/** StablePoolInfo contains meta data pertaining to a stableswap pool type. */
export interface StablePoolInfoSDKType {
    weight: bigint;
}
/** BalancerPoolInfo contains meta data pertaining to a balancer pool type. */
export interface BalancerPoolInfo {
    /** The weight of a balancer pool */
    weight: bigint;
}
export interface BalancerPoolInfoProtoMsg {
    typeUrl: "/osmosis.protorev.v1beta1.BalancerPoolInfo";
    value: Uint8Array;
}
/** BalancerPoolInfo contains meta data pertaining to a balancer pool type. */
export interface BalancerPoolInfoAmino {
    /** The weight of a balancer pool */
    weight?: string;
}
export interface BalancerPoolInfoAminoMsg {
    type: "osmosis/protorev/balancer-pool-info";
    value: BalancerPoolInfoAmino;
}
/** BalancerPoolInfo contains meta data pertaining to a balancer pool type. */
export interface BalancerPoolInfoSDKType {
    weight: bigint;
}
/**
 * ConcentratedPoolInfo contains meta data pertaining to a concentrated pool
 * type.
 */
export interface ConcentratedPoolInfo {
    /** The weight of a concentrated pool */
    weight: bigint;
    /** The maximum number of ticks we can move when rebalancing */
    maxTicksCrossed: bigint;
}
export interface ConcentratedPoolInfoProtoMsg {
    typeUrl: "/osmosis.protorev.v1beta1.ConcentratedPoolInfo";
    value: Uint8Array;
}
/**
 * ConcentratedPoolInfo contains meta data pertaining to a concentrated pool
 * type.
 */
export interface ConcentratedPoolInfoAmino {
    /** The weight of a concentrated pool */
    weight?: string;
    /** The maximum number of ticks we can move when rebalancing */
    max_ticks_crossed?: string;
}
export interface ConcentratedPoolInfoAminoMsg {
    type: "osmosis/protorev/concentrated-pool-info";
    value: ConcentratedPoolInfoAmino;
}
/**
 * ConcentratedPoolInfo contains meta data pertaining to a concentrated pool
 * type.
 */
export interface ConcentratedPoolInfoSDKType {
    weight: bigint;
    max_ticks_crossed: bigint;
}
/** CosmwasmPoolInfo contains meta data pertaining to a cosmwasm pool type. */
export interface CosmwasmPoolInfo {
    /** The weight of a cosmwasm pool (by contract address) */
    weightMaps: WeightMap[];
}
export interface CosmwasmPoolInfoProtoMsg {
    typeUrl: "/osmosis.protorev.v1beta1.CosmwasmPoolInfo";
    value: Uint8Array;
}
/** CosmwasmPoolInfo contains meta data pertaining to a cosmwasm pool type. */
export interface CosmwasmPoolInfoAmino {
    /** The weight of a cosmwasm pool (by contract address) */
    weight_maps?: WeightMapAmino[];
}
export interface CosmwasmPoolInfoAminoMsg {
    type: "osmosis/protorev/cosmwasm-pool-info";
    value: CosmwasmPoolInfoAmino;
}
/** CosmwasmPoolInfo contains meta data pertaining to a cosmwasm pool type. */
export interface CosmwasmPoolInfoSDKType {
    weight_maps: WeightMapSDKType[];
}
/**
 * WeightMap maps a contract address to a weight. The weight of an address
 * corresponds to the amount of ms required to execute a swap on that contract.
 */
export interface WeightMap {
    /** The weight of a cosmwasm pool (by contract address) */
    weight: bigint;
    /** The contract address */
    contractAddress: string;
}
export interface WeightMapProtoMsg {
    typeUrl: "/osmosis.protorev.v1beta1.WeightMap";
    value: Uint8Array;
}
/**
 * WeightMap maps a contract address to a weight. The weight of an address
 * corresponds to the amount of ms required to execute a swap on that contract.
 */
export interface WeightMapAmino {
    /** The weight of a cosmwasm pool (by contract address) */
    weight?: string;
    /** The contract address */
    contract_address?: string;
}
export interface WeightMapAminoMsg {
    type: "osmosis/protorev/weight-map";
    value: WeightMapAmino;
}
/**
 * WeightMap maps a contract address to a weight. The weight of an address
 * corresponds to the amount of ms required to execute a swap on that contract.
 */
export interface WeightMapSDKType {
    weight: bigint;
    contract_address: string;
}
/**
 * BaseDenom represents a single base denom that the module uses for its
 * arbitrage trades. It contains the denom name alongside the step size of the
 * binary search that is used to find the optimal swap amount
 */
export interface BaseDenom {
    /** The denom i.e. name of the base denom (ex. uosmo) */
    denom: string;
    /**
     * The step size of the binary search that is used to find the optimal swap
     * amount
     */
    stepSize: string;
}
export interface BaseDenomProtoMsg {
    typeUrl: "/osmosis.protorev.v1beta1.BaseDenom";
    value: Uint8Array;
}
/**
 * BaseDenom represents a single base denom that the module uses for its
 * arbitrage trades. It contains the denom name alongside the step size of the
 * binary search that is used to find the optimal swap amount
 */
export interface BaseDenomAmino {
    /** The denom i.e. name of the base denom (ex. uosmo) */
    denom?: string;
    /**
     * The step size of the binary search that is used to find the optimal swap
     * amount
     */
    step_size?: string;
}
export interface BaseDenomAminoMsg {
    type: "osmosis/protorev/base-denom";
    value: BaseDenomAmino;
}
/**
 * BaseDenom represents a single base denom that the module uses for its
 * arbitrage trades. It contains the denom name alongside the step size of the
 * binary search that is used to find the optimal swap amount
 */
export interface BaseDenomSDKType {
    denom: string;
    step_size: string;
}
export interface AllProtocolRevenue {
    takerFeesTracker: TakerFeesTracker;
    cyclicArbTracker: CyclicArbTracker;
}
export interface AllProtocolRevenueProtoMsg {
    typeUrl: "/osmosis.protorev.v1beta1.AllProtocolRevenue";
    value: Uint8Array;
}
export interface AllProtocolRevenueAmino {
    taker_fees_tracker?: TakerFeesTrackerAmino;
    cyclic_arb_tracker?: CyclicArbTrackerAmino;
}
export interface AllProtocolRevenueAminoMsg {
    type: "osmosis/protorev/all-protocol-revenue";
    value: AllProtocolRevenueAmino;
}
export interface AllProtocolRevenueSDKType {
    taker_fees_tracker: TakerFeesTrackerSDKType;
    cyclic_arb_tracker: CyclicArbTrackerSDKType;
}
export interface CyclicArbTracker {
    cyclicArb: Coin[];
    heightAccountingStartsFrom: bigint;
}
export interface CyclicArbTrackerProtoMsg {
    typeUrl: "/osmosis.protorev.v1beta1.CyclicArbTracker";
    value: Uint8Array;
}
export interface CyclicArbTrackerAmino {
    cyclic_arb?: CoinAmino[];
    height_accounting_starts_from?: string;
}
export interface CyclicArbTrackerAminoMsg {
    type: "osmosis/protorev/cyclic-arb-tracker";
    value: CyclicArbTrackerAmino;
}
export interface CyclicArbTrackerSDKType {
    cyclic_arb: CoinSDKType[];
    height_accounting_starts_from: bigint;
}
export declare const TokenPairArbRoutes: {
    typeUrl: string;
    encode(message: TokenPairArbRoutes, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): TokenPairArbRoutes;
    fromPartial(object: Partial<TokenPairArbRoutes>): TokenPairArbRoutes;
    fromAmino(object: TokenPairArbRoutesAmino): TokenPairArbRoutes;
    toAmino(message: TokenPairArbRoutes): TokenPairArbRoutesAmino;
    fromAminoMsg(object: TokenPairArbRoutesAminoMsg): TokenPairArbRoutes;
    toAminoMsg(message: TokenPairArbRoutes): TokenPairArbRoutesAminoMsg;
    fromProtoMsg(message: TokenPairArbRoutesProtoMsg): TokenPairArbRoutes;
    toProto(message: TokenPairArbRoutes): Uint8Array;
    toProtoMsg(message: TokenPairArbRoutes): TokenPairArbRoutesProtoMsg;
};
export declare const Route: {
    typeUrl: string;
    encode(message: Route, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): Route;
    fromPartial(object: Partial<Route>): Route;
    fromAmino(object: RouteAmino): Route;
    toAmino(message: Route): RouteAmino;
    fromAminoMsg(object: RouteAminoMsg): Route;
    toAminoMsg(message: Route): RouteAminoMsg;
    fromProtoMsg(message: RouteProtoMsg): Route;
    toProto(message: Route): Uint8Array;
    toProtoMsg(message: Route): RouteProtoMsg;
};
export declare const Trade: {
    typeUrl: string;
    encode(message: Trade, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): Trade;
    fromPartial(object: Partial<Trade>): Trade;
    fromAmino(object: TradeAmino): Trade;
    toAmino(message: Trade): TradeAmino;
    fromAminoMsg(object: TradeAminoMsg): Trade;
    toAminoMsg(message: Trade): TradeAminoMsg;
    fromProtoMsg(message: TradeProtoMsg): Trade;
    toProto(message: Trade): Uint8Array;
    toProtoMsg(message: Trade): TradeProtoMsg;
};
export declare const RouteStatistics: {
    typeUrl: string;
    encode(message: RouteStatistics, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): RouteStatistics;
    fromPartial(object: Partial<RouteStatistics>): RouteStatistics;
    fromAmino(object: RouteStatisticsAmino): RouteStatistics;
    toAmino(message: RouteStatistics): RouteStatisticsAmino;
    fromAminoMsg(object: RouteStatisticsAminoMsg): RouteStatistics;
    toAminoMsg(message: RouteStatistics): RouteStatisticsAminoMsg;
    fromProtoMsg(message: RouteStatisticsProtoMsg): RouteStatistics;
    toProto(message: RouteStatistics): Uint8Array;
    toProtoMsg(message: RouteStatistics): RouteStatisticsProtoMsg;
};
export declare const PoolWeights: {
    typeUrl: string;
    encode(message: PoolWeights, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): PoolWeights;
    fromPartial(object: Partial<PoolWeights>): PoolWeights;
    fromAmino(object: PoolWeightsAmino): PoolWeights;
    toAmino(message: PoolWeights): PoolWeightsAmino;
    fromAminoMsg(object: PoolWeightsAminoMsg): PoolWeights;
    toAminoMsg(message: PoolWeights): PoolWeightsAminoMsg;
    fromProtoMsg(message: PoolWeightsProtoMsg): PoolWeights;
    toProto(message: PoolWeights): Uint8Array;
    toProtoMsg(message: PoolWeights): PoolWeightsProtoMsg;
};
export declare const InfoByPoolType: {
    typeUrl: string;
    encode(message: InfoByPoolType, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): InfoByPoolType;
    fromPartial(object: Partial<InfoByPoolType>): InfoByPoolType;
    fromAmino(object: InfoByPoolTypeAmino): InfoByPoolType;
    toAmino(message: InfoByPoolType): InfoByPoolTypeAmino;
    fromAminoMsg(object: InfoByPoolTypeAminoMsg): InfoByPoolType;
    toAminoMsg(message: InfoByPoolType): InfoByPoolTypeAminoMsg;
    fromProtoMsg(message: InfoByPoolTypeProtoMsg): InfoByPoolType;
    toProto(message: InfoByPoolType): Uint8Array;
    toProtoMsg(message: InfoByPoolType): InfoByPoolTypeProtoMsg;
};
export declare const StablePoolInfo: {
    typeUrl: string;
    encode(message: StablePoolInfo, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): StablePoolInfo;
    fromPartial(object: Partial<StablePoolInfo>): StablePoolInfo;
    fromAmino(object: StablePoolInfoAmino): StablePoolInfo;
    toAmino(message: StablePoolInfo): StablePoolInfoAmino;
    fromAminoMsg(object: StablePoolInfoAminoMsg): StablePoolInfo;
    toAminoMsg(message: StablePoolInfo): StablePoolInfoAminoMsg;
    fromProtoMsg(message: StablePoolInfoProtoMsg): StablePoolInfo;
    toProto(message: StablePoolInfo): Uint8Array;
    toProtoMsg(message: StablePoolInfo): StablePoolInfoProtoMsg;
};
export declare const BalancerPoolInfo: {
    typeUrl: string;
    encode(message: BalancerPoolInfo, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): BalancerPoolInfo;
    fromPartial(object: Partial<BalancerPoolInfo>): BalancerPoolInfo;
    fromAmino(object: BalancerPoolInfoAmino): BalancerPoolInfo;
    toAmino(message: BalancerPoolInfo): BalancerPoolInfoAmino;
    fromAminoMsg(object: BalancerPoolInfoAminoMsg): BalancerPoolInfo;
    toAminoMsg(message: BalancerPoolInfo): BalancerPoolInfoAminoMsg;
    fromProtoMsg(message: BalancerPoolInfoProtoMsg): BalancerPoolInfo;
    toProto(message: BalancerPoolInfo): Uint8Array;
    toProtoMsg(message: BalancerPoolInfo): BalancerPoolInfoProtoMsg;
};
export declare const ConcentratedPoolInfo: {
    typeUrl: string;
    encode(message: ConcentratedPoolInfo, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): ConcentratedPoolInfo;
    fromPartial(object: Partial<ConcentratedPoolInfo>): ConcentratedPoolInfo;
    fromAmino(object: ConcentratedPoolInfoAmino): ConcentratedPoolInfo;
    toAmino(message: ConcentratedPoolInfo): ConcentratedPoolInfoAmino;
    fromAminoMsg(object: ConcentratedPoolInfoAminoMsg): ConcentratedPoolInfo;
    toAminoMsg(message: ConcentratedPoolInfo): ConcentratedPoolInfoAminoMsg;
    fromProtoMsg(message: ConcentratedPoolInfoProtoMsg): ConcentratedPoolInfo;
    toProto(message: ConcentratedPoolInfo): Uint8Array;
    toProtoMsg(message: ConcentratedPoolInfo): ConcentratedPoolInfoProtoMsg;
};
export declare const CosmwasmPoolInfo: {
    typeUrl: string;
    encode(message: CosmwasmPoolInfo, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): CosmwasmPoolInfo;
    fromPartial(object: Partial<CosmwasmPoolInfo>): CosmwasmPoolInfo;
    fromAmino(object: CosmwasmPoolInfoAmino): CosmwasmPoolInfo;
    toAmino(message: CosmwasmPoolInfo): CosmwasmPoolInfoAmino;
    fromAminoMsg(object: CosmwasmPoolInfoAminoMsg): CosmwasmPoolInfo;
    toAminoMsg(message: CosmwasmPoolInfo): CosmwasmPoolInfoAminoMsg;
    fromProtoMsg(message: CosmwasmPoolInfoProtoMsg): CosmwasmPoolInfo;
    toProto(message: CosmwasmPoolInfo): Uint8Array;
    toProtoMsg(message: CosmwasmPoolInfo): CosmwasmPoolInfoProtoMsg;
};
export declare const WeightMap: {
    typeUrl: string;
    encode(message: WeightMap, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): WeightMap;
    fromPartial(object: Partial<WeightMap>): WeightMap;
    fromAmino(object: WeightMapAmino): WeightMap;
    toAmino(message: WeightMap): WeightMapAmino;
    fromAminoMsg(object: WeightMapAminoMsg): WeightMap;
    toAminoMsg(message: WeightMap): WeightMapAminoMsg;
    fromProtoMsg(message: WeightMapProtoMsg): WeightMap;
    toProto(message: WeightMap): Uint8Array;
    toProtoMsg(message: WeightMap): WeightMapProtoMsg;
};
export declare const BaseDenom: {
    typeUrl: string;
    encode(message: BaseDenom, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): BaseDenom;
    fromPartial(object: Partial<BaseDenom>): BaseDenom;
    fromAmino(object: BaseDenomAmino): BaseDenom;
    toAmino(message: BaseDenom): BaseDenomAmino;
    fromAminoMsg(object: BaseDenomAminoMsg): BaseDenom;
    toAminoMsg(message: BaseDenom): BaseDenomAminoMsg;
    fromProtoMsg(message: BaseDenomProtoMsg): BaseDenom;
    toProto(message: BaseDenom): Uint8Array;
    toProtoMsg(message: BaseDenom): BaseDenomProtoMsg;
};
export declare const AllProtocolRevenue: {
    typeUrl: string;
    encode(message: AllProtocolRevenue, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): AllProtocolRevenue;
    fromPartial(object: Partial<AllProtocolRevenue>): AllProtocolRevenue;
    fromAmino(object: AllProtocolRevenueAmino): AllProtocolRevenue;
    toAmino(message: AllProtocolRevenue): AllProtocolRevenueAmino;
    fromAminoMsg(object: AllProtocolRevenueAminoMsg): AllProtocolRevenue;
    toAminoMsg(message: AllProtocolRevenue): AllProtocolRevenueAminoMsg;
    fromProtoMsg(message: AllProtocolRevenueProtoMsg): AllProtocolRevenue;
    toProto(message: AllProtocolRevenue): Uint8Array;
    toProtoMsg(message: AllProtocolRevenue): AllProtocolRevenueProtoMsg;
};
export declare const CyclicArbTracker: {
    typeUrl: string;
    encode(message: CyclicArbTracker, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): CyclicArbTracker;
    fromPartial(object: Partial<CyclicArbTracker>): CyclicArbTracker;
    fromAmino(object: CyclicArbTrackerAmino): CyclicArbTracker;
    toAmino(message: CyclicArbTracker): CyclicArbTrackerAmino;
    fromAminoMsg(object: CyclicArbTrackerAminoMsg): CyclicArbTracker;
    toAminoMsg(message: CyclicArbTracker): CyclicArbTrackerAminoMsg;
    fromProtoMsg(message: CyclicArbTrackerProtoMsg): CyclicArbTracker;
    toProto(message: CyclicArbTracker): Uint8Array;
    toProtoMsg(message: CyclicArbTracker): CyclicArbTrackerProtoMsg;
};
