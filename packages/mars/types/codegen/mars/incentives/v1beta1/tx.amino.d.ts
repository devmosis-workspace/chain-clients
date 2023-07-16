import { AminoMsg } from "@cosmjs/amino";
import { MsgCreateSchedule, MsgTerminateSchedules } from "./tx";
export interface MsgCreateScheduleAminoType extends AminoMsg {
    type: "/mars.incentives.v1beta1.MsgCreateSchedule";
    value: {
        authority: string;
        start_time: {
            seconds: string;
            nanos: number;
        };
        end_time: {
            seconds: string;
            nanos: number;
        };
        amount: {
            denom: string;
            amount: string;
        }[];
    };
}
export interface MsgTerminateSchedulesAminoType extends AminoMsg {
    type: "/mars.incentives.v1beta1.MsgTerminateSchedules";
    value: {
        authority: string;
        ids: string[];
    };
}
export declare const AminoConverter: {
    "/mars.incentives.v1beta1.MsgCreateSchedule": {
        aminoType: string;
        toAmino: ({ authority, startTime, endTime, amount }: MsgCreateSchedule) => MsgCreateScheduleAminoType["value"];
        fromAmino: ({ authority, start_time, end_time, amount }: MsgCreateScheduleAminoType["value"]) => MsgCreateSchedule;
    };
    "/mars.incentives.v1beta1.MsgTerminateSchedules": {
        aminoType: string;
        toAmino: ({ authority, ids }: MsgTerminateSchedules) => MsgTerminateSchedulesAminoType["value"];
        fromAmino: ({ authority, ids }: MsgTerminateSchedulesAminoType["value"]) => MsgTerminateSchedules;
    };
};
