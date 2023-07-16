import * as _79 from "../confio/proofs";
export declare const ics23: {
    hashOpFromJSON(object: any): _79.HashOp;
    hashOpToJSON(object: _79.HashOp): string;
    lengthOpFromJSON(object: any): _79.LengthOp;
    lengthOpToJSON(object: _79.LengthOp): string;
    HashOp: typeof _79.HashOp;
    HashOpSDKType: typeof _79.HashOp;
    LengthOp: typeof _79.LengthOp;
    LengthOpSDKType: typeof _79.LengthOp;
    ExistenceProof: {
        encode(message: _79.ExistenceProof, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        fromJSON(object: any): _79.ExistenceProof;
        fromPartial(object: Partial<_79.ExistenceProof>): _79.ExistenceProof;
    };
    NonExistenceProof: {
        encode(message: _79.NonExistenceProof, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        fromJSON(object: any): _79.NonExistenceProof;
        fromPartial(object: Partial<_79.NonExistenceProof>): _79.NonExistenceProof;
    };
    CommitmentProof: {
        encode(message: _79.CommitmentProof, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        fromJSON(object: any): _79.CommitmentProof;
        fromPartial(object: Partial<_79.CommitmentProof>): _79.CommitmentProof;
    };
    LeafOp: {
        encode(message: _79.LeafOp, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        fromJSON(object: any): _79.LeafOp;
        fromPartial(object: Partial<_79.LeafOp>): _79.LeafOp;
    };
    InnerOp: {
        encode(message: _79.InnerOp, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        fromJSON(object: any): _79.InnerOp;
        fromPartial(object: Partial<_79.InnerOp>): _79.InnerOp;
    };
    ProofSpec: {
        encode(message: _79.ProofSpec, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        fromJSON(object: any): _79.ProofSpec;
        fromPartial(object: Partial<_79.ProofSpec>): _79.ProofSpec;
    };
    InnerSpec: {
        encode(message: _79.InnerSpec, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        fromJSON(object: any): _79.InnerSpec;
        fromPartial(object: Partial<_79.InnerSpec>): _79.InnerSpec;
    };
    BatchProof: {
        encode(message: _79.BatchProof, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        fromJSON(object: any): _79.BatchProof;
        fromPartial(object: Partial<_79.BatchProof>): _79.BatchProof;
    };
    BatchEntry: {
        encode(message: _79.BatchEntry, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        fromJSON(object: any): _79.BatchEntry;
        fromPartial(object: Partial<_79.BatchEntry>): _79.BatchEntry;
    };
    CompressedBatchProof: {
        encode(message: _79.CompressedBatchProof, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        fromJSON(object: any): _79.CompressedBatchProof;
        fromPartial(object: Partial<_79.CompressedBatchProof>): _79.CompressedBatchProof;
    };
    CompressedBatchEntry: {
        encode(message: _79.CompressedBatchEntry, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        fromJSON(object: any): _79.CompressedBatchEntry;
        fromPartial(object: Partial<_79.CompressedBatchEntry>): _79.CompressedBatchEntry;
    };
    CompressedExistenceProof: {
        encode(message: _79.CompressedExistenceProof, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        fromJSON(object: any): _79.CompressedExistenceProof;
        fromPartial(object: Partial<_79.CompressedExistenceProof>): _79.CompressedExistenceProof;
    };
    CompressedNonExistenceProof: {
        encode(message: _79.CompressedNonExistenceProof, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        fromJSON(object: any): _79.CompressedNonExistenceProof;
        fromPartial(object: Partial<_79.CompressedNonExistenceProof>): _79.CompressedNonExistenceProof;
    };
};
