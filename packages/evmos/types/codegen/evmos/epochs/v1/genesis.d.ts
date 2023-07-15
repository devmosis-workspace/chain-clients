import { Timestamp, TimestampSDKType } from "../../../google/protobuf/timestamp";
import { Duration, DurationSDKType } from "../../../google/protobuf/duration";
import { Long } from "../../../helpers";
import * as _m0 from "protobufjs/minimal";
/**
 * EpochInfo defines the message interface containing the relevant informations about
 * an epoch.
 */
export interface EpochInfo {
    /** identifier of the epoch */
    identifier: string;
    /** start_time of the epoch */
    startTime?: Timestamp;
    /** duration of the epoch */
    duration?: Duration;
    /** current_epoch is the integer identifier of the epoch */
    currentEpoch: Long;
    /** current_epoch_start_time defines the timestamp of the start of the epoch */
    currentEpochStartTime?: Timestamp;
    /** epoch_counting_started reflects if the counting for the epoch has started */
    epochCountingStarted: boolean;
    /** current_epoch_start_height of the epoch */
    currentEpochStartHeight: Long;
}
/**
 * EpochInfo defines the message interface containing the relevant informations about
 * an epoch.
 */
export interface EpochInfoSDKType {
    identifier: string;
    start_time?: TimestampSDKType;
    duration?: DurationSDKType;
    current_epoch: Long;
    current_epoch_start_time?: TimestampSDKType;
    epoch_counting_started: boolean;
    current_epoch_start_height: Long;
}
/** GenesisState defines the epochs module's genesis state. */
export interface GenesisState {
    /** epochs is a slice of EpochInfo that defines the epochs in the genesis state */
    epochs: EpochInfo[];
}
/** GenesisState defines the epochs module's genesis state. */
export interface GenesisStateSDKType {
    epochs: EpochInfoSDKType[];
}
export declare const EpochInfo: {
    encode(message: EpochInfo, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): EpochInfo;
    fromPartial(object: Partial<EpochInfo>): EpochInfo;
};
export declare const GenesisState: {
    encode(message: GenesisState, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): GenesisState;
    fromPartial(object: Partial<GenesisState>): GenesisState;
};
