import { BinaryWriter } from "../../binary";
import { isSet } from "../../helpers";
export interface EventDataRoundState {
  height: bigint;
  round: number;
  step: string;
}
export interface EventDataRoundStateProtoMsg {
  typeUrl: "/tendermint.types.EventDataRoundState";
  value: Uint8Array;
}
export interface EventDataRoundStateAmino {
  height: string;
  round: number;
  step: string;
}
export interface EventDataRoundStateAminoMsg {
  type: "/tendermint.types.EventDataRoundState";
  value: EventDataRoundStateAmino;
}
export interface EventDataRoundStateSDKType {
  height: bigint;
  round: number;
  step: string;
}
function createBaseEventDataRoundState(): EventDataRoundState {
  return {
    height: BigInt(0),
    round: 0,
    step: ""
  };
}
export const EventDataRoundState = {
  typeUrl: "/tendermint.types.EventDataRoundState",
  encode(message: EventDataRoundState, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.height !== BigInt(0)) {
      writer.uint32(8).int64(message.height);
    }
    if (message.round !== 0) {
      writer.uint32(16).int32(message.round);
    }
    if (message.step !== "") {
      writer.uint32(26).string(message.step);
    }
    return writer;
  },
  fromJSON(object: any): EventDataRoundState {
    return {
      height: isSet(object.height) ? BigInt(object.height.toString()) : BigInt(0),
      round: isSet(object.round) ? Number(object.round) : 0,
      step: isSet(object.step) ? String(object.step) : ""
    };
  },
  fromPartial(object: Partial<EventDataRoundState>): EventDataRoundState {
    const message = createBaseEventDataRoundState();
    message.height = object.height !== undefined && object.height !== null ? BigInt(object.height.toString()) : BigInt(0);
    message.round = object.round ?? 0;
    message.step = object.step ?? "";
    return message;
  },
  fromAmino(object: EventDataRoundStateAmino): EventDataRoundState {
    return {
      height: BigInt(object.height),
      round: object.round,
      step: object.step
    };
  },
  toAmino(message: EventDataRoundState): EventDataRoundStateAmino {
    const obj: any = {};
    obj.height = message.height ? message.height.toString() : undefined;
    obj.round = message.round;
    obj.step = message.step;
    return obj;
  },
  fromAminoMsg(object: EventDataRoundStateAminoMsg): EventDataRoundState {
    return EventDataRoundState.fromAmino(object.value);
  },
  fromProtoMsg(message: EventDataRoundStateProtoMsg): EventDataRoundState {
    return EventDataRoundState.decode(message.value);
  },
  toProto(message: EventDataRoundState): Uint8Array {
    return EventDataRoundState.encode(message).finish();
  },
  toProtoMsg(message: EventDataRoundState): EventDataRoundStateProtoMsg {
    return {
      typeUrl: "/tendermint.types.EventDataRoundState",
      value: EventDataRoundState.encode(message).finish()
    };
  }
};