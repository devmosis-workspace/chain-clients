import { Timestamp, TimestampSDKType } from "../../../google/protobuf/timestamp";
import { BinaryWriter } from "../../../binary";
import { isSet, fromJsonTimestamp } from "../../../helpers";
export enum ProgramStatus {
  PROGRAM_STATUS_INACTIVE = 0,
  PROGRAM_STATUS_ACTIVE = 1,
  PROGRAM_STATUS_CLOSED = 2,
  UNRECOGNIZED = -1,
}
export const ProgramStatusSDKType = ProgramStatus;
export const ProgramStatusAmino = ProgramStatus;
export function programStatusFromJSON(object: any): ProgramStatus {
  switch (object) {
    case 0:
    case "PROGRAM_STATUS_INACTIVE":
      return ProgramStatus.PROGRAM_STATUS_INACTIVE;
    case 1:
    case "PROGRAM_STATUS_ACTIVE":
      return ProgramStatus.PROGRAM_STATUS_ACTIVE;
    case 2:
    case "PROGRAM_STATUS_CLOSED":
      return ProgramStatus.PROGRAM_STATUS_CLOSED;
    case -1:
    case "UNRECOGNIZED":
    default:
      return ProgramStatus.UNRECOGNIZED;
  }
}
export function programStatusToJSON(object: ProgramStatus): string {
  switch (object) {
    case ProgramStatus.PROGRAM_STATUS_INACTIVE:
      return "PROGRAM_STATUS_INACTIVE";
    case ProgramStatus.PROGRAM_STATUS_ACTIVE:
      return "PROGRAM_STATUS_ACTIVE";
    case ProgramStatus.PROGRAM_STATUS_CLOSED:
      return "PROGRAM_STATUS_CLOSED";
    case ProgramStatus.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}
export enum SeverityLevel {
  SEVERITY_LEVEL_UNSPECIFIED = 0,
  SEVERITY_LEVEL_CRITICAL = 1,
  SEVERITY_LEVEL_HIGH = 2,
  SEVERITY_LEVEL_MEDIUM = 3,
  SEVERITY_LEVEL_LOW = 4,
  SEVERITY_LEVEL_INFORMATIONAL = 5,
  UNRECOGNIZED = -1,
}
export const SeverityLevelSDKType = SeverityLevel;
export const SeverityLevelAmino = SeverityLevel;
export function severityLevelFromJSON(object: any): SeverityLevel {
  switch (object) {
    case 0:
    case "SEVERITY_LEVEL_UNSPECIFIED":
      return SeverityLevel.SEVERITY_LEVEL_UNSPECIFIED;
    case 1:
    case "SEVERITY_LEVEL_CRITICAL":
      return SeverityLevel.SEVERITY_LEVEL_CRITICAL;
    case 2:
    case "SEVERITY_LEVEL_HIGH":
      return SeverityLevel.SEVERITY_LEVEL_HIGH;
    case 3:
    case "SEVERITY_LEVEL_MEDIUM":
      return SeverityLevel.SEVERITY_LEVEL_MEDIUM;
    case 4:
    case "SEVERITY_LEVEL_LOW":
      return SeverityLevel.SEVERITY_LEVEL_LOW;
    case 5:
    case "SEVERITY_LEVEL_INFORMATIONAL":
      return SeverityLevel.SEVERITY_LEVEL_INFORMATIONAL;
    case -1:
    case "UNRECOGNIZED":
    default:
      return SeverityLevel.UNRECOGNIZED;
  }
}
export function severityLevelToJSON(object: SeverityLevel): string {
  switch (object) {
    case SeverityLevel.SEVERITY_LEVEL_UNSPECIFIED:
      return "SEVERITY_LEVEL_UNSPECIFIED";
    case SeverityLevel.SEVERITY_LEVEL_CRITICAL:
      return "SEVERITY_LEVEL_CRITICAL";
    case SeverityLevel.SEVERITY_LEVEL_HIGH:
      return "SEVERITY_LEVEL_HIGH";
    case SeverityLevel.SEVERITY_LEVEL_MEDIUM:
      return "SEVERITY_LEVEL_MEDIUM";
    case SeverityLevel.SEVERITY_LEVEL_LOW:
      return "SEVERITY_LEVEL_LOW";
    case SeverityLevel.SEVERITY_LEVEL_INFORMATIONAL:
      return "SEVERITY_LEVEL_INFORMATIONAL";
    case SeverityLevel.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}
export enum FindingStatus {
  FINDING_STATUS_SUBMITTED = 0,
  FINDING_STATUS_ACTIVE = 1,
  FINDING_STATUS_CONFIRMED = 2,
  FINDING_STATUS_PAID = 3,
  FINDING_STATUS_CLOSED = 4,
  UNRECOGNIZED = -1,
}
export const FindingStatusSDKType = FindingStatus;
export const FindingStatusAmino = FindingStatus;
export function findingStatusFromJSON(object: any): FindingStatus {
  switch (object) {
    case 0:
    case "FINDING_STATUS_SUBMITTED":
      return FindingStatus.FINDING_STATUS_SUBMITTED;
    case 1:
    case "FINDING_STATUS_ACTIVE":
      return FindingStatus.FINDING_STATUS_ACTIVE;
    case 2:
    case "FINDING_STATUS_CONFIRMED":
      return FindingStatus.FINDING_STATUS_CONFIRMED;
    case 3:
    case "FINDING_STATUS_PAID":
      return FindingStatus.FINDING_STATUS_PAID;
    case 4:
    case "FINDING_STATUS_CLOSED":
      return FindingStatus.FINDING_STATUS_CLOSED;
    case -1:
    case "UNRECOGNIZED":
    default:
      return FindingStatus.UNRECOGNIZED;
  }
}
export function findingStatusToJSON(object: FindingStatus): string {
  switch (object) {
    case FindingStatus.FINDING_STATUS_SUBMITTED:
      return "FINDING_STATUS_SUBMITTED";
    case FindingStatus.FINDING_STATUS_ACTIVE:
      return "FINDING_STATUS_ACTIVE";
    case FindingStatus.FINDING_STATUS_CONFIRMED:
      return "FINDING_STATUS_CONFIRMED";
    case FindingStatus.FINDING_STATUS_PAID:
      return "FINDING_STATUS_PAID";
    case FindingStatus.FINDING_STATUS_CLOSED:
      return "FINDING_STATUS_CLOSED";
    case FindingStatus.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}
export interface Program {
  programId: string;
  name: string;
  /** JSON by ProgramDetail */
  detail: string;
  adminAddress: string;
  status: ProgramStatus;
  createTime: Timestamp;
}
export interface ProgramProtoMsg {
  typeUrl: "/shentu.bounty.v1.Program";
  value: Uint8Array;
}
export interface ProgramAmino {
  program_id?: string;
  name?: string;
  /** JSON by ProgramDetail */
  detail?: string;
  admin_address?: string;
  status?: ProgramStatus;
  create_time?: string;
}
export interface ProgramAminoMsg {
  type: "/shentu.bounty.v1.Program";
  value: ProgramAmino;
}
export interface ProgramSDKType {
  program_id: string;
  name: string;
  detail: string;
  admin_address: string;
  status: ProgramStatus;
  create_time: TimestampSDKType;
}
export interface Finding {
  programId: string;
  findingId: string;
  title: string;
  description: string;
  proofOfConcept: string;
  /** hash(description + proof_of_concept + submitter) */
  findingHash: string;
  submitterAddress: string;
  severityLevel: SeverityLevel;
  status: FindingStatus;
  /** JSON by FindingDetail */
  detail: string;
  paymentHash: string;
  createTime: Timestamp;
}
export interface FindingProtoMsg {
  typeUrl: "/shentu.bounty.v1.Finding";
  value: Uint8Array;
}
export interface FindingAmino {
  program_id?: string;
  finding_id?: string;
  title?: string;
  description?: string;
  proof_of_concept?: string;
  /** hash(description + proof_of_concept + submitter) */
  finding_hash?: string;
  submitter_address?: string;
  severity_level?: SeverityLevel;
  status?: FindingStatus;
  /** JSON by FindingDetail */
  detail?: string;
  payment_hash?: string;
  create_time?: string;
}
export interface FindingAminoMsg {
  type: "/shentu.bounty.v1.Finding";
  value: FindingAmino;
}
export interface FindingSDKType {
  program_id: string;
  finding_id: string;
  title: string;
  description: string;
  proof_of_concept: string;
  finding_hash: string;
  submitter_address: string;
  severity_level: SeverityLevel;
  status: FindingStatus;
  detail: string;
  payment_hash: string;
  create_time: TimestampSDKType;
}
export interface ProgramFingerprint {
  programId: string;
  name: string;
  /** JSON by ProgramDetail */
  detail: string;
  adminAddress: string;
  status: ProgramStatus;
}
export interface ProgramFingerprintProtoMsg {
  typeUrl: "/shentu.bounty.v1.ProgramFingerprint";
  value: Uint8Array;
}
export interface ProgramFingerprintAmino {
  program_id: string;
  name?: string;
  /** JSON by ProgramDetail */
  detail?: string;
  admin_address?: string;
  status?: ProgramStatus;
}
export interface ProgramFingerprintAminoMsg {
  type: "/shentu.bounty.v1.ProgramFingerprint";
  value: ProgramFingerprintAmino;
}
export interface ProgramFingerprintSDKType {
  program_id: string;
  name: string;
  detail: string;
  admin_address: string;
  status: ProgramStatus;
}
export interface FindingFingerprint {
  programId: string;
  findingId: string;
  title: string;
  /** hash(description + proof_of_concept + submitter) */
  findingHash: string;
  severityLevel: SeverityLevel;
  status: FindingStatus;
  /** JSON by FindingDetail */
  detail: string;
  paymentHash: string;
}
export interface FindingFingerprintProtoMsg {
  typeUrl: "/shentu.bounty.v1.FindingFingerprint";
  value: Uint8Array;
}
export interface FindingFingerprintAmino {
  program_id?: string;
  finding_id: string;
  title?: string;
  /** hash(description + proof_of_concept + submitter) */
  finding_hash?: string;
  severity_level?: SeverityLevel;
  status?: FindingStatus;
  /** JSON by FindingDetail */
  detail?: string;
  payment_hash?: string;
}
export interface FindingFingerprintAminoMsg {
  type: "/shentu.bounty.v1.FindingFingerprint";
  value: FindingFingerprintAmino;
}
export interface FindingFingerprintSDKType {
  program_id: string;
  finding_id: string;
  title: string;
  finding_hash: string;
  severity_level: SeverityLevel;
  status: FindingStatus;
  detail: string;
  payment_hash: string;
}
function createBaseProgram(): Program {
  return {
    programId: "",
    name: "",
    detail: "",
    adminAddress: "",
    status: 0,
    createTime: Timestamp.fromPartial({})
  };
}
export const Program = {
  typeUrl: "/shentu.bounty.v1.Program",
  encode(message: Program, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.programId !== "") {
      writer.uint32(10).string(message.programId);
    }
    if (message.name !== "") {
      writer.uint32(18).string(message.name);
    }
    if (message.detail !== "") {
      writer.uint32(26).string(message.detail);
    }
    if (message.adminAddress !== "") {
      writer.uint32(34).string(message.adminAddress);
    }
    if (message.status !== 0) {
      writer.uint32(40).int32(message.status);
    }
    if (message.createTime !== undefined) {
      Timestamp.encode(message.createTime, writer.uint32(50).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): Program {
    return {
      programId: isSet(object.programId) ? String(object.programId) : "",
      name: isSet(object.name) ? String(object.name) : "",
      detail: isSet(object.detail) ? String(object.detail) : "",
      adminAddress: isSet(object.adminAddress) ? String(object.adminAddress) : "",
      status: isSet(object.status) ? programStatusFromJSON(object.status) : -1,
      createTime: isSet(object.createTime) ? fromJsonTimestamp(object.createTime) : undefined
    };
  },
  fromPartial(object: Partial<Program>): Program {
    const message = createBaseProgram();
    message.programId = object.programId ?? "";
    message.name = object.name ?? "";
    message.detail = object.detail ?? "";
    message.adminAddress = object.adminAddress ?? "";
    message.status = object.status ?? 0;
    message.createTime = object.createTime !== undefined && object.createTime !== null ? Timestamp.fromPartial(object.createTime) : undefined;
    return message;
  },
  fromAmino(object: ProgramAmino): Program {
    const message = createBaseProgram();
    if (object.program_id !== undefined && object.program_id !== null) {
      message.programId = object.program_id;
    }
    if (object.name !== undefined && object.name !== null) {
      message.name = object.name;
    }
    if (object.detail !== undefined && object.detail !== null) {
      message.detail = object.detail;
    }
    if (object.admin_address !== undefined && object.admin_address !== null) {
      message.adminAddress = object.admin_address;
    }
    if (object.status !== undefined && object.status !== null) {
      message.status = object.status;
    }
    if (object.create_time !== undefined && object.create_time !== null) {
      message.createTime = Timestamp.fromAmino(object.create_time);
    }
    return message;
  },
  toAmino(message: Program): ProgramAmino {
    const obj: any = {};
    obj.program_id = message.programId === "" ? undefined : message.programId;
    obj.name = message.name === "" ? undefined : message.name;
    obj.detail = message.detail === "" ? undefined : message.detail;
    obj.admin_address = message.adminAddress === "" ? undefined : message.adminAddress;
    obj.status = message.status === 0 ? undefined : message.status;
    obj.create_time = message.createTime ? Timestamp.toAmino(message.createTime) : undefined;
    return obj;
  },
  fromAminoMsg(object: ProgramAminoMsg): Program {
    return Program.fromAmino(object.value);
  },
  fromProtoMsg(message: ProgramProtoMsg): Program {
    return Program.decode(message.value);
  },
  toProto(message: Program): Uint8Array {
    return Program.encode(message).finish();
  },
  toProtoMsg(message: Program): ProgramProtoMsg {
    return {
      typeUrl: "/shentu.bounty.v1.Program",
      value: Program.encode(message).finish()
    };
  }
};
function createBaseFinding(): Finding {
  return {
    programId: "",
    findingId: "",
    title: "",
    description: "",
    proofOfConcept: "",
    findingHash: "",
    submitterAddress: "",
    severityLevel: 0,
    status: 0,
    detail: "",
    paymentHash: "",
    createTime: Timestamp.fromPartial({})
  };
}
export const Finding = {
  typeUrl: "/shentu.bounty.v1.Finding",
  encode(message: Finding, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.programId !== "") {
      writer.uint32(10).string(message.programId);
    }
    if (message.findingId !== "") {
      writer.uint32(18).string(message.findingId);
    }
    if (message.title !== "") {
      writer.uint32(26).string(message.title);
    }
    if (message.description !== "") {
      writer.uint32(34).string(message.description);
    }
    if (message.proofOfConcept !== "") {
      writer.uint32(42).string(message.proofOfConcept);
    }
    if (message.findingHash !== "") {
      writer.uint32(50).string(message.findingHash);
    }
    if (message.submitterAddress !== "") {
      writer.uint32(58).string(message.submitterAddress);
    }
    if (message.severityLevel !== 0) {
      writer.uint32(64).int32(message.severityLevel);
    }
    if (message.status !== 0) {
      writer.uint32(72).int32(message.status);
    }
    if (message.detail !== "") {
      writer.uint32(82).string(message.detail);
    }
    if (message.paymentHash !== "") {
      writer.uint32(90).string(message.paymentHash);
    }
    if (message.createTime !== undefined) {
      Timestamp.encode(message.createTime, writer.uint32(98).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): Finding {
    return {
      programId: isSet(object.programId) ? String(object.programId) : "",
      findingId: isSet(object.findingId) ? String(object.findingId) : "",
      title: isSet(object.title) ? String(object.title) : "",
      description: isSet(object.description) ? String(object.description) : "",
      proofOfConcept: isSet(object.proofOfConcept) ? String(object.proofOfConcept) : "",
      findingHash: isSet(object.findingHash) ? String(object.findingHash) : "",
      submitterAddress: isSet(object.submitterAddress) ? String(object.submitterAddress) : "",
      severityLevel: isSet(object.severityLevel) ? severityLevelFromJSON(object.severityLevel) : -1,
      status: isSet(object.status) ? findingStatusFromJSON(object.status) : -1,
      detail: isSet(object.detail) ? String(object.detail) : "",
      paymentHash: isSet(object.paymentHash) ? String(object.paymentHash) : "",
      createTime: isSet(object.createTime) ? fromJsonTimestamp(object.createTime) : undefined
    };
  },
  fromPartial(object: Partial<Finding>): Finding {
    const message = createBaseFinding();
    message.programId = object.programId ?? "";
    message.findingId = object.findingId ?? "";
    message.title = object.title ?? "";
    message.description = object.description ?? "";
    message.proofOfConcept = object.proofOfConcept ?? "";
    message.findingHash = object.findingHash ?? "";
    message.submitterAddress = object.submitterAddress ?? "";
    message.severityLevel = object.severityLevel ?? 0;
    message.status = object.status ?? 0;
    message.detail = object.detail ?? "";
    message.paymentHash = object.paymentHash ?? "";
    message.createTime = object.createTime !== undefined && object.createTime !== null ? Timestamp.fromPartial(object.createTime) : undefined;
    return message;
  },
  fromAmino(object: FindingAmino): Finding {
    const message = createBaseFinding();
    if (object.program_id !== undefined && object.program_id !== null) {
      message.programId = object.program_id;
    }
    if (object.finding_id !== undefined && object.finding_id !== null) {
      message.findingId = object.finding_id;
    }
    if (object.title !== undefined && object.title !== null) {
      message.title = object.title;
    }
    if (object.description !== undefined && object.description !== null) {
      message.description = object.description;
    }
    if (object.proof_of_concept !== undefined && object.proof_of_concept !== null) {
      message.proofOfConcept = object.proof_of_concept;
    }
    if (object.finding_hash !== undefined && object.finding_hash !== null) {
      message.findingHash = object.finding_hash;
    }
    if (object.submitter_address !== undefined && object.submitter_address !== null) {
      message.submitterAddress = object.submitter_address;
    }
    if (object.severity_level !== undefined && object.severity_level !== null) {
      message.severityLevel = object.severity_level;
    }
    if (object.status !== undefined && object.status !== null) {
      message.status = object.status;
    }
    if (object.detail !== undefined && object.detail !== null) {
      message.detail = object.detail;
    }
    if (object.payment_hash !== undefined && object.payment_hash !== null) {
      message.paymentHash = object.payment_hash;
    }
    if (object.create_time !== undefined && object.create_time !== null) {
      message.createTime = Timestamp.fromAmino(object.create_time);
    }
    return message;
  },
  toAmino(message: Finding): FindingAmino {
    const obj: any = {};
    obj.program_id = message.programId === "" ? undefined : message.programId;
    obj.finding_id = message.findingId === "" ? undefined : message.findingId;
    obj.title = message.title === "" ? undefined : message.title;
    obj.description = message.description === "" ? undefined : message.description;
    obj.proof_of_concept = message.proofOfConcept === "" ? undefined : message.proofOfConcept;
    obj.finding_hash = message.findingHash === "" ? undefined : message.findingHash;
    obj.submitter_address = message.submitterAddress === "" ? undefined : message.submitterAddress;
    obj.severity_level = message.severityLevel === 0 ? undefined : message.severityLevel;
    obj.status = message.status === 0 ? undefined : message.status;
    obj.detail = message.detail === "" ? undefined : message.detail;
    obj.payment_hash = message.paymentHash === "" ? undefined : message.paymentHash;
    obj.create_time = message.createTime ? Timestamp.toAmino(message.createTime) : undefined;
    return obj;
  },
  fromAminoMsg(object: FindingAminoMsg): Finding {
    return Finding.fromAmino(object.value);
  },
  fromProtoMsg(message: FindingProtoMsg): Finding {
    return Finding.decode(message.value);
  },
  toProto(message: Finding): Uint8Array {
    return Finding.encode(message).finish();
  },
  toProtoMsg(message: Finding): FindingProtoMsg {
    return {
      typeUrl: "/shentu.bounty.v1.Finding",
      value: Finding.encode(message).finish()
    };
  }
};
function createBaseProgramFingerprint(): ProgramFingerprint {
  return {
    programId: "",
    name: "",
    detail: "",
    adminAddress: "",
    status: 0
  };
}
export const ProgramFingerprint = {
  typeUrl: "/shentu.bounty.v1.ProgramFingerprint",
  encode(message: ProgramFingerprint, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.programId !== "") {
      writer.uint32(10).string(message.programId);
    }
    if (message.name !== "") {
      writer.uint32(18).string(message.name);
    }
    if (message.detail !== "") {
      writer.uint32(26).string(message.detail);
    }
    if (message.adminAddress !== "") {
      writer.uint32(34).string(message.adminAddress);
    }
    if (message.status !== 0) {
      writer.uint32(40).int32(message.status);
    }
    return writer;
  },
  fromJSON(object: any): ProgramFingerprint {
    return {
      programId: isSet(object.programId) ? String(object.programId) : "",
      name: isSet(object.name) ? String(object.name) : "",
      detail: isSet(object.detail) ? String(object.detail) : "",
      adminAddress: isSet(object.adminAddress) ? String(object.adminAddress) : "",
      status: isSet(object.status) ? programStatusFromJSON(object.status) : -1
    };
  },
  fromPartial(object: Partial<ProgramFingerprint>): ProgramFingerprint {
    const message = createBaseProgramFingerprint();
    message.programId = object.programId ?? "";
    message.name = object.name ?? "";
    message.detail = object.detail ?? "";
    message.adminAddress = object.adminAddress ?? "";
    message.status = object.status ?? 0;
    return message;
  },
  fromAmino(object: ProgramFingerprintAmino): ProgramFingerprint {
    const message = createBaseProgramFingerprint();
    if (object.program_id !== undefined && object.program_id !== null) {
      message.programId = object.program_id;
    }
    if (object.name !== undefined && object.name !== null) {
      message.name = object.name;
    }
    if (object.detail !== undefined && object.detail !== null) {
      message.detail = object.detail;
    }
    if (object.admin_address !== undefined && object.admin_address !== null) {
      message.adminAddress = object.admin_address;
    }
    if (object.status !== undefined && object.status !== null) {
      message.status = object.status;
    }
    return message;
  },
  toAmino(message: ProgramFingerprint): ProgramFingerprintAmino {
    const obj: any = {};
    obj.program_id = message.programId ?? "";
    obj.name = message.name === "" ? undefined : message.name;
    obj.detail = message.detail === "" ? undefined : message.detail;
    obj.admin_address = message.adminAddress === "" ? undefined : message.adminAddress;
    obj.status = message.status === 0 ? undefined : message.status;
    return obj;
  },
  fromAminoMsg(object: ProgramFingerprintAminoMsg): ProgramFingerprint {
    return ProgramFingerprint.fromAmino(object.value);
  },
  fromProtoMsg(message: ProgramFingerprintProtoMsg): ProgramFingerprint {
    return ProgramFingerprint.decode(message.value);
  },
  toProto(message: ProgramFingerprint): Uint8Array {
    return ProgramFingerprint.encode(message).finish();
  },
  toProtoMsg(message: ProgramFingerprint): ProgramFingerprintProtoMsg {
    return {
      typeUrl: "/shentu.bounty.v1.ProgramFingerprint",
      value: ProgramFingerprint.encode(message).finish()
    };
  }
};
function createBaseFindingFingerprint(): FindingFingerprint {
  return {
    programId: "",
    findingId: "",
    title: "",
    findingHash: "",
    severityLevel: 0,
    status: 0,
    detail: "",
    paymentHash: ""
  };
}
export const FindingFingerprint = {
  typeUrl: "/shentu.bounty.v1.FindingFingerprint",
  encode(message: FindingFingerprint, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.programId !== "") {
      writer.uint32(10).string(message.programId);
    }
    if (message.findingId !== "") {
      writer.uint32(18).string(message.findingId);
    }
    if (message.title !== "") {
      writer.uint32(26).string(message.title);
    }
    if (message.findingHash !== "") {
      writer.uint32(34).string(message.findingHash);
    }
    if (message.severityLevel !== 0) {
      writer.uint32(40).int32(message.severityLevel);
    }
    if (message.status !== 0) {
      writer.uint32(48).int32(message.status);
    }
    if (message.detail !== "") {
      writer.uint32(58).string(message.detail);
    }
    if (message.paymentHash !== "") {
      writer.uint32(66).string(message.paymentHash);
    }
    return writer;
  },
  fromJSON(object: any): FindingFingerprint {
    return {
      programId: isSet(object.programId) ? String(object.programId) : "",
      findingId: isSet(object.findingId) ? String(object.findingId) : "",
      title: isSet(object.title) ? String(object.title) : "",
      findingHash: isSet(object.findingHash) ? String(object.findingHash) : "",
      severityLevel: isSet(object.severityLevel) ? severityLevelFromJSON(object.severityLevel) : -1,
      status: isSet(object.status) ? findingStatusFromJSON(object.status) : -1,
      detail: isSet(object.detail) ? String(object.detail) : "",
      paymentHash: isSet(object.paymentHash) ? String(object.paymentHash) : ""
    };
  },
  fromPartial(object: Partial<FindingFingerprint>): FindingFingerprint {
    const message = createBaseFindingFingerprint();
    message.programId = object.programId ?? "";
    message.findingId = object.findingId ?? "";
    message.title = object.title ?? "";
    message.findingHash = object.findingHash ?? "";
    message.severityLevel = object.severityLevel ?? 0;
    message.status = object.status ?? 0;
    message.detail = object.detail ?? "";
    message.paymentHash = object.paymentHash ?? "";
    return message;
  },
  fromAmino(object: FindingFingerprintAmino): FindingFingerprint {
    const message = createBaseFindingFingerprint();
    if (object.program_id !== undefined && object.program_id !== null) {
      message.programId = object.program_id;
    }
    if (object.finding_id !== undefined && object.finding_id !== null) {
      message.findingId = object.finding_id;
    }
    if (object.title !== undefined && object.title !== null) {
      message.title = object.title;
    }
    if (object.finding_hash !== undefined && object.finding_hash !== null) {
      message.findingHash = object.finding_hash;
    }
    if (object.severity_level !== undefined && object.severity_level !== null) {
      message.severityLevel = object.severity_level;
    }
    if (object.status !== undefined && object.status !== null) {
      message.status = object.status;
    }
    if (object.detail !== undefined && object.detail !== null) {
      message.detail = object.detail;
    }
    if (object.payment_hash !== undefined && object.payment_hash !== null) {
      message.paymentHash = object.payment_hash;
    }
    return message;
  },
  toAmino(message: FindingFingerprint): FindingFingerprintAmino {
    const obj: any = {};
    obj.program_id = message.programId === "" ? undefined : message.programId;
    obj.finding_id = message.findingId ?? "";
    obj.title = message.title === "" ? undefined : message.title;
    obj.finding_hash = message.findingHash === "" ? undefined : message.findingHash;
    obj.severity_level = message.severityLevel === 0 ? undefined : message.severityLevel;
    obj.status = message.status === 0 ? undefined : message.status;
    obj.detail = message.detail === "" ? undefined : message.detail;
    obj.payment_hash = message.paymentHash === "" ? undefined : message.paymentHash;
    return obj;
  },
  fromAminoMsg(object: FindingFingerprintAminoMsg): FindingFingerprint {
    return FindingFingerprint.fromAmino(object.value);
  },
  fromProtoMsg(message: FindingFingerprintProtoMsg): FindingFingerprint {
    return FindingFingerprint.decode(message.value);
  },
  toProto(message: FindingFingerprint): Uint8Array {
    return FindingFingerprint.encode(message).finish();
  },
  toProtoMsg(message: FindingFingerprint): FindingFingerprintProtoMsg {
    return {
      typeUrl: "/shentu.bounty.v1.FindingFingerprint",
      value: FindingFingerprint.encode(message).finish()
    };
  }
};