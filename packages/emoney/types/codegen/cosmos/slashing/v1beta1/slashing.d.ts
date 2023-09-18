import { Timestamp, TimestampAmino, TimestampSDKType } from "../../../google/protobuf/timestamp";
import { Duration, DurationAmino, DurationSDKType } from "../../../google/protobuf/duration";
import { BinaryWriter } from "../../../binary";
/**
 * ValidatorSigningInfo defines a validator's signing info for monitoring their
 * liveness activity.
 */
export interface ValidatorSigningInfo {
    address: string;
    /** height at which validator was first a candidate OR was unjailed */
    startHeight: bigint;
    /** index offset into signed block bit array */
    indexOffset: bigint;
    /** timestamp validator cannot be unjailed until */
    jailedUntil: Timestamp;
    /**
     * whether or not a validator has been tombstoned (killed out of validator
     * set)
     */
    tombstoned: boolean;
    /** missed blocks counter (to avoid scanning the array every time) */
    missedBlocksCounter: bigint;
}
export interface ValidatorSigningInfoProtoMsg {
    typeUrl: "/cosmos.slashing.v1beta1.ValidatorSigningInfo";
    value: Uint8Array;
}
/**
 * ValidatorSigningInfo defines a validator's signing info for monitoring their
 * liveness activity.
 */
export interface ValidatorSigningInfoAmino {
    address: string;
    /** height at which validator was first a candidate OR was unjailed */
    start_height: string;
    /** index offset into signed block bit array */
    index_offset: string;
    /** timestamp validator cannot be unjailed until */
    jailed_until?: TimestampAmino;
    /**
     * whether or not a validator has been tombstoned (killed out of validator
     * set)
     */
    tombstoned: boolean;
    /** missed blocks counter (to avoid scanning the array every time) */
    missed_blocks_counter: string;
}
export interface ValidatorSigningInfoAminoMsg {
    type: "cosmos-sdk/ValidatorSigningInfo";
    value: ValidatorSigningInfoAmino;
}
/**
 * ValidatorSigningInfo defines a validator's signing info for monitoring their
 * liveness activity.
 */
export interface ValidatorSigningInfoSDKType {
    address: string;
    start_height: bigint;
    index_offset: bigint;
    jailed_until: TimestampSDKType;
    tombstoned: boolean;
    missed_blocks_counter: bigint;
}
/** Params represents the parameters used for by the slashing module. */
export interface Params {
    signedBlocksWindow: bigint;
    minSignedPerWindow: Uint8Array;
    downtimeJailDuration: Duration;
    slashFractionDoubleSign: Uint8Array;
    slashFractionDowntime: Uint8Array;
}
export interface ParamsProtoMsg {
    typeUrl: "/cosmos.slashing.v1beta1.Params";
    value: Uint8Array;
}
/** Params represents the parameters used for by the slashing module. */
export interface ParamsAmino {
    signed_blocks_window: string;
    min_signed_per_window: Uint8Array;
    downtime_jail_duration?: DurationAmino;
    slash_fraction_double_sign: Uint8Array;
    slash_fraction_downtime: Uint8Array;
}
export interface ParamsAminoMsg {
    type: "cosmos-sdk/Params";
    value: ParamsAmino;
}
/** Params represents the parameters used for by the slashing module. */
export interface ParamsSDKType {
    signed_blocks_window: bigint;
    min_signed_per_window: Uint8Array;
    downtime_jail_duration: DurationSDKType;
    slash_fraction_double_sign: Uint8Array;
    slash_fraction_downtime: Uint8Array;
}
export declare const ValidatorSigningInfo: {
    typeUrl: string;
    encode(message: ValidatorSigningInfo, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): ValidatorSigningInfo;
    fromPartial(object: Partial<ValidatorSigningInfo>): ValidatorSigningInfo;
    fromAmino(object: ValidatorSigningInfoAmino): ValidatorSigningInfo;
    toAmino(message: ValidatorSigningInfo): ValidatorSigningInfoAmino;
    fromAminoMsg(object: ValidatorSigningInfoAminoMsg): ValidatorSigningInfo;
    toAminoMsg(message: ValidatorSigningInfo): ValidatorSigningInfoAminoMsg;
    fromProtoMsg(message: ValidatorSigningInfoProtoMsg): ValidatorSigningInfo;
    toProto(message: ValidatorSigningInfo): Uint8Array;
    toProtoMsg(message: ValidatorSigningInfo): ValidatorSigningInfoProtoMsg;
};
export declare const Params: {
    typeUrl: string;
    encode(message: Params, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): Params;
    fromPartial(object: Partial<Params>): Params;
    fromAmino(object: ParamsAmino): Params;
    toAmino(message: Params): ParamsAmino;
    fromAminoMsg(object: ParamsAminoMsg): Params;
    toAminoMsg(message: Params): ParamsAminoMsg;
    fromProtoMsg(message: ParamsProtoMsg): Params;
    toProto(message: Params): Uint8Array;
    toProtoMsg(message: Params): ParamsProtoMsg;
};
