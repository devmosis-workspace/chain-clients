import { Params, ParamsSDKType } from "./params";
import { KeygenSession, KeygenSessionSDKType, SigningSession, SigningSessionSDKType, Key, KeySDKType, KeyEpoch, KeyEpochSDKType } from "./types";
import * as _m0 from "protobufjs/minimal";
import { isSet } from "../../../helpers";
/** GenesisState represents the genesis state */
export interface GenesisState {
  params?: Params;
  keygenSessions: KeygenSession[];
  signingSessions: SigningSession[];
  keys: Key[];
  keyEpochs: KeyEpoch[];
}
/** GenesisState represents the genesis state */
export interface GenesisStateSDKType {
  params?: ParamsSDKType;
  keygen_sessions: KeygenSessionSDKType[];
  signing_sessions: SigningSessionSDKType[];
  keys: KeySDKType[];
  key_epochs: KeyEpochSDKType[];
}
function createBaseGenesisState(): GenesisState {
  return {
    params: undefined,
    keygenSessions: [],
    signingSessions: [],
    keys: [],
    keyEpochs: []
  };
}
export const GenesisState = {
  encode(message: GenesisState, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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
  }
};