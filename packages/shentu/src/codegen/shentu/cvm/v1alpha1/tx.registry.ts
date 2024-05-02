import { GeneratedType, Registry } from "@cosmjs/proto-signing";
import { MsgCall, MsgDeploy } from "./tx";
export const registry: ReadonlyArray<[string, GeneratedType]> = [["/shentu.cvm.v1alpha1.MsgCall", MsgCall], ["/shentu.cvm.v1alpha1.MsgDeploy", MsgDeploy]];
export const load = (protoRegistry: Registry) => {
  registry.forEach(([typeUrl, mod]) => {
    protoRegistry.register(typeUrl, mod);
  });
};
export const MessageComposer = {
  encoded: {
    call(value: MsgCall) {
      return {
        typeUrl: "/shentu.cvm.v1alpha1.MsgCall",
        value: MsgCall.encode(value).finish()
      };
    },
    deploy(value: MsgDeploy) {
      return {
        typeUrl: "/shentu.cvm.v1alpha1.MsgDeploy",
        value: MsgDeploy.encode(value).finish()
      };
    }
  },
  withTypeUrl: {
    call(value: MsgCall) {
      return {
        typeUrl: "/shentu.cvm.v1alpha1.MsgCall",
        value
      };
    },
    deploy(value: MsgDeploy) {
      return {
        typeUrl: "/shentu.cvm.v1alpha1.MsgDeploy",
        value
      };
    }
  },
  fromJSON: {
    call(value: any) {
      return {
        typeUrl: "/shentu.cvm.v1alpha1.MsgCall",
        value: MsgCall.fromJSON(value)
      };
    },
    deploy(value: any) {
      return {
        typeUrl: "/shentu.cvm.v1alpha1.MsgDeploy",
        value: MsgDeploy.fromJSON(value)
      };
    }
  },
  fromPartial: {
    call(value: MsgCall) {
      return {
        typeUrl: "/shentu.cvm.v1alpha1.MsgCall",
        value: MsgCall.fromPartial(value)
      };
    },
    deploy(value: MsgDeploy) {
      return {
        typeUrl: "/shentu.cvm.v1alpha1.MsgDeploy",
        value: MsgDeploy.fromPartial(value)
      };
    }
  }
};