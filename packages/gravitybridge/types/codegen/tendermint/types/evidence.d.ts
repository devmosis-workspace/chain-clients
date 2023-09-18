import { Vote, VoteAmino, VoteSDKType, SignedHeader, SignedHeaderAmino, SignedHeaderSDKType, Header, HeaderAmino, HeaderSDKType } from "./types";
import { Timestamp, TimestampAmino, TimestampSDKType } from "../../google/protobuf/timestamp";
import { PublicKey, PublicKeyAmino, PublicKeySDKType } from "../crypto/keys";
import { BinaryWriter } from "../../binary";
/**
 * DuplicateVoteEvidence contains evidence a validator signed two conflicting
 * votes.
 */
export interface DuplicateVoteEvidence {
    voteA: Vote;
    voteB: Vote;
    timestamp: Timestamp;
}
export interface DuplicateVoteEvidenceProtoMsg {
    typeUrl: "/tendermint.types.DuplicateVoteEvidence";
    value: Uint8Array;
}
/**
 * DuplicateVoteEvidence contains evidence a validator signed two conflicting
 * votes.
 */
export interface DuplicateVoteEvidenceAmino {
    vote_a?: VoteAmino;
    vote_b?: VoteAmino;
    timestamp?: TimestampAmino;
}
export interface DuplicateVoteEvidenceAminoMsg {
    type: "/tendermint.types.DuplicateVoteEvidence";
    value: DuplicateVoteEvidenceAmino;
}
/**
 * DuplicateVoteEvidence contains evidence a validator signed two conflicting
 * votes.
 */
