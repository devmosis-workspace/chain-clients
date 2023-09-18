import { MsgListNFT, MsgEditListing, MsgDeListNFT, MsgBuyNFT, MsgCreateAuction, MsgCancelAuction, MsgPlaceBid } from "./tx";
export declare const AminoConverter: {
    "/OmniFlix.marketplace.v1beta1.MsgListNFT": {
        aminoType: string;
        toAmino: (message: MsgListNFT) => import("./tx").MsgListNFTAmino;
        fromAmino: (object: import("./tx").MsgListNFTAmino) => MsgListNFT;
    };
    "/OmniFlix.marketplace.v1beta1.MsgEditListing": {
        aminoType: string;
        toAmino: (message: MsgEditListing) => import("./tx").MsgEditListingAmino;
        fromAmino: (object: import("./tx").MsgEditListingAmino) => MsgEditListing;
    };
    "/OmniFlix.marketplace.v1beta1.MsgDeListNFT": {
        aminoType: string;
        toAmino: (message: MsgDeListNFT) => import("./tx").MsgDeListNFTAmino;
        fromAmino: (object: import("./tx").MsgDeListNFTAmino) => MsgDeListNFT;
    };
    "/OmniFlix.marketplace.v1beta1.MsgBuyNFT": {
        aminoType: string;
        toAmino: (message: MsgBuyNFT) => import("./tx").MsgBuyNFTAmino;
        fromAmino: (object: import("./tx").MsgBuyNFTAmino) => MsgBuyNFT;
    };
    "/OmniFlix.marketplace.v1beta1.MsgCreateAuction": {
        aminoType: string;
        toAmino: (message: MsgCreateAuction) => import("./tx").MsgCreateAuctionAmino;
        fromAmino: (object: import("./tx").MsgCreateAuctionAmino) => MsgCreateAuction;
    };
    "/OmniFlix.marketplace.v1beta1.MsgCancelAuction": {
        aminoType: string;
        toAmino: (message: MsgCancelAuction) => import("./tx").MsgCancelAuctionAmino;
        fromAmino: (object: import("./tx").MsgCancelAuctionAmino) => MsgCancelAuction;
    };
    "/OmniFlix.marketplace.v1beta1.MsgPlaceBid": {
        aminoType: string;
        toAmino: (message: MsgPlaceBid) => import("./tx").MsgPlaceBidAmino;
        fromAmino: (object: import("./tx").MsgPlaceBidAmino) => MsgPlaceBid;
    };
};
