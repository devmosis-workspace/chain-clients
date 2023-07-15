import * as _170 from "./abci/types";
import * as _171 from "./crypto/keys";
import * as _172 from "./crypto/proof";
import * as _173 from "./libs/bits/types";
import * as _174 from "./p2p/types";
import * as _175 from "./types/block";
import * as _176 from "./types/evidence";
import * as _177 from "./types/params";
import * as _178 from "./types/types";
import * as _179 from "./types/validator";
import * as _180 from "./version/types";
export declare namespace tendermint {
    const abci: {
        checkTxTypeFromJSON(object: any): _170.CheckTxType;
        checkTxTypeToJSON(object: _170.CheckTxType): string;
        responseOfferSnapshot_ResultFromJSON(object: any): _170.ResponseOfferSnapshot_Result;
        responseOfferSnapshot_ResultToJSON(object: _170.ResponseOfferSnapshot_Result): string;
        responseApplySnapshotChunk_ResultFromJSON(object: any): _170.ResponseApplySnapshotChunk_Result;
        responseApplySnapshotChunk_ResultToJSON(object: _170.ResponseApplySnapshotChunk_Result): string;
        responseProcessProposal_ProposalStatusFromJSON(object: any): _170.ResponseProcessProposal_ProposalStatus;
        responseProcessProposal_ProposalStatusToJSON(object: _170.ResponseProcessProposal_ProposalStatus): string;
        misbehaviorTypeFromJSON(object: any): _170.MisbehaviorType;
        misbehaviorTypeToJSON(object: _170.MisbehaviorType): string;
        CheckTxType: typeof _170.CheckTxType;
        CheckTxTypeSDKType: typeof _170.CheckTxType;
        ResponseOfferSnapshot_Result: typeof _170.ResponseOfferSnapshot_Result;
        ResponseOfferSnapshot_ResultSDKType: typeof _170.ResponseOfferSnapshot_Result;
        ResponseApplySnapshotChunk_Result: typeof _170.ResponseApplySnapshotChunk_Result;
        ResponseApplySnapshotChunk_ResultSDKType: typeof _170.ResponseApplySnapshotChunk_Result;
        ResponseProcessProposal_ProposalStatus: typeof _170.ResponseProcessProposal_ProposalStatus;
        ResponseProcessProposal_ProposalStatusSDKType: typeof _170.ResponseProcessProposal_ProposalStatus;
        MisbehaviorType: typeof _170.MisbehaviorType;
        MisbehaviorTypeSDKType: typeof _170.MisbehaviorType;
        Request: {
            encode(message: _170.Request, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _170.Request;
            fromPartial(object: Partial<_170.Request>): _170.Request;
        };
        RequestEcho: {
            encode(message: _170.RequestEcho, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _170.RequestEcho;
            fromPartial(object: Partial<_170.RequestEcho>): _170.RequestEcho;
        };
        RequestFlush: {
            encode(_: _170.RequestFlush, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(_: any): _170.RequestFlush;
            fromPartial(_: Partial<_170.RequestFlush>): _170.RequestFlush;
        };
        RequestInfo: {
            encode(message: _170.RequestInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _170.RequestInfo;
            fromPartial(object: Partial<_170.RequestInfo>): _170.RequestInfo;
        };
        RequestInitChain: {
            encode(message: _170.RequestInitChain, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _170.RequestInitChain;
            fromPartial(object: Partial<_170.RequestInitChain>): _170.RequestInitChain;
        };
        RequestQuery: {
            encode(message: _170.RequestQuery, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _170.RequestQuery;
            fromPartial(object: Partial<_170.RequestQuery>): _170.RequestQuery;
        };
        RequestBeginBlock: {
            encode(message: _170.RequestBeginBlock, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _170.RequestBeginBlock;
            fromPartial(object: Partial<_170.RequestBeginBlock>): _170.RequestBeginBlock;
        };
        RequestCheckTx: {
            encode(message: _170.RequestCheckTx, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _170.RequestCheckTx;
            fromPartial(object: Partial<_170.RequestCheckTx>): _170.RequestCheckTx;
        };
        RequestDeliverTx: {
            encode(message: _170.RequestDeliverTx, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _170.RequestDeliverTx;
            fromPartial(object: Partial<_170.RequestDeliverTx>): _170.RequestDeliverTx;
        };
        RequestEndBlock: {
            encode(message: _170.RequestEndBlock, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _170.RequestEndBlock;
            fromPartial(object: Partial<_170.RequestEndBlock>): _170.RequestEndBlock;
        };
        RequestCommit: {
            encode(_: _170.RequestCommit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(_: any): _170.RequestCommit;
            fromPartial(_: Partial<_170.RequestCommit>): _170.RequestCommit;
        };
        RequestListSnapshots: {
            encode(_: _170.RequestListSnapshots, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(_: any): _170.RequestListSnapshots;
            fromPartial(_: Partial<_170.RequestListSnapshots>): _170.RequestListSnapshots;
        };
        RequestOfferSnapshot: {
            encode(message: _170.RequestOfferSnapshot, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _170.RequestOfferSnapshot;
            fromPartial(object: Partial<_170.RequestOfferSnapshot>): _170.RequestOfferSnapshot;
        };
        RequestLoadSnapshotChunk: {
            encode(message: _170.RequestLoadSnapshotChunk, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _170.RequestLoadSnapshotChunk;
            fromPartial(object: Partial<_170.RequestLoadSnapshotChunk>): _170.RequestLoadSnapshotChunk;
        };
        RequestApplySnapshotChunk: {
            encode(message: _170.RequestApplySnapshotChunk, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _170.RequestApplySnapshotChunk;
            fromPartial(object: Partial<_170.RequestApplySnapshotChunk>): _170.RequestApplySnapshotChunk;
        };
        RequestPrepareProposal: {
            encode(message: _170.RequestPrepareProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _170.RequestPrepareProposal;
            fromPartial(object: Partial<_170.RequestPrepareProposal>): _170.RequestPrepareProposal;
        };
        RequestProcessProposal: {
            encode(message: _170.RequestProcessProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _170.RequestProcessProposal;
            fromPartial(object: Partial<_170.RequestProcessProposal>): _170.RequestProcessProposal;
        };
        Response: {
            encode(message: _170.Response, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _170.Response;
            fromPartial(object: Partial<_170.Response>): _170.Response;
        };
        ResponseException: {
            encode(message: _170.ResponseException, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _170.ResponseException;
            fromPartial(object: Partial<_170.ResponseException>): _170.ResponseException;
        };
        ResponseEcho: {
            encode(message: _170.ResponseEcho, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _170.ResponseEcho;
            fromPartial(object: Partial<_170.ResponseEcho>): _170.ResponseEcho;
        };
        ResponseFlush: {
            encode(_: _170.ResponseFlush, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(_: any): _170.ResponseFlush;
            fromPartial(_: Partial<_170.ResponseFlush>): _170.ResponseFlush;
        };
        ResponseInfo: {
            encode(message: _170.ResponseInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _170.ResponseInfo;
            fromPartial(object: Partial<_170.ResponseInfo>): _170.ResponseInfo;
        };
        ResponseInitChain: {
            encode(message: _170.ResponseInitChain, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _170.ResponseInitChain;
            fromPartial(object: Partial<_170.ResponseInitChain>): _170.ResponseInitChain;
        };
        ResponseQuery: {
            encode(message: _170.ResponseQuery, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _170.ResponseQuery;
            fromPartial(object: Partial<_170.ResponseQuery>): _170.ResponseQuery;
        };
        ResponseBeginBlock: {
            encode(message: _170.ResponseBeginBlock, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _170.ResponseBeginBlock;
            fromPartial(object: Partial<_170.ResponseBeginBlock>): _170.ResponseBeginBlock;
        };
        ResponseCheckTx: {
            encode(message: _170.ResponseCheckTx, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _170.ResponseCheckTx;
            fromPartial(object: Partial<_170.ResponseCheckTx>): _170.ResponseCheckTx;
        };
        ResponseDeliverTx: {
            encode(message: _170.ResponseDeliverTx, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _170.ResponseDeliverTx;
            fromPartial(object: Partial<_170.ResponseDeliverTx>): _170.ResponseDeliverTx;
        };
        ResponseEndBlock: {
            encode(message: _170.ResponseEndBlock, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _170.ResponseEndBlock;
            fromPartial(object: Partial<_170.ResponseEndBlock>): _170.ResponseEndBlock;
        };
        ResponseCommit: {
            encode(message: _170.ResponseCommit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _170.ResponseCommit;
            fromPartial(object: Partial<_170.ResponseCommit>): _170.ResponseCommit;
        };
        ResponseListSnapshots: {
            encode(message: _170.ResponseListSnapshots, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _170.ResponseListSnapshots;
            fromPartial(object: Partial<_170.ResponseListSnapshots>): _170.ResponseListSnapshots;
        };
        ResponseOfferSnapshot: {
            encode(message: _170.ResponseOfferSnapshot, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _170.ResponseOfferSnapshot;
            fromPartial(object: Partial<_170.ResponseOfferSnapshot>): _170.ResponseOfferSnapshot;
        };
        ResponseLoadSnapshotChunk: {
            encode(message: _170.ResponseLoadSnapshotChunk, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _170.ResponseLoadSnapshotChunk;
            fromPartial(object: Partial<_170.ResponseLoadSnapshotChunk>): _170.ResponseLoadSnapshotChunk;
        };
        ResponseApplySnapshotChunk: {
            encode(message: _170.ResponseApplySnapshotChunk, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _170.ResponseApplySnapshotChunk;
            fromPartial(object: Partial<_170.ResponseApplySnapshotChunk>): _170.ResponseApplySnapshotChunk;
        };
        ResponsePrepareProposal: {
            encode(message: _170.ResponsePrepareProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _170.ResponsePrepareProposal;
            fromPartial(object: Partial<_170.ResponsePrepareProposal>): _170.ResponsePrepareProposal;
        };
        ResponseProcessProposal: {
            encode(message: _170.ResponseProcessProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _170.ResponseProcessProposal;
            fromPartial(object: Partial<_170.ResponseProcessProposal>): _170.ResponseProcessProposal;
        };
        CommitInfo: {
            encode(message: _170.CommitInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _170.CommitInfo;
            fromPartial(object: Partial<_170.CommitInfo>): _170.CommitInfo;
        };
        ExtendedCommitInfo: {
            encode(message: _170.ExtendedCommitInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _170.ExtendedCommitInfo;
            fromPartial(object: Partial<_170.ExtendedCommitInfo>): _170.ExtendedCommitInfo;
        };
        Event: {
            encode(message: _170.Event, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _170.Event;
            fromPartial(object: Partial<_170.Event>): _170.Event;
        };
        EventAttribute: {
            encode(message: _170.EventAttribute, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _170.EventAttribute;
            fromPartial(object: Partial<_170.EventAttribute>): _170.EventAttribute;
        };
        TxResult: {
            encode(message: _170.TxResult, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _170.TxResult;
            fromPartial(object: Partial<_170.TxResult>): _170.TxResult;
        };
        Validator: {
            encode(message: _170.Validator, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _170.Validator;
            fromPartial(object: Partial<_170.Validator>): _170.Validator;
        };
        ValidatorUpdate: {
            encode(message: _170.ValidatorUpdate, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _170.ValidatorUpdate;
            fromPartial(object: Partial<_170.ValidatorUpdate>): _170.ValidatorUpdate;
        };
        VoteInfo: {
            encode(message: _170.VoteInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _170.VoteInfo;
            fromPartial(object: Partial<_170.VoteInfo>): _170.VoteInfo;
        };
        ExtendedVoteInfo: {
            encode(message: _170.ExtendedVoteInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _170.ExtendedVoteInfo;
            fromPartial(object: Partial<_170.ExtendedVoteInfo>): _170.ExtendedVoteInfo;
        };
        Misbehavior: {
            encode(message: _170.Misbehavior, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _170.Misbehavior;
            fromPartial(object: Partial<_170.Misbehavior>): _170.Misbehavior;
        };
        Snapshot: {
            encode(message: _170.Snapshot, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _170.Snapshot;
            fromPartial(object: Partial<_170.Snapshot>): _170.Snapshot;
        };
    };
    const crypto: {
        Proof: {
            encode(message: _172.Proof, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _172.Proof;
            fromPartial(object: Partial<_172.Proof>): _172.Proof;
        };
        ValueOp: {
            encode(message: _172.ValueOp, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _172.ValueOp;
            fromPartial(object: Partial<_172.ValueOp>): _172.ValueOp;
        };
        DominoOp: {
            encode(message: _172.DominoOp, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _172.DominoOp;
            fromPartial(object: Partial<_172.DominoOp>): _172.DominoOp;
        };
        ProofOp: {
            encode(message: _172.ProofOp, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _172.ProofOp;
            fromPartial(object: Partial<_172.ProofOp>): _172.ProofOp;
        };
        ProofOps: {
            encode(message: _172.ProofOps, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _172.ProofOps;
            fromPartial(object: Partial<_172.ProofOps>): _172.ProofOps;
        };
        PublicKey: {
            encode(message: _171.PublicKey, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _171.PublicKey;
            fromPartial(object: Partial<_171.PublicKey>): _171.PublicKey;
        };
    };
    namespace libs {
        const bits: {
            BitArray: {
                encode(message: _173.BitArray, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _173.BitArray;
                fromPartial(object: Partial<_173.BitArray>): _173.BitArray;
            };
        };
    }
    const p2p: {
        NetAddress: {
            encode(message: _174.NetAddress, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _174.NetAddress;
            fromPartial(object: Partial<_174.NetAddress>): _174.NetAddress;
        };
        ProtocolVersion: {
            encode(message: _174.ProtocolVersion, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _174.ProtocolVersion;
            fromPartial(object: Partial<_174.ProtocolVersion>): _174.ProtocolVersion;
        };
        DefaultNodeInfo: {
            encode(message: _174.DefaultNodeInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _174.DefaultNodeInfo;
            fromPartial(object: Partial<_174.DefaultNodeInfo>): _174.DefaultNodeInfo;
        };
        DefaultNodeInfoOther: {
            encode(message: _174.DefaultNodeInfoOther, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _174.DefaultNodeInfoOther;
            fromPartial(object: Partial<_174.DefaultNodeInfoOther>): _174.DefaultNodeInfoOther;
        };
    };
    const types: {
        ValidatorSet: {
            encode(message: _179.ValidatorSet, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _179.ValidatorSet;
            fromPartial(object: Partial<_179.ValidatorSet>): _179.ValidatorSet;
        };
        Validator: {
            encode(message: _179.Validator, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _179.Validator;
            fromPartial(object: Partial<_179.Validator>): _179.Validator;
        };
        SimpleValidator: {
            encode(message: _179.SimpleValidator, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _179.SimpleValidator;
            fromPartial(object: Partial<_179.SimpleValidator>): _179.SimpleValidator;
        };
        blockIDFlagFromJSON(object: any): _178.BlockIDFlag;
        blockIDFlagToJSON(object: _178.BlockIDFlag): string;
        signedMsgTypeFromJSON(object: any): _178.SignedMsgType;
        signedMsgTypeToJSON(object: _178.SignedMsgType): string;
        BlockIDFlag: typeof _178.BlockIDFlag;
        BlockIDFlagSDKType: typeof _178.BlockIDFlag;
        SignedMsgType: typeof _178.SignedMsgType;
        SignedMsgTypeSDKType: typeof _178.SignedMsgType;
        PartSetHeader: {
            encode(message: _178.PartSetHeader, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _178.PartSetHeader;
            fromPartial(object: Partial<_178.PartSetHeader>): _178.PartSetHeader;
        };
        Part: {
            encode(message: _178.Part, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _178.Part;
            fromPartial(object: Partial<_178.Part>): _178.Part;
        };
        BlockID: {
            encode(message: _178.BlockID, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _178.BlockID;
            fromPartial(object: Partial<_178.BlockID>): _178.BlockID;
        };
        Header: {
            encode(message: _178.Header, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _178.Header;
            fromPartial(object: Partial<_178.Header>): _178.Header;
        };
        Data: {
            encode(message: _178.Data, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _178.Data;
            fromPartial(object: Partial<_178.Data>): _178.Data;
        };
        Vote: {
            encode(message: _178.Vote, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _178.Vote;
            fromPartial(object: Partial<_178.Vote>): _178.Vote;
        };
        Commit: {
            encode(message: _178.Commit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _178.Commit;
            fromPartial(object: Partial<_178.Commit>): _178.Commit;
        };
        CommitSig: {
            encode(message: _178.CommitSig, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _178.CommitSig;
            fromPartial(object: Partial<_178.CommitSig>): _178.CommitSig;
        };
        Proposal: {
            encode(message: _178.Proposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _178.Proposal;
            fromPartial(object: Partial<_178.Proposal>): _178.Proposal;
        };
        SignedHeader: {
            encode(message: _178.SignedHeader, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _178.SignedHeader;
            fromPartial(object: Partial<_178.SignedHeader>): _178.SignedHeader;
        };
        LightBlock: {
            encode(message: _178.LightBlock, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _178.LightBlock;
            fromPartial(object: Partial<_178.LightBlock>): _178.LightBlock;
        };
        BlockMeta: {
            encode(message: _178.BlockMeta, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _178.BlockMeta;
            fromPartial(object: Partial<_178.BlockMeta>): _178.BlockMeta;
        };
        TxProof: {
            encode(message: _178.TxProof, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _178.TxProof;
            fromPartial(object: Partial<_178.TxProof>): _178.TxProof;
        };
        ConsensusParams: {
            encode(message: _177.ConsensusParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _177.ConsensusParams;
            fromPartial(object: Partial<_177.ConsensusParams>): _177.ConsensusParams;
        };
        BlockParams: {
            encode(message: _177.BlockParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _177.BlockParams;
            fromPartial(object: Partial<_177.BlockParams>): _177.BlockParams;
        };
        EvidenceParams: {
            encode(message: _177.EvidenceParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _177.EvidenceParams;
            fromPartial(object: Partial<_177.EvidenceParams>): _177.EvidenceParams;
        };
        ValidatorParams: {
            encode(message: _177.ValidatorParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _177.ValidatorParams;
            fromPartial(object: Partial<_177.ValidatorParams>): _177.ValidatorParams;
        };
        VersionParams: {
            encode(message: _177.VersionParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _177.VersionParams;
            fromPartial(object: Partial<_177.VersionParams>): _177.VersionParams;
        };
        HashedParams: {
            encode(message: _177.HashedParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _177.HashedParams;
            fromPartial(object: Partial<_177.HashedParams>): _177.HashedParams;
        };
        Evidence: {
            encode(message: _176.Evidence, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _176.Evidence;
            fromPartial(object: Partial<_176.Evidence>): _176.Evidence;
        };
        DuplicateVoteEvidence: {
            encode(message: _176.DuplicateVoteEvidence, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _176.DuplicateVoteEvidence;
            fromPartial(object: Partial<_176.DuplicateVoteEvidence>): _176.DuplicateVoteEvidence;
        };
        LightClientAttackEvidence: {
            encode(message: _176.LightClientAttackEvidence, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _176.LightClientAttackEvidence;
            fromPartial(object: Partial<_176.LightClientAttackEvidence>): _176.LightClientAttackEvidence;
        };
        EvidenceList: {
            encode(message: _176.EvidenceList, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _176.EvidenceList;
            fromPartial(object: Partial<_176.EvidenceList>): _176.EvidenceList;
        };
        Block: {
            encode(message: _175.Block, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _175.Block;
            fromPartial(object: Partial<_175.Block>): _175.Block;
        };
    };
    const version: {
        App: {
            encode(message: _180.App, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _180.App;
            fromPartial(object: Partial<_180.App>): _180.App;
        };
        Consensus: {
            encode(message: _180.Consensus, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _180.Consensus;
            fromPartial(object: Partial<_180.Consensus>): _180.Consensus;
        };
    };
}
