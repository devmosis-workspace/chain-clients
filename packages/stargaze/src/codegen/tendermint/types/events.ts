import { Long, isSet } from "../../helpers";
import * as _m0 from "protobufjs/minimal";
export interface EventDataRoundState {
  height: Long;
  round: number;
  step: string;
}
export interface EventDataRoundStateSDKType {
  height: Long;
  round: number;
  step: string;
}
function createBaseEventDataRoundState(): EventDataRoundState {
  return {
    height: Long.ZERO,
    round: 0,
    step: ""
  };
}
export const EventDataRoundState = {
  encode(message: EventDataRoundState, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.height.isZero()) {
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
      height: isSet(object.height) ? Long.fromValue(object.height) : Long.ZERO,
      round: isSet(object.round) ? Number(object.round) : 0,
      step: isSet(object.step) ? String(object.step) : ""
    };
  },
  fromPartial(object: Partial<EventDataRoundState>): EventDataRoundState {
    const message = createBaseEventDataRoundState();
    message.height = object.height !== undefined && object.height !== null ? Long.fromValue(object.height) : Long.ZERO;
    message.round = object.round ?? 0;
    message.step = object.step ?? "";
    return message;
  }
};