import { Any, AnyProtoMsg, AnyAmino, AnySDKType } from "../../../google/protobuf/any";
import { TextProposal, TextProposalProtoMsg, TextProposalSDKType } from "../../../cosmos/gov/v1beta1/gov";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { Pubkey } from "@cosmjs/amino";
export declare enum CertificateType {
    CERT_TYPE_UNSPECIFIED = 0,
    CERT_TYPE_COMPILATION = 1,
    CERT_TYPE_AUDITING = 2,
    CERT_TYPE_PROOF = 3,
    CERT_TYPE_ORACLE_OPERATOR = 4,
    CERT_TYPE_SHIELD_POOL_CREATOR = 5,
    CERT_TYPE_IDENTITY = 6,
    CERT_TYPE_GENERAL = 7,
    CERT_TYPE_BOUNTY_ADMIN = 8,
    UNRECOGNIZED = -1
}
export declare const CertificateTypeSDKType: typeof CertificateType;
export declare const CertificateTypeAmino: typeof CertificateType;
export declare function certificateTypeFromJSON(object: any): CertificateType;
export declare function certificateTypeToJSON(object: CertificateType): string;
export interface Certifier {
    address: string;
    alias: string;
    proposer: string;
    description: string;
}
export interface CertifierProtoMsg {
    typeUrl: "/shentu.cert.v1alpha1.Certifier";
    value: Uint8Array;
}
export interface CertifierAmino {
    address?: string;
    alias?: string;
    proposer?: string;
    description?: string;
}
export interface CertifierAminoMsg {
    type: "/shentu.cert.v1alpha1.Certifier";
    value: CertifierAmino;
}
export interface CertifierSDKType {
    address: string;
    alias: string;
    proposer: string;
    description: string;
}
export interface CompilationContent {
    compiler: string;
    bytecodeHash: string;
}
export interface CompilationContentProtoMsg {
    typeUrl: "/shentu.cert.v1alpha1.CompilationContent";
    value: Uint8Array;
}
export interface CompilationContentAmino {
    compiler?: string;
    bytecode_hash?: string;
}
export interface CompilationContentAminoMsg {
    type: "/shentu.cert.v1alpha1.CompilationContent";
    value: CompilationContentAmino;
}
export interface CompilationContentSDKType {
    compiler: string;
    bytecode_hash: string;
}
export interface Certificate {
    certificateId: bigint;
    content?: (Compilation & Auditing & Proof & OracleOperator & ShieldPoolCreator & Identity & General & BountyAdmin & TextProposal & Any) | undefined;
    compilationContent?: CompilationContent;
    description: string;
    certifier: string;
}
export interface CertificateProtoMsg {
    typeUrl: "/shentu.cert.v1alpha1.Certificate";
    value: Uint8Array;
}
export type CertificateEncoded = Omit<Certificate, "content"> & {
    content?: CompilationProtoMsg | AuditingProtoMsg | ProofProtoMsg | OracleOperatorProtoMsg | ShieldPoolCreatorProtoMsg | IdentityProtoMsg | GeneralProtoMsg | BountyAdminProtoMsg | TextProposalProtoMsg | AnyProtoMsg | undefined;
};
export interface CertificateAmino {
    certificate_id?: string;
    content?: AnyAmino;
    compilation_content?: CompilationContentAmino;
    description?: string;
    certifier?: string;
}
export interface CertificateAminoMsg {
    type: "/shentu.cert.v1alpha1.Certificate";
    value: CertificateAmino;
}
export interface CertificateSDKType {
    certificate_id: bigint;
    content?: CompilationSDKType | AuditingSDKType | ProofSDKType | OracleOperatorSDKType | ShieldPoolCreatorSDKType | IdentitySDKType | GeneralSDKType | BountyAdminSDKType | TextProposalSDKType | AnySDKType | undefined;
    compilation_content?: CompilationContentSDKType;
    description: string;
    certifier: string;
}
/** Library is a type for certified libraries. */
export interface Library {
    address: string;
    publisher: string;
}
export interface LibraryProtoMsg {
    typeUrl: "/shentu.cert.v1alpha1.Library";
    value: Uint8Array;
}
/** Library is a type for certified libraries. */
export interface LibraryAmino {
    address?: string;
    publisher?: string;
}
export interface LibraryAminoMsg {
    type: "/shentu.cert.v1alpha1.Library";
    value: LibraryAmino;
}
/** Library is a type for certified libraries. */
export interface LibrarySDKType {
    address: string;
    publisher: string;
}
export interface Compilation {
    $typeUrl?: "/shentu.cert.v1alpha1.Compilation";
    content: string;
}
export interface CompilationProtoMsg {
    typeUrl: "/shentu.cert.v1alpha1.Compilation";
    value: Uint8Array;
}
export interface CompilationAmino {
    content?: string;
}
export interface CompilationAminoMsg {
    type: "/shentu.cert.v1alpha1.Compilation";
    value: CompilationAmino;
}
export interface CompilationSDKType {
    $typeUrl?: "/shentu.cert.v1alpha1.Compilation";
    content: string;
}
export interface Auditing {
    $typeUrl?: "/shentu.cert.v1alpha1.Auditing";
    content: string;
}
export interface AuditingProtoMsg {
    typeUrl: "/shentu.cert.v1alpha1.Auditing";
    value: Uint8Array;
}
export interface AuditingAmino {
    content?: string;
}
export interface AuditingAminoMsg {
    type: "/shentu.cert.v1alpha1.Auditing";
    value: AuditingAmino;
}
export interface AuditingSDKType {
    $typeUrl?: "/shentu.cert.v1alpha1.Auditing";
    content: string;
}
export interface Proof {
    $typeUrl?: "/shentu.cert.v1alpha1.Proof";
    content: string;
}
export interface ProofProtoMsg {
    typeUrl: "/shentu.cert.v1alpha1.Proof";
    value: Uint8Array;
}
export interface ProofAmino {
    content?: string;
}
export interface ProofAminoMsg {
    type: "/shentu.cert.v1alpha1.Proof";
    value: ProofAmino;
}
export interface ProofSDKType {
    $typeUrl?: "/shentu.cert.v1alpha1.Proof";
    content: string;
}
export interface OracleOperator {
    $typeUrl?: "/shentu.cert.v1alpha1.OracleOperator";
    content: string;
}
export interface OracleOperatorProtoMsg {
    typeUrl: "/shentu.cert.v1alpha1.OracleOperator";
    value: Uint8Array;
}
export interface OracleOperatorAmino {
    content?: string;
}
export interface OracleOperatorAminoMsg {
    type: "/shentu.cert.v1alpha1.OracleOperator";
    value: OracleOperatorAmino;
}
export interface OracleOperatorSDKType {
    $typeUrl?: "/shentu.cert.v1alpha1.OracleOperator";
    content: string;
}
export interface ShieldPoolCreator {
    $typeUrl?: "/shentu.cert.v1alpha1.ShieldPoolCreator";
    content: string;
}
export interface ShieldPoolCreatorProtoMsg {
    typeUrl: "/shentu.cert.v1alpha1.ShieldPoolCreator";
    value: Uint8Array;
}
export interface ShieldPoolCreatorAmino {
    content?: string;
}
export interface ShieldPoolCreatorAminoMsg {
    type: "/shentu.cert.v1alpha1.ShieldPoolCreator";
    value: ShieldPoolCreatorAmino;
}
export interface ShieldPoolCreatorSDKType {
    $typeUrl?: "/shentu.cert.v1alpha1.ShieldPoolCreator";
    content: string;
}
export interface Identity {
    $typeUrl?: "/shentu.cert.v1alpha1.Identity";
    content: string;
}
export interface IdentityProtoMsg {
    typeUrl: "/shentu.cert.v1alpha1.Identity";
    value: Uint8Array;
}
export interface IdentityAmino {
    content?: string;
}
export interface IdentityAminoMsg {
    type: "/shentu.cert.v1alpha1.Identity";
    value: IdentityAmino;
}
export interface IdentitySDKType {
    $typeUrl?: "/shentu.cert.v1alpha1.Identity";
    content: string;
}
export interface General {
    $typeUrl?: "/shentu.cert.v1alpha1.General";
    content: string;
}
export interface GeneralProtoMsg {
    typeUrl: "/shentu.cert.v1alpha1.General";
    value: Uint8Array;
}
export interface GeneralAmino {
    content?: string;
}
export interface GeneralAminoMsg {
    type: "/shentu.cert.v1alpha1.General";
    value: GeneralAmino;
}
export interface GeneralSDKType {
    $typeUrl?: "/shentu.cert.v1alpha1.General";
    content: string;
}
export interface BountyAdmin {
    $typeUrl?: "/shentu.cert.v1alpha1.BountyAdmin";
    content: string;
}
export interface BountyAdminProtoMsg {
    typeUrl: "/shentu.cert.v1alpha1.BountyAdmin";
    value: Uint8Array;
}
export interface BountyAdminAmino {
    content?: string;
}
export interface BountyAdminAminoMsg {
    type: "/shentu.cert.v1alpha1.BountyAdmin";
    value: BountyAdminAmino;
}
export interface BountyAdminSDKType {
    $typeUrl?: "/shentu.cert.v1alpha1.BountyAdmin";
    content: string;
}
/** Platform is a genesis type for certified platform of a validator */
export interface Platform {
    validatorPubkey?: (Any) | undefined;
    description: string;
}
export interface PlatformProtoMsg {
    typeUrl: "/shentu.cert.v1alpha1.Platform";
    value: Uint8Array;
}
export type PlatformEncoded = Omit<Platform, "validatorPubkey"> & {
    validatorPubkey?: AnyProtoMsg | undefined;
};
/** Platform is a genesis type for certified platform of a validator */
export interface PlatformAmino {
    validator_pubkey?: AnyAmino;
    description?: string;
}
export interface PlatformAminoMsg {
    type: "/shentu.cert.v1alpha1.Platform";
    value: PlatformAmino;
}
/** Platform is a genesis type for certified platform of a validator */
export interface PlatformSDKType {
    validator_pubkey?: AnySDKType | undefined;
    description: string;
}
/** CertifierUpdateProposal adds or removes a certifier */
export interface CertifierUpdateProposal {
    $typeUrl?: "/shentu.cert.v1alpha1.CertifierUpdateProposal";
    title: string;
    proposer: string;
    alias: string;
    certifier: string;
    description: string;
    addOrRemove: boolean;
}
export interface CertifierUpdateProposalProtoMsg {
    typeUrl: "/shentu.cert.v1alpha1.CertifierUpdateProposal";
    value: Uint8Array;
}
/** CertifierUpdateProposal adds or removes a certifier */
export interface CertifierUpdateProposalAmino {
    title?: string;
    proposer?: string;
    alias?: string;
    certifier?: string;
    description?: string;
    add_or_remove?: boolean;
}
export interface CertifierUpdateProposalAminoMsg {
    type: "/shentu.cert.v1alpha1.CertifierUpdateProposal";
    value: CertifierUpdateProposalAmino;
}
/** CertifierUpdateProposal adds or removes a certifier */
export interface CertifierUpdateProposalSDKType {
    $typeUrl?: "/shentu.cert.v1alpha1.CertifierUpdateProposal";
    title: string;
    proposer: string;
    alias: string;
    certifier: string;
    description: string;
    add_or_remove: boolean;
}
export interface KVPair {
    key: string;
    value: string;
}
export interface KVPairProtoMsg {
    typeUrl: "/shentu.cert.v1alpha1.KVPair";
    value: Uint8Array;
}
export interface KVPairAmino {
    key?: string;
    value?: string;
}
export interface KVPairAminoMsg {
    type: "/shentu.cert.v1alpha1.KVPair";
    value: KVPairAmino;
}
export interface KVPairSDKType {
    key: string;
    value: string;
}
export declare const Certifier: {
    typeUrl: string;
    encode(message: Certifier, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): Certifier;
    fromPartial(object: Partial<Certifier>): Certifier;
    fromAmino(object: CertifierAmino): Certifier;
    toAmino(message: Certifier): CertifierAmino;
    fromAminoMsg(object: CertifierAminoMsg): Certifier;
    fromProtoMsg(message: CertifierProtoMsg): Certifier;
    toProto(message: Certifier): Uint8Array;
    toProtoMsg(message: Certifier): CertifierProtoMsg;
};
export declare const CompilationContent: {
    typeUrl: string;
    encode(message: CompilationContent, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): CompilationContent;
    fromPartial(object: Partial<CompilationContent>): CompilationContent;
    fromAmino(object: CompilationContentAmino): CompilationContent;
    toAmino(message: CompilationContent): CompilationContentAmino;
    fromAminoMsg(object: CompilationContentAminoMsg): CompilationContent;
    fromProtoMsg(message: CompilationContentProtoMsg): CompilationContent;
    toProto(message: CompilationContent): Uint8Array;
    toProtoMsg(message: CompilationContent): CompilationContentProtoMsg;
};
export declare const Certificate: {
    typeUrl: string;
    encode(message: Certificate, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): Certificate;
    fromPartial(object: Partial<Certificate>): Certificate;
    fromAmino(object: CertificateAmino): Certificate;
    toAmino(message: Certificate): CertificateAmino;
    fromAminoMsg(object: CertificateAminoMsg): Certificate;
    fromProtoMsg(message: CertificateProtoMsg): Certificate;
    toProto(message: Certificate): Uint8Array;
    toProtoMsg(message: Certificate): CertificateProtoMsg;
};
export declare const Library: {
    typeUrl: string;
    encode(message: Library, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): Library;
    fromPartial(object: Partial<Library>): Library;
    fromAmino(object: LibraryAmino): Library;
    toAmino(message: Library): LibraryAmino;
    fromAminoMsg(object: LibraryAminoMsg): Library;
    fromProtoMsg(message: LibraryProtoMsg): Library;
    toProto(message: Library): Uint8Array;
    toProtoMsg(message: Library): LibraryProtoMsg;
};
export declare const Compilation: {
    typeUrl: string;
    encode(message: Compilation, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): Compilation;
    fromPartial(object: Partial<Compilation>): Compilation;
    fromAmino(object: CompilationAmino): Compilation;
    toAmino(message: Compilation): CompilationAmino;
    fromAminoMsg(object: CompilationAminoMsg): Compilation;
    fromProtoMsg(message: CompilationProtoMsg): Compilation;
    toProto(message: Compilation): Uint8Array;
    toProtoMsg(message: Compilation): CompilationProtoMsg;
};
export declare const Auditing: {
    typeUrl: string;
    encode(message: Auditing, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): Auditing;
    fromPartial(object: Partial<Auditing>): Auditing;
    fromAmino(object: AuditingAmino): Auditing;
    toAmino(message: Auditing): AuditingAmino;
    fromAminoMsg(object: AuditingAminoMsg): Auditing;
    fromProtoMsg(message: AuditingProtoMsg): Auditing;
    toProto(message: Auditing): Uint8Array;
    toProtoMsg(message: Auditing): AuditingProtoMsg;
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
export declare const OracleOperator: {
    typeUrl: string;
    encode(message: OracleOperator, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): OracleOperator;
    fromPartial(object: Partial<OracleOperator>): OracleOperator;
    fromAmino(object: OracleOperatorAmino): OracleOperator;
    toAmino(message: OracleOperator): OracleOperatorAmino;
    fromAminoMsg(object: OracleOperatorAminoMsg): OracleOperator;
    fromProtoMsg(message: OracleOperatorProtoMsg): OracleOperator;
    toProto(message: OracleOperator): Uint8Array;
    toProtoMsg(message: OracleOperator): OracleOperatorProtoMsg;
};
export declare const ShieldPoolCreator: {
    typeUrl: string;
    encode(message: ShieldPoolCreator, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): ShieldPoolCreator;
    fromPartial(object: Partial<ShieldPoolCreator>): ShieldPoolCreator;
    fromAmino(object: ShieldPoolCreatorAmino): ShieldPoolCreator;
    toAmino(message: ShieldPoolCreator): ShieldPoolCreatorAmino;
    fromAminoMsg(object: ShieldPoolCreatorAminoMsg): ShieldPoolCreator;
    fromProtoMsg(message: ShieldPoolCreatorProtoMsg): ShieldPoolCreator;
    toProto(message: ShieldPoolCreator): Uint8Array;
    toProtoMsg(message: ShieldPoolCreator): ShieldPoolCreatorProtoMsg;
};
export declare const Identity: {
    typeUrl: string;
    encode(message: Identity, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): Identity;
    fromPartial(object: Partial<Identity>): Identity;
    fromAmino(object: IdentityAmino): Identity;
    toAmino(message: Identity): IdentityAmino;
    fromAminoMsg(object: IdentityAminoMsg): Identity;
    fromProtoMsg(message: IdentityProtoMsg): Identity;
    toProto(message: Identity): Uint8Array;
    toProtoMsg(message: Identity): IdentityProtoMsg;
};
export declare const General: {
    typeUrl: string;
    encode(message: General, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): General;
    fromPartial(object: Partial<General>): General;
    fromAmino(object: GeneralAmino): General;
    toAmino(message: General): GeneralAmino;
    fromAminoMsg(object: GeneralAminoMsg): General;
    fromProtoMsg(message: GeneralProtoMsg): General;
    toProto(message: General): Uint8Array;
    toProtoMsg(message: General): GeneralProtoMsg;
};
export declare const BountyAdmin: {
    typeUrl: string;
    encode(message: BountyAdmin, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): BountyAdmin;
    fromPartial(object: Partial<BountyAdmin>): BountyAdmin;
    fromAmino(object: BountyAdminAmino): BountyAdmin;
    toAmino(message: BountyAdmin): BountyAdminAmino;
    fromAminoMsg(object: BountyAdminAminoMsg): BountyAdmin;
    fromProtoMsg(message: BountyAdminProtoMsg): BountyAdmin;
    toProto(message: BountyAdmin): Uint8Array;
    toProtoMsg(message: BountyAdmin): BountyAdminProtoMsg;
};
export declare const Platform: {
    typeUrl: string;
    encode(message: Platform, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): Platform;
    fromPartial(object: Partial<Platform>): Platform;
    fromAmino(object: PlatformAmino): Platform;
    toAmino(message: Platform): PlatformAmino;
    fromAminoMsg(object: PlatformAminoMsg): Platform;
    fromProtoMsg(message: PlatformProtoMsg): Platform;
    toProto(message: Platform): Uint8Array;
    toProtoMsg(message: Platform): PlatformProtoMsg;
};
export declare const CertifierUpdateProposal: {
    typeUrl: string;
    encode(message: CertifierUpdateProposal, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): CertifierUpdateProposal;
    fromPartial(object: Partial<CertifierUpdateProposal>): CertifierUpdateProposal;
    fromAmino(object: CertifierUpdateProposalAmino): CertifierUpdateProposal;
    toAmino(message: CertifierUpdateProposal): CertifierUpdateProposalAmino;
    fromAminoMsg(object: CertifierUpdateProposalAminoMsg): CertifierUpdateProposal;
    fromProtoMsg(message: CertifierUpdateProposalProtoMsg): CertifierUpdateProposal;
    toProto(message: CertifierUpdateProposal): Uint8Array;
    toProtoMsg(message: CertifierUpdateProposal): CertifierUpdateProposalProtoMsg;
};
export declare const KVPair: {
    typeUrl: string;
    encode(message: KVPair, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): KVPair;
    fromPartial(object: Partial<KVPair>): KVPair;
    fromAmino(object: KVPairAmino): KVPair;
    toAmino(message: KVPair): KVPairAmino;
    fromAminoMsg(object: KVPairAminoMsg): KVPair;
    fromProtoMsg(message: KVPairProtoMsg): KVPair;
    toProto(message: KVPair): Uint8Array;
    toProtoMsg(message: KVPair): KVPairProtoMsg;
};
export declare const Content_InterfaceDecoder: (input: BinaryReader | Uint8Array) => Compilation | Auditing | Proof | OracleOperator | ShieldPoolCreator | Identity | General | BountyAdmin | TextProposal | Any;
export declare const Content_FromAmino: (content: AnyAmino) => Any;
export declare const Content_ToAmino: (content: Any) => AnyAmino;
export declare const Cosmos_cryptoPubKey_InterfaceDecoder: (input: BinaryReader | Uint8Array) => Any;
export declare const Cosmos_cryptoPubKey_FromAmino: (content: AnyAmino) => Any;
export declare const Cosmos_cryptoPubKey_ToAmino: (content: Any) => Pubkey | null;
