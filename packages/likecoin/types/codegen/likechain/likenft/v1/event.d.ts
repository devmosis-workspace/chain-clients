import { BinaryWriter } from "../../../binary";
export interface EventNewClass {
    classId: string;
    parentIscnIdPrefix: string;
    parentAccount: string;
}
export interface EventNewClassProtoMsg {
    typeUrl: "/likechain.likenft.v1.EventNewClass";
    value: Uint8Array;
}
export interface EventNewClassAmino {
    class_id: string;
    parent_iscn_id_prefix: string;
    parent_account: string;
}
export interface EventNewClassAminoMsg {
    type: "/likechain.likenft.v1.EventNewClass";
    value: EventNewClassAmino;
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
export interface EventUpdateClassProtoMsg {
    typeUrl: "/likechain.likenft.v1.EventUpdateClass";
    value: Uint8Array;
}
export interface EventUpdateClassAmino {
    class_id: string;
    parent_iscn_id_prefix: string;
    parent_account: string;
}
export interface EventUpdateClassAminoMsg {
    type: "/likechain.likenft.v1.EventUpdateClass";
    value: EventUpdateClassAmino;
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
export interface EventRevealClassProtoMsg {
    typeUrl: "/likechain.likenft.v1.EventRevealClass";
    value: Uint8Array;
}
export interface EventRevealClassAmino {
    class_id: string;
    success: boolean;
    error: string;
}
export interface EventRevealClassAminoMsg {
    type: "/likechain.likenft.v1.EventRevealClass";
    value: EventRevealClassAmino;
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
export interface EventMintNFTProtoMsg {
    typeUrl: "/likechain.likenft.v1.EventMintNFT";
    value: Uint8Array;
}
export interface EventMintNFTAmino {
    class_id: string;
    nft_id: string;
    owner: string;
    class_parent_iscn_id_prefix: string;
    class_parent_account: string;
}
export interface EventMintNFTAminoMsg {
    type: "/likechain.likenft.v1.EventMintNFT";
    value: EventMintNFTAmino;
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
export interface EventBurnNFTProtoMsg {
    typeUrl: "/likechain.likenft.v1.EventBurnNFT";
    value: Uint8Array;
}
export interface EventBurnNFTAmino {
    class_id: string;
    nft_id: string;
    owner: string;
    class_parent_iscn_id_prefix: string;
    class_parent_account: string;
}
export interface EventBurnNFTAminoMsg {
    type: "/likechain.likenft.v1.EventBurnNFT";
    value: EventBurnNFTAmino;
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
export interface EventCreateBlindBoxContentProtoMsg {
    typeUrl: "/likechain.likenft.v1.EventCreateBlindBoxContent";
    value: Uint8Array;
}
export interface EventCreateBlindBoxContentAmino {
    class_id: string;
    content_id: string;
    class_parent_iscn_id_prefix: string;
    class_parent_account: string;
}
export interface EventCreateBlindBoxContentAminoMsg {
    type: "/likechain.likenft.v1.EventCreateBlindBoxContent";
    value: EventCreateBlindBoxContentAmino;
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
export interface EventUpdateBlindBoxContentProtoMsg {
    typeUrl: "/likechain.likenft.v1.EventUpdateBlindBoxContent";
    value: Uint8Array;
}
export interface EventUpdateBlindBoxContentAmino {
    class_id: string;
    content_id: string;
    class_parent_iscn_id_prefix: string;
    class_parent_account: string;
}
export interface EventUpdateBlindBoxContentAminoMsg {
    type: "/likechain.likenft.v1.EventUpdateBlindBoxContent";
    value: EventUpdateBlindBoxContentAmino;
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
export interface EventDeleteBlindBoxContentProtoMsg {
    typeUrl: "/likechain.likenft.v1.EventDeleteBlindBoxContent";
    value: Uint8Array;
}
export interface EventDeleteBlindBoxContentAmino {
    class_id: string;
    content_id: string;
    class_parent_iscn_id_prefix: string;
    class_parent_account: string;
}
export interface EventDeleteBlindBoxContentAminoMsg {
    type: "/likechain.likenft.v1.EventDeleteBlindBoxContent";
    value: EventDeleteBlindBoxContentAmino;
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
export interface EventCreateOfferProtoMsg {
    typeUrl: "/likechain.likenft.v1.EventCreateOffer";
    value: Uint8Array;
}
export interface EventCreateOfferAmino {
    class_id: string;
    nft_id: string;
    buyer: string;
}
export interface EventCreateOfferAminoMsg {
    type: "/likechain.likenft.v1.EventCreateOffer";
    value: EventCreateOfferAmino;
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
export interface EventUpdateOfferProtoMsg {
    typeUrl: "/likechain.likenft.v1.EventUpdateOffer";
    value: Uint8Array;
}
export interface EventUpdateOfferAmino {
    class_id: string;
    nft_id: string;
    buyer: string;
}
export interface EventUpdateOfferAminoMsg {
    type: "/likechain.likenft.v1.EventUpdateOffer";
    value: EventUpdateOfferAmino;
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
export interface EventDeleteOfferProtoMsg {
    typeUrl: "/likechain.likenft.v1.EventDeleteOffer";
    value: Uint8Array;
}
export interface EventDeleteOfferAmino {
    class_id: string;
    nft_id: string;
    buyer: string;
}
export interface EventDeleteOfferAminoMsg {
    type: "/likechain.likenft.v1.EventDeleteOffer";
    value: EventDeleteOfferAmino;
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
export interface EventCreateListingProtoMsg {
    typeUrl: "/likechain.likenft.v1.EventCreateListing";
    value: Uint8Array;
}
export interface EventCreateListingAmino {
    class_id: string;
    nft_id: string;
    seller: string;
}
export interface EventCreateListingAminoMsg {
    type: "/likechain.likenft.v1.EventCreateListing";
    value: EventCreateListingAmino;
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
export interface EventUpdateListingProtoMsg {
    typeUrl: "/likechain.likenft.v1.EventUpdateListing";
    value: Uint8Array;
}
export interface EventUpdateListingAmino {
    class_id: string;
    nft_id: string;
    seller: string;
}
export interface EventUpdateListingAminoMsg {
    type: "/likechain.likenft.v1.EventUpdateListing";
    value: EventUpdateListingAmino;
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
export interface EventDeleteListingProtoMsg {
    typeUrl: "/likechain.likenft.v1.EventDeleteListing";
    value: Uint8Array;
}
export interface EventDeleteListingAmino {
    class_id: string;
    nft_id: string;
    seller: string;
}
export interface EventDeleteListingAminoMsg {
    type: "/likechain.likenft.v1.EventDeleteListing";
    value: EventDeleteListingAmino;
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
    price: bigint;
    fullPayToRoyalty: boolean;
}
export interface EventSellNFTProtoMsg {
    typeUrl: "/likechain.likenft.v1.EventSellNFT";
    value: Uint8Array;
}
export interface EventSellNFTAmino {
    class_id: string;
    nft_id: string;
    seller: string;
    buyer: string;
    price: string;
    full_pay_to_royalty: boolean;
}
export interface EventSellNFTAminoMsg {
    type: "/likechain.likenft.v1.EventSellNFT";
    value: EventSellNFTAmino;
}
export interface EventSellNFTSDKType {
    class_id: string;
    nft_id: string;
    seller: string;
    buyer: string;
    price: bigint;
    full_pay_to_royalty: boolean;
}
export interface EventBuyNFT {
    classId: string;
    nftId: string;
    seller: string;
    buyer: string;
    price: bigint;
}
export interface EventBuyNFTProtoMsg {
    typeUrl: "/likechain.likenft.v1.EventBuyNFT";
    value: Uint8Array;
}
export interface EventBuyNFTAmino {
    class_id: string;
    nft_id: string;
    seller: string;
    buyer: string;
    price: string;
}
export interface EventBuyNFTAminoMsg {
    type: "/likechain.likenft.v1.EventBuyNFT";
    value: EventBuyNFTAmino;
}
export interface EventBuyNFTSDKType {
    class_id: string;
    nft_id: string;
    seller: string;
    buyer: string;
    price: bigint;
}
export interface EventExpireOffer {
    classId: string;
    nftId: string;
    buyer: string;
    success: boolean;
    error: string;
}
export interface EventExpireOfferProtoMsg {
    typeUrl: "/likechain.likenft.v1.EventExpireOffer";
    value: Uint8Array;
}
export interface EventExpireOfferAmino {
    class_id: string;
    nft_id: string;
    buyer: string;
    success: boolean;
    error: string;
}
export interface EventExpireOfferAminoMsg {
    type: "/likechain.likenft.v1.EventExpireOffer";
    value: EventExpireOfferAmino;
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
export interface EventExpireListingProtoMsg {
    typeUrl: "/likechain.likenft.v1.EventExpireListing";
    value: Uint8Array;
}
export interface EventExpireListingAmino {
    class_id: string;
    nft_id: string;
    seller: string;
    success: boolean;
    error: string;
}
export interface EventExpireListingAminoMsg {
    type: "/likechain.likenft.v1.EventExpireListing";
    value: EventExpireListingAmino;
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
export interface EventCreateRoyaltyConfigProtoMsg {
    typeUrl: "/likechain.likenft.v1.EventCreateRoyaltyConfig";
    value: Uint8Array;
}
export interface EventCreateRoyaltyConfigAmino {
    class_id: string;
}
export interface EventCreateRoyaltyConfigAminoMsg {
    type: "/likechain.likenft.v1.EventCreateRoyaltyConfig";
    value: EventCreateRoyaltyConfigAmino;
}
export interface EventCreateRoyaltyConfigSDKType {
    class_id: string;
}
export interface EventUpdateRoyaltyConfig {
    classId: string;
}
export interface EventUpdateRoyaltyConfigProtoMsg {
    typeUrl: "/likechain.likenft.v1.EventUpdateRoyaltyConfig";
    value: Uint8Array;
}
export interface EventUpdateRoyaltyConfigAmino {
    class_id: string;
}
export interface EventUpdateRoyaltyConfigAminoMsg {
    type: "/likechain.likenft.v1.EventUpdateRoyaltyConfig";
    value: EventUpdateRoyaltyConfigAmino;
}
export interface EventUpdateRoyaltyConfigSDKType {
    class_id: string;
}
export interface EventDeleteRoyaltyConfig {
    classId: string;
}
export interface EventDeleteRoyaltyConfigProtoMsg {
    typeUrl: "/likechain.likenft.v1.EventDeleteRoyaltyConfig";
    value: Uint8Array;
}
export interface EventDeleteRoyaltyConfigAmino {
    class_id: string;
}
export interface EventDeleteRoyaltyConfigAminoMsg {
    type: "/likechain.likenft.v1.EventDeleteRoyaltyConfig";
    value: EventDeleteRoyaltyConfigAmino;
}
export interface EventDeleteRoyaltyConfigSDKType {
    class_id: string;
}
export declare const EventNewClass: {
    typeUrl: string;
    encode(message: EventNewClass, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): EventNewClass;
    fromPartial(object: Partial<EventNewClass>): EventNewClass;
    fromAmino(object: EventNewClassAmino): EventNewClass;
    toAmino(message: EventNewClass): EventNewClassAmino;
    fromAminoMsg(object: EventNewClassAminoMsg): EventNewClass;
    fromProtoMsg(message: EventNewClassProtoMsg): EventNewClass;
    toProto(message: EventNewClass): Uint8Array;
    toProtoMsg(message: EventNewClass): EventNewClassProtoMsg;
};
export declare const EventUpdateClass: {
    typeUrl: string;
    encode(message: EventUpdateClass, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): EventUpdateClass;
    fromPartial(object: Partial<EventUpdateClass>): EventUpdateClass;
    fromAmino(object: EventUpdateClassAmino): EventUpdateClass;
    toAmino(message: EventUpdateClass): EventUpdateClassAmino;
    fromAminoMsg(object: EventUpdateClassAminoMsg): EventUpdateClass;
    fromProtoMsg(message: EventUpdateClassProtoMsg): EventUpdateClass;
    toProto(message: EventUpdateClass): Uint8Array;
    toProtoMsg(message: EventUpdateClass): EventUpdateClassProtoMsg;
};
export declare const EventRevealClass: {
    typeUrl: string;
    encode(message: EventRevealClass, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): EventRevealClass;
    fromPartial(object: Partial<EventRevealClass>): EventRevealClass;
    fromAmino(object: EventRevealClassAmino): EventRevealClass;
    toAmino(message: EventRevealClass): EventRevealClassAmino;
    fromAminoMsg(object: EventRevealClassAminoMsg): EventRevealClass;
    fromProtoMsg(message: EventRevealClassProtoMsg): EventRevealClass;
    toProto(message: EventRevealClass): Uint8Array;
    toProtoMsg(message: EventRevealClass): EventRevealClassProtoMsg;
};
export declare const EventMintNFT: {
    typeUrl: string;
    encode(message: EventMintNFT, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): EventMintNFT;
    fromPartial(object: Partial<EventMintNFT>): EventMintNFT;
    fromAmino(object: EventMintNFTAmino): EventMintNFT;
    toAmino(message: EventMintNFT): EventMintNFTAmino;
    fromAminoMsg(object: EventMintNFTAminoMsg): EventMintNFT;
    fromProtoMsg(message: EventMintNFTProtoMsg): EventMintNFT;
    toProto(message: EventMintNFT): Uint8Array;
    toProtoMsg(message: EventMintNFT): EventMintNFTProtoMsg;
};
export declare const EventBurnNFT: {
    typeUrl: string;
    encode(message: EventBurnNFT, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): EventBurnNFT;
    fromPartial(object: Partial<EventBurnNFT>): EventBurnNFT;
    fromAmino(object: EventBurnNFTAmino): EventBurnNFT;
    toAmino(message: EventBurnNFT): EventBurnNFTAmino;
    fromAminoMsg(object: EventBurnNFTAminoMsg): EventBurnNFT;
    fromProtoMsg(message: EventBurnNFTProtoMsg): EventBurnNFT;
    toProto(message: EventBurnNFT): Uint8Array;
    toProtoMsg(message: EventBurnNFT): EventBurnNFTProtoMsg;
};
export declare const EventCreateBlindBoxContent: {
    typeUrl: string;
    encode(message: EventCreateBlindBoxContent, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): EventCreateBlindBoxContent;
    fromPartial(object: Partial<EventCreateBlindBoxContent>): EventCreateBlindBoxContent;
    fromAmino(object: EventCreateBlindBoxContentAmino): EventCreateBlindBoxContent;
    toAmino(message: EventCreateBlindBoxContent): EventCreateBlindBoxContentAmino;
    fromAminoMsg(object: EventCreateBlindBoxContentAminoMsg): EventCreateBlindBoxContent;
    fromProtoMsg(message: EventCreateBlindBoxContentProtoMsg): EventCreateBlindBoxContent;
    toProto(message: EventCreateBlindBoxContent): Uint8Array;
    toProtoMsg(message: EventCreateBlindBoxContent): EventCreateBlindBoxContentProtoMsg;
};
export declare const EventUpdateBlindBoxContent: {
    typeUrl: string;
    encode(message: EventUpdateBlindBoxContent, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): EventUpdateBlindBoxContent;
    fromPartial(object: Partial<EventUpdateBlindBoxContent>): EventUpdateBlindBoxContent;
    fromAmino(object: EventUpdateBlindBoxContentAmino): EventUpdateBlindBoxContent;
    toAmino(message: EventUpdateBlindBoxContent): EventUpdateBlindBoxContentAmino;
    fromAminoMsg(object: EventUpdateBlindBoxContentAminoMsg): EventUpdateBlindBoxContent;
    fromProtoMsg(message: EventUpdateBlindBoxContentProtoMsg): EventUpdateBlindBoxContent;
    toProto(message: EventUpdateBlindBoxContent): Uint8Array;
    toProtoMsg(message: EventUpdateBlindBoxContent): EventUpdateBlindBoxContentProtoMsg;
};
export declare const EventDeleteBlindBoxContent: {
    typeUrl: string;
    encode(message: EventDeleteBlindBoxContent, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): EventDeleteBlindBoxContent;
    fromPartial(object: Partial<EventDeleteBlindBoxContent>): EventDeleteBlindBoxContent;
    fromAmino(object: EventDeleteBlindBoxContentAmino): EventDeleteBlindBoxContent;
    toAmino(message: EventDeleteBlindBoxContent): EventDeleteBlindBoxContentAmino;
    fromAminoMsg(object: EventDeleteBlindBoxContentAminoMsg): EventDeleteBlindBoxContent;
    fromProtoMsg(message: EventDeleteBlindBoxContentProtoMsg): EventDeleteBlindBoxContent;
    toProto(message: EventDeleteBlindBoxContent): Uint8Array;
    toProtoMsg(message: EventDeleteBlindBoxContent): EventDeleteBlindBoxContentProtoMsg;
};
export declare const EventCreateOffer: {
    typeUrl: string;
    encode(message: EventCreateOffer, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): EventCreateOffer;
    fromPartial(object: Partial<EventCreateOffer>): EventCreateOffer;
    fromAmino(object: EventCreateOfferAmino): EventCreateOffer;
    toAmino(message: EventCreateOffer): EventCreateOfferAmino;
    fromAminoMsg(object: EventCreateOfferAminoMsg): EventCreateOffer;
    fromProtoMsg(message: EventCreateOfferProtoMsg): EventCreateOffer;
    toProto(message: EventCreateOffer): Uint8Array;
    toProtoMsg(message: EventCreateOffer): EventCreateOfferProtoMsg;
};
export declare const EventUpdateOffer: {
    typeUrl: string;
    encode(message: EventUpdateOffer, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): EventUpdateOffer;
    fromPartial(object: Partial<EventUpdateOffer>): EventUpdateOffer;
    fromAmino(object: EventUpdateOfferAmino): EventUpdateOffer;
    toAmino(message: EventUpdateOffer): EventUpdateOfferAmino;
    fromAminoMsg(object: EventUpdateOfferAminoMsg): EventUpdateOffer;
    fromProtoMsg(message: EventUpdateOfferProtoMsg): EventUpdateOffer;
    toProto(message: EventUpdateOffer): Uint8Array;
    toProtoMsg(message: EventUpdateOffer): EventUpdateOfferProtoMsg;
};
export declare const EventDeleteOffer: {
    typeUrl: string;
    encode(message: EventDeleteOffer, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): EventDeleteOffer;
    fromPartial(object: Partial<EventDeleteOffer>): EventDeleteOffer;
    fromAmino(object: EventDeleteOfferAmino): EventDeleteOffer;
    toAmino(message: EventDeleteOffer): EventDeleteOfferAmino;
    fromAminoMsg(object: EventDeleteOfferAminoMsg): EventDeleteOffer;
    fromProtoMsg(message: EventDeleteOfferProtoMsg): EventDeleteOffer;
    toProto(message: EventDeleteOffer): Uint8Array;
    toProtoMsg(message: EventDeleteOffer): EventDeleteOfferProtoMsg;
};
export declare const EventCreateListing: {
    typeUrl: string;
    encode(message: EventCreateListing, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): EventCreateListing;
    fromPartial(object: Partial<EventCreateListing>): EventCreateListing;
    fromAmino(object: EventCreateListingAmino): EventCreateListing;
    toAmino(message: EventCreateListing): EventCreateListingAmino;
    fromAminoMsg(object: EventCreateListingAminoMsg): EventCreateListing;
    fromProtoMsg(message: EventCreateListingProtoMsg): EventCreateListing;
    toProto(message: EventCreateListing): Uint8Array;
    toProtoMsg(message: EventCreateListing): EventCreateListingProtoMsg;
};
export declare const EventUpdateListing: {
    typeUrl: string;
    encode(message: EventUpdateListing, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): EventUpdateListing;
    fromPartial(object: Partial<EventUpdateListing>): EventUpdateListing;
    fromAmino(object: EventUpdateListingAmino): EventUpdateListing;
    toAmino(message: EventUpdateListing): EventUpdateListingAmino;
    fromAminoMsg(object: EventUpdateListingAminoMsg): EventUpdateListing;
    fromProtoMsg(message: EventUpdateListingProtoMsg): EventUpdateListing;
    toProto(message: EventUpdateListing): Uint8Array;
    toProtoMsg(message: EventUpdateListing): EventUpdateListingProtoMsg;
};
export declare const EventDeleteListing: {
    typeUrl: string;
    encode(message: EventDeleteListing, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): EventDeleteListing;
    fromPartial(object: Partial<EventDeleteListing>): EventDeleteListing;
    fromAmino(object: EventDeleteListingAmino): EventDeleteListing;
    toAmino(message: EventDeleteListing): EventDeleteListingAmino;
    fromAminoMsg(object: EventDeleteListingAminoMsg): EventDeleteListing;
    fromProtoMsg(message: EventDeleteListingProtoMsg): EventDeleteListing;
    toProto(message: EventDeleteListing): Uint8Array;
    toProtoMsg(message: EventDeleteListing): EventDeleteListingProtoMsg;
};
export declare const EventSellNFT: {
    typeUrl: string;
    encode(message: EventSellNFT, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): EventSellNFT;
    fromPartial(object: Partial<EventSellNFT>): EventSellNFT;
    fromAmino(object: EventSellNFTAmino): EventSellNFT;
    toAmino(message: EventSellNFT): EventSellNFTAmino;
    fromAminoMsg(object: EventSellNFTAminoMsg): EventSellNFT;
    fromProtoMsg(message: EventSellNFTProtoMsg): EventSellNFT;
    toProto(message: EventSellNFT): Uint8Array;
    toProtoMsg(message: EventSellNFT): EventSellNFTProtoMsg;
};
export declare const EventBuyNFT: {
    typeUrl: string;
    encode(message: EventBuyNFT, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): EventBuyNFT;
    fromPartial(object: Partial<EventBuyNFT>): EventBuyNFT;
    fromAmino(object: EventBuyNFTAmino): EventBuyNFT;
    toAmino(message: EventBuyNFT): EventBuyNFTAmino;
    fromAminoMsg(object: EventBuyNFTAminoMsg): EventBuyNFT;
    fromProtoMsg(message: EventBuyNFTProtoMsg): EventBuyNFT;
    toProto(message: EventBuyNFT): Uint8Array;
    toProtoMsg(message: EventBuyNFT): EventBuyNFTProtoMsg;
};
export declare const EventExpireOffer: {
    typeUrl: string;
    encode(message: EventExpireOffer, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): EventExpireOffer;
    fromPartial(object: Partial<EventExpireOffer>): EventExpireOffer;
    fromAmino(object: EventExpireOfferAmino): EventExpireOffer;
    toAmino(message: EventExpireOffer): EventExpireOfferAmino;
    fromAminoMsg(object: EventExpireOfferAminoMsg): EventExpireOffer;
    fromProtoMsg(message: EventExpireOfferProtoMsg): EventExpireOffer;
    toProto(message: EventExpireOffer): Uint8Array;
    toProtoMsg(message: EventExpireOffer): EventExpireOfferProtoMsg;
};
export declare const EventExpireListing: {
    typeUrl: string;
    encode(message: EventExpireListing, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): EventExpireListing;
    fromPartial(object: Partial<EventExpireListing>): EventExpireListing;
    fromAmino(object: EventExpireListingAmino): EventExpireListing;
    toAmino(message: EventExpireListing): EventExpireListingAmino;
    fromAminoMsg(object: EventExpireListingAminoMsg): EventExpireListing;
    fromProtoMsg(message: EventExpireListingProtoMsg): EventExpireListing;
    toProto(message: EventExpireListing): Uint8Array;
    toProtoMsg(message: EventExpireListing): EventExpireListingProtoMsg;
};
export declare const EventCreateRoyaltyConfig: {
    typeUrl: string;
    encode(message: EventCreateRoyaltyConfig, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): EventCreateRoyaltyConfig;
    fromPartial(object: Partial<EventCreateRoyaltyConfig>): EventCreateRoyaltyConfig;
    fromAmino(object: EventCreateRoyaltyConfigAmino): EventCreateRoyaltyConfig;
    toAmino(message: EventCreateRoyaltyConfig): EventCreateRoyaltyConfigAmino;
    fromAminoMsg(object: EventCreateRoyaltyConfigAminoMsg): EventCreateRoyaltyConfig;
    fromProtoMsg(message: EventCreateRoyaltyConfigProtoMsg): EventCreateRoyaltyConfig;
    toProto(message: EventCreateRoyaltyConfig): Uint8Array;
    toProtoMsg(message: EventCreateRoyaltyConfig): EventCreateRoyaltyConfigProtoMsg;
};
export declare const EventUpdateRoyaltyConfig: {
    typeUrl: string;
    encode(message: EventUpdateRoyaltyConfig, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): EventUpdateRoyaltyConfig;
    fromPartial(object: Partial<EventUpdateRoyaltyConfig>): EventUpdateRoyaltyConfig;
    fromAmino(object: EventUpdateRoyaltyConfigAmino): EventUpdateRoyaltyConfig;
    toAmino(message: EventUpdateRoyaltyConfig): EventUpdateRoyaltyConfigAmino;
    fromAminoMsg(object: EventUpdateRoyaltyConfigAminoMsg): EventUpdateRoyaltyConfig;
    fromProtoMsg(message: EventUpdateRoyaltyConfigProtoMsg): EventUpdateRoyaltyConfig;
    toProto(message: EventUpdateRoyaltyConfig): Uint8Array;
    toProtoMsg(message: EventUpdateRoyaltyConfig): EventUpdateRoyaltyConfigProtoMsg;
};
export declare const EventDeleteRoyaltyConfig: {
    typeUrl: string;
    encode(message: EventDeleteRoyaltyConfig, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): EventDeleteRoyaltyConfig;
    fromPartial(object: Partial<EventDeleteRoyaltyConfig>): EventDeleteRoyaltyConfig;
    fromAmino(object: EventDeleteRoyaltyConfigAmino): EventDeleteRoyaltyConfig;
    toAmino(message: EventDeleteRoyaltyConfig): EventDeleteRoyaltyConfigAmino;
    fromAminoMsg(object: EventDeleteRoyaltyConfigAminoMsg): EventDeleteRoyaltyConfig;
    fromProtoMsg(message: EventDeleteRoyaltyConfigProtoMsg): EventDeleteRoyaltyConfig;
    toProto(message: EventDeleteRoyaltyConfig): Uint8Array;
    toProtoMsg(message: EventDeleteRoyaltyConfig): EventDeleteRoyaltyConfigProtoMsg;
};
