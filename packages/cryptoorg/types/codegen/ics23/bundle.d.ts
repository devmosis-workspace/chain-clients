import * as _169 from "../proofs";
export declare const ics23: {
    hashOpFromJSON(object: any): _169.HashOp;
    hashOpToJSON(object: _169.HashOp): string;
    lengthOpFromJSON(object: any): _169.LengthOp;
    lengthOpToJSON(object: _169.LengthOp): string;
    HashOp: typeof _169.HashOp;
    HashOpSDKType: typeof _169.HashOp;
    LengthOp: typeof _169.LengthOp;
    LengthOpSDKType: typeof _169.LengthOp;
    ExistenceProof: {
        encode(message: _169.ExistenceProof, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        fromJSON(object: any): _169.ExistenceProof;
        fromPartial(object: Partial<_169.ExistenceProof>): _169.ExistenceProof;
    };
    NonExistenceProof: {
        encode(message: _169.NonExistenceProof, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        fromJSON(object: any): _169.NonExistenceProof;
        fromPartial(object: Partial<_169.NonExistenceProof>): _169.NonExistenceProof;
    };
    CommitmentProof: {
        encode(message: _169.CommitmentProof, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        fromJSON(object: any): _169.CommitmentProof;
        fromPartial(object: Partial<_169.CommitmentProof>): _169.CommitmentProof;
    };
    LeafOp: {
        encode(message: _169.LeafOp, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        fromJSON(object: any): _169.LeafOp;
        fromPartial(object: Partial<_169.LeafOp>): _169.LeafOp;
    };
    InnerOp: {
        encode(message: _169.InnerOp, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        fromJSON(object: any): _169.InnerOp;
        fromPartial(object: Partial<_169.InnerOp>): _169.InnerOp;
    };
    ProofSpec: {
        encode(message: _169.ProofSpec, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        fromJSON(object: any): _169.ProofSpec;
        fromPartial(object: Partial<_169.ProofSpec>): _169.ProofSpec;
    };
    InnerSpec: {
        encode(message: _169.InnerSpec, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        fromJSON(object: any): _169.InnerSpec;
        fromPartial(object: Partial<_169.InnerSpec>): _169.InnerSpec;
    };
    BatchProof: {
        encode(message: _169.BatchProof, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        fromJSON(object: any): _169.BatchProof;
        fromPartial(object: Partial<_169.BatchProof>): _169.BatchProof;
    };
    BatchEntry: {
        encode(message: _169.BatchEntry, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        fromJSON(object: any): _169.BatchEntry;
        fromPartial(object: Partial<_169.BatchEntry>): _169.BatchEntry;
    };
    CompressedBatchProof: {
        encode(message: _169.CompressedBatchProof, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        fromJSON(object: any): _169.CompressedBatchProof;
        fromPartial(object: Partial<_169.CompressedBatchProof>): _169.CompressedBatchProof;
    };
    CompressedBatchEntry: {
        encode(message: _169.CompressedBatchEntry, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        fromJSON(object: any): _169.CompressedBatchEntry;
        fromPartial(object: Partial<_169.CompressedBatchEntry>): _169.CompressedBatchEntry;
    };
    CompressedExistenceProof: {
        encode(message: _169.CompressedExistenceProof, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        fromJSON(object: any): _169.CompressedExistenceProof;
        fromPartial(object: Partial<_169.CompressedExistenceProof>): _169.CompressedExistenceProof;
    };
    CompressedNonExistenceProof: {
        encode(message: _169.CompressedNonExistenceProof, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        fromJSON(object: any): _169.CompressedNonExistenceProof;
        fromPartial(object: Partial<_169.CompressedNonExistenceProof>): _169.CompressedNonExistenceProof;
    };
};
