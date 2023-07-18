import * as _81 from "../confio/proofs";
export declare const ics23: {
    hashOpFromJSON(object: any): _81.HashOp;
    hashOpToJSON(object: _81.HashOp): string;
    lengthOpFromJSON(object: any): _81.LengthOp;
    lengthOpToJSON(object: _81.LengthOp): string;
    HashOp: typeof _81.HashOp;
    HashOpSDKType: typeof _81.HashOp;
    LengthOp: typeof _81.LengthOp;
    LengthOpSDKType: typeof _81.LengthOp;
    ExistenceProof: {
        encode(message: _81.ExistenceProof, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        fromJSON(object: any): _81.ExistenceProof;
        fromPartial(object: Partial<_81.ExistenceProof>): _81.ExistenceProof;
    };
    NonExistenceProof: {
        encode(message: _81.NonExistenceProof, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        fromJSON(object: any): _81.NonExistenceProof;
        fromPartial(object: Partial<_81.NonExistenceProof>): _81.NonExistenceProof;
    };
    CommitmentProof: {
        encode(message: _81.CommitmentProof, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        fromJSON(object: any): _81.CommitmentProof;
        fromPartial(object: Partial<_81.CommitmentProof>): _81.CommitmentProof;
    };
    LeafOp: {
        encode(message: _81.LeafOp, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        fromJSON(object: any): _81.LeafOp;
        fromPartial(object: Partial<_81.LeafOp>): _81.LeafOp;
    };
    InnerOp: {
        encode(message: _81.InnerOp, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        fromJSON(object: any): _81.InnerOp;
        fromPartial(object: Partial<_81.InnerOp>): _81.InnerOp;
    };
    ProofSpec: {
        encode(message: _81.ProofSpec, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        fromJSON(object: any): _81.ProofSpec;
        fromPartial(object: Partial<_81.ProofSpec>): _81.ProofSpec;
    };
    InnerSpec: {
        encode(message: _81.InnerSpec, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        fromJSON(object: any): _81.InnerSpec;
        fromPartial(object: Partial<_81.InnerSpec>): _81.InnerSpec;
    };
    BatchProof: {
        encode(message: _81.BatchProof, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        fromJSON(object: any): _81.BatchProof;
        fromPartial(object: Partial<_81.BatchProof>): _81.BatchProof;
    };
    BatchEntry: {
        encode(message: _81.BatchEntry, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        fromJSON(object: any): _81.BatchEntry;
        fromPartial(object: Partial<_81.BatchEntry>): _81.BatchEntry;
    };
    CompressedBatchProof: {
        encode(message: _81.CompressedBatchProof, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        fromJSON(object: any): _81.CompressedBatchProof;
        fromPartial(object: Partial<_81.CompressedBatchProof>): _81.CompressedBatchProof;
    };
    CompressedBatchEntry: {
        encode(message: _81.CompressedBatchEntry, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        fromJSON(object: any): _81.CompressedBatchEntry;
        fromPartial(object: Partial<_81.CompressedBatchEntry>): _81.CompressedBatchEntry;
    };
    CompressedExistenceProof: {
        encode(message: _81.CompressedExistenceProof, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        fromJSON(object: any): _81.CompressedExistenceProof;
        fromPartial(object: Partial<_81.CompressedExistenceProof>): _81.CompressedExistenceProof;
    };
    CompressedNonExistenceProof: {
        encode(message: _81.CompressedNonExistenceProof, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        fromJSON(object: any): _81.CompressedNonExistenceProof;
        fromPartial(object: Partial<_81.CompressedNonExistenceProof>): _81.CompressedNonExistenceProof;
    };
};
