import { MsgSwap, MsgRedeem, MsgGovSetParams, MsgGovUpdateRegistry } from "./tx";
export const AminoConverter = {
  "/umee.metoken.v1.MsgSwap": {
    aminoType: "/umee.metoken.v1.MsgSwap",
    toAmino: MsgSwap.toAmino,
    fromAmino: MsgSwap.fromAmino
  },
  "/umee.metoken.v1.MsgRedeem": {
    aminoType: "/umee.metoken.v1.MsgRedeem",
    toAmino: MsgRedeem.toAmino,
    fromAmino: MsgRedeem.fromAmino
  },
  "/umee.metoken.v1.MsgGovSetParams": {
    aminoType: "/umee.metoken.v1.MsgGovSetParams",
    toAmino: MsgGovSetParams.toAmino,
    fromAmino: MsgGovSetParams.fromAmino
  },
  "/umee.metoken.v1.MsgGovUpdateRegistry": {
    aminoType: "/umee.metoken.v1.MsgGovUpdateRegistry",
    toAmino: MsgGovUpdateRegistry.toAmino,
    fromAmino: MsgGovUpdateRegistry.fromAmino
  }
};