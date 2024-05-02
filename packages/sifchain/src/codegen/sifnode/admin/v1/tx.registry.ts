import { GeneratedType, Registry } from "@cosmjs/proto-signing";
import { MsgAddAccount, MsgRemoveAccount, MsgSetParams } from "./tx";
export const registry: ReadonlyArray<[string, GeneratedType]> = [["/sifnode.admin.v1.MsgAddAccount", MsgAddAccount], ["/sifnode.admin.v1.MsgRemoveAccount", MsgRemoveAccount], ["/sifnode.admin.v1.MsgSetParams", MsgSetParams]];
export const load = (protoRegistry: Registry) => {
  registry.forEach(([typeUrl, mod]) => {
    protoRegistry.register(typeUrl, mod);
  });
};
export const MessageComposer = {
  encoded: {
    addAccount(value: MsgAddAccount) {
      return {
        typeUrl: "/sifnode.admin.v1.MsgAddAccount",
        value: MsgAddAccount.encode(value).finish()
      };
    },
    removeAccount(value: MsgRemoveAccount) {
      return {
        typeUrl: "/sifnode.admin.v1.MsgRemoveAccount",
        value: MsgRemoveAccount.encode(value).finish()
      };
    },
    setParams(value: MsgSetParams) {
      return {
        typeUrl: "/sifnode.admin.v1.MsgSetParams",
        value: MsgSetParams.encode(value).finish()
      };
    }
  },
  withTypeUrl: {
    addAccount(value: MsgAddAccount) {
      return {
        typeUrl: "/sifnode.admin.v1.MsgAddAccount",
        value
      };
    },
    removeAccount(value: MsgRemoveAccount) {
      return {
        typeUrl: "/sifnode.admin.v1.MsgRemoveAccount",
        value
      };
    },
    setParams(value: MsgSetParams) {
      return {
        typeUrl: "/sifnode.admin.v1.MsgSetParams",
        value
      };
    }
  },
  fromJSON: {
    addAccount(value: any) {
      return {
        typeUrl: "/sifnode.admin.v1.MsgAddAccount",
        value: MsgAddAccount.fromJSON(value)
      };
    },
    removeAccount(value: any) {
      return {
        typeUrl: "/sifnode.admin.v1.MsgRemoveAccount",
        value: MsgRemoveAccount.fromJSON(value)
      };
    },
    setParams(value: any) {
      return {
        typeUrl: "/sifnode.admin.v1.MsgSetParams",
        value: MsgSetParams.fromJSON(value)
      };
    }
  },
  fromPartial: {
    addAccount(value: MsgAddAccount) {
      return {
        typeUrl: "/sifnode.admin.v1.MsgAddAccount",
        value: MsgAddAccount.fromPartial(value)
      };
    },
    removeAccount(value: MsgRemoveAccount) {
      return {
        typeUrl: "/sifnode.admin.v1.MsgRemoveAccount",
        value: MsgRemoveAccount.fromPartial(value)
      };
    },
    setParams(value: MsgSetParams) {
      return {
        typeUrl: "/sifnode.admin.v1.MsgSetParams",
        value: MsgSetParams.fromPartial(value)
      };
    }
  }
};