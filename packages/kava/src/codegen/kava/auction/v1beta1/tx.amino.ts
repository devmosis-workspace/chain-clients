import { MsgPlaceBid } from "./tx";
export const AminoConverter = {
  "/kava.auction.v1beta1.MsgPlaceBid": {
    aminoType: "/kava.auction.v1beta1.MsgPlaceBid",
    toAmino: MsgPlaceBid.toAmino,
    fromAmino: MsgPlaceBid.fromAmino
  }
};