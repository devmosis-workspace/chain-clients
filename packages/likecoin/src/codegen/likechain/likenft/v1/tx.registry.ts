import { GeneratedType, Registry } from "@cosmjs/proto-signing";
import { MsgNewClass, MsgUpdateClass, MsgMintNFT, MsgBurnNFT, MsgCreateBlindBoxContent, MsgUpdateBlindBoxContent, MsgDeleteBlindBoxContent, MsgCreateOffer, MsgUpdateOffer, MsgDeleteOffer, MsgCreateListing, MsgUpdateListing, MsgDeleteListing, MsgSellNFT, MsgBuyNFT, MsgCreateRoyaltyConfig, MsgUpdateRoyaltyConfig, MsgDeleteRoyaltyConfig } from "./tx";
export const registry: ReadonlyArray<[string, GeneratedType]> = [["/likechain.likenft.v1.MsgNewClass", MsgNewClass], ["/likechain.likenft.v1.MsgUpdateClass", MsgUpdateClass], ["/likechain.likenft.v1.MsgMintNFT", MsgMintNFT], ["/likechain.likenft.v1.MsgBurnNFT", MsgBurnNFT], ["/likechain.likenft.v1.MsgCreateBlindBoxContent", MsgCreateBlindBoxContent], ["/likechain.likenft.v1.MsgUpdateBlindBoxContent", MsgUpdateBlindBoxContent], ["/likechain.likenft.v1.MsgDeleteBlindBoxContent", MsgDeleteBlindBoxContent], ["/likechain.likenft.v1.MsgCreateOffer", MsgCreateOffer], ["/likechain.likenft.v1.MsgUpdateOffer", MsgUpdateOffer], ["/likechain.likenft.v1.MsgDeleteOffer", MsgDeleteOffer], ["/likechain.likenft.v1.MsgCreateListing", MsgCreateListing], ["/likechain.likenft.v1.MsgUpdateListing", MsgUpdateListing], ["/likechain.likenft.v1.MsgDeleteListing", MsgDeleteListing], ["/likechain.likenft.v1.MsgSellNFT", MsgSellNFT], ["/likechain.likenft.v1.MsgBuyNFT", MsgBuyNFT], ["/likechain.likenft.v1.MsgCreateRoyaltyConfig", MsgCreateRoyaltyConfig], ["/likechain.likenft.v1.MsgUpdateRoyaltyConfig", MsgUpdateRoyaltyConfig], ["/likechain.likenft.v1.MsgDeleteRoyaltyConfig", MsgDeleteRoyaltyConfig]];
export const load = (protoRegistry: Registry) => {
  registry.forEach(([typeUrl, mod]) => {
    protoRegistry.register(typeUrl, mod);
  });
};
export const MessageComposer = {
  encoded: {
    newClass(value: MsgNewClass) {
      return {
        typeUrl: "/likechain.likenft.v1.MsgNewClass",
        value: MsgNewClass.encode(value).finish()
      };
    },
    updateClass(value: MsgUpdateClass) {
      return {
        typeUrl: "/likechain.likenft.v1.MsgUpdateClass",
        value: MsgUpdateClass.encode(value).finish()
      };
    },
    mintNFT(value: MsgMintNFT) {
      return {
        typeUrl: "/likechain.likenft.v1.MsgMintNFT",
        value: MsgMintNFT.encode(value).finish()
      };
    },
    burnNFT(value: MsgBurnNFT) {
      return {
        typeUrl: "/likechain.likenft.v1.MsgBurnNFT",
        value: MsgBurnNFT.encode(value).finish()
      };
    },
    createBlindBoxContent(value: MsgCreateBlindBoxContent) {
      return {
        typeUrl: "/likechain.likenft.v1.MsgCreateBlindBoxContent",
        value: MsgCreateBlindBoxContent.encode(value).finish()
      };
    },
    updateBlindBoxContent(value: MsgUpdateBlindBoxContent) {
      return {
        typeUrl: "/likechain.likenft.v1.MsgUpdateBlindBoxContent",
        value: MsgUpdateBlindBoxContent.encode(value).finish()
      };
    },
    deleteBlindBoxContent(value: MsgDeleteBlindBoxContent) {
      return {
        typeUrl: "/likechain.likenft.v1.MsgDeleteBlindBoxContent",
        value: MsgDeleteBlindBoxContent.encode(value).finish()
      };
    },
    createOffer(value: MsgCreateOffer) {
      return {
        typeUrl: "/likechain.likenft.v1.MsgCreateOffer",
        value: MsgCreateOffer.encode(value).finish()
      };
    },
    updateOffer(value: MsgUpdateOffer) {
      return {
        typeUrl: "/likechain.likenft.v1.MsgUpdateOffer",
        value: MsgUpdateOffer.encode(value).finish()
      };
    },
    deleteOffer(value: MsgDeleteOffer) {
      return {
        typeUrl: "/likechain.likenft.v1.MsgDeleteOffer",
        value: MsgDeleteOffer.encode(value).finish()
      };
    },
    createListing(value: MsgCreateListing) {
      return {
        typeUrl: "/likechain.likenft.v1.MsgCreateListing",
        value: MsgCreateListing.encode(value).finish()
      };
    },
    updateListing(value: MsgUpdateListing) {
      return {
        typeUrl: "/likechain.likenft.v1.MsgUpdateListing",
        value: MsgUpdateListing.encode(value).finish()
      };
    },
    deleteListing(value: MsgDeleteListing) {
      return {
        typeUrl: "/likechain.likenft.v1.MsgDeleteListing",
        value: MsgDeleteListing.encode(value).finish()
      };
    },
    sellNFT(value: MsgSellNFT) {
      return {
        typeUrl: "/likechain.likenft.v1.MsgSellNFT",
        value: MsgSellNFT.encode(value).finish()
      };
    },
    buyNFT(value: MsgBuyNFT) {
      return {
        typeUrl: "/likechain.likenft.v1.MsgBuyNFT",
        value: MsgBuyNFT.encode(value).finish()
      };
    },
    createRoyaltyConfig(value: MsgCreateRoyaltyConfig) {
      return {
        typeUrl: "/likechain.likenft.v1.MsgCreateRoyaltyConfig",
        value: MsgCreateRoyaltyConfig.encode(value).finish()
      };
    },
    updateRoyaltyConfig(value: MsgUpdateRoyaltyConfig) {
      return {
        typeUrl: "/likechain.likenft.v1.MsgUpdateRoyaltyConfig",
        value: MsgUpdateRoyaltyConfig.encode(value).finish()
      };
    },
    deleteRoyaltyConfig(value: MsgDeleteRoyaltyConfig) {
      return {
        typeUrl: "/likechain.likenft.v1.MsgDeleteRoyaltyConfig",
        value: MsgDeleteRoyaltyConfig.encode(value).finish()
      };
    }
  },
  withTypeUrl: {
    newClass(value: MsgNewClass) {
      return {
        typeUrl: "/likechain.likenft.v1.MsgNewClass",
        value
      };
    },
    updateClass(value: MsgUpdateClass) {
      return {
        typeUrl: "/likechain.likenft.v1.MsgUpdateClass",
        value
      };
    },
    mintNFT(value: MsgMintNFT) {
      return {
        typeUrl: "/likechain.likenft.v1.MsgMintNFT",
        value
      };
    },
    burnNFT(value: MsgBurnNFT) {
      return {
        typeUrl: "/likechain.likenft.v1.MsgBurnNFT",
        value
      };
    },
    createBlindBoxContent(value: MsgCreateBlindBoxContent) {
      return {
        typeUrl: "/likechain.likenft.v1.MsgCreateBlindBoxContent",
        value
      };
    },
    updateBlindBoxContent(value: MsgUpdateBlindBoxContent) {
      return {
        typeUrl: "/likechain.likenft.v1.MsgUpdateBlindBoxContent",
        value
      };
    },
    deleteBlindBoxContent(value: MsgDeleteBlindBoxContent) {
      return {
        typeUrl: "/likechain.likenft.v1.MsgDeleteBlindBoxContent",
        value
      };
    },
    createOffer(value: MsgCreateOffer) {
      return {
        typeUrl: "/likechain.likenft.v1.MsgCreateOffer",
        value
      };
    },
    updateOffer(value: MsgUpdateOffer) {
      return {
        typeUrl: "/likechain.likenft.v1.MsgUpdateOffer",
        value
      };
    },
    deleteOffer(value: MsgDeleteOffer) {
      return {
        typeUrl: "/likechain.likenft.v1.MsgDeleteOffer",
        value
      };
    },
    createListing(value: MsgCreateListing) {
      return {
        typeUrl: "/likechain.likenft.v1.MsgCreateListing",
        value
      };
    },
    updateListing(value: MsgUpdateListing) {
      return {
        typeUrl: "/likechain.likenft.v1.MsgUpdateListing",
        value
      };
    },
    deleteListing(value: MsgDeleteListing) {
      return {
        typeUrl: "/likechain.likenft.v1.MsgDeleteListing",
        value
      };
    },
    sellNFT(value: MsgSellNFT) {
      return {
        typeUrl: "/likechain.likenft.v1.MsgSellNFT",
        value
      };
    },
    buyNFT(value: MsgBuyNFT) {
      return {
        typeUrl: "/likechain.likenft.v1.MsgBuyNFT",
        value
      };
    },
    createRoyaltyConfig(value: MsgCreateRoyaltyConfig) {
      return {
        typeUrl: "/likechain.likenft.v1.MsgCreateRoyaltyConfig",
        value
      };
    },
    updateRoyaltyConfig(value: MsgUpdateRoyaltyConfig) {
      return {
        typeUrl: "/likechain.likenft.v1.MsgUpdateRoyaltyConfig",
        value
      };
    },
    deleteRoyaltyConfig(value: MsgDeleteRoyaltyConfig) {
      return {
        typeUrl: "/likechain.likenft.v1.MsgDeleteRoyaltyConfig",
        value
      };
    }
  },
  fromJSON: {
    newClass(value: any) {
      return {
        typeUrl: "/likechain.likenft.v1.MsgNewClass",
        value: MsgNewClass.fromJSON(value)
      };
    },
    updateClass(value: any) {
      return {
        typeUrl: "/likechain.likenft.v1.MsgUpdateClass",
        value: MsgUpdateClass.fromJSON(value)
      };
    },
    mintNFT(value: any) {
      return {
        typeUrl: "/likechain.likenft.v1.MsgMintNFT",
        value: MsgMintNFT.fromJSON(value)
      };
    },
    burnNFT(value: any) {
      return {
        typeUrl: "/likechain.likenft.v1.MsgBurnNFT",
        value: MsgBurnNFT.fromJSON(value)
      };
    },
    createBlindBoxContent(value: any) {
      return {
        typeUrl: "/likechain.likenft.v1.MsgCreateBlindBoxContent",
        value: MsgCreateBlindBoxContent.fromJSON(value)
      };
    },
    updateBlindBoxContent(value: any) {
      return {
        typeUrl: "/likechain.likenft.v1.MsgUpdateBlindBoxContent",
        value: MsgUpdateBlindBoxContent.fromJSON(value)
      };
    },
    deleteBlindBoxContent(value: any) {
      return {
        typeUrl: "/likechain.likenft.v1.MsgDeleteBlindBoxContent",
        value: MsgDeleteBlindBoxContent.fromJSON(value)
      };
    },
    createOffer(value: any) {
      return {
        typeUrl: "/likechain.likenft.v1.MsgCreateOffer",
        value: MsgCreateOffer.fromJSON(value)
      };
    },
    updateOffer(value: any) {
      return {
        typeUrl: "/likechain.likenft.v1.MsgUpdateOffer",
        value: MsgUpdateOffer.fromJSON(value)
      };
    },
    deleteOffer(value: any) {
      return {
        typeUrl: "/likechain.likenft.v1.MsgDeleteOffer",
        value: MsgDeleteOffer.fromJSON(value)
      };
    },
    createListing(value: any) {
      return {
        typeUrl: "/likechain.likenft.v1.MsgCreateListing",
        value: MsgCreateListing.fromJSON(value)
      };
    },
    updateListing(value: any) {
      return {
        typeUrl: "/likechain.likenft.v1.MsgUpdateListing",
        value: MsgUpdateListing.fromJSON(value)
      };
    },
    deleteListing(value: any) {
      return {
        typeUrl: "/likechain.likenft.v1.MsgDeleteListing",
        value: MsgDeleteListing.fromJSON(value)
      };
    },
    sellNFT(value: any) {
      return {
        typeUrl: "/likechain.likenft.v1.MsgSellNFT",
        value: MsgSellNFT.fromJSON(value)
      };
    },
    buyNFT(value: any) {
      return {
        typeUrl: "/likechain.likenft.v1.MsgBuyNFT",
        value: MsgBuyNFT.fromJSON(value)
      };
    },
    createRoyaltyConfig(value: any) {
      return {
        typeUrl: "/likechain.likenft.v1.MsgCreateRoyaltyConfig",
        value: MsgCreateRoyaltyConfig.fromJSON(value)
      };
    },
    updateRoyaltyConfig(value: any) {
      return {
        typeUrl: "/likechain.likenft.v1.MsgUpdateRoyaltyConfig",
        value: MsgUpdateRoyaltyConfig.fromJSON(value)
      };
    },
    deleteRoyaltyConfig(value: any) {
      return {
        typeUrl: "/likechain.likenft.v1.MsgDeleteRoyaltyConfig",
        value: MsgDeleteRoyaltyConfig.fromJSON(value)
      };
    }
  },
  fromPartial: {
    newClass(value: MsgNewClass) {
      return {
        typeUrl: "/likechain.likenft.v1.MsgNewClass",
        value: MsgNewClass.fromPartial(value)
      };
    },
    updateClass(value: MsgUpdateClass) {
      return {
        typeUrl: "/likechain.likenft.v1.MsgUpdateClass",
        value: MsgUpdateClass.fromPartial(value)
      };
    },
    mintNFT(value: MsgMintNFT) {
      return {
        typeUrl: "/likechain.likenft.v1.MsgMintNFT",
        value: MsgMintNFT.fromPartial(value)
      };
    },
    burnNFT(value: MsgBurnNFT) {
      return {
        typeUrl: "/likechain.likenft.v1.MsgBurnNFT",
        value: MsgBurnNFT.fromPartial(value)
      };
    },
    createBlindBoxContent(value: MsgCreateBlindBoxContent) {
      return {
        typeUrl: "/likechain.likenft.v1.MsgCreateBlindBoxContent",
        value: MsgCreateBlindBoxContent.fromPartial(value)
      };
    },
    updateBlindBoxContent(value: MsgUpdateBlindBoxContent) {
      return {
        typeUrl: "/likechain.likenft.v1.MsgUpdateBlindBoxContent",
        value: MsgUpdateBlindBoxContent.fromPartial(value)
      };
    },
    deleteBlindBoxContent(value: MsgDeleteBlindBoxContent) {
      return {
        typeUrl: "/likechain.likenft.v1.MsgDeleteBlindBoxContent",
        value: MsgDeleteBlindBoxContent.fromPartial(value)
      };
    },
    createOffer(value: MsgCreateOffer) {
      return {
        typeUrl: "/likechain.likenft.v1.MsgCreateOffer",
        value: MsgCreateOffer.fromPartial(value)
      };
    },
    updateOffer(value: MsgUpdateOffer) {
      return {
        typeUrl: "/likechain.likenft.v1.MsgUpdateOffer",
        value: MsgUpdateOffer.fromPartial(value)
      };
    },
    deleteOffer(value: MsgDeleteOffer) {
      return {
        typeUrl: "/likechain.likenft.v1.MsgDeleteOffer",
        value: MsgDeleteOffer.fromPartial(value)
      };
    },
    createListing(value: MsgCreateListing) {
      return {
        typeUrl: "/likechain.likenft.v1.MsgCreateListing",
        value: MsgCreateListing.fromPartial(value)
      };
    },
    updateListing(value: MsgUpdateListing) {
      return {
        typeUrl: "/likechain.likenft.v1.MsgUpdateListing",
        value: MsgUpdateListing.fromPartial(value)
      };
    },
    deleteListing(value: MsgDeleteListing) {
      return {
        typeUrl: "/likechain.likenft.v1.MsgDeleteListing",
        value: MsgDeleteListing.fromPartial(value)
      };
    },
    sellNFT(value: MsgSellNFT) {
      return {
        typeUrl: "/likechain.likenft.v1.MsgSellNFT",
        value: MsgSellNFT.fromPartial(value)
      };
    },
    buyNFT(value: MsgBuyNFT) {
      return {
        typeUrl: "/likechain.likenft.v1.MsgBuyNFT",
        value: MsgBuyNFT.fromPartial(value)
      };
    },
    createRoyaltyConfig(value: MsgCreateRoyaltyConfig) {
      return {
        typeUrl: "/likechain.likenft.v1.MsgCreateRoyaltyConfig",
        value: MsgCreateRoyaltyConfig.fromPartial(value)
      };
    },
    updateRoyaltyConfig(value: MsgUpdateRoyaltyConfig) {
      return {
        typeUrl: "/likechain.likenft.v1.MsgUpdateRoyaltyConfig",
        value: MsgUpdateRoyaltyConfig.fromPartial(value)
      };
    },
    deleteRoyaltyConfig(value: MsgDeleteRoyaltyConfig) {
      return {
        typeUrl: "/likechain.likenft.v1.MsgDeleteRoyaltyConfig",
        value: MsgDeleteRoyaltyConfig.fromPartial(value)
      };
    }
  }
};