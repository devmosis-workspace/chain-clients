import { GeneratedType, Registry } from "@cosmjs/proto-signing";
import { MsgFundCommunityPool, MsgUpdateParams } from "./tx";
export const registry: ReadonlyArray<[string, GeneratedType]> = [["/kava.community.v1beta1.MsgFundCommunityPool", MsgFundCommunityPool], ["/kava.community.v1beta1.MsgUpdateParams", MsgUpdateParams]];
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
    },
    updateParams(value: MsgUpdateParams) {
      return {
        typeUrl: "/kava.community.v1beta1.MsgUpdateParams",
        value: MsgUpdateParams.encode(value).finish()
      };
    }
  },
  withTypeUrl: {
    fundCommunityPool(value: MsgFundCommunityPool) {
      return {
        typeUrl: "/kava.community.v1beta1.MsgFundCommunityPool",
        value
      };
    },
    updateParams(value: MsgUpdateParams) {
      return {
        typeUrl: "/kava.community.v1beta1.MsgUpdateParams",
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
    },
    updateParams(value: any) {
      return {
        typeUrl: "/kava.community.v1beta1.MsgUpdateParams",
        value: MsgUpdateParams.fromJSON(value)
      };
    }
  },
  fromPartial: {
    fundCommunityPool(value: MsgFundCommunityPool) {
      return {
        typeUrl: "/kava.community.v1beta1.MsgFundCommunityPool",
        value: MsgFundCommunityPool.fromPartial(value)
      };
    },
    updateParams(value: MsgUpdateParams) {
      return {
        typeUrl: "/kava.community.v1beta1.MsgUpdateParams",
        value: MsgUpdateParams.fromPartial(value)
      };
    }
  }
};