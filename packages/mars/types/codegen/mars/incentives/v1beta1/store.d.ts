import { Timestamp, TimestampSDKType } from "../../../google/protobuf/timestamp";
import { Coin, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { Long } from "../../../helpers";
import * as _m0 from "protobufjs/minimal";
/** Schedule defines the parameters of an incentives releasing schedule */
export interface Schedule {
    /** Id is the identifier of this incentives schedule */
    id: Long;
    /** StartTime is the UNIX timestamp of which this incentives schedule shall begin */
    startTime?: Timestamp;
    /** EndTime is the UNIX timestamp of which this incentives schedule shall finish */
    endTime?: Timestamp;
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
/** Schedule defines the parameters of an incentives releasing schedule */
export interface ScheduleSDKType {
    id: Long;
    start_time?: TimestampSDKType;
    end_time?: TimestampSDKType;
    total_amount: CoinSDKType[];
    released_amount: CoinSDKType[];
}
export declare const Schedule: {
    encode(message: Schedule, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): Schedule;
    fromPartial(object: Partial<Schedule>): Schedule;
};
