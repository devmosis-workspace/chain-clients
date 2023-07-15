import * as _95 from "../proofs";
export declare const ics23: {
    hashOpFromJSON(object: any): _95.HashOp;
    hashOpToJSON(object: _95.HashOp): string;
    lengthOpFromJSON(object: any): _95.LengthOp;
    lengthOpToJSON(object: _95.LengthOp): string;
    HashOp: typeof _95.HashOp;
    HashOpSDKType: typeof _95.HashOp;
    LengthOp: typeof _95.LengthOp;
    LengthOpSDKType: typeof _95.LengthOp;
    ExistenceProof: {
        encode(message: _95.ExistenceProof, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        fromJSON(object: any): _95.ExistenceProof;
        fromPartial(object: Partial<_95.ExistenceProof>): _95.ExistenceProof;
    };
    NonExistenceProof: {
        encode(message: _95.NonExistenceProof, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        fromJSON(object: any): _95.NonExistenceProof;
        fromPartial(object: Partial<_95.NonExistenceProof>): _95.NonExistenceProof;
    };
    CommitmentProof: {
        encode(message: _95.CommitmentProof, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        fromJSON(object: any): _95.CommitmentProof;
        fromPartial(object: Partial<_95.CommitmentProof>): _95.CommitmentProof;
    };
    LeafOp: {
        encode(message: _95.LeafOp, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        fromJSON(object: any): _95.LeafOp;
        fromPartial(object: Partial<_95.LeafOp>): _95.LeafOp;
    };
    InnerOp: {
        encode(message: _95.InnerOp, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        fromJSON(object: any): _95.InnerOp;
        fromPartial(object: Partial<_95.InnerOp>): _95.InnerOp;
    };
    ProofSpec: {
        encode(message: _95.ProofSpec, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        fromJSON(object: any): _95.ProofSpec;
        fromPartial(object: Partial<_95.ProofSpec>): _95.ProofSpec;
    };
    InnerSpec: {
        encode(message: _95.InnerSpec, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        fromJSON(object: any): _95.InnerSpec;
        fromPartial(object: Partial<_95.InnerSpec>): _95.InnerSpec;
    };
    BatchProof: {
        encode(message: _95.BatchProof, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        fromJSON(object: any): _95.BatchProof;
        fromPartial(object: Partial<_95.BatchProof>): _95.BatchProof;
    };
    BatchEntry: {
        encode(message: _95.BatchEntry, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        fromJSON(object: any): _95.BatchEntry;
        fromPartial(object: Partial<_95.BatchEntry>): _95.BatchEntry;
    };
    CompressedBatchProof: {
        encode(message: _95.CompressedBatchProof, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        fromJSON(object: any): _95.CompressedBatchProof;
        fromPartial(object: Partial<_95.CompressedBatchProof>): _95.CompressedBatchProof;
    };
    CompressedBatchEntry: {
        encode(message: _95.CompressedBatchEntry, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        fromJSON(object: any): _95.CompressedBatchEntry;
        fromPartial(object: Partial<_95.CompressedBatchEntry>): _95.CompressedBatchEntry;
    };
    CompressedExistenceProof: {
        encode(message: _95.CompressedExistenceProof, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        fromJSON(object: any): _95.CompressedExistenceProof;
        fromPartial(object: Partial<_95.CompressedExistenceProof>): _95.CompressedExistenceProof;
    };
    CompressedNonExistenceProof: {
        encode(message: _95.CompressedNonExistenceProof, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        fromJSON(object: any): _95.CompressedNonExistenceProof;
        fromPartial(object: Partial<_95.CompressedNonExistenceProof>): _95.CompressedNonExistenceProof;
    };
};
