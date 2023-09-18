import { MsgCreateCampaign, MsgCancelCampaign, MsgClaim, MsgDepositCampaign } from "./tx";
export const AminoConverter = {
  "/OmniFlix.itc.v1.MsgCreateCampaign": {
    aminoType: "/OmniFlix.itc.v1.MsgCreateCampaign",
    toAmino: MsgCreateCampaign.toAmino,
    fromAmino: MsgCreateCampaign.fromAmino
  },
  "/OmniFlix.itc.v1.MsgCancelCampaign": {
    aminoType: "/OmniFlix.itc.v1.MsgCancelCampaign",
    toAmino: MsgCancelCampaign.toAmino,
    fromAmino: MsgCancelCampaign.fromAmino
  },
  "/OmniFlix.itc.v1.MsgClaim": {
    aminoType: "/OmniFlix.itc.v1.MsgClaim",
    toAmino: MsgClaim.toAmino,
    fromAmino: MsgClaim.fromAmino
  },
  "/OmniFlix.itc.v1.MsgDepositCampaign": {
    aminoType: "/OmniFlix.itc.v1.MsgDepositCampaign",
    toAmino: MsgDepositCampaign.toAmino,
    fromAmino: MsgDepositCampaign.fromAmino
  }
};