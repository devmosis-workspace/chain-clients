import { MsgUnlock } from "./tx";
export const AminoConverter = {
  "/shentu.auth.v1alpha1.MsgUnlock": {
    aminoType: "/shentu.auth.v1alpha1.MsgUnlock",
    toAmino: MsgUnlock.toAmino,
    fromAmino: MsgUnlock.fromAmino
  }
};