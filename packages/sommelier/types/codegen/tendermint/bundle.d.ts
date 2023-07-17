import * as _80 from "./abci/types";
import * as _81 from "./blockchain/types";
import * as _82 from "./consensus/types";
import * as _83 from "./consensus/wal";
import * as _84 from "./crypto/keys";
import * as _85 from "./crypto/proof";
import * as _86 from "./libs/bits/types";
import * as _87 from "./mempool/types";
import * as _88 from "./p2p/conn";
import * as _89 from "./p2p/pex";
import * as _90 from "./p2p/types";
import * as _91 from "./privval/types";
import * as _92 from "./rpc/grpc/types";
import * as _93 from "./state/types";
import * as _94 from "./statesync/types";
import * as _95 from "./store/types";
import * as _96 from "./types/block";
import * as _97 from "./types/canonical";
import * as _98 from "./types/events";
import * as _99 from "./types/evidence";
import * as _100 from "./types/params";
import * as _101 from "./types/types";
import * as _102 from "./types/validator";
import * as _103 from "./version/types";
export declare namespace tendermint {
    const abci: {
        checkTxTypeFromJSON(object: any): _80.CheckTxType;
        checkTxTypeToJSON(object: _80.CheckTxType): string;
        responseOfferSnapshot_ResultFromJSON(object: any): _80.ResponseOfferSnapshot_Result;
        responseOfferSnapshot_ResultToJSON(object: _80.ResponseOfferSnapshot_Result): string;
        responseApplySnapshotChunk_ResultFromJSON(object: any): _80.ResponseApplySnapshotChunk_Result;
        responseApplySnapshotChunk_ResultToJSON(object: _80.ResponseApplySnapshotChunk_Result): string;
        evidenceTypeFromJSON(object: any): _80.EvidenceType;
        evidenceTypeToJSON(object: _80.EvidenceType): string;
        CheckTxType: typeof _80.CheckTxType;
        CheckTxTypeSDKType: typeof _80.CheckTxType;
        ResponseOfferSnapshot_Result: typeof _80.ResponseOfferSnapshot_Result;
        ResponseOfferSnapshot_ResultSDKType: typeof _80.ResponseOfferSnapshot_Result;
        ResponseApplySnapshotChunk_Result: typeof _80.ResponseApplySnapshotChunk_Result;
        ResponseApplySnapshotChunk_ResultSDKType: typeof _80.ResponseApplySnapshotChunk_Result;
        EvidenceType: typeof _80.EvidenceType;
        EvidenceTypeSDKType: typeof _80.EvidenceType;
        Request: {
            encode(message: _80.Request, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _80.Request;
            fromPartial(object: Partial<_80.Request>): _80.Request;
        };
        RequestEcho: {
            encode(message: _80.RequestEcho, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _80.RequestEcho;
            fromPartial(object: Partial<_80.RequestEcho>): _80.RequestEcho;
        };
        RequestFlush: {
            encode(_: _80.RequestFlush, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(_: any): _80.RequestFlush;
            fromPartial(_: Partial<_80.RequestFlush>): _80.RequestFlush;
        };
        RequestInfo: {
            encode(message: _80.RequestInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _80.RequestInfo;
            fromPartial(object: Partial<_80.RequestInfo>): _80.RequestInfo;
        };
        RequestSetOption: {
            encode(message: _80.RequestSetOption, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _80.RequestSetOption;
            fromPartial(object: Partial<_80.RequestSetOption>): _80.RequestSetOption;
        };
        RequestInitChain: {
            encode(message: _80.RequestInitChain, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _80.RequestInitChain;
            fromPartial(object: Partial<_80.RequestInitChain>): _80.RequestInitChain;
        };
        RequestQuery: {
            encode(message: _80.RequestQuery, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _80.RequestQuery;
            fromPartial(object: Partial<_80.RequestQuery>): _80.RequestQuery;
        };
        RequestBeginBlock: {
            encode(message: _80.RequestBeginBlock, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _80.RequestBeginBlock;
            fromPartial(object: Partial<_80.RequestBeginBlock>): _80.RequestBeginBlock;
        };
        RequestCheckTx: {
            encode(message: _80.RequestCheckTx, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _80.RequestCheckTx;
            fromPartial(object: Partial<_80.RequestCheckTx>): _80.RequestCheckTx;
        };
        RequestDeliverTx: {
            encode(message: _80.RequestDeliverTx, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _80.RequestDeliverTx;
            fromPartial(object: Partial<_80.RequestDeliverTx>): _80.RequestDeliverTx;
        };
        RequestEndBlock: {
            encode(message: _80.RequestEndBlock, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _80.RequestEndBlock;
            fromPartial(object: Partial<_80.RequestEndBlock>): _80.RequestEndBlock;
        };
        RequestCommit: {
            encode(_: _80.RequestCommit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(_: any): _80.RequestCommit;
            fromPartial(_: Partial<_80.RequestCommit>): _80.RequestCommit;
        };
        RequestListSnapshots: {
            encode(_: _80.RequestListSnapshots, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(_: any): _80.RequestListSnapshots;
            fromPartial(_: Partial<_80.RequestListSnapshots>): _80.RequestListSnapshots;
        };
        RequestOfferSnapshot: {
            encode(message: _80.RequestOfferSnapshot, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _80.RequestOfferSnapshot;
            fromPartial(object: Partial<_80.RequestOfferSnapshot>): _80.RequestOfferSnapshot;
        };
        RequestLoadSnapshotChunk: {
            encode(message: _80.RequestLoadSnapshotChunk, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _80.RequestLoadSnapshotChunk;
            fromPartial(object: Partial<_80.RequestLoadSnapshotChunk>): _80.RequestLoadSnapshotChunk;
        };
        RequestApplySnapshotChunk: {
            encode(message: _80.RequestApplySnapshotChunk, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _80.RequestApplySnapshotChunk;
            fromPartial(object: Partial<_80.RequestApplySnapshotChunk>): _80.RequestApplySnapshotChunk;
        };
        Response: {
            encode(message: _80.Response, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _80.Response;
            fromPartial(object: Partial<_80.Response>): _80.Response;
        };
        ResponseException: {
            encode(message: _80.ResponseException, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _80.ResponseException;
            fromPartial(object: Partial<_80.ResponseException>): _80.ResponseException;
        };
        ResponseEcho: {
            encode(message: _80.ResponseEcho, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _80.ResponseEcho;
            fromPartial(object: Partial<_80.ResponseEcho>): _80.ResponseEcho;
        };
        ResponseFlush: {
            encode(_: _80.ResponseFlush, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(_: any): _80.ResponseFlush;
            fromPartial(_: Partial<_80.ResponseFlush>): _80.ResponseFlush;
        };
        ResponseInfo: {
            encode(message: _80.ResponseInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _80.ResponseInfo;
            fromPartial(object: Partial<_80.ResponseInfo>): _80.ResponseInfo;
        };
        ResponseSetOption: {
            encode(message: _80.ResponseSetOption, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _80.ResponseSetOption;
            fromPartial(object: Partial<_80.ResponseSetOption>): _80.ResponseSetOption;
        };
        ResponseInitChain: {
            encode(message: _80.ResponseInitChain, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _80.ResponseInitChain;
            fromPartial(object: Partial<_80.ResponseInitChain>): _80.ResponseInitChain;
        };
        ResponseQuery: {
            encode(message: _80.ResponseQuery, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _80.ResponseQuery;
            fromPartial(object: Partial<_80.ResponseQuery>): _80.ResponseQuery;
        };
        ResponseBeginBlock: {
            encode(message: _80.ResponseBeginBlock, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _80.ResponseBeginBlock;
            fromPartial(object: Partial<_80.ResponseBeginBlock>): _80.ResponseBeginBlock;
        };
        ResponseCheckTx: {
            encode(message: _80.ResponseCheckTx, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _80.ResponseCheckTx;
            fromPartial(object: Partial<_80.ResponseCheckTx>): _80.ResponseCheckTx;
        };
        ResponseDeliverTx: {
            encode(message: _80.ResponseDeliverTx, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _80.ResponseDeliverTx;
            fromPartial(object: Partial<_80.ResponseDeliverTx>): _80.ResponseDeliverTx;
        };
        ResponseEndBlock: {
            encode(message: _80.ResponseEndBlock, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _80.ResponseEndBlock;
            fromPartial(object: Partial<_80.ResponseEndBlock>): _80.ResponseEndBlock;
        };
        ResponseCommit: {
            encode(message: _80.ResponseCommit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _80.ResponseCommit;
            fromPartial(object: Partial<_80.ResponseCommit>): _80.ResponseCommit;
        };
        ResponseListSnapshots: {
            encode(message: _80.ResponseListSnapshots, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _80.ResponseListSnapshots;
            fromPartial(object: Partial<_80.ResponseListSnapshots>): _80.ResponseListSnapshots;
        };
        ResponseOfferSnapshot: {
            encode(message: _80.ResponseOfferSnapshot, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _80.ResponseOfferSnapshot;
            fromPartial(object: Partial<_80.ResponseOfferSnapshot>): _80.ResponseOfferSnapshot;
        };
        ResponseLoadSnapshotChunk: {
            encode(message: _80.ResponseLoadSnapshotChunk, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _80.ResponseLoadSnapshotChunk;
            fromPartial(object: Partial<_80.ResponseLoadSnapshotChunk>): _80.ResponseLoadSnapshotChunk;
        };
        ResponseApplySnapshotChunk: {
            encode(message: _80.ResponseApplySnapshotChunk, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _80.ResponseApplySnapshotChunk;
            fromPartial(object: Partial<_80.ResponseApplySnapshotChunk>): _80.ResponseApplySnapshotChunk;
        };
        ConsensusParams: {
            encode(message: _80.ConsensusParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _80.ConsensusParams;
            fromPartial(object: Partial<_80.ConsensusParams>): _80.ConsensusParams;
        };
        BlockParams: {
            encode(message: _80.BlockParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _80.BlockParams;
            fromPartial(object: Partial<_80.BlockParams>): _80.BlockParams;
        };
        LastCommitInfo: {
            encode(message: _80.LastCommitInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _80.LastCommitInfo;
            fromPartial(object: Partial<_80.LastCommitInfo>): _80.LastCommitInfo;
        };
        Event: {
            encode(message: _80.Event, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _80.Event;
            fromPartial(object: Partial<_80.Event>): _80.Event;
        };
        EventAttribute: {
            encode(message: _80.EventAttribute, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _80.EventAttribute;
            fromPartial(object: Partial<_80.EventAttribute>): _80.EventAttribute;
        };
        TxResult: {
            encode(message: _80.TxResult, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _80.TxResult;
            fromPartial(object: Partial<_80.TxResult>): _80.TxResult;
        };
        Validator: {
            encode(message: _80.Validator, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _80.Validator;
            fromPartial(object: Partial<_80.Validator>): _80.Validator;
        };
        ValidatorUpdate: {
            encode(message: _80.ValidatorUpdate, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _80.ValidatorUpdate;
            fromPartial(object: Partial<_80.ValidatorUpdate>): _80.ValidatorUpdate;
        };
        VoteInfo: {
            encode(message: _80.VoteInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _80.VoteInfo;
            fromPartial(object: Partial<_80.VoteInfo>): _80.VoteInfo;
        };
        Evidence: {
            encode(message: _80.Evidence, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _80.Evidence;
            fromPartial(object: Partial<_80.Evidence>): _80.Evidence;
        };
        Snapshot: {
            encode(message: _80.Snapshot, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _80.Snapshot;
            fromPartial(object: Partial<_80.Snapshot>): _80.Snapshot;
        };
    };
    const blockchain: {
        BlockRequest: {
            encode(message: _81.BlockRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _81.BlockRequest;
            fromPartial(object: Partial<_81.BlockRequest>): _81.BlockRequest;
        };
        NoBlockResponse: {
            encode(message: _81.NoBlockResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _81.NoBlockResponse;
            fromPartial(object: Partial<_81.NoBlockResponse>): _81.NoBlockResponse;
        };
        BlockResponse: {
            encode(message: _81.BlockResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _81.BlockResponse;
            fromPartial(object: Partial<_81.BlockResponse>): _81.BlockResponse;
        };
        StatusRequest: {
            encode(_: _81.StatusRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(_: any): _81.StatusRequest;
            fromPartial(_: Partial<_81.StatusRequest>): _81.StatusRequest;
        };
        StatusResponse: {
            encode(message: _81.StatusResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _81.StatusResponse;
            fromPartial(object: Partial<_81.StatusResponse>): _81.StatusResponse;
        };
        Message: {
            encode(message: _81.Message, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _81.Message;
            fromPartial(object: Partial<_81.Message>): _81.Message;
        };
    };
    const consensus: {
        MsgInfo: {
            encode(message: _83.MsgInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _83.MsgInfo;
            fromPartial(object: Partial<_83.MsgInfo>): _83.MsgInfo;
        };
        TimeoutInfo: {
            encode(message: _83.TimeoutInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _83.TimeoutInfo;
            fromPartial(object: Partial<_83.TimeoutInfo>): _83.TimeoutInfo;
        };
        EndHeight: {
            encode(message: _83.EndHeight, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _83.EndHeight;
            fromPartial(object: Partial<_83.EndHeight>): _83.EndHeight;
        };
        WALMessage: {
            encode(message: _83.WALMessage, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _83.WALMessage;
            fromPartial(object: Partial<_83.WALMessage>): _83.WALMessage;
        };
        TimedWALMessage: {
            encode(message: _83.TimedWALMessage, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _83.TimedWALMessage;
            fromPartial(object: Partial<_83.TimedWALMessage>): _83.TimedWALMessage;
        };
        NewRoundStep: {
            encode(message: _82.NewRoundStep, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _82.NewRoundStep;
            fromPartial(object: Partial<_82.NewRoundStep>): _82.NewRoundStep;
        };
        NewValidBlock: {
            encode(message: _82.NewValidBlock, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _82.NewValidBlock;
            fromPartial(object: Partial<_82.NewValidBlock>): _82.NewValidBlock;
        };
        Proposal: {
            encode(message: _82.Proposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _82.Proposal;
            fromPartial(object: Partial<_82.Proposal>): _82.Proposal;
        };
        ProposalPOL: {
            encode(message: _82.ProposalPOL, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _82.ProposalPOL;
            fromPartial(object: Partial<_82.ProposalPOL>): _82.ProposalPOL;
        };
        BlockPart: {
            encode(message: _82.BlockPart, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _82.BlockPart;
            fromPartial(object: Partial<_82.BlockPart>): _82.BlockPart;
        };
        Vote: {
            encode(message: _82.Vote, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _82.Vote;
            fromPartial(object: Partial<_82.Vote>): _82.Vote;
        };
        HasVote: {
            encode(message: _82.HasVote, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _82.HasVote;
            fromPartial(object: Partial<_82.HasVote>): _82.HasVote;
        };
        VoteSetMaj23: {
            encode(message: _82.VoteSetMaj23, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _82.VoteSetMaj23;
            fromPartial(object: Partial<_82.VoteSetMaj23>): _82.VoteSetMaj23;
        };
        VoteSetBits: {
            encode(message: _82.VoteSetBits, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _82.VoteSetBits;
            fromPartial(object: Partial<_82.VoteSetBits>): _82.VoteSetBits;
        };
        Message: {
            encode(message: _82.Message, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _82.Message;
            fromPartial(object: Partial<_82.Message>): _82.Message;
        };
    };
    const crypto: {
        Proof: {
            encode(message: _85.Proof, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _85.Proof;
            fromPartial(object: Partial<_85.Proof>): _85.Proof;
        };
        ValueOp: {
            encode(message: _85.ValueOp, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _85.ValueOp;
            fromPartial(object: Partial<_85.ValueOp>): _85.ValueOp;
        };
        DominoOp: {
            encode(message: _85.DominoOp, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _85.DominoOp;
            fromPartial(object: Partial<_85.DominoOp>): _85.DominoOp;
        };
        ProofOp: {
            encode(message: _85.ProofOp, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _85.ProofOp;
            fromPartial(object: Partial<_85.ProofOp>): _85.ProofOp;
        };
        ProofOps: {
            encode(message: _85.ProofOps, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _85.ProofOps;
            fromPartial(object: Partial<_85.ProofOps>): _85.ProofOps;
        };
        PublicKey: {
            encode(message: _84.PublicKey, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _84.PublicKey;
            fromPartial(object: Partial<_84.PublicKey>): _84.PublicKey;
        };
    };
    namespace libs {
        const bits: {
            BitArray: {
                encode(message: _86.BitArray, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _86.BitArray;
                fromPartial(object: Partial<_86.BitArray>): _86.BitArray;
            };
        };
    }
    const mempool: {
        Txs: {
            encode(message: _87.Txs, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _87.Txs;
            fromPartial(object: Partial<_87.Txs>): _87.Txs;
        };
        Message: {
            encode(message: _87.Message, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _87.Message;
            fromPartial(object: Partial<_87.Message>): _87.Message;
        };
    };
    const p2p: {
        NetAddress: {
            encode(message: _90.NetAddress, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _90.NetAddress;
            fromPartial(object: Partial<_90.NetAddress>): _90.NetAddress;
        };
        ProtocolVersion: {
            encode(message: _90.ProtocolVersion, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _90.ProtocolVersion;
            fromPartial(object: Partial<_90.ProtocolVersion>): _90.ProtocolVersion;
        };
        DefaultNodeInfo: {
            encode(message: _90.DefaultNodeInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _90.DefaultNodeInfo;
            fromPartial(object: Partial<_90.DefaultNodeInfo>): _90.DefaultNodeInfo;
        };
        DefaultNodeInfoOther: {
            encode(message: _90.DefaultNodeInfoOther, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _90.DefaultNodeInfoOther;
            fromPartial(object: Partial<_90.DefaultNodeInfoOther>): _90.DefaultNodeInfoOther;
        };
        PexRequest: {
            encode(_: _89.PexRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(_: any): _89.PexRequest;
            fromPartial(_: Partial<_89.PexRequest>): _89.PexRequest;
        };
        PexAddrs: {
            encode(message: _89.PexAddrs, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _89.PexAddrs;
            fromPartial(object: Partial<_89.PexAddrs>): _89.PexAddrs;
        };
        Message: {
            encode(message: _89.Message, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _89.Message;
            fromPartial(object: Partial<_89.Message>): _89.Message;
        };
        PacketPing: {
            encode(_: _88.PacketPing, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(_: any): _88.PacketPing;
            fromPartial(_: Partial<_88.PacketPing>): _88.PacketPing;
        };
        PacketPong: {
            encode(_: _88.PacketPong, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(_: any): _88.PacketPong;
            fromPartial(_: Partial<_88.PacketPong>): _88.PacketPong;
        };
        PacketMsg: {
            encode(message: _88.PacketMsg, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _88.PacketMsg;
            fromPartial(object: Partial<_88.PacketMsg>): _88.PacketMsg;
        };
        Packet: {
            encode(message: _88.Packet, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _88.Packet;
            fromPartial(object: Partial<_88.Packet>): _88.Packet;
        };
        AuthSigMessage: {
            encode(message: _88.AuthSigMessage, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _88.AuthSigMessage;
            fromPartial(object: Partial<_88.AuthSigMessage>): _88.AuthSigMessage;
        };
    };
    const privval: {
        errorsFromJSON(object: any): _91.Errors;
        errorsToJSON(object: _91.Errors): string;
        Errors: typeof _91.Errors;
        ErrorsSDKType: typeof _91.Errors;
        RemoteSignerError: {
            encode(message: _91.RemoteSignerError, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _91.RemoteSignerError;
            fromPartial(object: Partial<_91.RemoteSignerError>): _91.RemoteSignerError;
        };
        PubKeyRequest: {
            encode(message: _91.PubKeyRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _91.PubKeyRequest;
            fromPartial(object: Partial<_91.PubKeyRequest>): _91.PubKeyRequest;
        };
        PubKeyResponse: {
            encode(message: _91.PubKeyResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _91.PubKeyResponse;
            fromPartial(object: Partial<_91.PubKeyResponse>): _91.PubKeyResponse;
        };
        SignVoteRequest: {
            encode(message: _91.SignVoteRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _91.SignVoteRequest;
            fromPartial(object: Partial<_91.SignVoteRequest>): _91.SignVoteRequest;
        };
        SignedVoteResponse: {
            encode(message: _91.SignedVoteResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _91.SignedVoteResponse;
            fromPartial(object: Partial<_91.SignedVoteResponse>): _91.SignedVoteResponse;
        };
        SignProposalRequest: {
            encode(message: _91.SignProposalRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _91.SignProposalRequest;
            fromPartial(object: Partial<_91.SignProposalRequest>): _91.SignProposalRequest;
        };
        SignedProposalResponse: {
            encode(message: _91.SignedProposalResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _91.SignedProposalResponse;
            fromPartial(object: Partial<_91.SignedProposalResponse>): _91.SignedProposalResponse;
        };
        PingRequest: {
            encode(_: _91.PingRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(_: any): _91.PingRequest;
            fromPartial(_: Partial<_91.PingRequest>): _91.PingRequest;
        };
        PingResponse: {
            encode(_: _91.PingResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(_: any): _91.PingResponse;
            fromPartial(_: Partial<_91.PingResponse>): _91.PingResponse;
        };
        Message: {
            encode(message: _91.Message, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _91.Message;
            fromPartial(object: Partial<_91.Message>): _91.Message;
        };
    };
    namespace rpc {
        const grpc: {
            RequestPing: {
                encode(_: _92.RequestPing, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _92.RequestPing;
                fromPartial(_: Partial<_92.RequestPing>): _92.RequestPing;
            };
            RequestBroadcastTx: {
                encode(message: _92.RequestBroadcastTx, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _92.RequestBroadcastTx;
                fromPartial(object: Partial<_92.RequestBroadcastTx>): _92.RequestBroadcastTx;
            };
            ResponsePing: {
                encode(_: _92.ResponsePing, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _92.ResponsePing;
                fromPartial(_: Partial<_92.ResponsePing>): _92.ResponsePing;
            };
            ResponseBroadcastTx: {
                encode(message: _92.ResponseBroadcastTx, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _92.ResponseBroadcastTx;
                fromPartial(object: Partial<_92.ResponseBroadcastTx>): _92.ResponseBroadcastTx;
            };
        };
    }
    const state: {
        ABCIResponses: {
            encode(message: _93.ABCIResponses, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _93.ABCIResponses;
            fromPartial(object: Partial<_93.ABCIResponses>): _93.ABCIResponses;
        };
        ValidatorsInfo: {
            encode(message: _93.ValidatorsInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _93.ValidatorsInfo;
            fromPartial(object: Partial<_93.ValidatorsInfo>): _93.ValidatorsInfo;
        };
        ConsensusParamsInfo: {
            encode(message: _93.ConsensusParamsInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _93.ConsensusParamsInfo;
            fromPartial(object: Partial<_93.ConsensusParamsInfo>): _93.ConsensusParamsInfo;
        };
        ABCIResponsesInfo: {
            encode(message: _93.ABCIResponsesInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _93.ABCIResponsesInfo;
            fromPartial(object: Partial<_93.ABCIResponsesInfo>): _93.ABCIResponsesInfo;
        };
        Version: {
            encode(message: _93.Version, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _93.Version;
            fromPartial(object: Partial<_93.Version>): _93.Version;
        };
        State: {
            encode(message: _93.State, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _93.State;
            fromPartial(object: Partial<_93.State>): _93.State;
        };
    };
    const statesync: {
        Message: {
            encode(message: _94.Message, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _94.Message;
            fromPartial(object: Partial<_94.Message>): _94.Message;
        };
        SnapshotsRequest: {
            encode(_: _94.SnapshotsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(_: any): _94.SnapshotsRequest;
            fromPartial(_: Partial<_94.SnapshotsRequest>): _94.SnapshotsRequest;
        };
        SnapshotsResponse: {
            encode(message: _94.SnapshotsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _94.SnapshotsResponse;
            fromPartial(object: Partial<_94.SnapshotsResponse>): _94.SnapshotsResponse;
        };
        ChunkRequest: {
            encode(message: _94.ChunkRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _94.ChunkRequest;
            fromPartial(object: Partial<_94.ChunkRequest>): _94.ChunkRequest;
        };
        ChunkResponse: {
            encode(message: _94.ChunkResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _94.ChunkResponse;
            fromPartial(object: Partial<_94.ChunkResponse>): _94.ChunkResponse;
        };
    };
    const store: {
        BlockStoreState: {
            encode(message: _95.BlockStoreState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _95.BlockStoreState;
            fromPartial(object: Partial<_95.BlockStoreState>): _95.BlockStoreState;
        };
    };
    const types: {
        ValidatorSet: {
            encode(message: _102.ValidatorSet, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _102.ValidatorSet;
            fromPartial(object: Partial<_102.ValidatorSet>): _102.ValidatorSet;
        };
        Validator: {
            encode(message: _102.Validator, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _102.Validator;
            fromPartial(object: Partial<_102.Validator>): _102.Validator;
        };
        SimpleValidator: {
            encode(message: _102.SimpleValidator, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _102.SimpleValidator;
            fromPartial(object: Partial<_102.SimpleValidator>): _102.SimpleValidator;
        };
        blockIDFlagFromJSON(object: any): _101.BlockIDFlag;
        blockIDFlagToJSON(object: _101.BlockIDFlag): string;
        signedMsgTypeFromJSON(object: any): _101.SignedMsgType;
        signedMsgTypeToJSON(object: _101.SignedMsgType): string;
        BlockIDFlag: typeof _101.BlockIDFlag;
        BlockIDFlagSDKType: typeof _101.BlockIDFlag;
        SignedMsgType: typeof _101.SignedMsgType;
        SignedMsgTypeSDKType: typeof _101.SignedMsgType;
        PartSetHeader: {
            encode(message: _101.PartSetHeader, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _101.PartSetHeader;
            fromPartial(object: Partial<_101.PartSetHeader>): _101.PartSetHeader;
        };
        Part: {
            encode(message: _101.Part, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _101.Part;
            fromPartial(object: Partial<_101.Part>): _101.Part;
        };
        BlockID: {
            encode(message: _101.BlockID, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _101.BlockID;
            fromPartial(object: Partial<_101.BlockID>): _101.BlockID;
        };
        Header: {
            encode(message: _101.Header, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _101.Header;
            fromPartial(object: Partial<_101.Header>): _101.Header;
        };
        Data: {
            encode(message: _101.Data, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _101.Data;
            fromPartial(object: Partial<_101.Data>): _101.Data;
        };
        Vote: {
            encode(message: _101.Vote, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _101.Vote;
            fromPartial(object: Partial<_101.Vote>): _101.Vote;
        };
        Commit: {
            encode(message: _101.Commit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _101.Commit;
            fromPartial(object: Partial<_101.Commit>): _101.Commit;
        };
        CommitSig: {
            encode(message: _101.CommitSig, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _101.CommitSig;
            fromPartial(object: Partial<_101.CommitSig>): _101.CommitSig;
        };
        Proposal: {
            encode(message: _101.Proposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _101.Proposal;
            fromPartial(object: Partial<_101.Proposal>): _101.Proposal;
        };
        SignedHeader: {
            encode(message: _101.SignedHeader, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _101.SignedHeader;
            fromPartial(object: Partial<_101.SignedHeader>): _101.SignedHeader;
        };
        LightBlock: {
            encode(message: _101.LightBlock, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _101.LightBlock;
            fromPartial(object: Partial<_101.LightBlock>): _101.LightBlock;
        };
        BlockMeta: {
            encode(message: _101.BlockMeta, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _101.BlockMeta;
            fromPartial(object: Partial<_101.BlockMeta>): _101.BlockMeta;
        };
        TxProof: {
            encode(message: _101.TxProof, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _101.TxProof;
            fromPartial(object: Partial<_101.TxProof>): _101.TxProof;
        };
        ConsensusParams: {
            encode(message: _100.ConsensusParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _100.ConsensusParams;
            fromPartial(object: Partial<_100.ConsensusParams>): _100.ConsensusParams;
        };
        BlockParams: {
            encode(message: _100.BlockParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _100.BlockParams;
            fromPartial(object: Partial<_100.BlockParams>): _100.BlockParams;
        };
        EvidenceParams: {
            encode(message: _100.EvidenceParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _100.EvidenceParams;
            fromPartial(object: Partial<_100.EvidenceParams>): _100.EvidenceParams;
        };
        ValidatorParams: {
            encode(message: _100.ValidatorParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _100.ValidatorParams;
            fromPartial(object: Partial<_100.ValidatorParams>): _100.ValidatorParams;
        };
        VersionParams: {
            encode(message: _100.VersionParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _100.VersionParams;
            fromPartial(object: Partial<_100.VersionParams>): _100.VersionParams;
        };
        HashedParams: {
            encode(message: _100.HashedParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _100.HashedParams;
            fromPartial(object: Partial<_100.HashedParams>): _100.HashedParams;
        };
        Evidence: {
            encode(message: _99.Evidence, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _99.Evidence;
            fromPartial(object: Partial<_99.Evidence>): _99.Evidence;
        };
        DuplicateVoteEvidence: {
            encode(message: _99.DuplicateVoteEvidence, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _99.DuplicateVoteEvidence;
            fromPartial(object: Partial<_99.DuplicateVoteEvidence>): _99.DuplicateVoteEvidence;
        };
        LightClientAttackEvidence: {
            encode(message: _99.LightClientAttackEvidence, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _99.LightClientAttackEvidence;
            fromPartial(object: Partial<_99.LightClientAttackEvidence>): _99.LightClientAttackEvidence;
        };
        EvidenceList: {
            encode(message: _99.EvidenceList, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _99.EvidenceList;
            fromPartial(object: Partial<_99.EvidenceList>): _99.EvidenceList;
        };
        EventDataRoundState: {
            encode(message: _98.EventDataRoundState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _98.EventDataRoundState;
            fromPartial(object: Partial<_98.EventDataRoundState>): _98.EventDataRoundState;
        };
        CanonicalBlockID: {
            encode(message: _97.CanonicalBlockID, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _97.CanonicalBlockID;
            fromPartial(object: Partial<_97.CanonicalBlockID>): _97.CanonicalBlockID;
        };
        CanonicalPartSetHeader: {
            encode(message: _97.CanonicalPartSetHeader, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _97.CanonicalPartSetHeader;
            fromPartial(object: Partial<_97.CanonicalPartSetHeader>): _97.CanonicalPartSetHeader;
        };
        CanonicalProposal: {
            encode(message: _97.CanonicalProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _97.CanonicalProposal;
            fromPartial(object: Partial<_97.CanonicalProposal>): _97.CanonicalProposal;
        };
        CanonicalVote: {
            encode(message: _97.CanonicalVote, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _97.CanonicalVote;
            fromPartial(object: Partial<_97.CanonicalVote>): _97.CanonicalVote;
        };
        Block: {
            encode(message: _96.Block, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _96.Block;
            fromPartial(object: Partial<_96.Block>): _96.Block;
        };
    };
    const version: {
        App: {
            encode(message: _103.App, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _103.App;
            fromPartial(object: Partial<_103.App>): _103.App;
        };
        Consensus: {
            encode(message: _103.Consensus, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _103.Consensus;
            fromPartial(object: Partial<_103.Consensus>): _103.Consensus;
        };
    };
}
