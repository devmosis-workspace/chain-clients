import { BinaryWriter } from "../../../binary";
/**
 * QueryListPrivilegedRequest is request type for the Query/ListPrivileged RPC
 * method.
 */
export interface QueryListPrivilegedRequest {}
export interface QueryListPrivilegedRequestProtoMsg {
  typeUrl: "/publicawesome.stargaze.cron.v1.QueryListPrivilegedRequest";
  value: Uint8Array;
}
/**
 * QueryListPrivilegedRequest is request type for the Query/ListPrivileged RPC
 * method.
 */
export interface QueryListPrivilegedRequestAmino {}
export interface QueryListPrivilegedRequestAminoMsg {
  type: "/publicawesome.stargaze.cron.v1.QueryListPrivilegedRequest";
  value: QueryListPrivilegedRequestAmino;
}
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
export interface QueryListPrivilegedResponseProtoMsg {
  typeUrl: "/publicawesome.stargaze.cron.v1.QueryListPrivilegedResponse";
  value: Uint8Array;
}
/**
 * QueryListPrivilegedResponse is response type for the Query/ListPrivileged RPC
 * method.
 */
export interface QueryListPrivilegedResponseAmino {
  /**
   * contract_addresses holds all the smart contract addresses which have
   * privilege status.
   */
  contract_addresses: string[];
}
export interface QueryListPrivilegedResponseAminoMsg {
  type: "/publicawesome.stargaze.cron.v1.QueryListPrivilegedResponse";
  value: QueryListPrivilegedResponseAmino;
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
  typeUrl: "/publicawesome.stargaze.cron.v1.QueryListPrivilegedRequest",
  encode(_: QueryListPrivilegedRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  fromJSON(_: any): QueryListPrivilegedRequest {
    return {};
  },
  fromPartial(_: Partial<QueryListPrivilegedRequest>): QueryListPrivilegedRequest {
    const message = createBaseQueryListPrivilegedRequest();
    return message;
  },
  fromAmino(_: QueryListPrivilegedRequestAmino): QueryListPrivilegedRequest {
    return {};
  },
  toAmino(_: QueryListPrivilegedRequest): QueryListPrivilegedRequestAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: QueryListPrivilegedRequestAminoMsg): QueryListPrivilegedRequest {
    return QueryListPrivilegedRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryListPrivilegedRequestProtoMsg): QueryListPrivilegedRequest {
    return QueryListPrivilegedRequest.decode(message.value);
  },
  toProto(message: QueryListPrivilegedRequest): Uint8Array {
    return QueryListPrivilegedRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryListPrivilegedRequest): QueryListPrivilegedRequestProtoMsg {
    return {
      typeUrl: "/publicawesome.stargaze.cron.v1.QueryListPrivilegedRequest",
      value: QueryListPrivilegedRequest.encode(message).finish()
    };
  }
};
function createBaseQueryListPrivilegedResponse(): QueryListPrivilegedResponse {
  return {
    contractAddresses: []
  };
}
export const QueryListPrivilegedResponse = {
  typeUrl: "/publicawesome.stargaze.cron.v1.QueryListPrivilegedResponse",
  encode(message: QueryListPrivilegedResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
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
  },
  fromAmino(object: QueryListPrivilegedResponseAmino): QueryListPrivilegedResponse {
    return {
      contractAddresses: Array.isArray(object?.contract_addresses) ? object.contract_addresses.map((e: any) => e) : []
    };
  },
  toAmino(message: QueryListPrivilegedResponse): QueryListPrivilegedResponseAmino {
    const obj: any = {};
    if (message.contractAddresses) {
      obj.contract_addresses = message.contractAddresses.map(e => e);
    } else {
      obj.contract_addresses = [];
    }
    return obj;
  },
  fromAminoMsg(object: QueryListPrivilegedResponseAminoMsg): QueryListPrivilegedResponse {
    return QueryListPrivilegedResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryListPrivilegedResponseProtoMsg): QueryListPrivilegedResponse {
    return QueryListPrivilegedResponse.decode(message.value);
  },
  toProto(message: QueryListPrivilegedResponse): Uint8Array {
    return QueryListPrivilegedResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryListPrivilegedResponse): QueryListPrivilegedResponseProtoMsg {
    return {
      typeUrl: "/publicawesome.stargaze.cron.v1.QueryListPrivilegedResponse",
      value: QueryListPrivilegedResponse.encode(message).finish()
    };
  }
};