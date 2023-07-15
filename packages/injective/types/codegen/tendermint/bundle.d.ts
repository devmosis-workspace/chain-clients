import * as _178 from "./abci/types";
import * as _179 from "./crypto/keys";
import * as _180 from "./crypto/proof";
import * as _181 from "./libs/bits/types";
import * as _182 from "./p2p/types";
import * as _183 from "./types/block";
import * as _184 from "./types/evidence";
import * as _185 from "./types/params";
import * as _186 from "./types/types";
import * as _187 from "./types/validator";
import * as _188 from "./version/types";
export declare namespace tendermint {
    const abci: {
        checkTxTypeFromJSON(object: any): _178.CheckTxType;
        checkTxTypeToJSON(object: _178.CheckTxType): string;
        responseOfferSnapshot_ResultFromJSON(object: any): _178.ResponseOfferSnapshot_Result;
        responseOfferSnapshot_ResultToJSON(object: _178.ResponseOfferSnapshot_Result): string;
        responseApplySnapshotChunk_ResultFromJSON(object: any): _178.ResponseApplySnapshotChunk_Result;
        responseApplySnapshotChunk_ResultToJSON(object: _178.ResponseApplySnapshotChunk_Result): string;
        responseProcessProposal_ProposalStatusFromJSON(object: any): _178.ResponseProcessProposal_ProposalStatus;
        responseProcessProposal_ProposalStatusToJSON(object: _178.ResponseProcessProposal_ProposalStatus): string;
        misbehaviorTypeFromJSON(object: any): _178.MisbehaviorType;
        misbehaviorTypeToJSON(object: _178.MisbehaviorType): string;
        CheckTxType: typeof _178.CheckTxType;
        CheckTxTypeSDKType: typeof _178.CheckTxType;
        ResponseOfferSnapshot_Result: typeof _178.ResponseOfferSnapshot_Result;
        ResponseOfferSnapshot_ResultSDKType: typeof _178.ResponseOfferSnapshot_Result;
        ResponseApplySnapshotChunk_Result: typeof _178.ResponseApplySnapshotChunk_Result;
        ResponseApplySnapshotChunk_ResultSDKType: typeof _178.ResponseApplySnapshotChunk_Result;
        ResponseProcessProposal_ProposalStatus: typeof _178.ResponseProcessProposal_ProposalStatus;
        ResponseProcessProposal_ProposalStatusSDKType: typeof _178.ResponseProcessProposal_ProposalStatus;
        MisbehaviorType: typeof _178.MisbehaviorType;
        MisbehaviorTypeSDKType: typeof _178.MisbehaviorType;
        Request: {
            encode(message: _178.Request, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _178.Request;
            fromPartial(object: Partial<_178.Request>): _178.Request;
        };
        RequestEcho: {
            encode(message: _178.RequestEcho, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _178.RequestEcho;
            fromPartial(object: Partial<_178.RequestEcho>): _178.RequestEcho;
        };
        RequestFlush: {
            encode(_: _178.RequestFlush, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(_: any): _178.RequestFlush;
            fromPartial(_: Partial<_178.RequestFlush>): _178.RequestFlush;
        };
        RequestInfo: {
            encode(message: _178.RequestInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _178.RequestInfo;
            fromPartial(object: Partial<_178.RequestInfo>): _178.RequestInfo;
        };
        RequestInitChain: {
            encode(message: _178.RequestInitChain, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _178.RequestInitChain;
            fromPartial(object: Partial<_178.RequestInitChain>): _178.RequestInitChain;
        };
        RequestQuery: {
            encode(message: _178.RequestQuery, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _178.RequestQuery;
            fromPartial(object: Partial<_178.RequestQuery>): _178.RequestQuery;
        };
        RequestBeginBlock: {
            encode(message: _178.RequestBeginBlock, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _178.RequestBeginBlock;
            fromPartial(object: Partial<_178.RequestBeginBlock>): _178.RequestBeginBlock;
        };
        RequestCheckTx: {
            encode(message: _178.RequestCheckTx, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _178.RequestCheckTx;
            fromPartial(object: Partial<_178.RequestCheckTx>): _178.RequestCheckTx;
        };
        RequestDeliverTx: {
            encode(message: _178.RequestDeliverTx, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _178.RequestDeliverTx;
            fromPartial(object: Partial<_178.RequestDeliverTx>): _178.RequestDeliverTx;
        };
        RequestEndBlock: {
            encode(message: _178.RequestEndBlock, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _178.RequestEndBlock;
            fromPartial(object: Partial<_178.RequestEndBlock>): _178.RequestEndBlock;
        };
        RequestCommit: {
            encode(_: _178.RequestCommit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(_: any): _178.RequestCommit;
            fromPartial(_: Partial<_178.RequestCommit>): _178.RequestCommit;
        };
        RequestListSnapshots: {
            encode(_: _178.RequestListSnapshots, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(_: any): _178.RequestListSnapshots;
            fromPartial(_: Partial<_178.RequestListSnapshots>): _178.RequestListSnapshots;
        };
        RequestOfferSnapshot: {
            encode(message: _178.RequestOfferSnapshot, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _178.RequestOfferSnapshot;
            fromPartial(object: Partial<_178.RequestOfferSnapshot>): _178.RequestOfferSnapshot;
        };
        RequestLoadSnapshotChunk: {
            encode(message: _178.RequestLoadSnapshotChunk, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _178.RequestLoadSnapshotChunk;
            fromPartial(object: Partial<_178.RequestLoadSnapshotChunk>): _178.RequestLoadSnapshotChunk;
        };
        RequestApplySnapshotChunk: {
            encode(message: _178.RequestApplySnapshotChunk, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _178.RequestApplySnapshotChunk;
            fromPartial(object: Partial<_178.RequestApplySnapshotChunk>): _178.RequestApplySnapshotChunk;
        };
        RequestPrepareProposal: {
            encode(message: _178.RequestPrepareProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _178.RequestPrepareProposal;
            fromPartial(object: Partial<_178.RequestPrepareProposal>): _178.RequestPrepareProposal;
        };
        RequestProcessProposal: {
            encode(message: _178.RequestProcessProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _178.RequestProcessProposal;
            fromPartial(object: Partial<_178.RequestProcessProposal>): _178.RequestProcessProposal;
        };
        Response: {
            encode(message: _178.Response, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _178.Response;
            fromPartial(object: Partial<_178.Response>): _178.Response;
        };
        ResponseException: {
            encode(message: _178.ResponseException, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _178.ResponseException;
            fromPartial(object: Partial<_178.ResponseException>): _178.ResponseException;
        };
        ResponseEcho: {
            encode(message: _178.ResponseEcho, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _178.ResponseEcho;
            fromPartial(object: Partial<_178.ResponseEcho>): _178.ResponseEcho;
        };
        ResponseFlush: {
            encode(_: _178.ResponseFlush, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(_: any): _178.ResponseFlush;
            fromPartial(_: Partial<_178.ResponseFlush>): _178.ResponseFlush;
        };
        ResponseInfo: {
            encode(message: _178.ResponseInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _178.ResponseInfo;
            fromPartial(object: Partial<_178.ResponseInfo>): _178.ResponseInfo;
        };
        ResponseInitChain: {
            encode(message: _178.ResponseInitChain, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _178.ResponseInitChain;
            fromPartial(object: Partial<_178.ResponseInitChain>): _178.ResponseInitChain;
        };
        ResponseQuery: {
            encode(message: _178.ResponseQuery, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _178.ResponseQuery;
            fromPartial(object: Partial<_178.ResponseQuery>): _178.ResponseQuery;
        };
        ResponseBeginBlock: {
            encode(message: _178.ResponseBeginBlock, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _178.ResponseBeginBlock;
            fromPartial(object: Partial<_178.ResponseBeginBlock>): _178.ResponseBeginBlock;
        };
        ResponseCheckTx: {
            encode(message: _178.ResponseCheckTx, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _178.ResponseCheckTx;
            fromPartial(object: Partial<_178.ResponseCheckTx>): _178.ResponseCheckTx;
        };
        ResponseDeliverTx: {
            encode(message: _178.ResponseDeliverTx, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _178.ResponseDeliverTx;
            fromPartial(object: Partial<_178.ResponseDeliverTx>): _178.ResponseDeliverTx;
        };
        ResponseEndBlock: {
            encode(message: _178.ResponseEndBlock, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _178.ResponseEndBlock;
            fromPartial(object: Partial<_178.ResponseEndBlock>): _178.ResponseEndBlock;
        };
        ResponseCommit: {
            encode(message: _178.ResponseCommit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _178.ResponseCommit;
            fromPartial(object: Partial<_178.ResponseCommit>): _178.ResponseCommit;
        };
        ResponseListSnapshots: {
            encode(message: _178.ResponseListSnapshots, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _178.ResponseListSnapshots;
            fromPartial(object: Partial<_178.ResponseListSnapshots>): _178.ResponseListSnapshots;
        };
        ResponseOfferSnapshot: {
            encode(message: _178.ResponseOfferSnapshot, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _178.ResponseOfferSnapshot;
            fromPartial(object: Partial<_178.ResponseOfferSnapshot>): _178.ResponseOfferSnapshot;
        };
        ResponseLoadSnapshotChunk: {
            encode(message: _178.ResponseLoadSnapshotChunk, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _178.ResponseLoadSnapshotChunk;
            fromPartial(object: Partial<_178.ResponseLoadSnapshotChunk>): _178.ResponseLoadSnapshotChunk;
        };
        ResponseApplySnapshotChunk: {
            encode(message: _178.ResponseApplySnapshotChunk, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _178.ResponseApplySnapshotChunk;
            fromPartial(object: Partial<_178.ResponseApplySnapshotChunk>): _178.ResponseApplySnapshotChunk;
        };
        ResponsePrepareProposal: {
            encode(message: _178.ResponsePrepareProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _178.ResponsePrepareProposal;
            fromPartial(object: Partial<_178.ResponsePrepareProposal>): _178.ResponsePrepareProposal;
        };
        ResponseProcessProposal: {
            encode(message: _178.ResponseProcessProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _178.ResponseProcessProposal;
            fromPartial(object: Partial<_178.ResponseProcessProposal>): _178.ResponseProcessProposal;
        };
        CommitInfo: {
            encode(message: _178.CommitInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _178.CommitInfo;
            fromPartial(object: Partial<_178.CommitInfo>): _178.CommitInfo;
        };
        ExtendedCommitInfo: {
            encode(message: _178.ExtendedCommitInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _178.ExtendedCommitInfo;
            fromPartial(object: Partial<_178.ExtendedCommitInfo>): _178.ExtendedCommitInfo;
        };
        Event: {
            encode(message: _178.Event, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _178.Event;
            fromPartial(object: Partial<_178.Event>): _178.Event;
        };
        EventAttribute: {
            encode(message: _178.EventAttribute, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _178.EventAttribute;
            fromPartial(object: Partial<_178.EventAttribute>): _178.EventAttribute;
        };
        TxResult: {
            encode(message: _178.TxResult, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _178.TxResult;
            fromPartial(object: Partial<_178.TxResult>): _178.TxResult;
        };
        Validator: {
            encode(message: _178.Validator, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _178.Validator;
            fromPartial(object: Partial<_178.Validator>): _178.Validator;
        };
        ValidatorUpdate: {
            encode(message: _178.ValidatorUpdate, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _178.ValidatorUpdate;
            fromPartial(object: Partial<_178.ValidatorUpdate>): _178.ValidatorUpdate;
        };
        VoteInfo: {
            encode(message: _178.VoteInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _178.VoteInfo;
            fromPartial(object: Partial<_178.VoteInfo>): _178.VoteInfo;
        };
        ExtendedVoteInfo: {
            encode(message: _178.ExtendedVoteInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _178.ExtendedVoteInfo;
            fromPartial(object: Partial<_178.ExtendedVoteInfo>): _178.ExtendedVoteInfo;
        };
        Misbehavior: {
            encode(message: _178.Misbehavior, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _178.Misbehavior;
            fromPartial(object: Partial<_178.Misbehavior>): _178.Misbehavior;
        };
        Snapshot: {
            encode(message: _178.Snapshot, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _178.Snapshot;
            fromPartial(object: Partial<_178.Snapshot>): _178.Snapshot;
        };
    };
    const crypto: {
        Proof: {
            encode(message: _180.Proof, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _180.Proof;
            fromPartial(object: Partial<_180.Proof>): _180.Proof;
        };
        ValueOp: {
            encode(message: _180.ValueOp, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _180.ValueOp;
            fromPartial(object: Partial<_180.ValueOp>): _180.ValueOp;
        };
        DominoOp: {
            encode(message: _180.DominoOp, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _180.DominoOp;
            fromPartial(object: Partial<_180.DominoOp>): _180.DominoOp;
        };
        ProofOp: {
            encode(message: _180.ProofOp, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _180.ProofOp;
            fromPartial(object: Partial<_180.ProofOp>): _180.ProofOp;
        };
        ProofOps: {
            encode(message: _180.ProofOps, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _180.ProofOps;
            fromPartial(object: Partial<_180.ProofOps>): _180.ProofOps;
        };
        PublicKey: {
            encode(message: _179.PublicKey, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _179.PublicKey;
            fromPartial(object: Partial<_179.PublicKey>): _179.PublicKey;
        };
    };
    namespace libs {
        const bits: {
            BitArray: {
                encode(message: _181.BitArray, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _181.BitArray;
                fromPartial(object: Partial<_181.BitArray>): _181.BitArray;
            };
        };
    }
    const p2p: {
        NetAddress: {
            encode(message: _182.NetAddress, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _182.NetAddress;
            fromPartial(object: Partial<_182.NetAddress>): _182.NetAddress;
        };
        ProtocolVersion: {
            encode(message: _182.ProtocolVersion, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _182.ProtocolVersion;
            fromPartial(object: Partial<_182.ProtocolVersion>): _182.ProtocolVersion;
        };
        DefaultNodeInfo: {
            encode(message: _182.DefaultNodeInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _182.DefaultNodeInfo;
            fromPartial(object: Partial<_182.DefaultNodeInfo>): _182.DefaultNodeInfo;
        };
        DefaultNodeInfoOther: {
            encode(message: _182.DefaultNodeInfoOther, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _182.DefaultNodeInfoOther;
            fromPartial(object: Partial<_182.DefaultNodeInfoOther>): _182.DefaultNodeInfoOther;
        };
    };
    const types: {
        ValidatorSet: {
            encode(message: _187.ValidatorSet, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _187.ValidatorSet;
            fromPartial(object: Partial<_187.ValidatorSet>): _187.ValidatorSet;
        };
        Validator: {
            encode(message: _187.Validator, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _187.Validator;
            fromPartial(object: Partial<_187.Validator>): _187.Validator;
        };
        SimpleValidator: {
            encode(message: _187.SimpleValidator, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _187.SimpleValidator;
            fromPartial(object: Partial<_187.SimpleValidator>): _187.SimpleValidator;
        };
        blockIDFlagFromJSON(object: any): _186.BlockIDFlag;
        blockIDFlagToJSON(object: _186.BlockIDFlag): string;
        signedMsgTypeFromJSON(object: any): _186.SignedMsgType;
        signedMsgTypeToJSON(object: _186.SignedMsgType): string;
        BlockIDFlag: typeof _186.BlockIDFlag;
        BlockIDFlagSDKType: typeof _186.BlockIDFlag;
        SignedMsgType: typeof _186.SignedMsgType;
        SignedMsgTypeSDKType: typeof _186.SignedMsgType;
        PartSetHeader: {
            encode(message: _186.PartSetHeader, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _186.PartSetHeader;
            fromPartial(object: Partial<_186.PartSetHeader>): _186.PartSetHeader;
        };
        Part: {
            encode(message: _186.Part, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _186.Part;
            fromPartial(object: Partial<_186.Part>): _186.Part;
        };
        BlockID: {
            encode(message: _186.BlockID, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _186.BlockID;
            fromPartial(object: Partial<_186.BlockID>): _186.BlockID;
        };
        Header: {
            encode(message: _186.Header, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _186.Header;
            fromPartial(object: Partial<_186.Header>): _186.Header;
        };
        Data: {
            encode(message: _186.Data, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _186.Data;
            fromPartial(object: Partial<_186.Data>): _186.Data;
        };
        Vote: {
            encode(message: _186.Vote, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _186.Vote;
            fromPartial(object: Partial<_186.Vote>): _186.Vote;
        };
        Commit: {
            encode(message: _186.Commit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _186.Commit;
            fromPartial(object: Partial<_186.Commit>): _186.Commit;
        };
        CommitSig: {
            encode(message: _186.CommitSig, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _186.CommitSig;
            fromPartial(object: Partial<_186.CommitSig>): _186.CommitSig;
        };
        Proposal: {
            encode(message: _186.Proposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _186.Proposal;
            fromPartial(object: Partial<_186.Proposal>): _186.Proposal;
        };
        SignedHeader: {
            encode(message: _186.SignedHeader, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _186.SignedHeader;
            fromPartial(object: Partial<_186.SignedHeader>): _186.SignedHeader;
        };
        LightBlock: {
            encode(message: _186.LightBlock, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _186.LightBlock;
            fromPartial(object: Partial<_186.LightBlock>): _186.LightBlock;
        };
        BlockMeta: {
            encode(message: _186.BlockMeta, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _186.BlockMeta;
            fromPartial(object: Partial<_186.BlockMeta>): _186.BlockMeta;
        };
        TxProof: {
            encode(message: _186.TxProof, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _186.TxProof;
            fromPartial(object: Partial<_186.TxProof>): _186.TxProof;
        };
        ConsensusParams: {
            encode(message: _185.ConsensusParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _185.ConsensusParams;
            fromPartial(object: Partial<_185.ConsensusParams>): _185.ConsensusParams;
        };
        BlockParams: {
            encode(message: _185.BlockParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _185.BlockParams;
            fromPartial(object: Partial<_185.BlockParams>): _185.BlockParams;
        };
        EvidenceParams: {
            encode(message: _185.EvidenceParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _185.EvidenceParams;
            fromPartial(object: Partial<_185.EvidenceParams>): _185.EvidenceParams;
        };
        ValidatorParams: {
            encode(message: _185.ValidatorParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _185.ValidatorParams;
            fromPartial(object: Partial<_185.ValidatorParams>): _185.ValidatorParams;
        };
        VersionParams: {
            encode(message: _185.VersionParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _185.VersionParams;
            fromPartial(object: Partial<_185.VersionParams>): _185.VersionParams;
        };
        HashedParams: {
            encode(message: _185.HashedParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _185.HashedParams;
            fromPartial(object: Partial<_185.HashedParams>): _185.HashedParams;
        };
        Evidence: {
            encode(message: _184.Evidence, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _184.Evidence;
            fromPartial(object: Partial<_184.Evidence>): _184.Evidence;
        };
        DuplicateVoteEvidence: {
            encode(message: _184.DuplicateVoteEvidence, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _184.DuplicateVoteEvidence;
            fromPartial(object: Partial<_184.DuplicateVoteEvidence>): _184.DuplicateVoteEvidence;
        };
        LightClientAttackEvidence: {
            encode(message: _184.LightClientAttackEvidence, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _184.LightClientAttackEvidence;
            fromPartial(object: Partial<_184.LightClientAttackEvidence>): _184.LightClientAttackEvidence;
        };
        EvidenceList: {
            encode(message: _184.EvidenceList, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _184.EvidenceList;
            fromPartial(object: Partial<_184.EvidenceList>): _184.EvidenceList;
        };
        Block: {
            encode(message: _183.Block, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _183.Block;
            fromPartial(object: Partial<_183.Block>): _183.Block;
        };
    };
    const version: {
        App: {
            encode(message: _188.App, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _188.App;
            fromPartial(object: Partial<_188.App>): _188.App;
        };
        Consensus: {
            encode(message: _188.Consensus, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _188.Consensus;
            fromPartial(object: Partial<_188.Consensus>): _188.Consensus;
        };
    };
}
