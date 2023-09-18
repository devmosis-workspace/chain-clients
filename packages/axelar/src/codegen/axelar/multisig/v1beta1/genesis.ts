import { Params, ParamsAmino, ParamsSDKType } from "./params";
import { KeygenSession, KeygenSessionAmino, KeygenSessionSDKType, SigningSession, SigningSessionAmino, SigningSessionSDKType, Key, KeyAmino, KeySDKType, KeyEpoch, KeyEpochAmino, KeyEpochSDKType } from "./types";
import { BinaryWriter } from "../../../binary";
import { isSet } from "../../../helpers";
/** GenesisState represents the genesis state */
export interface GenesisState {
  params: Params;
  keygenSessions: KeygenSession[];
  signingSessions: SigningSession[];
  keys: Key[];
  keyEpochs: KeyEpoch[];
}
export interface GenesisStateProtoMsg {
  typeUrl: "/axelar.multisig.v1beta1.GenesisState";
  value: Uint8Array;
}
/** GenesisState represents the genesis state */
export interface GenesisStateAmino {
  params?: ParamsAmino;
  keygen_sessions: KeygenSessionAmino[];
  signing_sessions: SigningSessionAmino[];
  keys: KeyAmino[];
  key_epochs: KeyEpochAmino[];
}
export interface GenesisStateAminoMsg {
  type: "/axelar.multisig.v1beta1.GenesisState";
  value: GenesisStateAmino;
}
/** GenesisState represents the genesis state */
export interface GenesisStateSDKType {
  params: ParamsSDKType;
  keygen_sessions: KeygenSessionSDKType[];
  signing_sessions: SigningSessionSDKType[];
  keys: KeySDKType[];
  key_epochs: KeyEpochSDKType[];
}
function createBaseGenesisState(): GenesisState {
  return {
    params: Params.fromPartial({}),
    keygenSessions: [],
    signingSessions: [],
    keys: [],
    keyEpochs: []
  };
}
export const GenesisState = {
  typeUrl: "/axelar.multisig.v1beta1.GenesisState",
  encode(message: GenesisState, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.keygenSessions) {
      KeygenSession.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    for (const v of message.signingSessions) {
      SigningSession.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    for (const v of message.keys) {
      Key.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    for (const v of message.keyEpochs) {
      KeyEpoch.encode(v!, writer.uint32(42).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): GenesisState {
    return {
      params: isSet(object.params) ? Params.fromJSON(object.params) : undefined,
      keygenSessions: Array.isArray(object?.keygenSessions) ? object.keygenSessions.map((e: any) => KeygenSession.fromJSON(e)) : [],
      signingSessions: Array.isArray(object?.signingSessions) ? object.signingSessions.map((e: any) => SigningSession.fromJSON(e)) : [],
      keys: Array.isArray(object?.keys) ? object.keys.map((e: any) => Key.fromJSON(e)) : [],
      keyEpochs: Array.isArray(object?.keyEpochs) ? object.keyEpochs.map((e: any) => KeyEpoch.fromJSON(e)) : []
    };
  },
  fromPartial(object: Partial<GenesisState>): GenesisState {
    const message = createBaseGenesisState();
    message.params = object.params !== undefined && object.params !== null ? Params.fromPartial(object.params) : undefined;
    message.keygenSessions = object.keygenSessions?.map(e => KeygenSession.fromPartial(e)) || [];
    message.signingSessions = object.signingSessions?.map(e => SigningSession.fromPartial(e)) || [];
    message.keys = object.keys?.map(e => Key.fromPartial(e)) || [];
    message.keyEpochs = object.keyEpochs?.map(e => KeyEpoch.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: GenesisStateAmino): GenesisState {
    return {
      params: object?.params ? Params.fromAmino(object.params) : undefined,
      keygenSessions: Array.isArray(object?.keygen_sessions) ? object.keygen_sessions.map((e: any) => KeygenSession.fromAmino(e)) : [],
      signingSessions: Array.isArray(object?.signing_sessions) ? object.signing_sessions.map((e: any) => SigningSession.fromAmino(e)) : [],
      keys: Array.isArray(object?.keys) ? object.keys.map((e: any) => Key.fromAmino(e)) : [],
      keyEpochs: Array.isArray(object?.key_epochs) ? object.key_epochs.map((e: any) => KeyEpoch.fromAmino(e)) : []
    };
  },
  toAmino(message: GenesisState): GenesisStateAmino {
    const obj: any = {};
    obj.params = message.params ? Params.toAmino(message.params) : undefined;
    if (message.keygenSessions) {
      obj.keygen_sessions = message.keygenSessions.map(e => e ? KeygenSession.toAmino(e) : undefined);
    } else {
      obj.keygen_sessions = [];
    }
    if (message.signingSessions) {
      obj.signing_sessions = message.signingSessions.map(e => e ? SigningSession.toAmino(e) : undefined);
    } else {
      obj.signing_sessions = [];
    }
    if (message.keys) {
      obj.keys = message.keys.map(e => e ? Key.toAmino(e) : undefined);
    } else {
      obj.keys = [];
    }
    if (message.keyEpochs) {
      obj.key_epochs = message.keyEpochs.map(e => e ? KeyEpoch.toAmino(e) : undefined);
    } else {
      obj.key_epochs = [];
    }
    return obj;
  },
  fromAminoMsg(object: GenesisStateAminoMsg): GenesisState {
    return GenesisState.fromAmino(object.value);
  },
  fromProtoMsg(message: GenesisStateProtoMsg): GenesisState {
    return GenesisState.decode(message.value);
  },
  toProto(message: GenesisState): Uint8Array {
    return GenesisState.encode(message).finish();
  },
  toProtoMsg(message: GenesisState): GenesisStateProtoMsg {
    return {
      typeUrl: "/axelar.multisig.v1beta1.GenesisState",
      value: GenesisState.encode(message).finish()
    };
  }
};