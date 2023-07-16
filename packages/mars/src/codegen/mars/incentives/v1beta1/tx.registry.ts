import { GeneratedType, Registry } from "@cosmjs/proto-signing";
import { MsgCreateSchedule, MsgTerminateSchedules } from "./tx";
export const registry: ReadonlyArray<[string, GeneratedType]> = [["/mars.incentives.v1beta1.MsgCreateSchedule", MsgCreateSchedule], ["/mars.incentives.v1beta1.MsgTerminateSchedules", MsgTerminateSchedules]];
export const load = (protoRegistry: Registry) => {
  registry.forEach(([typeUrl, mod]) => {
    protoRegistry.register(typeUrl, mod);
  });
};
export const MessageComposer = {
  encoded: {
    createSchedule(value: MsgCreateSchedule) {
      return {
        typeUrl: "/mars.incentives.v1beta1.MsgCreateSchedule",
        value: MsgCreateSchedule.encode(value).finish()
      };
    },
    terminateSchedules(value: MsgTerminateSchedules) {
      return {
        typeUrl: "/mars.incentives.v1beta1.MsgTerminateSchedules",
        value: MsgTerminateSchedules.encode(value).finish()
      };
    }
  },
  withTypeUrl: {
    createSchedule(value: MsgCreateSchedule) {
      return {
        typeUrl: "/mars.incentives.v1beta1.MsgCreateSchedule",
        value
      };
    },
    terminateSchedules(value: MsgTerminateSchedules) {
      return {
        typeUrl: "/mars.incentives.v1beta1.MsgTerminateSchedules",
        value
      };
    }
  },
  fromJSON: {
    createSchedule(value: any) {
      return {
        typeUrl: "/mars.incentives.v1beta1.MsgCreateSchedule",
        value: MsgCreateSchedule.fromJSON(value)
      };
    },
    terminateSchedules(value: any) {
      return {
        typeUrl: "/mars.incentives.v1beta1.MsgTerminateSchedules",
        value: MsgTerminateSchedules.fromJSON(value)
      };
    }
  },
  fromPartial: {
    createSchedule(value: MsgCreateSchedule) {
      return {
        typeUrl: "/mars.incentives.v1beta1.MsgCreateSchedule",
        value: MsgCreateSchedule.fromPartial(value)
      };
    },
    terminateSchedules(value: MsgTerminateSchedules) {
      return {
        typeUrl: "/mars.incentives.v1beta1.MsgTerminateSchedules",
        value: MsgTerminateSchedules.fromPartial(value)
      };
    }
  }
};