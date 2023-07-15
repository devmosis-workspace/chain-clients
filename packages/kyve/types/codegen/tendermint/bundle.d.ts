import * as _135 from "./abci/types";
import * as _136 from "./crypto/keys";
import * as _137 from "./crypto/proof";
import * as _138 from "./libs/bits/types";
import * as _139 from "./p2p/types";
import * as _140 from "./types/block";
import * as _141 from "./types/evidence";
import * as _142 from "./types/params";
import * as _143 from "./types/types";
import * as _144 from "./types/validator";
import * as _145 from "./version/types";
export declare namespace tendermint {
    const abci: {
        checkTxTypeFromJSON(object: any): _135.CheckTxType;
        checkTxTypeToJSON(object: _135.CheckTxType): string;
        responseOfferSnapshot_ResultFromJSON(object: any): _135.ResponseOfferSnapshot_Result;
        responseOfferSnapshot_ResultToJSON(object: _135.ResponseOfferSnapshot_Result): string;
        responseApplySnapshotChunk_ResultFromJSON(object: any): _135.ResponseApplySnapshotChunk_Result;
        responseApplySnapshotChunk_ResultToJSON(object: _135.ResponseApplySnapshotChunk_Result): string;
        evidenceTypeFromJSON(object: any): _135.EvidenceType;
        evidenceTypeToJSON(object: _135.EvidenceType): string;
        CheckTxType: typeof _135.CheckTxType;
        CheckTxTypeSDKType: typeof _135.CheckTxType;
        ResponseOfferSnapshot_Result: typeof _135.ResponseOfferSnapshot_Result;
        ResponseOfferSnapshot_ResultSDKType: typeof _135.ResponseOfferSnapshot_Result;
        ResponseApplySnapshotChunk_Result: typeof _135.ResponseApplySnapshotChunk_Result;
        ResponseApplySnapshotChunk_ResultSDKType: typeof _135.ResponseApplySnapshotChunk_Result;
        EvidenceType: typeof _135.EvidenceType;
        EvidenceTypeSDKType: typeof _135.EvidenceType;
        Request: {
            encode(message: _135.Request, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _135.Request;
            fromPartial(object: Partial<_135.Request>): _135.Request;
        };
        RequestEcho: {
            encode(message: _135.RequestEcho, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _135.RequestEcho;
            fromPartial(object: Partial<_135.RequestEcho>): _135.RequestEcho;
        };
        RequestFlush: {
            encode(_: _135.RequestFlush, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(_: any): _135.RequestFlush;
            fromPartial(_: Partial<_135.RequestFlush>): _135.RequestFlush;
        };
        RequestInfo: {
            encode(message: _135.RequestInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _135.RequestInfo;
            fromPartial(object: Partial<_135.RequestInfo>): _135.RequestInfo;
        };
        RequestSetOption: {
            encode(message: _135.RequestSetOption, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _135.RequestSetOption;
            fromPartial(object: Partial<_135.RequestSetOption>): _135.RequestSetOption;
        };
        RequestInitChain: {
            encode(message: _135.RequestInitChain, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _135.RequestInitChain;
            fromPartial(object: Partial<_135.RequestInitChain>): _135.RequestInitChain;
        };
        RequestQuery: {
            encode(message: _135.RequestQuery, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _135.RequestQuery;
            fromPartial(object: Partial<_135.RequestQuery>): _135.RequestQuery;
        };
        RequestBeginBlock: {
            encode(message: _135.RequestBeginBlock, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _135.RequestBeginBlock;
            fromPartial(object: Partial<_135.RequestBeginBlock>): _135.RequestBeginBlock;
        };
        RequestCheckTx: {
            encode(message: _135.RequestCheckTx, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _135.RequestCheckTx;
            fromPartial(object: Partial<_135.RequestCheckTx>): _135.RequestCheckTx;
        };
        RequestDeliverTx: {
            encode(message: _135.RequestDeliverTx, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _135.RequestDeliverTx;
            fromPartial(object: Partial<_135.RequestDeliverTx>): _135.RequestDeliverTx;
        };
        RequestEndBlock: {
            encode(message: _135.RequestEndBlock, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _135.RequestEndBlock;
            fromPartial(object: Partial<_135.RequestEndBlock>): _135.RequestEndBlock;
        };
        RequestCommit: {
            encode(_: _135.RequestCommit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(_: any): _135.RequestCommit;
            fromPartial(_: Partial<_135.RequestCommit>): _135.RequestCommit;
        };
        RequestListSnapshots: {
            encode(_: _135.RequestListSnapshots, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(_: any): _135.RequestListSnapshots;
            fromPartial(_: Partial<_135.RequestListSnapshots>): _135.RequestListSnapshots;
        };
        RequestOfferSnapshot: {
            encode(message: _135.RequestOfferSnapshot, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _135.RequestOfferSnapshot;
            fromPartial(object: Partial<_135.RequestOfferSnapshot>): _135.RequestOfferSnapshot;
        };
        RequestLoadSnapshotChunk: {
            encode(message: _135.RequestLoadSnapshotChunk, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _135.RequestLoadSnapshotChunk;
            fromPartial(object: Partial<_135.RequestLoadSnapshotChunk>): _135.RequestLoadSnapshotChunk;
        };
        RequestApplySnapshotChunk: {
            encode(message: _135.RequestApplySnapshotChunk, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _135.RequestApplySnapshotChunk;
            fromPartial(object: Partial<_135.RequestApplySnapshotChunk>): _135.RequestApplySnapshotChunk;
        };
        Response: {
            encode(message: _135.Response, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _135.Response;
            fromPartial(object: Partial<_135.Response>): _135.Response;
        };
        ResponseException: {
            encode(message: _135.ResponseException, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _135.ResponseException;
            fromPartial(object: Partial<_135.ResponseException>): _135.ResponseException;
        };
        ResponseEcho: {
            encode(message: _135.ResponseEcho, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _135.ResponseEcho;
            fromPartial(object: Partial<_135.ResponseEcho>): _135.ResponseEcho;
        };
        ResponseFlush: {
            encode(_: _135.ResponseFlush, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(_: any): _135.ResponseFlush;
            fromPartial(_: Partial<_135.ResponseFlush>): _135.ResponseFlush;
        };
        ResponseInfo: {
            encode(message: _135.ResponseInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _135.ResponseInfo;
            fromPartial(object: Partial<_135.ResponseInfo>): _135.ResponseInfo;
        };
        ResponseSetOption: {
            encode(message: _135.ResponseSetOption, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _135.ResponseSetOption;
            fromPartial(object: Partial<_135.ResponseSetOption>): _135.ResponseSetOption;
        };
        ResponseInitChain: {
            encode(message: _135.ResponseInitChain, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _135.ResponseInitChain;
            fromPartial(object: Partial<_135.ResponseInitChain>): _135.ResponseInitChain;
        };
        ResponseQuery: {
            encode(message: _135.ResponseQuery, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _135.ResponseQuery;
            fromPartial(object: Partial<_135.ResponseQuery>): _135.ResponseQuery;
        };
        ResponseBeginBlock: {
            encode(message: _135.ResponseBeginBlock, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _135.ResponseBeginBlock;
            fromPartial(object: Partial<_135.ResponseBeginBlock>): _135.ResponseBeginBlock;
        };
        ResponseCheckTx: {
            encode(message: _135.ResponseCheckTx, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _135.ResponseCheckTx;
            fromPartial(object: Partial<_135.ResponseCheckTx>): _135.ResponseCheckTx;
        };
        ResponseDeliverTx: {
            encode(message: _135.ResponseDeliverTx, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _135.ResponseDeliverTx;
            fromPartial(object: Partial<_135.ResponseDeliverTx>): _135.ResponseDeliverTx;
        };
        ResponseEndBlock: {
            encode(message: _135.ResponseEndBlock, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _135.ResponseEndBlock;
            fromPartial(object: Partial<_135.ResponseEndBlock>): _135.ResponseEndBlock;
        };
        ResponseCommit: {
            encode(message: _135.ResponseCommit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _135.ResponseCommit;
            fromPartial(object: Partial<_135.ResponseCommit>): _135.ResponseCommit;
        };
        ResponseListSnapshots: {
            encode(message: _135.ResponseListSnapshots, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _135.ResponseListSnapshots;
            fromPartial(object: Partial<_135.ResponseListSnapshots>): _135.ResponseListSnapshots;
        };
        ResponseOfferSnapshot: {
            encode(message: _135.ResponseOfferSnapshot, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _135.ResponseOfferSnapshot;
            fromPartial(object: Partial<_135.ResponseOfferSnapshot>): _135.ResponseOfferSnapshot;
        };
        ResponseLoadSnapshotChunk: {
            encode(message: _135.ResponseLoadSnapshotChunk, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _135.ResponseLoadSnapshotChunk;
            fromPartial(object: Partial<_135.ResponseLoadSnapshotChunk>): _135.ResponseLoadSnapshotChunk;
        };
        ResponseApplySnapshotChunk: {
            encode(message: _135.ResponseApplySnapshotChunk, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _135.ResponseApplySnapshotChunk;
            fromPartial(object: Partial<_135.ResponseApplySnapshotChunk>): _135.ResponseApplySnapshotChunk;
        };
        ConsensusParams: {
            encode(message: _135.ConsensusParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _135.ConsensusParams;
            fromPartial(object: Partial<_135.ConsensusParams>): _135.ConsensusParams;
        };
        BlockParams: {
            encode(message: _135.BlockParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _135.BlockParams;
            fromPartial(object: Partial<_135.BlockParams>): _135.BlockParams;
        };
        LastCommitInfo: {
            encode(message: _135.LastCommitInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _135.LastCommitInfo;
            fromPartial(object: Partial<_135.LastCommitInfo>): _135.LastCommitInfo;
        };
        Event: {
            encode(message: _135.Event, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _135.Event;
            fromPartial(object: Partial<_135.Event>): _135.Event;
        };
        EventAttribute: {
            encode(message: _135.EventAttribute, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _135.EventAttribute;
            fromPartial(object: Partial<_135.EventAttribute>): _135.EventAttribute;
        };
        TxResult: {
            encode(message: _135.TxResult, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _135.TxResult;
            fromPartial(object: Partial<_135.TxResult>): _135.TxResult;
        };
        Validator: {
            encode(message: _135.Validator, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _135.Validator;
            fromPartial(object: Partial<_135.Validator>): _135.Validator;
        };
        ValidatorUpdate: {
            encode(message: _135.ValidatorUpdate, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _135.ValidatorUpdate;
            fromPartial(object: Partial<_135.ValidatorUpdate>): _135.ValidatorUpdate;
        };
        VoteInfo: {
            encode(message: _135.VoteInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _135.VoteInfo;
            fromPartial(object: Partial<_135.VoteInfo>): _135.VoteInfo;
        };
        Evidence: {
            encode(message: _135.Evidence, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _135.Evidence;
            fromPartial(object: Partial<_135.Evidence>): _135.Evidence;
        };
        Snapshot: {
            encode(message: _135.Snapshot, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _135.Snapshot;
            fromPartial(object: Partial<_135.Snapshot>): _135.Snapshot;
        };
    };
    const crypto: {
        Proof: {
            encode(message: _137.Proof, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _137.Proof;
            fromPartial(object: Partial<_137.Proof>): _137.Proof;
        };
        ValueOp: {
            encode(message: _137.ValueOp, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _137.ValueOp;
            fromPartial(object: Partial<_137.ValueOp>): _137.ValueOp;
        };
        DominoOp: {
            encode(message: _137.DominoOp, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _137.DominoOp;
            fromPartial(object: Partial<_137.DominoOp>): _137.DominoOp;
        };
        ProofOp: {
            encode(message: _137.ProofOp, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _137.ProofOp;
            fromPartial(object: Partial<_137.ProofOp>): _137.ProofOp;
        };
        ProofOps: {
            encode(message: _137.ProofOps, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _137.ProofOps;
            fromPartial(object: Partial<_137.ProofOps>): _137.ProofOps;
        };
        PublicKey: {
            encode(message: _136.PublicKey, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _136.PublicKey;
            fromPartial(object: Partial<_136.PublicKey>): _136.PublicKey;
        };
    };
    namespace libs {
        const bits: {
            BitArray: {
                encode(message: _138.BitArray, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _138.BitArray;
                fromPartial(object: Partial<_138.BitArray>): _138.BitArray;
            };
        };
    }
    const p2p: {
        NetAddress: {
            encode(message: _139.NetAddress, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _139.NetAddress;
            fromPartial(object: Partial<_139.NetAddress>): _139.NetAddress;
        };
        ProtocolVersion: {
            encode(message: _139.ProtocolVersion, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _139.ProtocolVersion;
            fromPartial(object: Partial<_139.ProtocolVersion>): _139.ProtocolVersion;
        };
        DefaultNodeInfo: {
            encode(message: _139.DefaultNodeInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _139.DefaultNodeInfo;
            fromPartial(object: Partial<_139.DefaultNodeInfo>): _139.DefaultNodeInfo;
        };
        DefaultNodeInfoOther: {
            encode(message: _139.DefaultNodeInfoOther, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _139.DefaultNodeInfoOther;
            fromPartial(object: Partial<_139.DefaultNodeInfoOther>): _139.DefaultNodeInfoOther;
        };
    };
    const types: {
        ValidatorSet: {
            encode(message: _144.ValidatorSet, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _144.ValidatorSet;
            fromPartial(object: Partial<_144.ValidatorSet>): _144.ValidatorSet;
        };
        Validator: {
            encode(message: _144.Validator, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _144.Validator;
            fromPartial(object: Partial<_144.Validator>): _144.Validator;
        };
        SimpleValidator: {
            encode(message: _144.SimpleValidator, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _144.SimpleValidator;
            fromPartial(object: Partial<_144.SimpleValidator>): _144.SimpleValidator;
        };
        blockIDFlagFromJSON(object: any): _143.BlockIDFlag;
        blockIDFlagToJSON(object: _143.BlockIDFlag): string;
        signedMsgTypeFromJSON(object: any): _143.SignedMsgType;
        signedMsgTypeToJSON(object: _143.SignedMsgType): string;
        BlockIDFlag: typeof _143.BlockIDFlag;
        BlockIDFlagSDKType: typeof _143.BlockIDFlag;
        SignedMsgType: typeof _143.SignedMsgType;
        SignedMsgTypeSDKType: typeof _143.SignedMsgType;
        PartSetHeader: {
            encode(message: _143.PartSetHeader, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _143.PartSetHeader;
            fromPartial(object: Partial<_143.PartSetHeader>): _143.PartSetHeader;
        };
        Part: {
            encode(message: _143.Part, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _143.Part;
            fromPartial(object: Partial<_143.Part>): _143.Part;
        };
        BlockID: {
            encode(message: _143.BlockID, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _143.BlockID;
            fromPartial(object: Partial<_143.BlockID>): _143.BlockID;
        };
        Header: {
            encode(message: _143.Header, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _143.Header;
            fromPartial(object: Partial<_143.Header>): _143.Header;
        };
        Data: {
            encode(message: _143.Data, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _143.Data;
            fromPartial(object: Partial<_143.Data>): _143.Data;
        };
        Vote: {
            encode(message: _143.Vote, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _143.Vote;
            fromPartial(object: Partial<_143.Vote>): _143.Vote;
        };
        Commit: {
            encode(message: _143.Commit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _143.Commit;
            fromPartial(object: Partial<_143.Commit>): _143.Commit;
        };
        CommitSig: {
            encode(message: _143.CommitSig, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _143.CommitSig;
            fromPartial(object: Partial<_143.CommitSig>): _143.CommitSig;
        };
        Proposal: {
            encode(message: _143.Proposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _143.Proposal;
            fromPartial(object: Partial<_143.Proposal>): _143.Proposal;
        };
        SignedHeader: {
            encode(message: _143.SignedHeader, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _143.SignedHeader;
            fromPartial(object: Partial<_143.SignedHeader>): _143.SignedHeader;
        };
        LightBlock: {
            encode(message: _143.LightBlock, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _143.LightBlock;
            fromPartial(object: Partial<_143.LightBlock>): _143.LightBlock;
        };
        BlockMeta: {
            encode(message: _143.BlockMeta, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _143.BlockMeta;
            fromPartial(object: Partial<_143.BlockMeta>): _143.BlockMeta;
        };
        TxProof: {
            encode(message: _143.TxProof, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _143.TxProof;
            fromPartial(object: Partial<_143.TxProof>): _143.TxProof;
        };
        ConsensusParams: {
            encode(message: _142.ConsensusParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _142.ConsensusParams;
            fromPartial(object: Partial<_142.ConsensusParams>): _142.ConsensusParams;
        };
        BlockParams: {
            encode(message: _142.BlockParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _142.BlockParams;
            fromPartial(object: Partial<_142.BlockParams>): _142.BlockParams;
        };
        EvidenceParams: {
            encode(message: _142.EvidenceParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _142.EvidenceParams;
            fromPartial(object: Partial<_142.EvidenceParams>): _142.EvidenceParams;
        };
        ValidatorParams: {
            encode(message: _142.ValidatorParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _142.ValidatorParams;
            fromPartial(object: Partial<_142.ValidatorParams>): _142.ValidatorParams;
        };
        VersionParams: {
            encode(message: _142.VersionParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _142.VersionParams;
            fromPartial(object: Partial<_142.VersionParams>): _142.VersionParams;
        };
        HashedParams: {
            encode(message: _142.HashedParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _142.HashedParams;
            fromPartial(object: Partial<_142.HashedParams>): _142.HashedParams;
        };
        Evidence: {
            encode(message: _141.Evidence, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _141.Evidence;
            fromPartial(object: Partial<_141.Evidence>): _141.Evidence;
        };
        DuplicateVoteEvidence: {
            encode(message: _141.DuplicateVoteEvidence, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _141.DuplicateVoteEvidence;
            fromPartial(object: Partial<_141.DuplicateVoteEvidence>): _141.DuplicateVoteEvidence;
        };
        LightClientAttackEvidence: {
            encode(message: _141.LightClientAttackEvidence, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _141.LightClientAttackEvidence;
            fromPartial(object: Partial<_141.LightClientAttackEvidence>): _141.LightClientAttackEvidence;
        };
        EvidenceList: {
            encode(message: _141.EvidenceList, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _141.EvidenceList;
            fromPartial(object: Partial<_141.EvidenceList>): _141.EvidenceList;
        };
        Block: {
            encode(message: _140.Block, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _140.Block;
            fromPartial(object: Partial<_140.Block>): _140.Block;
        };
    };
    const version: {
        App: {
            encode(message: _145.App, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _145.App;
            fromPartial(object: Partial<_145.App>): _145.App;
        };
        Consensus: {
            encode(message: _145.Consensus, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _145.Consensus;
            fromPartial(object: Partial<_145.Consensus>): _145.Consensus;
        };
    };
}
