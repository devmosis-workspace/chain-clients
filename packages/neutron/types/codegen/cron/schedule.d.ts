import { Long } from "../helpers";
import * as _m0 from "protobufjs/minimal";
export interface Schedule {
    /** Name of schedule */
    name: string;
    /** Period in blocks */
    period: Long;
    /** Msgs that will be executed every period amount of time */
    msgs: MsgExecuteContract[];
    /** Last execution's block height */
    lastExecuteHeight: Long;
}
export interface ScheduleSDKType {
    name: string;
    period: Long;
    msgs: MsgExecuteContractSDKType[];
    last_execute_height: Long;
}
export interface MsgExecuteContract {
    /** Contract is the address of the smart contract */
    contract: string;
    /** Msg is json encoded message to be passed to the contract */
    msg: string;
}
export interface MsgExecuteContractSDKType {
    contract: string;
    msg: string;
}
export interface ScheduleCount {
    /** Count is the number of current schedules */
    count: number;
}
export interface ScheduleCountSDKType {
    count: number;
}
export declare const Schedule: {
    encode(message: Schedule, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): Schedule;
    fromPartial(object: Partial<Schedule>): Schedule;
};
export declare const MsgExecuteContract: {
    encode(message: MsgExecuteContract, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): MsgExecuteContract;
    fromPartial(object: Partial<MsgExecuteContract>): MsgExecuteContract;
};
export declare const ScheduleCount: {
    encode(message: ScheduleCount, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): ScheduleCount;
    fromPartial(object: Partial<ScheduleCount>): ScheduleCount;
};
