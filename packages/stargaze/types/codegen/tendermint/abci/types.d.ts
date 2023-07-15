import { Timestamp, TimestampSDKType } from "../../google/protobuf/timestamp";
import { Header, HeaderSDKType } from "../types/types";
import { ProofOps, ProofOpsSDKType } from "../crypto/proof";
import { EvidenceParams, EvidenceParamsSDKType, ValidatorParams, ValidatorParamsSDKType, VersionParams, VersionParamsSDKType } from "../types/params";
import { PublicKey, PublicKeySDKType } from "../crypto/keys";
import { Long } from "../../helpers";
import * as _m0 from "protobufjs/minimal";
export declare enum CheckTxType {
    NEW = 0,
    RECHECK = 1,
    UNRECOGNIZED = -1
}
export declare const CheckTxTypeSDKType: typeof CheckTxType;
export declare function checkTxTypeFromJSON(object: any): CheckTxType;
export declare function checkTxTypeToJSON(object: CheckTxType): string;
export declare enum ResponseOfferSnapshot_Result {
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
    UNRECOGNIZED = -1
}
export declare const ResponseOfferSnapshot_ResultSDKType: typeof ResponseOfferSnapshot_Result;
export declare function responseOfferSnapshot_ResultFromJSON(object: any): ResponseOfferSnapshot_Result;
export declare function responseOfferSnapshot_ResultToJSON(object: ResponseOfferSnapshot_Result): string;
export declare enum ResponseApplySnapshotChunk_Result {
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
    UNRECOGNIZED = -1
}
export declare const ResponseApplySnapshotChunk_ResultSDKType: typeof ResponseApplySnapshotChunk_Result;
export declare function responseApplySnapshotChunk_ResultFromJSON(object: any): ResponseApplySnapshotChunk_Result;
export declare function responseApplySnapshotChunk_ResultToJSON(object: ResponseApplySnapshotChunk_Result): string;
export declare enum EvidenceType {
    UNKNOWN = 0,
    DUPLICATE_VOTE = 1,
    LIGHT_CLIENT_ATTACK = 2,
    UNRECOGNIZED = -1
}
export declare const EvidenceTypeSDKType: typeof EvidenceType;
export declare function evidenceTypeFromJSON(object: any): EvidenceType;
export declare function evidenceTypeToJSON(object: EvidenceType): string;
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
export interface RequestFlush {
}
export interface RequestFlushSDKType {
}
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
export interface RequestCommit {
}
export interface RequestCommitSDKType {
}
/** lists available snapshots */
export interface RequestListSnapshots {
}
/** lists available snapshots */
export interface RequestListSnapshotsSDKType {
}
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
export interface ResponseFlush {
}
export interface ResponseFlushSDKType {
}
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
export declare const Request: {
    encode(message: Request, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): Request;
    fromPartial(object: Partial<Request>): Request;
};
export declare const RequestEcho: {
    encode(message: RequestEcho, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): RequestEcho;
    fromPartial(object: Partial<RequestEcho>): RequestEcho;
};
export declare const RequestFlush: {
    encode(_: RequestFlush, writer?: _m0.Writer): _m0.Writer;
    fromJSON(_: any): RequestFlush;
    fromPartial(_: Partial<RequestFlush>): RequestFlush;
};
export declare const RequestInfo: {
    encode(message: RequestInfo, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): RequestInfo;
    fromPartial(object: Partial<RequestInfo>): RequestInfo;
};
export declare const RequestSetOption: {
    encode(message: RequestSetOption, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): RequestSetOption;
    fromPartial(object: Partial<RequestSetOption>): RequestSetOption;
};
export declare const RequestInitChain: {
    encode(message: RequestInitChain, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): RequestInitChain;
    fromPartial(object: Partial<RequestInitChain>): RequestInitChain;
};
export declare const RequestQuery: {
    encode(message: RequestQuery, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): RequestQuery;
    fromPartial(object: Partial<RequestQuery>): RequestQuery;
};
export declare const RequestBeginBlock: {
    encode(message: RequestBeginBlock, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): RequestBeginBlock;
    fromPartial(object: Partial<RequestBeginBlock>): RequestBeginBlock;
};
export declare const RequestCheckTx: {
    encode(message: RequestCheckTx, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): RequestCheckTx;
    fromPartial(object: Partial<RequestCheckTx>): RequestCheckTx;
};
export declare const RequestDeliverTx: {
    encode(message: RequestDeliverTx, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): RequestDeliverTx;
    fromPartial(object: Partial<RequestDeliverTx>): RequestDeliverTx;
};
export declare const RequestEndBlock: {
    encode(message: RequestEndBlock, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): RequestEndBlock;
    fromPartial(object: Partial<RequestEndBlock>): RequestEndBlock;
};
export declare const RequestCommit: {
    encode(_: RequestCommit, writer?: _m0.Writer): _m0.Writer;
    fromJSON(_: any): RequestCommit;
    fromPartial(_: Partial<RequestCommit>): RequestCommit;
};
export declare const RequestListSnapshots: {
    encode(_: RequestListSnapshots, writer?: _m0.Writer): _m0.Writer;
    fromJSON(_: any): RequestListSnapshots;
    fromPartial(_: Partial<RequestListSnapshots>): RequestListSnapshots;
};
export declare const RequestOfferSnapshot: {
    encode(message: RequestOfferSnapshot, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): RequestOfferSnapshot;
    fromPartial(object: Partial<RequestOfferSnapshot>): RequestOfferSnapshot;
};
export declare const RequestLoadSnapshotChunk: {
    encode(message: RequestLoadSnapshotChunk, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): RequestLoadSnapshotChunk;
    fromPartial(object: Partial<RequestLoadSnapshotChunk>): RequestLoadSnapshotChunk;
};
export declare const RequestApplySnapshotChunk: {
    encode(message: RequestApplySnapshotChunk, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): RequestApplySnapshotChunk;
    fromPartial(object: Partial<RequestApplySnapshotChunk>): RequestApplySnapshotChunk;
};
export declare const Response: {
    encode(message: Response, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): Response;
    fromPartial(object: Partial<Response>): Response;
};
export declare const ResponseException: {
    encode(message: ResponseException, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): ResponseException;
    fromPartial(object: Partial<ResponseException>): ResponseException;
};
export declare const ResponseEcho: {
    encode(message: ResponseEcho, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): ResponseEcho;
    fromPartial(object: Partial<ResponseEcho>): ResponseEcho;
};
export declare const ResponseFlush: {
    encode(_: ResponseFlush, writer?: _m0.Writer): _m0.Writer;
    fromJSON(_: any): ResponseFlush;
    fromPartial(_: Partial<ResponseFlush>): ResponseFlush;
};
export declare const ResponseInfo: {
    encode(message: ResponseInfo, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): ResponseInfo;
    fromPartial(object: Partial<ResponseInfo>): ResponseInfo;
};
export declare const ResponseSetOption: {
    encode(message: ResponseSetOption, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): ResponseSetOption;
    fromPartial(object: Partial<ResponseSetOption>): ResponseSetOption;
};
export declare const ResponseInitChain: {
    encode(message: ResponseInitChain, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): ResponseInitChain;
    fromPartial(object: Partial<ResponseInitChain>): ResponseInitChain;
};
export declare const ResponseQuery: {
    encode(message: ResponseQuery, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): ResponseQuery;
    fromPartial(object: Partial<ResponseQuery>): ResponseQuery;
};
export declare const ResponseBeginBlock: {
    encode(message: ResponseBeginBlock, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): ResponseBeginBlock;
    fromPartial(object: Partial<ResponseBeginBlock>): ResponseBeginBlock;
};
export declare const ResponseCheckTx: {
    encode(message: ResponseCheckTx, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): ResponseCheckTx;
    fromPartial(object: Partial<ResponseCheckTx>): ResponseCheckTx;
};
export declare const ResponseDeliverTx: {
    encode(message: ResponseDeliverTx, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): ResponseDeliverTx;
    fromPartial(object: Partial<ResponseDeliverTx>): ResponseDeliverTx;
};
export declare const ResponseEndBlock: {
    encode(message: ResponseEndBlock, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): ResponseEndBlock;
    fromPartial(object: Partial<ResponseEndBlock>): ResponseEndBlock;
};
export declare const ResponseCommit: {
    encode(message: ResponseCommit, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): ResponseCommit;
    fromPartial(object: Partial<ResponseCommit>): ResponseCommit;
};
export declare const ResponseListSnapshots: {
    encode(message: ResponseListSnapshots, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): ResponseListSnapshots;
    fromPartial(object: Partial<ResponseListSnapshots>): ResponseListSnapshots;
};
export declare const ResponseOfferSnapshot: {
    encode(message: ResponseOfferSnapshot, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): ResponseOfferSnapshot;
    fromPartial(object: Partial<ResponseOfferSnapshot>): ResponseOfferSnapshot;
};
export declare const ResponseLoadSnapshotChunk: {
    encode(message: ResponseLoadSnapshotChunk, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): ResponseLoadSnapshotChunk;
    fromPartial(object: Partial<ResponseLoadSnapshotChunk>): ResponseLoadSnapshotChunk;
};
export declare const ResponseApplySnapshotChunk: {
    encode(message: ResponseApplySnapshotChunk, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): ResponseApplySnapshotChunk;
    fromPartial(object: Partial<ResponseApplySnapshotChunk>): ResponseApplySnapshotChunk;
};
export declare const ConsensusParams: {
    encode(message: ConsensusParams, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): ConsensusParams;
    fromPartial(object: Partial<ConsensusParams>): ConsensusParams;
};
export declare const BlockParams: {
    encode(message: BlockParams, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): BlockParams;
    fromPartial(object: Partial<BlockParams>): BlockParams;
};
export declare const LastCommitInfo: {
    encode(message: LastCommitInfo, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): LastCommitInfo;
    fromPartial(object: Partial<LastCommitInfo>): LastCommitInfo;
};
export declare const Event: {
    encode(message: Event, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): Event;
    fromPartial(object: Partial<Event>): Event;
};
export declare const EventAttribute: {
    encode(message: EventAttribute, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): EventAttribute;
    fromPartial(object: Partial<EventAttribute>): EventAttribute;
};
export declare const TxResult: {
    encode(message: TxResult, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): TxResult;
    fromPartial(object: Partial<TxResult>): TxResult;
};
export declare const Validator: {
    encode(message: Validator, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): Validator;
    fromPartial(object: Partial<Validator>): Validator;
};
export declare const ValidatorUpdate: {
    encode(message: ValidatorUpdate, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): ValidatorUpdate;
    fromPartial(object: Partial<ValidatorUpdate>): ValidatorUpdate;
};
export declare const VoteInfo: {
    encode(message: VoteInfo, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): VoteInfo;
    fromPartial(object: Partial<VoteInfo>): VoteInfo;
};
export declare const Evidence: {
    encode(message: Evidence, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): Evidence;
    fromPartial(object: Partial<Evidence>): Evidence;
};
export declare const Snapshot: {
    encode(message: Snapshot, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): Snapshot;
    fromPartial(object: Partial<Snapshot>): Snapshot;
};
