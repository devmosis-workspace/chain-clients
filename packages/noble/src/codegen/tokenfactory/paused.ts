import * as _m0 from "protobufjs/minimal";
import { isSet } from "../helpers";
export interface Paused {
  paused: boolean;
}
export interface PausedSDKType {
  paused: boolean;
}
function createBasePaused(): Paused {
  return {
    paused: false
  };
}
export const Paused = {
  encode(message: Paused, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.paused === true) {
      writer.uint32(8).bool(message.paused);
    }
    return writer;
  },
  fromJSON(object: any): Paused {
    return {
      paused: isSet(object.paused) ? Boolean(object.paused) : false
    };
  },
  fromPartial(object: Partial<Paused>): Paused {
    const message = createBasePaused();
    message.paused = object.paused ?? false;
    return message;
  }
};