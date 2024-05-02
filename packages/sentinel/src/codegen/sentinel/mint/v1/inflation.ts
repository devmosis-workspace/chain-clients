import { Timestamp, TimestampSDKType } from "../../../google/protobuf/timestamp";
import { BinaryWriter } from "../../../binary";
import { Decimal } from "@cosmjs/math";
import { isSet, fromJsonTimestamp } from "../../../helpers";
export interface Inflation {
  max: string;
  min: string;
  rateChange: string;
  timestamp: Timestamp;
}
export interface InflationProtoMsg {
  typeUrl: "/sentinel.mint.v1.Inflation";
  value: Uint8Array;
}
export interface InflationAmino {
  max?: string;
  min?: string;
  rate_change?: string;
  timestamp?: string;
}
export interface InflationAminoMsg {
  type: "/sentinel.mint.v1.Inflation";
  value: InflationAmino;
}
export interface InflationSDKType {
  max: string;
  min: string;
  rate_change: string;
  timestamp: TimestampSDKType;
}
function createBaseInflation(): Inflation {
  return {
    max: "",
    min: "",
    rateChange: "",
    timestamp: Timestamp.fromPartial({})
  };
}
export const Inflation = {
  typeUrl: "/sentinel.mint.v1.Inflation",
  encode(message: Inflation, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.max !== "") {
      writer.uint32(10).string(Decimal.fromUserInput(message.max, 18).atomics);
    }
    if (message.min !== "") {
      writer.uint32(18).string(Decimal.fromUserInput(message.min, 18).atomics);
    }
    if (message.rateChange !== "") {
      writer.uint32(26).string(Decimal.fromUserInput(message.rateChange, 18).atomics);
    }
    if (message.timestamp !== undefined) {
      Timestamp.encode(message.timestamp, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): Inflation {
    return {
      max: isSet(object.max) ? String(object.max) : "",
      min: isSet(object.min) ? String(object.min) : "",
      rateChange: isSet(object.rateChange) ? String(object.rateChange) : "",
      timestamp: isSet(object.timestamp) ? fromJsonTimestamp(object.timestamp) : undefined
    };
  },
  fromPartial(object: Partial<Inflation>): Inflation {
    const message = createBaseInflation();
    message.max = object.max ?? "";
    message.min = object.min ?? "";
    message.rateChange = object.rateChange ?? "";
    message.timestamp = object.timestamp !== undefined && object.timestamp !== null ? Timestamp.fromPartial(object.timestamp) : undefined;
    return message;
  },
  fromAmino(object: InflationAmino): Inflation {
    const message = createBaseInflation();
    if (object.max !== undefined && object.max !== null) {
      message.max = object.max;
    }
    if (object.min !== undefined && object.min !== null) {
      message.min = object.min;
    }
    if (object.rate_change !== undefined && object.rate_change !== null) {
      message.rateChange = object.rate_change;
    }
    if (object.timestamp !== undefined && object.timestamp !== null) {
      message.timestamp = Timestamp.fromAmino(object.timestamp);
    }
    return message;
  },
  toAmino(message: Inflation): InflationAmino {
    const obj: any = {};
    obj.max = message.max === "" ? undefined : message.max;
    obj.min = message.min === "" ? undefined : message.min;
    obj.rate_change = message.rateChange === "" ? undefined : message.rateChange;
    obj.timestamp = message.timestamp ? Timestamp.toAmino(message.timestamp) : undefined;
    return obj;
  },
  fromAminoMsg(object: InflationAminoMsg): Inflation {
    return Inflation.fromAmino(object.value);
  },
  fromProtoMsg(message: InflationProtoMsg): Inflation {
    return Inflation.decode(message.value);
  },
  toProto(message: Inflation): Uint8Array {
    return Inflation.encode(message).finish();
  },
  toProtoMsg(message: Inflation): InflationProtoMsg {
    return {
      typeUrl: "/sentinel.mint.v1.Inflation",
      value: Inflation.encode(message).finish()
    };
  }
};