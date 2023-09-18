import { Schedule, ScheduleAmino, ScheduleSDKType } from "./store";
import { BinaryWriter } from "../../../binary";
import { isSet } from "../../../helpers";
/** GenesisState defines the incentives module's genesis state */
export interface GenesisState {
  /** NextScheduleId is the id for the next incentives schedule to be created */
  nextScheduleId: bigint;
  /** Schedules is an array of active incentives schedules */
  schedules: Schedule[];
}
export interface GenesisStateProtoMsg {
  typeUrl: "/mars.incentives.v1beta1.GenesisState";
  value: Uint8Array;
}
/** GenesisState defines the incentives module's genesis state */
export interface GenesisStateAmino {
  /** NextScheduleId is the id for the next incentives schedule to be created */
  next_schedule_id: string;
  /** Schedules is an array of active incentives schedules */
  schedules: ScheduleAmino[];
}
export interface GenesisStateAminoMsg {
  type: "/mars.incentives.v1beta1.GenesisState";
  value: GenesisStateAmino;
}
/** GenesisState defines the incentives module's genesis state */
export interface GenesisStateSDKType {
  next_schedule_id: bigint;
  schedules: ScheduleSDKType[];
}
function createBaseGenesisState(): GenesisState {
  return {
    nextScheduleId: BigInt(0),
    schedules: []
  };
}
export const GenesisState = {
  typeUrl: "/mars.incentives.v1beta1.GenesisState",
  encode(message: GenesisState, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.nextScheduleId !== BigInt(0)) {
      writer.uint32(8).uint64(message.nextScheduleId);
    }
    for (const v of message.schedules) {
      Schedule.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): GenesisState {
    return {
      nextScheduleId: isSet(object.nextScheduleId) ? BigInt(object.nextScheduleId.toString()) : BigInt(0),
      schedules: Array.isArray(object?.schedules) ? object.schedules.map((e: any) => Schedule.fromJSON(e)) : []
    };
  },
  fromPartial(object: Partial<GenesisState>): GenesisState {
    const message = createBaseGenesisState();
    message.nextScheduleId = object.nextScheduleId !== undefined && object.nextScheduleId !== null ? BigInt(object.nextScheduleId.toString()) : BigInt(0);
    message.schedules = object.schedules?.map(e => Schedule.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: GenesisStateAmino): GenesisState {
    return {
      nextScheduleId: BigInt(object.next_schedule_id),
      schedules: Array.isArray(object?.schedules) ? object.schedules.map((e: any) => Schedule.fromAmino(e)) : []
    };
  },
  toAmino(message: GenesisState): GenesisStateAmino {
    const obj: any = {};
    obj.next_schedule_id = message.nextScheduleId ? message.nextScheduleId.toString() : undefined;
    if (message.schedules) {
      obj.schedules = message.schedules.map(e => e ? Schedule.toAmino(e) : undefined);
    } else {
      obj.schedules = [];
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
      typeUrl: "/mars.incentives.v1beta1.GenesisState",
      value: GenesisState.encode(message).finish()
    };
  }
};