import { GeneratedType, Registry } from "@cosmjs/proto-signing";
import { MsgNewClass, MsgUpdateClass, MsgMintNFT, MsgBurnNFT, MsgCreateBlindBoxContent, MsgUpdateBlindBoxContent, MsgDeleteBlindBoxContent, MsgCreateOffer, MsgUpdateOffer, MsgDeleteOffer, MsgCreateListing, MsgUpdateListing, MsgDeleteListing, MsgSellNFT, MsgBuyNFT, MsgCreateRoyaltyConfig, MsgUpdateRoyaltyConfig, MsgDeleteRoyaltyConfig } from "./tx";
export declare const registry: ReadonlyArray<[string, GeneratedType]>;
export declare const load: (protoRegistry: Registry) => void;
export declare const MessageComposer: {
    encoded: {
        newClass(value: MsgNewClass): {
            typeUrl: string;
            value: Uint8Array;
        };
        updateClass(value: MsgUpdateClass): {
            typeUrl: string;
            value: Uint8Array;
        };
        mintNFT(value: MsgMintNFT): {
            typeUrl: string;
            value: Uint8Array;
        };
        burnNFT(value: MsgBurnNFT): {
            typeUrl: string;
            value: Uint8Array;
        };
        createBlindBoxContent(value: MsgCreateBlindBoxContent): {
            typeUrl: string;
            value: Uint8Array;
        };
        updateBlindBoxContent(value: MsgUpdateBlindBoxContent): {
            typeUrl: string;
            value: Uint8Array;
        };
        deleteBlindBoxContent(value: MsgDeleteBlindBoxContent): {
            typeUrl: string;
            value: Uint8Array;
        };
        createOffer(value: MsgCreateOffer): {
            typeUrl: string;
            value: Uint8Array;
        };
        updateOffer(value: MsgUpdateOffer): {
            typeUrl: string;
            value: Uint8Array;
        };
        deleteOffer(value: MsgDeleteOffer): {
            typeUrl: string;
            value: Uint8Array;
        };
        createListing(value: MsgCreateListing): {
            typeUrl: string;
            value: Uint8Array;
        };
        updateListing(value: MsgUpdateListing): {
            typeUrl: string;
            value: Uint8Array;
        };
        deleteListing(value: MsgDeleteListing): {
            typeUrl: string;
            value: Uint8Array;
        };
        sellNFT(value: MsgSellNFT): {
            typeUrl: string;
            value: Uint8Array;
        };
        buyNFT(value: MsgBuyNFT): {
            typeUrl: string;
            value: Uint8Array;
        };
        createRoyaltyConfig(value: MsgCreateRoyaltyConfig): {
            typeUrl: string;
            value: Uint8Array;
        };
        updateRoyaltyConfig(value: MsgUpdateRoyaltyConfig): {
            typeUrl: string;
            value: Uint8Array;
        };
        deleteRoyaltyConfig(value: MsgDeleteRoyaltyConfig): {
            typeUrl: string;
            value: Uint8Array;
        };
    };
    withTypeUrl: {
        newClass(value: MsgNewClass): {
            typeUrl: string;
            value: MsgNewClass;
        };
        updateClass(value: MsgUpdateClass): {
            typeUrl: string;
            value: MsgUpdateClass;
        };
        mintNFT(value: MsgMintNFT): {
            typeUrl: string;
            value: MsgMintNFT;
        };
        burnNFT(value: MsgBurnNFT): {
            typeUrl: string;
            value: MsgBurnNFT;
        };
        createBlindBoxContent(value: MsgCreateBlindBoxContent): {
            typeUrl: string;
            value: MsgCreateBlindBoxContent;
        };
        updateBlindBoxContent(value: MsgUpdateBlindBoxContent): {
            typeUrl: string;
            value: MsgUpdateBlindBoxContent;
        };
        deleteBlindBoxContent(value: MsgDeleteBlindBoxContent): {
            typeUrl: string;
            value: MsgDeleteBlindBoxContent;
        };
        createOffer(value: MsgCreateOffer): {
            typeUrl: string;
            value: MsgCreateOffer;
        };
        updateOffer(value: MsgUpdateOffer): {
            typeUrl: string;
            value: MsgUpdateOffer;
        };
        deleteOffer(value: MsgDeleteOffer): {
            typeUrl: string;
            value: MsgDeleteOffer;
        };
        createListing(value: MsgCreateListing): {
            typeUrl: string;
            value: MsgCreateListing;
        };
        updateListing(value: MsgUpdateListing): {
            typeUrl: string;
            value: MsgUpdateListing;
        };
        deleteListing(value: MsgDeleteListing): {
            typeUrl: string;
            value: MsgDeleteListing;
        };
        sellNFT(value: MsgSellNFT): {
            typeUrl: string;
            value: MsgSellNFT;
        };
        buyNFT(value: MsgBuyNFT): {
            typeUrl: string;
            value: MsgBuyNFT;
        };
        createRoyaltyConfig(value: MsgCreateRoyaltyConfig): {
            typeUrl: string;
            value: MsgCreateRoyaltyConfig;
        };
        updateRoyaltyConfig(value: MsgUpdateRoyaltyConfig): {
            typeUrl: string;
            value: MsgUpdateRoyaltyConfig;
        };
        deleteRoyaltyConfig(value: MsgDeleteRoyaltyConfig): {
            typeUrl: string;
            value: MsgDeleteRoyaltyConfig;
        };
    };
    fromJSON: {
        newClass(value: any): {
            typeUrl: string;
            value: MsgNewClass;
        };
        updateClass(value: any): {
            typeUrl: string;
            value: MsgUpdateClass;
        };
        mintNFT(value: any): {
            typeUrl: string;
            value: MsgMintNFT;
        };
        burnNFT(value: any): {
            typeUrl: string;
            value: MsgBurnNFT;
        };
        createBlindBoxContent(value: any): {
            typeUrl: string;
            value: MsgCreateBlindBoxContent;
        };
        updateBlindBoxContent(value: any): {
            typeUrl: string;
            value: MsgUpdateBlindBoxContent;
        };
        deleteBlindBoxContent(value: any): {
            typeUrl: string;
            value: MsgDeleteBlindBoxContent;
        };
        createOffer(value: any): {
            typeUrl: string;
            value: MsgCreateOffer;
        };
        updateOffer(value: any): {
            typeUrl: string;
            value: MsgUpdateOffer;
        };
        deleteOffer(value: any): {
            typeUrl: string;
            value: MsgDeleteOffer;
        };
        createListing(value: any): {
            typeUrl: string;
            value: MsgCreateListing;
        };
        updateListing(value: any): {
            typeUrl: string;
            value: MsgUpdateListing;
        };
        deleteListing(value: any): {
            typeUrl: string;
            value: MsgDeleteListing;
        };
        sellNFT(value: any): {
            typeUrl: string;
            value: MsgSellNFT;
        };
        buyNFT(value: any): {
            typeUrl: string;
            value: MsgBuyNFT;
        };
        createRoyaltyConfig(value: any): {
            typeUrl: string;
            value: MsgCreateRoyaltyConfig;
        };
        updateRoyaltyConfig(value: any): {
            typeUrl: string;
            value: MsgUpdateRoyaltyConfig;
        };
        deleteRoyaltyConfig(value: any): {
            typeUrl: string;
            value: MsgDeleteRoyaltyConfig;
        };
    };
    fromPartial: {
        newClass(value: MsgNewClass): {
            typeUrl: string;
            value: MsgNewClass;
        };
        updateClass(value: MsgUpdateClass): {
            typeUrl: string;
            value: MsgUpdateClass;
        };
        mintNFT(value: MsgMintNFT): {
            typeUrl: string;
            value: MsgMintNFT;
        };
        burnNFT(value: MsgBurnNFT): {
            typeUrl: string;
            value: MsgBurnNFT;
        };
        createBlindBoxContent(value: MsgCreateBlindBoxContent): {
            typeUrl: string;
            value: MsgCreateBlindBoxContent;
        };
        updateBlindBoxContent(value: MsgUpdateBlindBoxContent): {
            typeUrl: string;
            value: MsgUpdateBlindBoxContent;
        };
        deleteBlindBoxContent(value: MsgDeleteBlindBoxContent): {
            typeUrl: string;
            value: MsgDeleteBlindBoxContent;
        };
        createOffer(value: MsgCreateOffer): {
            typeUrl: string;
            value: MsgCreateOffer;
        };
        updateOffer(value: MsgUpdateOffer): {
            typeUrl: string;
            value: MsgUpdateOffer;
        };
        deleteOffer(value: MsgDeleteOffer): {
            typeUrl: string;
            value: MsgDeleteOffer;
        };
        createListing(value: MsgCreateListing): {
            typeUrl: string;
            value: MsgCreateListing;
        };
        updateListing(value: MsgUpdateListing): {
            typeUrl: string;
            value: MsgUpdateListing;
        };
        deleteListing(value: MsgDeleteListing): {
            typeUrl: string;
            value: MsgDeleteListing;
        };
        sellNFT(value: MsgSellNFT): {
            typeUrl: string;
            value: MsgSellNFT;
        };
        buyNFT(value: MsgBuyNFT): {
            typeUrl: string;
            value: MsgBuyNFT;
        };
        createRoyaltyConfig(value: MsgCreateRoyaltyConfig): {
            typeUrl: string;
            value: MsgCreateRoyaltyConfig;
        };
        updateRoyaltyConfig(value: MsgUpdateRoyaltyConfig): {
            typeUrl: string;
            value: MsgUpdateRoyaltyConfig;
        };
        deleteRoyaltyConfig(value: MsgDeleteRoyaltyConfig): {
            typeUrl: string;
            value: MsgDeleteRoyaltyConfig;
        };
    };
};
