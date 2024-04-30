import { GeneratedType, Registry } from "@cosmjs/proto-signing";
import { MsgCreateVestingAccount } from "./tx";
export const registry: ReadonlyArray<[string, GeneratedType]> = [["/quasarlabs.quasarnode.qvesting.MsgCreateVestingAccount", MsgCreateVestingAccount]];
export const load = (protoRegistry: Registry) => {
  registry.forEach(([typeUrl, mod]) => {
    protoRegistry.register(typeUrl, mod);
  });
};
export const MessageComposer = {
  encoded: {
    createVestingAccount(value: MsgCreateVestingAccount) {
      return {
        typeUrl: "/quasarlabs.quasarnode.qvesting.MsgCreateVestingAccount",
        value: MsgCreateVestingAccount.encode(value).finish()
      };
    }
  },
  withTypeUrl: {
    createVestingAccount(value: MsgCreateVestingAccount) {
      return {
        typeUrl: "/quasarlabs.quasarnode.qvesting.MsgCreateVestingAccount",
        value
      };
    }
  },
  fromJSON: {
    createVestingAccount(value: any) {
      return {
        typeUrl: "/quasarlabs.quasarnode.qvesting.MsgCreateVestingAccount",
        value: MsgCreateVestingAccount.fromJSON(value)
      };
    }
  },
  fromPartial: {
    createVestingAccount(value: MsgCreateVestingAccount) {
      return {
        typeUrl: "/quasarlabs.quasarnode.qvesting.MsgCreateVestingAccount",
        value: MsgCreateVestingAccount.fromPartial(value)
      };
    }
  }
};