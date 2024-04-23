import { MsgCreateSequencer } from "./tx";
export const AminoConverter = {
  "/dymensionxyz.dymension.sequencer.MsgCreateSequencer": {
    aminoType: "/dymensionxyz.dymension.sequencer.MsgCreateSequencer",
    toAmino: MsgCreateSequencer.toAmino,
    fromAmino: MsgCreateSequencer.fromAmino
  }
};