import { MsgCreateSchedule, MsgTerminateSchedules } from "./tx";
export const AminoConverter = {
  "/mars.incentives.v1beta1.MsgCreateSchedule": {
    aminoType: "/mars.incentives.v1beta1.MsgCreateSchedule",
    toAmino: MsgCreateSchedule.toAmino,
    fromAmino: MsgCreateSchedule.fromAmino
  },
  "/mars.incentives.v1beta1.MsgTerminateSchedules": {
    aminoType: "/mars.incentives.v1beta1.MsgTerminateSchedules",
    toAmino: MsgTerminateSchedules.toAmino,
    fromAmino: MsgTerminateSchedules.fromAmino
  }
};