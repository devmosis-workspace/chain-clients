import { Vote, VoteSDKType, SignedHeader, SignedHeaderSDKType, Header, HeaderSDKType } from "./types";
import { Timestamp, TimestampSDKType } from "../../google/protobuf/timestamp";
import { PublicKey, PublicKeySDKType } from "../crypto/keys";
import { Long } from "../../helpers";
import * as _m0 from "protobufjs/minimal";
/**
 * DuplicateVoteEvidence contains evidence a validator signed two conflicting
 * votes.
 */
export interface DuplicateVoteEvidence {
    voteA?: Vote;
    voteB?: Vote;
    timestamp?: Timestamp;
}
/**
 * DuplicateVoteEvidence contains evidence a validator signed two conflicting
 * votes.
 */
export interface DuplicateVoteEvidenceSDKType {
    vote_a?: VoteSDKType;
    vote_b?: VoteSDKType;
    timestamp?: TimestampSDKType;
}
export interface PotentialAmnesiaEvidence {
    voteA?: Vote;
    voteB?: Vote;
    heightStamp: Long;
    timestamp?: Timestamp;
}
export interface PotentialAmnesiaEvidenceSDKType {
    vote_a?: VoteSDKType;
    vote_b?: VoteSDKType;
    height_stamp: Long;
    timestamp?: TimestampSDKType;
}
export interface AmnesiaEvidence {
    potentialAmnesiaEvidence?: PotentialAmnesiaEvidence;
    polc?: ProofOfLockChange;
}
export interface AmnesiaEvidenceSDKType {
    potential_amnesia_evidence?: PotentialAmnesiaEvidenceSDKType;
    polc?: ProofOfLockChangeSDKType;
}
export interface ConflictingHeadersEvidence {
    h1?: SignedHeader;
    h2?: SignedHeader;
}
export interface ConflictingHeadersEvidenceSDKType {
    h1?: SignedHeaderSDKType;
    h2?: SignedHeaderSDKType;
}
export interface LunaticValidatorEvidence {
    header?: Header;
    vote?: Vote;
    invalidHeaderField: string;
    timestamp?: Timestamp;
}
export interface LunaticValidatorEvidenceSDKType {
    header?: HeaderSDKType;
    vote?: VoteSDKType;
    invalid_header_field: string;
    timestamp?: TimestampSDKType;
}
export interface Evidence {
    duplicateVoteEvidence?: DuplicateVoteEvidence;
    conflictingHeadersEvidence?: ConflictingHeadersEvidence;
    lunaticValidatorEvidence?: LunaticValidatorEvidence;
    potentialAmnesiaEvidence?: PotentialAmnesiaEvidence;
    amnesiaEvidence?: AmnesiaEvidence;
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
/** EvidenceData contains any evidence of malicious wrong-doing by validators */
export interface EvidenceDataSDKType {
    evidence: EvidenceSDKType[];
    hash: Uint8Array;
}
export interface ProofOfLockChange {
    votes: Vote[];
    pubKey?: PublicKey;
}
export interface ProofOfLockChangeSDKType {
    votes: VoteSDKType[];
    pub_key?: PublicKeySDKType;
}
export declare const DuplicateVoteEvidence: {
    encode(message: DuplicateVoteEvidence, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): DuplicateVoteEvidence;
    fromPartial(object: Partial<DuplicateVoteEvidence>): DuplicateVoteEvidence;
};
export declare const PotentialAmnesiaEvidence: {
    encode(message: PotentialAmnesiaEvidence, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): PotentialAmnesiaEvidence;
    fromPartial(object: Partial<PotentialAmnesiaEvidence>): PotentialAmnesiaEvidence;
};
export declare const AmnesiaEvidence: {
    encode(message: AmnesiaEvidence, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): AmnesiaEvidence;
    fromPartial(object: Partial<AmnesiaEvidence>): AmnesiaEvidence;
};
export declare const ConflictingHeadersEvidence: {
    encode(message: ConflictingHeadersEvidence, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): ConflictingHeadersEvidence;
    fromPartial(object: Partial<ConflictingHeadersEvidence>): ConflictingHeadersEvidence;
};
export declare const LunaticValidatorEvidence: {
    encode(message: LunaticValidatorEvidence, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): LunaticValidatorEvidence;
    fromPartial(object: Partial<LunaticValidatorEvidence>): LunaticValidatorEvidence;
};
export declare const Evidence: {
    encode(message: Evidence, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): Evidence;
    fromPartial(object: Partial<Evidence>): Evidence;
};
export declare const EvidenceData: {
    encode(message: EvidenceData, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): EvidenceData;
    fromPartial(object: Partial<EvidenceData>): EvidenceData;
};
export declare const ProofOfLockChange: {
    encode(message: ProofOfLockChange, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): ProofOfLockChange;
    fromPartial(object: Partial<ProofOfLockChange>): ProofOfLockChange;
};
