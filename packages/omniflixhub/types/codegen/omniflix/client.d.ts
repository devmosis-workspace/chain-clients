import { GeneratedType, Registry, OfflineSigner } from "@cosmjs/proto-signing";
import { AminoTypes, SigningStargateClient } from "@cosmjs/stargate";
import { HttpEndpoint } from "@cosmjs/tendermint-rpc";
export declare const omniFlixAminoConverters: {
    "/OmniFlix.onft.v1beta1.MsgCreateDenom": {
        aminoType: string;
        toAmino: (message: import("./onft/v1beta1/tx").MsgCreateDenom) => import("./onft/v1beta1/tx").MsgCreateDenomAmino;
        fromAmino: (object: import("./onft/v1beta1/tx").MsgCreateDenomAmino) => import("./onft/v1beta1/tx").MsgCreateDenom;
    };
    "/OmniFlix.onft.v1beta1.MsgUpdateDenom": {
        aminoType: string;
        toAmino: (message: import("./onft/v1beta1/tx").MsgUpdateDenom) => import("./onft/v1beta1/tx").MsgUpdateDenomAmino;
        fromAmino: (object: import("./onft/v1beta1/tx").MsgUpdateDenomAmino) => import("./onft/v1beta1/tx").MsgUpdateDenom;
    };
    "/OmniFlix.onft.v1beta1.MsgTransferDenom": {
        aminoType: string;
        toAmino: (message: import("./onft/v1beta1/tx").MsgTransferDenom) => import("./onft/v1beta1/tx").MsgTransferDenomAmino;
        fromAmino: (object: import("./onft/v1beta1/tx").MsgTransferDenomAmino) => import("./onft/v1beta1/tx").MsgTransferDenom;
    };
    "/OmniFlix.onft.v1beta1.MsgPurgeDenom": {
        aminoType: string;
        toAmino: (message: import("./onft/v1beta1/tx").MsgPurgeDenom) => import("./onft/v1beta1/tx").MsgPurgeDenomAmino;
        fromAmino: (object: import("./onft/v1beta1/tx").MsgPurgeDenomAmino) => import("./onft/v1beta1/tx").MsgPurgeDenom;
    };
    "/OmniFlix.onft.v1beta1.MsgMintONFT": {
        aminoType: string;
        toAmino: (message: import("./onft/v1beta1/tx").MsgMintONFT) => import("./onft/v1beta1/tx").MsgMintONFTAmino;
        fromAmino: (object: import("./onft/v1beta1/tx").MsgMintONFTAmino) => import("./onft/v1beta1/tx").MsgMintONFT;
    };
    "/OmniFlix.onft.v1beta1.MsgTransferONFT": {
        aminoType: string;
        toAmino: (message: import("./onft/v1beta1/tx").MsgTransferONFT) => import("./onft/v1beta1/tx").MsgTransferONFTAmino;
        fromAmino: (object: import("./onft/v1beta1/tx").MsgTransferONFTAmino) => import("./onft/v1beta1/tx").MsgTransferONFT;
    };
    "/OmniFlix.onft.v1beta1.MsgBurnONFT": {
        aminoType: string;
        toAmino: (message: import("./onft/v1beta1/tx").MsgBurnONFT) => import("./onft/v1beta1/tx").MsgBurnONFTAmino;
        fromAmino: (object: import("./onft/v1beta1/tx").MsgBurnONFTAmino) => import("./onft/v1beta1/tx").MsgBurnONFT;
    };
    "/OmniFlix.onft.v1beta1.MsgUpdateParams": {
        aminoType: string;
        toAmino: (message: import("./onft/v1beta1/tx").MsgUpdateParams) => import("./onft/v1beta1/tx").MsgUpdateParamsAmino;
        fromAmino: (object: import("./onft/v1beta1/tx").MsgUpdateParamsAmino) => import("./onft/v1beta1/tx").MsgUpdateParams;
    };
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
    "/OmniFlix.marketplace.v1beta1.MsgUpdateParams": {
        aminoType: string;
        toAmino: (message: import("./marketplace/v1beta1/tx").MsgUpdateParams) => import("./marketplace/v1beta1/tx").MsgUpdateParamsAmino;
        fromAmino: (object: import("./marketplace/v1beta1/tx").MsgUpdateParamsAmino) => import("./marketplace/v1beta1/tx").MsgUpdateParams;
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
    "/OmniFlix.itc.v1.MsgUpdateParams": {
        aminoType: string;
        toAmino: (message: import("./itc/v1/tx").MsgUpdateParams) => import("./itc/v1/tx").MsgUpdateParamsAmino;
        fromAmino: (object: import("./itc/v1/tx").MsgUpdateParamsAmino) => import("./itc/v1/tx").MsgUpdateParams;
    };
    "/OmniFlix.globalfee.v1beta1.MsgUpdateParams": {
        aminoType: string;
        toAmino: (message: import("./globalfee/v1beta1/tx").MsgUpdateParams) => import("./globalfee/v1beta1/tx").MsgUpdateParamsAmino;
        fromAmino: (object: import("./globalfee/v1beta1/tx").MsgUpdateParamsAmino) => import("./globalfee/v1beta1/tx").MsgUpdateParams;
    };
    "/OmniFlix.alloc.v1beta1.MsgUpdateParams": {
        aminoType: string;
        toAmino: (message: import("./alloc/v1beta1/tx").MsgUpdateParams) => import("./alloc/v1beta1/tx").MsgUpdateParamsAmino;
        fromAmino: (object: import("./alloc/v1beta1/tx").MsgUpdateParamsAmino) => import("./alloc/v1beta1/tx").MsgUpdateParams;
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
