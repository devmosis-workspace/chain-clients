import { GeneratedType, Registry } from "@cosmjs/proto-signing";
import { MsgScheduleAxelarCorkRequest, MsgRelayAxelarCorkRequest, MsgBumpAxelarCorkGasRequest, MsgCancelAxelarCorkRequest } from "./tx";
export const registry: ReadonlyArray<[string, GeneratedType]> = [["/axelarcork.v1.MsgScheduleAxelarCorkRequest", MsgScheduleAxelarCorkRequest], ["/axelarcork.v1.MsgRelayAxelarCorkRequest", MsgRelayAxelarCorkRequest], ["/axelarcork.v1.MsgBumpAxelarCorkGasRequest", MsgBumpAxelarCorkGasRequest], ["/axelarcork.v1.MsgCancelAxelarCorkRequest", MsgCancelAxelarCorkRequest]];
export const load = (protoRegistry: Registry) => {
  registry.forEach(([typeUrl, mod]) => {
    protoRegistry.register(typeUrl, mod);
  });
};
export const MessageComposer = {
  encoded: {
    scheduleCork(value: MsgScheduleAxelarCorkRequest) {
      return {
        typeUrl: "/axelarcork.v1.MsgScheduleAxelarCorkRequest",
        value: MsgScheduleAxelarCorkRequest.encode(value).finish()
      };
    },
    relayCork(value: MsgRelayAxelarCorkRequest) {
      return {
        typeUrl: "/axelarcork.v1.MsgRelayAxelarCorkRequest",
        value: MsgRelayAxelarCorkRequest.encode(value).finish()
      };
    },
    bumpCorkGas(value: MsgBumpAxelarCorkGasRequest) {
      return {
        typeUrl: "/axelarcork.v1.MsgBumpAxelarCorkGasRequest",
        value: MsgBumpAxelarCorkGasRequest.encode(value).finish()
      };
    },
    cancelScheduledCork(value: MsgCancelAxelarCorkRequest) {
      return {
        typeUrl: "/axelarcork.v1.MsgCancelAxelarCorkRequest",
        value: MsgCancelAxelarCorkRequest.encode(value).finish()
      };
    }
  },
  withTypeUrl: {
    scheduleCork(value: MsgScheduleAxelarCorkRequest) {
      return {
        typeUrl: "/axelarcork.v1.MsgScheduleAxelarCorkRequest",
        value
      };
    },
    relayCork(value: MsgRelayAxelarCorkRequest) {
      return {
        typeUrl: "/axelarcork.v1.MsgRelayAxelarCorkRequest",
        value
      };
    },
    bumpCorkGas(value: MsgBumpAxelarCorkGasRequest) {
      return {
        typeUrl: "/axelarcork.v1.MsgBumpAxelarCorkGasRequest",
        value
      };
    },
    cancelScheduledCork(value: MsgCancelAxelarCorkRequest) {
      return {
        typeUrl: "/axelarcork.v1.MsgCancelAxelarCorkRequest",
        value
      };
    }
  },
  fromJSON: {
    scheduleCork(value: any) {
      return {
        typeUrl: "/axelarcork.v1.MsgScheduleAxelarCorkRequest",
        value: MsgScheduleAxelarCorkRequest.fromJSON(value)
      };
    },
    relayCork(value: any) {
      return {
        typeUrl: "/axelarcork.v1.MsgRelayAxelarCorkRequest",
        value: MsgRelayAxelarCorkRequest.fromJSON(value)
      };
    },
    bumpCorkGas(value: any) {
      return {
        typeUrl: "/axelarcork.v1.MsgBumpAxelarCorkGasRequest",
        value: MsgBumpAxelarCorkGasRequest.fromJSON(value)
      };
    },
    cancelScheduledCork(value: any) {
      return {
        typeUrl: "/axelarcork.v1.MsgCancelAxelarCorkRequest",
        value: MsgCancelAxelarCorkRequest.fromJSON(value)
      };
    }
  },
  fromPartial: {
    scheduleCork(value: MsgScheduleAxelarCorkRequest) {
      return {
        typeUrl: "/axelarcork.v1.MsgScheduleAxelarCorkRequest",
        value: MsgScheduleAxelarCorkRequest.fromPartial(value)
      };
    },
    relayCork(value: MsgRelayAxelarCorkRequest) {
      return {
        typeUrl: "/axelarcork.v1.MsgRelayAxelarCorkRequest",
        value: MsgRelayAxelarCorkRequest.fromPartial(value)
      };
    },
    bumpCorkGas(value: MsgBumpAxelarCorkGasRequest) {
      return {
        typeUrl: "/axelarcork.v1.MsgBumpAxelarCorkGasRequest",
        value: MsgBumpAxelarCorkGasRequest.fromPartial(value)
      };
    },
    cancelScheduledCork(value: MsgCancelAxelarCorkRequest) {
      return {
        typeUrl: "/axelarcork.v1.MsgCancelAxelarCorkRequest",
        value: MsgCancelAxelarCorkRequest.fromPartial(value)
      };
    }
  }
};