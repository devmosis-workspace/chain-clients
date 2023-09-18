import { Rpc } from "../../../helpers";
import { BinaryReader } from "../../../binary";
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
export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.createSchedule = this.createSchedule.bind(this);
    this.terminateSchedules = this.terminateSchedules.bind(this);
  }
  createSchedule(request: MsgCreateSchedule): Promise<MsgCreateScheduleResponse> {
    const data = MsgCreateSchedule.encode(request).finish();
    const promise = this.rpc.request("mars.incentives.v1beta1.Msg", "CreateSchedule", data);
    return promise.then(data => MsgCreateScheduleResponse.decode(new BinaryReader(data)));
  }
  terminateSchedules(request: MsgTerminateSchedules): Promise<MsgTerminateSchedulesResponse> {
    const data = MsgTerminateSchedules.encode(request).finish();
    const promise = this.rpc.request("mars.incentives.v1beta1.Msg", "TerminateSchedules", data);
    return promise.then(data => MsgTerminateSchedulesResponse.decode(new BinaryReader(data)));
  }
}