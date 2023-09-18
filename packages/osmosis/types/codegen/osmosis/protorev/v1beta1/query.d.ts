import { Params, ParamsAmino, ParamsSDKType } from "./params";
import { Coin, CoinAmino, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { RouteStatistics, RouteStatisticsAmino, RouteStatisticsSDKType, TokenPairArbRoutes, TokenPairArbRoutesAmino, TokenPairArbRoutesSDKType, InfoByPoolType, InfoByPoolTypeAmino, InfoByPoolTypeSDKType, BaseDenom, BaseDenomAmino, BaseDenomSDKType } from "./protorev";
import { BinaryWriter } from "../../../binary";
/** QueryParamsRequest is request type for the Query/Params RPC method. */
export interface QueryParamsRequest {
}
export interface QueryParamsRequestProtoMsg {
    typeUrl: "/osmosis.protorev.v1beta1.QueryParamsRequest";
    value: Uint8Array;
}
/** QueryParamsRequest is request type for the Query/Params RPC method. */
export interface QueryParamsRequestAmino {
}
export interface QueryParamsRequestAminoMsg {
    type: "osmosis/protorev/query-params-request";
    value: QueryParamsRequestAmino;
}
/** QueryParamsRequest is request type for the Query/Params RPC method. */
export interface QueryParamsRequestSDKType {
}
/** QueryParamsResponse is response type for the Query/Params RPC method. */
export interface QueryParamsResponse {
    /** params holds all the parameters of this module. */
    params: Params;
}
export interface QueryParamsResponseProtoMsg {
    typeUrl: "/osmosis.protorev.v1beta1.QueryParamsResponse";
    value: Uint8Array;
}
/** QueryParamsResponse is response type for the Query/Params RPC method. */
export interface QueryParamsResponseAmino {
    /** params holds all the parameters of this module. */
    params?: ParamsAmino;
}
export interface QueryParamsResponseAminoMsg {
    type: "osmosis/protorev/query-params-response";
    value: QueryParamsResponseAmino;
}
/** QueryParamsResponse is response type for the Query/Params RPC method. */
export interface QueryParamsResponseSDKType {
    params: ParamsSDKType;
}
/**
 * QueryGetProtoRevNumberOfTradesRequest is request type for the
 * Query/GetProtoRevNumberOfTrades RPC method.
 */
export interface QueryGetProtoRevNumberOfTradesRequest {
}
export interface QueryGetProtoRevNumberOfTradesRequestProtoMsg {
    typeUrl: "/osmosis.protorev.v1beta1.QueryGetProtoRevNumberOfTradesRequest";
    value: Uint8Array;
}
/**
 * QueryGetProtoRevNumberOfTradesRequest is request type for the
 * Query/GetProtoRevNumberOfTrades RPC method.
 */
export interface QueryGetProtoRevNumberOfTradesRequestAmino {
}
export interface QueryGetProtoRevNumberOfTradesRequestAminoMsg {
    type: "osmosis/protorev/query-get-proto-rev-number-of-trades-request";
    value: QueryGetProtoRevNumberOfTradesRequestAmino;
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
export interface QueryGetProtoRevNumberOfTradesResponseProtoMsg {
    typeUrl: "/osmosis.protorev.v1beta1.QueryGetProtoRevNumberOfTradesResponse";
    value: Uint8Array;
}
/**
 * QueryGetProtoRevNumberOfTradesResponse is response type for the
 * Query/GetProtoRevNumberOfTrades RPC method.
 */
export interface QueryGetProtoRevNumberOfTradesResponseAmino {
    /** number_of_trades is the number of trades the module has executed */
    number_of_trades: string;
}
export interface QueryGetProtoRevNumberOfTradesResponseAminoMsg {
    type: "osmosis/protorev/query-get-proto-rev-number-of-trades-response";
    value: QueryGetProtoRevNumberOfTradesResponseAmino;
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
export interface QueryGetProtoRevProfitsByDenomRequestProtoMsg {
    typeUrl: "/osmosis.protorev.v1beta1.QueryGetProtoRevProfitsByDenomRequest";
    value: Uint8Array;
}
/**
 * QueryGetProtoRevProfitsByDenomRequest is request type for the
 * Query/GetProtoRevProfitsByDenom RPC method.
 */
export interface QueryGetProtoRevProfitsByDenomRequestAmino {
    /** denom is the denom to query profits by */
    denom: string;
}
export interface QueryGetProtoRevProfitsByDenomRequestAminoMsg {
    type: "osmosis/protorev/query-get-proto-rev-profits-by-denom-request";
    value: QueryGetProtoRevProfitsByDenomRequestAmino;
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
    profit: Coin;
}
export interface QueryGetProtoRevProfitsByDenomResponseProtoMsg {
    typeUrl: "/osmosis.protorev.v1beta1.QueryGetProtoRevProfitsByDenomResponse";
    value: Uint8Array;
}
/**
 * QueryGetProtoRevProfitsByDenomResponse is response type for the
 * Query/GetProtoRevProfitsByDenom RPC method.
 */
export interface QueryGetProtoRevProfitsByDenomResponseAmino {
    /** profit is the profits of the module by the selected denom */
    profit?: CoinAmino;
}
export interface QueryGetProtoRevProfitsByDenomResponseAminoMsg {
    type: "osmosis/protorev/query-get-proto-rev-profits-by-denom-response";
    value: QueryGetProtoRevProfitsByDenomResponseAmino;
}
/**
 * QueryGetProtoRevProfitsByDenomResponse is response type for the
 * Query/GetProtoRevProfitsByDenom RPC method.
 */
export interface QueryGetProtoRevProfitsByDenomResponseSDKType {
    profit: CoinSDKType;
}
/**
 * QueryGetProtoRevAllProfitsRequest is request type for the
 * Query/GetProtoRevAllProfits RPC method.
 */
export interface QueryGetProtoRevAllProfitsRequest {
}
export interface QueryGetProtoRevAllProfitsRequestProtoMsg {
    typeUrl: "/osmosis.protorev.v1beta1.QueryGetProtoRevAllProfitsRequest";
    value: Uint8Array;
}
/**
 * QueryGetProtoRevAllProfitsRequest is request type for the
 * Query/GetProtoRevAllProfits RPC method.
 */
export interface QueryGetProtoRevAllProfitsRequestAmino {
}
export interface QueryGetProtoRevAllProfitsRequestAminoMsg {
    type: "osmosis/protorev/query-get-proto-rev-all-profits-request";
    value: QueryGetProtoRevAllProfitsRequestAmino;
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
export interface QueryGetProtoRevAllProfitsResponseProtoMsg {
    typeUrl: "/osmosis.protorev.v1beta1.QueryGetProtoRevAllProfitsResponse";
    value: Uint8Array;
}
/**
 * QueryGetProtoRevAllProfitsResponse is response type for the
 * Query/GetProtoRevAllProfits RPC method.
 */
export interface QueryGetProtoRevAllProfitsResponseAmino {
    /** profits is a list of all of the profits from the module */
    profits: CoinAmino[];
}
export interface QueryGetProtoRevAllProfitsResponseAminoMsg {
    type: "osmosis/protorev/query-get-proto-rev-all-profits-response";
    value: QueryGetProtoRevAllProfitsResponseAmino;
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
    route: bigint[];
}
export interface QueryGetProtoRevStatisticsByRouteRequestProtoMsg {
    typeUrl: "/osmosis.protorev.v1beta1.QueryGetProtoRevStatisticsByRouteRequest";
    value: Uint8Array;
}
/**
 * QueryGetProtoRevStatisticsByPoolRequest is request type for the
 * Query/GetProtoRevStatisticsByRoute RPC method.
 */
export interface QueryGetProtoRevStatisticsByRouteRequestAmino {
    /** route is the set of pool ids to query statistics by i.e. 1,2,3 */
    route: string[];
}
export interface QueryGetProtoRevStatisticsByRouteRequestAminoMsg {
    type: "osmosis/protorev/query-get-proto-rev-statistics-by-route-request";
    value: QueryGetProtoRevStatisticsByRouteRequestAmino;
}
/**
 * QueryGetProtoRevStatisticsByPoolRequest is request type for the
 * Query/GetProtoRevStatisticsByRoute RPC method.
 */
export interface QueryGetProtoRevStatisticsByRouteRequestSDKType {
    route: bigint[];
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
    statistics: RouteStatistics;
}
export interface QueryGetProtoRevStatisticsByRouteResponseProtoMsg {
    typeUrl: "/osmosis.protorev.v1beta1.QueryGetProtoRevStatisticsByRouteResponse";
    value: Uint8Array;
}
/**
 * QueryGetProtoRevStatisticsByRouteResponse is response type for the
 * Query/GetProtoRevStatisticsByRoute RPC method.
 */
export interface QueryGetProtoRevStatisticsByRouteResponseAmino {
    /**
     * statistics contains the number of trades the module has executed after a
     * swap on a given pool and the profits from the trades
     */
    statistics?: RouteStatisticsAmino;
}
export interface QueryGetProtoRevStatisticsByRouteResponseAminoMsg {
    type: "osmosis/protorev/query-get-proto-rev-statistics-by-route-response";
    value: QueryGetProtoRevStatisticsByRouteResponseAmino;
}
/**
 * QueryGetProtoRevStatisticsByRouteResponse is response type for the
 * Query/GetProtoRevStatisticsByRoute RPC method.
 */
export interface QueryGetProtoRevStatisticsByRouteResponseSDKType {
    statistics: RouteStatisticsSDKType;
}
/**
 * QueryGetProtoRevAllRouteStatisticsRequest is request type for the
 * Query/GetProtoRevAllRouteStatistics RPC method.
 */
export interface QueryGetProtoRevAllRouteStatisticsRequest {
}
export interface QueryGetProtoRevAllRouteStatisticsRequestProtoMsg {
    typeUrl: "/osmosis.protorev.v1beta1.QueryGetProtoRevAllRouteStatisticsRequest";
    value: Uint8Array;
}
/**
 * QueryGetProtoRevAllRouteStatisticsRequest is request type for the
 * Query/GetProtoRevAllRouteStatistics RPC method.
 */
export interface QueryGetProtoRevAllRouteStatisticsRequestAmino {
}
export interface QueryGetProtoRevAllRouteStatisticsRequestAminoMsg {
    type: "osmosis/protorev/query-get-proto-rev-all-route-statistics-request";
    value: QueryGetProtoRevAllRouteStatisticsRequestAmino;
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
export interface QueryGetProtoRevAllRouteStatisticsResponseProtoMsg {
    typeUrl: "/osmosis.protorev.v1beta1.QueryGetProtoRevAllRouteStatisticsResponse";
    value: Uint8Array;
}
/**
 * QueryGetProtoRevAllRouteStatisticsResponse is response type for the
 * Query/GetProtoRevAllRouteStatistics RPC method.
 */
export interface QueryGetProtoRevAllRouteStatisticsResponseAmino {
    /**
     * statistics contains the number of trades/profits the module has executed on
     * all routes it has successfully executed a trade on
     */
    statistics: RouteStatisticsAmino[];
}
export interface QueryGetProtoRevAllRouteStatisticsResponseAminoMsg {
    type: "osmosis/protorev/query-get-proto-rev-all-route-statistics-response";
    value: QueryGetProtoRevAllRouteStatisticsResponseAmino;
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
export interface QueryGetProtoRevTokenPairArbRoutesRequestProtoMsg {
    typeUrl: "/osmosis.protorev.v1beta1.QueryGetProtoRevTokenPairArbRoutesRequest";
    value: Uint8Array;
}
/**
 * QueryGetProtoRevTokenPairArbRoutesRequest is request type for the
 * Query/GetProtoRevTokenPairArbRoutes RPC method.
 */
export interface QueryGetProtoRevTokenPairArbRoutesRequestAmino {
}
export interface QueryGetProtoRevTokenPairArbRoutesRequestAminoMsg {
    type: "osmosis/protorev/query-get-proto-rev-token-pair-arb-routes-request";
    value: QueryGetProtoRevTokenPairArbRoutesRequestAmino;
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
export interface QueryGetProtoRevTokenPairArbRoutesResponseProtoMsg {
    typeUrl: "/osmosis.protorev.v1beta1.QueryGetProtoRevTokenPairArbRoutesResponse";
    value: Uint8Array;
}
/**
 * QueryGetProtoRevTokenPairArbRoutesResponse is response type for the
 * Query/GetProtoRevTokenPairArbRoutes RPC method.
 */
export interface QueryGetProtoRevTokenPairArbRoutesResponseAmino {
    /**
     * routes is a list of all of the hot routes that the module is currently
     * arbitraging
     */
    routes: TokenPairArbRoutesAmino[];
}
export interface QueryGetProtoRevTokenPairArbRoutesResponseAminoMsg {
    type: "osmosis/protorev/query-get-proto-rev-token-pair-arb-routes-response";
    value: QueryGetProtoRevTokenPairArbRoutesResponseAmino;
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
export interface QueryGetProtoRevAdminAccountRequestProtoMsg {
    typeUrl: "/osmosis.protorev.v1beta1.QueryGetProtoRevAdminAccountRequest";
    value: Uint8Array;
}
/**
 * QueryGetProtoRevAdminAccountRequest is request type for the
 * Query/GetProtoRevAdminAccount RPC method.
 */
export interface QueryGetProtoRevAdminAccountRequestAmino {
}
export interface QueryGetProtoRevAdminAccountRequestAminoMsg {
    type: "osmosis/protorev/query-get-proto-rev-admin-account-request";
    value: QueryGetProtoRevAdminAccountRequestAmino;
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
export interface QueryGetProtoRevAdminAccountResponseProtoMsg {
    typeUrl: "/osmosis.protorev.v1beta1.QueryGetProtoRevAdminAccountResponse";
    value: Uint8Array;
}
/**
 * QueryGetProtoRevAdminAccountResponse is response type for the
 * Query/GetProtoRevAdminAccount RPC method.
 */
export interface QueryGetProtoRevAdminAccountResponseAmino {
    /** admin_account is the admin account of the module */
    admin_account: string;
}
export interface QueryGetProtoRevAdminAccountResponseAminoMsg {
    type: "osmosis/protorev/query-get-proto-rev-admin-account-response";
    value: QueryGetProtoRevAdminAccountResponseAmino;
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
export interface QueryGetProtoRevDeveloperAccountRequestProtoMsg {
    typeUrl: "/osmosis.protorev.v1beta1.QueryGetProtoRevDeveloperAccountRequest";
    value: Uint8Array;
}
/**
 * QueryGetProtoRevDeveloperAccountRequest is request type for the
 * Query/GetProtoRevDeveloperAccount RPC method.
 */
export interface QueryGetProtoRevDeveloperAccountRequestAmino {
}
export interface QueryGetProtoRevDeveloperAccountRequestAminoMsg {
    type: "osmosis/protorev/query-get-proto-rev-developer-account-request";
    value: QueryGetProtoRevDeveloperAccountRequestAmino;
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
export interface QueryGetProtoRevDeveloperAccountResponseProtoMsg {
    typeUrl: "/osmosis.protorev.v1beta1.QueryGetProtoRevDeveloperAccountResponse";
    value: Uint8Array;
}
/**
 * QueryGetProtoRevDeveloperAccountResponse is response type for the
 * Query/GetProtoRevDeveloperAccount RPC method.
 */
export interface QueryGetProtoRevDeveloperAccountResponseAmino {
    /** developer_account is the developer account of the module */
    developer_account: string;
}
export interface QueryGetProtoRevDeveloperAccountResponseAminoMsg {
    type: "osmosis/protorev/query-get-proto-rev-developer-account-response";
    value: QueryGetProtoRevDeveloperAccountResponseAmino;
}
/**
 * QueryGetProtoRevDeveloperAccountResponse is response type for the
 * Query/GetProtoRevDeveloperAccount RPC method.
 */
export interface QueryGetProtoRevDeveloperAccountResponseSDKType {
    developer_account: string;
}
/**
 * QueryGetProtoRevInfoByPoolTypeRequest is request type for the
 * Query/GetProtoRevInfoByPoolType RPC method.
 */
export interface QueryGetProtoRevInfoByPoolTypeRequest {
}
export interface QueryGetProtoRevInfoByPoolTypeRequestProtoMsg {
    typeUrl: "/osmosis.protorev.v1beta1.QueryGetProtoRevInfoByPoolTypeRequest";
    value: Uint8Array;
}
/**
 * QueryGetProtoRevInfoByPoolTypeRequest is request type for the
 * Query/GetProtoRevInfoByPoolType RPC method.
 */
export interface QueryGetProtoRevInfoByPoolTypeRequestAmino {
}
export interface QueryGetProtoRevInfoByPoolTypeRequestAminoMsg {
    type: "osmosis/protorev/query-get-proto-rev-info-by-pool-type-request";
    value: QueryGetProtoRevInfoByPoolTypeRequestAmino;
}
/**
 * QueryGetProtoRevInfoByPoolTypeRequest is request type for the
 * Query/GetProtoRevInfoByPoolType RPC method.
 */
export interface QueryGetProtoRevInfoByPoolTypeRequestSDKType {
}
/**
 * QueryGetProtoRevInfoByPoolTypeResponse is response type for the
 * Query/GetProtoRevInfoByPoolType RPC method.
 */
export interface QueryGetProtoRevInfoByPoolTypeResponse {
    /**
     * InfoByPoolType contains all information pertaining to how different
     * pool types are handled by the module.
     */
    infoByPoolType: InfoByPoolType;
}
export interface QueryGetProtoRevInfoByPoolTypeResponseProtoMsg {
    typeUrl: "/osmosis.protorev.v1beta1.QueryGetProtoRevInfoByPoolTypeResponse";
    value: Uint8Array;
}
/**
 * QueryGetProtoRevInfoByPoolTypeResponse is response type for the
 * Query/GetProtoRevInfoByPoolType RPC method.
 */
export interface QueryGetProtoRevInfoByPoolTypeResponseAmino {
    /**
     * InfoByPoolType contains all information pertaining to how different
     * pool types are handled by the module.
     */
    info_by_pool_type?: InfoByPoolTypeAmino;
}
export interface QueryGetProtoRevInfoByPoolTypeResponseAminoMsg {
    type: "osmosis/protorev/query-get-proto-rev-info-by-pool-type-response";
    value: QueryGetProtoRevInfoByPoolTypeResponseAmino;
}
/**
 * QueryGetProtoRevInfoByPoolTypeResponse is response type for the
 * Query/GetProtoRevInfoByPoolType RPC method.
 */
export interface QueryGetProtoRevInfoByPoolTypeResponseSDKType {
    info_by_pool_type: InfoByPoolTypeSDKType;
}
/**
 * QueryGetProtoRevMaxPoolPointsPerBlockRequest is request type for the
 * Query/GetProtoRevMaxPoolPointsPerBlock RPC method.
 */
export interface QueryGetProtoRevMaxPoolPointsPerBlockRequest {
}
export interface QueryGetProtoRevMaxPoolPointsPerBlockRequestProtoMsg {
    typeUrl: "/osmosis.protorev.v1beta1.QueryGetProtoRevMaxPoolPointsPerBlockRequest";
    value: Uint8Array;
}
/**
 * QueryGetProtoRevMaxPoolPointsPerBlockRequest is request type for the
 * Query/GetProtoRevMaxPoolPointsPerBlock RPC method.
 */
export interface QueryGetProtoRevMaxPoolPointsPerBlockRequestAmino {
}
export interface QueryGetProtoRevMaxPoolPointsPerBlockRequestAminoMsg {
    type: "osmosis/protorev/query-get-proto-rev-max-pool-points-per-block-request";
    value: QueryGetProtoRevMaxPoolPointsPerBlockRequestAmino;
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
    maxPoolPointsPerBlock: bigint;
}
export interface QueryGetProtoRevMaxPoolPointsPerBlockResponseProtoMsg {
    typeUrl: "/osmosis.protorev.v1beta1.QueryGetProtoRevMaxPoolPointsPerBlockResponse";
    value: Uint8Array;
}
/**
 * QueryGetProtoRevMaxPoolPointsPerBlockResponse is response type for the
 * Query/GetProtoRevMaxPoolPointsPerBlock RPC method.
 */
export interface QueryGetProtoRevMaxPoolPointsPerBlockResponseAmino {
    /**
     * max_pool_points_per_block is the maximum number of pool points that can be
     * consumed per block
     */
    max_pool_points_per_block: string;
}
export interface QueryGetProtoRevMaxPoolPointsPerBlockResponseAminoMsg {
    type: "osmosis/protorev/query-get-proto-rev-max-pool-points-per-block-response";
    value: QueryGetProtoRevMaxPoolPointsPerBlockResponseAmino;
}
/**
 * QueryGetProtoRevMaxPoolPointsPerBlockResponse is response type for the
 * Query/GetProtoRevMaxPoolPointsPerBlock RPC method.
 */
export interface QueryGetProtoRevMaxPoolPointsPerBlockResponseSDKType {
    max_pool_points_per_block: bigint;
}
/**
 * QueryGetProtoRevMaxPoolPointsPerTxRequest is request type for the
 * Query/GetProtoRevMaxPoolPointsPerTx RPC method.
 */
export interface QueryGetProtoRevMaxPoolPointsPerTxRequest {
}
export interface QueryGetProtoRevMaxPoolPointsPerTxRequestProtoMsg {
    typeUrl: "/osmosis.protorev.v1beta1.QueryGetProtoRevMaxPoolPointsPerTxRequest";
    value: Uint8Array;
}
/**
 * QueryGetProtoRevMaxPoolPointsPerTxRequest is request type for the
 * Query/GetProtoRevMaxPoolPointsPerTx RPC method.
 */
export interface QueryGetProtoRevMaxPoolPointsPerTxRequestAmino {
}
export interface QueryGetProtoRevMaxPoolPointsPerTxRequestAminoMsg {
    type: "osmosis/protorev/query-get-proto-rev-max-pool-points-per-tx-request";
    value: QueryGetProtoRevMaxPoolPointsPerTxRequestAmino;
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
    maxPoolPointsPerTx: bigint;
}
export interface QueryGetProtoRevMaxPoolPointsPerTxResponseProtoMsg {
    typeUrl: "/osmosis.protorev.v1beta1.QueryGetProtoRevMaxPoolPointsPerTxResponse";
    value: Uint8Array;
}
/**
 * QueryGetProtoRevMaxPoolPointsPerTxResponse is response type for the
 * Query/GetProtoRevMaxPoolPointsPerTx RPC method.
 */
export interface QueryGetProtoRevMaxPoolPointsPerTxResponseAmino {
    /**
     * max_pool_points_per_tx is the maximum number of pool points that can be
     * consumed per transaction
     */
    max_pool_points_per_tx: string;
}
export interface QueryGetProtoRevMaxPoolPointsPerTxResponseAminoMsg {
    type: "osmosis/protorev/query-get-proto-rev-max-pool-points-per-tx-response";
    value: QueryGetProtoRevMaxPoolPointsPerTxResponseAmino;
}
/**
 * QueryGetProtoRevMaxPoolPointsPerTxResponse is response type for the
 * Query/GetProtoRevMaxPoolPointsPerTx RPC method.
 */
export interface QueryGetProtoRevMaxPoolPointsPerTxResponseSDKType {
    max_pool_points_per_tx: bigint;
}
/**
 * QueryGetProtoRevBaseDenomsRequest is request type for the
 * Query/GetProtoRevBaseDenoms RPC method.
 */
export interface QueryGetProtoRevBaseDenomsRequest {
}
export interface QueryGetProtoRevBaseDenomsRequestProtoMsg {
    typeUrl: "/osmosis.protorev.v1beta1.QueryGetProtoRevBaseDenomsRequest";
    value: Uint8Array;
}
/**
 * QueryGetProtoRevBaseDenomsRequest is request type for the
 * Query/GetProtoRevBaseDenoms RPC method.
 */
export interface QueryGetProtoRevBaseDenomsRequestAmino {
}
export interface QueryGetProtoRevBaseDenomsRequestAminoMsg {
    type: "osmosis/protorev/query-get-proto-rev-base-denoms-request";
    value: QueryGetProtoRevBaseDenomsRequestAmino;
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
export interface QueryGetProtoRevBaseDenomsResponseProtoMsg {
    typeUrl: "/osmosis.protorev.v1beta1.QueryGetProtoRevBaseDenomsResponse";
    value: Uint8Array;
}
/**
 * QueryGetProtoRevBaseDenomsResponse is response type for the
 * Query/GetProtoRevBaseDenoms RPC method.
 */
export interface QueryGetProtoRevBaseDenomsResponseAmino {
    /** base_denoms is a list of all of the base denoms and step sizes */
    base_denoms: BaseDenomAmino[];
}
export interface QueryGetProtoRevBaseDenomsResponseAminoMsg {
    type: "osmosis/protorev/query-get-proto-rev-base-denoms-response";
    value: QueryGetProtoRevBaseDenomsResponseAmino;
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
export interface QueryGetProtoRevEnabledRequestProtoMsg {
    typeUrl: "/osmosis.protorev.v1beta1.QueryGetProtoRevEnabledRequest";
    value: Uint8Array;
}
/**
 * QueryGetProtoRevEnabledRequest is request type for the
 * Query/GetProtoRevEnabled RPC method.
 */
export interface QueryGetProtoRevEnabledRequestAmino {
}
export interface QueryGetProtoRevEnabledRequestAminoMsg {
    type: "osmosis/protorev/query-get-proto-rev-enabled-request";
    value: QueryGetProtoRevEnabledRequestAmino;
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
export interface QueryGetProtoRevEnabledResponseProtoMsg {
    typeUrl: "/osmosis.protorev.v1beta1.QueryGetProtoRevEnabledResponse";
    value: Uint8Array;
}
/**
 * QueryGetProtoRevEnabledResponse is response type for the
 * Query/GetProtoRevEnabled RPC method.
 */
export interface QueryGetProtoRevEnabledResponseAmino {
    /** enabled is whether the module is enabled */
    enabled: boolean;
}
export interface QueryGetProtoRevEnabledResponseAminoMsg {
    type: "osmosis/protorev/query-get-proto-rev-enabled-response";
    value: QueryGetProtoRevEnabledResponseAmino;
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
export interface QueryGetProtoRevPoolRequestProtoMsg {
    typeUrl: "/osmosis.protorev.v1beta1.QueryGetProtoRevPoolRequest";
    value: Uint8Array;
}
/**
 * QueryGetProtoRevPoolRequest is request type for the
 * Query/GetProtoRevPool RPC method.
 */
export interface QueryGetProtoRevPoolRequestAmino {
    /**
     * base_denom is the base denom set in protorev for the denom pair to pool
     * mapping
     */
    base_denom: string;
    /** other_denom is the other denom for the denom pair to pool mapping */
    other_denom: string;
}
export interface QueryGetProtoRevPoolRequestAminoMsg {
    type: "osmosis/protorev/query-get-proto-rev-pool-request";
    value: QueryGetProtoRevPoolRequestAmino;
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
    poolId: bigint;
}
export interface QueryGetProtoRevPoolResponseProtoMsg {
    typeUrl: "/osmosis.protorev.v1beta1.QueryGetProtoRevPoolResponse";
    value: Uint8Array;
}
/**
 * QueryGetProtoRevPoolResponse is response type for the
 * Query/GetProtoRevPool RPC method.
 */
export interface QueryGetProtoRevPoolResponseAmino {
    /** pool_id is the pool_id stored for the denom pair */
    pool_id: string;
}
export interface QueryGetProtoRevPoolResponseAminoMsg {
    type: "osmosis/protorev/query-get-proto-rev-pool-response";
    value: QueryGetProtoRevPoolResponseAmino;
}
/**
 * QueryGetProtoRevPoolResponse is response type for the
 * Query/GetProtoRevPool RPC method.
 */
export interface QueryGetProtoRevPoolResponseSDKType {
    pool_id: bigint;
}
export declare const QueryParamsRequest: {
    typeUrl: string;
    encode(_: QueryParamsRequest, writer?: BinaryWriter): BinaryWriter;
    fromJSON(_: any): QueryParamsRequest;
    fromPartial(_: Partial<QueryParamsRequest>): QueryParamsRequest;
    fromAmino(_: QueryParamsRequestAmino): QueryParamsRequest;
    toAmino(_: QueryParamsRequest): QueryParamsRequestAmino;
    fromAminoMsg(object: QueryParamsRequestAminoMsg): QueryParamsRequest;
    toAminoMsg(message: QueryParamsRequest): QueryParamsRequestAminoMsg;
    fromProtoMsg(message: QueryParamsRequestProtoMsg): QueryParamsRequest;
    toProto(message: QueryParamsRequest): Uint8Array;
    toProtoMsg(message: QueryParamsRequest): QueryParamsRequestProtoMsg;
};
export declare const QueryParamsResponse: {
    typeUrl: string;
    encode(message: QueryParamsResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryParamsResponse;
    fromPartial(object: Partial<QueryParamsResponse>): QueryParamsResponse;
    fromAmino(object: QueryParamsResponseAmino): QueryParamsResponse;
    toAmino(message: QueryParamsResponse): QueryParamsResponseAmino;
    fromAminoMsg(object: QueryParamsResponseAminoMsg): QueryParamsResponse;
    toAminoMsg(message: QueryParamsResponse): QueryParamsResponseAminoMsg;
    fromProtoMsg(message: QueryParamsResponseProtoMsg): QueryParamsResponse;
    toProto(message: QueryParamsResponse): Uint8Array;
    toProtoMsg(message: QueryParamsResponse): QueryParamsResponseProtoMsg;
};
export declare const QueryGetProtoRevNumberOfTradesRequest: {
    typeUrl: string;
    encode(_: QueryGetProtoRevNumberOfTradesRequest, writer?: BinaryWriter): BinaryWriter;
    fromJSON(_: any): QueryGetProtoRevNumberOfTradesRequest;
    fromPartial(_: Partial<QueryGetProtoRevNumberOfTradesRequest>): QueryGetProtoRevNumberOfTradesRequest;
    fromAmino(_: QueryGetProtoRevNumberOfTradesRequestAmino): QueryGetProtoRevNumberOfTradesRequest;
    toAmino(_: QueryGetProtoRevNumberOfTradesRequest): QueryGetProtoRevNumberOfTradesRequestAmino;
    fromAminoMsg(object: QueryGetProtoRevNumberOfTradesRequestAminoMsg): QueryGetProtoRevNumberOfTradesRequest;
    toAminoMsg(message: QueryGetProtoRevNumberOfTradesRequest): QueryGetProtoRevNumberOfTradesRequestAminoMsg;
    fromProtoMsg(message: QueryGetProtoRevNumberOfTradesRequestProtoMsg): QueryGetProtoRevNumberOfTradesRequest;
    toProto(message: QueryGetProtoRevNumberOfTradesRequest): Uint8Array;
    toProtoMsg(message: QueryGetProtoRevNumberOfTradesRequest): QueryGetProtoRevNumberOfTradesRequestProtoMsg;
};
export declare const QueryGetProtoRevNumberOfTradesResponse: {
    typeUrl: string;
    encode(message: QueryGetProtoRevNumberOfTradesResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryGetProtoRevNumberOfTradesResponse;
    fromPartial(object: Partial<QueryGetProtoRevNumberOfTradesResponse>): QueryGetProtoRevNumberOfTradesResponse;
    fromAmino(object: QueryGetProtoRevNumberOfTradesResponseAmino): QueryGetProtoRevNumberOfTradesResponse;
    toAmino(message: QueryGetProtoRevNumberOfTradesResponse): QueryGetProtoRevNumberOfTradesResponseAmino;
    fromAminoMsg(object: QueryGetProtoRevNumberOfTradesResponseAminoMsg): QueryGetProtoRevNumberOfTradesResponse;
    toAminoMsg(message: QueryGetProtoRevNumberOfTradesResponse): QueryGetProtoRevNumberOfTradesResponseAminoMsg;
    fromProtoMsg(message: QueryGetProtoRevNumberOfTradesResponseProtoMsg): QueryGetProtoRevNumberOfTradesResponse;
    toProto(message: QueryGetProtoRevNumberOfTradesResponse): Uint8Array;
    toProtoMsg(message: QueryGetProtoRevNumberOfTradesResponse): QueryGetProtoRevNumberOfTradesResponseProtoMsg;
};
export declare const QueryGetProtoRevProfitsByDenomRequest: {
    typeUrl: string;
    encode(message: QueryGetProtoRevProfitsByDenomRequest, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryGetProtoRevProfitsByDenomRequest;
    fromPartial(object: Partial<QueryGetProtoRevProfitsByDenomRequest>): QueryGetProtoRevProfitsByDenomRequest;
    fromAmino(object: QueryGetProtoRevProfitsByDenomRequestAmino): QueryGetProtoRevProfitsByDenomRequest;
    toAmino(message: QueryGetProtoRevProfitsByDenomRequest): QueryGetProtoRevProfitsByDenomRequestAmino;
    fromAminoMsg(object: QueryGetProtoRevProfitsByDenomRequestAminoMsg): QueryGetProtoRevProfitsByDenomRequest;
    toAminoMsg(message: QueryGetProtoRevProfitsByDenomRequest): QueryGetProtoRevProfitsByDenomRequestAminoMsg;
    fromProtoMsg(message: QueryGetProtoRevProfitsByDenomRequestProtoMsg): QueryGetProtoRevProfitsByDenomRequest;
    toProto(message: QueryGetProtoRevProfitsByDenomRequest): Uint8Array;
    toProtoMsg(message: QueryGetProtoRevProfitsByDenomRequest): QueryGetProtoRevProfitsByDenomRequestProtoMsg;
};
export declare const QueryGetProtoRevProfitsByDenomResponse: {
    typeUrl: string;
    encode(message: QueryGetProtoRevProfitsByDenomResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryGetProtoRevProfitsByDenomResponse;
    fromPartial(object: Partial<QueryGetProtoRevProfitsByDenomResponse>): QueryGetProtoRevProfitsByDenomResponse;
    fromAmino(object: QueryGetProtoRevProfitsByDenomResponseAmino): QueryGetProtoRevProfitsByDenomResponse;
    toAmino(message: QueryGetProtoRevProfitsByDenomResponse): QueryGetProtoRevProfitsByDenomResponseAmino;
    fromAminoMsg(object: QueryGetProtoRevProfitsByDenomResponseAminoMsg): QueryGetProtoRevProfitsByDenomResponse;
    toAminoMsg(message: QueryGetProtoRevProfitsByDenomResponse): QueryGetProtoRevProfitsByDenomResponseAminoMsg;
    fromProtoMsg(message: QueryGetProtoRevProfitsByDenomResponseProtoMsg): QueryGetProtoRevProfitsByDenomResponse;
    toProto(message: QueryGetProtoRevProfitsByDenomResponse): Uint8Array;
    toProtoMsg(message: QueryGetProtoRevProfitsByDenomResponse): QueryGetProtoRevProfitsByDenomResponseProtoMsg;
};
export declare const QueryGetProtoRevAllProfitsRequest: {
    typeUrl: string;
    encode(_: QueryGetProtoRevAllProfitsRequest, writer?: BinaryWriter): BinaryWriter;
    fromJSON(_: any): QueryGetProtoRevAllProfitsRequest;
    fromPartial(_: Partial<QueryGetProtoRevAllProfitsRequest>): QueryGetProtoRevAllProfitsRequest;
    fromAmino(_: QueryGetProtoRevAllProfitsRequestAmino): QueryGetProtoRevAllProfitsRequest;
    toAmino(_: QueryGetProtoRevAllProfitsRequest): QueryGetProtoRevAllProfitsRequestAmino;
    fromAminoMsg(object: QueryGetProtoRevAllProfitsRequestAminoMsg): QueryGetProtoRevAllProfitsRequest;
    toAminoMsg(message: QueryGetProtoRevAllProfitsRequest): QueryGetProtoRevAllProfitsRequestAminoMsg;
    fromProtoMsg(message: QueryGetProtoRevAllProfitsRequestProtoMsg): QueryGetProtoRevAllProfitsRequest;
    toProto(message: QueryGetProtoRevAllProfitsRequest): Uint8Array;
    toProtoMsg(message: QueryGetProtoRevAllProfitsRequest): QueryGetProtoRevAllProfitsRequestProtoMsg;
};
export declare const QueryGetProtoRevAllProfitsResponse: {
    typeUrl: string;
    encode(message: QueryGetProtoRevAllProfitsResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryGetProtoRevAllProfitsResponse;
    fromPartial(object: Partial<QueryGetProtoRevAllProfitsResponse>): QueryGetProtoRevAllProfitsResponse;
    fromAmino(object: QueryGetProtoRevAllProfitsResponseAmino): QueryGetProtoRevAllProfitsResponse;
    toAmino(message: QueryGetProtoRevAllProfitsResponse): QueryGetProtoRevAllProfitsResponseAmino;
    fromAminoMsg(object: QueryGetProtoRevAllProfitsResponseAminoMsg): QueryGetProtoRevAllProfitsResponse;
    toAminoMsg(message: QueryGetProtoRevAllProfitsResponse): QueryGetProtoRevAllProfitsResponseAminoMsg;
    fromProtoMsg(message: QueryGetProtoRevAllProfitsResponseProtoMsg): QueryGetProtoRevAllProfitsResponse;
    toProto(message: QueryGetProtoRevAllProfitsResponse): Uint8Array;
    toProtoMsg(message: QueryGetProtoRevAllProfitsResponse): QueryGetProtoRevAllProfitsResponseProtoMsg;
};
export declare const QueryGetProtoRevStatisticsByRouteRequest: {
    typeUrl: string;
    encode(message: QueryGetProtoRevStatisticsByRouteRequest, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryGetProtoRevStatisticsByRouteRequest;
    fromPartial(object: Partial<QueryGetProtoRevStatisticsByRouteRequest>): QueryGetProtoRevStatisticsByRouteRequest;
    fromAmino(object: QueryGetProtoRevStatisticsByRouteRequestAmino): QueryGetProtoRevStatisticsByRouteRequest;
    toAmino(message: QueryGetProtoRevStatisticsByRouteRequest): QueryGetProtoRevStatisticsByRouteRequestAmino;
    fromAminoMsg(object: QueryGetProtoRevStatisticsByRouteRequestAminoMsg): QueryGetProtoRevStatisticsByRouteRequest;
    toAminoMsg(message: QueryGetProtoRevStatisticsByRouteRequest): QueryGetProtoRevStatisticsByRouteRequestAminoMsg;
    fromProtoMsg(message: QueryGetProtoRevStatisticsByRouteRequestProtoMsg): QueryGetProtoRevStatisticsByRouteRequest;
    toProto(message: QueryGetProtoRevStatisticsByRouteRequest): Uint8Array;
    toProtoMsg(message: QueryGetProtoRevStatisticsByRouteRequest): QueryGetProtoRevStatisticsByRouteRequestProtoMsg;
};
export declare const QueryGetProtoRevStatisticsByRouteResponse: {
    typeUrl: string;
    encode(message: QueryGetProtoRevStatisticsByRouteResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryGetProtoRevStatisticsByRouteResponse;
    fromPartial(object: Partial<QueryGetProtoRevStatisticsByRouteResponse>): QueryGetProtoRevStatisticsByRouteResponse;
    fromAmino(object: QueryGetProtoRevStatisticsByRouteResponseAmino): QueryGetProtoRevStatisticsByRouteResponse;
    toAmino(message: QueryGetProtoRevStatisticsByRouteResponse): QueryGetProtoRevStatisticsByRouteResponseAmino;
    fromAminoMsg(object: QueryGetProtoRevStatisticsByRouteResponseAminoMsg): QueryGetProtoRevStatisticsByRouteResponse;
    toAminoMsg(message: QueryGetProtoRevStatisticsByRouteResponse): QueryGetProtoRevStatisticsByRouteResponseAminoMsg;
    fromProtoMsg(message: QueryGetProtoRevStatisticsByRouteResponseProtoMsg): QueryGetProtoRevStatisticsByRouteResponse;
    toProto(message: QueryGetProtoRevStatisticsByRouteResponse): Uint8Array;
    toProtoMsg(message: QueryGetProtoRevStatisticsByRouteResponse): QueryGetProtoRevStatisticsByRouteResponseProtoMsg;
};
export declare const QueryGetProtoRevAllRouteStatisticsRequest: {
    typeUrl: string;
    encode(_: QueryGetProtoRevAllRouteStatisticsRequest, writer?: BinaryWriter): BinaryWriter;
    fromJSON(_: any): QueryGetProtoRevAllRouteStatisticsRequest;
    fromPartial(_: Partial<QueryGetProtoRevAllRouteStatisticsRequest>): QueryGetProtoRevAllRouteStatisticsRequest;
    fromAmino(_: QueryGetProtoRevAllRouteStatisticsRequestAmino): QueryGetProtoRevAllRouteStatisticsRequest;
    toAmino(_: QueryGetProtoRevAllRouteStatisticsRequest): QueryGetProtoRevAllRouteStatisticsRequestAmino;
    fromAminoMsg(object: QueryGetProtoRevAllRouteStatisticsRequestAminoMsg): QueryGetProtoRevAllRouteStatisticsRequest;
    toAminoMsg(message: QueryGetProtoRevAllRouteStatisticsRequest): QueryGetProtoRevAllRouteStatisticsRequestAminoMsg;
    fromProtoMsg(message: QueryGetProtoRevAllRouteStatisticsRequestProtoMsg): QueryGetProtoRevAllRouteStatisticsRequest;
    toProto(message: QueryGetProtoRevAllRouteStatisticsRequest): Uint8Array;
    toProtoMsg(message: QueryGetProtoRevAllRouteStatisticsRequest): QueryGetProtoRevAllRouteStatisticsRequestProtoMsg;
};
export declare const QueryGetProtoRevAllRouteStatisticsResponse: {
    typeUrl: string;
    encode(message: QueryGetProtoRevAllRouteStatisticsResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryGetProtoRevAllRouteStatisticsResponse;
    fromPartial(object: Partial<QueryGetProtoRevAllRouteStatisticsResponse>): QueryGetProtoRevAllRouteStatisticsResponse;
    fromAmino(object: QueryGetProtoRevAllRouteStatisticsResponseAmino): QueryGetProtoRevAllRouteStatisticsResponse;
    toAmino(message: QueryGetProtoRevAllRouteStatisticsResponse): QueryGetProtoRevAllRouteStatisticsResponseAmino;
    fromAminoMsg(object: QueryGetProtoRevAllRouteStatisticsResponseAminoMsg): QueryGetProtoRevAllRouteStatisticsResponse;
    toAminoMsg(message: QueryGetProtoRevAllRouteStatisticsResponse): QueryGetProtoRevAllRouteStatisticsResponseAminoMsg;
    fromProtoMsg(message: QueryGetProtoRevAllRouteStatisticsResponseProtoMsg): QueryGetProtoRevAllRouteStatisticsResponse;
    toProto(message: QueryGetProtoRevAllRouteStatisticsResponse): Uint8Array;
    toProtoMsg(message: QueryGetProtoRevAllRouteStatisticsResponse): QueryGetProtoRevAllRouteStatisticsResponseProtoMsg;
};
export declare const QueryGetProtoRevTokenPairArbRoutesRequest: {
    typeUrl: string;
    encode(_: QueryGetProtoRevTokenPairArbRoutesRequest, writer?: BinaryWriter): BinaryWriter;
    fromJSON(_: any): QueryGetProtoRevTokenPairArbRoutesRequest;
    fromPartial(_: Partial<QueryGetProtoRevTokenPairArbRoutesRequest>): QueryGetProtoRevTokenPairArbRoutesRequest;
    fromAmino(_: QueryGetProtoRevTokenPairArbRoutesRequestAmino): QueryGetProtoRevTokenPairArbRoutesRequest;
    toAmino(_: QueryGetProtoRevTokenPairArbRoutesRequest): QueryGetProtoRevTokenPairArbRoutesRequestAmino;
    fromAminoMsg(object: QueryGetProtoRevTokenPairArbRoutesRequestAminoMsg): QueryGetProtoRevTokenPairArbRoutesRequest;
    toAminoMsg(message: QueryGetProtoRevTokenPairArbRoutesRequest): QueryGetProtoRevTokenPairArbRoutesRequestAminoMsg;
    fromProtoMsg(message: QueryGetProtoRevTokenPairArbRoutesRequestProtoMsg): QueryGetProtoRevTokenPairArbRoutesRequest;
    toProto(message: QueryGetProtoRevTokenPairArbRoutesRequest): Uint8Array;
    toProtoMsg(message: QueryGetProtoRevTokenPairArbRoutesRequest): QueryGetProtoRevTokenPairArbRoutesRequestProtoMsg;
};
export declare const QueryGetProtoRevTokenPairArbRoutesResponse: {
    typeUrl: string;
    encode(message: QueryGetProtoRevTokenPairArbRoutesResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryGetProtoRevTokenPairArbRoutesResponse;
    fromPartial(object: Partial<QueryGetProtoRevTokenPairArbRoutesResponse>): QueryGetProtoRevTokenPairArbRoutesResponse;
    fromAmino(object: QueryGetProtoRevTokenPairArbRoutesResponseAmino): QueryGetProtoRevTokenPairArbRoutesResponse;
    toAmino(message: QueryGetProtoRevTokenPairArbRoutesResponse): QueryGetProtoRevTokenPairArbRoutesResponseAmino;
    fromAminoMsg(object: QueryGetProtoRevTokenPairArbRoutesResponseAminoMsg): QueryGetProtoRevTokenPairArbRoutesResponse;
    toAminoMsg(message: QueryGetProtoRevTokenPairArbRoutesResponse): QueryGetProtoRevTokenPairArbRoutesResponseAminoMsg;
    fromProtoMsg(message: QueryGetProtoRevTokenPairArbRoutesResponseProtoMsg): QueryGetProtoRevTokenPairArbRoutesResponse;
    toProto(message: QueryGetProtoRevTokenPairArbRoutesResponse): Uint8Array;
    toProtoMsg(message: QueryGetProtoRevTokenPairArbRoutesResponse): QueryGetProtoRevTokenPairArbRoutesResponseProtoMsg;
};
export declare const QueryGetProtoRevAdminAccountRequest: {
    typeUrl: string;
    encode(_: QueryGetProtoRevAdminAccountRequest, writer?: BinaryWriter): BinaryWriter;
    fromJSON(_: any): QueryGetProtoRevAdminAccountRequest;
    fromPartial(_: Partial<QueryGetProtoRevAdminAccountRequest>): QueryGetProtoRevAdminAccountRequest;
    fromAmino(_: QueryGetProtoRevAdminAccountRequestAmino): QueryGetProtoRevAdminAccountRequest;
    toAmino(_: QueryGetProtoRevAdminAccountRequest): QueryGetProtoRevAdminAccountRequestAmino;
    fromAminoMsg(object: QueryGetProtoRevAdminAccountRequestAminoMsg): QueryGetProtoRevAdminAccountRequest;
    toAminoMsg(message: QueryGetProtoRevAdminAccountRequest): QueryGetProtoRevAdminAccountRequestAminoMsg;
    fromProtoMsg(message: QueryGetProtoRevAdminAccountRequestProtoMsg): QueryGetProtoRevAdminAccountRequest;
    toProto(message: QueryGetProtoRevAdminAccountRequest): Uint8Array;
    toProtoMsg(message: QueryGetProtoRevAdminAccountRequest): QueryGetProtoRevAdminAccountRequestProtoMsg;
};
export declare const QueryGetProtoRevAdminAccountResponse: {
    typeUrl: string;
    encode(message: QueryGetProtoRevAdminAccountResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryGetProtoRevAdminAccountResponse;
    fromPartial(object: Partial<QueryGetProtoRevAdminAccountResponse>): QueryGetProtoRevAdminAccountResponse;
    fromAmino(object: QueryGetProtoRevAdminAccountResponseAmino): QueryGetProtoRevAdminAccountResponse;
    toAmino(message: QueryGetProtoRevAdminAccountResponse): QueryGetProtoRevAdminAccountResponseAmino;
    fromAminoMsg(object: QueryGetProtoRevAdminAccountResponseAminoMsg): QueryGetProtoRevAdminAccountResponse;
    toAminoMsg(message: QueryGetProtoRevAdminAccountResponse): QueryGetProtoRevAdminAccountResponseAminoMsg;
    fromProtoMsg(message: QueryGetProtoRevAdminAccountResponseProtoMsg): QueryGetProtoRevAdminAccountResponse;
    toProto(message: QueryGetProtoRevAdminAccountResponse): Uint8Array;
    toProtoMsg(message: QueryGetProtoRevAdminAccountResponse): QueryGetProtoRevAdminAccountResponseProtoMsg;
};
export declare const QueryGetProtoRevDeveloperAccountRequest: {
    typeUrl: string;
    encode(_: QueryGetProtoRevDeveloperAccountRequest, writer?: BinaryWriter): BinaryWriter;
    fromJSON(_: any): QueryGetProtoRevDeveloperAccountRequest;
    fromPartial(_: Partial<QueryGetProtoRevDeveloperAccountRequest>): QueryGetProtoRevDeveloperAccountRequest;
    fromAmino(_: QueryGetProtoRevDeveloperAccountRequestAmino): QueryGetProtoRevDeveloperAccountRequest;
    toAmino(_: QueryGetProtoRevDeveloperAccountRequest): QueryGetProtoRevDeveloperAccountRequestAmino;
    fromAminoMsg(object: QueryGetProtoRevDeveloperAccountRequestAminoMsg): QueryGetProtoRevDeveloperAccountRequest;
    toAminoMsg(message: QueryGetProtoRevDeveloperAccountRequest): QueryGetProtoRevDeveloperAccountRequestAminoMsg;
    fromProtoMsg(message: QueryGetProtoRevDeveloperAccountRequestProtoMsg): QueryGetProtoRevDeveloperAccountRequest;
    toProto(message: QueryGetProtoRevDeveloperAccountRequest): Uint8Array;
    toProtoMsg(message: QueryGetProtoRevDeveloperAccountRequest): QueryGetProtoRevDeveloperAccountRequestProtoMsg;
};
export declare const QueryGetProtoRevDeveloperAccountResponse: {
    typeUrl: string;
    encode(message: QueryGetProtoRevDeveloperAccountResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryGetProtoRevDeveloperAccountResponse;
    fromPartial(object: Partial<QueryGetProtoRevDeveloperAccountResponse>): QueryGetProtoRevDeveloperAccountResponse;
    fromAmino(object: QueryGetProtoRevDeveloperAccountResponseAmino): QueryGetProtoRevDeveloperAccountResponse;
    toAmino(message: QueryGetProtoRevDeveloperAccountResponse): QueryGetProtoRevDeveloperAccountResponseAmino;
    fromAminoMsg(object: QueryGetProtoRevDeveloperAccountResponseAminoMsg): QueryGetProtoRevDeveloperAccountResponse;
    toAminoMsg(message: QueryGetProtoRevDeveloperAccountResponse): QueryGetProtoRevDeveloperAccountResponseAminoMsg;
    fromProtoMsg(message: QueryGetProtoRevDeveloperAccountResponseProtoMsg): QueryGetProtoRevDeveloperAccountResponse;
    toProto(message: QueryGetProtoRevDeveloperAccountResponse): Uint8Array;
    toProtoMsg(message: QueryGetProtoRevDeveloperAccountResponse): QueryGetProtoRevDeveloperAccountResponseProtoMsg;
};
export declare const QueryGetProtoRevInfoByPoolTypeRequest: {
    typeUrl: string;
    encode(_: QueryGetProtoRevInfoByPoolTypeRequest, writer?: BinaryWriter): BinaryWriter;
    fromJSON(_: any): QueryGetProtoRevInfoByPoolTypeRequest;
    fromPartial(_: Partial<QueryGetProtoRevInfoByPoolTypeRequest>): QueryGetProtoRevInfoByPoolTypeRequest;
    fromAmino(_: QueryGetProtoRevInfoByPoolTypeRequestAmino): QueryGetProtoRevInfoByPoolTypeRequest;
    toAmino(_: QueryGetProtoRevInfoByPoolTypeRequest): QueryGetProtoRevInfoByPoolTypeRequestAmino;
    fromAminoMsg(object: QueryGetProtoRevInfoByPoolTypeRequestAminoMsg): QueryGetProtoRevInfoByPoolTypeRequest;
    toAminoMsg(message: QueryGetProtoRevInfoByPoolTypeRequest): QueryGetProtoRevInfoByPoolTypeRequestAminoMsg;
    fromProtoMsg(message: QueryGetProtoRevInfoByPoolTypeRequestProtoMsg): QueryGetProtoRevInfoByPoolTypeRequest;
    toProto(message: QueryGetProtoRevInfoByPoolTypeRequest): Uint8Array;
    toProtoMsg(message: QueryGetProtoRevInfoByPoolTypeRequest): QueryGetProtoRevInfoByPoolTypeRequestProtoMsg;
};
export declare const QueryGetProtoRevInfoByPoolTypeResponse: {
    typeUrl: string;
    encode(message: QueryGetProtoRevInfoByPoolTypeResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryGetProtoRevInfoByPoolTypeResponse;
    fromPartial(object: Partial<QueryGetProtoRevInfoByPoolTypeResponse>): QueryGetProtoRevInfoByPoolTypeResponse;
    fromAmino(object: QueryGetProtoRevInfoByPoolTypeResponseAmino): QueryGetProtoRevInfoByPoolTypeResponse;
    toAmino(message: QueryGetProtoRevInfoByPoolTypeResponse): QueryGetProtoRevInfoByPoolTypeResponseAmino;
    fromAminoMsg(object: QueryGetProtoRevInfoByPoolTypeResponseAminoMsg): QueryGetProtoRevInfoByPoolTypeResponse;
    toAminoMsg(message: QueryGetProtoRevInfoByPoolTypeResponse): QueryGetProtoRevInfoByPoolTypeResponseAminoMsg;
    fromProtoMsg(message: QueryGetProtoRevInfoByPoolTypeResponseProtoMsg): QueryGetProtoRevInfoByPoolTypeResponse;
    toProto(message: QueryGetProtoRevInfoByPoolTypeResponse): Uint8Array;
    toProtoMsg(message: QueryGetProtoRevInfoByPoolTypeResponse): QueryGetProtoRevInfoByPoolTypeResponseProtoMsg;
};
export declare const QueryGetProtoRevMaxPoolPointsPerBlockRequest: {
    typeUrl: string;
    encode(_: QueryGetProtoRevMaxPoolPointsPerBlockRequest, writer?: BinaryWriter): BinaryWriter;
    fromJSON(_: any): QueryGetProtoRevMaxPoolPointsPerBlockRequest;
    fromPartial(_: Partial<QueryGetProtoRevMaxPoolPointsPerBlockRequest>): QueryGetProtoRevMaxPoolPointsPerBlockRequest;
    fromAmino(_: QueryGetProtoRevMaxPoolPointsPerBlockRequestAmino): QueryGetProtoRevMaxPoolPointsPerBlockRequest;
    toAmino(_: QueryGetProtoRevMaxPoolPointsPerBlockRequest): QueryGetProtoRevMaxPoolPointsPerBlockRequestAmino;
    fromAminoMsg(object: QueryGetProtoRevMaxPoolPointsPerBlockRequestAminoMsg): QueryGetProtoRevMaxPoolPointsPerBlockRequest;
    toAminoMsg(message: QueryGetProtoRevMaxPoolPointsPerBlockRequest): QueryGetProtoRevMaxPoolPointsPerBlockRequestAminoMsg;
    fromProtoMsg(message: QueryGetProtoRevMaxPoolPointsPerBlockRequestProtoMsg): QueryGetProtoRevMaxPoolPointsPerBlockRequest;
    toProto(message: QueryGetProtoRevMaxPoolPointsPerBlockRequest): Uint8Array;
    toProtoMsg(message: QueryGetProtoRevMaxPoolPointsPerBlockRequest): QueryGetProtoRevMaxPoolPointsPerBlockRequestProtoMsg;
};
export declare const QueryGetProtoRevMaxPoolPointsPerBlockResponse: {
    typeUrl: string;
    encode(message: QueryGetProtoRevMaxPoolPointsPerBlockResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryGetProtoRevMaxPoolPointsPerBlockResponse;
    fromPartial(object: Partial<QueryGetProtoRevMaxPoolPointsPerBlockResponse>): QueryGetProtoRevMaxPoolPointsPerBlockResponse;
    fromAmino(object: QueryGetProtoRevMaxPoolPointsPerBlockResponseAmino): QueryGetProtoRevMaxPoolPointsPerBlockResponse;
    toAmino(message: QueryGetProtoRevMaxPoolPointsPerBlockResponse): QueryGetProtoRevMaxPoolPointsPerBlockResponseAmino;
    fromAminoMsg(object: QueryGetProtoRevMaxPoolPointsPerBlockResponseAminoMsg): QueryGetProtoRevMaxPoolPointsPerBlockResponse;
    toAminoMsg(message: QueryGetProtoRevMaxPoolPointsPerBlockResponse): QueryGetProtoRevMaxPoolPointsPerBlockResponseAminoMsg;
    fromProtoMsg(message: QueryGetProtoRevMaxPoolPointsPerBlockResponseProtoMsg): QueryGetProtoRevMaxPoolPointsPerBlockResponse;
    toProto(message: QueryGetProtoRevMaxPoolPointsPerBlockResponse): Uint8Array;
    toProtoMsg(message: QueryGetProtoRevMaxPoolPointsPerBlockResponse): QueryGetProtoRevMaxPoolPointsPerBlockResponseProtoMsg;
};
export declare const QueryGetProtoRevMaxPoolPointsPerTxRequest: {
    typeUrl: string;
    encode(_: QueryGetProtoRevMaxPoolPointsPerTxRequest, writer?: BinaryWriter): BinaryWriter;
    fromJSON(_: any): QueryGetProtoRevMaxPoolPointsPerTxRequest;
    fromPartial(_: Partial<QueryGetProtoRevMaxPoolPointsPerTxRequest>): QueryGetProtoRevMaxPoolPointsPerTxRequest;
    fromAmino(_: QueryGetProtoRevMaxPoolPointsPerTxRequestAmino): QueryGetProtoRevMaxPoolPointsPerTxRequest;
    toAmino(_: QueryGetProtoRevMaxPoolPointsPerTxRequest): QueryGetProtoRevMaxPoolPointsPerTxRequestAmino;
    fromAminoMsg(object: QueryGetProtoRevMaxPoolPointsPerTxRequestAminoMsg): QueryGetProtoRevMaxPoolPointsPerTxRequest;
    toAminoMsg(message: QueryGetProtoRevMaxPoolPointsPerTxRequest): QueryGetProtoRevMaxPoolPointsPerTxRequestAminoMsg;
    fromProtoMsg(message: QueryGetProtoRevMaxPoolPointsPerTxRequestProtoMsg): QueryGetProtoRevMaxPoolPointsPerTxRequest;
    toProto(message: QueryGetProtoRevMaxPoolPointsPerTxRequest): Uint8Array;
    toProtoMsg(message: QueryGetProtoRevMaxPoolPointsPerTxRequest): QueryGetProtoRevMaxPoolPointsPerTxRequestProtoMsg;
};
export declare const QueryGetProtoRevMaxPoolPointsPerTxResponse: {
    typeUrl: string;
    encode(message: QueryGetProtoRevMaxPoolPointsPerTxResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryGetProtoRevMaxPoolPointsPerTxResponse;
    fromPartial(object: Partial<QueryGetProtoRevMaxPoolPointsPerTxResponse>): QueryGetProtoRevMaxPoolPointsPerTxResponse;
    fromAmino(object: QueryGetProtoRevMaxPoolPointsPerTxResponseAmino): QueryGetProtoRevMaxPoolPointsPerTxResponse;
    toAmino(message: QueryGetProtoRevMaxPoolPointsPerTxResponse): QueryGetProtoRevMaxPoolPointsPerTxResponseAmino;
    fromAminoMsg(object: QueryGetProtoRevMaxPoolPointsPerTxResponseAminoMsg): QueryGetProtoRevMaxPoolPointsPerTxResponse;
    toAminoMsg(message: QueryGetProtoRevMaxPoolPointsPerTxResponse): QueryGetProtoRevMaxPoolPointsPerTxResponseAminoMsg;
    fromProtoMsg(message: QueryGetProtoRevMaxPoolPointsPerTxResponseProtoMsg): QueryGetProtoRevMaxPoolPointsPerTxResponse;
    toProto(message: QueryGetProtoRevMaxPoolPointsPerTxResponse): Uint8Array;
    toProtoMsg(message: QueryGetProtoRevMaxPoolPointsPerTxResponse): QueryGetProtoRevMaxPoolPointsPerTxResponseProtoMsg;
};
export declare const QueryGetProtoRevBaseDenomsRequest: {
    typeUrl: string;
    encode(_: QueryGetProtoRevBaseDenomsRequest, writer?: BinaryWriter): BinaryWriter;
    fromJSON(_: any): QueryGetProtoRevBaseDenomsRequest;
    fromPartial(_: Partial<QueryGetProtoRevBaseDenomsRequest>): QueryGetProtoRevBaseDenomsRequest;
    fromAmino(_: QueryGetProtoRevBaseDenomsRequestAmino): QueryGetProtoRevBaseDenomsRequest;
    toAmino(_: QueryGetProtoRevBaseDenomsRequest): QueryGetProtoRevBaseDenomsRequestAmino;
    fromAminoMsg(object: QueryGetProtoRevBaseDenomsRequestAminoMsg): QueryGetProtoRevBaseDenomsRequest;
    toAminoMsg(message: QueryGetProtoRevBaseDenomsRequest): QueryGetProtoRevBaseDenomsRequestAminoMsg;
    fromProtoMsg(message: QueryGetProtoRevBaseDenomsRequestProtoMsg): QueryGetProtoRevBaseDenomsRequest;
    toProto(message: QueryGetProtoRevBaseDenomsRequest): Uint8Array;
    toProtoMsg(message: QueryGetProtoRevBaseDenomsRequest): QueryGetProtoRevBaseDenomsRequestProtoMsg;
};
export declare const QueryGetProtoRevBaseDenomsResponse: {
    typeUrl: string;
    encode(message: QueryGetProtoRevBaseDenomsResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryGetProtoRevBaseDenomsResponse;
    fromPartial(object: Partial<QueryGetProtoRevBaseDenomsResponse>): QueryGetProtoRevBaseDenomsResponse;
    fromAmino(object: QueryGetProtoRevBaseDenomsResponseAmino): QueryGetProtoRevBaseDenomsResponse;
    toAmino(message: QueryGetProtoRevBaseDenomsResponse): QueryGetProtoRevBaseDenomsResponseAmino;
    fromAminoMsg(object: QueryGetProtoRevBaseDenomsResponseAminoMsg): QueryGetProtoRevBaseDenomsResponse;
    toAminoMsg(message: QueryGetProtoRevBaseDenomsResponse): QueryGetProtoRevBaseDenomsResponseAminoMsg;
    fromProtoMsg(message: QueryGetProtoRevBaseDenomsResponseProtoMsg): QueryGetProtoRevBaseDenomsResponse;
    toProto(message: QueryGetProtoRevBaseDenomsResponse): Uint8Array;
    toProtoMsg(message: QueryGetProtoRevBaseDenomsResponse): QueryGetProtoRevBaseDenomsResponseProtoMsg;
};
export declare const QueryGetProtoRevEnabledRequest: {
    typeUrl: string;
    encode(_: QueryGetProtoRevEnabledRequest, writer?: BinaryWriter): BinaryWriter;
    fromJSON(_: any): QueryGetProtoRevEnabledRequest;
    fromPartial(_: Partial<QueryGetProtoRevEnabledRequest>): QueryGetProtoRevEnabledRequest;
    fromAmino(_: QueryGetProtoRevEnabledRequestAmino): QueryGetProtoRevEnabledRequest;
    toAmino(_: QueryGetProtoRevEnabledRequest): QueryGetProtoRevEnabledRequestAmino;
    fromAminoMsg(object: QueryGetProtoRevEnabledRequestAminoMsg): QueryGetProtoRevEnabledRequest;
    toAminoMsg(message: QueryGetProtoRevEnabledRequest): QueryGetProtoRevEnabledRequestAminoMsg;
    fromProtoMsg(message: QueryGetProtoRevEnabledRequestProtoMsg): QueryGetProtoRevEnabledRequest;
    toProto(message: QueryGetProtoRevEnabledRequest): Uint8Array;
    toProtoMsg(message: QueryGetProtoRevEnabledRequest): QueryGetProtoRevEnabledRequestProtoMsg;
};
export declare const QueryGetProtoRevEnabledResponse: {
    typeUrl: string;
    encode(message: QueryGetProtoRevEnabledResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryGetProtoRevEnabledResponse;
    fromPartial(object: Partial<QueryGetProtoRevEnabledResponse>): QueryGetProtoRevEnabledResponse;
    fromAmino(object: QueryGetProtoRevEnabledResponseAmino): QueryGetProtoRevEnabledResponse;
    toAmino(message: QueryGetProtoRevEnabledResponse): QueryGetProtoRevEnabledResponseAmino;
    fromAminoMsg(object: QueryGetProtoRevEnabledResponseAminoMsg): QueryGetProtoRevEnabledResponse;
    toAminoMsg(message: QueryGetProtoRevEnabledResponse): QueryGetProtoRevEnabledResponseAminoMsg;
    fromProtoMsg(message: QueryGetProtoRevEnabledResponseProtoMsg): QueryGetProtoRevEnabledResponse;
    toProto(message: QueryGetProtoRevEnabledResponse): Uint8Array;
    toProtoMsg(message: QueryGetProtoRevEnabledResponse): QueryGetProtoRevEnabledResponseProtoMsg;
};
export declare const QueryGetProtoRevPoolRequest: {
    typeUrl: string;
    encode(message: QueryGetProtoRevPoolRequest, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryGetProtoRevPoolRequest;
    fromPartial(object: Partial<QueryGetProtoRevPoolRequest>): QueryGetProtoRevPoolRequest;
    fromAmino(object: QueryGetProtoRevPoolRequestAmino): QueryGetProtoRevPoolRequest;
    toAmino(message: QueryGetProtoRevPoolRequest): QueryGetProtoRevPoolRequestAmino;
    fromAminoMsg(object: QueryGetProtoRevPoolRequestAminoMsg): QueryGetProtoRevPoolRequest;
    toAminoMsg(message: QueryGetProtoRevPoolRequest): QueryGetProtoRevPoolRequestAminoMsg;
    fromProtoMsg(message: QueryGetProtoRevPoolRequestProtoMsg): QueryGetProtoRevPoolRequest;
    toProto(message: QueryGetProtoRevPoolRequest): Uint8Array;
    toProtoMsg(message: QueryGetProtoRevPoolRequest): QueryGetProtoRevPoolRequestProtoMsg;
};
export declare const QueryGetProtoRevPoolResponse: {
    typeUrl: string;
    encode(message: QueryGetProtoRevPoolResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryGetProtoRevPoolResponse;
    fromPartial(object: Partial<QueryGetProtoRevPoolResponse>): QueryGetProtoRevPoolResponse;
    fromAmino(object: QueryGetProtoRevPoolResponseAmino): QueryGetProtoRevPoolResponse;
    toAmino(message: QueryGetProtoRevPoolResponse): QueryGetProtoRevPoolResponseAmino;
    fromAminoMsg(object: QueryGetProtoRevPoolResponseAminoMsg): QueryGetProtoRevPoolResponse;
    toAminoMsg(message: QueryGetProtoRevPoolResponse): QueryGetProtoRevPoolResponseAminoMsg;
    fromProtoMsg(message: QueryGetProtoRevPoolResponseProtoMsg): QueryGetProtoRevPoolResponse;
    toProto(message: QueryGetProtoRevPoolResponse): Uint8Array;
    toProtoMsg(message: QueryGetProtoRevPoolResponse): QueryGetProtoRevPoolResponseProtoMsg;
};
