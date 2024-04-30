import { Timestamp, TimestampSDKType } from "../../../google/protobuf/timestamp";
import { Coin, CoinAmino, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { BinaryWriter } from "../../../binary";
/**
 * MsgCreateSchedule defines the message for creating a new incentives schedule.
 *
 * This message is typically executed via a governance proposal with the gov
 * module being the executing authority.
 */
export interface MsgCreateSchedule {
    /**
     * Authority is the account executing the safety fund spend.
     * It should be the gov module account.
     */
    authority: string;
    /** StartTime is the timestamp at which this incentives schedule shall begin. */
    startTime: Timestamp;
    /** EndTime is the timestamp at which this incentives schedule shall finish. */
    endTime: Timestamp;
    /**
     * Amount is the total amount of coins that shall be released to stakers
     * throughout the span of this incentives schedule.
     */
    amount: Coin[];
}
export interface MsgCreateScheduleProtoMsg {
    typeUrl: "/mars.incentives.v1beta1.MsgCreateSchedule";
    value: Uint8Array;
}
/**
 * MsgCreateSchedule defines the message for creating a new incentives schedule.
 *
 * This message is typically executed via a governance proposal with the gov
 * module being the executing authority.
 */
export interface MsgCreateScheduleAmino {
    /**
     * Authority is the account executing the safety fund spend.
     * It should be the gov module account.
     */
    authority?: string;
    /** StartTime is the timestamp at which this incentives schedule shall begin. */
    start_time?: string;
    /** EndTime is the timestamp at which this incentives schedule shall finish. */
    end_time?: string;
    /**
     * Amount is the total amount of coins that shall be released to stakers
     * throughout the span of this incentives schedule.
     */
    amount?: CoinAmino[];
}
export interface MsgCreateScheduleAminoMsg {
    type: "/mars.incentives.v1beta1.MsgCreateSchedule";
    value: MsgCreateScheduleAmino;
}
/**
 * MsgCreateSchedule defines the message for creating a new incentives schedule.
 *
 * This message is typically executed via a governance proposal with the gov
 * module being the executing authority.
 */
export interface MsgCreateScheduleSDKType {
    authority: string;
    start_time: TimestampSDKType;
    end_time: TimestampSDKType;
    amount: CoinSDKType[];
}
/**
 * MsgCreateScheduleResponse defines the response to executing a
 * MsgCreateSchedule message.
 */
export interface MsgCreateScheduleResponse {
}
export interface MsgCreateScheduleResponseProtoMsg {
    typeUrl: "/mars.incentives.v1beta1.MsgCreateScheduleResponse";
    value: Uint8Array;
}
/**
 * MsgCreateScheduleResponse defines the response to executing a
 * MsgCreateSchedule message.
 */
export interface MsgCreateScheduleResponseAmino {
}
export interface MsgCreateScheduleResponseAminoMsg {
    type: "/mars.incentives.v1beta1.MsgCreateScheduleResponse";
    value: MsgCreateScheduleResponseAmino;
}
/**
 * MsgCreateScheduleResponse defines the response to executing a
 * MsgCreateSchedule message.
 */
export interface MsgCreateScheduleResponseSDKType {
}
/**
 * MsgTerminateSchedules defines the message for terminating one or more
 * existing incentives schedules.
 *
 * This message is typically executed via a governance proposal with the gov
 * module being the executing authority.
 */
export interface MsgTerminateSchedules {
    /**
     * Authority is the account executing the safety fund spend.
     * It should be the gov module account.
     */
    authority: string;
    /**
     * Ids is the array of identifiers of the incentives schedules which are to be
     * terminated.
     */
    ids: bigint[];
}
export interface MsgTerminateSchedulesProtoMsg {
    typeUrl: "/mars.incentives.v1beta1.MsgTerminateSchedules";
    value: Uint8Array;
}
/**
 * MsgTerminateSchedules defines the message for terminating one or more
 * existing incentives schedules.
 *
 * This message is typically executed via a governance proposal with the gov
 * module being the executing authority.
 */
export interface MsgTerminateSchedulesAmino {
    /**
     * Authority is the account executing the safety fund spend.
     * It should be the gov module account.
     */
    authority?: string;
    /**
     * Ids is the array of identifiers of the incentives schedules which are to be
     * terminated.
     */
    ids?: string[];
}
export interface MsgTerminateSchedulesAminoMsg {
    type: "/mars.incentives.v1beta1.MsgTerminateSchedules";
    value: MsgTerminateSchedulesAmino;
}
/**
 * MsgTerminateSchedules defines the message for terminating one or more
 * existing incentives schedules.
 *
 * This message is typically executed via a governance proposal with the gov
 * module being the executing authority.
 */
export interface MsgTerminateSchedulesSDKType {
    authority: string;
    ids: bigint[];
}
/**
 * MsgTerminateSchedulesResponse defines the response to executing a
 * MsgTerminateSchedules message.
 */
export interface MsgTerminateSchedulesResponse {
    /**
     * RefundedAmount is the unreleased incentives that were refunded to the
     * community pool.
     */
    refundedAmount: Coin[];
}
export interface MsgTerminateSchedulesResponseProtoMsg {
    typeUrl: "/mars.incentives.v1beta1.MsgTerminateSchedulesResponse";
    value: Uint8Array;
}
/**
 * MsgTerminateSchedulesResponse defines the response to executing a
 * MsgTerminateSchedules message.
 */
export interface MsgTerminateSchedulesResponseAmino {
    /**
     * RefundedAmount is the unreleased incentives that were refunded to the
     * community pool.
     */
    refunded_amount?: CoinAmino[];
}
export interface MsgTerminateSchedulesResponseAminoMsg {
    type: "/mars.incentives.v1beta1.MsgTerminateSchedulesResponse";
    value: MsgTerminateSchedulesResponseAmino;
}
/**
 * MsgTerminateSchedulesResponse defines the response to executing a
 * MsgTerminateSchedules message.
 */
export interface MsgTerminateSchedulesResponseSDKType {
    refunded_amount: CoinSDKType[];
}
export declare const MsgCreateSchedule: {
    typeUrl: string;
    encode(message: MsgCreateSchedule, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): MsgCreateSchedule;
    fromPartial(object: Partial<MsgCreateSchedule>): MsgCreateSchedule;
    fromAmino(object: MsgCreateScheduleAmino): MsgCreateSchedule;
    toAmino(message: MsgCreateSchedule): MsgCreateScheduleAmino;
    fromAminoMsg(object: MsgCreateScheduleAminoMsg): MsgCreateSchedule;
    fromProtoMsg(message: MsgCreateScheduleProtoMsg): MsgCreateSchedule;
    toProto(message: MsgCreateSchedule): Uint8Array;
    toProtoMsg(message: MsgCreateSchedule): MsgCreateScheduleProtoMsg;
};
export declare const MsgCreateScheduleResponse: {
    typeUrl: string;
    encode(_: MsgCreateScheduleResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(_: any): MsgCreateScheduleResponse;
    fromPartial(_: Partial<MsgCreateScheduleResponse>): MsgCreateScheduleResponse;
    fromAmino(_: MsgCreateScheduleResponseAmino): MsgCreateScheduleResponse;
    toAmino(_: MsgCreateScheduleResponse): MsgCreateScheduleResponseAmino;
    fromAminoMsg(object: MsgCreateScheduleResponseAminoMsg): MsgCreateScheduleResponse;
    fromProtoMsg(message: MsgCreateScheduleResponseProtoMsg): MsgCreateScheduleResponse;
    toProto(message: MsgCreateScheduleResponse): Uint8Array;
    toProtoMsg(message: MsgCreateScheduleResponse): MsgCreateScheduleResponseProtoMsg;
};
export declare const MsgTerminateSchedules: {
    typeUrl: string;
    encode(message: MsgTerminateSchedules, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): MsgTerminateSchedules;
    fromPartial(object: Partial<MsgTerminateSchedules>): MsgTerminateSchedules;
    fromAmino(object: MsgTerminateSchedulesAmino): MsgTerminateSchedules;
    toAmino(message: MsgTerminateSchedules): MsgTerminateSchedulesAmino;
    fromAminoMsg(object: MsgTerminateSchedulesAminoMsg): MsgTerminateSchedules;
    fromProtoMsg(message: MsgTerminateSchedulesProtoMsg): MsgTerminateSchedules;
    toProto(message: MsgTerminateSchedules): Uint8Array;
    toProtoMsg(message: MsgTerminateSchedules): MsgTerminateSchedulesProtoMsg;
};
export declare const MsgTerminateSchedulesResponse: {
    typeUrl: string;
    encode(message: MsgTerminateSchedulesResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): MsgTerminateSchedulesResponse;
    fromPartial(object: Partial<MsgTerminateSchedulesResponse>): MsgTerminateSchedulesResponse;
    fromAmino(object: MsgTerminateSchedulesResponseAmino): MsgTerminateSchedulesResponse;
    toAmino(message: MsgTerminateSchedulesResponse): MsgTerminateSchedulesResponseAmino;
    fromAminoMsg(object: MsgTerminateSchedulesResponseAminoMsg): MsgTerminateSchedulesResponse;
    fromProtoMsg(message: MsgTerminateSchedulesResponseProtoMsg): MsgTerminateSchedulesResponse;
    toProto(message: MsgTerminateSchedulesResponse): Uint8Array;
    toProtoMsg(message: MsgTerminateSchedulesResponse): MsgTerminateSchedulesResponseProtoMsg;
};
