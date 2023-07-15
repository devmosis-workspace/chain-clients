import { Long } from "../../helpers";
import * as _m0 from "protobufjs/minimal";
export interface EpochTracker {
    epochIdentifier: string;
    epochNumber: Long;
    nextEpochStartTime: Long;
    duration: Long;
}
export interface EpochTrackerSDKType {
    epoch_identifier: string;
    epoch_number: Long;
    next_epoch_start_time: Long;
    duration: Long;
}
export declare const EpochTracker: {
    encode(message: EpochTracker, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): EpochTracker;
    fromPartial(object: Partial<EpochTracker>): EpochTracker;
};
