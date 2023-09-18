import { BinaryWriter } from "../../../binary";
import { isSet } from "../../../helpers";
/** ExtensionOptionDynamicFeeTx is an extension option that specifies the maxPrioPrice for cosmos tx */
export interface ExtensionOptionDynamicFeeTx {
  /** max_priority_price is the same as `max_priority_fee_per_gas` in eip-1559 spec */
  maxPriorityPrice: string;
}
export interface ExtensionOptionDynamicFeeTxProtoMsg {
  typeUrl: "/ethermint.types.v1.ExtensionOptionDynamicFeeTx";
  value: Uint8Array;
}
/** ExtensionOptionDynamicFeeTx is an extension option that specifies the maxPrioPrice for cosmos tx */
export interface ExtensionOptionDynamicFeeTxAmino {
  /** max_priority_price is the same as `max_priority_fee_per_gas` in eip-1559 spec */
  max_priority_price: string;
}
export interface ExtensionOptionDynamicFeeTxAminoMsg {
  type: "/ethermint.types.v1.ExtensionOptionDynamicFeeTx";
  value: ExtensionOptionDynamicFeeTxAmino;
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
  typeUrl: "/ethermint.types.v1.ExtensionOptionDynamicFeeTx",
  encode(message: ExtensionOptionDynamicFeeTx, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
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
  },
  fromAmino(object: ExtensionOptionDynamicFeeTxAmino): ExtensionOptionDynamicFeeTx {
    return {
      maxPriorityPrice: object.max_priority_price
    };
  },
  toAmino(message: ExtensionOptionDynamicFeeTx): ExtensionOptionDynamicFeeTxAmino {
    const obj: any = {};
    obj.max_priority_price = message.maxPriorityPrice;
    return obj;
  },
  fromAminoMsg(object: ExtensionOptionDynamicFeeTxAminoMsg): ExtensionOptionDynamicFeeTx {
    return ExtensionOptionDynamicFeeTx.fromAmino(object.value);
  },
  fromProtoMsg(message: ExtensionOptionDynamicFeeTxProtoMsg): ExtensionOptionDynamicFeeTx {
    return ExtensionOptionDynamicFeeTx.decode(message.value);
  },
  toProto(message: ExtensionOptionDynamicFeeTx): Uint8Array {
    return ExtensionOptionDynamicFeeTx.encode(message).finish();
  },
  toProtoMsg(message: ExtensionOptionDynamicFeeTx): ExtensionOptionDynamicFeeTxProtoMsg {
    return {
      typeUrl: "/ethermint.types.v1.ExtensionOptionDynamicFeeTx",
      value: ExtensionOptionDynamicFeeTx.encode(message).finish()
    };
  }
};