import { Timestamp, TimestampSDKType } from "../../../google/protobuf/timestamp";
import { BinaryWriter } from "../../../binary";
export declare enum ProgramStatus {
    PROGRAM_STATUS_INACTIVE = 0,
    PROGRAM_STATUS_ACTIVE = 1,
    PROGRAM_STATUS_CLOSED = 2,
    UNRECOGNIZED = -1
}
export declare const ProgramStatusSDKType: typeof ProgramStatus;
export declare const ProgramStatusAmino: typeof ProgramStatus;
export declare function programStatusFromJSON(object: any): ProgramStatus;
export declare function programStatusToJSON(object: ProgramStatus): string;
export declare enum SeverityLevel {
    SEVERITY_LEVEL_UNSPECIFIED = 0,
    SEVERITY_LEVEL_CRITICAL = 1,
    SEVERITY_LEVEL_HIGH = 2,
    SEVERITY_LEVEL_MEDIUM = 3,
    SEVERITY_LEVEL_LOW = 4,
    SEVERITY_LEVEL_INFORMATIONAL = 5,
    UNRECOGNIZED = -1
}
export declare const SeverityLevelSDKType: typeof SeverityLevel;
export declare const SeverityLevelAmino: typeof SeverityLevel;
export declare function severityLevelFromJSON(object: any): SeverityLevel;
export declare function severityLevelToJSON(object: SeverityLevel): string;
export declare enum FindingStatus {
    FINDING_STATUS_SUBMITTED = 0,
    FINDING_STATUS_ACTIVE = 1,
    FINDING_STATUS_CONFIRMED = 2,
    FINDING_STATUS_PAID = 3,
    FINDING_STATUS_CLOSED = 4,
    UNRECOGNIZED = -1
}
export declare const FindingStatusSDKType: typeof FindingStatus;
export declare const FindingStatusAmino: typeof FindingStatus;
export declare function findingStatusFromJSON(object: any): FindingStatus;
export declare function findingStatusToJSON(object: FindingStatus): string;
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
export declare const Program: {
    typeUrl: string;
    encode(message: Program, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): Program;
    fromPartial(object: Partial<Program>): Program;
    fromAmino(object: ProgramAmino): Program;
    toAmino(message: Program): ProgramAmino;
    fromAminoMsg(object: ProgramAminoMsg): Program;
    fromProtoMsg(message: ProgramProtoMsg): Program;
    toProto(message: Program): Uint8Array;
    toProtoMsg(message: Program): ProgramProtoMsg;
};
export declare const Finding: {
    typeUrl: string;
    encode(message: Finding, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): Finding;
    fromPartial(object: Partial<Finding>): Finding;
    fromAmino(object: FindingAmino): Finding;
    toAmino(message: Finding): FindingAmino;
    fromAminoMsg(object: FindingAminoMsg): Finding;
    fromProtoMsg(message: FindingProtoMsg): Finding;
    toProto(message: Finding): Uint8Array;
    toProtoMsg(message: Finding): FindingProtoMsg;
};
export declare const ProgramFingerprint: {
    typeUrl: string;
    encode(message: ProgramFingerprint, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): ProgramFingerprint;
    fromPartial(object: Partial<ProgramFingerprint>): ProgramFingerprint;
    fromAmino(object: ProgramFingerprintAmino): ProgramFingerprint;
    toAmino(message: ProgramFingerprint): ProgramFingerprintAmino;
    fromAminoMsg(object: ProgramFingerprintAminoMsg): ProgramFingerprint;
    fromProtoMsg(message: ProgramFingerprintProtoMsg): ProgramFingerprint;
    toProto(message: ProgramFingerprint): Uint8Array;
    toProtoMsg(message: ProgramFingerprint): ProgramFingerprintProtoMsg;
};
export declare const FindingFingerprint: {
    typeUrl: string;
    encode(message: FindingFingerprint, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): FindingFingerprint;
    fromPartial(object: Partial<FindingFingerprint>): FindingFingerprint;
    fromAmino(object: FindingFingerprintAmino): FindingFingerprint;
    toAmino(message: FindingFingerprint): FindingFingerprintAmino;
    fromAminoMsg(object: FindingFingerprintAminoMsg): FindingFingerprint;
    fromProtoMsg(message: FindingFingerprintProtoMsg): FindingFingerprint;
    toProto(message: FindingFingerprint): Uint8Array;
    toProtoMsg(message: FindingFingerprint): FindingFingerprintProtoMsg;
};
