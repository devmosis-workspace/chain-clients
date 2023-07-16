import { Params, ParamsSDKType } from "./params";
import { FeeInfo, FeeInfoSDKType } from "./genesis";
import { Long } from "../helpers";
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
export interface FeeInfoRequest {
    channelId: string;
    portId: string;
    sequence: Long;
}
export interface FeeInfoRequestSDKType {
    channel_id: string;
    port_id: string;
    sequence: Long;
}
export interface FeeInfoResponse {
    feeInfo?: FeeInfo;
}
export interface FeeInfoResponseSDKType {
    fee_info?: FeeInfoSDKType;
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
export declare const FeeInfoRequest: {
    encode(message: FeeInfoRequest, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): FeeInfoRequest;
    fromPartial(object: Partial<FeeInfoRequest>): FeeInfoRequest;
};
export declare const FeeInfoResponse: {
    encode(message: FeeInfoResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): FeeInfoResponse;
    fromPartial(object: Partial<FeeInfoResponse>): FeeInfoResponse;
};
