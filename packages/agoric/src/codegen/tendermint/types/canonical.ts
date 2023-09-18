import { SignedMsgType, signedMsgTypeFromJSON } from "./types";
import { Timestamp, TimestampAmino, TimestampSDKType } from "../../google/protobuf/timestamp";
import { BinaryWriter } from "../../binary";
import { isSet, bytesFromBase64, fromJsonTimestamp } from "../../helpers";
export interface CanonicalBlockID {
  hash: Uint8Array;
  partSetHeader: CanonicalPartSetHeader;
}
export interface CanonicalBlockIDProtoMsg {
  typeUrl: "/tendermint.types.CanonicalBlockID";
  value: Uint8Array;
}
export interface CanonicalBlockIDAmino {
  hash: Uint8Array;
  part_set_header?: CanonicalPartSetHeaderAmino;
}
export interface CanonicalBlockIDAminoMsg {
  type: "/tendermint.types.CanonicalBlockID";
  value: CanonicalBlockIDAmino;
}
export interface CanonicalBlockIDSDKType {
  hash: Uint8Array;
  part_set_header: CanonicalPartSetHeaderSDKType;
}
export interface CanonicalPartSetHeader {
  total: number;
  hash: Uint8Array;
}
export interface CanonicalPartSetHeaderProtoMsg {
  typeUrl: "/tendermint.types.CanonicalPartSetHeader";
  value: Uint8Array;
}
export interface CanonicalPartSetHeaderAmino {
  total: number;
  hash: Uint8Array;
}
export interface CanonicalPartSetHeaderAminoMsg {
  type: "/tendermint.types.CanonicalPartSetHeader";
  value: CanonicalPartSetHeaderAmino;
}
export interface CanonicalPartSetHeaderSDKType {
  total: number;
  hash: Uint8Array;
}
export interface CanonicalProposal {
  /** type alias for byte */
  type: SignedMsgType;
  /** canonicalization requires fixed size encoding here */
  height: bigint;
  /** canonicalization requires fixed size encoding here */
  round: bigint;
  polRound: bigint;
  blockId: CanonicalBlockID;
  timestamp: Timestamp;
  chainId: string;
}
export interface CanonicalProposalProtoMsg {
  typeUrl: "/tendermint.types.CanonicalProposal";
  value: Uint8Array;
}
export interface CanonicalProposalAmino {
  /** type alias for byte */
  type: SignedMsgType;
  /** canonicalization requires fixed size encoding here */
  height: string;
  /** canonicalization requires fixed size encoding here */
  round: string;
  pol_round: string;
  block_id?: CanonicalBlockIDAmino;
  timestamp?: TimestampAmino;
  chain_id: string;
}
export interface CanonicalProposalAminoMsg {
  type: "/tendermint.types.CanonicalProposal";
  value: CanonicalProposalAmino;
}
export interface CanonicalProposalSDKType {
  type: SignedMsgType;
  height: bigint;
  round: bigint;
  pol_round: bigint;
  block_id: CanonicalBlockIDSDKType;
  timestamp: TimestampSDKType;
  chain_id: string;
}
export interface CanonicalVote {
  /** type alias for byte */
  type: SignedMsgType;
  /** canonicalization requires fixed size encoding here */
  height: bigint;
  /** canonicalization requires fixed size encoding here */
  round: bigint;
  blockId: CanonicalBlockID;
  timestamp: Timestamp;
  chainId: string;
}
export interface CanonicalVoteProtoMsg {
  typeUrl: "/tendermint.types.CanonicalVote";
  value: Uint8Array;
}
export interface CanonicalVoteAmino {
  /** type alias for byte */
  type: SignedMsgType;
  /** canonicalization requires fixed size encoding here */
  height: string;
  /** canonicalization requires fixed size encoding here */
  round: string;
  block_id?: CanonicalBlockIDAmino;
  timestamp?: TimestampAmino;
  chain_id: string;
}
export interface CanonicalVoteAminoMsg {
  type: "/tendermint.types.CanonicalVote";
  value: CanonicalVoteAmino;
}
export interface CanonicalVoteSDKType {
  type: SignedMsgType;
  height: bigint;
  round: bigint;
  block_id: CanonicalBlockIDSDKType;
  timestamp: TimestampSDKType;
  chain_id: string;
}
function createBaseCanonicalBlockID(): CanonicalBlockID {
  return {
    hash: new Uint8Array(),
    partSetHeader: CanonicalPartSetHeader.fromPartial({})
  };
}
export const CanonicalBlockID = {
  typeUrl: "/tendermint.types.CanonicalBlockID",
  encode(message: CanonicalBlockID, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
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
  },
  fromAmino(object: CanonicalBlockIDAmino): CanonicalBlockID {
    return {
      hash: object.hash,
      partSetHeader: object?.part_set_header ? CanonicalPartSetHeader.fromAmino(object.part_set_header) : undefined
    };
  },
  toAmino(message: CanonicalBlockID): CanonicalBlockIDAmino {
    const obj: any = {};
    obj.hash = message.hash;
    obj.part_set_header = message.partSetHeader ? CanonicalPartSetHeader.toAmino(message.partSetHeader) : undefined;
    return obj;
  },
  fromAminoMsg(object: CanonicalBlockIDAminoMsg): CanonicalBlockID {
    return CanonicalBlockID.fromAmino(object.value);
  },
  fromProtoMsg(message: CanonicalBlockIDProtoMsg): CanonicalBlockID {
    return CanonicalBlockID.decode(message.value);
  },
  toProto(message: CanonicalBlockID): Uint8Array {
    return CanonicalBlockID.encode(message).finish();
  },
  toProtoMsg(message: CanonicalBlockID): CanonicalBlockIDProtoMsg {
    return {
      typeUrl: "/tendermint.types.CanonicalBlockID",
      value: CanonicalBlockID.encode(message).finish()
    };
  }
};
function createBaseCanonicalPartSetHeader(): CanonicalPartSetHeader {
  return {
    total: 0,
    hash: new Uint8Array()
  };
}
export const CanonicalPartSetHeader = {
  typeUrl: "/tendermint.types.CanonicalPartSetHeader",
  encode(message: CanonicalPartSetHeader, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
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
  },
  fromAmino(object: CanonicalPartSetHeaderAmino): CanonicalPartSetHeader {
    return {
      total: object.total,
      hash: object.hash
    };
  },
  toAmino(message: CanonicalPartSetHeader): CanonicalPartSetHeaderAmino {
    const obj: any = {};
    obj.total = message.total;
    obj.hash = message.hash;
    return obj;
  },
  fromAminoMsg(object: CanonicalPartSetHeaderAminoMsg): CanonicalPartSetHeader {
    return CanonicalPartSetHeader.fromAmino(object.value);
  },
  fromProtoMsg(message: CanonicalPartSetHeaderProtoMsg): CanonicalPartSetHeader {
    return CanonicalPartSetHeader.decode(message.value);
  },
  toProto(message: CanonicalPartSetHeader): Uint8Array {
    return CanonicalPartSetHeader.encode(message).finish();
  },
  toProtoMsg(message: CanonicalPartSetHeader): CanonicalPartSetHeaderProtoMsg {
    return {
      typeUrl: "/tendermint.types.CanonicalPartSetHeader",
      value: CanonicalPartSetHeader.encode(message).finish()
    };
  }
};
function createBaseCanonicalProposal(): CanonicalProposal {
  return {
    type: 0,
    height: BigInt(0),
    round: BigInt(0),
    polRound: BigInt(0),
    blockId: CanonicalBlockID.fromPartial({}),
    timestamp: Timestamp.fromPartial({}),
    chainId: ""
  };
}
export const CanonicalProposal = {
  typeUrl: "/tendermint.types.CanonicalProposal",
  encode(message: CanonicalProposal, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.type !== 0) {
      writer.uint32(8).int32(message.type);
    }
    if (message.height !== BigInt(0)) {
      writer.uint32(17).sfixed64(message.height);
    }
    if (message.round !== BigInt(0)) {
      writer.uint32(25).sfixed64(message.round);
    }
    if (message.polRound !== BigInt(0)) {
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
      type: isSet(object.type) ? signedMsgTypeFromJSON(object.type) : -1,
      height: isSet(object.height) ? BigInt(object.height.toString()) : BigInt(0),
      round: isSet(object.round) ? BigInt(object.round.toString()) : BigInt(0),
      polRound: isSet(object.polRound) ? BigInt(object.polRound.toString()) : BigInt(0),
      blockId: isSet(object.blockId) ? CanonicalBlockID.fromJSON(object.blockId) : undefined,
      timestamp: isSet(object.timestamp) ? fromJsonTimestamp(object.timestamp) : undefined,
      chainId: isSet(object.chainId) ? String(object.chainId) : ""
    };
  },
  fromPartial(object: Partial<CanonicalProposal>): CanonicalProposal {
    const message = createBaseCanonicalProposal();
    message.type = object.type ?? 0;
    message.height = object.height !== undefined && object.height !== null ? BigInt(object.height.toString()) : BigInt(0);
    message.round = object.round !== undefined && object.round !== null ? BigInt(object.round.toString()) : BigInt(0);
    message.polRound = object.polRound !== undefined && object.polRound !== null ? BigInt(object.polRound.toString()) : BigInt(0);
    message.blockId = object.blockId !== undefined && object.blockId !== null ? CanonicalBlockID.fromPartial(object.blockId) : undefined;
    message.timestamp = object.timestamp !== undefined && object.timestamp !== null ? Timestamp.fromPartial(object.timestamp) : undefined;
    message.chainId = object.chainId ?? "";
    return message;
  },
  fromAmino(object: CanonicalProposalAmino): CanonicalProposal {
    return {
      type: isSet(object.type) ? signedMsgTypeFromJSON(object.type) : -1,
      height: BigInt(object.height),
      round: BigInt(object.round),
      polRound: BigInt(object.pol_round),
      blockId: object?.block_id ? CanonicalBlockID.fromAmino(object.block_id) : undefined,
      timestamp: object.timestamp,
      chainId: object.chain_id
    };
  },
  toAmino(message: CanonicalProposal): CanonicalProposalAmino {
    const obj: any = {};
    obj.type = message.type;
    obj.height = message.height ? message.height.toString() : undefined;
    obj.round = message.round ? message.round.toString() : undefined;
    obj.pol_round = message.polRound ? message.polRound.toString() : undefined;
    obj.block_id = message.blockId ? CanonicalBlockID.toAmino(message.blockId) : undefined;
    obj.timestamp = message.timestamp;
    obj.chain_id = message.chainId;
    return obj;
  },
  fromAminoMsg(object: CanonicalProposalAminoMsg): CanonicalProposal {
    return CanonicalProposal.fromAmino(object.value);
  },
  fromProtoMsg(message: CanonicalProposalProtoMsg): CanonicalProposal {
    return CanonicalProposal.decode(message.value);
  },
  toProto(message: CanonicalProposal): Uint8Array {
    return CanonicalProposal.encode(message).finish();
  },
  toProtoMsg(message: CanonicalProposal): CanonicalProposalProtoMsg {
    return {
      typeUrl: "/tendermint.types.CanonicalProposal",
      value: CanonicalProposal.encode(message).finish()
    };
  }
};
function createBaseCanonicalVote(): CanonicalVote {
  return {
    type: 0,
    height: BigInt(0),
    round: BigInt(0),
    blockId: CanonicalBlockID.fromPartial({}),
    timestamp: Timestamp.fromPartial({}),
    chainId: ""
  };
}
export const CanonicalVote = {
  typeUrl: "/tendermint.types.CanonicalVote",
  encode(message: CanonicalVote, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.type !== 0) {
      writer.uint32(8).int32(message.type);
    }
    if (message.height !== BigInt(0)) {
      writer.uint32(17).sfixed64(message.height);
    }
    if (message.round !== BigInt(0)) {
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
      type: isSet(object.type) ? signedMsgTypeFromJSON(object.type) : -1,
      height: isSet(object.height) ? BigInt(object.height.toString()) : BigInt(0),
      round: isSet(object.round) ? BigInt(object.round.toString()) : BigInt(0),
      blockId: isSet(object.blockId) ? CanonicalBlockID.fromJSON(object.blockId) : undefined,
      timestamp: isSet(object.timestamp) ? fromJsonTimestamp(object.timestamp) : undefined,
      chainId: isSet(object.chainId) ? String(object.chainId) : ""
    };
  },
  fromPartial(object: Partial<CanonicalVote>): CanonicalVote {
    const message = createBaseCanonicalVote();
    message.type = object.type ?? 0;
    message.height = object.height !== undefined && object.height !== null ? BigInt(object.height.toString()) : BigInt(0);
    message.round = object.round !== undefined && object.round !== null ? BigInt(object.round.toString()) : BigInt(0);
    message.blockId = object.blockId !== undefined && object.blockId !== null ? CanonicalBlockID.fromPartial(object.blockId) : undefined;
    message.timestamp = object.timestamp !== undefined && object.timestamp !== null ? Timestamp.fromPartial(object.timestamp) : undefined;
    message.chainId = object.chainId ?? "";
    return message;
  },
  fromAmino(object: CanonicalVoteAmino): CanonicalVote {
    return {
      type: isSet(object.type) ? signedMsgTypeFromJSON(object.type) : -1,
      height: BigInt(object.height),
      round: BigInt(object.round),
      blockId: object?.block_id ? CanonicalBlockID.fromAmino(object.block_id) : undefined,
      timestamp: object.timestamp,
      chainId: object.chain_id
    };
  },
  toAmino(message: CanonicalVote): CanonicalVoteAmino {
    const obj: any = {};
    obj.type = message.type;
    obj.height = message.height ? message.height.toString() : undefined;
    obj.round = message.round ? message.round.toString() : undefined;
    obj.block_id = message.blockId ? CanonicalBlockID.toAmino(message.blockId) : undefined;
    obj.timestamp = message.timestamp;
    obj.chain_id = message.chainId;
    return obj;
  },
  fromAminoMsg(object: CanonicalVoteAminoMsg): CanonicalVote {
    return CanonicalVote.fromAmino(object.value);
  },
  fromProtoMsg(message: CanonicalVoteProtoMsg): CanonicalVote {
    return CanonicalVote.decode(message.value);
  },
  toProto(message: CanonicalVote): Uint8Array {
    return CanonicalVote.encode(message).finish();
  },
  toProtoMsg(message: CanonicalVote): CanonicalVoteProtoMsg {
    return {
      typeUrl: "/tendermint.types.CanonicalVote",
      value: CanonicalVote.encode(message).finish()
    };
  }
};