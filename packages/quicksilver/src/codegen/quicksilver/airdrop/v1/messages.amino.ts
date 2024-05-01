import { MsgClaim, MsgIncentivePoolSpend } from "./messages";
export const AminoConverter = {
  "/quicksilver.airdrop.v1.MsgClaim": {
    aminoType: "/quicksilver.airdrop.v1.MsgClaim",
    toAmino: MsgClaim.toAmino,
    fromAmino: MsgClaim.fromAmino
  },
  "/quicksilver.airdrop.v1.MsgIncentivePoolSpend": {
    aminoType: "/quicksilver.airdrop.v1.MsgIncentivePoolSpend",
    toAmino: MsgIncentivePoolSpend.toAmino,
    fromAmino: MsgIncentivePoolSpend.fromAmino
  }
};