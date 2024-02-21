import { Schedule, ScheduleAmino, ScheduleSDKType } from "./schedule";
import { Params, ParamsAmino, ParamsSDKType } from "./params";
import { BinaryWriter } from "../../binary";
import { isSet } from "../../helpers";
/** GenesisState defines the cron module's genesis state. */
export interface GenesisState {
  scheduleList: Schedule[];
  params: Params;
}
export interface GenesisStateProtoMsg {
  typeUrl: "/neutron.cron.GenesisState";
  value: Uint8Array;
}
/** GenesisState defines the cron module's genesis state. */
export interface GenesisStateAmino {
  scheduleList?: ScheduleAmino[];
  params?: ParamsAmino;
}
export interface GenesisStateAminoMsg {
  type: "/neutron.cron.GenesisState";
  value: GenesisStateAmino;
}
/** GenesisState defines the cron module's genesis state. */
export interface GenesisStateSDKType {
  scheduleList: ScheduleSDKType[];
  params: ParamsSDKType;
}
function createBaseGenesisState(): GenesisState {
  return {
    scheduleList: [],
    params: Params.fromPartial({})
  };
}
export const GenesisState = {
  typeUrl: "/neutron.cron.GenesisState",
  encode(message: GenesisState, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.scheduleList) {
      Schedule.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): GenesisState {
    return {
      scheduleList: Array.isArray(object?.scheduleList) ? object.scheduleList.map((e: any) => Schedule.fromJSON(e)) : [],
      params: isSet(object.params) ? Params.fromJSON(object.params) : undefined
    };
  },
  fromPartial(object: Partial<GenesisState>): GenesisState {
    const message = createBaseGenesisState();
    message.scheduleList = object.scheduleList?.map(e => Schedule.fromPartial(e)) || [];
    message.params = object.params !== undefined && object.params !== null ? Params.fromPartial(object.params) : undefined;
    return message;
  },
  fromAmino(object: GenesisStateAmino): GenesisState {
    const message = createBaseGenesisState();
    message.scheduleList = object.scheduleList?.map(e => Schedule.fromAmino(e)) || [];
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromAmino(object.params);
    }
    return message;
  },
  toAmino(message: GenesisState): GenesisStateAmino {
    const obj: any = {};
    if (message.scheduleList) {
      obj.scheduleList = message.scheduleList.map(e => e ? Schedule.toAmino(e) : undefined);
    } else {
      obj.scheduleList = [];
    }
    obj.params = message.params ? Params.toAmino(message.params) : undefined;
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
      typeUrl: "/neutron.cron.GenesisState",
      value: GenesisState.encode(message).finish()
    };
  }
};