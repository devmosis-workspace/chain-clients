import { AminoMsg } from "@cosmjs/amino";
import { Long } from "../../../helpers";
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
export const AminoConverter = {
  "/mars.incentives.v1beta1.MsgCreateSchedule": {
    aminoType: "/mars.incentives.v1beta1.MsgCreateSchedule",
    toAmino: ({
      authority,
      startTime,
      endTime,
      amount
    }: MsgCreateSchedule): MsgCreateScheduleAminoType["value"] => {
      return {
        authority,
        start_time: startTime,
        end_time: endTime,
        amount: amount.map(el0 => ({
          denom: el0.denom,
          amount: el0.amount
        }))
      };
    },
    fromAmino: ({
      authority,
      start_time,
      end_time,
      amount
    }: MsgCreateScheduleAminoType["value"]): MsgCreateSchedule => {
      return {
        authority,
        startTime: start_time,
        endTime: end_time,
        amount: amount.map(el0 => ({
          denom: el0.denom,
          amount: el0.amount
        }))
      };
    }
  },
  "/mars.incentives.v1beta1.MsgTerminateSchedules": {
    aminoType: "/mars.incentives.v1beta1.MsgTerminateSchedules",
    toAmino: ({
      authority,
      ids
    }: MsgTerminateSchedules): MsgTerminateSchedulesAminoType["value"] => {
      return {
        authority,
        ids: ids.map(el0 => el0.toString())
      };
    },
    fromAmino: ({
      authority,
      ids
    }: MsgTerminateSchedulesAminoType["value"]): MsgTerminateSchedules => {
      return {
        authority,
        ids: ids.map(el0 => Long.fromString(el0))
      };
    }
  }
};