import * as _m0 from "protobufjs/minimal";
/**
 * QueryListPrivilegedRequest is request type for the Query/ListPrivileged RPC
 * method.
 */
export interface QueryListPrivilegedRequest {}
/**
 * QueryListPrivilegedRequest is request type for the Query/ListPrivileged RPC
 * method.
 */
export interface QueryListPrivilegedRequestSDKType {}
/**
 * QueryListPrivilegedResponse is response type for the Query/ListPrivileged RPC
 * method.
 */
export interface QueryListPrivilegedResponse {
  /**
   * contract_addresses holds all the smart contract addresses which have
   * privilege status.
   */
  contractAddresses: string[];
}
/**
 * QueryListPrivilegedResponse is response type for the Query/ListPrivileged RPC
 * method.
 */
export interface QueryListPrivilegedResponseSDKType {
  contract_addresses: string[];
}
function createBaseQueryListPrivilegedRequest(): QueryListPrivilegedRequest {
  return {};
}
export const QueryListPrivilegedRequest = {
  encode(_: QueryListPrivilegedRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },
  fromJSON(_: any): QueryListPrivilegedRequest {
    return {};
  },
  fromPartial(_: Partial<QueryListPrivilegedRequest>): QueryListPrivilegedRequest {
    const message = createBaseQueryListPrivilegedRequest();
    return message;
  }
};
function createBaseQueryListPrivilegedResponse(): QueryListPrivilegedResponse {
  return {
    contractAddresses: []
  };
}
export const QueryListPrivilegedResponse = {
  encode(message: QueryListPrivilegedResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.contractAddresses) {
      writer.uint32(10).string(v!);
    }
    return writer;
  },
  fromJSON(object: any): QueryListPrivilegedResponse {
    return {
      contractAddresses: Array.isArray(object?.contractAddresses) ? object.contractAddresses.map((e: any) => String(e)) : []
    };
  },
  fromPartial(object: Partial<QueryListPrivilegedResponse>): QueryListPrivilegedResponse {
    const message = createBaseQueryListPrivilegedResponse();
    message.contractAddresses = object.contractAddresses?.map(e => e) || [];
    return message;
  }
};