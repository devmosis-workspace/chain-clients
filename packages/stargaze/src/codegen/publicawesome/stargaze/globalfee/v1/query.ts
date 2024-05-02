import { Params, ParamsAmino, ParamsSDKType, CodeAuthorization, CodeAuthorizationAmino, CodeAuthorizationSDKType, ContractAuthorization, ContractAuthorizationAmino, ContractAuthorizationSDKType } from "./globalfee";
import { BinaryWriter } from "../../../../binary";
import { isSet } from "../../../../helpers";
export interface QueryCodeAuthorizationRequest {
  codeId: bigint;
}
export interface QueryCodeAuthorizationRequestProtoMsg {
  typeUrl: "/publicawesome.stargaze.globalfee.v1.QueryCodeAuthorizationRequest";
  value: Uint8Array;
}
export interface QueryCodeAuthorizationRequestAmino {
  code_id?: string;
}
export interface QueryCodeAuthorizationRequestAminoMsg {
  type: "/publicawesome.stargaze.globalfee.v1.QueryCodeAuthorizationRequest";
  value: QueryCodeAuthorizationRequestAmino;
}
export interface QueryCodeAuthorizationRequestSDKType {
  code_id: bigint;
}
export interface QueryCodeAuthorizationResponse {
  methods: string[];
}
export interface QueryCodeAuthorizationResponseProtoMsg {
  typeUrl: "/publicawesome.stargaze.globalfee.v1.QueryCodeAuthorizationResponse";
  value: Uint8Array;
}
export interface QueryCodeAuthorizationResponseAmino {
  methods?: string[];
}
export interface QueryCodeAuthorizationResponseAminoMsg {
  type: "/publicawesome.stargaze.globalfee.v1.QueryCodeAuthorizationResponse";
  value: QueryCodeAuthorizationResponseAmino;
}
export interface QueryCodeAuthorizationResponseSDKType {
  methods: string[];
}
export interface QueryContractAuthorizationRequest {
  contractAddress: string;
}
export interface QueryContractAuthorizationRequestProtoMsg {
  typeUrl: "/publicawesome.stargaze.globalfee.v1.QueryContractAuthorizationRequest";
  value: Uint8Array;
}
export interface QueryContractAuthorizationRequestAmino {
  contract_address?: string;
}
export interface QueryContractAuthorizationRequestAminoMsg {
  type: "/publicawesome.stargaze.globalfee.v1.QueryContractAuthorizationRequest";
  value: QueryContractAuthorizationRequestAmino;
}
export interface QueryContractAuthorizationRequestSDKType {
  contract_address: string;
}
export interface QueryContractAuthorizationResponse {
  methods: string[];
}
export interface QueryContractAuthorizationResponseProtoMsg {
  typeUrl: "/publicawesome.stargaze.globalfee.v1.QueryContractAuthorizationResponse";
  value: Uint8Array;
}
export interface QueryContractAuthorizationResponseAmino {
  methods?: string[];
}
export interface QueryContractAuthorizationResponseAminoMsg {
  type: "/publicawesome.stargaze.globalfee.v1.QueryContractAuthorizationResponse";
  value: QueryContractAuthorizationResponseAmino;
}
export interface QueryContractAuthorizationResponseSDKType {
  methods: string[];
}
export interface QueryParamsRequest {}
export interface QueryParamsRequestProtoMsg {
  typeUrl: "/publicawesome.stargaze.globalfee.v1.QueryParamsRequest";
  value: Uint8Array;
}
export interface QueryParamsRequestAmino {}
export interface QueryParamsRequestAminoMsg {
  type: "/publicawesome.stargaze.globalfee.v1.QueryParamsRequest";
  value: QueryParamsRequestAmino;
}
export interface QueryParamsRequestSDKType {}
export interface QueryParamsResponse {
  params?: Params;
}
export interface QueryParamsResponseProtoMsg {
  typeUrl: "/publicawesome.stargaze.globalfee.v1.QueryParamsResponse";
  value: Uint8Array;
}
export interface QueryParamsResponseAmino {
  params?: ParamsAmino;
}
export interface QueryParamsResponseAminoMsg {
  type: "/publicawesome.stargaze.globalfee.v1.QueryParamsResponse";
  value: QueryParamsResponseAmino;
}
export interface QueryParamsResponseSDKType {
  params?: ParamsSDKType;
}
export interface QueryAuthorizationsRequest {}
export interface QueryAuthorizationsRequestProtoMsg {
  typeUrl: "/publicawesome.stargaze.globalfee.v1.QueryAuthorizationsRequest";
  value: Uint8Array;
}
export interface QueryAuthorizationsRequestAmino {}
export interface QueryAuthorizationsRequestAminoMsg {
  type: "/publicawesome.stargaze.globalfee.v1.QueryAuthorizationsRequest";
  value: QueryAuthorizationsRequestAmino;
}
export interface QueryAuthorizationsRequestSDKType {}
export interface QueryAuthorizationsResponse {
  codeAuthorizations: CodeAuthorization[];
  contractAuthorizations: ContractAuthorization[];
}
export interface QueryAuthorizationsResponseProtoMsg {
  typeUrl: "/publicawesome.stargaze.globalfee.v1.QueryAuthorizationsResponse";
  value: Uint8Array;
}
export interface QueryAuthorizationsResponseAmino {
  code_authorizations?: CodeAuthorizationAmino[];
  contract_authorizations?: ContractAuthorizationAmino[];
}
export interface QueryAuthorizationsResponseAminoMsg {
  type: "/publicawesome.stargaze.globalfee.v1.QueryAuthorizationsResponse";
  value: QueryAuthorizationsResponseAmino;
}
export interface QueryAuthorizationsResponseSDKType {
  code_authorizations: CodeAuthorizationSDKType[];
  contract_authorizations: ContractAuthorizationSDKType[];
}
function createBaseQueryCodeAuthorizationRequest(): QueryCodeAuthorizationRequest {
  return {
    codeId: BigInt(0)
  };
}
export const QueryCodeAuthorizationRequest = {
  typeUrl: "/publicawesome.stargaze.globalfee.v1.QueryCodeAuthorizationRequest",
  encode(message: QueryCodeAuthorizationRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.codeId !== BigInt(0)) {
      writer.uint32(8).uint64(message.codeId);
    }
    return writer;
  },
  fromJSON(object: any): QueryCodeAuthorizationRequest {
    return {
      codeId: isSet(object.codeId) ? BigInt(object.codeId.toString()) : BigInt(0)
    };
  },
  fromPartial(object: Partial<QueryCodeAuthorizationRequest>): QueryCodeAuthorizationRequest {
    const message = createBaseQueryCodeAuthorizationRequest();
    message.codeId = object.codeId !== undefined && object.codeId !== null ? BigInt(object.codeId.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: QueryCodeAuthorizationRequestAmino): QueryCodeAuthorizationRequest {
    const message = createBaseQueryCodeAuthorizationRequest();
    if (object.code_id !== undefined && object.code_id !== null) {
      message.codeId = BigInt(object.code_id);
    }
    return message;
  },
  toAmino(message: QueryCodeAuthorizationRequest): QueryCodeAuthorizationRequestAmino {
    const obj: any = {};
    obj.code_id = message.codeId !== BigInt(0) ? message.codeId.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryCodeAuthorizationRequestAminoMsg): QueryCodeAuthorizationRequest {
    return QueryCodeAuthorizationRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryCodeAuthorizationRequestProtoMsg): QueryCodeAuthorizationRequest {
    return QueryCodeAuthorizationRequest.decode(message.value);
  },
  toProto(message: QueryCodeAuthorizationRequest): Uint8Array {
    return QueryCodeAuthorizationRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryCodeAuthorizationRequest): QueryCodeAuthorizationRequestProtoMsg {
    return {
      typeUrl: "/publicawesome.stargaze.globalfee.v1.QueryCodeAuthorizationRequest",
      value: QueryCodeAuthorizationRequest.encode(message).finish()
    };
  }
};
function createBaseQueryCodeAuthorizationResponse(): QueryCodeAuthorizationResponse {
  return {
    methods: []
  };
}
export const QueryCodeAuthorizationResponse = {
  typeUrl: "/publicawesome.stargaze.globalfee.v1.QueryCodeAuthorizationResponse",
  encode(message: QueryCodeAuthorizationResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.methods) {
      writer.uint32(10).string(v!);
    }
    return writer;
  },
  fromJSON(object: any): QueryCodeAuthorizationResponse {
    return {
      methods: Array.isArray(object?.methods) ? object.methods.map((e: any) => String(e)) : []
    };
  },
  fromPartial(object: Partial<QueryCodeAuthorizationResponse>): QueryCodeAuthorizationResponse {
    const message = createBaseQueryCodeAuthorizationResponse();
    message.methods = object.methods?.map(e => e) || [];
    return message;
  },
  fromAmino(object: QueryCodeAuthorizationResponseAmino): QueryCodeAuthorizationResponse {
    const message = createBaseQueryCodeAuthorizationResponse();
    message.methods = object.methods?.map(e => e) || [];
    return message;
  },
  toAmino(message: QueryCodeAuthorizationResponse): QueryCodeAuthorizationResponseAmino {
    const obj: any = {};
    if (message.methods) {
      obj.methods = message.methods.map(e => e);
    } else {
      obj.methods = message.methods;
    }
    return obj;
  },
  fromAminoMsg(object: QueryCodeAuthorizationResponseAminoMsg): QueryCodeAuthorizationResponse {
    return QueryCodeAuthorizationResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryCodeAuthorizationResponseProtoMsg): QueryCodeAuthorizationResponse {
    return QueryCodeAuthorizationResponse.decode(message.value);
  },
  toProto(message: QueryCodeAuthorizationResponse): Uint8Array {
    return QueryCodeAuthorizationResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryCodeAuthorizationResponse): QueryCodeAuthorizationResponseProtoMsg {
    return {
      typeUrl: "/publicawesome.stargaze.globalfee.v1.QueryCodeAuthorizationResponse",
      value: QueryCodeAuthorizationResponse.encode(message).finish()
    };
  }
};
function createBaseQueryContractAuthorizationRequest(): QueryContractAuthorizationRequest {
  return {
    contractAddress: ""
  };
}
export const QueryContractAuthorizationRequest = {
  typeUrl: "/publicawesome.stargaze.globalfee.v1.QueryContractAuthorizationRequest",
  encode(message: QueryContractAuthorizationRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.contractAddress !== "") {
      writer.uint32(10).string(message.contractAddress);
    }
    return writer;
  },
  fromJSON(object: any): QueryContractAuthorizationRequest {
    return {
      contractAddress: isSet(object.contractAddress) ? String(object.contractAddress) : ""
    };
  },
  fromPartial(object: Partial<QueryContractAuthorizationRequest>): QueryContractAuthorizationRequest {
    const message = createBaseQueryContractAuthorizationRequest();
    message.contractAddress = object.contractAddress ?? "";
    return message;
  },
  fromAmino(object: QueryContractAuthorizationRequestAmino): QueryContractAuthorizationRequest {
    const message = createBaseQueryContractAuthorizationRequest();
    if (object.contract_address !== undefined && object.contract_address !== null) {
      message.contractAddress = object.contract_address;
    }
    return message;
  },
  toAmino(message: QueryContractAuthorizationRequest): QueryContractAuthorizationRequestAmino {
    const obj: any = {};
    obj.contract_address = message.contractAddress === "" ? undefined : message.contractAddress;
    return obj;
  },
  fromAminoMsg(object: QueryContractAuthorizationRequestAminoMsg): QueryContractAuthorizationRequest {
    return QueryContractAuthorizationRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryContractAuthorizationRequestProtoMsg): QueryContractAuthorizationRequest {
    return QueryContractAuthorizationRequest.decode(message.value);
  },
  toProto(message: QueryContractAuthorizationRequest): Uint8Array {
    return QueryContractAuthorizationRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryContractAuthorizationRequest): QueryContractAuthorizationRequestProtoMsg {
    return {
      typeUrl: "/publicawesome.stargaze.globalfee.v1.QueryContractAuthorizationRequest",
      value: QueryContractAuthorizationRequest.encode(message).finish()
    };
  }
};
function createBaseQueryContractAuthorizationResponse(): QueryContractAuthorizationResponse {
  return {
    methods: []
  };
}
export const QueryContractAuthorizationResponse = {
  typeUrl: "/publicawesome.stargaze.globalfee.v1.QueryContractAuthorizationResponse",
  encode(message: QueryContractAuthorizationResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.methods) {
      writer.uint32(10).string(v!);
    }
    return writer;
  },
  fromJSON(object: any): QueryContractAuthorizationResponse {
    return {
      methods: Array.isArray(object?.methods) ? object.methods.map((e: any) => String(e)) : []
    };
  },
  fromPartial(object: Partial<QueryContractAuthorizationResponse>): QueryContractAuthorizationResponse {
    const message = createBaseQueryContractAuthorizationResponse();
    message.methods = object.methods?.map(e => e) || [];
    return message;
  },
  fromAmino(object: QueryContractAuthorizationResponseAmino): QueryContractAuthorizationResponse {
    const message = createBaseQueryContractAuthorizationResponse();
    message.methods = object.methods?.map(e => e) || [];
    return message;
  },
  toAmino(message: QueryContractAuthorizationResponse): QueryContractAuthorizationResponseAmino {
    const obj: any = {};
    if (message.methods) {
      obj.methods = message.methods.map(e => e);
    } else {
      obj.methods = message.methods;
    }
    return obj;
  },
  fromAminoMsg(object: QueryContractAuthorizationResponseAminoMsg): QueryContractAuthorizationResponse {
    return QueryContractAuthorizationResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryContractAuthorizationResponseProtoMsg): QueryContractAuthorizationResponse {
    return QueryContractAuthorizationResponse.decode(message.value);
  },
  toProto(message: QueryContractAuthorizationResponse): Uint8Array {
    return QueryContractAuthorizationResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryContractAuthorizationResponse): QueryContractAuthorizationResponseProtoMsg {
    return {
      typeUrl: "/publicawesome.stargaze.globalfee.v1.QueryContractAuthorizationResponse",
      value: QueryContractAuthorizationResponse.encode(message).finish()
    };
  }
};
function createBaseQueryParamsRequest(): QueryParamsRequest {
  return {};
}
export const QueryParamsRequest = {
  typeUrl: "/publicawesome.stargaze.globalfee.v1.QueryParamsRequest",
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
      typeUrl: "/publicawesome.stargaze.globalfee.v1.QueryParamsRequest",
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
  typeUrl: "/publicawesome.stargaze.globalfee.v1.QueryParamsResponse",
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
      typeUrl: "/publicawesome.stargaze.globalfee.v1.QueryParamsResponse",
      value: QueryParamsResponse.encode(message).finish()
    };
  }
};
function createBaseQueryAuthorizationsRequest(): QueryAuthorizationsRequest {
  return {};
}
export const QueryAuthorizationsRequest = {
  typeUrl: "/publicawesome.stargaze.globalfee.v1.QueryAuthorizationsRequest",
  encode(_: QueryAuthorizationsRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  fromJSON(_: any): QueryAuthorizationsRequest {
    return {};
  },
  fromPartial(_: Partial<QueryAuthorizationsRequest>): QueryAuthorizationsRequest {
    const message = createBaseQueryAuthorizationsRequest();
    return message;
  },
  fromAmino(_: QueryAuthorizationsRequestAmino): QueryAuthorizationsRequest {
    const message = createBaseQueryAuthorizationsRequest();
    return message;
  },
  toAmino(_: QueryAuthorizationsRequest): QueryAuthorizationsRequestAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: QueryAuthorizationsRequestAminoMsg): QueryAuthorizationsRequest {
    return QueryAuthorizationsRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryAuthorizationsRequestProtoMsg): QueryAuthorizationsRequest {
    return QueryAuthorizationsRequest.decode(message.value);
  },
  toProto(message: QueryAuthorizationsRequest): Uint8Array {
    return QueryAuthorizationsRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryAuthorizationsRequest): QueryAuthorizationsRequestProtoMsg {
    return {
      typeUrl: "/publicawesome.stargaze.globalfee.v1.QueryAuthorizationsRequest",
      value: QueryAuthorizationsRequest.encode(message).finish()
    };
  }
};
function createBaseQueryAuthorizationsResponse(): QueryAuthorizationsResponse {
  return {
    codeAuthorizations: [],
    contractAuthorizations: []
  };
}
export const QueryAuthorizationsResponse = {
  typeUrl: "/publicawesome.stargaze.globalfee.v1.QueryAuthorizationsResponse",
  encode(message: QueryAuthorizationsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.codeAuthorizations) {
      CodeAuthorization.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.contractAuthorizations) {
      ContractAuthorization.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): QueryAuthorizationsResponse {
    return {
      codeAuthorizations: Array.isArray(object?.codeAuthorizations) ? object.codeAuthorizations.map((e: any) => CodeAuthorization.fromJSON(e)) : [],
      contractAuthorizations: Array.isArray(object?.contractAuthorizations) ? object.contractAuthorizations.map((e: any) => ContractAuthorization.fromJSON(e)) : []
    };
  },
  fromPartial(object: Partial<QueryAuthorizationsResponse>): QueryAuthorizationsResponse {
    const message = createBaseQueryAuthorizationsResponse();
    message.codeAuthorizations = object.codeAuthorizations?.map(e => CodeAuthorization.fromPartial(e)) || [];
    message.contractAuthorizations = object.contractAuthorizations?.map(e => ContractAuthorization.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: QueryAuthorizationsResponseAmino): QueryAuthorizationsResponse {
    const message = createBaseQueryAuthorizationsResponse();
    message.codeAuthorizations = object.code_authorizations?.map(e => CodeAuthorization.fromAmino(e)) || [];
    message.contractAuthorizations = object.contract_authorizations?.map(e => ContractAuthorization.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: QueryAuthorizationsResponse): QueryAuthorizationsResponseAmino {
    const obj: any = {};
    if (message.codeAuthorizations) {
      obj.code_authorizations = message.codeAuthorizations.map(e => e ? CodeAuthorization.toAmino(e) : undefined);
    } else {
      obj.code_authorizations = message.codeAuthorizations;
    }
    if (message.contractAuthorizations) {
      obj.contract_authorizations = message.contractAuthorizations.map(e => e ? ContractAuthorization.toAmino(e) : undefined);
    } else {
      obj.contract_authorizations = message.contractAuthorizations;
    }
    return obj;
  },
  fromAminoMsg(object: QueryAuthorizationsResponseAminoMsg): QueryAuthorizationsResponse {
    return QueryAuthorizationsResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryAuthorizationsResponseProtoMsg): QueryAuthorizationsResponse {
    return QueryAuthorizationsResponse.decode(message.value);
  },
  toProto(message: QueryAuthorizationsResponse): Uint8Array {
    return QueryAuthorizationsResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryAuthorizationsResponse): QueryAuthorizationsResponseProtoMsg {
    return {
      typeUrl: "/publicawesome.stargaze.globalfee.v1.QueryAuthorizationsResponse",
      value: QueryAuthorizationsResponse.encode(message).finish()
    };
  }
};