import * as _m0 from "protobufjs/minimal";
import { isSet } from "../../helpers";
/** Params holds parameters for the incentives module */
export interface Params {
  /**
   * distr_epoch_identifier is what epoch type distribution will be triggered by
   * (day, week, etc.)
   */
  distrEpochIdentifier: string;
}
/** Params holds parameters for the incentives module */
export interface ParamsSDKType {
  distr_epoch_identifier: string;
}
function createBaseParams(): Params {
  return {
    distrEpochIdentifier: ""
  };
}
export const Params = {
  encode(message: Params, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.distrEpochIdentifier !== "") {
      writer.uint32(10).string(message.distrEpochIdentifier);
    }
    return writer;
  },
  fromJSON(object: any): Params {
    return {
      distrEpochIdentifier: isSet(object.distrEpochIdentifier) ? String(object.distrEpochIdentifier) : ""
    };
  },
  fromPartial(object: Partial<Params>): Params {
    const message = createBaseParams();
    message.distrEpochIdentifier = object.distrEpochIdentifier ?? "";
    return message;
  }
};