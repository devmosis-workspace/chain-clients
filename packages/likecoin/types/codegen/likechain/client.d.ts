import { GeneratedType, Registry, OfflineSigner } from "@cosmjs/proto-signing";
import { AminoTypes, SigningStargateClient } from "@cosmjs/stargate";
import { HttpEndpoint } from "@cosmjs/tendermint-rpc";
export declare const likechainAminoConverters: {
    "/likechain.likenft.v1.MsgNewClass": {
        aminoType: string;
        toAmino: ({ creator, parent, input }: import("./likenft/v1/tx").MsgNewClass) => {
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
        fromAmino: ({ creator, parent, input }: {
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
        }) => import("./likenft/v1/tx").MsgNewClass;
    };
    "/likechain.likenft.v1.MsgUpdateClass": {
        aminoType: string;
        toAmino: ({ creator, classId, input }: import("./likenft/v1/tx").MsgUpdateClass) => {
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
        fromAmino: ({ creator, class_id, input }: {
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
        }) => import("./likenft/v1/tx").MsgUpdateClass;
    };
    "/likechain.likenft.v1.MsgMintNFT": {
        aminoType: string;
        toAmino: ({ creator, classId, id, input }: import("./likenft/v1/tx").MsgMintNFT) => {
            creator: string;
            class_id: string;
            id: string;
            input: {
                uri: string;
                uri_hash: string;
                metadata: Uint8Array;
            };
        };
        fromAmino: ({ creator, class_id, id, input }: {
            creator: string;
            class_id: string;
            id: string;
            input: {
                uri: string;
                uri_hash: string;
                metadata: Uint8Array;
            };
        }) => import("./likenft/v1/tx").MsgMintNFT;
    };
    "/likechain.likenft.v1.MsgBurnNFT": {
        aminoType: string;
        toAmino: ({ creator, classId, nftId }: import("./likenft/v1/tx").MsgBurnNFT) => {
            creator: string;
            class_id: string;
            nft_id: string;
        };
        fromAmino: ({ creator, class_id, nft_id }: {
            creator: string;
            class_id: string;
            nft_id: string;
        }) => import("./likenft/v1/tx").MsgBurnNFT;
    };
    "/likechain.likenft.v1.MsgCreateBlindBoxContent": {
        aminoType: string;
        toAmino: ({ creator, classId, id, input }: import("./likenft/v1/tx").MsgCreateBlindBoxContent) => {
            creator: string;
            class_id: string;
            id: string;
            input: {
                uri: string;
                uri_hash: string;
                metadata: Uint8Array;
            };
        };
        fromAmino: ({ creator, class_id, id, input }: {
            creator: string;
            class_id: string;
            id: string;
            input: {
                uri: string;
                uri_hash: string;
                metadata: Uint8Array;
            };
        }) => import("./likenft/v1/tx").MsgCreateBlindBoxContent;
    };
    "/likechain.likenft.v1.MsgUpdateBlindBoxContent": {
        aminoType: string;
        toAmino: ({ creator, classId, id, input }: import("./likenft/v1/tx").MsgUpdateBlindBoxContent) => {
            creator: string;
            class_id: string;
            id: string;
            input: {
                uri: string;
                uri_hash: string;
                metadata: Uint8Array;
            };
        };
        fromAmino: ({ creator, class_id, id, input }: {
            creator: string;
            class_id: string;
            id: string;
            input: {
                uri: string;
                uri_hash: string;
                metadata: Uint8Array;
            };
        }) => import("./likenft/v1/tx").MsgUpdateBlindBoxContent;
    };
    "/likechain.likenft.v1.MsgDeleteBlindBoxContent": {
        aminoType: string;
        toAmino: ({ creator, classId, id }: import("./likenft/v1/tx").MsgDeleteBlindBoxContent) => {
            creator: string;
            class_id: string;
            id: string;
        };
        fromAmino: ({ creator, class_id, id }: {
            creator: string;
            class_id: string;
            id: string;
        }) => import("./likenft/v1/tx").MsgDeleteBlindBoxContent;
    };
    "/likechain.likenft.v1.MsgCreateOffer": {
        aminoType: string;
        toAmino: ({ creator, classId, nftId, price, expiration }: import("./likenft/v1/tx").MsgCreateOffer) => {
            creator: string;
            class_id: string;
            nft_id: string;
            price: string;
            expiration: {
                seconds: string;
                nanos: number;
            };
        };
        fromAmino: ({ creator, class_id, nft_id, price, expiration }: {
            creator: string;
            class_id: string;
            nft_id: string;
            price: string;
            expiration: {
                seconds: string;
                nanos: number;
            };
        }) => import("./likenft/v1/tx").MsgCreateOffer;
    };
    "/likechain.likenft.v1.MsgUpdateOffer": {
        aminoType: string;
        toAmino: ({ creator, classId, nftId, price, expiration }: import("./likenft/v1/tx").MsgUpdateOffer) => {
            creator: string;
            class_id: string;
            nft_id: string;
            price: string;
            expiration: {
                seconds: string;
                nanos: number;
            };
        };
        fromAmino: ({ creator, class_id, nft_id, price, expiration }: {
            creator: string;
            class_id: string;
            nft_id: string;
            price: string;
            expiration: {
                seconds: string;
                nanos: number;
            };
        }) => import("./likenft/v1/tx").MsgUpdateOffer;
    };
    "/likechain.likenft.v1.MsgDeleteOffer": {
        aminoType: string;
        toAmino: ({ creator, classId, nftId }: import("./likenft/v1/tx").MsgDeleteOffer) => {
            creator: string;
            class_id: string;
            nft_id: string;
        };
        fromAmino: ({ creator, class_id, nft_id }: {
            creator: string;
            class_id: string;
            nft_id: string;
        }) => import("./likenft/v1/tx").MsgDeleteOffer;
    };
    "/likechain.likenft.v1.MsgCreateListing": {
        aminoType: string;
        toAmino: ({ creator, classId, nftId, price, expiration, fullPayToRoyalty }: import("./likenft/v1/tx").MsgCreateListing) => {
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
        fromAmino: ({ creator, class_id, nft_id, price, expiration, full_pay_to_royalty }: {
            creator: string;
            class_id: string;
            nft_id: string;
            price: string;
            expiration: {
                seconds: string;
                nanos: number;
            };
            full_pay_to_royalty: boolean;
        }) => import("./likenft/v1/tx").MsgCreateListing;
    };
    "/likechain.likenft.v1.MsgUpdateListing": {
        aminoType: string;
        toAmino: ({ creator, classId, nftId, price, expiration, fullPayToRoyalty }: import("./likenft/v1/tx").MsgUpdateListing) => {
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
        fromAmino: ({ creator, class_id, nft_id, price, expiration, full_pay_to_royalty }: {
            creator: string;
            class_id: string;
            nft_id: string;
            price: string;
            expiration: {
                seconds: string;
                nanos: number;
            };
            full_pay_to_royalty: boolean;
        }) => import("./likenft/v1/tx").MsgUpdateListing;
    };
    "/likechain.likenft.v1.MsgDeleteListing": {
        aminoType: string;
        toAmino: ({ creator, classId, nftId }: import("./likenft/v1/tx").MsgDeleteListing) => {
            creator: string;
            class_id: string;
            nft_id: string;
        };
        fromAmino: ({ creator, class_id, nft_id }: {
            creator: string;
            class_id: string;
            nft_id: string;
        }) => import("./likenft/v1/tx").MsgDeleteListing;
    };
    "/likechain.likenft.v1.MsgSellNFT": {
        aminoType: string;
        toAmino: ({ creator, classId, nftId, buyer, price, fullPayToRoyalty }: import("./likenft/v1/tx").MsgSellNFT) => {
            creator: string;
            class_id: string;
            nft_id: string;
            buyer: string;
            price: string;
            full_pay_to_royalty: boolean;
        };
        fromAmino: ({ creator, class_id, nft_id, buyer, price, full_pay_to_royalty }: {
            creator: string;
            class_id: string;
            nft_id: string;
            buyer: string;
            price: string;
            full_pay_to_royalty: boolean;
        }) => import("./likenft/v1/tx").MsgSellNFT;
    };
    "/likechain.likenft.v1.MsgBuyNFT": {
        aminoType: string;
        toAmino: ({ creator, classId, nftId, seller, price }: import("./likenft/v1/tx").MsgBuyNFT) => {
            creator: string;
            class_id: string;
            nft_id: string;
            seller: string;
            price: string;
        };
        fromAmino: ({ creator, class_id, nft_id, seller, price }: {
            creator: string;
            class_id: string;
            nft_id: string;
            seller: string;
            price: string;
        }) => import("./likenft/v1/tx").MsgBuyNFT;
    };
    "/likechain.likenft.v1.MsgCreateRoyaltyConfig": {
        aminoType: string;
        toAmino: ({ creator, classId, royaltyConfig }: import("./likenft/v1/tx").MsgCreateRoyaltyConfig) => {
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
        fromAmino: ({ creator, class_id, royalty_config }: {
            creator: string;
            class_id: string;
            royalty_config: {
                rate_basis_points: string;
                stakeholders: {
                    account: string;
                    weight: string;
                }[];
            };
        }) => import("./likenft/v1/tx").MsgCreateRoyaltyConfig;
    };
    "/likechain.likenft.v1.MsgUpdateRoyaltyConfig": {
        aminoType: string;
        toAmino: ({ creator, classId, royaltyConfig }: import("./likenft/v1/tx").MsgUpdateRoyaltyConfig) => {
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
        fromAmino: ({ creator, class_id, royalty_config }: {
            creator: string;
            class_id: string;
            royalty_config: {
                rate_basis_points: string;
                stakeholders: {
                    account: string;
                    weight: string;
                }[];
            };
        }) => import("./likenft/v1/tx").MsgUpdateRoyaltyConfig;
    };
    "/likechain.likenft.v1.MsgDeleteRoyaltyConfig": {
        aminoType: string;
        toAmino: ({ creator, classId }: import("./likenft/v1/tx").MsgDeleteRoyaltyConfig) => {
            creator: string;
            class_id: string;
        };
        fromAmino: ({ creator, class_id }: {
            creator: string;
            class_id: string;
        }) => import("./likenft/v1/tx").MsgDeleteRoyaltyConfig;
    };
    "/likechain.iscn.MsgCreateIscnRecord": {
        aminoType: string;
        toAmino: ({ from, record, nonce }: import("./iscn/tx").MsgCreateIscnRecord) => {
            from: string;
            record: {
                recordNotes: string;
                contentFingerprints: string[];
                stakeholders: Uint8Array[];
                contentMetadata: Uint8Array;
            };
            nonce: string;
        };
        fromAmino: ({ from, record, nonce }: {
            from: string;
            record: {
                recordNotes: string;
                contentFingerprints: string[];
                stakeholders: Uint8Array[];
                contentMetadata: Uint8Array;
            };
            nonce: string;
        }) => import("./iscn/tx").MsgCreateIscnRecord;
    };
    "/likechain.iscn.MsgUpdateIscnRecord": {
        aminoType: string;
        toAmino: ({ from, iscnId, record }: import("./iscn/tx").MsgUpdateIscnRecord) => {
            from: string;
            iscn_id: string;
            record: {
                recordNotes: string;
                contentFingerprints: string[];
                stakeholders: Uint8Array[];
                contentMetadata: Uint8Array;
            };
        };
        fromAmino: ({ from, iscn_id, record }: {
            from: string;
            iscn_id: string;
            record: {
                recordNotes: string;
                contentFingerprints: string[];
                stakeholders: Uint8Array[];
                contentMetadata: Uint8Array;
            };
        }) => import("./iscn/tx").MsgUpdateIscnRecord;
    };
    "/likechain.iscn.MsgChangeIscnRecordOwnership": {
        aminoType: string;
        toAmino: ({ from, iscnId, newOwner }: import("./iscn/tx").MsgChangeIscnRecordOwnership) => {
            from: string;
            iscn_id: string;
            new_owner: string;
        };
        fromAmino: ({ from, iscn_id, new_owner }: {
            from: string;
            iscn_id: string;
            new_owner: string;
        }) => import("./iscn/tx").MsgChangeIscnRecordOwnership;
    };
};
export declare const likechainProtoRegistry: ReadonlyArray<[string, GeneratedType]>;
export declare const getSigningLikechainClientOptions: ({ defaultTypes }?: {
    defaultTypes?: ReadonlyArray<[string, GeneratedType]>;
}) => {
    registry: Registry;
    aminoTypes: AminoTypes;
};
export declare const getSigningLikechainClient: ({ rpcEndpoint, signer, defaultTypes }: {
    rpcEndpoint: string | HttpEndpoint;
    signer: OfflineSigner;
    defaultTypes?: ReadonlyArray<[string, GeneratedType]>;
}) => Promise<SigningStargateClient>;
