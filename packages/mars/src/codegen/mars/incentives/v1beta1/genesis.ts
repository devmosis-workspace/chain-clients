import { Schedule, ScheduleSDKType } from "./store";
import { Long, isSet } from "../../../helpers";
import * as _m0 from "protobufjs/minimal";
/** GenesisState defines the incentives module's genesis state */
export interface GenesisState {
  /** NextScheduleId is the id for the next incentives schedule to be created */
  nextScheduleId: Long;
  /** Schedules is an array of active incentives schedules */
  schedules: Schedule[];
}
/** GenesisState defines the incentives module's genesis state */
export interface GenesisStateSDKType {
  next_schedule_id: Long;
  schedules: ScheduleSDKType[];
}
function createBaseGenesisState(): GenesisState {
  return {
    nextScheduleId: Long.UZERO,
    schedules: []
  };
}
export const GenesisState = {
  encode(message: GenesisState, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.nextScheduleId.isZero()) {
      writer.uint32(8).uint64(message.nextScheduleId);
    }
    for (const v of message.schedules) {
      Schedule.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): GenesisState {
    return {
      nextScheduleId: isSet(object.nextScheduleId) ? Long.fromValue(object.nextScheduleId) : Long.UZERO,
      schedules: Array.isArray(object?.schedules) ? object.schedules.map((e: any) => Schedule.fromJSON(e)) : []
    };
  },
  fromPartial(object: Partial<GenesisState>): GenesisState {
    const message = createBaseGenesisState();
    message.nextScheduleId = object.nextScheduleId !== undefined && object.nextScheduleId !== null ? Long.fromValue(object.nextScheduleId) : Long.UZERO;
    message.schedules = object.schedules?.map(e => Schedule.fromPartial(e)) || [];
    return message;
  }
};