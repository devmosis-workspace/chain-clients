import { Coin, CoinAmino, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { Duration, DurationAmino, DurationSDKType } from "../../../google/protobuf/duration";
import { BinaryWriter } from "../../../binary";
import { Decimal } from "@cosmjs/math";
import { isSet } from "../../../helpers";
export interface Params {
  deposit: Coin;
  activeDuration: Duration;
  maxGigabytePrices: Coin[];
  minGigabytePrices: Coin[];
  maxHourlyPrices: Coin[];
  minHourlyPrices: Coin[];
  maxSubscriptionGigabytes: bigint;
  minSubscriptionGigabytes: bigint;
  maxSubscriptionHours: bigint;
  minSubscriptionHours: bigint;
  stakingShare: string;
}
export interface ParamsProtoMsg {
  typeUrl: "/sentinel.node.v2.Params";
  value: Uint8Array;
}
export interface ParamsAmino {
  deposit?: CoinAmino;
  active_duration?: DurationAmino;
  max_gigabyte_prices?: CoinAmino[];
  min_gigabyte_prices?: CoinAmino[];
  max_hourly_prices?: CoinAmino[];
  min_hourly_prices?: CoinAmino[];
  max_subscription_gigabytes?: string;
  min_subscription_gigabytes?: string;
  max_subscription_hours?: string;
  min_subscription_hours?: string;
  staking_share?: string;
}
export interface ParamsAminoMsg {
  type: "/sentinel.node.v2.Params";
  value: ParamsAmino;
}
export interface ParamsSDKType {
  deposit: CoinSDKType;
  active_duration: DurationSDKType;
  max_gigabyte_prices: CoinSDKType[];
  min_gigabyte_prices: CoinSDKType[];
  max_hourly_prices: CoinSDKType[];
  min_hourly_prices: CoinSDKType[];
  max_subscription_gigabytes: bigint;
  min_subscription_gigabytes: bigint;
  max_subscription_hours: bigint;
  min_subscription_hours: bigint;
  staking_share: string;
}
function createBaseParams(): Params {
  return {
    deposit: Coin.fromPartial({}),
    activeDuration: Duration.fromPartial({}),
    maxGigabytePrices: [],
    minGigabytePrices: [],
    maxHourlyPrices: [],
    minHourlyPrices: [],
    maxSubscriptionGigabytes: BigInt(0),
    minSubscriptionGigabytes: BigInt(0),
    maxSubscriptionHours: BigInt(0),
    minSubscriptionHours: BigInt(0),
    stakingShare: ""
  };
}
export const Params = {
  typeUrl: "/sentinel.node.v2.Params",
  encode(message: Params, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.deposit !== undefined) {
      Coin.encode(message.deposit, writer.uint32(10).fork()).ldelim();
    }
    if (message.activeDuration !== undefined) {
      Duration.encode(message.activeDuration, writer.uint32(18).fork()).ldelim();
    }
    for (const v of message.maxGigabytePrices) {
      Coin.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    for (const v of message.minGigabytePrices) {
      Coin.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    for (const v of message.maxHourlyPrices) {
      Coin.encode(v!, writer.uint32(42).fork()).ldelim();
    }
    for (const v of message.minHourlyPrices) {
      Coin.encode(v!, writer.uint32(50).fork()).ldelim();
    }
    if (message.maxSubscriptionGigabytes !== BigInt(0)) {
      writer.uint32(56).int64(message.maxSubscriptionGigabytes);
    }
    if (message.minSubscriptionGigabytes !== BigInt(0)) {
      writer.uint32(64).int64(message.minSubscriptionGigabytes);
    }
    if (message.maxSubscriptionHours !== BigInt(0)) {
      writer.uint32(72).int64(message.maxSubscriptionHours);
    }
    if (message.minSubscriptionHours !== BigInt(0)) {
      writer.uint32(80).int64(message.minSubscriptionHours);
    }
    if (message.stakingShare !== "") {
      writer.uint32(90).string(Decimal.fromUserInput(message.stakingShare, 18).atomics);
    }
    return writer;
  },
  fromJSON(object: any): Params {
    return {
      deposit: isSet(object.deposit) ? Coin.fromJSON(object.deposit) : undefined,
      activeDuration: isSet(object.activeDuration) ? Duration.fromJSON(object.activeDuration) : undefined,
      maxGigabytePrices: Array.isArray(object?.maxGigabytePrices) ? object.maxGigabytePrices.map((e: any) => Coin.fromJSON(e)) : [],
      minGigabytePrices: Array.isArray(object?.minGigabytePrices) ? object.minGigabytePrices.map((e: any) => Coin.fromJSON(e)) : [],
      maxHourlyPrices: Array.isArray(object?.maxHourlyPrices) ? object.maxHourlyPrices.map((e: any) => Coin.fromJSON(e)) : [],
      minHourlyPrices: Array.isArray(object?.minHourlyPrices) ? object.minHourlyPrices.map((e: any) => Coin.fromJSON(e)) : [],
      maxSubscriptionGigabytes: isSet(object.maxSubscriptionGigabytes) ? BigInt(object.maxSubscriptionGigabytes.toString()) : BigInt(0),
      minSubscriptionGigabytes: isSet(object.minSubscriptionGigabytes) ? BigInt(object.minSubscriptionGigabytes.toString()) : BigInt(0),
      maxSubscriptionHours: isSet(object.maxSubscriptionHours) ? BigInt(object.maxSubscriptionHours.toString()) : BigInt(0),
      minSubscriptionHours: isSet(object.minSubscriptionHours) ? BigInt(object.minSubscriptionHours.toString()) : BigInt(0),
      stakingShare: isSet(object.stakingShare) ? String(object.stakingShare) : ""
    };
  },
  fromPartial(object: Partial<Params>): Params {
    const message = createBaseParams();
    message.deposit = object.deposit !== undefined && object.deposit !== null ? Coin.fromPartial(object.deposit) : undefined;
    message.activeDuration = object.activeDuration !== undefined && object.activeDuration !== null ? Duration.fromPartial(object.activeDuration) : undefined;
    message.maxGigabytePrices = object.maxGigabytePrices?.map(e => Coin.fromPartial(e)) || [];
    message.minGigabytePrices = object.minGigabytePrices?.map(e => Coin.fromPartial(e)) || [];
    message.maxHourlyPrices = object.maxHourlyPrices?.map(e => Coin.fromPartial(e)) || [];
    message.minHourlyPrices = object.minHourlyPrices?.map(e => Coin.fromPartial(e)) || [];
    message.maxSubscriptionGigabytes = object.maxSubscriptionGigabytes !== undefined && object.maxSubscriptionGigabytes !== null ? BigInt(object.maxSubscriptionGigabytes.toString()) : BigInt(0);
    message.minSubscriptionGigabytes = object.minSubscriptionGigabytes !== undefined && object.minSubscriptionGigabytes !== null ? BigInt(object.minSubscriptionGigabytes.toString()) : BigInt(0);
    message.maxSubscriptionHours = object.maxSubscriptionHours !== undefined && object.maxSubscriptionHours !== null ? BigInt(object.maxSubscriptionHours.toString()) : BigInt(0);
    message.minSubscriptionHours = object.minSubscriptionHours !== undefined && object.minSubscriptionHours !== null ? BigInt(object.minSubscriptionHours.toString()) : BigInt(0);
    message.stakingShare = object.stakingShare ?? "";
    return message;
  },
  fromAmino(object: ParamsAmino): Params {
    const message = createBaseParams();
    if (object.deposit !== undefined && object.deposit !== null) {
      message.deposit = Coin.fromAmino(object.deposit);
    }
    if (object.active_duration !== undefined && object.active_duration !== null) {
      message.activeDuration = Duration.fromAmino(object.active_duration);
    }
    message.maxGigabytePrices = object.max_gigabyte_prices?.map(e => Coin.fromAmino(e)) || [];
    message.minGigabytePrices = object.min_gigabyte_prices?.map(e => Coin.fromAmino(e)) || [];
    message.maxHourlyPrices = object.max_hourly_prices?.map(e => Coin.fromAmino(e)) || [];
    message.minHourlyPrices = object.min_hourly_prices?.map(e => Coin.fromAmino(e)) || [];
    if (object.max_subscription_gigabytes !== undefined && object.max_subscription_gigabytes !== null) {
      message.maxSubscriptionGigabytes = BigInt(object.max_subscription_gigabytes);
    }
    if (object.min_subscription_gigabytes !== undefined && object.min_subscription_gigabytes !== null) {
      message.minSubscriptionGigabytes = BigInt(object.min_subscription_gigabytes);
    }
    if (object.max_subscription_hours !== undefined && object.max_subscription_hours !== null) {
      message.maxSubscriptionHours = BigInt(object.max_subscription_hours);
    }
    if (object.min_subscription_hours !== undefined && object.min_subscription_hours !== null) {
      message.minSubscriptionHours = BigInt(object.min_subscription_hours);
    }
    if (object.staking_share !== undefined && object.staking_share !== null) {
      message.stakingShare = object.staking_share;
    }
    return message;
  },
  toAmino(message: Params): ParamsAmino {
    const obj: any = {};
    obj.deposit = message.deposit ? Coin.toAmino(message.deposit) : undefined;
    obj.active_duration = message.activeDuration ? Duration.toAmino(message.activeDuration) : undefined;
    if (message.maxGigabytePrices) {
      obj.max_gigabyte_prices = message.maxGigabytePrices.map(e => e ? Coin.toAmino(e) : undefined);
    } else {
      obj.max_gigabyte_prices = message.maxGigabytePrices;
    }
    if (message.minGigabytePrices) {
      obj.min_gigabyte_prices = message.minGigabytePrices.map(e => e ? Coin.toAmino(e) : undefined);
    } else {
      obj.min_gigabyte_prices = message.minGigabytePrices;
    }
    if (message.maxHourlyPrices) {
      obj.max_hourly_prices = message.maxHourlyPrices.map(e => e ? Coin.toAmino(e) : undefined);
    } else {
      obj.max_hourly_prices = message.maxHourlyPrices;
    }
    if (message.minHourlyPrices) {
      obj.min_hourly_prices = message.minHourlyPrices.map(e => e ? Coin.toAmino(e) : undefined);
    } else {
      obj.min_hourly_prices = message.minHourlyPrices;
    }
    obj.max_subscription_gigabytes = message.maxSubscriptionGigabytes !== BigInt(0) ? message.maxSubscriptionGigabytes.toString() : undefined;
    obj.min_subscription_gigabytes = message.minSubscriptionGigabytes !== BigInt(0) ? message.minSubscriptionGigabytes.toString() : undefined;
    obj.max_subscription_hours = message.maxSubscriptionHours !== BigInt(0) ? message.maxSubscriptionHours.toString() : undefined;
    obj.min_subscription_hours = message.minSubscriptionHours !== BigInt(0) ? message.minSubscriptionHours.toString() : undefined;
    obj.staking_share = message.stakingShare === "" ? undefined : message.stakingShare;
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
      typeUrl: "/sentinel.node.v2.Params",
      value: Params.encode(message).finish()
    };
  }
};