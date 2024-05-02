import { Any, AnyProtoMsg, AnyAmino, AnySDKType } from "../../../google/protobuf/any";
import { PageRequest, PageRequestAmino, PageRequestSDKType } from "../../../cosmos/base/query/v1beta1/pagination";
import { Certifier, CertifierAmino, CertifierSDKType, Platform, PlatformAmino, PlatformSDKType, Certificate, CertificateAmino, CertificateSDKType } from "./cert";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { isSet } from "../../../helpers";
import { encodePubkey, decodePubkey } from "@cosmjs/proto-signing";
import { Pubkey } from "@cosmjs/amino";
export interface QueryCertifierRequest {
  address: string;
  alias: string;
}
export interface QueryCertifierRequestProtoMsg {
  typeUrl: "/shentu.cert.v1alpha1.QueryCertifierRequest";
  value: Uint8Array;
}
export interface QueryCertifierRequestAmino {
  address?: string;
  alias?: string;
}
export interface QueryCertifierRequestAminoMsg {
  type: "/shentu.cert.v1alpha1.QueryCertifierRequest";
  value: QueryCertifierRequestAmino;
}
export interface QueryCertifierRequestSDKType {
  address: string;
  alias: string;
}
export interface QueryCertifierResponse {
  certifier: Certifier;
}
export interface QueryCertifierResponseProtoMsg {
  typeUrl: "/shentu.cert.v1alpha1.QueryCertifierResponse";
  value: Uint8Array;
}
export interface QueryCertifierResponseAmino {
  certifier?: CertifierAmino;
}
export interface QueryCertifierResponseAminoMsg {
  type: "/shentu.cert.v1alpha1.QueryCertifierResponse";
  value: QueryCertifierResponseAmino;
}
export interface QueryCertifierResponseSDKType {
  certifier: CertifierSDKType;
}
export interface QueryCertifiersRequest {}
export interface QueryCertifiersRequestProtoMsg {
  typeUrl: "/shentu.cert.v1alpha1.QueryCertifiersRequest";
  value: Uint8Array;
}
export interface QueryCertifiersRequestAmino {}
export interface QueryCertifiersRequestAminoMsg {
  type: "/shentu.cert.v1alpha1.QueryCertifiersRequest";
  value: QueryCertifiersRequestAmino;
}
export interface QueryCertifiersRequestSDKType {}
export interface QueryCertifiersResponse {
  certifiers: Certifier[];
}
export interface QueryCertifiersResponseProtoMsg {
  typeUrl: "/shentu.cert.v1alpha1.QueryCertifiersResponse";
  value: Uint8Array;
}
export interface QueryCertifiersResponseAmino {
  certifiers?: CertifierAmino[];
}
export interface QueryCertifiersResponseAminoMsg {
  type: "/shentu.cert.v1alpha1.QueryCertifiersResponse";
  value: QueryCertifiersResponseAmino;
}
export interface QueryCertifiersResponseSDKType {
  certifiers: CertifierSDKType[];
}
export interface QueryPlatformRequest {
  pubkey?: (Any) | undefined;
}
export interface QueryPlatformRequestProtoMsg {
  typeUrl: "/shentu.cert.v1alpha1.QueryPlatformRequest";
  value: Uint8Array;
}
export type QueryPlatformRequestEncoded = Omit<QueryPlatformRequest, "pubkey"> & {
  pubkey?: AnyProtoMsg | undefined;
};
export interface QueryPlatformRequestAmino {
  pubkey?: AnyAmino;
}
export interface QueryPlatformRequestAminoMsg {
  type: "/shentu.cert.v1alpha1.QueryPlatformRequest";
  value: QueryPlatformRequestAmino;
}
export interface QueryPlatformRequestSDKType {
  pubkey?: AnySDKType | undefined;
}
export interface QueryPlatformResponse {
  platform: Platform;
}
export interface QueryPlatformResponseProtoMsg {
  typeUrl: "/shentu.cert.v1alpha1.QueryPlatformResponse";
  value: Uint8Array;
}
export interface QueryPlatformResponseAmino {
  platform?: PlatformAmino;
}
export interface QueryPlatformResponseAminoMsg {
  type: "/shentu.cert.v1alpha1.QueryPlatformResponse";
  value: QueryPlatformResponseAmino;
}
export interface QueryPlatformResponseSDKType {
  platform: PlatformSDKType;
}
export interface QueryCertificateRequest {
  certificateId: bigint;
}
export interface QueryCertificateRequestProtoMsg {
  typeUrl: "/shentu.cert.v1alpha1.QueryCertificateRequest";
  value: Uint8Array;
}
export interface QueryCertificateRequestAmino {
  certificate_id?: string;
}
export interface QueryCertificateRequestAminoMsg {
  type: "/shentu.cert.v1alpha1.QueryCertificateRequest";
  value: QueryCertificateRequestAmino;
}
export interface QueryCertificateRequestSDKType {
  certificate_id: bigint;
}
export interface QueryCertificateResponse {
  certificate: Certificate;
}
export interface QueryCertificateResponseProtoMsg {
  typeUrl: "/shentu.cert.v1alpha1.QueryCertificateResponse";
  value: Uint8Array;
}
export interface QueryCertificateResponseAmino {
  certificate?: CertificateAmino;
}
export interface QueryCertificateResponseAminoMsg {
  type: "/shentu.cert.v1alpha1.QueryCertificateResponse";
  value: QueryCertificateResponseAmino;
}
export interface QueryCertificateResponseSDKType {
  certificate: CertificateSDKType;
}
export interface QueryCertificatesRequest {
  certifier: string;
  certificateType: string;
  /** pagination defines an optional pagination for the request. */
  pagination?: PageRequest;
}
export interface QueryCertificatesRequestProtoMsg {
  typeUrl: "/shentu.cert.v1alpha1.QueryCertificatesRequest";
  value: Uint8Array;
}
export interface QueryCertificatesRequestAmino {
  certifier?: string;
  certificate_type?: string;
  /** pagination defines an optional pagination for the request. */
  pagination?: PageRequestAmino;
}
export interface QueryCertificatesRequestAminoMsg {
  type: "/shentu.cert.v1alpha1.QueryCertificatesRequest";
  value: QueryCertificatesRequestAmino;
}
export interface QueryCertificatesRequestSDKType {
  certifier: string;
  certificate_type: string;
  pagination?: PageRequestSDKType;
}
export interface QueryCertificatesResponse {
  total: bigint;
  certificates: QueryCertificateResponse[];
}
export interface QueryCertificatesResponseProtoMsg {
  typeUrl: "/shentu.cert.v1alpha1.QueryCertificatesResponse";
  value: Uint8Array;
}
export interface QueryCertificatesResponseAmino {
  total?: string;
  certificates?: QueryCertificateResponseAmino[];
}
export interface QueryCertificatesResponseAminoMsg {
  type: "/shentu.cert.v1alpha1.QueryCertificatesResponse";
  value: QueryCertificatesResponseAmino;
}
export interface QueryCertificatesResponseSDKType {
  total: bigint;
  certificates: QueryCertificateResponseSDKType[];
}
export interface ConversionToShentuAddrRequest {
  address: string;
}
export interface ConversionToShentuAddrRequestProtoMsg {
  typeUrl: "/shentu.cert.v1alpha1.ConversionToShentuAddrRequest";
  value: Uint8Array;
}
export interface ConversionToShentuAddrRequestAmino {
  address?: string;
}
export interface ConversionToShentuAddrRequestAminoMsg {
  type: "/shentu.cert.v1alpha1.ConversionToShentuAddrRequest";
  value: ConversionToShentuAddrRequestAmino;
}
export interface ConversionToShentuAddrRequestSDKType {
  address: string;
}
export interface ConversionToShentuAddrResponse {
  address: string;
}
export interface ConversionToShentuAddrResponseProtoMsg {
  typeUrl: "/shentu.cert.v1alpha1.ConversionToShentuAddrResponse";
  value: Uint8Array;
}
export interface ConversionToShentuAddrResponseAmino {
  address?: string;
}
export interface ConversionToShentuAddrResponseAminoMsg {
  type: "/shentu.cert.v1alpha1.ConversionToShentuAddrResponse";
  value: ConversionToShentuAddrResponseAmino;
}
export interface ConversionToShentuAddrResponseSDKType {
  address: string;
}
function createBaseQueryCertifierRequest(): QueryCertifierRequest {
  return {
    address: "",
    alias: ""
  };
}
export const QueryCertifierRequest = {
  typeUrl: "/shentu.cert.v1alpha1.QueryCertifierRequest",
  encode(message: QueryCertifierRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    if (message.alias !== "") {
      writer.uint32(18).string(message.alias);
    }
    return writer;
  },
  fromJSON(object: any): QueryCertifierRequest {
    return {
      address: isSet(object.address) ? String(object.address) : "",
      alias: isSet(object.alias) ? String(object.alias) : ""
    };
  },
  fromPartial(object: Partial<QueryCertifierRequest>): QueryCertifierRequest {
    const message = createBaseQueryCertifierRequest();
    message.address = object.address ?? "";
    message.alias = object.alias ?? "";
    return message;
  },
  fromAmino(object: QueryCertifierRequestAmino): QueryCertifierRequest {
    const message = createBaseQueryCertifierRequest();
    if (object.address !== undefined && object.address !== null) {
      message.address = object.address;
    }
    if (object.alias !== undefined && object.alias !== null) {
      message.alias = object.alias;
    }
    return message;
  },
  toAmino(message: QueryCertifierRequest): QueryCertifierRequestAmino {
    const obj: any = {};
    obj.address = message.address === "" ? undefined : message.address;
    obj.alias = message.alias === "" ? undefined : message.alias;
    return obj;
  },
  fromAminoMsg(object: QueryCertifierRequestAminoMsg): QueryCertifierRequest {
    return QueryCertifierRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryCertifierRequestProtoMsg): QueryCertifierRequest {
    return QueryCertifierRequest.decode(message.value);
  },
  toProto(message: QueryCertifierRequest): Uint8Array {
    return QueryCertifierRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryCertifierRequest): QueryCertifierRequestProtoMsg {
    return {
      typeUrl: "/shentu.cert.v1alpha1.QueryCertifierRequest",
      value: QueryCertifierRequest.encode(message).finish()
    };
  }
};
function createBaseQueryCertifierResponse(): QueryCertifierResponse {
  return {
    certifier: Certifier.fromPartial({})
  };
}
export const QueryCertifierResponse = {
  typeUrl: "/shentu.cert.v1alpha1.QueryCertifierResponse",
  encode(message: QueryCertifierResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.certifier !== undefined) {
      Certifier.encode(message.certifier, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): QueryCertifierResponse {
    return {
      certifier: isSet(object.certifier) ? Certifier.fromJSON(object.certifier) : undefined
    };
  },
  fromPartial(object: Partial<QueryCertifierResponse>): QueryCertifierResponse {
    const message = createBaseQueryCertifierResponse();
    message.certifier = object.certifier !== undefined && object.certifier !== null ? Certifier.fromPartial(object.certifier) : undefined;
    return message;
  },
  fromAmino(object: QueryCertifierResponseAmino): QueryCertifierResponse {
    const message = createBaseQueryCertifierResponse();
    if (object.certifier !== undefined && object.certifier !== null) {
      message.certifier = Certifier.fromAmino(object.certifier);
    }
    return message;
  },
  toAmino(message: QueryCertifierResponse): QueryCertifierResponseAmino {
    const obj: any = {};
    obj.certifier = message.certifier ? Certifier.toAmino(message.certifier) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryCertifierResponseAminoMsg): QueryCertifierResponse {
    return QueryCertifierResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryCertifierResponseProtoMsg): QueryCertifierResponse {
    return QueryCertifierResponse.decode(message.value);
  },
  toProto(message: QueryCertifierResponse): Uint8Array {
    return QueryCertifierResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryCertifierResponse): QueryCertifierResponseProtoMsg {
    return {
      typeUrl: "/shentu.cert.v1alpha1.QueryCertifierResponse",
      value: QueryCertifierResponse.encode(message).finish()
    };
  }
};
function createBaseQueryCertifiersRequest(): QueryCertifiersRequest {
  return {};
}
export const QueryCertifiersRequest = {
  typeUrl: "/shentu.cert.v1alpha1.QueryCertifiersRequest",
  encode(_: QueryCertifiersRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  fromJSON(_: any): QueryCertifiersRequest {
    return {};
  },
  fromPartial(_: Partial<QueryCertifiersRequest>): QueryCertifiersRequest {
    const message = createBaseQueryCertifiersRequest();
    return message;
  },
  fromAmino(_: QueryCertifiersRequestAmino): QueryCertifiersRequest {
    const message = createBaseQueryCertifiersRequest();
    return message;
  },
  toAmino(_: QueryCertifiersRequest): QueryCertifiersRequestAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: QueryCertifiersRequestAminoMsg): QueryCertifiersRequest {
    return QueryCertifiersRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryCertifiersRequestProtoMsg): QueryCertifiersRequest {
    return QueryCertifiersRequest.decode(message.value);
  },
  toProto(message: QueryCertifiersRequest): Uint8Array {
    return QueryCertifiersRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryCertifiersRequest): QueryCertifiersRequestProtoMsg {
    return {
      typeUrl: "/shentu.cert.v1alpha1.QueryCertifiersRequest",
      value: QueryCertifiersRequest.encode(message).finish()
    };
  }
};
function createBaseQueryCertifiersResponse(): QueryCertifiersResponse {
  return {
    certifiers: []
  };
}
export const QueryCertifiersResponse = {
  typeUrl: "/shentu.cert.v1alpha1.QueryCertifiersResponse",
  encode(message: QueryCertifiersResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.certifiers) {
      Certifier.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): QueryCertifiersResponse {
    return {
      certifiers: Array.isArray(object?.certifiers) ? object.certifiers.map((e: any) => Certifier.fromJSON(e)) : []
    };
  },
  fromPartial(object: Partial<QueryCertifiersResponse>): QueryCertifiersResponse {
    const message = createBaseQueryCertifiersResponse();
    message.certifiers = object.certifiers?.map(e => Certifier.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: QueryCertifiersResponseAmino): QueryCertifiersResponse {
    const message = createBaseQueryCertifiersResponse();
    message.certifiers = object.certifiers?.map(e => Certifier.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: QueryCertifiersResponse): QueryCertifiersResponseAmino {
    const obj: any = {};
    if (message.certifiers) {
      obj.certifiers = message.certifiers.map(e => e ? Certifier.toAmino(e) : undefined);
    } else {
      obj.certifiers = message.certifiers;
    }
    return obj;
  },
  fromAminoMsg(object: QueryCertifiersResponseAminoMsg): QueryCertifiersResponse {
    return QueryCertifiersResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryCertifiersResponseProtoMsg): QueryCertifiersResponse {
    return QueryCertifiersResponse.decode(message.value);
  },
  toProto(message: QueryCertifiersResponse): Uint8Array {
    return QueryCertifiersResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryCertifiersResponse): QueryCertifiersResponseProtoMsg {
    return {
      typeUrl: "/shentu.cert.v1alpha1.QueryCertifiersResponse",
      value: QueryCertifiersResponse.encode(message).finish()
    };
  }
};
function createBaseQueryPlatformRequest(): QueryPlatformRequest {
  return {
    pubkey: undefined
  };
}
export const QueryPlatformRequest = {
  typeUrl: "/shentu.cert.v1alpha1.QueryPlatformRequest",
  encode(message: QueryPlatformRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.pubkey !== undefined) {
      Any.encode((message.pubkey as Any), writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): QueryPlatformRequest {
    return {
      pubkey: isSet(object.pubkey) ? Any.fromJSON(object.pubkey) : undefined
    };
  },
  fromPartial(object: Partial<QueryPlatformRequest>): QueryPlatformRequest {
    const message = createBaseQueryPlatformRequest();
    message.pubkey = object.pubkey !== undefined && object.pubkey !== null ? Any.fromPartial(object.pubkey) : undefined;
    return message;
  },
  fromAmino(object: QueryPlatformRequestAmino): QueryPlatformRequest {
    const message = createBaseQueryPlatformRequest();
    if (object.pubkey !== undefined && object.pubkey !== null) {
      message.pubkey = encodePubkey(object.pubkey);
    }
    return message;
  },
  toAmino(message: QueryPlatformRequest): QueryPlatformRequestAmino {
    const obj: any = {};
    obj.pubkey = message.pubkey ? decodePubkey(message.pubkey) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryPlatformRequestAminoMsg): QueryPlatformRequest {
    return QueryPlatformRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryPlatformRequestProtoMsg): QueryPlatformRequest {
    return QueryPlatformRequest.decode(message.value);
  },
  toProto(message: QueryPlatformRequest): Uint8Array {
    return QueryPlatformRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryPlatformRequest): QueryPlatformRequestProtoMsg {
    return {
      typeUrl: "/shentu.cert.v1alpha1.QueryPlatformRequest",
      value: QueryPlatformRequest.encode(message).finish()
    };
  }
};
function createBaseQueryPlatformResponse(): QueryPlatformResponse {
  return {
    platform: Platform.fromPartial({})
  };
}
export const QueryPlatformResponse = {
  typeUrl: "/shentu.cert.v1alpha1.QueryPlatformResponse",
  encode(message: QueryPlatformResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.platform !== undefined) {
      Platform.encode(message.platform, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): QueryPlatformResponse {
    return {
      platform: isSet(object.platform) ? Platform.fromJSON(object.platform) : undefined
    };
  },
  fromPartial(object: Partial<QueryPlatformResponse>): QueryPlatformResponse {
    const message = createBaseQueryPlatformResponse();
    message.platform = object.platform !== undefined && object.platform !== null ? Platform.fromPartial(object.platform) : undefined;
    return message;
  },
  fromAmino(object: QueryPlatformResponseAmino): QueryPlatformResponse {
    const message = createBaseQueryPlatformResponse();
    if (object.platform !== undefined && object.platform !== null) {
      message.platform = Platform.fromAmino(object.platform);
    }
    return message;
  },
  toAmino(message: QueryPlatformResponse): QueryPlatformResponseAmino {
    const obj: any = {};
    obj.platform = message.platform ? Platform.toAmino(message.platform) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryPlatformResponseAminoMsg): QueryPlatformResponse {
    return QueryPlatformResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryPlatformResponseProtoMsg): QueryPlatformResponse {
    return QueryPlatformResponse.decode(message.value);
  },
  toProto(message: QueryPlatformResponse): Uint8Array {
    return QueryPlatformResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryPlatformResponse): QueryPlatformResponseProtoMsg {
    return {
      typeUrl: "/shentu.cert.v1alpha1.QueryPlatformResponse",
      value: QueryPlatformResponse.encode(message).finish()
    };
  }
};
function createBaseQueryCertificateRequest(): QueryCertificateRequest {
  return {
    certificateId: BigInt(0)
  };
}
export const QueryCertificateRequest = {
  typeUrl: "/shentu.cert.v1alpha1.QueryCertificateRequest",
  encode(message: QueryCertificateRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.certificateId !== BigInt(0)) {
      writer.uint32(8).uint64(message.certificateId);
    }
    return writer;
  },
  fromJSON(object: any): QueryCertificateRequest {
    return {
      certificateId: isSet(object.certificateId) ? BigInt(object.certificateId.toString()) : BigInt(0)
    };
  },
  fromPartial(object: Partial<QueryCertificateRequest>): QueryCertificateRequest {
    const message = createBaseQueryCertificateRequest();
    message.certificateId = object.certificateId !== undefined && object.certificateId !== null ? BigInt(object.certificateId.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: QueryCertificateRequestAmino): QueryCertificateRequest {
    const message = createBaseQueryCertificateRequest();
    if (object.certificate_id !== undefined && object.certificate_id !== null) {
      message.certificateId = BigInt(object.certificate_id);
    }
    return message;
  },
  toAmino(message: QueryCertificateRequest): QueryCertificateRequestAmino {
    const obj: any = {};
    obj.certificate_id = message.certificateId !== BigInt(0) ? message.certificateId.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryCertificateRequestAminoMsg): QueryCertificateRequest {
    return QueryCertificateRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryCertificateRequestProtoMsg): QueryCertificateRequest {
    return QueryCertificateRequest.decode(message.value);
  },
  toProto(message: QueryCertificateRequest): Uint8Array {
    return QueryCertificateRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryCertificateRequest): QueryCertificateRequestProtoMsg {
    return {
      typeUrl: "/shentu.cert.v1alpha1.QueryCertificateRequest",
      value: QueryCertificateRequest.encode(message).finish()
    };
  }
};
function createBaseQueryCertificateResponse(): QueryCertificateResponse {
  return {
    certificate: Certificate.fromPartial({})
  };
}
export const QueryCertificateResponse = {
  typeUrl: "/shentu.cert.v1alpha1.QueryCertificateResponse",
  encode(message: QueryCertificateResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.certificate !== undefined) {
      Certificate.encode(message.certificate, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): QueryCertificateResponse {
    return {
      certificate: isSet(object.certificate) ? Certificate.fromJSON(object.certificate) : undefined
    };
  },
  fromPartial(object: Partial<QueryCertificateResponse>): QueryCertificateResponse {
    const message = createBaseQueryCertificateResponse();
    message.certificate = object.certificate !== undefined && object.certificate !== null ? Certificate.fromPartial(object.certificate) : undefined;
    return message;
  },
  fromAmino(object: QueryCertificateResponseAmino): QueryCertificateResponse {
    const message = createBaseQueryCertificateResponse();
    if (object.certificate !== undefined && object.certificate !== null) {
      message.certificate = Certificate.fromAmino(object.certificate);
    }
    return message;
  },
  toAmino(message: QueryCertificateResponse): QueryCertificateResponseAmino {
    const obj: any = {};
    obj.certificate = message.certificate ? Certificate.toAmino(message.certificate) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryCertificateResponseAminoMsg): QueryCertificateResponse {
    return QueryCertificateResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryCertificateResponseProtoMsg): QueryCertificateResponse {
    return QueryCertificateResponse.decode(message.value);
  },
  toProto(message: QueryCertificateResponse): Uint8Array {
    return QueryCertificateResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryCertificateResponse): QueryCertificateResponseProtoMsg {
    return {
      typeUrl: "/shentu.cert.v1alpha1.QueryCertificateResponse",
      value: QueryCertificateResponse.encode(message).finish()
    };
  }
};
function createBaseQueryCertificatesRequest(): QueryCertificatesRequest {
  return {
    certifier: "",
    certificateType: "",
    pagination: undefined
  };
}
export const QueryCertificatesRequest = {
  typeUrl: "/shentu.cert.v1alpha1.QueryCertificatesRequest",
  encode(message: QueryCertificatesRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.certifier !== "") {
      writer.uint32(10).string(message.certifier);
    }
    if (message.certificateType !== "") {
      writer.uint32(18).string(message.certificateType);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): QueryCertificatesRequest {
    return {
      certifier: isSet(object.certifier) ? String(object.certifier) : "",
      certificateType: isSet(object.certificateType) ? String(object.certificateType) : "",
      pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined
    };
  },
  fromPartial(object: Partial<QueryCertificatesRequest>): QueryCertificatesRequest {
    const message = createBaseQueryCertificatesRequest();
    message.certifier = object.certifier ?? "";
    message.certificateType = object.certificateType ?? "";
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryCertificatesRequestAmino): QueryCertificatesRequest {
    const message = createBaseQueryCertificatesRequest();
    if (object.certifier !== undefined && object.certifier !== null) {
      message.certifier = object.certifier;
    }
    if (object.certificate_type !== undefined && object.certificate_type !== null) {
      message.certificateType = object.certificate_type;
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryCertificatesRequest): QueryCertificatesRequestAmino {
    const obj: any = {};
    obj.certifier = message.certifier === "" ? undefined : message.certifier;
    obj.certificate_type = message.certificateType === "" ? undefined : message.certificateType;
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryCertificatesRequestAminoMsg): QueryCertificatesRequest {
    return QueryCertificatesRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryCertificatesRequestProtoMsg): QueryCertificatesRequest {
    return QueryCertificatesRequest.decode(message.value);
  },
  toProto(message: QueryCertificatesRequest): Uint8Array {
    return QueryCertificatesRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryCertificatesRequest): QueryCertificatesRequestProtoMsg {
    return {
      typeUrl: "/shentu.cert.v1alpha1.QueryCertificatesRequest",
      value: QueryCertificatesRequest.encode(message).finish()
    };
  }
};
function createBaseQueryCertificatesResponse(): QueryCertificatesResponse {
  return {
    total: BigInt(0),
    certificates: []
  };
}
export const QueryCertificatesResponse = {
  typeUrl: "/shentu.cert.v1alpha1.QueryCertificatesResponse",
  encode(message: QueryCertificatesResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.total !== BigInt(0)) {
      writer.uint32(8).uint64(message.total);
    }
    for (const v of message.certificates) {
      QueryCertificateResponse.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): QueryCertificatesResponse {
    return {
      total: isSet(object.total) ? BigInt(object.total.toString()) : BigInt(0),
      certificates: Array.isArray(object?.certificates) ? object.certificates.map((e: any) => QueryCertificateResponse.fromJSON(e)) : []
    };
  },
  fromPartial(object: Partial<QueryCertificatesResponse>): QueryCertificatesResponse {
    const message = createBaseQueryCertificatesResponse();
    message.total = object.total !== undefined && object.total !== null ? BigInt(object.total.toString()) : BigInt(0);
    message.certificates = object.certificates?.map(e => QueryCertificateResponse.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: QueryCertificatesResponseAmino): QueryCertificatesResponse {
    const message = createBaseQueryCertificatesResponse();
    if (object.total !== undefined && object.total !== null) {
      message.total = BigInt(object.total);
    }
    message.certificates = object.certificates?.map(e => QueryCertificateResponse.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: QueryCertificatesResponse): QueryCertificatesResponseAmino {
    const obj: any = {};
    obj.total = message.total !== BigInt(0) ? message.total.toString() : undefined;
    if (message.certificates) {
      obj.certificates = message.certificates.map(e => e ? QueryCertificateResponse.toAmino(e) : undefined);
    } else {
      obj.certificates = message.certificates;
    }
    return obj;
  },
  fromAminoMsg(object: QueryCertificatesResponseAminoMsg): QueryCertificatesResponse {
    return QueryCertificatesResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryCertificatesResponseProtoMsg): QueryCertificatesResponse {
    return QueryCertificatesResponse.decode(message.value);
  },
  toProto(message: QueryCertificatesResponse): Uint8Array {
    return QueryCertificatesResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryCertificatesResponse): QueryCertificatesResponseProtoMsg {
    return {
      typeUrl: "/shentu.cert.v1alpha1.QueryCertificatesResponse",
      value: QueryCertificatesResponse.encode(message).finish()
    };
  }
};
function createBaseConversionToShentuAddrRequest(): ConversionToShentuAddrRequest {
  return {
    address: ""
  };
}
export const ConversionToShentuAddrRequest = {
  typeUrl: "/shentu.cert.v1alpha1.ConversionToShentuAddrRequest",
  encode(message: ConversionToShentuAddrRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    return writer;
  },
  fromJSON(object: any): ConversionToShentuAddrRequest {
    return {
      address: isSet(object.address) ? String(object.address) : ""
    };
  },
  fromPartial(object: Partial<ConversionToShentuAddrRequest>): ConversionToShentuAddrRequest {
    const message = createBaseConversionToShentuAddrRequest();
    message.address = object.address ?? "";
    return message;
  },
  fromAmino(object: ConversionToShentuAddrRequestAmino): ConversionToShentuAddrRequest {
    const message = createBaseConversionToShentuAddrRequest();
    if (object.address !== undefined && object.address !== null) {
      message.address = object.address;
    }
    return message;
  },
  toAmino(message: ConversionToShentuAddrRequest): ConversionToShentuAddrRequestAmino {
    const obj: any = {};
    obj.address = message.address === "" ? undefined : message.address;
    return obj;
  },
  fromAminoMsg(object: ConversionToShentuAddrRequestAminoMsg): ConversionToShentuAddrRequest {
    return ConversionToShentuAddrRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: ConversionToShentuAddrRequestProtoMsg): ConversionToShentuAddrRequest {
    return ConversionToShentuAddrRequest.decode(message.value);
  },
  toProto(message: ConversionToShentuAddrRequest): Uint8Array {
    return ConversionToShentuAddrRequest.encode(message).finish();
  },
  toProtoMsg(message: ConversionToShentuAddrRequest): ConversionToShentuAddrRequestProtoMsg {
    return {
      typeUrl: "/shentu.cert.v1alpha1.ConversionToShentuAddrRequest",
      value: ConversionToShentuAddrRequest.encode(message).finish()
    };
  }
};
function createBaseConversionToShentuAddrResponse(): ConversionToShentuAddrResponse {
  return {
    address: ""
  };
}
export const ConversionToShentuAddrResponse = {
  typeUrl: "/shentu.cert.v1alpha1.ConversionToShentuAddrResponse",
  encode(message: ConversionToShentuAddrResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    return writer;
  },
  fromJSON(object: any): ConversionToShentuAddrResponse {
    return {
      address: isSet(object.address) ? String(object.address) : ""
    };
  },
  fromPartial(object: Partial<ConversionToShentuAddrResponse>): ConversionToShentuAddrResponse {
    const message = createBaseConversionToShentuAddrResponse();
    message.address = object.address ?? "";
    return message;
  },
  fromAmino(object: ConversionToShentuAddrResponseAmino): ConversionToShentuAddrResponse {
    const message = createBaseConversionToShentuAddrResponse();
    if (object.address !== undefined && object.address !== null) {
      message.address = object.address;
    }
    return message;
  },
  toAmino(message: ConversionToShentuAddrResponse): ConversionToShentuAddrResponseAmino {
    const obj: any = {};
    obj.address = message.address === "" ? undefined : message.address;
    return obj;
  },
  fromAminoMsg(object: ConversionToShentuAddrResponseAminoMsg): ConversionToShentuAddrResponse {
    return ConversionToShentuAddrResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: ConversionToShentuAddrResponseProtoMsg): ConversionToShentuAddrResponse {
    return ConversionToShentuAddrResponse.decode(message.value);
  },
  toProto(message: ConversionToShentuAddrResponse): Uint8Array {
    return ConversionToShentuAddrResponse.encode(message).finish();
  },
  toProtoMsg(message: ConversionToShentuAddrResponse): ConversionToShentuAddrResponseProtoMsg {
    return {
      typeUrl: "/shentu.cert.v1alpha1.ConversionToShentuAddrResponse",
      value: ConversionToShentuAddrResponse.encode(message).finish()
    };
  }
};
export const Cosmos_cryptoPubKey_InterfaceDecoder = (input: BinaryReader | Uint8Array): Any => {
  const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
  const data = Any.decode(reader, reader.uint32());
  switch (data.typeUrl) {
    default:
      return data;
  }
};
export const Cosmos_cryptoPubKey_FromAmino = (content: AnyAmino): Any => {
  return encodePubkey(content);
};
export const Cosmos_cryptoPubKey_ToAmino = (content: Any): Pubkey | null => {
  return decodePubkey(content);
};