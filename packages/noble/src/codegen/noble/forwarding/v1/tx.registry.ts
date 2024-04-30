import { GeneratedType, Registry } from "@cosmjs/proto-signing";
import { MsgRegisterAccount, MsgClearAccount } from "./tx";
export const registry: ReadonlyArray<[string, GeneratedType]> = [["/noble.forwarding.v1.noble.forwarding.v1.MsgRegisterAccount", noble.forwarding.v1.MsgRegisterAccount], ["/noble.forwarding.v1.noble.forwarding.v1.MsgClearAccount", noble.forwarding.v1.MsgClearAccount]];
export const load = (protoRegistry: Registry) => {
  registry.forEach(([typeUrl, mod]) => {
    protoRegistry.register(typeUrl, mod);
  });
};
export const MessageComposer = {
  encoded: {
    registerAccount(value: noble.forwarding.v1.MsgRegisterAccount) {
      return {
        typeUrl: "/noble.forwarding.v1.noble.forwarding.v1.MsgRegisterAccount",
        value: noble.forwarding.v1.MsgRegisterAccount.encode(value).finish()
      };
    },
    clearAccount(value: noble.forwarding.v1.MsgClearAccount) {
      return {
        typeUrl: "/noble.forwarding.v1.noble.forwarding.v1.MsgClearAccount",
        value: noble.forwarding.v1.MsgClearAccount.encode(value).finish()
      };
    }
  },
  withTypeUrl: {
    registerAccount(value: noble.forwarding.v1.MsgRegisterAccount) {
      return {
        typeUrl: "/noble.forwarding.v1.noble.forwarding.v1.MsgRegisterAccount",
        value
      };
    },
    clearAccount(value: noble.forwarding.v1.MsgClearAccount) {
      return {
        typeUrl: "/noble.forwarding.v1.noble.forwarding.v1.MsgClearAccount",
        value
      };
    }
  },
  fromJSON: {
    registerAccount(value: any) {
      return {
        typeUrl: "/noble.forwarding.v1.noble.forwarding.v1.MsgRegisterAccount",
        value: noble.forwarding.v1.MsgRegisterAccount.fromJSON(value)
      };
    },
    clearAccount(value: any) {
      return {
        typeUrl: "/noble.forwarding.v1.noble.forwarding.v1.MsgClearAccount",
        value: noble.forwarding.v1.MsgClearAccount.fromJSON(value)
      };
    }
  },
  fromPartial: {
    registerAccount(value: noble.forwarding.v1.MsgRegisterAccount) {
      return {
        typeUrl: "/noble.forwarding.v1.noble.forwarding.v1.MsgRegisterAccount",
        value: noble.forwarding.v1.MsgRegisterAccount.fromPartial(value)
      };
    },
    clearAccount(value: noble.forwarding.v1.MsgClearAccount) {
      return {
        typeUrl: "/noble.forwarding.v1.noble.forwarding.v1.MsgClearAccount",
        value: noble.forwarding.v1.MsgClearAccount.fromPartial(value)
      };
    }
  }
};