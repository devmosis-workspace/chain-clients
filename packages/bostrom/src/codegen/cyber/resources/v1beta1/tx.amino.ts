import { MsgInvestmint } from "./tx";
export const AminoConverter = {
  "/cyber.resources.v1beta1.MsgInvestmint": {
    aminoType: "/cyber.resources.v1beta1.MsgInvestmint",
    toAmino: MsgInvestmint.toAmino,
    fromAmino: MsgInvestmint.fromAmino
  }
};