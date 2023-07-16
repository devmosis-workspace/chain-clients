import * as _120 from "./abci/types";
import * as _121 from "./crypto/keys";
import * as _122 from "./crypto/proof";
import * as _123 from "./libs/bits/types";
import * as _124 from "./p2p/types";
import * as _125 from "./types/block";
import * as _126 from "./types/evidence";
import * as _127 from "./types/params";
import * as _128 from "./types/types";
import * as _129 from "./types/validator";
import * as _130 from "./version/types";
export declare namespace tendermint {
    const abci: {
        checkTxTypeFromJSON(object: any): _120.CheckTxType;
        checkTxTypeToJSON(object: _120.CheckTxType): string;
        responseOfferSnapshot_ResultFromJSON(object: any): _120.ResponseOfferSnapshot_Result;
        responseOfferSnapshot_ResultToJSON(object: _120.ResponseOfferSnapshot_Result): string;
        responseApplySnapshotChunk_ResultFromJSON(object: any): _120.ResponseApplySnapshotChunk_Result;
        responseApplySnapshotChunk_ResultToJSON(object: _120.ResponseApplySnapshotChunk_Result): string;
        evidenceTypeFromJSON(object: any): _120.EvidenceType;
        evidenceTypeToJSON(object: _120.EvidenceType): string;
        CheckTxType: typeof _120.CheckTxType;
        CheckTxTypeSDKType: typeof _120.CheckTxType;
        ResponseOfferSnapshot_Result: typeof _120.ResponseOfferSnapshot_Result;
        ResponseOfferSnapshot_ResultSDKType: typeof _120.ResponseOfferSnapshot_Result;
        ResponseApplySnapshotChunk_Result: typeof _120.ResponseApplySnapshotChunk_Result;
        ResponseApplySnapshotChunk_ResultSDKType: typeof _120.ResponseApplySnapshotChunk_Result;
        EvidenceType: typeof _120.EvidenceType;
        EvidenceTypeSDKType: typeof _120.EvidenceType;
        Request: {
            encode(message: _120.Request, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _120.Request;
            fromPartial(object: Partial<_120.Request>): _120.Request;
        };
        RequestEcho: {
            encode(message: _120.RequestEcho, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _120.RequestEcho;
            fromPartial(object: Partial<_120.RequestEcho>): _120.RequestEcho;
        };
        RequestFlush: {
            encode(_: _120.RequestFlush, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(_: any): _120.RequestFlush;
            fromPartial(_: Partial<_120.RequestFlush>): _120.RequestFlush;
        };
        RequestInfo: {
            encode(message: _120.RequestInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _120.RequestInfo;
            fromPartial(object: Partial<_120.RequestInfo>): _120.RequestInfo;
        };
        RequestSetOption: {
            encode(message: _120.RequestSetOption, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _120.RequestSetOption;
            fromPartial(object: Partial<_120.RequestSetOption>): _120.RequestSetOption;
        };
        RequestInitChain: {
            encode(message: _120.RequestInitChain, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _120.RequestInitChain;
            fromPartial(object: Partial<_120.RequestInitChain>): _120.RequestInitChain;
        };
        RequestQuery: {
            encode(message: _120.RequestQuery, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _120.RequestQuery;
            fromPartial(object: Partial<_120.RequestQuery>): _120.RequestQuery;
        };
        RequestBeginBlock: {
            encode(message: _120.RequestBeginBlock, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _120.RequestBeginBlock;
            fromPartial(object: Partial<_120.RequestBeginBlock>): _120.RequestBeginBlock;
        };
        RequestCheckTx: {
            encode(message: _120.RequestCheckTx, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _120.RequestCheckTx;
            fromPartial(object: Partial<_120.RequestCheckTx>): _120.RequestCheckTx;
        };
        RequestDeliverTx: {
            encode(message: _120.RequestDeliverTx, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _120.RequestDeliverTx;
            fromPartial(object: Partial<_120.RequestDeliverTx>): _120.RequestDeliverTx;
        };
        RequestEndBlock: {
            encode(message: _120.RequestEndBlock, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _120.RequestEndBlock;
            fromPartial(object: Partial<_120.RequestEndBlock>): _120.RequestEndBlock;
        };
        RequestCommit: {
            encode(_: _120.RequestCommit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(_: any): _120.RequestCommit;
            fromPartial(_: Partial<_120.RequestCommit>): _120.RequestCommit;
        };
        RequestListSnapshots: {
            encode(_: _120.RequestListSnapshots, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(_: any): _120.RequestListSnapshots;
            fromPartial(_: Partial<_120.RequestListSnapshots>): _120.RequestListSnapshots;
        };
        RequestOfferSnapshot: {
            encode(message: _120.RequestOfferSnapshot, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _120.RequestOfferSnapshot;
            fromPartial(object: Partial<_120.RequestOfferSnapshot>): _120.RequestOfferSnapshot;
        };
        RequestLoadSnapshotChunk: {
            encode(message: _120.RequestLoadSnapshotChunk, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _120.RequestLoadSnapshotChunk;
            fromPartial(object: Partial<_120.RequestLoadSnapshotChunk>): _120.RequestLoadSnapshotChunk;
        };
        RequestApplySnapshotChunk: {
            encode(message: _120.RequestApplySnapshotChunk, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _120.RequestApplySnapshotChunk;
            fromPartial(object: Partial<_120.RequestApplySnapshotChunk>): _120.RequestApplySnapshotChunk;
        };
        Response: {
            encode(message: _120.Response, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _120.Response;
            fromPartial(object: Partial<_120.Response>): _120.Response;
        };
        ResponseException: {
            encode(message: _120.ResponseException, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _120.ResponseException;
            fromPartial(object: Partial<_120.ResponseException>): _120.ResponseException;
        };
        ResponseEcho: {
            encode(message: _120.ResponseEcho, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _120.ResponseEcho;
            fromPartial(object: Partial<_120.ResponseEcho>): _120.ResponseEcho;
        };
        ResponseFlush: {
            encode(_: _120.ResponseFlush, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(_: any): _120.ResponseFlush;
            fromPartial(_: Partial<_120.ResponseFlush>): _120.ResponseFlush;
        };
        ResponseInfo: {
            encode(message: _120.ResponseInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _120.ResponseInfo;
            fromPartial(object: Partial<_120.ResponseInfo>): _120.ResponseInfo;
        };
        ResponseSetOption: {
            encode(message: _120.ResponseSetOption, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _120.ResponseSetOption;
            fromPartial(object: Partial<_120.ResponseSetOption>): _120.ResponseSetOption;
        };
        ResponseInitChain: {
            encode(message: _120.ResponseInitChain, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _120.ResponseInitChain;
            fromPartial(object: Partial<_120.ResponseInitChain>): _120.ResponseInitChain;
        };
        ResponseQuery: {
            encode(message: _120.ResponseQuery, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _120.ResponseQuery;
            fromPartial(object: Partial<_120.ResponseQuery>): _120.ResponseQuery;
        };
        ResponseBeginBlock: {
            encode(message: _120.ResponseBeginBlock, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _120.ResponseBeginBlock;
            fromPartial(object: Partial<_120.ResponseBeginBlock>): _120.ResponseBeginBlock;
        };
        ResponseCheckTx: {
            encode(message: _120.ResponseCheckTx, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _120.ResponseCheckTx;
            fromPartial(object: Partial<_120.ResponseCheckTx>): _120.ResponseCheckTx;
        };
        ResponseDeliverTx: {
            encode(message: _120.ResponseDeliverTx, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _120.ResponseDeliverTx;
            fromPartial(object: Partial<_120.ResponseDeliverTx>): _120.ResponseDeliverTx;
        };
        ResponseEndBlock: {
            encode(message: _120.ResponseEndBlock, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _120.ResponseEndBlock;
            fromPartial(object: Partial<_120.ResponseEndBlock>): _120.ResponseEndBlock;
        };
        ResponseCommit: {
            encode(message: _120.ResponseCommit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _120.ResponseCommit;
            fromPartial(object: Partial<_120.ResponseCommit>): _120.ResponseCommit;
        };
        ResponseListSnapshots: {
            encode(message: _120.ResponseListSnapshots, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _120.ResponseListSnapshots;
            fromPartial(object: Partial<_120.ResponseListSnapshots>): _120.ResponseListSnapshots;
        };
        ResponseOfferSnapshot: {
            encode(message: _120.ResponseOfferSnapshot, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _120.ResponseOfferSnapshot;
            fromPartial(object: Partial<_120.ResponseOfferSnapshot>): _120.ResponseOfferSnapshot;
        };
        ResponseLoadSnapshotChunk: {
            encode(message: _120.ResponseLoadSnapshotChunk, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _120.ResponseLoadSnapshotChunk;
            fromPartial(object: Partial<_120.ResponseLoadSnapshotChunk>): _120.ResponseLoadSnapshotChunk;
        };
        ResponseApplySnapshotChunk: {
            encode(message: _120.ResponseApplySnapshotChunk, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _120.ResponseApplySnapshotChunk;
            fromPartial(object: Partial<_120.ResponseApplySnapshotChunk>): _120.ResponseApplySnapshotChunk;
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
        LastCommitInfo: {
            encode(message: _120.LastCommitInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _120.LastCommitInfo;
            fromPartial(object: Partial<_120.LastCommitInfo>): _120.LastCommitInfo;
        };
        Event: {
            encode(message: _120.Event, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _120.Event;
            fromPartial(object: Partial<_120.Event>): _120.Event;
        };
        EventAttribute: {
            encode(message: _120.EventAttribute, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _120.EventAttribute;
            fromPartial(object: Partial<_120.EventAttribute>): _120.EventAttribute;
        };
        TxResult: {
            encode(message: _120.TxResult, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _120.TxResult;
            fromPartial(object: Partial<_120.TxResult>): _120.TxResult;
        };
        Validator: {
            encode(message: _120.Validator, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _120.Validator;
            fromPartial(object: Partial<_120.Validator>): _120.Validator;
        };
        ValidatorUpdate: {
            encode(message: _120.ValidatorUpdate, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _120.ValidatorUpdate;
            fromPartial(object: Partial<_120.ValidatorUpdate>): _120.ValidatorUpdate;
        };
        VoteInfo: {
            encode(message: _120.VoteInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _120.VoteInfo;
            fromPartial(object: Partial<_120.VoteInfo>): _120.VoteInfo;
        };
        Evidence: {
            encode(message: _120.Evidence, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _120.Evidence;
            fromPartial(object: Partial<_120.Evidence>): _120.Evidence;
        };
        Snapshot: {
            encode(message: _120.Snapshot, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _120.Snapshot;
            fromPartial(object: Partial<_120.Snapshot>): _120.Snapshot;
        };
    };
    const crypto: {
        Proof: {
            encode(message: _122.Proof, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _122.Proof;
            fromPartial(object: Partial<_122.Proof>): _122.Proof;
        };
        ValueOp: {
            encode(message: _122.ValueOp, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _122.ValueOp;
            fromPartial(object: Partial<_122.ValueOp>): _122.ValueOp;
        };
        DominoOp: {
            encode(message: _122.DominoOp, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _122.DominoOp;
            fromPartial(object: Partial<_122.DominoOp>): _122.DominoOp;
        };
        ProofOp: {
            encode(message: _122.ProofOp, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _122.ProofOp;
            fromPartial(object: Partial<_122.ProofOp>): _122.ProofOp;
        };
        ProofOps: {
            encode(message: _122.ProofOps, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _122.ProofOps;
            fromPartial(object: Partial<_122.ProofOps>): _122.ProofOps;
        };
        PublicKey: {
            encode(message: _121.PublicKey, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _121.PublicKey;
            fromPartial(object: Partial<_121.PublicKey>): _121.PublicKey;
        };
    };
    namespace libs {
        const bits: {
            BitArray: {
                encode(message: _123.BitArray, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _123.BitArray;
                fromPartial(object: Partial<_123.BitArray>): _123.BitArray;
            };
        };
    }
    const p2p: {
        NetAddress: {
            encode(message: _124.NetAddress, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _124.NetAddress;
            fromPartial(object: Partial<_124.NetAddress>): _124.NetAddress;
        };
        ProtocolVersion: {
            encode(message: _124.ProtocolVersion, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _124.ProtocolVersion;
            fromPartial(object: Partial<_124.ProtocolVersion>): _124.ProtocolVersion;
        };
        DefaultNodeInfo: {
            encode(message: _124.DefaultNodeInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _124.DefaultNodeInfo;
            fromPartial(object: Partial<_124.DefaultNodeInfo>): _124.DefaultNodeInfo;
        };
        DefaultNodeInfoOther: {
            encode(message: _124.DefaultNodeInfoOther, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _124.DefaultNodeInfoOther;
            fromPartial(object: Partial<_124.DefaultNodeInfoOther>): _124.DefaultNodeInfoOther;
        };
    };
    const types: {
        ValidatorSet: {
            encode(message: _129.ValidatorSet, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _129.ValidatorSet;
            fromPartial(object: Partial<_129.ValidatorSet>): _129.ValidatorSet;
        };
        Validator: {
            encode(message: _129.Validator, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _129.Validator;
            fromPartial(object: Partial<_129.Validator>): _129.Validator;
        };
        SimpleValidator: {
            encode(message: _129.SimpleValidator, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _129.SimpleValidator;
            fromPartial(object: Partial<_129.SimpleValidator>): _129.SimpleValidator;
        };
        blockIDFlagFromJSON(object: any): _128.BlockIDFlag;
        blockIDFlagToJSON(object: _128.BlockIDFlag): string;
        signedMsgTypeFromJSON(object: any): _128.SignedMsgType;
        signedMsgTypeToJSON(object: _128.SignedMsgType): string;
        BlockIDFlag: typeof _128.BlockIDFlag;
        BlockIDFlagSDKType: typeof _128.BlockIDFlag;
        SignedMsgType: typeof _128.SignedMsgType;
        SignedMsgTypeSDKType: typeof _128.SignedMsgType;
        PartSetHeader: {
            encode(message: _128.PartSetHeader, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _128.PartSetHeader;
            fromPartial(object: Partial<_128.PartSetHeader>): _128.PartSetHeader;
        };
        Part: {
            encode(message: _128.Part, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _128.Part;
            fromPartial(object: Partial<_128.Part>): _128.Part;
        };
        BlockID: {
            encode(message: _128.BlockID, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _128.BlockID;
            fromPartial(object: Partial<_128.BlockID>): _128.BlockID;
        };
        Header: {
            encode(message: _128.Header, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _128.Header;
            fromPartial(object: Partial<_128.Header>): _128.Header;
        };
        Data: {
            encode(message: _128.Data, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _128.Data;
            fromPartial(object: Partial<_128.Data>): _128.Data;
        };
        Vote: {
            encode(message: _128.Vote, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _128.Vote;
            fromPartial(object: Partial<_128.Vote>): _128.Vote;
        };
        Commit: {
            encode(message: _128.Commit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _128.Commit;
            fromPartial(object: Partial<_128.Commit>): _128.Commit;
        };
        CommitSig: {
            encode(message: _128.CommitSig, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _128.CommitSig;
            fromPartial(object: Partial<_128.CommitSig>): _128.CommitSig;
        };
        Proposal: {
            encode(message: _128.Proposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _128.Proposal;
            fromPartial(object: Partial<_128.Proposal>): _128.Proposal;
        };
        SignedHeader: {
            encode(message: _128.SignedHeader, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _128.SignedHeader;
            fromPartial(object: Partial<_128.SignedHeader>): _128.SignedHeader;
        };
        LightBlock: {
            encode(message: _128.LightBlock, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _128.LightBlock;
            fromPartial(object: Partial<_128.LightBlock>): _128.LightBlock;
        };
        BlockMeta: {
            encode(message: _128.BlockMeta, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _128.BlockMeta;
            fromPartial(object: Partial<_128.BlockMeta>): _128.BlockMeta;
        };
        TxProof: {
            encode(message: _128.TxProof, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _128.TxProof;
            fromPartial(object: Partial<_128.TxProof>): _128.TxProof;
        };
        ConsensusParams: {
            encode(message: _127.ConsensusParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _127.ConsensusParams;
            fromPartial(object: Partial<_127.ConsensusParams>): _127.ConsensusParams;
        };
        BlockParams: {
            encode(message: _127.BlockParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _127.BlockParams;
            fromPartial(object: Partial<_127.BlockParams>): _127.BlockParams;
        };
        EvidenceParams: {
            encode(message: _127.EvidenceParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _127.EvidenceParams;
            fromPartial(object: Partial<_127.EvidenceParams>): _127.EvidenceParams;
        };
        ValidatorParams: {
            encode(message: _127.ValidatorParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _127.ValidatorParams;
            fromPartial(object: Partial<_127.ValidatorParams>): _127.ValidatorParams;
        };
        VersionParams: {
            encode(message: _127.VersionParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _127.VersionParams;
            fromPartial(object: Partial<_127.VersionParams>): _127.VersionParams;
        };
        HashedParams: {
            encode(message: _127.HashedParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _127.HashedParams;
            fromPartial(object: Partial<_127.HashedParams>): _127.HashedParams;
        };
        Evidence: {
            encode(message: _126.Evidence, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _126.Evidence;
            fromPartial(object: Partial<_126.Evidence>): _126.Evidence;
        };
        DuplicateVoteEvidence: {
            encode(message: _126.DuplicateVoteEvidence, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _126.DuplicateVoteEvidence;
            fromPartial(object: Partial<_126.DuplicateVoteEvidence>): _126.DuplicateVoteEvidence;
        };
        LightClientAttackEvidence: {
            encode(message: _126.LightClientAttackEvidence, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _126.LightClientAttackEvidence;
            fromPartial(object: Partial<_126.LightClientAttackEvidence>): _126.LightClientAttackEvidence;
        };
        EvidenceList: {
            encode(message: _126.EvidenceList, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _126.EvidenceList;
            fromPartial(object: Partial<_126.EvidenceList>): _126.EvidenceList;
        };
        Block: {
            encode(message: _125.Block, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _125.Block;
            fromPartial(object: Partial<_125.Block>): _125.Block;
        };
    };
    const version: {
        App: {
            encode(message: _130.App, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _130.App;
            fromPartial(object: Partial<_130.App>): _130.App;
        };
        Consensus: {
            encode(message: _130.Consensus, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _130.Consensus;
            fromPartial(object: Partial<_130.Consensus>): _130.Consensus;
        };
    };
}
