import * as _1 from "./accum/v1beta1/accum";
import * as _2 from "./concentrated-liquidity/params";
import * as _3 from "./cosmwasmpool/v1beta1/genesis";
import * as _4 from "./cosmwasmpool/v1beta1/gov";
import * as _5 from "./cosmwasmpool/v1beta1/model/instantiate_msg";
import * as _6 from "./cosmwasmpool/v1beta1/model/module_query_msg";
import * as _7 from "./cosmwasmpool/v1beta1/model/module_sudo_msg";
import * as _8 from "./cosmwasmpool/v1beta1/model/pool_query_msg";
import * as _9 from "./cosmwasmpool/v1beta1/model/pool";
import * as _10 from "./cosmwasmpool/v1beta1/model/transmuter_msgs";
import * as _11 from "./cosmwasmpool/v1beta1/model/tx";
import * as _12 from "./cosmwasmpool/v1beta1/params";
import * as _13 from "./cosmwasmpool/v1beta1/query";
import * as _15 from "./downtime-detector/v1beta1/downtime_duration";
import * as _16 from "./downtime-detector/v1beta1/genesis";
import * as _17 from "./downtime-detector/v1beta1/query";
import * as _18 from "./epochs/genesis";
import * as _19 from "./epochs/query";
import * as _20 from "./gamm/pool-models/balancer/balancerPool";
import * as _21 from "./gamm/v1beta1/genesis";
import * as _22 from "./gamm/v1beta1/gov";
import * as _23 from "./gamm/v1beta1/query";
import * as _24 from "./gamm/v1beta1/shared";
import * as _25 from "./gamm/v1beta1/tx";
import * as _26 from "./gamm/pool-models/balancer/tx/tx";
import * as _27 from "./gamm/pool-models/stableswap/stableswap_pool";
import * as _28 from "./gamm/pool-models/stableswap/tx";
import * as _29 from "./gamm/v2/query";
import * as _30 from "./ibc-rate-limit/v1beta1/genesis";
import * as _31 from "./ibc-rate-limit/v1beta1/params";
import * as _32 from "./ibc-rate-limit/v1beta1/query";
import * as _33 from "./incentives/gauge";
import * as _34 from "./incentives/genesis";
import * as _35 from "./incentives/params";
import * as _36 from "./incentives/query";
import * as _37 from "./incentives/tx";
import * as _38 from "./lockup/genesis";
import * as _39 from "./lockup/lock";
import * as _40 from "./lockup/params";
import * as _41 from "./lockup/query";
import * as _42 from "./lockup/tx";
import * as _43 from "./mint/v1beta1/genesis";
import * as _44 from "./mint/v1beta1/mint";
import * as _45 from "./mint/v1beta1/query";
import * as _46 from "./pool-incentives/v1beta1/genesis";
import * as _47 from "./pool-incentives/v1beta1/gov";
import * as _48 from "./pool-incentives/v1beta1/incentives";
import * as _49 from "./pool-incentives/v1beta1/query";
import * as _50 from "./pool-incentives/v1beta1/shared";
import * as _51 from "./poolmanager/v1beta1/genesis";
import * as _52 from "./poolmanager/v1beta1/module_route";
import * as _53 from "./poolmanager/v1beta1/query";
import * as _54 from "./poolmanager/v1beta1/swap_route";
import * as _55 from "./poolmanager/v1beta1/tx";
import * as _56 from "./protorev/v1beta1/genesis";
import * as _57 from "./protorev/v1beta1/gov";
import * as _58 from "./protorev/v1beta1/params";
import * as _59 from "./protorev/v1beta1/protorev";
import * as _60 from "./protorev/v1beta1/query";
import * as _61 from "./protorev/v1beta1/tx";
import * as _62 from "./sumtree/v1beta1/tree";
import * as _63 from "./superfluid/genesis";
import * as _64 from "./superfluid/params";
import * as _65 from "./superfluid/query";
import * as _66 from "./superfluid/superfluid";
import * as _67 from "./superfluid/tx";
import * as _68 from "./tokenfactory/v1beta1/authorityMetadata";
import * as _69 from "./tokenfactory/v1beta1/genesis";
import * as _70 from "./tokenfactory/v1beta1/params";
import * as _71 from "./tokenfactory/v1beta1/query";
import * as _72 from "./tokenfactory/v1beta1/tx";
import * as _73 from "./twap/v1beta1/genesis";
import * as _74 from "./twap/v1beta1/query";
import * as _75 from "./twap/v1beta1/twap_record";
import * as _76 from "./txfees/v1beta1/feetoken";
import * as _77 from "./txfees/v1beta1/genesis";
import * as _78 from "./txfees/v1beta1/gov";
import * as _79 from "./txfees/v1beta1/query";
import * as _80 from "./valset-pref/v1beta1/query";
import * as _81 from "./valset-pref/v1beta1/state";
import * as _82 from "./valset-pref/v1beta1/tx";
import * as _208 from "./concentrated-liquidity/query.rpc.Query";
import * as _209 from "./cosmwasmpool/v1beta1/query.rpc.Query";
import * as _210 from "./downtime-detector/v1beta1/query.rpc.Query";
import * as _211 from "./epochs/query.rpc.Query";
import * as _212 from "./gamm/v1beta1/query.rpc.Query";
import * as _213 from "./gamm/v2/query.rpc.Query";
import * as _214 from "./ibc-rate-limit/v1beta1/query.rpc.Query";
import * as _215 from "./incentives/query.rpc.Query";
import * as _216 from "./lockup/query.rpc.Query";
import * as _217 from "./mint/v1beta1/query.rpc.Query";
import * as _218 from "./pool-incentives/v1beta1/query.rpc.Query";
import * as _219 from "./poolmanager/v1beta1/query.rpc.Query";
import * as _220 from "./protorev/v1beta1/query.rpc.Query";
import * as _221 from "./superfluid/query.rpc.Query";
import * as _222 from "./tokenfactory/v1beta1/query.rpc.Query";
import * as _223 from "./twap/v1beta1/query.rpc.Query";
import * as _224 from "./txfees/v1beta1/query.rpc.Query";
import * as _225 from "./valset-pref/v1beta1/query.rpc.Query";
import * as _226 from "./concentrated-liquidity/pool-model/concentrated/tx.rpc.msg";
import * as _227 from "./concentrated-liquidity/tx.rpc.msg";
import * as _228 from "./gamm/pool-models/balancer/tx/tx.rpc.msg";
import * as _229 from "./gamm/pool-models/stableswap/tx.rpc.msg";
import * as _230 from "./gamm/v1beta1/tx.rpc.msg";
import * as _231 from "./incentives/tx.rpc.msg";
import * as _232 from "./lockup/tx.rpc.msg";
import * as _233 from "./poolmanager/v1beta1/tx.rpc.msg";
import * as _234 from "./protorev/v1beta1/tx.rpc.msg";
import * as _235 from "./superfluid/tx.rpc.msg";
import * as _236 from "./tokenfactory/v1beta1/tx.rpc.msg";
import * as _237 from "./valset-pref/v1beta1/tx.rpc.msg";
export declare namespace osmosis {
    namespace accum {
        const v1beta1: {
            AccumulatorContent: {
                encode(message: _1.AccumulatorContent, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _1.AccumulatorContent;
                fromPartial(object: Partial<_1.AccumulatorContent>): _1.AccumulatorContent;
            };
            Options: {
                encode(_: _1.Options, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _1.Options;
                fromPartial(_: Partial<_1.Options>): _1.Options;
            };
            Record: {
                encode(message: _1.Record, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _1.Record;
                fromPartial(object: Partial<_1.Record>): _1.Record;
            };
        };
    }
    const concentratedliquidity: {
        poolmodel: {
            concentrated: {
                v1beta1: {
                    MsgClientImpl: typeof _226.MsgClientImpl;
                    registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
                    load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
                    MessageComposer: {
                        encoded: {
                            createConcentratedPool(value: import("./concentrated-liquidity/pool-model/concentrated/tx").MsgCreateConcentratedPool): {
                                typeUrl: string;
                                value: Uint8Array;
                            };
                        };
                        withTypeUrl: {
                            createConcentratedPool(value: import("./concentrated-liquidity/pool-model/concentrated/tx").MsgCreateConcentratedPool): {
                                typeUrl: string;
                                value: import("./concentrated-liquidity/pool-model/concentrated/tx").MsgCreateConcentratedPool;
                            };
                        };
                        fromJSON: {
                            createConcentratedPool(value: any): {
                                typeUrl: string;
                                value: import("./concentrated-liquidity/pool-model/concentrated/tx").MsgCreateConcentratedPool;
                            };
                        };
                        fromPartial: {
                            createConcentratedPool(value: import("./concentrated-liquidity/pool-model/concentrated/tx").MsgCreateConcentratedPool): {
                                typeUrl: string;
                                value: import("./concentrated-liquidity/pool-model/concentrated/tx").MsgCreateConcentratedPool;
                            };
                        };
                    };
                    AminoConverter: {
                        "/osmosis.concentratedliquidity.poolmodel.concentrated.v1beta1.MsgCreateConcentratedPool": {
                            aminoType: string;
                            toAmino: ({ sender, denom0, denom1, tickSpacing, spreadFactor }: import("./concentrated-liquidity/pool-model/concentrated/tx").MsgCreateConcentratedPool) => {
                                sender: string;
                                denom0: string;
                                denom1: string;
                                tick_spacing: string;
                                spread_factor: string;
                            };
                            fromAmino: ({ sender, denom0, denom1, tick_spacing, spread_factor }: {
                                sender: string;
                                denom0: string;
                                denom1: string;
                                tick_spacing: string;
                                spread_factor: string;
                            }) => import("./concentrated-liquidity/pool-model/concentrated/tx").MsgCreateConcentratedPool;
                        };
                    };
                };
            };
        };
        v1beta1: {
            MsgClientImpl: typeof _227.MsgClientImpl;
            QueryClientImpl: typeof _208.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
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
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    createPosition(value: import("./concentrated-liquidity/tx").MsgCreatePosition): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    withdrawPosition(value: import("./concentrated-liquidity/tx").MsgWithdrawPosition): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    addToPosition(value: import("./concentrated-liquidity/tx").MsgAddToPosition): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    collectSpreadRewards(value: import("./concentrated-liquidity/tx").MsgCollectSpreadRewards): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    collectIncentives(value: import("./concentrated-liquidity/tx").MsgCollectIncentives): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    createPosition(value: import("./concentrated-liquidity/tx").MsgCreatePosition): {
                        typeUrl: string;
                        value: import("./concentrated-liquidity/tx").MsgCreatePosition;
                    };
                    withdrawPosition(value: import("./concentrated-liquidity/tx").MsgWithdrawPosition): {
                        typeUrl: string;
                        value: import("./concentrated-liquidity/tx").MsgWithdrawPosition;
                    };
                    addToPosition(value: import("./concentrated-liquidity/tx").MsgAddToPosition): {
                        typeUrl: string;
                        value: import("./concentrated-liquidity/tx").MsgAddToPosition;
                    };
                    collectSpreadRewards(value: import("./concentrated-liquidity/tx").MsgCollectSpreadRewards): {
                        typeUrl: string;
                        value: import("./concentrated-liquidity/tx").MsgCollectSpreadRewards;
                    };
                    collectIncentives(value: import("./concentrated-liquidity/tx").MsgCollectIncentives): {
                        typeUrl: string;
                        value: import("./concentrated-liquidity/tx").MsgCollectIncentives;
                    };
                };
                fromJSON: {
                    createPosition(value: any): {
                        typeUrl: string;
                        value: import("./concentrated-liquidity/tx").MsgCreatePosition;
                    };
                    withdrawPosition(value: any): {
                        typeUrl: string;
                        value: import("./concentrated-liquidity/tx").MsgWithdrawPosition;
                    };
                    addToPosition(value: any): {
                        typeUrl: string;
                        value: import("./concentrated-liquidity/tx").MsgAddToPosition;
                    };
                    collectSpreadRewards(value: any): {
                        typeUrl: string;
                        value: import("./concentrated-liquidity/tx").MsgCollectSpreadRewards;
                    };
                    collectIncentives(value: any): {
                        typeUrl: string;
                        value: import("./concentrated-liquidity/tx").MsgCollectIncentives;
                    };
                };
                fromPartial: {
                    createPosition(value: import("./concentrated-liquidity/tx").MsgCreatePosition): {
                        typeUrl: string;
                        value: import("./concentrated-liquidity/tx").MsgCreatePosition;
                    };
                    withdrawPosition(value: import("./concentrated-liquidity/tx").MsgWithdrawPosition): {
                        typeUrl: string;
                        value: import("./concentrated-liquidity/tx").MsgWithdrawPosition;
                    };
                    addToPosition(value: import("./concentrated-liquidity/tx").MsgAddToPosition): {
                        typeUrl: string;
                        value: import("./concentrated-liquidity/tx").MsgAddToPosition;
                    };
                    collectSpreadRewards(value: import("./concentrated-liquidity/tx").MsgCollectSpreadRewards): {
                        typeUrl: string;
                        value: import("./concentrated-liquidity/tx").MsgCollectSpreadRewards;
                    };
                    collectIncentives(value: import("./concentrated-liquidity/tx").MsgCollectIncentives): {
                        typeUrl: string;
                        value: import("./concentrated-liquidity/tx").MsgCollectIncentives;
                    };
                };
            };
            AminoConverter: {
                "/osmosis.concentratedliquidity.v1beta1.MsgCreatePosition": {
                    aminoType: string;
                    toAmino: ({ poolId, sender, lowerTick, upperTick, tokensProvided, tokenMinAmount0, tokenMinAmount1 }: import("./concentrated-liquidity/tx").MsgCreatePosition) => {
                        pool_id: string;
                        sender: string;
                        lower_tick: string;
                        upper_tick: string;
                        tokens_provided: {
                            denom: string;
                            amount: string;
                        }[];
                        token_min_amount0: string;
                        token_min_amount1: string;
                    };
                    fromAmino: ({ pool_id, sender, lower_tick, upper_tick, tokens_provided, token_min_amount0, token_min_amount1 }: {
                        pool_id: string;
                        sender: string;
                        lower_tick: string;
                        upper_tick: string;
                        tokens_provided: {
                            denom: string;
                            amount: string;
                        }[];
                        token_min_amount0: string;
                        token_min_amount1: string;
                    }) => import("./concentrated-liquidity/tx").MsgCreatePosition;
                };
                "/osmosis.concentratedliquidity.v1beta1.MsgWithdrawPosition": {
                    aminoType: string;
                    toAmino: ({ positionId, sender, liquidityAmount }: import("./concentrated-liquidity/tx").MsgWithdrawPosition) => {
                        position_id: string;
                        sender: string;
                        liquidity_amount: string;
                    };
                    fromAmino: ({ position_id, sender, liquidity_amount }: {
                        position_id: string;
                        sender: string;
                        liquidity_amount: string;
                    }) => import("./concentrated-liquidity/tx").MsgWithdrawPosition;
                };
                "/osmosis.concentratedliquidity.v1beta1.MsgAddToPosition": {
                    aminoType: string;
                    toAmino: ({ positionId, sender, amount0, amount1, tokenMinAmount0, tokenMinAmount1 }: import("./concentrated-liquidity/tx").MsgAddToPosition) => {
                        position_id: string;
                        sender: string;
                        amount0: string;
                        amount1: string;
                        token_min_amount0: string;
                        token_min_amount1: string;
                    };
                    fromAmino: ({ position_id, sender, amount0, amount1, token_min_amount0, token_min_amount1 }: {
                        position_id: string;
                        sender: string;
                        amount0: string;
                        amount1: string;
                        token_min_amount0: string;
                        token_min_amount1: string;
                    }) => import("./concentrated-liquidity/tx").MsgAddToPosition;
                };
                "/osmosis.concentratedliquidity.v1beta1.MsgCollectSpreadRewards": {
                    aminoType: string;
                    toAmino: ({ positionIds, sender }: import("./concentrated-liquidity/tx").MsgCollectSpreadRewards) => {
                        position_ids: string[];
                        sender: string;
                    };
                    fromAmino: ({ position_ids, sender }: {
                        position_ids: string[];
                        sender: string;
                    }) => import("./concentrated-liquidity/tx").MsgCollectSpreadRewards;
                };
                "/osmosis.concentratedliquidity.v1beta1.MsgCollectIncentives": {
                    aminoType: string;
                    toAmino: ({ positionIds, sender }: import("./concentrated-liquidity/tx").MsgCollectIncentives) => {
                        position_ids: string[];
                        sender: string;
                    };
                    fromAmino: ({ position_ids, sender }: {
                        position_ids: string[];
                        sender: string;
                    }) => import("./concentrated-liquidity/tx").MsgCollectIncentives;
                };
            };
        };
        Params: {
            encode(message: _2.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _2.Params;
            fromPartial(object: Partial<_2.Params>): _2.Params;
        };
    };
    namespace cosmwasmpool {
        const v1beta1: {
            QueryClientImpl: typeof _209.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                pools(request?: _13.PoolsRequest): Promise<_13.PoolsResponse>;
                params(request?: _13.ParamsRequest): Promise<_13.ParamsResponse>;
                contractInfoByPoolId(request: _13.ContractInfoByPoolIdRequest): Promise<_13.ContractInfoByPoolIdResponse>;
            };
            ParamsRequest: {
                encode(_: _13.ParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _13.ParamsRequest;
                fromPartial(_: Partial<_13.ParamsRequest>): _13.ParamsRequest;
            };
            ParamsResponse: {
                encode(message: _13.ParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _13.ParamsResponse;
                fromPartial(object: Partial<_13.ParamsResponse>): _13.ParamsResponse;
            };
            PoolsRequest: {
                encode(message: _13.PoolsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _13.PoolsRequest;
                fromPartial(object: Partial<_13.PoolsRequest>): _13.PoolsRequest;
            };
            PoolsResponse: {
                encode(message: _13.PoolsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _13.PoolsResponse;
                fromPartial(object: Partial<_13.PoolsResponse>): _13.PoolsResponse;
            };
            ContractInfoByPoolIdRequest: {
                encode(message: _13.ContractInfoByPoolIdRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _13.ContractInfoByPoolIdRequest;
                fromPartial(object: Partial<_13.ContractInfoByPoolIdRequest>): _13.ContractInfoByPoolIdRequest;
            };
            ContractInfoByPoolIdResponse: {
                encode(message: _13.ContractInfoByPoolIdResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _13.ContractInfoByPoolIdResponse;
                fromPartial(object: Partial<_13.ContractInfoByPoolIdResponse>): _13.ContractInfoByPoolIdResponse;
            };
            Params: {
                encode(message: _12.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _12.Params;
                fromPartial(object: Partial<_12.Params>): _12.Params;
            };
            MsgCreateCosmWasmPool: {
                encode(message: _11.MsgCreateCosmWasmPool, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _11.MsgCreateCosmWasmPool;
                fromPartial(object: Partial<_11.MsgCreateCosmWasmPool>): _11.MsgCreateCosmWasmPool;
            };
            MsgCreateCosmWasmPoolResponse: {
                encode(message: _11.MsgCreateCosmWasmPoolResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _11.MsgCreateCosmWasmPoolResponse;
                fromPartial(object: Partial<_11.MsgCreateCosmWasmPoolResponse>): _11.MsgCreateCosmWasmPoolResponse;
            };
            EmptyRequest: {
                encode(_: _10.EmptyRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _10.EmptyRequest;
                fromPartial(_: Partial<_10.EmptyRequest>): _10.EmptyRequest;
            };
            JoinPoolExecuteMsgRequest: {
                encode(message: _10.JoinPoolExecuteMsgRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _10.JoinPoolExecuteMsgRequest;
                fromPartial(object: Partial<_10.JoinPoolExecuteMsgRequest>): _10.JoinPoolExecuteMsgRequest;
            };
            JoinPoolExecuteMsgResponse: {
                encode(_: _10.JoinPoolExecuteMsgResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _10.JoinPoolExecuteMsgResponse;
                fromPartial(_: Partial<_10.JoinPoolExecuteMsgResponse>): _10.JoinPoolExecuteMsgResponse;
            };
            ExitPoolExecuteMsgRequest: {
                encode(message: _10.ExitPoolExecuteMsgRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _10.ExitPoolExecuteMsgRequest;
                fromPartial(object: Partial<_10.ExitPoolExecuteMsgRequest>): _10.ExitPoolExecuteMsgRequest;
            };
            ExitPoolExecuteMsgResponse: {
                encode(_: _10.ExitPoolExecuteMsgResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _10.ExitPoolExecuteMsgResponse;
                fromPartial(_: Partial<_10.ExitPoolExecuteMsgResponse>): _10.ExitPoolExecuteMsgResponse;
            };
            CosmWasmPool: {
                encode(message: _9.CosmWasmPool, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _9.CosmWasmPool;
                fromPartial(object: Partial<_9.CosmWasmPool>): _9.CosmWasmPool;
            };
            GetSwapFeeQueryMsg: {
                encode(message: _8.GetSwapFeeQueryMsg, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _8.GetSwapFeeQueryMsg;
                fromPartial(object: Partial<_8.GetSwapFeeQueryMsg>): _8.GetSwapFeeQueryMsg;
            };
            GetSwapFeeQueryMsgResponse: {
                encode(message: _8.GetSwapFeeQueryMsgResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _8.GetSwapFeeQueryMsgResponse;
                fromPartial(object: Partial<_8.GetSwapFeeQueryMsgResponse>): _8.GetSwapFeeQueryMsgResponse;
            };
            SpotPrice: {
                encode(message: _8.SpotPrice, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _8.SpotPrice;
                fromPartial(object: Partial<_8.SpotPrice>): _8.SpotPrice;
            };
            SpotPriceQueryMsg: {
                encode(message: _8.SpotPriceQueryMsg, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _8.SpotPriceQueryMsg;
                fromPartial(object: Partial<_8.SpotPriceQueryMsg>): _8.SpotPriceQueryMsg;
            };
            SpotPriceQueryMsgResponse: {
                encode(message: _8.SpotPriceQueryMsgResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _8.SpotPriceQueryMsgResponse;
                fromPartial(object: Partial<_8.SpotPriceQueryMsgResponse>): _8.SpotPriceQueryMsgResponse;
            };
            EmptyStruct: {
                encode(_: _8.EmptyStruct, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _8.EmptyStruct;
                fromPartial(_: Partial<_8.EmptyStruct>): _8.EmptyStruct;
            };
            GetTotalPoolLiquidityQueryMsg: {
                encode(message: _8.GetTotalPoolLiquidityQueryMsg, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _8.GetTotalPoolLiquidityQueryMsg;
                fromPartial(object: Partial<_8.GetTotalPoolLiquidityQueryMsg>): _8.GetTotalPoolLiquidityQueryMsg;
            };
            GetTotalPoolLiquidityQueryMsgResponse: {
                encode(message: _8.GetTotalPoolLiquidityQueryMsgResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _8.GetTotalPoolLiquidityQueryMsgResponse;
                fromPartial(object: Partial<_8.GetTotalPoolLiquidityQueryMsgResponse>): _8.GetTotalPoolLiquidityQueryMsgResponse;
            };
            GetTotalSharesQueryMsg: {
                encode(message: _8.GetTotalSharesQueryMsg, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _8.GetTotalSharesQueryMsg;
                fromPartial(object: Partial<_8.GetTotalSharesQueryMsg>): _8.GetTotalSharesQueryMsg;
            };
            GetTotalSharesQueryMsgResponse: {
                encode(message: _8.GetTotalSharesQueryMsgResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _8.GetTotalSharesQueryMsgResponse;
                fromPartial(object: Partial<_8.GetTotalSharesQueryMsgResponse>): _8.GetTotalSharesQueryMsgResponse;
            };
            SwapExactAmountIn: {
                encode(message: _7.SwapExactAmountIn, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _7.SwapExactAmountIn;
                fromPartial(object: Partial<_7.SwapExactAmountIn>): _7.SwapExactAmountIn;
            };
            SwapExactAmountInSudoMsg: {
                encode(message: _7.SwapExactAmountInSudoMsg, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _7.SwapExactAmountInSudoMsg;
                fromPartial(object: Partial<_7.SwapExactAmountInSudoMsg>): _7.SwapExactAmountInSudoMsg;
            };
            SwapExactAmountInSudoMsgResponse: {
                encode(message: _7.SwapExactAmountInSudoMsgResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _7.SwapExactAmountInSudoMsgResponse;
                fromPartial(object: Partial<_7.SwapExactAmountInSudoMsgResponse>): _7.SwapExactAmountInSudoMsgResponse;
            };
            SwapExactAmountOut: {
                encode(message: _7.SwapExactAmountOut, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _7.SwapExactAmountOut;
                fromPartial(object: Partial<_7.SwapExactAmountOut>): _7.SwapExactAmountOut;
            };
            SwapExactAmountOutSudoMsg: {
                encode(message: _7.SwapExactAmountOutSudoMsg, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _7.SwapExactAmountOutSudoMsg;
                fromPartial(object: Partial<_7.SwapExactAmountOutSudoMsg>): _7.SwapExactAmountOutSudoMsg;
            };
            SwapExactAmountOutSudoMsgResponse: {
                encode(message: _7.SwapExactAmountOutSudoMsgResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _7.SwapExactAmountOutSudoMsgResponse;
                fromPartial(object: Partial<_7.SwapExactAmountOutSudoMsgResponse>): _7.SwapExactAmountOutSudoMsgResponse;
            };
            CalcOutAmtGivenIn: {
                encode(message: _6.CalcOutAmtGivenIn, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _6.CalcOutAmtGivenIn;
                fromPartial(object: Partial<_6.CalcOutAmtGivenIn>): _6.CalcOutAmtGivenIn;
            };
            CalcOutAmtGivenInRequest: {
                encode(message: _6.CalcOutAmtGivenInRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _6.CalcOutAmtGivenInRequest;
                fromPartial(object: Partial<_6.CalcOutAmtGivenInRequest>): _6.CalcOutAmtGivenInRequest;
            };
            CalcOutAmtGivenInResponse: {
                encode(message: _6.CalcOutAmtGivenInResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _6.CalcOutAmtGivenInResponse;
                fromPartial(object: Partial<_6.CalcOutAmtGivenInResponse>): _6.CalcOutAmtGivenInResponse;
            };
            CalcInAmtGivenOut: {
                encode(message: _6.CalcInAmtGivenOut, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _6.CalcInAmtGivenOut;
                fromPartial(object: Partial<_6.CalcInAmtGivenOut>): _6.CalcInAmtGivenOut;
            };
            CalcInAmtGivenOutRequest: {
                encode(message: _6.CalcInAmtGivenOutRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _6.CalcInAmtGivenOutRequest;
                fromPartial(object: Partial<_6.CalcInAmtGivenOutRequest>): _6.CalcInAmtGivenOutRequest;
            };
            CalcInAmtGivenOutResponse: {
                encode(message: _6.CalcInAmtGivenOutResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _6.CalcInAmtGivenOutResponse;
                fromPartial(object: Partial<_6.CalcInAmtGivenOutResponse>): _6.CalcInAmtGivenOutResponse;
            };
            InstantiateMsg: {
                encode(message: _5.InstantiateMsg, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _5.InstantiateMsg;
                fromPartial(object: Partial<_5.InstantiateMsg>): _5.InstantiateMsg;
            };
            UploadCosmWasmPoolCodeAndWhiteListProposal: {
                encode(message: _4.UploadCosmWasmPoolCodeAndWhiteListProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _4.UploadCosmWasmPoolCodeAndWhiteListProposal;
                fromPartial(object: Partial<_4.UploadCosmWasmPoolCodeAndWhiteListProposal>): _4.UploadCosmWasmPoolCodeAndWhiteListProposal;
            };
            MigratePoolContractsProposal: {
                encode(message: _4.MigratePoolContractsProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _4.MigratePoolContractsProposal;
                fromPartial(object: Partial<_4.MigratePoolContractsProposal>): _4.MigratePoolContractsProposal;
            };
            GenesisState: {
                encode(message: _3.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _3.GenesisState;
                fromPartial(object: Partial<_3.GenesisState>): _3.GenesisState;
            };
        };
    }
    namespace downtimedetector {
        const v1beta1: {
            QueryClientImpl: typeof _210.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                recoveredSinceDowntimeOfLength(request: _17.RecoveredSinceDowntimeOfLengthRequest): Promise<_17.RecoveredSinceDowntimeOfLengthResponse>;
            };
            RecoveredSinceDowntimeOfLengthRequest: {
                encode(message: _17.RecoveredSinceDowntimeOfLengthRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _17.RecoveredSinceDowntimeOfLengthRequest;
                fromPartial(object: Partial<_17.RecoveredSinceDowntimeOfLengthRequest>): _17.RecoveredSinceDowntimeOfLengthRequest;
            };
            RecoveredSinceDowntimeOfLengthResponse: {
                encode(message: _17.RecoveredSinceDowntimeOfLengthResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _17.RecoveredSinceDowntimeOfLengthResponse;
                fromPartial(object: Partial<_17.RecoveredSinceDowntimeOfLengthResponse>): _17.RecoveredSinceDowntimeOfLengthResponse;
            };
            GenesisDowntimeEntry: {
                encode(message: _16.GenesisDowntimeEntry, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _16.GenesisDowntimeEntry;
                fromPartial(object: Partial<_16.GenesisDowntimeEntry>): _16.GenesisDowntimeEntry;
            };
            GenesisState: {
                encode(message: _16.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _16.GenesisState;
                fromPartial(object: Partial<_16.GenesisState>): _16.GenesisState;
            };
            downtimeFromJSON(object: any): _15.Downtime;
            downtimeToJSON(object: _15.Downtime): string;
            Downtime: typeof _15.Downtime;
            DowntimeSDKType: typeof _15.Downtime;
        };
    }
    namespace epochs {
        const v1beta1: {
            QueryClientImpl: typeof _211.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                epochInfos(request?: _19.QueryEpochsInfoRequest): Promise<_19.QueryEpochsInfoResponse>;
                currentEpoch(request: _19.QueryCurrentEpochRequest): Promise<_19.QueryCurrentEpochResponse>;
            };
            QueryEpochsInfoRequest: {
                encode(_: _19.QueryEpochsInfoRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _19.QueryEpochsInfoRequest;
                fromPartial(_: Partial<_19.QueryEpochsInfoRequest>): _19.QueryEpochsInfoRequest;
            };
            QueryEpochsInfoResponse: {
                encode(message: _19.QueryEpochsInfoResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _19.QueryEpochsInfoResponse;
                fromPartial(object: Partial<_19.QueryEpochsInfoResponse>): _19.QueryEpochsInfoResponse;
            };
            QueryCurrentEpochRequest: {
                encode(message: _19.QueryCurrentEpochRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _19.QueryCurrentEpochRequest;
                fromPartial(object: Partial<_19.QueryCurrentEpochRequest>): _19.QueryCurrentEpochRequest;
            };
            QueryCurrentEpochResponse: {
                encode(message: _19.QueryCurrentEpochResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _19.QueryCurrentEpochResponse;
                fromPartial(object: Partial<_19.QueryCurrentEpochResponse>): _19.QueryCurrentEpochResponse;
            };
            EpochInfo: {
                encode(message: _18.EpochInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _18.EpochInfo;
                fromPartial(object: Partial<_18.EpochInfo>): _18.EpochInfo;
            };
            GenesisState: {
                encode(message: _18.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _18.GenesisState;
                fromPartial(object: Partial<_18.GenesisState>): _18.GenesisState;
            };
        };
    }
    namespace gamm {
        const v1beta1: {
            MsgClientImpl: typeof _230.MsgClientImpl;
            QueryClientImpl: typeof _212.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                pools(request?: _23.QueryPoolsRequest): Promise<_23.QueryPoolsResponse>;
                numPools(request?: _23.QueryNumPoolsRequest): Promise<_23.QueryNumPoolsResponse>;
                totalLiquidity(request?: _23.QueryTotalLiquidityRequest): Promise<_23.QueryTotalLiquidityResponse>;
                poolsWithFilter(request: _23.QueryPoolsWithFilterRequest): Promise<_23.QueryPoolsWithFilterResponse>;
                pool(request: _23.QueryPoolRequest): Promise<_23.QueryPoolResponse>;
                poolType(request: _23.QueryPoolTypeRequest): Promise<_23.QueryPoolTypeResponse>;
                calcJoinPoolNoSwapShares(request: _23.QueryCalcJoinPoolNoSwapSharesRequest): Promise<_23.QueryCalcJoinPoolNoSwapSharesResponse>;
                calcJoinPoolShares(request: _23.QueryCalcJoinPoolSharesRequest): Promise<_23.QueryCalcJoinPoolSharesResponse>;
                calcExitPoolCoinsFromShares(request: _23.QueryCalcExitPoolCoinsFromSharesRequest): Promise<_23.QueryCalcExitPoolCoinsFromSharesResponse>;
                poolParams(request: _23.QueryPoolParamsRequest): Promise<_23.QueryPoolParamsResponse>;
                totalPoolLiquidity(request: _23.QueryTotalPoolLiquidityRequest): Promise<_23.QueryTotalPoolLiquidityResponse>;
                totalShares(request: _23.QueryTotalSharesRequest): Promise<_23.QueryTotalSharesResponse>;
                spotPrice(request: _23.QuerySpotPriceRequest): Promise<_23.QuerySpotPriceResponse>;
                estimateSwapExactAmountIn(request: _23.QuerySwapExactAmountInRequest): Promise<_23.QuerySwapExactAmountInResponse>;
                estimateSwapExactAmountOut(request: _23.QuerySwapExactAmountOutRequest): Promise<_23.QuerySwapExactAmountOutResponse>;
                concentratedPoolIdLinkFromCFMM(request: _23.QueryConcentratedPoolIdLinkFromCFMMRequest): Promise<_23.QueryConcentratedPoolIdLinkFromCFMMResponse>;
            };
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    joinPool(value: _25.MsgJoinPool): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    exitPool(value: _25.MsgExitPool): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    swapExactAmountIn(value: _25.MsgSwapExactAmountIn): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    swapExactAmountOut(value: _25.MsgSwapExactAmountOut): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    joinSwapExternAmountIn(value: _25.MsgJoinSwapExternAmountIn): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    joinSwapShareAmountOut(value: _25.MsgJoinSwapShareAmountOut): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    exitSwapExternAmountOut(value: _25.MsgExitSwapExternAmountOut): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    exitSwapShareAmountIn(value: _25.MsgExitSwapShareAmountIn): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    joinPool(value: _25.MsgJoinPool): {
                        typeUrl: string;
                        value: _25.MsgJoinPool;
                    };
                    exitPool(value: _25.MsgExitPool): {
                        typeUrl: string;
                        value: _25.MsgExitPool;
                    };
                    swapExactAmountIn(value: _25.MsgSwapExactAmountIn): {
                        typeUrl: string;
                        value: _25.MsgSwapExactAmountIn;
                    };
                    swapExactAmountOut(value: _25.MsgSwapExactAmountOut): {
                        typeUrl: string;
                        value: _25.MsgSwapExactAmountOut;
                    };
                    joinSwapExternAmountIn(value: _25.MsgJoinSwapExternAmountIn): {
                        typeUrl: string;
                        value: _25.MsgJoinSwapExternAmountIn;
                    };
                    joinSwapShareAmountOut(value: _25.MsgJoinSwapShareAmountOut): {
                        typeUrl: string;
                        value: _25.MsgJoinSwapShareAmountOut;
                    };
                    exitSwapExternAmountOut(value: _25.MsgExitSwapExternAmountOut): {
                        typeUrl: string;
                        value: _25.MsgExitSwapExternAmountOut;
                    };
                    exitSwapShareAmountIn(value: _25.MsgExitSwapShareAmountIn): {
                        typeUrl: string;
                        value: _25.MsgExitSwapShareAmountIn;
                    };
                };
                fromJSON: {
                    joinPool(value: any): {
                        typeUrl: string;
                        value: _25.MsgJoinPool;
                    };
                    exitPool(value: any): {
                        typeUrl: string;
                        value: _25.MsgExitPool;
                    };
                    swapExactAmountIn(value: any): {
                        typeUrl: string;
                        value: _25.MsgSwapExactAmountIn;
                    };
                    swapExactAmountOut(value: any): {
                        typeUrl: string;
                        value: _25.MsgSwapExactAmountOut;
                    };
                    joinSwapExternAmountIn(value: any): {
                        typeUrl: string;
                        value: _25.MsgJoinSwapExternAmountIn;
                    };
                    joinSwapShareAmountOut(value: any): {
                        typeUrl: string;
                        value: _25.MsgJoinSwapShareAmountOut;
                    };
                    exitSwapExternAmountOut(value: any): {
                        typeUrl: string;
                        value: _25.MsgExitSwapExternAmountOut;
                    };
                    exitSwapShareAmountIn(value: any): {
                        typeUrl: string;
                        value: _25.MsgExitSwapShareAmountIn;
                    };
                };
                fromPartial: {
                    joinPool(value: _25.MsgJoinPool): {
                        typeUrl: string;
                        value: _25.MsgJoinPool;
                    };
                    exitPool(value: _25.MsgExitPool): {
                        typeUrl: string;
                        value: _25.MsgExitPool;
                    };
                    swapExactAmountIn(value: _25.MsgSwapExactAmountIn): {
                        typeUrl: string;
                        value: _25.MsgSwapExactAmountIn;
                    };
                    swapExactAmountOut(value: _25.MsgSwapExactAmountOut): {
                        typeUrl: string;
                        value: _25.MsgSwapExactAmountOut;
                    };
                    joinSwapExternAmountIn(value: _25.MsgJoinSwapExternAmountIn): {
                        typeUrl: string;
                        value: _25.MsgJoinSwapExternAmountIn;
                    };
                    joinSwapShareAmountOut(value: _25.MsgJoinSwapShareAmountOut): {
                        typeUrl: string;
                        value: _25.MsgJoinSwapShareAmountOut;
                    };
                    exitSwapExternAmountOut(value: _25.MsgExitSwapExternAmountOut): {
                        typeUrl: string;
                        value: _25.MsgExitSwapExternAmountOut;
                    };
                    exitSwapShareAmountIn(value: _25.MsgExitSwapShareAmountIn): {
                        typeUrl: string;
                        value: _25.MsgExitSwapShareAmountIn;
                    };
                };
            };
            AminoConverter: {
                "/osmosis.gamm.v1beta1.MsgJoinPool": {
                    aminoType: string;
                    toAmino: ({ sender, poolId, shareOutAmount, tokenInMaxs }: _25.MsgJoinPool) => {
                        sender: string;
                        pool_id: string;
                        share_out_amount: string;
                        token_in_maxs: {
                            denom: string;
                            amount: string;
                        }[];
                    };
                    fromAmino: ({ sender, pool_id, share_out_amount, token_in_maxs }: {
                        sender: string;
                        pool_id: string;
                        share_out_amount: string;
                        token_in_maxs: {
                            denom: string;
                            amount: string;
                        }[];
                    }) => _25.MsgJoinPool;
                };
                "/osmosis.gamm.v1beta1.MsgExitPool": {
                    aminoType: string;
                    toAmino: ({ sender, poolId, shareInAmount, tokenOutMins }: _25.MsgExitPool) => {
                        sender: string;
                        pool_id: string;
                        share_in_amount: string;
                        token_out_mins: {
                            denom: string;
                            amount: string;
                        }[];
                    };
                    fromAmino: ({ sender, pool_id, share_in_amount, token_out_mins }: {
                        sender: string;
                        pool_id: string;
                        share_in_amount: string;
                        token_out_mins: {
                            denom: string;
                            amount: string;
                        }[];
                    }) => _25.MsgExitPool;
                };
                "/osmosis.gamm.v1beta1.MsgSwapExactAmountIn": {
                    aminoType: string;
                    toAmino: ({ sender, routes, tokenIn, tokenOutMinAmount }: _25.MsgSwapExactAmountIn) => {
                        sender: string;
                        routes: {
                            pool_id: string;
                            token_out_denom: string;
                        }[];
                        token_in: {
                            denom: string;
                            amount: string;
                        };
                        token_out_min_amount: string;
                    };
                    fromAmino: ({ sender, routes, token_in, token_out_min_amount }: {
                        sender: string;
                        routes: {
                            pool_id: string;
                            token_out_denom: string;
                        }[];
                        token_in: {
                            denom: string;
                            amount: string;
                        };
                        token_out_min_amount: string;
                    }) => _25.MsgSwapExactAmountIn;
                };
                "/osmosis.gamm.v1beta1.MsgSwapExactAmountOut": {
                    aminoType: string;
                    toAmino: ({ sender, routes, tokenInMaxAmount, tokenOut }: _25.MsgSwapExactAmountOut) => {
                        sender: string;
                        routes: {
                            pool_id: string;
                            token_in_denom: string;
                        }[];
                        token_in_max_amount: string;
                        token_out: {
                            denom: string;
                            amount: string;
                        };
                    };
                    fromAmino: ({ sender, routes, token_in_max_amount, token_out }: {
                        sender: string;
                        routes: {
                            pool_id: string;
                            token_in_denom: string;
                        }[];
                        token_in_max_amount: string;
                        token_out: {
                            denom: string;
                            amount: string;
                        };
                    }) => _25.MsgSwapExactAmountOut;
                };
                "/osmosis.gamm.v1beta1.MsgJoinSwapExternAmountIn": {
                    aminoType: string;
                    toAmino: ({ sender, poolId, tokenIn, shareOutMinAmount }: _25.MsgJoinSwapExternAmountIn) => {
                        sender: string;
                        pool_id: string;
                        token_in: {
                            denom: string;
                            amount: string;
                        };
                        share_out_min_amount: string;
                    };
                    fromAmino: ({ sender, pool_id, token_in, share_out_min_amount }: {
                        sender: string;
                        pool_id: string;
                        token_in: {
                            denom: string;
                            amount: string;
                        };
                        share_out_min_amount: string;
                    }) => _25.MsgJoinSwapExternAmountIn;
                };
                "/osmosis.gamm.v1beta1.MsgJoinSwapShareAmountOut": {
                    aminoType: string;
                    toAmino: ({ sender, poolId, tokenInDenom, shareOutAmount, tokenInMaxAmount }: _25.MsgJoinSwapShareAmountOut) => {
                        sender: string;
                        pool_id: string;
                        token_in_denom: string;
                        share_out_amount: string;
                        token_in_max_amount: string;
                    };
                    fromAmino: ({ sender, pool_id, token_in_denom, share_out_amount, token_in_max_amount }: {
                        sender: string;
                        pool_id: string;
                        token_in_denom: string;
                        share_out_amount: string;
                        token_in_max_amount: string;
                    }) => _25.MsgJoinSwapShareAmountOut;
                };
                "/osmosis.gamm.v1beta1.MsgExitSwapExternAmountOut": {
                    aminoType: string;
                    toAmino: ({ sender, poolId, tokenOut, shareInMaxAmount }: _25.MsgExitSwapExternAmountOut) => {
                        sender: string;
                        pool_id: string;
                        token_out: {
                            denom: string;
                            amount: string;
                        };
                        share_in_max_amount: string;
                    };
                    fromAmino: ({ sender, pool_id, token_out, share_in_max_amount }: {
                        sender: string;
                        pool_id: string;
                        token_out: {
                            denom: string;
                            amount: string;
                        };
                        share_in_max_amount: string;
                    }) => _25.MsgExitSwapExternAmountOut;
                };
                "/osmosis.gamm.v1beta1.MsgExitSwapShareAmountIn": {
                    aminoType: string;
                    toAmino: ({ sender, poolId, tokenOutDenom, shareInAmount, tokenOutMinAmount }: _25.MsgExitSwapShareAmountIn) => {
                        sender: string;
                        pool_id: string;
                        token_out_denom: string;
                        share_in_amount: string;
                        token_out_min_amount: string;
                    };
                    fromAmino: ({ sender, pool_id, token_out_denom, share_in_amount, token_out_min_amount }: {
                        sender: string;
                        pool_id: string;
                        token_out_denom: string;
                        share_in_amount: string;
                        token_out_min_amount: string;
                    }) => _25.MsgExitSwapShareAmountIn;
                };
            };
            MsgJoinPool: {
                encode(message: _25.MsgJoinPool, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _25.MsgJoinPool;
                fromPartial(object: Partial<_25.MsgJoinPool>): _25.MsgJoinPool;
            };
            MsgJoinPoolResponse: {
                encode(message: _25.MsgJoinPoolResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _25.MsgJoinPoolResponse;
                fromPartial(object: Partial<_25.MsgJoinPoolResponse>): _25.MsgJoinPoolResponse;
            };
            MsgExitPool: {
                encode(message: _25.MsgExitPool, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _25.MsgExitPool;
                fromPartial(object: Partial<_25.MsgExitPool>): _25.MsgExitPool;
            };
            MsgExitPoolResponse: {
                encode(message: _25.MsgExitPoolResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _25.MsgExitPoolResponse;
                fromPartial(object: Partial<_25.MsgExitPoolResponse>): _25.MsgExitPoolResponse;
            };
            MsgSwapExactAmountIn: {
                encode(message: _25.MsgSwapExactAmountIn, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _25.MsgSwapExactAmountIn;
                fromPartial(object: Partial<_25.MsgSwapExactAmountIn>): _25.MsgSwapExactAmountIn;
            };
            MsgSwapExactAmountInResponse: {
                encode(message: _25.MsgSwapExactAmountInResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _25.MsgSwapExactAmountInResponse;
                fromPartial(object: Partial<_25.MsgSwapExactAmountInResponse>): _25.MsgSwapExactAmountInResponse;
            };
            MsgSwapExactAmountOut: {
                encode(message: _25.MsgSwapExactAmountOut, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _25.MsgSwapExactAmountOut;
                fromPartial(object: Partial<_25.MsgSwapExactAmountOut>): _25.MsgSwapExactAmountOut;
            };
            MsgSwapExactAmountOutResponse: {
                encode(message: _25.MsgSwapExactAmountOutResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _25.MsgSwapExactAmountOutResponse;
                fromPartial(object: Partial<_25.MsgSwapExactAmountOutResponse>): _25.MsgSwapExactAmountOutResponse;
            };
            MsgJoinSwapExternAmountIn: {
                encode(message: _25.MsgJoinSwapExternAmountIn, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _25.MsgJoinSwapExternAmountIn;
                fromPartial(object: Partial<_25.MsgJoinSwapExternAmountIn>): _25.MsgJoinSwapExternAmountIn;
            };
            MsgJoinSwapExternAmountInResponse: {
                encode(message: _25.MsgJoinSwapExternAmountInResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _25.MsgJoinSwapExternAmountInResponse;
                fromPartial(object: Partial<_25.MsgJoinSwapExternAmountInResponse>): _25.MsgJoinSwapExternAmountInResponse;
            };
            MsgJoinSwapShareAmountOut: {
                encode(message: _25.MsgJoinSwapShareAmountOut, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _25.MsgJoinSwapShareAmountOut;
                fromPartial(object: Partial<_25.MsgJoinSwapShareAmountOut>): _25.MsgJoinSwapShareAmountOut;
            };
            MsgJoinSwapShareAmountOutResponse: {
                encode(message: _25.MsgJoinSwapShareAmountOutResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _25.MsgJoinSwapShareAmountOutResponse;
                fromPartial(object: Partial<_25.MsgJoinSwapShareAmountOutResponse>): _25.MsgJoinSwapShareAmountOutResponse;
            };
            MsgExitSwapShareAmountIn: {
                encode(message: _25.MsgExitSwapShareAmountIn, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _25.MsgExitSwapShareAmountIn;
                fromPartial(object: Partial<_25.MsgExitSwapShareAmountIn>): _25.MsgExitSwapShareAmountIn;
            };
            MsgExitSwapShareAmountInResponse: {
                encode(message: _25.MsgExitSwapShareAmountInResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _25.MsgExitSwapShareAmountInResponse;
                fromPartial(object: Partial<_25.MsgExitSwapShareAmountInResponse>): _25.MsgExitSwapShareAmountInResponse;
            };
            MsgExitSwapExternAmountOut: {
                encode(message: _25.MsgExitSwapExternAmountOut, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _25.MsgExitSwapExternAmountOut;
                fromPartial(object: Partial<_25.MsgExitSwapExternAmountOut>): _25.MsgExitSwapExternAmountOut;
            };
            MsgExitSwapExternAmountOutResponse: {
                encode(message: _25.MsgExitSwapExternAmountOutResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _25.MsgExitSwapExternAmountOutResponse;
                fromPartial(object: Partial<_25.MsgExitSwapExternAmountOutResponse>): _25.MsgExitSwapExternAmountOutResponse;
            };
            MigrationRecords: {
                encode(message: _24.MigrationRecords, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _24.MigrationRecords;
                fromPartial(object: Partial<_24.MigrationRecords>): _24.MigrationRecords;
            };
            BalancerToConcentratedPoolLink: {
                encode(message: _24.BalancerToConcentratedPoolLink, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _24.BalancerToConcentratedPoolLink;
                fromPartial(object: Partial<_24.BalancerToConcentratedPoolLink>): _24.BalancerToConcentratedPoolLink;
            };
            QueryPoolRequest: {
                encode(message: _23.QueryPoolRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _23.QueryPoolRequest;
                fromPartial(object: Partial<_23.QueryPoolRequest>): _23.QueryPoolRequest;
            };
            QueryPoolResponse: {
                encode(message: _23.QueryPoolResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _23.QueryPoolResponse;
                fromPartial(object: Partial<_23.QueryPoolResponse>): _23.QueryPoolResponse;
            };
            QueryPoolsRequest: {
                encode(message: _23.QueryPoolsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _23.QueryPoolsRequest;
                fromPartial(object: Partial<_23.QueryPoolsRequest>): _23.QueryPoolsRequest;
            };
            QueryPoolsResponse: {
                encode(message: _23.QueryPoolsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _23.QueryPoolsResponse;
                fromPartial(object: Partial<_23.QueryPoolsResponse>): _23.QueryPoolsResponse;
            };
            QueryNumPoolsRequest: {
                encode(_: _23.QueryNumPoolsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _23.QueryNumPoolsRequest;
                fromPartial(_: Partial<_23.QueryNumPoolsRequest>): _23.QueryNumPoolsRequest;
            };
            QueryNumPoolsResponse: {
                encode(message: _23.QueryNumPoolsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _23.QueryNumPoolsResponse;
                fromPartial(object: Partial<_23.QueryNumPoolsResponse>): _23.QueryNumPoolsResponse;
            };
            QueryPoolTypeRequest: {
                encode(message: _23.QueryPoolTypeRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _23.QueryPoolTypeRequest;
                fromPartial(object: Partial<_23.QueryPoolTypeRequest>): _23.QueryPoolTypeRequest;
            };
            QueryPoolTypeResponse: {
                encode(message: _23.QueryPoolTypeResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _23.QueryPoolTypeResponse;
                fromPartial(object: Partial<_23.QueryPoolTypeResponse>): _23.QueryPoolTypeResponse;
            };
            QueryCalcJoinPoolSharesRequest: {
                encode(message: _23.QueryCalcJoinPoolSharesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _23.QueryCalcJoinPoolSharesRequest;
                fromPartial(object: Partial<_23.QueryCalcJoinPoolSharesRequest>): _23.QueryCalcJoinPoolSharesRequest;
            };
            QueryCalcJoinPoolSharesResponse: {
                encode(message: _23.QueryCalcJoinPoolSharesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _23.QueryCalcJoinPoolSharesResponse;
                fromPartial(object: Partial<_23.QueryCalcJoinPoolSharesResponse>): _23.QueryCalcJoinPoolSharesResponse;
            };
            QueryCalcExitPoolCoinsFromSharesRequest: {
                encode(message: _23.QueryCalcExitPoolCoinsFromSharesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _23.QueryCalcExitPoolCoinsFromSharesRequest;
                fromPartial(object: Partial<_23.QueryCalcExitPoolCoinsFromSharesRequest>): _23.QueryCalcExitPoolCoinsFromSharesRequest;
            };
            QueryCalcExitPoolCoinsFromSharesResponse: {
                encode(message: _23.QueryCalcExitPoolCoinsFromSharesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _23.QueryCalcExitPoolCoinsFromSharesResponse;
                fromPartial(object: Partial<_23.QueryCalcExitPoolCoinsFromSharesResponse>): _23.QueryCalcExitPoolCoinsFromSharesResponse;
            };
            QueryPoolParamsRequest: {
                encode(message: _23.QueryPoolParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _23.QueryPoolParamsRequest;
                fromPartial(object: Partial<_23.QueryPoolParamsRequest>): _23.QueryPoolParamsRequest;
            };
            QueryPoolParamsResponse: {
                encode(message: _23.QueryPoolParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _23.QueryPoolParamsResponse;
                fromPartial(object: Partial<_23.QueryPoolParamsResponse>): _23.QueryPoolParamsResponse;
            };
            QueryTotalPoolLiquidityRequest: {
                encode(message: _23.QueryTotalPoolLiquidityRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _23.QueryTotalPoolLiquidityRequest;
                fromPartial(object: Partial<_23.QueryTotalPoolLiquidityRequest>): _23.QueryTotalPoolLiquidityRequest;
            };
            QueryTotalPoolLiquidityResponse: {
                encode(message: _23.QueryTotalPoolLiquidityResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _23.QueryTotalPoolLiquidityResponse;
                fromPartial(object: Partial<_23.QueryTotalPoolLiquidityResponse>): _23.QueryTotalPoolLiquidityResponse;
            };
            QueryTotalSharesRequest: {
                encode(message: _23.QueryTotalSharesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _23.QueryTotalSharesRequest;
                fromPartial(object: Partial<_23.QueryTotalSharesRequest>): _23.QueryTotalSharesRequest;
            };
            QueryTotalSharesResponse: {
                encode(message: _23.QueryTotalSharesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _23.QueryTotalSharesResponse;
                fromPartial(object: Partial<_23.QueryTotalSharesResponse>): _23.QueryTotalSharesResponse;
            };
            QueryCalcJoinPoolNoSwapSharesRequest: {
                encode(message: _23.QueryCalcJoinPoolNoSwapSharesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _23.QueryCalcJoinPoolNoSwapSharesRequest;
                fromPartial(object: Partial<_23.QueryCalcJoinPoolNoSwapSharesRequest>): _23.QueryCalcJoinPoolNoSwapSharesRequest;
            };
            QueryCalcJoinPoolNoSwapSharesResponse: {
                encode(message: _23.QueryCalcJoinPoolNoSwapSharesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _23.QueryCalcJoinPoolNoSwapSharesResponse;
                fromPartial(object: Partial<_23.QueryCalcJoinPoolNoSwapSharesResponse>): _23.QueryCalcJoinPoolNoSwapSharesResponse;
            };
            QuerySpotPriceRequest: {
                encode(message: _23.QuerySpotPriceRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _23.QuerySpotPriceRequest;
                fromPartial(object: Partial<_23.QuerySpotPriceRequest>): _23.QuerySpotPriceRequest;
            };
            QueryPoolsWithFilterRequest: {
                encode(message: _23.QueryPoolsWithFilterRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _23.QueryPoolsWithFilterRequest;
                fromPartial(object: Partial<_23.QueryPoolsWithFilterRequest>): _23.QueryPoolsWithFilterRequest;
            };
            QueryPoolsWithFilterResponse: {
                encode(message: _23.QueryPoolsWithFilterResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _23.QueryPoolsWithFilterResponse;
                fromPartial(object: Partial<_23.QueryPoolsWithFilterResponse>): _23.QueryPoolsWithFilterResponse;
            };
            QuerySpotPriceResponse: {
                encode(message: _23.QuerySpotPriceResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _23.QuerySpotPriceResponse;
                fromPartial(object: Partial<_23.QuerySpotPriceResponse>): _23.QuerySpotPriceResponse;
            };
            QuerySwapExactAmountInRequest: {
                encode(message: _23.QuerySwapExactAmountInRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _23.QuerySwapExactAmountInRequest;
                fromPartial(object: Partial<_23.QuerySwapExactAmountInRequest>): _23.QuerySwapExactAmountInRequest;
            };
            QuerySwapExactAmountInResponse: {
                encode(message: _23.QuerySwapExactAmountInResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _23.QuerySwapExactAmountInResponse;
                fromPartial(object: Partial<_23.QuerySwapExactAmountInResponse>): _23.QuerySwapExactAmountInResponse;
            };
            QuerySwapExactAmountOutRequest: {
                encode(message: _23.QuerySwapExactAmountOutRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _23.QuerySwapExactAmountOutRequest;
                fromPartial(object: Partial<_23.QuerySwapExactAmountOutRequest>): _23.QuerySwapExactAmountOutRequest;
            };
            QuerySwapExactAmountOutResponse: {
                encode(message: _23.QuerySwapExactAmountOutResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _23.QuerySwapExactAmountOutResponse;
                fromPartial(object: Partial<_23.QuerySwapExactAmountOutResponse>): _23.QuerySwapExactAmountOutResponse;
            };
            QueryTotalLiquidityRequest: {
                encode(_: _23.QueryTotalLiquidityRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _23.QueryTotalLiquidityRequest;
                fromPartial(_: Partial<_23.QueryTotalLiquidityRequest>): _23.QueryTotalLiquidityRequest;
            };
            QueryTotalLiquidityResponse: {
                encode(message: _23.QueryTotalLiquidityResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _23.QueryTotalLiquidityResponse;
                fromPartial(object: Partial<_23.QueryTotalLiquidityResponse>): _23.QueryTotalLiquidityResponse;
            };
            QueryConcentratedPoolIdLinkFromCFMMRequest: {
                encode(message: _23.QueryConcentratedPoolIdLinkFromCFMMRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _23.QueryConcentratedPoolIdLinkFromCFMMRequest;
                fromPartial(object: Partial<_23.QueryConcentratedPoolIdLinkFromCFMMRequest>): _23.QueryConcentratedPoolIdLinkFromCFMMRequest;
            };
            QueryConcentratedPoolIdLinkFromCFMMResponse: {
                encode(message: _23.QueryConcentratedPoolIdLinkFromCFMMResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _23.QueryConcentratedPoolIdLinkFromCFMMResponse;
                fromPartial(object: Partial<_23.QueryConcentratedPoolIdLinkFromCFMMResponse>): _23.QueryConcentratedPoolIdLinkFromCFMMResponse;
            };
            ReplaceMigrationRecordsProposal: {
                encode(message: _22.ReplaceMigrationRecordsProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _22.ReplaceMigrationRecordsProposal;
                fromPartial(object: Partial<_22.ReplaceMigrationRecordsProposal>): _22.ReplaceMigrationRecordsProposal;
            };
            UpdateMigrationRecordsProposal: {
                encode(message: _22.UpdateMigrationRecordsProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _22.UpdateMigrationRecordsProposal;
                fromPartial(object: Partial<_22.UpdateMigrationRecordsProposal>): _22.UpdateMigrationRecordsProposal;
            };
            Params: {
                encode(message: _21.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _21.Params;
                fromPartial(object: Partial<_21.Params>): _21.Params;
            };
            GenesisState: {
                encode(message: _21.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _21.GenesisState;
                fromPartial(object: Partial<_21.GenesisState>): _21.GenesisState;
            };
            SmoothWeightChangeParams: {
                encode(message: _20.SmoothWeightChangeParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _20.SmoothWeightChangeParams;
                fromPartial(object: Partial<_20.SmoothWeightChangeParams>): _20.SmoothWeightChangeParams;
            };
            PoolParams: {
                encode(message: _20.PoolParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _20.PoolParams;
                fromPartial(object: Partial<_20.PoolParams>): _20.PoolParams;
            };
            PoolAsset: {
                encode(message: _20.PoolAsset, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _20.PoolAsset;
                fromPartial(object: Partial<_20.PoolAsset>): _20.PoolAsset;
            };
            Pool: {
                encode(message: _20.Pool, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _20.Pool;
                fromPartial(object: Partial<_20.Pool>): _20.Pool;
            };
        };
        namespace poolmodels {
            namespace balancer {
                const v1beta1: {
                    MsgClientImpl: typeof _228.MsgClientImpl;
                    registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
                    load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
                    MessageComposer: {
                        encoded: {
                            createBalancerPool(value: _26.MsgCreateBalancerPool): {
                                typeUrl: string;
                                value: Uint8Array;
                            };
                        };
                        withTypeUrl: {
                            createBalancerPool(value: _26.MsgCreateBalancerPool): {
                                typeUrl: string;
                                value: _26.MsgCreateBalancerPool;
                            };
                        };
                        fromJSON: {
                            createBalancerPool(value: any): {
                                typeUrl: string;
                                value: _26.MsgCreateBalancerPool;
                            };
                        };
                        fromPartial: {
                            createBalancerPool(value: _26.MsgCreateBalancerPool): {
                                typeUrl: string;
                                value: _26.MsgCreateBalancerPool;
                            };
                        };
                    };
                    AminoConverter: {
                        "/osmosis.gamm.poolmodels.balancer.v1beta1.MsgCreateBalancerPool": {
                            aminoType: string;
                            toAmino: ({ sender, poolParams, poolAssets, futurePoolGovernor }: _26.MsgCreateBalancerPool) => {
                                sender: string;
                                pool_params: {
                                    swap_fee: string;
                                    exit_fee: string;
                                    smooth_weight_change_params: {
                                        start_time: {
                                            seconds: string;
                                            nanos: number;
                                        };
                                        duration: {
                                            seconds: string;
                                            nanos: number;
                                        };
                                        initial_pool_weights: {
                                            token: {
                                                denom: string;
                                                amount: string;
                                            };
                                            weight: string;
                                        }[];
                                        target_pool_weights: {
                                            token: {
                                                denom: string;
                                                amount: string;
                                            };
                                            weight: string;
                                        }[];
                                    };
                                };
                                pool_assets: {
                                    token: {
                                        denom: string;
                                        amount: string;
                                    };
                                    weight: string;
                                }[];
                                future_pool_governor: string;
                            };
                            fromAmino: ({ sender, pool_params, pool_assets, future_pool_governor }: {
                                sender: string;
                                pool_params: {
                                    swap_fee: string;
                                    exit_fee: string;
                                    smooth_weight_change_params: {
                                        start_time: {
                                            seconds: string;
                                            nanos: number;
                                        };
                                        duration: {
                                            seconds: string;
                                            nanos: number;
                                        };
                                        initial_pool_weights: {
                                            token: {
                                                denom: string;
                                                amount: string;
                                            };
                                            weight: string;
                                        }[];
                                        target_pool_weights: {
                                            token: {
                                                denom: string;
                                                amount: string;
                                            };
                                            weight: string;
                                        }[];
                                    };
                                };
                                pool_assets: {
                                    token: {
                                        denom: string;
                                        amount: string;
                                    };
                                    weight: string;
                                }[];
                                future_pool_governor: string;
                            }) => _26.MsgCreateBalancerPool;
                        };
                    };
                    MsgCreateBalancerPool: {
                        encode(message: _26.MsgCreateBalancerPool, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                        fromJSON(object: any): _26.MsgCreateBalancerPool;
                        fromPartial(object: Partial<_26.MsgCreateBalancerPool>): _26.MsgCreateBalancerPool;
                    };
                    MsgCreateBalancerPoolResponse: {
                        encode(message: _26.MsgCreateBalancerPoolResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                        fromJSON(object: any): _26.MsgCreateBalancerPoolResponse;
                        fromPartial(object: Partial<_26.MsgCreateBalancerPoolResponse>): _26.MsgCreateBalancerPoolResponse;
                    };
                };
            }
            namespace stableswap {
                const v1beta1: {
                    MsgClientImpl: typeof _229.MsgClientImpl;
                    registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
                    load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
                    MessageComposer: {
                        encoded: {
                            createStableswapPool(value: _28.MsgCreateStableswapPool): {
                                typeUrl: string;
                                value: Uint8Array;
                            };
                            stableSwapAdjustScalingFactors(value: _28.MsgStableSwapAdjustScalingFactors): {
                                typeUrl: string;
                                value: Uint8Array;
                            };
                        };
                        withTypeUrl: {
                            createStableswapPool(value: _28.MsgCreateStableswapPool): {
                                typeUrl: string;
                                value: _28.MsgCreateStableswapPool;
                            };
                            stableSwapAdjustScalingFactors(value: _28.MsgStableSwapAdjustScalingFactors): {
                                typeUrl: string;
                                value: _28.MsgStableSwapAdjustScalingFactors;
                            };
                        };
                        fromJSON: {
                            createStableswapPool(value: any): {
                                typeUrl: string;
                                value: _28.MsgCreateStableswapPool;
                            };
                            stableSwapAdjustScalingFactors(value: any): {
                                typeUrl: string;
                                value: _28.MsgStableSwapAdjustScalingFactors;
                            };
                        };
                        fromPartial: {
                            createStableswapPool(value: _28.MsgCreateStableswapPool): {
                                typeUrl: string;
                                value: _28.MsgCreateStableswapPool;
                            };
                            stableSwapAdjustScalingFactors(value: _28.MsgStableSwapAdjustScalingFactors): {
                                typeUrl: string;
                                value: _28.MsgStableSwapAdjustScalingFactors;
                            };
                        };
                    };
                    AminoConverter: {
                        "/osmosis.gamm.poolmodels.stableswap.v1beta1.MsgCreateStableswapPool": {
                            aminoType: string;
                            toAmino: ({ sender, poolParams, initialPoolLiquidity, scalingFactors, futurePoolGovernor, scalingFactorController }: _28.MsgCreateStableswapPool) => {
                                sender: string;
                                pool_params: {
                                    swap_fee: string;
                                    exit_fee: string;
                                };
                                initial_pool_liquidity: {
                                    denom: string;
                                    amount: string;
                                }[];
                                scaling_factors: string[];
                                future_pool_governor: string;
                                scaling_factor_controller: string;
                            };
                            fromAmino: ({ sender, pool_params, initial_pool_liquidity, scaling_factors, future_pool_governor, scaling_factor_controller }: {
                                sender: string;
                                pool_params: {
                                    swap_fee: string;
                                    exit_fee: string;
                                };
                                initial_pool_liquidity: {
                                    denom: string;
                                    amount: string;
                                }[];
                                scaling_factors: string[];
                                future_pool_governor: string;
                                scaling_factor_controller: string;
                            }) => _28.MsgCreateStableswapPool;
                        };
                        "/osmosis.gamm.poolmodels.stableswap.v1beta1.MsgStableSwapAdjustScalingFactors": {
                            aminoType: string;
                            toAmino: ({ sender, poolId, scalingFactors }: _28.MsgStableSwapAdjustScalingFactors) => {
                                sender: string;
                                pool_id: string;
                                scaling_factors: string[];
                            };
                            fromAmino: ({ sender, pool_id, scaling_factors }: {
                                sender: string;
                                pool_id: string;
                                scaling_factors: string[];
                            }) => _28.MsgStableSwapAdjustScalingFactors;
                        };
                    };
                    MsgCreateStableswapPool: {
                        encode(message: _28.MsgCreateStableswapPool, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                        fromJSON(object: any): _28.MsgCreateStableswapPool;
                        fromPartial(object: Partial<_28.MsgCreateStableswapPool>): _28.MsgCreateStableswapPool;
                    };
                    MsgCreateStableswapPoolResponse: {
                        encode(message: _28.MsgCreateStableswapPoolResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                        fromJSON(object: any): _28.MsgCreateStableswapPoolResponse;
                        fromPartial(object: Partial<_28.MsgCreateStableswapPoolResponse>): _28.MsgCreateStableswapPoolResponse;
                    };
                    MsgStableSwapAdjustScalingFactors: {
                        encode(message: _28.MsgStableSwapAdjustScalingFactors, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                        fromJSON(object: any): _28.MsgStableSwapAdjustScalingFactors;
                        fromPartial(object: Partial<_28.MsgStableSwapAdjustScalingFactors>): _28.MsgStableSwapAdjustScalingFactors;
                    };
                    MsgStableSwapAdjustScalingFactorsResponse: {
                        encode(_: _28.MsgStableSwapAdjustScalingFactorsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                        fromJSON(_: any): _28.MsgStableSwapAdjustScalingFactorsResponse;
                        fromPartial(_: Partial<_28.MsgStableSwapAdjustScalingFactorsResponse>): _28.MsgStableSwapAdjustScalingFactorsResponse;
                    };
                    PoolParams: {
                        encode(message: _27.PoolParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                        fromJSON(object: any): _27.PoolParams;
                        fromPartial(object: Partial<_27.PoolParams>): _27.PoolParams;
                    };
                    Pool: {
                        encode(message: _27.Pool, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                        fromJSON(object: any): _27.Pool;
                        fromPartial(object: Partial<_27.Pool>): _27.Pool;
                    };
                };
            }
        }
        const v2: {
            QueryClientImpl: typeof _213.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                spotPrice(request: _29.QuerySpotPriceRequest): Promise<_29.QuerySpotPriceResponse>;
            };
            QuerySpotPriceRequest: {
                encode(message: _29.QuerySpotPriceRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _29.QuerySpotPriceRequest;
                fromPartial(object: Partial<_29.QuerySpotPriceRequest>): _29.QuerySpotPriceRequest;
            };
            QuerySpotPriceResponse: {
                encode(message: _29.QuerySpotPriceResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _29.QuerySpotPriceResponse;
                fromPartial(object: Partial<_29.QuerySpotPriceResponse>): _29.QuerySpotPriceResponse;
            };
        };
    }
    namespace ibcratelimit {
        const v1beta1: {
            QueryClientImpl: typeof _214.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                params(request?: _32.ParamsRequest): Promise<_32.ParamsResponse>;
            };
            ParamsRequest: {
                encode(_: _32.ParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _32.ParamsRequest;
                fromPartial(_: Partial<_32.ParamsRequest>): _32.ParamsRequest;
            };
            ParamsResponse: {
                encode(message: _32.ParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _32.ParamsResponse;
                fromPartial(object: Partial<_32.ParamsResponse>): _32.ParamsResponse;
            };
            Params: {
                encode(message: _31.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _31.Params;
                fromPartial(object: Partial<_31.Params>): _31.Params;
            };
            GenesisState: {
                encode(message: _30.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _30.GenesisState;
                fromPartial(object: Partial<_30.GenesisState>): _30.GenesisState;
            };
        };
    }
    const incentives: {
        MsgClientImpl: typeof _231.MsgClientImpl;
        QueryClientImpl: typeof _215.QueryClientImpl;
        createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
            moduleToDistributeCoins(request?: _36.ModuleToDistributeCoinsRequest): Promise<_36.ModuleToDistributeCoinsResponse>;
            gaugeByID(request: _36.GaugeByIDRequest): Promise<_36.GaugeByIDResponse>;
            gauges(request?: _36.GaugesRequest): Promise<_36.GaugesResponse>;
            activeGauges(request?: _36.ActiveGaugesRequest): Promise<_36.ActiveGaugesResponse>;
            activeGaugesPerDenom(request: _36.ActiveGaugesPerDenomRequest): Promise<_36.ActiveGaugesPerDenomResponse>;
            upcomingGauges(request?: _36.UpcomingGaugesRequest): Promise<_36.UpcomingGaugesResponse>;
            upcomingGaugesPerDenom(request: _36.UpcomingGaugesPerDenomRequest): Promise<_36.UpcomingGaugesPerDenomResponse>;
            rewardsEst(request: _36.RewardsEstRequest): Promise<_36.RewardsEstResponse>;
            lockableDurations(request?: _36.QueryLockableDurationsRequest): Promise<_36.QueryLockableDurationsResponse>;
        };
        registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
        load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
        MessageComposer: {
            encoded: {
                createGauge(value: _37.MsgCreateGauge): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                addToGauge(value: _37.MsgAddToGauge): {
                    typeUrl: string;
                    value: Uint8Array;
                };
            };
            withTypeUrl: {
                createGauge(value: _37.MsgCreateGauge): {
                    typeUrl: string;
                    value: _37.MsgCreateGauge;
                };
                addToGauge(value: _37.MsgAddToGauge): {
                    typeUrl: string;
                    value: _37.MsgAddToGauge;
                };
            };
            fromJSON: {
                createGauge(value: any): {
                    typeUrl: string;
                    value: _37.MsgCreateGauge;
                };
                addToGauge(value: any): {
                    typeUrl: string;
                    value: _37.MsgAddToGauge;
                };
            };
            fromPartial: {
                createGauge(value: _37.MsgCreateGauge): {
                    typeUrl: string;
                    value: _37.MsgCreateGauge;
                };
                addToGauge(value: _37.MsgAddToGauge): {
                    typeUrl: string;
                    value: _37.MsgAddToGauge;
                };
            };
        };
        AminoConverter: {
            "/osmosis.incentives.MsgCreateGauge": {
                aminoType: string;
                toAmino: ({ isPerpetual, owner, distributeTo, coins, startTime, numEpochsPaidOver, poolId }: _37.MsgCreateGauge) => {
                    is_perpetual: boolean;
                    owner: string;
                    distribute_to: {
                        lock_query_type: number;
                        denom: string;
                        duration: {
                            seconds: string;
                            nanos: number;
                        };
                        timestamp: {
                            seconds: string;
                            nanos: number;
                        };
                    };
                    coins: {
                        denom: string;
                        amount: string;
                    }[];
                    start_time: {
                        seconds: string;
                        nanos: number;
                    };
                    num_epochs_paid_over: string;
                    pool_id: string;
                };
                fromAmino: ({ is_perpetual, owner, distribute_to, coins, start_time, num_epochs_paid_over, pool_id }: {
                    is_perpetual: boolean;
                    owner: string;
                    distribute_to: {
                        lock_query_type: number;
                        denom: string;
                        duration: {
                            seconds: string;
                            nanos: number;
                        };
                        timestamp: {
                            seconds: string;
                            nanos: number;
                        };
                    };
                    coins: {
                        denom: string;
                        amount: string;
                    }[];
                    start_time: {
                        seconds: string;
                        nanos: number;
                    };
                    num_epochs_paid_over: string;
                    pool_id: string;
                }) => _37.MsgCreateGauge;
            };
            "/osmosis.incentives.MsgAddToGauge": {
                aminoType: string;
                toAmino: ({ owner, gaugeId, rewards }: _37.MsgAddToGauge) => {
                    owner: string;
                    gauge_id: string;
                    rewards: {
                        denom: string;
                        amount: string;
                    }[];
                };
                fromAmino: ({ owner, gauge_id, rewards }: {
                    owner: string;
                    gauge_id: string;
                    rewards: {
                        denom: string;
                        amount: string;
                    }[];
                }) => _37.MsgAddToGauge;
            };
        };
        MsgCreateGauge: {
            encode(message: _37.MsgCreateGauge, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _37.MsgCreateGauge;
            fromPartial(object: Partial<_37.MsgCreateGauge>): _37.MsgCreateGauge;
        };
        MsgCreateGaugeResponse: {
            encode(_: _37.MsgCreateGaugeResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(_: any): _37.MsgCreateGaugeResponse;
            fromPartial(_: Partial<_37.MsgCreateGaugeResponse>): _37.MsgCreateGaugeResponse;
        };
        MsgAddToGauge: {
            encode(message: _37.MsgAddToGauge, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _37.MsgAddToGauge;
            fromPartial(object: Partial<_37.MsgAddToGauge>): _37.MsgAddToGauge;
        };
        MsgAddToGaugeResponse: {
            encode(_: _37.MsgAddToGaugeResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(_: any): _37.MsgAddToGaugeResponse;
            fromPartial(_: Partial<_37.MsgAddToGaugeResponse>): _37.MsgAddToGaugeResponse;
        };
        ModuleToDistributeCoinsRequest: {
            encode(_: _36.ModuleToDistributeCoinsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(_: any): _36.ModuleToDistributeCoinsRequest;
            fromPartial(_: Partial<_36.ModuleToDistributeCoinsRequest>): _36.ModuleToDistributeCoinsRequest;
        };
        ModuleToDistributeCoinsResponse: {
            encode(message: _36.ModuleToDistributeCoinsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _36.ModuleToDistributeCoinsResponse;
            fromPartial(object: Partial<_36.ModuleToDistributeCoinsResponse>): _36.ModuleToDistributeCoinsResponse;
        };
        GaugeByIDRequest: {
            encode(message: _36.GaugeByIDRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _36.GaugeByIDRequest;
            fromPartial(object: Partial<_36.GaugeByIDRequest>): _36.GaugeByIDRequest;
        };
        GaugeByIDResponse: {
            encode(message: _36.GaugeByIDResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _36.GaugeByIDResponse;
            fromPartial(object: Partial<_36.GaugeByIDResponse>): _36.GaugeByIDResponse;
        };
        GaugesRequest: {
            encode(message: _36.GaugesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _36.GaugesRequest;
            fromPartial(object: Partial<_36.GaugesRequest>): _36.GaugesRequest;
        };
        GaugesResponse: {
            encode(message: _36.GaugesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _36.GaugesResponse;
            fromPartial(object: Partial<_36.GaugesResponse>): _36.GaugesResponse;
        };
        ActiveGaugesRequest: {
            encode(message: _36.ActiveGaugesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _36.ActiveGaugesRequest;
            fromPartial(object: Partial<_36.ActiveGaugesRequest>): _36.ActiveGaugesRequest;
        };
        ActiveGaugesResponse: {
            encode(message: _36.ActiveGaugesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _36.ActiveGaugesResponse;
            fromPartial(object: Partial<_36.ActiveGaugesResponse>): _36.ActiveGaugesResponse;
        };
        ActiveGaugesPerDenomRequest: {
            encode(message: _36.ActiveGaugesPerDenomRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _36.ActiveGaugesPerDenomRequest;
            fromPartial(object: Partial<_36.ActiveGaugesPerDenomRequest>): _36.ActiveGaugesPerDenomRequest;
        };
        ActiveGaugesPerDenomResponse: {
            encode(message: _36.ActiveGaugesPerDenomResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _36.ActiveGaugesPerDenomResponse;
            fromPartial(object: Partial<_36.ActiveGaugesPerDenomResponse>): _36.ActiveGaugesPerDenomResponse;
        };
        UpcomingGaugesRequest: {
            encode(message: _36.UpcomingGaugesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _36.UpcomingGaugesRequest;
            fromPartial(object: Partial<_36.UpcomingGaugesRequest>): _36.UpcomingGaugesRequest;
        };
        UpcomingGaugesResponse: {
            encode(message: _36.UpcomingGaugesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _36.UpcomingGaugesResponse;
            fromPartial(object: Partial<_36.UpcomingGaugesResponse>): _36.UpcomingGaugesResponse;
        };
        UpcomingGaugesPerDenomRequest: {
            encode(message: _36.UpcomingGaugesPerDenomRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _36.UpcomingGaugesPerDenomRequest;
            fromPartial(object: Partial<_36.UpcomingGaugesPerDenomRequest>): _36.UpcomingGaugesPerDenomRequest;
        };
        UpcomingGaugesPerDenomResponse: {
            encode(message: _36.UpcomingGaugesPerDenomResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _36.UpcomingGaugesPerDenomResponse;
            fromPartial(object: Partial<_36.UpcomingGaugesPerDenomResponse>): _36.UpcomingGaugesPerDenomResponse;
        };
        RewardsEstRequest: {
            encode(message: _36.RewardsEstRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _36.RewardsEstRequest;
            fromPartial(object: Partial<_36.RewardsEstRequest>): _36.RewardsEstRequest;
        };
        RewardsEstResponse: {
            encode(message: _36.RewardsEstResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _36.RewardsEstResponse;
            fromPartial(object: Partial<_36.RewardsEstResponse>): _36.RewardsEstResponse;
        };
        QueryLockableDurationsRequest: {
            encode(_: _36.QueryLockableDurationsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(_: any): _36.QueryLockableDurationsRequest;
            fromPartial(_: Partial<_36.QueryLockableDurationsRequest>): _36.QueryLockableDurationsRequest;
        };
        QueryLockableDurationsResponse: {
            encode(message: _36.QueryLockableDurationsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _36.QueryLockableDurationsResponse;
            fromPartial(object: Partial<_36.QueryLockableDurationsResponse>): _36.QueryLockableDurationsResponse;
        };
        Params: {
            encode(message: _35.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _35.Params;
            fromPartial(object: Partial<_35.Params>): _35.Params;
        };
        GenesisState: {
            encode(message: _34.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _34.GenesisState;
            fromPartial(object: Partial<_34.GenesisState>): _34.GenesisState;
        };
        Gauge: {
            encode(message: _33.Gauge, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _33.Gauge;
            fromPartial(object: Partial<_33.Gauge>): _33.Gauge;
        };
        LockableDurationsInfo: {
            encode(message: _33.LockableDurationsInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _33.LockableDurationsInfo;
            fromPartial(object: Partial<_33.LockableDurationsInfo>): _33.LockableDurationsInfo;
        };
    };
    const lockup: {
        MsgClientImpl: typeof _232.MsgClientImpl;
        QueryClientImpl: typeof _216.QueryClientImpl;
        createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
            moduleBalance(request?: _41.ModuleBalanceRequest): Promise<_41.ModuleBalanceResponse>;
            moduleLockedAmount(request?: _41.ModuleLockedAmountRequest): Promise<_41.ModuleLockedAmountResponse>;
            accountUnlockableCoins(request: _41.AccountUnlockableCoinsRequest): Promise<_41.AccountUnlockableCoinsResponse>;
            accountUnlockingCoins(request: _41.AccountUnlockingCoinsRequest): Promise<_41.AccountUnlockingCoinsResponse>;
            accountLockedCoins(request: _41.AccountLockedCoinsRequest): Promise<_41.AccountLockedCoinsResponse>;
            accountLockedPastTime(request: _41.AccountLockedPastTimeRequest): Promise<_41.AccountLockedPastTimeResponse>;
            accountLockedPastTimeNotUnlockingOnly(request: _41.AccountLockedPastTimeNotUnlockingOnlyRequest): Promise<_41.AccountLockedPastTimeNotUnlockingOnlyResponse>;
            accountUnlockedBeforeTime(request: _41.AccountUnlockedBeforeTimeRequest): Promise<_41.AccountUnlockedBeforeTimeResponse>;
            accountLockedPastTimeDenom(request: _41.AccountLockedPastTimeDenomRequest): Promise<_41.AccountLockedPastTimeDenomResponse>;
            lockedDenom(request: _41.LockedDenomRequest): Promise<_41.LockedDenomResponse>;
            lockedByID(request: _41.LockedRequest): Promise<_41.LockedResponse>;
            lockRewardReceiver(request: _41.LockRewardReceiverRequest): Promise<_41.LockRewardReceiverResponse>;
            nextLockID(request?: _41.NextLockIDRequest): Promise<_41.NextLockIDResponse>;
            syntheticLockupsByLockupID(request: _41.SyntheticLockupsByLockupIDRequest): Promise<_41.SyntheticLockupsByLockupIDResponse>;
            syntheticLockupByLockupID(request: _41.SyntheticLockupByLockupIDRequest): Promise<_41.SyntheticLockupByLockupIDResponse>;
            accountLockedLongerDuration(request: _41.AccountLockedLongerDurationRequest): Promise<_41.AccountLockedLongerDurationResponse>;
            accountLockedDuration(request: _41.AccountLockedDurationRequest): Promise<_41.AccountLockedDurationResponse>;
            accountLockedLongerDurationNotUnlockingOnly(request: _41.AccountLockedLongerDurationNotUnlockingOnlyRequest): Promise<_41.AccountLockedLongerDurationNotUnlockingOnlyResponse>;
            accountLockedLongerDurationDenom(request: _41.AccountLockedLongerDurationDenomRequest): Promise<_41.AccountLockedLongerDurationDenomResponse>;
            params(request?: _41.QueryParamsRequest): Promise<_41.QueryParamsResponse>;
        };
        registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
        load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
        MessageComposer: {
            encoded: {
                lockTokens(value: _42.MsgLockTokens): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                beginUnlockingAll(value: _42.MsgBeginUnlockingAll): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                beginUnlocking(value: _42.MsgBeginUnlocking): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                extendLockup(value: _42.MsgExtendLockup): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                forceUnlock(value: _42.MsgForceUnlock): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                setRewardReceiverAddress(value: _42.MsgSetRewardReceiverAddress): {
                    typeUrl: string;
                    value: Uint8Array;
                };
            };
            withTypeUrl: {
                lockTokens(value: _42.MsgLockTokens): {
                    typeUrl: string;
                    value: _42.MsgLockTokens;
                };
                beginUnlockingAll(value: _42.MsgBeginUnlockingAll): {
                    typeUrl: string;
                    value: _42.MsgBeginUnlockingAll;
                };
                beginUnlocking(value: _42.MsgBeginUnlocking): {
                    typeUrl: string;
                    value: _42.MsgBeginUnlocking;
                };
                extendLockup(value: _42.MsgExtendLockup): {
                    typeUrl: string;
                    value: _42.MsgExtendLockup;
                };
                forceUnlock(value: _42.MsgForceUnlock): {
                    typeUrl: string;
                    value: _42.MsgForceUnlock;
                };
                setRewardReceiverAddress(value: _42.MsgSetRewardReceiverAddress): {
                    typeUrl: string;
                    value: _42.MsgSetRewardReceiverAddress;
                };
            };
            fromJSON: {
                lockTokens(value: any): {
                    typeUrl: string;
                    value: _42.MsgLockTokens;
                };
                beginUnlockingAll(value: any): {
                    typeUrl: string;
                    value: _42.MsgBeginUnlockingAll;
                };
                beginUnlocking(value: any): {
                    typeUrl: string;
                    value: _42.MsgBeginUnlocking;
                };
                extendLockup(value: any): {
                    typeUrl: string;
                    value: _42.MsgExtendLockup;
                };
                forceUnlock(value: any): {
                    typeUrl: string;
                    value: _42.MsgForceUnlock;
                };
                setRewardReceiverAddress(value: any): {
                    typeUrl: string;
                    value: _42.MsgSetRewardReceiverAddress;
                };
            };
            fromPartial: {
                lockTokens(value: _42.MsgLockTokens): {
                    typeUrl: string;
                    value: _42.MsgLockTokens;
                };
                beginUnlockingAll(value: _42.MsgBeginUnlockingAll): {
                    typeUrl: string;
                    value: _42.MsgBeginUnlockingAll;
                };
                beginUnlocking(value: _42.MsgBeginUnlocking): {
                    typeUrl: string;
                    value: _42.MsgBeginUnlocking;
                };
                extendLockup(value: _42.MsgExtendLockup): {
                    typeUrl: string;
                    value: _42.MsgExtendLockup;
                };
                forceUnlock(value: _42.MsgForceUnlock): {
                    typeUrl: string;
                    value: _42.MsgForceUnlock;
                };
                setRewardReceiverAddress(value: _42.MsgSetRewardReceiverAddress): {
                    typeUrl: string;
                    value: _42.MsgSetRewardReceiverAddress;
                };
            };
        };
        AminoConverter: {
            "/osmosis.lockup.MsgLockTokens": {
                aminoType: string;
                toAmino: ({ owner, duration, coins }: _42.MsgLockTokens) => {
                    owner: string;
                    duration: {
                        seconds: string;
                        nanos: number;
                    };
                    coins: {
                        denom: string;
                        amount: string;
                    }[];
                };
                fromAmino: ({ owner, duration, coins }: {
                    owner: string;
                    duration: {
                        seconds: string;
                        nanos: number;
                    };
                    coins: {
                        denom: string;
                        amount: string;
                    }[];
                }) => _42.MsgLockTokens;
            };
            "/osmosis.lockup.MsgBeginUnlockingAll": {
                aminoType: string;
                toAmino: ({ owner }: _42.MsgBeginUnlockingAll) => {
                    owner: string;
                };
                fromAmino: ({ owner }: {
                    owner: string;
                }) => _42.MsgBeginUnlockingAll;
            };
            "/osmosis.lockup.MsgBeginUnlocking": {
                aminoType: string;
                toAmino: ({ owner, ID, coins }: _42.MsgBeginUnlocking) => {
                    owner: string;
                    ID: string;
                    coins: {
                        denom: string;
                        amount: string;
                    }[];
                };
                fromAmino: ({ owner, ID, coins }: {
                    owner: string;
                    ID: string;
                    coins: {
                        denom: string;
                        amount: string;
                    }[];
                }) => _42.MsgBeginUnlocking;
            };
            "/osmosis.lockup.MsgExtendLockup": {
                aminoType: string;
                toAmino: ({ owner, ID, duration }: _42.MsgExtendLockup) => {
                    owner: string;
                    ID: string;
                    duration: {
                        seconds: string;
                        nanos: number;
                    };
                };
                fromAmino: ({ owner, ID, duration }: {
                    owner: string;
                    ID: string;
                    duration: {
                        seconds: string;
                        nanos: number;
                    };
                }) => _42.MsgExtendLockup;
            };
            "/osmosis.lockup.MsgForceUnlock": {
                aminoType: string;
                toAmino: ({ owner, ID, coins }: _42.MsgForceUnlock) => {
                    owner: string;
                    ID: string;
                    coins: {
                        denom: string;
                        amount: string;
                    }[];
                };
                fromAmino: ({ owner, ID, coins }: {
                    owner: string;
                    ID: string;
                    coins: {
                        denom: string;
                        amount: string;
                    }[];
                }) => _42.MsgForceUnlock;
            };
            "/osmosis.lockup.MsgSetRewardReceiverAddress": {
                aminoType: string;
                toAmino: ({ owner, lockID, rewardReceiver }: _42.MsgSetRewardReceiverAddress) => {
                    owner: string;
                    lockID: string;
                    reward_receiver: string;
                };
                fromAmino: ({ owner, lockID, reward_receiver }: {
                    owner: string;
                    lockID: string;
                    reward_receiver: string;
                }) => _42.MsgSetRewardReceiverAddress;
            };
        };
        MsgLockTokens: {
            encode(message: _42.MsgLockTokens, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _42.MsgLockTokens;
            fromPartial(object: Partial<_42.MsgLockTokens>): _42.MsgLockTokens;
        };
        MsgLockTokensResponse: {
            encode(message: _42.MsgLockTokensResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _42.MsgLockTokensResponse;
            fromPartial(object: Partial<_42.MsgLockTokensResponse>): _42.MsgLockTokensResponse;
        };
        MsgBeginUnlockingAll: {
            encode(message: _42.MsgBeginUnlockingAll, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _42.MsgBeginUnlockingAll;
            fromPartial(object: Partial<_42.MsgBeginUnlockingAll>): _42.MsgBeginUnlockingAll;
        };
        MsgBeginUnlockingAllResponse: {
            encode(message: _42.MsgBeginUnlockingAllResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _42.MsgBeginUnlockingAllResponse;
            fromPartial(object: Partial<_42.MsgBeginUnlockingAllResponse>): _42.MsgBeginUnlockingAllResponse;
        };
        MsgBeginUnlocking: {
            encode(message: _42.MsgBeginUnlocking, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _42.MsgBeginUnlocking;
            fromPartial(object: Partial<_42.MsgBeginUnlocking>): _42.MsgBeginUnlocking;
        };
        MsgBeginUnlockingResponse: {
            encode(message: _42.MsgBeginUnlockingResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _42.MsgBeginUnlockingResponse;
            fromPartial(object: Partial<_42.MsgBeginUnlockingResponse>): _42.MsgBeginUnlockingResponse;
        };
        MsgExtendLockup: {
            encode(message: _42.MsgExtendLockup, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _42.MsgExtendLockup;
            fromPartial(object: Partial<_42.MsgExtendLockup>): _42.MsgExtendLockup;
        };
        MsgExtendLockupResponse: {
            encode(message: _42.MsgExtendLockupResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _42.MsgExtendLockupResponse;
            fromPartial(object: Partial<_42.MsgExtendLockupResponse>): _42.MsgExtendLockupResponse;
        };
        MsgForceUnlock: {
            encode(message: _42.MsgForceUnlock, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _42.MsgForceUnlock;
            fromPartial(object: Partial<_42.MsgForceUnlock>): _42.MsgForceUnlock;
        };
        MsgForceUnlockResponse: {
            encode(message: _42.MsgForceUnlockResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _42.MsgForceUnlockResponse;
            fromPartial(object: Partial<_42.MsgForceUnlockResponse>): _42.MsgForceUnlockResponse;
        };
        MsgSetRewardReceiverAddress: {
            encode(message: _42.MsgSetRewardReceiverAddress, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _42.MsgSetRewardReceiverAddress;
            fromPartial(object: Partial<_42.MsgSetRewardReceiverAddress>): _42.MsgSetRewardReceiverAddress;
        };
        MsgSetRewardReceiverAddressResponse: {
            encode(message: _42.MsgSetRewardReceiverAddressResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _42.MsgSetRewardReceiverAddressResponse;
            fromPartial(object: Partial<_42.MsgSetRewardReceiverAddressResponse>): _42.MsgSetRewardReceiverAddressResponse;
        };
        ModuleBalanceRequest: {
            encode(_: _41.ModuleBalanceRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(_: any): _41.ModuleBalanceRequest;
            fromPartial(_: Partial<_41.ModuleBalanceRequest>): _41.ModuleBalanceRequest;
        };
        ModuleBalanceResponse: {
            encode(message: _41.ModuleBalanceResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _41.ModuleBalanceResponse;
            fromPartial(object: Partial<_41.ModuleBalanceResponse>): _41.ModuleBalanceResponse;
        };
        ModuleLockedAmountRequest: {
            encode(_: _41.ModuleLockedAmountRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(_: any): _41.ModuleLockedAmountRequest;
            fromPartial(_: Partial<_41.ModuleLockedAmountRequest>): _41.ModuleLockedAmountRequest;
        };
        ModuleLockedAmountResponse: {
            encode(message: _41.ModuleLockedAmountResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _41.ModuleLockedAmountResponse;
            fromPartial(object: Partial<_41.ModuleLockedAmountResponse>): _41.ModuleLockedAmountResponse;
        };
        AccountUnlockableCoinsRequest: {
            encode(message: _41.AccountUnlockableCoinsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _41.AccountUnlockableCoinsRequest;
            fromPartial(object: Partial<_41.AccountUnlockableCoinsRequest>): _41.AccountUnlockableCoinsRequest;
        };
        AccountUnlockableCoinsResponse: {
            encode(message: _41.AccountUnlockableCoinsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _41.AccountUnlockableCoinsResponse;
            fromPartial(object: Partial<_41.AccountUnlockableCoinsResponse>): _41.AccountUnlockableCoinsResponse;
        };
        AccountUnlockingCoinsRequest: {
            encode(message: _41.AccountUnlockingCoinsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _41.AccountUnlockingCoinsRequest;
            fromPartial(object: Partial<_41.AccountUnlockingCoinsRequest>): _41.AccountUnlockingCoinsRequest;
        };
        AccountUnlockingCoinsResponse: {
            encode(message: _41.AccountUnlockingCoinsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _41.AccountUnlockingCoinsResponse;
            fromPartial(object: Partial<_41.AccountUnlockingCoinsResponse>): _41.AccountUnlockingCoinsResponse;
        };
        AccountLockedCoinsRequest: {
            encode(message: _41.AccountLockedCoinsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _41.AccountLockedCoinsRequest;
            fromPartial(object: Partial<_41.AccountLockedCoinsRequest>): _41.AccountLockedCoinsRequest;
        };
        AccountLockedCoinsResponse: {
            encode(message: _41.AccountLockedCoinsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _41.AccountLockedCoinsResponse;
            fromPartial(object: Partial<_41.AccountLockedCoinsResponse>): _41.AccountLockedCoinsResponse;
        };
        AccountLockedPastTimeRequest: {
            encode(message: _41.AccountLockedPastTimeRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _41.AccountLockedPastTimeRequest;
            fromPartial(object: Partial<_41.AccountLockedPastTimeRequest>): _41.AccountLockedPastTimeRequest;
        };
        AccountLockedPastTimeResponse: {
            encode(message: _41.AccountLockedPastTimeResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _41.AccountLockedPastTimeResponse;
            fromPartial(object: Partial<_41.AccountLockedPastTimeResponse>): _41.AccountLockedPastTimeResponse;
        };
        AccountLockedPastTimeNotUnlockingOnlyRequest: {
            encode(message: _41.AccountLockedPastTimeNotUnlockingOnlyRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _41.AccountLockedPastTimeNotUnlockingOnlyRequest;
            fromPartial(object: Partial<_41.AccountLockedPastTimeNotUnlockingOnlyRequest>): _41.AccountLockedPastTimeNotUnlockingOnlyRequest;
        };
        AccountLockedPastTimeNotUnlockingOnlyResponse: {
            encode(message: _41.AccountLockedPastTimeNotUnlockingOnlyResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _41.AccountLockedPastTimeNotUnlockingOnlyResponse;
            fromPartial(object: Partial<_41.AccountLockedPastTimeNotUnlockingOnlyResponse>): _41.AccountLockedPastTimeNotUnlockingOnlyResponse;
        };
        AccountUnlockedBeforeTimeRequest: {
            encode(message: _41.AccountUnlockedBeforeTimeRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _41.AccountUnlockedBeforeTimeRequest;
            fromPartial(object: Partial<_41.AccountUnlockedBeforeTimeRequest>): _41.AccountUnlockedBeforeTimeRequest;
        };
        AccountUnlockedBeforeTimeResponse: {
            encode(message: _41.AccountUnlockedBeforeTimeResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _41.AccountUnlockedBeforeTimeResponse;
            fromPartial(object: Partial<_41.AccountUnlockedBeforeTimeResponse>): _41.AccountUnlockedBeforeTimeResponse;
        };
        AccountLockedPastTimeDenomRequest: {
            encode(message: _41.AccountLockedPastTimeDenomRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _41.AccountLockedPastTimeDenomRequest;
            fromPartial(object: Partial<_41.AccountLockedPastTimeDenomRequest>): _41.AccountLockedPastTimeDenomRequest;
        };
        AccountLockedPastTimeDenomResponse: {
            encode(message: _41.AccountLockedPastTimeDenomResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _41.AccountLockedPastTimeDenomResponse;
            fromPartial(object: Partial<_41.AccountLockedPastTimeDenomResponse>): _41.AccountLockedPastTimeDenomResponse;
        };
        LockedDenomRequest: {
            encode(message: _41.LockedDenomRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _41.LockedDenomRequest;
            fromPartial(object: Partial<_41.LockedDenomRequest>): _41.LockedDenomRequest;
        };
        LockedDenomResponse: {
            encode(message: _41.LockedDenomResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _41.LockedDenomResponse;
            fromPartial(object: Partial<_41.LockedDenomResponse>): _41.LockedDenomResponse;
        };
        LockedRequest: {
            encode(message: _41.LockedRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _41.LockedRequest;
            fromPartial(object: Partial<_41.LockedRequest>): _41.LockedRequest;
        };
        LockedResponse: {
            encode(message: _41.LockedResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _41.LockedResponse;
            fromPartial(object: Partial<_41.LockedResponse>): _41.LockedResponse;
        };
        LockRewardReceiverRequest: {
            encode(message: _41.LockRewardReceiverRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _41.LockRewardReceiverRequest;
            fromPartial(object: Partial<_41.LockRewardReceiverRequest>): _41.LockRewardReceiverRequest;
        };
        LockRewardReceiverResponse: {
            encode(message: _41.LockRewardReceiverResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _41.LockRewardReceiverResponse;
            fromPartial(object: Partial<_41.LockRewardReceiverResponse>): _41.LockRewardReceiverResponse;
        };
        NextLockIDRequest: {
            encode(_: _41.NextLockIDRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(_: any): _41.NextLockIDRequest;
            fromPartial(_: Partial<_41.NextLockIDRequest>): _41.NextLockIDRequest;
        };
        NextLockIDResponse: {
            encode(message: _41.NextLockIDResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _41.NextLockIDResponse;
            fromPartial(object: Partial<_41.NextLockIDResponse>): _41.NextLockIDResponse;
        };
        SyntheticLockupsByLockupIDRequest: {
            encode(message: _41.SyntheticLockupsByLockupIDRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _41.SyntheticLockupsByLockupIDRequest;
            fromPartial(object: Partial<_41.SyntheticLockupsByLockupIDRequest>): _41.SyntheticLockupsByLockupIDRequest;
        };
        SyntheticLockupsByLockupIDResponse: {
            encode(message: _41.SyntheticLockupsByLockupIDResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _41.SyntheticLockupsByLockupIDResponse;
            fromPartial(object: Partial<_41.SyntheticLockupsByLockupIDResponse>): _41.SyntheticLockupsByLockupIDResponse;
        };
        SyntheticLockupByLockupIDRequest: {
            encode(message: _41.SyntheticLockupByLockupIDRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _41.SyntheticLockupByLockupIDRequest;
            fromPartial(object: Partial<_41.SyntheticLockupByLockupIDRequest>): _41.SyntheticLockupByLockupIDRequest;
        };
        SyntheticLockupByLockupIDResponse: {
            encode(message: _41.SyntheticLockupByLockupIDResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _41.SyntheticLockupByLockupIDResponse;
            fromPartial(object: Partial<_41.SyntheticLockupByLockupIDResponse>): _41.SyntheticLockupByLockupIDResponse;
        };
        AccountLockedLongerDurationRequest: {
            encode(message: _41.AccountLockedLongerDurationRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _41.AccountLockedLongerDurationRequest;
            fromPartial(object: Partial<_41.AccountLockedLongerDurationRequest>): _41.AccountLockedLongerDurationRequest;
        };
        AccountLockedLongerDurationResponse: {
            encode(message: _41.AccountLockedLongerDurationResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _41.AccountLockedLongerDurationResponse;
            fromPartial(object: Partial<_41.AccountLockedLongerDurationResponse>): _41.AccountLockedLongerDurationResponse;
        };
        AccountLockedDurationRequest: {
            encode(message: _41.AccountLockedDurationRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _41.AccountLockedDurationRequest;
            fromPartial(object: Partial<_41.AccountLockedDurationRequest>): _41.AccountLockedDurationRequest;
        };
        AccountLockedDurationResponse: {
            encode(message: _41.AccountLockedDurationResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _41.AccountLockedDurationResponse;
            fromPartial(object: Partial<_41.AccountLockedDurationResponse>): _41.AccountLockedDurationResponse;
        };
        AccountLockedLongerDurationNotUnlockingOnlyRequest: {
            encode(message: _41.AccountLockedLongerDurationNotUnlockingOnlyRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _41.AccountLockedLongerDurationNotUnlockingOnlyRequest;
            fromPartial(object: Partial<_41.AccountLockedLongerDurationNotUnlockingOnlyRequest>): _41.AccountLockedLongerDurationNotUnlockingOnlyRequest;
        };
        AccountLockedLongerDurationNotUnlockingOnlyResponse: {
            encode(message: _41.AccountLockedLongerDurationNotUnlockingOnlyResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _41.AccountLockedLongerDurationNotUnlockingOnlyResponse;
            fromPartial(object: Partial<_41.AccountLockedLongerDurationNotUnlockingOnlyResponse>): _41.AccountLockedLongerDurationNotUnlockingOnlyResponse;
        };
        AccountLockedLongerDurationDenomRequest: {
            encode(message: _41.AccountLockedLongerDurationDenomRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _41.AccountLockedLongerDurationDenomRequest;
            fromPartial(object: Partial<_41.AccountLockedLongerDurationDenomRequest>): _41.AccountLockedLongerDurationDenomRequest;
        };
        AccountLockedLongerDurationDenomResponse: {
            encode(message: _41.AccountLockedLongerDurationDenomResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _41.AccountLockedLongerDurationDenomResponse;
            fromPartial(object: Partial<_41.AccountLockedLongerDurationDenomResponse>): _41.AccountLockedLongerDurationDenomResponse;
        };
        QueryParamsRequest: {
            encode(_: _41.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(_: any): _41.QueryParamsRequest;
            fromPartial(_: Partial<_41.QueryParamsRequest>): _41.QueryParamsRequest;
        };
        QueryParamsResponse: {
            encode(message: _41.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _41.QueryParamsResponse;
            fromPartial(object: Partial<_41.QueryParamsResponse>): _41.QueryParamsResponse;
        };
        Params: {
            encode(message: _40.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _40.Params;
            fromPartial(object: Partial<_40.Params>): _40.Params;
        };
        lockQueryTypeFromJSON(object: any): _39.LockQueryType;
        lockQueryTypeToJSON(object: _39.LockQueryType): string;
        LockQueryType: typeof _39.LockQueryType;
        LockQueryTypeSDKType: typeof _39.LockQueryType;
        PeriodLock: {
            encode(message: _39.PeriodLock, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _39.PeriodLock;
            fromPartial(object: Partial<_39.PeriodLock>): _39.PeriodLock;
        };
        QueryCondition: {
            encode(message: _39.QueryCondition, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _39.QueryCondition;
            fromPartial(object: Partial<_39.QueryCondition>): _39.QueryCondition;
        };
        SyntheticLock: {
            encode(message: _39.SyntheticLock, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _39.SyntheticLock;
            fromPartial(object: Partial<_39.SyntheticLock>): _39.SyntheticLock;
        };
        GenesisState: {
            encode(message: _38.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _38.GenesisState;
            fromPartial(object: Partial<_38.GenesisState>): _38.GenesisState;
        };
    };
    namespace mint {
        const v1beta1: {
            QueryClientImpl: typeof _217.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                params(request?: _45.QueryParamsRequest): Promise<_45.QueryParamsResponse>;
                epochProvisions(request?: _45.QueryEpochProvisionsRequest): Promise<_45.QueryEpochProvisionsResponse>;
            };
            QueryParamsRequest: {
                encode(_: _45.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _45.QueryParamsRequest;
                fromPartial(_: Partial<_45.QueryParamsRequest>): _45.QueryParamsRequest;
            };
            QueryParamsResponse: {
                encode(message: _45.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _45.QueryParamsResponse;
                fromPartial(object: Partial<_45.QueryParamsResponse>): _45.QueryParamsResponse;
            };
            QueryEpochProvisionsRequest: {
                encode(_: _45.QueryEpochProvisionsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _45.QueryEpochProvisionsRequest;
                fromPartial(_: Partial<_45.QueryEpochProvisionsRequest>): _45.QueryEpochProvisionsRequest;
            };
            QueryEpochProvisionsResponse: {
                encode(message: _45.QueryEpochProvisionsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _45.QueryEpochProvisionsResponse;
                fromPartial(object: Partial<_45.QueryEpochProvisionsResponse>): _45.QueryEpochProvisionsResponse;
            };
            Minter: {
                encode(message: _44.Minter, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _44.Minter;
                fromPartial(object: Partial<_44.Minter>): _44.Minter;
            };
            WeightedAddress: {
                encode(message: _44.WeightedAddress, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _44.WeightedAddress;
                fromPartial(object: Partial<_44.WeightedAddress>): _44.WeightedAddress;
            };
            DistributionProportions: {
                encode(message: _44.DistributionProportions, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _44.DistributionProportions;
                fromPartial(object: Partial<_44.DistributionProportions>): _44.DistributionProportions;
            };
            Params: {
                encode(message: _44.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _44.Params;
                fromPartial(object: Partial<_44.Params>): _44.Params;
            };
            GenesisState: {
                encode(message: _43.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _43.GenesisState;
                fromPartial(object: Partial<_43.GenesisState>): _43.GenesisState;
            };
        };
    }
    namespace poolincentives {
        const v1beta1: {
            QueryClientImpl: typeof _218.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                gaugeIds(request: _49.QueryGaugeIdsRequest): Promise<_49.QueryGaugeIdsResponse>;
                distrInfo(request?: _49.QueryDistrInfoRequest): Promise<_49.QueryDistrInfoResponse>;
                params(request?: _49.QueryParamsRequest): Promise<_49.QueryParamsResponse>;
                lockableDurations(request?: _49.QueryLockableDurationsRequest): Promise<_49.QueryLockableDurationsResponse>;
                incentivizedPools(request?: _49.QueryIncentivizedPoolsRequest): Promise<_49.QueryIncentivizedPoolsResponse>;
                externalIncentiveGauges(request?: _49.QueryExternalIncentiveGaugesRequest): Promise<_49.QueryExternalIncentiveGaugesResponse>;
            };
            MigrationRecords: {
                encode(message: _50.MigrationRecords, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _50.MigrationRecords;
                fromPartial(object: Partial<_50.MigrationRecords>): _50.MigrationRecords;
            };
            BalancerToConcentratedPoolLink: {
                encode(message: _50.BalancerToConcentratedPoolLink, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _50.BalancerToConcentratedPoolLink;
                fromPartial(object: Partial<_50.BalancerToConcentratedPoolLink>): _50.BalancerToConcentratedPoolLink;
            };
            QueryGaugeIdsRequest: {
                encode(message: _49.QueryGaugeIdsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _49.QueryGaugeIdsRequest;
                fromPartial(object: Partial<_49.QueryGaugeIdsRequest>): _49.QueryGaugeIdsRequest;
            };
            QueryGaugeIdsResponse: {
                encode(message: _49.QueryGaugeIdsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _49.QueryGaugeIdsResponse;
                fromPartial(object: Partial<_49.QueryGaugeIdsResponse>): _49.QueryGaugeIdsResponse;
            };
            QueryGaugeIdsResponse_GaugeIdWithDuration: {
                encode(message: _49.QueryGaugeIdsResponse_GaugeIdWithDuration, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _49.QueryGaugeIdsResponse_GaugeIdWithDuration;
                fromPartial(object: Partial<_49.QueryGaugeIdsResponse_GaugeIdWithDuration>): _49.QueryGaugeIdsResponse_GaugeIdWithDuration;
            };
            QueryDistrInfoRequest: {
                encode(_: _49.QueryDistrInfoRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _49.QueryDistrInfoRequest;
                fromPartial(_: Partial<_49.QueryDistrInfoRequest>): _49.QueryDistrInfoRequest;
            };
            QueryDistrInfoResponse: {
                encode(message: _49.QueryDistrInfoResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _49.QueryDistrInfoResponse;
                fromPartial(object: Partial<_49.QueryDistrInfoResponse>): _49.QueryDistrInfoResponse;
            };
            QueryParamsRequest: {
                encode(_: _49.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _49.QueryParamsRequest;
                fromPartial(_: Partial<_49.QueryParamsRequest>): _49.QueryParamsRequest;
            };
            QueryParamsResponse: {
                encode(message: _49.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _49.QueryParamsResponse;
                fromPartial(object: Partial<_49.QueryParamsResponse>): _49.QueryParamsResponse;
            };
            QueryLockableDurationsRequest: {
                encode(_: _49.QueryLockableDurationsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _49.QueryLockableDurationsRequest;
                fromPartial(_: Partial<_49.QueryLockableDurationsRequest>): _49.QueryLockableDurationsRequest;
            };
            QueryLockableDurationsResponse: {
                encode(message: _49.QueryLockableDurationsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _49.QueryLockableDurationsResponse;
                fromPartial(object: Partial<_49.QueryLockableDurationsResponse>): _49.QueryLockableDurationsResponse;
            };
            QueryIncentivizedPoolsRequest: {
                encode(_: _49.QueryIncentivizedPoolsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _49.QueryIncentivizedPoolsRequest;
                fromPartial(_: Partial<_49.QueryIncentivizedPoolsRequest>): _49.QueryIncentivizedPoolsRequest;
            };
            IncentivizedPool: {
                encode(message: _49.IncentivizedPool, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _49.IncentivizedPool;
                fromPartial(object: Partial<_49.IncentivizedPool>): _49.IncentivizedPool;
            };
            QueryIncentivizedPoolsResponse: {
                encode(message: _49.QueryIncentivizedPoolsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _49.QueryIncentivizedPoolsResponse;
                fromPartial(object: Partial<_49.QueryIncentivizedPoolsResponse>): _49.QueryIncentivizedPoolsResponse;
            };
            QueryExternalIncentiveGaugesRequest: {
                encode(_: _49.QueryExternalIncentiveGaugesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _49.QueryExternalIncentiveGaugesRequest;
                fromPartial(_: Partial<_49.QueryExternalIncentiveGaugesRequest>): _49.QueryExternalIncentiveGaugesRequest;
            };
            QueryExternalIncentiveGaugesResponse: {
                encode(message: _49.QueryExternalIncentiveGaugesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _49.QueryExternalIncentiveGaugesResponse;
                fromPartial(object: Partial<_49.QueryExternalIncentiveGaugesResponse>): _49.QueryExternalIncentiveGaugesResponse;
            };
            Params: {
                encode(message: _48.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _48.Params;
                fromPartial(object: Partial<_48.Params>): _48.Params;
            };
            LockableDurationsInfo: {
                encode(message: _48.LockableDurationsInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _48.LockableDurationsInfo;
                fromPartial(object: Partial<_48.LockableDurationsInfo>): _48.LockableDurationsInfo;
            };
            DistrInfo: {
                encode(message: _48.DistrInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _48.DistrInfo;
                fromPartial(object: Partial<_48.DistrInfo>): _48.DistrInfo;
            };
            DistrRecord: {
                encode(message: _48.DistrRecord, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _48.DistrRecord;
                fromPartial(object: Partial<_48.DistrRecord>): _48.DistrRecord;
            };
            PoolToGauge: {
                encode(message: _48.PoolToGauge, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _48.PoolToGauge;
                fromPartial(object: Partial<_48.PoolToGauge>): _48.PoolToGauge;
            };
            PoolToGauges: {
                encode(message: _48.PoolToGauges, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _48.PoolToGauges;
                fromPartial(object: Partial<_48.PoolToGauges>): _48.PoolToGauges;
            };
            ReplacePoolIncentivesProposal: {
                encode(message: _47.ReplacePoolIncentivesProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _47.ReplacePoolIncentivesProposal;
                fromPartial(object: Partial<_47.ReplacePoolIncentivesProposal>): _47.ReplacePoolIncentivesProposal;
            };
            UpdatePoolIncentivesProposal: {
                encode(message: _47.UpdatePoolIncentivesProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _47.UpdatePoolIncentivesProposal;
                fromPartial(object: Partial<_47.UpdatePoolIncentivesProposal>): _47.UpdatePoolIncentivesProposal;
            };
            GenesisState: {
                encode(message: _46.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _46.GenesisState;
                fromPartial(object: Partial<_46.GenesisState>): _46.GenesisState;
            };
        };
    }
    namespace poolmanager {
        const v1beta1: {
            MsgClientImpl: typeof _233.MsgClientImpl;
            QueryClientImpl: typeof _219.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                params(request?: _53.ParamsRequest): Promise<_53.ParamsResponse>;
                estimateSwapExactAmountIn(request: _53.EstimateSwapExactAmountInRequest): Promise<_53.EstimateSwapExactAmountInResponse>;
                estimateSinglePoolSwapExactAmountIn(request: _53.EstimateSinglePoolSwapExactAmountInRequest): Promise<_53.EstimateSwapExactAmountInResponse>;
                estimateSwapExactAmountOut(request: _53.EstimateSwapExactAmountOutRequest): Promise<_53.EstimateSwapExactAmountOutResponse>;
                estimateSinglePoolSwapExactAmountOut(request: _53.EstimateSinglePoolSwapExactAmountOutRequest): Promise<_53.EstimateSwapExactAmountOutResponse>;
                numPools(request?: _53.NumPoolsRequest): Promise<_53.NumPoolsResponse>;
                pool(request: _53.PoolRequest): Promise<_53.PoolResponse>;
                allPools(request?: _53.AllPoolsRequest): Promise<_53.AllPoolsResponse>;
                spotPrice(request: _53.SpotPriceRequest): Promise<_53.SpotPriceResponse>;
                totalPoolLiquidity(request: _53.TotalPoolLiquidityRequest): Promise<_53.TotalPoolLiquidityResponse>;
                totalLiquidity(request?: _53.TotalLiquidityRequest): Promise<_53.TotalLiquidityResponse>;
            };
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    swapExactAmountIn(value: _55.MsgSwapExactAmountIn): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    swapExactAmountOut(value: _55.MsgSwapExactAmountOut): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    splitRouteSwapExactAmountIn(value: _55.MsgSplitRouteSwapExactAmountIn): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    splitRouteSwapExactAmountOut(value: _55.MsgSplitRouteSwapExactAmountOut): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    swapExactAmountIn(value: _55.MsgSwapExactAmountIn): {
                        typeUrl: string;
                        value: _55.MsgSwapExactAmountIn;
                    };
                    swapExactAmountOut(value: _55.MsgSwapExactAmountOut): {
                        typeUrl: string;
                        value: _55.MsgSwapExactAmountOut;
                    };
                    splitRouteSwapExactAmountIn(value: _55.MsgSplitRouteSwapExactAmountIn): {
                        typeUrl: string;
                        value: _55.MsgSplitRouteSwapExactAmountIn;
                    };
                    splitRouteSwapExactAmountOut(value: _55.MsgSplitRouteSwapExactAmountOut): {
                        typeUrl: string;
                        value: _55.MsgSplitRouteSwapExactAmountOut;
                    };
                };
                fromJSON: {
                    swapExactAmountIn(value: any): {
                        typeUrl: string;
                        value: _55.MsgSwapExactAmountIn;
                    };
                    swapExactAmountOut(value: any): {
                        typeUrl: string;
                        value: _55.MsgSwapExactAmountOut;
                    };
                    splitRouteSwapExactAmountIn(value: any): {
                        typeUrl: string;
                        value: _55.MsgSplitRouteSwapExactAmountIn;
                    };
                    splitRouteSwapExactAmountOut(value: any): {
                        typeUrl: string;
                        value: _55.MsgSplitRouteSwapExactAmountOut;
                    };
                };
                fromPartial: {
                    swapExactAmountIn(value: _55.MsgSwapExactAmountIn): {
                        typeUrl: string;
                        value: _55.MsgSwapExactAmountIn;
                    };
                    swapExactAmountOut(value: _55.MsgSwapExactAmountOut): {
                        typeUrl: string;
                        value: _55.MsgSwapExactAmountOut;
                    };
                    splitRouteSwapExactAmountIn(value: _55.MsgSplitRouteSwapExactAmountIn): {
                        typeUrl: string;
                        value: _55.MsgSplitRouteSwapExactAmountIn;
                    };
                    splitRouteSwapExactAmountOut(value: _55.MsgSplitRouteSwapExactAmountOut): {
                        typeUrl: string;
                        value: _55.MsgSplitRouteSwapExactAmountOut;
                    };
                };
            };
            AminoConverter: {
                "/osmosis.poolmanager.v1beta1.MsgSwapExactAmountIn": {
                    aminoType: string;
                    toAmino: ({ sender, routes, tokenIn, tokenOutMinAmount }: _55.MsgSwapExactAmountIn) => {
                        sender: string;
                        routes: {
                            pool_id: string;
                            token_out_denom: string;
                        }[];
                        token_in: {
                            denom: string;
                            amount: string;
                        };
                        token_out_min_amount: string;
                    };
                    fromAmino: ({ sender, routes, token_in, token_out_min_amount }: {
                        sender: string;
                        routes: {
                            pool_id: string;
                            token_out_denom: string;
                        }[];
                        token_in: {
                            denom: string;
                            amount: string;
                        };
                        token_out_min_amount: string;
                    }) => _55.MsgSwapExactAmountIn;
                };
                "/osmosis.poolmanager.v1beta1.MsgSwapExactAmountOut": {
                    aminoType: string;
                    toAmino: ({ sender, routes, tokenInMaxAmount, tokenOut }: _55.MsgSwapExactAmountOut) => {
                        sender: string;
                        routes: {
                            pool_id: string;
                            token_in_denom: string;
                        }[];
                        token_in_max_amount: string;
                        token_out: {
                            denom: string;
                            amount: string;
                        };
                    };
                    fromAmino: ({ sender, routes, token_in_max_amount, token_out }: {
                        sender: string;
                        routes: {
                            pool_id: string;
                            token_in_denom: string;
                        }[];
                        token_in_max_amount: string;
                        token_out: {
                            denom: string;
                            amount: string;
                        };
                    }) => _55.MsgSwapExactAmountOut;
                };
                "/osmosis.poolmanager.v1beta1.MsgSplitRouteSwapExactAmountIn": {
                    aminoType: string;
                    toAmino: ({ sender, routes, tokenInDenom, tokenOutMinAmount }: _55.MsgSplitRouteSwapExactAmountIn) => {
                        sender: string;
                        routes: {
                            pools: {
                                pool_id: string;
                                token_out_denom: string;
                            }[];
                            token_in_amount: string;
                        }[];
                        token_in_denom: string;
                        token_out_min_amount: string;
                    };
                    fromAmino: ({ sender, routes, token_in_denom, token_out_min_amount }: {
                        sender: string;
                        routes: {
                            pools: {
                                pool_id: string;
                                token_out_denom: string;
                            }[];
                            token_in_amount: string;
                        }[];
                        token_in_denom: string;
                        token_out_min_amount: string;
                    }) => _55.MsgSplitRouteSwapExactAmountIn;
                };
                "/osmosis.poolmanager.v1beta1.MsgSplitRouteSwapExactAmountOut": {
                    aminoType: string;
                    toAmino: ({ sender, routes, tokenOutDenom, tokenInMaxAmount }: _55.MsgSplitRouteSwapExactAmountOut) => {
                        sender: string;
                        routes: {
                            pools: {
                                pool_id: string;
                                token_in_denom: string;
                            }[];
                            token_out_amount: string;
                        }[];
                        token_out_denom: string;
                        token_in_max_amount: string;
                    };
                    fromAmino: ({ sender, routes, token_out_denom, token_in_max_amount }: {
                        sender: string;
                        routes: {
                            pools: {
                                pool_id: string;
                                token_in_denom: string;
                            }[];
                            token_out_amount: string;
                        }[];
                        token_out_denom: string;
                        token_in_max_amount: string;
                    }) => _55.MsgSplitRouteSwapExactAmountOut;
                };
            };
            MsgSwapExactAmountIn: {
                encode(message: _55.MsgSwapExactAmountIn, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _55.MsgSwapExactAmountIn;
                fromPartial(object: Partial<_55.MsgSwapExactAmountIn>): _55.MsgSwapExactAmountIn;
            };
            MsgSwapExactAmountInResponse: {
                encode(message: _55.MsgSwapExactAmountInResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _55.MsgSwapExactAmountInResponse;
                fromPartial(object: Partial<_55.MsgSwapExactAmountInResponse>): _55.MsgSwapExactAmountInResponse;
            };
            MsgSplitRouteSwapExactAmountIn: {
                encode(message: _55.MsgSplitRouteSwapExactAmountIn, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _55.MsgSplitRouteSwapExactAmountIn;
                fromPartial(object: Partial<_55.MsgSplitRouteSwapExactAmountIn>): _55.MsgSplitRouteSwapExactAmountIn;
            };
            MsgSplitRouteSwapExactAmountInResponse: {
                encode(message: _55.MsgSplitRouteSwapExactAmountInResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _55.MsgSplitRouteSwapExactAmountInResponse;
                fromPartial(object: Partial<_55.MsgSplitRouteSwapExactAmountInResponse>): _55.MsgSplitRouteSwapExactAmountInResponse;
            };
            MsgSwapExactAmountOut: {
                encode(message: _55.MsgSwapExactAmountOut, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _55.MsgSwapExactAmountOut;
                fromPartial(object: Partial<_55.MsgSwapExactAmountOut>): _55.MsgSwapExactAmountOut;
            };
            MsgSwapExactAmountOutResponse: {
                encode(message: _55.MsgSwapExactAmountOutResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _55.MsgSwapExactAmountOutResponse;
                fromPartial(object: Partial<_55.MsgSwapExactAmountOutResponse>): _55.MsgSwapExactAmountOutResponse;
            };
            MsgSplitRouteSwapExactAmountOut: {
                encode(message: _55.MsgSplitRouteSwapExactAmountOut, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _55.MsgSplitRouteSwapExactAmountOut;
                fromPartial(object: Partial<_55.MsgSplitRouteSwapExactAmountOut>): _55.MsgSplitRouteSwapExactAmountOut;
            };
            MsgSplitRouteSwapExactAmountOutResponse: {
                encode(message: _55.MsgSplitRouteSwapExactAmountOutResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _55.MsgSplitRouteSwapExactAmountOutResponse;
                fromPartial(object: Partial<_55.MsgSplitRouteSwapExactAmountOutResponse>): _55.MsgSplitRouteSwapExactAmountOutResponse;
            };
            SwapAmountInRoute: {
                encode(message: _54.SwapAmountInRoute, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _54.SwapAmountInRoute;
                fromPartial(object: Partial<_54.SwapAmountInRoute>): _54.SwapAmountInRoute;
            };
            SwapAmountOutRoute: {
                encode(message: _54.SwapAmountOutRoute, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _54.SwapAmountOutRoute;
                fromPartial(object: Partial<_54.SwapAmountOutRoute>): _54.SwapAmountOutRoute;
            };
            SwapAmountInSplitRoute: {
                encode(message: _54.SwapAmountInSplitRoute, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _54.SwapAmountInSplitRoute;
                fromPartial(object: Partial<_54.SwapAmountInSplitRoute>): _54.SwapAmountInSplitRoute;
            };
            SwapAmountOutSplitRoute: {
                encode(message: _54.SwapAmountOutSplitRoute, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _54.SwapAmountOutSplitRoute;
                fromPartial(object: Partial<_54.SwapAmountOutSplitRoute>): _54.SwapAmountOutSplitRoute;
            };
            ParamsRequest: {
                encode(_: _53.ParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _53.ParamsRequest;
                fromPartial(_: Partial<_53.ParamsRequest>): _53.ParamsRequest;
            };
            ParamsResponse: {
                encode(message: _53.ParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _53.ParamsResponse;
                fromPartial(object: Partial<_53.ParamsResponse>): _53.ParamsResponse;
            };
            EstimateSwapExactAmountInRequest: {
                encode(message: _53.EstimateSwapExactAmountInRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _53.EstimateSwapExactAmountInRequest;
                fromPartial(object: Partial<_53.EstimateSwapExactAmountInRequest>): _53.EstimateSwapExactAmountInRequest;
            };
            EstimateSinglePoolSwapExactAmountInRequest: {
                encode(message: _53.EstimateSinglePoolSwapExactAmountInRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _53.EstimateSinglePoolSwapExactAmountInRequest;
                fromPartial(object: Partial<_53.EstimateSinglePoolSwapExactAmountInRequest>): _53.EstimateSinglePoolSwapExactAmountInRequest;
            };
            EstimateSwapExactAmountInResponse: {
                encode(message: _53.EstimateSwapExactAmountInResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _53.EstimateSwapExactAmountInResponse;
                fromPartial(object: Partial<_53.EstimateSwapExactAmountInResponse>): _53.EstimateSwapExactAmountInResponse;
            };
            EstimateSwapExactAmountOutRequest: {
                encode(message: _53.EstimateSwapExactAmountOutRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _53.EstimateSwapExactAmountOutRequest;
                fromPartial(object: Partial<_53.EstimateSwapExactAmountOutRequest>): _53.EstimateSwapExactAmountOutRequest;
            };
            EstimateSinglePoolSwapExactAmountOutRequest: {
                encode(message: _53.EstimateSinglePoolSwapExactAmountOutRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _53.EstimateSinglePoolSwapExactAmountOutRequest;
                fromPartial(object: Partial<_53.EstimateSinglePoolSwapExactAmountOutRequest>): _53.EstimateSinglePoolSwapExactAmountOutRequest;
            };
            EstimateSwapExactAmountOutResponse: {
                encode(message: _53.EstimateSwapExactAmountOutResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _53.EstimateSwapExactAmountOutResponse;
                fromPartial(object: Partial<_53.EstimateSwapExactAmountOutResponse>): _53.EstimateSwapExactAmountOutResponse;
            };
            NumPoolsRequest: {
                encode(_: _53.NumPoolsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _53.NumPoolsRequest;
                fromPartial(_: Partial<_53.NumPoolsRequest>): _53.NumPoolsRequest;
            };
            NumPoolsResponse: {
                encode(message: _53.NumPoolsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _53.NumPoolsResponse;
                fromPartial(object: Partial<_53.NumPoolsResponse>): _53.NumPoolsResponse;
            };
            PoolRequest: {
                encode(message: _53.PoolRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _53.PoolRequest;
                fromPartial(object: Partial<_53.PoolRequest>): _53.PoolRequest;
            };
            PoolResponse: {
                encode(message: _53.PoolResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _53.PoolResponse;
                fromPartial(object: Partial<_53.PoolResponse>): _53.PoolResponse;
            };
            AllPoolsRequest: {
                encode(_: _53.AllPoolsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _53.AllPoolsRequest;
                fromPartial(_: Partial<_53.AllPoolsRequest>): _53.AllPoolsRequest;
            };
            AllPoolsResponse: {
                encode(message: _53.AllPoolsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _53.AllPoolsResponse;
                fromPartial(object: Partial<_53.AllPoolsResponse>): _53.AllPoolsResponse;
            };
            SpotPriceRequest: {
                encode(message: _53.SpotPriceRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _53.SpotPriceRequest;
                fromPartial(object: Partial<_53.SpotPriceRequest>): _53.SpotPriceRequest;
            };
            SpotPriceResponse: {
                encode(message: _53.SpotPriceResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _53.SpotPriceResponse;
                fromPartial(object: Partial<_53.SpotPriceResponse>): _53.SpotPriceResponse;
            };
            TotalPoolLiquidityRequest: {
                encode(message: _53.TotalPoolLiquidityRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _53.TotalPoolLiquidityRequest;
                fromPartial(object: Partial<_53.TotalPoolLiquidityRequest>): _53.TotalPoolLiquidityRequest;
            };
            TotalPoolLiquidityResponse: {
                encode(message: _53.TotalPoolLiquidityResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _53.TotalPoolLiquidityResponse;
                fromPartial(object: Partial<_53.TotalPoolLiquidityResponse>): _53.TotalPoolLiquidityResponse;
            };
            TotalLiquidityRequest: {
                encode(_: _53.TotalLiquidityRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _53.TotalLiquidityRequest;
                fromPartial(_: Partial<_53.TotalLiquidityRequest>): _53.TotalLiquidityRequest;
            };
            TotalLiquidityResponse: {
                encode(message: _53.TotalLiquidityResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _53.TotalLiquidityResponse;
                fromPartial(object: Partial<_53.TotalLiquidityResponse>): _53.TotalLiquidityResponse;
            };
            poolTypeFromJSON(object: any): _52.PoolType;
            poolTypeToJSON(object: _52.PoolType): string;
            PoolType: typeof _52.PoolType;
            PoolTypeSDKType: typeof _52.PoolType;
            ModuleRoute: {
                encode(message: _52.ModuleRoute, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _52.ModuleRoute;
                fromPartial(object: Partial<_52.ModuleRoute>): _52.ModuleRoute;
            };
            Params: {
                encode(message: _51.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _51.Params;
                fromPartial(object: Partial<_51.Params>): _51.Params;
            };
            GenesisState: {
                encode(message: _51.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _51.GenesisState;
                fromPartial(object: Partial<_51.GenesisState>): _51.GenesisState;
            };
        };
    }
    namespace protorev {
        const v1beta1: {
            MsgClientImpl: typeof _234.MsgClientImpl;
            QueryClientImpl: typeof _220.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                params(request?: _60.QueryParamsRequest): Promise<_60.QueryParamsResponse>;
                getProtoRevNumberOfTrades(request?: _60.QueryGetProtoRevNumberOfTradesRequest): Promise<_60.QueryGetProtoRevNumberOfTradesResponse>;
                getProtoRevProfitsByDenom(request: _60.QueryGetProtoRevProfitsByDenomRequest): Promise<_60.QueryGetProtoRevProfitsByDenomResponse>;
                getProtoRevAllProfits(request?: _60.QueryGetProtoRevAllProfitsRequest): Promise<_60.QueryGetProtoRevAllProfitsResponse>;
                getProtoRevStatisticsByRoute(request: _60.QueryGetProtoRevStatisticsByRouteRequest): Promise<_60.QueryGetProtoRevStatisticsByRouteResponse>;
                getProtoRevAllRouteStatistics(request?: _60.QueryGetProtoRevAllRouteStatisticsRequest): Promise<_60.QueryGetProtoRevAllRouteStatisticsResponse>;
                getProtoRevTokenPairArbRoutes(request?: _60.QueryGetProtoRevTokenPairArbRoutesRequest): Promise<_60.QueryGetProtoRevTokenPairArbRoutesResponse>;
                getProtoRevAdminAccount(request?: _60.QueryGetProtoRevAdminAccountRequest): Promise<_60.QueryGetProtoRevAdminAccountResponse>;
                getProtoRevDeveloperAccount(request?: _60.QueryGetProtoRevDeveloperAccountRequest): Promise<_60.QueryGetProtoRevDeveloperAccountResponse>;
                getProtoRevPoolWeights(request?: _60.QueryGetProtoRevPoolWeightsRequest): Promise<_60.QueryGetProtoRevPoolWeightsResponse>;
                getProtoRevMaxPoolPointsPerTx(request?: _60.QueryGetProtoRevMaxPoolPointsPerTxRequest): Promise<_60.QueryGetProtoRevMaxPoolPointsPerTxResponse>;
                getProtoRevMaxPoolPointsPerBlock(request?: _60.QueryGetProtoRevMaxPoolPointsPerBlockRequest): Promise<_60.QueryGetProtoRevMaxPoolPointsPerBlockResponse>;
                getProtoRevBaseDenoms(request?: _60.QueryGetProtoRevBaseDenomsRequest): Promise<_60.QueryGetProtoRevBaseDenomsResponse>;
                getProtoRevEnabled(request?: _60.QueryGetProtoRevEnabledRequest): Promise<_60.QueryGetProtoRevEnabledResponse>;
                getProtoRevPool(request: _60.QueryGetProtoRevPoolRequest): Promise<_60.QueryGetProtoRevPoolResponse>;
            };
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    setHotRoutes(value: _61.MsgSetHotRoutes): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    setDeveloperAccount(value: _61.MsgSetDeveloperAccount): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    setMaxPoolPointsPerTx(value: _61.MsgSetMaxPoolPointsPerTx): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    setMaxPoolPointsPerBlock(value: _61.MsgSetMaxPoolPointsPerBlock): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    setPoolWeights(value: _61.MsgSetPoolWeights): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    setBaseDenoms(value: _61.MsgSetBaseDenoms): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    setHotRoutes(value: _61.MsgSetHotRoutes): {
                        typeUrl: string;
                        value: _61.MsgSetHotRoutes;
                    };
                    setDeveloperAccount(value: _61.MsgSetDeveloperAccount): {
                        typeUrl: string;
                        value: _61.MsgSetDeveloperAccount;
                    };
                    setMaxPoolPointsPerTx(value: _61.MsgSetMaxPoolPointsPerTx): {
                        typeUrl: string;
                        value: _61.MsgSetMaxPoolPointsPerTx;
                    };
                    setMaxPoolPointsPerBlock(value: _61.MsgSetMaxPoolPointsPerBlock): {
                        typeUrl: string;
                        value: _61.MsgSetMaxPoolPointsPerBlock;
                    };
                    setPoolWeights(value: _61.MsgSetPoolWeights): {
                        typeUrl: string;
                        value: _61.MsgSetPoolWeights;
                    };
                    setBaseDenoms(value: _61.MsgSetBaseDenoms): {
                        typeUrl: string;
                        value: _61.MsgSetBaseDenoms;
                    };
                };
                fromJSON: {
                    setHotRoutes(value: any): {
                        typeUrl: string;
                        value: _61.MsgSetHotRoutes;
                    };
                    setDeveloperAccount(value: any): {
                        typeUrl: string;
                        value: _61.MsgSetDeveloperAccount;
                    };
                    setMaxPoolPointsPerTx(value: any): {
                        typeUrl: string;
                        value: _61.MsgSetMaxPoolPointsPerTx;
                    };
                    setMaxPoolPointsPerBlock(value: any): {
                        typeUrl: string;
                        value: _61.MsgSetMaxPoolPointsPerBlock;
                    };
                    setPoolWeights(value: any): {
                        typeUrl: string;
                        value: _61.MsgSetPoolWeights;
                    };
                    setBaseDenoms(value: any): {
                        typeUrl: string;
                        value: _61.MsgSetBaseDenoms;
                    };
                };
                fromPartial: {
                    setHotRoutes(value: _61.MsgSetHotRoutes): {
                        typeUrl: string;
                        value: _61.MsgSetHotRoutes;
                    };
                    setDeveloperAccount(value: _61.MsgSetDeveloperAccount): {
                        typeUrl: string;
                        value: _61.MsgSetDeveloperAccount;
                    };
                    setMaxPoolPointsPerTx(value: _61.MsgSetMaxPoolPointsPerTx): {
                        typeUrl: string;
                        value: _61.MsgSetMaxPoolPointsPerTx;
                    };
                    setMaxPoolPointsPerBlock(value: _61.MsgSetMaxPoolPointsPerBlock): {
                        typeUrl: string;
                        value: _61.MsgSetMaxPoolPointsPerBlock;
                    };
                    setPoolWeights(value: _61.MsgSetPoolWeights): {
                        typeUrl: string;
                        value: _61.MsgSetPoolWeights;
                    };
                    setBaseDenoms(value: _61.MsgSetBaseDenoms): {
                        typeUrl: string;
                        value: _61.MsgSetBaseDenoms;
                    };
                };
            };
            AminoConverter: {
                "/osmosis.protorev.v1beta1.MsgSetHotRoutes": {
                    aminoType: string;
                    toAmino: ({ admin, hotRoutes }: _61.MsgSetHotRoutes) => {
                        admin: string;
                        hot_routes: {
                            arb_routes: {
                                trades: {
                                    pool: string;
                                    token_in: string;
                                    token_out: string;
                                }[];
                                step_size: string;
                            }[];
                            token_in: string;
                            token_out: string;
                        }[];
                    };
                    fromAmino: ({ admin, hot_routes }: {
                        admin: string;
                        hot_routes: {
                            arb_routes: {
                                trades: {
                                    pool: string;
                                    token_in: string;
                                    token_out: string;
                                }[];
                                step_size: string;
                            }[];
                            token_in: string;
                            token_out: string;
                        }[];
                    }) => _61.MsgSetHotRoutes;
                };
                "/osmosis.protorev.v1beta1.MsgSetDeveloperAccount": {
                    aminoType: string;
                    toAmino: ({ admin, developerAccount }: _61.MsgSetDeveloperAccount) => {
                        admin: string;
                        developer_account: string;
                    };
                    fromAmino: ({ admin, developer_account }: {
                        admin: string;
                        developer_account: string;
                    }) => _61.MsgSetDeveloperAccount;
                };
                "/osmosis.protorev.v1beta1.MsgSetMaxPoolPointsPerTx": {
                    aminoType: string;
                    toAmino: ({ admin, maxPoolPointsPerTx }: _61.MsgSetMaxPoolPointsPerTx) => {
                        admin: string;
                        max_pool_points_per_tx: string;
                    };
                    fromAmino: ({ admin, max_pool_points_per_tx }: {
                        admin: string;
                        max_pool_points_per_tx: string;
                    }) => _61.MsgSetMaxPoolPointsPerTx;
                };
                "/osmosis.protorev.v1beta1.MsgSetMaxPoolPointsPerBlock": {
                    aminoType: string;
                    toAmino: ({ admin, maxPoolPointsPerBlock }: _61.MsgSetMaxPoolPointsPerBlock) => {
                        admin: string;
                        max_pool_points_per_block: string;
                    };
                    fromAmino: ({ admin, max_pool_points_per_block }: {
                        admin: string;
                        max_pool_points_per_block: string;
                    }) => _61.MsgSetMaxPoolPointsPerBlock;
                };
                "/osmosis.protorev.v1beta1.MsgSetPoolWeights": {
                    aminoType: string;
                    toAmino: ({ admin, poolWeights }: _61.MsgSetPoolWeights) => {
                        admin: string;
                        pool_weights: {
                            stable_weight: string;
                            balancer_weight: string;
                            concentrated_weight: string;
                        };
                    };
                    fromAmino: ({ admin, pool_weights }: {
                        admin: string;
                        pool_weights: {
                            stable_weight: string;
                            balancer_weight: string;
                            concentrated_weight: string;
                        };
                    }) => _61.MsgSetPoolWeights;
                };
                "/osmosis.protorev.v1beta1.MsgSetBaseDenoms": {
                    aminoType: string;
                    toAmino: ({ admin, baseDenoms }: _61.MsgSetBaseDenoms) => {
                        admin: string;
                        base_denoms: {
                            denom: string;
                            step_size: string;
                        }[];
                    };
                    fromAmino: ({ admin, base_denoms }: {
                        admin: string;
                        base_denoms: {
                            denom: string;
                            step_size: string;
                        }[];
                    }) => _61.MsgSetBaseDenoms;
                };
            };
            MsgSetHotRoutes: {
                encode(message: _61.MsgSetHotRoutes, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _61.MsgSetHotRoutes;
                fromPartial(object: Partial<_61.MsgSetHotRoutes>): _61.MsgSetHotRoutes;
            };
            MsgSetHotRoutesResponse: {
                encode(_: _61.MsgSetHotRoutesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _61.MsgSetHotRoutesResponse;
                fromPartial(_: Partial<_61.MsgSetHotRoutesResponse>): _61.MsgSetHotRoutesResponse;
            };
            MsgSetDeveloperAccount: {
                encode(message: _61.MsgSetDeveloperAccount, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _61.MsgSetDeveloperAccount;
                fromPartial(object: Partial<_61.MsgSetDeveloperAccount>): _61.MsgSetDeveloperAccount;
            };
            MsgSetDeveloperAccountResponse: {
                encode(_: _61.MsgSetDeveloperAccountResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _61.MsgSetDeveloperAccountResponse;
                fromPartial(_: Partial<_61.MsgSetDeveloperAccountResponse>): _61.MsgSetDeveloperAccountResponse;
            };
            MsgSetPoolWeights: {
                encode(message: _61.MsgSetPoolWeights, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _61.MsgSetPoolWeights;
                fromPartial(object: Partial<_61.MsgSetPoolWeights>): _61.MsgSetPoolWeights;
            };
            MsgSetPoolWeightsResponse: {
                encode(_: _61.MsgSetPoolWeightsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _61.MsgSetPoolWeightsResponse;
                fromPartial(_: Partial<_61.MsgSetPoolWeightsResponse>): _61.MsgSetPoolWeightsResponse;
            };
            MsgSetMaxPoolPointsPerTx: {
                encode(message: _61.MsgSetMaxPoolPointsPerTx, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _61.MsgSetMaxPoolPointsPerTx;
                fromPartial(object: Partial<_61.MsgSetMaxPoolPointsPerTx>): _61.MsgSetMaxPoolPointsPerTx;
            };
            MsgSetMaxPoolPointsPerTxResponse: {
                encode(_: _61.MsgSetMaxPoolPointsPerTxResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _61.MsgSetMaxPoolPointsPerTxResponse;
                fromPartial(_: Partial<_61.MsgSetMaxPoolPointsPerTxResponse>): _61.MsgSetMaxPoolPointsPerTxResponse;
            };
            MsgSetMaxPoolPointsPerBlock: {
                encode(message: _61.MsgSetMaxPoolPointsPerBlock, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _61.MsgSetMaxPoolPointsPerBlock;
                fromPartial(object: Partial<_61.MsgSetMaxPoolPointsPerBlock>): _61.MsgSetMaxPoolPointsPerBlock;
            };
            MsgSetMaxPoolPointsPerBlockResponse: {
                encode(_: _61.MsgSetMaxPoolPointsPerBlockResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _61.MsgSetMaxPoolPointsPerBlockResponse;
                fromPartial(_: Partial<_61.MsgSetMaxPoolPointsPerBlockResponse>): _61.MsgSetMaxPoolPointsPerBlockResponse;
            };
            MsgSetBaseDenoms: {
                encode(message: _61.MsgSetBaseDenoms, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _61.MsgSetBaseDenoms;
                fromPartial(object: Partial<_61.MsgSetBaseDenoms>): _61.MsgSetBaseDenoms;
            };
            MsgSetBaseDenomsResponse: {
                encode(_: _61.MsgSetBaseDenomsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _61.MsgSetBaseDenomsResponse;
                fromPartial(_: Partial<_61.MsgSetBaseDenomsResponse>): _61.MsgSetBaseDenomsResponse;
            };
            QueryParamsRequest: {
                encode(_: _60.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _60.QueryParamsRequest;
                fromPartial(_: Partial<_60.QueryParamsRequest>): _60.QueryParamsRequest;
            };
            QueryParamsResponse: {
                encode(message: _60.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _60.QueryParamsResponse;
                fromPartial(object: Partial<_60.QueryParamsResponse>): _60.QueryParamsResponse;
            };
            QueryGetProtoRevNumberOfTradesRequest: {
                encode(_: _60.QueryGetProtoRevNumberOfTradesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _60.QueryGetProtoRevNumberOfTradesRequest;
                fromPartial(_: Partial<_60.QueryGetProtoRevNumberOfTradesRequest>): _60.QueryGetProtoRevNumberOfTradesRequest;
            };
            QueryGetProtoRevNumberOfTradesResponse: {
                encode(message: _60.QueryGetProtoRevNumberOfTradesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _60.QueryGetProtoRevNumberOfTradesResponse;
                fromPartial(object: Partial<_60.QueryGetProtoRevNumberOfTradesResponse>): _60.QueryGetProtoRevNumberOfTradesResponse;
            };
            QueryGetProtoRevProfitsByDenomRequest: {
                encode(message: _60.QueryGetProtoRevProfitsByDenomRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _60.QueryGetProtoRevProfitsByDenomRequest;
                fromPartial(object: Partial<_60.QueryGetProtoRevProfitsByDenomRequest>): _60.QueryGetProtoRevProfitsByDenomRequest;
            };
            QueryGetProtoRevProfitsByDenomResponse: {
                encode(message: _60.QueryGetProtoRevProfitsByDenomResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _60.QueryGetProtoRevProfitsByDenomResponse;
                fromPartial(object: Partial<_60.QueryGetProtoRevProfitsByDenomResponse>): _60.QueryGetProtoRevProfitsByDenomResponse;
            };
            QueryGetProtoRevAllProfitsRequest: {
                encode(_: _60.QueryGetProtoRevAllProfitsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _60.QueryGetProtoRevAllProfitsRequest;
                fromPartial(_: Partial<_60.QueryGetProtoRevAllProfitsRequest>): _60.QueryGetProtoRevAllProfitsRequest;
            };
            QueryGetProtoRevAllProfitsResponse: {
                encode(message: _60.QueryGetProtoRevAllProfitsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _60.QueryGetProtoRevAllProfitsResponse;
                fromPartial(object: Partial<_60.QueryGetProtoRevAllProfitsResponse>): _60.QueryGetProtoRevAllProfitsResponse;
            };
            QueryGetProtoRevStatisticsByRouteRequest: {
                encode(message: _60.QueryGetProtoRevStatisticsByRouteRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _60.QueryGetProtoRevStatisticsByRouteRequest;
                fromPartial(object: Partial<_60.QueryGetProtoRevStatisticsByRouteRequest>): _60.QueryGetProtoRevStatisticsByRouteRequest;
            };
            QueryGetProtoRevStatisticsByRouteResponse: {
                encode(message: _60.QueryGetProtoRevStatisticsByRouteResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _60.QueryGetProtoRevStatisticsByRouteResponse;
                fromPartial(object: Partial<_60.QueryGetProtoRevStatisticsByRouteResponse>): _60.QueryGetProtoRevStatisticsByRouteResponse;
            };
            QueryGetProtoRevAllRouteStatisticsRequest: {
                encode(_: _60.QueryGetProtoRevAllRouteStatisticsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _60.QueryGetProtoRevAllRouteStatisticsRequest;
                fromPartial(_: Partial<_60.QueryGetProtoRevAllRouteStatisticsRequest>): _60.QueryGetProtoRevAllRouteStatisticsRequest;
            };
            QueryGetProtoRevAllRouteStatisticsResponse: {
                encode(message: _60.QueryGetProtoRevAllRouteStatisticsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _60.QueryGetProtoRevAllRouteStatisticsResponse;
                fromPartial(object: Partial<_60.QueryGetProtoRevAllRouteStatisticsResponse>): _60.QueryGetProtoRevAllRouteStatisticsResponse;
            };
            QueryGetProtoRevTokenPairArbRoutesRequest: {
                encode(_: _60.QueryGetProtoRevTokenPairArbRoutesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _60.QueryGetProtoRevTokenPairArbRoutesRequest;
                fromPartial(_: Partial<_60.QueryGetProtoRevTokenPairArbRoutesRequest>): _60.QueryGetProtoRevTokenPairArbRoutesRequest;
            };
            QueryGetProtoRevTokenPairArbRoutesResponse: {
                encode(message: _60.QueryGetProtoRevTokenPairArbRoutesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _60.QueryGetProtoRevTokenPairArbRoutesResponse;
                fromPartial(object: Partial<_60.QueryGetProtoRevTokenPairArbRoutesResponse>): _60.QueryGetProtoRevTokenPairArbRoutesResponse;
            };
            QueryGetProtoRevAdminAccountRequest: {
                encode(_: _60.QueryGetProtoRevAdminAccountRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _60.QueryGetProtoRevAdminAccountRequest;
                fromPartial(_: Partial<_60.QueryGetProtoRevAdminAccountRequest>): _60.QueryGetProtoRevAdminAccountRequest;
            };
            QueryGetProtoRevAdminAccountResponse: {
                encode(message: _60.QueryGetProtoRevAdminAccountResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _60.QueryGetProtoRevAdminAccountResponse;
                fromPartial(object: Partial<_60.QueryGetProtoRevAdminAccountResponse>): _60.QueryGetProtoRevAdminAccountResponse;
            };
            QueryGetProtoRevDeveloperAccountRequest: {
                encode(_: _60.QueryGetProtoRevDeveloperAccountRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _60.QueryGetProtoRevDeveloperAccountRequest;
                fromPartial(_: Partial<_60.QueryGetProtoRevDeveloperAccountRequest>): _60.QueryGetProtoRevDeveloperAccountRequest;
            };
            QueryGetProtoRevDeveloperAccountResponse: {
                encode(message: _60.QueryGetProtoRevDeveloperAccountResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _60.QueryGetProtoRevDeveloperAccountResponse;
                fromPartial(object: Partial<_60.QueryGetProtoRevDeveloperAccountResponse>): _60.QueryGetProtoRevDeveloperAccountResponse;
            };
            QueryGetProtoRevPoolWeightsRequest: {
                encode(_: _60.QueryGetProtoRevPoolWeightsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _60.QueryGetProtoRevPoolWeightsRequest;
                fromPartial(_: Partial<_60.QueryGetProtoRevPoolWeightsRequest>): _60.QueryGetProtoRevPoolWeightsRequest;
            };
            QueryGetProtoRevPoolWeightsResponse: {
                encode(message: _60.QueryGetProtoRevPoolWeightsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _60.QueryGetProtoRevPoolWeightsResponse;
                fromPartial(object: Partial<_60.QueryGetProtoRevPoolWeightsResponse>): _60.QueryGetProtoRevPoolWeightsResponse;
            };
            QueryGetProtoRevMaxPoolPointsPerBlockRequest: {
                encode(_: _60.QueryGetProtoRevMaxPoolPointsPerBlockRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _60.QueryGetProtoRevMaxPoolPointsPerBlockRequest;
                fromPartial(_: Partial<_60.QueryGetProtoRevMaxPoolPointsPerBlockRequest>): _60.QueryGetProtoRevMaxPoolPointsPerBlockRequest;
            };
            QueryGetProtoRevMaxPoolPointsPerBlockResponse: {
                encode(message: _60.QueryGetProtoRevMaxPoolPointsPerBlockResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _60.QueryGetProtoRevMaxPoolPointsPerBlockResponse;
                fromPartial(object: Partial<_60.QueryGetProtoRevMaxPoolPointsPerBlockResponse>): _60.QueryGetProtoRevMaxPoolPointsPerBlockResponse;
            };
            QueryGetProtoRevMaxPoolPointsPerTxRequest: {
                encode(_: _60.QueryGetProtoRevMaxPoolPointsPerTxRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _60.QueryGetProtoRevMaxPoolPointsPerTxRequest;
                fromPartial(_: Partial<_60.QueryGetProtoRevMaxPoolPointsPerTxRequest>): _60.QueryGetProtoRevMaxPoolPointsPerTxRequest;
            };
            QueryGetProtoRevMaxPoolPointsPerTxResponse: {
                encode(message: _60.QueryGetProtoRevMaxPoolPointsPerTxResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _60.QueryGetProtoRevMaxPoolPointsPerTxResponse;
                fromPartial(object: Partial<_60.QueryGetProtoRevMaxPoolPointsPerTxResponse>): _60.QueryGetProtoRevMaxPoolPointsPerTxResponse;
            };
            QueryGetProtoRevBaseDenomsRequest: {
                encode(_: _60.QueryGetProtoRevBaseDenomsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _60.QueryGetProtoRevBaseDenomsRequest;
                fromPartial(_: Partial<_60.QueryGetProtoRevBaseDenomsRequest>): _60.QueryGetProtoRevBaseDenomsRequest;
            };
            QueryGetProtoRevBaseDenomsResponse: {
                encode(message: _60.QueryGetProtoRevBaseDenomsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _60.QueryGetProtoRevBaseDenomsResponse;
                fromPartial(object: Partial<_60.QueryGetProtoRevBaseDenomsResponse>): _60.QueryGetProtoRevBaseDenomsResponse;
            };
            QueryGetProtoRevEnabledRequest: {
                encode(_: _60.QueryGetProtoRevEnabledRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _60.QueryGetProtoRevEnabledRequest;
                fromPartial(_: Partial<_60.QueryGetProtoRevEnabledRequest>): _60.QueryGetProtoRevEnabledRequest;
            };
            QueryGetProtoRevEnabledResponse: {
                encode(message: _60.QueryGetProtoRevEnabledResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _60.QueryGetProtoRevEnabledResponse;
                fromPartial(object: Partial<_60.QueryGetProtoRevEnabledResponse>): _60.QueryGetProtoRevEnabledResponse;
            };
            QueryGetProtoRevPoolRequest: {
                encode(message: _60.QueryGetProtoRevPoolRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _60.QueryGetProtoRevPoolRequest;
                fromPartial(object: Partial<_60.QueryGetProtoRevPoolRequest>): _60.QueryGetProtoRevPoolRequest;
            };
            QueryGetProtoRevPoolResponse: {
                encode(message: _60.QueryGetProtoRevPoolResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _60.QueryGetProtoRevPoolResponse;
                fromPartial(object: Partial<_60.QueryGetProtoRevPoolResponse>): _60.QueryGetProtoRevPoolResponse;
            };
            TokenPairArbRoutes: {
                encode(message: _59.TokenPairArbRoutes, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _59.TokenPairArbRoutes;
                fromPartial(object: Partial<_59.TokenPairArbRoutes>): _59.TokenPairArbRoutes;
            };
            Route: {
                encode(message: _59.Route, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _59.Route;
                fromPartial(object: Partial<_59.Route>): _59.Route;
            };
            Trade: {
                encode(message: _59.Trade, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _59.Trade;
                fromPartial(object: Partial<_59.Trade>): _59.Trade;
            };
            RouteStatistics: {
                encode(message: _59.RouteStatistics, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _59.RouteStatistics;
                fromPartial(object: Partial<_59.RouteStatistics>): _59.RouteStatistics;
            };
            PoolWeights: {
                encode(message: _59.PoolWeights, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _59.PoolWeights;
                fromPartial(object: Partial<_59.PoolWeights>): _59.PoolWeights;
            };
            BaseDenom: {
                encode(message: _59.BaseDenom, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _59.BaseDenom;
                fromPartial(object: Partial<_59.BaseDenom>): _59.BaseDenom;
            };
            Params: {
                encode(message: _58.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _58.Params;
                fromPartial(object: Partial<_58.Params>): _58.Params;
            };
            SetProtoRevEnabledProposal: {
                encode(message: _57.SetProtoRevEnabledProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _57.SetProtoRevEnabledProposal;
                fromPartial(object: Partial<_57.SetProtoRevEnabledProposal>): _57.SetProtoRevEnabledProposal;
            };
            SetProtoRevAdminAccountProposal: {
                encode(message: _57.SetProtoRevAdminAccountProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _57.SetProtoRevAdminAccountProposal;
                fromPartial(object: Partial<_57.SetProtoRevAdminAccountProposal>): _57.SetProtoRevAdminAccountProposal;
            };
            GenesisState: {
                encode(message: _56.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _56.GenesisState;
                fromPartial(object: Partial<_56.GenesisState>): _56.GenesisState;
            };
        };
    }
    namespace store {
        const v1beta1: {
            Node: {
                encode(message: _62.Node, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _62.Node;
                fromPartial(object: Partial<_62.Node>): _62.Node;
            };
            Child: {
                encode(message: _62.Child, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _62.Child;
                fromPartial(object: Partial<_62.Child>): _62.Child;
            };
            Leaf: {
                encode(message: _62.Leaf, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _62.Leaf;
                fromPartial(object: Partial<_62.Leaf>): _62.Leaf;
            };
        };
    }
    const superfluid: {
        MsgClientImpl: typeof _235.MsgClientImpl;
        QueryClientImpl: typeof _221.QueryClientImpl;
        createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
            params(request?: _65.QueryParamsRequest): Promise<_65.QueryParamsResponse>;
            assetType(request: _65.AssetTypeRequest): Promise<_65.AssetTypeResponse>;
            allAssets(request?: _65.AllAssetsRequest): Promise<_65.AllAssetsResponse>;
            assetMultiplier(request: _65.AssetMultiplierRequest): Promise<_65.AssetMultiplierResponse>;
            allIntermediaryAccounts(request?: _65.AllIntermediaryAccountsRequest): Promise<_65.AllIntermediaryAccountsResponse>;
            connectedIntermediaryAccount(request: _65.ConnectedIntermediaryAccountRequest): Promise<_65.ConnectedIntermediaryAccountResponse>;
            totalDelegationByValidatorForDenom(request: _65.QueryTotalDelegationByValidatorForDenomRequest): Promise<_65.QueryTotalDelegationByValidatorForDenomResponse>;
            totalSuperfluidDelegations(request?: _65.TotalSuperfluidDelegationsRequest): Promise<_65.TotalSuperfluidDelegationsResponse>;
            superfluidDelegationAmount(request: _65.SuperfluidDelegationAmountRequest): Promise<_65.SuperfluidDelegationAmountResponse>;
            superfluidDelegationsByDelegator(request: _65.SuperfluidDelegationsByDelegatorRequest): Promise<_65.SuperfluidDelegationsByDelegatorResponse>;
            superfluidUndelegationsByDelegator(request: _65.SuperfluidUndelegationsByDelegatorRequest): Promise<_65.SuperfluidUndelegationsByDelegatorResponse>;
            superfluidDelegationsByValidatorDenom(request: _65.SuperfluidDelegationsByValidatorDenomRequest): Promise<_65.SuperfluidDelegationsByValidatorDenomResponse>;
            estimateSuperfluidDelegatedAmountByValidatorDenom(request: _65.EstimateSuperfluidDelegatedAmountByValidatorDenomRequest): Promise<_65.EstimateSuperfluidDelegatedAmountByValidatorDenomResponse>;
            totalDelegationByDelegator(request: _65.QueryTotalDelegationByDelegatorRequest): Promise<_65.QueryTotalDelegationByDelegatorResponse>;
            unpoolWhitelist(request?: _65.QueryUnpoolWhitelistRequest): Promise<_65.QueryUnpoolWhitelistResponse>;
            userConcentratedSuperfluidPositionsDelegated(request: _65.UserConcentratedSuperfluidPositionsDelegatedRequest): Promise<_65.UserConcentratedSuperfluidPositionsDelegatedResponse>;
            userConcentratedSuperfluidPositionsUndelegating(request: _65.UserConcentratedSuperfluidPositionsUndelegatingRequest): Promise<_65.UserConcentratedSuperfluidPositionsUndelegatingResponse>;
        };
        registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
        load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
        MessageComposer: {
            encoded: {
                superfluidDelegate(value: _67.MsgSuperfluidDelegate): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                superfluidUndelegate(value: _67.MsgSuperfluidUndelegate): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                superfluidUnbondLock(value: _67.MsgSuperfluidUnbondLock): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                superfluidUndelegateAndUnbondLock(value: _67.MsgSuperfluidUndelegateAndUnbondLock): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                lockAndSuperfluidDelegate(value: _67.MsgLockAndSuperfluidDelegate): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                createFullRangePositionAndSuperfluidDelegate(value: _67.MsgCreateFullRangePositionAndSuperfluidDelegate): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                unPoolWhitelistedPool(value: _67.MsgUnPoolWhitelistedPool): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                unlockAndMigrateSharesToFullRangeConcentratedPosition(value: _67.MsgUnlockAndMigrateSharesToFullRangeConcentratedPosition): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                addToConcentratedLiquiditySuperfluidPosition(value: _67.MsgAddToConcentratedLiquiditySuperfluidPosition): {
                    typeUrl: string;
                    value: Uint8Array;
                };
            };
            withTypeUrl: {
                superfluidDelegate(value: _67.MsgSuperfluidDelegate): {
                    typeUrl: string;
                    value: _67.MsgSuperfluidDelegate;
                };
                superfluidUndelegate(value: _67.MsgSuperfluidUndelegate): {
                    typeUrl: string;
                    value: _67.MsgSuperfluidUndelegate;
                };
                superfluidUnbondLock(value: _67.MsgSuperfluidUnbondLock): {
                    typeUrl: string;
                    value: _67.MsgSuperfluidUnbondLock;
                };
                superfluidUndelegateAndUnbondLock(value: _67.MsgSuperfluidUndelegateAndUnbondLock): {
                    typeUrl: string;
                    value: _67.MsgSuperfluidUndelegateAndUnbondLock;
                };
                lockAndSuperfluidDelegate(value: _67.MsgLockAndSuperfluidDelegate): {
                    typeUrl: string;
                    value: _67.MsgLockAndSuperfluidDelegate;
                };
                createFullRangePositionAndSuperfluidDelegate(value: _67.MsgCreateFullRangePositionAndSuperfluidDelegate): {
                    typeUrl: string;
                    value: _67.MsgCreateFullRangePositionAndSuperfluidDelegate;
                };
                unPoolWhitelistedPool(value: _67.MsgUnPoolWhitelistedPool): {
                    typeUrl: string;
                    value: _67.MsgUnPoolWhitelistedPool;
                };
                unlockAndMigrateSharesToFullRangeConcentratedPosition(value: _67.MsgUnlockAndMigrateSharesToFullRangeConcentratedPosition): {
                    typeUrl: string;
                    value: _67.MsgUnlockAndMigrateSharesToFullRangeConcentratedPosition;
                };
                addToConcentratedLiquiditySuperfluidPosition(value: _67.MsgAddToConcentratedLiquiditySuperfluidPosition): {
                    typeUrl: string;
                    value: _67.MsgAddToConcentratedLiquiditySuperfluidPosition;
                };
            };
            fromJSON: {
                superfluidDelegate(value: any): {
                    typeUrl: string;
                    value: _67.MsgSuperfluidDelegate;
                };
                superfluidUndelegate(value: any): {
                    typeUrl: string;
                    value: _67.MsgSuperfluidUndelegate;
                };
                superfluidUnbondLock(value: any): {
                    typeUrl: string;
                    value: _67.MsgSuperfluidUnbondLock;
                };
                superfluidUndelegateAndUnbondLock(value: any): {
                    typeUrl: string;
                    value: _67.MsgSuperfluidUndelegateAndUnbondLock;
                };
                lockAndSuperfluidDelegate(value: any): {
                    typeUrl: string;
                    value: _67.MsgLockAndSuperfluidDelegate;
                };
                createFullRangePositionAndSuperfluidDelegate(value: any): {
                    typeUrl: string;
                    value: _67.MsgCreateFullRangePositionAndSuperfluidDelegate;
                };
                unPoolWhitelistedPool(value: any): {
                    typeUrl: string;
                    value: _67.MsgUnPoolWhitelistedPool;
                };
                unlockAndMigrateSharesToFullRangeConcentratedPosition(value: any): {
                    typeUrl: string;
                    value: _67.MsgUnlockAndMigrateSharesToFullRangeConcentratedPosition;
                };
                addToConcentratedLiquiditySuperfluidPosition(value: any): {
                    typeUrl: string;
                    value: _67.MsgAddToConcentratedLiquiditySuperfluidPosition;
                };
            };
            fromPartial: {
                superfluidDelegate(value: _67.MsgSuperfluidDelegate): {
                    typeUrl: string;
                    value: _67.MsgSuperfluidDelegate;
                };
                superfluidUndelegate(value: _67.MsgSuperfluidUndelegate): {
                    typeUrl: string;
                    value: _67.MsgSuperfluidUndelegate;
                };
                superfluidUnbondLock(value: _67.MsgSuperfluidUnbondLock): {
                    typeUrl: string;
                    value: _67.MsgSuperfluidUnbondLock;
                };
                superfluidUndelegateAndUnbondLock(value: _67.MsgSuperfluidUndelegateAndUnbondLock): {
                    typeUrl: string;
                    value: _67.MsgSuperfluidUndelegateAndUnbondLock;
                };
                lockAndSuperfluidDelegate(value: _67.MsgLockAndSuperfluidDelegate): {
                    typeUrl: string;
                    value: _67.MsgLockAndSuperfluidDelegate;
                };
                createFullRangePositionAndSuperfluidDelegate(value: _67.MsgCreateFullRangePositionAndSuperfluidDelegate): {
                    typeUrl: string;
                    value: _67.MsgCreateFullRangePositionAndSuperfluidDelegate;
                };
                unPoolWhitelistedPool(value: _67.MsgUnPoolWhitelistedPool): {
                    typeUrl: string;
                    value: _67.MsgUnPoolWhitelistedPool;
                };
                unlockAndMigrateSharesToFullRangeConcentratedPosition(value: _67.MsgUnlockAndMigrateSharesToFullRangeConcentratedPosition): {
                    typeUrl: string;
                    value: _67.MsgUnlockAndMigrateSharesToFullRangeConcentratedPosition;
                };
                addToConcentratedLiquiditySuperfluidPosition(value: _67.MsgAddToConcentratedLiquiditySuperfluidPosition): {
                    typeUrl: string;
                    value: _67.MsgAddToConcentratedLiquiditySuperfluidPosition;
                };
            };
        };
        AminoConverter: {
            "/osmosis.superfluid.MsgSuperfluidDelegate": {
                aminoType: string;
                toAmino: ({ sender, lockId, valAddr }: _67.MsgSuperfluidDelegate) => {
                    sender: string;
                    lock_id: string;
                    val_addr: string;
                };
                fromAmino: ({ sender, lock_id, val_addr }: {
                    sender: string;
                    lock_id: string;
                    val_addr: string;
                }) => _67.MsgSuperfluidDelegate;
            };
            "/osmosis.superfluid.MsgSuperfluidUndelegate": {
                aminoType: string;
                toAmino: ({ sender, lockId }: _67.MsgSuperfluidUndelegate) => {
                    sender: string;
                    lock_id: string;
                };
                fromAmino: ({ sender, lock_id }: {
                    sender: string;
                    lock_id: string;
                }) => _67.MsgSuperfluidUndelegate;
            };
            "/osmosis.superfluid.MsgSuperfluidUnbondLock": {
                aminoType: string;
                toAmino: ({ sender, lockId }: _67.MsgSuperfluidUnbondLock) => {
                    sender: string;
                    lock_id: string;
                };
                fromAmino: ({ sender, lock_id }: {
                    sender: string;
                    lock_id: string;
                }) => _67.MsgSuperfluidUnbondLock;
            };
            "/osmosis.superfluid.MsgSuperfluidUndelegateAndUnbondLock": {
                aminoType: string;
                toAmino: ({ sender, lockId, coin }: _67.MsgSuperfluidUndelegateAndUnbondLock) => {
                    sender: string;
                    lock_id: string;
                    coin: {
                        denom: string;
                        amount: string;
                    };
                };
                fromAmino: ({ sender, lock_id, coin }: {
                    sender: string;
                    lock_id: string;
                    coin: {
                        denom: string;
                        amount: string;
                    };
                }) => _67.MsgSuperfluidUndelegateAndUnbondLock;
            };
            "/osmosis.superfluid.MsgLockAndSuperfluidDelegate": {
                aminoType: string;
                toAmino: ({ sender, coins, valAddr }: _67.MsgLockAndSuperfluidDelegate) => {
                    sender: string;
                    coins: {
                        denom: string;
                        amount: string;
                    }[];
                    val_addr: string;
                };
                fromAmino: ({ sender, coins, val_addr }: {
                    sender: string;
                    coins: {
                        denom: string;
                        amount: string;
                    }[];
                    val_addr: string;
                }) => _67.MsgLockAndSuperfluidDelegate;
            };
            "/osmosis.superfluid.MsgCreateFullRangePositionAndSuperfluidDelegate": {
                aminoType: string;
                toAmino: ({ sender, coins, valAddr, poolId }: _67.MsgCreateFullRangePositionAndSuperfluidDelegate) => {
                    sender: string;
                    coins: {
                        denom: string;
                        amount: string;
                    }[];
                    val_addr: string;
                    pool_id: string;
                };
                fromAmino: ({ sender, coins, val_addr, pool_id }: {
                    sender: string;
                    coins: {
                        denom: string;
                        amount: string;
                    }[];
                    val_addr: string;
                    pool_id: string;
                }) => _67.MsgCreateFullRangePositionAndSuperfluidDelegate;
            };
            "/osmosis.superfluid.MsgUnPoolWhitelistedPool": {
                aminoType: string;
                toAmino: ({ sender, poolId }: _67.MsgUnPoolWhitelistedPool) => {
                    sender: string;
                    pool_id: string;
                };
                fromAmino: ({ sender, pool_id }: {
                    sender: string;
                    pool_id: string;
                }) => _67.MsgUnPoolWhitelistedPool;
            };
            "/osmosis.superfluid.MsgUnlockAndMigrateSharesToFullRangeConcentratedPosition": {
                aminoType: string;
                toAmino: ({ sender, lockId, sharesToMigrate, tokenOutMins }: _67.MsgUnlockAndMigrateSharesToFullRangeConcentratedPosition) => {
                    sender: string;
                    lock_id: string;
                    shares_to_migrate: {
                        denom: string;
                        amount: string;
                    };
                    token_out_mins: {
                        denom: string;
                        amount: string;
                    }[];
                };
                fromAmino: ({ sender, lock_id, shares_to_migrate, token_out_mins }: {
                    sender: string;
                    lock_id: string;
                    shares_to_migrate: {
                        denom: string;
                        amount: string;
                    };
                    token_out_mins: {
                        denom: string;
                        amount: string;
                    }[];
                }) => _67.MsgUnlockAndMigrateSharesToFullRangeConcentratedPosition;
            };
            "/osmosis.superfluid.MsgAddToConcentratedLiquiditySuperfluidPosition": {
                aminoType: string;
                toAmino: ({ positionId, sender, tokenDesired0, tokenDesired1 }: _67.MsgAddToConcentratedLiquiditySuperfluidPosition) => {
                    position_id: string;
                    sender: string;
                    token_desired0: {
                        denom: string;
                        amount: string;
                    };
                    token_desired1: {
                        denom: string;
                        amount: string;
                    };
                };
                fromAmino: ({ position_id, sender, token_desired0, token_desired1 }: {
                    position_id: string;
                    sender: string;
                    token_desired0: {
                        denom: string;
                        amount: string;
                    };
                    token_desired1: {
                        denom: string;
                        amount: string;
                    };
                }) => _67.MsgAddToConcentratedLiquiditySuperfluidPosition;
            };
        };
        MsgSuperfluidDelegate: {
            encode(message: _67.MsgSuperfluidDelegate, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _67.MsgSuperfluidDelegate;
            fromPartial(object: Partial<_67.MsgSuperfluidDelegate>): _67.MsgSuperfluidDelegate;
        };
        MsgSuperfluidDelegateResponse: {
            encode(_: _67.MsgSuperfluidDelegateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(_: any): _67.MsgSuperfluidDelegateResponse;
            fromPartial(_: Partial<_67.MsgSuperfluidDelegateResponse>): _67.MsgSuperfluidDelegateResponse;
        };
        MsgSuperfluidUndelegate: {
            encode(message: _67.MsgSuperfluidUndelegate, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _67.MsgSuperfluidUndelegate;
            fromPartial(object: Partial<_67.MsgSuperfluidUndelegate>): _67.MsgSuperfluidUndelegate;
        };
        MsgSuperfluidUndelegateResponse: {
            encode(_: _67.MsgSuperfluidUndelegateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(_: any): _67.MsgSuperfluidUndelegateResponse;
            fromPartial(_: Partial<_67.MsgSuperfluidUndelegateResponse>): _67.MsgSuperfluidUndelegateResponse;
        };
        MsgSuperfluidUnbondLock: {
            encode(message: _67.MsgSuperfluidUnbondLock, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _67.MsgSuperfluidUnbondLock;
            fromPartial(object: Partial<_67.MsgSuperfluidUnbondLock>): _67.MsgSuperfluidUnbondLock;
        };
        MsgSuperfluidUnbondLockResponse: {
            encode(_: _67.MsgSuperfluidUnbondLockResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(_: any): _67.MsgSuperfluidUnbondLockResponse;
            fromPartial(_: Partial<_67.MsgSuperfluidUnbondLockResponse>): _67.MsgSuperfluidUnbondLockResponse;
        };
        MsgSuperfluidUndelegateAndUnbondLock: {
            encode(message: _67.MsgSuperfluidUndelegateAndUnbondLock, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _67.MsgSuperfluidUndelegateAndUnbondLock;
            fromPartial(object: Partial<_67.MsgSuperfluidUndelegateAndUnbondLock>): _67.MsgSuperfluidUndelegateAndUnbondLock;
        };
        MsgSuperfluidUndelegateAndUnbondLockResponse: {
            encode(message: _67.MsgSuperfluidUndelegateAndUnbondLockResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _67.MsgSuperfluidUndelegateAndUnbondLockResponse;
            fromPartial(object: Partial<_67.MsgSuperfluidUndelegateAndUnbondLockResponse>): _67.MsgSuperfluidUndelegateAndUnbondLockResponse;
        };
        MsgLockAndSuperfluidDelegate: {
            encode(message: _67.MsgLockAndSuperfluidDelegate, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _67.MsgLockAndSuperfluidDelegate;
            fromPartial(object: Partial<_67.MsgLockAndSuperfluidDelegate>): _67.MsgLockAndSuperfluidDelegate;
        };
        MsgLockAndSuperfluidDelegateResponse: {
            encode(message: _67.MsgLockAndSuperfluidDelegateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _67.MsgLockAndSuperfluidDelegateResponse;
            fromPartial(object: Partial<_67.MsgLockAndSuperfluidDelegateResponse>): _67.MsgLockAndSuperfluidDelegateResponse;
        };
        MsgCreateFullRangePositionAndSuperfluidDelegate: {
            encode(message: _67.MsgCreateFullRangePositionAndSuperfluidDelegate, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _67.MsgCreateFullRangePositionAndSuperfluidDelegate;
            fromPartial(object: Partial<_67.MsgCreateFullRangePositionAndSuperfluidDelegate>): _67.MsgCreateFullRangePositionAndSuperfluidDelegate;
        };
        MsgCreateFullRangePositionAndSuperfluidDelegateResponse: {
            encode(message: _67.MsgCreateFullRangePositionAndSuperfluidDelegateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _67.MsgCreateFullRangePositionAndSuperfluidDelegateResponse;
            fromPartial(object: Partial<_67.MsgCreateFullRangePositionAndSuperfluidDelegateResponse>): _67.MsgCreateFullRangePositionAndSuperfluidDelegateResponse;
        };
        MsgUnPoolWhitelistedPool: {
            encode(message: _67.MsgUnPoolWhitelistedPool, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _67.MsgUnPoolWhitelistedPool;
            fromPartial(object: Partial<_67.MsgUnPoolWhitelistedPool>): _67.MsgUnPoolWhitelistedPool;
        };
        MsgUnPoolWhitelistedPoolResponse: {
            encode(message: _67.MsgUnPoolWhitelistedPoolResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _67.MsgUnPoolWhitelistedPoolResponse;
            fromPartial(object: Partial<_67.MsgUnPoolWhitelistedPoolResponse>): _67.MsgUnPoolWhitelistedPoolResponse;
        };
        MsgUnlockAndMigrateSharesToFullRangeConcentratedPosition: {
            encode(message: _67.MsgUnlockAndMigrateSharesToFullRangeConcentratedPosition, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _67.MsgUnlockAndMigrateSharesToFullRangeConcentratedPosition;
            fromPartial(object: Partial<_67.MsgUnlockAndMigrateSharesToFullRangeConcentratedPosition>): _67.MsgUnlockAndMigrateSharesToFullRangeConcentratedPosition;
        };
        MsgUnlockAndMigrateSharesToFullRangeConcentratedPositionResponse: {
            encode(message: _67.MsgUnlockAndMigrateSharesToFullRangeConcentratedPositionResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _67.MsgUnlockAndMigrateSharesToFullRangeConcentratedPositionResponse;
            fromPartial(object: Partial<_67.MsgUnlockAndMigrateSharesToFullRangeConcentratedPositionResponse>): _67.MsgUnlockAndMigrateSharesToFullRangeConcentratedPositionResponse;
        };
        MsgAddToConcentratedLiquiditySuperfluidPosition: {
            encode(message: _67.MsgAddToConcentratedLiquiditySuperfluidPosition, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _67.MsgAddToConcentratedLiquiditySuperfluidPosition;
            fromPartial(object: Partial<_67.MsgAddToConcentratedLiquiditySuperfluidPosition>): _67.MsgAddToConcentratedLiquiditySuperfluidPosition;
        };
        MsgAddToConcentratedLiquiditySuperfluidPositionResponse: {
            encode(message: _67.MsgAddToConcentratedLiquiditySuperfluidPositionResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _67.MsgAddToConcentratedLiquiditySuperfluidPositionResponse;
            fromPartial(object: Partial<_67.MsgAddToConcentratedLiquiditySuperfluidPositionResponse>): _67.MsgAddToConcentratedLiquiditySuperfluidPositionResponse;
        };
        superfluidAssetTypeFromJSON(object: any): _66.SuperfluidAssetType;
        superfluidAssetTypeToJSON(object: _66.SuperfluidAssetType): string;
        SuperfluidAssetType: typeof _66.SuperfluidAssetType;
        SuperfluidAssetTypeSDKType: typeof _66.SuperfluidAssetType;
        SuperfluidAsset: {
            encode(message: _66.SuperfluidAsset, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _66.SuperfluidAsset;
            fromPartial(object: Partial<_66.SuperfluidAsset>): _66.SuperfluidAsset;
        };
        SuperfluidIntermediaryAccount: {
            encode(message: _66.SuperfluidIntermediaryAccount, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _66.SuperfluidIntermediaryAccount;
            fromPartial(object: Partial<_66.SuperfluidIntermediaryAccount>): _66.SuperfluidIntermediaryAccount;
        };
        OsmoEquivalentMultiplierRecord: {
            encode(message: _66.OsmoEquivalentMultiplierRecord, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _66.OsmoEquivalentMultiplierRecord;
            fromPartial(object: Partial<_66.OsmoEquivalentMultiplierRecord>): _66.OsmoEquivalentMultiplierRecord;
        };
        SuperfluidDelegationRecord: {
            encode(message: _66.SuperfluidDelegationRecord, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _66.SuperfluidDelegationRecord;
            fromPartial(object: Partial<_66.SuperfluidDelegationRecord>): _66.SuperfluidDelegationRecord;
        };
        LockIdIntermediaryAccountConnection: {
            encode(message: _66.LockIdIntermediaryAccountConnection, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _66.LockIdIntermediaryAccountConnection;
            fromPartial(object: Partial<_66.LockIdIntermediaryAccountConnection>): _66.LockIdIntermediaryAccountConnection;
        };
        UnpoolWhitelistedPools: {
            encode(message: _66.UnpoolWhitelistedPools, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _66.UnpoolWhitelistedPools;
            fromPartial(object: Partial<_66.UnpoolWhitelistedPools>): _66.UnpoolWhitelistedPools;
        };
        ConcentratedPoolUserPositionRecord: {
            encode(message: _66.ConcentratedPoolUserPositionRecord, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _66.ConcentratedPoolUserPositionRecord;
            fromPartial(object: Partial<_66.ConcentratedPoolUserPositionRecord>): _66.ConcentratedPoolUserPositionRecord;
        };
        QueryParamsRequest: {
            encode(_: _65.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(_: any): _65.QueryParamsRequest;
            fromPartial(_: Partial<_65.QueryParamsRequest>): _65.QueryParamsRequest;
        };
        QueryParamsResponse: {
            encode(message: _65.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _65.QueryParamsResponse;
            fromPartial(object: Partial<_65.QueryParamsResponse>): _65.QueryParamsResponse;
        };
        AssetTypeRequest: {
            encode(message: _65.AssetTypeRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _65.AssetTypeRequest;
            fromPartial(object: Partial<_65.AssetTypeRequest>): _65.AssetTypeRequest;
        };
        AssetTypeResponse: {
            encode(message: _65.AssetTypeResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _65.AssetTypeResponse;
            fromPartial(object: Partial<_65.AssetTypeResponse>): _65.AssetTypeResponse;
        };
        AllAssetsRequest: {
            encode(_: _65.AllAssetsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(_: any): _65.AllAssetsRequest;
            fromPartial(_: Partial<_65.AllAssetsRequest>): _65.AllAssetsRequest;
        };
        AllAssetsResponse: {
            encode(message: _65.AllAssetsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _65.AllAssetsResponse;
            fromPartial(object: Partial<_65.AllAssetsResponse>): _65.AllAssetsResponse;
        };
        AssetMultiplierRequest: {
            encode(message: _65.AssetMultiplierRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _65.AssetMultiplierRequest;
            fromPartial(object: Partial<_65.AssetMultiplierRequest>): _65.AssetMultiplierRequest;
        };
        AssetMultiplierResponse: {
            encode(message: _65.AssetMultiplierResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _65.AssetMultiplierResponse;
            fromPartial(object: Partial<_65.AssetMultiplierResponse>): _65.AssetMultiplierResponse;
        };
        SuperfluidIntermediaryAccountInfo: {
            encode(message: _65.SuperfluidIntermediaryAccountInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _65.SuperfluidIntermediaryAccountInfo;
            fromPartial(object: Partial<_65.SuperfluidIntermediaryAccountInfo>): _65.SuperfluidIntermediaryAccountInfo;
        };
        AllIntermediaryAccountsRequest: {
            encode(message: _65.AllIntermediaryAccountsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _65.AllIntermediaryAccountsRequest;
            fromPartial(object: Partial<_65.AllIntermediaryAccountsRequest>): _65.AllIntermediaryAccountsRequest;
        };
        AllIntermediaryAccountsResponse: {
            encode(message: _65.AllIntermediaryAccountsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _65.AllIntermediaryAccountsResponse;
            fromPartial(object: Partial<_65.AllIntermediaryAccountsResponse>): _65.AllIntermediaryAccountsResponse;
        };
        ConnectedIntermediaryAccountRequest: {
            encode(message: _65.ConnectedIntermediaryAccountRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _65.ConnectedIntermediaryAccountRequest;
            fromPartial(object: Partial<_65.ConnectedIntermediaryAccountRequest>): _65.ConnectedIntermediaryAccountRequest;
        };
        ConnectedIntermediaryAccountResponse: {
            encode(message: _65.ConnectedIntermediaryAccountResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _65.ConnectedIntermediaryAccountResponse;
            fromPartial(object: Partial<_65.ConnectedIntermediaryAccountResponse>): _65.ConnectedIntermediaryAccountResponse;
        };
        QueryTotalDelegationByValidatorForDenomRequest: {
            encode(message: _65.QueryTotalDelegationByValidatorForDenomRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _65.QueryTotalDelegationByValidatorForDenomRequest;
            fromPartial(object: Partial<_65.QueryTotalDelegationByValidatorForDenomRequest>): _65.QueryTotalDelegationByValidatorForDenomRequest;
        };
        QueryTotalDelegationByValidatorForDenomResponse: {
            encode(message: _65.QueryTotalDelegationByValidatorForDenomResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _65.QueryTotalDelegationByValidatorForDenomResponse;
            fromPartial(object: Partial<_65.QueryTotalDelegationByValidatorForDenomResponse>): _65.QueryTotalDelegationByValidatorForDenomResponse;
        };
        Delegations: {
            encode(message: _65.Delegations, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _65.Delegations;
            fromPartial(object: Partial<_65.Delegations>): _65.Delegations;
        };
        TotalSuperfluidDelegationsRequest: {
            encode(_: _65.TotalSuperfluidDelegationsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(_: any): _65.TotalSuperfluidDelegationsRequest;
            fromPartial(_: Partial<_65.TotalSuperfluidDelegationsRequest>): _65.TotalSuperfluidDelegationsRequest;
        };
        TotalSuperfluidDelegationsResponse: {
            encode(message: _65.TotalSuperfluidDelegationsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _65.TotalSuperfluidDelegationsResponse;
            fromPartial(object: Partial<_65.TotalSuperfluidDelegationsResponse>): _65.TotalSuperfluidDelegationsResponse;
        };
        SuperfluidDelegationAmountRequest: {
            encode(message: _65.SuperfluidDelegationAmountRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _65.SuperfluidDelegationAmountRequest;
            fromPartial(object: Partial<_65.SuperfluidDelegationAmountRequest>): _65.SuperfluidDelegationAmountRequest;
        };
        SuperfluidDelegationAmountResponse: {
            encode(message: _65.SuperfluidDelegationAmountResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _65.SuperfluidDelegationAmountResponse;
            fromPartial(object: Partial<_65.SuperfluidDelegationAmountResponse>): _65.SuperfluidDelegationAmountResponse;
        };
        SuperfluidDelegationsByDelegatorRequest: {
            encode(message: _65.SuperfluidDelegationsByDelegatorRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _65.SuperfluidDelegationsByDelegatorRequest;
            fromPartial(object: Partial<_65.SuperfluidDelegationsByDelegatorRequest>): _65.SuperfluidDelegationsByDelegatorRequest;
        };
        SuperfluidDelegationsByDelegatorResponse: {
            encode(message: _65.SuperfluidDelegationsByDelegatorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _65.SuperfluidDelegationsByDelegatorResponse;
            fromPartial(object: Partial<_65.SuperfluidDelegationsByDelegatorResponse>): _65.SuperfluidDelegationsByDelegatorResponse;
        };
        SuperfluidUndelegationsByDelegatorRequest: {
            encode(message: _65.SuperfluidUndelegationsByDelegatorRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _65.SuperfluidUndelegationsByDelegatorRequest;
            fromPartial(object: Partial<_65.SuperfluidUndelegationsByDelegatorRequest>): _65.SuperfluidUndelegationsByDelegatorRequest;
        };
        SuperfluidUndelegationsByDelegatorResponse: {
            encode(message: _65.SuperfluidUndelegationsByDelegatorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _65.SuperfluidUndelegationsByDelegatorResponse;
            fromPartial(object: Partial<_65.SuperfluidUndelegationsByDelegatorResponse>): _65.SuperfluidUndelegationsByDelegatorResponse;
        };
        SuperfluidDelegationsByValidatorDenomRequest: {
            encode(message: _65.SuperfluidDelegationsByValidatorDenomRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _65.SuperfluidDelegationsByValidatorDenomRequest;
            fromPartial(object: Partial<_65.SuperfluidDelegationsByValidatorDenomRequest>): _65.SuperfluidDelegationsByValidatorDenomRequest;
        };
        SuperfluidDelegationsByValidatorDenomResponse: {
            encode(message: _65.SuperfluidDelegationsByValidatorDenomResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _65.SuperfluidDelegationsByValidatorDenomResponse;
            fromPartial(object: Partial<_65.SuperfluidDelegationsByValidatorDenomResponse>): _65.SuperfluidDelegationsByValidatorDenomResponse;
        };
        EstimateSuperfluidDelegatedAmountByValidatorDenomRequest: {
            encode(message: _65.EstimateSuperfluidDelegatedAmountByValidatorDenomRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _65.EstimateSuperfluidDelegatedAmountByValidatorDenomRequest;
            fromPartial(object: Partial<_65.EstimateSuperfluidDelegatedAmountByValidatorDenomRequest>): _65.EstimateSuperfluidDelegatedAmountByValidatorDenomRequest;
        };
        EstimateSuperfluidDelegatedAmountByValidatorDenomResponse: {
            encode(message: _65.EstimateSuperfluidDelegatedAmountByValidatorDenomResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _65.EstimateSuperfluidDelegatedAmountByValidatorDenomResponse;
            fromPartial(object: Partial<_65.EstimateSuperfluidDelegatedAmountByValidatorDenomResponse>): _65.EstimateSuperfluidDelegatedAmountByValidatorDenomResponse;
        };
        QueryTotalDelegationByDelegatorRequest: {
            encode(message: _65.QueryTotalDelegationByDelegatorRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _65.QueryTotalDelegationByDelegatorRequest;
            fromPartial(object: Partial<_65.QueryTotalDelegationByDelegatorRequest>): _65.QueryTotalDelegationByDelegatorRequest;
        };
        QueryTotalDelegationByDelegatorResponse: {
            encode(message: _65.QueryTotalDelegationByDelegatorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _65.QueryTotalDelegationByDelegatorResponse;
            fromPartial(object: Partial<_65.QueryTotalDelegationByDelegatorResponse>): _65.QueryTotalDelegationByDelegatorResponse;
        };
        QueryUnpoolWhitelistRequest: {
            encode(_: _65.QueryUnpoolWhitelistRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(_: any): _65.QueryUnpoolWhitelistRequest;
            fromPartial(_: Partial<_65.QueryUnpoolWhitelistRequest>): _65.QueryUnpoolWhitelistRequest;
        };
        QueryUnpoolWhitelistResponse: {
            encode(message: _65.QueryUnpoolWhitelistResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _65.QueryUnpoolWhitelistResponse;
            fromPartial(object: Partial<_65.QueryUnpoolWhitelistResponse>): _65.QueryUnpoolWhitelistResponse;
        };
        UserConcentratedSuperfluidPositionsDelegatedRequest: {
            encode(message: _65.UserConcentratedSuperfluidPositionsDelegatedRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _65.UserConcentratedSuperfluidPositionsDelegatedRequest;
            fromPartial(object: Partial<_65.UserConcentratedSuperfluidPositionsDelegatedRequest>): _65.UserConcentratedSuperfluidPositionsDelegatedRequest;
        };
        UserConcentratedSuperfluidPositionsDelegatedResponse: {
            encode(message: _65.UserConcentratedSuperfluidPositionsDelegatedResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _65.UserConcentratedSuperfluidPositionsDelegatedResponse;
            fromPartial(object: Partial<_65.UserConcentratedSuperfluidPositionsDelegatedResponse>): _65.UserConcentratedSuperfluidPositionsDelegatedResponse;
        };
        UserConcentratedSuperfluidPositionsUndelegatingRequest: {
            encode(message: _65.UserConcentratedSuperfluidPositionsUndelegatingRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _65.UserConcentratedSuperfluidPositionsUndelegatingRequest;
            fromPartial(object: Partial<_65.UserConcentratedSuperfluidPositionsUndelegatingRequest>): _65.UserConcentratedSuperfluidPositionsUndelegatingRequest;
        };
        UserConcentratedSuperfluidPositionsUndelegatingResponse: {
            encode(message: _65.UserConcentratedSuperfluidPositionsUndelegatingResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _65.UserConcentratedSuperfluidPositionsUndelegatingResponse;
            fromPartial(object: Partial<_65.UserConcentratedSuperfluidPositionsUndelegatingResponse>): _65.UserConcentratedSuperfluidPositionsUndelegatingResponse;
        };
        Params: {
            encode(message: _64.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _64.Params;
            fromPartial(object: Partial<_64.Params>): _64.Params;
        };
        GenesisState: {
            encode(message: _63.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _63.GenesisState;
            fromPartial(object: Partial<_63.GenesisState>): _63.GenesisState;
        };
    };
    namespace tokenfactory {
        const v1beta1: {
            MsgClientImpl: typeof _236.MsgClientImpl;
            QueryClientImpl: typeof _222.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                params(request?: _71.QueryParamsRequest): Promise<_71.QueryParamsResponse>;
                denomAuthorityMetadata(request: _71.QueryDenomAuthorityMetadataRequest): Promise<_71.QueryDenomAuthorityMetadataResponse>;
                denomsFromCreator(request: _71.QueryDenomsFromCreatorRequest): Promise<_71.QueryDenomsFromCreatorResponse>;
            };
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    createDenom(value: _72.MsgCreateDenom): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    mint(value: _72.MsgMint): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    burn(value: _72.MsgBurn): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    changeAdmin(value: _72.MsgChangeAdmin): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    setDenomMetadata(value: _72.MsgSetDenomMetadata): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    forceTransfer(value: _72.MsgForceTransfer): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    createDenom(value: _72.MsgCreateDenom): {
                        typeUrl: string;
                        value: _72.MsgCreateDenom;
                    };
                    mint(value: _72.MsgMint): {
                        typeUrl: string;
                        value: _72.MsgMint;
                    };
                    burn(value: _72.MsgBurn): {
                        typeUrl: string;
                        value: _72.MsgBurn;
                    };
                    changeAdmin(value: _72.MsgChangeAdmin): {
                        typeUrl: string;
                        value: _72.MsgChangeAdmin;
                    };
                    setDenomMetadata(value: _72.MsgSetDenomMetadata): {
                        typeUrl: string;
                        value: _72.MsgSetDenomMetadata;
                    };
                    forceTransfer(value: _72.MsgForceTransfer): {
                        typeUrl: string;
                        value: _72.MsgForceTransfer;
                    };
                };
                fromJSON: {
                    createDenom(value: any): {
                        typeUrl: string;
                        value: _72.MsgCreateDenom;
                    };
                    mint(value: any): {
                        typeUrl: string;
                        value: _72.MsgMint;
                    };
                    burn(value: any): {
                        typeUrl: string;
                        value: _72.MsgBurn;
                    };
                    changeAdmin(value: any): {
                        typeUrl: string;
                        value: _72.MsgChangeAdmin;
                    };
                    setDenomMetadata(value: any): {
                        typeUrl: string;
                        value: _72.MsgSetDenomMetadata;
                    };
                    forceTransfer(value: any): {
                        typeUrl: string;
                        value: _72.MsgForceTransfer;
                    };
                };
                fromPartial: {
                    createDenom(value: _72.MsgCreateDenom): {
                        typeUrl: string;
                        value: _72.MsgCreateDenom;
                    };
                    mint(value: _72.MsgMint): {
                        typeUrl: string;
                        value: _72.MsgMint;
                    };
                    burn(value: _72.MsgBurn): {
                        typeUrl: string;
                        value: _72.MsgBurn;
                    };
                    changeAdmin(value: _72.MsgChangeAdmin): {
                        typeUrl: string;
                        value: _72.MsgChangeAdmin;
                    };
                    setDenomMetadata(value: _72.MsgSetDenomMetadata): {
                        typeUrl: string;
                        value: _72.MsgSetDenomMetadata;
                    };
                    forceTransfer(value: _72.MsgForceTransfer): {
                        typeUrl: string;
                        value: _72.MsgForceTransfer;
                    };
                };
            };
            AminoConverter: {
                "/osmosis.tokenfactory.v1beta1.MsgCreateDenom": {
                    aminoType: string;
                    toAmino: ({ sender, subdenom }: _72.MsgCreateDenom) => {
                        sender: string;
                        subdenom: string;
                    };
                    fromAmino: ({ sender, subdenom }: {
                        sender: string;
                        subdenom: string;
                    }) => _72.MsgCreateDenom;
                };
                "/osmosis.tokenfactory.v1beta1.MsgMint": {
                    aminoType: string;
                    toAmino: ({ sender, amount, mintToAddress }: _72.MsgMint) => {
                        sender: string;
                        amount: {
                            denom: string;
                            amount: string;
                        };
                        mintToAddress: string;
                    };
                    fromAmino: ({ sender, amount, mintToAddress }: {
                        sender: string;
                        amount: {
                            denom: string;
                            amount: string;
                        };
                        mintToAddress: string;
                    }) => _72.MsgMint;
                };
                "/osmosis.tokenfactory.v1beta1.MsgBurn": {
                    aminoType: string;
                    toAmino: ({ sender, amount, burnFromAddress }: _72.MsgBurn) => {
                        sender: string;
                        amount: {
                            denom: string;
                            amount: string;
                        };
                        burnFromAddress: string;
                    };
                    fromAmino: ({ sender, amount, burnFromAddress }: {
                        sender: string;
                        amount: {
                            denom: string;
                            amount: string;
                        };
                        burnFromAddress: string;
                    }) => _72.MsgBurn;
                };
                "/osmosis.tokenfactory.v1beta1.MsgChangeAdmin": {
                    aminoType: string;
                    toAmino: ({ sender, denom, newAdmin }: _72.MsgChangeAdmin) => {
                        sender: string;
                        denom: string;
                        new_admin: string;
                    };
                    fromAmino: ({ sender, denom, new_admin }: {
                        sender: string;
                        denom: string;
                        new_admin: string;
                    }) => _72.MsgChangeAdmin;
                };
                "/osmosis.tokenfactory.v1beta1.MsgSetDenomMetadata": {
                    aminoType: string;
                    toAmino: ({ sender, metadata }: _72.MsgSetDenomMetadata) => {
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
                        };
                    }) => _72.MsgSetDenomMetadata;
                };
                "/osmosis.tokenfactory.v1beta1.MsgForceTransfer": {
                    aminoType: string;
                    toAmino: ({ sender, amount, transferFromAddress, transferToAddress }: _72.MsgForceTransfer) => {
                        sender: string;
                        amount: {
                            denom: string;
                            amount: string;
                        };
                        transferFromAddress: string;
                        transferToAddress: string;
                    };
                    fromAmino: ({ sender, amount, transferFromAddress, transferToAddress }: {
                        sender: string;
                        amount: {
                            denom: string;
                            amount: string;
                        };
                        transferFromAddress: string;
                        transferToAddress: string;
                    }) => _72.MsgForceTransfer;
                };
            };
            MsgCreateDenom: {
                encode(message: _72.MsgCreateDenom, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _72.MsgCreateDenom;
                fromPartial(object: Partial<_72.MsgCreateDenom>): _72.MsgCreateDenom;
            };
            MsgCreateDenomResponse: {
                encode(message: _72.MsgCreateDenomResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _72.MsgCreateDenomResponse;
                fromPartial(object: Partial<_72.MsgCreateDenomResponse>): _72.MsgCreateDenomResponse;
            };
            MsgMint: {
                encode(message: _72.MsgMint, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _72.MsgMint;
                fromPartial(object: Partial<_72.MsgMint>): _72.MsgMint;
            };
            MsgMintResponse: {
                encode(_: _72.MsgMintResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _72.MsgMintResponse;
                fromPartial(_: Partial<_72.MsgMintResponse>): _72.MsgMintResponse;
            };
            MsgBurn: {
                encode(message: _72.MsgBurn, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _72.MsgBurn;
                fromPartial(object: Partial<_72.MsgBurn>): _72.MsgBurn;
            };
            MsgBurnResponse: {
                encode(_: _72.MsgBurnResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _72.MsgBurnResponse;
                fromPartial(_: Partial<_72.MsgBurnResponse>): _72.MsgBurnResponse;
            };
            MsgChangeAdmin: {
                encode(message: _72.MsgChangeAdmin, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _72.MsgChangeAdmin;
                fromPartial(object: Partial<_72.MsgChangeAdmin>): _72.MsgChangeAdmin;
            };
            MsgChangeAdminResponse: {
                encode(_: _72.MsgChangeAdminResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _72.MsgChangeAdminResponse;
                fromPartial(_: Partial<_72.MsgChangeAdminResponse>): _72.MsgChangeAdminResponse;
            };
            MsgSetDenomMetadata: {
                encode(message: _72.MsgSetDenomMetadata, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _72.MsgSetDenomMetadata;
                fromPartial(object: Partial<_72.MsgSetDenomMetadata>): _72.MsgSetDenomMetadata;
            };
            MsgSetDenomMetadataResponse: {
                encode(_: _72.MsgSetDenomMetadataResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _72.MsgSetDenomMetadataResponse;
                fromPartial(_: Partial<_72.MsgSetDenomMetadataResponse>): _72.MsgSetDenomMetadataResponse;
            };
            MsgForceTransfer: {
                encode(message: _72.MsgForceTransfer, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _72.MsgForceTransfer;
                fromPartial(object: Partial<_72.MsgForceTransfer>): _72.MsgForceTransfer;
            };
            MsgForceTransferResponse: {
                encode(_: _72.MsgForceTransferResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _72.MsgForceTransferResponse;
                fromPartial(_: Partial<_72.MsgForceTransferResponse>): _72.MsgForceTransferResponse;
            };
            QueryParamsRequest: {
                encode(_: _71.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _71.QueryParamsRequest;
                fromPartial(_: Partial<_71.QueryParamsRequest>): _71.QueryParamsRequest;
            };
            QueryParamsResponse: {
                encode(message: _71.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _71.QueryParamsResponse;
                fromPartial(object: Partial<_71.QueryParamsResponse>): _71.QueryParamsResponse;
            };
            QueryDenomAuthorityMetadataRequest: {
                encode(message: _71.QueryDenomAuthorityMetadataRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _71.QueryDenomAuthorityMetadataRequest;
                fromPartial(object: Partial<_71.QueryDenomAuthorityMetadataRequest>): _71.QueryDenomAuthorityMetadataRequest;
            };
            QueryDenomAuthorityMetadataResponse: {
                encode(message: _71.QueryDenomAuthorityMetadataResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _71.QueryDenomAuthorityMetadataResponse;
                fromPartial(object: Partial<_71.QueryDenomAuthorityMetadataResponse>): _71.QueryDenomAuthorityMetadataResponse;
            };
            QueryDenomsFromCreatorRequest: {
                encode(message: _71.QueryDenomsFromCreatorRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _71.QueryDenomsFromCreatorRequest;
                fromPartial(object: Partial<_71.QueryDenomsFromCreatorRequest>): _71.QueryDenomsFromCreatorRequest;
            };
            QueryDenomsFromCreatorResponse: {
                encode(message: _71.QueryDenomsFromCreatorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _71.QueryDenomsFromCreatorResponse;
                fromPartial(object: Partial<_71.QueryDenomsFromCreatorResponse>): _71.QueryDenomsFromCreatorResponse;
            };
            Params: {
                encode(message: _70.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _70.Params;
                fromPartial(object: Partial<_70.Params>): _70.Params;
            };
            GenesisState: {
                encode(message: _69.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _69.GenesisState;
                fromPartial(object: Partial<_69.GenesisState>): _69.GenesisState;
            };
            GenesisDenom: {
                encode(message: _69.GenesisDenom, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _69.GenesisDenom;
                fromPartial(object: Partial<_69.GenesisDenom>): _69.GenesisDenom;
            };
            DenomAuthorityMetadata: {
                encode(message: _68.DenomAuthorityMetadata, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _68.DenomAuthorityMetadata;
                fromPartial(object: Partial<_68.DenomAuthorityMetadata>): _68.DenomAuthorityMetadata;
            };
        };
    }
    namespace twap {
        const v1beta1: {
            QueryClientImpl: typeof _223.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                params(request?: _74.ParamsRequest): Promise<_74.ParamsResponse>;
                arithmeticTwap(request: _74.ArithmeticTwapRequest): Promise<_74.ArithmeticTwapResponse>;
                arithmeticTwapToNow(request: _74.ArithmeticTwapToNowRequest): Promise<_74.ArithmeticTwapToNowResponse>;
                geometricTwap(request: _74.GeometricTwapRequest): Promise<_74.GeometricTwapResponse>;
                geometricTwapToNow(request: _74.GeometricTwapToNowRequest): Promise<_74.GeometricTwapToNowResponse>;
            };
            TwapRecord: {
                encode(message: _75.TwapRecord, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _75.TwapRecord;
                fromPartial(object: Partial<_75.TwapRecord>): _75.TwapRecord;
            };
            ArithmeticTwapRequest: {
                encode(message: _74.ArithmeticTwapRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _74.ArithmeticTwapRequest;
                fromPartial(object: Partial<_74.ArithmeticTwapRequest>): _74.ArithmeticTwapRequest;
            };
            ArithmeticTwapResponse: {
                encode(message: _74.ArithmeticTwapResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _74.ArithmeticTwapResponse;
                fromPartial(object: Partial<_74.ArithmeticTwapResponse>): _74.ArithmeticTwapResponse;
            };
            ArithmeticTwapToNowRequest: {
                encode(message: _74.ArithmeticTwapToNowRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _74.ArithmeticTwapToNowRequest;
                fromPartial(object: Partial<_74.ArithmeticTwapToNowRequest>): _74.ArithmeticTwapToNowRequest;
            };
            ArithmeticTwapToNowResponse: {
                encode(message: _74.ArithmeticTwapToNowResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _74.ArithmeticTwapToNowResponse;
                fromPartial(object: Partial<_74.ArithmeticTwapToNowResponse>): _74.ArithmeticTwapToNowResponse;
            };
            GeometricTwapRequest: {
                encode(message: _74.GeometricTwapRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _74.GeometricTwapRequest;
                fromPartial(object: Partial<_74.GeometricTwapRequest>): _74.GeometricTwapRequest;
            };
            GeometricTwapResponse: {
                encode(message: _74.GeometricTwapResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _74.GeometricTwapResponse;
                fromPartial(object: Partial<_74.GeometricTwapResponse>): _74.GeometricTwapResponse;
            };
            GeometricTwapToNowRequest: {
                encode(message: _74.GeometricTwapToNowRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _74.GeometricTwapToNowRequest;
                fromPartial(object: Partial<_74.GeometricTwapToNowRequest>): _74.GeometricTwapToNowRequest;
            };
            GeometricTwapToNowResponse: {
                encode(message: _74.GeometricTwapToNowResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _74.GeometricTwapToNowResponse;
                fromPartial(object: Partial<_74.GeometricTwapToNowResponse>): _74.GeometricTwapToNowResponse;
            };
            ParamsRequest: {
                encode(_: _74.ParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _74.ParamsRequest;
                fromPartial(_: Partial<_74.ParamsRequest>): _74.ParamsRequest;
            };
            ParamsResponse: {
                encode(message: _74.ParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _74.ParamsResponse;
                fromPartial(object: Partial<_74.ParamsResponse>): _74.ParamsResponse;
            };
            Params: {
                encode(message: _73.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _73.Params;
                fromPartial(object: Partial<_73.Params>): _73.Params;
            };
            GenesisState: {
                encode(message: _73.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _73.GenesisState;
                fromPartial(object: Partial<_73.GenesisState>): _73.GenesisState;
            };
        };
    }
    namespace txfees {
        const v1beta1: {
            QueryClientImpl: typeof _224.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                feeTokens(request?: _79.QueryFeeTokensRequest): Promise<_79.QueryFeeTokensResponse>;
                denomSpotPrice(request: _79.QueryDenomSpotPriceRequest): Promise<_79.QueryDenomSpotPriceResponse>;
                denomPoolId(request: _79.QueryDenomPoolIdRequest): Promise<_79.QueryDenomPoolIdResponse>;
                baseDenom(request?: _79.QueryBaseDenomRequest): Promise<_79.QueryBaseDenomResponse>;
            };
            QueryFeeTokensRequest: {
                encode(_: _79.QueryFeeTokensRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _79.QueryFeeTokensRequest;
                fromPartial(_: Partial<_79.QueryFeeTokensRequest>): _79.QueryFeeTokensRequest;
            };
            QueryFeeTokensResponse: {
                encode(message: _79.QueryFeeTokensResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _79.QueryFeeTokensResponse;
                fromPartial(object: Partial<_79.QueryFeeTokensResponse>): _79.QueryFeeTokensResponse;
            };
            QueryDenomSpotPriceRequest: {
                encode(message: _79.QueryDenomSpotPriceRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _79.QueryDenomSpotPriceRequest;
                fromPartial(object: Partial<_79.QueryDenomSpotPriceRequest>): _79.QueryDenomSpotPriceRequest;
            };
            QueryDenomSpotPriceResponse: {
                encode(message: _79.QueryDenomSpotPriceResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _79.QueryDenomSpotPriceResponse;
                fromPartial(object: Partial<_79.QueryDenomSpotPriceResponse>): _79.QueryDenomSpotPriceResponse;
            };
            QueryDenomPoolIdRequest: {
                encode(message: _79.QueryDenomPoolIdRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _79.QueryDenomPoolIdRequest;
                fromPartial(object: Partial<_79.QueryDenomPoolIdRequest>): _79.QueryDenomPoolIdRequest;
            };
            QueryDenomPoolIdResponse: {
                encode(message: _79.QueryDenomPoolIdResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _79.QueryDenomPoolIdResponse;
                fromPartial(object: Partial<_79.QueryDenomPoolIdResponse>): _79.QueryDenomPoolIdResponse;
            };
            QueryBaseDenomRequest: {
                encode(_: _79.QueryBaseDenomRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _79.QueryBaseDenomRequest;
                fromPartial(_: Partial<_79.QueryBaseDenomRequest>): _79.QueryBaseDenomRequest;
            };
            QueryBaseDenomResponse: {
                encode(message: _79.QueryBaseDenomResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _79.QueryBaseDenomResponse;
                fromPartial(object: Partial<_79.QueryBaseDenomResponse>): _79.QueryBaseDenomResponse;
            };
            UpdateFeeTokenProposal: {
                encode(message: _78.UpdateFeeTokenProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _78.UpdateFeeTokenProposal;
                fromPartial(object: Partial<_78.UpdateFeeTokenProposal>): _78.UpdateFeeTokenProposal;
            };
            GenesisState: {
                encode(message: _77.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _77.GenesisState;
                fromPartial(object: Partial<_77.GenesisState>): _77.GenesisState;
            };
            FeeToken: {
                encode(message: _76.FeeToken, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _76.FeeToken;
                fromPartial(object: Partial<_76.FeeToken>): _76.FeeToken;
            };
        };
    }
    namespace valsetpref {
        const v1beta1: {
            MsgClientImpl: typeof _237.MsgClientImpl;
            QueryClientImpl: typeof _225.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                userValidatorPreferences(request: _80.UserValidatorPreferencesRequest): Promise<_80.UserValidatorPreferencesResponse>;
            };
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    setValidatorSetPreference(value: _82.MsgSetValidatorSetPreference): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    delegateToValidatorSet(value: _82.MsgDelegateToValidatorSet): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    undelegateFromValidatorSet(value: _82.MsgUndelegateFromValidatorSet): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    redelegateValidatorSet(value: _82.MsgRedelegateValidatorSet): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    withdrawDelegationRewards(value: _82.MsgWithdrawDelegationRewards): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    delegateBondedTokens(value: _82.MsgDelegateBondedTokens): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    setValidatorSetPreference(value: _82.MsgSetValidatorSetPreference): {
                        typeUrl: string;
                        value: _82.MsgSetValidatorSetPreference;
                    };
                    delegateToValidatorSet(value: _82.MsgDelegateToValidatorSet): {
                        typeUrl: string;
                        value: _82.MsgDelegateToValidatorSet;
                    };
                    undelegateFromValidatorSet(value: _82.MsgUndelegateFromValidatorSet): {
                        typeUrl: string;
                        value: _82.MsgUndelegateFromValidatorSet;
                    };
                    redelegateValidatorSet(value: _82.MsgRedelegateValidatorSet): {
                        typeUrl: string;
                        value: _82.MsgRedelegateValidatorSet;
                    };
                    withdrawDelegationRewards(value: _82.MsgWithdrawDelegationRewards): {
                        typeUrl: string;
                        value: _82.MsgWithdrawDelegationRewards;
                    };
                    delegateBondedTokens(value: _82.MsgDelegateBondedTokens): {
                        typeUrl: string;
                        value: _82.MsgDelegateBondedTokens;
                    };
                };
                fromJSON: {
                    setValidatorSetPreference(value: any): {
                        typeUrl: string;
                        value: _82.MsgSetValidatorSetPreference;
                    };
                    delegateToValidatorSet(value: any): {
                        typeUrl: string;
                        value: _82.MsgDelegateToValidatorSet;
                    };
                    undelegateFromValidatorSet(value: any): {
                        typeUrl: string;
                        value: _82.MsgUndelegateFromValidatorSet;
                    };
                    redelegateValidatorSet(value: any): {
                        typeUrl: string;
                        value: _82.MsgRedelegateValidatorSet;
                    };
                    withdrawDelegationRewards(value: any): {
                        typeUrl: string;
                        value: _82.MsgWithdrawDelegationRewards;
                    };
                    delegateBondedTokens(value: any): {
                        typeUrl: string;
                        value: _82.MsgDelegateBondedTokens;
                    };
                };
                fromPartial: {
                    setValidatorSetPreference(value: _82.MsgSetValidatorSetPreference): {
                        typeUrl: string;
                        value: _82.MsgSetValidatorSetPreference;
                    };
                    delegateToValidatorSet(value: _82.MsgDelegateToValidatorSet): {
                        typeUrl: string;
                        value: _82.MsgDelegateToValidatorSet;
                    };
                    undelegateFromValidatorSet(value: _82.MsgUndelegateFromValidatorSet): {
                        typeUrl: string;
                        value: _82.MsgUndelegateFromValidatorSet;
                    };
                    redelegateValidatorSet(value: _82.MsgRedelegateValidatorSet): {
                        typeUrl: string;
                        value: _82.MsgRedelegateValidatorSet;
                    };
                    withdrawDelegationRewards(value: _82.MsgWithdrawDelegationRewards): {
                        typeUrl: string;
                        value: _82.MsgWithdrawDelegationRewards;
                    };
                    delegateBondedTokens(value: _82.MsgDelegateBondedTokens): {
                        typeUrl: string;
                        value: _82.MsgDelegateBondedTokens;
                    };
                };
            };
            AminoConverter: {
                "/osmosis.valsetpref.v1beta1.MsgSetValidatorSetPreference": {
                    aminoType: string;
                    toAmino: ({ delegator, preferences }: _82.MsgSetValidatorSetPreference) => {
                        delegator: string;
                        preferences: {
                            val_oper_address: string;
                            weight: string;
                        }[];
                    };
                    fromAmino: ({ delegator, preferences }: {
                        delegator: string;
                        preferences: {
                            val_oper_address: string;
                            weight: string;
                        }[];
                    }) => _82.MsgSetValidatorSetPreference;
                };
                "/osmosis.valsetpref.v1beta1.MsgDelegateToValidatorSet": {
                    aminoType: string;
                    toAmino: ({ delegator, coin }: _82.MsgDelegateToValidatorSet) => {
                        delegator: string;
                        coin: {
                            denom: string;
                            amount: string;
                        };
                    };
                    fromAmino: ({ delegator, coin }: {
                        delegator: string;
                        coin: {
                            denom: string;
                            amount: string;
                        };
                    }) => _82.MsgDelegateToValidatorSet;
                };
                "/osmosis.valsetpref.v1beta1.MsgUndelegateFromValidatorSet": {
                    aminoType: string;
                    toAmino: ({ delegator, coin }: _82.MsgUndelegateFromValidatorSet) => {
                        delegator: string;
                        coin: {
                            denom: string;
                            amount: string;
                        };
                    };
                    fromAmino: ({ delegator, coin }: {
                        delegator: string;
                        coin: {
                            denom: string;
                            amount: string;
                        };
                    }) => _82.MsgUndelegateFromValidatorSet;
                };
                "/osmosis.valsetpref.v1beta1.MsgRedelegateValidatorSet": {
                    aminoType: string;
                    toAmino: ({ delegator, preferences }: _82.MsgRedelegateValidatorSet) => {
                        delegator: string;
                        preferences: {
                            val_oper_address: string;
                            weight: string;
                        }[];
                    };
                    fromAmino: ({ delegator, preferences }: {
                        delegator: string;
                        preferences: {
                            val_oper_address: string;
                            weight: string;
                        }[];
                    }) => _82.MsgRedelegateValidatorSet;
                };
                "/osmosis.valsetpref.v1beta1.MsgWithdrawDelegationRewards": {
                    aminoType: string;
                    toAmino: ({ delegator }: _82.MsgWithdrawDelegationRewards) => {
                        delegator: string;
                    };
                    fromAmino: ({ delegator }: {
                        delegator: string;
                    }) => _82.MsgWithdrawDelegationRewards;
                };
                "/osmosis.valsetpref.v1beta1.MsgDelegateBondedTokens": {
                    aminoType: string;
                    toAmino: ({ delegator, lockID }: _82.MsgDelegateBondedTokens) => {
                        delegator: string;
                        lockID: string;
                    };
                    fromAmino: ({ delegator, lockID }: {
                        delegator: string;
                        lockID: string;
                    }) => _82.MsgDelegateBondedTokens;
                };
            };
            MsgSetValidatorSetPreference: {
                encode(message: _82.MsgSetValidatorSetPreference, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _82.MsgSetValidatorSetPreference;
                fromPartial(object: Partial<_82.MsgSetValidatorSetPreference>): _82.MsgSetValidatorSetPreference;
            };
            MsgSetValidatorSetPreferenceResponse: {
                encode(_: _82.MsgSetValidatorSetPreferenceResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _82.MsgSetValidatorSetPreferenceResponse;
                fromPartial(_: Partial<_82.MsgSetValidatorSetPreferenceResponse>): _82.MsgSetValidatorSetPreferenceResponse;
            };
            MsgDelegateToValidatorSet: {
                encode(message: _82.MsgDelegateToValidatorSet, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _82.MsgDelegateToValidatorSet;
                fromPartial(object: Partial<_82.MsgDelegateToValidatorSet>): _82.MsgDelegateToValidatorSet;
            };
            MsgDelegateToValidatorSetResponse: {
                encode(_: _82.MsgDelegateToValidatorSetResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _82.MsgDelegateToValidatorSetResponse;
                fromPartial(_: Partial<_82.MsgDelegateToValidatorSetResponse>): _82.MsgDelegateToValidatorSetResponse;
            };
            MsgUndelegateFromValidatorSet: {
                encode(message: _82.MsgUndelegateFromValidatorSet, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _82.MsgUndelegateFromValidatorSet;
                fromPartial(object: Partial<_82.MsgUndelegateFromValidatorSet>): _82.MsgUndelegateFromValidatorSet;
            };
            MsgUndelegateFromValidatorSetResponse: {
                encode(_: _82.MsgUndelegateFromValidatorSetResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _82.MsgUndelegateFromValidatorSetResponse;
                fromPartial(_: Partial<_82.MsgUndelegateFromValidatorSetResponse>): _82.MsgUndelegateFromValidatorSetResponse;
            };
            MsgRedelegateValidatorSet: {
                encode(message: _82.MsgRedelegateValidatorSet, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _82.MsgRedelegateValidatorSet;
                fromPartial(object: Partial<_82.MsgRedelegateValidatorSet>): _82.MsgRedelegateValidatorSet;
            };
            MsgRedelegateValidatorSetResponse: {
                encode(_: _82.MsgRedelegateValidatorSetResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _82.MsgRedelegateValidatorSetResponse;
                fromPartial(_: Partial<_82.MsgRedelegateValidatorSetResponse>): _82.MsgRedelegateValidatorSetResponse;
            };
            MsgWithdrawDelegationRewards: {
                encode(message: _82.MsgWithdrawDelegationRewards, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _82.MsgWithdrawDelegationRewards;
                fromPartial(object: Partial<_82.MsgWithdrawDelegationRewards>): _82.MsgWithdrawDelegationRewards;
            };
            MsgWithdrawDelegationRewardsResponse: {
                encode(_: _82.MsgWithdrawDelegationRewardsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _82.MsgWithdrawDelegationRewardsResponse;
                fromPartial(_: Partial<_82.MsgWithdrawDelegationRewardsResponse>): _82.MsgWithdrawDelegationRewardsResponse;
            };
            MsgDelegateBondedTokens: {
                encode(message: _82.MsgDelegateBondedTokens, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _82.MsgDelegateBondedTokens;
                fromPartial(object: Partial<_82.MsgDelegateBondedTokens>): _82.MsgDelegateBondedTokens;
            };
            MsgDelegateBondedTokensResponse: {
                encode(_: _82.MsgDelegateBondedTokensResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _82.MsgDelegateBondedTokensResponse;
                fromPartial(_: Partial<_82.MsgDelegateBondedTokensResponse>): _82.MsgDelegateBondedTokensResponse;
            };
            ValidatorPreference: {
                encode(message: _81.ValidatorPreference, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _81.ValidatorPreference;
                fromPartial(object: Partial<_81.ValidatorPreference>): _81.ValidatorPreference;
            };
            ValidatorSetPreferences: {
                encode(message: _81.ValidatorSetPreferences, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _81.ValidatorSetPreferences;
                fromPartial(object: Partial<_81.ValidatorSetPreferences>): _81.ValidatorSetPreferences;
            };
            UserValidatorPreferencesRequest: {
                encode(message: _80.UserValidatorPreferencesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _80.UserValidatorPreferencesRequest;
                fromPartial(object: Partial<_80.UserValidatorPreferencesRequest>): _80.UserValidatorPreferencesRequest;
            };
            UserValidatorPreferencesResponse: {
                encode(message: _80.UserValidatorPreferencesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _80.UserValidatorPreferencesResponse;
                fromPartial(object: Partial<_80.UserValidatorPreferencesResponse>): _80.UserValidatorPreferencesResponse;
            };
        };
    }
    const ClientFactory: {
        createRPCMsgClient: ({ rpc }: {
            rpc: import("../helpers").Rpc;
        }) => Promise<{
            osmosis: {
                concentratedliquidity: {
                    poolmodel: {
                        concentrated: {
                            v1beta1: _226.MsgClientImpl;
                        };
                    };
                    v1beta1: _227.MsgClientImpl;
                };
                gamm: {
                    poolmodels: {
                        balancer: {
                            v1beta1: _228.MsgClientImpl;
                        };
                        stableswap: {
                            v1beta1: _229.MsgClientImpl;
                        };
                    };
                    v1beta1: _230.MsgClientImpl;
                };
                incentives: _231.MsgClientImpl;
                lockup: _232.MsgClientImpl;
                poolmanager: {
                    v1beta1: _233.MsgClientImpl;
                };
                protorev: {
                    v1beta1: _234.MsgClientImpl;
                };
                superfluid: _235.MsgClientImpl;
                tokenfactory: {
                    v1beta1: _236.MsgClientImpl;
                };
                valsetpref: {
                    v1beta1: _237.MsgClientImpl;
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
                        pools(request?: _13.PoolsRequest): Promise<_13.PoolsResponse>;
                        params(request?: _13.ParamsRequest): Promise<_13.ParamsResponse>;
                        contractInfoByPoolId(request: _13.ContractInfoByPoolIdRequest): Promise<_13.ContractInfoByPoolIdResponse>;
                    };
                };
                downtimedetector: {
                    v1beta1: {
                        recoveredSinceDowntimeOfLength(request: _17.RecoveredSinceDowntimeOfLengthRequest): Promise<_17.RecoveredSinceDowntimeOfLengthResponse>;
                    };
                };
                epochs: {
                    v1beta1: {
                        epochInfos(request?: _19.QueryEpochsInfoRequest): Promise<_19.QueryEpochsInfoResponse>;
                        currentEpoch(request: _19.QueryCurrentEpochRequest): Promise<_19.QueryCurrentEpochResponse>;
                    };
                };
                gamm: {
                    v1beta1: {
                        pools(request?: _23.QueryPoolsRequest): Promise<_23.QueryPoolsResponse>;
                        numPools(request?: _23.QueryNumPoolsRequest): Promise<_23.QueryNumPoolsResponse>;
                        totalLiquidity(request?: _23.QueryTotalLiquidityRequest): Promise<_23.QueryTotalLiquidityResponse>;
                        poolsWithFilter(request: _23.QueryPoolsWithFilterRequest): Promise<_23.QueryPoolsWithFilterResponse>;
                        pool(request: _23.QueryPoolRequest): Promise<_23.QueryPoolResponse>;
                        poolType(request: _23.QueryPoolTypeRequest): Promise<_23.QueryPoolTypeResponse>;
                        calcJoinPoolNoSwapShares(request: _23.QueryCalcJoinPoolNoSwapSharesRequest): Promise<_23.QueryCalcJoinPoolNoSwapSharesResponse>;
                        calcJoinPoolShares(request: _23.QueryCalcJoinPoolSharesRequest): Promise<_23.QueryCalcJoinPoolSharesResponse>;
                        calcExitPoolCoinsFromShares(request: _23.QueryCalcExitPoolCoinsFromSharesRequest): Promise<_23.QueryCalcExitPoolCoinsFromSharesResponse>;
                        poolParams(request: _23.QueryPoolParamsRequest): Promise<_23.QueryPoolParamsResponse>;
                        totalPoolLiquidity(request: _23.QueryTotalPoolLiquidityRequest): Promise<_23.QueryTotalPoolLiquidityResponse>;
                        totalShares(request: _23.QueryTotalSharesRequest): Promise<_23.QueryTotalSharesResponse>;
                        spotPrice(request: _23.QuerySpotPriceRequest): Promise<_23.QuerySpotPriceResponse>;
                        estimateSwapExactAmountIn(request: _23.QuerySwapExactAmountInRequest): Promise<_23.QuerySwapExactAmountInResponse>;
                        estimateSwapExactAmountOut(request: _23.QuerySwapExactAmountOutRequest): Promise<_23.QuerySwapExactAmountOutResponse>;
                        concentratedPoolIdLinkFromCFMM(request: _23.QueryConcentratedPoolIdLinkFromCFMMRequest): Promise<_23.QueryConcentratedPoolIdLinkFromCFMMResponse>;
                    };
                    v2: {
                        spotPrice(request: _29.QuerySpotPriceRequest): Promise<_29.QuerySpotPriceResponse>;
                    };
                };
                ibcratelimit: {
                    v1beta1: {
                        params(request?: _32.ParamsRequest): Promise<_32.ParamsResponse>;
                    };
                };
                incentives: {
                    moduleToDistributeCoins(request?: _36.ModuleToDistributeCoinsRequest): Promise<_36.ModuleToDistributeCoinsResponse>;
                    gaugeByID(request: _36.GaugeByIDRequest): Promise<_36.GaugeByIDResponse>;
                    gauges(request?: _36.GaugesRequest): Promise<_36.GaugesResponse>;
                    activeGauges(request?: _36.ActiveGaugesRequest): Promise<_36.ActiveGaugesResponse>;
                    activeGaugesPerDenom(request: _36.ActiveGaugesPerDenomRequest): Promise<_36.ActiveGaugesPerDenomResponse>;
                    upcomingGauges(request?: _36.UpcomingGaugesRequest): Promise<_36.UpcomingGaugesResponse>;
                    upcomingGaugesPerDenom(request: _36.UpcomingGaugesPerDenomRequest): Promise<_36.UpcomingGaugesPerDenomResponse>;
                    rewardsEst(request: _36.RewardsEstRequest): Promise<_36.RewardsEstResponse>;
                    lockableDurations(request?: _36.QueryLockableDurationsRequest): Promise<_36.QueryLockableDurationsResponse>;
                };
                lockup: {
                    moduleBalance(request?: _41.ModuleBalanceRequest): Promise<_41.ModuleBalanceResponse>;
                    moduleLockedAmount(request?: _41.ModuleLockedAmountRequest): Promise<_41.ModuleLockedAmountResponse>;
                    accountUnlockableCoins(request: _41.AccountUnlockableCoinsRequest): Promise<_41.AccountUnlockableCoinsResponse>;
                    accountUnlockingCoins(request: _41.AccountUnlockingCoinsRequest): Promise<_41.AccountUnlockingCoinsResponse>;
                    accountLockedCoins(request: _41.AccountLockedCoinsRequest): Promise<_41.AccountLockedCoinsResponse>;
                    accountLockedPastTime(request: _41.AccountLockedPastTimeRequest): Promise<_41.AccountLockedPastTimeResponse>;
                    accountLockedPastTimeNotUnlockingOnly(request: _41.AccountLockedPastTimeNotUnlockingOnlyRequest): Promise<_41.AccountLockedPastTimeNotUnlockingOnlyResponse>;
                    accountUnlockedBeforeTime(request: _41.AccountUnlockedBeforeTimeRequest): Promise<_41.AccountUnlockedBeforeTimeResponse>;
                    accountLockedPastTimeDenom(request: _41.AccountLockedPastTimeDenomRequest): Promise<_41.AccountLockedPastTimeDenomResponse>;
                    lockedDenom(request: _41.LockedDenomRequest): Promise<_41.LockedDenomResponse>;
                    lockedByID(request: _41.LockedRequest): Promise<_41.LockedResponse>;
                    lockRewardReceiver(request: _41.LockRewardReceiverRequest): Promise<_41.LockRewardReceiverResponse>;
                    nextLockID(request?: _41.NextLockIDRequest): Promise<_41.NextLockIDResponse>;
                    syntheticLockupsByLockupID(request: _41.SyntheticLockupsByLockupIDRequest): Promise<_41.SyntheticLockupsByLockupIDResponse>;
                    syntheticLockupByLockupID(request: _41.SyntheticLockupByLockupIDRequest): Promise<_41.SyntheticLockupByLockupIDResponse>;
                    accountLockedLongerDuration(request: _41.AccountLockedLongerDurationRequest): Promise<_41.AccountLockedLongerDurationResponse>;
                    accountLockedDuration(request: _41.AccountLockedDurationRequest): Promise<_41.AccountLockedDurationResponse>;
                    accountLockedLongerDurationNotUnlockingOnly(request: _41.AccountLockedLongerDurationNotUnlockingOnlyRequest): Promise<_41.AccountLockedLongerDurationNotUnlockingOnlyResponse>;
                    accountLockedLongerDurationDenom(request: _41.AccountLockedLongerDurationDenomRequest): Promise<_41.AccountLockedLongerDurationDenomResponse>;
                    params(request?: _41.QueryParamsRequest): Promise<_41.QueryParamsResponse>;
                };
                mint: {
                    v1beta1: {
                        params(request?: _45.QueryParamsRequest): Promise<_45.QueryParamsResponse>;
                        epochProvisions(request?: _45.QueryEpochProvisionsRequest): Promise<_45.QueryEpochProvisionsResponse>;
                    };
                };
                poolincentives: {
                    v1beta1: {
                        gaugeIds(request: _49.QueryGaugeIdsRequest): Promise<_49.QueryGaugeIdsResponse>;
                        distrInfo(request?: _49.QueryDistrInfoRequest): Promise<_49.QueryDistrInfoResponse>;
                        params(request?: _49.QueryParamsRequest): Promise<_49.QueryParamsResponse>;
                        lockableDurations(request?: _49.QueryLockableDurationsRequest): Promise<_49.QueryLockableDurationsResponse>;
                        incentivizedPools(request?: _49.QueryIncentivizedPoolsRequest): Promise<_49.QueryIncentivizedPoolsResponse>;
                        externalIncentiveGauges(request?: _49.QueryExternalIncentiveGaugesRequest): Promise<_49.QueryExternalIncentiveGaugesResponse>;
                    };
                };
                poolmanager: {
                    v1beta1: {
                        params(request?: _53.ParamsRequest): Promise<_53.ParamsResponse>;
                        estimateSwapExactAmountIn(request: _53.EstimateSwapExactAmountInRequest): Promise<_53.EstimateSwapExactAmountInResponse>;
                        estimateSinglePoolSwapExactAmountIn(request: _53.EstimateSinglePoolSwapExactAmountInRequest): Promise<_53.EstimateSwapExactAmountInResponse>;
                        estimateSwapExactAmountOut(request: _53.EstimateSwapExactAmountOutRequest): Promise<_53.EstimateSwapExactAmountOutResponse>;
                        estimateSinglePoolSwapExactAmountOut(request: _53.EstimateSinglePoolSwapExactAmountOutRequest): Promise<_53.EstimateSwapExactAmountOutResponse>;
                        numPools(request?: _53.NumPoolsRequest): Promise<_53.NumPoolsResponse>;
                        pool(request: _53.PoolRequest): Promise<_53.PoolResponse>;
                        allPools(request?: _53.AllPoolsRequest): Promise<_53.AllPoolsResponse>;
                        spotPrice(request: _53.SpotPriceRequest): Promise<_53.SpotPriceResponse>;
                        totalPoolLiquidity(request: _53.TotalPoolLiquidityRequest): Promise<_53.TotalPoolLiquidityResponse>;
                        totalLiquidity(request?: _53.TotalLiquidityRequest): Promise<_53.TotalLiquidityResponse>;
                    };
                };
                protorev: {
                    v1beta1: {
                        params(request?: _60.QueryParamsRequest): Promise<_60.QueryParamsResponse>;
                        getProtoRevNumberOfTrades(request?: _60.QueryGetProtoRevNumberOfTradesRequest): Promise<_60.QueryGetProtoRevNumberOfTradesResponse>;
                        getProtoRevProfitsByDenom(request: _60.QueryGetProtoRevProfitsByDenomRequest): Promise<_60.QueryGetProtoRevProfitsByDenomResponse>;
                        getProtoRevAllProfits(request?: _60.QueryGetProtoRevAllProfitsRequest): Promise<_60.QueryGetProtoRevAllProfitsResponse>;
                        getProtoRevStatisticsByRoute(request: _60.QueryGetProtoRevStatisticsByRouteRequest): Promise<_60.QueryGetProtoRevStatisticsByRouteResponse>;
                        getProtoRevAllRouteStatistics(request?: _60.QueryGetProtoRevAllRouteStatisticsRequest): Promise<_60.QueryGetProtoRevAllRouteStatisticsResponse>;
                        getProtoRevTokenPairArbRoutes(request?: _60.QueryGetProtoRevTokenPairArbRoutesRequest): Promise<_60.QueryGetProtoRevTokenPairArbRoutesResponse>;
                        getProtoRevAdminAccount(request?: _60.QueryGetProtoRevAdminAccountRequest): Promise<_60.QueryGetProtoRevAdminAccountResponse>;
                        getProtoRevDeveloperAccount(request?: _60.QueryGetProtoRevDeveloperAccountRequest): Promise<_60.QueryGetProtoRevDeveloperAccountResponse>;
                        getProtoRevPoolWeights(request?: _60.QueryGetProtoRevPoolWeightsRequest): Promise<_60.QueryGetProtoRevPoolWeightsResponse>;
                        getProtoRevMaxPoolPointsPerTx(request?: _60.QueryGetProtoRevMaxPoolPointsPerTxRequest): Promise<_60.QueryGetProtoRevMaxPoolPointsPerTxResponse>;
                        getProtoRevMaxPoolPointsPerBlock(request?: _60.QueryGetProtoRevMaxPoolPointsPerBlockRequest): Promise<_60.QueryGetProtoRevMaxPoolPointsPerBlockResponse>;
                        getProtoRevBaseDenoms(request?: _60.QueryGetProtoRevBaseDenomsRequest): Promise<_60.QueryGetProtoRevBaseDenomsResponse>;
                        getProtoRevEnabled(request?: _60.QueryGetProtoRevEnabledRequest): Promise<_60.QueryGetProtoRevEnabledResponse>;
                        getProtoRevPool(request: _60.QueryGetProtoRevPoolRequest): Promise<_60.QueryGetProtoRevPoolResponse>;
                    };
                };
                superfluid: {
                    params(request?: _65.QueryParamsRequest): Promise<_65.QueryParamsResponse>;
                    assetType(request: _65.AssetTypeRequest): Promise<_65.AssetTypeResponse>;
                    allAssets(request?: _65.AllAssetsRequest): Promise<_65.AllAssetsResponse>;
                    assetMultiplier(request: _65.AssetMultiplierRequest): Promise<_65.AssetMultiplierResponse>;
                    allIntermediaryAccounts(request?: _65.AllIntermediaryAccountsRequest): Promise<_65.AllIntermediaryAccountsResponse>;
                    connectedIntermediaryAccount(request: _65.ConnectedIntermediaryAccountRequest): Promise<_65.ConnectedIntermediaryAccountResponse>;
                    totalDelegationByValidatorForDenom(request: _65.QueryTotalDelegationByValidatorForDenomRequest): Promise<_65.QueryTotalDelegationByValidatorForDenomResponse>;
                    totalSuperfluidDelegations(request?: _65.TotalSuperfluidDelegationsRequest): Promise<_65.TotalSuperfluidDelegationsResponse>;
                    superfluidDelegationAmount(request: _65.SuperfluidDelegationAmountRequest): Promise<_65.SuperfluidDelegationAmountResponse>;
                    superfluidDelegationsByDelegator(request: _65.SuperfluidDelegationsByDelegatorRequest): Promise<_65.SuperfluidDelegationsByDelegatorResponse>;
                    superfluidUndelegationsByDelegator(request: _65.SuperfluidUndelegationsByDelegatorRequest): Promise<_65.SuperfluidUndelegationsByDelegatorResponse>;
                    superfluidDelegationsByValidatorDenom(request: _65.SuperfluidDelegationsByValidatorDenomRequest): Promise<_65.SuperfluidDelegationsByValidatorDenomResponse>;
                    estimateSuperfluidDelegatedAmountByValidatorDenom(request: _65.EstimateSuperfluidDelegatedAmountByValidatorDenomRequest): Promise<_65.EstimateSuperfluidDelegatedAmountByValidatorDenomResponse>;
                    totalDelegationByDelegator(request: _65.QueryTotalDelegationByDelegatorRequest): Promise<_65.QueryTotalDelegationByDelegatorResponse>;
                    unpoolWhitelist(request?: _65.QueryUnpoolWhitelistRequest): Promise<_65.QueryUnpoolWhitelistResponse>;
                    userConcentratedSuperfluidPositionsDelegated(request: _65.UserConcentratedSuperfluidPositionsDelegatedRequest): Promise<_65.UserConcentratedSuperfluidPositionsDelegatedResponse>;
                    userConcentratedSuperfluidPositionsUndelegating(request: _65.UserConcentratedSuperfluidPositionsUndelegatingRequest): Promise<_65.UserConcentratedSuperfluidPositionsUndelegatingResponse>;
                };
                tokenfactory: {
                    v1beta1: {
                        params(request?: _71.QueryParamsRequest): Promise<_71.QueryParamsResponse>;
                        denomAuthorityMetadata(request: _71.QueryDenomAuthorityMetadataRequest): Promise<_71.QueryDenomAuthorityMetadataResponse>;
                        denomsFromCreator(request: _71.QueryDenomsFromCreatorRequest): Promise<_71.QueryDenomsFromCreatorResponse>;
                    };
                };
                twap: {
                    v1beta1: {
                        params(request?: _74.ParamsRequest): Promise<_74.ParamsResponse>;
                        arithmeticTwap(request: _74.ArithmeticTwapRequest): Promise<_74.ArithmeticTwapResponse>;
                        arithmeticTwapToNow(request: _74.ArithmeticTwapToNowRequest): Promise<_74.ArithmeticTwapToNowResponse>;
                        geometricTwap(request: _74.GeometricTwapRequest): Promise<_74.GeometricTwapResponse>;
                        geometricTwapToNow(request: _74.GeometricTwapToNowRequest): Promise<_74.GeometricTwapToNowResponse>;
                    };
                };
                txfees: {
                    v1beta1: {
                        feeTokens(request?: _79.QueryFeeTokensRequest): Promise<_79.QueryFeeTokensResponse>;
                        denomSpotPrice(request: _79.QueryDenomSpotPriceRequest): Promise<_79.QueryDenomSpotPriceResponse>;
                        denomPoolId(request: _79.QueryDenomPoolIdRequest): Promise<_79.QueryDenomPoolIdResponse>;
                        baseDenom(request?: _79.QueryBaseDenomRequest): Promise<_79.QueryBaseDenomResponse>;
                    };
                };
                valsetpref: {
                    v1beta1: {
                        userValidatorPreferences(request: _80.UserValidatorPreferencesRequest): Promise<_80.UserValidatorPreferencesResponse>;
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
    };
}
