import { InflationState, InflationStateSDKType } from "./inflation";
import * as _m0 from "protobufjs/minimal";
export interface QueryInflationRequest {
}
export interface QueryInflationRequestSDKType {
}
export interface QueryInflationResponse {
    state?: InflationState;
}
export interface QueryInflationResponseSDKType {
    state?: InflationStateSDKType;
}
export declare const QueryInflationRequest: {
    encode(_: QueryInflationRequest, writer?: _m0.Writer): _m0.Writer;
    fromJSON(_: any): QueryInflationRequest;
    fromPartial(_: Partial<QueryInflationRequest>): QueryInflationRequest;
};
export declare const QueryInflationResponse: {
    encode(message: QueryInflationResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): QueryInflationResponse;
    fromPartial(object: Partial<QueryInflationResponse>): QueryInflationResponse;
};
