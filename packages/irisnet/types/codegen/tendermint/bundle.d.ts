import * as _103 from "./abci/types";
import * as _104 from "./crypto/keys";
import * as _105 from "./crypto/proof";
import * as _106 from "./libs/bits/types";
import * as _107 from "./p2p/types";
import * as _108 from "./p2p/conn";
import * as _109 from "./p2p/pex";
import * as _110 from "./types/block";
import * as _111 from "./types/evidence";
import * as _112 from "./types/params";
import * as _113 from "./types/types";
import * as _114 from "./types/validator";
import * as _115 from "./types/canonical";
import * as _116 from "./types/events";
import * as _117 from "./version/types";
import * as _118 from "./blockchain/types";
import * as _119 from "./consensus/types";
import * as _120 from "./consensus/wal";
import * as _121 from "./mempool/types";
import * as _122 from "./privval/types";
import * as _123 from "./rpc/grpc/types";
import * as _124 from "./state/types";
import * as _125 from "./statesync/types";
import * as _126 from "./store/types";
export declare namespace tendermint {
    const abci: {
        checkTxTypeFromJSON(object: any): _103.CheckTxType;
        checkTxTypeToJSON(object: _103.CheckTxType): string;
        responseOfferSnapshot_ResultFromJSON(object: any): _103.ResponseOfferSnapshot_Result;
        responseOfferSnapshot_ResultToJSON(object: _103.ResponseOfferSnapshot_Result): string;
        responseApplySnapshotChunk_ResultFromJSON(object: any): _103.ResponseApplySnapshotChunk_Result;
        responseApplySnapshotChunk_ResultToJSON(object: _103.ResponseApplySnapshotChunk_Result): string;
        evidenceTypeFromJSON(object: any): _103.EvidenceType;
        evidenceTypeToJSON(object: _103.EvidenceType): string;
        CheckTxType: typeof _103.CheckTxType;
        CheckTxTypeSDKType: typeof _103.CheckTxType;
        ResponseOfferSnapshot_Result: typeof _103.ResponseOfferSnapshot_Result;
        ResponseOfferSnapshot_ResultSDKType: typeof _103.ResponseOfferSnapshot_Result;
        ResponseApplySnapshotChunk_Result: typeof _103.ResponseApplySnapshotChunk_Result;
        ResponseApplySnapshotChunk_ResultSDKType: typeof _103.ResponseApplySnapshotChunk_Result;
        EvidenceType: typeof _103.EvidenceType;
        EvidenceTypeSDKType: typeof _103.EvidenceType;
        Request: {
            encode(message: _103.Request, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _103.Request;
            fromPartial(object: Partial<_103.Request>): _103.Request;
        };
        RequestEcho: {
            encode(message: _103.RequestEcho, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _103.RequestEcho;
            fromPartial(object: Partial<_103.RequestEcho>): _103.RequestEcho;
        };
        RequestFlush: {
            encode(_: _103.RequestFlush, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(_: any): _103.RequestFlush;
            fromPartial(_: Partial<_103.RequestFlush>): _103.RequestFlush;
        };
        RequestInfo: {
            encode(message: _103.RequestInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _103.RequestInfo;
            fromPartial(object: Partial<_103.RequestInfo>): _103.RequestInfo;
        };
        RequestSetOption: {
            encode(message: _103.RequestSetOption, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _103.RequestSetOption;
            fromPartial(object: Partial<_103.RequestSetOption>): _103.RequestSetOption;
        };
        RequestInitChain: {
            encode(message: _103.RequestInitChain, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _103.RequestInitChain;
            fromPartial(object: Partial<_103.RequestInitChain>): _103.RequestInitChain;
        };
        RequestQuery: {
            encode(message: _103.RequestQuery, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _103.RequestQuery;
            fromPartial(object: Partial<_103.RequestQuery>): _103.RequestQuery;
        };
        RequestBeginBlock: {
            encode(message: _103.RequestBeginBlock, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _103.RequestBeginBlock;
            fromPartial(object: Partial<_103.RequestBeginBlock>): _103.RequestBeginBlock;
        };
        RequestCheckTx: {
            encode(message: _103.RequestCheckTx, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _103.RequestCheckTx;
            fromPartial(object: Partial<_103.RequestCheckTx>): _103.RequestCheckTx;
        };
        RequestDeliverTx: {
            encode(message: _103.RequestDeliverTx, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _103.RequestDeliverTx;
            fromPartial(object: Partial<_103.RequestDeliverTx>): _103.RequestDeliverTx;
        };
        RequestEndBlock: {
            encode(message: _103.RequestEndBlock, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _103.RequestEndBlock;
            fromPartial(object: Partial<_103.RequestEndBlock>): _103.RequestEndBlock;
        };
        RequestCommit: {
            encode(_: _103.RequestCommit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(_: any): _103.RequestCommit;
            fromPartial(_: Partial<_103.RequestCommit>): _103.RequestCommit;
        };
        RequestListSnapshots: {
            encode(_: _103.RequestListSnapshots, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(_: any): _103.RequestListSnapshots;
            fromPartial(_: Partial<_103.RequestListSnapshots>): _103.RequestListSnapshots;
        };
        RequestOfferSnapshot: {
            encode(message: _103.RequestOfferSnapshot, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _103.RequestOfferSnapshot;
            fromPartial(object: Partial<_103.RequestOfferSnapshot>): _103.RequestOfferSnapshot;
        };
        RequestLoadSnapshotChunk: {
            encode(message: _103.RequestLoadSnapshotChunk, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _103.RequestLoadSnapshotChunk;
            fromPartial(object: Partial<_103.RequestLoadSnapshotChunk>): _103.RequestLoadSnapshotChunk;
        };
        RequestApplySnapshotChunk: {
            encode(message: _103.RequestApplySnapshotChunk, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _103.RequestApplySnapshotChunk;
            fromPartial(object: Partial<_103.RequestApplySnapshotChunk>): _103.RequestApplySnapshotChunk;
        };
        Response: {
            encode(message: _103.Response, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _103.Response;
            fromPartial(object: Partial<_103.Response>): _103.Response;
        };
        ResponseException: {
            encode(message: _103.ResponseException, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _103.ResponseException;
            fromPartial(object: Partial<_103.ResponseException>): _103.ResponseException;
        };
        ResponseEcho: {
            encode(message: _103.ResponseEcho, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _103.ResponseEcho;
            fromPartial(object: Partial<_103.ResponseEcho>): _103.ResponseEcho;
        };
        ResponseFlush: {
            encode(_: _103.ResponseFlush, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(_: any): _103.ResponseFlush;
            fromPartial(_: Partial<_103.ResponseFlush>): _103.ResponseFlush;
        };
        ResponseInfo: {
            encode(message: _103.ResponseInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _103.ResponseInfo;
            fromPartial(object: Partial<_103.ResponseInfo>): _103.ResponseInfo;
        };
        ResponseSetOption: {
            encode(message: _103.ResponseSetOption, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _103.ResponseSetOption;
            fromPartial(object: Partial<_103.ResponseSetOption>): _103.ResponseSetOption;
        };
        ResponseInitChain: {
            encode(message: _103.ResponseInitChain, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _103.ResponseInitChain;
            fromPartial(object: Partial<_103.ResponseInitChain>): _103.ResponseInitChain;
        };
        ResponseQuery: {
            encode(message: _103.ResponseQuery, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _103.ResponseQuery;
            fromPartial(object: Partial<_103.ResponseQuery>): _103.ResponseQuery;
        };
        ResponseBeginBlock: {
            encode(message: _103.ResponseBeginBlock, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _103.ResponseBeginBlock;
            fromPartial(object: Partial<_103.ResponseBeginBlock>): _103.ResponseBeginBlock;
        };
        ResponseCheckTx: {
            encode(message: _103.ResponseCheckTx, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _103.ResponseCheckTx;
            fromPartial(object: Partial<_103.ResponseCheckTx>): _103.ResponseCheckTx;
        };
        ResponseDeliverTx: {
            encode(message: _103.ResponseDeliverTx, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _103.ResponseDeliverTx;
            fromPartial(object: Partial<_103.ResponseDeliverTx>): _103.ResponseDeliverTx;
        };
        ResponseEndBlock: {
            encode(message: _103.ResponseEndBlock, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _103.ResponseEndBlock;
            fromPartial(object: Partial<_103.ResponseEndBlock>): _103.ResponseEndBlock;
        };
        ResponseCommit: {
            encode(message: _103.ResponseCommit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _103.ResponseCommit;
            fromPartial(object: Partial<_103.ResponseCommit>): _103.ResponseCommit;
        };
        ResponseListSnapshots: {
            encode(message: _103.ResponseListSnapshots, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _103.ResponseListSnapshots;
            fromPartial(object: Partial<_103.ResponseListSnapshots>): _103.ResponseListSnapshots;
        };
        ResponseOfferSnapshot: {
            encode(message: _103.ResponseOfferSnapshot, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _103.ResponseOfferSnapshot;
            fromPartial(object: Partial<_103.ResponseOfferSnapshot>): _103.ResponseOfferSnapshot;
        };
        ResponseLoadSnapshotChunk: {
            encode(message: _103.ResponseLoadSnapshotChunk, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _103.ResponseLoadSnapshotChunk;
            fromPartial(object: Partial<_103.ResponseLoadSnapshotChunk>): _103.ResponseLoadSnapshotChunk;
        };
        ResponseApplySnapshotChunk: {
            encode(message: _103.ResponseApplySnapshotChunk, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _103.ResponseApplySnapshotChunk;
            fromPartial(object: Partial<_103.ResponseApplySnapshotChunk>): _103.ResponseApplySnapshotChunk;
        };
        ConsensusParams: {
            encode(message: _103.ConsensusParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _103.ConsensusParams;
            fromPartial(object: Partial<_103.ConsensusParams>): _103.ConsensusParams;
        };
        BlockParams: {
            encode(message: _103.BlockParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _103.BlockParams;
            fromPartial(object: Partial<_103.BlockParams>): _103.BlockParams;
        };
        LastCommitInfo: {
            encode(message: _103.LastCommitInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _103.LastCommitInfo;
            fromPartial(object: Partial<_103.LastCommitInfo>): _103.LastCommitInfo;
        };
        Event: {
            encode(message: _103.Event, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _103.Event;
            fromPartial(object: Partial<_103.Event>): _103.Event;
        };
        EventAttribute: {
            encode(message: _103.EventAttribute, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _103.EventAttribute;
            fromPartial(object: Partial<_103.EventAttribute>): _103.EventAttribute;
        };
        TxResult: {
            encode(message: _103.TxResult, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _103.TxResult;
            fromPartial(object: Partial<_103.TxResult>): _103.TxResult;
        };
        Validator: {
            encode(message: _103.Validator, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _103.Validator;
            fromPartial(object: Partial<_103.Validator>): _103.Validator;
        };
        ValidatorUpdate: {
            encode(message: _103.ValidatorUpdate, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _103.ValidatorUpdate;
            fromPartial(object: Partial<_103.ValidatorUpdate>): _103.ValidatorUpdate;
        };
        VoteInfo: {
            encode(message: _103.VoteInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _103.VoteInfo;
            fromPartial(object: Partial<_103.VoteInfo>): _103.VoteInfo;
        };
        Evidence: {
            encode(message: _103.Evidence, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _103.Evidence;
            fromPartial(object: Partial<_103.Evidence>): _103.Evidence;
        };
        Snapshot: {
            encode(message: _103.Snapshot, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _103.Snapshot;
            fromPartial(object: Partial<_103.Snapshot>): _103.Snapshot;
        };
    };
    const crypto: {
        Proof: {
            encode(message: _105.Proof, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _105.Proof;
            fromPartial(object: Partial<_105.Proof>): _105.Proof;
        };
        ValueOp: {
            encode(message: _105.ValueOp, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _105.ValueOp;
            fromPartial(object: Partial<_105.ValueOp>): _105.ValueOp;
        };
        DominoOp: {
            encode(message: _105.DominoOp, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _105.DominoOp;
            fromPartial(object: Partial<_105.DominoOp>): _105.DominoOp;
        };
        ProofOp: {
            encode(message: _105.ProofOp, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _105.ProofOp;
            fromPartial(object: Partial<_105.ProofOp>): _105.ProofOp;
        };
        ProofOps: {
            encode(message: _105.ProofOps, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _105.ProofOps;
            fromPartial(object: Partial<_105.ProofOps>): _105.ProofOps;
        };
        PublicKey: {
            encode(message: _104.PublicKey, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _104.PublicKey;
            fromPartial(object: Partial<_104.PublicKey>): _104.PublicKey;
        };
    };
    namespace libs {
        const bits: {
            BitArray: {
                encode(message: _106.BitArray, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _106.BitArray;
                fromPartial(object: Partial<_106.BitArray>): _106.BitArray;
            };
        };
    }
    const p2p: {
        PexRequest: {
            encode(_: _109.PexRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(_: any): _109.PexRequest;
            fromPartial(_: Partial<_109.PexRequest>): _109.PexRequest;
        };
        PexAddrs: {
            encode(message: _109.PexAddrs, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _109.PexAddrs;
            fromPartial(object: Partial<_109.PexAddrs>): _109.PexAddrs;
        };
        Message: {
            encode(message: _109.Message, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _109.Message;
            fromPartial(object: Partial<_109.Message>): _109.Message;
        };
        PacketPing: {
            encode(_: _108.PacketPing, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(_: any): _108.PacketPing;
            fromPartial(_: Partial<_108.PacketPing>): _108.PacketPing;
        };
        PacketPong: {
            encode(_: _108.PacketPong, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(_: any): _108.PacketPong;
            fromPartial(_: Partial<_108.PacketPong>): _108.PacketPong;
        };
        PacketMsg: {
            encode(message: _108.PacketMsg, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _108.PacketMsg;
            fromPartial(object: Partial<_108.PacketMsg>): _108.PacketMsg;
        };
        Packet: {
            encode(message: _108.Packet, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _108.Packet;
            fromPartial(object: Partial<_108.Packet>): _108.Packet;
        };
        AuthSigMessage: {
            encode(message: _108.AuthSigMessage, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _108.AuthSigMessage;
            fromPartial(object: Partial<_108.AuthSigMessage>): _108.AuthSigMessage;
        };
        NetAddress: {
            encode(message: _107.NetAddress, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _107.NetAddress;
            fromPartial(object: Partial<_107.NetAddress>): _107.NetAddress;
        };
        ProtocolVersion: {
            encode(message: _107.ProtocolVersion, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _107.ProtocolVersion;
            fromPartial(object: Partial<_107.ProtocolVersion>): _107.ProtocolVersion;
        };
        DefaultNodeInfo: {
            encode(message: _107.DefaultNodeInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _107.DefaultNodeInfo;
            fromPartial(object: Partial<_107.DefaultNodeInfo>): _107.DefaultNodeInfo;
        };
        DefaultNodeInfoOther: {
            encode(message: _107.DefaultNodeInfoOther, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _107.DefaultNodeInfoOther;
            fromPartial(object: Partial<_107.DefaultNodeInfoOther>): _107.DefaultNodeInfoOther;
        };
    };
    const types: {
        EventDataRoundState: {
            encode(message: _116.EventDataRoundState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _116.EventDataRoundState;
            fromPartial(object: Partial<_116.EventDataRoundState>): _116.EventDataRoundState;
        };
        CanonicalBlockID: {
            encode(message: _115.CanonicalBlockID, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _115.CanonicalBlockID;
            fromPartial(object: Partial<_115.CanonicalBlockID>): _115.CanonicalBlockID;
        };
        CanonicalPartSetHeader: {
            encode(message: _115.CanonicalPartSetHeader, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _115.CanonicalPartSetHeader;
            fromPartial(object: Partial<_115.CanonicalPartSetHeader>): _115.CanonicalPartSetHeader;
        };
        CanonicalProposal: {
            encode(message: _115.CanonicalProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _115.CanonicalProposal;
            fromPartial(object: Partial<_115.CanonicalProposal>): _115.CanonicalProposal;
        };
        CanonicalVote: {
            encode(message: _115.CanonicalVote, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _115.CanonicalVote;
            fromPartial(object: Partial<_115.CanonicalVote>): _115.CanonicalVote;
        };
        ValidatorSet: {
            encode(message: _114.ValidatorSet, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _114.ValidatorSet;
            fromPartial(object: Partial<_114.ValidatorSet>): _114.ValidatorSet;
        };
        Validator: {
            encode(message: _114.Validator, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _114.Validator;
            fromPartial(object: Partial<_114.Validator>): _114.Validator;
        };
        SimpleValidator: {
            encode(message: _114.SimpleValidator, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _114.SimpleValidator;
            fromPartial(object: Partial<_114.SimpleValidator>): _114.SimpleValidator;
        };
        blockIDFlagFromJSON(object: any): _113.BlockIDFlag;
        blockIDFlagToJSON(object: _113.BlockIDFlag): string;
        signedMsgTypeFromJSON(object: any): _113.SignedMsgType;
        signedMsgTypeToJSON(object: _113.SignedMsgType): string;
        BlockIDFlag: typeof _113.BlockIDFlag;
        BlockIDFlagSDKType: typeof _113.BlockIDFlag;
        SignedMsgType: typeof _113.SignedMsgType;
        SignedMsgTypeSDKType: typeof _113.SignedMsgType;
        PartSetHeader: {
            encode(message: _113.PartSetHeader, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _113.PartSetHeader;
            fromPartial(object: Partial<_113.PartSetHeader>): _113.PartSetHeader;
        };
        Part: {
            encode(message: _113.Part, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _113.Part;
            fromPartial(object: Partial<_113.Part>): _113.Part;
        };
        BlockID: {
            encode(message: _113.BlockID, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _113.BlockID;
            fromPartial(object: Partial<_113.BlockID>): _113.BlockID;
        };
        Header: {
            encode(message: _113.Header, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _113.Header;
            fromPartial(object: Partial<_113.Header>): _113.Header;
        };
        Data: {
            encode(message: _113.Data, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _113.Data;
            fromPartial(object: Partial<_113.Data>): _113.Data;
        };
        Vote: {
            encode(message: _113.Vote, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _113.Vote;
            fromPartial(object: Partial<_113.Vote>): _113.Vote;
        };
        Commit: {
            encode(message: _113.Commit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _113.Commit;
            fromPartial(object: Partial<_113.Commit>): _113.Commit;
        };
        CommitSig: {
            encode(message: _113.CommitSig, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _113.CommitSig;
            fromPartial(object: Partial<_113.CommitSig>): _113.CommitSig;
        };
        Proposal: {
            encode(message: _113.Proposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _113.Proposal;
            fromPartial(object: Partial<_113.Proposal>): _113.Proposal;
        };
        SignedHeader: {
            encode(message: _113.SignedHeader, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _113.SignedHeader;
            fromPartial(object: Partial<_113.SignedHeader>): _113.SignedHeader;
        };
        LightBlock: {
            encode(message: _113.LightBlock, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _113.LightBlock;
            fromPartial(object: Partial<_113.LightBlock>): _113.LightBlock;
        };
        BlockMeta: {
            encode(message: _113.BlockMeta, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _113.BlockMeta;
            fromPartial(object: Partial<_113.BlockMeta>): _113.BlockMeta;
        };
        TxProof: {
            encode(message: _113.TxProof, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _113.TxProof;
            fromPartial(object: Partial<_113.TxProof>): _113.TxProof;
        };
        ConsensusParams: {
            encode(message: _112.ConsensusParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _112.ConsensusParams;
            fromPartial(object: Partial<_112.ConsensusParams>): _112.ConsensusParams;
        };
        BlockParams: {
            encode(message: _112.BlockParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _112.BlockParams;
            fromPartial(object: Partial<_112.BlockParams>): _112.BlockParams;
        };
        EvidenceParams: {
            encode(message: _112.EvidenceParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _112.EvidenceParams;
            fromPartial(object: Partial<_112.EvidenceParams>): _112.EvidenceParams;
        };
        ValidatorParams: {
            encode(message: _112.ValidatorParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _112.ValidatorParams;
            fromPartial(object: Partial<_112.ValidatorParams>): _112.ValidatorParams;
        };
        VersionParams: {
            encode(message: _112.VersionParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _112.VersionParams;
            fromPartial(object: Partial<_112.VersionParams>): _112.VersionParams;
        };
        HashedParams: {
            encode(message: _112.HashedParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _112.HashedParams;
            fromPartial(object: Partial<_112.HashedParams>): _112.HashedParams;
        };
        Evidence: {
            encode(message: _111.Evidence, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _111.Evidence;
            fromPartial(object: Partial<_111.Evidence>): _111.Evidence;
        };
        DuplicateVoteEvidence: {
            encode(message: _111.DuplicateVoteEvidence, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _111.DuplicateVoteEvidence;
            fromPartial(object: Partial<_111.DuplicateVoteEvidence>): _111.DuplicateVoteEvidence;
        };
        LightClientAttackEvidence: {
            encode(message: _111.LightClientAttackEvidence, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _111.LightClientAttackEvidence;
            fromPartial(object: Partial<_111.LightClientAttackEvidence>): _111.LightClientAttackEvidence;
        };
        EvidenceList: {
            encode(message: _111.EvidenceList, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _111.EvidenceList;
            fromPartial(object: Partial<_111.EvidenceList>): _111.EvidenceList;
        };
        Block: {
            encode(message: _110.Block, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _110.Block;
            fromPartial(object: Partial<_110.Block>): _110.Block;
        };
    };
    const version: {
        App: {
            encode(message: _117.App, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _117.App;
            fromPartial(object: Partial<_117.App>): _117.App;
        };
        Consensus: {
            encode(message: _117.Consensus, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _117.Consensus;
            fromPartial(object: Partial<_117.Consensus>): _117.Consensus;
        };
    };
    const blockchain: {
        BlockRequest: {
            encode(message: _118.BlockRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _118.BlockRequest;
            fromPartial(object: Partial<_118.BlockRequest>): _118.BlockRequest;
        };
        NoBlockResponse: {
            encode(message: _118.NoBlockResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _118.NoBlockResponse;
            fromPartial(object: Partial<_118.NoBlockResponse>): _118.NoBlockResponse;
        };
        BlockResponse: {
            encode(message: _118.BlockResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _118.BlockResponse;
            fromPartial(object: Partial<_118.BlockResponse>): _118.BlockResponse;
        };
        StatusRequest: {
            encode(_: _118.StatusRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(_: any): _118.StatusRequest;
            fromPartial(_: Partial<_118.StatusRequest>): _118.StatusRequest;
        };
        StatusResponse: {
            encode(message: _118.StatusResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _118.StatusResponse;
            fromPartial(object: Partial<_118.StatusResponse>): _118.StatusResponse;
        };
        Message: {
            encode(message: _118.Message, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _118.Message;
            fromPartial(object: Partial<_118.Message>): _118.Message;
        };
    };
    const consensus: {
        MsgInfo: {
            encode(message: _120.MsgInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _120.MsgInfo;
            fromPartial(object: Partial<_120.MsgInfo>): _120.MsgInfo;
        };
        TimeoutInfo: {
            encode(message: _120.TimeoutInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _120.TimeoutInfo;
            fromPartial(object: Partial<_120.TimeoutInfo>): _120.TimeoutInfo;
        };
        EndHeight: {
            encode(message: _120.EndHeight, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _120.EndHeight;
            fromPartial(object: Partial<_120.EndHeight>): _120.EndHeight;
        };
        WALMessage: {
            encode(message: _120.WALMessage, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _120.WALMessage;
            fromPartial(object: Partial<_120.WALMessage>): _120.WALMessage;
        };
        TimedWALMessage: {
            encode(message: _120.TimedWALMessage, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _120.TimedWALMessage;
            fromPartial(object: Partial<_120.TimedWALMessage>): _120.TimedWALMessage;
        };
        NewRoundStep: {
            encode(message: _119.NewRoundStep, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _119.NewRoundStep;
            fromPartial(object: Partial<_119.NewRoundStep>): _119.NewRoundStep;
        };
        NewValidBlock: {
            encode(message: _119.NewValidBlock, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _119.NewValidBlock;
            fromPartial(object: Partial<_119.NewValidBlock>): _119.NewValidBlock;
        };
        Proposal: {
            encode(message: _119.Proposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _119.Proposal;
            fromPartial(object: Partial<_119.Proposal>): _119.Proposal;
        };
        ProposalPOL: {
            encode(message: _119.ProposalPOL, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _119.ProposalPOL;
            fromPartial(object: Partial<_119.ProposalPOL>): _119.ProposalPOL;
        };
        BlockPart: {
            encode(message: _119.BlockPart, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _119.BlockPart;
            fromPartial(object: Partial<_119.BlockPart>): _119.BlockPart;
        };
        Vote: {
            encode(message: _119.Vote, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _119.Vote;
            fromPartial(object: Partial<_119.Vote>): _119.Vote;
        };
        HasVote: {
            encode(message: _119.HasVote, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _119.HasVote;
            fromPartial(object: Partial<_119.HasVote>): _119.HasVote;
        };
        VoteSetMaj23: {
            encode(message: _119.VoteSetMaj23, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _119.VoteSetMaj23;
            fromPartial(object: Partial<_119.VoteSetMaj23>): _119.VoteSetMaj23;
        };
        VoteSetBits: {
            encode(message: _119.VoteSetBits, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _119.VoteSetBits;
            fromPartial(object: Partial<_119.VoteSetBits>): _119.VoteSetBits;
        };
        Message: {
            encode(message: _119.Message, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _119.Message;
            fromPartial(object: Partial<_119.Message>): _119.Message;
        };
    };
    const mempool: {
        Txs: {
            encode(message: _121.Txs, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _121.Txs;
            fromPartial(object: Partial<_121.Txs>): _121.Txs;
        };
        Message: {
            encode(message: _121.Message, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _121.Message;
            fromPartial(object: Partial<_121.Message>): _121.Message;
        };
    };
    const privval: {
        errorsFromJSON(object: any): _122.Errors;
        errorsToJSON(object: _122.Errors): string;
        Errors: typeof _122.Errors;
        ErrorsSDKType: typeof _122.Errors;
        RemoteSignerError: {
            encode(message: _122.RemoteSignerError, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _122.RemoteSignerError;
            fromPartial(object: Partial<_122.RemoteSignerError>): _122.RemoteSignerError;
        };
        PubKeyRequest: {
            encode(message: _122.PubKeyRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _122.PubKeyRequest;
            fromPartial(object: Partial<_122.PubKeyRequest>): _122.PubKeyRequest;
        };
        PubKeyResponse: {
            encode(message: _122.PubKeyResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _122.PubKeyResponse;
            fromPartial(object: Partial<_122.PubKeyResponse>): _122.PubKeyResponse;
        };
        SignVoteRequest: {
            encode(message: _122.SignVoteRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _122.SignVoteRequest;
            fromPartial(object: Partial<_122.SignVoteRequest>): _122.SignVoteRequest;
        };
        SignedVoteResponse: {
            encode(message: _122.SignedVoteResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _122.SignedVoteResponse;
            fromPartial(object: Partial<_122.SignedVoteResponse>): _122.SignedVoteResponse;
        };
        SignProposalRequest: {
            encode(message: _122.SignProposalRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _122.SignProposalRequest;
            fromPartial(object: Partial<_122.SignProposalRequest>): _122.SignProposalRequest;
        };
        SignedProposalResponse: {
            encode(message: _122.SignedProposalResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _122.SignedProposalResponse;
            fromPartial(object: Partial<_122.SignedProposalResponse>): _122.SignedProposalResponse;
        };
        PingRequest: {
            encode(_: _122.PingRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(_: any): _122.PingRequest;
            fromPartial(_: Partial<_122.PingRequest>): _122.PingRequest;
        };
        PingResponse: {
            encode(_: _122.PingResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(_: any): _122.PingResponse;
            fromPartial(_: Partial<_122.PingResponse>): _122.PingResponse;
        };
        Message: {
            encode(message: _122.Message, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _122.Message;
            fromPartial(object: Partial<_122.Message>): _122.Message;
        };
    };
    namespace rpc {
        const grpc: {
            RequestPing: {
                encode(_: _123.RequestPing, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _123.RequestPing;
                fromPartial(_: Partial<_123.RequestPing>): _123.RequestPing;
            };
            RequestBroadcastTx: {
                encode(message: _123.RequestBroadcastTx, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _123.RequestBroadcastTx;
                fromPartial(object: Partial<_123.RequestBroadcastTx>): _123.RequestBroadcastTx;
            };
            ResponsePing: {
                encode(_: _123.ResponsePing, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _123.ResponsePing;
                fromPartial(_: Partial<_123.ResponsePing>): _123.ResponsePing;
            };
            ResponseBroadcastTx: {
                encode(message: _123.ResponseBroadcastTx, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _123.ResponseBroadcastTx;
                fromPartial(object: Partial<_123.ResponseBroadcastTx>): _123.ResponseBroadcastTx;
            };
        };
    }
    const state: {
        ABCIResponses: {
            encode(message: _124.ABCIResponses, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _124.ABCIResponses;
            fromPartial(object: Partial<_124.ABCIResponses>): _124.ABCIResponses;
        };
        ValidatorsInfo: {
            encode(message: _124.ValidatorsInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _124.ValidatorsInfo;
            fromPartial(object: Partial<_124.ValidatorsInfo>): _124.ValidatorsInfo;
        };
        ConsensusParamsInfo: {
            encode(message: _124.ConsensusParamsInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _124.ConsensusParamsInfo;
            fromPartial(object: Partial<_124.ConsensusParamsInfo>): _124.ConsensusParamsInfo;
        };
        ABCIResponsesInfo: {
            encode(message: _124.ABCIResponsesInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _124.ABCIResponsesInfo;
            fromPartial(object: Partial<_124.ABCIResponsesInfo>): _124.ABCIResponsesInfo;
        };
        Version: {
            encode(message: _124.Version, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _124.Version;
            fromPartial(object: Partial<_124.Version>): _124.Version;
        };
        State: {
            encode(message: _124.State, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _124.State;
            fromPartial(object: Partial<_124.State>): _124.State;
        };
    };
    const statesync: {
        Message: {
            encode(message: _125.Message, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _125.Message;
            fromPartial(object: Partial<_125.Message>): _125.Message;
        };
        SnapshotsRequest: {
            encode(_: _125.SnapshotsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(_: any): _125.SnapshotsRequest;
            fromPartial(_: Partial<_125.SnapshotsRequest>): _125.SnapshotsRequest;
        };
        SnapshotsResponse: {
            encode(message: _125.SnapshotsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _125.SnapshotsResponse;
            fromPartial(object: Partial<_125.SnapshotsResponse>): _125.SnapshotsResponse;
        };
        ChunkRequest: {
            encode(message: _125.ChunkRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _125.ChunkRequest;
            fromPartial(object: Partial<_125.ChunkRequest>): _125.ChunkRequest;
        };
        ChunkResponse: {
            encode(message: _125.ChunkResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _125.ChunkResponse;
            fromPartial(object: Partial<_125.ChunkResponse>): _125.ChunkResponse;
        };
    };
    const store: {
        BlockStoreState: {
            encode(message: _126.BlockStoreState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _126.BlockStoreState;
            fromPartial(object: Partial<_126.BlockStoreState>): _126.BlockStoreState;
        };
    };
}
