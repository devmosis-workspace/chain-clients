import { Timestamp, TimestampAmino, TimestampSDKType } from "../../../google/protobuf/timestamp";
import { Coin, CoinAmino, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { BinaryWriter } from "../../../binary";
/** Schedule defines the parameters of an incentives releasing schedule */
export interface Schedule {
    /** Id is the identifier of this incentives schedule */
    id: bigint;
    /** StartTime is the UNIX timestamp of which this incentives schedule shall begin */
    startTime: Timestamp;
    /** EndTime is the UNIX timestamp of which this incentives schedule shall finish */
    endTime: Timestamp;
    /**
     * TotalAmount is the total amount of coins that shall be released to stakers
     * throughout the span of this incentives schedule
     */
    totalAmount: Coin[];
    /**
     * ReleasedAmount is the amount of coins that have already been released to
     * the stakers as part of this incentives schedule
     */
    releasedAmount: Coin[];
}
export interface ScheduleProtoMsg {
    typeUrl: "/mars.incentives.v1beta1.Schedule";
    value: Uint8Array;
}
/** Schedule defines the parameters of an incentives releasing schedule */
export interface ScheduleAmino {
    /** Id is the identifier of this incentives schedule */
    id: string;
    /** StartTime is the UNIX timestamp of which this incentives schedule shall begin */
    start_time?: TimestampAmino;
    /** EndTime is the UNIX timestamp of which this incentives schedule shall finish */
    end_time?: TimestampAmino;
    /**
     * TotalAmount is the total amount of coins that shall be released to stakers
     * throughout the span of this incentives schedule
     */
    total_amount: CoinAmino[];
    /**
     * ReleasedAmount is the amount of coins that have already been released to
     * the stakers as part of this incentives schedule
     */
    released_amount: CoinAmino[];
}
export interface ScheduleAminoMsg {
    type: "/mars.incentives.v1beta1.Schedule";
    value: ScheduleAmino;
}
/** Schedule defines the parameters of an incentives releasing schedule */
export interface ScheduleSDKType {
    id: bigint;
    start_time: TimestampSDKType;
    end_time: TimestampSDKType;
    total_amount: CoinSDKType[];
    released_amount: CoinSDKType[];
}
export declare const Schedule: {
    typeUrl: string;
    encode(message: Schedule, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): Schedule;
    fromPartial(object: Partial<Schedule>): Schedule;
    fromAmino(object: ScheduleAmino): Schedule;
    toAmino(message: Schedule): ScheduleAmino;
    fromAminoMsg(object: ScheduleAminoMsg): Schedule;
    fromProtoMsg(message: ScheduleProtoMsg): Schedule;
    toProto(message: Schedule): Uint8Array;
    toProtoMsg(message: Schedule): ScheduleProtoMsg;
};
