import { Params, ParamsSDKType } from "./params";
import { Gauge, GaugeSDKType } from "./gauge";
import { Duration, DurationSDKType } from "../../google/protobuf/duration";
import { Long, isSet } from "../../helpers";
import * as _m0 from "protobufjs/minimal";
/**
 * GenesisState defines the incentives module's various parameters when first
 * initialized
 */
export interface GenesisState {
  /** params are all the parameters of the module */
  params?: Params;
  /** gauges are all gauges that should exist at genesis */
  gauges: Gauge[];
  /**
   * lockable_durations are all lockup durations that gauges can be locked for
   * in order to recieve incentives
   */
  lockableDurations: Duration[];
  /**
   * last_gauge_id is what the gauge number will increment from when creating
   * the next gauge after genesis
   */
  lastGaugeId: Long;
}
/**
 * GenesisState defines the incentives module's various parameters when first
 * initialized
 */
export interface GenesisStateSDKType {
  params?: ParamsSDKType;
  gauges: GaugeSDKType[];
  lockable_durations: DurationSDKType[];
  last_gauge_id: Long;
}
function createBaseGenesisState(): GenesisState {
  return {
    params: undefined,
    gauges: [],
    lockableDurations: [],
    lastGaugeId: Long.UZERO
  };
}
export const GenesisState = {
  encode(message: GenesisState, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.gauges) {
      Gauge.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    for (const v of message.lockableDurations) {
      Duration.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    if (!message.lastGaugeId.isZero()) {
      writer.uint32(32).uint64(message.lastGaugeId);
    }
    return writer;
  },
  fromJSON(object: any): GenesisState {
    return {
      params: isSet(object.params) ? Params.fromJSON(object.params) : undefined,
      gauges: Array.isArray(object?.gauges) ? object.gauges.map((e: any) => Gauge.fromJSON(e)) : [],
      lockableDurations: Array.isArray(object?.lockableDurations) ? object.lockableDurations.map((e: any) => Duration.fromJSON(e)) : [],
      lastGaugeId: isSet(object.lastGaugeId) ? Long.fromValue(object.lastGaugeId) : Long.UZERO
    };
  },
  fromPartial(object: Partial<GenesisState>): GenesisState {
    const message = createBaseGenesisState();
    message.params = object.params !== undefined && object.params !== null ? Params.fromPartial(object.params) : undefined;
    message.gauges = object.gauges?.map(e => Gauge.fromPartial(e)) || [];
    message.lockableDurations = object.lockableDurations?.map(e => Duration.fromPartial(e)) || [];
    message.lastGaugeId = object.lastGaugeId !== undefined && object.lastGaugeId !== null ? Long.fromValue(object.lastGaugeId) : Long.UZERO;
    return message;
  }
};