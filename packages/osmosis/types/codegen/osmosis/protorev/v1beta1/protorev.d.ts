import { Coin, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { Long } from "../../../helpers";
import * as _m0 from "protobufjs/minimal";
/** TokenPairArbRoutes tracks all of the hot routes for a given pair of tokens */
export interface TokenPairArbRoutes {
    /** Stores all of the possible hot paths for a given pair of tokens */
    arbRoutes: Route[];
    /** Token denomination of the first asset */
    tokenIn: string;
    /** Token denomination of the second asset */
    tokenOut: string;
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
     * The pool IDs that are travered in the directed cyclic graph (traversed left
     * -> right)
     */
    trades: Trade[];
    /**
     * The step size that will be used to find the optimal swap amount in the
     * binary search
     */
    stepSize: string;
}
/** Route is a hot route for a given pair of tokens */
export interface RouteSDKType {
    trades: TradeSDKType[];
    step_size: string;
}
/** Trade is a single trade in a route */
export interface Trade {
    /** The pool id of the pool that is traded on */
    pool: Long;
    /** The denom of the token that is traded */
    tokenIn: string;
    /** The denom of the token that is received */
    tokenOut: string;
}
/** Trade is a single trade in a route */
export interface TradeSDKType {
    pool: Long;
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
    route: Long[];
}
/**
 * RouteStatistics contains the number of trades the module has executed after a
 * swap on a given route and the profits from the trades
 */
export interface RouteStatisticsSDKType {
    profits: CoinSDKType[];
    number_of_trades: string;
    route: Long[];
}
/**
 * PoolWeights contains the weights of all of the different pool types. This
 * distinction is made and necessary because the execution time ranges
 * significantly between the different pool types. Each weight roughly
 * corresponds to the amount of time (in ms) it takes to execute a swap on that
 * pool type.
 */
export interface PoolWeights {
    /** The weight of a stableswap pool */
    stableWeight: Long;
    /** The weight of a balancer pool */
    balancerWeight: Long;
    /** The weight of a concentrated pool */
    concentratedWeight: Long;
}
/**
 * PoolWeights contains the weights of all of the different pool types. This
 * distinction is made and necessary because the execution time ranges
 * significantly between the different pool types. Each weight roughly
 * corresponds to the amount of time (in ms) it takes to execute a swap on that
 * pool type.
 */
export interface PoolWeightsSDKType {
    stable_weight: Long;
    balancer_weight: Long;
    concentrated_weight: Long;
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
/**
 * BaseDenom represents a single base denom that the module uses for its
 * arbitrage trades. It contains the denom name alongside the step size of the
 * binary search that is used to find the optimal swap amount
 */
export interface BaseDenomSDKType {
    denom: string;
    step_size: string;
}
export declare const TokenPairArbRoutes: {
    encode(message: TokenPairArbRoutes, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): TokenPairArbRoutes;
    fromPartial(object: Partial<TokenPairArbRoutes>): TokenPairArbRoutes;
};
export declare const Route: {
    encode(message: Route, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): Route;
    fromPartial(object: Partial<Route>): Route;
};
export declare const Trade: {
    encode(message: Trade, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): Trade;
    fromPartial(object: Partial<Trade>): Trade;
};
export declare const RouteStatistics: {
    encode(message: RouteStatistics, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): RouteStatistics;
    fromPartial(object: Partial<RouteStatistics>): RouteStatistics;
};
export declare const PoolWeights: {
    encode(message: PoolWeights, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): PoolWeights;
    fromPartial(object: Partial<PoolWeights>): PoolWeights;
};
export declare const BaseDenom: {
    encode(message: BaseDenom, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): BaseDenom;
    fromPartial(object: Partial<BaseDenom>): BaseDenom;
};
