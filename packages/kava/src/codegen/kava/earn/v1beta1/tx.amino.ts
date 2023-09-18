import { MsgDeposit, MsgWithdraw } from "./tx";
export const AminoConverter = {
  "/kava.earn.v1beta1.MsgDeposit": {
    aminoType: "/kava.earn.v1beta1.MsgDeposit",
    toAmino: MsgDeposit.toAmino,
    fromAmino: MsgDeposit.fromAmino
  },
  "/kava.earn.v1beta1.MsgWithdraw": {
    aminoType: "/kava.earn.v1beta1.MsgWithdraw",
    toAmino: MsgWithdraw.toAmino,
    fromAmino: MsgWithdraw.fromAmino
  }
};