import { Coin, CoinAmino, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { BinaryWriter } from "../../../binary";
import { isSet, bytesFromBase64, base64FromBytes } from "../../../helpers";
export interface Swap {
  txHash: Uint8Array;
  receiver: string;
  amount: Coin;
}
export interface SwapProtoMsg {
  typeUrl: "/sentinel.swap.v1.Swap";
  value: Uint8Array;
}
export interface SwapAmino {
  tx_hash?: string;
  receiver?: string;
  amount?: CoinAmino;
}
export interface SwapAminoMsg {
  type: "/sentinel.swap.v1.Swap";
  value: SwapAmino;
}
export interface SwapSDKType {
  tx_hash: Uint8Array;
  receiver: string;
  amount: CoinSDKType;
}
function createBaseSwap(): Swap {
  return {
    txHash: new Uint8Array(),
    receiver: "",
    amount: Coin.fromPartial({})
  };
}
export const Swap = {
  typeUrl: "/sentinel.swap.v1.Swap",
  encode(message: Swap, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.txHash.length !== 0) {
      writer.uint32(10).bytes(message.txHash);
    }
    if (message.receiver !== "") {
      writer.uint32(18).string(message.receiver);
    }
    if (message.amount !== undefined) {
      Coin.encode(message.amount, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): Swap {
    return {
      txHash: isSet(object.txHash) ? bytesFromBase64(object.txHash) : new Uint8Array(),
      receiver: isSet(object.receiver) ? String(object.receiver) : "",
      amount: isSet(object.amount) ? Coin.fromJSON(object.amount) : undefined
    };
  },
  fromPartial(object: Partial<Swap>): Swap {
    const message = createBaseSwap();
    message.txHash = object.txHash ?? new Uint8Array();
    message.receiver = object.receiver ?? "";
    message.amount = object.amount !== undefined && object.amount !== null ? Coin.fromPartial(object.amount) : undefined;
    return message;
  },
  fromAmino(object: SwapAmino): Swap {
    const message = createBaseSwap();
    if (object.tx_hash !== undefined && object.tx_hash !== null) {
      message.txHash = bytesFromBase64(object.tx_hash);
    }
    if (object.receiver !== undefined && object.receiver !== null) {
      message.receiver = object.receiver;
    }
    if (object.amount !== undefined && object.amount !== null) {
      message.amount = Coin.fromAmino(object.amount);
    }
    return message;
  },
  toAmino(message: Swap): SwapAmino {
    const obj: any = {};
    obj.tx_hash = message.txHash ? base64FromBytes(message.txHash) : undefined;
    obj.receiver = message.receiver === "" ? undefined : message.receiver;
    obj.amount = message.amount ? Coin.toAmino(message.amount) : undefined;
    return obj;
  },
  fromAminoMsg(object: SwapAminoMsg): Swap {
    return Swap.fromAmino(object.value);
  },
  fromProtoMsg(message: SwapProtoMsg): Swap {
    return Swap.decode(message.value);
  },
  toProto(message: Swap): Uint8Array {
    return Swap.encode(message).finish();
  },
  toProtoMsg(message: Swap): SwapProtoMsg {
    return {
      typeUrl: "/sentinel.swap.v1.Swap",
      value: Swap.encode(message).finish()
    };
  }
};