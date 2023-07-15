import * as _154 from "./abci/types";
import * as _155 from "./blocksync/types";
import * as _156 from "./consensus/types";
import * as _157 from "./consensus/wal";
import * as _158 from "./crypto/keys";
import * as _159 from "./crypto/proof";
import * as _160 from "./libs/bits/types";
import * as _161 from "./mempool/types";
import * as _162 from "./p2p/conn";
import * as _163 from "./p2p/pex";
import * as _164 from "./p2p/types";
import * as _165 from "./privval/types";
import * as _166 from "./rpc/grpc/types";
import * as _167 from "./state/types";
import * as _168 from "./statesync/types";
import * as _169 from "./store/types";
import * as _170 from "./types/block";
import * as _171 from "./types/canonical";
import * as _172 from "./types/events";
import * as _173 from "./types/evidence";
import * as _174 from "./types/params";
import * as _175 from "./types/types";
import * as _176 from "./types/validator";
import * as _177 from "./version/types";
export declare namespace tendermint {
    const abci: {
        checkTxTypeFromJSON(object: any): _154.CheckTxType;
        checkTxTypeToJSON(object: _154.CheckTxType): string;
        responseOfferSnapshot_ResultFromJSON(object: any): _154.ResponseOfferSnapshot_Result;
        responseOfferSnapshot_ResultToJSON(object: _154.ResponseOfferSnapshot_Result): string;
        responseApplySnapshotChunk_ResultFromJSON(object: any): _154.ResponseApplySnapshotChunk_Result;
        responseApplySnapshotChunk_ResultToJSON(object: _154.ResponseApplySnapshotChunk_Result): string;
        responseProcessProposal_ProposalStatusFromJSON(object: any): _154.ResponseProcessProposal_ProposalStatus;
        responseProcessProposal_ProposalStatusToJSON(object: _154.ResponseProcessProposal_ProposalStatus): string;
        misbehaviorTypeFromJSON(object: any): _154.MisbehaviorType;
        misbehaviorTypeToJSON(object: _154.MisbehaviorType): string;
        CheckTxType: typeof _154.CheckTxType;
        CheckTxTypeSDKType: typeof _154.CheckTxType;
        ResponseOfferSnapshot_Result: typeof _154.ResponseOfferSnapshot_Result;
        ResponseOfferSnapshot_ResultSDKType: typeof _154.ResponseOfferSnapshot_Result;
        ResponseApplySnapshotChunk_Result: typeof _154.ResponseApplySnapshotChunk_Result;
        ResponseApplySnapshotChunk_ResultSDKType: typeof _154.ResponseApplySnapshotChunk_Result;
        ResponseProcessProposal_ProposalStatus: typeof _154.ResponseProcessProposal_ProposalStatus;
        ResponseProcessProposal_ProposalStatusSDKType: typeof _154.ResponseProcessProposal_ProposalStatus;
        MisbehaviorType: typeof _154.MisbehaviorType;
        MisbehaviorTypeSDKType: typeof _154.MisbehaviorType;
        Request: {
            encode(message: _154.Request, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _154.Request;
            fromPartial(object: Partial<_154.Request>): _154.Request;
        };
        RequestEcho: {
            encode(message: _154.RequestEcho, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _154.RequestEcho;
            fromPartial(object: Partial<_154.RequestEcho>): _154.RequestEcho;
        };
        RequestFlush: {
            encode(_: _154.RequestFlush, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(_: any): _154.RequestFlush;
            fromPartial(_: Partial<_154.RequestFlush>): _154.RequestFlush;
        };
        RequestInfo: {
            encode(message: _154.RequestInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _154.RequestInfo;
            fromPartial(object: Partial<_154.RequestInfo>): _154.RequestInfo;
        };
        RequestInitChain: {
            encode(message: _154.RequestInitChain, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _154.RequestInitChain;
            fromPartial(object: Partial<_154.RequestInitChain>): _154.RequestInitChain;
        };
        RequestQuery: {
            encode(message: _154.RequestQuery, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _154.RequestQuery;
            fromPartial(object: Partial<_154.RequestQuery>): _154.RequestQuery;
        };
        RequestBeginBlock: {
            encode(message: _154.RequestBeginBlock, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _154.RequestBeginBlock;
            fromPartial(object: Partial<_154.RequestBeginBlock>): _154.RequestBeginBlock;
        };
        RequestCheckTx: {
            encode(message: _154.RequestCheckTx, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _154.RequestCheckTx;
            fromPartial(object: Partial<_154.RequestCheckTx>): _154.RequestCheckTx;
        };
        RequestDeliverTx: {
            encode(message: _154.RequestDeliverTx, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _154.RequestDeliverTx;
            fromPartial(object: Partial<_154.RequestDeliverTx>): _154.RequestDeliverTx;
        };
        RequestEndBlock: {
            encode(message: _154.RequestEndBlock, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _154.RequestEndBlock;
            fromPartial(object: Partial<_154.RequestEndBlock>): _154.RequestEndBlock;
        };
        RequestCommit: {
            encode(_: _154.RequestCommit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(_: any): _154.RequestCommit;
            fromPartial(_: Partial<_154.RequestCommit>): _154.RequestCommit;
        };
        RequestListSnapshots: {
            encode(_: _154.RequestListSnapshots, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(_: any): _154.RequestListSnapshots;
            fromPartial(_: Partial<_154.RequestListSnapshots>): _154.RequestListSnapshots;
        };
        RequestOfferSnapshot: {
            encode(message: _154.RequestOfferSnapshot, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _154.RequestOfferSnapshot;
            fromPartial(object: Partial<_154.RequestOfferSnapshot>): _154.RequestOfferSnapshot;
        };
        RequestLoadSnapshotChunk: {
            encode(message: _154.RequestLoadSnapshotChunk, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _154.RequestLoadSnapshotChunk;
            fromPartial(object: Partial<_154.RequestLoadSnapshotChunk>): _154.RequestLoadSnapshotChunk;
        };
        RequestApplySnapshotChunk: {
            encode(message: _154.RequestApplySnapshotChunk, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _154.RequestApplySnapshotChunk;
            fromPartial(object: Partial<_154.RequestApplySnapshotChunk>): _154.RequestApplySnapshotChunk;
        };
        RequestPrepareProposal: {
            encode(message: _154.RequestPrepareProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _154.RequestPrepareProposal;
            fromPartial(object: Partial<_154.RequestPrepareProposal>): _154.RequestPrepareProposal;
        };
        RequestProcessProposal: {
            encode(message: _154.RequestProcessProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _154.RequestProcessProposal;
            fromPartial(object: Partial<_154.RequestProcessProposal>): _154.RequestProcessProposal;
        };
        Response: {
            encode(message: _154.Response, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _154.Response;
            fromPartial(object: Partial<_154.Response>): _154.Response;
        };
        ResponseException: {
            encode(message: _154.ResponseException, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _154.ResponseException;
            fromPartial(object: Partial<_154.ResponseException>): _154.ResponseException;
        };
        ResponseEcho: {
            encode(message: _154.ResponseEcho, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _154.ResponseEcho;
            fromPartial(object: Partial<_154.ResponseEcho>): _154.ResponseEcho;
        };
        ResponseFlush: {
            encode(_: _154.ResponseFlush, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(_: any): _154.ResponseFlush;
            fromPartial(_: Partial<_154.ResponseFlush>): _154.ResponseFlush;
        };
        ResponseInfo: {
            encode(message: _154.ResponseInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _154.ResponseInfo;
            fromPartial(object: Partial<_154.ResponseInfo>): _154.ResponseInfo;
        };
        ResponseInitChain: {
            encode(message: _154.ResponseInitChain, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _154.ResponseInitChain;
            fromPartial(object: Partial<_154.ResponseInitChain>): _154.ResponseInitChain;
        };
        ResponseQuery: {
            encode(message: _154.ResponseQuery, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _154.ResponseQuery;
            fromPartial(object: Partial<_154.ResponseQuery>): _154.ResponseQuery;
        };
        ResponseBeginBlock: {
            encode(message: _154.ResponseBeginBlock, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _154.ResponseBeginBlock;
            fromPartial(object: Partial<_154.ResponseBeginBlock>): _154.ResponseBeginBlock;
        };
        ResponseCheckTx: {
            encode(message: _154.ResponseCheckTx, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _154.ResponseCheckTx;
            fromPartial(object: Partial<_154.ResponseCheckTx>): _154.ResponseCheckTx;
        };
        ResponseDeliverTx: {
            encode(message: _154.ResponseDeliverTx, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _154.ResponseDeliverTx;
            fromPartial(object: Partial<_154.ResponseDeliverTx>): _154.ResponseDeliverTx;
        };
        ResponseEndBlock: {
            encode(message: _154.ResponseEndBlock, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _154.ResponseEndBlock;
            fromPartial(object: Partial<_154.ResponseEndBlock>): _154.ResponseEndBlock;
        };
        ResponseCommit: {
            encode(message: _154.ResponseCommit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _154.ResponseCommit;
            fromPartial(object: Partial<_154.ResponseCommit>): _154.ResponseCommit;
        };
        ResponseListSnapshots: {
            encode(message: _154.ResponseListSnapshots, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _154.ResponseListSnapshots;
            fromPartial(object: Partial<_154.ResponseListSnapshots>): _154.ResponseListSnapshots;
        };
        ResponseOfferSnapshot: {
            encode(message: _154.ResponseOfferSnapshot, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _154.ResponseOfferSnapshot;
            fromPartial(object: Partial<_154.ResponseOfferSnapshot>): _154.ResponseOfferSnapshot;
        };
        ResponseLoadSnapshotChunk: {
            encode(message: _154.ResponseLoadSnapshotChunk, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _154.ResponseLoadSnapshotChunk;
            fromPartial(object: Partial<_154.ResponseLoadSnapshotChunk>): _154.ResponseLoadSnapshotChunk;
        };
        ResponseApplySnapshotChunk: {
            encode(message: _154.ResponseApplySnapshotChunk, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _154.ResponseApplySnapshotChunk;
            fromPartial(object: Partial<_154.ResponseApplySnapshotChunk>): _154.ResponseApplySnapshotChunk;
        };
        ResponsePrepareProposal: {
            encode(message: _154.ResponsePrepareProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _154.ResponsePrepareProposal;
            fromPartial(object: Partial<_154.ResponsePrepareProposal>): _154.ResponsePrepareProposal;
        };
        ResponseProcessProposal: {
            encode(message: _154.ResponseProcessProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _154.ResponseProcessProposal;
            fromPartial(object: Partial<_154.ResponseProcessProposal>): _154.ResponseProcessProposal;
        };
        CommitInfo: {
            encode(message: _154.CommitInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _154.CommitInfo;
            fromPartial(object: Partial<_154.CommitInfo>): _154.CommitInfo;
        };
        ExtendedCommitInfo: {
            encode(message: _154.ExtendedCommitInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _154.ExtendedCommitInfo;
            fromPartial(object: Partial<_154.ExtendedCommitInfo>): _154.ExtendedCommitInfo;
        };
        Event: {
            encode(message: _154.Event, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _154.Event;
            fromPartial(object: Partial<_154.Event>): _154.Event;
        };
        EventAttribute: {
            encode(message: _154.EventAttribute, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _154.EventAttribute;
            fromPartial(object: Partial<_154.EventAttribute>): _154.EventAttribute;
        };
        TxResult: {
            encode(message: _154.TxResult, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _154.TxResult;
            fromPartial(object: Partial<_154.TxResult>): _154.TxResult;
        };
        Validator: {
            encode(message: _154.Validator, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _154.Validator;
            fromPartial(object: Partial<_154.Validator>): _154.Validator;
        };
        ValidatorUpdate: {
            encode(message: _154.ValidatorUpdate, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _154.ValidatorUpdate;
            fromPartial(object: Partial<_154.ValidatorUpdate>): _154.ValidatorUpdate;
        };
        VoteInfo: {
            encode(message: _154.VoteInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _154.VoteInfo;
            fromPartial(object: Partial<_154.VoteInfo>): _154.VoteInfo;
        };
        ExtendedVoteInfo: {
            encode(message: _154.ExtendedVoteInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _154.ExtendedVoteInfo;
            fromPartial(object: Partial<_154.ExtendedVoteInfo>): _154.ExtendedVoteInfo;
        };
        Misbehavior: {
            encode(message: _154.Misbehavior, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _154.Misbehavior;
            fromPartial(object: Partial<_154.Misbehavior>): _154.Misbehavior;
        };
        Snapshot: {
            encode(message: _154.Snapshot, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _154.Snapshot;
            fromPartial(object: Partial<_154.Snapshot>): _154.Snapshot;
        };
    };
    const blocksync: {
        BlockRequest: {
            encode(message: _155.BlockRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _155.BlockRequest;
            fromPartial(object: Partial<_155.BlockRequest>): _155.BlockRequest;
        };
        NoBlockResponse: {
            encode(message: _155.NoBlockResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _155.NoBlockResponse;
            fromPartial(object: Partial<_155.NoBlockResponse>): _155.NoBlockResponse;
        };
        BlockResponse: {
            encode(message: _155.BlockResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _155.BlockResponse;
            fromPartial(object: Partial<_155.BlockResponse>): _155.BlockResponse;
        };
        StatusRequest: {
            encode(_: _155.StatusRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(_: any): _155.StatusRequest;
            fromPartial(_: Partial<_155.StatusRequest>): _155.StatusRequest;
        };
        StatusResponse: {
            encode(message: _155.StatusResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _155.StatusResponse;
            fromPartial(object: Partial<_155.StatusResponse>): _155.StatusResponse;
        };
        Message: {
            encode(message: _155.Message, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _155.Message;
            fromPartial(object: Partial<_155.Message>): _155.Message;
        };
    };
    const consensus: {
        MsgInfo: {
            encode(message: _157.MsgInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _157.MsgInfo;
            fromPartial(object: Partial<_157.MsgInfo>): _157.MsgInfo;
        };
        TimeoutInfo: {
            encode(message: _157.TimeoutInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _157.TimeoutInfo;
            fromPartial(object: Partial<_157.TimeoutInfo>): _157.TimeoutInfo;
        };
        EndHeight: {
            encode(message: _157.EndHeight, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _157.EndHeight;
            fromPartial(object: Partial<_157.EndHeight>): _157.EndHeight;
        };
        WALMessage: {
            encode(message: _157.WALMessage, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _157.WALMessage;
            fromPartial(object: Partial<_157.WALMessage>): _157.WALMessage;
        };
        TimedWALMessage: {
            encode(message: _157.TimedWALMessage, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _157.TimedWALMessage;
            fromPartial(object: Partial<_157.TimedWALMessage>): _157.TimedWALMessage;
        };
        NewRoundStep: {
            encode(message: _156.NewRoundStep, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _156.NewRoundStep;
            fromPartial(object: Partial<_156.NewRoundStep>): _156.NewRoundStep;
        };
        NewValidBlock: {
            encode(message: _156.NewValidBlock, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _156.NewValidBlock;
            fromPartial(object: Partial<_156.NewValidBlock>): _156.NewValidBlock;
        };
        Proposal: {
            encode(message: _156.Proposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _156.Proposal;
            fromPartial(object: Partial<_156.Proposal>): _156.Proposal;
        };
        ProposalPOL: {
            encode(message: _156.ProposalPOL, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _156.ProposalPOL;
            fromPartial(object: Partial<_156.ProposalPOL>): _156.ProposalPOL;
        };
        BlockPart: {
            encode(message: _156.BlockPart, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _156.BlockPart;
            fromPartial(object: Partial<_156.BlockPart>): _156.BlockPart;
        };
        Vote: {
            encode(message: _156.Vote, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _156.Vote;
            fromPartial(object: Partial<_156.Vote>): _156.Vote;
        };
        HasVote: {
            encode(message: _156.HasVote, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _156.HasVote;
            fromPartial(object: Partial<_156.HasVote>): _156.HasVote;
        };
        VoteSetMaj23: {
            encode(message: _156.VoteSetMaj23, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _156.VoteSetMaj23;
            fromPartial(object: Partial<_156.VoteSetMaj23>): _156.VoteSetMaj23;
        };
        VoteSetBits: {
            encode(message: _156.VoteSetBits, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _156.VoteSetBits;
            fromPartial(object: Partial<_156.VoteSetBits>): _156.VoteSetBits;
        };
        Message: {
            encode(message: _156.Message, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _156.Message;
            fromPartial(object: Partial<_156.Message>): _156.Message;
        };
    };
    const crypto: {
        Proof: {
            encode(message: _159.Proof, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _159.Proof;
            fromPartial(object: Partial<_159.Proof>): _159.Proof;
        };
        ValueOp: {
            encode(message: _159.ValueOp, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _159.ValueOp;
            fromPartial(object: Partial<_159.ValueOp>): _159.ValueOp;
        };
        DominoOp: {
            encode(message: _159.DominoOp, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _159.DominoOp;
            fromPartial(object: Partial<_159.DominoOp>): _159.DominoOp;
        };
        ProofOp: {
            encode(message: _159.ProofOp, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _159.ProofOp;
            fromPartial(object: Partial<_159.ProofOp>): _159.ProofOp;
        };
        ProofOps: {
            encode(message: _159.ProofOps, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _159.ProofOps;
            fromPartial(object: Partial<_159.ProofOps>): _159.ProofOps;
        };
        PublicKey: {
            encode(message: _158.PublicKey, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _158.PublicKey;
            fromPartial(object: Partial<_158.PublicKey>): _158.PublicKey;
        };
    };
    namespace libs {
        const bits: {
            BitArray: {
                encode(message: _160.BitArray, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _160.BitArray;
                fromPartial(object: Partial<_160.BitArray>): _160.BitArray;
            };
        };
    }
    const mempool: {
        Txs: {
            encode(message: _161.Txs, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _161.Txs;
            fromPartial(object: Partial<_161.Txs>): _161.Txs;
        };
        Message: {
            encode(message: _161.Message, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _161.Message;
            fromPartial(object: Partial<_161.Message>): _161.Message;
        };
    };
    const p2p: {
        NetAddress: {
            encode(message: _164.NetAddress, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _164.NetAddress;
            fromPartial(object: Partial<_164.NetAddress>): _164.NetAddress;
        };
        ProtocolVersion: {
            encode(message: _164.ProtocolVersion, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _164.ProtocolVersion;
            fromPartial(object: Partial<_164.ProtocolVersion>): _164.ProtocolVersion;
        };
        DefaultNodeInfo: {
            encode(message: _164.DefaultNodeInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _164.DefaultNodeInfo;
            fromPartial(object: Partial<_164.DefaultNodeInfo>): _164.DefaultNodeInfo;
        };
        DefaultNodeInfoOther: {
            encode(message: _164.DefaultNodeInfoOther, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _164.DefaultNodeInfoOther;
            fromPartial(object: Partial<_164.DefaultNodeInfoOther>): _164.DefaultNodeInfoOther;
        };
        PexRequest: {
            encode(_: _163.PexRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(_: any): _163.PexRequest;
            fromPartial(_: Partial<_163.PexRequest>): _163.PexRequest;
        };
        PexAddrs: {
            encode(message: _163.PexAddrs, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _163.PexAddrs;
            fromPartial(object: Partial<_163.PexAddrs>): _163.PexAddrs;
        };
        Message: {
            encode(message: _163.Message, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _163.Message;
            fromPartial(object: Partial<_163.Message>): _163.Message;
        };
        PacketPing: {
            encode(_: _162.PacketPing, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(_: any): _162.PacketPing;
            fromPartial(_: Partial<_162.PacketPing>): _162.PacketPing;
        };
        PacketPong: {
            encode(_: _162.PacketPong, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(_: any): _162.PacketPong;
            fromPartial(_: Partial<_162.PacketPong>): _162.PacketPong;
        };
        PacketMsg: {
            encode(message: _162.PacketMsg, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _162.PacketMsg;
            fromPartial(object: Partial<_162.PacketMsg>): _162.PacketMsg;
        };
        Packet: {
            encode(message: _162.Packet, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _162.Packet;
            fromPartial(object: Partial<_162.Packet>): _162.Packet;
        };
        AuthSigMessage: {
            encode(message: _162.AuthSigMessage, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _162.AuthSigMessage;
            fromPartial(object: Partial<_162.AuthSigMessage>): _162.AuthSigMessage;
        };
    };
    const privval: {
        errorsFromJSON(object: any): _165.Errors;
        errorsToJSON(object: _165.Errors): string;
        Errors: typeof _165.Errors;
        ErrorsSDKType: typeof _165.Errors;
        RemoteSignerError: {
            encode(message: _165.RemoteSignerError, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _165.RemoteSignerError;
            fromPartial(object: Partial<_165.RemoteSignerError>): _165.RemoteSignerError;
        };
        PubKeyRequest: {
            encode(message: _165.PubKeyRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _165.PubKeyRequest;
            fromPartial(object: Partial<_165.PubKeyRequest>): _165.PubKeyRequest;
        };
        PubKeyResponse: {
            encode(message: _165.PubKeyResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _165.PubKeyResponse;
            fromPartial(object: Partial<_165.PubKeyResponse>): _165.PubKeyResponse;
        };
        SignVoteRequest: {
            encode(message: _165.SignVoteRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _165.SignVoteRequest;
            fromPartial(object: Partial<_165.SignVoteRequest>): _165.SignVoteRequest;
        };
        SignedVoteResponse: {
            encode(message: _165.SignedVoteResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _165.SignedVoteResponse;
            fromPartial(object: Partial<_165.SignedVoteResponse>): _165.SignedVoteResponse;
        };
        SignProposalRequest: {
            encode(message: _165.SignProposalRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _165.SignProposalRequest;
            fromPartial(object: Partial<_165.SignProposalRequest>): _165.SignProposalRequest;
        };
        SignedProposalResponse: {
            encode(message: _165.SignedProposalResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _165.SignedProposalResponse;
            fromPartial(object: Partial<_165.SignedProposalResponse>): _165.SignedProposalResponse;
        };
        PingRequest: {
            encode(_: _165.PingRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(_: any): _165.PingRequest;
            fromPartial(_: Partial<_165.PingRequest>): _165.PingRequest;
        };
        PingResponse: {
            encode(_: _165.PingResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(_: any): _165.PingResponse;
            fromPartial(_: Partial<_165.PingResponse>): _165.PingResponse;
        };
        Message: {
            encode(message: _165.Message, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _165.Message;
            fromPartial(object: Partial<_165.Message>): _165.Message;
        };
    };
    namespace rpc {
        const grpc: {
            RequestPing: {
                encode(_: _166.RequestPing, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _166.RequestPing;
                fromPartial(_: Partial<_166.RequestPing>): _166.RequestPing;
            };
            RequestBroadcastTx: {
                encode(message: _166.RequestBroadcastTx, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _166.RequestBroadcastTx;
                fromPartial(object: Partial<_166.RequestBroadcastTx>): _166.RequestBroadcastTx;
            };
            ResponsePing: {
                encode(_: _166.ResponsePing, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _166.ResponsePing;
                fromPartial(_: Partial<_166.ResponsePing>): _166.ResponsePing;
            };
            ResponseBroadcastTx: {
                encode(message: _166.ResponseBroadcastTx, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _166.ResponseBroadcastTx;
                fromPartial(object: Partial<_166.ResponseBroadcastTx>): _166.ResponseBroadcastTx;
            };
        };
    }
    const state: {
        ABCIResponses: {
            encode(message: _167.ABCIResponses, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _167.ABCIResponses;
            fromPartial(object: Partial<_167.ABCIResponses>): _167.ABCIResponses;
        };
        ValidatorsInfo: {
            encode(message: _167.ValidatorsInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _167.ValidatorsInfo;
            fromPartial(object: Partial<_167.ValidatorsInfo>): _167.ValidatorsInfo;
        };
        ConsensusParamsInfo: {
            encode(message: _167.ConsensusParamsInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _167.ConsensusParamsInfo;
            fromPartial(object: Partial<_167.ConsensusParamsInfo>): _167.ConsensusParamsInfo;
        };
        ABCIResponsesInfo: {
            encode(message: _167.ABCIResponsesInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _167.ABCIResponsesInfo;
            fromPartial(object: Partial<_167.ABCIResponsesInfo>): _167.ABCIResponsesInfo;
        };
        Version: {
            encode(message: _167.Version, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _167.Version;
            fromPartial(object: Partial<_167.Version>): _167.Version;
        };
        State: {
            encode(message: _167.State, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _167.State;
            fromPartial(object: Partial<_167.State>): _167.State;
        };
    };
    const statesync: {
        Message: {
            encode(message: _168.Message, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _168.Message;
            fromPartial(object: Partial<_168.Message>): _168.Message;
        };
        SnapshotsRequest: {
            encode(_: _168.SnapshotsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(_: any): _168.SnapshotsRequest;
            fromPartial(_: Partial<_168.SnapshotsRequest>): _168.SnapshotsRequest;
        };
        SnapshotsResponse: {
            encode(message: _168.SnapshotsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _168.SnapshotsResponse;
            fromPartial(object: Partial<_168.SnapshotsResponse>): _168.SnapshotsResponse;
        };
        ChunkRequest: {
            encode(message: _168.ChunkRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _168.ChunkRequest;
            fromPartial(object: Partial<_168.ChunkRequest>): _168.ChunkRequest;
        };
        ChunkResponse: {
            encode(message: _168.ChunkResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _168.ChunkResponse;
            fromPartial(object: Partial<_168.ChunkResponse>): _168.ChunkResponse;
        };
    };
    const store: {
        BlockStoreState: {
            encode(message: _169.BlockStoreState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _169.BlockStoreState;
            fromPartial(object: Partial<_169.BlockStoreState>): _169.BlockStoreState;
        };
    };
    const types: {
        ValidatorSet: {
            encode(message: _176.ValidatorSet, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _176.ValidatorSet;
            fromPartial(object: Partial<_176.ValidatorSet>): _176.ValidatorSet;
        };
        Validator: {
            encode(message: _176.Validator, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _176.Validator;
            fromPartial(object: Partial<_176.Validator>): _176.Validator;
        };
        SimpleValidator: {
            encode(message: _176.SimpleValidator, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _176.SimpleValidator;
            fromPartial(object: Partial<_176.SimpleValidator>): _176.SimpleValidator;
        };
        blockIDFlagFromJSON(object: any): _175.BlockIDFlag;
        blockIDFlagToJSON(object: _175.BlockIDFlag): string;
        signedMsgTypeFromJSON(object: any): _175.SignedMsgType;
        signedMsgTypeToJSON(object: _175.SignedMsgType): string;
        BlockIDFlag: typeof _175.BlockIDFlag;
        BlockIDFlagSDKType: typeof _175.BlockIDFlag;
        SignedMsgType: typeof _175.SignedMsgType;
        SignedMsgTypeSDKType: typeof _175.SignedMsgType;
        PartSetHeader: {
            encode(message: _175.PartSetHeader, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _175.PartSetHeader;
            fromPartial(object: Partial<_175.PartSetHeader>): _175.PartSetHeader;
        };
        Part: {
            encode(message: _175.Part, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _175.Part;
            fromPartial(object: Partial<_175.Part>): _175.Part;
        };
        BlockID: {
            encode(message: _175.BlockID, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _175.BlockID;
            fromPartial(object: Partial<_175.BlockID>): _175.BlockID;
        };
        Header: {
            encode(message: _175.Header, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _175.Header;
            fromPartial(object: Partial<_175.Header>): _175.Header;
        };
        Data: {
            encode(message: _175.Data, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _175.Data;
            fromPartial(object: Partial<_175.Data>): _175.Data;
        };
        Vote: {
            encode(message: _175.Vote, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _175.Vote;
            fromPartial(object: Partial<_175.Vote>): _175.Vote;
        };
        Commit: {
            encode(message: _175.Commit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _175.Commit;
            fromPartial(object: Partial<_175.Commit>): _175.Commit;
        };
        CommitSig: {
            encode(message: _175.CommitSig, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _175.CommitSig;
            fromPartial(object: Partial<_175.CommitSig>): _175.CommitSig;
        };
        Proposal: {
            encode(message: _175.Proposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _175.Proposal;
            fromPartial(object: Partial<_175.Proposal>): _175.Proposal;
        };
        SignedHeader: {
            encode(message: _175.SignedHeader, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _175.SignedHeader;
            fromPartial(object: Partial<_175.SignedHeader>): _175.SignedHeader;
        };
        LightBlock: {
            encode(message: _175.LightBlock, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _175.LightBlock;
            fromPartial(object: Partial<_175.LightBlock>): _175.LightBlock;
        };
        BlockMeta: {
            encode(message: _175.BlockMeta, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _175.BlockMeta;
            fromPartial(object: Partial<_175.BlockMeta>): _175.BlockMeta;
        };
        TxProof: {
            encode(message: _175.TxProof, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _175.TxProof;
            fromPartial(object: Partial<_175.TxProof>): _175.TxProof;
        };
        ConsensusParams: {
            encode(message: _174.ConsensusParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _174.ConsensusParams;
            fromPartial(object: Partial<_174.ConsensusParams>): _174.ConsensusParams;
        };
        BlockParams: {
            encode(message: _174.BlockParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _174.BlockParams;
            fromPartial(object: Partial<_174.BlockParams>): _174.BlockParams;
        };
        EvidenceParams: {
            encode(message: _174.EvidenceParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _174.EvidenceParams;
            fromPartial(object: Partial<_174.EvidenceParams>): _174.EvidenceParams;
        };
        ValidatorParams: {
            encode(message: _174.ValidatorParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _174.ValidatorParams;
            fromPartial(object: Partial<_174.ValidatorParams>): _174.ValidatorParams;
        };
        VersionParams: {
            encode(message: _174.VersionParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _174.VersionParams;
            fromPartial(object: Partial<_174.VersionParams>): _174.VersionParams;
        };
        HashedParams: {
            encode(message: _174.HashedParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _174.HashedParams;
            fromPartial(object: Partial<_174.HashedParams>): _174.HashedParams;
        };
        Evidence: {
            encode(message: _173.Evidence, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _173.Evidence;
            fromPartial(object: Partial<_173.Evidence>): _173.Evidence;
        };
        DuplicateVoteEvidence: {
            encode(message: _173.DuplicateVoteEvidence, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _173.DuplicateVoteEvidence;
            fromPartial(object: Partial<_173.DuplicateVoteEvidence>): _173.DuplicateVoteEvidence;
        };
        LightClientAttackEvidence: {
            encode(message: _173.LightClientAttackEvidence, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _173.LightClientAttackEvidence;
            fromPartial(object: Partial<_173.LightClientAttackEvidence>): _173.LightClientAttackEvidence;
        };
        EvidenceList: {
            encode(message: _173.EvidenceList, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _173.EvidenceList;
            fromPartial(object: Partial<_173.EvidenceList>): _173.EvidenceList;
        };
        EventDataRoundState: {
            encode(message: _172.EventDataRoundState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _172.EventDataRoundState;
            fromPartial(object: Partial<_172.EventDataRoundState>): _172.EventDataRoundState;
        };
        CanonicalBlockID: {
            encode(message: _171.CanonicalBlockID, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _171.CanonicalBlockID;
            fromPartial(object: Partial<_171.CanonicalBlockID>): _171.CanonicalBlockID;
        };
        CanonicalPartSetHeader: {
            encode(message: _171.CanonicalPartSetHeader, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _171.CanonicalPartSetHeader;
            fromPartial(object: Partial<_171.CanonicalPartSetHeader>): _171.CanonicalPartSetHeader;
        };
        CanonicalProposal: {
            encode(message: _171.CanonicalProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _171.CanonicalProposal;
            fromPartial(object: Partial<_171.CanonicalProposal>): _171.CanonicalProposal;
        };
        CanonicalVote: {
            encode(message: _171.CanonicalVote, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _171.CanonicalVote;
            fromPartial(object: Partial<_171.CanonicalVote>): _171.CanonicalVote;
        };
        Block: {
            encode(message: _170.Block, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _170.Block;
            fromPartial(object: Partial<_170.Block>): _170.Block;
        };
    };
    const version: {
        App: {
            encode(message: _177.App, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _177.App;
            fromPartial(object: Partial<_177.App>): _177.App;
        };
        Consensus: {
            encode(message: _177.Consensus, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _177.Consensus;
            fromPartial(object: Partial<_177.Consensus>): _177.Consensus;
        };
    };
}
