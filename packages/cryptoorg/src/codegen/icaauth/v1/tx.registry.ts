import { GeneratedType, Registry } from "@cosmjs/proto-signing";
import { MsgRegisterAccount, MsgSubmitTx } from "./tx";
export const registry: ReadonlyArray<[string, GeneratedType]> = [["/chainmain.icaauth.v1.MsgRegisterAccount", MsgRegisterAccount], ["/chainmain.icaauth.v1.MsgSubmitTx", MsgSubmitTx]];
export const load = (protoRegistry: Registry) => {
  registry.forEach(([typeUrl, mod]) => {
    protoRegistry.register(typeUrl, mod);
  });
};
export const MessageComposer = {
  encoded: {
    registerAccount(value: MsgRegisterAccount) {
      return {
        typeUrl: "/chainmain.icaauth.v1.MsgRegisterAccount",
        value: MsgRegisterAccount.encode(value).finish()
      };
    },
    submitTx(value: MsgSubmitTx) {
      return {
        typeUrl: "/chainmain.icaauth.v1.MsgSubmitTx",
        value: MsgSubmitTx.encode(value).finish()
      };
    }
  },
  withTypeUrl: {
    registerAccount(value: MsgRegisterAccount) {
      return {
        typeUrl: "/chainmain.icaauth.v1.MsgRegisterAccount",
        value
      };
    },
    submitTx(value: MsgSubmitTx) {
      return {
        typeUrl: "/chainmain.icaauth.v1.MsgSubmitTx",
        value
      };
    }
  },
  fromJSON: {
    registerAccount(value: any) {
      return {
        typeUrl: "/chainmain.icaauth.v1.MsgRegisterAccount",
        value: MsgRegisterAccount.fromJSON(value)
      };
    },
    submitTx(value: any) {
      return {
        typeUrl: "/chainmain.icaauth.v1.MsgSubmitTx",
        value: MsgSubmitTx.fromJSON(value)
      };
    }
  },
  fromPartial: {
    registerAccount(value: MsgRegisterAccount) {
      return {
        typeUrl: "/chainmain.icaauth.v1.MsgRegisterAccount",
        value: MsgRegisterAccount.fromPartial(value)
      };
    },
    submitTx(value: MsgSubmitTx) {
      return {
        typeUrl: "/chainmain.icaauth.v1.MsgSubmitTx",
        value: MsgSubmitTx.fromPartial(value)
      };
    }
  }
};