import { MsgCreateCDP, MsgDeposit, MsgWithdraw, MsgDrawDebt, MsgRepayDebt, MsgLiquidate } from "./tx";
export const AminoConverter = {
  "/kava.cdp.v1beta1.MsgCreateCDP": {
    aminoType: "/kava.cdp.v1beta1.MsgCreateCDP",
    toAmino: MsgCreateCDP.toAmino,
    fromAmino: MsgCreateCDP.fromAmino
  },
  "/kava.cdp.v1beta1.MsgDeposit": {
    aminoType: "/kava.cdp.v1beta1.MsgDeposit",
    toAmino: MsgDeposit.toAmino,
    fromAmino: MsgDeposit.fromAmino
  },
  "/kava.cdp.v1beta1.MsgWithdraw": {
    aminoType: "/kava.cdp.v1beta1.MsgWithdraw",
    toAmino: MsgWithdraw.toAmino,
    fromAmino: MsgWithdraw.fromAmino
  },
  "/kava.cdp.v1beta1.MsgDrawDebt": {
    aminoType: "/kava.cdp.v1beta1.MsgDrawDebt",
    toAmino: MsgDrawDebt.toAmino,
    fromAmino: MsgDrawDebt.fromAmino
  },
  "/kava.cdp.v1beta1.MsgRepayDebt": {
    aminoType: "/kava.cdp.v1beta1.MsgRepayDebt",
    toAmino: MsgRepayDebt.toAmino,
    fromAmino: MsgRepayDebt.fromAmino
  },
  "/kava.cdp.v1beta1.MsgLiquidate": {
    aminoType: "/kava.cdp.v1beta1.MsgLiquidate",
    toAmino: MsgLiquidate.toAmino,
    fromAmino: MsgLiquidate.fromAmino
  }
};