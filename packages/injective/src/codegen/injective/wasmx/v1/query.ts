import { Params, ParamsAmino, ParamsSDKType, RegisteredContract, RegisteredContractAmino, RegisteredContractSDKType } from "./wasmx";
import { GenesisState, GenesisStateAmino, GenesisStateSDKType } from "./genesis";
import { BinaryWriter } from "../../../binary";
import { isSet } from "../../../helpers";
/**
 * QueryWasmxParamsRequest is the request type for the Query/WasmxParams RPC
 * method.
 */
export interface QueryWasmxParamsRequest {}
export interface QueryWasmxParamsRequestProtoMsg {
  typeUrl: "/injective.wasmx.v1.QueryWasmxParamsRequest";
  value: Uint8Array;
}
/**
 * QueryWasmxParamsRequest is the request type for the Query/WasmxParams RPC
 * method.
 */
export interface QueryWasmxParamsRequestAmino {}
export interface QueryWasmxParamsRequestAminoMsg {
  type: "/injective.wasmx.v1.QueryWasmxParamsRequest";
  value: QueryWasmxParamsRequestAmino;
}
/**
 * QueryWasmxParamsRequest is the request type for the Query/WasmxParams RPC
 * method.
 */
export interface QueryWasmxParamsRequestSDKType {}
/**
 * QueryWasmxParamsRequest is the response type for the Query/WasmxParams RPC
 * method.
 */
export interface QueryWasmxParamsResponse {
  params: Params;
}
export interface QueryWasmxParamsResponseProtoMsg {
  typeUrl: "/injective.wasmx.v1.QueryWasmxParamsResponse";
  value: Uint8Array;
}
/**
 * QueryWasmxParamsRequest is the response type for the Query/WasmxParams RPC
 * method.
 */
export interface QueryWasmxParamsResponseAmino {
  params?: ParamsAmino;
}
export interface QueryWasmxParamsResponseAminoMsg {
  type: "/injective.wasmx.v1.QueryWasmxParamsResponse";
  value: QueryWasmxParamsResponseAmino;
}
/**
 * QueryWasmxParamsRequest is the response type for the Query/WasmxParams RPC
 * method.
 */
export interface QueryWasmxParamsResponseSDKType {
  params: ParamsSDKType;
}
/**
 * QueryModuleStateRequest is the request type for the Query/WasmxModuleState
 * RPC method.
 */
export interface QueryModuleStateRequest {}
export interface QueryModuleStateRequestProtoMsg {
  typeUrl: "/injective.wasmx.v1.QueryModuleStateRequest";
  value: Uint8Array;
}
/**
 * QueryModuleStateRequest is the request type for the Query/WasmxModuleState
 * RPC method.
 */
export interface QueryModuleStateRequestAmino {}
export interface QueryModuleStateRequestAminoMsg {
  type: "/injective.wasmx.v1.QueryModuleStateRequest";
  value: QueryModuleStateRequestAmino;
}
/**
 * QueryModuleStateRequest is the request type for the Query/WasmxModuleState
 * RPC method.
 */
export interface QueryModuleStateRequestSDKType {}
/**
 * QueryModuleStateResponse is the response type for the Query/WasmxModuleState
 * RPC method.
 */
export interface QueryModuleStateResponse {
  /**
   * QueryModuleStateResponse is the response type for the Query/WasmxModuleState
   * RPC method.
   */
  state: GenesisState;
}
export interface QueryModuleStateResponseProtoMsg {
  typeUrl: "/injective.wasmx.v1.QueryModuleStateResponse";
  value: Uint8Array;
}
/**
 * QueryModuleStateResponse is the response type for the Query/WasmxModuleState
 * RPC method.
 */
export interface QueryModuleStateResponseAmino {
  /**
   * QueryModuleStateResponse is the response type for the Query/WasmxModuleState
   * RPC method.
   */
  state?: GenesisStateAmino;
}
export interface QueryModuleStateResponseAminoMsg {
  type: "/injective.wasmx.v1.QueryModuleStateResponse";
  value: QueryModuleStateResponseAmino;
}
/**
 * QueryModuleStateResponse is the response type for the Query/WasmxModuleState
 * RPC method.
 */
