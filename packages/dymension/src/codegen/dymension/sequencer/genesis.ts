import { Params, ParamsAmino, ParamsSDKType } from "./params";
import { Sequencer, SequencerAmino, SequencerSDKType } from "./sequencer";
import { SequencersByRollapp, SequencersByRollappAmino, SequencersByRollappSDKType } from "./sequencers_by_rollapp";
import { Scheduler, SchedulerAmino, SchedulerSDKType } from "./scheduler";
import { BinaryWriter } from "../../binary";
import { isSet } from "../../helpers";
/** GenesisState defines the sequencer module's genesis state. */
export interface GenesisState {
  params: Params;
  sequencerList: Sequencer[];
  sequencersByRollappList: SequencersByRollapp[];
  schedulerList: Scheduler[];
}
export interface GenesisStateProtoMsg {
  typeUrl: "/dymensionxyz.dymension.sequencer.GenesisState";
  value: Uint8Array;
}
/** GenesisState defines the sequencer module's genesis state. */
export interface GenesisStateAmino {
  params?: ParamsAmino;
  sequencerList?: SequencerAmino[];
  sequencersByRollappList?: SequencersByRollappAmino[];
  schedulerList?: SchedulerAmino[];
}
export interface GenesisStateAminoMsg {
  type: "/dymensionxyz.dymension.sequencer.GenesisState";
  value: GenesisStateAmino;
}
/** GenesisState defines the sequencer module's genesis state. */
export interface GenesisStateSDKType {
  params: ParamsSDKType;
  sequencerList: SequencerSDKType[];
  sequencersByRollappList: SequencersByRollappSDKType[];
  schedulerList: SchedulerSDKType[];
}
function createBaseGenesisState(): GenesisState {
  return {
    params: Params.fromPartial({}),
    sequencerList: [],
    sequencersByRollappList: [],
    schedulerList: []
  };
}
export const GenesisState = {
  typeUrl: "/dymensionxyz.dymension.sequencer.GenesisState",
  encode(message: GenesisState, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.sequencerList) {
      Sequencer.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    for (const v of message.sequencersByRollappList) {
      SequencersByRollapp.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    for (const v of message.schedulerList) {
      Scheduler.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): GenesisState {
    return {
      params: isSet(object.params) ? Params.fromJSON(object.params) : undefined,
      sequencerList: Array.isArray(object?.sequencerList) ? object.sequencerList.map((e: any) => Sequencer.fromJSON(e)) : [],
      sequencersByRollappList: Array.isArray(object?.sequencersByRollappList) ? object.sequencersByRollappList.map((e: any) => SequencersByRollapp.fromJSON(e)) : [],
      schedulerList: Array.isArray(object?.schedulerList) ? object.schedulerList.map((e: any) => Scheduler.fromJSON(e)) : []
    };
  },
  fromPartial(object: Partial<GenesisState>): GenesisState {
    const message = createBaseGenesisState();
    message.params = object.params !== undefined && object.params !== null ? Params.fromPartial(object.params) : undefined;
    message.sequencerList = object.sequencerList?.map(e => Sequencer.fromPartial(e)) || [];
    message.sequencersByRollappList = object.sequencersByRollappList?.map(e => SequencersByRollapp.fromPartial(e)) || [];
    message.schedulerList = object.schedulerList?.map(e => Scheduler.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: GenesisStateAmino): GenesisState {
    const message = createBaseGenesisState();
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromAmino(object.params);
    }
    message.sequencerList = object.sequencerList?.map(e => Sequencer.fromAmino(e)) || [];
    message.sequencersByRollappList = object.sequencersByRollappList?.map(e => SequencersByRollapp.fromAmino(e)) || [];
    message.schedulerList = object.schedulerList?.map(e => Scheduler.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: GenesisState): GenesisStateAmino {
    const obj: any = {};
    obj.params = message.params ? Params.toAmino(message.params) : undefined;
    if (message.sequencerList) {
      obj.sequencerList = message.sequencerList.map(e => e ? Sequencer.toAmino(e) : undefined);
    } else {
      obj.sequencerList = [];
    }
    if (message.sequencersByRollappList) {
      obj.sequencersByRollappList = message.sequencersByRollappList.map(e => e ? SequencersByRollapp.toAmino(e) : undefined);
    } else {
      obj.sequencersByRollappList = [];
    }
    if (message.schedulerList) {
      obj.schedulerList = message.schedulerList.map(e => e ? Scheduler.toAmino(e) : undefined);
    } else {
      obj.schedulerList = [];
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
      typeUrl: "/dymensionxyz.dymension.sequencer.GenesisState",
      value: GenesisState.encode(message).finish()
    };
  }
};