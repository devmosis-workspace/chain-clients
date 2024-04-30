import { MsgRegisterAccount, MsgClearAccount } from "./tx";
export const AminoConverter = {
  "/noble.forwarding.v1.MsgRegisterAccount": {
    aminoType: "/noble.forwarding.v1.MsgRegisterAccount",
    toAmino: MsgRegisterAccount.toAmino,
    fromAmino: MsgRegisterAccount.fromAmino
  },
  "/noble.forwarding.v1.MsgClearAccount": {
    aminoType: "/noble.forwarding.v1.MsgClearAccount",
    toAmino: MsgClearAccount.toAmino,
    fromAmino: MsgClearAccount.fromAmino
  }
};