import { Vote, VoteSDKType, SignedHeader, SignedHeaderSDKType, Header, HeaderSDKType } from "./types";
import { Timestamp, TimestampSDKType } from "../../google/protobuf/timestamp";
import { PublicKey, PublicKeySDKType } from "../crypto/keys";
import { Long, isSet, fromJsonTimestamp, bytesFromBase64 } from "../../helpers";
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
function createBaseDuplicateVoteEvidence(): DuplicateVoteEvidence {
  return {
    voteA: undefined,
    voteB: undefined,
    timestamp: undefined
  };
}
export const DuplicateVoteEvidence = {
  encode(message: DuplicateVoteEvidence, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.voteA !== undefined) {
      Vote.encode(message.voteA, writer.uint32(10).fork()).ldelim();
    }
    if (message.voteB !== undefined) {
      Vote.encode(message.voteB, writer.uint32(18).fork()).ldelim();
    }
    if (message.timestamp !== undefined) {
      Timestamp.encode(message.timestamp, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): DuplicateVoteEvidence {
    return {
      voteA: isSet(object.voteA) ? Vote.fromJSON(object.voteA) : undefined,
      voteB: isSet(object.voteB) ? Vote.fromJSON(object.voteB) : undefined,
      timestamp: isSet(object.timestamp) ? fromJsonTimestamp(object.timestamp) : undefined
    };
  },
  fromPartial(object: Partial<DuplicateVoteEvidence>): DuplicateVoteEvidence {
    const message = createBaseDuplicateVoteEvidence();
    message.voteA = object.voteA !== undefined && object.voteA !== null ? Vote.fromPartial(object.voteA) : undefined;
    message.voteB = object.voteB !== undefined && object.voteB !== null ? Vote.fromPartial(object.voteB) : undefined;
    message.timestamp = object.timestamp !== undefined && object.timestamp !== null ? Timestamp.fromPartial(object.timestamp) : undefined;
    return message;
  }
};
function createBasePotentialAmnesiaEvidence(): PotentialAmnesiaEvidence {
  return {
    voteA: undefined,
    voteB: undefined,
    heightStamp: Long.ZERO,
    timestamp: undefined
  };
}
export const PotentialAmnesiaEvidence = {
  encode(message: PotentialAmnesiaEvidence, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.voteA !== undefined) {
      Vote.encode(message.voteA, writer.uint32(10).fork()).ldelim();
    }
    if (message.voteB !== undefined) {
      Vote.encode(message.voteB, writer.uint32(18).fork()).ldelim();
    }
    if (!message.heightStamp.isZero()) {
      writer.uint32(24).int64(message.heightStamp);
    }
    if (message.timestamp !== undefined) {
      Timestamp.encode(message.timestamp, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): PotentialAmnesiaEvidence {
    return {
      voteA: isSet(object.voteA) ? Vote.fromJSON(object.voteA) : undefined,
      voteB: isSet(object.voteB) ? Vote.fromJSON(object.voteB) : undefined,
      heightStamp: isSet(object.heightStamp) ? Long.fromValue(object.heightStamp) : Long.ZERO,
      timestamp: isSet(object.timestamp) ? fromJsonTimestamp(object.timestamp) : undefined
    };
  },
  fromPartial(object: Partial<PotentialAmnesiaEvidence>): PotentialAmnesiaEvidence {
    const message = createBasePotentialAmnesiaEvidence();
    message.voteA = object.voteA !== undefined && object.voteA !== null ? Vote.fromPartial(object.voteA) : undefined;
    message.voteB = object.voteB !== undefined && object.voteB !== null ? Vote.fromPartial(object.voteB) : undefined;
    message.heightStamp = object.heightStamp !== undefined && object.heightStamp !== null ? Long.fromValue(object.heightStamp) : Long.ZERO;
    message.timestamp = object.timestamp !== undefined && object.timestamp !== null ? Timestamp.fromPartial(object.timestamp) : undefined;
    return message;
  }
};
function createBaseAmnesiaEvidence(): AmnesiaEvidence {
  return {
    potentialAmnesiaEvidence: undefined,
    polc: undefined
  };
}
export const AmnesiaEvidence = {
  encode(message: AmnesiaEvidence, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.potentialAmnesiaEvidence !== undefined) {
      PotentialAmnesiaEvidence.encode(message.potentialAmnesiaEvidence, writer.uint32(10).fork()).ldelim();
    }
    if (message.polc !== undefined) {
      ProofOfLockChange.encode(message.polc, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): AmnesiaEvidence {
    return {
      potentialAmnesiaEvidence: isSet(object.potentialAmnesiaEvidence) ? PotentialAmnesiaEvidence.fromJSON(object.potentialAmnesiaEvidence) : undefined,
      polc: isSet(object.polc) ? ProofOfLockChange.fromJSON(object.polc) : undefined
    };
  },
  fromPartial(object: Partial<AmnesiaEvidence>): AmnesiaEvidence {
    const message = createBaseAmnesiaEvidence();
    message.potentialAmnesiaEvidence = object.potentialAmnesiaEvidence !== undefined && object.potentialAmnesiaEvidence !== null ? PotentialAmnesiaEvidence.fromPartial(object.potentialAmnesiaEvidence) : undefined;
    message.polc = object.polc !== undefined && object.polc !== null ? ProofOfLockChange.fromPartial(object.polc) : undefined;
    return message;
  }
};
function createBaseConflictingHeadersEvidence(): ConflictingHeadersEvidence {
  return {
    h1: undefined,
    h2: undefined
  };
}
export const ConflictingHeadersEvidence = {
  encode(message: ConflictingHeadersEvidence, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.h1 !== undefined) {
      SignedHeader.encode(message.h1, writer.uint32(10).fork()).ldelim();
    }
    if (message.h2 !== undefined) {
      SignedHeader.encode(message.h2, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): ConflictingHeadersEvidence {
    return {
      h1: isSet(object.h1) ? SignedHeader.fromJSON(object.h1) : undefined,
      h2: isSet(object.h2) ? SignedHeader.fromJSON(object.h2) : undefined
    };
  },
  fromPartial(object: Partial<ConflictingHeadersEvidence>): ConflictingHeadersEvidence {
    const message = createBaseConflictingHeadersEvidence();
    message.h1 = object.h1 !== undefined && object.h1 !== null ? SignedHeader.fromPartial(object.h1) : undefined;
    message.h2 = object.h2 !== undefined && object.h2 !== null ? SignedHeader.fromPartial(object.h2) : undefined;
    return message;
  }
};
function createBaseLunaticValidatorEvidence(): LunaticValidatorEvidence {
  return {
    header: undefined,
    vote: undefined,
    invalidHeaderField: "",
    timestamp: undefined
  };
}
export const LunaticValidatorEvidence = {
  encode(message: LunaticValidatorEvidence, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.header !== undefined) {
      Header.encode(message.header, writer.uint32(10).fork()).ldelim();
    }
    if (message.vote !== undefined) {
      Vote.encode(message.vote, writer.uint32(18).fork()).ldelim();
    }
    if (message.invalidHeaderField !== "") {
      writer.uint32(26).string(message.invalidHeaderField);
    }
    if (message.timestamp !== undefined) {
      Timestamp.encode(message.timestamp, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): LunaticValidatorEvidence {
    return {
      header: isSet(object.header) ? Header.fromJSON(object.header) : undefined,
      vote: isSet(object.vote) ? Vote.fromJSON(object.vote) : undefined,
      invalidHeaderField: isSet(object.invalidHeaderField) ? String(object.invalidHeaderField) : "",
      timestamp: isSet(object.timestamp) ? fromJsonTimestamp(object.timestamp) : undefined
    };
  },
  fromPartial(object: Partial<LunaticValidatorEvidence>): LunaticValidatorEvidence {
    const message = createBaseLunaticValidatorEvidence();
    message.header = object.header !== undefined && object.header !== null ? Header.fromPartial(object.header) : undefined;
    message.vote = object.vote !== undefined && object.vote !== null ? Vote.fromPartial(object.vote) : undefined;
    message.invalidHeaderField = object.invalidHeaderField ?? "";
    message.timestamp = object.timestamp !== undefined && object.timestamp !== null ? Timestamp.fromPartial(object.timestamp) : undefined;
    return message;
  }
};
function createBaseEvidence(): Evidence {
  return {
    duplicateVoteEvidence: undefined,
    conflictingHeadersEvidence: undefined,
    lunaticValidatorEvidence: undefined,
    potentialAmnesiaEvidence: undefined,
    amnesiaEvidence: undefined
  };
}
export const Evidence = {
  encode(message: Evidence, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.duplicateVoteEvidence !== undefined) {
      DuplicateVoteEvidence.encode(message.duplicateVoteEvidence, writer.uint32(10).fork()).ldelim();
    }
    if (message.conflictingHeadersEvidence !== undefined) {
      ConflictingHeadersEvidence.encode(message.conflictingHeadersEvidence, writer.uint32(18).fork()).ldelim();
    }
    if (message.lunaticValidatorEvidence !== undefined) {
      LunaticValidatorEvidence.encode(message.lunaticValidatorEvidence, writer.uint32(26).fork()).ldelim();
    }
    if (message.potentialAmnesiaEvidence !== undefined) {
      PotentialAmnesiaEvidence.encode(message.potentialAmnesiaEvidence, writer.uint32(34).fork()).ldelim();
    }
    if (message.amnesiaEvidence !== undefined) {
      AmnesiaEvidence.encode(message.amnesiaEvidence, writer.uint32(42).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): Evidence {
    return {
      duplicateVoteEvidence: isSet(object.duplicateVoteEvidence) ? DuplicateVoteEvidence.fromJSON(object.duplicateVoteEvidence) : undefined,
      conflictingHeadersEvidence: isSet(object.conflictingHeadersEvidence) ? ConflictingHeadersEvidence.fromJSON(object.conflictingHeadersEvidence) : undefined,
      lunaticValidatorEvidence: isSet(object.lunaticValidatorEvidence) ? LunaticValidatorEvidence.fromJSON(object.lunaticValidatorEvidence) : undefined,
      potentialAmnesiaEvidence: isSet(object.potentialAmnesiaEvidence) ? PotentialAmnesiaEvidence.fromJSON(object.potentialAmnesiaEvidence) : undefined,
      amnesiaEvidence: isSet(object.amnesiaEvidence) ? AmnesiaEvidence.fromJSON(object.amnesiaEvidence) : undefined
    };
  },
  fromPartial(object: Partial<Evidence>): Evidence {
    const message = createBaseEvidence();
    message.duplicateVoteEvidence = object.duplicateVoteEvidence !== undefined && object.duplicateVoteEvidence !== null ? DuplicateVoteEvidence.fromPartial(object.duplicateVoteEvidence) : undefined;
    message.conflictingHeadersEvidence = object.conflictingHeadersEvidence !== undefined && object.conflictingHeadersEvidence !== null ? ConflictingHeadersEvidence.fromPartial(object.conflictingHeadersEvidence) : undefined;
    message.lunaticValidatorEvidence = object.lunaticValidatorEvidence !== undefined && object.lunaticValidatorEvidence !== null ? LunaticValidatorEvidence.fromPartial(object.lunaticValidatorEvidence) : undefined;
    message.potentialAmnesiaEvidence = object.potentialAmnesiaEvidence !== undefined && object.potentialAmnesiaEvidence !== null ? PotentialAmnesiaEvidence.fromPartial(object.potentialAmnesiaEvidence) : undefined;
    message.amnesiaEvidence = object.amnesiaEvidence !== undefined && object.amnesiaEvidence !== null ? AmnesiaEvidence.fromPartial(object.amnesiaEvidence) : undefined;
    return message;
  }
};
function createBaseEvidenceData(): EvidenceData {
  return {
    evidence: [],
    hash: new Uint8Array()
  };
}
export const EvidenceData = {
  encode(message: EvidenceData, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.evidence) {
      Evidence.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.hash.length !== 0) {
      writer.uint32(18).bytes(message.hash);
    }
    return writer;
  },
  fromJSON(object: any): EvidenceData {
    return {
      evidence: Array.isArray(object?.evidence) ? object.evidence.map((e: any) => Evidence.fromJSON(e)) : [],
      hash: isSet(object.hash) ? bytesFromBase64(object.hash) : new Uint8Array()
    };
  },
  fromPartial(object: Partial<EvidenceData>): EvidenceData {
    const message = createBaseEvidenceData();
    message.evidence = object.evidence?.map(e => Evidence.fromPartial(e)) || [];
    message.hash = object.hash ?? new Uint8Array();
    return message;
  }
};
function createBaseProofOfLockChange(): ProofOfLockChange {
  return {
    votes: [],
    pubKey: undefined
  };
}
export const ProofOfLockChange = {
  encode(message: ProofOfLockChange, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.votes) {
      Vote.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pubKey !== undefined) {
      PublicKey.encode(message.pubKey, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): ProofOfLockChange {
    return {
      votes: Array.isArray(object?.votes) ? object.votes.map((e: any) => Vote.fromJSON(e)) : [],
      pubKey: isSet(object.pubKey) ? PublicKey.fromJSON(object.pubKey) : undefined
    };
  },
  fromPartial(object: Partial<ProofOfLockChange>): ProofOfLockChange {
    const message = createBaseProofOfLockChange();
    message.votes = object.votes?.map(e => Vote.fromPartial(e)) || [];
    message.pubKey = object.pubKey !== undefined && object.pubKey !== null ? PublicKey.fromPartial(object.pubKey) : undefined;
    return message;
  }
};