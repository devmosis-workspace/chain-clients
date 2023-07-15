import * as _122 from "./abci/types";
import * as _123 from "./blockchain/types";
import * as _124 from "./consensus/types";
import * as _125 from "./consensus/wal";
import * as _126 from "./crypto/keys";
import * as _127 from "./crypto/proof";
import * as _128 from "./libs/bits/types";
import * as _129 from "./mempool/types";
import * as _130 from "./p2p/conn";
import * as _131 from "./p2p/pex";
import * as _132 from "./p2p/types";
import * as _133 from "./privval/types";
import * as _134 from "./rpc/grpc/types";
import * as _135 from "./state/types";
import * as _136 from "./statesync/types";
import * as _137 from "./store/types";
import * as _138 from "./types/block";
import * as _139 from "./types/canonical";
import * as _140 from "./types/events";
import * as _141 from "./types/evidence";
import * as _142 from "./types/params";
import * as _143 from "./types/types";
import * as _144 from "./types/validator";
import * as _145 from "./version/types";
export declare namespace tendermint {
    const abci: {
        checkTxTypeFromJSON(object: any): _122.CheckTxType;
        checkTxTypeToJSON(object: _122.CheckTxType): string;
        responseOfferSnapshot_ResultFromJSON(object: any): _122.ResponseOfferSnapshot_Result;
        responseOfferSnapshot_ResultToJSON(object: _122.ResponseOfferSnapshot_Result): string;
        responseApplySnapshotChunk_ResultFromJSON(object: any): _122.ResponseApplySnapshotChunk_Result;
        responseApplySnapshotChunk_ResultToJSON(object: _122.ResponseApplySnapshotChunk_Result): string;
        evidenceTypeFromJSON(object: any): _122.EvidenceType;
        evidenceTypeToJSON(object: _122.EvidenceType): string;
        CheckTxType: typeof _122.CheckTxType;
        CheckTxTypeSDKType: typeof _122.CheckTxType;
        ResponseOfferSnapshot_Result: typeof _122.ResponseOfferSnapshot_Result;
        ResponseOfferSnapshot_ResultSDKType: typeof _122.ResponseOfferSnapshot_Result;
        ResponseApplySnapshotChunk_Result: typeof _122.ResponseApplySnapshotChunk_Result;
        ResponseApplySnapshotChunk_ResultSDKType: typeof _122.ResponseApplySnapshotChunk_Result;
        EvidenceType: typeof _122.EvidenceType;
        EvidenceTypeSDKType: typeof _122.EvidenceType;
        Request: {
            encode(message: _122.Request, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _122.Request;
            fromPartial(object: Partial<_122.Request>): _122.Request;
        };
        RequestEcho: {
            encode(message: _122.RequestEcho, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _122.RequestEcho;
            fromPartial(object: Partial<_122.RequestEcho>): _122.RequestEcho;
        };
        RequestFlush: {
            encode(_: _122.RequestFlush, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(_: any): _122.RequestFlush;
            fromPartial(_: Partial<_122.RequestFlush>): _122.RequestFlush;
        };
        RequestInfo: {
            encode(message: _122.RequestInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _122.RequestInfo;
            fromPartial(object: Partial<_122.RequestInfo>): _122.RequestInfo;
        };
        RequestSetOption: {
            encode(message: _122.RequestSetOption, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _122.RequestSetOption;
            fromPartial(object: Partial<_122.RequestSetOption>): _122.RequestSetOption;
        };
        RequestInitChain: {
            encode(message: _122.RequestInitChain, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _122.RequestInitChain;
            fromPartial(object: Partial<_122.RequestInitChain>): _122.RequestInitChain;
        };
        RequestQuery: {
            encode(message: _122.RequestQuery, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _122.RequestQuery;
            fromPartial(object: Partial<_122.RequestQuery>): _122.RequestQuery;
        };
        RequestBeginBlock: {
            encode(message: _122.RequestBeginBlock, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _122.RequestBeginBlock;
            fromPartial(object: Partial<_122.RequestBeginBlock>): _122.RequestBeginBlock;
        };
        RequestCheckTx: {
            encode(message: _122.RequestCheckTx, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _122.RequestCheckTx;
            fromPartial(object: Partial<_122.RequestCheckTx>): _122.RequestCheckTx;
        };
        RequestDeliverTx: {
            encode(message: _122.RequestDeliverTx, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _122.RequestDeliverTx;
            fromPartial(object: Partial<_122.RequestDeliverTx>): _122.RequestDeliverTx;
        };
        RequestEndBlock: {
            encode(message: _122.RequestEndBlock, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _122.RequestEndBlock;
            fromPartial(object: Partial<_122.RequestEndBlock>): _122.RequestEndBlock;
        };
        RequestCommit: {
            encode(_: _122.RequestCommit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(_: any): _122.RequestCommit;
            fromPartial(_: Partial<_122.RequestCommit>): _122.RequestCommit;
        };
        RequestListSnapshots: {
            encode(_: _122.RequestListSnapshots, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(_: any): _122.RequestListSnapshots;
            fromPartial(_: Partial<_122.RequestListSnapshots>): _122.RequestListSnapshots;
        };
        RequestOfferSnapshot: {
            encode(message: _122.RequestOfferSnapshot, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _122.RequestOfferSnapshot;
            fromPartial(object: Partial<_122.RequestOfferSnapshot>): _122.RequestOfferSnapshot;
        };
        RequestLoadSnapshotChunk: {
            encode(message: _122.RequestLoadSnapshotChunk, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _122.RequestLoadSnapshotChunk;
            fromPartial(object: Partial<_122.RequestLoadSnapshotChunk>): _122.RequestLoadSnapshotChunk;
        };
        RequestApplySnapshotChunk: {
            encode(message: _122.RequestApplySnapshotChunk, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _122.RequestApplySnapshotChunk;
            fromPartial(object: Partial<_122.RequestApplySnapshotChunk>): _122.RequestApplySnapshotChunk;
        };
        Response: {
            encode(message: _122.Response, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _122.Response;
            fromPartial(object: Partial<_122.Response>): _122.Response;
        };
        ResponseException: {
            encode(message: _122.ResponseException, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _122.ResponseException;
            fromPartial(object: Partial<_122.ResponseException>): _122.ResponseException;
        };
        ResponseEcho: {
            encode(message: _122.ResponseEcho, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _122.ResponseEcho;
            fromPartial(object: Partial<_122.ResponseEcho>): _122.ResponseEcho;
        };
        ResponseFlush: {
            encode(_: _122.ResponseFlush, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(_: any): _122.ResponseFlush;
            fromPartial(_: Partial<_122.ResponseFlush>): _122.ResponseFlush;
        };
        ResponseInfo: {
            encode(message: _122.ResponseInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _122.ResponseInfo;
            fromPartial(object: Partial<_122.ResponseInfo>): _122.ResponseInfo;
        };
        ResponseSetOption: {
            encode(message: _122.ResponseSetOption, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _122.ResponseSetOption;
            fromPartial(object: Partial<_122.ResponseSetOption>): _122.ResponseSetOption;
        };
        ResponseInitChain: {
            encode(message: _122.ResponseInitChain, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _122.ResponseInitChain;
            fromPartial(object: Partial<_122.ResponseInitChain>): _122.ResponseInitChain;
        };
        ResponseQuery: {
            encode(message: _122.ResponseQuery, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _122.ResponseQuery;
            fromPartial(object: Partial<_122.ResponseQuery>): _122.ResponseQuery;
        };
        ResponseBeginBlock: {
            encode(message: _122.ResponseBeginBlock, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _122.ResponseBeginBlock;
            fromPartial(object: Partial<_122.ResponseBeginBlock>): _122.ResponseBeginBlock;
        };
        ResponseCheckTx: {
            encode(message: _122.ResponseCheckTx, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _122.ResponseCheckTx;
            fromPartial(object: Partial<_122.ResponseCheckTx>): _122.ResponseCheckTx;
        };
        ResponseDeliverTx: {
            encode(message: _122.ResponseDeliverTx, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _122.ResponseDeliverTx;
            fromPartial(object: Partial<_122.ResponseDeliverTx>): _122.ResponseDeliverTx;
        };
        ResponseEndBlock: {
            encode(message: _122.ResponseEndBlock, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _122.ResponseEndBlock;
            fromPartial(object: Partial<_122.ResponseEndBlock>): _122.ResponseEndBlock;
        };
        ResponseCommit: {
            encode(message: _122.ResponseCommit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _122.ResponseCommit;
            fromPartial(object: Partial<_122.ResponseCommit>): _122.ResponseCommit;
        };
        ResponseListSnapshots: {
            encode(message: _122.ResponseListSnapshots, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _122.ResponseListSnapshots;
            fromPartial(object: Partial<_122.ResponseListSnapshots>): _122.ResponseListSnapshots;
        };
        ResponseOfferSnapshot: {
            encode(message: _122.ResponseOfferSnapshot, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _122.ResponseOfferSnapshot;
            fromPartial(object: Partial<_122.ResponseOfferSnapshot>): _122.ResponseOfferSnapshot;
        };
        ResponseLoadSnapshotChunk: {
            encode(message: _122.ResponseLoadSnapshotChunk, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _122.ResponseLoadSnapshotChunk;
            fromPartial(object: Partial<_122.ResponseLoadSnapshotChunk>): _122.ResponseLoadSnapshotChunk;
        };
        ResponseApplySnapshotChunk: {
            encode(message: _122.ResponseApplySnapshotChunk, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _122.ResponseApplySnapshotChunk;
            fromPartial(object: Partial<_122.ResponseApplySnapshotChunk>): _122.ResponseApplySnapshotChunk;
        };
        ConsensusParams: {
            encode(message: _122.ConsensusParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _122.ConsensusParams;
            fromPartial(object: Partial<_122.ConsensusParams>): _122.ConsensusParams;
        };
        BlockParams: {
            encode(message: _122.BlockParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _122.BlockParams;
            fromPartial(object: Partial<_122.BlockParams>): _122.BlockParams;
        };
        LastCommitInfo: {
            encode(message: _122.LastCommitInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _122.LastCommitInfo;
            fromPartial(object: Partial<_122.LastCommitInfo>): _122.LastCommitInfo;
        };
        Event: {
            encode(message: _122.Event, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _122.Event;
            fromPartial(object: Partial<_122.Event>): _122.Event;
        };
        EventAttribute: {
            encode(message: _122.EventAttribute, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _122.EventAttribute;
            fromPartial(object: Partial<_122.EventAttribute>): _122.EventAttribute;
        };
        TxResult: {
            encode(message: _122.TxResult, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _122.TxResult;
            fromPartial(object: Partial<_122.TxResult>): _122.TxResult;
        };
        Validator: {
            encode(message: _122.Validator, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _122.Validator;
            fromPartial(object: Partial<_122.Validator>): _122.Validator;
        };
        ValidatorUpdate: {
            encode(message: _122.ValidatorUpdate, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _122.ValidatorUpdate;
            fromPartial(object: Partial<_122.ValidatorUpdate>): _122.ValidatorUpdate;
        };
        VoteInfo: {
            encode(message: _122.VoteInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _122.VoteInfo;
            fromPartial(object: Partial<_122.VoteInfo>): _122.VoteInfo;
        };
        Evidence: {
            encode(message: _122.Evidence, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _122.Evidence;
            fromPartial(object: Partial<_122.Evidence>): _122.Evidence;
        };
        Snapshot: {
            encode(message: _122.Snapshot, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _122.Snapshot;
            fromPartial(object: Partial<_122.Snapshot>): _122.Snapshot;
        };
    };
    const blockchain: {
        BlockRequest: {
            encode(message: _123.BlockRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _123.BlockRequest;
            fromPartial(object: Partial<_123.BlockRequest>): _123.BlockRequest;
        };
        NoBlockResponse: {
            encode(message: _123.NoBlockResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _123.NoBlockResponse;
            fromPartial(object: Partial<_123.NoBlockResponse>): _123.NoBlockResponse;
        };
        BlockResponse: {
            encode(message: _123.BlockResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _123.BlockResponse;
            fromPartial(object: Partial<_123.BlockResponse>): _123.BlockResponse;
        };
        StatusRequest: {
            encode(_: _123.StatusRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(_: any): _123.StatusRequest;
            fromPartial(_: Partial<_123.StatusRequest>): _123.StatusRequest;
        };
        StatusResponse: {
            encode(message: _123.StatusResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _123.StatusResponse;
            fromPartial(object: Partial<_123.StatusResponse>): _123.StatusResponse;
        };
        Message: {
            encode(message: _123.Message, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _123.Message;
            fromPartial(object: Partial<_123.Message>): _123.Message;
        };
    };
    const consensus: {
        MsgInfo: {
            encode(message: _125.MsgInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _125.MsgInfo;
            fromPartial(object: Partial<_125.MsgInfo>): _125.MsgInfo;
        };
        TimeoutInfo: {
            encode(message: _125.TimeoutInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _125.TimeoutInfo;
            fromPartial(object: Partial<_125.TimeoutInfo>): _125.TimeoutInfo;
        };
        EndHeight: {
            encode(message: _125.EndHeight, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _125.EndHeight;
            fromPartial(object: Partial<_125.EndHeight>): _125.EndHeight;
        };
        WALMessage: {
            encode(message: _125.WALMessage, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _125.WALMessage;
            fromPartial(object: Partial<_125.WALMessage>): _125.WALMessage;
        };
        TimedWALMessage: {
            encode(message: _125.TimedWALMessage, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _125.TimedWALMessage;
            fromPartial(object: Partial<_125.TimedWALMessage>): _125.TimedWALMessage;
        };
        NewRoundStep: {
            encode(message: _124.NewRoundStep, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _124.NewRoundStep;
            fromPartial(object: Partial<_124.NewRoundStep>): _124.NewRoundStep;
        };
        NewValidBlock: {
            encode(message: _124.NewValidBlock, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _124.NewValidBlock;
            fromPartial(object: Partial<_124.NewValidBlock>): _124.NewValidBlock;
        };
        Proposal: {
            encode(message: _124.Proposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _124.Proposal;
            fromPartial(object: Partial<_124.Proposal>): _124.Proposal;
        };
        ProposalPOL: {
            encode(message: _124.ProposalPOL, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _124.ProposalPOL;
            fromPartial(object: Partial<_124.ProposalPOL>): _124.ProposalPOL;
        };
        BlockPart: {
            encode(message: _124.BlockPart, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _124.BlockPart;
            fromPartial(object: Partial<_124.BlockPart>): _124.BlockPart;
        };
        Vote: {
            encode(message: _124.Vote, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _124.Vote;
            fromPartial(object: Partial<_124.Vote>): _124.Vote;
        };
        HasVote: {
            encode(message: _124.HasVote, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _124.HasVote;
            fromPartial(object: Partial<_124.HasVote>): _124.HasVote;
        };
        VoteSetMaj23: {
            encode(message: _124.VoteSetMaj23, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _124.VoteSetMaj23;
            fromPartial(object: Partial<_124.VoteSetMaj23>): _124.VoteSetMaj23;
        };
        VoteSetBits: {
            encode(message: _124.VoteSetBits, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _124.VoteSetBits;
            fromPartial(object: Partial<_124.VoteSetBits>): _124.VoteSetBits;
        };
        Message: {
            encode(message: _124.Message, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _124.Message;
            fromPartial(object: Partial<_124.Message>): _124.Message;
        };
    };
    const crypto: {
        Proof: {
            encode(message: _127.Proof, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _127.Proof;
            fromPartial(object: Partial<_127.Proof>): _127.Proof;
        };
        ValueOp: {
            encode(message: _127.ValueOp, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _127.ValueOp;
            fromPartial(object: Partial<_127.ValueOp>): _127.ValueOp;
        };
        DominoOp: {
            encode(message: _127.DominoOp, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _127.DominoOp;
            fromPartial(object: Partial<_127.DominoOp>): _127.DominoOp;
        };
        ProofOp: {
            encode(message: _127.ProofOp, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _127.ProofOp;
            fromPartial(object: Partial<_127.ProofOp>): _127.ProofOp;
        };
        ProofOps: {
            encode(message: _127.ProofOps, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _127.ProofOps;
            fromPartial(object: Partial<_127.ProofOps>): _127.ProofOps;
        };
        PublicKey: {
            encode(message: _126.PublicKey, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _126.PublicKey;
            fromPartial(object: Partial<_126.PublicKey>): _126.PublicKey;
        };
    };
    namespace libs {
        const bits: {
            BitArray: {
                encode(message: _128.BitArray, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _128.BitArray;
                fromPartial(object: Partial<_128.BitArray>): _128.BitArray;
            };
        };
    }
    const mempool: {
        Txs: {
            encode(message: _129.Txs, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _129.Txs;
            fromPartial(object: Partial<_129.Txs>): _129.Txs;
        };
        Message: {
            encode(message: _129.Message, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _129.Message;
            fromPartial(object: Partial<_129.Message>): _129.Message;
        };
    };
    const p2p: {
        NetAddress: {
            encode(message: _132.NetAddress, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _132.NetAddress;
            fromPartial(object: Partial<_132.NetAddress>): _132.NetAddress;
        };
        ProtocolVersion: {
            encode(message: _132.ProtocolVersion, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _132.ProtocolVersion;
            fromPartial(object: Partial<_132.ProtocolVersion>): _132.ProtocolVersion;
        };
        DefaultNodeInfo: {
            encode(message: _132.DefaultNodeInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _132.DefaultNodeInfo;
            fromPartial(object: Partial<_132.DefaultNodeInfo>): _132.DefaultNodeInfo;
        };
        DefaultNodeInfoOther: {
            encode(message: _132.DefaultNodeInfoOther, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _132.DefaultNodeInfoOther;
            fromPartial(object: Partial<_132.DefaultNodeInfoOther>): _132.DefaultNodeInfoOther;
        };
        PexRequest: {
            encode(_: _131.PexRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(_: any): _131.PexRequest;
            fromPartial(_: Partial<_131.PexRequest>): _131.PexRequest;
        };
        PexAddrs: {
            encode(message: _131.PexAddrs, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _131.PexAddrs;
            fromPartial(object: Partial<_131.PexAddrs>): _131.PexAddrs;
        };
        Message: {
            encode(message: _131.Message, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _131.Message;
            fromPartial(object: Partial<_131.Message>): _131.Message;
        };
        PacketPing: {
            encode(_: _130.PacketPing, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(_: any): _130.PacketPing;
            fromPartial(_: Partial<_130.PacketPing>): _130.PacketPing;
        };
        PacketPong: {
            encode(_: _130.PacketPong, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(_: any): _130.PacketPong;
            fromPartial(_: Partial<_130.PacketPong>): _130.PacketPong;
        };
        PacketMsg: {
            encode(message: _130.PacketMsg, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _130.PacketMsg;
            fromPartial(object: Partial<_130.PacketMsg>): _130.PacketMsg;
        };
        Packet: {
            encode(message: _130.Packet, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _130.Packet;
            fromPartial(object: Partial<_130.Packet>): _130.Packet;
        };
        AuthSigMessage: {
            encode(message: _130.AuthSigMessage, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _130.AuthSigMessage;
            fromPartial(object: Partial<_130.AuthSigMessage>): _130.AuthSigMessage;
        };
    };
    const privval: {
        errorsFromJSON(object: any): _133.Errors;
        errorsToJSON(object: _133.Errors): string;
        Errors: typeof _133.Errors;
        ErrorsSDKType: typeof _133.Errors;
        RemoteSignerError: {
            encode(message: _133.RemoteSignerError, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _133.RemoteSignerError;
            fromPartial(object: Partial<_133.RemoteSignerError>): _133.RemoteSignerError;
        };
        PubKeyRequest: {
            encode(message: _133.PubKeyRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _133.PubKeyRequest;
            fromPartial(object: Partial<_133.PubKeyRequest>): _133.PubKeyRequest;
        };
        PubKeyResponse: {
            encode(message: _133.PubKeyResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _133.PubKeyResponse;
            fromPartial(object: Partial<_133.PubKeyResponse>): _133.PubKeyResponse;
        };
        SignVoteRequest: {
            encode(message: _133.SignVoteRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _133.SignVoteRequest;
            fromPartial(object: Partial<_133.SignVoteRequest>): _133.SignVoteRequest;
        };
        SignedVoteResponse: {
            encode(message: _133.SignedVoteResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _133.SignedVoteResponse;
            fromPartial(object: Partial<_133.SignedVoteResponse>): _133.SignedVoteResponse;
        };
        SignProposalRequest: {
            encode(message: _133.SignProposalRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _133.SignProposalRequest;
            fromPartial(object: Partial<_133.SignProposalRequest>): _133.SignProposalRequest;
        };
        SignedProposalResponse: {
            encode(message: _133.SignedProposalResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _133.SignedProposalResponse;
            fromPartial(object: Partial<_133.SignedProposalResponse>): _133.SignedProposalResponse;
        };
        PingRequest: {
            encode(_: _133.PingRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(_: any): _133.PingRequest;
            fromPartial(_: Partial<_133.PingRequest>): _133.PingRequest;
        };
        PingResponse: {
            encode(_: _133.PingResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(_: any): _133.PingResponse;
            fromPartial(_: Partial<_133.PingResponse>): _133.PingResponse;
        };
        Message: {
            encode(message: _133.Message, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _133.Message;
            fromPartial(object: Partial<_133.Message>): _133.Message;
        };
    };
    namespace rpc {
        const grpc: {
            RequestPing: {
                encode(_: _134.RequestPing, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _134.RequestPing;
                fromPartial(_: Partial<_134.RequestPing>): _134.RequestPing;
            };
            RequestBroadcastTx: {
                encode(message: _134.RequestBroadcastTx, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _134.RequestBroadcastTx;
                fromPartial(object: Partial<_134.RequestBroadcastTx>): _134.RequestBroadcastTx;
            };
            ResponsePing: {
                encode(_: _134.ResponsePing, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _134.ResponsePing;
                fromPartial(_: Partial<_134.ResponsePing>): _134.ResponsePing;
            };
            ResponseBroadcastTx: {
                encode(message: _134.ResponseBroadcastTx, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _134.ResponseBroadcastTx;
                fromPartial(object: Partial<_134.ResponseBroadcastTx>): _134.ResponseBroadcastTx;
            };
        };
    }
    const state: {
        ABCIResponses: {
            encode(message: _135.ABCIResponses, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _135.ABCIResponses;
            fromPartial(object: Partial<_135.ABCIResponses>): _135.ABCIResponses;
        };
        ValidatorsInfo: {
            encode(message: _135.ValidatorsInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _135.ValidatorsInfo;
            fromPartial(object: Partial<_135.ValidatorsInfo>): _135.ValidatorsInfo;
        };
        ConsensusParamsInfo: {
            encode(message: _135.ConsensusParamsInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _135.ConsensusParamsInfo;
            fromPartial(object: Partial<_135.ConsensusParamsInfo>): _135.ConsensusParamsInfo;
        };
        ABCIResponsesInfo: {
            encode(message: _135.ABCIResponsesInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _135.ABCIResponsesInfo;
            fromPartial(object: Partial<_135.ABCIResponsesInfo>): _135.ABCIResponsesInfo;
        };
        Version: {
            encode(message: _135.Version, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _135.Version;
            fromPartial(object: Partial<_135.Version>): _135.Version;
        };
        State: {
            encode(message: _135.State, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _135.State;
            fromPartial(object: Partial<_135.State>): _135.State;
        };
    };
    const statesync: {
        Message: {
            encode(message: _136.Message, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _136.Message;
            fromPartial(object: Partial<_136.Message>): _136.Message;
        };
        SnapshotsRequest: {
            encode(_: _136.SnapshotsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(_: any): _136.SnapshotsRequest;
            fromPartial(_: Partial<_136.SnapshotsRequest>): _136.SnapshotsRequest;
        };
        SnapshotsResponse: {
            encode(message: _136.SnapshotsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _136.SnapshotsResponse;
            fromPartial(object: Partial<_136.SnapshotsResponse>): _136.SnapshotsResponse;
        };
        ChunkRequest: {
            encode(message: _136.ChunkRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _136.ChunkRequest;
            fromPartial(object: Partial<_136.ChunkRequest>): _136.ChunkRequest;
        };
        ChunkResponse: {
            encode(message: _136.ChunkResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _136.ChunkResponse;
            fromPartial(object: Partial<_136.ChunkResponse>): _136.ChunkResponse;
        };
    };
    const store: {
        BlockStoreState: {
            encode(message: _137.BlockStoreState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _137.BlockStoreState;
            fromPartial(object: Partial<_137.BlockStoreState>): _137.BlockStoreState;
        };
    };
    const types: {
        ValidatorSet: {
            encode(message: _144.ValidatorSet, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _144.ValidatorSet;
            fromPartial(object: Partial<_144.ValidatorSet>): _144.ValidatorSet;
        };
        Validator: {
            encode(message: _144.Validator, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _144.Validator;
            fromPartial(object: Partial<_144.Validator>): _144.Validator;
        };
        SimpleValidator: {
            encode(message: _144.SimpleValidator, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _144.SimpleValidator;
            fromPartial(object: Partial<_144.SimpleValidator>): _144.SimpleValidator;
        };
        blockIDFlagFromJSON(object: any): _143.BlockIDFlag;
        blockIDFlagToJSON(object: _143.BlockIDFlag): string;
        signedMsgTypeFromJSON(object: any): _143.SignedMsgType;
        signedMsgTypeToJSON(object: _143.SignedMsgType): string;
        BlockIDFlag: typeof _143.BlockIDFlag;
        BlockIDFlagSDKType: typeof _143.BlockIDFlag;
        SignedMsgType: typeof _143.SignedMsgType;
        SignedMsgTypeSDKType: typeof _143.SignedMsgType;
        PartSetHeader: {
            encode(message: _143.PartSetHeader, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _143.PartSetHeader;
            fromPartial(object: Partial<_143.PartSetHeader>): _143.PartSetHeader;
        };
        Part: {
            encode(message: _143.Part, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _143.Part;
            fromPartial(object: Partial<_143.Part>): _143.Part;
        };
        BlockID: {
            encode(message: _143.BlockID, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _143.BlockID;
            fromPartial(object: Partial<_143.BlockID>): _143.BlockID;
        };
        Header: {
            encode(message: _143.Header, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _143.Header;
            fromPartial(object: Partial<_143.Header>): _143.Header;
        };
        Data: {
            encode(message: _143.Data, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _143.Data;
            fromPartial(object: Partial<_143.Data>): _143.Data;
        };
        Vote: {
            encode(message: _143.Vote, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _143.Vote;
            fromPartial(object: Partial<_143.Vote>): _143.Vote;
        };
        Commit: {
            encode(message: _143.Commit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _143.Commit;
            fromPartial(object: Partial<_143.Commit>): _143.Commit;
        };
        CommitSig: {
            encode(message: _143.CommitSig, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _143.CommitSig;
            fromPartial(object: Partial<_143.CommitSig>): _143.CommitSig;
        };
        Proposal: {
            encode(message: _143.Proposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _143.Proposal;
            fromPartial(object: Partial<_143.Proposal>): _143.Proposal;
        };
        SignedHeader: {
            encode(message: _143.SignedHeader, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _143.SignedHeader;
            fromPartial(object: Partial<_143.SignedHeader>): _143.SignedHeader;
        };
        LightBlock: {
            encode(message: _143.LightBlock, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _143.LightBlock;
            fromPartial(object: Partial<_143.LightBlock>): _143.LightBlock;
        };
        BlockMeta: {
            encode(message: _143.BlockMeta, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _143.BlockMeta;
            fromPartial(object: Partial<_143.BlockMeta>): _143.BlockMeta;
        };
        TxProof: {
            encode(message: _143.TxProof, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _143.TxProof;
            fromPartial(object: Partial<_143.TxProof>): _143.TxProof;
        };
        ConsensusParams: {
            encode(message: _142.ConsensusParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _142.ConsensusParams;
            fromPartial(object: Partial<_142.ConsensusParams>): _142.ConsensusParams;
        };
        BlockParams: {
            encode(message: _142.BlockParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _142.BlockParams;
            fromPartial(object: Partial<_142.BlockParams>): _142.BlockParams;
        };
        EvidenceParams: {
            encode(message: _142.EvidenceParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _142.EvidenceParams;
            fromPartial(object: Partial<_142.EvidenceParams>): _142.EvidenceParams;
        };
        ValidatorParams: {
            encode(message: _142.ValidatorParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _142.ValidatorParams;
            fromPartial(object: Partial<_142.ValidatorParams>): _142.ValidatorParams;
        };
        VersionParams: {
            encode(message: _142.VersionParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _142.VersionParams;
            fromPartial(object: Partial<_142.VersionParams>): _142.VersionParams;
        };
        HashedParams: {
            encode(message: _142.HashedParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _142.HashedParams;
            fromPartial(object: Partial<_142.HashedParams>): _142.HashedParams;
        };
        Evidence: {
            encode(message: _141.Evidence, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _141.Evidence;
            fromPartial(object: Partial<_141.Evidence>): _141.Evidence;
        };
        DuplicateVoteEvidence: {
            encode(message: _141.DuplicateVoteEvidence, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _141.DuplicateVoteEvidence;
            fromPartial(object: Partial<_141.DuplicateVoteEvidence>): _141.DuplicateVoteEvidence;
        };
        LightClientAttackEvidence: {
            encode(message: _141.LightClientAttackEvidence, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _141.LightClientAttackEvidence;
            fromPartial(object: Partial<_141.LightClientAttackEvidence>): _141.LightClientAttackEvidence;
        };
        EvidenceList: {
            encode(message: _141.EvidenceList, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _141.EvidenceList;
            fromPartial(object: Partial<_141.EvidenceList>): _141.EvidenceList;
        };
        EventDataRoundState: {
            encode(message: _140.EventDataRoundState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _140.EventDataRoundState;
            fromPartial(object: Partial<_140.EventDataRoundState>): _140.EventDataRoundState;
        };
        CanonicalBlockID: {
            encode(message: _139.CanonicalBlockID, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _139.CanonicalBlockID;
            fromPartial(object: Partial<_139.CanonicalBlockID>): _139.CanonicalBlockID;
        };
        CanonicalPartSetHeader: {
            encode(message: _139.CanonicalPartSetHeader, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _139.CanonicalPartSetHeader;
            fromPartial(object: Partial<_139.CanonicalPartSetHeader>): _139.CanonicalPartSetHeader;
        };
        CanonicalProposal: {
            encode(message: _139.CanonicalProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _139.CanonicalProposal;
            fromPartial(object: Partial<_139.CanonicalProposal>): _139.CanonicalProposal;
        };
        CanonicalVote: {
            encode(message: _139.CanonicalVote, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _139.CanonicalVote;
            fromPartial(object: Partial<_139.CanonicalVote>): _139.CanonicalVote;
        };
        Block: {
            encode(message: _138.Block, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _138.Block;
            fromPartial(object: Partial<_138.Block>): _138.Block;
        };
    };
    const version: {
        App: {
            encode(message: _145.App, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _145.App;
            fromPartial(object: Partial<_145.App>): _145.App;
        };
        Consensus: {
            encode(message: _145.Consensus, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _145.Consensus;
            fromPartial(object: Partial<_145.Consensus>): _145.Consensus;
        };
    };
}
