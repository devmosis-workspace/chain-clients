import * as _157 from "../confio/proofs";
export declare const ics23: {
    hashOpFromJSON(object: any): _157.HashOp;
    hashOpToJSON(object: _157.HashOp): string;
    lengthOpFromJSON(object: any): _157.LengthOp;
    lengthOpToJSON(object: _157.LengthOp): string;
    HashOp: typeof _157.HashOp;
    HashOpSDKType: typeof _157.HashOp;
    HashOpAmino: typeof _157.HashOp;
    LengthOp: typeof _157.LengthOp;
    LengthOpSDKType: typeof _157.LengthOp;
    LengthOpAmino: typeof _157.LengthOp;
    ExistenceProof: {
        typeUrl: string;
        encode(message: _157.ExistenceProof, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
        fromJSON(object: any): _157.ExistenceProof;
        fromPartial(object: Partial<_157.ExistenceProof>): _157.ExistenceProof;
        fromAmino(object: _157.ExistenceProofAmino): _157.ExistenceProof;
        toAmino(message: _157.ExistenceProof): _157.ExistenceProofAmino;
        fromAminoMsg(object: _157.ExistenceProofAminoMsg): _157.ExistenceProof;
        fromProtoMsg(message: _157.ExistenceProofProtoMsg): _157.ExistenceProof;
        toProto(message: _157.ExistenceProof): Uint8Array;
        toProtoMsg(message: _157.ExistenceProof): _157.ExistenceProofProtoMsg;
    };
    NonExistenceProof: {
        typeUrl: string;
        encode(message: _157.NonExistenceProof, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
        fromJSON(object: any): _157.NonExistenceProof;
        fromPartial(object: Partial<_157.NonExistenceProof>): _157.NonExistenceProof;
        fromAmino(object: _157.NonExistenceProofAmino): _157.NonExistenceProof;
        toAmino(message: _157.NonExistenceProof): _157.NonExistenceProofAmino;
        fromAminoMsg(object: _157.NonExistenceProofAminoMsg): _157.NonExistenceProof;
        fromProtoMsg(message: _157.NonExistenceProofProtoMsg): _157.NonExistenceProof;
        toProto(message: _157.NonExistenceProof): Uint8Array;
        toProtoMsg(message: _157.NonExistenceProof): _157.NonExistenceProofProtoMsg;
    };
    CommitmentProof: {
        typeUrl: string;
        encode(message: _157.CommitmentProof, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
        fromJSON(object: any): _157.CommitmentProof;
        fromPartial(object: Partial<_157.CommitmentProof>): _157.CommitmentProof;
        fromAmino(object: _157.CommitmentProofAmino): _157.CommitmentProof;
        toAmino(message: _157.CommitmentProof): _157.CommitmentProofAmino;
        fromAminoMsg(object: _157.CommitmentProofAminoMsg): _157.CommitmentProof;
        fromProtoMsg(message: _157.CommitmentProofProtoMsg): _157.CommitmentProof;
        toProto(message: _157.CommitmentProof): Uint8Array;
        toProtoMsg(message: _157.CommitmentProof): _157.CommitmentProofProtoMsg;
    };
    LeafOp: {
        typeUrl: string;
        encode(message: _157.LeafOp, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
        fromJSON(object: any): _157.LeafOp;
        fromPartial(object: Partial<_157.LeafOp>): _157.LeafOp;
        fromAmino(object: _157.LeafOpAmino): _157.LeafOp;
        toAmino(message: _157.LeafOp): _157.LeafOpAmino;
        fromAminoMsg(object: _157.LeafOpAminoMsg): _157.LeafOp;
        fromProtoMsg(message: _157.LeafOpProtoMsg): _157.LeafOp;
        toProto(message: _157.LeafOp): Uint8Array;
        toProtoMsg(message: _157.LeafOp): _157.LeafOpProtoMsg;
    };
    InnerOp: {
        typeUrl: string;
        encode(message: _157.InnerOp, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
        fromJSON(object: any): _157.InnerOp;
        fromPartial(object: Partial<_157.InnerOp>): _157.InnerOp;
        fromAmino(object: _157.InnerOpAmino): _157.InnerOp;
        toAmino(message: _157.InnerOp): _157.InnerOpAmino;
        fromAminoMsg(object: _157.InnerOpAminoMsg): _157.InnerOp;
        fromProtoMsg(message: _157.InnerOpProtoMsg): _157.InnerOp;
        toProto(message: _157.InnerOp): Uint8Array;
        toProtoMsg(message: _157.InnerOp): _157.InnerOpProtoMsg;
    };
    ProofSpec: {
        typeUrl: string;
        encode(message: _157.ProofSpec, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
        fromJSON(object: any): _157.ProofSpec;
        fromPartial(object: Partial<_157.ProofSpec>): _157.ProofSpec;
        fromAmino(object: _157.ProofSpecAmino): _157.ProofSpec;
        toAmino(message: _157.ProofSpec): _157.ProofSpecAmino;
        fromAminoMsg(object: _157.ProofSpecAminoMsg): _157.ProofSpec;
        fromProtoMsg(message: _157.ProofSpecProtoMsg): _157.ProofSpec;
        toProto(message: _157.ProofSpec): Uint8Array;
        toProtoMsg(message: _157.ProofSpec): _157.ProofSpecProtoMsg;
    };
    InnerSpec: {
        typeUrl: string;
        encode(message: _157.InnerSpec, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
        fromJSON(object: any): _157.InnerSpec;
        fromPartial(object: Partial<_157.InnerSpec>): _157.InnerSpec;
        fromAmino(object: _157.InnerSpecAmino): _157.InnerSpec;
        toAmino(message: _157.InnerSpec): _157.InnerSpecAmino;
        fromAminoMsg(object: _157.InnerSpecAminoMsg): _157.InnerSpec;
        fromProtoMsg(message: _157.InnerSpecProtoMsg): _157.InnerSpec;
        toProto(message: _157.InnerSpec): Uint8Array;
        toProtoMsg(message: _157.InnerSpec): _157.InnerSpecProtoMsg;
    };
    BatchProof: {
        typeUrl: string;
        encode(message: _157.BatchProof, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
        fromJSON(object: any): _157.BatchProof;
        fromPartial(object: Partial<_157.BatchProof>): _157.BatchProof;
        fromAmino(object: _157.BatchProofAmino): _157.BatchProof;
        toAmino(message: _157.BatchProof): _157.BatchProofAmino;
        fromAminoMsg(object: _157.BatchProofAminoMsg): _157.BatchProof;
        fromProtoMsg(message: _157.BatchProofProtoMsg): _157.BatchProof;
        toProto(message: _157.BatchProof): Uint8Array;
        toProtoMsg(message: _157.BatchProof): _157.BatchProofProtoMsg;
    };
    BatchEntry: {
        typeUrl: string;
        encode(message: _157.BatchEntry, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
        fromJSON(object: any): _157.BatchEntry;
        fromPartial(object: Partial<_157.BatchEntry>): _157.BatchEntry;
        fromAmino(object: _157.BatchEntryAmino): _157.BatchEntry;
        toAmino(message: _157.BatchEntry): _157.BatchEntryAmino;
        fromAminoMsg(object: _157.BatchEntryAminoMsg): _157.BatchEntry;
        fromProtoMsg(message: _157.BatchEntryProtoMsg): _157.BatchEntry;
        toProto(message: _157.BatchEntry): Uint8Array;
        toProtoMsg(message: _157.BatchEntry): _157.BatchEntryProtoMsg;
    };
    CompressedBatchProof: {
        typeUrl: string;
        encode(message: _157.CompressedBatchProof, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
        fromJSON(object: any): _157.CompressedBatchProof;
        fromPartial(object: Partial<_157.CompressedBatchProof>): _157.CompressedBatchProof;
        fromAmino(object: _157.CompressedBatchProofAmino): _157.CompressedBatchProof;
        toAmino(message: _157.CompressedBatchProof): _157.CompressedBatchProofAmino;
        fromAminoMsg(object: _157.CompressedBatchProofAminoMsg): _157.CompressedBatchProof;
        fromProtoMsg(message: _157.CompressedBatchProofProtoMsg): _157.CompressedBatchProof;
        toProto(message: _157.CompressedBatchProof): Uint8Array;
        toProtoMsg(message: _157.CompressedBatchProof): _157.CompressedBatchProofProtoMsg;
    };
    CompressedBatchEntry: {
        typeUrl: string;
        encode(message: _157.CompressedBatchEntry, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
        fromJSON(object: any): _157.CompressedBatchEntry;
        fromPartial(object: Partial<_157.CompressedBatchEntry>): _157.CompressedBatchEntry;
        fromAmino(object: _157.CompressedBatchEntryAmino): _157.CompressedBatchEntry;
        toAmino(message: _157.CompressedBatchEntry): _157.CompressedBatchEntryAmino;
        fromAminoMsg(object: _157.CompressedBatchEntryAminoMsg): _157.CompressedBatchEntry;
        fromProtoMsg(message: _157.CompressedBatchEntryProtoMsg): _157.CompressedBatchEntry;
        toProto(message: _157.CompressedBatchEntry): Uint8Array;
        toProtoMsg(message: _157.CompressedBatchEntry): _157.CompressedBatchEntryProtoMsg;
    };
    CompressedExistenceProof: {
        typeUrl: string;
        encode(message: _157.CompressedExistenceProof, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
        fromJSON(object: any): _157.CompressedExistenceProof;
        fromPartial(object: Partial<_157.CompressedExistenceProof>): _157.CompressedExistenceProof;
        fromAmino(object: _157.CompressedExistenceProofAmino): _157.CompressedExistenceProof;
        toAmino(message: _157.CompressedExistenceProof): _157.CompressedExistenceProofAmino;
        fromAminoMsg(object: _157.CompressedExistenceProofAminoMsg): _157.CompressedExistenceProof;
        fromProtoMsg(message: _157.CompressedExistenceProofProtoMsg): _157.CompressedExistenceProof;
        toProto(message: _157.CompressedExistenceProof): Uint8Array;
        toProtoMsg(message: _157.CompressedExistenceProof): _157.CompressedExistenceProofProtoMsg;
    };
    CompressedNonExistenceProof: {
        typeUrl: string;
        encode(message: _157.CompressedNonExistenceProof, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
        fromJSON(object: any): _157.CompressedNonExistenceProof;
        fromPartial(object: Partial<_157.CompressedNonExistenceProof>): _157.CompressedNonExistenceProof;
        fromAmino(object: _157.CompressedNonExistenceProofAmino): _157.CompressedNonExistenceProof;
        toAmino(message: _157.CompressedNonExistenceProof): _157.CompressedNonExistenceProofAmino;
        fromAminoMsg(object: _157.CompressedNonExistenceProofAminoMsg): _157.CompressedNonExistenceProof;
        fromProtoMsg(message: _157.CompressedNonExistenceProofProtoMsg): _157.CompressedNonExistenceProof;
        toProto(message: _157.CompressedNonExistenceProof): Uint8Array;
        toProtoMsg(message: _157.CompressedNonExistenceProof): _157.CompressedNonExistenceProofProtoMsg;
    };
};
