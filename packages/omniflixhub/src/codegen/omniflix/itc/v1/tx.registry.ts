import { GeneratedType, Registry } from "@cosmjs/proto-signing";
import { MsgCreateCampaign, MsgCancelCampaign, MsgClaim, MsgDepositCampaign, MsgUpdateParams } from "./tx";
export const registry: ReadonlyArray<[string, GeneratedType]> = [["/OmniFlix.itc.v1.MsgCreateCampaign", MsgCreateCampaign], ["/OmniFlix.itc.v1.MsgCancelCampaign", MsgCancelCampaign], ["/OmniFlix.itc.v1.MsgClaim", MsgClaim], ["/OmniFlix.itc.v1.MsgDepositCampaign", MsgDepositCampaign], ["/OmniFlix.itc.v1.MsgUpdateParams", MsgUpdateParams]];
export const load = (protoRegistry: Registry) => {
  registry.forEach(([typeUrl, mod]) => {
    protoRegistry.register(typeUrl, mod);
  });
};
export const MessageComposer = {
  encoded: {
    createCampaign(value: MsgCreateCampaign) {
      return {
        typeUrl: "/OmniFlix.itc.v1.MsgCreateCampaign",
        value: MsgCreateCampaign.encode(value).finish()
      };
    },
    cancelCampaign(value: MsgCancelCampaign) {
      return {
        typeUrl: "/OmniFlix.itc.v1.MsgCancelCampaign",
        value: MsgCancelCampaign.encode(value).finish()
      };
    },
    claim(value: MsgClaim) {
      return {
        typeUrl: "/OmniFlix.itc.v1.MsgClaim",
        value: MsgClaim.encode(value).finish()
      };
    },
    depositCampaign(value: MsgDepositCampaign) {
      return {
        typeUrl: "/OmniFlix.itc.v1.MsgDepositCampaign",
        value: MsgDepositCampaign.encode(value).finish()
      };
    },
    updateParams(value: MsgUpdateParams) {
      return {
        typeUrl: "/OmniFlix.itc.v1.MsgUpdateParams",
        value: MsgUpdateParams.encode(value).finish()
      };
    }
  },
  withTypeUrl: {
    createCampaign(value: MsgCreateCampaign) {
      return {
        typeUrl: "/OmniFlix.itc.v1.MsgCreateCampaign",
        value
      };
    },
    cancelCampaign(value: MsgCancelCampaign) {
      return {
        typeUrl: "/OmniFlix.itc.v1.MsgCancelCampaign",
        value
      };
    },
    claim(value: MsgClaim) {
      return {
        typeUrl: "/OmniFlix.itc.v1.MsgClaim",
        value
      };
    },
    depositCampaign(value: MsgDepositCampaign) {
      return {
        typeUrl: "/OmniFlix.itc.v1.MsgDepositCampaign",
        value
      };
    },
    updateParams(value: MsgUpdateParams) {
      return {
        typeUrl: "/OmniFlix.itc.v1.MsgUpdateParams",
        value
      };
    }
  },
  fromJSON: {
    createCampaign(value: any) {
      return {
        typeUrl: "/OmniFlix.itc.v1.MsgCreateCampaign",
        value: MsgCreateCampaign.fromJSON(value)
      };
    },
    cancelCampaign(value: any) {
      return {
        typeUrl: "/OmniFlix.itc.v1.MsgCancelCampaign",
        value: MsgCancelCampaign.fromJSON(value)
      };
    },
    claim(value: any) {
      return {
        typeUrl: "/OmniFlix.itc.v1.MsgClaim",
        value: MsgClaim.fromJSON(value)
      };
    },
    depositCampaign(value: any) {
      return {
        typeUrl: "/OmniFlix.itc.v1.MsgDepositCampaign",
        value: MsgDepositCampaign.fromJSON(value)
      };
    },
    updateParams(value: any) {
      return {
        typeUrl: "/OmniFlix.itc.v1.MsgUpdateParams",
        value: MsgUpdateParams.fromJSON(value)
      };
    }
  },
  fromPartial: {
    createCampaign(value: MsgCreateCampaign) {
      return {
        typeUrl: "/OmniFlix.itc.v1.MsgCreateCampaign",
        value: MsgCreateCampaign.fromPartial(value)
      };
    },
    cancelCampaign(value: MsgCancelCampaign) {
      return {
        typeUrl: "/OmniFlix.itc.v1.MsgCancelCampaign",
        value: MsgCancelCampaign.fromPartial(value)
      };
    },
    claim(value: MsgClaim) {
      return {
        typeUrl: "/OmniFlix.itc.v1.MsgClaim",
        value: MsgClaim.fromPartial(value)
      };
    },
    depositCampaign(value: MsgDepositCampaign) {
      return {
        typeUrl: "/OmniFlix.itc.v1.MsgDepositCampaign",
        value: MsgDepositCampaign.fromPartial(value)
      };
    },
    updateParams(value: MsgUpdateParams) {
      return {
        typeUrl: "/OmniFlix.itc.v1.MsgUpdateParams",
        value: MsgUpdateParams.fromPartial(value)
      };
    }
  }
};