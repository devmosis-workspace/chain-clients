import { GeneratedType, Registry } from "@cosmjs/proto-signing";
import { MsgDelegate, MsgWithdrawRewards, MsgUndelegate, MsgRedelegate, MsgUpdateParams } from "./tx";
export const registry: ReadonlyArray<[string, GeneratedType]> = [["/kyve.delegation.v1beta1.MsgDelegate", MsgDelegate], ["/kyve.delegation.v1beta1.MsgWithdrawRewards", MsgWithdrawRewards], ["/kyve.delegation.v1beta1.MsgUndelegate", MsgUndelegate], ["/kyve.delegation.v1beta1.MsgRedelegate", MsgRedelegate], ["/kyve.delegation.v1beta1.MsgUpdateParams", MsgUpdateParams]];
export const load = (protoRegistry: Registry) => {
  registry.forEach(([typeUrl, mod]) => {
    protoRegistry.register(typeUrl, mod);
  });
};
export const MessageComposer = {
  encoded: {
    delegate(value: MsgDelegate) {
      return {
        typeUrl: "/kyve.delegation.v1beta1.MsgDelegate",
        value: MsgDelegate.encode(value).finish()
      };
    },
    withdrawRewards(value: MsgWithdrawRewards) {
      return {
        typeUrl: "/kyve.delegation.v1beta1.MsgWithdrawRewards",
        value: MsgWithdrawRewards.encode(value).finish()
      };
    },
    undelegate(value: MsgUndelegate) {
      return {
        typeUrl: "/kyve.delegation.v1beta1.MsgUndelegate",
        value: MsgUndelegate.encode(value).finish()
      };
    },
    redelegate(value: MsgRedelegate) {
      return {
        typeUrl: "/kyve.delegation.v1beta1.MsgRedelegate",
        value: MsgRedelegate.encode(value).finish()
      };
    },
    updateParams(value: MsgUpdateParams) {
      return {
        typeUrl: "/kyve.delegation.v1beta1.MsgUpdateParams",
        value: MsgUpdateParams.encode(value).finish()
      };
    }
  },
  withTypeUrl: {
    delegate(value: MsgDelegate) {
      return {
        typeUrl: "/kyve.delegation.v1beta1.MsgDelegate",
        value
      };
    },
    withdrawRewards(value: MsgWithdrawRewards) {
      return {
        typeUrl: "/kyve.delegation.v1beta1.MsgWithdrawRewards",
        value
      };
    },
    undelegate(value: MsgUndelegate) {
      return {
        typeUrl: "/kyve.delegation.v1beta1.MsgUndelegate",
        value
      };
    },
    redelegate(value: MsgRedelegate) {
      return {
        typeUrl: "/kyve.delegation.v1beta1.MsgRedelegate",
        value
      };
    },
    updateParams(value: MsgUpdateParams) {
      return {
        typeUrl: "/kyve.delegation.v1beta1.MsgUpdateParams",
        value
      };
    }
  },
  fromJSON: {
    delegate(value: any) {
      return {
        typeUrl: "/kyve.delegation.v1beta1.MsgDelegate",
        value: MsgDelegate.fromJSON(value)
      };
    },
    withdrawRewards(value: any) {
      return {
        typeUrl: "/kyve.delegation.v1beta1.MsgWithdrawRewards",
        value: MsgWithdrawRewards.fromJSON(value)
      };
    },
    undelegate(value: any) {
      return {
        typeUrl: "/kyve.delegation.v1beta1.MsgUndelegate",
        value: MsgUndelegate.fromJSON(value)
      };
    },
    redelegate(value: any) {
      return {
        typeUrl: "/kyve.delegation.v1beta1.MsgRedelegate",
        value: MsgRedelegate.fromJSON(value)
      };
    },
    updateParams(value: any) {
      return {
        typeUrl: "/kyve.delegation.v1beta1.MsgUpdateParams",
        value: MsgUpdateParams.fromJSON(value)
      };
    }
  },
  fromPartial: {
    delegate(value: MsgDelegate) {
      return {
        typeUrl: "/kyve.delegation.v1beta1.MsgDelegate",
        value: MsgDelegate.fromPartial(value)
      };
    },
    withdrawRewards(value: MsgWithdrawRewards) {
      return {
        typeUrl: "/kyve.delegation.v1beta1.MsgWithdrawRewards",
        value: MsgWithdrawRewards.fromPartial(value)
      };
    },
    undelegate(value: MsgUndelegate) {
      return {
        typeUrl: "/kyve.delegation.v1beta1.MsgUndelegate",
        value: MsgUndelegate.fromPartial(value)
      };
    },
    redelegate(value: MsgRedelegate) {
      return {
        typeUrl: "/kyve.delegation.v1beta1.MsgRedelegate",
        value: MsgRedelegate.fromPartial(value)
      };
    },
    updateParams(value: MsgUpdateParams) {
      return {
        typeUrl: "/kyve.delegation.v1beta1.MsgUpdateParams",
        value: MsgUpdateParams.fromPartial(value)
      };
    }
  }
};