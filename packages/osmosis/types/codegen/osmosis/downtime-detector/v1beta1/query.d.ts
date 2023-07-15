import { Downtime } from "./downtime_duration";
import { Duration, DurationSDKType } from "../../../google/protobuf/duration";
import * as _m0 from "protobufjs/minimal";
/**
 * Query for has it been at least $RECOVERY_DURATION units of time,
 * since the chain has been down for $DOWNTIME_DURATION.
 */
export interface RecoveredSinceDowntimeOfLengthRequest {
    downtime: Downtime;
    recovery?: Duration;
}
/**
 * Query for has it been at least $RECOVERY_DURATION units of time,
 * since the chain has been down for $DOWNTIME_DURATION.
 */
export interface RecoveredSinceDowntimeOfLengthRequestSDKType {
    downtime: Downtime;
    recovery?: DurationSDKType;
}
export interface RecoveredSinceDowntimeOfLengthResponse {
    succesfullyRecovered: boolean;
}
export interface RecoveredSinceDowntimeOfLengthResponseSDKType {
    succesfully_recovered: boolean;
}
export declare const RecoveredSinceDowntimeOfLengthRequest: {
    encode(message: RecoveredSinceDowntimeOfLengthRequest, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): RecoveredSinceDowntimeOfLengthRequest;
    fromPartial(object: Partial<RecoveredSinceDowntimeOfLengthRequest>): RecoveredSinceDowntimeOfLengthRequest;
};
export declare const RecoveredSinceDowntimeOfLengthResponse: {
    encode(message: RecoveredSinceDowntimeOfLengthResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): RecoveredSinceDowntimeOfLengthResponse;
    fromPartial(object: Partial<RecoveredSinceDowntimeOfLengthResponse>): RecoveredSinceDowntimeOfLengthResponse;
};
