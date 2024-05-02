import { BaseAccount, BaseAccountAmino, BaseAccountSDKType } from "../../../cosmos/auth/v1beta1/auth";
import { BinaryWriter } from "../../../binary";
import { isSet, bytesFromBase64, base64FromBytes } from "../../../helpers";
export interface QueryCodeRequest {
  address: string;
}
export interface QueryCodeRequestProtoMsg {
  typeUrl: "/shentu.cvm.v1alpha1.QueryCodeRequest";
  value: Uint8Array;
}
export interface QueryCodeRequestAmino {
  address?: string;
}
export interface QueryCodeRequestAminoMsg {
  type: "/shentu.cvm.v1alpha1.QueryCodeRequest";
  value: QueryCodeRequestAmino;
}
export interface QueryCodeRequestSDKType {
  address: string;
}
export interface QueryCodeResponse {
  code: string;
}
export interface QueryCodeResponseProtoMsg {
  typeUrl: "/shentu.cvm.v1alpha1.QueryCodeResponse";
  value: Uint8Array;
}
export interface QueryCodeResponseAmino {
  code?: string;
}
export interface QueryCodeResponseAminoMsg {
  type: "/shentu.cvm.v1alpha1.QueryCodeResponse";
  value: QueryCodeResponseAmino;
}
export interface QueryCodeResponseSDKType {
  code: string;
}
export interface QueryAbiRequest {
  address: string;
}
export interface QueryAbiRequestProtoMsg {
  typeUrl: "/shentu.cvm.v1alpha1.QueryAbiRequest";
  value: Uint8Array;
}
export interface QueryAbiRequestAmino {
  address?: string;
}
export interface QueryAbiRequestAminoMsg {
  type: "/shentu.cvm.v1alpha1.QueryAbiRequest";
  value: QueryAbiRequestAmino;
}
export interface QueryAbiRequestSDKType {
  address: string;
}
export interface QueryAbiResponse {
  abi: string;
}
export interface QueryAbiResponseProtoMsg {
  typeUrl: "/shentu.cvm.v1alpha1.QueryAbiResponse";
  value: Uint8Array;
}
export interface QueryAbiResponseAmino {
  abi?: string;
}
export interface QueryAbiResponseAminoMsg {
  type: "/shentu.cvm.v1alpha1.QueryAbiResponse";
  value: QueryAbiResponseAmino;
}
export interface QueryAbiResponseSDKType {
  abi: string;
}
export interface QueryStorageRequest {
  address: string;
  key: string;
}
export interface QueryStorageRequestProtoMsg {
  typeUrl: "/shentu.cvm.v1alpha1.QueryStorageRequest";
  value: Uint8Array;
}
export interface QueryStorageRequestAmino {
  address?: string;
  key?: string;
}
export interface QueryStorageRequestAminoMsg {
  type: "/shentu.cvm.v1alpha1.QueryStorageRequest";
  value: QueryStorageRequestAmino;
}
export interface QueryStorageRequestSDKType {
  address: string;
  key: string;
}
export interface QueryStorageResponse {
  value: Uint8Array;
}
export interface QueryStorageResponseProtoMsg {
  typeUrl: "/shentu.cvm.v1alpha1.QueryStorageResponse";
  value: Uint8Array;
}
export interface QueryStorageResponseAmino {
  value?: string;
}
export interface QueryStorageResponseAminoMsg {
  type: "/shentu.cvm.v1alpha1.QueryStorageResponse";
  value: QueryStorageResponseAmino;
}
export interface QueryStorageResponseSDKType {
  value: Uint8Array;
}
export interface QueryAddressMetaRequest {
  address: string;
}
export interface QueryAddressMetaRequestProtoMsg {
  typeUrl: "/shentu.cvm.v1alpha1.QueryAddressMetaRequest";
  value: Uint8Array;
}
export interface QueryAddressMetaRequestAmino {
  address?: string;
}
export interface QueryAddressMetaRequestAminoMsg {
  type: "/shentu.cvm.v1alpha1.QueryAddressMetaRequest";
  value: QueryAddressMetaRequestAmino;
}
export interface QueryAddressMetaRequestSDKType {
  address: string;
}
export interface QueryAddressMetaResponse {
  metaHash: string;
}
export interface QueryAddressMetaResponseProtoMsg {
  typeUrl: "/shentu.cvm.v1alpha1.QueryAddressMetaResponse";
  value: Uint8Array;
}
export interface QueryAddressMetaResponseAmino {
  meta_hash?: string;
}
export interface QueryAddressMetaResponseAminoMsg {
  type: "/shentu.cvm.v1alpha1.QueryAddressMetaResponse";
  value: QueryAddressMetaResponseAmino;
}
export interface QueryAddressMetaResponseSDKType {
  meta_hash: string;
}
export interface QueryMetaRequest {
  hash: string;
}
export interface QueryMetaRequestProtoMsg {
  typeUrl: "/shentu.cvm.v1alpha1.QueryMetaRequest";
  value: Uint8Array;
}
export interface QueryMetaRequestAmino {
  hash?: string;
}
export interface QueryMetaRequestAminoMsg {
  type: "/shentu.cvm.v1alpha1.QueryMetaRequest";
  value: QueryMetaRequestAmino;
}
export interface QueryMetaRequestSDKType {
  hash: string;
}
export interface QueryMetaResponse {
  meta: string;
}
export interface QueryMetaResponseProtoMsg {
  typeUrl: "/shentu.cvm.v1alpha1.QueryMetaResponse";
  value: Uint8Array;
}
export interface QueryMetaResponseAmino {
  meta?: string;
}
export interface QueryMetaResponseAminoMsg {
  type: "/shentu.cvm.v1alpha1.QueryMetaResponse";
  value: QueryMetaResponseAmino;
}
export interface QueryMetaResponseSDKType {
  meta: string;
}
export interface QueryAccountRequest {
  address: string;
}
export interface QueryAccountRequestProtoMsg {
  typeUrl: "/shentu.cvm.v1alpha1.QueryAccountRequest";
  value: Uint8Array;
}
export interface QueryAccountRequestAmino {
  address?: string;
}
export interface QueryAccountRequestAminoMsg {
  type: "/shentu.cvm.v1alpha1.QueryAccountRequest";
  value: QueryAccountRequestAmino;
}
export interface QueryAccountRequestSDKType {
  address: string;
}
export interface CVMAccount {
  baseAccount?: BaseAccount;
  code: string;
  abi: string;
}
export interface CVMAccountProtoMsg {
  typeUrl: "/shentu.cvm.v1alpha1.CVMAccount";
  value: Uint8Array;
}
export interface CVMAccountAmino {
  base_account?: BaseAccountAmino;
  code?: string;
  abi?: string;
}
export interface CVMAccountAminoMsg {
  type: "/shentu.cvm.v1alpha1.CVMAccount";
  value: CVMAccountAmino;
}
export interface CVMAccountSDKType {
  base_account?: BaseAccountSDKType;
  code: string;
  abi: string;
}
export interface QueryViewRequest {
  caller: string;
  callee: string;
  abiSpec: Uint8Array;
  functionName: string;
  data: Uint8Array;
}
export interface QueryViewRequestProtoMsg {
  typeUrl: "/shentu.cvm.v1alpha1.QueryViewRequest";
  value: Uint8Array;
}
export interface QueryViewRequestAmino {
  caller?: string;
  callee?: string;
  abi_spec?: string;
  function_name?: string;
  data?: string;
}
export interface QueryViewRequestAminoMsg {
  type: "/shentu.cvm.v1alpha1.QueryViewRequest";
  value: QueryViewRequestAmino;
}
export interface QueryViewRequestSDKType {
  caller: string;
  callee: string;
  abi_spec: Uint8Array;
  function_name: string;
  data: Uint8Array;
}
export interface QueryViewResponse {
  returnVars: ReturnVars[];
}
export interface QueryViewResponseProtoMsg {
  typeUrl: "/shentu.cvm.v1alpha1.QueryViewResponse";
  value: Uint8Array;
}
export interface QueryViewResponseAmino {
  return_vars?: ReturnVarsAmino[];
}
export interface QueryViewResponseAminoMsg {
  type: "/shentu.cvm.v1alpha1.QueryViewResponse";
  value: QueryViewResponseAmino;
}
export interface QueryViewResponseSDKType {
  return_vars: ReturnVarsSDKType[];
}
export interface ReturnVars {
  name: string;
  value: string;
}
export interface ReturnVarsProtoMsg {
  typeUrl: "/shentu.cvm.v1alpha1.ReturnVars";
  value: Uint8Array;
}
export interface ReturnVarsAmino {
  name?: string;
  value?: string;
}
export interface ReturnVarsAminoMsg {
  type: "/shentu.cvm.v1alpha1.ReturnVars";
  value: ReturnVarsAmino;
}
export interface ReturnVarsSDKType {
  name: string;
  value: string;
}
function createBaseQueryCodeRequest(): QueryCodeRequest {
  return {
    address: ""
  };
}
export const QueryCodeRequest = {
  typeUrl: "/shentu.cvm.v1alpha1.QueryCodeRequest",
  encode(message: QueryCodeRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    return writer;
  },
  fromJSON(object: any): QueryCodeRequest {
    return {
      address: isSet(object.address) ? String(object.address) : ""
    };
  },
  fromPartial(object: Partial<QueryCodeRequest>): QueryCodeRequest {
    const message = createBaseQueryCodeRequest();
    message.address = object.address ?? "";
    return message;
  },
  fromAmino(object: QueryCodeRequestAmino): QueryCodeRequest {
    const message = createBaseQueryCodeRequest();
    if (object.address !== undefined && object.address !== null) {
      message.address = object.address;
    }
    return message;
  },
  toAmino(message: QueryCodeRequest): QueryCodeRequestAmino {
    const obj: any = {};
    obj.address = message.address === "" ? undefined : message.address;
    return obj;
  },
  fromAminoMsg(object: QueryCodeRequestAminoMsg): QueryCodeRequest {
    return QueryCodeRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryCodeRequestProtoMsg): QueryCodeRequest {
    return QueryCodeRequest.decode(message.value);
  },
  toProto(message: QueryCodeRequest): Uint8Array {
    return QueryCodeRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryCodeRequest): QueryCodeRequestProtoMsg {
    return {
      typeUrl: "/shentu.cvm.v1alpha1.QueryCodeRequest",
      value: QueryCodeRequest.encode(message).finish()
    };
  }
};
function createBaseQueryCodeResponse(): QueryCodeResponse {
  return {
    code: ""
  };
}
export const QueryCodeResponse = {
  typeUrl: "/shentu.cvm.v1alpha1.QueryCodeResponse",
  encode(message: QueryCodeResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.code !== "") {
      writer.uint32(10).string(message.code);
    }
    return writer;
  },
  fromJSON(object: any): QueryCodeResponse {
    return {
      code: isSet(object.code) ? String(object.code) : ""
    };
  },
  fromPartial(object: Partial<QueryCodeResponse>): QueryCodeResponse {
    const message = createBaseQueryCodeResponse();
    message.code = object.code ?? "";
    return message;
  },
  fromAmino(object: QueryCodeResponseAmino): QueryCodeResponse {
    const message = createBaseQueryCodeResponse();
    if (object.code !== undefined && object.code !== null) {
      message.code = object.code;
    }
    return message;
  },
  toAmino(message: QueryCodeResponse): QueryCodeResponseAmino {
    const obj: any = {};
    obj.code = message.code === "" ? undefined : message.code;
    return obj;
  },
  fromAminoMsg(object: QueryCodeResponseAminoMsg): QueryCodeResponse {
    return QueryCodeResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryCodeResponseProtoMsg): QueryCodeResponse {
    return QueryCodeResponse.decode(message.value);
  },
  toProto(message: QueryCodeResponse): Uint8Array {
    return QueryCodeResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryCodeResponse): QueryCodeResponseProtoMsg {
    return {
      typeUrl: "/shentu.cvm.v1alpha1.QueryCodeResponse",
      value: QueryCodeResponse.encode(message).finish()
    };
  }
};
function createBaseQueryAbiRequest(): QueryAbiRequest {
  return {
    address: ""
  };
}
export const QueryAbiRequest = {
  typeUrl: "/shentu.cvm.v1alpha1.QueryAbiRequest",
  encode(message: QueryAbiRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    return writer;
  },
  fromJSON(object: any): QueryAbiRequest {
    return {
      address: isSet(object.address) ? String(object.address) : ""
    };
  },
  fromPartial(object: Partial<QueryAbiRequest>): QueryAbiRequest {
    const message = createBaseQueryAbiRequest();
    message.address = object.address ?? "";
    return message;
  },
  fromAmino(object: QueryAbiRequestAmino): QueryAbiRequest {
    const message = createBaseQueryAbiRequest();
    if (object.address !== undefined && object.address !== null) {
      message.address = object.address;
    }
    return message;
  },
  toAmino(message: QueryAbiRequest): QueryAbiRequestAmino {
    const obj: any = {};
    obj.address = message.address === "" ? undefined : message.address;
    return obj;
  },
  fromAminoMsg(object: QueryAbiRequestAminoMsg): QueryAbiRequest {
    return QueryAbiRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryAbiRequestProtoMsg): QueryAbiRequest {
    return QueryAbiRequest.decode(message.value);
  },
  toProto(message: QueryAbiRequest): Uint8Array {
    return QueryAbiRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryAbiRequest): QueryAbiRequestProtoMsg {
    return {
      typeUrl: "/shentu.cvm.v1alpha1.QueryAbiRequest",
      value: QueryAbiRequest.encode(message).finish()
    };
  }
};
function createBaseQueryAbiResponse(): QueryAbiResponse {
  return {
    abi: ""
  };
}
export const QueryAbiResponse = {
  typeUrl: "/shentu.cvm.v1alpha1.QueryAbiResponse",
  encode(message: QueryAbiResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.abi !== "") {
      writer.uint32(10).string(message.abi);
    }
    return writer;
  },
  fromJSON(object: any): QueryAbiResponse {
    return {
      abi: isSet(object.abi) ? String(object.abi) : ""
    };
  },
  fromPartial(object: Partial<QueryAbiResponse>): QueryAbiResponse {
    const message = createBaseQueryAbiResponse();
    message.abi = object.abi ?? "";
    return message;
  },
  fromAmino(object: QueryAbiResponseAmino): QueryAbiResponse {
    const message = createBaseQueryAbiResponse();
    if (object.abi !== undefined && object.abi !== null) {
      message.abi = object.abi;
    }
    return message;
  },
  toAmino(message: QueryAbiResponse): QueryAbiResponseAmino {
    const obj: any = {};
    obj.abi = message.abi === "" ? undefined : message.abi;
    return obj;
  },
  fromAminoMsg(object: QueryAbiResponseAminoMsg): QueryAbiResponse {
    return QueryAbiResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryAbiResponseProtoMsg): QueryAbiResponse {
    return QueryAbiResponse.decode(message.value);
  },
  toProto(message: QueryAbiResponse): Uint8Array {
    return QueryAbiResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryAbiResponse): QueryAbiResponseProtoMsg {
    return {
      typeUrl: "/shentu.cvm.v1alpha1.QueryAbiResponse",
      value: QueryAbiResponse.encode(message).finish()
    };
  }
};
function createBaseQueryStorageRequest(): QueryStorageRequest {
  return {
    address: "",
    key: ""
  };
}
export const QueryStorageRequest = {
  typeUrl: "/shentu.cvm.v1alpha1.QueryStorageRequest",
  encode(message: QueryStorageRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    if (message.key !== "") {
      writer.uint32(18).string(message.key);
    }
    return writer;
  },
  fromJSON(object: any): QueryStorageRequest {
    return {
      address: isSet(object.address) ? String(object.address) : "",
      key: isSet(object.key) ? String(object.key) : ""
    };
  },
  fromPartial(object: Partial<QueryStorageRequest>): QueryStorageRequest {
    const message = createBaseQueryStorageRequest();
    message.address = object.address ?? "";
    message.key = object.key ?? "";
    return message;
  },
  fromAmino(object: QueryStorageRequestAmino): QueryStorageRequest {
    const message = createBaseQueryStorageRequest();
    if (object.address !== undefined && object.address !== null) {
      message.address = object.address;
    }
    if (object.key !== undefined && object.key !== null) {
      message.key = object.key;
    }
    return message;
  },
  toAmino(message: QueryStorageRequest): QueryStorageRequestAmino {
    const obj: any = {};
    obj.address = message.address === "" ? undefined : message.address;
    obj.key = message.key === "" ? undefined : message.key;
    return obj;
  },
  fromAminoMsg(object: QueryStorageRequestAminoMsg): QueryStorageRequest {
    return QueryStorageRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryStorageRequestProtoMsg): QueryStorageRequest {
    return QueryStorageRequest.decode(message.value);
  },
  toProto(message: QueryStorageRequest): Uint8Array {
    return QueryStorageRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryStorageRequest): QueryStorageRequestProtoMsg {
    return {
      typeUrl: "/shentu.cvm.v1alpha1.QueryStorageRequest",
      value: QueryStorageRequest.encode(message).finish()
    };
  }
};
function createBaseQueryStorageResponse(): QueryStorageResponse {
  return {
    value: new Uint8Array()
  };
}
export const QueryStorageResponse = {
  typeUrl: "/shentu.cvm.v1alpha1.QueryStorageResponse",
  encode(message: QueryStorageResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.value.length !== 0) {
      writer.uint32(10).bytes(message.value);
    }
    return writer;
  },
  fromJSON(object: any): QueryStorageResponse {
    return {
      value: isSet(object.value) ? bytesFromBase64(object.value) : new Uint8Array()
    };
  },
  fromPartial(object: Partial<QueryStorageResponse>): QueryStorageResponse {
    const message = createBaseQueryStorageResponse();
    message.value = object.value ?? new Uint8Array();
    return message;
  },
  fromAmino(object: QueryStorageResponseAmino): QueryStorageResponse {
    const message = createBaseQueryStorageResponse();
    if (object.value !== undefined && object.value !== null) {
      message.value = bytesFromBase64(object.value);
    }
    return message;
  },
  toAmino(message: QueryStorageResponse): QueryStorageResponseAmino {
    const obj: any = {};
    obj.value = message.value ? base64FromBytes(message.value) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryStorageResponseAminoMsg): QueryStorageResponse {
    return QueryStorageResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryStorageResponseProtoMsg): QueryStorageResponse {
    return QueryStorageResponse.decode(message.value);
  },
  toProto(message: QueryStorageResponse): Uint8Array {
    return QueryStorageResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryStorageResponse): QueryStorageResponseProtoMsg {
    return {
      typeUrl: "/shentu.cvm.v1alpha1.QueryStorageResponse",
      value: QueryStorageResponse.encode(message).finish()
    };
  }
};
function createBaseQueryAddressMetaRequest(): QueryAddressMetaRequest {
  return {
    address: ""
  };
}
export const QueryAddressMetaRequest = {
  typeUrl: "/shentu.cvm.v1alpha1.QueryAddressMetaRequest",
  encode(message: QueryAddressMetaRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    return writer;
  },
  fromJSON(object: any): QueryAddressMetaRequest {
    return {
      address: isSet(object.address) ? String(object.address) : ""
    };
  },
  fromPartial(object: Partial<QueryAddressMetaRequest>): QueryAddressMetaRequest {
    const message = createBaseQueryAddressMetaRequest();
    message.address = object.address ?? "";
    return message;
  },
  fromAmino(object: QueryAddressMetaRequestAmino): QueryAddressMetaRequest {
    const message = createBaseQueryAddressMetaRequest();
    if (object.address !== undefined && object.address !== null) {
      message.address = object.address;
    }
    return message;
  },
  toAmino(message: QueryAddressMetaRequest): QueryAddressMetaRequestAmino {
    const obj: any = {};
    obj.address = message.address === "" ? undefined : message.address;
    return obj;
  },
  fromAminoMsg(object: QueryAddressMetaRequestAminoMsg): QueryAddressMetaRequest {
    return QueryAddressMetaRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryAddressMetaRequestProtoMsg): QueryAddressMetaRequest {
    return QueryAddressMetaRequest.decode(message.value);
  },
  toProto(message: QueryAddressMetaRequest): Uint8Array {
    return QueryAddressMetaRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryAddressMetaRequest): QueryAddressMetaRequestProtoMsg {
    return {
      typeUrl: "/shentu.cvm.v1alpha1.QueryAddressMetaRequest",
      value: QueryAddressMetaRequest.encode(message).finish()
    };
  }
};
function createBaseQueryAddressMetaResponse(): QueryAddressMetaResponse {
  return {
    metaHash: ""
  };
}
export const QueryAddressMetaResponse = {
  typeUrl: "/shentu.cvm.v1alpha1.QueryAddressMetaResponse",
  encode(message: QueryAddressMetaResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.metaHash !== "") {
      writer.uint32(10).string(message.metaHash);
    }
    return writer;
  },
  fromJSON(object: any): QueryAddressMetaResponse {
    return {
      metaHash: isSet(object.metaHash) ? String(object.metaHash) : ""
    };
  },
  fromPartial(object: Partial<QueryAddressMetaResponse>): QueryAddressMetaResponse {
    const message = createBaseQueryAddressMetaResponse();
    message.metaHash = object.metaHash ?? "";
    return message;
  },
  fromAmino(object: QueryAddressMetaResponseAmino): QueryAddressMetaResponse {
    const message = createBaseQueryAddressMetaResponse();
    if (object.meta_hash !== undefined && object.meta_hash !== null) {
      message.metaHash = object.meta_hash;
    }
    return message;
  },
  toAmino(message: QueryAddressMetaResponse): QueryAddressMetaResponseAmino {
    const obj: any = {};
    obj.meta_hash = message.metaHash === "" ? undefined : message.metaHash;
    return obj;
  },
  fromAminoMsg(object: QueryAddressMetaResponseAminoMsg): QueryAddressMetaResponse {
    return QueryAddressMetaResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryAddressMetaResponseProtoMsg): QueryAddressMetaResponse {
    return QueryAddressMetaResponse.decode(message.value);
  },
  toProto(message: QueryAddressMetaResponse): Uint8Array {
    return QueryAddressMetaResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryAddressMetaResponse): QueryAddressMetaResponseProtoMsg {
    return {
      typeUrl: "/shentu.cvm.v1alpha1.QueryAddressMetaResponse",
      value: QueryAddressMetaResponse.encode(message).finish()
    };
  }
};
function createBaseQueryMetaRequest(): QueryMetaRequest {
  return {
    hash: ""
  };
}
export const QueryMetaRequest = {
  typeUrl: "/shentu.cvm.v1alpha1.QueryMetaRequest",
  encode(message: QueryMetaRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.hash !== "") {
      writer.uint32(10).string(message.hash);
    }
    return writer;
  },
  fromJSON(object: any): QueryMetaRequest {
    return {
      hash: isSet(object.hash) ? String(object.hash) : ""
    };
  },
  fromPartial(object: Partial<QueryMetaRequest>): QueryMetaRequest {
    const message = createBaseQueryMetaRequest();
    message.hash = object.hash ?? "";
    return message;
  },
  fromAmino(object: QueryMetaRequestAmino): QueryMetaRequest {
    const message = createBaseQueryMetaRequest();
    if (object.hash !== undefined && object.hash !== null) {
      message.hash = object.hash;
    }
    return message;
  },
  toAmino(message: QueryMetaRequest): QueryMetaRequestAmino {
    const obj: any = {};
    obj.hash = message.hash === "" ? undefined : message.hash;
    return obj;
  },
  fromAminoMsg(object: QueryMetaRequestAminoMsg): QueryMetaRequest {
    return QueryMetaRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryMetaRequestProtoMsg): QueryMetaRequest {
    return QueryMetaRequest.decode(message.value);
  },
  toProto(message: QueryMetaRequest): Uint8Array {
    return QueryMetaRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryMetaRequest): QueryMetaRequestProtoMsg {
    return {
      typeUrl: "/shentu.cvm.v1alpha1.QueryMetaRequest",
      value: QueryMetaRequest.encode(message).finish()
    };
  }
};
function createBaseQueryMetaResponse(): QueryMetaResponse {
  return {
    meta: ""
  };
}
export const QueryMetaResponse = {
  typeUrl: "/shentu.cvm.v1alpha1.QueryMetaResponse",
  encode(message: QueryMetaResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.meta !== "") {
      writer.uint32(10).string(message.meta);
    }
    return writer;
  },
  fromJSON(object: any): QueryMetaResponse {
    return {
      meta: isSet(object.meta) ? String(object.meta) : ""
    };
  },
  fromPartial(object: Partial<QueryMetaResponse>): QueryMetaResponse {
    const message = createBaseQueryMetaResponse();
    message.meta = object.meta ?? "";
    return message;
  },
  fromAmino(object: QueryMetaResponseAmino): QueryMetaResponse {
    const message = createBaseQueryMetaResponse();
    if (object.meta !== undefined && object.meta !== null) {
      message.meta = object.meta;
    }
    return message;
  },
  toAmino(message: QueryMetaResponse): QueryMetaResponseAmino {
    const obj: any = {};
    obj.meta = message.meta === "" ? undefined : message.meta;
    return obj;
  },
  fromAminoMsg(object: QueryMetaResponseAminoMsg): QueryMetaResponse {
    return QueryMetaResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryMetaResponseProtoMsg): QueryMetaResponse {
    return QueryMetaResponse.decode(message.value);
  },
  toProto(message: QueryMetaResponse): Uint8Array {
    return QueryMetaResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryMetaResponse): QueryMetaResponseProtoMsg {
    return {
      typeUrl: "/shentu.cvm.v1alpha1.QueryMetaResponse",
      value: QueryMetaResponse.encode(message).finish()
    };
  }
};
function createBaseQueryAccountRequest(): QueryAccountRequest {
  return {
    address: ""
  };
}
export const QueryAccountRequest = {
  typeUrl: "/shentu.cvm.v1alpha1.QueryAccountRequest",
  encode(message: QueryAccountRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    return writer;
  },
  fromJSON(object: any): QueryAccountRequest {
    return {
      address: isSet(object.address) ? String(object.address) : ""
    };
  },
  fromPartial(object: Partial<QueryAccountRequest>): QueryAccountRequest {
    const message = createBaseQueryAccountRequest();
    message.address = object.address ?? "";
    return message;
  },
  fromAmino(object: QueryAccountRequestAmino): QueryAccountRequest {
    const message = createBaseQueryAccountRequest();
    if (object.address !== undefined && object.address !== null) {
      message.address = object.address;
    }
    return message;
  },
  toAmino(message: QueryAccountRequest): QueryAccountRequestAmino {
    const obj: any = {};
    obj.address = message.address === "" ? undefined : message.address;
    return obj;
  },
  fromAminoMsg(object: QueryAccountRequestAminoMsg): QueryAccountRequest {
    return QueryAccountRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryAccountRequestProtoMsg): QueryAccountRequest {
    return QueryAccountRequest.decode(message.value);
  },
  toProto(message: QueryAccountRequest): Uint8Array {
    return QueryAccountRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryAccountRequest): QueryAccountRequestProtoMsg {
    return {
      typeUrl: "/shentu.cvm.v1alpha1.QueryAccountRequest",
      value: QueryAccountRequest.encode(message).finish()
    };
  }
};
function createBaseCVMAccount(): CVMAccount {
  return {
    baseAccount: undefined,
    code: "",
    abi: ""
  };
}
export const CVMAccount = {
  typeUrl: "/shentu.cvm.v1alpha1.CVMAccount",
  encode(message: CVMAccount, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.baseAccount !== undefined) {
      BaseAccount.encode(message.baseAccount, writer.uint32(10).fork()).ldelim();
    }
    if (message.code !== "") {
      writer.uint32(18).string(message.code);
    }
    if (message.abi !== "") {
      writer.uint32(26).string(message.abi);
    }
    return writer;
  },
  fromJSON(object: any): CVMAccount {
    return {
      baseAccount: isSet(object.baseAccount) ? BaseAccount.fromJSON(object.baseAccount) : undefined,
      code: isSet(object.code) ? String(object.code) : "",
      abi: isSet(object.abi) ? String(object.abi) : ""
    };
  },
  fromPartial(object: Partial<CVMAccount>): CVMAccount {
    const message = createBaseCVMAccount();
    message.baseAccount = object.baseAccount !== undefined && object.baseAccount !== null ? BaseAccount.fromPartial(object.baseAccount) : undefined;
    message.code = object.code ?? "";
    message.abi = object.abi ?? "";
    return message;
  },
  fromAmino(object: CVMAccountAmino): CVMAccount {
    const message = createBaseCVMAccount();
    if (object.base_account !== undefined && object.base_account !== null) {
      message.baseAccount = BaseAccount.fromAmino(object.base_account);
    }
    if (object.code !== undefined && object.code !== null) {
      message.code = object.code;
    }
    if (object.abi !== undefined && object.abi !== null) {
      message.abi = object.abi;
    }
    return message;
  },
  toAmino(message: CVMAccount): CVMAccountAmino {
    const obj: any = {};
    obj.base_account = message.baseAccount ? BaseAccount.toAmino(message.baseAccount) : undefined;
    obj.code = message.code === "" ? undefined : message.code;
    obj.abi = message.abi === "" ? undefined : message.abi;
    return obj;
  },
  fromAminoMsg(object: CVMAccountAminoMsg): CVMAccount {
    return CVMAccount.fromAmino(object.value);
  },
  fromProtoMsg(message: CVMAccountProtoMsg): CVMAccount {
    return CVMAccount.decode(message.value);
  },
  toProto(message: CVMAccount): Uint8Array {
    return CVMAccount.encode(message).finish();
  },
  toProtoMsg(message: CVMAccount): CVMAccountProtoMsg {
    return {
      typeUrl: "/shentu.cvm.v1alpha1.CVMAccount",
      value: CVMAccount.encode(message).finish()
    };
  }
};
function createBaseQueryViewRequest(): QueryViewRequest {
  return {
    caller: "",
    callee: "",
    abiSpec: new Uint8Array(),
    functionName: "",
    data: new Uint8Array()
  };
}
export const QueryViewRequest = {
  typeUrl: "/shentu.cvm.v1alpha1.QueryViewRequest",
  encode(message: QueryViewRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.caller !== "") {
      writer.uint32(10).string(message.caller);
    }
    if (message.callee !== "") {
      writer.uint32(18).string(message.callee);
    }
    if (message.abiSpec.length !== 0) {
      writer.uint32(26).bytes(message.abiSpec);
    }
    if (message.functionName !== "") {
      writer.uint32(34).string(message.functionName);
    }
    if (message.data.length !== 0) {
      writer.uint32(42).bytes(message.data);
    }
    return writer;
  },
  fromJSON(object: any): QueryViewRequest {
    return {
      caller: isSet(object.caller) ? String(object.caller) : "",
      callee: isSet(object.callee) ? String(object.callee) : "",
      abiSpec: isSet(object.abiSpec) ? bytesFromBase64(object.abiSpec) : new Uint8Array(),
      functionName: isSet(object.functionName) ? String(object.functionName) : "",
      data: isSet(object.data) ? bytesFromBase64(object.data) : new Uint8Array()
    };
  },
  fromPartial(object: Partial<QueryViewRequest>): QueryViewRequest {
    const message = createBaseQueryViewRequest();
    message.caller = object.caller ?? "";
    message.callee = object.callee ?? "";
    message.abiSpec = object.abiSpec ?? new Uint8Array();
    message.functionName = object.functionName ?? "";
    message.data = object.data ?? new Uint8Array();
    return message;
  },
  fromAmino(object: QueryViewRequestAmino): QueryViewRequest {
    const message = createBaseQueryViewRequest();
    if (object.caller !== undefined && object.caller !== null) {
      message.caller = object.caller;
    }
    if (object.callee !== undefined && object.callee !== null) {
      message.callee = object.callee;
    }
    if (object.abi_spec !== undefined && object.abi_spec !== null) {
      message.abiSpec = bytesFromBase64(object.abi_spec);
    }
    if (object.function_name !== undefined && object.function_name !== null) {
      message.functionName = object.function_name;
    }
    if (object.data !== undefined && object.data !== null) {
      message.data = bytesFromBase64(object.data);
    }
    return message;
  },
  toAmino(message: QueryViewRequest): QueryViewRequestAmino {
    const obj: any = {};
    obj.caller = message.caller === "" ? undefined : message.caller;
    obj.callee = message.callee === "" ? undefined : message.callee;
    obj.abi_spec = message.abiSpec ? base64FromBytes(message.abiSpec) : undefined;
    obj.function_name = message.functionName === "" ? undefined : message.functionName;
    obj.data = message.data ? base64FromBytes(message.data) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryViewRequestAminoMsg): QueryViewRequest {
    return QueryViewRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryViewRequestProtoMsg): QueryViewRequest {
    return QueryViewRequest.decode(message.value);
  },
  toProto(message: QueryViewRequest): Uint8Array {
    return QueryViewRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryViewRequest): QueryViewRequestProtoMsg {
    return {
      typeUrl: "/shentu.cvm.v1alpha1.QueryViewRequest",
      value: QueryViewRequest.encode(message).finish()
    };
  }
};
function createBaseQueryViewResponse(): QueryViewResponse {
  return {
    returnVars: []
  };
}
export const QueryViewResponse = {
  typeUrl: "/shentu.cvm.v1alpha1.QueryViewResponse",
  encode(message: QueryViewResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.returnVars) {
      ReturnVars.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): QueryViewResponse {
    return {
      returnVars: Array.isArray(object?.returnVars) ? object.returnVars.map((e: any) => ReturnVars.fromJSON(e)) : []
    };
  },
  fromPartial(object: Partial<QueryViewResponse>): QueryViewResponse {
    const message = createBaseQueryViewResponse();
    message.returnVars = object.returnVars?.map(e => ReturnVars.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: QueryViewResponseAmino): QueryViewResponse {
    const message = createBaseQueryViewResponse();
    message.returnVars = object.return_vars?.map(e => ReturnVars.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: QueryViewResponse): QueryViewResponseAmino {
    const obj: any = {};
    if (message.returnVars) {
      obj.return_vars = message.returnVars.map(e => e ? ReturnVars.toAmino(e) : undefined);
    } else {
      obj.return_vars = message.returnVars;
    }
    return obj;
  },
  fromAminoMsg(object: QueryViewResponseAminoMsg): QueryViewResponse {
    return QueryViewResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryViewResponseProtoMsg): QueryViewResponse {
    return QueryViewResponse.decode(message.value);
  },
  toProto(message: QueryViewResponse): Uint8Array {
    return QueryViewResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryViewResponse): QueryViewResponseProtoMsg {
    return {
      typeUrl: "/shentu.cvm.v1alpha1.QueryViewResponse",
      value: QueryViewResponse.encode(message).finish()
    };
  }
};
function createBaseReturnVars(): ReturnVars {
  return {
    name: "",
    value: ""
  };
}
export const ReturnVars = {
  typeUrl: "/shentu.cvm.v1alpha1.ReturnVars",
  encode(message: ReturnVars, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    if (message.value !== "") {
      writer.uint32(18).string(message.value);
    }
    return writer;
  },
  fromJSON(object: any): ReturnVars {
    return {
      name: isSet(object.name) ? String(object.name) : "",
      value: isSet(object.value) ? String(object.value) : ""
    };
  },
  fromPartial(object: Partial<ReturnVars>): ReturnVars {
    const message = createBaseReturnVars();
    message.name = object.name ?? "";
    message.value = object.value ?? "";
    return message;
  },
  fromAmino(object: ReturnVarsAmino): ReturnVars {
    const message = createBaseReturnVars();
    if (object.name !== undefined && object.name !== null) {
      message.name = object.name;
    }
    if (object.value !== undefined && object.value !== null) {
      message.value = object.value;
    }
    return message;
  },
  toAmino(message: ReturnVars): ReturnVarsAmino {
    const obj: any = {};
    obj.name = message.name === "" ? undefined : message.name;
    obj.value = message.value === "" ? undefined : message.value;
    return obj;
  },
  fromAminoMsg(object: ReturnVarsAminoMsg): ReturnVars {
    return ReturnVars.fromAmino(object.value);
  },
  fromProtoMsg(message: ReturnVarsProtoMsg): ReturnVars {
    return ReturnVars.decode(message.value);
  },
  toProto(message: ReturnVars): Uint8Array {
    return ReturnVars.encode(message).finish();
  },
  toProtoMsg(message: ReturnVars): ReturnVarsProtoMsg {
    return {
      typeUrl: "/shentu.cvm.v1alpha1.ReturnVars",
      value: ReturnVars.encode(message).finish()
    };
  }
};