import { BinaryWriter } from "../../../binary";
import { isSet } from "../../../helpers";
/**
 * QueryInterchainAccountRequest is the request type for the
 * Query/InterchainAccountAddress RPC
 */
export interface QueryInterchainAccountRequest {
  /** owner is the address of the account that owns the ICA. */
  owner: string;
  /** connection_id is the connection the ICA claimed. */
  connectionId: string;
}
export interface QueryInterchainAccountRequestProtoMsg {
  typeUrl: "/regen.intertx.v1.QueryInterchainAccountRequest";
  value: Uint8Array;
}
/**
 * QueryInterchainAccountRequest is the request type for the
 * Query/InterchainAccountAddress RPC
 */
export interface QueryInterchainAccountRequestAmino {
  /** owner is the address of the account that owns the ICA. */
  owner?: string;
  /** connection_id is the connection the ICA claimed. */
  connection_id?: string;
}
export interface QueryInterchainAccountRequestAminoMsg {
  type: "/regen.intertx.v1.QueryInterchainAccountRequest";
  value: QueryInterchainAccountRequestAmino;
}
/**
 * QueryInterchainAccountRequest is the request type for the
 * Query/InterchainAccountAddress RPC
 */
export interface QueryInterchainAccountRequestSDKType {
  owner: string;
  connection_id: string;
}
/**
 * QueryInterchainAccountResponse the response type for the
 * Query/InterchainAccountAddress RPC
 */
export interface QueryInterchainAccountResponse {
  /** interchain_account_address is the address of the ICA. */
  interchainAccountAddress: string;
}
export interface QueryInterchainAccountResponseProtoMsg {
  typeUrl: "/regen.intertx.v1.QueryInterchainAccountResponse";
  value: Uint8Array;
}
/**
 * QueryInterchainAccountResponse the response type for the
 * Query/InterchainAccountAddress RPC
 */
export interface QueryInterchainAccountResponseAmino {
  /** interchain_account_address is the address of the ICA. */
  interchain_account_address?: string;
}
export interface QueryInterchainAccountResponseAminoMsg {
  type: "/regen.intertx.v1.QueryInterchainAccountResponse";
  value: QueryInterchainAccountResponseAmino;
}
/**
 * QueryInterchainAccountResponse the response type for the
 * Query/InterchainAccountAddress RPC
 */
export interface QueryInterchainAccountResponseSDKType {
  interchain_account_address: string;
}
function createBaseQueryInterchainAccountRequest(): QueryInterchainAccountRequest {
  return {
    owner: "",
    connectionId: ""
  };
}
export const QueryInterchainAccountRequest = {
  typeUrl: "/regen.intertx.v1.QueryInterchainAccountRequest",
  encode(message: QueryInterchainAccountRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.owner !== "") {
      writer.uint32(10).string(message.owner);
    }
    if (message.connectionId !== "") {
      writer.uint32(18).string(message.connectionId);
    }
    return writer;
  },
  fromJSON(object: any): QueryInterchainAccountRequest {
    return {
      owner: isSet(object.owner) ? String(object.owner) : "",
      connectionId: isSet(object.connectionId) ? String(object.connectionId) : ""
    };
  },
  fromPartial(object: Partial<QueryInterchainAccountRequest>): QueryInterchainAccountRequest {
    const message = createBaseQueryInterchainAccountRequest();
    message.owner = object.owner ?? "";
    message.connectionId = object.connectionId ?? "";
    return message;
  },
  fromAmino(object: QueryInterchainAccountRequestAmino): QueryInterchainAccountRequest {
    const message = createBaseQueryInterchainAccountRequest();
    if (object.owner !== undefined && object.owner !== null) {
      message.owner = object.owner;
    }
    if (object.connection_id !== undefined && object.connection_id !== null) {
      message.connectionId = object.connection_id;
    }
    return message;
  },
  toAmino(message: QueryInterchainAccountRequest): QueryInterchainAccountRequestAmino {
    const obj: any = {};
    obj.owner = message.owner;
    obj.connection_id = message.connectionId;
    return obj;
  },
  fromAminoMsg(object: QueryInterchainAccountRequestAminoMsg): QueryInterchainAccountRequest {
    return QueryInterchainAccountRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryInterchainAccountRequestProtoMsg): QueryInterchainAccountRequest {
    return QueryInterchainAccountRequest.decode(message.value);
  },
  toProto(message: QueryInterchainAccountRequest): Uint8Array {
    return QueryInterchainAccountRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryInterchainAccountRequest): QueryInterchainAccountRequestProtoMsg {
    return {
      typeUrl: "/regen.intertx.v1.QueryInterchainAccountRequest",
      value: QueryInterchainAccountRequest.encode(message).finish()
    };
  }
};
function createBaseQueryInterchainAccountResponse(): QueryInterchainAccountResponse {
  return {
    interchainAccountAddress: ""
  };
}
export const QueryInterchainAccountResponse = {
  typeUrl: "/regen.intertx.v1.QueryInterchainAccountResponse",
  encode(message: QueryInterchainAccountResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.interchainAccountAddress !== "") {
      writer.uint32(10).string(message.interchainAccountAddress);
    }
    return writer;
  },
  fromJSON(object: any): QueryInterchainAccountResponse {
    return {
      interchainAccountAddress: isSet(object.interchainAccountAddress) ? String(object.interchainAccountAddress) : ""
    };
  },
  fromPartial(object: Partial<QueryInterchainAccountResponse>): QueryInterchainAccountResponse {
    const message = createBaseQueryInterchainAccountResponse();
    message.interchainAccountAddress = object.interchainAccountAddress ?? "";
    return message;
  },
  fromAmino(object: QueryInterchainAccountResponseAmino): QueryInterchainAccountResponse {
    const message = createBaseQueryInterchainAccountResponse();
    if (object.interchain_account_address !== undefined && object.interchain_account_address !== null) {
      message.interchainAccountAddress = object.interchain_account_address;
    }
    return message;
  },
  toAmino(message: QueryInterchainAccountResponse): QueryInterchainAccountResponseAmino {
    const obj: any = {};
    obj.interchain_account_address = message.interchainAccountAddress;
    return obj;
  },
  fromAminoMsg(object: QueryInterchainAccountResponseAminoMsg): QueryInterchainAccountResponse {
    return QueryInterchainAccountResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryInterchainAccountResponseProtoMsg): QueryInterchainAccountResponse {
    return QueryInterchainAccountResponse.decode(message.value);
  },
  toProto(message: QueryInterchainAccountResponse): Uint8Array {
    return QueryInterchainAccountResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryInterchainAccountResponse): QueryInterchainAccountResponseProtoMsg {
    return {
      typeUrl: "/regen.intertx.v1.QueryInterchainAccountResponse",
      value: QueryInterchainAccountResponse.encode(message).finish()
    };
  }
};