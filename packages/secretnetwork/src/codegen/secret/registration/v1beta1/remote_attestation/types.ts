import { BinaryWriter } from "../../../../binary";
import { isSet, bytesFromBase64 } from "../../../../helpers";
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
function createBaseQuoteReport(): QuoteReport {
  return {
    id: "",
    timestamp: "",
    version: BigInt(0),
    isvEnclaveQuoteStatus: "",
    platformInfoBlob: "",
    isvEnclaveQuoteBody: "",
    advisoryIds: []
  };
}
export const QuoteReport = {
  typeUrl: "/secret.registration.remote_attestation.v1beta1.QuoteReport",
  encode(message: QuoteReport, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    if (message.timestamp !== "") {
      writer.uint32(18).string(message.timestamp);
    }
    if (message.version !== BigInt(0)) {
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
      version: isSet(object.version) ? BigInt(object.version.toString()) : BigInt(0),
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
    message.version = object.version !== undefined && object.version !== null ? BigInt(object.version.toString()) : BigInt(0);
    message.isvEnclaveQuoteStatus = object.isvEnclaveQuoteStatus ?? "";
    message.platformInfoBlob = object.platformInfoBlob ?? "";
    message.isvEnclaveQuoteBody = object.isvEnclaveQuoteBody ?? "";
    message.advisoryIds = object.advisoryIds?.map(e => e) || [];
    return message;
  },
  fromAmino(object: QuoteReportAmino): QuoteReport {
    return {
      id: object.id,
      timestamp: object.timestamp,
      version: BigInt(object.version),
      isvEnclaveQuoteStatus: object.isv_enclave_quote_status,
      platformInfoBlob: object.platform_info_blob,
      isvEnclaveQuoteBody: object.isv_enclave_quote_body,
      advisoryIds: Array.isArray(object?.advisory_ids) ? object.advisory_ids.map((e: any) => e) : []
    };
  },
  toAmino(message: QuoteReport): QuoteReportAmino {
    const obj: any = {};
    obj.id = message.id;
    obj.timestamp = message.timestamp;
    obj.version = message.version ? message.version.toString() : undefined;
    obj.isv_enclave_quote_status = message.isvEnclaveQuoteStatus;
    obj.platform_info_blob = message.platformInfoBlob;
    obj.isv_enclave_quote_body = message.isvEnclaveQuoteBody;
    if (message.advisoryIds) {
      obj.advisory_ids = message.advisoryIds.map(e => e);
    } else {
      obj.advisory_ids = [];
    }
    return obj;
  },
  fromAminoMsg(object: QuoteReportAminoMsg): QuoteReport {
    return QuoteReport.fromAmino(object.value);
  },
  fromProtoMsg(message: QuoteReportProtoMsg): QuoteReport {
    return QuoteReport.decode(message.value);
  },
  toProto(message: QuoteReport): Uint8Array {
    return QuoteReport.encode(message).finish();
  },
  toProtoMsg(message: QuoteReport): QuoteReportProtoMsg {
    return {
      typeUrl: "/secret.registration.remote_attestation.v1beta1.QuoteReport",
      value: QuoteReport.encode(message).finish()
    };
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
  typeUrl: "/secret.registration.remote_attestation.v1beta1.QuoteReportBody",
  encode(message: QuoteReportBody, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
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
  },
  fromAmino(object: QuoteReportBodyAmino): QuoteReportBody {
    return {
      mrEnclave: object.mr_enclave,
      mrSigner: object.mr_signer,
      reportData: object.report_data
    };
  },
  toAmino(message: QuoteReportBody): QuoteReportBodyAmino {
    const obj: any = {};
    obj.mr_enclave = message.mrEnclave;
    obj.mr_signer = message.mrSigner;
    obj.report_data = message.reportData;
    return obj;
  },
  fromAminoMsg(object: QuoteReportBodyAminoMsg): QuoteReportBody {
    return QuoteReportBody.fromAmino(object.value);
  },
  fromProtoMsg(message: QuoteReportBodyProtoMsg): QuoteReportBody {
    return QuoteReportBody.decode(message.value);
  },
  toProto(message: QuoteReportBody): Uint8Array {
    return QuoteReportBody.encode(message).finish();
  },
  toProtoMsg(message: QuoteReportBody): QuoteReportBodyProtoMsg {
    return {
      typeUrl: "/secret.registration.remote_attestation.v1beta1.QuoteReportBody",
      value: QuoteReportBody.encode(message).finish()
    };
  }
};
function createBaseQuoteReportData(): QuoteReportData {
  return {
    version: BigInt(0),
    signType: BigInt(0),
    reportBody: QuoteReportBody.fromPartial({})
  };
}
export const QuoteReportData = {
  typeUrl: "/secret.registration.remote_attestation.v1beta1.QuoteReportData",
  encode(message: QuoteReportData, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.version !== BigInt(0)) {
      writer.uint32(8).uint64(message.version);
    }
    if (message.signType !== BigInt(0)) {
      writer.uint32(16).uint64(message.signType);
    }
    if (message.reportBody !== undefined) {
      QuoteReportBody.encode(message.reportBody, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): QuoteReportData {
    return {
      version: isSet(object.version) ? BigInt(object.version.toString()) : BigInt(0),
      signType: isSet(object.signType) ? BigInt(object.signType.toString()) : BigInt(0),
      reportBody: isSet(object.reportBody) ? QuoteReportBody.fromJSON(object.reportBody) : undefined
    };
  },
  fromPartial(object: Partial<QuoteReportData>): QuoteReportData {
    const message = createBaseQuoteReportData();
    message.version = object.version !== undefined && object.version !== null ? BigInt(object.version.toString()) : BigInt(0);
    message.signType = object.signType !== undefined && object.signType !== null ? BigInt(object.signType.toString()) : BigInt(0);
    message.reportBody = object.reportBody !== undefined && object.reportBody !== null ? QuoteReportBody.fromPartial(object.reportBody) : undefined;
    return message;
  },
  fromAmino(object: QuoteReportDataAmino): QuoteReportData {
    return {
      version: BigInt(object.version),
      signType: BigInt(object.sign_type),
      reportBody: object?.report_body ? QuoteReportBody.fromAmino(object.report_body) : undefined
    };
  },
  toAmino(message: QuoteReportData): QuoteReportDataAmino {
    const obj: any = {};
    obj.version = message.version ? message.version.toString() : undefined;
    obj.sign_type = message.signType ? message.signType.toString() : undefined;
    obj.report_body = message.reportBody ? QuoteReportBody.toAmino(message.reportBody) : undefined;
    return obj;
  },
  fromAminoMsg(object: QuoteReportDataAminoMsg): QuoteReportData {
    return QuoteReportData.fromAmino(object.value);
  },
  fromProtoMsg(message: QuoteReportDataProtoMsg): QuoteReportData {
    return QuoteReportData.decode(message.value);
  },
  toProto(message: QuoteReportData): Uint8Array {
    return QuoteReportData.encode(message).finish();
  },
  toProtoMsg(message: QuoteReportData): QuoteReportDataProtoMsg {
    return {
      typeUrl: "/secret.registration.remote_attestation.v1beta1.QuoteReportData",
      value: QuoteReportData.encode(message).finish()
    };
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
  typeUrl: "/secret.registration.remote_attestation.v1beta1.EndorsedAttestationReport",
  encode(message: EndorsedAttestationReport, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
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
  },
  fromAmino(object: EndorsedAttestationReportAmino): EndorsedAttestationReport {
    return {
      report: object.report,
      signature: object.signature,
      signingCert: object.signing_cert
    };
  },
  toAmino(message: EndorsedAttestationReport): EndorsedAttestationReportAmino {
    const obj: any = {};
    obj.report = message.report;
    obj.signature = message.signature;
    obj.signing_cert = message.signingCert;
    return obj;
  },
  fromAminoMsg(object: EndorsedAttestationReportAminoMsg): EndorsedAttestationReport {
    return EndorsedAttestationReport.fromAmino(object.value);
  },
  fromProtoMsg(message: EndorsedAttestationReportProtoMsg): EndorsedAttestationReport {
    return EndorsedAttestationReport.decode(message.value);
  },
  toProto(message: EndorsedAttestationReport): Uint8Array {
    return EndorsedAttestationReport.encode(message).finish();
  },
  toProtoMsg(message: EndorsedAttestationReport): EndorsedAttestationReportProtoMsg {
    return {
      typeUrl: "/secret.registration.remote_attestation.v1beta1.EndorsedAttestationReport",
      value: EndorsedAttestationReport.encode(message).finish()
    };
  }
};
function createBaseSGXEC256Signature(): SGXEC256Signature {
  return {
    gx: "",
    gy: ""
  };
}
export const SGXEC256Signature = {
  typeUrl: "/secret.registration.remote_attestation.v1beta1.SGXEC256Signature",
  encode(message: SGXEC256Signature, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
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
  },
  fromAmino(object: SGXEC256SignatureAmino): SGXEC256Signature {
    return {
      gx: object.gx,
      gy: object.gy
    };
  },
  toAmino(message: SGXEC256Signature): SGXEC256SignatureAmino {
    const obj: any = {};
    obj.gx = message.gx;
    obj.gy = message.gy;
    return obj;
  },
  fromAminoMsg(object: SGXEC256SignatureAminoMsg): SGXEC256Signature {
    return SGXEC256Signature.fromAmino(object.value);
  },
  fromProtoMsg(message: SGXEC256SignatureProtoMsg): SGXEC256Signature {
    return SGXEC256Signature.decode(message.value);
  },
  toProto(message: SGXEC256Signature): Uint8Array {
    return SGXEC256Signature.encode(message).finish();
  },
  toProtoMsg(message: SGXEC256Signature): SGXEC256SignatureProtoMsg {
    return {
      typeUrl: "/secret.registration.remote_attestation.v1beta1.SGXEC256Signature",
      value: SGXEC256Signature.encode(message).finish()
    };
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
    sgxEc256SignatureT: SGXEC256Signature.fromPartial({})
  };
}
export const PlatformInfoBlob = {
  typeUrl: "/secret.registration.remote_attestation.v1beta1.PlatformInfoBlob",
  encode(message: PlatformInfoBlob, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
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
  },
  fromAmino(object: PlatformInfoBlobAmino): PlatformInfoBlob {
    return {
      sgxEpidGroupFlags: object.sgx_epid_group_flags,
      sgxTcbEvaluationFlags: object.sgx_tcb_evaluation_flags,
      pseEvaluationFlags: object.pse_evaluation_flags,
      latestEquivalentTcbPsvn: object.latest_equivalent_tcb_psvn,
      latestPseIsvsvn: object.latest_pse_isvsvn,
      latestPsdaSvn: object.latest_psda_svn,
      xeid: object.xeid,
      gid: object.gid,
      sgxEc256SignatureT: object?.sgx_ec256_signature_t ? SGXEC256Signature.fromAmino(object.sgx_ec256_signature_t) : undefined
    };
  },
  toAmino(message: PlatformInfoBlob): PlatformInfoBlobAmino {
    const obj: any = {};
    obj.sgx_epid_group_flags = message.sgxEpidGroupFlags;
    obj.sgx_tcb_evaluation_flags = message.sgxTcbEvaluationFlags;
    obj.pse_evaluation_flags = message.pseEvaluationFlags;
    obj.latest_equivalent_tcb_psvn = message.latestEquivalentTcbPsvn;
    obj.latest_pse_isvsvn = message.latestPseIsvsvn;
    obj.latest_psda_svn = message.latestPsdaSvn;
    obj.xeid = message.xeid;
    obj.gid = message.gid;
    obj.sgx_ec256_signature_t = message.sgxEc256SignatureT ? SGXEC256Signature.toAmino(message.sgxEc256SignatureT) : undefined;
    return obj;
  },
  fromAminoMsg(object: PlatformInfoBlobAminoMsg): PlatformInfoBlob {
    return PlatformInfoBlob.fromAmino(object.value);
  },
  fromProtoMsg(message: PlatformInfoBlobProtoMsg): PlatformInfoBlob {
    return PlatformInfoBlob.decode(message.value);
  },
  toProto(message: PlatformInfoBlob): Uint8Array {
    return PlatformInfoBlob.encode(message).finish();
  },
  toProtoMsg(message: PlatformInfoBlob): PlatformInfoBlobProtoMsg {
    return {
      typeUrl: "/secret.registration.remote_attestation.v1beta1.PlatformInfoBlob",
      value: PlatformInfoBlob.encode(message).finish()
    };
  }
};