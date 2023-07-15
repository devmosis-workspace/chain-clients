import { Params, ParamsSDKType, InsuranceFund, InsuranceFundSDKType } from "./insurance";
import { Coin, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { GenesisState, GenesisStateSDKType } from "./genesis";
import * as _m0 from "protobufjs/minimal";
/**
 * QueryInsuranceParamsRequest is the request type for the Query/InsuranceParams
 * RPC method.
 */
export interface QueryInsuranceParamsRequest {
}
/**
 * QueryInsuranceParamsRequest is the request type for the Query/InsuranceParams
 * RPC method.
 */
export interface QueryInsuranceParamsRequestSDKType {
}
/**
 * QueryInsuranceParamsRequest is the response type for the
 * Query/InsuranceParams RPC method.
 */
export interface QueryInsuranceParamsResponse {
    params?: Params;
}
/**
 * QueryInsuranceParamsRequest is the response type for the
 * Query/InsuranceParams RPC method.
 */
export interface QueryInsuranceParamsResponseSDKType {
    params?: ParamsSDKType;
}
/**
 * QueryInsuranceFundRequest is the request type for the Query/InsuranceFunds
 * RPC method.
 */
export interface QueryInsuranceFundRequest {
    /** Market ID for the market */
    marketId: string;
}
/**
 * QueryInsuranceFundRequest is the request type for the Query/InsuranceFunds
 * RPC method.
 */
export interface QueryInsuranceFundRequestSDKType {
    market_id: string;
}
/**
 * QueryInsuranceFundResponse is the response type for the Query/InsuranceFund
 * RPC method.
 */
export interface QueryInsuranceFundResponse {
    /**
     * QueryInsuranceFundResponse is the response type for the Query/InsuranceFund
     * RPC method.
     */
    fund?: InsuranceFund;
}
/**
 * QueryInsuranceFundResponse is the response type for the Query/InsuranceFund
 * RPC method.
 */
export interface QueryInsuranceFundResponseSDKType {
    fund?: InsuranceFundSDKType;
}
/**
 * QueryInsuranceFundsRequest is the request type for the Query/InsuranceFunds
 * RPC method.
 */
export interface QueryInsuranceFundsRequest {
}
/**
 * QueryInsuranceFundsRequest is the request type for the Query/InsuranceFunds
 * RPC method.
 */
export interface QueryInsuranceFundsRequestSDKType {
}
/**
 * QueryInsuranceFundsResponse is the response type for the Query/InsuranceFunds
 * RPC method.
 */
export interface QueryInsuranceFundsResponse {
    funds: InsuranceFund[];
}
/**
 * QueryInsuranceFundsResponse is the response type for the Query/InsuranceFunds
 * RPC method.
 */
export interface QueryInsuranceFundsResponseSDKType {
    funds: InsuranceFundSDKType[];
}
/**
 * QueryEstimatedRedemptionsRequest is the request type for the
 * Query/EstimatedRedemptions RPC method.
 */
export interface QueryEstimatedRedemptionsRequest {
    marketId: string;
    address: string;
}
/**
 * QueryEstimatedRedemptionsRequest is the request type for the
 * Query/EstimatedRedemptions RPC method.
 */
export interface QueryEstimatedRedemptionsRequestSDKType {
    marketId: string;
    address: string;
}
/**
 * QueryEstimatedRedemptionsResponse is the response type for the
 * Query/EstimatedRedemptions RPC method.
 */
export interface QueryEstimatedRedemptionsResponse {
    amount: Coin[];
}
/**
 * QueryEstimatedRedemptionsResponse is the response type for the
 * Query/EstimatedRedemptions RPC method.
 */
export interface QueryEstimatedRedemptionsResponseSDKType {
    amount: CoinSDKType[];
}
/**
 * QueryPendingRedemptionsRequest is the request type for the
 * Query/PendingRedemptions RPC method.
 */
export interface QueryPendingRedemptionsRequest {
    marketId: string;
    address: string;
}
/**
 * QueryPendingRedemptionsRequest is the request type for the
 * Query/PendingRedemptions RPC method.
 */
export interface QueryPendingRedemptionsRequestSDKType {
    marketId: string;
    address: string;
}
/**
 * QueryPendingRedemptionsResponse is the response type for the
 * Query/PendingRedemptions RPC method.
 */
export interface QueryPendingRedemptionsResponse {
    amount: Coin[];
}
/**
 * QueryPendingRedemptionsResponse is the response type for the
 * Query/PendingRedemptions RPC method.
 */
export interface QueryPendingRedemptionsResponseSDKType {
    amount: CoinSDKType[];
}
/**
 * QueryModuleStateRequest is the request type for the
 * Query/InsuranceModuleState RPC method.
 */
export interface QueryModuleStateRequest {
}
/**
 * QueryModuleStateRequest is the request type for the
 * Query/InsuranceModuleState RPC method.
 */
export interface QueryModuleStateRequestSDKType {
}
/**
 * QueryModuleStateResponse is the response type for the
 * Query/InsuranceModuleState RPC method.
 */
export interface QueryModuleStateResponse {
    /**
     * QueryModuleStateResponse is the response type for the
     * Query/InsuranceModuleState RPC method.
     */
    state?: GenesisState;
}
/**
 * QueryModuleStateResponse is the response type for the
 * Query/InsuranceModuleState RPC method.
 */
export interface QueryModuleStateResponseSDKType {
    state?: GenesisStateSDKType;
}
export declare const QueryInsuranceParamsRequest: {
    encode(_: QueryInsuranceParamsRequest, writer?: _m0.Writer): _m0.Writer;
    fromJSON(_: any): QueryInsuranceParamsRequest;
    fromPartial(_: Partial<QueryInsuranceParamsRequest>): QueryInsuranceParamsRequest;
};
export declare const QueryInsuranceParamsResponse: {
    encode(message: QueryInsuranceParamsResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): QueryInsuranceParamsResponse;
    fromPartial(object: Partial<QueryInsuranceParamsResponse>): QueryInsuranceParamsResponse;
};
export declare const QueryInsuranceFundRequest: {
    encode(message: QueryInsuranceFundRequest, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): QueryInsuranceFundRequest;
    fromPartial(object: Partial<QueryInsuranceFundRequest>): QueryInsuranceFundRequest;
};
export declare const QueryInsuranceFundResponse: {
    encode(message: QueryInsuranceFundResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): QueryInsuranceFundResponse;
    fromPartial(object: Partial<QueryInsuranceFundResponse>): QueryInsuranceFundResponse;
};
export declare const QueryInsuranceFundsRequest: {
    encode(_: QueryInsuranceFundsRequest, writer?: _m0.Writer): _m0.Writer;
    fromJSON(_: any): QueryInsuranceFundsRequest;
    fromPartial(_: Partial<QueryInsuranceFundsRequest>): QueryInsuranceFundsRequest;
};
export declare const QueryInsuranceFundsResponse: {
    encode(message: QueryInsuranceFundsResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): QueryInsuranceFundsResponse;
    fromPartial(object: Partial<QueryInsuranceFundsResponse>): QueryInsuranceFundsResponse;
};
export declare const QueryEstimatedRedemptionsRequest: {
    encode(message: QueryEstimatedRedemptionsRequest, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): QueryEstimatedRedemptionsRequest;
    fromPartial(object: Partial<QueryEstimatedRedemptionsRequest>): QueryEstimatedRedemptionsRequest;
};
export declare const QueryEstimatedRedemptionsResponse: {
    encode(message: QueryEstimatedRedemptionsResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): QueryEstimatedRedemptionsResponse;
    fromPartial(object: Partial<QueryEstimatedRedemptionsResponse>): QueryEstimatedRedemptionsResponse;
};
export declare const QueryPendingRedemptionsRequest: {
    encode(message: QueryPendingRedemptionsRequest, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): QueryPendingRedemptionsRequest;
    fromPartial(object: Partial<QueryPendingRedemptionsRequest>): QueryPendingRedemptionsRequest;
};
export declare const QueryPendingRedemptionsResponse: {
    encode(message: QueryPendingRedemptionsResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): QueryPendingRedemptionsResponse;
    fromPartial(object: Partial<QueryPendingRedemptionsResponse>): QueryPendingRedemptionsResponse;
};
export declare const QueryModuleStateRequest: {
    encode(_: QueryModuleStateRequest, writer?: _m0.Writer): _m0.Writer;
    fromJSON(_: any): QueryModuleStateRequest;
    fromPartial(_: Partial<QueryModuleStateRequest>): QueryModuleStateRequest;
};
export declare const QueryModuleStateResponse: {
    encode(message: QueryModuleStateResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): QueryModuleStateResponse;
    fromPartial(object: Partial<QueryModuleStateResponse>): QueryModuleStateResponse;
};
