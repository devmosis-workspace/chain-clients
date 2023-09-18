import { MsgMintDerivative, MsgBurnDerivative } from "./tx";
export const AminoConverter = {
  "/kava.liquid.v1beta1.MsgMintDerivative": {
    aminoType: "/kava.liquid.v1beta1.MsgMintDerivative",
    toAmino: MsgMintDerivative.toAmino,
    fromAmino: MsgMintDerivative.fromAmino
  },
  "/kava.liquid.v1beta1.MsgBurnDerivative": {
    aminoType: "/kava.liquid.v1beta1.MsgBurnDerivative",
    toAmino: MsgBurnDerivative.toAmino,
    fromAmino: MsgBurnDerivative.fromAmino
  }
};