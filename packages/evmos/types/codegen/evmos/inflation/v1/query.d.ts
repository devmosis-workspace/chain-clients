import { DecCoin, DecCoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { Params, ParamsSDKType } from "./genesis";
import { Long } from "../../../helpers";
import * as _m0 from "protobufjs/minimal";
/** QueryPeriodRequest is the request type for the Query/Period RPC method. */
export interface QueryPeriodRequest {
}
/** QueryPeriodRequest is the request type for the Query/Period RPC method. */
export interface QueryPeriodRequestSDKType {
}
/** QueryPeriodResponse is the response type for the Query/Period RPC method. */
export interface QueryPeriodResponse {
    /** period is the current minting per epoch provision value. */
    period: Long;
}
/** QueryPeriodResponse is the response type for the Query/Period RPC method. */
export interface QueryPeriodResponseSDKType {
    period: Long;
}
/**
 * QueryEpochMintProvisionRequest is the request type for the
 * Query/EpochMintProvision RPC method.
 */
export interface QueryEpochMintProvisionRequest {
}
/**
 * QueryEpochMintProvisionRequest is the request type for the
 * Query/EpochMintProvision RPC method.
 */
export interface QueryEpochMintProvisionRequestSDKType {
}
/**
 * QueryEpochMintProvisionResponse is the response type for the
 * Query/EpochMintProvision RPC method.
 */
export interface QueryEpochMintProvisionResponse {
    /** epoch_mint_provision is the current minting per epoch provision value. */
    epochMintProvision?: DecCoin;
}
/**
 * QueryEpochMintProvisionResponse is the response type for the
 * Query/EpochMintProvision RPC method.
 */
export interface QueryEpochMintProvisionResponseSDKType {
    epoch_mint_provision?: DecCoinSDKType;
}
/**
 * QuerySkippedEpochsRequest is the request type for the Query/SkippedEpochs RPC
 * method.
 */
export interface QuerySkippedEpochsRequest {
}
/**
 * QuerySkippedEpochsRequest is the request type for the Query/SkippedEpochs RPC
 * method.
 */
export interface QuerySkippedEpochsRequestSDKType {
}
/**
 * QuerySkippedEpochsResponse is the response type for the Query/SkippedEpochs
 * RPC method.
 */
export interface QuerySkippedEpochsResponse {
    /** skipped_epochs is the number of epochs that the inflation module has been disabled. */
    skippedEpochs: Long;
}
/**
 * QuerySkippedEpochsResponse is the response type for the Query/SkippedEpochs
 * RPC method.
 */
export interface QuerySkippedEpochsResponseSDKType {
    skipped_epochs: Long;
}
/**
 * QueryCirculatingSupplyRequest is the request type for the
 * Query/CirculatingSupply RPC method.
 */
export interface QueryCirculatingSupplyRequest {
}
/**
 * QueryCirculatingSupplyRequest is the request type for the
 * Query/CirculatingSupply RPC method.
 */
export interface QueryCirculatingSupplyRequestSDKType {
}
/**
 * QueryCirculatingSupplyResponse is the response type for the
 * Query/CirculatingSupply RPC method.
 */
export interface QueryCirculatingSupplyResponse {
    /** circulating_supply is the total amount of coins in circulation */
    circulatingSupply?: DecCoin;
}
/**
 * QueryCirculatingSupplyResponse is the response type for the
 * Query/CirculatingSupply RPC method.
 */
export interface QueryCirculatingSupplyResponseSDKType {
    circulating_supply?: DecCoinSDKType;
}
/**
 * QueryInflationRateRequest is the request type for the Query/InflationRate RPC
 * method.
 */
export interface QueryInflationRateRequest {
}
/**
 * QueryInflationRateRequest is the request type for the Query/InflationRate RPC
 * method.
 */
export interface QueryInflationRateRequestSDKType {
}
/**
 * QueryInflationRateResponse is the response type for the Query/InflationRate
 * RPC method.
 */
export interface QueryInflationRateResponse {
    /** inflation_rate by which the total supply increases within one period */
    inflationRate: string;
}
/**
 * QueryInflationRateResponse is the response type for the Query/InflationRate
 * RPC method.
 */
export interface QueryInflationRateResponseSDKType {
    inflation_rate: string;
}
/** QueryParamsRequest is the request type for the Query/Params RPC method. */
export interface QueryParamsRequest {
}
/** QueryParamsRequest is the request type for the Query/Params RPC method. */
export interface QueryParamsRequestSDKType {
}
/** QueryParamsResponse is the response type for the Query/Params RPC method. */
export interface QueryParamsResponse {
    /** params defines the parameters of the module. */
    params?: Params;
}
/** QueryParamsResponse is the response type for the Query/Params RPC method. */
export interface QueryParamsResponseSDKType {
    params?: ParamsSDKType;
}
export declare const QueryPeriodRequest: {
    encode(_: QueryPeriodRequest, writer?: _m0.Writer): _m0.Writer;
    fromJSON(_: any): QueryPeriodRequest;
    fromPartial(_: Partial<QueryPeriodRequest>): QueryPeriodRequest;
};
export declare const QueryPeriodResponse: {
    encode(message: QueryPeriodResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): QueryPeriodResponse;
    fromPartial(object: Partial<QueryPeriodResponse>): QueryPeriodResponse;
};
export declare const QueryEpochMintProvisionRequest: {
    encode(_: QueryEpochMintProvisionRequest, writer?: _m0.Writer): _m0.Writer;
    fromJSON(_: any): QueryEpochMintProvisionRequest;
    fromPartial(_: Partial<QueryEpochMintProvisionRequest>): QueryEpochMintProvisionRequest;
};
export declare const QueryEpochMintProvisionResponse: {
    encode(message: QueryEpochMintProvisionResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): QueryEpochMintProvisionResponse;
    fromPartial(object: Partial<QueryEpochMintProvisionResponse>): QueryEpochMintProvisionResponse;
};
export declare const QuerySkippedEpochsRequest: {
    encode(_: QuerySkippedEpochsRequest, writer?: _m0.Writer): _m0.Writer;
    fromJSON(_: any): QuerySkippedEpochsRequest;
    fromPartial(_: Partial<QuerySkippedEpochsRequest>): QuerySkippedEpochsRequest;
};
export declare const QuerySkippedEpochsResponse: {
    encode(message: QuerySkippedEpochsResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): QuerySkippedEpochsResponse;
    fromPartial(object: Partial<QuerySkippedEpochsResponse>): QuerySkippedEpochsResponse;
};
export declare const QueryCirculatingSupplyRequest: {
    encode(_: QueryCirculatingSupplyRequest, writer?: _m0.Writer): _m0.Writer;
    fromJSON(_: any): QueryCirculatingSupplyRequest;
    fromPartial(_: Partial<QueryCirculatingSupplyRequest>): QueryCirculatingSupplyRequest;
};
export declare const QueryCirculatingSupplyResponse: {
    encode(message: QueryCirculatingSupplyResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): QueryCirculatingSupplyResponse;
    fromPartial(object: Partial<QueryCirculatingSupplyResponse>): QueryCirculatingSupplyResponse;
};
export declare const QueryInflationRateRequest: {
    encode(_: QueryInflationRateRequest, writer?: _m0.Writer): _m0.Writer;
    fromJSON(_: any): QueryInflationRateRequest;
    fromPartial(_: Partial<QueryInflationRateRequest>): QueryInflationRateRequest;
};
export declare const QueryInflationRateResponse: {
    encode(message: QueryInflationRateResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): QueryInflationRateResponse;
    fromPartial(object: Partial<QueryInflationRateResponse>): QueryInflationRateResponse;
};
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
