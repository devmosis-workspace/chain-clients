import * as _m0 from "protobufjs/minimal";
import { bytesFromBase64, isSet } from "../../helpers";
export interface Txs {
  txs: Uint8Array[];
}
export interface TxsSDKType {
  txs: Uint8Array[];
}
export interface Message {
  txs?: Txs;
}
export interface MessageSDKType {
  txs?: TxsSDKType;
}
function createBaseTxs(): Txs {
  return {
    txs: []
  };
}
export const Txs = {
  encode(message: Txs, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.txs) {
      writer.uint32(10).bytes(v!);
    }
    return writer;
  },
  fromJSON(object: any): Txs {
    return {
      txs: Array.isArray(object?.txs) ? object.txs.map((e: any) => bytesFromBase64(e)) : []
    };
  },
  fromPartial(object: Partial<Txs>): Txs {
    const message = createBaseTxs();
    message.txs = object.txs?.map(e => e) || [];
    return message;
  }
};
function createBaseMessage(): Message {
  return {
    txs: undefined
  };
}
export const Message = {
  encode(message: Message, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.txs !== undefined) {
      Txs.encode(message.txs, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): Message {
    return {
      txs: isSet(object.txs) ? Txs.fromJSON(object.txs) : undefined
    };
  },
  fromPartial(object: Partial<Message>): Message {
    const message = createBaseMessage();
    message.txs = object.txs !== undefined && object.txs !== null ? Txs.fromPartial(object.txs) : undefined;
    return message;
  }
};