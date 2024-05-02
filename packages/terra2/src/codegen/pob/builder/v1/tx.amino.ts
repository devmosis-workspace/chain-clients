import { MsgAuctionBid, MsgUpdateParams } from "./tx";
export const AminoConverter = {
  "/pob.builder.v1.MsgAuctionBid": {
    aminoType: "pob/x/builder/MsgAuctionBid",
    toAmino: MsgAuctionBid.toAmino,
    fromAmino: MsgAuctionBid.fromAmino
  },
  "/pob.builder.v1.MsgUpdateParams": {
    aminoType: "pob/x/builder/MsgUpdateParams",
    toAmino: MsgUpdateParams.toAmino,
    fromAmino: MsgUpdateParams.fromAmino
  }
};