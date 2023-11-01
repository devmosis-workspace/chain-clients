import { KeyState, MultisigState, keyStateFromJSON, multisigStateFromJSON } from "../exported/v1beta1/types";
import { Timestamp, TimestampAmino, TimestampSDKType } from "../../../google/protobuf/timestamp";
import { Params, ParamsAmino, ParamsSDKType } from "./params";
import { BinaryWriter } from "../../../binary";
import { isSet, bytesFromBase64, fromJsonTimestamp } from "../../../helpers";
export interface KeyIDRequest {
  chain: string;
}
export interface KeyIDRequestProtoMsg {
  typeUrl: "/axelar.multisig.v1beta1.KeyIDRequest";
  value: Uint8Array;
}
export interface KeyIDRequestAmino {
  chain: string;
}
export interface KeyIDRequestAminoMsg {
  type: "/axelar.multisig.v1beta1.KeyIDRequest";
  value: KeyIDRequestAmino;
}
export interface KeyIDRequestSDKType {
  chain: string;
}
/** KeyIDResponse contains the key ID of the key assigned to a given chain. */
export interface KeyIDResponse {
  keyId: string;
}
export interface KeyIDResponseProtoMsg {
  typeUrl: "/axelar.multisig.v1beta1.KeyIDResponse";
  value: Uint8Array;
}
/** KeyIDResponse contains the key ID of the key assigned to a given chain. */
export interface KeyIDResponseAmino {
  key_id: string;
}
export interface KeyIDResponseAminoMsg {
  type: "/axelar.multisig.v1beta1.KeyIDResponse";
  value: KeyIDResponseAmino;
}
/** KeyIDResponse contains the key ID of the key assigned to a given chain. */
export interface KeyIDResponseSDKType {
  key_id: string;
}
export interface NextKeyIDRequest {
  chain: string;
}
export interface NextKeyIDRequestProtoMsg {
  typeUrl: "/axelar.multisig.v1beta1.NextKeyIDRequest";
  value: Uint8Array;
}
export interface NextKeyIDRequestAmino {
  chain: string;
}
export interface NextKeyIDRequestAminoMsg {
  type: "/axelar.multisig.v1beta1.NextKeyIDRequest";
  value: NextKeyIDRequestAmino;
}
export interface NextKeyIDRequestSDKType {
  chain: string;
}
/**
 * NextKeyIDResponse contains the key ID for the next rotation on the given
 * chain
 */
export interface NextKeyIDResponse {
  keyId: string;
}
export interface NextKeyIDResponseProtoMsg {
  typeUrl: "/axelar.multisig.v1beta1.NextKeyIDResponse";
  value: Uint8Array;
}
/**
 * NextKeyIDResponse contains the key ID for the next rotation on the given
 * chain
 */
export interface NextKeyIDResponseAmino {
  key_id: string;
}
export interface NextKeyIDResponseAminoMsg {
  type: "/axelar.multisig.v1beta1.NextKeyIDResponse";
  value: NextKeyIDResponseAmino;
}
/**
 * NextKeyIDResponse contains the key ID for the next rotation on the given
 * chain
 */
