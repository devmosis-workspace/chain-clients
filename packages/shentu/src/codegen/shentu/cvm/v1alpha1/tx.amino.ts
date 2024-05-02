import { MsgCall, MsgDeploy } from "./tx";
export const AminoConverter = {
  "/shentu.cvm.v1alpha1.MsgCall": {
    aminoType: "/shentu.cvm.v1alpha1.MsgCall",
    toAmino: MsgCall.toAmino,
    fromAmino: MsgCall.fromAmino
  },
  "/shentu.cvm.v1alpha1.MsgDeploy": {
    aminoType: "/shentu.cvm.v1alpha1.MsgDeploy",
    toAmino: MsgDeploy.toAmino,
    fromAmino: MsgDeploy.fromAmino
  }
};