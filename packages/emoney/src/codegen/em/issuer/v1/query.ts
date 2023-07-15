import { Issuer, IssuerSDKType } from "./issuer";
import * as _m0 from "protobufjs/minimal";
export interface QueryIssuersRequest {}
export interface QueryIssuersRequestSDKType {}
export interface QueryIssuersResponse {
  issuers: Issuer[];
}
export interface QueryIssuersResponseSDKType {
  issuers: IssuerSDKType[];
}
function createBaseQueryIssuersRequest(): QueryIssuersRequest {
  return {};
}
export const QueryIssuersRequest = {
  encode(_: QueryIssuersRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },
  fromJSON(_: any): QueryIssuersRequest {
    return {};
  },
  fromPartial(_: Partial<QueryIssuersRequest>): QueryIssuersRequest {
    const message = createBaseQueryIssuersRequest();
    return message;
  }
};
function createBaseQueryIssuersResponse(): QueryIssuersResponse {
  return {
    issuers: []
  };
}
export const QueryIssuersResponse = {
  encode(message: QueryIssuersResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.issuers) {
      Issuer.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): QueryIssuersResponse {
    return {
      issuers: Array.isArray(object?.issuers) ? object.issuers.map((e: any) => Issuer.fromJSON(e)) : []
    };
  },
  fromPartial(object: Partial<QueryIssuersResponse>): QueryIssuersResponse {
    const message = createBaseQueryIssuersResponse();
    message.issuers = object.issuers?.map(e => Issuer.fromPartial(e)) || [];
    return message;
  }
};