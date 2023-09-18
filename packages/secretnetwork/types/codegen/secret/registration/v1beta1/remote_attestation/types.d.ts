import { BinaryWriter } from "../../../../binary";
export interface QuoteReport {
    id: string;
    timestamp: string;
    version: bigint;
    isvEnclaveQuoteStatus: string;
    platformInfoBlob: string;
    isvEnclaveQuoteBody: string;
    advisoryIds: string[];
}
export interface QuoteReportProtoMsg {
    typeUrl: "/secret.registration.remote_attestation.v1beta1.QuoteReport";
    value: Uint8Array;
}
export interface QuoteReportAmino {
    id: string;
    timestamp: string;
    version: string;
    isv_enclave_quote_status: string;
    platform_info_blob: string;
    isv_enclave_quote_body: string;
    advisory_ids: string[];
}
export interface QuoteReportAminoMsg {
    type: "/secret.registration.remote_attestation.v1beta1.QuoteReport";
    value: QuoteReportAmino;
}
export interface QuoteReportSDKType {
    id: string;
    timestamp: string;
    version: bigint;
    isv_enclave_quote_status: string;
    platform_info_blob: string;
    isv_enclave_quote_body: string;
    advisory_ids: string[];
}
export interface QuoteReportBody {
    mrEnclave: string;
    mrSigner: string;
    reportData: string;
}
export interface QuoteReportBodyProtoMsg {
    typeUrl: "/secret.registration.remote_attestation.v1beta1.QuoteReportBody";
    value: Uint8Array;
}
export interface QuoteReportBodyAmino {
    mr_enclave: string;
    mr_signer: string;
    report_data: string;
}
export interface QuoteReportBodyAminoMsg {
    type: "/secret.registration.remote_attestation.v1beta1.QuoteReportBody";
    value: QuoteReportBodyAmino;
}
export interface QuoteReportBodySDKType {
    mr_enclave: string;
    mr_signer: string;
    report_data: string;
}
export interface QuoteReportData {
    version: bigint;
    signType: bigint;
    reportBody: QuoteReportBody;
}
export interface QuoteReportDataProtoMsg {
    typeUrl: "/secret.registration.remote_attestation.v1beta1.QuoteReportData";
    value: Uint8Array;
}
export interface QuoteReportDataAmino {
    version: string;
    sign_type: string;
    report_body?: QuoteReportBodyAmino;
}
export interface QuoteReportDataAminoMsg {
    type: "/secret.registration.remote_attestation.v1beta1.QuoteReportData";
    value: QuoteReportDataAmino;
}
export interface QuoteReportDataSDKType {
    version: bigint;
    sign_type: bigint;
    report_body: QuoteReportBodySDKType;
}
export interface EndorsedAttestationReport {
    report: Uint8Array;
    signature: Uint8Array;
    signingCert: Uint8Array;
}
export interface EndorsedAttestationReportProtoMsg {
    typeUrl: "/secret.registration.remote_attestation.v1beta1.EndorsedAttestationReport";
    value: Uint8Array;
}
export interface EndorsedAttestationReportAmino {
    report: Uint8Array;
    signature: Uint8Array;
    signing_cert: Uint8Array;
}
export interface EndorsedAttestationReportAminoMsg {
    type: "/secret.registration.remote_attestation.v1beta1.EndorsedAttestationReport";
    value: EndorsedAttestationReportAmino;
}
export interface EndorsedAttestationReportSDKType {
    report: Uint8Array;
    signature: Uint8Array;
    signing_cert: Uint8Array;
}
export interface SGXEC256Signature {
    gx: string;
    gy: string;
}
export interface SGXEC256SignatureProtoMsg {
    typeUrl: "/secret.registration.remote_attestation.v1beta1.SGXEC256Signature";
    value: Uint8Array;
}
export interface SGXEC256SignatureAmino {
    gx: string;
    gy: string;
}
export interface SGXEC256SignatureAminoMsg {
    type: "/secret.registration.remote_attestation.v1beta1.SGXEC256Signature";
    value: SGXEC256SignatureAmino;
}
export interface SGXEC256SignatureSDKType {
    gx: string;
    gy: string;
}
export interface PlatformInfoBlob {
    sgxEpidGroupFlags: number;
    sgxTcbEvaluationFlags: number;
    pseEvaluationFlags: number;
    latestEquivalentTcbPsvn: string;
    latestPseIsvsvn: string;
    latestPsdaSvn: string;
    xeid: number;
    gid: number;
    sgxEc256SignatureT: SGXEC256Signature;
}
export interface PlatformInfoBlobProtoMsg {
    typeUrl: "/secret.registration.remote_attestation.v1beta1.PlatformInfoBlob";
    value: Uint8Array;
}
export interface PlatformInfoBlobAmino {
    sgx_epid_group_flags: number;
    sgx_tcb_evaluation_flags: number;
    pse_evaluation_flags: number;
    latest_equivalent_tcb_psvn: string;
    latest_pse_isvsvn: string;
    latest_psda_svn: string;
    xeid: number;
    gid: number;
    sgx_ec256_signature_t?: SGXEC256SignatureAmino;
}
export interface PlatformInfoBlobAminoMsg {
    type: "/secret.registration.remote_attestation.v1beta1.PlatformInfoBlob";
    value: PlatformInfoBlobAmino;
}
export interface PlatformInfoBlobSDKType {
    sgx_epid_group_flags: number;
    sgx_tcb_evaluation_flags: number;
    pse_evaluation_flags: number;
    latest_equivalent_tcb_psvn: string;
    latest_pse_isvsvn: string;
    latest_psda_svn: string;
    xeid: number;
    gid: number;
    sgx_ec256_signature_t: SGXEC256SignatureSDKType;
}
export declare const QuoteReport: {
    typeUrl: string;
    encode(message: QuoteReport, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QuoteReport;
    fromPartial(object: Partial<QuoteReport>): QuoteReport;
    fromAmino(object: QuoteReportAmino): QuoteReport;
    toAmino(message: QuoteReport): QuoteReportAmino;
    fromAminoMsg(object: QuoteReportAminoMsg): QuoteReport;
    fromProtoMsg(message: QuoteReportProtoMsg): QuoteReport;
    toProto(message: QuoteReport): Uint8Array;
    toProtoMsg(message: QuoteReport): QuoteReportProtoMsg;
};
export declare const QuoteReportBody: {
    typeUrl: string;
    encode(message: QuoteReportBody, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QuoteReportBody;
    fromPartial(object: Partial<QuoteReportBody>): QuoteReportBody;
    fromAmino(object: QuoteReportBodyAmino): QuoteReportBody;
    toAmino(message: QuoteReportBody): QuoteReportBodyAmino;
    fromAminoMsg(object: QuoteReportBodyAminoMsg): QuoteReportBody;
    fromProtoMsg(message: QuoteReportBodyProtoMsg): QuoteReportBody;
    toProto(message: QuoteReportBody): Uint8Array;
    toProtoMsg(message: QuoteReportBody): QuoteReportBodyProtoMsg;
};
export declare const QuoteReportData: {
    typeUrl: string;
    encode(message: QuoteReportData, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QuoteReportData;
    fromPartial(object: Partial<QuoteReportData>): QuoteReportData;
    fromAmino(object: QuoteReportDataAmino): QuoteReportData;
    toAmino(message: QuoteReportData): QuoteReportDataAmino;
    fromAminoMsg(object: QuoteReportDataAminoMsg): QuoteReportData;
    fromProtoMsg(message: QuoteReportDataProtoMsg): QuoteReportData;
    toProto(message: QuoteReportData): Uint8Array;
    toProtoMsg(message: QuoteReportData): QuoteReportDataProtoMsg;
};
export declare const EndorsedAttestationReport: {
    typeUrl: string;
    encode(message: EndorsedAttestationReport, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): EndorsedAttestationReport;
    fromPartial(object: Partial<EndorsedAttestationReport>): EndorsedAttestationReport;
    fromAmino(object: EndorsedAttestationReportAmino): EndorsedAttestationReport;
    toAmino(message: EndorsedAttestationReport): EndorsedAttestationReportAmino;
    fromAminoMsg(object: EndorsedAttestationReportAminoMsg): EndorsedAttestationReport;
    fromProtoMsg(message: EndorsedAttestationReportProtoMsg): EndorsedAttestationReport;
    toProto(message: EndorsedAttestationReport): Uint8Array;
    toProtoMsg(message: EndorsedAttestationReport): EndorsedAttestationReportProtoMsg;
};
export declare const SGXEC256Signature: {
    typeUrl: string;
    encode(message: SGXEC256Signature, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): SGXEC256Signature;
    fromPartial(object: Partial<SGXEC256Signature>): SGXEC256Signature;
    fromAmino(object: SGXEC256SignatureAmino): SGXEC256Signature;
    toAmino(message: SGXEC256Signature): SGXEC256SignatureAmino;
    fromAminoMsg(object: SGXEC256SignatureAminoMsg): SGXEC256Signature;
    fromProtoMsg(message: SGXEC256SignatureProtoMsg): SGXEC256Signature;
    toProto(message: SGXEC256Signature): Uint8Array;
    toProtoMsg(message: SGXEC256Signature): SGXEC256SignatureProtoMsg;
};
export declare const PlatformInfoBlob: {
    typeUrl: string;
    encode(message: PlatformInfoBlob, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): PlatformInfoBlob;
    fromPartial(object: Partial<PlatformInfoBlob>): PlatformInfoBlob;
    fromAmino(object: PlatformInfoBlobAmino): PlatformInfoBlob;
    toAmino(message: PlatformInfoBlob): PlatformInfoBlobAmino;
    fromAminoMsg(object: PlatformInfoBlobAminoMsg): PlatformInfoBlob;
    fromProtoMsg(message: PlatformInfoBlobProtoMsg): PlatformInfoBlob;
    toProto(message: PlatformInfoBlob): Uint8Array;
    toProtoMsg(message: PlatformInfoBlob): PlatformInfoBlobProtoMsg;
};
