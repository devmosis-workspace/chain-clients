import { MsgClaim, MsgCreateReward, MsgUpdateParams } from "./tx";
export const AminoConverter = {
  "/gitopia.gitopia.rewards.MsgClaim": {
    aminoType: "/gitopia.gitopia.rewards.MsgClaim",
    toAmino: MsgClaim.toAmino,
    fromAmino: MsgClaim.fromAmino
  },
  "/gitopia.gitopia.rewards.MsgCreateReward": {
    aminoType: "/gitopia.gitopia.rewards.MsgCreateReward",
    toAmino: MsgCreateReward.toAmino,
    fromAmino: MsgCreateReward.fromAmino
  },
  "/gitopia.gitopia.rewards.MsgUpdateParams": {
    aminoType: "/gitopia.gitopia.rewards.MsgUpdateParams",
    toAmino: MsgUpdateParams.toAmino,
    fromAmino: MsgUpdateParams.fromAmino
  }
};