import { GeneratedType, Registry } from "@cosmjs/proto-signing";
import { MsgClaim } from "./tx";
export const registry: ReadonlyArray<[string, GeneratedType]> = [["/passage3d.claim.v1beta1.MsgClaim", MsgClaim]];
export const load = (protoRegistry: Registry) => {
  registry.forEach(([typeUrl, mod]) => {
    protoRegistry.register(typeUrl, mod);
  });
};
export const MessageComposer = {
  encoded: {
    claim(value: MsgClaim) {
      return {
        typeUrl: "/passage3d.claim.v1beta1.MsgClaim",
        value: MsgClaim.encode(value).finish()
      };
    }
  },
  withTypeUrl: {
    claim(value: MsgClaim) {
      return {
        typeUrl: "/passage3d.claim.v1beta1.MsgClaim",
        value
      };
    }
  },
  fromJSON: {
    claim(value: any) {
      return {
        typeUrl: "/passage3d.claim.v1beta1.MsgClaim",
        value: MsgClaim.fromJSON(value)
      };
    }
  },
  fromPartial: {
    claim(value: MsgClaim) {
      return {
        typeUrl: "/passage3d.claim.v1beta1.MsgClaim",
        value: MsgClaim.fromPartial(value)
      };
    }
  }
};