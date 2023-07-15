import { Params, ParamsSDKType, Egress, EgressSDKType } from "./swingset";
import * as _m0 from "protobufjs/minimal";
import { isSet, bytesFromBase64 } from "../../helpers";
/** QueryParamsRequest is the request type for the Query/Params RPC method. */
export interface QueryParamsRequest {}
/** QueryParamsRequest is the request type for the Query/Params RPC method. */
export interface QueryParamsRequestSDKType {}
/** QueryParamsResponse is the response type for the Query/Params RPC method. */
export interface QueryParamsResponse {
  /** params defines the parameters of the module. */
  params?: Params;
}
/** QueryParamsResponse is the response type for the Query/Params RPC method. */
export interface QueryParamsResponseSDKType {
  params?: ParamsSDKType;
}
/** QueryEgressRequest is the request type for the Query/Egress RPC method */
export interface QueryEgressRequest {
  peer: Uint8Array;
}
/** QueryEgressRequest is the request type for the Query/Egress RPC method */
export interface QueryEgressRequestSDKType {
  peer: Uint8Array;
}
/** QueryEgressResponse is the egress response. */
export interface QueryEgressResponse {
  egress?: Egress;
}
/** QueryEgressResponse is the egress response. */
export interface QueryEgressResponseSDKType {
  egress?: EgressSDKType;
}
/** QueryMailboxRequest is the mailbox query. */
export interface QueryMailboxRequest {
  peer: Uint8Array;
}
/** QueryMailboxRequest is the mailbox query. */
export interface QueryMailboxRequestSDKType {
  peer: Uint8Array;
}
/** QueryMailboxResponse is the mailbox response. */
export interface QueryMailboxResponse {
  value: string;
}
/** QueryMailboxResponse is the mailbox response. */
export interface QueryMailboxResponseSDKType {
  value: string;
}
function createBaseQueryParamsRequest(): QueryParamsRequest {
  return {};
}
export const QueryParamsRequest = {
  encode(_: QueryParamsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },
  fromJSON(_: any): QueryParamsRequest {
    return {};
  },
  fromPartial(_: Partial<QueryParamsRequest>): QueryParamsRequest {
    const message = createBaseQueryParamsRequest();
    return message;
  }
};
function createBaseQueryParamsResponse(): QueryParamsResponse {
  return {
    params: undefined
  };
}
export const QueryParamsResponse = {
  encode(message: QueryParamsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): QueryParamsResponse {
    return {
      params: isSet(object.params) ? Params.fromJSON(object.params) : undefined
    };
  },
  fromPartial(object: Partial<QueryParamsResponse>): QueryParamsResponse {
    const message = createBaseQueryParamsResponse();
    message.params = object.params !== undefined && object.params !== null ? Params.fromPartial(object.params) : undefined;
    return message;
  }
};
function createBaseQueryEgressRequest(): QueryEgressRequest {
  return {
    peer: new Uint8Array()
  };
}
export const QueryEgressRequest = {
  encode(message: QueryEgressRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.peer.length !== 0) {
      writer.uint32(10).bytes(message.peer);
    }
    return writer;
  },
  fromJSON(object: any): QueryEgressRequest {
    return {
      peer: isSet(object.peer) ? bytesFromBase64(object.peer) : new Uint8Array()
    };
  },
  fromPartial(object: Partial<QueryEgressRequest>): QueryEgressRequest {
    const message = createBaseQueryEgressRequest();
    message.peer = object.peer ?? new Uint8Array();
    return message;
  }
};
function createBaseQueryEgressResponse(): QueryEgressResponse {
  return {
    egress: undefined
  };
}
export const QueryEgressResponse = {
  encode(message: QueryEgressResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.egress !== undefined) {
      Egress.encode(message.egress, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): QueryEgressResponse {
    return {
      egress: isSet(object.egress) ? Egress.fromJSON(object.egress) : undefined
    };
  },
  fromPartial(object: Partial<QueryEgressResponse>): QueryEgressResponse {
    const message = createBaseQueryEgressResponse();
    message.egress = object.egress !== undefined && object.egress !== null ? Egress.fromPartial(object.egress) : undefined;
    return message;
  }
};
function createBaseQueryMailboxRequest(): QueryMailboxRequest {
  return {
    peer: new Uint8Array()
  };
}
export const QueryMailboxRequest = {
  encode(message: QueryMailboxRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.peer.length !== 0) {
      writer.uint32(10).bytes(message.peer);
    }
    return writer;
  },
  fromJSON(object: any): QueryMailboxRequest {
    return {
      peer: isSet(object.peer) ? bytesFromBase64(object.peer) : new Uint8Array()
    };
  },
  fromPartial(object: Partial<QueryMailboxRequest>): QueryMailboxRequest {
    const message = createBaseQueryMailboxRequest();
    message.peer = object.peer ?? new Uint8Array();
    return message;
  }
};
function createBaseQueryMailboxResponse(): QueryMailboxResponse {
  return {
    value: ""
  };
}
export const QueryMailboxResponse = {
  encode(message: QueryMailboxResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.value !== "") {
      writer.uint32(10).string(message.value);
    }
    return writer;
  },
  fromJSON(object: any): QueryMailboxResponse {
    return {
      value: isSet(object.value) ? String(object.value) : ""
    };
  },
  fromPartial(object: Partial<QueryMailboxResponse>): QueryMailboxResponse {
    const message = createBaseQueryMailboxResponse();
    message.value = object.value ?? "";
    return message;
  }
};