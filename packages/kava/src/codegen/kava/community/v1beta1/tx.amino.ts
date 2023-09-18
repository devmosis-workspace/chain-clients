import { MsgFundCommunityPool } from "./tx";
export const AminoConverter = {
  "/kava.community.v1beta1.MsgFundCommunityPool": {
    aminoType: "/kava.community.v1beta1.MsgFundCommunityPool",
    toAmino: MsgFundCommunityPool.toAmino,
    fromAmino: MsgFundCommunityPool.fromAmino
  }
};