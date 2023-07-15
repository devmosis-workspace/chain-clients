import * as _143 from "./abci/types";
import * as _144 from "./crypto/keys";
import * as _145 from "./crypto/proof";
import * as _146 from "./libs/bits/types";
import * as _147 from "./p2p/types";
import * as _148 from "./types/block";
import * as _149 from "./types/evidence";
import * as _150 from "./types/params";
import * as _151 from "./types/types";
import * as _152 from "./types/validator";
import * as _153 from "./version/types";
export declare namespace tendermint {
    const abci: {
        checkTxTypeFromJSON(object: any): _143.CheckTxType;
        checkTxTypeToJSON(object: _143.CheckTxType): string;
        responseOfferSnapshot_ResultFromJSON(object: any): _143.ResponseOfferSnapshot_Result;
        responseOfferSnapshot_ResultToJSON(object: _143.ResponseOfferSnapshot_Result): string;
        responseApplySnapshotChunk_ResultFromJSON(object: any): _143.ResponseApplySnapshotChunk_Result;
        responseApplySnapshotChunk_ResultToJSON(object: _143.ResponseApplySnapshotChunk_Result): string;
        evidenceTypeFromJSON(object: any): _143.EvidenceType;
        evidenceTypeToJSON(object: _143.EvidenceType): string;
        CheckTxType: typeof _143.CheckTxType;
        CheckTxTypeSDKType: typeof _143.CheckTxType;
        ResponseOfferSnapshot_Result: typeof _143.ResponseOfferSnapshot_Result;
        ResponseOfferSnapshot_ResultSDKType: typeof _143.ResponseOfferSnapshot_Result;
        ResponseApplySnapshotChunk_Result: typeof _143.ResponseApplySnapshotChunk_Result;
        ResponseApplySnapshotChunk_ResultSDKType: typeof _143.ResponseApplySnapshotChunk_Result;
        EvidenceType: typeof _143.EvidenceType;
        EvidenceTypeSDKType: typeof _143.EvidenceType;
        Request: {
            encode(message: _143.Request, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _143.Request;
            fromPartial(object: Partial<_143.Request>): _143.Request;
        };
        RequestEcho: {
            encode(message: _143.RequestEcho, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _143.RequestEcho;
            fromPartial(object: Partial<_143.RequestEcho>): _143.RequestEcho;
        };
        RequestFlush: {
            encode(_: _143.RequestFlush, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(_: any): _143.RequestFlush;
            fromPartial(_: Partial<_143.RequestFlush>): _143.RequestFlush;
        };
        RequestInfo: {
            encode(message: _143.RequestInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _143.RequestInfo;
            fromPartial(object: Partial<_143.RequestInfo>): _143.RequestInfo;
        };
        RequestSetOption: {
            encode(message: _143.RequestSetOption, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _143.RequestSetOption;
            fromPartial(object: Partial<_143.RequestSetOption>): _143.RequestSetOption;
        };
        RequestInitChain: {
            encode(message: _143.RequestInitChain, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _143.RequestInitChain;
            fromPartial(object: Partial<_143.RequestInitChain>): _143.RequestInitChain;
        };
        RequestQuery: {
            encode(message: _143.RequestQuery, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _143.RequestQuery;
            fromPartial(object: Partial<_143.RequestQuery>): _143.RequestQuery;
        };
        RequestBeginBlock: {
            encode(message: _143.RequestBeginBlock, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _143.RequestBeginBlock;
            fromPartial(object: Partial<_143.RequestBeginBlock>): _143.RequestBeginBlock;
        };
        RequestCheckTx: {
            encode(message: _143.RequestCheckTx, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _143.RequestCheckTx;
            fromPartial(object: Partial<_143.RequestCheckTx>): _143.RequestCheckTx;
        };
        RequestDeliverTx: {
            encode(message: _143.RequestDeliverTx, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _143.RequestDeliverTx;
            fromPartial(object: Partial<_143.RequestDeliverTx>): _143.RequestDeliverTx;
        };
        RequestEndBlock: {
            encode(message: _143.RequestEndBlock, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _143.RequestEndBlock;
            fromPartial(object: Partial<_143.RequestEndBlock>): _143.RequestEndBlock;
        };
        RequestCommit: {
            encode(_: _143.RequestCommit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(_: any): _143.RequestCommit;
            fromPartial(_: Partial<_143.RequestCommit>): _143.RequestCommit;
        };
        RequestListSnapshots: {
            encode(_: _143.RequestListSnapshots, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(_: any): _143.RequestListSnapshots;
            fromPartial(_: Partial<_143.RequestListSnapshots>): _143.RequestListSnapshots;
        };
        RequestOfferSnapshot: {
            encode(message: _143.RequestOfferSnapshot, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _143.RequestOfferSnapshot;
            fromPartial(object: Partial<_143.RequestOfferSnapshot>): _143.RequestOfferSnapshot;
        };
        RequestLoadSnapshotChunk: {
            encode(message: _143.RequestLoadSnapshotChunk, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _143.RequestLoadSnapshotChunk;
            fromPartial(object: Partial<_143.RequestLoadSnapshotChunk>): _143.RequestLoadSnapshotChunk;
        };
        RequestApplySnapshotChunk: {
            encode(message: _143.RequestApplySnapshotChunk, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _143.RequestApplySnapshotChunk;
            fromPartial(object: Partial<_143.RequestApplySnapshotChunk>): _143.RequestApplySnapshotChunk;
        };
        Response: {
            encode(message: _143.Response, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _143.Response;
            fromPartial(object: Partial<_143.Response>): _143.Response;
        };
        ResponseException: {
            encode(message: _143.ResponseException, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _143.ResponseException;
            fromPartial(object: Partial<_143.ResponseException>): _143.ResponseException;
        };
        ResponseEcho: {
            encode(message: _143.ResponseEcho, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _143.ResponseEcho;
            fromPartial(object: Partial<_143.ResponseEcho>): _143.ResponseEcho;
        };
        ResponseFlush: {
            encode(_: _143.ResponseFlush, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(_: any): _143.ResponseFlush;
            fromPartial(_: Partial<_143.ResponseFlush>): _143.ResponseFlush;
        };
        ResponseInfo: {
            encode(message: _143.ResponseInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _143.ResponseInfo;
            fromPartial(object: Partial<_143.ResponseInfo>): _143.ResponseInfo;
        };
        ResponseSetOption: {
            encode(message: _143.ResponseSetOption, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _143.ResponseSetOption;
            fromPartial(object: Partial<_143.ResponseSetOption>): _143.ResponseSetOption;
        };
        ResponseInitChain: {
            encode(message: _143.ResponseInitChain, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _143.ResponseInitChain;
            fromPartial(object: Partial<_143.ResponseInitChain>): _143.ResponseInitChain;
        };
        ResponseQuery: {
            encode(message: _143.ResponseQuery, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _143.ResponseQuery;
            fromPartial(object: Partial<_143.ResponseQuery>): _143.ResponseQuery;
        };
        ResponseBeginBlock: {
            encode(message: _143.ResponseBeginBlock, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _143.ResponseBeginBlock;
            fromPartial(object: Partial<_143.ResponseBeginBlock>): _143.ResponseBeginBlock;
        };
        ResponseCheckTx: {
            encode(message: _143.ResponseCheckTx, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _143.ResponseCheckTx;
            fromPartial(object: Partial<_143.ResponseCheckTx>): _143.ResponseCheckTx;
        };
        ResponseDeliverTx: {
            encode(message: _143.ResponseDeliverTx, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _143.ResponseDeliverTx;
            fromPartial(object: Partial<_143.ResponseDeliverTx>): _143.ResponseDeliverTx;
        };
        ResponseEndBlock: {
            encode(message: _143.ResponseEndBlock, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _143.ResponseEndBlock;
            fromPartial(object: Partial<_143.ResponseEndBlock>): _143.ResponseEndBlock;
        };
        ResponseCommit: {
            encode(message: _143.ResponseCommit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _143.ResponseCommit;
            fromPartial(object: Partial<_143.ResponseCommit>): _143.ResponseCommit;
        };
        ResponseListSnapshots: {
            encode(message: _143.ResponseListSnapshots, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _143.ResponseListSnapshots;
            fromPartial(object: Partial<_143.ResponseListSnapshots>): _143.ResponseListSnapshots;
        };
        ResponseOfferSnapshot: {
            encode(message: _143.ResponseOfferSnapshot, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _143.ResponseOfferSnapshot;
            fromPartial(object: Partial<_143.ResponseOfferSnapshot>): _143.ResponseOfferSnapshot;
        };
        ResponseLoadSnapshotChunk: {
            encode(message: _143.ResponseLoadSnapshotChunk, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _143.ResponseLoadSnapshotChunk;
            fromPartial(object: Partial<_143.ResponseLoadSnapshotChunk>): _143.ResponseLoadSnapshotChunk;
        };
        ResponseApplySnapshotChunk: {
            encode(message: _143.ResponseApplySnapshotChunk, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _143.ResponseApplySnapshotChunk;
            fromPartial(object: Partial<_143.ResponseApplySnapshotChunk>): _143.ResponseApplySnapshotChunk;
        };
        ConsensusParams: {
            encode(message: _143.ConsensusParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _143.ConsensusParams;
            fromPartial(object: Partial<_143.ConsensusParams>): _143.ConsensusParams;
        };
        BlockParams: {
            encode(message: _143.BlockParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _143.BlockParams;
            fromPartial(object: Partial<_143.BlockParams>): _143.BlockParams;
        };
        LastCommitInfo: {
            encode(message: _143.LastCommitInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _143.LastCommitInfo;
            fromPartial(object: Partial<_143.LastCommitInfo>): _143.LastCommitInfo;
        };
        Event: {
            encode(message: _143.Event, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _143.Event;
            fromPartial(object: Partial<_143.Event>): _143.Event;
        };
        EventAttribute: {
            encode(message: _143.EventAttribute, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _143.EventAttribute;
            fromPartial(object: Partial<_143.EventAttribute>): _143.EventAttribute;
        };
        TxResult: {
            encode(message: _143.TxResult, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _143.TxResult;
            fromPartial(object: Partial<_143.TxResult>): _143.TxResult;
        };
        Validator: {
            encode(message: _143.Validator, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _143.Validator;
            fromPartial(object: Partial<_143.Validator>): _143.Validator;
        };
        ValidatorUpdate: {
            encode(message: _143.ValidatorUpdate, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _143.ValidatorUpdate;
            fromPartial(object: Partial<_143.ValidatorUpdate>): _143.ValidatorUpdate;
        };
        VoteInfo: {
            encode(message: _143.VoteInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _143.VoteInfo;
            fromPartial(object: Partial<_143.VoteInfo>): _143.VoteInfo;
        };
        Evidence: {
            encode(message: _143.Evidence, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _143.Evidence;
            fromPartial(object: Partial<_143.Evidence>): _143.Evidence;
        };
        Snapshot: {
            encode(message: _143.Snapshot, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _143.Snapshot;
            fromPartial(object: Partial<_143.Snapshot>): _143.Snapshot;
        };
    };
    const crypto: {
        Proof: {
            encode(message: _145.Proof, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _145.Proof;
            fromPartial(object: Partial<_145.Proof>): _145.Proof;
        };
        ValueOp: {
            encode(message: _145.ValueOp, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _145.ValueOp;
            fromPartial(object: Partial<_145.ValueOp>): _145.ValueOp;
        };
        DominoOp: {
            encode(message: _145.DominoOp, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _145.DominoOp;
            fromPartial(object: Partial<_145.DominoOp>): _145.DominoOp;
        };
        ProofOp: {
            encode(message: _145.ProofOp, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _145.ProofOp;
            fromPartial(object: Partial<_145.ProofOp>): _145.ProofOp;
        };
        ProofOps: {
            encode(message: _145.ProofOps, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _145.ProofOps;
            fromPartial(object: Partial<_145.ProofOps>): _145.ProofOps;
        };
        PublicKey: {
            encode(message: _144.PublicKey, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _144.PublicKey;
            fromPartial(object: Partial<_144.PublicKey>): _144.PublicKey;
        };
    };
    namespace libs {
        const bits: {
            BitArray: {
                encode(message: _146.BitArray, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _146.BitArray;
                fromPartial(object: Partial<_146.BitArray>): _146.BitArray;
            };
        };
    }
    const p2p: {
        NetAddress: {
            encode(message: _147.NetAddress, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _147.NetAddress;
            fromPartial(object: Partial<_147.NetAddress>): _147.NetAddress;
        };
        ProtocolVersion: {
            encode(message: _147.ProtocolVersion, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _147.ProtocolVersion;
            fromPartial(object: Partial<_147.ProtocolVersion>): _147.ProtocolVersion;
        };
        DefaultNodeInfo: {
            encode(message: _147.DefaultNodeInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _147.DefaultNodeInfo;
            fromPartial(object: Partial<_147.DefaultNodeInfo>): _147.DefaultNodeInfo;
        };
        DefaultNodeInfoOther: {
            encode(message: _147.DefaultNodeInfoOther, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _147.DefaultNodeInfoOther;
            fromPartial(object: Partial<_147.DefaultNodeInfoOther>): _147.DefaultNodeInfoOther;
        };
    };
    const types: {
        ValidatorSet: {
            encode(message: _152.ValidatorSet, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _152.ValidatorSet;
            fromPartial(object: Partial<_152.ValidatorSet>): _152.ValidatorSet;
        };
        Validator: {
            encode(message: _152.Validator, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _152.Validator;
            fromPartial(object: Partial<_152.Validator>): _152.Validator;
        };
        SimpleValidator: {
            encode(message: _152.SimpleValidator, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _152.SimpleValidator;
            fromPartial(object: Partial<_152.SimpleValidator>): _152.SimpleValidator;
        };
        blockIDFlagFromJSON(object: any): _151.BlockIDFlag;
        blockIDFlagToJSON(object: _151.BlockIDFlag): string;
        signedMsgTypeFromJSON(object: any): _151.SignedMsgType;
        signedMsgTypeToJSON(object: _151.SignedMsgType): string;
        BlockIDFlag: typeof _151.BlockIDFlag;
        BlockIDFlagSDKType: typeof _151.BlockIDFlag;
        SignedMsgType: typeof _151.SignedMsgType;
        SignedMsgTypeSDKType: typeof _151.SignedMsgType;
        PartSetHeader: {
            encode(message: _151.PartSetHeader, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _151.PartSetHeader;
            fromPartial(object: Partial<_151.PartSetHeader>): _151.PartSetHeader;
        };
        Part: {
            encode(message: _151.Part, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _151.Part;
            fromPartial(object: Partial<_151.Part>): _151.Part;
        };
        BlockID: {
            encode(message: _151.BlockID, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _151.BlockID;
            fromPartial(object: Partial<_151.BlockID>): _151.BlockID;
        };
        Header: {
            encode(message: _151.Header, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _151.Header;
            fromPartial(object: Partial<_151.Header>): _151.Header;
        };
        Data: {
            encode(message: _151.Data, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _151.Data;
            fromPartial(object: Partial<_151.Data>): _151.Data;
        };
        Vote: {
            encode(message: _151.Vote, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _151.Vote;
            fromPartial(object: Partial<_151.Vote>): _151.Vote;
        };
        Commit: {
            encode(message: _151.Commit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _151.Commit;
            fromPartial(object: Partial<_151.Commit>): _151.Commit;
        };
        CommitSig: {
            encode(message: _151.CommitSig, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _151.CommitSig;
            fromPartial(object: Partial<_151.CommitSig>): _151.CommitSig;
        };
        Proposal: {
            encode(message: _151.Proposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _151.Proposal;
            fromPartial(object: Partial<_151.Proposal>): _151.Proposal;
        };
        SignedHeader: {
            encode(message: _151.SignedHeader, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _151.SignedHeader;
            fromPartial(object: Partial<_151.SignedHeader>): _151.SignedHeader;
        };
        LightBlock: {
            encode(message: _151.LightBlock, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _151.LightBlock;
            fromPartial(object: Partial<_151.LightBlock>): _151.LightBlock;
        };
        BlockMeta: {
            encode(message: _151.BlockMeta, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _151.BlockMeta;
            fromPartial(object: Partial<_151.BlockMeta>): _151.BlockMeta;
        };
        TxProof: {
            encode(message: _151.TxProof, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _151.TxProof;
            fromPartial(object: Partial<_151.TxProof>): _151.TxProof;
        };
        ConsensusParams: {
            encode(message: _150.ConsensusParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _150.ConsensusParams;
            fromPartial(object: Partial<_150.ConsensusParams>): _150.ConsensusParams;
        };
        BlockParams: {
            encode(message: _150.BlockParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _150.BlockParams;
            fromPartial(object: Partial<_150.BlockParams>): _150.BlockParams;
        };
        EvidenceParams: {
            encode(message: _150.EvidenceParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _150.EvidenceParams;
            fromPartial(object: Partial<_150.EvidenceParams>): _150.EvidenceParams;
        };
        ValidatorParams: {
            encode(message: _150.ValidatorParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _150.ValidatorParams;
            fromPartial(object: Partial<_150.ValidatorParams>): _150.ValidatorParams;
        };
        VersionParams: {
            encode(message: _150.VersionParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _150.VersionParams;
            fromPartial(object: Partial<_150.VersionParams>): _150.VersionParams;
        };
        HashedParams: {
            encode(message: _150.HashedParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _150.HashedParams;
            fromPartial(object: Partial<_150.HashedParams>): _150.HashedParams;
        };
        Evidence: {
            encode(message: _149.Evidence, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _149.Evidence;
            fromPartial(object: Partial<_149.Evidence>): _149.Evidence;
        };
        DuplicateVoteEvidence: {
            encode(message: _149.DuplicateVoteEvidence, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _149.DuplicateVoteEvidence;
            fromPartial(object: Partial<_149.DuplicateVoteEvidence>): _149.DuplicateVoteEvidence;
        };
        LightClientAttackEvidence: {
            encode(message: _149.LightClientAttackEvidence, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _149.LightClientAttackEvidence;
            fromPartial(object: Partial<_149.LightClientAttackEvidence>): _149.LightClientAttackEvidence;
        };
        EvidenceList: {
            encode(message: _149.EvidenceList, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _149.EvidenceList;
            fromPartial(object: Partial<_149.EvidenceList>): _149.EvidenceList;
        };
        Block: {
            encode(message: _148.Block, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _148.Block;
            fromPartial(object: Partial<_148.Block>): _148.Block;
        };
    };
    const version: {
        App: {
            encode(message: _153.App, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _153.App;
            fromPartial(object: Partial<_153.App>): _153.App;
        };
        Consensus: {
            encode(message: _153.Consensus, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _153.Consensus;
            fromPartial(object: Partial<_153.Consensus>): _153.Consensus;
        };
    };
}
