import * as _145 from "../proofs";
export declare const ics23: {
    hashOpFromJSON(object: any): _145.HashOp;
    hashOpToJSON(object: _145.HashOp): string;
    lengthOpFromJSON(object: any): _145.LengthOp;
    lengthOpToJSON(object: _145.LengthOp): string;
    HashOp: typeof _145.HashOp;
    HashOpSDKType: typeof _145.HashOp;
    LengthOp: typeof _145.LengthOp;
    LengthOpSDKType: typeof _145.LengthOp;
    ExistenceProof: {
        encode(message: _145.ExistenceProof, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        fromJSON(object: any): _145.ExistenceProof;
        fromPartial(object: Partial<_145.ExistenceProof>): _145.ExistenceProof;
    };
    NonExistenceProof: {
        encode(message: _145.NonExistenceProof, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        fromJSON(object: any): _145.NonExistenceProof;
        fromPartial(object: Partial<_145.NonExistenceProof>): _145.NonExistenceProof;
    };
    CommitmentProof: {
        encode(message: _145.CommitmentProof, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        fromJSON(object: any): _145.CommitmentProof;
        fromPartial(object: Partial<_145.CommitmentProof>): _145.CommitmentProof;
    };
    LeafOp: {
        encode(message: _145.LeafOp, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        fromJSON(object: any): _145.LeafOp;
        fromPartial(object: Partial<_145.LeafOp>): _145.LeafOp;
    };
    InnerOp: {
        encode(message: _145.InnerOp, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        fromJSON(object: any): _145.InnerOp;
        fromPartial(object: Partial<_145.InnerOp>): _145.InnerOp;
    };
    ProofSpec: {
        encode(message: _145.ProofSpec, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        fromJSON(object: any): _145.ProofSpec;
        fromPartial(object: Partial<_145.ProofSpec>): _145.ProofSpec;
    };
    InnerSpec: {
        encode(message: _145.InnerSpec, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        fromJSON(object: any): _145.InnerSpec;
        fromPartial(object: Partial<_145.InnerSpec>): _145.InnerSpec;
    };
    BatchProof: {
        encode(message: _145.BatchProof, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        fromJSON(object: any): _145.BatchProof;
        fromPartial(object: Partial<_145.BatchProof>): _145.BatchProof;
    };
    BatchEntry: {
        encode(message: _145.BatchEntry, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        fromJSON(object: any): _145.BatchEntry;
        fromPartial(object: Partial<_145.BatchEntry>): _145.BatchEntry;
    };
    CompressedBatchProof: {
        encode(message: _145.CompressedBatchProof, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        fromJSON(object: any): _145.CompressedBatchProof;
        fromPartial(object: Partial<_145.CompressedBatchProof>): _145.CompressedBatchProof;
    };
    CompressedBatchEntry: {
        encode(message: _145.CompressedBatchEntry, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        fromJSON(object: any): _145.CompressedBatchEntry;
        fromPartial(object: Partial<_145.CompressedBatchEntry>): _145.CompressedBatchEntry;
    };
    CompressedExistenceProof: {
        encode(message: _145.CompressedExistenceProof, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        fromJSON(object: any): _145.CompressedExistenceProof;
        fromPartial(object: Partial<_145.CompressedExistenceProof>): _145.CompressedExistenceProof;
    };
    CompressedNonExistenceProof: {
        encode(message: _145.CompressedNonExistenceProof, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        fromJSON(object: any): _145.CompressedNonExistenceProof;
        fromPartial(object: Partial<_145.CompressedNonExistenceProof>): _145.CompressedNonExistenceProof;
    };
};
