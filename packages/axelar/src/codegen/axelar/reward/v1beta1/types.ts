import { Coin, CoinAmino, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { BinaryWriter } from "../../../binary";
import { isSet, bytesFromBase64 } from "../../../helpers";
export interface Pool {
  name: string;
  rewards: Pool_Reward[];
}
export interface PoolProtoMsg {
  typeUrl: "/axelar.reward.v1beta1.Pool";
  value: Uint8Array;
}
export interface PoolAmino {
  name: string;
  rewards: Pool_RewardAmino[];
}
export interface PoolAminoMsg {
  type: "/axelar.reward.v1beta1.Pool";
  value: PoolAmino;
}
export interface PoolSDKType {
  name: string;
  rewards: Pool_RewardSDKType[];
}
export interface Pool_Reward {
  validator: Uint8Array;
  coins: Coin[];
}
export interface Pool_RewardProtoMsg {
  typeUrl: "/axelar.reward.v1beta1.Reward";
  value: Uint8Array;
}
export interface Pool_RewardAmino {
  validator: Uint8Array;
  coins: CoinAmino[];
}
export interface Pool_RewardAminoMsg {
  type: "/axelar.reward.v1beta1.Reward";
  value: Pool_RewardAmino;
}
export interface Pool_RewardSDKType {
  validator: Uint8Array;
  coins: CoinSDKType[];
}
export interface Refund {
  payer: Uint8Array;
  fees: Coin[];
}
export interface RefundProtoMsg {
  typeUrl: "/axelar.reward.v1beta1.Refund";
  value: Uint8Array;
}
export interface RefundAmino {
  payer: Uint8Array;
  fees: CoinAmino[];
}
export interface RefundAminoMsg {
  type: "/axelar.reward.v1beta1.Refund";
  value: RefundAmino;
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
  typeUrl: "/axelar.reward.v1beta1.Pool",
  encode(message: Pool, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
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
  },
  fromAmino(object: PoolAmino): Pool {
    return {
      name: object.name,
      rewards: Array.isArray(object?.rewards) ? object.rewards.map((e: any) => Pool_Reward.fromAmino(e)) : []
    };
  },
  toAmino(message: Pool): PoolAmino {
    const obj: any = {};
    obj.name = message.name;
    if (message.rewards) {
      obj.rewards = message.rewards.map(e => e ? Pool_Reward.toAmino(e) : undefined);
    } else {
      obj.rewards = [];
    }
    return obj;
  },
  fromAminoMsg(object: PoolAminoMsg): Pool {
    return Pool.fromAmino(object.value);
  },
  fromProtoMsg(message: PoolProtoMsg): Pool {
    return Pool.decode(message.value);
  },
  toProto(message: Pool): Uint8Array {
    return Pool.encode(message).finish();
  },
  toProtoMsg(message: Pool): PoolProtoMsg {
    return {
      typeUrl: "/axelar.reward.v1beta1.Pool",
      value: Pool.encode(message).finish()
    };
  }
};
function createBasePool_Reward(): Pool_Reward {
  return {
    validator: new Uint8Array(),
    coins: []
  };
}
export const Pool_Reward = {
  typeUrl: "/axelar.reward.v1beta1.Reward",
  encode(message: Pool_Reward, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
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
  },
  fromAmino(object: Pool_RewardAmino): Pool_Reward {
    return {
      validator: object.validator,
      coins: Array.isArray(object?.coins) ? object.coins.map((e: any) => Coin.fromAmino(e)) : []
    };
  },
  toAmino(message: Pool_Reward): Pool_RewardAmino {
    const obj: any = {};
    obj.validator = message.validator;
    if (message.coins) {
      obj.coins = message.coins.map(e => e ? Coin.toAmino(e) : undefined);
    } else {
      obj.coins = [];
    }
    return obj;
  },
  fromAminoMsg(object: Pool_RewardAminoMsg): Pool_Reward {
    return Pool_Reward.fromAmino(object.value);
  },
  fromProtoMsg(message: Pool_RewardProtoMsg): Pool_Reward {
    return Pool_Reward.decode(message.value);
  },
  toProto(message: Pool_Reward): Uint8Array {
    return Pool_Reward.encode(message).finish();
  },
  toProtoMsg(message: Pool_Reward): Pool_RewardProtoMsg {
    return {
      typeUrl: "/axelar.reward.v1beta1.Reward",
      value: Pool_Reward.encode(message).finish()
    };
  }
};
function createBaseRefund(): Refund {
  return {
    payer: new Uint8Array(),
    fees: []
  };
}
export const Refund = {
  typeUrl: "/axelar.reward.v1beta1.Refund",
  encode(message: Refund, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
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
  },
  fromAmino(object: RefundAmino): Refund {
    return {
      payer: object.payer,
      fees: Array.isArray(object?.fees) ? object.fees.map((e: any) => Coin.fromAmino(e)) : []
    };
  },
  toAmino(message: Refund): RefundAmino {
    const obj: any = {};
    obj.payer = message.payer;
    if (message.fees) {
      obj.fees = message.fees.map(e => e ? Coin.toAmino(e) : undefined);
    } else {
      obj.fees = [];
    }
    return obj;
  },
  fromAminoMsg(object: RefundAminoMsg): Refund {
    return Refund.fromAmino(object.value);
  },
  fromProtoMsg(message: RefundProtoMsg): Refund {
    return Refund.decode(message.value);
  },
  toProto(message: Refund): Uint8Array {
    return Refund.encode(message).finish();
  },
  toProtoMsg(message: Refund): RefundProtoMsg {
    return {
      typeUrl: "/axelar.reward.v1beta1.Refund",
      value: Refund.encode(message).finish()
    };
  }
};