import * as _4 from "../omniflix/itc/v1/genesis";
import * as _5 from "../omniflix/itc/v1/itc";
import * as _6 from "../omniflix/itc/v1/params";
import * as _7 from "../omniflix/itc/v1/query";
import * as _8 from "../omniflix/itc/v1/tx";
import * as _106 from "../omniflix/itc/v1/query.lcd";
import * as _107 from "../omniflix/itc/v1/query.rpc.Query";
import * as _108 from "../omniflix/itc/v1/tx.rpc.msg";
export declare namespace OmniFlix {
    namespace itc {
        const v1: {
            MsgClientImpl: typeof _108.MsgClientImpl;
            QueryClientImpl: typeof _107.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                params(request?: _7.QueryParamsRequest): Promise<_7.QueryParamsResponse>;
                campaigns(request: _7.QueryCampaignsRequest): Promise<_7.QueryCampaignsResponse>;
                campaign(request: _7.QueryCampaignRequest): Promise<_7.QueryCampaignResponse>;
                claims(request: _7.QueryClaimsRequest): Promise<_7.QueryClaimsResponse>;
            };
            LCDQueryClient: typeof _106.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    createCampaign(value: _8.MsgCreateCampaign): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    cancelCampaign(value: _8.MsgCancelCampaign): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    claim(value: _8.MsgClaim): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    depositCampaign(value: _8.MsgDepositCampaign): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    createCampaign(value: _8.MsgCreateCampaign): {
                        typeUrl: string;
                        value: _8.MsgCreateCampaign;
                    };
                    cancelCampaign(value: _8.MsgCancelCampaign): {
                        typeUrl: string;
                        value: _8.MsgCancelCampaign;
                    };
                    claim(value: _8.MsgClaim): {
                        typeUrl: string;
                        value: _8.MsgClaim;
                    };
                    depositCampaign(value: _8.MsgDepositCampaign): {
                        typeUrl: string;
                        value: _8.MsgDepositCampaign;
                    };
                };
                fromJSON: {
                    createCampaign(value: any): {
                        typeUrl: string;
                        value: _8.MsgCreateCampaign;
                    };
                    cancelCampaign(value: any): {
                        typeUrl: string;
                        value: _8.MsgCancelCampaign;
                    };
                    claim(value: any): {
                        typeUrl: string;
                        value: _8.MsgClaim;
                    };
                    depositCampaign(value: any): {
                        typeUrl: string;
                        value: _8.MsgDepositCampaign;
                    };
                };
                fromPartial: {
                    createCampaign(value: _8.MsgCreateCampaign): {
                        typeUrl: string;
                        value: _8.MsgCreateCampaign;
                    };
                    cancelCampaign(value: _8.MsgCancelCampaign): {
                        typeUrl: string;
                        value: _8.MsgCancelCampaign;
                    };
                    claim(value: _8.MsgClaim): {
                        typeUrl: string;
                        value: _8.MsgClaim;
                    };
                    depositCampaign(value: _8.MsgDepositCampaign): {
                        typeUrl: string;
                        value: _8.MsgDepositCampaign;
                    };
                };
            };
            AminoConverter: {
                "/OmniFlix.itc.v1.MsgCreateCampaign": {
                    aminoType: string;
                    toAmino: ({ name, description, interaction, claimType, nftDenomId, tokensPerClaim, maxAllowedClaims, deposit, nftMintDetails, startTime, duration, distribution, creator, creationFee }: _8.MsgCreateCampaign) => {
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
                    }) => _8.MsgCreateCampaign;
                };
                "/OmniFlix.itc.v1.MsgCancelCampaign": {
                    aminoType: string;
                    toAmino: ({ campaignId, creator }: _8.MsgCancelCampaign) => {
                        campaign_id: string;
                        creator: string;
                    };
                    fromAmino: ({ campaign_id, creator }: {
                        campaign_id: string;
                        creator: string;
                    }) => _8.MsgCancelCampaign;
                };
                "/OmniFlix.itc.v1.MsgClaim": {
                    aminoType: string;
                    toAmino: ({ campaignId, nftId, interaction, claimer }: _8.MsgClaim) => {
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
                    }) => _8.MsgClaim;
                };
                "/OmniFlix.itc.v1.MsgDepositCampaign": {
                    aminoType: string;
                    toAmino: ({ campaignId, amount, depositor }: _8.MsgDepositCampaign) => {
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
                    }) => _8.MsgDepositCampaign;
                };
            };
            MsgCreateCampaign: {
                encode(message: _8.MsgCreateCampaign, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _8.MsgCreateCampaign;
                fromPartial(object: Partial<_8.MsgCreateCampaign>): _8.MsgCreateCampaign;
            };
            MsgCreateCampaignResponse: {
                encode(_: _8.MsgCreateCampaignResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _8.MsgCreateCampaignResponse;
                fromPartial(_: Partial<_8.MsgCreateCampaignResponse>): _8.MsgCreateCampaignResponse;
            };
            MsgCancelCampaign: {
                encode(message: _8.MsgCancelCampaign, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _8.MsgCancelCampaign;
                fromPartial(object: Partial<_8.MsgCancelCampaign>): _8.MsgCancelCampaign;
            };
            MsgCancelCampaignResponse: {
                encode(_: _8.MsgCancelCampaignResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _8.MsgCancelCampaignResponse;
                fromPartial(_: Partial<_8.MsgCancelCampaignResponse>): _8.MsgCancelCampaignResponse;
            };
            MsgClaim: {
                encode(message: _8.MsgClaim, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _8.MsgClaim;
                fromPartial(object: Partial<_8.MsgClaim>): _8.MsgClaim;
            };
            MsgClaimResponse: {
                encode(_: _8.MsgClaimResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _8.MsgClaimResponse;
                fromPartial(_: Partial<_8.MsgClaimResponse>): _8.MsgClaimResponse;
            };
            MsgDepositCampaign: {
                encode(message: _8.MsgDepositCampaign, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _8.MsgDepositCampaign;
                fromPartial(object: Partial<_8.MsgDepositCampaign>): _8.MsgDepositCampaign;
            };
            MsgDepositCampaignResponse: {
                encode(_: _8.MsgDepositCampaignResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _8.MsgDepositCampaignResponse;
                fromPartial(_: Partial<_8.MsgDepositCampaignResponse>): _8.MsgDepositCampaignResponse;
            };
            QueryParamsRequest: {
                encode(_: _7.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _7.QueryParamsRequest;
                fromPartial(_: Partial<_7.QueryParamsRequest>): _7.QueryParamsRequest;
            };
            QueryParamsResponse: {
                encode(message: _7.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _7.QueryParamsResponse;
                fromPartial(object: Partial<_7.QueryParamsResponse>): _7.QueryParamsResponse;
            };
            QueryCampaignsRequest: {
                encode(message: _7.QueryCampaignsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _7.QueryCampaignsRequest;
                fromPartial(object: Partial<_7.QueryCampaignsRequest>): _7.QueryCampaignsRequest;
            };
            QueryCampaignsResponse: {
                encode(message: _7.QueryCampaignsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _7.QueryCampaignsResponse;
                fromPartial(object: Partial<_7.QueryCampaignsResponse>): _7.QueryCampaignsResponse;
            };
            QueryCampaignRequest: {
                encode(message: _7.QueryCampaignRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _7.QueryCampaignRequest;
                fromPartial(object: Partial<_7.QueryCampaignRequest>): _7.QueryCampaignRequest;
            };
            QueryCampaignResponse: {
                encode(message: _7.QueryCampaignResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _7.QueryCampaignResponse;
                fromPartial(object: Partial<_7.QueryCampaignResponse>): _7.QueryCampaignResponse;
            };
            QueryClaimsRequest: {
                encode(message: _7.QueryClaimsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _7.QueryClaimsRequest;
                fromPartial(object: Partial<_7.QueryClaimsRequest>): _7.QueryClaimsRequest;
            };
            QueryClaimsResponse: {
                encode(message: _7.QueryClaimsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _7.QueryClaimsResponse;
                fromPartial(object: Partial<_7.QueryClaimsResponse>): _7.QueryClaimsResponse;
            };
            Params: {
                encode(message: _6.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _6.Params;
                fromPartial(object: Partial<_6.Params>): _6.Params;
            };
            distributionTypeFromJSON(object: any): _5.DistributionType;
            distributionTypeToJSON(object: _5.DistributionType): string;
            interactionTypeFromJSON(object: any): _5.InteractionType;
            interactionTypeToJSON(object: _5.InteractionType): string;
            campaignStatusFromJSON(object: any): _5.CampaignStatus;
            campaignStatusToJSON(object: _5.CampaignStatus): string;
            claimTypeFromJSON(object: any): _5.ClaimType;
            claimTypeToJSON(object: _5.ClaimType): string;
            DistributionType: typeof _5.DistributionType;
            DistributionTypeSDKType: typeof _5.DistributionType;
            InteractionType: typeof _5.InteractionType;
            InteractionTypeSDKType: typeof _5.InteractionType;
            CampaignStatus: typeof _5.CampaignStatus;
            CampaignStatusSDKType: typeof _5.CampaignStatus;
            ClaimType: typeof _5.ClaimType;
            ClaimTypeSDKType: typeof _5.ClaimType;
            Campaign: {
                encode(message: _5.Campaign, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _5.Campaign;
                fromPartial(object: Partial<_5.Campaign>): _5.Campaign;
            };
            Distribution: {
                encode(message: _5.Distribution, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _5.Distribution;
                fromPartial(object: Partial<_5.Distribution>): _5.Distribution;
            };
            NFTDetails: {
                encode(message: _5.NFTDetails, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _5.NFTDetails;
                fromPartial(object: Partial<_5.NFTDetails>): _5.NFTDetails;
            };
            Claim: {
                encode(message: _5.Claim, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _5.Claim;
                fromPartial(object: Partial<_5.Claim>): _5.Claim;
            };
            GenesisState: {
                encode(message: _4.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _4.GenesisState;
                fromPartial(object: Partial<_4.GenesisState>): _4.GenesisState;
            };
        };
    }
    const ClientFactory: {
        createRPCMsgClient: ({ rpc }: {
            rpc: import("../helpers").Rpc;
        }) => Promise<{
            OmniFlix: {
                itc: {
                    v1: _108.MsgClientImpl;
                };
            };
            cosmos: {
                authz: {
                    v1beta1: import("../cosmos/authz/v1beta1/tx.rpc.msg").MsgClientImpl;
                };
                bank: {
                    v1beta1: import("../cosmos/bank/v1beta1/tx.rpc.msg").MsgClientImpl;
                };
                crisis: {
                    v1beta1: import("../cosmos/crisis/v1beta1/tx.rpc.msg").MsgClientImpl;
                };
                distribution: {
                    v1beta1: import("../cosmos/distribution/v1beta1/tx.rpc.msg").MsgClientImpl;
                };
                evidence: {
                    v1beta1: import("../cosmos/evidence/v1beta1/tx.rpc.msg").MsgClientImpl;
                };
                feegrant: {
                    v1beta1: import("../cosmos/feegrant/v1beta1/tx.rpc.msg").MsgClientImpl;
                };
                gov: {
                    v1beta1: import("../cosmos/gov/v1beta1/tx.rpc.msg").MsgClientImpl;
                };
                slashing: {
                    v1beta1: import("../cosmos/slashing/v1beta1/tx.rpc.msg").MsgClientImpl;
                };
                staking: {
                    v1beta1: import("../cosmos/staking/v1beta1/tx.rpc.msg").MsgClientImpl;
                };
                vesting: {
                    v1beta1: import("../cosmos/vesting/v1beta1/tx.rpc.msg").MsgClientImpl;
                };
            };
        }>;
        createRPCQueryClient: ({ rpcEndpoint }: {
            rpcEndpoint: string | import("@cosmjs/tendermint-rpc").HttpEndpoint;
        }) => Promise<{
            OmniFlix: {
                itc: {
                    v1: {
                        params(request?: _7.QueryParamsRequest): Promise<_7.QueryParamsResponse>;
                        campaigns(request: _7.QueryCampaignsRequest): Promise<_7.QueryCampaignsResponse>;
                        campaign(request: _7.QueryCampaignRequest): Promise<_7.QueryCampaignResponse>;
                        claims(request: _7.QueryClaimsRequest): Promise<_7.QueryClaimsResponse>;
                    };
                };
            };
            cosmos: {
                auth: {
                    v1beta1: {
                        accounts(request?: import("../cosmos/auth/v1beta1/query").QueryAccountsRequest): Promise<import("../cosmos/auth/v1beta1/query").QueryAccountsResponse>;
                        account(request: import("../cosmos/auth/v1beta1/query").QueryAccountRequest): Promise<import("../cosmos/auth/v1beta1/query").QueryAccountResponse>;
                        params(request?: import("../cosmos/auth/v1beta1/query").QueryParamsRequest): Promise<import("../cosmos/auth/v1beta1/query").QueryParamsResponse>;
                        moduleAccountByName(request: import("../cosmos/auth/v1beta1/query").QueryModuleAccountByNameRequest): Promise<import("../cosmos/auth/v1beta1/query").QueryModuleAccountByNameResponse>;
                    };
                };
                authz: {
                    v1beta1: {
                        grants(request: import("../cosmos/authz/v1beta1/query").QueryGrantsRequest): Promise<import("../cosmos/authz/v1beta1/query").QueryGrantsResponse>;
                        granterGrants(request: import("../cosmos/authz/v1beta1/query").QueryGranterGrantsRequest): Promise<import("../cosmos/authz/v1beta1/query").QueryGranterGrantsResponse>;
                        granteeGrants(request: import("../cosmos/authz/v1beta1/query").QueryGranteeGrantsRequest): Promise<import("../cosmos/authz/v1beta1/query").QueryGranteeGrantsResponse>;
                    };
                };
                bank: {
                    v1beta1: {
                        balance(request: import("../cosmos/bank/v1beta1/query").QueryBalanceRequest): Promise<import("../cosmos/bank/v1beta1/query").QueryBalanceResponse>;
                        allBalances(request: import("../cosmos/bank/v1beta1/query").QueryAllBalancesRequest): Promise<import("../cosmos/bank/v1beta1/query").QueryAllBalancesResponse>;
                        spendableBalances(request: import("../cosmos/bank/v1beta1/query").QuerySpendableBalancesRequest): Promise<import("../cosmos/bank/v1beta1/query").QuerySpendableBalancesResponse>;
                        totalSupply(request?: import("../cosmos/bank/v1beta1/query").QueryTotalSupplyRequest): Promise<import("../cosmos/bank/v1beta1/query").QueryTotalSupplyResponse>;
                        supplyOf(request: import("../cosmos/bank/v1beta1/query").QuerySupplyOfRequest): Promise<import("../cosmos/bank/v1beta1/query").QuerySupplyOfResponse>;
                        params(request?: import("../cosmos/bank/v1beta1/query").QueryParamsRequest): Promise<import("../cosmos/bank/v1beta1/query").QueryParamsResponse>;
                        denomMetadata(request: import("../cosmos/bank/v1beta1/query").QueryDenomMetadataRequest): Promise<import("../cosmos/bank/v1beta1/query").QueryDenomMetadataResponse>;
                        denomsMetadata(request?: import("../cosmos/bank/v1beta1/query").QueryDenomsMetadataRequest): Promise<import("../cosmos/bank/v1beta1/query").QueryDenomsMetadataResponse>;
                    };
                };
                base: {
                    node: {
                        v1beta1: {
                            config(request?: import("../cosmos/base/node/v1beta1/query").ConfigRequest): Promise<import("../cosmos/base/node/v1beta1/query").ConfigResponse>;
                        };
                    };
                    tendermint: {
                        v1beta1: {
                            getNodeInfo(request?: import("../cosmos/base/tendermint/v1beta1/query").GetNodeInfoRequest): Promise<import("../cosmos/base/tendermint/v1beta1/query").GetNodeInfoResponse>;
                            getSyncing(request?: import("../cosmos/base/tendermint/v1beta1/query").GetSyncingRequest): Promise<import("../cosmos/base/tendermint/v1beta1/query").GetSyncingResponse>;
                            getLatestBlock(request?: import("../cosmos/base/tendermint/v1beta1/query").GetLatestBlockRequest): Promise<import("../cosmos/base/tendermint/v1beta1/query").GetLatestBlockResponse>;
                            getBlockByHeight(request: import("../cosmos/base/tendermint/v1beta1/query").GetBlockByHeightRequest): Promise<import("../cosmos/base/tendermint/v1beta1/query").GetBlockByHeightResponse>;
                            getLatestValidatorSet(request?: import("../cosmos/base/tendermint/v1beta1/query").GetLatestValidatorSetRequest): Promise<import("../cosmos/base/tendermint/v1beta1/query").GetLatestValidatorSetResponse>;
                            getValidatorSetByHeight(request: import("../cosmos/base/tendermint/v1beta1/query").GetValidatorSetByHeightRequest): Promise<import("../cosmos/base/tendermint/v1beta1/query").GetValidatorSetByHeightResponse>;
                        };
                    };
                };
                distribution: {
                    v1beta1: {
                        params(request?: import("../cosmos/distribution/v1beta1/query").QueryParamsRequest): Promise<import("../cosmos/distribution/v1beta1/query").QueryParamsResponse>;
                        validatorOutstandingRewards(request: import("../cosmos/distribution/v1beta1/query").QueryValidatorOutstandingRewardsRequest): Promise<import("../cosmos/distribution/v1beta1/query").QueryValidatorOutstandingRewardsResponse>;
                        validatorCommission(request: import("../cosmos/distribution/v1beta1/query").QueryValidatorCommissionRequest): Promise<import("../cosmos/distribution/v1beta1/query").QueryValidatorCommissionResponse>;
                        validatorSlashes(request: import("../cosmos/distribution/v1beta1/query").QueryValidatorSlashesRequest): Promise<import("../cosmos/distribution/v1beta1/query").QueryValidatorSlashesResponse>;
                        delegationRewards(request: import("../cosmos/distribution/v1beta1/query").QueryDelegationRewardsRequest): Promise<import("../cosmos/distribution/v1beta1/query").QueryDelegationRewardsResponse>;
                        delegationTotalRewards(request: import("../cosmos/distribution/v1beta1/query").QueryDelegationTotalRewardsRequest): Promise<import("../cosmos/distribution/v1beta1/query").QueryDelegationTotalRewardsResponse>;
                        delegatorValidators(request: import("../cosmos/distribution/v1beta1/query").QueryDelegatorValidatorsRequest): Promise<import("../cosmos/distribution/v1beta1/query").QueryDelegatorValidatorsResponse>;
                        delegatorWithdrawAddress(request: import("../cosmos/distribution/v1beta1/query").QueryDelegatorWithdrawAddressRequest): Promise<import("../cosmos/distribution/v1beta1/query").QueryDelegatorWithdrawAddressResponse>;
                        communityPool(request?: import("../cosmos/distribution/v1beta1/query").QueryCommunityPoolRequest): Promise<import("../cosmos/distribution/v1beta1/query").QueryCommunityPoolResponse>;
                    };
                };
                evidence: {
                    v1beta1: {
                        evidence(request: import("../cosmos/evidence/v1beta1/query").QueryEvidenceRequest): Promise<import("../cosmos/evidence/v1beta1/query").QueryEvidenceResponse>;
                        allEvidence(request?: import("../cosmos/evidence/v1beta1/query").QueryAllEvidenceRequest): Promise<import("../cosmos/evidence/v1beta1/query").QueryAllEvidenceResponse>;
                    };
                };
                feegrant: {
                    v1beta1: {
                        allowance(request: import("../cosmos/feegrant/v1beta1/query").QueryAllowanceRequest): Promise<import("../cosmos/feegrant/v1beta1/query").QueryAllowanceResponse>;
                        allowances(request: import("../cosmos/feegrant/v1beta1/query").QueryAllowancesRequest): Promise<import("../cosmos/feegrant/v1beta1/query").QueryAllowancesResponse>;
                        allowancesByGranter(request: import("../cosmos/feegrant/v1beta1/query").QueryAllowancesByGranterRequest): Promise<import("../cosmos/feegrant/v1beta1/query").QueryAllowancesByGranterResponse>;
                    };
                };
                gov: {
                    v1beta1: {
                        proposal(request: import("../cosmos/gov/v1beta1/query").QueryProposalRequest): Promise<import("../cosmos/gov/v1beta1/query").QueryProposalResponse>;
                        proposals(request: import("../cosmos/gov/v1beta1/query").QueryProposalsRequest): Promise<import("../cosmos/gov/v1beta1/query").QueryProposalsResponse>;
                        vote(request: import("../cosmos/gov/v1beta1/query").QueryVoteRequest): Promise<import("../cosmos/gov/v1beta1/query").QueryVoteResponse>;
                        votes(request: import("../cosmos/gov/v1beta1/query").QueryVotesRequest): Promise<import("../cosmos/gov/v1beta1/query").QueryVotesResponse>;
                        params(request: import("../cosmos/gov/v1beta1/query").QueryParamsRequest): Promise<import("../cosmos/gov/v1beta1/query").QueryParamsResponse>;
                        deposit(request: import("../cosmos/gov/v1beta1/query").QueryDepositRequest): Promise<import("../cosmos/gov/v1beta1/query").QueryDepositResponse>;
                        deposits(request: import("../cosmos/gov/v1beta1/query").QueryDepositsRequest): Promise<import("../cosmos/gov/v1beta1/query").QueryDepositsResponse>;
                        tallyResult(request: import("../cosmos/gov/v1beta1/query").QueryTallyResultRequest): Promise<import("../cosmos/gov/v1beta1/query").QueryTallyResultResponse>;
                    };
                };
                mint: {
                    v1beta1: {
                        params(request?: import("../cosmos/mint/v1beta1/query").QueryParamsRequest): Promise<import("../cosmos/mint/v1beta1/query").QueryParamsResponse>;
                        inflation(request?: import("../cosmos/mint/v1beta1/query").QueryInflationRequest): Promise<import("../cosmos/mint/v1beta1/query").QueryInflationResponse>;
                        annualProvisions(request?: import("../cosmos/mint/v1beta1/query").QueryAnnualProvisionsRequest): Promise<import("../cosmos/mint/v1beta1/query").QueryAnnualProvisionsResponse>;
                    };
                };
                params: {
                    v1beta1: {
                        params(request: import("../cosmos/params/v1beta1/query").QueryParamsRequest): Promise<import("../cosmos/params/v1beta1/query").QueryParamsResponse>;
                    };
                };
                slashing: {
                    v1beta1: {
                        params(request?: import("../cosmos/slashing/v1beta1/query").QueryParamsRequest): Promise<import("../cosmos/slashing/v1beta1/query").QueryParamsResponse>;
                        signingInfo(request: import("../cosmos/slashing/v1beta1/query").QuerySigningInfoRequest): Promise<import("../cosmos/slashing/v1beta1/query").QuerySigningInfoResponse>;
                        signingInfos(request?: import("../cosmos/slashing/v1beta1/query").QuerySigningInfosRequest): Promise<import("../cosmos/slashing/v1beta1/query").QuerySigningInfosResponse>;
                    };
                };
                staking: {
                    v1beta1: {
                        validators(request: import("../cosmos/staking/v1beta1/query").QueryValidatorsRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryValidatorsResponse>;
                        validator(request: import("../cosmos/staking/v1beta1/query").QueryValidatorRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryValidatorResponse>;
                        validatorDelegations(request: import("../cosmos/staking/v1beta1/query").QueryValidatorDelegationsRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryValidatorDelegationsResponse>;
                        validatorUnbondingDelegations(request: import("../cosmos/staking/v1beta1/query").QueryValidatorUnbondingDelegationsRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryValidatorUnbondingDelegationsResponse>;
                        delegation(request: import("../cosmos/staking/v1beta1/query").QueryDelegationRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryDelegationResponse>;
                        unbondingDelegation(request: import("../cosmos/staking/v1beta1/query").QueryUnbondingDelegationRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryUnbondingDelegationResponse>;
                        delegatorDelegations(request: import("../cosmos/staking/v1beta1/query").QueryDelegatorDelegationsRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryDelegatorDelegationsResponse>;
                        delegatorUnbondingDelegations(request: import("../cosmos/staking/v1beta1/query").QueryDelegatorUnbondingDelegationsRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryDelegatorUnbondingDelegationsResponse>;
                        redelegations(request: import("../cosmos/staking/v1beta1/query").QueryRedelegationsRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryRedelegationsResponse>;
                        delegatorValidators(request: import("../cosmos/staking/v1beta1/query").QueryDelegatorValidatorsRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryDelegatorValidatorsResponse>;
                        delegatorValidator(request: import("../cosmos/staking/v1beta1/query").QueryDelegatorValidatorRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryDelegatorValidatorResponse>;
                        historicalInfo(request: import("../cosmos/staking/v1beta1/query").QueryHistoricalInfoRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryHistoricalInfoResponse>;
                        pool(request?: import("../cosmos/staking/v1beta1/query").QueryPoolRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryPoolResponse>;
                        params(request?: import("../cosmos/staking/v1beta1/query").QueryParamsRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryParamsResponse>;
                    };
                };
                tx: {
                    v1beta1: {
                        simulate(request: import("../cosmos/tx/v1beta1/service").SimulateRequest): Promise<import("../cosmos/tx/v1beta1/service").SimulateResponse>;
                        getTx(request: import("../cosmos/tx/v1beta1/service").GetTxRequest): Promise<import("../cosmos/tx/v1beta1/service").GetTxResponse>;
                        broadcastTx(request: import("../cosmos/tx/v1beta1/service").BroadcastTxRequest): Promise<import("../cosmos/tx/v1beta1/service").BroadcastTxResponse>;
                        getTxsEvent(request: import("../cosmos/tx/v1beta1/service").GetTxsEventRequest): Promise<import("../cosmos/tx/v1beta1/service").GetTxsEventResponse>;
                        getBlockWithTxs(request: import("../cosmos/tx/v1beta1/service").GetBlockWithTxsRequest): Promise<import("../cosmos/tx/v1beta1/service").GetBlockWithTxsResponse>;
                    };
                };
                upgrade: {
                    v1beta1: {
                        currentPlan(request?: import("../cosmos/upgrade/v1beta1/query").QueryCurrentPlanRequest): Promise<import("../cosmos/upgrade/v1beta1/query").QueryCurrentPlanResponse>;
                        appliedPlan(request: import("../cosmos/upgrade/v1beta1/query").QueryAppliedPlanRequest): Promise<import("../cosmos/upgrade/v1beta1/query").QueryAppliedPlanResponse>;
                        upgradedConsensusState(request: import("../cosmos/upgrade/v1beta1/query").QueryUpgradedConsensusStateRequest): Promise<import("../cosmos/upgrade/v1beta1/query").QueryUpgradedConsensusStateResponse>;
                        moduleVersions(request: import("../cosmos/upgrade/v1beta1/query").QueryModuleVersionsRequest): Promise<import("../cosmos/upgrade/v1beta1/query").QueryModuleVersionsResponse>;
                    };
                };
            };
        }>;
        createLCDClient: ({ restEndpoint }: {
            restEndpoint: string;
        }) => Promise<{
            OmniFlix: {
                itc: {
                    v1: _106.LCDQueryClient;
                };
            };
            cosmos: {
                auth: {
                    v1beta1: import("../cosmos/auth/v1beta1/query.lcd").LCDQueryClient;
                };
                authz: {
                    v1beta1: import("../cosmos/authz/v1beta1/query.lcd").LCDQueryClient;
                };
                bank: {
                    v1beta1: import("../cosmos/bank/v1beta1/query.lcd").LCDQueryClient;
                };
                base: {
                    node: {
                        v1beta1: import("../cosmos/base/node/v1beta1/query.lcd").LCDQueryClient;
                    };
                    tendermint: {
                        v1beta1: import("../cosmos/base/tendermint/v1beta1/query.lcd").LCDQueryClient;
                    };
                };
                distribution: {
                    v1beta1: import("../cosmos/distribution/v1beta1/query.lcd").LCDQueryClient;
                };
                evidence: {
                    v1beta1: import("../cosmos/evidence/v1beta1/query.lcd").LCDQueryClient;
                };
                feegrant: {
                    v1beta1: import("../cosmos/feegrant/v1beta1/query.lcd").LCDQueryClient;
                };
                gov: {
                    v1beta1: import("../cosmos/gov/v1beta1/query.lcd").LCDQueryClient;
                };
                mint: {
                    v1beta1: import("../cosmos/mint/v1beta1/query.lcd").LCDQueryClient;
                };
                params: {
                    v1beta1: import("../cosmos/params/v1beta1/query.lcd").LCDQueryClient;
                };
                slashing: {
                    v1beta1: import("../cosmos/slashing/v1beta1/query.lcd").LCDQueryClient;
                };
                staking: {
                    v1beta1: import("../cosmos/staking/v1beta1/query.lcd").LCDQueryClient;
                };
                tx: {
                    v1beta1: import("../cosmos/tx/v1beta1/service.lcd").LCDQueryClient;
                };
                upgrade: {
                    v1beta1: import("../cosmos/upgrade/v1beta1/query.lcd").LCDQueryClient;
                };
            };
        }>;
    };
}
