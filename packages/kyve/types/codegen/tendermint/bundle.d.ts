import * as _137 from "./abci/types";
import * as _138 from "./crypto/keys";
import * as _139 from "./crypto/proof";
import * as _140 from "./libs/bits/types";
import * as _141 from "./p2p/types";
import * as _142 from "./types/block";
import * as _143 from "./types/evidence";
import * as _144 from "./types/params";
import * as _145 from "./types/types";
import * as _146 from "./types/validator";
import * as _147 from "./version/types";
export declare namespace tendermint {
    const abci: {
        checkTxTypeFromJSON(object: any): _137.CheckTxType;
        checkTxTypeToJSON(object: _137.CheckTxType): string;
        responseOfferSnapshot_ResultFromJSON(object: any): _137.ResponseOfferSnapshot_Result;
        responseOfferSnapshot_ResultToJSON(object: _137.ResponseOfferSnapshot_Result): string;
        responseApplySnapshotChunk_ResultFromJSON(object: any): _137.ResponseApplySnapshotChunk_Result;
        responseApplySnapshotChunk_ResultToJSON(object: _137.ResponseApplySnapshotChunk_Result): string;
        evidenceTypeFromJSON(object: any): _137.EvidenceType;
        evidenceTypeToJSON(object: _137.EvidenceType): string;
        CheckTxType: typeof _137.CheckTxType;
        CheckTxTypeSDKType: typeof _137.CheckTxType;
        ResponseOfferSnapshot_Result: typeof _137.ResponseOfferSnapshot_Result;
        ResponseOfferSnapshot_ResultSDKType: typeof _137.ResponseOfferSnapshot_Result;
        ResponseApplySnapshotChunk_Result: typeof _137.ResponseApplySnapshotChunk_Result;
        ResponseApplySnapshotChunk_ResultSDKType: typeof _137.ResponseApplySnapshotChunk_Result;
        EvidenceType: typeof _137.EvidenceType;
        EvidenceTypeSDKType: typeof _137.EvidenceType;
        Request: {
            encode(message: _137.Request, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _137.Request;
            fromPartial(object: Partial<_137.Request>): _137.Request;
        };
        RequestEcho: {
            encode(message: _137.RequestEcho, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _137.RequestEcho;
            fromPartial(object: Partial<_137.RequestEcho>): _137.RequestEcho;
        };
        RequestFlush: {
            encode(_: _137.RequestFlush, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(_: any): _137.RequestFlush;
            fromPartial(_: Partial<_137.RequestFlush>): _137.RequestFlush;
        };
        RequestInfo: {
            encode(message: _137.RequestInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _137.RequestInfo;
            fromPartial(object: Partial<_137.RequestInfo>): _137.RequestInfo;
        };
        RequestSetOption: {
            encode(message: _137.RequestSetOption, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _137.RequestSetOption;
            fromPartial(object: Partial<_137.RequestSetOption>): _137.RequestSetOption;
        };
        RequestInitChain: {
            encode(message: _137.RequestInitChain, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _137.RequestInitChain;
            fromPartial(object: Partial<_137.RequestInitChain>): _137.RequestInitChain;
        };
        RequestQuery: {
            encode(message: _137.RequestQuery, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _137.RequestQuery;
            fromPartial(object: Partial<_137.RequestQuery>): _137.RequestQuery;
        };
        RequestBeginBlock: {
            encode(message: _137.RequestBeginBlock, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _137.RequestBeginBlock;
            fromPartial(object: Partial<_137.RequestBeginBlock>): _137.RequestBeginBlock;
        };
        RequestCheckTx: {
            encode(message: _137.RequestCheckTx, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _137.RequestCheckTx;
            fromPartial(object: Partial<_137.RequestCheckTx>): _137.RequestCheckTx;
        };
        RequestDeliverTx: {
            encode(message: _137.RequestDeliverTx, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _137.RequestDeliverTx;
            fromPartial(object: Partial<_137.RequestDeliverTx>): _137.RequestDeliverTx;
        };
        RequestEndBlock: {
            encode(message: _137.RequestEndBlock, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _137.RequestEndBlock;
            fromPartial(object: Partial<_137.RequestEndBlock>): _137.RequestEndBlock;
        };
        RequestCommit: {
            encode(_: _137.RequestCommit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(_: any): _137.RequestCommit;
            fromPartial(_: Partial<_137.RequestCommit>): _137.RequestCommit;
        };
        RequestListSnapshots: {
            encode(_: _137.RequestListSnapshots, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(_: any): _137.RequestListSnapshots;
            fromPartial(_: Partial<_137.RequestListSnapshots>): _137.RequestListSnapshots;
        };
        RequestOfferSnapshot: {
            encode(message: _137.RequestOfferSnapshot, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _137.RequestOfferSnapshot;
            fromPartial(object: Partial<_137.RequestOfferSnapshot>): _137.RequestOfferSnapshot;
        };
        RequestLoadSnapshotChunk: {
            encode(message: _137.RequestLoadSnapshotChunk, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _137.RequestLoadSnapshotChunk;
            fromPartial(object: Partial<_137.RequestLoadSnapshotChunk>): _137.RequestLoadSnapshotChunk;
        };
        RequestApplySnapshotChunk: {
            encode(message: _137.RequestApplySnapshotChunk, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _137.RequestApplySnapshotChunk;
            fromPartial(object: Partial<_137.RequestApplySnapshotChunk>): _137.RequestApplySnapshotChunk;
        };
        Response: {
            encode(message: _137.Response, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _137.Response;
            fromPartial(object: Partial<_137.Response>): _137.Response;
        };
        ResponseException: {
            encode(message: _137.ResponseException, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _137.ResponseException;
            fromPartial(object: Partial<_137.ResponseException>): _137.ResponseException;
        };
        ResponseEcho: {
            encode(message: _137.ResponseEcho, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _137.ResponseEcho;
            fromPartial(object: Partial<_137.ResponseEcho>): _137.ResponseEcho;
        };
        ResponseFlush: {
            encode(_: _137.ResponseFlush, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(_: any): _137.ResponseFlush;
            fromPartial(_: Partial<_137.ResponseFlush>): _137.ResponseFlush;
        };
        ResponseInfo: {
            encode(message: _137.ResponseInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _137.ResponseInfo;
            fromPartial(object: Partial<_137.ResponseInfo>): _137.ResponseInfo;
        };
        ResponseSetOption: {
            encode(message: _137.ResponseSetOption, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _137.ResponseSetOption;
            fromPartial(object: Partial<_137.ResponseSetOption>): _137.ResponseSetOption;
        };
        ResponseInitChain: {
            encode(message: _137.ResponseInitChain, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _137.ResponseInitChain;
            fromPartial(object: Partial<_137.ResponseInitChain>): _137.ResponseInitChain;
        };
        ResponseQuery: {
            encode(message: _137.ResponseQuery, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _137.ResponseQuery;
            fromPartial(object: Partial<_137.ResponseQuery>): _137.ResponseQuery;
        };
        ResponseBeginBlock: {
            encode(message: _137.ResponseBeginBlock, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _137.ResponseBeginBlock;
            fromPartial(object: Partial<_137.ResponseBeginBlock>): _137.ResponseBeginBlock;
        };
        ResponseCheckTx: {
            encode(message: _137.ResponseCheckTx, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _137.ResponseCheckTx;
            fromPartial(object: Partial<_137.ResponseCheckTx>): _137.ResponseCheckTx;
        };
        ResponseDeliverTx: {
            encode(message: _137.ResponseDeliverTx, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _137.ResponseDeliverTx;
            fromPartial(object: Partial<_137.ResponseDeliverTx>): _137.ResponseDeliverTx;
        };
        ResponseEndBlock: {
            encode(message: _137.ResponseEndBlock, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _137.ResponseEndBlock;
            fromPartial(object: Partial<_137.ResponseEndBlock>): _137.ResponseEndBlock;
        };
        ResponseCommit: {
            encode(message: _137.ResponseCommit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _137.ResponseCommit;
            fromPartial(object: Partial<_137.ResponseCommit>): _137.ResponseCommit;
        };
        ResponseListSnapshots: {
            encode(message: _137.ResponseListSnapshots, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _137.ResponseListSnapshots;
            fromPartial(object: Partial<_137.ResponseListSnapshots>): _137.ResponseListSnapshots;
        };
        ResponseOfferSnapshot: {
            encode(message: _137.ResponseOfferSnapshot, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _137.ResponseOfferSnapshot;
            fromPartial(object: Partial<_137.ResponseOfferSnapshot>): _137.ResponseOfferSnapshot;
        };
        ResponseLoadSnapshotChunk: {
            encode(message: _137.ResponseLoadSnapshotChunk, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _137.ResponseLoadSnapshotChunk;
            fromPartial(object: Partial<_137.ResponseLoadSnapshotChunk>): _137.ResponseLoadSnapshotChunk;
        };
        ResponseApplySnapshotChunk: {
            encode(message: _137.ResponseApplySnapshotChunk, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _137.ResponseApplySnapshotChunk;
            fromPartial(object: Partial<_137.ResponseApplySnapshotChunk>): _137.ResponseApplySnapshotChunk;
        };
        ConsensusParams: {
            encode(message: _137.ConsensusParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _137.ConsensusParams;
            fromPartial(object: Partial<_137.ConsensusParams>): _137.ConsensusParams;
        };
        BlockParams: {
            encode(message: _137.BlockParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _137.BlockParams;
            fromPartial(object: Partial<_137.BlockParams>): _137.BlockParams;
        };
        LastCommitInfo: {
            encode(message: _137.LastCommitInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _137.LastCommitInfo;
            fromPartial(object: Partial<_137.LastCommitInfo>): _137.LastCommitInfo;
        };
        Event: {
            encode(message: _137.Event, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _137.Event;
            fromPartial(object: Partial<_137.Event>): _137.Event;
        };
        EventAttribute: {
            encode(message: _137.EventAttribute, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _137.EventAttribute;
            fromPartial(object: Partial<_137.EventAttribute>): _137.EventAttribute;
        };
        TxResult: {
            encode(message: _137.TxResult, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _137.TxResult;
            fromPartial(object: Partial<_137.TxResult>): _137.TxResult;
        };
        Validator: {
            encode(message: _137.Validator, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _137.Validator;
            fromPartial(object: Partial<_137.Validator>): _137.Validator;
        };
        ValidatorUpdate: {
            encode(message: _137.ValidatorUpdate, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _137.ValidatorUpdate;
            fromPartial(object: Partial<_137.ValidatorUpdate>): _137.ValidatorUpdate;
        };
        VoteInfo: {
            encode(message: _137.VoteInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _137.VoteInfo;
            fromPartial(object: Partial<_137.VoteInfo>): _137.VoteInfo;
        };
        Evidence: {
            encode(message: _137.Evidence, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _137.Evidence;
            fromPartial(object: Partial<_137.Evidence>): _137.Evidence;
        };
        Snapshot: {
            encode(message: _137.Snapshot, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _137.Snapshot;
            fromPartial(object: Partial<_137.Snapshot>): _137.Snapshot;
        };
    };
    const crypto: {
        Proof: {
            encode(message: _139.Proof, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _139.Proof;
            fromPartial(object: Partial<_139.Proof>): _139.Proof;
        };
        ValueOp: {
            encode(message: _139.ValueOp, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _139.ValueOp;
            fromPartial(object: Partial<_139.ValueOp>): _139.ValueOp;
        };
        DominoOp: {
            encode(message: _139.DominoOp, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _139.DominoOp;
            fromPartial(object: Partial<_139.DominoOp>): _139.DominoOp;
        };
        ProofOp: {
            encode(message: _139.ProofOp, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _139.ProofOp;
            fromPartial(object: Partial<_139.ProofOp>): _139.ProofOp;
        };
        ProofOps: {
            encode(message: _139.ProofOps, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _139.ProofOps;
            fromPartial(object: Partial<_139.ProofOps>): _139.ProofOps;
        };
        PublicKey: {
            encode(message: _138.PublicKey, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _138.PublicKey;
            fromPartial(object: Partial<_138.PublicKey>): _138.PublicKey;
        };
    };
    namespace libs {
        const bits: {
            BitArray: {
                encode(message: _140.BitArray, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _140.BitArray;
                fromPartial(object: Partial<_140.BitArray>): _140.BitArray;
            };
        };
    }
    const p2p: {
        NetAddress: {
            encode(message: _141.NetAddress, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _141.NetAddress;
            fromPartial(object: Partial<_141.NetAddress>): _141.NetAddress;
        };
        ProtocolVersion: {
            encode(message: _141.ProtocolVersion, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _141.ProtocolVersion;
            fromPartial(object: Partial<_141.ProtocolVersion>): _141.ProtocolVersion;
        };
        DefaultNodeInfo: {
            encode(message: _141.DefaultNodeInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _141.DefaultNodeInfo;
            fromPartial(object: Partial<_141.DefaultNodeInfo>): _141.DefaultNodeInfo;
        };
        DefaultNodeInfoOther: {
            encode(message: _141.DefaultNodeInfoOther, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _141.DefaultNodeInfoOther;
            fromPartial(object: Partial<_141.DefaultNodeInfoOther>): _141.DefaultNodeInfoOther;
        };
    };
    const types: {
        ValidatorSet: {
            encode(message: _146.ValidatorSet, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _146.ValidatorSet;
            fromPartial(object: Partial<_146.ValidatorSet>): _146.ValidatorSet;
        };
        Validator: {
            encode(message: _146.Validator, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _146.Validator;
            fromPartial(object: Partial<_146.Validator>): _146.Validator;
        };
        SimpleValidator: {
            encode(message: _146.SimpleValidator, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _146.SimpleValidator;
            fromPartial(object: Partial<_146.SimpleValidator>): _146.SimpleValidator;
        };
        blockIDFlagFromJSON(object: any): _145.BlockIDFlag;
        blockIDFlagToJSON(object: _145.BlockIDFlag): string;
        signedMsgTypeFromJSON(object: any): _145.SignedMsgType;
        signedMsgTypeToJSON(object: _145.SignedMsgType): string;
        BlockIDFlag: typeof _145.BlockIDFlag;
        BlockIDFlagSDKType: typeof _145.BlockIDFlag;
        SignedMsgType: typeof _145.SignedMsgType;
        SignedMsgTypeSDKType: typeof _145.SignedMsgType;
        PartSetHeader: {
            encode(message: _145.PartSetHeader, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _145.PartSetHeader;
            fromPartial(object: Partial<_145.PartSetHeader>): _145.PartSetHeader;
        };
        Part: {
            encode(message: _145.Part, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _145.Part;
            fromPartial(object: Partial<_145.Part>): _145.Part;
        };
        BlockID: {
            encode(message: _145.BlockID, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _145.BlockID;
            fromPartial(object: Partial<_145.BlockID>): _145.BlockID;
        };
        Header: {
            encode(message: _145.Header, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _145.Header;
            fromPartial(object: Partial<_145.Header>): _145.Header;
        };
        Data: {
            encode(message: _145.Data, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _145.Data;
            fromPartial(object: Partial<_145.Data>): _145.Data;
        };
        Vote: {
            encode(message: _145.Vote, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _145.Vote;
            fromPartial(object: Partial<_145.Vote>): _145.Vote;
        };
        Commit: {
            encode(message: _145.Commit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _145.Commit;
            fromPartial(object: Partial<_145.Commit>): _145.Commit;
        };
        CommitSig: {
            encode(message: _145.CommitSig, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _145.CommitSig;
            fromPartial(object: Partial<_145.CommitSig>): _145.CommitSig;
        };
        Proposal: {
            encode(message: _145.Proposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _145.Proposal;
            fromPartial(object: Partial<_145.Proposal>): _145.Proposal;
        };
        SignedHeader: {
            encode(message: _145.SignedHeader, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _145.SignedHeader;
            fromPartial(object: Partial<_145.SignedHeader>): _145.SignedHeader;
        };
        LightBlock: {
            encode(message: _145.LightBlock, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _145.LightBlock;
            fromPartial(object: Partial<_145.LightBlock>): _145.LightBlock;
        };
        BlockMeta: {
            encode(message: _145.BlockMeta, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _145.BlockMeta;
            fromPartial(object: Partial<_145.BlockMeta>): _145.BlockMeta;
        };
        TxProof: {
            encode(message: _145.TxProof, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _145.TxProof;
            fromPartial(object: Partial<_145.TxProof>): _145.TxProof;
        };
        ConsensusParams: {
            encode(message: _144.ConsensusParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _144.ConsensusParams;
            fromPartial(object: Partial<_144.ConsensusParams>): _144.ConsensusParams;
        };
        BlockParams: {
            encode(message: _144.BlockParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _144.BlockParams;
            fromPartial(object: Partial<_144.BlockParams>): _144.BlockParams;
        };
        EvidenceParams: {
            encode(message: _144.EvidenceParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _144.EvidenceParams;
            fromPartial(object: Partial<_144.EvidenceParams>): _144.EvidenceParams;
        };
        ValidatorParams: {
            encode(message: _144.ValidatorParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _144.ValidatorParams;
            fromPartial(object: Partial<_144.ValidatorParams>): _144.ValidatorParams;
        };
        VersionParams: {
            encode(message: _144.VersionParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _144.VersionParams;
            fromPartial(object: Partial<_144.VersionParams>): _144.VersionParams;
        };
        HashedParams: {
            encode(message: _144.HashedParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _144.HashedParams;
            fromPartial(object: Partial<_144.HashedParams>): _144.HashedParams;
        };
        Evidence: {
            encode(message: _143.Evidence, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _143.Evidence;
            fromPartial(object: Partial<_143.Evidence>): _143.Evidence;
        };
        DuplicateVoteEvidence: {
            encode(message: _143.DuplicateVoteEvidence, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _143.DuplicateVoteEvidence;
            fromPartial(object: Partial<_143.DuplicateVoteEvidence>): _143.DuplicateVoteEvidence;
        };
        LightClientAttackEvidence: {
            encode(message: _143.LightClientAttackEvidence, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _143.LightClientAttackEvidence;
            fromPartial(object: Partial<_143.LightClientAttackEvidence>): _143.LightClientAttackEvidence;
        };
        EvidenceList: {
            encode(message: _143.EvidenceList, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _143.EvidenceList;
            fromPartial(object: Partial<_143.EvidenceList>): _143.EvidenceList;
        };
        Block: {
            encode(message: _142.Block, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _142.Block;
            fromPartial(object: Partial<_142.Block>): _142.Block;
        };
    };
    const version: {
        App: {
            encode(message: _147.App, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _147.App;
            fromPartial(object: Partial<_147.App>): _147.App;
        };
        Consensus: {
            encode(message: _147.Consensus, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _147.Consensus;
            fromPartial(object: Partial<_147.Consensus>): _147.Consensus;
        };
    };
}
