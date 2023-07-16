import { Schedule, ScheduleSDKType } from "./store";
import { Long } from "../../../helpers";
import * as _m0 from "protobufjs/minimal";
/** GenesisState defines the incentives module's genesis state */
export interface GenesisState {
    /** NextScheduleId is the id for the next incentives schedule to be created */
    nextScheduleId: Long;
    /** Schedules is an array of active incentives schedules */
    schedules: Schedule[];
}
/** GenesisState defines the incentives module's genesis state */
export interface GenesisStateSDKType {
    next_schedule_id: Long;
    schedules: ScheduleSDKType[];
}
export declare const GenesisState: {
    encode(message: GenesisState, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): GenesisState;
    fromPartial(object: Partial<GenesisState>): GenesisState;
};
