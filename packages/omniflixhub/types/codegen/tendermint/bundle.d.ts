import * as _91 from "./abci/types";
import * as _92 from "./crypto/keys";
import * as _93 from "./crypto/proof";
import * as _94 from "./libs/bits/types";
import * as _95 from "./p2p/types";
import * as _96 from "./types/block";
import * as _97 from "./types/evidence";
import * as _98 from "./types/params";
import * as _99 from "./types/types";
import * as _100 from "./types/validator";
import * as _101 from "./version/types";
export declare namespace tendermint {
    const abci: {
        checkTxTypeFromJSON(object: any): _91.CheckTxType;
        checkTxTypeToJSON(object: _91.CheckTxType): string;
        responseOfferSnapshot_ResultFromJSON(object: any): _91.ResponseOfferSnapshot_Result;
        responseOfferSnapshot_ResultToJSON(object: _91.ResponseOfferSnapshot_Result): string;
        responseApplySnapshotChunk_ResultFromJSON(object: any): _91.ResponseApplySnapshotChunk_Result;
        responseApplySnapshotChunk_ResultToJSON(object: _91.ResponseApplySnapshotChunk_Result): string;
        evidenceTypeFromJSON(object: any): _91.EvidenceType;
        evidenceTypeToJSON(object: _91.EvidenceType): string;
        CheckTxType: typeof _91.CheckTxType;
        CheckTxTypeSDKType: typeof _91.CheckTxType;
        ResponseOfferSnapshot_Result: typeof _91.ResponseOfferSnapshot_Result;
        ResponseOfferSnapshot_ResultSDKType: typeof _91.ResponseOfferSnapshot_Result;
        ResponseApplySnapshotChunk_Result: typeof _91.ResponseApplySnapshotChunk_Result;
        ResponseApplySnapshotChunk_ResultSDKType: typeof _91.ResponseApplySnapshotChunk_Result;
        EvidenceType: typeof _91.EvidenceType;
        EvidenceTypeSDKType: typeof _91.EvidenceType;
        Request: {
            encode(message: _91.Request, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _91.Request;
            fromPartial(object: Partial<_91.Request>): _91.Request;
        };
        RequestEcho: {
            encode(message: _91.RequestEcho, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _91.RequestEcho;
            fromPartial(object: Partial<_91.RequestEcho>): _91.RequestEcho;
        };
        RequestFlush: {
            encode(_: _91.RequestFlush, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(_: any): _91.RequestFlush;
            fromPartial(_: Partial<_91.RequestFlush>): _91.RequestFlush;
        };
        RequestInfo: {
            encode(message: _91.RequestInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _91.RequestInfo;
            fromPartial(object: Partial<_91.RequestInfo>): _91.RequestInfo;
        };
        RequestSetOption: {
            encode(message: _91.RequestSetOption, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _91.RequestSetOption;
            fromPartial(object: Partial<_91.RequestSetOption>): _91.RequestSetOption;
        };
        RequestInitChain: {
            encode(message: _91.RequestInitChain, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _91.RequestInitChain;
            fromPartial(object: Partial<_91.RequestInitChain>): _91.RequestInitChain;
        };
        RequestQuery: {
            encode(message: _91.RequestQuery, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _91.RequestQuery;
            fromPartial(object: Partial<_91.RequestQuery>): _91.RequestQuery;
        };
        RequestBeginBlock: {
            encode(message: _91.RequestBeginBlock, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _91.RequestBeginBlock;
            fromPartial(object: Partial<_91.RequestBeginBlock>): _91.RequestBeginBlock;
        };
        RequestCheckTx: {
            encode(message: _91.RequestCheckTx, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _91.RequestCheckTx;
            fromPartial(object: Partial<_91.RequestCheckTx>): _91.RequestCheckTx;
        };
        RequestDeliverTx: {
            encode(message: _91.RequestDeliverTx, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _91.RequestDeliverTx;
            fromPartial(object: Partial<_91.RequestDeliverTx>): _91.RequestDeliverTx;
        };
        RequestEndBlock: {
            encode(message: _91.RequestEndBlock, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _91.RequestEndBlock;
            fromPartial(object: Partial<_91.RequestEndBlock>): _91.RequestEndBlock;
        };
        RequestCommit: {
            encode(_: _91.RequestCommit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(_: any): _91.RequestCommit;
            fromPartial(_: Partial<_91.RequestCommit>): _91.RequestCommit;
        };
        RequestListSnapshots: {
            encode(_: _91.RequestListSnapshots, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(_: any): _91.RequestListSnapshots;
            fromPartial(_: Partial<_91.RequestListSnapshots>): _91.RequestListSnapshots;
        };
        RequestOfferSnapshot: {
            encode(message: _91.RequestOfferSnapshot, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _91.RequestOfferSnapshot;
            fromPartial(object: Partial<_91.RequestOfferSnapshot>): _91.RequestOfferSnapshot;
        };
        RequestLoadSnapshotChunk: {
            encode(message: _91.RequestLoadSnapshotChunk, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _91.RequestLoadSnapshotChunk;
            fromPartial(object: Partial<_91.RequestLoadSnapshotChunk>): _91.RequestLoadSnapshotChunk;
        };
        RequestApplySnapshotChunk: {
            encode(message: _91.RequestApplySnapshotChunk, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _91.RequestApplySnapshotChunk;
            fromPartial(object: Partial<_91.RequestApplySnapshotChunk>): _91.RequestApplySnapshotChunk;
        };
        Response: {
            encode(message: _91.Response, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _91.Response;
            fromPartial(object: Partial<_91.Response>): _91.Response;
        };
        ResponseException: {
            encode(message: _91.ResponseException, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _91.ResponseException;
            fromPartial(object: Partial<_91.ResponseException>): _91.ResponseException;
        };
        ResponseEcho: {
            encode(message: _91.ResponseEcho, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _91.ResponseEcho;
            fromPartial(object: Partial<_91.ResponseEcho>): _91.ResponseEcho;
        };
        ResponseFlush: {
            encode(_: _91.ResponseFlush, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(_: any): _91.ResponseFlush;
            fromPartial(_: Partial<_91.ResponseFlush>): _91.ResponseFlush;
        };
        ResponseInfo: {
            encode(message: _91.ResponseInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _91.ResponseInfo;
            fromPartial(object: Partial<_91.ResponseInfo>): _91.ResponseInfo;
        };
        ResponseSetOption: {
            encode(message: _91.ResponseSetOption, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _91.ResponseSetOption;
            fromPartial(object: Partial<_91.ResponseSetOption>): _91.ResponseSetOption;
        };
        ResponseInitChain: {
            encode(message: _91.ResponseInitChain, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _91.ResponseInitChain;
            fromPartial(object: Partial<_91.ResponseInitChain>): _91.ResponseInitChain;
        };
        ResponseQuery: {
            encode(message: _91.ResponseQuery, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _91.ResponseQuery;
            fromPartial(object: Partial<_91.ResponseQuery>): _91.ResponseQuery;
        };
        ResponseBeginBlock: {
            encode(message: _91.ResponseBeginBlock, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _91.ResponseBeginBlock;
            fromPartial(object: Partial<_91.ResponseBeginBlock>): _91.ResponseBeginBlock;
        };
        ResponseCheckTx: {
            encode(message: _91.ResponseCheckTx, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _91.ResponseCheckTx;
            fromPartial(object: Partial<_91.ResponseCheckTx>): _91.ResponseCheckTx;
        };
        ResponseDeliverTx: {
            encode(message: _91.ResponseDeliverTx, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _91.ResponseDeliverTx;
            fromPartial(object: Partial<_91.ResponseDeliverTx>): _91.ResponseDeliverTx;
        };
        ResponseEndBlock: {
            encode(message: _91.ResponseEndBlock, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _91.ResponseEndBlock;
            fromPartial(object: Partial<_91.ResponseEndBlock>): _91.ResponseEndBlock;
        };
        ResponseCommit: {
            encode(message: _91.ResponseCommit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _91.ResponseCommit;
            fromPartial(object: Partial<_91.ResponseCommit>): _91.ResponseCommit;
        };
        ResponseListSnapshots: {
            encode(message: _91.ResponseListSnapshots, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _91.ResponseListSnapshots;
            fromPartial(object: Partial<_91.ResponseListSnapshots>): _91.ResponseListSnapshots;
        };
        ResponseOfferSnapshot: {
            encode(message: _91.ResponseOfferSnapshot, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _91.ResponseOfferSnapshot;
            fromPartial(object: Partial<_91.ResponseOfferSnapshot>): _91.ResponseOfferSnapshot;
        };
        ResponseLoadSnapshotChunk: {
            encode(message: _91.ResponseLoadSnapshotChunk, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _91.ResponseLoadSnapshotChunk;
            fromPartial(object: Partial<_91.ResponseLoadSnapshotChunk>): _91.ResponseLoadSnapshotChunk;
        };
        ResponseApplySnapshotChunk: {
            encode(message: _91.ResponseApplySnapshotChunk, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _91.ResponseApplySnapshotChunk;
            fromPartial(object: Partial<_91.ResponseApplySnapshotChunk>): _91.ResponseApplySnapshotChunk;
        };
        ConsensusParams: {
            encode(message: _91.ConsensusParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _91.ConsensusParams;
            fromPartial(object: Partial<_91.ConsensusParams>): _91.ConsensusParams;
        };
        BlockParams: {
            encode(message: _91.BlockParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _91.BlockParams;
            fromPartial(object: Partial<_91.BlockParams>): _91.BlockParams;
        };
        LastCommitInfo: {
            encode(message: _91.LastCommitInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _91.LastCommitInfo;
            fromPartial(object: Partial<_91.LastCommitInfo>): _91.LastCommitInfo;
        };
        Event: {
            encode(message: _91.Event, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _91.Event;
            fromPartial(object: Partial<_91.Event>): _91.Event;
        };
        EventAttribute: {
            encode(message: _91.EventAttribute, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _91.EventAttribute;
            fromPartial(object: Partial<_91.EventAttribute>): _91.EventAttribute;
        };
        TxResult: {
            encode(message: _91.TxResult, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _91.TxResult;
            fromPartial(object: Partial<_91.TxResult>): _91.TxResult;
        };
        Validator: {
            encode(message: _91.Validator, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _91.Validator;
            fromPartial(object: Partial<_91.Validator>): _91.Validator;
        };
        ValidatorUpdate: {
            encode(message: _91.ValidatorUpdate, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _91.ValidatorUpdate;
            fromPartial(object: Partial<_91.ValidatorUpdate>): _91.ValidatorUpdate;
        };
        VoteInfo: {
            encode(message: _91.VoteInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _91.VoteInfo;
            fromPartial(object: Partial<_91.VoteInfo>): _91.VoteInfo;
        };
        Evidence: {
            encode(message: _91.Evidence, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _91.Evidence;
            fromPartial(object: Partial<_91.Evidence>): _91.Evidence;
        };
        Snapshot: {
            encode(message: _91.Snapshot, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _91.Snapshot;
            fromPartial(object: Partial<_91.Snapshot>): _91.Snapshot;
        };
    };
    const crypto: {
        Proof: {
            encode(message: _93.Proof, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _93.Proof;
            fromPartial(object: Partial<_93.Proof>): _93.Proof;
        };
        ValueOp: {
            encode(message: _93.ValueOp, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _93.ValueOp;
            fromPartial(object: Partial<_93.ValueOp>): _93.ValueOp;
        };
        DominoOp: {
            encode(message: _93.DominoOp, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _93.DominoOp;
            fromPartial(object: Partial<_93.DominoOp>): _93.DominoOp;
        };
        ProofOp: {
            encode(message: _93.ProofOp, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _93.ProofOp;
            fromPartial(object: Partial<_93.ProofOp>): _93.ProofOp;
        };
        ProofOps: {
            encode(message: _93.ProofOps, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _93.ProofOps;
            fromPartial(object: Partial<_93.ProofOps>): _93.ProofOps;
        };
        PublicKey: {
            encode(message: _92.PublicKey, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _92.PublicKey;
            fromPartial(object: Partial<_92.PublicKey>): _92.PublicKey;
        };
    };
    namespace libs {
        const bits: {
            BitArray: {
                encode(message: _94.BitArray, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _94.BitArray;
                fromPartial(object: Partial<_94.BitArray>): _94.BitArray;
            };
        };
    }
    const p2p: {
        NetAddress: {
            encode(message: _95.NetAddress, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _95.NetAddress;
            fromPartial(object: Partial<_95.NetAddress>): _95.NetAddress;
        };
        ProtocolVersion: {
            encode(message: _95.ProtocolVersion, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _95.ProtocolVersion;
            fromPartial(object: Partial<_95.ProtocolVersion>): _95.ProtocolVersion;
        };
        DefaultNodeInfo: {
            encode(message: _95.DefaultNodeInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _95.DefaultNodeInfo;
            fromPartial(object: Partial<_95.DefaultNodeInfo>): _95.DefaultNodeInfo;
        };
        DefaultNodeInfoOther: {
            encode(message: _95.DefaultNodeInfoOther, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _95.DefaultNodeInfoOther;
            fromPartial(object: Partial<_95.DefaultNodeInfoOther>): _95.DefaultNodeInfoOther;
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
        Block: {
            encode(message: _96.Block, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _96.Block;
            fromPartial(object: Partial<_96.Block>): _96.Block;
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
