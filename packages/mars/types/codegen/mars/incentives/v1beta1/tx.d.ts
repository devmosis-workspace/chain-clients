import { Timestamp, TimestampSDKType } from "../../../google/protobuf/timestamp";
import { Coin, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { Long } from "../../../helpers";
import * as _m0 from "protobufjs/minimal";
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
    startTime?: Timestamp;
    /** EndTime is the timestamp at which this incentives schedule shall finish. */
    endTime?: Timestamp;
    /**
     * Amount is the total amount of coins that shall be released to stakers
     * throughout the span of this incentives schedule.
     */
    amount: Coin[];
}
/**
 * MsgCreateSchedule defines the message for creating a new incentives schedule.
 *
 * This message is typically executed via a governance proposal with the gov
 * module being the executing authority.
 */
export interface MsgCreateScheduleSDKType {
    authority: string;
    start_time?: TimestampSDKType;
    end_time?: TimestampSDKType;
    amount: CoinSDKType[];
}
/**
 * MsgCreateScheduleResponse defines the response to executing a
 * MsgCreateSchedule message.
 */
export interface MsgCreateScheduleResponse {
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
    ids: Long[];
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
    ids: Long[];
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
/**
 * MsgTerminateSchedulesResponse defines the response to executing a
 * MsgTerminateSchedules message.
 */
export interface MsgTerminateSchedulesResponseSDKType {
    refunded_amount: CoinSDKType[];
}
export declare const MsgCreateSchedule: {
    encode(message: MsgCreateSchedule, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): MsgCreateSchedule;
    fromPartial(object: Partial<MsgCreateSchedule>): MsgCreateSchedule;
};
export declare const MsgCreateScheduleResponse: {
    encode(_: MsgCreateScheduleResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(_: any): MsgCreateScheduleResponse;
    fromPartial(_: Partial<MsgCreateScheduleResponse>): MsgCreateScheduleResponse;
};
export declare const MsgTerminateSchedules: {
    encode(message: MsgTerminateSchedules, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): MsgTerminateSchedules;
    fromPartial(object: Partial<MsgTerminateSchedules>): MsgTerminateSchedules;
};
export declare const MsgTerminateSchedulesResponse: {
    encode(message: MsgTerminateSchedulesResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): MsgTerminateSchedulesResponse;
    fromPartial(object: Partial<MsgTerminateSchedulesResponse>): MsgTerminateSchedulesResponse;
};
