import { Coin, CoinAmino, CoinSDKType } from "../cosmos/base/v1beta1/coin";
import { Timestamp, TimestampSDKType } from "../google/protobuf/timestamp";
import { BinaryWriter } from "../binary";
import { isSet, fromJsonTimestamp } from "../helpers";
export enum Series {
  NONE = 0,
  ONE = 1,
  TWO = 2,
  THREE = 3,
  FOUR = 4,
  FIVE = 5,
  SIX = 6,
  SEVEN = 7,
  COSMOS = 8,
  UNRECOGNIZED = -1,
}
export const SeriesSDKType = Series;
export const SeriesAmino = Series;
export function seriesFromJSON(object: any): Series {
  switch (object) {
    case 0:
    case "NONE":
      return Series.NONE;
    case 1:
    case "ONE":
      return Series.ONE;
    case 2:
    case "TWO":
      return Series.TWO;
    case 3:
    case "THREE":
      return Series.THREE;
    case 4:
    case "FOUR":
      return Series.FOUR;
    case 5:
    case "FIVE":
      return Series.FIVE;
    case 6:
    case "SIX":
      return Series.SIX;
    case 7:
    case "SEVEN":
      return Series.SEVEN;
    case 8:
    case "COSMOS":
      return Series.COSMOS;
    case -1:
    case "UNRECOGNIZED":
    default:
      return Series.UNRECOGNIZED;
  }
}
export function seriesToJSON(object: Series): string {
  switch (object) {
    case Series.NONE:
      return "NONE";
    case Series.ONE:
      return "ONE";
    case Series.TWO:
      return "TWO";
    case Series.THREE:
      return "THREE";
    case Series.FOUR:
      return "FOUR";
    case Series.FIVE:
      return "FIVE";
    case Series.SIX:
      return "SIX";
    case Series.SEVEN:
      return "SEVEN";
    case Series.COSMOS:
      return "COSMOS";
    case Series.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}
export interface RewardPool {
  totalAmount: Coin;
  claimedAmount: Coin;
  startTime: Timestamp;
  endTime: Timestamp;
  series: Series;
}
export interface RewardPoolProtoMsg {
  typeUrl: "/gitopia.gitopia.rewards.RewardPool";
  value: Uint8Array;
}
export interface RewardPoolAmino {
  total_amount?: CoinAmino;
  claimed_amount?: CoinAmino;
  start_time?: string;
  end_time?: string;
  series?: Series;
}
export interface RewardPoolAminoMsg {
  type: "/gitopia.gitopia.rewards.RewardPool";
  value: RewardPoolAmino;
}
export interface RewardPoolSDKType {
  total_amount: CoinSDKType;
  claimed_amount: CoinSDKType;
  start_time: TimestampSDKType;
  end_time: TimestampSDKType;
  series: Series;
}
function createBaseRewardPool(): RewardPool {
  return {
    totalAmount: Coin.fromPartial({}),
    claimedAmount: Coin.fromPartial({}),
    startTime: Timestamp.fromPartial({}),
    endTime: Timestamp.fromPartial({}),
    series: 0
  };
}
export const RewardPool = {
  typeUrl: "/gitopia.gitopia.rewards.RewardPool",
  encode(message: RewardPool, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.totalAmount !== undefined) {
      Coin.encode(message.totalAmount, writer.uint32(10).fork()).ldelim();
    }
    if (message.claimedAmount !== undefined) {
      Coin.encode(message.claimedAmount, writer.uint32(18).fork()).ldelim();
    }
    if (message.startTime !== undefined) {
      Timestamp.encode(message.startTime, writer.uint32(26).fork()).ldelim();
    }
    if (message.endTime !== undefined) {
      Timestamp.encode(message.endTime, writer.uint32(34).fork()).ldelim();
    }
    if (message.series !== 0) {
      writer.uint32(40).int32(message.series);
    }
    return writer;
  },
  fromJSON(object: any): RewardPool {
    return {
      totalAmount: isSet(object.totalAmount) ? Coin.fromJSON(object.totalAmount) : undefined,
      claimedAmount: isSet(object.claimedAmount) ? Coin.fromJSON(object.claimedAmount) : undefined,
      startTime: isSet(object.startTime) ? fromJsonTimestamp(object.startTime) : undefined,
      endTime: isSet(object.endTime) ? fromJsonTimestamp(object.endTime) : undefined,
      series: isSet(object.series) ? seriesFromJSON(object.series) : -1
    };
  },
  fromPartial(object: Partial<RewardPool>): RewardPool {
    const message = createBaseRewardPool();
    message.totalAmount = object.totalAmount !== undefined && object.totalAmount !== null ? Coin.fromPartial(object.totalAmount) : undefined;
    message.claimedAmount = object.claimedAmount !== undefined && object.claimedAmount !== null ? Coin.fromPartial(object.claimedAmount) : undefined;
    message.startTime = object.startTime !== undefined && object.startTime !== null ? Timestamp.fromPartial(object.startTime) : undefined;
    message.endTime = object.endTime !== undefined && object.endTime !== null ? Timestamp.fromPartial(object.endTime) : undefined;
    message.series = object.series ?? 0;
    return message;
  },
  fromAmino(object: RewardPoolAmino): RewardPool {
    const message = createBaseRewardPool();
    if (object.total_amount !== undefined && object.total_amount !== null) {
      message.totalAmount = Coin.fromAmino(object.total_amount);
    }
    if (object.claimed_amount !== undefined && object.claimed_amount !== null) {
      message.claimedAmount = Coin.fromAmino(object.claimed_amount);
    }
    if (object.start_time !== undefined && object.start_time !== null) {
      message.startTime = Timestamp.fromAmino(object.start_time);
    }
    if (object.end_time !== undefined && object.end_time !== null) {
      message.endTime = Timestamp.fromAmino(object.end_time);
    }
    if (object.series !== undefined && object.series !== null) {
      message.series = object.series;
    }
    return message;
  },
  toAmino(message: RewardPool): RewardPoolAmino {
    const obj: any = {};
    obj.total_amount = message.totalAmount ? Coin.toAmino(message.totalAmount) : undefined;
    obj.claimed_amount = message.claimedAmount ? Coin.toAmino(message.claimedAmount) : undefined;
    obj.start_time = message.startTime ? Timestamp.toAmino(message.startTime) : undefined;
    obj.end_time = message.endTime ? Timestamp.toAmino(message.endTime) : undefined;
    obj.series = message.series === 0 ? undefined : message.series;
    return obj;
  },
  fromAminoMsg(object: RewardPoolAminoMsg): RewardPool {
    return RewardPool.fromAmino(object.value);
  },
  fromProtoMsg(message: RewardPoolProtoMsg): RewardPool {
    return RewardPool.decode(message.value);
  },
  toProto(message: RewardPool): Uint8Array {
    return RewardPool.encode(message).finish();
  },
  toProtoMsg(message: RewardPool): RewardPoolProtoMsg {
    return {
      typeUrl: "/gitopia.gitopia.rewards.RewardPool",
      value: RewardPool.encode(message).finish()
    };
  }
};