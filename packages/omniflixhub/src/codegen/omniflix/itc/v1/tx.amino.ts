import { MsgCreateCampaign, MsgCancelCampaign, MsgClaim, MsgDepositCampaign, MsgUpdateParams } from "./tx";
export const AminoConverter = {
  "/OmniFlix.itc.v1.MsgCreateCampaign": {
    aminoType: "OmniFlix/itc/MsgCreateCampaign",
    toAmino: MsgCreateCampaign.toAmino,
    fromAmino: MsgCreateCampaign.fromAmino
  },
  "/OmniFlix.itc.v1.MsgCancelCampaign": {
    aminoType: "OmniFlix/itc/MsgCancelCampaign",
    toAmino: MsgCancelCampaign.toAmino,
    fromAmino: MsgCancelCampaign.fromAmino
  },
  "/OmniFlix.itc.v1.MsgClaim": {
    aminoType: "OmniFlix/itc/MsgClaim",
    toAmino: MsgClaim.toAmino,
    fromAmino: MsgClaim.fromAmino
  },
  "/OmniFlix.itc.v1.MsgDepositCampaign": {
    aminoType: "OmniFlix/itc/MsgDepositCampaign",
    toAmino: MsgDepositCampaign.toAmino,
    fromAmino: MsgDepositCampaign.fromAmino
  },
  "/OmniFlix.itc.v1.MsgUpdateParams": {
    aminoType: "/OmniFlix.itc.v1.MsgUpdateParams",
    toAmino: MsgUpdateParams.toAmino,
    fromAmino: MsgUpdateParams.fromAmino
  }
};