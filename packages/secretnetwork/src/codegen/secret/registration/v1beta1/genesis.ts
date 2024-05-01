import { RegistrationNodeInfo, RegistrationNodeInfoAmino, RegistrationNodeInfoSDKType } from "./types";
import { MasterKey, MasterKeyAmino, MasterKeySDKType } from "./msg";
import { BinaryWriter } from "../../../binary";
import { isSet } from "../../../helpers";
export interface GenesisState {
  registration: RegistrationNodeInfo[];
  nodeExchMasterKey?: MasterKey;
  ioMasterKey?: MasterKey;
}
export interface GenesisStateProtoMsg {
  typeUrl: "/secret.registration.v1beta1.GenesisState";
  value: Uint8Array;
}
export interface GenesisStateAmino {
  registration: RegistrationNodeInfoAmino[];
  node_exch_master_key: MasterKeyAmino;
  io_master_key: MasterKeyAmino;
}
export interface GenesisStateAminoMsg {
  type: "/secret.registration.v1beta1.GenesisState";
  value: GenesisStateAmino;
}
export interface GenesisStateSDKType {
  registration: RegistrationNodeInfoSDKType[];
  node_exch_master_key?: MasterKeySDKType;
  io_master_key?: MasterKeySDKType;
}
function createBaseGenesisState(): GenesisState {
  return {
    registration: [],
    nodeExchMasterKey: undefined,
    ioMasterKey: undefined
  };
}
export const GenesisState = {
  typeUrl: "/secret.registration.v1beta1.GenesisState",
  encode(message: GenesisState, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.registration) {
      RegistrationNodeInfo.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.nodeExchMasterKey !== undefined) {
      MasterKey.encode(message.nodeExchMasterKey, writer.uint32(18).fork()).ldelim();
    }
    if (message.ioMasterKey !== undefined) {
      MasterKey.encode(message.ioMasterKey, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): GenesisState {
    return {
      registration: Array.isArray(object?.registration) ? object.registration.map((e: any) => RegistrationNodeInfo.fromJSON(e)) : [],
      nodeExchMasterKey: isSet(object.nodeExchMasterKey) ? MasterKey.fromJSON(object.nodeExchMasterKey) : undefined,
      ioMasterKey: isSet(object.ioMasterKey) ? MasterKey.fromJSON(object.ioMasterKey) : undefined
    };
  },
  fromPartial(object: Partial<GenesisState>): GenesisState {
    const message = createBaseGenesisState();
    message.registration = object.registration?.map(e => RegistrationNodeInfo.fromPartial(e)) || [];
    message.nodeExchMasterKey = object.nodeExchMasterKey !== undefined && object.nodeExchMasterKey !== null ? MasterKey.fromPartial(object.nodeExchMasterKey) : undefined;
    message.ioMasterKey = object.ioMasterKey !== undefined && object.ioMasterKey !== null ? MasterKey.fromPartial(object.ioMasterKey) : undefined;
    return message;
  },
  fromAmino(object: GenesisStateAmino): GenesisState {
    const message = createBaseGenesisState();
    message.registration = object.registration?.map(e => RegistrationNodeInfo.fromAmino(e)) || [];
    if (object.node_exch_master_key !== undefined && object.node_exch_master_key !== null) {
      message.nodeExchMasterKey = MasterKey.fromAmino(object.node_exch_master_key);
    }
    if (object.io_master_key !== undefined && object.io_master_key !== null) {
      message.ioMasterKey = MasterKey.fromAmino(object.io_master_key);
    }
    return message;
  },
  toAmino(message: GenesisState): GenesisStateAmino {
    const obj: any = {};
    if (message.registration) {
      obj.registration = message.registration.map(e => e ? RegistrationNodeInfo.toAmino(e) : undefined);
    } else {
      obj.registration = message.registration;
    }
    obj.node_exch_master_key = message.nodeExchMasterKey ? MasterKey.toAmino(message.nodeExchMasterKey) : MasterKey.toAmino(MasterKey.fromPartial({}));
    obj.io_master_key = message.ioMasterKey ? MasterKey.toAmino(message.ioMasterKey) : MasterKey.toAmino(MasterKey.fromPartial({}));
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
      typeUrl: "/secret.registration.v1beta1.GenesisState",
      value: GenesisState.encode(message).finish()
    };
  }
};