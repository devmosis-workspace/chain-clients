import { Coin, CoinAmino, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { Duration, DurationAmino, DurationSDKType } from "../../../google/protobuf/duration";
import { Status, statusFromJSON } from "../../types/v1/status";
import { Timestamp, TimestampSDKType } from "../../../google/protobuf/timestamp";
import { BinaryWriter } from "../../../binary";
import { isSet, fromJsonTimestamp } from "../../../helpers";
export interface Plan {
  id: bigint;
  provider: string;
  price: Coin[];
  validity: Duration;
  bytes: string;
  status: Status;
  statusAt: Timestamp;
}
export interface PlanProtoMsg {
  typeUrl: "/sentinel.plan.v1.Plan";
  value: Uint8Array;
}
export interface PlanAmino {
  id?: string;
  provider?: string;
  price?: CoinAmino[];
  validity?: DurationAmino;
  bytes?: string;
  status?: Status;
  status_at?: string;
}
export interface PlanAminoMsg {
  type: "/sentinel.plan.v1.Plan";
  value: PlanAmino;
}
export interface PlanSDKType {
  id: bigint;
  provider: string;
  price: CoinSDKType[];
  validity: DurationSDKType;
  bytes: string;
  status: Status;
  status_at: TimestampSDKType;
}
function createBasePlan(): Plan {
  return {
    id: BigInt(0),
    provider: "",
    price: [],
    validity: Duration.fromPartial({}),
    bytes: "",
    status: 0,
    statusAt: Timestamp.fromPartial({})
  };
}
export const Plan = {
  typeUrl: "/sentinel.plan.v1.Plan",
  encode(message: Plan, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.id !== BigInt(0)) {
      writer.uint32(8).uint64(message.id);
    }
    if (message.provider !== "") {
      writer.uint32(18).string(message.provider);
    }
    for (const v of message.price) {
      Coin.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    if (message.validity !== undefined) {
      Duration.encode(message.validity, writer.uint32(34).fork()).ldelim();
    }
    if (message.bytes !== "") {
      writer.uint32(42).string(message.bytes);
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
      provider: isSet(object.provider) ? String(object.provider) : "",
      price: Array.isArray(object?.price) ? object.price.map((e: any) => Coin.fromJSON(e)) : [],
      validity: isSet(object.validity) ? Duration.fromJSON(object.validity) : undefined,
      bytes: isSet(object.bytes) ? String(object.bytes) : "",
      status: isSet(object.status) ? statusFromJSON(object.status) : -1,
      statusAt: isSet(object.statusAt) ? fromJsonTimestamp(object.statusAt) : undefined
    };
  },
  fromPartial(object: Partial<Plan>): Plan {
    const message = createBasePlan();
    message.id = object.id !== undefined && object.id !== null ? BigInt(object.id.toString()) : BigInt(0);
    message.provider = object.provider ?? "";
    message.price = object.price?.map(e => Coin.fromPartial(e)) || [];
    message.validity = object.validity !== undefined && object.validity !== null ? Duration.fromPartial(object.validity) : undefined;
    message.bytes = object.bytes ?? "";
    message.status = object.status ?? 0;
    message.statusAt = object.statusAt !== undefined && object.statusAt !== null ? Timestamp.fromPartial(object.statusAt) : undefined;
    return message;
  },
  fromAmino(object: PlanAmino): Plan {
    const message = createBasePlan();
    if (object.id !== undefined && object.id !== null) {
      message.id = BigInt(object.id);
    }
    if (object.provider !== undefined && object.provider !== null) {
      message.provider = object.provider;
    }
    message.price = object.price?.map(e => Coin.fromAmino(e)) || [];
    if (object.validity !== undefined && object.validity !== null) {
      message.validity = Duration.fromAmino(object.validity);
    }
    if (object.bytes !== undefined && object.bytes !== null) {
      message.bytes = object.bytes;
    }
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
    obj.provider = message.provider === "" ? undefined : message.provider;
    if (message.price) {
      obj.price = message.price.map(e => e ? Coin.toAmino(e) : undefined);
    } else {
      obj.price = message.price;
    }
    obj.validity = message.validity ? Duration.toAmino(message.validity) : undefined;
    obj.bytes = message.bytes === "" ? undefined : message.bytes;
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
      typeUrl: "/sentinel.plan.v1.Plan",
      value: Plan.encode(message).finish()
    };
  }
};