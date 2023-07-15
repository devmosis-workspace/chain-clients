import { PageRequest, PageRequestSDKType, PageResponse, PageResponseSDKType } from "../../../cosmos/base/query/v1beta1/pagination";
import { Params, ParamsSDKType } from "./genesis";
import * as _m0 from "protobufjs/minimal";
import { isSet } from "../../../helpers";
/** QueryParamsRequest defines the request type for querying x/evmutil parameters. */
export interface QueryParamsRequest {}
/** QueryParamsRequest defines the request type for querying x/evmutil parameters. */
export interface QueryParamsRequestSDKType {}
/** QueryParamsResponse defines the response type for querying x/evmutil parameters. */
export interface QueryParamsResponse {
  params?: Params;
}
/** QueryParamsResponse defines the response type for querying x/evmutil parameters. */
export interface QueryParamsResponseSDKType {
  params?: ParamsSDKType;
}
/** QueryDeployedCosmosCoinContractsRequest defines the request type for Query/DeployedCosmosCoinContracts method. */
export interface QueryDeployedCosmosCoinContractsRequest {
  /**
   * optional query param to only return specific denoms in the list
   * denoms that do not have deployed contracts will be omitted from the result
   * must request fewer than 100 denoms at a time.
   */
  cosmosDenoms: string[];
  /** pagination defines an optional pagination for the request. */
  pagination?: PageRequest;
}
/** QueryDeployedCosmosCoinContractsRequest defines the request type for Query/DeployedCosmosCoinContracts method. */
export interface QueryDeployedCosmosCoinContractsRequestSDKType {
  cosmos_denoms: string[];
  pagination?: PageRequestSDKType;
}
/** QueryDeployedCosmosCoinContractsResponse defines the response type for the Query/DeployedCosmosCoinContracts method. */
export interface QueryDeployedCosmosCoinContractsResponse {
  /** deployed_cosmos_coin_contracts is a list of cosmos-sdk coin denom and its deployed contract address */
  deployedCosmosCoinContracts: DeployedCosmosCoinContract[];
  /** pagination defines the pagination in the response. */
  pagination?: PageResponse;
}
/** QueryDeployedCosmosCoinContractsResponse defines the response type for the Query/DeployedCosmosCoinContracts method. */
export interface QueryDeployedCosmosCoinContractsResponseSDKType {
  deployed_cosmos_coin_contracts: DeployedCosmosCoinContractSDKType[];
  pagination?: PageResponseSDKType;
}
/** DeployedCosmosCoinContract defines a deployed token contract to the evm representing a native cosmos-sdk coin */
export interface DeployedCosmosCoinContract {
  cosmosDenom: string;
  address: string;
}
/** DeployedCosmosCoinContract defines a deployed token contract to the evm representing a native cosmos-sdk coin */
export interface DeployedCosmosCoinContractSDKType {
  cosmos_denom: string;
  address: string;
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
function createBaseQueryDeployedCosmosCoinContractsRequest(): QueryDeployedCosmosCoinContractsRequest {
  return {
    cosmosDenoms: [],
    pagination: undefined
  };
}
export const QueryDeployedCosmosCoinContractsRequest = {
  encode(message: QueryDeployedCosmosCoinContractsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.cosmosDenoms) {
      writer.uint32(10).string(v!);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): QueryDeployedCosmosCoinContractsRequest {
    return {
      cosmosDenoms: Array.isArray(object?.cosmosDenoms) ? object.cosmosDenoms.map((e: any) => String(e)) : [],
      pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined
    };
  },
  fromPartial(object: Partial<QueryDeployedCosmosCoinContractsRequest>): QueryDeployedCosmosCoinContractsRequest {
    const message = createBaseQueryDeployedCosmosCoinContractsRequest();
    message.cosmosDenoms = object.cosmosDenoms?.map(e => e) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  }
};
function createBaseQueryDeployedCosmosCoinContractsResponse(): QueryDeployedCosmosCoinContractsResponse {
  return {
    deployedCosmosCoinContracts: [],
    pagination: undefined
  };
}
export const QueryDeployedCosmosCoinContractsResponse = {
  encode(message: QueryDeployedCosmosCoinContractsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.deployedCosmosCoinContracts) {
      DeployedCosmosCoinContract.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): QueryDeployedCosmosCoinContractsResponse {
    return {
      deployedCosmosCoinContracts: Array.isArray(object?.deployedCosmosCoinContracts) ? object.deployedCosmosCoinContracts.map((e: any) => DeployedCosmosCoinContract.fromJSON(e)) : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined
    };
  },
  fromPartial(object: Partial<QueryDeployedCosmosCoinContractsResponse>): QueryDeployedCosmosCoinContractsResponse {
    const message = createBaseQueryDeployedCosmosCoinContractsResponse();
    message.deployedCosmosCoinContracts = object.deployedCosmosCoinContracts?.map(e => DeployedCosmosCoinContract.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  }
};
function createBaseDeployedCosmosCoinContract(): DeployedCosmosCoinContract {
  return {
    cosmosDenom: "",
    address: ""
  };
}
export const DeployedCosmosCoinContract = {
  encode(message: DeployedCosmosCoinContract, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.cosmosDenom !== "") {
      writer.uint32(10).string(message.cosmosDenom);
    }
    if (message.address !== "") {
      writer.uint32(18).string(message.address);
    }
    return writer;
  },
  fromJSON(object: any): DeployedCosmosCoinContract {
    return {
      cosmosDenom: isSet(object.cosmosDenom) ? String(object.cosmosDenom) : "",
      address: isSet(object.address) ? String(object.address) : ""
    };
  },
  fromPartial(object: Partial<DeployedCosmosCoinContract>): DeployedCosmosCoinContract {
    const message = createBaseDeployedCosmosCoinContract();
    message.cosmosDenom = object.cosmosDenom ?? "";
    message.address = object.address ?? "";
    return message;
  }
};