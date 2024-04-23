import * as _11 from "./v1/cellarfees";
import * as _12 from "./v1/genesis";
import * as _13 from "./v1/params";
import * as _14 from "./v1/query";
import * as _153 from "./v1/query.lcd";
import * as _154 from "./v1/query.rpc.Query";
export declare namespace cellarfees {
    const v1: {
        QueryClientImpl: typeof _154.QueryClientImpl;
        createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
            queryParams(request?: _14.QueryParamsRequest): Promise<_14.QueryParamsResponse>;
            queryModuleAccounts(request?: _14.QueryModuleAccountsRequest): Promise<_14.QueryModuleAccountsResponse>;
            queryLastRewardSupplyPeak(request?: _14.QueryLastRewardSupplyPeakRequest): Promise<_14.QueryLastRewardSupplyPeakResponse>;
            queryFeeAccrualCounters(request?: _14.QueryFeeAccrualCountersRequest): Promise<_14.QueryFeeAccrualCountersResponse>;
            queryAPY(request?: _14.QueryAPYRequest): Promise<_14.QueryAPYResponse>;
        };
        LCDQueryClient: typeof _153.LCDQueryClient;
        QueryParamsRequest: {
            typeUrl: string;
            encode(_: _14.QueryParamsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(_: any): _14.QueryParamsRequest;
            fromPartial(_: Partial<_14.QueryParamsRequest>): _14.QueryParamsRequest;
            fromAmino(_: _14.QueryParamsRequestAmino): _14.QueryParamsRequest;
            toAmino(_: _14.QueryParamsRequest): _14.QueryParamsRequestAmino;
            fromAminoMsg(object: _14.QueryParamsRequestAminoMsg): _14.QueryParamsRequest;
            fromProtoMsg(message: _14.QueryParamsRequestProtoMsg): _14.QueryParamsRequest;
            toProto(message: _14.QueryParamsRequest): Uint8Array;
            toProtoMsg(message: _14.QueryParamsRequest): _14.QueryParamsRequestProtoMsg;
        };
        QueryParamsResponse: {
            typeUrl: string;
            encode(message: _14.QueryParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _14.QueryParamsResponse;
            fromPartial(object: Partial<_14.QueryParamsResponse>): _14.QueryParamsResponse;
            fromAmino(object: _14.QueryParamsResponseAmino): _14.QueryParamsResponse;
            toAmino(message: _14.QueryParamsResponse): _14.QueryParamsResponseAmino;
            fromAminoMsg(object: _14.QueryParamsResponseAminoMsg): _14.QueryParamsResponse;
            fromProtoMsg(message: _14.QueryParamsResponseProtoMsg): _14.QueryParamsResponse;
            toProto(message: _14.QueryParamsResponse): Uint8Array;
            toProtoMsg(message: _14.QueryParamsResponse): _14.QueryParamsResponseProtoMsg;
        };
        QueryModuleAccountsRequest: {
            typeUrl: string;
            encode(_: _14.QueryModuleAccountsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(_: any): _14.QueryModuleAccountsRequest;
            fromPartial(_: Partial<_14.QueryModuleAccountsRequest>): _14.QueryModuleAccountsRequest;
            fromAmino(_: _14.QueryModuleAccountsRequestAmino): _14.QueryModuleAccountsRequest;
            toAmino(_: _14.QueryModuleAccountsRequest): _14.QueryModuleAccountsRequestAmino;
            fromAminoMsg(object: _14.QueryModuleAccountsRequestAminoMsg): _14.QueryModuleAccountsRequest;
            fromProtoMsg(message: _14.QueryModuleAccountsRequestProtoMsg): _14.QueryModuleAccountsRequest;
            toProto(message: _14.QueryModuleAccountsRequest): Uint8Array;
            toProtoMsg(message: _14.QueryModuleAccountsRequest): _14.QueryModuleAccountsRequestProtoMsg;
        };
        QueryModuleAccountsResponse: {
            typeUrl: string;
            encode(message: _14.QueryModuleAccountsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _14.QueryModuleAccountsResponse;
            fromPartial(object: Partial<_14.QueryModuleAccountsResponse>): _14.QueryModuleAccountsResponse;
            fromAmino(object: _14.QueryModuleAccountsResponseAmino): _14.QueryModuleAccountsResponse;
            toAmino(message: _14.QueryModuleAccountsResponse): _14.QueryModuleAccountsResponseAmino;
            fromAminoMsg(object: _14.QueryModuleAccountsResponseAminoMsg): _14.QueryModuleAccountsResponse;
            fromProtoMsg(message: _14.QueryModuleAccountsResponseProtoMsg): _14.QueryModuleAccountsResponse;
            toProto(message: _14.QueryModuleAccountsResponse): Uint8Array;
            toProtoMsg(message: _14.QueryModuleAccountsResponse): _14.QueryModuleAccountsResponseProtoMsg;
        };
        QueryLastRewardSupplyPeakRequest: {
            typeUrl: string;
            encode(_: _14.QueryLastRewardSupplyPeakRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(_: any): _14.QueryLastRewardSupplyPeakRequest;
            fromPartial(_: Partial<_14.QueryLastRewardSupplyPeakRequest>): _14.QueryLastRewardSupplyPeakRequest;
            fromAmino(_: _14.QueryLastRewardSupplyPeakRequestAmino): _14.QueryLastRewardSupplyPeakRequest;
            toAmino(_: _14.QueryLastRewardSupplyPeakRequest): _14.QueryLastRewardSupplyPeakRequestAmino;
            fromAminoMsg(object: _14.QueryLastRewardSupplyPeakRequestAminoMsg): _14.QueryLastRewardSupplyPeakRequest;
            fromProtoMsg(message: _14.QueryLastRewardSupplyPeakRequestProtoMsg): _14.QueryLastRewardSupplyPeakRequest;
            toProto(message: _14.QueryLastRewardSupplyPeakRequest): Uint8Array;
            toProtoMsg(message: _14.QueryLastRewardSupplyPeakRequest): _14.QueryLastRewardSupplyPeakRequestProtoMsg;
        };
        QueryLastRewardSupplyPeakResponse: {
            typeUrl: string;
            encode(message: _14.QueryLastRewardSupplyPeakResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _14.QueryLastRewardSupplyPeakResponse;
            fromPartial(object: Partial<_14.QueryLastRewardSupplyPeakResponse>): _14.QueryLastRewardSupplyPeakResponse;
            fromAmino(object: _14.QueryLastRewardSupplyPeakResponseAmino): _14.QueryLastRewardSupplyPeakResponse;
            toAmino(message: _14.QueryLastRewardSupplyPeakResponse): _14.QueryLastRewardSupplyPeakResponseAmino;
            fromAminoMsg(object: _14.QueryLastRewardSupplyPeakResponseAminoMsg): _14.QueryLastRewardSupplyPeakResponse;
            fromProtoMsg(message: _14.QueryLastRewardSupplyPeakResponseProtoMsg): _14.QueryLastRewardSupplyPeakResponse;
            toProto(message: _14.QueryLastRewardSupplyPeakResponse): Uint8Array;
            toProtoMsg(message: _14.QueryLastRewardSupplyPeakResponse): _14.QueryLastRewardSupplyPeakResponseProtoMsg;
        };
        QueryFeeAccrualCountersRequest: {
            typeUrl: string;
            encode(_: _14.QueryFeeAccrualCountersRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(_: any): _14.QueryFeeAccrualCountersRequest;
            fromPartial(_: Partial<_14.QueryFeeAccrualCountersRequest>): _14.QueryFeeAccrualCountersRequest;
            fromAmino(_: _14.QueryFeeAccrualCountersRequestAmino): _14.QueryFeeAccrualCountersRequest;
            toAmino(_: _14.QueryFeeAccrualCountersRequest): _14.QueryFeeAccrualCountersRequestAmino;
            fromAminoMsg(object: _14.QueryFeeAccrualCountersRequestAminoMsg): _14.QueryFeeAccrualCountersRequest;
            fromProtoMsg(message: _14.QueryFeeAccrualCountersRequestProtoMsg): _14.QueryFeeAccrualCountersRequest;
            toProto(message: _14.QueryFeeAccrualCountersRequest): Uint8Array;
            toProtoMsg(message: _14.QueryFeeAccrualCountersRequest): _14.QueryFeeAccrualCountersRequestProtoMsg;
        };
        QueryFeeAccrualCountersResponse: {
            typeUrl: string;
            encode(message: _14.QueryFeeAccrualCountersResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _14.QueryFeeAccrualCountersResponse;
            fromPartial(object: Partial<_14.QueryFeeAccrualCountersResponse>): _14.QueryFeeAccrualCountersResponse;
            fromAmino(object: _14.QueryFeeAccrualCountersResponseAmino): _14.QueryFeeAccrualCountersResponse;
            toAmino(message: _14.QueryFeeAccrualCountersResponse): _14.QueryFeeAccrualCountersResponseAmino;
            fromAminoMsg(object: _14.QueryFeeAccrualCountersResponseAminoMsg): _14.QueryFeeAccrualCountersResponse;
            fromProtoMsg(message: _14.QueryFeeAccrualCountersResponseProtoMsg): _14.QueryFeeAccrualCountersResponse;
            toProto(message: _14.QueryFeeAccrualCountersResponse): Uint8Array;
            toProtoMsg(message: _14.QueryFeeAccrualCountersResponse): _14.QueryFeeAccrualCountersResponseProtoMsg;
        };
        QueryAPYRequest: {
            typeUrl: string;
            encode(_: _14.QueryAPYRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(_: any): _14.QueryAPYRequest;
            fromPartial(_: Partial<_14.QueryAPYRequest>): _14.QueryAPYRequest;
            fromAmino(_: _14.QueryAPYRequestAmino): _14.QueryAPYRequest;
            toAmino(_: _14.QueryAPYRequest): _14.QueryAPYRequestAmino;
            fromAminoMsg(object: _14.QueryAPYRequestAminoMsg): _14.QueryAPYRequest;
            fromProtoMsg(message: _14.QueryAPYRequestProtoMsg): _14.QueryAPYRequest;
            toProto(message: _14.QueryAPYRequest): Uint8Array;
            toProtoMsg(message: _14.QueryAPYRequest): _14.QueryAPYRequestProtoMsg;
        };
        QueryAPYResponse: {
            typeUrl: string;
            encode(message: _14.QueryAPYResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _14.QueryAPYResponse;
            fromPartial(object: Partial<_14.QueryAPYResponse>): _14.QueryAPYResponse;
            fromAmino(object: _14.QueryAPYResponseAmino): _14.QueryAPYResponse;
            toAmino(message: _14.QueryAPYResponse): _14.QueryAPYResponseAmino;
            fromAminoMsg(object: _14.QueryAPYResponseAminoMsg): _14.QueryAPYResponse;
            fromProtoMsg(message: _14.QueryAPYResponseProtoMsg): _14.QueryAPYResponse;
            toProto(message: _14.QueryAPYResponse): Uint8Array;
            toProtoMsg(message: _14.QueryAPYResponse): _14.QueryAPYResponseProtoMsg;
        };
        Params: {
            typeUrl: string;
            encode(message: _13.Params, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _13.Params;
            fromPartial(object: Partial<_13.Params>): _13.Params;
            fromAmino(object: _13.ParamsAmino): _13.Params;
            toAmino(message: _13.Params): _13.ParamsAmino;
            fromAminoMsg(object: _13.ParamsAminoMsg): _13.Params;
            fromProtoMsg(message: _13.ParamsProtoMsg): _13.Params;
            toProto(message: _13.Params): Uint8Array;
            toProtoMsg(message: _13.Params): _13.ParamsProtoMsg;
        };
        GenesisState: {
            typeUrl: string;
            encode(message: _12.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _12.GenesisState;
            fromPartial(object: Partial<_12.GenesisState>): _12.GenesisState;
            fromAmino(object: _12.GenesisStateAmino): _12.GenesisState;
            toAmino(message: _12.GenesisState): _12.GenesisStateAmino;
            fromAminoMsg(object: _12.GenesisStateAminoMsg): _12.GenesisState;
            fromProtoMsg(message: _12.GenesisStateProtoMsg): _12.GenesisState;
            toProto(message: _12.GenesisState): Uint8Array;
            toProtoMsg(message: _12.GenesisState): _12.GenesisStateProtoMsg;
        };
        FeeAccrualCounter: {
            typeUrl: string;
            encode(message: _11.FeeAccrualCounter, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _11.FeeAccrualCounter;
            fromPartial(object: Partial<_11.FeeAccrualCounter>): _11.FeeAccrualCounter;
            fromAmino(object: _11.FeeAccrualCounterAmino): _11.FeeAccrualCounter;
            toAmino(message: _11.FeeAccrualCounter): _11.FeeAccrualCounterAmino;
            fromAminoMsg(object: _11.FeeAccrualCounterAminoMsg): _11.FeeAccrualCounter;
            fromProtoMsg(message: _11.FeeAccrualCounterProtoMsg): _11.FeeAccrualCounter;
            toProto(message: _11.FeeAccrualCounter): Uint8Array;
            toProtoMsg(message: _11.FeeAccrualCounter): _11.FeeAccrualCounterProtoMsg;
        };
        FeeAccrualCounters: {
            typeUrl: string;
            encode(message: _11.FeeAccrualCounters, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _11.FeeAccrualCounters;
            fromPartial(object: Partial<_11.FeeAccrualCounters>): _11.FeeAccrualCounters;
            fromAmino(object: _11.FeeAccrualCountersAmino): _11.FeeAccrualCounters;
            toAmino(message: _11.FeeAccrualCounters): _11.FeeAccrualCountersAmino;
            fromAminoMsg(object: _11.FeeAccrualCountersAminoMsg): _11.FeeAccrualCounters;
            fromProtoMsg(message: _11.FeeAccrualCountersProtoMsg): _11.FeeAccrualCounters;
            toProto(message: _11.FeeAccrualCounters): Uint8Array;
            toProtoMsg(message: _11.FeeAccrualCounters): _11.FeeAccrualCountersProtoMsg;
        };
    };
    const ClientFactory: {
        createRPCQueryClient: ({ rpcEndpoint }: {
            rpcEndpoint: string | import("@cosmjs/tendermint-rpc").HttpEndpoint;
        }) => Promise<{
            cellarfees: {
                v1: {
                    queryParams(request?: _14.QueryParamsRequest): Promise<_14.QueryParamsResponse>;
                    queryModuleAccounts(request?: _14.QueryModuleAccountsRequest): Promise<_14.QueryModuleAccountsResponse>;
                    queryLastRewardSupplyPeak(request?: _14.QueryLastRewardSupplyPeakRequest): Promise<_14.QueryLastRewardSupplyPeakResponse>;
                    queryFeeAccrualCounters(request?: _14.QueryFeeAccrualCountersRequest): Promise<_14.QueryFeeAccrualCountersResponse>;
                    queryAPY(request?: _14.QueryAPYRequest): Promise<_14.QueryAPYResponse>;
                };
            };
            cosmos: {
                app: {
                    v1alpha1: {
                        config(request?: import("../cosmos/app/v1alpha1/query").QueryConfigRequest): Promise<import("../cosmos/app/v1alpha1/query").QueryConfigResponse>;
                    };
                };
                auth: {
                    v1beta1: {
                        accounts(request?: import("../cosmos/auth/v1beta1/query").QueryAccountsRequest): Promise<import("../cosmos/auth/v1beta1/query").QueryAccountsResponse>;
                        account(request: import("../cosmos/auth/v1beta1/query").QueryAccountRequest): Promise<import("../cosmos/auth/v1beta1/query").QueryAccountResponse>;
                        accountAddressByID(request: import("../cosmos/auth/v1beta1/query").QueryAccountAddressByIDRequest): Promise<import("../cosmos/auth/v1beta1/query").QueryAccountAddressByIDResponse>;
                        params(request?: import("../cosmos/auth/v1beta1/query").QueryParamsRequest): Promise<import("../cosmos/auth/v1beta1/query").QueryParamsResponse>;
                        moduleAccounts(request?: import("../cosmos/auth/v1beta1/query").QueryModuleAccountsRequest): Promise<import("../cosmos/auth/v1beta1/query").QueryModuleAccountsResponse>;
                        moduleAccountByName(request: import("../cosmos/auth/v1beta1/query").QueryModuleAccountByNameRequest): Promise<import("../cosmos/auth/v1beta1/query").QueryModuleAccountByNameResponse>;
                        bech32Prefix(request?: import("../cosmos/auth/v1beta1/query").Bech32PrefixRequest): Promise<import("../cosmos/auth/v1beta1/query").Bech32PrefixResponse>;
                        addressBytesToString(request: import("../cosmos/auth/v1beta1/query").AddressBytesToStringRequest): Promise<import("../cosmos/auth/v1beta1/query").AddressBytesToStringResponse>;
                        addressStringToBytes(request: import("../cosmos/auth/v1beta1/query").AddressStringToBytesRequest): Promise<import("../cosmos/auth/v1beta1/query").AddressStringToBytesResponse>;
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
                        denomOwners(request: import("../cosmos/bank/v1beta1/query").QueryDenomOwnersRequest): Promise<import("../cosmos/bank/v1beta1/query").QueryDenomOwnersResponse>;
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
                            aBCIQuery(request: import("../cosmos/base/tendermint/v1beta1/query").ABCIQueryRequest): Promise<import("../cosmos/base/tendermint/v1beta1/query").ABCIQueryResponse>;
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
                    v1: {
                        proposal(request: import("../cosmos/gov/v1/query").QueryProposalRequest): Promise<import("../cosmos/gov/v1/query").QueryProposalResponse>;
                        proposals(request: import("../cosmos/gov/v1/query").QueryProposalsRequest): Promise<import("../cosmos/gov/v1/query").QueryProposalsResponse>;
                        vote(request: import("../cosmos/gov/v1/query").QueryVoteRequest): Promise<import("../cosmos/gov/v1/query").QueryVoteResponse>;
                        votes(request: import("../cosmos/gov/v1/query").QueryVotesRequest): Promise<import("../cosmos/gov/v1/query").QueryVotesResponse>;
                        params(request: import("../cosmos/gov/v1/query").QueryParamsRequest): Promise<import("../cosmos/gov/v1/query").QueryParamsResponse>;
                        deposit(request: import("../cosmos/gov/v1/query").QueryDepositRequest): Promise<import("../cosmos/gov/v1/query").QueryDepositResponse>;
                        deposits(request: import("../cosmos/gov/v1/query").QueryDepositsRequest): Promise<import("../cosmos/gov/v1/query").QueryDepositsResponse>;
                        tallyResult(request: import("../cosmos/gov/v1/query").QueryTallyResultRequest): Promise<import("../cosmos/gov/v1/query").QueryTallyResultResponse>;
                    };
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
                group: {
                    v1: {
                        groupInfo(request: import("../cosmos/group/v1/query").QueryGroupInfoRequest): Promise<import("../cosmos/group/v1/query").QueryGroupInfoResponse>;
                        groupPolicyInfo(request: import("../cosmos/group/v1/query").QueryGroupPolicyInfoRequest): Promise<import("../cosmos/group/v1/query").QueryGroupPolicyInfoResponse>;
                        groupMembers(request: import("../cosmos/group/v1/query").QueryGroupMembersRequest): Promise<import("../cosmos/group/v1/query").QueryGroupMembersResponse>;
                        groupsByAdmin(request: import("../cosmos/group/v1/query").QueryGroupsByAdminRequest): Promise<import("../cosmos/group/v1/query").QueryGroupsByAdminResponse>;
                        groupPoliciesByGroup(request: import("../cosmos/group/v1/query").QueryGroupPoliciesByGroupRequest): Promise<import("../cosmos/group/v1/query").QueryGroupPoliciesByGroupResponse>;
                        groupPoliciesByAdmin(request: import("../cosmos/group/v1/query").QueryGroupPoliciesByAdminRequest): Promise<import("../cosmos/group/v1/query").QueryGroupPoliciesByAdminResponse>;
                        proposal(request: import("../cosmos/group/v1/query").QueryProposalRequest): Promise<import("../cosmos/group/v1/query").QueryProposalResponse>;
                        proposalsByGroupPolicy(request: import("../cosmos/group/v1/query").QueryProposalsByGroupPolicyRequest): Promise<import("../cosmos/group/v1/query").QueryProposalsByGroupPolicyResponse>;
                        voteByProposalVoter(request: import("../cosmos/group/v1/query").QueryVoteByProposalVoterRequest): Promise<import("../cosmos/group/v1/query").QueryVoteByProposalVoterResponse>;
                        votesByProposal(request: import("../cosmos/group/v1/query").QueryVotesByProposalRequest): Promise<import("../cosmos/group/v1/query").QueryVotesByProposalResponse>;
                        votesByVoter(request: import("../cosmos/group/v1/query").QueryVotesByVoterRequest): Promise<import("../cosmos/group/v1/query").QueryVotesByVoterResponse>;
                        groupsByMember(request: import("../cosmos/group/v1/query").QueryGroupsByMemberRequest): Promise<import("../cosmos/group/v1/query").QueryGroupsByMemberResponse>;
                        tallyResult(request: import("../cosmos/group/v1/query").QueryTallyResultRequest): Promise<import("../cosmos/group/v1/query").QueryTallyResultResponse>;
                        groups(request?: import("../cosmos/group/v1/query").QueryGroupsRequest): Promise<import("../cosmos/group/v1/query").QueryGroupsResponse>;
                    };
                };
                mint: {
                    v1beta1: {
                        params(request?: import("../cosmos/mint/v1beta1/query").QueryParamsRequest): Promise<import("../cosmos/mint/v1beta1/query").QueryParamsResponse>;
                        inflation(request?: import("../cosmos/mint/v1beta1/query").QueryInflationRequest): Promise<import("../cosmos/mint/v1beta1/query").QueryInflationResponse>;
                        annualProvisions(request?: import("../cosmos/mint/v1beta1/query").QueryAnnualProvisionsRequest): Promise<import("../cosmos/mint/v1beta1/query").QueryAnnualProvisionsResponse>;
                    };
                };
                nft: {
                    v1beta1: {
                        balance(request: import("../cosmos/nft/v1beta1/query").QueryBalanceRequest): Promise<import("../cosmos/nft/v1beta1/query").QueryBalanceResponse>;
                        owner(request: import("../cosmos/nft/v1beta1/query").QueryOwnerRequest): Promise<import("../cosmos/nft/v1beta1/query").QueryOwnerResponse>;
                        supply(request: import("../cosmos/nft/v1beta1/query").QuerySupplyRequest): Promise<import("../cosmos/nft/v1beta1/query").QuerySupplyResponse>;
                        nFTs(request: import("../cosmos/nft/v1beta1/query").QueryNFTsRequest): Promise<import("../cosmos/nft/v1beta1/query").QueryNFTsResponse>;
                        nFT(request: import("../cosmos/nft/v1beta1/query").QueryNFTRequest): Promise<import("../cosmos/nft/v1beta1/query").QueryNFTResponse>;
                        class(request: import("../cosmos/nft/v1beta1/query").QueryClassRequest): Promise<import("../cosmos/nft/v1beta1/query").QueryClassResponse>;
                        classes(request?: import("../cosmos/nft/v1beta1/query").QueryClassesRequest): Promise<import("../cosmos/nft/v1beta1/query").QueryClassesResponse>;
                    };
                };
                params: {
                    v1beta1: {
                        params(request: import("../cosmos/params/v1beta1/query").QueryParamsRequest): Promise<import("../cosmos/params/v1beta1/query").QueryParamsResponse>;
                        subspaces(request?: import("../cosmos/params/v1beta1/query").QuerySubspacesRequest): Promise<import("../cosmos/params/v1beta1/query").QuerySubspacesResponse>;
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
                        authority(request?: import("../cosmos/upgrade/v1beta1/query").QueryAuthorityRequest): Promise<import("../cosmos/upgrade/v1beta1/query").QueryAuthorityResponse>;
                    };
                };
            };
        }>;
        createLCDClient: ({ restEndpoint }: {
            restEndpoint: string;
        }) => Promise<{
            cellarfees: {
                v1: _153.LCDQueryClient;
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
                    v1: import("../cosmos/gov/v1/query.lcd").LCDQueryClient;
                    v1beta1: import("../cosmos/gov/v1beta1/query.lcd").LCDQueryClient;
                };
                group: {
                    v1: import("../cosmos/group/v1/query.lcd").LCDQueryClient;
                };
                mint: {
                    v1beta1: import("../cosmos/mint/v1beta1/query.lcd").LCDQueryClient;
                };
                nft: {
                    v1beta1: import("../cosmos/nft/v1beta1/query.lcd").LCDQueryClient;
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
