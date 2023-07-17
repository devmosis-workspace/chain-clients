import * as _123 from "./abci/types";
import * as _124 from "./crypto/keys";
import * as _125 from "./crypto/proof";
import * as _126 from "./libs/bits/types";
import * as _127 from "./p2p/types";
import * as _128 from "./types/block";
import * as _129 from "./types/evidence";
import * as _130 from "./types/params";
import * as _131 from "./types/types";
import * as _132 from "./types/validator";
import * as _133 from "./version/types";
export declare namespace tendermint {
    const abci: {
        checkTxTypeFromJSON(object: any): _123.CheckTxType;
        checkTxTypeToJSON(object: _123.CheckTxType): string;
        responseOfferSnapshot_ResultFromJSON(object: any): _123.ResponseOfferSnapshot_Result;
        responseOfferSnapshot_ResultToJSON(object: _123.ResponseOfferSnapshot_Result): string;
        responseApplySnapshotChunk_ResultFromJSON(object: any): _123.ResponseApplySnapshotChunk_Result;
        responseApplySnapshotChunk_ResultToJSON(object: _123.ResponseApplySnapshotChunk_Result): string;
        evidenceTypeFromJSON(object: any): _123.EvidenceType;
        evidenceTypeToJSON(object: _123.EvidenceType): string;
        CheckTxType: typeof _123.CheckTxType;
        CheckTxTypeSDKType: typeof _123.CheckTxType;
        ResponseOfferSnapshot_Result: typeof _123.ResponseOfferSnapshot_Result;
        ResponseOfferSnapshot_ResultSDKType: typeof _123.ResponseOfferSnapshot_Result;
        ResponseApplySnapshotChunk_Result: typeof _123.ResponseApplySnapshotChunk_Result;
        ResponseApplySnapshotChunk_ResultSDKType: typeof _123.ResponseApplySnapshotChunk_Result;
        EvidenceType: typeof _123.EvidenceType;
        EvidenceTypeSDKType: typeof _123.EvidenceType;
        Request: {
            encode(message: _123.Request, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _123.Request;
            fromPartial(object: Partial<_123.Request>): _123.Request;
        };
        RequestEcho: {
            encode(message: _123.RequestEcho, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _123.RequestEcho;
            fromPartial(object: Partial<_123.RequestEcho>): _123.RequestEcho;
        };
        RequestFlush: {
            encode(_: _123.RequestFlush, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(_: any): _123.RequestFlush;
            fromPartial(_: Partial<_123.RequestFlush>): _123.RequestFlush;
        };
        RequestInfo: {
            encode(message: _123.RequestInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _123.RequestInfo;
            fromPartial(object: Partial<_123.RequestInfo>): _123.RequestInfo;
        };
        RequestSetOption: {
            encode(message: _123.RequestSetOption, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _123.RequestSetOption;
            fromPartial(object: Partial<_123.RequestSetOption>): _123.RequestSetOption;
        };
        RequestInitChain: {
            encode(message: _123.RequestInitChain, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _123.RequestInitChain;
            fromPartial(object: Partial<_123.RequestInitChain>): _123.RequestInitChain;
        };
        RequestQuery: {
            encode(message: _123.RequestQuery, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _123.RequestQuery;
            fromPartial(object: Partial<_123.RequestQuery>): _123.RequestQuery;
        };
        RequestBeginBlock: {
            encode(message: _123.RequestBeginBlock, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _123.RequestBeginBlock;
            fromPartial(object: Partial<_123.RequestBeginBlock>): _123.RequestBeginBlock;
        };
        RequestCheckTx: {
            encode(message: _123.RequestCheckTx, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _123.RequestCheckTx;
            fromPartial(object: Partial<_123.RequestCheckTx>): _123.RequestCheckTx;
        };
        RequestDeliverTx: {
            encode(message: _123.RequestDeliverTx, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _123.RequestDeliverTx;
            fromPartial(object: Partial<_123.RequestDeliverTx>): _123.RequestDeliverTx;
        };
        RequestEndBlock: {
            encode(message: _123.RequestEndBlock, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _123.RequestEndBlock;
            fromPartial(object: Partial<_123.RequestEndBlock>): _123.RequestEndBlock;
        };
        RequestCommit: {
            encode(_: _123.RequestCommit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(_: any): _123.RequestCommit;
            fromPartial(_: Partial<_123.RequestCommit>): _123.RequestCommit;
        };
        RequestListSnapshots: {
            encode(_: _123.RequestListSnapshots, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(_: any): _123.RequestListSnapshots;
            fromPartial(_: Partial<_123.RequestListSnapshots>): _123.RequestListSnapshots;
        };
        RequestOfferSnapshot: {
            encode(message: _123.RequestOfferSnapshot, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _123.RequestOfferSnapshot;
            fromPartial(object: Partial<_123.RequestOfferSnapshot>): _123.RequestOfferSnapshot;
        };
        RequestLoadSnapshotChunk: {
            encode(message: _123.RequestLoadSnapshotChunk, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _123.RequestLoadSnapshotChunk;
            fromPartial(object: Partial<_123.RequestLoadSnapshotChunk>): _123.RequestLoadSnapshotChunk;
        };
        RequestApplySnapshotChunk: {
            encode(message: _123.RequestApplySnapshotChunk, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _123.RequestApplySnapshotChunk;
            fromPartial(object: Partial<_123.RequestApplySnapshotChunk>): _123.RequestApplySnapshotChunk;
        };
        Response: {
            encode(message: _123.Response, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _123.Response;
            fromPartial(object: Partial<_123.Response>): _123.Response;
        };
        ResponseException: {
            encode(message: _123.ResponseException, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _123.ResponseException;
            fromPartial(object: Partial<_123.ResponseException>): _123.ResponseException;
        };
        ResponseEcho: {
            encode(message: _123.ResponseEcho, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _123.ResponseEcho;
            fromPartial(object: Partial<_123.ResponseEcho>): _123.ResponseEcho;
        };
        ResponseFlush: {
            encode(_: _123.ResponseFlush, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(_: any): _123.ResponseFlush;
            fromPartial(_: Partial<_123.ResponseFlush>): _123.ResponseFlush;
        };
        ResponseInfo: {
            encode(message: _123.ResponseInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _123.ResponseInfo;
            fromPartial(object: Partial<_123.ResponseInfo>): _123.ResponseInfo;
        };
        ResponseSetOption: {
            encode(message: _123.ResponseSetOption, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _123.ResponseSetOption;
            fromPartial(object: Partial<_123.ResponseSetOption>): _123.ResponseSetOption;
        };
        ResponseInitChain: {
            encode(message: _123.ResponseInitChain, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _123.ResponseInitChain;
            fromPartial(object: Partial<_123.ResponseInitChain>): _123.ResponseInitChain;
        };
        ResponseQuery: {
            encode(message: _123.ResponseQuery, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _123.ResponseQuery;
            fromPartial(object: Partial<_123.ResponseQuery>): _123.ResponseQuery;
        };
        ResponseBeginBlock: {
            encode(message: _123.ResponseBeginBlock, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _123.ResponseBeginBlock;
            fromPartial(object: Partial<_123.ResponseBeginBlock>): _123.ResponseBeginBlock;
        };
        ResponseCheckTx: {
            encode(message: _123.ResponseCheckTx, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _123.ResponseCheckTx;
            fromPartial(object: Partial<_123.ResponseCheckTx>): _123.ResponseCheckTx;
        };
        ResponseDeliverTx: {
            encode(message: _123.ResponseDeliverTx, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _123.ResponseDeliverTx;
            fromPartial(object: Partial<_123.ResponseDeliverTx>): _123.ResponseDeliverTx;
        };
        ResponseEndBlock: {
            encode(message: _123.ResponseEndBlock, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _123.ResponseEndBlock;
            fromPartial(object: Partial<_123.ResponseEndBlock>): _123.ResponseEndBlock;
        };
        ResponseCommit: {
            encode(message: _123.ResponseCommit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _123.ResponseCommit;
            fromPartial(object: Partial<_123.ResponseCommit>): _123.ResponseCommit;
        };
        ResponseListSnapshots: {
            encode(message: _123.ResponseListSnapshots, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _123.ResponseListSnapshots;
            fromPartial(object: Partial<_123.ResponseListSnapshots>): _123.ResponseListSnapshots;
        };
        ResponseOfferSnapshot: {
            encode(message: _123.ResponseOfferSnapshot, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _123.ResponseOfferSnapshot;
            fromPartial(object: Partial<_123.ResponseOfferSnapshot>): _123.ResponseOfferSnapshot;
        };
        ResponseLoadSnapshotChunk: {
            encode(message: _123.ResponseLoadSnapshotChunk, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _123.ResponseLoadSnapshotChunk;
            fromPartial(object: Partial<_123.ResponseLoadSnapshotChunk>): _123.ResponseLoadSnapshotChunk;
        };
        ResponseApplySnapshotChunk: {
            encode(message: _123.ResponseApplySnapshotChunk, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _123.ResponseApplySnapshotChunk;
            fromPartial(object: Partial<_123.ResponseApplySnapshotChunk>): _123.ResponseApplySnapshotChunk;
        };
        ConsensusParams: {
            encode(message: _123.ConsensusParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _123.ConsensusParams;
            fromPartial(object: Partial<_123.ConsensusParams>): _123.ConsensusParams;
        };
        BlockParams: {
            encode(message: _123.BlockParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _123.BlockParams;
            fromPartial(object: Partial<_123.BlockParams>): _123.BlockParams;
        };
        LastCommitInfo: {
            encode(message: _123.LastCommitInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _123.LastCommitInfo;
            fromPartial(object: Partial<_123.LastCommitInfo>): _123.LastCommitInfo;
        };
        Event: {
            encode(message: _123.Event, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _123.Event;
            fromPartial(object: Partial<_123.Event>): _123.Event;
        };
        EventAttribute: {
            encode(message: _123.EventAttribute, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _123.EventAttribute;
            fromPartial(object: Partial<_123.EventAttribute>): _123.EventAttribute;
        };
        TxResult: {
            encode(message: _123.TxResult, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _123.TxResult;
            fromPartial(object: Partial<_123.TxResult>): _123.TxResult;
        };
        Validator: {
            encode(message: _123.Validator, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _123.Validator;
            fromPartial(object: Partial<_123.Validator>): _123.Validator;
        };
        ValidatorUpdate: {
            encode(message: _123.ValidatorUpdate, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _123.ValidatorUpdate;
            fromPartial(object: Partial<_123.ValidatorUpdate>): _123.ValidatorUpdate;
        };
        VoteInfo: {
            encode(message: _123.VoteInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _123.VoteInfo;
            fromPartial(object: Partial<_123.VoteInfo>): _123.VoteInfo;
        };
        Evidence: {
            encode(message: _123.Evidence, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _123.Evidence;
            fromPartial(object: Partial<_123.Evidence>): _123.Evidence;
        };
        Snapshot: {
            encode(message: _123.Snapshot, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _123.Snapshot;
            fromPartial(object: Partial<_123.Snapshot>): _123.Snapshot;
        };
    };
    const crypto: {
        Proof: {
            encode(message: _125.Proof, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _125.Proof;
            fromPartial(object: Partial<_125.Proof>): _125.Proof;
        };
        ValueOp: {
            encode(message: _125.ValueOp, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _125.ValueOp;
            fromPartial(object: Partial<_125.ValueOp>): _125.ValueOp;
        };
        DominoOp: {
            encode(message: _125.DominoOp, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _125.DominoOp;
            fromPartial(object: Partial<_125.DominoOp>): _125.DominoOp;
        };
        ProofOp: {
            encode(message: _125.ProofOp, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _125.ProofOp;
            fromPartial(object: Partial<_125.ProofOp>): _125.ProofOp;
        };
        ProofOps: {
            encode(message: _125.ProofOps, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _125.ProofOps;
            fromPartial(object: Partial<_125.ProofOps>): _125.ProofOps;
        };
        PublicKey: {
            encode(message: _124.PublicKey, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _124.PublicKey;
            fromPartial(object: Partial<_124.PublicKey>): _124.PublicKey;
        };
    };
    namespace libs {
        const bits: {
            BitArray: {
                encode(message: _126.BitArray, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _126.BitArray;
                fromPartial(object: Partial<_126.BitArray>): _126.BitArray;
            };
        };
    }
    const p2p: {
        NetAddress: {
            encode(message: _127.NetAddress, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _127.NetAddress;
            fromPartial(object: Partial<_127.NetAddress>): _127.NetAddress;
        };
        ProtocolVersion: {
            encode(message: _127.ProtocolVersion, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _127.ProtocolVersion;
            fromPartial(object: Partial<_127.ProtocolVersion>): _127.ProtocolVersion;
        };
        DefaultNodeInfo: {
            encode(message: _127.DefaultNodeInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _127.DefaultNodeInfo;
            fromPartial(object: Partial<_127.DefaultNodeInfo>): _127.DefaultNodeInfo;
        };
        DefaultNodeInfoOther: {
            encode(message: _127.DefaultNodeInfoOther, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _127.DefaultNodeInfoOther;
            fromPartial(object: Partial<_127.DefaultNodeInfoOther>): _127.DefaultNodeInfoOther;
        };
    };
    const types: {
        ValidatorSet: {
            encode(message: _132.ValidatorSet, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _132.ValidatorSet;
            fromPartial(object: Partial<_132.ValidatorSet>): _132.ValidatorSet;
        };
        Validator: {
            encode(message: _132.Validator, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _132.Validator;
            fromPartial(object: Partial<_132.Validator>): _132.Validator;
        };
        SimpleValidator: {
            encode(message: _132.SimpleValidator, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _132.SimpleValidator;
            fromPartial(object: Partial<_132.SimpleValidator>): _132.SimpleValidator;
        };
        blockIDFlagFromJSON(object: any): _131.BlockIDFlag;
        blockIDFlagToJSON(object: _131.BlockIDFlag): string;
        signedMsgTypeFromJSON(object: any): _131.SignedMsgType;
        signedMsgTypeToJSON(object: _131.SignedMsgType): string;
        BlockIDFlag: typeof _131.BlockIDFlag;
        BlockIDFlagSDKType: typeof _131.BlockIDFlag;
        SignedMsgType: typeof _131.SignedMsgType;
        SignedMsgTypeSDKType: typeof _131.SignedMsgType;
        PartSetHeader: {
            encode(message: _131.PartSetHeader, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _131.PartSetHeader;
            fromPartial(object: Partial<_131.PartSetHeader>): _131.PartSetHeader;
        };
        Part: {
            encode(message: _131.Part, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _131.Part;
            fromPartial(object: Partial<_131.Part>): _131.Part;
        };
        BlockID: {
            encode(message: _131.BlockID, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _131.BlockID;
            fromPartial(object: Partial<_131.BlockID>): _131.BlockID;
        };
        Header: {
            encode(message: _131.Header, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _131.Header;
            fromPartial(object: Partial<_131.Header>): _131.Header;
        };
        Data: {
            encode(message: _131.Data, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _131.Data;
            fromPartial(object: Partial<_131.Data>): _131.Data;
        };
        Vote: {
            encode(message: _131.Vote, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _131.Vote;
            fromPartial(object: Partial<_131.Vote>): _131.Vote;
        };
        Commit: {
            encode(message: _131.Commit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _131.Commit;
            fromPartial(object: Partial<_131.Commit>): _131.Commit;
        };
        CommitSig: {
            encode(message: _131.CommitSig, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _131.CommitSig;
            fromPartial(object: Partial<_131.CommitSig>): _131.CommitSig;
        };
        Proposal: {
            encode(message: _131.Proposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _131.Proposal;
            fromPartial(object: Partial<_131.Proposal>): _131.Proposal;
        };
        SignedHeader: {
            encode(message: _131.SignedHeader, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _131.SignedHeader;
            fromPartial(object: Partial<_131.SignedHeader>): _131.SignedHeader;
        };
        LightBlock: {
            encode(message: _131.LightBlock, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _131.LightBlock;
            fromPartial(object: Partial<_131.LightBlock>): _131.LightBlock;
        };
        BlockMeta: {
            encode(message: _131.BlockMeta, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _131.BlockMeta;
            fromPartial(object: Partial<_131.BlockMeta>): _131.BlockMeta;
        };
        TxProof: {
            encode(message: _131.TxProof, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _131.TxProof;
            fromPartial(object: Partial<_131.TxProof>): _131.TxProof;
        };
        ConsensusParams: {
            encode(message: _130.ConsensusParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _130.ConsensusParams;
            fromPartial(object: Partial<_130.ConsensusParams>): _130.ConsensusParams;
        };
        BlockParams: {
            encode(message: _130.BlockParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _130.BlockParams;
            fromPartial(object: Partial<_130.BlockParams>): _130.BlockParams;
        };
        EvidenceParams: {
            encode(message: _130.EvidenceParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _130.EvidenceParams;
            fromPartial(object: Partial<_130.EvidenceParams>): _130.EvidenceParams;
        };
        ValidatorParams: {
            encode(message: _130.ValidatorParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _130.ValidatorParams;
            fromPartial(object: Partial<_130.ValidatorParams>): _130.ValidatorParams;
        };
        VersionParams: {
            encode(message: _130.VersionParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _130.VersionParams;
            fromPartial(object: Partial<_130.VersionParams>): _130.VersionParams;
        };
        HashedParams: {
            encode(message: _130.HashedParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _130.HashedParams;
            fromPartial(object: Partial<_130.HashedParams>): _130.HashedParams;
        };
        Evidence: {
            encode(message: _129.Evidence, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _129.Evidence;
            fromPartial(object: Partial<_129.Evidence>): _129.Evidence;
        };
        DuplicateVoteEvidence: {
            encode(message: _129.DuplicateVoteEvidence, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _129.DuplicateVoteEvidence;
            fromPartial(object: Partial<_129.DuplicateVoteEvidence>): _129.DuplicateVoteEvidence;
        };
        LightClientAttackEvidence: {
            encode(message: _129.LightClientAttackEvidence, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _129.LightClientAttackEvidence;
            fromPartial(object: Partial<_129.LightClientAttackEvidence>): _129.LightClientAttackEvidence;
        };
        EvidenceList: {
            encode(message: _129.EvidenceList, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _129.EvidenceList;
            fromPartial(object: Partial<_129.EvidenceList>): _129.EvidenceList;
        };
        Block: {
            encode(message: _128.Block, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _128.Block;
            fromPartial(object: Partial<_128.Block>): _128.Block;
        };
    };
    const version: {
        App: {
            encode(message: _133.App, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _133.App;
            fromPartial(object: Partial<_133.App>): _133.App;
        };
        Consensus: {
            encode(message: _133.Consensus, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _133.Consensus;
            fromPartial(object: Partial<_133.Consensus>): _133.Consensus;
        };
    };
}
