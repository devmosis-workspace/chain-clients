import * as _109 from "./crypto/proof";
import * as _110 from "./crypto/keys";
import * as _111 from "./abci/types";
import * as _112 from "./blockchain/types";
import * as _113 from "./consensus/types";
import * as _114 from "./consensus/wal";
import * as _115 from "./libs/bits/types";
import * as _116 from "./mempool/types";
import * as _117 from "./p2p/conn";
import * as _118 from "./p2p/pex";
import * as _119 from "./p2p/types";
import * as _120 from "./privval/types";
import * as _121 from "./rpc/grpc/types";
import * as _122 from "./state/types";
import * as _123 from "./statesync/types";
import * as _124 from "./store/types";
import * as _125 from "./types/block";
import * as _126 from "./types/canonical";
import * as _127 from "./types/events";
import * as _128 from "./types/evidence";
import * as _129 from "./types/params";
import * as _130 from "./types/types";
import * as _131 from "./types/validator";
import * as _132 from "./version/types";
export declare namespace tendermint {
    const crypto: {
        PublicKey: {
            encode(message: _110.PublicKey, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _110.PublicKey;
            fromPartial(object: Partial<_110.PublicKey>): _110.PublicKey;
        };
        Proof: {
            encode(message: _109.Proof, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _109.Proof;
            fromPartial(object: Partial<_109.Proof>): _109.Proof;
        };
        ValueOp: {
            encode(message: _109.ValueOp, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _109.ValueOp;
            fromPartial(object: Partial<_109.ValueOp>): _109.ValueOp;
        };
        DominoOp: {
            encode(message: _109.DominoOp, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _109.DominoOp;
            fromPartial(object: Partial<_109.DominoOp>): _109.DominoOp;
        };
        ProofOp: {
            encode(message: _109.ProofOp, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _109.ProofOp;
            fromPartial(object: Partial<_109.ProofOp>): _109.ProofOp;
        };
        ProofOps: {
            encode(message: _109.ProofOps, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _109.ProofOps;
            fromPartial(object: Partial<_109.ProofOps>): _109.ProofOps;
        };
    };
    const abci: {
        checkTxTypeFromJSON(object: any): _111.CheckTxType;
        checkTxTypeToJSON(object: _111.CheckTxType): string;
        responseOfferSnapshot_ResultFromJSON(object: any): _111.ResponseOfferSnapshot_Result;
        responseOfferSnapshot_ResultToJSON(object: _111.ResponseOfferSnapshot_Result): string;
        responseApplySnapshotChunk_ResultFromJSON(object: any): _111.ResponseApplySnapshotChunk_Result;
        responseApplySnapshotChunk_ResultToJSON(object: _111.ResponseApplySnapshotChunk_Result): string;
        evidenceTypeFromJSON(object: any): _111.EvidenceType;
        evidenceTypeToJSON(object: _111.EvidenceType): string;
        CheckTxType: typeof _111.CheckTxType;
        CheckTxTypeSDKType: typeof _111.CheckTxType;
        ResponseOfferSnapshot_Result: typeof _111.ResponseOfferSnapshot_Result;
        ResponseOfferSnapshot_ResultSDKType: typeof _111.ResponseOfferSnapshot_Result;
        ResponseApplySnapshotChunk_Result: typeof _111.ResponseApplySnapshotChunk_Result;
        ResponseApplySnapshotChunk_ResultSDKType: typeof _111.ResponseApplySnapshotChunk_Result;
        EvidenceType: typeof _111.EvidenceType;
        EvidenceTypeSDKType: typeof _111.EvidenceType;
        Request: {
            encode(message: _111.Request, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _111.Request;
            fromPartial(object: Partial<_111.Request>): _111.Request;
        };
        RequestEcho: {
            encode(message: _111.RequestEcho, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _111.RequestEcho;
            fromPartial(object: Partial<_111.RequestEcho>): _111.RequestEcho;
        };
        RequestFlush: {
            encode(_: _111.RequestFlush, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(_: any): _111.RequestFlush;
            fromPartial(_: Partial<_111.RequestFlush>): _111.RequestFlush;
        };
        RequestInfo: {
            encode(message: _111.RequestInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _111.RequestInfo;
            fromPartial(object: Partial<_111.RequestInfo>): _111.RequestInfo;
        };
        RequestSetOption: {
            encode(message: _111.RequestSetOption, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _111.RequestSetOption;
            fromPartial(object: Partial<_111.RequestSetOption>): _111.RequestSetOption;
        };
        RequestInitChain: {
            encode(message: _111.RequestInitChain, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _111.RequestInitChain;
            fromPartial(object: Partial<_111.RequestInitChain>): _111.RequestInitChain;
        };
        RequestQuery: {
            encode(message: _111.RequestQuery, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _111.RequestQuery;
            fromPartial(object: Partial<_111.RequestQuery>): _111.RequestQuery;
        };
        RequestBeginBlock: {
            encode(message: _111.RequestBeginBlock, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _111.RequestBeginBlock;
            fromPartial(object: Partial<_111.RequestBeginBlock>): _111.RequestBeginBlock;
        };
        RequestCheckTx: {
            encode(message: _111.RequestCheckTx, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _111.RequestCheckTx;
            fromPartial(object: Partial<_111.RequestCheckTx>): _111.RequestCheckTx;
        };
        RequestDeliverTx: {
            encode(message: _111.RequestDeliverTx, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _111.RequestDeliverTx;
            fromPartial(object: Partial<_111.RequestDeliverTx>): _111.RequestDeliverTx;
        };
        RequestEndBlock: {
            encode(message: _111.RequestEndBlock, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _111.RequestEndBlock;
            fromPartial(object: Partial<_111.RequestEndBlock>): _111.RequestEndBlock;
        };
        RequestCommit: {
            encode(_: _111.RequestCommit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(_: any): _111.RequestCommit;
            fromPartial(_: Partial<_111.RequestCommit>): _111.RequestCommit;
        };
        RequestListSnapshots: {
            encode(_: _111.RequestListSnapshots, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(_: any): _111.RequestListSnapshots;
            fromPartial(_: Partial<_111.RequestListSnapshots>): _111.RequestListSnapshots;
        };
        RequestOfferSnapshot: {
            encode(message: _111.RequestOfferSnapshot, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _111.RequestOfferSnapshot;
            fromPartial(object: Partial<_111.RequestOfferSnapshot>): _111.RequestOfferSnapshot;
        };
        RequestLoadSnapshotChunk: {
            encode(message: _111.RequestLoadSnapshotChunk, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _111.RequestLoadSnapshotChunk;
            fromPartial(object: Partial<_111.RequestLoadSnapshotChunk>): _111.RequestLoadSnapshotChunk;
        };
        RequestApplySnapshotChunk: {
            encode(message: _111.RequestApplySnapshotChunk, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _111.RequestApplySnapshotChunk;
            fromPartial(object: Partial<_111.RequestApplySnapshotChunk>): _111.RequestApplySnapshotChunk;
        };
        Response: {
            encode(message: _111.Response, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _111.Response;
            fromPartial(object: Partial<_111.Response>): _111.Response;
        };
        ResponseException: {
            encode(message: _111.ResponseException, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _111.ResponseException;
            fromPartial(object: Partial<_111.ResponseException>): _111.ResponseException;
        };
        ResponseEcho: {
            encode(message: _111.ResponseEcho, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _111.ResponseEcho;
            fromPartial(object: Partial<_111.ResponseEcho>): _111.ResponseEcho;
        };
        ResponseFlush: {
            encode(_: _111.ResponseFlush, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(_: any): _111.ResponseFlush;
            fromPartial(_: Partial<_111.ResponseFlush>): _111.ResponseFlush;
        };
        ResponseInfo: {
            encode(message: _111.ResponseInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _111.ResponseInfo;
            fromPartial(object: Partial<_111.ResponseInfo>): _111.ResponseInfo;
        };
        ResponseSetOption: {
            encode(message: _111.ResponseSetOption, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _111.ResponseSetOption;
            fromPartial(object: Partial<_111.ResponseSetOption>): _111.ResponseSetOption;
        };
        ResponseInitChain: {
            encode(message: _111.ResponseInitChain, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _111.ResponseInitChain;
            fromPartial(object: Partial<_111.ResponseInitChain>): _111.ResponseInitChain;
        };
        ResponseQuery: {
            encode(message: _111.ResponseQuery, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _111.ResponseQuery;
            fromPartial(object: Partial<_111.ResponseQuery>): _111.ResponseQuery;
        };
        ResponseBeginBlock: {
            encode(message: _111.ResponseBeginBlock, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _111.ResponseBeginBlock;
            fromPartial(object: Partial<_111.ResponseBeginBlock>): _111.ResponseBeginBlock;
        };
        ResponseCheckTx: {
            encode(message: _111.ResponseCheckTx, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _111.ResponseCheckTx;
            fromPartial(object: Partial<_111.ResponseCheckTx>): _111.ResponseCheckTx;
        };
        ResponseDeliverTx: {
            encode(message: _111.ResponseDeliverTx, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _111.ResponseDeliverTx;
            fromPartial(object: Partial<_111.ResponseDeliverTx>): _111.ResponseDeliverTx;
        };
        ResponseEndBlock: {
            encode(message: _111.ResponseEndBlock, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _111.ResponseEndBlock;
            fromPartial(object: Partial<_111.ResponseEndBlock>): _111.ResponseEndBlock;
        };
        ResponseCommit: {
            encode(message: _111.ResponseCommit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _111.ResponseCommit;
            fromPartial(object: Partial<_111.ResponseCommit>): _111.ResponseCommit;
        };
        ResponseListSnapshots: {
            encode(message: _111.ResponseListSnapshots, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _111.ResponseListSnapshots;
            fromPartial(object: Partial<_111.ResponseListSnapshots>): _111.ResponseListSnapshots;
        };
        ResponseOfferSnapshot: {
            encode(message: _111.ResponseOfferSnapshot, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _111.ResponseOfferSnapshot;
            fromPartial(object: Partial<_111.ResponseOfferSnapshot>): _111.ResponseOfferSnapshot;
        };
        ResponseLoadSnapshotChunk: {
            encode(message: _111.ResponseLoadSnapshotChunk, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _111.ResponseLoadSnapshotChunk;
            fromPartial(object: Partial<_111.ResponseLoadSnapshotChunk>): _111.ResponseLoadSnapshotChunk;
        };
        ResponseApplySnapshotChunk: {
            encode(message: _111.ResponseApplySnapshotChunk, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _111.ResponseApplySnapshotChunk;
            fromPartial(object: Partial<_111.ResponseApplySnapshotChunk>): _111.ResponseApplySnapshotChunk;
        };
        ConsensusParams: {
            encode(message: _111.ConsensusParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _111.ConsensusParams;
            fromPartial(object: Partial<_111.ConsensusParams>): _111.ConsensusParams;
        };
        BlockParams: {
            encode(message: _111.BlockParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _111.BlockParams;
            fromPartial(object: Partial<_111.BlockParams>): _111.BlockParams;
        };
        LastCommitInfo: {
            encode(message: _111.LastCommitInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _111.LastCommitInfo;
            fromPartial(object: Partial<_111.LastCommitInfo>): _111.LastCommitInfo;
        };
        Event: {
            encode(message: _111.Event, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _111.Event;
            fromPartial(object: Partial<_111.Event>): _111.Event;
        };
        EventAttribute: {
            encode(message: _111.EventAttribute, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _111.EventAttribute;
            fromPartial(object: Partial<_111.EventAttribute>): _111.EventAttribute;
        };
        TxResult: {
            encode(message: _111.TxResult, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _111.TxResult;
            fromPartial(object: Partial<_111.TxResult>): _111.TxResult;
        };
        Validator: {
            encode(message: _111.Validator, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _111.Validator;
            fromPartial(object: Partial<_111.Validator>): _111.Validator;
        };
        ValidatorUpdate: {
            encode(message: _111.ValidatorUpdate, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _111.ValidatorUpdate;
            fromPartial(object: Partial<_111.ValidatorUpdate>): _111.ValidatorUpdate;
        };
        VoteInfo: {
            encode(message: _111.VoteInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _111.VoteInfo;
            fromPartial(object: Partial<_111.VoteInfo>): _111.VoteInfo;
        };
        Evidence: {
            encode(message: _111.Evidence, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _111.Evidence;
            fromPartial(object: Partial<_111.Evidence>): _111.Evidence;
        };
        Snapshot: {
            encode(message: _111.Snapshot, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _111.Snapshot;
            fromPartial(object: Partial<_111.Snapshot>): _111.Snapshot;
        };
    };
    const blockchain: {
        BlockRequest: {
            encode(message: _112.BlockRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _112.BlockRequest;
            fromPartial(object: Partial<_112.BlockRequest>): _112.BlockRequest;
        };
        NoBlockResponse: {
            encode(message: _112.NoBlockResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _112.NoBlockResponse;
            fromPartial(object: Partial<_112.NoBlockResponse>): _112.NoBlockResponse;
        };
        BlockResponse: {
            encode(message: _112.BlockResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _112.BlockResponse;
            fromPartial(object: Partial<_112.BlockResponse>): _112.BlockResponse;
        };
        StatusRequest: {
            encode(_: _112.StatusRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(_: any): _112.StatusRequest;
            fromPartial(_: Partial<_112.StatusRequest>): _112.StatusRequest;
        };
        StatusResponse: {
            encode(message: _112.StatusResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _112.StatusResponse;
            fromPartial(object: Partial<_112.StatusResponse>): _112.StatusResponse;
        };
        Message: {
            encode(message: _112.Message, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _112.Message;
            fromPartial(object: Partial<_112.Message>): _112.Message;
        };
    };
    const consensus: {
        MsgInfo: {
            encode(message: _114.MsgInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _114.MsgInfo;
            fromPartial(object: Partial<_114.MsgInfo>): _114.MsgInfo;
        };
        TimeoutInfo: {
            encode(message: _114.TimeoutInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _114.TimeoutInfo;
            fromPartial(object: Partial<_114.TimeoutInfo>): _114.TimeoutInfo;
        };
        EndHeight: {
            encode(message: _114.EndHeight, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _114.EndHeight;
            fromPartial(object: Partial<_114.EndHeight>): _114.EndHeight;
        };
        WALMessage: {
            encode(message: _114.WALMessage, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _114.WALMessage;
            fromPartial(object: Partial<_114.WALMessage>): _114.WALMessage;
        };
        TimedWALMessage: {
            encode(message: _114.TimedWALMessage, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _114.TimedWALMessage;
            fromPartial(object: Partial<_114.TimedWALMessage>): _114.TimedWALMessage;
        };
        NewRoundStep: {
            encode(message: _113.NewRoundStep, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _113.NewRoundStep;
            fromPartial(object: Partial<_113.NewRoundStep>): _113.NewRoundStep;
        };
        NewValidBlock: {
            encode(message: _113.NewValidBlock, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _113.NewValidBlock;
            fromPartial(object: Partial<_113.NewValidBlock>): _113.NewValidBlock;
        };
        Proposal: {
            encode(message: _113.Proposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _113.Proposal;
            fromPartial(object: Partial<_113.Proposal>): _113.Proposal;
        };
        ProposalPOL: {
            encode(message: _113.ProposalPOL, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _113.ProposalPOL;
            fromPartial(object: Partial<_113.ProposalPOL>): _113.ProposalPOL;
        };
        BlockPart: {
            encode(message: _113.BlockPart, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _113.BlockPart;
            fromPartial(object: Partial<_113.BlockPart>): _113.BlockPart;
        };
        Vote: {
            encode(message: _113.Vote, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _113.Vote;
            fromPartial(object: Partial<_113.Vote>): _113.Vote;
        };
        HasVote: {
            encode(message: _113.HasVote, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _113.HasVote;
            fromPartial(object: Partial<_113.HasVote>): _113.HasVote;
        };
        VoteSetMaj23: {
            encode(message: _113.VoteSetMaj23, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _113.VoteSetMaj23;
            fromPartial(object: Partial<_113.VoteSetMaj23>): _113.VoteSetMaj23;
        };
        VoteSetBits: {
            encode(message: _113.VoteSetBits, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _113.VoteSetBits;
            fromPartial(object: Partial<_113.VoteSetBits>): _113.VoteSetBits;
        };
        Message: {
            encode(message: _113.Message, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _113.Message;
            fromPartial(object: Partial<_113.Message>): _113.Message;
        };
    };
    namespace libs {
        const bits: {
            BitArray: {
                encode(message: _115.BitArray, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _115.BitArray;
                fromPartial(object: Partial<_115.BitArray>): _115.BitArray;
            };
        };
    }
    const mempool: {
        Txs: {
            encode(message: _116.Txs, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _116.Txs;
            fromPartial(object: Partial<_116.Txs>): _116.Txs;
        };
        Message: {
            encode(message: _116.Message, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _116.Message;
            fromPartial(object: Partial<_116.Message>): _116.Message;
        };
    };
    const p2p: {
        NetAddress: {
            encode(message: _119.NetAddress, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _119.NetAddress;
            fromPartial(object: Partial<_119.NetAddress>): _119.NetAddress;
        };
        ProtocolVersion: {
            encode(message: _119.ProtocolVersion, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _119.ProtocolVersion;
            fromPartial(object: Partial<_119.ProtocolVersion>): _119.ProtocolVersion;
        };
        DefaultNodeInfo: {
            encode(message: _119.DefaultNodeInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _119.DefaultNodeInfo;
            fromPartial(object: Partial<_119.DefaultNodeInfo>): _119.DefaultNodeInfo;
        };
        DefaultNodeInfoOther: {
            encode(message: _119.DefaultNodeInfoOther, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _119.DefaultNodeInfoOther;
            fromPartial(object: Partial<_119.DefaultNodeInfoOther>): _119.DefaultNodeInfoOther;
        };
        PexRequest: {
            encode(_: _118.PexRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(_: any): _118.PexRequest;
            fromPartial(_: Partial<_118.PexRequest>): _118.PexRequest;
        };
        PexAddrs: {
            encode(message: _118.PexAddrs, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _118.PexAddrs;
            fromPartial(object: Partial<_118.PexAddrs>): _118.PexAddrs;
        };
        Message: {
            encode(message: _118.Message, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _118.Message;
            fromPartial(object: Partial<_118.Message>): _118.Message;
        };
        PacketPing: {
            encode(_: _117.PacketPing, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(_: any): _117.PacketPing;
            fromPartial(_: Partial<_117.PacketPing>): _117.PacketPing;
        };
        PacketPong: {
            encode(_: _117.PacketPong, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(_: any): _117.PacketPong;
            fromPartial(_: Partial<_117.PacketPong>): _117.PacketPong;
        };
        PacketMsg: {
            encode(message: _117.PacketMsg, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _117.PacketMsg;
            fromPartial(object: Partial<_117.PacketMsg>): _117.PacketMsg;
        };
        Packet: {
            encode(message: _117.Packet, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _117.Packet;
            fromPartial(object: Partial<_117.Packet>): _117.Packet;
        };
        AuthSigMessage: {
            encode(message: _117.AuthSigMessage, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _117.AuthSigMessage;
            fromPartial(object: Partial<_117.AuthSigMessage>): _117.AuthSigMessage;
        };
    };
    const privval: {
        errorsFromJSON(object: any): _120.Errors;
        errorsToJSON(object: _120.Errors): string;
        Errors: typeof _120.Errors;
        ErrorsSDKType: typeof _120.Errors;
        RemoteSignerError: {
            encode(message: _120.RemoteSignerError, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _120.RemoteSignerError;
            fromPartial(object: Partial<_120.RemoteSignerError>): _120.RemoteSignerError;
        };
        PubKeyRequest: {
            encode(message: _120.PubKeyRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _120.PubKeyRequest;
            fromPartial(object: Partial<_120.PubKeyRequest>): _120.PubKeyRequest;
        };
        PubKeyResponse: {
            encode(message: _120.PubKeyResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _120.PubKeyResponse;
            fromPartial(object: Partial<_120.PubKeyResponse>): _120.PubKeyResponse;
        };
        SignVoteRequest: {
            encode(message: _120.SignVoteRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _120.SignVoteRequest;
            fromPartial(object: Partial<_120.SignVoteRequest>): _120.SignVoteRequest;
        };
        SignedVoteResponse: {
            encode(message: _120.SignedVoteResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _120.SignedVoteResponse;
            fromPartial(object: Partial<_120.SignedVoteResponse>): _120.SignedVoteResponse;
        };
        SignProposalRequest: {
            encode(message: _120.SignProposalRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _120.SignProposalRequest;
            fromPartial(object: Partial<_120.SignProposalRequest>): _120.SignProposalRequest;
        };
        SignedProposalResponse: {
            encode(message: _120.SignedProposalResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _120.SignedProposalResponse;
            fromPartial(object: Partial<_120.SignedProposalResponse>): _120.SignedProposalResponse;
        };
        PingRequest: {
            encode(_: _120.PingRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(_: any): _120.PingRequest;
            fromPartial(_: Partial<_120.PingRequest>): _120.PingRequest;
        };
        PingResponse: {
            encode(_: _120.PingResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(_: any): _120.PingResponse;
            fromPartial(_: Partial<_120.PingResponse>): _120.PingResponse;
        };
        Message: {
            encode(message: _120.Message, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _120.Message;
            fromPartial(object: Partial<_120.Message>): _120.Message;
        };
    };
    namespace rpc {
        const grpc: {
            RequestPing: {
                encode(_: _121.RequestPing, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _121.RequestPing;
                fromPartial(_: Partial<_121.RequestPing>): _121.RequestPing;
            };
            RequestBroadcastTx: {
                encode(message: _121.RequestBroadcastTx, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _121.RequestBroadcastTx;
                fromPartial(object: Partial<_121.RequestBroadcastTx>): _121.RequestBroadcastTx;
            };
            ResponsePing: {
                encode(_: _121.ResponsePing, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _121.ResponsePing;
                fromPartial(_: Partial<_121.ResponsePing>): _121.ResponsePing;
            };
            ResponseBroadcastTx: {
                encode(message: _121.ResponseBroadcastTx, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _121.ResponseBroadcastTx;
                fromPartial(object: Partial<_121.ResponseBroadcastTx>): _121.ResponseBroadcastTx;
            };
        };
    }
    const state: {
        ABCIResponses: {
            encode(message: _122.ABCIResponses, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _122.ABCIResponses;
            fromPartial(object: Partial<_122.ABCIResponses>): _122.ABCIResponses;
        };
        ValidatorsInfo: {
            encode(message: _122.ValidatorsInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _122.ValidatorsInfo;
            fromPartial(object: Partial<_122.ValidatorsInfo>): _122.ValidatorsInfo;
        };
        ConsensusParamsInfo: {
            encode(message: _122.ConsensusParamsInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _122.ConsensusParamsInfo;
            fromPartial(object: Partial<_122.ConsensusParamsInfo>): _122.ConsensusParamsInfo;
        };
        ABCIResponsesInfo: {
            encode(message: _122.ABCIResponsesInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _122.ABCIResponsesInfo;
            fromPartial(object: Partial<_122.ABCIResponsesInfo>): _122.ABCIResponsesInfo;
        };
        Version: {
            encode(message: _122.Version, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _122.Version;
            fromPartial(object: Partial<_122.Version>): _122.Version;
        };
        State: {
            encode(message: _122.State, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _122.State;
            fromPartial(object: Partial<_122.State>): _122.State;
        };
    };
    const statesync: {
        Message: {
            encode(message: _123.Message, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _123.Message;
            fromPartial(object: Partial<_123.Message>): _123.Message;
        };
        SnapshotsRequest: {
            encode(_: _123.SnapshotsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(_: any): _123.SnapshotsRequest;
            fromPartial(_: Partial<_123.SnapshotsRequest>): _123.SnapshotsRequest;
        };
        SnapshotsResponse: {
            encode(message: _123.SnapshotsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _123.SnapshotsResponse;
            fromPartial(object: Partial<_123.SnapshotsResponse>): _123.SnapshotsResponse;
        };
        ChunkRequest: {
            encode(message: _123.ChunkRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _123.ChunkRequest;
            fromPartial(object: Partial<_123.ChunkRequest>): _123.ChunkRequest;
        };
        ChunkResponse: {
            encode(message: _123.ChunkResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _123.ChunkResponse;
            fromPartial(object: Partial<_123.ChunkResponse>): _123.ChunkResponse;
        };
    };
    const store: {
        BlockStoreState: {
            encode(message: _124.BlockStoreState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _124.BlockStoreState;
            fromPartial(object: Partial<_124.BlockStoreState>): _124.BlockStoreState;
        };
    };
    const types: {
        ValidatorSet: {
            encode(message: _131.ValidatorSet, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _131.ValidatorSet;
            fromPartial(object: Partial<_131.ValidatorSet>): _131.ValidatorSet;
        };
        Validator: {
            encode(message: _131.Validator, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _131.Validator;
            fromPartial(object: Partial<_131.Validator>): _131.Validator;
        };
        SimpleValidator: {
            encode(message: _131.SimpleValidator, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _131.SimpleValidator;
            fromPartial(object: Partial<_131.SimpleValidator>): _131.SimpleValidator;
        };
        blockIDFlagFromJSON(object: any): _130.BlockIDFlag;
        blockIDFlagToJSON(object: _130.BlockIDFlag): string;
        signedMsgTypeFromJSON(object: any): _130.SignedMsgType;
        signedMsgTypeToJSON(object: _130.SignedMsgType): string;
        BlockIDFlag: typeof _130.BlockIDFlag;
        BlockIDFlagSDKType: typeof _130.BlockIDFlag;
        SignedMsgType: typeof _130.SignedMsgType;
        SignedMsgTypeSDKType: typeof _130.SignedMsgType;
        PartSetHeader: {
            encode(message: _130.PartSetHeader, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _130.PartSetHeader;
            fromPartial(object: Partial<_130.PartSetHeader>): _130.PartSetHeader;
        };
        Part: {
            encode(message: _130.Part, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _130.Part;
            fromPartial(object: Partial<_130.Part>): _130.Part;
        };
        BlockID: {
            encode(message: _130.BlockID, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _130.BlockID;
            fromPartial(object: Partial<_130.BlockID>): _130.BlockID;
        };
        Header: {
            encode(message: _130.Header, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _130.Header;
            fromPartial(object: Partial<_130.Header>): _130.Header;
        };
        Data: {
            encode(message: _130.Data, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _130.Data;
            fromPartial(object: Partial<_130.Data>): _130.Data;
        };
        Vote: {
            encode(message: _130.Vote, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _130.Vote;
            fromPartial(object: Partial<_130.Vote>): _130.Vote;
        };
        Commit: {
            encode(message: _130.Commit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _130.Commit;
            fromPartial(object: Partial<_130.Commit>): _130.Commit;
        };
        CommitSig: {
            encode(message: _130.CommitSig, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _130.CommitSig;
            fromPartial(object: Partial<_130.CommitSig>): _130.CommitSig;
        };
        Proposal: {
            encode(message: _130.Proposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _130.Proposal;
            fromPartial(object: Partial<_130.Proposal>): _130.Proposal;
        };
        SignedHeader: {
            encode(message: _130.SignedHeader, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _130.SignedHeader;
            fromPartial(object: Partial<_130.SignedHeader>): _130.SignedHeader;
        };
        LightBlock: {
            encode(message: _130.LightBlock, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _130.LightBlock;
            fromPartial(object: Partial<_130.LightBlock>): _130.LightBlock;
        };
        BlockMeta: {
            encode(message: _130.BlockMeta, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _130.BlockMeta;
            fromPartial(object: Partial<_130.BlockMeta>): _130.BlockMeta;
        };
        TxProof: {
            encode(message: _130.TxProof, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _130.TxProof;
            fromPartial(object: Partial<_130.TxProof>): _130.TxProof;
        };
        ConsensusParams: {
            encode(message: _129.ConsensusParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _129.ConsensusParams;
            fromPartial(object: Partial<_129.ConsensusParams>): _129.ConsensusParams;
        };
        BlockParams: {
            encode(message: _129.BlockParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _129.BlockParams;
            fromPartial(object: Partial<_129.BlockParams>): _129.BlockParams;
        };
        EvidenceParams: {
            encode(message: _129.EvidenceParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _129.EvidenceParams;
            fromPartial(object: Partial<_129.EvidenceParams>): _129.EvidenceParams;
        };
        ValidatorParams: {
            encode(message: _129.ValidatorParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _129.ValidatorParams;
            fromPartial(object: Partial<_129.ValidatorParams>): _129.ValidatorParams;
        };
        VersionParams: {
            encode(message: _129.VersionParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _129.VersionParams;
            fromPartial(object: Partial<_129.VersionParams>): _129.VersionParams;
        };
        HashedParams: {
            encode(message: _129.HashedParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _129.HashedParams;
            fromPartial(object: Partial<_129.HashedParams>): _129.HashedParams;
        };
        Evidence: {
            encode(message: _128.Evidence, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _128.Evidence;
            fromPartial(object: Partial<_128.Evidence>): _128.Evidence;
        };
        DuplicateVoteEvidence: {
            encode(message: _128.DuplicateVoteEvidence, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _128.DuplicateVoteEvidence;
            fromPartial(object: Partial<_128.DuplicateVoteEvidence>): _128.DuplicateVoteEvidence;
        };
        LightClientAttackEvidence: {
            encode(message: _128.LightClientAttackEvidence, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _128.LightClientAttackEvidence;
            fromPartial(object: Partial<_128.LightClientAttackEvidence>): _128.LightClientAttackEvidence;
        };
        EvidenceList: {
            encode(message: _128.EvidenceList, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _128.EvidenceList;
            fromPartial(object: Partial<_128.EvidenceList>): _128.EvidenceList;
        };
        EventDataRoundState: {
            encode(message: _127.EventDataRoundState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _127.EventDataRoundState;
            fromPartial(object: Partial<_127.EventDataRoundState>): _127.EventDataRoundState;
        };
        CanonicalBlockID: {
            encode(message: _126.CanonicalBlockID, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _126.CanonicalBlockID;
            fromPartial(object: Partial<_126.CanonicalBlockID>): _126.CanonicalBlockID;
        };
        CanonicalPartSetHeader: {
            encode(message: _126.CanonicalPartSetHeader, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _126.CanonicalPartSetHeader;
            fromPartial(object: Partial<_126.CanonicalPartSetHeader>): _126.CanonicalPartSetHeader;
        };
        CanonicalProposal: {
            encode(message: _126.CanonicalProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _126.CanonicalProposal;
            fromPartial(object: Partial<_126.CanonicalProposal>): _126.CanonicalProposal;
        };
        CanonicalVote: {
            encode(message: _126.CanonicalVote, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _126.CanonicalVote;
            fromPartial(object: Partial<_126.CanonicalVote>): _126.CanonicalVote;
        };
        Block: {
            encode(message: _125.Block, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _125.Block;
            fromPartial(object: Partial<_125.Block>): _125.Block;
        };
    };
    const version: {
        App: {
            encode(message: _132.App, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _132.App;
            fromPartial(object: Partial<_132.App>): _132.App;
        };
        Consensus: {
            encode(message: _132.Consensus, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _132.Consensus;
            fromPartial(object: Partial<_132.Consensus>): _132.Consensus;
        };
    };
}
