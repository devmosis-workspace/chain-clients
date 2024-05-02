import { Pause, PauseAmino, PauseSDKType } from "./types";
import { BinaryWriter } from "../../../binary";
import { isSet } from "../../../helpers";
/** GenesisState for ethbridge */
export interface GenesisState {
  cethReceiveAccount: string;
  peggyTokens: string[];
  blacklist: string[];
  pause?: Pause;
}
export interface GenesisStateProtoMsg {
  typeUrl: "/sifnode.ethbridge.v1.GenesisState";
  value: Uint8Array;
}
/** GenesisState for ethbridge */
export interface GenesisStateAmino {
  ceth_receive_account?: string;
  peggy_tokens?: string[];
  blacklist?: string[];
  pause?: PauseAmino;
}
export interface GenesisStateAminoMsg {
  type: "/sifnode.ethbridge.v1.GenesisState";
  value: GenesisStateAmino;
}
/** GenesisState for ethbridge */
export interface GenesisStateSDKType {
  ceth_receive_account: string;
  peggy_tokens: string[];
  blacklist: string[];
  pause?: PauseSDKType;
}
function createBaseGenesisState(): GenesisState {
  return {
    cethReceiveAccount: "",
    peggyTokens: [],
    blacklist: [],
    pause: undefined
  };
}
export const GenesisState = {
  typeUrl: "/sifnode.ethbridge.v1.GenesisState",
  encode(message: GenesisState, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.cethReceiveAccount !== "") {
      writer.uint32(10).string(message.cethReceiveAccount);
    }
    for (const v of message.peggyTokens) {
      writer.uint32(18).string(v!);
    }
    for (const v of message.blacklist) {
      writer.uint32(26).string(v!);
    }
    if (message.pause !== undefined) {
      Pause.encode(message.pause, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): GenesisState {
    return {
      cethReceiveAccount: isSet(object.cethReceiveAccount) ? String(object.cethReceiveAccount) : "",
      peggyTokens: Array.isArray(object?.peggyTokens) ? object.peggyTokens.map((e: any) => String(e)) : [],
      blacklist: Array.isArray(object?.blacklist) ? object.blacklist.map((e: any) => String(e)) : [],
      pause: isSet(object.pause) ? Pause.fromJSON(object.pause) : undefined
    };
  },
  fromPartial(object: Partial<GenesisState>): GenesisState {
    const message = createBaseGenesisState();
    message.cethReceiveAccount = object.cethReceiveAccount ?? "";
    message.peggyTokens = object.peggyTokens?.map(e => e) || [];
    message.blacklist = object.blacklist?.map(e => e) || [];
    message.pause = object.pause !== undefined && object.pause !== null ? Pause.fromPartial(object.pause) : undefined;
    return message;
  },
  fromAmino(object: GenesisStateAmino): GenesisState {
    const message = createBaseGenesisState();
    if (object.ceth_receive_account !== undefined && object.ceth_receive_account !== null) {
      message.cethReceiveAccount = object.ceth_receive_account;
    }
    message.peggyTokens = object.peggy_tokens?.map(e => e) || [];
    message.blacklist = object.blacklist?.map(e => e) || [];
    if (object.pause !== undefined && object.pause !== null) {
      message.pause = Pause.fromAmino(object.pause);
    }
    return message;
  },
  toAmino(message: GenesisState): GenesisStateAmino {
    const obj: any = {};
    obj.ceth_receive_account = message.cethReceiveAccount === "" ? undefined : message.cethReceiveAccount;
    if (message.peggyTokens) {
      obj.peggy_tokens = message.peggyTokens.map(e => e);
    } else {
      obj.peggy_tokens = message.peggyTokens;
    }
    if (message.blacklist) {
      obj.blacklist = message.blacklist.map(e => e);
    } else {
      obj.blacklist = message.blacklist;
    }
    obj.pause = message.pause ? Pause.toAmino(message.pause) : undefined;
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
      typeUrl: "/sifnode.ethbridge.v1.GenesisState",
      value: GenesisState.encode(message).finish()
    };
  }
};