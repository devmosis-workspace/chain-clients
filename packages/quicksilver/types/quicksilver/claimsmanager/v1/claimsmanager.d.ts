import { ProofOps, ProofOpsAmino, ProofOpsSDKType } from "../../../tendermint/crypto/proof";
import { BinaryWriter } from "../../../binary";
export declare enum ClaimType {
    /** ClaimTypeUndefined - Undefined action (per protobuf spec) */
    ClaimTypeUndefined = 0,
    ClaimTypeLiquidToken = 1,
    ClaimTypeOsmosisPool = 2,
    ClaimTypeCrescentPool = 3,
    ClaimTypeSifchainPool = 4,
    ClaimTypeUmeeToken = 5,
    UNRECOGNIZED = -1
}
export declare const ClaimTypeSDKType: typeof ClaimType;
export declare const ClaimTypeAmino: typeof ClaimType;
export declare function claimTypeFromJSON(object: any): ClaimType;
export declare function claimTypeToJSON(object: ClaimType): string;
/** Params holds parameters for the claimsmanager module. */
export interface Params {
}
export interface ParamsProtoMsg {
    typeUrl: "/quicksilver.claimsmanager.v1.Params";
    value: Uint8Array;
}
/** Params holds parameters for the claimsmanager module. */
export interface ParamsAmino {
}
export interface ParamsAminoMsg {
    type: "/quicksilver.claimsmanager.v1.Params";
    value: ParamsAmino;
}
/** Params holds parameters for the claimsmanager module. */
export interface ParamsSDKType {
}
/** Claim define the users claim for holding assets within a given zone. */
export interface Claim {
    userAddress: string;
    chainId: string;
    module: ClaimType;
    sourceChainId: string;
    /** @deprecated */
    _amount: bigint;
    amount: string;
}
export interface ClaimProtoMsg {
    typeUrl: "/quicksilver.claimsmanager.v1.Claim";
    value: Uint8Array;
}
/** Claim define the users claim for holding assets within a given zone. */
export interface ClaimAmino {
    user_address?: string;
    chain_id?: string;
    module?: ClaimType;
    source_chain_id?: string;
    /** @deprecated */
    _amount?: string;
    amount?: string;
}
export interface ClaimAminoMsg {
    type: "/quicksilver.claimsmanager.v1.Claim";
    value: ClaimAmino;
}
/** Claim define the users claim for holding assets within a given zone. */
export interface ClaimSDKType {
    user_address: string;
    chain_id: string;
    module: ClaimType;
    source_chain_id: string;
    /** @deprecated */
    _amount: bigint;
    amount: string;
}
/** Proof defines a type used to cryptographically prove a claim. */
export interface Proof {
    key: Uint8Array;
    data: Uint8Array;
    proofOps?: ProofOps;
    height: bigint;
    proofType: string;
}
export interface ProofProtoMsg {
    typeUrl: "/quicksilver.claimsmanager.v1.Proof";
    value: Uint8Array;
}
/** Proof defines a type used to cryptographically prove a claim. */
export interface ProofAmino {
    key?: string;
    data?: string;
    proof_ops?: ProofOpsAmino;
    height?: string;
    proof_type?: string;
}
export interface ProofAminoMsg {
    type: "/quicksilver.claimsmanager.v1.Proof";
    value: ProofAmino;
}
/** Proof defines a type used to cryptographically prove a claim. */
export interface ProofSDKType {
    key: Uint8Array;
    data: Uint8Array;
    proof_ops?: ProofOpsSDKType;
    height: bigint;
    proof_type: string;
}
export declare const Params: {
    typeUrl: string;
    encode(_: Params, writer?: BinaryWriter): BinaryWriter;
    fromJSON(_: any): Params;
    fromPartial(_: Partial<Params>): Params;
    fromAmino(_: ParamsAmino): Params;
    toAmino(_: Params): ParamsAmino;
    fromAminoMsg(object: ParamsAminoMsg): Params;
    fromProtoMsg(message: ParamsProtoMsg): Params;
    toProto(message: Params): Uint8Array;
    toProtoMsg(message: Params): ParamsProtoMsg;
};
export declare const Claim: {
    typeUrl: string;
    encode(message: Claim, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): Claim;
    fromPartial(object: Partial<Claim>): Claim;
    fromAmino(object: ClaimAmino): Claim;
    toAmino(message: Claim): ClaimAmino;
    fromAminoMsg(object: ClaimAminoMsg): Claim;
    fromProtoMsg(message: ClaimProtoMsg): Claim;
    toProto(message: Claim): Uint8Array;
    toProtoMsg(message: Claim): ClaimProtoMsg;
};
export declare const Proof: {
    typeUrl: string;
    encode(message: Proof, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): Proof;
    fromPartial(object: Partial<Proof>): Proof;
    fromAmino(object: ProofAmino): Proof;
    toAmino(message: Proof): ProofAmino;
    fromAminoMsg(object: ProofAminoMsg): Proof;
    fromProtoMsg(message: ProofProtoMsg): Proof;
    toProto(message: Proof): Uint8Array;
    toProtoMsg(message: Proof): ProofProtoMsg;
};
