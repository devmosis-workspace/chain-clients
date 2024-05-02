import { Any, AnyProtoMsg, AnyAmino, AnySDKType } from "../../../google/protobuf/any";
import { TextProposal, TextProposalProtoMsg, TextProposalSDKType } from "../../../cosmos/gov/v1beta1/gov";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { isSet } from "../../../helpers";
import { encodePubkey, decodePubkey } from "@cosmjs/proto-signing";
import { Pubkey } from "@cosmjs/amino";
export enum CertificateType {
  CERT_TYPE_UNSPECIFIED = 0,
  CERT_TYPE_COMPILATION = 1,
  CERT_TYPE_AUDITING = 2,
  CERT_TYPE_PROOF = 3,
  CERT_TYPE_ORACLE_OPERATOR = 4,
  CERT_TYPE_SHIELD_POOL_CREATOR = 5,
  CERT_TYPE_IDENTITY = 6,
  CERT_TYPE_GENERAL = 7,
  CERT_TYPE_BOUNTY_ADMIN = 8,
  UNRECOGNIZED = -1,
}
export const CertificateTypeSDKType = CertificateType;
export const CertificateTypeAmino = CertificateType;
export function certificateTypeFromJSON(object: any): CertificateType {
  switch (object) {
    case 0:
    case "CERT_TYPE_UNSPECIFIED":
      return CertificateType.CERT_TYPE_UNSPECIFIED;
    case 1:
    case "CERT_TYPE_COMPILATION":
      return CertificateType.CERT_TYPE_COMPILATION;
    case 2:
    case "CERT_TYPE_AUDITING":
      return CertificateType.CERT_TYPE_AUDITING;
    case 3:
    case "CERT_TYPE_PROOF":
      return CertificateType.CERT_TYPE_PROOF;
    case 4:
    case "CERT_TYPE_ORACLE_OPERATOR":
      return CertificateType.CERT_TYPE_ORACLE_OPERATOR;
    case 5:
    case "CERT_TYPE_SHIELD_POOL_CREATOR":
      return CertificateType.CERT_TYPE_SHIELD_POOL_CREATOR;
    case 6:
    case "CERT_TYPE_IDENTITY":
      return CertificateType.CERT_TYPE_IDENTITY;
    case 7:
    case "CERT_TYPE_GENERAL":
      return CertificateType.CERT_TYPE_GENERAL;
    case 8:
    case "CERT_TYPE_BOUNTY_ADMIN":
      return CertificateType.CERT_TYPE_BOUNTY_ADMIN;
    case -1:
    case "UNRECOGNIZED":
    default:
      return CertificateType.UNRECOGNIZED;
  }
}
export function certificateTypeToJSON(object: CertificateType): string {
  switch (object) {
    case CertificateType.CERT_TYPE_UNSPECIFIED:
      return "CERT_TYPE_UNSPECIFIED";
    case CertificateType.CERT_TYPE_COMPILATION:
      return "CERT_TYPE_COMPILATION";
    case CertificateType.CERT_TYPE_AUDITING:
      return "CERT_TYPE_AUDITING";
    case CertificateType.CERT_TYPE_PROOF:
      return "CERT_TYPE_PROOF";
    case CertificateType.CERT_TYPE_ORACLE_OPERATOR:
      return "CERT_TYPE_ORACLE_OPERATOR";
    case CertificateType.CERT_TYPE_SHIELD_POOL_CREATOR:
      return "CERT_TYPE_SHIELD_POOL_CREATOR";
    case CertificateType.CERT_TYPE_IDENTITY:
      return "CERT_TYPE_IDENTITY";
    case CertificateType.CERT_TYPE_GENERAL:
      return "CERT_TYPE_GENERAL";
    case CertificateType.CERT_TYPE_BOUNTY_ADMIN:
      return "CERT_TYPE_BOUNTY_ADMIN";
    case CertificateType.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}
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
function createBaseCertifier(): Certifier {
  return {
    address: "",
    alias: "",
    proposer: "",
    description: ""
  };
}
export const Certifier = {
  typeUrl: "/shentu.cert.v1alpha1.Certifier",
  encode(message: Certifier, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    if (message.alias !== "") {
      writer.uint32(18).string(message.alias);
    }
    if (message.proposer !== "") {
      writer.uint32(26).string(message.proposer);
    }
    if (message.description !== "") {
      writer.uint32(34).string(message.description);
    }
    return writer;
  },
  fromJSON(object: any): Certifier {
    return {
      address: isSet(object.address) ? String(object.address) : "",
      alias: isSet(object.alias) ? String(object.alias) : "",
      proposer: isSet(object.proposer) ? String(object.proposer) : "",
      description: isSet(object.description) ? String(object.description) : ""
    };
  },
  fromPartial(object: Partial<Certifier>): Certifier {
    const message = createBaseCertifier();
    message.address = object.address ?? "";
    message.alias = object.alias ?? "";
    message.proposer = object.proposer ?? "";
    message.description = object.description ?? "";
    return message;
  },
  fromAmino(object: CertifierAmino): Certifier {
    const message = createBaseCertifier();
    if (object.address !== undefined && object.address !== null) {
      message.address = object.address;
    }
    if (object.alias !== undefined && object.alias !== null) {
      message.alias = object.alias;
    }
    if (object.proposer !== undefined && object.proposer !== null) {
      message.proposer = object.proposer;
    }
    if (object.description !== undefined && object.description !== null) {
      message.description = object.description;
    }
    return message;
  },
  toAmino(message: Certifier): CertifierAmino {
    const obj: any = {};
    obj.address = message.address === "" ? undefined : message.address;
    obj.alias = message.alias === "" ? undefined : message.alias;
    obj.proposer = message.proposer === "" ? undefined : message.proposer;
    obj.description = message.description === "" ? undefined : message.description;
    return obj;
  },
  fromAminoMsg(object: CertifierAminoMsg): Certifier {
    return Certifier.fromAmino(object.value);
  },
  fromProtoMsg(message: CertifierProtoMsg): Certifier {
    return Certifier.decode(message.value);
  },
  toProto(message: Certifier): Uint8Array {
    return Certifier.encode(message).finish();
  },
  toProtoMsg(message: Certifier): CertifierProtoMsg {
    return {
      typeUrl: "/shentu.cert.v1alpha1.Certifier",
      value: Certifier.encode(message).finish()
    };
  }
};
function createBaseCompilationContent(): CompilationContent {
  return {
    compiler: "",
    bytecodeHash: ""
  };
}
export const CompilationContent = {
  typeUrl: "/shentu.cert.v1alpha1.CompilationContent",
  encode(message: CompilationContent, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.compiler !== "") {
      writer.uint32(10).string(message.compiler);
    }
    if (message.bytecodeHash !== "") {
      writer.uint32(18).string(message.bytecodeHash);
    }
    return writer;
  },
  fromJSON(object: any): CompilationContent {
    return {
      compiler: isSet(object.compiler) ? String(object.compiler) : "",
      bytecodeHash: isSet(object.bytecodeHash) ? String(object.bytecodeHash) : ""
    };
  },
  fromPartial(object: Partial<CompilationContent>): CompilationContent {
    const message = createBaseCompilationContent();
    message.compiler = object.compiler ?? "";
    message.bytecodeHash = object.bytecodeHash ?? "";
    return message;
  },
  fromAmino(object: CompilationContentAmino): CompilationContent {
    const message = createBaseCompilationContent();
    if (object.compiler !== undefined && object.compiler !== null) {
      message.compiler = object.compiler;
    }
    if (object.bytecode_hash !== undefined && object.bytecode_hash !== null) {
      message.bytecodeHash = object.bytecode_hash;
    }
    return message;
  },
  toAmino(message: CompilationContent): CompilationContentAmino {
    const obj: any = {};
    obj.compiler = message.compiler === "" ? undefined : message.compiler;
    obj.bytecode_hash = message.bytecodeHash === "" ? undefined : message.bytecodeHash;
    return obj;
  },
  fromAminoMsg(object: CompilationContentAminoMsg): CompilationContent {
    return CompilationContent.fromAmino(object.value);
  },
  fromProtoMsg(message: CompilationContentProtoMsg): CompilationContent {
    return CompilationContent.decode(message.value);
  },
  toProto(message: CompilationContent): Uint8Array {
    return CompilationContent.encode(message).finish();
  },
  toProtoMsg(message: CompilationContent): CompilationContentProtoMsg {
    return {
      typeUrl: "/shentu.cert.v1alpha1.CompilationContent",
      value: CompilationContent.encode(message).finish()
    };
  }
};
function createBaseCertificate(): Certificate {
  return {
    certificateId: BigInt(0),
    content: undefined,
    compilationContent: undefined,
    description: "",
    certifier: ""
  };
}
export const Certificate = {
  typeUrl: "/shentu.cert.v1alpha1.Certificate",
  encode(message: Certificate, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.certificateId !== BigInt(0)) {
      writer.uint32(8).uint64(message.certificateId);
    }
    if (message.content !== undefined) {
      Any.encode((message.content as Any), writer.uint32(18).fork()).ldelim();
    }
    if (message.compilationContent !== undefined) {
      CompilationContent.encode(message.compilationContent, writer.uint32(26).fork()).ldelim();
    }
    if (message.description !== "") {
      writer.uint32(34).string(message.description);
    }
    if (message.certifier !== "") {
      writer.uint32(42).string(message.certifier);
    }
    return writer;
  },
  fromJSON(object: any): Certificate {
    return {
      certificateId: isSet(object.certificateId) ? BigInt(object.certificateId.toString()) : BigInt(0),
      content: isSet(object.content) ? Any.fromJSON(object.content) : undefined,
      compilationContent: isSet(object.compilationContent) ? CompilationContent.fromJSON(object.compilationContent) : undefined,
      description: isSet(object.description) ? String(object.description) : "",
      certifier: isSet(object.certifier) ? String(object.certifier) : ""
    };
  },
  fromPartial(object: Partial<Certificate>): Certificate {
    const message = createBaseCertificate();
    message.certificateId = object.certificateId !== undefined && object.certificateId !== null ? BigInt(object.certificateId.toString()) : BigInt(0);
    message.content = object.content !== undefined && object.content !== null ? Any.fromPartial(object.content) : undefined;
    message.compilationContent = object.compilationContent !== undefined && object.compilationContent !== null ? CompilationContent.fromPartial(object.compilationContent) : undefined;
    message.description = object.description ?? "";
    message.certifier = object.certifier ?? "";
    return message;
  },
  fromAmino(object: CertificateAmino): Certificate {
    const message = createBaseCertificate();
    if (object.certificate_id !== undefined && object.certificate_id !== null) {
      message.certificateId = BigInt(object.certificate_id);
    }
    if (object.content !== undefined && object.content !== null) {
      message.content = Content_FromAmino(object.content);
    }
    if (object.compilation_content !== undefined && object.compilation_content !== null) {
      message.compilationContent = CompilationContent.fromAmino(object.compilation_content);
    }
    if (object.description !== undefined && object.description !== null) {
      message.description = object.description;
    }
    if (object.certifier !== undefined && object.certifier !== null) {
      message.certifier = object.certifier;
    }
    return message;
  },
  toAmino(message: Certificate): CertificateAmino {
    const obj: any = {};
    obj.certificate_id = message.certificateId !== BigInt(0) ? message.certificateId.toString() : undefined;
    obj.content = message.content ? Content_ToAmino((message.content as Any)) : undefined;
    obj.compilation_content = message.compilationContent ? CompilationContent.toAmino(message.compilationContent) : undefined;
    obj.description = message.description === "" ? undefined : message.description;
    obj.certifier = message.certifier === "" ? undefined : message.certifier;
    return obj;
  },
  fromAminoMsg(object: CertificateAminoMsg): Certificate {
    return Certificate.fromAmino(object.value);
  },
  fromProtoMsg(message: CertificateProtoMsg): Certificate {
    return Certificate.decode(message.value);
  },
  toProto(message: Certificate): Uint8Array {
    return Certificate.encode(message).finish();
  },
  toProtoMsg(message: Certificate): CertificateProtoMsg {
    return {
      typeUrl: "/shentu.cert.v1alpha1.Certificate",
      value: Certificate.encode(message).finish()
    };
  }
};
function createBaseLibrary(): Library {
  return {
    address: "",
    publisher: ""
  };
}
export const Library = {
  typeUrl: "/shentu.cert.v1alpha1.Library",
  encode(message: Library, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    if (message.publisher !== "") {
      writer.uint32(18).string(message.publisher);
    }
    return writer;
  },
  fromJSON(object: any): Library {
    return {
      address: isSet(object.address) ? String(object.address) : "",
      publisher: isSet(object.publisher) ? String(object.publisher) : ""
    };
  },
  fromPartial(object: Partial<Library>): Library {
    const message = createBaseLibrary();
    message.address = object.address ?? "";
    message.publisher = object.publisher ?? "";
    return message;
  },
  fromAmino(object: LibraryAmino): Library {
    const message = createBaseLibrary();
    if (object.address !== undefined && object.address !== null) {
      message.address = object.address;
    }
    if (object.publisher !== undefined && object.publisher !== null) {
      message.publisher = object.publisher;
    }
    return message;
  },
  toAmino(message: Library): LibraryAmino {
    const obj: any = {};
    obj.address = message.address === "" ? undefined : message.address;
    obj.publisher = message.publisher === "" ? undefined : message.publisher;
    return obj;
  },
  fromAminoMsg(object: LibraryAminoMsg): Library {
    return Library.fromAmino(object.value);
  },
  fromProtoMsg(message: LibraryProtoMsg): Library {
    return Library.decode(message.value);
  },
  toProto(message: Library): Uint8Array {
    return Library.encode(message).finish();
  },
  toProtoMsg(message: Library): LibraryProtoMsg {
    return {
      typeUrl: "/shentu.cert.v1alpha1.Library",
      value: Library.encode(message).finish()
    };
  }
};
function createBaseCompilation(): Compilation {
  return {
    $typeUrl: "/shentu.cert.v1alpha1.Compilation",
    content: ""
  };
}
export const Compilation = {
  typeUrl: "/shentu.cert.v1alpha1.Compilation",
  encode(message: Compilation, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.content !== "") {
      writer.uint32(10).string(message.content);
    }
    return writer;
  },
  fromJSON(object: any): Compilation {
    return {
      content: isSet(object.content) ? String(object.content) : ""
    };
  },
  fromPartial(object: Partial<Compilation>): Compilation {
    const message = createBaseCompilation();
    message.content = object.content ?? "";
    return message;
  },
  fromAmino(object: CompilationAmino): Compilation {
    const message = createBaseCompilation();
    if (object.content !== undefined && object.content !== null) {
      message.content = object.content;
    }
    return message;
  },
  toAmino(message: Compilation): CompilationAmino {
    const obj: any = {};
    obj.content = message.content === "" ? undefined : message.content;
    return obj;
  },
  fromAminoMsg(object: CompilationAminoMsg): Compilation {
    return Compilation.fromAmino(object.value);
  },
  fromProtoMsg(message: CompilationProtoMsg): Compilation {
    return Compilation.decode(message.value);
  },
  toProto(message: Compilation): Uint8Array {
    return Compilation.encode(message).finish();
  },
  toProtoMsg(message: Compilation): CompilationProtoMsg {
    return {
      typeUrl: "/shentu.cert.v1alpha1.Compilation",
      value: Compilation.encode(message).finish()
    };
  }
};
function createBaseAuditing(): Auditing {
  return {
    $typeUrl: "/shentu.cert.v1alpha1.Auditing",
    content: ""
  };
}
export const Auditing = {
  typeUrl: "/shentu.cert.v1alpha1.Auditing",
  encode(message: Auditing, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.content !== "") {
      writer.uint32(10).string(message.content);
    }
    return writer;
  },
  fromJSON(object: any): Auditing {
    return {
      content: isSet(object.content) ? String(object.content) : ""
    };
  },
  fromPartial(object: Partial<Auditing>): Auditing {
    const message = createBaseAuditing();
    message.content = object.content ?? "";
    return message;
  },
  fromAmino(object: AuditingAmino): Auditing {
    const message = createBaseAuditing();
    if (object.content !== undefined && object.content !== null) {
      message.content = object.content;
    }
    return message;
  },
  toAmino(message: Auditing): AuditingAmino {
    const obj: any = {};
    obj.content = message.content === "" ? undefined : message.content;
    return obj;
  },
  fromAminoMsg(object: AuditingAminoMsg): Auditing {
    return Auditing.fromAmino(object.value);
  },
  fromProtoMsg(message: AuditingProtoMsg): Auditing {
    return Auditing.decode(message.value);
  },
  toProto(message: Auditing): Uint8Array {
    return Auditing.encode(message).finish();
  },
  toProtoMsg(message: Auditing): AuditingProtoMsg {
    return {
      typeUrl: "/shentu.cert.v1alpha1.Auditing",
      value: Auditing.encode(message).finish()
    };
  }
};
function createBaseProof(): Proof {
  return {
    $typeUrl: "/shentu.cert.v1alpha1.Proof",
    content: ""
  };
}
export const Proof = {
  typeUrl: "/shentu.cert.v1alpha1.Proof",
  encode(message: Proof, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.content !== "") {
      writer.uint32(10).string(message.content);
    }
    return writer;
  },
  fromJSON(object: any): Proof {
    return {
      content: isSet(object.content) ? String(object.content) : ""
    };
  },
  fromPartial(object: Partial<Proof>): Proof {
    const message = createBaseProof();
    message.content = object.content ?? "";
    return message;
  },
  fromAmino(object: ProofAmino): Proof {
    const message = createBaseProof();
    if (object.content !== undefined && object.content !== null) {
      message.content = object.content;
    }
    return message;
  },
  toAmino(message: Proof): ProofAmino {
    const obj: any = {};
    obj.content = message.content === "" ? undefined : message.content;
    return obj;
  },
  fromAminoMsg(object: ProofAminoMsg): Proof {
    return Proof.fromAmino(object.value);
  },
  fromProtoMsg(message: ProofProtoMsg): Proof {
    return Proof.decode(message.value);
  },
  toProto(message: Proof): Uint8Array {
    return Proof.encode(message).finish();
  },
  toProtoMsg(message: Proof): ProofProtoMsg {
    return {
      typeUrl: "/shentu.cert.v1alpha1.Proof",
      value: Proof.encode(message).finish()
    };
  }
};
function createBaseOracleOperator(): OracleOperator {
  return {
    $typeUrl: "/shentu.cert.v1alpha1.OracleOperator",
    content: ""
  };
}
export const OracleOperator = {
  typeUrl: "/shentu.cert.v1alpha1.OracleOperator",
  encode(message: OracleOperator, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.content !== "") {
      writer.uint32(10).string(message.content);
    }
    return writer;
  },
  fromJSON(object: any): OracleOperator {
    return {
      content: isSet(object.content) ? String(object.content) : ""
    };
  },
  fromPartial(object: Partial<OracleOperator>): OracleOperator {
    const message = createBaseOracleOperator();
    message.content = object.content ?? "";
    return message;
  },
  fromAmino(object: OracleOperatorAmino): OracleOperator {
    const message = createBaseOracleOperator();
    if (object.content !== undefined && object.content !== null) {
      message.content = object.content;
    }
    return message;
  },
  toAmino(message: OracleOperator): OracleOperatorAmino {
    const obj: any = {};
    obj.content = message.content === "" ? undefined : message.content;
    return obj;
  },
  fromAminoMsg(object: OracleOperatorAminoMsg): OracleOperator {
    return OracleOperator.fromAmino(object.value);
  },
  fromProtoMsg(message: OracleOperatorProtoMsg): OracleOperator {
    return OracleOperator.decode(message.value);
  },
  toProto(message: OracleOperator): Uint8Array {
    return OracleOperator.encode(message).finish();
  },
  toProtoMsg(message: OracleOperator): OracleOperatorProtoMsg {
    return {
      typeUrl: "/shentu.cert.v1alpha1.OracleOperator",
      value: OracleOperator.encode(message).finish()
    };
  }
};
function createBaseShieldPoolCreator(): ShieldPoolCreator {
  return {
    $typeUrl: "/shentu.cert.v1alpha1.ShieldPoolCreator",
    content: ""
  };
}
export const ShieldPoolCreator = {
  typeUrl: "/shentu.cert.v1alpha1.ShieldPoolCreator",
  encode(message: ShieldPoolCreator, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.content !== "") {
      writer.uint32(10).string(message.content);
    }
    return writer;
  },
  fromJSON(object: any): ShieldPoolCreator {
    return {
      content: isSet(object.content) ? String(object.content) : ""
    };
  },
  fromPartial(object: Partial<ShieldPoolCreator>): ShieldPoolCreator {
    const message = createBaseShieldPoolCreator();
    message.content = object.content ?? "";
    return message;
  },
  fromAmino(object: ShieldPoolCreatorAmino): ShieldPoolCreator {
    const message = createBaseShieldPoolCreator();
    if (object.content !== undefined && object.content !== null) {
      message.content = object.content;
    }
    return message;
  },
  toAmino(message: ShieldPoolCreator): ShieldPoolCreatorAmino {
    const obj: any = {};
    obj.content = message.content === "" ? undefined : message.content;
    return obj;
  },
  fromAminoMsg(object: ShieldPoolCreatorAminoMsg): ShieldPoolCreator {
    return ShieldPoolCreator.fromAmino(object.value);
  },
  fromProtoMsg(message: ShieldPoolCreatorProtoMsg): ShieldPoolCreator {
    return ShieldPoolCreator.decode(message.value);
  },
  toProto(message: ShieldPoolCreator): Uint8Array {
    return ShieldPoolCreator.encode(message).finish();
  },
  toProtoMsg(message: ShieldPoolCreator): ShieldPoolCreatorProtoMsg {
    return {
      typeUrl: "/shentu.cert.v1alpha1.ShieldPoolCreator",
      value: ShieldPoolCreator.encode(message).finish()
    };
  }
};
function createBaseIdentity(): Identity {
  return {
    $typeUrl: "/shentu.cert.v1alpha1.Identity",
    content: ""
  };
}
export const Identity = {
  typeUrl: "/shentu.cert.v1alpha1.Identity",
  encode(message: Identity, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.content !== "") {
      writer.uint32(10).string(message.content);
    }
    return writer;
  },
  fromJSON(object: any): Identity {
    return {
      content: isSet(object.content) ? String(object.content) : ""
    };
  },
  fromPartial(object: Partial<Identity>): Identity {
    const message = createBaseIdentity();
    message.content = object.content ?? "";
    return message;
  },
  fromAmino(object: IdentityAmino): Identity {
    const message = createBaseIdentity();
    if (object.content !== undefined && object.content !== null) {
      message.content = object.content;
    }
    return message;
  },
  toAmino(message: Identity): IdentityAmino {
    const obj: any = {};
    obj.content = message.content === "" ? undefined : message.content;
    return obj;
  },
  fromAminoMsg(object: IdentityAminoMsg): Identity {
    return Identity.fromAmino(object.value);
  },
  fromProtoMsg(message: IdentityProtoMsg): Identity {
    return Identity.decode(message.value);
  },
  toProto(message: Identity): Uint8Array {
    return Identity.encode(message).finish();
  },
  toProtoMsg(message: Identity): IdentityProtoMsg {
    return {
      typeUrl: "/shentu.cert.v1alpha1.Identity",
      value: Identity.encode(message).finish()
    };
  }
};
function createBaseGeneral(): General {
  return {
    $typeUrl: "/shentu.cert.v1alpha1.General",
    content: ""
  };
}
export const General = {
  typeUrl: "/shentu.cert.v1alpha1.General",
  encode(message: General, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.content !== "") {
      writer.uint32(10).string(message.content);
    }
    return writer;
  },
  fromJSON(object: any): General {
    return {
      content: isSet(object.content) ? String(object.content) : ""
    };
  },
  fromPartial(object: Partial<General>): General {
    const message = createBaseGeneral();
    message.content = object.content ?? "";
    return message;
  },
  fromAmino(object: GeneralAmino): General {
    const message = createBaseGeneral();
    if (object.content !== undefined && object.content !== null) {
      message.content = object.content;
    }
    return message;
  },
  toAmino(message: General): GeneralAmino {
    const obj: any = {};
    obj.content = message.content === "" ? undefined : message.content;
    return obj;
  },
  fromAminoMsg(object: GeneralAminoMsg): General {
    return General.fromAmino(object.value);
  },
  fromProtoMsg(message: GeneralProtoMsg): General {
    return General.decode(message.value);
  },
  toProto(message: General): Uint8Array {
    return General.encode(message).finish();
  },
  toProtoMsg(message: General): GeneralProtoMsg {
    return {
      typeUrl: "/shentu.cert.v1alpha1.General",
      value: General.encode(message).finish()
    };
  }
};
function createBaseBountyAdmin(): BountyAdmin {
  return {
    $typeUrl: "/shentu.cert.v1alpha1.BountyAdmin",
    content: ""
  };
}
export const BountyAdmin = {
  typeUrl: "/shentu.cert.v1alpha1.BountyAdmin",
  encode(message: BountyAdmin, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.content !== "") {
      writer.uint32(10).string(message.content);
    }
    return writer;
  },
  fromJSON(object: any): BountyAdmin {
    return {
      content: isSet(object.content) ? String(object.content) : ""
    };
  },
  fromPartial(object: Partial<BountyAdmin>): BountyAdmin {
    const message = createBaseBountyAdmin();
    message.content = object.content ?? "";
    return message;
  },
  fromAmino(object: BountyAdminAmino): BountyAdmin {
    const message = createBaseBountyAdmin();
    if (object.content !== undefined && object.content !== null) {
      message.content = object.content;
    }
    return message;
  },
  toAmino(message: BountyAdmin): BountyAdminAmino {
    const obj: any = {};
    obj.content = message.content === "" ? undefined : message.content;
    return obj;
  },
  fromAminoMsg(object: BountyAdminAminoMsg): BountyAdmin {
    return BountyAdmin.fromAmino(object.value);
  },
  fromProtoMsg(message: BountyAdminProtoMsg): BountyAdmin {
    return BountyAdmin.decode(message.value);
  },
  toProto(message: BountyAdmin): Uint8Array {
    return BountyAdmin.encode(message).finish();
  },
  toProtoMsg(message: BountyAdmin): BountyAdminProtoMsg {
    return {
      typeUrl: "/shentu.cert.v1alpha1.BountyAdmin",
      value: BountyAdmin.encode(message).finish()
    };
  }
};
function createBasePlatform(): Platform {
  return {
    validatorPubkey: undefined,
    description: ""
  };
}
export const Platform = {
  typeUrl: "/shentu.cert.v1alpha1.Platform",
  encode(message: Platform, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.validatorPubkey !== undefined) {
      Any.encode((message.validatorPubkey as Any), writer.uint32(10).fork()).ldelim();
    }
    if (message.description !== "") {
      writer.uint32(18).string(message.description);
    }
    return writer;
  },
  fromJSON(object: any): Platform {
    return {
      validatorPubkey: isSet(object.validatorPubkey) ? Any.fromJSON(object.validatorPubkey) : undefined,
      description: isSet(object.description) ? String(object.description) : ""
    };
  },
  fromPartial(object: Partial<Platform>): Platform {
    const message = createBasePlatform();
    message.validatorPubkey = object.validatorPubkey !== undefined && object.validatorPubkey !== null ? Any.fromPartial(object.validatorPubkey) : undefined;
    message.description = object.description ?? "";
    return message;
  },
  fromAmino(object: PlatformAmino): Platform {
    const message = createBasePlatform();
    if (object.validator_pubkey !== undefined && object.validator_pubkey !== null) {
      message.validatorPubkey = encodePubkey(object.validator_pubkey);
    }
    if (object.description !== undefined && object.description !== null) {
      message.description = object.description;
    }
    return message;
  },
  toAmino(message: Platform): PlatformAmino {
    const obj: any = {};
    obj.validator_pubkey = message.validatorPubkey ? decodePubkey(message.validatorPubkey) : undefined;
    obj.description = message.description === "" ? undefined : message.description;
    return obj;
  },
  fromAminoMsg(object: PlatformAminoMsg): Platform {
    return Platform.fromAmino(object.value);
  },
  fromProtoMsg(message: PlatformProtoMsg): Platform {
    return Platform.decode(message.value);
  },
  toProto(message: Platform): Uint8Array {
    return Platform.encode(message).finish();
  },
  toProtoMsg(message: Platform): PlatformProtoMsg {
    return {
      typeUrl: "/shentu.cert.v1alpha1.Platform",
      value: Platform.encode(message).finish()
    };
  }
};
function createBaseCertifierUpdateProposal(): CertifierUpdateProposal {
  return {
    $typeUrl: "/shentu.cert.v1alpha1.CertifierUpdateProposal",
    title: "",
    proposer: "",
    alias: "",
    certifier: "",
    description: "",
    addOrRemove: false
  };
}
export const CertifierUpdateProposal = {
  typeUrl: "/shentu.cert.v1alpha1.CertifierUpdateProposal",
  encode(message: CertifierUpdateProposal, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.title !== "") {
      writer.uint32(10).string(message.title);
    }
    if (message.proposer !== "") {
      writer.uint32(18).string(message.proposer);
    }
    if (message.alias !== "") {
      writer.uint32(26).string(message.alias);
    }
    if (message.certifier !== "") {
      writer.uint32(34).string(message.certifier);
    }
    if (message.description !== "") {
      writer.uint32(42).string(message.description);
    }
    if (message.addOrRemove === true) {
      writer.uint32(48).bool(message.addOrRemove);
    }
    return writer;
  },
  fromJSON(object: any): CertifierUpdateProposal {
    return {
      title: isSet(object.title) ? String(object.title) : "",
      proposer: isSet(object.proposer) ? String(object.proposer) : "",
      alias: isSet(object.alias) ? String(object.alias) : "",
      certifier: isSet(object.certifier) ? String(object.certifier) : "",
      description: isSet(object.description) ? String(object.description) : "",
      addOrRemove: isSet(object.addOrRemove) ? Boolean(object.addOrRemove) : false
    };
  },
  fromPartial(object: Partial<CertifierUpdateProposal>): CertifierUpdateProposal {
    const message = createBaseCertifierUpdateProposal();
    message.title = object.title ?? "";
    message.proposer = object.proposer ?? "";
    message.alias = object.alias ?? "";
    message.certifier = object.certifier ?? "";
    message.description = object.description ?? "";
    message.addOrRemove = object.addOrRemove ?? false;
    return message;
  },
  fromAmino(object: CertifierUpdateProposalAmino): CertifierUpdateProposal {
    const message = createBaseCertifierUpdateProposal();
    if (object.title !== undefined && object.title !== null) {
      message.title = object.title;
    }
    if (object.proposer !== undefined && object.proposer !== null) {
      message.proposer = object.proposer;
    }
    if (object.alias !== undefined && object.alias !== null) {
      message.alias = object.alias;
    }
    if (object.certifier !== undefined && object.certifier !== null) {
      message.certifier = object.certifier;
    }
    if (object.description !== undefined && object.description !== null) {
      message.description = object.description;
    }
    if (object.add_or_remove !== undefined && object.add_or_remove !== null) {
      message.addOrRemove = object.add_or_remove;
    }
    return message;
  },
  toAmino(message: CertifierUpdateProposal): CertifierUpdateProposalAmino {
    const obj: any = {};
    obj.title = message.title === "" ? undefined : message.title;
    obj.proposer = message.proposer === "" ? undefined : message.proposer;
    obj.alias = message.alias === "" ? undefined : message.alias;
    obj.certifier = message.certifier === "" ? undefined : message.certifier;
    obj.description = message.description === "" ? undefined : message.description;
    obj.add_or_remove = message.addOrRemove === false ? undefined : message.addOrRemove;
    return obj;
  },
  fromAminoMsg(object: CertifierUpdateProposalAminoMsg): CertifierUpdateProposal {
    return CertifierUpdateProposal.fromAmino(object.value);
  },
  fromProtoMsg(message: CertifierUpdateProposalProtoMsg): CertifierUpdateProposal {
    return CertifierUpdateProposal.decode(message.value);
  },
  toProto(message: CertifierUpdateProposal): Uint8Array {
    return CertifierUpdateProposal.encode(message).finish();
  },
  toProtoMsg(message: CertifierUpdateProposal): CertifierUpdateProposalProtoMsg {
    return {
      typeUrl: "/shentu.cert.v1alpha1.CertifierUpdateProposal",
      value: CertifierUpdateProposal.encode(message).finish()
    };
  }
};
function createBaseKVPair(): KVPair {
  return {
    key: "",
    value: ""
  };
}
export const KVPair = {
  typeUrl: "/shentu.cert.v1alpha1.KVPair",
  encode(message: KVPair, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.value !== "") {
      writer.uint32(18).string(message.value);
    }
    return writer;
  },
  fromJSON(object: any): KVPair {
    return {
      key: isSet(object.key) ? String(object.key) : "",
      value: isSet(object.value) ? String(object.value) : ""
    };
  },
  fromPartial(object: Partial<KVPair>): KVPair {
    const message = createBaseKVPair();
    message.key = object.key ?? "";
    message.value = object.value ?? "";
    return message;
  },
  fromAmino(object: KVPairAmino): KVPair {
    const message = createBaseKVPair();
    if (object.key !== undefined && object.key !== null) {
      message.key = object.key;
    }
    if (object.value !== undefined && object.value !== null) {
      message.value = object.value;
    }
    return message;
  },
  toAmino(message: KVPair): KVPairAmino {
    const obj: any = {};
    obj.key = message.key === "" ? undefined : message.key;
    obj.value = message.value === "" ? undefined : message.value;
    return obj;
  },
  fromAminoMsg(object: KVPairAminoMsg): KVPair {
    return KVPair.fromAmino(object.value);
  },
  fromProtoMsg(message: KVPairProtoMsg): KVPair {
    return KVPair.decode(message.value);
  },
  toProto(message: KVPair): Uint8Array {
    return KVPair.encode(message).finish();
  },
  toProtoMsg(message: KVPair): KVPairProtoMsg {
    return {
      typeUrl: "/shentu.cert.v1alpha1.KVPair",
      value: KVPair.encode(message).finish()
    };
  }
};
export const Content_InterfaceDecoder = (input: BinaryReader | Uint8Array): Compilation | Auditing | Proof | OracleOperator | ShieldPoolCreator | Identity | General | BountyAdmin | TextProposal | Any => {
  const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
  const data = Any.decode(reader, reader.uint32());
  switch (data.typeUrl) {
    case "/shentu.cert.v1alpha1.Compilation":
      return Compilation.decode(data.value);
    case "/shentu.cert.v1alpha1.Auditing":
      return Auditing.decode(data.value);
    case "/shentu.cert.v1alpha1.Proof":
      return Proof.decode(data.value);
    case "/shentu.cert.v1alpha1.OracleOperator":
      return OracleOperator.decode(data.value);
    case "/shentu.cert.v1alpha1.ShieldPoolCreator":
      return ShieldPoolCreator.decode(data.value);
    case "/shentu.cert.v1alpha1.Identity":
      return Identity.decode(data.value);
    case "/shentu.cert.v1alpha1.General":
      return General.decode(data.value);
    case "/shentu.cert.v1alpha1.BountyAdmin":
      return BountyAdmin.decode(data.value);
    case "/cosmos.gov.v1beta1.TextProposal":
      return TextProposal.decode(data.value);
    default:
      return data;
  }
};
export const Content_FromAmino = (content: AnyAmino): Any => {
  switch (content.type) {
    case "/shentu.cert.v1alpha1.Compilation":
      return Any.fromPartial({
        typeUrl: "/shentu.cert.v1alpha1.Compilation",
        value: Compilation.encode(Compilation.fromPartial(Compilation.fromAmino(content.value))).finish()
      });
    case "/shentu.cert.v1alpha1.Auditing":
      return Any.fromPartial({
        typeUrl: "/shentu.cert.v1alpha1.Auditing",
        value: Auditing.encode(Auditing.fromPartial(Auditing.fromAmino(content.value))).finish()
      });
    case "/shentu.cert.v1alpha1.Proof":
      return Any.fromPartial({
        typeUrl: "/shentu.cert.v1alpha1.Proof",
        value: Proof.encode(Proof.fromPartial(Proof.fromAmino(content.value))).finish()
      });
    case "/shentu.cert.v1alpha1.OracleOperator":
      return Any.fromPartial({
        typeUrl: "/shentu.cert.v1alpha1.OracleOperator",
        value: OracleOperator.encode(OracleOperator.fromPartial(OracleOperator.fromAmino(content.value))).finish()
      });
    case "/shentu.cert.v1alpha1.ShieldPoolCreator":
      return Any.fromPartial({
        typeUrl: "/shentu.cert.v1alpha1.ShieldPoolCreator",
        value: ShieldPoolCreator.encode(ShieldPoolCreator.fromPartial(ShieldPoolCreator.fromAmino(content.value))).finish()
      });
    case "/shentu.cert.v1alpha1.Identity":
      return Any.fromPartial({
        typeUrl: "/shentu.cert.v1alpha1.Identity",
        value: Identity.encode(Identity.fromPartial(Identity.fromAmino(content.value))).finish()
      });
    case "/shentu.cert.v1alpha1.General":
      return Any.fromPartial({
        typeUrl: "/shentu.cert.v1alpha1.General",
        value: General.encode(General.fromPartial(General.fromAmino(content.value))).finish()
      });
    case "/shentu.cert.v1alpha1.BountyAdmin":
      return Any.fromPartial({
        typeUrl: "/shentu.cert.v1alpha1.BountyAdmin",
        value: BountyAdmin.encode(BountyAdmin.fromPartial(BountyAdmin.fromAmino(content.value))).finish()
      });
    case "cosmos-sdk/TextProposal":
      return Any.fromPartial({
        typeUrl: "/cosmos.gov.v1beta1.TextProposal",
        value: TextProposal.encode(TextProposal.fromPartial(TextProposal.fromAmino(content.value))).finish()
      });
    default:
      return Any.fromAmino(content);
  }
};
export const Content_ToAmino = (content: Any) => {
  switch (content.typeUrl) {
    case "/shentu.cert.v1alpha1.Compilation":
      return {
        type: "/shentu.cert.v1alpha1.Compilation",
        value: Compilation.toAmino(Compilation.decode(content.value, undefined))
      };
    case "/shentu.cert.v1alpha1.Auditing":
      return {
        type: "/shentu.cert.v1alpha1.Auditing",
        value: Auditing.toAmino(Auditing.decode(content.value, undefined))
      };
    case "/shentu.cert.v1alpha1.Proof":
      return {
        type: "/shentu.cert.v1alpha1.Proof",
        value: Proof.toAmino(Proof.decode(content.value, undefined))
      };
    case "/shentu.cert.v1alpha1.OracleOperator":
      return {
        type: "/shentu.cert.v1alpha1.OracleOperator",
        value: OracleOperator.toAmino(OracleOperator.decode(content.value, undefined))
      };
    case "/shentu.cert.v1alpha1.ShieldPoolCreator":
      return {
        type: "/shentu.cert.v1alpha1.ShieldPoolCreator",
        value: ShieldPoolCreator.toAmino(ShieldPoolCreator.decode(content.value, undefined))
      };
    case "/shentu.cert.v1alpha1.Identity":
      return {
        type: "/shentu.cert.v1alpha1.Identity",
        value: Identity.toAmino(Identity.decode(content.value, undefined))
      };
    case "/shentu.cert.v1alpha1.General":
      return {
        type: "/shentu.cert.v1alpha1.General",
        value: General.toAmino(General.decode(content.value, undefined))
      };
    case "/shentu.cert.v1alpha1.BountyAdmin":
      return {
        type: "/shentu.cert.v1alpha1.BountyAdmin",
        value: BountyAdmin.toAmino(BountyAdmin.decode(content.value, undefined))
      };
    case "/cosmos.gov.v1beta1.TextProposal":
      return {
        type: "cosmos-sdk/TextProposal",
        value: TextProposal.toAmino(TextProposal.decode(content.value, undefined))
      };
    default:
      return Any.toAmino(content);
  }
};
export const Cosmos_cryptoPubKey_InterfaceDecoder = (input: BinaryReader | Uint8Array): Any => {
  const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
  const data = Any.decode(reader, reader.uint32());
  switch (data.typeUrl) {
    default:
      return data;
  }
};
export const Cosmos_cryptoPubKey_FromAmino = (content: AnyAmino): Any => {
  return encodePubkey(content);
};
export const Cosmos_cryptoPubKey_ToAmino = (content: Any): Pubkey | null => {
  return decodePubkey(content);
};