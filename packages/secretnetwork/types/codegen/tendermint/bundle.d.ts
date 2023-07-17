import * as _135 from "./abci/types";
import * as _136 from "./blockchain/types";
import * as _137 from "./consensus/types";
import * as _138 from "./consensus/wal";
import * as _139 from "./crypto/keys";
import * as _140 from "./crypto/proof";
import * as _141 from "./libs/bits/types";
import * as _142 from "./mempool/types";
import * as _143 from "./p2p/conn";
import * as _144 from "./p2p/pex";
import * as _145 from "./p2p/types";
import * as _146 from "./privval/types";
import * as _147 from "./rpc/grpc/types";
import * as _148 from "./state/types";
import * as _149 from "./statesync/types";
import * as _150 from "./store/types";
import * as _151 from "./types/block";
import * as _152 from "./types/canonical";
import * as _153 from "./types/events";
import * as _154 from "./types/evidence";
import * as _155 from "./types/params";
import * as _156 from "./types/types";
import * as _157 from "./types/validator";
import * as _158 from "./version/types";
export declare namespace tendermint {
    const abci: {
        checkTxTypeFromJSON(object: any): _135.CheckTxType;
        checkTxTypeToJSON(object: _135.CheckTxType): string;
        responseOfferSnapshot_ResultFromJSON(object: any): _135.ResponseOfferSnapshot_Result;
        responseOfferSnapshot_ResultToJSON(object: _135.ResponseOfferSnapshot_Result): string;
        responseApplySnapshotChunk_ResultFromJSON(object: any): _135.ResponseApplySnapshotChunk_Result;
        responseApplySnapshotChunk_ResultToJSON(object: _135.ResponseApplySnapshotChunk_Result): string;
        evidenceTypeFromJSON(object: any): _135.EvidenceType;
        evidenceTypeToJSON(object: _135.EvidenceType): string;
        CheckTxType: typeof _135.CheckTxType;
        CheckTxTypeSDKType: typeof _135.CheckTxType;
        ResponseOfferSnapshot_Result: typeof _135.ResponseOfferSnapshot_Result;
        ResponseOfferSnapshot_ResultSDKType: typeof _135.ResponseOfferSnapshot_Result;
        ResponseApplySnapshotChunk_Result: typeof _135.ResponseApplySnapshotChunk_Result;
        ResponseApplySnapshotChunk_ResultSDKType: typeof _135.ResponseApplySnapshotChunk_Result;
        EvidenceType: typeof _135.EvidenceType;
        EvidenceTypeSDKType: typeof _135.EvidenceType;
        Request: {
            encode(message: _135.Request, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _135.Request;
            fromPartial(object: Partial<_135.Request>): _135.Request;
        };
        RequestEcho: {
            encode(message: _135.RequestEcho, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _135.RequestEcho;
            fromPartial(object: Partial<_135.RequestEcho>): _135.RequestEcho;
        };
        RequestFlush: {
            encode(_: _135.RequestFlush, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(_: any): _135.RequestFlush;
            fromPartial(_: Partial<_135.RequestFlush>): _135.RequestFlush;
        };
        RequestInfo: {
            encode(message: _135.RequestInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _135.RequestInfo;
            fromPartial(object: Partial<_135.RequestInfo>): _135.RequestInfo;
        };
        RequestSetOption: {
            encode(message: _135.RequestSetOption, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _135.RequestSetOption;
            fromPartial(object: Partial<_135.RequestSetOption>): _135.RequestSetOption;
        };
        RequestInitChain: {
            encode(message: _135.RequestInitChain, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _135.RequestInitChain;
            fromPartial(object: Partial<_135.RequestInitChain>): _135.RequestInitChain;
        };
        RequestQuery: {
            encode(message: _135.RequestQuery, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _135.RequestQuery;
            fromPartial(object: Partial<_135.RequestQuery>): _135.RequestQuery;
        };
        RequestBeginBlock: {
            encode(message: _135.RequestBeginBlock, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _135.RequestBeginBlock;
            fromPartial(object: Partial<_135.RequestBeginBlock>): _135.RequestBeginBlock;
        };
        RequestCheckTx: {
            encode(message: _135.RequestCheckTx, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _135.RequestCheckTx;
            fromPartial(object: Partial<_135.RequestCheckTx>): _135.RequestCheckTx;
        };
        RequestDeliverTx: {
            encode(message: _135.RequestDeliverTx, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _135.RequestDeliverTx;
            fromPartial(object: Partial<_135.RequestDeliverTx>): _135.RequestDeliverTx;
        };
        RequestEndBlock: {
            encode(message: _135.RequestEndBlock, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _135.RequestEndBlock;
            fromPartial(object: Partial<_135.RequestEndBlock>): _135.RequestEndBlock;
        };
        RequestCommit: {
            encode(_: _135.RequestCommit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(_: any): _135.RequestCommit;
            fromPartial(_: Partial<_135.RequestCommit>): _135.RequestCommit;
        };
        RequestListSnapshots: {
            encode(_: _135.RequestListSnapshots, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(_: any): _135.RequestListSnapshots;
            fromPartial(_: Partial<_135.RequestListSnapshots>): _135.RequestListSnapshots;
        };
        RequestOfferSnapshot: {
            encode(message: _135.RequestOfferSnapshot, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _135.RequestOfferSnapshot;
            fromPartial(object: Partial<_135.RequestOfferSnapshot>): _135.RequestOfferSnapshot;
        };
        RequestLoadSnapshotChunk: {
            encode(message: _135.RequestLoadSnapshotChunk, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _135.RequestLoadSnapshotChunk;
            fromPartial(object: Partial<_135.RequestLoadSnapshotChunk>): _135.RequestLoadSnapshotChunk;
        };
        RequestApplySnapshotChunk: {
            encode(message: _135.RequestApplySnapshotChunk, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _135.RequestApplySnapshotChunk;
            fromPartial(object: Partial<_135.RequestApplySnapshotChunk>): _135.RequestApplySnapshotChunk;
        };
        Response: {
            encode(message: _135.Response, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _135.Response;
            fromPartial(object: Partial<_135.Response>): _135.Response;
        };
        ResponseException: {
            encode(message: _135.ResponseException, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _135.ResponseException;
            fromPartial(object: Partial<_135.ResponseException>): _135.ResponseException;
        };
        ResponseEcho: {
            encode(message: _135.ResponseEcho, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _135.ResponseEcho;
            fromPartial(object: Partial<_135.ResponseEcho>): _135.ResponseEcho;
        };
        ResponseFlush: {
            encode(_: _135.ResponseFlush, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(_: any): _135.ResponseFlush;
            fromPartial(_: Partial<_135.ResponseFlush>): _135.ResponseFlush;
        };
        ResponseInfo: {
            encode(message: _135.ResponseInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _135.ResponseInfo;
            fromPartial(object: Partial<_135.ResponseInfo>): _135.ResponseInfo;
        };
        ResponseSetOption: {
            encode(message: _135.ResponseSetOption, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _135.ResponseSetOption;
            fromPartial(object: Partial<_135.ResponseSetOption>): _135.ResponseSetOption;
        };
        ResponseInitChain: {
            encode(message: _135.ResponseInitChain, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _135.ResponseInitChain;
            fromPartial(object: Partial<_135.ResponseInitChain>): _135.ResponseInitChain;
        };
        ResponseQuery: {
            encode(message: _135.ResponseQuery, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _135.ResponseQuery;
            fromPartial(object: Partial<_135.ResponseQuery>): _135.ResponseQuery;
        };
        ResponseBeginBlock: {
            encode(message: _135.ResponseBeginBlock, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _135.ResponseBeginBlock;
            fromPartial(object: Partial<_135.ResponseBeginBlock>): _135.ResponseBeginBlock;
        };
        ResponseCheckTx: {
            encode(message: _135.ResponseCheckTx, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _135.ResponseCheckTx;
            fromPartial(object: Partial<_135.ResponseCheckTx>): _135.ResponseCheckTx;
        };
        ResponseDeliverTx: {
            encode(message: _135.ResponseDeliverTx, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _135.ResponseDeliverTx;
            fromPartial(object: Partial<_135.ResponseDeliverTx>): _135.ResponseDeliverTx;
        };
        ResponseEndBlock: {
            encode(message: _135.ResponseEndBlock, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _135.ResponseEndBlock;
            fromPartial(object: Partial<_135.ResponseEndBlock>): _135.ResponseEndBlock;
        };
        ResponseCommit: {
            encode(message: _135.ResponseCommit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _135.ResponseCommit;
            fromPartial(object: Partial<_135.ResponseCommit>): _135.ResponseCommit;
        };
        ResponseListSnapshots: {
            encode(message: _135.ResponseListSnapshots, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _135.ResponseListSnapshots;
            fromPartial(object: Partial<_135.ResponseListSnapshots>): _135.ResponseListSnapshots;
        };
        ResponseOfferSnapshot: {
            encode(message: _135.ResponseOfferSnapshot, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _135.ResponseOfferSnapshot;
            fromPartial(object: Partial<_135.ResponseOfferSnapshot>): _135.ResponseOfferSnapshot;
        };
        ResponseLoadSnapshotChunk: {
            encode(message: _135.ResponseLoadSnapshotChunk, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _135.ResponseLoadSnapshotChunk;
            fromPartial(object: Partial<_135.ResponseLoadSnapshotChunk>): _135.ResponseLoadSnapshotChunk;
        };
        ResponseApplySnapshotChunk: {
            encode(message: _135.ResponseApplySnapshotChunk, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _135.ResponseApplySnapshotChunk;
            fromPartial(object: Partial<_135.ResponseApplySnapshotChunk>): _135.ResponseApplySnapshotChunk;
        };
        ConsensusParams: {
            encode(message: _135.ConsensusParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _135.ConsensusParams;
            fromPartial(object: Partial<_135.ConsensusParams>): _135.ConsensusParams;
        };
        BlockParams: {
            encode(message: _135.BlockParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _135.BlockParams;
            fromPartial(object: Partial<_135.BlockParams>): _135.BlockParams;
        };
        LastCommitInfo: {
            encode(message: _135.LastCommitInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _135.LastCommitInfo;
            fromPartial(object: Partial<_135.LastCommitInfo>): _135.LastCommitInfo;
        };
        Event: {
            encode(message: _135.Event, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _135.Event;
            fromPartial(object: Partial<_135.Event>): _135.Event;
        };
        EventAttribute: {
            encode(message: _135.EventAttribute, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _135.EventAttribute;
            fromPartial(object: Partial<_135.EventAttribute>): _135.EventAttribute;
        };
        TxResult: {
            encode(message: _135.TxResult, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _135.TxResult;
            fromPartial(object: Partial<_135.TxResult>): _135.TxResult;
        };
        Validator: {
            encode(message: _135.Validator, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _135.Validator;
            fromPartial(object: Partial<_135.Validator>): _135.Validator;
        };
        ValidatorUpdate: {
            encode(message: _135.ValidatorUpdate, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _135.ValidatorUpdate;
            fromPartial(object: Partial<_135.ValidatorUpdate>): _135.ValidatorUpdate;
        };
        VoteInfo: {
            encode(message: _135.VoteInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _135.VoteInfo;
            fromPartial(object: Partial<_135.VoteInfo>): _135.VoteInfo;
        };
        Evidence: {
            encode(message: _135.Evidence, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _135.Evidence;
            fromPartial(object: Partial<_135.Evidence>): _135.Evidence;
        };
        Snapshot: {
            encode(message: _135.Snapshot, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _135.Snapshot;
            fromPartial(object: Partial<_135.Snapshot>): _135.Snapshot;
        };
    };
    const blockchain: {
        BlockRequest: {
            encode(message: _136.BlockRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _136.BlockRequest;
            fromPartial(object: Partial<_136.BlockRequest>): _136.BlockRequest;
        };
        NoBlockResponse: {
            encode(message: _136.NoBlockResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _136.NoBlockResponse;
            fromPartial(object: Partial<_136.NoBlockResponse>): _136.NoBlockResponse;
        };
        BlockResponse: {
            encode(message: _136.BlockResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _136.BlockResponse;
            fromPartial(object: Partial<_136.BlockResponse>): _136.BlockResponse;
        };
        StatusRequest: {
            encode(_: _136.StatusRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(_: any): _136.StatusRequest;
            fromPartial(_: Partial<_136.StatusRequest>): _136.StatusRequest;
        };
        StatusResponse: {
            encode(message: _136.StatusResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _136.StatusResponse;
            fromPartial(object: Partial<_136.StatusResponse>): _136.StatusResponse;
        };
        Message: {
            encode(message: _136.Message, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _136.Message;
            fromPartial(object: Partial<_136.Message>): _136.Message;
        };
    };
    const consensus: {
        MsgInfo: {
            encode(message: _138.MsgInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _138.MsgInfo;
            fromPartial(object: Partial<_138.MsgInfo>): _138.MsgInfo;
        };
        TimeoutInfo: {
            encode(message: _138.TimeoutInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _138.TimeoutInfo;
            fromPartial(object: Partial<_138.TimeoutInfo>): _138.TimeoutInfo;
        };
        EndHeight: {
            encode(message: _138.EndHeight, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _138.EndHeight;
            fromPartial(object: Partial<_138.EndHeight>): _138.EndHeight;
        };
        WALMessage: {
            encode(message: _138.WALMessage, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _138.WALMessage;
            fromPartial(object: Partial<_138.WALMessage>): _138.WALMessage;
        };
        TimedWALMessage: {
            encode(message: _138.TimedWALMessage, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _138.TimedWALMessage;
            fromPartial(object: Partial<_138.TimedWALMessage>): _138.TimedWALMessage;
        };
        NewRoundStep: {
            encode(message: _137.NewRoundStep, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _137.NewRoundStep;
            fromPartial(object: Partial<_137.NewRoundStep>): _137.NewRoundStep;
        };
        NewValidBlock: {
            encode(message: _137.NewValidBlock, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _137.NewValidBlock;
            fromPartial(object: Partial<_137.NewValidBlock>): _137.NewValidBlock;
        };
        Proposal: {
            encode(message: _137.Proposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _137.Proposal;
            fromPartial(object: Partial<_137.Proposal>): _137.Proposal;
        };
        ProposalPOL: {
            encode(message: _137.ProposalPOL, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _137.ProposalPOL;
            fromPartial(object: Partial<_137.ProposalPOL>): _137.ProposalPOL;
        };
        BlockPart: {
            encode(message: _137.BlockPart, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _137.BlockPart;
            fromPartial(object: Partial<_137.BlockPart>): _137.BlockPart;
        };
        Vote: {
            encode(message: _137.Vote, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _137.Vote;
            fromPartial(object: Partial<_137.Vote>): _137.Vote;
        };
        HasVote: {
            encode(message: _137.HasVote, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _137.HasVote;
            fromPartial(object: Partial<_137.HasVote>): _137.HasVote;
        };
        VoteSetMaj23: {
            encode(message: _137.VoteSetMaj23, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _137.VoteSetMaj23;
            fromPartial(object: Partial<_137.VoteSetMaj23>): _137.VoteSetMaj23;
        };
        VoteSetBits: {
            encode(message: _137.VoteSetBits, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _137.VoteSetBits;
            fromPartial(object: Partial<_137.VoteSetBits>): _137.VoteSetBits;
        };
        Message: {
            encode(message: _137.Message, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _137.Message;
            fromPartial(object: Partial<_137.Message>): _137.Message;
        };
    };
    const crypto: {
        Proof: {
            encode(message: _140.Proof, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _140.Proof;
            fromPartial(object: Partial<_140.Proof>): _140.Proof;
        };
        ValueOp: {
            encode(message: _140.ValueOp, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _140.ValueOp;
            fromPartial(object: Partial<_140.ValueOp>): _140.ValueOp;
        };
        DominoOp: {
            encode(message: _140.DominoOp, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _140.DominoOp;
            fromPartial(object: Partial<_140.DominoOp>): _140.DominoOp;
        };
        ProofOp: {
            encode(message: _140.ProofOp, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _140.ProofOp;
            fromPartial(object: Partial<_140.ProofOp>): _140.ProofOp;
        };
        ProofOps: {
            encode(message: _140.ProofOps, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _140.ProofOps;
            fromPartial(object: Partial<_140.ProofOps>): _140.ProofOps;
        };
        PublicKey: {
            encode(message: _139.PublicKey, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _139.PublicKey;
            fromPartial(object: Partial<_139.PublicKey>): _139.PublicKey;
        };
    };
    namespace libs {
        const bits: {
            BitArray: {
                encode(message: _141.BitArray, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _141.BitArray;
                fromPartial(object: Partial<_141.BitArray>): _141.BitArray;
            };
        };
    }
    const mempool: {
        Txs: {
            encode(message: _142.Txs, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _142.Txs;
            fromPartial(object: Partial<_142.Txs>): _142.Txs;
        };
        Message: {
            encode(message: _142.Message, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _142.Message;
            fromPartial(object: Partial<_142.Message>): _142.Message;
        };
    };
    const p2p: {
        NetAddress: {
            encode(message: _145.NetAddress, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _145.NetAddress;
            fromPartial(object: Partial<_145.NetAddress>): _145.NetAddress;
        };
        ProtocolVersion: {
            encode(message: _145.ProtocolVersion, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _145.ProtocolVersion;
            fromPartial(object: Partial<_145.ProtocolVersion>): _145.ProtocolVersion;
        };
        DefaultNodeInfo: {
            encode(message: _145.DefaultNodeInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _145.DefaultNodeInfo;
            fromPartial(object: Partial<_145.DefaultNodeInfo>): _145.DefaultNodeInfo;
        };
        DefaultNodeInfoOther: {
            encode(message: _145.DefaultNodeInfoOther, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _145.DefaultNodeInfoOther;
            fromPartial(object: Partial<_145.DefaultNodeInfoOther>): _145.DefaultNodeInfoOther;
        };
        PexRequest: {
            encode(_: _144.PexRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(_: any): _144.PexRequest;
            fromPartial(_: Partial<_144.PexRequest>): _144.PexRequest;
        };
        PexAddrs: {
            encode(message: _144.PexAddrs, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _144.PexAddrs;
            fromPartial(object: Partial<_144.PexAddrs>): _144.PexAddrs;
        };
        Message: {
            encode(message: _144.Message, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _144.Message;
            fromPartial(object: Partial<_144.Message>): _144.Message;
        };
        PacketPing: {
            encode(_: _143.PacketPing, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(_: any): _143.PacketPing;
            fromPartial(_: Partial<_143.PacketPing>): _143.PacketPing;
        };
        PacketPong: {
            encode(_: _143.PacketPong, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(_: any): _143.PacketPong;
            fromPartial(_: Partial<_143.PacketPong>): _143.PacketPong;
        };
        PacketMsg: {
            encode(message: _143.PacketMsg, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _143.PacketMsg;
            fromPartial(object: Partial<_143.PacketMsg>): _143.PacketMsg;
        };
        Packet: {
            encode(message: _143.Packet, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _143.Packet;
            fromPartial(object: Partial<_143.Packet>): _143.Packet;
        };
        AuthSigMessage: {
            encode(message: _143.AuthSigMessage, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _143.AuthSigMessage;
            fromPartial(object: Partial<_143.AuthSigMessage>): _143.AuthSigMessage;
        };
    };
    const privval: {
        errorsFromJSON(object: any): _146.Errors;
        errorsToJSON(object: _146.Errors): string;
        Errors: typeof _146.Errors;
        ErrorsSDKType: typeof _146.Errors;
        RemoteSignerError: {
            encode(message: _146.RemoteSignerError, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _146.RemoteSignerError;
            fromPartial(object: Partial<_146.RemoteSignerError>): _146.RemoteSignerError;
        };
        PubKeyRequest: {
            encode(message: _146.PubKeyRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _146.PubKeyRequest;
            fromPartial(object: Partial<_146.PubKeyRequest>): _146.PubKeyRequest;
        };
        PubKeyResponse: {
            encode(message: _146.PubKeyResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _146.PubKeyResponse;
            fromPartial(object: Partial<_146.PubKeyResponse>): _146.PubKeyResponse;
        };
        SignVoteRequest: {
            encode(message: _146.SignVoteRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _146.SignVoteRequest;
            fromPartial(object: Partial<_146.SignVoteRequest>): _146.SignVoteRequest;
        };
        SignedVoteResponse: {
            encode(message: _146.SignedVoteResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _146.SignedVoteResponse;
            fromPartial(object: Partial<_146.SignedVoteResponse>): _146.SignedVoteResponse;
        };
        SignProposalRequest: {
            encode(message: _146.SignProposalRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _146.SignProposalRequest;
            fromPartial(object: Partial<_146.SignProposalRequest>): _146.SignProposalRequest;
        };
        SignedProposalResponse: {
            encode(message: _146.SignedProposalResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _146.SignedProposalResponse;
            fromPartial(object: Partial<_146.SignedProposalResponse>): _146.SignedProposalResponse;
        };
        PingRequest: {
            encode(_: _146.PingRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(_: any): _146.PingRequest;
            fromPartial(_: Partial<_146.PingRequest>): _146.PingRequest;
        };
        PingResponse: {
            encode(_: _146.PingResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(_: any): _146.PingResponse;
            fromPartial(_: Partial<_146.PingResponse>): _146.PingResponse;
        };
        Message: {
            encode(message: _146.Message, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _146.Message;
            fromPartial(object: Partial<_146.Message>): _146.Message;
        };
    };
    namespace rpc {
        const grpc: {
            RequestPing: {
                encode(_: _147.RequestPing, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _147.RequestPing;
                fromPartial(_: Partial<_147.RequestPing>): _147.RequestPing;
            };
            RequestBroadcastTx: {
                encode(message: _147.RequestBroadcastTx, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _147.RequestBroadcastTx;
                fromPartial(object: Partial<_147.RequestBroadcastTx>): _147.RequestBroadcastTx;
            };
            ResponsePing: {
                encode(_: _147.ResponsePing, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _147.ResponsePing;
                fromPartial(_: Partial<_147.ResponsePing>): _147.ResponsePing;
            };
            ResponseBroadcastTx: {
                encode(message: _147.ResponseBroadcastTx, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _147.ResponseBroadcastTx;
                fromPartial(object: Partial<_147.ResponseBroadcastTx>): _147.ResponseBroadcastTx;
            };
        };
    }
    const state: {
        ABCIResponses: {
            encode(message: _148.ABCIResponses, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _148.ABCIResponses;
            fromPartial(object: Partial<_148.ABCIResponses>): _148.ABCIResponses;
        };
        ValidatorsInfo: {
            encode(message: _148.ValidatorsInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _148.ValidatorsInfo;
            fromPartial(object: Partial<_148.ValidatorsInfo>): _148.ValidatorsInfo;
        };
        ConsensusParamsInfo: {
            encode(message: _148.ConsensusParamsInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _148.ConsensusParamsInfo;
            fromPartial(object: Partial<_148.ConsensusParamsInfo>): _148.ConsensusParamsInfo;
        };
        Version: {
            encode(message: _148.Version, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _148.Version;
            fromPartial(object: Partial<_148.Version>): _148.Version;
        };
        State: {
            encode(message: _148.State, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _148.State;
            fromPartial(object: Partial<_148.State>): _148.State;
        };
    };
    const statesync: {
        Message: {
            encode(message: _149.Message, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _149.Message;
            fromPartial(object: Partial<_149.Message>): _149.Message;
        };
        SnapshotsRequest: {
            encode(_: _149.SnapshotsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(_: any): _149.SnapshotsRequest;
            fromPartial(_: Partial<_149.SnapshotsRequest>): _149.SnapshotsRequest;
        };
        SnapshotsResponse: {
            encode(message: _149.SnapshotsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _149.SnapshotsResponse;
            fromPartial(object: Partial<_149.SnapshotsResponse>): _149.SnapshotsResponse;
        };
        ChunkRequest: {
            encode(message: _149.ChunkRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _149.ChunkRequest;
            fromPartial(object: Partial<_149.ChunkRequest>): _149.ChunkRequest;
        };
        ChunkResponse: {
            encode(message: _149.ChunkResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _149.ChunkResponse;
            fromPartial(object: Partial<_149.ChunkResponse>): _149.ChunkResponse;
        };
    };
    const store: {
        BlockStoreState: {
            encode(message: _150.BlockStoreState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _150.BlockStoreState;
            fromPartial(object: Partial<_150.BlockStoreState>): _150.BlockStoreState;
        };
    };
    const types: {
        ValidatorSet: {
            encode(message: _157.ValidatorSet, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _157.ValidatorSet;
            fromPartial(object: Partial<_157.ValidatorSet>): _157.ValidatorSet;
        };
        Validator: {
            encode(message: _157.Validator, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _157.Validator;
            fromPartial(object: Partial<_157.Validator>): _157.Validator;
        };
        SimpleValidator: {
            encode(message: _157.SimpleValidator, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _157.SimpleValidator;
            fromPartial(object: Partial<_157.SimpleValidator>): _157.SimpleValidator;
        };
        blockIDFlagFromJSON(object: any): _156.BlockIDFlag;
        blockIDFlagToJSON(object: _156.BlockIDFlag): string;
        signedMsgTypeFromJSON(object: any): _156.SignedMsgType;
        signedMsgTypeToJSON(object: _156.SignedMsgType): string;
        BlockIDFlag: typeof _156.BlockIDFlag;
        BlockIDFlagSDKType: typeof _156.BlockIDFlag;
        SignedMsgType: typeof _156.SignedMsgType;
        SignedMsgTypeSDKType: typeof _156.SignedMsgType;
        PartSetHeader: {
            encode(message: _156.PartSetHeader, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _156.PartSetHeader;
            fromPartial(object: Partial<_156.PartSetHeader>): _156.PartSetHeader;
        };
        Part: {
            encode(message: _156.Part, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _156.Part;
            fromPartial(object: Partial<_156.Part>): _156.Part;
        };
        BlockID: {
            encode(message: _156.BlockID, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _156.BlockID;
            fromPartial(object: Partial<_156.BlockID>): _156.BlockID;
        };
        Header: {
            encode(message: _156.Header, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _156.Header;
            fromPartial(object: Partial<_156.Header>): _156.Header;
        };
        EncryptedRandom: {
            encode(message: _156.EncryptedRandom, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _156.EncryptedRandom;
            fromPartial(object: Partial<_156.EncryptedRandom>): _156.EncryptedRandom;
        };
        Data: {
            encode(message: _156.Data, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _156.Data;
            fromPartial(object: Partial<_156.Data>): _156.Data;
        };
        Vote: {
            encode(message: _156.Vote, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _156.Vote;
            fromPartial(object: Partial<_156.Vote>): _156.Vote;
        };
        Commit: {
            encode(message: _156.Commit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _156.Commit;
            fromPartial(object: Partial<_156.Commit>): _156.Commit;
        };
        CommitSig: {
            encode(message: _156.CommitSig, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _156.CommitSig;
            fromPartial(object: Partial<_156.CommitSig>): _156.CommitSig;
        };
        Proposal: {
            encode(message: _156.Proposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _156.Proposal;
            fromPartial(object: Partial<_156.Proposal>): _156.Proposal;
        };
        SignedHeader: {
            encode(message: _156.SignedHeader, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _156.SignedHeader;
            fromPartial(object: Partial<_156.SignedHeader>): _156.SignedHeader;
        };
        LightBlock: {
            encode(message: _156.LightBlock, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _156.LightBlock;
            fromPartial(object: Partial<_156.LightBlock>): _156.LightBlock;
        };
        BlockMeta: {
            encode(message: _156.BlockMeta, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _156.BlockMeta;
            fromPartial(object: Partial<_156.BlockMeta>): _156.BlockMeta;
        };
        TxProof: {
            encode(message: _156.TxProof, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _156.TxProof;
            fromPartial(object: Partial<_156.TxProof>): _156.TxProof;
        };
        ConsensusParams: {
            encode(message: _155.ConsensusParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _155.ConsensusParams;
            fromPartial(object: Partial<_155.ConsensusParams>): _155.ConsensusParams;
        };
        BlockParams: {
            encode(message: _155.BlockParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _155.BlockParams;
            fromPartial(object: Partial<_155.BlockParams>): _155.BlockParams;
        };
        EvidenceParams: {
            encode(message: _155.EvidenceParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _155.EvidenceParams;
            fromPartial(object: Partial<_155.EvidenceParams>): _155.EvidenceParams;
        };
        ValidatorParams: {
            encode(message: _155.ValidatorParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _155.ValidatorParams;
            fromPartial(object: Partial<_155.ValidatorParams>): _155.ValidatorParams;
        };
        VersionParams: {
            encode(message: _155.VersionParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _155.VersionParams;
            fromPartial(object: Partial<_155.VersionParams>): _155.VersionParams;
        };
        HashedParams: {
            encode(message: _155.HashedParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _155.HashedParams;
            fromPartial(object: Partial<_155.HashedParams>): _155.HashedParams;
        };
        Evidence: {
            encode(message: _154.Evidence, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _154.Evidence;
            fromPartial(object: Partial<_154.Evidence>): _154.Evidence;
        };
        DuplicateVoteEvidence: {
            encode(message: _154.DuplicateVoteEvidence, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _154.DuplicateVoteEvidence;
            fromPartial(object: Partial<_154.DuplicateVoteEvidence>): _154.DuplicateVoteEvidence;
        };
        LightClientAttackEvidence: {
            encode(message: _154.LightClientAttackEvidence, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _154.LightClientAttackEvidence;
            fromPartial(object: Partial<_154.LightClientAttackEvidence>): _154.LightClientAttackEvidence;
        };
        EvidenceList: {
            encode(message: _154.EvidenceList, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _154.EvidenceList;
            fromPartial(object: Partial<_154.EvidenceList>): _154.EvidenceList;
        };
        EventDataRoundState: {
            encode(message: _153.EventDataRoundState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _153.EventDataRoundState;
            fromPartial(object: Partial<_153.EventDataRoundState>): _153.EventDataRoundState;
        };
        CanonicalBlockID: {
            encode(message: _152.CanonicalBlockID, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _152.CanonicalBlockID;
            fromPartial(object: Partial<_152.CanonicalBlockID>): _152.CanonicalBlockID;
        };
        CanonicalPartSetHeader: {
            encode(message: _152.CanonicalPartSetHeader, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _152.CanonicalPartSetHeader;
            fromPartial(object: Partial<_152.CanonicalPartSetHeader>): _152.CanonicalPartSetHeader;
        };
        CanonicalProposal: {
            encode(message: _152.CanonicalProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _152.CanonicalProposal;
            fromPartial(object: Partial<_152.CanonicalProposal>): _152.CanonicalProposal;
        };
        CanonicalVote: {
            encode(message: _152.CanonicalVote, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _152.CanonicalVote;
            fromPartial(object: Partial<_152.CanonicalVote>): _152.CanonicalVote;
        };
        Block: {
            encode(message: _151.Block, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _151.Block;
            fromPartial(object: Partial<_151.Block>): _151.Block;
        };
    };
    const version: {
        App: {
            encode(message: _158.App, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _158.App;
            fromPartial(object: Partial<_158.App>): _158.App;
        };
        Consensus: {
            encode(message: _158.Consensus, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _158.Consensus;
            fromPartial(object: Partial<_158.Consensus>): _158.Consensus;
        };
    };
}
