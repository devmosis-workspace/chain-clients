import { GeneratedType, Registry } from "@cosmjs/proto-signing";
import { MsgListNFT, MsgEditListing, MsgDeListNFT, MsgBuyNFT, MsgCreateAuction, MsgCancelAuction, MsgPlaceBid, MsgUpdateParams } from "./tx";
export const registry: ReadonlyArray<[string, GeneratedType]> = [["/OmniFlix.marketplace.v1beta1.MsgListNFT", MsgListNFT], ["/OmniFlix.marketplace.v1beta1.MsgEditListing", MsgEditListing], ["/OmniFlix.marketplace.v1beta1.MsgDeListNFT", MsgDeListNFT], ["/OmniFlix.marketplace.v1beta1.MsgBuyNFT", MsgBuyNFT], ["/OmniFlix.marketplace.v1beta1.MsgCreateAuction", MsgCreateAuction], ["/OmniFlix.marketplace.v1beta1.MsgCancelAuction", MsgCancelAuction], ["/OmniFlix.marketplace.v1beta1.MsgPlaceBid", MsgPlaceBid], ["/OmniFlix.marketplace.v1beta1.MsgUpdateParams", MsgUpdateParams]];
export const load = (protoRegistry: Registry) => {
  registry.forEach(([typeUrl, mod]) => {
    protoRegistry.register(typeUrl, mod);
  });
};
export const MessageComposer = {
  encoded: {
    listNFT(value: MsgListNFT) {
      return {
        typeUrl: "/OmniFlix.marketplace.v1beta1.MsgListNFT",
        value: MsgListNFT.encode(value).finish()
      };
    },
    editListing(value: MsgEditListing) {
      return {
        typeUrl: "/OmniFlix.marketplace.v1beta1.MsgEditListing",
        value: MsgEditListing.encode(value).finish()
      };
    },
    deListNFT(value: MsgDeListNFT) {
      return {
        typeUrl: "/OmniFlix.marketplace.v1beta1.MsgDeListNFT",
        value: MsgDeListNFT.encode(value).finish()
      };
    },
    buyNFT(value: MsgBuyNFT) {
      return {
        typeUrl: "/OmniFlix.marketplace.v1beta1.MsgBuyNFT",
        value: MsgBuyNFT.encode(value).finish()
      };
    },
    createAuction(value: MsgCreateAuction) {
      return {
        typeUrl: "/OmniFlix.marketplace.v1beta1.MsgCreateAuction",
        value: MsgCreateAuction.encode(value).finish()
      };
    },
    cancelAuction(value: MsgCancelAuction) {
      return {
        typeUrl: "/OmniFlix.marketplace.v1beta1.MsgCancelAuction",
        value: MsgCancelAuction.encode(value).finish()
      };
    },
    placeBid(value: MsgPlaceBid) {
      return {
        typeUrl: "/OmniFlix.marketplace.v1beta1.MsgPlaceBid",
        value: MsgPlaceBid.encode(value).finish()
      };
    },
    updateParams(value: MsgUpdateParams) {
      return {
        typeUrl: "/OmniFlix.marketplace.v1beta1.MsgUpdateParams",
        value: MsgUpdateParams.encode(value).finish()
      };
    }
  },
  withTypeUrl: {
    listNFT(value: MsgListNFT) {
      return {
        typeUrl: "/OmniFlix.marketplace.v1beta1.MsgListNFT",
        value
      };
    },
    editListing(value: MsgEditListing) {
      return {
        typeUrl: "/OmniFlix.marketplace.v1beta1.MsgEditListing",
        value
      };
    },
    deListNFT(value: MsgDeListNFT) {
      return {
        typeUrl: "/OmniFlix.marketplace.v1beta1.MsgDeListNFT",
        value
      };
    },
    buyNFT(value: MsgBuyNFT) {
      return {
        typeUrl: "/OmniFlix.marketplace.v1beta1.MsgBuyNFT",
        value
      };
    },
    createAuction(value: MsgCreateAuction) {
      return {
        typeUrl: "/OmniFlix.marketplace.v1beta1.MsgCreateAuction",
        value
      };
    },
    cancelAuction(value: MsgCancelAuction) {
      return {
        typeUrl: "/OmniFlix.marketplace.v1beta1.MsgCancelAuction",
        value
      };
    },
    placeBid(value: MsgPlaceBid) {
      return {
        typeUrl: "/OmniFlix.marketplace.v1beta1.MsgPlaceBid",
        value
      };
    },
    updateParams(value: MsgUpdateParams) {
      return {
        typeUrl: "/OmniFlix.marketplace.v1beta1.MsgUpdateParams",
        value
      };
    }
  },
  fromJSON: {
    listNFT(value: any) {
      return {
        typeUrl: "/OmniFlix.marketplace.v1beta1.MsgListNFT",
        value: MsgListNFT.fromJSON(value)
      };
    },
    editListing(value: any) {
      return {
        typeUrl: "/OmniFlix.marketplace.v1beta1.MsgEditListing",
        value: MsgEditListing.fromJSON(value)
      };
    },
    deListNFT(value: any) {
      return {
        typeUrl: "/OmniFlix.marketplace.v1beta1.MsgDeListNFT",
        value: MsgDeListNFT.fromJSON(value)
      };
    },
    buyNFT(value: any) {
      return {
        typeUrl: "/OmniFlix.marketplace.v1beta1.MsgBuyNFT",
        value: MsgBuyNFT.fromJSON(value)
      };
    },
    createAuction(value: any) {
      return {
        typeUrl: "/OmniFlix.marketplace.v1beta1.MsgCreateAuction",
        value: MsgCreateAuction.fromJSON(value)
      };
    },
    cancelAuction(value: any) {
      return {
        typeUrl: "/OmniFlix.marketplace.v1beta1.MsgCancelAuction",
        value: MsgCancelAuction.fromJSON(value)
      };
    },
    placeBid(value: any) {
      return {
        typeUrl: "/OmniFlix.marketplace.v1beta1.MsgPlaceBid",
        value: MsgPlaceBid.fromJSON(value)
      };
    },
    updateParams(value: any) {
      return {
        typeUrl: "/OmniFlix.marketplace.v1beta1.MsgUpdateParams",
        value: MsgUpdateParams.fromJSON(value)
      };
    }
  },
  fromPartial: {
    listNFT(value: MsgListNFT) {
      return {
        typeUrl: "/OmniFlix.marketplace.v1beta1.MsgListNFT",
        value: MsgListNFT.fromPartial(value)
      };
    },
    editListing(value: MsgEditListing) {
      return {
        typeUrl: "/OmniFlix.marketplace.v1beta1.MsgEditListing",
        value: MsgEditListing.fromPartial(value)
      };
    },
    deListNFT(value: MsgDeListNFT) {
      return {
        typeUrl: "/OmniFlix.marketplace.v1beta1.MsgDeListNFT",
        value: MsgDeListNFT.fromPartial(value)
      };
    },
    buyNFT(value: MsgBuyNFT) {
      return {
        typeUrl: "/OmniFlix.marketplace.v1beta1.MsgBuyNFT",
        value: MsgBuyNFT.fromPartial(value)
      };
    },
    createAuction(value: MsgCreateAuction) {
      return {
        typeUrl: "/OmniFlix.marketplace.v1beta1.MsgCreateAuction",
        value: MsgCreateAuction.fromPartial(value)
      };
    },
    cancelAuction(value: MsgCancelAuction) {
      return {
        typeUrl: "/OmniFlix.marketplace.v1beta1.MsgCancelAuction",
        value: MsgCancelAuction.fromPartial(value)
      };
    },
    placeBid(value: MsgPlaceBid) {
      return {
        typeUrl: "/OmniFlix.marketplace.v1beta1.MsgPlaceBid",
        value: MsgPlaceBid.fromPartial(value)
      };
    },
    updateParams(value: MsgUpdateParams) {
      return {
        typeUrl: "/OmniFlix.marketplace.v1beta1.MsgUpdateParams",
        value: MsgUpdateParams.fromPartial(value)
      };
    }
  }
};