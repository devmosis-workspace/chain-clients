import { HttpEndpoint } from "@cosmjs/tendermint-rpc";
export declare const createRPCQueryClient: ({ rpcEndpoint }: {
    rpcEndpoint: string | HttpEndpoint;
}) => Promise<{
    osmosis: {
        concentratedliquidity: {
            v1beta1: {
                pools(request?: import("./concentrated-liquidity/query").PoolsRequest): Promise<import("./concentrated-liquidity/query").PoolsResponse>;
                params(request?: import("./concentrated-liquidity/query").ParamsRequest): Promise<import("./concentrated-liquidity/query").ParamsResponse>;
                userPositions(request: import("./concentrated-liquidity/query").UserPositionsRequest): Promise<import("./concentrated-liquidity/query").UserPositionsResponse>;
                liquidityPerTickRange(request: import("./concentrated-liquidity/query").LiquidityPerTickRangeRequest): Promise<import("./concentrated-liquidity/query").LiquidityPerTickRangeResponse>;
                liquidityNetInDirection(request: import("./concentrated-liquidity/query").LiquidityNetInDirectionRequest): Promise<import("./concentrated-liquidity/query").LiquidityNetInDirectionResponse>;
                claimableSpreadRewards(request: import("./concentrated-liquidity/query").ClaimableSpreadRewardsRequest): Promise<import("./concentrated-liquidity/query").ClaimableSpreadRewardsResponse>;
                claimableIncentives(request: import("./concentrated-liquidity/query").ClaimableIncentivesRequest): Promise<import("./concentrated-liquidity/query").ClaimableIncentivesResponse>;
                positionById(request: import("./concentrated-liquidity/query").PositionByIdRequest): Promise<import("./concentrated-liquidity/query").PositionByIdResponse>;
                poolAccumulatorRewards(request: import("./concentrated-liquidity/query").PoolAccumulatorRewardsRequest): Promise<import("./concentrated-liquidity/query").PoolAccumulatorRewardsResponse>;
                incentiveRecords(request: import("./concentrated-liquidity/query").IncentiveRecordsRequest): Promise<import("./concentrated-liquidity/query").IncentiveRecordsResponse>;
                tickAccumulatorTrackers(request: import("./concentrated-liquidity/query").TickAccumulatorTrackersRequest): Promise<import("./concentrated-liquidity/query").TickAccumulatorTrackersResponse>;
                cFMMPoolIdLinkFromConcentratedPoolId(request: import("./concentrated-liquidity/query").CFMMPoolIdLinkFromConcentratedPoolIdRequest): Promise<import("./concentrated-liquidity/query").CFMMPoolIdLinkFromConcentratedPoolIdResponse>;
                userUnbondingPositions(request: import("./concentrated-liquidity/query").UserUnbondingPositionsRequest): Promise<import("./concentrated-liquidity/query").UserUnbondingPositionsResponse>;
                getTotalLiquidity(request?: import("./concentrated-liquidity/query").GetTotalLiquidityRequest): Promise<import("./concentrated-liquidity/query").GetTotalLiquidityResponse>;
            };
        };
        cosmwasmpool: {
            v1beta1: {
                pools(request?: import("./cosmwasmpool/v1beta1/query").PoolsRequest): Promise<import("./cosmwasmpool/v1beta1/query").PoolsResponse>;
                params(request?: import("./cosmwasmpool/v1beta1/query").ParamsRequest): Promise<import("./cosmwasmpool/v1beta1/query").ParamsResponse>;
                contractInfoByPoolId(request: import("./cosmwasmpool/v1beta1/query").ContractInfoByPoolIdRequest): Promise<import("./cosmwasmpool/v1beta1/query").ContractInfoByPoolIdResponse>;
            };
        };
        downtimedetector: {
            v1beta1: {
                recoveredSinceDowntimeOfLength(request: import("./downtime-detector/v1beta1/query").RecoveredSinceDowntimeOfLengthRequest): Promise<import("./downtime-detector/v1beta1/query").RecoveredSinceDowntimeOfLengthResponse>;
            };
        };
        epochs: {
            v1beta1: {
                epochInfos(request?: import("./epochs/query").QueryEpochsInfoRequest): Promise<import("./epochs/query").QueryEpochsInfoResponse>;
                currentEpoch(request: import("./epochs/query").QueryCurrentEpochRequest): Promise<import("./epochs/query").QueryCurrentEpochResponse>;
            };
        };
        gamm: {
            v1beta1: {
                pools(request?: import("./gamm/v1beta1/query").QueryPoolsRequest): Promise<import("./gamm/v1beta1/query").QueryPoolsResponse>;
                numPools(request?: import("./gamm/v1beta1/query").QueryNumPoolsRequest): Promise<import("./gamm/v1beta1/query").QueryNumPoolsResponse>;
                totalLiquidity(request?: import("./gamm/v1beta1/query").QueryTotalLiquidityRequest): Promise<import("./gamm/v1beta1/query").QueryTotalLiquidityResponse>;
                poolsWithFilter(request: import("./gamm/v1beta1/query").QueryPoolsWithFilterRequest): Promise<import("./gamm/v1beta1/query").QueryPoolsWithFilterResponse>;
                pool(request: import("./gamm/v1beta1/query").QueryPoolRequest): Promise<import("./gamm/v1beta1/query").QueryPoolResponse>;
                poolType(request: import("./gamm/v1beta1/query").QueryPoolTypeRequest): Promise<import("./gamm/v1beta1/query").QueryPoolTypeResponse>;
                calcJoinPoolNoSwapShares(request: import("./gamm/v1beta1/query").QueryCalcJoinPoolNoSwapSharesRequest): Promise<import("./gamm/v1beta1/query").QueryCalcJoinPoolNoSwapSharesResponse>;
                calcJoinPoolShares(request: import("./gamm/v1beta1/query").QueryCalcJoinPoolSharesRequest): Promise<import("./gamm/v1beta1/query").QueryCalcJoinPoolSharesResponse>;
                calcExitPoolCoinsFromShares(request: import("./gamm/v1beta1/query").QueryCalcExitPoolCoinsFromSharesRequest): Promise<import("./gamm/v1beta1/query").QueryCalcExitPoolCoinsFromSharesResponse>;
                poolParams(request: import("./gamm/v1beta1/query").QueryPoolParamsRequest): Promise<import("./gamm/v1beta1/query").QueryPoolParamsResponse>;
                totalPoolLiquidity(request: import("./gamm/v1beta1/query").QueryTotalPoolLiquidityRequest): Promise<import("./gamm/v1beta1/query").QueryTotalPoolLiquidityResponse>;
                totalShares(request: import("./gamm/v1beta1/query").QueryTotalSharesRequest): Promise<import("./gamm/v1beta1/query").QueryTotalSharesResponse>;
                spotPrice(request: import("./gamm/v1beta1/query").QuerySpotPriceRequest): Promise<import("./gamm/v1beta1/query").QuerySpotPriceResponse>;
                estimateSwapExactAmountIn(request: import("./gamm/v1beta1/query").QuerySwapExactAmountInRequest): Promise<import("./gamm/v1beta1/query").QuerySwapExactAmountInResponse>;
                estimateSwapExactAmountOut(request: import("./gamm/v1beta1/query").QuerySwapExactAmountOutRequest): Promise<import("./gamm/v1beta1/query").QuerySwapExactAmountOutResponse>;
                concentratedPoolIdLinkFromCFMM(request: import("./gamm/v1beta1/query").QueryConcentratedPoolIdLinkFromCFMMRequest): Promise<import("./gamm/v1beta1/query").QueryConcentratedPoolIdLinkFromCFMMResponse>;
                cFMMConcentratedPoolLinks(request?: import("./gamm/v1beta1/query").QueryCFMMConcentratedPoolLinksRequest): Promise<import("./gamm/v1beta1/query").QueryCFMMConcentratedPoolLinksResponse>;
            };
            v2: {
                spotPrice(request: import("./gamm/v2/query").QuerySpotPriceRequest): Promise<import("./gamm/v2/query").QuerySpotPriceResponse>;
            };
        };
        ibcratelimit: {
            v1beta1: {
                params(request?: import("./ibc-rate-limit/v1beta1/query").ParamsRequest): Promise<import("./ibc-rate-limit/v1beta1/query").ParamsResponse>;
            };
        };
        incentives: {
            moduleToDistributeCoins(request?: import("./incentives/query").ModuleToDistributeCoinsRequest): Promise<import("./incentives/query").ModuleToDistributeCoinsResponse>;
            gaugeByID(request: import("./incentives/query").GaugeByIDRequest): Promise<import("./incentives/query").GaugeByIDResponse>;
            gauges(request?: import("./incentives/query").GaugesRequest): Promise<import("./incentives/query").GaugesResponse>;
            activeGauges(request?: import("./incentives/query").ActiveGaugesRequest): Promise<import("./incentives/query").ActiveGaugesResponse>;
            activeGaugesPerDenom(request: import("./incentives/query").ActiveGaugesPerDenomRequest): Promise<import("./incentives/query").ActiveGaugesPerDenomResponse>;
            upcomingGauges(request?: import("./incentives/query").UpcomingGaugesRequest): Promise<import("./incentives/query").UpcomingGaugesResponse>;
            upcomingGaugesPerDenom(request: import("./incentives/query").UpcomingGaugesPerDenomRequest): Promise<import("./incentives/query").UpcomingGaugesPerDenomResponse>;
            rewardsEst(request: import("./incentives/query").RewardsEstRequest): Promise<import("./incentives/query").RewardsEstResponse>;
            lockableDurations(request?: import("./incentives/query").QueryLockableDurationsRequest): Promise<import("./incentives/query").QueryLockableDurationsResponse>;
        };
        lockup: {
            moduleBalance(request?: import("./lockup/query").ModuleBalanceRequest): Promise<import("./lockup/query").ModuleBalanceResponse>;
            moduleLockedAmount(request?: import("./lockup/query").ModuleLockedAmountRequest): Promise<import("./lockup/query").ModuleLockedAmountResponse>;
            accountUnlockableCoins(request: import("./lockup/query").AccountUnlockableCoinsRequest): Promise<import("./lockup/query").AccountUnlockableCoinsResponse>;
            accountUnlockingCoins(request: import("./lockup/query").AccountUnlockingCoinsRequest): Promise<import("./lockup/query").AccountUnlockingCoinsResponse>;
            accountLockedCoins(request: import("./lockup/query").AccountLockedCoinsRequest): Promise<import("./lockup/query").AccountLockedCoinsResponse>;
            accountLockedPastTime(request: import("./lockup/query").AccountLockedPastTimeRequest): Promise<import("./lockup/query").AccountLockedPastTimeResponse>;
            accountLockedPastTimeNotUnlockingOnly(request: import("./lockup/query").AccountLockedPastTimeNotUnlockingOnlyRequest): Promise<import("./lockup/query").AccountLockedPastTimeNotUnlockingOnlyResponse>;
            accountUnlockedBeforeTime(request: import("./lockup/query").AccountUnlockedBeforeTimeRequest): Promise<import("./lockup/query").AccountUnlockedBeforeTimeResponse>;
            accountLockedPastTimeDenom(request: import("./lockup/query").AccountLockedPastTimeDenomRequest): Promise<import("./lockup/query").AccountLockedPastTimeDenomResponse>;
            lockedDenom(request: import("./lockup/query").LockedDenomRequest): Promise<import("./lockup/query").LockedDenomResponse>;
            lockedByID(request: import("./lockup/query").LockedRequest): Promise<import("./lockup/query").LockedResponse>;
            lockRewardReceiver(request: import("./lockup/query").LockRewardReceiverRequest): Promise<import("./lockup/query").LockRewardReceiverResponse>;
            nextLockID(request?: import("./lockup/query").NextLockIDRequest): Promise<import("./lockup/query").NextLockIDResponse>;
            syntheticLockupsByLockupID(request: import("./lockup/query").SyntheticLockupsByLockupIDRequest): Promise<import("./lockup/query").SyntheticLockupsByLockupIDResponse>;
            syntheticLockupByLockupID(request: import("./lockup/query").SyntheticLockupByLockupIDRequest): Promise<import("./lockup/query").SyntheticLockupByLockupIDResponse>;
            accountLockedLongerDuration(request: import("./lockup/query").AccountLockedLongerDurationRequest): Promise<import("./lockup/query").AccountLockedLongerDurationResponse>;
            accountLockedDuration(request: import("./lockup/query").AccountLockedDurationRequest): Promise<import("./lockup/query").AccountLockedDurationResponse>;
            accountLockedLongerDurationNotUnlockingOnly(request: import("./lockup/query").AccountLockedLongerDurationNotUnlockingOnlyRequest): Promise<import("./lockup/query").AccountLockedLongerDurationNotUnlockingOnlyResponse>;
            accountLockedLongerDurationDenom(request: import("./lockup/query").AccountLockedLongerDurationDenomRequest): Promise<import("./lockup/query").AccountLockedLongerDurationDenomResponse>;
            params(request?: import("./lockup/query").QueryParamsRequest): Promise<import("./lockup/query").QueryParamsResponse>;
        };
        mint: {
            v1beta1: {
                params(request?: import("./mint/v1beta1/query").QueryParamsRequest): Promise<import("./mint/v1beta1/query").QueryParamsResponse>;
                epochProvisions(request?: import("./mint/v1beta1/query").QueryEpochProvisionsRequest): Promise<import("./mint/v1beta1/query").QueryEpochProvisionsResponse>;
            };
        };
        poolincentives: {
            v1beta1: {
                gaugeIds(request: import("./pool-incentives/v1beta1/query").QueryGaugeIdsRequest): Promise<import("./pool-incentives/v1beta1/query").QueryGaugeIdsResponse>;
                distrInfo(request?: import("./pool-incentives/v1beta1/query").QueryDistrInfoRequest): Promise<import("./pool-incentives/v1beta1/query").QueryDistrInfoResponse>;
                params(request?: import("./pool-incentives/v1beta1/query").QueryParamsRequest): Promise<import("./pool-incentives/v1beta1/query").QueryParamsResponse>;
                lockableDurations(request?: import("./pool-incentives/v1beta1/query").QueryLockableDurationsRequest): Promise<import("./pool-incentives/v1beta1/query").QueryLockableDurationsResponse>;
                incentivizedPools(request?: import("./pool-incentives/v1beta1/query").QueryIncentivizedPoolsRequest): Promise<import("./pool-incentives/v1beta1/query").QueryIncentivizedPoolsResponse>;
                externalIncentiveGauges(request?: import("./pool-incentives/v1beta1/query").QueryExternalIncentiveGaugesRequest): Promise<import("./pool-incentives/v1beta1/query").QueryExternalIncentiveGaugesResponse>;
            };
        };
        poolmanager: {
            v1beta1: {
                params(request?: import("./poolmanager/v1beta1/query").ParamsRequest): Promise<import("./poolmanager/v1beta1/query").ParamsResponse>;
                estimateSwapExactAmountIn(request: import("./poolmanager/v1beta1/query").EstimateSwapExactAmountInRequest): Promise<import("./poolmanager/v1beta1/query").EstimateSwapExactAmountInResponse>;
                estimateSwapExactAmountInWithPrimitiveTypes(request: import("./poolmanager/v1beta1/query").EstimateSwapExactAmountInWithPrimitiveTypesRequest): Promise<import("./poolmanager/v1beta1/query").EstimateSwapExactAmountInResponse>;
                estimateSinglePoolSwapExactAmountIn(request: import("./poolmanager/v1beta1/query").EstimateSinglePoolSwapExactAmountInRequest): Promise<import("./poolmanager/v1beta1/query").EstimateSwapExactAmountInResponse>;
                estimateSwapExactAmountOut(request: import("./poolmanager/v1beta1/query").EstimateSwapExactAmountOutRequest): Promise<import("./poolmanager/v1beta1/query").EstimateSwapExactAmountOutResponse>;
                estimateSwapExactAmountOutWithPrimitiveTypes(request: import("./poolmanager/v1beta1/query").EstimateSwapExactAmountOutWithPrimitiveTypesRequest): Promise<import("./poolmanager/v1beta1/query").EstimateSwapExactAmountOutResponse>;
                estimateSinglePoolSwapExactAmountOut(request: import("./poolmanager/v1beta1/query").EstimateSinglePoolSwapExactAmountOutRequest): Promise<import("./poolmanager/v1beta1/query").EstimateSwapExactAmountOutResponse>;
                numPools(request?: import("./poolmanager/v1beta1/query").NumPoolsRequest): Promise<import("./poolmanager/v1beta1/query").NumPoolsResponse>;
                pool(request: import("./poolmanager/v1beta1/query").PoolRequest): Promise<import("./poolmanager/v1beta1/query").PoolResponse>;
                allPools(request?: import("./poolmanager/v1beta1/query").AllPoolsRequest): Promise<import("./poolmanager/v1beta1/query").AllPoolsResponse>;
                spotPrice(request: import("./poolmanager/v1beta1/query").SpotPriceRequest): Promise<import("./poolmanager/v1beta1/query").SpotPriceResponse>;
                totalPoolLiquidity(request: import("./poolmanager/v1beta1/query").TotalPoolLiquidityRequest): Promise<import("./poolmanager/v1beta1/query").TotalPoolLiquidityResponse>;
                totalLiquidity(request?: import("./poolmanager/v1beta1/query").TotalLiquidityRequest): Promise<import("./poolmanager/v1beta1/query").TotalLiquidityResponse>;
            };
        };
        protorev: {
            v1beta1: {
                params(request?: import("./protorev/v1beta1/query").QueryParamsRequest): Promise<import("./protorev/v1beta1/query").QueryParamsResponse>;
                getProtoRevNumberOfTrades(request?: import("./protorev/v1beta1/query").QueryGetProtoRevNumberOfTradesRequest): Promise<import("./protorev/v1beta1/query").QueryGetProtoRevNumberOfTradesResponse>;
                getProtoRevProfitsByDenom(request: import("./protorev/v1beta1/query").QueryGetProtoRevProfitsByDenomRequest): Promise<import("./protorev/v1beta1/query").QueryGetProtoRevProfitsByDenomResponse>;
                getProtoRevAllProfits(request?: import("./protorev/v1beta1/query").QueryGetProtoRevAllProfitsRequest): Promise<import("./protorev/v1beta1/query").QueryGetProtoRevAllProfitsResponse>;
                getProtoRevStatisticsByRoute(request: import("./protorev/v1beta1/query").QueryGetProtoRevStatisticsByRouteRequest): Promise<import("./protorev/v1beta1/query").QueryGetProtoRevStatisticsByRouteResponse>;
                getProtoRevAllRouteStatistics(request?: import("./protorev/v1beta1/query").QueryGetProtoRevAllRouteStatisticsRequest): Promise<import("./protorev/v1beta1/query").QueryGetProtoRevAllRouteStatisticsResponse>;
                getProtoRevTokenPairArbRoutes(request?: import("./protorev/v1beta1/query").QueryGetProtoRevTokenPairArbRoutesRequest): Promise<import("./protorev/v1beta1/query").QueryGetProtoRevTokenPairArbRoutesResponse>;
                getProtoRevAdminAccount(request?: import("./protorev/v1beta1/query").QueryGetProtoRevAdminAccountRequest): Promise<import("./protorev/v1beta1/query").QueryGetProtoRevAdminAccountResponse>;
                getProtoRevDeveloperAccount(request?: import("./protorev/v1beta1/query").QueryGetProtoRevDeveloperAccountRequest): Promise<import("./protorev/v1beta1/query").QueryGetProtoRevDeveloperAccountResponse>;
                getProtoRevInfoByPoolType(request?: import("./protorev/v1beta1/query").QueryGetProtoRevInfoByPoolTypeRequest): Promise<import("./protorev/v1beta1/query").QueryGetProtoRevInfoByPoolTypeResponse>;
                getProtoRevMaxPoolPointsPerTx(request?: import("./protorev/v1beta1/query").QueryGetProtoRevMaxPoolPointsPerTxRequest): Promise<import("./protorev/v1beta1/query").QueryGetProtoRevMaxPoolPointsPerTxResponse>;
                getProtoRevMaxPoolPointsPerBlock(request?: import("./protorev/v1beta1/query").QueryGetProtoRevMaxPoolPointsPerBlockRequest): Promise<import("./protorev/v1beta1/query").QueryGetProtoRevMaxPoolPointsPerBlockResponse>;
                getProtoRevBaseDenoms(request?: import("./protorev/v1beta1/query").QueryGetProtoRevBaseDenomsRequest): Promise<import("./protorev/v1beta1/query").QueryGetProtoRevBaseDenomsResponse>;
                getProtoRevEnabled(request?: import("./protorev/v1beta1/query").QueryGetProtoRevEnabledRequest): Promise<import("./protorev/v1beta1/query").QueryGetProtoRevEnabledResponse>;
                getProtoRevPool(request: import("./protorev/v1beta1/query").QueryGetProtoRevPoolRequest): Promise<import("./protorev/v1beta1/query").QueryGetProtoRevPoolResponse>;
            };
        };
        superfluid: {
            params(request?: import("./superfluid/query").QueryParamsRequest): Promise<import("./superfluid/query").QueryParamsResponse>;
            assetType(request: import("./superfluid/query").AssetTypeRequest): Promise<import("./superfluid/query").AssetTypeResponse>;
            allAssets(request?: import("./superfluid/query").AllAssetsRequest): Promise<import("./superfluid/query").AllAssetsResponse>;
            assetMultiplier(request: import("./superfluid/query").AssetMultiplierRequest): Promise<import("./superfluid/query").AssetMultiplierResponse>;
            allIntermediaryAccounts(request?: import("./superfluid/query").AllIntermediaryAccountsRequest): Promise<import("./superfluid/query").AllIntermediaryAccountsResponse>;
            connectedIntermediaryAccount(request: import("./superfluid/query").ConnectedIntermediaryAccountRequest): Promise<import("./superfluid/query").ConnectedIntermediaryAccountResponse>;
            totalDelegationByValidatorForDenom(request: import("./superfluid/query").QueryTotalDelegationByValidatorForDenomRequest): Promise<import("./superfluid/query").QueryTotalDelegationByValidatorForDenomResponse>;
            totalSuperfluidDelegations(request?: import("./superfluid/query").TotalSuperfluidDelegationsRequest): Promise<import("./superfluid/query").TotalSuperfluidDelegationsResponse>;
            superfluidDelegationAmount(request: import("./superfluid/query").SuperfluidDelegationAmountRequest): Promise<import("./superfluid/query").SuperfluidDelegationAmountResponse>;
            superfluidDelegationsByDelegator(request: import("./superfluid/query").SuperfluidDelegationsByDelegatorRequest): Promise<import("./superfluid/query").SuperfluidDelegationsByDelegatorResponse>;
            superfluidUndelegationsByDelegator(request: import("./superfluid/query").SuperfluidUndelegationsByDelegatorRequest): Promise<import("./superfluid/query").SuperfluidUndelegationsByDelegatorResponse>;
            superfluidDelegationsByValidatorDenom(request: import("./superfluid/query").SuperfluidDelegationsByValidatorDenomRequest): Promise<import("./superfluid/query").SuperfluidDelegationsByValidatorDenomResponse>;
            estimateSuperfluidDelegatedAmountByValidatorDenom(request: import("./superfluid/query").EstimateSuperfluidDelegatedAmountByValidatorDenomRequest): Promise<import("./superfluid/query").EstimateSuperfluidDelegatedAmountByValidatorDenomResponse>;
            totalDelegationByDelegator(request: import("./superfluid/query").QueryTotalDelegationByDelegatorRequest): Promise<import("./superfluid/query").QueryTotalDelegationByDelegatorResponse>;
            unpoolWhitelist(request?: import("./superfluid/query").QueryUnpoolWhitelistRequest): Promise<import("./superfluid/query").QueryUnpoolWhitelistResponse>;
            userConcentratedSuperfluidPositionsDelegated(request: import("./superfluid/query").UserConcentratedSuperfluidPositionsDelegatedRequest): Promise<import("./superfluid/query").UserConcentratedSuperfluidPositionsDelegatedResponse>;
            userConcentratedSuperfluidPositionsUndelegating(request: import("./superfluid/query").UserConcentratedSuperfluidPositionsUndelegatingRequest): Promise<import("./superfluid/query").UserConcentratedSuperfluidPositionsUndelegatingResponse>;
        };
        tokenfactory: {
            v1beta1: {
                params(request?: import("./tokenfactory/v1beta1/query").QueryParamsRequest): Promise<import("./tokenfactory/v1beta1/query").QueryParamsResponse>;
                denomAuthorityMetadata(request: import("./tokenfactory/v1beta1/query").QueryDenomAuthorityMetadataRequest): Promise<import("./tokenfactory/v1beta1/query").QueryDenomAuthorityMetadataResponse>;
                denomsFromCreator(request: import("./tokenfactory/v1beta1/query").QueryDenomsFromCreatorRequest): Promise<import("./tokenfactory/v1beta1/query").QueryDenomsFromCreatorResponse>;
                beforeSendHookAddress(request: import("./tokenfactory/v1beta1/query").QueryBeforeSendHookAddressRequest): Promise<import("./tokenfactory/v1beta1/query").QueryBeforeSendHookAddressResponse>;
            };
        };
        twap: {
            v1beta1: {
                params(request?: import("./twap/v1beta1/query").ParamsRequest): Promise<import("./twap/v1beta1/query").ParamsResponse>;
                arithmeticTwap(request: import("./twap/v1beta1/query").ArithmeticTwapRequest): Promise<import("./twap/v1beta1/query").ArithmeticTwapResponse>;
                arithmeticTwapToNow(request: import("./twap/v1beta1/query").ArithmeticTwapToNowRequest): Promise<import("./twap/v1beta1/query").ArithmeticTwapToNowResponse>;
                geometricTwap(request: import("./twap/v1beta1/query").GeometricTwapRequest): Promise<import("./twap/v1beta1/query").GeometricTwapResponse>;
                geometricTwapToNow(request: import("./twap/v1beta1/query").GeometricTwapToNowRequest): Promise<import("./twap/v1beta1/query").GeometricTwapToNowResponse>;
            };
        };
        txfees: {
            v1beta1: {
                feeTokens(request?: import("./txfees/v1beta1/query").QueryFeeTokensRequest): Promise<import("./txfees/v1beta1/query").QueryFeeTokensResponse>;
                denomSpotPrice(request: import("./txfees/v1beta1/query").QueryDenomSpotPriceRequest): Promise<import("./txfees/v1beta1/query").QueryDenomSpotPriceResponse>;
                denomPoolId(request: import("./txfees/v1beta1/query").QueryDenomPoolIdRequest): Promise<import("./txfees/v1beta1/query").QueryDenomPoolIdResponse>;
                baseDenom(request?: import("./txfees/v1beta1/query").QueryBaseDenomRequest): Promise<import("./txfees/v1beta1/query").QueryBaseDenomResponse>;
            };
        };
        valsetpref: {
            v1beta1: {
                userValidatorPreferences(request: import("./valset-pref/v1beta1/query").UserValidatorPreferencesRequest): Promise<import("./valset-pref/v1beta1/query").UserValidatorPreferencesResponse>;
            };
        };
    };
    cosmos: {
        auth: {
            v1beta1: {
                accounts(request?: import("../cosmos/auth/v1beta1/query").QueryAccountsRequest): Promise<import("../cosmos/auth/v1beta1/query").QueryAccountsResponse>;
                account(request: import("../cosmos/auth/v1beta1/query").QueryAccountRequest): Promise<import("../cosmos/auth/v1beta1/query").QueryAccountResponse>;
                params(request?: import("../cosmos/auth/v1beta1/query").QueryParamsRequest): Promise<import("../cosmos/auth/v1beta1/query").QueryParamsResponse>;
                moduleAccounts(request?: import("../cosmos/auth/v1beta1/query").QueryModuleAccountsRequest): Promise<import("../cosmos/auth/v1beta1/query").QueryModuleAccountsResponse>;
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
                totalSupply(request?: import("../cosmos/bank/v1beta1/query").QueryTotalSupplyRequest): Promise<import("../cosmos/bank/v1beta1/query").QueryTotalSupplyResponse>;
                supplyOf(request: import("../cosmos/bank/v1beta1/query").QuerySupplyOfRequest): Promise<import("../cosmos/bank/v1beta1/query").QuerySupplyOfResponse>;
                totalSupplyWithoutOffset(request?: import("../cosmos/bank/v1beta1/query").QueryTotalSupplyWithoutOffsetRequest): Promise<import("../cosmos/bank/v1beta1/query").QueryTotalSupplyWithoutOffsetResponse>;
                supplyOfWithoutOffset(request: import("../cosmos/bank/v1beta1/query").QuerySupplyOfWithoutOffsetRequest): Promise<import("../cosmos/bank/v1beta1/query").QuerySupplyOfWithoutOffsetResponse>;
                params(request?: import("../cosmos/bank/v1beta1/query").QueryParamsRequest): Promise<import("../cosmos/bank/v1beta1/query").QueryParamsResponse>;
                denomMetadata(request: import("../cosmos/bank/v1beta1/query").QueryDenomMetadataRequest): Promise<import("../cosmos/bank/v1beta1/query").QueryDenomMetadataResponse>;
                denomsMetadata(request?: import("../cosmos/bank/v1beta1/query").QueryDenomsMetadataRequest): Promise<import("../cosmos/bank/v1beta1/query").QueryDenomsMetadataResponse>;
                baseDenom(request: import("../cosmos/bank/v1beta1/query").QueryBaseDenomRequest): Promise<import("../cosmos/bank/v1beta1/query").QueryBaseDenomResponse>;
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
