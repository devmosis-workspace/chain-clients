import * as _95 from "./abci/types";
import * as _96 from "./blockchain/types";
import * as _97 from "./consensus/types";
import * as _98 from "./consensus/wal";
import * as _99 from "./crypto/keys";
import * as _100 from "./crypto/proof";
import * as _101 from "./libs/bits/types";
import * as _102 from "./mempool/types";
import * as _103 from "./p2p/conn";
import * as _104 from "./p2p/pex";
import * as _105 from "./p2p/types";
import * as _106 from "./privval/types";
import * as _107 from "./rpc/grpc/types";
import * as _108 from "./state/types";
import * as _109 from "./statesync/types";
import * as _110 from "./store/types";
import * as _111 from "./types/block";
import * as _112 from "./types/canonical";
import * as _113 from "./types/events";
import * as _114 from "./types/evidence";
import * as _115 from "./types/params";
import * as _116 from "./types/types";
import * as _117 from "./types/validator";
import * as _118 from "./version/types";
export declare namespace tendermint {
    const abci: {
        checkTxTypeFromJSON(object: any): _95.CheckTxType;
        checkTxTypeToJSON(object: _95.CheckTxType): string;
        responseOfferSnapshot_ResultFromJSON(object: any): _95.ResponseOfferSnapshot_Result;
        responseOfferSnapshot_ResultToJSON(object: _95.ResponseOfferSnapshot_Result): string;
        responseApplySnapshotChunk_ResultFromJSON(object: any): _95.ResponseApplySnapshotChunk_Result;
        responseApplySnapshotChunk_ResultToJSON(object: _95.ResponseApplySnapshotChunk_Result): string;
        evidenceTypeFromJSON(object: any): _95.EvidenceType;
        evidenceTypeToJSON(object: _95.EvidenceType): string;
        CheckTxType: typeof _95.CheckTxType;
        CheckTxTypeSDKType: typeof _95.CheckTxType;
        ResponseOfferSnapshot_Result: typeof _95.ResponseOfferSnapshot_Result;
        ResponseOfferSnapshot_ResultSDKType: typeof _95.ResponseOfferSnapshot_Result;
        ResponseApplySnapshotChunk_Result: typeof _95.ResponseApplySnapshotChunk_Result;
        ResponseApplySnapshotChunk_ResultSDKType: typeof _95.ResponseApplySnapshotChunk_Result;
        EvidenceType: typeof _95.EvidenceType;
        EvidenceTypeSDKType: typeof _95.EvidenceType;
        Request: {
            encode(message: _95.Request, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _95.Request;
            fromPartial(object: Partial<_95.Request>): _95.Request;
        };
        RequestEcho: {
            encode(message: _95.RequestEcho, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _95.RequestEcho;
            fromPartial(object: Partial<_95.RequestEcho>): _95.RequestEcho;
        };
        RequestFlush: {
            encode(_: _95.RequestFlush, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(_: any): _95.RequestFlush;
            fromPartial(_: Partial<_95.RequestFlush>): _95.RequestFlush;
        };
        RequestInfo: {
            encode(message: _95.RequestInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _95.RequestInfo;
            fromPartial(object: Partial<_95.RequestInfo>): _95.RequestInfo;
        };
        RequestSetOption: {
            encode(message: _95.RequestSetOption, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _95.RequestSetOption;
            fromPartial(object: Partial<_95.RequestSetOption>): _95.RequestSetOption;
        };
        RequestInitChain: {
            encode(message: _95.RequestInitChain, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _95.RequestInitChain;
            fromPartial(object: Partial<_95.RequestInitChain>): _95.RequestInitChain;
        };
        RequestQuery: {
            encode(message: _95.RequestQuery, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _95.RequestQuery;
            fromPartial(object: Partial<_95.RequestQuery>): _95.RequestQuery;
        };
        RequestBeginBlock: {
            encode(message: _95.RequestBeginBlock, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _95.RequestBeginBlock;
            fromPartial(object: Partial<_95.RequestBeginBlock>): _95.RequestBeginBlock;
        };
        RequestCheckTx: {
            encode(message: _95.RequestCheckTx, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _95.RequestCheckTx;
            fromPartial(object: Partial<_95.RequestCheckTx>): _95.RequestCheckTx;
        };
        RequestDeliverTx: {
            encode(message: _95.RequestDeliverTx, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _95.RequestDeliverTx;
            fromPartial(object: Partial<_95.RequestDeliverTx>): _95.RequestDeliverTx;
        };
        RequestEndBlock: {
            encode(message: _95.RequestEndBlock, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _95.RequestEndBlock;
            fromPartial(object: Partial<_95.RequestEndBlock>): _95.RequestEndBlock;
        };
        RequestCommit: {
            encode(_: _95.RequestCommit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(_: any): _95.RequestCommit;
            fromPartial(_: Partial<_95.RequestCommit>): _95.RequestCommit;
        };
        RequestListSnapshots: {
            encode(_: _95.RequestListSnapshots, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(_: any): _95.RequestListSnapshots;
            fromPartial(_: Partial<_95.RequestListSnapshots>): _95.RequestListSnapshots;
        };
        RequestOfferSnapshot: {
            encode(message: _95.RequestOfferSnapshot, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _95.RequestOfferSnapshot;
            fromPartial(object: Partial<_95.RequestOfferSnapshot>): _95.RequestOfferSnapshot;
        };
        RequestLoadSnapshotChunk: {
            encode(message: _95.RequestLoadSnapshotChunk, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _95.RequestLoadSnapshotChunk;
            fromPartial(object: Partial<_95.RequestLoadSnapshotChunk>): _95.RequestLoadSnapshotChunk;
        };
        RequestApplySnapshotChunk: {
            encode(message: _95.RequestApplySnapshotChunk, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _95.RequestApplySnapshotChunk;
            fromPartial(object: Partial<_95.RequestApplySnapshotChunk>): _95.RequestApplySnapshotChunk;
        };
        Response: {
            encode(message: _95.Response, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _95.Response;
            fromPartial(object: Partial<_95.Response>): _95.Response;
        };
        ResponseException: {
            encode(message: _95.ResponseException, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _95.ResponseException;
            fromPartial(object: Partial<_95.ResponseException>): _95.ResponseException;
        };
        ResponseEcho: {
            encode(message: _95.ResponseEcho, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _95.ResponseEcho;
            fromPartial(object: Partial<_95.ResponseEcho>): _95.ResponseEcho;
        };
        ResponseFlush: {
            encode(_: _95.ResponseFlush, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(_: any): _95.ResponseFlush;
            fromPartial(_: Partial<_95.ResponseFlush>): _95.ResponseFlush;
        };
        ResponseInfo: {
            encode(message: _95.ResponseInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _95.ResponseInfo;
            fromPartial(object: Partial<_95.ResponseInfo>): _95.ResponseInfo;
        };
        ResponseSetOption: {
            encode(message: _95.ResponseSetOption, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _95.ResponseSetOption;
            fromPartial(object: Partial<_95.ResponseSetOption>): _95.ResponseSetOption;
        };
        ResponseInitChain: {
            encode(message: _95.ResponseInitChain, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _95.ResponseInitChain;
            fromPartial(object: Partial<_95.ResponseInitChain>): _95.ResponseInitChain;
        };
        ResponseQuery: {
            encode(message: _95.ResponseQuery, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _95.ResponseQuery;
            fromPartial(object: Partial<_95.ResponseQuery>): _95.ResponseQuery;
        };
        ResponseBeginBlock: {
            encode(message: _95.ResponseBeginBlock, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _95.ResponseBeginBlock;
            fromPartial(object: Partial<_95.ResponseBeginBlock>): _95.ResponseBeginBlock;
        };
        ResponseCheckTx: {
            encode(message: _95.ResponseCheckTx, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _95.ResponseCheckTx;
            fromPartial(object: Partial<_95.ResponseCheckTx>): _95.ResponseCheckTx;
        };
        ResponseDeliverTx: {
            encode(message: _95.ResponseDeliverTx, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _95.ResponseDeliverTx;
            fromPartial(object: Partial<_95.ResponseDeliverTx>): _95.ResponseDeliverTx;
        };
        ResponseEndBlock: {
            encode(message: _95.ResponseEndBlock, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _95.ResponseEndBlock;
            fromPartial(object: Partial<_95.ResponseEndBlock>): _95.ResponseEndBlock;
        };
        ResponseCommit: {
            encode(message: _95.ResponseCommit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _95.ResponseCommit;
            fromPartial(object: Partial<_95.ResponseCommit>): _95.ResponseCommit;
        };
        ResponseListSnapshots: {
            encode(message: _95.ResponseListSnapshots, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _95.ResponseListSnapshots;
            fromPartial(object: Partial<_95.ResponseListSnapshots>): _95.ResponseListSnapshots;
        };
        ResponseOfferSnapshot: {
            encode(message: _95.ResponseOfferSnapshot, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _95.ResponseOfferSnapshot;
            fromPartial(object: Partial<_95.ResponseOfferSnapshot>): _95.ResponseOfferSnapshot;
        };
        ResponseLoadSnapshotChunk: {
            encode(message: _95.ResponseLoadSnapshotChunk, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _95.ResponseLoadSnapshotChunk;
            fromPartial(object: Partial<_95.ResponseLoadSnapshotChunk>): _95.ResponseLoadSnapshotChunk;
        };
        ResponseApplySnapshotChunk: {
            encode(message: _95.ResponseApplySnapshotChunk, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _95.ResponseApplySnapshotChunk;
            fromPartial(object: Partial<_95.ResponseApplySnapshotChunk>): _95.ResponseApplySnapshotChunk;
        };
        ConsensusParams: {
            encode(message: _95.ConsensusParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _95.ConsensusParams;
            fromPartial(object: Partial<_95.ConsensusParams>): _95.ConsensusParams;
        };
        BlockParams: {
            encode(message: _95.BlockParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _95.BlockParams;
            fromPartial(object: Partial<_95.BlockParams>): _95.BlockParams;
        };
        LastCommitInfo: {
            encode(message: _95.LastCommitInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _95.LastCommitInfo;
            fromPartial(object: Partial<_95.LastCommitInfo>): _95.LastCommitInfo;
        };
        Event: {
            encode(message: _95.Event, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _95.Event;
            fromPartial(object: Partial<_95.Event>): _95.Event;
        };
        EventAttribute: {
            encode(message: _95.EventAttribute, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _95.EventAttribute;
            fromPartial(object: Partial<_95.EventAttribute>): _95.EventAttribute;
        };
        TxResult: {
            encode(message: _95.TxResult, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _95.TxResult;
            fromPartial(object: Partial<_95.TxResult>): _95.TxResult;
        };
        Validator: {
            encode(message: _95.Validator, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _95.Validator;
            fromPartial(object: Partial<_95.Validator>): _95.Validator;
        };
        ValidatorUpdate: {
            encode(message: _95.ValidatorUpdate, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _95.ValidatorUpdate;
            fromPartial(object: Partial<_95.ValidatorUpdate>): _95.ValidatorUpdate;
        };
        VoteInfo: {
            encode(message: _95.VoteInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _95.VoteInfo;
            fromPartial(object: Partial<_95.VoteInfo>): _95.VoteInfo;
        };
        Evidence: {
            encode(message: _95.Evidence, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _95.Evidence;
            fromPartial(object: Partial<_95.Evidence>): _95.Evidence;
        };
        Snapshot: {
            encode(message: _95.Snapshot, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _95.Snapshot;
            fromPartial(object: Partial<_95.Snapshot>): _95.Snapshot;
        };
    };
    const blockchain: {
        BlockRequest: {
            encode(message: _96.BlockRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _96.BlockRequest;
            fromPartial(object: Partial<_96.BlockRequest>): _96.BlockRequest;
        };
        NoBlockResponse: {
            encode(message: _96.NoBlockResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _96.NoBlockResponse;
            fromPartial(object: Partial<_96.NoBlockResponse>): _96.NoBlockResponse;
        };
        BlockResponse: {
            encode(message: _96.BlockResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _96.BlockResponse;
            fromPartial(object: Partial<_96.BlockResponse>): _96.BlockResponse;
        };
        StatusRequest: {
            encode(_: _96.StatusRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(_: any): _96.StatusRequest;
            fromPartial(_: Partial<_96.StatusRequest>): _96.StatusRequest;
        };
        StatusResponse: {
            encode(message: _96.StatusResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _96.StatusResponse;
            fromPartial(object: Partial<_96.StatusResponse>): _96.StatusResponse;
        };
        Message: {
            encode(message: _96.Message, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _96.Message;
            fromPartial(object: Partial<_96.Message>): _96.Message;
        };
    };
    const consensus: {
        MsgInfo: {
            encode(message: _98.MsgInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _98.MsgInfo;
            fromPartial(object: Partial<_98.MsgInfo>): _98.MsgInfo;
        };
        TimeoutInfo: {
            encode(message: _98.TimeoutInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _98.TimeoutInfo;
            fromPartial(object: Partial<_98.TimeoutInfo>): _98.TimeoutInfo;
        };
        EndHeight: {
            encode(message: _98.EndHeight, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _98.EndHeight;
            fromPartial(object: Partial<_98.EndHeight>): _98.EndHeight;
        };
        WALMessage: {
            encode(message: _98.WALMessage, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _98.WALMessage;
            fromPartial(object: Partial<_98.WALMessage>): _98.WALMessage;
        };
        TimedWALMessage: {
            encode(message: _98.TimedWALMessage, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _98.TimedWALMessage;
            fromPartial(object: Partial<_98.TimedWALMessage>): _98.TimedWALMessage;
        };
        NewRoundStep: {
            encode(message: _97.NewRoundStep, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _97.NewRoundStep;
            fromPartial(object: Partial<_97.NewRoundStep>): _97.NewRoundStep;
        };
        NewValidBlock: {
            encode(message: _97.NewValidBlock, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _97.NewValidBlock;
            fromPartial(object: Partial<_97.NewValidBlock>): _97.NewValidBlock;
        };
        Proposal: {
            encode(message: _97.Proposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _97.Proposal;
            fromPartial(object: Partial<_97.Proposal>): _97.Proposal;
        };
        ProposalPOL: {
            encode(message: _97.ProposalPOL, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _97.ProposalPOL;
            fromPartial(object: Partial<_97.ProposalPOL>): _97.ProposalPOL;
        };
        BlockPart: {
            encode(message: _97.BlockPart, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _97.BlockPart;
            fromPartial(object: Partial<_97.BlockPart>): _97.BlockPart;
        };
        Vote: {
            encode(message: _97.Vote, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _97.Vote;
            fromPartial(object: Partial<_97.Vote>): _97.Vote;
        };
        HasVote: {
            encode(message: _97.HasVote, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _97.HasVote;
            fromPartial(object: Partial<_97.HasVote>): _97.HasVote;
        };
        VoteSetMaj23: {
            encode(message: _97.VoteSetMaj23, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _97.VoteSetMaj23;
            fromPartial(object: Partial<_97.VoteSetMaj23>): _97.VoteSetMaj23;
        };
        VoteSetBits: {
            encode(message: _97.VoteSetBits, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _97.VoteSetBits;
            fromPartial(object: Partial<_97.VoteSetBits>): _97.VoteSetBits;
        };
        Message: {
            encode(message: _97.Message, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _97.Message;
            fromPartial(object: Partial<_97.Message>): _97.Message;
        };
    };
    const crypto: {
        Proof: {
            encode(message: _100.Proof, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _100.Proof;
            fromPartial(object: Partial<_100.Proof>): _100.Proof;
        };
        ValueOp: {
            encode(message: _100.ValueOp, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _100.ValueOp;
            fromPartial(object: Partial<_100.ValueOp>): _100.ValueOp;
        };
        DominoOp: {
            encode(message: _100.DominoOp, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _100.DominoOp;
            fromPartial(object: Partial<_100.DominoOp>): _100.DominoOp;
        };
        ProofOp: {
            encode(message: _100.ProofOp, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _100.ProofOp;
            fromPartial(object: Partial<_100.ProofOp>): _100.ProofOp;
        };
        ProofOps: {
            encode(message: _100.ProofOps, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _100.ProofOps;
            fromPartial(object: Partial<_100.ProofOps>): _100.ProofOps;
        };
        PublicKey: {
            encode(message: _99.PublicKey, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _99.PublicKey;
            fromPartial(object: Partial<_99.PublicKey>): _99.PublicKey;
        };
    };
    namespace libs {
        const bits: {
            BitArray: {
                encode(message: _101.BitArray, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _101.BitArray;
                fromPartial(object: Partial<_101.BitArray>): _101.BitArray;
            };
        };
    }
    const mempool: {
        Txs: {
            encode(message: _102.Txs, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _102.Txs;
            fromPartial(object: Partial<_102.Txs>): _102.Txs;
        };
        Message: {
            encode(message: _102.Message, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _102.Message;
            fromPartial(object: Partial<_102.Message>): _102.Message;
        };
    };
    const p2p: {
        NetAddress: {
            encode(message: _105.NetAddress, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _105.NetAddress;
            fromPartial(object: Partial<_105.NetAddress>): _105.NetAddress;
        };
        ProtocolVersion: {
            encode(message: _105.ProtocolVersion, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _105.ProtocolVersion;
            fromPartial(object: Partial<_105.ProtocolVersion>): _105.ProtocolVersion;
        };
        DefaultNodeInfo: {
            encode(message: _105.DefaultNodeInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _105.DefaultNodeInfo;
            fromPartial(object: Partial<_105.DefaultNodeInfo>): _105.DefaultNodeInfo;
        };
        DefaultNodeInfoOther: {
            encode(message: _105.DefaultNodeInfoOther, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _105.DefaultNodeInfoOther;
            fromPartial(object: Partial<_105.DefaultNodeInfoOther>): _105.DefaultNodeInfoOther;
        };
        PexRequest: {
            encode(_: _104.PexRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(_: any): _104.PexRequest;
            fromPartial(_: Partial<_104.PexRequest>): _104.PexRequest;
        };
        PexAddrs: {
            encode(message: _104.PexAddrs, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _104.PexAddrs;
            fromPartial(object: Partial<_104.PexAddrs>): _104.PexAddrs;
        };
        Message: {
            encode(message: _104.Message, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _104.Message;
            fromPartial(object: Partial<_104.Message>): _104.Message;
        };
        PacketPing: {
            encode(_: _103.PacketPing, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(_: any): _103.PacketPing;
            fromPartial(_: Partial<_103.PacketPing>): _103.PacketPing;
        };
        PacketPong: {
            encode(_: _103.PacketPong, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(_: any): _103.PacketPong;
            fromPartial(_: Partial<_103.PacketPong>): _103.PacketPong;
        };
        PacketMsg: {
            encode(message: _103.PacketMsg, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _103.PacketMsg;
            fromPartial(object: Partial<_103.PacketMsg>): _103.PacketMsg;
        };
        Packet: {
            encode(message: _103.Packet, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _103.Packet;
            fromPartial(object: Partial<_103.Packet>): _103.Packet;
        };
        AuthSigMessage: {
            encode(message: _103.AuthSigMessage, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _103.AuthSigMessage;
            fromPartial(object: Partial<_103.AuthSigMessage>): _103.AuthSigMessage;
        };
    };
    const privval: {
        errorsFromJSON(object: any): _106.Errors;
        errorsToJSON(object: _106.Errors): string;
        Errors: typeof _106.Errors;
        ErrorsSDKType: typeof _106.Errors;
        RemoteSignerError: {
            encode(message: _106.RemoteSignerError, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _106.RemoteSignerError;
            fromPartial(object: Partial<_106.RemoteSignerError>): _106.RemoteSignerError;
        };
        PubKeyRequest: {
            encode(message: _106.PubKeyRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _106.PubKeyRequest;
            fromPartial(object: Partial<_106.PubKeyRequest>): _106.PubKeyRequest;
        };
        PubKeyResponse: {
            encode(message: _106.PubKeyResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _106.PubKeyResponse;
            fromPartial(object: Partial<_106.PubKeyResponse>): _106.PubKeyResponse;
        };
        SignVoteRequest: {
            encode(message: _106.SignVoteRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _106.SignVoteRequest;
            fromPartial(object: Partial<_106.SignVoteRequest>): _106.SignVoteRequest;
        };
        SignedVoteResponse: {
            encode(message: _106.SignedVoteResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _106.SignedVoteResponse;
            fromPartial(object: Partial<_106.SignedVoteResponse>): _106.SignedVoteResponse;
        };
        SignProposalRequest: {
            encode(message: _106.SignProposalRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _106.SignProposalRequest;
            fromPartial(object: Partial<_106.SignProposalRequest>): _106.SignProposalRequest;
        };
        SignedProposalResponse: {
            encode(message: _106.SignedProposalResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _106.SignedProposalResponse;
            fromPartial(object: Partial<_106.SignedProposalResponse>): _106.SignedProposalResponse;
        };
        PingRequest: {
            encode(_: _106.PingRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(_: any): _106.PingRequest;
            fromPartial(_: Partial<_106.PingRequest>): _106.PingRequest;
        };
        PingResponse: {
            encode(_: _106.PingResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(_: any): _106.PingResponse;
            fromPartial(_: Partial<_106.PingResponse>): _106.PingResponse;
        };
        Message: {
            encode(message: _106.Message, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _106.Message;
            fromPartial(object: Partial<_106.Message>): _106.Message;
        };
    };
    namespace rpc {
        const grpc: {
            RequestPing: {
                encode(_: _107.RequestPing, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _107.RequestPing;
                fromPartial(_: Partial<_107.RequestPing>): _107.RequestPing;
            };
            RequestBroadcastTx: {
                encode(message: _107.RequestBroadcastTx, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _107.RequestBroadcastTx;
                fromPartial(object: Partial<_107.RequestBroadcastTx>): _107.RequestBroadcastTx;
            };
            ResponsePing: {
                encode(_: _107.ResponsePing, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _107.ResponsePing;
                fromPartial(_: Partial<_107.ResponsePing>): _107.ResponsePing;
            };
            ResponseBroadcastTx: {
                encode(message: _107.ResponseBroadcastTx, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _107.ResponseBroadcastTx;
                fromPartial(object: Partial<_107.ResponseBroadcastTx>): _107.ResponseBroadcastTx;
            };
        };
    }
    const state: {
        ABCIResponses: {
            encode(message: _108.ABCIResponses, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _108.ABCIResponses;
            fromPartial(object: Partial<_108.ABCIResponses>): _108.ABCIResponses;
        };
        ValidatorsInfo: {
            encode(message: _108.ValidatorsInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _108.ValidatorsInfo;
            fromPartial(object: Partial<_108.ValidatorsInfo>): _108.ValidatorsInfo;
        };
        ConsensusParamsInfo: {
            encode(message: _108.ConsensusParamsInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _108.ConsensusParamsInfo;
            fromPartial(object: Partial<_108.ConsensusParamsInfo>): _108.ConsensusParamsInfo;
        };
        ABCIResponsesInfo: {
            encode(message: _108.ABCIResponsesInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _108.ABCIResponsesInfo;
            fromPartial(object: Partial<_108.ABCIResponsesInfo>): _108.ABCIResponsesInfo;
        };
        Version: {
            encode(message: _108.Version, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _108.Version;
            fromPartial(object: Partial<_108.Version>): _108.Version;
        };
        State: {
            encode(message: _108.State, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _108.State;
            fromPartial(object: Partial<_108.State>): _108.State;
        };
    };
    const statesync: {
        Message: {
            encode(message: _109.Message, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _109.Message;
            fromPartial(object: Partial<_109.Message>): _109.Message;
        };
        SnapshotsRequest: {
            encode(_: _109.SnapshotsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(_: any): _109.SnapshotsRequest;
            fromPartial(_: Partial<_109.SnapshotsRequest>): _109.SnapshotsRequest;
        };
        SnapshotsResponse: {
            encode(message: _109.SnapshotsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _109.SnapshotsResponse;
            fromPartial(object: Partial<_109.SnapshotsResponse>): _109.SnapshotsResponse;
        };
        ChunkRequest: {
            encode(message: _109.ChunkRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _109.ChunkRequest;
            fromPartial(object: Partial<_109.ChunkRequest>): _109.ChunkRequest;
        };
        ChunkResponse: {
            encode(message: _109.ChunkResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _109.ChunkResponse;
            fromPartial(object: Partial<_109.ChunkResponse>): _109.ChunkResponse;
        };
    };
    const store: {
        BlockStoreState: {
            encode(message: _110.BlockStoreState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _110.BlockStoreState;
            fromPartial(object: Partial<_110.BlockStoreState>): _110.BlockStoreState;
        };
    };
    const types: {
        ValidatorSet: {
            encode(message: _117.ValidatorSet, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _117.ValidatorSet;
            fromPartial(object: Partial<_117.ValidatorSet>): _117.ValidatorSet;
        };
        Validator: {
            encode(message: _117.Validator, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _117.Validator;
            fromPartial(object: Partial<_117.Validator>): _117.Validator;
        };
        SimpleValidator: {
            encode(message: _117.SimpleValidator, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _117.SimpleValidator;
            fromPartial(object: Partial<_117.SimpleValidator>): _117.SimpleValidator;
        };
        blockIDFlagFromJSON(object: any): _116.BlockIDFlag;
        blockIDFlagToJSON(object: _116.BlockIDFlag): string;
        signedMsgTypeFromJSON(object: any): _116.SignedMsgType;
        signedMsgTypeToJSON(object: _116.SignedMsgType): string;
        BlockIDFlag: typeof _116.BlockIDFlag;
        BlockIDFlagSDKType: typeof _116.BlockIDFlag;
        SignedMsgType: typeof _116.SignedMsgType;
        SignedMsgTypeSDKType: typeof _116.SignedMsgType;
        PartSetHeader: {
            encode(message: _116.PartSetHeader, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _116.PartSetHeader;
            fromPartial(object: Partial<_116.PartSetHeader>): _116.PartSetHeader;
        };
        Part: {
            encode(message: _116.Part, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _116.Part;
            fromPartial(object: Partial<_116.Part>): _116.Part;
        };
        BlockID: {
            encode(message: _116.BlockID, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _116.BlockID;
            fromPartial(object: Partial<_116.BlockID>): _116.BlockID;
        };
        Header: {
            encode(message: _116.Header, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _116.Header;
            fromPartial(object: Partial<_116.Header>): _116.Header;
        };
        Data: {
            encode(message: _116.Data, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _116.Data;
            fromPartial(object: Partial<_116.Data>): _116.Data;
        };
        Vote: {
            encode(message: _116.Vote, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _116.Vote;
            fromPartial(object: Partial<_116.Vote>): _116.Vote;
        };
        Commit: {
            encode(message: _116.Commit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _116.Commit;
            fromPartial(object: Partial<_116.Commit>): _116.Commit;
        };
        CommitSig: {
            encode(message: _116.CommitSig, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _116.CommitSig;
            fromPartial(object: Partial<_116.CommitSig>): _116.CommitSig;
        };
        Proposal: {
            encode(message: _116.Proposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _116.Proposal;
            fromPartial(object: Partial<_116.Proposal>): _116.Proposal;
        };
        SignedHeader: {
            encode(message: _116.SignedHeader, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _116.SignedHeader;
            fromPartial(object: Partial<_116.SignedHeader>): _116.SignedHeader;
        };
        LightBlock: {
            encode(message: _116.LightBlock, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _116.LightBlock;
            fromPartial(object: Partial<_116.LightBlock>): _116.LightBlock;
        };
        BlockMeta: {
            encode(message: _116.BlockMeta, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _116.BlockMeta;
            fromPartial(object: Partial<_116.BlockMeta>): _116.BlockMeta;
        };
        TxProof: {
            encode(message: _116.TxProof, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _116.TxProof;
            fromPartial(object: Partial<_116.TxProof>): _116.TxProof;
        };
        ConsensusParams: {
            encode(message: _115.ConsensusParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _115.ConsensusParams;
            fromPartial(object: Partial<_115.ConsensusParams>): _115.ConsensusParams;
        };
        BlockParams: {
            encode(message: _115.BlockParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _115.BlockParams;
            fromPartial(object: Partial<_115.BlockParams>): _115.BlockParams;
        };
        EvidenceParams: {
            encode(message: _115.EvidenceParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _115.EvidenceParams;
            fromPartial(object: Partial<_115.EvidenceParams>): _115.EvidenceParams;
        };
        ValidatorParams: {
            encode(message: _115.ValidatorParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _115.ValidatorParams;
            fromPartial(object: Partial<_115.ValidatorParams>): _115.ValidatorParams;
        };
        VersionParams: {
            encode(message: _115.VersionParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _115.VersionParams;
            fromPartial(object: Partial<_115.VersionParams>): _115.VersionParams;
        };
        HashedParams: {
            encode(message: _115.HashedParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _115.HashedParams;
            fromPartial(object: Partial<_115.HashedParams>): _115.HashedParams;
        };
        Evidence: {
            encode(message: _114.Evidence, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _114.Evidence;
            fromPartial(object: Partial<_114.Evidence>): _114.Evidence;
        };
        DuplicateVoteEvidence: {
            encode(message: _114.DuplicateVoteEvidence, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _114.DuplicateVoteEvidence;
            fromPartial(object: Partial<_114.DuplicateVoteEvidence>): _114.DuplicateVoteEvidence;
        };
        LightClientAttackEvidence: {
            encode(message: _114.LightClientAttackEvidence, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _114.LightClientAttackEvidence;
            fromPartial(object: Partial<_114.LightClientAttackEvidence>): _114.LightClientAttackEvidence;
        };
        EvidenceList: {
            encode(message: _114.EvidenceList, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _114.EvidenceList;
            fromPartial(object: Partial<_114.EvidenceList>): _114.EvidenceList;
        };
        EventDataRoundState: {
            encode(message: _113.EventDataRoundState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _113.EventDataRoundState;
            fromPartial(object: Partial<_113.EventDataRoundState>): _113.EventDataRoundState;
        };
        CanonicalBlockID: {
            encode(message: _112.CanonicalBlockID, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _112.CanonicalBlockID;
            fromPartial(object: Partial<_112.CanonicalBlockID>): _112.CanonicalBlockID;
        };
        CanonicalPartSetHeader: {
            encode(message: _112.CanonicalPartSetHeader, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _112.CanonicalPartSetHeader;
            fromPartial(object: Partial<_112.CanonicalPartSetHeader>): _112.CanonicalPartSetHeader;
        };
        CanonicalProposal: {
            encode(message: _112.CanonicalProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _112.CanonicalProposal;
            fromPartial(object: Partial<_112.CanonicalProposal>): _112.CanonicalProposal;
        };
        CanonicalVote: {
            encode(message: _112.CanonicalVote, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _112.CanonicalVote;
            fromPartial(object: Partial<_112.CanonicalVote>): _112.CanonicalVote;
        };
        Block: {
            encode(message: _111.Block, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _111.Block;
            fromPartial(object: Partial<_111.Block>): _111.Block;
        };
    };
    const version: {
        App: {
            encode(message: _118.App, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _118.App;
            fromPartial(object: Partial<_118.App>): _118.App;
        };
        Consensus: {
            encode(message: _118.Consensus, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _118.Consensus;
            fromPartial(object: Partial<_118.Consensus>): _118.Consensus;
        };
    };
}
