import { Long } from "../../../../helpers";
import * as _m0 from "protobufjs/minimal";
export interface QuoteReport {
    id: string;
    timestamp: string;
    version: Long;
    isvEnclaveQuoteStatus: string;
    platformInfoBlob: string;
    isvEnclaveQuoteBody: string;
    advisoryIds: string[];
}
export interface QuoteReportSDKType {
    id: string;
    timestamp: string;
    version: Long;
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
export interface QuoteReportBodySDKType {
    mr_enclave: string;
    mr_signer: string;
    report_data: string;
}
export interface QuoteReportData {
    version: Long;
    signType: Long;
    reportBody?: QuoteReportBody;
}
export interface QuoteReportDataSDKType {
    version: Long;
    sign_type: Long;
    report_body?: QuoteReportBodySDKType;
}
export interface EndorsedAttestationReport {
    report: Uint8Array;
    signature: Uint8Array;
    signingCert: Uint8Array;
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
    sgxEc256SignatureT?: SGXEC256Signature;
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
    sgx_ec256_signature_t?: SGXEC256SignatureSDKType;
}
export declare const QuoteReport: {
    encode(message: QuoteReport, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): QuoteReport;
    fromPartial(object: Partial<QuoteReport>): QuoteReport;
};
export declare const QuoteReportBody: {
    encode(message: QuoteReportBody, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): QuoteReportBody;
    fromPartial(object: Partial<QuoteReportBody>): QuoteReportBody;
};
export declare const QuoteReportData: {
    encode(message: QuoteReportData, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): QuoteReportData;
    fromPartial(object: Partial<QuoteReportData>): QuoteReportData;
};
export declare const EndorsedAttestationReport: {
    encode(message: EndorsedAttestationReport, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): EndorsedAttestationReport;
    fromPartial(object: Partial<EndorsedAttestationReport>): EndorsedAttestationReport;
};
export declare const SGXEC256Signature: {
    encode(message: SGXEC256Signature, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): SGXEC256Signature;
    fromPartial(object: Partial<SGXEC256Signature>): SGXEC256Signature;
};
export declare const PlatformInfoBlob: {
    encode(message: PlatformInfoBlob, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): PlatformInfoBlob;
    fromPartial(object: Partial<PlatformInfoBlob>): PlatformInfoBlob;
};
