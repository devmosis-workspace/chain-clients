import * as _3 from "./v1/cork";
import * as _4 from "./v1/genesis";
import * as _5 from "./v1/proposal";
import * as _6 from "./v1/query";
import * as _7 from "./v1/tx";
import * as _117 from "./v1/query.lcd";
import * as _118 from "./v1/query.rpc.Query";
import * as _119 from "./v1/tx.rpc.msg";
export declare namespace cork {
    const v1: {
        MsgClientImpl: typeof _119.MsgClientImpl;
        QueryClientImpl: typeof _118.QueryClientImpl;
        createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
            queryParams(request?: _6.QueryParamsRequest): Promise<_6.QueryParamsResponse>;
            querySubmittedCorks(request?: _6.QuerySubmittedCorksRequest): Promise<_6.QuerySubmittedCorksResponse>;
            queryCommitPeriod(request?: _6.QueryCommitPeriodRequest): Promise<_6.QueryCommitPeriodResponse>;
            queryCellarIDs(request?: _6.QueryCellarIDsRequest): Promise<_6.QueryCellarIDsResponse>;
            queryScheduledCorks(request?: _6.QueryScheduledCorksRequest): Promise<_6.QueryScheduledCorksResponse>;
            queryScheduledBlockHeights(request?: _6.QueryScheduledBlockHeightsRequest): Promise<_6.QueryScheduledBlockHeightsResponse>;
            queryScheduledCorksByBlockHeight(request: _6.QueryScheduledCorksByBlockHeightRequest): Promise<_6.QueryScheduledCorksByBlockHeightResponse>;
        };
        LCDQueryClient: typeof _117.LCDQueryClient;
        registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
        load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
        MessageComposer: {
            encoded: {
                submitCork(value: _7.MsgSubmitCorkRequest): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                scheduleCork(value: _7.MsgScheduleCorkRequest): {
                    typeUrl: string;
                    value: Uint8Array;
                };
            };
            withTypeUrl: {
                submitCork(value: _7.MsgSubmitCorkRequest): {
                    typeUrl: string;
                    value: _7.MsgSubmitCorkRequest;
                };
                scheduleCork(value: _7.MsgScheduleCorkRequest): {
                    typeUrl: string;
                    value: _7.MsgScheduleCorkRequest;
                };
            };
            fromJSON: {
                submitCork(value: any): {
                    typeUrl: string;
                    value: _7.MsgSubmitCorkRequest;
                };
                scheduleCork(value: any): {
                    typeUrl: string;
                    value: _7.MsgScheduleCorkRequest;
                };
            };
            fromPartial: {
                submitCork(value: _7.MsgSubmitCorkRequest): {
                    typeUrl: string;
                    value: _7.MsgSubmitCorkRequest;
                };
                scheduleCork(value: _7.MsgScheduleCorkRequest): {
                    typeUrl: string;
                    value: _7.MsgScheduleCorkRequest;
                };
            };
        };
        AminoConverter: {
            "/cork.v1.MsgSubmitCorkRequest": {
                aminoType: string;
                toAmino: ({ cork, signer }: _7.MsgSubmitCorkRequest) => {
                    cork: {
                        encoded_contract_call: Uint8Array;
                        target_contract_address: string;
                    };
                    signer: string;
                };
                fromAmino: ({ cork, signer }: {
                    cork: {
                        encoded_contract_call: Uint8Array;
                        target_contract_address: string;
                    };
                    signer: string;
                }) => _7.MsgSubmitCorkRequest;
            };
            "/cork.v1.MsgScheduleCorkRequest": {
                aminoType: string;
                toAmino: ({ cork, blockHeight, signer }: _7.MsgScheduleCorkRequest) => {
                    cork: {
                        encoded_contract_call: Uint8Array;
                        target_contract_address: string;
                    };
                    block_height: string;
                    signer: string;
                };
                fromAmino: ({ cork, block_height, signer }: {
                    cork: {
                        encoded_contract_call: Uint8Array;
                        target_contract_address: string;
                    };
                    block_height: string;
                    signer: string;
                }) => _7.MsgScheduleCorkRequest;
            };
        };
        MsgSubmitCorkRequest: {
            encode(message: _7.MsgSubmitCorkRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _7.MsgSubmitCorkRequest;
            fromPartial(object: Partial<_7.MsgSubmitCorkRequest>): _7.MsgSubmitCorkRequest;
        };
        MsgSubmitCorkResponse: {
            encode(_: _7.MsgSubmitCorkResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(_: any): _7.MsgSubmitCorkResponse;
            fromPartial(_: Partial<_7.MsgSubmitCorkResponse>): _7.MsgSubmitCorkResponse;
        };
        MsgScheduleCorkRequest: {
            encode(message: _7.MsgScheduleCorkRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _7.MsgScheduleCorkRequest;
            fromPartial(object: Partial<_7.MsgScheduleCorkRequest>): _7.MsgScheduleCorkRequest;
        };
        MsgScheduleCorkResponse: {
            encode(_: _7.MsgScheduleCorkResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(_: any): _7.MsgScheduleCorkResponse;
            fromPartial(_: Partial<_7.MsgScheduleCorkResponse>): _7.MsgScheduleCorkResponse;
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
        QuerySubmittedCorksRequest: {
            encode(_: _6.QuerySubmittedCorksRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(_: any): _6.QuerySubmittedCorksRequest;
            fromPartial(_: Partial<_6.QuerySubmittedCorksRequest>): _6.QuerySubmittedCorksRequest;
        };
        QuerySubmittedCorksResponse: {
            encode(message: _6.QuerySubmittedCorksResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _6.QuerySubmittedCorksResponse;
            fromPartial(object: Partial<_6.QuerySubmittedCorksResponse>): _6.QuerySubmittedCorksResponse;
        };
        QueryCommitPeriodRequest: {
            encode(_: _6.QueryCommitPeriodRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(_: any): _6.QueryCommitPeriodRequest;
            fromPartial(_: Partial<_6.QueryCommitPeriodRequest>): _6.QueryCommitPeriodRequest;
        };
        QueryCommitPeriodResponse: {
            encode(message: _6.QueryCommitPeriodResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _6.QueryCommitPeriodResponse;
            fromPartial(object: Partial<_6.QueryCommitPeriodResponse>): _6.QueryCommitPeriodResponse;
        };
        QueryCellarIDsRequest: {
            encode(_: _6.QueryCellarIDsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(_: any): _6.QueryCellarIDsRequest;
            fromPartial(_: Partial<_6.QueryCellarIDsRequest>): _6.QueryCellarIDsRequest;
        };
        QueryCellarIDsResponse: {
            encode(message: _6.QueryCellarIDsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _6.QueryCellarIDsResponse;
            fromPartial(object: Partial<_6.QueryCellarIDsResponse>): _6.QueryCellarIDsResponse;
        };
        QueryScheduledCorksRequest: {
            encode(_: _6.QueryScheduledCorksRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(_: any): _6.QueryScheduledCorksRequest;
            fromPartial(_: Partial<_6.QueryScheduledCorksRequest>): _6.QueryScheduledCorksRequest;
        };
        QueryScheduledCorksResponse: {
            encode(message: _6.QueryScheduledCorksResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _6.QueryScheduledCorksResponse;
            fromPartial(object: Partial<_6.QueryScheduledCorksResponse>): _6.QueryScheduledCorksResponse;
        };
        QueryScheduledBlockHeightsRequest: {
            encode(_: _6.QueryScheduledBlockHeightsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(_: any): _6.QueryScheduledBlockHeightsRequest;
            fromPartial(_: Partial<_6.QueryScheduledBlockHeightsRequest>): _6.QueryScheduledBlockHeightsRequest;
        };
        QueryScheduledBlockHeightsResponse: {
            encode(message: _6.QueryScheduledBlockHeightsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _6.QueryScheduledBlockHeightsResponse;
            fromPartial(object: Partial<_6.QueryScheduledBlockHeightsResponse>): _6.QueryScheduledBlockHeightsResponse;
        };
        QueryScheduledCorksByBlockHeightRequest: {
            encode(message: _6.QueryScheduledCorksByBlockHeightRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _6.QueryScheduledCorksByBlockHeightRequest;
            fromPartial(object: Partial<_6.QueryScheduledCorksByBlockHeightRequest>): _6.QueryScheduledCorksByBlockHeightRequest;
        };
        QueryScheduledCorksByBlockHeightResponse: {
            encode(message: _6.QueryScheduledCorksByBlockHeightResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _6.QueryScheduledCorksByBlockHeightResponse;
            fromPartial(object: Partial<_6.QueryScheduledCorksByBlockHeightResponse>): _6.QueryScheduledCorksByBlockHeightResponse;
        };
        AddManagedCellarIDsProposal: {
            encode(message: _5.AddManagedCellarIDsProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _5.AddManagedCellarIDsProposal;
            fromPartial(object: Partial<_5.AddManagedCellarIDsProposal>): _5.AddManagedCellarIDsProposal;
        };
        AddManagedCellarIDsProposalWithDeposit: {
            encode(message: _5.AddManagedCellarIDsProposalWithDeposit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _5.AddManagedCellarIDsProposalWithDeposit;
            fromPartial(object: Partial<_5.AddManagedCellarIDsProposalWithDeposit>): _5.AddManagedCellarIDsProposalWithDeposit;
        };
        RemoveManagedCellarIDsProposal: {
            encode(message: _5.RemoveManagedCellarIDsProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _5.RemoveManagedCellarIDsProposal;
            fromPartial(object: Partial<_5.RemoveManagedCellarIDsProposal>): _5.RemoveManagedCellarIDsProposal;
        };
        RemoveManagedCellarIDsProposalWithDeposit: {
            encode(message: _5.RemoveManagedCellarIDsProposalWithDeposit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _5.RemoveManagedCellarIDsProposalWithDeposit;
            fromPartial(object: Partial<_5.RemoveManagedCellarIDsProposalWithDeposit>): _5.RemoveManagedCellarIDsProposalWithDeposit;
        };
        GenesisState: {
            encode(message: _4.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _4.GenesisState;
            fromPartial(object: Partial<_4.GenesisState>): _4.GenesisState;
        };
        Params: {
            encode(message: _4.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _4.Params;
            fromPartial(object: Partial<_4.Params>): _4.Params;
        };
        Cork: {
            encode(message: _3.Cork, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _3.Cork;
            fromPartial(object: Partial<_3.Cork>): _3.Cork;
        };
        ValidatorCork: {
            encode(message: _3.ValidatorCork, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _3.ValidatorCork;
            fromPartial(object: Partial<_3.ValidatorCork>): _3.ValidatorCork;
        };
        ScheduledCork: {
            encode(message: _3.ScheduledCork, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _3.ScheduledCork;
            fromPartial(object: Partial<_3.ScheduledCork>): _3.ScheduledCork;
        };
        CellarIDSet: {
            encode(message: _3.CellarIDSet, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _3.CellarIDSet;
            fromPartial(object: Partial<_3.CellarIDSet>): _3.CellarIDSet;
        };
    };
    const ClientFactory: {
        createRPCMsgClient: ({ rpc }: {
            rpc: import("../helpers").Rpc;
        }) => Promise<{
            cork: {
                v1: _119.MsgClientImpl;
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
            cork: {
                v1: {
                    queryParams(request?: _6.QueryParamsRequest): Promise<_6.QueryParamsResponse>;
                    querySubmittedCorks(request?: _6.QuerySubmittedCorksRequest): Promise<_6.QuerySubmittedCorksResponse>;
                    queryCommitPeriod(request?: _6.QueryCommitPeriodRequest): Promise<_6.QueryCommitPeriodResponse>;
                    queryCellarIDs(request?: _6.QueryCellarIDsRequest): Promise<_6.QueryCellarIDsResponse>;
                    queryScheduledCorks(request?: _6.QueryScheduledCorksRequest): Promise<_6.QueryScheduledCorksResponse>;
                    queryScheduledBlockHeights(request?: _6.QueryScheduledBlockHeightsRequest): Promise<_6.QueryScheduledBlockHeightsResponse>;
                    queryScheduledCorksByBlockHeight(request: _6.QueryScheduledCorksByBlockHeightRequest): Promise<_6.QueryScheduledCorksByBlockHeightResponse>;
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
            cork: {
                v1: _117.LCDQueryClient;
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
