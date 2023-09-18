import { MsgDeposit, MsgWithdraw, MsgBorrow, MsgRepay, MsgLiquidate } from "./tx";
export const AminoConverter = {
  "/kava.hard.v1beta1.MsgDeposit": {
    aminoType: "/kava.hard.v1beta1.MsgDeposit",
    toAmino: MsgDeposit.toAmino,
    fromAmino: MsgDeposit.fromAmino
  },
  "/kava.hard.v1beta1.MsgWithdraw": {
    aminoType: "/kava.hard.v1beta1.MsgWithdraw",
    toAmino: MsgWithdraw.toAmino,
    fromAmino: MsgWithdraw.fromAmino
  },
  "/kava.hard.v1beta1.MsgBorrow": {
    aminoType: "/kava.hard.v1beta1.MsgBorrow",
    toAmino: MsgBorrow.toAmino,
    fromAmino: MsgBorrow.fromAmino
  },
  "/kava.hard.v1beta1.MsgRepay": {
    aminoType: "/kava.hard.v1beta1.MsgRepay",
    toAmino: MsgRepay.toAmino,
    fromAmino: MsgRepay.fromAmino
  },
  "/kava.hard.v1beta1.MsgLiquidate": {
    aminoType: "/kava.hard.v1beta1.MsgLiquidate",
    toAmino: MsgLiquidate.toAmino,
    fromAmino: MsgLiquidate.fromAmino
  }
};