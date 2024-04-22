import { KeyInfo, KeyInfoAmino, KeyInfoSDKType } from "./types";
import { KeyRole, SigKeyPair, SigKeyPairAmino, SigKeyPairSDKType, keyRoleFromJSON } from "../exported/v1beta1/types";
import { TrafficOut, TrafficOutAmino, TrafficOutSDKType, MessageOut_KeygenResult, MessageOut_SignResult } from "../tofnd/v1beta1/tofnd";
import { PollKey, PollKeyAmino, PollKeySDKType } from "../../vote/exported/v1beta1/types";
import { BinaryWriter } from "../../../binary";
import { isSet, bytesFromBase64, base64FromBytes } from "../../../helpers";
/** StartKeygenRequest indicate the start of keygen */
export interface StartKeygenRequest {
  sender: string;
  keyInfo: KeyInfo;
}
export interface StartKeygenRequestProtoMsg {
  typeUrl: "/axelar.tss.v1beta1.StartKeygenRequest";
  value: Uint8Array;
}
/** StartKeygenRequest indicate the start of keygen */
export interface StartKeygenRequestAmino {
  sender?: string;
  key_info?: KeyInfoAmino;
}
export interface StartKeygenRequestAminoMsg {
  type: "/axelar.tss.v1beta1.StartKeygenRequest";
  value: StartKeygenRequestAmino;
}
/** StartKeygenRequest indicate the start of keygen */
export interface StartKeygenRequestSDKType {
  sender: string;
  key_info: KeyInfoSDKType;
}
export interface StartKeygenResponse {}
export interface StartKeygenResponseProtoMsg {
  typeUrl: "/axelar.tss.v1beta1.StartKeygenResponse";
  value: Uint8Array;
}
export interface StartKeygenResponseAmino {}
export interface StartKeygenResponseAminoMsg {
  type: "/axelar.tss.v1beta1.StartKeygenResponse";
  value: StartKeygenResponseAmino;
}
export interface StartKeygenResponseSDKType {}
export interface RotateKeyRequest {
  sender: Uint8Array;
  chain: string;
  keyRole: KeyRole;
  keyId: string;
}
export interface RotateKeyRequestProtoMsg {
  typeUrl: "/axelar.tss.v1beta1.RotateKeyRequest";
  value: Uint8Array;
}
export interface RotateKeyRequestAmino {
  sender?: string;
  chain?: string;
  key_role?: KeyRole;
  key_id?: string;
}
export interface RotateKeyRequestAminoMsg {
  type: "/axelar.tss.v1beta1.RotateKeyRequest";
  value: RotateKeyRequestAmino;
}
export interface RotateKeyRequestSDKType {
  sender: Uint8Array;
  chain: string;
  key_role: KeyRole;
  key_id: string;
}
export interface RotateKeyResponse {}
export interface RotateKeyResponseProtoMsg {
  typeUrl: "/axelar.tss.v1beta1.RotateKeyResponse";
  value: Uint8Array;
}
export interface RotateKeyResponseAmino {}
export interface RotateKeyResponseAminoMsg {
  type: "/axelar.tss.v1beta1.RotateKeyResponse";
  value: RotateKeyResponseAmino;
}
export interface RotateKeyResponseSDKType {}
/** ProcessKeygenTrafficRequest protocol message */
export interface ProcessKeygenTrafficRequest {
  sender: Uint8Array;
  sessionId: string;
  payload: TrafficOut;
}
export interface ProcessKeygenTrafficRequestProtoMsg {
  typeUrl: "/axelar.tss.v1beta1.ProcessKeygenTrafficRequest";
  value: Uint8Array;
}
/** ProcessKeygenTrafficRequest protocol message */
export interface ProcessKeygenTrafficRequestAmino {
  sender?: string;
  session_id?: string;
  payload?: TrafficOutAmino;
}
export interface ProcessKeygenTrafficRequestAminoMsg {
  type: "/axelar.tss.v1beta1.ProcessKeygenTrafficRequest";
  value: ProcessKeygenTrafficRequestAmino;
}
/** ProcessKeygenTrafficRequest protocol message */
export interface ProcessKeygenTrafficRequestSDKType {
  sender: Uint8Array;
  session_id: string;
  payload: TrafficOutSDKType;
}
export interface ProcessKeygenTrafficResponse {}
export interface ProcessKeygenTrafficResponseProtoMsg {
  typeUrl: "/axelar.tss.v1beta1.ProcessKeygenTrafficResponse";
  value: Uint8Array;
}
export interface ProcessKeygenTrafficResponseAmino {}
export interface ProcessKeygenTrafficResponseAminoMsg {
  type: "/axelar.tss.v1beta1.ProcessKeygenTrafficResponse";
  value: ProcessKeygenTrafficResponseAmino;
}
export interface ProcessKeygenTrafficResponseSDKType {}
/** ProcessSignTrafficRequest protocol message */
export interface ProcessSignTrafficRequest {
  sender: Uint8Array;
  sessionId: string;
  payload: TrafficOut;
}
export interface ProcessSignTrafficRequestProtoMsg {
  typeUrl: "/axelar.tss.v1beta1.ProcessSignTrafficRequest";
  value: Uint8Array;
}
/** ProcessSignTrafficRequest protocol message */
export interface ProcessSignTrafficRequestAmino {
  sender?: string;
  session_id?: string;
  payload?: TrafficOutAmino;
}
export interface ProcessSignTrafficRequestAminoMsg {
  type: "/axelar.tss.v1beta1.ProcessSignTrafficRequest";
  value: ProcessSignTrafficRequestAmino;
}
/** ProcessSignTrafficRequest protocol message */
export interface ProcessSignTrafficRequestSDKType {
  sender: Uint8Array;
  session_id: string;
  payload: TrafficOutSDKType;
}
export interface ProcessSignTrafficResponse {}
export interface ProcessSignTrafficResponseProtoMsg {
  typeUrl: "/axelar.tss.v1beta1.ProcessSignTrafficResponse";
  value: Uint8Array;
}
export interface ProcessSignTrafficResponseAmino {}
export interface ProcessSignTrafficResponseAminoMsg {
  type: "/axelar.tss.v1beta1.ProcessSignTrafficResponse";
  value: ProcessSignTrafficResponseAmino;
}
export interface ProcessSignTrafficResponseSDKType {}
/** VotePubKeyRequest represents the message to vote on a public key */
export interface VotePubKeyRequest {
  sender: Uint8Array;
  pollKey: PollKey;
  result: MessageOut_KeygenResult;
}
export interface VotePubKeyRequestProtoMsg {
  typeUrl: "/axelar.tss.v1beta1.VotePubKeyRequest";
  value: Uint8Array;
}
/** VotePubKeyRequest represents the message to vote on a public key */
export interface VotePubKeyRequestAmino {
  sender?: string;
  poll_key?: PollKeyAmino;
  result?: MessageOut_KeygenResultAmino;
}
export interface VotePubKeyRequestAminoMsg {
  type: "/axelar.tss.v1beta1.VotePubKeyRequest";
  value: VotePubKeyRequestAmino;
}
/** VotePubKeyRequest represents the message to vote on a public key */
export interface VotePubKeyRequestSDKType {
  sender: Uint8Array;
  poll_key: PollKeySDKType;
  result: MessageOut_KeygenResultSDKType;
}
export interface VotePubKeyResponse {
  log: string;
}
export interface VotePubKeyResponseProtoMsg {
  typeUrl: "/axelar.tss.v1beta1.VotePubKeyResponse";
  value: Uint8Array;
}
export interface VotePubKeyResponseAmino {
  log?: string;
}
export interface VotePubKeyResponseAminoMsg {
  type: "/axelar.tss.v1beta1.VotePubKeyResponse";
  value: VotePubKeyResponseAmino;
}
export interface VotePubKeyResponseSDKType {
  log: string;
}
/** VoteSigRequest represents a message to vote for a signature */
export interface VoteSigRequest {
  sender: Uint8Array;
  pollKey: PollKey;
  result: MessageOut_SignResult;
}
export interface VoteSigRequestProtoMsg {
  typeUrl: "/axelar.tss.v1beta1.VoteSigRequest";
  value: Uint8Array;
}
/** VoteSigRequest represents a message to vote for a signature */
export interface VoteSigRequestAmino {
  sender?: string;
  poll_key?: PollKeyAmino;
  result?: MessageOut_SignResultAmino;
}
export interface VoteSigRequestAminoMsg {
  type: "/axelar.tss.v1beta1.VoteSigRequest";
  value: VoteSigRequestAmino;
}
/** VoteSigRequest represents a message to vote for a signature */
export interface VoteSigRequestSDKType {
  sender: Uint8Array;
  poll_key: PollKeySDKType;
  result: MessageOut_SignResultSDKType;
}
export interface VoteSigResponse {
  log: string;
}
export interface VoteSigResponseProtoMsg {
  typeUrl: "/axelar.tss.v1beta1.VoteSigResponse";
  value: Uint8Array;
}
export interface VoteSigResponseAmino {
  log?: string;
}
export interface VoteSigResponseAminoMsg {
  type: "/axelar.tss.v1beta1.VoteSigResponse";
  value: VoteSigResponseAmino;
}
export interface VoteSigResponseSDKType {
  log: string;
}
export interface HeartBeatRequest {
  sender: Uint8Array;
  keyIds: string[];
}
export interface HeartBeatRequestProtoMsg {
  typeUrl: "/axelar.tss.v1beta1.HeartBeatRequest";
  value: Uint8Array;
}
export interface HeartBeatRequestAmino {
  sender?: string;
  key_ids?: string[];
}
export interface HeartBeatRequestAminoMsg {
  type: "/axelar.tss.v1beta1.HeartBeatRequest";
  value: HeartBeatRequestAmino;
}
export interface HeartBeatRequestSDKType {
  sender: Uint8Array;
  key_ids: string[];
}
export interface HeartBeatResponse {}
export interface HeartBeatResponseProtoMsg {
  typeUrl: "/axelar.tss.v1beta1.HeartBeatResponse";
  value: Uint8Array;
}
export interface HeartBeatResponseAmino {}
export interface HeartBeatResponseAminoMsg {
  type: "/axelar.tss.v1beta1.HeartBeatResponse";
  value: HeartBeatResponseAmino;
}
export interface HeartBeatResponseSDKType {}
export interface RegisterExternalKeysRequest {
  sender: Uint8Array;
  chain: string;
  externalKeys: RegisterExternalKeysRequest_ExternalKey[];
}
export interface RegisterExternalKeysRequestProtoMsg {
  typeUrl: "/axelar.tss.v1beta1.RegisterExternalKeysRequest";
  value: Uint8Array;
}
export interface RegisterExternalKeysRequestAmino {
  sender?: string;
  chain?: string;
  external_keys?: RegisterExternalKeysRequest_ExternalKeyAmino[];
}
export interface RegisterExternalKeysRequestAminoMsg {
  type: "/axelar.tss.v1beta1.RegisterExternalKeysRequest";
  value: RegisterExternalKeysRequestAmino;
}
export interface RegisterExternalKeysRequestSDKType {
  sender: Uint8Array;
  chain: string;
  external_keys: RegisterExternalKeysRequest_ExternalKeySDKType[];
}
export interface RegisterExternalKeysRequest_ExternalKey {
  id: string;
  pubKey: Uint8Array;
}
export interface RegisterExternalKeysRequest_ExternalKeyProtoMsg {
  typeUrl: "/axelar.tss.v1beta1.ExternalKey";
  value: Uint8Array;
}
export interface RegisterExternalKeysRequest_ExternalKeyAmino {
  id?: string;
  pub_key?: string;
}
export interface RegisterExternalKeysRequest_ExternalKeyAminoMsg {
  type: "/axelar.tss.v1beta1.ExternalKey";
  value: RegisterExternalKeysRequest_ExternalKeyAmino;
}
export interface RegisterExternalKeysRequest_ExternalKeySDKType {
  id: string;
  pub_key: Uint8Array;
}
export interface RegisterExternalKeysResponse {}
export interface RegisterExternalKeysResponseProtoMsg {
  typeUrl: "/axelar.tss.v1beta1.RegisterExternalKeysResponse";
  value: Uint8Array;
}
export interface RegisterExternalKeysResponseAmino {}
export interface RegisterExternalKeysResponseAminoMsg {
  type: "/axelar.tss.v1beta1.RegisterExternalKeysResponse";
  value: RegisterExternalKeysResponseAmino;
}
export interface RegisterExternalKeysResponseSDKType {}
export interface SubmitMultisigPubKeysRequest {
  sender: Uint8Array;
  keyId: string;
  sigKeyPairs: SigKeyPair[];
}
export interface SubmitMultisigPubKeysRequestProtoMsg {
  typeUrl: "/axelar.tss.v1beta1.SubmitMultisigPubKeysRequest";
  value: Uint8Array;
}
export interface SubmitMultisigPubKeysRequestAmino {
  sender?: string;
  key_id?: string;
  sig_key_pairs?: SigKeyPairAmino[];
}
export interface SubmitMultisigPubKeysRequestAminoMsg {
  type: "/axelar.tss.v1beta1.SubmitMultisigPubKeysRequest";
  value: SubmitMultisigPubKeysRequestAmino;
}
export interface SubmitMultisigPubKeysRequestSDKType {
  sender: Uint8Array;
  key_id: string;
  sig_key_pairs: SigKeyPairSDKType[];
}
export interface SubmitMultisigPubKeysResponse {}
export interface SubmitMultisigPubKeysResponseProtoMsg {
  typeUrl: "/axelar.tss.v1beta1.SubmitMultisigPubKeysResponse";
  value: Uint8Array;
}
export interface SubmitMultisigPubKeysResponseAmino {}
export interface SubmitMultisigPubKeysResponseAminoMsg {
  type: "/axelar.tss.v1beta1.SubmitMultisigPubKeysResponse";
  value: SubmitMultisigPubKeysResponseAmino;
}
export interface SubmitMultisigPubKeysResponseSDKType {}
export interface SubmitMultisigSignaturesRequest {
  sender: Uint8Array;
  sigId: string;
  signatures: Uint8Array[];
}
export interface SubmitMultisigSignaturesRequestProtoMsg {
  typeUrl: "/axelar.tss.v1beta1.SubmitMultisigSignaturesRequest";
  value: Uint8Array;
}
export interface SubmitMultisigSignaturesRequestAmino {
  sender?: string;
  sig_id?: string;
  signatures?: string[];
}
export interface SubmitMultisigSignaturesRequestAminoMsg {
  type: "/axelar.tss.v1beta1.SubmitMultisigSignaturesRequest";
  value: SubmitMultisigSignaturesRequestAmino;
}
export interface SubmitMultisigSignaturesRequestSDKType {
  sender: Uint8Array;
  sig_id: string;
  signatures: Uint8Array[];
}
export interface SubmitMultisigSignaturesResponse {}
export interface SubmitMultisigSignaturesResponseProtoMsg {
  typeUrl: "/axelar.tss.v1beta1.SubmitMultisigSignaturesResponse";
  value: Uint8Array;
}
export interface SubmitMultisigSignaturesResponseAmino {}
export interface SubmitMultisigSignaturesResponseAminoMsg {
  type: "/axelar.tss.v1beta1.SubmitMultisigSignaturesResponse";
  value: SubmitMultisigSignaturesResponseAmino;
}
export interface SubmitMultisigSignaturesResponseSDKType {}
function createBaseStartKeygenRequest(): StartKeygenRequest {
  return {
    sender: "",
    keyInfo: KeyInfo.fromPartial({})
  };
}
export const StartKeygenRequest = {
  typeUrl: "/axelar.tss.v1beta1.StartKeygenRequest",
  encode(message: StartKeygenRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.sender !== "") {
      writer.uint32(10).string(message.sender);
    }
    if (message.keyInfo !== undefined) {
      KeyInfo.encode(message.keyInfo, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): StartKeygenRequest {
    return {
      sender: isSet(object.sender) ? String(object.sender) : "",
      keyInfo: isSet(object.keyInfo) ? KeyInfo.fromJSON(object.keyInfo) : undefined
    };
  },
  fromPartial(object: Partial<StartKeygenRequest>): StartKeygenRequest {
    const message = createBaseStartKeygenRequest();
    message.sender = object.sender ?? "";
    message.keyInfo = object.keyInfo !== undefined && object.keyInfo !== null ? KeyInfo.fromPartial(object.keyInfo) : undefined;
    return message;
  },
  fromAmino(object: StartKeygenRequestAmino): StartKeygenRequest {
    const message = createBaseStartKeygenRequest();
    if (object.sender !== undefined && object.sender !== null) {
      message.sender = object.sender;
    }
    if (object.key_info !== undefined && object.key_info !== null) {
      message.keyInfo = KeyInfo.fromAmino(object.key_info);
    }
    return message;
  },
  toAmino(message: StartKeygenRequest): StartKeygenRequestAmino {
    const obj: any = {};
    obj.sender = message.sender;
    obj.key_info = message.keyInfo ? KeyInfo.toAmino(message.keyInfo) : undefined;
    return obj;
  },
  fromAminoMsg(object: StartKeygenRequestAminoMsg): StartKeygenRequest {
    return StartKeygenRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: StartKeygenRequestProtoMsg): StartKeygenRequest {
    return StartKeygenRequest.decode(message.value);
  },
  toProto(message: StartKeygenRequest): Uint8Array {
    return StartKeygenRequest.encode(message).finish();
  },
  toProtoMsg(message: StartKeygenRequest): StartKeygenRequestProtoMsg {
    return {
      typeUrl: "/axelar.tss.v1beta1.StartKeygenRequest",
      value: StartKeygenRequest.encode(message).finish()
    };
  }
};
function createBaseStartKeygenResponse(): StartKeygenResponse {
  return {};
}
export const StartKeygenResponse = {
  typeUrl: "/axelar.tss.v1beta1.StartKeygenResponse",
  encode(_: StartKeygenResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  fromJSON(_: any): StartKeygenResponse {
    return {};
  },
  fromPartial(_: Partial<StartKeygenResponse>): StartKeygenResponse {
    const message = createBaseStartKeygenResponse();
    return message;
  },
  fromAmino(_: StartKeygenResponseAmino): StartKeygenResponse {
    const message = createBaseStartKeygenResponse();
    return message;
  },
  toAmino(_: StartKeygenResponse): StartKeygenResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: StartKeygenResponseAminoMsg): StartKeygenResponse {
    return StartKeygenResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: StartKeygenResponseProtoMsg): StartKeygenResponse {
    return StartKeygenResponse.decode(message.value);
  },
  toProto(message: StartKeygenResponse): Uint8Array {
    return StartKeygenResponse.encode(message).finish();
  },
  toProtoMsg(message: StartKeygenResponse): StartKeygenResponseProtoMsg {
    return {
      typeUrl: "/axelar.tss.v1beta1.StartKeygenResponse",
      value: StartKeygenResponse.encode(message).finish()
    };
  }
};
function createBaseRotateKeyRequest(): RotateKeyRequest {
  return {
    sender: new Uint8Array(),
    chain: "",
    keyRole: 0,
    keyId: ""
  };
}
export const RotateKeyRequest = {
  typeUrl: "/axelar.tss.v1beta1.RotateKeyRequest",
  encode(message: RotateKeyRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.sender.length !== 0) {
      writer.uint32(10).bytes(message.sender);
    }
    if (message.chain !== "") {
      writer.uint32(18).string(message.chain);
    }
    if (message.keyRole !== 0) {
      writer.uint32(24).int32(message.keyRole);
    }
    if (message.keyId !== "") {
      writer.uint32(34).string(message.keyId);
    }
    return writer;
  },
  fromJSON(object: any): RotateKeyRequest {
    return {
      sender: isSet(object.sender) ? bytesFromBase64(object.sender) : new Uint8Array(),
      chain: isSet(object.chain) ? String(object.chain) : "",
      keyRole: isSet(object.keyRole) ? keyRoleFromJSON(object.keyRole) : -1,
      keyId: isSet(object.keyId) ? String(object.keyId) : ""
    };
  },
  fromPartial(object: Partial<RotateKeyRequest>): RotateKeyRequest {
    const message = createBaseRotateKeyRequest();
    message.sender = object.sender ?? new Uint8Array();
    message.chain = object.chain ?? "";
    message.keyRole = object.keyRole ?? 0;
    message.keyId = object.keyId ?? "";
    return message;
  },
  fromAmino(object: RotateKeyRequestAmino): RotateKeyRequest {
    const message = createBaseRotateKeyRequest();
    if (object.sender !== undefined && object.sender !== null) {
      message.sender = bytesFromBase64(object.sender);
    }
    if (object.chain !== undefined && object.chain !== null) {
      message.chain = object.chain;
    }
    if (object.key_role !== undefined && object.key_role !== null) {
      message.keyRole = keyRoleFromJSON(object.key_role);
    }
    if (object.key_id !== undefined && object.key_id !== null) {
      message.keyId = object.key_id;
    }
    return message;
  },
  toAmino(message: RotateKeyRequest): RotateKeyRequestAmino {
    const obj: any = {};
    obj.sender = message.sender ? base64FromBytes(message.sender) : undefined;
    obj.chain = message.chain;
    obj.key_role = message.keyRole;
    obj.key_id = message.keyId;
    return obj;
  },
  fromAminoMsg(object: RotateKeyRequestAminoMsg): RotateKeyRequest {
    return RotateKeyRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: RotateKeyRequestProtoMsg): RotateKeyRequest {
    return RotateKeyRequest.decode(message.value);
  },
  toProto(message: RotateKeyRequest): Uint8Array {
    return RotateKeyRequest.encode(message).finish();
  },
  toProtoMsg(message: RotateKeyRequest): RotateKeyRequestProtoMsg {
    return {
      typeUrl: "/axelar.tss.v1beta1.RotateKeyRequest",
      value: RotateKeyRequest.encode(message).finish()
    };
  }
};
function createBaseRotateKeyResponse(): RotateKeyResponse {
  return {};
}
export const RotateKeyResponse = {
  typeUrl: "/axelar.tss.v1beta1.RotateKeyResponse",
  encode(_: RotateKeyResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  fromJSON(_: any): RotateKeyResponse {
    return {};
  },
  fromPartial(_: Partial<RotateKeyResponse>): RotateKeyResponse {
    const message = createBaseRotateKeyResponse();
    return message;
  },
  fromAmino(_: RotateKeyResponseAmino): RotateKeyResponse {
    const message = createBaseRotateKeyResponse();
    return message;
  },
  toAmino(_: RotateKeyResponse): RotateKeyResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: RotateKeyResponseAminoMsg): RotateKeyResponse {
    return RotateKeyResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: RotateKeyResponseProtoMsg): RotateKeyResponse {
    return RotateKeyResponse.decode(message.value);
  },
  toProto(message: RotateKeyResponse): Uint8Array {
    return RotateKeyResponse.encode(message).finish();
  },
  toProtoMsg(message: RotateKeyResponse): RotateKeyResponseProtoMsg {
    return {
      typeUrl: "/axelar.tss.v1beta1.RotateKeyResponse",
      value: RotateKeyResponse.encode(message).finish()
    };
  }
};
function createBaseProcessKeygenTrafficRequest(): ProcessKeygenTrafficRequest {
  return {
    sender: new Uint8Array(),
    sessionId: "",
    payload: TrafficOut.fromPartial({})
  };
}
export const ProcessKeygenTrafficRequest = {
  typeUrl: "/axelar.tss.v1beta1.ProcessKeygenTrafficRequest",
  encode(message: ProcessKeygenTrafficRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.sender.length !== 0) {
      writer.uint32(10).bytes(message.sender);
    }
    if (message.sessionId !== "") {
      writer.uint32(18).string(message.sessionId);
    }
    if (message.payload !== undefined) {
      TrafficOut.encode(message.payload, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): ProcessKeygenTrafficRequest {
    return {
      sender: isSet(object.sender) ? bytesFromBase64(object.sender) : new Uint8Array(),
      sessionId: isSet(object.sessionId) ? String(object.sessionId) : "",
      payload: isSet(object.payload) ? TrafficOut.fromJSON(object.payload) : undefined
    };
  },
  fromPartial(object: Partial<ProcessKeygenTrafficRequest>): ProcessKeygenTrafficRequest {
    const message = createBaseProcessKeygenTrafficRequest();
    message.sender = object.sender ?? new Uint8Array();
    message.sessionId = object.sessionId ?? "";
    message.payload = object.payload !== undefined && object.payload !== null ? TrafficOut.fromPartial(object.payload) : undefined;
    return message;
  },
  fromAmino(object: ProcessKeygenTrafficRequestAmino): ProcessKeygenTrafficRequest {
    const message = createBaseProcessKeygenTrafficRequest();
    if (object.sender !== undefined && object.sender !== null) {
      message.sender = bytesFromBase64(object.sender);
    }
    if (object.session_id !== undefined && object.session_id !== null) {
      message.sessionId = object.session_id;
    }
    if (object.payload !== undefined && object.payload !== null) {
      message.payload = TrafficOut.fromAmino(object.payload);
    }
    return message;
  },
  toAmino(message: ProcessKeygenTrafficRequest): ProcessKeygenTrafficRequestAmino {
    const obj: any = {};
    obj.sender = message.sender ? base64FromBytes(message.sender) : undefined;
    obj.session_id = message.sessionId;
    obj.payload = message.payload ? TrafficOut.toAmino(message.payload) : undefined;
    return obj;
  },
  fromAminoMsg(object: ProcessKeygenTrafficRequestAminoMsg): ProcessKeygenTrafficRequest {
    return ProcessKeygenTrafficRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: ProcessKeygenTrafficRequestProtoMsg): ProcessKeygenTrafficRequest {
    return ProcessKeygenTrafficRequest.decode(message.value);
  },
  toProto(message: ProcessKeygenTrafficRequest): Uint8Array {
    return ProcessKeygenTrafficRequest.encode(message).finish();
  },
  toProtoMsg(message: ProcessKeygenTrafficRequest): ProcessKeygenTrafficRequestProtoMsg {
    return {
      typeUrl: "/axelar.tss.v1beta1.ProcessKeygenTrafficRequest",
      value: ProcessKeygenTrafficRequest.encode(message).finish()
    };
  }
};
function createBaseProcessKeygenTrafficResponse(): ProcessKeygenTrafficResponse {
  return {};
}
export const ProcessKeygenTrafficResponse = {
  typeUrl: "/axelar.tss.v1beta1.ProcessKeygenTrafficResponse",
  encode(_: ProcessKeygenTrafficResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  fromJSON(_: any): ProcessKeygenTrafficResponse {
    return {};
  },
  fromPartial(_: Partial<ProcessKeygenTrafficResponse>): ProcessKeygenTrafficResponse {
    const message = createBaseProcessKeygenTrafficResponse();
    return message;
  },
  fromAmino(_: ProcessKeygenTrafficResponseAmino): ProcessKeygenTrafficResponse {
    const message = createBaseProcessKeygenTrafficResponse();
    return message;
  },
  toAmino(_: ProcessKeygenTrafficResponse): ProcessKeygenTrafficResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: ProcessKeygenTrafficResponseAminoMsg): ProcessKeygenTrafficResponse {
    return ProcessKeygenTrafficResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: ProcessKeygenTrafficResponseProtoMsg): ProcessKeygenTrafficResponse {
    return ProcessKeygenTrafficResponse.decode(message.value);
  },
  toProto(message: ProcessKeygenTrafficResponse): Uint8Array {
    return ProcessKeygenTrafficResponse.encode(message).finish();
  },
  toProtoMsg(message: ProcessKeygenTrafficResponse): ProcessKeygenTrafficResponseProtoMsg {
    return {
      typeUrl: "/axelar.tss.v1beta1.ProcessKeygenTrafficResponse",
      value: ProcessKeygenTrafficResponse.encode(message).finish()
    };
  }
};
function createBaseProcessSignTrafficRequest(): ProcessSignTrafficRequest {
  return {
    sender: new Uint8Array(),
    sessionId: "",
    payload: TrafficOut.fromPartial({})
  };
}
export const ProcessSignTrafficRequest = {
  typeUrl: "/axelar.tss.v1beta1.ProcessSignTrafficRequest",
  encode(message: ProcessSignTrafficRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.sender.length !== 0) {
      writer.uint32(10).bytes(message.sender);
    }
    if (message.sessionId !== "") {
      writer.uint32(18).string(message.sessionId);
    }
    if (message.payload !== undefined) {
      TrafficOut.encode(message.payload, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): ProcessSignTrafficRequest {
    return {
      sender: isSet(object.sender) ? bytesFromBase64(object.sender) : new Uint8Array(),
      sessionId: isSet(object.sessionId) ? String(object.sessionId) : "",
      payload: isSet(object.payload) ? TrafficOut.fromJSON(object.payload) : undefined
    };
  },
  fromPartial(object: Partial<ProcessSignTrafficRequest>): ProcessSignTrafficRequest {
    const message = createBaseProcessSignTrafficRequest();
    message.sender = object.sender ?? new Uint8Array();
    message.sessionId = object.sessionId ?? "";
    message.payload = object.payload !== undefined && object.payload !== null ? TrafficOut.fromPartial(object.payload) : undefined;
    return message;
  },
  fromAmino(object: ProcessSignTrafficRequestAmino): ProcessSignTrafficRequest {
    const message = createBaseProcessSignTrafficRequest();
    if (object.sender !== undefined && object.sender !== null) {
      message.sender = bytesFromBase64(object.sender);
    }
    if (object.session_id !== undefined && object.session_id !== null) {
      message.sessionId = object.session_id;
    }
    if (object.payload !== undefined && object.payload !== null) {
      message.payload = TrafficOut.fromAmino(object.payload);
    }
    return message;
  },
  toAmino(message: ProcessSignTrafficRequest): ProcessSignTrafficRequestAmino {
    const obj: any = {};
    obj.sender = message.sender ? base64FromBytes(message.sender) : undefined;
    obj.session_id = message.sessionId;
    obj.payload = message.payload ? TrafficOut.toAmino(message.payload) : undefined;
    return obj;
  },
  fromAminoMsg(object: ProcessSignTrafficRequestAminoMsg): ProcessSignTrafficRequest {
    return ProcessSignTrafficRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: ProcessSignTrafficRequestProtoMsg): ProcessSignTrafficRequest {
    return ProcessSignTrafficRequest.decode(message.value);
  },
  toProto(message: ProcessSignTrafficRequest): Uint8Array {
    return ProcessSignTrafficRequest.encode(message).finish();
  },
  toProtoMsg(message: ProcessSignTrafficRequest): ProcessSignTrafficRequestProtoMsg {
    return {
      typeUrl: "/axelar.tss.v1beta1.ProcessSignTrafficRequest",
      value: ProcessSignTrafficRequest.encode(message).finish()
    };
  }
};
function createBaseProcessSignTrafficResponse(): ProcessSignTrafficResponse {
  return {};
}
export const ProcessSignTrafficResponse = {
  typeUrl: "/axelar.tss.v1beta1.ProcessSignTrafficResponse",
  encode(_: ProcessSignTrafficResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  fromJSON(_: any): ProcessSignTrafficResponse {
    return {};
  },
  fromPartial(_: Partial<ProcessSignTrafficResponse>): ProcessSignTrafficResponse {
    const message = createBaseProcessSignTrafficResponse();
    return message;
  },
  fromAmino(_: ProcessSignTrafficResponseAmino): ProcessSignTrafficResponse {
    const message = createBaseProcessSignTrafficResponse();
    return message;
  },
  toAmino(_: ProcessSignTrafficResponse): ProcessSignTrafficResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: ProcessSignTrafficResponseAminoMsg): ProcessSignTrafficResponse {
    return ProcessSignTrafficResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: ProcessSignTrafficResponseProtoMsg): ProcessSignTrafficResponse {
    return ProcessSignTrafficResponse.decode(message.value);
  },
  toProto(message: ProcessSignTrafficResponse): Uint8Array {
    return ProcessSignTrafficResponse.encode(message).finish();
  },
  toProtoMsg(message: ProcessSignTrafficResponse): ProcessSignTrafficResponseProtoMsg {
    return {
      typeUrl: "/axelar.tss.v1beta1.ProcessSignTrafficResponse",
      value: ProcessSignTrafficResponse.encode(message).finish()
    };
  }
};
function createBaseVotePubKeyRequest(): VotePubKeyRequest {
  return {
    sender: new Uint8Array(),
    pollKey: PollKey.fromPartial({}),
    result: MessageOut_KeygenResult.fromPartial({})
  };
}
export const VotePubKeyRequest = {
  typeUrl: "/axelar.tss.v1beta1.VotePubKeyRequest",
  encode(message: VotePubKeyRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.sender.length !== 0) {
      writer.uint32(10).bytes(message.sender);
    }
    if (message.pollKey !== undefined) {
      PollKey.encode(message.pollKey, writer.uint32(18).fork()).ldelim();
    }
    if (message.result !== undefined) {
      MessageOut_KeygenResult.encode(message.result, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): VotePubKeyRequest {
    return {
      sender: isSet(object.sender) ? bytesFromBase64(object.sender) : new Uint8Array(),
      pollKey: isSet(object.pollKey) ? PollKey.fromJSON(object.pollKey) : undefined,
      result: isSet(object.result) ? MessageOut_KeygenResult.fromJSON(object.result) : undefined
    };
  },
  fromPartial(object: Partial<VotePubKeyRequest>): VotePubKeyRequest {
    const message = createBaseVotePubKeyRequest();
    message.sender = object.sender ?? new Uint8Array();
    message.pollKey = object.pollKey !== undefined && object.pollKey !== null ? PollKey.fromPartial(object.pollKey) : undefined;
    message.result = object.result !== undefined && object.result !== null ? MessageOut_KeygenResult.fromPartial(object.result) : undefined;
    return message;
  },
  fromAmino(object: VotePubKeyRequestAmino): VotePubKeyRequest {
    const message = createBaseVotePubKeyRequest();
    if (object.sender !== undefined && object.sender !== null) {
      message.sender = bytesFromBase64(object.sender);
    }
    if (object.poll_key !== undefined && object.poll_key !== null) {
      message.pollKey = PollKey.fromAmino(object.poll_key);
    }
    if (object.result !== undefined && object.result !== null) {
      message.result = MessageOut_KeygenResult.fromAmino(object.result);
    }
    return message;
  },
  toAmino(message: VotePubKeyRequest): VotePubKeyRequestAmino {
    const obj: any = {};
    obj.sender = message.sender ? base64FromBytes(message.sender) : undefined;
    obj.poll_key = message.pollKey ? PollKey.toAmino(message.pollKey) : undefined;
    obj.result = message.result ? MessageOut_KeygenResult.toAmino(message.result) : undefined;
    return obj;
  },
  fromAminoMsg(object: VotePubKeyRequestAminoMsg): VotePubKeyRequest {
    return VotePubKeyRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: VotePubKeyRequestProtoMsg): VotePubKeyRequest {
    return VotePubKeyRequest.decode(message.value);
  },
  toProto(message: VotePubKeyRequest): Uint8Array {
    return VotePubKeyRequest.encode(message).finish();
  },
  toProtoMsg(message: VotePubKeyRequest): VotePubKeyRequestProtoMsg {
    return {
      typeUrl: "/axelar.tss.v1beta1.VotePubKeyRequest",
      value: VotePubKeyRequest.encode(message).finish()
    };
  }
};
function createBaseVotePubKeyResponse(): VotePubKeyResponse {
  return {
    log: ""
  };
}
export const VotePubKeyResponse = {
  typeUrl: "/axelar.tss.v1beta1.VotePubKeyResponse",
  encode(message: VotePubKeyResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.log !== "") {
      writer.uint32(10).string(message.log);
    }
    return writer;
  },
  fromJSON(object: any): VotePubKeyResponse {
    return {
      log: isSet(object.log) ? String(object.log) : ""
    };
  },
  fromPartial(object: Partial<VotePubKeyResponse>): VotePubKeyResponse {
    const message = createBaseVotePubKeyResponse();
    message.log = object.log ?? "";
    return message;
  },
  fromAmino(object: VotePubKeyResponseAmino): VotePubKeyResponse {
    const message = createBaseVotePubKeyResponse();
    if (object.log !== undefined && object.log !== null) {
      message.log = object.log;
    }
    return message;
  },
  toAmino(message: VotePubKeyResponse): VotePubKeyResponseAmino {
    const obj: any = {};
    obj.log = message.log;
    return obj;
  },
  fromAminoMsg(object: VotePubKeyResponseAminoMsg): VotePubKeyResponse {
    return VotePubKeyResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: VotePubKeyResponseProtoMsg): VotePubKeyResponse {
    return VotePubKeyResponse.decode(message.value);
  },
  toProto(message: VotePubKeyResponse): Uint8Array {
    return VotePubKeyResponse.encode(message).finish();
  },
  toProtoMsg(message: VotePubKeyResponse): VotePubKeyResponseProtoMsg {
    return {
      typeUrl: "/axelar.tss.v1beta1.VotePubKeyResponse",
      value: VotePubKeyResponse.encode(message).finish()
    };
  }
};
function createBaseVoteSigRequest(): VoteSigRequest {
  return {
    sender: new Uint8Array(),
    pollKey: PollKey.fromPartial({}),
    result: MessageOut_SignResult.fromPartial({})
  };
}
export const VoteSigRequest = {
  typeUrl: "/axelar.tss.v1beta1.VoteSigRequest",
  encode(message: VoteSigRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.sender.length !== 0) {
      writer.uint32(10).bytes(message.sender);
    }
    if (message.pollKey !== undefined) {
      PollKey.encode(message.pollKey, writer.uint32(18).fork()).ldelim();
    }
    if (message.result !== undefined) {
      MessageOut_SignResult.encode(message.result, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): VoteSigRequest {
    return {
      sender: isSet(object.sender) ? bytesFromBase64(object.sender) : new Uint8Array(),
      pollKey: isSet(object.pollKey) ? PollKey.fromJSON(object.pollKey) : undefined,
      result: isSet(object.result) ? MessageOut_SignResult.fromJSON(object.result) : undefined
    };
  },
  fromPartial(object: Partial<VoteSigRequest>): VoteSigRequest {
    const message = createBaseVoteSigRequest();
    message.sender = object.sender ?? new Uint8Array();
    message.pollKey = object.pollKey !== undefined && object.pollKey !== null ? PollKey.fromPartial(object.pollKey) : undefined;
    message.result = object.result !== undefined && object.result !== null ? MessageOut_SignResult.fromPartial(object.result) : undefined;
    return message;
  },
  fromAmino(object: VoteSigRequestAmino): VoteSigRequest {
    const message = createBaseVoteSigRequest();
    if (object.sender !== undefined && object.sender !== null) {
      message.sender = bytesFromBase64(object.sender);
    }
    if (object.poll_key !== undefined && object.poll_key !== null) {
      message.pollKey = PollKey.fromAmino(object.poll_key);
    }
    if (object.result !== undefined && object.result !== null) {
      message.result = MessageOut_SignResult.fromAmino(object.result);
    }
    return message;
  },
  toAmino(message: VoteSigRequest): VoteSigRequestAmino {
    const obj: any = {};
    obj.sender = message.sender ? base64FromBytes(message.sender) : undefined;
    obj.poll_key = message.pollKey ? PollKey.toAmino(message.pollKey) : undefined;
    obj.result = message.result ? MessageOut_SignResult.toAmino(message.result) : undefined;
    return obj;
  },
  fromAminoMsg(object: VoteSigRequestAminoMsg): VoteSigRequest {
    return VoteSigRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: VoteSigRequestProtoMsg): VoteSigRequest {
    return VoteSigRequest.decode(message.value);
  },
  toProto(message: VoteSigRequest): Uint8Array {
    return VoteSigRequest.encode(message).finish();
  },
  toProtoMsg(message: VoteSigRequest): VoteSigRequestProtoMsg {
    return {
      typeUrl: "/axelar.tss.v1beta1.VoteSigRequest",
      value: VoteSigRequest.encode(message).finish()
    };
  }
};
function createBaseVoteSigResponse(): VoteSigResponse {
  return {
    log: ""
  };
}
export const VoteSigResponse = {
  typeUrl: "/axelar.tss.v1beta1.VoteSigResponse",
  encode(message: VoteSigResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.log !== "") {
      writer.uint32(10).string(message.log);
    }
    return writer;
  },
  fromJSON(object: any): VoteSigResponse {
    return {
      log: isSet(object.log) ? String(object.log) : ""
    };
  },
  fromPartial(object: Partial<VoteSigResponse>): VoteSigResponse {
    const message = createBaseVoteSigResponse();
    message.log = object.log ?? "";
    return message;
  },
  fromAmino(object: VoteSigResponseAmino): VoteSigResponse {
    const message = createBaseVoteSigResponse();
    if (object.log !== undefined && object.log !== null) {
      message.log = object.log;
    }
    return message;
  },
  toAmino(message: VoteSigResponse): VoteSigResponseAmino {
    const obj: any = {};
    obj.log = message.log;
    return obj;
  },
  fromAminoMsg(object: VoteSigResponseAminoMsg): VoteSigResponse {
    return VoteSigResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: VoteSigResponseProtoMsg): VoteSigResponse {
    return VoteSigResponse.decode(message.value);
  },
  toProto(message: VoteSigResponse): Uint8Array {
    return VoteSigResponse.encode(message).finish();
  },
  toProtoMsg(message: VoteSigResponse): VoteSigResponseProtoMsg {
    return {
      typeUrl: "/axelar.tss.v1beta1.VoteSigResponse",
      value: VoteSigResponse.encode(message).finish()
    };
  }
};
function createBaseHeartBeatRequest(): HeartBeatRequest {
  return {
    sender: new Uint8Array(),
    keyIds: []
  };
}
export const HeartBeatRequest = {
  typeUrl: "/axelar.tss.v1beta1.HeartBeatRequest",
  encode(message: HeartBeatRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.sender.length !== 0) {
      writer.uint32(10).bytes(message.sender);
    }
    for (const v of message.keyIds) {
      writer.uint32(18).string(v!);
    }
    return writer;
  },
  fromJSON(object: any): HeartBeatRequest {
    return {
      sender: isSet(object.sender) ? bytesFromBase64(object.sender) : new Uint8Array(),
      keyIds: Array.isArray(object?.keyIds) ? object.keyIds.map((e: any) => String(e)) : []
    };
  },
  fromPartial(object: Partial<HeartBeatRequest>): HeartBeatRequest {
    const message = createBaseHeartBeatRequest();
    message.sender = object.sender ?? new Uint8Array();
    message.keyIds = object.keyIds?.map(e => e) || [];
    return message;
  },
  fromAmino(object: HeartBeatRequestAmino): HeartBeatRequest {
    const message = createBaseHeartBeatRequest();
    if (object.sender !== undefined && object.sender !== null) {
      message.sender = bytesFromBase64(object.sender);
    }
    message.keyIds = object.key_ids?.map(e => e) || [];
    return message;
  },
  toAmino(message: HeartBeatRequest): HeartBeatRequestAmino {
    const obj: any = {};
    obj.sender = message.sender ? base64FromBytes(message.sender) : undefined;
    if (message.keyIds) {
      obj.key_ids = message.keyIds.map(e => e);
    } else {
      obj.key_ids = [];
    }
    return obj;
  },
  fromAminoMsg(object: HeartBeatRequestAminoMsg): HeartBeatRequest {
    return HeartBeatRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: HeartBeatRequestProtoMsg): HeartBeatRequest {
    return HeartBeatRequest.decode(message.value);
  },
  toProto(message: HeartBeatRequest): Uint8Array {
    return HeartBeatRequest.encode(message).finish();
  },
  toProtoMsg(message: HeartBeatRequest): HeartBeatRequestProtoMsg {
    return {
      typeUrl: "/axelar.tss.v1beta1.HeartBeatRequest",
      value: HeartBeatRequest.encode(message).finish()
    };
  }
};
function createBaseHeartBeatResponse(): HeartBeatResponse {
  return {};
}
export const HeartBeatResponse = {
  typeUrl: "/axelar.tss.v1beta1.HeartBeatResponse",
  encode(_: HeartBeatResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  fromJSON(_: any): HeartBeatResponse {
    return {};
  },
  fromPartial(_: Partial<HeartBeatResponse>): HeartBeatResponse {
    const message = createBaseHeartBeatResponse();
    return message;
  },
  fromAmino(_: HeartBeatResponseAmino): HeartBeatResponse {
    const message = createBaseHeartBeatResponse();
    return message;
  },
  toAmino(_: HeartBeatResponse): HeartBeatResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: HeartBeatResponseAminoMsg): HeartBeatResponse {
    return HeartBeatResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: HeartBeatResponseProtoMsg): HeartBeatResponse {
    return HeartBeatResponse.decode(message.value);
  },
  toProto(message: HeartBeatResponse): Uint8Array {
    return HeartBeatResponse.encode(message).finish();
  },
  toProtoMsg(message: HeartBeatResponse): HeartBeatResponseProtoMsg {
    return {
      typeUrl: "/axelar.tss.v1beta1.HeartBeatResponse",
      value: HeartBeatResponse.encode(message).finish()
    };
  }
};
function createBaseRegisterExternalKeysRequest(): RegisterExternalKeysRequest {
  return {
    sender: new Uint8Array(),
    chain: "",
    externalKeys: []
  };
}
export const RegisterExternalKeysRequest = {
  typeUrl: "/axelar.tss.v1beta1.RegisterExternalKeysRequest",
  encode(message: RegisterExternalKeysRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.sender.length !== 0) {
      writer.uint32(10).bytes(message.sender);
    }
    if (message.chain !== "") {
      writer.uint32(18).string(message.chain);
    }
    for (const v of message.externalKeys) {
      RegisterExternalKeysRequest_ExternalKey.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): RegisterExternalKeysRequest {
    return {
      sender: isSet(object.sender) ? bytesFromBase64(object.sender) : new Uint8Array(),
      chain: isSet(object.chain) ? String(object.chain) : "",
      externalKeys: Array.isArray(object?.externalKeys) ? object.externalKeys.map((e: any) => RegisterExternalKeysRequest_ExternalKey.fromJSON(e)) : []
    };
  },
  fromPartial(object: Partial<RegisterExternalKeysRequest>): RegisterExternalKeysRequest {
    const message = createBaseRegisterExternalKeysRequest();
    message.sender = object.sender ?? new Uint8Array();
    message.chain = object.chain ?? "";
    message.externalKeys = object.externalKeys?.map(e => RegisterExternalKeysRequest_ExternalKey.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: RegisterExternalKeysRequestAmino): RegisterExternalKeysRequest {
    const message = createBaseRegisterExternalKeysRequest();
    if (object.sender !== undefined && object.sender !== null) {
      message.sender = bytesFromBase64(object.sender);
    }
    if (object.chain !== undefined && object.chain !== null) {
      message.chain = object.chain;
    }
    message.externalKeys = object.external_keys?.map(e => RegisterExternalKeysRequest_ExternalKey.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: RegisterExternalKeysRequest): RegisterExternalKeysRequestAmino {
    const obj: any = {};
    obj.sender = message.sender ? base64FromBytes(message.sender) : undefined;
    obj.chain = message.chain;
    if (message.externalKeys) {
      obj.external_keys = message.externalKeys.map(e => e ? RegisterExternalKeysRequest_ExternalKey.toAmino(e) : undefined);
    } else {
      obj.external_keys = [];
    }
    return obj;
  },
  fromAminoMsg(object: RegisterExternalKeysRequestAminoMsg): RegisterExternalKeysRequest {
    return RegisterExternalKeysRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: RegisterExternalKeysRequestProtoMsg): RegisterExternalKeysRequest {
    return RegisterExternalKeysRequest.decode(message.value);
  },
  toProto(message: RegisterExternalKeysRequest): Uint8Array {
    return RegisterExternalKeysRequest.encode(message).finish();
  },
  toProtoMsg(message: RegisterExternalKeysRequest): RegisterExternalKeysRequestProtoMsg {
    return {
      typeUrl: "/axelar.tss.v1beta1.RegisterExternalKeysRequest",
      value: RegisterExternalKeysRequest.encode(message).finish()
    };
  }
};
function createBaseRegisterExternalKeysRequest_ExternalKey(): RegisterExternalKeysRequest_ExternalKey {
  return {
    id: "",
    pubKey: new Uint8Array()
  };
}
export const RegisterExternalKeysRequest_ExternalKey = {
  typeUrl: "/axelar.tss.v1beta1.ExternalKey",
  encode(message: RegisterExternalKeysRequest_ExternalKey, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    if (message.pubKey.length !== 0) {
      writer.uint32(18).bytes(message.pubKey);
    }
    return writer;
  },
  fromJSON(object: any): RegisterExternalKeysRequest_ExternalKey {
    return {
      id: isSet(object.id) ? String(object.id) : "",
      pubKey: isSet(object.pubKey) ? bytesFromBase64(object.pubKey) : new Uint8Array()
    };
  },
  fromPartial(object: Partial<RegisterExternalKeysRequest_ExternalKey>): RegisterExternalKeysRequest_ExternalKey {
    const message = createBaseRegisterExternalKeysRequest_ExternalKey();
    message.id = object.id ?? "";
    message.pubKey = object.pubKey ?? new Uint8Array();
    return message;
  },
  fromAmino(object: RegisterExternalKeysRequest_ExternalKeyAmino): RegisterExternalKeysRequest_ExternalKey {
    const message = createBaseRegisterExternalKeysRequest_ExternalKey();
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    }
    if (object.pub_key !== undefined && object.pub_key !== null) {
      message.pubKey = bytesFromBase64(object.pub_key);
    }
    return message;
  },
  toAmino(message: RegisterExternalKeysRequest_ExternalKey): RegisterExternalKeysRequest_ExternalKeyAmino {
    const obj: any = {};
    obj.id = message.id;
    obj.pub_key = message.pubKey ? base64FromBytes(message.pubKey) : undefined;
    return obj;
  },
  fromAminoMsg(object: RegisterExternalKeysRequest_ExternalKeyAminoMsg): RegisterExternalKeysRequest_ExternalKey {
    return RegisterExternalKeysRequest_ExternalKey.fromAmino(object.value);
  },
  fromProtoMsg(message: RegisterExternalKeysRequest_ExternalKeyProtoMsg): RegisterExternalKeysRequest_ExternalKey {
    return RegisterExternalKeysRequest_ExternalKey.decode(message.value);
  },
  toProto(message: RegisterExternalKeysRequest_ExternalKey): Uint8Array {
    return RegisterExternalKeysRequest_ExternalKey.encode(message).finish();
  },
  toProtoMsg(message: RegisterExternalKeysRequest_ExternalKey): RegisterExternalKeysRequest_ExternalKeyProtoMsg {
    return {
      typeUrl: "/axelar.tss.v1beta1.ExternalKey",
      value: RegisterExternalKeysRequest_ExternalKey.encode(message).finish()
    };
  }
};
function createBaseRegisterExternalKeysResponse(): RegisterExternalKeysResponse {
  return {};
}
export const RegisterExternalKeysResponse = {
  typeUrl: "/axelar.tss.v1beta1.RegisterExternalKeysResponse",
  encode(_: RegisterExternalKeysResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  fromJSON(_: any): RegisterExternalKeysResponse {
    return {};
  },
  fromPartial(_: Partial<RegisterExternalKeysResponse>): RegisterExternalKeysResponse {
    const message = createBaseRegisterExternalKeysResponse();
    return message;
  },
  fromAmino(_: RegisterExternalKeysResponseAmino): RegisterExternalKeysResponse {
    const message = createBaseRegisterExternalKeysResponse();
    return message;
  },
  toAmino(_: RegisterExternalKeysResponse): RegisterExternalKeysResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: RegisterExternalKeysResponseAminoMsg): RegisterExternalKeysResponse {
    return RegisterExternalKeysResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: RegisterExternalKeysResponseProtoMsg): RegisterExternalKeysResponse {
    return RegisterExternalKeysResponse.decode(message.value);
  },
  toProto(message: RegisterExternalKeysResponse): Uint8Array {
    return RegisterExternalKeysResponse.encode(message).finish();
  },
  toProtoMsg(message: RegisterExternalKeysResponse): RegisterExternalKeysResponseProtoMsg {
    return {
      typeUrl: "/axelar.tss.v1beta1.RegisterExternalKeysResponse",
      value: RegisterExternalKeysResponse.encode(message).finish()
    };
  }
};
function createBaseSubmitMultisigPubKeysRequest(): SubmitMultisigPubKeysRequest {
  return {
    sender: new Uint8Array(),
    keyId: "",
    sigKeyPairs: []
  };
}
export const SubmitMultisigPubKeysRequest = {
  typeUrl: "/axelar.tss.v1beta1.SubmitMultisigPubKeysRequest",
  encode(message: SubmitMultisigPubKeysRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.sender.length !== 0) {
      writer.uint32(10).bytes(message.sender);
    }
    if (message.keyId !== "") {
      writer.uint32(18).string(message.keyId);
    }
    for (const v of message.sigKeyPairs) {
      SigKeyPair.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): SubmitMultisigPubKeysRequest {
    return {
      sender: isSet(object.sender) ? bytesFromBase64(object.sender) : new Uint8Array(),
      keyId: isSet(object.keyId) ? String(object.keyId) : "",
      sigKeyPairs: Array.isArray(object?.sigKeyPairs) ? object.sigKeyPairs.map((e: any) => SigKeyPair.fromJSON(e)) : []
    };
  },
  fromPartial(object: Partial<SubmitMultisigPubKeysRequest>): SubmitMultisigPubKeysRequest {
    const message = createBaseSubmitMultisigPubKeysRequest();
    message.sender = object.sender ?? new Uint8Array();
    message.keyId = object.keyId ?? "";
    message.sigKeyPairs = object.sigKeyPairs?.map(e => SigKeyPair.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: SubmitMultisigPubKeysRequestAmino): SubmitMultisigPubKeysRequest {
    const message = createBaseSubmitMultisigPubKeysRequest();
    if (object.sender !== undefined && object.sender !== null) {
      message.sender = bytesFromBase64(object.sender);
    }
    if (object.key_id !== undefined && object.key_id !== null) {
      message.keyId = object.key_id;
    }
    message.sigKeyPairs = object.sig_key_pairs?.map(e => SigKeyPair.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: SubmitMultisigPubKeysRequest): SubmitMultisigPubKeysRequestAmino {
    const obj: any = {};
    obj.sender = message.sender ? base64FromBytes(message.sender) : undefined;
    obj.key_id = message.keyId;
    if (message.sigKeyPairs) {
      obj.sig_key_pairs = message.sigKeyPairs.map(e => e ? SigKeyPair.toAmino(e) : undefined);
    } else {
      obj.sig_key_pairs = [];
    }
    return obj;
  },
  fromAminoMsg(object: SubmitMultisigPubKeysRequestAminoMsg): SubmitMultisigPubKeysRequest {
    return SubmitMultisigPubKeysRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: SubmitMultisigPubKeysRequestProtoMsg): SubmitMultisigPubKeysRequest {
    return SubmitMultisigPubKeysRequest.decode(message.value);
  },
  toProto(message: SubmitMultisigPubKeysRequest): Uint8Array {
    return SubmitMultisigPubKeysRequest.encode(message).finish();
  },
  toProtoMsg(message: SubmitMultisigPubKeysRequest): SubmitMultisigPubKeysRequestProtoMsg {
    return {
      typeUrl: "/axelar.tss.v1beta1.SubmitMultisigPubKeysRequest",
      value: SubmitMultisigPubKeysRequest.encode(message).finish()
    };
  }
};
function createBaseSubmitMultisigPubKeysResponse(): SubmitMultisigPubKeysResponse {
  return {};
}
export const SubmitMultisigPubKeysResponse = {
  typeUrl: "/axelar.tss.v1beta1.SubmitMultisigPubKeysResponse",
  encode(_: SubmitMultisigPubKeysResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  fromJSON(_: any): SubmitMultisigPubKeysResponse {
    return {};
  },
  fromPartial(_: Partial<SubmitMultisigPubKeysResponse>): SubmitMultisigPubKeysResponse {
    const message = createBaseSubmitMultisigPubKeysResponse();
    return message;
  },
  fromAmino(_: SubmitMultisigPubKeysResponseAmino): SubmitMultisigPubKeysResponse {
    const message = createBaseSubmitMultisigPubKeysResponse();
    return message;
  },
  toAmino(_: SubmitMultisigPubKeysResponse): SubmitMultisigPubKeysResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: SubmitMultisigPubKeysResponseAminoMsg): SubmitMultisigPubKeysResponse {
    return SubmitMultisigPubKeysResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: SubmitMultisigPubKeysResponseProtoMsg): SubmitMultisigPubKeysResponse {
    return SubmitMultisigPubKeysResponse.decode(message.value);
  },
  toProto(message: SubmitMultisigPubKeysResponse): Uint8Array {
    return SubmitMultisigPubKeysResponse.encode(message).finish();
  },
  toProtoMsg(message: SubmitMultisigPubKeysResponse): SubmitMultisigPubKeysResponseProtoMsg {
    return {
      typeUrl: "/axelar.tss.v1beta1.SubmitMultisigPubKeysResponse",
      value: SubmitMultisigPubKeysResponse.encode(message).finish()
    };
  }
};
function createBaseSubmitMultisigSignaturesRequest(): SubmitMultisigSignaturesRequest {
  return {
    sender: new Uint8Array(),
    sigId: "",
    signatures: []
  };
}
export const SubmitMultisigSignaturesRequest = {
  typeUrl: "/axelar.tss.v1beta1.SubmitMultisigSignaturesRequest",
  encode(message: SubmitMultisigSignaturesRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.sender.length !== 0) {
      writer.uint32(10).bytes(message.sender);
    }
    if (message.sigId !== "") {
      writer.uint32(18).string(message.sigId);
    }
    for (const v of message.signatures) {
      writer.uint32(26).bytes(v!);
    }
    return writer;
  },
  fromJSON(object: any): SubmitMultisigSignaturesRequest {
    return {
      sender: isSet(object.sender) ? bytesFromBase64(object.sender) : new Uint8Array(),
      sigId: isSet(object.sigId) ? String(object.sigId) : "",
      signatures: Array.isArray(object?.signatures) ? object.signatures.map((e: any) => bytesFromBase64(e)) : []
    };
  },
  fromPartial(object: Partial<SubmitMultisigSignaturesRequest>): SubmitMultisigSignaturesRequest {
    const message = createBaseSubmitMultisigSignaturesRequest();
    message.sender = object.sender ?? new Uint8Array();
    message.sigId = object.sigId ?? "";
    message.signatures = object.signatures?.map(e => e) || [];
    return message;
  },
  fromAmino(object: SubmitMultisigSignaturesRequestAmino): SubmitMultisigSignaturesRequest {
    const message = createBaseSubmitMultisigSignaturesRequest();
    if (object.sender !== undefined && object.sender !== null) {
      message.sender = bytesFromBase64(object.sender);
    }
    if (object.sig_id !== undefined && object.sig_id !== null) {
      message.sigId = object.sig_id;
    }
    message.signatures = object.signatures?.map(e => bytesFromBase64(e)) || [];
    return message;
  },
  toAmino(message: SubmitMultisigSignaturesRequest): SubmitMultisigSignaturesRequestAmino {
    const obj: any = {};
    obj.sender = message.sender ? base64FromBytes(message.sender) : undefined;
    obj.sig_id = message.sigId;
    if (message.signatures) {
      obj.signatures = message.signatures.map(e => base64FromBytes(e));
    } else {
      obj.signatures = [];
    }
    return obj;
  },
  fromAminoMsg(object: SubmitMultisigSignaturesRequestAminoMsg): SubmitMultisigSignaturesRequest {
    return SubmitMultisigSignaturesRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: SubmitMultisigSignaturesRequestProtoMsg): SubmitMultisigSignaturesRequest {
    return SubmitMultisigSignaturesRequest.decode(message.value);
  },
  toProto(message: SubmitMultisigSignaturesRequest): Uint8Array {
    return SubmitMultisigSignaturesRequest.encode(message).finish();
  },
  toProtoMsg(message: SubmitMultisigSignaturesRequest): SubmitMultisigSignaturesRequestProtoMsg {
    return {
      typeUrl: "/axelar.tss.v1beta1.SubmitMultisigSignaturesRequest",
      value: SubmitMultisigSignaturesRequest.encode(message).finish()
    };
  }
};
function createBaseSubmitMultisigSignaturesResponse(): SubmitMultisigSignaturesResponse {
  return {};
}
export const SubmitMultisigSignaturesResponse = {
  typeUrl: "/axelar.tss.v1beta1.SubmitMultisigSignaturesResponse",
  encode(_: SubmitMultisigSignaturesResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  fromJSON(_: any): SubmitMultisigSignaturesResponse {
    return {};
  },
  fromPartial(_: Partial<SubmitMultisigSignaturesResponse>): SubmitMultisigSignaturesResponse {
    const message = createBaseSubmitMultisigSignaturesResponse();
    return message;
  },
  fromAmino(_: SubmitMultisigSignaturesResponseAmino): SubmitMultisigSignaturesResponse {
    const message = createBaseSubmitMultisigSignaturesResponse();
    return message;
  },
  toAmino(_: SubmitMultisigSignaturesResponse): SubmitMultisigSignaturesResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: SubmitMultisigSignaturesResponseAminoMsg): SubmitMultisigSignaturesResponse {
    return SubmitMultisigSignaturesResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: SubmitMultisigSignaturesResponseProtoMsg): SubmitMultisigSignaturesResponse {
    return SubmitMultisigSignaturesResponse.decode(message.value);
  },
  toProto(message: SubmitMultisigSignaturesResponse): Uint8Array {
    return SubmitMultisigSignaturesResponse.encode(message).finish();
  },
  toProtoMsg(message: SubmitMultisigSignaturesResponse): SubmitMultisigSignaturesResponseProtoMsg {
    return {
      typeUrl: "/axelar.tss.v1beta1.SubmitMultisigSignaturesResponse",
      value: SubmitMultisigSignaturesResponse.encode(message).finish()
    };
  }
};