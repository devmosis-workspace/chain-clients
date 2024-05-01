import { Any, AnyAmino, AnySDKType } from "../../../google/protobuf/any";
import { BinaryWriter } from "../../../binary";
import { isSet } from "../../../helpers";
import { Decimal } from "@cosmjs/math";
/** ICS20Memo payload for IBC transfer memo field. */
export interface ICS20Memo {
  /** messages is a list of `sdk.Msg`s that will be executed when handling ICS20 transfer. */
  messages: Any[];
  /**
   * fallback_addr [optional] is a bech23 account address used to overwrite the original ICS20
   * recipient when:
   * 1. it is defined
   * 2. and memo is can be properly deserialized into this structure
   * 3. and `messages` processes failed.
   * When memo can't be properly deserialized, then the ICS20 processing will continue to other
   * middlewares.
   */
  fallbackAddr: string;
}
export interface ICS20MemoProtoMsg {
  typeUrl: "/umee.uibc.v1.ICS20Memo";
  value: Uint8Array;
}
/** ICS20Memo payload for IBC transfer memo field. */
export interface ICS20MemoAmino {
  /** messages is a list of `sdk.Msg`s that will be executed when handling ICS20 transfer. */
  messages?: AnyAmino[];
  /**
   * fallback_addr [optional] is a bech23 account address used to overwrite the original ICS20
   * recipient when:
   * 1. it is defined
   * 2. and memo is can be properly deserialized into this structure
   * 3. and `messages` processes failed.
   * When memo can't be properly deserialized, then the ICS20 processing will continue to other
   * middlewares.
   */
  fallback_addr?: string;
}
export interface ICS20MemoAminoMsg {
  type: "/umee.uibc.v1.ICS20Memo";
  value: ICS20MemoAmino;
}
/** ICS20Memo payload for IBC transfer memo field. */
export interface ICS20MemoSDKType {
  messages: AnySDKType[];
  fallback_addr: string;
}
/** DecCoinSymbol extends the Cosmos SDK DecCoin type and adds symbol name. */
export interface DecCoinSymbol {
  denom: string;
  amount: string;
  /** token symbol name */
  symbol: string;
}
export interface DecCoinSymbolProtoMsg {
  typeUrl: "/umee.uibc.v1.DecCoinSymbol";
  value: Uint8Array;
}
/** DecCoinSymbol extends the Cosmos SDK DecCoin type and adds symbol name. */
export interface DecCoinSymbolAmino {
  denom?: string;
  amount?: string;
  /** token symbol name */
  symbol?: string;
}
export interface DecCoinSymbolAminoMsg {
  type: "/umee.uibc.v1.DecCoinSymbol";
  value: DecCoinSymbolAmino;
}
/** DecCoinSymbol extends the Cosmos SDK DecCoin type and adds symbol name. */
export interface DecCoinSymbolSDKType {
  denom: string;
  amount: string;
  symbol: string;
}
function createBaseICS20Memo(): ICS20Memo {
  return {
    messages: [],
    fallbackAddr: ""
  };
}
export const ICS20Memo = {
  typeUrl: "/umee.uibc.v1.ICS20Memo",
  encode(message: ICS20Memo, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.messages) {
      Any.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.fallbackAddr !== "") {
      writer.uint32(18).string(message.fallbackAddr);
    }
    return writer;
  },
  fromJSON(object: any): ICS20Memo {
    return {
      messages: Array.isArray(object?.messages) ? object.messages.map((e: any) => Any.fromJSON(e)) : [],
      fallbackAddr: isSet(object.fallbackAddr) ? String(object.fallbackAddr) : ""
    };
  },
  fromPartial(object: Partial<ICS20Memo>): ICS20Memo {
    const message = createBaseICS20Memo();
    message.messages = object.messages?.map(e => Any.fromPartial(e)) || [];
    message.fallbackAddr = object.fallbackAddr ?? "";
    return message;
  },
  fromAmino(object: ICS20MemoAmino): ICS20Memo {
    const message = createBaseICS20Memo();
    message.messages = object.messages?.map(e => Any.fromAmino(e)) || [];
    if (object.fallback_addr !== undefined && object.fallback_addr !== null) {
      message.fallbackAddr = object.fallback_addr;
    }
    return message;
  },
  toAmino(message: ICS20Memo): ICS20MemoAmino {
    const obj: any = {};
    if (message.messages) {
      obj.messages = message.messages.map(e => e ? Any.toAmino(e) : undefined);
    } else {
      obj.messages = message.messages;
    }
    obj.fallback_addr = message.fallbackAddr === "" ? undefined : message.fallbackAddr;
    return obj;
  },
  fromAminoMsg(object: ICS20MemoAminoMsg): ICS20Memo {
    return ICS20Memo.fromAmino(object.value);
  },
  fromProtoMsg(message: ICS20MemoProtoMsg): ICS20Memo {
    return ICS20Memo.decode(message.value);
  },
  toProto(message: ICS20Memo): Uint8Array {
    return ICS20Memo.encode(message).finish();
  },
  toProtoMsg(message: ICS20Memo): ICS20MemoProtoMsg {
    return {
      typeUrl: "/umee.uibc.v1.ICS20Memo",
      value: ICS20Memo.encode(message).finish()
    };
  }
};
function createBaseDecCoinSymbol(): DecCoinSymbol {
  return {
    denom: "",
    amount: "",
    symbol: ""
  };
}
export const DecCoinSymbol = {
  typeUrl: "/umee.uibc.v1.DecCoinSymbol",
  encode(message: DecCoinSymbol, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.denom !== "") {
      writer.uint32(10).string(message.denom);
    }
    if (message.amount !== "") {
      writer.uint32(18).string(Decimal.fromUserInput(message.amount, 18).atomics);
    }
    if (message.symbol !== "") {
      writer.uint32(26).string(message.symbol);
    }
    return writer;
  },
  fromJSON(object: any): DecCoinSymbol {
    return {
      denom: isSet(object.denom) ? String(object.denom) : "",
      amount: isSet(object.amount) ? String(object.amount) : "",
      symbol: isSet(object.symbol) ? String(object.symbol) : ""
    };
  },
  fromPartial(object: Partial<DecCoinSymbol>): DecCoinSymbol {
    const message = createBaseDecCoinSymbol();
    message.denom = object.denom ?? "";
    message.amount = object.amount ?? "";
    message.symbol = object.symbol ?? "";
    return message;
  },
  fromAmino(object: DecCoinSymbolAmino): DecCoinSymbol {
    const message = createBaseDecCoinSymbol();
    if (object.denom !== undefined && object.denom !== null) {
      message.denom = object.denom;
    }
    if (object.amount !== undefined && object.amount !== null) {
      message.amount = object.amount;
    }
    if (object.symbol !== undefined && object.symbol !== null) {
      message.symbol = object.symbol;
    }
    return message;
  },
  toAmino(message: DecCoinSymbol): DecCoinSymbolAmino {
    const obj: any = {};
    obj.denom = message.denom === "" ? undefined : message.denom;
    obj.amount = message.amount === "" ? undefined : message.amount;
    obj.symbol = message.symbol === "" ? undefined : message.symbol;
    return obj;
  },
  fromAminoMsg(object: DecCoinSymbolAminoMsg): DecCoinSymbol {
    return DecCoinSymbol.fromAmino(object.value);
  },
  fromProtoMsg(message: DecCoinSymbolProtoMsg): DecCoinSymbol {
    return DecCoinSymbol.decode(message.value);
  },
  toProto(message: DecCoinSymbol): Uint8Array {
    return DecCoinSymbol.encode(message).finish();
  },
  toProtoMsg(message: DecCoinSymbol): DecCoinSymbolProtoMsg {
    return {
      typeUrl: "/umee.uibc.v1.DecCoinSymbol",
      value: DecCoinSymbol.encode(message).finish()
    };
  }
};