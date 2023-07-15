import * as _208 from "./abci/types";
import * as _209 from "./crypto/keys";
import * as _210 from "./crypto/proof";
import * as _211 from "./libs/bits/types";
import * as _212 from "./p2p/types";
import * as _213 from "./types/block";
import * as _214 from "./types/evidence";
import * as _215 from "./types/params";
import * as _216 from "./types/types";
import * as _217 from "./types/validator";
import * as _218 from "./version/types";
export declare namespace tendermint {
    const abci: {
        checkTxTypeFromJSON(object: any): _208.CheckTxType;
        checkTxTypeToJSON(object: _208.CheckTxType): string;
        responseOfferSnapshot_ResultFromJSON(object: any): _208.ResponseOfferSnapshot_Result;
        responseOfferSnapshot_ResultToJSON(object: _208.ResponseOfferSnapshot_Result): string;
        responseApplySnapshotChunk_ResultFromJSON(object: any): _208.ResponseApplySnapshotChunk_Result;
        responseApplySnapshotChunk_ResultToJSON(object: _208.ResponseApplySnapshotChunk_Result): string;
        responseProcessProposal_ProposalStatusFromJSON(object: any): _208.ResponseProcessProposal_ProposalStatus;
        responseProcessProposal_ProposalStatusToJSON(object: _208.ResponseProcessProposal_ProposalStatus): string;
        misbehaviorTypeFromJSON(object: any): _208.MisbehaviorType;
        misbehaviorTypeToJSON(object: _208.MisbehaviorType): string;
        CheckTxType: typeof _208.CheckTxType;
        CheckTxTypeSDKType: typeof _208.CheckTxType;
        ResponseOfferSnapshot_Result: typeof _208.ResponseOfferSnapshot_Result;
        ResponseOfferSnapshot_ResultSDKType: typeof _208.ResponseOfferSnapshot_Result;
        ResponseApplySnapshotChunk_Result: typeof _208.ResponseApplySnapshotChunk_Result;
        ResponseApplySnapshotChunk_ResultSDKType: typeof _208.ResponseApplySnapshotChunk_Result;
        ResponseProcessProposal_ProposalStatus: typeof _208.ResponseProcessProposal_ProposalStatus;
        ResponseProcessProposal_ProposalStatusSDKType: typeof _208.ResponseProcessProposal_ProposalStatus;
        MisbehaviorType: typeof _208.MisbehaviorType;
        MisbehaviorTypeSDKType: typeof _208.MisbehaviorType;
        Request: {
            encode(message: _208.Request, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _208.Request;
            fromPartial(object: Partial<_208.Request>): _208.Request;
        };
        RequestEcho: {
            encode(message: _208.RequestEcho, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _208.RequestEcho;
            fromPartial(object: Partial<_208.RequestEcho>): _208.RequestEcho;
        };
        RequestFlush: {
            encode(_: _208.RequestFlush, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(_: any): _208.RequestFlush;
            fromPartial(_: Partial<_208.RequestFlush>): _208.RequestFlush;
        };
        RequestInfo: {
            encode(message: _208.RequestInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _208.RequestInfo;
            fromPartial(object: Partial<_208.RequestInfo>): _208.RequestInfo;
        };
        RequestInitChain: {
            encode(message: _208.RequestInitChain, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _208.RequestInitChain;
            fromPartial(object: Partial<_208.RequestInitChain>): _208.RequestInitChain;
        };
        RequestQuery: {
            encode(message: _208.RequestQuery, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _208.RequestQuery;
            fromPartial(object: Partial<_208.RequestQuery>): _208.RequestQuery;
        };
        RequestBeginBlock: {
            encode(message: _208.RequestBeginBlock, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _208.RequestBeginBlock;
            fromPartial(object: Partial<_208.RequestBeginBlock>): _208.RequestBeginBlock;
        };
        RequestCheckTx: {
            encode(message: _208.RequestCheckTx, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _208.RequestCheckTx;
            fromPartial(object: Partial<_208.RequestCheckTx>): _208.RequestCheckTx;
        };
        RequestDeliverTx: {
            encode(message: _208.RequestDeliverTx, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _208.RequestDeliverTx;
            fromPartial(object: Partial<_208.RequestDeliverTx>): _208.RequestDeliverTx;
        };
        RequestEndBlock: {
            encode(message: _208.RequestEndBlock, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _208.RequestEndBlock;
            fromPartial(object: Partial<_208.RequestEndBlock>): _208.RequestEndBlock;
        };
        RequestCommit: {
            encode(_: _208.RequestCommit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(_: any): _208.RequestCommit;
            fromPartial(_: Partial<_208.RequestCommit>): _208.RequestCommit;
        };
        RequestListSnapshots: {
            encode(_: _208.RequestListSnapshots, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(_: any): _208.RequestListSnapshots;
            fromPartial(_: Partial<_208.RequestListSnapshots>): _208.RequestListSnapshots;
        };
        RequestOfferSnapshot: {
            encode(message: _208.RequestOfferSnapshot, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _208.RequestOfferSnapshot;
            fromPartial(object: Partial<_208.RequestOfferSnapshot>): _208.RequestOfferSnapshot;
        };
        RequestLoadSnapshotChunk: {
            encode(message: _208.RequestLoadSnapshotChunk, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _208.RequestLoadSnapshotChunk;
            fromPartial(object: Partial<_208.RequestLoadSnapshotChunk>): _208.RequestLoadSnapshotChunk;
        };
        RequestApplySnapshotChunk: {
            encode(message: _208.RequestApplySnapshotChunk, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _208.RequestApplySnapshotChunk;
            fromPartial(object: Partial<_208.RequestApplySnapshotChunk>): _208.RequestApplySnapshotChunk;
        };
        RequestPrepareProposal: {
            encode(message: _208.RequestPrepareProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _208.RequestPrepareProposal;
            fromPartial(object: Partial<_208.RequestPrepareProposal>): _208.RequestPrepareProposal;
        };
        RequestProcessProposal: {
            encode(message: _208.RequestProcessProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _208.RequestProcessProposal;
            fromPartial(object: Partial<_208.RequestProcessProposal>): _208.RequestProcessProposal;
        };
        Response: {
            encode(message: _208.Response, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _208.Response;
            fromPartial(object: Partial<_208.Response>): _208.Response;
        };
        ResponseException: {
            encode(message: _208.ResponseException, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _208.ResponseException;
            fromPartial(object: Partial<_208.ResponseException>): _208.ResponseException;
        };
        ResponseEcho: {
            encode(message: _208.ResponseEcho, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _208.ResponseEcho;
            fromPartial(object: Partial<_208.ResponseEcho>): _208.ResponseEcho;
        };
        ResponseFlush: {
            encode(_: _208.ResponseFlush, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(_: any): _208.ResponseFlush;
            fromPartial(_: Partial<_208.ResponseFlush>): _208.ResponseFlush;
        };
        ResponseInfo: {
            encode(message: _208.ResponseInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _208.ResponseInfo;
            fromPartial(object: Partial<_208.ResponseInfo>): _208.ResponseInfo;
        };
        ResponseInitChain: {
            encode(message: _208.ResponseInitChain, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _208.ResponseInitChain;
            fromPartial(object: Partial<_208.ResponseInitChain>): _208.ResponseInitChain;
        };
        ResponseQuery: {
            encode(message: _208.ResponseQuery, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _208.ResponseQuery;
            fromPartial(object: Partial<_208.ResponseQuery>): _208.ResponseQuery;
        };
        ResponseBeginBlock: {
            encode(message: _208.ResponseBeginBlock, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _208.ResponseBeginBlock;
            fromPartial(object: Partial<_208.ResponseBeginBlock>): _208.ResponseBeginBlock;
        };
        ResponseCheckTx: {
            encode(message: _208.ResponseCheckTx, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _208.ResponseCheckTx;
            fromPartial(object: Partial<_208.ResponseCheckTx>): _208.ResponseCheckTx;
        };
        ResponseDeliverTx: {
            encode(message: _208.ResponseDeliverTx, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _208.ResponseDeliverTx;
            fromPartial(object: Partial<_208.ResponseDeliverTx>): _208.ResponseDeliverTx;
        };
        ResponseEndBlock: {
            encode(message: _208.ResponseEndBlock, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _208.ResponseEndBlock;
            fromPartial(object: Partial<_208.ResponseEndBlock>): _208.ResponseEndBlock;
        };
        ResponseCommit: {
            encode(message: _208.ResponseCommit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _208.ResponseCommit;
            fromPartial(object: Partial<_208.ResponseCommit>): _208.ResponseCommit;
        };
        ResponseListSnapshots: {
            encode(message: _208.ResponseListSnapshots, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _208.ResponseListSnapshots;
            fromPartial(object: Partial<_208.ResponseListSnapshots>): _208.ResponseListSnapshots;
        };
        ResponseOfferSnapshot: {
            encode(message: _208.ResponseOfferSnapshot, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _208.ResponseOfferSnapshot;
            fromPartial(object: Partial<_208.ResponseOfferSnapshot>): _208.ResponseOfferSnapshot;
        };
        ResponseLoadSnapshotChunk: {
            encode(message: _208.ResponseLoadSnapshotChunk, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _208.ResponseLoadSnapshotChunk;
            fromPartial(object: Partial<_208.ResponseLoadSnapshotChunk>): _208.ResponseLoadSnapshotChunk;
        };
        ResponseApplySnapshotChunk: {
            encode(message: _208.ResponseApplySnapshotChunk, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _208.ResponseApplySnapshotChunk;
            fromPartial(object: Partial<_208.ResponseApplySnapshotChunk>): _208.ResponseApplySnapshotChunk;
        };
        ResponsePrepareProposal: {
            encode(message: _208.ResponsePrepareProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _208.ResponsePrepareProposal;
            fromPartial(object: Partial<_208.ResponsePrepareProposal>): _208.ResponsePrepareProposal;
        };
        ResponseProcessProposal: {
            encode(message: _208.ResponseProcessProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _208.ResponseProcessProposal;
            fromPartial(object: Partial<_208.ResponseProcessProposal>): _208.ResponseProcessProposal;
        };
        CommitInfo: {
            encode(message: _208.CommitInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _208.CommitInfo;
            fromPartial(object: Partial<_208.CommitInfo>): _208.CommitInfo;
        };
        ExtendedCommitInfo: {
            encode(message: _208.ExtendedCommitInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _208.ExtendedCommitInfo;
            fromPartial(object: Partial<_208.ExtendedCommitInfo>): _208.ExtendedCommitInfo;
        };
        Event: {
            encode(message: _208.Event, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _208.Event;
            fromPartial(object: Partial<_208.Event>): _208.Event;
        };
        EventAttribute: {
            encode(message: _208.EventAttribute, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _208.EventAttribute;
            fromPartial(object: Partial<_208.EventAttribute>): _208.EventAttribute;
        };
        TxResult: {
            encode(message: _208.TxResult, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _208.TxResult;
            fromPartial(object: Partial<_208.TxResult>): _208.TxResult;
        };
        Validator: {
            encode(message: _208.Validator, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _208.Validator;
            fromPartial(object: Partial<_208.Validator>): _208.Validator;
        };
        ValidatorUpdate: {
            encode(message: _208.ValidatorUpdate, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _208.ValidatorUpdate;
            fromPartial(object: Partial<_208.ValidatorUpdate>): _208.ValidatorUpdate;
        };
        VoteInfo: {
            encode(message: _208.VoteInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _208.VoteInfo;
            fromPartial(object: Partial<_208.VoteInfo>): _208.VoteInfo;
        };
        ExtendedVoteInfo: {
            encode(message: _208.ExtendedVoteInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _208.ExtendedVoteInfo;
            fromPartial(object: Partial<_208.ExtendedVoteInfo>): _208.ExtendedVoteInfo;
        };
        Misbehavior: {
            encode(message: _208.Misbehavior, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _208.Misbehavior;
            fromPartial(object: Partial<_208.Misbehavior>): _208.Misbehavior;
        };
        Snapshot: {
            encode(message: _208.Snapshot, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _208.Snapshot;
            fromPartial(object: Partial<_208.Snapshot>): _208.Snapshot;
        };
    };
    const crypto: {
        Proof: {
            encode(message: _210.Proof, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _210.Proof;
            fromPartial(object: Partial<_210.Proof>): _210.Proof;
        };
        ValueOp: {
            encode(message: _210.ValueOp, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _210.ValueOp;
            fromPartial(object: Partial<_210.ValueOp>): _210.ValueOp;
        };
        DominoOp: {
            encode(message: _210.DominoOp, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _210.DominoOp;
            fromPartial(object: Partial<_210.DominoOp>): _210.DominoOp;
        };
        ProofOp: {
            encode(message: _210.ProofOp, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _210.ProofOp;
            fromPartial(object: Partial<_210.ProofOp>): _210.ProofOp;
        };
        ProofOps: {
            encode(message: _210.ProofOps, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _210.ProofOps;
            fromPartial(object: Partial<_210.ProofOps>): _210.ProofOps;
        };
        PublicKey: {
            encode(message: _209.PublicKey, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _209.PublicKey;
            fromPartial(object: Partial<_209.PublicKey>): _209.PublicKey;
        };
    };
    namespace libs {
        const bits: {
            BitArray: {
                encode(message: _211.BitArray, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _211.BitArray;
                fromPartial(object: Partial<_211.BitArray>): _211.BitArray;
            };
        };
    }
    const p2p: {
        NetAddress: {
            encode(message: _212.NetAddress, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _212.NetAddress;
            fromPartial(object: Partial<_212.NetAddress>): _212.NetAddress;
        };
        ProtocolVersion: {
            encode(message: _212.ProtocolVersion, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _212.ProtocolVersion;
            fromPartial(object: Partial<_212.ProtocolVersion>): _212.ProtocolVersion;
        };
        DefaultNodeInfo: {
            encode(message: _212.DefaultNodeInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _212.DefaultNodeInfo;
            fromPartial(object: Partial<_212.DefaultNodeInfo>): _212.DefaultNodeInfo;
        };
        DefaultNodeInfoOther: {
            encode(message: _212.DefaultNodeInfoOther, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _212.DefaultNodeInfoOther;
            fromPartial(object: Partial<_212.DefaultNodeInfoOther>): _212.DefaultNodeInfoOther;
        };
    };
    const types: {
        ValidatorSet: {
            encode(message: _217.ValidatorSet, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _217.ValidatorSet;
            fromPartial(object: Partial<_217.ValidatorSet>): _217.ValidatorSet;
        };
        Validator: {
            encode(message: _217.Validator, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _217.Validator;
            fromPartial(object: Partial<_217.Validator>): _217.Validator;
        };
        SimpleValidator: {
            encode(message: _217.SimpleValidator, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _217.SimpleValidator;
            fromPartial(object: Partial<_217.SimpleValidator>): _217.SimpleValidator;
        };
        blockIDFlagFromJSON(object: any): _216.BlockIDFlag;
        blockIDFlagToJSON(object: _216.BlockIDFlag): string;
        signedMsgTypeFromJSON(object: any): _216.SignedMsgType;
        signedMsgTypeToJSON(object: _216.SignedMsgType): string;
        BlockIDFlag: typeof _216.BlockIDFlag;
        BlockIDFlagSDKType: typeof _216.BlockIDFlag;
        SignedMsgType: typeof _216.SignedMsgType;
        SignedMsgTypeSDKType: typeof _216.SignedMsgType;
        PartSetHeader: {
            encode(message: _216.PartSetHeader, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _216.PartSetHeader;
            fromPartial(object: Partial<_216.PartSetHeader>): _216.PartSetHeader;
        };
        Part: {
            encode(message: _216.Part, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _216.Part;
            fromPartial(object: Partial<_216.Part>): _216.Part;
        };
        BlockID: {
            encode(message: _216.BlockID, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _216.BlockID;
            fromPartial(object: Partial<_216.BlockID>): _216.BlockID;
        };
        Header: {
            encode(message: _216.Header, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _216.Header;
            fromPartial(object: Partial<_216.Header>): _216.Header;
        };
        Data: {
            encode(message: _216.Data, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _216.Data;
            fromPartial(object: Partial<_216.Data>): _216.Data;
        };
        Vote: {
            encode(message: _216.Vote, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _216.Vote;
            fromPartial(object: Partial<_216.Vote>): _216.Vote;
        };
        Commit: {
            encode(message: _216.Commit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _216.Commit;
            fromPartial(object: Partial<_216.Commit>): _216.Commit;
        };
        CommitSig: {
            encode(message: _216.CommitSig, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _216.CommitSig;
            fromPartial(object: Partial<_216.CommitSig>): _216.CommitSig;
        };
        Proposal: {
            encode(message: _216.Proposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _216.Proposal;
            fromPartial(object: Partial<_216.Proposal>): _216.Proposal;
        };
        SignedHeader: {
            encode(message: _216.SignedHeader, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _216.SignedHeader;
            fromPartial(object: Partial<_216.SignedHeader>): _216.SignedHeader;
        };
        LightBlock: {
            encode(message: _216.LightBlock, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _216.LightBlock;
            fromPartial(object: Partial<_216.LightBlock>): _216.LightBlock;
        };
        BlockMeta: {
            encode(message: _216.BlockMeta, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _216.BlockMeta;
            fromPartial(object: Partial<_216.BlockMeta>): _216.BlockMeta;
        };
        TxProof: {
            encode(message: _216.TxProof, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _216.TxProof;
            fromPartial(object: Partial<_216.TxProof>): _216.TxProof;
        };
        ConsensusParams: {
            encode(message: _215.ConsensusParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _215.ConsensusParams;
            fromPartial(object: Partial<_215.ConsensusParams>): _215.ConsensusParams;
        };
        BlockParams: {
            encode(message: _215.BlockParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _215.BlockParams;
            fromPartial(object: Partial<_215.BlockParams>): _215.BlockParams;
        };
        EvidenceParams: {
            encode(message: _215.EvidenceParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _215.EvidenceParams;
            fromPartial(object: Partial<_215.EvidenceParams>): _215.EvidenceParams;
        };
        ValidatorParams: {
            encode(message: _215.ValidatorParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _215.ValidatorParams;
            fromPartial(object: Partial<_215.ValidatorParams>): _215.ValidatorParams;
        };
        VersionParams: {
            encode(message: _215.VersionParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _215.VersionParams;
            fromPartial(object: Partial<_215.VersionParams>): _215.VersionParams;
        };
        HashedParams: {
            encode(message: _215.HashedParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _215.HashedParams;
            fromPartial(object: Partial<_215.HashedParams>): _215.HashedParams;
        };
        Evidence: {
            encode(message: _214.Evidence, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _214.Evidence;
            fromPartial(object: Partial<_214.Evidence>): _214.Evidence;
        };
        DuplicateVoteEvidence: {
            encode(message: _214.DuplicateVoteEvidence, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _214.DuplicateVoteEvidence;
            fromPartial(object: Partial<_214.DuplicateVoteEvidence>): _214.DuplicateVoteEvidence;
        };
        LightClientAttackEvidence: {
            encode(message: _214.LightClientAttackEvidence, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _214.LightClientAttackEvidence;
            fromPartial(object: Partial<_214.LightClientAttackEvidence>): _214.LightClientAttackEvidence;
        };
        EvidenceList: {
            encode(message: _214.EvidenceList, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _214.EvidenceList;
            fromPartial(object: Partial<_214.EvidenceList>): _214.EvidenceList;
        };
        Block: {
            encode(message: _213.Block, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _213.Block;
            fromPartial(object: Partial<_213.Block>): _213.Block;
        };
    };
    const version: {
        App: {
            encode(message: _218.App, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _218.App;
            fromPartial(object: Partial<_218.App>): _218.App;
        };
        Consensus: {
            encode(message: _218.Consensus, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _218.Consensus;
            fromPartial(object: Partial<_218.Consensus>): _218.Consensus;
        };
    };
}
