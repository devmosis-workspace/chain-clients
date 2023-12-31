import * as _91 from "../confio/proofs";
export declare const ics23: {
    hashOpFromJSON(object: any): _91.HashOp;
    hashOpToJSON(object: _91.HashOp): string;
    lengthOpFromJSON(object: any): _91.LengthOp;
    lengthOpToJSON(object: _91.LengthOp): string;
    HashOp: typeof _91.HashOp;
    HashOpSDKType: typeof _91.HashOp;
    HashOpAmino: typeof _91.HashOp;
    LengthOp: typeof _91.LengthOp;
    LengthOpSDKType: typeof _91.LengthOp;
    LengthOpAmino: typeof _91.LengthOp;
    ExistenceProof: {
        typeUrl: string;
        encode(message: _91.ExistenceProof, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
        fromJSON(object: any): _91.ExistenceProof;
        fromPartial(object: Partial<_91.ExistenceProof>): _91.ExistenceProof;
        fromAmino(object: _91.ExistenceProofAmino): _91.ExistenceProof;
        toAmino(message: _91.ExistenceProof): _91.ExistenceProofAmino;
        fromAminoMsg(object: _91.ExistenceProofAminoMsg): _91.ExistenceProof;
        fromProtoMsg(message: _91.ExistenceProofProtoMsg): _91.ExistenceProof;
        toProto(message: _91.ExistenceProof): Uint8Array;
        toProtoMsg(message: _91.ExistenceProof): _91.ExistenceProofProtoMsg;
    };
    NonExistenceProof: {
        typeUrl: string;
        encode(message: _91.NonExistenceProof, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
        fromJSON(object: any): _91.NonExistenceProof;
        fromPartial(object: Partial<_91.NonExistenceProof>): _91.NonExistenceProof;
        fromAmino(object: _91.NonExistenceProofAmino): _91.NonExistenceProof;
        toAmino(message: _91.NonExistenceProof): _91.NonExistenceProofAmino;
        fromAminoMsg(object: _91.NonExistenceProofAminoMsg): _91.NonExistenceProof;
        fromProtoMsg(message: _91.NonExistenceProofProtoMsg): _91.NonExistenceProof;
        toProto(message: _91.NonExistenceProof): Uint8Array;
        toProtoMsg(message: _91.NonExistenceProof): _91.NonExistenceProofProtoMsg;
    };
    CommitmentProof: {
        typeUrl: string;
        encode(message: _91.CommitmentProof, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
        fromJSON(object: any): _91.CommitmentProof;
        fromPartial(object: Partial<_91.CommitmentProof>): _91.CommitmentProof;
        fromAmino(object: _91.CommitmentProofAmino): _91.CommitmentProof;
        toAmino(message: _91.CommitmentProof): _91.CommitmentProofAmino;
        fromAminoMsg(object: _91.CommitmentProofAminoMsg): _91.CommitmentProof;
        fromProtoMsg(message: _91.CommitmentProofProtoMsg): _91.CommitmentProof;
        toProto(message: _91.CommitmentProof): Uint8Array;
        toProtoMsg(message: _91.CommitmentProof): _91.CommitmentProofProtoMsg;
    };
    LeafOp: {
        typeUrl: string;
        encode(message: _91.LeafOp, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
        fromJSON(object: any): _91.LeafOp;
        fromPartial(object: Partial<_91.LeafOp>): _91.LeafOp;
        fromAmino(object: _91.LeafOpAmino): _91.LeafOp;
        toAmino(message: _91.LeafOp): _91.LeafOpAmino;
        fromAminoMsg(object: _91.LeafOpAminoMsg): _91.LeafOp;
        fromProtoMsg(message: _91.LeafOpProtoMsg): _91.LeafOp;
        toProto(message: _91.LeafOp): Uint8Array;
        toProtoMsg(message: _91.LeafOp): _91.LeafOpProtoMsg;
    };
    InnerOp: {
        typeUrl: string;
        encode(message: _91.InnerOp, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
        fromJSON(object: any): _91.InnerOp;
        fromPartial(object: Partial<_91.InnerOp>): _91.InnerOp;
        fromAmino(object: _91.InnerOpAmino): _91.InnerOp;
        toAmino(message: _91.InnerOp): _91.InnerOpAmino;
        fromAminoMsg(object: _91.InnerOpAminoMsg): _91.InnerOp;
        fromProtoMsg(message: _91.InnerOpProtoMsg): _91.InnerOp;
        toProto(message: _91.InnerOp): Uint8Array;
        toProtoMsg(message: _91.InnerOp): _91.InnerOpProtoMsg;
    };
    ProofSpec: {
        typeUrl: string;
        encode(message: _91.ProofSpec, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
        fromJSON(object: any): _91.ProofSpec;
        fromPartial(object: Partial<_91.ProofSpec>): _91.ProofSpec;
        fromAmino(object: _91.ProofSpecAmino): _91.ProofSpec;
        toAmino(message: _91.ProofSpec): _91.ProofSpecAmino;
        fromAminoMsg(object: _91.ProofSpecAminoMsg): _91.ProofSpec;
        fromProtoMsg(message: _91.ProofSpecProtoMsg): _91.ProofSpec;
        toProto(message: _91.ProofSpec): Uint8Array;
        toProtoMsg(message: _91.ProofSpec): _91.ProofSpecProtoMsg;
    };
    InnerSpec: {
        typeUrl: string;
        encode(message: _91.InnerSpec, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
        fromJSON(object: any): _91.InnerSpec;
        fromPartial(object: Partial<_91.InnerSpec>): _91.InnerSpec;
        fromAmino(object: _91.InnerSpecAmino): _91.InnerSpec;
        toAmino(message: _91.InnerSpec): _91.InnerSpecAmino;
        fromAminoMsg(object: _91.InnerSpecAminoMsg): _91.InnerSpec;
        fromProtoMsg(message: _91.InnerSpecProtoMsg): _91.InnerSpec;
        toProto(message: _91.InnerSpec): Uint8Array;
        toProtoMsg(message: _91.InnerSpec): _91.InnerSpecProtoMsg;
    };
    BatchProof: {
        typeUrl: string;
        encode(message: _91.BatchProof, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
        fromJSON(object: any): _91.BatchProof;
        fromPartial(object: Partial<_91.BatchProof>): _91.BatchProof;
        fromAmino(object: _91.BatchProofAmino): _91.BatchProof;
        toAmino(message: _91.BatchProof): _91.BatchProofAmino;
        fromAminoMsg(object: _91.BatchProofAminoMsg): _91.BatchProof;
        fromProtoMsg(message: _91.BatchProofProtoMsg): _91.BatchProof;
        toProto(message: _91.BatchProof): Uint8Array;
        toProtoMsg(message: _91.BatchProof): _91.BatchProofProtoMsg;
    };
    BatchEntry: {
        typeUrl: string;
        encode(message: _91.BatchEntry, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
        fromJSON(object: any): _91.BatchEntry;
        fromPartial(object: Partial<_91.BatchEntry>): _91.BatchEntry;
        fromAmino(object: _91.BatchEntryAmino): _91.BatchEntry;
        toAmino(message: _91.BatchEntry): _91.BatchEntryAmino;
        fromAminoMsg(object: _91.BatchEntryAminoMsg): _91.BatchEntry;
        fromProtoMsg(message: _91.BatchEntryProtoMsg): _91.BatchEntry;
        toProto(message: _91.BatchEntry): Uint8Array;
        toProtoMsg(message: _91.BatchEntry): _91.BatchEntryProtoMsg;
    };
    CompressedBatchProof: {
        typeUrl: string;
        encode(message: _91.CompressedBatchProof, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
        fromJSON(object: any): _91.CompressedBatchProof;
        fromPartial(object: Partial<_91.CompressedBatchProof>): _91.CompressedBatchProof;
        fromAmino(object: _91.CompressedBatchProofAmino): _91.CompressedBatchProof;
        toAmino(message: _91.CompressedBatchProof): _91.CompressedBatchProofAmino;
        fromAminoMsg(object: _91.CompressedBatchProofAminoMsg): _91.CompressedBatchProof;
        fromProtoMsg(message: _91.CompressedBatchProofProtoMsg): _91.CompressedBatchProof;
        toProto(message: _91.CompressedBatchProof): Uint8Array;
        toProtoMsg(message: _91.CompressedBatchProof): _91.CompressedBatchProofProtoMsg;
    };
    CompressedBatchEntry: {
        typeUrl: string;
        encode(message: _91.CompressedBatchEntry, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
        fromJSON(object: any): _91.CompressedBatchEntry;
        fromPartial(object: Partial<_91.CompressedBatchEntry>): _91.CompressedBatchEntry;
        fromAmino(object: _91.CompressedBatchEntryAmino): _91.CompressedBatchEntry;
        toAmino(message: _91.CompressedBatchEntry): _91.CompressedBatchEntryAmino;
        fromAminoMsg(object: _91.CompressedBatchEntryAminoMsg): _91.CompressedBatchEntry;
        fromProtoMsg(message: _91.CompressedBatchEntryProtoMsg): _91.CompressedBatchEntry;
        toProto(message: _91.CompressedBatchEntry): Uint8Array;
        toProtoMsg(message: _91.CompressedBatchEntry): _91.CompressedBatchEntryProtoMsg;
    };
    CompressedExistenceProof: {
        typeUrl: string;
        encode(message: _91.CompressedExistenceProof, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
        fromJSON(object: any): _91.CompressedExistenceProof;
        fromPartial(object: Partial<_91.CompressedExistenceProof>): _91.CompressedExistenceProof;
        fromAmino(object: _91.CompressedExistenceProofAmino): _91.CompressedExistenceProof;
        toAmino(message: _91.CompressedExistenceProof): _91.CompressedExistenceProofAmino;
        fromAminoMsg(object: _91.CompressedExistenceProofAminoMsg): _91.CompressedExistenceProof;
        fromProtoMsg(message: _91.CompressedExistenceProofProtoMsg): _91.CompressedExistenceProof;
        toProto(message: _91.CompressedExistenceProof): Uint8Array;
        toProtoMsg(message: _91.CompressedExistenceProof): _91.CompressedExistenceProofProtoMsg;
    };
    CompressedNonExistenceProof: {
        typeUrl: string;
        encode(message: _91.CompressedNonExistenceProof, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
        fromJSON(object: any): _91.CompressedNonExistenceProof;
        fromPartial(object: Partial<_91.CompressedNonExistenceProof>): _91.CompressedNonExistenceProof;
        fromAmino(object: _91.CompressedNonExistenceProofAmino): _91.CompressedNonExistenceProof;
        toAmino(message: _91.CompressedNonExistenceProof): _91.CompressedNonExistenceProofAmino;
        fromAminoMsg(object: _91.CompressedNonExistenceProofAminoMsg): _91.CompressedNonExistenceProof;
        fromProtoMsg(message: _91.CompressedNonExistenceProofProtoMsg): _91.CompressedNonExistenceProof;
        toProto(message: _91.CompressedNonExistenceProof): Uint8Array;
        toProtoMsg(message: _91.CompressedNonExistenceProof): _91.CompressedNonExistenceProofProtoMsg;
    };
};
