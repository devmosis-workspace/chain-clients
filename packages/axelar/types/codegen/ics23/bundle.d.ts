import * as _170 from "../proofs";
export declare const ics23: {
    hashOpFromJSON(object: any): _170.HashOp;
    hashOpToJSON(object: _170.HashOp): string;
    lengthOpFromJSON(object: any): _170.LengthOp;
    lengthOpToJSON(object: _170.LengthOp): string;
    HashOp: typeof _170.HashOp;
    HashOpSDKType: typeof _170.HashOp;
    HashOpAmino: typeof _170.HashOp;
    LengthOp: typeof _170.LengthOp;
    LengthOpSDKType: typeof _170.LengthOp;
    LengthOpAmino: typeof _170.LengthOp;
    ExistenceProof: {
        typeUrl: string;
        encode(message: _170.ExistenceProof, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
        fromJSON(object: any): _170.ExistenceProof;
        fromPartial(object: Partial<_170.ExistenceProof>): _170.ExistenceProof;
        fromAmino(object: _170.ExistenceProofAmino): _170.ExistenceProof;
        toAmino(message: _170.ExistenceProof): _170.ExistenceProofAmino;
        fromAminoMsg(object: _170.ExistenceProofAminoMsg): _170.ExistenceProof;
        fromProtoMsg(message: _170.ExistenceProofProtoMsg): _170.ExistenceProof;
        toProto(message: _170.ExistenceProof): Uint8Array;
        toProtoMsg(message: _170.ExistenceProof): _170.ExistenceProofProtoMsg;
    };
    NonExistenceProof: {
        typeUrl: string;
        encode(message: _170.NonExistenceProof, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
        fromJSON(object: any): _170.NonExistenceProof;
        fromPartial(object: Partial<_170.NonExistenceProof>): _170.NonExistenceProof;
        fromAmino(object: _170.NonExistenceProofAmino): _170.NonExistenceProof;
        toAmino(message: _170.NonExistenceProof): _170.NonExistenceProofAmino;
        fromAminoMsg(object: _170.NonExistenceProofAminoMsg): _170.NonExistenceProof;
        fromProtoMsg(message: _170.NonExistenceProofProtoMsg): _170.NonExistenceProof;
        toProto(message: _170.NonExistenceProof): Uint8Array;
        toProtoMsg(message: _170.NonExistenceProof): _170.NonExistenceProofProtoMsg;
    };
    CommitmentProof: {
        typeUrl: string;
        encode(message: _170.CommitmentProof, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
        fromJSON(object: any): _170.CommitmentProof;
        fromPartial(object: Partial<_170.CommitmentProof>): _170.CommitmentProof;
        fromAmino(object: _170.CommitmentProofAmino): _170.CommitmentProof;
        toAmino(message: _170.CommitmentProof): _170.CommitmentProofAmino;
        fromAminoMsg(object: _170.CommitmentProofAminoMsg): _170.CommitmentProof;
        fromProtoMsg(message: _170.CommitmentProofProtoMsg): _170.CommitmentProof;
        toProto(message: _170.CommitmentProof): Uint8Array;
        toProtoMsg(message: _170.CommitmentProof): _170.CommitmentProofProtoMsg;
    };
    LeafOp: {
        typeUrl: string;
        encode(message: _170.LeafOp, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
        fromJSON(object: any): _170.LeafOp;
        fromPartial(object: Partial<_170.LeafOp>): _170.LeafOp;
        fromAmino(object: _170.LeafOpAmino): _170.LeafOp;
        toAmino(message: _170.LeafOp): _170.LeafOpAmino;
        fromAminoMsg(object: _170.LeafOpAminoMsg): _170.LeafOp;
        fromProtoMsg(message: _170.LeafOpProtoMsg): _170.LeafOp;
        toProto(message: _170.LeafOp): Uint8Array;
        toProtoMsg(message: _170.LeafOp): _170.LeafOpProtoMsg;
    };
    InnerOp: {
        typeUrl: string;
        encode(message: _170.InnerOp, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
        fromJSON(object: any): _170.InnerOp;
        fromPartial(object: Partial<_170.InnerOp>): _170.InnerOp;
        fromAmino(object: _170.InnerOpAmino): _170.InnerOp;
        toAmino(message: _170.InnerOp): _170.InnerOpAmino;
        fromAminoMsg(object: _170.InnerOpAminoMsg): _170.InnerOp;
        fromProtoMsg(message: _170.InnerOpProtoMsg): _170.InnerOp;
        toProto(message: _170.InnerOp): Uint8Array;
        toProtoMsg(message: _170.InnerOp): _170.InnerOpProtoMsg;
    };
    ProofSpec: {
        typeUrl: string;
        encode(message: _170.ProofSpec, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
        fromJSON(object: any): _170.ProofSpec;
        fromPartial(object: Partial<_170.ProofSpec>): _170.ProofSpec;
        fromAmino(object: _170.ProofSpecAmino): _170.ProofSpec;
        toAmino(message: _170.ProofSpec): _170.ProofSpecAmino;
        fromAminoMsg(object: _170.ProofSpecAminoMsg): _170.ProofSpec;
        fromProtoMsg(message: _170.ProofSpecProtoMsg): _170.ProofSpec;
        toProto(message: _170.ProofSpec): Uint8Array;
        toProtoMsg(message: _170.ProofSpec): _170.ProofSpecProtoMsg;
    };
    InnerSpec: {
        typeUrl: string;
        encode(message: _170.InnerSpec, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
        fromJSON(object: any): _170.InnerSpec;
        fromPartial(object: Partial<_170.InnerSpec>): _170.InnerSpec;
        fromAmino(object: _170.InnerSpecAmino): _170.InnerSpec;
        toAmino(message: _170.InnerSpec): _170.InnerSpecAmino;
        fromAminoMsg(object: _170.InnerSpecAminoMsg): _170.InnerSpec;
        fromProtoMsg(message: _170.InnerSpecProtoMsg): _170.InnerSpec;
        toProto(message: _170.InnerSpec): Uint8Array;
        toProtoMsg(message: _170.InnerSpec): _170.InnerSpecProtoMsg;
    };
    BatchProof: {
        typeUrl: string;
        encode(message: _170.BatchProof, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
        fromJSON(object: any): _170.BatchProof;
        fromPartial(object: Partial<_170.BatchProof>): _170.BatchProof;
        fromAmino(object: _170.BatchProofAmino): _170.BatchProof;
        toAmino(message: _170.BatchProof): _170.BatchProofAmino;
        fromAminoMsg(object: _170.BatchProofAminoMsg): _170.BatchProof;
        fromProtoMsg(message: _170.BatchProofProtoMsg): _170.BatchProof;
        toProto(message: _170.BatchProof): Uint8Array;
        toProtoMsg(message: _170.BatchProof): _170.BatchProofProtoMsg;
    };
    BatchEntry: {
        typeUrl: string;
        encode(message: _170.BatchEntry, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
        fromJSON(object: any): _170.BatchEntry;
        fromPartial(object: Partial<_170.BatchEntry>): _170.BatchEntry;
        fromAmino(object: _170.BatchEntryAmino): _170.BatchEntry;
        toAmino(message: _170.BatchEntry): _170.BatchEntryAmino;
        fromAminoMsg(object: _170.BatchEntryAminoMsg): _170.BatchEntry;
        fromProtoMsg(message: _170.BatchEntryProtoMsg): _170.BatchEntry;
        toProto(message: _170.BatchEntry): Uint8Array;
        toProtoMsg(message: _170.BatchEntry): _170.BatchEntryProtoMsg;
    };
    CompressedBatchProof: {
        typeUrl: string;
        encode(message: _170.CompressedBatchProof, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
        fromJSON(object: any): _170.CompressedBatchProof;
        fromPartial(object: Partial<_170.CompressedBatchProof>): _170.CompressedBatchProof;
        fromAmino(object: _170.CompressedBatchProofAmino): _170.CompressedBatchProof;
        toAmino(message: _170.CompressedBatchProof): _170.CompressedBatchProofAmino;
        fromAminoMsg(object: _170.CompressedBatchProofAminoMsg): _170.CompressedBatchProof;
        fromProtoMsg(message: _170.CompressedBatchProofProtoMsg): _170.CompressedBatchProof;
        toProto(message: _170.CompressedBatchProof): Uint8Array;
        toProtoMsg(message: _170.CompressedBatchProof): _170.CompressedBatchProofProtoMsg;
    };
    CompressedBatchEntry: {
        typeUrl: string;
        encode(message: _170.CompressedBatchEntry, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
        fromJSON(object: any): _170.CompressedBatchEntry;
        fromPartial(object: Partial<_170.CompressedBatchEntry>): _170.CompressedBatchEntry;
        fromAmino(object: _170.CompressedBatchEntryAmino): _170.CompressedBatchEntry;
        toAmino(message: _170.CompressedBatchEntry): _170.CompressedBatchEntryAmino;
        fromAminoMsg(object: _170.CompressedBatchEntryAminoMsg): _170.CompressedBatchEntry;
        fromProtoMsg(message: _170.CompressedBatchEntryProtoMsg): _170.CompressedBatchEntry;
        toProto(message: _170.CompressedBatchEntry): Uint8Array;
        toProtoMsg(message: _170.CompressedBatchEntry): _170.CompressedBatchEntryProtoMsg;
    };
    CompressedExistenceProof: {
        typeUrl: string;
        encode(message: _170.CompressedExistenceProof, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
        fromJSON(object: any): _170.CompressedExistenceProof;
        fromPartial(object: Partial<_170.CompressedExistenceProof>): _170.CompressedExistenceProof;
        fromAmino(object: _170.CompressedExistenceProofAmino): _170.CompressedExistenceProof;
        toAmino(message: _170.CompressedExistenceProof): _170.CompressedExistenceProofAmino;
        fromAminoMsg(object: _170.CompressedExistenceProofAminoMsg): _170.CompressedExistenceProof;
        fromProtoMsg(message: _170.CompressedExistenceProofProtoMsg): _170.CompressedExistenceProof;
        toProto(message: _170.CompressedExistenceProof): Uint8Array;
        toProtoMsg(message: _170.CompressedExistenceProof): _170.CompressedExistenceProofProtoMsg;
    };
    CompressedNonExistenceProof: {
        typeUrl: string;
        encode(message: _170.CompressedNonExistenceProof, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
        fromJSON(object: any): _170.CompressedNonExistenceProof;
        fromPartial(object: Partial<_170.CompressedNonExistenceProof>): _170.CompressedNonExistenceProof;
        fromAmino(object: _170.CompressedNonExistenceProofAmino): _170.CompressedNonExistenceProof;
        toAmino(message: _170.CompressedNonExistenceProof): _170.CompressedNonExistenceProofAmino;
        fromAminoMsg(object: _170.CompressedNonExistenceProofAminoMsg): _170.CompressedNonExistenceProof;
        fromProtoMsg(message: _170.CompressedNonExistenceProofProtoMsg): _170.CompressedNonExistenceProof;
        toProto(message: _170.CompressedNonExistenceProof): Uint8Array;
        toProtoMsg(message: _170.CompressedNonExistenceProof): _170.CompressedNonExistenceProofProtoMsg;
    };
};
