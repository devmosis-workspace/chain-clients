import { Params, ParamsSDKType } from "./genesis";
import * as _m0 from "protobufjs/minimal";
/** QueryParamsRequest defines the request type for querying x/issuance parameters. */
export interface QueryParamsRequest {
}
/** QueryParamsRequest defines the request type for querying x/issuance parameters. */
export interface QueryParamsRequestSDKType {
}
/** QueryParamsResponse defines the response type for querying x/issuance parameters. */
export interface QueryParamsResponse {
    params?: Params;
}
/** QueryParamsResponse defines the response type for querying x/issuance parameters. */
export interface QueryParamsResponseSDKType {
    params?: ParamsSDKType;
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