export interface NextKeyIDResponseSDKType {
  key_id: string;
}
export interface KeyRequest {
  keyId: string;
}
export interface KeyRequestProtoMsg {
  typeUrl: "/axelar.multisig.v1beta1.KeyRequest";
  value: Uint8Array;
}
export interface KeyRequestAmino {
  key_id: string;
}
export interface KeyRequestAminoMsg {
  type: "/axelar.multisig.v1beta1.KeyRequest";
  value: KeyRequestAmino;
}
export interface KeyRequestSDKType {
  key_id: string;
}
export interface KeygenParticipant {
  address: string;
  weight: Uint8Array;
  pubKey: string;
}
export interface KeygenParticipantProtoMsg {
  typeUrl: "/axelar.multisig.v1beta1.KeygenParticipant";
  value: Uint8Array;
}
export interface KeygenParticipantAmino {
  address: string;
  weight: Uint8Array;
  pub_key: string;
}
export interface KeygenParticipantAminoMsg {
  type: "/axelar.multisig.v1beta1.KeygenParticipant";
  value: KeygenParticipantAmino;
}
export interface KeygenParticipantSDKType {
  address: string;
  weight: Uint8Array;
  pub_key: string;
}
/** KeyResponse contains the key corresponding to a given key id. */
export interface KeyResponse {
  keyId: string;
  state: KeyState;
  startedAt: bigint;
  startedAtTimestamp: Timestamp;
  thresholdWeight: Uint8Array;
  bondedWeight: Uint8Array;
  /** Keygen participants in descending order by weight */
  participants: KeygenParticipant[];
}
export interface KeyResponseProtoMsg {
  typeUrl: "/axelar.multisig.v1beta1.KeyResponse";
  value: Uint8Array;
}
/** KeyResponse contains the key corresponding to a given key id. */
export interface KeyResponseAmino {
  key_id: string;
  state: KeyState;
  started_at: string;
  started_at_timestamp?: TimestampAmino;
  threshold_weight: Uint8Array;
  bonded_weight: Uint8Array;
  /** Keygen participants in descending order by weight */
  participants: KeygenParticipantAmino[];
}
export interface KeyResponseAminoMsg {
  type: "/axelar.multisig.v1beta1.KeyResponse";
  value: KeyResponseAmino;
}
/** KeyResponse contains the key corresponding to a given key id. */
export interface KeyResponseSDKType {
  key_id: string;
  state: KeyState;
  started_at: bigint;
  started_at_timestamp: TimestampSDKType;
  threshold_weight: Uint8Array;
  bonded_weight: Uint8Array;
  participants: KeygenParticipantSDKType[];
}
export interface KeygenSessionRequest {
  keyId: string;
}
export interface KeygenSessionRequestProtoMsg {
  typeUrl: "/axelar.multisig.v1beta1.KeygenSessionRequest";
  value: Uint8Array;
}
export interface KeygenSessionRequestAmino {
  key_id: string;
}
export interface KeygenSessionRequestAminoMsg {
  type: "/axelar.multisig.v1beta1.KeygenSessionRequest";
  value: KeygenSessionRequestAmino;
}
export interface KeygenSessionRequestSDKType {
  key_id: string;
}
/** KeygenSessionResponse contains the keygen session info for a given key ID. */
export interface KeygenSessionResponse {
  startedAt: bigint;
  startedAtTimestamp: Timestamp;
  expiresAt: bigint;
  completedAt: bigint;
  gracePeriod: bigint;
  state: MultisigState;
  keygenThresholdWeight: Uint8Array;
  signingThresholdWeight: Uint8Array;
  bondedWeight: Uint8Array;
  /** Keygen candidates in descending order by weight */
  participants: KeygenParticipant[];
}
export interface KeygenSessionResponseProtoMsg {
  typeUrl: "/axelar.multisig.v1beta1.KeygenSessionResponse";
  value: Uint8Array;
}
/** KeygenSessionResponse contains the keygen session info for a given key ID. */
export interface KeygenSessionResponseAmino {
  started_at: string;
  started_at_timestamp?: TimestampAmino;
  expires_at: string;
  completed_at: string;
  grace_period: string;
  state: MultisigState;
  keygen_threshold_weight: Uint8Array;
  signing_threshold_weight: Uint8Array;
  bonded_weight: Uint8Array;
  /** Keygen candidates in descending order by weight */
  participants: KeygenParticipantAmino[];
}
export interface KeygenSessionResponseAminoMsg {
  type: "/axelar.multisig.v1beta1.KeygenSessionResponse";
  value: KeygenSessionResponseAmino;
}
/** KeygenSessionResponse contains the keygen session info for a given key ID. */
export interface KeygenSessionResponseSDKType {
  started_at: bigint;
  started_at_timestamp: TimestampSDKType;
  expires_at: bigint;
  completed_at: bigint;
  grace_period: bigint;
  state: MultisigState;
  keygen_threshold_weight: Uint8Array;
  signing_threshold_weight: Uint8Array;
  bonded_weight: Uint8Array;
  participants: KeygenParticipantSDKType[];
}
/** ParamsRequest represents a message that queries the params */
export interface ParamsRequest {}
export interface ParamsRequestProtoMsg {
  typeUrl: "/axelar.multisig.v1beta1.ParamsRequest";
  value: Uint8Array;
}
/** ParamsRequest represents a message that queries the params */
export interface ParamsRequestAmino {}
export interface ParamsRequestAminoMsg {
  type: "/axelar.multisig.v1beta1.ParamsRequest";
  value: ParamsRequestAmino;
}
/** ParamsRequest represents a message that queries the params */
export interface ParamsRequestSDKType {}
export interface ParamsResponse {
  params: Params;
}
export interface ParamsResponseProtoMsg {
  typeUrl: "/axelar.multisig.v1beta1.ParamsResponse";
  value: Uint8Array;
}
export interface ParamsResponseAmino {
  params?: ParamsAmino;
}
export interface ParamsResponseAminoMsg {
  type: "/axelar.multisig.v1beta1.ParamsResponse";
  value: ParamsResponseAmino;
}
export interface ParamsResponseSDKType {
  params: ParamsSDKType;
}
function createBaseKeyIDRequest(): KeyIDRequest {
  return {
    chain: ""
  };
}
export const KeyIDRequest = {
  typeUrl: "/axelar.multisig.v1beta1.KeyIDRequest",
  encode(message: KeyIDRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.chain !== "") {
      writer.uint32(10).string(message.chain);
    }
    return writer;
  },
  fromJSON(object: any): KeyIDRequest {
    return {
      chain: isSet(object.chain) ? String(object.chain) : ""
    };
  },
  fromPartial(object: Partial<KeyIDRequest>): KeyIDRequest {
    const message = createBaseKeyIDRequest();
    message.chain = object.chain ?? "";
    return message;
  },
  fromAmino(object: KeyIDRequestAmino): KeyIDRequest {
    return {
      chain: object.chain
    };
  },
  toAmino(message: KeyIDRequest): KeyIDRequestAmino {
    const obj: any = {};
    obj.chain = message.chain;
    return obj;
  },
  fromAminoMsg(object: KeyIDRequestAminoMsg): KeyIDRequest {
    return KeyIDRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: KeyIDRequestProtoMsg): KeyIDRequest {
    return KeyIDRequest.decode(message.value);
  },
  toProto(message: KeyIDRequest): Uint8Array {
    return KeyIDRequest.encode(message).finish();
  },
  toProtoMsg(message: KeyIDRequest): KeyIDRequestProtoMsg {
    return {
      typeUrl: "/axelar.multisig.v1beta1.KeyIDRequest",
      value: KeyIDRequest.encode(message).finish()
    };
  }
};
function createBaseKeyIDResponse(): KeyIDResponse {
  return {
    keyId: ""
  };
}
export const KeyIDResponse = {
  typeUrl: "/axelar.multisig.v1beta1.KeyIDResponse",
  encode(message: KeyIDResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.keyId !== "") {
      writer.uint32(10).string(message.keyId);
    }
    return writer;
  },
  fromJSON(object: any): KeyIDResponse {
    return {
      keyId: isSet(object.keyId) ? String(object.keyId) : ""
    };
  },
  fromPartial(object: Partial<KeyIDResponse>): KeyIDResponse {
    const message = createBaseKeyIDResponse();
    message.keyId = object.keyId ?? "";
    return message;
  },
  fromAmino(object: KeyIDResponseAmino): KeyIDResponse {
    return {
      keyId: object.key_id
    };
  },
  toAmino(message: KeyIDResponse): KeyIDResponseAmino {
    const obj: any = {};
    obj.key_id = message.keyId;
    return obj;
  },
  fromAminoMsg(object: KeyIDResponseAminoMsg): KeyIDResponse {
    return KeyIDResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: KeyIDResponseProtoMsg): KeyIDResponse {
    return KeyIDResponse.decode(message.value);
  },
  toProto(message: KeyIDResponse): Uint8Array {
    return KeyIDResponse.encode(message).finish();
  },
  toProtoMsg(message: KeyIDResponse): KeyIDResponseProtoMsg {
    return {
      typeUrl: "/axelar.multisig.v1beta1.KeyIDResponse",
      value: KeyIDResponse.encode(message).finish()
    };
  }
};
function createBaseNextKeyIDRequest(): NextKeyIDRequest {
  return {
    chain: ""
  };
}
export const NextKeyIDRequest = {
  typeUrl: "/axelar.multisig.v1beta1.NextKeyIDRequest",
  encode(message: NextKeyIDRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.chain !== "") {
      writer.uint32(10).string(message.chain);
    }
    return writer;
  },
  fromJSON(object: any): NextKeyIDRequest {
    return {
      chain: isSet(object.chain) ? String(object.chain) : ""
    };
  },
  fromPartial(object: Partial<NextKeyIDRequest>): NextKeyIDRequest {
    const message = createBaseNextKeyIDRequest();
    message.chain = object.chain ?? "";
    return message;
  },
  fromAmino(object: NextKeyIDRequestAmino): NextKeyIDRequest {
    return {
      chain: object.chain
    };
  },
  toAmino(message: NextKeyIDRequest): NextKeyIDRequestAmino {
    const obj: any = {};
    obj.chain = message.chain;
    return obj;
  },
  fromAminoMsg(object: NextKeyIDRequestAminoMsg): NextKeyIDRequest {
    return NextKeyIDRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: NextKeyIDRequestProtoMsg): NextKeyIDRequest {
    return NextKeyIDRequest.decode(message.value);
  },
  toProto(message: NextKeyIDRequest): Uint8Array {
    return NextKeyIDRequest.encode(message).finish();
  },
  toProtoMsg(message: NextKeyIDRequest): NextKeyIDRequestProtoMsg {
    return {
      typeUrl: "/axelar.multisig.v1beta1.NextKeyIDRequest",
      value: NextKeyIDRequest.encode(message).finish()
    };
  }
};
function createBaseNextKeyIDResponse(): NextKeyIDResponse {
  return {
    keyId: ""
  };
}
export const NextKeyIDResponse = {
  typeUrl: "/axelar.multisig.v1beta1.NextKeyIDResponse",
  encode(message: NextKeyIDResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.keyId !== "") {
      writer.uint32(10).string(message.keyId);
    }
    return writer;
  },
  fromJSON(object: any): NextKeyIDResponse {
    return {
      keyId: isSet(object.keyId) ? String(object.keyId) : ""
    };
  },
  fromPartial(object: Partial<NextKeyIDResponse>): NextKeyIDResponse {
    const message = createBaseNextKeyIDResponse();
    message.keyId = object.keyId ?? "";
    return message;
  },
  fromAmino(object: NextKeyIDResponseAmino): NextKeyIDResponse {
    return {
      keyId: object.key_id
    };
  },
  toAmino(message: NextKeyIDResponse): NextKeyIDResponseAmino {
    const obj: any = {};
    obj.key_id = message.keyId;
    return obj;
  },
  fromAminoMsg(object: NextKeyIDResponseAminoMsg): NextKeyIDResponse {
    return NextKeyIDResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: NextKeyIDResponseProtoMsg): NextKeyIDResponse {
    return NextKeyIDResponse.decode(message.value);
  },
  toProto(message: NextKeyIDResponse): Uint8Array {
    return NextKeyIDResponse.encode(message).finish();
  },
  toProtoMsg(message: NextKeyIDResponse): NextKeyIDResponseProtoMsg {
    return {
      typeUrl: "/axelar.multisig.v1beta1.NextKeyIDResponse",
      value: NextKeyIDResponse.encode(message).finish()
    };
  }
};
function createBaseKeyRequest(): KeyRequest {
  return {
    keyId: ""
  };
}
export const KeyRequest = {
  typeUrl: "/axelar.multisig.v1beta1.KeyRequest",
  encode(message: KeyRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.keyId !== "") {
      writer.uint32(10).string(message.keyId);
    }
    return writer;
  },
  fromJSON(object: any): KeyRequest {
    return {
      keyId: isSet(object.keyId) ? String(object.keyId) : ""
    };
  },
  fromPartial(object: Partial<KeyRequest>): KeyRequest {
    const message = createBaseKeyRequest();
    message.keyId = object.keyId ?? "";
    return message;
  },
  fromAmino(object: KeyRequestAmino): KeyRequest {
    return {
      keyId: object.key_id
    };
  },
  toAmino(message: KeyRequest): KeyRequestAmino {
    const obj: any = {};
    obj.key_id = message.keyId;
    return obj;
  },
  fromAminoMsg(object: KeyRequestAminoMsg): KeyRequest {
    return KeyRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: KeyRequestProtoMsg): KeyRequest {
    return KeyRequest.decode(message.value);
  },
  toProto(message: KeyRequest): Uint8Array {
    return KeyRequest.encode(message).finish();
  },
  toProtoMsg(message: KeyRequest): KeyRequestProtoMsg {
    return {
      typeUrl: "/axelar.multisig.v1beta1.KeyRequest",
      value: KeyRequest.encode(message).finish()
    };
  }
};
function createBaseKeygenParticipant(): KeygenParticipant {
  return {
    address: "",
    weight: new Uint8Array(),
    pubKey: ""
  };
}
export const KeygenParticipant = {
  typeUrl: "/axelar.multisig.v1beta1.KeygenParticipant",
  encode(message: KeygenParticipant, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    if (message.weight.length !== 0) {
      writer.uint32(18).bytes(message.weight);
    }
    if (message.pubKey !== "") {
      writer.uint32(26).string(message.pubKey);
    }
    return writer;
  },
  fromJSON(object: any): KeygenParticipant {
    return {
      address: isSet(object.address) ? String(object.address) : "",
      weight: isSet(object.weight) ? bytesFromBase64(object.weight) : new Uint8Array(),
      pubKey: isSet(object.pubKey) ? String(object.pubKey) : ""
    };
  },
  fromPartial(object: Partial<KeygenParticipant>): KeygenParticipant {
    const message = createBaseKeygenParticipant();
    message.address = object.address ?? "";
    message.weight = object.weight ?? new Uint8Array();
    message.pubKey = object.pubKey ?? "";
    return message;
  },
  fromAmino(object: KeygenParticipantAmino): KeygenParticipant {
    return {
      address: object.address,
      weight: object.weight,
      pubKey: object.pub_key
    };
  },
  toAmino(message: KeygenParticipant): KeygenParticipantAmino {
    const obj: any = {};
    obj.address = message.address;
    obj.weight = message.weight;
    obj.pub_key = message.pubKey;
    return obj;
  },
  fromAminoMsg(object: KeygenParticipantAminoMsg): KeygenParticipant {
    return KeygenParticipant.fromAmino(object.value);
  },
  fromProtoMsg(message: KeygenParticipantProtoMsg): KeygenParticipant {
    return KeygenParticipant.decode(message.value);
  },
  toProto(message: KeygenParticipant): Uint8Array {
    return KeygenParticipant.encode(message).finish();
  },
  toProtoMsg(message: KeygenParticipant): KeygenParticipantProtoMsg {
    return {
      typeUrl: "/axelar.multisig.v1beta1.KeygenParticipant",
      value: KeygenParticipant.encode(message).finish()
    };
  }
};
function createBaseKeyResponse(): KeyResponse {
  return {
    keyId: "",
    state: 0,
    startedAt: BigInt(0),
    startedAtTimestamp: Timestamp.fromPartial({}),
    thresholdWeight: new Uint8Array(),
    bondedWeight: new Uint8Array(),
    participants: []
  };
}
export const KeyResponse = {
  typeUrl: "/axelar.multisig.v1beta1.KeyResponse",
  encode(message: KeyResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.keyId !== "") {
      writer.uint32(10).string(message.keyId);
    }
    if (message.state !== 0) {
      writer.uint32(16).int32(message.state);
    }
    if (message.startedAt !== BigInt(0)) {
      writer.uint32(24).int64(message.startedAt);
    }
    if (message.startedAtTimestamp !== undefined) {
      Timestamp.encode(message.startedAtTimestamp, writer.uint32(34).fork()).ldelim();
    }
    if (message.thresholdWeight.length !== 0) {
      writer.uint32(42).bytes(message.thresholdWeight);
    }
    if (message.bondedWeight.length !== 0) {
      writer.uint32(50).bytes(message.bondedWeight);
    }
    for (const v of message.participants) {
      KeygenParticipant.encode(v!, writer.uint32(58).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): KeyResponse {
    return {
      keyId: isSet(object.keyId) ? String(object.keyId) : "",
      state: isSet(object.state) ? keyStateFromJSON(object.state) : -1,
      startedAt: isSet(object.startedAt) ? BigInt(object.startedAt.toString()) : BigInt(0),
      startedAtTimestamp: isSet(object.startedAtTimestamp) ? fromJsonTimestamp(object.startedAtTimestamp) : undefined,
      thresholdWeight: isSet(object.thresholdWeight) ? bytesFromBase64(object.thresholdWeight) : new Uint8Array(),
      bondedWeight: isSet(object.bondedWeight) ? bytesFromBase64(object.bondedWeight) : new Uint8Array(),
      participants: Array.isArray(object?.participants) ? object.participants.map((e: any) => KeygenParticipant.fromJSON(e)) : []
    };
  },
  fromPartial(object: Partial<KeyResponse>): KeyResponse {
    const message = createBaseKeyResponse();
    message.keyId = object.keyId ?? "";
    message.state = object.state ?? 0;
    message.startedAt = object.startedAt !== undefined && object.startedAt !== null ? BigInt(object.startedAt.toString()) : BigInt(0);
    message.startedAtTimestamp = object.startedAtTimestamp !== undefined && object.startedAtTimestamp !== null ? Timestamp.fromPartial(object.startedAtTimestamp) : undefined;
    message.thresholdWeight = object.thresholdWeight ?? new Uint8Array();
    message.bondedWeight = object.bondedWeight ?? new Uint8Array();
    message.participants = object.participants?.map(e => KeygenParticipant.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: KeyResponseAmino): KeyResponse {
    return {
      keyId: object.key_id,
      state: isSet(object.state) ? keyStateFromJSON(object.state) : -1,
      startedAt: BigInt(object.started_at),
      startedAtTimestamp: object.started_at_timestamp,
      thresholdWeight: object.threshold_weight,
      bondedWeight: object.bonded_weight,
      participants: Array.isArray(object?.participants) ? object.participants.map((e: any) => KeygenParticipant.fromAmino(e)) : []
    };
  },
  toAmino(message: KeyResponse): KeyResponseAmino {
    const obj: any = {};
    obj.key_id = message.keyId;
    obj.state = message.state;
    obj.started_at = message.startedAt ? message.startedAt.toString() : undefined;
    obj.started_at_timestamp = message.startedAtTimestamp;
    obj.threshold_weight = message.thresholdWeight;
    obj.bonded_weight = message.bondedWeight;
    if (message.participants) {
      obj.participants = message.participants.map(e => e ? KeygenParticipant.toAmino(e) : undefined);
    } else {
      obj.participants = [];
    }
    return obj;
  },
  fromAminoMsg(object: KeyResponseAminoMsg): KeyResponse {
    return KeyResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: KeyResponseProtoMsg): KeyResponse {
    return KeyResponse.decode(message.value);
  },
  toProto(message: KeyResponse): Uint8Array {
    return KeyResponse.encode(message).finish();
  },
  toProtoMsg(message: KeyResponse): KeyResponseProtoMsg {
    return {
      typeUrl: "/axelar.multisig.v1beta1.KeyResponse",
      value: KeyResponse.encode(message).finish()
    };
  }
};
function createBaseKeygenSessionRequest(): KeygenSessionRequest {
  return {
    keyId: ""
  };
}
export const KeygenSessionRequest = {
  typeUrl: "/axelar.multisig.v1beta1.KeygenSessionRequest",
  encode(message: KeygenSessionRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.keyId !== "") {
      writer.uint32(10).string(message.keyId);
    }
    return writer;
  },
  fromJSON(object: any): KeygenSessionRequest {
    return {
      keyId: isSet(object.keyId) ? String(object.keyId) : ""
    };
  },
  fromPartial(object: Partial<KeygenSessionRequest>): KeygenSessionRequest {
    const message = createBaseKeygenSessionRequest();
    message.keyId = object.keyId ?? "";
    return message;
  },
  fromAmino(object: KeygenSessionRequestAmino): KeygenSessionRequest {
    return {
      keyId: object.key_id
    };
  },
  toAmino(message: KeygenSessionRequest): KeygenSessionRequestAmino {
    const obj: any = {};
    obj.key_id = message.keyId;
    return obj;
  },
  fromAminoMsg(object: KeygenSessionRequestAminoMsg): KeygenSessionRequest {
    return KeygenSessionRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: KeygenSessionRequestProtoMsg): KeygenSessionRequest {
    return KeygenSessionRequest.decode(message.value);
  },
  toProto(message: KeygenSessionRequest): Uint8Array {
    return KeygenSessionRequest.encode(message).finish();
  },
  toProtoMsg(message: KeygenSessionRequest): KeygenSessionRequestProtoMsg {
    return {
      typeUrl: "/axelar.multisig.v1beta1.KeygenSessionRequest",
      value: KeygenSessionRequest.encode(message).finish()
    };
  }
};
function createBaseKeygenSessionResponse(): KeygenSessionResponse {
  return {
    startedAt: BigInt(0),
    startedAtTimestamp: Timestamp.fromPartial({}),
    expiresAt: BigInt(0),
    completedAt: BigInt(0),
    gracePeriod: BigInt(0),
    state: 0,
    keygenThresholdWeight: new Uint8Array(),
    signingThresholdWeight: new Uint8Array(),
    bondedWeight: new Uint8Array(),
    participants: []
  };
}
export const KeygenSessionResponse = {
  typeUrl: "/axelar.multisig.v1beta1.KeygenSessionResponse",
  encode(message: KeygenSessionResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.startedAt !== BigInt(0)) {
      writer.uint32(8).int64(message.startedAt);
    }
    if (message.startedAtTimestamp !== undefined) {
      Timestamp.encode(message.startedAtTimestamp, writer.uint32(18).fork()).ldelim();
    }
    if (message.expiresAt !== BigInt(0)) {
      writer.uint32(24).int64(message.expiresAt);
    }
    if (message.completedAt !== BigInt(0)) {
      writer.uint32(32).int64(message.completedAt);
    }
    if (message.gracePeriod !== BigInt(0)) {
      writer.uint32(40).int64(message.gracePeriod);
    }
    if (message.state !== 0) {
      writer.uint32(48).int32(message.state);
    }
    if (message.keygenThresholdWeight.length !== 0) {
      writer.uint32(58).bytes(message.keygenThresholdWeight);
    }
    if (message.signingThresholdWeight.length !== 0) {
      writer.uint32(66).bytes(message.signingThresholdWeight);
    }
    if (message.bondedWeight.length !== 0) {
      writer.uint32(74).bytes(message.bondedWeight);
    }
    for (const v of message.participants) {
      KeygenParticipant.encode(v!, writer.uint32(82).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): KeygenSessionResponse {
    return {
      startedAt: isSet(object.startedAt) ? BigInt(object.startedAt.toString()) : BigInt(0),
      startedAtTimestamp: isSet(object.startedAtTimestamp) ? fromJsonTimestamp(object.startedAtTimestamp) : undefined,
      expiresAt: isSet(object.expiresAt) ? BigInt(object.expiresAt.toString()) : BigInt(0),
      completedAt: isSet(object.completedAt) ? BigInt(object.completedAt.toString()) : BigInt(0),
      gracePeriod: isSet(object.gracePeriod) ? BigInt(object.gracePeriod.toString()) : BigInt(0),
      state: isSet(object.state) ? multisigStateFromJSON(object.state) : -1,
      keygenThresholdWeight: isSet(object.keygenThresholdWeight) ? bytesFromBase64(object.keygenThresholdWeight) : new Uint8Array(),
      signingThresholdWeight: isSet(object.signingThresholdWeight) ? bytesFromBase64(object.signingThresholdWeight) : new Uint8Array(),
      bondedWeight: isSet(object.bondedWeight) ? bytesFromBase64(object.bondedWeight) : new Uint8Array(),
      participants: Array.isArray(object?.participants) ? object.participants.map((e: any) => KeygenParticipant.fromJSON(e)) : []
    };
  },
  fromPartial(object: Partial<KeygenSessionResponse>): KeygenSessionResponse {
    const message = createBaseKeygenSessionResponse();
    message.startedAt = object.startedAt !== undefined && object.startedAt !== null ? BigInt(object.startedAt.toString()) : BigInt(0);
    message.startedAtTimestamp = object.startedAtTimestamp !== undefined && object.startedAtTimestamp !== null ? Timestamp.fromPartial(object.startedAtTimestamp) : undefined;
    message.expiresAt = object.expiresAt !== undefined && object.expiresAt !== null ? BigInt(object.expiresAt.toString()) : BigInt(0);
    message.completedAt = object.completedAt !== undefined && object.completedAt !== null ? BigInt(object.completedAt.toString()) : BigInt(0);
    message.gracePeriod = object.gracePeriod !== undefined && object.gracePeriod !== null ? BigInt(object.gracePeriod.toString()) : BigInt(0);
    message.state = object.state ?? 0;
    message.keygenThresholdWeight = object.keygenThresholdWeight ?? new Uint8Array();
    message.signingThresholdWeight = object.signingThresholdWeight ?? new Uint8Array();
    message.bondedWeight = object.bondedWeight ?? new Uint8Array();
    message.participants = object.participants?.map(e => KeygenParticipant.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: KeygenSessionResponseAmino): KeygenSessionResponse {
    return {
      startedAt: BigInt(object.started_at),
      startedAtTimestamp: object.started_at_timestamp,
      expiresAt: BigInt(object.expires_at),
      completedAt: BigInt(object.completed_at),
      gracePeriod: BigInt(object.grace_period),
      state: isSet(object.state) ? multisigStateFromJSON(object.state) : -1,
      keygenThresholdWeight: object.keygen_threshold_weight,
      signingThresholdWeight: object.signing_threshold_weight,
      bondedWeight: object.bonded_weight,
      participants: Array.isArray(object?.participants) ? object.participants.map((e: any) => KeygenParticipant.fromAmino(e)) : []
    };
  },
  toAmino(message: KeygenSessionResponse): KeygenSessionResponseAmino {
    const obj: any = {};
    obj.started_at = message.startedAt ? message.startedAt.toString() : undefined;
    obj.started_at_timestamp = message.startedAtTimestamp;
    obj.expires_at = message.expiresAt ? message.expiresAt.toString() : undefined;
    obj.completed_at = message.completedAt ? message.completedAt.toString() : undefined;
    obj.grace_period = message.gracePeriod ? message.gracePeriod.toString() : undefined;
    obj.state = message.state;
    obj.keygen_threshold_weight = message.keygenThresholdWeight;
    obj.signing_threshold_weight = message.signingThresholdWeight;
    obj.bonded_weight = message.bondedWeight;
    if (message.participants) {
      obj.participants = message.participants.map(e => e ? KeygenParticipant.toAmino(e) : undefined);
    } else {
      obj.participants = [];
    }
    return obj;
  },
  fromAminoMsg(object: KeygenSessionResponseAminoMsg): KeygenSessionResponse {
    return KeygenSessionResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: KeygenSessionResponseProtoMsg): KeygenSessionResponse {
    return KeygenSessionResponse.decode(message.value);
  },
  toProto(message: KeygenSessionResponse): Uint8Array {
    return KeygenSessionResponse.encode(message).finish();
  },
  toProtoMsg(message: KeygenSessionResponse): KeygenSessionResponseProtoMsg {
    return {
      typeUrl: "/axelar.multisig.v1beta1.KeygenSessionResponse",
      value: KeygenSessionResponse.encode(message).finish()
    };
  }
};
function createBaseParamsRequest(): ParamsRequest {
  return {};
}
export const ParamsRequest = {
  typeUrl: "/axelar.multisig.v1beta1.ParamsRequest",
  encode(_: ParamsRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  fromJSON(_: any): ParamsRequest {
    return {};
  },
  fromPartial(_: Partial<ParamsRequest>): ParamsRequest {
    const message = createBaseParamsRequest();
    return message;
  },
  fromAmino(_: ParamsRequestAmino): ParamsRequest {
    return {};
  },
  toAmino(_: ParamsRequest): ParamsRequestAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: ParamsRequestAminoMsg): ParamsRequest {
    return ParamsRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: ParamsRequestProtoMsg): ParamsRequest {
    return ParamsRequest.decode(message.value);
  },
  toProto(message: ParamsRequest): Uint8Array {
    return ParamsRequest.encode(message).finish();
  },
  toProtoMsg(message: ParamsRequest): ParamsRequestProtoMsg {
    return {
      typeUrl: "/axelar.multisig.v1beta1.ParamsRequest",
      value: ParamsRequest.encode(message).finish()
    };
  }
};
function createBaseParamsResponse(): ParamsResponse {
  return {
    params: Params.fromPartial({})
  };
}
export const ParamsResponse = {
  typeUrl: "/axelar.multisig.v1beta1.ParamsResponse",
  encode(message: ParamsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): ParamsResponse {
    return {
      params: isSet(object.params) ? Params.fromJSON(object.params) : undefined
    };
  },
  fromPartial(object: Partial<ParamsResponse>): ParamsResponse {
    const message = createBaseParamsResponse();
    message.params = object.params !== undefined && object.params !== null ? Params.fromPartial(object.params) : undefined;
    return message;
  },
  fromAmino(object: ParamsResponseAmino): ParamsResponse {
    return {
      params: object?.params ? Params.fromAmino(object.params) : undefined
    };
  },
  toAmino(message: ParamsResponse): ParamsResponseAmino {
    const obj: any = {};
    obj.params = message.params ? Params.toAmino(message.params) : undefined;
    return obj;
  },
  fromAminoMsg(object: ParamsResponseAminoMsg): ParamsResponse {
    return ParamsResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: ParamsResponseProtoMsg): ParamsResponse {
    return ParamsResponse.decode(message.value);
  },
  toProto(message: ParamsResponse): Uint8Array {
    return ParamsResponse.encode(message).finish();
  },
  toProtoMsg(message: ParamsResponse): ParamsResponseProtoMsg {
    return {
      typeUrl: "/axelar.multisig.v1beta1.ParamsResponse",
      value: ParamsResponse.encode(message).finish()
    };
  }
};