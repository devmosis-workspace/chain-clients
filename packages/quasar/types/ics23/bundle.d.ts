import * as _151 from "../proofs";
export declare const ics23: {
    hashOpFromJSON(object: any): _151.HashOp;
    hashOpToJSON(object: _151.HashOp): string;
    lengthOpFromJSON(object: any): _151.LengthOp;
    lengthOpToJSON(object: _151.LengthOp): string;
    HashOp: typeof _151.HashOp;
    HashOpSDKType: typeof _151.HashOp;
    HashOpAmino: typeof _151.HashOp;
    LengthOp: typeof _151.LengthOp;
    LengthOpSDKType: typeof _151.LengthOp;
    LengthOpAmino: typeof _151.LengthOp;
    ExistenceProof: {
        typeUrl: string;
        encode(message: _151.ExistenceProof, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
        fromJSON(object: any): _151.ExistenceProof;
        fromPartial(object: Partial<_151.ExistenceProof>): _151.ExistenceProof;
        fromAmino(object: _151.ExistenceProofAmino): _151.ExistenceProof;
        toAmino(message: _151.ExistenceProof): _151.ExistenceProofAmino;
        fromAminoMsg(object: _151.ExistenceProofAminoMsg): _151.ExistenceProof;
        fromProtoMsg(message: _151.ExistenceProofProtoMsg): _151.ExistenceProof;
        toProto(message: _151.ExistenceProof): Uint8Array;
        toProtoMsg(message: _151.ExistenceProof): _151.ExistenceProofProtoMsg;
    };
    NonExistenceProof: {
        typeUrl: string;
        encode(message: _151.NonExistenceProof, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
        fromJSON(object: any): _151.NonExistenceProof;
        fromPartial(object: Partial<_151.NonExistenceProof>): _151.NonExistenceProof;
        fromAmino(object: _151.NonExistenceProofAmino): _151.NonExistenceProof;
        toAmino(message: _151.NonExistenceProof): _151.NonExistenceProofAmino;
        fromAminoMsg(object: _151.NonExistenceProofAminoMsg): _151.NonExistenceProof;
        fromProtoMsg(message: _151.NonExistenceProofProtoMsg): _151.NonExistenceProof;
        toProto(message: _151.NonExistenceProof): Uint8Array;
        toProtoMsg(message: _151.NonExistenceProof): _151.NonExistenceProofProtoMsg;
    };
    CommitmentProof: {
        typeUrl: string;
        encode(message: _151.CommitmentProof, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
        fromJSON(object: any): _151.CommitmentProof;
        fromPartial(object: Partial<_151.CommitmentProof>): _151.CommitmentProof;
        fromAmino(object: _151.CommitmentProofAmino): _151.CommitmentProof;
        toAmino(message: _151.CommitmentProof): _151.CommitmentProofAmino;
        fromAminoMsg(object: _151.CommitmentProofAminoMsg): _151.CommitmentProof;
        fromProtoMsg(message: _151.CommitmentProofProtoMsg): _151.CommitmentProof;
        toProto(message: _151.CommitmentProof): Uint8Array;
        toProtoMsg(message: _151.CommitmentProof): _151.CommitmentProofProtoMsg;
    };
    LeafOp: {
        typeUrl: string;
        encode(message: _151.LeafOp, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
        fromJSON(object: any): _151.LeafOp;
        fromPartial(object: Partial<_151.LeafOp>): _151.LeafOp;
        fromAmino(object: _151.LeafOpAmino): _151.LeafOp;
        toAmino(message: _151.LeafOp): _151.LeafOpAmino;
        fromAminoMsg(object: _151.LeafOpAminoMsg): _151.LeafOp;
        fromProtoMsg(message: _151.LeafOpProtoMsg): _151.LeafOp;
        toProto(message: _151.LeafOp): Uint8Array;
        toProtoMsg(message: _151.LeafOp): _151.LeafOpProtoMsg;
    };
    InnerOp: {
        typeUrl: string;
        encode(message: _151.InnerOp, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
        fromJSON(object: any): _151.InnerOp;
        fromPartial(object: Partial<_151.InnerOp>): _151.InnerOp;
        fromAmino(object: _151.InnerOpAmino): _151.InnerOp;
        toAmino(message: _151.InnerOp): _151.InnerOpAmino;
        fromAminoMsg(object: _151.InnerOpAminoMsg): _151.InnerOp;
        fromProtoMsg(message: _151.InnerOpProtoMsg): _151.InnerOp;
        toProto(message: _151.InnerOp): Uint8Array;
        toProtoMsg(message: _151.InnerOp): _151.InnerOpProtoMsg;
    };
    ProofSpec: {
        typeUrl: string;
        encode(message: _151.ProofSpec, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
        fromJSON(object: any): _151.ProofSpec;
        fromPartial(object: Partial<_151.ProofSpec>): _151.ProofSpec;
        fromAmino(object: _151.ProofSpecAmino): _151.ProofSpec;
        toAmino(message: _151.ProofSpec): _151.ProofSpecAmino;
        fromAminoMsg(object: _151.ProofSpecAminoMsg): _151.ProofSpec;
        fromProtoMsg(message: _151.ProofSpecProtoMsg): _151.ProofSpec;
        toProto(message: _151.ProofSpec): Uint8Array;
        toProtoMsg(message: _151.ProofSpec): _151.ProofSpecProtoMsg;
    };
    InnerSpec: {
        typeUrl: string;
        encode(message: _151.InnerSpec, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
        fromJSON(object: any): _151.InnerSpec;
        fromPartial(object: Partial<_151.InnerSpec>): _151.InnerSpec;
        fromAmino(object: _151.InnerSpecAmino): _151.InnerSpec;
        toAmino(message: _151.InnerSpec): _151.InnerSpecAmino;
        fromAminoMsg(object: _151.InnerSpecAminoMsg): _151.InnerSpec;
        fromProtoMsg(message: _151.InnerSpecProtoMsg): _151.InnerSpec;
        toProto(message: _151.InnerSpec): Uint8Array;
        toProtoMsg(message: _151.InnerSpec): _151.InnerSpecProtoMsg;
    };
    BatchProof: {
        typeUrl: string;
        encode(message: _151.BatchProof, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
        fromJSON(object: any): _151.BatchProof;
        fromPartial(object: Partial<_151.BatchProof>): _151.BatchProof;
        fromAmino(object: _151.BatchProofAmino): _151.BatchProof;
        toAmino(message: _151.BatchProof): _151.BatchProofAmino;
        fromAminoMsg(object: _151.BatchProofAminoMsg): _151.BatchProof;
        fromProtoMsg(message: _151.BatchProofProtoMsg): _151.BatchProof;
        toProto(message: _151.BatchProof): Uint8Array;
        toProtoMsg(message: _151.BatchProof): _151.BatchProofProtoMsg;
    };
    BatchEntry: {
        typeUrl: string;
        encode(message: _151.BatchEntry, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
        fromJSON(object: any): _151.BatchEntry;
        fromPartial(object: Partial<_151.BatchEntry>): _151.BatchEntry;
        fromAmino(object: _151.BatchEntryAmino): _151.BatchEntry;
        toAmino(message: _151.BatchEntry): _151.BatchEntryAmino;
        fromAminoMsg(object: _151.BatchEntryAminoMsg): _151.BatchEntry;
        fromProtoMsg(message: _151.BatchEntryProtoMsg): _151.BatchEntry;
        toProto(message: _151.BatchEntry): Uint8Array;
        toProtoMsg(message: _151.BatchEntry): _151.BatchEntryProtoMsg;
    };
    CompressedBatchProof: {
        typeUrl: string;
        encode(message: _151.CompressedBatchProof, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
        fromJSON(object: any): _151.CompressedBatchProof;
        fromPartial(object: Partial<_151.CompressedBatchProof>): _151.CompressedBatchProof;
        fromAmino(object: _151.CompressedBatchProofAmino): _151.CompressedBatchProof;
        toAmino(message: _151.CompressedBatchProof): _151.CompressedBatchProofAmino;
        fromAminoMsg(object: _151.CompressedBatchProofAminoMsg): _151.CompressedBatchProof;
        fromProtoMsg(message: _151.CompressedBatchProofProtoMsg): _151.CompressedBatchProof;
        toProto(message: _151.CompressedBatchProof): Uint8Array;
        toProtoMsg(message: _151.CompressedBatchProof): _151.CompressedBatchProofProtoMsg;
    };
    CompressedBatchEntry: {
        typeUrl: string;
        encode(message: _151.CompressedBatchEntry, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
        fromJSON(object: any): _151.CompressedBatchEntry;
        fromPartial(object: Partial<_151.CompressedBatchEntry>): _151.CompressedBatchEntry;
        fromAmino(object: _151.CompressedBatchEntryAmino): _151.CompressedBatchEntry;
        toAmino(message: _151.CompressedBatchEntry): _151.CompressedBatchEntryAmino;
        fromAminoMsg(object: _151.CompressedBatchEntryAminoMsg): _151.CompressedBatchEntry;
        fromProtoMsg(message: _151.CompressedBatchEntryProtoMsg): _151.CompressedBatchEntry;
        toProto(message: _151.CompressedBatchEntry): Uint8Array;
        toProtoMsg(message: _151.CompressedBatchEntry): _151.CompressedBatchEntryProtoMsg;
    };
    CompressedExistenceProof: {
        typeUrl: string;
        encode(message: _151.CompressedExistenceProof, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
        fromJSON(object: any): _151.CompressedExistenceProof;
        fromPartial(object: Partial<_151.CompressedExistenceProof>): _151.CompressedExistenceProof;
        fromAmino(object: _151.CompressedExistenceProofAmino): _151.CompressedExistenceProof;
        toAmino(message: _151.CompressedExistenceProof): _151.CompressedExistenceProofAmino;
        fromAminoMsg(object: _151.CompressedExistenceProofAminoMsg): _151.CompressedExistenceProof;
        fromProtoMsg(message: _151.CompressedExistenceProofProtoMsg): _151.CompressedExistenceProof;
        toProto(message: _151.CompressedExistenceProof): Uint8Array;
        toProtoMsg(message: _151.CompressedExistenceProof): _151.CompressedExistenceProofProtoMsg;
    };
    CompressedNonExistenceProof: {
        typeUrl: string;
        encode(message: _151.CompressedNonExistenceProof, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
        fromJSON(object: any): _151.CompressedNonExistenceProof;
        fromPartial(object: Partial<_151.CompressedNonExistenceProof>): _151.CompressedNonExistenceProof;
        fromAmino(object: _151.CompressedNonExistenceProofAmino): _151.CompressedNonExistenceProof;
        toAmino(message: _151.CompressedNonExistenceProof): _151.CompressedNonExistenceProofAmino;
        fromAminoMsg(object: _151.CompressedNonExistenceProofAminoMsg): _151.CompressedNonExistenceProof;
        fromProtoMsg(message: _151.CompressedNonExistenceProofProtoMsg): _151.CompressedNonExistenceProof;
        toProto(message: _151.CompressedNonExistenceProof): Uint8Array;
        toProtoMsg(message: _151.CompressedNonExistenceProof): _151.CompressedNonExistenceProofProtoMsg;
    };
};
