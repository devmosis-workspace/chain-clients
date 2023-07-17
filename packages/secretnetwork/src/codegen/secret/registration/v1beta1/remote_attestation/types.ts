import { Long, isSet, bytesFromBase64 } from "../../../../helpers";
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
function createBaseQuoteReport(): QuoteReport {
  return {
    id: "",
    timestamp: "",
    version: Long.UZERO,
    isvEnclaveQuoteStatus: "",
    platformInfoBlob: "",
    isvEnclaveQuoteBody: "",
    advisoryIds: []
  };
}
export const QuoteReport = {
  encode(message: QuoteReport, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    if (message.timestamp !== "") {
      writer.uint32(18).string(message.timestamp);
    }
    if (!message.version.isZero()) {
      writer.uint32(24).uint64(message.version);
    }
    if (message.isvEnclaveQuoteStatus !== "") {
      writer.uint32(34).string(message.isvEnclaveQuoteStatus);
    }
    if (message.platformInfoBlob !== "") {
      writer.uint32(42).string(message.platformInfoBlob);
    }
    if (message.isvEnclaveQuoteBody !== "") {
      writer.uint32(50).string(message.isvEnclaveQuoteBody);
    }
    for (const v of message.advisoryIds) {
      writer.uint32(58).string(v!);
    }
    return writer;
  },
  fromJSON(object: any): QuoteReport {
    return {
      id: isSet(object.id) ? String(object.id) : "",
      timestamp: isSet(object.timestamp) ? String(object.timestamp) : "",
      version: isSet(object.version) ? Long.fromValue(object.version) : Long.UZERO,
      isvEnclaveQuoteStatus: isSet(object.isvEnclaveQuoteStatus) ? String(object.isvEnclaveQuoteStatus) : "",
      platformInfoBlob: isSet(object.platformInfoBlob) ? String(object.platformInfoBlob) : "",
      isvEnclaveQuoteBody: isSet(object.isvEnclaveQuoteBody) ? String(object.isvEnclaveQuoteBody) : "",
      advisoryIds: Array.isArray(object?.advisoryIds) ? object.advisoryIds.map((e: any) => String(e)) : []
    };
  },
  fromPartial(object: Partial<QuoteReport>): QuoteReport {
    const message = createBaseQuoteReport();
    message.id = object.id ?? "";
    message.timestamp = object.timestamp ?? "";
    message.version = object.version !== undefined && object.version !== null ? Long.fromValue(object.version) : Long.UZERO;
    message.isvEnclaveQuoteStatus = object.isvEnclaveQuoteStatus ?? "";
    message.platformInfoBlob = object.platformInfoBlob ?? "";
    message.isvEnclaveQuoteBody = object.isvEnclaveQuoteBody ?? "";
    message.advisoryIds = object.advisoryIds?.map(e => e) || [];
    return message;
  }
};
function createBaseQuoteReportBody(): QuoteReportBody {
  return {
    mrEnclave: "",
    mrSigner: "",
    reportData: ""
  };
}
export const QuoteReportBody = {
  encode(message: QuoteReportBody, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.mrEnclave !== "") {
      writer.uint32(10).string(message.mrEnclave);
    }
    if (message.mrSigner !== "") {
      writer.uint32(18).string(message.mrSigner);
    }
    if (message.reportData !== "") {
      writer.uint32(26).string(message.reportData);
    }
    return writer;
  },
  fromJSON(object: any): QuoteReportBody {
    return {
      mrEnclave: isSet(object.mrEnclave) ? String(object.mrEnclave) : "",
      mrSigner: isSet(object.mrSigner) ? String(object.mrSigner) : "",
      reportData: isSet(object.reportData) ? String(object.reportData) : ""
    };
  },
  fromPartial(object: Partial<QuoteReportBody>): QuoteReportBody {
    const message = createBaseQuoteReportBody();
    message.mrEnclave = object.mrEnclave ?? "";
    message.mrSigner = object.mrSigner ?? "";
    message.reportData = object.reportData ?? "";
    return message;
  }
};
function createBaseQuoteReportData(): QuoteReportData {
  return {
    version: Long.UZERO,
    signType: Long.UZERO,
    reportBody: undefined
  };
}
export const QuoteReportData = {
  encode(message: QuoteReportData, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.version.isZero()) {
      writer.uint32(8).uint64(message.version);
    }
    if (!message.signType.isZero()) {
      writer.uint32(16).uint64(message.signType);
    }
    if (message.reportBody !== undefined) {
      QuoteReportBody.encode(message.reportBody, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): QuoteReportData {
    return {
      version: isSet(object.version) ? Long.fromValue(object.version) : Long.UZERO,
      signType: isSet(object.signType) ? Long.fromValue(object.signType) : Long.UZERO,
      reportBody: isSet(object.reportBody) ? QuoteReportBody.fromJSON(object.reportBody) : undefined
    };
  },
  fromPartial(object: Partial<QuoteReportData>): QuoteReportData {
    const message = createBaseQuoteReportData();
    message.version = object.version !== undefined && object.version !== null ? Long.fromValue(object.version) : Long.UZERO;
    message.signType = object.signType !== undefined && object.signType !== null ? Long.fromValue(object.signType) : Long.UZERO;
    message.reportBody = object.reportBody !== undefined && object.reportBody !== null ? QuoteReportBody.fromPartial(object.reportBody) : undefined;
    return message;
  }
};
function createBaseEndorsedAttestationReport(): EndorsedAttestationReport {
  return {
    report: new Uint8Array(),
    signature: new Uint8Array(),
    signingCert: new Uint8Array()
  };
}
export const EndorsedAttestationReport = {
  encode(message: EndorsedAttestationReport, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.report.length !== 0) {
      writer.uint32(10).bytes(message.report);
    }
    if (message.signature.length !== 0) {
      writer.uint32(18).bytes(message.signature);
    }
    if (message.signingCert.length !== 0) {
      writer.uint32(26).bytes(message.signingCert);
    }
    return writer;
  },
  fromJSON(object: any): EndorsedAttestationReport {
    return {
      report: isSet(object.report) ? bytesFromBase64(object.report) : new Uint8Array(),
      signature: isSet(object.signature) ? bytesFromBase64(object.signature) : new Uint8Array(),
      signingCert: isSet(object.signingCert) ? bytesFromBase64(object.signingCert) : new Uint8Array()
    };
  },
  fromPartial(object: Partial<EndorsedAttestationReport>): EndorsedAttestationReport {
    const message = createBaseEndorsedAttestationReport();
    message.report = object.report ?? new Uint8Array();
    message.signature = object.signature ?? new Uint8Array();
    message.signingCert = object.signingCert ?? new Uint8Array();
    return message;
  }
};
function createBaseSGXEC256Signature(): SGXEC256Signature {
  return {
    gx: "",
    gy: ""
  };
}
export const SGXEC256Signature = {
  encode(message: SGXEC256Signature, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.gx !== "") {
      writer.uint32(10).string(message.gx);
    }
    if (message.gy !== "") {
      writer.uint32(18).string(message.gy);
    }
    return writer;
  },
  fromJSON(object: any): SGXEC256Signature {
    return {
      gx: isSet(object.gx) ? String(object.gx) : "",
      gy: isSet(object.gy) ? String(object.gy) : ""
    };
  },
  fromPartial(object: Partial<SGXEC256Signature>): SGXEC256Signature {
    const message = createBaseSGXEC256Signature();
    message.gx = object.gx ?? "";
    message.gy = object.gy ?? "";
    return message;
  }
};
function createBasePlatformInfoBlob(): PlatformInfoBlob {
  return {
    sgxEpidGroupFlags: 0,
    sgxTcbEvaluationFlags: 0,
    pseEvaluationFlags: 0,
    latestEquivalentTcbPsvn: "",
    latestPseIsvsvn: "",
    latestPsdaSvn: "",
    xeid: 0,
    gid: 0,
    sgxEc256SignatureT: undefined
  };
}
export const PlatformInfoBlob = {
  encode(message: PlatformInfoBlob, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.sgxEpidGroupFlags !== 0) {
      writer.uint32(8).uint32(message.sgxEpidGroupFlags);
    }
    if (message.sgxTcbEvaluationFlags !== 0) {
      writer.uint32(16).uint32(message.sgxTcbEvaluationFlags);
    }
    if (message.pseEvaluationFlags !== 0) {
      writer.uint32(24).uint32(message.pseEvaluationFlags);
    }
    if (message.latestEquivalentTcbPsvn !== "") {
      writer.uint32(34).string(message.latestEquivalentTcbPsvn);
    }
    if (message.latestPseIsvsvn !== "") {
      writer.uint32(42).string(message.latestPseIsvsvn);
    }
    if (message.latestPsdaSvn !== "") {
      writer.uint32(50).string(message.latestPsdaSvn);
    }
    if (message.xeid !== 0) {
      writer.uint32(56).uint32(message.xeid);
    }
    if (message.gid !== 0) {
      writer.uint32(64).uint32(message.gid);
    }
    if (message.sgxEc256SignatureT !== undefined) {
      SGXEC256Signature.encode(message.sgxEc256SignatureT, writer.uint32(74).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): PlatformInfoBlob {
    return {
      sgxEpidGroupFlags: isSet(object.sgxEpidGroupFlags) ? Number(object.sgxEpidGroupFlags) : 0,
      sgxTcbEvaluationFlags: isSet(object.sgxTcbEvaluationFlags) ? Number(object.sgxTcbEvaluationFlags) : 0,
      pseEvaluationFlags: isSet(object.pseEvaluationFlags) ? Number(object.pseEvaluationFlags) : 0,
      latestEquivalentTcbPsvn: isSet(object.latestEquivalentTcbPsvn) ? String(object.latestEquivalentTcbPsvn) : "",
      latestPseIsvsvn: isSet(object.latestPseIsvsvn) ? String(object.latestPseIsvsvn) : "",
      latestPsdaSvn: isSet(object.latestPsdaSvn) ? String(object.latestPsdaSvn) : "",
      xeid: isSet(object.xeid) ? Number(object.xeid) : 0,
      gid: isSet(object.gid) ? Number(object.gid) : 0,
      sgxEc256SignatureT: isSet(object.sgxEc256SignatureT) ? SGXEC256Signature.fromJSON(object.sgxEc256SignatureT) : undefined
    };
  },
  fromPartial(object: Partial<PlatformInfoBlob>): PlatformInfoBlob {
    const message = createBasePlatformInfoBlob();
    message.sgxEpidGroupFlags = object.sgxEpidGroupFlags ?? 0;
    message.sgxTcbEvaluationFlags = object.sgxTcbEvaluationFlags ?? 0;
    message.pseEvaluationFlags = object.pseEvaluationFlags ?? 0;
    message.latestEquivalentTcbPsvn = object.latestEquivalentTcbPsvn ?? "";
    message.latestPseIsvsvn = object.latestPseIsvsvn ?? "";
    message.latestPsdaSvn = object.latestPsdaSvn ?? "";
    message.xeid = object.xeid ?? 0;
    message.gid = object.gid ?? 0;
    message.sgxEc256SignatureT = object.sgxEc256SignatureT !== undefined && object.sgxEc256SignatureT !== null ? SGXEC256Signature.fromPartial(object.sgxEc256SignatureT) : undefined;
    return message;
  }
};