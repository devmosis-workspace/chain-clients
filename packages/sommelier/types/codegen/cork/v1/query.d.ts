import { Params, ParamsSDKType } from "./genesis";
import { Cork, CorkSDKType, ScheduledCork, ScheduledCorkSDKType } from "./cork";
import { Long } from "../../helpers";
import * as _m0 from "protobufjs/minimal";
/** QueryParamsRequest is the request type for the Query/Params gRPC method. */
export interface QueryParamsRequest {
}
/** QueryParamsRequest is the request type for the Query/Params gRPC method. */
export interface QueryParamsRequestSDKType {
}
/** QueryParamsRequest is the response type for the Query/Params gRPC method. */
export interface QueryParamsResponse {
    /** allocation parameters */
    params?: Params;
}
/** QueryParamsRequest is the response type for the Query/Params gRPC method. */
export interface QueryParamsResponseSDKType {
    params?: ParamsSDKType;
}
/** QuerySubmittedCorksRequest is the request type for the Query/QuerySubmittedCorks gRPC query method. */
export interface QuerySubmittedCorksRequest {
}
/** QuerySubmittedCorksRequest is the request type for the Query/QuerySubmittedCorks gRPC query method. */
export interface QuerySubmittedCorksRequestSDKType {
}
/** QuerySubmittedCorksResponse is the response type for the Query/QuerySubmittedCorks gRPC query method. */
export interface QuerySubmittedCorksResponse {
    /** corks in keeper awaiting vote */
    corks: Cork[];
}
/** QuerySubmittedCorksResponse is the response type for the Query/QuerySubmittedCorks gRPC query method. */
export interface QuerySubmittedCorksResponseSDKType {
    corks: CorkSDKType[];
}
/** QueryCommitPeriodRequest is the request type for the Query/QueryCommitPeriod gRPC method. */
export interface QueryCommitPeriodRequest {
}
/** QueryCommitPeriodRequest is the request type for the Query/QueryCommitPeriod gRPC method. */
export interface QueryCommitPeriodRequestSDKType {
}
/** QueryCommitPeriodResponse is the response type for the Query/QueryCommitPeriod gRPC method. */
export interface QueryCommitPeriodResponse {
    /** block height at which the query was processed */
    currentHeight: Long;
    /** latest vote period start block height */
    votePeriodStart: Long;
    /** block height at which the current voting period ends */
    votePeriodEnd: Long;
}
/** QueryCommitPeriodResponse is the response type for the Query/QueryCommitPeriod gRPC method. */
export interface QueryCommitPeriodResponseSDKType {
    current_height: Long;
    vote_period_start: Long;
    vote_period_end: Long;
}
/** QueryCellarIDsRequest is the request type for Query/QueryCellarIDs gRPC method. */
export interface QueryCellarIDsRequest {
}
/** QueryCellarIDsRequest is the request type for Query/QueryCellarIDs gRPC method. */
export interface QueryCellarIDsRequestSDKType {
}
/** QueryCellarIDsResponse is the response type for Query/QueryCellars gRPC method. */
export interface QueryCellarIDsResponse {
    cellarIds: string[];
}
/** QueryCellarIDsResponse is the response type for Query/QueryCellars gRPC method. */
export interface QueryCellarIDsResponseSDKType {
    cellar_ids: string[];
}
/** QueryScheduledCorksRequest */
export interface QueryScheduledCorksRequest {
}
/** QueryScheduledCorksRequest */
export interface QueryScheduledCorksRequestSDKType {
}
/** QueryScheduledCorksResponse */
export interface QueryScheduledCorksResponse {
    corks: ScheduledCork[];
}
/** QueryScheduledCorksResponse */
export interface QueryScheduledCorksResponseSDKType {
    corks: ScheduledCorkSDKType[];
}
/** QueryScheduledBlockHeightsRequest */
export interface QueryScheduledBlockHeightsRequest {
}
/** QueryScheduledBlockHeightsRequest */
export interface QueryScheduledBlockHeightsRequestSDKType {
}
/** QueryScheduledBlockHeightsResponse */
export interface QueryScheduledBlockHeightsResponse {
    blockHeights: Long[];
}
/** QueryScheduledBlockHeightsResponse */
export interface QueryScheduledBlockHeightsResponseSDKType {
    block_heights: Long[];
}
/** QueryScheduledCorksByBlockHeightRequest */
export interface QueryScheduledCorksByBlockHeightRequest {
    blockHeight: Long;
}
/** QueryScheduledCorksByBlockHeightRequest */
export interface QueryScheduledCorksByBlockHeightRequestSDKType {
    block_height: Long;
}
/** QueryScheduledCorksByBlockHeightResponse */
export interface QueryScheduledCorksByBlockHeightResponse {
    corks: ScheduledCork[];
}
/** QueryScheduledCorksByBlockHeightResponse */
export interface QueryScheduledCorksByBlockHeightResponseSDKType {
    corks: ScheduledCorkSDKType[];
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
export declare const QuerySubmittedCorksRequest: {
    encode(_: QuerySubmittedCorksRequest, writer?: _m0.Writer): _m0.Writer;
    fromJSON(_: any): QuerySubmittedCorksRequest;
    fromPartial(_: Partial<QuerySubmittedCorksRequest>): QuerySubmittedCorksRequest;
};
export declare const QuerySubmittedCorksResponse: {
    encode(message: QuerySubmittedCorksResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): QuerySubmittedCorksResponse;
    fromPartial(object: Partial<QuerySubmittedCorksResponse>): QuerySubmittedCorksResponse;
};
export declare const QueryCommitPeriodRequest: {
    encode(_: QueryCommitPeriodRequest, writer?: _m0.Writer): _m0.Writer;
    fromJSON(_: any): QueryCommitPeriodRequest;
    fromPartial(_: Partial<QueryCommitPeriodRequest>): QueryCommitPeriodRequest;
};
export declare const QueryCommitPeriodResponse: {
    encode(message: QueryCommitPeriodResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): QueryCommitPeriodResponse;
    fromPartial(object: Partial<QueryCommitPeriodResponse>): QueryCommitPeriodResponse;
};
export declare const QueryCellarIDsRequest: {
    encode(_: QueryCellarIDsRequest, writer?: _m0.Writer): _m0.Writer;
    fromJSON(_: any): QueryCellarIDsRequest;
    fromPartial(_: Partial<QueryCellarIDsRequest>): QueryCellarIDsRequest;
};
export declare const QueryCellarIDsResponse: {
    encode(message: QueryCellarIDsResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): QueryCellarIDsResponse;
    fromPartial(object: Partial<QueryCellarIDsResponse>): QueryCellarIDsResponse;
};
export declare const QueryScheduledCorksRequest: {
    encode(_: QueryScheduledCorksRequest, writer?: _m0.Writer): _m0.Writer;
    fromJSON(_: any): QueryScheduledCorksRequest;
    fromPartial(_: Partial<QueryScheduledCorksRequest>): QueryScheduledCorksRequest;
};
export declare const QueryScheduledCorksResponse: {
    encode(message: QueryScheduledCorksResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): QueryScheduledCorksResponse;
    fromPartial(object: Partial<QueryScheduledCorksResponse>): QueryScheduledCorksResponse;
};
export declare const QueryScheduledBlockHeightsRequest: {
    encode(_: QueryScheduledBlockHeightsRequest, writer?: _m0.Writer): _m0.Writer;
    fromJSON(_: any): QueryScheduledBlockHeightsRequest;
    fromPartial(_: Partial<QueryScheduledBlockHeightsRequest>): QueryScheduledBlockHeightsRequest;
};
export declare const QueryScheduledBlockHeightsResponse: {
    encode(message: QueryScheduledBlockHeightsResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): QueryScheduledBlockHeightsResponse;
    fromPartial(object: Partial<QueryScheduledBlockHeightsResponse>): QueryScheduledBlockHeightsResponse;
};
export declare const QueryScheduledCorksByBlockHeightRequest: {
    encode(message: QueryScheduledCorksByBlockHeightRequest, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): QueryScheduledCorksByBlockHeightRequest;
    fromPartial(object: Partial<QueryScheduledCorksByBlockHeightRequest>): QueryScheduledCorksByBlockHeightRequest;
};
export declare const QueryScheduledCorksByBlockHeightResponse: {
    encode(message: QueryScheduledCorksByBlockHeightResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): QueryScheduledCorksByBlockHeightResponse;
    fromPartial(object: Partial<QueryScheduledCorksByBlockHeightResponse>): QueryScheduledCorksByBlockHeightResponse;
};
