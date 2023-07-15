import * as _78 from "./abci/types";
import * as _79 from "./blockchain/types";
import * as _80 from "./consensus/types";
import * as _81 from "./consensus/wal";
import * as _82 from "./crypto/keys";
import * as _83 from "./crypto/proof";
import * as _84 from "./libs/bits/types";
import * as _85 from "./mempool/types";
import * as _86 from "./p2p/conn";
import * as _87 from "./p2p/pex";
import * as _88 from "./p2p/types";
import * as _89 from "./privval/types";
import * as _90 from "./rpc/grpc/types";
import * as _91 from "./state/types";
import * as _92 from "./statesync/types";
import * as _93 from "./store/types";
import * as _94 from "./types/block";
import * as _95 from "./types/canonical";
import * as _96 from "./types/events";
import * as _97 from "./types/evidence";
import * as _98 from "./types/params";
import * as _99 from "./types/types";
import * as _100 from "./types/validator";
import * as _101 from "./version/types";
export declare namespace tendermint {
    const abci: {
        checkTxTypeFromJSON(object: any): _78.CheckTxType;
        checkTxTypeToJSON(object: _78.CheckTxType): string;
        responseOfferSnapshot_ResultFromJSON(object: any): _78.ResponseOfferSnapshot_Result;
        responseOfferSnapshot_ResultToJSON(object: _78.ResponseOfferSnapshot_Result): string;
        responseApplySnapshotChunk_ResultFromJSON(object: any): _78.ResponseApplySnapshotChunk_Result;
        responseApplySnapshotChunk_ResultToJSON(object: _78.ResponseApplySnapshotChunk_Result): string;
        evidenceTypeFromJSON(object: any): _78.EvidenceType;
        evidenceTypeToJSON(object: _78.EvidenceType): string;
        CheckTxType: typeof _78.CheckTxType;
        CheckTxTypeSDKType: typeof _78.CheckTxType;
        ResponseOfferSnapshot_Result: typeof _78.ResponseOfferSnapshot_Result;
        ResponseOfferSnapshot_ResultSDKType: typeof _78.ResponseOfferSnapshot_Result;
        ResponseApplySnapshotChunk_Result: typeof _78.ResponseApplySnapshotChunk_Result;
        ResponseApplySnapshotChunk_ResultSDKType: typeof _78.ResponseApplySnapshotChunk_Result;
        EvidenceType: typeof _78.EvidenceType;
        EvidenceTypeSDKType: typeof _78.EvidenceType;
        Request: {
            encode(message: _78.Request, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _78.Request;
            fromPartial(object: Partial<_78.Request>): _78.Request;
        };
        RequestEcho: {
            encode(message: _78.RequestEcho, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _78.RequestEcho;
            fromPartial(object: Partial<_78.RequestEcho>): _78.RequestEcho;
        };
        RequestFlush: {
            encode(_: _78.RequestFlush, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(_: any): _78.RequestFlush;
            fromPartial(_: Partial<_78.RequestFlush>): _78.RequestFlush;
        };
        RequestInfo: {
            encode(message: _78.RequestInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _78.RequestInfo;
            fromPartial(object: Partial<_78.RequestInfo>): _78.RequestInfo;
        };
        RequestSetOption: {
            encode(message: _78.RequestSetOption, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _78.RequestSetOption;
            fromPartial(object: Partial<_78.RequestSetOption>): _78.RequestSetOption;
        };
        RequestInitChain: {
            encode(message: _78.RequestInitChain, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _78.RequestInitChain;
            fromPartial(object: Partial<_78.RequestInitChain>): _78.RequestInitChain;
        };
        RequestQuery: {
            encode(message: _78.RequestQuery, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _78.RequestQuery;
            fromPartial(object: Partial<_78.RequestQuery>): _78.RequestQuery;
        };
        RequestBeginBlock: {
            encode(message: _78.RequestBeginBlock, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _78.RequestBeginBlock;
            fromPartial(object: Partial<_78.RequestBeginBlock>): _78.RequestBeginBlock;
        };
        RequestCheckTx: {
            encode(message: _78.RequestCheckTx, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _78.RequestCheckTx;
            fromPartial(object: Partial<_78.RequestCheckTx>): _78.RequestCheckTx;
        };
        RequestDeliverTx: {
            encode(message: _78.RequestDeliverTx, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _78.RequestDeliverTx;
            fromPartial(object: Partial<_78.RequestDeliverTx>): _78.RequestDeliverTx;
        };
        RequestEndBlock: {
            encode(message: _78.RequestEndBlock, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _78.RequestEndBlock;
            fromPartial(object: Partial<_78.RequestEndBlock>): _78.RequestEndBlock;
        };
        RequestCommit: {
            encode(_: _78.RequestCommit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(_: any): _78.RequestCommit;
            fromPartial(_: Partial<_78.RequestCommit>): _78.RequestCommit;
        };
        RequestListSnapshots: {
            encode(_: _78.RequestListSnapshots, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(_: any): _78.RequestListSnapshots;
            fromPartial(_: Partial<_78.RequestListSnapshots>): _78.RequestListSnapshots;
        };
        RequestOfferSnapshot: {
            encode(message: _78.RequestOfferSnapshot, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _78.RequestOfferSnapshot;
            fromPartial(object: Partial<_78.RequestOfferSnapshot>): _78.RequestOfferSnapshot;
        };
        RequestLoadSnapshotChunk: {
            encode(message: _78.RequestLoadSnapshotChunk, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _78.RequestLoadSnapshotChunk;
            fromPartial(object: Partial<_78.RequestLoadSnapshotChunk>): _78.RequestLoadSnapshotChunk;
        };
        RequestApplySnapshotChunk: {
            encode(message: _78.RequestApplySnapshotChunk, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _78.RequestApplySnapshotChunk;
            fromPartial(object: Partial<_78.RequestApplySnapshotChunk>): _78.RequestApplySnapshotChunk;
        };
        Response: {
            encode(message: _78.Response, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _78.Response;
            fromPartial(object: Partial<_78.Response>): _78.Response;
        };
        ResponseException: {
            encode(message: _78.ResponseException, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _78.ResponseException;
            fromPartial(object: Partial<_78.ResponseException>): _78.ResponseException;
        };
        ResponseEcho: {
            encode(message: _78.ResponseEcho, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _78.ResponseEcho;
            fromPartial(object: Partial<_78.ResponseEcho>): _78.ResponseEcho;
        };
        ResponseFlush: {
            encode(_: _78.ResponseFlush, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(_: any): _78.ResponseFlush;
            fromPartial(_: Partial<_78.ResponseFlush>): _78.ResponseFlush;
        };
        ResponseInfo: {
            encode(message: _78.ResponseInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _78.ResponseInfo;
            fromPartial(object: Partial<_78.ResponseInfo>): _78.ResponseInfo;
        };
        ResponseSetOption: {
            encode(message: _78.ResponseSetOption, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _78.ResponseSetOption;
            fromPartial(object: Partial<_78.ResponseSetOption>): _78.ResponseSetOption;
        };
        ResponseInitChain: {
            encode(message: _78.ResponseInitChain, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _78.ResponseInitChain;
            fromPartial(object: Partial<_78.ResponseInitChain>): _78.ResponseInitChain;
        };
        ResponseQuery: {
            encode(message: _78.ResponseQuery, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _78.ResponseQuery;
            fromPartial(object: Partial<_78.ResponseQuery>): _78.ResponseQuery;
        };
        ResponseBeginBlock: {
            encode(message: _78.ResponseBeginBlock, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _78.ResponseBeginBlock;
            fromPartial(object: Partial<_78.ResponseBeginBlock>): _78.ResponseBeginBlock;
        };
        ResponseCheckTx: {
            encode(message: _78.ResponseCheckTx, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _78.ResponseCheckTx;
            fromPartial(object: Partial<_78.ResponseCheckTx>): _78.ResponseCheckTx;
        };
        ResponseDeliverTx: {
            encode(message: _78.ResponseDeliverTx, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _78.ResponseDeliverTx;
            fromPartial(object: Partial<_78.ResponseDeliverTx>): _78.ResponseDeliverTx;
        };
        ResponseEndBlock: {
            encode(message: _78.ResponseEndBlock, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _78.ResponseEndBlock;
            fromPartial(object: Partial<_78.ResponseEndBlock>): _78.ResponseEndBlock;
        };
        ResponseCommit: {
            encode(message: _78.ResponseCommit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _78.ResponseCommit;
            fromPartial(object: Partial<_78.ResponseCommit>): _78.ResponseCommit;
        };
        ResponseListSnapshots: {
            encode(message: _78.ResponseListSnapshots, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _78.ResponseListSnapshots;
            fromPartial(object: Partial<_78.ResponseListSnapshots>): _78.ResponseListSnapshots;
        };
        ResponseOfferSnapshot: {
            encode(message: _78.ResponseOfferSnapshot, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _78.ResponseOfferSnapshot;
            fromPartial(object: Partial<_78.ResponseOfferSnapshot>): _78.ResponseOfferSnapshot;
        };
        ResponseLoadSnapshotChunk: {
            encode(message: _78.ResponseLoadSnapshotChunk, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _78.ResponseLoadSnapshotChunk;
            fromPartial(object: Partial<_78.ResponseLoadSnapshotChunk>): _78.ResponseLoadSnapshotChunk;
        };
        ResponseApplySnapshotChunk: {
            encode(message: _78.ResponseApplySnapshotChunk, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _78.ResponseApplySnapshotChunk;
            fromPartial(object: Partial<_78.ResponseApplySnapshotChunk>): _78.ResponseApplySnapshotChunk;
        };
        ConsensusParams: {
            encode(message: _78.ConsensusParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _78.ConsensusParams;
            fromPartial(object: Partial<_78.ConsensusParams>): _78.ConsensusParams;
        };
        BlockParams: {
            encode(message: _78.BlockParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _78.BlockParams;
            fromPartial(object: Partial<_78.BlockParams>): _78.BlockParams;
        };
        LastCommitInfo: {
            encode(message: _78.LastCommitInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _78.LastCommitInfo;
            fromPartial(object: Partial<_78.LastCommitInfo>): _78.LastCommitInfo;
        };
        Event: {
            encode(message: _78.Event, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _78.Event;
            fromPartial(object: Partial<_78.Event>): _78.Event;
        };
        EventAttribute: {
            encode(message: _78.EventAttribute, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _78.EventAttribute;
            fromPartial(object: Partial<_78.EventAttribute>): _78.EventAttribute;
        };
        TxResult: {
            encode(message: _78.TxResult, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _78.TxResult;
            fromPartial(object: Partial<_78.TxResult>): _78.TxResult;
        };
        Validator: {
            encode(message: _78.Validator, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _78.Validator;
            fromPartial(object: Partial<_78.Validator>): _78.Validator;
        };
        ValidatorUpdate: {
            encode(message: _78.ValidatorUpdate, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _78.ValidatorUpdate;
            fromPartial(object: Partial<_78.ValidatorUpdate>): _78.ValidatorUpdate;
        };
        VoteInfo: {
            encode(message: _78.VoteInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _78.VoteInfo;
            fromPartial(object: Partial<_78.VoteInfo>): _78.VoteInfo;
        };
        Evidence: {
            encode(message: _78.Evidence, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _78.Evidence;
            fromPartial(object: Partial<_78.Evidence>): _78.Evidence;
        };
        Snapshot: {
            encode(message: _78.Snapshot, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _78.Snapshot;
            fromPartial(object: Partial<_78.Snapshot>): _78.Snapshot;
        };
    };
    const blockchain: {
        BlockRequest: {
            encode(message: _79.BlockRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _79.BlockRequest;
            fromPartial(object: Partial<_79.BlockRequest>): _79.BlockRequest;
        };
        NoBlockResponse: {
            encode(message: _79.NoBlockResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _79.NoBlockResponse;
            fromPartial(object: Partial<_79.NoBlockResponse>): _79.NoBlockResponse;
        };
        BlockResponse: {
            encode(message: _79.BlockResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _79.BlockResponse;
            fromPartial(object: Partial<_79.BlockResponse>): _79.BlockResponse;
        };
        StatusRequest: {
            encode(_: _79.StatusRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(_: any): _79.StatusRequest;
            fromPartial(_: Partial<_79.StatusRequest>): _79.StatusRequest;
        };
        StatusResponse: {
            encode(message: _79.StatusResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _79.StatusResponse;
            fromPartial(object: Partial<_79.StatusResponse>): _79.StatusResponse;
        };
        Message: {
            encode(message: _79.Message, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _79.Message;
            fromPartial(object: Partial<_79.Message>): _79.Message;
        };
    };
    const consensus: {
        MsgInfo: {
            encode(message: _81.MsgInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _81.MsgInfo;
            fromPartial(object: Partial<_81.MsgInfo>): _81.MsgInfo;
        };
        TimeoutInfo: {
            encode(message: _81.TimeoutInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _81.TimeoutInfo;
            fromPartial(object: Partial<_81.TimeoutInfo>): _81.TimeoutInfo;
        };
        EndHeight: {
            encode(message: _81.EndHeight, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _81.EndHeight;
            fromPartial(object: Partial<_81.EndHeight>): _81.EndHeight;
        };
        WALMessage: {
            encode(message: _81.WALMessage, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _81.WALMessage;
            fromPartial(object: Partial<_81.WALMessage>): _81.WALMessage;
        };
        TimedWALMessage: {
            encode(message: _81.TimedWALMessage, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _81.TimedWALMessage;
            fromPartial(object: Partial<_81.TimedWALMessage>): _81.TimedWALMessage;
        };
        NewRoundStep: {
            encode(message: _80.NewRoundStep, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _80.NewRoundStep;
            fromPartial(object: Partial<_80.NewRoundStep>): _80.NewRoundStep;
        };
        NewValidBlock: {
            encode(message: _80.NewValidBlock, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _80.NewValidBlock;
            fromPartial(object: Partial<_80.NewValidBlock>): _80.NewValidBlock;
        };
        Proposal: {
            encode(message: _80.Proposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _80.Proposal;
            fromPartial(object: Partial<_80.Proposal>): _80.Proposal;
        };
        ProposalPOL: {
            encode(message: _80.ProposalPOL, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _80.ProposalPOL;
            fromPartial(object: Partial<_80.ProposalPOL>): _80.ProposalPOL;
        };
        BlockPart: {
            encode(message: _80.BlockPart, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _80.BlockPart;
            fromPartial(object: Partial<_80.BlockPart>): _80.BlockPart;
        };
        Vote: {
            encode(message: _80.Vote, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _80.Vote;
            fromPartial(object: Partial<_80.Vote>): _80.Vote;
        };
        HasVote: {
            encode(message: _80.HasVote, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _80.HasVote;
            fromPartial(object: Partial<_80.HasVote>): _80.HasVote;
        };
        VoteSetMaj23: {
            encode(message: _80.VoteSetMaj23, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _80.VoteSetMaj23;
            fromPartial(object: Partial<_80.VoteSetMaj23>): _80.VoteSetMaj23;
        };
        VoteSetBits: {
            encode(message: _80.VoteSetBits, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _80.VoteSetBits;
            fromPartial(object: Partial<_80.VoteSetBits>): _80.VoteSetBits;
        };
        Message: {
            encode(message: _80.Message, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _80.Message;
            fromPartial(object: Partial<_80.Message>): _80.Message;
        };
    };
    const crypto: {
        Proof: {
            encode(message: _83.Proof, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _83.Proof;
            fromPartial(object: Partial<_83.Proof>): _83.Proof;
        };
        ValueOp: {
            encode(message: _83.ValueOp, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _83.ValueOp;
            fromPartial(object: Partial<_83.ValueOp>): _83.ValueOp;
        };
        DominoOp: {
            encode(message: _83.DominoOp, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _83.DominoOp;
            fromPartial(object: Partial<_83.DominoOp>): _83.DominoOp;
        };
        ProofOp: {
            encode(message: _83.ProofOp, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _83.ProofOp;
            fromPartial(object: Partial<_83.ProofOp>): _83.ProofOp;
        };
        ProofOps: {
            encode(message: _83.ProofOps, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _83.ProofOps;
            fromPartial(object: Partial<_83.ProofOps>): _83.ProofOps;
        };
        PublicKey: {
            encode(message: _82.PublicKey, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _82.PublicKey;
            fromPartial(object: Partial<_82.PublicKey>): _82.PublicKey;
        };
    };
    namespace libs {
        const bits: {
            BitArray: {
                encode(message: _84.BitArray, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _84.BitArray;
                fromPartial(object: Partial<_84.BitArray>): _84.BitArray;
            };
        };
    }
    const mempool: {
        Txs: {
            encode(message: _85.Txs, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _85.Txs;
            fromPartial(object: Partial<_85.Txs>): _85.Txs;
        };
        Message: {
            encode(message: _85.Message, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _85.Message;
            fromPartial(object: Partial<_85.Message>): _85.Message;
        };
        MEVMessage: {
            encode(message: _85.MEVMessage, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _85.MEVMessage;
            fromPartial(object: Partial<_85.MEVMessage>): _85.MEVMessage;
        };
        MEVTxs: {
            encode(message: _85.MEVTxs, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _85.MEVTxs;
            fromPartial(object: Partial<_85.MEVTxs>): _85.MEVTxs;
        };
    };
    const p2p: {
        NetAddress: {
            encode(message: _88.NetAddress, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _88.NetAddress;
            fromPartial(object: Partial<_88.NetAddress>): _88.NetAddress;
        };
        ProtocolVersion: {
            encode(message: _88.ProtocolVersion, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _88.ProtocolVersion;
            fromPartial(object: Partial<_88.ProtocolVersion>): _88.ProtocolVersion;
        };
        DefaultNodeInfo: {
            encode(message: _88.DefaultNodeInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _88.DefaultNodeInfo;
            fromPartial(object: Partial<_88.DefaultNodeInfo>): _88.DefaultNodeInfo;
        };
        DefaultNodeInfoOther: {
            encode(message: _88.DefaultNodeInfoOther, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _88.DefaultNodeInfoOther;
            fromPartial(object: Partial<_88.DefaultNodeInfoOther>): _88.DefaultNodeInfoOther;
        };
        PexRequest: {
            encode(_: _87.PexRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(_: any): _87.PexRequest;
            fromPartial(_: Partial<_87.PexRequest>): _87.PexRequest;
        };
        PexAddrs: {
            encode(message: _87.PexAddrs, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _87.PexAddrs;
            fromPartial(object: Partial<_87.PexAddrs>): _87.PexAddrs;
        };
        Message: {
            encode(message: _87.Message, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _87.Message;
            fromPartial(object: Partial<_87.Message>): _87.Message;
        };
        PacketPing: {
            encode(_: _86.PacketPing, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(_: any): _86.PacketPing;
            fromPartial(_: Partial<_86.PacketPing>): _86.PacketPing;
        };
        PacketPong: {
            encode(_: _86.PacketPong, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(_: any): _86.PacketPong;
            fromPartial(_: Partial<_86.PacketPong>): _86.PacketPong;
        };
        PacketMsg: {
            encode(message: _86.PacketMsg, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _86.PacketMsg;
            fromPartial(object: Partial<_86.PacketMsg>): _86.PacketMsg;
        };
        Packet: {
            encode(message: _86.Packet, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _86.Packet;
            fromPartial(object: Partial<_86.Packet>): _86.Packet;
        };
        AuthSigMessage: {
            encode(message: _86.AuthSigMessage, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _86.AuthSigMessage;
            fromPartial(object: Partial<_86.AuthSigMessage>): _86.AuthSigMessage;
        };
    };
    const privval: {
        errorsFromJSON(object: any): _89.Errors;
        errorsToJSON(object: _89.Errors): string;
        Errors: typeof _89.Errors;
        ErrorsSDKType: typeof _89.Errors;
        RemoteSignerError: {
            encode(message: _89.RemoteSignerError, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _89.RemoteSignerError;
            fromPartial(object: Partial<_89.RemoteSignerError>): _89.RemoteSignerError;
        };
        PubKeyRequest: {
            encode(message: _89.PubKeyRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _89.PubKeyRequest;
            fromPartial(object: Partial<_89.PubKeyRequest>): _89.PubKeyRequest;
        };
        PubKeyResponse: {
            encode(message: _89.PubKeyResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _89.PubKeyResponse;
            fromPartial(object: Partial<_89.PubKeyResponse>): _89.PubKeyResponse;
        };
        SignVoteRequest: {
            encode(message: _89.SignVoteRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _89.SignVoteRequest;
            fromPartial(object: Partial<_89.SignVoteRequest>): _89.SignVoteRequest;
        };
        SignedVoteResponse: {
            encode(message: _89.SignedVoteResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _89.SignedVoteResponse;
            fromPartial(object: Partial<_89.SignedVoteResponse>): _89.SignedVoteResponse;
        };
        SignProposalRequest: {
            encode(message: _89.SignProposalRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _89.SignProposalRequest;
            fromPartial(object: Partial<_89.SignProposalRequest>): _89.SignProposalRequest;
        };
        SignedProposalResponse: {
            encode(message: _89.SignedProposalResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _89.SignedProposalResponse;
            fromPartial(object: Partial<_89.SignedProposalResponse>): _89.SignedProposalResponse;
        };
        PingRequest: {
            encode(_: _89.PingRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(_: any): _89.PingRequest;
            fromPartial(_: Partial<_89.PingRequest>): _89.PingRequest;
        };
        PingResponse: {
            encode(_: _89.PingResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(_: any): _89.PingResponse;
            fromPartial(_: Partial<_89.PingResponse>): _89.PingResponse;
        };
        Message: {
            encode(message: _89.Message, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _89.Message;
            fromPartial(object: Partial<_89.Message>): _89.Message;
        };
    };
    namespace rpc {
        const grpc: {
            RequestPing: {
                encode(_: _90.RequestPing, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _90.RequestPing;
                fromPartial(_: Partial<_90.RequestPing>): _90.RequestPing;
            };
            RequestBroadcastTx: {
                encode(message: _90.RequestBroadcastTx, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _90.RequestBroadcastTx;
                fromPartial(object: Partial<_90.RequestBroadcastTx>): _90.RequestBroadcastTx;
            };
            ResponsePing: {
                encode(_: _90.ResponsePing, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _90.ResponsePing;
                fromPartial(_: Partial<_90.ResponsePing>): _90.ResponsePing;
            };
            ResponseBroadcastTx: {
                encode(message: _90.ResponseBroadcastTx, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _90.ResponseBroadcastTx;
                fromPartial(object: Partial<_90.ResponseBroadcastTx>): _90.ResponseBroadcastTx;
            };
        };
    }
    const state: {
        ABCIResponses: {
            encode(message: _91.ABCIResponses, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _91.ABCIResponses;
            fromPartial(object: Partial<_91.ABCIResponses>): _91.ABCIResponses;
        };
        ValidatorsInfo: {
            encode(message: _91.ValidatorsInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _91.ValidatorsInfo;
            fromPartial(object: Partial<_91.ValidatorsInfo>): _91.ValidatorsInfo;
        };
        ConsensusParamsInfo: {
            encode(message: _91.ConsensusParamsInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _91.ConsensusParamsInfo;
            fromPartial(object: Partial<_91.ConsensusParamsInfo>): _91.ConsensusParamsInfo;
        };
        ABCIResponsesInfo: {
            encode(message: _91.ABCIResponsesInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _91.ABCIResponsesInfo;
            fromPartial(object: Partial<_91.ABCIResponsesInfo>): _91.ABCIResponsesInfo;
        };
        Version: {
            encode(message: _91.Version, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _91.Version;
            fromPartial(object: Partial<_91.Version>): _91.Version;
        };
        State: {
            encode(message: _91.State, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _91.State;
            fromPartial(object: Partial<_91.State>): _91.State;
        };
    };
    const statesync: {
        Message: {
            encode(message: _92.Message, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _92.Message;
            fromPartial(object: Partial<_92.Message>): _92.Message;
        };
        SnapshotsRequest: {
            encode(_: _92.SnapshotsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(_: any): _92.SnapshotsRequest;
            fromPartial(_: Partial<_92.SnapshotsRequest>): _92.SnapshotsRequest;
        };
        SnapshotsResponse: {
            encode(message: _92.SnapshotsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _92.SnapshotsResponse;
            fromPartial(object: Partial<_92.SnapshotsResponse>): _92.SnapshotsResponse;
        };
        ChunkRequest: {
            encode(message: _92.ChunkRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _92.ChunkRequest;
            fromPartial(object: Partial<_92.ChunkRequest>): _92.ChunkRequest;
        };
        ChunkResponse: {
            encode(message: _92.ChunkResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _92.ChunkResponse;
            fromPartial(object: Partial<_92.ChunkResponse>): _92.ChunkResponse;
        };
    };
    const store: {
        BlockStoreState: {
            encode(message: _93.BlockStoreState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _93.BlockStoreState;
            fromPartial(object: Partial<_93.BlockStoreState>): _93.BlockStoreState;
        };
    };
    const types: {
        ValidatorSet: {
            encode(message: _100.ValidatorSet, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _100.ValidatorSet;
            fromPartial(object: Partial<_100.ValidatorSet>): _100.ValidatorSet;
        };
        Validator: {
            encode(message: _100.Validator, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _100.Validator;
            fromPartial(object: Partial<_100.Validator>): _100.Validator;
        };
        SimpleValidator: {
            encode(message: _100.SimpleValidator, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _100.SimpleValidator;
            fromPartial(object: Partial<_100.SimpleValidator>): _100.SimpleValidator;
        };
        blockIDFlagFromJSON(object: any): _99.BlockIDFlag;
        blockIDFlagToJSON(object: _99.BlockIDFlag): string;
        signedMsgTypeFromJSON(object: any): _99.SignedMsgType;
        signedMsgTypeToJSON(object: _99.SignedMsgType): string;
        BlockIDFlag: typeof _99.BlockIDFlag;
        BlockIDFlagSDKType: typeof _99.BlockIDFlag;
        SignedMsgType: typeof _99.SignedMsgType;
        SignedMsgTypeSDKType: typeof _99.SignedMsgType;
        PartSetHeader: {
            encode(message: _99.PartSetHeader, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _99.PartSetHeader;
            fromPartial(object: Partial<_99.PartSetHeader>): _99.PartSetHeader;
        };
        Part: {
            encode(message: _99.Part, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _99.Part;
            fromPartial(object: Partial<_99.Part>): _99.Part;
        };
        BlockID: {
            encode(message: _99.BlockID, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _99.BlockID;
            fromPartial(object: Partial<_99.BlockID>): _99.BlockID;
        };
        Header: {
            encode(message: _99.Header, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _99.Header;
            fromPartial(object: Partial<_99.Header>): _99.Header;
        };
        Data: {
            encode(message: _99.Data, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _99.Data;
            fromPartial(object: Partial<_99.Data>): _99.Data;
        };
        Vote: {
            encode(message: _99.Vote, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _99.Vote;
            fromPartial(object: Partial<_99.Vote>): _99.Vote;
        };
        Commit: {
            encode(message: _99.Commit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _99.Commit;
            fromPartial(object: Partial<_99.Commit>): _99.Commit;
        };
        CommitSig: {
            encode(message: _99.CommitSig, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _99.CommitSig;
            fromPartial(object: Partial<_99.CommitSig>): _99.CommitSig;
        };
        Proposal: {
            encode(message: _99.Proposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _99.Proposal;
            fromPartial(object: Partial<_99.Proposal>): _99.Proposal;
        };
        SignedHeader: {
            encode(message: _99.SignedHeader, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _99.SignedHeader;
            fromPartial(object: Partial<_99.SignedHeader>): _99.SignedHeader;
        };
        LightBlock: {
            encode(message: _99.LightBlock, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _99.LightBlock;
            fromPartial(object: Partial<_99.LightBlock>): _99.LightBlock;
        };
        BlockMeta: {
            encode(message: _99.BlockMeta, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _99.BlockMeta;
            fromPartial(object: Partial<_99.BlockMeta>): _99.BlockMeta;
        };
        TxProof: {
            encode(message: _99.TxProof, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _99.TxProof;
            fromPartial(object: Partial<_99.TxProof>): _99.TxProof;
        };
        ConsensusParams: {
            encode(message: _98.ConsensusParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _98.ConsensusParams;
            fromPartial(object: Partial<_98.ConsensusParams>): _98.ConsensusParams;
        };
        BlockParams: {
            encode(message: _98.BlockParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _98.BlockParams;
            fromPartial(object: Partial<_98.BlockParams>): _98.BlockParams;
        };
        EvidenceParams: {
            encode(message: _98.EvidenceParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _98.EvidenceParams;
            fromPartial(object: Partial<_98.EvidenceParams>): _98.EvidenceParams;
        };
        ValidatorParams: {
            encode(message: _98.ValidatorParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _98.ValidatorParams;
            fromPartial(object: Partial<_98.ValidatorParams>): _98.ValidatorParams;
        };
        VersionParams: {
            encode(message: _98.VersionParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _98.VersionParams;
            fromPartial(object: Partial<_98.VersionParams>): _98.VersionParams;
        };
        HashedParams: {
            encode(message: _98.HashedParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _98.HashedParams;
            fromPartial(object: Partial<_98.HashedParams>): _98.HashedParams;
        };
        Evidence: {
            encode(message: _97.Evidence, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _97.Evidence;
            fromPartial(object: Partial<_97.Evidence>): _97.Evidence;
        };
        DuplicateVoteEvidence: {
            encode(message: _97.DuplicateVoteEvidence, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _97.DuplicateVoteEvidence;
            fromPartial(object: Partial<_97.DuplicateVoteEvidence>): _97.DuplicateVoteEvidence;
        };
        LightClientAttackEvidence: {
            encode(message: _97.LightClientAttackEvidence, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _97.LightClientAttackEvidence;
            fromPartial(object: Partial<_97.LightClientAttackEvidence>): _97.LightClientAttackEvidence;
        };
        EvidenceList: {
            encode(message: _97.EvidenceList, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _97.EvidenceList;
            fromPartial(object: Partial<_97.EvidenceList>): _97.EvidenceList;
        };
        EventDataRoundState: {
            encode(message: _96.EventDataRoundState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _96.EventDataRoundState;
            fromPartial(object: Partial<_96.EventDataRoundState>): _96.EventDataRoundState;
        };
        CanonicalBlockID: {
            encode(message: _95.CanonicalBlockID, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _95.CanonicalBlockID;
            fromPartial(object: Partial<_95.CanonicalBlockID>): _95.CanonicalBlockID;
        };
        CanonicalPartSetHeader: {
            encode(message: _95.CanonicalPartSetHeader, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _95.CanonicalPartSetHeader;
            fromPartial(object: Partial<_95.CanonicalPartSetHeader>): _95.CanonicalPartSetHeader;
        };
        CanonicalProposal: {
            encode(message: _95.CanonicalProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _95.CanonicalProposal;
            fromPartial(object: Partial<_95.CanonicalProposal>): _95.CanonicalProposal;
        };
        CanonicalVote: {
            encode(message: _95.CanonicalVote, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _95.CanonicalVote;
            fromPartial(object: Partial<_95.CanonicalVote>): _95.CanonicalVote;
        };
        Block: {
            encode(message: _94.Block, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _94.Block;
            fromPartial(object: Partial<_94.Block>): _94.Block;
        };
    };
    const version: {
        App: {
            encode(message: _101.App, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _101.App;
            fromPartial(object: Partial<_101.App>): _101.App;
        };
        Consensus: {
            encode(message: _101.Consensus, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _101.Consensus;
            fromPartial(object: Partial<_101.Consensus>): _101.Consensus;
        };
    };
}
