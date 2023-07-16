import { GeneratedType, Registry } from "@cosmjs/proto-signing";
import { MsgRegisterInterchainAccount, MsgSubmitTx } from "./tx";
export const registry: ReadonlyArray<[string, GeneratedType]> = [["/neutron.interchaintxs.v1.MsgRegisterInterchainAccount", MsgRegisterInterchainAccount], ["/neutron.interchaintxs.v1.MsgSubmitTx", MsgSubmitTx]];
export const load = (protoRegistry: Registry) => {
  registry.forEach(([typeUrl, mod]) => {
    protoRegistry.register(typeUrl, mod);
  });
};
export const MessageComposer = {
  encoded: {
    registerInterchainAccount(value: MsgRegisterInterchainAccount) {
      return {
        typeUrl: "/neutron.interchaintxs.v1.MsgRegisterInterchainAccount",
        value: MsgRegisterInterchainAccount.encode(value).finish()
      };
    },
    submitTx(value: MsgSubmitTx) {
      return {
        typeUrl: "/neutron.interchaintxs.v1.MsgSubmitTx",
        value: MsgSubmitTx.encode(value).finish()
      };
    }
  },
  withTypeUrl: {
    registerInterchainAccount(value: MsgRegisterInterchainAccount) {
      return {
        typeUrl: "/neutron.interchaintxs.v1.MsgRegisterInterchainAccount",
        value
      };
    },
    submitTx(value: MsgSubmitTx) {
      return {
        typeUrl: "/neutron.interchaintxs.v1.MsgSubmitTx",
        value
      };
    }
  },
  fromJSON: {
    registerInterchainAccount(value: any) {
      return {
        typeUrl: "/neutron.interchaintxs.v1.MsgRegisterInterchainAccount",
        value: MsgRegisterInterchainAccount.fromJSON(value)
      };
    },
    submitTx(value: any) {
      return {
        typeUrl: "/neutron.interchaintxs.v1.MsgSubmitTx",
        value: MsgSubmitTx.fromJSON(value)
      };
    }
  },
  fromPartial: {
    registerInterchainAccount(value: MsgRegisterInterchainAccount) {
      return {
        typeUrl: "/neutron.interchaintxs.v1.MsgRegisterInterchainAccount",
        value: MsgRegisterInterchainAccount.fromPartial(value)
      };
    },
    submitTx(value: MsgSubmitTx) {
      return {
        typeUrl: "/neutron.interchaintxs.v1.MsgSubmitTx",
        value: MsgSubmitTx.fromPartial(value)
      };
    }
  }
};