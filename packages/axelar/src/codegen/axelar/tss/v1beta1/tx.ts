import { KeyInfo, KeyInfoSDKType } from "./types";
import { KeyRole, SigKeyPair, SigKeyPairSDKType, keyRoleFromJSON } from "../exported/v1beta1/types";
import { TrafficOut, TrafficOutSDKType, MessageOut_KeygenResult, MessageOut_SignResult } from "../tofnd/v1beta1/tofnd";
import { PollKey, PollKeySDKType } from "../../vote/exported/v1beta1/types";
import * as _m0 from "protobufjs/minimal";
import { isSet, bytesFromBase64 } from "../../../helpers";
/** StartKeygenRequest indicate the start of keygen */
export interface StartKeygenRequest {
  sender: string;
  keyInfo?: KeyInfo;
}
/** StartKeygenRequest indicate the start of keygen */
export interface StartKeygenRequestSDKType {
  sender: string;
  key_info?: KeyInfoSDKType;
}
export interface StartKeygenResponse {}
export interface StartKeygenResponseSDKType {}
export interface RotateKeyRequest {
  sender: Uint8Array;
  chain: string;
  keyRole: KeyRole;
  keyId: string;
}
export interface RotateKeyRequestSDKType {
  sender: Uint8Array;
  chain: string;
  key_role: KeyRole;
  key_id: string;
}
export interface RotateKeyResponse {}
export interface RotateKeyResponseSDKType {}
/** ProcessKeygenTrafficRequest protocol message */
export interface ProcessKeygenTrafficRequest {
  sender: Uint8Array;
  sessionId: string;
  payload?: TrafficOut;
}
/** ProcessKeygenTrafficRequest protocol message */
export interface ProcessKeygenTrafficRequestSDKType {
  sender: Uint8Array;
  session_id: string;
  payload?: TrafficOutSDKType;
}
export interface ProcessKeygenTrafficResponse {}
export interface ProcessKeygenTrafficResponseSDKType {}
/** ProcessSignTrafficRequest protocol message */
export interface ProcessSignTrafficRequest {
  sender: Uint8Array;
  sessionId: string;
  payload?: TrafficOut;
}
/** ProcessSignTrafficRequest protocol message */
export interface ProcessSignTrafficRequestSDKType {
  sender: Uint8Array;
  session_id: string;
  payload?: TrafficOutSDKType;
}
export interface ProcessSignTrafficResponse {}
export interface ProcessSignTrafficResponseSDKType {}
/** VotePubKeyRequest represents the message to vote on a public key */
export interface VotePubKeyRequest {
  sender: Uint8Array;
  pollKey?: PollKey;
  result?: MessageOut_KeygenResult;
}
/** VotePubKeyRequest represents the message to vote on a public key */
export interface VotePubKeyRequestSDKType {
  sender: Uint8Array;
  poll_key?: PollKeySDKType;
  result?: MessageOut_KeygenResultSDKType;
}
export interface VotePubKeyResponse {
  log: string;
}
export interface VotePubKeyResponseSDKType {
  log: string;
}
/** VoteSigRequest represents a message to vote for a signature */
export interface VoteSigRequest {
  sender: Uint8Array;
  pollKey?: PollKey;
  result?: MessageOut_SignResult;
}
/** VoteSigRequest represents a message to vote for a signature */
export interface VoteSigRequestSDKType {
  sender: Uint8Array;
  poll_key?: PollKeySDKType;
  result?: MessageOut_SignResultSDKType;
}
export interface VoteSigResponse {
  log: string;
}
export interface VoteSigResponseSDKType {
  log: string;
}
export interface HeartBeatRequest {
  sender: Uint8Array;
  keyIds: string[];
}
export interface HeartBeatRequestSDKType {
  sender: Uint8Array;
  key_ids: string[];
}
export interface HeartBeatResponse {}
export interface HeartBeatResponseSDKType {}
export interface RegisterExternalKeysRequest {
  sender: Uint8Array;
  chain: string;
  externalKeys: RegisterExternalKeysRequest_ExternalKey[];
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
export interface RegisterExternalKeysRequest_ExternalKeySDKType {
  id: string;
  pub_key: Uint8Array;
}
export interface RegisterExternalKeysResponse {}
export interface RegisterExternalKeysResponseSDKType {}
export interface SubmitMultisigPubKeysRequest {
  sender: Uint8Array;
  keyId: string;
  sigKeyPairs: SigKeyPair[];
}
export interface SubmitMultisigPubKeysRequestSDKType {
  sender: Uint8Array;
  key_id: string;
  sig_key_pairs: SigKeyPairSDKType[];
}
export interface SubmitMultisigPubKeysResponse {}
export interface SubmitMultisigPubKeysResponseSDKType {}
export interface SubmitMultisigSignaturesRequest {
  sender: Uint8Array;
  sigId: string;
  signatures: Uint8Array[];
}
export interface SubmitMultisigSignaturesRequestSDKType {
  sender: Uint8Array;
  sig_id: string;
  signatures: Uint8Array[];
}
export interface SubmitMultisigSignaturesResponse {}
export interface SubmitMultisigSignaturesResponseSDKType {}
function createBaseStartKeygenRequest(): StartKeygenRequest {
  return {
    sender: "",
    keyInfo: undefined
  };
}
export const StartKeygenRequest = {
  encode(message: StartKeygenRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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
  }
};
function createBaseStartKeygenResponse(): StartKeygenResponse {
  return {};
}
export const StartKeygenResponse = {
  encode(_: StartKeygenResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },
  fromJSON(_: any): StartKeygenResponse {
    return {};
  },
  fromPartial(_: Partial<StartKeygenResponse>): StartKeygenResponse {
    const message = createBaseStartKeygenResponse();
    return message;
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
  encode(message: RotateKeyRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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
      keyRole: isSet(object.keyRole) ? keyRoleFromJSON(object.keyRole) : 0,
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
  }
};
function createBaseRotateKeyResponse(): RotateKeyResponse {
  return {};
}
export const RotateKeyResponse = {
  encode(_: RotateKeyResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },
  fromJSON(_: any): RotateKeyResponse {
    return {};
  },
  fromPartial(_: Partial<RotateKeyResponse>): RotateKeyResponse {
    const message = createBaseRotateKeyResponse();
    return message;
  }
};
function createBaseProcessKeygenTrafficRequest(): ProcessKeygenTrafficRequest {
  return {
    sender: new Uint8Array(),
    sessionId: "",
    payload: undefined
  };
}
export const ProcessKeygenTrafficRequest = {
  encode(message: ProcessKeygenTrafficRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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
  }
};
function createBaseProcessKeygenTrafficResponse(): ProcessKeygenTrafficResponse {
  return {};
}
export const ProcessKeygenTrafficResponse = {
  encode(_: ProcessKeygenTrafficResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },
  fromJSON(_: any): ProcessKeygenTrafficResponse {
    return {};
  },
  fromPartial(_: Partial<ProcessKeygenTrafficResponse>): ProcessKeygenTrafficResponse {
    const message = createBaseProcessKeygenTrafficResponse();
    return message;
  }
};
function createBaseProcessSignTrafficRequest(): ProcessSignTrafficRequest {
  return {
    sender: new Uint8Array(),
    sessionId: "",
    payload: undefined
  };
}
export const ProcessSignTrafficRequest = {
  encode(message: ProcessSignTrafficRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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
  }
};
function createBaseProcessSignTrafficResponse(): ProcessSignTrafficResponse {
  return {};
}
export const ProcessSignTrafficResponse = {
  encode(_: ProcessSignTrafficResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },
  fromJSON(_: any): ProcessSignTrafficResponse {
    return {};
  },
  fromPartial(_: Partial<ProcessSignTrafficResponse>): ProcessSignTrafficResponse {
    const message = createBaseProcessSignTrafficResponse();
    return message;
  }
};
function createBaseVotePubKeyRequest(): VotePubKeyRequest {
  return {
    sender: new Uint8Array(),
    pollKey: undefined,
    result: undefined
  };
}
export const VotePubKeyRequest = {
  encode(message: VotePubKeyRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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
  }
};
function createBaseVotePubKeyResponse(): VotePubKeyResponse {
  return {
    log: ""
  };
}
export const VotePubKeyResponse = {
  encode(message: VotePubKeyResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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
  }
};
function createBaseVoteSigRequest(): VoteSigRequest {
  return {
    sender: new Uint8Array(),
    pollKey: undefined,
    result: undefined
  };
}
export const VoteSigRequest = {
  encode(message: VoteSigRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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
  }
};
function createBaseVoteSigResponse(): VoteSigResponse {
  return {
    log: ""
  };
}
export const VoteSigResponse = {
  encode(message: VoteSigResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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
  }
};
function createBaseHeartBeatRequest(): HeartBeatRequest {
  return {
    sender: new Uint8Array(),
    keyIds: []
  };
}
export const HeartBeatRequest = {
  encode(message: HeartBeatRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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
  }
};
function createBaseHeartBeatResponse(): HeartBeatResponse {
  return {};
}
export const HeartBeatResponse = {
  encode(_: HeartBeatResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },
  fromJSON(_: any): HeartBeatResponse {
    return {};
  },
  fromPartial(_: Partial<HeartBeatResponse>): HeartBeatResponse {
    const message = createBaseHeartBeatResponse();
    return message;
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
  encode(message: RegisterExternalKeysRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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
  }
};
function createBaseRegisterExternalKeysRequest_ExternalKey(): RegisterExternalKeysRequest_ExternalKey {
  return {
    id: "",
    pubKey: new Uint8Array()
  };
}
export const RegisterExternalKeysRequest_ExternalKey = {
  encode(message: RegisterExternalKeysRequest_ExternalKey, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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
  }
};
function createBaseRegisterExternalKeysResponse(): RegisterExternalKeysResponse {
  return {};
}
export const RegisterExternalKeysResponse = {
  encode(_: RegisterExternalKeysResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },
  fromJSON(_: any): RegisterExternalKeysResponse {
    return {};
  },
  fromPartial(_: Partial<RegisterExternalKeysResponse>): RegisterExternalKeysResponse {
    const message = createBaseRegisterExternalKeysResponse();
    return message;
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
  encode(message: SubmitMultisigPubKeysRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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
  }
};
function createBaseSubmitMultisigPubKeysResponse(): SubmitMultisigPubKeysResponse {
  return {};
}
export const SubmitMultisigPubKeysResponse = {
  encode(_: SubmitMultisigPubKeysResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },
  fromJSON(_: any): SubmitMultisigPubKeysResponse {
    return {};
  },
  fromPartial(_: Partial<SubmitMultisigPubKeysResponse>): SubmitMultisigPubKeysResponse {
    const message = createBaseSubmitMultisigPubKeysResponse();
    return message;
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
  encode(message: SubmitMultisigSignaturesRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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
  }
};
function createBaseSubmitMultisigSignaturesResponse(): SubmitMultisigSignaturesResponse {
  return {};
}
export const SubmitMultisigSignaturesResponse = {
  encode(_: SubmitMultisigSignaturesResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },
  fromJSON(_: any): SubmitMultisigSignaturesResponse {
    return {};
  },
  fromPartial(_: Partial<SubmitMultisigSignaturesResponse>): SubmitMultisigSignaturesResponse {
    const message = createBaseSubmitMultisigSignaturesResponse();
    return message;
  }
};