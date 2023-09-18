import { Vote, VoteAmino, VoteSDKType, SignedHeader, SignedHeaderAmino, SignedHeaderSDKType, Header, HeaderAmino, HeaderSDKType } from "./types";
import { Timestamp, TimestampAmino, TimestampSDKType } from "../../google/protobuf/timestamp";
import { PublicKey, PublicKeyAmino, PublicKeySDKType } from "../crypto/keys";
import { BinaryWriter } from "../../binary";
import { isSet, fromJsonTimestamp, bytesFromBase64 } from "../../helpers";
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
function createBaseDuplicateVoteEvidence(): DuplicateVoteEvidence {
  return {
    voteA: Vote.fromPartial({}),
    voteB: Vote.fromPartial({}),
    timestamp: Timestamp.fromPartial({})
  };
}
export const DuplicateVoteEvidence = {
  typeUrl: "/tendermint.types.DuplicateVoteEvidence",
  encode(message: DuplicateVoteEvidence, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
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
  },
  fromAmino(object: DuplicateVoteEvidenceAmino): DuplicateVoteEvidence {
    return {
      voteA: object?.vote_a ? Vote.fromAmino(object.vote_a) : undefined,
      voteB: object?.vote_b ? Vote.fromAmino(object.vote_b) : undefined,
      timestamp: object.timestamp
    };
  },
  toAmino(message: DuplicateVoteEvidence): DuplicateVoteEvidenceAmino {
    const obj: any = {};
    obj.vote_a = message.voteA ? Vote.toAmino(message.voteA) : undefined;
    obj.vote_b = message.voteB ? Vote.toAmino(message.voteB) : undefined;
    obj.timestamp = message.timestamp;
    return obj;
  },
  fromAminoMsg(object: DuplicateVoteEvidenceAminoMsg): DuplicateVoteEvidence {
    return DuplicateVoteEvidence.fromAmino(object.value);
  },
  fromProtoMsg(message: DuplicateVoteEvidenceProtoMsg): DuplicateVoteEvidence {
    return DuplicateVoteEvidence.decode(message.value);
  },
  toProto(message: DuplicateVoteEvidence): Uint8Array {
    return DuplicateVoteEvidence.encode(message).finish();
  },
  toProtoMsg(message: DuplicateVoteEvidence): DuplicateVoteEvidenceProtoMsg {
    return {
      typeUrl: "/tendermint.types.DuplicateVoteEvidence",
      value: DuplicateVoteEvidence.encode(message).finish()
    };
  }
};
function createBasePotentialAmnesiaEvidence(): PotentialAmnesiaEvidence {
  return {
    voteA: Vote.fromPartial({}),
    voteB: Vote.fromPartial({}),
    heightStamp: BigInt(0),
    timestamp: Timestamp.fromPartial({})
  };
}
export const PotentialAmnesiaEvidence = {
  typeUrl: "/tendermint.types.PotentialAmnesiaEvidence",
  encode(message: PotentialAmnesiaEvidence, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.voteA !== undefined) {
      Vote.encode(message.voteA, writer.uint32(10).fork()).ldelim();
    }
    if (message.voteB !== undefined) {
      Vote.encode(message.voteB, writer.uint32(18).fork()).ldelim();
    }
    if (message.heightStamp !== BigInt(0)) {
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
      heightStamp: isSet(object.heightStamp) ? BigInt(object.heightStamp.toString()) : BigInt(0),
      timestamp: isSet(object.timestamp) ? fromJsonTimestamp(object.timestamp) : undefined
    };
  },
  fromPartial(object: Partial<PotentialAmnesiaEvidence>): PotentialAmnesiaEvidence {
    const message = createBasePotentialAmnesiaEvidence();
    message.voteA = object.voteA !== undefined && object.voteA !== null ? Vote.fromPartial(object.voteA) : undefined;
    message.voteB = object.voteB !== undefined && object.voteB !== null ? Vote.fromPartial(object.voteB) : undefined;
    message.heightStamp = object.heightStamp !== undefined && object.heightStamp !== null ? BigInt(object.heightStamp.toString()) : BigInt(0);
    message.timestamp = object.timestamp !== undefined && object.timestamp !== null ? Timestamp.fromPartial(object.timestamp) : undefined;
    return message;
  },
  fromAmino(object: PotentialAmnesiaEvidenceAmino): PotentialAmnesiaEvidence {
    return {
      voteA: object?.vote_a ? Vote.fromAmino(object.vote_a) : undefined,
      voteB: object?.vote_b ? Vote.fromAmino(object.vote_b) : undefined,
      heightStamp: BigInt(object.height_stamp),
      timestamp: object.timestamp
    };
  },
  toAmino(message: PotentialAmnesiaEvidence): PotentialAmnesiaEvidenceAmino {
    const obj: any = {};
    obj.vote_a = message.voteA ? Vote.toAmino(message.voteA) : undefined;
    obj.vote_b = message.voteB ? Vote.toAmino(message.voteB) : undefined;
    obj.height_stamp = message.heightStamp ? message.heightStamp.toString() : undefined;
    obj.timestamp = message.timestamp;
    return obj;
  },
  fromAminoMsg(object: PotentialAmnesiaEvidenceAminoMsg): PotentialAmnesiaEvidence {
    return PotentialAmnesiaEvidence.fromAmino(object.value);
  },
  fromProtoMsg(message: PotentialAmnesiaEvidenceProtoMsg): PotentialAmnesiaEvidence {
    return PotentialAmnesiaEvidence.decode(message.value);
  },
  toProto(message: PotentialAmnesiaEvidence): Uint8Array {
    return PotentialAmnesiaEvidence.encode(message).finish();
  },
  toProtoMsg(message: PotentialAmnesiaEvidence): PotentialAmnesiaEvidenceProtoMsg {
    return {
      typeUrl: "/tendermint.types.PotentialAmnesiaEvidence",
      value: PotentialAmnesiaEvidence.encode(message).finish()
    };
  }
};
function createBaseAmnesiaEvidence(): AmnesiaEvidence {
  return {
    potentialAmnesiaEvidence: PotentialAmnesiaEvidence.fromPartial({}),
    polc: ProofOfLockChange.fromPartial({})
  };
}
export const AmnesiaEvidence = {
  typeUrl: "/tendermint.types.AmnesiaEvidence",
  encode(message: AmnesiaEvidence, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
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
  },
  fromAmino(object: AmnesiaEvidenceAmino): AmnesiaEvidence {
    return {
      potentialAmnesiaEvidence: object?.potential_amnesia_evidence ? PotentialAmnesiaEvidence.fromAmino(object.potential_amnesia_evidence) : undefined,
      polc: object?.polc ? ProofOfLockChange.fromAmino(object.polc) : undefined
    };
  },
  toAmino(message: AmnesiaEvidence): AmnesiaEvidenceAmino {
    const obj: any = {};
    obj.potential_amnesia_evidence = message.potentialAmnesiaEvidence ? PotentialAmnesiaEvidence.toAmino(message.potentialAmnesiaEvidence) : undefined;
    obj.polc = message.polc ? ProofOfLockChange.toAmino(message.polc) : undefined;
    return obj;
  },
  fromAminoMsg(object: AmnesiaEvidenceAminoMsg): AmnesiaEvidence {
    return AmnesiaEvidence.fromAmino(object.value);
  },
  fromProtoMsg(message: AmnesiaEvidenceProtoMsg): AmnesiaEvidence {
    return AmnesiaEvidence.decode(message.value);
  },
  toProto(message: AmnesiaEvidence): Uint8Array {
    return AmnesiaEvidence.encode(message).finish();
  },
  toProtoMsg(message: AmnesiaEvidence): AmnesiaEvidenceProtoMsg {
    return {
      typeUrl: "/tendermint.types.AmnesiaEvidence",
      value: AmnesiaEvidence.encode(message).finish()
    };
  }
};
function createBaseConflictingHeadersEvidence(): ConflictingHeadersEvidence {
  return {
    h1: SignedHeader.fromPartial({}),
    h2: SignedHeader.fromPartial({})
  };
}
export const ConflictingHeadersEvidence = {
  typeUrl: "/tendermint.types.ConflictingHeadersEvidence",
  encode(message: ConflictingHeadersEvidence, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
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
  },
  fromAmino(object: ConflictingHeadersEvidenceAmino): ConflictingHeadersEvidence {
    return {
      h1: object?.h1 ? SignedHeader.fromAmino(object.h1) : undefined,
      h2: object?.h2 ? SignedHeader.fromAmino(object.h2) : undefined
    };
  },
  toAmino(message: ConflictingHeadersEvidence): ConflictingHeadersEvidenceAmino {
    const obj: any = {};
    obj.h1 = message.h1 ? SignedHeader.toAmino(message.h1) : undefined;
    obj.h2 = message.h2 ? SignedHeader.toAmino(message.h2) : undefined;
    return obj;
  },
  fromAminoMsg(object: ConflictingHeadersEvidenceAminoMsg): ConflictingHeadersEvidence {
    return ConflictingHeadersEvidence.fromAmino(object.value);
  },
  fromProtoMsg(message: ConflictingHeadersEvidenceProtoMsg): ConflictingHeadersEvidence {
    return ConflictingHeadersEvidence.decode(message.value);
  },
  toProto(message: ConflictingHeadersEvidence): Uint8Array {
    return ConflictingHeadersEvidence.encode(message).finish();
  },
  toProtoMsg(message: ConflictingHeadersEvidence): ConflictingHeadersEvidenceProtoMsg {
    return {
      typeUrl: "/tendermint.types.ConflictingHeadersEvidence",
      value: ConflictingHeadersEvidence.encode(message).finish()
    };
  }
};
function createBaseLunaticValidatorEvidence(): LunaticValidatorEvidence {
  return {
    header: Header.fromPartial({}),
    vote: Vote.fromPartial({}),
    invalidHeaderField: "",
    timestamp: Timestamp.fromPartial({})
  };
}
export const LunaticValidatorEvidence = {
  typeUrl: "/tendermint.types.LunaticValidatorEvidence",
  encode(message: LunaticValidatorEvidence, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
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
  },
  fromAmino(object: LunaticValidatorEvidenceAmino): LunaticValidatorEvidence {
    return {
      header: object?.header ? Header.fromAmino(object.header) : undefined,
      vote: object?.vote ? Vote.fromAmino(object.vote) : undefined,
      invalidHeaderField: object.invalid_header_field,
      timestamp: object.timestamp
    };
  },
  toAmino(message: LunaticValidatorEvidence): LunaticValidatorEvidenceAmino {
    const obj: any = {};
    obj.header = message.header ? Header.toAmino(message.header) : undefined;
    obj.vote = message.vote ? Vote.toAmino(message.vote) : undefined;
    obj.invalid_header_field = message.invalidHeaderField;
    obj.timestamp = message.timestamp;
    return obj;
  },
  fromAminoMsg(object: LunaticValidatorEvidenceAminoMsg): LunaticValidatorEvidence {
    return LunaticValidatorEvidence.fromAmino(object.value);
  },
  fromProtoMsg(message: LunaticValidatorEvidenceProtoMsg): LunaticValidatorEvidence {
    return LunaticValidatorEvidence.decode(message.value);
  },
  toProto(message: LunaticValidatorEvidence): Uint8Array {
    return LunaticValidatorEvidence.encode(message).finish();
  },
  toProtoMsg(message: LunaticValidatorEvidence): LunaticValidatorEvidenceProtoMsg {
    return {
      typeUrl: "/tendermint.types.LunaticValidatorEvidence",
      value: LunaticValidatorEvidence.encode(message).finish()
    };
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
  typeUrl: "/tendermint.types.Evidence",
  encode(message: Evidence, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
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
  },
  fromAmino(object: EvidenceAmino): Evidence {
    return {
      duplicateVoteEvidence: object?.duplicate_vote_evidence ? DuplicateVoteEvidence.fromAmino(object.duplicate_vote_evidence) : undefined,
      conflictingHeadersEvidence: object?.conflicting_headers_evidence ? ConflictingHeadersEvidence.fromAmino(object.conflicting_headers_evidence) : undefined,
      lunaticValidatorEvidence: object?.lunatic_validator_evidence ? LunaticValidatorEvidence.fromAmino(object.lunatic_validator_evidence) : undefined,
      potentialAmnesiaEvidence: object?.potential_amnesia_evidence ? PotentialAmnesiaEvidence.fromAmino(object.potential_amnesia_evidence) : undefined,
      amnesiaEvidence: object?.amnesia_evidence ? AmnesiaEvidence.fromAmino(object.amnesia_evidence) : undefined
    };
  },
  toAmino(message: Evidence): EvidenceAmino {
    const obj: any = {};
    obj.duplicate_vote_evidence = message.duplicateVoteEvidence ? DuplicateVoteEvidence.toAmino(message.duplicateVoteEvidence) : undefined;
    obj.conflicting_headers_evidence = message.conflictingHeadersEvidence ? ConflictingHeadersEvidence.toAmino(message.conflictingHeadersEvidence) : undefined;
    obj.lunatic_validator_evidence = message.lunaticValidatorEvidence ? LunaticValidatorEvidence.toAmino(message.lunaticValidatorEvidence) : undefined;
    obj.potential_amnesia_evidence = message.potentialAmnesiaEvidence ? PotentialAmnesiaEvidence.toAmino(message.potentialAmnesiaEvidence) : undefined;
    obj.amnesia_evidence = message.amnesiaEvidence ? AmnesiaEvidence.toAmino(message.amnesiaEvidence) : undefined;
    return obj;
  },
  fromAminoMsg(object: EvidenceAminoMsg): Evidence {
    return Evidence.fromAmino(object.value);
  },
  fromProtoMsg(message: EvidenceProtoMsg): Evidence {
    return Evidence.decode(message.value);
  },
  toProto(message: Evidence): Uint8Array {
    return Evidence.encode(message).finish();
  },
  toProtoMsg(message: Evidence): EvidenceProtoMsg {
    return {
      typeUrl: "/tendermint.types.Evidence",
      value: Evidence.encode(message).finish()
    };
  }
};
function createBaseEvidenceData(): EvidenceData {
  return {
    evidence: [],
    hash: new Uint8Array()
  };
}
export const EvidenceData = {
  typeUrl: "/tendermint.types.EvidenceData",
  encode(message: EvidenceData, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
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
  },
  fromAmino(object: EvidenceDataAmino): EvidenceData {
    return {
      evidence: Array.isArray(object?.evidence) ? object.evidence.map((e: any) => Evidence.fromAmino(e)) : [],
      hash: object.hash
    };
  },
  toAmino(message: EvidenceData): EvidenceDataAmino {
    const obj: any = {};
    if (message.evidence) {
      obj.evidence = message.evidence.map(e => e ? Evidence.toAmino(e) : undefined);
    } else {
      obj.evidence = [];
    }
    obj.hash = message.hash;
    return obj;
  },
  fromAminoMsg(object: EvidenceDataAminoMsg): EvidenceData {
    return EvidenceData.fromAmino(object.value);
  },
  fromProtoMsg(message: EvidenceDataProtoMsg): EvidenceData {
    return EvidenceData.decode(message.value);
  },
  toProto(message: EvidenceData): Uint8Array {
    return EvidenceData.encode(message).finish();
  },
  toProtoMsg(message: EvidenceData): EvidenceDataProtoMsg {
    return {
      typeUrl: "/tendermint.types.EvidenceData",
      value: EvidenceData.encode(message).finish()
    };
  }
};
function createBaseProofOfLockChange(): ProofOfLockChange {
  return {
    votes: [],
    pubKey: PublicKey.fromPartial({})
  };
}
export const ProofOfLockChange = {
  typeUrl: "/tendermint.types.ProofOfLockChange",
  encode(message: ProofOfLockChange, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
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
  },
  fromAmino(object: ProofOfLockChangeAmino): ProofOfLockChange {
    return {
      votes: Array.isArray(object?.votes) ? object.votes.map((e: any) => Vote.fromAmino(e)) : [],
      pubKey: object?.pub_key ? PublicKey.fromAmino(object.pub_key) : undefined
    };
  },
  toAmino(message: ProofOfLockChange): ProofOfLockChangeAmino {
    const obj: any = {};
    if (message.votes) {
      obj.votes = message.votes.map(e => e ? Vote.toAmino(e) : undefined);
    } else {
      obj.votes = [];
    }
    obj.pub_key = message.pubKey ? PublicKey.toAmino(message.pubKey) : undefined;
    return obj;
  },
  fromAminoMsg(object: ProofOfLockChangeAminoMsg): ProofOfLockChange {
    return ProofOfLockChange.fromAmino(object.value);
  },
  fromProtoMsg(message: ProofOfLockChangeProtoMsg): ProofOfLockChange {
    return ProofOfLockChange.decode(message.value);
  },
  toProto(message: ProofOfLockChange): Uint8Array {
    return ProofOfLockChange.encode(message).finish();
  },
  toProtoMsg(message: ProofOfLockChange): ProofOfLockChangeProtoMsg {
    return {
      typeUrl: "/tendermint.types.ProofOfLockChange",
      value: ProofOfLockChange.encode(message).finish()
    };
  }
};