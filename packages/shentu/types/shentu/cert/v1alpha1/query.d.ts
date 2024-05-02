import { Any, AnyProtoMsg, AnyAmino, AnySDKType } from "../../../google/protobuf/any";
import { PageRequest, PageRequestAmino, PageRequestSDKType } from "../../../cosmos/base/query/v1beta1/pagination";
import { Certifier, CertifierAmino, CertifierSDKType, Platform, PlatformAmino, PlatformSDKType, Certificate, CertificateAmino, CertificateSDKType } from "./cert";
import { BinaryReader, BinaryWriter } from "../../../binary";
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
export interface QueryCertifiersRequest {
}
export interface QueryCertifiersRequestProtoMsg {
    typeUrl: "/shentu.cert.v1alpha1.QueryCertifiersRequest";
    value: Uint8Array;
}
export interface QueryCertifiersRequestAmino {
}
export interface QueryCertifiersRequestAminoMsg {
    type: "/shentu.cert.v1alpha1.QueryCertifiersRequest";
    value: QueryCertifiersRequestAmino;
}
export interface QueryCertifiersRequestSDKType {
}
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
export declare const QueryCertifierRequest: {
    typeUrl: string;
    encode(message: QueryCertifierRequest, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryCertifierRequest;
    fromPartial(object: Partial<QueryCertifierRequest>): QueryCertifierRequest;
    fromAmino(object: QueryCertifierRequestAmino): QueryCertifierRequest;
    toAmino(message: QueryCertifierRequest): QueryCertifierRequestAmino;
    fromAminoMsg(object: QueryCertifierRequestAminoMsg): QueryCertifierRequest;
    fromProtoMsg(message: QueryCertifierRequestProtoMsg): QueryCertifierRequest;
    toProto(message: QueryCertifierRequest): Uint8Array;
    toProtoMsg(message: QueryCertifierRequest): QueryCertifierRequestProtoMsg;
};
export declare const QueryCertifierResponse: {
    typeUrl: string;
    encode(message: QueryCertifierResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryCertifierResponse;
    fromPartial(object: Partial<QueryCertifierResponse>): QueryCertifierResponse;
    fromAmino(object: QueryCertifierResponseAmino): QueryCertifierResponse;
    toAmino(message: QueryCertifierResponse): QueryCertifierResponseAmino;
    fromAminoMsg(object: QueryCertifierResponseAminoMsg): QueryCertifierResponse;
    fromProtoMsg(message: QueryCertifierResponseProtoMsg): QueryCertifierResponse;
    toProto(message: QueryCertifierResponse): Uint8Array;
    toProtoMsg(message: QueryCertifierResponse): QueryCertifierResponseProtoMsg;
};
export declare const QueryCertifiersRequest: {
    typeUrl: string;
    encode(_: QueryCertifiersRequest, writer?: BinaryWriter): BinaryWriter;
    fromJSON(_: any): QueryCertifiersRequest;
    fromPartial(_: Partial<QueryCertifiersRequest>): QueryCertifiersRequest;
    fromAmino(_: QueryCertifiersRequestAmino): QueryCertifiersRequest;
    toAmino(_: QueryCertifiersRequest): QueryCertifiersRequestAmino;
    fromAminoMsg(object: QueryCertifiersRequestAminoMsg): QueryCertifiersRequest;
    fromProtoMsg(message: QueryCertifiersRequestProtoMsg): QueryCertifiersRequest;
    toProto(message: QueryCertifiersRequest): Uint8Array;
    toProtoMsg(message: QueryCertifiersRequest): QueryCertifiersRequestProtoMsg;
};
export declare const QueryCertifiersResponse: {
    typeUrl: string;
    encode(message: QueryCertifiersResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryCertifiersResponse;
    fromPartial(object: Partial<QueryCertifiersResponse>): QueryCertifiersResponse;
    fromAmino(object: QueryCertifiersResponseAmino): QueryCertifiersResponse;
    toAmino(message: QueryCertifiersResponse): QueryCertifiersResponseAmino;
    fromAminoMsg(object: QueryCertifiersResponseAminoMsg): QueryCertifiersResponse;
    fromProtoMsg(message: QueryCertifiersResponseProtoMsg): QueryCertifiersResponse;
    toProto(message: QueryCertifiersResponse): Uint8Array;
    toProtoMsg(message: QueryCertifiersResponse): QueryCertifiersResponseProtoMsg;
};
export declare const QueryPlatformRequest: {
    typeUrl: string;
    encode(message: QueryPlatformRequest, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryPlatformRequest;
    fromPartial(object: Partial<QueryPlatformRequest>): QueryPlatformRequest;
    fromAmino(object: QueryPlatformRequestAmino): QueryPlatformRequest;
    toAmino(message: QueryPlatformRequest): QueryPlatformRequestAmino;
    fromAminoMsg(object: QueryPlatformRequestAminoMsg): QueryPlatformRequest;
    fromProtoMsg(message: QueryPlatformRequestProtoMsg): QueryPlatformRequest;
    toProto(message: QueryPlatformRequest): Uint8Array;
    toProtoMsg(message: QueryPlatformRequest): QueryPlatformRequestProtoMsg;
};
export declare const QueryPlatformResponse: {
    typeUrl: string;
    encode(message: QueryPlatformResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryPlatformResponse;
    fromPartial(object: Partial<QueryPlatformResponse>): QueryPlatformResponse;
    fromAmino(object: QueryPlatformResponseAmino): QueryPlatformResponse;
    toAmino(message: QueryPlatformResponse): QueryPlatformResponseAmino;
    fromAminoMsg(object: QueryPlatformResponseAminoMsg): QueryPlatformResponse;
    fromProtoMsg(message: QueryPlatformResponseProtoMsg): QueryPlatformResponse;
    toProto(message: QueryPlatformResponse): Uint8Array;
    toProtoMsg(message: QueryPlatformResponse): QueryPlatformResponseProtoMsg;
};
export declare const QueryCertificateRequest: {
    typeUrl: string;
    encode(message: QueryCertificateRequest, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryCertificateRequest;
    fromPartial(object: Partial<QueryCertificateRequest>): QueryCertificateRequest;
    fromAmino(object: QueryCertificateRequestAmino): QueryCertificateRequest;
    toAmino(message: QueryCertificateRequest): QueryCertificateRequestAmino;
    fromAminoMsg(object: QueryCertificateRequestAminoMsg): QueryCertificateRequest;
    fromProtoMsg(message: QueryCertificateRequestProtoMsg): QueryCertificateRequest;
    toProto(message: QueryCertificateRequest): Uint8Array;
    toProtoMsg(message: QueryCertificateRequest): QueryCertificateRequestProtoMsg;
};
export declare const QueryCertificateResponse: {
    typeUrl: string;
    encode(message: QueryCertificateResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryCertificateResponse;
    fromPartial(object: Partial<QueryCertificateResponse>): QueryCertificateResponse;
    fromAmino(object: QueryCertificateResponseAmino): QueryCertificateResponse;
    toAmino(message: QueryCertificateResponse): QueryCertificateResponseAmino;
    fromAminoMsg(object: QueryCertificateResponseAminoMsg): QueryCertificateResponse;
    fromProtoMsg(message: QueryCertificateResponseProtoMsg): QueryCertificateResponse;
    toProto(message: QueryCertificateResponse): Uint8Array;
    toProtoMsg(message: QueryCertificateResponse): QueryCertificateResponseProtoMsg;
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
export declare const ConversionToShentuAddrRequest: {
    typeUrl: string;
    encode(message: ConversionToShentuAddrRequest, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): ConversionToShentuAddrRequest;
    fromPartial(object: Partial<ConversionToShentuAddrRequest>): ConversionToShentuAddrRequest;
    fromAmino(object: ConversionToShentuAddrRequestAmino): ConversionToShentuAddrRequest;
    toAmino(message: ConversionToShentuAddrRequest): ConversionToShentuAddrRequestAmino;
    fromAminoMsg(object: ConversionToShentuAddrRequestAminoMsg): ConversionToShentuAddrRequest;
    fromProtoMsg(message: ConversionToShentuAddrRequestProtoMsg): ConversionToShentuAddrRequest;
    toProto(message: ConversionToShentuAddrRequest): Uint8Array;
    toProtoMsg(message: ConversionToShentuAddrRequest): ConversionToShentuAddrRequestProtoMsg;
};
export declare const ConversionToShentuAddrResponse: {
    typeUrl: string;
    encode(message: ConversionToShentuAddrResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): ConversionToShentuAddrResponse;
    fromPartial(object: Partial<ConversionToShentuAddrResponse>): ConversionToShentuAddrResponse;
    fromAmino(object: ConversionToShentuAddrResponseAmino): ConversionToShentuAddrResponse;
    toAmino(message: ConversionToShentuAddrResponse): ConversionToShentuAddrResponseAmino;
    fromAminoMsg(object: ConversionToShentuAddrResponseAminoMsg): ConversionToShentuAddrResponse;
    fromProtoMsg(message: ConversionToShentuAddrResponseProtoMsg): ConversionToShentuAddrResponse;
    toProto(message: ConversionToShentuAddrResponse): Uint8Array;
    toProtoMsg(message: ConversionToShentuAddrResponse): ConversionToShentuAddrResponseProtoMsg;
};
export declare const Cosmos_cryptoPubKey_InterfaceDecoder: (input: BinaryReader | Uint8Array) => Any;
export declare const Cosmos_cryptoPubKey_FromAmino: (content: AnyAmino) => Any;
export declare const Cosmos_cryptoPubKey_ToAmino: (content: Any) => Pubkey | null;
