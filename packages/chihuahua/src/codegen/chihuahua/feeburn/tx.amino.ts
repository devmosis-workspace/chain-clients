import { MsgUpdateParams } from "./tx";
export const AminoConverter = {
  "/chihuahua.feeburn.MsgUpdateParams": {
    aminoType: "chihuahua/x/feeburn/MsgUpdateParams",
    toAmino: MsgUpdateParams.toAmino,
    fromAmino: MsgUpdateParams.fromAmino
  }
};