import { Params, ParamsAmino, ParamsSDKType } from "./params";
import { Rollapp, RollappAmino, RollappSDKType } from "./rollapp";
import { StateInfo, StateInfoAmino, StateInfoSDKType, StateInfoIndex, StateInfoIndexAmino, StateInfoIndexSDKType, BlockHeightToFinalizationQueue, BlockHeightToFinalizationQueueAmino, BlockHeightToFinalizationQueueSDKType } from "./state_info";
import { BinaryWriter } from "../../binary";
import { isSet } from "../../helpers";
/** GenesisState defines the rollapp module's genesis state. */
export interface GenesisState {
  params: Params;
  rollappList: Rollapp[];
  stateInfoList: StateInfo[];
  latestStateInfoIndexList: StateInfoIndex[];
  latestFinalizedStateIndexList: StateInfoIndex[];
  blockHeightToFinalizationQueueList: BlockHeightToFinalizationQueue[];
}
export interface GenesisStateProtoMsg {
  typeUrl: "/dymensionxyz.dymension.rollapp.GenesisState";
  value: Uint8Array;
}
/** GenesisState defines the rollapp module's genesis state. */
export interface GenesisStateAmino {
  params?: ParamsAmino;
  rollappList?: RollappAmino[];
  stateInfoList?: StateInfoAmino[];
  latestStateInfoIndexList?: StateInfoIndexAmino[];
  latestFinalizedStateIndexList?: StateInfoIndexAmino[];
  blockHeightToFinalizationQueueList?: BlockHeightToFinalizationQueueAmino[];
}
export interface GenesisStateAminoMsg {
  type: "/dymensionxyz.dymension.rollapp.GenesisState";
  value: GenesisStateAmino;
}
/** GenesisState defines the rollapp module's genesis state. */
export interface GenesisStateSDKType {
  params: ParamsSDKType;
  rollappList: RollappSDKType[];
  stateInfoList: StateInfoSDKType[];
  latestStateInfoIndexList: StateInfoIndexSDKType[];
  latestFinalizedStateIndexList: StateInfoIndexSDKType[];
  blockHeightToFinalizationQueueList: BlockHeightToFinalizationQueueSDKType[];
}
function createBaseGenesisState(): GenesisState {
  return {
    params: Params.fromPartial({}),
    rollappList: [],
    stateInfoList: [],
    latestStateInfoIndexList: [],
    latestFinalizedStateIndexList: [],
    blockHeightToFinalizationQueueList: []
  };
}
export const GenesisState = {
  typeUrl: "/dymensionxyz.dymension.rollapp.GenesisState",
  encode(message: GenesisState, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.rollappList) {
      Rollapp.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    for (const v of message.stateInfoList) {
      StateInfo.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    for (const v of message.latestStateInfoIndexList) {
      StateInfoIndex.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    for (const v of message.latestFinalizedStateIndexList) {
      StateInfoIndex.encode(v!, writer.uint32(42).fork()).ldelim();
    }
    for (const v of message.blockHeightToFinalizationQueueList) {
      BlockHeightToFinalizationQueue.encode(v!, writer.uint32(50).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): GenesisState {
    return {
      params: isSet(object.params) ? Params.fromJSON(object.params) : undefined,
      rollappList: Array.isArray(object?.rollappList) ? object.rollappList.map((e: any) => Rollapp.fromJSON(e)) : [],
      stateInfoList: Array.isArray(object?.stateInfoList) ? object.stateInfoList.map((e: any) => StateInfo.fromJSON(e)) : [],
      latestStateInfoIndexList: Array.isArray(object?.latestStateInfoIndexList) ? object.latestStateInfoIndexList.map((e: any) => StateInfoIndex.fromJSON(e)) : [],
      latestFinalizedStateIndexList: Array.isArray(object?.latestFinalizedStateIndexList) ? object.latestFinalizedStateIndexList.map((e: any) => StateInfoIndex.fromJSON(e)) : [],
      blockHeightToFinalizationQueueList: Array.isArray(object?.blockHeightToFinalizationQueueList) ? object.blockHeightToFinalizationQueueList.map((e: any) => BlockHeightToFinalizationQueue.fromJSON(e)) : []
    };
  },
  fromPartial(object: Partial<GenesisState>): GenesisState {
    const message = createBaseGenesisState();
    message.params = object.params !== undefined && object.params !== null ? Params.fromPartial(object.params) : undefined;
    message.rollappList = object.rollappList?.map(e => Rollapp.fromPartial(e)) || [];
    message.stateInfoList = object.stateInfoList?.map(e => StateInfo.fromPartial(e)) || [];
    message.latestStateInfoIndexList = object.latestStateInfoIndexList?.map(e => StateInfoIndex.fromPartial(e)) || [];
    message.latestFinalizedStateIndexList = object.latestFinalizedStateIndexList?.map(e => StateInfoIndex.fromPartial(e)) || [];
    message.blockHeightToFinalizationQueueList = object.blockHeightToFinalizationQueueList?.map(e => BlockHeightToFinalizationQueue.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: GenesisStateAmino): GenesisState {
    const message = createBaseGenesisState();
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromAmino(object.params);
    }
    message.rollappList = object.rollappList?.map(e => Rollapp.fromAmino(e)) || [];
    message.stateInfoList = object.stateInfoList?.map(e => StateInfo.fromAmino(e)) || [];
    message.latestStateInfoIndexList = object.latestStateInfoIndexList?.map(e => StateInfoIndex.fromAmino(e)) || [];
    message.latestFinalizedStateIndexList = object.latestFinalizedStateIndexList?.map(e => StateInfoIndex.fromAmino(e)) || [];
    message.blockHeightToFinalizationQueueList = object.blockHeightToFinalizationQueueList?.map(e => BlockHeightToFinalizationQueue.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: GenesisState): GenesisStateAmino {
    const obj: any = {};
    obj.params = message.params ? Params.toAmino(message.params) : undefined;
    if (message.rollappList) {
      obj.rollappList = message.rollappList.map(e => e ? Rollapp.toAmino(e) : undefined);
    } else {
      obj.rollappList = [];
    }
    if (message.stateInfoList) {
      obj.stateInfoList = message.stateInfoList.map(e => e ? StateInfo.toAmino(e) : undefined);
    } else {
      obj.stateInfoList = [];
    }
    if (message.latestStateInfoIndexList) {
      obj.latestStateInfoIndexList = message.latestStateInfoIndexList.map(e => e ? StateInfoIndex.toAmino(e) : undefined);
    } else {
      obj.latestStateInfoIndexList = [];
    }
    if (message.latestFinalizedStateIndexList) {
      obj.latestFinalizedStateIndexList = message.latestFinalizedStateIndexList.map(e => e ? StateInfoIndex.toAmino(e) : undefined);
    } else {
      obj.latestFinalizedStateIndexList = [];
    }
    if (message.blockHeightToFinalizationQueueList) {
      obj.blockHeightToFinalizationQueueList = message.blockHeightToFinalizationQueueList.map(e => e ? BlockHeightToFinalizationQueue.toAmino(e) : undefined);
    } else {
      obj.blockHeightToFinalizationQueueList = [];
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
      typeUrl: "/dymensionxyz.dymension.rollapp.GenesisState",
      value: GenesisState.encode(message).finish()
    };
  }
};