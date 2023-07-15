import { KeyState, MultisigState, keyStateFromJSON, multisigStateFromJSON } from "../exported/v1beta1/types";
import { Timestamp, TimestampSDKType } from "../../../google/protobuf/timestamp";
import { Long, isSet, bytesFromBase64, fromJsonTimestamp } from "../../../helpers";
import * as _m0 from "protobufjs/minimal";
export interface KeyIDRequest {
  chain: string;
}
export interface KeyIDRequestSDKType {
  chain: string;
}
/** KeyIDResponse contains the key ID of the key assigned to a given chain. */
export interface KeyIDResponse {
  keyId: string;
}
/** KeyIDResponse contains the key ID of the key assigned to a given chain. */
export interface KeyIDResponseSDKType {
  key_id: string;
}
export interface NextKeyIDRequest {
  chain: string;
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
export interface KeyRequestSDKType {
  key_id: string;
}
export interface KeygenParticipant {
  address: string;
  weight: Uint8Array;
  pubKey: string;
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
  startedAt: Long;
  startedAtTimestamp?: Timestamp;
  thresholdWeight: Uint8Array;
  bondedWeight: Uint8Array;
  /** Keygen participants in descending order by weight */
  participants: KeygenParticipant[];
}
/** KeyResponse contains the key corresponding to a given key id. */
export interface KeyResponseSDKType {
  key_id: string;
  state: KeyState;
  started_at: Long;
  started_at_timestamp?: TimestampSDKType;
  threshold_weight: Uint8Array;
  bonded_weight: Uint8Array;
  participants: KeygenParticipantSDKType[];
}
export interface KeygenSessionRequest {
  keyId: string;
}
export interface KeygenSessionRequestSDKType {
  key_id: string;
}
/** KeygenSessionResponse contains the keygen session info for a given key ID. */
export interface KeygenSessionResponse {
  startedAt: Long;
  startedAtTimestamp?: Timestamp;
  expiresAt: Long;
  completedAt: Long;
  gracePeriod: Long;
  state: MultisigState;
  keygenThresholdWeight: Uint8Array;
  signingThresholdWeight: Uint8Array;
  bondedWeight: Uint8Array;
  /** Keygen candidates in descending order by weight */
  participants: KeygenParticipant[];
}
/** KeygenSessionResponse contains the keygen session info for a given key ID. */
export interface KeygenSessionResponseSDKType {
  started_at: Long;
  started_at_timestamp?: TimestampSDKType;
  expires_at: Long;
  completed_at: Long;
  grace_period: Long;
  state: MultisigState;
  keygen_threshold_weight: Uint8Array;
  signing_threshold_weight: Uint8Array;
  bonded_weight: Uint8Array;
  participants: KeygenParticipantSDKType[];
}
function createBaseKeyIDRequest(): KeyIDRequest {
  return {
    chain: ""
  };
}
export const KeyIDRequest = {
  encode(message: KeyIDRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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
  }
};
function createBaseKeyIDResponse(): KeyIDResponse {
  return {
    keyId: ""
  };
}
export const KeyIDResponse = {
  encode(message: KeyIDResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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
  }
};
function createBaseNextKeyIDRequest(): NextKeyIDRequest {
  return {
    chain: ""
  };
}
export const NextKeyIDRequest = {
  encode(message: NextKeyIDRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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
  }
};
function createBaseNextKeyIDResponse(): NextKeyIDResponse {
  return {
    keyId: ""
  };
}
export const NextKeyIDResponse = {
  encode(message: NextKeyIDResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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
  }
};
function createBaseKeyRequest(): KeyRequest {
  return {
    keyId: ""
  };
}
export const KeyRequest = {
  encode(message: KeyRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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
  encode(message: KeygenParticipant, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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
  }
};
function createBaseKeyResponse(): KeyResponse {
  return {
    keyId: "",
    state: 0,
    startedAt: Long.ZERO,
    startedAtTimestamp: undefined,
    thresholdWeight: new Uint8Array(),
    bondedWeight: new Uint8Array(),
    participants: []
  };
}
export const KeyResponse = {
  encode(message: KeyResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.keyId !== "") {
      writer.uint32(10).string(message.keyId);
    }
    if (message.state !== 0) {
      writer.uint32(16).int32(message.state);
    }
    if (!message.startedAt.isZero()) {
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
      state: isSet(object.state) ? keyStateFromJSON(object.state) : 0,
      startedAt: isSet(object.startedAt) ? Long.fromValue(object.startedAt) : Long.ZERO,
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
    message.startedAt = object.startedAt !== undefined && object.startedAt !== null ? Long.fromValue(object.startedAt) : Long.ZERO;
    message.startedAtTimestamp = object.startedAtTimestamp !== undefined && object.startedAtTimestamp !== null ? Timestamp.fromPartial(object.startedAtTimestamp) : undefined;
    message.thresholdWeight = object.thresholdWeight ?? new Uint8Array();
    message.bondedWeight = object.bondedWeight ?? new Uint8Array();
    message.participants = object.participants?.map(e => KeygenParticipant.fromPartial(e)) || [];
    return message;
  }
};
function createBaseKeygenSessionRequest(): KeygenSessionRequest {
  return {
    keyId: ""
  };
}
export const KeygenSessionRequest = {
  encode(message: KeygenSessionRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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
  }
};
function createBaseKeygenSessionResponse(): KeygenSessionResponse {
  return {
    startedAt: Long.ZERO,
    startedAtTimestamp: undefined,
    expiresAt: Long.ZERO,
    completedAt: Long.ZERO,
    gracePeriod: Long.ZERO,
    state: 0,
    keygenThresholdWeight: new Uint8Array(),
    signingThresholdWeight: new Uint8Array(),
    bondedWeight: new Uint8Array(),
    participants: []
  };
}
export const KeygenSessionResponse = {
  encode(message: KeygenSessionResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.startedAt.isZero()) {
      writer.uint32(8).int64(message.startedAt);
    }
    if (message.startedAtTimestamp !== undefined) {
      Timestamp.encode(message.startedAtTimestamp, writer.uint32(18).fork()).ldelim();
    }
    if (!message.expiresAt.isZero()) {
      writer.uint32(24).int64(message.expiresAt);
    }
    if (!message.completedAt.isZero()) {
      writer.uint32(32).int64(message.completedAt);
    }
    if (!message.gracePeriod.isZero()) {
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
      startedAt: isSet(object.startedAt) ? Long.fromValue(object.startedAt) : Long.ZERO,
      startedAtTimestamp: isSet(object.startedAtTimestamp) ? fromJsonTimestamp(object.startedAtTimestamp) : undefined,
      expiresAt: isSet(object.expiresAt) ? Long.fromValue(object.expiresAt) : Long.ZERO,
      completedAt: isSet(object.completedAt) ? Long.fromValue(object.completedAt) : Long.ZERO,
      gracePeriod: isSet(object.gracePeriod) ? Long.fromValue(object.gracePeriod) : Long.ZERO,
      state: isSet(object.state) ? multisigStateFromJSON(object.state) : 0,
      keygenThresholdWeight: isSet(object.keygenThresholdWeight) ? bytesFromBase64(object.keygenThresholdWeight) : new Uint8Array(),
      signingThresholdWeight: isSet(object.signingThresholdWeight) ? bytesFromBase64(object.signingThresholdWeight) : new Uint8Array(),
      bondedWeight: isSet(object.bondedWeight) ? bytesFromBase64(object.bondedWeight) : new Uint8Array(),
      participants: Array.isArray(object?.participants) ? object.participants.map((e: any) => KeygenParticipant.fromJSON(e)) : []
    };
  },
  fromPartial(object: Partial<KeygenSessionResponse>): KeygenSessionResponse {
    const message = createBaseKeygenSessionResponse();
    message.startedAt = object.startedAt !== undefined && object.startedAt !== null ? Long.fromValue(object.startedAt) : Long.ZERO;
    message.startedAtTimestamp = object.startedAtTimestamp !== undefined && object.startedAtTimestamp !== null ? Timestamp.fromPartial(object.startedAtTimestamp) : undefined;
    message.expiresAt = object.expiresAt !== undefined && object.expiresAt !== null ? Long.fromValue(object.expiresAt) : Long.ZERO;
    message.completedAt = object.completedAt !== undefined && object.completedAt !== null ? Long.fromValue(object.completedAt) : Long.ZERO;
    message.gracePeriod = object.gracePeriod !== undefined && object.gracePeriod !== null ? Long.fromValue(object.gracePeriod) : Long.ZERO;
    message.state = object.state ?? 0;
    message.keygenThresholdWeight = object.keygenThresholdWeight ?? new Uint8Array();
    message.signingThresholdWeight = object.signingThresholdWeight ?? new Uint8Array();
    message.bondedWeight = object.bondedWeight ?? new Uint8Array();
    message.participants = object.participants?.map(e => KeygenParticipant.fromPartial(e)) || [];
    return message;
  }
};