import { GeneratedType, Registry } from "@cosmjs/proto-signing";
import { MsgUnlock } from "./tx";
export const registry: ReadonlyArray<[string, GeneratedType]> = [["/shentu.auth.v1alpha1.MsgUnlock", MsgUnlock]];
export const load = (protoRegistry: Registry) => {
  registry.forEach(([typeUrl, mod]) => {
    protoRegistry.register(typeUrl, mod);
  });
};
export const MessageComposer = {
  encoded: {
    unlock(value: MsgUnlock) {
      return {
        typeUrl: "/shentu.auth.v1alpha1.MsgUnlock",
        value: MsgUnlock.encode(value).finish()
      };
    }
  },
  withTypeUrl: {
    unlock(value: MsgUnlock) {
      return {
        typeUrl: "/shentu.auth.v1alpha1.MsgUnlock",
        value
      };
    }
  },
  fromJSON: {
    unlock(value: any) {
      return {
        typeUrl: "/shentu.auth.v1alpha1.MsgUnlock",
        value: MsgUnlock.fromJSON(value)
      };
    }
  },
  fromPartial: {
    unlock(value: MsgUnlock) {
      return {
        typeUrl: "/shentu.auth.v1alpha1.MsgUnlock",
        value: MsgUnlock.fromPartial(value)
      };
    }
  }
};