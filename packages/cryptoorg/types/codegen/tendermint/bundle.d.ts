import * as _113 from "./abci/types";
import * as _114 from "./crypto/keys";
import * as _115 from "./crypto/proof";
import * as _116 from "./libs/bits/types";
import * as _117 from "./p2p/types";
import * as _118 from "./types/block";
import * as _119 from "./types/evidence";
import * as _120 from "./types/params";
import * as _121 from "./types/types";
import * as _122 from "./types/validator";
import * as _123 from "./version/types";
export declare namespace tendermint {
    const abci: {
        checkTxTypeFromJSON(object: any): _113.CheckTxType;
        checkTxTypeToJSON(object: _113.CheckTxType): string;
        responseOfferSnapshot_ResultFromJSON(object: any): _113.ResponseOfferSnapshot_Result;
        responseOfferSnapshot_ResultToJSON(object: _113.ResponseOfferSnapshot_Result): string;
        responseApplySnapshotChunk_ResultFromJSON(object: any): _113.ResponseApplySnapshotChunk_Result;
        responseApplySnapshotChunk_ResultToJSON(object: _113.ResponseApplySnapshotChunk_Result): string;
        evidenceTypeFromJSON(object: any): _113.EvidenceType;
        evidenceTypeToJSON(object: _113.EvidenceType): string;
        CheckTxType: typeof _113.CheckTxType;
        CheckTxTypeSDKType: typeof _113.CheckTxType;
        ResponseOfferSnapshot_Result: typeof _113.ResponseOfferSnapshot_Result;
        ResponseOfferSnapshot_ResultSDKType: typeof _113.ResponseOfferSnapshot_Result;
        ResponseApplySnapshotChunk_Result: typeof _113.ResponseApplySnapshotChunk_Result;
        ResponseApplySnapshotChunk_ResultSDKType: typeof _113.ResponseApplySnapshotChunk_Result;
        EvidenceType: typeof _113.EvidenceType;
        EvidenceTypeSDKType: typeof _113.EvidenceType;
        Request: {
            encode(message: _113.Request, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _113.Request;
            fromPartial(object: Partial<_113.Request>): _113.Request;
        };
        RequestEcho: {
            encode(message: _113.RequestEcho, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _113.RequestEcho;
            fromPartial(object: Partial<_113.RequestEcho>): _113.RequestEcho;
        };
        RequestFlush: {
            encode(_: _113.RequestFlush, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(_: any): _113.RequestFlush;
            fromPartial(_: Partial<_113.RequestFlush>): _113.RequestFlush;
        };
        RequestInfo: {
            encode(message: _113.RequestInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _113.RequestInfo;
            fromPartial(object: Partial<_113.RequestInfo>): _113.RequestInfo;
        };
        RequestSetOption: {
            encode(message: _113.RequestSetOption, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _113.RequestSetOption;
            fromPartial(object: Partial<_113.RequestSetOption>): _113.RequestSetOption;
        };
        RequestInitChain: {
            encode(message: _113.RequestInitChain, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _113.RequestInitChain;
            fromPartial(object: Partial<_113.RequestInitChain>): _113.RequestInitChain;
        };
        RequestQuery: {
            encode(message: _113.RequestQuery, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _113.RequestQuery;
            fromPartial(object: Partial<_113.RequestQuery>): _113.RequestQuery;
        };
        RequestBeginBlock: {
            encode(message: _113.RequestBeginBlock, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _113.RequestBeginBlock;
            fromPartial(object: Partial<_113.RequestBeginBlock>): _113.RequestBeginBlock;
        };
        RequestCheckTx: {
            encode(message: _113.RequestCheckTx, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _113.RequestCheckTx;
            fromPartial(object: Partial<_113.RequestCheckTx>): _113.RequestCheckTx;
        };
        RequestDeliverTx: {
            encode(message: _113.RequestDeliverTx, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _113.RequestDeliverTx;
            fromPartial(object: Partial<_113.RequestDeliverTx>): _113.RequestDeliverTx;
        };
        RequestEndBlock: {
            encode(message: _113.RequestEndBlock, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _113.RequestEndBlock;
            fromPartial(object: Partial<_113.RequestEndBlock>): _113.RequestEndBlock;
        };
        RequestCommit: {
            encode(_: _113.RequestCommit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(_: any): _113.RequestCommit;
            fromPartial(_: Partial<_113.RequestCommit>): _113.RequestCommit;
        };
        RequestListSnapshots: {
            encode(_: _113.RequestListSnapshots, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(_: any): _113.RequestListSnapshots;
            fromPartial(_: Partial<_113.RequestListSnapshots>): _113.RequestListSnapshots;
        };
        RequestOfferSnapshot: {
            encode(message: _113.RequestOfferSnapshot, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _113.RequestOfferSnapshot;
            fromPartial(object: Partial<_113.RequestOfferSnapshot>): _113.RequestOfferSnapshot;
        };
        RequestLoadSnapshotChunk: {
            encode(message: _113.RequestLoadSnapshotChunk, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _113.RequestLoadSnapshotChunk;
            fromPartial(object: Partial<_113.RequestLoadSnapshotChunk>): _113.RequestLoadSnapshotChunk;
        };
        RequestApplySnapshotChunk: {
            encode(message: _113.RequestApplySnapshotChunk, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _113.RequestApplySnapshotChunk;
            fromPartial(object: Partial<_113.RequestApplySnapshotChunk>): _113.RequestApplySnapshotChunk;
        };
        Response: {
            encode(message: _113.Response, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _113.Response;
            fromPartial(object: Partial<_113.Response>): _113.Response;
        };
        ResponseException: {
            encode(message: _113.ResponseException, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _113.ResponseException;
            fromPartial(object: Partial<_113.ResponseException>): _113.ResponseException;
        };
        ResponseEcho: {
            encode(message: _113.ResponseEcho, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _113.ResponseEcho;
            fromPartial(object: Partial<_113.ResponseEcho>): _113.ResponseEcho;
        };
        ResponseFlush: {
            encode(_: _113.ResponseFlush, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(_: any): _113.ResponseFlush;
            fromPartial(_: Partial<_113.ResponseFlush>): _113.ResponseFlush;
        };
        ResponseInfo: {
            encode(message: _113.ResponseInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _113.ResponseInfo;
            fromPartial(object: Partial<_113.ResponseInfo>): _113.ResponseInfo;
        };
        ResponseSetOption: {
            encode(message: _113.ResponseSetOption, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _113.ResponseSetOption;
            fromPartial(object: Partial<_113.ResponseSetOption>): _113.ResponseSetOption;
        };
        ResponseInitChain: {
            encode(message: _113.ResponseInitChain, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _113.ResponseInitChain;
            fromPartial(object: Partial<_113.ResponseInitChain>): _113.ResponseInitChain;
        };
        ResponseQuery: {
            encode(message: _113.ResponseQuery, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _113.ResponseQuery;
            fromPartial(object: Partial<_113.ResponseQuery>): _113.ResponseQuery;
        };
        ResponseBeginBlock: {
            encode(message: _113.ResponseBeginBlock, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _113.ResponseBeginBlock;
            fromPartial(object: Partial<_113.ResponseBeginBlock>): _113.ResponseBeginBlock;
        };
        ResponseCheckTx: {
            encode(message: _113.ResponseCheckTx, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _113.ResponseCheckTx;
            fromPartial(object: Partial<_113.ResponseCheckTx>): _113.ResponseCheckTx;
        };
        ResponseDeliverTx: {
            encode(message: _113.ResponseDeliverTx, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _113.ResponseDeliverTx;
            fromPartial(object: Partial<_113.ResponseDeliverTx>): _113.ResponseDeliverTx;
        };
        ResponseEndBlock: {
            encode(message: _113.ResponseEndBlock, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _113.ResponseEndBlock;
            fromPartial(object: Partial<_113.ResponseEndBlock>): _113.ResponseEndBlock;
        };
        ResponseCommit: {
            encode(message: _113.ResponseCommit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _113.ResponseCommit;
            fromPartial(object: Partial<_113.ResponseCommit>): _113.ResponseCommit;
        };
        ResponseListSnapshots: {
            encode(message: _113.ResponseListSnapshots, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _113.ResponseListSnapshots;
            fromPartial(object: Partial<_113.ResponseListSnapshots>): _113.ResponseListSnapshots;
        };
        ResponseOfferSnapshot: {
            encode(message: _113.ResponseOfferSnapshot, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _113.ResponseOfferSnapshot;
            fromPartial(object: Partial<_113.ResponseOfferSnapshot>): _113.ResponseOfferSnapshot;
        };
        ResponseLoadSnapshotChunk: {
            encode(message: _113.ResponseLoadSnapshotChunk, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _113.ResponseLoadSnapshotChunk;
            fromPartial(object: Partial<_113.ResponseLoadSnapshotChunk>): _113.ResponseLoadSnapshotChunk;
        };
        ResponseApplySnapshotChunk: {
            encode(message: _113.ResponseApplySnapshotChunk, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _113.ResponseApplySnapshotChunk;
            fromPartial(object: Partial<_113.ResponseApplySnapshotChunk>): _113.ResponseApplySnapshotChunk;
        };
        ConsensusParams: {
            encode(message: _113.ConsensusParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _113.ConsensusParams;
            fromPartial(object: Partial<_113.ConsensusParams>): _113.ConsensusParams;
        };
        BlockParams: {
            encode(message: _113.BlockParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _113.BlockParams;
            fromPartial(object: Partial<_113.BlockParams>): _113.BlockParams;
        };
        LastCommitInfo: {
            encode(message: _113.LastCommitInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _113.LastCommitInfo;
            fromPartial(object: Partial<_113.LastCommitInfo>): _113.LastCommitInfo;
        };
        Event: {
            encode(message: _113.Event, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _113.Event;
            fromPartial(object: Partial<_113.Event>): _113.Event;
        };
        EventAttribute: {
            encode(message: _113.EventAttribute, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _113.EventAttribute;
            fromPartial(object: Partial<_113.EventAttribute>): _113.EventAttribute;
        };
        TxResult: {
            encode(message: _113.TxResult, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _113.TxResult;
            fromPartial(object: Partial<_113.TxResult>): _113.TxResult;
        };
        Validator: {
            encode(message: _113.Validator, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _113.Validator;
            fromPartial(object: Partial<_113.Validator>): _113.Validator;
        };
        ValidatorUpdate: {
            encode(message: _113.ValidatorUpdate, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _113.ValidatorUpdate;
            fromPartial(object: Partial<_113.ValidatorUpdate>): _113.ValidatorUpdate;
        };
        VoteInfo: {
            encode(message: _113.VoteInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _113.VoteInfo;
            fromPartial(object: Partial<_113.VoteInfo>): _113.VoteInfo;
        };
        Evidence: {
            encode(message: _113.Evidence, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _113.Evidence;
            fromPartial(object: Partial<_113.Evidence>): _113.Evidence;
        };
        Snapshot: {
            encode(message: _113.Snapshot, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _113.Snapshot;
            fromPartial(object: Partial<_113.Snapshot>): _113.Snapshot;
        };
    };
    const crypto: {
        Proof: {
            encode(message: _115.Proof, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _115.Proof;
            fromPartial(object: Partial<_115.Proof>): _115.Proof;
        };
        ValueOp: {
            encode(message: _115.ValueOp, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _115.ValueOp;
            fromPartial(object: Partial<_115.ValueOp>): _115.ValueOp;
        };
        DominoOp: {
            encode(message: _115.DominoOp, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _115.DominoOp;
            fromPartial(object: Partial<_115.DominoOp>): _115.DominoOp;
        };
        ProofOp: {
            encode(message: _115.ProofOp, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _115.ProofOp;
            fromPartial(object: Partial<_115.ProofOp>): _115.ProofOp;
        };
        ProofOps: {
            encode(message: _115.ProofOps, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _115.ProofOps;
            fromPartial(object: Partial<_115.ProofOps>): _115.ProofOps;
        };
        PublicKey: {
            encode(message: _114.PublicKey, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _114.PublicKey;
            fromPartial(object: Partial<_114.PublicKey>): _114.PublicKey;
        };
    };
    namespace libs {
        const bits: {
            BitArray: {
                encode(message: _116.BitArray, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _116.BitArray;
                fromPartial(object: Partial<_116.BitArray>): _116.BitArray;
            };
        };
    }
    const p2p: {
        NetAddress: {
            encode(message: _117.NetAddress, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _117.NetAddress;
            fromPartial(object: Partial<_117.NetAddress>): _117.NetAddress;
        };
        ProtocolVersion: {
            encode(message: _117.ProtocolVersion, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _117.ProtocolVersion;
            fromPartial(object: Partial<_117.ProtocolVersion>): _117.ProtocolVersion;
        };
        DefaultNodeInfo: {
            encode(message: _117.DefaultNodeInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _117.DefaultNodeInfo;
            fromPartial(object: Partial<_117.DefaultNodeInfo>): _117.DefaultNodeInfo;
        };
        DefaultNodeInfoOther: {
            encode(message: _117.DefaultNodeInfoOther, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _117.DefaultNodeInfoOther;
            fromPartial(object: Partial<_117.DefaultNodeInfoOther>): _117.DefaultNodeInfoOther;
        };
    };
    const types: {
        ValidatorSet: {
            encode(message: _122.ValidatorSet, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _122.ValidatorSet;
            fromPartial(object: Partial<_122.ValidatorSet>): _122.ValidatorSet;
        };
        Validator: {
            encode(message: _122.Validator, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _122.Validator;
            fromPartial(object: Partial<_122.Validator>): _122.Validator;
        };
        SimpleValidator: {
            encode(message: _122.SimpleValidator, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _122.SimpleValidator;
            fromPartial(object: Partial<_122.SimpleValidator>): _122.SimpleValidator;
        };
        blockIDFlagFromJSON(object: any): _121.BlockIDFlag;
        blockIDFlagToJSON(object: _121.BlockIDFlag): string;
        signedMsgTypeFromJSON(object: any): _121.SignedMsgType;
        signedMsgTypeToJSON(object: _121.SignedMsgType): string;
        BlockIDFlag: typeof _121.BlockIDFlag;
        BlockIDFlagSDKType: typeof _121.BlockIDFlag;
        SignedMsgType: typeof _121.SignedMsgType;
        SignedMsgTypeSDKType: typeof _121.SignedMsgType;
        PartSetHeader: {
            encode(message: _121.PartSetHeader, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _121.PartSetHeader;
            fromPartial(object: Partial<_121.PartSetHeader>): _121.PartSetHeader;
        };
        Part: {
            encode(message: _121.Part, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _121.Part;
            fromPartial(object: Partial<_121.Part>): _121.Part;
        };
        BlockID: {
            encode(message: _121.BlockID, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _121.BlockID;
            fromPartial(object: Partial<_121.BlockID>): _121.BlockID;
        };
        Header: {
            encode(message: _121.Header, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _121.Header;
            fromPartial(object: Partial<_121.Header>): _121.Header;
        };
        Data: {
            encode(message: _121.Data, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _121.Data;
            fromPartial(object: Partial<_121.Data>): _121.Data;
        };
        Vote: {
            encode(message: _121.Vote, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _121.Vote;
            fromPartial(object: Partial<_121.Vote>): _121.Vote;
        };
        Commit: {
            encode(message: _121.Commit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _121.Commit;
            fromPartial(object: Partial<_121.Commit>): _121.Commit;
        };
        CommitSig: {
            encode(message: _121.CommitSig, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _121.CommitSig;
            fromPartial(object: Partial<_121.CommitSig>): _121.CommitSig;
        };
        Proposal: {
            encode(message: _121.Proposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _121.Proposal;
            fromPartial(object: Partial<_121.Proposal>): _121.Proposal;
        };
        SignedHeader: {
            encode(message: _121.SignedHeader, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _121.SignedHeader;
            fromPartial(object: Partial<_121.SignedHeader>): _121.SignedHeader;
        };
        LightBlock: {
            encode(message: _121.LightBlock, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _121.LightBlock;
            fromPartial(object: Partial<_121.LightBlock>): _121.LightBlock;
        };
        BlockMeta: {
            encode(message: _121.BlockMeta, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _121.BlockMeta;
            fromPartial(object: Partial<_121.BlockMeta>): _121.BlockMeta;
        };
        TxProof: {
            encode(message: _121.TxProof, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _121.TxProof;
            fromPartial(object: Partial<_121.TxProof>): _121.TxProof;
        };
        ConsensusParams: {
            encode(message: _120.ConsensusParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _120.ConsensusParams;
            fromPartial(object: Partial<_120.ConsensusParams>): _120.ConsensusParams;
        };
        BlockParams: {
            encode(message: _120.BlockParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _120.BlockParams;
            fromPartial(object: Partial<_120.BlockParams>): _120.BlockParams;
        };
        EvidenceParams: {
            encode(message: _120.EvidenceParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _120.EvidenceParams;
            fromPartial(object: Partial<_120.EvidenceParams>): _120.EvidenceParams;
        };
        ValidatorParams: {
            encode(message: _120.ValidatorParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _120.ValidatorParams;
            fromPartial(object: Partial<_120.ValidatorParams>): _120.ValidatorParams;
        };
        VersionParams: {
            encode(message: _120.VersionParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _120.VersionParams;
            fromPartial(object: Partial<_120.VersionParams>): _120.VersionParams;
        };
        HashedParams: {
            encode(message: _120.HashedParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _120.HashedParams;
            fromPartial(object: Partial<_120.HashedParams>): _120.HashedParams;
        };
        Evidence: {
            encode(message: _119.Evidence, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _119.Evidence;
            fromPartial(object: Partial<_119.Evidence>): _119.Evidence;
        };
        DuplicateVoteEvidence: {
            encode(message: _119.DuplicateVoteEvidence, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _119.DuplicateVoteEvidence;
            fromPartial(object: Partial<_119.DuplicateVoteEvidence>): _119.DuplicateVoteEvidence;
        };
        LightClientAttackEvidence: {
            encode(message: _119.LightClientAttackEvidence, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _119.LightClientAttackEvidence;
            fromPartial(object: Partial<_119.LightClientAttackEvidence>): _119.LightClientAttackEvidence;
        };
        EvidenceList: {
            encode(message: _119.EvidenceList, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _119.EvidenceList;
            fromPartial(object: Partial<_119.EvidenceList>): _119.EvidenceList;
        };
        Block: {
            encode(message: _118.Block, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _118.Block;
            fromPartial(object: Partial<_118.Block>): _118.Block;
        };
    };
    const version: {
        App: {
            encode(message: _123.App, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _123.App;
            fromPartial(object: Partial<_123.App>): _123.App;
        };
        Consensus: {
            encode(message: _123.Consensus, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _123.Consensus;
            fromPartial(object: Partial<_123.Consensus>): _123.Consensus;
        };
    };
}