export interface QueryModuleStateResponseSDKType {
  state: GenesisStateSDKType;
}
/** Contract registration info */
export interface QueryContractRegistrationInfoRequest {
  /** Contract registration info */
  contractAddress: string;
}
export interface QueryContractRegistrationInfoRequestProtoMsg {
  typeUrl: "/injective.wasmx.v1.QueryContractRegistrationInfoRequest";
  value: Uint8Array;
}
/** Contract registration info */
export interface QueryContractRegistrationInfoRequestAmino {
  /** Contract registration info */
  contract_address: string;
}
export interface QueryContractRegistrationInfoRequestAminoMsg {
  type: "/injective.wasmx.v1.QueryContractRegistrationInfoRequest";
  value: QueryContractRegistrationInfoRequestAmino;
}
/** Contract registration info */
export interface QueryContractRegistrationInfoRequestSDKType {
  contract_address: string;
}
export interface QueryContractRegistrationInfoResponse {
  contract: RegisteredContract;
}
export interface QueryContractRegistrationInfoResponseProtoMsg {
  typeUrl: "/injective.wasmx.v1.QueryContractRegistrationInfoResponse";
  value: Uint8Array;
}
export interface QueryContractRegistrationInfoResponseAmino {
  contract?: RegisteredContractAmino;
}
export interface QueryContractRegistrationInfoResponseAminoMsg {
  type: "/injective.wasmx.v1.QueryContractRegistrationInfoResponse";
  value: QueryContractRegistrationInfoResponseAmino;
}
export interface QueryContractRegistrationInfoResponseSDKType {
  contract: RegisteredContractSDKType;
}
function createBaseQueryWasmxParamsRequest(): QueryWasmxParamsRequest {
  return {};
}
export const QueryWasmxParamsRequest = {
  typeUrl: "/injective.wasmx.v1.QueryWasmxParamsRequest",
  encode(_: QueryWasmxParamsRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  fromJSON(_: any): QueryWasmxParamsRequest {
    return {};
  },
  fromPartial(_: Partial<QueryWasmxParamsRequest>): QueryWasmxParamsRequest {
    const message = createBaseQueryWasmxParamsRequest();
    return message;
  },
  fromAmino(_: QueryWasmxParamsRequestAmino): QueryWasmxParamsRequest {
    return {};
  },
  toAmino(_: QueryWasmxParamsRequest): QueryWasmxParamsRequestAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: QueryWasmxParamsRequestAminoMsg): QueryWasmxParamsRequest {
    return QueryWasmxParamsRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryWasmxParamsRequestProtoMsg): QueryWasmxParamsRequest {
    return QueryWasmxParamsRequest.decode(message.value);
  },
  toProto(message: QueryWasmxParamsRequest): Uint8Array {
    return QueryWasmxParamsRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryWasmxParamsRequest): QueryWasmxParamsRequestProtoMsg {
    return {
      typeUrl: "/injective.wasmx.v1.QueryWasmxParamsRequest",
      value: QueryWasmxParamsRequest.encode(message).finish()
    };
  }
};
function createBaseQueryWasmxParamsResponse(): QueryWasmxParamsResponse {
  return {
    params: Params.fromPartial({})
  };
}
export const QueryWasmxParamsResponse = {
  typeUrl: "/injective.wasmx.v1.QueryWasmxParamsResponse",
  encode(message: QueryWasmxParamsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): QueryWasmxParamsResponse {
    return {
      params: isSet(object.params) ? Params.fromJSON(object.params) : undefined
    };
  },
  fromPartial(object: Partial<QueryWasmxParamsResponse>): QueryWasmxParamsResponse {
    const message = createBaseQueryWasmxParamsResponse();
    message.params = object.params !== undefined && object.params !== null ? Params.fromPartial(object.params) : undefined;
    return message;
  },
  fromAmino(object: QueryWasmxParamsResponseAmino): QueryWasmxParamsResponse {
    return {
      params: object?.params ? Params.fromAmino(object.params) : undefined
    };
  },
  toAmino(message: QueryWasmxParamsResponse): QueryWasmxParamsResponseAmino {
    const obj: any = {};
    obj.params = message.params ? Params.toAmino(message.params) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryWasmxParamsResponseAminoMsg): QueryWasmxParamsResponse {
    return QueryWasmxParamsResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryWasmxParamsResponseProtoMsg): QueryWasmxParamsResponse {
    return QueryWasmxParamsResponse.decode(message.value);
  },
  toProto(message: QueryWasmxParamsResponse): Uint8Array {
    return QueryWasmxParamsResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryWasmxParamsResponse): QueryWasmxParamsResponseProtoMsg {
    return {
      typeUrl: "/injective.wasmx.v1.QueryWasmxParamsResponse",
      value: QueryWasmxParamsResponse.encode(message).finish()
    };
  }
};
function createBaseQueryModuleStateRequest(): QueryModuleStateRequest {
  return {};
}
export const QueryModuleStateRequest = {
  typeUrl: "/injective.wasmx.v1.QueryModuleStateRequest",
  encode(_: QueryModuleStateRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  fromJSON(_: any): QueryModuleStateRequest {
    return {};
  },
  fromPartial(_: Partial<QueryModuleStateRequest>): QueryModuleStateRequest {
    const message = createBaseQueryModuleStateRequest();
    return message;
  },
  fromAmino(_: QueryModuleStateRequestAmino): QueryModuleStateRequest {
    return {};
  },
  toAmino(_: QueryModuleStateRequest): QueryModuleStateRequestAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: QueryModuleStateRequestAminoMsg): QueryModuleStateRequest {
    return QueryModuleStateRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryModuleStateRequestProtoMsg): QueryModuleStateRequest {
    return QueryModuleStateRequest.decode(message.value);
  },
  toProto(message: QueryModuleStateRequest): Uint8Array {
    return QueryModuleStateRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryModuleStateRequest): QueryModuleStateRequestProtoMsg {
    return {
      typeUrl: "/injective.wasmx.v1.QueryModuleStateRequest",
      value: QueryModuleStateRequest.encode(message).finish()
    };
  }
};
function createBaseQueryModuleStateResponse(): QueryModuleStateResponse {
  return {
    state: GenesisState.fromPartial({})
  };
}
export const QueryModuleStateResponse = {
  typeUrl: "/injective.wasmx.v1.QueryModuleStateResponse",
  encode(message: QueryModuleStateResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.state !== undefined) {
      GenesisState.encode(message.state, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): QueryModuleStateResponse {
    return {
      state: isSet(object.state) ? GenesisState.fromJSON(object.state) : undefined
    };
  },
  fromPartial(object: Partial<QueryModuleStateResponse>): QueryModuleStateResponse {
    const message = createBaseQueryModuleStateResponse();
    message.state = object.state !== undefined && object.state !== null ? GenesisState.fromPartial(object.state) : undefined;
    return message;
  },
  fromAmino(object: QueryModuleStateResponseAmino): QueryModuleStateResponse {
    return {
      state: object?.state ? GenesisState.fromAmino(object.state) : undefined
    };
  },
  toAmino(message: QueryModuleStateResponse): QueryModuleStateResponseAmino {
    const obj: any = {};
    obj.state = message.state ? GenesisState.toAmino(message.state) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryModuleStateResponseAminoMsg): QueryModuleStateResponse {
    return QueryModuleStateResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryModuleStateResponseProtoMsg): QueryModuleStateResponse {
    return QueryModuleStateResponse.decode(message.value);
  },
  toProto(message: QueryModuleStateResponse): Uint8Array {
    return QueryModuleStateResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryModuleStateResponse): QueryModuleStateResponseProtoMsg {
    return {
      typeUrl: "/injective.wasmx.v1.QueryModuleStateResponse",
      value: QueryModuleStateResponse.encode(message).finish()
    };
  }
};
function createBaseQueryContractRegistrationInfoRequest(): QueryContractRegistrationInfoRequest {
  return {
    contractAddress: ""
  };
}
export const QueryContractRegistrationInfoRequest = {
  typeUrl: "/injective.wasmx.v1.QueryContractRegistrationInfoRequest",
  encode(message: QueryContractRegistrationInfoRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.contractAddress !== "") {
      writer.uint32(10).string(message.contractAddress);
    }
    return writer;
  },
  fromJSON(object: any): QueryContractRegistrationInfoRequest {
    return {
      contractAddress: isSet(object.contractAddress) ? String(object.contractAddress) : ""
    };
  },
  fromPartial(object: Partial<QueryContractRegistrationInfoRequest>): QueryContractRegistrationInfoRequest {
    const message = createBaseQueryContractRegistrationInfoRequest();
    message.contractAddress = object.contractAddress ?? "";
    return message;
  },
  fromAmino(object: QueryContractRegistrationInfoRequestAmino): QueryContractRegistrationInfoRequest {
    return {
      contractAddress: object.contract_address
    };
  },
  toAmino(message: QueryContractRegistrationInfoRequest): QueryContractRegistrationInfoRequestAmino {
    const obj: any = {};
    obj.contract_address = message.contractAddress;
    return obj;
  },
  fromAminoMsg(object: QueryContractRegistrationInfoRequestAminoMsg): QueryContractRegistrationInfoRequest {
    return QueryContractRegistrationInfoRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryContractRegistrationInfoRequestProtoMsg): QueryContractRegistrationInfoRequest {
    return QueryContractRegistrationInfoRequest.decode(message.value);
  },
  toProto(message: QueryContractRegistrationInfoRequest): Uint8Array {
    return QueryContractRegistrationInfoRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryContractRegistrationInfoRequest): QueryContractRegistrationInfoRequestProtoMsg {
    return {
      typeUrl: "/injective.wasmx.v1.QueryContractRegistrationInfoRequest",
      value: QueryContractRegistrationInfoRequest.encode(message).finish()
    };
  }
};
function createBaseQueryContractRegistrationInfoResponse(): QueryContractRegistrationInfoResponse {
  return {
    contract: RegisteredContract.fromPartial({})
  };
}
export const QueryContractRegistrationInfoResponse = {
  typeUrl: "/injective.wasmx.v1.QueryContractRegistrationInfoResponse",
  encode(message: QueryContractRegistrationInfoResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.contract !== undefined) {
      RegisteredContract.encode(message.contract, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): QueryContractRegistrationInfoResponse {
    return {
      contract: isSet(object.contract) ? RegisteredContract.fromJSON(object.contract) : undefined
    };
  },
  fromPartial(object: Partial<QueryContractRegistrationInfoResponse>): QueryContractRegistrationInfoResponse {
    const message = createBaseQueryContractRegistrationInfoResponse();
    message.contract = object.contract !== undefined && object.contract !== null ? RegisteredContract.fromPartial(object.contract) : undefined;
    return message;
  },
  fromAmino(object: QueryContractRegistrationInfoResponseAmino): QueryContractRegistrationInfoResponse {
    return {
      contract: object?.contract ? RegisteredContract.fromAmino(object.contract) : undefined
    };
  },
  toAmino(message: QueryContractRegistrationInfoResponse): QueryContractRegistrationInfoResponseAmino {
    const obj: any = {};
    obj.contract = message.contract ? RegisteredContract.toAmino(message.contract) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryContractRegistrationInfoResponseAminoMsg): QueryContractRegistrationInfoResponse {
    return QueryContractRegistrationInfoResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryContractRegistrationInfoResponseProtoMsg): QueryContractRegistrationInfoResponse {
    return QueryContractRegistrationInfoResponse.decode(message.value);
  },
  toProto(message: QueryContractRegistrationInfoResponse): Uint8Array {
    return QueryContractRegistrationInfoResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryContractRegistrationInfoResponse): QueryContractRegistrationInfoResponseProtoMsg {
    return {
      typeUrl: "/injective.wasmx.v1.QueryContractRegistrationInfoResponse",
      value: QueryContractRegistrationInfoResponse.encode(message).finish()
    };
  }
};