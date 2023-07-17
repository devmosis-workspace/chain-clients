import * as _119 from "./abci/types";
import * as _120 from "./crypto/keys";
import * as _121 from "./crypto/proof";
import * as _122 from "./libs/bits/types";
import * as _123 from "./p2p/types";
import * as _124 from "./types/block";
import * as _125 from "./types/evidence";
import * as _126 from "./types/params";
import * as _127 from "./types/types";
import * as _128 from "./types/validator";
import * as _129 from "./version/types";
export declare namespace tendermint {
    const abci: {
        checkTxTypeFromJSON(object: any): _119.CheckTxType;
        checkTxTypeToJSON(object: _119.CheckTxType): string;
        responseOfferSnapshot_ResultFromJSON(object: any): _119.ResponseOfferSnapshot_Result;
        responseOfferSnapshot_ResultToJSON(object: _119.ResponseOfferSnapshot_Result): string;
        responseApplySnapshotChunk_ResultFromJSON(object: any): _119.ResponseApplySnapshotChunk_Result;
        responseApplySnapshotChunk_ResultToJSON(object: _119.ResponseApplySnapshotChunk_Result): string;
        evidenceTypeFromJSON(object: any): _119.EvidenceType;
        evidenceTypeToJSON(object: _119.EvidenceType): string;
        CheckTxType: typeof _119.CheckTxType;
        CheckTxTypeSDKType: typeof _119.CheckTxType;
        ResponseOfferSnapshot_Result: typeof _119.ResponseOfferSnapshot_Result;
        ResponseOfferSnapshot_ResultSDKType: typeof _119.ResponseOfferSnapshot_Result;
        ResponseApplySnapshotChunk_Result: typeof _119.ResponseApplySnapshotChunk_Result;
        ResponseApplySnapshotChunk_ResultSDKType: typeof _119.ResponseApplySnapshotChunk_Result;
        EvidenceType: typeof _119.EvidenceType;
        EvidenceTypeSDKType: typeof _119.EvidenceType;
        Request: {
            encode(message: _119.Request, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _119.Request;
            fromPartial(object: Partial<_119.Request>): _119.Request;
        };
        RequestEcho: {
            encode(message: _119.RequestEcho, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _119.RequestEcho;
            fromPartial(object: Partial<_119.RequestEcho>): _119.RequestEcho;
        };
        RequestFlush: {
            encode(_: _119.RequestFlush, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(_: any): _119.RequestFlush;
            fromPartial(_: Partial<_119.RequestFlush>): _119.RequestFlush;
        };
        RequestInfo: {
            encode(message: _119.RequestInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _119.RequestInfo;
            fromPartial(object: Partial<_119.RequestInfo>): _119.RequestInfo;
        };
        RequestSetOption: {
            encode(message: _119.RequestSetOption, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _119.RequestSetOption;
            fromPartial(object: Partial<_119.RequestSetOption>): _119.RequestSetOption;
        };
        RequestInitChain: {
            encode(message: _119.RequestInitChain, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _119.RequestInitChain;
            fromPartial(object: Partial<_119.RequestInitChain>): _119.RequestInitChain;
        };
        RequestQuery: {
            encode(message: _119.RequestQuery, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _119.RequestQuery;
            fromPartial(object: Partial<_119.RequestQuery>): _119.RequestQuery;
        };
        RequestBeginBlock: {
            encode(message: _119.RequestBeginBlock, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _119.RequestBeginBlock;
            fromPartial(object: Partial<_119.RequestBeginBlock>): _119.RequestBeginBlock;
        };
        RequestCheckTx: {
            encode(message: _119.RequestCheckTx, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _119.RequestCheckTx;
            fromPartial(object: Partial<_119.RequestCheckTx>): _119.RequestCheckTx;
        };
        RequestDeliverTx: {
            encode(message: _119.RequestDeliverTx, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _119.RequestDeliverTx;
            fromPartial(object: Partial<_119.RequestDeliverTx>): _119.RequestDeliverTx;
        };
        RequestEndBlock: {
            encode(message: _119.RequestEndBlock, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _119.RequestEndBlock;
            fromPartial(object: Partial<_119.RequestEndBlock>): _119.RequestEndBlock;
        };
        RequestCommit: {
            encode(_: _119.RequestCommit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(_: any): _119.RequestCommit;
            fromPartial(_: Partial<_119.RequestCommit>): _119.RequestCommit;
        };
        RequestListSnapshots: {
            encode(_: _119.RequestListSnapshots, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(_: any): _119.RequestListSnapshots;
            fromPartial(_: Partial<_119.RequestListSnapshots>): _119.RequestListSnapshots;
        };
        RequestOfferSnapshot: {
            encode(message: _119.RequestOfferSnapshot, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _119.RequestOfferSnapshot;
            fromPartial(object: Partial<_119.RequestOfferSnapshot>): _119.RequestOfferSnapshot;
        };
        RequestLoadSnapshotChunk: {
            encode(message: _119.RequestLoadSnapshotChunk, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _119.RequestLoadSnapshotChunk;
            fromPartial(object: Partial<_119.RequestLoadSnapshotChunk>): _119.RequestLoadSnapshotChunk;
        };
        RequestApplySnapshotChunk: {
            encode(message: _119.RequestApplySnapshotChunk, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _119.RequestApplySnapshotChunk;
            fromPartial(object: Partial<_119.RequestApplySnapshotChunk>): _119.RequestApplySnapshotChunk;
        };
        Response: {
            encode(message: _119.Response, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _119.Response;
            fromPartial(object: Partial<_119.Response>): _119.Response;
        };
        ResponseException: {
            encode(message: _119.ResponseException, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _119.ResponseException;
            fromPartial(object: Partial<_119.ResponseException>): _119.ResponseException;
        };
        ResponseEcho: {
            encode(message: _119.ResponseEcho, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _119.ResponseEcho;
            fromPartial(object: Partial<_119.ResponseEcho>): _119.ResponseEcho;
        };
        ResponseFlush: {
            encode(_: _119.ResponseFlush, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(_: any): _119.ResponseFlush;
            fromPartial(_: Partial<_119.ResponseFlush>): _119.ResponseFlush;
        };
        ResponseInfo: {
            encode(message: _119.ResponseInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _119.ResponseInfo;
            fromPartial(object: Partial<_119.ResponseInfo>): _119.ResponseInfo;
        };
        ResponseSetOption: {
            encode(message: _119.ResponseSetOption, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _119.ResponseSetOption;
            fromPartial(object: Partial<_119.ResponseSetOption>): _119.ResponseSetOption;
        };
        ResponseInitChain: {
            encode(message: _119.ResponseInitChain, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _119.ResponseInitChain;
            fromPartial(object: Partial<_119.ResponseInitChain>): _119.ResponseInitChain;
        };
        ResponseQuery: {
            encode(message: _119.ResponseQuery, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _119.ResponseQuery;
            fromPartial(object: Partial<_119.ResponseQuery>): _119.ResponseQuery;
        };
        ResponseBeginBlock: {
            encode(message: _119.ResponseBeginBlock, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _119.ResponseBeginBlock;
            fromPartial(object: Partial<_119.ResponseBeginBlock>): _119.ResponseBeginBlock;
        };
        ResponseCheckTx: {
            encode(message: _119.ResponseCheckTx, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _119.ResponseCheckTx;
            fromPartial(object: Partial<_119.ResponseCheckTx>): _119.ResponseCheckTx;
        };
        ResponseDeliverTx: {
            encode(message: _119.ResponseDeliverTx, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _119.ResponseDeliverTx;
            fromPartial(object: Partial<_119.ResponseDeliverTx>): _119.ResponseDeliverTx;
        };
        ResponseEndBlock: {
            encode(message: _119.ResponseEndBlock, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _119.ResponseEndBlock;
            fromPartial(object: Partial<_119.ResponseEndBlock>): _119.ResponseEndBlock;
        };
        ResponseCommit: {
            encode(message: _119.ResponseCommit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _119.ResponseCommit;
            fromPartial(object: Partial<_119.ResponseCommit>): _119.ResponseCommit;
        };
        ResponseListSnapshots: {
            encode(message: _119.ResponseListSnapshots, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _119.ResponseListSnapshots;
            fromPartial(object: Partial<_119.ResponseListSnapshots>): _119.ResponseListSnapshots;
        };
        ResponseOfferSnapshot: {
            encode(message: _119.ResponseOfferSnapshot, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _119.ResponseOfferSnapshot;
            fromPartial(object: Partial<_119.ResponseOfferSnapshot>): _119.ResponseOfferSnapshot;
        };
        ResponseLoadSnapshotChunk: {
            encode(message: _119.ResponseLoadSnapshotChunk, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _119.ResponseLoadSnapshotChunk;
            fromPartial(object: Partial<_119.ResponseLoadSnapshotChunk>): _119.ResponseLoadSnapshotChunk;
        };
        ResponseApplySnapshotChunk: {
            encode(message: _119.ResponseApplySnapshotChunk, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _119.ResponseApplySnapshotChunk;
            fromPartial(object: Partial<_119.ResponseApplySnapshotChunk>): _119.ResponseApplySnapshotChunk;
        };
        ConsensusParams: {
            encode(message: _119.ConsensusParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _119.ConsensusParams;
            fromPartial(object: Partial<_119.ConsensusParams>): _119.ConsensusParams;
        };
        BlockParams: {
            encode(message: _119.BlockParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _119.BlockParams;
            fromPartial(object: Partial<_119.BlockParams>): _119.BlockParams;
        };
        LastCommitInfo: {
            encode(message: _119.LastCommitInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _119.LastCommitInfo;
            fromPartial(object: Partial<_119.LastCommitInfo>): _119.LastCommitInfo;
        };
        Event: {
            encode(message: _119.Event, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _119.Event;
            fromPartial(object: Partial<_119.Event>): _119.Event;
        };
        EventAttribute: {
            encode(message: _119.EventAttribute, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _119.EventAttribute;
            fromPartial(object: Partial<_119.EventAttribute>): _119.EventAttribute;
        };
        TxResult: {
            encode(message: _119.TxResult, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _119.TxResult;
            fromPartial(object: Partial<_119.TxResult>): _119.TxResult;
        };
        Validator: {
            encode(message: _119.Validator, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _119.Validator;
            fromPartial(object: Partial<_119.Validator>): _119.Validator;
        };
        ValidatorUpdate: {
            encode(message: _119.ValidatorUpdate, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _119.ValidatorUpdate;
            fromPartial(object: Partial<_119.ValidatorUpdate>): _119.ValidatorUpdate;
        };
        VoteInfo: {
            encode(message: _119.VoteInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _119.VoteInfo;
            fromPartial(object: Partial<_119.VoteInfo>): _119.VoteInfo;
        };
        Evidence: {
            encode(message: _119.Evidence, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _119.Evidence;
            fromPartial(object: Partial<_119.Evidence>): _119.Evidence;
        };
        Snapshot: {
            encode(message: _119.Snapshot, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _119.Snapshot;
            fromPartial(object: Partial<_119.Snapshot>): _119.Snapshot;
        };
    };
    const crypto: {
        Proof: {
            encode(message: _121.Proof, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _121.Proof;
            fromPartial(object: Partial<_121.Proof>): _121.Proof;
        };
        ValueOp: {
            encode(message: _121.ValueOp, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _121.ValueOp;
            fromPartial(object: Partial<_121.ValueOp>): _121.ValueOp;
        };
        DominoOp: {
            encode(message: _121.DominoOp, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _121.DominoOp;
            fromPartial(object: Partial<_121.DominoOp>): _121.DominoOp;
        };
        ProofOp: {
            encode(message: _121.ProofOp, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _121.ProofOp;
            fromPartial(object: Partial<_121.ProofOp>): _121.ProofOp;
        };
        ProofOps: {
            encode(message: _121.ProofOps, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _121.ProofOps;
            fromPartial(object: Partial<_121.ProofOps>): _121.ProofOps;
        };
        PublicKey: {
            encode(message: _120.PublicKey, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _120.PublicKey;
            fromPartial(object: Partial<_120.PublicKey>): _120.PublicKey;
        };
    };
    namespace libs {
        const bits: {
            BitArray: {
                encode(message: _122.BitArray, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _122.BitArray;
                fromPartial(object: Partial<_122.BitArray>): _122.BitArray;
            };
        };
    }
    const p2p: {
        NetAddress: {
            encode(message: _123.NetAddress, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _123.NetAddress;
            fromPartial(object: Partial<_123.NetAddress>): _123.NetAddress;
        };
        ProtocolVersion: {
            encode(message: _123.ProtocolVersion, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _123.ProtocolVersion;
            fromPartial(object: Partial<_123.ProtocolVersion>): _123.ProtocolVersion;
        };
        DefaultNodeInfo: {
            encode(message: _123.DefaultNodeInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _123.DefaultNodeInfo;
            fromPartial(object: Partial<_123.DefaultNodeInfo>): _123.DefaultNodeInfo;
        };
        DefaultNodeInfoOther: {
            encode(message: _123.DefaultNodeInfoOther, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _123.DefaultNodeInfoOther;
            fromPartial(object: Partial<_123.DefaultNodeInfoOther>): _123.DefaultNodeInfoOther;
        };
    };
    const types: {
        ValidatorSet: {
            encode(message: _128.ValidatorSet, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _128.ValidatorSet;
            fromPartial(object: Partial<_128.ValidatorSet>): _128.ValidatorSet;
        };
        Validator: {
            encode(message: _128.Validator, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _128.Validator;
            fromPartial(object: Partial<_128.Validator>): _128.Validator;
        };
        SimpleValidator: {
            encode(message: _128.SimpleValidator, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _128.SimpleValidator;
            fromPartial(object: Partial<_128.SimpleValidator>): _128.SimpleValidator;
        };
        blockIDFlagFromJSON(object: any): _127.BlockIDFlag;
        blockIDFlagToJSON(object: _127.BlockIDFlag): string;
        signedMsgTypeFromJSON(object: any): _127.SignedMsgType;
        signedMsgTypeToJSON(object: _127.SignedMsgType): string;
        BlockIDFlag: typeof _127.BlockIDFlag;
        BlockIDFlagSDKType: typeof _127.BlockIDFlag;
        SignedMsgType: typeof _127.SignedMsgType;
        SignedMsgTypeSDKType: typeof _127.SignedMsgType;
        PartSetHeader: {
            encode(message: _127.PartSetHeader, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _127.PartSetHeader;
            fromPartial(object: Partial<_127.PartSetHeader>): _127.PartSetHeader;
        };
        Part: {
            encode(message: _127.Part, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _127.Part;
            fromPartial(object: Partial<_127.Part>): _127.Part;
        };
        BlockID: {
            encode(message: _127.BlockID, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _127.BlockID;
            fromPartial(object: Partial<_127.BlockID>): _127.BlockID;
        };
        Header: {
            encode(message: _127.Header, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _127.Header;
            fromPartial(object: Partial<_127.Header>): _127.Header;
        };
        Data: {
            encode(message: _127.Data, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _127.Data;
            fromPartial(object: Partial<_127.Data>): _127.Data;
        };
        Vote: {
            encode(message: _127.Vote, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _127.Vote;
            fromPartial(object: Partial<_127.Vote>): _127.Vote;
        };
        Commit: {
            encode(message: _127.Commit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _127.Commit;
            fromPartial(object: Partial<_127.Commit>): _127.Commit;
        };
        CommitSig: {
            encode(message: _127.CommitSig, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _127.CommitSig;
            fromPartial(object: Partial<_127.CommitSig>): _127.CommitSig;
        };
        Proposal: {
            encode(message: _127.Proposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _127.Proposal;
            fromPartial(object: Partial<_127.Proposal>): _127.Proposal;
        };
        SignedHeader: {
            encode(message: _127.SignedHeader, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _127.SignedHeader;
            fromPartial(object: Partial<_127.SignedHeader>): _127.SignedHeader;
        };
        LightBlock: {
            encode(message: _127.LightBlock, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _127.LightBlock;
            fromPartial(object: Partial<_127.LightBlock>): _127.LightBlock;
        };
        BlockMeta: {
            encode(message: _127.BlockMeta, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _127.BlockMeta;
            fromPartial(object: Partial<_127.BlockMeta>): _127.BlockMeta;
        };
        TxProof: {
            encode(message: _127.TxProof, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _127.TxProof;
            fromPartial(object: Partial<_127.TxProof>): _127.TxProof;
        };
        ConsensusParams: {
            encode(message: _126.ConsensusParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _126.ConsensusParams;
            fromPartial(object: Partial<_126.ConsensusParams>): _126.ConsensusParams;
        };
        BlockParams: {
            encode(message: _126.BlockParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _126.BlockParams;
            fromPartial(object: Partial<_126.BlockParams>): _126.BlockParams;
        };
        EvidenceParams: {
            encode(message: _126.EvidenceParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _126.EvidenceParams;
            fromPartial(object: Partial<_126.EvidenceParams>): _126.EvidenceParams;
        };
        ValidatorParams: {
            encode(message: _126.ValidatorParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _126.ValidatorParams;
            fromPartial(object: Partial<_126.ValidatorParams>): _126.ValidatorParams;
        };
        VersionParams: {
            encode(message: _126.VersionParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _126.VersionParams;
            fromPartial(object: Partial<_126.VersionParams>): _126.VersionParams;
        };
        HashedParams: {
            encode(message: _126.HashedParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _126.HashedParams;
            fromPartial(object: Partial<_126.HashedParams>): _126.HashedParams;
        };
        Evidence: {
            encode(message: _125.Evidence, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _125.Evidence;
            fromPartial(object: Partial<_125.Evidence>): _125.Evidence;
        };
        DuplicateVoteEvidence: {
            encode(message: _125.DuplicateVoteEvidence, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _125.DuplicateVoteEvidence;
            fromPartial(object: Partial<_125.DuplicateVoteEvidence>): _125.DuplicateVoteEvidence;
        };
        LightClientAttackEvidence: {
            encode(message: _125.LightClientAttackEvidence, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _125.LightClientAttackEvidence;
            fromPartial(object: Partial<_125.LightClientAttackEvidence>): _125.LightClientAttackEvidence;
        };
        EvidenceList: {
            encode(message: _125.EvidenceList, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _125.EvidenceList;
            fromPartial(object: Partial<_125.EvidenceList>): _125.EvidenceList;
        };
        Block: {
            encode(message: _124.Block, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _124.Block;
            fromPartial(object: Partial<_124.Block>): _124.Block;
        };
    };
    const version: {
        App: {
            encode(message: _129.App, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _129.App;
            fromPartial(object: Partial<_129.App>): _129.App;
        };
        Consensus: {
            encode(message: _129.Consensus, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _129.Consensus;
            fromPartial(object: Partial<_129.Consensus>): _129.Consensus;
        };
    };
}
