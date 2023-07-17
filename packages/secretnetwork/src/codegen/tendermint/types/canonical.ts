import { SignedMsgType, signedMsgTypeFromJSON } from "./types";
import { Timestamp, TimestampSDKType } from "../../google/protobuf/timestamp";
import { Long, isSet, bytesFromBase64, fromJsonTimestamp } from "../../helpers";
import * as _m0 from "protobufjs/minimal";
export interface CanonicalBlockID {
  hash: Uint8Array;
  partSetHeader?: CanonicalPartSetHeader;
}
export interface CanonicalBlockIDSDKType {
  hash: Uint8Array;
  part_set_header?: CanonicalPartSetHeaderSDKType;
}
export interface CanonicalPartSetHeader {
  total: number;
  hash: Uint8Array;
}
export interface CanonicalPartSetHeaderSDKType {
  total: number;
  hash: Uint8Array;
}
export interface CanonicalProposal {
  /** type alias for byte */
  type: SignedMsgType;
  /** canonicalization requires fixed size encoding here */
  height: Long;
  /** canonicalization requires fixed size encoding here */
  round: Long;
  polRound: Long;
  blockId?: CanonicalBlockID;
  timestamp?: Timestamp;
  chainId: string;
}
export interface CanonicalProposalSDKType {
  type: SignedMsgType;
  height: Long;
  round: Long;
  pol_round: Long;
  block_id?: CanonicalBlockIDSDKType;
  timestamp?: TimestampSDKType;
  chain_id: string;
}
export interface CanonicalVote {
  /** type alias for byte */
  type: SignedMsgType;
  /** canonicalization requires fixed size encoding here */
  height: Long;
  /** canonicalization requires fixed size encoding here */
  round: Long;
  blockId?: CanonicalBlockID;
  timestamp?: Timestamp;
  chainId: string;
}
export interface CanonicalVoteSDKType {
  type: SignedMsgType;
  height: Long;
  round: Long;
  block_id?: CanonicalBlockIDSDKType;
  timestamp?: TimestampSDKType;
  chain_id: string;
}
function createBaseCanonicalBlockID(): CanonicalBlockID {
  return {
    hash: new Uint8Array(),
    partSetHeader: undefined
  };
}
export const CanonicalBlockID = {
  encode(message: CanonicalBlockID, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.hash.length !== 0) {
      writer.uint32(10).bytes(message.hash);
    }
    if (message.partSetHeader !== undefined) {
      CanonicalPartSetHeader.encode(message.partSetHeader, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): CanonicalBlockID {
    return {
      hash: isSet(object.hash) ? bytesFromBase64(object.hash) : new Uint8Array(),
      partSetHeader: isSet(object.partSetHeader) ? CanonicalPartSetHeader.fromJSON(object.partSetHeader) : undefined
    };
  },
  fromPartial(object: Partial<CanonicalBlockID>): CanonicalBlockID {
    const message = createBaseCanonicalBlockID();
    message.hash = object.hash ?? new Uint8Array();
    message.partSetHeader = object.partSetHeader !== undefined && object.partSetHeader !== null ? CanonicalPartSetHeader.fromPartial(object.partSetHeader) : undefined;
    return message;
  }
};
function createBaseCanonicalPartSetHeader(): CanonicalPartSetHeader {
  return {
    total: 0,
    hash: new Uint8Array()
  };
}
export const CanonicalPartSetHeader = {
  encode(message: CanonicalPartSetHeader, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.total !== 0) {
      writer.uint32(8).uint32(message.total);
    }
    if (message.hash.length !== 0) {
      writer.uint32(18).bytes(message.hash);
    }
    return writer;
  },
  fromJSON(object: any): CanonicalPartSetHeader {
    return {
      total: isSet(object.total) ? Number(object.total) : 0,
      hash: isSet(object.hash) ? bytesFromBase64(object.hash) : new Uint8Array()
    };
  },
  fromPartial(object: Partial<CanonicalPartSetHeader>): CanonicalPartSetHeader {
    const message = createBaseCanonicalPartSetHeader();
    message.total = object.total ?? 0;
    message.hash = object.hash ?? new Uint8Array();
    return message;
  }
};
function createBaseCanonicalProposal(): CanonicalProposal {
  return {
    type: 0,
    height: Long.ZERO,
    round: Long.ZERO,
    polRound: Long.ZERO,
    blockId: undefined,
    timestamp: undefined,
    chainId: ""
  };
}
export const CanonicalProposal = {
  encode(message: CanonicalProposal, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.type !== 0) {
      writer.uint32(8).int32(message.type);
    }
    if (!message.height.isZero()) {
      writer.uint32(17).sfixed64(message.height);
    }
    if (!message.round.isZero()) {
      writer.uint32(25).sfixed64(message.round);
    }
    if (!message.polRound.isZero()) {
      writer.uint32(32).int64(message.polRound);
    }
    if (message.blockId !== undefined) {
      CanonicalBlockID.encode(message.blockId, writer.uint32(42).fork()).ldelim();
    }
    if (message.timestamp !== undefined) {
      Timestamp.encode(message.timestamp, writer.uint32(50).fork()).ldelim();
    }
    if (message.chainId !== "") {
      writer.uint32(58).string(message.chainId);
    }
    return writer;
  },
  fromJSON(object: any): CanonicalProposal {
    return {
      type: isSet(object.type) ? signedMsgTypeFromJSON(object.type) : 0,
      height: isSet(object.height) ? Long.fromValue(object.height) : Long.ZERO,
      round: isSet(object.round) ? Long.fromValue(object.round) : Long.ZERO,
      polRound: isSet(object.polRound) ? Long.fromValue(object.polRound) : Long.ZERO,
      blockId: isSet(object.blockId) ? CanonicalBlockID.fromJSON(object.blockId) : undefined,
      timestamp: isSet(object.timestamp) ? fromJsonTimestamp(object.timestamp) : undefined,
      chainId: isSet(object.chainId) ? String(object.chainId) : ""
    };
  },
  fromPartial(object: Partial<CanonicalProposal>): CanonicalProposal {
    const message = createBaseCanonicalProposal();
    message.type = object.type ?? 0;
    message.height = object.height !== undefined && object.height !== null ? Long.fromValue(object.height) : Long.ZERO;
    message.round = object.round !== undefined && object.round !== null ? Long.fromValue(object.round) : Long.ZERO;
    message.polRound = object.polRound !== undefined && object.polRound !== null ? Long.fromValue(object.polRound) : Long.ZERO;
    message.blockId = object.blockId !== undefined && object.blockId !== null ? CanonicalBlockID.fromPartial(object.blockId) : undefined;
    message.timestamp = object.timestamp !== undefined && object.timestamp !== null ? Timestamp.fromPartial(object.timestamp) : undefined;
    message.chainId = object.chainId ?? "";
    return message;
  }
};
function createBaseCanonicalVote(): CanonicalVote {
  return {
    type: 0,
    height: Long.ZERO,
    round: Long.ZERO,
    blockId: undefined,
    timestamp: undefined,
    chainId: ""
  };
}
export const CanonicalVote = {
  encode(message: CanonicalVote, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.type !== 0) {
      writer.uint32(8).int32(message.type);
    }
    if (!message.height.isZero()) {
      writer.uint32(17).sfixed64(message.height);
    }
    if (!message.round.isZero()) {
      writer.uint32(25).sfixed64(message.round);
    }
    if (message.blockId !== undefined) {
      CanonicalBlockID.encode(message.blockId, writer.uint32(34).fork()).ldelim();
    }
    if (message.timestamp !== undefined) {
      Timestamp.encode(message.timestamp, writer.uint32(42).fork()).ldelim();
    }
    if (message.chainId !== "") {
      writer.uint32(50).string(message.chainId);
    }
    return writer;
  },
  fromJSON(object: any): CanonicalVote {
    return {
      type: isSet(object.type) ? signedMsgTypeFromJSON(object.type) : 0,
      height: isSet(object.height) ? Long.fromValue(object.height) : Long.ZERO,
      round: isSet(object.round) ? Long.fromValue(object.round) : Long.ZERO,
      blockId: isSet(object.blockId) ? CanonicalBlockID.fromJSON(object.blockId) : undefined,
      timestamp: isSet(object.timestamp) ? fromJsonTimestamp(object.timestamp) : undefined,
      chainId: isSet(object.chainId) ? String(object.chainId) : ""
    };
  },
  fromPartial(object: Partial<CanonicalVote>): CanonicalVote {
    const message = createBaseCanonicalVote();
    message.type = object.type ?? 0;
    message.height = object.height !== undefined && object.height !== null ? Long.fromValue(object.height) : Long.ZERO;
    message.round = object.round !== undefined && object.round !== null ? Long.fromValue(object.round) : Long.ZERO;
    message.blockId = object.blockId !== undefined && object.blockId !== null ? CanonicalBlockID.fromPartial(object.blockId) : undefined;
    message.timestamp = object.timestamp !== undefined && object.timestamp !== null ? Timestamp.fromPartial(object.timestamp) : undefined;
    message.chainId = object.chainId ?? "";
    return message;
  }
};