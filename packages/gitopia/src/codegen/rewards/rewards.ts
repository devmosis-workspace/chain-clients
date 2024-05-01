import { Series, seriesFromJSON } from "./pool";
import { Coin, CoinAmino, CoinSDKType } from "../cosmos/base/v1beta1/coin";
import { BinaryWriter } from "../binary";
import { isSet } from "../helpers";
/** a map from recipient to all her rewards */
export interface Reward {
  recipient: string;
  rewards: RecipientReward[];
}
export interface RewardProtoMsg {
  typeUrl: "/gitopia.gitopia.rewards.Reward";
  value: Uint8Array;
}
/** a map from recipient to all her rewards */
export interface RewardAmino {
  recipient?: string;
  rewards?: RecipientRewardAmino[];
}
export interface RewardAminoMsg {
  type: "/gitopia.gitopia.rewards.Reward";
  value: RewardAmino;
}
/** a map from recipient to all her rewards */
export interface RewardSDKType {
  recipient: string;
  rewards: RecipientRewardSDKType[];
}
export interface RecipientReward {
  series: Series;
  amount: Coin;
  creator: string;
  claimedAmount: Coin;
  claimedAmountWithDecay: Coin;
}
export interface RecipientRewardProtoMsg {
  typeUrl: "/gitopia.gitopia.rewards.RecipientReward";
  value: Uint8Array;
}
export interface RecipientRewardAmino {
  series?: Series;
  amount?: CoinAmino;
  creator?: string;
  claimed_amount?: CoinAmino;
  claimed_amount_with_decay?: CoinAmino;
}
export interface RecipientRewardAminoMsg {
  type: "/gitopia.gitopia.rewards.RecipientReward";
  value: RecipientRewardAmino;
}
export interface RecipientRewardSDKType {
  series: Series;
  amount: CoinSDKType;
  creator: string;
  claimed_amount: CoinSDKType;
  claimed_amount_with_decay: CoinSDKType;
}
function createBaseReward(): Reward {
  return {
    recipient: "",
    rewards: []
  };
}
export const Reward = {
  typeUrl: "/gitopia.gitopia.rewards.Reward",
  encode(message: Reward, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.recipient !== "") {
      writer.uint32(10).string(message.recipient);
    }
    for (const v of message.rewards) {
      RecipientReward.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): Reward {
    return {
      recipient: isSet(object.recipient) ? String(object.recipient) : "",
      rewards: Array.isArray(object?.rewards) ? object.rewards.map((e: any) => RecipientReward.fromJSON(e)) : []
    };
  },
  fromPartial(object: Partial<Reward>): Reward {
    const message = createBaseReward();
    message.recipient = object.recipient ?? "";
    message.rewards = object.rewards?.map(e => RecipientReward.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: RewardAmino): Reward {
    const message = createBaseReward();
    if (object.recipient !== undefined && object.recipient !== null) {
      message.recipient = object.recipient;
    }
    message.rewards = object.rewards?.map(e => RecipientReward.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: Reward): RewardAmino {
    const obj: any = {};
    obj.recipient = message.recipient === "" ? undefined : message.recipient;
    if (message.rewards) {
      obj.rewards = message.rewards.map(e => e ? RecipientReward.toAmino(e) : undefined);
    } else {
      obj.rewards = message.rewards;
    }
    return obj;
  },
  fromAminoMsg(object: RewardAminoMsg): Reward {
    return Reward.fromAmino(object.value);
  },
  fromProtoMsg(message: RewardProtoMsg): Reward {
    return Reward.decode(message.value);
  },
  toProto(message: Reward): Uint8Array {
    return Reward.encode(message).finish();
  },
  toProtoMsg(message: Reward): RewardProtoMsg {
    return {
      typeUrl: "/gitopia.gitopia.rewards.Reward",
      value: Reward.encode(message).finish()
    };
  }
};
function createBaseRecipientReward(): RecipientReward {
  return {
    series: 0,
    amount: Coin.fromPartial({}),
    creator: "",
    claimedAmount: Coin.fromPartial({}),
    claimedAmountWithDecay: Coin.fromPartial({})
  };
}
export const RecipientReward = {
  typeUrl: "/gitopia.gitopia.rewards.RecipientReward",
  encode(message: RecipientReward, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.series !== 0) {
      writer.uint32(8).int32(message.series);
    }
    if (message.amount !== undefined) {
      Coin.encode(message.amount, writer.uint32(18).fork()).ldelim();
    }
    if (message.creator !== "") {
      writer.uint32(26).string(message.creator);
    }
    if (message.claimedAmount !== undefined) {
      Coin.encode(message.claimedAmount, writer.uint32(34).fork()).ldelim();
    }
    if (message.claimedAmountWithDecay !== undefined) {
      Coin.encode(message.claimedAmountWithDecay, writer.uint32(42).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): RecipientReward {
    return {
      series: isSet(object.series) ? seriesFromJSON(object.series) : -1,
      amount: isSet(object.amount) ? Coin.fromJSON(object.amount) : undefined,
      creator: isSet(object.creator) ? String(object.creator) : "",
      claimedAmount: isSet(object.claimedAmount) ? Coin.fromJSON(object.claimedAmount) : undefined,
      claimedAmountWithDecay: isSet(object.claimedAmountWithDecay) ? Coin.fromJSON(object.claimedAmountWithDecay) : undefined
    };
  },
  fromPartial(object: Partial<RecipientReward>): RecipientReward {
    const message = createBaseRecipientReward();
    message.series = object.series ?? 0;
    message.amount = object.amount !== undefined && object.amount !== null ? Coin.fromPartial(object.amount) : undefined;
    message.creator = object.creator ?? "";
    message.claimedAmount = object.claimedAmount !== undefined && object.claimedAmount !== null ? Coin.fromPartial(object.claimedAmount) : undefined;
    message.claimedAmountWithDecay = object.claimedAmountWithDecay !== undefined && object.claimedAmountWithDecay !== null ? Coin.fromPartial(object.claimedAmountWithDecay) : undefined;
    return message;
  },
  fromAmino(object: RecipientRewardAmino): RecipientReward {
    const message = createBaseRecipientReward();
    if (object.series !== undefined && object.series !== null) {
      message.series = object.series;
    }
    if (object.amount !== undefined && object.amount !== null) {
      message.amount = Coin.fromAmino(object.amount);
    }
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    }
    if (object.claimed_amount !== undefined && object.claimed_amount !== null) {
      message.claimedAmount = Coin.fromAmino(object.claimed_amount);
    }
    if (object.claimed_amount_with_decay !== undefined && object.claimed_amount_with_decay !== null) {
      message.claimedAmountWithDecay = Coin.fromAmino(object.claimed_amount_with_decay);
    }
    return message;
  },
  toAmino(message: RecipientReward): RecipientRewardAmino {
    const obj: any = {};
    obj.series = message.series === 0 ? undefined : message.series;
    obj.amount = message.amount ? Coin.toAmino(message.amount) : undefined;
    obj.creator = message.creator === "" ? undefined : message.creator;
    obj.claimed_amount = message.claimedAmount ? Coin.toAmino(message.claimedAmount) : undefined;
    obj.claimed_amount_with_decay = message.claimedAmountWithDecay ? Coin.toAmino(message.claimedAmountWithDecay) : undefined;
    return obj;
  },
  fromAminoMsg(object: RecipientRewardAminoMsg): RecipientReward {
    return RecipientReward.fromAmino(object.value);
  },
  fromProtoMsg(message: RecipientRewardProtoMsg): RecipientReward {
    return RecipientReward.decode(message.value);
  },
  toProto(message: RecipientReward): Uint8Array {
    return RecipientReward.encode(message).finish();
  },
  toProtoMsg(message: RecipientReward): RecipientRewardProtoMsg {
    return {
      typeUrl: "/gitopia.gitopia.rewards.RecipientReward",
      value: RecipientReward.encode(message).finish()
    };
  }
};