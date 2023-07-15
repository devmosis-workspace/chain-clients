import { Timestamp, TimestampSDKType } from "../../google/protobuf/timestamp";
import { Header, HeaderSDKType } from "../types/types";
import { ProofOps, ProofOpsSDKType } from "../crypto/proof";
import { EvidenceParams, EvidenceParamsSDKType, ValidatorParams, ValidatorParamsSDKType, VersionParams, VersionParamsSDKType } from "../types/params";
import { PublicKey, PublicKeySDKType } from "../crypto/keys";
import { Long, isSet, fromJsonTimestamp, bytesFromBase64 } from "../../helpers";
import * as _m0 from "protobufjs/minimal";
export enum CheckTxType {
  NEW = 0,
  RECHECK = 1,
  UNRECOGNIZED = -1,
}
export const CheckTxTypeSDKType = CheckTxType;
export function checkTxTypeFromJSON(object: any): CheckTxType {
  switch (object) {
    case 0:
    case "NEW":
      return CheckTxType.NEW;
    case 1:
    case "RECHECK":
      return CheckTxType.RECHECK;
    case -1:
    case "UNRECOGNIZED":
    default:
      return CheckTxType.UNRECOGNIZED;
  }
}
export function checkTxTypeToJSON(object: CheckTxType): string {
  switch (object) {
    case CheckTxType.NEW:
      return "NEW";
    case CheckTxType.RECHECK:
      return "RECHECK";
    case CheckTxType.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}
export enum ResponseOfferSnapshot_Result {
  /** UNKNOWN - Unknown result, abort all snapshot restoration */
  UNKNOWN = 0,
  /** ACCEPT - Snapshot accepted, apply chunks */
  ACCEPT = 1,
  /** ABORT - Abort all snapshot restoration */
  ABORT = 2,
  /** REJECT - Reject this specific snapshot, try others */
  REJECT = 3,
  /** REJECT_FORMAT - Reject all snapshots of this format, try others */
  REJECT_FORMAT = 4,
  /** REJECT_SENDER - Reject all snapshots from the sender(s), try others */
  REJECT_SENDER = 5,
  UNRECOGNIZED = -1,
}
export const ResponseOfferSnapshot_ResultSDKType = ResponseOfferSnapshot_Result;
export function responseOfferSnapshot_ResultFromJSON(object: any): ResponseOfferSnapshot_Result {
  switch (object) {
    case 0:
    case "UNKNOWN":
      return ResponseOfferSnapshot_Result.UNKNOWN;
    case 1:
    case "ACCEPT":
      return ResponseOfferSnapshot_Result.ACCEPT;
    case 2:
    case "ABORT":
      return ResponseOfferSnapshot_Result.ABORT;
    case 3:
    case "REJECT":
      return ResponseOfferSnapshot_Result.REJECT;
    case 4:
    case "REJECT_FORMAT":
      return ResponseOfferSnapshot_Result.REJECT_FORMAT;
    case 5:
    case "REJECT_SENDER":
      return ResponseOfferSnapshot_Result.REJECT_SENDER;
    case -1:
    case "UNRECOGNIZED":
    default:
      return ResponseOfferSnapshot_Result.UNRECOGNIZED;
  }
}
export function responseOfferSnapshot_ResultToJSON(object: ResponseOfferSnapshot_Result): string {
  switch (object) {
    case ResponseOfferSnapshot_Result.UNKNOWN:
      return "UNKNOWN";
    case ResponseOfferSnapshot_Result.ACCEPT:
      return "ACCEPT";
    case ResponseOfferSnapshot_Result.ABORT:
      return "ABORT";
    case ResponseOfferSnapshot_Result.REJECT:
      return "REJECT";
    case ResponseOfferSnapshot_Result.REJECT_FORMAT:
      return "REJECT_FORMAT";
    case ResponseOfferSnapshot_Result.REJECT_SENDER:
      return "REJECT_SENDER";
    case ResponseOfferSnapshot_Result.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}
export enum ResponseApplySnapshotChunk_Result {
  /** UNKNOWN - Unknown result, abort all snapshot restoration */
  UNKNOWN = 0,
  /** ACCEPT - Chunk successfully accepted */
  ACCEPT = 1,
  /** ABORT - Abort all snapshot restoration */
  ABORT = 2,
  /** RETRY - Retry chunk (combine with refetch and reject) */
  RETRY = 3,
  /** RETRY_SNAPSHOT - Retry snapshot (combine with refetch and reject) */
  RETRY_SNAPSHOT = 4,
  /** REJECT_SNAPSHOT - Reject this snapshot, try others */
  REJECT_SNAPSHOT = 5,
  UNRECOGNIZED = -1,
}
export const ResponseApplySnapshotChunk_ResultSDKType = ResponseApplySnapshotChunk_Result;
export function responseApplySnapshotChunk_ResultFromJSON(object: any): ResponseApplySnapshotChunk_Result {
  switch (object) {
    case 0:
    case "UNKNOWN":
      return ResponseApplySnapshotChunk_Result.UNKNOWN;
    case 1:
    case "ACCEPT":
      return ResponseApplySnapshotChunk_Result.ACCEPT;
    case 2:
    case "ABORT":
      return ResponseApplySnapshotChunk_Result.ABORT;
    case 3:
    case "RETRY":
      return ResponseApplySnapshotChunk_Result.RETRY;
    case 4:
    case "RETRY_SNAPSHOT":
      return ResponseApplySnapshotChunk_Result.RETRY_SNAPSHOT;
    case 5:
    case "REJECT_SNAPSHOT":
      return ResponseApplySnapshotChunk_Result.REJECT_SNAPSHOT;
    case -1:
    case "UNRECOGNIZED":
    default:
      return ResponseApplySnapshotChunk_Result.UNRECOGNIZED;
  }
}
export function responseApplySnapshotChunk_ResultToJSON(object: ResponseApplySnapshotChunk_Result): string {
  switch (object) {
    case ResponseApplySnapshotChunk_Result.UNKNOWN:
      return "UNKNOWN";
    case ResponseApplySnapshotChunk_Result.ACCEPT:
      return "ACCEPT";
    case ResponseApplySnapshotChunk_Result.ABORT:
      return "ABORT";
    case ResponseApplySnapshotChunk_Result.RETRY:
      return "RETRY";
    case ResponseApplySnapshotChunk_Result.RETRY_SNAPSHOT:
      return "RETRY_SNAPSHOT";
    case ResponseApplySnapshotChunk_Result.REJECT_SNAPSHOT:
      return "REJECT_SNAPSHOT";
    case ResponseApplySnapshotChunk_Result.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}
export enum EvidenceType {
  UNKNOWN = 0,
  DUPLICATE_VOTE = 1,
  LIGHT_CLIENT_ATTACK = 2,
  UNRECOGNIZED = -1,
}
export const EvidenceTypeSDKType = EvidenceType;
export function evidenceTypeFromJSON(object: any): EvidenceType {
  switch (object) {
    case 0:
    case "UNKNOWN":
      return EvidenceType.UNKNOWN;
    case 1:
    case "DUPLICATE_VOTE":
      return EvidenceType.DUPLICATE_VOTE;
    case 2:
    case "LIGHT_CLIENT_ATTACK":
      return EvidenceType.LIGHT_CLIENT_ATTACK;
    case -1:
    case "UNRECOGNIZED":
    default:
      return EvidenceType.UNRECOGNIZED;
  }
}
export function evidenceTypeToJSON(object: EvidenceType): string {
  switch (object) {
    case EvidenceType.UNKNOWN:
      return "UNKNOWN";
    case EvidenceType.DUPLICATE_VOTE:
      return "DUPLICATE_VOTE";
    case EvidenceType.LIGHT_CLIENT_ATTACK:
      return "LIGHT_CLIENT_ATTACK";
    case EvidenceType.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}
export interface Request {
  echo?: RequestEcho;
  flush?: RequestFlush;
  info?: RequestInfo;
  setOption?: RequestSetOption;
  initChain?: RequestInitChain;
  query?: RequestQuery;
  beginBlock?: RequestBeginBlock;
  checkTx?: RequestCheckTx;
  deliverTx?: RequestDeliverTx;
  endBlock?: RequestEndBlock;
  commit?: RequestCommit;
  listSnapshots?: RequestListSnapshots;
  offerSnapshot?: RequestOfferSnapshot;
  loadSnapshotChunk?: RequestLoadSnapshotChunk;
  applySnapshotChunk?: RequestApplySnapshotChunk;
}
export interface RequestSDKType {
  echo?: RequestEchoSDKType;
  flush?: RequestFlushSDKType;
  info?: RequestInfoSDKType;
  set_option?: RequestSetOptionSDKType;
  init_chain?: RequestInitChainSDKType;
  query?: RequestQuerySDKType;
  begin_block?: RequestBeginBlockSDKType;
  check_tx?: RequestCheckTxSDKType;
  deliver_tx?: RequestDeliverTxSDKType;
  end_block?: RequestEndBlockSDKType;
  commit?: RequestCommitSDKType;
  list_snapshots?: RequestListSnapshotsSDKType;
  offer_snapshot?: RequestOfferSnapshotSDKType;
  load_snapshot_chunk?: RequestLoadSnapshotChunkSDKType;
  apply_snapshot_chunk?: RequestApplySnapshotChunkSDKType;
}
export interface RequestEcho {
  message: string;
}
export interface RequestEchoSDKType {
  message: string;
}
export interface RequestFlush {}
export interface RequestFlushSDKType {}
export interface RequestInfo {
  version: string;
  blockVersion: Long;
  p2pVersion: Long;
}
export interface RequestInfoSDKType {
  version: string;
  block_version: Long;
  p2p_version: Long;
}
/** nondeterministic */
export interface RequestSetOption {
  key: string;
  value: string;
}
/** nondeterministic */
export interface RequestSetOptionSDKType {
  key: string;
  value: string;
}
export interface RequestInitChain {
  time?: Timestamp;
  chainId: string;
  consensusParams?: ConsensusParams;
  validators: ValidatorUpdate[];
  appStateBytes: Uint8Array;
  initialHeight: Long;
}
export interface RequestInitChainSDKType {
  time?: TimestampSDKType;
  chain_id: string;
  consensus_params?: ConsensusParamsSDKType;
  validators: ValidatorUpdateSDKType[];
  app_state_bytes: Uint8Array;
  initial_height: Long;
}
export interface RequestQuery {
  data: Uint8Array;
  path: string;
  height: Long;
  prove: boolean;
}
export interface RequestQuerySDKType {
  data: Uint8Array;
  path: string;
  height: Long;
  prove: boolean;
}
export interface RequestBeginBlock {
  hash: Uint8Array;
  header?: Header;
  lastCommitInfo?: LastCommitInfo;
  byzantineValidators: Evidence[];
}
export interface RequestBeginBlockSDKType {
  hash: Uint8Array;
  header?: HeaderSDKType;
  last_commit_info?: LastCommitInfoSDKType;
  byzantine_validators: EvidenceSDKType[];
}
export interface RequestCheckTx {
  tx: Uint8Array;
  type: CheckTxType;
}
export interface RequestCheckTxSDKType {
  tx: Uint8Array;
  type: CheckTxType;
}
export interface RequestDeliverTx {
  tx: Uint8Array;
}
export interface RequestDeliverTxSDKType {
  tx: Uint8Array;
}
export interface RequestEndBlock {
  height: Long;
}
export interface RequestEndBlockSDKType {
  height: Long;
}
export interface RequestCommit {}
export interface RequestCommitSDKType {}
/** lists available snapshots */
export interface RequestListSnapshots {}
/** lists available snapshots */
export interface RequestListSnapshotsSDKType {}
/** offers a snapshot to the application */
export interface RequestOfferSnapshot {
  /** snapshot offered by peers */
  snapshot?: Snapshot;
  /** light client-verified app hash for snapshot height */
  appHash: Uint8Array;
}
/** offers a snapshot to the application */
export interface RequestOfferSnapshotSDKType {
  snapshot?: SnapshotSDKType;
  app_hash: Uint8Array;
}
/** loads a snapshot chunk */
export interface RequestLoadSnapshotChunk {
  height: Long;
  format: number;
  chunk: number;
}
/** loads a snapshot chunk */
export interface RequestLoadSnapshotChunkSDKType {
  height: Long;
  format: number;
  chunk: number;
}
/** Applies a snapshot chunk */
export interface RequestApplySnapshotChunk {
  index: number;
  chunk: Uint8Array;
  sender: string;
}
/** Applies a snapshot chunk */
export interface RequestApplySnapshotChunkSDKType {
  index: number;
  chunk: Uint8Array;
  sender: string;
}
export interface Response {
  exception?: ResponseException;
  echo?: ResponseEcho;
  flush?: ResponseFlush;
  info?: ResponseInfo;
  setOption?: ResponseSetOption;
  initChain?: ResponseInitChain;
  query?: ResponseQuery;
  beginBlock?: ResponseBeginBlock;
  checkTx?: ResponseCheckTx;
  deliverTx?: ResponseDeliverTx;
  endBlock?: ResponseEndBlock;
  commit?: ResponseCommit;
  listSnapshots?: ResponseListSnapshots;
  offerSnapshot?: ResponseOfferSnapshot;
  loadSnapshotChunk?: ResponseLoadSnapshotChunk;
  applySnapshotChunk?: ResponseApplySnapshotChunk;
}
export interface ResponseSDKType {
  exception?: ResponseExceptionSDKType;
  echo?: ResponseEchoSDKType;
  flush?: ResponseFlushSDKType;
  info?: ResponseInfoSDKType;
  set_option?: ResponseSetOptionSDKType;
  init_chain?: ResponseInitChainSDKType;
  query?: ResponseQuerySDKType;
  begin_block?: ResponseBeginBlockSDKType;
  check_tx?: ResponseCheckTxSDKType;
  deliver_tx?: ResponseDeliverTxSDKType;
  end_block?: ResponseEndBlockSDKType;
  commit?: ResponseCommitSDKType;
  list_snapshots?: ResponseListSnapshotsSDKType;
  offer_snapshot?: ResponseOfferSnapshotSDKType;
  load_snapshot_chunk?: ResponseLoadSnapshotChunkSDKType;
  apply_snapshot_chunk?: ResponseApplySnapshotChunkSDKType;
}
/** nondeterministic */
export interface ResponseException {
  error: string;
}
/** nondeterministic */
export interface ResponseExceptionSDKType {
  error: string;
}
export interface ResponseEcho {
  message: string;
}
export interface ResponseEchoSDKType {
  message: string;
}
export interface ResponseFlush {}
export interface ResponseFlushSDKType {}
export interface ResponseInfo {
  data: string;
  version: string;
  appVersion: Long;
  lastBlockHeight: Long;
  lastBlockAppHash: Uint8Array;
}
export interface ResponseInfoSDKType {
  data: string;
  version: string;
  app_version: Long;
  last_block_height: Long;
  last_block_app_hash: Uint8Array;
}
/** nondeterministic */
export interface ResponseSetOption {
  code: number;
  /** bytes data = 2; */
  log: string;
  info: string;
}
/** nondeterministic */
export interface ResponseSetOptionSDKType {
  code: number;
  log: string;
  info: string;
}
export interface ResponseInitChain {
  consensusParams?: ConsensusParams;
  validators: ValidatorUpdate[];
  appHash: Uint8Array;
}
export interface ResponseInitChainSDKType {
  consensus_params?: ConsensusParamsSDKType;
  validators: ValidatorUpdateSDKType[];
  app_hash: Uint8Array;
}
export interface ResponseQuery {
  code: number;
  /** bytes data = 2; // use "value" instead. */
  log: string;
  /** nondeterministic */
  info: string;
  index: Long;
  key: Uint8Array;
  value: Uint8Array;
  proofOps?: ProofOps;
  height: Long;
  codespace: string;
}
export interface ResponseQuerySDKType {
  code: number;
  log: string;
  info: string;
  index: Long;
  key: Uint8Array;
  value: Uint8Array;
  proof_ops?: ProofOpsSDKType;
  height: Long;
  codespace: string;
}
export interface ResponseBeginBlock {
  events: Event[];
}
export interface ResponseBeginBlockSDKType {
  events: EventSDKType[];
}
export interface ResponseCheckTx {
  code: number;
  data: Uint8Array;
  /** nondeterministic */
  log: string;
  /** nondeterministic */
  info: string;
  gasWanted: Long;
  gasUsed: Long;
  events: Event[];
  codespace: string;
  sender: string;
  priority: Long;
  /**
   * mempool_error is set by Tendermint.
   * ABCI applictions creating a ResponseCheckTX should not set mempool_error.
   */
  mempoolError: string;
}
export interface ResponseCheckTxSDKType {
  code: number;
  data: Uint8Array;
  log: string;
  info: string;
  gas_wanted: Long;
  gas_used: Long;
  events: EventSDKType[];
  codespace: string;
  sender: string;
  priority: Long;
  mempool_error: string;
}
export interface ResponseDeliverTx {
  code: number;
  data: Uint8Array;
  /** nondeterministic */
  log: string;
  /** nondeterministic */
  info: string;
  gasWanted: Long;
  gasUsed: Long;
  events: Event[];
  codespace: string;
}
export interface ResponseDeliverTxSDKType {
  code: number;
  data: Uint8Array;
  log: string;
  info: string;
  gas_wanted: Long;
  gas_used: Long;
  events: EventSDKType[];
  codespace: string;
}
export interface ResponseEndBlock {
  validatorUpdates: ValidatorUpdate[];
  consensusParamUpdates?: ConsensusParams;
  events: Event[];
}
export interface ResponseEndBlockSDKType {
  validator_updates: ValidatorUpdateSDKType[];
  consensus_param_updates?: ConsensusParamsSDKType;
  events: EventSDKType[];
}
export interface ResponseCommit {
  /** reserve 1 */
  data: Uint8Array;
  retainHeight: Long;
}
export interface ResponseCommitSDKType {
  data: Uint8Array;
  retain_height: Long;
}
export interface ResponseListSnapshots {
  snapshots: Snapshot[];
}
export interface ResponseListSnapshotsSDKType {
  snapshots: SnapshotSDKType[];
}
export interface ResponseOfferSnapshot {
  result: ResponseOfferSnapshot_Result;
}
export interface ResponseOfferSnapshotSDKType {
  result: ResponseOfferSnapshot_Result;
}
export interface ResponseLoadSnapshotChunk {
  chunk: Uint8Array;
}
export interface ResponseLoadSnapshotChunkSDKType {
  chunk: Uint8Array;
}
export interface ResponseApplySnapshotChunk {
  result: ResponseApplySnapshotChunk_Result;
  /** Chunks to refetch and reapply */
  refetchChunks: number[];
  /** Chunk senders to reject and ban */
  rejectSenders: string[];
}
export interface ResponseApplySnapshotChunkSDKType {
  result: ResponseApplySnapshotChunk_Result;
  refetch_chunks: number[];
  reject_senders: string[];
}
/**
 * ConsensusParams contains all consensus-relevant parameters
 * that can be adjusted by the abci app
 */
export interface ConsensusParams {
  block?: BlockParams;
  evidence?: EvidenceParams;
  validator?: ValidatorParams;
  version?: VersionParams;
}
/**
 * ConsensusParams contains all consensus-relevant parameters
 * that can be adjusted by the abci app
 */
export interface ConsensusParamsSDKType {
  block?: BlockParamsSDKType;
  evidence?: EvidenceParamsSDKType;
  validator?: ValidatorParamsSDKType;
  version?: VersionParamsSDKType;
}
/** BlockParams contains limits on the block size. */
export interface BlockParams {
  /** Note: must be greater than 0 */
  maxBytes: Long;
  /** Note: must be greater or equal to -1 */
  maxGas: Long;
}
/** BlockParams contains limits on the block size. */
export interface BlockParamsSDKType {
  max_bytes: Long;
  max_gas: Long;
}
export interface LastCommitInfo {
  round: number;
  votes: VoteInfo[];
}
export interface LastCommitInfoSDKType {
  round: number;
  votes: VoteInfoSDKType[];
}
/**
 * Event allows application developers to attach additional information to
 * ResponseBeginBlock, ResponseEndBlock, ResponseCheckTx and ResponseDeliverTx.
 * Later, transactions may be queried using these events.
 */
export interface Event {
  type: string;
  attributes: EventAttribute[];
}
/**
 * Event allows application developers to attach additional information to
 * ResponseBeginBlock, ResponseEndBlock, ResponseCheckTx and ResponseDeliverTx.
 * Later, transactions may be queried using these events.
 */
export interface EventSDKType {
  type: string;
  attributes: EventAttributeSDKType[];
}
/** EventAttribute is a single key-value pair, associated with an event. */
export interface EventAttribute {
  key: Uint8Array;
  value: Uint8Array;
  /** nondeterministic */
  index: boolean;
}
/** EventAttribute is a single key-value pair, associated with an event. */
export interface EventAttributeSDKType {
  key: Uint8Array;
  value: Uint8Array;
  index: boolean;
}
/**
 * TxResult contains results of executing the transaction.
 * 
 * One usage is indexing transaction results.
 */
export interface TxResult {
  height: Long;
  index: number;
  tx: Uint8Array;
  result?: ResponseDeliverTx;
}
/**
 * TxResult contains results of executing the transaction.
 * 
 * One usage is indexing transaction results.
 */
export interface TxResultSDKType {
  height: Long;
  index: number;
  tx: Uint8Array;
  result?: ResponseDeliverTxSDKType;
}
/** Validator */
export interface Validator {
  /**
   * The first 20 bytes of SHA256(public key)
   * PubKey pub_key = 2 [(gogoproto.nullable)=false];
   */
  address: Uint8Array;
  /** The voting power */
  power: Long;
}
/** Validator */
export interface ValidatorSDKType {
  address: Uint8Array;
  power: Long;
}
/** ValidatorUpdate */
export interface ValidatorUpdate {
  pubKey?: PublicKey;
  power: Long;
}
/** ValidatorUpdate */
export interface ValidatorUpdateSDKType {
  pub_key?: PublicKeySDKType;
  power: Long;
}
/** VoteInfo */
export interface VoteInfo {
  validator?: Validator;
  signedLastBlock: boolean;
}
/** VoteInfo */
export interface VoteInfoSDKType {
  validator?: ValidatorSDKType;
  signed_last_block: boolean;
}
export interface Evidence {
  type: EvidenceType;
  /** The offending validator */
  validator?: Validator;
  /** The height when the offense occurred */
  height: Long;
  /** The corresponding time where the offense occurred */
  time?: Timestamp;
  /**
   * Total voting power of the validator set in case the ABCI application does
   * not store historical validators.
   * https://github.com/tendermint/tendermint/issues/4581
   */
  totalVotingPower: Long;
}
export interface EvidenceSDKType {
  type: EvidenceType;
  validator?: ValidatorSDKType;
  height: Long;
  time?: TimestampSDKType;
  total_voting_power: Long;
}
export interface Snapshot {
  /** The height at which the snapshot was taken */
  height: Long;
  /** The application-specific snapshot format */
  format: number;
  /** Number of chunks in the snapshot */
  chunks: number;
  /** Arbitrary snapshot hash, equal only if identical */
  hash: Uint8Array;
  /** Arbitrary application metadata */
  metadata: Uint8Array;
}
export interface SnapshotSDKType {
  height: Long;
  format: number;
  chunks: number;
  hash: Uint8Array;
  metadata: Uint8Array;
}
function createBaseRequest(): Request {
  return {
    echo: undefined,
    flush: undefined,
    info: undefined,
    setOption: undefined,
    initChain: undefined,
    query: undefined,
    beginBlock: undefined,
    checkTx: undefined,
    deliverTx: undefined,
    endBlock: undefined,
    commit: undefined,
    listSnapshots: undefined,
    offerSnapshot: undefined,
    loadSnapshotChunk: undefined,
    applySnapshotChunk: undefined
  };
}
export const Request = {
  encode(message: Request, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.echo !== undefined) {
      RequestEcho.encode(message.echo, writer.uint32(10).fork()).ldelim();
    }
    if (message.flush !== undefined) {
      RequestFlush.encode(message.flush, writer.uint32(18).fork()).ldelim();
    }
    if (message.info !== undefined) {
      RequestInfo.encode(message.info, writer.uint32(26).fork()).ldelim();
    }
    if (message.setOption !== undefined) {
      RequestSetOption.encode(message.setOption, writer.uint32(34).fork()).ldelim();
    }
    if (message.initChain !== undefined) {
      RequestInitChain.encode(message.initChain, writer.uint32(42).fork()).ldelim();
    }
    if (message.query !== undefined) {
      RequestQuery.encode(message.query, writer.uint32(50).fork()).ldelim();
    }
    if (message.beginBlock !== undefined) {
      RequestBeginBlock.encode(message.beginBlock, writer.uint32(58).fork()).ldelim();
    }
    if (message.checkTx !== undefined) {
      RequestCheckTx.encode(message.checkTx, writer.uint32(66).fork()).ldelim();
    }
    if (message.deliverTx !== undefined) {
      RequestDeliverTx.encode(message.deliverTx, writer.uint32(74).fork()).ldelim();
    }
    if (message.endBlock !== undefined) {
      RequestEndBlock.encode(message.endBlock, writer.uint32(82).fork()).ldelim();
    }
    if (message.commit !== undefined) {
      RequestCommit.encode(message.commit, writer.uint32(90).fork()).ldelim();
    }
    if (message.listSnapshots !== undefined) {
      RequestListSnapshots.encode(message.listSnapshots, writer.uint32(98).fork()).ldelim();
    }
    if (message.offerSnapshot !== undefined) {
      RequestOfferSnapshot.encode(message.offerSnapshot, writer.uint32(106).fork()).ldelim();
    }
    if (message.loadSnapshotChunk !== undefined) {
      RequestLoadSnapshotChunk.encode(message.loadSnapshotChunk, writer.uint32(114).fork()).ldelim();
    }
    if (message.applySnapshotChunk !== undefined) {
      RequestApplySnapshotChunk.encode(message.applySnapshotChunk, writer.uint32(122).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): Request {
    return {
      echo: isSet(object.echo) ? RequestEcho.fromJSON(object.echo) : undefined,
      flush: isSet(object.flush) ? RequestFlush.fromJSON(object.flush) : undefined,
      info: isSet(object.info) ? RequestInfo.fromJSON(object.info) : undefined,
      setOption: isSet(object.setOption) ? RequestSetOption.fromJSON(object.setOption) : undefined,
      initChain: isSet(object.initChain) ? RequestInitChain.fromJSON(object.initChain) : undefined,
      query: isSet(object.query) ? RequestQuery.fromJSON(object.query) : undefined,
      beginBlock: isSet(object.beginBlock) ? RequestBeginBlock.fromJSON(object.beginBlock) : undefined,
      checkTx: isSet(object.checkTx) ? RequestCheckTx.fromJSON(object.checkTx) : undefined,
      deliverTx: isSet(object.deliverTx) ? RequestDeliverTx.fromJSON(object.deliverTx) : undefined,
      endBlock: isSet(object.endBlock) ? RequestEndBlock.fromJSON(object.endBlock) : undefined,
      commit: isSet(object.commit) ? RequestCommit.fromJSON(object.commit) : undefined,
      listSnapshots: isSet(object.listSnapshots) ? RequestListSnapshots.fromJSON(object.listSnapshots) : undefined,
      offerSnapshot: isSet(object.offerSnapshot) ? RequestOfferSnapshot.fromJSON(object.offerSnapshot) : undefined,
      loadSnapshotChunk: isSet(object.loadSnapshotChunk) ? RequestLoadSnapshotChunk.fromJSON(object.loadSnapshotChunk) : undefined,
      applySnapshotChunk: isSet(object.applySnapshotChunk) ? RequestApplySnapshotChunk.fromJSON(object.applySnapshotChunk) : undefined
    };
  },
  fromPartial(object: Partial<Request>): Request {
    const message = createBaseRequest();
    message.echo = object.echo !== undefined && object.echo !== null ? RequestEcho.fromPartial(object.echo) : undefined;
    message.flush = object.flush !== undefined && object.flush !== null ? RequestFlush.fromPartial(object.flush) : undefined;
    message.info = object.info !== undefined && object.info !== null ? RequestInfo.fromPartial(object.info) : undefined;
    message.setOption = object.setOption !== undefined && object.setOption !== null ? RequestSetOption.fromPartial(object.setOption) : undefined;
    message.initChain = object.initChain !== undefined && object.initChain !== null ? RequestInitChain.fromPartial(object.initChain) : undefined;
    message.query = object.query !== undefined && object.query !== null ? RequestQuery.fromPartial(object.query) : undefined;
    message.beginBlock = object.beginBlock !== undefined && object.beginBlock !== null ? RequestBeginBlock.fromPartial(object.beginBlock) : undefined;
    message.checkTx = object.checkTx !== undefined && object.checkTx !== null ? RequestCheckTx.fromPartial(object.checkTx) : undefined;
    message.deliverTx = object.deliverTx !== undefined && object.deliverTx !== null ? RequestDeliverTx.fromPartial(object.deliverTx) : undefined;
    message.endBlock = object.endBlock !== undefined && object.endBlock !== null ? RequestEndBlock.fromPartial(object.endBlock) : undefined;
    message.commit = object.commit !== undefined && object.commit !== null ? RequestCommit.fromPartial(object.commit) : undefined;
    message.listSnapshots = object.listSnapshots !== undefined && object.listSnapshots !== null ? RequestListSnapshots.fromPartial(object.listSnapshots) : undefined;
    message.offerSnapshot = object.offerSnapshot !== undefined && object.offerSnapshot !== null ? RequestOfferSnapshot.fromPartial(object.offerSnapshot) : undefined;
    message.loadSnapshotChunk = object.loadSnapshotChunk !== undefined && object.loadSnapshotChunk !== null ? RequestLoadSnapshotChunk.fromPartial(object.loadSnapshotChunk) : undefined;
    message.applySnapshotChunk = object.applySnapshotChunk !== undefined && object.applySnapshotChunk !== null ? RequestApplySnapshotChunk.fromPartial(object.applySnapshotChunk) : undefined;
    return message;
  }
};
function createBaseRequestEcho(): RequestEcho {
  return {
    message: ""
  };
}
export const RequestEcho = {
  encode(message: RequestEcho, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.message !== "") {
      writer.uint32(10).string(message.message);
    }
    return writer;
  },
  fromJSON(object: any): RequestEcho {
    return {
      message: isSet(object.message) ? String(object.message) : ""
    };
  },
  fromPartial(object: Partial<RequestEcho>): RequestEcho {
    const message = createBaseRequestEcho();
    message.message = object.message ?? "";
    return message;
  }
};
function createBaseRequestFlush(): RequestFlush {
  return {};
}
export const RequestFlush = {
  encode(_: RequestFlush, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },
  fromJSON(_: any): RequestFlush {
    return {};
  },
  fromPartial(_: Partial<RequestFlush>): RequestFlush {
    const message = createBaseRequestFlush();
    return message;
  }
};
function createBaseRequestInfo(): RequestInfo {
  return {
    version: "",
    blockVersion: Long.UZERO,
    p2pVersion: Long.UZERO
  };
}
export const RequestInfo = {
  encode(message: RequestInfo, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.version !== "") {
      writer.uint32(10).string(message.version);
    }
    if (!message.blockVersion.isZero()) {
      writer.uint32(16).uint64(message.blockVersion);
    }
    if (!message.p2pVersion.isZero()) {
      writer.uint32(24).uint64(message.p2pVersion);
    }
    return writer;
  },
  fromJSON(object: any): RequestInfo {
    return {
      version: isSet(object.version) ? String(object.version) : "",
      blockVersion: isSet(object.blockVersion) ? Long.fromValue(object.blockVersion) : Long.UZERO,
      p2pVersion: isSet(object.p2pVersion) ? Long.fromValue(object.p2pVersion) : Long.UZERO
    };
  },
  fromPartial(object: Partial<RequestInfo>): RequestInfo {
    const message = createBaseRequestInfo();
    message.version = object.version ?? "";
    message.blockVersion = object.blockVersion !== undefined && object.blockVersion !== null ? Long.fromValue(object.blockVersion) : Long.UZERO;
    message.p2pVersion = object.p2pVersion !== undefined && object.p2pVersion !== null ? Long.fromValue(object.p2pVersion) : Long.UZERO;
    return message;
  }
};
function createBaseRequestSetOption(): RequestSetOption {
  return {
    key: "",
    value: ""
  };
}
export const RequestSetOption = {
  encode(message: RequestSetOption, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.value !== "") {
      writer.uint32(18).string(message.value);
    }
    return writer;
  },
  fromJSON(object: any): RequestSetOption {
    return {
      key: isSet(object.key) ? String(object.key) : "",
      value: isSet(object.value) ? String(object.value) : ""
    };
  },
  fromPartial(object: Partial<RequestSetOption>): RequestSetOption {
    const message = createBaseRequestSetOption();
    message.key = object.key ?? "";
    message.value = object.value ?? "";
    return message;
  }
};
function createBaseRequestInitChain(): RequestInitChain {
  return {
    time: undefined,
    chainId: "",
    consensusParams: undefined,
    validators: [],
    appStateBytes: new Uint8Array(),
    initialHeight: Long.ZERO
  };
}
export const RequestInitChain = {
  encode(message: RequestInitChain, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.time !== undefined) {
      Timestamp.encode(message.time, writer.uint32(10).fork()).ldelim();
    }
    if (message.chainId !== "") {
      writer.uint32(18).string(message.chainId);
    }
    if (message.consensusParams !== undefined) {
      ConsensusParams.encode(message.consensusParams, writer.uint32(26).fork()).ldelim();
    }
    for (const v of message.validators) {
      ValidatorUpdate.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    if (message.appStateBytes.length !== 0) {
      writer.uint32(42).bytes(message.appStateBytes);
    }
    if (!message.initialHeight.isZero()) {
      writer.uint32(48).int64(message.initialHeight);
    }
    return writer;
  },
  fromJSON(object: any): RequestInitChain {
    return {
      time: isSet(object.time) ? fromJsonTimestamp(object.time) : undefined,
      chainId: isSet(object.chainId) ? String(object.chainId) : "",
      consensusParams: isSet(object.consensusParams) ? ConsensusParams.fromJSON(object.consensusParams) : undefined,
      validators: Array.isArray(object?.validators) ? object.validators.map((e: any) => ValidatorUpdate.fromJSON(e)) : [],
      appStateBytes: isSet(object.appStateBytes) ? bytesFromBase64(object.appStateBytes) : new Uint8Array(),
      initialHeight: isSet(object.initialHeight) ? Long.fromValue(object.initialHeight) : Long.ZERO
    };
  },
  fromPartial(object: Partial<RequestInitChain>): RequestInitChain {
    const message = createBaseRequestInitChain();
    message.time = object.time !== undefined && object.time !== null ? Timestamp.fromPartial(object.time) : undefined;
    message.chainId = object.chainId ?? "";
    message.consensusParams = object.consensusParams !== undefined && object.consensusParams !== null ? ConsensusParams.fromPartial(object.consensusParams) : undefined;
    message.validators = object.validators?.map(e => ValidatorUpdate.fromPartial(e)) || [];
    message.appStateBytes = object.appStateBytes ?? new Uint8Array();
    message.initialHeight = object.initialHeight !== undefined && object.initialHeight !== null ? Long.fromValue(object.initialHeight) : Long.ZERO;
    return message;
  }
};
function createBaseRequestQuery(): RequestQuery {
  return {
    data: new Uint8Array(),
    path: "",
    height: Long.ZERO,
    prove: false
  };
}
export const RequestQuery = {
  encode(message: RequestQuery, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.data.length !== 0) {
      writer.uint32(10).bytes(message.data);
    }
    if (message.path !== "") {
      writer.uint32(18).string(message.path);
    }
    if (!message.height.isZero()) {
      writer.uint32(24).int64(message.height);
    }
    if (message.prove === true) {
      writer.uint32(32).bool(message.prove);
    }
    return writer;
  },
  fromJSON(object: any): RequestQuery {
    return {
      data: isSet(object.data) ? bytesFromBase64(object.data) : new Uint8Array(),
      path: isSet(object.path) ? String(object.path) : "",
      height: isSet(object.height) ? Long.fromValue(object.height) : Long.ZERO,
      prove: isSet(object.prove) ? Boolean(object.prove) : false
    };
  },
  fromPartial(object: Partial<RequestQuery>): RequestQuery {
    const message = createBaseRequestQuery();
    message.data = object.data ?? new Uint8Array();
    message.path = object.path ?? "";
    message.height = object.height !== undefined && object.height !== null ? Long.fromValue(object.height) : Long.ZERO;
    message.prove = object.prove ?? false;
    return message;
  }
};
function createBaseRequestBeginBlock(): RequestBeginBlock {
  return {
    hash: new Uint8Array(),
    header: undefined,
    lastCommitInfo: undefined,
    byzantineValidators: []
  };
}
export const RequestBeginBlock = {
  encode(message: RequestBeginBlock, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.hash.length !== 0) {
      writer.uint32(10).bytes(message.hash);
    }
    if (message.header !== undefined) {
      Header.encode(message.header, writer.uint32(18).fork()).ldelim();
    }
    if (message.lastCommitInfo !== undefined) {
      LastCommitInfo.encode(message.lastCommitInfo, writer.uint32(26).fork()).ldelim();
    }
    for (const v of message.byzantineValidators) {
      Evidence.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): RequestBeginBlock {
    return {
      hash: isSet(object.hash) ? bytesFromBase64(object.hash) : new Uint8Array(),
      header: isSet(object.header) ? Header.fromJSON(object.header) : undefined,
      lastCommitInfo: isSet(object.lastCommitInfo) ? LastCommitInfo.fromJSON(object.lastCommitInfo) : undefined,
      byzantineValidators: Array.isArray(object?.byzantineValidators) ? object.byzantineValidators.map((e: any) => Evidence.fromJSON(e)) : []
    };
  },
  fromPartial(object: Partial<RequestBeginBlock>): RequestBeginBlock {
    const message = createBaseRequestBeginBlock();
    message.hash = object.hash ?? new Uint8Array();
    message.header = object.header !== undefined && object.header !== null ? Header.fromPartial(object.header) : undefined;
    message.lastCommitInfo = object.lastCommitInfo !== undefined && object.lastCommitInfo !== null ? LastCommitInfo.fromPartial(object.lastCommitInfo) : undefined;
    message.byzantineValidators = object.byzantineValidators?.map(e => Evidence.fromPartial(e)) || [];
    return message;
  }
};
function createBaseRequestCheckTx(): RequestCheckTx {
  return {
    tx: new Uint8Array(),
    type: 0
  };
}
export const RequestCheckTx = {
  encode(message: RequestCheckTx, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.tx.length !== 0) {
      writer.uint32(10).bytes(message.tx);
    }
    if (message.type !== 0) {
      writer.uint32(16).int32(message.type);
    }
    return writer;
  },
  fromJSON(object: any): RequestCheckTx {
    return {
      tx: isSet(object.tx) ? bytesFromBase64(object.tx) : new Uint8Array(),
      type: isSet(object.type) ? checkTxTypeFromJSON(object.type) : 0
    };
  },
  fromPartial(object: Partial<RequestCheckTx>): RequestCheckTx {
    const message = createBaseRequestCheckTx();
    message.tx = object.tx ?? new Uint8Array();
    message.type = object.type ?? 0;
    return message;
  }
};
function createBaseRequestDeliverTx(): RequestDeliverTx {
  return {
    tx: new Uint8Array()
  };
}
export const RequestDeliverTx = {
  encode(message: RequestDeliverTx, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.tx.length !== 0) {
      writer.uint32(10).bytes(message.tx);
    }
    return writer;
  },
  fromJSON(object: any): RequestDeliverTx {
    return {
      tx: isSet(object.tx) ? bytesFromBase64(object.tx) : new Uint8Array()
    };
  },
  fromPartial(object: Partial<RequestDeliverTx>): RequestDeliverTx {
    const message = createBaseRequestDeliverTx();
    message.tx = object.tx ?? new Uint8Array();
    return message;
  }
};
function createBaseRequestEndBlock(): RequestEndBlock {
  return {
    height: Long.ZERO
  };
}
export const RequestEndBlock = {
  encode(message: RequestEndBlock, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.height.isZero()) {
      writer.uint32(8).int64(message.height);
    }
    return writer;
  },
  fromJSON(object: any): RequestEndBlock {
    return {
      height: isSet(object.height) ? Long.fromValue(object.height) : Long.ZERO
    };
  },
  fromPartial(object: Partial<RequestEndBlock>): RequestEndBlock {
    const message = createBaseRequestEndBlock();
    message.height = object.height !== undefined && object.height !== null ? Long.fromValue(object.height) : Long.ZERO;
    return message;
  }
};
function createBaseRequestCommit(): RequestCommit {
  return {};
}
export const RequestCommit = {
  encode(_: RequestCommit, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },
  fromJSON(_: any): RequestCommit {
    return {};
  },
  fromPartial(_: Partial<RequestCommit>): RequestCommit {
    const message = createBaseRequestCommit();
    return message;
  }
};
function createBaseRequestListSnapshots(): RequestListSnapshots {
  return {};
}
export const RequestListSnapshots = {
  encode(_: RequestListSnapshots, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },
  fromJSON(_: any): RequestListSnapshots {
    return {};
  },
  fromPartial(_: Partial<RequestListSnapshots>): RequestListSnapshots {
    const message = createBaseRequestListSnapshots();
    return message;
  }
};
function createBaseRequestOfferSnapshot(): RequestOfferSnapshot {
  return {
    snapshot: undefined,
    appHash: new Uint8Array()
  };
}
export const RequestOfferSnapshot = {
  encode(message: RequestOfferSnapshot, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.snapshot !== undefined) {
      Snapshot.encode(message.snapshot, writer.uint32(10).fork()).ldelim();
    }
    if (message.appHash.length !== 0) {
      writer.uint32(18).bytes(message.appHash);
    }
    return writer;
  },
  fromJSON(object: any): RequestOfferSnapshot {
    return {
      snapshot: isSet(object.snapshot) ? Snapshot.fromJSON(object.snapshot) : undefined,
      appHash: isSet(object.appHash) ? bytesFromBase64(object.appHash) : new Uint8Array()
    };
  },
  fromPartial(object: Partial<RequestOfferSnapshot>): RequestOfferSnapshot {
    const message = createBaseRequestOfferSnapshot();
    message.snapshot = object.snapshot !== undefined && object.snapshot !== null ? Snapshot.fromPartial(object.snapshot) : undefined;
    message.appHash = object.appHash ?? new Uint8Array();
    return message;
  }
};
function createBaseRequestLoadSnapshotChunk(): RequestLoadSnapshotChunk {
  return {
    height: Long.UZERO,
    format: 0,
    chunk: 0
  };
}
export const RequestLoadSnapshotChunk = {
  encode(message: RequestLoadSnapshotChunk, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.height.isZero()) {
      writer.uint32(8).uint64(message.height);
    }
    if (message.format !== 0) {
      writer.uint32(16).uint32(message.format);
    }
    if (message.chunk !== 0) {
      writer.uint32(24).uint32(message.chunk);
    }
    return writer;
  },
  fromJSON(object: any): RequestLoadSnapshotChunk {
    return {
      height: isSet(object.height) ? Long.fromValue(object.height) : Long.UZERO,
      format: isSet(object.format) ? Number(object.format) : 0,
      chunk: isSet(object.chunk) ? Number(object.chunk) : 0
    };
  },
  fromPartial(object: Partial<RequestLoadSnapshotChunk>): RequestLoadSnapshotChunk {
    const message = createBaseRequestLoadSnapshotChunk();
    message.height = object.height !== undefined && object.height !== null ? Long.fromValue(object.height) : Long.UZERO;
    message.format = object.format ?? 0;
    message.chunk = object.chunk ?? 0;
    return message;
  }
};
function createBaseRequestApplySnapshotChunk(): RequestApplySnapshotChunk {
  return {
    index: 0,
    chunk: new Uint8Array(),
    sender: ""
  };
}
export const RequestApplySnapshotChunk = {
  encode(message: RequestApplySnapshotChunk, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.index !== 0) {
      writer.uint32(8).uint32(message.index);
    }
    if (message.chunk.length !== 0) {
      writer.uint32(18).bytes(message.chunk);
    }
    if (message.sender !== "") {
      writer.uint32(26).string(message.sender);
    }
    return writer;
  },
  fromJSON(object: any): RequestApplySnapshotChunk {
    return {
      index: isSet(object.index) ? Number(object.index) : 0,
      chunk: isSet(object.chunk) ? bytesFromBase64(object.chunk) : new Uint8Array(),
      sender: isSet(object.sender) ? String(object.sender) : ""
    };
  },
  fromPartial(object: Partial<RequestApplySnapshotChunk>): RequestApplySnapshotChunk {
    const message = createBaseRequestApplySnapshotChunk();
    message.index = object.index ?? 0;
    message.chunk = object.chunk ?? new Uint8Array();
    message.sender = object.sender ?? "";
    return message;
  }
};
function createBaseResponse(): Response {
  return {
    exception: undefined,
    echo: undefined,
    flush: undefined,
    info: undefined,
    setOption: undefined,
    initChain: undefined,
    query: undefined,
    beginBlock: undefined,
    checkTx: undefined,
    deliverTx: undefined,
    endBlock: undefined,
    commit: undefined,
    listSnapshots: undefined,
    offerSnapshot: undefined,
    loadSnapshotChunk: undefined,
    applySnapshotChunk: undefined
  };
}
export const Response = {
  encode(message: Response, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.exception !== undefined) {
      ResponseException.encode(message.exception, writer.uint32(10).fork()).ldelim();
    }
    if (message.echo !== undefined) {
      ResponseEcho.encode(message.echo, writer.uint32(18).fork()).ldelim();
    }
    if (message.flush !== undefined) {
      ResponseFlush.encode(message.flush, writer.uint32(26).fork()).ldelim();
    }
    if (message.info !== undefined) {
      ResponseInfo.encode(message.info, writer.uint32(34).fork()).ldelim();
    }
    if (message.setOption !== undefined) {
      ResponseSetOption.encode(message.setOption, writer.uint32(42).fork()).ldelim();
    }
    if (message.initChain !== undefined) {
      ResponseInitChain.encode(message.initChain, writer.uint32(50).fork()).ldelim();
    }
    if (message.query !== undefined) {
      ResponseQuery.encode(message.query, writer.uint32(58).fork()).ldelim();
    }
    if (message.beginBlock !== undefined) {
      ResponseBeginBlock.encode(message.beginBlock, writer.uint32(66).fork()).ldelim();
    }
    if (message.checkTx !== undefined) {
      ResponseCheckTx.encode(message.checkTx, writer.uint32(74).fork()).ldelim();
    }
    if (message.deliverTx !== undefined) {
      ResponseDeliverTx.encode(message.deliverTx, writer.uint32(82).fork()).ldelim();
    }
    if (message.endBlock !== undefined) {
      ResponseEndBlock.encode(message.endBlock, writer.uint32(90).fork()).ldelim();
    }
    if (message.commit !== undefined) {
      ResponseCommit.encode(message.commit, writer.uint32(98).fork()).ldelim();
    }
    if (message.listSnapshots !== undefined) {
      ResponseListSnapshots.encode(message.listSnapshots, writer.uint32(106).fork()).ldelim();
    }
    if (message.offerSnapshot !== undefined) {
      ResponseOfferSnapshot.encode(message.offerSnapshot, writer.uint32(114).fork()).ldelim();
    }
    if (message.loadSnapshotChunk !== undefined) {
      ResponseLoadSnapshotChunk.encode(message.loadSnapshotChunk, writer.uint32(122).fork()).ldelim();
    }
    if (message.applySnapshotChunk !== undefined) {
      ResponseApplySnapshotChunk.encode(message.applySnapshotChunk, writer.uint32(130).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): Response {
    return {
      exception: isSet(object.exception) ? ResponseException.fromJSON(object.exception) : undefined,
      echo: isSet(object.echo) ? ResponseEcho.fromJSON(object.echo) : undefined,
      flush: isSet(object.flush) ? ResponseFlush.fromJSON(object.flush) : undefined,
      info: isSet(object.info) ? ResponseInfo.fromJSON(object.info) : undefined,
      setOption: isSet(object.setOption) ? ResponseSetOption.fromJSON(object.setOption) : undefined,
      initChain: isSet(object.initChain) ? ResponseInitChain.fromJSON(object.initChain) : undefined,
      query: isSet(object.query) ? ResponseQuery.fromJSON(object.query) : undefined,
      beginBlock: isSet(object.beginBlock) ? ResponseBeginBlock.fromJSON(object.beginBlock) : undefined,
      checkTx: isSet(object.checkTx) ? ResponseCheckTx.fromJSON(object.checkTx) : undefined,
      deliverTx: isSet(object.deliverTx) ? ResponseDeliverTx.fromJSON(object.deliverTx) : undefined,
      endBlock: isSet(object.endBlock) ? ResponseEndBlock.fromJSON(object.endBlock) : undefined,
      commit: isSet(object.commit) ? ResponseCommit.fromJSON(object.commit) : undefined,
      listSnapshots: isSet(object.listSnapshots) ? ResponseListSnapshots.fromJSON(object.listSnapshots) : undefined,
      offerSnapshot: isSet(object.offerSnapshot) ? ResponseOfferSnapshot.fromJSON(object.offerSnapshot) : undefined,
      loadSnapshotChunk: isSet(object.loadSnapshotChunk) ? ResponseLoadSnapshotChunk.fromJSON(object.loadSnapshotChunk) : undefined,
      applySnapshotChunk: isSet(object.applySnapshotChunk) ? ResponseApplySnapshotChunk.fromJSON(object.applySnapshotChunk) : undefined
    };
  },
  fromPartial(object: Partial<Response>): Response {
    const message = createBaseResponse();
    message.exception = object.exception !== undefined && object.exception !== null ? ResponseException.fromPartial(object.exception) : undefined;
    message.echo = object.echo !== undefined && object.echo !== null ? ResponseEcho.fromPartial(object.echo) : undefined;
    message.flush = object.flush !== undefined && object.flush !== null ? ResponseFlush.fromPartial(object.flush) : undefined;
    message.info = object.info !== undefined && object.info !== null ? ResponseInfo.fromPartial(object.info) : undefined;
    message.setOption = object.setOption !== undefined && object.setOption !== null ? ResponseSetOption.fromPartial(object.setOption) : undefined;
    message.initChain = object.initChain !== undefined && object.initChain !== null ? ResponseInitChain.fromPartial(object.initChain) : undefined;
    message.query = object.query !== undefined && object.query !== null ? ResponseQuery.fromPartial(object.query) : undefined;
    message.beginBlock = object.beginBlock !== undefined && object.beginBlock !== null ? ResponseBeginBlock.fromPartial(object.beginBlock) : undefined;
    message.checkTx = object.checkTx !== undefined && object.checkTx !== null ? ResponseCheckTx.fromPartial(object.checkTx) : undefined;
    message.deliverTx = object.deliverTx !== undefined && object.deliverTx !== null ? ResponseDeliverTx.fromPartial(object.deliverTx) : undefined;
    message.endBlock = object.endBlock !== undefined && object.endBlock !== null ? ResponseEndBlock.fromPartial(object.endBlock) : undefined;
    message.commit = object.commit !== undefined && object.commit !== null ? ResponseCommit.fromPartial(object.commit) : undefined;
    message.listSnapshots = object.listSnapshots !== undefined && object.listSnapshots !== null ? ResponseListSnapshots.fromPartial(object.listSnapshots) : undefined;
    message.offerSnapshot = object.offerSnapshot !== undefined && object.offerSnapshot !== null ? ResponseOfferSnapshot.fromPartial(object.offerSnapshot) : undefined;
    message.loadSnapshotChunk = object.loadSnapshotChunk !== undefined && object.loadSnapshotChunk !== null ? ResponseLoadSnapshotChunk.fromPartial(object.loadSnapshotChunk) : undefined;
    message.applySnapshotChunk = object.applySnapshotChunk !== undefined && object.applySnapshotChunk !== null ? ResponseApplySnapshotChunk.fromPartial(object.applySnapshotChunk) : undefined;
    return message;
  }
};
function createBaseResponseException(): ResponseException {
  return {
    error: ""
  };
}
export const ResponseException = {
  encode(message: ResponseException, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.error !== "") {
      writer.uint32(10).string(message.error);
    }
    return writer;
  },
  fromJSON(object: any): ResponseException {
    return {
      error: isSet(object.error) ? String(object.error) : ""
    };
  },
  fromPartial(object: Partial<ResponseException>): ResponseException {
    const message = createBaseResponseException();
    message.error = object.error ?? "";
    return message;
  }
};
function createBaseResponseEcho(): ResponseEcho {
  return {
    message: ""
  };
}
export const ResponseEcho = {
  encode(message: ResponseEcho, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.message !== "") {
      writer.uint32(10).string(message.message);
    }
    return writer;
  },
  fromJSON(object: any): ResponseEcho {
    return {
      message: isSet(object.message) ? String(object.message) : ""
    };
  },
  fromPartial(object: Partial<ResponseEcho>): ResponseEcho {
    const message = createBaseResponseEcho();
    message.message = object.message ?? "";
    return message;
  }
};
function createBaseResponseFlush(): ResponseFlush {
  return {};
}
export const ResponseFlush = {
  encode(_: ResponseFlush, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },
  fromJSON(_: any): ResponseFlush {
    return {};
  },
  fromPartial(_: Partial<ResponseFlush>): ResponseFlush {
    const message = createBaseResponseFlush();
    return message;
  }
};
function createBaseResponseInfo(): ResponseInfo {
  return {
    data: "",
    version: "",
    appVersion: Long.UZERO,
    lastBlockHeight: Long.ZERO,
    lastBlockAppHash: new Uint8Array()
  };
}
export const ResponseInfo = {
  encode(message: ResponseInfo, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.data !== "") {
      writer.uint32(10).string(message.data);
    }
    if (message.version !== "") {
      writer.uint32(18).string(message.version);
    }
    if (!message.appVersion.isZero()) {
      writer.uint32(24).uint64(message.appVersion);
    }
    if (!message.lastBlockHeight.isZero()) {
      writer.uint32(32).int64(message.lastBlockHeight);
    }
    if (message.lastBlockAppHash.length !== 0) {
      writer.uint32(42).bytes(message.lastBlockAppHash);
    }
    return writer;
  },
  fromJSON(object: any): ResponseInfo {
    return {
      data: isSet(object.data) ? String(object.data) : "",
      version: isSet(object.version) ? String(object.version) : "",
      appVersion: isSet(object.appVersion) ? Long.fromValue(object.appVersion) : Long.UZERO,
      lastBlockHeight: isSet(object.lastBlockHeight) ? Long.fromValue(object.lastBlockHeight) : Long.ZERO,
      lastBlockAppHash: isSet(object.lastBlockAppHash) ? bytesFromBase64(object.lastBlockAppHash) : new Uint8Array()
    };
  },
  fromPartial(object: Partial<ResponseInfo>): ResponseInfo {
    const message = createBaseResponseInfo();
    message.data = object.data ?? "";
    message.version = object.version ?? "";
    message.appVersion = object.appVersion !== undefined && object.appVersion !== null ? Long.fromValue(object.appVersion) : Long.UZERO;
    message.lastBlockHeight = object.lastBlockHeight !== undefined && object.lastBlockHeight !== null ? Long.fromValue(object.lastBlockHeight) : Long.ZERO;
    message.lastBlockAppHash = object.lastBlockAppHash ?? new Uint8Array();
    return message;
  }
};
function createBaseResponseSetOption(): ResponseSetOption {
  return {
    code: 0,
    log: "",
    info: ""
  };
}
export const ResponseSetOption = {
  encode(message: ResponseSetOption, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.code !== 0) {
      writer.uint32(8).uint32(message.code);
    }
    if (message.log !== "") {
      writer.uint32(26).string(message.log);
    }
    if (message.info !== "") {
      writer.uint32(34).string(message.info);
    }
    return writer;
  },
  fromJSON(object: any): ResponseSetOption {
    return {
      code: isSet(object.code) ? Number(object.code) : 0,
      log: isSet(object.log) ? String(object.log) : "",
      info: isSet(object.info) ? String(object.info) : ""
    };
  },
  fromPartial(object: Partial<ResponseSetOption>): ResponseSetOption {
    const message = createBaseResponseSetOption();
    message.code = object.code ?? 0;
    message.log = object.log ?? "";
    message.info = object.info ?? "";
    return message;
  }
};
function createBaseResponseInitChain(): ResponseInitChain {
  return {
    consensusParams: undefined,
    validators: [],
    appHash: new Uint8Array()
  };
}
export const ResponseInitChain = {
  encode(message: ResponseInitChain, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.consensusParams !== undefined) {
      ConsensusParams.encode(message.consensusParams, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.validators) {
      ValidatorUpdate.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    if (message.appHash.length !== 0) {
      writer.uint32(26).bytes(message.appHash);
    }
    return writer;
  },
  fromJSON(object: any): ResponseInitChain {
    return {
      consensusParams: isSet(object.consensusParams) ? ConsensusParams.fromJSON(object.consensusParams) : undefined,
      validators: Array.isArray(object?.validators) ? object.validators.map((e: any) => ValidatorUpdate.fromJSON(e)) : [],
      appHash: isSet(object.appHash) ? bytesFromBase64(object.appHash) : new Uint8Array()
    };
  },
  fromPartial(object: Partial<ResponseInitChain>): ResponseInitChain {
    const message = createBaseResponseInitChain();
    message.consensusParams = object.consensusParams !== undefined && object.consensusParams !== null ? ConsensusParams.fromPartial(object.consensusParams) : undefined;
    message.validators = object.validators?.map(e => ValidatorUpdate.fromPartial(e)) || [];
    message.appHash = object.appHash ?? new Uint8Array();
    return message;
  }
};
function createBaseResponseQuery(): ResponseQuery {
  return {
    code: 0,
    log: "",
    info: "",
    index: Long.ZERO,
    key: new Uint8Array(),
    value: new Uint8Array(),
    proofOps: undefined,
    height: Long.ZERO,
    codespace: ""
  };
}
export const ResponseQuery = {
  encode(message: ResponseQuery, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.code !== 0) {
      writer.uint32(8).uint32(message.code);
    }
    if (message.log !== "") {
      writer.uint32(26).string(message.log);
    }
    if (message.info !== "") {
      writer.uint32(34).string(message.info);
    }
    if (!message.index.isZero()) {
      writer.uint32(40).int64(message.index);
    }
    if (message.key.length !== 0) {
      writer.uint32(50).bytes(message.key);
    }
    if (message.value.length !== 0) {
      writer.uint32(58).bytes(message.value);
    }
    if (message.proofOps !== undefined) {
      ProofOps.encode(message.proofOps, writer.uint32(66).fork()).ldelim();
    }
    if (!message.height.isZero()) {
      writer.uint32(72).int64(message.height);
    }
    if (message.codespace !== "") {
      writer.uint32(82).string(message.codespace);
    }
    return writer;
  },
  fromJSON(object: any): ResponseQuery {
    return {
      code: isSet(object.code) ? Number(object.code) : 0,
      log: isSet(object.log) ? String(object.log) : "",
      info: isSet(object.info) ? String(object.info) : "",
      index: isSet(object.index) ? Long.fromValue(object.index) : Long.ZERO,
      key: isSet(object.key) ? bytesFromBase64(object.key) : new Uint8Array(),
      value: isSet(object.value) ? bytesFromBase64(object.value) : new Uint8Array(),
      proofOps: isSet(object.proofOps) ? ProofOps.fromJSON(object.proofOps) : undefined,
      height: isSet(object.height) ? Long.fromValue(object.height) : Long.ZERO,
      codespace: isSet(object.codespace) ? String(object.codespace) : ""
    };
  },
  fromPartial(object: Partial<ResponseQuery>): ResponseQuery {
    const message = createBaseResponseQuery();
    message.code = object.code ?? 0;
    message.log = object.log ?? "";
    message.info = object.info ?? "";
    message.index = object.index !== undefined && object.index !== null ? Long.fromValue(object.index) : Long.ZERO;
    message.key = object.key ?? new Uint8Array();
    message.value = object.value ?? new Uint8Array();
    message.proofOps = object.proofOps !== undefined && object.proofOps !== null ? ProofOps.fromPartial(object.proofOps) : undefined;
    message.height = object.height !== undefined && object.height !== null ? Long.fromValue(object.height) : Long.ZERO;
    message.codespace = object.codespace ?? "";
    return message;
  }
};
function createBaseResponseBeginBlock(): ResponseBeginBlock {
  return {
    events: []
  };
}
export const ResponseBeginBlock = {
  encode(message: ResponseBeginBlock, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.events) {
      Event.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): ResponseBeginBlock {
    return {
      events: Array.isArray(object?.events) ? object.events.map((e: any) => Event.fromJSON(e)) : []
    };
  },
  fromPartial(object: Partial<ResponseBeginBlock>): ResponseBeginBlock {
    const message = createBaseResponseBeginBlock();
    message.events = object.events?.map(e => Event.fromPartial(e)) || [];
    return message;
  }
};
function createBaseResponseCheckTx(): ResponseCheckTx {
  return {
    code: 0,
    data: new Uint8Array(),
    log: "",
    info: "",
    gasWanted: Long.ZERO,
    gasUsed: Long.ZERO,
    events: [],
    codespace: "",
    sender: "",
    priority: Long.ZERO,
    mempoolError: ""
  };
}
export const ResponseCheckTx = {
  encode(message: ResponseCheckTx, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.code !== 0) {
      writer.uint32(8).uint32(message.code);
    }
    if (message.data.length !== 0) {
      writer.uint32(18).bytes(message.data);
    }
    if (message.log !== "") {
      writer.uint32(26).string(message.log);
    }
    if (message.info !== "") {
      writer.uint32(34).string(message.info);
    }
    if (!message.gasWanted.isZero()) {
      writer.uint32(40).int64(message.gasWanted);
    }
    if (!message.gasUsed.isZero()) {
      writer.uint32(48).int64(message.gasUsed);
    }
    for (const v of message.events) {
      Event.encode(v!, writer.uint32(58).fork()).ldelim();
    }
    if (message.codespace !== "") {
      writer.uint32(66).string(message.codespace);
    }
    if (message.sender !== "") {
      writer.uint32(74).string(message.sender);
    }
    if (!message.priority.isZero()) {
      writer.uint32(80).int64(message.priority);
    }
    if (message.mempoolError !== "") {
      writer.uint32(90).string(message.mempoolError);
    }
    return writer;
  },
  fromJSON(object: any): ResponseCheckTx {
    return {
      code: isSet(object.code) ? Number(object.code) : 0,
      data: isSet(object.data) ? bytesFromBase64(object.data) : new Uint8Array(),
      log: isSet(object.log) ? String(object.log) : "",
      info: isSet(object.info) ? String(object.info) : "",
      gasWanted: isSet(object.gas_wanted) ? Long.fromValue(object.gas_wanted) : Long.ZERO,
      gasUsed: isSet(object.gas_used) ? Long.fromValue(object.gas_used) : Long.ZERO,
      events: Array.isArray(object?.events) ? object.events.map((e: any) => Event.fromJSON(e)) : [],
      codespace: isSet(object.codespace) ? String(object.codespace) : "",
      sender: isSet(object.sender) ? String(object.sender) : "",
      priority: isSet(object.priority) ? Long.fromValue(object.priority) : Long.ZERO,
      mempoolError: isSet(object.mempoolError) ? String(object.mempoolError) : ""
    };
  },
  fromPartial(object: Partial<ResponseCheckTx>): ResponseCheckTx {
    const message = createBaseResponseCheckTx();
    message.code = object.code ?? 0;
    message.data = object.data ?? new Uint8Array();
    message.log = object.log ?? "";
    message.info = object.info ?? "";
    message.gasWanted = object.gasWanted !== undefined && object.gasWanted !== null ? Long.fromValue(object.gasWanted) : Long.ZERO;
    message.gasUsed = object.gasUsed !== undefined && object.gasUsed !== null ? Long.fromValue(object.gasUsed) : Long.ZERO;
    message.events = object.events?.map(e => Event.fromPartial(e)) || [];
    message.codespace = object.codespace ?? "";
    message.sender = object.sender ?? "";
    message.priority = object.priority !== undefined && object.priority !== null ? Long.fromValue(object.priority) : Long.ZERO;
    message.mempoolError = object.mempoolError ?? "";
    return message;
  }
};
function createBaseResponseDeliverTx(): ResponseDeliverTx {
  return {
    code: 0,
    data: new Uint8Array(),
    log: "",
    info: "",
    gasWanted: Long.ZERO,
    gasUsed: Long.ZERO,
    events: [],
    codespace: ""
  };
}
export const ResponseDeliverTx = {
  encode(message: ResponseDeliverTx, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.code !== 0) {
      writer.uint32(8).uint32(message.code);
    }
    if (message.data.length !== 0) {
      writer.uint32(18).bytes(message.data);
    }
    if (message.log !== "") {
      writer.uint32(26).string(message.log);
    }
    if (message.info !== "") {
      writer.uint32(34).string(message.info);
    }
    if (!message.gasWanted.isZero()) {
      writer.uint32(40).int64(message.gasWanted);
    }
    if (!message.gasUsed.isZero()) {
      writer.uint32(48).int64(message.gasUsed);
    }
    for (const v of message.events) {
      Event.encode(v!, writer.uint32(58).fork()).ldelim();
    }
    if (message.codespace !== "") {
      writer.uint32(66).string(message.codespace);
    }
    return writer;
  },
  fromJSON(object: any): ResponseDeliverTx {
    return {
      code: isSet(object.code) ? Number(object.code) : 0,
      data: isSet(object.data) ? bytesFromBase64(object.data) : new Uint8Array(),
      log: isSet(object.log) ? String(object.log) : "",
      info: isSet(object.info) ? String(object.info) : "",
      gasWanted: isSet(object.gas_wanted) ? Long.fromValue(object.gas_wanted) : Long.ZERO,
      gasUsed: isSet(object.gas_used) ? Long.fromValue(object.gas_used) : Long.ZERO,
      events: Array.isArray(object?.events) ? object.events.map((e: any) => Event.fromJSON(e)) : [],
      codespace: isSet(object.codespace) ? String(object.codespace) : ""
    };
  },
  fromPartial(object: Partial<ResponseDeliverTx>): ResponseDeliverTx {
    const message = createBaseResponseDeliverTx();
    message.code = object.code ?? 0;
    message.data = object.data ?? new Uint8Array();
    message.log = object.log ?? "";
    message.info = object.info ?? "";
    message.gasWanted = object.gasWanted !== undefined && object.gasWanted !== null ? Long.fromValue(object.gasWanted) : Long.ZERO;
    message.gasUsed = object.gasUsed !== undefined && object.gasUsed !== null ? Long.fromValue(object.gasUsed) : Long.ZERO;
    message.events = object.events?.map(e => Event.fromPartial(e)) || [];
    message.codespace = object.codespace ?? "";
    return message;
  }
};
function createBaseResponseEndBlock(): ResponseEndBlock {
  return {
    validatorUpdates: [],
    consensusParamUpdates: undefined,
    events: []
  };
}
export const ResponseEndBlock = {
  encode(message: ResponseEndBlock, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.validatorUpdates) {
      ValidatorUpdate.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.consensusParamUpdates !== undefined) {
      ConsensusParams.encode(message.consensusParamUpdates, writer.uint32(18).fork()).ldelim();
    }
    for (const v of message.events) {
      Event.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): ResponseEndBlock {
    return {
      validatorUpdates: Array.isArray(object?.validatorUpdates) ? object.validatorUpdates.map((e: any) => ValidatorUpdate.fromJSON(e)) : [],
      consensusParamUpdates: isSet(object.consensusParamUpdates) ? ConsensusParams.fromJSON(object.consensusParamUpdates) : undefined,
      events: Array.isArray(object?.events) ? object.events.map((e: any) => Event.fromJSON(e)) : []
    };
  },
  fromPartial(object: Partial<ResponseEndBlock>): ResponseEndBlock {
    const message = createBaseResponseEndBlock();
    message.validatorUpdates = object.validatorUpdates?.map(e => ValidatorUpdate.fromPartial(e)) || [];
    message.consensusParamUpdates = object.consensusParamUpdates !== undefined && object.consensusParamUpdates !== null ? ConsensusParams.fromPartial(object.consensusParamUpdates) : undefined;
    message.events = object.events?.map(e => Event.fromPartial(e)) || [];
    return message;
  }
};
function createBaseResponseCommit(): ResponseCommit {
  return {
    data: new Uint8Array(),
    retainHeight: Long.ZERO
  };
}
export const ResponseCommit = {
  encode(message: ResponseCommit, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.data.length !== 0) {
      writer.uint32(18).bytes(message.data);
    }
    if (!message.retainHeight.isZero()) {
      writer.uint32(24).int64(message.retainHeight);
    }
    return writer;
  },
  fromJSON(object: any): ResponseCommit {
    return {
      data: isSet(object.data) ? bytesFromBase64(object.data) : new Uint8Array(),
      retainHeight: isSet(object.retainHeight) ? Long.fromValue(object.retainHeight) : Long.ZERO
    };
  },
  fromPartial(object: Partial<ResponseCommit>): ResponseCommit {
    const message = createBaseResponseCommit();
    message.data = object.data ?? new Uint8Array();
    message.retainHeight = object.retainHeight !== undefined && object.retainHeight !== null ? Long.fromValue(object.retainHeight) : Long.ZERO;
    return message;
  }
};
function createBaseResponseListSnapshots(): ResponseListSnapshots {
  return {
    snapshots: []
  };
}
export const ResponseListSnapshots = {
  encode(message: ResponseListSnapshots, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.snapshots) {
      Snapshot.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): ResponseListSnapshots {
    return {
      snapshots: Array.isArray(object?.snapshots) ? object.snapshots.map((e: any) => Snapshot.fromJSON(e)) : []
    };
  },
  fromPartial(object: Partial<ResponseListSnapshots>): ResponseListSnapshots {
    const message = createBaseResponseListSnapshots();
    message.snapshots = object.snapshots?.map(e => Snapshot.fromPartial(e)) || [];
    return message;
  }
};
function createBaseResponseOfferSnapshot(): ResponseOfferSnapshot {
  return {
    result: 0
  };
}
export const ResponseOfferSnapshot = {
  encode(message: ResponseOfferSnapshot, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.result !== 0) {
      writer.uint32(8).int32(message.result);
    }
    return writer;
  },
  fromJSON(object: any): ResponseOfferSnapshot {
    return {
      result: isSet(object.result) ? responseOfferSnapshot_ResultFromJSON(object.result) : 0
    };
  },
  fromPartial(object: Partial<ResponseOfferSnapshot>): ResponseOfferSnapshot {
    const message = createBaseResponseOfferSnapshot();
    message.result = object.result ?? 0;
    return message;
  }
};
function createBaseResponseLoadSnapshotChunk(): ResponseLoadSnapshotChunk {
  return {
    chunk: new Uint8Array()
  };
}
export const ResponseLoadSnapshotChunk = {
  encode(message: ResponseLoadSnapshotChunk, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.chunk.length !== 0) {
      writer.uint32(10).bytes(message.chunk);
    }
    return writer;
  },
  fromJSON(object: any): ResponseLoadSnapshotChunk {
    return {
      chunk: isSet(object.chunk) ? bytesFromBase64(object.chunk) : new Uint8Array()
    };
  },
  fromPartial(object: Partial<ResponseLoadSnapshotChunk>): ResponseLoadSnapshotChunk {
    const message = createBaseResponseLoadSnapshotChunk();
    message.chunk = object.chunk ?? new Uint8Array();
    return message;
  }
};
function createBaseResponseApplySnapshotChunk(): ResponseApplySnapshotChunk {
  return {
    result: 0,
    refetchChunks: [],
    rejectSenders: []
  };
}
export const ResponseApplySnapshotChunk = {
  encode(message: ResponseApplySnapshotChunk, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.result !== 0) {
      writer.uint32(8).int32(message.result);
    }
    writer.uint32(18).fork();
    for (const v of message.refetchChunks) {
      writer.uint32(v);
    }
    writer.ldelim();
    for (const v of message.rejectSenders) {
      writer.uint32(26).string(v!);
    }
    return writer;
  },
  fromJSON(object: any): ResponseApplySnapshotChunk {
    return {
      result: isSet(object.result) ? responseApplySnapshotChunk_ResultFromJSON(object.result) : 0,
      refetchChunks: Array.isArray(object?.refetchChunks) ? object.refetchChunks.map((e: any) => Number(e)) : [],
      rejectSenders: Array.isArray(object?.rejectSenders) ? object.rejectSenders.map((e: any) => String(e)) : []
    };
  },
  fromPartial(object: Partial<ResponseApplySnapshotChunk>): ResponseApplySnapshotChunk {
    const message = createBaseResponseApplySnapshotChunk();
    message.result = object.result ?? 0;
    message.refetchChunks = object.refetchChunks?.map(e => e) || [];
    message.rejectSenders = object.rejectSenders?.map(e => e) || [];
    return message;
  }
};
function createBaseConsensusParams(): ConsensusParams {
  return {
    block: undefined,
    evidence: undefined,
    validator: undefined,
    version: undefined
  };
}
export const ConsensusParams = {
  encode(message: ConsensusParams, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.block !== undefined) {
      BlockParams.encode(message.block, writer.uint32(10).fork()).ldelim();
    }
    if (message.evidence !== undefined) {
      EvidenceParams.encode(message.evidence, writer.uint32(18).fork()).ldelim();
    }
    if (message.validator !== undefined) {
      ValidatorParams.encode(message.validator, writer.uint32(26).fork()).ldelim();
    }
    if (message.version !== undefined) {
      VersionParams.encode(message.version, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): ConsensusParams {
    return {
      block: isSet(object.block) ? BlockParams.fromJSON(object.block) : undefined,
      evidence: isSet(object.evidence) ? EvidenceParams.fromJSON(object.evidence) : undefined,
      validator: isSet(object.validator) ? ValidatorParams.fromJSON(object.validator) : undefined,
      version: isSet(object.version) ? VersionParams.fromJSON(object.version) : undefined
    };
  },
  fromPartial(object: Partial<ConsensusParams>): ConsensusParams {
    const message = createBaseConsensusParams();
    message.block = object.block !== undefined && object.block !== null ? BlockParams.fromPartial(object.block) : undefined;
    message.evidence = object.evidence !== undefined && object.evidence !== null ? EvidenceParams.fromPartial(object.evidence) : undefined;
    message.validator = object.validator !== undefined && object.validator !== null ? ValidatorParams.fromPartial(object.validator) : undefined;
    message.version = object.version !== undefined && object.version !== null ? VersionParams.fromPartial(object.version) : undefined;
    return message;
  }
};
function createBaseBlockParams(): BlockParams {
  return {
    maxBytes: Long.ZERO,
    maxGas: Long.ZERO
  };
}
export const BlockParams = {
  encode(message: BlockParams, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.maxBytes.isZero()) {
      writer.uint32(8).int64(message.maxBytes);
    }
    if (!message.maxGas.isZero()) {
      writer.uint32(16).int64(message.maxGas);
    }
    return writer;
  },
  fromJSON(object: any): BlockParams {
    return {
      maxBytes: isSet(object.maxBytes) ? Long.fromValue(object.maxBytes) : Long.ZERO,
      maxGas: isSet(object.maxGas) ? Long.fromValue(object.maxGas) : Long.ZERO
    };
  },
  fromPartial(object: Partial<BlockParams>): BlockParams {
    const message = createBaseBlockParams();
    message.maxBytes = object.maxBytes !== undefined && object.maxBytes !== null ? Long.fromValue(object.maxBytes) : Long.ZERO;
    message.maxGas = object.maxGas !== undefined && object.maxGas !== null ? Long.fromValue(object.maxGas) : Long.ZERO;
    return message;
  }
};
function createBaseLastCommitInfo(): LastCommitInfo {
  return {
    round: 0,
    votes: []
  };
}
export const LastCommitInfo = {
  encode(message: LastCommitInfo, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.round !== 0) {
      writer.uint32(8).int32(message.round);
    }
    for (const v of message.votes) {
      VoteInfo.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): LastCommitInfo {
    return {
      round: isSet(object.round) ? Number(object.round) : 0,
      votes: Array.isArray(object?.votes) ? object.votes.map((e: any) => VoteInfo.fromJSON(e)) : []
    };
  },
  fromPartial(object: Partial<LastCommitInfo>): LastCommitInfo {
    const message = createBaseLastCommitInfo();
    message.round = object.round ?? 0;
    message.votes = object.votes?.map(e => VoteInfo.fromPartial(e)) || [];
    return message;
  }
};
function createBaseEvent(): Event {
  return {
    type: "",
    attributes: []
  };
}
export const Event = {
  encode(message: Event, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.type !== "") {
      writer.uint32(10).string(message.type);
    }
    for (const v of message.attributes) {
      EventAttribute.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): Event {
    return {
      type: isSet(object.type) ? String(object.type) : "",
      attributes: Array.isArray(object?.attributes) ? object.attributes.map((e: any) => EventAttribute.fromJSON(e)) : []
    };
  },
  fromPartial(object: Partial<Event>): Event {
    const message = createBaseEvent();
    message.type = object.type ?? "";
    message.attributes = object.attributes?.map(e => EventAttribute.fromPartial(e)) || [];
    return message;
  }
};
function createBaseEventAttribute(): EventAttribute {
  return {
    key: new Uint8Array(),
    value: new Uint8Array(),
    index: false
  };
}
export const EventAttribute = {
  encode(message: EventAttribute, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.key.length !== 0) {
      writer.uint32(10).bytes(message.key);
    }
    if (message.value.length !== 0) {
      writer.uint32(18).bytes(message.value);
    }
    if (message.index === true) {
      writer.uint32(24).bool(message.index);
    }
    return writer;
  },
  fromJSON(object: any): EventAttribute {
    return {
      key: isSet(object.key) ? bytesFromBase64(object.key) : new Uint8Array(),
      value: isSet(object.value) ? bytesFromBase64(object.value) : new Uint8Array(),
      index: isSet(object.index) ? Boolean(object.index) : false
    };
  },
  fromPartial(object: Partial<EventAttribute>): EventAttribute {
    const message = createBaseEventAttribute();
    message.key = object.key ?? new Uint8Array();
    message.value = object.value ?? new Uint8Array();
    message.index = object.index ?? false;
    return message;
  }
};
function createBaseTxResult(): TxResult {
  return {
    height: Long.ZERO,
    index: 0,
    tx: new Uint8Array(),
    result: undefined
  };
}
export const TxResult = {
  encode(message: TxResult, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.height.isZero()) {
      writer.uint32(8).int64(message.height);
    }
    if (message.index !== 0) {
      writer.uint32(16).uint32(message.index);
    }
    if (message.tx.length !== 0) {
      writer.uint32(26).bytes(message.tx);
    }
    if (message.result !== undefined) {
      ResponseDeliverTx.encode(message.result, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): TxResult {
    return {
      height: isSet(object.height) ? Long.fromValue(object.height) : Long.ZERO,
      index: isSet(object.index) ? Number(object.index) : 0,
      tx: isSet(object.tx) ? bytesFromBase64(object.tx) : new Uint8Array(),
      result: isSet(object.result) ? ResponseDeliverTx.fromJSON(object.result) : undefined
    };
  },
  fromPartial(object: Partial<TxResult>): TxResult {
    const message = createBaseTxResult();
    message.height = object.height !== undefined && object.height !== null ? Long.fromValue(object.height) : Long.ZERO;
    message.index = object.index ?? 0;
    message.tx = object.tx ?? new Uint8Array();
    message.result = object.result !== undefined && object.result !== null ? ResponseDeliverTx.fromPartial(object.result) : undefined;
    return message;
  }
};
function createBaseValidator(): Validator {
  return {
    address: new Uint8Array(),
    power: Long.ZERO
  };
}
export const Validator = {
  encode(message: Validator, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.address.length !== 0) {
      writer.uint32(10).bytes(message.address);
    }
    if (!message.power.isZero()) {
      writer.uint32(24).int64(message.power);
    }
    return writer;
  },
  fromJSON(object: any): Validator {
    return {
      address: isSet(object.address) ? bytesFromBase64(object.address) : new Uint8Array(),
      power: isSet(object.power) ? Long.fromValue(object.power) : Long.ZERO
    };
  },
  fromPartial(object: Partial<Validator>): Validator {
    const message = createBaseValidator();
    message.address = object.address ?? new Uint8Array();
    message.power = object.power !== undefined && object.power !== null ? Long.fromValue(object.power) : Long.ZERO;
    return message;
  }
};
function createBaseValidatorUpdate(): ValidatorUpdate {
  return {
    pubKey: undefined,
    power: Long.ZERO
  };
}
export const ValidatorUpdate = {
  encode(message: ValidatorUpdate, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.pubKey !== undefined) {
      PublicKey.encode(message.pubKey, writer.uint32(10).fork()).ldelim();
    }
    if (!message.power.isZero()) {
      writer.uint32(16).int64(message.power);
    }
    return writer;
  },
  fromJSON(object: any): ValidatorUpdate {
    return {
      pubKey: isSet(object.pubKey) ? PublicKey.fromJSON(object.pubKey) : undefined,
      power: isSet(object.power) ? Long.fromValue(object.power) : Long.ZERO
    };
  },
  fromPartial(object: Partial<ValidatorUpdate>): ValidatorUpdate {
    const message = createBaseValidatorUpdate();
    message.pubKey = object.pubKey !== undefined && object.pubKey !== null ? PublicKey.fromPartial(object.pubKey) : undefined;
    message.power = object.power !== undefined && object.power !== null ? Long.fromValue(object.power) : Long.ZERO;
    return message;
  }
};
function createBaseVoteInfo(): VoteInfo {
  return {
    validator: undefined,
    signedLastBlock: false
  };
}
export const VoteInfo = {
  encode(message: VoteInfo, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.validator !== undefined) {
      Validator.encode(message.validator, writer.uint32(10).fork()).ldelim();
    }
    if (message.signedLastBlock === true) {
      writer.uint32(16).bool(message.signedLastBlock);
    }
    return writer;
  },
  fromJSON(object: any): VoteInfo {
    return {
      validator: isSet(object.validator) ? Validator.fromJSON(object.validator) : undefined,
      signedLastBlock: isSet(object.signedLastBlock) ? Boolean(object.signedLastBlock) : false
    };
  },
  fromPartial(object: Partial<VoteInfo>): VoteInfo {
    const message = createBaseVoteInfo();
    message.validator = object.validator !== undefined && object.validator !== null ? Validator.fromPartial(object.validator) : undefined;
    message.signedLastBlock = object.signedLastBlock ?? false;
    return message;
  }
};
function createBaseEvidence(): Evidence {
  return {
    type: 0,
    validator: undefined,
    height: Long.ZERO,
    time: undefined,
    totalVotingPower: Long.ZERO
  };
}
export const Evidence = {
  encode(message: Evidence, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.type !== 0) {
      writer.uint32(8).int32(message.type);
    }
    if (message.validator !== undefined) {
      Validator.encode(message.validator, writer.uint32(18).fork()).ldelim();
    }
    if (!message.height.isZero()) {
      writer.uint32(24).int64(message.height);
    }
    if (message.time !== undefined) {
      Timestamp.encode(message.time, writer.uint32(34).fork()).ldelim();
    }
    if (!message.totalVotingPower.isZero()) {
      writer.uint32(40).int64(message.totalVotingPower);
    }
    return writer;
  },
  fromJSON(object: any): Evidence {
    return {
      type: isSet(object.type) ? evidenceTypeFromJSON(object.type) : 0,
      validator: isSet(object.validator) ? Validator.fromJSON(object.validator) : undefined,
      height: isSet(object.height) ? Long.fromValue(object.height) : Long.ZERO,
      time: isSet(object.time) ? fromJsonTimestamp(object.time) : undefined,
      totalVotingPower: isSet(object.totalVotingPower) ? Long.fromValue(object.totalVotingPower) : Long.ZERO
    };
  },
  fromPartial(object: Partial<Evidence>): Evidence {
    const message = createBaseEvidence();
    message.type = object.type ?? 0;
    message.validator = object.validator !== undefined && object.validator !== null ? Validator.fromPartial(object.validator) : undefined;
    message.height = object.height !== undefined && object.height !== null ? Long.fromValue(object.height) : Long.ZERO;
    message.time = object.time !== undefined && object.time !== null ? Timestamp.fromPartial(object.time) : undefined;
    message.totalVotingPower = object.totalVotingPower !== undefined && object.totalVotingPower !== null ? Long.fromValue(object.totalVotingPower) : Long.ZERO;
    return message;
  }
};
function createBaseSnapshot(): Snapshot {
  return {
    height: Long.UZERO,
    format: 0,
    chunks: 0,
    hash: new Uint8Array(),
    metadata: new Uint8Array()
  };
}
export const Snapshot = {
  encode(message: Snapshot, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.height.isZero()) {
      writer.uint32(8).uint64(message.height);
    }
    if (message.format !== 0) {
      writer.uint32(16).uint32(message.format);
    }
    if (message.chunks !== 0) {
      writer.uint32(24).uint32(message.chunks);
    }
    if (message.hash.length !== 0) {
      writer.uint32(34).bytes(message.hash);
    }
    if (message.metadata.length !== 0) {
      writer.uint32(42).bytes(message.metadata);
    }
    return writer;
  },
  fromJSON(object: any): Snapshot {
    return {
      height: isSet(object.height) ? Long.fromValue(object.height) : Long.UZERO,
      format: isSet(object.format) ? Number(object.format) : 0,
      chunks: isSet(object.chunks) ? Number(object.chunks) : 0,
      hash: isSet(object.hash) ? bytesFromBase64(object.hash) : new Uint8Array(),
      metadata: isSet(object.metadata) ? bytesFromBase64(object.metadata) : new Uint8Array()
    };
  },
  fromPartial(object: Partial<Snapshot>): Snapshot {
    const message = createBaseSnapshot();
    message.height = object.height !== undefined && object.height !== null ? Long.fromValue(object.height) : Long.UZERO;
    message.format = object.format ?? 0;
    message.chunks = object.chunks ?? 0;
    message.hash = object.hash ?? new Uint8Array();
    message.metadata = object.metadata ?? new Uint8Array();
    return message;
  }
};