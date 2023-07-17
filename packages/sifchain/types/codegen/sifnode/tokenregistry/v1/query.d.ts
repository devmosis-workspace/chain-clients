import { Registry, RegistrySDKType } from "./types";
import * as _m0 from "protobufjs/minimal";
export interface QueryEntriesResponse {
    registry?: Registry;
}
export interface QueryEntriesResponseSDKType {
    registry?: RegistrySDKType;
}
export interface QueryEntriesRequest {
}
export interface QueryEntriesRequestSDKType {
}
export declare const QueryEntriesResponse: {
    encode(message: QueryEntriesResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): QueryEntriesResponse;
    fromPartial(object: Partial<QueryEntriesResponse>): QueryEntriesResponse;
};
export declare const QueryEntriesRequest: {
    encode(_: QueryEntriesRequest, writer?: _m0.Writer): _m0.Writer;
    fromJSON(_: any): QueryEntriesRequest;
    fromPartial(_: Partial<QueryEntriesRequest>): QueryEntriesRequest;
};
