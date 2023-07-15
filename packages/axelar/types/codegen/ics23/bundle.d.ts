import * as _170 from "../proofs";
export declare const ics23: {
    hashOpFromJSON(object: any): _170.HashOp;
    hashOpToJSON(object: _170.HashOp): string;
    lengthOpFromJSON(object: any): _170.LengthOp;
    lengthOpToJSON(object: _170.LengthOp): string;
    HashOp: typeof _170.HashOp;
    HashOpSDKType: typeof _170.HashOp;
    LengthOp: typeof _170.LengthOp;
    LengthOpSDKType: typeof _170.LengthOp;
    ExistenceProof: {
        encode(message: _170.ExistenceProof, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        fromJSON(object: any): _170.ExistenceProof;
        fromPartial(object: Partial<_170.ExistenceProof>): _170.ExistenceProof;
    };
    NonExistenceProof: {
        encode(message: _170.NonExistenceProof, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        fromJSON(object: any): _170.NonExistenceProof;
        fromPartial(object: Partial<_170.NonExistenceProof>): _170.NonExistenceProof;
    };
    CommitmentProof: {
        encode(message: _170.CommitmentProof, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        fromJSON(object: any): _170.CommitmentProof;
        fromPartial(object: Partial<_170.CommitmentProof>): _170.CommitmentProof;
    };
    LeafOp: {
        encode(message: _170.LeafOp, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        fromJSON(object: any): _170.LeafOp;
        fromPartial(object: Partial<_170.LeafOp>): _170.LeafOp;
    };
    InnerOp: {
        encode(message: _170.InnerOp, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        fromJSON(object: any): _170.InnerOp;
        fromPartial(object: Partial<_170.InnerOp>): _170.InnerOp;
    };
    ProofSpec: {
        encode(message: _170.ProofSpec, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        fromJSON(object: any): _170.ProofSpec;
        fromPartial(object: Partial<_170.ProofSpec>): _170.ProofSpec;
    };
    InnerSpec: {
        encode(message: _170.InnerSpec, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        fromJSON(object: any): _170.InnerSpec;
        fromPartial(object: Partial<_170.InnerSpec>): _170.InnerSpec;
    };
    BatchProof: {
        encode(message: _170.BatchProof, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        fromJSON(object: any): _170.BatchProof;
        fromPartial(object: Partial<_170.BatchProof>): _170.BatchProof;
    };
    BatchEntry: {
        encode(message: _170.BatchEntry, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        fromJSON(object: any): _170.BatchEntry;
        fromPartial(object: Partial<_170.BatchEntry>): _170.BatchEntry;
    };
    CompressedBatchProof: {
        encode(message: _170.CompressedBatchProof, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        fromJSON(object: any): _170.CompressedBatchProof;
        fromPartial(object: Partial<_170.CompressedBatchProof>): _170.CompressedBatchProof;
    };
    CompressedBatchEntry: {
        encode(message: _170.CompressedBatchEntry, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        fromJSON(object: any): _170.CompressedBatchEntry;
        fromPartial(object: Partial<_170.CompressedBatchEntry>): _170.CompressedBatchEntry;
    };
    CompressedExistenceProof: {
        encode(message: _170.CompressedExistenceProof, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        fromJSON(object: any): _170.CompressedExistenceProof;
        fromPartial(object: Partial<_170.CompressedExistenceProof>): _170.CompressedExistenceProof;
    };
    CompressedNonExistenceProof: {
        encode(message: _170.CompressedNonExistenceProof, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        fromJSON(object: any): _170.CompressedNonExistenceProof;
        fromPartial(object: Partial<_170.CompressedNonExistenceProof>): _170.CompressedNonExistenceProof;
    };
};
