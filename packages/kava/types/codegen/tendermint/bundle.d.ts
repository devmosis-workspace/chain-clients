import * as _160 from "./abci/types";
import * as _161 from "./crypto/keys";
import * as _162 from "./crypto/proof";
import * as _163 from "./libs/bits/types";
import * as _164 from "./p2p/types";
import * as _165 from "./types/block";
import * as _166 from "./types/evidence";
import * as _167 from "./types/params";
import * as _168 from "./types/types";
import * as _169 from "./types/validator";
import * as _170 from "./version/types";
export declare namespace tendermint {
    const abci: {
        checkTxTypeFromJSON(object: any): _160.CheckTxType;
        checkTxTypeToJSON(object: _160.CheckTxType): string;
        responseOfferSnapshot_ResultFromJSON(object: any): _160.ResponseOfferSnapshot_Result;
        responseOfferSnapshot_ResultToJSON(object: _160.ResponseOfferSnapshot_Result): string;
        responseApplySnapshotChunk_ResultFromJSON(object: any): _160.ResponseApplySnapshotChunk_Result;
        responseApplySnapshotChunk_ResultToJSON(object: _160.ResponseApplySnapshotChunk_Result): string;
        evidenceTypeFromJSON(object: any): _160.EvidenceType;
        evidenceTypeToJSON(object: _160.EvidenceType): string;
        CheckTxType: typeof _160.CheckTxType;
        CheckTxTypeSDKType: typeof _160.CheckTxType;
        ResponseOfferSnapshot_Result: typeof _160.ResponseOfferSnapshot_Result;
        ResponseOfferSnapshot_ResultSDKType: typeof _160.ResponseOfferSnapshot_Result;
        ResponseApplySnapshotChunk_Result: typeof _160.ResponseApplySnapshotChunk_Result;
        ResponseApplySnapshotChunk_ResultSDKType: typeof _160.ResponseApplySnapshotChunk_Result;
        EvidenceType: typeof _160.EvidenceType;
        EvidenceTypeSDKType: typeof _160.EvidenceType;
        Request: {
            encode(message: _160.Request, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _160.Request;
            fromPartial(object: Partial<_160.Request>): _160.Request;
        };
        RequestEcho: {
            encode(message: _160.RequestEcho, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _160.RequestEcho;
            fromPartial(object: Partial<_160.RequestEcho>): _160.RequestEcho;
        };
        RequestFlush: {
            encode(_: _160.RequestFlush, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(_: any): _160.RequestFlush;
            fromPartial(_: Partial<_160.RequestFlush>): _160.RequestFlush;
        };
        RequestInfo: {
            encode(message: _160.RequestInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _160.RequestInfo;
            fromPartial(object: Partial<_160.RequestInfo>): _160.RequestInfo;
        };
        RequestSetOption: {
            encode(message: _160.RequestSetOption, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _160.RequestSetOption;
            fromPartial(object: Partial<_160.RequestSetOption>): _160.RequestSetOption;
        };
        RequestInitChain: {
            encode(message: _160.RequestInitChain, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _160.RequestInitChain;
            fromPartial(object: Partial<_160.RequestInitChain>): _160.RequestInitChain;
        };
        RequestQuery: {
            encode(message: _160.RequestQuery, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _160.RequestQuery;
            fromPartial(object: Partial<_160.RequestQuery>): _160.RequestQuery;
        };
        RequestBeginBlock: {
            encode(message: _160.RequestBeginBlock, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _160.RequestBeginBlock;
            fromPartial(object: Partial<_160.RequestBeginBlock>): _160.RequestBeginBlock;
        };
        RequestCheckTx: {
            encode(message: _160.RequestCheckTx, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _160.RequestCheckTx;
            fromPartial(object: Partial<_160.RequestCheckTx>): _160.RequestCheckTx;
        };
        RequestDeliverTx: {
            encode(message: _160.RequestDeliverTx, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _160.RequestDeliverTx;
            fromPartial(object: Partial<_160.RequestDeliverTx>): _160.RequestDeliverTx;
        };
        RequestEndBlock: {
            encode(message: _160.RequestEndBlock, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _160.RequestEndBlock;
            fromPartial(object: Partial<_160.RequestEndBlock>): _160.RequestEndBlock;
        };
        RequestCommit: {
            encode(_: _160.RequestCommit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(_: any): _160.RequestCommit;
            fromPartial(_: Partial<_160.RequestCommit>): _160.RequestCommit;
        };
        RequestListSnapshots: {
            encode(_: _160.RequestListSnapshots, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(_: any): _160.RequestListSnapshots;
            fromPartial(_: Partial<_160.RequestListSnapshots>): _160.RequestListSnapshots;
        };
        RequestOfferSnapshot: {
            encode(message: _160.RequestOfferSnapshot, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _160.RequestOfferSnapshot;
            fromPartial(object: Partial<_160.RequestOfferSnapshot>): _160.RequestOfferSnapshot;
        };
        RequestLoadSnapshotChunk: {
            encode(message: _160.RequestLoadSnapshotChunk, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _160.RequestLoadSnapshotChunk;
            fromPartial(object: Partial<_160.RequestLoadSnapshotChunk>): _160.RequestLoadSnapshotChunk;
        };
        RequestApplySnapshotChunk: {
            encode(message: _160.RequestApplySnapshotChunk, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _160.RequestApplySnapshotChunk;
            fromPartial(object: Partial<_160.RequestApplySnapshotChunk>): _160.RequestApplySnapshotChunk;
        };
        Response: {
            encode(message: _160.Response, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _160.Response;
            fromPartial(object: Partial<_160.Response>): _160.Response;
        };
        ResponseException: {
            encode(message: _160.ResponseException, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _160.ResponseException;
            fromPartial(object: Partial<_160.ResponseException>): _160.ResponseException;
        };
        ResponseEcho: {
            encode(message: _160.ResponseEcho, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _160.ResponseEcho;
            fromPartial(object: Partial<_160.ResponseEcho>): _160.ResponseEcho;
        };
        ResponseFlush: {
            encode(_: _160.ResponseFlush, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(_: any): _160.ResponseFlush;
            fromPartial(_: Partial<_160.ResponseFlush>): _160.ResponseFlush;
        };
        ResponseInfo: {
            encode(message: _160.ResponseInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _160.ResponseInfo;
            fromPartial(object: Partial<_160.ResponseInfo>): _160.ResponseInfo;
        };
        ResponseSetOption: {
            encode(message: _160.ResponseSetOption, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _160.ResponseSetOption;
            fromPartial(object: Partial<_160.ResponseSetOption>): _160.ResponseSetOption;
        };
        ResponseInitChain: {
            encode(message: _160.ResponseInitChain, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _160.ResponseInitChain;
            fromPartial(object: Partial<_160.ResponseInitChain>): _160.ResponseInitChain;
        };
        ResponseQuery: {
            encode(message: _160.ResponseQuery, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _160.ResponseQuery;
            fromPartial(object: Partial<_160.ResponseQuery>): _160.ResponseQuery;
        };
        ResponseBeginBlock: {
            encode(message: _160.ResponseBeginBlock, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _160.ResponseBeginBlock;
            fromPartial(object: Partial<_160.ResponseBeginBlock>): _160.ResponseBeginBlock;
        };
        ResponseCheckTx: {
            encode(message: _160.ResponseCheckTx, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _160.ResponseCheckTx;
            fromPartial(object: Partial<_160.ResponseCheckTx>): _160.ResponseCheckTx;
        };
        ResponseDeliverTx: {
            encode(message: _160.ResponseDeliverTx, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _160.ResponseDeliverTx;
            fromPartial(object: Partial<_160.ResponseDeliverTx>): _160.ResponseDeliverTx;
        };
        ResponseEndBlock: {
            encode(message: _160.ResponseEndBlock, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _160.ResponseEndBlock;
            fromPartial(object: Partial<_160.ResponseEndBlock>): _160.ResponseEndBlock;
        };
        ResponseCommit: {
            encode(message: _160.ResponseCommit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _160.ResponseCommit;
            fromPartial(object: Partial<_160.ResponseCommit>): _160.ResponseCommit;
        };
        ResponseListSnapshots: {
            encode(message: _160.ResponseListSnapshots, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _160.ResponseListSnapshots;
            fromPartial(object: Partial<_160.ResponseListSnapshots>): _160.ResponseListSnapshots;
        };
        ResponseOfferSnapshot: {
            encode(message: _160.ResponseOfferSnapshot, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _160.ResponseOfferSnapshot;
            fromPartial(object: Partial<_160.ResponseOfferSnapshot>): _160.ResponseOfferSnapshot;
        };
        ResponseLoadSnapshotChunk: {
            encode(message: _160.ResponseLoadSnapshotChunk, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _160.ResponseLoadSnapshotChunk;
            fromPartial(object: Partial<_160.ResponseLoadSnapshotChunk>): _160.ResponseLoadSnapshotChunk;
        };
        ResponseApplySnapshotChunk: {
            encode(message: _160.ResponseApplySnapshotChunk, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _160.ResponseApplySnapshotChunk;
            fromPartial(object: Partial<_160.ResponseApplySnapshotChunk>): _160.ResponseApplySnapshotChunk;
        };
        ConsensusParams: {
            encode(message: _160.ConsensusParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _160.ConsensusParams;
            fromPartial(object: Partial<_160.ConsensusParams>): _160.ConsensusParams;
        };
        BlockParams: {
            encode(message: _160.BlockParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _160.BlockParams;
            fromPartial(object: Partial<_160.BlockParams>): _160.BlockParams;
        };
        LastCommitInfo: {
            encode(message: _160.LastCommitInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _160.LastCommitInfo;
            fromPartial(object: Partial<_160.LastCommitInfo>): _160.LastCommitInfo;
        };
        Event: {
            encode(message: _160.Event, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _160.Event;
            fromPartial(object: Partial<_160.Event>): _160.Event;
        };
        EventAttribute: {
            encode(message: _160.EventAttribute, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _160.EventAttribute;
            fromPartial(object: Partial<_160.EventAttribute>): _160.EventAttribute;
        };
        TxResult: {
            encode(message: _160.TxResult, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _160.TxResult;
            fromPartial(object: Partial<_160.TxResult>): _160.TxResult;
        };
        Validator: {
            encode(message: _160.Validator, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _160.Validator;
            fromPartial(object: Partial<_160.Validator>): _160.Validator;
        };
        ValidatorUpdate: {
            encode(message: _160.ValidatorUpdate, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _160.ValidatorUpdate;
            fromPartial(object: Partial<_160.ValidatorUpdate>): _160.ValidatorUpdate;
        };
        VoteInfo: {
            encode(message: _160.VoteInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _160.VoteInfo;
            fromPartial(object: Partial<_160.VoteInfo>): _160.VoteInfo;
        };
        Evidence: {
            encode(message: _160.Evidence, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _160.Evidence;
            fromPartial(object: Partial<_160.Evidence>): _160.Evidence;
        };
        Snapshot: {
            encode(message: _160.Snapshot, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _160.Snapshot;
            fromPartial(object: Partial<_160.Snapshot>): _160.Snapshot;
        };
    };
    const crypto: {
        Proof: {
            encode(message: _162.Proof, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _162.Proof;
            fromPartial(object: Partial<_162.Proof>): _162.Proof;
        };
        ValueOp: {
            encode(message: _162.ValueOp, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _162.ValueOp;
            fromPartial(object: Partial<_162.ValueOp>): _162.ValueOp;
        };
        DominoOp: {
            encode(message: _162.DominoOp, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _162.DominoOp;
            fromPartial(object: Partial<_162.DominoOp>): _162.DominoOp;
        };
        ProofOp: {
            encode(message: _162.ProofOp, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _162.ProofOp;
            fromPartial(object: Partial<_162.ProofOp>): _162.ProofOp;
        };
        ProofOps: {
            encode(message: _162.ProofOps, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _162.ProofOps;
            fromPartial(object: Partial<_162.ProofOps>): _162.ProofOps;
        };
        PublicKey: {
            encode(message: _161.PublicKey, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _161.PublicKey;
            fromPartial(object: Partial<_161.PublicKey>): _161.PublicKey;
        };
    };
    namespace libs {
        const bits: {
            BitArray: {
                encode(message: _163.BitArray, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _163.BitArray;
                fromPartial(object: Partial<_163.BitArray>): _163.BitArray;
            };
        };
    }
    const p2p: {
        NetAddress: {
            encode(message: _164.NetAddress, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _164.NetAddress;
            fromPartial(object: Partial<_164.NetAddress>): _164.NetAddress;
        };
        ProtocolVersion: {
            encode(message: _164.ProtocolVersion, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _164.ProtocolVersion;
            fromPartial(object: Partial<_164.ProtocolVersion>): _164.ProtocolVersion;
        };
        DefaultNodeInfo: {
            encode(message: _164.DefaultNodeInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _164.DefaultNodeInfo;
            fromPartial(object: Partial<_164.DefaultNodeInfo>): _164.DefaultNodeInfo;
        };
        DefaultNodeInfoOther: {
            encode(message: _164.DefaultNodeInfoOther, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _164.DefaultNodeInfoOther;
            fromPartial(object: Partial<_164.DefaultNodeInfoOther>): _164.DefaultNodeInfoOther;
        };
    };
    const types: {
        ValidatorSet: {
            encode(message: _169.ValidatorSet, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _169.ValidatorSet;
            fromPartial(object: Partial<_169.ValidatorSet>): _169.ValidatorSet;
        };
        Validator: {
            encode(message: _169.Validator, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _169.Validator;
            fromPartial(object: Partial<_169.Validator>): _169.Validator;
        };
        SimpleValidator: {
            encode(message: _169.SimpleValidator, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _169.SimpleValidator;
            fromPartial(object: Partial<_169.SimpleValidator>): _169.SimpleValidator;
        };
        blockIDFlagFromJSON(object: any): _168.BlockIDFlag;
        blockIDFlagToJSON(object: _168.BlockIDFlag): string;
        signedMsgTypeFromJSON(object: any): _168.SignedMsgType;
        signedMsgTypeToJSON(object: _168.SignedMsgType): string;
        BlockIDFlag: typeof _168.BlockIDFlag;
        BlockIDFlagSDKType: typeof _168.BlockIDFlag;
        SignedMsgType: typeof _168.SignedMsgType;
        SignedMsgTypeSDKType: typeof _168.SignedMsgType;
        PartSetHeader: {
            encode(message: _168.PartSetHeader, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _168.PartSetHeader;
            fromPartial(object: Partial<_168.PartSetHeader>): _168.PartSetHeader;
        };
        Part: {
            encode(message: _168.Part, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _168.Part;
            fromPartial(object: Partial<_168.Part>): _168.Part;
        };
        BlockID: {
            encode(message: _168.BlockID, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _168.BlockID;
            fromPartial(object: Partial<_168.BlockID>): _168.BlockID;
        };
        Header: {
            encode(message: _168.Header, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _168.Header;
            fromPartial(object: Partial<_168.Header>): _168.Header;
        };
        Data: {
            encode(message: _168.Data, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _168.Data;
            fromPartial(object: Partial<_168.Data>): _168.Data;
        };
        Vote: {
            encode(message: _168.Vote, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _168.Vote;
            fromPartial(object: Partial<_168.Vote>): _168.Vote;
        };
        Commit: {
            encode(message: _168.Commit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _168.Commit;
            fromPartial(object: Partial<_168.Commit>): _168.Commit;
        };
        CommitSig: {
            encode(message: _168.CommitSig, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _168.CommitSig;
            fromPartial(object: Partial<_168.CommitSig>): _168.CommitSig;
        };
        Proposal: {
            encode(message: _168.Proposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _168.Proposal;
            fromPartial(object: Partial<_168.Proposal>): _168.Proposal;
        };
        SignedHeader: {
            encode(message: _168.SignedHeader, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _168.SignedHeader;
            fromPartial(object: Partial<_168.SignedHeader>): _168.SignedHeader;
        };
        LightBlock: {
            encode(message: _168.LightBlock, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _168.LightBlock;
            fromPartial(object: Partial<_168.LightBlock>): _168.LightBlock;
        };
        BlockMeta: {
            encode(message: _168.BlockMeta, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _168.BlockMeta;
            fromPartial(object: Partial<_168.BlockMeta>): _168.BlockMeta;
        };
        TxProof: {
            encode(message: _168.TxProof, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _168.TxProof;
            fromPartial(object: Partial<_168.TxProof>): _168.TxProof;
        };
        ConsensusParams: {
            encode(message: _167.ConsensusParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _167.ConsensusParams;
            fromPartial(object: Partial<_167.ConsensusParams>): _167.ConsensusParams;
        };
        BlockParams: {
            encode(message: _167.BlockParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _167.BlockParams;
            fromPartial(object: Partial<_167.BlockParams>): _167.BlockParams;
        };
        EvidenceParams: {
            encode(message: _167.EvidenceParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _167.EvidenceParams;
            fromPartial(object: Partial<_167.EvidenceParams>): _167.EvidenceParams;
        };
        ValidatorParams: {
            encode(message: _167.ValidatorParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _167.ValidatorParams;
            fromPartial(object: Partial<_167.ValidatorParams>): _167.ValidatorParams;
        };
        VersionParams: {
            encode(message: _167.VersionParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _167.VersionParams;
            fromPartial(object: Partial<_167.VersionParams>): _167.VersionParams;
        };
        HashedParams: {
            encode(message: _167.HashedParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _167.HashedParams;
            fromPartial(object: Partial<_167.HashedParams>): _167.HashedParams;
        };
        Evidence: {
            encode(message: _166.Evidence, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _166.Evidence;
            fromPartial(object: Partial<_166.Evidence>): _166.Evidence;
        };
        DuplicateVoteEvidence: {
            encode(message: _166.DuplicateVoteEvidence, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _166.DuplicateVoteEvidence;
            fromPartial(object: Partial<_166.DuplicateVoteEvidence>): _166.DuplicateVoteEvidence;
        };
        LightClientAttackEvidence: {
            encode(message: _166.LightClientAttackEvidence, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _166.LightClientAttackEvidence;
            fromPartial(object: Partial<_166.LightClientAttackEvidence>): _166.LightClientAttackEvidence;
        };
        EvidenceList: {
            encode(message: _166.EvidenceList, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _166.EvidenceList;
            fromPartial(object: Partial<_166.EvidenceList>): _166.EvidenceList;
        };
        Block: {
            encode(message: _165.Block, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _165.Block;
            fromPartial(object: Partial<_165.Block>): _165.Block;
        };
    };
    const version: {
        App: {
            encode(message: _170.App, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _170.App;
            fromPartial(object: Partial<_170.App>): _170.App;
        };
        Consensus: {
            encode(message: _170.Consensus, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _170.Consensus;
            fromPartial(object: Partial<_170.Consensus>): _170.Consensus;
        };
    };
}
