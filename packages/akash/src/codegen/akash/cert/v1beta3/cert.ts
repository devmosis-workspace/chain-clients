import { BinaryWriter } from "../../../binary";
import { isSet, bytesFromBase64, base64FromBytes } from "../../../helpers";
/** State is an enum which refers to state of deployment */
export enum Certificate_State {
  /** invalid - Prefix should start with 0 in enum. So declaring dummy state */
  invalid = 0,
  /** valid - CertificateValid denotes state for deployment active */
  valid = 1,
  /** revoked - CertificateRevoked denotes state for deployment closed */
  revoked = 2,
  UNRECOGNIZED = -1,
}
export const Certificate_StateSDKType = Certificate_State;
export const Certificate_StateAmino = Certificate_State;
export function certificate_StateFromJSON(object: any): Certificate_State {
  switch (object) {
    case 0:
    case "invalid":
      return Certificate_State.invalid;
    case 1:
    case "valid":
      return Certificate_State.valid;
    case 2:
    case "revoked":
      return Certificate_State.revoked;
    case -1:
    case "UNRECOGNIZED":
    default:
      return Certificate_State.UNRECOGNIZED;
  }
}
export function certificate_StateToJSON(object: Certificate_State): string {
  switch (object) {
    case Certificate_State.invalid:
      return "invalid";
    case Certificate_State.valid:
      return "valid";
    case Certificate_State.revoked:
      return "revoked";
    case Certificate_State.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}
/** CertificateID stores owner and sequence number */
export interface CertificateID {
  owner: string;
  serial: string;
}
export interface CertificateIDProtoMsg {
  typeUrl: "/akash.cert.v1beta3.CertificateID";
  value: Uint8Array;
}
/** CertificateID stores owner and sequence number */
export interface CertificateIDAmino {
  owner?: string;
  serial?: string;
}
export interface CertificateIDAminoMsg {
  type: "/akash.cert.v1beta3.CertificateID";
  value: CertificateIDAmino;
}
/** CertificateID stores owner and sequence number */
export interface CertificateIDSDKType {
  owner: string;
  serial: string;
}
/** Certificate stores state, certificate and it's public key */
export interface Certificate {
  state: Certificate_State;
  cert: Uint8Array;
  pubkey: Uint8Array;
}
export interface CertificateProtoMsg {
  typeUrl: "/akash.cert.v1beta3.Certificate";
  value: Uint8Array;
}
/** Certificate stores state, certificate and it's public key */
export interface CertificateAmino {
  state?: Certificate_State;
  cert?: string;
  pubkey?: string;
}
export interface CertificateAminoMsg {
  type: "/akash.cert.v1beta3.Certificate";
  value: CertificateAmino;
}
/** Certificate stores state, certificate and it's public key */
export interface CertificateSDKType {
  state: Certificate_State;
  cert: Uint8Array;
  pubkey: Uint8Array;
}
/** CertificateFilter defines filters used to filter certificates */
export interface CertificateFilter {
  owner: string;
  serial: string;
  state: string;
}
export interface CertificateFilterProtoMsg {
  typeUrl: "/akash.cert.v1beta3.CertificateFilter";
  value: Uint8Array;
}
/** CertificateFilter defines filters used to filter certificates */
export interface CertificateFilterAmino {
  owner?: string;
  serial?: string;
  state?: string;
}
export interface CertificateFilterAminoMsg {
  type: "/akash.cert.v1beta3.CertificateFilter";
  value: CertificateFilterAmino;
}
/** CertificateFilter defines filters used to filter certificates */
export interface CertificateFilterSDKType {
  owner: string;
  serial: string;
  state: string;
}
/** MsgCreateCertificate defines an SDK message for creating certificate */
export interface MsgCreateCertificate {
  owner: string;
  cert: Uint8Array;
  pubkey: Uint8Array;
}
export interface MsgCreateCertificateProtoMsg {
  typeUrl: "/akash.cert.v1beta3.MsgCreateCertificate";
  value: Uint8Array;
}
/** MsgCreateCertificate defines an SDK message for creating certificate */
export interface MsgCreateCertificateAmino {
  owner?: string;
  cert?: string;
  pubkey?: string;
}
export interface MsgCreateCertificateAminoMsg {
  type: "/akash.cert.v1beta3.MsgCreateCertificate";
  value: MsgCreateCertificateAmino;
}
/** MsgCreateCertificate defines an SDK message for creating certificate */
export interface MsgCreateCertificateSDKType {
  owner: string;
  cert: Uint8Array;
  pubkey: Uint8Array;
}
/** MsgCreateCertificateResponse defines the Msg/CreateCertificate response type. */
export interface MsgCreateCertificateResponse {}
export interface MsgCreateCertificateResponseProtoMsg {
  typeUrl: "/akash.cert.v1beta3.MsgCreateCertificateResponse";
  value: Uint8Array;
}
/** MsgCreateCertificateResponse defines the Msg/CreateCertificate response type. */
export interface MsgCreateCertificateResponseAmino {}
export interface MsgCreateCertificateResponseAminoMsg {
  type: "/akash.cert.v1beta3.MsgCreateCertificateResponse";
  value: MsgCreateCertificateResponseAmino;
}
/** MsgCreateCertificateResponse defines the Msg/CreateCertificate response type. */
export interface MsgCreateCertificateResponseSDKType {}
/** MsgRevokeCertificate defines an SDK message for revoking certificate */
export interface MsgRevokeCertificate {
  id: CertificateID;
}
export interface MsgRevokeCertificateProtoMsg {
  typeUrl: "/akash.cert.v1beta3.MsgRevokeCertificate";
  value: Uint8Array;
}
/** MsgRevokeCertificate defines an SDK message for revoking certificate */
export interface MsgRevokeCertificateAmino {
  id?: CertificateIDAmino;
}
export interface MsgRevokeCertificateAminoMsg {
  type: "/akash.cert.v1beta3.MsgRevokeCertificate";
  value: MsgRevokeCertificateAmino;
}
/** MsgRevokeCertificate defines an SDK message for revoking certificate */
export interface MsgRevokeCertificateSDKType {
  id: CertificateIDSDKType;
}
/** MsgRevokeCertificateResponse defines the Msg/RevokeCertificate response type. */
export interface MsgRevokeCertificateResponse {}
export interface MsgRevokeCertificateResponseProtoMsg {
  typeUrl: "/akash.cert.v1beta3.MsgRevokeCertificateResponse";
  value: Uint8Array;
}
/** MsgRevokeCertificateResponse defines the Msg/RevokeCertificate response type. */
export interface MsgRevokeCertificateResponseAmino {}
export interface MsgRevokeCertificateResponseAminoMsg {
  type: "/akash.cert.v1beta3.MsgRevokeCertificateResponse";
  value: MsgRevokeCertificateResponseAmino;
}
/** MsgRevokeCertificateResponse defines the Msg/RevokeCertificate response type. */
export interface MsgRevokeCertificateResponseSDKType {}
function createBaseCertificateID(): CertificateID {
  return {
    owner: "",
    serial: ""
  };
}
export const CertificateID = {
  typeUrl: "/akash.cert.v1beta3.CertificateID",
  encode(message: CertificateID, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.owner !== "") {
      writer.uint32(10).string(message.owner);
    }
    if (message.serial !== "") {
      writer.uint32(18).string(message.serial);
    }
    return writer;
  },
  fromJSON(object: any): CertificateID {
    return {
      owner: isSet(object.owner) ? String(object.owner) : "",
      serial: isSet(object.serial) ? String(object.serial) : ""
    };
  },
  fromPartial(object: Partial<CertificateID>): CertificateID {
    const message = createBaseCertificateID();
    message.owner = object.owner ?? "";
    message.serial = object.serial ?? "";
    return message;
  },
  fromAmino(object: CertificateIDAmino): CertificateID {
    const message = createBaseCertificateID();
    if (object.owner !== undefined && object.owner !== null) {
      message.owner = object.owner;
    }
    if (object.serial !== undefined && object.serial !== null) {
      message.serial = object.serial;
    }
    return message;
  },
  toAmino(message: CertificateID): CertificateIDAmino {
    const obj: any = {};
    obj.owner = message.owner;
    obj.serial = message.serial;
    return obj;
  },
  fromAminoMsg(object: CertificateIDAminoMsg): CertificateID {
    return CertificateID.fromAmino(object.value);
  },
  fromProtoMsg(message: CertificateIDProtoMsg): CertificateID {
    return CertificateID.decode(message.value);
  },
  toProto(message: CertificateID): Uint8Array {
    return CertificateID.encode(message).finish();
  },
  toProtoMsg(message: CertificateID): CertificateIDProtoMsg {
    return {
      typeUrl: "/akash.cert.v1beta3.CertificateID",
      value: CertificateID.encode(message).finish()
    };
  }
};
function createBaseCertificate(): Certificate {
  return {
    state: 0,
    cert: new Uint8Array(),
    pubkey: new Uint8Array()
  };
}
export const Certificate = {
  typeUrl: "/akash.cert.v1beta3.Certificate",
  encode(message: Certificate, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.state !== 0) {
      writer.uint32(16).int32(message.state);
    }
    if (message.cert.length !== 0) {
      writer.uint32(26).bytes(message.cert);
    }
    if (message.pubkey.length !== 0) {
      writer.uint32(34).bytes(message.pubkey);
    }
    return writer;
  },
  fromJSON(object: any): Certificate {
    return {
      state: isSet(object.state) ? certificate_StateFromJSON(object.state) : -1,
      cert: isSet(object.cert) ? bytesFromBase64(object.cert) : new Uint8Array(),
      pubkey: isSet(object.pubkey) ? bytesFromBase64(object.pubkey) : new Uint8Array()
    };
  },
  fromPartial(object: Partial<Certificate>): Certificate {
    const message = createBaseCertificate();
    message.state = object.state ?? 0;
    message.cert = object.cert ?? new Uint8Array();
    message.pubkey = object.pubkey ?? new Uint8Array();
    return message;
  },
  fromAmino(object: CertificateAmino): Certificate {
    const message = createBaseCertificate();
    if (object.state !== undefined && object.state !== null) {
      message.state = certificate_StateFromJSON(object.state);
    }
    if (object.cert !== undefined && object.cert !== null) {
      message.cert = bytesFromBase64(object.cert);
    }
    if (object.pubkey !== undefined && object.pubkey !== null) {
      message.pubkey = bytesFromBase64(object.pubkey);
    }
    return message;
  },
  toAmino(message: Certificate): CertificateAmino {
    const obj: any = {};
    obj.state = message.state;
    obj.cert = message.cert ? base64FromBytes(message.cert) : undefined;
    obj.pubkey = message.pubkey ? base64FromBytes(message.pubkey) : undefined;
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
      typeUrl: "/akash.cert.v1beta3.Certificate",
      value: Certificate.encode(message).finish()
    };
  }
};
function createBaseCertificateFilter(): CertificateFilter {
  return {
    owner: "",
    serial: "",
    state: ""
  };
}
export const CertificateFilter = {
  typeUrl: "/akash.cert.v1beta3.CertificateFilter",
  encode(message: CertificateFilter, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.owner !== "") {
      writer.uint32(10).string(message.owner);
    }
    if (message.serial !== "") {
      writer.uint32(18).string(message.serial);
    }
    if (message.state !== "") {
      writer.uint32(26).string(message.state);
    }
    return writer;
  },
  fromJSON(object: any): CertificateFilter {
    return {
      owner: isSet(object.owner) ? String(object.owner) : "",
      serial: isSet(object.serial) ? String(object.serial) : "",
      state: isSet(object.state) ? String(object.state) : ""
    };
  },
  fromPartial(object: Partial<CertificateFilter>): CertificateFilter {
    const message = createBaseCertificateFilter();
    message.owner = object.owner ?? "";
    message.serial = object.serial ?? "";
    message.state = object.state ?? "";
    return message;
  },
  fromAmino(object: CertificateFilterAmino): CertificateFilter {
    const message = createBaseCertificateFilter();
    if (object.owner !== undefined && object.owner !== null) {
      message.owner = object.owner;
    }
    if (object.serial !== undefined && object.serial !== null) {
      message.serial = object.serial;
    }
    if (object.state !== undefined && object.state !== null) {
      message.state = object.state;
    }
    return message;
  },
  toAmino(message: CertificateFilter): CertificateFilterAmino {
    const obj: any = {};
    obj.owner = message.owner;
    obj.serial = message.serial;
    obj.state = message.state;
    return obj;
  },
  fromAminoMsg(object: CertificateFilterAminoMsg): CertificateFilter {
    return CertificateFilter.fromAmino(object.value);
  },
  fromProtoMsg(message: CertificateFilterProtoMsg): CertificateFilter {
    return CertificateFilter.decode(message.value);
  },
  toProto(message: CertificateFilter): Uint8Array {
    return CertificateFilter.encode(message).finish();
  },
  toProtoMsg(message: CertificateFilter): CertificateFilterProtoMsg {
    return {
      typeUrl: "/akash.cert.v1beta3.CertificateFilter",
      value: CertificateFilter.encode(message).finish()
    };
  }
};
function createBaseMsgCreateCertificate(): MsgCreateCertificate {
  return {
    owner: "",
    cert: new Uint8Array(),
    pubkey: new Uint8Array()
  };
}
export const MsgCreateCertificate = {
  typeUrl: "/akash.cert.v1beta3.MsgCreateCertificate",
  encode(message: MsgCreateCertificate, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.owner !== "") {
      writer.uint32(10).string(message.owner);
    }
    if (message.cert.length !== 0) {
      writer.uint32(18).bytes(message.cert);
    }
    if (message.pubkey.length !== 0) {
      writer.uint32(26).bytes(message.pubkey);
    }
    return writer;
  },
  fromJSON(object: any): MsgCreateCertificate {
    return {
      owner: isSet(object.owner) ? String(object.owner) : "",
      cert: isSet(object.cert) ? bytesFromBase64(object.cert) : new Uint8Array(),
      pubkey: isSet(object.pubkey) ? bytesFromBase64(object.pubkey) : new Uint8Array()
    };
  },
  fromPartial(object: Partial<MsgCreateCertificate>): MsgCreateCertificate {
    const message = createBaseMsgCreateCertificate();
    message.owner = object.owner ?? "";
    message.cert = object.cert ?? new Uint8Array();
    message.pubkey = object.pubkey ?? new Uint8Array();
    return message;
  },
  fromAmino(object: MsgCreateCertificateAmino): MsgCreateCertificate {
    const message = createBaseMsgCreateCertificate();
    if (object.owner !== undefined && object.owner !== null) {
      message.owner = object.owner;
    }
    if (object.cert !== undefined && object.cert !== null) {
      message.cert = bytesFromBase64(object.cert);
    }
    if (object.pubkey !== undefined && object.pubkey !== null) {
      message.pubkey = bytesFromBase64(object.pubkey);
    }
    return message;
  },
  toAmino(message: MsgCreateCertificate): MsgCreateCertificateAmino {
    const obj: any = {};
    obj.owner = message.owner;
    obj.cert = message.cert ? base64FromBytes(message.cert) : undefined;
    obj.pubkey = message.pubkey ? base64FromBytes(message.pubkey) : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgCreateCertificateAminoMsg): MsgCreateCertificate {
    return MsgCreateCertificate.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgCreateCertificateProtoMsg): MsgCreateCertificate {
    return MsgCreateCertificate.decode(message.value);
  },
  toProto(message: MsgCreateCertificate): Uint8Array {
    return MsgCreateCertificate.encode(message).finish();
  },
  toProtoMsg(message: MsgCreateCertificate): MsgCreateCertificateProtoMsg {
    return {
      typeUrl: "/akash.cert.v1beta3.MsgCreateCertificate",
      value: MsgCreateCertificate.encode(message).finish()
    };
  }
};
function createBaseMsgCreateCertificateResponse(): MsgCreateCertificateResponse {
  return {};
}
export const MsgCreateCertificateResponse = {
  typeUrl: "/akash.cert.v1beta3.MsgCreateCertificateResponse",
  encode(_: MsgCreateCertificateResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  fromJSON(_: any): MsgCreateCertificateResponse {
    return {};
  },
  fromPartial(_: Partial<MsgCreateCertificateResponse>): MsgCreateCertificateResponse {
    const message = createBaseMsgCreateCertificateResponse();
    return message;
  },
  fromAmino(_: MsgCreateCertificateResponseAmino): MsgCreateCertificateResponse {
    const message = createBaseMsgCreateCertificateResponse();
    return message;
  },
  toAmino(_: MsgCreateCertificateResponse): MsgCreateCertificateResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgCreateCertificateResponseAminoMsg): MsgCreateCertificateResponse {
    return MsgCreateCertificateResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgCreateCertificateResponseProtoMsg): MsgCreateCertificateResponse {
    return MsgCreateCertificateResponse.decode(message.value);
  },
  toProto(message: MsgCreateCertificateResponse): Uint8Array {
    return MsgCreateCertificateResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgCreateCertificateResponse): MsgCreateCertificateResponseProtoMsg {
    return {
      typeUrl: "/akash.cert.v1beta3.MsgCreateCertificateResponse",
      value: MsgCreateCertificateResponse.encode(message).finish()
    };
  }
};
function createBaseMsgRevokeCertificate(): MsgRevokeCertificate {
  return {
    id: CertificateID.fromPartial({})
  };
}
export const MsgRevokeCertificate = {
  typeUrl: "/akash.cert.v1beta3.MsgRevokeCertificate",
  encode(message: MsgRevokeCertificate, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.id !== undefined) {
      CertificateID.encode(message.id, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): MsgRevokeCertificate {
    return {
      id: isSet(object.id) ? CertificateID.fromJSON(object.id) : undefined
    };
  },
  fromPartial(object: Partial<MsgRevokeCertificate>): MsgRevokeCertificate {
    const message = createBaseMsgRevokeCertificate();
    message.id = object.id !== undefined && object.id !== null ? CertificateID.fromPartial(object.id) : undefined;
    return message;
  },
  fromAmino(object: MsgRevokeCertificateAmino): MsgRevokeCertificate {
    const message = createBaseMsgRevokeCertificate();
    if (object.id !== undefined && object.id !== null) {
      message.id = CertificateID.fromAmino(object.id);
    }
    return message;
  },
  toAmino(message: MsgRevokeCertificate): MsgRevokeCertificateAmino {
    const obj: any = {};
    obj.id = message.id ? CertificateID.toAmino(message.id) : undefined;
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
      typeUrl: "/akash.cert.v1beta3.MsgRevokeCertificate",
      value: MsgRevokeCertificate.encode(message).finish()
    };
  }
};
function createBaseMsgRevokeCertificateResponse(): MsgRevokeCertificateResponse {
  return {};
}
export const MsgRevokeCertificateResponse = {
  typeUrl: "/akash.cert.v1beta3.MsgRevokeCertificateResponse",
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
      typeUrl: "/akash.cert.v1beta3.MsgRevokeCertificateResponse",
      value: MsgRevokeCertificateResponse.encode(message).finish()
    };
  }
};