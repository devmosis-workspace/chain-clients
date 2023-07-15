import * as _m0 from "protobufjs/minimal";
import { isSet } from "../../../helpers";
/**
 * Coin defines a token with a denomination and an amount.
 * 
 * NOTE: The amount field is an Int which implements the custom method
 * signatures required by gogoproto.
 */
export interface Coin {
  denom: string;
  amount: string;
}
/**
 * Coin defines a token with a denomination and an amount.
 * 
 * NOTE: The amount field is an Int which implements the custom method
 * signatures required by gogoproto.
 */
export interface CoinSDKType {
  denom: string;
  amount: string;
}
/**
 * DecCoin defines a token with a denomination and a decimal amount.
 * 
 * NOTE: The amount field is an Dec which implements the custom method
 * signatures required by gogoproto.
 */
export interface DecCoin {
  denom: string;
  amount: string;
}
/**
 * DecCoin defines a token with a denomination and a decimal amount.
 * 
 * NOTE: The amount field is an Dec which implements the custom method
 * signatures required by gogoproto.
 */
export interface DecCoinSDKType {
  denom: string;
  amount: string;
}
/** IntProto defines a Protobuf wrapper around an Int object. */
export interface IntProto {
  int: string;
}
/** IntProto defines a Protobuf wrapper around an Int object. */
export interface IntProtoSDKType {
  int: string;
}
/** DecProto defines a Protobuf wrapper around a Dec object. */
export interface DecProto {
  dec: string;
}
/** DecProto defines a Protobuf wrapper around a Dec object. */
export interface DecProtoSDKType {
  dec: string;
}
function createBaseCoin(): Coin {
  return {
    denom: "",
    amount: ""
  };
}
export const Coin = {
  encode(message: Coin, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.denom !== "") {
      writer.uint32(10).string(message.denom);
    }
    if (message.amount !== "") {
      writer.uint32(18).string(message.amount);
    }
    return writer;
  },
  fromJSON(object: any): Coin {
    return {
      denom: isSet(object.denom) ? String(object.denom) : "",
      amount: isSet(object.amount) ? String(object.amount) : ""
    };
  },
  fromPartial(object: Partial<Coin>): Coin {
    const message = createBaseCoin();
    message.denom = object.denom ?? "";
    message.amount = object.amount ?? "";
    return message;
  }
};
function createBaseDecCoin(): DecCoin {
  return {
    denom: "",
    amount: ""
  };
}
export const DecCoin = {
  encode(message: DecCoin, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.denom !== "") {
      writer.uint32(10).string(message.denom);
    }
    if (message.amount !== "") {
      writer.uint32(18).string(message.amount);
    }
    return writer;
  },
  fromJSON(object: any): DecCoin {
    return {
      denom: isSet(object.denom) ? String(object.denom) : "",
      amount: isSet(object.amount) ? String(object.amount) : ""
    };
  },
  fromPartial(object: Partial<DecCoin>): DecCoin {
    const message = createBaseDecCoin();
    message.denom = object.denom ?? "";
    message.amount = object.amount ?? "";
    return message;
  }
};
function createBaseIntProto(): IntProto {
  return {
    int: ""
  };
}
export const IntProto = {
  encode(message: IntProto, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.int !== "") {
      writer.uint32(10).string(message.int);
    }
    return writer;
  },
  fromJSON(object: any): IntProto {
    return {
      int: isSet(object.int) ? String(object.int) : ""
    };
  },
  fromPartial(object: Partial<IntProto>): IntProto {
    const message = createBaseIntProto();
    message.int = object.int ?? "";
    return message;
  }
};
function createBaseDecProto(): DecProto {
  return {
    dec: ""
  };
}
export const DecProto = {
  encode(message: DecProto, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.dec !== "") {
      writer.uint32(10).string(message.dec);
    }
    return writer;
  },
  fromJSON(object: any): DecProto {
    return {
      dec: isSet(object.dec) ? String(object.dec) : ""
    };
  },
  fromPartial(object: Partial<DecProto>): DecProto {
    const message = createBaseDecProto();
    message.dec = object.dec ?? "";
    return message;
  }
};