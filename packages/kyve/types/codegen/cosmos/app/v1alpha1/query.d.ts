import { Config, ConfigSDKType } from "./config";
import * as _m0 from "protobufjs/minimal";
/** QueryConfigRequest is the Query/Config request type. */
export interface QueryConfigRequest {
}
/** QueryConfigRequest is the Query/Config request type. */
export interface QueryConfigRequestSDKType {
}
/** QueryConfigRequest is the Query/Config response type. */
export interface QueryConfigResponse {
    /** config is the current app config. */
    config?: Config;
}
/** QueryConfigRequest is the Query/Config response type. */
export interface QueryConfigResponseSDKType {
    config?: ConfigSDKType;
}
export declare const QueryConfigRequest: {
    encode(_: QueryConfigRequest, writer?: _m0.Writer): _m0.Writer;
    fromJSON(_: any): QueryConfigRequest;
    fromPartial(_: Partial<QueryConfigRequest>): QueryConfigRequest;
};
export declare const QueryConfigResponse: {
    encode(message: QueryConfigResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): QueryConfigResponse;
    fromPartial(object: Partial<QueryConfigResponse>): QueryConfigResponse;
};
