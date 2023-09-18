import { GeneratedType, Registry, OfflineSigner } from "@cosmjs/proto-signing";
import { AminoTypes, SigningStargateClient } from "@cosmjs/stargate";
import { HttpEndpoint } from "@cosmjs/tendermint-rpc";
export declare const omniFlixAminoConverters: {
    "/OmniFlix.marketplace.v1beta1.MsgListNFT": {
        aminoType: string;
        toAmino: (message: import("./marketplace/v1beta1/tx").MsgListNFT) => import("./marketplace/v1beta1/tx").MsgListNFTAmino;
        fromAmino: (object: import("./marketplace/v1beta1/tx").MsgListNFTAmino) => import("./marketplace/v1beta1/tx").MsgListNFT;
    };
    "/OmniFlix.marketplace.v1beta1.MsgEditListing": {
        aminoType: string;
        toAmino: (message: import("./marketplace/v1beta1/tx").MsgEditListing) => import("./marketplace/v1beta1/tx").MsgEditListingAmino;
        fromAmino: (object: import("./marketplace/v1beta1/tx").MsgEditListingAmino) => import("./marketplace/v1beta1/tx").MsgEditListing;
    };
    "/OmniFlix.marketplace.v1beta1.MsgDeListNFT": {
        aminoType: string;
        toAmino: (message: import("./marketplace/v1beta1/tx").MsgDeListNFT) => import("./marketplace/v1beta1/tx").MsgDeListNFTAmino;
        fromAmino: (object: import("./marketplace/v1beta1/tx").MsgDeListNFTAmino) => import("./marketplace/v1beta1/tx").MsgDeListNFT;
    };
    "/OmniFlix.marketplace.v1beta1.MsgBuyNFT": {
        aminoType: string;
        toAmino: (message: import("./marketplace/v1beta1/tx").MsgBuyNFT) => import("./marketplace/v1beta1/tx").MsgBuyNFTAmino;
        fromAmino: (object: import("./marketplace/v1beta1/tx").MsgBuyNFTAmino) => import("./marketplace/v1beta1/tx").MsgBuyNFT;
    };
    "/OmniFlix.marketplace.v1beta1.MsgCreateAuction": {
        aminoType: string;
        toAmino: (message: import("./marketplace/v1beta1/tx").MsgCreateAuction) => import("./marketplace/v1beta1/tx").MsgCreateAuctionAmino;
        fromAmino: (object: import("./marketplace/v1beta1/tx").MsgCreateAuctionAmino) => import("./marketplace/v1beta1/tx").MsgCreateAuction;
    };
    "/OmniFlix.marketplace.v1beta1.MsgCancelAuction": {
        aminoType: string;
        toAmino: (message: import("./marketplace/v1beta1/tx").MsgCancelAuction) => import("./marketplace/v1beta1/tx").MsgCancelAuctionAmino;
        fromAmino: (object: import("./marketplace/v1beta1/tx").MsgCancelAuctionAmino) => import("./marketplace/v1beta1/tx").MsgCancelAuction;
    };
    "/OmniFlix.marketplace.v1beta1.MsgPlaceBid": {
        aminoType: string;
        toAmino: (message: import("./marketplace/v1beta1/tx").MsgPlaceBid) => import("./marketplace/v1beta1/tx").MsgPlaceBidAmino;
        fromAmino: (object: import("./marketplace/v1beta1/tx").MsgPlaceBidAmino) => import("./marketplace/v1beta1/tx").MsgPlaceBid;
    };
    "/OmniFlix.itc.v1.MsgCreateCampaign": {
        aminoType: string;
        toAmino: (message: import("./itc/v1/tx").MsgCreateCampaign) => import("./itc/v1/tx").MsgCreateCampaignAmino;
        fromAmino: (object: import("./itc/v1/tx").MsgCreateCampaignAmino) => import("./itc/v1/tx").MsgCreateCampaign;
    };
    "/OmniFlix.itc.v1.MsgCancelCampaign": {
        aminoType: string;
        toAmino: (message: import("./itc/v1/tx").MsgCancelCampaign) => import("./itc/v1/tx").MsgCancelCampaignAmino;
        fromAmino: (object: import("./itc/v1/tx").MsgCancelCampaignAmino) => import("./itc/v1/tx").MsgCancelCampaign;
    };
    "/OmniFlix.itc.v1.MsgClaim": {
        aminoType: string;
        toAmino: (message: import("./itc/v1/tx").MsgClaim) => import("./itc/v1/tx").MsgClaimAmino;
        fromAmino: (object: import("./itc/v1/tx").MsgClaimAmino) => import("./itc/v1/tx").MsgClaim;
    };
    "/OmniFlix.itc.v1.MsgDepositCampaign": {
        aminoType: string;
        toAmino: (message: import("./itc/v1/tx").MsgDepositCampaign) => import("./itc/v1/tx").MsgDepositCampaignAmino;
        fromAmino: (object: import("./itc/v1/tx").MsgDepositCampaignAmino) => import("./itc/v1/tx").MsgDepositCampaign;
    };
};
export declare const omniFlixProtoRegistry: ReadonlyArray<[string, GeneratedType]>;
export declare const getSigningOmniFlixClientOptions: ({ defaultTypes }?: {
    defaultTypes?: ReadonlyArray<[string, GeneratedType]>;
}) => {
    registry: Registry;
    aminoTypes: AminoTypes;
};
export declare const getSigningOmniFlixClient: ({ rpcEndpoint, signer, defaultTypes }: {
    rpcEndpoint: string | HttpEndpoint;
    signer: OfflineSigner;
    defaultTypes?: ReadonlyArray<[string, GeneratedType]>;
}) => Promise<SigningStargateClient>;
