import * as _m0 from "protobufjs/minimal";
import { isSet } from "../../helpers";
/**
 * Params defines the parameters for the module.
 * next id: 1
 */
export interface Params {
  /** optionally, turn off each module */
  stakeibcActive: boolean;
  claimActive: boolean;
}
/**
 * Params defines the parameters for the module.
 * next id: 1
 */
export interface ParamsSDKType {
  stakeibc_active: boolean;
  claim_active: boolean;
}
function createBaseParams(): Params {
  return {
    stakeibcActive: false,
    claimActive: false
  };
}
export const Params = {
  encode(message: Params, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.stakeibcActive === true) {
      writer.uint32(8).bool(message.stakeibcActive);
    }
    if (message.claimActive === true) {
      writer.uint32(16).bool(message.claimActive);
    }
    return writer;
  },
  fromJSON(object: any): Params {
    return {
      stakeibcActive: isSet(object.stakeibcActive) ? Boolean(object.stakeibcActive) : false,
      claimActive: isSet(object.claimActive) ? Boolean(object.claimActive) : false
    };
  },
  fromPartial(object: Partial<Params>): Params {
    const message = createBaseParams();
    message.stakeibcActive = object.stakeibcActive ?? false;
    message.claimActive = object.claimActive ?? false;
    return message;
  }
};