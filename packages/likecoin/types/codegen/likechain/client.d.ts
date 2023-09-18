import { GeneratedType, Registry, OfflineSigner } from "@cosmjs/proto-signing";
import { AminoTypes, SigningStargateClient } from "@cosmjs/stargate";
import { HttpEndpoint } from "@cosmjs/tendermint-rpc";
export declare const likechainAminoConverters: {
    "/likechain.likenft.v1.MsgNewClass": {
        aminoType: string;
        toAmino: (message: import("./likenft/v1/tx").MsgNewClass) => import("./likenft/v1/tx").MsgNewClassAmino;
        fromAmino: (object: import("./likenft/v1/tx").MsgNewClassAmino) => import("./likenft/v1/tx").MsgNewClass;
    };
    "/likechain.likenft.v1.MsgUpdateClass": {
        aminoType: string;
        toAmino: (message: import("./likenft/v1/tx").MsgUpdateClass) => import("./likenft/v1/tx").MsgUpdateClassAmino;
        fromAmino: (object: import("./likenft/v1/tx").MsgUpdateClassAmino) => import("./likenft/v1/tx").MsgUpdateClass;
    };
    "/likechain.likenft.v1.MsgMintNFT": {
        aminoType: string;
        toAmino: (message: import("./likenft/v1/tx").MsgMintNFT) => import("./likenft/v1/tx").MsgMintNFTAmino;
        fromAmino: (object: import("./likenft/v1/tx").MsgMintNFTAmino) => import("./likenft/v1/tx").MsgMintNFT;
    };
    "/likechain.likenft.v1.MsgBurnNFT": {
        aminoType: string;
        toAmino: (message: import("./likenft/v1/tx").MsgBurnNFT) => import("./likenft/v1/tx").MsgBurnNFTAmino;
        fromAmino: (object: import("./likenft/v1/tx").MsgBurnNFTAmino) => import("./likenft/v1/tx").MsgBurnNFT;
    };
    "/likechain.likenft.v1.MsgCreateBlindBoxContent": {
        aminoType: string;
        toAmino: (message: import("./likenft/v1/tx").MsgCreateBlindBoxContent) => import("./likenft/v1/tx").MsgCreateBlindBoxContentAmino;
        fromAmino: (object: import("./likenft/v1/tx").MsgCreateBlindBoxContentAmino) => import("./likenft/v1/tx").MsgCreateBlindBoxContent;
    };
    "/likechain.likenft.v1.MsgUpdateBlindBoxContent": {
        aminoType: string;
        toAmino: (message: import("./likenft/v1/tx").MsgUpdateBlindBoxContent) => import("./likenft/v1/tx").MsgUpdateBlindBoxContentAmino;
        fromAmino: (object: import("./likenft/v1/tx").MsgUpdateBlindBoxContentAmino) => import("./likenft/v1/tx").MsgUpdateBlindBoxContent;
    };
    "/likechain.likenft.v1.MsgDeleteBlindBoxContent": {
        aminoType: string;
        toAmino: (message: import("./likenft/v1/tx").MsgDeleteBlindBoxContent) => import("./likenft/v1/tx").MsgDeleteBlindBoxContentAmino;
        fromAmino: (object: import("./likenft/v1/tx").MsgDeleteBlindBoxContentAmino) => import("./likenft/v1/tx").MsgDeleteBlindBoxContent;
    };
    "/likechain.likenft.v1.MsgCreateOffer": {
        aminoType: string;
        toAmino: (message: import("./likenft/v1/tx").MsgCreateOffer) => import("./likenft/v1/tx").MsgCreateOfferAmino;
        fromAmino: (object: import("./likenft/v1/tx").MsgCreateOfferAmino) => import("./likenft/v1/tx").MsgCreateOffer;
    };
    "/likechain.likenft.v1.MsgUpdateOffer": {
        aminoType: string;
        toAmino: (message: import("./likenft/v1/tx").MsgUpdateOffer) => import("./likenft/v1/tx").MsgUpdateOfferAmino;
        fromAmino: (object: import("./likenft/v1/tx").MsgUpdateOfferAmino) => import("./likenft/v1/tx").MsgUpdateOffer;
    };
    "/likechain.likenft.v1.MsgDeleteOffer": {
        aminoType: string;
        toAmino: (message: import("./likenft/v1/tx").MsgDeleteOffer) => import("./likenft/v1/tx").MsgDeleteOfferAmino;
        fromAmino: (object: import("./likenft/v1/tx").MsgDeleteOfferAmino) => import("./likenft/v1/tx").MsgDeleteOffer;
    };
    "/likechain.likenft.v1.MsgCreateListing": {
        aminoType: string;
        toAmino: (message: import("./likenft/v1/tx").MsgCreateListing) => import("./likenft/v1/tx").MsgCreateListingAmino;
        fromAmino: (object: import("./likenft/v1/tx").MsgCreateListingAmino) => import("./likenft/v1/tx").MsgCreateListing;
    };
    "/likechain.likenft.v1.MsgUpdateListing": {
        aminoType: string;
        toAmino: (message: import("./likenft/v1/tx").MsgUpdateListing) => import("./likenft/v1/tx").MsgUpdateListingAmino;
        fromAmino: (object: import("./likenft/v1/tx").MsgUpdateListingAmino) => import("./likenft/v1/tx").MsgUpdateListing;
    };
    "/likechain.likenft.v1.MsgDeleteListing": {
        aminoType: string;
        toAmino: (message: import("./likenft/v1/tx").MsgDeleteListing) => import("./likenft/v1/tx").MsgDeleteListingAmino;
        fromAmino: (object: import("./likenft/v1/tx").MsgDeleteListingAmino) => import("./likenft/v1/tx").MsgDeleteListing;
    };
    "/likechain.likenft.v1.MsgSellNFT": {
        aminoType: string;
        toAmino: (message: import("./likenft/v1/tx").MsgSellNFT) => import("./likenft/v1/tx").MsgSellNFTAmino;
        fromAmino: (object: import("./likenft/v1/tx").MsgSellNFTAmino) => import("./likenft/v1/tx").MsgSellNFT;
    };
    "/likechain.likenft.v1.MsgBuyNFT": {
        aminoType: string;
        toAmino: (message: import("./likenft/v1/tx").MsgBuyNFT) => import("./likenft/v1/tx").MsgBuyNFTAmino;
        fromAmino: (object: import("./likenft/v1/tx").MsgBuyNFTAmino) => import("./likenft/v1/tx").MsgBuyNFT;
    };
    "/likechain.likenft.v1.MsgCreateRoyaltyConfig": {
        aminoType: string;
        toAmino: (message: import("./likenft/v1/tx").MsgCreateRoyaltyConfig) => import("./likenft/v1/tx").MsgCreateRoyaltyConfigAmino;
        fromAmino: (object: import("./likenft/v1/tx").MsgCreateRoyaltyConfigAmino) => import("./likenft/v1/tx").MsgCreateRoyaltyConfig;
    };
    "/likechain.likenft.v1.MsgUpdateRoyaltyConfig": {
        aminoType: string;
        toAmino: (message: import("./likenft/v1/tx").MsgUpdateRoyaltyConfig) => import("./likenft/v1/tx").MsgUpdateRoyaltyConfigAmino;
        fromAmino: (object: import("./likenft/v1/tx").MsgUpdateRoyaltyConfigAmino) => import("./likenft/v1/tx").MsgUpdateRoyaltyConfig;
    };
    "/likechain.likenft.v1.MsgDeleteRoyaltyConfig": {
        aminoType: string;
        toAmino: (message: import("./likenft/v1/tx").MsgDeleteRoyaltyConfig) => import("./likenft/v1/tx").MsgDeleteRoyaltyConfigAmino;
        fromAmino: (object: import("./likenft/v1/tx").MsgDeleteRoyaltyConfigAmino) => import("./likenft/v1/tx").MsgDeleteRoyaltyConfig;
    };
    "/likechain.iscn.MsgCreateIscnRecord": {
        aminoType: string;
        toAmino: (message: import("./iscn/tx").MsgCreateIscnRecord) => import("./iscn/tx").MsgCreateIscnRecordAmino;
        fromAmino: (object: import("./iscn/tx").MsgCreateIscnRecordAmino) => import("./iscn/tx").MsgCreateIscnRecord;
    };
    "/likechain.iscn.MsgUpdateIscnRecord": {
        aminoType: string;
        toAmino: (message: import("./iscn/tx").MsgUpdateIscnRecord) => import("./iscn/tx").MsgUpdateIscnRecordAmino;
        fromAmino: (object: import("./iscn/tx").MsgUpdateIscnRecordAmino) => import("./iscn/tx").MsgUpdateIscnRecord;
    };
    "/likechain.iscn.MsgChangeIscnRecordOwnership": {
        aminoType: string;
        toAmino: (message: import("./iscn/tx").MsgChangeIscnRecordOwnership) => import("./iscn/tx").MsgChangeIscnRecordOwnershipAmino;
        fromAmino: (object: import("./iscn/tx").MsgChangeIscnRecordOwnershipAmino) => import("./iscn/tx").MsgChangeIscnRecordOwnership;
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
