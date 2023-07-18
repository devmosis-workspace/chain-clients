import { GeneratedType, Registry, OfflineSigner } from "@cosmjs/proto-signing";
import { AminoTypes, SigningStargateClient } from "@cosmjs/stargate";
import { HttpEndpoint } from "@cosmjs/tendermint-rpc";
export declare const omniFlixAminoConverters: {
    "/OmniFlix.itc.v1.MsgCreateCampaign": {
        aminoType: string;
        toAmino: ({ name, description, interaction, claimType, nftDenomId, tokensPerClaim, maxAllowedClaims, deposit, nftMintDetails, startTime, duration, distribution, creator, creationFee }: import("./itc/v1/tx").MsgCreateCampaign) => {
            name: string;
            description: string;
            interaction: number;
            claim_type: number;
            nft_denom_id: string;
            tokens_per_claim: {
                denom: string;
                amount: string;
            };
            max_allowed_claims: string;
            deposit: {
                denom: string;
                amount: string;
            };
            nft_mint_details: {
                denom_id: string;
                name: string;
                description: string;
                media_uri: string;
                preview_uri: string;
                royalty_share: string;
                transferable: boolean;
                extensible: boolean;
                nsfw: boolean;
                data: string;
            };
            start_time: {
                seconds: string;
                nanos: number;
            };
            duration: {
                seconds: string;
                nanos: number;
            };
            distribution: {
                type: number;
                stream_duration: {
                    seconds: string;
                    nanos: number;
                };
            };
            creator: string;
            creation_fee: {
                denom: string;
                amount: string;
            };
        };
        fromAmino: ({ name, description, interaction, claim_type, nft_denom_id, tokens_per_claim, max_allowed_claims, deposit, nft_mint_details, start_time, duration, distribution, creator, creation_fee }: {
            name: string;
            description: string;
            interaction: number;
            claim_type: number;
            nft_denom_id: string;
            tokens_per_claim: {
                denom: string;
                amount: string;
            };
            max_allowed_claims: string;
            deposit: {
                denom: string;
                amount: string;
            };
            nft_mint_details: {
                denom_id: string;
                name: string;
                description: string;
                media_uri: string;
                preview_uri: string;
                royalty_share: string;
                transferable: boolean;
                extensible: boolean;
                nsfw: boolean;
                data: string;
            };
            start_time: {
                seconds: string;
                nanos: number;
            };
            duration: {
                seconds: string;
                nanos: number;
            };
            distribution: {
                type: number;
                stream_duration: {
                    seconds: string;
                    nanos: number;
                };
            };
            creator: string;
            creation_fee: {
                denom: string;
                amount: string;
            };
        }) => import("./itc/v1/tx").MsgCreateCampaign;
    };
    "/OmniFlix.itc.v1.MsgCancelCampaign": {
        aminoType: string;
        toAmino: ({ campaignId, creator }: import("./itc/v1/tx").MsgCancelCampaign) => {
            campaign_id: string;
            creator: string;
        };
        fromAmino: ({ campaign_id, creator }: {
            campaign_id: string;
            creator: string;
        }) => import("./itc/v1/tx").MsgCancelCampaign;
    };
    "/OmniFlix.itc.v1.MsgClaim": {
        aminoType: string;
        toAmino: ({ campaignId, nftId, interaction, claimer }: import("./itc/v1/tx").MsgClaim) => {
            campaign_id: string;
            nft_id: string;
            interaction: number;
            claimer: string;
        };
        fromAmino: ({ campaign_id, nft_id, interaction, claimer }: {
            campaign_id: string;
            nft_id: string;
            interaction: number;
            claimer: string;
        }) => import("./itc/v1/tx").MsgClaim;
    };
    "/OmniFlix.itc.v1.MsgDepositCampaign": {
        aminoType: string;
        toAmino: ({ campaignId, amount, depositor }: import("./itc/v1/tx").MsgDepositCampaign) => {
            campaign_id: string;
            amount: {
                denom: string;
                amount: string;
            };
            depositor: string;
        };
        fromAmino: ({ campaign_id, amount, depositor }: {
            campaign_id: string;
            amount: {
                denom: string;
                amount: string;
            };
            depositor: string;
        }) => import("./itc/v1/tx").MsgDepositCampaign;
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
