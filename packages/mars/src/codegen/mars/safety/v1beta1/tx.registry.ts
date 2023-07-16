import { GeneratedType, Registry } from "@cosmjs/proto-signing";
import { MsgSafetyFundSpend } from "./tx";
export const registry: ReadonlyArray<[string, GeneratedType]> = [["/mars.safety.v1beta1.MsgSafetyFundSpend", MsgSafetyFundSpend]];
export const load = (protoRegistry: Registry) => {
  registry.forEach(([typeUrl, mod]) => {
    protoRegistry.register(typeUrl, mod);
  });
};
export const MessageComposer = {
  encoded: {
    safetyFundSpend(value: MsgSafetyFundSpend) {
      return {
        typeUrl: "/mars.safety.v1beta1.MsgSafetyFundSpend",
        value: MsgSafetyFundSpend.encode(value).finish()
      };
    }
  },
  withTypeUrl: {
    safetyFundSpend(value: MsgSafetyFundSpend) {
      return {
        typeUrl: "/mars.safety.v1beta1.MsgSafetyFundSpend",
        value
      };
    }
  },
  fromJSON: {
    safetyFundSpend(value: any) {
      return {
        typeUrl: "/mars.safety.v1beta1.MsgSafetyFundSpend",
        value: MsgSafetyFundSpend.fromJSON(value)
      };
    }
  },
  fromPartial: {
    safetyFundSpend(value: MsgSafetyFundSpend) {
      return {
        typeUrl: "/mars.safety.v1beta1.MsgSafetyFundSpend",
        value: MsgSafetyFundSpend.fromPartial(value)
      };
    }
  }
};