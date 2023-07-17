import { Params, ParamsSDKType } from "./quota";
import { DecCoin, DecCoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { Timestamp, TimestampSDKType } from "../../../google/protobuf/timestamp";
import * as _m0 from "protobufjs/minimal";
import { isSet, fromJsonTimestamp } from "../../../helpers";
/** GenesisState defines the uibc module's genesis state. */
export interface GenesisState {
  params?: Params;
  outflows: DecCoin[];
  /** total_outflow_sum defines the total outflow sum of ibc-transfer in USD. */
  totalOutflowSum: string;
  /** quota_expires defines quota expire time (as unix timestamp) for ibc-transfer denom. */
  quotaExpires?: Timestamp;
}
/** GenesisState defines the uibc module's genesis state. */
export interface GenesisStateSDKType {
  params?: ParamsSDKType;
  outflows: DecCoinSDKType[];
  total_outflow_sum: string;
  quota_expires?: TimestampSDKType;
}
function createBaseGenesisState(): GenesisState {
  return {
    params: undefined,
    outflows: [],
    totalOutflowSum: "",
    quotaExpires: undefined
  };
}
export const GenesisState = {
  encode(message: GenesisState, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.outflows) {
      DecCoin.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    if (message.totalOutflowSum !== "") {
      writer.uint32(26).string(message.totalOutflowSum);
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
  }
};