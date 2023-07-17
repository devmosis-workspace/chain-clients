import * as _85 from "../confio/proofs";
export declare const ics23: {
    hashOpFromJSON(object: any): _85.HashOp;
    hashOpToJSON(object: _85.HashOp): string;
    lengthOpFromJSON(object: any): _85.LengthOp;
    lengthOpToJSON(object: _85.LengthOp): string;
    HashOp: typeof _85.HashOp;
    HashOpSDKType: typeof _85.HashOp;
    LengthOp: typeof _85.LengthOp;
    LengthOpSDKType: typeof _85.LengthOp;
    ExistenceProof: {
        encode(message: _85.ExistenceProof, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        fromJSON(object: any): _85.ExistenceProof;
        fromPartial(object: Partial<_85.ExistenceProof>): _85.ExistenceProof;
    };
    NonExistenceProof: {
        encode(message: _85.NonExistenceProof, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        fromJSON(object: any): _85.NonExistenceProof;
        fromPartial(object: Partial<_85.NonExistenceProof>): _85.NonExistenceProof;
    };
    CommitmentProof: {
        encode(message: _85.CommitmentProof, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        fromJSON(object: any): _85.CommitmentProof;
        fromPartial(object: Partial<_85.CommitmentProof>): _85.CommitmentProof;
    };
    LeafOp: {
        encode(message: _85.LeafOp, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        fromJSON(object: any): _85.LeafOp;
        fromPartial(object: Partial<_85.LeafOp>): _85.LeafOp;
    };
    InnerOp: {
        encode(message: _85.InnerOp, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        fromJSON(object: any): _85.InnerOp;
        fromPartial(object: Partial<_85.InnerOp>): _85.InnerOp;
    };
    ProofSpec: {
        encode(message: _85.ProofSpec, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        fromJSON(object: any): _85.ProofSpec;
        fromPartial(object: Partial<_85.ProofSpec>): _85.ProofSpec;
    };
    InnerSpec: {
        encode(message: _85.InnerSpec, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        fromJSON(object: any): _85.InnerSpec;
        fromPartial(object: Partial<_85.InnerSpec>): _85.InnerSpec;
    };
    BatchProof: {
        encode(message: _85.BatchProof, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        fromJSON(object: any): _85.BatchProof;
        fromPartial(object: Partial<_85.BatchProof>): _85.BatchProof;
    };
    BatchEntry: {
        encode(message: _85.BatchEntry, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        fromJSON(object: any): _85.BatchEntry;
        fromPartial(object: Partial<_85.BatchEntry>): _85.BatchEntry;
    };
    CompressedBatchProof: {
        encode(message: _85.CompressedBatchProof, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        fromJSON(object: any): _85.CompressedBatchProof;
        fromPartial(object: Partial<_85.CompressedBatchProof>): _85.CompressedBatchProof;
    };
    CompressedBatchEntry: {
        encode(message: _85.CompressedBatchEntry, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        fromJSON(object: any): _85.CompressedBatchEntry;
        fromPartial(object: Partial<_85.CompressedBatchEntry>): _85.CompressedBatchEntry;
    };
    CompressedExistenceProof: {
        encode(message: _85.CompressedExistenceProof, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        fromJSON(object: any): _85.CompressedExistenceProof;
        fromPartial(object: Partial<_85.CompressedExistenceProof>): _85.CompressedExistenceProof;
    };
    CompressedNonExistenceProof: {
        encode(message: _85.CompressedNonExistenceProof, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        fromJSON(object: any): _85.CompressedNonExistenceProof;
        fromPartial(object: Partial<_85.CompressedNonExistenceProof>): _85.CompressedNonExistenceProof;
    };
};
