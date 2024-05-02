import { MsgAddAccount, MsgRemoveAccount, MsgSetParams } from "./tx";
export const AminoConverter = {
  "/sifnode.admin.v1.MsgAddAccount": {
    aminoType: "/sifnode.admin.v1.MsgAddAccount",
    toAmino: MsgAddAccount.toAmino,
    fromAmino: MsgAddAccount.fromAmino
  },
  "/sifnode.admin.v1.MsgRemoveAccount": {
    aminoType: "/sifnode.admin.v1.MsgRemoveAccount",
    toAmino: MsgRemoveAccount.toAmino,
    fromAmino: MsgRemoveAccount.fromAmino
  },
  "/sifnode.admin.v1.MsgSetParams": {
    aminoType: "/sifnode.admin.v1.MsgSetParams",
    toAmino: MsgSetParams.toAmino,
    fromAmino: MsgSetParams.fromAmino
  }
};