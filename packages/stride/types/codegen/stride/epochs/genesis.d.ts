import { Timestamp, TimestampSDKType } from "../../google/protobuf/timestamp";
import { Duration, DurationSDKType } from "../../google/protobuf/duration";
import { Long } from "../../helpers";
import * as _m0 from "protobufjs/minimal";
export interface EpochInfo {
    identifier: string;
    startTime?: Timestamp;
    duration?: Duration;
    currentEpoch: Long;
    currentEpochStartTime?: Timestamp;
    epochCountingStarted: boolean;
    currentEpochStartHeight: Long;
}
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
