import { Schedule, ScheduleSDKType } from "./schedule";
import { Params, ParamsSDKType } from "./params";
import * as _m0 from "protobufjs/minimal";
/** GenesisState defines the cron module's genesis state. */
export interface GenesisState {
    scheduleList: Schedule[];
    params?: Params;
}
/** GenesisState defines the cron module's genesis state. */
export interface GenesisStateSDKType {
    scheduleList: ScheduleSDKType[];
    params?: ParamsSDKType;
}
export declare const GenesisState: {
    encode(message: GenesisState, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): GenesisState;
    fromPartial(object: Partial<GenesisState>): GenesisState;
};
