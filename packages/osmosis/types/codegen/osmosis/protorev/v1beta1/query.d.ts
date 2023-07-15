import { Params, ParamsSDKType } from "./params";
import { Coin, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { RouteStatistics, RouteStatisticsSDKType, TokenPairArbRoutes, TokenPairArbRoutesSDKType, PoolWeights, PoolWeightsSDKType, BaseDenom, BaseDenomSDKType } from "./protorev";
import { Long } from "../../../helpers";
import * as _m0 from "protobufjs/minimal";
/** QueryParamsRequest is request type for the Query/Params RPC method. */
export interface QueryParamsRequest {
}
/** QueryParamsRequest is request type for the Query/Params RPC method. */
export interface QueryParamsRequestSDKType {
}
/** QueryParamsResponse is response type for the Query/Params RPC method. */
export interface QueryParamsResponse {
    /** params holds all the parameters of this module. */
    params?: Params;
}
/** QueryParamsResponse is response type for the Query/Params RPC method. */
export interface QueryParamsResponseSDKType {
    params?: ParamsSDKType;
}
/**
 * QueryGetProtoRevNumberOfTradesRequest is request type for the
 * Query/GetProtoRevNumberOfTrades RPC method.
 */
export interface QueryGetProtoRevNumberOfTradesRequest {
}
/**
 * QueryGetProtoRevNumberOfTradesRequest is request type for the
 * Query/GetProtoRevNumberOfTrades RPC method.
 */
export interface QueryGetProtoRevNumberOfTradesRequestSDKType {
}
/**
 * QueryGetProtoRevNumberOfTradesResponse is response type for the
 * Query/GetProtoRevNumberOfTrades RPC method.
 */
export interface QueryGetProtoRevNumberOfTradesResponse {
    /** number_of_trades is the number of trades the module has executed */
    numberOfTrades: string;
}
/**
 * QueryGetProtoRevNumberOfTradesResponse is response type for the
 * Query/GetProtoRevNumberOfTrades RPC method.
 */
export interface QueryGetProtoRevNumberOfTradesResponseSDKType {
    number_of_trades: string;
}
/**
 * QueryGetProtoRevProfitsByDenomRequest is request type for the
 * Query/GetProtoRevProfitsByDenom RPC method.
 */
export interface QueryGetProtoRevProfitsByDenomRequest {
    /** denom is the denom to query profits by */
    denom: string;
}
/**
 * QueryGetProtoRevProfitsByDenomRequest is request type for the
 * Query/GetProtoRevProfitsByDenom RPC method.
 */
export interface QueryGetProtoRevProfitsByDenomRequestSDKType {
    denom: string;
}
/**
 * QueryGetProtoRevProfitsByDenomResponse is response type for the
 * Query/GetProtoRevProfitsByDenom RPC method.
 */
export interface QueryGetProtoRevProfitsByDenomResponse {
    /** profit is the profits of the module by the selected denom */
    profit?: Coin;
}
/**
 * QueryGetProtoRevProfitsByDenomResponse is response type for the
 * Query/GetProtoRevProfitsByDenom RPC method.
 */
export interface QueryGetProtoRevProfitsByDenomResponseSDKType {
    profit?: CoinSDKType;
}
/**
 * QueryGetProtoRevAllProfitsRequest is request type for the
 * Query/GetProtoRevAllProfits RPC method.
 */
export interface QueryGetProtoRevAllProfitsRequest {
}
/**
 * QueryGetProtoRevAllProfitsRequest is request type for the
 * Query/GetProtoRevAllProfits RPC method.
 */
export interface QueryGetProtoRevAllProfitsRequestSDKType {
}
/**
 * QueryGetProtoRevAllProfitsResponse is response type for the
 * Query/GetProtoRevAllProfits RPC method.
 */
export interface QueryGetProtoRevAllProfitsResponse {
    /** profits is a list of all of the profits from the module */
    profits: Coin[];
}
/**
 * QueryGetProtoRevAllProfitsResponse is response type for the
 * Query/GetProtoRevAllProfits RPC method.
 */
export interface QueryGetProtoRevAllProfitsResponseSDKType {
    profits: CoinSDKType[];
}
/**
 * QueryGetProtoRevStatisticsByPoolRequest is request type for the
 * Query/GetProtoRevStatisticsByRoute RPC method.
 */
export interface QueryGetProtoRevStatisticsByRouteRequest {
    /** route is the set of pool ids to query statistics by i.e. 1,2,3 */
    route: Long[];
}
/**
 * QueryGetProtoRevStatisticsByPoolRequest is request type for the
 * Query/GetProtoRevStatisticsByRoute RPC method.
 */
export interface QueryGetProtoRevStatisticsByRouteRequestSDKType {
    route: Long[];
}
/**
 * QueryGetProtoRevStatisticsByRouteResponse is response type for the
 * Query/GetProtoRevStatisticsByRoute RPC method.
 */
export interface QueryGetProtoRevStatisticsByRouteResponse {
    /**
     * statistics contains the number of trades the module has executed after a
     * swap on a given pool and the profits from the trades
     */
    statistics?: RouteStatistics;
}
/**
 * QueryGetProtoRevStatisticsByRouteResponse is response type for the
 * Query/GetProtoRevStatisticsByRoute RPC method.
 */
export interface QueryGetProtoRevStatisticsByRouteResponseSDKType {
    statistics?: RouteStatisticsSDKType;
}
/**
 * QueryGetProtoRevAllRouteStatisticsRequest is request type for the
 * Query/GetProtoRevAllRouteStatistics RPC method.
 */
export interface QueryGetProtoRevAllRouteStatisticsRequest {
}
/**
 * QueryGetProtoRevAllRouteStatisticsRequest is request type for the
 * Query/GetProtoRevAllRouteStatistics RPC method.
 */
export interface QueryGetProtoRevAllRouteStatisticsRequestSDKType {
}
/**
 * QueryGetProtoRevAllRouteStatisticsResponse is response type for the
 * Query/GetProtoRevAllRouteStatistics RPC method.
 */
export interface QueryGetProtoRevAllRouteStatisticsResponse {
    /**
     * statistics contains the number of trades/profits the module has executed on
     * all routes it has successfully executed a trade on
     */
    statistics: RouteStatistics[];
}
/**
 * QueryGetProtoRevAllRouteStatisticsResponse is response type for the
 * Query/GetProtoRevAllRouteStatistics RPC method.
 */
export interface QueryGetProtoRevAllRouteStatisticsResponseSDKType {
    statistics: RouteStatisticsSDKType[];
}
/**
 * QueryGetProtoRevTokenPairArbRoutesRequest is request type for the
 * Query/GetProtoRevTokenPairArbRoutes RPC method.
 */
export interface QueryGetProtoRevTokenPairArbRoutesRequest {
}
/**
 * QueryGetProtoRevTokenPairArbRoutesRequest is request type for the
 * Query/GetProtoRevTokenPairArbRoutes RPC method.
 */
export interface QueryGetProtoRevTokenPairArbRoutesRequestSDKType {
}
/**
 * QueryGetProtoRevTokenPairArbRoutesResponse is response type for the
 * Query/GetProtoRevTokenPairArbRoutes RPC method.
 */
export interface QueryGetProtoRevTokenPairArbRoutesResponse {
    /**
     * routes is a list of all of the hot routes that the module is currently
     * arbitraging
     */
    routes: TokenPairArbRoutes[];
}
/**
 * QueryGetProtoRevTokenPairArbRoutesResponse is response type for the
 * Query/GetProtoRevTokenPairArbRoutes RPC method.
 */
export interface QueryGetProtoRevTokenPairArbRoutesResponseSDKType {
    routes: TokenPairArbRoutesSDKType[];
}
/**
 * QueryGetProtoRevAdminAccountRequest is request type for the
 * Query/GetProtoRevAdminAccount RPC method.
 */
export interface QueryGetProtoRevAdminAccountRequest {
}
/**
 * QueryGetProtoRevAdminAccountRequest is request type for the
 * Query/GetProtoRevAdminAccount RPC method.
 */
export interface QueryGetProtoRevAdminAccountRequestSDKType {
}
/**
 * QueryGetProtoRevAdminAccountResponse is response type for the
 * Query/GetProtoRevAdminAccount RPC method.
 */
export interface QueryGetProtoRevAdminAccountResponse {
    /** admin_account is the admin account of the module */
    adminAccount: string;
}
/**
 * QueryGetProtoRevAdminAccountResponse is response type for the
 * Query/GetProtoRevAdminAccount RPC method.
 */
export interface QueryGetProtoRevAdminAccountResponseSDKType {
    admin_account: string;
}
/**
 * QueryGetProtoRevDeveloperAccountRequest is request type for the
 * Query/GetProtoRevDeveloperAccount RPC method.
 */
export interface QueryGetProtoRevDeveloperAccountRequest {
}
/**
 * QueryGetProtoRevDeveloperAccountRequest is request type for the
 * Query/GetProtoRevDeveloperAccount RPC method.
 */
export interface QueryGetProtoRevDeveloperAccountRequestSDKType {
}
/**
 * QueryGetProtoRevDeveloperAccountResponse is response type for the
 * Query/GetProtoRevDeveloperAccount RPC method.
 */
export interface QueryGetProtoRevDeveloperAccountResponse {
    /** developer_account is the developer account of the module */
    developerAccount: string;
}
/**
 * QueryGetProtoRevDeveloperAccountResponse is response type for the
 * Query/GetProtoRevDeveloperAccount RPC method.
 */
export interface QueryGetProtoRevDeveloperAccountResponseSDKType {
    developer_account: string;
}
/**
 * QueryGetProtoRevPoolWeightsRequest is request type for the
 * Query/GetProtoRevPoolWeights RPC method.
 */
export interface QueryGetProtoRevPoolWeightsRequest {
}
/**
 * QueryGetProtoRevPoolWeightsRequest is request type for the
 * Query/GetProtoRevPoolWeights RPC method.
 */
export interface QueryGetProtoRevPoolWeightsRequestSDKType {
}
/**
 * QueryGetProtoRevPoolWeightsResponse is response type for the
 * Query/GetProtoRevPoolWeights RPC method.
 */
export interface QueryGetProtoRevPoolWeightsResponse {
    /** pool_weights is a list of all of the pool weights */
    poolWeights?: PoolWeights;
}
/**
 * QueryGetProtoRevPoolWeightsResponse is response type for the
 * Query/GetProtoRevPoolWeights RPC method.
 */
export interface QueryGetProtoRevPoolWeightsResponseSDKType {
    pool_weights?: PoolWeightsSDKType;
}
/**
 * QueryGetProtoRevMaxPoolPointsPerBlockRequest is request type for the
 * Query/GetProtoRevMaxPoolPointsPerBlock RPC method.
 */
export interface QueryGetProtoRevMaxPoolPointsPerBlockRequest {
}
/**
 * QueryGetProtoRevMaxPoolPointsPerBlockRequest is request type for the
 * Query/GetProtoRevMaxPoolPointsPerBlock RPC method.
 */
export interface QueryGetProtoRevMaxPoolPointsPerBlockRequestSDKType {
}
/**
 * QueryGetProtoRevMaxPoolPointsPerBlockResponse is response type for the
 * Query/GetProtoRevMaxPoolPointsPerBlock RPC method.
 */
export interface QueryGetProtoRevMaxPoolPointsPerBlockResponse {
    /**
     * max_pool_points_per_block is the maximum number of pool points that can be
     * consumed per block
     */
    maxPoolPointsPerBlock: Long;
}
/**
 * QueryGetProtoRevMaxPoolPointsPerBlockResponse is response type for the
 * Query/GetProtoRevMaxPoolPointsPerBlock RPC method.
 */
export interface QueryGetProtoRevMaxPoolPointsPerBlockResponseSDKType {
    max_pool_points_per_block: Long;
}
/**
 * QueryGetProtoRevMaxPoolPointsPerTxRequest is request type for the
 * Query/GetProtoRevMaxPoolPointsPerTx RPC method.
 */
export interface QueryGetProtoRevMaxPoolPointsPerTxRequest {
}
/**
 * QueryGetProtoRevMaxPoolPointsPerTxRequest is request type for the
 * Query/GetProtoRevMaxPoolPointsPerTx RPC method.
 */
export interface QueryGetProtoRevMaxPoolPointsPerTxRequestSDKType {
}
/**
 * QueryGetProtoRevMaxPoolPointsPerTxResponse is response type for the
 * Query/GetProtoRevMaxPoolPointsPerTx RPC method.
 */
export interface QueryGetProtoRevMaxPoolPointsPerTxResponse {
    /**
     * max_pool_points_per_tx is the maximum number of pool points that can be
     * consumed per transaction
     */
    maxPoolPointsPerTx: Long;
}
/**
 * QueryGetProtoRevMaxPoolPointsPerTxResponse is response type for the
 * Query/GetProtoRevMaxPoolPointsPerTx RPC method.
 */
export interface QueryGetProtoRevMaxPoolPointsPerTxResponseSDKType {
    max_pool_points_per_tx: Long;
}
/**
 * QueryGetProtoRevBaseDenomsRequest is request type for the
 * Query/GetProtoRevBaseDenoms RPC method.
 */
export interface QueryGetProtoRevBaseDenomsRequest {
}
/**
 * QueryGetProtoRevBaseDenomsRequest is request type for the
 * Query/GetProtoRevBaseDenoms RPC method.
 */
export interface QueryGetProtoRevBaseDenomsRequestSDKType {
}
/**
 * QueryGetProtoRevBaseDenomsResponse is response type for the
 * Query/GetProtoRevBaseDenoms RPC method.
 */
export interface QueryGetProtoRevBaseDenomsResponse {
    /** base_denoms is a list of all of the base denoms and step sizes */
    baseDenoms: BaseDenom[];
}
/**
 * QueryGetProtoRevBaseDenomsResponse is response type for the
 * Query/GetProtoRevBaseDenoms RPC method.
 */
export interface QueryGetProtoRevBaseDenomsResponseSDKType {
    base_denoms: BaseDenomSDKType[];
}
/**
 * QueryGetProtoRevEnabledRequest is request type for the
 * Query/GetProtoRevEnabled RPC method.
 */
export interface QueryGetProtoRevEnabledRequest {
}
/**
 * QueryGetProtoRevEnabledRequest is request type for the
 * Query/GetProtoRevEnabled RPC method.
 */
export interface QueryGetProtoRevEnabledRequestSDKType {
}
/**
 * QueryGetProtoRevEnabledResponse is response type for the
 * Query/GetProtoRevEnabled RPC method.
 */
export interface QueryGetProtoRevEnabledResponse {
    /** enabled is whether the module is enabled */
    enabled: boolean;
}
/**
 * QueryGetProtoRevEnabledResponse is response type for the
 * Query/GetProtoRevEnabled RPC method.
 */
export interface QueryGetProtoRevEnabledResponseSDKType {
    enabled: boolean;
}
/**
 * QueryGetProtoRevPoolRequest is request type for the
 * Query/GetProtoRevPool RPC method.
 */
export interface QueryGetProtoRevPoolRequest {
    /**
     * base_denom is the base denom set in protorev for the denom pair to pool
     * mapping
     */
    baseDenom: string;
    /** other_denom is the other denom for the denom pair to pool mapping */
    otherDenom: string;
}
/**
 * QueryGetProtoRevPoolRequest is request type for the
 * Query/GetProtoRevPool RPC method.
 */
export interface QueryGetProtoRevPoolRequestSDKType {
    base_denom: string;
    other_denom: string;
}
/**
 * QueryGetProtoRevPoolResponse is response type for the
 * Query/GetProtoRevPool RPC method.
 */
export interface QueryGetProtoRevPoolResponse {
    /** pool_id is the pool_id stored for the denom pair */
    poolId: Long;
}
/**
 * QueryGetProtoRevPoolResponse is response type for the
 * Query/GetProtoRevPool RPC method.
 */
export interface QueryGetProtoRevPoolResponseSDKType {
    pool_id: Long;
}
export declare const QueryParamsRequest: {
    encode(_: QueryParamsRequest, writer?: _m0.Writer): _m0.Writer;
    fromJSON(_: any): QueryParamsRequest;
    fromPartial(_: Partial<QueryParamsRequest>): QueryParamsRequest;
};
export declare const QueryParamsResponse: {
    encode(message: QueryParamsResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): QueryParamsResponse;
    fromPartial(object: Partial<QueryParamsResponse>): QueryParamsResponse;
};
export declare const QueryGetProtoRevNumberOfTradesRequest: {
    encode(_: QueryGetProtoRevNumberOfTradesRequest, writer?: _m0.Writer): _m0.Writer;
    fromJSON(_: any): QueryGetProtoRevNumberOfTradesRequest;
    fromPartial(_: Partial<QueryGetProtoRevNumberOfTradesRequest>): QueryGetProtoRevNumberOfTradesRequest;
};
export declare const QueryGetProtoRevNumberOfTradesResponse: {
    encode(message: QueryGetProtoRevNumberOfTradesResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): QueryGetProtoRevNumberOfTradesResponse;
    fromPartial(object: Partial<QueryGetProtoRevNumberOfTradesResponse>): QueryGetProtoRevNumberOfTradesResponse;
};
export declare const QueryGetProtoRevProfitsByDenomRequest: {
    encode(message: QueryGetProtoRevProfitsByDenomRequest, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): QueryGetProtoRevProfitsByDenomRequest;
    fromPartial(object: Partial<QueryGetProtoRevProfitsByDenomRequest>): QueryGetProtoRevProfitsByDenomRequest;
};
export declare const QueryGetProtoRevProfitsByDenomResponse: {
    encode(message: QueryGetProtoRevProfitsByDenomResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): QueryGetProtoRevProfitsByDenomResponse;
    fromPartial(object: Partial<QueryGetProtoRevProfitsByDenomResponse>): QueryGetProtoRevProfitsByDenomResponse;
};
export declare const QueryGetProtoRevAllProfitsRequest: {
    encode(_: QueryGetProtoRevAllProfitsRequest, writer?: _m0.Writer): _m0.Writer;
    fromJSON(_: any): QueryGetProtoRevAllProfitsRequest;
    fromPartial(_: Partial<QueryGetProtoRevAllProfitsRequest>): QueryGetProtoRevAllProfitsRequest;
};
export declare const QueryGetProtoRevAllProfitsResponse: {
    encode(message: QueryGetProtoRevAllProfitsResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): QueryGetProtoRevAllProfitsResponse;
    fromPartial(object: Partial<QueryGetProtoRevAllProfitsResponse>): QueryGetProtoRevAllProfitsResponse;
};
export declare const QueryGetProtoRevStatisticsByRouteRequest: {
    encode(message: QueryGetProtoRevStatisticsByRouteRequest, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): QueryGetProtoRevStatisticsByRouteRequest;
    fromPartial(object: Partial<QueryGetProtoRevStatisticsByRouteRequest>): QueryGetProtoRevStatisticsByRouteRequest;
};
export declare const QueryGetProtoRevStatisticsByRouteResponse: {
    encode(message: QueryGetProtoRevStatisticsByRouteResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): QueryGetProtoRevStatisticsByRouteResponse;
    fromPartial(object: Partial<QueryGetProtoRevStatisticsByRouteResponse>): QueryGetProtoRevStatisticsByRouteResponse;
};
export declare const QueryGetProtoRevAllRouteStatisticsRequest: {
    encode(_: QueryGetProtoRevAllRouteStatisticsRequest, writer?: _m0.Writer): _m0.Writer;
    fromJSON(_: any): QueryGetProtoRevAllRouteStatisticsRequest;
    fromPartial(_: Partial<QueryGetProtoRevAllRouteStatisticsRequest>): QueryGetProtoRevAllRouteStatisticsRequest;
};
export declare const QueryGetProtoRevAllRouteStatisticsResponse: {
    encode(message: QueryGetProtoRevAllRouteStatisticsResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): QueryGetProtoRevAllRouteStatisticsResponse;
    fromPartial(object: Partial<QueryGetProtoRevAllRouteStatisticsResponse>): QueryGetProtoRevAllRouteStatisticsResponse;
};
export declare const QueryGetProtoRevTokenPairArbRoutesRequest: {
    encode(_: QueryGetProtoRevTokenPairArbRoutesRequest, writer?: _m0.Writer): _m0.Writer;
    fromJSON(_: any): QueryGetProtoRevTokenPairArbRoutesRequest;
    fromPartial(_: Partial<QueryGetProtoRevTokenPairArbRoutesRequest>): QueryGetProtoRevTokenPairArbRoutesRequest;
};
export declare const QueryGetProtoRevTokenPairArbRoutesResponse: {
    encode(message: QueryGetProtoRevTokenPairArbRoutesResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): QueryGetProtoRevTokenPairArbRoutesResponse;
    fromPartial(object: Partial<QueryGetProtoRevTokenPairArbRoutesResponse>): QueryGetProtoRevTokenPairArbRoutesResponse;
};
export declare const QueryGetProtoRevAdminAccountRequest: {
    encode(_: QueryGetProtoRevAdminAccountRequest, writer?: _m0.Writer): _m0.Writer;
    fromJSON(_: any): QueryGetProtoRevAdminAccountRequest;
    fromPartial(_: Partial<QueryGetProtoRevAdminAccountRequest>): QueryGetProtoRevAdminAccountRequest;
};
export declare const QueryGetProtoRevAdminAccountResponse: {
    encode(message: QueryGetProtoRevAdminAccountResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): QueryGetProtoRevAdminAccountResponse;
    fromPartial(object: Partial<QueryGetProtoRevAdminAccountResponse>): QueryGetProtoRevAdminAccountResponse;
};
export declare const QueryGetProtoRevDeveloperAccountRequest: {
    encode(_: QueryGetProtoRevDeveloperAccountRequest, writer?: _m0.Writer): _m0.Writer;
    fromJSON(_: any): QueryGetProtoRevDeveloperAccountRequest;
    fromPartial(_: Partial<QueryGetProtoRevDeveloperAccountRequest>): QueryGetProtoRevDeveloperAccountRequest;
};
export declare const QueryGetProtoRevDeveloperAccountResponse: {
    encode(message: QueryGetProtoRevDeveloperAccountResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): QueryGetProtoRevDeveloperAccountResponse;
    fromPartial(object: Partial<QueryGetProtoRevDeveloperAccountResponse>): QueryGetProtoRevDeveloperAccountResponse;
};
export declare const QueryGetProtoRevPoolWeightsRequest: {
    encode(_: QueryGetProtoRevPoolWeightsRequest, writer?: _m0.Writer): _m0.Writer;
    fromJSON(_: any): QueryGetProtoRevPoolWeightsRequest;
    fromPartial(_: Partial<QueryGetProtoRevPoolWeightsRequest>): QueryGetProtoRevPoolWeightsRequest;
};
export declare const QueryGetProtoRevPoolWeightsResponse: {
    encode(message: QueryGetProtoRevPoolWeightsResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): QueryGetProtoRevPoolWeightsResponse;
    fromPartial(object: Partial<QueryGetProtoRevPoolWeightsResponse>): QueryGetProtoRevPoolWeightsResponse;
};
export declare const QueryGetProtoRevMaxPoolPointsPerBlockRequest: {
    encode(_: QueryGetProtoRevMaxPoolPointsPerBlockRequest, writer?: _m0.Writer): _m0.Writer;
    fromJSON(_: any): QueryGetProtoRevMaxPoolPointsPerBlockRequest;
    fromPartial(_: Partial<QueryGetProtoRevMaxPoolPointsPerBlockRequest>): QueryGetProtoRevMaxPoolPointsPerBlockRequest;
};
export declare const QueryGetProtoRevMaxPoolPointsPerBlockResponse: {
    encode(message: QueryGetProtoRevMaxPoolPointsPerBlockResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): QueryGetProtoRevMaxPoolPointsPerBlockResponse;
    fromPartial(object: Partial<QueryGetProtoRevMaxPoolPointsPerBlockResponse>): QueryGetProtoRevMaxPoolPointsPerBlockResponse;
};
export declare const QueryGetProtoRevMaxPoolPointsPerTxRequest: {
    encode(_: QueryGetProtoRevMaxPoolPointsPerTxRequest, writer?: _m0.Writer): _m0.Writer;
    fromJSON(_: any): QueryGetProtoRevMaxPoolPointsPerTxRequest;
    fromPartial(_: Partial<QueryGetProtoRevMaxPoolPointsPerTxRequest>): QueryGetProtoRevMaxPoolPointsPerTxRequest;
};
export declare const QueryGetProtoRevMaxPoolPointsPerTxResponse: {
    encode(message: QueryGetProtoRevMaxPoolPointsPerTxResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): QueryGetProtoRevMaxPoolPointsPerTxResponse;
    fromPartial(object: Partial<QueryGetProtoRevMaxPoolPointsPerTxResponse>): QueryGetProtoRevMaxPoolPointsPerTxResponse;
};
export declare const QueryGetProtoRevBaseDenomsRequest: {
    encode(_: QueryGetProtoRevBaseDenomsRequest, writer?: _m0.Writer): _m0.Writer;
    fromJSON(_: any): QueryGetProtoRevBaseDenomsRequest;
    fromPartial(_: Partial<QueryGetProtoRevBaseDenomsRequest>): QueryGetProtoRevBaseDenomsRequest;
};
export declare const QueryGetProtoRevBaseDenomsResponse: {
    encode(message: QueryGetProtoRevBaseDenomsResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): QueryGetProtoRevBaseDenomsResponse;
    fromPartial(object: Partial<QueryGetProtoRevBaseDenomsResponse>): QueryGetProtoRevBaseDenomsResponse;
};
export declare const QueryGetProtoRevEnabledRequest: {
    encode(_: QueryGetProtoRevEnabledRequest, writer?: _m0.Writer): _m0.Writer;
    fromJSON(_: any): QueryGetProtoRevEnabledRequest;
    fromPartial(_: Partial<QueryGetProtoRevEnabledRequest>): QueryGetProtoRevEnabledRequest;
};
export declare const QueryGetProtoRevEnabledResponse: {
    encode(message: QueryGetProtoRevEnabledResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): QueryGetProtoRevEnabledResponse;
    fromPartial(object: Partial<QueryGetProtoRevEnabledResponse>): QueryGetProtoRevEnabledResponse;
};
export declare const QueryGetProtoRevPoolRequest: {
    encode(message: QueryGetProtoRevPoolRequest, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): QueryGetProtoRevPoolRequest;
    fromPartial(object: Partial<QueryGetProtoRevPoolRequest>): QueryGetProtoRevPoolRequest;
};
export declare const QueryGetProtoRevPoolResponse: {
    encode(message: QueryGetProtoRevPoolResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): QueryGetProtoRevPoolResponse;
    fromPartial(object: Partial<QueryGetProtoRevPoolResponse>): QueryGetProtoRevPoolResponse;
};
