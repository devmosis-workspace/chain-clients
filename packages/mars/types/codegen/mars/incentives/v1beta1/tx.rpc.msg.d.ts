import { Rpc } from "../../../helpers";
import { MsgCreateSchedule, MsgCreateScheduleResponse, MsgTerminateSchedules, MsgTerminateSchedulesResponse } from "./tx";
/** Msg defines the incentives module's Msg service */
export interface Msg {
    /**
     * CreateSchedule is a governance operation for creating a new incentives
     * schedule.
     */
    createSchedule(request: MsgCreateSchedule): Promise<MsgCreateScheduleResponse>;
    /**
     * TerminateSchedule is a governance operation for terminating one or more
     * existing incentives schedules.
     */
    terminateSchedules(request: MsgTerminateSchedules): Promise<MsgTerminateSchedulesResponse>;
}
export declare class MsgClientImpl implements Msg {
    private readonly rpc;
    constructor(rpc: Rpc);
    createSchedule(request: MsgCreateSchedule): Promise<MsgCreateScheduleResponse>;
    terminateSchedules(request: MsgTerminateSchedules): Promise<MsgTerminateSchedulesResponse>;
}
