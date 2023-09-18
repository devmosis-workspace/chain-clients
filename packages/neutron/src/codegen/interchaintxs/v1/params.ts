import { BinaryWriter } from "../../binary";
import { isSet } from "../../helpers";
/** Params defines the parameters for the module. */
export interface Params {
  /** Defines maximum amount of messages to be passed in MsgSubmitTx */
  msgSubmitTxMaxMessages: bigint;
}
export interface ParamsProtoMsg {
  typeUrl: "/neutron.interchaintxs.Params";
  value: Uint8Array;
}
/** Params defines the parameters for the module. */
export interface ParamsAmino {
  /** Defines maximum amount of messages to be passed in MsgSubmitTx */
  msg_submit_tx_max_messages: string;
}
export interface ParamsAminoMsg {
  type: "/neutron.interchaintxs.Params";
  value: ParamsAmino;
}
/** Params defines the parameters for the module. */
export interface ParamsSDKType {
  msg_submit_tx_max_messages: bigint;
}
function createBaseParams(): Params {
  return {
    msgSubmitTxMaxMessages: BigInt(0)
  };
}
export const Params = {
  typeUrl: "/neutron.interchaintxs.Params",
  encode(message: Params, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.msgSubmitTxMaxMessages !== BigInt(0)) {
      writer.uint32(8).uint64(message.msgSubmitTxMaxMessages);
    }
    return writer;
  },
  fromJSON(object: any): Params {
    return {
      msgSubmitTxMaxMessages: isSet(object.msgSubmitTxMaxMessages) ? BigInt(object.msgSubmitTxMaxMessages.toString()) : BigInt(0)
    };
  },
  fromPartial(object: Partial<Params>): Params {
    const message = createBaseParams();
    message.msgSubmitTxMaxMessages = object.msgSubmitTxMaxMessages !== undefined && object.msgSubmitTxMaxMessages !== null ? BigInt(object.msgSubmitTxMaxMessages.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: ParamsAmino): Params {
    return {
      msgSubmitTxMaxMessages: BigInt(object.msg_submit_tx_max_messages)
    };
  },
  toAmino(message: Params): ParamsAmino {
    const obj: any = {};
    obj.msg_submit_tx_max_messages = message.msgSubmitTxMaxMessages ? message.msgSubmitTxMaxMessages.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: ParamsAminoMsg): Params {
    return Params.fromAmino(object.value);
  },
  fromProtoMsg(message: ParamsProtoMsg): Params {
    return Params.decode(message.value);
  },
  toProto(message: Params): Uint8Array {
    return Params.encode(message).finish();
  },
  toProtoMsg(message: Params): ParamsProtoMsg {
    return {
      typeUrl: "/neutron.interchaintxs.Params",
      value: Params.encode(message).finish()
    };
  }
};