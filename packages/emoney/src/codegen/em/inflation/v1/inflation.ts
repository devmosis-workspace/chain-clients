import { Timestamp, TimestampAmino, TimestampSDKType } from "../../../google/protobuf/timestamp";
import { BinaryWriter } from "../../../binary";
import { Decimal } from "@cosmjs/math";
import { isSet, fromJsonTimestamp } from "../../../helpers";
export interface InflationAsset {
  denom: string;
  inflation: string;
  accum: string;
}
export interface InflationAssetProtoMsg {
  typeUrl: "/em.inflation.v1.InflationAsset";
  value: Uint8Array;
}
export interface InflationAssetAmino {
  denom: string;
  inflation: string;
  accum: string;
}
export interface InflationAssetAminoMsg {
  type: "/em.inflation.v1.InflationAsset";
  value: InflationAssetAmino;
}
export interface InflationAssetSDKType {
  denom: string;
  inflation: string;
  accum: string;
}
export interface InflationState {
  lastApplied: Timestamp;
  lastAppliedHeight: string;
  assets: InflationAsset[];
}
export interface InflationStateProtoMsg {
  typeUrl: "/em.inflation.v1.InflationState";
  value: Uint8Array;
}
export interface InflationStateAmino {
  last_applied?: TimestampAmino;
  last_applied_height: string;
  assets: InflationAssetAmino[];
}
export interface InflationStateAminoMsg {
  type: "/em.inflation.v1.InflationState";
  value: InflationStateAmino;
}
export interface InflationStateSDKType {
  last_applied: TimestampSDKType;
  last_applied_height: string;
  assets: InflationAssetSDKType[];
}
function createBaseInflationAsset(): InflationAsset {
  return {
    denom: "",
    inflation: "",
    accum: ""
  };
}
export const InflationAsset = {
  typeUrl: "/em.inflation.v1.InflationAsset",
  encode(message: InflationAsset, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.denom !== "") {
      writer.uint32(10).string(message.denom);
    }
    if (message.inflation !== "") {
      writer.uint32(18).string(Decimal.fromUserInput(message.inflation, 18).atomics);
    }
    if (message.accum !== "") {
      writer.uint32(26).string(Decimal.fromUserInput(message.accum, 18).atomics);
    }
    return writer;
  },
  fromJSON(object: any): InflationAsset {
    return {
      denom: isSet(object.denom) ? String(object.denom) : "",
      inflation: isSet(object.inflation) ? String(object.inflation) : "",
      accum: isSet(object.accum) ? String(object.accum) : ""
    };
  },
  fromPartial(object: Partial<InflationAsset>): InflationAsset {
    const message = createBaseInflationAsset();
    message.denom = object.denom ?? "";
    message.inflation = object.inflation ?? "";
    message.accum = object.accum ?? "";
    return message;
  },
  fromAmino(object: InflationAssetAmino): InflationAsset {
    return {
      denom: object.denom,
      inflation: object.inflation,
      accum: object.accum
    };
  },
  toAmino(message: InflationAsset): InflationAssetAmino {
    const obj: any = {};
    obj.denom = message.denom;
    obj.inflation = message.inflation;
    obj.accum = message.accum;
    return obj;
  },
  fromAminoMsg(object: InflationAssetAminoMsg): InflationAsset {
    return InflationAsset.fromAmino(object.value);
  },
  fromProtoMsg(message: InflationAssetProtoMsg): InflationAsset {
    return InflationAsset.decode(message.value);
  },
  toProto(message: InflationAsset): Uint8Array {
    return InflationAsset.encode(message).finish();
  },
  toProtoMsg(message: InflationAsset): InflationAssetProtoMsg {
    return {
      typeUrl: "/em.inflation.v1.InflationAsset",
      value: InflationAsset.encode(message).finish()
    };
  }
};
function createBaseInflationState(): InflationState {
  return {
    lastApplied: Timestamp.fromPartial({}),
    lastAppliedHeight: "",
    assets: []
  };
}
export const InflationState = {
  typeUrl: "/em.inflation.v1.InflationState",
  encode(message: InflationState, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.lastApplied !== undefined) {
      Timestamp.encode(message.lastApplied, writer.uint32(10).fork()).ldelim();
    }
    if (message.lastAppliedHeight !== "") {
      writer.uint32(18).string(message.lastAppliedHeight);
    }
    for (const v of message.assets) {
      InflationAsset.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): InflationState {
    return {
      lastApplied: isSet(object.lastApplied) ? fromJsonTimestamp(object.lastApplied) : undefined,
      lastAppliedHeight: isSet(object.lastAppliedHeight) ? String(object.lastAppliedHeight) : "",
      assets: Array.isArray(object?.assets) ? object.assets.map((e: any) => InflationAsset.fromJSON(e)) : []
    };
  },
  fromPartial(object: Partial<InflationState>): InflationState {
    const message = createBaseInflationState();
    message.lastApplied = object.lastApplied !== undefined && object.lastApplied !== null ? Timestamp.fromPartial(object.lastApplied) : undefined;
    message.lastAppliedHeight = object.lastAppliedHeight ?? "";
    message.assets = object.assets?.map(e => InflationAsset.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: InflationStateAmino): InflationState {
    return {
      lastApplied: object.last_applied,
      lastAppliedHeight: object.last_applied_height,
      assets: Array.isArray(object?.assets) ? object.assets.map((e: any) => InflationAsset.fromAmino(e)) : []
    };
  },
  toAmino(message: InflationState): InflationStateAmino {
    const obj: any = {};
    obj.last_applied = message.lastApplied;
    obj.last_applied_height = message.lastAppliedHeight;
    if (message.assets) {
      obj.assets = message.assets.map(e => e ? InflationAsset.toAmino(e) : undefined);
    } else {
      obj.assets = [];
    }
    return obj;
  },
  fromAminoMsg(object: InflationStateAminoMsg): InflationState {
    return InflationState.fromAmino(object.value);
  },
  fromProtoMsg(message: InflationStateProtoMsg): InflationState {
    return InflationState.decode(message.value);
  },
  toProto(message: InflationState): Uint8Array {
    return InflationState.encode(message).finish();
  },
  toProtoMsg(message: InflationState): InflationStateProtoMsg {
    return {
      typeUrl: "/em.inflation.v1.InflationState",
      value: InflationState.encode(message).finish()
    };
  }
};