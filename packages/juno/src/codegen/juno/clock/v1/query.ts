import { PageRequest, PageRequestAmino, PageRequestSDKType, PageResponse, PageResponseAmino, PageResponseSDKType } from "../../../cosmos/base/query/v1beta1/pagination";
import { ClockContract, ClockContractAmino, ClockContractSDKType } from "./clock";
import { Params, ParamsAmino, ParamsSDKType } from "./genesis";
import { BinaryWriter } from "../../../binary";
import { isSet } from "../../../helpers";
/** QueryClockContracts is the request type to get all contracts. */
export interface QueryClockContracts {
  /** pagination defines an optional pagination for the request. */
  pagination?: PageRequest;
}
export interface QueryClockContractsProtoMsg {
  typeUrl: "/juno.clock.v1.QueryClockContracts";
  value: Uint8Array;
}
/** QueryClockContracts is the request type to get all contracts. */
export interface QueryClockContractsAmino {
  /** pagination defines an optional pagination for the request. */
  pagination?: PageRequestAmino;
}
export interface QueryClockContractsAminoMsg {
  type: "/juno.clock.v1.QueryClockContracts";
  value: QueryClockContractsAmino;
}
/** QueryClockContracts is the request type to get all contracts. */
export interface QueryClockContractsSDKType {
  pagination?: PageRequestSDKType;
}
/** QueryClockContractsResponse is the response type for the Query/ClockContracts RPC method. */
export interface QueryClockContractsResponse {
  /** clock_contracts are the clock contracts. */
  clockContracts: ClockContract[];
  /** pagination defines the pagination in the response. */
  pagination?: PageResponse;
}
export interface QueryClockContractsResponseProtoMsg {
  typeUrl: "/juno.clock.v1.QueryClockContractsResponse";
  value: Uint8Array;
}
/** QueryClockContractsResponse is the response type for the Query/ClockContracts RPC method. */
export interface QueryClockContractsResponseAmino {
  /** clock_contracts are the clock contracts. */
  clock_contracts?: ClockContractAmino[];
  /** pagination defines the pagination in the response. */
  pagination?: PageResponseAmino;
}
export interface QueryClockContractsResponseAminoMsg {
  type: "/juno.clock.v1.QueryClockContractsResponse";
  value: QueryClockContractsResponseAmino;
}
/** QueryClockContractsResponse is the response type for the Query/ClockContracts RPC method. */
export interface QueryClockContractsResponseSDKType {
  clock_contracts: ClockContractSDKType[];
  pagination?: PageResponseSDKType;
}
/** QueryClockContract is the request type to get a single contract. */
export interface QueryClockContract {
  /** contract_address is the address of the contract to query. */
  contractAddress: string;
}
export interface QueryClockContractProtoMsg {
  typeUrl: "/juno.clock.v1.QueryClockContract";
  value: Uint8Array;
}
/** QueryClockContract is the request type to get a single contract. */
export interface QueryClockContractAmino {
  /** contract_address is the address of the contract to query. */
  contract_address?: string;
}
export interface QueryClockContractAminoMsg {
  type: "/juno.clock.v1.QueryClockContract";
  value: QueryClockContractAmino;
}
/** QueryClockContract is the request type to get a single contract. */
export interface QueryClockContractSDKType {
  contract_address: string;
}
/** QueryClockContractResponse is the response type for the Query/ClockContract RPC method. */
export interface QueryClockContractResponse {
  /** contract is the clock contract. */
  clockContract: ClockContract;
}
export interface QueryClockContractResponseProtoMsg {
  typeUrl: "/juno.clock.v1.QueryClockContractResponse";
  value: Uint8Array;
}
/** QueryClockContractResponse is the response type for the Query/ClockContract RPC method. */
export interface QueryClockContractResponseAmino {
  /** contract is the clock contract. */
  clock_contract?: ClockContractAmino;
}
export interface QueryClockContractResponseAminoMsg {
  type: "/juno.clock.v1.QueryClockContractResponse";
  value: QueryClockContractResponseAmino;
}
/** QueryClockContractResponse is the response type for the Query/ClockContract RPC method. */
export interface QueryClockContractResponseSDKType {
  clock_contract: ClockContractSDKType;
}
/** QueryParams is the request type to get all module params. */
export interface QueryParamsRequest {}
export interface QueryParamsRequestProtoMsg {
  typeUrl: "/juno.clock.v1.QueryParamsRequest";
  value: Uint8Array;
}
/** QueryParams is the request type to get all module params. */
export interface QueryParamsRequestAmino {}
export interface QueryParamsRequestAminoMsg {
  type: "/juno.clock.v1.QueryParamsRequest";
  value: QueryParamsRequestAmino;
}
/** QueryParams is the request type to get all module params. */
export interface QueryParamsRequestSDKType {}
/** QueryClockContractsResponse is the response type for the Query/ClockContracts RPC method. */
export interface QueryParamsResponse {
  params?: Params;
}
export interface QueryParamsResponseProtoMsg {
  typeUrl: "/juno.clock.v1.QueryParamsResponse";
  value: Uint8Array;
}
/** QueryClockContractsResponse is the response type for the Query/ClockContracts RPC method. */
export interface QueryParamsResponseAmino {
  params?: ParamsAmino;
}
export interface QueryParamsResponseAminoMsg {
  type: "/juno.clock.v1.QueryParamsResponse";
  value: QueryParamsResponseAmino;
}
/** QueryClockContractsResponse is the response type for the Query/ClockContracts RPC method. */
export interface QueryParamsResponseSDKType {
  params?: ParamsSDKType;
}
function createBaseQueryClockContracts(): QueryClockContracts {
  return {
    pagination: undefined
  };
}
export const QueryClockContracts = {
  typeUrl: "/juno.clock.v1.QueryClockContracts",
  encode(message: QueryClockContracts, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): QueryClockContracts {
    return {
      pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined
    };
  },
  fromPartial(object: Partial<QueryClockContracts>): QueryClockContracts {
    const message = createBaseQueryClockContracts();
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryClockContractsAmino): QueryClockContracts {
    const message = createBaseQueryClockContracts();
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryClockContracts): QueryClockContractsAmino {
    const obj: any = {};
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryClockContractsAminoMsg): QueryClockContracts {
    return QueryClockContracts.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryClockContractsProtoMsg): QueryClockContracts {
    return QueryClockContracts.decode(message.value);
  },
  toProto(message: QueryClockContracts): Uint8Array {
    return QueryClockContracts.encode(message).finish();
  },
  toProtoMsg(message: QueryClockContracts): QueryClockContractsProtoMsg {
    return {
      typeUrl: "/juno.clock.v1.QueryClockContracts",
      value: QueryClockContracts.encode(message).finish()
    };
  }
};
function createBaseQueryClockContractsResponse(): QueryClockContractsResponse {
  return {
    clockContracts: [],
    pagination: undefined
  };
}
export const QueryClockContractsResponse = {
  typeUrl: "/juno.clock.v1.QueryClockContractsResponse",
  encode(message: QueryClockContractsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.clockContracts) {
      ClockContract.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): QueryClockContractsResponse {
    return {
      clockContracts: Array.isArray(object?.clockContracts) ? object.clockContracts.map((e: any) => ClockContract.fromJSON(e)) : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined
    };
  },
  fromPartial(object: Partial<QueryClockContractsResponse>): QueryClockContractsResponse {
    const message = createBaseQueryClockContractsResponse();
    message.clockContracts = object.clockContracts?.map(e => ClockContract.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryClockContractsResponseAmino): QueryClockContractsResponse {
    const message = createBaseQueryClockContractsResponse();
    message.clockContracts = object.clock_contracts?.map(e => ClockContract.fromAmino(e)) || [];
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryClockContractsResponse): QueryClockContractsResponseAmino {
    const obj: any = {};
    if (message.clockContracts) {
      obj.clock_contracts = message.clockContracts.map(e => e ? ClockContract.toAmino(e) : undefined);
    } else {
      obj.clock_contracts = [];
    }
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryClockContractsResponseAminoMsg): QueryClockContractsResponse {
    return QueryClockContractsResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryClockContractsResponseProtoMsg): QueryClockContractsResponse {
    return QueryClockContractsResponse.decode(message.value);
  },
  toProto(message: QueryClockContractsResponse): Uint8Array {
    return QueryClockContractsResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryClockContractsResponse): QueryClockContractsResponseProtoMsg {
    return {
      typeUrl: "/juno.clock.v1.QueryClockContractsResponse",
      value: QueryClockContractsResponse.encode(message).finish()
    };
  }
};
function createBaseQueryClockContract(): QueryClockContract {
  return {
    contractAddress: ""
  };
}
export const QueryClockContract = {
  typeUrl: "/juno.clock.v1.QueryClockContract",
  encode(message: QueryClockContract, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.contractAddress !== "") {
      writer.uint32(10).string(message.contractAddress);
    }
    return writer;
  },
  fromJSON(object: any): QueryClockContract {
    return {
      contractAddress: isSet(object.contractAddress) ? String(object.contractAddress) : ""
    };
  },
  fromPartial(object: Partial<QueryClockContract>): QueryClockContract {
    const message = createBaseQueryClockContract();
    message.contractAddress = object.contractAddress ?? "";
    return message;
  },
  fromAmino(object: QueryClockContractAmino): QueryClockContract {
    const message = createBaseQueryClockContract();
    if (object.contract_address !== undefined && object.contract_address !== null) {
      message.contractAddress = object.contract_address;
    }
    return message;
  },
  toAmino(message: QueryClockContract): QueryClockContractAmino {
    const obj: any = {};
    obj.contract_address = message.contractAddress;
    return obj;
  },
  fromAminoMsg(object: QueryClockContractAminoMsg): QueryClockContract {
    return QueryClockContract.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryClockContractProtoMsg): QueryClockContract {
    return QueryClockContract.decode(message.value);
  },
  toProto(message: QueryClockContract): Uint8Array {
    return QueryClockContract.encode(message).finish();
  },
  toProtoMsg(message: QueryClockContract): QueryClockContractProtoMsg {
    return {
      typeUrl: "/juno.clock.v1.QueryClockContract",
      value: QueryClockContract.encode(message).finish()
    };
  }
};
function createBaseQueryClockContractResponse(): QueryClockContractResponse {
  return {
    clockContract: ClockContract.fromPartial({})
  };
}
export const QueryClockContractResponse = {
  typeUrl: "/juno.clock.v1.QueryClockContractResponse",
  encode(message: QueryClockContractResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.clockContract !== undefined) {
      ClockContract.encode(message.clockContract, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): QueryClockContractResponse {
    return {
      clockContract: isSet(object.clockContract) ? ClockContract.fromJSON(object.clockContract) : undefined
    };
  },
  fromPartial(object: Partial<QueryClockContractResponse>): QueryClockContractResponse {
    const message = createBaseQueryClockContractResponse();
    message.clockContract = object.clockContract !== undefined && object.clockContract !== null ? ClockContract.fromPartial(object.clockContract) : undefined;
    return message;
  },
  fromAmino(object: QueryClockContractResponseAmino): QueryClockContractResponse {
    const message = createBaseQueryClockContractResponse();
    if (object.clock_contract !== undefined && object.clock_contract !== null) {
      message.clockContract = ClockContract.fromAmino(object.clock_contract);
    }
    return message;
  },
  toAmino(message: QueryClockContractResponse): QueryClockContractResponseAmino {
    const obj: any = {};
    obj.clock_contract = message.clockContract ? ClockContract.toAmino(message.clockContract) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryClockContractResponseAminoMsg): QueryClockContractResponse {
    return QueryClockContractResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryClockContractResponseProtoMsg): QueryClockContractResponse {
    return QueryClockContractResponse.decode(message.value);
  },
  toProto(message: QueryClockContractResponse): Uint8Array {
    return QueryClockContractResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryClockContractResponse): QueryClockContractResponseProtoMsg {
    return {
      typeUrl: "/juno.clock.v1.QueryClockContractResponse",
      value: QueryClockContractResponse.encode(message).finish()
    };
  }
};
function createBaseQueryParamsRequest(): QueryParamsRequest {
  return {};
}
export const QueryParamsRequest = {
  typeUrl: "/juno.clock.v1.QueryParamsRequest",
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
      typeUrl: "/juno.clock.v1.QueryParamsRequest",
      value: QueryParamsRequest.encode(message).finish()
    };
  }
};
function createBaseQueryParamsResponse(): QueryParamsResponse {
  return {
    params: undefined
  };
}
export const QueryParamsResponse = {
  typeUrl: "/juno.clock.v1.QueryParamsResponse",
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
      typeUrl: "/juno.clock.v1.QueryParamsResponse",
      value: QueryParamsResponse.encode(message).finish()
    };
  }
};