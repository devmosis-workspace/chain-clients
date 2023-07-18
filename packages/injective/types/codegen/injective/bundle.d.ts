import * as _0 from "./auction/v1beta1/auction";
import * as _1 from "./auction/v1beta1/genesis";
import * as _2 from "./auction/v1beta1/query";
import * as _3 from "./auction/v1beta1/tx";
import * as _4 from "./crypto/v1beta1/ethsecp256k1/keys";
import * as _5 from "./exchange/v1beta1/authz";
import * as _6 from "./exchange/v1beta1/events";
import * as _7 from "./exchange/v1beta1/exchange";
import * as _8 from "./exchange/v1beta1/genesis";
import * as _9 from "./exchange/v1beta1/query";
import * as _10 from "./exchange/v1beta1/tx";
import * as _11 from "./insurance/v1beta1/genesis";
import * as _12 from "./insurance/v1beta1/insurance";
import * as _13 from "./insurance/v1beta1/query";
import * as _14 from "./insurance/v1beta1/tx";
import * as _15 from "./ocr/v1beta1/genesis";
import * as _16 from "./ocr/v1beta1/ocr";
import * as _17 from "./ocr/v1beta1/query";
import * as _18 from "./ocr/v1beta1/tx";
import * as _19 from "./oracle/v1beta1/events";
import * as _20 from "./oracle/v1beta1/genesis";
import * as _21 from "./oracle/v1beta1/oracle";
import * as _22 from "./oracle/v1beta1/proposal";
import * as _23 from "./oracle/v1beta1/query";
import * as _24 from "./oracle/v1beta1/tx";
import * as _25 from "./peggy/v1/attestation";
import * as _26 from "./peggy/v1/batch";
import * as _27 from "./peggy/v1/ethereum_signer";
import * as _28 from "./peggy/v1/events";
import * as _29 from "./peggy/v1/genesis";
import * as _30 from "./peggy/v1/msgs";
import * as _31 from "./peggy/v1/params";
import * as _32 from "./peggy/v1/pool";
import * as _33 from "./peggy/v1/proposal";
import * as _34 from "./peggy/v1/query";
import * as _35 from "./peggy/v1/types";
import * as _36 from "./tokenfactory/v1beta1/authorityMetadata";
import * as _37 from "./tokenfactory/v1beta1/events";
import * as _38 from "./tokenfactory/v1beta1/genesis";
import * as _39 from "./tokenfactory/v1beta1/params";
import * as _40 from "./tokenfactory/v1beta1/query";
import * as _41 from "./tokenfactory/v1beta1/tx";
import * as _42 from "./types/v1beta1/account";
import * as _43 from "./types/v1beta1/tx_ext";
import * as _44 from "./types/v1beta1/tx_response";
import * as _45 from "./wasmx/v1/events";
import * as _46 from "./wasmx/v1/genesis";
import * as _47 from "./wasmx/v1/proposal";
import * as _48 from "./wasmx/v1/query";
import * as _49 from "./wasmx/v1/tx";
import * as _50 from "./wasmx/v1/wasmx";
import * as _219 from "./auction/v1beta1/query.lcd";
import * as _220 from "./exchange/v1beta1/query.lcd";
import * as _221 from "./insurance/v1beta1/query.lcd";
import * as _222 from "./ocr/v1beta1/query.lcd";
import * as _223 from "./oracle/v1beta1/query.lcd";
import * as _224 from "./peggy/v1/query.lcd";
import * as _225 from "./tokenfactory/v1beta1/query.lcd";
import * as _226 from "./wasmx/v1/query.lcd";
import * as _227 from "./auction/v1beta1/query.rpc.Query";
import * as _228 from "./exchange/v1beta1/query.rpc.Query";
import * as _229 from "./insurance/v1beta1/query.rpc.Query";
import * as _230 from "./ocr/v1beta1/query.rpc.Query";
import * as _231 from "./oracle/v1beta1/query.rpc.Query";
import * as _232 from "./peggy/v1/query.rpc.Query";
import * as _233 from "./tokenfactory/v1beta1/query.rpc.Query";
import * as _234 from "./wasmx/v1/query.rpc.Query";
import * as _235 from "./auction/v1beta1/tx.rpc.msg";
import * as _236 from "./exchange/v1beta1/tx.rpc.msg";
import * as _237 from "./insurance/v1beta1/tx.rpc.msg";
import * as _238 from "./ocr/v1beta1/tx.rpc.msg";
import * as _239 from "./oracle/v1beta1/tx.rpc.msg";
import * as _240 from "./peggy/v1/msgs.rpc.msg";
import * as _241 from "./tokenfactory/v1beta1/tx.rpc.msg";
import * as _242 from "./wasmx/v1/tx.rpc.msg";
export declare namespace injective {
    namespace auction {
        const v1beta1: {
            MsgClientImpl: typeof _235.MsgClientImpl;
            QueryClientImpl: typeof _227.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                auctionParams(request?: _2.QueryAuctionParamsRequest): Promise<_2.QueryAuctionParamsResponse>;
                currentAuctionBasket(request?: _2.QueryCurrentAuctionBasketRequest): Promise<_2.QueryCurrentAuctionBasketResponse>;
                auctionModuleState(request?: _2.QueryModuleStateRequest): Promise<_2.QueryModuleStateResponse>;
            };
            LCDQueryClient: typeof _219.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    bid(value: _3.MsgBid): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    updateParams(value: _3.MsgUpdateParams): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    bid(value: _3.MsgBid): {
                        typeUrl: string;
                        value: _3.MsgBid;
                    };
                    updateParams(value: _3.MsgUpdateParams): {
                        typeUrl: string;
                        value: _3.MsgUpdateParams;
                    };
                };
                fromJSON: {
                    bid(value: any): {
                        typeUrl: string;
                        value: _3.MsgBid;
                    };
                    updateParams(value: any): {
                        typeUrl: string;
                        value: _3.MsgUpdateParams;
                    };
                };
                fromPartial: {
                    bid(value: _3.MsgBid): {
                        typeUrl: string;
                        value: _3.MsgBid;
                    };
                    updateParams(value: _3.MsgUpdateParams): {
                        typeUrl: string;
                        value: _3.MsgUpdateParams;
                    };
                };
            };
            AminoConverter: {
                "/injective.auction.v1beta1.MsgBid": {
                    aminoType: string;
                    toAmino: ({ sender, bidAmount, round }: _3.MsgBid) => {
                        sender: string;
                        bid_amount: {
                            denom: string;
                            amount: string;
                        };
                        round: string;
                    };
                    fromAmino: ({ sender, bid_amount, round }: {
                        sender: string;
                        bid_amount: {
                            denom: string;
                            amount: string;
                        };
                        round: string;
                    }) => _3.MsgBid;
                };
                "/injective.auction.v1beta1.MsgUpdateParams": {
                    aminoType: string;
                    toAmino: ({ authority, params }: _3.MsgUpdateParams) => {
                        authority: string;
                        params: {
                            auction_period: string;
                            min_next_bid_increment_rate: string;
                        };
                    };
                    fromAmino: ({ authority, params }: {
                        authority: string;
                        params: {
                            auction_period: string;
                            min_next_bid_increment_rate: string;
                        };
                    }) => _3.MsgUpdateParams;
                };
            };
            MsgBid: {
                encode(message: _3.MsgBid, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _3.MsgBid;
                fromPartial(object: Partial<_3.MsgBid>): _3.MsgBid;
            };
            MsgBidResponse: {
                encode(_: _3.MsgBidResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _3.MsgBidResponse;
                fromPartial(_: Partial<_3.MsgBidResponse>): _3.MsgBidResponse;
            };
            MsgUpdateParams: {
                encode(message: _3.MsgUpdateParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _3.MsgUpdateParams;
                fromPartial(object: Partial<_3.MsgUpdateParams>): _3.MsgUpdateParams;
            };
            MsgUpdateParamsResponse: {
                encode(_: _3.MsgUpdateParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _3.MsgUpdateParamsResponse;
                fromPartial(_: Partial<_3.MsgUpdateParamsResponse>): _3.MsgUpdateParamsResponse;
            };
            QueryAuctionParamsRequest: {
                encode(_: _2.QueryAuctionParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _2.QueryAuctionParamsRequest;
                fromPartial(_: Partial<_2.QueryAuctionParamsRequest>): _2.QueryAuctionParamsRequest;
            };
            QueryAuctionParamsResponse: {
                encode(message: _2.QueryAuctionParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _2.QueryAuctionParamsResponse;
                fromPartial(object: Partial<_2.QueryAuctionParamsResponse>): _2.QueryAuctionParamsResponse;
            };
            QueryCurrentAuctionBasketRequest: {
                encode(_: _2.QueryCurrentAuctionBasketRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _2.QueryCurrentAuctionBasketRequest;
                fromPartial(_: Partial<_2.QueryCurrentAuctionBasketRequest>): _2.QueryCurrentAuctionBasketRequest;
            };
            QueryCurrentAuctionBasketResponse: {
                encode(message: _2.QueryCurrentAuctionBasketResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _2.QueryCurrentAuctionBasketResponse;
                fromPartial(object: Partial<_2.QueryCurrentAuctionBasketResponse>): _2.QueryCurrentAuctionBasketResponse;
            };
            QueryModuleStateRequest: {
                encode(_: _2.QueryModuleStateRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _2.QueryModuleStateRequest;
                fromPartial(_: Partial<_2.QueryModuleStateRequest>): _2.QueryModuleStateRequest;
            };
            QueryModuleStateResponse: {
                encode(message: _2.QueryModuleStateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _2.QueryModuleStateResponse;
                fromPartial(object: Partial<_2.QueryModuleStateResponse>): _2.QueryModuleStateResponse;
            };
            GenesisState: {
                encode(message: _1.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _1.GenesisState;
                fromPartial(object: Partial<_1.GenesisState>): _1.GenesisState;
            };
            Params: {
                encode(message: _0.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _0.Params;
                fromPartial(object: Partial<_0.Params>): _0.Params;
            };
            Bid: {
                encode(message: _0.Bid, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _0.Bid;
                fromPartial(object: Partial<_0.Bid>): _0.Bid;
            };
            EventBid: {
                encode(message: _0.EventBid, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _0.EventBid;
                fromPartial(object: Partial<_0.EventBid>): _0.EventBid;
            };
            EventAuctionResult: {
                encode(message: _0.EventAuctionResult, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _0.EventAuctionResult;
                fromPartial(object: Partial<_0.EventAuctionResult>): _0.EventAuctionResult;
            };
            EventAuctionStart: {
                encode(message: _0.EventAuctionStart, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _0.EventAuctionStart;
                fromPartial(object: Partial<_0.EventAuctionStart>): _0.EventAuctionStart;
            };
        };
    }
    namespace crypto {
        namespace v1beta1 {
            const ethsecp256k1: {
                PubKey: {
                    encode(message: _4.PubKey, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _4.PubKey;
                    fromPartial(object: Partial<_4.PubKey>): _4.PubKey;
                };
                PrivKey: {
                    encode(message: _4.PrivKey, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _4.PrivKey;
                    fromPartial(object: Partial<_4.PrivKey>): _4.PrivKey;
                };
            };
        }
    }
    namespace exchange {
        const v1beta1: {
            MsgClientImpl: typeof _236.MsgClientImpl;
            QueryClientImpl: typeof _228.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                queryExchangeParams(request?: _9.QueryExchangeParamsRequest): Promise<_9.QueryExchangeParamsResponse>;
                subaccountDeposits(request: _9.QuerySubaccountDepositsRequest): Promise<_9.QuerySubaccountDepositsResponse>;
                subaccountDeposit(request: _9.QuerySubaccountDepositRequest): Promise<_9.QuerySubaccountDepositResponse>;
                exchangeBalances(request?: _9.QueryExchangeBalancesRequest): Promise<_9.QueryExchangeBalancesResponse>;
                aggregateVolume(request: _9.QueryAggregateVolumeRequest): Promise<_9.QueryAggregateVolumeResponse>;
                aggregateVolumes(request: _9.QueryAggregateVolumesRequest): Promise<_9.QueryAggregateVolumesResponse>;
                aggregateMarketVolume(request: _9.QueryAggregateMarketVolumeRequest): Promise<_9.QueryAggregateMarketVolumeResponse>;
                aggregateMarketVolumes(request: _9.QueryAggregateMarketVolumesRequest): Promise<_9.QueryAggregateMarketVolumesResponse>;
                denomDecimal(request: _9.QueryDenomDecimalRequest): Promise<_9.QueryDenomDecimalResponse>;
                denomDecimals(request: _9.QueryDenomDecimalsRequest): Promise<_9.QueryDenomDecimalsResponse>;
                spotMarkets(request: _9.QuerySpotMarketsRequest): Promise<_9.QuerySpotMarketsResponse>;
                spotMarket(request: _9.QuerySpotMarketRequest): Promise<_9.QuerySpotMarketResponse>;
                fullSpotMarkets(request: _9.QueryFullSpotMarketsRequest): Promise<_9.QueryFullSpotMarketsResponse>;
                fullSpotMarket(request: _9.QueryFullSpotMarketRequest): Promise<_9.QueryFullSpotMarketResponse>;
                spotOrderbook(request: _9.QuerySpotOrderbookRequest): Promise<_9.QuerySpotOrderbookResponse>;
                traderSpotOrders(request: _9.QueryTraderSpotOrdersRequest): Promise<_9.QueryTraderSpotOrdersResponse>;
                accountAddressSpotOrders(request: _9.QueryAccountAddressSpotOrdersRequest): Promise<_9.QueryAccountAddressSpotOrdersResponse>;
                spotOrdersByHashes(request: _9.QuerySpotOrdersByHashesRequest): Promise<_9.QuerySpotOrdersByHashesResponse>;
                subaccountOrders(request: _9.QuerySubaccountOrdersRequest): Promise<_9.QuerySubaccountOrdersResponse>;
                traderSpotTransientOrders(request: _9.QueryTraderSpotOrdersRequest): Promise<_9.QueryTraderSpotOrdersResponse>;
                spotMidPriceAndTOB(request: _9.QuerySpotMidPriceAndTOBRequest): Promise<_9.QuerySpotMidPriceAndTOBResponse>;
                derivativeMidPriceAndTOB(request: _9.QueryDerivativeMidPriceAndTOBRequest): Promise<_9.QueryDerivativeMidPriceAndTOBResponse>;
                derivativeOrderbook(request: _9.QueryDerivativeOrderbookRequest): Promise<_9.QueryDerivativeOrderbookResponse>;
                traderDerivativeOrders(request: _9.QueryTraderDerivativeOrdersRequest): Promise<_9.QueryTraderDerivativeOrdersResponse>;
                accountAddressDerivativeOrders(request: _9.QueryAccountAddressDerivativeOrdersRequest): Promise<_9.QueryAccountAddressDerivativeOrdersResponse>;
                derivativeOrdersByHashes(request: _9.QueryDerivativeOrdersByHashesRequest): Promise<_9.QueryDerivativeOrdersByHashesResponse>;
                traderDerivativeTransientOrders(request: _9.QueryTraderDerivativeOrdersRequest): Promise<_9.QueryTraderDerivativeOrdersResponse>;
                derivativeMarkets(request: _9.QueryDerivativeMarketsRequest): Promise<_9.QueryDerivativeMarketsResponse>;
                derivativeMarket(request: _9.QueryDerivativeMarketRequest): Promise<_9.QueryDerivativeMarketResponse>;
                derivativeMarketAddress(request: _9.QueryDerivativeMarketAddressRequest): Promise<_9.QueryDerivativeMarketAddressResponse>;
                subaccountTradeNonce(request: _9.QuerySubaccountTradeNonceRequest): Promise<_9.QuerySubaccountTradeNonceResponse>;
                exchangeModuleState(request?: _9.QueryModuleStateRequest): Promise<_9.QueryModuleStateResponse>;
                positions(request?: _9.QueryPositionsRequest): Promise<_9.QueryPositionsResponse>;
                subaccountPositions(request: _9.QuerySubaccountPositionsRequest): Promise<_9.QuerySubaccountPositionsResponse>;
                subaccountPositionInMarket(request: _9.QuerySubaccountPositionInMarketRequest): Promise<_9.QuerySubaccountPositionInMarketResponse>;
                subaccountEffectivePositionInMarket(request: _9.QuerySubaccountEffectivePositionInMarketRequest): Promise<_9.QuerySubaccountEffectivePositionInMarketResponse>;
                perpetualMarketInfo(request: _9.QueryPerpetualMarketInfoRequest): Promise<_9.QueryPerpetualMarketInfoResponse>;
                expiryFuturesMarketInfo(request: _9.QueryExpiryFuturesMarketInfoRequest): Promise<_9.QueryExpiryFuturesMarketInfoResponse>;
                perpetualMarketFunding(request: _9.QueryPerpetualMarketFundingRequest): Promise<_9.QueryPerpetualMarketFundingResponse>;
                subaccountOrderMetadata(request: _9.QuerySubaccountOrderMetadataRequest): Promise<_9.QuerySubaccountOrderMetadataResponse>;
                tradeRewardPoints(request: _9.QueryTradeRewardPointsRequest): Promise<_9.QueryTradeRewardPointsResponse>;
                pendingTradeRewardPoints(request: _9.QueryTradeRewardPointsRequest): Promise<_9.QueryTradeRewardPointsResponse>;
                tradeRewardCampaign(request?: _9.QueryTradeRewardCampaignRequest): Promise<_9.QueryTradeRewardCampaignResponse>;
                feeDiscountAccountInfo(request: _9.QueryFeeDiscountAccountInfoRequest): Promise<_9.QueryFeeDiscountAccountInfoResponse>;
                feeDiscountSchedule(request?: _9.QueryFeeDiscountScheduleRequest): Promise<_9.QueryFeeDiscountScheduleResponse>;
                balanceMismatches(request: _9.QueryBalanceMismatchesRequest): Promise<_9.QueryBalanceMismatchesResponse>;
                balanceWithBalanceHolds(request?: _9.QueryBalanceWithBalanceHoldsRequest): Promise<_9.QueryBalanceWithBalanceHoldsResponse>;
                feeDiscountTierStatistics(request?: _9.QueryFeeDiscountTierStatisticsRequest): Promise<_9.QueryFeeDiscountTierStatisticsResponse>;
                mitoVaultInfos(request?: _9.MitoVaultInfosRequest): Promise<_9.MitoVaultInfosResponse>;
                queryMarketIDFromVault(request: _9.QueryMarketIDFromVaultRequest): Promise<_9.QueryMarketIDFromVaultResponse>;
                historicalTradeRecords(request: _9.QueryHistoricalTradeRecordsRequest): Promise<_9.QueryHistoricalTradeRecordsResponse>;
                isOptedOutOfRewards(request: _9.QueryIsOptedOutOfRewardsRequest): Promise<_9.QueryIsOptedOutOfRewardsResponse>;
                optedOutOfRewardsAccounts(request?: _9.QueryOptedOutOfRewardsAccountsRequest): Promise<_9.QueryOptedOutOfRewardsAccountsResponse>;
                marketVolatility(request: _9.QueryMarketVolatilityRequest): Promise<_9.QueryMarketVolatilityResponse>;
                binaryOptionsMarkets(request: _9.QueryBinaryMarketsRequest): Promise<_9.QueryBinaryMarketsResponse>;
                traderDerivativeConditionalOrders(request: _9.QueryTraderDerivativeConditionalOrdersRequest): Promise<_9.QueryTraderDerivativeConditionalOrdersResponse>;
                marketAtomicExecutionFeeMultiplier(request: _9.QueryMarketAtomicExecutionFeeMultiplierRequest): Promise<_9.QueryMarketAtomicExecutionFeeMultiplierResponse>;
            };
            LCDQueryClient: typeof _220.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    deposit(value: _10.MsgDeposit): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    withdraw(value: _10.MsgWithdraw): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    instantSpotMarketLaunch(value: _10.MsgInstantSpotMarketLaunch): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    instantPerpetualMarketLaunch(value: _10.MsgInstantPerpetualMarketLaunch): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    instantExpiryFuturesMarketLaunch(value: _10.MsgInstantExpiryFuturesMarketLaunch): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    createSpotLimitOrder(value: _10.MsgCreateSpotLimitOrder): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    batchCreateSpotLimitOrders(value: _10.MsgBatchCreateSpotLimitOrders): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    createSpotMarketOrder(value: _10.MsgCreateSpotMarketOrder): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    cancelSpotOrder(value: _10.MsgCancelSpotOrder): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    batchCancelSpotOrders(value: _10.MsgBatchCancelSpotOrders): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    batchUpdateOrders(value: _10.MsgBatchUpdateOrders): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    privilegedExecuteContract(value: _10.MsgPrivilegedExecuteContract): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    createDerivativeLimitOrder(value: _10.MsgCreateDerivativeLimitOrder): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    batchCreateDerivativeLimitOrders(value: _10.MsgBatchCreateDerivativeLimitOrders): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    createDerivativeMarketOrder(value: _10.MsgCreateDerivativeMarketOrder): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    cancelDerivativeOrder(value: _10.MsgCancelDerivativeOrder): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    batchCancelDerivativeOrders(value: _10.MsgBatchCancelDerivativeOrders): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    instantBinaryOptionsMarketLaunch(value: _10.MsgInstantBinaryOptionsMarketLaunch): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    createBinaryOptionsLimitOrder(value: _10.MsgCreateBinaryOptionsLimitOrder): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    createBinaryOptionsMarketOrder(value: _10.MsgCreateBinaryOptionsMarketOrder): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    cancelBinaryOptionsOrder(value: _10.MsgCancelBinaryOptionsOrder): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    batchCancelBinaryOptionsOrders(value: _10.MsgBatchCancelBinaryOptionsOrders): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    subaccountTransfer(value: _10.MsgSubaccountTransfer): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    externalTransfer(value: _10.MsgExternalTransfer): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    liquidatePosition(value: _10.MsgLiquidatePosition): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    increasePositionMargin(value: _10.MsgIncreasePositionMargin): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    rewardsOptOut(value: _10.MsgRewardsOptOut): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    adminUpdateBinaryOptionsMarket(value: _10.MsgAdminUpdateBinaryOptionsMarket): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    reclaimLockedFunds(value: _10.MsgReclaimLockedFunds): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    updateParams(value: _10.MsgUpdateParams): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    deposit(value: _10.MsgDeposit): {
                        typeUrl: string;
                        value: _10.MsgDeposit;
                    };
                    withdraw(value: _10.MsgWithdraw): {
                        typeUrl: string;
                        value: _10.MsgWithdraw;
                    };
                    instantSpotMarketLaunch(value: _10.MsgInstantSpotMarketLaunch): {
                        typeUrl: string;
                        value: _10.MsgInstantSpotMarketLaunch;
                    };
                    instantPerpetualMarketLaunch(value: _10.MsgInstantPerpetualMarketLaunch): {
                        typeUrl: string;
                        value: _10.MsgInstantPerpetualMarketLaunch;
                    };
                    instantExpiryFuturesMarketLaunch(value: _10.MsgInstantExpiryFuturesMarketLaunch): {
                        typeUrl: string;
                        value: _10.MsgInstantExpiryFuturesMarketLaunch;
                    };
                    createSpotLimitOrder(value: _10.MsgCreateSpotLimitOrder): {
                        typeUrl: string;
                        value: _10.MsgCreateSpotLimitOrder;
                    };
                    batchCreateSpotLimitOrders(value: _10.MsgBatchCreateSpotLimitOrders): {
                        typeUrl: string;
                        value: _10.MsgBatchCreateSpotLimitOrders;
                    };
                    createSpotMarketOrder(value: _10.MsgCreateSpotMarketOrder): {
                        typeUrl: string;
                        value: _10.MsgCreateSpotMarketOrder;
                    };
                    cancelSpotOrder(value: _10.MsgCancelSpotOrder): {
                        typeUrl: string;
                        value: _10.MsgCancelSpotOrder;
                    };
                    batchCancelSpotOrders(value: _10.MsgBatchCancelSpotOrders): {
                        typeUrl: string;
                        value: _10.MsgBatchCancelSpotOrders;
                    };
                    batchUpdateOrders(value: _10.MsgBatchUpdateOrders): {
                        typeUrl: string;
                        value: _10.MsgBatchUpdateOrders;
                    };
                    privilegedExecuteContract(value: _10.MsgPrivilegedExecuteContract): {
                        typeUrl: string;
                        value: _10.MsgPrivilegedExecuteContract;
                    };
                    createDerivativeLimitOrder(value: _10.MsgCreateDerivativeLimitOrder): {
                        typeUrl: string;
                        value: _10.MsgCreateDerivativeLimitOrder;
                    };
                    batchCreateDerivativeLimitOrders(value: _10.MsgBatchCreateDerivativeLimitOrders): {
                        typeUrl: string;
                        value: _10.MsgBatchCreateDerivativeLimitOrders;
                    };
                    createDerivativeMarketOrder(value: _10.MsgCreateDerivativeMarketOrder): {
                        typeUrl: string;
                        value: _10.MsgCreateDerivativeMarketOrder;
                    };
                    cancelDerivativeOrder(value: _10.MsgCancelDerivativeOrder): {
                        typeUrl: string;
                        value: _10.MsgCancelDerivativeOrder;
                    };
                    batchCancelDerivativeOrders(value: _10.MsgBatchCancelDerivativeOrders): {
                        typeUrl: string;
                        value: _10.MsgBatchCancelDerivativeOrders;
                    };
                    instantBinaryOptionsMarketLaunch(value: _10.MsgInstantBinaryOptionsMarketLaunch): {
                        typeUrl: string;
                        value: _10.MsgInstantBinaryOptionsMarketLaunch;
                    };
                    createBinaryOptionsLimitOrder(value: _10.MsgCreateBinaryOptionsLimitOrder): {
                        typeUrl: string;
                        value: _10.MsgCreateBinaryOptionsLimitOrder;
                    };
                    createBinaryOptionsMarketOrder(value: _10.MsgCreateBinaryOptionsMarketOrder): {
                        typeUrl: string;
                        value: _10.MsgCreateBinaryOptionsMarketOrder;
                    };
                    cancelBinaryOptionsOrder(value: _10.MsgCancelBinaryOptionsOrder): {
                        typeUrl: string;
                        value: _10.MsgCancelBinaryOptionsOrder;
                    };
                    batchCancelBinaryOptionsOrders(value: _10.MsgBatchCancelBinaryOptionsOrders): {
                        typeUrl: string;
                        value: _10.MsgBatchCancelBinaryOptionsOrders;
                    };
                    subaccountTransfer(value: _10.MsgSubaccountTransfer): {
                        typeUrl: string;
                        value: _10.MsgSubaccountTransfer;
                    };
                    externalTransfer(value: _10.MsgExternalTransfer): {
                        typeUrl: string;
                        value: _10.MsgExternalTransfer;
                    };
                    liquidatePosition(value: _10.MsgLiquidatePosition): {
                        typeUrl: string;
                        value: _10.MsgLiquidatePosition;
                    };
                    increasePositionMargin(value: _10.MsgIncreasePositionMargin): {
                        typeUrl: string;
                        value: _10.MsgIncreasePositionMargin;
                    };
                    rewardsOptOut(value: _10.MsgRewardsOptOut): {
                        typeUrl: string;
                        value: _10.MsgRewardsOptOut;
                    };
                    adminUpdateBinaryOptionsMarket(value: _10.MsgAdminUpdateBinaryOptionsMarket): {
                        typeUrl: string;
                        value: _10.MsgAdminUpdateBinaryOptionsMarket;
                    };
                    reclaimLockedFunds(value: _10.MsgReclaimLockedFunds): {
                        typeUrl: string;
                        value: _10.MsgReclaimLockedFunds;
                    };
                    updateParams(value: _10.MsgUpdateParams): {
                        typeUrl: string;
                        value: _10.MsgUpdateParams;
                    };
                };
                fromJSON: {
                    deposit(value: any): {
                        typeUrl: string;
                        value: _10.MsgDeposit;
                    };
                    withdraw(value: any): {
                        typeUrl: string;
                        value: _10.MsgWithdraw;
                    };
                    instantSpotMarketLaunch(value: any): {
                        typeUrl: string;
                        value: _10.MsgInstantSpotMarketLaunch;
                    };
                    instantPerpetualMarketLaunch(value: any): {
                        typeUrl: string;
                        value: _10.MsgInstantPerpetualMarketLaunch;
                    };
                    instantExpiryFuturesMarketLaunch(value: any): {
                        typeUrl: string;
                        value: _10.MsgInstantExpiryFuturesMarketLaunch;
                    };
                    createSpotLimitOrder(value: any): {
                        typeUrl: string;
                        value: _10.MsgCreateSpotLimitOrder;
                    };
                    batchCreateSpotLimitOrders(value: any): {
                        typeUrl: string;
                        value: _10.MsgBatchCreateSpotLimitOrders;
                    };
                    createSpotMarketOrder(value: any): {
                        typeUrl: string;
                        value: _10.MsgCreateSpotMarketOrder;
                    };
                    cancelSpotOrder(value: any): {
                        typeUrl: string;
                        value: _10.MsgCancelSpotOrder;
                    };
                    batchCancelSpotOrders(value: any): {
                        typeUrl: string;
                        value: _10.MsgBatchCancelSpotOrders;
                    };
                    batchUpdateOrders(value: any): {
                        typeUrl: string;
                        value: _10.MsgBatchUpdateOrders;
                    };
                    privilegedExecuteContract(value: any): {
                        typeUrl: string;
                        value: _10.MsgPrivilegedExecuteContract;
                    };
                    createDerivativeLimitOrder(value: any): {
                        typeUrl: string;
                        value: _10.MsgCreateDerivativeLimitOrder;
                    };
                    batchCreateDerivativeLimitOrders(value: any): {
                        typeUrl: string;
                        value: _10.MsgBatchCreateDerivativeLimitOrders;
                    };
                    createDerivativeMarketOrder(value: any): {
                        typeUrl: string;
                        value: _10.MsgCreateDerivativeMarketOrder;
                    };
                    cancelDerivativeOrder(value: any): {
                        typeUrl: string;
                        value: _10.MsgCancelDerivativeOrder;
                    };
                    batchCancelDerivativeOrders(value: any): {
                        typeUrl: string;
                        value: _10.MsgBatchCancelDerivativeOrders;
                    };
                    instantBinaryOptionsMarketLaunch(value: any): {
                        typeUrl: string;
                        value: _10.MsgInstantBinaryOptionsMarketLaunch;
                    };
                    createBinaryOptionsLimitOrder(value: any): {
                        typeUrl: string;
                        value: _10.MsgCreateBinaryOptionsLimitOrder;
                    };
                    createBinaryOptionsMarketOrder(value: any): {
                        typeUrl: string;
                        value: _10.MsgCreateBinaryOptionsMarketOrder;
                    };
                    cancelBinaryOptionsOrder(value: any): {
                        typeUrl: string;
                        value: _10.MsgCancelBinaryOptionsOrder;
                    };
                    batchCancelBinaryOptionsOrders(value: any): {
                        typeUrl: string;
                        value: _10.MsgBatchCancelBinaryOptionsOrders;
                    };
                    subaccountTransfer(value: any): {
                        typeUrl: string;
                        value: _10.MsgSubaccountTransfer;
                    };
                    externalTransfer(value: any): {
                        typeUrl: string;
                        value: _10.MsgExternalTransfer;
                    };
                    liquidatePosition(value: any): {
                        typeUrl: string;
                        value: _10.MsgLiquidatePosition;
                    };
                    increasePositionMargin(value: any): {
                        typeUrl: string;
                        value: _10.MsgIncreasePositionMargin;
                    };
                    rewardsOptOut(value: any): {
                        typeUrl: string;
                        value: _10.MsgRewardsOptOut;
                    };
                    adminUpdateBinaryOptionsMarket(value: any): {
                        typeUrl: string;
                        value: _10.MsgAdminUpdateBinaryOptionsMarket;
                    };
                    reclaimLockedFunds(value: any): {
                        typeUrl: string;
                        value: _10.MsgReclaimLockedFunds;
                    };
                    updateParams(value: any): {
                        typeUrl: string;
                        value: _10.MsgUpdateParams;
                    };
                };
                fromPartial: {
                    deposit(value: _10.MsgDeposit): {
                        typeUrl: string;
                        value: _10.MsgDeposit;
                    };
                    withdraw(value: _10.MsgWithdraw): {
                        typeUrl: string;
                        value: _10.MsgWithdraw;
                    };
                    instantSpotMarketLaunch(value: _10.MsgInstantSpotMarketLaunch): {
                        typeUrl: string;
                        value: _10.MsgInstantSpotMarketLaunch;
                    };
                    instantPerpetualMarketLaunch(value: _10.MsgInstantPerpetualMarketLaunch): {
                        typeUrl: string;
                        value: _10.MsgInstantPerpetualMarketLaunch;
                    };
                    instantExpiryFuturesMarketLaunch(value: _10.MsgInstantExpiryFuturesMarketLaunch): {
                        typeUrl: string;
                        value: _10.MsgInstantExpiryFuturesMarketLaunch;
                    };
                    createSpotLimitOrder(value: _10.MsgCreateSpotLimitOrder): {
                        typeUrl: string;
                        value: _10.MsgCreateSpotLimitOrder;
                    };
                    batchCreateSpotLimitOrders(value: _10.MsgBatchCreateSpotLimitOrders): {
                        typeUrl: string;
                        value: _10.MsgBatchCreateSpotLimitOrders;
                    };
                    createSpotMarketOrder(value: _10.MsgCreateSpotMarketOrder): {
                        typeUrl: string;
                        value: _10.MsgCreateSpotMarketOrder;
                    };
                    cancelSpotOrder(value: _10.MsgCancelSpotOrder): {
                        typeUrl: string;
                        value: _10.MsgCancelSpotOrder;
                    };
                    batchCancelSpotOrders(value: _10.MsgBatchCancelSpotOrders): {
                        typeUrl: string;
                        value: _10.MsgBatchCancelSpotOrders;
                    };
                    batchUpdateOrders(value: _10.MsgBatchUpdateOrders): {
                        typeUrl: string;
                        value: _10.MsgBatchUpdateOrders;
                    };
                    privilegedExecuteContract(value: _10.MsgPrivilegedExecuteContract): {
                        typeUrl: string;
                        value: _10.MsgPrivilegedExecuteContract;
                    };
                    createDerivativeLimitOrder(value: _10.MsgCreateDerivativeLimitOrder): {
                        typeUrl: string;
                        value: _10.MsgCreateDerivativeLimitOrder;
                    };
                    batchCreateDerivativeLimitOrders(value: _10.MsgBatchCreateDerivativeLimitOrders): {
                        typeUrl: string;
                        value: _10.MsgBatchCreateDerivativeLimitOrders;
                    };
                    createDerivativeMarketOrder(value: _10.MsgCreateDerivativeMarketOrder): {
                        typeUrl: string;
                        value: _10.MsgCreateDerivativeMarketOrder;
                    };
                    cancelDerivativeOrder(value: _10.MsgCancelDerivativeOrder): {
                        typeUrl: string;
                        value: _10.MsgCancelDerivativeOrder;
                    };
                    batchCancelDerivativeOrders(value: _10.MsgBatchCancelDerivativeOrders): {
                        typeUrl: string;
                        value: _10.MsgBatchCancelDerivativeOrders;
                    };
                    instantBinaryOptionsMarketLaunch(value: _10.MsgInstantBinaryOptionsMarketLaunch): {
                        typeUrl: string;
                        value: _10.MsgInstantBinaryOptionsMarketLaunch;
                    };
                    createBinaryOptionsLimitOrder(value: _10.MsgCreateBinaryOptionsLimitOrder): {
                        typeUrl: string;
                        value: _10.MsgCreateBinaryOptionsLimitOrder;
                    };
                    createBinaryOptionsMarketOrder(value: _10.MsgCreateBinaryOptionsMarketOrder): {
                        typeUrl: string;
                        value: _10.MsgCreateBinaryOptionsMarketOrder;
                    };
                    cancelBinaryOptionsOrder(value: _10.MsgCancelBinaryOptionsOrder): {
                        typeUrl: string;
                        value: _10.MsgCancelBinaryOptionsOrder;
                    };
                    batchCancelBinaryOptionsOrders(value: _10.MsgBatchCancelBinaryOptionsOrders): {
                        typeUrl: string;
                        value: _10.MsgBatchCancelBinaryOptionsOrders;
                    };
                    subaccountTransfer(value: _10.MsgSubaccountTransfer): {
                        typeUrl: string;
                        value: _10.MsgSubaccountTransfer;
                    };
                    externalTransfer(value: _10.MsgExternalTransfer): {
                        typeUrl: string;
                        value: _10.MsgExternalTransfer;
                    };
                    liquidatePosition(value: _10.MsgLiquidatePosition): {
                        typeUrl: string;
                        value: _10.MsgLiquidatePosition;
                    };
                    increasePositionMargin(value: _10.MsgIncreasePositionMargin): {
                        typeUrl: string;
                        value: _10.MsgIncreasePositionMargin;
                    };
                    rewardsOptOut(value: _10.MsgRewardsOptOut): {
                        typeUrl: string;
                        value: _10.MsgRewardsOptOut;
                    };
                    adminUpdateBinaryOptionsMarket(value: _10.MsgAdminUpdateBinaryOptionsMarket): {
                        typeUrl: string;
                        value: _10.MsgAdminUpdateBinaryOptionsMarket;
                    };
                    reclaimLockedFunds(value: _10.MsgReclaimLockedFunds): {
                        typeUrl: string;
                        value: _10.MsgReclaimLockedFunds;
                    };
                    updateParams(value: _10.MsgUpdateParams): {
                        typeUrl: string;
                        value: _10.MsgUpdateParams;
                    };
                };
            };
            AminoConverter: {
                "/injective.exchange.v1beta1.MsgDeposit": {
                    aminoType: string;
                    toAmino: ({ sender, subaccountId, amount }: _10.MsgDeposit) => {
                        sender: string;
                        subaccount_id: string;
                        amount: {
                            denom: string;
                            amount: string;
                        };
                    };
                    fromAmino: ({ sender, subaccount_id, amount }: {
                        sender: string;
                        subaccount_id: string;
                        amount: {
                            denom: string;
                            amount: string;
                        };
                    }) => _10.MsgDeposit;
                };
                "/injective.exchange.v1beta1.MsgWithdraw": {
                    aminoType: string;
                    toAmino: ({ sender, subaccountId, amount }: _10.MsgWithdraw) => {
                        sender: string;
                        subaccount_id: string;
                        amount: {
                            denom: string;
                            amount: string;
                        };
                    };
                    fromAmino: ({ sender, subaccount_id, amount }: {
                        sender: string;
                        subaccount_id: string;
                        amount: {
                            denom: string;
                            amount: string;
                        };
                    }) => _10.MsgWithdraw;
                };
                "/injective.exchange.v1beta1.MsgInstantSpotMarketLaunch": {
                    aminoType: string;
                    toAmino: ({ sender, ticker, baseDenom, quoteDenom, minPriceTickSize, minQuantityTickSize }: _10.MsgInstantSpotMarketLaunch) => {
                        sender: string;
                        ticker: string;
                        base_denom: string;
                        quote_denom: string;
                        min_price_tick_size: string;
                        min_quantity_tick_size: string;
                    };
                    fromAmino: ({ sender, ticker, base_denom, quote_denom, min_price_tick_size, min_quantity_tick_size }: {
                        sender: string;
                        ticker: string;
                        base_denom: string;
                        quote_denom: string;
                        min_price_tick_size: string;
                        min_quantity_tick_size: string;
                    }) => _10.MsgInstantSpotMarketLaunch;
                };
                "/injective.exchange.v1beta1.MsgInstantPerpetualMarketLaunch": {
                    aminoType: string;
                    toAmino: ({ sender, ticker, quoteDenom, oracleBase, oracleQuote, oracleScaleFactor, oracleType, makerFeeRate, takerFeeRate, initialMarginRatio, maintenanceMarginRatio, minPriceTickSize, minQuantityTickSize }: _10.MsgInstantPerpetualMarketLaunch) => {
                        sender: string;
                        ticker: string;
                        quote_denom: string;
                        oracle_base: string;
                        oracle_quote: string;
                        oracle_scale_factor: number;
                        oracle_type: number;
                        maker_fee_rate: string;
                        taker_fee_rate: string;
                        initial_margin_ratio: string;
                        maintenance_margin_ratio: string;
                        min_price_tick_size: string;
                        min_quantity_tick_size: string;
                    };
                    fromAmino: ({ sender, ticker, quote_denom, oracle_base, oracle_quote, oracle_scale_factor, oracle_type, maker_fee_rate, taker_fee_rate, initial_margin_ratio, maintenance_margin_ratio, min_price_tick_size, min_quantity_tick_size }: {
                        sender: string;
                        ticker: string;
                        quote_denom: string;
                        oracle_base: string;
                        oracle_quote: string;
                        oracle_scale_factor: number;
                        oracle_type: number;
                        maker_fee_rate: string;
                        taker_fee_rate: string;
                        initial_margin_ratio: string;
                        maintenance_margin_ratio: string;
                        min_price_tick_size: string;
                        min_quantity_tick_size: string;
                    }) => _10.MsgInstantPerpetualMarketLaunch;
                };
                "/injective.exchange.v1beta1.MsgInstantExpiryFuturesMarketLaunch": {
                    aminoType: string;
                    toAmino: ({ sender, ticker, quoteDenom, oracleBase, oracleQuote, oracleType, oracleScaleFactor, expiry, makerFeeRate, takerFeeRate, initialMarginRatio, maintenanceMarginRatio, minPriceTickSize, minQuantityTickSize }: _10.MsgInstantExpiryFuturesMarketLaunch) => {
                        sender: string;
                        ticker: string;
                        quote_denom: string;
                        oracle_base: string;
                        oracle_quote: string;
                        oracle_type: number;
                        oracle_scale_factor: number;
                        expiry: string;
                        maker_fee_rate: string;
                        taker_fee_rate: string;
                        initial_margin_ratio: string;
                        maintenance_margin_ratio: string;
                        min_price_tick_size: string;
                        min_quantity_tick_size: string;
                    };
                    fromAmino: ({ sender, ticker, quote_denom, oracle_base, oracle_quote, oracle_type, oracle_scale_factor, expiry, maker_fee_rate, taker_fee_rate, initial_margin_ratio, maintenance_margin_ratio, min_price_tick_size, min_quantity_tick_size }: {
                        sender: string;
                        ticker: string;
                        quote_denom: string;
                        oracle_base: string;
                        oracle_quote: string;
                        oracle_type: number;
                        oracle_scale_factor: number;
                        expiry: string;
                        maker_fee_rate: string;
                        taker_fee_rate: string;
                        initial_margin_ratio: string;
                        maintenance_margin_ratio: string;
                        min_price_tick_size: string;
                        min_quantity_tick_size: string;
                    }) => _10.MsgInstantExpiryFuturesMarketLaunch;
                };
                "/injective.exchange.v1beta1.MsgCreateSpotLimitOrder": {
                    aminoType: string;
                    toAmino: ({ sender, order }: _10.MsgCreateSpotLimitOrder) => {
                        sender: string;
                        order: {
                            market_id: string;
                            order_info: {
                                subaccount_id: string;
                                fee_recipient: string;
                                price: string;
                                quantity: string;
                            };
                            order_type: number;
                            trigger_price: string;
                        };
                    };
                    fromAmino: ({ sender, order }: {
                        sender: string;
                        order: {
                            market_id: string;
                            order_info: {
                                subaccount_id: string;
                                fee_recipient: string;
                                price: string;
                                quantity: string;
                            };
                            order_type: number;
                            trigger_price: string;
                        };
                    }) => _10.MsgCreateSpotLimitOrder;
                };
                "/injective.exchange.v1beta1.MsgBatchCreateSpotLimitOrders": {
                    aminoType: string;
                    toAmino: ({ sender, orders }: _10.MsgBatchCreateSpotLimitOrders) => {
                        sender: string;
                        orders: {
                            market_id: string;
                            order_info: {
                                subaccount_id: string;
                                fee_recipient: string;
                                price: string;
                                quantity: string;
                            };
                            order_type: number;
                            trigger_price: string;
                        }[];
                    };
                    fromAmino: ({ sender, orders }: {
                        sender: string;
                        orders: {
                            market_id: string;
                            order_info: {
                                subaccount_id: string;
                                fee_recipient: string;
                                price: string;
                                quantity: string;
                            };
                            order_type: number;
                            trigger_price: string;
                        }[];
                    }) => _10.MsgBatchCreateSpotLimitOrders;
                };
                "/injective.exchange.v1beta1.MsgCreateSpotMarketOrder": {
                    aminoType: string;
                    toAmino: ({ sender, order }: _10.MsgCreateSpotMarketOrder) => {
                        sender: string;
                        order: {
                            market_id: string;
                            order_info: {
                                subaccount_id: string;
                                fee_recipient: string;
                                price: string;
                                quantity: string;
                            };
                            order_type: number;
                            trigger_price: string;
                        };
                    };
                    fromAmino: ({ sender, order }: {
                        sender: string;
                        order: {
                            market_id: string;
                            order_info: {
                                subaccount_id: string;
                                fee_recipient: string;
                                price: string;
                                quantity: string;
                            };
                            order_type: number;
                            trigger_price: string;
                        };
                    }) => _10.MsgCreateSpotMarketOrder;
                };
                "/injective.exchange.v1beta1.MsgCancelSpotOrder": {
                    aminoType: string;
                    toAmino: ({ sender, marketId, subaccountId, orderHash }: _10.MsgCancelSpotOrder) => {
                        sender: string;
                        market_id: string;
                        subaccount_id: string;
                        order_hash: string;
                    };
                    fromAmino: ({ sender, market_id, subaccount_id, order_hash }: {
                        sender: string;
                        market_id: string;
                        subaccount_id: string;
                        order_hash: string;
                    }) => _10.MsgCancelSpotOrder;
                };
                "/injective.exchange.v1beta1.MsgBatchCancelSpotOrders": {
                    aminoType: string;
                    toAmino: ({ sender, data }: _10.MsgBatchCancelSpotOrders) => {
                        sender: string;
                        data: {
                            market_id: string;
                            subaccount_id: string;
                            order_hash: string;
                            order_mask: number;
                        }[];
                    };
                    fromAmino: ({ sender, data }: {
                        sender: string;
                        data: {
                            market_id: string;
                            subaccount_id: string;
                            order_hash: string;
                            order_mask: number;
                        }[];
                    }) => _10.MsgBatchCancelSpotOrders;
                };
                "/injective.exchange.v1beta1.MsgBatchUpdateOrders": {
                    aminoType: string;
                    toAmino: ({ sender, subaccountId, spotMarketIdsToCancelAll, derivativeMarketIdsToCancelAll, spotOrdersToCancel, derivativeOrdersToCancel, spotOrdersToCreate, derivativeOrdersToCreate, binaryOptionsOrdersToCancel, binaryOptionsMarketIdsToCancelAll, binaryOptionsOrdersToCreate }: _10.MsgBatchUpdateOrders) => {
                        sender: string;
                        subaccount_id: string;
                        spot_market_ids_to_cancel_all: string[];
                        derivative_market_ids_to_cancel_all: string[];
                        spot_orders_to_cancel: {
                            market_id: string;
                            subaccount_id: string;
                            order_hash: string;
                            order_mask: number;
                        }[];
                        derivative_orders_to_cancel: {
                            market_id: string;
                            subaccount_id: string;
                            order_hash: string;
                            order_mask: number;
                        }[];
                        spot_orders_to_create: {
                            market_id: string;
                            order_info: {
                                subaccount_id: string;
                                fee_recipient: string;
                                price: string;
                                quantity: string;
                            };
                            order_type: number;
                            trigger_price: string;
                        }[];
                        derivative_orders_to_create: {
                            market_id: string;
                            order_info: {
                                subaccount_id: string;
                                fee_recipient: string;
                                price: string;
                                quantity: string;
                            };
                            order_type: number;
                            margin: string;
                            trigger_price: string;
                        }[];
                        binary_options_orders_to_cancel: {
                            market_id: string;
                            subaccount_id: string;
                            order_hash: string;
                            order_mask: number;
                        }[];
                        binary_options_market_ids_to_cancel_all: string[];
                        binary_options_orders_to_create: {
                            market_id: string;
                            order_info: {
                                subaccount_id: string;
                                fee_recipient: string;
                                price: string;
                                quantity: string;
                            };
                            order_type: number;
                            margin: string;
                            trigger_price: string;
                        }[];
                    };
                    fromAmino: ({ sender, subaccount_id, spot_market_ids_to_cancel_all, derivative_market_ids_to_cancel_all, spot_orders_to_cancel, derivative_orders_to_cancel, spot_orders_to_create, derivative_orders_to_create, binary_options_orders_to_cancel, binary_options_market_ids_to_cancel_all, binary_options_orders_to_create }: {
                        sender: string;
                        subaccount_id: string;
                        spot_market_ids_to_cancel_all: string[];
                        derivative_market_ids_to_cancel_all: string[];
                        spot_orders_to_cancel: {
                            market_id: string;
                            subaccount_id: string;
                            order_hash: string;
                            order_mask: number;
                        }[];
                        derivative_orders_to_cancel: {
                            market_id: string;
                            subaccount_id: string;
                            order_hash: string;
                            order_mask: number;
                        }[];
                        spot_orders_to_create: {
                            market_id: string;
                            order_info: {
                                subaccount_id: string;
                                fee_recipient: string;
                                price: string;
                                quantity: string;
                            };
                            order_type: number;
                            trigger_price: string;
                        }[];
                        derivative_orders_to_create: {
                            market_id: string;
                            order_info: {
                                subaccount_id: string;
                                fee_recipient: string;
                                price: string;
                                quantity: string;
                            };
                            order_type: number;
                            margin: string;
                            trigger_price: string;
                        }[];
                        binary_options_orders_to_cancel: {
                            market_id: string;
                            subaccount_id: string;
                            order_hash: string;
                            order_mask: number;
                        }[];
                        binary_options_market_ids_to_cancel_all: string[];
                        binary_options_orders_to_create: {
                            market_id: string;
                            order_info: {
                                subaccount_id: string;
                                fee_recipient: string;
                                price: string;
                                quantity: string;
                            };
                            order_type: number;
                            margin: string;
                            trigger_price: string;
                        }[];
                    }) => _10.MsgBatchUpdateOrders;
                };
                "/injective.exchange.v1beta1.MsgPrivilegedExecuteContract": {
                    aminoType: string;
                    toAmino: ({ sender, funds, contractAddress, data }: _10.MsgPrivilegedExecuteContract) => {
                        sender: string;
                        funds: string;
                        contract_address: string;
                        data: string;
                    };
                    fromAmino: ({ sender, funds, contract_address, data }: {
                        sender: string;
                        funds: string;
                        contract_address: string;
                        data: string;
                    }) => _10.MsgPrivilegedExecuteContract;
                };
                "/injective.exchange.v1beta1.MsgCreateDerivativeLimitOrder": {
                    aminoType: string;
                    toAmino: ({ sender, order }: _10.MsgCreateDerivativeLimitOrder) => {
                        sender: string;
                        order: {
                            market_id: string;
                            order_info: {
                                subaccount_id: string;
                                fee_recipient: string;
                                price: string;
                                quantity: string;
                            };
                            order_type: number;
                            margin: string;
                            trigger_price: string;
                        };
                    };
                    fromAmino: ({ sender, order }: {
                        sender: string;
                        order: {
                            market_id: string;
                            order_info: {
                                subaccount_id: string;
                                fee_recipient: string;
                                price: string;
                                quantity: string;
                            };
                            order_type: number;
                            margin: string;
                            trigger_price: string;
                        };
                    }) => _10.MsgCreateDerivativeLimitOrder;
                };
                "/injective.exchange.v1beta1.MsgBatchCreateDerivativeLimitOrders": {
                    aminoType: string;
                    toAmino: ({ sender, orders }: _10.MsgBatchCreateDerivativeLimitOrders) => {
                        sender: string;
                        orders: {
                            market_id: string;
                            order_info: {
                                subaccount_id: string;
                                fee_recipient: string;
                                price: string;
                                quantity: string;
                            };
                            order_type: number;
                            margin: string;
                            trigger_price: string;
                        }[];
                    };
                    fromAmino: ({ sender, orders }: {
                        sender: string;
                        orders: {
                            market_id: string;
                            order_info: {
                                subaccount_id: string;
                                fee_recipient: string;
                                price: string;
                                quantity: string;
                            };
                            order_type: number;
                            margin: string;
                            trigger_price: string;
                        }[];
                    }) => _10.MsgBatchCreateDerivativeLimitOrders;
                };
                "/injective.exchange.v1beta1.MsgCreateDerivativeMarketOrder": {
                    aminoType: string;
                    toAmino: ({ sender, order }: _10.MsgCreateDerivativeMarketOrder) => {
                        sender: string;
                        order: {
                            market_id: string;
                            order_info: {
                                subaccount_id: string;
                                fee_recipient: string;
                                price: string;
                                quantity: string;
                            };
                            order_type: number;
                            margin: string;
                            trigger_price: string;
                        };
                    };
                    fromAmino: ({ sender, order }: {
                        sender: string;
                        order: {
                            market_id: string;
                            order_info: {
                                subaccount_id: string;
                                fee_recipient: string;
                                price: string;
                                quantity: string;
                            };
                            order_type: number;
                            margin: string;
                            trigger_price: string;
                        };
                    }) => _10.MsgCreateDerivativeMarketOrder;
                };
                "/injective.exchange.v1beta1.MsgCancelDerivativeOrder": {
                    aminoType: string;
                    toAmino: ({ sender, marketId, subaccountId, orderHash, orderMask }: _10.MsgCancelDerivativeOrder) => {
                        sender: string;
                        market_id: string;
                        subaccount_id: string;
                        order_hash: string;
                        order_mask: number;
                    };
                    fromAmino: ({ sender, market_id, subaccount_id, order_hash, order_mask }: {
                        sender: string;
                        market_id: string;
                        subaccount_id: string;
                        order_hash: string;
                        order_mask: number;
                    }) => _10.MsgCancelDerivativeOrder;
                };
                "/injective.exchange.v1beta1.MsgBatchCancelDerivativeOrders": {
                    aminoType: string;
                    toAmino: ({ sender, data }: _10.MsgBatchCancelDerivativeOrders) => {
                        sender: string;
                        data: {
                            market_id: string;
                            subaccount_id: string;
                            order_hash: string;
                            order_mask: number;
                        }[];
                    };
                    fromAmino: ({ sender, data }: {
                        sender: string;
                        data: {
                            market_id: string;
                            subaccount_id: string;
                            order_hash: string;
                            order_mask: number;
                        }[];
                    }) => _10.MsgBatchCancelDerivativeOrders;
                };
                "/injective.exchange.v1beta1.MsgInstantBinaryOptionsMarketLaunch": {
                    aminoType: string;
                    toAmino: ({ sender, ticker, oracleSymbol, oracleProvider, oracleType, oracleScaleFactor, makerFeeRate, takerFeeRate, expirationTimestamp, settlementTimestamp, admin, quoteDenom, minPriceTickSize, minQuantityTickSize }: _10.MsgInstantBinaryOptionsMarketLaunch) => {
                        sender: string;
                        ticker: string;
                        oracle_symbol: string;
                        oracle_provider: string;
                        oracle_type: number;
                        oracle_scale_factor: number;
                        maker_fee_rate: string;
                        taker_fee_rate: string;
                        expiration_timestamp: string;
                        settlement_timestamp: string;
                        admin: string;
                        quote_denom: string;
                        min_price_tick_size: string;
                        min_quantity_tick_size: string;
                    };
                    fromAmino: ({ sender, ticker, oracle_symbol, oracle_provider, oracle_type, oracle_scale_factor, maker_fee_rate, taker_fee_rate, expiration_timestamp, settlement_timestamp, admin, quote_denom, min_price_tick_size, min_quantity_tick_size }: {
                        sender: string;
                        ticker: string;
                        oracle_symbol: string;
                        oracle_provider: string;
                        oracle_type: number;
                        oracle_scale_factor: number;
                        maker_fee_rate: string;
                        taker_fee_rate: string;
                        expiration_timestamp: string;
                        settlement_timestamp: string;
                        admin: string;
                        quote_denom: string;
                        min_price_tick_size: string;
                        min_quantity_tick_size: string;
                    }) => _10.MsgInstantBinaryOptionsMarketLaunch;
                };
                "/injective.exchange.v1beta1.MsgCreateBinaryOptionsLimitOrder": {
                    aminoType: string;
                    toAmino: ({ sender, order }: _10.MsgCreateBinaryOptionsLimitOrder) => {
                        sender: string;
                        order: {
                            market_id: string;
                            order_info: {
                                subaccount_id: string;
                                fee_recipient: string;
                                price: string;
                                quantity: string;
                            };
                            order_type: number;
                            margin: string;
                            trigger_price: string;
                        };
                    };
                    fromAmino: ({ sender, order }: {
                        sender: string;
                        order: {
                            market_id: string;
                            order_info: {
                                subaccount_id: string;
                                fee_recipient: string;
                                price: string;
                                quantity: string;
                            };
                            order_type: number;
                            margin: string;
                            trigger_price: string;
                        };
                    }) => _10.MsgCreateBinaryOptionsLimitOrder;
                };
                "/injective.exchange.v1beta1.MsgCreateBinaryOptionsMarketOrder": {
                    aminoType: string;
                    toAmino: ({ sender, order }: _10.MsgCreateBinaryOptionsMarketOrder) => {
                        sender: string;
                        order: {
                            market_id: string;
                            order_info: {
                                subaccount_id: string;
                                fee_recipient: string;
                                price: string;
                                quantity: string;
                            };
                            order_type: number;
                            margin: string;
                            trigger_price: string;
                        };
                    };
                    fromAmino: ({ sender, order }: {
                        sender: string;
                        order: {
                            market_id: string;
                            order_info: {
                                subaccount_id: string;
                                fee_recipient: string;
                                price: string;
                                quantity: string;
                            };
                            order_type: number;
                            margin: string;
                            trigger_price: string;
                        };
                    }) => _10.MsgCreateBinaryOptionsMarketOrder;
                };
                "/injective.exchange.v1beta1.MsgCancelBinaryOptionsOrder": {
                    aminoType: string;
                    toAmino: ({ sender, marketId, subaccountId, orderHash, orderMask }: _10.MsgCancelBinaryOptionsOrder) => {
                        sender: string;
                        market_id: string;
                        subaccount_id: string;
                        order_hash: string;
                        order_mask: number;
                    };
                    fromAmino: ({ sender, market_id, subaccount_id, order_hash, order_mask }: {
                        sender: string;
                        market_id: string;
                        subaccount_id: string;
                        order_hash: string;
                        order_mask: number;
                    }) => _10.MsgCancelBinaryOptionsOrder;
                };
                "/injective.exchange.v1beta1.MsgBatchCancelBinaryOptionsOrders": {
                    aminoType: string;
                    toAmino: ({ sender, data }: _10.MsgBatchCancelBinaryOptionsOrders) => {
                        sender: string;
                        data: {
                            market_id: string;
                            subaccount_id: string;
                            order_hash: string;
                            order_mask: number;
                        }[];
                    };
                    fromAmino: ({ sender, data }: {
                        sender: string;
                        data: {
                            market_id: string;
                            subaccount_id: string;
                            order_hash: string;
                            order_mask: number;
                        }[];
                    }) => _10.MsgBatchCancelBinaryOptionsOrders;
                };
                "/injective.exchange.v1beta1.MsgSubaccountTransfer": {
                    aminoType: string;
                    toAmino: ({ sender, sourceSubaccountId, destinationSubaccountId, amount }: _10.MsgSubaccountTransfer) => {
                        sender: string;
                        source_subaccount_id: string;
                        destination_subaccount_id: string;
                        amount: {
                            denom: string;
                            amount: string;
                        };
                    };
                    fromAmino: ({ sender, source_subaccount_id, destination_subaccount_id, amount }: {
                        sender: string;
                        source_subaccount_id: string;
                        destination_subaccount_id: string;
                        amount: {
                            denom: string;
                            amount: string;
                        };
                    }) => _10.MsgSubaccountTransfer;
                };
                "/injective.exchange.v1beta1.MsgExternalTransfer": {
                    aminoType: string;
                    toAmino: ({ sender, sourceSubaccountId, destinationSubaccountId, amount }: _10.MsgExternalTransfer) => {
                        sender: string;
                        source_subaccount_id: string;
                        destination_subaccount_id: string;
                        amount: {
                            denom: string;
                            amount: string;
                        };
                    };
                    fromAmino: ({ sender, source_subaccount_id, destination_subaccount_id, amount }: {
                        sender: string;
                        source_subaccount_id: string;
                        destination_subaccount_id: string;
                        amount: {
                            denom: string;
                            amount: string;
                        };
                    }) => _10.MsgExternalTransfer;
                };
                "/injective.exchange.v1beta1.MsgLiquidatePosition": {
                    aminoType: string;
                    toAmino: ({ sender, subaccountId, marketId, order }: _10.MsgLiquidatePosition) => {
                        sender: string;
                        subaccount_id: string;
                        market_id: string;
                        order: {
                            market_id: string;
                            order_info: {
                                subaccount_id: string;
                                fee_recipient: string;
                                price: string;
                                quantity: string;
                            };
                            order_type: number;
                            margin: string;
                            trigger_price: string;
                        };
                    };
                    fromAmino: ({ sender, subaccount_id, market_id, order }: {
                        sender: string;
                        subaccount_id: string;
                        market_id: string;
                        order: {
                            market_id: string;
                            order_info: {
                                subaccount_id: string;
                                fee_recipient: string;
                                price: string;
                                quantity: string;
                            };
                            order_type: number;
                            margin: string;
                            trigger_price: string;
                        };
                    }) => _10.MsgLiquidatePosition;
                };
                "/injective.exchange.v1beta1.MsgIncreasePositionMargin": {
                    aminoType: string;
                    toAmino: ({ sender, sourceSubaccountId, destinationSubaccountId, marketId, amount }: _10.MsgIncreasePositionMargin) => {
                        sender: string;
                        source_subaccount_id: string;
                        destination_subaccount_id: string;
                        market_id: string;
                        amount: string;
                    };
                    fromAmino: ({ sender, source_subaccount_id, destination_subaccount_id, market_id, amount }: {
                        sender: string;
                        source_subaccount_id: string;
                        destination_subaccount_id: string;
                        market_id: string;
                        amount: string;
                    }) => _10.MsgIncreasePositionMargin;
                };
                "/injective.exchange.v1beta1.MsgRewardsOptOut": {
                    aminoType: string;
                    toAmino: ({ sender }: _10.MsgRewardsOptOut) => {
                        sender: string;
                    };
                    fromAmino: ({ sender }: {
                        sender: string;
                    }) => _10.MsgRewardsOptOut;
                };
                "/injective.exchange.v1beta1.MsgAdminUpdateBinaryOptionsMarket": {
                    aminoType: string;
                    toAmino: ({ sender, marketId, settlementPrice, expirationTimestamp, settlementTimestamp, status }: _10.MsgAdminUpdateBinaryOptionsMarket) => {
                        sender: string;
                        market_id: string;
                        settlement_price: string;
                        expiration_timestamp: string;
                        settlement_timestamp: string;
                        status: number;
                    };
                    fromAmino: ({ sender, market_id, settlement_price, expiration_timestamp, settlement_timestamp, status }: {
                        sender: string;
                        market_id: string;
                        settlement_price: string;
                        expiration_timestamp: string;
                        settlement_timestamp: string;
                        status: number;
                    }) => _10.MsgAdminUpdateBinaryOptionsMarket;
                };
                "/injective.exchange.v1beta1.MsgReclaimLockedFunds": {
                    aminoType: string;
                    toAmino: ({ sender, lockedAccountPubKey, signature }: _10.MsgReclaimLockedFunds) => {
                        sender: string;
                        lockedAccountPubKey: Uint8Array;
                        signature: Uint8Array;
                    };
                    fromAmino: ({ sender, lockedAccountPubKey, signature }: {
                        sender: string;
                        lockedAccountPubKey: Uint8Array;
                        signature: Uint8Array;
                    }) => _10.MsgReclaimLockedFunds;
                };
                "/injective.exchange.v1beta1.MsgUpdateParams": {
                    aminoType: string;
                    toAmino: ({ authority, params }: _10.MsgUpdateParams) => {
                        authority: string;
                        params: {
                            community_tax: string;
                            base_proposer_reward: string;
                            bonus_proposer_reward: string;
                            withdraw_addr_enabled: boolean;
                        };
                    };
                    fromAmino: ({ authority, params }: {
                        authority: string;
                        params: {
                            community_tax: string;
                            base_proposer_reward: string;
                            bonus_proposer_reward: string;
                            withdraw_addr_enabled: boolean;
                        };
                    }) => _10.MsgUpdateParams;
                };
            };
            exchangeTypeFromJSON(object: any): _10.ExchangeType;
            exchangeTypeToJSON(object: _10.ExchangeType): string;
            ExchangeType: typeof _10.ExchangeType;
            ExchangeTypeSDKType: typeof _10.ExchangeType;
            MsgUpdateParams: {
                encode(message: _10.MsgUpdateParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _10.MsgUpdateParams;
                fromPartial(object: Partial<_10.MsgUpdateParams>): _10.MsgUpdateParams;
            };
            MsgUpdateParamsResponse: {
                encode(_: _10.MsgUpdateParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _10.MsgUpdateParamsResponse;
                fromPartial(_: Partial<_10.MsgUpdateParamsResponse>): _10.MsgUpdateParamsResponse;
            };
            MsgDeposit: {
                encode(message: _10.MsgDeposit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _10.MsgDeposit;
                fromPartial(object: Partial<_10.MsgDeposit>): _10.MsgDeposit;
            };
            MsgDepositResponse: {
                encode(_: _10.MsgDepositResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _10.MsgDepositResponse;
                fromPartial(_: Partial<_10.MsgDepositResponse>): _10.MsgDepositResponse;
            };
            MsgWithdraw: {
                encode(message: _10.MsgWithdraw, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _10.MsgWithdraw;
                fromPartial(object: Partial<_10.MsgWithdraw>): _10.MsgWithdraw;
            };
            MsgWithdrawResponse: {
                encode(_: _10.MsgWithdrawResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _10.MsgWithdrawResponse;
                fromPartial(_: Partial<_10.MsgWithdrawResponse>): _10.MsgWithdrawResponse;
            };
            MsgCreateSpotLimitOrder: {
                encode(message: _10.MsgCreateSpotLimitOrder, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _10.MsgCreateSpotLimitOrder;
                fromPartial(object: Partial<_10.MsgCreateSpotLimitOrder>): _10.MsgCreateSpotLimitOrder;
            };
            MsgCreateSpotLimitOrderResponse: {
                encode(message: _10.MsgCreateSpotLimitOrderResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _10.MsgCreateSpotLimitOrderResponse;
                fromPartial(object: Partial<_10.MsgCreateSpotLimitOrderResponse>): _10.MsgCreateSpotLimitOrderResponse;
            };
            MsgBatchCreateSpotLimitOrders: {
                encode(message: _10.MsgBatchCreateSpotLimitOrders, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _10.MsgBatchCreateSpotLimitOrders;
                fromPartial(object: Partial<_10.MsgBatchCreateSpotLimitOrders>): _10.MsgBatchCreateSpotLimitOrders;
            };
            MsgBatchCreateSpotLimitOrdersResponse: {
                encode(message: _10.MsgBatchCreateSpotLimitOrdersResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _10.MsgBatchCreateSpotLimitOrdersResponse;
                fromPartial(object: Partial<_10.MsgBatchCreateSpotLimitOrdersResponse>): _10.MsgBatchCreateSpotLimitOrdersResponse;
            };
            MsgInstantSpotMarketLaunch: {
                encode(message: _10.MsgInstantSpotMarketLaunch, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _10.MsgInstantSpotMarketLaunch;
                fromPartial(object: Partial<_10.MsgInstantSpotMarketLaunch>): _10.MsgInstantSpotMarketLaunch;
            };
            MsgInstantSpotMarketLaunchResponse: {
                encode(_: _10.MsgInstantSpotMarketLaunchResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _10.MsgInstantSpotMarketLaunchResponse;
                fromPartial(_: Partial<_10.MsgInstantSpotMarketLaunchResponse>): _10.MsgInstantSpotMarketLaunchResponse;
            };
            MsgInstantPerpetualMarketLaunch: {
                encode(message: _10.MsgInstantPerpetualMarketLaunch, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _10.MsgInstantPerpetualMarketLaunch;
                fromPartial(object: Partial<_10.MsgInstantPerpetualMarketLaunch>): _10.MsgInstantPerpetualMarketLaunch;
            };
            MsgInstantPerpetualMarketLaunchResponse: {
                encode(_: _10.MsgInstantPerpetualMarketLaunchResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _10.MsgInstantPerpetualMarketLaunchResponse;
                fromPartial(_: Partial<_10.MsgInstantPerpetualMarketLaunchResponse>): _10.MsgInstantPerpetualMarketLaunchResponse;
            };
            MsgInstantBinaryOptionsMarketLaunch: {
                encode(message: _10.MsgInstantBinaryOptionsMarketLaunch, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _10.MsgInstantBinaryOptionsMarketLaunch;
                fromPartial(object: Partial<_10.MsgInstantBinaryOptionsMarketLaunch>): _10.MsgInstantBinaryOptionsMarketLaunch;
            };
            MsgInstantBinaryOptionsMarketLaunchResponse: {
                encode(_: _10.MsgInstantBinaryOptionsMarketLaunchResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _10.MsgInstantBinaryOptionsMarketLaunchResponse;
                fromPartial(_: Partial<_10.MsgInstantBinaryOptionsMarketLaunchResponse>): _10.MsgInstantBinaryOptionsMarketLaunchResponse;
            };
            MsgInstantExpiryFuturesMarketLaunch: {
                encode(message: _10.MsgInstantExpiryFuturesMarketLaunch, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _10.MsgInstantExpiryFuturesMarketLaunch;
                fromPartial(object: Partial<_10.MsgInstantExpiryFuturesMarketLaunch>): _10.MsgInstantExpiryFuturesMarketLaunch;
            };
            MsgInstantExpiryFuturesMarketLaunchResponse: {
                encode(_: _10.MsgInstantExpiryFuturesMarketLaunchResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _10.MsgInstantExpiryFuturesMarketLaunchResponse;
                fromPartial(_: Partial<_10.MsgInstantExpiryFuturesMarketLaunchResponse>): _10.MsgInstantExpiryFuturesMarketLaunchResponse;
            };
            MsgCreateSpotMarketOrder: {
                encode(message: _10.MsgCreateSpotMarketOrder, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _10.MsgCreateSpotMarketOrder;
                fromPartial(object: Partial<_10.MsgCreateSpotMarketOrder>): _10.MsgCreateSpotMarketOrder;
            };
            MsgCreateSpotMarketOrderResponse: {
                encode(message: _10.MsgCreateSpotMarketOrderResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _10.MsgCreateSpotMarketOrderResponse;
                fromPartial(object: Partial<_10.MsgCreateSpotMarketOrderResponse>): _10.MsgCreateSpotMarketOrderResponse;
            };
            SpotMarketOrderResults: {
                encode(message: _10.SpotMarketOrderResults, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _10.SpotMarketOrderResults;
                fromPartial(object: Partial<_10.SpotMarketOrderResults>): _10.SpotMarketOrderResults;
            };
            MsgCreateDerivativeLimitOrder: {
                encode(message: _10.MsgCreateDerivativeLimitOrder, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _10.MsgCreateDerivativeLimitOrder;
                fromPartial(object: Partial<_10.MsgCreateDerivativeLimitOrder>): _10.MsgCreateDerivativeLimitOrder;
            };
            MsgCreateDerivativeLimitOrderResponse: {
                encode(message: _10.MsgCreateDerivativeLimitOrderResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _10.MsgCreateDerivativeLimitOrderResponse;
                fromPartial(object: Partial<_10.MsgCreateDerivativeLimitOrderResponse>): _10.MsgCreateDerivativeLimitOrderResponse;
            };
            MsgCreateBinaryOptionsLimitOrder: {
                encode(message: _10.MsgCreateBinaryOptionsLimitOrder, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _10.MsgCreateBinaryOptionsLimitOrder;
                fromPartial(object: Partial<_10.MsgCreateBinaryOptionsLimitOrder>): _10.MsgCreateBinaryOptionsLimitOrder;
            };
            MsgCreateBinaryOptionsLimitOrderResponse: {
                encode(message: _10.MsgCreateBinaryOptionsLimitOrderResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _10.MsgCreateBinaryOptionsLimitOrderResponse;
                fromPartial(object: Partial<_10.MsgCreateBinaryOptionsLimitOrderResponse>): _10.MsgCreateBinaryOptionsLimitOrderResponse;
            };
            MsgBatchCreateDerivativeLimitOrders: {
                encode(message: _10.MsgBatchCreateDerivativeLimitOrders, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _10.MsgBatchCreateDerivativeLimitOrders;
                fromPartial(object: Partial<_10.MsgBatchCreateDerivativeLimitOrders>): _10.MsgBatchCreateDerivativeLimitOrders;
            };
            MsgBatchCreateDerivativeLimitOrdersResponse: {
                encode(message: _10.MsgBatchCreateDerivativeLimitOrdersResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _10.MsgBatchCreateDerivativeLimitOrdersResponse;
                fromPartial(object: Partial<_10.MsgBatchCreateDerivativeLimitOrdersResponse>): _10.MsgBatchCreateDerivativeLimitOrdersResponse;
            };
            MsgCancelSpotOrder: {
                encode(message: _10.MsgCancelSpotOrder, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _10.MsgCancelSpotOrder;
                fromPartial(object: Partial<_10.MsgCancelSpotOrder>): _10.MsgCancelSpotOrder;
            };
            MsgCancelSpotOrderResponse: {
                encode(_: _10.MsgCancelSpotOrderResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _10.MsgCancelSpotOrderResponse;
                fromPartial(_: Partial<_10.MsgCancelSpotOrderResponse>): _10.MsgCancelSpotOrderResponse;
            };
            MsgBatchCancelSpotOrders: {
                encode(message: _10.MsgBatchCancelSpotOrders, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _10.MsgBatchCancelSpotOrders;
                fromPartial(object: Partial<_10.MsgBatchCancelSpotOrders>): _10.MsgBatchCancelSpotOrders;
            };
            MsgBatchCancelSpotOrdersResponse: {
                encode(message: _10.MsgBatchCancelSpotOrdersResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _10.MsgBatchCancelSpotOrdersResponse;
                fromPartial(object: Partial<_10.MsgBatchCancelSpotOrdersResponse>): _10.MsgBatchCancelSpotOrdersResponse;
            };
            MsgBatchCancelBinaryOptionsOrders: {
                encode(message: _10.MsgBatchCancelBinaryOptionsOrders, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _10.MsgBatchCancelBinaryOptionsOrders;
                fromPartial(object: Partial<_10.MsgBatchCancelBinaryOptionsOrders>): _10.MsgBatchCancelBinaryOptionsOrders;
            };
            MsgBatchCancelBinaryOptionsOrdersResponse: {
                encode(message: _10.MsgBatchCancelBinaryOptionsOrdersResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _10.MsgBatchCancelBinaryOptionsOrdersResponse;
                fromPartial(object: Partial<_10.MsgBatchCancelBinaryOptionsOrdersResponse>): _10.MsgBatchCancelBinaryOptionsOrdersResponse;
            };
            MsgBatchUpdateOrders: {
                encode(message: _10.MsgBatchUpdateOrders, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _10.MsgBatchUpdateOrders;
                fromPartial(object: Partial<_10.MsgBatchUpdateOrders>): _10.MsgBatchUpdateOrders;
            };
            MsgBatchUpdateOrdersResponse: {
                encode(message: _10.MsgBatchUpdateOrdersResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _10.MsgBatchUpdateOrdersResponse;
                fromPartial(object: Partial<_10.MsgBatchUpdateOrdersResponse>): _10.MsgBatchUpdateOrdersResponse;
            };
            MsgCreateDerivativeMarketOrder: {
                encode(message: _10.MsgCreateDerivativeMarketOrder, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _10.MsgCreateDerivativeMarketOrder;
                fromPartial(object: Partial<_10.MsgCreateDerivativeMarketOrder>): _10.MsgCreateDerivativeMarketOrder;
            };
            MsgCreateDerivativeMarketOrderResponse: {
                encode(message: _10.MsgCreateDerivativeMarketOrderResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _10.MsgCreateDerivativeMarketOrderResponse;
                fromPartial(object: Partial<_10.MsgCreateDerivativeMarketOrderResponse>): _10.MsgCreateDerivativeMarketOrderResponse;
            };
            DerivativeMarketOrderResults: {
                encode(message: _10.DerivativeMarketOrderResults, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _10.DerivativeMarketOrderResults;
                fromPartial(object: Partial<_10.DerivativeMarketOrderResults>): _10.DerivativeMarketOrderResults;
            };
            MsgCreateBinaryOptionsMarketOrder: {
                encode(message: _10.MsgCreateBinaryOptionsMarketOrder, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _10.MsgCreateBinaryOptionsMarketOrder;
                fromPartial(object: Partial<_10.MsgCreateBinaryOptionsMarketOrder>): _10.MsgCreateBinaryOptionsMarketOrder;
            };
            MsgCreateBinaryOptionsMarketOrderResponse: {
                encode(message: _10.MsgCreateBinaryOptionsMarketOrderResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _10.MsgCreateBinaryOptionsMarketOrderResponse;
                fromPartial(object: Partial<_10.MsgCreateBinaryOptionsMarketOrderResponse>): _10.MsgCreateBinaryOptionsMarketOrderResponse;
            };
            MsgCancelDerivativeOrder: {
                encode(message: _10.MsgCancelDerivativeOrder, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _10.MsgCancelDerivativeOrder;
                fromPartial(object: Partial<_10.MsgCancelDerivativeOrder>): _10.MsgCancelDerivativeOrder;
            };
            MsgCancelDerivativeOrderResponse: {
                encode(_: _10.MsgCancelDerivativeOrderResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _10.MsgCancelDerivativeOrderResponse;
                fromPartial(_: Partial<_10.MsgCancelDerivativeOrderResponse>): _10.MsgCancelDerivativeOrderResponse;
            };
            MsgCancelBinaryOptionsOrder: {
                encode(message: _10.MsgCancelBinaryOptionsOrder, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _10.MsgCancelBinaryOptionsOrder;
                fromPartial(object: Partial<_10.MsgCancelBinaryOptionsOrder>): _10.MsgCancelBinaryOptionsOrder;
            };
            MsgCancelBinaryOptionsOrderResponse: {
                encode(_: _10.MsgCancelBinaryOptionsOrderResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _10.MsgCancelBinaryOptionsOrderResponse;
                fromPartial(_: Partial<_10.MsgCancelBinaryOptionsOrderResponse>): _10.MsgCancelBinaryOptionsOrderResponse;
            };
            OrderData: {
                encode(message: _10.OrderData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _10.OrderData;
                fromPartial(object: Partial<_10.OrderData>): _10.OrderData;
            };
            MsgBatchCancelDerivativeOrders: {
                encode(message: _10.MsgBatchCancelDerivativeOrders, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _10.MsgBatchCancelDerivativeOrders;
                fromPartial(object: Partial<_10.MsgBatchCancelDerivativeOrders>): _10.MsgBatchCancelDerivativeOrders;
            };
            MsgBatchCancelDerivativeOrdersResponse: {
                encode(message: _10.MsgBatchCancelDerivativeOrdersResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _10.MsgBatchCancelDerivativeOrdersResponse;
                fromPartial(object: Partial<_10.MsgBatchCancelDerivativeOrdersResponse>): _10.MsgBatchCancelDerivativeOrdersResponse;
            };
            MsgSubaccountTransfer: {
                encode(message: _10.MsgSubaccountTransfer, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _10.MsgSubaccountTransfer;
                fromPartial(object: Partial<_10.MsgSubaccountTransfer>): _10.MsgSubaccountTransfer;
            };
            MsgSubaccountTransferResponse: {
                encode(_: _10.MsgSubaccountTransferResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _10.MsgSubaccountTransferResponse;
                fromPartial(_: Partial<_10.MsgSubaccountTransferResponse>): _10.MsgSubaccountTransferResponse;
            };
            MsgExternalTransfer: {
                encode(message: _10.MsgExternalTransfer, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _10.MsgExternalTransfer;
                fromPartial(object: Partial<_10.MsgExternalTransfer>): _10.MsgExternalTransfer;
            };
            MsgExternalTransferResponse: {
                encode(_: _10.MsgExternalTransferResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _10.MsgExternalTransferResponse;
                fromPartial(_: Partial<_10.MsgExternalTransferResponse>): _10.MsgExternalTransferResponse;
            };
            MsgLiquidatePosition: {
                encode(message: _10.MsgLiquidatePosition, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _10.MsgLiquidatePosition;
                fromPartial(object: Partial<_10.MsgLiquidatePosition>): _10.MsgLiquidatePosition;
            };
            MsgLiquidatePositionResponse: {
                encode(_: _10.MsgLiquidatePositionResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _10.MsgLiquidatePositionResponse;
                fromPartial(_: Partial<_10.MsgLiquidatePositionResponse>): _10.MsgLiquidatePositionResponse;
            };
            MsgIncreasePositionMargin: {
                encode(message: _10.MsgIncreasePositionMargin, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _10.MsgIncreasePositionMargin;
                fromPartial(object: Partial<_10.MsgIncreasePositionMargin>): _10.MsgIncreasePositionMargin;
            };
            MsgIncreasePositionMarginResponse: {
                encode(_: _10.MsgIncreasePositionMarginResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _10.MsgIncreasePositionMarginResponse;
                fromPartial(_: Partial<_10.MsgIncreasePositionMarginResponse>): _10.MsgIncreasePositionMarginResponse;
            };
            MsgPrivilegedExecuteContract: {
                encode(message: _10.MsgPrivilegedExecuteContract, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _10.MsgPrivilegedExecuteContract;
                fromPartial(object: Partial<_10.MsgPrivilegedExecuteContract>): _10.MsgPrivilegedExecuteContract;
            };
            MsgPrivilegedExecuteContractResponse: {
                encode(message: _10.MsgPrivilegedExecuteContractResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _10.MsgPrivilegedExecuteContractResponse;
                fromPartial(object: Partial<_10.MsgPrivilegedExecuteContractResponse>): _10.MsgPrivilegedExecuteContractResponse;
            };
            SpotMarketParamUpdateProposal: {
                encode(message: _10.SpotMarketParamUpdateProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _10.SpotMarketParamUpdateProposal;
                fromPartial(object: Partial<_10.SpotMarketParamUpdateProposal>): _10.SpotMarketParamUpdateProposal;
            };
            ExchangeEnableProposal: {
                encode(message: _10.ExchangeEnableProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _10.ExchangeEnableProposal;
                fromPartial(object: Partial<_10.ExchangeEnableProposal>): _10.ExchangeEnableProposal;
            };
            BatchExchangeModificationProposal: {
                encode(message: _10.BatchExchangeModificationProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _10.BatchExchangeModificationProposal;
                fromPartial(object: Partial<_10.BatchExchangeModificationProposal>): _10.BatchExchangeModificationProposal;
            };
            SpotMarketLaunchProposal: {
                encode(message: _10.SpotMarketLaunchProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _10.SpotMarketLaunchProposal;
                fromPartial(object: Partial<_10.SpotMarketLaunchProposal>): _10.SpotMarketLaunchProposal;
            };
            PerpetualMarketLaunchProposal: {
                encode(message: _10.PerpetualMarketLaunchProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _10.PerpetualMarketLaunchProposal;
                fromPartial(object: Partial<_10.PerpetualMarketLaunchProposal>): _10.PerpetualMarketLaunchProposal;
            };
            BinaryOptionsMarketLaunchProposal: {
                encode(message: _10.BinaryOptionsMarketLaunchProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _10.BinaryOptionsMarketLaunchProposal;
                fromPartial(object: Partial<_10.BinaryOptionsMarketLaunchProposal>): _10.BinaryOptionsMarketLaunchProposal;
            };
            ExpiryFuturesMarketLaunchProposal: {
                encode(message: _10.ExpiryFuturesMarketLaunchProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _10.ExpiryFuturesMarketLaunchProposal;
                fromPartial(object: Partial<_10.ExpiryFuturesMarketLaunchProposal>): _10.ExpiryFuturesMarketLaunchProposal;
            };
            DerivativeMarketParamUpdateProposal: {
                encode(message: _10.DerivativeMarketParamUpdateProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _10.DerivativeMarketParamUpdateProposal;
                fromPartial(object: Partial<_10.DerivativeMarketParamUpdateProposal>): _10.DerivativeMarketParamUpdateProposal;
            };
            MarketForcedSettlementProposal: {
                encode(message: _10.MarketForcedSettlementProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _10.MarketForcedSettlementProposal;
                fromPartial(object: Partial<_10.MarketForcedSettlementProposal>): _10.MarketForcedSettlementProposal;
            };
            UpdateDenomDecimalsProposal: {
                encode(message: _10.UpdateDenomDecimalsProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _10.UpdateDenomDecimalsProposal;
                fromPartial(object: Partial<_10.UpdateDenomDecimalsProposal>): _10.UpdateDenomDecimalsProposal;
            };
            BinaryOptionsMarketParamUpdateProposal: {
                encode(message: _10.BinaryOptionsMarketParamUpdateProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _10.BinaryOptionsMarketParamUpdateProposal;
                fromPartial(object: Partial<_10.BinaryOptionsMarketParamUpdateProposal>): _10.BinaryOptionsMarketParamUpdateProposal;
            };
            ProviderOracleParams: {
                encode(message: _10.ProviderOracleParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _10.ProviderOracleParams;
                fromPartial(object: Partial<_10.ProviderOracleParams>): _10.ProviderOracleParams;
            };
            OracleParams: {
                encode(message: _10.OracleParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _10.OracleParams;
                fromPartial(object: Partial<_10.OracleParams>): _10.OracleParams;
            };
            TradingRewardCampaignLaunchProposal: {
                encode(message: _10.TradingRewardCampaignLaunchProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _10.TradingRewardCampaignLaunchProposal;
                fromPartial(object: Partial<_10.TradingRewardCampaignLaunchProposal>): _10.TradingRewardCampaignLaunchProposal;
            };
            TradingRewardCampaignUpdateProposal: {
                encode(message: _10.TradingRewardCampaignUpdateProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _10.TradingRewardCampaignUpdateProposal;
                fromPartial(object: Partial<_10.TradingRewardCampaignUpdateProposal>): _10.TradingRewardCampaignUpdateProposal;
            };
            RewardPointUpdate: {
                encode(message: _10.RewardPointUpdate, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _10.RewardPointUpdate;
                fromPartial(object: Partial<_10.RewardPointUpdate>): _10.RewardPointUpdate;
            };
            TradingRewardPendingPointsUpdateProposal: {
                encode(message: _10.TradingRewardPendingPointsUpdateProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _10.TradingRewardPendingPointsUpdateProposal;
                fromPartial(object: Partial<_10.TradingRewardPendingPointsUpdateProposal>): _10.TradingRewardPendingPointsUpdateProposal;
            };
            FeeDiscountProposal: {
                encode(message: _10.FeeDiscountProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _10.FeeDiscountProposal;
                fromPartial(object: Partial<_10.FeeDiscountProposal>): _10.FeeDiscountProposal;
            };
            BatchCommunityPoolSpendProposal: {
                encode(message: _10.BatchCommunityPoolSpendProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _10.BatchCommunityPoolSpendProposal;
                fromPartial(object: Partial<_10.BatchCommunityPoolSpendProposal>): _10.BatchCommunityPoolSpendProposal;
            };
            MsgRewardsOptOut: {
                encode(message: _10.MsgRewardsOptOut, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _10.MsgRewardsOptOut;
                fromPartial(object: Partial<_10.MsgRewardsOptOut>): _10.MsgRewardsOptOut;
            };
            MsgRewardsOptOutResponse: {
                encode(_: _10.MsgRewardsOptOutResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _10.MsgRewardsOptOutResponse;
                fromPartial(_: Partial<_10.MsgRewardsOptOutResponse>): _10.MsgRewardsOptOutResponse;
            };
            MsgReclaimLockedFunds: {
                encode(message: _10.MsgReclaimLockedFunds, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _10.MsgReclaimLockedFunds;
                fromPartial(object: Partial<_10.MsgReclaimLockedFunds>): _10.MsgReclaimLockedFunds;
            };
            MsgReclaimLockedFundsResponse: {
                encode(_: _10.MsgReclaimLockedFundsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _10.MsgReclaimLockedFundsResponse;
                fromPartial(_: Partial<_10.MsgReclaimLockedFundsResponse>): _10.MsgReclaimLockedFundsResponse;
            };
            MsgSignData: {
                encode(message: _10.MsgSignData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _10.MsgSignData;
                fromPartial(object: Partial<_10.MsgSignData>): _10.MsgSignData;
            };
            MsgSignDoc: {
                encode(message: _10.MsgSignDoc, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _10.MsgSignDoc;
                fromPartial(object: Partial<_10.MsgSignDoc>): _10.MsgSignDoc;
            };
            MsgAdminUpdateBinaryOptionsMarket: {
                encode(message: _10.MsgAdminUpdateBinaryOptionsMarket, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _10.MsgAdminUpdateBinaryOptionsMarket;
                fromPartial(object: Partial<_10.MsgAdminUpdateBinaryOptionsMarket>): _10.MsgAdminUpdateBinaryOptionsMarket;
            };
            MsgAdminUpdateBinaryOptionsMarketResponse: {
                encode(_: _10.MsgAdminUpdateBinaryOptionsMarketResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _10.MsgAdminUpdateBinaryOptionsMarketResponse;
                fromPartial(_: Partial<_10.MsgAdminUpdateBinaryOptionsMarketResponse>): _10.MsgAdminUpdateBinaryOptionsMarketResponse;
            };
            AtomicMarketOrderFeeMultiplierScheduleProposal: {
                encode(message: _10.AtomicMarketOrderFeeMultiplierScheduleProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _10.AtomicMarketOrderFeeMultiplierScheduleProposal;
                fromPartial(object: Partial<_10.AtomicMarketOrderFeeMultiplierScheduleProposal>): _10.AtomicMarketOrderFeeMultiplierScheduleProposal;
            };
            orderSideFromJSON(object: any): _9.OrderSide;
            orderSideToJSON(object: _9.OrderSide): string;
            cancellationStrategyFromJSON(object: any): _9.CancellationStrategy;
            cancellationStrategyToJSON(object: _9.CancellationStrategy): string;
            OrderSide: typeof _9.OrderSide;
            OrderSideSDKType: typeof _9.OrderSide;
            CancellationStrategy: typeof _9.CancellationStrategy;
            CancellationStrategySDKType: typeof _9.CancellationStrategy;
            Subaccount: {
                encode(message: _9.Subaccount, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _9.Subaccount;
                fromPartial(object: Partial<_9.Subaccount>): _9.Subaccount;
            };
            QuerySubaccountOrdersRequest: {
                encode(message: _9.QuerySubaccountOrdersRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _9.QuerySubaccountOrdersRequest;
                fromPartial(object: Partial<_9.QuerySubaccountOrdersRequest>): _9.QuerySubaccountOrdersRequest;
            };
            QuerySubaccountOrdersResponse: {
                encode(message: _9.QuerySubaccountOrdersResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _9.QuerySubaccountOrdersResponse;
                fromPartial(object: Partial<_9.QuerySubaccountOrdersResponse>): _9.QuerySubaccountOrdersResponse;
            };
            SubaccountOrderbookMetadataWithMarket: {
                encode(message: _9.SubaccountOrderbookMetadataWithMarket, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _9.SubaccountOrderbookMetadataWithMarket;
                fromPartial(object: Partial<_9.SubaccountOrderbookMetadataWithMarket>): _9.SubaccountOrderbookMetadataWithMarket;
            };
            QueryExchangeParamsRequest: {
                encode(_: _9.QueryExchangeParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _9.QueryExchangeParamsRequest;
                fromPartial(_: Partial<_9.QueryExchangeParamsRequest>): _9.QueryExchangeParamsRequest;
            };
            QueryExchangeParamsResponse: {
                encode(message: _9.QueryExchangeParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _9.QueryExchangeParamsResponse;
                fromPartial(object: Partial<_9.QueryExchangeParamsResponse>): _9.QueryExchangeParamsResponse;
            };
            QuerySubaccountDepositsRequest: {
                encode(message: _9.QuerySubaccountDepositsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _9.QuerySubaccountDepositsRequest;
                fromPartial(object: Partial<_9.QuerySubaccountDepositsRequest>): _9.QuerySubaccountDepositsRequest;
            };
            QuerySubaccountDepositsResponse_DepositsEntry: {
                encode(message: _9.QuerySubaccountDepositsResponse_DepositsEntry, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _9.QuerySubaccountDepositsResponse_DepositsEntry;
                fromPartial(object: Partial<_9.QuerySubaccountDepositsResponse_DepositsEntry>): _9.QuerySubaccountDepositsResponse_DepositsEntry;
            };
            QuerySubaccountDepositsResponse: {
                encode(message: _9.QuerySubaccountDepositsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _9.QuerySubaccountDepositsResponse;
                fromPartial(object: Partial<_9.QuerySubaccountDepositsResponse>): _9.QuerySubaccountDepositsResponse;
            };
            QueryExchangeBalancesRequest: {
                encode(_: _9.QueryExchangeBalancesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _9.QueryExchangeBalancesRequest;
                fromPartial(_: Partial<_9.QueryExchangeBalancesRequest>): _9.QueryExchangeBalancesRequest;
            };
            QueryExchangeBalancesResponse: {
                encode(message: _9.QueryExchangeBalancesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _9.QueryExchangeBalancesResponse;
                fromPartial(object: Partial<_9.QueryExchangeBalancesResponse>): _9.QueryExchangeBalancesResponse;
            };
            QueryAggregateVolumeRequest: {
                encode(message: _9.QueryAggregateVolumeRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _9.QueryAggregateVolumeRequest;
                fromPartial(object: Partial<_9.QueryAggregateVolumeRequest>): _9.QueryAggregateVolumeRequest;
            };
            QueryAggregateVolumeResponse: {
                encode(message: _9.QueryAggregateVolumeResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _9.QueryAggregateVolumeResponse;
                fromPartial(object: Partial<_9.QueryAggregateVolumeResponse>): _9.QueryAggregateVolumeResponse;
            };
            QueryAggregateVolumesRequest: {
                encode(message: _9.QueryAggregateVolumesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _9.QueryAggregateVolumesRequest;
                fromPartial(object: Partial<_9.QueryAggregateVolumesRequest>): _9.QueryAggregateVolumesRequest;
            };
            QueryAggregateVolumesResponse: {
                encode(message: _9.QueryAggregateVolumesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _9.QueryAggregateVolumesResponse;
                fromPartial(object: Partial<_9.QueryAggregateVolumesResponse>): _9.QueryAggregateVolumesResponse;
            };
            QueryAggregateMarketVolumeRequest: {
                encode(message: _9.QueryAggregateMarketVolumeRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _9.QueryAggregateMarketVolumeRequest;
                fromPartial(object: Partial<_9.QueryAggregateMarketVolumeRequest>): _9.QueryAggregateMarketVolumeRequest;
            };
            QueryAggregateMarketVolumeResponse: {
                encode(message: _9.QueryAggregateMarketVolumeResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _9.QueryAggregateMarketVolumeResponse;
                fromPartial(object: Partial<_9.QueryAggregateMarketVolumeResponse>): _9.QueryAggregateMarketVolumeResponse;
            };
            QueryDenomDecimalRequest: {
                encode(message: _9.QueryDenomDecimalRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _9.QueryDenomDecimalRequest;
                fromPartial(object: Partial<_9.QueryDenomDecimalRequest>): _9.QueryDenomDecimalRequest;
            };
            QueryDenomDecimalResponse: {
                encode(message: _9.QueryDenomDecimalResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _9.QueryDenomDecimalResponse;
                fromPartial(object: Partial<_9.QueryDenomDecimalResponse>): _9.QueryDenomDecimalResponse;
            };
            QueryDenomDecimalsRequest: {
                encode(message: _9.QueryDenomDecimalsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _9.QueryDenomDecimalsRequest;
                fromPartial(object: Partial<_9.QueryDenomDecimalsRequest>): _9.QueryDenomDecimalsRequest;
            };
            QueryDenomDecimalsResponse: {
                encode(message: _9.QueryDenomDecimalsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _9.QueryDenomDecimalsResponse;
                fromPartial(object: Partial<_9.QueryDenomDecimalsResponse>): _9.QueryDenomDecimalsResponse;
            };
            QueryAggregateMarketVolumesRequest: {
                encode(message: _9.QueryAggregateMarketVolumesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _9.QueryAggregateMarketVolumesRequest;
                fromPartial(object: Partial<_9.QueryAggregateMarketVolumesRequest>): _9.QueryAggregateMarketVolumesRequest;
            };
            QueryAggregateMarketVolumesResponse: {
                encode(message: _9.QueryAggregateMarketVolumesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _9.QueryAggregateMarketVolumesResponse;
                fromPartial(object: Partial<_9.QueryAggregateMarketVolumesResponse>): _9.QueryAggregateMarketVolumesResponse;
            };
            QuerySubaccountDepositRequest: {
                encode(message: _9.QuerySubaccountDepositRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _9.QuerySubaccountDepositRequest;
                fromPartial(object: Partial<_9.QuerySubaccountDepositRequest>): _9.QuerySubaccountDepositRequest;
            };
            QuerySubaccountDepositResponse: {
                encode(message: _9.QuerySubaccountDepositResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _9.QuerySubaccountDepositResponse;
                fromPartial(object: Partial<_9.QuerySubaccountDepositResponse>): _9.QuerySubaccountDepositResponse;
            };
            QuerySpotMarketsRequest: {
                encode(message: _9.QuerySpotMarketsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _9.QuerySpotMarketsRequest;
                fromPartial(object: Partial<_9.QuerySpotMarketsRequest>): _9.QuerySpotMarketsRequest;
            };
            QuerySpotMarketsResponse: {
                encode(message: _9.QuerySpotMarketsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _9.QuerySpotMarketsResponse;
                fromPartial(object: Partial<_9.QuerySpotMarketsResponse>): _9.QuerySpotMarketsResponse;
            };
            QuerySpotMarketRequest: {
                encode(message: _9.QuerySpotMarketRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _9.QuerySpotMarketRequest;
                fromPartial(object: Partial<_9.QuerySpotMarketRequest>): _9.QuerySpotMarketRequest;
            };
            QuerySpotMarketResponse: {
                encode(message: _9.QuerySpotMarketResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _9.QuerySpotMarketResponse;
                fromPartial(object: Partial<_9.QuerySpotMarketResponse>): _9.QuerySpotMarketResponse;
            };
            QuerySpotOrderbookRequest: {
                encode(message: _9.QuerySpotOrderbookRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _9.QuerySpotOrderbookRequest;
                fromPartial(object: Partial<_9.QuerySpotOrderbookRequest>): _9.QuerySpotOrderbookRequest;
            };
            QuerySpotOrderbookResponse: {
                encode(message: _9.QuerySpotOrderbookResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _9.QuerySpotOrderbookResponse;
                fromPartial(object: Partial<_9.QuerySpotOrderbookResponse>): _9.QuerySpotOrderbookResponse;
            };
            FullSpotMarket: {
                encode(message: _9.FullSpotMarket, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _9.FullSpotMarket;
                fromPartial(object: Partial<_9.FullSpotMarket>): _9.FullSpotMarket;
            };
            QueryFullSpotMarketsRequest: {
                encode(message: _9.QueryFullSpotMarketsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _9.QueryFullSpotMarketsRequest;
                fromPartial(object: Partial<_9.QueryFullSpotMarketsRequest>): _9.QueryFullSpotMarketsRequest;
            };
            QueryFullSpotMarketsResponse: {
                encode(message: _9.QueryFullSpotMarketsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _9.QueryFullSpotMarketsResponse;
                fromPartial(object: Partial<_9.QueryFullSpotMarketsResponse>): _9.QueryFullSpotMarketsResponse;
            };
            QueryFullSpotMarketRequest: {
                encode(message: _9.QueryFullSpotMarketRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _9.QueryFullSpotMarketRequest;
                fromPartial(object: Partial<_9.QueryFullSpotMarketRequest>): _9.QueryFullSpotMarketRequest;
            };
            QueryFullSpotMarketResponse: {
                encode(message: _9.QueryFullSpotMarketResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _9.QueryFullSpotMarketResponse;
                fromPartial(object: Partial<_9.QueryFullSpotMarketResponse>): _9.QueryFullSpotMarketResponse;
            };
            QuerySpotOrdersByHashesRequest: {
                encode(message: _9.QuerySpotOrdersByHashesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _9.QuerySpotOrdersByHashesRequest;
                fromPartial(object: Partial<_9.QuerySpotOrdersByHashesRequest>): _9.QuerySpotOrdersByHashesRequest;
            };
            QuerySpotOrdersByHashesResponse: {
                encode(message: _9.QuerySpotOrdersByHashesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _9.QuerySpotOrdersByHashesResponse;
                fromPartial(object: Partial<_9.QuerySpotOrdersByHashesResponse>): _9.QuerySpotOrdersByHashesResponse;
            };
            QueryTraderSpotOrdersRequest: {
                encode(message: _9.QueryTraderSpotOrdersRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _9.QueryTraderSpotOrdersRequest;
                fromPartial(object: Partial<_9.QueryTraderSpotOrdersRequest>): _9.QueryTraderSpotOrdersRequest;
            };
            QueryAccountAddressSpotOrdersRequest: {
                encode(message: _9.QueryAccountAddressSpotOrdersRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _9.QueryAccountAddressSpotOrdersRequest;
                fromPartial(object: Partial<_9.QueryAccountAddressSpotOrdersRequest>): _9.QueryAccountAddressSpotOrdersRequest;
            };
            TrimmedSpotLimitOrder: {
                encode(message: _9.TrimmedSpotLimitOrder, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _9.TrimmedSpotLimitOrder;
                fromPartial(object: Partial<_9.TrimmedSpotLimitOrder>): _9.TrimmedSpotLimitOrder;
            };
            QueryTraderSpotOrdersResponse: {
                encode(message: _9.QueryTraderSpotOrdersResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _9.QueryTraderSpotOrdersResponse;
                fromPartial(object: Partial<_9.QueryTraderSpotOrdersResponse>): _9.QueryTraderSpotOrdersResponse;
            };
            QueryAccountAddressSpotOrdersResponse: {
                encode(message: _9.QueryAccountAddressSpotOrdersResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _9.QueryAccountAddressSpotOrdersResponse;
                fromPartial(object: Partial<_9.QueryAccountAddressSpotOrdersResponse>): _9.QueryAccountAddressSpotOrdersResponse;
            };
            QuerySpotMidPriceAndTOBRequest: {
                encode(message: _9.QuerySpotMidPriceAndTOBRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _9.QuerySpotMidPriceAndTOBRequest;
                fromPartial(object: Partial<_9.QuerySpotMidPriceAndTOBRequest>): _9.QuerySpotMidPriceAndTOBRequest;
            };
            QuerySpotMidPriceAndTOBResponse: {
                encode(message: _9.QuerySpotMidPriceAndTOBResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _9.QuerySpotMidPriceAndTOBResponse;
                fromPartial(object: Partial<_9.QuerySpotMidPriceAndTOBResponse>): _9.QuerySpotMidPriceAndTOBResponse;
            };
            QueryDerivativeMidPriceAndTOBRequest: {
                encode(message: _9.QueryDerivativeMidPriceAndTOBRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _9.QueryDerivativeMidPriceAndTOBRequest;
                fromPartial(object: Partial<_9.QueryDerivativeMidPriceAndTOBRequest>): _9.QueryDerivativeMidPriceAndTOBRequest;
            };
            QueryDerivativeMidPriceAndTOBResponse: {
                encode(message: _9.QueryDerivativeMidPriceAndTOBResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _9.QueryDerivativeMidPriceAndTOBResponse;
                fromPartial(object: Partial<_9.QueryDerivativeMidPriceAndTOBResponse>): _9.QueryDerivativeMidPriceAndTOBResponse;
            };
            QueryDerivativeOrderbookRequest: {
                encode(message: _9.QueryDerivativeOrderbookRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _9.QueryDerivativeOrderbookRequest;
                fromPartial(object: Partial<_9.QueryDerivativeOrderbookRequest>): _9.QueryDerivativeOrderbookRequest;
            };
            QueryDerivativeOrderbookResponse: {
                encode(message: _9.QueryDerivativeOrderbookResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _9.QueryDerivativeOrderbookResponse;
                fromPartial(object: Partial<_9.QueryDerivativeOrderbookResponse>): _9.QueryDerivativeOrderbookResponse;
            };
            QueryTraderSpotOrdersToCancelUpToAmountRequest: {
                encode(message: _9.QueryTraderSpotOrdersToCancelUpToAmountRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _9.QueryTraderSpotOrdersToCancelUpToAmountRequest;
                fromPartial(object: Partial<_9.QueryTraderSpotOrdersToCancelUpToAmountRequest>): _9.QueryTraderSpotOrdersToCancelUpToAmountRequest;
            };
            QueryTraderDerivativeOrdersToCancelUpToAmountRequest: {
                encode(message: _9.QueryTraderDerivativeOrdersToCancelUpToAmountRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _9.QueryTraderDerivativeOrdersToCancelUpToAmountRequest;
                fromPartial(object: Partial<_9.QueryTraderDerivativeOrdersToCancelUpToAmountRequest>): _9.QueryTraderDerivativeOrdersToCancelUpToAmountRequest;
            };
            QueryTraderDerivativeOrdersRequest: {
                encode(message: _9.QueryTraderDerivativeOrdersRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _9.QueryTraderDerivativeOrdersRequest;
                fromPartial(object: Partial<_9.QueryTraderDerivativeOrdersRequest>): _9.QueryTraderDerivativeOrdersRequest;
            };
            QueryAccountAddressDerivativeOrdersRequest: {
                encode(message: _9.QueryAccountAddressDerivativeOrdersRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _9.QueryAccountAddressDerivativeOrdersRequest;
                fromPartial(object: Partial<_9.QueryAccountAddressDerivativeOrdersRequest>): _9.QueryAccountAddressDerivativeOrdersRequest;
            };
            TrimmedDerivativeLimitOrder: {
                encode(message: _9.TrimmedDerivativeLimitOrder, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _9.TrimmedDerivativeLimitOrder;
                fromPartial(object: Partial<_9.TrimmedDerivativeLimitOrder>): _9.TrimmedDerivativeLimitOrder;
            };
            QueryTraderDerivativeOrdersResponse: {
                encode(message: _9.QueryTraderDerivativeOrdersResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _9.QueryTraderDerivativeOrdersResponse;
                fromPartial(object: Partial<_9.QueryTraderDerivativeOrdersResponse>): _9.QueryTraderDerivativeOrdersResponse;
            };
            QueryAccountAddressDerivativeOrdersResponse: {
                encode(message: _9.QueryAccountAddressDerivativeOrdersResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _9.QueryAccountAddressDerivativeOrdersResponse;
                fromPartial(object: Partial<_9.QueryAccountAddressDerivativeOrdersResponse>): _9.QueryAccountAddressDerivativeOrdersResponse;
            };
            QueryDerivativeOrdersByHashesRequest: {
                encode(message: _9.QueryDerivativeOrdersByHashesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _9.QueryDerivativeOrdersByHashesRequest;
                fromPartial(object: Partial<_9.QueryDerivativeOrdersByHashesRequest>): _9.QueryDerivativeOrdersByHashesRequest;
            };
            QueryDerivativeOrdersByHashesResponse: {
                encode(message: _9.QueryDerivativeOrdersByHashesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _9.QueryDerivativeOrdersByHashesResponse;
                fromPartial(object: Partial<_9.QueryDerivativeOrdersByHashesResponse>): _9.QueryDerivativeOrdersByHashesResponse;
            };
            QueryDerivativeMarketsRequest: {
                encode(message: _9.QueryDerivativeMarketsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _9.QueryDerivativeMarketsRequest;
                fromPartial(object: Partial<_9.QueryDerivativeMarketsRequest>): _9.QueryDerivativeMarketsRequest;
            };
            PriceLevel: {
                encode(message: _9.PriceLevel, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _9.PriceLevel;
                fromPartial(object: Partial<_9.PriceLevel>): _9.PriceLevel;
            };
            PerpetualMarketState: {
                encode(message: _9.PerpetualMarketState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _9.PerpetualMarketState;
                fromPartial(object: Partial<_9.PerpetualMarketState>): _9.PerpetualMarketState;
            };
            FullDerivativeMarket: {
                encode(message: _9.FullDerivativeMarket, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _9.FullDerivativeMarket;
                fromPartial(object: Partial<_9.FullDerivativeMarket>): _9.FullDerivativeMarket;
            };
            QueryDerivativeMarketsResponse: {
                encode(message: _9.QueryDerivativeMarketsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _9.QueryDerivativeMarketsResponse;
                fromPartial(object: Partial<_9.QueryDerivativeMarketsResponse>): _9.QueryDerivativeMarketsResponse;
            };
            QueryDerivativeMarketRequest: {
                encode(message: _9.QueryDerivativeMarketRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _9.QueryDerivativeMarketRequest;
                fromPartial(object: Partial<_9.QueryDerivativeMarketRequest>): _9.QueryDerivativeMarketRequest;
            };
            QueryDerivativeMarketResponse: {
                encode(message: _9.QueryDerivativeMarketResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _9.QueryDerivativeMarketResponse;
                fromPartial(object: Partial<_9.QueryDerivativeMarketResponse>): _9.QueryDerivativeMarketResponse;
            };
            QueryDerivativeMarketAddressRequest: {
                encode(message: _9.QueryDerivativeMarketAddressRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _9.QueryDerivativeMarketAddressRequest;
                fromPartial(object: Partial<_9.QueryDerivativeMarketAddressRequest>): _9.QueryDerivativeMarketAddressRequest;
            };
            QueryDerivativeMarketAddressResponse: {
                encode(message: _9.QueryDerivativeMarketAddressResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _9.QueryDerivativeMarketAddressResponse;
                fromPartial(object: Partial<_9.QueryDerivativeMarketAddressResponse>): _9.QueryDerivativeMarketAddressResponse;
            };
            QuerySubaccountTradeNonceRequest: {
                encode(message: _9.QuerySubaccountTradeNonceRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _9.QuerySubaccountTradeNonceRequest;
                fromPartial(object: Partial<_9.QuerySubaccountTradeNonceRequest>): _9.QuerySubaccountTradeNonceRequest;
            };
            QuerySubaccountPositionsRequest: {
                encode(message: _9.QuerySubaccountPositionsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _9.QuerySubaccountPositionsRequest;
                fromPartial(object: Partial<_9.QuerySubaccountPositionsRequest>): _9.QuerySubaccountPositionsRequest;
            };
            QuerySubaccountPositionInMarketRequest: {
                encode(message: _9.QuerySubaccountPositionInMarketRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _9.QuerySubaccountPositionInMarketRequest;
                fromPartial(object: Partial<_9.QuerySubaccountPositionInMarketRequest>): _9.QuerySubaccountPositionInMarketRequest;
            };
            QuerySubaccountEffectivePositionInMarketRequest: {
                encode(message: _9.QuerySubaccountEffectivePositionInMarketRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _9.QuerySubaccountEffectivePositionInMarketRequest;
                fromPartial(object: Partial<_9.QuerySubaccountEffectivePositionInMarketRequest>): _9.QuerySubaccountEffectivePositionInMarketRequest;
            };
            QuerySubaccountOrderMetadataRequest: {
                encode(message: _9.QuerySubaccountOrderMetadataRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _9.QuerySubaccountOrderMetadataRequest;
                fromPartial(object: Partial<_9.QuerySubaccountOrderMetadataRequest>): _9.QuerySubaccountOrderMetadataRequest;
            };
            QuerySubaccountPositionsResponse: {
                encode(message: _9.QuerySubaccountPositionsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _9.QuerySubaccountPositionsResponse;
                fromPartial(object: Partial<_9.QuerySubaccountPositionsResponse>): _9.QuerySubaccountPositionsResponse;
            };
            QuerySubaccountPositionInMarketResponse: {
                encode(message: _9.QuerySubaccountPositionInMarketResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _9.QuerySubaccountPositionInMarketResponse;
                fromPartial(object: Partial<_9.QuerySubaccountPositionInMarketResponse>): _9.QuerySubaccountPositionInMarketResponse;
            };
            EffectivePosition: {
                encode(message: _9.EffectivePosition, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _9.EffectivePosition;
                fromPartial(object: Partial<_9.EffectivePosition>): _9.EffectivePosition;
            };
            QuerySubaccountEffectivePositionInMarketResponse: {
                encode(message: _9.QuerySubaccountEffectivePositionInMarketResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _9.QuerySubaccountEffectivePositionInMarketResponse;
                fromPartial(object: Partial<_9.QuerySubaccountEffectivePositionInMarketResponse>): _9.QuerySubaccountEffectivePositionInMarketResponse;
            };
            QueryPerpetualMarketInfoRequest: {
                encode(message: _9.QueryPerpetualMarketInfoRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _9.QueryPerpetualMarketInfoRequest;
                fromPartial(object: Partial<_9.QueryPerpetualMarketInfoRequest>): _9.QueryPerpetualMarketInfoRequest;
            };
            QueryPerpetualMarketInfoResponse: {
                encode(message: _9.QueryPerpetualMarketInfoResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _9.QueryPerpetualMarketInfoResponse;
                fromPartial(object: Partial<_9.QueryPerpetualMarketInfoResponse>): _9.QueryPerpetualMarketInfoResponse;
            };
            QueryExpiryFuturesMarketInfoRequest: {
                encode(message: _9.QueryExpiryFuturesMarketInfoRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _9.QueryExpiryFuturesMarketInfoRequest;
                fromPartial(object: Partial<_9.QueryExpiryFuturesMarketInfoRequest>): _9.QueryExpiryFuturesMarketInfoRequest;
            };
            QueryExpiryFuturesMarketInfoResponse: {
                encode(message: _9.QueryExpiryFuturesMarketInfoResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _9.QueryExpiryFuturesMarketInfoResponse;
                fromPartial(object: Partial<_9.QueryExpiryFuturesMarketInfoResponse>): _9.QueryExpiryFuturesMarketInfoResponse;
            };
            QueryPerpetualMarketFundingRequest: {
                encode(message: _9.QueryPerpetualMarketFundingRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _9.QueryPerpetualMarketFundingRequest;
                fromPartial(object: Partial<_9.QueryPerpetualMarketFundingRequest>): _9.QueryPerpetualMarketFundingRequest;
            };
            QueryPerpetualMarketFundingResponse: {
                encode(message: _9.QueryPerpetualMarketFundingResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _9.QueryPerpetualMarketFundingResponse;
                fromPartial(object: Partial<_9.QueryPerpetualMarketFundingResponse>): _9.QueryPerpetualMarketFundingResponse;
            };
            QuerySubaccountOrderMetadataResponse: {
                encode(message: _9.QuerySubaccountOrderMetadataResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _9.QuerySubaccountOrderMetadataResponse;
                fromPartial(object: Partial<_9.QuerySubaccountOrderMetadataResponse>): _9.QuerySubaccountOrderMetadataResponse;
            };
            QuerySubaccountTradeNonceResponse: {
                encode(message: _9.QuerySubaccountTradeNonceResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _9.QuerySubaccountTradeNonceResponse;
                fromPartial(object: Partial<_9.QuerySubaccountTradeNonceResponse>): _9.QuerySubaccountTradeNonceResponse;
            };
            QueryModuleStateRequest: {
                encode(_: _9.QueryModuleStateRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _9.QueryModuleStateRequest;
                fromPartial(_: Partial<_9.QueryModuleStateRequest>): _9.QueryModuleStateRequest;
            };
            QueryModuleStateResponse: {
                encode(message: _9.QueryModuleStateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _9.QueryModuleStateResponse;
                fromPartial(object: Partial<_9.QueryModuleStateResponse>): _9.QueryModuleStateResponse;
            };
            QueryPositionsRequest: {
                encode(_: _9.QueryPositionsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _9.QueryPositionsRequest;
                fromPartial(_: Partial<_9.QueryPositionsRequest>): _9.QueryPositionsRequest;
            };
            QueryPositionsResponse: {
                encode(message: _9.QueryPositionsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _9.QueryPositionsResponse;
                fromPartial(object: Partial<_9.QueryPositionsResponse>): _9.QueryPositionsResponse;
            };
            QueryTradeRewardPointsRequest: {
                encode(message: _9.QueryTradeRewardPointsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _9.QueryTradeRewardPointsRequest;
                fromPartial(object: Partial<_9.QueryTradeRewardPointsRequest>): _9.QueryTradeRewardPointsRequest;
            };
            QueryTradeRewardPointsResponse: {
                encode(message: _9.QueryTradeRewardPointsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _9.QueryTradeRewardPointsResponse;
                fromPartial(object: Partial<_9.QueryTradeRewardPointsResponse>): _9.QueryTradeRewardPointsResponse;
            };
            QueryTradeRewardCampaignRequest: {
                encode(_: _9.QueryTradeRewardCampaignRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _9.QueryTradeRewardCampaignRequest;
                fromPartial(_: Partial<_9.QueryTradeRewardCampaignRequest>): _9.QueryTradeRewardCampaignRequest;
            };
            QueryTradeRewardCampaignResponse: {
                encode(message: _9.QueryTradeRewardCampaignResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _9.QueryTradeRewardCampaignResponse;
                fromPartial(object: Partial<_9.QueryTradeRewardCampaignResponse>): _9.QueryTradeRewardCampaignResponse;
            };
            QueryIsOptedOutOfRewardsRequest: {
                encode(message: _9.QueryIsOptedOutOfRewardsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _9.QueryIsOptedOutOfRewardsRequest;
                fromPartial(object: Partial<_9.QueryIsOptedOutOfRewardsRequest>): _9.QueryIsOptedOutOfRewardsRequest;
            };
            QueryIsOptedOutOfRewardsResponse: {
                encode(message: _9.QueryIsOptedOutOfRewardsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _9.QueryIsOptedOutOfRewardsResponse;
                fromPartial(object: Partial<_9.QueryIsOptedOutOfRewardsResponse>): _9.QueryIsOptedOutOfRewardsResponse;
            };
            QueryOptedOutOfRewardsAccountsRequest: {
                encode(_: _9.QueryOptedOutOfRewardsAccountsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _9.QueryOptedOutOfRewardsAccountsRequest;
                fromPartial(_: Partial<_9.QueryOptedOutOfRewardsAccountsRequest>): _9.QueryOptedOutOfRewardsAccountsRequest;
            };
            QueryOptedOutOfRewardsAccountsResponse: {
                encode(message: _9.QueryOptedOutOfRewardsAccountsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _9.QueryOptedOutOfRewardsAccountsResponse;
                fromPartial(object: Partial<_9.QueryOptedOutOfRewardsAccountsResponse>): _9.QueryOptedOutOfRewardsAccountsResponse;
            };
            QueryFeeDiscountAccountInfoRequest: {
                encode(message: _9.QueryFeeDiscountAccountInfoRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _9.QueryFeeDiscountAccountInfoRequest;
                fromPartial(object: Partial<_9.QueryFeeDiscountAccountInfoRequest>): _9.QueryFeeDiscountAccountInfoRequest;
            };
            QueryFeeDiscountAccountInfoResponse: {
                encode(message: _9.QueryFeeDiscountAccountInfoResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _9.QueryFeeDiscountAccountInfoResponse;
                fromPartial(object: Partial<_9.QueryFeeDiscountAccountInfoResponse>): _9.QueryFeeDiscountAccountInfoResponse;
            };
            QueryFeeDiscountScheduleRequest: {
                encode(_: _9.QueryFeeDiscountScheduleRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _9.QueryFeeDiscountScheduleRequest;
                fromPartial(_: Partial<_9.QueryFeeDiscountScheduleRequest>): _9.QueryFeeDiscountScheduleRequest;
            };
            QueryFeeDiscountScheduleResponse: {
                encode(message: _9.QueryFeeDiscountScheduleResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _9.QueryFeeDiscountScheduleResponse;
                fromPartial(object: Partial<_9.QueryFeeDiscountScheduleResponse>): _9.QueryFeeDiscountScheduleResponse;
            };
            QueryBalanceMismatchesRequest: {
                encode(message: _9.QueryBalanceMismatchesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _9.QueryBalanceMismatchesRequest;
                fromPartial(object: Partial<_9.QueryBalanceMismatchesRequest>): _9.QueryBalanceMismatchesRequest;
            };
            BalanceMismatch: {
                encode(message: _9.BalanceMismatch, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _9.BalanceMismatch;
                fromPartial(object: Partial<_9.BalanceMismatch>): _9.BalanceMismatch;
            };
            QueryBalanceMismatchesResponse: {
                encode(message: _9.QueryBalanceMismatchesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _9.QueryBalanceMismatchesResponse;
                fromPartial(object: Partial<_9.QueryBalanceMismatchesResponse>): _9.QueryBalanceMismatchesResponse;
            };
            QueryBalanceWithBalanceHoldsRequest: {
                encode(_: _9.QueryBalanceWithBalanceHoldsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _9.QueryBalanceWithBalanceHoldsRequest;
                fromPartial(_: Partial<_9.QueryBalanceWithBalanceHoldsRequest>): _9.QueryBalanceWithBalanceHoldsRequest;
            };
            BalanceWithMarginHold: {
                encode(message: _9.BalanceWithMarginHold, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _9.BalanceWithMarginHold;
                fromPartial(object: Partial<_9.BalanceWithMarginHold>): _9.BalanceWithMarginHold;
            };
            QueryBalanceWithBalanceHoldsResponse: {
                encode(message: _9.QueryBalanceWithBalanceHoldsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _9.QueryBalanceWithBalanceHoldsResponse;
                fromPartial(object: Partial<_9.QueryBalanceWithBalanceHoldsResponse>): _9.QueryBalanceWithBalanceHoldsResponse;
            };
            QueryFeeDiscountTierStatisticsRequest: {
                encode(_: _9.QueryFeeDiscountTierStatisticsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _9.QueryFeeDiscountTierStatisticsRequest;
                fromPartial(_: Partial<_9.QueryFeeDiscountTierStatisticsRequest>): _9.QueryFeeDiscountTierStatisticsRequest;
            };
            TierStatistic: {
                encode(message: _9.TierStatistic, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _9.TierStatistic;
                fromPartial(object: Partial<_9.TierStatistic>): _9.TierStatistic;
            };
            QueryFeeDiscountTierStatisticsResponse: {
                encode(message: _9.QueryFeeDiscountTierStatisticsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _9.QueryFeeDiscountTierStatisticsResponse;
                fromPartial(object: Partial<_9.QueryFeeDiscountTierStatisticsResponse>): _9.QueryFeeDiscountTierStatisticsResponse;
            };
            MitoVaultInfosRequest: {
                encode(_: _9.MitoVaultInfosRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _9.MitoVaultInfosRequest;
                fromPartial(_: Partial<_9.MitoVaultInfosRequest>): _9.MitoVaultInfosRequest;
            };
            MitoVaultInfosResponse: {
                encode(message: _9.MitoVaultInfosResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _9.MitoVaultInfosResponse;
                fromPartial(object: Partial<_9.MitoVaultInfosResponse>): _9.MitoVaultInfosResponse;
            };
            QueryMarketIDFromVaultRequest: {
                encode(message: _9.QueryMarketIDFromVaultRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _9.QueryMarketIDFromVaultRequest;
                fromPartial(object: Partial<_9.QueryMarketIDFromVaultRequest>): _9.QueryMarketIDFromVaultRequest;
            };
            QueryMarketIDFromVaultResponse: {
                encode(message: _9.QueryMarketIDFromVaultResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _9.QueryMarketIDFromVaultResponse;
                fromPartial(object: Partial<_9.QueryMarketIDFromVaultResponse>): _9.QueryMarketIDFromVaultResponse;
            };
            QueryHistoricalTradeRecordsRequest: {
                encode(message: _9.QueryHistoricalTradeRecordsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _9.QueryHistoricalTradeRecordsRequest;
                fromPartial(object: Partial<_9.QueryHistoricalTradeRecordsRequest>): _9.QueryHistoricalTradeRecordsRequest;
            };
            QueryHistoricalTradeRecordsResponse: {
                encode(message: _9.QueryHistoricalTradeRecordsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _9.QueryHistoricalTradeRecordsResponse;
                fromPartial(object: Partial<_9.QueryHistoricalTradeRecordsResponse>): _9.QueryHistoricalTradeRecordsResponse;
            };
            TradeHistoryOptions: {
                encode(message: _9.TradeHistoryOptions, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _9.TradeHistoryOptions;
                fromPartial(object: Partial<_9.TradeHistoryOptions>): _9.TradeHistoryOptions;
            };
            QueryMarketVolatilityRequest: {
                encode(message: _9.QueryMarketVolatilityRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _9.QueryMarketVolatilityRequest;
                fromPartial(object: Partial<_9.QueryMarketVolatilityRequest>): _9.QueryMarketVolatilityRequest;
            };
            QueryMarketVolatilityResponse: {
                encode(message: _9.QueryMarketVolatilityResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _9.QueryMarketVolatilityResponse;
                fromPartial(object: Partial<_9.QueryMarketVolatilityResponse>): _9.QueryMarketVolatilityResponse;
            };
            QueryBinaryMarketsRequest: {
                encode(message: _9.QueryBinaryMarketsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _9.QueryBinaryMarketsRequest;
                fromPartial(object: Partial<_9.QueryBinaryMarketsRequest>): _9.QueryBinaryMarketsRequest;
            };
            QueryBinaryMarketsResponse: {
                encode(message: _9.QueryBinaryMarketsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _9.QueryBinaryMarketsResponse;
                fromPartial(object: Partial<_9.QueryBinaryMarketsResponse>): _9.QueryBinaryMarketsResponse;
            };
            QueryTraderDerivativeConditionalOrdersRequest: {
                encode(message: _9.QueryTraderDerivativeConditionalOrdersRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _9.QueryTraderDerivativeConditionalOrdersRequest;
                fromPartial(object: Partial<_9.QueryTraderDerivativeConditionalOrdersRequest>): _9.QueryTraderDerivativeConditionalOrdersRequest;
            };
            TrimmedDerivativeConditionalOrder: {
                encode(message: _9.TrimmedDerivativeConditionalOrder, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _9.TrimmedDerivativeConditionalOrder;
                fromPartial(object: Partial<_9.TrimmedDerivativeConditionalOrder>): _9.TrimmedDerivativeConditionalOrder;
            };
            QueryTraderDerivativeConditionalOrdersResponse: {
                encode(message: _9.QueryTraderDerivativeConditionalOrdersResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _9.QueryTraderDerivativeConditionalOrdersResponse;
                fromPartial(object: Partial<_9.QueryTraderDerivativeConditionalOrdersResponse>): _9.QueryTraderDerivativeConditionalOrdersResponse;
            };
            QueryMarketAtomicExecutionFeeMultiplierRequest: {
                encode(message: _9.QueryMarketAtomicExecutionFeeMultiplierRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _9.QueryMarketAtomicExecutionFeeMultiplierRequest;
                fromPartial(object: Partial<_9.QueryMarketAtomicExecutionFeeMultiplierRequest>): _9.QueryMarketAtomicExecutionFeeMultiplierRequest;
            };
            QueryMarketAtomicExecutionFeeMultiplierResponse: {
                encode(message: _9.QueryMarketAtomicExecutionFeeMultiplierResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _9.QueryMarketAtomicExecutionFeeMultiplierResponse;
                fromPartial(object: Partial<_9.QueryMarketAtomicExecutionFeeMultiplierResponse>): _9.QueryMarketAtomicExecutionFeeMultiplierResponse;
            };
            GenesisState: {
                encode(message: _8.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _8.GenesisState;
                fromPartial(object: Partial<_8.GenesisState>): _8.GenesisState;
            };
            OrderbookSequence: {
                encode(message: _8.OrderbookSequence, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _8.OrderbookSequence;
                fromPartial(object: Partial<_8.OrderbookSequence>): _8.OrderbookSequence;
            };
            FeeDiscountAccountTierTTL: {
                encode(message: _8.FeeDiscountAccountTierTTL, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _8.FeeDiscountAccountTierTTL;
                fromPartial(object: Partial<_8.FeeDiscountAccountTierTTL>): _8.FeeDiscountAccountTierTTL;
            };
            FeeDiscountBucketVolumeAccounts: {
                encode(message: _8.FeeDiscountBucketVolumeAccounts, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _8.FeeDiscountBucketVolumeAccounts;
                fromPartial(object: Partial<_8.FeeDiscountBucketVolumeAccounts>): _8.FeeDiscountBucketVolumeAccounts;
            };
            AccountVolume: {
                encode(message: _8.AccountVolume, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _8.AccountVolume;
                fromPartial(object: Partial<_8.AccountVolume>): _8.AccountVolume;
            };
            TradingRewardCampaignAccountPoints: {
                encode(message: _8.TradingRewardCampaignAccountPoints, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _8.TradingRewardCampaignAccountPoints;
                fromPartial(object: Partial<_8.TradingRewardCampaignAccountPoints>): _8.TradingRewardCampaignAccountPoints;
            };
            TradingRewardCampaignAccountPendingPoints: {
                encode(message: _8.TradingRewardCampaignAccountPendingPoints, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _8.TradingRewardCampaignAccountPendingPoints;
                fromPartial(object: Partial<_8.TradingRewardCampaignAccountPendingPoints>): _8.TradingRewardCampaignAccountPendingPoints;
            };
            SpotOrderBook: {
                encode(message: _8.SpotOrderBook, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _8.SpotOrderBook;
                fromPartial(object: Partial<_8.SpotOrderBook>): _8.SpotOrderBook;
            };
            DerivativeOrderBook: {
                encode(message: _8.DerivativeOrderBook, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _8.DerivativeOrderBook;
                fromPartial(object: Partial<_8.DerivativeOrderBook>): _8.DerivativeOrderBook;
            };
            ConditionalDerivativeOrderBook: {
                encode(message: _8.ConditionalDerivativeOrderBook, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _8.ConditionalDerivativeOrderBook;
                fromPartial(object: Partial<_8.ConditionalDerivativeOrderBook>): _8.ConditionalDerivativeOrderBook;
            };
            Balance: {
                encode(message: _8.Balance, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _8.Balance;
                fromPartial(object: Partial<_8.Balance>): _8.Balance;
            };
            DerivativePosition: {
                encode(message: _8.DerivativePosition, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _8.DerivativePosition;
                fromPartial(object: Partial<_8.DerivativePosition>): _8.DerivativePosition;
            };
            SubaccountNonce: {
                encode(message: _8.SubaccountNonce, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _8.SubaccountNonce;
                fromPartial(object: Partial<_8.SubaccountNonce>): _8.SubaccountNonce;
            };
            ExpiryFuturesMarketInfoState: {
                encode(message: _8.ExpiryFuturesMarketInfoState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _8.ExpiryFuturesMarketInfoState;
                fromPartial(object: Partial<_8.ExpiryFuturesMarketInfoState>): _8.ExpiryFuturesMarketInfoState;
            };
            PerpetualMarketFundingState: {
                encode(message: _8.PerpetualMarketFundingState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _8.PerpetualMarketFundingState;
                fromPartial(object: Partial<_8.PerpetualMarketFundingState>): _8.PerpetualMarketFundingState;
            };
            atomicMarketOrderAccessLevelFromJSON(object: any): _7.AtomicMarketOrderAccessLevel;
            atomicMarketOrderAccessLevelToJSON(object: _7.AtomicMarketOrderAccessLevel): string;
            marketStatusFromJSON(object: any): _7.MarketStatus;
            marketStatusToJSON(object: _7.MarketStatus): string;
            orderTypeFromJSON(object: any): _7.OrderType;
            orderTypeToJSON(object: _7.OrderType): string;
            executionTypeFromJSON(object: any): _7.ExecutionType;
            executionTypeToJSON(object: _7.ExecutionType): string;
            orderMaskFromJSON(object: any): _7.OrderMask;
            orderMaskToJSON(object: _7.OrderMask): string;
            AtomicMarketOrderAccessLevel: typeof _7.AtomicMarketOrderAccessLevel;
            AtomicMarketOrderAccessLevelSDKType: typeof _7.AtomicMarketOrderAccessLevel;
            MarketStatus: typeof _7.MarketStatus;
            MarketStatusSDKType: typeof _7.MarketStatus;
            OrderType: typeof _7.OrderType;
            OrderTypeSDKType: typeof _7.OrderType;
            ExecutionType: typeof _7.ExecutionType;
            ExecutionTypeSDKType: typeof _7.ExecutionType;
            OrderMask: typeof _7.OrderMask;
            OrderMaskSDKType: typeof _7.OrderMask;
            Params: {
                encode(message: _7.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _7.Params;
                fromPartial(object: Partial<_7.Params>): _7.Params;
            };
            MarketFeeMultiplier: {
                encode(message: _7.MarketFeeMultiplier, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _7.MarketFeeMultiplier;
                fromPartial(object: Partial<_7.MarketFeeMultiplier>): _7.MarketFeeMultiplier;
            };
            DerivativeMarket: {
                encode(message: _7.DerivativeMarket, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _7.DerivativeMarket;
                fromPartial(object: Partial<_7.DerivativeMarket>): _7.DerivativeMarket;
            };
            BinaryOptionsMarket: {
                encode(message: _7.BinaryOptionsMarket, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _7.BinaryOptionsMarket;
                fromPartial(object: Partial<_7.BinaryOptionsMarket>): _7.BinaryOptionsMarket;
            };
            ExpiryFuturesMarketInfo: {
                encode(message: _7.ExpiryFuturesMarketInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _7.ExpiryFuturesMarketInfo;
                fromPartial(object: Partial<_7.ExpiryFuturesMarketInfo>): _7.ExpiryFuturesMarketInfo;
            };
            PerpetualMarketInfo: {
                encode(message: _7.PerpetualMarketInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _7.PerpetualMarketInfo;
                fromPartial(object: Partial<_7.PerpetualMarketInfo>): _7.PerpetualMarketInfo;
            };
            PerpetualMarketFunding: {
                encode(message: _7.PerpetualMarketFunding, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _7.PerpetualMarketFunding;
                fromPartial(object: Partial<_7.PerpetualMarketFunding>): _7.PerpetualMarketFunding;
            };
            DerivativeMarketSettlementInfo: {
                encode(message: _7.DerivativeMarketSettlementInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _7.DerivativeMarketSettlementInfo;
                fromPartial(object: Partial<_7.DerivativeMarketSettlementInfo>): _7.DerivativeMarketSettlementInfo;
            };
            NextFundingTimestamp: {
                encode(message: _7.NextFundingTimestamp, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _7.NextFundingTimestamp;
                fromPartial(object: Partial<_7.NextFundingTimestamp>): _7.NextFundingTimestamp;
            };
            MidPriceAndTOB: {
                encode(message: _7.MidPriceAndTOB, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _7.MidPriceAndTOB;
                fromPartial(object: Partial<_7.MidPriceAndTOB>): _7.MidPriceAndTOB;
            };
            SpotMarket: {
                encode(message: _7.SpotMarket, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _7.SpotMarket;
                fromPartial(object: Partial<_7.SpotMarket>): _7.SpotMarket;
            };
            Deposit: {
                encode(message: _7.Deposit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _7.Deposit;
                fromPartial(object: Partial<_7.Deposit>): _7.Deposit;
            };
            SubaccountTradeNonce: {
                encode(message: _7.SubaccountTradeNonce, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _7.SubaccountTradeNonce;
                fromPartial(object: Partial<_7.SubaccountTradeNonce>): _7.SubaccountTradeNonce;
            };
            OrderInfo: {
                encode(message: _7.OrderInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _7.OrderInfo;
                fromPartial(object: Partial<_7.OrderInfo>): _7.OrderInfo;
            };
            SpotOrder: {
                encode(message: _7.SpotOrder, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _7.SpotOrder;
                fromPartial(object: Partial<_7.SpotOrder>): _7.SpotOrder;
            };
            SpotLimitOrder: {
                encode(message: _7.SpotLimitOrder, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _7.SpotLimitOrder;
                fromPartial(object: Partial<_7.SpotLimitOrder>): _7.SpotLimitOrder;
            };
            SpotMarketOrder: {
                encode(message: _7.SpotMarketOrder, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _7.SpotMarketOrder;
                fromPartial(object: Partial<_7.SpotMarketOrder>): _7.SpotMarketOrder;
            };
            DerivativeOrder: {
                encode(message: _7.DerivativeOrder, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _7.DerivativeOrder;
                fromPartial(object: Partial<_7.DerivativeOrder>): _7.DerivativeOrder;
            };
            SubaccountOrderbookMetadata: {
                encode(message: _7.SubaccountOrderbookMetadata, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _7.SubaccountOrderbookMetadata;
                fromPartial(object: Partial<_7.SubaccountOrderbookMetadata>): _7.SubaccountOrderbookMetadata;
            };
            SubaccountOrder: {
                encode(message: _7.SubaccountOrder, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _7.SubaccountOrder;
                fromPartial(object: Partial<_7.SubaccountOrder>): _7.SubaccountOrder;
            };
            SubaccountOrderData: {
                encode(message: _7.SubaccountOrderData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _7.SubaccountOrderData;
                fromPartial(object: Partial<_7.SubaccountOrderData>): _7.SubaccountOrderData;
            };
            DerivativeLimitOrder: {
                encode(message: _7.DerivativeLimitOrder, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _7.DerivativeLimitOrder;
                fromPartial(object: Partial<_7.DerivativeLimitOrder>): _7.DerivativeLimitOrder;
            };
            DerivativeMarketOrder: {
                encode(message: _7.DerivativeMarketOrder, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _7.DerivativeMarketOrder;
                fromPartial(object: Partial<_7.DerivativeMarketOrder>): _7.DerivativeMarketOrder;
            };
            Position: {
                encode(message: _7.Position, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _7.Position;
                fromPartial(object: Partial<_7.Position>): _7.Position;
            };
            MarketOrderIndicator: {
                encode(message: _7.MarketOrderIndicator, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _7.MarketOrderIndicator;
                fromPartial(object: Partial<_7.MarketOrderIndicator>): _7.MarketOrderIndicator;
            };
            TradeLog: {
                encode(message: _7.TradeLog, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _7.TradeLog;
                fromPartial(object: Partial<_7.TradeLog>): _7.TradeLog;
            };
            PositionDelta: {
                encode(message: _7.PositionDelta, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _7.PositionDelta;
                fromPartial(object: Partial<_7.PositionDelta>): _7.PositionDelta;
            };
            DerivativeTradeLog: {
                encode(message: _7.DerivativeTradeLog, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _7.DerivativeTradeLog;
                fromPartial(object: Partial<_7.DerivativeTradeLog>): _7.DerivativeTradeLog;
            };
            SubaccountPosition: {
                encode(message: _7.SubaccountPosition, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _7.SubaccountPosition;
                fromPartial(object: Partial<_7.SubaccountPosition>): _7.SubaccountPosition;
            };
            SubaccountDeposit: {
                encode(message: _7.SubaccountDeposit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _7.SubaccountDeposit;
                fromPartial(object: Partial<_7.SubaccountDeposit>): _7.SubaccountDeposit;
            };
            DepositUpdate: {
                encode(message: _7.DepositUpdate, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _7.DepositUpdate;
                fromPartial(object: Partial<_7.DepositUpdate>): _7.DepositUpdate;
            };
            PointsMultiplier: {
                encode(message: _7.PointsMultiplier, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _7.PointsMultiplier;
                fromPartial(object: Partial<_7.PointsMultiplier>): _7.PointsMultiplier;
            };
            TradingRewardCampaignBoostInfo: {
                encode(message: _7.TradingRewardCampaignBoostInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _7.TradingRewardCampaignBoostInfo;
                fromPartial(object: Partial<_7.TradingRewardCampaignBoostInfo>): _7.TradingRewardCampaignBoostInfo;
            };
            CampaignRewardPool: {
                encode(message: _7.CampaignRewardPool, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _7.CampaignRewardPool;
                fromPartial(object: Partial<_7.CampaignRewardPool>): _7.CampaignRewardPool;
            };
            TradingRewardCampaignInfo: {
                encode(message: _7.TradingRewardCampaignInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _7.TradingRewardCampaignInfo;
                fromPartial(object: Partial<_7.TradingRewardCampaignInfo>): _7.TradingRewardCampaignInfo;
            };
            FeeDiscountTierInfo: {
                encode(message: _7.FeeDiscountTierInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _7.FeeDiscountTierInfo;
                fromPartial(object: Partial<_7.FeeDiscountTierInfo>): _7.FeeDiscountTierInfo;
            };
            FeeDiscountSchedule: {
                encode(message: _7.FeeDiscountSchedule, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _7.FeeDiscountSchedule;
                fromPartial(object: Partial<_7.FeeDiscountSchedule>): _7.FeeDiscountSchedule;
            };
            FeeDiscountTierTTL: {
                encode(message: _7.FeeDiscountTierTTL, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _7.FeeDiscountTierTTL;
                fromPartial(object: Partial<_7.FeeDiscountTierTTL>): _7.FeeDiscountTierTTL;
            };
            VolumeRecord: {
                encode(message: _7.VolumeRecord, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _7.VolumeRecord;
                fromPartial(object: Partial<_7.VolumeRecord>): _7.VolumeRecord;
            };
            AccountRewards: {
                encode(message: _7.AccountRewards, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _7.AccountRewards;
                fromPartial(object: Partial<_7.AccountRewards>): _7.AccountRewards;
            };
            TradeRecords: {
                encode(message: _7.TradeRecords, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _7.TradeRecords;
                fromPartial(object: Partial<_7.TradeRecords>): _7.TradeRecords;
            };
            SubaccountIDs: {
                encode(message: _7.SubaccountIDs, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _7.SubaccountIDs;
                fromPartial(object: Partial<_7.SubaccountIDs>): _7.SubaccountIDs;
            };
            TradeRecord: {
                encode(message: _7.TradeRecord, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _7.TradeRecord;
                fromPartial(object: Partial<_7.TradeRecord>): _7.TradeRecord;
            };
            Level: {
                encode(message: _7.Level, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _7.Level;
                fromPartial(object: Partial<_7.Level>): _7.Level;
            };
            AggregateSubaccountVolumeRecord: {
                encode(message: _7.AggregateSubaccountVolumeRecord, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _7.AggregateSubaccountVolumeRecord;
                fromPartial(object: Partial<_7.AggregateSubaccountVolumeRecord>): _7.AggregateSubaccountVolumeRecord;
            };
            AggregateAccountVolumeRecord: {
                encode(message: _7.AggregateAccountVolumeRecord, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _7.AggregateAccountVolumeRecord;
                fromPartial(object: Partial<_7.AggregateAccountVolumeRecord>): _7.AggregateAccountVolumeRecord;
            };
            MarketVolume: {
                encode(message: _7.MarketVolume, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _7.MarketVolume;
                fromPartial(object: Partial<_7.MarketVolume>): _7.MarketVolume;
            };
            DenomDecimals: {
                encode(message: _7.DenomDecimals, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _7.DenomDecimals;
                fromPartial(object: Partial<_7.DenomDecimals>): _7.DenomDecimals;
            };
            EventBatchSpotExecution: {
                encode(message: _6.EventBatchSpotExecution, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _6.EventBatchSpotExecution;
                fromPartial(object: Partial<_6.EventBatchSpotExecution>): _6.EventBatchSpotExecution;
            };
            EventBatchDerivativeExecution: {
                encode(message: _6.EventBatchDerivativeExecution, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _6.EventBatchDerivativeExecution;
                fromPartial(object: Partial<_6.EventBatchDerivativeExecution>): _6.EventBatchDerivativeExecution;
            };
            EventLostFundsFromLiquidation: {
                encode(message: _6.EventLostFundsFromLiquidation, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _6.EventLostFundsFromLiquidation;
                fromPartial(object: Partial<_6.EventLostFundsFromLiquidation>): _6.EventLostFundsFromLiquidation;
            };
            EventBatchDerivativePosition: {
                encode(message: _6.EventBatchDerivativePosition, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _6.EventBatchDerivativePosition;
                fromPartial(object: Partial<_6.EventBatchDerivativePosition>): _6.EventBatchDerivativePosition;
            };
            EventDerivativeMarketPaused: {
                encode(message: _6.EventDerivativeMarketPaused, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _6.EventDerivativeMarketPaused;
                fromPartial(object: Partial<_6.EventDerivativeMarketPaused>): _6.EventDerivativeMarketPaused;
            };
            EventMarketBeyondBankruptcy: {
                encode(message: _6.EventMarketBeyondBankruptcy, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _6.EventMarketBeyondBankruptcy;
                fromPartial(object: Partial<_6.EventMarketBeyondBankruptcy>): _6.EventMarketBeyondBankruptcy;
            };
            EventAllPositionsHaircut: {
                encode(message: _6.EventAllPositionsHaircut, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _6.EventAllPositionsHaircut;
                fromPartial(object: Partial<_6.EventAllPositionsHaircut>): _6.EventAllPositionsHaircut;
            };
            EventBinaryOptionsMarketUpdate: {
                encode(message: _6.EventBinaryOptionsMarketUpdate, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _6.EventBinaryOptionsMarketUpdate;
                fromPartial(object: Partial<_6.EventBinaryOptionsMarketUpdate>): _6.EventBinaryOptionsMarketUpdate;
            };
            EventNewSpotOrders: {
                encode(message: _6.EventNewSpotOrders, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _6.EventNewSpotOrders;
                fromPartial(object: Partial<_6.EventNewSpotOrders>): _6.EventNewSpotOrders;
            };
            EventNewDerivativeOrders: {
                encode(message: _6.EventNewDerivativeOrders, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _6.EventNewDerivativeOrders;
                fromPartial(object: Partial<_6.EventNewDerivativeOrders>): _6.EventNewDerivativeOrders;
            };
            EventCancelSpotOrder: {
                encode(message: _6.EventCancelSpotOrder, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _6.EventCancelSpotOrder;
                fromPartial(object: Partial<_6.EventCancelSpotOrder>): _6.EventCancelSpotOrder;
            };
            EventSpotMarketUpdate: {
                encode(message: _6.EventSpotMarketUpdate, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _6.EventSpotMarketUpdate;
                fromPartial(object: Partial<_6.EventSpotMarketUpdate>): _6.EventSpotMarketUpdate;
            };
            EventPerpetualMarketUpdate: {
                encode(message: _6.EventPerpetualMarketUpdate, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _6.EventPerpetualMarketUpdate;
                fromPartial(object: Partial<_6.EventPerpetualMarketUpdate>): _6.EventPerpetualMarketUpdate;
            };
            EventExpiryFuturesMarketUpdate: {
                encode(message: _6.EventExpiryFuturesMarketUpdate, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _6.EventExpiryFuturesMarketUpdate;
                fromPartial(object: Partial<_6.EventExpiryFuturesMarketUpdate>): _6.EventExpiryFuturesMarketUpdate;
            };
            EventPerpetualMarketFundingUpdate: {
                encode(message: _6.EventPerpetualMarketFundingUpdate, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _6.EventPerpetualMarketFundingUpdate;
                fromPartial(object: Partial<_6.EventPerpetualMarketFundingUpdate>): _6.EventPerpetualMarketFundingUpdate;
            };
            EventSubaccountDeposit: {
                encode(message: _6.EventSubaccountDeposit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _6.EventSubaccountDeposit;
                fromPartial(object: Partial<_6.EventSubaccountDeposit>): _6.EventSubaccountDeposit;
            };
            EventSubaccountWithdraw: {
                encode(message: _6.EventSubaccountWithdraw, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _6.EventSubaccountWithdraw;
                fromPartial(object: Partial<_6.EventSubaccountWithdraw>): _6.EventSubaccountWithdraw;
            };
            EventSubaccountBalanceTransfer: {
                encode(message: _6.EventSubaccountBalanceTransfer, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _6.EventSubaccountBalanceTransfer;
                fromPartial(object: Partial<_6.EventSubaccountBalanceTransfer>): _6.EventSubaccountBalanceTransfer;
            };
            EventBatchDepositUpdate: {
                encode(message: _6.EventBatchDepositUpdate, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _6.EventBatchDepositUpdate;
                fromPartial(object: Partial<_6.EventBatchDepositUpdate>): _6.EventBatchDepositUpdate;
            };
            DerivativeMarketOrderCancel: {
                encode(message: _6.DerivativeMarketOrderCancel, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _6.DerivativeMarketOrderCancel;
                fromPartial(object: Partial<_6.DerivativeMarketOrderCancel>): _6.DerivativeMarketOrderCancel;
            };
            EventCancelDerivativeOrder: {
                encode(message: _6.EventCancelDerivativeOrder, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _6.EventCancelDerivativeOrder;
                fromPartial(object: Partial<_6.EventCancelDerivativeOrder>): _6.EventCancelDerivativeOrder;
            };
            EventFeeDiscountSchedule: {
                encode(message: _6.EventFeeDiscountSchedule, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _6.EventFeeDiscountSchedule;
                fromPartial(object: Partial<_6.EventFeeDiscountSchedule>): _6.EventFeeDiscountSchedule;
            };
            EventTradingRewardCampaignUpdate: {
                encode(message: _6.EventTradingRewardCampaignUpdate, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _6.EventTradingRewardCampaignUpdate;
                fromPartial(object: Partial<_6.EventTradingRewardCampaignUpdate>): _6.EventTradingRewardCampaignUpdate;
            };
            EventTradingRewardDistribution: {
                encode(message: _6.EventTradingRewardDistribution, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _6.EventTradingRewardDistribution;
                fromPartial(object: Partial<_6.EventTradingRewardDistribution>): _6.EventTradingRewardDistribution;
            };
            EventNewConditionalDerivativeOrder: {
                encode(message: _6.EventNewConditionalDerivativeOrder, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _6.EventNewConditionalDerivativeOrder;
                fromPartial(object: Partial<_6.EventNewConditionalDerivativeOrder>): _6.EventNewConditionalDerivativeOrder;
            };
            EventCancelConditionalDerivativeOrder: {
                encode(message: _6.EventCancelConditionalDerivativeOrder, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _6.EventCancelConditionalDerivativeOrder;
                fromPartial(object: Partial<_6.EventCancelConditionalDerivativeOrder>): _6.EventCancelConditionalDerivativeOrder;
            };
            EventConditionalDerivativeOrderTrigger: {
                encode(message: _6.EventConditionalDerivativeOrderTrigger, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _6.EventConditionalDerivativeOrderTrigger;
                fromPartial(object: Partial<_6.EventConditionalDerivativeOrderTrigger>): _6.EventConditionalDerivativeOrderTrigger;
            };
            EventOrderFail: {
                encode(message: _6.EventOrderFail, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _6.EventOrderFail;
                fromPartial(object: Partial<_6.EventOrderFail>): _6.EventOrderFail;
            };
            EventAtomicMarketOrderFeeMultipliersUpdated: {
                encode(message: _6.EventAtomicMarketOrderFeeMultipliersUpdated, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _6.EventAtomicMarketOrderFeeMultipliersUpdated;
                fromPartial(object: Partial<_6.EventAtomicMarketOrderFeeMultipliersUpdated>): _6.EventAtomicMarketOrderFeeMultipliersUpdated;
            };
            EventOrderbookUpdate: {
                encode(message: _6.EventOrderbookUpdate, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _6.EventOrderbookUpdate;
                fromPartial(object: Partial<_6.EventOrderbookUpdate>): _6.EventOrderbookUpdate;
            };
            OrderbookUpdate: {
                encode(message: _6.OrderbookUpdate, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _6.OrderbookUpdate;
                fromPartial(object: Partial<_6.OrderbookUpdate>): _6.OrderbookUpdate;
            };
            Orderbook: {
                encode(message: _6.Orderbook, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _6.Orderbook;
                fromPartial(object: Partial<_6.Orderbook>): _6.Orderbook;
            };
            CreateSpotLimitOrderAuthz: {
                encode(message: _5.CreateSpotLimitOrderAuthz, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _5.CreateSpotLimitOrderAuthz;
                fromPartial(object: Partial<_5.CreateSpotLimitOrderAuthz>): _5.CreateSpotLimitOrderAuthz;
            };
            CreateSpotMarketOrderAuthz: {
                encode(message: _5.CreateSpotMarketOrderAuthz, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _5.CreateSpotMarketOrderAuthz;
                fromPartial(object: Partial<_5.CreateSpotMarketOrderAuthz>): _5.CreateSpotMarketOrderAuthz;
            };
            BatchCreateSpotLimitOrdersAuthz: {
                encode(message: _5.BatchCreateSpotLimitOrdersAuthz, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _5.BatchCreateSpotLimitOrdersAuthz;
                fromPartial(object: Partial<_5.BatchCreateSpotLimitOrdersAuthz>): _5.BatchCreateSpotLimitOrdersAuthz;
            };
            CancelSpotOrderAuthz: {
                encode(message: _5.CancelSpotOrderAuthz, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _5.CancelSpotOrderAuthz;
                fromPartial(object: Partial<_5.CancelSpotOrderAuthz>): _5.CancelSpotOrderAuthz;
            };
            BatchCancelSpotOrdersAuthz: {
                encode(message: _5.BatchCancelSpotOrdersAuthz, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _5.BatchCancelSpotOrdersAuthz;
                fromPartial(object: Partial<_5.BatchCancelSpotOrdersAuthz>): _5.BatchCancelSpotOrdersAuthz;
            };
            CreateDerivativeLimitOrderAuthz: {
                encode(message: _5.CreateDerivativeLimitOrderAuthz, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _5.CreateDerivativeLimitOrderAuthz;
                fromPartial(object: Partial<_5.CreateDerivativeLimitOrderAuthz>): _5.CreateDerivativeLimitOrderAuthz;
            };
            CreateDerivativeMarketOrderAuthz: {
                encode(message: _5.CreateDerivativeMarketOrderAuthz, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _5.CreateDerivativeMarketOrderAuthz;
                fromPartial(object: Partial<_5.CreateDerivativeMarketOrderAuthz>): _5.CreateDerivativeMarketOrderAuthz;
            };
            BatchCreateDerivativeLimitOrdersAuthz: {
                encode(message: _5.BatchCreateDerivativeLimitOrdersAuthz, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _5.BatchCreateDerivativeLimitOrdersAuthz;
                fromPartial(object: Partial<_5.BatchCreateDerivativeLimitOrdersAuthz>): _5.BatchCreateDerivativeLimitOrdersAuthz;
            };
            CancelDerivativeOrderAuthz: {
                encode(message: _5.CancelDerivativeOrderAuthz, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _5.CancelDerivativeOrderAuthz;
                fromPartial(object: Partial<_5.CancelDerivativeOrderAuthz>): _5.CancelDerivativeOrderAuthz;
            };
            BatchCancelDerivativeOrdersAuthz: {
                encode(message: _5.BatchCancelDerivativeOrdersAuthz, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _5.BatchCancelDerivativeOrdersAuthz;
                fromPartial(object: Partial<_5.BatchCancelDerivativeOrdersAuthz>): _5.BatchCancelDerivativeOrdersAuthz;
            };
            BatchUpdateOrdersAuthz: {
                encode(message: _5.BatchUpdateOrdersAuthz, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _5.BatchUpdateOrdersAuthz;
                fromPartial(object: Partial<_5.BatchUpdateOrdersAuthz>): _5.BatchUpdateOrdersAuthz;
            };
        };
    }
    namespace insurance {
        const v1beta1: {
            MsgClientImpl: typeof _237.MsgClientImpl;
            QueryClientImpl: typeof _229.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                insuranceParams(request?: _13.QueryInsuranceParamsRequest): Promise<_13.QueryInsuranceParamsResponse>;
                insuranceFund(request: _13.QueryInsuranceFundRequest): Promise<_13.QueryInsuranceFundResponse>;
                insuranceFunds(request?: _13.QueryInsuranceFundsRequest): Promise<_13.QueryInsuranceFundsResponse>;
                estimatedRedemptions(request: _13.QueryEstimatedRedemptionsRequest): Promise<_13.QueryEstimatedRedemptionsResponse>;
                pendingRedemptions(request: _13.QueryPendingRedemptionsRequest): Promise<_13.QueryPendingRedemptionsResponse>;
                insuranceModuleState(request?: _13.QueryModuleStateRequest): Promise<_13.QueryModuleStateResponse>;
            };
            LCDQueryClient: typeof _221.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    createInsuranceFund(value: _14.MsgCreateInsuranceFund): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    underwrite(value: _14.MsgUnderwrite): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    requestRedemption(value: _14.MsgRequestRedemption): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    updateParams(value: _14.MsgUpdateParams): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    createInsuranceFund(value: _14.MsgCreateInsuranceFund): {
                        typeUrl: string;
                        value: _14.MsgCreateInsuranceFund;
                    };
                    underwrite(value: _14.MsgUnderwrite): {
                        typeUrl: string;
                        value: _14.MsgUnderwrite;
                    };
                    requestRedemption(value: _14.MsgRequestRedemption): {
                        typeUrl: string;
                        value: _14.MsgRequestRedemption;
                    };
                    updateParams(value: _14.MsgUpdateParams): {
                        typeUrl: string;
                        value: _14.MsgUpdateParams;
                    };
                };
                fromJSON: {
                    createInsuranceFund(value: any): {
                        typeUrl: string;
                        value: _14.MsgCreateInsuranceFund;
                    };
                    underwrite(value: any): {
                        typeUrl: string;
                        value: _14.MsgUnderwrite;
                    };
                    requestRedemption(value: any): {
                        typeUrl: string;
                        value: _14.MsgRequestRedemption;
                    };
                    updateParams(value: any): {
                        typeUrl: string;
                        value: _14.MsgUpdateParams;
                    };
                };
                fromPartial: {
                    createInsuranceFund(value: _14.MsgCreateInsuranceFund): {
                        typeUrl: string;
                        value: _14.MsgCreateInsuranceFund;
                    };
                    underwrite(value: _14.MsgUnderwrite): {
                        typeUrl: string;
                        value: _14.MsgUnderwrite;
                    };
                    requestRedemption(value: _14.MsgRequestRedemption): {
                        typeUrl: string;
                        value: _14.MsgRequestRedemption;
                    };
                    updateParams(value: _14.MsgUpdateParams): {
                        typeUrl: string;
                        value: _14.MsgUpdateParams;
                    };
                };
            };
            AminoConverter: {
                "/injective.insurance.v1beta1.MsgCreateInsuranceFund": {
                    aminoType: string;
                    toAmino: ({ sender, ticker, quoteDenom, oracleBase, oracleQuote, oracleType, expiry, initialDeposit }: _14.MsgCreateInsuranceFund) => {
                        sender: string;
                        ticker: string;
                        quote_denom: string;
                        oracle_base: string;
                        oracle_quote: string;
                        oracle_type: number;
                        expiry: string;
                        initial_deposit: {
                            denom: string;
                            amount: string;
                        };
                    };
                    fromAmino: ({ sender, ticker, quote_denom, oracle_base, oracle_quote, oracle_type, expiry, initial_deposit }: {
                        sender: string;
                        ticker: string;
                        quote_denom: string;
                        oracle_base: string;
                        oracle_quote: string;
                        oracle_type: number;
                        expiry: string;
                        initial_deposit: {
                            denom: string;
                            amount: string;
                        };
                    }) => _14.MsgCreateInsuranceFund;
                };
                "/injective.insurance.v1beta1.MsgUnderwrite": {
                    aminoType: string;
                    toAmino: ({ sender, marketId, deposit }: _14.MsgUnderwrite) => {
                        sender: string;
                        market_id: string;
                        deposit: {
                            denom: string;
                            amount: string;
                        };
                    };
                    fromAmino: ({ sender, market_id, deposit }: {
                        sender: string;
                        market_id: string;
                        deposit: {
                            denom: string;
                            amount: string;
                        };
                    }) => _14.MsgUnderwrite;
                };
                "/injective.insurance.v1beta1.MsgRequestRedemption": {
                    aminoType: string;
                    toAmino: ({ sender, marketId, amount }: _14.MsgRequestRedemption) => {
                        sender: string;
                        market_id: string;
                        amount: {
                            denom: string;
                            amount: string;
                        };
                    };
                    fromAmino: ({ sender, market_id, amount }: {
                        sender: string;
                        market_id: string;
                        amount: {
                            denom: string;
                            amount: string;
                        };
                    }) => _14.MsgRequestRedemption;
                };
                "/injective.insurance.v1beta1.MsgUpdateParams": {
                    aminoType: string;
                    toAmino: ({ authority, params }: _14.MsgUpdateParams) => {
                        authority: string;
                        params: {
                            default_redemption_notice_period_duration: {
                                seconds: string;
                                nanos: number;
                            };
                        };
                    };
                    fromAmino: ({ authority, params }: {
                        authority: string;
                        params: {
                            default_redemption_notice_period_duration: {
                                seconds: string;
                                nanos: number;
                            };
                        };
                    }) => _14.MsgUpdateParams;
                };
            };
            MsgCreateInsuranceFund: {
                encode(message: _14.MsgCreateInsuranceFund, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _14.MsgCreateInsuranceFund;
                fromPartial(object: Partial<_14.MsgCreateInsuranceFund>): _14.MsgCreateInsuranceFund;
            };
            MsgCreateInsuranceFundResponse: {
                encode(_: _14.MsgCreateInsuranceFundResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _14.MsgCreateInsuranceFundResponse;
                fromPartial(_: Partial<_14.MsgCreateInsuranceFundResponse>): _14.MsgCreateInsuranceFundResponse;
            };
            MsgUnderwrite: {
                encode(message: _14.MsgUnderwrite, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _14.MsgUnderwrite;
                fromPartial(object: Partial<_14.MsgUnderwrite>): _14.MsgUnderwrite;
            };
            MsgUnderwriteResponse: {
                encode(_: _14.MsgUnderwriteResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _14.MsgUnderwriteResponse;
                fromPartial(_: Partial<_14.MsgUnderwriteResponse>): _14.MsgUnderwriteResponse;
            };
            MsgRequestRedemption: {
                encode(message: _14.MsgRequestRedemption, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _14.MsgRequestRedemption;
                fromPartial(object: Partial<_14.MsgRequestRedemption>): _14.MsgRequestRedemption;
            };
            MsgRequestRedemptionResponse: {
                encode(_: _14.MsgRequestRedemptionResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _14.MsgRequestRedemptionResponse;
                fromPartial(_: Partial<_14.MsgRequestRedemptionResponse>): _14.MsgRequestRedemptionResponse;
            };
            MsgUpdateParams: {
                encode(message: _14.MsgUpdateParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _14.MsgUpdateParams;
                fromPartial(object: Partial<_14.MsgUpdateParams>): _14.MsgUpdateParams;
            };
            MsgUpdateParamsResponse: {
                encode(_: _14.MsgUpdateParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _14.MsgUpdateParamsResponse;
                fromPartial(_: Partial<_14.MsgUpdateParamsResponse>): _14.MsgUpdateParamsResponse;
            };
            QueryInsuranceParamsRequest: {
                encode(_: _13.QueryInsuranceParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _13.QueryInsuranceParamsRequest;
                fromPartial(_: Partial<_13.QueryInsuranceParamsRequest>): _13.QueryInsuranceParamsRequest;
            };
            QueryInsuranceParamsResponse: {
                encode(message: _13.QueryInsuranceParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _13.QueryInsuranceParamsResponse;
                fromPartial(object: Partial<_13.QueryInsuranceParamsResponse>): _13.QueryInsuranceParamsResponse;
            };
            QueryInsuranceFundRequest: {
                encode(message: _13.QueryInsuranceFundRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _13.QueryInsuranceFundRequest;
                fromPartial(object: Partial<_13.QueryInsuranceFundRequest>): _13.QueryInsuranceFundRequest;
            };
            QueryInsuranceFundResponse: {
                encode(message: _13.QueryInsuranceFundResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _13.QueryInsuranceFundResponse;
                fromPartial(object: Partial<_13.QueryInsuranceFundResponse>): _13.QueryInsuranceFundResponse;
            };
            QueryInsuranceFundsRequest: {
                encode(_: _13.QueryInsuranceFundsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _13.QueryInsuranceFundsRequest;
                fromPartial(_: Partial<_13.QueryInsuranceFundsRequest>): _13.QueryInsuranceFundsRequest;
            };
            QueryInsuranceFundsResponse: {
                encode(message: _13.QueryInsuranceFundsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _13.QueryInsuranceFundsResponse;
                fromPartial(object: Partial<_13.QueryInsuranceFundsResponse>): _13.QueryInsuranceFundsResponse;
            };
            QueryEstimatedRedemptionsRequest: {
                encode(message: _13.QueryEstimatedRedemptionsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _13.QueryEstimatedRedemptionsRequest;
                fromPartial(object: Partial<_13.QueryEstimatedRedemptionsRequest>): _13.QueryEstimatedRedemptionsRequest;
            };
            QueryEstimatedRedemptionsResponse: {
                encode(message: _13.QueryEstimatedRedemptionsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _13.QueryEstimatedRedemptionsResponse;
                fromPartial(object: Partial<_13.QueryEstimatedRedemptionsResponse>): _13.QueryEstimatedRedemptionsResponse;
            };
            QueryPendingRedemptionsRequest: {
                encode(message: _13.QueryPendingRedemptionsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _13.QueryPendingRedemptionsRequest;
                fromPartial(object: Partial<_13.QueryPendingRedemptionsRequest>): _13.QueryPendingRedemptionsRequest;
            };
            QueryPendingRedemptionsResponse: {
                encode(message: _13.QueryPendingRedemptionsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _13.QueryPendingRedemptionsResponse;
                fromPartial(object: Partial<_13.QueryPendingRedemptionsResponse>): _13.QueryPendingRedemptionsResponse;
            };
            QueryModuleStateRequest: {
                encode(_: _13.QueryModuleStateRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _13.QueryModuleStateRequest;
                fromPartial(_: Partial<_13.QueryModuleStateRequest>): _13.QueryModuleStateRequest;
            };
            QueryModuleStateResponse: {
                encode(message: _13.QueryModuleStateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _13.QueryModuleStateResponse;
                fromPartial(object: Partial<_13.QueryModuleStateResponse>): _13.QueryModuleStateResponse;
            };
            Params: {
                encode(message: _12.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _12.Params;
                fromPartial(object: Partial<_12.Params>): _12.Params;
            };
            InsuranceFund: {
                encode(message: _12.InsuranceFund, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _12.InsuranceFund;
                fromPartial(object: Partial<_12.InsuranceFund>): _12.InsuranceFund;
            };
            RedemptionSchedule: {
                encode(message: _12.RedemptionSchedule, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _12.RedemptionSchedule;
                fromPartial(object: Partial<_12.RedemptionSchedule>): _12.RedemptionSchedule;
            };
            EventInsuranceFundUpdate: {
                encode(message: _12.EventInsuranceFundUpdate, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _12.EventInsuranceFundUpdate;
                fromPartial(object: Partial<_12.EventInsuranceFundUpdate>): _12.EventInsuranceFundUpdate;
            };
            EventRequestRedemption: {
                encode(message: _12.EventRequestRedemption, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _12.EventRequestRedemption;
                fromPartial(object: Partial<_12.EventRequestRedemption>): _12.EventRequestRedemption;
            };
            EventWithdrawRedemption: {
                encode(message: _12.EventWithdrawRedemption, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _12.EventWithdrawRedemption;
                fromPartial(object: Partial<_12.EventWithdrawRedemption>): _12.EventWithdrawRedemption;
            };
            EventUnderwrite: {
                encode(message: _12.EventUnderwrite, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _12.EventUnderwrite;
                fromPartial(object: Partial<_12.EventUnderwrite>): _12.EventUnderwrite;
            };
            GenesisState: {
                encode(message: _11.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _11.GenesisState;
                fromPartial(object: Partial<_11.GenesisState>): _11.GenesisState;
            };
        };
    }
    namespace ocr {
        const v1beta1: {
            MsgClientImpl: typeof _238.MsgClientImpl;
            QueryClientImpl: typeof _230.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                params(request?: _17.QueryParamsRequest): Promise<_17.QueryParamsResponse>;
                feedConfig(request: _17.QueryFeedConfigRequest): Promise<_17.QueryFeedConfigResponse>;
                feedConfigInfo(request: _17.QueryFeedConfigInfoRequest): Promise<_17.QueryFeedConfigInfoResponse>;
                latestRound(request: _17.QueryLatestRoundRequest): Promise<_17.QueryLatestRoundResponse>;
                latestTransmissionDetails(request: _17.QueryLatestTransmissionDetailsRequest): Promise<_17.QueryLatestTransmissionDetailsResponse>;
                owedAmount(request: _17.QueryOwedAmountRequest): Promise<_17.QueryOwedAmountResponse>;
                ocrModuleState(request?: _17.QueryModuleStateRequest): Promise<_17.QueryModuleStateResponse>;
            };
            LCDQueryClient: typeof _222.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    createFeed(value: _18.MsgCreateFeed): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    updateFeed(value: _18.MsgUpdateFeed): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    transmit(value: _18.MsgTransmit): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    fundFeedRewardPool(value: _18.MsgFundFeedRewardPool): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    withdrawFeedRewardPool(value: _18.MsgWithdrawFeedRewardPool): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    setPayees(value: _18.MsgSetPayees): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    transferPayeeship(value: _18.MsgTransferPayeeship): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    acceptPayeeship(value: _18.MsgAcceptPayeeship): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    updateParams(value: _18.MsgUpdateParams): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    createFeed(value: _18.MsgCreateFeed): {
                        typeUrl: string;
                        value: _18.MsgCreateFeed;
                    };
                    updateFeed(value: _18.MsgUpdateFeed): {
                        typeUrl: string;
                        value: _18.MsgUpdateFeed;
                    };
                    transmit(value: _18.MsgTransmit): {
                        typeUrl: string;
                        value: _18.MsgTransmit;
                    };
                    fundFeedRewardPool(value: _18.MsgFundFeedRewardPool): {
                        typeUrl: string;
                        value: _18.MsgFundFeedRewardPool;
                    };
                    withdrawFeedRewardPool(value: _18.MsgWithdrawFeedRewardPool): {
                        typeUrl: string;
                        value: _18.MsgWithdrawFeedRewardPool;
                    };
                    setPayees(value: _18.MsgSetPayees): {
                        typeUrl: string;
                        value: _18.MsgSetPayees;
                    };
                    transferPayeeship(value: _18.MsgTransferPayeeship): {
                        typeUrl: string;
                        value: _18.MsgTransferPayeeship;
                    };
                    acceptPayeeship(value: _18.MsgAcceptPayeeship): {
                        typeUrl: string;
                        value: _18.MsgAcceptPayeeship;
                    };
                    updateParams(value: _18.MsgUpdateParams): {
                        typeUrl: string;
                        value: _18.MsgUpdateParams;
                    };
                };
                fromJSON: {
                    createFeed(value: any): {
                        typeUrl: string;
                        value: _18.MsgCreateFeed;
                    };
                    updateFeed(value: any): {
                        typeUrl: string;
                        value: _18.MsgUpdateFeed;
                    };
                    transmit(value: any): {
                        typeUrl: string;
                        value: _18.MsgTransmit;
                    };
                    fundFeedRewardPool(value: any): {
                        typeUrl: string;
                        value: _18.MsgFundFeedRewardPool;
                    };
                    withdrawFeedRewardPool(value: any): {
                        typeUrl: string;
                        value: _18.MsgWithdrawFeedRewardPool;
                    };
                    setPayees(value: any): {
                        typeUrl: string;
                        value: _18.MsgSetPayees;
                    };
                    transferPayeeship(value: any): {
                        typeUrl: string;
                        value: _18.MsgTransferPayeeship;
                    };
                    acceptPayeeship(value: any): {
                        typeUrl: string;
                        value: _18.MsgAcceptPayeeship;
                    };
                    updateParams(value: any): {
                        typeUrl: string;
                        value: _18.MsgUpdateParams;
                    };
                };
                fromPartial: {
                    createFeed(value: _18.MsgCreateFeed): {
                        typeUrl: string;
                        value: _18.MsgCreateFeed;
                    };
                    updateFeed(value: _18.MsgUpdateFeed): {
                        typeUrl: string;
                        value: _18.MsgUpdateFeed;
                    };
                    transmit(value: _18.MsgTransmit): {
                        typeUrl: string;
                        value: _18.MsgTransmit;
                    };
                    fundFeedRewardPool(value: _18.MsgFundFeedRewardPool): {
                        typeUrl: string;
                        value: _18.MsgFundFeedRewardPool;
                    };
                    withdrawFeedRewardPool(value: _18.MsgWithdrawFeedRewardPool): {
                        typeUrl: string;
                        value: _18.MsgWithdrawFeedRewardPool;
                    };
                    setPayees(value: _18.MsgSetPayees): {
                        typeUrl: string;
                        value: _18.MsgSetPayees;
                    };
                    transferPayeeship(value: _18.MsgTransferPayeeship): {
                        typeUrl: string;
                        value: _18.MsgTransferPayeeship;
                    };
                    acceptPayeeship(value: _18.MsgAcceptPayeeship): {
                        typeUrl: string;
                        value: _18.MsgAcceptPayeeship;
                    };
                    updateParams(value: _18.MsgUpdateParams): {
                        typeUrl: string;
                        value: _18.MsgUpdateParams;
                    };
                };
            };
            AminoConverter: {
                "/injective.ocr.v1beta1.MsgCreateFeed": {
                    aminoType: string;
                    toAmino: ({ sender, config }: _18.MsgCreateFeed) => {
                        sender: string;
                        config: {
                            signers: string[];
                            transmitters: string[];
                            f: number;
                            onchain_config: Uint8Array;
                            offchain_config_version: string;
                            offchain_config: Uint8Array;
                            module_params: {
                                feed_id: string;
                                min_answer: string;
                                max_answer: string;
                                link_per_observation: string;
                                link_per_transmission: string;
                                link_denom: string;
                                unique_reports: boolean;
                                description: string;
                                feed_admin: string;
                                billing_admin: string;
                            };
                        };
                    };
                    fromAmino: ({ sender, config }: {
                        sender: string;
                        config: {
                            signers: string[];
                            transmitters: string[];
                            f: number;
                            onchain_config: Uint8Array;
                            offchain_config_version: string;
                            offchain_config: Uint8Array;
                            module_params: {
                                feed_id: string;
                                min_answer: string;
                                max_answer: string;
                                link_per_observation: string;
                                link_per_transmission: string;
                                link_denom: string;
                                unique_reports: boolean;
                                description: string;
                                feed_admin: string;
                                billing_admin: string;
                            };
                        };
                    }) => _18.MsgCreateFeed;
                };
                "/injective.ocr.v1beta1.MsgUpdateFeed": {
                    aminoType: string;
                    toAmino: ({ sender, feedId, signers, transmitters, linkPerObservation, linkPerTransmission, linkDenom, feedAdmin, billingAdmin }: _18.MsgUpdateFeed) => {
                        sender: string;
                        feed_id: string;
                        signers: string[];
                        transmitters: string[];
                        link_per_observation: string;
                        link_per_transmission: string;
                        link_denom: string;
                        feed_admin: string;
                        billing_admin: string;
                    };
                    fromAmino: ({ sender, feed_id, signers, transmitters, link_per_observation, link_per_transmission, link_denom, feed_admin, billing_admin }: {
                        sender: string;
                        feed_id: string;
                        signers: string[];
                        transmitters: string[];
                        link_per_observation: string;
                        link_per_transmission: string;
                        link_denom: string;
                        feed_admin: string;
                        billing_admin: string;
                    }) => _18.MsgUpdateFeed;
                };
                "/injective.ocr.v1beta1.MsgTransmit": {
                    aminoType: string;
                    toAmino: ({ transmitter, configDigest, feedId, epoch, round, extraHash, report, signatures }: _18.MsgTransmit) => {
                        transmitter: string;
                        config_digest: Uint8Array;
                        feed_id: string;
                        epoch: string;
                        round: string;
                        extra_hash: Uint8Array;
                        report: {
                            observations_timestamp: string;
                            observers: Uint8Array;
                            observations: string[];
                        };
                        signatures: Uint8Array[];
                    };
                    fromAmino: ({ transmitter, config_digest, feed_id, epoch, round, extra_hash, report, signatures }: {
                        transmitter: string;
                        config_digest: Uint8Array;
                        feed_id: string;
                        epoch: string;
                        round: string;
                        extra_hash: Uint8Array;
                        report: {
                            observations_timestamp: string;
                            observers: Uint8Array;
                            observations: string[];
                        };
                        signatures: Uint8Array[];
                    }) => _18.MsgTransmit;
                };
                "/injective.ocr.v1beta1.MsgFundFeedRewardPool": {
                    aminoType: string;
                    toAmino: ({ sender, feedId, amount }: _18.MsgFundFeedRewardPool) => {
                        sender: string;
                        feed_id: string;
                        amount: {
                            denom: string;
                            amount: string;
                        };
                    };
                    fromAmino: ({ sender, feed_id, amount }: {
                        sender: string;
                        feed_id: string;
                        amount: {
                            denom: string;
                            amount: string;
                        };
                    }) => _18.MsgFundFeedRewardPool;
                };
                "/injective.ocr.v1beta1.MsgWithdrawFeedRewardPool": {
                    aminoType: string;
                    toAmino: ({ sender, feedId, amount }: _18.MsgWithdrawFeedRewardPool) => {
                        sender: string;
                        feed_id: string;
                        amount: {
                            denom: string;
                            amount: string;
                        };
                    };
                    fromAmino: ({ sender, feed_id, amount }: {
                        sender: string;
                        feed_id: string;
                        amount: {
                            denom: string;
                            amount: string;
                        };
                    }) => _18.MsgWithdrawFeedRewardPool;
                };
                "/injective.ocr.v1beta1.MsgSetPayees": {
                    aminoType: string;
                    toAmino: ({ sender, feedId, transmitters, payees }: _18.MsgSetPayees) => {
                        sender: string;
                        feed_id: string;
                        transmitters: string[];
                        payees: string[];
                    };
                    fromAmino: ({ sender, feed_id, transmitters, payees }: {
                        sender: string;
                        feed_id: string;
                        transmitters: string[];
                        payees: string[];
                    }) => _18.MsgSetPayees;
                };
                "/injective.ocr.v1beta1.MsgTransferPayeeship": {
                    aminoType: string;
                    toAmino: ({ sender, transmitter, feedId, proposed }: _18.MsgTransferPayeeship) => {
                        sender: string;
                        transmitter: string;
                        feed_id: string;
                        proposed: string;
                    };
                    fromAmino: ({ sender, transmitter, feed_id, proposed }: {
                        sender: string;
                        transmitter: string;
                        feed_id: string;
                        proposed: string;
                    }) => _18.MsgTransferPayeeship;
                };
                "/injective.ocr.v1beta1.MsgAcceptPayeeship": {
                    aminoType: string;
                    toAmino: ({ payee, transmitter, feedId }: _18.MsgAcceptPayeeship) => {
                        payee: string;
                        transmitter: string;
                        feed_id: string;
                    };
                    fromAmino: ({ payee, transmitter, feed_id }: {
                        payee: string;
                        transmitter: string;
                        feed_id: string;
                    }) => _18.MsgAcceptPayeeship;
                };
                "/injective.ocr.v1beta1.MsgUpdateParams": {
                    aminoType: string;
                    toAmino: ({ authority, params }: _18.MsgUpdateParams) => {
                        authority: string;
                        params: {
                            link_denom: string;
                            payout_block_interval: string;
                            module_admin: string;
                        };
                    };
                    fromAmino: ({ authority, params }: {
                        authority: string;
                        params: {
                            link_denom: string;
                            payout_block_interval: string;
                            module_admin: string;
                        };
                    }) => _18.MsgUpdateParams;
                };
            };
            MsgCreateFeed: {
                encode(message: _18.MsgCreateFeed, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _18.MsgCreateFeed;
                fromPartial(object: Partial<_18.MsgCreateFeed>): _18.MsgCreateFeed;
            };
            MsgCreateFeedResponse: {
                encode(_: _18.MsgCreateFeedResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _18.MsgCreateFeedResponse;
                fromPartial(_: Partial<_18.MsgCreateFeedResponse>): _18.MsgCreateFeedResponse;
            };
            MsgUpdateFeed: {
                encode(message: _18.MsgUpdateFeed, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _18.MsgUpdateFeed;
                fromPartial(object: Partial<_18.MsgUpdateFeed>): _18.MsgUpdateFeed;
            };
            MsgUpdateFeedResponse: {
                encode(_: _18.MsgUpdateFeedResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _18.MsgUpdateFeedResponse;
                fromPartial(_: Partial<_18.MsgUpdateFeedResponse>): _18.MsgUpdateFeedResponse;
            };
            MsgTransmit: {
                encode(message: _18.MsgTransmit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _18.MsgTransmit;
                fromPartial(object: Partial<_18.MsgTransmit>): _18.MsgTransmit;
            };
            MsgTransmitResponse: {
                encode(_: _18.MsgTransmitResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _18.MsgTransmitResponse;
                fromPartial(_: Partial<_18.MsgTransmitResponse>): _18.MsgTransmitResponse;
            };
            MsgFundFeedRewardPool: {
                encode(message: _18.MsgFundFeedRewardPool, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _18.MsgFundFeedRewardPool;
                fromPartial(object: Partial<_18.MsgFundFeedRewardPool>): _18.MsgFundFeedRewardPool;
            };
            MsgFundFeedRewardPoolResponse: {
                encode(_: _18.MsgFundFeedRewardPoolResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _18.MsgFundFeedRewardPoolResponse;
                fromPartial(_: Partial<_18.MsgFundFeedRewardPoolResponse>): _18.MsgFundFeedRewardPoolResponse;
            };
            MsgWithdrawFeedRewardPool: {
                encode(message: _18.MsgWithdrawFeedRewardPool, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _18.MsgWithdrawFeedRewardPool;
                fromPartial(object: Partial<_18.MsgWithdrawFeedRewardPool>): _18.MsgWithdrawFeedRewardPool;
            };
            MsgWithdrawFeedRewardPoolResponse: {
                encode(_: _18.MsgWithdrawFeedRewardPoolResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _18.MsgWithdrawFeedRewardPoolResponse;
                fromPartial(_: Partial<_18.MsgWithdrawFeedRewardPoolResponse>): _18.MsgWithdrawFeedRewardPoolResponse;
            };
            MsgSetPayees: {
                encode(message: _18.MsgSetPayees, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _18.MsgSetPayees;
                fromPartial(object: Partial<_18.MsgSetPayees>): _18.MsgSetPayees;
            };
            MsgSetPayeesResponse: {
                encode(_: _18.MsgSetPayeesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _18.MsgSetPayeesResponse;
                fromPartial(_: Partial<_18.MsgSetPayeesResponse>): _18.MsgSetPayeesResponse;
            };
            MsgTransferPayeeship: {
                encode(message: _18.MsgTransferPayeeship, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _18.MsgTransferPayeeship;
                fromPartial(object: Partial<_18.MsgTransferPayeeship>): _18.MsgTransferPayeeship;
            };
            MsgTransferPayeeshipResponse: {
                encode(_: _18.MsgTransferPayeeshipResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _18.MsgTransferPayeeshipResponse;
                fromPartial(_: Partial<_18.MsgTransferPayeeshipResponse>): _18.MsgTransferPayeeshipResponse;
            };
            MsgAcceptPayeeship: {
                encode(message: _18.MsgAcceptPayeeship, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _18.MsgAcceptPayeeship;
                fromPartial(object: Partial<_18.MsgAcceptPayeeship>): _18.MsgAcceptPayeeship;
            };
            MsgAcceptPayeeshipResponse: {
                encode(_: _18.MsgAcceptPayeeshipResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _18.MsgAcceptPayeeshipResponse;
                fromPartial(_: Partial<_18.MsgAcceptPayeeshipResponse>): _18.MsgAcceptPayeeshipResponse;
            };
            MsgUpdateParams: {
                encode(message: _18.MsgUpdateParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _18.MsgUpdateParams;
                fromPartial(object: Partial<_18.MsgUpdateParams>): _18.MsgUpdateParams;
            };
            MsgUpdateParamsResponse: {
                encode(_: _18.MsgUpdateParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _18.MsgUpdateParamsResponse;
                fromPartial(_: Partial<_18.MsgUpdateParamsResponse>): _18.MsgUpdateParamsResponse;
            };
            QueryParamsRequest: {
                encode(_: _17.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _17.QueryParamsRequest;
                fromPartial(_: Partial<_17.QueryParamsRequest>): _17.QueryParamsRequest;
            };
            QueryParamsResponse: {
                encode(message: _17.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _17.QueryParamsResponse;
                fromPartial(object: Partial<_17.QueryParamsResponse>): _17.QueryParamsResponse;
            };
            QueryFeedConfigRequest: {
                encode(message: _17.QueryFeedConfigRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _17.QueryFeedConfigRequest;
                fromPartial(object: Partial<_17.QueryFeedConfigRequest>): _17.QueryFeedConfigRequest;
            };
            QueryFeedConfigResponse: {
                encode(message: _17.QueryFeedConfigResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _17.QueryFeedConfigResponse;
                fromPartial(object: Partial<_17.QueryFeedConfigResponse>): _17.QueryFeedConfigResponse;
            };
            QueryFeedConfigInfoRequest: {
                encode(message: _17.QueryFeedConfigInfoRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _17.QueryFeedConfigInfoRequest;
                fromPartial(object: Partial<_17.QueryFeedConfigInfoRequest>): _17.QueryFeedConfigInfoRequest;
            };
            QueryFeedConfigInfoResponse: {
                encode(message: _17.QueryFeedConfigInfoResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _17.QueryFeedConfigInfoResponse;
                fromPartial(object: Partial<_17.QueryFeedConfigInfoResponse>): _17.QueryFeedConfigInfoResponse;
            };
            QueryLatestRoundRequest: {
                encode(message: _17.QueryLatestRoundRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _17.QueryLatestRoundRequest;
                fromPartial(object: Partial<_17.QueryLatestRoundRequest>): _17.QueryLatestRoundRequest;
            };
            QueryLatestRoundResponse: {
                encode(message: _17.QueryLatestRoundResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _17.QueryLatestRoundResponse;
                fromPartial(object: Partial<_17.QueryLatestRoundResponse>): _17.QueryLatestRoundResponse;
            };
            QueryLatestTransmissionDetailsRequest: {
                encode(message: _17.QueryLatestTransmissionDetailsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _17.QueryLatestTransmissionDetailsRequest;
                fromPartial(object: Partial<_17.QueryLatestTransmissionDetailsRequest>): _17.QueryLatestTransmissionDetailsRequest;
            };
            QueryLatestTransmissionDetailsResponse: {
                encode(message: _17.QueryLatestTransmissionDetailsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _17.QueryLatestTransmissionDetailsResponse;
                fromPartial(object: Partial<_17.QueryLatestTransmissionDetailsResponse>): _17.QueryLatestTransmissionDetailsResponse;
            };
            QueryOwedAmountRequest: {
                encode(message: _17.QueryOwedAmountRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _17.QueryOwedAmountRequest;
                fromPartial(object: Partial<_17.QueryOwedAmountRequest>): _17.QueryOwedAmountRequest;
            };
            QueryOwedAmountResponse: {
                encode(message: _17.QueryOwedAmountResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _17.QueryOwedAmountResponse;
                fromPartial(object: Partial<_17.QueryOwedAmountResponse>): _17.QueryOwedAmountResponse;
            };
            QueryModuleStateRequest: {
                encode(_: _17.QueryModuleStateRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _17.QueryModuleStateRequest;
                fromPartial(_: Partial<_17.QueryModuleStateRequest>): _17.QueryModuleStateRequest;
            };
            QueryModuleStateResponse: {
                encode(message: _17.QueryModuleStateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _17.QueryModuleStateResponse;
                fromPartial(object: Partial<_17.QueryModuleStateResponse>): _17.QueryModuleStateResponse;
            };
            Params: {
                encode(message: _16.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _16.Params;
                fromPartial(object: Partial<_16.Params>): _16.Params;
            };
            FeedConfig: {
                encode(message: _16.FeedConfig, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _16.FeedConfig;
                fromPartial(object: Partial<_16.FeedConfig>): _16.FeedConfig;
            };
            FeedConfigInfo: {
                encode(message: _16.FeedConfigInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _16.FeedConfigInfo;
                fromPartial(object: Partial<_16.FeedConfigInfo>): _16.FeedConfigInfo;
            };
            ModuleParams: {
                encode(message: _16.ModuleParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _16.ModuleParams;
                fromPartial(object: Partial<_16.ModuleParams>): _16.ModuleParams;
            };
            ContractConfig: {
                encode(message: _16.ContractConfig, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _16.ContractConfig;
                fromPartial(object: Partial<_16.ContractConfig>): _16.ContractConfig;
            };
            SetConfigProposal: {
                encode(message: _16.SetConfigProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _16.SetConfigProposal;
                fromPartial(object: Partial<_16.SetConfigProposal>): _16.SetConfigProposal;
            };
            FeedProperties: {
                encode(message: _16.FeedProperties, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _16.FeedProperties;
                fromPartial(object: Partial<_16.FeedProperties>): _16.FeedProperties;
            };
            SetBatchConfigProposal: {
                encode(message: _16.SetBatchConfigProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _16.SetBatchConfigProposal;
                fromPartial(object: Partial<_16.SetBatchConfigProposal>): _16.SetBatchConfigProposal;
            };
            OracleObservationsCounts: {
                encode(message: _16.OracleObservationsCounts, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _16.OracleObservationsCounts;
                fromPartial(object: Partial<_16.OracleObservationsCounts>): _16.OracleObservationsCounts;
            };
            GasReimbursements: {
                encode(message: _16.GasReimbursements, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _16.GasReimbursements;
                fromPartial(object: Partial<_16.GasReimbursements>): _16.GasReimbursements;
            };
            Payee: {
                encode(message: _16.Payee, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _16.Payee;
                fromPartial(object: Partial<_16.Payee>): _16.Payee;
            };
            Transmission: {
                encode(message: _16.Transmission, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _16.Transmission;
                fromPartial(object: Partial<_16.Transmission>): _16.Transmission;
            };
            EpochAndRound: {
                encode(message: _16.EpochAndRound, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _16.EpochAndRound;
                fromPartial(object: Partial<_16.EpochAndRound>): _16.EpochAndRound;
            };
            Report: {
                encode(message: _16.Report, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _16.Report;
                fromPartial(object: Partial<_16.Report>): _16.Report;
            };
            ReportToSign: {
                encode(message: _16.ReportToSign, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _16.ReportToSign;
                fromPartial(object: Partial<_16.ReportToSign>): _16.ReportToSign;
            };
            EventOraclePaid: {
                encode(message: _16.EventOraclePaid, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _16.EventOraclePaid;
                fromPartial(object: Partial<_16.EventOraclePaid>): _16.EventOraclePaid;
            };
            EventAnswerUpdated: {
                encode(message: _16.EventAnswerUpdated, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _16.EventAnswerUpdated;
                fromPartial(object: Partial<_16.EventAnswerUpdated>): _16.EventAnswerUpdated;
            };
            EventNewRound: {
                encode(message: _16.EventNewRound, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _16.EventNewRound;
                fromPartial(object: Partial<_16.EventNewRound>): _16.EventNewRound;
            };
            EventTransmitted: {
                encode(message: _16.EventTransmitted, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _16.EventTransmitted;
                fromPartial(object: Partial<_16.EventTransmitted>): _16.EventTransmitted;
            };
            EventNewTransmission: {
                encode(message: _16.EventNewTransmission, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _16.EventNewTransmission;
                fromPartial(object: Partial<_16.EventNewTransmission>): _16.EventNewTransmission;
            };
            EventConfigSet: {
                encode(message: _16.EventConfigSet, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _16.EventConfigSet;
                fromPartial(object: Partial<_16.EventConfigSet>): _16.EventConfigSet;
            };
            GenesisState: {
                encode(message: _15.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _15.GenesisState;
                fromPartial(object: Partial<_15.GenesisState>): _15.GenesisState;
            };
            FeedTransmission: {
                encode(message: _15.FeedTransmission, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _15.FeedTransmission;
                fromPartial(object: Partial<_15.FeedTransmission>): _15.FeedTransmission;
            };
            FeedEpochAndRound: {
                encode(message: _15.FeedEpochAndRound, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _15.FeedEpochAndRound;
                fromPartial(object: Partial<_15.FeedEpochAndRound>): _15.FeedEpochAndRound;
            };
            FeedLatestAggregatorRoundIDs: {
                encode(message: _15.FeedLatestAggregatorRoundIDs, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _15.FeedLatestAggregatorRoundIDs;
                fromPartial(object: Partial<_15.FeedLatestAggregatorRoundIDs>): _15.FeedLatestAggregatorRoundIDs;
            };
            RewardPool: {
                encode(message: _15.RewardPool, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _15.RewardPool;
                fromPartial(object: Partial<_15.RewardPool>): _15.RewardPool;
            };
            FeedCounts: {
                encode(message: _15.FeedCounts, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _15.FeedCounts;
                fromPartial(object: Partial<_15.FeedCounts>): _15.FeedCounts;
            };
            Count: {
                encode(message: _15.Count, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _15.Count;
                fromPartial(object: Partial<_15.Count>): _15.Count;
            };
            PendingPayeeship: {
                encode(message: _15.PendingPayeeship, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _15.PendingPayeeship;
                fromPartial(object: Partial<_15.PendingPayeeship>): _15.PendingPayeeship;
            };
        };
    }
    namespace oracle {
        const v1beta1: {
            MsgClientImpl: typeof _239.MsgClientImpl;
            QueryClientImpl: typeof _231.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                params(request?: _23.QueryParamsRequest): Promise<_23.QueryParamsResponse>;
                bandRelayers(request?: _23.QueryBandRelayersRequest): Promise<_23.QueryBandRelayersResponse>;
                bandPriceStates(request?: _23.QueryBandPriceStatesRequest): Promise<_23.QueryBandPriceStatesResponse>;
                bandIBCPriceStates(request?: _23.QueryBandIBCPriceStatesRequest): Promise<_23.QueryBandIBCPriceStatesResponse>;
                priceFeedPriceStates(request?: _23.QueryPriceFeedPriceStatesRequest): Promise<_23.QueryPriceFeedPriceStatesResponse>;
                coinbasePriceStates(request?: _23.QueryCoinbasePriceStatesRequest): Promise<_23.QueryCoinbasePriceStatesResponse>;
                pythPriceStates(request?: _23.QueryPythPriceStatesRequest): Promise<_23.QueryPythPriceStatesResponse>;
                providerPriceState(request: _23.QueryProviderPriceStateRequest): Promise<_23.QueryProviderPriceStateResponse>;
                oracleModuleState(request?: _23.QueryModuleStateRequest): Promise<_23.QueryModuleStateResponse>;
                historicalPriceRecords(request: _23.QueryHistoricalPriceRecordsRequest): Promise<_23.QueryHistoricalPriceRecordsResponse>;
                oracleVolatility(request: _23.QueryOracleVolatilityRequest): Promise<_23.QueryOracleVolatilityResponse>;
                oracleProvidersInfo(request?: _23.QueryOracleProvidersInfoRequest): Promise<_23.QueryOracleProvidersInfoResponse>;
                oracleProviderPrices(request: _23.QueryOracleProviderPricesRequest): Promise<_23.QueryOracleProviderPricesResponse>;
                oraclePrice(request: _23.QueryOraclePriceRequest): Promise<_23.QueryOraclePriceResponse>;
                pythPrice(request: _23.QueryPythPriceRequest): Promise<_23.QueryPythPriceResponse>;
            };
            LCDQueryClient: typeof _223.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    relayProviderPrices(value: _24.MsgRelayProviderPrices): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    relayPriceFeedPrice(value: _24.MsgRelayPriceFeedPrice): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    relayBandRates(value: _24.MsgRelayBandRates): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    requestBandIBCRates(value: _24.MsgRequestBandIBCRates): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    relayCoinbaseMessages(value: _24.MsgRelayCoinbaseMessages): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    relayPythPrices(value: _24.MsgRelayPythPrices): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    updateParams(value: _24.MsgUpdateParams): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    relayProviderPrices(value: _24.MsgRelayProviderPrices): {
                        typeUrl: string;
                        value: _24.MsgRelayProviderPrices;
                    };
                    relayPriceFeedPrice(value: _24.MsgRelayPriceFeedPrice): {
                        typeUrl: string;
                        value: _24.MsgRelayPriceFeedPrice;
                    };
                    relayBandRates(value: _24.MsgRelayBandRates): {
                        typeUrl: string;
                        value: _24.MsgRelayBandRates;
                    };
                    requestBandIBCRates(value: _24.MsgRequestBandIBCRates): {
                        typeUrl: string;
                        value: _24.MsgRequestBandIBCRates;
                    };
                    relayCoinbaseMessages(value: _24.MsgRelayCoinbaseMessages): {
                        typeUrl: string;
                        value: _24.MsgRelayCoinbaseMessages;
                    };
                    relayPythPrices(value: _24.MsgRelayPythPrices): {
                        typeUrl: string;
                        value: _24.MsgRelayPythPrices;
                    };
                    updateParams(value: _24.MsgUpdateParams): {
                        typeUrl: string;
                        value: _24.MsgUpdateParams;
                    };
                };
                fromJSON: {
                    relayProviderPrices(value: any): {
                        typeUrl: string;
                        value: _24.MsgRelayProviderPrices;
                    };
                    relayPriceFeedPrice(value: any): {
                        typeUrl: string;
                        value: _24.MsgRelayPriceFeedPrice;
                    };
                    relayBandRates(value: any): {
                        typeUrl: string;
                        value: _24.MsgRelayBandRates;
                    };
                    requestBandIBCRates(value: any): {
                        typeUrl: string;
                        value: _24.MsgRequestBandIBCRates;
                    };
                    relayCoinbaseMessages(value: any): {
                        typeUrl: string;
                        value: _24.MsgRelayCoinbaseMessages;
                    };
                    relayPythPrices(value: any): {
                        typeUrl: string;
                        value: _24.MsgRelayPythPrices;
                    };
                    updateParams(value: any): {
                        typeUrl: string;
                        value: _24.MsgUpdateParams;
                    };
                };
                fromPartial: {
                    relayProviderPrices(value: _24.MsgRelayProviderPrices): {
                        typeUrl: string;
                        value: _24.MsgRelayProviderPrices;
                    };
                    relayPriceFeedPrice(value: _24.MsgRelayPriceFeedPrice): {
                        typeUrl: string;
                        value: _24.MsgRelayPriceFeedPrice;
                    };
                    relayBandRates(value: _24.MsgRelayBandRates): {
                        typeUrl: string;
                        value: _24.MsgRelayBandRates;
                    };
                    requestBandIBCRates(value: _24.MsgRequestBandIBCRates): {
                        typeUrl: string;
                        value: _24.MsgRequestBandIBCRates;
                    };
                    relayCoinbaseMessages(value: _24.MsgRelayCoinbaseMessages): {
                        typeUrl: string;
                        value: _24.MsgRelayCoinbaseMessages;
                    };
                    relayPythPrices(value: _24.MsgRelayPythPrices): {
                        typeUrl: string;
                        value: _24.MsgRelayPythPrices;
                    };
                    updateParams(value: _24.MsgUpdateParams): {
                        typeUrl: string;
                        value: _24.MsgUpdateParams;
                    };
                };
            };
            AminoConverter: {
                "/injective.oracle.v1beta1.MsgRelayProviderPrices": {
                    aminoType: string;
                    toAmino: ({ sender, provider, symbols, prices }: _24.MsgRelayProviderPrices) => {
                        sender: string;
                        provider: string;
                        symbols: string[];
                        prices: string[];
                    };
                    fromAmino: ({ sender, provider, symbols, prices }: {
                        sender: string;
                        provider: string;
                        symbols: string[];
                        prices: string[];
                    }) => _24.MsgRelayProviderPrices;
                };
                "/injective.oracle.v1beta1.MsgRelayPriceFeedPrice": {
                    aminoType: string;
                    toAmino: ({ sender, base, quote, price }: _24.MsgRelayPriceFeedPrice) => {
                        sender: string;
                        base: string[];
                        quote: string[];
                        price: string[];
                    };
                    fromAmino: ({ sender, base, quote, price }: {
                        sender: string;
                        base: string[];
                        quote: string[];
                        price: string[];
                    }) => _24.MsgRelayPriceFeedPrice;
                };
                "/injective.oracle.v1beta1.MsgRelayBandRates": {
                    aminoType: string;
                    toAmino: ({ relayer, symbols, rates, resolveTimes, requestIDs }: _24.MsgRelayBandRates) => {
                        relayer: string;
                        symbols: string[];
                        rates: string[];
                        resolve_times: string[];
                        requestIDs: string[];
                    };
                    fromAmino: ({ relayer, symbols, rates, resolve_times, requestIDs }: {
                        relayer: string;
                        symbols: string[];
                        rates: string[];
                        resolve_times: string[];
                        requestIDs: string[];
                    }) => _24.MsgRelayBandRates;
                };
                "/injective.oracle.v1beta1.MsgRequestBandIBCRates": {
                    aminoType: string;
                    toAmino: ({ sender, requestId }: _24.MsgRequestBandIBCRates) => {
                        sender: string;
                        request_id: string;
                    };
                    fromAmino: ({ sender, request_id }: {
                        sender: string;
                        request_id: string;
                    }) => _24.MsgRequestBandIBCRates;
                };
                "/injective.oracle.v1beta1.MsgRelayCoinbaseMessages": {
                    aminoType: string;
                    toAmino: ({ sender, messages, signatures }: _24.MsgRelayCoinbaseMessages) => {
                        sender: string;
                        messages: Uint8Array[];
                        signatures: Uint8Array[];
                    };
                    fromAmino: ({ sender, messages, signatures }: {
                        sender: string;
                        messages: Uint8Array[];
                        signatures: Uint8Array[];
                    }) => _24.MsgRelayCoinbaseMessages;
                };
                "/injective.oracle.v1beta1.MsgRelayPythPrices": {
                    aminoType: string;
                    toAmino: ({ sender, priceAttestations }: _24.MsgRelayPythPrices) => {
                        sender: string;
                        price_attestations: {
                            price_id: string;
                            price: string;
                            conf: string;
                            expo: number;
                            ema_price: string;
                            ema_conf: string;
                            ema_expo: number;
                            publish_time: string;
                        }[];
                    };
                    fromAmino: ({ sender, price_attestations }: {
                        sender: string;
                        price_attestations: {
                            price_id: string;
                            price: string;
                            conf: string;
                            expo: number;
                            ema_price: string;
                            ema_conf: string;
                            ema_expo: number;
                            publish_time: string;
                        }[];
                    }) => _24.MsgRelayPythPrices;
                };
                "/injective.oracle.v1beta1.MsgUpdateParams": {
                    aminoType: string;
                    toAmino: ({ authority, params }: _24.MsgUpdateParams) => {
                        authority: string;
                        params: {
                            pyth_contract: string;
                        };
                    };
                    fromAmino: ({ authority, params }: {
                        authority: string;
                        params: {
                            pyth_contract: string;
                        };
                    }) => _24.MsgUpdateParams;
                };
            };
            MsgRelayProviderPrices: {
                encode(message: _24.MsgRelayProviderPrices, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _24.MsgRelayProviderPrices;
                fromPartial(object: Partial<_24.MsgRelayProviderPrices>): _24.MsgRelayProviderPrices;
            };
            MsgRelayProviderPricesResponse: {
                encode(_: _24.MsgRelayProviderPricesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _24.MsgRelayProviderPricesResponse;
                fromPartial(_: Partial<_24.MsgRelayProviderPricesResponse>): _24.MsgRelayProviderPricesResponse;
            };
            MsgRelayPriceFeedPrice: {
                encode(message: _24.MsgRelayPriceFeedPrice, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _24.MsgRelayPriceFeedPrice;
                fromPartial(object: Partial<_24.MsgRelayPriceFeedPrice>): _24.MsgRelayPriceFeedPrice;
            };
            MsgRelayPriceFeedPriceResponse: {
                encode(_: _24.MsgRelayPriceFeedPriceResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _24.MsgRelayPriceFeedPriceResponse;
                fromPartial(_: Partial<_24.MsgRelayPriceFeedPriceResponse>): _24.MsgRelayPriceFeedPriceResponse;
            };
            MsgRelayBandRates: {
                encode(message: _24.MsgRelayBandRates, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _24.MsgRelayBandRates;
                fromPartial(object: Partial<_24.MsgRelayBandRates>): _24.MsgRelayBandRates;
            };
            MsgRelayBandRatesResponse: {
                encode(_: _24.MsgRelayBandRatesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _24.MsgRelayBandRatesResponse;
                fromPartial(_: Partial<_24.MsgRelayBandRatesResponse>): _24.MsgRelayBandRatesResponse;
            };
            MsgRelayCoinbaseMessages: {
                encode(message: _24.MsgRelayCoinbaseMessages, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _24.MsgRelayCoinbaseMessages;
                fromPartial(object: Partial<_24.MsgRelayCoinbaseMessages>): _24.MsgRelayCoinbaseMessages;
            };
            MsgRelayCoinbaseMessagesResponse: {
                encode(_: _24.MsgRelayCoinbaseMessagesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _24.MsgRelayCoinbaseMessagesResponse;
                fromPartial(_: Partial<_24.MsgRelayCoinbaseMessagesResponse>): _24.MsgRelayCoinbaseMessagesResponse;
            };
            MsgRequestBandIBCRates: {
                encode(message: _24.MsgRequestBandIBCRates, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _24.MsgRequestBandIBCRates;
                fromPartial(object: Partial<_24.MsgRequestBandIBCRates>): _24.MsgRequestBandIBCRates;
            };
            MsgRequestBandIBCRatesResponse: {
                encode(_: _24.MsgRequestBandIBCRatesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _24.MsgRequestBandIBCRatesResponse;
                fromPartial(_: Partial<_24.MsgRequestBandIBCRatesResponse>): _24.MsgRequestBandIBCRatesResponse;
            };
            MsgRelayPythPrices: {
                encode(message: _24.MsgRelayPythPrices, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _24.MsgRelayPythPrices;
                fromPartial(object: Partial<_24.MsgRelayPythPrices>): _24.MsgRelayPythPrices;
            };
            MsgRelayPythPricesResponse: {
                encode(_: _24.MsgRelayPythPricesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _24.MsgRelayPythPricesResponse;
                fromPartial(_: Partial<_24.MsgRelayPythPricesResponse>): _24.MsgRelayPythPricesResponse;
            };
            MsgUpdateParams: {
                encode(message: _24.MsgUpdateParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _24.MsgUpdateParams;
                fromPartial(object: Partial<_24.MsgUpdateParams>): _24.MsgUpdateParams;
            };
            MsgUpdateParamsResponse: {
                encode(_: _24.MsgUpdateParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _24.MsgUpdateParamsResponse;
                fromPartial(_: Partial<_24.MsgUpdateParamsResponse>): _24.MsgUpdateParamsResponse;
            };
            QueryPythPriceRequest: {
                encode(message: _23.QueryPythPriceRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _23.QueryPythPriceRequest;
                fromPartial(object: Partial<_23.QueryPythPriceRequest>): _23.QueryPythPriceRequest;
            };
            QueryPythPriceResponse: {
                encode(message: _23.QueryPythPriceResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _23.QueryPythPriceResponse;
                fromPartial(object: Partial<_23.QueryPythPriceResponse>): _23.QueryPythPriceResponse;
            };
            QueryParamsRequest: {
                encode(_: _23.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _23.QueryParamsRequest;
                fromPartial(_: Partial<_23.QueryParamsRequest>): _23.QueryParamsRequest;
            };
            QueryParamsResponse: {
                encode(message: _23.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _23.QueryParamsResponse;
                fromPartial(object: Partial<_23.QueryParamsResponse>): _23.QueryParamsResponse;
            };
            QueryBandRelayersRequest: {
                encode(_: _23.QueryBandRelayersRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _23.QueryBandRelayersRequest;
                fromPartial(_: Partial<_23.QueryBandRelayersRequest>): _23.QueryBandRelayersRequest;
            };
            QueryBandRelayersResponse: {
                encode(message: _23.QueryBandRelayersResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _23.QueryBandRelayersResponse;
                fromPartial(object: Partial<_23.QueryBandRelayersResponse>): _23.QueryBandRelayersResponse;
            };
            QueryBandPriceStatesRequest: {
                encode(_: _23.QueryBandPriceStatesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _23.QueryBandPriceStatesRequest;
                fromPartial(_: Partial<_23.QueryBandPriceStatesRequest>): _23.QueryBandPriceStatesRequest;
            };
            QueryBandPriceStatesResponse: {
                encode(message: _23.QueryBandPriceStatesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _23.QueryBandPriceStatesResponse;
                fromPartial(object: Partial<_23.QueryBandPriceStatesResponse>): _23.QueryBandPriceStatesResponse;
            };
            QueryBandIBCPriceStatesRequest: {
                encode(_: _23.QueryBandIBCPriceStatesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _23.QueryBandIBCPriceStatesRequest;
                fromPartial(_: Partial<_23.QueryBandIBCPriceStatesRequest>): _23.QueryBandIBCPriceStatesRequest;
            };
            QueryBandIBCPriceStatesResponse: {
                encode(message: _23.QueryBandIBCPriceStatesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _23.QueryBandIBCPriceStatesResponse;
                fromPartial(object: Partial<_23.QueryBandIBCPriceStatesResponse>): _23.QueryBandIBCPriceStatesResponse;
            };
            QueryPriceFeedPriceStatesRequest: {
                encode(_: _23.QueryPriceFeedPriceStatesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _23.QueryPriceFeedPriceStatesRequest;
                fromPartial(_: Partial<_23.QueryPriceFeedPriceStatesRequest>): _23.QueryPriceFeedPriceStatesRequest;
            };
            QueryPriceFeedPriceStatesResponse: {
                encode(message: _23.QueryPriceFeedPriceStatesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _23.QueryPriceFeedPriceStatesResponse;
                fromPartial(object: Partial<_23.QueryPriceFeedPriceStatesResponse>): _23.QueryPriceFeedPriceStatesResponse;
            };
            QueryCoinbasePriceStatesRequest: {
                encode(_: _23.QueryCoinbasePriceStatesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _23.QueryCoinbasePriceStatesRequest;
                fromPartial(_: Partial<_23.QueryCoinbasePriceStatesRequest>): _23.QueryCoinbasePriceStatesRequest;
            };
            QueryCoinbasePriceStatesResponse: {
                encode(message: _23.QueryCoinbasePriceStatesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _23.QueryCoinbasePriceStatesResponse;
                fromPartial(object: Partial<_23.QueryCoinbasePriceStatesResponse>): _23.QueryCoinbasePriceStatesResponse;
            };
            QueryPythPriceStatesRequest: {
                encode(_: _23.QueryPythPriceStatesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _23.QueryPythPriceStatesRequest;
                fromPartial(_: Partial<_23.QueryPythPriceStatesRequest>): _23.QueryPythPriceStatesRequest;
            };
            QueryPythPriceStatesResponse: {
                encode(message: _23.QueryPythPriceStatesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _23.QueryPythPriceStatesResponse;
                fromPartial(object: Partial<_23.QueryPythPriceStatesResponse>): _23.QueryPythPriceStatesResponse;
            };
            QueryProviderPriceStateRequest: {
                encode(message: _23.QueryProviderPriceStateRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _23.QueryProviderPriceStateRequest;
                fromPartial(object: Partial<_23.QueryProviderPriceStateRequest>): _23.QueryProviderPriceStateRequest;
            };
            QueryProviderPriceStateResponse: {
                encode(message: _23.QueryProviderPriceStateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _23.QueryProviderPriceStateResponse;
                fromPartial(object: Partial<_23.QueryProviderPriceStateResponse>): _23.QueryProviderPriceStateResponse;
            };
            QueryModuleStateRequest: {
                encode(_: _23.QueryModuleStateRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _23.QueryModuleStateRequest;
                fromPartial(_: Partial<_23.QueryModuleStateRequest>): _23.QueryModuleStateRequest;
            };
            QueryModuleStateResponse: {
                encode(message: _23.QueryModuleStateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _23.QueryModuleStateResponse;
                fromPartial(object: Partial<_23.QueryModuleStateResponse>): _23.QueryModuleStateResponse;
            };
            QueryHistoricalPriceRecordsRequest: {
                encode(message: _23.QueryHistoricalPriceRecordsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _23.QueryHistoricalPriceRecordsRequest;
                fromPartial(object: Partial<_23.QueryHistoricalPriceRecordsRequest>): _23.QueryHistoricalPriceRecordsRequest;
            };
            QueryHistoricalPriceRecordsResponse: {
                encode(message: _23.QueryHistoricalPriceRecordsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _23.QueryHistoricalPriceRecordsResponse;
                fromPartial(object: Partial<_23.QueryHistoricalPriceRecordsResponse>): _23.QueryHistoricalPriceRecordsResponse;
            };
            OracleHistoryOptions: {
                encode(message: _23.OracleHistoryOptions, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _23.OracleHistoryOptions;
                fromPartial(object: Partial<_23.OracleHistoryOptions>): _23.OracleHistoryOptions;
            };
            QueryOracleVolatilityRequest: {
                encode(message: _23.QueryOracleVolatilityRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _23.QueryOracleVolatilityRequest;
                fromPartial(object: Partial<_23.QueryOracleVolatilityRequest>): _23.QueryOracleVolatilityRequest;
            };
            QueryOracleVolatilityResponse: {
                encode(message: _23.QueryOracleVolatilityResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _23.QueryOracleVolatilityResponse;
                fromPartial(object: Partial<_23.QueryOracleVolatilityResponse>): _23.QueryOracleVolatilityResponse;
            };
            QueryOracleProvidersInfoRequest: {
                encode(_: _23.QueryOracleProvidersInfoRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _23.QueryOracleProvidersInfoRequest;
                fromPartial(_: Partial<_23.QueryOracleProvidersInfoRequest>): _23.QueryOracleProvidersInfoRequest;
            };
            QueryOracleProvidersInfoResponse: {
                encode(message: _23.QueryOracleProvidersInfoResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _23.QueryOracleProvidersInfoResponse;
                fromPartial(object: Partial<_23.QueryOracleProvidersInfoResponse>): _23.QueryOracleProvidersInfoResponse;
            };
            QueryOracleProviderPricesRequest: {
                encode(message: _23.QueryOracleProviderPricesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _23.QueryOracleProviderPricesRequest;
                fromPartial(object: Partial<_23.QueryOracleProviderPricesRequest>): _23.QueryOracleProviderPricesRequest;
            };
            QueryOracleProviderPricesResponse: {
                encode(message: _23.QueryOracleProviderPricesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _23.QueryOracleProviderPricesResponse;
                fromPartial(object: Partial<_23.QueryOracleProviderPricesResponse>): _23.QueryOracleProviderPricesResponse;
            };
            QueryOraclePriceRequest: {
                encode(message: _23.QueryOraclePriceRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _23.QueryOraclePriceRequest;
                fromPartial(object: Partial<_23.QueryOraclePriceRequest>): _23.QueryOraclePriceRequest;
            };
            PricePairState: {
                encode(message: _23.PricePairState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _23.PricePairState;
                fromPartial(object: Partial<_23.PricePairState>): _23.PricePairState;
            };
            QueryOraclePriceResponse: {
                encode(message: _23.QueryOraclePriceResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _23.QueryOraclePriceResponse;
                fromPartial(object: Partial<_23.QueryOraclePriceResponse>): _23.QueryOraclePriceResponse;
            };
            GrantBandOraclePrivilegeProposal: {
                encode(message: _22.GrantBandOraclePrivilegeProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _22.GrantBandOraclePrivilegeProposal;
                fromPartial(object: Partial<_22.GrantBandOraclePrivilegeProposal>): _22.GrantBandOraclePrivilegeProposal;
            };
            RevokeBandOraclePrivilegeProposal: {
                encode(message: _22.RevokeBandOraclePrivilegeProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _22.RevokeBandOraclePrivilegeProposal;
                fromPartial(object: Partial<_22.RevokeBandOraclePrivilegeProposal>): _22.RevokeBandOraclePrivilegeProposal;
            };
            GrantPriceFeederPrivilegeProposal: {
                encode(message: _22.GrantPriceFeederPrivilegeProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _22.GrantPriceFeederPrivilegeProposal;
                fromPartial(object: Partial<_22.GrantPriceFeederPrivilegeProposal>): _22.GrantPriceFeederPrivilegeProposal;
            };
            GrantProviderPrivilegeProposal: {
                encode(message: _22.GrantProviderPrivilegeProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _22.GrantProviderPrivilegeProposal;
                fromPartial(object: Partial<_22.GrantProviderPrivilegeProposal>): _22.GrantProviderPrivilegeProposal;
            };
            RevokeProviderPrivilegeProposal: {
                encode(message: _22.RevokeProviderPrivilegeProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _22.RevokeProviderPrivilegeProposal;
                fromPartial(object: Partial<_22.RevokeProviderPrivilegeProposal>): _22.RevokeProviderPrivilegeProposal;
            };
            RevokePriceFeederPrivilegeProposal: {
                encode(message: _22.RevokePriceFeederPrivilegeProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _22.RevokePriceFeederPrivilegeProposal;
                fromPartial(object: Partial<_22.RevokePriceFeederPrivilegeProposal>): _22.RevokePriceFeederPrivilegeProposal;
            };
            AuthorizeBandOracleRequestProposal: {
                encode(message: _22.AuthorizeBandOracleRequestProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _22.AuthorizeBandOracleRequestProposal;
                fromPartial(object: Partial<_22.AuthorizeBandOracleRequestProposal>): _22.AuthorizeBandOracleRequestProposal;
            };
            UpdateBandOracleRequestProposal: {
                encode(message: _22.UpdateBandOracleRequestProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _22.UpdateBandOracleRequestProposal;
                fromPartial(object: Partial<_22.UpdateBandOracleRequestProposal>): _22.UpdateBandOracleRequestProposal;
            };
            EnableBandIBCProposal: {
                encode(message: _22.EnableBandIBCProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _22.EnableBandIBCProposal;
                fromPartial(object: Partial<_22.EnableBandIBCProposal>): _22.EnableBandIBCProposal;
            };
            oracleTypeFromJSON(object: any): _21.OracleType;
            oracleTypeToJSON(object: _21.OracleType): string;
            OracleType: typeof _21.OracleType;
            OracleTypeSDKType: typeof _21.OracleType;
            Params: {
                encode(message: _21.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _21.Params;
                fromPartial(object: Partial<_21.Params>): _21.Params;
            };
            OracleInfo: {
                encode(message: _21.OracleInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _21.OracleInfo;
                fromPartial(object: Partial<_21.OracleInfo>): _21.OracleInfo;
            };
            ChainlinkPriceState: {
                encode(message: _21.ChainlinkPriceState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _21.ChainlinkPriceState;
                fromPartial(object: Partial<_21.ChainlinkPriceState>): _21.ChainlinkPriceState;
            };
            BandPriceState: {
                encode(message: _21.BandPriceState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _21.BandPriceState;
                fromPartial(object: Partial<_21.BandPriceState>): _21.BandPriceState;
            };
            PriceFeedState: {
                encode(message: _21.PriceFeedState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _21.PriceFeedState;
                fromPartial(object: Partial<_21.PriceFeedState>): _21.PriceFeedState;
            };
            ProviderInfo: {
                encode(message: _21.ProviderInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _21.ProviderInfo;
                fromPartial(object: Partial<_21.ProviderInfo>): _21.ProviderInfo;
            };
            ProviderState: {
                encode(message: _21.ProviderState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _21.ProviderState;
                fromPartial(object: Partial<_21.ProviderState>): _21.ProviderState;
            };
            ProviderPriceState: {
                encode(message: _21.ProviderPriceState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _21.ProviderPriceState;
                fromPartial(object: Partial<_21.ProviderPriceState>): _21.ProviderPriceState;
            };
            PriceFeedInfo: {
                encode(message: _21.PriceFeedInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _21.PriceFeedInfo;
                fromPartial(object: Partial<_21.PriceFeedInfo>): _21.PriceFeedInfo;
            };
            PriceFeedPrice: {
                encode(message: _21.PriceFeedPrice, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _21.PriceFeedPrice;
                fromPartial(object: Partial<_21.PriceFeedPrice>): _21.PriceFeedPrice;
            };
            CoinbasePriceState: {
                encode(message: _21.CoinbasePriceState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _21.CoinbasePriceState;
                fromPartial(object: Partial<_21.CoinbasePriceState>): _21.CoinbasePriceState;
            };
            PriceState: {
                encode(message: _21.PriceState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _21.PriceState;
                fromPartial(object: Partial<_21.PriceState>): _21.PriceState;
            };
            PythPriceState: {
                encode(message: _21.PythPriceState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _21.PythPriceState;
                fromPartial(object: Partial<_21.PythPriceState>): _21.PythPriceState;
            };
            BandOracleRequest: {
                encode(message: _21.BandOracleRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _21.BandOracleRequest;
                fromPartial(object: Partial<_21.BandOracleRequest>): _21.BandOracleRequest;
            };
            BandIBCParams: {
                encode(message: _21.BandIBCParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _21.BandIBCParams;
                fromPartial(object: Partial<_21.BandIBCParams>): _21.BandIBCParams;
            };
            SymbolPriceTimestamp: {
                encode(message: _21.SymbolPriceTimestamp, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _21.SymbolPriceTimestamp;
                fromPartial(object: Partial<_21.SymbolPriceTimestamp>): _21.SymbolPriceTimestamp;
            };
            LastPriceTimestamps: {
                encode(message: _21.LastPriceTimestamps, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _21.LastPriceTimestamps;
                fromPartial(object: Partial<_21.LastPriceTimestamps>): _21.LastPriceTimestamps;
            };
            PriceRecords: {
                encode(message: _21.PriceRecords, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _21.PriceRecords;
                fromPartial(object: Partial<_21.PriceRecords>): _21.PriceRecords;
            };
            PriceRecord: {
                encode(message: _21.PriceRecord, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _21.PriceRecord;
                fromPartial(object: Partial<_21.PriceRecord>): _21.PriceRecord;
            };
            MetadataStatistics: {
                encode(message: _21.MetadataStatistics, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _21.MetadataStatistics;
                fromPartial(object: Partial<_21.MetadataStatistics>): _21.MetadataStatistics;
            };
            PriceAttestation: {
                encode(message: _21.PriceAttestation, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _21.PriceAttestation;
                fromPartial(object: Partial<_21.PriceAttestation>): _21.PriceAttestation;
            };
            GenesisState: {
                encode(message: _20.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _20.GenesisState;
                fromPartial(object: Partial<_20.GenesisState>): _20.GenesisState;
            };
            CalldataRecord: {
                encode(message: _20.CalldataRecord, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _20.CalldataRecord;
                fromPartial(object: Partial<_20.CalldataRecord>): _20.CalldataRecord;
            };
            SetChainlinkPriceEvent: {
                encode(message: _19.SetChainlinkPriceEvent, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _19.SetChainlinkPriceEvent;
                fromPartial(object: Partial<_19.SetChainlinkPriceEvent>): _19.SetChainlinkPriceEvent;
            };
            SetBandPriceEvent: {
                encode(message: _19.SetBandPriceEvent, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _19.SetBandPriceEvent;
                fromPartial(object: Partial<_19.SetBandPriceEvent>): _19.SetBandPriceEvent;
            };
            SetBandIBCPriceEvent: {
                encode(message: _19.SetBandIBCPriceEvent, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _19.SetBandIBCPriceEvent;
                fromPartial(object: Partial<_19.SetBandIBCPriceEvent>): _19.SetBandIBCPriceEvent;
            };
            EventBandIBCAckSuccess: {
                encode(message: _19.EventBandIBCAckSuccess, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _19.EventBandIBCAckSuccess;
                fromPartial(object: Partial<_19.EventBandIBCAckSuccess>): _19.EventBandIBCAckSuccess;
            };
            EventBandIBCAckError: {
                encode(message: _19.EventBandIBCAckError, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _19.EventBandIBCAckError;
                fromPartial(object: Partial<_19.EventBandIBCAckError>): _19.EventBandIBCAckError;
            };
            EventBandIBCResponseTimeout: {
                encode(message: _19.EventBandIBCResponseTimeout, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _19.EventBandIBCResponseTimeout;
                fromPartial(object: Partial<_19.EventBandIBCResponseTimeout>): _19.EventBandIBCResponseTimeout;
            };
            SetPriceFeedPriceEvent: {
                encode(message: _19.SetPriceFeedPriceEvent, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _19.SetPriceFeedPriceEvent;
                fromPartial(object: Partial<_19.SetPriceFeedPriceEvent>): _19.SetPriceFeedPriceEvent;
            };
            SetProviderPriceEvent: {
                encode(message: _19.SetProviderPriceEvent, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _19.SetProviderPriceEvent;
                fromPartial(object: Partial<_19.SetProviderPriceEvent>): _19.SetProviderPriceEvent;
            };
            SetCoinbasePriceEvent: {
                encode(message: _19.SetCoinbasePriceEvent, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _19.SetCoinbasePriceEvent;
                fromPartial(object: Partial<_19.SetCoinbasePriceEvent>): _19.SetCoinbasePriceEvent;
            };
            EventSetPythPrices: {
                encode(message: _19.EventSetPythPrices, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _19.EventSetPythPrices;
                fromPartial(object: Partial<_19.EventSetPythPrices>): _19.EventSetPythPrices;
            };
        };
    }
    namespace peggy {
        const v1: {
            MsgClientImpl: typeof _240.MsgClientImpl;
            QueryClientImpl: typeof _232.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                params(request?: _34.QueryParamsRequest): Promise<_34.QueryParamsResponse>;
                currentValset(request?: _34.QueryCurrentValsetRequest): Promise<_34.QueryCurrentValsetResponse>;
                valsetRequest(request: _34.QueryValsetRequestRequest): Promise<_34.QueryValsetRequestResponse>;
                valsetConfirm(request: _34.QueryValsetConfirmRequest): Promise<_34.QueryValsetConfirmResponse>;
                valsetConfirmsByNonce(request: _34.QueryValsetConfirmsByNonceRequest): Promise<_34.QueryValsetConfirmsByNonceResponse>;
                lastValsetRequests(request?: _34.QueryLastValsetRequestsRequest): Promise<_34.QueryLastValsetRequestsResponse>;
                lastPendingValsetRequestByAddr(request: _34.QueryLastPendingValsetRequestByAddrRequest): Promise<_34.QueryLastPendingValsetRequestByAddrResponse>;
                lastEventByAddr(request: _34.QueryLastEventByAddrRequest): Promise<_34.QueryLastEventByAddrResponse>;
                getPendingSendToEth(request: _34.QueryPendingSendToEth): Promise<_34.QueryPendingSendToEthResponse>;
                batchFees(request?: _34.QueryBatchFeeRequest): Promise<_34.QueryBatchFeeResponse>;
                outgoingTxBatches(request?: _34.QueryOutgoingTxBatchesRequest): Promise<_34.QueryOutgoingTxBatchesResponse>;
                lastPendingBatchRequestByAddr(request: _34.QueryLastPendingBatchRequestByAddrRequest): Promise<_34.QueryLastPendingBatchRequestByAddrResponse>;
                batchRequestByNonce(request: _34.QueryBatchRequestByNonceRequest): Promise<_34.QueryBatchRequestByNonceResponse>;
                batchConfirms(request: _34.QueryBatchConfirmsRequest): Promise<_34.QueryBatchConfirmsResponse>;
                eRC20ToDenom(request: _34.QueryERC20ToDenomRequest): Promise<_34.QueryERC20ToDenomResponse>;
                denomToERC20(request: _34.QueryDenomToERC20Request): Promise<_34.QueryDenomToERC20Response>;
                getDelegateKeyByValidator(request: _34.QueryDelegateKeysByValidatorAddress): Promise<_34.QueryDelegateKeysByValidatorAddressResponse>;
                getDelegateKeyByEth(request: _34.QueryDelegateKeysByEthAddress): Promise<_34.QueryDelegateKeysByEthAddressResponse>;
                getDelegateKeyByOrchestrator(request: _34.QueryDelegateKeysByOrchestratorAddress): Promise<_34.QueryDelegateKeysByOrchestratorAddressResponse>;
                peggyModuleState(request?: _34.QueryModuleStateRequest): Promise<_34.QueryModuleStateResponse>;
                missingPeggoNonces(request?: _34.MissingNoncesRequest): Promise<_34.MissingNoncesResponse>;
            };
            LCDQueryClient: typeof _224.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    valsetConfirm(value: _30.MsgValsetConfirm): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    sendToEth(value: _30.MsgSendToEth): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    requestBatch(value: _30.MsgRequestBatch): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    confirmBatch(value: _30.MsgConfirmBatch): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    depositClaim(value: _30.MsgDepositClaim): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    withdrawClaim(value: _30.MsgWithdrawClaim): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    valsetUpdateClaim(value: _30.MsgValsetUpdatedClaim): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    eRC20DeployedClaim(value: _30.MsgERC20DeployedClaim): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    setOrchestratorAddresses(value: _30.MsgSetOrchestratorAddresses): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    cancelSendToEth(value: _30.MsgCancelSendToEth): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    submitBadSignatureEvidence(value: _30.MsgSubmitBadSignatureEvidence): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    updateParams(value: _30.MsgUpdateParams): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    valsetConfirm(value: _30.MsgValsetConfirm): {
                        typeUrl: string;
                        value: _30.MsgValsetConfirm;
                    };
                    sendToEth(value: _30.MsgSendToEth): {
                        typeUrl: string;
                        value: _30.MsgSendToEth;
                    };
                    requestBatch(value: _30.MsgRequestBatch): {
                        typeUrl: string;
                        value: _30.MsgRequestBatch;
                    };
                    confirmBatch(value: _30.MsgConfirmBatch): {
                        typeUrl: string;
                        value: _30.MsgConfirmBatch;
                    };
                    depositClaim(value: _30.MsgDepositClaim): {
                        typeUrl: string;
                        value: _30.MsgDepositClaim;
                    };
                    withdrawClaim(value: _30.MsgWithdrawClaim): {
                        typeUrl: string;
                        value: _30.MsgWithdrawClaim;
                    };
                    valsetUpdateClaim(value: _30.MsgValsetUpdatedClaim): {
                        typeUrl: string;
                        value: _30.MsgValsetUpdatedClaim;
                    };
                    eRC20DeployedClaim(value: _30.MsgERC20DeployedClaim): {
                        typeUrl: string;
                        value: _30.MsgERC20DeployedClaim;
                    };
                    setOrchestratorAddresses(value: _30.MsgSetOrchestratorAddresses): {
                        typeUrl: string;
                        value: _30.MsgSetOrchestratorAddresses;
                    };
                    cancelSendToEth(value: _30.MsgCancelSendToEth): {
                        typeUrl: string;
                        value: _30.MsgCancelSendToEth;
                    };
                    submitBadSignatureEvidence(value: _30.MsgSubmitBadSignatureEvidence): {
                        typeUrl: string;
                        value: _30.MsgSubmitBadSignatureEvidence;
                    };
                    updateParams(value: _30.MsgUpdateParams): {
                        typeUrl: string;
                        value: _30.MsgUpdateParams;
                    };
                };
                fromJSON: {
                    valsetConfirm(value: any): {
                        typeUrl: string;
                        value: _30.MsgValsetConfirm;
                    };
                    sendToEth(value: any): {
                        typeUrl: string;
                        value: _30.MsgSendToEth;
                    };
                    requestBatch(value: any): {
                        typeUrl: string;
                        value: _30.MsgRequestBatch;
                    };
                    confirmBatch(value: any): {
                        typeUrl: string;
                        value: _30.MsgConfirmBatch;
                    };
                    depositClaim(value: any): {
                        typeUrl: string;
                        value: _30.MsgDepositClaim;
                    };
                    withdrawClaim(value: any): {
                        typeUrl: string;
                        value: _30.MsgWithdrawClaim;
                    };
                    valsetUpdateClaim(value: any): {
                        typeUrl: string;
                        value: _30.MsgValsetUpdatedClaim;
                    };
                    eRC20DeployedClaim(value: any): {
                        typeUrl: string;
                        value: _30.MsgERC20DeployedClaim;
                    };
                    setOrchestratorAddresses(value: any): {
                        typeUrl: string;
                        value: _30.MsgSetOrchestratorAddresses;
                    };
                    cancelSendToEth(value: any): {
                        typeUrl: string;
                        value: _30.MsgCancelSendToEth;
                    };
                    submitBadSignatureEvidence(value: any): {
                        typeUrl: string;
                        value: _30.MsgSubmitBadSignatureEvidence;
                    };
                    updateParams(value: any): {
                        typeUrl: string;
                        value: _30.MsgUpdateParams;
                    };
                };
                fromPartial: {
                    valsetConfirm(value: _30.MsgValsetConfirm): {
                        typeUrl: string;
                        value: _30.MsgValsetConfirm;
                    };
                    sendToEth(value: _30.MsgSendToEth): {
                        typeUrl: string;
                        value: _30.MsgSendToEth;
                    };
                    requestBatch(value: _30.MsgRequestBatch): {
                        typeUrl: string;
                        value: _30.MsgRequestBatch;
                    };
                    confirmBatch(value: _30.MsgConfirmBatch): {
                        typeUrl: string;
                        value: _30.MsgConfirmBatch;
                    };
                    depositClaim(value: _30.MsgDepositClaim): {
                        typeUrl: string;
                        value: _30.MsgDepositClaim;
                    };
                    withdrawClaim(value: _30.MsgWithdrawClaim): {
                        typeUrl: string;
                        value: _30.MsgWithdrawClaim;
                    };
                    valsetUpdateClaim(value: _30.MsgValsetUpdatedClaim): {
                        typeUrl: string;
                        value: _30.MsgValsetUpdatedClaim;
                    };
                    eRC20DeployedClaim(value: _30.MsgERC20DeployedClaim): {
                        typeUrl: string;
                        value: _30.MsgERC20DeployedClaim;
                    };
                    setOrchestratorAddresses(value: _30.MsgSetOrchestratorAddresses): {
                        typeUrl: string;
                        value: _30.MsgSetOrchestratorAddresses;
                    };
                    cancelSendToEth(value: _30.MsgCancelSendToEth): {
                        typeUrl: string;
                        value: _30.MsgCancelSendToEth;
                    };
                    submitBadSignatureEvidence(value: _30.MsgSubmitBadSignatureEvidence): {
                        typeUrl: string;
                        value: _30.MsgSubmitBadSignatureEvidence;
                    };
                    updateParams(value: _30.MsgUpdateParams): {
                        typeUrl: string;
                        value: _30.MsgUpdateParams;
                    };
                };
            };
            AminoConverter: {
                "/injective.peggy.v1.MsgValsetConfirm": {
                    aminoType: string;
                    toAmino: ({ nonce, orchestrator, ethAddress, signature }: _30.MsgValsetConfirm) => {
                        nonce: string;
                        orchestrator: string;
                        eth_address: string;
                        signature: string;
                    };
                    fromAmino: ({ nonce, orchestrator, eth_address, signature }: {
                        nonce: string;
                        orchestrator: string;
                        eth_address: string;
                        signature: string;
                    }) => _30.MsgValsetConfirm;
                };
                "/injective.peggy.v1.MsgSendToEth": {
                    aminoType: string;
                    toAmino: ({ sender, ethDest, amount, bridgeFee }: _30.MsgSendToEth) => {
                        sender: string;
                        eth_dest: string;
                        amount: {
                            denom: string;
                            amount: string;
                        };
                        bridge_fee: {
                            denom: string;
                            amount: string;
                        };
                    };
                    fromAmino: ({ sender, eth_dest, amount, bridge_fee }: {
                        sender: string;
                        eth_dest: string;
                        amount: {
                            denom: string;
                            amount: string;
                        };
                        bridge_fee: {
                            denom: string;
                            amount: string;
                        };
                    }) => _30.MsgSendToEth;
                };
                "/injective.peggy.v1.MsgRequestBatch": {
                    aminoType: string;
                    toAmino: ({ orchestrator, denom }: _30.MsgRequestBatch) => {
                        orchestrator: string;
                        denom: string;
                    };
                    fromAmino: ({ orchestrator, denom }: {
                        orchestrator: string;
                        denom: string;
                    }) => _30.MsgRequestBatch;
                };
                "/injective.peggy.v1.MsgConfirmBatch": {
                    aminoType: string;
                    toAmino: ({ nonce, tokenContract, ethSigner, orchestrator, signature }: _30.MsgConfirmBatch) => {
                        nonce: string;
                        token_contract: string;
                        eth_signer: string;
                        orchestrator: string;
                        signature: string;
                    };
                    fromAmino: ({ nonce, token_contract, eth_signer, orchestrator, signature }: {
                        nonce: string;
                        token_contract: string;
                        eth_signer: string;
                        orchestrator: string;
                        signature: string;
                    }) => _30.MsgConfirmBatch;
                };
                "/injective.peggy.v1.MsgDepositClaim": {
                    aminoType: string;
                    toAmino: ({ eventNonce, blockHeight, tokenContract, amount, ethereumSender, cosmosReceiver, orchestrator, data }: _30.MsgDepositClaim) => {
                        event_nonce: string;
                        block_height: string;
                        token_contract: string;
                        amount: string;
                        ethereum_sender: string;
                        cosmos_receiver: string;
                        orchestrator: string;
                        data: string;
                    };
                    fromAmino: ({ event_nonce, block_height, token_contract, amount, ethereum_sender, cosmos_receiver, orchestrator, data }: {
                        event_nonce: string;
                        block_height: string;
                        token_contract: string;
                        amount: string;
                        ethereum_sender: string;
                        cosmos_receiver: string;
                        orchestrator: string;
                        data: string;
                    }) => _30.MsgDepositClaim;
                };
                "/injective.peggy.v1.MsgWithdrawClaim": {
                    aminoType: string;
                    toAmino: ({ eventNonce, blockHeight, batchNonce, tokenContract, orchestrator }: _30.MsgWithdrawClaim) => {
                        event_nonce: string;
                        block_height: string;
                        batch_nonce: string;
                        token_contract: string;
                        orchestrator: string;
                    };
                    fromAmino: ({ event_nonce, block_height, batch_nonce, token_contract, orchestrator }: {
                        event_nonce: string;
                        block_height: string;
                        batch_nonce: string;
                        token_contract: string;
                        orchestrator: string;
                    }) => _30.MsgWithdrawClaim;
                };
                "/injective.peggy.v1.MsgValsetUpdatedClaim": {
                    aminoType: string;
                    toAmino: ({ eventNonce, valsetNonce, blockHeight, members, rewardAmount, rewardToken, orchestrator }: _30.MsgValsetUpdatedClaim) => {
                        event_nonce: string;
                        valset_nonce: string;
                        block_height: string;
                        members: {
                            power: string;
                            ethereum_address: string;
                        }[];
                        reward_amount: string;
                        reward_token: string;
                        orchestrator: string;
                    };
                    fromAmino: ({ event_nonce, valset_nonce, block_height, members, reward_amount, reward_token, orchestrator }: {
                        event_nonce: string;
                        valset_nonce: string;
                        block_height: string;
                        members: {
                            power: string;
                            ethereum_address: string;
                        }[];
                        reward_amount: string;
                        reward_token: string;
                        orchestrator: string;
                    }) => _30.MsgValsetUpdatedClaim;
                };
                "/injective.peggy.v1.MsgERC20DeployedClaim": {
                    aminoType: string;
                    toAmino: ({ eventNonce, blockHeight, cosmosDenom, tokenContract, name, symbol, decimals, orchestrator }: _30.MsgERC20DeployedClaim) => {
                        event_nonce: string;
                        block_height: string;
                        cosmos_denom: string;
                        token_contract: string;
                        name: string;
                        symbol: string;
                        decimals: string;
                        orchestrator: string;
                    };
                    fromAmino: ({ event_nonce, block_height, cosmos_denom, token_contract, name, symbol, decimals, orchestrator }: {
                        event_nonce: string;
                        block_height: string;
                        cosmos_denom: string;
                        token_contract: string;
                        name: string;
                        symbol: string;
                        decimals: string;
                        orchestrator: string;
                    }) => _30.MsgERC20DeployedClaim;
                };
                "/injective.peggy.v1.MsgSetOrchestratorAddresses": {
                    aminoType: string;
                    toAmino: ({ sender, orchestrator, ethAddress }: _30.MsgSetOrchestratorAddresses) => {
                        sender: string;
                        orchestrator: string;
                        eth_address: string;
                    };
                    fromAmino: ({ sender, orchestrator, eth_address }: {
                        sender: string;
                        orchestrator: string;
                        eth_address: string;
                    }) => _30.MsgSetOrchestratorAddresses;
                };
                "/injective.peggy.v1.MsgCancelSendToEth": {
                    aminoType: string;
                    toAmino: ({ transactionId, sender }: _30.MsgCancelSendToEth) => {
                        transaction_id: string;
                        sender: string;
                    };
                    fromAmino: ({ transaction_id, sender }: {
                        transaction_id: string;
                        sender: string;
                    }) => _30.MsgCancelSendToEth;
                };
                "/injective.peggy.v1.MsgSubmitBadSignatureEvidence": {
                    aminoType: string;
                    toAmino: ({ subject, signature, sender }: _30.MsgSubmitBadSignatureEvidence) => {
                        subject: {
                            type_url: string;
                            value: Uint8Array;
                        };
                        signature: string;
                        sender: string;
                    };
                    fromAmino: ({ subject, signature, sender }: {
                        subject: {
                            type_url: string;
                            value: Uint8Array;
                        };
                        signature: string;
                        sender: string;
                    }) => _30.MsgSubmitBadSignatureEvidence;
                };
                "/injective.peggy.v1.MsgUpdateParams": {
                    aminoType: string;
                    toAmino: ({ authority, params }: _30.MsgUpdateParams) => {
                        authority: string;
                        params: {
                            peggy_id: string;
                            contract_source_hash: string;
                            bridge_ethereum_address: string;
                            bridge_chain_id: string;
                            signed_valsets_window: string;
                            signed_batches_window: string;
                            signed_claims_window: string;
                            target_batch_timeout: string;
                            average_block_time: string;
                            average_ethereum_block_time: string;
                            slash_fraction_valset: Uint8Array;
                            slash_fraction_batch: Uint8Array;
                            slash_fraction_claim: Uint8Array;
                            slash_fraction_conflicting_claim: Uint8Array;
                            unbond_slashing_valsets_window: string;
                            slash_fraction_bad_eth_signature: Uint8Array;
                            cosmos_coin_denom: string;
                            cosmos_coin_erc20_contract: string;
                            claim_slashing_enabled: boolean;
                            bridge_contract_start_height: string;
                            valset_reward: {
                                denom: string;
                                amount: string;
                            };
                        };
                    };
                    fromAmino: ({ authority, params }: {
                        authority: string;
                        params: {
                            peggy_id: string;
                            contract_source_hash: string;
                            bridge_ethereum_address: string;
                            bridge_chain_id: string;
                            signed_valsets_window: string;
                            signed_batches_window: string;
                            signed_claims_window: string;
                            target_batch_timeout: string;
                            average_block_time: string;
                            average_ethereum_block_time: string;
                            slash_fraction_valset: Uint8Array;
                            slash_fraction_batch: Uint8Array;
                            slash_fraction_claim: Uint8Array;
                            slash_fraction_conflicting_claim: Uint8Array;
                            unbond_slashing_valsets_window: string;
                            slash_fraction_bad_eth_signature: Uint8Array;
                            cosmos_coin_denom: string;
                            cosmos_coin_erc20_contract: string;
                            claim_slashing_enabled: boolean;
                            bridge_contract_start_height: string;
                            valset_reward: {
                                denom: string;
                                amount: string;
                            };
                        };
                    }) => _30.MsgUpdateParams;
                };
            };
            BridgeValidator: {
                encode(message: _35.BridgeValidator, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _35.BridgeValidator;
                fromPartial(object: Partial<_35.BridgeValidator>): _35.BridgeValidator;
            };
            Valset: {
                encode(message: _35.Valset, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _35.Valset;
                fromPartial(object: Partial<_35.Valset>): _35.Valset;
            };
            LastObservedEthereumBlockHeight: {
                encode(message: _35.LastObservedEthereumBlockHeight, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _35.LastObservedEthereumBlockHeight;
                fromPartial(object: Partial<_35.LastObservedEthereumBlockHeight>): _35.LastObservedEthereumBlockHeight;
            };
            LastClaimEvent: {
                encode(message: _35.LastClaimEvent, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _35.LastClaimEvent;
                fromPartial(object: Partial<_35.LastClaimEvent>): _35.LastClaimEvent;
            };
            ERC20ToDenom: {
                encode(message: _35.ERC20ToDenom, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _35.ERC20ToDenom;
                fromPartial(object: Partial<_35.ERC20ToDenom>): _35.ERC20ToDenom;
            };
            QueryParamsRequest: {
                encode(_: _34.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _34.QueryParamsRequest;
                fromPartial(_: Partial<_34.QueryParamsRequest>): _34.QueryParamsRequest;
            };
            QueryParamsResponse: {
                encode(message: _34.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _34.QueryParamsResponse;
                fromPartial(object: Partial<_34.QueryParamsResponse>): _34.QueryParamsResponse;
            };
            QueryCurrentValsetRequest: {
                encode(_: _34.QueryCurrentValsetRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _34.QueryCurrentValsetRequest;
                fromPartial(_: Partial<_34.QueryCurrentValsetRequest>): _34.QueryCurrentValsetRequest;
            };
            QueryCurrentValsetResponse: {
                encode(message: _34.QueryCurrentValsetResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _34.QueryCurrentValsetResponse;
                fromPartial(object: Partial<_34.QueryCurrentValsetResponse>): _34.QueryCurrentValsetResponse;
            };
            QueryValsetRequestRequest: {
                encode(message: _34.QueryValsetRequestRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _34.QueryValsetRequestRequest;
                fromPartial(object: Partial<_34.QueryValsetRequestRequest>): _34.QueryValsetRequestRequest;
            };
            QueryValsetRequestResponse: {
                encode(message: _34.QueryValsetRequestResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _34.QueryValsetRequestResponse;
                fromPartial(object: Partial<_34.QueryValsetRequestResponse>): _34.QueryValsetRequestResponse;
            };
            QueryValsetConfirmRequest: {
                encode(message: _34.QueryValsetConfirmRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _34.QueryValsetConfirmRequest;
                fromPartial(object: Partial<_34.QueryValsetConfirmRequest>): _34.QueryValsetConfirmRequest;
            };
            QueryValsetConfirmResponse: {
                encode(message: _34.QueryValsetConfirmResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _34.QueryValsetConfirmResponse;
                fromPartial(object: Partial<_34.QueryValsetConfirmResponse>): _34.QueryValsetConfirmResponse;
            };
            QueryValsetConfirmsByNonceRequest: {
                encode(message: _34.QueryValsetConfirmsByNonceRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _34.QueryValsetConfirmsByNonceRequest;
                fromPartial(object: Partial<_34.QueryValsetConfirmsByNonceRequest>): _34.QueryValsetConfirmsByNonceRequest;
            };
            QueryValsetConfirmsByNonceResponse: {
                encode(message: _34.QueryValsetConfirmsByNonceResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _34.QueryValsetConfirmsByNonceResponse;
                fromPartial(object: Partial<_34.QueryValsetConfirmsByNonceResponse>): _34.QueryValsetConfirmsByNonceResponse;
            };
            QueryLastValsetRequestsRequest: {
                encode(_: _34.QueryLastValsetRequestsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _34.QueryLastValsetRequestsRequest;
                fromPartial(_: Partial<_34.QueryLastValsetRequestsRequest>): _34.QueryLastValsetRequestsRequest;
            };
            QueryLastValsetRequestsResponse: {
                encode(message: _34.QueryLastValsetRequestsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _34.QueryLastValsetRequestsResponse;
                fromPartial(object: Partial<_34.QueryLastValsetRequestsResponse>): _34.QueryLastValsetRequestsResponse;
            };
            QueryLastPendingValsetRequestByAddrRequest: {
                encode(message: _34.QueryLastPendingValsetRequestByAddrRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _34.QueryLastPendingValsetRequestByAddrRequest;
                fromPartial(object: Partial<_34.QueryLastPendingValsetRequestByAddrRequest>): _34.QueryLastPendingValsetRequestByAddrRequest;
            };
            QueryLastPendingValsetRequestByAddrResponse: {
                encode(message: _34.QueryLastPendingValsetRequestByAddrResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _34.QueryLastPendingValsetRequestByAddrResponse;
                fromPartial(object: Partial<_34.QueryLastPendingValsetRequestByAddrResponse>): _34.QueryLastPendingValsetRequestByAddrResponse;
            };
            QueryBatchFeeRequest: {
                encode(_: _34.QueryBatchFeeRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _34.QueryBatchFeeRequest;
                fromPartial(_: Partial<_34.QueryBatchFeeRequest>): _34.QueryBatchFeeRequest;
            };
            QueryBatchFeeResponse: {
                encode(message: _34.QueryBatchFeeResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _34.QueryBatchFeeResponse;
                fromPartial(object: Partial<_34.QueryBatchFeeResponse>): _34.QueryBatchFeeResponse;
            };
            QueryLastPendingBatchRequestByAddrRequest: {
                encode(message: _34.QueryLastPendingBatchRequestByAddrRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _34.QueryLastPendingBatchRequestByAddrRequest;
                fromPartial(object: Partial<_34.QueryLastPendingBatchRequestByAddrRequest>): _34.QueryLastPendingBatchRequestByAddrRequest;
            };
            QueryLastPendingBatchRequestByAddrResponse: {
                encode(message: _34.QueryLastPendingBatchRequestByAddrResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _34.QueryLastPendingBatchRequestByAddrResponse;
                fromPartial(object: Partial<_34.QueryLastPendingBatchRequestByAddrResponse>): _34.QueryLastPendingBatchRequestByAddrResponse;
            };
            QueryOutgoingTxBatchesRequest: {
                encode(_: _34.QueryOutgoingTxBatchesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _34.QueryOutgoingTxBatchesRequest;
                fromPartial(_: Partial<_34.QueryOutgoingTxBatchesRequest>): _34.QueryOutgoingTxBatchesRequest;
            };
            QueryOutgoingTxBatchesResponse: {
                encode(message: _34.QueryOutgoingTxBatchesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _34.QueryOutgoingTxBatchesResponse;
                fromPartial(object: Partial<_34.QueryOutgoingTxBatchesResponse>): _34.QueryOutgoingTxBatchesResponse;
            };
            QueryBatchRequestByNonceRequest: {
                encode(message: _34.QueryBatchRequestByNonceRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _34.QueryBatchRequestByNonceRequest;
                fromPartial(object: Partial<_34.QueryBatchRequestByNonceRequest>): _34.QueryBatchRequestByNonceRequest;
            };
            QueryBatchRequestByNonceResponse: {
                encode(message: _34.QueryBatchRequestByNonceResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _34.QueryBatchRequestByNonceResponse;
                fromPartial(object: Partial<_34.QueryBatchRequestByNonceResponse>): _34.QueryBatchRequestByNonceResponse;
            };
            QueryBatchConfirmsRequest: {
                encode(message: _34.QueryBatchConfirmsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _34.QueryBatchConfirmsRequest;
                fromPartial(object: Partial<_34.QueryBatchConfirmsRequest>): _34.QueryBatchConfirmsRequest;
            };
            QueryBatchConfirmsResponse: {
                encode(message: _34.QueryBatchConfirmsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _34.QueryBatchConfirmsResponse;
                fromPartial(object: Partial<_34.QueryBatchConfirmsResponse>): _34.QueryBatchConfirmsResponse;
            };
            QueryLastEventByAddrRequest: {
                encode(message: _34.QueryLastEventByAddrRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _34.QueryLastEventByAddrRequest;
                fromPartial(object: Partial<_34.QueryLastEventByAddrRequest>): _34.QueryLastEventByAddrRequest;
            };
            QueryLastEventByAddrResponse: {
                encode(message: _34.QueryLastEventByAddrResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _34.QueryLastEventByAddrResponse;
                fromPartial(object: Partial<_34.QueryLastEventByAddrResponse>): _34.QueryLastEventByAddrResponse;
            };
            QueryERC20ToDenomRequest: {
                encode(message: _34.QueryERC20ToDenomRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _34.QueryERC20ToDenomRequest;
                fromPartial(object: Partial<_34.QueryERC20ToDenomRequest>): _34.QueryERC20ToDenomRequest;
            };
            QueryERC20ToDenomResponse: {
                encode(message: _34.QueryERC20ToDenomResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _34.QueryERC20ToDenomResponse;
                fromPartial(object: Partial<_34.QueryERC20ToDenomResponse>): _34.QueryERC20ToDenomResponse;
            };
            QueryDenomToERC20Request: {
                encode(message: _34.QueryDenomToERC20Request, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _34.QueryDenomToERC20Request;
                fromPartial(object: Partial<_34.QueryDenomToERC20Request>): _34.QueryDenomToERC20Request;
            };
            QueryDenomToERC20Response: {
                encode(message: _34.QueryDenomToERC20Response, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _34.QueryDenomToERC20Response;
                fromPartial(object: Partial<_34.QueryDenomToERC20Response>): _34.QueryDenomToERC20Response;
            };
            QueryDelegateKeysByValidatorAddress: {
                encode(message: _34.QueryDelegateKeysByValidatorAddress, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _34.QueryDelegateKeysByValidatorAddress;
                fromPartial(object: Partial<_34.QueryDelegateKeysByValidatorAddress>): _34.QueryDelegateKeysByValidatorAddress;
            };
            QueryDelegateKeysByValidatorAddressResponse: {
                encode(message: _34.QueryDelegateKeysByValidatorAddressResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _34.QueryDelegateKeysByValidatorAddressResponse;
                fromPartial(object: Partial<_34.QueryDelegateKeysByValidatorAddressResponse>): _34.QueryDelegateKeysByValidatorAddressResponse;
            };
            QueryDelegateKeysByEthAddress: {
                encode(message: _34.QueryDelegateKeysByEthAddress, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _34.QueryDelegateKeysByEthAddress;
                fromPartial(object: Partial<_34.QueryDelegateKeysByEthAddress>): _34.QueryDelegateKeysByEthAddress;
            };
            QueryDelegateKeysByEthAddressResponse: {
                encode(message: _34.QueryDelegateKeysByEthAddressResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _34.QueryDelegateKeysByEthAddressResponse;
                fromPartial(object: Partial<_34.QueryDelegateKeysByEthAddressResponse>): _34.QueryDelegateKeysByEthAddressResponse;
            };
            QueryDelegateKeysByOrchestratorAddress: {
                encode(message: _34.QueryDelegateKeysByOrchestratorAddress, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _34.QueryDelegateKeysByOrchestratorAddress;
                fromPartial(object: Partial<_34.QueryDelegateKeysByOrchestratorAddress>): _34.QueryDelegateKeysByOrchestratorAddress;
            };
            QueryDelegateKeysByOrchestratorAddressResponse: {
                encode(message: _34.QueryDelegateKeysByOrchestratorAddressResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _34.QueryDelegateKeysByOrchestratorAddressResponse;
                fromPartial(object: Partial<_34.QueryDelegateKeysByOrchestratorAddressResponse>): _34.QueryDelegateKeysByOrchestratorAddressResponse;
            };
            QueryPendingSendToEth: {
                encode(message: _34.QueryPendingSendToEth, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _34.QueryPendingSendToEth;
                fromPartial(object: Partial<_34.QueryPendingSendToEth>): _34.QueryPendingSendToEth;
            };
            QueryPendingSendToEthResponse: {
                encode(message: _34.QueryPendingSendToEthResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _34.QueryPendingSendToEthResponse;
                fromPartial(object: Partial<_34.QueryPendingSendToEthResponse>): _34.QueryPendingSendToEthResponse;
            };
            QueryModuleStateRequest: {
                encode(_: _34.QueryModuleStateRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _34.QueryModuleStateRequest;
                fromPartial(_: Partial<_34.QueryModuleStateRequest>): _34.QueryModuleStateRequest;
            };
            QueryModuleStateResponse: {
                encode(message: _34.QueryModuleStateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _34.QueryModuleStateResponse;
                fromPartial(object: Partial<_34.QueryModuleStateResponse>): _34.QueryModuleStateResponse;
            };
            MissingNoncesRequest: {
                encode(_: _34.MissingNoncesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _34.MissingNoncesRequest;
                fromPartial(_: Partial<_34.MissingNoncesRequest>): _34.MissingNoncesRequest;
            };
            MissingNoncesResponse: {
                encode(message: _34.MissingNoncesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _34.MissingNoncesResponse;
                fromPartial(object: Partial<_34.MissingNoncesResponse>): _34.MissingNoncesResponse;
            };
            BlacklistEthereumAddressesProposal: {
                encode(message: _33.BlacklistEthereumAddressesProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _33.BlacklistEthereumAddressesProposal;
                fromPartial(object: Partial<_33.BlacklistEthereumAddressesProposal>): _33.BlacklistEthereumAddressesProposal;
            };
            RevokeEthereumBlacklistProposal: {
                encode(message: _33.RevokeEthereumBlacklistProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _33.RevokeEthereumBlacklistProposal;
                fromPartial(object: Partial<_33.RevokeEthereumBlacklistProposal>): _33.RevokeEthereumBlacklistProposal;
            };
            IDSet: {
                encode(message: _32.IDSet, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _32.IDSet;
                fromPartial(object: Partial<_32.IDSet>): _32.IDSet;
            };
            BatchFees: {
                encode(message: _32.BatchFees, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _32.BatchFees;
                fromPartial(object: Partial<_32.BatchFees>): _32.BatchFees;
            };
            Params: {
                encode(message: _31.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _31.Params;
                fromPartial(object: Partial<_31.Params>): _31.Params;
            };
            MsgSetOrchestratorAddresses: {
                encode(message: _30.MsgSetOrchestratorAddresses, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _30.MsgSetOrchestratorAddresses;
                fromPartial(object: Partial<_30.MsgSetOrchestratorAddresses>): _30.MsgSetOrchestratorAddresses;
            };
            MsgSetOrchestratorAddressesResponse: {
                encode(_: _30.MsgSetOrchestratorAddressesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _30.MsgSetOrchestratorAddressesResponse;
                fromPartial(_: Partial<_30.MsgSetOrchestratorAddressesResponse>): _30.MsgSetOrchestratorAddressesResponse;
            };
            MsgValsetConfirm: {
                encode(message: _30.MsgValsetConfirm, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _30.MsgValsetConfirm;
                fromPartial(object: Partial<_30.MsgValsetConfirm>): _30.MsgValsetConfirm;
            };
            MsgValsetConfirmResponse: {
                encode(_: _30.MsgValsetConfirmResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _30.MsgValsetConfirmResponse;
                fromPartial(_: Partial<_30.MsgValsetConfirmResponse>): _30.MsgValsetConfirmResponse;
            };
            MsgSendToEth: {
                encode(message: _30.MsgSendToEth, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _30.MsgSendToEth;
                fromPartial(object: Partial<_30.MsgSendToEth>): _30.MsgSendToEth;
            };
            MsgSendToEthResponse: {
                encode(_: _30.MsgSendToEthResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _30.MsgSendToEthResponse;
                fromPartial(_: Partial<_30.MsgSendToEthResponse>): _30.MsgSendToEthResponse;
            };
            MsgRequestBatch: {
                encode(message: _30.MsgRequestBatch, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _30.MsgRequestBatch;
                fromPartial(object: Partial<_30.MsgRequestBatch>): _30.MsgRequestBatch;
            };
            MsgRequestBatchResponse: {
                encode(_: _30.MsgRequestBatchResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _30.MsgRequestBatchResponse;
                fromPartial(_: Partial<_30.MsgRequestBatchResponse>): _30.MsgRequestBatchResponse;
            };
            MsgConfirmBatch: {
                encode(message: _30.MsgConfirmBatch, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _30.MsgConfirmBatch;
                fromPartial(object: Partial<_30.MsgConfirmBatch>): _30.MsgConfirmBatch;
            };
            MsgConfirmBatchResponse: {
                encode(_: _30.MsgConfirmBatchResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _30.MsgConfirmBatchResponse;
                fromPartial(_: Partial<_30.MsgConfirmBatchResponse>): _30.MsgConfirmBatchResponse;
            };
            MsgDepositClaim: {
                encode(message: _30.MsgDepositClaim, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _30.MsgDepositClaim;
                fromPartial(object: Partial<_30.MsgDepositClaim>): _30.MsgDepositClaim;
            };
            MsgDepositClaimResponse: {
                encode(_: _30.MsgDepositClaimResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _30.MsgDepositClaimResponse;
                fromPartial(_: Partial<_30.MsgDepositClaimResponse>): _30.MsgDepositClaimResponse;
            };
            MsgWithdrawClaim: {
                encode(message: _30.MsgWithdrawClaim, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _30.MsgWithdrawClaim;
                fromPartial(object: Partial<_30.MsgWithdrawClaim>): _30.MsgWithdrawClaim;
            };
            MsgWithdrawClaimResponse: {
                encode(_: _30.MsgWithdrawClaimResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _30.MsgWithdrawClaimResponse;
                fromPartial(_: Partial<_30.MsgWithdrawClaimResponse>): _30.MsgWithdrawClaimResponse;
            };
            MsgERC20DeployedClaim: {
                encode(message: _30.MsgERC20DeployedClaim, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _30.MsgERC20DeployedClaim;
                fromPartial(object: Partial<_30.MsgERC20DeployedClaim>): _30.MsgERC20DeployedClaim;
            };
            MsgERC20DeployedClaimResponse: {
                encode(_: _30.MsgERC20DeployedClaimResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _30.MsgERC20DeployedClaimResponse;
                fromPartial(_: Partial<_30.MsgERC20DeployedClaimResponse>): _30.MsgERC20DeployedClaimResponse;
            };
            MsgCancelSendToEth: {
                encode(message: _30.MsgCancelSendToEth, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _30.MsgCancelSendToEth;
                fromPartial(object: Partial<_30.MsgCancelSendToEth>): _30.MsgCancelSendToEth;
            };
            MsgCancelSendToEthResponse: {
                encode(_: _30.MsgCancelSendToEthResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _30.MsgCancelSendToEthResponse;
                fromPartial(_: Partial<_30.MsgCancelSendToEthResponse>): _30.MsgCancelSendToEthResponse;
            };
            MsgSubmitBadSignatureEvidence: {
                encode(message: _30.MsgSubmitBadSignatureEvidence, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _30.MsgSubmitBadSignatureEvidence;
                fromPartial(object: Partial<_30.MsgSubmitBadSignatureEvidence>): _30.MsgSubmitBadSignatureEvidence;
            };
            MsgSubmitBadSignatureEvidenceResponse: {
                encode(_: _30.MsgSubmitBadSignatureEvidenceResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _30.MsgSubmitBadSignatureEvidenceResponse;
                fromPartial(_: Partial<_30.MsgSubmitBadSignatureEvidenceResponse>): _30.MsgSubmitBadSignatureEvidenceResponse;
            };
            MsgValsetUpdatedClaim: {
                encode(message: _30.MsgValsetUpdatedClaim, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _30.MsgValsetUpdatedClaim;
                fromPartial(object: Partial<_30.MsgValsetUpdatedClaim>): _30.MsgValsetUpdatedClaim;
            };
            MsgValsetUpdatedClaimResponse: {
                encode(_: _30.MsgValsetUpdatedClaimResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _30.MsgValsetUpdatedClaimResponse;
                fromPartial(_: Partial<_30.MsgValsetUpdatedClaimResponse>): _30.MsgValsetUpdatedClaimResponse;
            };
            MsgUpdateParams: {
                encode(message: _30.MsgUpdateParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _30.MsgUpdateParams;
                fromPartial(object: Partial<_30.MsgUpdateParams>): _30.MsgUpdateParams;
            };
            MsgUpdateParamsResponse: {
                encode(_: _30.MsgUpdateParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _30.MsgUpdateParamsResponse;
                fromPartial(_: Partial<_30.MsgUpdateParamsResponse>): _30.MsgUpdateParamsResponse;
            };
            GenesisState: {
                encode(message: _29.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _29.GenesisState;
                fromPartial(object: Partial<_29.GenesisState>): _29.GenesisState;
            };
            EventAttestationObserved: {
                encode(message: _28.EventAttestationObserved, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _28.EventAttestationObserved;
                fromPartial(object: Partial<_28.EventAttestationObserved>): _28.EventAttestationObserved;
            };
            EventBridgeWithdrawCanceled: {
                encode(message: _28.EventBridgeWithdrawCanceled, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _28.EventBridgeWithdrawCanceled;
                fromPartial(object: Partial<_28.EventBridgeWithdrawCanceled>): _28.EventBridgeWithdrawCanceled;
            };
            EventOutgoingBatch: {
                encode(message: _28.EventOutgoingBatch, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _28.EventOutgoingBatch;
                fromPartial(object: Partial<_28.EventOutgoingBatch>): _28.EventOutgoingBatch;
            };
            EventOutgoingBatchCanceled: {
                encode(message: _28.EventOutgoingBatchCanceled, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _28.EventOutgoingBatchCanceled;
                fromPartial(object: Partial<_28.EventOutgoingBatchCanceled>): _28.EventOutgoingBatchCanceled;
            };
            EventValsetUpdateRequest: {
                encode(message: _28.EventValsetUpdateRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _28.EventValsetUpdateRequest;
                fromPartial(object: Partial<_28.EventValsetUpdateRequest>): _28.EventValsetUpdateRequest;
            };
            EventSetOrchestratorAddresses: {
                encode(message: _28.EventSetOrchestratorAddresses, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _28.EventSetOrchestratorAddresses;
                fromPartial(object: Partial<_28.EventSetOrchestratorAddresses>): _28.EventSetOrchestratorAddresses;
            };
            EventValsetConfirm: {
                encode(message: _28.EventValsetConfirm, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _28.EventValsetConfirm;
                fromPartial(object: Partial<_28.EventValsetConfirm>): _28.EventValsetConfirm;
            };
            EventSendToEth: {
                encode(message: _28.EventSendToEth, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _28.EventSendToEth;
                fromPartial(object: Partial<_28.EventSendToEth>): _28.EventSendToEth;
            };
            EventConfirmBatch: {
                encode(message: _28.EventConfirmBatch, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _28.EventConfirmBatch;
                fromPartial(object: Partial<_28.EventConfirmBatch>): _28.EventConfirmBatch;
            };
            EventAttestationVote: {
                encode(message: _28.EventAttestationVote, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _28.EventAttestationVote;
                fromPartial(object: Partial<_28.EventAttestationVote>): _28.EventAttestationVote;
            };
            EventDepositClaim: {
                encode(message: _28.EventDepositClaim, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _28.EventDepositClaim;
                fromPartial(object: Partial<_28.EventDepositClaim>): _28.EventDepositClaim;
            };
            EventWithdrawClaim: {
                encode(message: _28.EventWithdrawClaim, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _28.EventWithdrawClaim;
                fromPartial(object: Partial<_28.EventWithdrawClaim>): _28.EventWithdrawClaim;
            };
            EventERC20DeployedClaim: {
                encode(message: _28.EventERC20DeployedClaim, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _28.EventERC20DeployedClaim;
                fromPartial(object: Partial<_28.EventERC20DeployedClaim>): _28.EventERC20DeployedClaim;
            };
            EventValsetUpdateClaim: {
                encode(message: _28.EventValsetUpdateClaim, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _28.EventValsetUpdateClaim;
                fromPartial(object: Partial<_28.EventValsetUpdateClaim>): _28.EventValsetUpdateClaim;
            };
            EventCancelSendToEth: {
                encode(message: _28.EventCancelSendToEth, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _28.EventCancelSendToEth;
                fromPartial(object: Partial<_28.EventCancelSendToEth>): _28.EventCancelSendToEth;
            };
            EventSubmitBadSignatureEvidence: {
                encode(message: _28.EventSubmitBadSignatureEvidence, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _28.EventSubmitBadSignatureEvidence;
                fromPartial(object: Partial<_28.EventSubmitBadSignatureEvidence>): _28.EventSubmitBadSignatureEvidence;
            };
            EventValidatorSlash: {
                encode(message: _28.EventValidatorSlash, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _28.EventValidatorSlash;
                fromPartial(object: Partial<_28.EventValidatorSlash>): _28.EventValidatorSlash;
            };
            signTypeFromJSON(object: any): _27.SignType;
            signTypeToJSON(object: _27.SignType): string;
            SignType: typeof _27.SignType;
            SignTypeSDKType: typeof _27.SignType;
            OutgoingTxBatch: {
                encode(message: _26.OutgoingTxBatch, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _26.OutgoingTxBatch;
                fromPartial(object: Partial<_26.OutgoingTxBatch>): _26.OutgoingTxBatch;
            };
            OutgoingTransferTx: {
                encode(message: _26.OutgoingTransferTx, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _26.OutgoingTransferTx;
                fromPartial(object: Partial<_26.OutgoingTransferTx>): _26.OutgoingTransferTx;
            };
            claimTypeFromJSON(object: any): _25.ClaimType;
            claimTypeToJSON(object: _25.ClaimType): string;
            ClaimType: typeof _25.ClaimType;
            ClaimTypeSDKType: typeof _25.ClaimType;
            Attestation: {
                encode(message: _25.Attestation, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _25.Attestation;
                fromPartial(object: Partial<_25.Attestation>): _25.Attestation;
            };
            ERC20Token: {
                encode(message: _25.ERC20Token, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _25.ERC20Token;
                fromPartial(object: Partial<_25.ERC20Token>): _25.ERC20Token;
            };
        };
    }
    namespace tokenfactory {
        const v1beta1: {
            MsgClientImpl: typeof _241.MsgClientImpl;
            QueryClientImpl: typeof _233.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                params(request?: _40.QueryParamsRequest): Promise<_40.QueryParamsResponse>;
                denomAuthorityMetadata(request: _40.QueryDenomAuthorityMetadataRequest): Promise<_40.QueryDenomAuthorityMetadataResponse>;
                denomsFromCreator(request: _40.QueryDenomsFromCreatorRequest): Promise<_40.QueryDenomsFromCreatorResponse>;
                tokenfactoryModuleState(request?: _40.QueryModuleStateRequest): Promise<_40.QueryModuleStateResponse>;
            };
            LCDQueryClient: typeof _225.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    createDenom(value: _41.MsgCreateDenom): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    mint(value: _41.MsgMint): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    burn(value: _41.MsgBurn): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    changeAdmin(value: _41.MsgChangeAdmin): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    setDenomMetadata(value: _41.MsgSetDenomMetadata): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    updateParams(value: _41.MsgUpdateParams): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    createDenom(value: _41.MsgCreateDenom): {
                        typeUrl: string;
                        value: _41.MsgCreateDenom;
                    };
                    mint(value: _41.MsgMint): {
                        typeUrl: string;
                        value: _41.MsgMint;
                    };
                    burn(value: _41.MsgBurn): {
                        typeUrl: string;
                        value: _41.MsgBurn;
                    };
                    changeAdmin(value: _41.MsgChangeAdmin): {
                        typeUrl: string;
                        value: _41.MsgChangeAdmin;
                    };
                    setDenomMetadata(value: _41.MsgSetDenomMetadata): {
                        typeUrl: string;
                        value: _41.MsgSetDenomMetadata;
                    };
                    updateParams(value: _41.MsgUpdateParams): {
                        typeUrl: string;
                        value: _41.MsgUpdateParams;
                    };
                };
                fromJSON: {
                    createDenom(value: any): {
                        typeUrl: string;
                        value: _41.MsgCreateDenom;
                    };
                    mint(value: any): {
                        typeUrl: string;
                        value: _41.MsgMint;
                    };
                    burn(value: any): {
                        typeUrl: string;
                        value: _41.MsgBurn;
                    };
                    changeAdmin(value: any): {
                        typeUrl: string;
                        value: _41.MsgChangeAdmin;
                    };
                    setDenomMetadata(value: any): {
                        typeUrl: string;
                        value: _41.MsgSetDenomMetadata;
                    };
                    updateParams(value: any): {
                        typeUrl: string;
                        value: _41.MsgUpdateParams;
                    };
                };
                fromPartial: {
                    createDenom(value: _41.MsgCreateDenom): {
                        typeUrl: string;
                        value: _41.MsgCreateDenom;
                    };
                    mint(value: _41.MsgMint): {
                        typeUrl: string;
                        value: _41.MsgMint;
                    };
                    burn(value: _41.MsgBurn): {
                        typeUrl: string;
                        value: _41.MsgBurn;
                    };
                    changeAdmin(value: _41.MsgChangeAdmin): {
                        typeUrl: string;
                        value: _41.MsgChangeAdmin;
                    };
                    setDenomMetadata(value: _41.MsgSetDenomMetadata): {
                        typeUrl: string;
                        value: _41.MsgSetDenomMetadata;
                    };
                    updateParams(value: _41.MsgUpdateParams): {
                        typeUrl: string;
                        value: _41.MsgUpdateParams;
                    };
                };
            };
            AminoConverter: {
                "/injective.tokenfactory.v1beta1.MsgCreateDenom": {
                    aminoType: string;
                    toAmino: ({ sender, subdenom }: _41.MsgCreateDenom) => {
                        sender: string;
                        subdenom: string;
                    };
                    fromAmino: ({ sender, subdenom }: {
                        sender: string;
                        subdenom: string;
                    }) => _41.MsgCreateDenom;
                };
                "/injective.tokenfactory.v1beta1.MsgMint": {
                    aminoType: string;
                    toAmino: ({ sender, amount }: _41.MsgMint) => {
                        sender: string;
                        amount: {
                            denom: string;
                            amount: string;
                        };
                    };
                    fromAmino: ({ sender, amount }: {
                        sender: string;
                        amount: {
                            denom: string;
                            amount: string;
                        };
                    }) => _41.MsgMint;
                };
                "/injective.tokenfactory.v1beta1.MsgBurn": {
                    aminoType: string;
                    toAmino: ({ sender, amount }: _41.MsgBurn) => {
                        sender: string;
                        amount: {
                            denom: string;
                            amount: string;
                        };
                    };
                    fromAmino: ({ sender, amount }: {
                        sender: string;
                        amount: {
                            denom: string;
                            amount: string;
                        };
                    }) => _41.MsgBurn;
                };
                "/injective.tokenfactory.v1beta1.MsgChangeAdmin": {
                    aminoType: string;
                    toAmino: ({ sender, denom, newAdmin }: _41.MsgChangeAdmin) => {
                        sender: string;
                        denom: string;
                        new_admin: string;
                    };
                    fromAmino: ({ sender, denom, new_admin }: {
                        sender: string;
                        denom: string;
                        new_admin: string;
                    }) => _41.MsgChangeAdmin;
                };
                "/injective.tokenfactory.v1beta1.MsgSetDenomMetadata": {
                    aminoType: string;
                    toAmino: ({ sender, metadata }: _41.MsgSetDenomMetadata) => {
                        sender: string;
                        metadata: {
                            description: string;
                            denom_units: {
                                denom: string;
                                exponent: number;
                                aliases: string[];
                            }[];
                            base: string;
                            display: string;
                            name: string;
                            symbol: string;
                            uri: string;
                            uri_hash: string;
                        };
                    };
                    fromAmino: ({ sender, metadata }: {
                        sender: string;
                        metadata: {
                            description: string;
                            denom_units: {
                                denom: string;
                                exponent: number;
                                aliases: string[];
                            }[];
                            base: string;
                            display: string;
                            name: string;
                            symbol: string;
                            uri: string;
                            uri_hash: string;
                        };
                    }) => _41.MsgSetDenomMetadata;
                };
                "/injective.tokenfactory.v1beta1.MsgUpdateParams": {
                    aminoType: string;
                    toAmino: ({ authority, params }: _41.MsgUpdateParams) => {
                        authority: string;
                        params: {
                            send_enabled: {
                                denom: string;
                                enabled: boolean;
                            }[];
                            default_send_enabled: boolean;
                        };
                    };
                    fromAmino: ({ authority, params }: {
                        authority: string;
                        params: {
                            send_enabled: {
                                denom: string;
                                enabled: boolean;
                            }[];
                            default_send_enabled: boolean;
                        };
                    }) => _41.MsgUpdateParams;
                };
            };
            MsgCreateDenom: {
                encode(message: _41.MsgCreateDenom, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _41.MsgCreateDenom;
                fromPartial(object: Partial<_41.MsgCreateDenom>): _41.MsgCreateDenom;
            };
            MsgCreateDenomResponse: {
                encode(message: _41.MsgCreateDenomResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _41.MsgCreateDenomResponse;
                fromPartial(object: Partial<_41.MsgCreateDenomResponse>): _41.MsgCreateDenomResponse;
            };
            MsgMint: {
                encode(message: _41.MsgMint, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _41.MsgMint;
                fromPartial(object: Partial<_41.MsgMint>): _41.MsgMint;
            };
            MsgMintResponse: {
                encode(_: _41.MsgMintResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _41.MsgMintResponse;
                fromPartial(_: Partial<_41.MsgMintResponse>): _41.MsgMintResponse;
            };
            MsgBurn: {
                encode(message: _41.MsgBurn, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _41.MsgBurn;
                fromPartial(object: Partial<_41.MsgBurn>): _41.MsgBurn;
            };
            MsgBurnResponse: {
                encode(_: _41.MsgBurnResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _41.MsgBurnResponse;
                fromPartial(_: Partial<_41.MsgBurnResponse>): _41.MsgBurnResponse;
            };
            MsgChangeAdmin: {
                encode(message: _41.MsgChangeAdmin, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _41.MsgChangeAdmin;
                fromPartial(object: Partial<_41.MsgChangeAdmin>): _41.MsgChangeAdmin;
            };
            MsgChangeAdminResponse: {
                encode(_: _41.MsgChangeAdminResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _41.MsgChangeAdminResponse;
                fromPartial(_: Partial<_41.MsgChangeAdminResponse>): _41.MsgChangeAdminResponse;
            };
            MsgSetDenomMetadata: {
                encode(message: _41.MsgSetDenomMetadata, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _41.MsgSetDenomMetadata;
                fromPartial(object: Partial<_41.MsgSetDenomMetadata>): _41.MsgSetDenomMetadata;
            };
            MsgSetDenomMetadataResponse: {
                encode(_: _41.MsgSetDenomMetadataResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _41.MsgSetDenomMetadataResponse;
                fromPartial(_: Partial<_41.MsgSetDenomMetadataResponse>): _41.MsgSetDenomMetadataResponse;
            };
            MsgUpdateParams: {
                encode(message: _41.MsgUpdateParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _41.MsgUpdateParams;
                fromPartial(object: Partial<_41.MsgUpdateParams>): _41.MsgUpdateParams;
            };
            MsgUpdateParamsResponse: {
                encode(_: _41.MsgUpdateParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _41.MsgUpdateParamsResponse;
                fromPartial(_: Partial<_41.MsgUpdateParamsResponse>): _41.MsgUpdateParamsResponse;
            };
            QueryParamsRequest: {
                encode(_: _40.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _40.QueryParamsRequest;
                fromPartial(_: Partial<_40.QueryParamsRequest>): _40.QueryParamsRequest;
            };
            QueryParamsResponse: {
                encode(message: _40.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _40.QueryParamsResponse;
                fromPartial(object: Partial<_40.QueryParamsResponse>): _40.QueryParamsResponse;
            };
            QueryDenomAuthorityMetadataRequest: {
                encode(message: _40.QueryDenomAuthorityMetadataRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _40.QueryDenomAuthorityMetadataRequest;
                fromPartial(object: Partial<_40.QueryDenomAuthorityMetadataRequest>): _40.QueryDenomAuthorityMetadataRequest;
            };
            QueryDenomAuthorityMetadataResponse: {
                encode(message: _40.QueryDenomAuthorityMetadataResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _40.QueryDenomAuthorityMetadataResponse;
                fromPartial(object: Partial<_40.QueryDenomAuthorityMetadataResponse>): _40.QueryDenomAuthorityMetadataResponse;
            };
            QueryDenomsFromCreatorRequest: {
                encode(message: _40.QueryDenomsFromCreatorRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _40.QueryDenomsFromCreatorRequest;
                fromPartial(object: Partial<_40.QueryDenomsFromCreatorRequest>): _40.QueryDenomsFromCreatorRequest;
            };
            QueryDenomsFromCreatorResponse: {
                encode(message: _40.QueryDenomsFromCreatorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _40.QueryDenomsFromCreatorResponse;
                fromPartial(object: Partial<_40.QueryDenomsFromCreatorResponse>): _40.QueryDenomsFromCreatorResponse;
            };
            QueryModuleStateRequest: {
                encode(_: _40.QueryModuleStateRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _40.QueryModuleStateRequest;
                fromPartial(_: Partial<_40.QueryModuleStateRequest>): _40.QueryModuleStateRequest;
            };
            QueryModuleStateResponse: {
                encode(message: _40.QueryModuleStateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _40.QueryModuleStateResponse;
                fromPartial(object: Partial<_40.QueryModuleStateResponse>): _40.QueryModuleStateResponse;
            };
            Params: {
                encode(message: _39.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _39.Params;
                fromPartial(object: Partial<_39.Params>): _39.Params;
            };
            GenesisState: {
                encode(message: _38.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _38.GenesisState;
                fromPartial(object: Partial<_38.GenesisState>): _38.GenesisState;
            };
            GenesisDenom: {
                encode(message: _38.GenesisDenom, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _38.GenesisDenom;
                fromPartial(object: Partial<_38.GenesisDenom>): _38.GenesisDenom;
            };
            EventCreateTFDenom: {
                encode(message: _37.EventCreateTFDenom, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _37.EventCreateTFDenom;
                fromPartial(object: Partial<_37.EventCreateTFDenom>): _37.EventCreateTFDenom;
            };
            EventMintTFDenom: {
                encode(message: _37.EventMintTFDenom, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _37.EventMintTFDenom;
                fromPartial(object: Partial<_37.EventMintTFDenom>): _37.EventMintTFDenom;
            };
            EventBurnTFDenom: {
                encode(message: _37.EventBurnTFDenom, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _37.EventBurnTFDenom;
                fromPartial(object: Partial<_37.EventBurnTFDenom>): _37.EventBurnTFDenom;
            };
            EventChangeTFAdmin: {
                encode(message: _37.EventChangeTFAdmin, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _37.EventChangeTFAdmin;
                fromPartial(object: Partial<_37.EventChangeTFAdmin>): _37.EventChangeTFAdmin;
            };
            EventSetTFDenomMetadata: {
                encode(message: _37.EventSetTFDenomMetadata, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _37.EventSetTFDenomMetadata;
                fromPartial(object: Partial<_37.EventSetTFDenomMetadata>): _37.EventSetTFDenomMetadata;
            };
            DenomAuthorityMetadata: {
                encode(message: _36.DenomAuthorityMetadata, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _36.DenomAuthorityMetadata;
                fromPartial(object: Partial<_36.DenomAuthorityMetadata>): _36.DenomAuthorityMetadata;
            };
        };
    }
    namespace types {
        const v1beta1: {
            TxResponseGenericMessage: {
                encode(message: _44.TxResponseGenericMessage, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _44.TxResponseGenericMessage;
                fromPartial(object: Partial<_44.TxResponseGenericMessage>): _44.TxResponseGenericMessage;
            };
            TxResponseData: {
                encode(message: _44.TxResponseData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _44.TxResponseData;
                fromPartial(object: Partial<_44.TxResponseData>): _44.TxResponseData;
            };
            ExtensionOptionsWeb3Tx: {
                encode(message: _43.ExtensionOptionsWeb3Tx, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _43.ExtensionOptionsWeb3Tx;
                fromPartial(object: Partial<_43.ExtensionOptionsWeb3Tx>): _43.ExtensionOptionsWeb3Tx;
            };
            EthAccount: {
                encode(message: _42.EthAccount, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _42.EthAccount;
                fromPartial(object: Partial<_42.EthAccount>): _42.EthAccount;
            };
        };
    }
    namespace wasmx {
        const v1: {
            MsgClientImpl: typeof _242.MsgClientImpl;
            QueryClientImpl: typeof _234.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                wasmxParams(request?: _48.QueryWasmxParamsRequest): Promise<_48.QueryWasmxParamsResponse>;
                contractRegistrationInfo(request: _48.QueryContractRegistrationInfoRequest): Promise<_48.QueryContractRegistrationInfoResponse>;
                wasmxModuleState(request?: _48.QueryModuleStateRequest): Promise<_48.QueryModuleStateResponse>;
            };
            LCDQueryClient: typeof _226.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    updateRegistryContractParams(value: _49.MsgUpdateContract): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    activateRegistryContract(value: _49.MsgActivateContract): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    deactivateRegistryContract(value: _49.MsgDeactivateContract): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    executeContractCompat(value: _49.MsgExecuteContractCompat): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    updateParams(value: _49.MsgUpdateParams): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    registerContract(value: _49.MsgRegisterContract): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    updateRegistryContractParams(value: _49.MsgUpdateContract): {
                        typeUrl: string;
                        value: _49.MsgUpdateContract;
                    };
                    activateRegistryContract(value: _49.MsgActivateContract): {
                        typeUrl: string;
                        value: _49.MsgActivateContract;
                    };
                    deactivateRegistryContract(value: _49.MsgDeactivateContract): {
                        typeUrl: string;
                        value: _49.MsgDeactivateContract;
                    };
                    executeContractCompat(value: _49.MsgExecuteContractCompat): {
                        typeUrl: string;
                        value: _49.MsgExecuteContractCompat;
                    };
                    updateParams(value: _49.MsgUpdateParams): {
                        typeUrl: string;
                        value: _49.MsgUpdateParams;
                    };
                    registerContract(value: _49.MsgRegisterContract): {
                        typeUrl: string;
                        value: _49.MsgRegisterContract;
                    };
                };
                fromJSON: {
                    updateRegistryContractParams(value: any): {
                        typeUrl: string;
                        value: _49.MsgUpdateContract;
                    };
                    activateRegistryContract(value: any): {
                        typeUrl: string;
                        value: _49.MsgActivateContract;
                    };
                    deactivateRegistryContract(value: any): {
                        typeUrl: string;
                        value: _49.MsgDeactivateContract;
                    };
                    executeContractCompat(value: any): {
                        typeUrl: string;
                        value: _49.MsgExecuteContractCompat;
                    };
                    updateParams(value: any): {
                        typeUrl: string;
                        value: _49.MsgUpdateParams;
                    };
                    registerContract(value: any): {
                        typeUrl: string;
                        value: _49.MsgRegisterContract;
                    };
                };
                fromPartial: {
                    updateRegistryContractParams(value: _49.MsgUpdateContract): {
                        typeUrl: string;
                        value: _49.MsgUpdateContract;
                    };
                    activateRegistryContract(value: _49.MsgActivateContract): {
                        typeUrl: string;
                        value: _49.MsgActivateContract;
                    };
                    deactivateRegistryContract(value: _49.MsgDeactivateContract): {
                        typeUrl: string;
                        value: _49.MsgDeactivateContract;
                    };
                    executeContractCompat(value: _49.MsgExecuteContractCompat): {
                        typeUrl: string;
                        value: _49.MsgExecuteContractCompat;
                    };
                    updateParams(value: _49.MsgUpdateParams): {
                        typeUrl: string;
                        value: _49.MsgUpdateParams;
                    };
                    registerContract(value: _49.MsgRegisterContract): {
                        typeUrl: string;
                        value: _49.MsgRegisterContract;
                    };
                };
            };
            AminoConverter: {
                "/injective.wasmx.v1.MsgUpdateContract": {
                    aminoType: string;
                    toAmino: ({ sender, contractAddress, gasLimit, gasPrice, adminAddress }: _49.MsgUpdateContract) => {
                        sender: string;
                        contract_address: string;
                        gas_limit: string;
                        gas_price: string;
                        admin_address: string;
                    };
                    fromAmino: ({ sender, contract_address, gas_limit, gas_price, admin_address }: {
                        sender: string;
                        contract_address: string;
                        gas_limit: string;
                        gas_price: string;
                        admin_address: string;
                    }) => _49.MsgUpdateContract;
                };
                "/injective.wasmx.v1.MsgActivateContract": {
                    aminoType: string;
                    toAmino: ({ sender, contractAddress }: _49.MsgActivateContract) => {
                        sender: string;
                        contract_address: string;
                    };
                    fromAmino: ({ sender, contract_address }: {
                        sender: string;
                        contract_address: string;
                    }) => _49.MsgActivateContract;
                };
                "/injective.wasmx.v1.MsgDeactivateContract": {
                    aminoType: string;
                    toAmino: ({ sender, contractAddress }: _49.MsgDeactivateContract) => {
                        sender: string;
                        contract_address: string;
                    };
                    fromAmino: ({ sender, contract_address }: {
                        sender: string;
                        contract_address: string;
                    }) => _49.MsgDeactivateContract;
                };
                "/injective.wasmx.v1.MsgExecuteContractCompat": {
                    aminoType: string;
                    toAmino: ({ sender, contract, msg, funds }: _49.MsgExecuteContractCompat) => {
                        sender: string;
                        contract: string;
                        msg: string;
                        funds: string;
                    };
                    fromAmino: ({ sender, contract, msg, funds }: {
                        sender: string;
                        contract: string;
                        msg: string;
                        funds: string;
                    }) => _49.MsgExecuteContractCompat;
                };
                "/injective.wasmx.v1.MsgUpdateParams": {
                    aminoType: string;
                    toAmino: ({ authority, params }: _49.MsgUpdateParams) => {
                        authority: string;
                        params: {
                            is_execution_enabled: boolean;
                            max_begin_block_total_gas: string;
                            max_contract_gas_limit: string;
                            min_gas_price: string;
                        };
                    };
                    fromAmino: ({ authority, params }: {
                        authority: string;
                        params: {
                            is_execution_enabled: boolean;
                            max_begin_block_total_gas: string;
                            max_contract_gas_limit: string;
                            min_gas_price: string;
                        };
                    }) => _49.MsgUpdateParams;
                };
                "/injective.wasmx.v1.MsgRegisterContract": {
                    aminoType: string;
                    toAmino: ({ sender, contractRegistrationRequest }: _49.MsgRegisterContract) => {
                        sender: string;
                        contract_registration_request: {
                            contract_address: string;
                            gas_limit: string;
                            gas_price: string;
                            should_pin_contract: boolean;
                            is_migration_allowed: boolean;
                            code_id: string;
                            admin_address: string;
                            granter_address: string;
                            funding_mode: number;
                        };
                    };
                    fromAmino: ({ sender, contract_registration_request }: {
                        sender: string;
                        contract_registration_request: {
                            contract_address: string;
                            gas_limit: string;
                            gas_price: string;
                            should_pin_contract: boolean;
                            is_migration_allowed: boolean;
                            code_id: string;
                            admin_address: string;
                            granter_address: string;
                            funding_mode: number;
                        };
                    }) => _49.MsgRegisterContract;
                };
            };
            Params: {
                encode(message: _50.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _50.Params;
                fromPartial(object: Partial<_50.Params>): _50.Params;
            };
            RegisteredContract: {
                encode(message: _50.RegisteredContract, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _50.RegisteredContract;
                fromPartial(object: Partial<_50.RegisteredContract>): _50.RegisteredContract;
            };
            MsgExecuteContractCompat: {
                encode(message: _49.MsgExecuteContractCompat, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _49.MsgExecuteContractCompat;
                fromPartial(object: Partial<_49.MsgExecuteContractCompat>): _49.MsgExecuteContractCompat;
            };
            MsgExecuteContractCompatResponse: {
                encode(message: _49.MsgExecuteContractCompatResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _49.MsgExecuteContractCompatResponse;
                fromPartial(object: Partial<_49.MsgExecuteContractCompatResponse>): _49.MsgExecuteContractCompatResponse;
            };
            MsgUpdateContract: {
                encode(message: _49.MsgUpdateContract, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _49.MsgUpdateContract;
                fromPartial(object: Partial<_49.MsgUpdateContract>): _49.MsgUpdateContract;
            };
            MsgUpdateContractResponse: {
                encode(_: _49.MsgUpdateContractResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _49.MsgUpdateContractResponse;
                fromPartial(_: Partial<_49.MsgUpdateContractResponse>): _49.MsgUpdateContractResponse;
            };
            MsgActivateContract: {
                encode(message: _49.MsgActivateContract, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _49.MsgActivateContract;
                fromPartial(object: Partial<_49.MsgActivateContract>): _49.MsgActivateContract;
            };
            MsgActivateContractResponse: {
                encode(_: _49.MsgActivateContractResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _49.MsgActivateContractResponse;
                fromPartial(_: Partial<_49.MsgActivateContractResponse>): _49.MsgActivateContractResponse;
            };
            MsgDeactivateContract: {
                encode(message: _49.MsgDeactivateContract, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _49.MsgDeactivateContract;
                fromPartial(object: Partial<_49.MsgDeactivateContract>): _49.MsgDeactivateContract;
            };
            MsgDeactivateContractResponse: {
                encode(_: _49.MsgDeactivateContractResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _49.MsgDeactivateContractResponse;
                fromPartial(_: Partial<_49.MsgDeactivateContractResponse>): _49.MsgDeactivateContractResponse;
            };
            MsgUpdateParams: {
                encode(message: _49.MsgUpdateParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _49.MsgUpdateParams;
                fromPartial(object: Partial<_49.MsgUpdateParams>): _49.MsgUpdateParams;
            };
            MsgUpdateParamsResponse: {
                encode(_: _49.MsgUpdateParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _49.MsgUpdateParamsResponse;
                fromPartial(_: Partial<_49.MsgUpdateParamsResponse>): _49.MsgUpdateParamsResponse;
            };
            MsgRegisterContract: {
                encode(message: _49.MsgRegisterContract, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _49.MsgRegisterContract;
                fromPartial(object: Partial<_49.MsgRegisterContract>): _49.MsgRegisterContract;
            };
            MsgRegisterContractResponse: {
                encode(_: _49.MsgRegisterContractResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _49.MsgRegisterContractResponse;
                fromPartial(_: Partial<_49.MsgRegisterContractResponse>): _49.MsgRegisterContractResponse;
            };
            QueryWasmxParamsRequest: {
                encode(_: _48.QueryWasmxParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _48.QueryWasmxParamsRequest;
                fromPartial(_: Partial<_48.QueryWasmxParamsRequest>): _48.QueryWasmxParamsRequest;
            };
            QueryWasmxParamsResponse: {
                encode(message: _48.QueryWasmxParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _48.QueryWasmxParamsResponse;
                fromPartial(object: Partial<_48.QueryWasmxParamsResponse>): _48.QueryWasmxParamsResponse;
            };
            QueryModuleStateRequest: {
                encode(_: _48.QueryModuleStateRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _48.QueryModuleStateRequest;
                fromPartial(_: Partial<_48.QueryModuleStateRequest>): _48.QueryModuleStateRequest;
            };
            QueryModuleStateResponse: {
                encode(message: _48.QueryModuleStateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _48.QueryModuleStateResponse;
                fromPartial(object: Partial<_48.QueryModuleStateResponse>): _48.QueryModuleStateResponse;
            };
            QueryContractRegistrationInfoRequest: {
                encode(message: _48.QueryContractRegistrationInfoRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _48.QueryContractRegistrationInfoRequest;
                fromPartial(object: Partial<_48.QueryContractRegistrationInfoRequest>): _48.QueryContractRegistrationInfoRequest;
            };
            QueryContractRegistrationInfoResponse: {
                encode(message: _48.QueryContractRegistrationInfoResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _48.QueryContractRegistrationInfoResponse;
                fromPartial(object: Partial<_48.QueryContractRegistrationInfoResponse>): _48.QueryContractRegistrationInfoResponse;
            };
            fundingModeFromJSON(object: any): _47.FundingMode;
            fundingModeToJSON(object: _47.FundingMode): string;
            FundingMode: typeof _47.FundingMode;
            FundingModeSDKType: typeof _47.FundingMode;
            ContractRegistrationRequestProposal: {
                encode(message: _47.ContractRegistrationRequestProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _47.ContractRegistrationRequestProposal;
                fromPartial(object: Partial<_47.ContractRegistrationRequestProposal>): _47.ContractRegistrationRequestProposal;
            };
            BatchContractRegistrationRequestProposal: {
                encode(message: _47.BatchContractRegistrationRequestProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _47.BatchContractRegistrationRequestProposal;
                fromPartial(object: Partial<_47.BatchContractRegistrationRequestProposal>): _47.BatchContractRegistrationRequestProposal;
            };
            BatchContractDeregistrationProposal: {
                encode(message: _47.BatchContractDeregistrationProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _47.BatchContractDeregistrationProposal;
                fromPartial(object: Partial<_47.BatchContractDeregistrationProposal>): _47.BatchContractDeregistrationProposal;
            };
            ContractRegistrationRequest: {
                encode(message: _47.ContractRegistrationRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _47.ContractRegistrationRequest;
                fromPartial(object: Partial<_47.ContractRegistrationRequest>): _47.ContractRegistrationRequest;
            };
            BatchStoreCodeProposal: {
                encode(message: _47.BatchStoreCodeProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _47.BatchStoreCodeProposal;
                fromPartial(object: Partial<_47.BatchStoreCodeProposal>): _47.BatchStoreCodeProposal;
            };
            RegisteredContractWithAddress: {
                encode(message: _46.RegisteredContractWithAddress, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _46.RegisteredContractWithAddress;
                fromPartial(object: Partial<_46.RegisteredContractWithAddress>): _46.RegisteredContractWithAddress;
            };
            GenesisState: {
                encode(message: _46.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _46.GenesisState;
                fromPartial(object: Partial<_46.GenesisState>): _46.GenesisState;
            };
            EventContractExecution: {
                encode(message: _45.EventContractExecution, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _45.EventContractExecution;
                fromPartial(object: Partial<_45.EventContractExecution>): _45.EventContractExecution;
            };
        };
    }
    const ClientFactory: {
        createRPCMsgClient: ({ rpc }: {
            rpc: import("../helpers").Rpc;
        }) => Promise<{
            injective: {
                auction: {
                    v1beta1: _235.MsgClientImpl;
                };
                exchange: {
                    v1beta1: _236.MsgClientImpl;
                };
                insurance: {
                    v1beta1: _237.MsgClientImpl;
                };
                ocr: {
                    v1beta1: _238.MsgClientImpl;
                };
                oracle: {
                    v1beta1: _239.MsgClientImpl;
                };
                peggy: {
                    v1: _240.MsgClientImpl;
                };
                tokenfactory: {
                    v1beta1: _241.MsgClientImpl;
                };
                wasmx: {
                    v1: _242.MsgClientImpl;
                };
            };
            cosmos: {
                auth: {
                    v1beta1: import("../cosmos/auth/v1beta1/tx.rpc.msg").MsgClientImpl;
                };
                authz: {
                    v1beta1: import("../cosmos/authz/v1beta1/tx.rpc.msg").MsgClientImpl;
                };
                bank: {
                    v1beta1: import("../cosmos/bank/v1beta1/tx.rpc.msg").MsgClientImpl;
                };
                consensus: {
                    v1: import("../cosmos/consensus/v1/tx.rpc.msg").MsgClientImpl;
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
                    v1: import("../cosmos/gov/v1/tx.rpc.msg").MsgClientImpl;
                    v1beta1: import("../cosmos/gov/v1beta1/tx.rpc.msg").MsgClientImpl;
                };
                group: {
                    v1: import("../cosmos/group/v1/tx.rpc.msg").MsgClientImpl;
                };
                mint: {
                    v1beta1: import("../cosmos/mint/v1beta1/tx.rpc.msg").MsgClientImpl;
                };
                nft: {
                    v1beta1: import("../cosmos/nft/v1beta1/tx.rpc.msg").MsgClientImpl;
                };
                slashing: {
                    v1beta1: import("../cosmos/slashing/v1beta1/tx.rpc.msg").MsgClientImpl;
                };
                staking: {
                    v1beta1: import("../cosmos/staking/v1beta1/tx.rpc.msg").MsgClientImpl;
                };
                upgrade: {
                    v1beta1: import("../cosmos/upgrade/v1beta1/tx.rpc.msg").MsgClientImpl;
                };
                vesting: {
                    v1beta1: import("../cosmos/vesting/v1beta1/tx.rpc.msg").MsgClientImpl;
                };
            };
        }>;
        createRPCQueryClient: ({ rpcEndpoint }: {
            rpcEndpoint: string | import("@cosmjs/tendermint-rpc").HttpEndpoint;
        }) => Promise<{
            injective: {
                auction: {
                    v1beta1: {
                        auctionParams(request?: _2.QueryAuctionParamsRequest): Promise<_2.QueryAuctionParamsResponse>;
                        currentAuctionBasket(request?: _2.QueryCurrentAuctionBasketRequest): Promise<_2.QueryCurrentAuctionBasketResponse>;
                        auctionModuleState(request?: _2.QueryModuleStateRequest): Promise<_2.QueryModuleStateResponse>;
                    };
                };
                exchange: {
                    v1beta1: {
                        queryExchangeParams(request?: _9.QueryExchangeParamsRequest): Promise<_9.QueryExchangeParamsResponse>;
                        subaccountDeposits(request: _9.QuerySubaccountDepositsRequest): Promise<_9.QuerySubaccountDepositsResponse>;
                        subaccountDeposit(request: _9.QuerySubaccountDepositRequest): Promise<_9.QuerySubaccountDepositResponse>;
                        exchangeBalances(request?: _9.QueryExchangeBalancesRequest): Promise<_9.QueryExchangeBalancesResponse>;
                        aggregateVolume(request: _9.QueryAggregateVolumeRequest): Promise<_9.QueryAggregateVolumeResponse>;
                        aggregateVolumes(request: _9.QueryAggregateVolumesRequest): Promise<_9.QueryAggregateVolumesResponse>;
                        aggregateMarketVolume(request: _9.QueryAggregateMarketVolumeRequest): Promise<_9.QueryAggregateMarketVolumeResponse>;
                        aggregateMarketVolumes(request: _9.QueryAggregateMarketVolumesRequest): Promise<_9.QueryAggregateMarketVolumesResponse>;
                        denomDecimal(request: _9.QueryDenomDecimalRequest): Promise<_9.QueryDenomDecimalResponse>;
                        denomDecimals(request: _9.QueryDenomDecimalsRequest): Promise<_9.QueryDenomDecimalsResponse>;
                        spotMarkets(request: _9.QuerySpotMarketsRequest): Promise<_9.QuerySpotMarketsResponse>;
                        spotMarket(request: _9.QuerySpotMarketRequest): Promise<_9.QuerySpotMarketResponse>;
                        fullSpotMarkets(request: _9.QueryFullSpotMarketsRequest): Promise<_9.QueryFullSpotMarketsResponse>;
                        fullSpotMarket(request: _9.QueryFullSpotMarketRequest): Promise<_9.QueryFullSpotMarketResponse>;
                        spotOrderbook(request: _9.QuerySpotOrderbookRequest): Promise<_9.QuerySpotOrderbookResponse>;
                        traderSpotOrders(request: _9.QueryTraderSpotOrdersRequest): Promise<_9.QueryTraderSpotOrdersResponse>;
                        accountAddressSpotOrders(request: _9.QueryAccountAddressSpotOrdersRequest): Promise<_9.QueryAccountAddressSpotOrdersResponse>;
                        spotOrdersByHashes(request: _9.QuerySpotOrdersByHashesRequest): Promise<_9.QuerySpotOrdersByHashesResponse>;
                        subaccountOrders(request: _9.QuerySubaccountOrdersRequest): Promise<_9.QuerySubaccountOrdersResponse>;
                        traderSpotTransientOrders(request: _9.QueryTraderSpotOrdersRequest): Promise<_9.QueryTraderSpotOrdersResponse>;
                        spotMidPriceAndTOB(request: _9.QuerySpotMidPriceAndTOBRequest): Promise<_9.QuerySpotMidPriceAndTOBResponse>;
                        derivativeMidPriceAndTOB(request: _9.QueryDerivativeMidPriceAndTOBRequest): Promise<_9.QueryDerivativeMidPriceAndTOBResponse>;
                        derivativeOrderbook(request: _9.QueryDerivativeOrderbookRequest): Promise<_9.QueryDerivativeOrderbookResponse>;
                        traderDerivativeOrders(request: _9.QueryTraderDerivativeOrdersRequest): Promise<_9.QueryTraderDerivativeOrdersResponse>;
                        accountAddressDerivativeOrders(request: _9.QueryAccountAddressDerivativeOrdersRequest): Promise<_9.QueryAccountAddressDerivativeOrdersResponse>;
                        derivativeOrdersByHashes(request: _9.QueryDerivativeOrdersByHashesRequest): Promise<_9.QueryDerivativeOrdersByHashesResponse>;
                        traderDerivativeTransientOrders(request: _9.QueryTraderDerivativeOrdersRequest): Promise<_9.QueryTraderDerivativeOrdersResponse>;
                        derivativeMarkets(request: _9.QueryDerivativeMarketsRequest): Promise<_9.QueryDerivativeMarketsResponse>;
                        derivativeMarket(request: _9.QueryDerivativeMarketRequest): Promise<_9.QueryDerivativeMarketResponse>;
                        derivativeMarketAddress(request: _9.QueryDerivativeMarketAddressRequest): Promise<_9.QueryDerivativeMarketAddressResponse>;
                        subaccountTradeNonce(request: _9.QuerySubaccountTradeNonceRequest): Promise<_9.QuerySubaccountTradeNonceResponse>;
                        exchangeModuleState(request?: _9.QueryModuleStateRequest): Promise<_9.QueryModuleStateResponse>;
                        positions(request?: _9.QueryPositionsRequest): Promise<_9.QueryPositionsResponse>;
                        subaccountPositions(request: _9.QuerySubaccountPositionsRequest): Promise<_9.QuerySubaccountPositionsResponse>;
                        subaccountPositionInMarket(request: _9.QuerySubaccountPositionInMarketRequest): Promise<_9.QuerySubaccountPositionInMarketResponse>;
                        subaccountEffectivePositionInMarket(request: _9.QuerySubaccountEffectivePositionInMarketRequest): Promise<_9.QuerySubaccountEffectivePositionInMarketResponse>;
                        perpetualMarketInfo(request: _9.QueryPerpetualMarketInfoRequest): Promise<_9.QueryPerpetualMarketInfoResponse>;
                        expiryFuturesMarketInfo(request: _9.QueryExpiryFuturesMarketInfoRequest): Promise<_9.QueryExpiryFuturesMarketInfoResponse>;
                        perpetualMarketFunding(request: _9.QueryPerpetualMarketFundingRequest): Promise<_9.QueryPerpetualMarketFundingResponse>;
                        subaccountOrderMetadata(request: _9.QuerySubaccountOrderMetadataRequest): Promise<_9.QuerySubaccountOrderMetadataResponse>;
                        tradeRewardPoints(request: _9.QueryTradeRewardPointsRequest): Promise<_9.QueryTradeRewardPointsResponse>;
                        pendingTradeRewardPoints(request: _9.QueryTradeRewardPointsRequest): Promise<_9.QueryTradeRewardPointsResponse>;
                        tradeRewardCampaign(request?: _9.QueryTradeRewardCampaignRequest): Promise<_9.QueryTradeRewardCampaignResponse>;
                        feeDiscountAccountInfo(request: _9.QueryFeeDiscountAccountInfoRequest): Promise<_9.QueryFeeDiscountAccountInfoResponse>;
                        feeDiscountSchedule(request?: _9.QueryFeeDiscountScheduleRequest): Promise<_9.QueryFeeDiscountScheduleResponse>;
                        balanceMismatches(request: _9.QueryBalanceMismatchesRequest): Promise<_9.QueryBalanceMismatchesResponse>;
                        balanceWithBalanceHolds(request?: _9.QueryBalanceWithBalanceHoldsRequest): Promise<_9.QueryBalanceWithBalanceHoldsResponse>;
                        feeDiscountTierStatistics(request?: _9.QueryFeeDiscountTierStatisticsRequest): Promise<_9.QueryFeeDiscountTierStatisticsResponse>;
                        mitoVaultInfos(request?: _9.MitoVaultInfosRequest): Promise<_9.MitoVaultInfosResponse>;
                        queryMarketIDFromVault(request: _9.QueryMarketIDFromVaultRequest): Promise<_9.QueryMarketIDFromVaultResponse>;
                        historicalTradeRecords(request: _9.QueryHistoricalTradeRecordsRequest): Promise<_9.QueryHistoricalTradeRecordsResponse>;
                        isOptedOutOfRewards(request: _9.QueryIsOptedOutOfRewardsRequest): Promise<_9.QueryIsOptedOutOfRewardsResponse>;
                        optedOutOfRewardsAccounts(request?: _9.QueryOptedOutOfRewardsAccountsRequest): Promise<_9.QueryOptedOutOfRewardsAccountsResponse>;
                        marketVolatility(request: _9.QueryMarketVolatilityRequest): Promise<_9.QueryMarketVolatilityResponse>;
                        binaryOptionsMarkets(request: _9.QueryBinaryMarketsRequest): Promise<_9.QueryBinaryMarketsResponse>;
                        traderDerivativeConditionalOrders(request: _9.QueryTraderDerivativeConditionalOrdersRequest): Promise<_9.QueryTraderDerivativeConditionalOrdersResponse>;
                        marketAtomicExecutionFeeMultiplier(request: _9.QueryMarketAtomicExecutionFeeMultiplierRequest): Promise<_9.QueryMarketAtomicExecutionFeeMultiplierResponse>;
                    };
                };
                insurance: {
                    v1beta1: {
                        insuranceParams(request?: _13.QueryInsuranceParamsRequest): Promise<_13.QueryInsuranceParamsResponse>;
                        insuranceFund(request: _13.QueryInsuranceFundRequest): Promise<_13.QueryInsuranceFundResponse>;
                        insuranceFunds(request?: _13.QueryInsuranceFundsRequest): Promise<_13.QueryInsuranceFundsResponse>;
                        estimatedRedemptions(request: _13.QueryEstimatedRedemptionsRequest): Promise<_13.QueryEstimatedRedemptionsResponse>;
                        pendingRedemptions(request: _13.QueryPendingRedemptionsRequest): Promise<_13.QueryPendingRedemptionsResponse>;
                        insuranceModuleState(request?: _13.QueryModuleStateRequest): Promise<_13.QueryModuleStateResponse>;
                    };
                };
                ocr: {
                    v1beta1: {
                        params(request?: _17.QueryParamsRequest): Promise<_17.QueryParamsResponse>;
                        feedConfig(request: _17.QueryFeedConfigRequest): Promise<_17.QueryFeedConfigResponse>;
                        feedConfigInfo(request: _17.QueryFeedConfigInfoRequest): Promise<_17.QueryFeedConfigInfoResponse>;
                        latestRound(request: _17.QueryLatestRoundRequest): Promise<_17.QueryLatestRoundResponse>;
                        latestTransmissionDetails(request: _17.QueryLatestTransmissionDetailsRequest): Promise<_17.QueryLatestTransmissionDetailsResponse>;
                        owedAmount(request: _17.QueryOwedAmountRequest): Promise<_17.QueryOwedAmountResponse>;
                        ocrModuleState(request?: _17.QueryModuleStateRequest): Promise<_17.QueryModuleStateResponse>;
                    };
                };
                oracle: {
                    v1beta1: {
                        params(request?: _23.QueryParamsRequest): Promise<_23.QueryParamsResponse>;
                        bandRelayers(request?: _23.QueryBandRelayersRequest): Promise<_23.QueryBandRelayersResponse>;
                        bandPriceStates(request?: _23.QueryBandPriceStatesRequest): Promise<_23.QueryBandPriceStatesResponse>;
                        bandIBCPriceStates(request?: _23.QueryBandIBCPriceStatesRequest): Promise<_23.QueryBandIBCPriceStatesResponse>;
                        priceFeedPriceStates(request?: _23.QueryPriceFeedPriceStatesRequest): Promise<_23.QueryPriceFeedPriceStatesResponse>;
                        coinbasePriceStates(request?: _23.QueryCoinbasePriceStatesRequest): Promise<_23.QueryCoinbasePriceStatesResponse>;
                        pythPriceStates(request?: _23.QueryPythPriceStatesRequest): Promise<_23.QueryPythPriceStatesResponse>;
                        providerPriceState(request: _23.QueryProviderPriceStateRequest): Promise<_23.QueryProviderPriceStateResponse>;
                        oracleModuleState(request?: _23.QueryModuleStateRequest): Promise<_23.QueryModuleStateResponse>;
                        historicalPriceRecords(request: _23.QueryHistoricalPriceRecordsRequest): Promise<_23.QueryHistoricalPriceRecordsResponse>;
                        oracleVolatility(request: _23.QueryOracleVolatilityRequest): Promise<_23.QueryOracleVolatilityResponse>;
                        oracleProvidersInfo(request?: _23.QueryOracleProvidersInfoRequest): Promise<_23.QueryOracleProvidersInfoResponse>;
                        oracleProviderPrices(request: _23.QueryOracleProviderPricesRequest): Promise<_23.QueryOracleProviderPricesResponse>;
                        oraclePrice(request: _23.QueryOraclePriceRequest): Promise<_23.QueryOraclePriceResponse>;
                        pythPrice(request: _23.QueryPythPriceRequest): Promise<_23.QueryPythPriceResponse>;
                    };
                };
                peggy: {
                    v1: {
                        params(request?: _34.QueryParamsRequest): Promise<_34.QueryParamsResponse>;
                        currentValset(request?: _34.QueryCurrentValsetRequest): Promise<_34.QueryCurrentValsetResponse>;
                        valsetRequest(request: _34.QueryValsetRequestRequest): Promise<_34.QueryValsetRequestResponse>;
                        valsetConfirm(request: _34.QueryValsetConfirmRequest): Promise<_34.QueryValsetConfirmResponse>;
                        valsetConfirmsByNonce(request: _34.QueryValsetConfirmsByNonceRequest): Promise<_34.QueryValsetConfirmsByNonceResponse>;
                        lastValsetRequests(request?: _34.QueryLastValsetRequestsRequest): Promise<_34.QueryLastValsetRequestsResponse>;
                        lastPendingValsetRequestByAddr(request: _34.QueryLastPendingValsetRequestByAddrRequest): Promise<_34.QueryLastPendingValsetRequestByAddrResponse>;
                        lastEventByAddr(request: _34.QueryLastEventByAddrRequest): Promise<_34.QueryLastEventByAddrResponse>;
                        getPendingSendToEth(request: _34.QueryPendingSendToEth): Promise<_34.QueryPendingSendToEthResponse>;
                        batchFees(request?: _34.QueryBatchFeeRequest): Promise<_34.QueryBatchFeeResponse>;
                        outgoingTxBatches(request?: _34.QueryOutgoingTxBatchesRequest): Promise<_34.QueryOutgoingTxBatchesResponse>;
                        lastPendingBatchRequestByAddr(request: _34.QueryLastPendingBatchRequestByAddrRequest): Promise<_34.QueryLastPendingBatchRequestByAddrResponse>;
                        batchRequestByNonce(request: _34.QueryBatchRequestByNonceRequest): Promise<_34.QueryBatchRequestByNonceResponse>;
                        batchConfirms(request: _34.QueryBatchConfirmsRequest): Promise<_34.QueryBatchConfirmsResponse>;
                        eRC20ToDenom(request: _34.QueryERC20ToDenomRequest): Promise<_34.QueryERC20ToDenomResponse>;
                        denomToERC20(request: _34.QueryDenomToERC20Request): Promise<_34.QueryDenomToERC20Response>;
                        getDelegateKeyByValidator(request: _34.QueryDelegateKeysByValidatorAddress): Promise<_34.QueryDelegateKeysByValidatorAddressResponse>;
                        getDelegateKeyByEth(request: _34.QueryDelegateKeysByEthAddress): Promise<_34.QueryDelegateKeysByEthAddressResponse>;
                        getDelegateKeyByOrchestrator(request: _34.QueryDelegateKeysByOrchestratorAddress): Promise<_34.QueryDelegateKeysByOrchestratorAddressResponse>;
                        peggyModuleState(request?: _34.QueryModuleStateRequest): Promise<_34.QueryModuleStateResponse>;
                        missingPeggoNonces(request?: _34.MissingNoncesRequest): Promise<_34.MissingNoncesResponse>;
                    };
                };
                tokenfactory: {
                    v1beta1: {
                        params(request?: _40.QueryParamsRequest): Promise<_40.QueryParamsResponse>;
                        denomAuthorityMetadata(request: _40.QueryDenomAuthorityMetadataRequest): Promise<_40.QueryDenomAuthorityMetadataResponse>;
                        denomsFromCreator(request: _40.QueryDenomsFromCreatorRequest): Promise<_40.QueryDenomsFromCreatorResponse>;
                        tokenfactoryModuleState(request?: _40.QueryModuleStateRequest): Promise<_40.QueryModuleStateResponse>;
                    };
                };
                wasmx: {
                    v1: {
                        wasmxParams(request?: _48.QueryWasmxParamsRequest): Promise<_48.QueryWasmxParamsResponse>;
                        contractRegistrationInfo(request: _48.QueryContractRegistrationInfoRequest): Promise<_48.QueryContractRegistrationInfoResponse>;
                        wasmxModuleState(request?: _48.QueryModuleStateRequest): Promise<_48.QueryModuleStateResponse>;
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
        createLCDClient: ({ restEndpoint }: {
            restEndpoint: string;
        }) => Promise<{
            injective: {
                auction: {
                    v1beta1: _219.LCDQueryClient;
                };
                exchange: {
                    v1beta1: _220.LCDQueryClient;
                };
                insurance: {
                    v1beta1: _221.LCDQueryClient;
                };
                ocr: {
                    v1beta1: _222.LCDQueryClient;
                };
                oracle: {
                    v1beta1: _223.LCDQueryClient;
                };
                peggy: {
                    v1: _224.LCDQueryClient;
                };
                tokenfactory: {
                    v1beta1: _225.LCDQueryClient;
                };
                wasmx: {
                    v1: _226.LCDQueryClient;
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
                consensus: {
                    v1: import("../cosmos/consensus/v1/query.lcd").LCDQueryClient;
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
