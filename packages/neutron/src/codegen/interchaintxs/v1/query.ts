import { Params, ParamsAmino, ParamsSDKType } from "./params";
import { BinaryWriter } from "../../binary";
import { isSet } from "../../helpers";
/** QueryParamsRequest is request type for the Query/Params RPC method. */
export interface QueryParamsRequest {}
export interface QueryParamsRequestProtoMsg {
  typeUrl: "/neutron.interchaintxs.QueryParamsRequest";
  value: Uint8Array;
}
/** QueryParamsRequest is request type for the Query/Params RPC method. */
export interface QueryParamsRequestAmino {}
export interface QueryParamsRequestAminoMsg {
  type: "/neutron.interchaintxs.QueryParamsRequest";
  value: QueryParamsRequestAmino;
}
/** QueryParamsRequest is request type for the Query/Params RPC method. */
export interface QueryParamsRequestSDKType {}
/** QueryParamsResponse is response type for the Query/Params RPC method. */
export interface QueryParamsResponse {
  /** params holds all the parameters of this module. */
  params: Params;
}
export interface QueryParamsResponseProtoMsg {
  typeUrl: "/neutron.interchaintxs.QueryParamsResponse";
  value: Uint8Array;
}
/** QueryParamsResponse is response type for the Query/Params RPC method. */
export interface QueryParamsResponseAmino {
  /** params holds all the parameters of this module. */
  params?: ParamsAmino;
}
export interface QueryParamsResponseAminoMsg {
  type: "/neutron.interchaintxs.QueryParamsResponse";
  value: QueryParamsResponseAmino;
}
/** QueryParamsResponse is response type for the Query/Params RPC method. */
export interface QueryParamsResponseSDKType {
  params: ParamsSDKType;
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
export interface QueryInterchainAccountAddressRequestProtoMsg {
  typeUrl: "/neutron.interchaintxs.QueryInterchainAccountAddressRequest";
  value: Uint8Array;
}
export interface QueryInterchainAccountAddressRequestAmino {
  /**
   * owner_address is the owner of the interchain account on the controller
   * chain
   */
  owner_address: string;
  /**
   * interchain_account_id is an identifier of your interchain account from
   * which you want to execute msgs
   */
  interchain_account_id: string;
  /**
   * connection_id is an IBC connection identifier between Neutron and remote
   * chain
   */
  connection_id: string;
}
export interface QueryInterchainAccountAddressRequestAminoMsg {
  type: "/neutron.interchaintxs.QueryInterchainAccountAddressRequest";
  value: QueryInterchainAccountAddressRequestAmino;
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
export interface QueryInterchainAccountAddressResponseProtoMsg {
  typeUrl: "/neutron.interchaintxs.QueryInterchainAccountAddressResponse";
  value: Uint8Array;
}
/** Query response for an interchain account address */
export interface QueryInterchainAccountAddressResponseAmino {
  /** The corresponding interchain account address on the host chain */
  interchain_account_address: string;
}
export interface QueryInterchainAccountAddressResponseAminoMsg {
  type: "/neutron.interchaintxs.QueryInterchainAccountAddressResponse";
  value: QueryInterchainAccountAddressResponseAmino;
}
/** Query response for an interchain account address */
export interface QueryInterchainAccountAddressResponseSDKType {
  interchain_account_address: string;
}
function createBaseQueryParamsRequest(): QueryParamsRequest {
  return {};
}
export const QueryParamsRequest = {
  typeUrl: "/neutron.interchaintxs.QueryParamsRequest",
  encode(_: QueryParamsRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  fromJSON(_: any): QueryParamsRequest {
    return {};
  },
  fromPartial(_: Partial<QueryParamsRequest>): QueryParamsRequest {
    const message = createBaseQueryParamsRequest();
    return message;
  },
  fromAmino(_: QueryParamsRequestAmino): QueryParamsRequest {
    return {};
  },
  toAmino(_: QueryParamsRequest): QueryParamsRequestAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: QueryParamsRequestAminoMsg): QueryParamsRequest {
    return QueryParamsRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryParamsRequestProtoMsg): QueryParamsRequest {
    return QueryParamsRequest.decode(message.value);
  },
  toProto(message: QueryParamsRequest): Uint8Array {
    return QueryParamsRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryParamsRequest): QueryParamsRequestProtoMsg {
    return {
      typeUrl: "/neutron.interchaintxs.QueryParamsRequest",
      value: QueryParamsRequest.encode(message).finish()
    };
  }
};
function createBaseQueryParamsResponse(): QueryParamsResponse {
  return {
    params: Params.fromPartial({})
  };
}
export const QueryParamsResponse = {
  typeUrl: "/neutron.interchaintxs.QueryParamsResponse",
  encode(message: QueryParamsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
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
  },
  fromAmino(object: QueryParamsResponseAmino): QueryParamsResponse {
    return {
      params: object?.params ? Params.fromAmino(object.params) : undefined
    };
  },
  toAmino(message: QueryParamsResponse): QueryParamsResponseAmino {
    const obj: any = {};
    obj.params = message.params ? Params.toAmino(message.params) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryParamsResponseAminoMsg): QueryParamsResponse {
    return QueryParamsResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryParamsResponseProtoMsg): QueryParamsResponse {
    return QueryParamsResponse.decode(message.value);
  },
  toProto(message: QueryParamsResponse): Uint8Array {
    return QueryParamsResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryParamsResponse): QueryParamsResponseProtoMsg {
    return {
      typeUrl: "/neutron.interchaintxs.QueryParamsResponse",
      value: QueryParamsResponse.encode(message).finish()
    };
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
  typeUrl: "/neutron.interchaintxs.QueryInterchainAccountAddressRequest",
  encode(message: QueryInterchainAccountAddressRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
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
  },
  fromAmino(object: QueryInterchainAccountAddressRequestAmino): QueryInterchainAccountAddressRequest {
    return {
      ownerAddress: object.owner_address,
      interchainAccountId: object.interchain_account_id,
      connectionId: object.connection_id
    };
  },
  toAmino(message: QueryInterchainAccountAddressRequest): QueryInterchainAccountAddressRequestAmino {
    const obj: any = {};
    obj.owner_address = message.ownerAddress;
    obj.interchain_account_id = message.interchainAccountId;
    obj.connection_id = message.connectionId;
    return obj;
  },
  fromAminoMsg(object: QueryInterchainAccountAddressRequestAminoMsg): QueryInterchainAccountAddressRequest {
    return QueryInterchainAccountAddressRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryInterchainAccountAddressRequestProtoMsg): QueryInterchainAccountAddressRequest {
    return QueryInterchainAccountAddressRequest.decode(message.value);
  },
  toProto(message: QueryInterchainAccountAddressRequest): Uint8Array {
    return QueryInterchainAccountAddressRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryInterchainAccountAddressRequest): QueryInterchainAccountAddressRequestProtoMsg {
    return {
      typeUrl: "/neutron.interchaintxs.QueryInterchainAccountAddressRequest",
      value: QueryInterchainAccountAddressRequest.encode(message).finish()
    };
  }
};
function createBaseQueryInterchainAccountAddressResponse(): QueryInterchainAccountAddressResponse {
  return {
    interchainAccountAddress: ""
  };
}
export const QueryInterchainAccountAddressResponse = {
  typeUrl: "/neutron.interchaintxs.QueryInterchainAccountAddressResponse",
  encode(message: QueryInterchainAccountAddressResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
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
  },
  fromAmino(object: QueryInterchainAccountAddressResponseAmino): QueryInterchainAccountAddressResponse {
    return {
      interchainAccountAddress: object.interchain_account_address
    };
  },
  toAmino(message: QueryInterchainAccountAddressResponse): QueryInterchainAccountAddressResponseAmino {
    const obj: any = {};
    obj.interchain_account_address = message.interchainAccountAddress;
    return obj;
  },
  fromAminoMsg(object: QueryInterchainAccountAddressResponseAminoMsg): QueryInterchainAccountAddressResponse {
    return QueryInterchainAccountAddressResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryInterchainAccountAddressResponseProtoMsg): QueryInterchainAccountAddressResponse {
    return QueryInterchainAccountAddressResponse.decode(message.value);
  },
  toProto(message: QueryInterchainAccountAddressResponse): Uint8Array {
    return QueryInterchainAccountAddressResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryInterchainAccountAddressResponse): QueryInterchainAccountAddressResponseProtoMsg {
    return {
      typeUrl: "/neutron.interchaintxs.QueryInterchainAccountAddressResponse",
      value: QueryInterchainAccountAddressResponse.encode(message).finish()
    };
  }
};