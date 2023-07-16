import { Long } from "../../../helpers";
import * as _m0 from "protobufjs/minimal";
export interface EventNewClass {
    classId: string;
    parentIscnIdPrefix: string;
    parentAccount: string;
}
export interface EventNewClassSDKType {
    class_id: string;
    parent_iscn_id_prefix: string;
    parent_account: string;
}
export interface EventUpdateClass {
    classId: string;
    parentIscnIdPrefix: string;
    parentAccount: string;
}
export interface EventUpdateClassSDKType {
    class_id: string;
    parent_iscn_id_prefix: string;
    parent_account: string;
}
export interface EventRevealClass {
    classId: string;
    success: boolean;
    error: string;
}
export interface EventRevealClassSDKType {
    class_id: string;
    success: boolean;
    error: string;
}
export interface EventMintNFT {
    classId: string;
    nftId: string;
    owner: string;
    classParentIscnIdPrefix: string;
    classParentAccount: string;
}
export interface EventMintNFTSDKType {
    class_id: string;
    nft_id: string;
    owner: string;
    class_parent_iscn_id_prefix: string;
    class_parent_account: string;
}
export interface EventBurnNFT {
    classId: string;
    nftId: string;
    owner: string;
    classParentIscnIdPrefix: string;
    classParentAccount: string;
}
export interface EventBurnNFTSDKType {
    class_id: string;
    nft_id: string;
    owner: string;
    class_parent_iscn_id_prefix: string;
    class_parent_account: string;
}
export interface EventCreateBlindBoxContent {
    classId: string;
    contentId: string;
    classParentIscnIdPrefix: string;
    classParentAccount: string;
}
export interface EventCreateBlindBoxContentSDKType {
    class_id: string;
    content_id: string;
    class_parent_iscn_id_prefix: string;
    class_parent_account: string;
}
export interface EventUpdateBlindBoxContent {
    classId: string;
    contentId: string;
    classParentIscnIdPrefix: string;
    classParentAccount: string;
}
export interface EventUpdateBlindBoxContentSDKType {
    class_id: string;
    content_id: string;
    class_parent_iscn_id_prefix: string;
    class_parent_account: string;
}
export interface EventDeleteBlindBoxContent {
    classId: string;
    contentId: string;
    classParentIscnIdPrefix: string;
    classParentAccount: string;
}
export interface EventDeleteBlindBoxContentSDKType {
    class_id: string;
    content_id: string;
    class_parent_iscn_id_prefix: string;
    class_parent_account: string;
}
export interface EventCreateOffer {
    classId: string;
    nftId: string;
    buyer: string;
}
export interface EventCreateOfferSDKType {
    class_id: string;
    nft_id: string;
    buyer: string;
}
export interface EventUpdateOffer {
    classId: string;
    nftId: string;
    buyer: string;
}
export interface EventUpdateOfferSDKType {
    class_id: string;
    nft_id: string;
    buyer: string;
}
export interface EventDeleteOffer {
    classId: string;
    nftId: string;
    buyer: string;
}
export interface EventDeleteOfferSDKType {
    class_id: string;
    nft_id: string;
    buyer: string;
}
export interface EventCreateListing {
    classId: string;
    nftId: string;
    seller: string;
}
export interface EventCreateListingSDKType {
    class_id: string;
    nft_id: string;
    seller: string;
}
export interface EventUpdateListing {
    classId: string;
    nftId: string;
    seller: string;
}
export interface EventUpdateListingSDKType {
    class_id: string;
    nft_id: string;
    seller: string;
}
export interface EventDeleteListing {
    classId: string;
    nftId: string;
    seller: string;
}
export interface EventDeleteListingSDKType {
    class_id: string;
    nft_id: string;
    seller: string;
}
export interface EventSellNFT {
    classId: string;
    nftId: string;
    seller: string;
    buyer: string;
    price: Long;
    fullPayToRoyalty: boolean;
}
export interface EventSellNFTSDKType {
    class_id: string;
    nft_id: string;
    seller: string;
    buyer: string;
    price: Long;
    full_pay_to_royalty: boolean;
}
export interface EventBuyNFT {
    classId: string;
    nftId: string;
    seller: string;
    buyer: string;
    price: Long;
}
export interface EventBuyNFTSDKType {
    class_id: string;
    nft_id: string;
    seller: string;
    buyer: string;
    price: Long;
}
export interface EventExpireOffer {
    classId: string;
    nftId: string;
    buyer: string;
    success: boolean;
    error: string;
}
export interface EventExpireOfferSDKType {
    class_id: string;
    nft_id: string;
    buyer: string;
    success: boolean;
    error: string;
}
export interface EventExpireListing {
    classId: string;
    nftId: string;
    seller: string;
    success: boolean;
    error: string;
}
export interface EventExpireListingSDKType {
    class_id: string;
    nft_id: string;
    seller: string;
    success: boolean;
    error: string;
}
export interface EventCreateRoyaltyConfig {
    classId: string;
}
export interface EventCreateRoyaltyConfigSDKType {
    class_id: string;
}
export interface EventUpdateRoyaltyConfig {
    classId: string;
}
export interface EventUpdateRoyaltyConfigSDKType {
    class_id: string;
}
export interface EventDeleteRoyaltyConfig {
    classId: string;
}
export interface EventDeleteRoyaltyConfigSDKType {
    class_id: string;
}
export declare const EventNewClass: {
    encode(message: EventNewClass, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): EventNewClass;
    fromPartial(object: Partial<EventNewClass>): EventNewClass;
};
export declare const EventUpdateClass: {
    encode(message: EventUpdateClass, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): EventUpdateClass;
    fromPartial(object: Partial<EventUpdateClass>): EventUpdateClass;
};
export declare const EventRevealClass: {
    encode(message: EventRevealClass, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): EventRevealClass;
    fromPartial(object: Partial<EventRevealClass>): EventRevealClass;
};
export declare const EventMintNFT: {
    encode(message: EventMintNFT, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): EventMintNFT;
    fromPartial(object: Partial<EventMintNFT>): EventMintNFT;
};
export declare const EventBurnNFT: {
    encode(message: EventBurnNFT, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): EventBurnNFT;
    fromPartial(object: Partial<EventBurnNFT>): EventBurnNFT;
};
export declare const EventCreateBlindBoxContent: {
    encode(message: EventCreateBlindBoxContent, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): EventCreateBlindBoxContent;
    fromPartial(object: Partial<EventCreateBlindBoxContent>): EventCreateBlindBoxContent;
};
export declare const EventUpdateBlindBoxContent: {
    encode(message: EventUpdateBlindBoxContent, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): EventUpdateBlindBoxContent;
    fromPartial(object: Partial<EventUpdateBlindBoxContent>): EventUpdateBlindBoxContent;
};
export declare const EventDeleteBlindBoxContent: {
    encode(message: EventDeleteBlindBoxContent, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): EventDeleteBlindBoxContent;
    fromPartial(object: Partial<EventDeleteBlindBoxContent>): EventDeleteBlindBoxContent;
};
export declare const EventCreateOffer: {
    encode(message: EventCreateOffer, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): EventCreateOffer;
    fromPartial(object: Partial<EventCreateOffer>): EventCreateOffer;
};
export declare const EventUpdateOffer: {
    encode(message: EventUpdateOffer, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): EventUpdateOffer;
    fromPartial(object: Partial<EventUpdateOffer>): EventUpdateOffer;
};
export declare const EventDeleteOffer: {
    encode(message: EventDeleteOffer, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): EventDeleteOffer;
    fromPartial(object: Partial<EventDeleteOffer>): EventDeleteOffer;
};
export declare const EventCreateListing: {
    encode(message: EventCreateListing, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): EventCreateListing;
    fromPartial(object: Partial<EventCreateListing>): EventCreateListing;
};
export declare const EventUpdateListing: {
    encode(message: EventUpdateListing, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): EventUpdateListing;
    fromPartial(object: Partial<EventUpdateListing>): EventUpdateListing;
};
export declare const EventDeleteListing: {
    encode(message: EventDeleteListing, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): EventDeleteListing;
    fromPartial(object: Partial<EventDeleteListing>): EventDeleteListing;
};
export declare const EventSellNFT: {
    encode(message: EventSellNFT, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): EventSellNFT;
    fromPartial(object: Partial<EventSellNFT>): EventSellNFT;
};
export declare const EventBuyNFT: {
    encode(message: EventBuyNFT, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): EventBuyNFT;
    fromPartial(object: Partial<EventBuyNFT>): EventBuyNFT;
};
export declare const EventExpireOffer: {
    encode(message: EventExpireOffer, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): EventExpireOffer;
    fromPartial(object: Partial<EventExpireOffer>): EventExpireOffer;
};
export declare const EventExpireListing: {
    encode(message: EventExpireListing, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): EventExpireListing;
    fromPartial(object: Partial<EventExpireListing>): EventExpireListing;
};
export declare const EventCreateRoyaltyConfig: {
    encode(message: EventCreateRoyaltyConfig, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): EventCreateRoyaltyConfig;
    fromPartial(object: Partial<EventCreateRoyaltyConfig>): EventCreateRoyaltyConfig;
};
export declare const EventUpdateRoyaltyConfig: {
    encode(message: EventUpdateRoyaltyConfig, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): EventUpdateRoyaltyConfig;
    fromPartial(object: Partial<EventUpdateRoyaltyConfig>): EventUpdateRoyaltyConfig;
};
export declare const EventDeleteRoyaltyConfig: {
    encode(message: EventDeleteRoyaltyConfig, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): EventDeleteRoyaltyConfig;
    fromPartial(object: Partial<EventDeleteRoyaltyConfig>): EventDeleteRoyaltyConfig;
};