export interface DuplicateVoteEvidenceSDKType {
    vote_a: VoteSDKType;
    vote_b: VoteSDKType;
    timestamp: TimestampSDKType;
}
export interface PotentialAmnesiaEvidence {
    voteA: Vote;
    voteB: Vote;
    heightStamp: bigint;
    timestamp: Timestamp;
}
export interface PotentialAmnesiaEvidenceProtoMsg {
    typeUrl: "/tendermint.types.PotentialAmnesiaEvidence";
    value: Uint8Array;
}
export interface PotentialAmnesiaEvidenceAmino {
    vote_a?: VoteAmino;
    vote_b?: VoteAmino;
    height_stamp: string;
    timestamp?: TimestampAmino;
}
export interface PotentialAmnesiaEvidenceAminoMsg {
    type: "/tendermint.types.PotentialAmnesiaEvidence";
    value: PotentialAmnesiaEvidenceAmino;
}
export interface PotentialAmnesiaEvidenceSDKType {
    vote_a: VoteSDKType;
    vote_b: VoteSDKType;
    height_stamp: bigint;
    timestamp: TimestampSDKType;
}
export interface AmnesiaEvidence {
    potentialAmnesiaEvidence: PotentialAmnesiaEvidence;
    polc: ProofOfLockChange;
}
export interface AmnesiaEvidenceProtoMsg {
    typeUrl: "/tendermint.types.AmnesiaEvidence";
    value: Uint8Array;
}
export interface AmnesiaEvidenceAmino {
    potential_amnesia_evidence?: PotentialAmnesiaEvidenceAmino;
    polc?: ProofOfLockChangeAmino;
}
export interface AmnesiaEvidenceAminoMsg {
    type: "/tendermint.types.AmnesiaEvidence";
    value: AmnesiaEvidenceAmino;
}
export interface AmnesiaEvidenceSDKType {
    potential_amnesia_evidence: PotentialAmnesiaEvidenceSDKType;
    polc: ProofOfLockChangeSDKType;
}
export interface ConflictingHeadersEvidence {
    h1: SignedHeader;
    h2: SignedHeader;
}
export interface ConflictingHeadersEvidenceProtoMsg {
    typeUrl: "/tendermint.types.ConflictingHeadersEvidence";
    value: Uint8Array;
}
export interface ConflictingHeadersEvidenceAmino {
    h1?: SignedHeaderAmino;
    h2?: SignedHeaderAmino;
}
export interface ConflictingHeadersEvidenceAminoMsg {
    type: "/tendermint.types.ConflictingHeadersEvidence";
    value: ConflictingHeadersEvidenceAmino;
}
export interface ConflictingHeadersEvidenceSDKType {
    h1: SignedHeaderSDKType;
    h2: SignedHeaderSDKType;
}
export interface LunaticValidatorEvidence {
    header: Header;
    vote: Vote;
    invalidHeaderField: string;
    timestamp: Timestamp;
}
export interface LunaticValidatorEvidenceProtoMsg {
    typeUrl: "/tendermint.types.LunaticValidatorEvidence";
    value: Uint8Array;
}
export interface LunaticValidatorEvidenceAmino {
    header?: HeaderAmino;
    vote?: VoteAmino;
    invalid_header_field: string;
    timestamp?: TimestampAmino;
}
export interface LunaticValidatorEvidenceAminoMsg {
    type: "/tendermint.types.LunaticValidatorEvidence";
    value: LunaticValidatorEvidenceAmino;
}
export interface LunaticValidatorEvidenceSDKType {
    header: HeaderSDKType;
    vote: VoteSDKType;
    invalid_header_field: string;
    timestamp: TimestampSDKType;
}
export interface Evidence {
    duplicateVoteEvidence?: DuplicateVoteEvidence;
    conflictingHeadersEvidence?: ConflictingHeadersEvidence;
    lunaticValidatorEvidence?: LunaticValidatorEvidence;
    potentialAmnesiaEvidence?: PotentialAmnesiaEvidence;
    amnesiaEvidence?: AmnesiaEvidence;
}
export interface EvidenceProtoMsg {
    typeUrl: "/tendermint.types.Evidence";
    value: Uint8Array;
}
export interface EvidenceAmino {
    duplicate_vote_evidence?: DuplicateVoteEvidenceAmino;
    conflicting_headers_evidence?: ConflictingHeadersEvidenceAmino;
    lunatic_validator_evidence?: LunaticValidatorEvidenceAmino;
    potential_amnesia_evidence?: PotentialAmnesiaEvidenceAmino;
    amnesia_evidence?: AmnesiaEvidenceAmino;
}
export interface EvidenceAminoMsg {
    type: "/tendermint.types.Evidence";
    value: EvidenceAmino;
}
export interface EvidenceSDKType {
    duplicate_vote_evidence?: DuplicateVoteEvidenceSDKType;
    conflicting_headers_evidence?: ConflictingHeadersEvidenceSDKType;
    lunatic_validator_evidence?: LunaticValidatorEvidenceSDKType;
    potential_amnesia_evidence?: PotentialAmnesiaEvidenceSDKType;
    amnesia_evidence?: AmnesiaEvidenceSDKType;
}
/** EvidenceData contains any evidence of malicious wrong-doing by validators */
export interface EvidenceData {
    evidence: Evidence[];
    hash: Uint8Array;
}
export interface EvidenceDataProtoMsg {
    typeUrl: "/tendermint.types.EvidenceData";
    value: Uint8Array;
}
/** EvidenceData contains any evidence of malicious wrong-doing by validators */
export interface EvidenceDataAmino {
    evidence: EvidenceAmino[];
    hash: Uint8Array;
}
export interface EvidenceDataAminoMsg {
    type: "/tendermint.types.EvidenceData";
    value: EvidenceDataAmino;
}
/** EvidenceData contains any evidence of malicious wrong-doing by validators */
export interface EvidenceDataSDKType {
    evidence: EvidenceSDKType[];
    hash: Uint8Array;
}
export interface ProofOfLockChange {
    votes: Vote[];
    pubKey: PublicKey;
}
export interface ProofOfLockChangeProtoMsg {
    typeUrl: "/tendermint.types.ProofOfLockChange";
    value: Uint8Array;
}
export interface ProofOfLockChangeAmino {
    votes: VoteAmino[];
    pub_key?: PublicKeyAmino;
}
export interface ProofOfLockChangeAminoMsg {
    type: "/tendermint.types.ProofOfLockChange";
    value: ProofOfLockChangeAmino;
}
export interface ProofOfLockChangeSDKType {
    votes: VoteSDKType[];
    pub_key: PublicKeySDKType;
}
export declare const DuplicateVoteEvidence: {
    typeUrl: string;
    encode(message: DuplicateVoteEvidence, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): DuplicateVoteEvidence;
    fromPartial(object: Partial<DuplicateVoteEvidence>): DuplicateVoteEvidence;
    fromAmino(object: DuplicateVoteEvidenceAmino): DuplicateVoteEvidence;
    toAmino(message: DuplicateVoteEvidence): DuplicateVoteEvidenceAmino;
    fromAminoMsg(object: DuplicateVoteEvidenceAminoMsg): DuplicateVoteEvidence;
    fromProtoMsg(message: DuplicateVoteEvidenceProtoMsg): DuplicateVoteEvidence;
    toProto(message: DuplicateVoteEvidence): Uint8Array;
    toProtoMsg(message: DuplicateVoteEvidence): DuplicateVoteEvidenceProtoMsg;
};
export declare const PotentialAmnesiaEvidence: {
    typeUrl: string;
    encode(message: PotentialAmnesiaEvidence, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): PotentialAmnesiaEvidence;
    fromPartial(object: Partial<PotentialAmnesiaEvidence>): PotentialAmnesiaEvidence;
    fromAmino(object: PotentialAmnesiaEvidenceAmino): PotentialAmnesiaEvidence;
    toAmino(message: PotentialAmnesiaEvidence): PotentialAmnesiaEvidenceAmino;
    fromAminoMsg(object: PotentialAmnesiaEvidenceAminoMsg): PotentialAmnesiaEvidence;
    fromProtoMsg(message: PotentialAmnesiaEvidenceProtoMsg): PotentialAmnesiaEvidence;
    toProto(message: PotentialAmnesiaEvidence): Uint8Array;
    toProtoMsg(message: PotentialAmnesiaEvidence): PotentialAmnesiaEvidenceProtoMsg;
};
export declare const AmnesiaEvidence: {
    typeUrl: string;
    encode(message: AmnesiaEvidence, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): AmnesiaEvidence;
    fromPartial(object: Partial<AmnesiaEvidence>): AmnesiaEvidence;
    fromAmino(object: AmnesiaEvidenceAmino): AmnesiaEvidence;
    toAmino(message: AmnesiaEvidence): AmnesiaEvidenceAmino;
    fromAminoMsg(object: AmnesiaEvidenceAminoMsg): AmnesiaEvidence;
    fromProtoMsg(message: AmnesiaEvidenceProtoMsg): AmnesiaEvidence;
    toProto(message: AmnesiaEvidence): Uint8Array;
    toProtoMsg(message: AmnesiaEvidence): AmnesiaEvidenceProtoMsg;
};
export declare const ConflictingHeadersEvidence: {
    typeUrl: string;
    encode(message: ConflictingHeadersEvidence, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): ConflictingHeadersEvidence;
    fromPartial(object: Partial<ConflictingHeadersEvidence>): ConflictingHeadersEvidence;
    fromAmino(object: ConflictingHeadersEvidenceAmino): ConflictingHeadersEvidence;
    toAmino(message: ConflictingHeadersEvidence): ConflictingHeadersEvidenceAmino;
    fromAminoMsg(object: ConflictingHeadersEvidenceAminoMsg): ConflictingHeadersEvidence;
    fromProtoMsg(message: ConflictingHeadersEvidenceProtoMsg): ConflictingHeadersEvidence;
    toProto(message: ConflictingHeadersEvidence): Uint8Array;
    toProtoMsg(message: ConflictingHeadersEvidence): ConflictingHeadersEvidenceProtoMsg;
};
export declare const LunaticValidatorEvidence: {
    typeUrl: string;
    encode(message: LunaticValidatorEvidence, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): LunaticValidatorEvidence;
    fromPartial(object: Partial<LunaticValidatorEvidence>): LunaticValidatorEvidence;
    fromAmino(object: LunaticValidatorEvidenceAmino): LunaticValidatorEvidence;
    toAmino(message: LunaticValidatorEvidence): LunaticValidatorEvidenceAmino;
    fromAminoMsg(object: LunaticValidatorEvidenceAminoMsg): LunaticValidatorEvidence;
    fromProtoMsg(message: LunaticValidatorEvidenceProtoMsg): LunaticValidatorEvidence;
    toProto(message: LunaticValidatorEvidence): Uint8Array;
    toProtoMsg(message: LunaticValidatorEvidence): LunaticValidatorEvidenceProtoMsg;
};
export declare const Evidence: {
    typeUrl: string;
    encode(message: Evidence, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): Evidence;
    fromPartial(object: Partial<Evidence>): Evidence;
    fromAmino(object: EvidenceAmino): Evidence;
    toAmino(message: Evidence): EvidenceAmino;
    fromAminoMsg(object: EvidenceAminoMsg): Evidence;
    fromProtoMsg(message: EvidenceProtoMsg): Evidence;
    toProto(message: Evidence): Uint8Array;
    toProtoMsg(message: Evidence): EvidenceProtoMsg;
};
export declare const EvidenceData: {
    typeUrl: string;
    encode(message: EvidenceData, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): EvidenceData;
    fromPartial(object: Partial<EvidenceData>): EvidenceData;
    fromAmino(object: EvidenceDataAmino): EvidenceData;
    toAmino(message: EvidenceData): EvidenceDataAmino;
    fromAminoMsg(object: EvidenceDataAminoMsg): EvidenceData;
    fromProtoMsg(message: EvidenceDataProtoMsg): EvidenceData;
    toProto(message: EvidenceData): Uint8Array;
    toProtoMsg(message: EvidenceData): EvidenceDataProtoMsg;
};
export declare const ProofOfLockChange: {
    typeUrl: string;
    encode(message: ProofOfLockChange, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): ProofOfLockChange;
    fromPartial(object: Partial<ProofOfLockChange>): ProofOfLockChange;
    fromAmino(object: ProofOfLockChangeAmino): ProofOfLockChange;
    toAmino(message: ProofOfLockChange): ProofOfLockChangeAmino;
    fromAminoMsg(object: ProofOfLockChangeAminoMsg): ProofOfLockChange;
    fromProtoMsg(message: ProofOfLockChangeProtoMsg): ProofOfLockChange;
    toProto(message: ProofOfLockChange): Uint8Array;
    toProtoMsg(message: ProofOfLockChange): ProofOfLockChangeProtoMsg;
};
