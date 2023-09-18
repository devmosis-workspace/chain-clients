import { Params, ParamsAmino, ParamsSDKType } from "./quota";
import { DecCoin, DecCoinAmino, DecCoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { Timestamp, TimestampAmino, TimestampSDKType } from "../../../google/protobuf/timestamp";
import { BinaryWriter } from "../../../binary";
import { Decimal } from "@cosmjs/math";
import { isSet, fromJsonTimestamp } from "../../../helpers";
/** GenesisState defines the uibc module's genesis state. */
export interface GenesisState {
  params: Params;
  outflows: DecCoin[];
  /** total_outflow_sum defines the total outflow sum of ibc-transfer in USD. */
  totalOutflowSum: string;
  /** quota_expires defines quota expire time (as unix timestamp) for ibc-transfer denom. */
  quotaExpires: Timestamp;
}
export interface GenesisStateProtoMsg {
  typeUrl: "/umee.uibc.v1.GenesisState";
  value: Uint8Array;
}
/** GenesisState defines the uibc module's genesis state. */
export interface GenesisStateAmino {
  params?: ParamsAmino;
  outflows: DecCoinAmino[];
  /** total_outflow_sum defines the total outflow sum of ibc-transfer in USD. */
  total_outflow_sum: string;
  /** quota_expires defines quota expire time (as unix timestamp) for ibc-transfer denom. */
  quota_expires?: TimestampAmino;
}
export interface GenesisStateAminoMsg {
  type: "/umee.uibc.v1.GenesisState";
  value: GenesisStateAmino;
}
/** GenesisState defines the uibc module's genesis state. */
export interface GenesisStateSDKType {
  params: ParamsSDKType;
  outflows: DecCoinSDKType[];
  total_outflow_sum: string;
  quota_expires: TimestampSDKType;
}
function createBaseGenesisState(): GenesisState {
  return {
    params: Params.fromPartial({}),
    outflows: [],
    totalOutflowSum: "",
    quotaExpires: Timestamp.fromPartial({})
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
    if (message.totalOutflowSum !== "") {
      writer.uint32(26).string(Decimal.fromUserInput(message.totalOutflowSum, 18).atomics);
    }
    if (message.quotaExpires !== undefined) {
      Timestamp.encode(message.quotaExpires, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): GenesisState {
    return {
      params: isSet(object.params) ? Params.fromJSON(object.params) : undefined,
      outflows: Array.isArray(object?.outflows) ? object.outflows.map((e: any) => DecCoin.fromJSON(e)) : [],
      totalOutflowSum: isSet(object.totalOutflowSum) ? String(object.totalOutflowSum) : "",
      quotaExpires: isSet(object.quotaExpires) ? fromJsonTimestamp(object.quotaExpires) : undefined
    };
  },
  fromPartial(object: Partial<GenesisState>): GenesisState {
    const message = createBaseGenesisState();
    message.params = object.params !== undefined && object.params !== null ? Params.fromPartial(object.params) : undefined;
    message.outflows = object.outflows?.map(e => DecCoin.fromPartial(e)) || [];
    message.totalOutflowSum = object.totalOutflowSum ?? "";
    message.quotaExpires = object.quotaExpires !== undefined && object.quotaExpires !== null ? Timestamp.fromPartial(object.quotaExpires) : undefined;
    return message;
  },
  fromAmino(object: GenesisStateAmino): GenesisState {
    return {
      params: object?.params ? Params.fromAmino(object.params) : undefined,
      outflows: Array.isArray(object?.outflows) ? object.outflows.map((e: any) => DecCoin.fromAmino(e)) : [],
      totalOutflowSum: object.total_outflow_sum,
      quotaExpires: object.quota_expires
    };
  },
  toAmino(message: GenesisState): GenesisStateAmino {
    const obj: any = {};
    obj.params = message.params ? Params.toAmino(message.params) : undefined;
    if (message.outflows) {
      obj.outflows = message.outflows.map(e => e ? DecCoin.toAmino(e) : undefined);
    } else {
      obj.outflows = [];
    }
    obj.total_outflow_sum = message.totalOutflowSum;
    obj.quota_expires = message.quotaExpires;
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