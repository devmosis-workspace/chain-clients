import * as _108 from "./abci/types";
import * as _109 from "./crypto/keys";
import * as _110 from "./crypto/proof";
import * as _111 from "./libs/bits/types";
import * as _112 from "./p2p/types";
import * as _113 from "./types/block";
import * as _114 from "./types/evidence";
import * as _115 from "./types/params";
import * as _116 from "./types/types";
import * as _117 from "./types/validator";
import * as _118 from "./version/types";
export declare namespace tendermint {
    const abci: {
        checkTxTypeFromJSON(object: any): _108.CheckTxType;
        checkTxTypeToJSON(object: _108.CheckTxType): string;
        responseOfferSnapshot_ResultFromJSON(object: any): _108.ResponseOfferSnapshot_Result;
        responseOfferSnapshot_ResultToJSON(object: _108.ResponseOfferSnapshot_Result): string;
        responseApplySnapshotChunk_ResultFromJSON(object: any): _108.ResponseApplySnapshotChunk_Result;
        responseApplySnapshotChunk_ResultToJSON(object: _108.ResponseApplySnapshotChunk_Result): string;
        evidenceTypeFromJSON(object: any): _108.EvidenceType;
        evidenceTypeToJSON(object: _108.EvidenceType): string;
        CheckTxType: typeof _108.CheckTxType;
        CheckTxTypeSDKType: typeof _108.CheckTxType;
        ResponseOfferSnapshot_Result: typeof _108.ResponseOfferSnapshot_Result;
        ResponseOfferSnapshot_ResultSDKType: typeof _108.ResponseOfferSnapshot_Result;
        ResponseApplySnapshotChunk_Result: typeof _108.ResponseApplySnapshotChunk_Result;
        ResponseApplySnapshotChunk_ResultSDKType: typeof _108.ResponseApplySnapshotChunk_Result;
        EvidenceType: typeof _108.EvidenceType;
        EvidenceTypeSDKType: typeof _108.EvidenceType;
        Request: {
            encode(message: _108.Request, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _108.Request;
            fromPartial(object: Partial<_108.Request>): _108.Request;
        };
        RequestEcho: {
            encode(message: _108.RequestEcho, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _108.RequestEcho;
            fromPartial(object: Partial<_108.RequestEcho>): _108.RequestEcho;
        };
        RequestFlush: {
            encode(_: _108.RequestFlush, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(_: any): _108.RequestFlush;
            fromPartial(_: Partial<_108.RequestFlush>): _108.RequestFlush;
        };
        RequestInfo: {
            encode(message: _108.RequestInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _108.RequestInfo;
            fromPartial(object: Partial<_108.RequestInfo>): _108.RequestInfo;
        };
        RequestSetOption: {
            encode(message: _108.RequestSetOption, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _108.RequestSetOption;
            fromPartial(object: Partial<_108.RequestSetOption>): _108.RequestSetOption;
        };
        RequestInitChain: {
            encode(message: _108.RequestInitChain, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _108.RequestInitChain;
            fromPartial(object: Partial<_108.RequestInitChain>): _108.RequestInitChain;
        };
        RequestQuery: {
            encode(message: _108.RequestQuery, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _108.RequestQuery;
            fromPartial(object: Partial<_108.RequestQuery>): _108.RequestQuery;
        };
        RequestBeginBlock: {
            encode(message: _108.RequestBeginBlock, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _108.RequestBeginBlock;
            fromPartial(object: Partial<_108.RequestBeginBlock>): _108.RequestBeginBlock;
        };
        RequestCheckTx: {
            encode(message: _108.RequestCheckTx, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _108.RequestCheckTx;
            fromPartial(object: Partial<_108.RequestCheckTx>): _108.RequestCheckTx;
        };
        RequestDeliverTx: {
            encode(message: _108.RequestDeliverTx, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _108.RequestDeliverTx;
            fromPartial(object: Partial<_108.RequestDeliverTx>): _108.RequestDeliverTx;
        };
        RequestEndBlock: {
            encode(message: _108.RequestEndBlock, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _108.RequestEndBlock;
            fromPartial(object: Partial<_108.RequestEndBlock>): _108.RequestEndBlock;
        };
        RequestCommit: {
            encode(_: _108.RequestCommit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(_: any): _108.RequestCommit;
            fromPartial(_: Partial<_108.RequestCommit>): _108.RequestCommit;
        };
        RequestListSnapshots: {
            encode(_: _108.RequestListSnapshots, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(_: any): _108.RequestListSnapshots;
            fromPartial(_: Partial<_108.RequestListSnapshots>): _108.RequestListSnapshots;
        };
        RequestOfferSnapshot: {
            encode(message: _108.RequestOfferSnapshot, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _108.RequestOfferSnapshot;
            fromPartial(object: Partial<_108.RequestOfferSnapshot>): _108.RequestOfferSnapshot;
        };
        RequestLoadSnapshotChunk: {
            encode(message: _108.RequestLoadSnapshotChunk, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _108.RequestLoadSnapshotChunk;
            fromPartial(object: Partial<_108.RequestLoadSnapshotChunk>): _108.RequestLoadSnapshotChunk;
        };
        RequestApplySnapshotChunk: {
            encode(message: _108.RequestApplySnapshotChunk, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _108.RequestApplySnapshotChunk;
            fromPartial(object: Partial<_108.RequestApplySnapshotChunk>): _108.RequestApplySnapshotChunk;
        };
        Response: {
            encode(message: _108.Response, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _108.Response;
            fromPartial(object: Partial<_108.Response>): _108.Response;
        };
        ResponseException: {
            encode(message: _108.ResponseException, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _108.ResponseException;
            fromPartial(object: Partial<_108.ResponseException>): _108.ResponseException;
        };
        ResponseEcho: {
            encode(message: _108.ResponseEcho, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _108.ResponseEcho;
            fromPartial(object: Partial<_108.ResponseEcho>): _108.ResponseEcho;
        };
        ResponseFlush: {
            encode(_: _108.ResponseFlush, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(_: any): _108.ResponseFlush;
            fromPartial(_: Partial<_108.ResponseFlush>): _108.ResponseFlush;
        };
        ResponseInfo: {
            encode(message: _108.ResponseInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _108.ResponseInfo;
            fromPartial(object: Partial<_108.ResponseInfo>): _108.ResponseInfo;
        };
        ResponseSetOption: {
            encode(message: _108.ResponseSetOption, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _108.ResponseSetOption;
            fromPartial(object: Partial<_108.ResponseSetOption>): _108.ResponseSetOption;
        };
        ResponseInitChain: {
            encode(message: _108.ResponseInitChain, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _108.ResponseInitChain;
            fromPartial(object: Partial<_108.ResponseInitChain>): _108.ResponseInitChain;
        };
        ResponseQuery: {
            encode(message: _108.ResponseQuery, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _108.ResponseQuery;
            fromPartial(object: Partial<_108.ResponseQuery>): _108.ResponseQuery;
        };
        ResponseBeginBlock: {
            encode(message: _108.ResponseBeginBlock, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _108.ResponseBeginBlock;
            fromPartial(object: Partial<_108.ResponseBeginBlock>): _108.ResponseBeginBlock;
        };
        ResponseCheckTx: {
            encode(message: _108.ResponseCheckTx, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _108.ResponseCheckTx;
            fromPartial(object: Partial<_108.ResponseCheckTx>): _108.ResponseCheckTx;
        };
        ResponseDeliverTx: {
            encode(message: _108.ResponseDeliverTx, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _108.ResponseDeliverTx;
            fromPartial(object: Partial<_108.ResponseDeliverTx>): _108.ResponseDeliverTx;
        };
        ResponseEndBlock: {
            encode(message: _108.ResponseEndBlock, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _108.ResponseEndBlock;
            fromPartial(object: Partial<_108.ResponseEndBlock>): _108.ResponseEndBlock;
        };
        ResponseCommit: {
            encode(message: _108.ResponseCommit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _108.ResponseCommit;
            fromPartial(object: Partial<_108.ResponseCommit>): _108.ResponseCommit;
        };
        ResponseListSnapshots: {
            encode(message: _108.ResponseListSnapshots, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _108.ResponseListSnapshots;
            fromPartial(object: Partial<_108.ResponseListSnapshots>): _108.ResponseListSnapshots;
        };
        ResponseOfferSnapshot: {
            encode(message: _108.ResponseOfferSnapshot, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _108.ResponseOfferSnapshot;
            fromPartial(object: Partial<_108.ResponseOfferSnapshot>): _108.ResponseOfferSnapshot;
        };
        ResponseLoadSnapshotChunk: {
            encode(message: _108.ResponseLoadSnapshotChunk, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _108.ResponseLoadSnapshotChunk;
            fromPartial(object: Partial<_108.ResponseLoadSnapshotChunk>): _108.ResponseLoadSnapshotChunk;
        };
        ResponseApplySnapshotChunk: {
            encode(message: _108.ResponseApplySnapshotChunk, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _108.ResponseApplySnapshotChunk;
            fromPartial(object: Partial<_108.ResponseApplySnapshotChunk>): _108.ResponseApplySnapshotChunk;
        };
        ConsensusParams: {
            encode(message: _108.ConsensusParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _108.ConsensusParams;
            fromPartial(object: Partial<_108.ConsensusParams>): _108.ConsensusParams;
        };
        BlockParams: {
            encode(message: _108.BlockParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _108.BlockParams;
            fromPartial(object: Partial<_108.BlockParams>): _108.BlockParams;
        };
        LastCommitInfo: {
            encode(message: _108.LastCommitInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _108.LastCommitInfo;
            fromPartial(object: Partial<_108.LastCommitInfo>): _108.LastCommitInfo;
        };
        Event: {
            encode(message: _108.Event, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _108.Event;
            fromPartial(object: Partial<_108.Event>): _108.Event;
        };
        EventAttribute: {
            encode(message: _108.EventAttribute, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _108.EventAttribute;
            fromPartial(object: Partial<_108.EventAttribute>): _108.EventAttribute;
        };
        TxResult: {
            encode(message: _108.TxResult, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _108.TxResult;
            fromPartial(object: Partial<_108.TxResult>): _108.TxResult;
        };
        Validator: {
            encode(message: _108.Validator, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _108.Validator;
            fromPartial(object: Partial<_108.Validator>): _108.Validator;
        };
        ValidatorUpdate: {
            encode(message: _108.ValidatorUpdate, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _108.ValidatorUpdate;
            fromPartial(object: Partial<_108.ValidatorUpdate>): _108.ValidatorUpdate;
        };
        VoteInfo: {
            encode(message: _108.VoteInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _108.VoteInfo;
            fromPartial(object: Partial<_108.VoteInfo>): _108.VoteInfo;
        };
        Evidence: {
            encode(message: _108.Evidence, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _108.Evidence;
            fromPartial(object: Partial<_108.Evidence>): _108.Evidence;
        };
        Snapshot: {
            encode(message: _108.Snapshot, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _108.Snapshot;
            fromPartial(object: Partial<_108.Snapshot>): _108.Snapshot;
        };
    };
    const crypto: {
        Proof: {
            encode(message: _110.Proof, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _110.Proof;
            fromPartial(object: Partial<_110.Proof>): _110.Proof;
        };
        ValueOp: {
            encode(message: _110.ValueOp, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _110.ValueOp;
            fromPartial(object: Partial<_110.ValueOp>): _110.ValueOp;
        };
        DominoOp: {
            encode(message: _110.DominoOp, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _110.DominoOp;
            fromPartial(object: Partial<_110.DominoOp>): _110.DominoOp;
        };
        ProofOp: {
            encode(message: _110.ProofOp, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _110.ProofOp;
            fromPartial(object: Partial<_110.ProofOp>): _110.ProofOp;
        };
        ProofOps: {
            encode(message: _110.ProofOps, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _110.ProofOps;
            fromPartial(object: Partial<_110.ProofOps>): _110.ProofOps;
        };
        PublicKey: {
            encode(message: _109.PublicKey, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _109.PublicKey;
            fromPartial(object: Partial<_109.PublicKey>): _109.PublicKey;
        };
    };
    namespace libs {
        const bits: {
            BitArray: {
                encode(message: _111.BitArray, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _111.BitArray;
                fromPartial(object: Partial<_111.BitArray>): _111.BitArray;
            };
        };
    }
    const p2p: {
        NetAddress: {
            encode(message: _112.NetAddress, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _112.NetAddress;
            fromPartial(object: Partial<_112.NetAddress>): _112.NetAddress;
        };
        ProtocolVersion: {
            encode(message: _112.ProtocolVersion, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _112.ProtocolVersion;
            fromPartial(object: Partial<_112.ProtocolVersion>): _112.ProtocolVersion;
        };
        DefaultNodeInfo: {
            encode(message: _112.DefaultNodeInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _112.DefaultNodeInfo;
            fromPartial(object: Partial<_112.DefaultNodeInfo>): _112.DefaultNodeInfo;
        };
        DefaultNodeInfoOther: {
            encode(message: _112.DefaultNodeInfoOther, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _112.DefaultNodeInfoOther;
            fromPartial(object: Partial<_112.DefaultNodeInfoOther>): _112.DefaultNodeInfoOther;
        };
    };
    const types: {
        ValidatorSet: {
            encode(message: _117.ValidatorSet, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _117.ValidatorSet;
            fromPartial(object: Partial<_117.ValidatorSet>): _117.ValidatorSet;
        };
        Validator: {
            encode(message: _117.Validator, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _117.Validator;
            fromPartial(object: Partial<_117.Validator>): _117.Validator;
        };
        SimpleValidator: {
            encode(message: _117.SimpleValidator, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _117.SimpleValidator;
            fromPartial(object: Partial<_117.SimpleValidator>): _117.SimpleValidator;
        };
        blockIDFlagFromJSON(object: any): _116.BlockIDFlag;
        blockIDFlagToJSON(object: _116.BlockIDFlag): string;
        signedMsgTypeFromJSON(object: any): _116.SignedMsgType;
        signedMsgTypeToJSON(object: _116.SignedMsgType): string;
        BlockIDFlag: typeof _116.BlockIDFlag;
        BlockIDFlagSDKType: typeof _116.BlockIDFlag;
        SignedMsgType: typeof _116.SignedMsgType;
        SignedMsgTypeSDKType: typeof _116.SignedMsgType;
        PartSetHeader: {
            encode(message: _116.PartSetHeader, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _116.PartSetHeader;
            fromPartial(object: Partial<_116.PartSetHeader>): _116.PartSetHeader;
        };
        Part: {
            encode(message: _116.Part, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _116.Part;
            fromPartial(object: Partial<_116.Part>): _116.Part;
        };
        BlockID: {
            encode(message: _116.BlockID, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _116.BlockID;
            fromPartial(object: Partial<_116.BlockID>): _116.BlockID;
        };
        Header: {
            encode(message: _116.Header, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _116.Header;
            fromPartial(object: Partial<_116.Header>): _116.Header;
        };
        Data: {
            encode(message: _116.Data, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _116.Data;
            fromPartial(object: Partial<_116.Data>): _116.Data;
        };
        Vote: {
            encode(message: _116.Vote, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _116.Vote;
            fromPartial(object: Partial<_116.Vote>): _116.Vote;
        };
        Commit: {
            encode(message: _116.Commit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _116.Commit;
            fromPartial(object: Partial<_116.Commit>): _116.Commit;
        };
        CommitSig: {
            encode(message: _116.CommitSig, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _116.CommitSig;
            fromPartial(object: Partial<_116.CommitSig>): _116.CommitSig;
        };
        Proposal: {
            encode(message: _116.Proposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _116.Proposal;
            fromPartial(object: Partial<_116.Proposal>): _116.Proposal;
        };
        SignedHeader: {
            encode(message: _116.SignedHeader, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _116.SignedHeader;
            fromPartial(object: Partial<_116.SignedHeader>): _116.SignedHeader;
        };
        LightBlock: {
            encode(message: _116.LightBlock, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _116.LightBlock;
            fromPartial(object: Partial<_116.LightBlock>): _116.LightBlock;
        };
        BlockMeta: {
            encode(message: _116.BlockMeta, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _116.BlockMeta;
            fromPartial(object: Partial<_116.BlockMeta>): _116.BlockMeta;
        };
        TxProof: {
            encode(message: _116.TxProof, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _116.TxProof;
            fromPartial(object: Partial<_116.TxProof>): _116.TxProof;
        };
        ConsensusParams: {
            encode(message: _115.ConsensusParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _115.ConsensusParams;
            fromPartial(object: Partial<_115.ConsensusParams>): _115.ConsensusParams;
        };
        BlockParams: {
            encode(message: _115.BlockParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _115.BlockParams;
            fromPartial(object: Partial<_115.BlockParams>): _115.BlockParams;
        };
        EvidenceParams: {
            encode(message: _115.EvidenceParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _115.EvidenceParams;
            fromPartial(object: Partial<_115.EvidenceParams>): _115.EvidenceParams;
        };
        ValidatorParams: {
            encode(message: _115.ValidatorParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _115.ValidatorParams;
            fromPartial(object: Partial<_115.ValidatorParams>): _115.ValidatorParams;
        };
        VersionParams: {
            encode(message: _115.VersionParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _115.VersionParams;
            fromPartial(object: Partial<_115.VersionParams>): _115.VersionParams;
        };
        HashedParams: {
            encode(message: _115.HashedParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _115.HashedParams;
            fromPartial(object: Partial<_115.HashedParams>): _115.HashedParams;
        };
        Evidence: {
            encode(message: _114.Evidence, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _114.Evidence;
            fromPartial(object: Partial<_114.Evidence>): _114.Evidence;
        };
        DuplicateVoteEvidence: {
            encode(message: _114.DuplicateVoteEvidence, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _114.DuplicateVoteEvidence;
            fromPartial(object: Partial<_114.DuplicateVoteEvidence>): _114.DuplicateVoteEvidence;
        };
        LightClientAttackEvidence: {
            encode(message: _114.LightClientAttackEvidence, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _114.LightClientAttackEvidence;
            fromPartial(object: Partial<_114.LightClientAttackEvidence>): _114.LightClientAttackEvidence;
        };
        EvidenceList: {
            encode(message: _114.EvidenceList, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _114.EvidenceList;
            fromPartial(object: Partial<_114.EvidenceList>): _114.EvidenceList;
        };
        Block: {
            encode(message: _113.Block, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _113.Block;
            fromPartial(object: Partial<_113.Block>): _113.Block;
        };
    };
    const version: {
        App: {
            encode(message: _118.App, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _118.App;
            fromPartial(object: Partial<_118.App>): _118.App;
        };
        Consensus: {
            encode(message: _118.Consensus, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _118.Consensus;
            fromPartial(object: Partial<_118.Consensus>): _118.Consensus;
        };
    };
}
