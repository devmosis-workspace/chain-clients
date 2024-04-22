import { BinaryWriter } from "../../binary";
import { isSet } from "../../helpers";
export interface FeeAccrualCounter {
  denom: string;
  count: bigint;
}
export interface FeeAccrualCounterProtoMsg {
  typeUrl: "/cellarfees.v1.FeeAccrualCounter";
  value: Uint8Array;
}
export interface FeeAccrualCounterAmino {
  denom?: string;
  count?: string;
}
export interface FeeAccrualCounterAminoMsg {
  type: "/cellarfees.v1.FeeAccrualCounter";
  value: FeeAccrualCounterAmino;
}
export interface FeeAccrualCounterSDKType {
  denom: string;
  count: bigint;
}
export interface FeeAccrualCounters {
  counters: FeeAccrualCounter[];
}
export interface FeeAccrualCountersProtoMsg {
  typeUrl: "/cellarfees.v1.FeeAccrualCounters";
  value: Uint8Array;
}
export interface FeeAccrualCountersAmino {
  counters?: FeeAccrualCounterAmino[];
}
export interface FeeAccrualCountersAminoMsg {
  type: "/cellarfees.v1.FeeAccrualCounters";
  value: FeeAccrualCountersAmino;
}
export interface FeeAccrualCountersSDKType {
  counters: FeeAccrualCounterSDKType[];
}
function createBaseFeeAccrualCounter(): FeeAccrualCounter {
  return {
    denom: "",
    count: BigInt(0)
  };
}
export const FeeAccrualCounter = {
  typeUrl: "/cellarfees.v1.FeeAccrualCounter",
  encode(message: FeeAccrualCounter, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.denom !== "") {
      writer.uint32(10).string(message.denom);
    }
    if (message.count !== BigInt(0)) {
      writer.uint32(16).uint64(message.count);
    }
    return writer;
  },
  fromJSON(object: any): FeeAccrualCounter {
    return {
      denom: isSet(object.denom) ? String(object.denom) : "",
      count: isSet(object.count) ? BigInt(object.count.toString()) : BigInt(0)
    };
  },
  fromPartial(object: Partial<FeeAccrualCounter>): FeeAccrualCounter {
    const message = createBaseFeeAccrualCounter();
    message.denom = object.denom ?? "";
    message.count = object.count !== undefined && object.count !== null ? BigInt(object.count.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: FeeAccrualCounterAmino): FeeAccrualCounter {
    const message = createBaseFeeAccrualCounter();
    if (object.denom !== undefined && object.denom !== null) {
      message.denom = object.denom;
    }
    if (object.count !== undefined && object.count !== null) {
      message.count = BigInt(object.count);
    }
    return message;
  },
  toAmino(message: FeeAccrualCounter): FeeAccrualCounterAmino {
    const obj: any = {};
    obj.denom = message.denom;
    obj.count = message.count ? message.count.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: FeeAccrualCounterAminoMsg): FeeAccrualCounter {
    return FeeAccrualCounter.fromAmino(object.value);
  },
  fromProtoMsg(message: FeeAccrualCounterProtoMsg): FeeAccrualCounter {
    return FeeAccrualCounter.decode(message.value);
  },
  toProto(message: FeeAccrualCounter): Uint8Array {
    return FeeAccrualCounter.encode(message).finish();
  },
  toProtoMsg(message: FeeAccrualCounter): FeeAccrualCounterProtoMsg {
    return {
      typeUrl: "/cellarfees.v1.FeeAccrualCounter",
      value: FeeAccrualCounter.encode(message).finish()
    };
  }
};
function createBaseFeeAccrualCounters(): FeeAccrualCounters {
  return {
    counters: []
  };
}
export const FeeAccrualCounters = {
  typeUrl: "/cellarfees.v1.FeeAccrualCounters",
  encode(message: FeeAccrualCounters, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.counters) {
      FeeAccrualCounter.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): FeeAccrualCounters {
    return {
      counters: Array.isArray(object?.counters) ? object.counters.map((e: any) => FeeAccrualCounter.fromJSON(e)) : []
    };
  },
  fromPartial(object: Partial<FeeAccrualCounters>): FeeAccrualCounters {
    const message = createBaseFeeAccrualCounters();
    message.counters = object.counters?.map(e => FeeAccrualCounter.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: FeeAccrualCountersAmino): FeeAccrualCounters {
    const message = createBaseFeeAccrualCounters();
    message.counters = object.counters?.map(e => FeeAccrualCounter.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: FeeAccrualCounters): FeeAccrualCountersAmino {
    const obj: any = {};
    if (message.counters) {
      obj.counters = message.counters.map(e => e ? FeeAccrualCounter.toAmino(e) : undefined);
    } else {
      obj.counters = [];
    }
    return obj;
  },
  fromAminoMsg(object: FeeAccrualCountersAminoMsg): FeeAccrualCounters {
    return FeeAccrualCounters.fromAmino(object.value);
  },
  fromProtoMsg(message: FeeAccrualCountersProtoMsg): FeeAccrualCounters {
    return FeeAccrualCounters.decode(message.value);
  },
  toProto(message: FeeAccrualCounters): Uint8Array {
    return FeeAccrualCounters.encode(message).finish();
  },
  toProtoMsg(message: FeeAccrualCounters): FeeAccrualCountersProtoMsg {
    return {
      typeUrl: "/cellarfees.v1.FeeAccrualCounters",
      value: FeeAccrualCounters.encode(message).finish()
    };
  }
};