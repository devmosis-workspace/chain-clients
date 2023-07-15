import * as _96 from "./abci/types";
import * as _97 from "./crypto/keys";
import * as _98 from "./crypto/proof";
import * as _99 from "./libs/bits/types";
import * as _100 from "./types/evidence";
import * as _101 from "./types/params";
import * as _102 from "./types/types";
import * as _103 from "./types/validator";
import * as _104 from "./types/block";
import * as _105 from "./types/canonical";
import * as _106 from "./types/events";
import * as _107 from "./version/types";
import * as _108 from "./blockchain/types";
import * as _109 from "./consensus/types";
import * as _110 from "./consensus/wal";
import * as _111 from "./mempool/types";
import * as _112 from "./p2p/conn";
import * as _113 from "./p2p/pex";
import * as _114 from "./p2p/types";
import * as _115 from "./privval/types";
import * as _116 from "./rpc/grpc/types";
import * as _117 from "./state/types";
import * as _118 from "./statesync/types";
import * as _119 from "./store/types";
export declare namespace tendermint {
    const abci: {
        checkTxTypeFromJSON(object: any): _96.CheckTxType;
        checkTxTypeToJSON(object: _96.CheckTxType): string;
        responseOfferSnapshot_ResultFromJSON(object: any): _96.ResponseOfferSnapshot_Result;
        responseOfferSnapshot_ResultToJSON(object: _96.ResponseOfferSnapshot_Result): string;
        responseApplySnapshotChunk_ResultFromJSON(object: any): _96.ResponseApplySnapshotChunk_Result;
        responseApplySnapshotChunk_ResultToJSON(object: _96.ResponseApplySnapshotChunk_Result): string;
        CheckTxType: typeof _96.CheckTxType;
        CheckTxTypeSDKType: typeof _96.CheckTxType;
        ResponseOfferSnapshot_Result: typeof _96.ResponseOfferSnapshot_Result;
        ResponseOfferSnapshot_ResultSDKType: typeof _96.ResponseOfferSnapshot_Result;
        ResponseApplySnapshotChunk_Result: typeof _96.ResponseApplySnapshotChunk_Result;
        ResponseApplySnapshotChunk_ResultSDKType: typeof _96.ResponseApplySnapshotChunk_Result;
        Request: {
            encode(message: _96.Request, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _96.Request;
            fromPartial(object: Partial<_96.Request>): _96.Request;
        };
        RequestEcho: {
            encode(message: _96.RequestEcho, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _96.RequestEcho;
            fromPartial(object: Partial<_96.RequestEcho>): _96.RequestEcho;
        };
        RequestFlush: {
            encode(_: _96.RequestFlush, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(_: any): _96.RequestFlush;
            fromPartial(_: Partial<_96.RequestFlush>): _96.RequestFlush;
        };
        RequestInfo: {
            encode(message: _96.RequestInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _96.RequestInfo;
            fromPartial(object: Partial<_96.RequestInfo>): _96.RequestInfo;
        };
        RequestSetOption: {
            encode(message: _96.RequestSetOption, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _96.RequestSetOption;
            fromPartial(object: Partial<_96.RequestSetOption>): _96.RequestSetOption;
        };
        RequestInitChain: {
            encode(message: _96.RequestInitChain, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _96.RequestInitChain;
            fromPartial(object: Partial<_96.RequestInitChain>): _96.RequestInitChain;
        };
        RequestQuery: {
            encode(message: _96.RequestQuery, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _96.RequestQuery;
            fromPartial(object: Partial<_96.RequestQuery>): _96.RequestQuery;
        };
        RequestBeginBlock: {
            encode(message: _96.RequestBeginBlock, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _96.RequestBeginBlock;
            fromPartial(object: Partial<_96.RequestBeginBlock>): _96.RequestBeginBlock;
        };
        RequestCheckTx: {
            encode(message: _96.RequestCheckTx, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _96.RequestCheckTx;
            fromPartial(object: Partial<_96.RequestCheckTx>): _96.RequestCheckTx;
        };
        RequestDeliverTx: {
            encode(message: _96.RequestDeliverTx, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _96.RequestDeliverTx;
            fromPartial(object: Partial<_96.RequestDeliverTx>): _96.RequestDeliverTx;
        };
        RequestEndBlock: {
            encode(message: _96.RequestEndBlock, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _96.RequestEndBlock;
            fromPartial(object: Partial<_96.RequestEndBlock>): _96.RequestEndBlock;
        };
        RequestCommit: {
            encode(_: _96.RequestCommit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(_: any): _96.RequestCommit;
            fromPartial(_: Partial<_96.RequestCommit>): _96.RequestCommit;
        };
        RequestListSnapshots: {
            encode(_: _96.RequestListSnapshots, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(_: any): _96.RequestListSnapshots;
            fromPartial(_: Partial<_96.RequestListSnapshots>): _96.RequestListSnapshots;
        };
        RequestOfferSnapshot: {
            encode(message: _96.RequestOfferSnapshot, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _96.RequestOfferSnapshot;
            fromPartial(object: Partial<_96.RequestOfferSnapshot>): _96.RequestOfferSnapshot;
        };
        RequestLoadSnapshotChunk: {
            encode(message: _96.RequestLoadSnapshotChunk, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _96.RequestLoadSnapshotChunk;
            fromPartial(object: Partial<_96.RequestLoadSnapshotChunk>): _96.RequestLoadSnapshotChunk;
        };
        RequestApplySnapshotChunk: {
            encode(message: _96.RequestApplySnapshotChunk, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _96.RequestApplySnapshotChunk;
            fromPartial(object: Partial<_96.RequestApplySnapshotChunk>): _96.RequestApplySnapshotChunk;
        };
        Response: {
            encode(message: _96.Response, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _96.Response;
            fromPartial(object: Partial<_96.Response>): _96.Response;
        };
        ResponseException: {
            encode(message: _96.ResponseException, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _96.ResponseException;
            fromPartial(object: Partial<_96.ResponseException>): _96.ResponseException;
        };
        ResponseEcho: {
            encode(message: _96.ResponseEcho, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _96.ResponseEcho;
            fromPartial(object: Partial<_96.ResponseEcho>): _96.ResponseEcho;
        };
        ResponseFlush: {
            encode(_: _96.ResponseFlush, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(_: any): _96.ResponseFlush;
            fromPartial(_: Partial<_96.ResponseFlush>): _96.ResponseFlush;
        };
        ResponseInfo: {
            encode(message: _96.ResponseInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _96.ResponseInfo;
            fromPartial(object: Partial<_96.ResponseInfo>): _96.ResponseInfo;
        };
        ResponseSetOption: {
            encode(message: _96.ResponseSetOption, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _96.ResponseSetOption;
            fromPartial(object: Partial<_96.ResponseSetOption>): _96.ResponseSetOption;
        };
        ResponseInitChain: {
            encode(message: _96.ResponseInitChain, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _96.ResponseInitChain;
            fromPartial(object: Partial<_96.ResponseInitChain>): _96.ResponseInitChain;
        };
        ResponseQuery: {
            encode(message: _96.ResponseQuery, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _96.ResponseQuery;
            fromPartial(object: Partial<_96.ResponseQuery>): _96.ResponseQuery;
        };
        ResponseBeginBlock: {
            encode(message: _96.ResponseBeginBlock, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _96.ResponseBeginBlock;
            fromPartial(object: Partial<_96.ResponseBeginBlock>): _96.ResponseBeginBlock;
        };
        ResponseCheckTx: {
            encode(message: _96.ResponseCheckTx, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _96.ResponseCheckTx;
            fromPartial(object: Partial<_96.ResponseCheckTx>): _96.ResponseCheckTx;
        };
        ResponseDeliverTx: {
            encode(message: _96.ResponseDeliverTx, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _96.ResponseDeliverTx;
            fromPartial(object: Partial<_96.ResponseDeliverTx>): _96.ResponseDeliverTx;
        };
        ResponseEndBlock: {
            encode(message: _96.ResponseEndBlock, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _96.ResponseEndBlock;
            fromPartial(object: Partial<_96.ResponseEndBlock>): _96.ResponseEndBlock;
        };
        ResponseCommit: {
            encode(message: _96.ResponseCommit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _96.ResponseCommit;
            fromPartial(object: Partial<_96.ResponseCommit>): _96.ResponseCommit;
        };
        ResponseListSnapshots: {
            encode(message: _96.ResponseListSnapshots, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _96.ResponseListSnapshots;
            fromPartial(object: Partial<_96.ResponseListSnapshots>): _96.ResponseListSnapshots;
        };
        ResponseOfferSnapshot: {
            encode(message: _96.ResponseOfferSnapshot, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _96.ResponseOfferSnapshot;
            fromPartial(object: Partial<_96.ResponseOfferSnapshot>): _96.ResponseOfferSnapshot;
        };
        ResponseLoadSnapshotChunk: {
            encode(message: _96.ResponseLoadSnapshotChunk, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _96.ResponseLoadSnapshotChunk;
            fromPartial(object: Partial<_96.ResponseLoadSnapshotChunk>): _96.ResponseLoadSnapshotChunk;
        };
        ResponseApplySnapshotChunk: {
            encode(message: _96.ResponseApplySnapshotChunk, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _96.ResponseApplySnapshotChunk;
            fromPartial(object: Partial<_96.ResponseApplySnapshotChunk>): _96.ResponseApplySnapshotChunk;
        };
        ConsensusParams: {
            encode(message: _96.ConsensusParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _96.ConsensusParams;
            fromPartial(object: Partial<_96.ConsensusParams>): _96.ConsensusParams;
        };
        BlockParams: {
            encode(message: _96.BlockParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _96.BlockParams;
            fromPartial(object: Partial<_96.BlockParams>): _96.BlockParams;
        };
        LastCommitInfo: {
            encode(message: _96.LastCommitInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _96.LastCommitInfo;
            fromPartial(object: Partial<_96.LastCommitInfo>): _96.LastCommitInfo;
        };
        Event: {
            encode(message: _96.Event, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _96.Event;
            fromPartial(object: Partial<_96.Event>): _96.Event;
        };
        EventAttribute: {
            encode(message: _96.EventAttribute, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _96.EventAttribute;
            fromPartial(object: Partial<_96.EventAttribute>): _96.EventAttribute;
        };
        TxResult: {
            encode(message: _96.TxResult, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _96.TxResult;
            fromPartial(object: Partial<_96.TxResult>): _96.TxResult;
        };
        Validator: {
            encode(message: _96.Validator, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _96.Validator;
            fromPartial(object: Partial<_96.Validator>): _96.Validator;
        };
        ValidatorUpdate: {
            encode(message: _96.ValidatorUpdate, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _96.ValidatorUpdate;
            fromPartial(object: Partial<_96.ValidatorUpdate>): _96.ValidatorUpdate;
        };
        VoteInfo: {
            encode(message: _96.VoteInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _96.VoteInfo;
            fromPartial(object: Partial<_96.VoteInfo>): _96.VoteInfo;
        };
        Evidence: {
            encode(message: _96.Evidence, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _96.Evidence;
            fromPartial(object: Partial<_96.Evidence>): _96.Evidence;
        };
        Snapshot: {
            encode(message: _96.Snapshot, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _96.Snapshot;
            fromPartial(object: Partial<_96.Snapshot>): _96.Snapshot;
        };
    };
    const crypto: {
        Proof: {
            encode(message: _98.Proof, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _98.Proof;
            fromPartial(object: Partial<_98.Proof>): _98.Proof;
        };
        ValueOp: {
            encode(message: _98.ValueOp, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _98.ValueOp;
            fromPartial(object: Partial<_98.ValueOp>): _98.ValueOp;
        };
        DominoOp: {
            encode(message: _98.DominoOp, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _98.DominoOp;
            fromPartial(object: Partial<_98.DominoOp>): _98.DominoOp;
        };
        ProofOp: {
            encode(message: _98.ProofOp, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _98.ProofOp;
            fromPartial(object: Partial<_98.ProofOp>): _98.ProofOp;
        };
        ProofOps: {
            encode(message: _98.ProofOps, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _98.ProofOps;
            fromPartial(object: Partial<_98.ProofOps>): _98.ProofOps;
        };
        PublicKey: {
            encode(message: _97.PublicKey, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _97.PublicKey;
            fromPartial(object: Partial<_97.PublicKey>): _97.PublicKey;
        };
        PrivateKey: {
            encode(message: _97.PrivateKey, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _97.PrivateKey;
            fromPartial(object: Partial<_97.PrivateKey>): _97.PrivateKey;
        };
    };
    namespace libs {
        const bits: {
            BitArray: {
                encode(message: _99.BitArray, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _99.BitArray;
                fromPartial(object: Partial<_99.BitArray>): _99.BitArray;
            };
        };
    }
    const types: {
        EventDataRoundState: {
            encode(message: _106.EventDataRoundState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _106.EventDataRoundState;
            fromPartial(object: Partial<_106.EventDataRoundState>): _106.EventDataRoundState;
        };
        CanonicalBlockID: {
            encode(message: _105.CanonicalBlockID, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _105.CanonicalBlockID;
            fromPartial(object: Partial<_105.CanonicalBlockID>): _105.CanonicalBlockID;
        };
        CanonicalPartSetHeader: {
            encode(message: _105.CanonicalPartSetHeader, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _105.CanonicalPartSetHeader;
            fromPartial(object: Partial<_105.CanonicalPartSetHeader>): _105.CanonicalPartSetHeader;
        };
        CanonicalProposal: {
            encode(message: _105.CanonicalProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _105.CanonicalProposal;
            fromPartial(object: Partial<_105.CanonicalProposal>): _105.CanonicalProposal;
        };
        CanonicalVote: {
            encode(message: _105.CanonicalVote, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _105.CanonicalVote;
            fromPartial(object: Partial<_105.CanonicalVote>): _105.CanonicalVote;
        };
        Block: {
            encode(message: _104.Block, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _104.Block;
            fromPartial(object: Partial<_104.Block>): _104.Block;
        };
        ValidatorSet: {
            encode(message: _103.ValidatorSet, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _103.ValidatorSet;
            fromPartial(object: Partial<_103.ValidatorSet>): _103.ValidatorSet;
        };
        Validator: {
            encode(message: _103.Validator, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _103.Validator;
            fromPartial(object: Partial<_103.Validator>): _103.Validator;
        };
        SimpleValidator: {
            encode(message: _103.SimpleValidator, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _103.SimpleValidator;
            fromPartial(object: Partial<_103.SimpleValidator>): _103.SimpleValidator;
        };
        blockIDFlagFromJSON(object: any): _102.BlockIDFlag;
        blockIDFlagToJSON(object: _102.BlockIDFlag): string;
        signedMsgTypeFromJSON(object: any): _102.SignedMsgType;
        signedMsgTypeToJSON(object: _102.SignedMsgType): string;
        BlockIDFlag: typeof _102.BlockIDFlag;
        BlockIDFlagSDKType: typeof _102.BlockIDFlag;
        SignedMsgType: typeof _102.SignedMsgType;
        SignedMsgTypeSDKType: typeof _102.SignedMsgType;
        PartSetHeader: {
            encode(message: _102.PartSetHeader, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _102.PartSetHeader;
            fromPartial(object: Partial<_102.PartSetHeader>): _102.PartSetHeader;
        };
        Part: {
            encode(message: _102.Part, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _102.Part;
            fromPartial(object: Partial<_102.Part>): _102.Part;
        };
        BlockID: {
            encode(message: _102.BlockID, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _102.BlockID;
            fromPartial(object: Partial<_102.BlockID>): _102.BlockID;
        };
        Header: {
            encode(message: _102.Header, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _102.Header;
            fromPartial(object: Partial<_102.Header>): _102.Header;
        };
        Data: {
            encode(message: _102.Data, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _102.Data;
            fromPartial(object: Partial<_102.Data>): _102.Data;
        };
        Vote: {
            encode(message: _102.Vote, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _102.Vote;
            fromPartial(object: Partial<_102.Vote>): _102.Vote;
        };
        Commit: {
            encode(message: _102.Commit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _102.Commit;
            fromPartial(object: Partial<_102.Commit>): _102.Commit;
        };
        CommitSig: {
            encode(message: _102.CommitSig, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _102.CommitSig;
            fromPartial(object: Partial<_102.CommitSig>): _102.CommitSig;
        };
        Proposal: {
            encode(message: _102.Proposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _102.Proposal;
            fromPartial(object: Partial<_102.Proposal>): _102.Proposal;
        };
        SignedHeader: {
            encode(message: _102.SignedHeader, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _102.SignedHeader;
            fromPartial(object: Partial<_102.SignedHeader>): _102.SignedHeader;
        };
        BlockMeta: {
            encode(message: _102.BlockMeta, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _102.BlockMeta;
            fromPartial(object: Partial<_102.BlockMeta>): _102.BlockMeta;
        };
        TxProof: {
            encode(message: _102.TxProof, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _102.TxProof;
            fromPartial(object: Partial<_102.TxProof>): _102.TxProof;
        };
        ConsensusParams: {
            encode(message: _101.ConsensusParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _101.ConsensusParams;
            fromPartial(object: Partial<_101.ConsensusParams>): _101.ConsensusParams;
        };
        BlockParams: {
            encode(message: _101.BlockParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _101.BlockParams;
            fromPartial(object: Partial<_101.BlockParams>): _101.BlockParams;
        };
        EvidenceParams: {
            encode(message: _101.EvidenceParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _101.EvidenceParams;
            fromPartial(object: Partial<_101.EvidenceParams>): _101.EvidenceParams;
        };
        ValidatorParams: {
            encode(message: _101.ValidatorParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _101.ValidatorParams;
            fromPartial(object: Partial<_101.ValidatorParams>): _101.ValidatorParams;
        };
        VersionParams: {
            encode(message: _101.VersionParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _101.VersionParams;
            fromPartial(object: Partial<_101.VersionParams>): _101.VersionParams;
        };
        HashedParams: {
            encode(message: _101.HashedParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _101.HashedParams;
            fromPartial(object: Partial<_101.HashedParams>): _101.HashedParams;
        };
        DuplicateVoteEvidence: {
            encode(message: _100.DuplicateVoteEvidence, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _100.DuplicateVoteEvidence;
            fromPartial(object: Partial<_100.DuplicateVoteEvidence>): _100.DuplicateVoteEvidence;
        };
        PotentialAmnesiaEvidence: {
            encode(message: _100.PotentialAmnesiaEvidence, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _100.PotentialAmnesiaEvidence;
            fromPartial(object: Partial<_100.PotentialAmnesiaEvidence>): _100.PotentialAmnesiaEvidence;
        };
        AmnesiaEvidence: {
            encode(message: _100.AmnesiaEvidence, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _100.AmnesiaEvidence;
            fromPartial(object: Partial<_100.AmnesiaEvidence>): _100.AmnesiaEvidence;
        };
        ConflictingHeadersEvidence: {
            encode(message: _100.ConflictingHeadersEvidence, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _100.ConflictingHeadersEvidence;
            fromPartial(object: Partial<_100.ConflictingHeadersEvidence>): _100.ConflictingHeadersEvidence;
        };
        LunaticValidatorEvidence: {
            encode(message: _100.LunaticValidatorEvidence, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _100.LunaticValidatorEvidence;
            fromPartial(object: Partial<_100.LunaticValidatorEvidence>): _100.LunaticValidatorEvidence;
        };
        Evidence: {
            encode(message: _100.Evidence, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _100.Evidence;
            fromPartial(object: Partial<_100.Evidence>): _100.Evidence;
        };
        EvidenceData: {
            encode(message: _100.EvidenceData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _100.EvidenceData;
            fromPartial(object: Partial<_100.EvidenceData>): _100.EvidenceData;
        };
        ProofOfLockChange: {
            encode(message: _100.ProofOfLockChange, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _100.ProofOfLockChange;
            fromPartial(object: Partial<_100.ProofOfLockChange>): _100.ProofOfLockChange;
        };
    };
    const version: {
        App: {
            encode(message: _107.App, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _107.App;
            fromPartial(object: Partial<_107.App>): _107.App;
        };
        Consensus: {
            encode(message: _107.Consensus, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _107.Consensus;
            fromPartial(object: Partial<_107.Consensus>): _107.Consensus;
        };
    };
    const blockchain: {
        BlockRequest: {
            encode(message: _108.BlockRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _108.BlockRequest;
            fromPartial(object: Partial<_108.BlockRequest>): _108.BlockRequest;
        };
        NoBlockResponse: {
            encode(message: _108.NoBlockResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _108.NoBlockResponse;
            fromPartial(object: Partial<_108.NoBlockResponse>): _108.NoBlockResponse;
        };
        BlockResponse: {
            encode(message: _108.BlockResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _108.BlockResponse;
            fromPartial(object: Partial<_108.BlockResponse>): _108.BlockResponse;
        };
        StatusRequest: {
            encode(_: _108.StatusRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(_: any): _108.StatusRequest;
            fromPartial(_: Partial<_108.StatusRequest>): _108.StatusRequest;
        };
        StatusResponse: {
            encode(message: _108.StatusResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _108.StatusResponse;
            fromPartial(object: Partial<_108.StatusResponse>): _108.StatusResponse;
        };
        Message: {
            encode(message: _108.Message, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _108.Message;
            fromPartial(object: Partial<_108.Message>): _108.Message;
        };
    };
    const consensus: {
        MsgInfo: {
            encode(message: _110.MsgInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _110.MsgInfo;
            fromPartial(object: Partial<_110.MsgInfo>): _110.MsgInfo;
        };
        TimeoutInfo: {
            encode(message: _110.TimeoutInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _110.TimeoutInfo;
            fromPartial(object: Partial<_110.TimeoutInfo>): _110.TimeoutInfo;
        };
        EndHeight: {
            encode(message: _110.EndHeight, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _110.EndHeight;
            fromPartial(object: Partial<_110.EndHeight>): _110.EndHeight;
        };
        WALMessage: {
            encode(message: _110.WALMessage, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _110.WALMessage;
            fromPartial(object: Partial<_110.WALMessage>): _110.WALMessage;
        };
        TimedWALMessage: {
            encode(message: _110.TimedWALMessage, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _110.TimedWALMessage;
            fromPartial(object: Partial<_110.TimedWALMessage>): _110.TimedWALMessage;
        };
        NewRoundStep: {
            encode(message: _109.NewRoundStep, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _109.NewRoundStep;
            fromPartial(object: Partial<_109.NewRoundStep>): _109.NewRoundStep;
        };
        NewValidBlock: {
            encode(message: _109.NewValidBlock, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _109.NewValidBlock;
            fromPartial(object: Partial<_109.NewValidBlock>): _109.NewValidBlock;
        };
        Proposal: {
            encode(message: _109.Proposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _109.Proposal;
            fromPartial(object: Partial<_109.Proposal>): _109.Proposal;
        };
        ProposalPOL: {
            encode(message: _109.ProposalPOL, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _109.ProposalPOL;
            fromPartial(object: Partial<_109.ProposalPOL>): _109.ProposalPOL;
        };
        BlockPart: {
            encode(message: _109.BlockPart, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _109.BlockPart;
            fromPartial(object: Partial<_109.BlockPart>): _109.BlockPart;
        };
        Vote: {
            encode(message: _109.Vote, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _109.Vote;
            fromPartial(object: Partial<_109.Vote>): _109.Vote;
        };
        HasVote: {
            encode(message: _109.HasVote, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _109.HasVote;
            fromPartial(object: Partial<_109.HasVote>): _109.HasVote;
        };
        VoteSetMaj23: {
            encode(message: _109.VoteSetMaj23, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _109.VoteSetMaj23;
            fromPartial(object: Partial<_109.VoteSetMaj23>): _109.VoteSetMaj23;
        };
        VoteSetBits: {
            encode(message: _109.VoteSetBits, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _109.VoteSetBits;
            fromPartial(object: Partial<_109.VoteSetBits>): _109.VoteSetBits;
        };
        Message: {
            encode(message: _109.Message, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _109.Message;
            fromPartial(object: Partial<_109.Message>): _109.Message;
        };
    };
    const mempool: {
        Txs: {
            encode(message: _111.Txs, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _111.Txs;
            fromPartial(object: Partial<_111.Txs>): _111.Txs;
        };
        Message: {
            encode(message: _111.Message, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _111.Message;
            fromPartial(object: Partial<_111.Message>): _111.Message;
        };
    };
    const p2p: {
        NetAddress: {
            encode(message: _114.NetAddress, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _114.NetAddress;
            fromPartial(object: Partial<_114.NetAddress>): _114.NetAddress;
        };
        ProtocolVersion: {
            encode(message: _114.ProtocolVersion, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _114.ProtocolVersion;
            fromPartial(object: Partial<_114.ProtocolVersion>): _114.ProtocolVersion;
        };
        DefaultNodeInfo: {
            encode(message: _114.DefaultNodeInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _114.DefaultNodeInfo;
            fromPartial(object: Partial<_114.DefaultNodeInfo>): _114.DefaultNodeInfo;
        };
        DefaultNodeInfoOther: {
            encode(message: _114.DefaultNodeInfoOther, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _114.DefaultNodeInfoOther;
            fromPartial(object: Partial<_114.DefaultNodeInfoOther>): _114.DefaultNodeInfoOther;
        };
        PexRequest: {
            encode(_: _113.PexRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(_: any): _113.PexRequest;
            fromPartial(_: Partial<_113.PexRequest>): _113.PexRequest;
        };
        PexAddrs: {
            encode(message: _113.PexAddrs, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _113.PexAddrs;
            fromPartial(object: Partial<_113.PexAddrs>): _113.PexAddrs;
        };
        Message: {
            encode(message: _113.Message, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _113.Message;
            fromPartial(object: Partial<_113.Message>): _113.Message;
        };
        PacketPing: {
            encode(_: _112.PacketPing, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(_: any): _112.PacketPing;
            fromPartial(_: Partial<_112.PacketPing>): _112.PacketPing;
        };
        PacketPong: {
            encode(_: _112.PacketPong, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(_: any): _112.PacketPong;
            fromPartial(_: Partial<_112.PacketPong>): _112.PacketPong;
        };
        PacketMsg: {
            encode(message: _112.PacketMsg, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _112.PacketMsg;
            fromPartial(object: Partial<_112.PacketMsg>): _112.PacketMsg;
        };
        Packet: {
            encode(message: _112.Packet, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _112.Packet;
            fromPartial(object: Partial<_112.Packet>): _112.Packet;
        };
        AuthSigMessage: {
            encode(message: _112.AuthSigMessage, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _112.AuthSigMessage;
            fromPartial(object: Partial<_112.AuthSigMessage>): _112.AuthSigMessage;
        };
    };
    const privval: {
        errorsFromJSON(object: any): _115.Errors;
        errorsToJSON(object: _115.Errors): string;
        Errors: typeof _115.Errors;
        ErrorsSDKType: typeof _115.Errors;
        RemoteSignerError: {
            encode(message: _115.RemoteSignerError, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _115.RemoteSignerError;
            fromPartial(object: Partial<_115.RemoteSignerError>): _115.RemoteSignerError;
        };
        PubKeyRequest: {
            encode(message: _115.PubKeyRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _115.PubKeyRequest;
            fromPartial(object: Partial<_115.PubKeyRequest>): _115.PubKeyRequest;
        };
        PubKeyResponse: {
            encode(message: _115.PubKeyResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _115.PubKeyResponse;
            fromPartial(object: Partial<_115.PubKeyResponse>): _115.PubKeyResponse;
        };
        SignVoteRequest: {
            encode(message: _115.SignVoteRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _115.SignVoteRequest;
            fromPartial(object: Partial<_115.SignVoteRequest>): _115.SignVoteRequest;
        };
        SignedVoteResponse: {
            encode(message: _115.SignedVoteResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _115.SignedVoteResponse;
            fromPartial(object: Partial<_115.SignedVoteResponse>): _115.SignedVoteResponse;
        };
        SignProposalRequest: {
            encode(message: _115.SignProposalRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _115.SignProposalRequest;
            fromPartial(object: Partial<_115.SignProposalRequest>): _115.SignProposalRequest;
        };
        SignedProposalResponse: {
            encode(message: _115.SignedProposalResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _115.SignedProposalResponse;
            fromPartial(object: Partial<_115.SignedProposalResponse>): _115.SignedProposalResponse;
        };
        PingRequest: {
            encode(_: _115.PingRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(_: any): _115.PingRequest;
            fromPartial(_: Partial<_115.PingRequest>): _115.PingRequest;
        };
        PingResponse: {
            encode(_: _115.PingResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(_: any): _115.PingResponse;
            fromPartial(_: Partial<_115.PingResponse>): _115.PingResponse;
        };
        Message: {
            encode(message: _115.Message, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _115.Message;
            fromPartial(object: Partial<_115.Message>): _115.Message;
        };
    };
    namespace rpc {
        const grpc: {
            RequestPing: {
                encode(_: _116.RequestPing, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _116.RequestPing;
                fromPartial(_: Partial<_116.RequestPing>): _116.RequestPing;
            };
            RequestBroadcastTx: {
                encode(message: _116.RequestBroadcastTx, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _116.RequestBroadcastTx;
                fromPartial(object: Partial<_116.RequestBroadcastTx>): _116.RequestBroadcastTx;
            };
            ResponsePing: {
                encode(_: _116.ResponsePing, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _116.ResponsePing;
                fromPartial(_: Partial<_116.ResponsePing>): _116.ResponsePing;
            };
            ResponseBroadcastTx: {
                encode(message: _116.ResponseBroadcastTx, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _116.ResponseBroadcastTx;
                fromPartial(object: Partial<_116.ResponseBroadcastTx>): _116.ResponseBroadcastTx;
            };
        };
    }
    const state: {
        ABCIResponses: {
            encode(message: _117.ABCIResponses, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _117.ABCIResponses;
            fromPartial(object: Partial<_117.ABCIResponses>): _117.ABCIResponses;
        };
        ValidatorsInfo: {
            encode(message: _117.ValidatorsInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _117.ValidatorsInfo;
            fromPartial(object: Partial<_117.ValidatorsInfo>): _117.ValidatorsInfo;
        };
        ConsensusParamsInfo: {
            encode(message: _117.ConsensusParamsInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _117.ConsensusParamsInfo;
            fromPartial(object: Partial<_117.ConsensusParamsInfo>): _117.ConsensusParamsInfo;
        };
        ABCIResponsesInfo: {
            encode(message: _117.ABCIResponsesInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _117.ABCIResponsesInfo;
            fromPartial(object: Partial<_117.ABCIResponsesInfo>): _117.ABCIResponsesInfo;
        };
        Version: {
            encode(message: _117.Version, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _117.Version;
            fromPartial(object: Partial<_117.Version>): _117.Version;
        };
        State: {
            encode(message: _117.State, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _117.State;
            fromPartial(object: Partial<_117.State>): _117.State;
        };
    };
    const statesync: {
        Message: {
            encode(message: _118.Message, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _118.Message;
            fromPartial(object: Partial<_118.Message>): _118.Message;
        };
        SnapshotsRequest: {
            encode(_: _118.SnapshotsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(_: any): _118.SnapshotsRequest;
            fromPartial(_: Partial<_118.SnapshotsRequest>): _118.SnapshotsRequest;
        };
        SnapshotsResponse: {
            encode(message: _118.SnapshotsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _118.SnapshotsResponse;
            fromPartial(object: Partial<_118.SnapshotsResponse>): _118.SnapshotsResponse;
        };
        ChunkRequest: {
            encode(message: _118.ChunkRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _118.ChunkRequest;
            fromPartial(object: Partial<_118.ChunkRequest>): _118.ChunkRequest;
        };
        ChunkResponse: {
            encode(message: _118.ChunkResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _118.ChunkResponse;
            fromPartial(object: Partial<_118.ChunkResponse>): _118.ChunkResponse;
        };
    };
    const store: {
        BlockStoreState: {
            encode(message: _119.BlockStoreState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _119.BlockStoreState;
            fromPartial(object: Partial<_119.BlockStoreState>): _119.BlockStoreState;
        };
    };
}
