import { MsgAddSuper, MsgDeleteSuper } from "./tx";
export const AminoConverter = {
  "/irishub.guardian.MsgAddSuper": {
    aminoType: "/irishub.guardian.MsgAddSuper",
    toAmino: MsgAddSuper.toAmino,
    fromAmino: MsgAddSuper.fromAmino
  },
  "/irishub.guardian.MsgDeleteSuper": {
    aminoType: "/irishub.guardian.MsgDeleteSuper",
    toAmino: MsgDeleteSuper.toAmino,
    fromAmino: MsgDeleteSuper.fromAmino
  }
};