import * as _84 from "./abci/types";
import * as _85 from "./blockchain/types";
import * as _86 from "./consensus/types";
import * as _87 from "./consensus/wal";
import * as _88 from "./crypto/keys";
import * as _89 from "./crypto/proof";
import * as _90 from "./libs/bits/types";
import * as _91 from "./mempool/types";
import * as _92 from "./p2p/conn";
import * as _93 from "./p2p/pex";
import * as _94 from "./p2p/types";
import * as _95 from "./privval/types";
import * as _96 from "./rpc/grpc/types";
import * as _97 from "./state/types";
import * as _98 from "./statesync/types";
import * as _99 from "./store/types";
import * as _100 from "./types/block";
import * as _101 from "./types/canonical";
import * as _102 from "./types/events";
import * as _103 from "./types/evidence";
import * as _104 from "./types/params";
import * as _105 from "./types/types";
import * as _106 from "./types/validator";
import * as _107 from "./version/types";
export declare namespace tendermint {
    const abci: {
        checkTxTypeFromJSON(object: any): _84.CheckTxType;
        checkTxTypeToJSON(object: _84.CheckTxType): string;
        responseOfferSnapshot_ResultFromJSON(object: any): _84.ResponseOfferSnapshot_Result;
        responseOfferSnapshot_ResultToJSON(object: _84.ResponseOfferSnapshot_Result): string;
        responseApplySnapshotChunk_ResultFromJSON(object: any): _84.ResponseApplySnapshotChunk_Result;
        responseApplySnapshotChunk_ResultToJSON(object: _84.ResponseApplySnapshotChunk_Result): string;
        evidenceTypeFromJSON(object: any): _84.EvidenceType;
        evidenceTypeToJSON(object: _84.EvidenceType): string;
        CheckTxType: typeof _84.CheckTxType;
        CheckTxTypeSDKType: typeof _84.CheckTxType;
        ResponseOfferSnapshot_Result: typeof _84.ResponseOfferSnapshot_Result;
        ResponseOfferSnapshot_ResultSDKType: typeof _84.ResponseOfferSnapshot_Result;
        ResponseApplySnapshotChunk_Result: typeof _84.ResponseApplySnapshotChunk_Result;
        ResponseApplySnapshotChunk_ResultSDKType: typeof _84.ResponseApplySnapshotChunk_Result;
        EvidenceType: typeof _84.EvidenceType;
        EvidenceTypeSDKType: typeof _84.EvidenceType;
        Request: {
            encode(message: _84.Request, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _84.Request;
            fromPartial(object: Partial<_84.Request>): _84.Request;
        };
        RequestEcho: {
            encode(message: _84.RequestEcho, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _84.RequestEcho;
            fromPartial(object: Partial<_84.RequestEcho>): _84.RequestEcho;
        };
        RequestFlush: {
            encode(_: _84.RequestFlush, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(_: any): _84.RequestFlush;
            fromPartial(_: Partial<_84.RequestFlush>): _84.RequestFlush;
        };
        RequestInfo: {
            encode(message: _84.RequestInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _84.RequestInfo;
            fromPartial(object: Partial<_84.RequestInfo>): _84.RequestInfo;
        };
        RequestSetOption: {
            encode(message: _84.RequestSetOption, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _84.RequestSetOption;
            fromPartial(object: Partial<_84.RequestSetOption>): _84.RequestSetOption;
        };
        RequestInitChain: {
            encode(message: _84.RequestInitChain, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _84.RequestInitChain;
            fromPartial(object: Partial<_84.RequestInitChain>): _84.RequestInitChain;
        };
        RequestQuery: {
            encode(message: _84.RequestQuery, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _84.RequestQuery;
            fromPartial(object: Partial<_84.RequestQuery>): _84.RequestQuery;
        };
        RequestBeginBlock: {
            encode(message: _84.RequestBeginBlock, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _84.RequestBeginBlock;
            fromPartial(object: Partial<_84.RequestBeginBlock>): _84.RequestBeginBlock;
        };
        RequestCheckTx: {
            encode(message: _84.RequestCheckTx, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _84.RequestCheckTx;
            fromPartial(object: Partial<_84.RequestCheckTx>): _84.RequestCheckTx;
        };
        RequestDeliverTx: {
            encode(message: _84.RequestDeliverTx, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _84.RequestDeliverTx;
            fromPartial(object: Partial<_84.RequestDeliverTx>): _84.RequestDeliverTx;
        };
        RequestEndBlock: {
            encode(message: _84.RequestEndBlock, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _84.RequestEndBlock;
            fromPartial(object: Partial<_84.RequestEndBlock>): _84.RequestEndBlock;
        };
        RequestCommit: {
            encode(_: _84.RequestCommit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(_: any): _84.RequestCommit;
            fromPartial(_: Partial<_84.RequestCommit>): _84.RequestCommit;
        };
        RequestListSnapshots: {
            encode(_: _84.RequestListSnapshots, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(_: any): _84.RequestListSnapshots;
            fromPartial(_: Partial<_84.RequestListSnapshots>): _84.RequestListSnapshots;
        };
        RequestOfferSnapshot: {
            encode(message: _84.RequestOfferSnapshot, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _84.RequestOfferSnapshot;
            fromPartial(object: Partial<_84.RequestOfferSnapshot>): _84.RequestOfferSnapshot;
        };
        RequestLoadSnapshotChunk: {
            encode(message: _84.RequestLoadSnapshotChunk, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _84.RequestLoadSnapshotChunk;
            fromPartial(object: Partial<_84.RequestLoadSnapshotChunk>): _84.RequestLoadSnapshotChunk;
        };
        RequestApplySnapshotChunk: {
            encode(message: _84.RequestApplySnapshotChunk, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _84.RequestApplySnapshotChunk;
            fromPartial(object: Partial<_84.RequestApplySnapshotChunk>): _84.RequestApplySnapshotChunk;
        };
        Response: {
            encode(message: _84.Response, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _84.Response;
            fromPartial(object: Partial<_84.Response>): _84.Response;
        };
        ResponseException: {
            encode(message: _84.ResponseException, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _84.ResponseException;
            fromPartial(object: Partial<_84.ResponseException>): _84.ResponseException;
        };
        ResponseEcho: {
            encode(message: _84.ResponseEcho, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _84.ResponseEcho;
            fromPartial(object: Partial<_84.ResponseEcho>): _84.ResponseEcho;
        };
        ResponseFlush: {
            encode(_: _84.ResponseFlush, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(_: any): _84.ResponseFlush;
            fromPartial(_: Partial<_84.ResponseFlush>): _84.ResponseFlush;
        };
        ResponseInfo: {
            encode(message: _84.ResponseInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _84.ResponseInfo;
            fromPartial(object: Partial<_84.ResponseInfo>): _84.ResponseInfo;
        };
        ResponseSetOption: {
            encode(message: _84.ResponseSetOption, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _84.ResponseSetOption;
            fromPartial(object: Partial<_84.ResponseSetOption>): _84.ResponseSetOption;
        };
        ResponseInitChain: {
            encode(message: _84.ResponseInitChain, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _84.ResponseInitChain;
            fromPartial(object: Partial<_84.ResponseInitChain>): _84.ResponseInitChain;
        };
        ResponseQuery: {
            encode(message: _84.ResponseQuery, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _84.ResponseQuery;
            fromPartial(object: Partial<_84.ResponseQuery>): _84.ResponseQuery;
        };
        ResponseBeginBlock: {
            encode(message: _84.ResponseBeginBlock, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _84.ResponseBeginBlock;
            fromPartial(object: Partial<_84.ResponseBeginBlock>): _84.ResponseBeginBlock;
        };
        ResponseCheckTx: {
            encode(message: _84.ResponseCheckTx, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _84.ResponseCheckTx;
            fromPartial(object: Partial<_84.ResponseCheckTx>): _84.ResponseCheckTx;
        };
        ResponseDeliverTx: {
            encode(message: _84.ResponseDeliverTx, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _84.ResponseDeliverTx;
            fromPartial(object: Partial<_84.ResponseDeliverTx>): _84.ResponseDeliverTx;
        };
        ResponseEndBlock: {
            encode(message: _84.ResponseEndBlock, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _84.ResponseEndBlock;
            fromPartial(object: Partial<_84.ResponseEndBlock>): _84.ResponseEndBlock;
        };
        ResponseCommit: {
            encode(message: _84.ResponseCommit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _84.ResponseCommit;
            fromPartial(object: Partial<_84.ResponseCommit>): _84.ResponseCommit;
        };
        ResponseListSnapshots: {
            encode(message: _84.ResponseListSnapshots, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _84.ResponseListSnapshots;
            fromPartial(object: Partial<_84.ResponseListSnapshots>): _84.ResponseListSnapshots;
        };
        ResponseOfferSnapshot: {
            encode(message: _84.ResponseOfferSnapshot, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _84.ResponseOfferSnapshot;
            fromPartial(object: Partial<_84.ResponseOfferSnapshot>): _84.ResponseOfferSnapshot;
        };
        ResponseLoadSnapshotChunk: {
            encode(message: _84.ResponseLoadSnapshotChunk, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _84.ResponseLoadSnapshotChunk;
            fromPartial(object: Partial<_84.ResponseLoadSnapshotChunk>): _84.ResponseLoadSnapshotChunk;
        };
        ResponseApplySnapshotChunk: {
            encode(message: _84.ResponseApplySnapshotChunk, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _84.ResponseApplySnapshotChunk;
            fromPartial(object: Partial<_84.ResponseApplySnapshotChunk>): _84.ResponseApplySnapshotChunk;
        };
        ConsensusParams: {
            encode(message: _84.ConsensusParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _84.ConsensusParams;
            fromPartial(object: Partial<_84.ConsensusParams>): _84.ConsensusParams;
        };
        BlockParams: {
            encode(message: _84.BlockParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _84.BlockParams;
            fromPartial(object: Partial<_84.BlockParams>): _84.BlockParams;
        };
        LastCommitInfo: {
            encode(message: _84.LastCommitInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _84.LastCommitInfo;
            fromPartial(object: Partial<_84.LastCommitInfo>): _84.LastCommitInfo;
        };
        Event: {
            encode(message: _84.Event, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _84.Event;
            fromPartial(object: Partial<_84.Event>): _84.Event;
        };
        EventAttribute: {
            encode(message: _84.EventAttribute, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _84.EventAttribute;
            fromPartial(object: Partial<_84.EventAttribute>): _84.EventAttribute;
        };
        TxResult: {
            encode(message: _84.TxResult, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _84.TxResult;
            fromPartial(object: Partial<_84.TxResult>): _84.TxResult;
        };
        Validator: {
            encode(message: _84.Validator, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _84.Validator;
            fromPartial(object: Partial<_84.Validator>): _84.Validator;
        };
        ValidatorUpdate: {
            encode(message: _84.ValidatorUpdate, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _84.ValidatorUpdate;
            fromPartial(object: Partial<_84.ValidatorUpdate>): _84.ValidatorUpdate;
        };
        VoteInfo: {
            encode(message: _84.VoteInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _84.VoteInfo;
            fromPartial(object: Partial<_84.VoteInfo>): _84.VoteInfo;
        };
        Evidence: {
            encode(message: _84.Evidence, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _84.Evidence;
            fromPartial(object: Partial<_84.Evidence>): _84.Evidence;
        };
        Snapshot: {
            encode(message: _84.Snapshot, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _84.Snapshot;
            fromPartial(object: Partial<_84.Snapshot>): _84.Snapshot;
        };
    };
    const blockchain: {
        BlockRequest: {
            encode(message: _85.BlockRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _85.BlockRequest;
            fromPartial(object: Partial<_85.BlockRequest>): _85.BlockRequest;
        };
        NoBlockResponse: {
            encode(message: _85.NoBlockResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _85.NoBlockResponse;
            fromPartial(object: Partial<_85.NoBlockResponse>): _85.NoBlockResponse;
        };
        BlockResponse: {
            encode(message: _85.BlockResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _85.BlockResponse;
            fromPartial(object: Partial<_85.BlockResponse>): _85.BlockResponse;
        };
        StatusRequest: {
            encode(_: _85.StatusRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(_: any): _85.StatusRequest;
            fromPartial(_: Partial<_85.StatusRequest>): _85.StatusRequest;
        };
        StatusResponse: {
            encode(message: _85.StatusResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _85.StatusResponse;
            fromPartial(object: Partial<_85.StatusResponse>): _85.StatusResponse;
        };
        Message: {
            encode(message: _85.Message, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _85.Message;
            fromPartial(object: Partial<_85.Message>): _85.Message;
        };
    };
    const consensus: {
        MsgInfo: {
            encode(message: _87.MsgInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _87.MsgInfo;
            fromPartial(object: Partial<_87.MsgInfo>): _87.MsgInfo;
        };
        TimeoutInfo: {
            encode(message: _87.TimeoutInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _87.TimeoutInfo;
            fromPartial(object: Partial<_87.TimeoutInfo>): _87.TimeoutInfo;
        };
        EndHeight: {
            encode(message: _87.EndHeight, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _87.EndHeight;
            fromPartial(object: Partial<_87.EndHeight>): _87.EndHeight;
        };
        WALMessage: {
            encode(message: _87.WALMessage, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _87.WALMessage;
            fromPartial(object: Partial<_87.WALMessage>): _87.WALMessage;
        };
        TimedWALMessage: {
            encode(message: _87.TimedWALMessage, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _87.TimedWALMessage;
            fromPartial(object: Partial<_87.TimedWALMessage>): _87.TimedWALMessage;
        };
        NewRoundStep: {
            encode(message: _86.NewRoundStep, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _86.NewRoundStep;
            fromPartial(object: Partial<_86.NewRoundStep>): _86.NewRoundStep;
        };
        NewValidBlock: {
            encode(message: _86.NewValidBlock, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _86.NewValidBlock;
            fromPartial(object: Partial<_86.NewValidBlock>): _86.NewValidBlock;
        };
        Proposal: {
            encode(message: _86.Proposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _86.Proposal;
            fromPartial(object: Partial<_86.Proposal>): _86.Proposal;
        };
        ProposalPOL: {
            encode(message: _86.ProposalPOL, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _86.ProposalPOL;
            fromPartial(object: Partial<_86.ProposalPOL>): _86.ProposalPOL;
        };
        BlockPart: {
            encode(message: _86.BlockPart, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _86.BlockPart;
            fromPartial(object: Partial<_86.BlockPart>): _86.BlockPart;
        };
        Vote: {
            encode(message: _86.Vote, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _86.Vote;
            fromPartial(object: Partial<_86.Vote>): _86.Vote;
        };
        HasVote: {
            encode(message: _86.HasVote, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _86.HasVote;
            fromPartial(object: Partial<_86.HasVote>): _86.HasVote;
        };
        VoteSetMaj23: {
            encode(message: _86.VoteSetMaj23, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _86.VoteSetMaj23;
            fromPartial(object: Partial<_86.VoteSetMaj23>): _86.VoteSetMaj23;
        };
        VoteSetBits: {
            encode(message: _86.VoteSetBits, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _86.VoteSetBits;
            fromPartial(object: Partial<_86.VoteSetBits>): _86.VoteSetBits;
        };
        Message: {
            encode(message: _86.Message, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _86.Message;
            fromPartial(object: Partial<_86.Message>): _86.Message;
        };
    };
    const crypto: {
        Proof: {
            encode(message: _89.Proof, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _89.Proof;
            fromPartial(object: Partial<_89.Proof>): _89.Proof;
        };
        ValueOp: {
            encode(message: _89.ValueOp, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _89.ValueOp;
            fromPartial(object: Partial<_89.ValueOp>): _89.ValueOp;
        };
        DominoOp: {
            encode(message: _89.DominoOp, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _89.DominoOp;
            fromPartial(object: Partial<_89.DominoOp>): _89.DominoOp;
        };
        ProofOp: {
            encode(message: _89.ProofOp, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _89.ProofOp;
            fromPartial(object: Partial<_89.ProofOp>): _89.ProofOp;
        };
        ProofOps: {
            encode(message: _89.ProofOps, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _89.ProofOps;
            fromPartial(object: Partial<_89.ProofOps>): _89.ProofOps;
        };
        PublicKey: {
            encode(message: _88.PublicKey, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _88.PublicKey;
            fromPartial(object: Partial<_88.PublicKey>): _88.PublicKey;
        };
    };
    namespace libs {
        const bits: {
            BitArray: {
                encode(message: _90.BitArray, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _90.BitArray;
                fromPartial(object: Partial<_90.BitArray>): _90.BitArray;
            };
        };
    }
    const mempool: {
        Txs: {
            encode(message: _91.Txs, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _91.Txs;
            fromPartial(object: Partial<_91.Txs>): _91.Txs;
        };
        Message: {
            encode(message: _91.Message, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _91.Message;
            fromPartial(object: Partial<_91.Message>): _91.Message;
        };
    };
    const p2p: {
        NetAddress: {
            encode(message: _94.NetAddress, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _94.NetAddress;
            fromPartial(object: Partial<_94.NetAddress>): _94.NetAddress;
        };
        ProtocolVersion: {
            encode(message: _94.ProtocolVersion, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _94.ProtocolVersion;
            fromPartial(object: Partial<_94.ProtocolVersion>): _94.ProtocolVersion;
        };
        DefaultNodeInfo: {
            encode(message: _94.DefaultNodeInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _94.DefaultNodeInfo;
            fromPartial(object: Partial<_94.DefaultNodeInfo>): _94.DefaultNodeInfo;
        };
        DefaultNodeInfoOther: {
            encode(message: _94.DefaultNodeInfoOther, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _94.DefaultNodeInfoOther;
            fromPartial(object: Partial<_94.DefaultNodeInfoOther>): _94.DefaultNodeInfoOther;
        };
        PexRequest: {
            encode(_: _93.PexRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(_: any): _93.PexRequest;
            fromPartial(_: Partial<_93.PexRequest>): _93.PexRequest;
        };
        PexAddrs: {
            encode(message: _93.PexAddrs, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _93.PexAddrs;
            fromPartial(object: Partial<_93.PexAddrs>): _93.PexAddrs;
        };
        Message: {
            encode(message: _93.Message, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _93.Message;
            fromPartial(object: Partial<_93.Message>): _93.Message;
        };
        PacketPing: {
            encode(_: _92.PacketPing, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(_: any): _92.PacketPing;
            fromPartial(_: Partial<_92.PacketPing>): _92.PacketPing;
        };
        PacketPong: {
            encode(_: _92.PacketPong, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(_: any): _92.PacketPong;
            fromPartial(_: Partial<_92.PacketPong>): _92.PacketPong;
        };
        PacketMsg: {
            encode(message: _92.PacketMsg, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _92.PacketMsg;
            fromPartial(object: Partial<_92.PacketMsg>): _92.PacketMsg;
        };
        Packet: {
            encode(message: _92.Packet, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _92.Packet;
            fromPartial(object: Partial<_92.Packet>): _92.Packet;
        };
        AuthSigMessage: {
            encode(message: _92.AuthSigMessage, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _92.AuthSigMessage;
            fromPartial(object: Partial<_92.AuthSigMessage>): _92.AuthSigMessage;
        };
    };
    const privval: {
        errorsFromJSON(object: any): _95.Errors;
        errorsToJSON(object: _95.Errors): string;
        Errors: typeof _95.Errors;
        ErrorsSDKType: typeof _95.Errors;
        RemoteSignerError: {
            encode(message: _95.RemoteSignerError, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _95.RemoteSignerError;
            fromPartial(object: Partial<_95.RemoteSignerError>): _95.RemoteSignerError;
        };
        PubKeyRequest: {
            encode(message: _95.PubKeyRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _95.PubKeyRequest;
            fromPartial(object: Partial<_95.PubKeyRequest>): _95.PubKeyRequest;
        };
        PubKeyResponse: {
            encode(message: _95.PubKeyResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _95.PubKeyResponse;
            fromPartial(object: Partial<_95.PubKeyResponse>): _95.PubKeyResponse;
        };
        SignVoteRequest: {
            encode(message: _95.SignVoteRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _95.SignVoteRequest;
            fromPartial(object: Partial<_95.SignVoteRequest>): _95.SignVoteRequest;
        };
        SignedVoteResponse: {
            encode(message: _95.SignedVoteResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _95.SignedVoteResponse;
            fromPartial(object: Partial<_95.SignedVoteResponse>): _95.SignedVoteResponse;
        };
        SignProposalRequest: {
            encode(message: _95.SignProposalRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _95.SignProposalRequest;
            fromPartial(object: Partial<_95.SignProposalRequest>): _95.SignProposalRequest;
        };
        SignedProposalResponse: {
            encode(message: _95.SignedProposalResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _95.SignedProposalResponse;
            fromPartial(object: Partial<_95.SignedProposalResponse>): _95.SignedProposalResponse;
        };
        PingRequest: {
            encode(_: _95.PingRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(_: any): _95.PingRequest;
            fromPartial(_: Partial<_95.PingRequest>): _95.PingRequest;
        };
        PingResponse: {
            encode(_: _95.PingResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(_: any): _95.PingResponse;
            fromPartial(_: Partial<_95.PingResponse>): _95.PingResponse;
        };
        Message: {
            encode(message: _95.Message, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _95.Message;
            fromPartial(object: Partial<_95.Message>): _95.Message;
        };
    };
    namespace rpc {
        const grpc: {
            RequestPing: {
                encode(_: _96.RequestPing, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _96.RequestPing;
                fromPartial(_: Partial<_96.RequestPing>): _96.RequestPing;
            };
            RequestBroadcastTx: {
                encode(message: _96.RequestBroadcastTx, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _96.RequestBroadcastTx;
                fromPartial(object: Partial<_96.RequestBroadcastTx>): _96.RequestBroadcastTx;
            };
            ResponsePing: {
                encode(_: _96.ResponsePing, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _96.ResponsePing;
                fromPartial(_: Partial<_96.ResponsePing>): _96.ResponsePing;
            };
            ResponseBroadcastTx: {
                encode(message: _96.ResponseBroadcastTx, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _96.ResponseBroadcastTx;
                fromPartial(object: Partial<_96.ResponseBroadcastTx>): _96.ResponseBroadcastTx;
            };
        };
    }
    const state: {
        ABCIResponses: {
            encode(message: _97.ABCIResponses, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _97.ABCIResponses;
            fromPartial(object: Partial<_97.ABCIResponses>): _97.ABCIResponses;
        };
        ValidatorsInfo: {
            encode(message: _97.ValidatorsInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _97.ValidatorsInfo;
            fromPartial(object: Partial<_97.ValidatorsInfo>): _97.ValidatorsInfo;
        };
        ConsensusParamsInfo: {
            encode(message: _97.ConsensusParamsInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _97.ConsensusParamsInfo;
            fromPartial(object: Partial<_97.ConsensusParamsInfo>): _97.ConsensusParamsInfo;
        };
        ABCIResponsesInfo: {
            encode(message: _97.ABCIResponsesInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _97.ABCIResponsesInfo;
            fromPartial(object: Partial<_97.ABCIResponsesInfo>): _97.ABCIResponsesInfo;
        };
        Version: {
            encode(message: _97.Version, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _97.Version;
            fromPartial(object: Partial<_97.Version>): _97.Version;
        };
        State: {
            encode(message: _97.State, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _97.State;
            fromPartial(object: Partial<_97.State>): _97.State;
        };
    };
    const statesync: {
        Message: {
            encode(message: _98.Message, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _98.Message;
            fromPartial(object: Partial<_98.Message>): _98.Message;
        };
        SnapshotsRequest: {
            encode(_: _98.SnapshotsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(_: any): _98.SnapshotsRequest;
            fromPartial(_: Partial<_98.SnapshotsRequest>): _98.SnapshotsRequest;
        };
        SnapshotsResponse: {
            encode(message: _98.SnapshotsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _98.SnapshotsResponse;
            fromPartial(object: Partial<_98.SnapshotsResponse>): _98.SnapshotsResponse;
        };
        ChunkRequest: {
            encode(message: _98.ChunkRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _98.ChunkRequest;
            fromPartial(object: Partial<_98.ChunkRequest>): _98.ChunkRequest;
        };
        ChunkResponse: {
            encode(message: _98.ChunkResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _98.ChunkResponse;
            fromPartial(object: Partial<_98.ChunkResponse>): _98.ChunkResponse;
        };
    };
    const store: {
        BlockStoreState: {
            encode(message: _99.BlockStoreState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _99.BlockStoreState;
            fromPartial(object: Partial<_99.BlockStoreState>): _99.BlockStoreState;
        };
    };
    const types: {
        ValidatorSet: {
            encode(message: _106.ValidatorSet, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _106.ValidatorSet;
            fromPartial(object: Partial<_106.ValidatorSet>): _106.ValidatorSet;
        };
        Validator: {
            encode(message: _106.Validator, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _106.Validator;
            fromPartial(object: Partial<_106.Validator>): _106.Validator;
        };
        SimpleValidator: {
            encode(message: _106.SimpleValidator, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _106.SimpleValidator;
            fromPartial(object: Partial<_106.SimpleValidator>): _106.SimpleValidator;
        };
        blockIDFlagFromJSON(object: any): _105.BlockIDFlag;
        blockIDFlagToJSON(object: _105.BlockIDFlag): string;
        signedMsgTypeFromJSON(object: any): _105.SignedMsgType;
        signedMsgTypeToJSON(object: _105.SignedMsgType): string;
        BlockIDFlag: typeof _105.BlockIDFlag;
        BlockIDFlagSDKType: typeof _105.BlockIDFlag;
        SignedMsgType: typeof _105.SignedMsgType;
        SignedMsgTypeSDKType: typeof _105.SignedMsgType;
        PartSetHeader: {
            encode(message: _105.PartSetHeader, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _105.PartSetHeader;
            fromPartial(object: Partial<_105.PartSetHeader>): _105.PartSetHeader;
        };
        Part: {
            encode(message: _105.Part, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _105.Part;
            fromPartial(object: Partial<_105.Part>): _105.Part;
        };
        BlockID: {
            encode(message: _105.BlockID, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _105.BlockID;
            fromPartial(object: Partial<_105.BlockID>): _105.BlockID;
        };
        Header: {
            encode(message: _105.Header, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _105.Header;
            fromPartial(object: Partial<_105.Header>): _105.Header;
        };
        Data: {
            encode(message: _105.Data, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _105.Data;
            fromPartial(object: Partial<_105.Data>): _105.Data;
        };
        Vote: {
            encode(message: _105.Vote, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _105.Vote;
            fromPartial(object: Partial<_105.Vote>): _105.Vote;
        };
        Commit: {
            encode(message: _105.Commit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _105.Commit;
            fromPartial(object: Partial<_105.Commit>): _105.Commit;
        };
        CommitSig: {
            encode(message: _105.CommitSig, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _105.CommitSig;
            fromPartial(object: Partial<_105.CommitSig>): _105.CommitSig;
        };
        Proposal: {
            encode(message: _105.Proposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _105.Proposal;
            fromPartial(object: Partial<_105.Proposal>): _105.Proposal;
        };
        SignedHeader: {
            encode(message: _105.SignedHeader, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _105.SignedHeader;
            fromPartial(object: Partial<_105.SignedHeader>): _105.SignedHeader;
        };
        LightBlock: {
            encode(message: _105.LightBlock, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _105.LightBlock;
            fromPartial(object: Partial<_105.LightBlock>): _105.LightBlock;
        };
        BlockMeta: {
            encode(message: _105.BlockMeta, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _105.BlockMeta;
            fromPartial(object: Partial<_105.BlockMeta>): _105.BlockMeta;
        };
        TxProof: {
            encode(message: _105.TxProof, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _105.TxProof;
            fromPartial(object: Partial<_105.TxProof>): _105.TxProof;
        };
        ConsensusParams: {
            encode(message: _104.ConsensusParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _104.ConsensusParams;
            fromPartial(object: Partial<_104.ConsensusParams>): _104.ConsensusParams;
        };
        BlockParams: {
            encode(message: _104.BlockParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _104.BlockParams;
            fromPartial(object: Partial<_104.BlockParams>): _104.BlockParams;
        };
        EvidenceParams: {
            encode(message: _104.EvidenceParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _104.EvidenceParams;
            fromPartial(object: Partial<_104.EvidenceParams>): _104.EvidenceParams;
        };
        ValidatorParams: {
            encode(message: _104.ValidatorParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _104.ValidatorParams;
            fromPartial(object: Partial<_104.ValidatorParams>): _104.ValidatorParams;
        };
        VersionParams: {
            encode(message: _104.VersionParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _104.VersionParams;
            fromPartial(object: Partial<_104.VersionParams>): _104.VersionParams;
        };
        HashedParams: {
            encode(message: _104.HashedParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _104.HashedParams;
            fromPartial(object: Partial<_104.HashedParams>): _104.HashedParams;
        };
        Evidence: {
            encode(message: _103.Evidence, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _103.Evidence;
            fromPartial(object: Partial<_103.Evidence>): _103.Evidence;
        };
        DuplicateVoteEvidence: {
            encode(message: _103.DuplicateVoteEvidence, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _103.DuplicateVoteEvidence;
            fromPartial(object: Partial<_103.DuplicateVoteEvidence>): _103.DuplicateVoteEvidence;
        };
        LightClientAttackEvidence: {
            encode(message: _103.LightClientAttackEvidence, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _103.LightClientAttackEvidence;
            fromPartial(object: Partial<_103.LightClientAttackEvidence>): _103.LightClientAttackEvidence;
        };
        EvidenceList: {
            encode(message: _103.EvidenceList, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _103.EvidenceList;
            fromPartial(object: Partial<_103.EvidenceList>): _103.EvidenceList;
        };
        EventDataRoundState: {
            encode(message: _102.EventDataRoundState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _102.EventDataRoundState;
            fromPartial(object: Partial<_102.EventDataRoundState>): _102.EventDataRoundState;
        };
        CanonicalBlockID: {
            encode(message: _101.CanonicalBlockID, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _101.CanonicalBlockID;
            fromPartial(object: Partial<_101.CanonicalBlockID>): _101.CanonicalBlockID;
        };
        CanonicalPartSetHeader: {
            encode(message: _101.CanonicalPartSetHeader, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _101.CanonicalPartSetHeader;
            fromPartial(object: Partial<_101.CanonicalPartSetHeader>): _101.CanonicalPartSetHeader;
        };
        CanonicalProposal: {
            encode(message: _101.CanonicalProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _101.CanonicalProposal;
            fromPartial(object: Partial<_101.CanonicalProposal>): _101.CanonicalProposal;
        };
        CanonicalVote: {
            encode(message: _101.CanonicalVote, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _101.CanonicalVote;
            fromPartial(object: Partial<_101.CanonicalVote>): _101.CanonicalVote;
        };
        Block: {
            encode(message: _100.Block, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _100.Block;
            fromPartial(object: Partial<_100.Block>): _100.Block;
        };
    };
    const version: {
        App: {
            encode(message: _107.App, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _107.App;
            fromPartial(object: Partial<_107.App>): _107.App;
        };
        Consensus: {
            encode(message: _107.Consensus, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _107.Consensus;
            fromPartial(object: Partial<_107.Consensus>): _107.Consensus;
        };
    };
}
