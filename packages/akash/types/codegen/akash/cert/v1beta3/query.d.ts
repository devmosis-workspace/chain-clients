import { CertificateFilter, CertificateFilterAmino, CertificateFilterSDKType, Certificate, CertificateAmino, CertificateSDKType } from "./cert";
import { PageRequest, PageRequestAmino, PageRequestSDKType, PageResponse, PageResponseAmino, PageResponseSDKType } from "../../../cosmos/base/query/v1beta1/pagination";
import { BinaryWriter } from "../../../binary";
/** CertificateResponse contains a single X509 certificate and its serial number */
export interface CertificateResponse {
    certificate: Certificate;
    serial: string;
}
export interface CertificateResponseProtoMsg {
    typeUrl: "/akash.cert.v1beta3.CertificateResponse";
    value: Uint8Array;
}
/** CertificateResponse contains a single X509 certificate and its serial number */
export interface CertificateResponseAmino {
    certificate?: CertificateAmino;
    serial?: string;
}
export interface CertificateResponseAminoMsg {
    type: "/akash.cert.v1beta3.CertificateResponse";
    value: CertificateResponseAmino;
}
/** CertificateResponse contains a single X509 certificate and its serial number */
export interface CertificateResponseSDKType {
    certificate: CertificateSDKType;
    serial: string;
}
/** QueryDeploymentsRequest is request type for the Query/Deployments RPC method */
export interface QueryCertificatesRequest {
    filter: CertificateFilter;
    pagination?: PageRequest;
}
export interface QueryCertificatesRequestProtoMsg {
    typeUrl: "/akash.cert.v1beta3.QueryCertificatesRequest";
    value: Uint8Array;
}
/** QueryDeploymentsRequest is request type for the Query/Deployments RPC method */
export interface QueryCertificatesRequestAmino {
    filter?: CertificateFilterAmino;
    pagination?: PageRequestAmino;
}
export interface QueryCertificatesRequestAminoMsg {
    type: "/akash.cert.v1beta3.QueryCertificatesRequest";
    value: QueryCertificatesRequestAmino;
}
/** QueryDeploymentsRequest is request type for the Query/Deployments RPC method */
export interface QueryCertificatesRequestSDKType {
    filter: CertificateFilterSDKType;
    pagination?: PageRequestSDKType;
}
/** QueryCertificatesResponse is response type for the Query/Certificates RPC method */
export interface QueryCertificatesResponse {
    certificates: CertificateResponse[];
    pagination?: PageResponse;
}
export interface QueryCertificatesResponseProtoMsg {
    typeUrl: "/akash.cert.v1beta3.QueryCertificatesResponse";
    value: Uint8Array;
}
/** QueryCertificatesResponse is response type for the Query/Certificates RPC method */
export interface QueryCertificatesResponseAmino {
    certificates?: CertificateResponseAmino[];
    pagination?: PageResponseAmino;
}
export interface QueryCertificatesResponseAminoMsg {
    type: "/akash.cert.v1beta3.QueryCertificatesResponse";
    value: QueryCertificatesResponseAmino;
}
/** QueryCertificatesResponse is response type for the Query/Certificates RPC method */
export interface QueryCertificatesResponseSDKType {
    certificates: CertificateResponseSDKType[];
    pagination?: PageResponseSDKType;
}
export declare const CertificateResponse: {
    typeUrl: string;
    encode(message: CertificateResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): CertificateResponse;
    fromPartial(object: Partial<CertificateResponse>): CertificateResponse;
    fromAmino(object: CertificateResponseAmino): CertificateResponse;
    toAmino(message: CertificateResponse): CertificateResponseAmino;
    fromAminoMsg(object: CertificateResponseAminoMsg): CertificateResponse;
    fromProtoMsg(message: CertificateResponseProtoMsg): CertificateResponse;
    toProto(message: CertificateResponse): Uint8Array;
    toProtoMsg(message: CertificateResponse): CertificateResponseProtoMsg;
};
export declare const QueryCertificatesRequest: {
    typeUrl: string;
    encode(message: QueryCertificatesRequest, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryCertificatesRequest;
    fromPartial(object: Partial<QueryCertificatesRequest>): QueryCertificatesRequest;
    fromAmino(object: QueryCertificatesRequestAmino): QueryCertificatesRequest;
    toAmino(message: QueryCertificatesRequest): QueryCertificatesRequestAmino;
    fromAminoMsg(object: QueryCertificatesRequestAminoMsg): QueryCertificatesRequest;
    fromProtoMsg(message: QueryCertificatesRequestProtoMsg): QueryCertificatesRequest;
    toProto(message: QueryCertificatesRequest): Uint8Array;
    toProtoMsg(message: QueryCertificatesRequest): QueryCertificatesRequestProtoMsg;
};
export declare const QueryCertificatesResponse: {
    typeUrl: string;
    encode(message: QueryCertificatesResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryCertificatesResponse;
    fromPartial(object: Partial<QueryCertificatesResponse>): QueryCertificatesResponse;
    fromAmino(object: QueryCertificatesResponseAmino): QueryCertificatesResponse;
    toAmino(message: QueryCertificatesResponse): QueryCertificatesResponseAmino;
    fromAminoMsg(object: QueryCertificatesResponseAminoMsg): QueryCertificatesResponse;
    fromProtoMsg(message: QueryCertificatesResponseProtoMsg): QueryCertificatesResponse;
    toProto(message: QueryCertificatesResponse): Uint8Array;
    toProtoMsg(message: QueryCertificatesResponse): QueryCertificatesResponseProtoMsg;
};
