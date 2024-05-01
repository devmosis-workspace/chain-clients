import { GeneratedType, Registry } from "@cosmjs/proto-signing";
import { MsgClaim, MsgIncentivePoolSpend } from "./messages";
export const registry: ReadonlyArray<[string, GeneratedType]> = [["/quicksilver.airdrop.v1.MsgClaim", MsgClaim], ["/quicksilver.airdrop.v1.MsgIncentivePoolSpend", MsgIncentivePoolSpend]];
export const load = (protoRegistry: Registry) => {
  registry.forEach(([typeUrl, mod]) => {
    protoRegistry.register(typeUrl, mod);
  });
};
export const MessageComposer = {
  encoded: {
    claim(value: MsgClaim) {
      return {
        typeUrl: "/quicksilver.airdrop.v1.MsgClaim",
        value: MsgClaim.encode(value).finish()
      };
    },
    incentivePoolSpend(value: MsgIncentivePoolSpend) {
      return {
        typeUrl: "/quicksilver.airdrop.v1.MsgIncentivePoolSpend",
        value: MsgIncentivePoolSpend.encode(value).finish()
      };
    }
  },
  withTypeUrl: {
    claim(value: MsgClaim) {
      return {
        typeUrl: "/quicksilver.airdrop.v1.MsgClaim",
        value
      };
    },
    incentivePoolSpend(value: MsgIncentivePoolSpend) {
      return {
        typeUrl: "/quicksilver.airdrop.v1.MsgIncentivePoolSpend",
        value
      };
    }
  },
  fromJSON: {
    claim(value: any) {
      return {
        typeUrl: "/quicksilver.airdrop.v1.MsgClaim",
        value: MsgClaim.fromJSON(value)
      };
    },
    incentivePoolSpend(value: any) {
      return {
        typeUrl: "/quicksilver.airdrop.v1.MsgIncentivePoolSpend",
        value: MsgIncentivePoolSpend.fromJSON(value)
      };
    }
  },
  fromPartial: {
    claim(value: MsgClaim) {
      return {
        typeUrl: "/quicksilver.airdrop.v1.MsgClaim",
        value: MsgClaim.fromPartial(value)
      };
    },
    incentivePoolSpend(value: MsgIncentivePoolSpend) {
      return {
        typeUrl: "/quicksilver.airdrop.v1.MsgIncentivePoolSpend",
        value: MsgIncentivePoolSpend.fromPartial(value)
      };
    }
  }
};