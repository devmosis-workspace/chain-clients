import { Params, ParamsSDKType } from "./params";
import * as _m0 from "protobufjs/minimal";
import { isSet } from "../../helpers";
/** QueryParamsRequest is request type for the Query/Params RPC method. */
export interface QueryParamsRequest {}
/** QueryParamsRequest is request type for the Query/Params RPC method. */
export interface QueryParamsRequestSDKType {}
/** QueryParamsResponse is response type for the Query/Params RPC method. */
export interface QueryParamsResponse {
  /** params holds all the parameters of this module. */
  params?: Params;
}
/** QueryParamsResponse is response type for the Query/Params RPC method. */
export interface QueryParamsResponseSDKType {
  params?: ParamsSDKType;
}
export interface QueryInterchainAccountAddressRequest {
  /**
   * owner_address is the owner of the interchain account on the controller
   * chain
   */
  ownerAddress: string;
  /**
   * interchain_account_id is an identifier of your interchain account from
   * which you want to execute msgs
   */
  interchainAccountId: string;
  /**
   * connection_id is an IBC connection identifier between Neutron and remote
   * chain
   */
  connectionId: string;
}
export interface QueryInterchainAccountAddressRequestSDKType {
  owner_address: string;
  interchain_account_id: string;
  connection_id: string;
}
/** Query response for an interchain account address */
export interface QueryInterchainAccountAddressResponse {
  /** The corresponding interchain account address on the host chain */
  interchainAccountAddress: string;
}
/** Query response for an interchain account address */
export interface QueryInterchainAccountAddressResponseSDKType {
  interchain_account_address: string;
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
function createBaseQueryInterchainAccountAddressRequest(): QueryInterchainAccountAddressRequest {
  return {
    ownerAddress: "",
    interchainAccountId: "",
    connectionId: ""
  };
}
export const QueryInterchainAccountAddressRequest = {
  encode(message: QueryInterchainAccountAddressRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.ownerAddress !== "") {
      writer.uint32(10).string(message.ownerAddress);
    }
    if (message.interchainAccountId !== "") {
      writer.uint32(18).string(message.interchainAccountId);
    }
    if (message.connectionId !== "") {
      writer.uint32(26).string(message.connectionId);
    }
    return writer;
  },
  fromJSON(object: any): QueryInterchainAccountAddressRequest {
    return {
      ownerAddress: isSet(object.ownerAddress) ? String(object.ownerAddress) : "",
      interchainAccountId: isSet(object.interchainAccountId) ? String(object.interchainAccountId) : "",
      connectionId: isSet(object.connectionId) ? String(object.connectionId) : ""
    };
  },
  fromPartial(object: Partial<QueryInterchainAccountAddressRequest>): QueryInterchainAccountAddressRequest {
    const message = createBaseQueryInterchainAccountAddressRequest();
    message.ownerAddress = object.ownerAddress ?? "";
    message.interchainAccountId = object.interchainAccountId ?? "";
    message.connectionId = object.connectionId ?? "";
    return message;
  }
};
function createBaseQueryInterchainAccountAddressResponse(): QueryInterchainAccountAddressResponse {
  return {
    interchainAccountAddress: ""
  };
}
export const QueryInterchainAccountAddressResponse = {
  encode(message: QueryInterchainAccountAddressResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.interchainAccountAddress !== "") {
      writer.uint32(10).string(message.interchainAccountAddress);
    }
    return writer;
  },
  fromJSON(object: any): QueryInterchainAccountAddressResponse {
    return {
      interchainAccountAddress: isSet(object.interchainAccountAddress) ? String(object.interchainAccountAddress) : ""
    };
  },
  fromPartial(object: Partial<QueryInterchainAccountAddressResponse>): QueryInterchainAccountAddressResponse {
    const message = createBaseQueryInterchainAccountAddressResponse();
    message.interchainAccountAddress = object.interchainAccountAddress ?? "";
    return message;
  }
};