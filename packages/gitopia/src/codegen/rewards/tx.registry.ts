import { GeneratedType, Registry } from "@cosmjs/proto-signing";
import { MsgClaim, MsgCreateReward, MsgUpdateParams } from "./tx";
export const registry: ReadonlyArray<[string, GeneratedType]> = [["/gitopia.gitopia.rewards.MsgClaim", MsgClaim], ["/gitopia.gitopia.rewards.MsgCreateReward", MsgCreateReward], ["/gitopia.gitopia.rewards.MsgUpdateParams", MsgUpdateParams]];
export const load = (protoRegistry: Registry) => {
  registry.forEach(([typeUrl, mod]) => {
    protoRegistry.register(typeUrl, mod);
  });
};
export const MessageComposer = {
  encoded: {
    claim(value: MsgClaim) {
      return {
        typeUrl: "/gitopia.gitopia.rewards.MsgClaim",
        value: MsgClaim.encode(value).finish()
      };
    },
    createReward(value: MsgCreateReward) {
      return {
        typeUrl: "/gitopia.gitopia.rewards.MsgCreateReward",
        value: MsgCreateReward.encode(value).finish()
      };
    },
    updateParams(value: MsgUpdateParams) {
      return {
        typeUrl: "/gitopia.gitopia.rewards.MsgUpdateParams",
        value: MsgUpdateParams.encode(value).finish()
      };
    }
  },
  withTypeUrl: {
    claim(value: MsgClaim) {
      return {
        typeUrl: "/gitopia.gitopia.rewards.MsgClaim",
        value
      };
    },
    createReward(value: MsgCreateReward) {
      return {
        typeUrl: "/gitopia.gitopia.rewards.MsgCreateReward",
        value
      };
    },
    updateParams(value: MsgUpdateParams) {
      return {
        typeUrl: "/gitopia.gitopia.rewards.MsgUpdateParams",
        value
      };
    }
  },
  fromJSON: {
    claim(value: any) {
      return {
        typeUrl: "/gitopia.gitopia.rewards.MsgClaim",
        value: MsgClaim.fromJSON(value)
      };
    },
    createReward(value: any) {
      return {
        typeUrl: "/gitopia.gitopia.rewards.MsgCreateReward",
        value: MsgCreateReward.fromJSON(value)
      };
    },
    updateParams(value: any) {
      return {
        typeUrl: "/gitopia.gitopia.rewards.MsgUpdateParams",
        value: MsgUpdateParams.fromJSON(value)
      };
    }
  },
  fromPartial: {
    claim(value: MsgClaim) {
      return {
        typeUrl: "/gitopia.gitopia.rewards.MsgClaim",
        value: MsgClaim.fromPartial(value)
      };
    },
    createReward(value: MsgCreateReward) {
      return {
        typeUrl: "/gitopia.gitopia.rewards.MsgCreateReward",
        value: MsgCreateReward.fromPartial(value)
      };
    },
    updateParams(value: MsgUpdateParams) {
      return {
        typeUrl: "/gitopia.gitopia.rewards.MsgUpdateParams",
        value: MsgUpdateParams.fromPartial(value)
      };
    }
  }
};