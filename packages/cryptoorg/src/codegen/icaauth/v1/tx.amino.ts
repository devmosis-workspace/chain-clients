import { MsgRegisterAccount, MsgSubmitTx } from "./tx";
export const AminoConverter = {
  "/chainmain.icaauth.v1.MsgRegisterAccount": {
    aminoType: "/chainmain.icaauth.v1.MsgRegisterAccount",
    toAmino: MsgRegisterAccount.toAmino,
    fromAmino: MsgRegisterAccount.fromAmino
  },
  "/chainmain.icaauth.v1.MsgSubmitTx": {
    aminoType: "/chainmain.icaauth.v1.MsgSubmitTx",
    toAmino: MsgSubmitTx.toAmino,
    fromAmino: MsgSubmitTx.fromAmino
  }
};