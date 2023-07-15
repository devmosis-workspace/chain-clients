import * as _m0 from "protobufjs/minimal";
import { isSet } from "../../../helpers";
/** ExtensionOptionDynamicFeeTx is an extension option that specifies the maxPrioPrice for cosmos tx */
export interface ExtensionOptionDynamicFeeTx {
  /** max_priority_price is the same as `max_priority_fee_per_gas` in eip-1559 spec */
  maxPriorityPrice: string;
}
/** ExtensionOptionDynamicFeeTx is an extension option that specifies the maxPrioPrice for cosmos tx */
export interface ExtensionOptionDynamicFeeTxSDKType {
  max_priority_price: string;
}
function createBaseExtensionOptionDynamicFeeTx(): ExtensionOptionDynamicFeeTx {
  return {
    maxPriorityPrice: ""
  };
}
export const ExtensionOptionDynamicFeeTx = {
  encode(message: ExtensionOptionDynamicFeeTx, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.maxPriorityPrice !== "") {
      writer.uint32(10).string(message.maxPriorityPrice);
    }
    return writer;
  },
  fromJSON(object: any): ExtensionOptionDynamicFeeTx {
    return {
      maxPriorityPrice: isSet(object.maxPriorityPrice) ? String(object.maxPriorityPrice) : ""
    };
  },
  fromPartial(object: Partial<ExtensionOptionDynamicFeeTx>): ExtensionOptionDynamicFeeTx {
    const message = createBaseExtensionOptionDynamicFeeTx();
    message.maxPriorityPrice = object.maxPriorityPrice ?? "";
    return message;
  }
};