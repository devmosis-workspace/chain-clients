import * as _103 from "./abci/types";
import * as _104 from "./crypto/keys";
import * as _105 from "./crypto/proof";
import * as _106 from "./libs/bits/types";
import * as _107 from "./p2p/types";
import * as _108 from "./types/block";
import * as _109 from "./types/evidence";
import * as _110 from "./types/params";
import * as _111 from "./types/types";
import * as _112 from "./types/validator";
import * as _113 from "./version/types";
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
        ValidatorSet: {
            encode(message: _112.ValidatorSet, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _112.ValidatorSet;
            fromPartial(object: Partial<_112.ValidatorSet>): _112.ValidatorSet;
        };
        Validator: {
            encode(message: _112.Validator, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _112.Validator;
            fromPartial(object: Partial<_112.Validator>): _112.Validator;
        };
        SimpleValidator: {
            encode(message: _112.SimpleValidator, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _112.SimpleValidator;
            fromPartial(object: Partial<_112.SimpleValidator>): _112.SimpleValidator;
        };
        blockIDFlagFromJSON(object: any): _111.BlockIDFlag;
        blockIDFlagToJSON(object: _111.BlockIDFlag): string;
        signedMsgTypeFromJSON(object: any): _111.SignedMsgType;
        signedMsgTypeToJSON(object: _111.SignedMsgType): string;
        BlockIDFlag: typeof _111.BlockIDFlag;
        BlockIDFlagSDKType: typeof _111.BlockIDFlag;
        SignedMsgType: typeof _111.SignedMsgType;
        SignedMsgTypeSDKType: typeof _111.SignedMsgType;
        PartSetHeader: {
            encode(message: _111.PartSetHeader, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _111.PartSetHeader;
            fromPartial(object: Partial<_111.PartSetHeader>): _111.PartSetHeader;
        };
        Part: {
            encode(message: _111.Part, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _111.Part;
            fromPartial(object: Partial<_111.Part>): _111.Part;
        };
        BlockID: {
            encode(message: _111.BlockID, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _111.BlockID;
            fromPartial(object: Partial<_111.BlockID>): _111.BlockID;
        };
        Header: {
            encode(message: _111.Header, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _111.Header;
            fromPartial(object: Partial<_111.Header>): _111.Header;
        };
        Data: {
            encode(message: _111.Data, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _111.Data;
            fromPartial(object: Partial<_111.Data>): _111.Data;
        };
        Vote: {
            encode(message: _111.Vote, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _111.Vote;
            fromPartial(object: Partial<_111.Vote>): _111.Vote;
        };
        Commit: {
            encode(message: _111.Commit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _111.Commit;
            fromPartial(object: Partial<_111.Commit>): _111.Commit;
        };
        CommitSig: {
            encode(message: _111.CommitSig, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _111.CommitSig;
            fromPartial(object: Partial<_111.CommitSig>): _111.CommitSig;
        };
        Proposal: {
            encode(message: _111.Proposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _111.Proposal;
            fromPartial(object: Partial<_111.Proposal>): _111.Proposal;
        };
        SignedHeader: {
            encode(message: _111.SignedHeader, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _111.SignedHeader;
            fromPartial(object: Partial<_111.SignedHeader>): _111.SignedHeader;
        };
        LightBlock: {
            encode(message: _111.LightBlock, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _111.LightBlock;
            fromPartial(object: Partial<_111.LightBlock>): _111.LightBlock;
        };
        BlockMeta: {
            encode(message: _111.BlockMeta, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _111.BlockMeta;
            fromPartial(object: Partial<_111.BlockMeta>): _111.BlockMeta;
        };
        TxProof: {
            encode(message: _111.TxProof, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _111.TxProof;
            fromPartial(object: Partial<_111.TxProof>): _111.TxProof;
        };
        ConsensusParams: {
            encode(message: _110.ConsensusParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _110.ConsensusParams;
            fromPartial(object: Partial<_110.ConsensusParams>): _110.ConsensusParams;
        };
        BlockParams: {
            encode(message: _110.BlockParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _110.BlockParams;
            fromPartial(object: Partial<_110.BlockParams>): _110.BlockParams;
        };
        EvidenceParams: {
            encode(message: _110.EvidenceParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _110.EvidenceParams;
            fromPartial(object: Partial<_110.EvidenceParams>): _110.EvidenceParams;
        };
        ValidatorParams: {
            encode(message: _110.ValidatorParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _110.ValidatorParams;
            fromPartial(object: Partial<_110.ValidatorParams>): _110.ValidatorParams;
        };
        VersionParams: {
            encode(message: _110.VersionParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _110.VersionParams;
            fromPartial(object: Partial<_110.VersionParams>): _110.VersionParams;
        };
        HashedParams: {
            encode(message: _110.HashedParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _110.HashedParams;
            fromPartial(object: Partial<_110.HashedParams>): _110.HashedParams;
        };
        Evidence: {
            encode(message: _109.Evidence, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _109.Evidence;
            fromPartial(object: Partial<_109.Evidence>): _109.Evidence;
        };
        DuplicateVoteEvidence: {
            encode(message: _109.DuplicateVoteEvidence, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _109.DuplicateVoteEvidence;
            fromPartial(object: Partial<_109.DuplicateVoteEvidence>): _109.DuplicateVoteEvidence;
        };
        LightClientAttackEvidence: {
            encode(message: _109.LightClientAttackEvidence, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _109.LightClientAttackEvidence;
            fromPartial(object: Partial<_109.LightClientAttackEvidence>): _109.LightClientAttackEvidence;
        };
        EvidenceList: {
            encode(message: _109.EvidenceList, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _109.EvidenceList;
            fromPartial(object: Partial<_109.EvidenceList>): _109.EvidenceList;
        };
        Block: {
            encode(message: _108.Block, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _108.Block;
            fromPartial(object: Partial<_108.Block>): _108.Block;
        };
    };
    const version: {
        App: {
            encode(message: _113.App, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _113.App;
            fromPartial(object: Partial<_113.App>): _113.App;
        };
        Consensus: {
            encode(message: _113.Consensus, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _113.Consensus;
            fromPartial(object: Partial<_113.Consensus>): _113.Consensus;
        };
    };
}
