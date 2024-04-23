import { MsgCreateRollapp, MsgUpdateState } from "./tx";
export const AminoConverter = {
  "/dymensionxyz.dymension.rollapp.MsgCreateRollapp": {
    aminoType: "/dymensionxyz.dymension.rollapp.MsgCreateRollapp",
    toAmino: MsgCreateRollapp.toAmino,
    fromAmino: MsgCreateRollapp.fromAmino
  },
  "/dymensionxyz.dymension.rollapp.MsgUpdateState": {
    aminoType: "/dymensionxyz.dymension.rollapp.MsgUpdateState",
    toAmino: MsgUpdateState.toAmino,
    fromAmino: MsgUpdateState.fromAmino
  }
};