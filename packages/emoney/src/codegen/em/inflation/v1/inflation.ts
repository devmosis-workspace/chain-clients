import { Timestamp, TimestampSDKType } from "../../../google/protobuf/timestamp";
import * as _m0 from "protobufjs/minimal";
import { isSet, fromJsonTimestamp } from "../../../helpers";
export interface InflationAsset {
  denom: string;
  inflation: string;
  accum: string;
}
export interface InflationAssetSDKType {
  denom: string;
  inflation: string;
  accum: string;
}
export interface InflationState {
  lastApplied?: Timestamp;
  lastAppliedHeight: string;
  assets: InflationAsset[];
}
export interface InflationStateSDKType {
  last_applied?: TimestampSDKType;
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
  encode(message: InflationAsset, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.denom !== "") {
      writer.uint32(10).string(message.denom);
    }
    if (message.inflation !== "") {
      writer.uint32(18).string(message.inflation);
    }
    if (message.accum !== "") {
      writer.uint32(26).string(message.accum);
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
  }
};
function createBaseInflationState(): InflationState {
  return {
    lastApplied: undefined,
    lastAppliedHeight: "",
    assets: []
  };
}
export const InflationState = {
  encode(message: InflationState, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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
  }
};