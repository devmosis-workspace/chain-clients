import { MsgListNFT, MsgEditListing, MsgDeListNFT, MsgBuyNFT, MsgCreateAuction, MsgCancelAuction, MsgPlaceBid, MsgUpdateParams } from "./tx";
export const AminoConverter = {
  "/OmniFlix.marketplace.v1beta1.MsgListNFT": {
    aminoType: "OmniFlix/marketplace/MsgListNFT",
    toAmino: MsgListNFT.toAmino,
    fromAmino: MsgListNFT.fromAmino
  },
  "/OmniFlix.marketplace.v1beta1.MsgEditListing": {
    aminoType: "OmniFlix/marketplace/MsgEditListing",
    toAmino: MsgEditListing.toAmino,
    fromAmino: MsgEditListing.fromAmino
  },
  "/OmniFlix.marketplace.v1beta1.MsgDeListNFT": {
    aminoType: "OmniFlix/marketplace/MsgDeListNFT",
    toAmino: MsgDeListNFT.toAmino,
    fromAmino: MsgDeListNFT.fromAmino
  },
  "/OmniFlix.marketplace.v1beta1.MsgBuyNFT": {
    aminoType: "OmniFlix/marketplace/MsgBuyNFT",
    toAmino: MsgBuyNFT.toAmino,
    fromAmino: MsgBuyNFT.fromAmino
  },
  "/OmniFlix.marketplace.v1beta1.MsgCreateAuction": {
    aminoType: "OmniFlix/marketplace/MsgCreateAuction",
    toAmino: MsgCreateAuction.toAmino,
    fromAmino: MsgCreateAuction.fromAmino
  },
  "/OmniFlix.marketplace.v1beta1.MsgCancelAuction": {
    aminoType: "OmniFlix/marketplace/MsgCancelAuction",
    toAmino: MsgCancelAuction.toAmino,
    fromAmino: MsgCancelAuction.fromAmino
  },
  "/OmniFlix.marketplace.v1beta1.MsgPlaceBid": {
    aminoType: "OmniFlix/marketplace/MsgPlaceBid",
    toAmino: MsgPlaceBid.toAmino,
    fromAmino: MsgPlaceBid.fromAmino
  },
  "/OmniFlix.marketplace.v1beta1.MsgUpdateParams": {
    aminoType: "/OmniFlix.marketplace.v1beta1.MsgUpdateParams",
    toAmino: MsgUpdateParams.toAmino,
    fromAmino: MsgUpdateParams.fromAmino
  }
};