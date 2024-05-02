import { HttpEndpoint } from "@cosmjs/tendermint-rpc";
export declare const createRPCQueryClient: ({ rpcEndpoint }: {
    rpcEndpoint: string | HttpEndpoint;
}) => Promise<{
    shentu: {
        bounty: {
            v1: {
                programs(request?: import("./bounty/v1/query").QueryProgramsRequest): Promise<import("./bounty/v1/query").QueryProgramsResponse>;
                program(request: import("./bounty/v1/query").QueryProgramRequest): Promise<import("./bounty/v1/query").QueryProgramResponse>;
                findings(request: import("./bounty/v1/query").QueryFindingsRequest): Promise<import("./bounty/v1/query").QueryFindingsResponse>;
                finding(request: import("./bounty/v1/query").QueryFindingRequest): Promise<import("./bounty/v1/query").QueryFindingResponse>;
                findingFingerprint(request: import("./bounty/v1/query").QueryFindingFingerprintRequest): Promise<import("./bounty/v1/query").QueryFindingFingerprintResponse>;
                programFingerprint(request: import("./bounty/v1/query").QueryProgramFingerprintRequest): Promise<import("./bounty/v1/query").QueryProgramFingerprintResponse>;
            };
        };
        cert: {
            v1alpha1: {
                certifier(request: import("./cert/v1alpha1/query").QueryCertifierRequest): Promise<import("./cert/v1alpha1/query").QueryCertifierResponse>;
                certifiers(request?: import("./cert/v1alpha1/query").QueryCertifiersRequest): Promise<import("./cert/v1alpha1/query").QueryCertifiersResponse>;
                platform(request: import("./cert/v1alpha1/query").QueryPlatformRequest): Promise<import("./cert/v1alpha1/query").QueryPlatformResponse>;
                certificate(request: import("./cert/v1alpha1/query").QueryCertificateRequest): Promise<import("./cert/v1alpha1/query").QueryCertificateResponse>;
                certificates(request: import("./cert/v1alpha1/query").QueryCertificatesRequest): Promise<import("./cert/v1alpha1/query").QueryCertificatesResponse>;
                addrConversion(request: import("./cert/v1alpha1/query").ConversionToShentuAddrRequest): Promise<import("./cert/v1alpha1/query").ConversionToShentuAddrResponse>;
            };
        };
        cvm: {
            v1alpha1: {
                code(request: import("./cvm/v1alpha1/query").QueryCodeRequest): Promise<import("./cvm/v1alpha1/query").QueryCodeResponse>;
                abi(request: import("./cvm/v1alpha1/query").QueryAbiRequest): Promise<import("./cvm/v1alpha1/query").QueryAbiResponse>;
                storage(request: import("./cvm/v1alpha1/query").QueryStorageRequest): Promise<import("./cvm/v1alpha1/query").QueryStorageResponse>;
                addressMeta(request: import("./cvm/v1alpha1/query").QueryAddressMetaRequest): Promise<import("./cvm/v1alpha1/query").QueryAddressMetaResponse>;
                meta(request: import("./cvm/v1alpha1/query").QueryMetaRequest): Promise<import("./cvm/v1alpha1/query").QueryMetaResponse>;
                account(request: import("./cvm/v1alpha1/query").QueryAccountRequest): Promise<acm.Account>;
                view(request: import("./cvm/v1alpha1/query").QueryViewRequest): Promise<import("./cvm/v1alpha1/query").QueryViewResponse>;
            };
        };
        gov: {
            v1alpha1: {
                proposal(request: cosmos.gov.v1beta1.QueryProposalRequest): Promise<cosmos.gov.v1beta1.QueryProposalResponse>;
                proposals(request: cosmos.gov.v1beta1.QueryProposalsRequest): Promise<cosmos.gov.v1beta1.QueryProposalsResponse>;
                vote(request: cosmos.gov.v1beta1.QueryVoteRequest): Promise<cosmos.gov.v1beta1.QueryVoteResponse>;
                votes(request: cosmos.gov.v1beta1.QueryVotesRequest): Promise<cosmos.gov.v1beta1.QueryVotesResponse>;
                params(request: cosmos.gov.v1beta1.QueryParamsRequest): Promise<import("./gov/v1alpha1/query").QueryParamsResponse>;
                deposit(request: cosmos.gov.v1beta1.QueryDepositRequest): Promise<cosmos.gov.v1beta1.QueryDepositResponse>;
                deposits(request: cosmos.gov.v1beta1.QueryDepositsRequest): Promise<cosmos.gov.v1beta1.QueryDepositsResponse>;
                tallyResult(request: cosmos.gov.v1beta1.QueryTallyResultRequest): Promise<cosmos.gov.v1beta1.QueryTallyResultResponse>;
                certVoted(request: import("./gov/v1alpha1/query").QueryCertVotedRequest): Promise<import("./gov/v1alpha1/query").QueryCertVotedResponse>;
            };
        };
        oracle: {
            v1alpha1: {
                operator(request: import("./oracle/v1alpha1/query").QueryOperatorRequest): Promise<import("./oracle/v1alpha1/query").QueryOperatorResponse>;
                operators(request?: import("./oracle/v1alpha1/query").QueryOperatorsRequest): Promise<import("./oracle/v1alpha1/query").QueryOperatorsResponse>;
                withdraws(request?: import("./oracle/v1alpha1/query").QueryWithdrawsRequest): Promise<import("./oracle/v1alpha1/query").QueryWithdrawsResponse>;
                task(request: import("./oracle/v1alpha1/query").QueryTaskRequest): Promise<import("./oracle/v1alpha1/query").QueryTaskResponse>;
                txTask(request: import("./oracle/v1alpha1/query").QueryTxTaskRequest): Promise<import("./oracle/v1alpha1/query").QueryTxTaskResponse>;
                response(request: import("./oracle/v1alpha1/query").QueryResponseRequest): Promise<import("./oracle/v1alpha1/query").QueryResponseResponse>;
                txResponse(request: import("./oracle/v1alpha1/query").QueryTxResponseRequest): Promise<import("./oracle/v1alpha1/query").QueryTxResponseResponse>;
                params(request?: import("./oracle/v1alpha1/query").QueryParamsRequest): Promise<import("./oracle/v1alpha1/query").QueryParamsResponse>;
            };
        };
        shield: {
            v1alpha1: {
                pool(request: import("./shield/v1alpha1/query").QueryPoolRequest): Promise<import("./shield/v1alpha1/query").QueryPoolResponse>;
                sponsor(request: import("./shield/v1alpha1/query").QuerySponsorRequest): Promise<import("./shield/v1alpha1/query").QuerySponsorResponse>;
                pools(request?: import("./shield/v1alpha1/query").QueryPoolsRequest): Promise<import("./shield/v1alpha1/query").QueryPoolsResponse>;
                poolPurchaseLists(request: import("./shield/v1alpha1/query").QueryPoolPurchaseListsRequest): Promise<import("./shield/v1alpha1/query").QueryPurchaseListsResponse>;
                purchaseLists(request: import("./shield/v1alpha1/query").QueryPurchaseListsRequest): Promise<import("./shield/v1alpha1/query").QueryPurchaseListsResponse>;
                purchaseList(request: import("./shield/v1alpha1/query").QueryPurchaseListRequest): Promise<import("./shield/v1alpha1/query").QueryPurchaseListResponse>;
                purchases(request?: import("./shield/v1alpha1/query").QueryPurchasesRequest): Promise<import("./shield/v1alpha1/query").QueryPurchasesResponse>;
                provider(request: import("./shield/v1alpha1/query").QueryProviderRequest): Promise<import("./shield/v1alpha1/query").QueryProviderResponse>;
                providers(request?: import("./shield/v1alpha1/query").QueryProvidersRequest): Promise<import("./shield/v1alpha1/query").QueryProvidersResponse>;
                poolParams(request?: import("./shield/v1alpha1/query").QueryPoolParamsRequest): Promise<import("./shield/v1alpha1/query").QueryPoolParamsResponse>;
                claimParams(request?: import("./shield/v1alpha1/query").QueryClaimParamsRequest): Promise<import("./shield/v1alpha1/query").QueryClaimParamsResponse>;
                distrParams(request?: import("./shield/v1alpha1/query").QueryDistrParamsRequest): Promise<import("./shield/v1alpha1/query").QueryDistrParamsResponse>;
                shieldStatus(request?: import("./shield/v1alpha1/query").QueryShieldStatusRequest): Promise<import("./shield/v1alpha1/query").QueryShieldStatusResponse>;
                shieldStaking(request: import("./shield/v1alpha1/query").QueryShieldStakingRequest): Promise<import("./shield/v1alpha1/query").QueryShieldStakingResponse>;
                shieldStakingRate(request?: import("./shield/v1alpha1/query").QueryShieldStakingRateRequest): Promise<import("./shield/v1alpha1/query").QueryShieldStakingRateResponse>;
                reimbursement(request: import("./shield/v1alpha1/query").QueryReimbursementRequest): Promise<import("./shield/v1alpha1/query").QueryReimbursementResponse>;
                reimbursements(request?: import("./shield/v1alpha1/query").QueryReimbursementsRequest): Promise<import("./shield/v1alpha1/query").QueryReimbursementsResponse>;
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
