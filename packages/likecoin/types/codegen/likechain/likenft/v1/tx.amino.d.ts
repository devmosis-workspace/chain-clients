import { MsgNewClass, MsgUpdateClass, MsgMintNFT, MsgBurnNFT, MsgCreateBlindBoxContent, MsgUpdateBlindBoxContent, MsgDeleteBlindBoxContent, MsgCreateOffer, MsgUpdateOffer, MsgDeleteOffer, MsgCreateListing, MsgUpdateListing, MsgDeleteListing, MsgSellNFT, MsgBuyNFT, MsgCreateRoyaltyConfig, MsgUpdateRoyaltyConfig, MsgDeleteRoyaltyConfig } from "./tx";
export declare const AminoConverter: {
    "/likechain.likenft.v1.MsgNewClass": {
        aminoType: string;
        toAmino: (message: MsgNewClass) => import("./tx").MsgNewClassAmino;
        fromAmino: (object: import("./tx").MsgNewClassAmino) => MsgNewClass;
    };
    "/likechain.likenft.v1.MsgUpdateClass": {
        aminoType: string;
        toAmino: (message: MsgUpdateClass) => import("./tx").MsgUpdateClassAmino;
        fromAmino: (object: import("./tx").MsgUpdateClassAmino) => MsgUpdateClass;
    };
    "/likechain.likenft.v1.MsgMintNFT": {
        aminoType: string;
        toAmino: (message: MsgMintNFT) => import("./tx").MsgMintNFTAmino;
        fromAmino: (object: import("./tx").MsgMintNFTAmino) => MsgMintNFT;
    };
    "/likechain.likenft.v1.MsgBurnNFT": {
        aminoType: string;
        toAmino: (message: MsgBurnNFT) => import("./tx").MsgBurnNFTAmino;
        fromAmino: (object: import("./tx").MsgBurnNFTAmino) => MsgBurnNFT;
    };
    "/likechain.likenft.v1.MsgCreateBlindBoxContent": {
        aminoType: string;
        toAmino: (message: MsgCreateBlindBoxContent) => import("./tx").MsgCreateBlindBoxContentAmino;
        fromAmino: (object: import("./tx").MsgCreateBlindBoxContentAmino) => MsgCreateBlindBoxContent;
    };
    "/likechain.likenft.v1.MsgUpdateBlindBoxContent": {
        aminoType: string;
        toAmino: (message: MsgUpdateBlindBoxContent) => import("./tx").MsgUpdateBlindBoxContentAmino;
        fromAmino: (object: import("./tx").MsgUpdateBlindBoxContentAmino) => MsgUpdateBlindBoxContent;
    };
    "/likechain.likenft.v1.MsgDeleteBlindBoxContent": {
        aminoType: string;
        toAmino: (message: MsgDeleteBlindBoxContent) => import("./tx").MsgDeleteBlindBoxContentAmino;
        fromAmino: (object: import("./tx").MsgDeleteBlindBoxContentAmino) => MsgDeleteBlindBoxContent;
    };
    "/likechain.likenft.v1.MsgCreateOffer": {
        aminoType: string;
        toAmino: (message: MsgCreateOffer) => import("./tx").MsgCreateOfferAmino;
        fromAmino: (object: import("./tx").MsgCreateOfferAmino) => MsgCreateOffer;
    };
    "/likechain.likenft.v1.MsgUpdateOffer": {
        aminoType: string;
        toAmino: (message: MsgUpdateOffer) => import("./tx").MsgUpdateOfferAmino;
        fromAmino: (object: import("./tx").MsgUpdateOfferAmino) => MsgUpdateOffer;
    };
    "/likechain.likenft.v1.MsgDeleteOffer": {
        aminoType: string;
        toAmino: (message: MsgDeleteOffer) => import("./tx").MsgDeleteOfferAmino;
        fromAmino: (object: import("./tx").MsgDeleteOfferAmino) => MsgDeleteOffer;
    };
    "/likechain.likenft.v1.MsgCreateListing": {
        aminoType: string;
        toAmino: (message: MsgCreateListing) => import("./tx").MsgCreateListingAmino;
        fromAmino: (object: import("./tx").MsgCreateListingAmino) => MsgCreateListing;
    };
    "/likechain.likenft.v1.MsgUpdateListing": {
        aminoType: string;
        toAmino: (message: MsgUpdateListing) => import("./tx").MsgUpdateListingAmino;
        fromAmino: (object: import("./tx").MsgUpdateListingAmino) => MsgUpdateListing;
    };
    "/likechain.likenft.v1.MsgDeleteListing": {
        aminoType: string;
        toAmino: (message: MsgDeleteListing) => import("./tx").MsgDeleteListingAmino;
        fromAmino: (object: import("./tx").MsgDeleteListingAmino) => MsgDeleteListing;
    };
    "/likechain.likenft.v1.MsgSellNFT": {
        aminoType: string;
        toAmino: (message: MsgSellNFT) => import("./tx").MsgSellNFTAmino;
        fromAmino: (object: import("./tx").MsgSellNFTAmino) => MsgSellNFT;
    };
    "/likechain.likenft.v1.MsgBuyNFT": {
        aminoType: string;
        toAmino: (message: MsgBuyNFT) => import("./tx").MsgBuyNFTAmino;
        fromAmino: (object: import("./tx").MsgBuyNFTAmino) => MsgBuyNFT;
    };
    "/likechain.likenft.v1.MsgCreateRoyaltyConfig": {
        aminoType: string;
        toAmino: (message: MsgCreateRoyaltyConfig) => import("./tx").MsgCreateRoyaltyConfigAmino;
        fromAmino: (object: import("./tx").MsgCreateRoyaltyConfigAmino) => MsgCreateRoyaltyConfig;
    };
    "/likechain.likenft.v1.MsgUpdateRoyaltyConfig": {
        aminoType: string;
        toAmino: (message: MsgUpdateRoyaltyConfig) => import("./tx").MsgUpdateRoyaltyConfigAmino;
        fromAmino: (object: import("./tx").MsgUpdateRoyaltyConfigAmino) => MsgUpdateRoyaltyConfig;
    };
    "/likechain.likenft.v1.MsgDeleteRoyaltyConfig": {
        aminoType: string;
        toAmino: (message: MsgDeleteRoyaltyConfig) => import("./tx").MsgDeleteRoyaltyConfigAmino;
        fromAmino: (object: import("./tx").MsgDeleteRoyaltyConfigAmino) => MsgDeleteRoyaltyConfig;
    };
};
