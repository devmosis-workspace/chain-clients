import { MsgFundCommunityPool, MsgUpdateParams } from "./tx";
export const AminoConverter = {
  "/kava.community.v1beta1.MsgFundCommunityPool": {
    aminoType: "/kava.community.v1beta1.MsgFundCommunityPool",
    toAmino: MsgFundCommunityPool.toAmino,
    fromAmino: MsgFundCommunityPool.fromAmino
  },
  "/kava.community.v1beta1.MsgUpdateParams": {
    aminoType: "/kava.community.v1beta1.MsgUpdateParams",
    toAmino: MsgUpdateParams.toAmino,
    fromAmino: MsgUpdateParams.fromAmino
  }
};