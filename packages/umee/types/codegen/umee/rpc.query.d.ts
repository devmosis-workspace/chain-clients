import { HttpEndpoint } from "@cosmjs/tendermint-rpc";
export declare const createRPCQueryClient: ({ rpcEndpoint }: {
    rpcEndpoint: string | HttpEndpoint;
}) => Promise<{
    umee: {
        incentive: {
            v1: {
                params(request?: import("./incentive/v1/query").QueryParams): Promise<import("./incentive/v1/query").QueryParamsResponse>;
                totalBonded(request: import("./incentive/v1/query").QueryTotalBonded): Promise<import("./incentive/v1/query").QueryTotalBondedResponse>;
                totalUnbonding(request: import("./incentive/v1/query").QueryTotalUnbonding): Promise<import("./incentive/v1/query").QueryTotalUnbondingResponse>;
                accountBonds(request: import("./incentive/v1/query").QueryAccountBonds): Promise<import("./incentive/v1/query").QueryAccountBondsResponse>;
                pendingRewards(request: import("./incentive/v1/query").QueryPendingRewards): Promise<import("./incentive/v1/query").QueryPendingRewardsResponse>;
                completedIncentivePrograms(request?: import("./incentive/v1/query").QueryCompletedIncentivePrograms): Promise<import("./incentive/v1/query").QueryCompletedIncentiveProgramsResponse>;
                ongoingIncentivePrograms(request?: import("./incentive/v1/query").QueryOngoingIncentivePrograms): Promise<import("./incentive/v1/query").QueryOngoingIncentiveProgramsResponse>;
                upcomingIncentivePrograms(request?: import("./incentive/v1/query").QueryUpcomingIncentivePrograms): Promise<import("./incentive/v1/query").QueryUpcomingIncentiveProgramsResponse>;
                incentiveProgram(request: import("./incentive/v1/query").QueryIncentiveProgram): Promise<import("./incentive/v1/query").QueryIncentiveProgramResponse>;
                currentRates(request: import("./incentive/v1/query").QueryCurrentRates): Promise<import("./incentive/v1/query").QueryCurrentRatesResponse>;
                actualRates(request: import("./incentive/v1/query").QueryActualRates): Promise<import("./incentive/v1/query").QueryActualRatesResponse>;
                lastRewardTime(request?: import("./incentive/v1/query").QueryLastRewardTime): Promise<import("./incentive/v1/query").QueryLastRewardTimeResponse>;
            };
        };
        leverage: {
            v1: {
                params(request?: import("./leverage/v1/query").QueryParams): Promise<import("./leverage/v1/query").QueryParamsResponse>;
                registeredTokens(request: import("./leverage/v1/query").QueryRegisteredTokens): Promise<import("./leverage/v1/query").QueryRegisteredTokensResponse>;
                registeredTokensWithMarkets(request?: import("./leverage/v1/query").QueryRegisteredTokensWithMarkets): Promise<import("./leverage/v1/query").QueryRegisteredTokensWithMarketsResponse>;
                specialAssets(request: import("./leverage/v1/query").QuerySpecialAssets): Promise<import("./leverage/v1/query").QuerySpecialAssetsResponse>;
                marketSummary(request: import("./leverage/v1/query").QueryMarketSummary): Promise<import("./leverage/v1/query").QueryMarketSummaryResponse>;
                accountBalances(request: import("./leverage/v1/query").QueryAccountBalances): Promise<import("./leverage/v1/query").QueryAccountBalancesResponse>;
                accountSummary(request: import("./leverage/v1/query").QueryAccountSummary): Promise<import("./leverage/v1/query").QueryAccountSummaryResponse>;
                liquidationTargets(request?: import("./leverage/v1/query").QueryLiquidationTargets): Promise<import("./leverage/v1/query").QueryLiquidationTargetsResponse>;
                badDebts(request?: import("./leverage/v1/query").QueryBadDebts): Promise<import("./leverage/v1/query").QueryBadDebtsResponse>;
                maxWithdraw(request: import("./leverage/v1/query").QueryMaxWithdraw): Promise<import("./leverage/v1/query").QueryMaxWithdrawResponse>;
                maxBorrow(request: import("./leverage/v1/query").QueryMaxBorrow): Promise<import("./leverage/v1/query").QueryMaxBorrowResponse>;
                inspect(request: import("./leverage/v1/query").QueryInspect): Promise<import("./leverage/v1/query").QueryInspectResponse>;
                inspectAccount(request: import("./leverage/v1/query").QueryInspectAccount): Promise<import("./leverage/v1/query").QueryInspectAccountResponse>;
            };
        };
        metoken: {
            v1: {
                params(request?: import("./metoken/v1/query").QueryParams): Promise<import("./metoken/v1/query").QueryParamsResponse>;
                indexes(request: import("./metoken/v1/query").QueryIndexes): Promise<import("./metoken/v1/query").QueryIndexesResponse>;
                swapFee(request: import("./metoken/v1/query").QuerySwapFee): Promise<import("./metoken/v1/query").QuerySwapFeeResponse>;
                redeemFee(request: import("./metoken/v1/query").QueryRedeemFee): Promise<import("./metoken/v1/query").QueryRedeemFeeResponse>;
                indexBalances(request: import("./metoken/v1/query").QueryIndexBalances): Promise<import("./metoken/v1/query").QueryIndexBalancesResponse>;
                indexPrices(request: import("./metoken/v1/query").QueryIndexPrices): Promise<import("./metoken/v1/query").QueryIndexPricesResponse>;
            };
        };
        oracle: {
            v1: {
                exchangeRates(request: import("./oracle/v1/query").QueryExchangeRates): Promise<import("./oracle/v1/query").QueryExchangeRatesResponse>;
                activeExchangeRates(request?: import("./oracle/v1/query").QueryActiveExchangeRates): Promise<import("./oracle/v1/query").QueryActiveExchangeRatesResponse>;
                feederDelegation(request: import("./oracle/v1/query").QueryFeederDelegation): Promise<import("./oracle/v1/query").QueryFeederDelegationResponse>;
                missCounter(request: import("./oracle/v1/query").QueryMissCounter): Promise<import("./oracle/v1/query").QueryMissCounterResponse>;
                slashWindow(request?: import("./oracle/v1/query").QuerySlashWindow): Promise<import("./oracle/v1/query").QuerySlashWindowResponse>;
                aggregatePrevote(request: import("./oracle/v1/query").QueryAggregatePrevote): Promise<import("./oracle/v1/query").QueryAggregatePrevoteResponse>;
                aggregatePrevotes(request?: import("./oracle/v1/query").QueryAggregatePrevotes): Promise<import("./oracle/v1/query").QueryAggregatePrevotesResponse>;
                aggregateVote(request: import("./oracle/v1/query").QueryAggregateVote): Promise<import("./oracle/v1/query").QueryAggregateVoteResponse>;
                aggregateVotes(request?: import("./oracle/v1/query").QueryAggregateVotes): Promise<import("./oracle/v1/query").QueryAggregateVotesResponse>;
                params(request?: import("./oracle/v1/query").QueryParams): Promise<import("./oracle/v1/query").QueryParamsResponse>;
                medians(request: import("./oracle/v1/query").QueryMedians): Promise<import("./oracle/v1/query").QueryMediansResponse>;
                medianDeviations(request: import("./oracle/v1/query").QueryMedianDeviations): Promise<import("./oracle/v1/query").QueryMedianDeviationsResponse>;
                avgPrice(request: import("./oracle/v1/query").QueryAvgPrice): Promise<import("./oracle/v1/query").QueryAvgPriceResponse>;
                exgRatesWithTimestamp(request: import("./oracle/v1/query").QueryExgRatesWithTimestamp): Promise<import("./oracle/v1/query").QueryExgRatesWithTimestampResponse>;
                missCounters(request: import("./oracle/v1/query").QueryMissCounters): Promise<import("./oracle/v1/query").QueryMissCountersResponse>;
            };
        };
        ugov: {
            v1: {
                minGasPrice(request?: import("./ugov/v1/query").QueryMinGasPrice): Promise<import("./ugov/v1/query").QueryMinGasPriceResponse>;
                emergencyGroup(request?: import("./ugov/v1/query").QueryEmergencyGroup): Promise<import("./ugov/v1/query").QueryEmergencyGroupResponse>;
                inflationParams(request?: import("./ugov/v1/query").QueryInflationParams): Promise<import("./ugov/v1/query").QueryInflationParamsResponse>;
                inflationCycleEnd(request?: import("./ugov/v1/query").QueryInflationCycleEnd): Promise<import("./ugov/v1/query").QueryInflationCycleEndResponse>;
            };
        };
        uibc: {
            v1: {
                params(request?: import("./uibc/v1/query").QueryParams): Promise<import("./uibc/v1/query").QueryParamsResponse>;
                outflows(request: import("./uibc/v1/query").QueryOutflows): Promise<import("./uibc/v1/query").QueryOutflowsResponse>;
                allOutflows(request?: import("./uibc/v1/query").QueryAllOutflows): Promise<import("./uibc/v1/query").QueryAllOutflowsResponse>;
                inflows(request: import("./uibc/v1/query").QueryInflows): Promise<import("./uibc/v1/query").QueryInflowsResponse>;
                quotaExpires(request?: import("./uibc/v1/query").QueryQuotaExpires): Promise<import("./uibc/v1/query").QueryQuotaExpiresResponse>;
            };
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
                accountInfo(request: import("../cosmos/auth/v1beta1/query").QueryAccountInfoRequest): Promise<import("../cosmos/auth/v1beta1/query").QueryAccountInfoResponse>;
            };
        };
        authz: {
            v1beta1: {
                grants(request: import("../cosmos/authz/v1beta1/query").QueryGrantsRequest): Promise<import("../cosmos/authz/v1beta1/query").QueryGrantsResponse>;
                granterGrants(request: import("../cosmos/authz/v1beta1/query").QueryGranterGrantsRequest): Promise<import("../cosmos/authz/v1beta1/query").QueryGranterGrantsResponse>;
                granteeGrants(request: import("../cosmos/authz/v1beta1/query").QueryGranteeGrantsRequest): Promise<import("../cosmos/authz/v1beta1/query").QueryGranteeGrantsResponse>;
            };
        };
        autocli: {
            v1: {
                appOptions(request?: import("../cosmos/autocli/v1/query").AppOptionsRequest): Promise<import("../cosmos/autocli/v1/query").AppOptionsResponse>;
            };
        };
        bank: {
            v1beta1: {
                balance(request: import("../cosmos/bank/v1beta1/query").QueryBalanceRequest): Promise<import("../cosmos/bank/v1beta1/query").QueryBalanceResponse>;
                allBalances(request: import("../cosmos/bank/v1beta1/query").QueryAllBalancesRequest): Promise<import("../cosmos/bank/v1beta1/query").QueryAllBalancesResponse>;
                spendableBalances(request: import("../cosmos/bank/v1beta1/query").QuerySpendableBalancesRequest): Promise<import("../cosmos/bank/v1beta1/query").QuerySpendableBalancesResponse>;
                spendableBalanceByDenom(request: import("../cosmos/bank/v1beta1/query").QuerySpendableBalanceByDenomRequest): Promise<import("../cosmos/bank/v1beta1/query").QuerySpendableBalanceByDenomResponse>;
                totalSupply(request?: import("../cosmos/bank/v1beta1/query").QueryTotalSupplyRequest): Promise<import("../cosmos/bank/v1beta1/query").QueryTotalSupplyResponse>;
                supplyOf(request: import("../cosmos/bank/v1beta1/query").QuerySupplyOfRequest): Promise<import("../cosmos/bank/v1beta1/query").QuerySupplyOfResponse>;
                params(request?: import("../cosmos/bank/v1beta1/query").QueryParamsRequest): Promise<import("../cosmos/bank/v1beta1/query").QueryParamsResponse>;
                denomMetadata(request: import("../cosmos/bank/v1beta1/query").QueryDenomMetadataRequest): Promise<import("../cosmos/bank/v1beta1/query").QueryDenomMetadataResponse>;
                denomsMetadata(request?: import("../cosmos/bank/v1beta1/query").QueryDenomsMetadataRequest): Promise<import("../cosmos/bank/v1beta1/query").QueryDenomsMetadataResponse>;
                denomOwners(request: import("../cosmos/bank/v1beta1/query").QueryDenomOwnersRequest): Promise<import("../cosmos/bank/v1beta1/query").QueryDenomOwnersResponse>;
                sendEnabled(request: import("../cosmos/bank/v1beta1/query").QuerySendEnabledRequest): Promise<import("../cosmos/bank/v1beta1/query").QuerySendEnabledResponse>;
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
        consensus: {
            v1: {
                params(request?: import("../cosmos/consensus/v1/query").QueryParamsRequest): Promise<import("../cosmos/consensus/v1/query").QueryParamsResponse>;
            };
        };
        distribution: {
            v1beta1: {
                params(request?: import("../cosmos/distribution/v1beta1/query").QueryParamsRequest): Promise<import("../cosmos/distribution/v1beta1/query").QueryParamsResponse>;
                validatorDistributionInfo(request: import("../cosmos/distribution/v1beta1/query").QueryValidatorDistributionInfoRequest): Promise<import("../cosmos/distribution/v1beta1/query").QueryValidatorDistributionInfoResponse>;
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
        orm: {
            query: {
                v1alpha1: {
                    get(request: import("../cosmos/orm/query/v1alpha1/query").GetRequest): Promise<import("../cosmos/orm/query/v1alpha1/query").GetResponse>;
                    list(request: import("../cosmos/orm/query/v1alpha1/query").ListRequest): Promise<import("../cosmos/orm/query/v1alpha1/query").ListResponse>;
                };
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
                txDecode(request: import("../cosmos/tx/v1beta1/service").TxDecodeRequest): Promise<import("../cosmos/tx/v1beta1/service").TxDecodeResponse>;
                txEncode(request: import("../cosmos/tx/v1beta1/service").TxEncodeRequest): Promise<import("../cosmos/tx/v1beta1/service").TxEncodeResponse>;
                txEncodeAmino(request: import("../cosmos/tx/v1beta1/service").TxEncodeAminoRequest): Promise<import("../cosmos/tx/v1beta1/service").TxEncodeAminoResponse>;
                txDecodeAmino(request: import("../cosmos/tx/v1beta1/service").TxDecodeAminoRequest): Promise<import("../cosmos/tx/v1beta1/service").TxDecodeAminoResponse>;
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
