import { AminoMsg } from "@cosmjs/amino";
import { MsgNewClass, MsgUpdateClass, MsgMintNFT, MsgBurnNFT, MsgCreateBlindBoxContent, MsgUpdateBlindBoxContent, MsgDeleteBlindBoxContent, MsgCreateOffer, MsgUpdateOffer, MsgDeleteOffer, MsgCreateListing, MsgUpdateListing, MsgDeleteListing, MsgSellNFT, MsgBuyNFT, MsgCreateRoyaltyConfig, MsgUpdateRoyaltyConfig, MsgDeleteRoyaltyConfig } from "./tx";
export interface MsgNewClassAminoType extends AminoMsg {
    type: "/likechain.likenft.v1.MsgNewClass";
    value: {
        creator: string;
        parent: {
            type: number;
            iscn_id_prefix: string;
        };
        input: {
            name: string;
            symbol: string;
            description: string;
            uri: string;
            uri_hash: string;
            metadata: Uint8Array;
            config: {
                burnable: boolean;
                max_supply: string;
                blind_box_config: {
                    mint_periods: {
                        start_time: {
                            seconds: string;
                            nanos: number;
                        };
                        allowed_addresses: string[];
                        mint_price: string;
                    }[];
                    reveal_time: {
                        seconds: string;
                        nanos: number;
                    };
                };
            };
        };
    };
}
export interface MsgUpdateClassAminoType extends AminoMsg {
    type: "/likechain.likenft.v1.MsgUpdateClass";
    value: {
        creator: string;
        class_id: string;
        input: {
            name: string;
            symbol: string;
            description: string;
            uri: string;
            uri_hash: string;
            metadata: Uint8Array;
            config: {
                burnable: boolean;
                max_supply: string;
                blind_box_config: {
                    mint_periods: {
                        start_time: {
                            seconds: string;
                            nanos: number;
                        };
                        allowed_addresses: string[];
                        mint_price: string;
                    }[];
                    reveal_time: {
                        seconds: string;
                        nanos: number;
                    };
                };
            };
        };
    };
}
export interface MsgMintNFTAminoType extends AminoMsg {
    type: "/likechain.likenft.v1.MsgMintNFT";
    value: {
        creator: string;
        class_id: string;
        id: string;
        input: {
            uri: string;
            uri_hash: string;
            metadata: Uint8Array;
        };
    };
}
export interface MsgBurnNFTAminoType extends AminoMsg {
    type: "/likechain.likenft.v1.MsgBurnNFT";
    value: {
        creator: string;
        class_id: string;
        nft_id: string;
    };
}
export interface MsgCreateBlindBoxContentAminoType extends AminoMsg {
    type: "/likechain.likenft.v1.MsgCreateBlindBoxContent";
    value: {
        creator: string;
        class_id: string;
        id: string;
        input: {
            uri: string;
            uri_hash: string;
            metadata: Uint8Array;
        };
    };
}
export interface MsgUpdateBlindBoxContentAminoType extends AminoMsg {
    type: "/likechain.likenft.v1.MsgUpdateBlindBoxContent";
    value: {
        creator: string;
        class_id: string;
        id: string;
        input: {
            uri: string;
            uri_hash: string;
            metadata: Uint8Array;
        };
    };
}
export interface MsgDeleteBlindBoxContentAminoType extends AminoMsg {
    type: "/likechain.likenft.v1.MsgDeleteBlindBoxContent";
    value: {
        creator: string;
        class_id: string;
        id: string;
    };
}
export interface MsgCreateOfferAminoType extends AminoMsg {
    type: "/likechain.likenft.v1.MsgCreateOffer";
    value: {
        creator: string;
        class_id: string;
        nft_id: string;
        price: string;
        expiration: {
            seconds: string;
            nanos: number;
        };
    };
}
export interface MsgUpdateOfferAminoType extends AminoMsg {
    type: "/likechain.likenft.v1.MsgUpdateOffer";
    value: {
        creator: string;
        class_id: string;
        nft_id: string;
        price: string;
        expiration: {
            seconds: string;
            nanos: number;
        };
    };
}
export interface MsgDeleteOfferAminoType extends AminoMsg {
    type: "/likechain.likenft.v1.MsgDeleteOffer";
    value: {
        creator: string;
        class_id: string;
        nft_id: string;
    };
}
export interface MsgCreateListingAminoType extends AminoMsg {
    type: "/likechain.likenft.v1.MsgCreateListing";
    value: {
        creator: string;
        class_id: string;
        nft_id: string;
        price: string;
        expiration: {
            seconds: string;
            nanos: number;
        };
        full_pay_to_royalty: boolean;
    };
}
export interface MsgUpdateListingAminoType extends AminoMsg {
    type: "/likechain.likenft.v1.MsgUpdateListing";
    value: {
        creator: string;
        class_id: string;
        nft_id: string;
        price: string;
        expiration: {
            seconds: string;
            nanos: number;
        };
        full_pay_to_royalty: boolean;
    };
}
export interface MsgDeleteListingAminoType extends AminoMsg {
    type: "/likechain.likenft.v1.MsgDeleteListing";
    value: {
        creator: string;
        class_id: string;
        nft_id: string;
    };
}
export interface MsgSellNFTAminoType extends AminoMsg {
    type: "/likechain.likenft.v1.MsgSellNFT";
    value: {
        creator: string;
        class_id: string;
        nft_id: string;
        buyer: string;
        price: string;
        full_pay_to_royalty: boolean;
    };
}
export interface MsgBuyNFTAminoType extends AminoMsg {
    type: "/likechain.likenft.v1.MsgBuyNFT";
    value: {
        creator: string;
        class_id: string;
        nft_id: string;
        seller: string;
        price: string;
    };
}
export interface MsgCreateRoyaltyConfigAminoType extends AminoMsg {
    type: "/likechain.likenft.v1.MsgCreateRoyaltyConfig";
    value: {
        creator: string;
        class_id: string;
        royalty_config: {
            rate_basis_points: string;
            stakeholders: {
                account: string;
                weight: string;
            }[];
        };
    };
}
export interface MsgUpdateRoyaltyConfigAminoType extends AminoMsg {
    type: "/likechain.likenft.v1.MsgUpdateRoyaltyConfig";
    value: {
        creator: string;
        class_id: string;
        royalty_config: {
            rate_basis_points: string;
            stakeholders: {
                account: string;
                weight: string;
            }[];
        };
    };
}
export interface MsgDeleteRoyaltyConfigAminoType extends AminoMsg {
    type: "/likechain.likenft.v1.MsgDeleteRoyaltyConfig";
    value: {
        creator: string;
        class_id: string;
    };
}
export declare const AminoConverter: {
    "/likechain.likenft.v1.MsgNewClass": {
        aminoType: string;
        toAmino: ({ creator, parent, input }: MsgNewClass) => MsgNewClassAminoType["value"];
        fromAmino: ({ creator, parent, input }: MsgNewClassAminoType["value"]) => MsgNewClass;
    };
    "/likechain.likenft.v1.MsgUpdateClass": {
        aminoType: string;
        toAmino: ({ creator, classId, input }: MsgUpdateClass) => MsgUpdateClassAminoType["value"];
        fromAmino: ({ creator, class_id, input }: MsgUpdateClassAminoType["value"]) => MsgUpdateClass;
    };
    "/likechain.likenft.v1.MsgMintNFT": {
        aminoType: string;
        toAmino: ({ creator, classId, id, input }: MsgMintNFT) => MsgMintNFTAminoType["value"];
        fromAmino: ({ creator, class_id, id, input }: MsgMintNFTAminoType["value"]) => MsgMintNFT;
    };
    "/likechain.likenft.v1.MsgBurnNFT": {
        aminoType: string;
        toAmino: ({ creator, classId, nftId }: MsgBurnNFT) => MsgBurnNFTAminoType["value"];
        fromAmino: ({ creator, class_id, nft_id }: MsgBurnNFTAminoType["value"]) => MsgBurnNFT;
    };
    "/likechain.likenft.v1.MsgCreateBlindBoxContent": {
        aminoType: string;
        toAmino: ({ creator, classId, id, input }: MsgCreateBlindBoxContent) => MsgCreateBlindBoxContentAminoType["value"];
        fromAmino: ({ creator, class_id, id, input }: MsgCreateBlindBoxContentAminoType["value"]) => MsgCreateBlindBoxContent;
    };
    "/likechain.likenft.v1.MsgUpdateBlindBoxContent": {
        aminoType: string;
        toAmino: ({ creator, classId, id, input }: MsgUpdateBlindBoxContent) => MsgUpdateBlindBoxContentAminoType["value"];
        fromAmino: ({ creator, class_id, id, input }: MsgUpdateBlindBoxContentAminoType["value"]) => MsgUpdateBlindBoxContent;
    };
    "/likechain.likenft.v1.MsgDeleteBlindBoxContent": {
        aminoType: string;
        toAmino: ({ creator, classId, id }: MsgDeleteBlindBoxContent) => MsgDeleteBlindBoxContentAminoType["value"];
        fromAmino: ({ creator, class_id, id }: MsgDeleteBlindBoxContentAminoType["value"]) => MsgDeleteBlindBoxContent;
    };
    "/likechain.likenft.v1.MsgCreateOffer": {
        aminoType: string;
        toAmino: ({ creator, classId, nftId, price, expiration }: MsgCreateOffer) => MsgCreateOfferAminoType["value"];
        fromAmino: ({ creator, class_id, nft_id, price, expiration }: MsgCreateOfferAminoType["value"]) => MsgCreateOffer;
    };
    "/likechain.likenft.v1.MsgUpdateOffer": {
        aminoType: string;
        toAmino: ({ creator, classId, nftId, price, expiration }: MsgUpdateOffer) => MsgUpdateOfferAminoType["value"];
        fromAmino: ({ creator, class_id, nft_id, price, expiration }: MsgUpdateOfferAminoType["value"]) => MsgUpdateOffer;
    };
    "/likechain.likenft.v1.MsgDeleteOffer": {
        aminoType: string;
        toAmino: ({ creator, classId, nftId }: MsgDeleteOffer) => MsgDeleteOfferAminoType["value"];
        fromAmino: ({ creator, class_id, nft_id }: MsgDeleteOfferAminoType["value"]) => MsgDeleteOffer;
    };
    "/likechain.likenft.v1.MsgCreateListing": {
        aminoType: string;
        toAmino: ({ creator, classId, nftId, price, expiration, fullPayToRoyalty }: MsgCreateListing) => MsgCreateListingAminoType["value"];
        fromAmino: ({ creator, class_id, nft_id, price, expiration, full_pay_to_royalty }: MsgCreateListingAminoType["value"]) => MsgCreateListing;
    };
    "/likechain.likenft.v1.MsgUpdateListing": {
        aminoType: string;
        toAmino: ({ creator, classId, nftId, price, expiration, fullPayToRoyalty }: MsgUpdateListing) => MsgUpdateListingAminoType["value"];
        fromAmino: ({ creator, class_id, nft_id, price, expiration, full_pay_to_royalty }: MsgUpdateListingAminoType["value"]) => MsgUpdateListing;
    };
    "/likechain.likenft.v1.MsgDeleteListing": {
        aminoType: string;
        toAmino: ({ creator, classId, nftId }: MsgDeleteListing) => MsgDeleteListingAminoType["value"];
        fromAmino: ({ creator, class_id, nft_id }: MsgDeleteListingAminoType["value"]) => MsgDeleteListing;
    };
    "/likechain.likenft.v1.MsgSellNFT": {
        aminoType: string;
        toAmino: ({ creator, classId, nftId, buyer, price, fullPayToRoyalty }: MsgSellNFT) => MsgSellNFTAminoType["value"];
        fromAmino: ({ creator, class_id, nft_id, buyer, price, full_pay_to_royalty }: MsgSellNFTAminoType["value"]) => MsgSellNFT;
    };
    "/likechain.likenft.v1.MsgBuyNFT": {
        aminoType: string;
        toAmino: ({ creator, classId, nftId, seller, price }: MsgBuyNFT) => MsgBuyNFTAminoType["value"];
        fromAmino: ({ creator, class_id, nft_id, seller, price }: MsgBuyNFTAminoType["value"]) => MsgBuyNFT;
    };
    "/likechain.likenft.v1.MsgCreateRoyaltyConfig": {
        aminoType: string;
        toAmino: ({ creator, classId, royaltyConfig }: MsgCreateRoyaltyConfig) => MsgCreateRoyaltyConfigAminoType["value"];
        fromAmino: ({ creator, class_id, royalty_config }: MsgCreateRoyaltyConfigAminoType["value"]) => MsgCreateRoyaltyConfig;
    };
    "/likechain.likenft.v1.MsgUpdateRoyaltyConfig": {
        aminoType: string;
        toAmino: ({ creator, classId, royaltyConfig }: MsgUpdateRoyaltyConfig) => MsgUpdateRoyaltyConfigAminoType["value"];
        fromAmino: ({ creator, class_id, royalty_config }: MsgUpdateRoyaltyConfigAminoType["value"]) => MsgUpdateRoyaltyConfig;
    };
    "/likechain.likenft.v1.MsgDeleteRoyaltyConfig": {
        aminoType: string;
        toAmino: ({ creator, classId }: MsgDeleteRoyaltyConfig) => MsgDeleteRoyaltyConfigAminoType["value"];
        fromAmino: ({ creator, class_id }: MsgDeleteRoyaltyConfigAminoType["value"]) => MsgDeleteRoyaltyConfig;
    };
};
