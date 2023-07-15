import { Duration, DurationSDKType } from "../../../google/protobuf/duration";
import { TwapRecord, TwapRecordSDKType } from "./twap_record";
import * as _m0 from "protobufjs/minimal";
/** Params holds parameters for the twap module */
export interface Params {
    pruneEpochIdentifier: string;
    recordHistoryKeepPeriod?: Duration;
}
/** Params holds parameters for the twap module */
export interface ParamsSDKType {
    prune_epoch_identifier: string;
    record_history_keep_period?: DurationSDKType;
}
/** GenesisState defines the twap module's genesis state. */
export interface GenesisState {
    /** twaps is the collection of all twap records. */
    twaps: TwapRecord[];
    /** params is the container of twap parameters. */
    params?: Params;
}
/** GenesisState defines the twap module's genesis state. */
export interface GenesisStateSDKType {
    twaps: TwapRecordSDKType[];
    params?: ParamsSDKType;
}
export declare const Params: {
    encode(message: Params, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): Params;
    fromPartial(object: Partial<Params>): Params;
};
export declare const GenesisState: {
    encode(message: GenesisState, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): GenesisState;
    fromPartial(object: Partial<GenesisState>): GenesisState;
};
