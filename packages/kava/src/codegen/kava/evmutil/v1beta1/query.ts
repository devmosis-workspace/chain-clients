import { PageRequest, PageRequestAmino, PageRequestSDKType, PageResponse, PageResponseAmino, PageResponseSDKType } from "../../../cosmos/base/query/v1beta1/pagination";
import { Params, ParamsAmino, ParamsSDKType } from "./genesis";
import { BinaryWriter } from "../../../binary";
import { isSet } from "../../../helpers";
/** QueryParamsRequest defines the request type for querying x/evmutil parameters. */
export interface QueryParamsRequest {}
export interface QueryParamsRequestProtoMsg {
  typeUrl: "/kava.evmutil.v1beta1.QueryParamsRequest";
  value: Uint8Array;
}
/** QueryParamsRequest defines the request type for querying x/evmutil parameters. */
export interface QueryParamsRequestAmino {}
export interface QueryParamsRequestAminoMsg {
  type: "/kava.evmutil.v1beta1.QueryParamsRequest";
  value: QueryParamsRequestAmino;
}
/** QueryParamsRequest defines the request type for querying x/evmutil parameters. */
export interface QueryParamsRequestSDKType {}
/** QueryParamsResponse defines the response type for querying x/evmutil parameters. */
export interface QueryParamsResponse {
  params: Params;
}
export interface QueryParamsResponseProtoMsg {
  typeUrl: "/kava.evmutil.v1beta1.QueryParamsResponse";
  value: Uint8Array;
}
/** QueryParamsResponse defines the response type for querying x/evmutil parameters. */
export interface QueryParamsResponseAmino {
  params?: ParamsAmino;
}
export interface QueryParamsResponseAminoMsg {
  type: "/kava.evmutil.v1beta1.QueryParamsResponse";
  value: QueryParamsResponseAmino;
}
/** QueryParamsResponse defines the response type for querying x/evmutil parameters. */
export interface QueryParamsResponseSDKType {
  params: ParamsSDKType;
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
export interface QueryDeployedCosmosCoinContractsRequestProtoMsg {
  typeUrl: "/kava.evmutil.v1beta1.QueryDeployedCosmosCoinContractsRequest";
  value: Uint8Array;
}
/** QueryDeployedCosmosCoinContractsRequest defines the request type for Query/DeployedCosmosCoinContracts method. */
export interface QueryDeployedCosmosCoinContractsRequestAmino {
  /**
   * optional query param to only return specific denoms in the list
   * denoms that do not have deployed contracts will be omitted from the result
   * must request fewer than 100 denoms at a time.
   */
  cosmos_denoms?: string[];
  /** pagination defines an optional pagination for the request. */
  pagination?: PageRequestAmino;
}
export interface QueryDeployedCosmosCoinContractsRequestAminoMsg {
  type: "/kava.evmutil.v1beta1.QueryDeployedCosmosCoinContractsRequest";
  value: QueryDeployedCosmosCoinContractsRequestAmino;
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
export interface QueryDeployedCosmosCoinContractsResponseProtoMsg {
  typeUrl: "/kava.evmutil.v1beta1.QueryDeployedCosmosCoinContractsResponse";
  value: Uint8Array;
}
/** QueryDeployedCosmosCoinContractsResponse defines the response type for the Query/DeployedCosmosCoinContracts method. */
export interface QueryDeployedCosmosCoinContractsResponseAmino {
  /** deployed_cosmos_coin_contracts is a list of cosmos-sdk coin denom and its deployed contract address */
  deployed_cosmos_coin_contracts?: DeployedCosmosCoinContractAmino[];
  /** pagination defines the pagination in the response. */
  pagination?: PageResponseAmino;
}
export interface QueryDeployedCosmosCoinContractsResponseAminoMsg {
  type: "/kava.evmutil.v1beta1.QueryDeployedCosmosCoinContractsResponse";
  value: QueryDeployedCosmosCoinContractsResponseAmino;
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
export interface DeployedCosmosCoinContractProtoMsg {
  typeUrl: "/kava.evmutil.v1beta1.DeployedCosmosCoinContract";
  value: Uint8Array;
}
/** DeployedCosmosCoinContract defines a deployed token contract to the evm representing a native cosmos-sdk coin */
export interface DeployedCosmosCoinContractAmino {
  cosmos_denom?: string;
  address?: string;
}
export interface DeployedCosmosCoinContractAminoMsg {
  type: "/kava.evmutil.v1beta1.DeployedCosmosCoinContract";
  value: DeployedCosmosCoinContractAmino;
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
  typeUrl: "/kava.evmutil.v1beta1.QueryParamsRequest",
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
    const message = createBaseQueryParamsRequest();
    return message;
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
      typeUrl: "/kava.evmutil.v1beta1.QueryParamsRequest",
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
  typeUrl: "/kava.evmutil.v1beta1.QueryParamsResponse",
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
    const message = createBaseQueryParamsResponse();
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromAmino(object.params);
    }
    return message;
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
      typeUrl: "/kava.evmutil.v1beta1.QueryParamsResponse",
      value: QueryParamsResponse.encode(message).finish()
    };
  }
};
function createBaseQueryDeployedCosmosCoinContractsRequest(): QueryDeployedCosmosCoinContractsRequest {
  return {
    cosmosDenoms: [],
    pagination: undefined
  };
}
export const QueryDeployedCosmosCoinContractsRequest = {
  typeUrl: "/kava.evmutil.v1beta1.QueryDeployedCosmosCoinContractsRequest",
  encode(message: QueryDeployedCosmosCoinContractsRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
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
  },
  fromAmino(object: QueryDeployedCosmosCoinContractsRequestAmino): QueryDeployedCosmosCoinContractsRequest {
    const message = createBaseQueryDeployedCosmosCoinContractsRequest();
    message.cosmosDenoms = object.cosmos_denoms?.map(e => e) || [];
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryDeployedCosmosCoinContractsRequest): QueryDeployedCosmosCoinContractsRequestAmino {
    const obj: any = {};
    if (message.cosmosDenoms) {
      obj.cosmos_denoms = message.cosmosDenoms.map(e => e);
    } else {
      obj.cosmos_denoms = [];
    }
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryDeployedCosmosCoinContractsRequestAminoMsg): QueryDeployedCosmosCoinContractsRequest {
    return QueryDeployedCosmosCoinContractsRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryDeployedCosmosCoinContractsRequestProtoMsg): QueryDeployedCosmosCoinContractsRequest {
    return QueryDeployedCosmosCoinContractsRequest.decode(message.value);
  },
  toProto(message: QueryDeployedCosmosCoinContractsRequest): Uint8Array {
    return QueryDeployedCosmosCoinContractsRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryDeployedCosmosCoinContractsRequest): QueryDeployedCosmosCoinContractsRequestProtoMsg {
    return {
      typeUrl: "/kava.evmutil.v1beta1.QueryDeployedCosmosCoinContractsRequest",
      value: QueryDeployedCosmosCoinContractsRequest.encode(message).finish()
    };
  }
};
function createBaseQueryDeployedCosmosCoinContractsResponse(): QueryDeployedCosmosCoinContractsResponse {
  return {
    deployedCosmosCoinContracts: [],
    pagination: undefined
  };
}
export const QueryDeployedCosmosCoinContractsResponse = {
  typeUrl: "/kava.evmutil.v1beta1.QueryDeployedCosmosCoinContractsResponse",
  encode(message: QueryDeployedCosmosCoinContractsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
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
  },
  fromAmino(object: QueryDeployedCosmosCoinContractsResponseAmino): QueryDeployedCosmosCoinContractsResponse {
    const message = createBaseQueryDeployedCosmosCoinContractsResponse();
    message.deployedCosmosCoinContracts = object.deployed_cosmos_coin_contracts?.map(e => DeployedCosmosCoinContract.fromAmino(e)) || [];
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryDeployedCosmosCoinContractsResponse): QueryDeployedCosmosCoinContractsResponseAmino {
    const obj: any = {};
    if (message.deployedCosmosCoinContracts) {
      obj.deployed_cosmos_coin_contracts = message.deployedCosmosCoinContracts.map(e => e ? DeployedCosmosCoinContract.toAmino(e) : undefined);
    } else {
      obj.deployed_cosmos_coin_contracts = [];
    }
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryDeployedCosmosCoinContractsResponseAminoMsg): QueryDeployedCosmosCoinContractsResponse {
    return QueryDeployedCosmosCoinContractsResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryDeployedCosmosCoinContractsResponseProtoMsg): QueryDeployedCosmosCoinContractsResponse {
    return QueryDeployedCosmosCoinContractsResponse.decode(message.value);
  },
  toProto(message: QueryDeployedCosmosCoinContractsResponse): Uint8Array {
    return QueryDeployedCosmosCoinContractsResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryDeployedCosmosCoinContractsResponse): QueryDeployedCosmosCoinContractsResponseProtoMsg {
    return {
      typeUrl: "/kava.evmutil.v1beta1.QueryDeployedCosmosCoinContractsResponse",
      value: QueryDeployedCosmosCoinContractsResponse.encode(message).finish()
    };
  }
};
function createBaseDeployedCosmosCoinContract(): DeployedCosmosCoinContract {
  return {
    cosmosDenom: "",
    address: ""
  };
}
export const DeployedCosmosCoinContract = {
  typeUrl: "/kava.evmutil.v1beta1.DeployedCosmosCoinContract",
  encode(message: DeployedCosmosCoinContract, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
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
  },
  fromAmino(object: DeployedCosmosCoinContractAmino): DeployedCosmosCoinContract {
    const message = createBaseDeployedCosmosCoinContract();
    if (object.cosmos_denom !== undefined && object.cosmos_denom !== null) {
      message.cosmosDenom = object.cosmos_denom;
    }
    if (object.address !== undefined && object.address !== null) {
      message.address = object.address;
    }
    return message;
  },
  toAmino(message: DeployedCosmosCoinContract): DeployedCosmosCoinContractAmino {
    const obj: any = {};
    obj.cosmos_denom = message.cosmosDenom;
    obj.address = message.address;
    return obj;
  },
  fromAminoMsg(object: DeployedCosmosCoinContractAminoMsg): DeployedCosmosCoinContract {
    return DeployedCosmosCoinContract.fromAmino(object.value);
  },
  fromProtoMsg(message: DeployedCosmosCoinContractProtoMsg): DeployedCosmosCoinContract {
    return DeployedCosmosCoinContract.decode(message.value);
  },
  toProto(message: DeployedCosmosCoinContract): Uint8Array {
    return DeployedCosmosCoinContract.encode(message).finish();
  },
  toProtoMsg(message: DeployedCosmosCoinContract): DeployedCosmosCoinContractProtoMsg {
    return {
      typeUrl: "/kava.evmutil.v1beta1.DeployedCosmosCoinContract",
      value: DeployedCosmosCoinContract.encode(message).finish()
    };
  }
};