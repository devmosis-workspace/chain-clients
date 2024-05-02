import { GeneratedType, Registry } from "@cosmjs/proto-signing";
import { MsgLockedSend } from "./tx";
export const registry: ReadonlyArray<[string, GeneratedType]> = [["/shentu.bank.v1alpha1.MsgLockedSend", MsgLockedSend]];
export const load = (protoRegistry: Registry) => {
  registry.forEach(([typeUrl, mod]) => {
    protoRegistry.register(typeUrl, mod);
  });
};
export const MessageComposer = {
  encoded: {
    lockedSend(value: MsgLockedSend) {
      return {
        typeUrl: "/shentu.bank.v1alpha1.MsgLockedSend",
        value: MsgLockedSend.encode(value).finish()
      };
    }
  },
  withTypeUrl: {
    lockedSend(value: MsgLockedSend) {
      return {
        typeUrl: "/shentu.bank.v1alpha1.MsgLockedSend",
        value
      };
    }
  },
  fromJSON: {
    lockedSend(value: any) {
      return {
        typeUrl: "/shentu.bank.v1alpha1.MsgLockedSend",
        value: MsgLockedSend.fromJSON(value)
      };
    }
  },
  fromPartial: {
    lockedSend(value: MsgLockedSend) {
      return {
        typeUrl: "/shentu.bank.v1alpha1.MsgLockedSend",
        value: MsgLockedSend.fromPartial(value)
      };
    }
  }
};