import { MsgCreateSchedule, MsgTerminateSchedules } from "./tx";
export declare const AminoConverter: {
    "/mars.incentives.v1beta1.MsgCreateSchedule": {
        aminoType: string;
        toAmino: (message: MsgCreateSchedule) => import("./tx").MsgCreateScheduleAmino;
        fromAmino: (object: import("./tx").MsgCreateScheduleAmino) => MsgCreateSchedule;
    };
    "/mars.incentives.v1beta1.MsgTerminateSchedules": {
        aminoType: string;
        toAmino: (message: MsgTerminateSchedules) => import("./tx").MsgTerminateSchedulesAmino;
        fromAmino: (object: import("./tx").MsgTerminateSchedulesAmino) => MsgTerminateSchedules;
    };
};
