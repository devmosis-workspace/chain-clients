import * as _73 from "./abci/types";
import * as _74 from "./blockchain/types";
import * as _75 from "./consensus/types";
import * as _76 from "./consensus/wal";
import * as _77 from "./crypto/keys";
import * as _78 from "./crypto/proof";
import * as _79 from "./libs/bits/types";
import * as _80 from "./mempool/types";
import * as _81 from "./p2p/conn";
import * as _82 from "./p2p/pex";
import * as _83 from "./p2p/types";
import * as _84 from "./privval/types";
import * as _85 from "./rpc/grpc/types";
import * as _86 from "./state/types";
import * as _87 from "./statesync/types";
import * as _88 from "./store/types";
import * as _89 from "./types/block";
import * as _90 from "./types/canonical";
import * as _91 from "./types/events";
import * as _92 from "./types/evidence";
import * as _93 from "./types/params";
import * as _94 from "./types/types";
import * as _95 from "./types/validator";
import * as _96 from "./version/types";
export declare namespace tendermint {
    const abci: {
        checkTxTypeFromJSON(object: any): _73.CheckTxType;
        checkTxTypeToJSON(object: _73.CheckTxType): string;
        responseOfferSnapshot_ResultFromJSON(object: any): _73.ResponseOfferSnapshot_Result;
        responseOfferSnapshot_ResultToJSON(object: _73.ResponseOfferSnapshot_Result): string;
        responseApplySnapshotChunk_ResultFromJSON(object: any): _73.ResponseApplySnapshotChunk_Result;
        responseApplySnapshotChunk_ResultToJSON(object: _73.ResponseApplySnapshotChunk_Result): string;
        evidenceTypeFromJSON(object: any): _73.EvidenceType;
        evidenceTypeToJSON(object: _73.EvidenceType): string;
        CheckTxType: typeof _73.CheckTxType;
        CheckTxTypeSDKType: typeof _73.CheckTxType;
        ResponseOfferSnapshot_Result: typeof _73.ResponseOfferSnapshot_Result;
        ResponseOfferSnapshot_ResultSDKType: typeof _73.ResponseOfferSnapshot_Result;
        ResponseApplySnapshotChunk_Result: typeof _73.ResponseApplySnapshotChunk_Result;
        ResponseApplySnapshotChunk_ResultSDKType: typeof _73.ResponseApplySnapshotChunk_Result;
        EvidenceType: typeof _73.EvidenceType;
        EvidenceTypeSDKType: typeof _73.EvidenceType;
        Request: {
            encode(message: _73.Request, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _73.Request;
            fromPartial(object: Partial<_73.Request>): _73.Request;
        };
        RequestEcho: {
            encode(message: _73.RequestEcho, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _73.RequestEcho;
            fromPartial(object: Partial<_73.RequestEcho>): _73.RequestEcho;
        };
        RequestFlush: {
            encode(_: _73.RequestFlush, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(_: any): _73.RequestFlush;
            fromPartial(_: Partial<_73.RequestFlush>): _73.RequestFlush;
        };
        RequestInfo: {
            encode(message: _73.RequestInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _73.RequestInfo;
            fromPartial(object: Partial<_73.RequestInfo>): _73.RequestInfo;
        };
        RequestSetOption: {
            encode(message: _73.RequestSetOption, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _73.RequestSetOption;
            fromPartial(object: Partial<_73.RequestSetOption>): _73.RequestSetOption;
        };
        RequestInitChain: {
            encode(message: _73.RequestInitChain, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _73.RequestInitChain;
            fromPartial(object: Partial<_73.RequestInitChain>): _73.RequestInitChain;
        };
        RequestQuery: {
            encode(message: _73.RequestQuery, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _73.RequestQuery;
            fromPartial(object: Partial<_73.RequestQuery>): _73.RequestQuery;
        };
        RequestBeginBlock: {
            encode(message: _73.RequestBeginBlock, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _73.RequestBeginBlock;
            fromPartial(object: Partial<_73.RequestBeginBlock>): _73.RequestBeginBlock;
        };
        RequestCheckTx: {
            encode(message: _73.RequestCheckTx, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _73.RequestCheckTx;
            fromPartial(object: Partial<_73.RequestCheckTx>): _73.RequestCheckTx;
        };
        RequestDeliverTx: {
            encode(message: _73.RequestDeliverTx, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _73.RequestDeliverTx;
            fromPartial(object: Partial<_73.RequestDeliverTx>): _73.RequestDeliverTx;
        };
        RequestEndBlock: {
            encode(message: _73.RequestEndBlock, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _73.RequestEndBlock;
            fromPartial(object: Partial<_73.RequestEndBlock>): _73.RequestEndBlock;
        };
        RequestCommit: {
            encode(_: _73.RequestCommit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(_: any): _73.RequestCommit;
            fromPartial(_: Partial<_73.RequestCommit>): _73.RequestCommit;
        };
        RequestListSnapshots: {
            encode(_: _73.RequestListSnapshots, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(_: any): _73.RequestListSnapshots;
            fromPartial(_: Partial<_73.RequestListSnapshots>): _73.RequestListSnapshots;
        };
        RequestOfferSnapshot: {
            encode(message: _73.RequestOfferSnapshot, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _73.RequestOfferSnapshot;
            fromPartial(object: Partial<_73.RequestOfferSnapshot>): _73.RequestOfferSnapshot;
        };
        RequestLoadSnapshotChunk: {
            encode(message: _73.RequestLoadSnapshotChunk, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _73.RequestLoadSnapshotChunk;
            fromPartial(object: Partial<_73.RequestLoadSnapshotChunk>): _73.RequestLoadSnapshotChunk;
        };
        RequestApplySnapshotChunk: {
            encode(message: _73.RequestApplySnapshotChunk, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _73.RequestApplySnapshotChunk;
            fromPartial(object: Partial<_73.RequestApplySnapshotChunk>): _73.RequestApplySnapshotChunk;
        };
        Response: {
            encode(message: _73.Response, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _73.Response;
            fromPartial(object: Partial<_73.Response>): _73.Response;
        };
        ResponseException: {
            encode(message: _73.ResponseException, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _73.ResponseException;
            fromPartial(object: Partial<_73.ResponseException>): _73.ResponseException;
        };
        ResponseEcho: {
            encode(message: _73.ResponseEcho, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _73.ResponseEcho;
            fromPartial(object: Partial<_73.ResponseEcho>): _73.ResponseEcho;
        };
        ResponseFlush: {
            encode(_: _73.ResponseFlush, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(_: any): _73.ResponseFlush;
            fromPartial(_: Partial<_73.ResponseFlush>): _73.ResponseFlush;
        };
        ResponseInfo: {
            encode(message: _73.ResponseInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _73.ResponseInfo;
            fromPartial(object: Partial<_73.ResponseInfo>): _73.ResponseInfo;
        };
        ResponseSetOption: {
            encode(message: _73.ResponseSetOption, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _73.ResponseSetOption;
            fromPartial(object: Partial<_73.ResponseSetOption>): _73.ResponseSetOption;
        };
        ResponseInitChain: {
            encode(message: _73.ResponseInitChain, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _73.ResponseInitChain;
            fromPartial(object: Partial<_73.ResponseInitChain>): _73.ResponseInitChain;
        };
        ResponseQuery: {
            encode(message: _73.ResponseQuery, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _73.ResponseQuery;
            fromPartial(object: Partial<_73.ResponseQuery>): _73.ResponseQuery;
        };
        ResponseBeginBlock: {
            encode(message: _73.ResponseBeginBlock, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _73.ResponseBeginBlock;
            fromPartial(object: Partial<_73.ResponseBeginBlock>): _73.ResponseBeginBlock;
        };
        ResponseCheckTx: {
            encode(message: _73.ResponseCheckTx, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _73.ResponseCheckTx;
            fromPartial(object: Partial<_73.ResponseCheckTx>): _73.ResponseCheckTx;
        };
        ResponseDeliverTx: {
            encode(message: _73.ResponseDeliverTx, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _73.ResponseDeliverTx;
            fromPartial(object: Partial<_73.ResponseDeliverTx>): _73.ResponseDeliverTx;
        };
        ResponseEndBlock: {
            encode(message: _73.ResponseEndBlock, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _73.ResponseEndBlock;
            fromPartial(object: Partial<_73.ResponseEndBlock>): _73.ResponseEndBlock;
        };
        ResponseCommit: {
            encode(message: _73.ResponseCommit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _73.ResponseCommit;
            fromPartial(object: Partial<_73.ResponseCommit>): _73.ResponseCommit;
        };
        ResponseListSnapshots: {
            encode(message: _73.ResponseListSnapshots, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _73.ResponseListSnapshots;
            fromPartial(object: Partial<_73.ResponseListSnapshots>): _73.ResponseListSnapshots;
        };
        ResponseOfferSnapshot: {
            encode(message: _73.ResponseOfferSnapshot, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _73.ResponseOfferSnapshot;
            fromPartial(object: Partial<_73.ResponseOfferSnapshot>): _73.ResponseOfferSnapshot;
        };
        ResponseLoadSnapshotChunk: {
            encode(message: _73.ResponseLoadSnapshotChunk, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _73.ResponseLoadSnapshotChunk;
            fromPartial(object: Partial<_73.ResponseLoadSnapshotChunk>): _73.ResponseLoadSnapshotChunk;
        };
        ResponseApplySnapshotChunk: {
            encode(message: _73.ResponseApplySnapshotChunk, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _73.ResponseApplySnapshotChunk;
            fromPartial(object: Partial<_73.ResponseApplySnapshotChunk>): _73.ResponseApplySnapshotChunk;
        };
        ConsensusParams: {
            encode(message: _73.ConsensusParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _73.ConsensusParams;
            fromPartial(object: Partial<_73.ConsensusParams>): _73.ConsensusParams;
        };
        BlockParams: {
            encode(message: _73.BlockParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _73.BlockParams;
            fromPartial(object: Partial<_73.BlockParams>): _73.BlockParams;
        };
        LastCommitInfo: {
            encode(message: _73.LastCommitInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _73.LastCommitInfo;
            fromPartial(object: Partial<_73.LastCommitInfo>): _73.LastCommitInfo;
        };
        Event: {
            encode(message: _73.Event, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _73.Event;
            fromPartial(object: Partial<_73.Event>): _73.Event;
        };
        EventAttribute: {
            encode(message: _73.EventAttribute, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _73.EventAttribute;
            fromPartial(object: Partial<_73.EventAttribute>): _73.EventAttribute;
        };
        TxResult: {
            encode(message: _73.TxResult, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _73.TxResult;
            fromPartial(object: Partial<_73.TxResult>): _73.TxResult;
        };
        Validator: {
            encode(message: _73.Validator, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _73.Validator;
            fromPartial(object: Partial<_73.Validator>): _73.Validator;
        };
        ValidatorUpdate: {
            encode(message: _73.ValidatorUpdate, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _73.ValidatorUpdate;
            fromPartial(object: Partial<_73.ValidatorUpdate>): _73.ValidatorUpdate;
        };
        VoteInfo: {
            encode(message: _73.VoteInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _73.VoteInfo;
            fromPartial(object: Partial<_73.VoteInfo>): _73.VoteInfo;
        };
        Evidence: {
            encode(message: _73.Evidence, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _73.Evidence;
            fromPartial(object: Partial<_73.Evidence>): _73.Evidence;
        };
        Snapshot: {
            encode(message: _73.Snapshot, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _73.Snapshot;
            fromPartial(object: Partial<_73.Snapshot>): _73.Snapshot;
        };
    };
    const blockchain: {
        BlockRequest: {
            encode(message: _74.BlockRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _74.BlockRequest;
            fromPartial(object: Partial<_74.BlockRequest>): _74.BlockRequest;
        };
        NoBlockResponse: {
            encode(message: _74.NoBlockResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _74.NoBlockResponse;
            fromPartial(object: Partial<_74.NoBlockResponse>): _74.NoBlockResponse;
        };
        BlockResponse: {
            encode(message: _74.BlockResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _74.BlockResponse;
            fromPartial(object: Partial<_74.BlockResponse>): _74.BlockResponse;
        };
        StatusRequest: {
            encode(_: _74.StatusRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(_: any): _74.StatusRequest;
            fromPartial(_: Partial<_74.StatusRequest>): _74.StatusRequest;
        };
        StatusResponse: {
            encode(message: _74.StatusResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _74.StatusResponse;
            fromPartial(object: Partial<_74.StatusResponse>): _74.StatusResponse;
        };
        Message: {
            encode(message: _74.Message, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _74.Message;
            fromPartial(object: Partial<_74.Message>): _74.Message;
        };
    };
    const consensus: {
        MsgInfo: {
            encode(message: _76.MsgInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _76.MsgInfo;
            fromPartial(object: Partial<_76.MsgInfo>): _76.MsgInfo;
        };
        TimeoutInfo: {
            encode(message: _76.TimeoutInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _76.TimeoutInfo;
            fromPartial(object: Partial<_76.TimeoutInfo>): _76.TimeoutInfo;
        };
        EndHeight: {
            encode(message: _76.EndHeight, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _76.EndHeight;
            fromPartial(object: Partial<_76.EndHeight>): _76.EndHeight;
        };
        WALMessage: {
            encode(message: _76.WALMessage, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _76.WALMessage;
            fromPartial(object: Partial<_76.WALMessage>): _76.WALMessage;
        };
        TimedWALMessage: {
            encode(message: _76.TimedWALMessage, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _76.TimedWALMessage;
            fromPartial(object: Partial<_76.TimedWALMessage>): _76.TimedWALMessage;
        };
        NewRoundStep: {
            encode(message: _75.NewRoundStep, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _75.NewRoundStep;
            fromPartial(object: Partial<_75.NewRoundStep>): _75.NewRoundStep;
        };
        NewValidBlock: {
            encode(message: _75.NewValidBlock, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _75.NewValidBlock;
            fromPartial(object: Partial<_75.NewValidBlock>): _75.NewValidBlock;
        };
        Proposal: {
            encode(message: _75.Proposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _75.Proposal;
            fromPartial(object: Partial<_75.Proposal>): _75.Proposal;
        };
        ProposalPOL: {
            encode(message: _75.ProposalPOL, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _75.ProposalPOL;
            fromPartial(object: Partial<_75.ProposalPOL>): _75.ProposalPOL;
        };
        BlockPart: {
            encode(message: _75.BlockPart, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _75.BlockPart;
            fromPartial(object: Partial<_75.BlockPart>): _75.BlockPart;
        };
        Vote: {
            encode(message: _75.Vote, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _75.Vote;
            fromPartial(object: Partial<_75.Vote>): _75.Vote;
        };
        HasVote: {
            encode(message: _75.HasVote, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _75.HasVote;
            fromPartial(object: Partial<_75.HasVote>): _75.HasVote;
        };
        VoteSetMaj23: {
            encode(message: _75.VoteSetMaj23, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _75.VoteSetMaj23;
            fromPartial(object: Partial<_75.VoteSetMaj23>): _75.VoteSetMaj23;
        };
        VoteSetBits: {
            encode(message: _75.VoteSetBits, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _75.VoteSetBits;
            fromPartial(object: Partial<_75.VoteSetBits>): _75.VoteSetBits;
        };
        Message: {
            encode(message: _75.Message, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _75.Message;
            fromPartial(object: Partial<_75.Message>): _75.Message;
        };
    };
    const crypto: {
        Proof: {
            encode(message: _78.Proof, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _78.Proof;
            fromPartial(object: Partial<_78.Proof>): _78.Proof;
        };
        ValueOp: {
            encode(message: _78.ValueOp, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _78.ValueOp;
            fromPartial(object: Partial<_78.ValueOp>): _78.ValueOp;
        };
        DominoOp: {
            encode(message: _78.DominoOp, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _78.DominoOp;
            fromPartial(object: Partial<_78.DominoOp>): _78.DominoOp;
        };
        ProofOp: {
            encode(message: _78.ProofOp, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _78.ProofOp;
            fromPartial(object: Partial<_78.ProofOp>): _78.ProofOp;
        };
        ProofOps: {
            encode(message: _78.ProofOps, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _78.ProofOps;
            fromPartial(object: Partial<_78.ProofOps>): _78.ProofOps;
        };
        PublicKey: {
            encode(message: _77.PublicKey, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _77.PublicKey;
            fromPartial(object: Partial<_77.PublicKey>): _77.PublicKey;
        };
    };
    namespace libs {
        const bits: {
            BitArray: {
                encode(message: _79.BitArray, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _79.BitArray;
                fromPartial(object: Partial<_79.BitArray>): _79.BitArray;
            };
        };
    }
    const mempool: {
        Txs: {
            encode(message: _80.Txs, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _80.Txs;
            fromPartial(object: Partial<_80.Txs>): _80.Txs;
        };
        Message: {
            encode(message: _80.Message, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _80.Message;
            fromPartial(object: Partial<_80.Message>): _80.Message;
        };
    };
    const p2p: {
        NetAddress: {
            encode(message: _83.NetAddress, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _83.NetAddress;
            fromPartial(object: Partial<_83.NetAddress>): _83.NetAddress;
        };
        ProtocolVersion: {
            encode(message: _83.ProtocolVersion, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _83.ProtocolVersion;
            fromPartial(object: Partial<_83.ProtocolVersion>): _83.ProtocolVersion;
        };
        DefaultNodeInfo: {
            encode(message: _83.DefaultNodeInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _83.DefaultNodeInfo;
            fromPartial(object: Partial<_83.DefaultNodeInfo>): _83.DefaultNodeInfo;
        };
        DefaultNodeInfoOther: {
            encode(message: _83.DefaultNodeInfoOther, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _83.DefaultNodeInfoOther;
            fromPartial(object: Partial<_83.DefaultNodeInfoOther>): _83.DefaultNodeInfoOther;
        };
        PexRequest: {
            encode(_: _82.PexRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(_: any): _82.PexRequest;
            fromPartial(_: Partial<_82.PexRequest>): _82.PexRequest;
        };
        PexAddrs: {
            encode(message: _82.PexAddrs, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _82.PexAddrs;
            fromPartial(object: Partial<_82.PexAddrs>): _82.PexAddrs;
        };
        Message: {
            encode(message: _82.Message, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _82.Message;
            fromPartial(object: Partial<_82.Message>): _82.Message;
        };
        PacketPing: {
            encode(_: _81.PacketPing, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(_: any): _81.PacketPing;
            fromPartial(_: Partial<_81.PacketPing>): _81.PacketPing;
        };
        PacketPong: {
            encode(_: _81.PacketPong, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(_: any): _81.PacketPong;
            fromPartial(_: Partial<_81.PacketPong>): _81.PacketPong;
        };
        PacketMsg: {
            encode(message: _81.PacketMsg, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _81.PacketMsg;
            fromPartial(object: Partial<_81.PacketMsg>): _81.PacketMsg;
        };
        Packet: {
            encode(message: _81.Packet, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _81.Packet;
            fromPartial(object: Partial<_81.Packet>): _81.Packet;
        };
        AuthSigMessage: {
            encode(message: _81.AuthSigMessage, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _81.AuthSigMessage;
            fromPartial(object: Partial<_81.AuthSigMessage>): _81.AuthSigMessage;
        };
    };
    const privval: {
        errorsFromJSON(object: any): _84.Errors;
        errorsToJSON(object: _84.Errors): string;
        Errors: typeof _84.Errors;
        ErrorsSDKType: typeof _84.Errors;
        RemoteSignerError: {
            encode(message: _84.RemoteSignerError, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _84.RemoteSignerError;
            fromPartial(object: Partial<_84.RemoteSignerError>): _84.RemoteSignerError;
        };
        PubKeyRequest: {
            encode(message: _84.PubKeyRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _84.PubKeyRequest;
            fromPartial(object: Partial<_84.PubKeyRequest>): _84.PubKeyRequest;
        };
        PubKeyResponse: {
            encode(message: _84.PubKeyResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _84.PubKeyResponse;
            fromPartial(object: Partial<_84.PubKeyResponse>): _84.PubKeyResponse;
        };
        SignVoteRequest: {
            encode(message: _84.SignVoteRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _84.SignVoteRequest;
            fromPartial(object: Partial<_84.SignVoteRequest>): _84.SignVoteRequest;
        };
        SignedVoteResponse: {
            encode(message: _84.SignedVoteResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _84.SignedVoteResponse;
            fromPartial(object: Partial<_84.SignedVoteResponse>): _84.SignedVoteResponse;
        };
        SignProposalRequest: {
            encode(message: _84.SignProposalRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _84.SignProposalRequest;
            fromPartial(object: Partial<_84.SignProposalRequest>): _84.SignProposalRequest;
        };
        SignedProposalResponse: {
            encode(message: _84.SignedProposalResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _84.SignedProposalResponse;
            fromPartial(object: Partial<_84.SignedProposalResponse>): _84.SignedProposalResponse;
        };
        PingRequest: {
            encode(_: _84.PingRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(_: any): _84.PingRequest;
            fromPartial(_: Partial<_84.PingRequest>): _84.PingRequest;
        };
        PingResponse: {
            encode(_: _84.PingResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(_: any): _84.PingResponse;
            fromPartial(_: Partial<_84.PingResponse>): _84.PingResponse;
        };
        Message: {
            encode(message: _84.Message, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _84.Message;
            fromPartial(object: Partial<_84.Message>): _84.Message;
        };
    };
    namespace rpc {
        const grpc: {
            RequestPing: {
                encode(_: _85.RequestPing, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _85.RequestPing;
                fromPartial(_: Partial<_85.RequestPing>): _85.RequestPing;
            };
            RequestBroadcastTx: {
                encode(message: _85.RequestBroadcastTx, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _85.RequestBroadcastTx;
                fromPartial(object: Partial<_85.RequestBroadcastTx>): _85.RequestBroadcastTx;
            };
            ResponsePing: {
                encode(_: _85.ResponsePing, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _85.ResponsePing;
                fromPartial(_: Partial<_85.ResponsePing>): _85.ResponsePing;
            };
            ResponseBroadcastTx: {
                encode(message: _85.ResponseBroadcastTx, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _85.ResponseBroadcastTx;
                fromPartial(object: Partial<_85.ResponseBroadcastTx>): _85.ResponseBroadcastTx;
            };
        };
    }
    const state: {
        ABCIResponses: {
            encode(message: _86.ABCIResponses, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _86.ABCIResponses;
            fromPartial(object: Partial<_86.ABCIResponses>): _86.ABCIResponses;
        };
        ValidatorsInfo: {
            encode(message: _86.ValidatorsInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _86.ValidatorsInfo;
            fromPartial(object: Partial<_86.ValidatorsInfo>): _86.ValidatorsInfo;
        };
        ConsensusParamsInfo: {
            encode(message: _86.ConsensusParamsInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _86.ConsensusParamsInfo;
            fromPartial(object: Partial<_86.ConsensusParamsInfo>): _86.ConsensusParamsInfo;
        };
        ABCIResponsesInfo: {
            encode(message: _86.ABCIResponsesInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _86.ABCIResponsesInfo;
            fromPartial(object: Partial<_86.ABCIResponsesInfo>): _86.ABCIResponsesInfo;
        };
        Version: {
            encode(message: _86.Version, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _86.Version;
            fromPartial(object: Partial<_86.Version>): _86.Version;
        };
        State: {
            encode(message: _86.State, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _86.State;
            fromPartial(object: Partial<_86.State>): _86.State;
        };
    };
    const statesync: {
        Message: {
            encode(message: _87.Message, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _87.Message;
            fromPartial(object: Partial<_87.Message>): _87.Message;
        };
        SnapshotsRequest: {
            encode(_: _87.SnapshotsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(_: any): _87.SnapshotsRequest;
            fromPartial(_: Partial<_87.SnapshotsRequest>): _87.SnapshotsRequest;
        };
        SnapshotsResponse: {
            encode(message: _87.SnapshotsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _87.SnapshotsResponse;
            fromPartial(object: Partial<_87.SnapshotsResponse>): _87.SnapshotsResponse;
        };
        ChunkRequest: {
            encode(message: _87.ChunkRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _87.ChunkRequest;
            fromPartial(object: Partial<_87.ChunkRequest>): _87.ChunkRequest;
        };
        ChunkResponse: {
            encode(message: _87.ChunkResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _87.ChunkResponse;
            fromPartial(object: Partial<_87.ChunkResponse>): _87.ChunkResponse;
        };
    };
    const store: {
        BlockStoreState: {
            encode(message: _88.BlockStoreState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _88.BlockStoreState;
            fromPartial(object: Partial<_88.BlockStoreState>): _88.BlockStoreState;
        };
    };
    const types: {
        ValidatorSet: {
            encode(message: _95.ValidatorSet, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _95.ValidatorSet;
            fromPartial(object: Partial<_95.ValidatorSet>): _95.ValidatorSet;
        };
        Validator: {
            encode(message: _95.Validator, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _95.Validator;
            fromPartial(object: Partial<_95.Validator>): _95.Validator;
        };
        SimpleValidator: {
            encode(message: _95.SimpleValidator, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _95.SimpleValidator;
            fromPartial(object: Partial<_95.SimpleValidator>): _95.SimpleValidator;
        };
        blockIDFlagFromJSON(object: any): _94.BlockIDFlag;
        blockIDFlagToJSON(object: _94.BlockIDFlag): string;
        signedMsgTypeFromJSON(object: any): _94.SignedMsgType;
        signedMsgTypeToJSON(object: _94.SignedMsgType): string;
        BlockIDFlag: typeof _94.BlockIDFlag;
        BlockIDFlagSDKType: typeof _94.BlockIDFlag;
        SignedMsgType: typeof _94.SignedMsgType;
        SignedMsgTypeSDKType: typeof _94.SignedMsgType;
        PartSetHeader: {
            encode(message: _94.PartSetHeader, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _94.PartSetHeader;
            fromPartial(object: Partial<_94.PartSetHeader>): _94.PartSetHeader;
        };
        Part: {
            encode(message: _94.Part, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _94.Part;
            fromPartial(object: Partial<_94.Part>): _94.Part;
        };
        BlockID: {
            encode(message: _94.BlockID, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _94.BlockID;
            fromPartial(object: Partial<_94.BlockID>): _94.BlockID;
        };
        Header: {
            encode(message: _94.Header, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _94.Header;
            fromPartial(object: Partial<_94.Header>): _94.Header;
        };
        Data: {
            encode(message: _94.Data, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _94.Data;
            fromPartial(object: Partial<_94.Data>): _94.Data;
        };
        Vote: {
            encode(message: _94.Vote, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _94.Vote;
            fromPartial(object: Partial<_94.Vote>): _94.Vote;
        };
        Commit: {
            encode(message: _94.Commit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _94.Commit;
            fromPartial(object: Partial<_94.Commit>): _94.Commit;
        };
        CommitSig: {
            encode(message: _94.CommitSig, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _94.CommitSig;
            fromPartial(object: Partial<_94.CommitSig>): _94.CommitSig;
        };
        Proposal: {
            encode(message: _94.Proposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _94.Proposal;
            fromPartial(object: Partial<_94.Proposal>): _94.Proposal;
        };
        SignedHeader: {
            encode(message: _94.SignedHeader, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _94.SignedHeader;
            fromPartial(object: Partial<_94.SignedHeader>): _94.SignedHeader;
        };
        LightBlock: {
            encode(message: _94.LightBlock, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _94.LightBlock;
            fromPartial(object: Partial<_94.LightBlock>): _94.LightBlock;
        };
        BlockMeta: {
            encode(message: _94.BlockMeta, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _94.BlockMeta;
            fromPartial(object: Partial<_94.BlockMeta>): _94.BlockMeta;
        };
        TxProof: {
            encode(message: _94.TxProof, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _94.TxProof;
            fromPartial(object: Partial<_94.TxProof>): _94.TxProof;
        };
        ConsensusParams: {
            encode(message: _93.ConsensusParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _93.ConsensusParams;
            fromPartial(object: Partial<_93.ConsensusParams>): _93.ConsensusParams;
        };
        BlockParams: {
            encode(message: _93.BlockParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _93.BlockParams;
            fromPartial(object: Partial<_93.BlockParams>): _93.BlockParams;
        };
        EvidenceParams: {
            encode(message: _93.EvidenceParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _93.EvidenceParams;
            fromPartial(object: Partial<_93.EvidenceParams>): _93.EvidenceParams;
        };
        ValidatorParams: {
            encode(message: _93.ValidatorParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _93.ValidatorParams;
            fromPartial(object: Partial<_93.ValidatorParams>): _93.ValidatorParams;
        };
        VersionParams: {
            encode(message: _93.VersionParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _93.VersionParams;
            fromPartial(object: Partial<_93.VersionParams>): _93.VersionParams;
        };
        HashedParams: {
            encode(message: _93.HashedParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _93.HashedParams;
            fromPartial(object: Partial<_93.HashedParams>): _93.HashedParams;
        };
        Evidence: {
            encode(message: _92.Evidence, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _92.Evidence;
            fromPartial(object: Partial<_92.Evidence>): _92.Evidence;
        };
        DuplicateVoteEvidence: {
            encode(message: _92.DuplicateVoteEvidence, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _92.DuplicateVoteEvidence;
            fromPartial(object: Partial<_92.DuplicateVoteEvidence>): _92.DuplicateVoteEvidence;
        };
        LightClientAttackEvidence: {
            encode(message: _92.LightClientAttackEvidence, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _92.LightClientAttackEvidence;
            fromPartial(object: Partial<_92.LightClientAttackEvidence>): _92.LightClientAttackEvidence;
        };
        EvidenceList: {
            encode(message: _92.EvidenceList, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _92.EvidenceList;
            fromPartial(object: Partial<_92.EvidenceList>): _92.EvidenceList;
        };
        EventDataRoundState: {
            encode(message: _91.EventDataRoundState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _91.EventDataRoundState;
            fromPartial(object: Partial<_91.EventDataRoundState>): _91.EventDataRoundState;
        };
        CanonicalBlockID: {
            encode(message: _90.CanonicalBlockID, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _90.CanonicalBlockID;
            fromPartial(object: Partial<_90.CanonicalBlockID>): _90.CanonicalBlockID;
        };
        CanonicalPartSetHeader: {
            encode(message: _90.CanonicalPartSetHeader, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _90.CanonicalPartSetHeader;
            fromPartial(object: Partial<_90.CanonicalPartSetHeader>): _90.CanonicalPartSetHeader;
        };
        CanonicalProposal: {
            encode(message: _90.CanonicalProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _90.CanonicalProposal;
            fromPartial(object: Partial<_90.CanonicalProposal>): _90.CanonicalProposal;
        };
        CanonicalVote: {
            encode(message: _90.CanonicalVote, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _90.CanonicalVote;
            fromPartial(object: Partial<_90.CanonicalVote>): _90.CanonicalVote;
        };
        Block: {
            encode(message: _89.Block, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _89.Block;
            fromPartial(object: Partial<_89.Block>): _89.Block;
        };
    };
    const version: {
        App: {
            encode(message: _96.App, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _96.App;
            fromPartial(object: Partial<_96.App>): _96.App;
        };
        Consensus: {
            encode(message: _96.Consensus, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _96.Consensus;
            fromPartial(object: Partial<_96.Consensus>): _96.Consensus;
        };
    };
}
