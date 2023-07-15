import { Params, ParamsSDKType, RegisteredContract, RegisteredContractSDKType } from "./wasmx";
import { GenesisState, GenesisStateSDKType } from "./genesis";
import * as _m0 from "protobufjs/minimal";
import { isSet } from "../../../helpers";
/**
 * QueryWasmxParamsRequest is the request type for the Query/WasmxParams RPC
 * method.
 */
export interface QueryWasmxParamsRequest {}
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
  params?: Params;
}
/**
 * QueryWasmxParamsRequest is the response type for the Query/WasmxParams RPC
 * method.
 */
export interface QueryWasmxParamsResponseSDKType {
  params?: ParamsSDKType;
}
/**
 * QueryModuleStateRequest is the request type for the Query/WasmxModuleState
 * RPC method.
 */
export interface QueryModuleStateRequest {}
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
  state?: GenesisState;
}
/**
 * QueryModuleStateResponse is the response type for the Query/WasmxModuleState
 * RPC method.
 */
export interface QueryModuleStateResponseSDKType {
  state?: GenesisStateSDKType;
}
/** Contract registration info */
export interface QueryContractRegistrationInfoRequest {
  /** Contract registration info */
  contractAddress: string;
}
/** Contract registration info */
export interface QueryContractRegistrationInfoRequestSDKType {
  contract_address: string;
}
export interface QueryContractRegistrationInfoResponse {
  contract?: RegisteredContract;
}
export interface QueryContractRegistrationInfoResponseSDKType {
  contract?: RegisteredContractSDKType;
}
function createBaseQueryWasmxParamsRequest(): QueryWasmxParamsRequest {
  return {};
}
export const QueryWasmxParamsRequest = {
  encode(_: QueryWasmxParamsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },
  fromJSON(_: any): QueryWasmxParamsRequest {
    return {};
  },
  fromPartial(_: Partial<QueryWasmxParamsRequest>): QueryWasmxParamsRequest {
    const message = createBaseQueryWasmxParamsRequest();
    return message;
  }
};
function createBaseQueryWasmxParamsResponse(): QueryWasmxParamsResponse {
  return {
    params: undefined
  };
}
export const QueryWasmxParamsResponse = {
  encode(message: QueryWasmxParamsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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
  }
};
function createBaseQueryModuleStateRequest(): QueryModuleStateRequest {
  return {};
}
export const QueryModuleStateRequest = {
  encode(_: QueryModuleStateRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },
  fromJSON(_: any): QueryModuleStateRequest {
    return {};
  },
  fromPartial(_: Partial<QueryModuleStateRequest>): QueryModuleStateRequest {
    const message = createBaseQueryModuleStateRequest();
    return message;
  }
};
function createBaseQueryModuleStateResponse(): QueryModuleStateResponse {
  return {
    state: undefined
  };
}
export const QueryModuleStateResponse = {
  encode(message: QueryModuleStateResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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
  }
};
function createBaseQueryContractRegistrationInfoRequest(): QueryContractRegistrationInfoRequest {
  return {
    contractAddress: ""
  };
}
export const QueryContractRegistrationInfoRequest = {
  encode(message: QueryContractRegistrationInfoRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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
  }
};
function createBaseQueryContractRegistrationInfoResponse(): QueryContractRegistrationInfoResponse {
  return {
    contract: undefined
  };
}
export const QueryContractRegistrationInfoResponse = {
  encode(message: QueryContractRegistrationInfoResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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
  }
};