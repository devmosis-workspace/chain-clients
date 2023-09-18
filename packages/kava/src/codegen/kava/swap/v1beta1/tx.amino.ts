import { MsgDeposit, MsgWithdraw, MsgSwapExactForTokens, MsgSwapForExactTokens } from "./tx";
export const AminoConverter = {
  "/kava.swap.v1beta1.MsgDeposit": {
    aminoType: "/kava.swap.v1beta1.MsgDeposit",
    toAmino: MsgDeposit.toAmino,
    fromAmino: MsgDeposit.fromAmino
  },
  "/kava.swap.v1beta1.MsgWithdraw": {
    aminoType: "/kava.swap.v1beta1.MsgWithdraw",
    toAmino: MsgWithdraw.toAmino,
    fromAmino: MsgWithdraw.fromAmino
  },
  "/kava.swap.v1beta1.MsgSwapExactForTokens": {
    aminoType: "/kava.swap.v1beta1.MsgSwapExactForTokens",
    toAmino: MsgSwapExactForTokens.toAmino,
    fromAmino: MsgSwapExactForTokens.fromAmino
  },
  "/kava.swap.v1beta1.MsgSwapForExactTokens": {
    aminoType: "/kava.swap.v1beta1.MsgSwapForExactTokens",
    toAmino: MsgSwapForExactTokens.toAmino,
    fromAmino: MsgSwapForExactTokens.fromAmino
  }
};