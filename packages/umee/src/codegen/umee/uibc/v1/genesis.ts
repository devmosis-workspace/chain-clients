import { Params, ParamsAmino, ParamsSDKType } from "./quota";
import { DecCoin, DecCoinAmino, DecCoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { Timestamp, TimestampSDKType } from "../../../google/protobuf/timestamp";
import { BinaryWriter } from "../../../binary";
import { Decimal } from "@cosmjs/math";
import { isSet, fromJsonTimestamp } from "../../../helpers";
/** GenesisState defines the uibc module's genesis state. */
export interface GenesisState {
  params: Params;
  outflows: DecCoin[];
  /** outflow_sum defines the total outflow sum of ibc-transfer in USD. */
  outflowSum: string;
  /** quota_expires defines quota expire time (as unix timestamp) for ibc-transfer denom. */
  quotaExpires: Timestamp;
  /** inflows tracks IBC inflow transfers (in USD) for each denom during quota period. */
  inflows: DecCoin[];
  /** inflow_sum defines tracks total sum of IBC inflow transfers (in USD) during quota period. */
  inflowSum: string;
}
export interface GenesisStateProtoMsg {
  typeUrl: "/umee.uibc.v1.GenesisState";
  value: Uint8Array;
}
/** GenesisState defines the uibc module's genesis state. */
export interface GenesisStateAmino {
  params?: ParamsAmino;
  outflows?: DecCoinAmino[];
  /** outflow_sum defines the total outflow sum of ibc-transfer in USD. */
  outflow_sum?: string;
  /** quota_expires defines quota expire time (as unix timestamp) for ibc-transfer denom. */
  quota_expires?: string;
  /** inflows tracks IBC inflow transfers (in USD) for each denom during quota period. */
  inflows?: DecCoinAmino[];
  /** inflow_sum defines tracks total sum of IBC inflow transfers (in USD) during quota period. */
  inflow_sum?: string;
}
export interface GenesisStateAminoMsg {
  type: "/umee.uibc.v1.GenesisState";
  value: GenesisStateAmino;
}
/** GenesisState defines the uibc module's genesis state. */
export interface GenesisStateSDKType {
  params: ParamsSDKType;
  outflows: DecCoinSDKType[];
  outflow_sum: string;
  quota_expires: TimestampSDKType;
  inflows: DecCoinSDKType[];
  inflow_sum: string;
}
function createBaseGenesisState(): GenesisState {
  return {
    params: Params.fromPartial({}),
    outflows: [],
    outflowSum: "",
    quotaExpires: Timestamp.fromPartial({}),
    inflows: [],
    inflowSum: ""
  };
}
export const GenesisState = {
  typeUrl: "/umee.uibc.v1.GenesisState",
  encode(message: GenesisState, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.outflows) {
      DecCoin.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    if (message.outflowSum !== "") {
      writer.uint32(26).string(Decimal.fromUserInput(message.outflowSum, 18).atomics);
    }
    if (message.quotaExpires !== undefined) {
      Timestamp.encode(message.quotaExpires, writer.uint32(34).fork()).ldelim();
    }
    for (const v of message.inflows) {
      DecCoin.encode(v!, writer.uint32(42).fork()).ldelim();
    }
    if (message.inflowSum !== "") {
      writer.uint32(50).string(Decimal.fromUserInput(message.inflowSum, 18).atomics);
    }
    return writer;
  },
  fromJSON(object: any): GenesisState {
    return {
      params: isSet(object.params) ? Params.fromJSON(object.params) : undefined,
      outflows: Array.isArray(object?.outflows) ? object.outflows.map((e: any) => DecCoin.fromJSON(e)) : [],
      outflowSum: isSet(object.outflowSum) ? String(object.outflowSum) : "",
      quotaExpires: isSet(object.quotaExpires) ? fromJsonTimestamp(object.quotaExpires) : undefined,
      inflows: Array.isArray(object?.inflows) ? object.inflows.map((e: any) => DecCoin.fromJSON(e)) : [],
      inflowSum: isSet(object.inflowSum) ? String(object.inflowSum) : ""
    };
  },
  fromPartial(object: Partial<GenesisState>): GenesisState {
    const message = createBaseGenesisState();
    message.params = object.params !== undefined && object.params !== null ? Params.fromPartial(object.params) : undefined;
    message.outflows = object.outflows?.map(e => DecCoin.fromPartial(e)) || [];
    message.outflowSum = object.outflowSum ?? "";
    message.quotaExpires = object.quotaExpires !== undefined && object.quotaExpires !== null ? Timestamp.fromPartial(object.quotaExpires) : undefined;
    message.inflows = object.inflows?.map(e => DecCoin.fromPartial(e)) || [];
    message.inflowSum = object.inflowSum ?? "";
    return message;
  },
  fromAmino(object: GenesisStateAmino): GenesisState {
    const message = createBaseGenesisState();
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromAmino(object.params);
    }
    message.outflows = object.outflows?.map(e => DecCoin.fromAmino(e)) || [];
    if (object.outflow_sum !== undefined && object.outflow_sum !== null) {
      message.outflowSum = object.outflow_sum;
    }
    if (object.quota_expires !== undefined && object.quota_expires !== null) {
      message.quotaExpires = Timestamp.fromAmino(object.quota_expires);
    }
    message.inflows = object.inflows?.map(e => DecCoin.fromAmino(e)) || [];
    if (object.inflow_sum !== undefined && object.inflow_sum !== null) {
      message.inflowSum = object.inflow_sum;
    }
    return message;
  },
  toAmino(message: GenesisState): GenesisStateAmino {
    const obj: any = {};
    obj.params = message.params ? Params.toAmino(message.params) : undefined;
    if (message.outflows) {
      obj.outflows = message.outflows.map(e => e ? DecCoin.toAmino(e) : undefined);
    } else {
      obj.outflows = message.outflows;
    }
    obj.outflow_sum = message.outflowSum === "" ? undefined : message.outflowSum;
    obj.quota_expires = message.quotaExpires ? Timestamp.toAmino(message.quotaExpires) : undefined;
    if (message.inflows) {
      obj.inflows = message.inflows.map(e => e ? DecCoin.toAmino(e) : undefined);
    } else {
      obj.inflows = message.inflows;
    }
    obj.inflow_sum = message.inflowSum === "" ? undefined : message.inflowSum;
    return obj;
  },
  fromAminoMsg(object: GenesisStateAminoMsg): GenesisState {
    return GenesisState.fromAmino(object.value);
  },
  fromProtoMsg(message: GenesisStateProtoMsg): GenesisState {
    return GenesisState.decode(message.value);
  },
  toProto(message: GenesisState): Uint8Array {
    return GenesisState.encode(message).finish();
  },
  toProtoMsg(message: GenesisState): GenesisStateProtoMsg {
    return {
      typeUrl: "/umee.uibc.v1.GenesisState",
      value: GenesisState.encode(message).finish()
    };
  }
};