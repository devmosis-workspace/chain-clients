import * as _146 from "./crypto/keys";
import * as _147 from "./crypto/proof";
import * as _148 from "./libs/bits/types";
import * as _149 from "./types/types";
import * as _150 from "./types/validator";
import * as _151 from "./types/block";
import * as _152 from "./types/canonical";
import * as _153 from "./types/events";
import * as _154 from "./types/evidence";
import * as _155 from "./types/params";
import * as _156 from "./version/types";
import * as _157 from "./abci/types";
import * as _158 from "./blockchain/types";
import * as _159 from "./consensus/types";
import * as _160 from "./consensus/wal";
import * as _161 from "./mempool/types";
import * as _162 from "./p2p/conn";
import * as _163 from "./p2p/pex";
import * as _164 from "./p2p/types";
import * as _165 from "./privval/types";
import * as _166 from "./rpc/grpc/types";
import * as _167 from "./state/types";
import * as _168 from "./statesync/types";
import * as _169 from "./store/types";
export declare namespace tendermint {
    const crypto: {
        Proof: {
            encode(message: _147.Proof, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _147.Proof;
            fromPartial(object: Partial<_147.Proof>): _147.Proof;
        };
        ValueOp: {
            encode(message: _147.ValueOp, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _147.ValueOp;
            fromPartial(object: Partial<_147.ValueOp>): _147.ValueOp;
        };
        DominoOp: {
            encode(message: _147.DominoOp, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _147.DominoOp;
            fromPartial(object: Partial<_147.DominoOp>): _147.DominoOp;
        };
        ProofOp: {
            encode(message: _147.ProofOp, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _147.ProofOp;
            fromPartial(object: Partial<_147.ProofOp>): _147.ProofOp;
        };
        ProofOps: {
            encode(message: _147.ProofOps, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _147.ProofOps;
            fromPartial(object: Partial<_147.ProofOps>): _147.ProofOps;
        };
        PublicKey: {
            encode(message: _146.PublicKey, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _146.PublicKey;
            fromPartial(object: Partial<_146.PublicKey>): _146.PublicKey;
        };
    };
    namespace libs {
        const bits: {
            BitArray: {
                encode(message: _148.BitArray, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _148.BitArray;
                fromPartial(object: Partial<_148.BitArray>): _148.BitArray;
            };
        };
    }
    const types: {
        ConsensusParams: {
            encode(message: _155.ConsensusParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _155.ConsensusParams;
            fromPartial(object: Partial<_155.ConsensusParams>): _155.ConsensusParams;
        };
        BlockParams: {
            encode(message: _155.BlockParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _155.BlockParams;
            fromPartial(object: Partial<_155.BlockParams>): _155.BlockParams;
        };
        EvidenceParams: {
            encode(message: _155.EvidenceParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _155.EvidenceParams;
            fromPartial(object: Partial<_155.EvidenceParams>): _155.EvidenceParams;
        };
        ValidatorParams: {
            encode(message: _155.ValidatorParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _155.ValidatorParams;
            fromPartial(object: Partial<_155.ValidatorParams>): _155.ValidatorParams;
        };
        VersionParams: {
            encode(message: _155.VersionParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _155.VersionParams;
            fromPartial(object: Partial<_155.VersionParams>): _155.VersionParams;
        };
        HashedParams: {
            encode(message: _155.HashedParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _155.HashedParams;
            fromPartial(object: Partial<_155.HashedParams>): _155.HashedParams;
        };
        Evidence: {
            encode(message: _154.Evidence, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _154.Evidence;
            fromPartial(object: Partial<_154.Evidence>): _154.Evidence;
        };
        DuplicateVoteEvidence: {
            encode(message: _154.DuplicateVoteEvidence, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _154.DuplicateVoteEvidence;
            fromPartial(object: Partial<_154.DuplicateVoteEvidence>): _154.DuplicateVoteEvidence;
        };
        LightClientAttackEvidence: {
            encode(message: _154.LightClientAttackEvidence, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _154.LightClientAttackEvidence;
            fromPartial(object: Partial<_154.LightClientAttackEvidence>): _154.LightClientAttackEvidence;
        };
        EvidenceList: {
            encode(message: _154.EvidenceList, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _154.EvidenceList;
            fromPartial(object: Partial<_154.EvidenceList>): _154.EvidenceList;
        };
        EventDataRoundState: {
            encode(message: _153.EventDataRoundState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _153.EventDataRoundState;
            fromPartial(object: Partial<_153.EventDataRoundState>): _153.EventDataRoundState;
        };
        CanonicalBlockID: {
            encode(message: _152.CanonicalBlockID, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _152.CanonicalBlockID;
            fromPartial(object: Partial<_152.CanonicalBlockID>): _152.CanonicalBlockID;
        };
        CanonicalPartSetHeader: {
            encode(message: _152.CanonicalPartSetHeader, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _152.CanonicalPartSetHeader;
            fromPartial(object: Partial<_152.CanonicalPartSetHeader>): _152.CanonicalPartSetHeader;
        };
        CanonicalProposal: {
            encode(message: _152.CanonicalProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _152.CanonicalProposal;
            fromPartial(object: Partial<_152.CanonicalProposal>): _152.CanonicalProposal;
        };
        CanonicalVote: {
            encode(message: _152.CanonicalVote, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _152.CanonicalVote;
            fromPartial(object: Partial<_152.CanonicalVote>): _152.CanonicalVote;
        };
        Block: {
            encode(message: _151.Block, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _151.Block;
            fromPartial(object: Partial<_151.Block>): _151.Block;
        };
        ValidatorSet: {
            encode(message: _150.ValidatorSet, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _150.ValidatorSet;
            fromPartial(object: Partial<_150.ValidatorSet>): _150.ValidatorSet;
        };
        Validator: {
            encode(message: _150.Validator, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _150.Validator;
            fromPartial(object: Partial<_150.Validator>): _150.Validator;
        };
        SimpleValidator: {
            encode(message: _150.SimpleValidator, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _150.SimpleValidator;
            fromPartial(object: Partial<_150.SimpleValidator>): _150.SimpleValidator;
        };
        blockIDFlagFromJSON(object: any): _149.BlockIDFlag;
        blockIDFlagToJSON(object: _149.BlockIDFlag): string;
        signedMsgTypeFromJSON(object: any): _149.SignedMsgType;
        signedMsgTypeToJSON(object: _149.SignedMsgType): string;
        BlockIDFlag: typeof _149.BlockIDFlag;
        BlockIDFlagSDKType: typeof _149.BlockIDFlag;
        SignedMsgType: typeof _149.SignedMsgType;
        SignedMsgTypeSDKType: typeof _149.SignedMsgType;
        PartSetHeader: {
            encode(message: _149.PartSetHeader, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _149.PartSetHeader;
            fromPartial(object: Partial<_149.PartSetHeader>): _149.PartSetHeader;
        };
        Part: {
            encode(message: _149.Part, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _149.Part;
            fromPartial(object: Partial<_149.Part>): _149.Part;
        };
        BlockID: {
            encode(message: _149.BlockID, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _149.BlockID;
            fromPartial(object: Partial<_149.BlockID>): _149.BlockID;
        };
        Header: {
            encode(message: _149.Header, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _149.Header;
            fromPartial(object: Partial<_149.Header>): _149.Header;
        };
        Data: {
            encode(message: _149.Data, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _149.Data;
            fromPartial(object: Partial<_149.Data>): _149.Data;
        };
        Vote: {
            encode(message: _149.Vote, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _149.Vote;
            fromPartial(object: Partial<_149.Vote>): _149.Vote;
        };
        Commit: {
            encode(message: _149.Commit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _149.Commit;
            fromPartial(object: Partial<_149.Commit>): _149.Commit;
        };
        CommitSig: {
            encode(message: _149.CommitSig, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _149.CommitSig;
            fromPartial(object: Partial<_149.CommitSig>): _149.CommitSig;
        };
        Proposal: {
            encode(message: _149.Proposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _149.Proposal;
            fromPartial(object: Partial<_149.Proposal>): _149.Proposal;
        };
        SignedHeader: {
            encode(message: _149.SignedHeader, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _149.SignedHeader;
            fromPartial(object: Partial<_149.SignedHeader>): _149.SignedHeader;
        };
        LightBlock: {
            encode(message: _149.LightBlock, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _149.LightBlock;
            fromPartial(object: Partial<_149.LightBlock>): _149.LightBlock;
        };
        BlockMeta: {
            encode(message: _149.BlockMeta, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _149.BlockMeta;
            fromPartial(object: Partial<_149.BlockMeta>): _149.BlockMeta;
        };
        TxProof: {
            encode(message: _149.TxProof, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _149.TxProof;
            fromPartial(object: Partial<_149.TxProof>): _149.TxProof;
        };
    };
    const version: {
        App: {
            encode(message: _156.App, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _156.App;
            fromPartial(object: Partial<_156.App>): _156.App;
        };
        Consensus: {
            encode(message: _156.Consensus, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _156.Consensus;
            fromPartial(object: Partial<_156.Consensus>): _156.Consensus;
        };
    };
    const abci: {
        checkTxTypeFromJSON(object: any): _157.CheckTxType;
        checkTxTypeToJSON(object: _157.CheckTxType): string;
        responseOfferSnapshot_ResultFromJSON(object: any): _157.ResponseOfferSnapshot_Result;
        responseOfferSnapshot_ResultToJSON(object: _157.ResponseOfferSnapshot_Result): string;
        responseApplySnapshotChunk_ResultFromJSON(object: any): _157.ResponseApplySnapshotChunk_Result;
        responseApplySnapshotChunk_ResultToJSON(object: _157.ResponseApplySnapshotChunk_Result): string;
        evidenceTypeFromJSON(object: any): _157.EvidenceType;
        evidenceTypeToJSON(object: _157.EvidenceType): string;
        CheckTxType: typeof _157.CheckTxType;
        CheckTxTypeSDKType: typeof _157.CheckTxType;
        ResponseOfferSnapshot_Result: typeof _157.ResponseOfferSnapshot_Result;
        ResponseOfferSnapshot_ResultSDKType: typeof _157.ResponseOfferSnapshot_Result;
        ResponseApplySnapshotChunk_Result: typeof _157.ResponseApplySnapshotChunk_Result;
        ResponseApplySnapshotChunk_ResultSDKType: typeof _157.ResponseApplySnapshotChunk_Result;
        EvidenceType: typeof _157.EvidenceType;
        EvidenceTypeSDKType: typeof _157.EvidenceType;
        Request: {
            encode(message: _157.Request, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _157.Request;
            fromPartial(object: Partial<_157.Request>): _157.Request;
        };
        RequestEcho: {
            encode(message: _157.RequestEcho, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _157.RequestEcho;
            fromPartial(object: Partial<_157.RequestEcho>): _157.RequestEcho;
        };
        RequestFlush: {
            encode(_: _157.RequestFlush, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(_: any): _157.RequestFlush;
            fromPartial(_: Partial<_157.RequestFlush>): _157.RequestFlush;
        };
        RequestInfo: {
            encode(message: _157.RequestInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _157.RequestInfo;
            fromPartial(object: Partial<_157.RequestInfo>): _157.RequestInfo;
        };
        RequestSetOption: {
            encode(message: _157.RequestSetOption, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _157.RequestSetOption;
            fromPartial(object: Partial<_157.RequestSetOption>): _157.RequestSetOption;
        };
        RequestInitChain: {
            encode(message: _157.RequestInitChain, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _157.RequestInitChain;
            fromPartial(object: Partial<_157.RequestInitChain>): _157.RequestInitChain;
        };
        RequestQuery: {
            encode(message: _157.RequestQuery, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _157.RequestQuery;
            fromPartial(object: Partial<_157.RequestQuery>): _157.RequestQuery;
        };
        RequestBeginBlock: {
            encode(message: _157.RequestBeginBlock, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _157.RequestBeginBlock;
            fromPartial(object: Partial<_157.RequestBeginBlock>): _157.RequestBeginBlock;
        };
        RequestCheckTx: {
            encode(message: _157.RequestCheckTx, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _157.RequestCheckTx;
            fromPartial(object: Partial<_157.RequestCheckTx>): _157.RequestCheckTx;
        };
        RequestDeliverTx: {
            encode(message: _157.RequestDeliverTx, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _157.RequestDeliverTx;
            fromPartial(object: Partial<_157.RequestDeliverTx>): _157.RequestDeliverTx;
        };
        RequestEndBlock: {
            encode(message: _157.RequestEndBlock, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _157.RequestEndBlock;
            fromPartial(object: Partial<_157.RequestEndBlock>): _157.RequestEndBlock;
        };
        RequestCommit: {
            encode(_: _157.RequestCommit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(_: any): _157.RequestCommit;
            fromPartial(_: Partial<_157.RequestCommit>): _157.RequestCommit;
        };
        RequestListSnapshots: {
            encode(_: _157.RequestListSnapshots, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(_: any): _157.RequestListSnapshots;
            fromPartial(_: Partial<_157.RequestListSnapshots>): _157.RequestListSnapshots;
        };
        RequestOfferSnapshot: {
            encode(message: _157.RequestOfferSnapshot, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _157.RequestOfferSnapshot;
            fromPartial(object: Partial<_157.RequestOfferSnapshot>): _157.RequestOfferSnapshot;
        };
        RequestLoadSnapshotChunk: {
            encode(message: _157.RequestLoadSnapshotChunk, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _157.RequestLoadSnapshotChunk;
            fromPartial(object: Partial<_157.RequestLoadSnapshotChunk>): _157.RequestLoadSnapshotChunk;
        };
        RequestApplySnapshotChunk: {
            encode(message: _157.RequestApplySnapshotChunk, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _157.RequestApplySnapshotChunk;
            fromPartial(object: Partial<_157.RequestApplySnapshotChunk>): _157.RequestApplySnapshotChunk;
        };
        Response: {
            encode(message: _157.Response, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _157.Response;
            fromPartial(object: Partial<_157.Response>): _157.Response;
        };
        ResponseException: {
            encode(message: _157.ResponseException, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _157.ResponseException;
            fromPartial(object: Partial<_157.ResponseException>): _157.ResponseException;
        };
        ResponseEcho: {
            encode(message: _157.ResponseEcho, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _157.ResponseEcho;
            fromPartial(object: Partial<_157.ResponseEcho>): _157.ResponseEcho;
        };
        ResponseFlush: {
            encode(_: _157.ResponseFlush, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(_: any): _157.ResponseFlush;
            fromPartial(_: Partial<_157.ResponseFlush>): _157.ResponseFlush;
        };
        ResponseInfo: {
            encode(message: _157.ResponseInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _157.ResponseInfo;
            fromPartial(object: Partial<_157.ResponseInfo>): _157.ResponseInfo;
        };
        ResponseSetOption: {
            encode(message: _157.ResponseSetOption, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _157.ResponseSetOption;
            fromPartial(object: Partial<_157.ResponseSetOption>): _157.ResponseSetOption;
        };
        ResponseInitChain: {
            encode(message: _157.ResponseInitChain, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _157.ResponseInitChain;
            fromPartial(object: Partial<_157.ResponseInitChain>): _157.ResponseInitChain;
        };
        ResponseQuery: {
            encode(message: _157.ResponseQuery, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _157.ResponseQuery;
            fromPartial(object: Partial<_157.ResponseQuery>): _157.ResponseQuery;
        };
        ResponseBeginBlock: {
            encode(message: _157.ResponseBeginBlock, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _157.ResponseBeginBlock;
            fromPartial(object: Partial<_157.ResponseBeginBlock>): _157.ResponseBeginBlock;
        };
        ResponseCheckTx: {
            encode(message: _157.ResponseCheckTx, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _157.ResponseCheckTx;
            fromPartial(object: Partial<_157.ResponseCheckTx>): _157.ResponseCheckTx;
        };
        ResponseDeliverTx: {
            encode(message: _157.ResponseDeliverTx, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _157.ResponseDeliverTx;
            fromPartial(object: Partial<_157.ResponseDeliverTx>): _157.ResponseDeliverTx;
        };
        ResponseEndBlock: {
            encode(message: _157.ResponseEndBlock, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _157.ResponseEndBlock;
            fromPartial(object: Partial<_157.ResponseEndBlock>): _157.ResponseEndBlock;
        };
        ResponseCommit: {
            encode(message: _157.ResponseCommit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _157.ResponseCommit;
            fromPartial(object: Partial<_157.ResponseCommit>): _157.ResponseCommit;
        };
        ResponseListSnapshots: {
            encode(message: _157.ResponseListSnapshots, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _157.ResponseListSnapshots;
            fromPartial(object: Partial<_157.ResponseListSnapshots>): _157.ResponseListSnapshots;
        };
        ResponseOfferSnapshot: {
            encode(message: _157.ResponseOfferSnapshot, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _157.ResponseOfferSnapshot;
            fromPartial(object: Partial<_157.ResponseOfferSnapshot>): _157.ResponseOfferSnapshot;
        };
        ResponseLoadSnapshotChunk: {
            encode(message: _157.ResponseLoadSnapshotChunk, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _157.ResponseLoadSnapshotChunk;
            fromPartial(object: Partial<_157.ResponseLoadSnapshotChunk>): _157.ResponseLoadSnapshotChunk;
        };
        ResponseApplySnapshotChunk: {
            encode(message: _157.ResponseApplySnapshotChunk, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _157.ResponseApplySnapshotChunk;
            fromPartial(object: Partial<_157.ResponseApplySnapshotChunk>): _157.ResponseApplySnapshotChunk;
        };
        ConsensusParams: {
            encode(message: _157.ConsensusParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _157.ConsensusParams;
            fromPartial(object: Partial<_157.ConsensusParams>): _157.ConsensusParams;
        };
        BlockParams: {
            encode(message: _157.BlockParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _157.BlockParams;
            fromPartial(object: Partial<_157.BlockParams>): _157.BlockParams;
        };
        LastCommitInfo: {
            encode(message: _157.LastCommitInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _157.LastCommitInfo;
            fromPartial(object: Partial<_157.LastCommitInfo>): _157.LastCommitInfo;
        };
        Event: {
            encode(message: _157.Event, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _157.Event;
            fromPartial(object: Partial<_157.Event>): _157.Event;
        };
        EventAttribute: {
            encode(message: _157.EventAttribute, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _157.EventAttribute;
            fromPartial(object: Partial<_157.EventAttribute>): _157.EventAttribute;
        };
        TxResult: {
            encode(message: _157.TxResult, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _157.TxResult;
            fromPartial(object: Partial<_157.TxResult>): _157.TxResult;
        };
        Validator: {
            encode(message: _157.Validator, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _157.Validator;
            fromPartial(object: Partial<_157.Validator>): _157.Validator;
        };
        ValidatorUpdate: {
            encode(message: _157.ValidatorUpdate, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _157.ValidatorUpdate;
            fromPartial(object: Partial<_157.ValidatorUpdate>): _157.ValidatorUpdate;
        };
        VoteInfo: {
            encode(message: _157.VoteInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _157.VoteInfo;
            fromPartial(object: Partial<_157.VoteInfo>): _157.VoteInfo;
        };
        Evidence: {
            encode(message: _157.Evidence, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _157.Evidence;
            fromPartial(object: Partial<_157.Evidence>): _157.Evidence;
        };
        Snapshot: {
            encode(message: _157.Snapshot, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _157.Snapshot;
            fromPartial(object: Partial<_157.Snapshot>): _157.Snapshot;
        };
    };
    const blockchain: {
        BlockRequest: {
            encode(message: _158.BlockRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _158.BlockRequest;
            fromPartial(object: Partial<_158.BlockRequest>): _158.BlockRequest;
        };
        NoBlockResponse: {
            encode(message: _158.NoBlockResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _158.NoBlockResponse;
            fromPartial(object: Partial<_158.NoBlockResponse>): _158.NoBlockResponse;
        };
        BlockResponse: {
            encode(message: _158.BlockResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _158.BlockResponse;
            fromPartial(object: Partial<_158.BlockResponse>): _158.BlockResponse;
        };
        StatusRequest: {
            encode(_: _158.StatusRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(_: any): _158.StatusRequest;
            fromPartial(_: Partial<_158.StatusRequest>): _158.StatusRequest;
        };
        StatusResponse: {
            encode(message: _158.StatusResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _158.StatusResponse;
            fromPartial(object: Partial<_158.StatusResponse>): _158.StatusResponse;
        };
        Message: {
            encode(message: _158.Message, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _158.Message;
            fromPartial(object: Partial<_158.Message>): _158.Message;
        };
    };
    const consensus: {
        MsgInfo: {
            encode(message: _160.MsgInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _160.MsgInfo;
            fromPartial(object: Partial<_160.MsgInfo>): _160.MsgInfo;
        };
        TimeoutInfo: {
            encode(message: _160.TimeoutInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _160.TimeoutInfo;
            fromPartial(object: Partial<_160.TimeoutInfo>): _160.TimeoutInfo;
        };
        EndHeight: {
            encode(message: _160.EndHeight, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _160.EndHeight;
            fromPartial(object: Partial<_160.EndHeight>): _160.EndHeight;
        };
        WALMessage: {
            encode(message: _160.WALMessage, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _160.WALMessage;
            fromPartial(object: Partial<_160.WALMessage>): _160.WALMessage;
        };
        TimedWALMessage: {
            encode(message: _160.TimedWALMessage, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _160.TimedWALMessage;
            fromPartial(object: Partial<_160.TimedWALMessage>): _160.TimedWALMessage;
        };
        NewRoundStep: {
            encode(message: _159.NewRoundStep, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _159.NewRoundStep;
            fromPartial(object: Partial<_159.NewRoundStep>): _159.NewRoundStep;
        };
        NewValidBlock: {
            encode(message: _159.NewValidBlock, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _159.NewValidBlock;
            fromPartial(object: Partial<_159.NewValidBlock>): _159.NewValidBlock;
        };
        Proposal: {
            encode(message: _159.Proposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _159.Proposal;
            fromPartial(object: Partial<_159.Proposal>): _159.Proposal;
        };
        ProposalPOL: {
            encode(message: _159.ProposalPOL, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _159.ProposalPOL;
            fromPartial(object: Partial<_159.ProposalPOL>): _159.ProposalPOL;
        };
        BlockPart: {
            encode(message: _159.BlockPart, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _159.BlockPart;
            fromPartial(object: Partial<_159.BlockPart>): _159.BlockPart;
        };
        Vote: {
            encode(message: _159.Vote, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _159.Vote;
            fromPartial(object: Partial<_159.Vote>): _159.Vote;
        };
        HasVote: {
            encode(message: _159.HasVote, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _159.HasVote;
            fromPartial(object: Partial<_159.HasVote>): _159.HasVote;
        };
        VoteSetMaj23: {
            encode(message: _159.VoteSetMaj23, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _159.VoteSetMaj23;
            fromPartial(object: Partial<_159.VoteSetMaj23>): _159.VoteSetMaj23;
        };
        VoteSetBits: {
            encode(message: _159.VoteSetBits, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _159.VoteSetBits;
            fromPartial(object: Partial<_159.VoteSetBits>): _159.VoteSetBits;
        };
        Message: {
            encode(message: _159.Message, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _159.Message;
            fromPartial(object: Partial<_159.Message>): _159.Message;
        };
    };
    const mempool: {
        Txs: {
            encode(message: _161.Txs, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _161.Txs;
            fromPartial(object: Partial<_161.Txs>): _161.Txs;
        };
        Message: {
            encode(message: _161.Message, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _161.Message;
            fromPartial(object: Partial<_161.Message>): _161.Message;
        };
        MEVMessage: {
            encode(message: _161.MEVMessage, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _161.MEVMessage;
            fromPartial(object: Partial<_161.MEVMessage>): _161.MEVMessage;
        };
        MEVTxs: {
            encode(message: _161.MEVTxs, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _161.MEVTxs;
            fromPartial(object: Partial<_161.MEVTxs>): _161.MEVTxs;
        };
    };
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
        PexRequest: {
            encode(_: _163.PexRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(_: any): _163.PexRequest;
            fromPartial(_: Partial<_163.PexRequest>): _163.PexRequest;
        };
        PexAddrs: {
            encode(message: _163.PexAddrs, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _163.PexAddrs;
            fromPartial(object: Partial<_163.PexAddrs>): _163.PexAddrs;
        };
        Message: {
            encode(message: _163.Message, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _163.Message;
            fromPartial(object: Partial<_163.Message>): _163.Message;
        };
        PacketPing: {
            encode(_: _162.PacketPing, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(_: any): _162.PacketPing;
            fromPartial(_: Partial<_162.PacketPing>): _162.PacketPing;
        };
        PacketPong: {
            encode(_: _162.PacketPong, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(_: any): _162.PacketPong;
            fromPartial(_: Partial<_162.PacketPong>): _162.PacketPong;
        };
        PacketMsg: {
            encode(message: _162.PacketMsg, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _162.PacketMsg;
            fromPartial(object: Partial<_162.PacketMsg>): _162.PacketMsg;
        };
        Packet: {
            encode(message: _162.Packet, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _162.Packet;
            fromPartial(object: Partial<_162.Packet>): _162.Packet;
        };
        AuthSigMessage: {
            encode(message: _162.AuthSigMessage, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _162.AuthSigMessage;
            fromPartial(object: Partial<_162.AuthSigMessage>): _162.AuthSigMessage;
        };
    };
    const privval: {
        errorsFromJSON(object: any): _165.Errors;
        errorsToJSON(object: _165.Errors): string;
        Errors: typeof _165.Errors;
        ErrorsSDKType: typeof _165.Errors;
        RemoteSignerError: {
            encode(message: _165.RemoteSignerError, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _165.RemoteSignerError;
            fromPartial(object: Partial<_165.RemoteSignerError>): _165.RemoteSignerError;
        };
        PubKeyRequest: {
            encode(message: _165.PubKeyRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _165.PubKeyRequest;
            fromPartial(object: Partial<_165.PubKeyRequest>): _165.PubKeyRequest;
        };
        PubKeyResponse: {
            encode(message: _165.PubKeyResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _165.PubKeyResponse;
            fromPartial(object: Partial<_165.PubKeyResponse>): _165.PubKeyResponse;
        };
        SignVoteRequest: {
            encode(message: _165.SignVoteRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _165.SignVoteRequest;
            fromPartial(object: Partial<_165.SignVoteRequest>): _165.SignVoteRequest;
        };
        SignedVoteResponse: {
            encode(message: _165.SignedVoteResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _165.SignedVoteResponse;
            fromPartial(object: Partial<_165.SignedVoteResponse>): _165.SignedVoteResponse;
        };
        SignProposalRequest: {
            encode(message: _165.SignProposalRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _165.SignProposalRequest;
            fromPartial(object: Partial<_165.SignProposalRequest>): _165.SignProposalRequest;
        };
        SignedProposalResponse: {
            encode(message: _165.SignedProposalResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _165.SignedProposalResponse;
            fromPartial(object: Partial<_165.SignedProposalResponse>): _165.SignedProposalResponse;
        };
        PingRequest: {
            encode(_: _165.PingRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(_: any): _165.PingRequest;
            fromPartial(_: Partial<_165.PingRequest>): _165.PingRequest;
        };
        PingResponse: {
            encode(_: _165.PingResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(_: any): _165.PingResponse;
            fromPartial(_: Partial<_165.PingResponse>): _165.PingResponse;
        };
        Message: {
            encode(message: _165.Message, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _165.Message;
            fromPartial(object: Partial<_165.Message>): _165.Message;
        };
    };
    namespace rpc {
        const grpc: {
            RequestPing: {
                encode(_: _166.RequestPing, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _166.RequestPing;
                fromPartial(_: Partial<_166.RequestPing>): _166.RequestPing;
            };
            RequestBroadcastTx: {
                encode(message: _166.RequestBroadcastTx, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _166.RequestBroadcastTx;
                fromPartial(object: Partial<_166.RequestBroadcastTx>): _166.RequestBroadcastTx;
            };
            ResponsePing: {
                encode(_: _166.ResponsePing, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _166.ResponsePing;
                fromPartial(_: Partial<_166.ResponsePing>): _166.ResponsePing;
            };
            ResponseBroadcastTx: {
                encode(message: _166.ResponseBroadcastTx, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _166.ResponseBroadcastTx;
                fromPartial(object: Partial<_166.ResponseBroadcastTx>): _166.ResponseBroadcastTx;
            };
        };
    }
    const state: {
        ABCIResponses: {
            encode(message: _167.ABCIResponses, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _167.ABCIResponses;
            fromPartial(object: Partial<_167.ABCIResponses>): _167.ABCIResponses;
        };
        ValidatorsInfo: {
            encode(message: _167.ValidatorsInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _167.ValidatorsInfo;
            fromPartial(object: Partial<_167.ValidatorsInfo>): _167.ValidatorsInfo;
        };
        ConsensusParamsInfo: {
            encode(message: _167.ConsensusParamsInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _167.ConsensusParamsInfo;
            fromPartial(object: Partial<_167.ConsensusParamsInfo>): _167.ConsensusParamsInfo;
        };
        ABCIResponsesInfo: {
            encode(message: _167.ABCIResponsesInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _167.ABCIResponsesInfo;
            fromPartial(object: Partial<_167.ABCIResponsesInfo>): _167.ABCIResponsesInfo;
        };
        Version: {
            encode(message: _167.Version, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _167.Version;
            fromPartial(object: Partial<_167.Version>): _167.Version;
        };
        State: {
            encode(message: _167.State, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _167.State;
            fromPartial(object: Partial<_167.State>): _167.State;
        };
    };
    const statesync: {
        Message: {
            encode(message: _168.Message, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _168.Message;
            fromPartial(object: Partial<_168.Message>): _168.Message;
        };
        SnapshotsRequest: {
            encode(_: _168.SnapshotsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(_: any): _168.SnapshotsRequest;
            fromPartial(_: Partial<_168.SnapshotsRequest>): _168.SnapshotsRequest;
        };
        SnapshotsResponse: {
            encode(message: _168.SnapshotsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _168.SnapshotsResponse;
            fromPartial(object: Partial<_168.SnapshotsResponse>): _168.SnapshotsResponse;
        };
        ChunkRequest: {
            encode(message: _168.ChunkRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _168.ChunkRequest;
            fromPartial(object: Partial<_168.ChunkRequest>): _168.ChunkRequest;
        };
        ChunkResponse: {
            encode(message: _168.ChunkResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _168.ChunkResponse;
            fromPartial(object: Partial<_168.ChunkResponse>): _168.ChunkResponse;
        };
    };
    const store: {
        BlockStoreState: {
            encode(message: _169.BlockStoreState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _169.BlockStoreState;
            fromPartial(object: Partial<_169.BlockStoreState>): _169.BlockStoreState;
        };
    };
}
