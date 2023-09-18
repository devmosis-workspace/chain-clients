import { MsgDeposit, MsgWithdraw } from "./tx";
export const AminoConverter = {
  "/kava.savings.v1beta1.MsgDeposit": {
    aminoType: "/kava.savings.v1beta1.MsgDeposit",
    toAmino: MsgDeposit.toAmino,
    fromAmino: MsgDeposit.fromAmino
  },
  "/kava.savings.v1beta1.MsgWithdraw": {
    aminoType: "/kava.savings.v1beta1.MsgWithdraw",
    toAmino: MsgWithdraw.toAmino,
    fromAmino: MsgWithdraw.fromAmino
  }
};