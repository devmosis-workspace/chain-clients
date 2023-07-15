import { Params, ParamsSDKType } from "./params";
import { Gauge, GaugeSDKType } from "./gauge";
import { Duration, DurationSDKType } from "../../google/protobuf/duration";
import { Long } from "../../helpers";
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
export declare const GenesisState: {
    encode(message: GenesisState, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): GenesisState;
    fromPartial(object: Partial<GenesisState>): GenesisState;
};
