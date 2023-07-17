import { RegistrationNodeInfo, RegistrationNodeInfoSDKType } from "./types";
import { MasterKey, MasterKeySDKType } from "./msg";
import * as _m0 from "protobufjs/minimal";
import { isSet } from "../../../helpers";
export interface GenesisState {
  registration: RegistrationNodeInfo[];
  nodeExchMasterKey?: MasterKey;
  ioMasterKey?: MasterKey;
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
  encode(message: GenesisState, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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
  }
};