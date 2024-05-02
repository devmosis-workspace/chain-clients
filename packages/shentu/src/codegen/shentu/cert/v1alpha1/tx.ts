import { Any, AnyProtoMsg, AnyAmino, AnySDKType } from "../../../google/protobuf/any";
import { Compilation, CompilationProtoMsg, CompilationSDKType, Auditing, AuditingProtoMsg, AuditingSDKType, Proof, ProofProtoMsg, ProofSDKType, OracleOperator, OracleOperatorProtoMsg, OracleOperatorSDKType, ShieldPoolCreator, ShieldPoolCreatorProtoMsg, ShieldPoolCreatorSDKType, Identity, IdentityProtoMsg, IdentitySDKType, General, GeneralProtoMsg, GeneralSDKType, BountyAdmin, BountyAdminProtoMsg, BountyAdminSDKType } from "./cert";
import { TextProposal, TextProposalProtoMsg, TextProposalSDKType } from "../../../cosmos/gov/v1beta1/gov";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { isSet } from "../../../helpers";
import { encodePubkey, decodePubkey } from "@cosmjs/proto-signing";
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
export interface MsgProposeCertifierResponse {}
export interface MsgProposeCertifierResponseProtoMsg {
  typeUrl: "/shentu.cert.v1alpha1.MsgProposeCertifierResponse";
  value: Uint8Array;
}
export interface MsgProposeCertifierResponseAmino {}
export interface MsgProposeCertifierResponseAminoMsg {
  type: "/shentu.cert.v1alpha1.MsgProposeCertifierResponse";
  value: MsgProposeCertifierResponseAmino;
}
export interface MsgProposeCertifierResponseSDKType {}
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
export interface MsgIssueCertificateResponse {}
export interface MsgIssueCertificateResponseProtoMsg {
  typeUrl: "/shentu.cert.v1alpha1.MsgIssueCertificateResponse";
  value: Uint8Array;
}
export interface MsgIssueCertificateResponseAmino {}
export interface MsgIssueCertificateResponseAminoMsg {
  type: "/shentu.cert.v1alpha1.MsgIssueCertificateResponse";
  value: MsgIssueCertificateResponseAmino;
}
export interface MsgIssueCertificateResponseSDKType {}
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
export interface MsgRevokeCertificateResponse {}
export interface MsgRevokeCertificateResponseProtoMsg {
  typeUrl: "/shentu.cert.v1alpha1.MsgRevokeCertificateResponse";
  value: Uint8Array;
}
export interface MsgRevokeCertificateResponseAmino {}
export interface MsgRevokeCertificateResponseAminoMsg {
  type: "/shentu.cert.v1alpha1.MsgRevokeCertificateResponse";
  value: MsgRevokeCertificateResponseAmino;
}
export interface MsgRevokeCertificateResponseSDKType {}
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
export interface MsgCertifyPlatformResponse {}
export interface MsgCertifyPlatformResponseProtoMsg {
  typeUrl: "/shentu.cert.v1alpha1.MsgCertifyPlatformResponse";
  value: Uint8Array;
}
export interface MsgCertifyPlatformResponseAmino {}
export interface MsgCertifyPlatformResponseAminoMsg {
  type: "/shentu.cert.v1alpha1.MsgCertifyPlatformResponse";
  value: MsgCertifyPlatformResponseAmino;
}
export interface MsgCertifyPlatformResponseSDKType {}
function createBaseMsgProposeCertifier(): MsgProposeCertifier {
  return {
    proposer: "",
    alias: "",
    certifier: "",
    description: ""
  };
}
export const MsgProposeCertifier = {
  typeUrl: "/shentu.cert.v1alpha1.MsgProposeCertifier",
  encode(message: MsgProposeCertifier, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.proposer !== "") {
      writer.uint32(10).string(message.proposer);
    }
    if (message.alias !== "") {
      writer.uint32(18).string(message.alias);
    }
    if (message.certifier !== "") {
      writer.uint32(26).string(message.certifier);
    }
    if (message.description !== "") {
      writer.uint32(34).string(message.description);
    }
    return writer;
  },
  fromJSON(object: any): MsgProposeCertifier {
    return {
      proposer: isSet(object.proposer) ? String(object.proposer) : "",
      alias: isSet(object.alias) ? String(object.alias) : "",
      certifier: isSet(object.certifier) ? String(object.certifier) : "",
      description: isSet(object.description) ? String(object.description) : ""
    };
  },
  fromPartial(object: Partial<MsgProposeCertifier>): MsgProposeCertifier {
    const message = createBaseMsgProposeCertifier();
    message.proposer = object.proposer ?? "";
    message.alias = object.alias ?? "";
    message.certifier = object.certifier ?? "";
    message.description = object.description ?? "";
    return message;
  },
  fromAmino(object: MsgProposeCertifierAmino): MsgProposeCertifier {
    const message = createBaseMsgProposeCertifier();
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
    return message;
  },
  toAmino(message: MsgProposeCertifier): MsgProposeCertifierAmino {
    const obj: any = {};
    obj.proposer = message.proposer === "" ? undefined : message.proposer;
    obj.alias = message.alias === "" ? undefined : message.alias;
    obj.certifier = message.certifier === "" ? undefined : message.certifier;
    obj.description = message.description === "" ? undefined : message.description;
    return obj;
  },
  fromAminoMsg(object: MsgProposeCertifierAminoMsg): MsgProposeCertifier {
    return MsgProposeCertifier.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgProposeCertifierProtoMsg): MsgProposeCertifier {
    return MsgProposeCertifier.decode(message.value);
  },
  toProto(message: MsgProposeCertifier): Uint8Array {
    return MsgProposeCertifier.encode(message).finish();
  },
  toProtoMsg(message: MsgProposeCertifier): MsgProposeCertifierProtoMsg {
    return {
      typeUrl: "/shentu.cert.v1alpha1.MsgProposeCertifier",
      value: MsgProposeCertifier.encode(message).finish()
    };
  }
};
function createBaseMsgProposeCertifierResponse(): MsgProposeCertifierResponse {
  return {};
}
export const MsgProposeCertifierResponse = {
  typeUrl: "/shentu.cert.v1alpha1.MsgProposeCertifierResponse",
  encode(_: MsgProposeCertifierResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  fromJSON(_: any): MsgProposeCertifierResponse {
    return {};
  },
  fromPartial(_: Partial<MsgProposeCertifierResponse>): MsgProposeCertifierResponse {
    const message = createBaseMsgProposeCertifierResponse();
    return message;
  },
  fromAmino(_: MsgProposeCertifierResponseAmino): MsgProposeCertifierResponse {
    const message = createBaseMsgProposeCertifierResponse();
    return message;
  },
  toAmino(_: MsgProposeCertifierResponse): MsgProposeCertifierResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgProposeCertifierResponseAminoMsg): MsgProposeCertifierResponse {
    return MsgProposeCertifierResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgProposeCertifierResponseProtoMsg): MsgProposeCertifierResponse {
    return MsgProposeCertifierResponse.decode(message.value);
  },
  toProto(message: MsgProposeCertifierResponse): Uint8Array {
    return MsgProposeCertifierResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgProposeCertifierResponse): MsgProposeCertifierResponseProtoMsg {
    return {
      typeUrl: "/shentu.cert.v1alpha1.MsgProposeCertifierResponse",
      value: MsgProposeCertifierResponse.encode(message).finish()
    };
  }
};
function createBaseMsgIssueCertificate(): MsgIssueCertificate {
  return {
    content: undefined,
    compiler: "",
    bytecodeHash: "",
    description: "",
    certifier: ""
  };
}
export const MsgIssueCertificate = {
  typeUrl: "/shentu.cert.v1alpha1.MsgIssueCertificate",
  encode(message: MsgIssueCertificate, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.content !== undefined) {
      Any.encode((message.content as Any), writer.uint32(10).fork()).ldelim();
    }
    if (message.compiler !== "") {
      writer.uint32(18).string(message.compiler);
    }
    if (message.bytecodeHash !== "") {
      writer.uint32(26).string(message.bytecodeHash);
    }
    if (message.description !== "") {
      writer.uint32(34).string(message.description);
    }
    if (message.certifier !== "") {
      writer.uint32(42).string(message.certifier);
    }
    return writer;
  },
  fromJSON(object: any): MsgIssueCertificate {
    return {
      content: isSet(object.content) ? Any.fromJSON(object.content) : undefined,
      compiler: isSet(object.compiler) ? String(object.compiler) : "",
      bytecodeHash: isSet(object.bytecodeHash) ? String(object.bytecodeHash) : "",
      description: isSet(object.description) ? String(object.description) : "",
      certifier: isSet(object.certifier) ? String(object.certifier) : ""
    };
  },
  fromPartial(object: Partial<MsgIssueCertificate>): MsgIssueCertificate {
    const message = createBaseMsgIssueCertificate();
    message.content = object.content !== undefined && object.content !== null ? Any.fromPartial(object.content) : undefined;
    message.compiler = object.compiler ?? "";
    message.bytecodeHash = object.bytecodeHash ?? "";
    message.description = object.description ?? "";
    message.certifier = object.certifier ?? "";
    return message;
  },
  fromAmino(object: MsgIssueCertificateAmino): MsgIssueCertificate {
    const message = createBaseMsgIssueCertificate();
    if (object.content !== undefined && object.content !== null) {
      message.content = Content_FromAmino(object.content);
    }
    if (object.compiler !== undefined && object.compiler !== null) {
      message.compiler = object.compiler;
    }
    if (object.bytecode_hash !== undefined && object.bytecode_hash !== null) {
      message.bytecodeHash = object.bytecode_hash;
    }
    if (object.description !== undefined && object.description !== null) {
      message.description = object.description;
    }
    if (object.certifier !== undefined && object.certifier !== null) {
      message.certifier = object.certifier;
    }
    return message;
  },
  toAmino(message: MsgIssueCertificate): MsgIssueCertificateAmino {
    const obj: any = {};
    obj.content = message.content ? Content_ToAmino((message.content as Any)) : undefined;
    obj.compiler = message.compiler === "" ? undefined : message.compiler;
    obj.bytecode_hash = message.bytecodeHash === "" ? undefined : message.bytecodeHash;
    obj.description = message.description === "" ? undefined : message.description;
    obj.certifier = message.certifier === "" ? undefined : message.certifier;
    return obj;
  },
  fromAminoMsg(object: MsgIssueCertificateAminoMsg): MsgIssueCertificate {
    return MsgIssueCertificate.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgIssueCertificateProtoMsg): MsgIssueCertificate {
    return MsgIssueCertificate.decode(message.value);
  },
  toProto(message: MsgIssueCertificate): Uint8Array {
    return MsgIssueCertificate.encode(message).finish();
  },
  toProtoMsg(message: MsgIssueCertificate): MsgIssueCertificateProtoMsg {
    return {
      typeUrl: "/shentu.cert.v1alpha1.MsgIssueCertificate",
      value: MsgIssueCertificate.encode(message).finish()
    };
  }
};
function createBaseMsgIssueCertificateResponse(): MsgIssueCertificateResponse {
  return {};
}
export const MsgIssueCertificateResponse = {
  typeUrl: "/shentu.cert.v1alpha1.MsgIssueCertificateResponse",
  encode(_: MsgIssueCertificateResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  fromJSON(_: any): MsgIssueCertificateResponse {
    return {};
  },
  fromPartial(_: Partial<MsgIssueCertificateResponse>): MsgIssueCertificateResponse {
    const message = createBaseMsgIssueCertificateResponse();
    return message;
  },
  fromAmino(_: MsgIssueCertificateResponseAmino): MsgIssueCertificateResponse {
    const message = createBaseMsgIssueCertificateResponse();
    return message;
  },
  toAmino(_: MsgIssueCertificateResponse): MsgIssueCertificateResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgIssueCertificateResponseAminoMsg): MsgIssueCertificateResponse {
    return MsgIssueCertificateResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgIssueCertificateResponseProtoMsg): MsgIssueCertificateResponse {
    return MsgIssueCertificateResponse.decode(message.value);
  },
  toProto(message: MsgIssueCertificateResponse): Uint8Array {
    return MsgIssueCertificateResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgIssueCertificateResponse): MsgIssueCertificateResponseProtoMsg {
    return {
      typeUrl: "/shentu.cert.v1alpha1.MsgIssueCertificateResponse",
      value: MsgIssueCertificateResponse.encode(message).finish()
    };
  }
};
function createBaseMsgRevokeCertificate(): MsgRevokeCertificate {
  return {
    revoker: "",
    id: BigInt(0),
    description: ""
  };
}
export const MsgRevokeCertificate = {
  typeUrl: "/shentu.cert.v1alpha1.MsgRevokeCertificate",
  encode(message: MsgRevokeCertificate, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.revoker !== "") {
      writer.uint32(10).string(message.revoker);
    }
    if (message.id !== BigInt(0)) {
      writer.uint32(16).uint64(message.id);
    }
    if (message.description !== "") {
      writer.uint32(26).string(message.description);
    }
    return writer;
  },
  fromJSON(object: any): MsgRevokeCertificate {
    return {
      revoker: isSet(object.revoker) ? String(object.revoker) : "",
      id: isSet(object.id) ? BigInt(object.id.toString()) : BigInt(0),
      description: isSet(object.description) ? String(object.description) : ""
    };
  },
  fromPartial(object: Partial<MsgRevokeCertificate>): MsgRevokeCertificate {
    const message = createBaseMsgRevokeCertificate();
    message.revoker = object.revoker ?? "";
    message.id = object.id !== undefined && object.id !== null ? BigInt(object.id.toString()) : BigInt(0);
    message.description = object.description ?? "";
    return message;
  },
  fromAmino(object: MsgRevokeCertificateAmino): MsgRevokeCertificate {
    const message = createBaseMsgRevokeCertificate();
    if (object.revoker !== undefined && object.revoker !== null) {
      message.revoker = object.revoker;
    }
    if (object.id !== undefined && object.id !== null) {
      message.id = BigInt(object.id);
    }
    if (object.description !== undefined && object.description !== null) {
      message.description = object.description;
    }
    return message;
  },
  toAmino(message: MsgRevokeCertificate): MsgRevokeCertificateAmino {
    const obj: any = {};
    obj.revoker = message.revoker === "" ? undefined : message.revoker;
    obj.id = message.id !== BigInt(0) ? message.id.toString() : undefined;
    obj.description = message.description === "" ? undefined : message.description;
    return obj;
  },
  fromAminoMsg(object: MsgRevokeCertificateAminoMsg): MsgRevokeCertificate {
    return MsgRevokeCertificate.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgRevokeCertificateProtoMsg): MsgRevokeCertificate {
    return MsgRevokeCertificate.decode(message.value);
  },
  toProto(message: MsgRevokeCertificate): Uint8Array {
    return MsgRevokeCertificate.encode(message).finish();
  },
  toProtoMsg(message: MsgRevokeCertificate): MsgRevokeCertificateProtoMsg {
    return {
      typeUrl: "/shentu.cert.v1alpha1.MsgRevokeCertificate",
      value: MsgRevokeCertificate.encode(message).finish()
    };
  }
};
function createBaseMsgRevokeCertificateResponse(): MsgRevokeCertificateResponse {
  return {};
}
export const MsgRevokeCertificateResponse = {
  typeUrl: "/shentu.cert.v1alpha1.MsgRevokeCertificateResponse",
  encode(_: MsgRevokeCertificateResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  fromJSON(_: any): MsgRevokeCertificateResponse {
    return {};
  },
  fromPartial(_: Partial<MsgRevokeCertificateResponse>): MsgRevokeCertificateResponse {
    const message = createBaseMsgRevokeCertificateResponse();
    return message;
  },
  fromAmino(_: MsgRevokeCertificateResponseAmino): MsgRevokeCertificateResponse {
    const message = createBaseMsgRevokeCertificateResponse();
    return message;
  },
  toAmino(_: MsgRevokeCertificateResponse): MsgRevokeCertificateResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgRevokeCertificateResponseAminoMsg): MsgRevokeCertificateResponse {
    return MsgRevokeCertificateResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgRevokeCertificateResponseProtoMsg): MsgRevokeCertificateResponse {
    return MsgRevokeCertificateResponse.decode(message.value);
  },
  toProto(message: MsgRevokeCertificateResponse): Uint8Array {
    return MsgRevokeCertificateResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgRevokeCertificateResponse): MsgRevokeCertificateResponseProtoMsg {
    return {
      typeUrl: "/shentu.cert.v1alpha1.MsgRevokeCertificateResponse",
      value: MsgRevokeCertificateResponse.encode(message).finish()
    };
  }
};
function createBaseMsgCertifyPlatform(): MsgCertifyPlatform {
  return {
    certifier: "",
    validatorPubkey: undefined,
    platform: ""
  };
}
export const MsgCertifyPlatform = {
  typeUrl: "/shentu.cert.v1alpha1.MsgCertifyPlatform",
  encode(message: MsgCertifyPlatform, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.certifier !== "") {
      writer.uint32(10).string(message.certifier);
    }
    if (message.validatorPubkey !== undefined) {
      Any.encode((message.validatorPubkey as Any), writer.uint32(18).fork()).ldelim();
    }
    if (message.platform !== "") {
      writer.uint32(26).string(message.platform);
    }
    return writer;
  },
  fromJSON(object: any): MsgCertifyPlatform {
    return {
      certifier: isSet(object.certifier) ? String(object.certifier) : "",
      validatorPubkey: isSet(object.validatorPubkey) ? Any.fromJSON(object.validatorPubkey) : undefined,
      platform: isSet(object.platform) ? String(object.platform) : ""
    };
  },
  fromPartial(object: Partial<MsgCertifyPlatform>): MsgCertifyPlatform {
    const message = createBaseMsgCertifyPlatform();
    message.certifier = object.certifier ?? "";
    message.validatorPubkey = object.validatorPubkey !== undefined && object.validatorPubkey !== null ? Any.fromPartial(object.validatorPubkey) : undefined;
    message.platform = object.platform ?? "";
    return message;
  },
  fromAmino(object: MsgCertifyPlatformAmino): MsgCertifyPlatform {
    const message = createBaseMsgCertifyPlatform();
    if (object.certifier !== undefined && object.certifier !== null) {
      message.certifier = object.certifier;
    }
    if (object.validator_pubkey !== undefined && object.validator_pubkey !== null) {
      message.validatorPubkey = encodePubkey(object.validator_pubkey);
    }
    if (object.platform !== undefined && object.platform !== null) {
      message.platform = object.platform;
    }
    return message;
  },
  toAmino(message: MsgCertifyPlatform): MsgCertifyPlatformAmino {
    const obj: any = {};
    obj.certifier = message.certifier === "" ? undefined : message.certifier;
    obj.validator_pubkey = message.validatorPubkey ? decodePubkey(message.validatorPubkey) : undefined;
    obj.platform = message.platform === "" ? undefined : message.platform;
    return obj;
  },
  fromAminoMsg(object: MsgCertifyPlatformAminoMsg): MsgCertifyPlatform {
    return MsgCertifyPlatform.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgCertifyPlatformProtoMsg): MsgCertifyPlatform {
    return MsgCertifyPlatform.decode(message.value);
  },
  toProto(message: MsgCertifyPlatform): Uint8Array {
    return MsgCertifyPlatform.encode(message).finish();
  },
  toProtoMsg(message: MsgCertifyPlatform): MsgCertifyPlatformProtoMsg {
    return {
      typeUrl: "/shentu.cert.v1alpha1.MsgCertifyPlatform",
      value: MsgCertifyPlatform.encode(message).finish()
    };
  }
};
function createBaseMsgCertifyPlatformResponse(): MsgCertifyPlatformResponse {
  return {};
}
export const MsgCertifyPlatformResponse = {
  typeUrl: "/shentu.cert.v1alpha1.MsgCertifyPlatformResponse",
  encode(_: MsgCertifyPlatformResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  fromJSON(_: any): MsgCertifyPlatformResponse {
    return {};
  },
  fromPartial(_: Partial<MsgCertifyPlatformResponse>): MsgCertifyPlatformResponse {
    const message = createBaseMsgCertifyPlatformResponse();
    return message;
  },
  fromAmino(_: MsgCertifyPlatformResponseAmino): MsgCertifyPlatformResponse {
    const message = createBaseMsgCertifyPlatformResponse();
    return message;
  },
  toAmino(_: MsgCertifyPlatformResponse): MsgCertifyPlatformResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgCertifyPlatformResponseAminoMsg): MsgCertifyPlatformResponse {
    return MsgCertifyPlatformResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgCertifyPlatformResponseProtoMsg): MsgCertifyPlatformResponse {
    return MsgCertifyPlatformResponse.decode(message.value);
  },
  toProto(message: MsgCertifyPlatformResponse): Uint8Array {
    return MsgCertifyPlatformResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgCertifyPlatformResponse): MsgCertifyPlatformResponseProtoMsg {
    return {
      typeUrl: "/shentu.cert.v1alpha1.MsgCertifyPlatformResponse",
      value: MsgCertifyPlatformResponse.encode(message).finish()
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