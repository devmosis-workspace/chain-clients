import { MsgPostPrice } from "./tx";
export const AminoConverter = {
  "/kava.pricefeed.v1beta1.MsgPostPrice": {
    aminoType: "/kava.pricefeed.v1beta1.MsgPostPrice",
    toAmino: MsgPostPrice.toAmino,
    fromAmino: MsgPostPrice.fromAmino
  }
};