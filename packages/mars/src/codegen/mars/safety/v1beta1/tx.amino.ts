import { MsgSafetyFundSpend } from "./tx";
export const AminoConverter = {
  "/mars.safety.v1beta1.MsgSafetyFundSpend": {
    aminoType: "/mars.safety.v1beta1.MsgSafetyFundSpend",
    toAmino: MsgSafetyFundSpend.toAmino,
    fromAmino: MsgSafetyFundSpend.fromAmino
  }
};