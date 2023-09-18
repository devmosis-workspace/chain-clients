import * as _85 from "../confio/proofs";
export declare const ics23: {
    hashOpFromJSON(object: any): _85.HashOp;
    hashOpToJSON(object: _85.HashOp): string;
    lengthOpFromJSON(object: any): _85.LengthOp;
    lengthOpToJSON(object: _85.LengthOp): string;
    HashOp: typeof _85.HashOp;
    HashOpSDKType: typeof _85.HashOp;
    HashOpAmino: typeof _85.HashOp;
    LengthOp: typeof _85.LengthOp;
    LengthOpSDKType: typeof _85.LengthOp;
    LengthOpAmino: typeof _85.LengthOp;
    ExistenceProof: {
        typeUrl: string;
        encode(message: _85.ExistenceProof, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
        fromJSON(object: any): _85.ExistenceProof;
        fromPartial(object: Partial<_85.ExistenceProof>): _85.ExistenceProof;
        fromAmino(object: _85.ExistenceProofAmino): _85.ExistenceProof;
        toAmino(message: _85.ExistenceProof): _85.ExistenceProofAmino;
        fromAminoMsg(object: _85.ExistenceProofAminoMsg): _85.ExistenceProof;
        fromProtoMsg(message: _85.ExistenceProofProtoMsg): _85.ExistenceProof;
        toProto(message: _85.ExistenceProof): Uint8Array;
        toProtoMsg(message: _85.ExistenceProof): _85.ExistenceProofProtoMsg;
    };
    NonExistenceProof: {
        typeUrl: string;
        encode(message: _85.NonExistenceProof, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
        fromJSON(object: any): _85.NonExistenceProof;
        fromPartial(object: Partial<_85.NonExistenceProof>): _85.NonExistenceProof;
        fromAmino(object: _85.NonExistenceProofAmino): _85.NonExistenceProof;
        toAmino(message: _85.NonExistenceProof): _85.NonExistenceProofAmino;
        fromAminoMsg(object: _85.NonExistenceProofAminoMsg): _85.NonExistenceProof;
        fromProtoMsg(message: _85.NonExistenceProofProtoMsg): _85.NonExistenceProof;
        toProto(message: _85.NonExistenceProof): Uint8Array;
        toProtoMsg(message: _85.NonExistenceProof): _85.NonExistenceProofProtoMsg;
    };
    CommitmentProof: {
        typeUrl: string;
        encode(message: _85.CommitmentProof, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
        fromJSON(object: any): _85.CommitmentProof;
        fromPartial(object: Partial<_85.CommitmentProof>): _85.CommitmentProof;
        fromAmino(object: _85.CommitmentProofAmino): _85.CommitmentProof;
        toAmino(message: _85.CommitmentProof): _85.CommitmentProofAmino;
        fromAminoMsg(object: _85.CommitmentProofAminoMsg): _85.CommitmentProof;
        fromProtoMsg(message: _85.CommitmentProofProtoMsg): _85.CommitmentProof;
        toProto(message: _85.CommitmentProof): Uint8Array;
        toProtoMsg(message: _85.CommitmentProof): _85.CommitmentProofProtoMsg;
    };
    LeafOp: {
        typeUrl: string;
        encode(message: _85.LeafOp, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
        fromJSON(object: any): _85.LeafOp;
        fromPartial(object: Partial<_85.LeafOp>): _85.LeafOp;
        fromAmino(object: _85.LeafOpAmino): _85.LeafOp;
        toAmino(message: _85.LeafOp): _85.LeafOpAmino;
        fromAminoMsg(object: _85.LeafOpAminoMsg): _85.LeafOp;
        fromProtoMsg(message: _85.LeafOpProtoMsg): _85.LeafOp;
        toProto(message: _85.LeafOp): Uint8Array;
        toProtoMsg(message: _85.LeafOp): _85.LeafOpProtoMsg;
    };
    InnerOp: {
        typeUrl: string;
        encode(message: _85.InnerOp, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
        fromJSON(object: any): _85.InnerOp;
        fromPartial(object: Partial<_85.InnerOp>): _85.InnerOp;
        fromAmino(object: _85.InnerOpAmino): _85.InnerOp;
        toAmino(message: _85.InnerOp): _85.InnerOpAmino;
        fromAminoMsg(object: _85.InnerOpAminoMsg): _85.InnerOp;
        fromProtoMsg(message: _85.InnerOpProtoMsg): _85.InnerOp;
        toProto(message: _85.InnerOp): Uint8Array;
        toProtoMsg(message: _85.InnerOp): _85.InnerOpProtoMsg;
    };
    ProofSpec: {
        typeUrl: string;
        encode(message: _85.ProofSpec, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
        fromJSON(object: any): _85.ProofSpec;
        fromPartial(object: Partial<_85.ProofSpec>): _85.ProofSpec;
        fromAmino(object: _85.ProofSpecAmino): _85.ProofSpec;
        toAmino(message: _85.ProofSpec): _85.ProofSpecAmino;
        fromAminoMsg(object: _85.ProofSpecAminoMsg): _85.ProofSpec;
        fromProtoMsg(message: _85.ProofSpecProtoMsg): _85.ProofSpec;
        toProto(message: _85.ProofSpec): Uint8Array;
        toProtoMsg(message: _85.ProofSpec): _85.ProofSpecProtoMsg;
    };
    InnerSpec: {
        typeUrl: string;
        encode(message: _85.InnerSpec, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
        fromJSON(object: any): _85.InnerSpec;
        fromPartial(object: Partial<_85.InnerSpec>): _85.InnerSpec;
        fromAmino(object: _85.InnerSpecAmino): _85.InnerSpec;
        toAmino(message: _85.InnerSpec): _85.InnerSpecAmino;
        fromAminoMsg(object: _85.InnerSpecAminoMsg): _85.InnerSpec;
        fromProtoMsg(message: _85.InnerSpecProtoMsg): _85.InnerSpec;
        toProto(message: _85.InnerSpec): Uint8Array;
        toProtoMsg(message: _85.InnerSpec): _85.InnerSpecProtoMsg;
    };
    BatchProof: {
        typeUrl: string;
        encode(message: _85.BatchProof, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
        fromJSON(object: any): _85.BatchProof;
        fromPartial(object: Partial<_85.BatchProof>): _85.BatchProof;
        fromAmino(object: _85.BatchProofAmino): _85.BatchProof;
        toAmino(message: _85.BatchProof): _85.BatchProofAmino;
        fromAminoMsg(object: _85.BatchProofAminoMsg): _85.BatchProof;
        fromProtoMsg(message: _85.BatchProofProtoMsg): _85.BatchProof;
        toProto(message: _85.BatchProof): Uint8Array;
        toProtoMsg(message: _85.BatchProof): _85.BatchProofProtoMsg;
    };
    BatchEntry: {
        typeUrl: string;
        encode(message: _85.BatchEntry, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
        fromJSON(object: any): _85.BatchEntry;
        fromPartial(object: Partial<_85.BatchEntry>): _85.BatchEntry;
        fromAmino(object: _85.BatchEntryAmino): _85.BatchEntry;
        toAmino(message: _85.BatchEntry): _85.BatchEntryAmino;
        fromAminoMsg(object: _85.BatchEntryAminoMsg): _85.BatchEntry;
        fromProtoMsg(message: _85.BatchEntryProtoMsg): _85.BatchEntry;
        toProto(message: _85.BatchEntry): Uint8Array;
        toProtoMsg(message: _85.BatchEntry): _85.BatchEntryProtoMsg;
    };
    CompressedBatchProof: {
        typeUrl: string;
        encode(message: _85.CompressedBatchProof, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
        fromJSON(object: any): _85.CompressedBatchProof;
        fromPartial(object: Partial<_85.CompressedBatchProof>): _85.CompressedBatchProof;
        fromAmino(object: _85.CompressedBatchProofAmino): _85.CompressedBatchProof;
        toAmino(message: _85.CompressedBatchProof): _85.CompressedBatchProofAmino;
        fromAminoMsg(object: _85.CompressedBatchProofAminoMsg): _85.CompressedBatchProof;
        fromProtoMsg(message: _85.CompressedBatchProofProtoMsg): _85.CompressedBatchProof;
        toProto(message: _85.CompressedBatchProof): Uint8Array;
        toProtoMsg(message: _85.CompressedBatchProof): _85.CompressedBatchProofProtoMsg;
    };
    CompressedBatchEntry: {
        typeUrl: string;
        encode(message: _85.CompressedBatchEntry, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
        fromJSON(object: any): _85.CompressedBatchEntry;
        fromPartial(object: Partial<_85.CompressedBatchEntry>): _85.CompressedBatchEntry;
        fromAmino(object: _85.CompressedBatchEntryAmino): _85.CompressedBatchEntry;
        toAmino(message: _85.CompressedBatchEntry): _85.CompressedBatchEntryAmino;
        fromAminoMsg(object: _85.CompressedBatchEntryAminoMsg): _85.CompressedBatchEntry;
        fromProtoMsg(message: _85.CompressedBatchEntryProtoMsg): _85.CompressedBatchEntry;
        toProto(message: _85.CompressedBatchEntry): Uint8Array;
        toProtoMsg(message: _85.CompressedBatchEntry): _85.CompressedBatchEntryProtoMsg;
    };
    CompressedExistenceProof: {
        typeUrl: string;
        encode(message: _85.CompressedExistenceProof, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
        fromJSON(object: any): _85.CompressedExistenceProof;
        fromPartial(object: Partial<_85.CompressedExistenceProof>): _85.CompressedExistenceProof;
        fromAmino(object: _85.CompressedExistenceProofAmino): _85.CompressedExistenceProof;
        toAmino(message: _85.CompressedExistenceProof): _85.CompressedExistenceProofAmino;
        fromAminoMsg(object: _85.CompressedExistenceProofAminoMsg): _85.CompressedExistenceProof;
        fromProtoMsg(message: _85.CompressedExistenceProofProtoMsg): _85.CompressedExistenceProof;
        toProto(message: _85.CompressedExistenceProof): Uint8Array;
        toProtoMsg(message: _85.CompressedExistenceProof): _85.CompressedExistenceProofProtoMsg;
    };
    CompressedNonExistenceProof: {
        typeUrl: string;
        encode(message: _85.CompressedNonExistenceProof, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
        fromJSON(object: any): _85.CompressedNonExistenceProof;
        fromPartial(object: Partial<_85.CompressedNonExistenceProof>): _85.CompressedNonExistenceProof;
        fromAmino(object: _85.CompressedNonExistenceProofAmino): _85.CompressedNonExistenceProof;
        toAmino(message: _85.CompressedNonExistenceProof): _85.CompressedNonExistenceProofAmino;
        fromAminoMsg(object: _85.CompressedNonExistenceProofAminoMsg): _85.CompressedNonExistenceProof;
        fromProtoMsg(message: _85.CompressedNonExistenceProofProtoMsg): _85.CompressedNonExistenceProof;
        toProto(message: _85.CompressedNonExistenceProof): Uint8Array;
        toProtoMsg(message: _85.CompressedNonExistenceProof): _85.CompressedNonExistenceProofProtoMsg;
    };
};
