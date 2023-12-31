import * as _88 from "../confio/proofs";
export declare const ics23: {
    hashOpFromJSON(object: any): _88.HashOp;
    hashOpToJSON(object: _88.HashOp): string;
    lengthOpFromJSON(object: any): _88.LengthOp;
    lengthOpToJSON(object: _88.LengthOp): string;
    HashOp: typeof _88.HashOp;
    HashOpSDKType: typeof _88.HashOp;
    HashOpAmino: typeof _88.HashOp;
    LengthOp: typeof _88.LengthOp;
    LengthOpSDKType: typeof _88.LengthOp;
    LengthOpAmino: typeof _88.LengthOp;
    ExistenceProof: {
        typeUrl: string;
        encode(message: _88.ExistenceProof, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
        fromJSON(object: any): _88.ExistenceProof;
        fromPartial(object: Partial<_88.ExistenceProof>): _88.ExistenceProof;
        fromAmino(object: _88.ExistenceProofAmino): _88.ExistenceProof;
        toAmino(message: _88.ExistenceProof): _88.ExistenceProofAmino;
        fromAminoMsg(object: _88.ExistenceProofAminoMsg): _88.ExistenceProof;
        fromProtoMsg(message: _88.ExistenceProofProtoMsg): _88.ExistenceProof;
        toProto(message: _88.ExistenceProof): Uint8Array;
        toProtoMsg(message: _88.ExistenceProof): _88.ExistenceProofProtoMsg;
    };
    NonExistenceProof: {
        typeUrl: string;
        encode(message: _88.NonExistenceProof, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
        fromJSON(object: any): _88.NonExistenceProof;
        fromPartial(object: Partial<_88.NonExistenceProof>): _88.NonExistenceProof;
        fromAmino(object: _88.NonExistenceProofAmino): _88.NonExistenceProof;
        toAmino(message: _88.NonExistenceProof): _88.NonExistenceProofAmino;
        fromAminoMsg(object: _88.NonExistenceProofAminoMsg): _88.NonExistenceProof;
        fromProtoMsg(message: _88.NonExistenceProofProtoMsg): _88.NonExistenceProof;
        toProto(message: _88.NonExistenceProof): Uint8Array;
        toProtoMsg(message: _88.NonExistenceProof): _88.NonExistenceProofProtoMsg;
    };
    CommitmentProof: {
        typeUrl: string;
        encode(message: _88.CommitmentProof, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
        fromJSON(object: any): _88.CommitmentProof;
        fromPartial(object: Partial<_88.CommitmentProof>): _88.CommitmentProof;
        fromAmino(object: _88.CommitmentProofAmino): _88.CommitmentProof;
        toAmino(message: _88.CommitmentProof): _88.CommitmentProofAmino;
        fromAminoMsg(object: _88.CommitmentProofAminoMsg): _88.CommitmentProof;
        fromProtoMsg(message: _88.CommitmentProofProtoMsg): _88.CommitmentProof;
        toProto(message: _88.CommitmentProof): Uint8Array;
        toProtoMsg(message: _88.CommitmentProof): _88.CommitmentProofProtoMsg;
    };
    LeafOp: {
        typeUrl: string;
        encode(message: _88.LeafOp, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
        fromJSON(object: any): _88.LeafOp;
        fromPartial(object: Partial<_88.LeafOp>): _88.LeafOp;
        fromAmino(object: _88.LeafOpAmino): _88.LeafOp;
        toAmino(message: _88.LeafOp): _88.LeafOpAmino;
        fromAminoMsg(object: _88.LeafOpAminoMsg): _88.LeafOp;
        fromProtoMsg(message: _88.LeafOpProtoMsg): _88.LeafOp;
        toProto(message: _88.LeafOp): Uint8Array;
        toProtoMsg(message: _88.LeafOp): _88.LeafOpProtoMsg;
    };
    InnerOp: {
        typeUrl: string;
        encode(message: _88.InnerOp, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
        fromJSON(object: any): _88.InnerOp;
        fromPartial(object: Partial<_88.InnerOp>): _88.InnerOp;
        fromAmino(object: _88.InnerOpAmino): _88.InnerOp;
        toAmino(message: _88.InnerOp): _88.InnerOpAmino;
        fromAminoMsg(object: _88.InnerOpAminoMsg): _88.InnerOp;
        fromProtoMsg(message: _88.InnerOpProtoMsg): _88.InnerOp;
        toProto(message: _88.InnerOp): Uint8Array;
        toProtoMsg(message: _88.InnerOp): _88.InnerOpProtoMsg;
    };
    ProofSpec: {
        typeUrl: string;
        encode(message: _88.ProofSpec, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
        fromJSON(object: any): _88.ProofSpec;
        fromPartial(object: Partial<_88.ProofSpec>): _88.ProofSpec;
        fromAmino(object: _88.ProofSpecAmino): _88.ProofSpec;
        toAmino(message: _88.ProofSpec): _88.ProofSpecAmino;
        fromAminoMsg(object: _88.ProofSpecAminoMsg): _88.ProofSpec;
        fromProtoMsg(message: _88.ProofSpecProtoMsg): _88.ProofSpec;
        toProto(message: _88.ProofSpec): Uint8Array;
        toProtoMsg(message: _88.ProofSpec): _88.ProofSpecProtoMsg;
    };
    InnerSpec: {
        typeUrl: string;
        encode(message: _88.InnerSpec, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
        fromJSON(object: any): _88.InnerSpec;
        fromPartial(object: Partial<_88.InnerSpec>): _88.InnerSpec;
        fromAmino(object: _88.InnerSpecAmino): _88.InnerSpec;
        toAmino(message: _88.InnerSpec): _88.InnerSpecAmino;
        fromAminoMsg(object: _88.InnerSpecAminoMsg): _88.InnerSpec;
        fromProtoMsg(message: _88.InnerSpecProtoMsg): _88.InnerSpec;
        toProto(message: _88.InnerSpec): Uint8Array;
        toProtoMsg(message: _88.InnerSpec): _88.InnerSpecProtoMsg;
    };
    BatchProof: {
        typeUrl: string;
        encode(message: _88.BatchProof, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
        fromJSON(object: any): _88.BatchProof;
        fromPartial(object: Partial<_88.BatchProof>): _88.BatchProof;
        fromAmino(object: _88.BatchProofAmino): _88.BatchProof;
        toAmino(message: _88.BatchProof): _88.BatchProofAmino;
        fromAminoMsg(object: _88.BatchProofAminoMsg): _88.BatchProof;
        fromProtoMsg(message: _88.BatchProofProtoMsg): _88.BatchProof;
        toProto(message: _88.BatchProof): Uint8Array;
        toProtoMsg(message: _88.BatchProof): _88.BatchProofProtoMsg;
    };
    BatchEntry: {
        typeUrl: string;
        encode(message: _88.BatchEntry, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
        fromJSON(object: any): _88.BatchEntry;
        fromPartial(object: Partial<_88.BatchEntry>): _88.BatchEntry;
        fromAmino(object: _88.BatchEntryAmino): _88.BatchEntry;
        toAmino(message: _88.BatchEntry): _88.BatchEntryAmino;
        fromAminoMsg(object: _88.BatchEntryAminoMsg): _88.BatchEntry;
        fromProtoMsg(message: _88.BatchEntryProtoMsg): _88.BatchEntry;
        toProto(message: _88.BatchEntry): Uint8Array;
        toProtoMsg(message: _88.BatchEntry): _88.BatchEntryProtoMsg;
    };
    CompressedBatchProof: {
        typeUrl: string;
        encode(message: _88.CompressedBatchProof, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
        fromJSON(object: any): _88.CompressedBatchProof;
        fromPartial(object: Partial<_88.CompressedBatchProof>): _88.CompressedBatchProof;
        fromAmino(object: _88.CompressedBatchProofAmino): _88.CompressedBatchProof;
        toAmino(message: _88.CompressedBatchProof): _88.CompressedBatchProofAmino;
        fromAminoMsg(object: _88.CompressedBatchProofAminoMsg): _88.CompressedBatchProof;
        fromProtoMsg(message: _88.CompressedBatchProofProtoMsg): _88.CompressedBatchProof;
        toProto(message: _88.CompressedBatchProof): Uint8Array;
        toProtoMsg(message: _88.CompressedBatchProof): _88.CompressedBatchProofProtoMsg;
    };
    CompressedBatchEntry: {
        typeUrl: string;
        encode(message: _88.CompressedBatchEntry, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
        fromJSON(object: any): _88.CompressedBatchEntry;
        fromPartial(object: Partial<_88.CompressedBatchEntry>): _88.CompressedBatchEntry;
        fromAmino(object: _88.CompressedBatchEntryAmino): _88.CompressedBatchEntry;
        toAmino(message: _88.CompressedBatchEntry): _88.CompressedBatchEntryAmino;
        fromAminoMsg(object: _88.CompressedBatchEntryAminoMsg): _88.CompressedBatchEntry;
        fromProtoMsg(message: _88.CompressedBatchEntryProtoMsg): _88.CompressedBatchEntry;
        toProto(message: _88.CompressedBatchEntry): Uint8Array;
        toProtoMsg(message: _88.CompressedBatchEntry): _88.CompressedBatchEntryProtoMsg;
    };
    CompressedExistenceProof: {
        typeUrl: string;
        encode(message: _88.CompressedExistenceProof, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
        fromJSON(object: any): _88.CompressedExistenceProof;
        fromPartial(object: Partial<_88.CompressedExistenceProof>): _88.CompressedExistenceProof;
        fromAmino(object: _88.CompressedExistenceProofAmino): _88.CompressedExistenceProof;
        toAmino(message: _88.CompressedExistenceProof): _88.CompressedExistenceProofAmino;
        fromAminoMsg(object: _88.CompressedExistenceProofAminoMsg): _88.CompressedExistenceProof;
        fromProtoMsg(message: _88.CompressedExistenceProofProtoMsg): _88.CompressedExistenceProof;
        toProto(message: _88.CompressedExistenceProof): Uint8Array;
        toProtoMsg(message: _88.CompressedExistenceProof): _88.CompressedExistenceProofProtoMsg;
    };
    CompressedNonExistenceProof: {
        typeUrl: string;
        encode(message: _88.CompressedNonExistenceProof, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
        fromJSON(object: any): _88.CompressedNonExistenceProof;
        fromPartial(object: Partial<_88.CompressedNonExistenceProof>): _88.CompressedNonExistenceProof;
        fromAmino(object: _88.CompressedNonExistenceProofAmino): _88.CompressedNonExistenceProof;
        toAmino(message: _88.CompressedNonExistenceProof): _88.CompressedNonExistenceProofAmino;
        fromAminoMsg(object: _88.CompressedNonExistenceProofAminoMsg): _88.CompressedNonExistenceProof;
        fromProtoMsg(message: _88.CompressedNonExistenceProofProtoMsg): _88.CompressedNonExistenceProof;
        toProto(message: _88.CompressedNonExistenceProof): Uint8Array;
        toProtoMsg(message: _88.CompressedNonExistenceProof): _88.CompressedNonExistenceProofProtoMsg;
    };
};
