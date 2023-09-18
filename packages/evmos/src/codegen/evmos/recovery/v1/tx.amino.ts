import { MsgUpdateParams } from "./tx";
export const AminoConverter = {
  "/evmos.recovery.v1.MsgUpdateParams": {
    aminoType: "/evmos.recovery.v1.MsgUpdateParams",
    toAmino: MsgUpdateParams.toAmino,
    fromAmino: MsgUpdateParams.fromAmino
  }
};