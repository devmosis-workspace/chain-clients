import { Any, AnyProtoMsg, AnyAmino, AnySDKType } from "../../../google/protobuf/any";
import { Compilation, CompilationProtoMsg, CompilationSDKType, Auditing, AuditingProtoMsg, AuditingSDKType, Proof, ProofProtoMsg, ProofSDKType, OracleOperator, OracleOperatorProtoMsg, OracleOperatorSDKType, ShieldPoolCreator, ShieldPoolCreatorProtoMsg, ShieldPoolCreatorSDKType, Identity, IdentityProtoMsg, IdentitySDKType, General, GeneralProtoMsg, GeneralSDKType, BountyAdmin, BountyAdminProtoMsg, BountyAdminSDKType } from "./cert";
import { TextProposal, TextProposalProtoMsg, TextProposalSDKType } from "../../../cosmos/gov/v1beta1/gov";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { Pubkey } from "@cosmjs/amino";
/** MsgProposeCertifier is the message for proposing new certifier. */
export interface MsgProposeCertifier {
    proposer: string;
    alias: string;
    certifier: string;
    description: string;
}
export interface MsgProposeCertifierProtoMsg {
    typeUrl: "/shentu.cert.v1alpha1.MsgProposeCertifier";
    value: Uint8Array;
}
/** MsgProposeCertifier is the message for proposing new certifier. */
export interface MsgProposeCertifierAmino {
    proposer?: string;
    alias?: string;
    certifier?: string;
    description?: string;
}
export interface MsgProposeCertifierAminoMsg {
    type: "/shentu.cert.v1alpha1.MsgProposeCertifier";
    value: MsgProposeCertifierAmino;
}
/** MsgProposeCertifier is the message for proposing new certifier. */
export interface MsgProposeCertifierSDKType {
    proposer: string;
    alias: string;
    certifier: string;
    description: string;
}
export interface MsgProposeCertifierResponse {
}
export interface MsgProposeCertifierResponseProtoMsg {
    typeUrl: "/shentu.cert.v1alpha1.MsgProposeCertifierResponse";
    value: Uint8Array;
}
export interface MsgProposeCertifierResponseAmino {
}
export interface MsgProposeCertifierResponseAminoMsg {
    type: "/shentu.cert.v1alpha1.MsgProposeCertifierResponse";
    value: MsgProposeCertifierResponseAmino;
}
export interface MsgProposeCertifierResponseSDKType {
}
/** MsgCertifyGeneral is the message for issuing a general certificate. */
export interface MsgIssueCertificate {
    content?: (Compilation & Auditing & Proof & OracleOperator & ShieldPoolCreator & Identity & General & BountyAdmin & TextProposal & Any) | undefined;
    compiler: string;
    bytecodeHash: string;
    description: string;
    certifier: string;
}
export interface MsgIssueCertificateProtoMsg {
    typeUrl: "/shentu.cert.v1alpha1.MsgIssueCertificate";
    value: Uint8Array;
}
export type MsgIssueCertificateEncoded = Omit<MsgIssueCertificate, "content"> & {
    content?: CompilationProtoMsg | AuditingProtoMsg | ProofProtoMsg | OracleOperatorProtoMsg | ShieldPoolCreatorProtoMsg | IdentityProtoMsg | GeneralProtoMsg | BountyAdminProtoMsg | TextProposalProtoMsg | AnyProtoMsg | undefined;
};
/** MsgCertifyGeneral is the message for issuing a general certificate. */
export interface MsgIssueCertificateAmino {
    content?: AnyAmino;
    compiler?: string;
    bytecode_hash?: string;
    description?: string;
    certifier?: string;
}
export interface MsgIssueCertificateAminoMsg {
    type: "/shentu.cert.v1alpha1.MsgIssueCertificate";
    value: MsgIssueCertificateAmino;
}
/** MsgCertifyGeneral is the message for issuing a general certificate. */
export interface MsgIssueCertificateSDKType {
    content?: CompilationSDKType | AuditingSDKType | ProofSDKType | OracleOperatorSDKType | ShieldPoolCreatorSDKType | IdentitySDKType | GeneralSDKType | BountyAdminSDKType | TextProposalSDKType | AnySDKType | undefined;
    compiler: string;
    bytecode_hash: string;
    description: string;
    certifier: string;
}
export interface MsgIssueCertificateResponse {
}
export interface MsgIssueCertificateResponseProtoMsg {
    typeUrl: "/shentu.cert.v1alpha1.MsgIssueCertificateResponse";
    value: Uint8Array;
}
export interface MsgIssueCertificateResponseAmino {
}
export interface MsgIssueCertificateResponseAminoMsg {
    type: "/shentu.cert.v1alpha1.MsgIssueCertificateResponse";
    value: MsgIssueCertificateResponseAmino;
}
export interface MsgIssueCertificateResponseSDKType {
}
/** MsgRevokeCertificate returns a certificate revoking operation. */
export interface MsgRevokeCertificate {
    revoker: string;
    id: bigint;
    description: string;
}
export interface MsgRevokeCertificateProtoMsg {
    typeUrl: "/shentu.cert.v1alpha1.MsgRevokeCertificate";
    value: Uint8Array;
}
/** MsgRevokeCertificate returns a certificate revoking operation. */
export interface MsgRevokeCertificateAmino {
    revoker?: string;
    id?: string;
    description?: string;
}
export interface MsgRevokeCertificateAminoMsg {
    type: "/shentu.cert.v1alpha1.MsgRevokeCertificate";
    value: MsgRevokeCertificateAmino;
}
/** MsgRevokeCertificate returns a certificate revoking operation. */
export interface MsgRevokeCertificateSDKType {
    revoker: string;
    id: bigint;
    description: string;
}
export interface MsgRevokeCertificateResponse {
}
export interface MsgRevokeCertificateResponseProtoMsg {
    typeUrl: "/shentu.cert.v1alpha1.MsgRevokeCertificateResponse";
    value: Uint8Array;
}
export interface MsgRevokeCertificateResponseAmino {
}
export interface MsgRevokeCertificateResponseAminoMsg {
    type: "/shentu.cert.v1alpha1.MsgRevokeCertificateResponse";
    value: MsgRevokeCertificateResponseAmino;
}
export interface MsgRevokeCertificateResponseSDKType {
}
/** MsgCertifyPlatform is the message for certifying a validator's host platform. */
export interface MsgCertifyPlatform {
    certifier: string;
    validatorPubkey?: (Any) | undefined;
    platform: string;
}
export interface MsgCertifyPlatformProtoMsg {
    typeUrl: "/shentu.cert.v1alpha1.MsgCertifyPlatform";
    value: Uint8Array;
}
export type MsgCertifyPlatformEncoded = Omit<MsgCertifyPlatform, "validatorPubkey"> & {
    validatorPubkey?: AnyProtoMsg | undefined;
};
/** MsgCertifyPlatform is the message for certifying a validator's host platform. */
export interface MsgCertifyPlatformAmino {
    certifier?: string;
    validator_pubkey?: AnyAmino;
    platform?: string;
}
export interface MsgCertifyPlatformAminoMsg {
    type: "/shentu.cert.v1alpha1.MsgCertifyPlatform";
    value: MsgCertifyPlatformAmino;
}
/** MsgCertifyPlatform is the message for certifying a validator's host platform. */
export interface MsgCertifyPlatformSDKType {
    certifier: string;
    validator_pubkey?: AnySDKType | undefined;
    platform: string;
}
export interface MsgCertifyPlatformResponse {
}
export interface MsgCertifyPlatformResponseProtoMsg {
    typeUrl: "/shentu.cert.v1alpha1.MsgCertifyPlatformResponse";
    value: Uint8Array;
}
export interface MsgCertifyPlatformResponseAmino {
}
export interface MsgCertifyPlatformResponseAminoMsg {
    type: "/shentu.cert.v1alpha1.MsgCertifyPlatformResponse";
    value: MsgCertifyPlatformResponseAmino;
}
export interface MsgCertifyPlatformResponseSDKType {
}
export declare const MsgProposeCertifier: {
    typeUrl: string;
    encode(message: MsgProposeCertifier, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): MsgProposeCertifier;
    fromPartial(object: Partial<MsgProposeCertifier>): MsgProposeCertifier;
    fromAmino(object: MsgProposeCertifierAmino): MsgProposeCertifier;
    toAmino(message: MsgProposeCertifier): MsgProposeCertifierAmino;
    fromAminoMsg(object: MsgProposeCertifierAminoMsg): MsgProposeCertifier;
    fromProtoMsg(message: MsgProposeCertifierProtoMsg): MsgProposeCertifier;
    toProto(message: MsgProposeCertifier): Uint8Array;
    toProtoMsg(message: MsgProposeCertifier): MsgProposeCertifierProtoMsg;
};
export declare const MsgProposeCertifierResponse: {
    typeUrl: string;
    encode(_: MsgProposeCertifierResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(_: any): MsgProposeCertifierResponse;
    fromPartial(_: Partial<MsgProposeCertifierResponse>): MsgProposeCertifierResponse;
    fromAmino(_: MsgProposeCertifierResponseAmino): MsgProposeCertifierResponse;
    toAmino(_: MsgProposeCertifierResponse): MsgProposeCertifierResponseAmino;
    fromAminoMsg(object: MsgProposeCertifierResponseAminoMsg): MsgProposeCertifierResponse;
    fromProtoMsg(message: MsgProposeCertifierResponseProtoMsg): MsgProposeCertifierResponse;
    toProto(message: MsgProposeCertifierResponse): Uint8Array;
    toProtoMsg(message: MsgProposeCertifierResponse): MsgProposeCertifierResponseProtoMsg;
};
export declare const MsgIssueCertificate: {
    typeUrl: string;
    encode(message: MsgIssueCertificate, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): MsgIssueCertificate;
    fromPartial(object: Partial<MsgIssueCertificate>): MsgIssueCertificate;
    fromAmino(object: MsgIssueCertificateAmino): MsgIssueCertificate;
    toAmino(message: MsgIssueCertificate): MsgIssueCertificateAmino;
    fromAminoMsg(object: MsgIssueCertificateAminoMsg): MsgIssueCertificate;
    fromProtoMsg(message: MsgIssueCertificateProtoMsg): MsgIssueCertificate;
    toProto(message: MsgIssueCertificate): Uint8Array;
    toProtoMsg(message: MsgIssueCertificate): MsgIssueCertificateProtoMsg;
};
export declare const MsgIssueCertificateResponse: {
    typeUrl: string;
    encode(_: MsgIssueCertificateResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(_: any): MsgIssueCertificateResponse;
    fromPartial(_: Partial<MsgIssueCertificateResponse>): MsgIssueCertificateResponse;
    fromAmino(_: MsgIssueCertificateResponseAmino): MsgIssueCertificateResponse;
    toAmino(_: MsgIssueCertificateResponse): MsgIssueCertificateResponseAmino;
    fromAminoMsg(object: MsgIssueCertificateResponseAminoMsg): MsgIssueCertificateResponse;
    fromProtoMsg(message: MsgIssueCertificateResponseProtoMsg): MsgIssueCertificateResponse;
    toProto(message: MsgIssueCertificateResponse): Uint8Array;
    toProtoMsg(message: MsgIssueCertificateResponse): MsgIssueCertificateResponseProtoMsg;
};
export declare const MsgRevokeCertificate: {
    typeUrl: string;
    encode(message: MsgRevokeCertificate, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): MsgRevokeCertificate;
    fromPartial(object: Partial<MsgRevokeCertificate>): MsgRevokeCertificate;
    fromAmino(object: MsgRevokeCertificateAmino): MsgRevokeCertificate;
    toAmino(message: MsgRevokeCertificate): MsgRevokeCertificateAmino;
    fromAminoMsg(object: MsgRevokeCertificateAminoMsg): MsgRevokeCertificate;
    fromProtoMsg(message: MsgRevokeCertificateProtoMsg): MsgRevokeCertificate;
    toProto(message: MsgRevokeCertificate): Uint8Array;
    toProtoMsg(message: MsgRevokeCertificate): MsgRevokeCertificateProtoMsg;
};
export declare const MsgRevokeCertificateResponse: {
    typeUrl: string;
    encode(_: MsgRevokeCertificateResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(_: any): MsgRevokeCertificateResponse;
    fromPartial(_: Partial<MsgRevokeCertificateResponse>): MsgRevokeCertificateResponse;
    fromAmino(_: MsgRevokeCertificateResponseAmino): MsgRevokeCertificateResponse;
    toAmino(_: MsgRevokeCertificateResponse): MsgRevokeCertificateResponseAmino;
    fromAminoMsg(object: MsgRevokeCertificateResponseAminoMsg): MsgRevokeCertificateResponse;
    fromProtoMsg(message: MsgRevokeCertificateResponseProtoMsg): MsgRevokeCertificateResponse;
    toProto(message: MsgRevokeCertificateResponse): Uint8Array;
    toProtoMsg(message: MsgRevokeCertificateResponse): MsgRevokeCertificateResponseProtoMsg;
};
export declare const MsgCertifyPlatform: {
    typeUrl: string;
    encode(message: MsgCertifyPlatform, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): MsgCertifyPlatform;
    fromPartial(object: Partial<MsgCertifyPlatform>): MsgCertifyPlatform;
    fromAmino(object: MsgCertifyPlatformAmino): MsgCertifyPlatform;
    toAmino(message: MsgCertifyPlatform): MsgCertifyPlatformAmino;
    fromAminoMsg(object: MsgCertifyPlatformAminoMsg): MsgCertifyPlatform;
    fromProtoMsg(message: MsgCertifyPlatformProtoMsg): MsgCertifyPlatform;
    toProto(message: MsgCertifyPlatform): Uint8Array;
    toProtoMsg(message: MsgCertifyPlatform): MsgCertifyPlatformProtoMsg;
};
export declare const MsgCertifyPlatformResponse: {
    typeUrl: string;
    encode(_: MsgCertifyPlatformResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(_: any): MsgCertifyPlatformResponse;
    fromPartial(_: Partial<MsgCertifyPlatformResponse>): MsgCertifyPlatformResponse;
    fromAmino(_: MsgCertifyPlatformResponseAmino): MsgCertifyPlatformResponse;
    toAmino(_: MsgCertifyPlatformResponse): MsgCertifyPlatformResponseAmino;
    fromAminoMsg(object: MsgCertifyPlatformResponseAminoMsg): MsgCertifyPlatformResponse;
    fromProtoMsg(message: MsgCertifyPlatformResponseProtoMsg): MsgCertifyPlatformResponse;
    toProto(message: MsgCertifyPlatformResponse): Uint8Array;
    toProtoMsg(message: MsgCertifyPlatformResponse): MsgCertifyPlatformResponseProtoMsg;
};
export declare const Content_InterfaceDecoder: (input: BinaryReader | Uint8Array) => Compilation | Auditing | Proof | OracleOperator | ShieldPoolCreator | Identity | General | BountyAdmin | TextProposal | Any;
export declare const Content_FromAmino: (content: AnyAmino) => Any;
export declare const Content_ToAmino: (content: Any) => AnyAmino;
export declare const Cosmos_cryptoPubKey_InterfaceDecoder: (input: BinaryReader | Uint8Array) => Any;
export declare const Cosmos_cryptoPubKey_FromAmino: (content: AnyAmino) => Any;
export declare const Cosmos_cryptoPubKey_ToAmino: (content: Any) => Pubkey | null;
