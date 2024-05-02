import { MsgSwap, MsgSwapSend } from "./tx";
export const AminoConverter = {
  "/terra.market.v1beta1.MsgSwap": {
    aminoType: "/terra.market.v1beta1.MsgSwap",
    toAmino: MsgSwap.toAmino,
    fromAmino: MsgSwap.fromAmino
  },
  "/terra.market.v1beta1.MsgSwapSend": {
    aminoType: "/terra.market.v1beta1.MsgSwapSend",
    toAmino: MsgSwapSend.toAmino,
    fromAmino: MsgSwapSend.fromAmino
  }
};