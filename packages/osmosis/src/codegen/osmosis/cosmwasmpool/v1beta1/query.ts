import { PageRequest, PageRequestSDKType, PageResponse, PageResponseSDKType } from "../../../cosmos/base/query/v1beta1/pagination";
import { Params, ParamsSDKType } from "./params";
import { Any, AnySDKType } from "../../../google/protobuf/any";
import { Long, isSet } from "../../../helpers";
import * as _m0 from "protobufjs/minimal";
/** =============================== ContractInfoByPoolId */
export interface ParamsRequest {}
/** =============================== ContractInfoByPoolId */
export interface ParamsRequestSDKType {}
export interface ParamsResponse {
  params?: Params;
}
export interface ParamsResponseSDKType {
  params?: ParamsSDKType;
}
/** =============================== Pools */
export interface PoolsRequest {
  /** pagination defines an optional pagination for the request. */
  pagination?: PageRequest;
}
/** =============================== Pools */
export interface PoolsRequestSDKType {
  pagination?: PageRequestSDKType;
}
export interface PoolsResponse {
  pools: Any[];
  /** pagination defines the pagination in the response. */
  pagination?: PageResponse;
}
export interface PoolsResponseSDKType {
  pools: AnySDKType[];
  pagination?: PageResponseSDKType;
}
/** =============================== ContractInfoByPoolId */
export interface ContractInfoByPoolIdRequest {
  /** pool_id is the pool id of the requested pool. */
  poolId: Long;
}
/** =============================== ContractInfoByPoolId */
export interface ContractInfoByPoolIdRequestSDKType {
  pool_id: Long;
}
export interface ContractInfoByPoolIdResponse {
  /**
   * contract_address is the pool address and contract address
   * of the requested pool id.
   */
  contractAddress: string;
  /** code_id is the code id of the requested pool id. */
  codeId: Long;
}
export interface ContractInfoByPoolIdResponseSDKType {
  contract_address: string;
  code_id: Long;
}
function createBaseParamsRequest(): ParamsRequest {
  return {};
}
export const ParamsRequest = {
  encode(_: ParamsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },
  fromJSON(_: any): ParamsRequest {
    return {};
  },
  fromPartial(_: Partial<ParamsRequest>): ParamsRequest {
    const message = createBaseParamsRequest();
    return message;
  }
};
function createBaseParamsResponse(): ParamsResponse {
  return {
    params: undefined
  };
}
export const ParamsResponse = {
  encode(message: ParamsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): ParamsResponse {
    return {
      params: isSet(object.params) ? Params.fromJSON(object.params) : undefined
    };
  },
  fromPartial(object: Partial<ParamsResponse>): ParamsResponse {
    const message = createBaseParamsResponse();
    message.params = object.params !== undefined && object.params !== null ? Params.fromPartial(object.params) : undefined;
    return message;
  }
};
function createBasePoolsRequest(): PoolsRequest {
  return {
    pagination: undefined
  };
}
export const PoolsRequest = {
  encode(message: PoolsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): PoolsRequest {
    return {
      pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined
    };
  },
  fromPartial(object: Partial<PoolsRequest>): PoolsRequest {
    const message = createBasePoolsRequest();
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  }
};
function createBasePoolsResponse(): PoolsResponse {
  return {
    pools: [],
    pagination: undefined
  };
}
export const PoolsResponse = {
  encode(message: PoolsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.pools) {
      Any.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): PoolsResponse {
    return {
      pools: Array.isArray(object?.pools) ? object.pools.map((e: any) => Any.fromJSON(e)) : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined
    };
  },
  fromPartial(object: Partial<PoolsResponse>): PoolsResponse {
    const message = createBasePoolsResponse();
    message.pools = object.pools?.map(e => Any.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  }
};
function createBaseContractInfoByPoolIdRequest(): ContractInfoByPoolIdRequest {
  return {
    poolId: Long.UZERO
  };
}
export const ContractInfoByPoolIdRequest = {
  encode(message: ContractInfoByPoolIdRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.poolId.isZero()) {
      writer.uint32(8).uint64(message.poolId);
    }
    return writer;
  },
  fromJSON(object: any): ContractInfoByPoolIdRequest {
    return {
      poolId: isSet(object.poolId) ? Long.fromValue(object.poolId) : Long.UZERO
    };
  },
  fromPartial(object: Partial<ContractInfoByPoolIdRequest>): ContractInfoByPoolIdRequest {
    const message = createBaseContractInfoByPoolIdRequest();
    message.poolId = object.poolId !== undefined && object.poolId !== null ? Long.fromValue(object.poolId) : Long.UZERO;
    return message;
  }
};
function createBaseContractInfoByPoolIdResponse(): ContractInfoByPoolIdResponse {
  return {
    contractAddress: "",
    codeId: Long.UZERO
  };
}
export const ContractInfoByPoolIdResponse = {
  encode(message: ContractInfoByPoolIdResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.contractAddress !== "") {
      writer.uint32(10).string(message.contractAddress);
    }
    if (!message.codeId.isZero()) {
      writer.uint32(16).uint64(message.codeId);
    }
    return writer;
  },
  fromJSON(object: any): ContractInfoByPoolIdResponse {
    return {
      contractAddress: isSet(object.contractAddress) ? String(object.contractAddress) : "",
      codeId: isSet(object.codeId) ? Long.fromValue(object.codeId) : Long.UZERO
    };
  },
  fromPartial(object: Partial<ContractInfoByPoolIdResponse>): ContractInfoByPoolIdResponse {
    const message = createBaseContractInfoByPoolIdResponse();
    message.contractAddress = object.contractAddress ?? "";
    message.codeId = object.codeId !== undefined && object.codeId !== null ? Long.fromValue(object.codeId) : Long.UZERO;
    return message;
  }
};