import * as _171 from "./abci/types";
import * as _172 from "./crypto/keys";
import * as _173 from "./crypto/proof";
import * as _174 from "./libs/bits/types";
import * as _175 from "./p2p/types";
import * as _176 from "./types/block";
import * as _177 from "./types/evidence";
import * as _178 from "./types/params";
import * as _179 from "./types/types";
import * as _180 from "./types/validator";
import * as _181 from "./version/types";
export declare namespace tendermint {
    const abci: {
        checkTxTypeFromJSON(object: any): _171.CheckTxType;
        checkTxTypeToJSON(object: _171.CheckTxType): string;
        responseOfferSnapshot_ResultFromJSON(object: any): _171.ResponseOfferSnapshot_Result;
        responseOfferSnapshot_ResultToJSON(object: _171.ResponseOfferSnapshot_Result): string;
        responseApplySnapshotChunk_ResultFromJSON(object: any): _171.ResponseApplySnapshotChunk_Result;
        responseApplySnapshotChunk_ResultToJSON(object: _171.ResponseApplySnapshotChunk_Result): string;
        evidenceTypeFromJSON(object: any): _171.EvidenceType;
        evidenceTypeToJSON(object: _171.EvidenceType): string;
        CheckTxType: typeof _171.CheckTxType;
        CheckTxTypeSDKType: typeof _171.CheckTxType;
        ResponseOfferSnapshot_Result: typeof _171.ResponseOfferSnapshot_Result;
        ResponseOfferSnapshot_ResultSDKType: typeof _171.ResponseOfferSnapshot_Result;
        ResponseApplySnapshotChunk_Result: typeof _171.ResponseApplySnapshotChunk_Result;
        ResponseApplySnapshotChunk_ResultSDKType: typeof _171.ResponseApplySnapshotChunk_Result;
        EvidenceType: typeof _171.EvidenceType;
        EvidenceTypeSDKType: typeof _171.EvidenceType;
        Request: {
            encode(message: _171.Request, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _171.Request;
            fromPartial(object: Partial<_171.Request>): _171.Request;
        };
        RequestEcho: {
            encode(message: _171.RequestEcho, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _171.RequestEcho;
            fromPartial(object: Partial<_171.RequestEcho>): _171.RequestEcho;
        };
        RequestFlush: {
            encode(_: _171.RequestFlush, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(_: any): _171.RequestFlush;
            fromPartial(_: Partial<_171.RequestFlush>): _171.RequestFlush;
        };
        RequestInfo: {
            encode(message: _171.RequestInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _171.RequestInfo;
            fromPartial(object: Partial<_171.RequestInfo>): _171.RequestInfo;
        };
        RequestSetOption: {
            encode(message: _171.RequestSetOption, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _171.RequestSetOption;
            fromPartial(object: Partial<_171.RequestSetOption>): _171.RequestSetOption;
        };
        RequestInitChain: {
            encode(message: _171.RequestInitChain, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _171.RequestInitChain;
            fromPartial(object: Partial<_171.RequestInitChain>): _171.RequestInitChain;
        };
        RequestQuery: {
            encode(message: _171.RequestQuery, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _171.RequestQuery;
            fromPartial(object: Partial<_171.RequestQuery>): _171.RequestQuery;
        };
        RequestBeginBlock: {
            encode(message: _171.RequestBeginBlock, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _171.RequestBeginBlock;
            fromPartial(object: Partial<_171.RequestBeginBlock>): _171.RequestBeginBlock;
        };
        RequestCheckTx: {
            encode(message: _171.RequestCheckTx, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _171.RequestCheckTx;
            fromPartial(object: Partial<_171.RequestCheckTx>): _171.RequestCheckTx;
        };
        RequestDeliverTx: {
            encode(message: _171.RequestDeliverTx, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _171.RequestDeliverTx;
            fromPartial(object: Partial<_171.RequestDeliverTx>): _171.RequestDeliverTx;
        };
        RequestEndBlock: {
            encode(message: _171.RequestEndBlock, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _171.RequestEndBlock;
            fromPartial(object: Partial<_171.RequestEndBlock>): _171.RequestEndBlock;
        };
        RequestCommit: {
            encode(_: _171.RequestCommit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(_: any): _171.RequestCommit;
            fromPartial(_: Partial<_171.RequestCommit>): _171.RequestCommit;
        };
        RequestListSnapshots: {
            encode(_: _171.RequestListSnapshots, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(_: any): _171.RequestListSnapshots;
            fromPartial(_: Partial<_171.RequestListSnapshots>): _171.RequestListSnapshots;
        };
        RequestOfferSnapshot: {
            encode(message: _171.RequestOfferSnapshot, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _171.RequestOfferSnapshot;
            fromPartial(object: Partial<_171.RequestOfferSnapshot>): _171.RequestOfferSnapshot;
        };
        RequestLoadSnapshotChunk: {
            encode(message: _171.RequestLoadSnapshotChunk, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _171.RequestLoadSnapshotChunk;
            fromPartial(object: Partial<_171.RequestLoadSnapshotChunk>): _171.RequestLoadSnapshotChunk;
        };
        RequestApplySnapshotChunk: {
            encode(message: _171.RequestApplySnapshotChunk, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _171.RequestApplySnapshotChunk;
            fromPartial(object: Partial<_171.RequestApplySnapshotChunk>): _171.RequestApplySnapshotChunk;
        };
        Response: {
            encode(message: _171.Response, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _171.Response;
            fromPartial(object: Partial<_171.Response>): _171.Response;
        };
        ResponseException: {
            encode(message: _171.ResponseException, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _171.ResponseException;
            fromPartial(object: Partial<_171.ResponseException>): _171.ResponseException;
        };
        ResponseEcho: {
            encode(message: _171.ResponseEcho, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _171.ResponseEcho;
            fromPartial(object: Partial<_171.ResponseEcho>): _171.ResponseEcho;
        };
        ResponseFlush: {
            encode(_: _171.ResponseFlush, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(_: any): _171.ResponseFlush;
            fromPartial(_: Partial<_171.ResponseFlush>): _171.ResponseFlush;
        };
        ResponseInfo: {
            encode(message: _171.ResponseInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _171.ResponseInfo;
            fromPartial(object: Partial<_171.ResponseInfo>): _171.ResponseInfo;
        };
        ResponseSetOption: {
            encode(message: _171.ResponseSetOption, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _171.ResponseSetOption;
            fromPartial(object: Partial<_171.ResponseSetOption>): _171.ResponseSetOption;
        };
        ResponseInitChain: {
            encode(message: _171.ResponseInitChain, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _171.ResponseInitChain;
            fromPartial(object: Partial<_171.ResponseInitChain>): _171.ResponseInitChain;
        };
        ResponseQuery: {
            encode(message: _171.ResponseQuery, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _171.ResponseQuery;
            fromPartial(object: Partial<_171.ResponseQuery>): _171.ResponseQuery;
        };
        ResponseBeginBlock: {
            encode(message: _171.ResponseBeginBlock, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _171.ResponseBeginBlock;
            fromPartial(object: Partial<_171.ResponseBeginBlock>): _171.ResponseBeginBlock;
        };
        ResponseCheckTx: {
            encode(message: _171.ResponseCheckTx, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _171.ResponseCheckTx;
            fromPartial(object: Partial<_171.ResponseCheckTx>): _171.ResponseCheckTx;
        };
        ResponseDeliverTx: {
            encode(message: _171.ResponseDeliverTx, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _171.ResponseDeliverTx;
            fromPartial(object: Partial<_171.ResponseDeliverTx>): _171.ResponseDeliverTx;
        };
        ResponseEndBlock: {
            encode(message: _171.ResponseEndBlock, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _171.ResponseEndBlock;
            fromPartial(object: Partial<_171.ResponseEndBlock>): _171.ResponseEndBlock;
        };
        ResponseCommit: {
            encode(message: _171.ResponseCommit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _171.ResponseCommit;
            fromPartial(object: Partial<_171.ResponseCommit>): _171.ResponseCommit;
        };
        ResponseListSnapshots: {
            encode(message: _171.ResponseListSnapshots, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _171.ResponseListSnapshots;
            fromPartial(object: Partial<_171.ResponseListSnapshots>): _171.ResponseListSnapshots;
        };
        ResponseOfferSnapshot: {
            encode(message: _171.ResponseOfferSnapshot, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _171.ResponseOfferSnapshot;
            fromPartial(object: Partial<_171.ResponseOfferSnapshot>): _171.ResponseOfferSnapshot;
        };
        ResponseLoadSnapshotChunk: {
            encode(message: _171.ResponseLoadSnapshotChunk, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _171.ResponseLoadSnapshotChunk;
            fromPartial(object: Partial<_171.ResponseLoadSnapshotChunk>): _171.ResponseLoadSnapshotChunk;
        };
        ResponseApplySnapshotChunk: {
            encode(message: _171.ResponseApplySnapshotChunk, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _171.ResponseApplySnapshotChunk;
            fromPartial(object: Partial<_171.ResponseApplySnapshotChunk>): _171.ResponseApplySnapshotChunk;
        };
        ConsensusParams: {
            encode(message: _171.ConsensusParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _171.ConsensusParams;
            fromPartial(object: Partial<_171.ConsensusParams>): _171.ConsensusParams;
        };
        BlockParams: {
            encode(message: _171.BlockParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _171.BlockParams;
            fromPartial(object: Partial<_171.BlockParams>): _171.BlockParams;
        };
        LastCommitInfo: {
            encode(message: _171.LastCommitInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _171.LastCommitInfo;
            fromPartial(object: Partial<_171.LastCommitInfo>): _171.LastCommitInfo;
        };
        Event: {
            encode(message: _171.Event, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _171.Event;
            fromPartial(object: Partial<_171.Event>): _171.Event;
        };
        EventAttribute: {
            encode(message: _171.EventAttribute, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _171.EventAttribute;
            fromPartial(object: Partial<_171.EventAttribute>): _171.EventAttribute;
        };
        TxResult: {
            encode(message: _171.TxResult, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _171.TxResult;
            fromPartial(object: Partial<_171.TxResult>): _171.TxResult;
        };
        Validator: {
            encode(message: _171.Validator, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _171.Validator;
            fromPartial(object: Partial<_171.Validator>): _171.Validator;
        };
        ValidatorUpdate: {
            encode(message: _171.ValidatorUpdate, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _171.ValidatorUpdate;
            fromPartial(object: Partial<_171.ValidatorUpdate>): _171.ValidatorUpdate;
        };
        VoteInfo: {
            encode(message: _171.VoteInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _171.VoteInfo;
            fromPartial(object: Partial<_171.VoteInfo>): _171.VoteInfo;
        };
        Evidence: {
            encode(message: _171.Evidence, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _171.Evidence;
            fromPartial(object: Partial<_171.Evidence>): _171.Evidence;
        };
        Snapshot: {
            encode(message: _171.Snapshot, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _171.Snapshot;
            fromPartial(object: Partial<_171.Snapshot>): _171.Snapshot;
        };
    };
    const crypto: {
        Proof: {
            encode(message: _173.Proof, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _173.Proof;
            fromPartial(object: Partial<_173.Proof>): _173.Proof;
        };
        ValueOp: {
            encode(message: _173.ValueOp, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _173.ValueOp;
            fromPartial(object: Partial<_173.ValueOp>): _173.ValueOp;
        };
        DominoOp: {
            encode(message: _173.DominoOp, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _173.DominoOp;
            fromPartial(object: Partial<_173.DominoOp>): _173.DominoOp;
        };
        ProofOp: {
            encode(message: _173.ProofOp, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _173.ProofOp;
            fromPartial(object: Partial<_173.ProofOp>): _173.ProofOp;
        };
        ProofOps: {
            encode(message: _173.ProofOps, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _173.ProofOps;
            fromPartial(object: Partial<_173.ProofOps>): _173.ProofOps;
        };
        PublicKey: {
            encode(message: _172.PublicKey, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _172.PublicKey;
            fromPartial(object: Partial<_172.PublicKey>): _172.PublicKey;
        };
    };
    namespace libs {
        const bits: {
            BitArray: {
                encode(message: _174.BitArray, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _174.BitArray;
                fromPartial(object: Partial<_174.BitArray>): _174.BitArray;
            };
        };
    }
    const p2p: {
        NetAddress: {
            encode(message: _175.NetAddress, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _175.NetAddress;
            fromPartial(object: Partial<_175.NetAddress>): _175.NetAddress;
        };
        ProtocolVersion: {
            encode(message: _175.ProtocolVersion, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _175.ProtocolVersion;
            fromPartial(object: Partial<_175.ProtocolVersion>): _175.ProtocolVersion;
        };
        DefaultNodeInfo: {
            encode(message: _175.DefaultNodeInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _175.DefaultNodeInfo;
            fromPartial(object: Partial<_175.DefaultNodeInfo>): _175.DefaultNodeInfo;
        };
        DefaultNodeInfoOther: {
            encode(message: _175.DefaultNodeInfoOther, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _175.DefaultNodeInfoOther;
            fromPartial(object: Partial<_175.DefaultNodeInfoOther>): _175.DefaultNodeInfoOther;
        };
    };
    const types: {
        ValidatorSet: {
            encode(message: _180.ValidatorSet, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _180.ValidatorSet;
            fromPartial(object: Partial<_180.ValidatorSet>): _180.ValidatorSet;
        };
        Validator: {
            encode(message: _180.Validator, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _180.Validator;
            fromPartial(object: Partial<_180.Validator>): _180.Validator;
        };
        SimpleValidator: {
            encode(message: _180.SimpleValidator, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _180.SimpleValidator;
            fromPartial(object: Partial<_180.SimpleValidator>): _180.SimpleValidator;
        };
        blockIDFlagFromJSON(object: any): _179.BlockIDFlag;
        blockIDFlagToJSON(object: _179.BlockIDFlag): string;
        signedMsgTypeFromJSON(object: any): _179.SignedMsgType;
        signedMsgTypeToJSON(object: _179.SignedMsgType): string;
        BlockIDFlag: typeof _179.BlockIDFlag;
        BlockIDFlagSDKType: typeof _179.BlockIDFlag;
        SignedMsgType: typeof _179.SignedMsgType;
        SignedMsgTypeSDKType: typeof _179.SignedMsgType;
        PartSetHeader: {
            encode(message: _179.PartSetHeader, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _179.PartSetHeader;
            fromPartial(object: Partial<_179.PartSetHeader>): _179.PartSetHeader;
        };
        Part: {
            encode(message: _179.Part, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _179.Part;
            fromPartial(object: Partial<_179.Part>): _179.Part;
        };
        BlockID: {
            encode(message: _179.BlockID, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _179.BlockID;
            fromPartial(object: Partial<_179.BlockID>): _179.BlockID;
        };
        Header: {
            encode(message: _179.Header, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _179.Header;
            fromPartial(object: Partial<_179.Header>): _179.Header;
        };
        Data: {
            encode(message: _179.Data, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _179.Data;
            fromPartial(object: Partial<_179.Data>): _179.Data;
        };
        Vote: {
            encode(message: _179.Vote, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _179.Vote;
            fromPartial(object: Partial<_179.Vote>): _179.Vote;
        };
        Commit: {
            encode(message: _179.Commit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _179.Commit;
            fromPartial(object: Partial<_179.Commit>): _179.Commit;
        };
        CommitSig: {
            encode(message: _179.CommitSig, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _179.CommitSig;
            fromPartial(object: Partial<_179.CommitSig>): _179.CommitSig;
        };
        Proposal: {
            encode(message: _179.Proposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _179.Proposal;
            fromPartial(object: Partial<_179.Proposal>): _179.Proposal;
        };
        SignedHeader: {
            encode(message: _179.SignedHeader, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _179.SignedHeader;
            fromPartial(object: Partial<_179.SignedHeader>): _179.SignedHeader;
        };
        LightBlock: {
            encode(message: _179.LightBlock, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _179.LightBlock;
            fromPartial(object: Partial<_179.LightBlock>): _179.LightBlock;
        };
        BlockMeta: {
            encode(message: _179.BlockMeta, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _179.BlockMeta;
            fromPartial(object: Partial<_179.BlockMeta>): _179.BlockMeta;
        };
        TxProof: {
            encode(message: _179.TxProof, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _179.TxProof;
            fromPartial(object: Partial<_179.TxProof>): _179.TxProof;
        };
        ConsensusParams: {
            encode(message: _178.ConsensusParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _178.ConsensusParams;
            fromPartial(object: Partial<_178.ConsensusParams>): _178.ConsensusParams;
        };
        BlockParams: {
            encode(message: _178.BlockParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _178.BlockParams;
            fromPartial(object: Partial<_178.BlockParams>): _178.BlockParams;
        };
        EvidenceParams: {
            encode(message: _178.EvidenceParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _178.EvidenceParams;
            fromPartial(object: Partial<_178.EvidenceParams>): _178.EvidenceParams;
        };
        ValidatorParams: {
            encode(message: _178.ValidatorParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _178.ValidatorParams;
            fromPartial(object: Partial<_178.ValidatorParams>): _178.ValidatorParams;
        };
        VersionParams: {
            encode(message: _178.VersionParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _178.VersionParams;
            fromPartial(object: Partial<_178.VersionParams>): _178.VersionParams;
        };
        HashedParams: {
            encode(message: _178.HashedParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _178.HashedParams;
            fromPartial(object: Partial<_178.HashedParams>): _178.HashedParams;
        };
        Evidence: {
            encode(message: _177.Evidence, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _177.Evidence;
            fromPartial(object: Partial<_177.Evidence>): _177.Evidence;
        };
        DuplicateVoteEvidence: {
            encode(message: _177.DuplicateVoteEvidence, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _177.DuplicateVoteEvidence;
            fromPartial(object: Partial<_177.DuplicateVoteEvidence>): _177.DuplicateVoteEvidence;
        };
        LightClientAttackEvidence: {
            encode(message: _177.LightClientAttackEvidence, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _177.LightClientAttackEvidence;
            fromPartial(object: Partial<_177.LightClientAttackEvidence>): _177.LightClientAttackEvidence;
        };
        EvidenceList: {
            encode(message: _177.EvidenceList, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _177.EvidenceList;
            fromPartial(object: Partial<_177.EvidenceList>): _177.EvidenceList;
        };
        Block: {
            encode(message: _176.Block, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _176.Block;
            fromPartial(object: Partial<_176.Block>): _176.Block;
        };
    };
    const version: {
        App: {
            encode(message: _181.App, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _181.App;
            fromPartial(object: Partial<_181.App>): _181.App;
        };
        Consensus: {
            encode(message: _181.Consensus, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _181.Consensus;
            fromPartial(object: Partial<_181.Consensus>): _181.Consensus;
        };
    };
}
