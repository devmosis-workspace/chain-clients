import * as _21 from "../confio/proofs";
export declare const ics23: {
    hashOpFromJSON(object: any): _21.HashOp;
    hashOpToJSON(object: _21.HashOp): string;
    lengthOpFromJSON(object: any): _21.LengthOp;
    lengthOpToJSON(object: _21.LengthOp): string;
    HashOp: typeof _21.HashOp;
    HashOpSDKType: typeof _21.HashOp;
    LengthOp: typeof _21.LengthOp;
    LengthOpSDKType: typeof _21.LengthOp;
    ExistenceProof: {
        encode(message: _21.ExistenceProof, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        fromJSON(object: any): _21.ExistenceProof;
        fromPartial(object: Partial<_21.ExistenceProof>): _21.ExistenceProof;
    };
    NonExistenceProof: {
        encode(message: _21.NonExistenceProof, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        fromJSON(object: any): _21.NonExistenceProof;
        fromPartial(object: Partial<_21.NonExistenceProof>): _21.NonExistenceProof;
    };
    CommitmentProof: {
        encode(message: _21.CommitmentProof, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        fromJSON(object: any): _21.CommitmentProof;
        fromPartial(object: Partial<_21.CommitmentProof>): _21.CommitmentProof;
    };
    LeafOp: {
        encode(message: _21.LeafOp, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        fromJSON(object: any): _21.LeafOp;
        fromPartial(object: Partial<_21.LeafOp>): _21.LeafOp;
    };
    InnerOp: {
        encode(message: _21.InnerOp, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        fromJSON(object: any): _21.InnerOp;
        fromPartial(object: Partial<_21.InnerOp>): _21.InnerOp;
    };
    ProofSpec: {
        encode(message: _21.ProofSpec, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        fromJSON(object: any): _21.ProofSpec;
        fromPartial(object: Partial<_21.ProofSpec>): _21.ProofSpec;
    };
    InnerSpec: {
        encode(message: _21.InnerSpec, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        fromJSON(object: any): _21.InnerSpec;
        fromPartial(object: Partial<_21.InnerSpec>): _21.InnerSpec;
    };
    BatchProof: {
        encode(message: _21.BatchProof, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        fromJSON(object: any): _21.BatchProof;
        fromPartial(object: Partial<_21.BatchProof>): _21.BatchProof;
    };
    BatchEntry: {
        encode(message: _21.BatchEntry, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        fromJSON(object: any): _21.BatchEntry;
        fromPartial(object: Partial<_21.BatchEntry>): _21.BatchEntry;
    };
    CompressedBatchProof: {
        encode(message: _21.CompressedBatchProof, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        fromJSON(object: any): _21.CompressedBatchProof;
        fromPartial(object: Partial<_21.CompressedBatchProof>): _21.CompressedBatchProof;
    };
    CompressedBatchEntry: {
        encode(message: _21.CompressedBatchEntry, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        fromJSON(object: any): _21.CompressedBatchEntry;
        fromPartial(object: Partial<_21.CompressedBatchEntry>): _21.CompressedBatchEntry;
    };
    CompressedExistenceProof: {
        encode(message: _21.CompressedExistenceProof, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        fromJSON(object: any): _21.CompressedExistenceProof;
        fromPartial(object: Partial<_21.CompressedExistenceProof>): _21.CompressedExistenceProof;
    };
    CompressedNonExistenceProof: {
        encode(message: _21.CompressedNonExistenceProof, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        fromJSON(object: any): _21.CompressedNonExistenceProof;
        fromPartial(object: Partial<_21.CompressedNonExistenceProof>): _21.CompressedNonExistenceProof;
    };
};
