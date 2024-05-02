import { MsgLockedSend } from "./tx";
export const AminoConverter = {
  "/shentu.bank.v1alpha1.MsgLockedSend": {
    aminoType: "/shentu.bank.v1alpha1.MsgLockedSend",
    toAmino: MsgLockedSend.toAmino,
    fromAmino: MsgLockedSend.fromAmino
  }
};