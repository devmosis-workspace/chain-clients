import { BinaryWriter } from "../../../binary";
import { isSet, bytesFromBase64, base64FromBytes } from "../../../helpers";
export interface StartKeygenRequest {
  sender: string;
  keyId: string;
}
export interface StartKeygenRequestProtoMsg {
  typeUrl: "/axelar.multisig.v1beta1.StartKeygenRequest";
  value: Uint8Array;
}
export interface StartKeygenRequestAmino {
  sender?: string;
  key_id?: string;
}
export interface StartKeygenRequestAminoMsg {
  type: "/axelar.multisig.v1beta1.StartKeygenRequest";
  value: StartKeygenRequestAmino;
}
export interface StartKeygenRequestSDKType {
  sender: string;
  key_id: string;
}
export interface StartKeygenResponse {}
export interface StartKeygenResponseProtoMsg {
  typeUrl: "/axelar.multisig.v1beta1.StartKeygenResponse";
  value: Uint8Array;
}
export interface StartKeygenResponseAmino {}
export interface StartKeygenResponseAminoMsg {
  type: "/axelar.multisig.v1beta1.StartKeygenResponse";
  value: StartKeygenResponseAmino;
}
export interface StartKeygenResponseSDKType {}
export interface SubmitPubKeyRequest {
  sender: string;
  keyId: string;
  pubKey: Uint8Array;
  signature: Uint8Array;
}
export interface SubmitPubKeyRequestProtoMsg {
  typeUrl: "/axelar.multisig.v1beta1.SubmitPubKeyRequest";
  value: Uint8Array;
}
export interface SubmitPubKeyRequestAmino {
  sender?: string;
  key_id?: string;
  pub_key?: string;
  signature?: string;
}
export interface SubmitPubKeyRequestAminoMsg {
  type: "/axelar.multisig.v1beta1.SubmitPubKeyRequest";
  value: SubmitPubKeyRequestAmino;
}
export interface SubmitPubKeyRequestSDKType {
  sender: string;
  key_id: string;
  pub_key: Uint8Array;
  signature: Uint8Array;
}
export interface SubmitPubKeyResponse {}
export interface SubmitPubKeyResponseProtoMsg {
  typeUrl: "/axelar.multisig.v1beta1.SubmitPubKeyResponse";
  value: Uint8Array;
}
export interface SubmitPubKeyResponseAmino {}
export interface SubmitPubKeyResponseAminoMsg {
  type: "/axelar.multisig.v1beta1.SubmitPubKeyResponse";
  value: SubmitPubKeyResponseAmino;
}
export interface SubmitPubKeyResponseSDKType {}
export interface SubmitSignatureRequest {
  sender: string;
  sigId: bigint;
  signature: Uint8Array;
}
export interface SubmitSignatureRequestProtoMsg {
  typeUrl: "/axelar.multisig.v1beta1.SubmitSignatureRequest";
  value: Uint8Array;
}
export interface SubmitSignatureRequestAmino {
  sender?: string;
  sig_id?: string;
  signature?: string;
}
export interface SubmitSignatureRequestAminoMsg {
  type: "/axelar.multisig.v1beta1.SubmitSignatureRequest";
  value: SubmitSignatureRequestAmino;
}
export interface SubmitSignatureRequestSDKType {
  sender: string;
  sig_id: bigint;
  signature: Uint8Array;
}
export interface SubmitSignatureResponse {}
export interface SubmitSignatureResponseProtoMsg {
  typeUrl: "/axelar.multisig.v1beta1.SubmitSignatureResponse";
  value: Uint8Array;
}
export interface SubmitSignatureResponseAmino {}
export interface SubmitSignatureResponseAminoMsg {
  type: "/axelar.multisig.v1beta1.SubmitSignatureResponse";
  value: SubmitSignatureResponseAmino;
}
export interface SubmitSignatureResponseSDKType {}
export interface RotateKeyRequest {
  sender: Uint8Array;
  chain: string;
  keyId: string;
}
export interface RotateKeyRequestProtoMsg {
  typeUrl: "/axelar.multisig.v1beta1.RotateKeyRequest";
  value: Uint8Array;
}
export interface RotateKeyRequestAmino {
  sender?: string;
  chain?: string;
  key_id?: string;
}
export interface RotateKeyRequestAminoMsg {
  type: "/axelar.multisig.v1beta1.RotateKeyRequest";
  value: RotateKeyRequestAmino;
}
export interface RotateKeyRequestSDKType {
  sender: Uint8Array;
  chain: string;
  key_id: string;
}
export interface RotateKeyResponse {}
export interface RotateKeyResponseProtoMsg {
  typeUrl: "/axelar.multisig.v1beta1.RotateKeyResponse";
  value: Uint8Array;
}
export interface RotateKeyResponseAmino {}
export interface RotateKeyResponseAminoMsg {
  type: "/axelar.multisig.v1beta1.RotateKeyResponse";
  value: RotateKeyResponseAmino;
}
export interface RotateKeyResponseSDKType {}
export interface KeygenOptOutRequest {
  sender: Uint8Array;
}
export interface KeygenOptOutRequestProtoMsg {
  typeUrl: "/axelar.multisig.v1beta1.KeygenOptOutRequest";
  value: Uint8Array;
}
export interface KeygenOptOutRequestAmino {
  sender?: string;
}
export interface KeygenOptOutRequestAminoMsg {
  type: "/axelar.multisig.v1beta1.KeygenOptOutRequest";
  value: KeygenOptOutRequestAmino;
}
export interface KeygenOptOutRequestSDKType {
  sender: Uint8Array;
}
export interface KeygenOptOutResponse {}
export interface KeygenOptOutResponseProtoMsg {
  typeUrl: "/axelar.multisig.v1beta1.KeygenOptOutResponse";
  value: Uint8Array;
}
export interface KeygenOptOutResponseAmino {}
export interface KeygenOptOutResponseAminoMsg {
  type: "/axelar.multisig.v1beta1.KeygenOptOutResponse";
  value: KeygenOptOutResponseAmino;
}
export interface KeygenOptOutResponseSDKType {}
export interface KeygenOptInRequest {
  sender: Uint8Array;
}
export interface KeygenOptInRequestProtoMsg {
  typeUrl: "/axelar.multisig.v1beta1.KeygenOptInRequest";
  value: Uint8Array;
}
export interface KeygenOptInRequestAmino {
  sender?: string;
}
export interface KeygenOptInRequestAminoMsg {
  type: "/axelar.multisig.v1beta1.KeygenOptInRequest";
  value: KeygenOptInRequestAmino;
}
export interface KeygenOptInRequestSDKType {
  sender: Uint8Array;
}
export interface KeygenOptInResponse {}
export interface KeygenOptInResponseProtoMsg {
  typeUrl: "/axelar.multisig.v1beta1.KeygenOptInResponse";
  value: Uint8Array;
}
export interface KeygenOptInResponseAmino {}
export interface KeygenOptInResponseAminoMsg {
  type: "/axelar.multisig.v1beta1.KeygenOptInResponse";
  value: KeygenOptInResponseAmino;
}
export interface KeygenOptInResponseSDKType {}
function createBaseStartKeygenRequest(): StartKeygenRequest {
  return {
    sender: "",
    keyId: ""
  };
}
export const StartKeygenRequest = {
  typeUrl: "/axelar.multisig.v1beta1.StartKeygenRequest",
  encode(message: StartKeygenRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.sender !== "") {
      writer.uint32(10).string(message.sender);
    }
    if (message.keyId !== "") {
      writer.uint32(18).string(message.keyId);
    }
    return writer;
  },
  fromJSON(object: any): StartKeygenRequest {
    return {
      sender: isSet(object.sender) ? String(object.sender) : "",
      keyId: isSet(object.keyId) ? String(object.keyId) : ""
    };
  },
  fromPartial(object: Partial<StartKeygenRequest>): StartKeygenRequest {
    const message = createBaseStartKeygenRequest();
    message.sender = object.sender ?? "";
    message.keyId = object.keyId ?? "";
    return message;
  },
  fromAmino(object: StartKeygenRequestAmino): StartKeygenRequest {
    const message = createBaseStartKeygenRequest();
    if (object.sender !== undefined && object.sender !== null) {
      message.sender = object.sender;
    }
    if (object.key_id !== undefined && object.key_id !== null) {
      message.keyId = object.key_id;
    }
    return message;
  },
  toAmino(message: StartKeygenRequest): StartKeygenRequestAmino {
    const obj: any = {};
    obj.sender = message.sender;
    obj.key_id = message.keyId;
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
      typeUrl: "/axelar.multisig.v1beta1.StartKeygenRequest",
      value: StartKeygenRequest.encode(message).finish()
    };
  }
};
function createBaseStartKeygenResponse(): StartKeygenResponse {
  return {};
}
export const StartKeygenResponse = {
  typeUrl: "/axelar.multisig.v1beta1.StartKeygenResponse",
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
      typeUrl: "/axelar.multisig.v1beta1.StartKeygenResponse",
      value: StartKeygenResponse.encode(message).finish()
    };
  }
};
function createBaseSubmitPubKeyRequest(): SubmitPubKeyRequest {
  return {
    sender: "",
    keyId: "",
    pubKey: new Uint8Array(),
    signature: new Uint8Array()
  };
}
export const SubmitPubKeyRequest = {
  typeUrl: "/axelar.multisig.v1beta1.SubmitPubKeyRequest",
  encode(message: SubmitPubKeyRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.sender !== "") {
      writer.uint32(10).string(message.sender);
    }
    if (message.keyId !== "") {
      writer.uint32(18).string(message.keyId);
    }
    if (message.pubKey.length !== 0) {
      writer.uint32(26).bytes(message.pubKey);
    }
    if (message.signature.length !== 0) {
      writer.uint32(34).bytes(message.signature);
    }
    return writer;
  },
  fromJSON(object: any): SubmitPubKeyRequest {
    return {
      sender: isSet(object.sender) ? String(object.sender) : "",
      keyId: isSet(object.keyId) ? String(object.keyId) : "",
      pubKey: isSet(object.pubKey) ? bytesFromBase64(object.pubKey) : new Uint8Array(),
      signature: isSet(object.signature) ? bytesFromBase64(object.signature) : new Uint8Array()
    };
  },
  fromPartial(object: Partial<SubmitPubKeyRequest>): SubmitPubKeyRequest {
    const message = createBaseSubmitPubKeyRequest();
    message.sender = object.sender ?? "";
    message.keyId = object.keyId ?? "";
    message.pubKey = object.pubKey ?? new Uint8Array();
    message.signature = object.signature ?? new Uint8Array();
    return message;
  },
  fromAmino(object: SubmitPubKeyRequestAmino): SubmitPubKeyRequest {
    const message = createBaseSubmitPubKeyRequest();
    if (object.sender !== undefined && object.sender !== null) {
      message.sender = object.sender;
    }
    if (object.key_id !== undefined && object.key_id !== null) {
      message.keyId = object.key_id;
    }
    if (object.pub_key !== undefined && object.pub_key !== null) {
      message.pubKey = bytesFromBase64(object.pub_key);
    }
    if (object.signature !== undefined && object.signature !== null) {
      message.signature = bytesFromBase64(object.signature);
    }
    return message;
  },
  toAmino(message: SubmitPubKeyRequest): SubmitPubKeyRequestAmino {
    const obj: any = {};
    obj.sender = message.sender;
    obj.key_id = message.keyId;
    obj.pub_key = message.pubKey ? base64FromBytes(message.pubKey) : undefined;
    obj.signature = message.signature ? base64FromBytes(message.signature) : undefined;
    return obj;
  },
  fromAminoMsg(object: SubmitPubKeyRequestAminoMsg): SubmitPubKeyRequest {
    return SubmitPubKeyRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: SubmitPubKeyRequestProtoMsg): SubmitPubKeyRequest {
    return SubmitPubKeyRequest.decode(message.value);
  },
  toProto(message: SubmitPubKeyRequest): Uint8Array {
    return SubmitPubKeyRequest.encode(message).finish();
  },
  toProtoMsg(message: SubmitPubKeyRequest): SubmitPubKeyRequestProtoMsg {
    return {
      typeUrl: "/axelar.multisig.v1beta1.SubmitPubKeyRequest",
      value: SubmitPubKeyRequest.encode(message).finish()
    };
  }
};
function createBaseSubmitPubKeyResponse(): SubmitPubKeyResponse {
  return {};
}
export const SubmitPubKeyResponse = {
  typeUrl: "/axelar.multisig.v1beta1.SubmitPubKeyResponse",
  encode(_: SubmitPubKeyResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  fromJSON(_: any): SubmitPubKeyResponse {
    return {};
  },
  fromPartial(_: Partial<SubmitPubKeyResponse>): SubmitPubKeyResponse {
    const message = createBaseSubmitPubKeyResponse();
    return message;
  },
  fromAmino(_: SubmitPubKeyResponseAmino): SubmitPubKeyResponse {
    const message = createBaseSubmitPubKeyResponse();
    return message;
  },
  toAmino(_: SubmitPubKeyResponse): SubmitPubKeyResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: SubmitPubKeyResponseAminoMsg): SubmitPubKeyResponse {
    return SubmitPubKeyResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: SubmitPubKeyResponseProtoMsg): SubmitPubKeyResponse {
    return SubmitPubKeyResponse.decode(message.value);
  },
  toProto(message: SubmitPubKeyResponse): Uint8Array {
    return SubmitPubKeyResponse.encode(message).finish();
  },
  toProtoMsg(message: SubmitPubKeyResponse): SubmitPubKeyResponseProtoMsg {
    return {
      typeUrl: "/axelar.multisig.v1beta1.SubmitPubKeyResponse",
      value: SubmitPubKeyResponse.encode(message).finish()
    };
  }
};
function createBaseSubmitSignatureRequest(): SubmitSignatureRequest {
  return {
    sender: "",
    sigId: BigInt(0),
    signature: new Uint8Array()
  };
}
export const SubmitSignatureRequest = {
  typeUrl: "/axelar.multisig.v1beta1.SubmitSignatureRequest",
  encode(message: SubmitSignatureRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.sender !== "") {
      writer.uint32(10).string(message.sender);
    }
    if (message.sigId !== BigInt(0)) {
      writer.uint32(16).uint64(message.sigId);
    }
    if (message.signature.length !== 0) {
      writer.uint32(26).bytes(message.signature);
    }
    return writer;
  },
  fromJSON(object: any): SubmitSignatureRequest {
    return {
      sender: isSet(object.sender) ? String(object.sender) : "",
      sigId: isSet(object.sigId) ? BigInt(object.sigId.toString()) : BigInt(0),
      signature: isSet(object.signature) ? bytesFromBase64(object.signature) : new Uint8Array()
    };
  },
  fromPartial(object: Partial<SubmitSignatureRequest>): SubmitSignatureRequest {
    const message = createBaseSubmitSignatureRequest();
    message.sender = object.sender ?? "";
    message.sigId = object.sigId !== undefined && object.sigId !== null ? BigInt(object.sigId.toString()) : BigInt(0);
    message.signature = object.signature ?? new Uint8Array();
    return message;
  },
  fromAmino(object: SubmitSignatureRequestAmino): SubmitSignatureRequest {
    const message = createBaseSubmitSignatureRequest();
    if (object.sender !== undefined && object.sender !== null) {
      message.sender = object.sender;
    }
    if (object.sig_id !== undefined && object.sig_id !== null) {
      message.sigId = BigInt(object.sig_id);
    }
    if (object.signature !== undefined && object.signature !== null) {
      message.signature = bytesFromBase64(object.signature);
    }
    return message;
  },
  toAmino(message: SubmitSignatureRequest): SubmitSignatureRequestAmino {
    const obj: any = {};
    obj.sender = message.sender;
    obj.sig_id = message.sigId ? message.sigId.toString() : undefined;
    obj.signature = message.signature ? base64FromBytes(message.signature) : undefined;
    return obj;
  },
  fromAminoMsg(object: SubmitSignatureRequestAminoMsg): SubmitSignatureRequest {
    return SubmitSignatureRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: SubmitSignatureRequestProtoMsg): SubmitSignatureRequest {
    return SubmitSignatureRequest.decode(message.value);
  },
  toProto(message: SubmitSignatureRequest): Uint8Array {
    return SubmitSignatureRequest.encode(message).finish();
  },
  toProtoMsg(message: SubmitSignatureRequest): SubmitSignatureRequestProtoMsg {
    return {
      typeUrl: "/axelar.multisig.v1beta1.SubmitSignatureRequest",
      value: SubmitSignatureRequest.encode(message).finish()
    };
  }
};
function createBaseSubmitSignatureResponse(): SubmitSignatureResponse {
  return {};
}
export const SubmitSignatureResponse = {
  typeUrl: "/axelar.multisig.v1beta1.SubmitSignatureResponse",
  encode(_: SubmitSignatureResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  fromJSON(_: any): SubmitSignatureResponse {
    return {};
  },
  fromPartial(_: Partial<SubmitSignatureResponse>): SubmitSignatureResponse {
    const message = createBaseSubmitSignatureResponse();
    return message;
  },
  fromAmino(_: SubmitSignatureResponseAmino): SubmitSignatureResponse {
    const message = createBaseSubmitSignatureResponse();
    return message;
  },
  toAmino(_: SubmitSignatureResponse): SubmitSignatureResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: SubmitSignatureResponseAminoMsg): SubmitSignatureResponse {
    return SubmitSignatureResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: SubmitSignatureResponseProtoMsg): SubmitSignatureResponse {
    return SubmitSignatureResponse.decode(message.value);
  },
  toProto(message: SubmitSignatureResponse): Uint8Array {
    return SubmitSignatureResponse.encode(message).finish();
  },
  toProtoMsg(message: SubmitSignatureResponse): SubmitSignatureResponseProtoMsg {
    return {
      typeUrl: "/axelar.multisig.v1beta1.SubmitSignatureResponse",
      value: SubmitSignatureResponse.encode(message).finish()
    };
  }
};
function createBaseRotateKeyRequest(): RotateKeyRequest {
  return {
    sender: new Uint8Array(),
    chain: "",
    keyId: ""
  };
}
export const RotateKeyRequest = {
  typeUrl: "/axelar.multisig.v1beta1.RotateKeyRequest",
  encode(message: RotateKeyRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.sender.length !== 0) {
      writer.uint32(10).bytes(message.sender);
    }
    if (message.chain !== "") {
      writer.uint32(18).string(message.chain);
    }
    if (message.keyId !== "") {
      writer.uint32(26).string(message.keyId);
    }
    return writer;
  },
  fromJSON(object: any): RotateKeyRequest {
    return {
      sender: isSet(object.sender) ? bytesFromBase64(object.sender) : new Uint8Array(),
      chain: isSet(object.chain) ? String(object.chain) : "",
      keyId: isSet(object.keyId) ? String(object.keyId) : ""
    };
  },
  fromPartial(object: Partial<RotateKeyRequest>): RotateKeyRequest {
    const message = createBaseRotateKeyRequest();
    message.sender = object.sender ?? new Uint8Array();
    message.chain = object.chain ?? "";
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
    if (object.key_id !== undefined && object.key_id !== null) {
      message.keyId = object.key_id;
    }
    return message;
  },
  toAmino(message: RotateKeyRequest): RotateKeyRequestAmino {
    const obj: any = {};
    obj.sender = message.sender ? base64FromBytes(message.sender) : undefined;
    obj.chain = message.chain;
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
      typeUrl: "/axelar.multisig.v1beta1.RotateKeyRequest",
      value: RotateKeyRequest.encode(message).finish()
    };
  }
};
function createBaseRotateKeyResponse(): RotateKeyResponse {
  return {};
}
export const RotateKeyResponse = {
  typeUrl: "/axelar.multisig.v1beta1.RotateKeyResponse",
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
      typeUrl: "/axelar.multisig.v1beta1.RotateKeyResponse",
      value: RotateKeyResponse.encode(message).finish()
    };
  }
};
function createBaseKeygenOptOutRequest(): KeygenOptOutRequest {
  return {
    sender: new Uint8Array()
  };
}
export const KeygenOptOutRequest = {
  typeUrl: "/axelar.multisig.v1beta1.KeygenOptOutRequest",
  encode(message: KeygenOptOutRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.sender.length !== 0) {
      writer.uint32(10).bytes(message.sender);
    }
    return writer;
  },
  fromJSON(object: any): KeygenOptOutRequest {
    return {
      sender: isSet(object.sender) ? bytesFromBase64(object.sender) : new Uint8Array()
    };
  },
  fromPartial(object: Partial<KeygenOptOutRequest>): KeygenOptOutRequest {
    const message = createBaseKeygenOptOutRequest();
    message.sender = object.sender ?? new Uint8Array();
    return message;
  },
  fromAmino(object: KeygenOptOutRequestAmino): KeygenOptOutRequest {
    const message = createBaseKeygenOptOutRequest();
    if (object.sender !== undefined && object.sender !== null) {
      message.sender = bytesFromBase64(object.sender);
    }
    return message;
  },
  toAmino(message: KeygenOptOutRequest): KeygenOptOutRequestAmino {
    const obj: any = {};
    obj.sender = message.sender ? base64FromBytes(message.sender) : undefined;
    return obj;
  },
  fromAminoMsg(object: KeygenOptOutRequestAminoMsg): KeygenOptOutRequest {
    return KeygenOptOutRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: KeygenOptOutRequestProtoMsg): KeygenOptOutRequest {
    return KeygenOptOutRequest.decode(message.value);
  },
  toProto(message: KeygenOptOutRequest): Uint8Array {
    return KeygenOptOutRequest.encode(message).finish();
  },
  toProtoMsg(message: KeygenOptOutRequest): KeygenOptOutRequestProtoMsg {
    return {
      typeUrl: "/axelar.multisig.v1beta1.KeygenOptOutRequest",
      value: KeygenOptOutRequest.encode(message).finish()
    };
  }
};
function createBaseKeygenOptOutResponse(): KeygenOptOutResponse {
  return {};
}
export const KeygenOptOutResponse = {
  typeUrl: "/axelar.multisig.v1beta1.KeygenOptOutResponse",
  encode(_: KeygenOptOutResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  fromJSON(_: any): KeygenOptOutResponse {
    return {};
  },
  fromPartial(_: Partial<KeygenOptOutResponse>): KeygenOptOutResponse {
    const message = createBaseKeygenOptOutResponse();
    return message;
  },
  fromAmino(_: KeygenOptOutResponseAmino): KeygenOptOutResponse {
    const message = createBaseKeygenOptOutResponse();
    return message;
  },
  toAmino(_: KeygenOptOutResponse): KeygenOptOutResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: KeygenOptOutResponseAminoMsg): KeygenOptOutResponse {
    return KeygenOptOutResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: KeygenOptOutResponseProtoMsg): KeygenOptOutResponse {
    return KeygenOptOutResponse.decode(message.value);
  },
  toProto(message: KeygenOptOutResponse): Uint8Array {
    return KeygenOptOutResponse.encode(message).finish();
  },
  toProtoMsg(message: KeygenOptOutResponse): KeygenOptOutResponseProtoMsg {
    return {
      typeUrl: "/axelar.multisig.v1beta1.KeygenOptOutResponse",
      value: KeygenOptOutResponse.encode(message).finish()
    };
  }
};
function createBaseKeygenOptInRequest(): KeygenOptInRequest {
  return {
    sender: new Uint8Array()
  };
}
export const KeygenOptInRequest = {
  typeUrl: "/axelar.multisig.v1beta1.KeygenOptInRequest",
  encode(message: KeygenOptInRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.sender.length !== 0) {
      writer.uint32(10).bytes(message.sender);
    }
    return writer;
  },
  fromJSON(object: any): KeygenOptInRequest {
    return {
      sender: isSet(object.sender) ? bytesFromBase64(object.sender) : new Uint8Array()
    };
  },
  fromPartial(object: Partial<KeygenOptInRequest>): KeygenOptInRequest {
    const message = createBaseKeygenOptInRequest();
    message.sender = object.sender ?? new Uint8Array();
    return message;
  },
  fromAmino(object: KeygenOptInRequestAmino): KeygenOptInRequest {
    const message = createBaseKeygenOptInRequest();
    if (object.sender !== undefined && object.sender !== null) {
      message.sender = bytesFromBase64(object.sender);
    }
    return message;
  },
  toAmino(message: KeygenOptInRequest): KeygenOptInRequestAmino {
    const obj: any = {};
    obj.sender = message.sender ? base64FromBytes(message.sender) : undefined;
    return obj;
  },
  fromAminoMsg(object: KeygenOptInRequestAminoMsg): KeygenOptInRequest {
    return KeygenOptInRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: KeygenOptInRequestProtoMsg): KeygenOptInRequest {
    return KeygenOptInRequest.decode(message.value);
  },
  toProto(message: KeygenOptInRequest): Uint8Array {
    return KeygenOptInRequest.encode(message).finish();
  },
  toProtoMsg(message: KeygenOptInRequest): KeygenOptInRequestProtoMsg {
    return {
      typeUrl: "/axelar.multisig.v1beta1.KeygenOptInRequest",
      value: KeygenOptInRequest.encode(message).finish()
    };
  }
};
function createBaseKeygenOptInResponse(): KeygenOptInResponse {
  return {};
}
export const KeygenOptInResponse = {
  typeUrl: "/axelar.multisig.v1beta1.KeygenOptInResponse",
  encode(_: KeygenOptInResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  fromJSON(_: any): KeygenOptInResponse {
    return {};
  },
  fromPartial(_: Partial<KeygenOptInResponse>): KeygenOptInResponse {
    const message = createBaseKeygenOptInResponse();
    return message;
  },
  fromAmino(_: KeygenOptInResponseAmino): KeygenOptInResponse {
    const message = createBaseKeygenOptInResponse();
    return message;
  },
  toAmino(_: KeygenOptInResponse): KeygenOptInResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: KeygenOptInResponseAminoMsg): KeygenOptInResponse {
    return KeygenOptInResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: KeygenOptInResponseProtoMsg): KeygenOptInResponse {
    return KeygenOptInResponse.decode(message.value);
  },
  toProto(message: KeygenOptInResponse): Uint8Array {
    return KeygenOptInResponse.encode(message).finish();
  },
  toProtoMsg(message: KeygenOptInResponse): KeygenOptInResponseProtoMsg {
    return {
      typeUrl: "/axelar.multisig.v1beta1.KeygenOptInResponse",
      value: KeygenOptInResponse.encode(message).finish()
    };
  }
};