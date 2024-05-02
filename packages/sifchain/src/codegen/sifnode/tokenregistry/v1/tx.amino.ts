import { MsgRegister, MsgDeregister, MsgSetRegistry } from "./tx";
export const AminoConverter = {
  "/sifnode.tokenregistry.v1.MsgRegister": {
    aminoType: "/sifnode.tokenregistry.v1.MsgRegister",
    toAmino: MsgRegister.toAmino,
    fromAmino: MsgRegister.fromAmino
  },
  "/sifnode.tokenregistry.v1.MsgDeregister": {
    aminoType: "/sifnode.tokenregistry.v1.MsgDeregister",
    toAmino: MsgDeregister.toAmino,
    fromAmino: MsgDeregister.fromAmino
  },
  "/sifnode.tokenregistry.v1.MsgSetRegistry": {
    aminoType: "/sifnode.tokenregistry.v1.MsgSetRegistry",
    toAmino: MsgSetRegistry.toAmino,
    fromAmino: MsgSetRegistry.fromAmino
  }
};