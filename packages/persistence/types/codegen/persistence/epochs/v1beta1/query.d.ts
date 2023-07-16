import { EpochInfo, EpochInfoSDKType } from "./genesis";
import { Long } from "../../../helpers";
import * as _m0 from "protobufjs/minimal";
export interface QueryEpochsInfoRequest {
}
export interface QueryEpochsInfoRequestSDKType {
}
export interface QueryEpochsInfoResponse {
    epochs: EpochInfo[];
}
export interface QueryEpochsInfoResponseSDKType {
    epochs: EpochInfoSDKType[];
}
export interface QueryCurrentEpochRequest {
    identifier: string;
}
export interface QueryCurrentEpochRequestSDKType {
    identifier: string;
}
export interface QueryCurrentEpochResponse {
    currentEpoch: Long;
}
export interface QueryCurrentEpochResponseSDKType {
    current_epoch: Long;
}
export declare const QueryEpochsInfoRequest: {
    encode(_: QueryEpochsInfoRequest, writer?: _m0.Writer): _m0.Writer;
    fromJSON(_: any): QueryEpochsInfoRequest;
    fromPartial(_: Partial<QueryEpochsInfoRequest>): QueryEpochsInfoRequest;
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
