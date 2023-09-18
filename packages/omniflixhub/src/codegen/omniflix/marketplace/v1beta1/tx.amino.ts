import { MsgListNFT, MsgEditListing, MsgDeListNFT, MsgBuyNFT, MsgCreateAuction, MsgCancelAuction, MsgPlaceBid } from "./tx";
export const AminoConverter = {
  "/OmniFlix.marketplace.v1beta1.MsgListNFT": {
    aminoType: "/OmniFlix.marketplace.v1beta1.MsgListNFT",
    toAmino: MsgListNFT.toAmino,
    fromAmino: MsgListNFT.fromAmino
  },
  "/OmniFlix.marketplace.v1beta1.MsgEditListing": {
    aminoType: "/OmniFlix.marketplace.v1beta1.MsgEditListing",
    toAmino: MsgEditListing.toAmino,
    fromAmino: MsgEditListing.fromAmino
  },
  "/OmniFlix.marketplace.v1beta1.MsgDeListNFT": {
    aminoType: "/OmniFlix.marketplace.v1beta1.MsgDeListNFT",
    toAmino: MsgDeListNFT.toAmino,
    fromAmino: MsgDeListNFT.fromAmino
  },
  "/OmniFlix.marketplace.v1beta1.MsgBuyNFT": {
    aminoType: "/OmniFlix.marketplace.v1beta1.MsgBuyNFT",
    toAmino: MsgBuyNFT.toAmino,
    fromAmino: MsgBuyNFT.fromAmino
  },
  "/OmniFlix.marketplace.v1beta1.MsgCreateAuction": {
    aminoType: "/OmniFlix.marketplace.v1beta1.MsgCreateAuction",
    toAmino: MsgCreateAuction.toAmino,
    fromAmino: MsgCreateAuction.fromAmino
  },
  "/OmniFlix.marketplace.v1beta1.MsgCancelAuction": {
    aminoType: "/OmniFlix.marketplace.v1beta1.MsgCancelAuction",
    toAmino: MsgCancelAuction.toAmino,
    fromAmino: MsgCancelAuction.fromAmino
  },
  "/OmniFlix.marketplace.v1beta1.MsgPlaceBid": {
    aminoType: "/OmniFlix.marketplace.v1beta1.MsgPlaceBid",
    toAmino: MsgPlaceBid.toAmino,
    fromAmino: MsgPlaceBid.fromAmino
  }
};