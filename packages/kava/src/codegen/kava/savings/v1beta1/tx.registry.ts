import { GeneratedType, Registry } from "@cosmjs/proto-signing";
import { MsgDeposit, MsgWithdraw } from "./tx";
export const registry: ReadonlyArray<[string, GeneratedType]> = [["/kava.savings.v1beta1.MsgDeposit", MsgDeposit], ["/kava.savings.v1beta1.MsgWithdraw", MsgWithdraw]];
export const load = (protoRegistry: Registry) => {
  registry.forEach(([typeUrl, mod]) => {
    protoRegistry.register(typeUrl, mod);
  });
};
export const MessageComposer = {
  encoded: {
    deposit(value: MsgDeposit) {
      return {
        typeUrl: "/kava.savings.v1beta1.MsgDeposit",
        value: MsgDeposit.encode(value).finish()
      };
    },
    withdraw(value: MsgWithdraw) {
      return {
        typeUrl: "/kava.savings.v1beta1.MsgWithdraw",
        value: MsgWithdraw.encode(value).finish()
      };
    }
  },
  withTypeUrl: {
    deposit(value: MsgDeposit) {
      return {
        typeUrl: "/kava.savings.v1beta1.MsgDeposit",
        value
      };
    },
    withdraw(value: MsgWithdraw) {
      return {
        typeUrl: "/kava.savings.v1beta1.MsgWithdraw",
        value
      };
    }
  },
  fromJSON: {
    deposit(value: any) {
      return {
        typeUrl: "/kava.savings.v1beta1.MsgDeposit",
        value: MsgDeposit.fromJSON(value)
      };
    },
    withdraw(value: any) {
      return {
        typeUrl: "/kava.savings.v1beta1.MsgWithdraw",
        value: MsgWithdraw.fromJSON(value)
      };
    }
  },
  fromPartial: {
    deposit(value: MsgDeposit) {
      return {
        typeUrl: "/kava.savings.v1beta1.MsgDeposit",
        value: MsgDeposit.fromPartial(value)
      };
    },
    withdraw(value: MsgWithdraw) {
      return {
        typeUrl: "/kava.savings.v1beta1.MsgWithdraw",
        value: MsgWithdraw.fromPartial(value)
      };
    }
  }
};