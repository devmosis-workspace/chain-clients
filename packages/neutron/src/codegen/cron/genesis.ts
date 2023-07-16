import { Schedule, ScheduleSDKType } from "./schedule";
import { Params, ParamsSDKType } from "./params";
import * as _m0 from "protobufjs/minimal";
import { isSet } from "../helpers";
/** GenesisState defines the cron module's genesis state. */
export interface GenesisState {
  scheduleList: Schedule[];
  params?: Params;
}
/** GenesisState defines the cron module's genesis state. */
export interface GenesisStateSDKType {
  scheduleList: ScheduleSDKType[];
  params?: ParamsSDKType;
}
function createBaseGenesisState(): GenesisState {
  return {
    scheduleList: [],
    params: undefined
  };
}
export const GenesisState = {
  encode(message: GenesisState, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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
  }
};