import { Duration, DurationAmino, DurationSDKType } from "../../../google/protobuf/duration";
import { Coin, CoinAmino, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { Status, statusFromJSON } from "../../types/v1/status";
import { Timestamp, TimestampSDKType } from "../../../google/protobuf/timestamp";
import { BinaryWriter } from "../../../binary";
import { isSet, fromJsonTimestamp } from "../../../helpers";
export interface Plan {
  id: bigint;
  providerAddress: string;
  duration: Duration;
  gigabytes: bigint;
  prices: Coin[];
  status: Status;
  statusAt: Timestamp;
}
export interface PlanProtoMsg {
  typeUrl: "/sentinel.plan.v2.Plan";
  value: Uint8Array;
}
export interface PlanAmino {
  id?: string;
  provider_address?: string;
  duration?: DurationAmino;
  gigabytes?: string;
  prices?: CoinAmino[];
  status?: Status;
  status_at?: string;
}
export interface PlanAminoMsg {
  type: "/sentinel.plan.v2.Plan";
  value: PlanAmino;
}
export interface PlanSDKType {
  id: bigint;
  provider_address: string;
  duration: DurationSDKType;
  gigabytes: bigint;
  prices: CoinSDKType[];
  status: Status;
  status_at: TimestampSDKType;
}
function createBasePlan(): Plan {
  return {
    id: BigInt(0),
    providerAddress: "",
    duration: Duration.fromPartial({}),
    gigabytes: BigInt(0),
    prices: [],
    status: 0,
    statusAt: Timestamp.fromPartial({})
  };
}
export const Plan = {
  typeUrl: "/sentinel.plan.v2.Plan",
  encode(message: Plan, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.id !== BigInt(0)) {
      writer.uint32(8).uint64(message.id);
    }
    if (message.providerAddress !== "") {
      writer.uint32(18).string(message.providerAddress);
    }
    if (message.duration !== undefined) {
      Duration.encode(message.duration, writer.uint32(26).fork()).ldelim();
    }
    if (message.gigabytes !== BigInt(0)) {
      writer.uint32(32).int64(message.gigabytes);
    }
    for (const v of message.prices) {
      Coin.encode(v!, writer.uint32(42).fork()).ldelim();
    }
    if (message.status !== 0) {
      writer.uint32(48).int32(message.status);
    }
    if (message.statusAt !== undefined) {
      Timestamp.encode(message.statusAt, writer.uint32(58).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): Plan {
    return {
      id: isSet(object.id) ? BigInt(object.id.toString()) : BigInt(0),
      providerAddress: isSet(object.providerAddress) ? String(object.providerAddress) : "",
      duration: isSet(object.duration) ? Duration.fromJSON(object.duration) : undefined,
      gigabytes: isSet(object.gigabytes) ? BigInt(object.gigabytes.toString()) : BigInt(0),
      prices: Array.isArray(object?.prices) ? object.prices.map((e: any) => Coin.fromJSON(e)) : [],
      status: isSet(object.status) ? statusFromJSON(object.status) : -1,
      statusAt: isSet(object.statusAt) ? fromJsonTimestamp(object.statusAt) : undefined
    };
  },
  fromPartial(object: Partial<Plan>): Plan {
    const message = createBasePlan();
    message.id = object.id !== undefined && object.id !== null ? BigInt(object.id.toString()) : BigInt(0);
    message.providerAddress = object.providerAddress ?? "";
    message.duration = object.duration !== undefined && object.duration !== null ? Duration.fromPartial(object.duration) : undefined;
    message.gigabytes = object.gigabytes !== undefined && object.gigabytes !== null ? BigInt(object.gigabytes.toString()) : BigInt(0);
    message.prices = object.prices?.map(e => Coin.fromPartial(e)) || [];
    message.status = object.status ?? 0;
    message.statusAt = object.statusAt !== undefined && object.statusAt !== null ? Timestamp.fromPartial(object.statusAt) : undefined;
    return message;
  },
  fromAmino(object: PlanAmino): Plan {
    const message = createBasePlan();
    if (object.id !== undefined && object.id !== null) {
      message.id = BigInt(object.id);
    }
    if (object.provider_address !== undefined && object.provider_address !== null) {
      message.providerAddress = object.provider_address;
    }
    if (object.duration !== undefined && object.duration !== null) {
      message.duration = Duration.fromAmino(object.duration);
    }
    if (object.gigabytes !== undefined && object.gigabytes !== null) {
      message.gigabytes = BigInt(object.gigabytes);
    }
    message.prices = object.prices?.map(e => Coin.fromAmino(e)) || [];
    if (object.status !== undefined && object.status !== null) {
      message.status = object.status;
    }
    if (object.status_at !== undefined && object.status_at !== null) {
      message.statusAt = Timestamp.fromAmino(object.status_at);
    }
    return message;
  },
  toAmino(message: Plan): PlanAmino {
    const obj: any = {};
    obj.id = message.id !== BigInt(0) ? message.id.toString() : undefined;
    obj.provider_address = message.providerAddress === "" ? undefined : message.providerAddress;
    obj.duration = message.duration ? Duration.toAmino(message.duration) : undefined;
    obj.gigabytes = message.gigabytes !== BigInt(0) ? message.gigabytes.toString() : undefined;
    if (message.prices) {
      obj.prices = message.prices.map(e => e ? Coin.toAmino(e) : undefined);
    } else {
      obj.prices = message.prices;
    }
    obj.status = message.status === 0 ? undefined : message.status;
    obj.status_at = message.statusAt ? Timestamp.toAmino(message.statusAt) : undefined;
    return obj;
  },
  fromAminoMsg(object: PlanAminoMsg): Plan {
    return Plan.fromAmino(object.value);
  },
  fromProtoMsg(message: PlanProtoMsg): Plan {
    return Plan.decode(message.value);
  },
  toProto(message: Plan): Uint8Array {
    return Plan.encode(message).finish();
  },
  toProtoMsg(message: Plan): PlanProtoMsg {
    return {
      typeUrl: "/sentinel.plan.v2.Plan",
      value: Plan.encode(message).finish()
    };
  }
};