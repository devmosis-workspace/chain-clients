import * as _122 from "./abci/types";
import * as _123 from "./crypto/keys";
import * as _124 from "./crypto/proof";
import * as _125 from "./libs/bits/types";
import * as _126 from "./p2p/types";
import * as _127 from "./types/block";
import * as _128 from "./types/evidence";
import * as _129 from "./types/params";
import * as _130 from "./types/types";
import * as _131 from "./types/validator";
import * as _132 from "./version/types";
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
    const crypto: {
        Proof: {
            encode(message: _124.Proof, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _124.Proof;
            fromPartial(object: Partial<_124.Proof>): _124.Proof;
        };
        ValueOp: {
            encode(message: _124.ValueOp, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _124.ValueOp;
            fromPartial(object: Partial<_124.ValueOp>): _124.ValueOp;
        };
        DominoOp: {
            encode(message: _124.DominoOp, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _124.DominoOp;
            fromPartial(object: Partial<_124.DominoOp>): _124.DominoOp;
        };
        ProofOp: {
            encode(message: _124.ProofOp, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _124.ProofOp;
            fromPartial(object: Partial<_124.ProofOp>): _124.ProofOp;
        };
        ProofOps: {
            encode(message: _124.ProofOps, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _124.ProofOps;
            fromPartial(object: Partial<_124.ProofOps>): _124.ProofOps;
        };
        PublicKey: {
            encode(message: _123.PublicKey, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _123.PublicKey;
            fromPartial(object: Partial<_123.PublicKey>): _123.PublicKey;
        };
    };
    namespace libs {
        const bits: {
            BitArray: {
                encode(message: _125.BitArray, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _125.BitArray;
                fromPartial(object: Partial<_125.BitArray>): _125.BitArray;
            };
        };
    }
    const p2p: {
        NetAddress: {
            encode(message: _126.NetAddress, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _126.NetAddress;
            fromPartial(object: Partial<_126.NetAddress>): _126.NetAddress;
        };
        ProtocolVersion: {
            encode(message: _126.ProtocolVersion, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _126.ProtocolVersion;
            fromPartial(object: Partial<_126.ProtocolVersion>): _126.ProtocolVersion;
        };
        DefaultNodeInfo: {
            encode(message: _126.DefaultNodeInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _126.DefaultNodeInfo;
            fromPartial(object: Partial<_126.DefaultNodeInfo>): _126.DefaultNodeInfo;
        };
        DefaultNodeInfoOther: {
            encode(message: _126.DefaultNodeInfoOther, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _126.DefaultNodeInfoOther;
            fromPartial(object: Partial<_126.DefaultNodeInfoOther>): _126.DefaultNodeInfoOther;
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
        Block: {
            encode(message: _127.Block, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _127.Block;
            fromPartial(object: Partial<_127.Block>): _127.Block;
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
