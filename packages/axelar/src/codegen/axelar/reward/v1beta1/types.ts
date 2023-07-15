import { Coin, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import * as _m0 from "protobufjs/minimal";
import { isSet, bytesFromBase64 } from "../../../helpers";
export interface Pool {
  name: string;
  rewards: Pool_Reward[];
}
export interface PoolSDKType {
  name: string;
  rewards: Pool_RewardSDKType[];
}
export interface Pool_Reward {
  validator: Uint8Array;
  coins: Coin[];
}
export interface Pool_RewardSDKType {
  validator: Uint8Array;
  coins: CoinSDKType[];
}
export interface Refund {
  payer: Uint8Array;
  fees: Coin[];
}
export interface RefundSDKType {
  payer: Uint8Array;
  fees: CoinSDKType[];
}
function createBasePool(): Pool {
  return {
    name: "",
    rewards: []
  };
}
export const Pool = {
  encode(message: Pool, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    for (const v of message.rewards) {
      Pool_Reward.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): Pool {
    return {
      name: isSet(object.name) ? String(object.name) : "",
      rewards: Array.isArray(object?.rewards) ? object.rewards.map((e: any) => Pool_Reward.fromJSON(e)) : []
    };
  },
  fromPartial(object: Partial<Pool>): Pool {
    const message = createBasePool();
    message.name = object.name ?? "";
    message.rewards = object.rewards?.map(e => Pool_Reward.fromPartial(e)) || [];
    return message;
  }
};
function createBasePool_Reward(): Pool_Reward {
  return {
    validator: new Uint8Array(),
    coins: []
  };
}
export const Pool_Reward = {
  encode(message: Pool_Reward, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.validator.length !== 0) {
      writer.uint32(10).bytes(message.validator);
    }
    for (const v of message.coins) {
      Coin.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): Pool_Reward {
    return {
      validator: isSet(object.validator) ? bytesFromBase64(object.validator) : new Uint8Array(),
      coins: Array.isArray(object?.coins) ? object.coins.map((e: any) => Coin.fromJSON(e)) : []
    };
  },
  fromPartial(object: Partial<Pool_Reward>): Pool_Reward {
    const message = createBasePool_Reward();
    message.validator = object.validator ?? new Uint8Array();
    message.coins = object.coins?.map(e => Coin.fromPartial(e)) || [];
    return message;
  }
};
function createBaseRefund(): Refund {
  return {
    payer: new Uint8Array(),
    fees: []
  };
}
export const Refund = {
  encode(message: Refund, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.payer.length !== 0) {
      writer.uint32(10).bytes(message.payer);
    }
    for (const v of message.fees) {
      Coin.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): Refund {
    return {
      payer: isSet(object.payer) ? bytesFromBase64(object.payer) : new Uint8Array(),
      fees: Array.isArray(object?.fees) ? object.fees.map((e: any) => Coin.fromJSON(e)) : []
    };
  },
  fromPartial(object: Partial<Refund>): Refund {
    const message = createBaseRefund();
    message.payer = object.payer ?? new Uint8Array();
    message.fees = object.fees?.map(e => Coin.fromPartial(e)) || [];
    return message;
  }
};