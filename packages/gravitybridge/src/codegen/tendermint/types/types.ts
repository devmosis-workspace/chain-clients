import { Proof, ProofSDKType } from "../crypto/proof";
import { Consensus, ConsensusSDKType } from "../version/types";
import { Timestamp, TimestampSDKType } from "../../google/protobuf/timestamp";
import { BitArray, BitArraySDKType } from "../libs/bits/types";
import { Long, isSet, bytesFromBase64, fromJsonTimestamp } from "../../helpers";
import * as _m0 from "protobufjs/minimal";
/** BlockIdFlag indicates which BlcokID the signature is for */
export enum BlockIDFlag {
  BLOCK_ID_FLAG_UNKNOWN = 0,
  BLOCK_ID_FLAG_ABSENT = 1,
  BLOCK_ID_FLAG_COMMIT = 2,
  BLOCK_ID_FLAG_NIL = 3,
  UNRECOGNIZED = -1,
}
export const BlockIDFlagSDKType = BlockIDFlag;
export function blockIDFlagFromJSON(object: any): BlockIDFlag {
  switch (object) {
    case 0:
    case "BLOCK_ID_FLAG_UNKNOWN":
      return BlockIDFlag.BLOCK_ID_FLAG_UNKNOWN;
    case 1:
    case "BLOCK_ID_FLAG_ABSENT":
      return BlockIDFlag.BLOCK_ID_FLAG_ABSENT;
    case 2:
    case "BLOCK_ID_FLAG_COMMIT":
      return BlockIDFlag.BLOCK_ID_FLAG_COMMIT;
    case 3:
    case "BLOCK_ID_FLAG_NIL":
      return BlockIDFlag.BLOCK_ID_FLAG_NIL;
    case -1:
    case "UNRECOGNIZED":
    default:
      return BlockIDFlag.UNRECOGNIZED;
  }
}
export function blockIDFlagToJSON(object: BlockIDFlag): string {
  switch (object) {
    case BlockIDFlag.BLOCK_ID_FLAG_UNKNOWN:
      return "BLOCK_ID_FLAG_UNKNOWN";
    case BlockIDFlag.BLOCK_ID_FLAG_ABSENT:
      return "BLOCK_ID_FLAG_ABSENT";
    case BlockIDFlag.BLOCK_ID_FLAG_COMMIT:
      return "BLOCK_ID_FLAG_COMMIT";
    case BlockIDFlag.BLOCK_ID_FLAG_NIL:
      return "BLOCK_ID_FLAG_NIL";
    case BlockIDFlag.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}
/** SignedMsgType is a type of signed message in the consensus. */
export enum SignedMsgType {
  SIGNED_MSG_TYPE_UNKNOWN = 0,
  /** SIGNED_MSG_TYPE_PREVOTE - Votes */
  SIGNED_MSG_TYPE_PREVOTE = 1,
  SIGNED_MSG_TYPE_PRECOMMIT = 2,
  /** SIGNED_MSG_TYPE_PROPOSAL - Proposals */
  SIGNED_MSG_TYPE_PROPOSAL = 32,
  UNRECOGNIZED = -1,
}
export const SignedMsgTypeSDKType = SignedMsgType;
export function signedMsgTypeFromJSON(object: any): SignedMsgType {
  switch (object) {
    case 0:
    case "SIGNED_MSG_TYPE_UNKNOWN":
      return SignedMsgType.SIGNED_MSG_TYPE_UNKNOWN;
    case 1:
    case "SIGNED_MSG_TYPE_PREVOTE":
      return SignedMsgType.SIGNED_MSG_TYPE_PREVOTE;
    case 2:
    case "SIGNED_MSG_TYPE_PRECOMMIT":
      return SignedMsgType.SIGNED_MSG_TYPE_PRECOMMIT;
    case 32:
    case "SIGNED_MSG_TYPE_PROPOSAL":
      return SignedMsgType.SIGNED_MSG_TYPE_PROPOSAL;
    case -1:
    case "UNRECOGNIZED":
    default:
      return SignedMsgType.UNRECOGNIZED;
  }
}
export function signedMsgTypeToJSON(object: SignedMsgType): string {
  switch (object) {
    case SignedMsgType.SIGNED_MSG_TYPE_UNKNOWN:
      return "SIGNED_MSG_TYPE_UNKNOWN";
    case SignedMsgType.SIGNED_MSG_TYPE_PREVOTE:
      return "SIGNED_MSG_TYPE_PREVOTE";
    case SignedMsgType.SIGNED_MSG_TYPE_PRECOMMIT:
      return "SIGNED_MSG_TYPE_PRECOMMIT";
    case SignedMsgType.SIGNED_MSG_TYPE_PROPOSAL:
      return "SIGNED_MSG_TYPE_PROPOSAL";
    case SignedMsgType.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}
/** PartsetHeader */
export interface PartSetHeader {
  total: number;
  hash: Uint8Array;
}
/** PartsetHeader */
export interface PartSetHeaderSDKType {
  total: number;
  hash: Uint8Array;
}
export interface Part {
  index: number;
  bytes: Uint8Array;
  proof?: Proof;
}
export interface PartSDKType {
  index: number;
  bytes: Uint8Array;
  proof?: ProofSDKType;
}
/** BlockID */
export interface BlockID {
  hash: Uint8Array;
  partSetHeader?: PartSetHeader;
}
/** BlockID */
export interface BlockIDSDKType {
  hash: Uint8Array;
  part_set_header?: PartSetHeaderSDKType;
}
/** Header defines the structure of a Tendermint block header. */
export interface Header {
  /** basic block info */
  version?: Consensus;
  chainId: string;
  height: Long;
  time?: Timestamp;
  /** prev block info */
  lastBlockId?: BlockID;
  /** hashes of block data */
  lastCommitHash: Uint8Array;
  dataHash: Uint8Array;
  /** hashes from the app output from the prev block */
  validatorsHash: Uint8Array;
  /** validators for the next block */
  nextValidatorsHash: Uint8Array;
  /** consensus params for current block */
  consensusHash: Uint8Array;
  /** state after txs from the previous block */
  appHash: Uint8Array;
  lastResultsHash: Uint8Array;
  /** consensus info */
  evidenceHash: Uint8Array;
  /** original proposer of the block */
  proposerAddress: Uint8Array;
}
/** Header defines the structure of a Tendermint block header. */
export interface HeaderSDKType {
  version?: ConsensusSDKType;
  chain_id: string;
  height: Long;
  time?: TimestampSDKType;
  last_block_id?: BlockIDSDKType;
  last_commit_hash: Uint8Array;
  data_hash: Uint8Array;
  validators_hash: Uint8Array;
  next_validators_hash: Uint8Array;
  consensus_hash: Uint8Array;
  app_hash: Uint8Array;
  last_results_hash: Uint8Array;
  evidence_hash: Uint8Array;
  proposer_address: Uint8Array;
}
/** Data contains the set of transactions included in the block */
export interface Data {
  /**
   * Txs that will be applied by state @ block.Height+1.
   * NOTE: not all txs here are valid.  We're just agreeing on the order first.
   * This means that block.AppHash does not include these txs.
   */
  txs: Uint8Array[];
  /** Volatile */
  hash: Uint8Array;
}
/** Data contains the set of transactions included in the block */
export interface DataSDKType {
  txs: Uint8Array[];
  hash: Uint8Array;
}
/**
 * Vote represents a prevote, precommit, or commit vote from validators for
 * consensus.
 */
export interface Vote {
  type: SignedMsgType;
  height: Long;
  round: number;
  blockId?: BlockID;
  timestamp?: Timestamp;
  validatorAddress: Uint8Array;
  validatorIndex: number;
  signature: Uint8Array;
}
/**
 * Vote represents a prevote, precommit, or commit vote from validators for
 * consensus.
 */
export interface VoteSDKType {
  type: SignedMsgType;
  height: Long;
  round: number;
  block_id?: BlockIDSDKType;
  timestamp?: TimestampSDKType;
  validator_address: Uint8Array;
  validator_index: number;
  signature: Uint8Array;
}
/** Commit contains the evidence that a block was committed by a set of validators. */
export interface Commit {
  height: Long;
  round: number;
  blockId?: BlockID;
  signatures: CommitSig[];
  hash: Uint8Array;
  bitArray?: BitArray;
}
/** Commit contains the evidence that a block was committed by a set of validators. */
export interface CommitSDKType {
  height: Long;
  round: number;
  block_id?: BlockIDSDKType;
  signatures: CommitSigSDKType[];
  hash: Uint8Array;
  bit_array?: BitArraySDKType;
}
/** CommitSig is a part of the Vote included in a Commit. */
export interface CommitSig {
  blockIdFlag: BlockIDFlag;
  validatorAddress: Uint8Array;
  timestamp?: Timestamp;
  signature: Uint8Array;
}
/** CommitSig is a part of the Vote included in a Commit. */
export interface CommitSigSDKType {
  block_id_flag: BlockIDFlag;
  validator_address: Uint8Array;
  timestamp?: TimestampSDKType;
  signature: Uint8Array;
}
export interface Proposal {
  type: SignedMsgType;
  height: Long;
  round: number;
  polRound: number;
  blockId?: BlockID;
  timestamp?: Timestamp;
  signature: Uint8Array;
}
export interface ProposalSDKType {
  type: SignedMsgType;
  height: Long;
  round: number;
  pol_round: number;
  block_id?: BlockIDSDKType;
  timestamp?: TimestampSDKType;
  signature: Uint8Array;
}
export interface SignedHeader {
  header?: Header;
  commit?: Commit;
}
export interface SignedHeaderSDKType {
  header?: HeaderSDKType;
  commit?: CommitSDKType;
}
export interface BlockMeta {
  blockId?: BlockID;
  blockSize: Long;
  header?: Header;
  numTxs: Long;
}
export interface BlockMetaSDKType {
  block_id?: BlockIDSDKType;
  block_size: Long;
  header?: HeaderSDKType;
  num_txs: Long;
}
/** TxProof represents a Merkle proof of the presence of a transaction in the Merkle tree. */
export interface TxProof {
  rootHash: Uint8Array;
  data: Uint8Array;
  proof?: Proof;
}
/** TxProof represents a Merkle proof of the presence of a transaction in the Merkle tree. */
export interface TxProofSDKType {
  root_hash: Uint8Array;
  data: Uint8Array;
  proof?: ProofSDKType;
}
function createBasePartSetHeader(): PartSetHeader {
  return {
    total: 0,
    hash: new Uint8Array()
  };
}
export const PartSetHeader = {
  encode(message: PartSetHeader, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.total !== 0) {
      writer.uint32(8).uint32(message.total);
    }
    if (message.hash.length !== 0) {
      writer.uint32(18).bytes(message.hash);
    }
    return writer;
  },
  fromJSON(object: any): PartSetHeader {
    return {
      total: isSet(object.total) ? Number(object.total) : 0,
      hash: isSet(object.hash) ? bytesFromBase64(object.hash) : new Uint8Array()
    };
  },
  fromPartial(object: Partial<PartSetHeader>): PartSetHeader {
    const message = createBasePartSetHeader();
    message.total = object.total ?? 0;
    message.hash = object.hash ?? new Uint8Array();
    return message;
  }
};
function createBasePart(): Part {
  return {
    index: 0,
    bytes: new Uint8Array(),
    proof: undefined
  };
}
export const Part = {
  encode(message: Part, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.index !== 0) {
      writer.uint32(8).uint32(message.index);
    }
    if (message.bytes.length !== 0) {
      writer.uint32(18).bytes(message.bytes);
    }
    if (message.proof !== undefined) {
      Proof.encode(message.proof, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): Part {
    return {
      index: isSet(object.index) ? Number(object.index) : 0,
      bytes: isSet(object.bytes) ? bytesFromBase64(object.bytes) : new Uint8Array(),
      proof: isSet(object.proof) ? Proof.fromJSON(object.proof) : undefined
    };
  },
  fromPartial(object: Partial<Part>): Part {
    const message = createBasePart();
    message.index = object.index ?? 0;
    message.bytes = object.bytes ?? new Uint8Array();
    message.proof = object.proof !== undefined && object.proof !== null ? Proof.fromPartial(object.proof) : undefined;
    return message;
  }
};
function createBaseBlockID(): BlockID {
  return {
    hash: new Uint8Array(),
    partSetHeader: undefined
  };
}
export const BlockID = {
  encode(message: BlockID, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.hash.length !== 0) {
      writer.uint32(10).bytes(message.hash);
    }
    if (message.partSetHeader !== undefined) {
      PartSetHeader.encode(message.partSetHeader, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): BlockID {
    return {
      hash: isSet(object.hash) ? bytesFromBase64(object.hash) : new Uint8Array(),
      partSetHeader: isSet(object.partSetHeader) ? PartSetHeader.fromJSON(object.partSetHeader) : undefined
    };
  },
  fromPartial(object: Partial<BlockID>): BlockID {
    const message = createBaseBlockID();
    message.hash = object.hash ?? new Uint8Array();
    message.partSetHeader = object.partSetHeader !== undefined && object.partSetHeader !== null ? PartSetHeader.fromPartial(object.partSetHeader) : undefined;
    return message;
  }
};
function createBaseHeader(): Header {
  return {
    version: undefined,
    chainId: "",
    height: Long.ZERO,
    time: undefined,
    lastBlockId: undefined,
    lastCommitHash: new Uint8Array(),
    dataHash: new Uint8Array(),
    validatorsHash: new Uint8Array(),
    nextValidatorsHash: new Uint8Array(),
    consensusHash: new Uint8Array(),
    appHash: new Uint8Array(),
    lastResultsHash: new Uint8Array(),
    evidenceHash: new Uint8Array(),
    proposerAddress: new Uint8Array()
  };
}
export const Header = {
  encode(message: Header, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.version !== undefined) {
      Consensus.encode(message.version, writer.uint32(10).fork()).ldelim();
    }
    if (message.chainId !== "") {
      writer.uint32(18).string(message.chainId);
    }
    if (!message.height.isZero()) {
      writer.uint32(24).int64(message.height);
    }
    if (message.time !== undefined) {
      Timestamp.encode(message.time, writer.uint32(34).fork()).ldelim();
    }
    if (message.lastBlockId !== undefined) {
      BlockID.encode(message.lastBlockId, writer.uint32(42).fork()).ldelim();
    }
    if (message.lastCommitHash.length !== 0) {
      writer.uint32(50).bytes(message.lastCommitHash);
    }
    if (message.dataHash.length !== 0) {
      writer.uint32(58).bytes(message.dataHash);
    }
    if (message.validatorsHash.length !== 0) {
      writer.uint32(66).bytes(message.validatorsHash);
    }
    if (message.nextValidatorsHash.length !== 0) {
      writer.uint32(74).bytes(message.nextValidatorsHash);
    }
    if (message.consensusHash.length !== 0) {
      writer.uint32(82).bytes(message.consensusHash);
    }
    if (message.appHash.length !== 0) {
      writer.uint32(90).bytes(message.appHash);
    }
    if (message.lastResultsHash.length !== 0) {
      writer.uint32(98).bytes(message.lastResultsHash);
    }
    if (message.evidenceHash.length !== 0) {
      writer.uint32(106).bytes(message.evidenceHash);
    }
    if (message.proposerAddress.length !== 0) {
      writer.uint32(114).bytes(message.proposerAddress);
    }
    return writer;
  },
  fromJSON(object: any): Header {
    return {
      version: isSet(object.version) ? Consensus.fromJSON(object.version) : undefined,
      chainId: isSet(object.chainId) ? String(object.chainId) : "",
      height: isSet(object.height) ? Long.fromValue(object.height) : Long.ZERO,
      time: isSet(object.time) ? fromJsonTimestamp(object.time) : undefined,
      lastBlockId: isSet(object.lastBlockId) ? BlockID.fromJSON(object.lastBlockId) : undefined,
      lastCommitHash: isSet(object.lastCommitHash) ? bytesFromBase64(object.lastCommitHash) : new Uint8Array(),
      dataHash: isSet(object.dataHash) ? bytesFromBase64(object.dataHash) : new Uint8Array(),
      validatorsHash: isSet(object.validatorsHash) ? bytesFromBase64(object.validatorsHash) : new Uint8Array(),
      nextValidatorsHash: isSet(object.nextValidatorsHash) ? bytesFromBase64(object.nextValidatorsHash) : new Uint8Array(),
      consensusHash: isSet(object.consensusHash) ? bytesFromBase64(object.consensusHash) : new Uint8Array(),
      appHash: isSet(object.appHash) ? bytesFromBase64(object.appHash) : new Uint8Array(),
      lastResultsHash: isSet(object.lastResultsHash) ? bytesFromBase64(object.lastResultsHash) : new Uint8Array(),
      evidenceHash: isSet(object.evidenceHash) ? bytesFromBase64(object.evidenceHash) : new Uint8Array(),
      proposerAddress: isSet(object.proposerAddress) ? bytesFromBase64(object.proposerAddress) : new Uint8Array()
    };
  },
  fromPartial(object: Partial<Header>): Header {
    const message = createBaseHeader();
    message.version = object.version !== undefined && object.version !== null ? Consensus.fromPartial(object.version) : undefined;
    message.chainId = object.chainId ?? "";
    message.height = object.height !== undefined && object.height !== null ? Long.fromValue(object.height) : Long.ZERO;
    message.time = object.time !== undefined && object.time !== null ? Timestamp.fromPartial(object.time) : undefined;
    message.lastBlockId = object.lastBlockId !== undefined && object.lastBlockId !== null ? BlockID.fromPartial(object.lastBlockId) : undefined;
    message.lastCommitHash = object.lastCommitHash ?? new Uint8Array();
    message.dataHash = object.dataHash ?? new Uint8Array();
    message.validatorsHash = object.validatorsHash ?? new Uint8Array();
    message.nextValidatorsHash = object.nextValidatorsHash ?? new Uint8Array();
    message.consensusHash = object.consensusHash ?? new Uint8Array();
    message.appHash = object.appHash ?? new Uint8Array();
    message.lastResultsHash = object.lastResultsHash ?? new Uint8Array();
    message.evidenceHash = object.evidenceHash ?? new Uint8Array();
    message.proposerAddress = object.proposerAddress ?? new Uint8Array();
    return message;
  }
};
function createBaseData(): Data {
  return {
    txs: [],
    hash: new Uint8Array()
  };
}
export const Data = {
  encode(message: Data, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.txs) {
      writer.uint32(10).bytes(v!);
    }
    if (message.hash.length !== 0) {
      writer.uint32(18).bytes(message.hash);
    }
    return writer;
  },
  fromJSON(object: any): Data {
    return {
      txs: Array.isArray(object?.txs) ? object.txs.map((e: any) => bytesFromBase64(e)) : [],
      hash: isSet(object.hash) ? bytesFromBase64(object.hash) : new Uint8Array()
    };
  },
  fromPartial(object: Partial<Data>): Data {
    const message = createBaseData();
    message.txs = object.txs?.map(e => e) || [];
    message.hash = object.hash ?? new Uint8Array();
    return message;
  }
};
function createBaseVote(): Vote {
  return {
    type: 0,
    height: Long.ZERO,
    round: 0,
    blockId: undefined,
    timestamp: undefined,
    validatorAddress: new Uint8Array(),
    validatorIndex: 0,
    signature: new Uint8Array()
  };
}
export const Vote = {
  encode(message: Vote, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.type !== 0) {
      writer.uint32(8).int32(message.type);
    }
    if (!message.height.isZero()) {
      writer.uint32(16).int64(message.height);
    }
    if (message.round !== 0) {
      writer.uint32(24).int32(message.round);
    }
    if (message.blockId !== undefined) {
      BlockID.encode(message.blockId, writer.uint32(34).fork()).ldelim();
    }
    if (message.timestamp !== undefined) {
      Timestamp.encode(message.timestamp, writer.uint32(42).fork()).ldelim();
    }
    if (message.validatorAddress.length !== 0) {
      writer.uint32(50).bytes(message.validatorAddress);
    }
    if (message.validatorIndex !== 0) {
      writer.uint32(56).int32(message.validatorIndex);
    }
    if (message.signature.length !== 0) {
      writer.uint32(66).bytes(message.signature);
    }
    return writer;
  },
  fromJSON(object: any): Vote {
    return {
      type: isSet(object.type) ? signedMsgTypeFromJSON(object.type) : 0,
      height: isSet(object.height) ? Long.fromValue(object.height) : Long.ZERO,
      round: isSet(object.round) ? Number(object.round) : 0,
      blockId: isSet(object.blockId) ? BlockID.fromJSON(object.blockId) : undefined,
      timestamp: isSet(object.timestamp) ? fromJsonTimestamp(object.timestamp) : undefined,
      validatorAddress: isSet(object.validatorAddress) ? bytesFromBase64(object.validatorAddress) : new Uint8Array(),
      validatorIndex: isSet(object.validatorIndex) ? Number(object.validatorIndex) : 0,
      signature: isSet(object.signature) ? bytesFromBase64(object.signature) : new Uint8Array()
    };
  },
  fromPartial(object: Partial<Vote>): Vote {
    const message = createBaseVote();
    message.type = object.type ?? 0;
    message.height = object.height !== undefined && object.height !== null ? Long.fromValue(object.height) : Long.ZERO;
    message.round = object.round ?? 0;
    message.blockId = object.blockId !== undefined && object.blockId !== null ? BlockID.fromPartial(object.blockId) : undefined;
    message.timestamp = object.timestamp !== undefined && object.timestamp !== null ? Timestamp.fromPartial(object.timestamp) : undefined;
    message.validatorAddress = object.validatorAddress ?? new Uint8Array();
    message.validatorIndex = object.validatorIndex ?? 0;
    message.signature = object.signature ?? new Uint8Array();
    return message;
  }
};
function createBaseCommit(): Commit {
  return {
    height: Long.ZERO,
    round: 0,
    blockId: undefined,
    signatures: [],
    hash: new Uint8Array(),
    bitArray: undefined
  };
}
export const Commit = {
  encode(message: Commit, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.height.isZero()) {
      writer.uint32(8).int64(message.height);
    }
    if (message.round !== 0) {
      writer.uint32(16).int32(message.round);
    }
    if (message.blockId !== undefined) {
      BlockID.encode(message.blockId, writer.uint32(26).fork()).ldelim();
    }
    for (const v of message.signatures) {
      CommitSig.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    if (message.hash.length !== 0) {
      writer.uint32(42).bytes(message.hash);
    }
    if (message.bitArray !== undefined) {
      BitArray.encode(message.bitArray, writer.uint32(50).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): Commit {
    return {
      height: isSet(object.height) ? Long.fromValue(object.height) : Long.ZERO,
      round: isSet(object.round) ? Number(object.round) : 0,
      blockId: isSet(object.blockId) ? BlockID.fromJSON(object.blockId) : undefined,
      signatures: Array.isArray(object?.signatures) ? object.signatures.map((e: any) => CommitSig.fromJSON(e)) : [],
      hash: isSet(object.hash) ? bytesFromBase64(object.hash) : new Uint8Array(),
      bitArray: isSet(object.bitArray) ? BitArray.fromJSON(object.bitArray) : undefined
    };
  },
  fromPartial(object: Partial<Commit>): Commit {
    const message = createBaseCommit();
    message.height = object.height !== undefined && object.height !== null ? Long.fromValue(object.height) : Long.ZERO;
    message.round = object.round ?? 0;
    message.blockId = object.blockId !== undefined && object.blockId !== null ? BlockID.fromPartial(object.blockId) : undefined;
    message.signatures = object.signatures?.map(e => CommitSig.fromPartial(e)) || [];
    message.hash = object.hash ?? new Uint8Array();
    message.bitArray = object.bitArray !== undefined && object.bitArray !== null ? BitArray.fromPartial(object.bitArray) : undefined;
    return message;
  }
};
function createBaseCommitSig(): CommitSig {
  return {
    blockIdFlag: 0,
    validatorAddress: new Uint8Array(),
    timestamp: undefined,
    signature: new Uint8Array()
  };
}
export const CommitSig = {
  encode(message: CommitSig, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.blockIdFlag !== 0) {
      writer.uint32(8).int32(message.blockIdFlag);
    }
    if (message.validatorAddress.length !== 0) {
      writer.uint32(18).bytes(message.validatorAddress);
    }
    if (message.timestamp !== undefined) {
      Timestamp.encode(message.timestamp, writer.uint32(26).fork()).ldelim();
    }
    if (message.signature.length !== 0) {
      writer.uint32(34).bytes(message.signature);
    }
    return writer;
  },
  fromJSON(object: any): CommitSig {
    return {
      blockIdFlag: isSet(object.blockIdFlag) ? blockIDFlagFromJSON(object.blockIdFlag) : 0,
      validatorAddress: isSet(object.validatorAddress) ? bytesFromBase64(object.validatorAddress) : new Uint8Array(),
      timestamp: isSet(object.timestamp) ? fromJsonTimestamp(object.timestamp) : undefined,
      signature: isSet(object.signature) ? bytesFromBase64(object.signature) : new Uint8Array()
    };
  },
  fromPartial(object: Partial<CommitSig>): CommitSig {
    const message = createBaseCommitSig();
    message.blockIdFlag = object.blockIdFlag ?? 0;
    message.validatorAddress = object.validatorAddress ?? new Uint8Array();
    message.timestamp = object.timestamp !== undefined && object.timestamp !== null ? Timestamp.fromPartial(object.timestamp) : undefined;
    message.signature = object.signature ?? new Uint8Array();
    return message;
  }
};
function createBaseProposal(): Proposal {
  return {
    type: 0,
    height: Long.ZERO,
    round: 0,
    polRound: 0,
    blockId: undefined,
    timestamp: undefined,
    signature: new Uint8Array()
  };
}
export const Proposal = {
  encode(message: Proposal, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.type !== 0) {
      writer.uint32(8).int32(message.type);
    }
    if (!message.height.isZero()) {
      writer.uint32(16).int64(message.height);
    }
    if (message.round !== 0) {
      writer.uint32(24).int32(message.round);
    }
    if (message.polRound !== 0) {
      writer.uint32(32).int32(message.polRound);
    }
    if (message.blockId !== undefined) {
      BlockID.encode(message.blockId, writer.uint32(42).fork()).ldelim();
    }
    if (message.timestamp !== undefined) {
      Timestamp.encode(message.timestamp, writer.uint32(50).fork()).ldelim();
    }
    if (message.signature.length !== 0) {
      writer.uint32(58).bytes(message.signature);
    }
    return writer;
  },
  fromJSON(object: any): Proposal {
    return {
      type: isSet(object.type) ? signedMsgTypeFromJSON(object.type) : 0,
      height: isSet(object.height) ? Long.fromValue(object.height) : Long.ZERO,
      round: isSet(object.round) ? Number(object.round) : 0,
      polRound: isSet(object.polRound) ? Number(object.polRound) : 0,
      blockId: isSet(object.blockId) ? BlockID.fromJSON(object.blockId) : undefined,
      timestamp: isSet(object.timestamp) ? fromJsonTimestamp(object.timestamp) : undefined,
      signature: isSet(object.signature) ? bytesFromBase64(object.signature) : new Uint8Array()
    };
  },
  fromPartial(object: Partial<Proposal>): Proposal {
    const message = createBaseProposal();
    message.type = object.type ?? 0;
    message.height = object.height !== undefined && object.height !== null ? Long.fromValue(object.height) : Long.ZERO;
    message.round = object.round ?? 0;
    message.polRound = object.polRound ?? 0;
    message.blockId = object.blockId !== undefined && object.blockId !== null ? BlockID.fromPartial(object.blockId) : undefined;
    message.timestamp = object.timestamp !== undefined && object.timestamp !== null ? Timestamp.fromPartial(object.timestamp) : undefined;
    message.signature = object.signature ?? new Uint8Array();
    return message;
  }
};
function createBaseSignedHeader(): SignedHeader {
  return {
    header: undefined,
    commit: undefined
  };
}
export const SignedHeader = {
  encode(message: SignedHeader, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.header !== undefined) {
      Header.encode(message.header, writer.uint32(10).fork()).ldelim();
    }
    if (message.commit !== undefined) {
      Commit.encode(message.commit, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): SignedHeader {
    return {
      header: isSet(object.header) ? Header.fromJSON(object.header) : undefined,
      commit: isSet(object.commit) ? Commit.fromJSON(object.commit) : undefined
    };
  },
  fromPartial(object: Partial<SignedHeader>): SignedHeader {
    const message = createBaseSignedHeader();
    message.header = object.header !== undefined && object.header !== null ? Header.fromPartial(object.header) : undefined;
    message.commit = object.commit !== undefined && object.commit !== null ? Commit.fromPartial(object.commit) : undefined;
    return message;
  }
};
function createBaseBlockMeta(): BlockMeta {
  return {
    blockId: undefined,
    blockSize: Long.ZERO,
    header: undefined,
    numTxs: Long.ZERO
  };
}
export const BlockMeta = {
  encode(message: BlockMeta, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.blockId !== undefined) {
      BlockID.encode(message.blockId, writer.uint32(10).fork()).ldelim();
    }
    if (!message.blockSize.isZero()) {
      writer.uint32(16).int64(message.blockSize);
    }
    if (message.header !== undefined) {
      Header.encode(message.header, writer.uint32(26).fork()).ldelim();
    }
    if (!message.numTxs.isZero()) {
      writer.uint32(32).int64(message.numTxs);
    }
    return writer;
  },
  fromJSON(object: any): BlockMeta {
    return {
      blockId: isSet(object.blockId) ? BlockID.fromJSON(object.blockId) : undefined,
      blockSize: isSet(object.blockSize) ? Long.fromValue(object.blockSize) : Long.ZERO,
      header: isSet(object.header) ? Header.fromJSON(object.header) : undefined,
      numTxs: isSet(object.numTxs) ? Long.fromValue(object.numTxs) : Long.ZERO
    };
  },
  fromPartial(object: Partial<BlockMeta>): BlockMeta {
    const message = createBaseBlockMeta();
    message.blockId = object.blockId !== undefined && object.blockId !== null ? BlockID.fromPartial(object.blockId) : undefined;
    message.blockSize = object.blockSize !== undefined && object.blockSize !== null ? Long.fromValue(object.blockSize) : Long.ZERO;
    message.header = object.header !== undefined && object.header !== null ? Header.fromPartial(object.header) : undefined;
    message.numTxs = object.numTxs !== undefined && object.numTxs !== null ? Long.fromValue(object.numTxs) : Long.ZERO;
    return message;
  }
};
function createBaseTxProof(): TxProof {
  return {
    rootHash: new Uint8Array(),
    data: new Uint8Array(),
    proof: undefined
  };
}
export const TxProof = {
  encode(message: TxProof, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.rootHash.length !== 0) {
      writer.uint32(10).bytes(message.rootHash);
    }
    if (message.data.length !== 0) {
      writer.uint32(18).bytes(message.data);
    }
    if (message.proof !== undefined) {
      Proof.encode(message.proof, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): TxProof {
    return {
      rootHash: isSet(object.rootHash) ? bytesFromBase64(object.rootHash) : new Uint8Array(),
      data: isSet(object.data) ? bytesFromBase64(object.data) : new Uint8Array(),
      proof: isSet(object.proof) ? Proof.fromJSON(object.proof) : undefined
    };
  },
  fromPartial(object: Partial<TxProof>): TxProof {
    const message = createBaseTxProof();
    message.rootHash = object.rootHash ?? new Uint8Array();
    message.data = object.data ?? new Uint8Array();
    message.proof = object.proof !== undefined && object.proof !== null ? Proof.fromPartial(object.proof) : undefined;
    return message;
  }
};