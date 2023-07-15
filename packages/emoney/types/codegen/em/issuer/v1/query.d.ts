import { Issuer, IssuerSDKType } from "./issuer";
import * as _m0 from "protobufjs/minimal";
export interface QueryIssuersRequest {
}
export interface QueryIssuersRequestSDKType {
}
export interface QueryIssuersResponse {
    issuers: Issuer[];
}
export interface QueryIssuersResponseSDKType {
    issuers: IssuerSDKType[];
}
export declare const QueryIssuersRequest: {
    encode(_: QueryIssuersRequest, writer?: _m0.Writer): _m0.Writer;
    fromJSON(_: any): QueryIssuersRequest;
    fromPartial(_: Partial<QueryIssuersRequest>): QueryIssuersRequest;
};
export declare const QueryIssuersResponse: {
    encode(message: QueryIssuersResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): QueryIssuersResponse;
    fromPartial(object: Partial<QueryIssuersResponse>): QueryIssuersResponse;
};
