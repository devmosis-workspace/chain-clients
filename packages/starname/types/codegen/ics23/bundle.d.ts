import * as _91 from "../confio/proofs";
export declare const ics23: {
    hashOpFromJSON(object: any): _91.HashOp;
    hashOpToJSON(object: _91.HashOp): string;
    lengthOpFromJSON(object: any): _91.LengthOp;
    lengthOpToJSON(object: _91.LengthOp): string;
    HashOp: typeof _91.HashOp;
    HashOpSDKType: typeof _91.HashOp;
    LengthOp: typeof _91.LengthOp;
    LengthOpSDKType: typeof _91.LengthOp;
    ExistenceProof: {
        encode(message: _91.ExistenceProof, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        fromJSON(object: any): _91.ExistenceProof;
        fromPartial(object: Partial<_91.ExistenceProof>): _91.ExistenceProof;
    };
    NonExistenceProof: {
        encode(message: _91.NonExistenceProof, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        fromJSON(object: any): _91.NonExistenceProof;
        fromPartial(object: Partial<_91.NonExistenceProof>): _91.NonExistenceProof;
    };
    CommitmentProof: {
        encode(message: _91.CommitmentProof, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        fromJSON(object: any): _91.CommitmentProof;
        fromPartial(object: Partial<_91.CommitmentProof>): _91.CommitmentProof;
    };
    LeafOp: {
        encode(message: _91.LeafOp, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        fromJSON(object: any): _91.LeafOp;
        fromPartial(object: Partial<_91.LeafOp>): _91.LeafOp;
    };
    InnerOp: {
        encode(message: _91.InnerOp, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        fromJSON(object: any): _91.InnerOp;
        fromPartial(object: Partial<_91.InnerOp>): _91.InnerOp;
    };
    ProofSpec: {
        encode(message: _91.ProofSpec, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        fromJSON(object: any): _91.ProofSpec;
        fromPartial(object: Partial<_91.ProofSpec>): _91.ProofSpec;
    };
    InnerSpec: {
        encode(message: _91.InnerSpec, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        fromJSON(object: any): _91.InnerSpec;
        fromPartial(object: Partial<_91.InnerSpec>): _91.InnerSpec;
    };
    BatchProof: {
        encode(message: _91.BatchProof, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        fromJSON(object: any): _91.BatchProof;
        fromPartial(object: Partial<_91.BatchProof>): _91.BatchProof;
    };
    BatchEntry: {
        encode(message: _91.BatchEntry, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        fromJSON(object: any): _91.BatchEntry;
        fromPartial(object: Partial<_91.BatchEntry>): _91.BatchEntry;
    };
    CompressedBatchProof: {
        encode(message: _91.CompressedBatchProof, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        fromJSON(object: any): _91.CompressedBatchProof;
        fromPartial(object: Partial<_91.CompressedBatchProof>): _91.CompressedBatchProof;
    };
    CompressedBatchEntry: {
        encode(message: _91.CompressedBatchEntry, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        fromJSON(object: any): _91.CompressedBatchEntry;
        fromPartial(object: Partial<_91.CompressedBatchEntry>): _91.CompressedBatchEntry;
    };
    CompressedExistenceProof: {
        encode(message: _91.CompressedExistenceProof, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        fromJSON(object: any): _91.CompressedExistenceProof;
        fromPartial(object: Partial<_91.CompressedExistenceProof>): _91.CompressedExistenceProof;
    };
    CompressedNonExistenceProof: {
        encode(message: _91.CompressedNonExistenceProof, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        fromJSON(object: any): _91.CompressedNonExistenceProof;
        fromPartial(object: Partial<_91.CompressedNonExistenceProof>): _91.CompressedNonExistenceProof;
    };
};
