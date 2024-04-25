import { GeneratedType, Registry } from "@cosmjs/proto-signing";
import { MsgRegisterClockContract, MsgUnregisterClockContract, MsgUnjailClockContract, MsgUpdateParams } from "./tx";
export const registry: ReadonlyArray<[string, GeneratedType]> = [["/juno.clock.v1.MsgRegisterClockContract", MsgRegisterClockContract], ["/juno.clock.v1.MsgUnregisterClockContract", MsgUnregisterClockContract], ["/juno.clock.v1.MsgUnjailClockContract", MsgUnjailClockContract], ["/juno.clock.v1.MsgUpdateParams", MsgUpdateParams]];
export const load = (protoRegistry: Registry) => {
  registry.forEach(([typeUrl, mod]) => {
    protoRegistry.register(typeUrl, mod);
  });
};
export const MessageComposer = {
  encoded: {
    registerClockContract(value: MsgRegisterClockContract) {
      return {
        typeUrl: "/juno.clock.v1.MsgRegisterClockContract",
        value: MsgRegisterClockContract.encode(value).finish()
      };
    },
    unregisterClockContract(value: MsgUnregisterClockContract) {
      return {
        typeUrl: "/juno.clock.v1.MsgUnregisterClockContract",
        value: MsgUnregisterClockContract.encode(value).finish()
      };
    },
    unjailClockContract(value: MsgUnjailClockContract) {
      return {
        typeUrl: "/juno.clock.v1.MsgUnjailClockContract",
        value: MsgUnjailClockContract.encode(value).finish()
      };
    },
    updateParams(value: MsgUpdateParams) {
      return {
        typeUrl: "/juno.clock.v1.MsgUpdateParams",
        value: MsgUpdateParams.encode(value).finish()
      };
    }
  },
  withTypeUrl: {
    registerClockContract(value: MsgRegisterClockContract) {
      return {
        typeUrl: "/juno.clock.v1.MsgRegisterClockContract",
        value
      };
    },
    unregisterClockContract(value: MsgUnregisterClockContract) {
      return {
        typeUrl: "/juno.clock.v1.MsgUnregisterClockContract",
        value
      };
    },
    unjailClockContract(value: MsgUnjailClockContract) {
      return {
        typeUrl: "/juno.clock.v1.MsgUnjailClockContract",
        value
      };
    },
    updateParams(value: MsgUpdateParams) {
      return {
        typeUrl: "/juno.clock.v1.MsgUpdateParams",
        value
      };
    }
  },
  fromJSON: {
    registerClockContract(value: any) {
      return {
        typeUrl: "/juno.clock.v1.MsgRegisterClockContract",
        value: MsgRegisterClockContract.fromJSON(value)
      };
    },
    unregisterClockContract(value: any) {
      return {
        typeUrl: "/juno.clock.v1.MsgUnregisterClockContract",
        value: MsgUnregisterClockContract.fromJSON(value)
      };
    },
    unjailClockContract(value: any) {
      return {
        typeUrl: "/juno.clock.v1.MsgUnjailClockContract",
        value: MsgUnjailClockContract.fromJSON(value)
      };
    },
    updateParams(value: any) {
      return {
        typeUrl: "/juno.clock.v1.MsgUpdateParams",
        value: MsgUpdateParams.fromJSON(value)
      };
    }
  },
  fromPartial: {
    registerClockContract(value: MsgRegisterClockContract) {
      return {
        typeUrl: "/juno.clock.v1.MsgRegisterClockContract",
        value: MsgRegisterClockContract.fromPartial(value)
      };
    },
    unregisterClockContract(value: MsgUnregisterClockContract) {
      return {
        typeUrl: "/juno.clock.v1.MsgUnregisterClockContract",
        value: MsgUnregisterClockContract.fromPartial(value)
      };
    },
    unjailClockContract(value: MsgUnjailClockContract) {
      return {
        typeUrl: "/juno.clock.v1.MsgUnjailClockContract",
        value: MsgUnjailClockContract.fromPartial(value)
      };
    },
    updateParams(value: MsgUpdateParams) {
      return {
        typeUrl: "/juno.clock.v1.MsgUpdateParams",
        value: MsgUpdateParams.fromPartial(value)
      };
    }
  }
};