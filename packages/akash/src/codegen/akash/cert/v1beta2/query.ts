import { CertificateFilter, CertificateFilterSDKType, Certificate, CertificateSDKType } from "./cert";
import { PageRequest, PageRequestSDKType, PageResponse, PageResponseSDKType } from "../../../cosmos/base/query/v1beta1/pagination";
import * as _m0 from "protobufjs/minimal";
import { isSet } from "../../../helpers";
/** CertificateResponse contains a single X509 certificate and its serial number */
export interface CertificateResponse {
  certificate?: Certificate;
  serial: string;
}
/** CertificateResponse contains a single X509 certificate and its serial number */
export interface CertificateResponseSDKType {
  certificate?: CertificateSDKType;
  serial: string;
}
/** QueryDeploymentsRequest is request type for the Query/Deployments RPC method */
export interface QueryCertificatesRequest {
  filter?: CertificateFilter;
  pagination?: PageRequest;
}
/** QueryDeploymentsRequest is request type for the Query/Deployments RPC method */
export interface QueryCertificatesRequestSDKType {
  filter?: CertificateFilterSDKType;
  pagination?: PageRequestSDKType;
}
/** QueryCertificatesResponse is response type for the Query/Certificates RPC method */
export interface QueryCertificatesResponse {
  certificates: CertificateResponse[];
  pagination?: PageResponse;
}
/** QueryCertificatesResponse is response type for the Query/Certificates RPC method */
export interface QueryCertificatesResponseSDKType {
  certificates: CertificateResponseSDKType[];
  pagination?: PageResponseSDKType;
}
function createBaseCertificateResponse(): CertificateResponse {
  return {
    certificate: undefined,
    serial: ""
  };
}
export const CertificateResponse = {
  encode(message: CertificateResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.certificate !== undefined) {
      Certificate.encode(message.certificate, writer.uint32(10).fork()).ldelim();
    }
    if (message.serial !== "") {
      writer.uint32(18).string(message.serial);
    }
    return writer;
  },
  fromJSON(object: any): CertificateResponse {
    return {
      certificate: isSet(object.certificate) ? Certificate.fromJSON(object.certificate) : undefined,
      serial: isSet(object.serial) ? String(object.serial) : ""
    };
  },
  fromPartial(object: Partial<CertificateResponse>): CertificateResponse {
    const message = createBaseCertificateResponse();
    message.certificate = object.certificate !== undefined && object.certificate !== null ? Certificate.fromPartial(object.certificate) : undefined;
    message.serial = object.serial ?? "";
    return message;
  }
};
function createBaseQueryCertificatesRequest(): QueryCertificatesRequest {
  return {
    filter: undefined,
    pagination: undefined
  };
}
export const QueryCertificatesRequest = {
  encode(message: QueryCertificatesRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.filter !== undefined) {
      CertificateFilter.encode(message.filter, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): QueryCertificatesRequest {
    return {
      filter: isSet(object.filter) ? CertificateFilter.fromJSON(object.filter) : undefined,
      pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined
    };
  },
  fromPartial(object: Partial<QueryCertificatesRequest>): QueryCertificatesRequest {
    const message = createBaseQueryCertificatesRequest();
    message.filter = object.filter !== undefined && object.filter !== null ? CertificateFilter.fromPartial(object.filter) : undefined;
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  }
};
function createBaseQueryCertificatesResponse(): QueryCertificatesResponse {
  return {
    certificates: [],
    pagination: undefined
  };
}
export const QueryCertificatesResponse = {
  encode(message: QueryCertificatesResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.certificates) {
      CertificateResponse.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): QueryCertificatesResponse {
    return {
      certificates: Array.isArray(object?.certificates) ? object.certificates.map((e: any) => CertificateResponse.fromJSON(e)) : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined
    };
  },
  fromPartial(object: Partial<QueryCertificatesResponse>): QueryCertificatesResponse {
    const message = createBaseQueryCertificatesResponse();
    message.certificates = object.certificates?.map(e => CertificateResponse.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  }
};