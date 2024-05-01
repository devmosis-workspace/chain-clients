import { GeneratedType, Registry } from "@cosmjs/proto-signing";
import { MsgInvestmint } from "./tx";
export const registry: ReadonlyArray<[string, GeneratedType]> = [["/cyber.resources.v1beta1.MsgInvestmint", MsgInvestmint]];
export const load = (protoRegistry: Registry) => {
  registry.forEach(([typeUrl, mod]) => {
    protoRegistry.register(typeUrl, mod);
  });
};
export const MessageComposer = {
  encoded: {
    investmint(value: MsgInvestmint) {
      return {
        typeUrl: "/cyber.resources.v1beta1.MsgInvestmint",
        value: MsgInvestmint.encode(value).finish()
      };
    }
  },
  withTypeUrl: {
    investmint(value: MsgInvestmint) {
      return {
        typeUrl: "/cyber.resources.v1beta1.MsgInvestmint",
        value
      };
    }
  },
  fromJSON: {
    investmint(value: any) {
      return {
        typeUrl: "/cyber.resources.v1beta1.MsgInvestmint",
        value: MsgInvestmint.fromJSON(value)
      };
    }
  },
  fromPartial: {
    investmint(value: MsgInvestmint) {
      return {
        typeUrl: "/cyber.resources.v1beta1.MsgInvestmint",
        value: MsgInvestmint.fromPartial(value)
      };
    }
  }
};