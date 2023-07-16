import { Long, isSet } from "../../helpers";
import * as _m0 from "protobufjs/minimal";
/** Params defines the parameters for the module. */
export interface Params {
  /** Defines maximum amount of messages to be passed in MsgSubmitTx */
  msgSubmitTxMaxMessages: Long;
}
/** Params defines the parameters for the module. */
export interface ParamsSDKType {
  msg_submit_tx_max_messages: Long;
}
function createBaseParams(): Params {
  return {
    msgSubmitTxMaxMessages: Long.UZERO
  };
}
export const Params = {
  encode(message: Params, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.msgSubmitTxMaxMessages.isZero()) {
      writer.uint32(8).uint64(message.msgSubmitTxMaxMessages);
    }
    return writer;
  },
  fromJSON(object: any): Params {
    return {
      msgSubmitTxMaxMessages: isSet(object.msgSubmitTxMaxMessages) ? Long.fromValue(object.msgSubmitTxMaxMessages) : Long.UZERO
    };
  },
  fromPartial(object: Partial<Params>): Params {
    const message = createBaseParams();
    message.msgSubmitTxMaxMessages = object.msgSubmitTxMaxMessages !== undefined && object.msgSubmitTxMaxMessages !== null ? Long.fromValue(object.msgSubmitTxMaxMessages) : Long.UZERO;
    return message;
  }
};