import { GeneratedType, Registry } from "@cosmjs/proto-signing";
import { MsgFundCommunityPool } from "./tx";
export const registry: ReadonlyArray<[string, GeneratedType]> = [["/kava.community.v1beta1.MsgFundCommunityPool", MsgFundCommunityPool]];
export const load = (protoRegistry: Registry) => {
  registry.forEach(([typeUrl, mod]) => {
    protoRegistry.register(typeUrl, mod);
  });
};
export const MessageComposer = {
  encoded: {
    fundCommunityPool(value: MsgFundCommunityPool) {
      return {
        typeUrl: "/kava.community.v1beta1.MsgFundCommunityPool",
        value: MsgFundCommunityPool.encode(value).finish()
      };
    }
  },
  withTypeUrl: {
    fundCommunityPool(value: MsgFundCommunityPool) {
      return {
        typeUrl: "/kava.community.v1beta1.MsgFundCommunityPool",
        value
      };
    }
  },
  fromJSON: {
    fundCommunityPool(value: any) {
      return {
        typeUrl: "/kava.community.v1beta1.MsgFundCommunityPool",
        value: MsgFundCommunityPool.fromJSON(value)
      };
    }
  },
  fromPartial: {
    fundCommunityPool(value: MsgFundCommunityPool) {
      return {
        typeUrl: "/kava.community.v1beta1.MsgFundCommunityPool",
        value: MsgFundCommunityPool.fromPartial(value)
      };
    }
  }
};