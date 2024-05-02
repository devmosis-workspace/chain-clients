import { Timestamp, TimestampSDKType } from "../../../google/protobuf/timestamp";
import { Duration, DurationAmino, DurationSDKType } from "../../../google/protobuf/duration";
import { BinaryWriter } from "../../../binary";
/**
 * EpochInfo defines the message interface containing the relevant informations about
 * an epoch.
 */
export interface EpochInfo {
    /** identifier of the epoch */
    identifier: string;
    /** start_time of the epoch */
    startTime: Timestamp;
    /** duration of the epoch */
    duration: Duration;
    /** current_epoch is the integer identifier of the epoch */
    currentEpoch: bigint;
    /** current_epoch_start_time defines the timestamp of the start of the epoch */
    currentEpochStartTime: Timestamp;
    /** epoch_counting_started reflects if the counting for the epoch has started */
    epochCountingStarted: boolean;
    /** current_epoch_start_height of the epoch */
    currentEpochStartHeight: bigint;
}
export interface EpochInfoProtoMsg {
    typeUrl: "/sifnode.epochs.v1.EpochInfo";
    value: Uint8Array;
}
/**
 * EpochInfo defines the message interface containing the relevant informations about
 * an epoch.
 */
export interface EpochInfoAmino {
    /** identifier of the epoch */
    identifier?: string;
    /** start_time of the epoch */
    start_time?: string;
    /** duration of the epoch */
    duration?: DurationAmino;
    /** current_epoch is the integer identifier of the epoch */
    current_epoch?: string;
    /** current_epoch_start_time defines the timestamp of the start of the epoch */
    current_epoch_start_time?: string;
    /** epoch_counting_started reflects if the counting for the epoch has started */
    epoch_counting_started?: boolean;
    /** current_epoch_start_height of the epoch */
    current_epoch_start_height?: string;
}
export interface EpochInfoAminoMsg {
    type: "/sifnode.epochs.v1.EpochInfo";
    value: EpochInfoAmino;
}
/**
 * EpochInfo defines the message interface containing the relevant informations about
 * an epoch.
 */
export interface EpochInfoSDKType {
    identifier: string;
    start_time: TimestampSDKType;
    duration: DurationSDKType;
    current_epoch: bigint;
    current_epoch_start_time: TimestampSDKType;
    epoch_counting_started: boolean;
    current_epoch_start_height: bigint;
}
/** GenesisState defines the epochs module's genesis state. */
export interface GenesisState {
    /** epochs is a slice of EpochInfo that defines the epochs in the genesis state */
    epochs: EpochInfo[];
}
export interface GenesisStateProtoMsg {
    typeUrl: "/sifnode.epochs.v1.GenesisState";
    value: Uint8Array;
}
/** GenesisState defines the epochs module's genesis state. */
export interface GenesisStateAmino {
    /** epochs is a slice of EpochInfo that defines the epochs in the genesis state */
    epochs?: EpochInfoAmino[];
}
export interface GenesisStateAminoMsg {
    type: "/sifnode.epochs.v1.GenesisState";
    value: GenesisStateAmino;
}
/** GenesisState defines the epochs module's genesis state. */
export interface GenesisStateSDKType {
    epochs: EpochInfoSDKType[];
}
export declare const EpochInfo: {
    typeUrl: string;
    encode(message: EpochInfo, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): EpochInfo;
    fromPartial(object: Partial<EpochInfo>): EpochInfo;
    fromAmino(object: EpochInfoAmino): EpochInfo;
    toAmino(message: EpochInfo): EpochInfoAmino;
    fromAminoMsg(object: EpochInfoAminoMsg): EpochInfo;
    fromProtoMsg(message: EpochInfoProtoMsg): EpochInfo;
    toProto(message: EpochInfo): Uint8Array;
    toProtoMsg(message: EpochInfo): EpochInfoProtoMsg;
};
export declare const GenesisState: {
    typeUrl: string;
    encode(message: GenesisState, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): GenesisState;
    fromPartial(object: Partial<GenesisState>): GenesisState;
    fromAmino(object: GenesisStateAmino): GenesisState;
    toAmino(message: GenesisState): GenesisStateAmino;
    fromAminoMsg(object: GenesisStateAminoMsg): GenesisState;
    fromProtoMsg(message: GenesisStateProtoMsg): GenesisState;
    toProto(message: GenesisState): Uint8Array;
    toProtoMsg(message: GenesisState): GenesisStateProtoMsg;
};
