import * as _0 from "./feeshare/v1/feeshare";
import * as _1 from "./feeshare/v1/genesis";
import * as _2 from "./feeshare/v1/query";
import * as _3 from "./feeshare/v1/tx";
import * as _4 from "./mint/genesis";
import * as _5 from "./mint/mint";
import * as _6 from "./mint/query";
import * as _110 from "./feeshare/v1/query.rpc.Query";
import * as _111 from "./mint/query.rpc.Query";
import * as _112 from "./feeshare/v1/tx.rpc.msg";
export declare namespace juno {
    namespace feeshare {
        const v1: {
            MsgClientImpl: typeof _112.MsgClientImpl;
            QueryClientImpl: typeof _110.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                feeShares(request?: _2.QueryFeeSharesRequest): Promise<_2.QueryFeeSharesResponse>;
                feeShare(request: _2.QueryFeeShareRequest): Promise<_2.QueryFeeShareResponse>;
                params(request?: _2.QueryParamsRequest): Promise<_2.QueryParamsResponse>;
                deployerFeeShares(request: _2.QueryDeployerFeeSharesRequest): Promise<_2.QueryDeployerFeeSharesResponse>;
                withdrawerFeeShares(request: _2.QueryWithdrawerFeeSharesRequest): Promise<_2.QueryWithdrawerFeeSharesResponse>;
            };
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    registerFeeShare(value: _3.MsgRegisterFeeShare): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    updateFeeShare(value: _3.MsgUpdateFeeShare): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    cancelFeeShare(value: _3.MsgCancelFeeShare): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    registerFeeShare(value: _3.MsgRegisterFeeShare): {
                        typeUrl: string;
                        value: _3.MsgRegisterFeeShare;
                    };
                    updateFeeShare(value: _3.MsgUpdateFeeShare): {
                        typeUrl: string;
                        value: _3.MsgUpdateFeeShare;
                    };
                    cancelFeeShare(value: _3.MsgCancelFeeShare): {
                        typeUrl: string;
                        value: _3.MsgCancelFeeShare;
                    };
                };
                fromJSON: {
                    registerFeeShare(value: any): {
                        typeUrl: string;
                        value: _3.MsgRegisterFeeShare;
                    };
                    updateFeeShare(value: any): {
                        typeUrl: string;
                        value: _3.MsgUpdateFeeShare;
                    };
                    cancelFeeShare(value: any): {
                        typeUrl: string;
                        value: _3.MsgCancelFeeShare;
                    };
                };
                fromPartial: {
                    registerFeeShare(value: _3.MsgRegisterFeeShare): {
                        typeUrl: string;
                        value: _3.MsgRegisterFeeShare;
                    };
                    updateFeeShare(value: _3.MsgUpdateFeeShare): {
                        typeUrl: string;
                        value: _3.MsgUpdateFeeShare;
                    };
                    cancelFeeShare(value: _3.MsgCancelFeeShare): {
                        typeUrl: string;
                        value: _3.MsgCancelFeeShare;
                    };
                };
            };
            AminoConverter: {
                "/juno.feeshare.v1.MsgRegisterFeeShare": {
                    aminoType: string;
                    toAmino: ({ contractAddress, deployerAddress, withdrawerAddress }: _3.MsgRegisterFeeShare) => {
                        contract_address: string;
                        deployer_address: string;
                        withdrawer_address: string;
                    };
                    fromAmino: ({ contract_address, deployer_address, withdrawer_address }: {
                        contract_address: string;
                        deployer_address: string;
                        withdrawer_address: string;
                    }) => _3.MsgRegisterFeeShare;
                };
                "/juno.feeshare.v1.MsgUpdateFeeShare": {
                    aminoType: string;
                    toAmino: ({ contractAddress, deployerAddress, withdrawerAddress }: _3.MsgUpdateFeeShare) => {
                        contract_address: string;
                        deployer_address: string;
                        withdrawer_address: string;
                    };
                    fromAmino: ({ contract_address, deployer_address, withdrawer_address }: {
                        contract_address: string;
                        deployer_address: string;
                        withdrawer_address: string;
                    }) => _3.MsgUpdateFeeShare;
                };
                "/juno.feeshare.v1.MsgCancelFeeShare": {
                    aminoType: string;
                    toAmino: ({ contractAddress, deployerAddress }: _3.MsgCancelFeeShare) => {
                        contract_address: string;
                        deployer_address: string;
                    };
                    fromAmino: ({ contract_address, deployer_address }: {
                        contract_address: string;
                        deployer_address: string;
                    }) => _3.MsgCancelFeeShare;
                };
            };
            MsgRegisterFeeShare: {
                encode(message: _3.MsgRegisterFeeShare, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _3.MsgRegisterFeeShare;
                fromPartial(object: Partial<_3.MsgRegisterFeeShare>): _3.MsgRegisterFeeShare;
            };
            MsgRegisterFeeShareResponse: {
                encode(_: _3.MsgRegisterFeeShareResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _3.MsgRegisterFeeShareResponse;
                fromPartial(_: Partial<_3.MsgRegisterFeeShareResponse>): _3.MsgRegisterFeeShareResponse;
            };
            MsgUpdateFeeShare: {
                encode(message: _3.MsgUpdateFeeShare, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _3.MsgUpdateFeeShare;
                fromPartial(object: Partial<_3.MsgUpdateFeeShare>): _3.MsgUpdateFeeShare;
            };
            MsgUpdateFeeShareResponse: {
                encode(_: _3.MsgUpdateFeeShareResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _3.MsgUpdateFeeShareResponse;
                fromPartial(_: Partial<_3.MsgUpdateFeeShareResponse>): _3.MsgUpdateFeeShareResponse;
            };
            MsgCancelFeeShare: {
                encode(message: _3.MsgCancelFeeShare, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _3.MsgCancelFeeShare;
                fromPartial(object: Partial<_3.MsgCancelFeeShare>): _3.MsgCancelFeeShare;
            };
            MsgCancelFeeShareResponse: {
                encode(_: _3.MsgCancelFeeShareResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _3.MsgCancelFeeShareResponse;
                fromPartial(_: Partial<_3.MsgCancelFeeShareResponse>): _3.MsgCancelFeeShareResponse;
            };
            QueryFeeSharesRequest: {
                encode(message: _2.QueryFeeSharesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _2.QueryFeeSharesRequest;
                fromPartial(object: Partial<_2.QueryFeeSharesRequest>): _2.QueryFeeSharesRequest;
            };
            QueryFeeSharesResponse: {
                encode(message: _2.QueryFeeSharesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _2.QueryFeeSharesResponse;
                fromPartial(object: Partial<_2.QueryFeeSharesResponse>): _2.QueryFeeSharesResponse;
            };
            QueryFeeShareRequest: {
                encode(message: _2.QueryFeeShareRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _2.QueryFeeShareRequest;
                fromPartial(object: Partial<_2.QueryFeeShareRequest>): _2.QueryFeeShareRequest;
            };
            QueryFeeShareResponse: {
                encode(message: _2.QueryFeeShareResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _2.QueryFeeShareResponse;
                fromPartial(object: Partial<_2.QueryFeeShareResponse>): _2.QueryFeeShareResponse;
            };
            QueryParamsRequest: {
                encode(_: _2.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _2.QueryParamsRequest;
                fromPartial(_: Partial<_2.QueryParamsRequest>): _2.QueryParamsRequest;
            };
            QueryParamsResponse: {
                encode(message: _2.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _2.QueryParamsResponse;
                fromPartial(object: Partial<_2.QueryParamsResponse>): _2.QueryParamsResponse;
            };
            QueryDeployerFeeSharesRequest: {
                encode(message: _2.QueryDeployerFeeSharesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _2.QueryDeployerFeeSharesRequest;
                fromPartial(object: Partial<_2.QueryDeployerFeeSharesRequest>): _2.QueryDeployerFeeSharesRequest;
            };
            QueryDeployerFeeSharesResponse: {
                encode(message: _2.QueryDeployerFeeSharesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _2.QueryDeployerFeeSharesResponse;
                fromPartial(object: Partial<_2.QueryDeployerFeeSharesResponse>): _2.QueryDeployerFeeSharesResponse;
            };
            QueryWithdrawerFeeSharesRequest: {
                encode(message: _2.QueryWithdrawerFeeSharesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _2.QueryWithdrawerFeeSharesRequest;
                fromPartial(object: Partial<_2.QueryWithdrawerFeeSharesRequest>): _2.QueryWithdrawerFeeSharesRequest;
            };
            QueryWithdrawerFeeSharesResponse: {
                encode(message: _2.QueryWithdrawerFeeSharesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _2.QueryWithdrawerFeeSharesResponse;
                fromPartial(object: Partial<_2.QueryWithdrawerFeeSharesResponse>): _2.QueryWithdrawerFeeSharesResponse;
            };
            GenesisState: {
                encode(message: _1.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _1.GenesisState;
                fromPartial(object: Partial<_1.GenesisState>): _1.GenesisState;
            };
            Params: {
                encode(message: _1.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _1.Params;
                fromPartial(object: Partial<_1.Params>): _1.Params;
            };
            FeeShare: {
                encode(message: _0.FeeShare, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _0.FeeShare;
                fromPartial(object: Partial<_0.FeeShare>): _0.FeeShare;
            };
        };
    }
    const mint: {
        QueryClientImpl: typeof _111.QueryClientImpl;
        createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
            params(request?: _6.QueryParamsRequest): Promise<_6.QueryParamsResponse>;
            inflation(request?: _6.QueryInflationRequest): Promise<_6.QueryInflationResponse>;
            annualProvisions(request?: _6.QueryAnnualProvisionsRequest): Promise<_6.QueryAnnualProvisionsResponse>;
        };
        QueryParamsRequest: {
            encode(_: _6.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(_: any): _6.QueryParamsRequest;
            fromPartial(_: Partial<_6.QueryParamsRequest>): _6.QueryParamsRequest;
        };
        QueryParamsResponse: {
            encode(message: _6.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _6.QueryParamsResponse;
            fromPartial(object: Partial<_6.QueryParamsResponse>): _6.QueryParamsResponse;
        };
        QueryInflationRequest: {
            encode(_: _6.QueryInflationRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(_: any): _6.QueryInflationRequest;
            fromPartial(_: Partial<_6.QueryInflationRequest>): _6.QueryInflationRequest;
        };
        QueryInflationResponse: {
            encode(message: _6.QueryInflationResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _6.QueryInflationResponse;
            fromPartial(object: Partial<_6.QueryInflationResponse>): _6.QueryInflationResponse;
        };
        QueryAnnualProvisionsRequest: {
            encode(_: _6.QueryAnnualProvisionsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(_: any): _6.QueryAnnualProvisionsRequest;
            fromPartial(_: Partial<_6.QueryAnnualProvisionsRequest>): _6.QueryAnnualProvisionsRequest;
        };
        QueryAnnualProvisionsResponse: {
            encode(message: _6.QueryAnnualProvisionsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _6.QueryAnnualProvisionsResponse;
            fromPartial(object: Partial<_6.QueryAnnualProvisionsResponse>): _6.QueryAnnualProvisionsResponse;
        };
        Minter: {
            encode(message: _5.Minter, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _5.Minter;
            fromPartial(object: Partial<_5.Minter>): _5.Minter;
        };
        Params: {
            encode(message: _5.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _5.Params;
            fromPartial(object: Partial<_5.Params>): _5.Params;
        };
        GenesisState: {
            encode(message: _4.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _4.GenesisState;
            fromPartial(object: Partial<_4.GenesisState>): _4.GenesisState;
        };
    };
    const ClientFactory: {
        createRPCMsgClient: ({ rpc }: {
            rpc: import("../helpers").Rpc;
        }) => Promise<{
            juno: {
                feeshare: {
                    v1: _112.MsgClientImpl;
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
            juno: {
                feeshare: {
                    v1: {
                        feeShares(request?: _2.QueryFeeSharesRequest): Promise<_2.QueryFeeSharesResponse>;
                        feeShare(request: _2.QueryFeeShareRequest): Promise<_2.QueryFeeShareResponse>;
                        params(request?: _2.QueryParamsRequest): Promise<_2.QueryParamsResponse>;
                        deployerFeeShares(request: _2.QueryDeployerFeeSharesRequest): Promise<_2.QueryDeployerFeeSharesResponse>;
                        withdrawerFeeShares(request: _2.QueryWithdrawerFeeSharesRequest): Promise<_2.QueryWithdrawerFeeSharesResponse>;
                    };
                };
                mint: {
                    params(request?: _6.QueryParamsRequest): Promise<_6.QueryParamsResponse>;
                    inflation(request?: _6.QueryInflationRequest): Promise<_6.QueryInflationResponse>;
                    annualProvisions(request?: _6.QueryAnnualProvisionsRequest): Promise<_6.QueryAnnualProvisionsResponse>;
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
    };
}
