import { PageRequest, PageRequestSDKType, PageResponse, PageResponseSDKType } from "../../../cosmos/base/query/v1beta1/pagination";
import { EpochInfo, EpochInfoSDKType } from "./genesis";
import { Long } from "../../../helpers";
import * as _m0 from "protobufjs/minimal";
/**
 * QueryEpochsInfoRequest is the request type for the Query/EpochInfos RPC
 * method.
 */
export interface QueryEpochsInfoRequest {
    /** pagination defines an optional pagination for the request. */
    pagination?: PageRequest;
}
/**
 * QueryEpochsInfoRequest is the request type for the Query/EpochInfos RPC
 * method.
 */
export interface QueryEpochsInfoRequestSDKType {
    pagination?: PageRequestSDKType;
}
/**
 * QueryEpochsInfoResponse is the response type for the Query/EpochInfos RPC
 * method.
 */
export interface QueryEpochsInfoResponse {
    /** epochs is a slice of all EpochInfos */
    epochs: EpochInfo[];
    /** pagination defines an optional pagination for the request. */
    pagination?: PageResponse;
}
/**
 * QueryEpochsInfoResponse is the response type for the Query/EpochInfos RPC
 * method.
 */
export interface QueryEpochsInfoResponseSDKType {
    epochs: EpochInfoSDKType[];
    pagination?: PageResponseSDKType;
}
/**
 * QueryCurrentEpochRequest is the request type for the Query/EpochInfos RPC
 * method.
 */
export interface QueryCurrentEpochRequest {
    /** identifier of the current epoch */
    identifier: string;
}
/**
 * QueryCurrentEpochRequest is the request type for the Query/EpochInfos RPC
 * method.
 */
export interface QueryCurrentEpochRequestSDKType {
    identifier: string;
}
/**
 * QueryCurrentEpochResponse is the response type for the Query/EpochInfos RPC
 * method.
 */
export interface QueryCurrentEpochResponse {
    /** current_epoch is the number of the current epoch */
    currentEpoch: Long;
}
/**
 * QueryCurrentEpochResponse is the response type for the Query/EpochInfos RPC
 * method.
 */
export interface QueryCurrentEpochResponseSDKType {
    current_epoch: Long;
}
export declare const QueryEpochsInfoRequest: {
    encode(message: QueryEpochsInfoRequest, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): QueryEpochsInfoRequest;
    fromPartial(object: Partial<QueryEpochsInfoRequest>): QueryEpochsInfoRequest;
};
export declare const QueryEpochsInfoResponse: {
    encode(message: QueryEpochsInfoResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): QueryEpochsInfoResponse;
    fromPartial(object: Partial<QueryEpochsInfoResponse>): QueryEpochsInfoResponse;
};
export declare const QueryCurrentEpochRequest: {
    encode(message: QueryCurrentEpochRequest, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): QueryCurrentEpochRequest;
    fromPartial(object: Partial<QueryCurrentEpochRequest>): QueryCurrentEpochRequest;
};
export declare const QueryCurrentEpochResponse: {
    encode(message: QueryCurrentEpochResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): QueryCurrentEpochResponse;
    fromPartial(object: Partial<QueryCurrentEpochResponse>): QueryCurrentEpochResponse;
};
