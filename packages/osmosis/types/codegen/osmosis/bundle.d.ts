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
import * as _30 from "./ibc-hooks/genesis";
import * as _31 from "./ibc-hooks/params";
import * as _32 from "./ibc-hooks/tx";
import * as _33 from "./ibc-rate-limit/v1beta1/genesis";
import * as _34 from "./ibc-rate-limit/v1beta1/params";
import * as _35 from "./ibc-rate-limit/v1beta1/query";
import * as _36 from "./incentives/gauge";
import * as _37 from "./incentives/genesis";
import * as _38 from "./incentives/params";
import * as _39 from "./incentives/query";
import * as _40 from "./incentives/tx";
import * as _41 from "./lockup/genesis";
import * as _42 from "./lockup/lock";
import * as _43 from "./lockup/params";
import * as _44 from "./lockup/query";
import * as _45 from "./lockup/tx";
import * as _46 from "./mint/v1beta1/genesis";
import * as _47 from "./mint/v1beta1/mint";
import * as _48 from "./mint/v1beta1/query";
import * as _49 from "./pool-incentives/v1beta1/genesis";
import * as _50 from "./pool-incentives/v1beta1/gov";
import * as _51 from "./pool-incentives/v1beta1/incentives";
import * as _52 from "./pool-incentives/v1beta1/query";
import * as _53 from "./pool-incentives/v1beta1/shared";
import * as _54 from "./poolmanager/v1beta1/genesis";
import * as _55 from "./poolmanager/v1beta1/gov";
import * as _56 from "./poolmanager/v1beta1/module_route";
import * as _57 from "./poolmanager/v1beta1/query";
import * as _58 from "./poolmanager/v1beta1/swap_route";
import * as _59 from "./poolmanager/v1beta1/tx";
import * as _60 from "./protorev/v1beta1/genesis";
import * as _61 from "./protorev/v1beta1/gov";
import * as _62 from "./protorev/v1beta1/params";
import * as _63 from "./protorev/v1beta1/protorev";
import * as _64 from "./protorev/v1beta1/query";
import * as _65 from "./protorev/v1beta1/tx";
import * as _66 from "./sumtree/v1beta1/tree";
import * as _67 from "./superfluid/genesis";
import * as _68 from "./superfluid/params";
import * as _69 from "./superfluid/query";
import * as _70 from "./superfluid/superfluid";
import * as _71 from "./superfluid/tx";
import * as _72 from "./tokenfactory/v1beta1/authorityMetadata";
import * as _73 from "./tokenfactory/v1beta1/genesis";
import * as _74 from "./tokenfactory/v1beta1/params";
import * as _75 from "./tokenfactory/v1beta1/query";
import * as _76 from "./tokenfactory/v1beta1/tx";
import * as _77 from "./twap/v1beta1/genesis";
import * as _78 from "./twap/v1beta1/query";
import * as _79 from "./twap/v1beta1/twap_record";
import * as _80 from "./txfees/v1beta1/feetoken";
import * as _81 from "./txfees/v1beta1/genesis";
import * as _82 from "./txfees/v1beta1/gov";
import * as _83 from "./txfees/v1beta1/query";
import * as _84 from "./valset-pref/v1beta1/query";
import * as _85 from "./valset-pref/v1beta1/state";
import * as _86 from "./valset-pref/v1beta1/tx";
import * as _215 from "./concentrated-liquidity/query.lcd";
import * as _216 from "./cosmwasmpool/v1beta1/query.lcd";
import * as _217 from "./downtime-detector/v1beta1/query.lcd";
import * as _218 from "./epochs/query.lcd";
import * as _219 from "./gamm/v1beta1/query.lcd";
import * as _220 from "./gamm/v2/query.lcd";
import * as _221 from "./ibc-rate-limit/v1beta1/query.lcd";
import * as _222 from "./incentives/query.lcd";
import * as _223 from "./lockup/query.lcd";
import * as _224 from "./mint/v1beta1/query.lcd";
import * as _225 from "./pool-incentives/v1beta1/query.lcd";
import * as _226 from "./poolmanager/v1beta1/query.lcd";
import * as _227 from "./protorev/v1beta1/query.lcd";
import * as _228 from "./superfluid/query.lcd";
import * as _229 from "./tokenfactory/v1beta1/query.lcd";
import * as _230 from "./twap/v1beta1/query.lcd";
import * as _231 from "./txfees/v1beta1/query.lcd";
import * as _232 from "./valset-pref/v1beta1/query.lcd";
import * as _233 from "./concentrated-liquidity/query.rpc.Query";
import * as _234 from "./cosmwasmpool/v1beta1/query.rpc.Query";
import * as _235 from "./downtime-detector/v1beta1/query.rpc.Query";
import * as _236 from "./epochs/query.rpc.Query";
import * as _237 from "./gamm/v1beta1/query.rpc.Query";
import * as _238 from "./gamm/v2/query.rpc.Query";
import * as _239 from "./ibc-rate-limit/v1beta1/query.rpc.Query";
import * as _240 from "./incentives/query.rpc.Query";
import * as _241 from "./lockup/query.rpc.Query";
import * as _242 from "./mint/v1beta1/query.rpc.Query";
import * as _243 from "./pool-incentives/v1beta1/query.rpc.Query";
import * as _244 from "./poolmanager/v1beta1/query.rpc.Query";
import * as _245 from "./protorev/v1beta1/query.rpc.Query";
import * as _246 from "./superfluid/query.rpc.Query";
import * as _247 from "./tokenfactory/v1beta1/query.rpc.Query";
import * as _248 from "./twap/v1beta1/query.rpc.Query";
import * as _249 from "./txfees/v1beta1/query.rpc.Query";
import * as _250 from "./valset-pref/v1beta1/query.rpc.Query";
import * as _251 from "./concentrated-liquidity/pool-model/concentrated/tx.rpc.msg";
import * as _252 from "./concentrated-liquidity/tx.rpc.msg";
import * as _253 from "./gamm/pool-models/balancer/tx/tx.rpc.msg";
import * as _254 from "./gamm/pool-models/stableswap/tx.rpc.msg";
import * as _255 from "./gamm/v1beta1/tx.rpc.msg";
import * as _256 from "./ibc-hooks/tx.rpc.msg";
import * as _257 from "./incentives/tx.rpc.msg";
import * as _258 from "./lockup/tx.rpc.msg";
import * as _259 from "./poolmanager/v1beta1/tx.rpc.msg";
import * as _260 from "./protorev/v1beta1/tx.rpc.msg";
import * as _261 from "./superfluid/tx.rpc.msg";
import * as _262 from "./tokenfactory/v1beta1/tx.rpc.msg";
import * as _263 from "./valset-pref/v1beta1/tx.rpc.msg";
export declare namespace osmosis {
    namespace accum {
        const v1beta1: {
            AccumulatorContent: {
                typeUrl: string;
                encode(message: _1.AccumulatorContent, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _1.AccumulatorContent;
                fromPartial(object: Partial<_1.AccumulatorContent>): _1.AccumulatorContent;
                fromAmino(object: _1.AccumulatorContentAmino): _1.AccumulatorContent;
                toAmino(message: _1.AccumulatorContent): _1.AccumulatorContentAmino;
                fromAminoMsg(object: _1.AccumulatorContentAminoMsg): _1.AccumulatorContent;
                toAminoMsg(message: _1.AccumulatorContent): _1.AccumulatorContentAminoMsg;
                fromProtoMsg(message: _1.AccumulatorContentProtoMsg): _1.AccumulatorContent;
                toProto(message: _1.AccumulatorContent): Uint8Array;
                toProtoMsg(message: _1.AccumulatorContent): _1.AccumulatorContentProtoMsg;
            };
            Options: {
                typeUrl: string;
                encode(_: _1.Options, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _1.Options;
                fromPartial(_: Partial<_1.Options>): _1.Options;
                fromAmino(_: _1.OptionsAmino): _1.Options;
                toAmino(_: _1.Options): _1.OptionsAmino;
                fromAminoMsg(object: _1.OptionsAminoMsg): _1.Options;
                toAminoMsg(message: _1.Options): _1.OptionsAminoMsg;
                fromProtoMsg(message: _1.OptionsProtoMsg): _1.Options;
                toProto(message: _1.Options): Uint8Array;
                toProtoMsg(message: _1.Options): _1.OptionsProtoMsg;
            };
            Record: {
                typeUrl: string;
                encode(message: _1.Record, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _1.Record;
                fromPartial(object: Partial<_1.Record>): _1.Record;
                fromAmino(object: _1.RecordAmino): _1.Record;
                toAmino(message: _1.Record): _1.RecordAmino;
                fromAminoMsg(object: _1.RecordAminoMsg): _1.Record;
                toAminoMsg(message: _1.Record): _1.RecordAminoMsg;
                fromProtoMsg(message: _1.RecordProtoMsg): _1.Record;
                toProto(message: _1.Record): Uint8Array;
                toProtoMsg(message: _1.Record): _1.RecordProtoMsg;
            };
        };
    }
    const concentratedliquidity: {
        poolmodel: {
            concentrated: {
                v1beta1: {
                    MsgClientImpl: typeof _251.MsgClientImpl;
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
                            toAmino: (message: import("./concentrated-liquidity/pool-model/concentrated/tx").MsgCreateConcentratedPool) => import("./concentrated-liquidity/pool-model/concentrated/tx").MsgCreateConcentratedPoolAmino;
                            fromAmino: (object: import("./concentrated-liquidity/pool-model/concentrated/tx").MsgCreateConcentratedPoolAmino) => import("./concentrated-liquidity/pool-model/concentrated/tx").MsgCreateConcentratedPool;
                        };
                    };
                };
            };
        };
        v1beta1: {
            MsgClientImpl: typeof _252.MsgClientImpl;
            QueryClientImpl: typeof _233.QueryClientImpl;
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
            LCDQueryClient: typeof _215.LCDQueryClient;
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
                    toAmino: (message: import("./concentrated-liquidity/tx").MsgCreatePosition) => import("./concentrated-liquidity/tx").MsgCreatePositionAmino;
                    fromAmino: (object: import("./concentrated-liquidity/tx").MsgCreatePositionAmino) => import("./concentrated-liquidity/tx").MsgCreatePosition;
                };
                "/osmosis.concentratedliquidity.v1beta1.MsgWithdrawPosition": {
                    aminoType: string;
                    toAmino: (message: import("./concentrated-liquidity/tx").MsgWithdrawPosition) => import("./concentrated-liquidity/tx").MsgWithdrawPositionAmino;
                    fromAmino: (object: import("./concentrated-liquidity/tx").MsgWithdrawPositionAmino) => import("./concentrated-liquidity/tx").MsgWithdrawPosition;
                };
                "/osmosis.concentratedliquidity.v1beta1.MsgAddToPosition": {
                    aminoType: string;
                    toAmino: (message: import("./concentrated-liquidity/tx").MsgAddToPosition) => import("./concentrated-liquidity/tx").MsgAddToPositionAmino;
                    fromAmino: (object: import("./concentrated-liquidity/tx").MsgAddToPositionAmino) => import("./concentrated-liquidity/tx").MsgAddToPosition;
                };
                "/osmosis.concentratedliquidity.v1beta1.MsgCollectSpreadRewards": {
                    aminoType: string;
                    toAmino: (message: import("./concentrated-liquidity/tx").MsgCollectSpreadRewards) => import("./concentrated-liquidity/tx").MsgCollectSpreadRewardsAmino;
                    fromAmino: (object: import("./concentrated-liquidity/tx").MsgCollectSpreadRewardsAmino) => import("./concentrated-liquidity/tx").MsgCollectSpreadRewards;
                };
                "/osmosis.concentratedliquidity.v1beta1.MsgCollectIncentives": {
                    aminoType: string;
                    toAmino: (message: import("./concentrated-liquidity/tx").MsgCollectIncentives) => import("./concentrated-liquidity/tx").MsgCollectIncentivesAmino;
                    fromAmino: (object: import("./concentrated-liquidity/tx").MsgCollectIncentivesAmino) => import("./concentrated-liquidity/tx").MsgCollectIncentives;
                };
            };
        };
        Params: {
            typeUrl: string;
            encode(message: _2.Params, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _2.Params;
            fromPartial(object: Partial<_2.Params>): _2.Params;
            fromAmino(object: _2.ParamsAmino): _2.Params;
            toAmino(message: _2.Params): _2.ParamsAmino;
            fromAminoMsg(object: _2.ParamsAminoMsg): _2.Params;
            toAminoMsg(message: _2.Params): _2.ParamsAminoMsg;
            fromProtoMsg(message: _2.ParamsProtoMsg): _2.Params;
            toProto(message: _2.Params): Uint8Array;
            toProtoMsg(message: _2.Params): _2.ParamsProtoMsg;
        };
    };
    namespace cosmwasmpool {
        const v1beta1: {
            QueryClientImpl: typeof _234.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                pools(request?: _13.PoolsRequest): Promise<_13.PoolsResponse>;
                params(request?: _13.ParamsRequest): Promise<_13.ParamsResponse>;
                contractInfoByPoolId(request: _13.ContractInfoByPoolIdRequest): Promise<_13.ContractInfoByPoolIdResponse>;
            };
            LCDQueryClient: typeof _216.LCDQueryClient;
            ParamsRequest: {
                typeUrl: string;
                encode(_: _13.ParamsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _13.ParamsRequest;
                fromPartial(_: Partial<_13.ParamsRequest>): _13.ParamsRequest;
                fromAmino(_: _13.ParamsRequestAmino): _13.ParamsRequest;
                toAmino(_: _13.ParamsRequest): _13.ParamsRequestAmino;
                fromAminoMsg(object: _13.ParamsRequestAminoMsg): _13.ParamsRequest;
                toAminoMsg(message: _13.ParamsRequest): _13.ParamsRequestAminoMsg;
                fromProtoMsg(message: _13.ParamsRequestProtoMsg): _13.ParamsRequest;
                toProto(message: _13.ParamsRequest): Uint8Array;
                toProtoMsg(message: _13.ParamsRequest): _13.ParamsRequestProtoMsg;
            };
            ParamsResponse: {
                typeUrl: string;
                encode(message: _13.ParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _13.ParamsResponse;
                fromPartial(object: Partial<_13.ParamsResponse>): _13.ParamsResponse;
                fromAmino(object: _13.ParamsResponseAmino): _13.ParamsResponse;
                toAmino(message: _13.ParamsResponse): _13.ParamsResponseAmino;
                fromAminoMsg(object: _13.ParamsResponseAminoMsg): _13.ParamsResponse;
                toAminoMsg(message: _13.ParamsResponse): _13.ParamsResponseAminoMsg;
                fromProtoMsg(message: _13.ParamsResponseProtoMsg): _13.ParamsResponse;
                toProto(message: _13.ParamsResponse): Uint8Array;
                toProtoMsg(message: _13.ParamsResponse): _13.ParamsResponseProtoMsg;
            };
            PoolsRequest: {
                typeUrl: string;
                encode(message: _13.PoolsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _13.PoolsRequest;
                fromPartial(object: Partial<_13.PoolsRequest>): _13.PoolsRequest;
                fromAmino(object: _13.PoolsRequestAmino): _13.PoolsRequest;
                toAmino(message: _13.PoolsRequest): _13.PoolsRequestAmino;
                fromAminoMsg(object: _13.PoolsRequestAminoMsg): _13.PoolsRequest;
                toAminoMsg(message: _13.PoolsRequest): _13.PoolsRequestAminoMsg;
                fromProtoMsg(message: _13.PoolsRequestProtoMsg): _13.PoolsRequest;
                toProto(message: _13.PoolsRequest): Uint8Array;
                toProtoMsg(message: _13.PoolsRequest): _13.PoolsRequestProtoMsg;
            };
            PoolsResponse: {
                typeUrl: string;
                encode(message: _13.PoolsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _13.PoolsResponse;
                fromPartial(object: Partial<_13.PoolsResponse>): _13.PoolsResponse;
                fromAmino(object: _13.PoolsResponseAmino): _13.PoolsResponse;
                toAmino(message: _13.PoolsResponse): _13.PoolsResponseAmino;
                fromAminoMsg(object: _13.PoolsResponseAminoMsg): _13.PoolsResponse;
                toAminoMsg(message: _13.PoolsResponse): _13.PoolsResponseAminoMsg;
                fromProtoMsg(message: _13.PoolsResponseProtoMsg): _13.PoolsResponse;
                toProto(message: _13.PoolsResponse): Uint8Array;
                toProtoMsg(message: _13.PoolsResponse): _13.PoolsResponseProtoMsg;
            };
            ContractInfoByPoolIdRequest: {
                typeUrl: string;
                encode(message: _13.ContractInfoByPoolIdRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _13.ContractInfoByPoolIdRequest;
                fromPartial(object: Partial<_13.ContractInfoByPoolIdRequest>): _13.ContractInfoByPoolIdRequest;
                fromAmino(object: _13.ContractInfoByPoolIdRequestAmino): _13.ContractInfoByPoolIdRequest;
                toAmino(message: _13.ContractInfoByPoolIdRequest): _13.ContractInfoByPoolIdRequestAmino;
                fromAminoMsg(object: _13.ContractInfoByPoolIdRequestAminoMsg): _13.ContractInfoByPoolIdRequest;
                toAminoMsg(message: _13.ContractInfoByPoolIdRequest): _13.ContractInfoByPoolIdRequestAminoMsg;
                fromProtoMsg(message: _13.ContractInfoByPoolIdRequestProtoMsg): _13.ContractInfoByPoolIdRequest;
                toProto(message: _13.ContractInfoByPoolIdRequest): Uint8Array;
                toProtoMsg(message: _13.ContractInfoByPoolIdRequest): _13.ContractInfoByPoolIdRequestProtoMsg;
            };
            ContractInfoByPoolIdResponse: {
                typeUrl: string;
                encode(message: _13.ContractInfoByPoolIdResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _13.ContractInfoByPoolIdResponse;
                fromPartial(object: Partial<_13.ContractInfoByPoolIdResponse>): _13.ContractInfoByPoolIdResponse;
                fromAmino(object: _13.ContractInfoByPoolIdResponseAmino): _13.ContractInfoByPoolIdResponse;
                toAmino(message: _13.ContractInfoByPoolIdResponse): _13.ContractInfoByPoolIdResponseAmino;
                fromAminoMsg(object: _13.ContractInfoByPoolIdResponseAminoMsg): _13.ContractInfoByPoolIdResponse;
                toAminoMsg(message: _13.ContractInfoByPoolIdResponse): _13.ContractInfoByPoolIdResponseAminoMsg;
                fromProtoMsg(message: _13.ContractInfoByPoolIdResponseProtoMsg): _13.ContractInfoByPoolIdResponse;
                toProto(message: _13.ContractInfoByPoolIdResponse): Uint8Array;
                toProtoMsg(message: _13.ContractInfoByPoolIdResponse): _13.ContractInfoByPoolIdResponseProtoMsg;
            };
            PoolI_InterfaceDecoder: (input: Uint8Array | import("..").BinaryReader) => import("../google/protobuf/any").Any | import("./concentrated-liquidity/pool").Pool | _9.CosmWasmPool | _20.Pool | _27.Pool;
            PoolI_FromAmino: (content: import("../google/protobuf/any").AnyAmino) => import("../google/protobuf/any").Any;
            PoolI_ToAmino: (content: import("../google/protobuf/any").Any) => import("../google/protobuf/any").AnyAmino;
            Params: {
                typeUrl: string;
                encode(message: _12.Params, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _12.Params;
                fromPartial(object: Partial<_12.Params>): _12.Params;
                fromAmino(object: _12.ParamsAmino): _12.Params;
                toAmino(message: _12.Params): _12.ParamsAmino;
                fromAminoMsg(object: _12.ParamsAminoMsg): _12.Params;
                toAminoMsg(message: _12.Params): _12.ParamsAminoMsg;
                fromProtoMsg(message: _12.ParamsProtoMsg): _12.Params;
                toProto(message: _12.Params): Uint8Array;
                toProtoMsg(message: _12.Params): _12.ParamsProtoMsg;
            };
            MsgCreateCosmWasmPool: {
                typeUrl: string;
                encode(message: _11.MsgCreateCosmWasmPool, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _11.MsgCreateCosmWasmPool;
                fromPartial(object: Partial<_11.MsgCreateCosmWasmPool>): _11.MsgCreateCosmWasmPool;
                fromAmino(object: _11.MsgCreateCosmWasmPoolAmino): _11.MsgCreateCosmWasmPool;
                toAmino(message: _11.MsgCreateCosmWasmPool): _11.MsgCreateCosmWasmPoolAmino;
                fromAminoMsg(object: _11.MsgCreateCosmWasmPoolAminoMsg): _11.MsgCreateCosmWasmPool;
                toAminoMsg(message: _11.MsgCreateCosmWasmPool): _11.MsgCreateCosmWasmPoolAminoMsg;
                fromProtoMsg(message: _11.MsgCreateCosmWasmPoolProtoMsg): _11.MsgCreateCosmWasmPool;
                toProto(message: _11.MsgCreateCosmWasmPool): Uint8Array;
                toProtoMsg(message: _11.MsgCreateCosmWasmPool): _11.MsgCreateCosmWasmPoolProtoMsg;
            };
            MsgCreateCosmWasmPoolResponse: {
                typeUrl: string;
                encode(message: _11.MsgCreateCosmWasmPoolResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _11.MsgCreateCosmWasmPoolResponse;
                fromPartial(object: Partial<_11.MsgCreateCosmWasmPoolResponse>): _11.MsgCreateCosmWasmPoolResponse;
                fromAmino(object: _11.MsgCreateCosmWasmPoolResponseAmino): _11.MsgCreateCosmWasmPoolResponse;
                toAmino(message: _11.MsgCreateCosmWasmPoolResponse): _11.MsgCreateCosmWasmPoolResponseAmino;
                fromAminoMsg(object: _11.MsgCreateCosmWasmPoolResponseAminoMsg): _11.MsgCreateCosmWasmPoolResponse;
                toAminoMsg(message: _11.MsgCreateCosmWasmPoolResponse): _11.MsgCreateCosmWasmPoolResponseAminoMsg;
                fromProtoMsg(message: _11.MsgCreateCosmWasmPoolResponseProtoMsg): _11.MsgCreateCosmWasmPoolResponse;
                toProto(message: _11.MsgCreateCosmWasmPoolResponse): Uint8Array;
                toProtoMsg(message: _11.MsgCreateCosmWasmPoolResponse): _11.MsgCreateCosmWasmPoolResponseProtoMsg;
            };
            EmptyRequest: {
                typeUrl: string;
                encode(_: _10.EmptyRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _10.EmptyRequest;
                fromPartial(_: Partial<_10.EmptyRequest>): _10.EmptyRequest;
                fromAmino(_: _10.EmptyRequestAmino): _10.EmptyRequest;
                toAmino(_: _10.EmptyRequest): _10.EmptyRequestAmino;
                fromAminoMsg(object: _10.EmptyRequestAminoMsg): _10.EmptyRequest;
                toAminoMsg(message: _10.EmptyRequest): _10.EmptyRequestAminoMsg;
                fromProtoMsg(message: _10.EmptyRequestProtoMsg): _10.EmptyRequest;
                toProto(message: _10.EmptyRequest): Uint8Array;
                toProtoMsg(message: _10.EmptyRequest): _10.EmptyRequestProtoMsg;
            };
            JoinPoolExecuteMsgRequest: {
                typeUrl: string;
                encode(message: _10.JoinPoolExecuteMsgRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _10.JoinPoolExecuteMsgRequest;
                fromPartial(object: Partial<_10.JoinPoolExecuteMsgRequest>): _10.JoinPoolExecuteMsgRequest;
                fromAmino(object: _10.JoinPoolExecuteMsgRequestAmino): _10.JoinPoolExecuteMsgRequest;
                toAmino(message: _10.JoinPoolExecuteMsgRequest): _10.JoinPoolExecuteMsgRequestAmino;
                fromAminoMsg(object: _10.JoinPoolExecuteMsgRequestAminoMsg): _10.JoinPoolExecuteMsgRequest;
                toAminoMsg(message: _10.JoinPoolExecuteMsgRequest): _10.JoinPoolExecuteMsgRequestAminoMsg;
                fromProtoMsg(message: _10.JoinPoolExecuteMsgRequestProtoMsg): _10.JoinPoolExecuteMsgRequest;
                toProto(message: _10.JoinPoolExecuteMsgRequest): Uint8Array;
                toProtoMsg(message: _10.JoinPoolExecuteMsgRequest): _10.JoinPoolExecuteMsgRequestProtoMsg;
            };
            JoinPoolExecuteMsgResponse: {
                typeUrl: string;
                encode(_: _10.JoinPoolExecuteMsgResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _10.JoinPoolExecuteMsgResponse;
                fromPartial(_: Partial<_10.JoinPoolExecuteMsgResponse>): _10.JoinPoolExecuteMsgResponse;
                fromAmino(_: _10.JoinPoolExecuteMsgResponseAmino): _10.JoinPoolExecuteMsgResponse;
                toAmino(_: _10.JoinPoolExecuteMsgResponse): _10.JoinPoolExecuteMsgResponseAmino;
                fromAminoMsg(object: _10.JoinPoolExecuteMsgResponseAminoMsg): _10.JoinPoolExecuteMsgResponse;
                toAminoMsg(message: _10.JoinPoolExecuteMsgResponse): _10.JoinPoolExecuteMsgResponseAminoMsg;
                fromProtoMsg(message: _10.JoinPoolExecuteMsgResponseProtoMsg): _10.JoinPoolExecuteMsgResponse;
                toProto(message: _10.JoinPoolExecuteMsgResponse): Uint8Array;
                toProtoMsg(message: _10.JoinPoolExecuteMsgResponse): _10.JoinPoolExecuteMsgResponseProtoMsg;
            };
            ExitPoolExecuteMsgRequest: {
                typeUrl: string;
                encode(message: _10.ExitPoolExecuteMsgRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _10.ExitPoolExecuteMsgRequest;
                fromPartial(object: Partial<_10.ExitPoolExecuteMsgRequest>): _10.ExitPoolExecuteMsgRequest;
                fromAmino(object: _10.ExitPoolExecuteMsgRequestAmino): _10.ExitPoolExecuteMsgRequest;
                toAmino(message: _10.ExitPoolExecuteMsgRequest): _10.ExitPoolExecuteMsgRequestAmino;
                fromAminoMsg(object: _10.ExitPoolExecuteMsgRequestAminoMsg): _10.ExitPoolExecuteMsgRequest;
                toAminoMsg(message: _10.ExitPoolExecuteMsgRequest): _10.ExitPoolExecuteMsgRequestAminoMsg;
                fromProtoMsg(message: _10.ExitPoolExecuteMsgRequestProtoMsg): _10.ExitPoolExecuteMsgRequest;
                toProto(message: _10.ExitPoolExecuteMsgRequest): Uint8Array;
                toProtoMsg(message: _10.ExitPoolExecuteMsgRequest): _10.ExitPoolExecuteMsgRequestProtoMsg;
            };
            ExitPoolExecuteMsgResponse: {
                typeUrl: string;
                encode(_: _10.ExitPoolExecuteMsgResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _10.ExitPoolExecuteMsgResponse;
                fromPartial(_: Partial<_10.ExitPoolExecuteMsgResponse>): _10.ExitPoolExecuteMsgResponse;
                fromAmino(_: _10.ExitPoolExecuteMsgResponseAmino): _10.ExitPoolExecuteMsgResponse;
                toAmino(_: _10.ExitPoolExecuteMsgResponse): _10.ExitPoolExecuteMsgResponseAmino;
                fromAminoMsg(object: _10.ExitPoolExecuteMsgResponseAminoMsg): _10.ExitPoolExecuteMsgResponse;
                toAminoMsg(message: _10.ExitPoolExecuteMsgResponse): _10.ExitPoolExecuteMsgResponseAminoMsg;
                fromProtoMsg(message: _10.ExitPoolExecuteMsgResponseProtoMsg): _10.ExitPoolExecuteMsgResponse;
                toProto(message: _10.ExitPoolExecuteMsgResponse): Uint8Array;
                toProtoMsg(message: _10.ExitPoolExecuteMsgResponse): _10.ExitPoolExecuteMsgResponseProtoMsg;
            };
            CosmWasmPool: {
                typeUrl: string;
                encode(message: _9.CosmWasmPool, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _9.CosmWasmPool;
                fromPartial(object: Partial<_9.CosmWasmPool>): _9.CosmWasmPool;
                fromAmino(object: _9.CosmWasmPoolAmino): _9.CosmWasmPool;
                toAmino(message: _9.CosmWasmPool): _9.CosmWasmPoolAmino;
                fromAminoMsg(object: _9.CosmWasmPoolAminoMsg): _9.CosmWasmPool;
                toAminoMsg(message: _9.CosmWasmPool): _9.CosmWasmPoolAminoMsg;
                fromProtoMsg(message: _9.CosmWasmPoolProtoMsg): _9.CosmWasmPool;
                toProto(message: _9.CosmWasmPool): Uint8Array;
                toProtoMsg(message: _9.CosmWasmPool): _9.CosmWasmPoolProtoMsg;
            };
            GetSwapFeeQueryMsg: {
                typeUrl: string;
                encode(message: _8.GetSwapFeeQueryMsg, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _8.GetSwapFeeQueryMsg;
                fromPartial(object: Partial<_8.GetSwapFeeQueryMsg>): _8.GetSwapFeeQueryMsg;
                fromAmino(object: _8.GetSwapFeeQueryMsgAmino): _8.GetSwapFeeQueryMsg;
                toAmino(message: _8.GetSwapFeeQueryMsg): _8.GetSwapFeeQueryMsgAmino;
                fromAminoMsg(object: _8.GetSwapFeeQueryMsgAminoMsg): _8.GetSwapFeeQueryMsg;
                toAminoMsg(message: _8.GetSwapFeeQueryMsg): _8.GetSwapFeeQueryMsgAminoMsg;
                fromProtoMsg(message: _8.GetSwapFeeQueryMsgProtoMsg): _8.GetSwapFeeQueryMsg;
                toProto(message: _8.GetSwapFeeQueryMsg): Uint8Array;
                toProtoMsg(message: _8.GetSwapFeeQueryMsg): _8.GetSwapFeeQueryMsgProtoMsg;
            };
            GetSwapFeeQueryMsgResponse: {
                typeUrl: string;
                encode(message: _8.GetSwapFeeQueryMsgResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _8.GetSwapFeeQueryMsgResponse;
                fromPartial(object: Partial<_8.GetSwapFeeQueryMsgResponse>): _8.GetSwapFeeQueryMsgResponse;
                fromAmino(object: _8.GetSwapFeeQueryMsgResponseAmino): _8.GetSwapFeeQueryMsgResponse;
                toAmino(message: _8.GetSwapFeeQueryMsgResponse): _8.GetSwapFeeQueryMsgResponseAmino;
                fromAminoMsg(object: _8.GetSwapFeeQueryMsgResponseAminoMsg): _8.GetSwapFeeQueryMsgResponse;
                toAminoMsg(message: _8.GetSwapFeeQueryMsgResponse): _8.GetSwapFeeQueryMsgResponseAminoMsg;
                fromProtoMsg(message: _8.GetSwapFeeQueryMsgResponseProtoMsg): _8.GetSwapFeeQueryMsgResponse;
                toProto(message: _8.GetSwapFeeQueryMsgResponse): Uint8Array;
                toProtoMsg(message: _8.GetSwapFeeQueryMsgResponse): _8.GetSwapFeeQueryMsgResponseProtoMsg;
            };
            SpotPrice: {
                typeUrl: string;
                encode(message: _8.SpotPrice, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _8.SpotPrice;
                fromPartial(object: Partial<_8.SpotPrice>): _8.SpotPrice;
                fromAmino(object: _8.SpotPriceAmino): _8.SpotPrice;
                toAmino(message: _8.SpotPrice): _8.SpotPriceAmino;
                fromAminoMsg(object: _8.SpotPriceAminoMsg): _8.SpotPrice;
                toAminoMsg(message: _8.SpotPrice): _8.SpotPriceAminoMsg;
                fromProtoMsg(message: _8.SpotPriceProtoMsg): _8.SpotPrice;
                toProto(message: _8.SpotPrice): Uint8Array;
                toProtoMsg(message: _8.SpotPrice): _8.SpotPriceProtoMsg;
            };
            SpotPriceQueryMsg: {
                typeUrl: string;
                encode(message: _8.SpotPriceQueryMsg, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _8.SpotPriceQueryMsg;
                fromPartial(object: Partial<_8.SpotPriceQueryMsg>): _8.SpotPriceQueryMsg;
                fromAmino(object: _8.SpotPriceQueryMsgAmino): _8.SpotPriceQueryMsg;
                toAmino(message: _8.SpotPriceQueryMsg): _8.SpotPriceQueryMsgAmino;
                fromAminoMsg(object: _8.SpotPriceQueryMsgAminoMsg): _8.SpotPriceQueryMsg;
                toAminoMsg(message: _8.SpotPriceQueryMsg): _8.SpotPriceQueryMsgAminoMsg;
                fromProtoMsg(message: _8.SpotPriceQueryMsgProtoMsg): _8.SpotPriceQueryMsg;
                toProto(message: _8.SpotPriceQueryMsg): Uint8Array;
                toProtoMsg(message: _8.SpotPriceQueryMsg): _8.SpotPriceQueryMsgProtoMsg;
            };
            SpotPriceQueryMsgResponse: {
                typeUrl: string;
                encode(message: _8.SpotPriceQueryMsgResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _8.SpotPriceQueryMsgResponse;
                fromPartial(object: Partial<_8.SpotPriceQueryMsgResponse>): _8.SpotPriceQueryMsgResponse;
                fromAmino(object: _8.SpotPriceQueryMsgResponseAmino): _8.SpotPriceQueryMsgResponse;
                toAmino(message: _8.SpotPriceQueryMsgResponse): _8.SpotPriceQueryMsgResponseAmino;
                fromAminoMsg(object: _8.SpotPriceQueryMsgResponseAminoMsg): _8.SpotPriceQueryMsgResponse;
                toAminoMsg(message: _8.SpotPriceQueryMsgResponse): _8.SpotPriceQueryMsgResponseAminoMsg;
                fromProtoMsg(message: _8.SpotPriceQueryMsgResponseProtoMsg): _8.SpotPriceQueryMsgResponse;
                toProto(message: _8.SpotPriceQueryMsgResponse): Uint8Array;
                toProtoMsg(message: _8.SpotPriceQueryMsgResponse): _8.SpotPriceQueryMsgResponseProtoMsg;
            };
            EmptyStruct: {
                typeUrl: string;
                encode(_: _8.EmptyStruct, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _8.EmptyStruct;
                fromPartial(_: Partial<_8.EmptyStruct>): _8.EmptyStruct;
                fromAmino(_: _8.EmptyStructAmino): _8.EmptyStruct;
                toAmino(_: _8.EmptyStruct): _8.EmptyStructAmino;
                fromAminoMsg(object: _8.EmptyStructAminoMsg): _8.EmptyStruct;
                toAminoMsg(message: _8.EmptyStruct): _8.EmptyStructAminoMsg;
                fromProtoMsg(message: _8.EmptyStructProtoMsg): _8.EmptyStruct;
                toProto(message: _8.EmptyStruct): Uint8Array;
                toProtoMsg(message: _8.EmptyStruct): _8.EmptyStructProtoMsg;
            };
            GetTotalPoolLiquidityQueryMsg: {
                typeUrl: string;
                encode(message: _8.GetTotalPoolLiquidityQueryMsg, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _8.GetTotalPoolLiquidityQueryMsg;
                fromPartial(object: Partial<_8.GetTotalPoolLiquidityQueryMsg>): _8.GetTotalPoolLiquidityQueryMsg;
                fromAmino(object: _8.GetTotalPoolLiquidityQueryMsgAmino): _8.GetTotalPoolLiquidityQueryMsg;
                toAmino(message: _8.GetTotalPoolLiquidityQueryMsg): _8.GetTotalPoolLiquidityQueryMsgAmino;
                fromAminoMsg(object: _8.GetTotalPoolLiquidityQueryMsgAminoMsg): _8.GetTotalPoolLiquidityQueryMsg;
                toAminoMsg(message: _8.GetTotalPoolLiquidityQueryMsg): _8.GetTotalPoolLiquidityQueryMsgAminoMsg;
                fromProtoMsg(message: _8.GetTotalPoolLiquidityQueryMsgProtoMsg): _8.GetTotalPoolLiquidityQueryMsg;
                toProto(message: _8.GetTotalPoolLiquidityQueryMsg): Uint8Array;
                toProtoMsg(message: _8.GetTotalPoolLiquidityQueryMsg): _8.GetTotalPoolLiquidityQueryMsgProtoMsg;
            };
            GetTotalPoolLiquidityQueryMsgResponse: {
                typeUrl: string;
                encode(message: _8.GetTotalPoolLiquidityQueryMsgResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _8.GetTotalPoolLiquidityQueryMsgResponse;
                fromPartial(object: Partial<_8.GetTotalPoolLiquidityQueryMsgResponse>): _8.GetTotalPoolLiquidityQueryMsgResponse;
                fromAmino(object: _8.GetTotalPoolLiquidityQueryMsgResponseAmino): _8.GetTotalPoolLiquidityQueryMsgResponse;
                toAmino(message: _8.GetTotalPoolLiquidityQueryMsgResponse): _8.GetTotalPoolLiquidityQueryMsgResponseAmino;
                fromAminoMsg(object: _8.GetTotalPoolLiquidityQueryMsgResponseAminoMsg): _8.GetTotalPoolLiquidityQueryMsgResponse;
                toAminoMsg(message: _8.GetTotalPoolLiquidityQueryMsgResponse): _8.GetTotalPoolLiquidityQueryMsgResponseAminoMsg;
                fromProtoMsg(message: _8.GetTotalPoolLiquidityQueryMsgResponseProtoMsg): _8.GetTotalPoolLiquidityQueryMsgResponse;
                toProto(message: _8.GetTotalPoolLiquidityQueryMsgResponse): Uint8Array;
                toProtoMsg(message: _8.GetTotalPoolLiquidityQueryMsgResponse): _8.GetTotalPoolLiquidityQueryMsgResponseProtoMsg;
            };
            GetTotalSharesQueryMsg: {
                typeUrl: string;
                encode(message: _8.GetTotalSharesQueryMsg, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _8.GetTotalSharesQueryMsg;
                fromPartial(object: Partial<_8.GetTotalSharesQueryMsg>): _8.GetTotalSharesQueryMsg;
                fromAmino(object: _8.GetTotalSharesQueryMsgAmino): _8.GetTotalSharesQueryMsg;
                toAmino(message: _8.GetTotalSharesQueryMsg): _8.GetTotalSharesQueryMsgAmino;
                fromAminoMsg(object: _8.GetTotalSharesQueryMsgAminoMsg): _8.GetTotalSharesQueryMsg;
                toAminoMsg(message: _8.GetTotalSharesQueryMsg): _8.GetTotalSharesQueryMsgAminoMsg;
                fromProtoMsg(message: _8.GetTotalSharesQueryMsgProtoMsg): _8.GetTotalSharesQueryMsg;
                toProto(message: _8.GetTotalSharesQueryMsg): Uint8Array;
                toProtoMsg(message: _8.GetTotalSharesQueryMsg): _8.GetTotalSharesQueryMsgProtoMsg;
            };
            GetTotalSharesQueryMsgResponse: {
                typeUrl: string;
                encode(message: _8.GetTotalSharesQueryMsgResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _8.GetTotalSharesQueryMsgResponse;
                fromPartial(object: Partial<_8.GetTotalSharesQueryMsgResponse>): _8.GetTotalSharesQueryMsgResponse;
                fromAmino(object: _8.GetTotalSharesQueryMsgResponseAmino): _8.GetTotalSharesQueryMsgResponse;
                toAmino(message: _8.GetTotalSharesQueryMsgResponse): _8.GetTotalSharesQueryMsgResponseAmino;
                fromAminoMsg(object: _8.GetTotalSharesQueryMsgResponseAminoMsg): _8.GetTotalSharesQueryMsgResponse;
                toAminoMsg(message: _8.GetTotalSharesQueryMsgResponse): _8.GetTotalSharesQueryMsgResponseAminoMsg;
                fromProtoMsg(message: _8.GetTotalSharesQueryMsgResponseProtoMsg): _8.GetTotalSharesQueryMsgResponse;
                toProto(message: _8.GetTotalSharesQueryMsgResponse): Uint8Array;
                toProtoMsg(message: _8.GetTotalSharesQueryMsgResponse): _8.GetTotalSharesQueryMsgResponseProtoMsg;
            };
            SwapExactAmountIn: {
                typeUrl: string;
                encode(message: _7.SwapExactAmountIn, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _7.SwapExactAmountIn;
                fromPartial(object: Partial<_7.SwapExactAmountIn>): _7.SwapExactAmountIn;
                fromAmino(object: _7.SwapExactAmountInAmino): _7.SwapExactAmountIn;
                toAmino(message: _7.SwapExactAmountIn): _7.SwapExactAmountInAmino;
                fromAminoMsg(object: _7.SwapExactAmountInAminoMsg): _7.SwapExactAmountIn;
                toAminoMsg(message: _7.SwapExactAmountIn): _7.SwapExactAmountInAminoMsg;
                fromProtoMsg(message: _7.SwapExactAmountInProtoMsg): _7.SwapExactAmountIn;
                toProto(message: _7.SwapExactAmountIn): Uint8Array;
                toProtoMsg(message: _7.SwapExactAmountIn): _7.SwapExactAmountInProtoMsg;
            };
            SwapExactAmountInSudoMsg: {
                typeUrl: string;
                encode(message: _7.SwapExactAmountInSudoMsg, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _7.SwapExactAmountInSudoMsg;
                fromPartial(object: Partial<_7.SwapExactAmountInSudoMsg>): _7.SwapExactAmountInSudoMsg;
                fromAmino(object: _7.SwapExactAmountInSudoMsgAmino): _7.SwapExactAmountInSudoMsg;
                toAmino(message: _7.SwapExactAmountInSudoMsg): _7.SwapExactAmountInSudoMsgAmino;
                fromAminoMsg(object: _7.SwapExactAmountInSudoMsgAminoMsg): _7.SwapExactAmountInSudoMsg;
                toAminoMsg(message: _7.SwapExactAmountInSudoMsg): _7.SwapExactAmountInSudoMsgAminoMsg;
                fromProtoMsg(message: _7.SwapExactAmountInSudoMsgProtoMsg): _7.SwapExactAmountInSudoMsg;
                toProto(message: _7.SwapExactAmountInSudoMsg): Uint8Array;
                toProtoMsg(message: _7.SwapExactAmountInSudoMsg): _7.SwapExactAmountInSudoMsgProtoMsg;
            };
            SwapExactAmountInSudoMsgResponse: {
                typeUrl: string;
                encode(message: _7.SwapExactAmountInSudoMsgResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _7.SwapExactAmountInSudoMsgResponse;
                fromPartial(object: Partial<_7.SwapExactAmountInSudoMsgResponse>): _7.SwapExactAmountInSudoMsgResponse;
                fromAmino(object: _7.SwapExactAmountInSudoMsgResponseAmino): _7.SwapExactAmountInSudoMsgResponse;
                toAmino(message: _7.SwapExactAmountInSudoMsgResponse): _7.SwapExactAmountInSudoMsgResponseAmino;
                fromAminoMsg(object: _7.SwapExactAmountInSudoMsgResponseAminoMsg): _7.SwapExactAmountInSudoMsgResponse;
                toAminoMsg(message: _7.SwapExactAmountInSudoMsgResponse): _7.SwapExactAmountInSudoMsgResponseAminoMsg;
                fromProtoMsg(message: _7.SwapExactAmountInSudoMsgResponseProtoMsg): _7.SwapExactAmountInSudoMsgResponse;
                toProto(message: _7.SwapExactAmountInSudoMsgResponse): Uint8Array;
                toProtoMsg(message: _7.SwapExactAmountInSudoMsgResponse): _7.SwapExactAmountInSudoMsgResponseProtoMsg;
            };
            SwapExactAmountOut: {
                typeUrl: string;
                encode(message: _7.SwapExactAmountOut, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _7.SwapExactAmountOut;
                fromPartial(object: Partial<_7.SwapExactAmountOut>): _7.SwapExactAmountOut;
                fromAmino(object: _7.SwapExactAmountOutAmino): _7.SwapExactAmountOut;
                toAmino(message: _7.SwapExactAmountOut): _7.SwapExactAmountOutAmino;
                fromAminoMsg(object: _7.SwapExactAmountOutAminoMsg): _7.SwapExactAmountOut;
                toAminoMsg(message: _7.SwapExactAmountOut): _7.SwapExactAmountOutAminoMsg;
                fromProtoMsg(message: _7.SwapExactAmountOutProtoMsg): _7.SwapExactAmountOut;
                toProto(message: _7.SwapExactAmountOut): Uint8Array;
                toProtoMsg(message: _7.SwapExactAmountOut): _7.SwapExactAmountOutProtoMsg;
            };
            SwapExactAmountOutSudoMsg: {
                typeUrl: string;
                encode(message: _7.SwapExactAmountOutSudoMsg, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _7.SwapExactAmountOutSudoMsg;
                fromPartial(object: Partial<_7.SwapExactAmountOutSudoMsg>): _7.SwapExactAmountOutSudoMsg;
                fromAmino(object: _7.SwapExactAmountOutSudoMsgAmino): _7.SwapExactAmountOutSudoMsg;
                toAmino(message: _7.SwapExactAmountOutSudoMsg): _7.SwapExactAmountOutSudoMsgAmino;
                fromAminoMsg(object: _7.SwapExactAmountOutSudoMsgAminoMsg): _7.SwapExactAmountOutSudoMsg;
                toAminoMsg(message: _7.SwapExactAmountOutSudoMsg): _7.SwapExactAmountOutSudoMsgAminoMsg;
                fromProtoMsg(message: _7.SwapExactAmountOutSudoMsgProtoMsg): _7.SwapExactAmountOutSudoMsg;
                toProto(message: _7.SwapExactAmountOutSudoMsg): Uint8Array;
                toProtoMsg(message: _7.SwapExactAmountOutSudoMsg): _7.SwapExactAmountOutSudoMsgProtoMsg;
            };
            SwapExactAmountOutSudoMsgResponse: {
                typeUrl: string;
                encode(message: _7.SwapExactAmountOutSudoMsgResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _7.SwapExactAmountOutSudoMsgResponse;
                fromPartial(object: Partial<_7.SwapExactAmountOutSudoMsgResponse>): _7.SwapExactAmountOutSudoMsgResponse;
                fromAmino(object: _7.SwapExactAmountOutSudoMsgResponseAmino): _7.SwapExactAmountOutSudoMsgResponse;
                toAmino(message: _7.SwapExactAmountOutSudoMsgResponse): _7.SwapExactAmountOutSudoMsgResponseAmino;
                fromAminoMsg(object: _7.SwapExactAmountOutSudoMsgResponseAminoMsg): _7.SwapExactAmountOutSudoMsgResponse;
                toAminoMsg(message: _7.SwapExactAmountOutSudoMsgResponse): _7.SwapExactAmountOutSudoMsgResponseAminoMsg;
                fromProtoMsg(message: _7.SwapExactAmountOutSudoMsgResponseProtoMsg): _7.SwapExactAmountOutSudoMsgResponse;
                toProto(message: _7.SwapExactAmountOutSudoMsgResponse): Uint8Array;
                toProtoMsg(message: _7.SwapExactAmountOutSudoMsgResponse): _7.SwapExactAmountOutSudoMsgResponseProtoMsg;
            };
            CalcOutAmtGivenIn: {
                typeUrl: string;
                encode(message: _6.CalcOutAmtGivenIn, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _6.CalcOutAmtGivenIn;
                fromPartial(object: Partial<_6.CalcOutAmtGivenIn>): _6.CalcOutAmtGivenIn;
                fromAmino(object: _6.CalcOutAmtGivenInAmino): _6.CalcOutAmtGivenIn;
                toAmino(message: _6.CalcOutAmtGivenIn): _6.CalcOutAmtGivenInAmino;
                fromAminoMsg(object: _6.CalcOutAmtGivenInAminoMsg): _6.CalcOutAmtGivenIn;
                toAminoMsg(message: _6.CalcOutAmtGivenIn): _6.CalcOutAmtGivenInAminoMsg;
                fromProtoMsg(message: _6.CalcOutAmtGivenInProtoMsg): _6.CalcOutAmtGivenIn;
                toProto(message: _6.CalcOutAmtGivenIn): Uint8Array;
                toProtoMsg(message: _6.CalcOutAmtGivenIn): _6.CalcOutAmtGivenInProtoMsg;
            };
            CalcOutAmtGivenInRequest: {
                typeUrl: string;
                encode(message: _6.CalcOutAmtGivenInRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _6.CalcOutAmtGivenInRequest;
                fromPartial(object: Partial<_6.CalcOutAmtGivenInRequest>): _6.CalcOutAmtGivenInRequest;
                fromAmino(object: _6.CalcOutAmtGivenInRequestAmino): _6.CalcOutAmtGivenInRequest;
                toAmino(message: _6.CalcOutAmtGivenInRequest): _6.CalcOutAmtGivenInRequestAmino;
                fromAminoMsg(object: _6.CalcOutAmtGivenInRequestAminoMsg): _6.CalcOutAmtGivenInRequest;
                toAminoMsg(message: _6.CalcOutAmtGivenInRequest): _6.CalcOutAmtGivenInRequestAminoMsg;
                fromProtoMsg(message: _6.CalcOutAmtGivenInRequestProtoMsg): _6.CalcOutAmtGivenInRequest;
                toProto(message: _6.CalcOutAmtGivenInRequest): Uint8Array;
                toProtoMsg(message: _6.CalcOutAmtGivenInRequest): _6.CalcOutAmtGivenInRequestProtoMsg;
            };
            CalcOutAmtGivenInResponse: {
                typeUrl: string;
                encode(message: _6.CalcOutAmtGivenInResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _6.CalcOutAmtGivenInResponse;
                fromPartial(object: Partial<_6.CalcOutAmtGivenInResponse>): _6.CalcOutAmtGivenInResponse;
                fromAmino(object: _6.CalcOutAmtGivenInResponseAmino): _6.CalcOutAmtGivenInResponse;
                toAmino(message: _6.CalcOutAmtGivenInResponse): _6.CalcOutAmtGivenInResponseAmino;
                fromAminoMsg(object: _6.CalcOutAmtGivenInResponseAminoMsg): _6.CalcOutAmtGivenInResponse;
                toAminoMsg(message: _6.CalcOutAmtGivenInResponse): _6.CalcOutAmtGivenInResponseAminoMsg;
                fromProtoMsg(message: _6.CalcOutAmtGivenInResponseProtoMsg): _6.CalcOutAmtGivenInResponse;
                toProto(message: _6.CalcOutAmtGivenInResponse): Uint8Array;
                toProtoMsg(message: _6.CalcOutAmtGivenInResponse): _6.CalcOutAmtGivenInResponseProtoMsg;
            };
            CalcInAmtGivenOut: {
                typeUrl: string;
                encode(message: _6.CalcInAmtGivenOut, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _6.CalcInAmtGivenOut;
                fromPartial(object: Partial<_6.CalcInAmtGivenOut>): _6.CalcInAmtGivenOut;
                fromAmino(object: _6.CalcInAmtGivenOutAmino): _6.CalcInAmtGivenOut;
                toAmino(message: _6.CalcInAmtGivenOut): _6.CalcInAmtGivenOutAmino;
                fromAminoMsg(object: _6.CalcInAmtGivenOutAminoMsg): _6.CalcInAmtGivenOut;
                toAminoMsg(message: _6.CalcInAmtGivenOut): _6.CalcInAmtGivenOutAminoMsg;
                fromProtoMsg(message: _6.CalcInAmtGivenOutProtoMsg): _6.CalcInAmtGivenOut;
                toProto(message: _6.CalcInAmtGivenOut): Uint8Array;
                toProtoMsg(message: _6.CalcInAmtGivenOut): _6.CalcInAmtGivenOutProtoMsg;
            };
            CalcInAmtGivenOutRequest: {
                typeUrl: string;
                encode(message: _6.CalcInAmtGivenOutRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _6.CalcInAmtGivenOutRequest;
                fromPartial(object: Partial<_6.CalcInAmtGivenOutRequest>): _6.CalcInAmtGivenOutRequest;
                fromAmino(object: _6.CalcInAmtGivenOutRequestAmino): _6.CalcInAmtGivenOutRequest;
                toAmino(message: _6.CalcInAmtGivenOutRequest): _6.CalcInAmtGivenOutRequestAmino;
                fromAminoMsg(object: _6.CalcInAmtGivenOutRequestAminoMsg): _6.CalcInAmtGivenOutRequest;
                toAminoMsg(message: _6.CalcInAmtGivenOutRequest): _6.CalcInAmtGivenOutRequestAminoMsg;
                fromProtoMsg(message: _6.CalcInAmtGivenOutRequestProtoMsg): _6.CalcInAmtGivenOutRequest;
                toProto(message: _6.CalcInAmtGivenOutRequest): Uint8Array;
                toProtoMsg(message: _6.CalcInAmtGivenOutRequest): _6.CalcInAmtGivenOutRequestProtoMsg;
            };
            CalcInAmtGivenOutResponse: {
                typeUrl: string;
                encode(message: _6.CalcInAmtGivenOutResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _6.CalcInAmtGivenOutResponse;
                fromPartial(object: Partial<_6.CalcInAmtGivenOutResponse>): _6.CalcInAmtGivenOutResponse;
                fromAmino(object: _6.CalcInAmtGivenOutResponseAmino): _6.CalcInAmtGivenOutResponse;
                toAmino(message: _6.CalcInAmtGivenOutResponse): _6.CalcInAmtGivenOutResponseAmino;
                fromAminoMsg(object: _6.CalcInAmtGivenOutResponseAminoMsg): _6.CalcInAmtGivenOutResponse;
                toAminoMsg(message: _6.CalcInAmtGivenOutResponse): _6.CalcInAmtGivenOutResponseAminoMsg;
                fromProtoMsg(message: _6.CalcInAmtGivenOutResponseProtoMsg): _6.CalcInAmtGivenOutResponse;
                toProto(message: _6.CalcInAmtGivenOutResponse): Uint8Array;
                toProtoMsg(message: _6.CalcInAmtGivenOutResponse): _6.CalcInAmtGivenOutResponseProtoMsg;
            };
            InstantiateMsg: {
                typeUrl: string;
                encode(message: _5.InstantiateMsg, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _5.InstantiateMsg;
                fromPartial(object: Partial<_5.InstantiateMsg>): _5.InstantiateMsg;
                fromAmino(object: _5.InstantiateMsgAmino): _5.InstantiateMsg;
                toAmino(message: _5.InstantiateMsg): _5.InstantiateMsgAmino;
                fromAminoMsg(object: _5.InstantiateMsgAminoMsg): _5.InstantiateMsg;
                toAminoMsg(message: _5.InstantiateMsg): _5.InstantiateMsgAminoMsg;
                fromProtoMsg(message: _5.InstantiateMsgProtoMsg): _5.InstantiateMsg;
                toProto(message: _5.InstantiateMsg): Uint8Array;
                toProtoMsg(message: _5.InstantiateMsg): _5.InstantiateMsgProtoMsg;
            };
            UploadCosmWasmPoolCodeAndWhiteListProposal: {
                typeUrl: string;
                encode(message: _4.UploadCosmWasmPoolCodeAndWhiteListProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _4.UploadCosmWasmPoolCodeAndWhiteListProposal;
                fromPartial(object: Partial<_4.UploadCosmWasmPoolCodeAndWhiteListProposal>): _4.UploadCosmWasmPoolCodeAndWhiteListProposal;
                fromAmino(object: _4.UploadCosmWasmPoolCodeAndWhiteListProposalAmino): _4.UploadCosmWasmPoolCodeAndWhiteListProposal;
                toAmino(message: _4.UploadCosmWasmPoolCodeAndWhiteListProposal): _4.UploadCosmWasmPoolCodeAndWhiteListProposalAmino;
                fromAminoMsg(object: _4.UploadCosmWasmPoolCodeAndWhiteListProposalAminoMsg): _4.UploadCosmWasmPoolCodeAndWhiteListProposal;
                toAminoMsg(message: _4.UploadCosmWasmPoolCodeAndWhiteListProposal): _4.UploadCosmWasmPoolCodeAndWhiteListProposalAminoMsg;
                fromProtoMsg(message: _4.UploadCosmWasmPoolCodeAndWhiteListProposalProtoMsg): _4.UploadCosmWasmPoolCodeAndWhiteListProposal;
                toProto(message: _4.UploadCosmWasmPoolCodeAndWhiteListProposal): Uint8Array;
                toProtoMsg(message: _4.UploadCosmWasmPoolCodeAndWhiteListProposal): _4.UploadCosmWasmPoolCodeAndWhiteListProposalProtoMsg;
            };
            MigratePoolContractsProposal: {
                typeUrl: string;
                encode(message: _4.MigratePoolContractsProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _4.MigratePoolContractsProposal;
                fromPartial(object: Partial<_4.MigratePoolContractsProposal>): _4.MigratePoolContractsProposal;
                fromAmino(object: _4.MigratePoolContractsProposalAmino): _4.MigratePoolContractsProposal;
                toAmino(message: _4.MigratePoolContractsProposal): _4.MigratePoolContractsProposalAmino;
                fromAminoMsg(object: _4.MigratePoolContractsProposalAminoMsg): _4.MigratePoolContractsProposal;
                toAminoMsg(message: _4.MigratePoolContractsProposal): _4.MigratePoolContractsProposalAminoMsg;
                fromProtoMsg(message: _4.MigratePoolContractsProposalProtoMsg): _4.MigratePoolContractsProposal;
                toProto(message: _4.MigratePoolContractsProposal): Uint8Array;
                toProtoMsg(message: _4.MigratePoolContractsProposal): _4.MigratePoolContractsProposalProtoMsg;
            };
            GenesisState: {
                typeUrl: string;
                encode(message: _3.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _3.GenesisState;
                fromPartial(object: Partial<_3.GenesisState>): _3.GenesisState;
                fromAmino(object: _3.GenesisStateAmino): _3.GenesisState;
                toAmino(message: _3.GenesisState): _3.GenesisStateAmino;
                fromAminoMsg(object: _3.GenesisStateAminoMsg): _3.GenesisState;
                toAminoMsg(message: _3.GenesisState): _3.GenesisStateAminoMsg;
                fromProtoMsg(message: _3.GenesisStateProtoMsg): _3.GenesisState;
                toProto(message: _3.GenesisState): Uint8Array;
                toProtoMsg(message: _3.GenesisState): _3.GenesisStateProtoMsg;
            };
        };
    }
    namespace downtimedetector {
        const v1beta1: {
            QueryClientImpl: typeof _235.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                recoveredSinceDowntimeOfLength(request: _17.RecoveredSinceDowntimeOfLengthRequest): Promise<_17.RecoveredSinceDowntimeOfLengthResponse>;
            };
            LCDQueryClient: typeof _217.LCDQueryClient;
            RecoveredSinceDowntimeOfLengthRequest: {
                typeUrl: string;
                encode(message: _17.RecoveredSinceDowntimeOfLengthRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _17.RecoveredSinceDowntimeOfLengthRequest;
                fromPartial(object: Partial<_17.RecoveredSinceDowntimeOfLengthRequest>): _17.RecoveredSinceDowntimeOfLengthRequest;
                fromAmino(object: _17.RecoveredSinceDowntimeOfLengthRequestAmino): _17.RecoveredSinceDowntimeOfLengthRequest;
                toAmino(message: _17.RecoveredSinceDowntimeOfLengthRequest): _17.RecoveredSinceDowntimeOfLengthRequestAmino;
                fromAminoMsg(object: _17.RecoveredSinceDowntimeOfLengthRequestAminoMsg): _17.RecoveredSinceDowntimeOfLengthRequest;
                toAminoMsg(message: _17.RecoveredSinceDowntimeOfLengthRequest): _17.RecoveredSinceDowntimeOfLengthRequestAminoMsg;
                fromProtoMsg(message: _17.RecoveredSinceDowntimeOfLengthRequestProtoMsg): _17.RecoveredSinceDowntimeOfLengthRequest;
                toProto(message: _17.RecoveredSinceDowntimeOfLengthRequest): Uint8Array;
                toProtoMsg(message: _17.RecoveredSinceDowntimeOfLengthRequest): _17.RecoveredSinceDowntimeOfLengthRequestProtoMsg;
            };
            RecoveredSinceDowntimeOfLengthResponse: {
                typeUrl: string;
                encode(message: _17.RecoveredSinceDowntimeOfLengthResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _17.RecoveredSinceDowntimeOfLengthResponse;
                fromPartial(object: Partial<_17.RecoveredSinceDowntimeOfLengthResponse>): _17.RecoveredSinceDowntimeOfLengthResponse;
                fromAmino(object: _17.RecoveredSinceDowntimeOfLengthResponseAmino): _17.RecoveredSinceDowntimeOfLengthResponse;
                toAmino(message: _17.RecoveredSinceDowntimeOfLengthResponse): _17.RecoveredSinceDowntimeOfLengthResponseAmino;
                fromAminoMsg(object: _17.RecoveredSinceDowntimeOfLengthResponseAminoMsg): _17.RecoveredSinceDowntimeOfLengthResponse;
                toAminoMsg(message: _17.RecoveredSinceDowntimeOfLengthResponse): _17.RecoveredSinceDowntimeOfLengthResponseAminoMsg;
                fromProtoMsg(message: _17.RecoveredSinceDowntimeOfLengthResponseProtoMsg): _17.RecoveredSinceDowntimeOfLengthResponse;
                toProto(message: _17.RecoveredSinceDowntimeOfLengthResponse): Uint8Array;
                toProtoMsg(message: _17.RecoveredSinceDowntimeOfLengthResponse): _17.RecoveredSinceDowntimeOfLengthResponseProtoMsg;
            };
            GenesisDowntimeEntry: {
                typeUrl: string;
                encode(message: _16.GenesisDowntimeEntry, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _16.GenesisDowntimeEntry;
                fromPartial(object: Partial<_16.GenesisDowntimeEntry>): _16.GenesisDowntimeEntry;
                fromAmino(object: _16.GenesisDowntimeEntryAmino): _16.GenesisDowntimeEntry;
                toAmino(message: _16.GenesisDowntimeEntry): _16.GenesisDowntimeEntryAmino;
                fromAminoMsg(object: _16.GenesisDowntimeEntryAminoMsg): _16.GenesisDowntimeEntry;
                toAminoMsg(message: _16.GenesisDowntimeEntry): _16.GenesisDowntimeEntryAminoMsg;
                fromProtoMsg(message: _16.GenesisDowntimeEntryProtoMsg): _16.GenesisDowntimeEntry;
                toProto(message: _16.GenesisDowntimeEntry): Uint8Array;
                toProtoMsg(message: _16.GenesisDowntimeEntry): _16.GenesisDowntimeEntryProtoMsg;
            };
            GenesisState: {
                typeUrl: string;
                encode(message: _16.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _16.GenesisState;
                fromPartial(object: Partial<_16.GenesisState>): _16.GenesisState;
                fromAmino(object: _16.GenesisStateAmino): _16.GenesisState;
                toAmino(message: _16.GenesisState): _16.GenesisStateAmino;
                fromAminoMsg(object: _16.GenesisStateAminoMsg): _16.GenesisState;
                toAminoMsg(message: _16.GenesisState): _16.GenesisStateAminoMsg;
                fromProtoMsg(message: _16.GenesisStateProtoMsg): _16.GenesisState;
                toProto(message: _16.GenesisState): Uint8Array;
                toProtoMsg(message: _16.GenesisState): _16.GenesisStateProtoMsg;
            };
            downtimeFromJSON(object: any): _15.Downtime;
            downtimeToJSON(object: _15.Downtime): string;
            Downtime: typeof _15.Downtime;
            DowntimeSDKType: typeof _15.Downtime;
            DowntimeAmino: typeof _15.Downtime;
        };
    }
    namespace epochs {
        const v1beta1: {
            QueryClientImpl: typeof _236.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                epochInfos(request?: _19.QueryEpochsInfoRequest): Promise<_19.QueryEpochsInfoResponse>;
                currentEpoch(request: _19.QueryCurrentEpochRequest): Promise<_19.QueryCurrentEpochResponse>;
            };
            LCDQueryClient: typeof _218.LCDQueryClient;
            QueryEpochsInfoRequest: {
                typeUrl: string;
                encode(_: _19.QueryEpochsInfoRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _19.QueryEpochsInfoRequest;
                fromPartial(_: Partial<_19.QueryEpochsInfoRequest>): _19.QueryEpochsInfoRequest;
                fromAmino(_: _19.QueryEpochsInfoRequestAmino): _19.QueryEpochsInfoRequest;
                toAmino(_: _19.QueryEpochsInfoRequest): _19.QueryEpochsInfoRequestAmino;
                fromAminoMsg(object: _19.QueryEpochsInfoRequestAminoMsg): _19.QueryEpochsInfoRequest;
                toAminoMsg(message: _19.QueryEpochsInfoRequest): _19.QueryEpochsInfoRequestAminoMsg;
                fromProtoMsg(message: _19.QueryEpochsInfoRequestProtoMsg): _19.QueryEpochsInfoRequest;
                toProto(message: _19.QueryEpochsInfoRequest): Uint8Array;
                toProtoMsg(message: _19.QueryEpochsInfoRequest): _19.QueryEpochsInfoRequestProtoMsg;
            };
            QueryEpochsInfoResponse: {
                typeUrl: string;
                encode(message: _19.QueryEpochsInfoResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _19.QueryEpochsInfoResponse;
                fromPartial(object: Partial<_19.QueryEpochsInfoResponse>): _19.QueryEpochsInfoResponse;
                fromAmino(object: _19.QueryEpochsInfoResponseAmino): _19.QueryEpochsInfoResponse;
                toAmino(message: _19.QueryEpochsInfoResponse): _19.QueryEpochsInfoResponseAmino;
                fromAminoMsg(object: _19.QueryEpochsInfoResponseAminoMsg): _19.QueryEpochsInfoResponse;
                toAminoMsg(message: _19.QueryEpochsInfoResponse): _19.QueryEpochsInfoResponseAminoMsg;
                fromProtoMsg(message: _19.QueryEpochsInfoResponseProtoMsg): _19.QueryEpochsInfoResponse;
                toProto(message: _19.QueryEpochsInfoResponse): Uint8Array;
                toProtoMsg(message: _19.QueryEpochsInfoResponse): _19.QueryEpochsInfoResponseProtoMsg;
            };
            QueryCurrentEpochRequest: {
                typeUrl: string;
                encode(message: _19.QueryCurrentEpochRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _19.QueryCurrentEpochRequest;
                fromPartial(object: Partial<_19.QueryCurrentEpochRequest>): _19.QueryCurrentEpochRequest;
                fromAmino(object: _19.QueryCurrentEpochRequestAmino): _19.QueryCurrentEpochRequest;
                toAmino(message: _19.QueryCurrentEpochRequest): _19.QueryCurrentEpochRequestAmino;
                fromAminoMsg(object: _19.QueryCurrentEpochRequestAminoMsg): _19.QueryCurrentEpochRequest;
                toAminoMsg(message: _19.QueryCurrentEpochRequest): _19.QueryCurrentEpochRequestAminoMsg;
                fromProtoMsg(message: _19.QueryCurrentEpochRequestProtoMsg): _19.QueryCurrentEpochRequest;
                toProto(message: _19.QueryCurrentEpochRequest): Uint8Array;
                toProtoMsg(message: _19.QueryCurrentEpochRequest): _19.QueryCurrentEpochRequestProtoMsg;
            };
            QueryCurrentEpochResponse: {
                typeUrl: string;
                encode(message: _19.QueryCurrentEpochResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _19.QueryCurrentEpochResponse;
                fromPartial(object: Partial<_19.QueryCurrentEpochResponse>): _19.QueryCurrentEpochResponse;
                fromAmino(object: _19.QueryCurrentEpochResponseAmino): _19.QueryCurrentEpochResponse;
                toAmino(message: _19.QueryCurrentEpochResponse): _19.QueryCurrentEpochResponseAmino;
                fromAminoMsg(object: _19.QueryCurrentEpochResponseAminoMsg): _19.QueryCurrentEpochResponse;
                toAminoMsg(message: _19.QueryCurrentEpochResponse): _19.QueryCurrentEpochResponseAminoMsg;
                fromProtoMsg(message: _19.QueryCurrentEpochResponseProtoMsg): _19.QueryCurrentEpochResponse;
                toProto(message: _19.QueryCurrentEpochResponse): Uint8Array;
                toProtoMsg(message: _19.QueryCurrentEpochResponse): _19.QueryCurrentEpochResponseProtoMsg;
            };
            EpochInfo: {
                typeUrl: string;
                encode(message: _18.EpochInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _18.EpochInfo;
                fromPartial(object: Partial<_18.EpochInfo>): _18.EpochInfo;
                fromAmino(object: _18.EpochInfoAmino): _18.EpochInfo;
                toAmino(message: _18.EpochInfo): _18.EpochInfoAmino;
                fromAminoMsg(object: _18.EpochInfoAminoMsg): _18.EpochInfo;
                toAminoMsg(message: _18.EpochInfo): _18.EpochInfoAminoMsg;
                fromProtoMsg(message: _18.EpochInfoProtoMsg): _18.EpochInfo;
                toProto(message: _18.EpochInfo): Uint8Array;
                toProtoMsg(message: _18.EpochInfo): _18.EpochInfoProtoMsg;
            };
            GenesisState: {
                typeUrl: string;
                encode(message: _18.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _18.GenesisState;
                fromPartial(object: Partial<_18.GenesisState>): _18.GenesisState;
                fromAmino(object: _18.GenesisStateAmino): _18.GenesisState;
                toAmino(message: _18.GenesisState): _18.GenesisStateAmino;
                fromAminoMsg(object: _18.GenesisStateAminoMsg): _18.GenesisState;
                toAminoMsg(message: _18.GenesisState): _18.GenesisStateAminoMsg;
                fromProtoMsg(message: _18.GenesisStateProtoMsg): _18.GenesisState;
                toProto(message: _18.GenesisState): Uint8Array;
                toProtoMsg(message: _18.GenesisState): _18.GenesisStateProtoMsg;
            };
        };
    }
    namespace gamm {
        const v1beta1: {
            MsgClientImpl: typeof _255.MsgClientImpl;
            QueryClientImpl: typeof _237.QueryClientImpl;
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
                cFMMConcentratedPoolLinks(request?: _23.QueryCFMMConcentratedPoolLinksRequest): Promise<_23.QueryCFMMConcentratedPoolLinksResponse>;
            };
            LCDQueryClient: typeof _219.LCDQueryClient;
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
                    toAmino: (message: _25.MsgJoinPool) => _25.MsgJoinPoolAmino;
                    fromAmino: (object: _25.MsgJoinPoolAmino) => _25.MsgJoinPool;
                };
                "/osmosis.gamm.v1beta1.MsgExitPool": {
                    aminoType: string;
                    toAmino: (message: _25.MsgExitPool) => _25.MsgExitPoolAmino;
                    fromAmino: (object: _25.MsgExitPoolAmino) => _25.MsgExitPool;
                };
                "/osmosis.gamm.v1beta1.MsgSwapExactAmountIn": {
                    aminoType: string;
                    toAmino: (message: _25.MsgSwapExactAmountIn) => _25.MsgSwapExactAmountInAmino;
                    fromAmino: (object: _25.MsgSwapExactAmountInAmino) => _25.MsgSwapExactAmountIn;
                };
                "/osmosis.gamm.v1beta1.MsgSwapExactAmountOut": {
                    aminoType: string;
                    toAmino: (message: _25.MsgSwapExactAmountOut) => _25.MsgSwapExactAmountOutAmino;
                    fromAmino: (object: _25.MsgSwapExactAmountOutAmino) => _25.MsgSwapExactAmountOut;
                };
                "/osmosis.gamm.v1beta1.MsgJoinSwapExternAmountIn": {
                    aminoType: string;
                    toAmino: (message: _25.MsgJoinSwapExternAmountIn) => _25.MsgJoinSwapExternAmountInAmino;
                    fromAmino: (object: _25.MsgJoinSwapExternAmountInAmino) => _25.MsgJoinSwapExternAmountIn;
                };
                "/osmosis.gamm.v1beta1.MsgJoinSwapShareAmountOut": {
                    aminoType: string;
                    toAmino: (message: _25.MsgJoinSwapShareAmountOut) => _25.MsgJoinSwapShareAmountOutAmino;
                    fromAmino: (object: _25.MsgJoinSwapShareAmountOutAmino) => _25.MsgJoinSwapShareAmountOut;
                };
                "/osmosis.gamm.v1beta1.MsgExitSwapExternAmountOut": {
                    aminoType: string;
                    toAmino: (message: _25.MsgExitSwapExternAmountOut) => _25.MsgExitSwapExternAmountOutAmino;
                    fromAmino: (object: _25.MsgExitSwapExternAmountOutAmino) => _25.MsgExitSwapExternAmountOut;
                };
                "/osmosis.gamm.v1beta1.MsgExitSwapShareAmountIn": {
                    aminoType: string;
                    toAmino: (message: _25.MsgExitSwapShareAmountIn) => _25.MsgExitSwapShareAmountInAmino;
                    fromAmino: (object: _25.MsgExitSwapShareAmountInAmino) => _25.MsgExitSwapShareAmountIn;
                };
            };
            MsgJoinPool: {
                typeUrl: string;
                encode(message: _25.MsgJoinPool, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _25.MsgJoinPool;
                fromPartial(object: Partial<_25.MsgJoinPool>): _25.MsgJoinPool;
                fromAmino(object: _25.MsgJoinPoolAmino): _25.MsgJoinPool;
                toAmino(message: _25.MsgJoinPool): _25.MsgJoinPoolAmino;
                fromAminoMsg(object: _25.MsgJoinPoolAminoMsg): _25.MsgJoinPool;
                toAminoMsg(message: _25.MsgJoinPool): _25.MsgJoinPoolAminoMsg;
                fromProtoMsg(message: _25.MsgJoinPoolProtoMsg): _25.MsgJoinPool;
                toProto(message: _25.MsgJoinPool): Uint8Array;
                toProtoMsg(message: _25.MsgJoinPool): _25.MsgJoinPoolProtoMsg;
            };
            MsgJoinPoolResponse: {
                typeUrl: string;
                encode(message: _25.MsgJoinPoolResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _25.MsgJoinPoolResponse;
                fromPartial(object: Partial<_25.MsgJoinPoolResponse>): _25.MsgJoinPoolResponse;
                fromAmino(object: _25.MsgJoinPoolResponseAmino): _25.MsgJoinPoolResponse;
                toAmino(message: _25.MsgJoinPoolResponse): _25.MsgJoinPoolResponseAmino;
                fromAminoMsg(object: _25.MsgJoinPoolResponseAminoMsg): _25.MsgJoinPoolResponse;
                toAminoMsg(message: _25.MsgJoinPoolResponse): _25.MsgJoinPoolResponseAminoMsg;
                fromProtoMsg(message: _25.MsgJoinPoolResponseProtoMsg): _25.MsgJoinPoolResponse;
                toProto(message: _25.MsgJoinPoolResponse): Uint8Array;
                toProtoMsg(message: _25.MsgJoinPoolResponse): _25.MsgJoinPoolResponseProtoMsg;
            };
            MsgExitPool: {
                typeUrl: string;
                encode(message: _25.MsgExitPool, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _25.MsgExitPool;
                fromPartial(object: Partial<_25.MsgExitPool>): _25.MsgExitPool;
                fromAmino(object: _25.MsgExitPoolAmino): _25.MsgExitPool;
                toAmino(message: _25.MsgExitPool): _25.MsgExitPoolAmino;
                fromAminoMsg(object: _25.MsgExitPoolAminoMsg): _25.MsgExitPool;
                toAminoMsg(message: _25.MsgExitPool): _25.MsgExitPoolAminoMsg;
                fromProtoMsg(message: _25.MsgExitPoolProtoMsg): _25.MsgExitPool;
                toProto(message: _25.MsgExitPool): Uint8Array;
                toProtoMsg(message: _25.MsgExitPool): _25.MsgExitPoolProtoMsg;
            };
            MsgExitPoolResponse: {
                typeUrl: string;
                encode(message: _25.MsgExitPoolResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _25.MsgExitPoolResponse;
                fromPartial(object: Partial<_25.MsgExitPoolResponse>): _25.MsgExitPoolResponse;
                fromAmino(object: _25.MsgExitPoolResponseAmino): _25.MsgExitPoolResponse;
                toAmino(message: _25.MsgExitPoolResponse): _25.MsgExitPoolResponseAmino;
                fromAminoMsg(object: _25.MsgExitPoolResponseAminoMsg): _25.MsgExitPoolResponse;
                toAminoMsg(message: _25.MsgExitPoolResponse): _25.MsgExitPoolResponseAminoMsg;
                fromProtoMsg(message: _25.MsgExitPoolResponseProtoMsg): _25.MsgExitPoolResponse;
                toProto(message: _25.MsgExitPoolResponse): Uint8Array;
                toProtoMsg(message: _25.MsgExitPoolResponse): _25.MsgExitPoolResponseProtoMsg;
            };
            MsgSwapExactAmountIn: {
                typeUrl: string;
                encode(message: _25.MsgSwapExactAmountIn, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _25.MsgSwapExactAmountIn;
                fromPartial(object: Partial<_25.MsgSwapExactAmountIn>): _25.MsgSwapExactAmountIn;
                fromAmino(object: _25.MsgSwapExactAmountInAmino): _25.MsgSwapExactAmountIn;
                toAmino(message: _25.MsgSwapExactAmountIn): _25.MsgSwapExactAmountInAmino;
                fromAminoMsg(object: _25.MsgSwapExactAmountInAminoMsg): _25.MsgSwapExactAmountIn;
                toAminoMsg(message: _25.MsgSwapExactAmountIn): _25.MsgSwapExactAmountInAminoMsg;
                fromProtoMsg(message: _25.MsgSwapExactAmountInProtoMsg): _25.MsgSwapExactAmountIn;
                toProto(message: _25.MsgSwapExactAmountIn): Uint8Array;
                toProtoMsg(message: _25.MsgSwapExactAmountIn): _25.MsgSwapExactAmountInProtoMsg;
            };
            MsgSwapExactAmountInResponse: {
                typeUrl: string;
                encode(message: _25.MsgSwapExactAmountInResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _25.MsgSwapExactAmountInResponse;
                fromPartial(object: Partial<_25.MsgSwapExactAmountInResponse>): _25.MsgSwapExactAmountInResponse;
                fromAmino(object: _25.MsgSwapExactAmountInResponseAmino): _25.MsgSwapExactAmountInResponse;
                toAmino(message: _25.MsgSwapExactAmountInResponse): _25.MsgSwapExactAmountInResponseAmino;
                fromAminoMsg(object: _25.MsgSwapExactAmountInResponseAminoMsg): _25.MsgSwapExactAmountInResponse;
                toAminoMsg(message: _25.MsgSwapExactAmountInResponse): _25.MsgSwapExactAmountInResponseAminoMsg;
                fromProtoMsg(message: _25.MsgSwapExactAmountInResponseProtoMsg): _25.MsgSwapExactAmountInResponse;
                toProto(message: _25.MsgSwapExactAmountInResponse): Uint8Array;
                toProtoMsg(message: _25.MsgSwapExactAmountInResponse): _25.MsgSwapExactAmountInResponseProtoMsg;
            };
            MsgSwapExactAmountOut: {
                typeUrl: string;
                encode(message: _25.MsgSwapExactAmountOut, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _25.MsgSwapExactAmountOut;
                fromPartial(object: Partial<_25.MsgSwapExactAmountOut>): _25.MsgSwapExactAmountOut;
                fromAmino(object: _25.MsgSwapExactAmountOutAmino): _25.MsgSwapExactAmountOut;
                toAmino(message: _25.MsgSwapExactAmountOut): _25.MsgSwapExactAmountOutAmino;
                fromAminoMsg(object: _25.MsgSwapExactAmountOutAminoMsg): _25.MsgSwapExactAmountOut;
                toAminoMsg(message: _25.MsgSwapExactAmountOut): _25.MsgSwapExactAmountOutAminoMsg;
                fromProtoMsg(message: _25.MsgSwapExactAmountOutProtoMsg): _25.MsgSwapExactAmountOut;
                toProto(message: _25.MsgSwapExactAmountOut): Uint8Array;
                toProtoMsg(message: _25.MsgSwapExactAmountOut): _25.MsgSwapExactAmountOutProtoMsg;
            };
            MsgSwapExactAmountOutResponse: {
                typeUrl: string;
                encode(message: _25.MsgSwapExactAmountOutResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _25.MsgSwapExactAmountOutResponse;
                fromPartial(object: Partial<_25.MsgSwapExactAmountOutResponse>): _25.MsgSwapExactAmountOutResponse;
                fromAmino(object: _25.MsgSwapExactAmountOutResponseAmino): _25.MsgSwapExactAmountOutResponse;
                toAmino(message: _25.MsgSwapExactAmountOutResponse): _25.MsgSwapExactAmountOutResponseAmino;
                fromAminoMsg(object: _25.MsgSwapExactAmountOutResponseAminoMsg): _25.MsgSwapExactAmountOutResponse;
                toAminoMsg(message: _25.MsgSwapExactAmountOutResponse): _25.MsgSwapExactAmountOutResponseAminoMsg;
                fromProtoMsg(message: _25.MsgSwapExactAmountOutResponseProtoMsg): _25.MsgSwapExactAmountOutResponse;
                toProto(message: _25.MsgSwapExactAmountOutResponse): Uint8Array;
                toProtoMsg(message: _25.MsgSwapExactAmountOutResponse): _25.MsgSwapExactAmountOutResponseProtoMsg;
            };
            MsgJoinSwapExternAmountIn: {
                typeUrl: string;
                encode(message: _25.MsgJoinSwapExternAmountIn, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _25.MsgJoinSwapExternAmountIn;
                fromPartial(object: Partial<_25.MsgJoinSwapExternAmountIn>): _25.MsgJoinSwapExternAmountIn;
                fromAmino(object: _25.MsgJoinSwapExternAmountInAmino): _25.MsgJoinSwapExternAmountIn;
                toAmino(message: _25.MsgJoinSwapExternAmountIn): _25.MsgJoinSwapExternAmountInAmino;
                fromAminoMsg(object: _25.MsgJoinSwapExternAmountInAminoMsg): _25.MsgJoinSwapExternAmountIn;
                toAminoMsg(message: _25.MsgJoinSwapExternAmountIn): _25.MsgJoinSwapExternAmountInAminoMsg;
                fromProtoMsg(message: _25.MsgJoinSwapExternAmountInProtoMsg): _25.MsgJoinSwapExternAmountIn;
                toProto(message: _25.MsgJoinSwapExternAmountIn): Uint8Array;
                toProtoMsg(message: _25.MsgJoinSwapExternAmountIn): _25.MsgJoinSwapExternAmountInProtoMsg;
            };
            MsgJoinSwapExternAmountInResponse: {
                typeUrl: string;
                encode(message: _25.MsgJoinSwapExternAmountInResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _25.MsgJoinSwapExternAmountInResponse;
                fromPartial(object: Partial<_25.MsgJoinSwapExternAmountInResponse>): _25.MsgJoinSwapExternAmountInResponse;
                fromAmino(object: _25.MsgJoinSwapExternAmountInResponseAmino): _25.MsgJoinSwapExternAmountInResponse;
                toAmino(message: _25.MsgJoinSwapExternAmountInResponse): _25.MsgJoinSwapExternAmountInResponseAmino;
                fromAminoMsg(object: _25.MsgJoinSwapExternAmountInResponseAminoMsg): _25.MsgJoinSwapExternAmountInResponse;
                toAminoMsg(message: _25.MsgJoinSwapExternAmountInResponse): _25.MsgJoinSwapExternAmountInResponseAminoMsg;
                fromProtoMsg(message: _25.MsgJoinSwapExternAmountInResponseProtoMsg): _25.MsgJoinSwapExternAmountInResponse;
                toProto(message: _25.MsgJoinSwapExternAmountInResponse): Uint8Array;
                toProtoMsg(message: _25.MsgJoinSwapExternAmountInResponse): _25.MsgJoinSwapExternAmountInResponseProtoMsg;
            };
            MsgJoinSwapShareAmountOut: {
                typeUrl: string;
                encode(message: _25.MsgJoinSwapShareAmountOut, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _25.MsgJoinSwapShareAmountOut;
                fromPartial(object: Partial<_25.MsgJoinSwapShareAmountOut>): _25.MsgJoinSwapShareAmountOut;
                fromAmino(object: _25.MsgJoinSwapShareAmountOutAmino): _25.MsgJoinSwapShareAmountOut;
                toAmino(message: _25.MsgJoinSwapShareAmountOut): _25.MsgJoinSwapShareAmountOutAmino;
                fromAminoMsg(object: _25.MsgJoinSwapShareAmountOutAminoMsg): _25.MsgJoinSwapShareAmountOut;
                toAminoMsg(message: _25.MsgJoinSwapShareAmountOut): _25.MsgJoinSwapShareAmountOutAminoMsg;
                fromProtoMsg(message: _25.MsgJoinSwapShareAmountOutProtoMsg): _25.MsgJoinSwapShareAmountOut;
                toProto(message: _25.MsgJoinSwapShareAmountOut): Uint8Array;
                toProtoMsg(message: _25.MsgJoinSwapShareAmountOut): _25.MsgJoinSwapShareAmountOutProtoMsg;
            };
            MsgJoinSwapShareAmountOutResponse: {
                typeUrl: string;
                encode(message: _25.MsgJoinSwapShareAmountOutResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _25.MsgJoinSwapShareAmountOutResponse;
                fromPartial(object: Partial<_25.MsgJoinSwapShareAmountOutResponse>): _25.MsgJoinSwapShareAmountOutResponse;
                fromAmino(object: _25.MsgJoinSwapShareAmountOutResponseAmino): _25.MsgJoinSwapShareAmountOutResponse;
                toAmino(message: _25.MsgJoinSwapShareAmountOutResponse): _25.MsgJoinSwapShareAmountOutResponseAmino;
                fromAminoMsg(object: _25.MsgJoinSwapShareAmountOutResponseAminoMsg): _25.MsgJoinSwapShareAmountOutResponse;
                toAminoMsg(message: _25.MsgJoinSwapShareAmountOutResponse): _25.MsgJoinSwapShareAmountOutResponseAminoMsg;
                fromProtoMsg(message: _25.MsgJoinSwapShareAmountOutResponseProtoMsg): _25.MsgJoinSwapShareAmountOutResponse;
                toProto(message: _25.MsgJoinSwapShareAmountOutResponse): Uint8Array;
                toProtoMsg(message: _25.MsgJoinSwapShareAmountOutResponse): _25.MsgJoinSwapShareAmountOutResponseProtoMsg;
            };
            MsgExitSwapShareAmountIn: {
                typeUrl: string;
                encode(message: _25.MsgExitSwapShareAmountIn, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _25.MsgExitSwapShareAmountIn;
                fromPartial(object: Partial<_25.MsgExitSwapShareAmountIn>): _25.MsgExitSwapShareAmountIn;
                fromAmino(object: _25.MsgExitSwapShareAmountInAmino): _25.MsgExitSwapShareAmountIn;
                toAmino(message: _25.MsgExitSwapShareAmountIn): _25.MsgExitSwapShareAmountInAmino;
                fromAminoMsg(object: _25.MsgExitSwapShareAmountInAminoMsg): _25.MsgExitSwapShareAmountIn;
                toAminoMsg(message: _25.MsgExitSwapShareAmountIn): _25.MsgExitSwapShareAmountInAminoMsg;
                fromProtoMsg(message: _25.MsgExitSwapShareAmountInProtoMsg): _25.MsgExitSwapShareAmountIn;
                toProto(message: _25.MsgExitSwapShareAmountIn): Uint8Array;
                toProtoMsg(message: _25.MsgExitSwapShareAmountIn): _25.MsgExitSwapShareAmountInProtoMsg;
            };
            MsgExitSwapShareAmountInResponse: {
                typeUrl: string;
                encode(message: _25.MsgExitSwapShareAmountInResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _25.MsgExitSwapShareAmountInResponse;
                fromPartial(object: Partial<_25.MsgExitSwapShareAmountInResponse>): _25.MsgExitSwapShareAmountInResponse;
                fromAmino(object: _25.MsgExitSwapShareAmountInResponseAmino): _25.MsgExitSwapShareAmountInResponse;
                toAmino(message: _25.MsgExitSwapShareAmountInResponse): _25.MsgExitSwapShareAmountInResponseAmino;
                fromAminoMsg(object: _25.MsgExitSwapShareAmountInResponseAminoMsg): _25.MsgExitSwapShareAmountInResponse;
                toAminoMsg(message: _25.MsgExitSwapShareAmountInResponse): _25.MsgExitSwapShareAmountInResponseAminoMsg;
                fromProtoMsg(message: _25.MsgExitSwapShareAmountInResponseProtoMsg): _25.MsgExitSwapShareAmountInResponse;
                toProto(message: _25.MsgExitSwapShareAmountInResponse): Uint8Array;
                toProtoMsg(message: _25.MsgExitSwapShareAmountInResponse): _25.MsgExitSwapShareAmountInResponseProtoMsg;
            };
            MsgExitSwapExternAmountOut: {
                typeUrl: string;
                encode(message: _25.MsgExitSwapExternAmountOut, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _25.MsgExitSwapExternAmountOut;
                fromPartial(object: Partial<_25.MsgExitSwapExternAmountOut>): _25.MsgExitSwapExternAmountOut;
                fromAmino(object: _25.MsgExitSwapExternAmountOutAmino): _25.MsgExitSwapExternAmountOut;
                toAmino(message: _25.MsgExitSwapExternAmountOut): _25.MsgExitSwapExternAmountOutAmino;
                fromAminoMsg(object: _25.MsgExitSwapExternAmountOutAminoMsg): _25.MsgExitSwapExternAmountOut;
                toAminoMsg(message: _25.MsgExitSwapExternAmountOut): _25.MsgExitSwapExternAmountOutAminoMsg;
                fromProtoMsg(message: _25.MsgExitSwapExternAmountOutProtoMsg): _25.MsgExitSwapExternAmountOut;
                toProto(message: _25.MsgExitSwapExternAmountOut): Uint8Array;
                toProtoMsg(message: _25.MsgExitSwapExternAmountOut): _25.MsgExitSwapExternAmountOutProtoMsg;
            };
            MsgExitSwapExternAmountOutResponse: {
                typeUrl: string;
                encode(message: _25.MsgExitSwapExternAmountOutResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _25.MsgExitSwapExternAmountOutResponse;
                fromPartial(object: Partial<_25.MsgExitSwapExternAmountOutResponse>): _25.MsgExitSwapExternAmountOutResponse;
                fromAmino(object: _25.MsgExitSwapExternAmountOutResponseAmino): _25.MsgExitSwapExternAmountOutResponse;
                toAmino(message: _25.MsgExitSwapExternAmountOutResponse): _25.MsgExitSwapExternAmountOutResponseAmino;
                fromAminoMsg(object: _25.MsgExitSwapExternAmountOutResponseAminoMsg): _25.MsgExitSwapExternAmountOutResponse;
                toAminoMsg(message: _25.MsgExitSwapExternAmountOutResponse): _25.MsgExitSwapExternAmountOutResponseAminoMsg;
                fromProtoMsg(message: _25.MsgExitSwapExternAmountOutResponseProtoMsg): _25.MsgExitSwapExternAmountOutResponse;
                toProto(message: _25.MsgExitSwapExternAmountOutResponse): Uint8Array;
                toProtoMsg(message: _25.MsgExitSwapExternAmountOutResponse): _25.MsgExitSwapExternAmountOutResponseProtoMsg;
            };
            MigrationRecords: {
                typeUrl: string;
                encode(message: _24.MigrationRecords, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _24.MigrationRecords;
                fromPartial(object: Partial<_24.MigrationRecords>): _24.MigrationRecords;
                fromAmino(object: _24.MigrationRecordsAmino): _24.MigrationRecords;
                toAmino(message: _24.MigrationRecords): _24.MigrationRecordsAmino;
                fromAminoMsg(object: _24.MigrationRecordsAminoMsg): _24.MigrationRecords;
                toAminoMsg(message: _24.MigrationRecords): _24.MigrationRecordsAminoMsg;
                fromProtoMsg(message: _24.MigrationRecordsProtoMsg): _24.MigrationRecords;
                toProto(message: _24.MigrationRecords): Uint8Array;
                toProtoMsg(message: _24.MigrationRecords): _24.MigrationRecordsProtoMsg;
            };
            BalancerToConcentratedPoolLink: {
                typeUrl: string;
                encode(message: _24.BalancerToConcentratedPoolLink, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _24.BalancerToConcentratedPoolLink;
                fromPartial(object: Partial<_24.BalancerToConcentratedPoolLink>): _24.BalancerToConcentratedPoolLink;
                fromAmino(object: _24.BalancerToConcentratedPoolLinkAmino): _24.BalancerToConcentratedPoolLink;
                toAmino(message: _24.BalancerToConcentratedPoolLink): _24.BalancerToConcentratedPoolLinkAmino;
                fromAminoMsg(object: _24.BalancerToConcentratedPoolLinkAminoMsg): _24.BalancerToConcentratedPoolLink;
                toAminoMsg(message: _24.BalancerToConcentratedPoolLink): _24.BalancerToConcentratedPoolLinkAminoMsg;
                fromProtoMsg(message: _24.BalancerToConcentratedPoolLinkProtoMsg): _24.BalancerToConcentratedPoolLink;
                toProto(message: _24.BalancerToConcentratedPoolLink): Uint8Array;
                toProtoMsg(message: _24.BalancerToConcentratedPoolLink): _24.BalancerToConcentratedPoolLinkProtoMsg;
            };
            QueryPoolRequest: {
                typeUrl: string;
                encode(message: _23.QueryPoolRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _23.QueryPoolRequest;
                fromPartial(object: Partial<_23.QueryPoolRequest>): _23.QueryPoolRequest;
                fromAmino(object: _23.QueryPoolRequestAmino): _23.QueryPoolRequest;
                toAmino(message: _23.QueryPoolRequest): _23.QueryPoolRequestAmino;
                fromAminoMsg(object: _23.QueryPoolRequestAminoMsg): _23.QueryPoolRequest;
                toAminoMsg(message: _23.QueryPoolRequest): _23.QueryPoolRequestAminoMsg;
                fromProtoMsg(message: _23.QueryPoolRequestProtoMsg): _23.QueryPoolRequest;
                toProto(message: _23.QueryPoolRequest): Uint8Array;
                toProtoMsg(message: _23.QueryPoolRequest): _23.QueryPoolRequestProtoMsg;
            };
            QueryPoolResponse: {
                typeUrl: string;
                encode(message: _23.QueryPoolResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _23.QueryPoolResponse;
                fromPartial(object: Partial<_23.QueryPoolResponse>): _23.QueryPoolResponse;
                fromAmino(object: _23.QueryPoolResponseAmino): _23.QueryPoolResponse;
                toAmino(message: _23.QueryPoolResponse): _23.QueryPoolResponseAmino;
                fromAminoMsg(object: _23.QueryPoolResponseAminoMsg): _23.QueryPoolResponse;
                toAminoMsg(message: _23.QueryPoolResponse): _23.QueryPoolResponseAminoMsg;
                fromProtoMsg(message: _23.QueryPoolResponseProtoMsg): _23.QueryPoolResponse;
                toProto(message: _23.QueryPoolResponse): Uint8Array;
                toProtoMsg(message: _23.QueryPoolResponse): _23.QueryPoolResponseProtoMsg;
            };
            QueryPoolsRequest: {
                typeUrl: string;
                encode(message: _23.QueryPoolsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _23.QueryPoolsRequest;
                fromPartial(object: Partial<_23.QueryPoolsRequest>): _23.QueryPoolsRequest;
                fromAmino(object: _23.QueryPoolsRequestAmino): _23.QueryPoolsRequest;
                toAmino(message: _23.QueryPoolsRequest): _23.QueryPoolsRequestAmino;
                fromAminoMsg(object: _23.QueryPoolsRequestAminoMsg): _23.QueryPoolsRequest;
                toAminoMsg(message: _23.QueryPoolsRequest): _23.QueryPoolsRequestAminoMsg;
                fromProtoMsg(message: _23.QueryPoolsRequestProtoMsg): _23.QueryPoolsRequest;
                toProto(message: _23.QueryPoolsRequest): Uint8Array;
                toProtoMsg(message: _23.QueryPoolsRequest): _23.QueryPoolsRequestProtoMsg;
            };
            QueryPoolsResponse: {
                typeUrl: string;
                encode(message: _23.QueryPoolsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _23.QueryPoolsResponse;
                fromPartial(object: Partial<_23.QueryPoolsResponse>): _23.QueryPoolsResponse;
                fromAmino(object: _23.QueryPoolsResponseAmino): _23.QueryPoolsResponse;
                toAmino(message: _23.QueryPoolsResponse): _23.QueryPoolsResponseAmino;
                fromAminoMsg(object: _23.QueryPoolsResponseAminoMsg): _23.QueryPoolsResponse;
                toAminoMsg(message: _23.QueryPoolsResponse): _23.QueryPoolsResponseAminoMsg;
                fromProtoMsg(message: _23.QueryPoolsResponseProtoMsg): _23.QueryPoolsResponse;
                toProto(message: _23.QueryPoolsResponse): Uint8Array;
                toProtoMsg(message: _23.QueryPoolsResponse): _23.QueryPoolsResponseProtoMsg;
            };
            QueryNumPoolsRequest: {
                typeUrl: string;
                encode(_: _23.QueryNumPoolsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _23.QueryNumPoolsRequest;
                fromPartial(_: Partial<_23.QueryNumPoolsRequest>): _23.QueryNumPoolsRequest;
                fromAmino(_: _23.QueryNumPoolsRequestAmino): _23.QueryNumPoolsRequest;
                toAmino(_: _23.QueryNumPoolsRequest): _23.QueryNumPoolsRequestAmino;
                fromAminoMsg(object: _23.QueryNumPoolsRequestAminoMsg): _23.QueryNumPoolsRequest;
                toAminoMsg(message: _23.QueryNumPoolsRequest): _23.QueryNumPoolsRequestAminoMsg;
                fromProtoMsg(message: _23.QueryNumPoolsRequestProtoMsg): _23.QueryNumPoolsRequest;
                toProto(message: _23.QueryNumPoolsRequest): Uint8Array;
                toProtoMsg(message: _23.QueryNumPoolsRequest): _23.QueryNumPoolsRequestProtoMsg;
            };
            QueryNumPoolsResponse: {
                typeUrl: string;
                encode(message: _23.QueryNumPoolsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _23.QueryNumPoolsResponse;
                fromPartial(object: Partial<_23.QueryNumPoolsResponse>): _23.QueryNumPoolsResponse;
                fromAmino(object: _23.QueryNumPoolsResponseAmino): _23.QueryNumPoolsResponse;
                toAmino(message: _23.QueryNumPoolsResponse): _23.QueryNumPoolsResponseAmino;
                fromAminoMsg(object: _23.QueryNumPoolsResponseAminoMsg): _23.QueryNumPoolsResponse;
                toAminoMsg(message: _23.QueryNumPoolsResponse): _23.QueryNumPoolsResponseAminoMsg;
                fromProtoMsg(message: _23.QueryNumPoolsResponseProtoMsg): _23.QueryNumPoolsResponse;
                toProto(message: _23.QueryNumPoolsResponse): Uint8Array;
                toProtoMsg(message: _23.QueryNumPoolsResponse): _23.QueryNumPoolsResponseProtoMsg;
            };
            QueryPoolTypeRequest: {
                typeUrl: string;
                encode(message: _23.QueryPoolTypeRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _23.QueryPoolTypeRequest;
                fromPartial(object: Partial<_23.QueryPoolTypeRequest>): _23.QueryPoolTypeRequest;
                fromAmino(object: _23.QueryPoolTypeRequestAmino): _23.QueryPoolTypeRequest;
                toAmino(message: _23.QueryPoolTypeRequest): _23.QueryPoolTypeRequestAmino;
                fromAminoMsg(object: _23.QueryPoolTypeRequestAminoMsg): _23.QueryPoolTypeRequest;
                toAminoMsg(message: _23.QueryPoolTypeRequest): _23.QueryPoolTypeRequestAminoMsg;
                fromProtoMsg(message: _23.QueryPoolTypeRequestProtoMsg): _23.QueryPoolTypeRequest;
                toProto(message: _23.QueryPoolTypeRequest): Uint8Array;
                toProtoMsg(message: _23.QueryPoolTypeRequest): _23.QueryPoolTypeRequestProtoMsg;
            };
            QueryPoolTypeResponse: {
                typeUrl: string;
                encode(message: _23.QueryPoolTypeResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _23.QueryPoolTypeResponse;
                fromPartial(object: Partial<_23.QueryPoolTypeResponse>): _23.QueryPoolTypeResponse;
                fromAmino(object: _23.QueryPoolTypeResponseAmino): _23.QueryPoolTypeResponse;
                toAmino(message: _23.QueryPoolTypeResponse): _23.QueryPoolTypeResponseAmino;
                fromAminoMsg(object: _23.QueryPoolTypeResponseAminoMsg): _23.QueryPoolTypeResponse;
                toAminoMsg(message: _23.QueryPoolTypeResponse): _23.QueryPoolTypeResponseAminoMsg;
                fromProtoMsg(message: _23.QueryPoolTypeResponseProtoMsg): _23.QueryPoolTypeResponse;
                toProto(message: _23.QueryPoolTypeResponse): Uint8Array;
                toProtoMsg(message: _23.QueryPoolTypeResponse): _23.QueryPoolTypeResponseProtoMsg;
            };
            QueryCalcJoinPoolSharesRequest: {
                typeUrl: string;
                encode(message: _23.QueryCalcJoinPoolSharesRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _23.QueryCalcJoinPoolSharesRequest;
                fromPartial(object: Partial<_23.QueryCalcJoinPoolSharesRequest>): _23.QueryCalcJoinPoolSharesRequest;
                fromAmino(object: _23.QueryCalcJoinPoolSharesRequestAmino): _23.QueryCalcJoinPoolSharesRequest;
                toAmino(message: _23.QueryCalcJoinPoolSharesRequest): _23.QueryCalcJoinPoolSharesRequestAmino;
                fromAminoMsg(object: _23.QueryCalcJoinPoolSharesRequestAminoMsg): _23.QueryCalcJoinPoolSharesRequest;
                toAminoMsg(message: _23.QueryCalcJoinPoolSharesRequest): _23.QueryCalcJoinPoolSharesRequestAminoMsg;
                fromProtoMsg(message: _23.QueryCalcJoinPoolSharesRequestProtoMsg): _23.QueryCalcJoinPoolSharesRequest;
                toProto(message: _23.QueryCalcJoinPoolSharesRequest): Uint8Array;
                toProtoMsg(message: _23.QueryCalcJoinPoolSharesRequest): _23.QueryCalcJoinPoolSharesRequestProtoMsg;
            };
            QueryCalcJoinPoolSharesResponse: {
                typeUrl: string;
                encode(message: _23.QueryCalcJoinPoolSharesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _23.QueryCalcJoinPoolSharesResponse;
                fromPartial(object: Partial<_23.QueryCalcJoinPoolSharesResponse>): _23.QueryCalcJoinPoolSharesResponse;
                fromAmino(object: _23.QueryCalcJoinPoolSharesResponseAmino): _23.QueryCalcJoinPoolSharesResponse;
                toAmino(message: _23.QueryCalcJoinPoolSharesResponse): _23.QueryCalcJoinPoolSharesResponseAmino;
                fromAminoMsg(object: _23.QueryCalcJoinPoolSharesResponseAminoMsg): _23.QueryCalcJoinPoolSharesResponse;
                toAminoMsg(message: _23.QueryCalcJoinPoolSharesResponse): _23.QueryCalcJoinPoolSharesResponseAminoMsg;
                fromProtoMsg(message: _23.QueryCalcJoinPoolSharesResponseProtoMsg): _23.QueryCalcJoinPoolSharesResponse;
                toProto(message: _23.QueryCalcJoinPoolSharesResponse): Uint8Array;
                toProtoMsg(message: _23.QueryCalcJoinPoolSharesResponse): _23.QueryCalcJoinPoolSharesResponseProtoMsg;
            };
            QueryCalcExitPoolCoinsFromSharesRequest: {
                typeUrl: string;
                encode(message: _23.QueryCalcExitPoolCoinsFromSharesRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _23.QueryCalcExitPoolCoinsFromSharesRequest;
                fromPartial(object: Partial<_23.QueryCalcExitPoolCoinsFromSharesRequest>): _23.QueryCalcExitPoolCoinsFromSharesRequest;
                fromAmino(object: _23.QueryCalcExitPoolCoinsFromSharesRequestAmino): _23.QueryCalcExitPoolCoinsFromSharesRequest;
                toAmino(message: _23.QueryCalcExitPoolCoinsFromSharesRequest): _23.QueryCalcExitPoolCoinsFromSharesRequestAmino;
                fromAminoMsg(object: _23.QueryCalcExitPoolCoinsFromSharesRequestAminoMsg): _23.QueryCalcExitPoolCoinsFromSharesRequest;
                toAminoMsg(message: _23.QueryCalcExitPoolCoinsFromSharesRequest): _23.QueryCalcExitPoolCoinsFromSharesRequestAminoMsg;
                fromProtoMsg(message: _23.QueryCalcExitPoolCoinsFromSharesRequestProtoMsg): _23.QueryCalcExitPoolCoinsFromSharesRequest;
                toProto(message: _23.QueryCalcExitPoolCoinsFromSharesRequest): Uint8Array;
                toProtoMsg(message: _23.QueryCalcExitPoolCoinsFromSharesRequest): _23.QueryCalcExitPoolCoinsFromSharesRequestProtoMsg;
            };
            QueryCalcExitPoolCoinsFromSharesResponse: {
                typeUrl: string;
                encode(message: _23.QueryCalcExitPoolCoinsFromSharesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _23.QueryCalcExitPoolCoinsFromSharesResponse;
                fromPartial(object: Partial<_23.QueryCalcExitPoolCoinsFromSharesResponse>): _23.QueryCalcExitPoolCoinsFromSharesResponse;
                fromAmino(object: _23.QueryCalcExitPoolCoinsFromSharesResponseAmino): _23.QueryCalcExitPoolCoinsFromSharesResponse;
                toAmino(message: _23.QueryCalcExitPoolCoinsFromSharesResponse): _23.QueryCalcExitPoolCoinsFromSharesResponseAmino;
                fromAminoMsg(object: _23.QueryCalcExitPoolCoinsFromSharesResponseAminoMsg): _23.QueryCalcExitPoolCoinsFromSharesResponse;
                toAminoMsg(message: _23.QueryCalcExitPoolCoinsFromSharesResponse): _23.QueryCalcExitPoolCoinsFromSharesResponseAminoMsg;
                fromProtoMsg(message: _23.QueryCalcExitPoolCoinsFromSharesResponseProtoMsg): _23.QueryCalcExitPoolCoinsFromSharesResponse;
                toProto(message: _23.QueryCalcExitPoolCoinsFromSharesResponse): Uint8Array;
                toProtoMsg(message: _23.QueryCalcExitPoolCoinsFromSharesResponse): _23.QueryCalcExitPoolCoinsFromSharesResponseProtoMsg;
            };
            QueryPoolParamsRequest: {
                typeUrl: string;
                encode(message: _23.QueryPoolParamsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _23.QueryPoolParamsRequest;
                fromPartial(object: Partial<_23.QueryPoolParamsRequest>): _23.QueryPoolParamsRequest;
                fromAmino(object: _23.QueryPoolParamsRequestAmino): _23.QueryPoolParamsRequest;
                toAmino(message: _23.QueryPoolParamsRequest): _23.QueryPoolParamsRequestAmino;
                fromAminoMsg(object: _23.QueryPoolParamsRequestAminoMsg): _23.QueryPoolParamsRequest;
                toAminoMsg(message: _23.QueryPoolParamsRequest): _23.QueryPoolParamsRequestAminoMsg;
                fromProtoMsg(message: _23.QueryPoolParamsRequestProtoMsg): _23.QueryPoolParamsRequest;
                toProto(message: _23.QueryPoolParamsRequest): Uint8Array;
                toProtoMsg(message: _23.QueryPoolParamsRequest): _23.QueryPoolParamsRequestProtoMsg;
            };
            QueryPoolParamsResponse: {
                typeUrl: string;
                encode(message: _23.QueryPoolParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _23.QueryPoolParamsResponse;
                fromPartial(object: Partial<_23.QueryPoolParamsResponse>): _23.QueryPoolParamsResponse;
                fromAmino(object: _23.QueryPoolParamsResponseAmino): _23.QueryPoolParamsResponse;
                toAmino(message: _23.QueryPoolParamsResponse): _23.QueryPoolParamsResponseAmino;
                fromAminoMsg(object: _23.QueryPoolParamsResponseAminoMsg): _23.QueryPoolParamsResponse;
                toAminoMsg(message: _23.QueryPoolParamsResponse): _23.QueryPoolParamsResponseAminoMsg;
                fromProtoMsg(message: _23.QueryPoolParamsResponseProtoMsg): _23.QueryPoolParamsResponse;
                toProto(message: _23.QueryPoolParamsResponse): Uint8Array;
                toProtoMsg(message: _23.QueryPoolParamsResponse): _23.QueryPoolParamsResponseProtoMsg;
            };
            QueryTotalPoolLiquidityRequest: {
                typeUrl: string;
                encode(message: _23.QueryTotalPoolLiquidityRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _23.QueryTotalPoolLiquidityRequest;
                fromPartial(object: Partial<_23.QueryTotalPoolLiquidityRequest>): _23.QueryTotalPoolLiquidityRequest;
                fromAmino(object: _23.QueryTotalPoolLiquidityRequestAmino): _23.QueryTotalPoolLiquidityRequest;
                toAmino(message: _23.QueryTotalPoolLiquidityRequest): _23.QueryTotalPoolLiquidityRequestAmino;
                fromAminoMsg(object: _23.QueryTotalPoolLiquidityRequestAminoMsg): _23.QueryTotalPoolLiquidityRequest;
                toAminoMsg(message: _23.QueryTotalPoolLiquidityRequest): _23.QueryTotalPoolLiquidityRequestAminoMsg;
                fromProtoMsg(message: _23.QueryTotalPoolLiquidityRequestProtoMsg): _23.QueryTotalPoolLiquidityRequest;
                toProto(message: _23.QueryTotalPoolLiquidityRequest): Uint8Array;
                toProtoMsg(message: _23.QueryTotalPoolLiquidityRequest): _23.QueryTotalPoolLiquidityRequestProtoMsg;
            };
            QueryTotalPoolLiquidityResponse: {
                typeUrl: string;
                encode(message: _23.QueryTotalPoolLiquidityResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _23.QueryTotalPoolLiquidityResponse;
                fromPartial(object: Partial<_23.QueryTotalPoolLiquidityResponse>): _23.QueryTotalPoolLiquidityResponse;
                fromAmino(object: _23.QueryTotalPoolLiquidityResponseAmino): _23.QueryTotalPoolLiquidityResponse;
                toAmino(message: _23.QueryTotalPoolLiquidityResponse): _23.QueryTotalPoolLiquidityResponseAmino;
                fromAminoMsg(object: _23.QueryTotalPoolLiquidityResponseAminoMsg): _23.QueryTotalPoolLiquidityResponse;
                toAminoMsg(message: _23.QueryTotalPoolLiquidityResponse): _23.QueryTotalPoolLiquidityResponseAminoMsg;
                fromProtoMsg(message: _23.QueryTotalPoolLiquidityResponseProtoMsg): _23.QueryTotalPoolLiquidityResponse;
                toProto(message: _23.QueryTotalPoolLiquidityResponse): Uint8Array;
                toProtoMsg(message: _23.QueryTotalPoolLiquidityResponse): _23.QueryTotalPoolLiquidityResponseProtoMsg;
            };
            QueryTotalSharesRequest: {
                typeUrl: string;
                encode(message: _23.QueryTotalSharesRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _23.QueryTotalSharesRequest;
                fromPartial(object: Partial<_23.QueryTotalSharesRequest>): _23.QueryTotalSharesRequest;
                fromAmino(object: _23.QueryTotalSharesRequestAmino): _23.QueryTotalSharesRequest;
                toAmino(message: _23.QueryTotalSharesRequest): _23.QueryTotalSharesRequestAmino;
                fromAminoMsg(object: _23.QueryTotalSharesRequestAminoMsg): _23.QueryTotalSharesRequest;
                toAminoMsg(message: _23.QueryTotalSharesRequest): _23.QueryTotalSharesRequestAminoMsg;
                fromProtoMsg(message: _23.QueryTotalSharesRequestProtoMsg): _23.QueryTotalSharesRequest;
                toProto(message: _23.QueryTotalSharesRequest): Uint8Array;
                toProtoMsg(message: _23.QueryTotalSharesRequest): _23.QueryTotalSharesRequestProtoMsg;
            };
            QueryTotalSharesResponse: {
                typeUrl: string;
                encode(message: _23.QueryTotalSharesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _23.QueryTotalSharesResponse;
                fromPartial(object: Partial<_23.QueryTotalSharesResponse>): _23.QueryTotalSharesResponse;
                fromAmino(object: _23.QueryTotalSharesResponseAmino): _23.QueryTotalSharesResponse;
                toAmino(message: _23.QueryTotalSharesResponse): _23.QueryTotalSharesResponseAmino;
                fromAminoMsg(object: _23.QueryTotalSharesResponseAminoMsg): _23.QueryTotalSharesResponse;
                toAminoMsg(message: _23.QueryTotalSharesResponse): _23.QueryTotalSharesResponseAminoMsg;
                fromProtoMsg(message: _23.QueryTotalSharesResponseProtoMsg): _23.QueryTotalSharesResponse;
                toProto(message: _23.QueryTotalSharesResponse): Uint8Array;
                toProtoMsg(message: _23.QueryTotalSharesResponse): _23.QueryTotalSharesResponseProtoMsg;
            };
            QueryCalcJoinPoolNoSwapSharesRequest: {
                typeUrl: string;
                encode(message: _23.QueryCalcJoinPoolNoSwapSharesRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _23.QueryCalcJoinPoolNoSwapSharesRequest;
                fromPartial(object: Partial<_23.QueryCalcJoinPoolNoSwapSharesRequest>): _23.QueryCalcJoinPoolNoSwapSharesRequest;
                fromAmino(object: _23.QueryCalcJoinPoolNoSwapSharesRequestAmino): _23.QueryCalcJoinPoolNoSwapSharesRequest;
                toAmino(message: _23.QueryCalcJoinPoolNoSwapSharesRequest): _23.QueryCalcJoinPoolNoSwapSharesRequestAmino;
                fromAminoMsg(object: _23.QueryCalcJoinPoolNoSwapSharesRequestAminoMsg): _23.QueryCalcJoinPoolNoSwapSharesRequest;
                toAminoMsg(message: _23.QueryCalcJoinPoolNoSwapSharesRequest): _23.QueryCalcJoinPoolNoSwapSharesRequestAminoMsg;
                fromProtoMsg(message: _23.QueryCalcJoinPoolNoSwapSharesRequestProtoMsg): _23.QueryCalcJoinPoolNoSwapSharesRequest;
                toProto(message: _23.QueryCalcJoinPoolNoSwapSharesRequest): Uint8Array;
                toProtoMsg(message: _23.QueryCalcJoinPoolNoSwapSharesRequest): _23.QueryCalcJoinPoolNoSwapSharesRequestProtoMsg;
            };
            QueryCalcJoinPoolNoSwapSharesResponse: {
                typeUrl: string;
                encode(message: _23.QueryCalcJoinPoolNoSwapSharesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _23.QueryCalcJoinPoolNoSwapSharesResponse;
                fromPartial(object: Partial<_23.QueryCalcJoinPoolNoSwapSharesResponse>): _23.QueryCalcJoinPoolNoSwapSharesResponse;
                fromAmino(object: _23.QueryCalcJoinPoolNoSwapSharesResponseAmino): _23.QueryCalcJoinPoolNoSwapSharesResponse;
                toAmino(message: _23.QueryCalcJoinPoolNoSwapSharesResponse): _23.QueryCalcJoinPoolNoSwapSharesResponseAmino;
                fromAminoMsg(object: _23.QueryCalcJoinPoolNoSwapSharesResponseAminoMsg): _23.QueryCalcJoinPoolNoSwapSharesResponse;
                toAminoMsg(message: _23.QueryCalcJoinPoolNoSwapSharesResponse): _23.QueryCalcJoinPoolNoSwapSharesResponseAminoMsg;
                fromProtoMsg(message: _23.QueryCalcJoinPoolNoSwapSharesResponseProtoMsg): _23.QueryCalcJoinPoolNoSwapSharesResponse;
                toProto(message: _23.QueryCalcJoinPoolNoSwapSharesResponse): Uint8Array;
                toProtoMsg(message: _23.QueryCalcJoinPoolNoSwapSharesResponse): _23.QueryCalcJoinPoolNoSwapSharesResponseProtoMsg;
            };
            QuerySpotPriceRequest: {
                typeUrl: string;
                encode(message: _23.QuerySpotPriceRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _23.QuerySpotPriceRequest;
                fromPartial(object: Partial<_23.QuerySpotPriceRequest>): _23.QuerySpotPriceRequest;
                fromAmino(object: _23.QuerySpotPriceRequestAmino): _23.QuerySpotPriceRequest;
                toAmino(message: _23.QuerySpotPriceRequest): _23.QuerySpotPriceRequestAmino;
                fromAminoMsg(object: _23.QuerySpotPriceRequestAminoMsg): _23.QuerySpotPriceRequest;
                toAminoMsg(message: _23.QuerySpotPriceRequest): _23.QuerySpotPriceRequestAminoMsg;
                fromProtoMsg(message: _23.QuerySpotPriceRequestProtoMsg): _23.QuerySpotPriceRequest;
                toProto(message: _23.QuerySpotPriceRequest): Uint8Array;
                toProtoMsg(message: _23.QuerySpotPriceRequest): _23.QuerySpotPriceRequestProtoMsg;
            };
            QueryPoolsWithFilterRequest: {
                typeUrl: string;
                encode(message: _23.QueryPoolsWithFilterRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _23.QueryPoolsWithFilterRequest;
                fromPartial(object: Partial<_23.QueryPoolsWithFilterRequest>): _23.QueryPoolsWithFilterRequest;
                fromAmino(object: _23.QueryPoolsWithFilterRequestAmino): _23.QueryPoolsWithFilterRequest;
                toAmino(message: _23.QueryPoolsWithFilterRequest): _23.QueryPoolsWithFilterRequestAmino;
                fromAminoMsg(object: _23.QueryPoolsWithFilterRequestAminoMsg): _23.QueryPoolsWithFilterRequest;
                toAminoMsg(message: _23.QueryPoolsWithFilterRequest): _23.QueryPoolsWithFilterRequestAminoMsg;
                fromProtoMsg(message: _23.QueryPoolsWithFilterRequestProtoMsg): _23.QueryPoolsWithFilterRequest;
                toProto(message: _23.QueryPoolsWithFilterRequest): Uint8Array;
                toProtoMsg(message: _23.QueryPoolsWithFilterRequest): _23.QueryPoolsWithFilterRequestProtoMsg;
            };
            QueryPoolsWithFilterResponse: {
                typeUrl: string;
                encode(message: _23.QueryPoolsWithFilterResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _23.QueryPoolsWithFilterResponse;
                fromPartial(object: Partial<_23.QueryPoolsWithFilterResponse>): _23.QueryPoolsWithFilterResponse;
                fromAmino(object: _23.QueryPoolsWithFilterResponseAmino): _23.QueryPoolsWithFilterResponse;
                toAmino(message: _23.QueryPoolsWithFilterResponse): _23.QueryPoolsWithFilterResponseAmino;
                fromAminoMsg(object: _23.QueryPoolsWithFilterResponseAminoMsg): _23.QueryPoolsWithFilterResponse;
                toAminoMsg(message: _23.QueryPoolsWithFilterResponse): _23.QueryPoolsWithFilterResponseAminoMsg;
                fromProtoMsg(message: _23.QueryPoolsWithFilterResponseProtoMsg): _23.QueryPoolsWithFilterResponse;
                toProto(message: _23.QueryPoolsWithFilterResponse): Uint8Array;
                toProtoMsg(message: _23.QueryPoolsWithFilterResponse): _23.QueryPoolsWithFilterResponseProtoMsg;
            };
            QuerySpotPriceResponse: {
                typeUrl: string;
                encode(message: _23.QuerySpotPriceResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _23.QuerySpotPriceResponse;
                fromPartial(object: Partial<_23.QuerySpotPriceResponse>): _23.QuerySpotPriceResponse;
                fromAmino(object: _23.QuerySpotPriceResponseAmino): _23.QuerySpotPriceResponse;
                toAmino(message: _23.QuerySpotPriceResponse): _23.QuerySpotPriceResponseAmino;
                fromAminoMsg(object: _23.QuerySpotPriceResponseAminoMsg): _23.QuerySpotPriceResponse;
                toAminoMsg(message: _23.QuerySpotPriceResponse): _23.QuerySpotPriceResponseAminoMsg;
                fromProtoMsg(message: _23.QuerySpotPriceResponseProtoMsg): _23.QuerySpotPriceResponse;
                toProto(message: _23.QuerySpotPriceResponse): Uint8Array;
                toProtoMsg(message: _23.QuerySpotPriceResponse): _23.QuerySpotPriceResponseProtoMsg;
            };
            QuerySwapExactAmountInRequest: {
                typeUrl: string;
                encode(message: _23.QuerySwapExactAmountInRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _23.QuerySwapExactAmountInRequest;
                fromPartial(object: Partial<_23.QuerySwapExactAmountInRequest>): _23.QuerySwapExactAmountInRequest;
                fromAmino(object: _23.QuerySwapExactAmountInRequestAmino): _23.QuerySwapExactAmountInRequest;
                toAmino(message: _23.QuerySwapExactAmountInRequest): _23.QuerySwapExactAmountInRequestAmino;
                fromAminoMsg(object: _23.QuerySwapExactAmountInRequestAminoMsg): _23.QuerySwapExactAmountInRequest;
                toAminoMsg(message: _23.QuerySwapExactAmountInRequest): _23.QuerySwapExactAmountInRequestAminoMsg;
                fromProtoMsg(message: _23.QuerySwapExactAmountInRequestProtoMsg): _23.QuerySwapExactAmountInRequest;
                toProto(message: _23.QuerySwapExactAmountInRequest): Uint8Array;
                toProtoMsg(message: _23.QuerySwapExactAmountInRequest): _23.QuerySwapExactAmountInRequestProtoMsg;
            };
            QuerySwapExactAmountInResponse: {
                typeUrl: string;
                encode(message: _23.QuerySwapExactAmountInResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _23.QuerySwapExactAmountInResponse;
                fromPartial(object: Partial<_23.QuerySwapExactAmountInResponse>): _23.QuerySwapExactAmountInResponse;
                fromAmino(object: _23.QuerySwapExactAmountInResponseAmino): _23.QuerySwapExactAmountInResponse;
                toAmino(message: _23.QuerySwapExactAmountInResponse): _23.QuerySwapExactAmountInResponseAmino;
                fromAminoMsg(object: _23.QuerySwapExactAmountInResponseAminoMsg): _23.QuerySwapExactAmountInResponse;
                toAminoMsg(message: _23.QuerySwapExactAmountInResponse): _23.QuerySwapExactAmountInResponseAminoMsg;
                fromProtoMsg(message: _23.QuerySwapExactAmountInResponseProtoMsg): _23.QuerySwapExactAmountInResponse;
                toProto(message: _23.QuerySwapExactAmountInResponse): Uint8Array;
                toProtoMsg(message: _23.QuerySwapExactAmountInResponse): _23.QuerySwapExactAmountInResponseProtoMsg;
            };
            QuerySwapExactAmountOutRequest: {
                typeUrl: string;
                encode(message: _23.QuerySwapExactAmountOutRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _23.QuerySwapExactAmountOutRequest;
                fromPartial(object: Partial<_23.QuerySwapExactAmountOutRequest>): _23.QuerySwapExactAmountOutRequest;
                fromAmino(object: _23.QuerySwapExactAmountOutRequestAmino): _23.QuerySwapExactAmountOutRequest;
                toAmino(message: _23.QuerySwapExactAmountOutRequest): _23.QuerySwapExactAmountOutRequestAmino;
                fromAminoMsg(object: _23.QuerySwapExactAmountOutRequestAminoMsg): _23.QuerySwapExactAmountOutRequest;
                toAminoMsg(message: _23.QuerySwapExactAmountOutRequest): _23.QuerySwapExactAmountOutRequestAminoMsg;
                fromProtoMsg(message: _23.QuerySwapExactAmountOutRequestProtoMsg): _23.QuerySwapExactAmountOutRequest;
                toProto(message: _23.QuerySwapExactAmountOutRequest): Uint8Array;
                toProtoMsg(message: _23.QuerySwapExactAmountOutRequest): _23.QuerySwapExactAmountOutRequestProtoMsg;
            };
            QuerySwapExactAmountOutResponse: {
                typeUrl: string;
                encode(message: _23.QuerySwapExactAmountOutResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _23.QuerySwapExactAmountOutResponse;
                fromPartial(object: Partial<_23.QuerySwapExactAmountOutResponse>): _23.QuerySwapExactAmountOutResponse;
                fromAmino(object: _23.QuerySwapExactAmountOutResponseAmino): _23.QuerySwapExactAmountOutResponse;
                toAmino(message: _23.QuerySwapExactAmountOutResponse): _23.QuerySwapExactAmountOutResponseAmino;
                fromAminoMsg(object: _23.QuerySwapExactAmountOutResponseAminoMsg): _23.QuerySwapExactAmountOutResponse;
                toAminoMsg(message: _23.QuerySwapExactAmountOutResponse): _23.QuerySwapExactAmountOutResponseAminoMsg;
                fromProtoMsg(message: _23.QuerySwapExactAmountOutResponseProtoMsg): _23.QuerySwapExactAmountOutResponse;
                toProto(message: _23.QuerySwapExactAmountOutResponse): Uint8Array;
                toProtoMsg(message: _23.QuerySwapExactAmountOutResponse): _23.QuerySwapExactAmountOutResponseProtoMsg;
            };
            QueryTotalLiquidityRequest: {
                typeUrl: string;
                encode(_: _23.QueryTotalLiquidityRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _23.QueryTotalLiquidityRequest;
                fromPartial(_: Partial<_23.QueryTotalLiquidityRequest>): _23.QueryTotalLiquidityRequest;
                fromAmino(_: _23.QueryTotalLiquidityRequestAmino): _23.QueryTotalLiquidityRequest;
                toAmino(_: _23.QueryTotalLiquidityRequest): _23.QueryTotalLiquidityRequestAmino;
                fromAminoMsg(object: _23.QueryTotalLiquidityRequestAminoMsg): _23.QueryTotalLiquidityRequest;
                toAminoMsg(message: _23.QueryTotalLiquidityRequest): _23.QueryTotalLiquidityRequestAminoMsg;
                fromProtoMsg(message: _23.QueryTotalLiquidityRequestProtoMsg): _23.QueryTotalLiquidityRequest;
                toProto(message: _23.QueryTotalLiquidityRequest): Uint8Array;
                toProtoMsg(message: _23.QueryTotalLiquidityRequest): _23.QueryTotalLiquidityRequestProtoMsg;
            };
            QueryTotalLiquidityResponse: {
                typeUrl: string;
                encode(message: _23.QueryTotalLiquidityResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _23.QueryTotalLiquidityResponse;
                fromPartial(object: Partial<_23.QueryTotalLiquidityResponse>): _23.QueryTotalLiquidityResponse;
                fromAmino(object: _23.QueryTotalLiquidityResponseAmino): _23.QueryTotalLiquidityResponse;
                toAmino(message: _23.QueryTotalLiquidityResponse): _23.QueryTotalLiquidityResponseAmino;
                fromAminoMsg(object: _23.QueryTotalLiquidityResponseAminoMsg): _23.QueryTotalLiquidityResponse;
                toAminoMsg(message: _23.QueryTotalLiquidityResponse): _23.QueryTotalLiquidityResponseAminoMsg;
                fromProtoMsg(message: _23.QueryTotalLiquidityResponseProtoMsg): _23.QueryTotalLiquidityResponse;
                toProto(message: _23.QueryTotalLiquidityResponse): Uint8Array;
                toProtoMsg(message: _23.QueryTotalLiquidityResponse): _23.QueryTotalLiquidityResponseProtoMsg;
            };
            QueryConcentratedPoolIdLinkFromCFMMRequest: {
                typeUrl: string;
                encode(message: _23.QueryConcentratedPoolIdLinkFromCFMMRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _23.QueryConcentratedPoolIdLinkFromCFMMRequest;
                fromPartial(object: Partial<_23.QueryConcentratedPoolIdLinkFromCFMMRequest>): _23.QueryConcentratedPoolIdLinkFromCFMMRequest;
                fromAmino(object: _23.QueryConcentratedPoolIdLinkFromCFMMRequestAmino): _23.QueryConcentratedPoolIdLinkFromCFMMRequest;
                toAmino(message: _23.QueryConcentratedPoolIdLinkFromCFMMRequest): _23.QueryConcentratedPoolIdLinkFromCFMMRequestAmino;
                fromAminoMsg(object: _23.QueryConcentratedPoolIdLinkFromCFMMRequestAminoMsg): _23.QueryConcentratedPoolIdLinkFromCFMMRequest;
                toAminoMsg(message: _23.QueryConcentratedPoolIdLinkFromCFMMRequest): _23.QueryConcentratedPoolIdLinkFromCFMMRequestAminoMsg;
                fromProtoMsg(message: _23.QueryConcentratedPoolIdLinkFromCFMMRequestProtoMsg): _23.QueryConcentratedPoolIdLinkFromCFMMRequest;
                toProto(message: _23.QueryConcentratedPoolIdLinkFromCFMMRequest): Uint8Array;
                toProtoMsg(message: _23.QueryConcentratedPoolIdLinkFromCFMMRequest): _23.QueryConcentratedPoolIdLinkFromCFMMRequestProtoMsg;
            };
            QueryConcentratedPoolIdLinkFromCFMMResponse: {
                typeUrl: string;
                encode(message: _23.QueryConcentratedPoolIdLinkFromCFMMResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _23.QueryConcentratedPoolIdLinkFromCFMMResponse;
                fromPartial(object: Partial<_23.QueryConcentratedPoolIdLinkFromCFMMResponse>): _23.QueryConcentratedPoolIdLinkFromCFMMResponse;
                fromAmino(object: _23.QueryConcentratedPoolIdLinkFromCFMMResponseAmino): _23.QueryConcentratedPoolIdLinkFromCFMMResponse;
                toAmino(message: _23.QueryConcentratedPoolIdLinkFromCFMMResponse): _23.QueryConcentratedPoolIdLinkFromCFMMResponseAmino;
                fromAminoMsg(object: _23.QueryConcentratedPoolIdLinkFromCFMMResponseAminoMsg): _23.QueryConcentratedPoolIdLinkFromCFMMResponse;
                toAminoMsg(message: _23.QueryConcentratedPoolIdLinkFromCFMMResponse): _23.QueryConcentratedPoolIdLinkFromCFMMResponseAminoMsg;
                fromProtoMsg(message: _23.QueryConcentratedPoolIdLinkFromCFMMResponseProtoMsg): _23.QueryConcentratedPoolIdLinkFromCFMMResponse;
                toProto(message: _23.QueryConcentratedPoolIdLinkFromCFMMResponse): Uint8Array;
                toProtoMsg(message: _23.QueryConcentratedPoolIdLinkFromCFMMResponse): _23.QueryConcentratedPoolIdLinkFromCFMMResponseProtoMsg;
            };
            QueryCFMMConcentratedPoolLinksRequest: {
                typeUrl: string;
                encode(_: _23.QueryCFMMConcentratedPoolLinksRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _23.QueryCFMMConcentratedPoolLinksRequest;
                fromPartial(_: Partial<_23.QueryCFMMConcentratedPoolLinksRequest>): _23.QueryCFMMConcentratedPoolLinksRequest;
                fromAmino(_: _23.QueryCFMMConcentratedPoolLinksRequestAmino): _23.QueryCFMMConcentratedPoolLinksRequest;
                toAmino(_: _23.QueryCFMMConcentratedPoolLinksRequest): _23.QueryCFMMConcentratedPoolLinksRequestAmino;
                fromAminoMsg(object: _23.QueryCFMMConcentratedPoolLinksRequestAminoMsg): _23.QueryCFMMConcentratedPoolLinksRequest;
                toAminoMsg(message: _23.QueryCFMMConcentratedPoolLinksRequest): _23.QueryCFMMConcentratedPoolLinksRequestAminoMsg;
                fromProtoMsg(message: _23.QueryCFMMConcentratedPoolLinksRequestProtoMsg): _23.QueryCFMMConcentratedPoolLinksRequest;
                toProto(message: _23.QueryCFMMConcentratedPoolLinksRequest): Uint8Array;
                toProtoMsg(message: _23.QueryCFMMConcentratedPoolLinksRequest): _23.QueryCFMMConcentratedPoolLinksRequestProtoMsg;
            };
            QueryCFMMConcentratedPoolLinksResponse: {
                typeUrl: string;
                encode(message: _23.QueryCFMMConcentratedPoolLinksResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _23.QueryCFMMConcentratedPoolLinksResponse;
                fromPartial(object: Partial<_23.QueryCFMMConcentratedPoolLinksResponse>): _23.QueryCFMMConcentratedPoolLinksResponse;
                fromAmino(object: _23.QueryCFMMConcentratedPoolLinksResponseAmino): _23.QueryCFMMConcentratedPoolLinksResponse;
                toAmino(message: _23.QueryCFMMConcentratedPoolLinksResponse): _23.QueryCFMMConcentratedPoolLinksResponseAmino;
                fromAminoMsg(object: _23.QueryCFMMConcentratedPoolLinksResponseAminoMsg): _23.QueryCFMMConcentratedPoolLinksResponse;
                toAminoMsg(message: _23.QueryCFMMConcentratedPoolLinksResponse): _23.QueryCFMMConcentratedPoolLinksResponseAminoMsg;
                fromProtoMsg(message: _23.QueryCFMMConcentratedPoolLinksResponseProtoMsg): _23.QueryCFMMConcentratedPoolLinksResponse;
                toProto(message: _23.QueryCFMMConcentratedPoolLinksResponse): Uint8Array;
                toProtoMsg(message: _23.QueryCFMMConcentratedPoolLinksResponse): _23.QueryCFMMConcentratedPoolLinksResponseProtoMsg;
            };
            PoolI_InterfaceDecoder: (input: Uint8Array | import("..").BinaryReader) => import("../google/protobuf/any").Any | import("./concentrated-liquidity/pool").Pool | _9.CosmWasmPool | _20.Pool | _27.Pool;
            PoolI_FromAmino: (content: import("../google/protobuf/any").AnyAmino) => import("../google/protobuf/any").Any;
            PoolI_ToAmino: (content: import("../google/protobuf/any").Any) => import("../google/protobuf/any").AnyAmino;
            ReplaceMigrationRecordsProposal: {
                typeUrl: string;
                encode(message: _22.ReplaceMigrationRecordsProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _22.ReplaceMigrationRecordsProposal;
                fromPartial(object: Partial<_22.ReplaceMigrationRecordsProposal>): _22.ReplaceMigrationRecordsProposal;
                fromAmino(object: _22.ReplaceMigrationRecordsProposalAmino): _22.ReplaceMigrationRecordsProposal;
                toAmino(message: _22.ReplaceMigrationRecordsProposal): _22.ReplaceMigrationRecordsProposalAmino;
                fromAminoMsg(object: _22.ReplaceMigrationRecordsProposalAminoMsg): _22.ReplaceMigrationRecordsProposal;
                toAminoMsg(message: _22.ReplaceMigrationRecordsProposal): _22.ReplaceMigrationRecordsProposalAminoMsg;
                fromProtoMsg(message: _22.ReplaceMigrationRecordsProposalProtoMsg): _22.ReplaceMigrationRecordsProposal;
                toProto(message: _22.ReplaceMigrationRecordsProposal): Uint8Array;
                toProtoMsg(message: _22.ReplaceMigrationRecordsProposal): _22.ReplaceMigrationRecordsProposalProtoMsg;
            };
            UpdateMigrationRecordsProposal: {
                typeUrl: string;
                encode(message: _22.UpdateMigrationRecordsProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _22.UpdateMigrationRecordsProposal;
                fromPartial(object: Partial<_22.UpdateMigrationRecordsProposal>): _22.UpdateMigrationRecordsProposal;
                fromAmino(object: _22.UpdateMigrationRecordsProposalAmino): _22.UpdateMigrationRecordsProposal;
                toAmino(message: _22.UpdateMigrationRecordsProposal): _22.UpdateMigrationRecordsProposalAmino;
                fromAminoMsg(object: _22.UpdateMigrationRecordsProposalAminoMsg): _22.UpdateMigrationRecordsProposal;
                toAminoMsg(message: _22.UpdateMigrationRecordsProposal): _22.UpdateMigrationRecordsProposalAminoMsg;
                fromProtoMsg(message: _22.UpdateMigrationRecordsProposalProtoMsg): _22.UpdateMigrationRecordsProposal;
                toProto(message: _22.UpdateMigrationRecordsProposal): Uint8Array;
                toProtoMsg(message: _22.UpdateMigrationRecordsProposal): _22.UpdateMigrationRecordsProposalProtoMsg;
            };
            PoolRecordWithCFMMLink: {
                typeUrl: string;
                encode(message: _22.PoolRecordWithCFMMLink, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _22.PoolRecordWithCFMMLink;
                fromPartial(object: Partial<_22.PoolRecordWithCFMMLink>): _22.PoolRecordWithCFMMLink;
                fromAmino(object: _22.PoolRecordWithCFMMLinkAmino): _22.PoolRecordWithCFMMLink;
                toAmino(message: _22.PoolRecordWithCFMMLink): _22.PoolRecordWithCFMMLinkAmino;
                fromAminoMsg(object: _22.PoolRecordWithCFMMLinkAminoMsg): _22.PoolRecordWithCFMMLink;
                toAminoMsg(message: _22.PoolRecordWithCFMMLink): _22.PoolRecordWithCFMMLinkAminoMsg;
                fromProtoMsg(message: _22.PoolRecordWithCFMMLinkProtoMsg): _22.PoolRecordWithCFMMLink;
                toProto(message: _22.PoolRecordWithCFMMLink): Uint8Array;
                toProtoMsg(message: _22.PoolRecordWithCFMMLink): _22.PoolRecordWithCFMMLinkProtoMsg;
            };
            CreateConcentratedLiquidityPoolsAndLinktoCFMMProposal: {
                typeUrl: string;
                encode(message: _22.CreateConcentratedLiquidityPoolsAndLinktoCFMMProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _22.CreateConcentratedLiquidityPoolsAndLinktoCFMMProposal;
                fromPartial(object: Partial<_22.CreateConcentratedLiquidityPoolsAndLinktoCFMMProposal>): _22.CreateConcentratedLiquidityPoolsAndLinktoCFMMProposal;
                fromAmino(object: _22.CreateConcentratedLiquidityPoolsAndLinktoCFMMProposalAmino): _22.CreateConcentratedLiquidityPoolsAndLinktoCFMMProposal;
                toAmino(message: _22.CreateConcentratedLiquidityPoolsAndLinktoCFMMProposal): _22.CreateConcentratedLiquidityPoolsAndLinktoCFMMProposalAmino;
                fromAminoMsg(object: _22.CreateConcentratedLiquidityPoolsAndLinktoCFMMProposalAminoMsg): _22.CreateConcentratedLiquidityPoolsAndLinktoCFMMProposal;
                toAminoMsg(message: _22.CreateConcentratedLiquidityPoolsAndLinktoCFMMProposal): _22.CreateConcentratedLiquidityPoolsAndLinktoCFMMProposalAminoMsg;
                fromProtoMsg(message: _22.CreateConcentratedLiquidityPoolsAndLinktoCFMMProposalProtoMsg): _22.CreateConcentratedLiquidityPoolsAndLinktoCFMMProposal;
                toProto(message: _22.CreateConcentratedLiquidityPoolsAndLinktoCFMMProposal): Uint8Array;
                toProtoMsg(message: _22.CreateConcentratedLiquidityPoolsAndLinktoCFMMProposal): _22.CreateConcentratedLiquidityPoolsAndLinktoCFMMProposalProtoMsg;
            };
            SetScalingFactorControllerProposal: {
                typeUrl: string;
                encode(message: _22.SetScalingFactorControllerProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _22.SetScalingFactorControllerProposal;
                fromPartial(object: Partial<_22.SetScalingFactorControllerProposal>): _22.SetScalingFactorControllerProposal;
                fromAmino(object: _22.SetScalingFactorControllerProposalAmino): _22.SetScalingFactorControllerProposal;
                toAmino(message: _22.SetScalingFactorControllerProposal): _22.SetScalingFactorControllerProposalAmino;
                fromAminoMsg(object: _22.SetScalingFactorControllerProposalAminoMsg): _22.SetScalingFactorControllerProposal;
                toAminoMsg(message: _22.SetScalingFactorControllerProposal): _22.SetScalingFactorControllerProposalAminoMsg;
                fromProtoMsg(message: _22.SetScalingFactorControllerProposalProtoMsg): _22.SetScalingFactorControllerProposal;
                toProto(message: _22.SetScalingFactorControllerProposal): Uint8Array;
                toProtoMsg(message: _22.SetScalingFactorControllerProposal): _22.SetScalingFactorControllerProposalProtoMsg;
            };
            Params: {
                typeUrl: string;
                encode(message: _21.Params, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _21.Params;
                fromPartial(object: Partial<_21.Params>): _21.Params;
                fromAmino(object: _21.ParamsAmino): _21.Params;
                toAmino(message: _21.Params): _21.ParamsAmino;
                fromAminoMsg(object: _21.ParamsAminoMsg): _21.Params;
                toAminoMsg(message: _21.Params): _21.ParamsAminoMsg;
                fromProtoMsg(message: _21.ParamsProtoMsg): _21.Params;
                toProto(message: _21.Params): Uint8Array;
                toProtoMsg(message: _21.Params): _21.ParamsProtoMsg;
            };
            GenesisState: {
                typeUrl: string;
                encode(message: _21.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _21.GenesisState;
                fromPartial(object: Partial<_21.GenesisState>): _21.GenesisState;
                fromAmino(object: _21.GenesisStateAmino): _21.GenesisState;
                toAmino(message: _21.GenesisState): _21.GenesisStateAmino;
                fromAminoMsg(object: _21.GenesisStateAminoMsg): _21.GenesisState;
                toAminoMsg(message: _21.GenesisState): _21.GenesisStateAminoMsg;
                fromProtoMsg(message: _21.GenesisStateProtoMsg): _21.GenesisState;
                toProto(message: _21.GenesisState): Uint8Array;
                toProtoMsg(message: _21.GenesisState): _21.GenesisStateProtoMsg;
            };
            SmoothWeightChangeParams: {
                typeUrl: string;
                encode(message: _20.SmoothWeightChangeParams, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _20.SmoothWeightChangeParams;
                fromPartial(object: Partial<_20.SmoothWeightChangeParams>): _20.SmoothWeightChangeParams;
                fromAmino(object: _20.SmoothWeightChangeParamsAmino): _20.SmoothWeightChangeParams;
                toAmino(message: _20.SmoothWeightChangeParams): _20.SmoothWeightChangeParamsAmino;
                fromAminoMsg(object: _20.SmoothWeightChangeParamsAminoMsg): _20.SmoothWeightChangeParams;
                toAminoMsg(message: _20.SmoothWeightChangeParams): _20.SmoothWeightChangeParamsAminoMsg;
                fromProtoMsg(message: _20.SmoothWeightChangeParamsProtoMsg): _20.SmoothWeightChangeParams;
                toProto(message: _20.SmoothWeightChangeParams): Uint8Array;
                toProtoMsg(message: _20.SmoothWeightChangeParams): _20.SmoothWeightChangeParamsProtoMsg;
            };
            PoolParams: {
                typeUrl: string;
                encode(message: _20.PoolParams, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _20.PoolParams;
                fromPartial(object: Partial<_20.PoolParams>): _20.PoolParams;
                fromAmino(object: _20.PoolParamsAmino): _20.PoolParams;
                toAmino(message: _20.PoolParams): _20.PoolParamsAmino;
                fromAminoMsg(object: _20.PoolParamsAminoMsg): _20.PoolParams;
                toAminoMsg(message: _20.PoolParams): _20.PoolParamsAminoMsg;
                fromProtoMsg(message: _20.PoolParamsProtoMsg): _20.PoolParams;
                toProto(message: _20.PoolParams): Uint8Array;
                toProtoMsg(message: _20.PoolParams): _20.PoolParamsProtoMsg;
            };
            PoolAsset: {
                typeUrl: string;
                encode(message: _20.PoolAsset, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _20.PoolAsset;
                fromPartial(object: Partial<_20.PoolAsset>): _20.PoolAsset;
                fromAmino(object: _20.PoolAssetAmino): _20.PoolAsset;
                toAmino(message: _20.PoolAsset): _20.PoolAssetAmino;
                fromAminoMsg(object: _20.PoolAssetAminoMsg): _20.PoolAsset;
                toAminoMsg(message: _20.PoolAsset): _20.PoolAssetAminoMsg;
                fromProtoMsg(message: _20.PoolAssetProtoMsg): _20.PoolAsset;
                toProto(message: _20.PoolAsset): Uint8Array;
                toProtoMsg(message: _20.PoolAsset): _20.PoolAssetProtoMsg;
            };
            Pool: {
                typeUrl: string;
                encode(message: _20.Pool, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _20.Pool;
                fromPartial(object: Partial<_20.Pool>): _20.Pool;
                fromAmino(object: _20.PoolAmino): _20.Pool;
                toAmino(message: _20.Pool): _20.PoolAmino;
                fromAminoMsg(object: _20.PoolAminoMsg): _20.Pool;
                toAminoMsg(message: _20.Pool): _20.PoolAminoMsg;
                fromProtoMsg(message: _20.PoolProtoMsg): _20.Pool;
                toProto(message: _20.Pool): Uint8Array;
                toProtoMsg(message: _20.Pool): _20.PoolProtoMsg;
            };
        };
        namespace poolmodels {
            namespace balancer {
                const v1beta1: {
                    MsgClientImpl: typeof _253.MsgClientImpl;
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
                            toAmino: (message: _26.MsgCreateBalancerPool) => _26.MsgCreateBalancerPoolAmino;
                            fromAmino: (object: _26.MsgCreateBalancerPoolAmino) => _26.MsgCreateBalancerPool;
                        };
                    };
                    MsgCreateBalancerPool: {
                        typeUrl: string;
                        encode(message: _26.MsgCreateBalancerPool, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                        fromJSON(object: any): _26.MsgCreateBalancerPool;
                        fromPartial(object: Partial<_26.MsgCreateBalancerPool>): _26.MsgCreateBalancerPool;
                        fromAmino(object: _26.MsgCreateBalancerPoolAmino): _26.MsgCreateBalancerPool;
                        toAmino(message: _26.MsgCreateBalancerPool): _26.MsgCreateBalancerPoolAmino;
                        fromAminoMsg(object: _26.MsgCreateBalancerPoolAminoMsg): _26.MsgCreateBalancerPool;
                        toAminoMsg(message: _26.MsgCreateBalancerPool): _26.MsgCreateBalancerPoolAminoMsg;
                        fromProtoMsg(message: _26.MsgCreateBalancerPoolProtoMsg): _26.MsgCreateBalancerPool;
                        toProto(message: _26.MsgCreateBalancerPool): Uint8Array;
                        toProtoMsg(message: _26.MsgCreateBalancerPool): _26.MsgCreateBalancerPoolProtoMsg;
                    };
                    MsgCreateBalancerPoolResponse: {
                        typeUrl: string;
                        encode(message: _26.MsgCreateBalancerPoolResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                        fromJSON(object: any): _26.MsgCreateBalancerPoolResponse;
                        fromPartial(object: Partial<_26.MsgCreateBalancerPoolResponse>): _26.MsgCreateBalancerPoolResponse;
                        fromAmino(object: _26.MsgCreateBalancerPoolResponseAmino): _26.MsgCreateBalancerPoolResponse;
                        toAmino(message: _26.MsgCreateBalancerPoolResponse): _26.MsgCreateBalancerPoolResponseAmino;
                        fromAminoMsg(object: _26.MsgCreateBalancerPoolResponseAminoMsg): _26.MsgCreateBalancerPoolResponse;
                        toAminoMsg(message: _26.MsgCreateBalancerPoolResponse): _26.MsgCreateBalancerPoolResponseAminoMsg;
                        fromProtoMsg(message: _26.MsgCreateBalancerPoolResponseProtoMsg): _26.MsgCreateBalancerPoolResponse;
                        toProto(message: _26.MsgCreateBalancerPoolResponse): Uint8Array;
                        toProtoMsg(message: _26.MsgCreateBalancerPoolResponse): _26.MsgCreateBalancerPoolResponseProtoMsg;
                    };
                };
            }
            namespace stableswap {
                const v1beta1: {
                    MsgClientImpl: typeof _254.MsgClientImpl;
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
                            toAmino: (message: _28.MsgCreateStableswapPool) => _28.MsgCreateStableswapPoolAmino;
                            fromAmino: (object: _28.MsgCreateStableswapPoolAmino) => _28.MsgCreateStableswapPool;
                        };
                        "/osmosis.gamm.poolmodels.stableswap.v1beta1.MsgStableSwapAdjustScalingFactors": {
                            aminoType: string;
                            toAmino: (message: _28.MsgStableSwapAdjustScalingFactors) => _28.MsgStableSwapAdjustScalingFactorsAmino;
                            fromAmino: (object: _28.MsgStableSwapAdjustScalingFactorsAmino) => _28.MsgStableSwapAdjustScalingFactors;
                        };
                    };
                    MsgCreateStableswapPool: {
                        typeUrl: string;
                        encode(message: _28.MsgCreateStableswapPool, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                        fromJSON(object: any): _28.MsgCreateStableswapPool;
                        fromPartial(object: Partial<_28.MsgCreateStableswapPool>): _28.MsgCreateStableswapPool;
                        fromAmino(object: _28.MsgCreateStableswapPoolAmino): _28.MsgCreateStableswapPool;
                        toAmino(message: _28.MsgCreateStableswapPool): _28.MsgCreateStableswapPoolAmino;
                        fromAminoMsg(object: _28.MsgCreateStableswapPoolAminoMsg): _28.MsgCreateStableswapPool;
                        toAminoMsg(message: _28.MsgCreateStableswapPool): _28.MsgCreateStableswapPoolAminoMsg;
                        fromProtoMsg(message: _28.MsgCreateStableswapPoolProtoMsg): _28.MsgCreateStableswapPool;
                        toProto(message: _28.MsgCreateStableswapPool): Uint8Array;
                        toProtoMsg(message: _28.MsgCreateStableswapPool): _28.MsgCreateStableswapPoolProtoMsg;
                    };
                    MsgCreateStableswapPoolResponse: {
                        typeUrl: string;
                        encode(message: _28.MsgCreateStableswapPoolResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                        fromJSON(object: any): _28.MsgCreateStableswapPoolResponse;
                        fromPartial(object: Partial<_28.MsgCreateStableswapPoolResponse>): _28.MsgCreateStableswapPoolResponse;
                        fromAmino(object: _28.MsgCreateStableswapPoolResponseAmino): _28.MsgCreateStableswapPoolResponse;
                        toAmino(message: _28.MsgCreateStableswapPoolResponse): _28.MsgCreateStableswapPoolResponseAmino;
                        fromAminoMsg(object: _28.MsgCreateStableswapPoolResponseAminoMsg): _28.MsgCreateStableswapPoolResponse;
                        toAminoMsg(message: _28.MsgCreateStableswapPoolResponse): _28.MsgCreateStableswapPoolResponseAminoMsg;
                        fromProtoMsg(message: _28.MsgCreateStableswapPoolResponseProtoMsg): _28.MsgCreateStableswapPoolResponse;
                        toProto(message: _28.MsgCreateStableswapPoolResponse): Uint8Array;
                        toProtoMsg(message: _28.MsgCreateStableswapPoolResponse): _28.MsgCreateStableswapPoolResponseProtoMsg;
                    };
                    MsgStableSwapAdjustScalingFactors: {
                        typeUrl: string;
                        encode(message: _28.MsgStableSwapAdjustScalingFactors, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                        fromJSON(object: any): _28.MsgStableSwapAdjustScalingFactors;
                        fromPartial(object: Partial<_28.MsgStableSwapAdjustScalingFactors>): _28.MsgStableSwapAdjustScalingFactors;
                        fromAmino(object: _28.MsgStableSwapAdjustScalingFactorsAmino): _28.MsgStableSwapAdjustScalingFactors;
                        toAmino(message: _28.MsgStableSwapAdjustScalingFactors): _28.MsgStableSwapAdjustScalingFactorsAmino;
                        fromAminoMsg(object: _28.MsgStableSwapAdjustScalingFactorsAminoMsg): _28.MsgStableSwapAdjustScalingFactors;
                        toAminoMsg(message: _28.MsgStableSwapAdjustScalingFactors): _28.MsgStableSwapAdjustScalingFactorsAminoMsg;
                        fromProtoMsg(message: _28.MsgStableSwapAdjustScalingFactorsProtoMsg): _28.MsgStableSwapAdjustScalingFactors;
                        toProto(message: _28.MsgStableSwapAdjustScalingFactors): Uint8Array;
                        toProtoMsg(message: _28.MsgStableSwapAdjustScalingFactors): _28.MsgStableSwapAdjustScalingFactorsProtoMsg;
                    };
                    MsgStableSwapAdjustScalingFactorsResponse: {
                        typeUrl: string;
                        encode(_: _28.MsgStableSwapAdjustScalingFactorsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                        fromJSON(_: any): _28.MsgStableSwapAdjustScalingFactorsResponse;
                        fromPartial(_: Partial<_28.MsgStableSwapAdjustScalingFactorsResponse>): _28.MsgStableSwapAdjustScalingFactorsResponse;
                        fromAmino(_: _28.MsgStableSwapAdjustScalingFactorsResponseAmino): _28.MsgStableSwapAdjustScalingFactorsResponse;
                        toAmino(_: _28.MsgStableSwapAdjustScalingFactorsResponse): _28.MsgStableSwapAdjustScalingFactorsResponseAmino;
                        fromAminoMsg(object: _28.MsgStableSwapAdjustScalingFactorsResponseAminoMsg): _28.MsgStableSwapAdjustScalingFactorsResponse;
                        toAminoMsg(message: _28.MsgStableSwapAdjustScalingFactorsResponse): _28.MsgStableSwapAdjustScalingFactorsResponseAminoMsg;
                        fromProtoMsg(message: _28.MsgStableSwapAdjustScalingFactorsResponseProtoMsg): _28.MsgStableSwapAdjustScalingFactorsResponse;
                        toProto(message: _28.MsgStableSwapAdjustScalingFactorsResponse): Uint8Array;
                        toProtoMsg(message: _28.MsgStableSwapAdjustScalingFactorsResponse): _28.MsgStableSwapAdjustScalingFactorsResponseProtoMsg;
                    };
                    PoolParams: {
                        typeUrl: string;
                        encode(message: _27.PoolParams, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                        fromJSON(object: any): _27.PoolParams;
                        fromPartial(object: Partial<_27.PoolParams>): _27.PoolParams;
                        fromAmino(object: _27.PoolParamsAmino): _27.PoolParams;
                        toAmino(message: _27.PoolParams): _27.PoolParamsAmino;
                        fromAminoMsg(object: _27.PoolParamsAminoMsg): _27.PoolParams;
                        toAminoMsg(message: _27.PoolParams): _27.PoolParamsAminoMsg;
                        fromProtoMsg(message: _27.PoolParamsProtoMsg): _27.PoolParams;
                        toProto(message: _27.PoolParams): Uint8Array;
                        toProtoMsg(message: _27.PoolParams): _27.PoolParamsProtoMsg;
                    };
                    Pool: {
                        typeUrl: string;
                        encode(message: _27.Pool, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                        fromJSON(object: any): _27.Pool;
                        fromPartial(object: Partial<_27.Pool>): _27.Pool;
                        fromAmino(object: _27.PoolAmino): _27.Pool;
                        toAmino(message: _27.Pool): _27.PoolAmino;
                        fromAminoMsg(object: _27.PoolAminoMsg): _27.Pool;
                        toAminoMsg(message: _27.Pool): _27.PoolAminoMsg;
                        fromProtoMsg(message: _27.PoolProtoMsg): _27.Pool;
                        toProto(message: _27.Pool): Uint8Array;
                        toProtoMsg(message: _27.Pool): _27.PoolProtoMsg;
                    };
                };
            }
        }
        const v2: {
            QueryClientImpl: typeof _238.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                spotPrice(request: _29.QuerySpotPriceRequest): Promise<_29.QuerySpotPriceResponse>;
            };
            LCDQueryClient: typeof _220.LCDQueryClient;
            QuerySpotPriceRequest: {
                typeUrl: string;
                encode(message: _29.QuerySpotPriceRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _29.QuerySpotPriceRequest;
                fromPartial(object: Partial<_29.QuerySpotPriceRequest>): _29.QuerySpotPriceRequest;
                fromAmino(object: _29.QuerySpotPriceRequestAmino): _29.QuerySpotPriceRequest;
                toAmino(message: _29.QuerySpotPriceRequest): _29.QuerySpotPriceRequestAmino;
                fromAminoMsg(object: _29.QuerySpotPriceRequestAminoMsg): _29.QuerySpotPriceRequest;
                toAminoMsg(message: _29.QuerySpotPriceRequest): _29.QuerySpotPriceRequestAminoMsg;
                fromProtoMsg(message: _29.QuerySpotPriceRequestProtoMsg): _29.QuerySpotPriceRequest;
                toProto(message: _29.QuerySpotPriceRequest): Uint8Array;
                toProtoMsg(message: _29.QuerySpotPriceRequest): _29.QuerySpotPriceRequestProtoMsg;
            };
            QuerySpotPriceResponse: {
                typeUrl: string;
                encode(message: _29.QuerySpotPriceResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _29.QuerySpotPriceResponse;
                fromPartial(object: Partial<_29.QuerySpotPriceResponse>): _29.QuerySpotPriceResponse;
                fromAmino(object: _29.QuerySpotPriceResponseAmino): _29.QuerySpotPriceResponse;
                toAmino(message: _29.QuerySpotPriceResponse): _29.QuerySpotPriceResponseAmino;
                fromAminoMsg(object: _29.QuerySpotPriceResponseAminoMsg): _29.QuerySpotPriceResponse;
                toAminoMsg(message: _29.QuerySpotPriceResponse): _29.QuerySpotPriceResponseAminoMsg;
                fromProtoMsg(message: _29.QuerySpotPriceResponseProtoMsg): _29.QuerySpotPriceResponse;
                toProto(message: _29.QuerySpotPriceResponse): Uint8Array;
                toProtoMsg(message: _29.QuerySpotPriceResponse): _29.QuerySpotPriceResponseProtoMsg;
            };
        };
    }
    const ibchooks: {
        MsgClientImpl: typeof _256.MsgClientImpl;
        registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
        load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
        MessageComposer: {
            encoded: {
                emitIBCAck(value: _32.MsgEmitIBCAck): {
                    typeUrl: string;
                    value: Uint8Array;
                };
            };
            withTypeUrl: {
                emitIBCAck(value: _32.MsgEmitIBCAck): {
                    typeUrl: string;
                    value: _32.MsgEmitIBCAck;
                };
            };
            fromJSON: {
                emitIBCAck(value: any): {
                    typeUrl: string;
                    value: _32.MsgEmitIBCAck;
                };
            };
            fromPartial: {
                emitIBCAck(value: _32.MsgEmitIBCAck): {
                    typeUrl: string;
                    value: _32.MsgEmitIBCAck;
                };
            };
        };
        AminoConverter: {
            "/osmosis.ibchooks.MsgEmitIBCAck": {
                aminoType: string;
                toAmino: (message: _32.MsgEmitIBCAck) => _32.MsgEmitIBCAckAmino;
                fromAmino: (object: _32.MsgEmitIBCAckAmino) => _32.MsgEmitIBCAck;
            };
        };
        MsgEmitIBCAck: {
            typeUrl: string;
            encode(message: _32.MsgEmitIBCAck, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _32.MsgEmitIBCAck;
            fromPartial(object: Partial<_32.MsgEmitIBCAck>): _32.MsgEmitIBCAck;
            fromAmino(object: _32.MsgEmitIBCAckAmino): _32.MsgEmitIBCAck;
            toAmino(message: _32.MsgEmitIBCAck): _32.MsgEmitIBCAckAmino;
            fromAminoMsg(object: _32.MsgEmitIBCAckAminoMsg): _32.MsgEmitIBCAck;
            toAminoMsg(message: _32.MsgEmitIBCAck): _32.MsgEmitIBCAckAminoMsg;
            fromProtoMsg(message: _32.MsgEmitIBCAckProtoMsg): _32.MsgEmitIBCAck;
            toProto(message: _32.MsgEmitIBCAck): Uint8Array;
            toProtoMsg(message: _32.MsgEmitIBCAck): _32.MsgEmitIBCAckProtoMsg;
        };
        MsgEmitIBCAckResponse: {
            typeUrl: string;
            encode(message: _32.MsgEmitIBCAckResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _32.MsgEmitIBCAckResponse;
            fromPartial(object: Partial<_32.MsgEmitIBCAckResponse>): _32.MsgEmitIBCAckResponse;
            fromAmino(object: _32.MsgEmitIBCAckResponseAmino): _32.MsgEmitIBCAckResponse;
            toAmino(message: _32.MsgEmitIBCAckResponse): _32.MsgEmitIBCAckResponseAmino;
            fromAminoMsg(object: _32.MsgEmitIBCAckResponseAminoMsg): _32.MsgEmitIBCAckResponse;
            toAminoMsg(message: _32.MsgEmitIBCAckResponse): _32.MsgEmitIBCAckResponseAminoMsg;
            fromProtoMsg(message: _32.MsgEmitIBCAckResponseProtoMsg): _32.MsgEmitIBCAckResponse;
            toProto(message: _32.MsgEmitIBCAckResponse): Uint8Array;
            toProtoMsg(message: _32.MsgEmitIBCAckResponse): _32.MsgEmitIBCAckResponseProtoMsg;
        };
        Params: {
            typeUrl: string;
            encode(message: _31.Params, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _31.Params;
            fromPartial(object: Partial<_31.Params>): _31.Params;
            fromAmino(object: _31.ParamsAmino): _31.Params;
            toAmino(message: _31.Params): _31.ParamsAmino;
            fromAminoMsg(object: _31.ParamsAminoMsg): _31.Params;
            toAminoMsg(message: _31.Params): _31.ParamsAminoMsg;
            fromProtoMsg(message: _31.ParamsProtoMsg): _31.Params;
            toProto(message: _31.Params): Uint8Array;
            toProtoMsg(message: _31.Params): _31.ParamsProtoMsg;
        };
        GenesisState: {
            typeUrl: string;
            encode(message: _30.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _30.GenesisState;
            fromPartial(object: Partial<_30.GenesisState>): _30.GenesisState;
            fromAmino(object: _30.GenesisStateAmino): _30.GenesisState;
            toAmino(message: _30.GenesisState): _30.GenesisStateAmino;
            fromAminoMsg(object: _30.GenesisStateAminoMsg): _30.GenesisState;
            toAminoMsg(message: _30.GenesisState): _30.GenesisStateAminoMsg;
            fromProtoMsg(message: _30.GenesisStateProtoMsg): _30.GenesisState;
            toProto(message: _30.GenesisState): Uint8Array;
            toProtoMsg(message: _30.GenesisState): _30.GenesisStateProtoMsg;
        };
    };
    namespace ibcratelimit {
        const v1beta1: {
            QueryClientImpl: typeof _239.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                params(request?: _35.ParamsRequest): Promise<_35.ParamsResponse>;
            };
            LCDQueryClient: typeof _221.LCDQueryClient;
            ParamsRequest: {
                typeUrl: string;
                encode(_: _35.ParamsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _35.ParamsRequest;
                fromPartial(_: Partial<_35.ParamsRequest>): _35.ParamsRequest;
                fromAmino(_: _35.ParamsRequestAmino): _35.ParamsRequest;
                toAmino(_: _35.ParamsRequest): _35.ParamsRequestAmino;
                fromAminoMsg(object: _35.ParamsRequestAminoMsg): _35.ParamsRequest;
                toAminoMsg(message: _35.ParamsRequest): _35.ParamsRequestAminoMsg;
                fromProtoMsg(message: _35.ParamsRequestProtoMsg): _35.ParamsRequest;
                toProto(message: _35.ParamsRequest): Uint8Array;
                toProtoMsg(message: _35.ParamsRequest): _35.ParamsRequestProtoMsg;
            };
            ParamsResponse: {
                typeUrl: string;
                encode(message: _35.ParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _35.ParamsResponse;
                fromPartial(object: Partial<_35.ParamsResponse>): _35.ParamsResponse;
                fromAmino(object: _35.ParamsResponseAmino): _35.ParamsResponse;
                toAmino(message: _35.ParamsResponse): _35.ParamsResponseAmino;
                fromAminoMsg(object: _35.ParamsResponseAminoMsg): _35.ParamsResponse;
                toAminoMsg(message: _35.ParamsResponse): _35.ParamsResponseAminoMsg;
                fromProtoMsg(message: _35.ParamsResponseProtoMsg): _35.ParamsResponse;
                toProto(message: _35.ParamsResponse): Uint8Array;
                toProtoMsg(message: _35.ParamsResponse): _35.ParamsResponseProtoMsg;
            };
            Params: {
                typeUrl: string;
                encode(message: _34.Params, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _34.Params;
                fromPartial(object: Partial<_34.Params>): _34.Params;
                fromAmino(object: _34.ParamsAmino): _34.Params;
                toAmino(message: _34.Params): _34.ParamsAmino;
                fromAminoMsg(object: _34.ParamsAminoMsg): _34.Params;
                toAminoMsg(message: _34.Params): _34.ParamsAminoMsg;
                fromProtoMsg(message: _34.ParamsProtoMsg): _34.Params;
                toProto(message: _34.Params): Uint8Array;
                toProtoMsg(message: _34.Params): _34.ParamsProtoMsg;
            };
            GenesisState: {
                typeUrl: string;
                encode(message: _33.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _33.GenesisState;
                fromPartial(object: Partial<_33.GenesisState>): _33.GenesisState;
                fromAmino(object: _33.GenesisStateAmino): _33.GenesisState;
                toAmino(message: _33.GenesisState): _33.GenesisStateAmino;
                fromAminoMsg(object: _33.GenesisStateAminoMsg): _33.GenesisState;
                toAminoMsg(message: _33.GenesisState): _33.GenesisStateAminoMsg;
                fromProtoMsg(message: _33.GenesisStateProtoMsg): _33.GenesisState;
                toProto(message: _33.GenesisState): Uint8Array;
                toProtoMsg(message: _33.GenesisState): _33.GenesisStateProtoMsg;
            };
        };
    }
    const incentives: {
        MsgClientImpl: typeof _257.MsgClientImpl;
        QueryClientImpl: typeof _240.QueryClientImpl;
        createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
            moduleToDistributeCoins(request?: _39.ModuleToDistributeCoinsRequest): Promise<_39.ModuleToDistributeCoinsResponse>;
            gaugeByID(request: _39.GaugeByIDRequest): Promise<_39.GaugeByIDResponse>;
            gauges(request?: _39.GaugesRequest): Promise<_39.GaugesResponse>;
            activeGauges(request?: _39.ActiveGaugesRequest): Promise<_39.ActiveGaugesResponse>;
            activeGaugesPerDenom(request: _39.ActiveGaugesPerDenomRequest): Promise<_39.ActiveGaugesPerDenomResponse>;
            upcomingGauges(request?: _39.UpcomingGaugesRequest): Promise<_39.UpcomingGaugesResponse>;
            upcomingGaugesPerDenom(request: _39.UpcomingGaugesPerDenomRequest): Promise<_39.UpcomingGaugesPerDenomResponse>;
            rewardsEst(request: _39.RewardsEstRequest): Promise<_39.RewardsEstResponse>;
            lockableDurations(request?: _39.QueryLockableDurationsRequest): Promise<_39.QueryLockableDurationsResponse>;
        };
        LCDQueryClient: typeof _222.LCDQueryClient;
        registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
        load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
        MessageComposer: {
            encoded: {
                createGauge(value: _40.MsgCreateGauge): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                addToGauge(value: _40.MsgAddToGauge): {
                    typeUrl: string;
                    value: Uint8Array;
                };
            };
            withTypeUrl: {
                createGauge(value: _40.MsgCreateGauge): {
                    typeUrl: string;
                    value: _40.MsgCreateGauge;
                };
                addToGauge(value: _40.MsgAddToGauge): {
                    typeUrl: string;
                    value: _40.MsgAddToGauge;
                };
            };
            fromJSON: {
                createGauge(value: any): {
                    typeUrl: string;
                    value: _40.MsgCreateGauge;
                };
                addToGauge(value: any): {
                    typeUrl: string;
                    value: _40.MsgAddToGauge;
                };
            };
            fromPartial: {
                createGauge(value: _40.MsgCreateGauge): {
                    typeUrl: string;
                    value: _40.MsgCreateGauge;
                };
                addToGauge(value: _40.MsgAddToGauge): {
                    typeUrl: string;
                    value: _40.MsgAddToGauge;
                };
            };
        };
        AminoConverter: {
            "/osmosis.incentives.MsgCreateGauge": {
                aminoType: string;
                toAmino: (message: _40.MsgCreateGauge) => _40.MsgCreateGaugeAmino;
                fromAmino: (object: _40.MsgCreateGaugeAmino) => _40.MsgCreateGauge;
            };
            "/osmosis.incentives.MsgAddToGauge": {
                aminoType: string;
                toAmino: (message: _40.MsgAddToGauge) => _40.MsgAddToGaugeAmino;
                fromAmino: (object: _40.MsgAddToGaugeAmino) => _40.MsgAddToGauge;
            };
        };
        MsgCreateGauge: {
            typeUrl: string;
            encode(message: _40.MsgCreateGauge, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _40.MsgCreateGauge;
            fromPartial(object: Partial<_40.MsgCreateGauge>): _40.MsgCreateGauge;
            fromAmino(object: _40.MsgCreateGaugeAmino): _40.MsgCreateGauge;
            toAmino(message: _40.MsgCreateGauge): _40.MsgCreateGaugeAmino;
            fromAminoMsg(object: _40.MsgCreateGaugeAminoMsg): _40.MsgCreateGauge;
            toAminoMsg(message: _40.MsgCreateGauge): _40.MsgCreateGaugeAminoMsg;
            fromProtoMsg(message: _40.MsgCreateGaugeProtoMsg): _40.MsgCreateGauge;
            toProto(message: _40.MsgCreateGauge): Uint8Array;
            toProtoMsg(message: _40.MsgCreateGauge): _40.MsgCreateGaugeProtoMsg;
        };
        MsgCreateGaugeResponse: {
            typeUrl: string;
            encode(_: _40.MsgCreateGaugeResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(_: any): _40.MsgCreateGaugeResponse;
            fromPartial(_: Partial<_40.MsgCreateGaugeResponse>): _40.MsgCreateGaugeResponse;
            fromAmino(_: _40.MsgCreateGaugeResponseAmino): _40.MsgCreateGaugeResponse;
            toAmino(_: _40.MsgCreateGaugeResponse): _40.MsgCreateGaugeResponseAmino;
            fromAminoMsg(object: _40.MsgCreateGaugeResponseAminoMsg): _40.MsgCreateGaugeResponse;
            toAminoMsg(message: _40.MsgCreateGaugeResponse): _40.MsgCreateGaugeResponseAminoMsg;
            fromProtoMsg(message: _40.MsgCreateGaugeResponseProtoMsg): _40.MsgCreateGaugeResponse;
            toProto(message: _40.MsgCreateGaugeResponse): Uint8Array;
            toProtoMsg(message: _40.MsgCreateGaugeResponse): _40.MsgCreateGaugeResponseProtoMsg;
        };
        MsgAddToGauge: {
            typeUrl: string;
            encode(message: _40.MsgAddToGauge, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _40.MsgAddToGauge;
            fromPartial(object: Partial<_40.MsgAddToGauge>): _40.MsgAddToGauge;
            fromAmino(object: _40.MsgAddToGaugeAmino): _40.MsgAddToGauge;
            toAmino(message: _40.MsgAddToGauge): _40.MsgAddToGaugeAmino;
            fromAminoMsg(object: _40.MsgAddToGaugeAminoMsg): _40.MsgAddToGauge;
            toAminoMsg(message: _40.MsgAddToGauge): _40.MsgAddToGaugeAminoMsg;
            fromProtoMsg(message: _40.MsgAddToGaugeProtoMsg): _40.MsgAddToGauge;
            toProto(message: _40.MsgAddToGauge): Uint8Array;
            toProtoMsg(message: _40.MsgAddToGauge): _40.MsgAddToGaugeProtoMsg;
        };
        MsgAddToGaugeResponse: {
            typeUrl: string;
            encode(_: _40.MsgAddToGaugeResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(_: any): _40.MsgAddToGaugeResponse;
            fromPartial(_: Partial<_40.MsgAddToGaugeResponse>): _40.MsgAddToGaugeResponse;
            fromAmino(_: _40.MsgAddToGaugeResponseAmino): _40.MsgAddToGaugeResponse;
            toAmino(_: _40.MsgAddToGaugeResponse): _40.MsgAddToGaugeResponseAmino;
            fromAminoMsg(object: _40.MsgAddToGaugeResponseAminoMsg): _40.MsgAddToGaugeResponse;
            toAminoMsg(message: _40.MsgAddToGaugeResponse): _40.MsgAddToGaugeResponseAminoMsg;
            fromProtoMsg(message: _40.MsgAddToGaugeResponseProtoMsg): _40.MsgAddToGaugeResponse;
            toProto(message: _40.MsgAddToGaugeResponse): Uint8Array;
            toProtoMsg(message: _40.MsgAddToGaugeResponse): _40.MsgAddToGaugeResponseProtoMsg;
        };
        ModuleToDistributeCoinsRequest: {
            typeUrl: string;
            encode(_: _39.ModuleToDistributeCoinsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(_: any): _39.ModuleToDistributeCoinsRequest;
            fromPartial(_: Partial<_39.ModuleToDistributeCoinsRequest>): _39.ModuleToDistributeCoinsRequest;
            fromAmino(_: _39.ModuleToDistributeCoinsRequestAmino): _39.ModuleToDistributeCoinsRequest;
            toAmino(_: _39.ModuleToDistributeCoinsRequest): _39.ModuleToDistributeCoinsRequestAmino;
            fromAminoMsg(object: _39.ModuleToDistributeCoinsRequestAminoMsg): _39.ModuleToDistributeCoinsRequest;
            toAminoMsg(message: _39.ModuleToDistributeCoinsRequest): _39.ModuleToDistributeCoinsRequestAminoMsg;
            fromProtoMsg(message: _39.ModuleToDistributeCoinsRequestProtoMsg): _39.ModuleToDistributeCoinsRequest;
            toProto(message: _39.ModuleToDistributeCoinsRequest): Uint8Array;
            toProtoMsg(message: _39.ModuleToDistributeCoinsRequest): _39.ModuleToDistributeCoinsRequestProtoMsg;
        };
        ModuleToDistributeCoinsResponse: {
            typeUrl: string;
            encode(message: _39.ModuleToDistributeCoinsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _39.ModuleToDistributeCoinsResponse;
            fromPartial(object: Partial<_39.ModuleToDistributeCoinsResponse>): _39.ModuleToDistributeCoinsResponse;
            fromAmino(object: _39.ModuleToDistributeCoinsResponseAmino): _39.ModuleToDistributeCoinsResponse;
            toAmino(message: _39.ModuleToDistributeCoinsResponse): _39.ModuleToDistributeCoinsResponseAmino;
            fromAminoMsg(object: _39.ModuleToDistributeCoinsResponseAminoMsg): _39.ModuleToDistributeCoinsResponse;
            toAminoMsg(message: _39.ModuleToDistributeCoinsResponse): _39.ModuleToDistributeCoinsResponseAminoMsg;
            fromProtoMsg(message: _39.ModuleToDistributeCoinsResponseProtoMsg): _39.ModuleToDistributeCoinsResponse;
            toProto(message: _39.ModuleToDistributeCoinsResponse): Uint8Array;
            toProtoMsg(message: _39.ModuleToDistributeCoinsResponse): _39.ModuleToDistributeCoinsResponseProtoMsg;
        };
        GaugeByIDRequest: {
            typeUrl: string;
            encode(message: _39.GaugeByIDRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _39.GaugeByIDRequest;
            fromPartial(object: Partial<_39.GaugeByIDRequest>): _39.GaugeByIDRequest;
            fromAmino(object: _39.GaugeByIDRequestAmino): _39.GaugeByIDRequest;
            toAmino(message: _39.GaugeByIDRequest): _39.GaugeByIDRequestAmino;
            fromAminoMsg(object: _39.GaugeByIDRequestAminoMsg): _39.GaugeByIDRequest;
            toAminoMsg(message: _39.GaugeByIDRequest): _39.GaugeByIDRequestAminoMsg;
            fromProtoMsg(message: _39.GaugeByIDRequestProtoMsg): _39.GaugeByIDRequest;
            toProto(message: _39.GaugeByIDRequest): Uint8Array;
            toProtoMsg(message: _39.GaugeByIDRequest): _39.GaugeByIDRequestProtoMsg;
        };
        GaugeByIDResponse: {
            typeUrl: string;
            encode(message: _39.GaugeByIDResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _39.GaugeByIDResponse;
            fromPartial(object: Partial<_39.GaugeByIDResponse>): _39.GaugeByIDResponse;
            fromAmino(object: _39.GaugeByIDResponseAmino): _39.GaugeByIDResponse;
            toAmino(message: _39.GaugeByIDResponse): _39.GaugeByIDResponseAmino;
            fromAminoMsg(object: _39.GaugeByIDResponseAminoMsg): _39.GaugeByIDResponse;
            toAminoMsg(message: _39.GaugeByIDResponse): _39.GaugeByIDResponseAminoMsg;
            fromProtoMsg(message: _39.GaugeByIDResponseProtoMsg): _39.GaugeByIDResponse;
            toProto(message: _39.GaugeByIDResponse): Uint8Array;
            toProtoMsg(message: _39.GaugeByIDResponse): _39.GaugeByIDResponseProtoMsg;
        };
        GaugesRequest: {
            typeUrl: string;
            encode(message: _39.GaugesRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _39.GaugesRequest;
            fromPartial(object: Partial<_39.GaugesRequest>): _39.GaugesRequest;
            fromAmino(object: _39.GaugesRequestAmino): _39.GaugesRequest;
            toAmino(message: _39.GaugesRequest): _39.GaugesRequestAmino;
            fromAminoMsg(object: _39.GaugesRequestAminoMsg): _39.GaugesRequest;
            toAminoMsg(message: _39.GaugesRequest): _39.GaugesRequestAminoMsg;
            fromProtoMsg(message: _39.GaugesRequestProtoMsg): _39.GaugesRequest;
            toProto(message: _39.GaugesRequest): Uint8Array;
            toProtoMsg(message: _39.GaugesRequest): _39.GaugesRequestProtoMsg;
        };
        GaugesResponse: {
            typeUrl: string;
            encode(message: _39.GaugesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _39.GaugesResponse;
            fromPartial(object: Partial<_39.GaugesResponse>): _39.GaugesResponse;
            fromAmino(object: _39.GaugesResponseAmino): _39.GaugesResponse;
            toAmino(message: _39.GaugesResponse): _39.GaugesResponseAmino;
            fromAminoMsg(object: _39.GaugesResponseAminoMsg): _39.GaugesResponse;
            toAminoMsg(message: _39.GaugesResponse): _39.GaugesResponseAminoMsg;
            fromProtoMsg(message: _39.GaugesResponseProtoMsg): _39.GaugesResponse;
            toProto(message: _39.GaugesResponse): Uint8Array;
            toProtoMsg(message: _39.GaugesResponse): _39.GaugesResponseProtoMsg;
        };
        ActiveGaugesRequest: {
            typeUrl: string;
            encode(message: _39.ActiveGaugesRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _39.ActiveGaugesRequest;
            fromPartial(object: Partial<_39.ActiveGaugesRequest>): _39.ActiveGaugesRequest;
            fromAmino(object: _39.ActiveGaugesRequestAmino): _39.ActiveGaugesRequest;
            toAmino(message: _39.ActiveGaugesRequest): _39.ActiveGaugesRequestAmino;
            fromAminoMsg(object: _39.ActiveGaugesRequestAminoMsg): _39.ActiveGaugesRequest;
            toAminoMsg(message: _39.ActiveGaugesRequest): _39.ActiveGaugesRequestAminoMsg;
            fromProtoMsg(message: _39.ActiveGaugesRequestProtoMsg): _39.ActiveGaugesRequest;
            toProto(message: _39.ActiveGaugesRequest): Uint8Array;
            toProtoMsg(message: _39.ActiveGaugesRequest): _39.ActiveGaugesRequestProtoMsg;
        };
        ActiveGaugesResponse: {
            typeUrl: string;
            encode(message: _39.ActiveGaugesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _39.ActiveGaugesResponse;
            fromPartial(object: Partial<_39.ActiveGaugesResponse>): _39.ActiveGaugesResponse;
            fromAmino(object: _39.ActiveGaugesResponseAmino): _39.ActiveGaugesResponse;
            toAmino(message: _39.ActiveGaugesResponse): _39.ActiveGaugesResponseAmino;
            fromAminoMsg(object: _39.ActiveGaugesResponseAminoMsg): _39.ActiveGaugesResponse;
            toAminoMsg(message: _39.ActiveGaugesResponse): _39.ActiveGaugesResponseAminoMsg;
            fromProtoMsg(message: _39.ActiveGaugesResponseProtoMsg): _39.ActiveGaugesResponse;
            toProto(message: _39.ActiveGaugesResponse): Uint8Array;
            toProtoMsg(message: _39.ActiveGaugesResponse): _39.ActiveGaugesResponseProtoMsg;
        };
        ActiveGaugesPerDenomRequest: {
            typeUrl: string;
            encode(message: _39.ActiveGaugesPerDenomRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _39.ActiveGaugesPerDenomRequest;
            fromPartial(object: Partial<_39.ActiveGaugesPerDenomRequest>): _39.ActiveGaugesPerDenomRequest;
            fromAmino(object: _39.ActiveGaugesPerDenomRequestAmino): _39.ActiveGaugesPerDenomRequest;
            toAmino(message: _39.ActiveGaugesPerDenomRequest): _39.ActiveGaugesPerDenomRequestAmino;
            fromAminoMsg(object: _39.ActiveGaugesPerDenomRequestAminoMsg): _39.ActiveGaugesPerDenomRequest;
            toAminoMsg(message: _39.ActiveGaugesPerDenomRequest): _39.ActiveGaugesPerDenomRequestAminoMsg;
            fromProtoMsg(message: _39.ActiveGaugesPerDenomRequestProtoMsg): _39.ActiveGaugesPerDenomRequest;
            toProto(message: _39.ActiveGaugesPerDenomRequest): Uint8Array;
            toProtoMsg(message: _39.ActiveGaugesPerDenomRequest): _39.ActiveGaugesPerDenomRequestProtoMsg;
        };
        ActiveGaugesPerDenomResponse: {
            typeUrl: string;
            encode(message: _39.ActiveGaugesPerDenomResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _39.ActiveGaugesPerDenomResponse;
            fromPartial(object: Partial<_39.ActiveGaugesPerDenomResponse>): _39.ActiveGaugesPerDenomResponse;
            fromAmino(object: _39.ActiveGaugesPerDenomResponseAmino): _39.ActiveGaugesPerDenomResponse;
            toAmino(message: _39.ActiveGaugesPerDenomResponse): _39.ActiveGaugesPerDenomResponseAmino;
            fromAminoMsg(object: _39.ActiveGaugesPerDenomResponseAminoMsg): _39.ActiveGaugesPerDenomResponse;
            toAminoMsg(message: _39.ActiveGaugesPerDenomResponse): _39.ActiveGaugesPerDenomResponseAminoMsg;
            fromProtoMsg(message: _39.ActiveGaugesPerDenomResponseProtoMsg): _39.ActiveGaugesPerDenomResponse;
            toProto(message: _39.ActiveGaugesPerDenomResponse): Uint8Array;
            toProtoMsg(message: _39.ActiveGaugesPerDenomResponse): _39.ActiveGaugesPerDenomResponseProtoMsg;
        };
        UpcomingGaugesRequest: {
            typeUrl: string;
            encode(message: _39.UpcomingGaugesRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _39.UpcomingGaugesRequest;
            fromPartial(object: Partial<_39.UpcomingGaugesRequest>): _39.UpcomingGaugesRequest;
            fromAmino(object: _39.UpcomingGaugesRequestAmino): _39.UpcomingGaugesRequest;
            toAmino(message: _39.UpcomingGaugesRequest): _39.UpcomingGaugesRequestAmino;
            fromAminoMsg(object: _39.UpcomingGaugesRequestAminoMsg): _39.UpcomingGaugesRequest;
            toAminoMsg(message: _39.UpcomingGaugesRequest): _39.UpcomingGaugesRequestAminoMsg;
            fromProtoMsg(message: _39.UpcomingGaugesRequestProtoMsg): _39.UpcomingGaugesRequest;
            toProto(message: _39.UpcomingGaugesRequest): Uint8Array;
            toProtoMsg(message: _39.UpcomingGaugesRequest): _39.UpcomingGaugesRequestProtoMsg;
        };
        UpcomingGaugesResponse: {
            typeUrl: string;
            encode(message: _39.UpcomingGaugesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _39.UpcomingGaugesResponse;
            fromPartial(object: Partial<_39.UpcomingGaugesResponse>): _39.UpcomingGaugesResponse;
            fromAmino(object: _39.UpcomingGaugesResponseAmino): _39.UpcomingGaugesResponse;
            toAmino(message: _39.UpcomingGaugesResponse): _39.UpcomingGaugesResponseAmino;
            fromAminoMsg(object: _39.UpcomingGaugesResponseAminoMsg): _39.UpcomingGaugesResponse;
            toAminoMsg(message: _39.UpcomingGaugesResponse): _39.UpcomingGaugesResponseAminoMsg;
            fromProtoMsg(message: _39.UpcomingGaugesResponseProtoMsg): _39.UpcomingGaugesResponse;
            toProto(message: _39.UpcomingGaugesResponse): Uint8Array;
            toProtoMsg(message: _39.UpcomingGaugesResponse): _39.UpcomingGaugesResponseProtoMsg;
        };
        UpcomingGaugesPerDenomRequest: {
            typeUrl: string;
            encode(message: _39.UpcomingGaugesPerDenomRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _39.UpcomingGaugesPerDenomRequest;
            fromPartial(object: Partial<_39.UpcomingGaugesPerDenomRequest>): _39.UpcomingGaugesPerDenomRequest;
            fromAmino(object: _39.UpcomingGaugesPerDenomRequestAmino): _39.UpcomingGaugesPerDenomRequest;
            toAmino(message: _39.UpcomingGaugesPerDenomRequest): _39.UpcomingGaugesPerDenomRequestAmino;
            fromAminoMsg(object: _39.UpcomingGaugesPerDenomRequestAminoMsg): _39.UpcomingGaugesPerDenomRequest;
            toAminoMsg(message: _39.UpcomingGaugesPerDenomRequest): _39.UpcomingGaugesPerDenomRequestAminoMsg;
            fromProtoMsg(message: _39.UpcomingGaugesPerDenomRequestProtoMsg): _39.UpcomingGaugesPerDenomRequest;
            toProto(message: _39.UpcomingGaugesPerDenomRequest): Uint8Array;
            toProtoMsg(message: _39.UpcomingGaugesPerDenomRequest): _39.UpcomingGaugesPerDenomRequestProtoMsg;
        };
        UpcomingGaugesPerDenomResponse: {
            typeUrl: string;
            encode(message: _39.UpcomingGaugesPerDenomResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _39.UpcomingGaugesPerDenomResponse;
            fromPartial(object: Partial<_39.UpcomingGaugesPerDenomResponse>): _39.UpcomingGaugesPerDenomResponse;
            fromAmino(object: _39.UpcomingGaugesPerDenomResponseAmino): _39.UpcomingGaugesPerDenomResponse;
            toAmino(message: _39.UpcomingGaugesPerDenomResponse): _39.UpcomingGaugesPerDenomResponseAmino;
            fromAminoMsg(object: _39.UpcomingGaugesPerDenomResponseAminoMsg): _39.UpcomingGaugesPerDenomResponse;
            toAminoMsg(message: _39.UpcomingGaugesPerDenomResponse): _39.UpcomingGaugesPerDenomResponseAminoMsg;
            fromProtoMsg(message: _39.UpcomingGaugesPerDenomResponseProtoMsg): _39.UpcomingGaugesPerDenomResponse;
            toProto(message: _39.UpcomingGaugesPerDenomResponse): Uint8Array;
            toProtoMsg(message: _39.UpcomingGaugesPerDenomResponse): _39.UpcomingGaugesPerDenomResponseProtoMsg;
        };
        RewardsEstRequest: {
            typeUrl: string;
            encode(message: _39.RewardsEstRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _39.RewardsEstRequest;
            fromPartial(object: Partial<_39.RewardsEstRequest>): _39.RewardsEstRequest;
            fromAmino(object: _39.RewardsEstRequestAmino): _39.RewardsEstRequest;
            toAmino(message: _39.RewardsEstRequest): _39.RewardsEstRequestAmino;
            fromAminoMsg(object: _39.RewardsEstRequestAminoMsg): _39.RewardsEstRequest;
            toAminoMsg(message: _39.RewardsEstRequest): _39.RewardsEstRequestAminoMsg;
            fromProtoMsg(message: _39.RewardsEstRequestProtoMsg): _39.RewardsEstRequest;
            toProto(message: _39.RewardsEstRequest): Uint8Array;
            toProtoMsg(message: _39.RewardsEstRequest): _39.RewardsEstRequestProtoMsg;
        };
        RewardsEstResponse: {
            typeUrl: string;
            encode(message: _39.RewardsEstResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _39.RewardsEstResponse;
            fromPartial(object: Partial<_39.RewardsEstResponse>): _39.RewardsEstResponse;
            fromAmino(object: _39.RewardsEstResponseAmino): _39.RewardsEstResponse;
            toAmino(message: _39.RewardsEstResponse): _39.RewardsEstResponseAmino;
            fromAminoMsg(object: _39.RewardsEstResponseAminoMsg): _39.RewardsEstResponse;
            toAminoMsg(message: _39.RewardsEstResponse): _39.RewardsEstResponseAminoMsg;
            fromProtoMsg(message: _39.RewardsEstResponseProtoMsg): _39.RewardsEstResponse;
            toProto(message: _39.RewardsEstResponse): Uint8Array;
            toProtoMsg(message: _39.RewardsEstResponse): _39.RewardsEstResponseProtoMsg;
        };
        QueryLockableDurationsRequest: {
            typeUrl: string;
            encode(_: _39.QueryLockableDurationsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(_: any): _39.QueryLockableDurationsRequest;
            fromPartial(_: Partial<_39.QueryLockableDurationsRequest>): _39.QueryLockableDurationsRequest;
            fromAmino(_: _39.QueryLockableDurationsRequestAmino): _39.QueryLockableDurationsRequest;
            toAmino(_: _39.QueryLockableDurationsRequest): _39.QueryLockableDurationsRequestAmino;
            fromAminoMsg(object: _39.QueryLockableDurationsRequestAminoMsg): _39.QueryLockableDurationsRequest;
            toAminoMsg(message: _39.QueryLockableDurationsRequest): _39.QueryLockableDurationsRequestAminoMsg;
            fromProtoMsg(message: _39.QueryLockableDurationsRequestProtoMsg): _39.QueryLockableDurationsRequest;
            toProto(message: _39.QueryLockableDurationsRequest): Uint8Array;
            toProtoMsg(message: _39.QueryLockableDurationsRequest): _39.QueryLockableDurationsRequestProtoMsg;
        };
        QueryLockableDurationsResponse: {
            typeUrl: string;
            encode(message: _39.QueryLockableDurationsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _39.QueryLockableDurationsResponse;
            fromPartial(object: Partial<_39.QueryLockableDurationsResponse>): _39.QueryLockableDurationsResponse;
            fromAmino(object: _39.QueryLockableDurationsResponseAmino): _39.QueryLockableDurationsResponse;
            toAmino(message: _39.QueryLockableDurationsResponse): _39.QueryLockableDurationsResponseAmino;
            fromAminoMsg(object: _39.QueryLockableDurationsResponseAminoMsg): _39.QueryLockableDurationsResponse;
            toAminoMsg(message: _39.QueryLockableDurationsResponse): _39.QueryLockableDurationsResponseAminoMsg;
            fromProtoMsg(message: _39.QueryLockableDurationsResponseProtoMsg): _39.QueryLockableDurationsResponse;
            toProto(message: _39.QueryLockableDurationsResponse): Uint8Array;
            toProtoMsg(message: _39.QueryLockableDurationsResponse): _39.QueryLockableDurationsResponseProtoMsg;
        };
        Params: {
            typeUrl: string;
            encode(message: _38.Params, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _38.Params;
            fromPartial(object: Partial<_38.Params>): _38.Params;
            fromAmino(object: _38.ParamsAmino): _38.Params;
            toAmino(message: _38.Params): _38.ParamsAmino;
            fromAminoMsg(object: _38.ParamsAminoMsg): _38.Params;
            toAminoMsg(message: _38.Params): _38.ParamsAminoMsg;
            fromProtoMsg(message: _38.ParamsProtoMsg): _38.Params;
            toProto(message: _38.Params): Uint8Array;
            toProtoMsg(message: _38.Params): _38.ParamsProtoMsg;
        };
        GenesisState: {
            typeUrl: string;
            encode(message: _37.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _37.GenesisState;
            fromPartial(object: Partial<_37.GenesisState>): _37.GenesisState;
            fromAmino(object: _37.GenesisStateAmino): _37.GenesisState;
            toAmino(message: _37.GenesisState): _37.GenesisStateAmino;
            fromAminoMsg(object: _37.GenesisStateAminoMsg): _37.GenesisState;
            toAminoMsg(message: _37.GenesisState): _37.GenesisStateAminoMsg;
            fromProtoMsg(message: _37.GenesisStateProtoMsg): _37.GenesisState;
            toProto(message: _37.GenesisState): Uint8Array;
            toProtoMsg(message: _37.GenesisState): _37.GenesisStateProtoMsg;
        };
        Gauge: {
            typeUrl: string;
            encode(message: _36.Gauge, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _36.Gauge;
            fromPartial(object: Partial<_36.Gauge>): _36.Gauge;
            fromAmino(object: _36.GaugeAmino): _36.Gauge;
            toAmino(message: _36.Gauge): _36.GaugeAmino;
            fromAminoMsg(object: _36.GaugeAminoMsg): _36.Gauge;
            toAminoMsg(message: _36.Gauge): _36.GaugeAminoMsg;
            fromProtoMsg(message: _36.GaugeProtoMsg): _36.Gauge;
            toProto(message: _36.Gauge): Uint8Array;
            toProtoMsg(message: _36.Gauge): _36.GaugeProtoMsg;
        };
        LockableDurationsInfo: {
            typeUrl: string;
            encode(message: _36.LockableDurationsInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _36.LockableDurationsInfo;
            fromPartial(object: Partial<_36.LockableDurationsInfo>): _36.LockableDurationsInfo;
            fromAmino(object: _36.LockableDurationsInfoAmino): _36.LockableDurationsInfo;
            toAmino(message: _36.LockableDurationsInfo): _36.LockableDurationsInfoAmino;
            fromAminoMsg(object: _36.LockableDurationsInfoAminoMsg): _36.LockableDurationsInfo;
            toAminoMsg(message: _36.LockableDurationsInfo): _36.LockableDurationsInfoAminoMsg;
            fromProtoMsg(message: _36.LockableDurationsInfoProtoMsg): _36.LockableDurationsInfo;
            toProto(message: _36.LockableDurationsInfo): Uint8Array;
            toProtoMsg(message: _36.LockableDurationsInfo): _36.LockableDurationsInfoProtoMsg;
        };
    };
    const lockup: {
        MsgClientImpl: typeof _258.MsgClientImpl;
        QueryClientImpl: typeof _241.QueryClientImpl;
        createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
            moduleBalance(request?: _44.ModuleBalanceRequest): Promise<_44.ModuleBalanceResponse>;
            moduleLockedAmount(request?: _44.ModuleLockedAmountRequest): Promise<_44.ModuleLockedAmountResponse>;
            accountUnlockableCoins(request: _44.AccountUnlockableCoinsRequest): Promise<_44.AccountUnlockableCoinsResponse>;
            accountUnlockingCoins(request: _44.AccountUnlockingCoinsRequest): Promise<_44.AccountUnlockingCoinsResponse>;
            accountLockedCoins(request: _44.AccountLockedCoinsRequest): Promise<_44.AccountLockedCoinsResponse>;
            accountLockedPastTime(request: _44.AccountLockedPastTimeRequest): Promise<_44.AccountLockedPastTimeResponse>;
            accountLockedPastTimeNotUnlockingOnly(request: _44.AccountLockedPastTimeNotUnlockingOnlyRequest): Promise<_44.AccountLockedPastTimeNotUnlockingOnlyResponse>;
            accountUnlockedBeforeTime(request: _44.AccountUnlockedBeforeTimeRequest): Promise<_44.AccountUnlockedBeforeTimeResponse>;
            accountLockedPastTimeDenom(request: _44.AccountLockedPastTimeDenomRequest): Promise<_44.AccountLockedPastTimeDenomResponse>;
            lockedDenom(request: _44.LockedDenomRequest): Promise<_44.LockedDenomResponse>;
            lockedByID(request: _44.LockedRequest): Promise<_44.LockedResponse>;
            lockRewardReceiver(request: _44.LockRewardReceiverRequest): Promise<_44.LockRewardReceiverResponse>;
            nextLockID(request?: _44.NextLockIDRequest): Promise<_44.NextLockIDResponse>;
            syntheticLockupsByLockupID(request: _44.SyntheticLockupsByLockupIDRequest): Promise<_44.SyntheticLockupsByLockupIDResponse>;
            syntheticLockupByLockupID(request: _44.SyntheticLockupByLockupIDRequest): Promise<_44.SyntheticLockupByLockupIDResponse>;
            accountLockedLongerDuration(request: _44.AccountLockedLongerDurationRequest): Promise<_44.AccountLockedLongerDurationResponse>;
            accountLockedDuration(request: _44.AccountLockedDurationRequest): Promise<_44.AccountLockedDurationResponse>;
            accountLockedLongerDurationNotUnlockingOnly(request: _44.AccountLockedLongerDurationNotUnlockingOnlyRequest): Promise<_44.AccountLockedLongerDurationNotUnlockingOnlyResponse>;
            accountLockedLongerDurationDenom(request: _44.AccountLockedLongerDurationDenomRequest): Promise<_44.AccountLockedLongerDurationDenomResponse>;
            params(request?: _44.QueryParamsRequest): Promise<_44.QueryParamsResponse>;
        };
        LCDQueryClient: typeof _223.LCDQueryClient;
        registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
        load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
        MessageComposer: {
            encoded: {
                lockTokens(value: _45.MsgLockTokens): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                beginUnlockingAll(value: _45.MsgBeginUnlockingAll): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                beginUnlocking(value: _45.MsgBeginUnlocking): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                extendLockup(value: _45.MsgExtendLockup): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                forceUnlock(value: _45.MsgForceUnlock): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                setRewardReceiverAddress(value: _45.MsgSetRewardReceiverAddress): {
                    typeUrl: string;
                    value: Uint8Array;
                };
            };
            withTypeUrl: {
                lockTokens(value: _45.MsgLockTokens): {
                    typeUrl: string;
                    value: _45.MsgLockTokens;
                };
                beginUnlockingAll(value: _45.MsgBeginUnlockingAll): {
                    typeUrl: string;
                    value: _45.MsgBeginUnlockingAll;
                };
                beginUnlocking(value: _45.MsgBeginUnlocking): {
                    typeUrl: string;
                    value: _45.MsgBeginUnlocking;
                };
                extendLockup(value: _45.MsgExtendLockup): {
                    typeUrl: string;
                    value: _45.MsgExtendLockup;
                };
                forceUnlock(value: _45.MsgForceUnlock): {
                    typeUrl: string;
                    value: _45.MsgForceUnlock;
                };
                setRewardReceiverAddress(value: _45.MsgSetRewardReceiverAddress): {
                    typeUrl: string;
                    value: _45.MsgSetRewardReceiverAddress;
                };
            };
            fromJSON: {
                lockTokens(value: any): {
                    typeUrl: string;
                    value: _45.MsgLockTokens;
                };
                beginUnlockingAll(value: any): {
                    typeUrl: string;
                    value: _45.MsgBeginUnlockingAll;
                };
                beginUnlocking(value: any): {
                    typeUrl: string;
                    value: _45.MsgBeginUnlocking;
                };
                extendLockup(value: any): {
                    typeUrl: string;
                    value: _45.MsgExtendLockup;
                };
                forceUnlock(value: any): {
                    typeUrl: string;
                    value: _45.MsgForceUnlock;
                };
                setRewardReceiverAddress(value: any): {
                    typeUrl: string;
                    value: _45.MsgSetRewardReceiverAddress;
                };
            };
            fromPartial: {
                lockTokens(value: _45.MsgLockTokens): {
                    typeUrl: string;
                    value: _45.MsgLockTokens;
                };
                beginUnlockingAll(value: _45.MsgBeginUnlockingAll): {
                    typeUrl: string;
                    value: _45.MsgBeginUnlockingAll;
                };
                beginUnlocking(value: _45.MsgBeginUnlocking): {
                    typeUrl: string;
                    value: _45.MsgBeginUnlocking;
                };
                extendLockup(value: _45.MsgExtendLockup): {
                    typeUrl: string;
                    value: _45.MsgExtendLockup;
                };
                forceUnlock(value: _45.MsgForceUnlock): {
                    typeUrl: string;
                    value: _45.MsgForceUnlock;
                };
                setRewardReceiverAddress(value: _45.MsgSetRewardReceiverAddress): {
                    typeUrl: string;
                    value: _45.MsgSetRewardReceiverAddress;
                };
            };
        };
        AminoConverter: {
            "/osmosis.lockup.MsgLockTokens": {
                aminoType: string;
                toAmino: (message: _45.MsgLockTokens) => _45.MsgLockTokensAmino;
                fromAmino: (object: _45.MsgLockTokensAmino) => _45.MsgLockTokens;
            };
            "/osmosis.lockup.MsgBeginUnlockingAll": {
                aminoType: string;
                toAmino: (message: _45.MsgBeginUnlockingAll) => _45.MsgBeginUnlockingAllAmino;
                fromAmino: (object: _45.MsgBeginUnlockingAllAmino) => _45.MsgBeginUnlockingAll;
            };
            "/osmosis.lockup.MsgBeginUnlocking": {
                aminoType: string;
                toAmino: (message: _45.MsgBeginUnlocking) => _45.MsgBeginUnlockingAmino;
                fromAmino: (object: _45.MsgBeginUnlockingAmino) => _45.MsgBeginUnlocking;
            };
            "/osmosis.lockup.MsgExtendLockup": {
                aminoType: string;
                toAmino: (message: _45.MsgExtendLockup) => _45.MsgExtendLockupAmino;
                fromAmino: (object: _45.MsgExtendLockupAmino) => _45.MsgExtendLockup;
            };
            "/osmosis.lockup.MsgForceUnlock": {
                aminoType: string;
                toAmino: (message: _45.MsgForceUnlock) => _45.MsgForceUnlockAmino;
                fromAmino: (object: _45.MsgForceUnlockAmino) => _45.MsgForceUnlock;
            };
            "/osmosis.lockup.MsgSetRewardReceiverAddress": {
                aminoType: string;
                toAmino: (message: _45.MsgSetRewardReceiverAddress) => _45.MsgSetRewardReceiverAddressAmino;
                fromAmino: (object: _45.MsgSetRewardReceiverAddressAmino) => _45.MsgSetRewardReceiverAddress;
            };
        };
        MsgLockTokens: {
            typeUrl: string;
            encode(message: _45.MsgLockTokens, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _45.MsgLockTokens;
            fromPartial(object: Partial<_45.MsgLockTokens>): _45.MsgLockTokens;
            fromAmino(object: _45.MsgLockTokensAmino): _45.MsgLockTokens;
            toAmino(message: _45.MsgLockTokens): _45.MsgLockTokensAmino;
            fromAminoMsg(object: _45.MsgLockTokensAminoMsg): _45.MsgLockTokens;
            toAminoMsg(message: _45.MsgLockTokens): _45.MsgLockTokensAminoMsg;
            fromProtoMsg(message: _45.MsgLockTokensProtoMsg): _45.MsgLockTokens;
            toProto(message: _45.MsgLockTokens): Uint8Array;
            toProtoMsg(message: _45.MsgLockTokens): _45.MsgLockTokensProtoMsg;
        };
        MsgLockTokensResponse: {
            typeUrl: string;
            encode(message: _45.MsgLockTokensResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _45.MsgLockTokensResponse;
            fromPartial(object: Partial<_45.MsgLockTokensResponse>): _45.MsgLockTokensResponse;
            fromAmino(object: _45.MsgLockTokensResponseAmino): _45.MsgLockTokensResponse;
            toAmino(message: _45.MsgLockTokensResponse): _45.MsgLockTokensResponseAmino;
            fromAminoMsg(object: _45.MsgLockTokensResponseAminoMsg): _45.MsgLockTokensResponse;
            toAminoMsg(message: _45.MsgLockTokensResponse): _45.MsgLockTokensResponseAminoMsg;
            fromProtoMsg(message: _45.MsgLockTokensResponseProtoMsg): _45.MsgLockTokensResponse;
            toProto(message: _45.MsgLockTokensResponse): Uint8Array;
            toProtoMsg(message: _45.MsgLockTokensResponse): _45.MsgLockTokensResponseProtoMsg;
        };
        MsgBeginUnlockingAll: {
            typeUrl: string;
            encode(message: _45.MsgBeginUnlockingAll, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _45.MsgBeginUnlockingAll;
            fromPartial(object: Partial<_45.MsgBeginUnlockingAll>): _45.MsgBeginUnlockingAll;
            fromAmino(object: _45.MsgBeginUnlockingAllAmino): _45.MsgBeginUnlockingAll;
            toAmino(message: _45.MsgBeginUnlockingAll): _45.MsgBeginUnlockingAllAmino;
            fromAminoMsg(object: _45.MsgBeginUnlockingAllAminoMsg): _45.MsgBeginUnlockingAll;
            toAminoMsg(message: _45.MsgBeginUnlockingAll): _45.MsgBeginUnlockingAllAminoMsg;
            fromProtoMsg(message: _45.MsgBeginUnlockingAllProtoMsg): _45.MsgBeginUnlockingAll;
            toProto(message: _45.MsgBeginUnlockingAll): Uint8Array;
            toProtoMsg(message: _45.MsgBeginUnlockingAll): _45.MsgBeginUnlockingAllProtoMsg;
        };
        MsgBeginUnlockingAllResponse: {
            typeUrl: string;
            encode(message: _45.MsgBeginUnlockingAllResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _45.MsgBeginUnlockingAllResponse;
            fromPartial(object: Partial<_45.MsgBeginUnlockingAllResponse>): _45.MsgBeginUnlockingAllResponse;
            fromAmino(object: _45.MsgBeginUnlockingAllResponseAmino): _45.MsgBeginUnlockingAllResponse;
            toAmino(message: _45.MsgBeginUnlockingAllResponse): _45.MsgBeginUnlockingAllResponseAmino;
            fromAminoMsg(object: _45.MsgBeginUnlockingAllResponseAminoMsg): _45.MsgBeginUnlockingAllResponse;
            toAminoMsg(message: _45.MsgBeginUnlockingAllResponse): _45.MsgBeginUnlockingAllResponseAminoMsg;
            fromProtoMsg(message: _45.MsgBeginUnlockingAllResponseProtoMsg): _45.MsgBeginUnlockingAllResponse;
            toProto(message: _45.MsgBeginUnlockingAllResponse): Uint8Array;
            toProtoMsg(message: _45.MsgBeginUnlockingAllResponse): _45.MsgBeginUnlockingAllResponseProtoMsg;
        };
        MsgBeginUnlocking: {
            typeUrl: string;
            encode(message: _45.MsgBeginUnlocking, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _45.MsgBeginUnlocking;
            fromPartial(object: Partial<_45.MsgBeginUnlocking>): _45.MsgBeginUnlocking;
            fromAmino(object: _45.MsgBeginUnlockingAmino): _45.MsgBeginUnlocking;
            toAmino(message: _45.MsgBeginUnlocking): _45.MsgBeginUnlockingAmino;
            fromAminoMsg(object: _45.MsgBeginUnlockingAminoMsg): _45.MsgBeginUnlocking;
            toAminoMsg(message: _45.MsgBeginUnlocking): _45.MsgBeginUnlockingAminoMsg;
            fromProtoMsg(message: _45.MsgBeginUnlockingProtoMsg): _45.MsgBeginUnlocking;
            toProto(message: _45.MsgBeginUnlocking): Uint8Array;
            toProtoMsg(message: _45.MsgBeginUnlocking): _45.MsgBeginUnlockingProtoMsg;
        };
        MsgBeginUnlockingResponse: {
            typeUrl: string;
            encode(message: _45.MsgBeginUnlockingResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _45.MsgBeginUnlockingResponse;
            fromPartial(object: Partial<_45.MsgBeginUnlockingResponse>): _45.MsgBeginUnlockingResponse;
            fromAmino(object: _45.MsgBeginUnlockingResponseAmino): _45.MsgBeginUnlockingResponse;
            toAmino(message: _45.MsgBeginUnlockingResponse): _45.MsgBeginUnlockingResponseAmino;
            fromAminoMsg(object: _45.MsgBeginUnlockingResponseAminoMsg): _45.MsgBeginUnlockingResponse;
            toAminoMsg(message: _45.MsgBeginUnlockingResponse): _45.MsgBeginUnlockingResponseAminoMsg;
            fromProtoMsg(message: _45.MsgBeginUnlockingResponseProtoMsg): _45.MsgBeginUnlockingResponse;
            toProto(message: _45.MsgBeginUnlockingResponse): Uint8Array;
            toProtoMsg(message: _45.MsgBeginUnlockingResponse): _45.MsgBeginUnlockingResponseProtoMsg;
        };
        MsgExtendLockup: {
            typeUrl: string;
            encode(message: _45.MsgExtendLockup, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _45.MsgExtendLockup;
            fromPartial(object: Partial<_45.MsgExtendLockup>): _45.MsgExtendLockup;
            fromAmino(object: _45.MsgExtendLockupAmino): _45.MsgExtendLockup;
            toAmino(message: _45.MsgExtendLockup): _45.MsgExtendLockupAmino;
            fromAminoMsg(object: _45.MsgExtendLockupAminoMsg): _45.MsgExtendLockup;
            toAminoMsg(message: _45.MsgExtendLockup): _45.MsgExtendLockupAminoMsg;
            fromProtoMsg(message: _45.MsgExtendLockupProtoMsg): _45.MsgExtendLockup;
            toProto(message: _45.MsgExtendLockup): Uint8Array;
            toProtoMsg(message: _45.MsgExtendLockup): _45.MsgExtendLockupProtoMsg;
        };
        MsgExtendLockupResponse: {
            typeUrl: string;
            encode(message: _45.MsgExtendLockupResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _45.MsgExtendLockupResponse;
            fromPartial(object: Partial<_45.MsgExtendLockupResponse>): _45.MsgExtendLockupResponse;
            fromAmino(object: _45.MsgExtendLockupResponseAmino): _45.MsgExtendLockupResponse;
            toAmino(message: _45.MsgExtendLockupResponse): _45.MsgExtendLockupResponseAmino;
            fromAminoMsg(object: _45.MsgExtendLockupResponseAminoMsg): _45.MsgExtendLockupResponse;
            toAminoMsg(message: _45.MsgExtendLockupResponse): _45.MsgExtendLockupResponseAminoMsg;
            fromProtoMsg(message: _45.MsgExtendLockupResponseProtoMsg): _45.MsgExtendLockupResponse;
            toProto(message: _45.MsgExtendLockupResponse): Uint8Array;
            toProtoMsg(message: _45.MsgExtendLockupResponse): _45.MsgExtendLockupResponseProtoMsg;
        };
        MsgForceUnlock: {
            typeUrl: string;
            encode(message: _45.MsgForceUnlock, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _45.MsgForceUnlock;
            fromPartial(object: Partial<_45.MsgForceUnlock>): _45.MsgForceUnlock;
            fromAmino(object: _45.MsgForceUnlockAmino): _45.MsgForceUnlock;
            toAmino(message: _45.MsgForceUnlock): _45.MsgForceUnlockAmino;
            fromAminoMsg(object: _45.MsgForceUnlockAminoMsg): _45.MsgForceUnlock;
            toAminoMsg(message: _45.MsgForceUnlock): _45.MsgForceUnlockAminoMsg;
            fromProtoMsg(message: _45.MsgForceUnlockProtoMsg): _45.MsgForceUnlock;
            toProto(message: _45.MsgForceUnlock): Uint8Array;
            toProtoMsg(message: _45.MsgForceUnlock): _45.MsgForceUnlockProtoMsg;
        };
        MsgForceUnlockResponse: {
            typeUrl: string;
            encode(message: _45.MsgForceUnlockResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _45.MsgForceUnlockResponse;
            fromPartial(object: Partial<_45.MsgForceUnlockResponse>): _45.MsgForceUnlockResponse;
            fromAmino(object: _45.MsgForceUnlockResponseAmino): _45.MsgForceUnlockResponse;
            toAmino(message: _45.MsgForceUnlockResponse): _45.MsgForceUnlockResponseAmino;
            fromAminoMsg(object: _45.MsgForceUnlockResponseAminoMsg): _45.MsgForceUnlockResponse;
            toAminoMsg(message: _45.MsgForceUnlockResponse): _45.MsgForceUnlockResponseAminoMsg;
            fromProtoMsg(message: _45.MsgForceUnlockResponseProtoMsg): _45.MsgForceUnlockResponse;
            toProto(message: _45.MsgForceUnlockResponse): Uint8Array;
            toProtoMsg(message: _45.MsgForceUnlockResponse): _45.MsgForceUnlockResponseProtoMsg;
        };
        MsgSetRewardReceiverAddress: {
            typeUrl: string;
            encode(message: _45.MsgSetRewardReceiverAddress, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _45.MsgSetRewardReceiverAddress;
            fromPartial(object: Partial<_45.MsgSetRewardReceiverAddress>): _45.MsgSetRewardReceiverAddress;
            fromAmino(object: _45.MsgSetRewardReceiverAddressAmino): _45.MsgSetRewardReceiverAddress;
            toAmino(message: _45.MsgSetRewardReceiverAddress): _45.MsgSetRewardReceiverAddressAmino;
            fromAminoMsg(object: _45.MsgSetRewardReceiverAddressAminoMsg): _45.MsgSetRewardReceiverAddress;
            toAminoMsg(message: _45.MsgSetRewardReceiverAddress): _45.MsgSetRewardReceiverAddressAminoMsg;
            fromProtoMsg(message: _45.MsgSetRewardReceiverAddressProtoMsg): _45.MsgSetRewardReceiverAddress;
            toProto(message: _45.MsgSetRewardReceiverAddress): Uint8Array;
            toProtoMsg(message: _45.MsgSetRewardReceiverAddress): _45.MsgSetRewardReceiverAddressProtoMsg;
        };
        MsgSetRewardReceiverAddressResponse: {
            typeUrl: string;
            encode(message: _45.MsgSetRewardReceiverAddressResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _45.MsgSetRewardReceiverAddressResponse;
            fromPartial(object: Partial<_45.MsgSetRewardReceiverAddressResponse>): _45.MsgSetRewardReceiverAddressResponse;
            fromAmino(object: _45.MsgSetRewardReceiverAddressResponseAmino): _45.MsgSetRewardReceiverAddressResponse;
            toAmino(message: _45.MsgSetRewardReceiverAddressResponse): _45.MsgSetRewardReceiverAddressResponseAmino;
            fromAminoMsg(object: _45.MsgSetRewardReceiverAddressResponseAminoMsg): _45.MsgSetRewardReceiverAddressResponse;
            toAminoMsg(message: _45.MsgSetRewardReceiverAddressResponse): _45.MsgSetRewardReceiverAddressResponseAminoMsg;
            fromProtoMsg(message: _45.MsgSetRewardReceiverAddressResponseProtoMsg): _45.MsgSetRewardReceiverAddressResponse;
            toProto(message: _45.MsgSetRewardReceiverAddressResponse): Uint8Array;
            toProtoMsg(message: _45.MsgSetRewardReceiverAddressResponse): _45.MsgSetRewardReceiverAddressResponseProtoMsg;
        };
        ModuleBalanceRequest: {
            typeUrl: string;
            encode(_: _44.ModuleBalanceRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(_: any): _44.ModuleBalanceRequest;
            fromPartial(_: Partial<_44.ModuleBalanceRequest>): _44.ModuleBalanceRequest;
            fromAmino(_: _44.ModuleBalanceRequestAmino): _44.ModuleBalanceRequest;
            toAmino(_: _44.ModuleBalanceRequest): _44.ModuleBalanceRequestAmino;
            fromAminoMsg(object: _44.ModuleBalanceRequestAminoMsg): _44.ModuleBalanceRequest;
            toAminoMsg(message: _44.ModuleBalanceRequest): _44.ModuleBalanceRequestAminoMsg;
            fromProtoMsg(message: _44.ModuleBalanceRequestProtoMsg): _44.ModuleBalanceRequest;
            toProto(message: _44.ModuleBalanceRequest): Uint8Array;
            toProtoMsg(message: _44.ModuleBalanceRequest): _44.ModuleBalanceRequestProtoMsg;
        };
        ModuleBalanceResponse: {
            typeUrl: string;
            encode(message: _44.ModuleBalanceResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _44.ModuleBalanceResponse;
            fromPartial(object: Partial<_44.ModuleBalanceResponse>): _44.ModuleBalanceResponse;
            fromAmino(object: _44.ModuleBalanceResponseAmino): _44.ModuleBalanceResponse;
            toAmino(message: _44.ModuleBalanceResponse): _44.ModuleBalanceResponseAmino;
            fromAminoMsg(object: _44.ModuleBalanceResponseAminoMsg): _44.ModuleBalanceResponse;
            toAminoMsg(message: _44.ModuleBalanceResponse): _44.ModuleBalanceResponseAminoMsg;
            fromProtoMsg(message: _44.ModuleBalanceResponseProtoMsg): _44.ModuleBalanceResponse;
            toProto(message: _44.ModuleBalanceResponse): Uint8Array;
            toProtoMsg(message: _44.ModuleBalanceResponse): _44.ModuleBalanceResponseProtoMsg;
        };
        ModuleLockedAmountRequest: {
            typeUrl: string;
            encode(_: _44.ModuleLockedAmountRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(_: any): _44.ModuleLockedAmountRequest;
            fromPartial(_: Partial<_44.ModuleLockedAmountRequest>): _44.ModuleLockedAmountRequest;
            fromAmino(_: _44.ModuleLockedAmountRequestAmino): _44.ModuleLockedAmountRequest;
            toAmino(_: _44.ModuleLockedAmountRequest): _44.ModuleLockedAmountRequestAmino;
            fromAminoMsg(object: _44.ModuleLockedAmountRequestAminoMsg): _44.ModuleLockedAmountRequest;
            toAminoMsg(message: _44.ModuleLockedAmountRequest): _44.ModuleLockedAmountRequestAminoMsg;
            fromProtoMsg(message: _44.ModuleLockedAmountRequestProtoMsg): _44.ModuleLockedAmountRequest;
            toProto(message: _44.ModuleLockedAmountRequest): Uint8Array;
            toProtoMsg(message: _44.ModuleLockedAmountRequest): _44.ModuleLockedAmountRequestProtoMsg;
        };
        ModuleLockedAmountResponse: {
            typeUrl: string;
            encode(message: _44.ModuleLockedAmountResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _44.ModuleLockedAmountResponse;
            fromPartial(object: Partial<_44.ModuleLockedAmountResponse>): _44.ModuleLockedAmountResponse;
            fromAmino(object: _44.ModuleLockedAmountResponseAmino): _44.ModuleLockedAmountResponse;
            toAmino(message: _44.ModuleLockedAmountResponse): _44.ModuleLockedAmountResponseAmino;
            fromAminoMsg(object: _44.ModuleLockedAmountResponseAminoMsg): _44.ModuleLockedAmountResponse;
            toAminoMsg(message: _44.ModuleLockedAmountResponse): _44.ModuleLockedAmountResponseAminoMsg;
            fromProtoMsg(message: _44.ModuleLockedAmountResponseProtoMsg): _44.ModuleLockedAmountResponse;
            toProto(message: _44.ModuleLockedAmountResponse): Uint8Array;
            toProtoMsg(message: _44.ModuleLockedAmountResponse): _44.ModuleLockedAmountResponseProtoMsg;
        };
        AccountUnlockableCoinsRequest: {
            typeUrl: string;
            encode(message: _44.AccountUnlockableCoinsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _44.AccountUnlockableCoinsRequest;
            fromPartial(object: Partial<_44.AccountUnlockableCoinsRequest>): _44.AccountUnlockableCoinsRequest;
            fromAmino(object: _44.AccountUnlockableCoinsRequestAmino): _44.AccountUnlockableCoinsRequest;
            toAmino(message: _44.AccountUnlockableCoinsRequest): _44.AccountUnlockableCoinsRequestAmino;
            fromAminoMsg(object: _44.AccountUnlockableCoinsRequestAminoMsg): _44.AccountUnlockableCoinsRequest;
            toAminoMsg(message: _44.AccountUnlockableCoinsRequest): _44.AccountUnlockableCoinsRequestAminoMsg;
            fromProtoMsg(message: _44.AccountUnlockableCoinsRequestProtoMsg): _44.AccountUnlockableCoinsRequest;
            toProto(message: _44.AccountUnlockableCoinsRequest): Uint8Array;
            toProtoMsg(message: _44.AccountUnlockableCoinsRequest): _44.AccountUnlockableCoinsRequestProtoMsg;
        };
        AccountUnlockableCoinsResponse: {
            typeUrl: string;
            encode(message: _44.AccountUnlockableCoinsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _44.AccountUnlockableCoinsResponse;
            fromPartial(object: Partial<_44.AccountUnlockableCoinsResponse>): _44.AccountUnlockableCoinsResponse;
            fromAmino(object: _44.AccountUnlockableCoinsResponseAmino): _44.AccountUnlockableCoinsResponse;
            toAmino(message: _44.AccountUnlockableCoinsResponse): _44.AccountUnlockableCoinsResponseAmino;
            fromAminoMsg(object: _44.AccountUnlockableCoinsResponseAminoMsg): _44.AccountUnlockableCoinsResponse;
            toAminoMsg(message: _44.AccountUnlockableCoinsResponse): _44.AccountUnlockableCoinsResponseAminoMsg;
            fromProtoMsg(message: _44.AccountUnlockableCoinsResponseProtoMsg): _44.AccountUnlockableCoinsResponse;
            toProto(message: _44.AccountUnlockableCoinsResponse): Uint8Array;
            toProtoMsg(message: _44.AccountUnlockableCoinsResponse): _44.AccountUnlockableCoinsResponseProtoMsg;
        };
        AccountUnlockingCoinsRequest: {
            typeUrl: string;
            encode(message: _44.AccountUnlockingCoinsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _44.AccountUnlockingCoinsRequest;
            fromPartial(object: Partial<_44.AccountUnlockingCoinsRequest>): _44.AccountUnlockingCoinsRequest;
            fromAmino(object: _44.AccountUnlockingCoinsRequestAmino): _44.AccountUnlockingCoinsRequest;
            toAmino(message: _44.AccountUnlockingCoinsRequest): _44.AccountUnlockingCoinsRequestAmino;
            fromAminoMsg(object: _44.AccountUnlockingCoinsRequestAminoMsg): _44.AccountUnlockingCoinsRequest;
            toAminoMsg(message: _44.AccountUnlockingCoinsRequest): _44.AccountUnlockingCoinsRequestAminoMsg;
            fromProtoMsg(message: _44.AccountUnlockingCoinsRequestProtoMsg): _44.AccountUnlockingCoinsRequest;
            toProto(message: _44.AccountUnlockingCoinsRequest): Uint8Array;
            toProtoMsg(message: _44.AccountUnlockingCoinsRequest): _44.AccountUnlockingCoinsRequestProtoMsg;
        };
        AccountUnlockingCoinsResponse: {
            typeUrl: string;
            encode(message: _44.AccountUnlockingCoinsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _44.AccountUnlockingCoinsResponse;
            fromPartial(object: Partial<_44.AccountUnlockingCoinsResponse>): _44.AccountUnlockingCoinsResponse;
            fromAmino(object: _44.AccountUnlockingCoinsResponseAmino): _44.AccountUnlockingCoinsResponse;
            toAmino(message: _44.AccountUnlockingCoinsResponse): _44.AccountUnlockingCoinsResponseAmino;
            fromAminoMsg(object: _44.AccountUnlockingCoinsResponseAminoMsg): _44.AccountUnlockingCoinsResponse;
            toAminoMsg(message: _44.AccountUnlockingCoinsResponse): _44.AccountUnlockingCoinsResponseAminoMsg;
            fromProtoMsg(message: _44.AccountUnlockingCoinsResponseProtoMsg): _44.AccountUnlockingCoinsResponse;
            toProto(message: _44.AccountUnlockingCoinsResponse): Uint8Array;
            toProtoMsg(message: _44.AccountUnlockingCoinsResponse): _44.AccountUnlockingCoinsResponseProtoMsg;
        };
        AccountLockedCoinsRequest: {
            typeUrl: string;
            encode(message: _44.AccountLockedCoinsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _44.AccountLockedCoinsRequest;
            fromPartial(object: Partial<_44.AccountLockedCoinsRequest>): _44.AccountLockedCoinsRequest;
            fromAmino(object: _44.AccountLockedCoinsRequestAmino): _44.AccountLockedCoinsRequest;
            toAmino(message: _44.AccountLockedCoinsRequest): _44.AccountLockedCoinsRequestAmino;
            fromAminoMsg(object: _44.AccountLockedCoinsRequestAminoMsg): _44.AccountLockedCoinsRequest;
            toAminoMsg(message: _44.AccountLockedCoinsRequest): _44.AccountLockedCoinsRequestAminoMsg;
            fromProtoMsg(message: _44.AccountLockedCoinsRequestProtoMsg): _44.AccountLockedCoinsRequest;
            toProto(message: _44.AccountLockedCoinsRequest): Uint8Array;
            toProtoMsg(message: _44.AccountLockedCoinsRequest): _44.AccountLockedCoinsRequestProtoMsg;
        };
        AccountLockedCoinsResponse: {
            typeUrl: string;
            encode(message: _44.AccountLockedCoinsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _44.AccountLockedCoinsResponse;
            fromPartial(object: Partial<_44.AccountLockedCoinsResponse>): _44.AccountLockedCoinsResponse;
            fromAmino(object: _44.AccountLockedCoinsResponseAmino): _44.AccountLockedCoinsResponse;
            toAmino(message: _44.AccountLockedCoinsResponse): _44.AccountLockedCoinsResponseAmino;
            fromAminoMsg(object: _44.AccountLockedCoinsResponseAminoMsg): _44.AccountLockedCoinsResponse;
            toAminoMsg(message: _44.AccountLockedCoinsResponse): _44.AccountLockedCoinsResponseAminoMsg;
            fromProtoMsg(message: _44.AccountLockedCoinsResponseProtoMsg): _44.AccountLockedCoinsResponse;
            toProto(message: _44.AccountLockedCoinsResponse): Uint8Array;
            toProtoMsg(message: _44.AccountLockedCoinsResponse): _44.AccountLockedCoinsResponseProtoMsg;
        };
        AccountLockedPastTimeRequest: {
            typeUrl: string;
            encode(message: _44.AccountLockedPastTimeRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _44.AccountLockedPastTimeRequest;
            fromPartial(object: Partial<_44.AccountLockedPastTimeRequest>): _44.AccountLockedPastTimeRequest;
            fromAmino(object: _44.AccountLockedPastTimeRequestAmino): _44.AccountLockedPastTimeRequest;
            toAmino(message: _44.AccountLockedPastTimeRequest): _44.AccountLockedPastTimeRequestAmino;
            fromAminoMsg(object: _44.AccountLockedPastTimeRequestAminoMsg): _44.AccountLockedPastTimeRequest;
            toAminoMsg(message: _44.AccountLockedPastTimeRequest): _44.AccountLockedPastTimeRequestAminoMsg;
            fromProtoMsg(message: _44.AccountLockedPastTimeRequestProtoMsg): _44.AccountLockedPastTimeRequest;
            toProto(message: _44.AccountLockedPastTimeRequest): Uint8Array;
            toProtoMsg(message: _44.AccountLockedPastTimeRequest): _44.AccountLockedPastTimeRequestProtoMsg;
        };
        AccountLockedPastTimeResponse: {
            typeUrl: string;
            encode(message: _44.AccountLockedPastTimeResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _44.AccountLockedPastTimeResponse;
            fromPartial(object: Partial<_44.AccountLockedPastTimeResponse>): _44.AccountLockedPastTimeResponse;
            fromAmino(object: _44.AccountLockedPastTimeResponseAmino): _44.AccountLockedPastTimeResponse;
            toAmino(message: _44.AccountLockedPastTimeResponse): _44.AccountLockedPastTimeResponseAmino;
            fromAminoMsg(object: _44.AccountLockedPastTimeResponseAminoMsg): _44.AccountLockedPastTimeResponse;
            toAminoMsg(message: _44.AccountLockedPastTimeResponse): _44.AccountLockedPastTimeResponseAminoMsg;
            fromProtoMsg(message: _44.AccountLockedPastTimeResponseProtoMsg): _44.AccountLockedPastTimeResponse;
            toProto(message: _44.AccountLockedPastTimeResponse): Uint8Array;
            toProtoMsg(message: _44.AccountLockedPastTimeResponse): _44.AccountLockedPastTimeResponseProtoMsg;
        };
        AccountLockedPastTimeNotUnlockingOnlyRequest: {
            typeUrl: string;
            encode(message: _44.AccountLockedPastTimeNotUnlockingOnlyRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _44.AccountLockedPastTimeNotUnlockingOnlyRequest;
            fromPartial(object: Partial<_44.AccountLockedPastTimeNotUnlockingOnlyRequest>): _44.AccountLockedPastTimeNotUnlockingOnlyRequest;
            fromAmino(object: _44.AccountLockedPastTimeNotUnlockingOnlyRequestAmino): _44.AccountLockedPastTimeNotUnlockingOnlyRequest;
            toAmino(message: _44.AccountLockedPastTimeNotUnlockingOnlyRequest): _44.AccountLockedPastTimeNotUnlockingOnlyRequestAmino;
            fromAminoMsg(object: _44.AccountLockedPastTimeNotUnlockingOnlyRequestAminoMsg): _44.AccountLockedPastTimeNotUnlockingOnlyRequest;
            toAminoMsg(message: _44.AccountLockedPastTimeNotUnlockingOnlyRequest): _44.AccountLockedPastTimeNotUnlockingOnlyRequestAminoMsg;
            fromProtoMsg(message: _44.AccountLockedPastTimeNotUnlockingOnlyRequestProtoMsg): _44.AccountLockedPastTimeNotUnlockingOnlyRequest;
            toProto(message: _44.AccountLockedPastTimeNotUnlockingOnlyRequest): Uint8Array;
            toProtoMsg(message: _44.AccountLockedPastTimeNotUnlockingOnlyRequest): _44.AccountLockedPastTimeNotUnlockingOnlyRequestProtoMsg;
        };
        AccountLockedPastTimeNotUnlockingOnlyResponse: {
            typeUrl: string;
            encode(message: _44.AccountLockedPastTimeNotUnlockingOnlyResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _44.AccountLockedPastTimeNotUnlockingOnlyResponse;
            fromPartial(object: Partial<_44.AccountLockedPastTimeNotUnlockingOnlyResponse>): _44.AccountLockedPastTimeNotUnlockingOnlyResponse;
            fromAmino(object: _44.AccountLockedPastTimeNotUnlockingOnlyResponseAmino): _44.AccountLockedPastTimeNotUnlockingOnlyResponse;
            toAmino(message: _44.AccountLockedPastTimeNotUnlockingOnlyResponse): _44.AccountLockedPastTimeNotUnlockingOnlyResponseAmino;
            fromAminoMsg(object: _44.AccountLockedPastTimeNotUnlockingOnlyResponseAminoMsg): _44.AccountLockedPastTimeNotUnlockingOnlyResponse;
            toAminoMsg(message: _44.AccountLockedPastTimeNotUnlockingOnlyResponse): _44.AccountLockedPastTimeNotUnlockingOnlyResponseAminoMsg;
            fromProtoMsg(message: _44.AccountLockedPastTimeNotUnlockingOnlyResponseProtoMsg): _44.AccountLockedPastTimeNotUnlockingOnlyResponse;
            toProto(message: _44.AccountLockedPastTimeNotUnlockingOnlyResponse): Uint8Array;
            toProtoMsg(message: _44.AccountLockedPastTimeNotUnlockingOnlyResponse): _44.AccountLockedPastTimeNotUnlockingOnlyResponseProtoMsg;
        };
        AccountUnlockedBeforeTimeRequest: {
            typeUrl: string;
            encode(message: _44.AccountUnlockedBeforeTimeRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _44.AccountUnlockedBeforeTimeRequest;
            fromPartial(object: Partial<_44.AccountUnlockedBeforeTimeRequest>): _44.AccountUnlockedBeforeTimeRequest;
            fromAmino(object: _44.AccountUnlockedBeforeTimeRequestAmino): _44.AccountUnlockedBeforeTimeRequest;
            toAmino(message: _44.AccountUnlockedBeforeTimeRequest): _44.AccountUnlockedBeforeTimeRequestAmino;
            fromAminoMsg(object: _44.AccountUnlockedBeforeTimeRequestAminoMsg): _44.AccountUnlockedBeforeTimeRequest;
            toAminoMsg(message: _44.AccountUnlockedBeforeTimeRequest): _44.AccountUnlockedBeforeTimeRequestAminoMsg;
            fromProtoMsg(message: _44.AccountUnlockedBeforeTimeRequestProtoMsg): _44.AccountUnlockedBeforeTimeRequest;
            toProto(message: _44.AccountUnlockedBeforeTimeRequest): Uint8Array;
            toProtoMsg(message: _44.AccountUnlockedBeforeTimeRequest): _44.AccountUnlockedBeforeTimeRequestProtoMsg;
        };
        AccountUnlockedBeforeTimeResponse: {
            typeUrl: string;
            encode(message: _44.AccountUnlockedBeforeTimeResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _44.AccountUnlockedBeforeTimeResponse;
            fromPartial(object: Partial<_44.AccountUnlockedBeforeTimeResponse>): _44.AccountUnlockedBeforeTimeResponse;
            fromAmino(object: _44.AccountUnlockedBeforeTimeResponseAmino): _44.AccountUnlockedBeforeTimeResponse;
            toAmino(message: _44.AccountUnlockedBeforeTimeResponse): _44.AccountUnlockedBeforeTimeResponseAmino;
            fromAminoMsg(object: _44.AccountUnlockedBeforeTimeResponseAminoMsg): _44.AccountUnlockedBeforeTimeResponse;
            toAminoMsg(message: _44.AccountUnlockedBeforeTimeResponse): _44.AccountUnlockedBeforeTimeResponseAminoMsg;
            fromProtoMsg(message: _44.AccountUnlockedBeforeTimeResponseProtoMsg): _44.AccountUnlockedBeforeTimeResponse;
            toProto(message: _44.AccountUnlockedBeforeTimeResponse): Uint8Array;
            toProtoMsg(message: _44.AccountUnlockedBeforeTimeResponse): _44.AccountUnlockedBeforeTimeResponseProtoMsg;
        };
        AccountLockedPastTimeDenomRequest: {
            typeUrl: string;
            encode(message: _44.AccountLockedPastTimeDenomRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _44.AccountLockedPastTimeDenomRequest;
            fromPartial(object: Partial<_44.AccountLockedPastTimeDenomRequest>): _44.AccountLockedPastTimeDenomRequest;
            fromAmino(object: _44.AccountLockedPastTimeDenomRequestAmino): _44.AccountLockedPastTimeDenomRequest;
            toAmino(message: _44.AccountLockedPastTimeDenomRequest): _44.AccountLockedPastTimeDenomRequestAmino;
            fromAminoMsg(object: _44.AccountLockedPastTimeDenomRequestAminoMsg): _44.AccountLockedPastTimeDenomRequest;
            toAminoMsg(message: _44.AccountLockedPastTimeDenomRequest): _44.AccountLockedPastTimeDenomRequestAminoMsg;
            fromProtoMsg(message: _44.AccountLockedPastTimeDenomRequestProtoMsg): _44.AccountLockedPastTimeDenomRequest;
            toProto(message: _44.AccountLockedPastTimeDenomRequest): Uint8Array;
            toProtoMsg(message: _44.AccountLockedPastTimeDenomRequest): _44.AccountLockedPastTimeDenomRequestProtoMsg;
        };
        AccountLockedPastTimeDenomResponse: {
            typeUrl: string;
            encode(message: _44.AccountLockedPastTimeDenomResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _44.AccountLockedPastTimeDenomResponse;
            fromPartial(object: Partial<_44.AccountLockedPastTimeDenomResponse>): _44.AccountLockedPastTimeDenomResponse;
            fromAmino(object: _44.AccountLockedPastTimeDenomResponseAmino): _44.AccountLockedPastTimeDenomResponse;
            toAmino(message: _44.AccountLockedPastTimeDenomResponse): _44.AccountLockedPastTimeDenomResponseAmino;
            fromAminoMsg(object: _44.AccountLockedPastTimeDenomResponseAminoMsg): _44.AccountLockedPastTimeDenomResponse;
            toAminoMsg(message: _44.AccountLockedPastTimeDenomResponse): _44.AccountLockedPastTimeDenomResponseAminoMsg;
            fromProtoMsg(message: _44.AccountLockedPastTimeDenomResponseProtoMsg): _44.AccountLockedPastTimeDenomResponse;
            toProto(message: _44.AccountLockedPastTimeDenomResponse): Uint8Array;
            toProtoMsg(message: _44.AccountLockedPastTimeDenomResponse): _44.AccountLockedPastTimeDenomResponseProtoMsg;
        };
        LockedDenomRequest: {
            typeUrl: string;
            encode(message: _44.LockedDenomRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _44.LockedDenomRequest;
            fromPartial(object: Partial<_44.LockedDenomRequest>): _44.LockedDenomRequest;
            fromAmino(object: _44.LockedDenomRequestAmino): _44.LockedDenomRequest;
            toAmino(message: _44.LockedDenomRequest): _44.LockedDenomRequestAmino;
            fromAminoMsg(object: _44.LockedDenomRequestAminoMsg): _44.LockedDenomRequest;
            toAminoMsg(message: _44.LockedDenomRequest): _44.LockedDenomRequestAminoMsg;
            fromProtoMsg(message: _44.LockedDenomRequestProtoMsg): _44.LockedDenomRequest;
            toProto(message: _44.LockedDenomRequest): Uint8Array;
            toProtoMsg(message: _44.LockedDenomRequest): _44.LockedDenomRequestProtoMsg;
        };
        LockedDenomResponse: {
            typeUrl: string;
            encode(message: _44.LockedDenomResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _44.LockedDenomResponse;
            fromPartial(object: Partial<_44.LockedDenomResponse>): _44.LockedDenomResponse;
            fromAmino(object: _44.LockedDenomResponseAmino): _44.LockedDenomResponse;
            toAmino(message: _44.LockedDenomResponse): _44.LockedDenomResponseAmino;
            fromAminoMsg(object: _44.LockedDenomResponseAminoMsg): _44.LockedDenomResponse;
            toAminoMsg(message: _44.LockedDenomResponse): _44.LockedDenomResponseAminoMsg;
            fromProtoMsg(message: _44.LockedDenomResponseProtoMsg): _44.LockedDenomResponse;
            toProto(message: _44.LockedDenomResponse): Uint8Array;
            toProtoMsg(message: _44.LockedDenomResponse): _44.LockedDenomResponseProtoMsg;
        };
        LockedRequest: {
            typeUrl: string;
            encode(message: _44.LockedRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _44.LockedRequest;
            fromPartial(object: Partial<_44.LockedRequest>): _44.LockedRequest;
            fromAmino(object: _44.LockedRequestAmino): _44.LockedRequest;
            toAmino(message: _44.LockedRequest): _44.LockedRequestAmino;
            fromAminoMsg(object: _44.LockedRequestAminoMsg): _44.LockedRequest;
            toAminoMsg(message: _44.LockedRequest): _44.LockedRequestAminoMsg;
            fromProtoMsg(message: _44.LockedRequestProtoMsg): _44.LockedRequest;
            toProto(message: _44.LockedRequest): Uint8Array;
            toProtoMsg(message: _44.LockedRequest): _44.LockedRequestProtoMsg;
        };
        LockedResponse: {
            typeUrl: string;
            encode(message: _44.LockedResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _44.LockedResponse;
            fromPartial(object: Partial<_44.LockedResponse>): _44.LockedResponse;
            fromAmino(object: _44.LockedResponseAmino): _44.LockedResponse;
            toAmino(message: _44.LockedResponse): _44.LockedResponseAmino;
            fromAminoMsg(object: _44.LockedResponseAminoMsg): _44.LockedResponse;
            toAminoMsg(message: _44.LockedResponse): _44.LockedResponseAminoMsg;
            fromProtoMsg(message: _44.LockedResponseProtoMsg): _44.LockedResponse;
            toProto(message: _44.LockedResponse): Uint8Array;
            toProtoMsg(message: _44.LockedResponse): _44.LockedResponseProtoMsg;
        };
        LockRewardReceiverRequest: {
            typeUrl: string;
            encode(message: _44.LockRewardReceiverRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _44.LockRewardReceiverRequest;
            fromPartial(object: Partial<_44.LockRewardReceiverRequest>): _44.LockRewardReceiverRequest;
            fromAmino(object: _44.LockRewardReceiverRequestAmino): _44.LockRewardReceiverRequest;
            toAmino(message: _44.LockRewardReceiverRequest): _44.LockRewardReceiverRequestAmino;
            fromAminoMsg(object: _44.LockRewardReceiverRequestAminoMsg): _44.LockRewardReceiverRequest;
            toAminoMsg(message: _44.LockRewardReceiverRequest): _44.LockRewardReceiverRequestAminoMsg;
            fromProtoMsg(message: _44.LockRewardReceiverRequestProtoMsg): _44.LockRewardReceiverRequest;
            toProto(message: _44.LockRewardReceiverRequest): Uint8Array;
            toProtoMsg(message: _44.LockRewardReceiverRequest): _44.LockRewardReceiverRequestProtoMsg;
        };
        LockRewardReceiverResponse: {
            typeUrl: string;
            encode(message: _44.LockRewardReceiverResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _44.LockRewardReceiverResponse;
            fromPartial(object: Partial<_44.LockRewardReceiverResponse>): _44.LockRewardReceiverResponse;
            fromAmino(object: _44.LockRewardReceiverResponseAmino): _44.LockRewardReceiverResponse;
            toAmino(message: _44.LockRewardReceiverResponse): _44.LockRewardReceiverResponseAmino;
            fromAminoMsg(object: _44.LockRewardReceiverResponseAminoMsg): _44.LockRewardReceiverResponse;
            toAminoMsg(message: _44.LockRewardReceiverResponse): _44.LockRewardReceiverResponseAminoMsg;
            fromProtoMsg(message: _44.LockRewardReceiverResponseProtoMsg): _44.LockRewardReceiverResponse;
            toProto(message: _44.LockRewardReceiverResponse): Uint8Array;
            toProtoMsg(message: _44.LockRewardReceiverResponse): _44.LockRewardReceiverResponseProtoMsg;
        };
        NextLockIDRequest: {
            typeUrl: string;
            encode(_: _44.NextLockIDRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(_: any): _44.NextLockIDRequest;
            fromPartial(_: Partial<_44.NextLockIDRequest>): _44.NextLockIDRequest;
            fromAmino(_: _44.NextLockIDRequestAmino): _44.NextLockIDRequest;
            toAmino(_: _44.NextLockIDRequest): _44.NextLockIDRequestAmino;
            fromAminoMsg(object: _44.NextLockIDRequestAminoMsg): _44.NextLockIDRequest;
            toAminoMsg(message: _44.NextLockIDRequest): _44.NextLockIDRequestAminoMsg;
            fromProtoMsg(message: _44.NextLockIDRequestProtoMsg): _44.NextLockIDRequest;
            toProto(message: _44.NextLockIDRequest): Uint8Array;
            toProtoMsg(message: _44.NextLockIDRequest): _44.NextLockIDRequestProtoMsg;
        };
        NextLockIDResponse: {
            typeUrl: string;
            encode(message: _44.NextLockIDResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _44.NextLockIDResponse;
            fromPartial(object: Partial<_44.NextLockIDResponse>): _44.NextLockIDResponse;
            fromAmino(object: _44.NextLockIDResponseAmino): _44.NextLockIDResponse;
            toAmino(message: _44.NextLockIDResponse): _44.NextLockIDResponseAmino;
            fromAminoMsg(object: _44.NextLockIDResponseAminoMsg): _44.NextLockIDResponse;
            toAminoMsg(message: _44.NextLockIDResponse): _44.NextLockIDResponseAminoMsg;
            fromProtoMsg(message: _44.NextLockIDResponseProtoMsg): _44.NextLockIDResponse;
            toProto(message: _44.NextLockIDResponse): Uint8Array;
            toProtoMsg(message: _44.NextLockIDResponse): _44.NextLockIDResponseProtoMsg;
        };
        SyntheticLockupsByLockupIDRequest: {
            typeUrl: string;
            encode(message: _44.SyntheticLockupsByLockupIDRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _44.SyntheticLockupsByLockupIDRequest;
            fromPartial(object: Partial<_44.SyntheticLockupsByLockupIDRequest>): _44.SyntheticLockupsByLockupIDRequest;
            fromAmino(object: _44.SyntheticLockupsByLockupIDRequestAmino): _44.SyntheticLockupsByLockupIDRequest;
            toAmino(message: _44.SyntheticLockupsByLockupIDRequest): _44.SyntheticLockupsByLockupIDRequestAmino;
            fromAminoMsg(object: _44.SyntheticLockupsByLockupIDRequestAminoMsg): _44.SyntheticLockupsByLockupIDRequest;
            toAminoMsg(message: _44.SyntheticLockupsByLockupIDRequest): _44.SyntheticLockupsByLockupIDRequestAminoMsg;
            fromProtoMsg(message: _44.SyntheticLockupsByLockupIDRequestProtoMsg): _44.SyntheticLockupsByLockupIDRequest;
            toProto(message: _44.SyntheticLockupsByLockupIDRequest): Uint8Array;
            toProtoMsg(message: _44.SyntheticLockupsByLockupIDRequest): _44.SyntheticLockupsByLockupIDRequestProtoMsg;
        };
        SyntheticLockupsByLockupIDResponse: {
            typeUrl: string;
            encode(message: _44.SyntheticLockupsByLockupIDResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _44.SyntheticLockupsByLockupIDResponse;
            fromPartial(object: Partial<_44.SyntheticLockupsByLockupIDResponse>): _44.SyntheticLockupsByLockupIDResponse;
            fromAmino(object: _44.SyntheticLockupsByLockupIDResponseAmino): _44.SyntheticLockupsByLockupIDResponse;
            toAmino(message: _44.SyntheticLockupsByLockupIDResponse): _44.SyntheticLockupsByLockupIDResponseAmino;
            fromAminoMsg(object: _44.SyntheticLockupsByLockupIDResponseAminoMsg): _44.SyntheticLockupsByLockupIDResponse;
            toAminoMsg(message: _44.SyntheticLockupsByLockupIDResponse): _44.SyntheticLockupsByLockupIDResponseAminoMsg;
            fromProtoMsg(message: _44.SyntheticLockupsByLockupIDResponseProtoMsg): _44.SyntheticLockupsByLockupIDResponse;
            toProto(message: _44.SyntheticLockupsByLockupIDResponse): Uint8Array;
            toProtoMsg(message: _44.SyntheticLockupsByLockupIDResponse): _44.SyntheticLockupsByLockupIDResponseProtoMsg;
        };
        SyntheticLockupByLockupIDRequest: {
            typeUrl: string;
            encode(message: _44.SyntheticLockupByLockupIDRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _44.SyntheticLockupByLockupIDRequest;
            fromPartial(object: Partial<_44.SyntheticLockupByLockupIDRequest>): _44.SyntheticLockupByLockupIDRequest;
            fromAmino(object: _44.SyntheticLockupByLockupIDRequestAmino): _44.SyntheticLockupByLockupIDRequest;
            toAmino(message: _44.SyntheticLockupByLockupIDRequest): _44.SyntheticLockupByLockupIDRequestAmino;
            fromAminoMsg(object: _44.SyntheticLockupByLockupIDRequestAminoMsg): _44.SyntheticLockupByLockupIDRequest;
            toAminoMsg(message: _44.SyntheticLockupByLockupIDRequest): _44.SyntheticLockupByLockupIDRequestAminoMsg;
            fromProtoMsg(message: _44.SyntheticLockupByLockupIDRequestProtoMsg): _44.SyntheticLockupByLockupIDRequest;
            toProto(message: _44.SyntheticLockupByLockupIDRequest): Uint8Array;
            toProtoMsg(message: _44.SyntheticLockupByLockupIDRequest): _44.SyntheticLockupByLockupIDRequestProtoMsg;
        };
        SyntheticLockupByLockupIDResponse: {
            typeUrl: string;
            encode(message: _44.SyntheticLockupByLockupIDResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _44.SyntheticLockupByLockupIDResponse;
            fromPartial(object: Partial<_44.SyntheticLockupByLockupIDResponse>): _44.SyntheticLockupByLockupIDResponse;
            fromAmino(object: _44.SyntheticLockupByLockupIDResponseAmino): _44.SyntheticLockupByLockupIDResponse;
            toAmino(message: _44.SyntheticLockupByLockupIDResponse): _44.SyntheticLockupByLockupIDResponseAmino;
            fromAminoMsg(object: _44.SyntheticLockupByLockupIDResponseAminoMsg): _44.SyntheticLockupByLockupIDResponse;
            toAminoMsg(message: _44.SyntheticLockupByLockupIDResponse): _44.SyntheticLockupByLockupIDResponseAminoMsg;
            fromProtoMsg(message: _44.SyntheticLockupByLockupIDResponseProtoMsg): _44.SyntheticLockupByLockupIDResponse;
            toProto(message: _44.SyntheticLockupByLockupIDResponse): Uint8Array;
            toProtoMsg(message: _44.SyntheticLockupByLockupIDResponse): _44.SyntheticLockupByLockupIDResponseProtoMsg;
        };
        AccountLockedLongerDurationRequest: {
            typeUrl: string;
            encode(message: _44.AccountLockedLongerDurationRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _44.AccountLockedLongerDurationRequest;
            fromPartial(object: Partial<_44.AccountLockedLongerDurationRequest>): _44.AccountLockedLongerDurationRequest;
            fromAmino(object: _44.AccountLockedLongerDurationRequestAmino): _44.AccountLockedLongerDurationRequest;
            toAmino(message: _44.AccountLockedLongerDurationRequest): _44.AccountLockedLongerDurationRequestAmino;
            fromAminoMsg(object: _44.AccountLockedLongerDurationRequestAminoMsg): _44.AccountLockedLongerDurationRequest;
            toAminoMsg(message: _44.AccountLockedLongerDurationRequest): _44.AccountLockedLongerDurationRequestAminoMsg;
            fromProtoMsg(message: _44.AccountLockedLongerDurationRequestProtoMsg): _44.AccountLockedLongerDurationRequest;
            toProto(message: _44.AccountLockedLongerDurationRequest): Uint8Array;
            toProtoMsg(message: _44.AccountLockedLongerDurationRequest): _44.AccountLockedLongerDurationRequestProtoMsg;
        };
        AccountLockedLongerDurationResponse: {
            typeUrl: string;
            encode(message: _44.AccountLockedLongerDurationResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _44.AccountLockedLongerDurationResponse;
            fromPartial(object: Partial<_44.AccountLockedLongerDurationResponse>): _44.AccountLockedLongerDurationResponse;
            fromAmino(object: _44.AccountLockedLongerDurationResponseAmino): _44.AccountLockedLongerDurationResponse;
            toAmino(message: _44.AccountLockedLongerDurationResponse): _44.AccountLockedLongerDurationResponseAmino;
            fromAminoMsg(object: _44.AccountLockedLongerDurationResponseAminoMsg): _44.AccountLockedLongerDurationResponse;
            toAminoMsg(message: _44.AccountLockedLongerDurationResponse): _44.AccountLockedLongerDurationResponseAminoMsg;
            fromProtoMsg(message: _44.AccountLockedLongerDurationResponseProtoMsg): _44.AccountLockedLongerDurationResponse;
            toProto(message: _44.AccountLockedLongerDurationResponse): Uint8Array;
            toProtoMsg(message: _44.AccountLockedLongerDurationResponse): _44.AccountLockedLongerDurationResponseProtoMsg;
        };
        AccountLockedDurationRequest: {
            typeUrl: string;
            encode(message: _44.AccountLockedDurationRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _44.AccountLockedDurationRequest;
            fromPartial(object: Partial<_44.AccountLockedDurationRequest>): _44.AccountLockedDurationRequest;
            fromAmino(object: _44.AccountLockedDurationRequestAmino): _44.AccountLockedDurationRequest;
            toAmino(message: _44.AccountLockedDurationRequest): _44.AccountLockedDurationRequestAmino;
            fromAminoMsg(object: _44.AccountLockedDurationRequestAminoMsg): _44.AccountLockedDurationRequest;
            toAminoMsg(message: _44.AccountLockedDurationRequest): _44.AccountLockedDurationRequestAminoMsg;
            fromProtoMsg(message: _44.AccountLockedDurationRequestProtoMsg): _44.AccountLockedDurationRequest;
            toProto(message: _44.AccountLockedDurationRequest): Uint8Array;
            toProtoMsg(message: _44.AccountLockedDurationRequest): _44.AccountLockedDurationRequestProtoMsg;
        };
        AccountLockedDurationResponse: {
            typeUrl: string;
            encode(message: _44.AccountLockedDurationResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _44.AccountLockedDurationResponse;
            fromPartial(object: Partial<_44.AccountLockedDurationResponse>): _44.AccountLockedDurationResponse;
            fromAmino(object: _44.AccountLockedDurationResponseAmino): _44.AccountLockedDurationResponse;
            toAmino(message: _44.AccountLockedDurationResponse): _44.AccountLockedDurationResponseAmino;
            fromAminoMsg(object: _44.AccountLockedDurationResponseAminoMsg): _44.AccountLockedDurationResponse;
            toAminoMsg(message: _44.AccountLockedDurationResponse): _44.AccountLockedDurationResponseAminoMsg;
            fromProtoMsg(message: _44.AccountLockedDurationResponseProtoMsg): _44.AccountLockedDurationResponse;
            toProto(message: _44.AccountLockedDurationResponse): Uint8Array;
            toProtoMsg(message: _44.AccountLockedDurationResponse): _44.AccountLockedDurationResponseProtoMsg;
        };
        AccountLockedLongerDurationNotUnlockingOnlyRequest: {
            typeUrl: string;
            encode(message: _44.AccountLockedLongerDurationNotUnlockingOnlyRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _44.AccountLockedLongerDurationNotUnlockingOnlyRequest;
            fromPartial(object: Partial<_44.AccountLockedLongerDurationNotUnlockingOnlyRequest>): _44.AccountLockedLongerDurationNotUnlockingOnlyRequest;
            fromAmino(object: _44.AccountLockedLongerDurationNotUnlockingOnlyRequestAmino): _44.AccountLockedLongerDurationNotUnlockingOnlyRequest;
            toAmino(message: _44.AccountLockedLongerDurationNotUnlockingOnlyRequest): _44.AccountLockedLongerDurationNotUnlockingOnlyRequestAmino;
            fromAminoMsg(object: _44.AccountLockedLongerDurationNotUnlockingOnlyRequestAminoMsg): _44.AccountLockedLongerDurationNotUnlockingOnlyRequest;
            toAminoMsg(message: _44.AccountLockedLongerDurationNotUnlockingOnlyRequest): _44.AccountLockedLongerDurationNotUnlockingOnlyRequestAminoMsg;
            fromProtoMsg(message: _44.AccountLockedLongerDurationNotUnlockingOnlyRequestProtoMsg): _44.AccountLockedLongerDurationNotUnlockingOnlyRequest;
            toProto(message: _44.AccountLockedLongerDurationNotUnlockingOnlyRequest): Uint8Array;
            toProtoMsg(message: _44.AccountLockedLongerDurationNotUnlockingOnlyRequest): _44.AccountLockedLongerDurationNotUnlockingOnlyRequestProtoMsg;
        };
        AccountLockedLongerDurationNotUnlockingOnlyResponse: {
            typeUrl: string;
            encode(message: _44.AccountLockedLongerDurationNotUnlockingOnlyResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _44.AccountLockedLongerDurationNotUnlockingOnlyResponse;
            fromPartial(object: Partial<_44.AccountLockedLongerDurationNotUnlockingOnlyResponse>): _44.AccountLockedLongerDurationNotUnlockingOnlyResponse;
            fromAmino(object: _44.AccountLockedLongerDurationNotUnlockingOnlyResponseAmino): _44.AccountLockedLongerDurationNotUnlockingOnlyResponse;
            toAmino(message: _44.AccountLockedLongerDurationNotUnlockingOnlyResponse): _44.AccountLockedLongerDurationNotUnlockingOnlyResponseAmino;
            fromAminoMsg(object: _44.AccountLockedLongerDurationNotUnlockingOnlyResponseAminoMsg): _44.AccountLockedLongerDurationNotUnlockingOnlyResponse;
            toAminoMsg(message: _44.AccountLockedLongerDurationNotUnlockingOnlyResponse): _44.AccountLockedLongerDurationNotUnlockingOnlyResponseAminoMsg;
            fromProtoMsg(message: _44.AccountLockedLongerDurationNotUnlockingOnlyResponseProtoMsg): _44.AccountLockedLongerDurationNotUnlockingOnlyResponse;
            toProto(message: _44.AccountLockedLongerDurationNotUnlockingOnlyResponse): Uint8Array;
            toProtoMsg(message: _44.AccountLockedLongerDurationNotUnlockingOnlyResponse): _44.AccountLockedLongerDurationNotUnlockingOnlyResponseProtoMsg;
        };
        AccountLockedLongerDurationDenomRequest: {
            typeUrl: string;
            encode(message: _44.AccountLockedLongerDurationDenomRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _44.AccountLockedLongerDurationDenomRequest;
            fromPartial(object: Partial<_44.AccountLockedLongerDurationDenomRequest>): _44.AccountLockedLongerDurationDenomRequest;
            fromAmino(object: _44.AccountLockedLongerDurationDenomRequestAmino): _44.AccountLockedLongerDurationDenomRequest;
            toAmino(message: _44.AccountLockedLongerDurationDenomRequest): _44.AccountLockedLongerDurationDenomRequestAmino;
            fromAminoMsg(object: _44.AccountLockedLongerDurationDenomRequestAminoMsg): _44.AccountLockedLongerDurationDenomRequest;
            toAminoMsg(message: _44.AccountLockedLongerDurationDenomRequest): _44.AccountLockedLongerDurationDenomRequestAminoMsg;
            fromProtoMsg(message: _44.AccountLockedLongerDurationDenomRequestProtoMsg): _44.AccountLockedLongerDurationDenomRequest;
            toProto(message: _44.AccountLockedLongerDurationDenomRequest): Uint8Array;
            toProtoMsg(message: _44.AccountLockedLongerDurationDenomRequest): _44.AccountLockedLongerDurationDenomRequestProtoMsg;
        };
        AccountLockedLongerDurationDenomResponse: {
            typeUrl: string;
            encode(message: _44.AccountLockedLongerDurationDenomResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _44.AccountLockedLongerDurationDenomResponse;
            fromPartial(object: Partial<_44.AccountLockedLongerDurationDenomResponse>): _44.AccountLockedLongerDurationDenomResponse;
            fromAmino(object: _44.AccountLockedLongerDurationDenomResponseAmino): _44.AccountLockedLongerDurationDenomResponse;
            toAmino(message: _44.AccountLockedLongerDurationDenomResponse): _44.AccountLockedLongerDurationDenomResponseAmino;
            fromAminoMsg(object: _44.AccountLockedLongerDurationDenomResponseAminoMsg): _44.AccountLockedLongerDurationDenomResponse;
            toAminoMsg(message: _44.AccountLockedLongerDurationDenomResponse): _44.AccountLockedLongerDurationDenomResponseAminoMsg;
            fromProtoMsg(message: _44.AccountLockedLongerDurationDenomResponseProtoMsg): _44.AccountLockedLongerDurationDenomResponse;
            toProto(message: _44.AccountLockedLongerDurationDenomResponse): Uint8Array;
            toProtoMsg(message: _44.AccountLockedLongerDurationDenomResponse): _44.AccountLockedLongerDurationDenomResponseProtoMsg;
        };
        QueryParamsRequest: {
            typeUrl: string;
            encode(_: _44.QueryParamsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(_: any): _44.QueryParamsRequest;
            fromPartial(_: Partial<_44.QueryParamsRequest>): _44.QueryParamsRequest;
            fromAmino(_: _44.QueryParamsRequestAmino): _44.QueryParamsRequest;
            toAmino(_: _44.QueryParamsRequest): _44.QueryParamsRequestAmino;
            fromAminoMsg(object: _44.QueryParamsRequestAminoMsg): _44.QueryParamsRequest;
            toAminoMsg(message: _44.QueryParamsRequest): _44.QueryParamsRequestAminoMsg;
            fromProtoMsg(message: _44.QueryParamsRequestProtoMsg): _44.QueryParamsRequest;
            toProto(message: _44.QueryParamsRequest): Uint8Array;
            toProtoMsg(message: _44.QueryParamsRequest): _44.QueryParamsRequestProtoMsg;
        };
        QueryParamsResponse: {
            typeUrl: string;
            encode(message: _44.QueryParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _44.QueryParamsResponse;
            fromPartial(object: Partial<_44.QueryParamsResponse>): _44.QueryParamsResponse;
            fromAmino(object: _44.QueryParamsResponseAmino): _44.QueryParamsResponse;
            toAmino(message: _44.QueryParamsResponse): _44.QueryParamsResponseAmino;
            fromAminoMsg(object: _44.QueryParamsResponseAminoMsg): _44.QueryParamsResponse;
            toAminoMsg(message: _44.QueryParamsResponse): _44.QueryParamsResponseAminoMsg;
            fromProtoMsg(message: _44.QueryParamsResponseProtoMsg): _44.QueryParamsResponse;
            toProto(message: _44.QueryParamsResponse): Uint8Array;
            toProtoMsg(message: _44.QueryParamsResponse): _44.QueryParamsResponseProtoMsg;
        };
        Params: {
            typeUrl: string;
            encode(message: _43.Params, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _43.Params;
            fromPartial(object: Partial<_43.Params>): _43.Params;
            fromAmino(object: _43.ParamsAmino): _43.Params;
            toAmino(message: _43.Params): _43.ParamsAmino;
            fromAminoMsg(object: _43.ParamsAminoMsg): _43.Params;
            toAminoMsg(message: _43.Params): _43.ParamsAminoMsg;
            fromProtoMsg(message: _43.ParamsProtoMsg): _43.Params;
            toProto(message: _43.Params): Uint8Array;
            toProtoMsg(message: _43.Params): _43.ParamsProtoMsg;
        };
        lockQueryTypeFromJSON(object: any): _42.LockQueryType;
        lockQueryTypeToJSON(object: _42.LockQueryType): string;
        LockQueryType: typeof _42.LockQueryType;
        LockQueryTypeSDKType: typeof _42.LockQueryType;
        LockQueryTypeAmino: typeof _42.LockQueryType;
        PeriodLock: {
            typeUrl: string;
            encode(message: _42.PeriodLock, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _42.PeriodLock;
            fromPartial(object: Partial<_42.PeriodLock>): _42.PeriodLock;
            fromAmino(object: _42.PeriodLockAmino): _42.PeriodLock;
            toAmino(message: _42.PeriodLock): _42.PeriodLockAmino;
            fromAminoMsg(object: _42.PeriodLockAminoMsg): _42.PeriodLock;
            toAminoMsg(message: _42.PeriodLock): _42.PeriodLockAminoMsg;
            fromProtoMsg(message: _42.PeriodLockProtoMsg): _42.PeriodLock;
            toProto(message: _42.PeriodLock): Uint8Array;
            toProtoMsg(message: _42.PeriodLock): _42.PeriodLockProtoMsg;
        };
        QueryCondition: {
            typeUrl: string;
            encode(message: _42.QueryCondition, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _42.QueryCondition;
            fromPartial(object: Partial<_42.QueryCondition>): _42.QueryCondition;
            fromAmino(object: _42.QueryConditionAmino): _42.QueryCondition;
            toAmino(message: _42.QueryCondition): _42.QueryConditionAmino;
            fromAminoMsg(object: _42.QueryConditionAminoMsg): _42.QueryCondition;
            toAminoMsg(message: _42.QueryCondition): _42.QueryConditionAminoMsg;
            fromProtoMsg(message: _42.QueryConditionProtoMsg): _42.QueryCondition;
            toProto(message: _42.QueryCondition): Uint8Array;
            toProtoMsg(message: _42.QueryCondition): _42.QueryConditionProtoMsg;
        };
        SyntheticLock: {
            typeUrl: string;
            encode(message: _42.SyntheticLock, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _42.SyntheticLock;
            fromPartial(object: Partial<_42.SyntheticLock>): _42.SyntheticLock;
            fromAmino(object: _42.SyntheticLockAmino): _42.SyntheticLock;
            toAmino(message: _42.SyntheticLock): _42.SyntheticLockAmino;
            fromAminoMsg(object: _42.SyntheticLockAminoMsg): _42.SyntheticLock;
            toAminoMsg(message: _42.SyntheticLock): _42.SyntheticLockAminoMsg;
            fromProtoMsg(message: _42.SyntheticLockProtoMsg): _42.SyntheticLock;
            toProto(message: _42.SyntheticLock): Uint8Array;
            toProtoMsg(message: _42.SyntheticLock): _42.SyntheticLockProtoMsg;
        };
        GenesisState: {
            typeUrl: string;
            encode(message: _41.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _41.GenesisState;
            fromPartial(object: Partial<_41.GenesisState>): _41.GenesisState;
            fromAmino(object: _41.GenesisStateAmino): _41.GenesisState;
            toAmino(message: _41.GenesisState): _41.GenesisStateAmino;
            fromAminoMsg(object: _41.GenesisStateAminoMsg): _41.GenesisState;
            toAminoMsg(message: _41.GenesisState): _41.GenesisStateAminoMsg;
            fromProtoMsg(message: _41.GenesisStateProtoMsg): _41.GenesisState;
            toProto(message: _41.GenesisState): Uint8Array;
            toProtoMsg(message: _41.GenesisState): _41.GenesisStateProtoMsg;
        };
    };
    namespace mint {
        const v1beta1: {
            QueryClientImpl: typeof _242.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                params(request?: _48.QueryParamsRequest): Promise<_48.QueryParamsResponse>;
                epochProvisions(request?: _48.QueryEpochProvisionsRequest): Promise<_48.QueryEpochProvisionsResponse>;
            };
            LCDQueryClient: typeof _224.LCDQueryClient;
            QueryParamsRequest: {
                typeUrl: string;
                encode(_: _48.QueryParamsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _48.QueryParamsRequest;
                fromPartial(_: Partial<_48.QueryParamsRequest>): _48.QueryParamsRequest;
                fromAmino(_: _48.QueryParamsRequestAmino): _48.QueryParamsRequest;
                toAmino(_: _48.QueryParamsRequest): _48.QueryParamsRequestAmino;
                fromAminoMsg(object: _48.QueryParamsRequestAminoMsg): _48.QueryParamsRequest;
                toAminoMsg(message: _48.QueryParamsRequest): _48.QueryParamsRequestAminoMsg;
                fromProtoMsg(message: _48.QueryParamsRequestProtoMsg): _48.QueryParamsRequest;
                toProto(message: _48.QueryParamsRequest): Uint8Array;
                toProtoMsg(message: _48.QueryParamsRequest): _48.QueryParamsRequestProtoMsg;
            };
            QueryParamsResponse: {
                typeUrl: string;
                encode(message: _48.QueryParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _48.QueryParamsResponse;
                fromPartial(object: Partial<_48.QueryParamsResponse>): _48.QueryParamsResponse;
                fromAmino(object: _48.QueryParamsResponseAmino): _48.QueryParamsResponse;
                toAmino(message: _48.QueryParamsResponse): _48.QueryParamsResponseAmino;
                fromAminoMsg(object: _48.QueryParamsResponseAminoMsg): _48.QueryParamsResponse;
                toAminoMsg(message: _48.QueryParamsResponse): _48.QueryParamsResponseAminoMsg;
                fromProtoMsg(message: _48.QueryParamsResponseProtoMsg): _48.QueryParamsResponse;
                toProto(message: _48.QueryParamsResponse): Uint8Array;
                toProtoMsg(message: _48.QueryParamsResponse): _48.QueryParamsResponseProtoMsg;
            };
            QueryEpochProvisionsRequest: {
                typeUrl: string;
                encode(_: _48.QueryEpochProvisionsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _48.QueryEpochProvisionsRequest;
                fromPartial(_: Partial<_48.QueryEpochProvisionsRequest>): _48.QueryEpochProvisionsRequest;
                fromAmino(_: _48.QueryEpochProvisionsRequestAmino): _48.QueryEpochProvisionsRequest;
                toAmino(_: _48.QueryEpochProvisionsRequest): _48.QueryEpochProvisionsRequestAmino;
                fromAminoMsg(object: _48.QueryEpochProvisionsRequestAminoMsg): _48.QueryEpochProvisionsRequest;
                toAminoMsg(message: _48.QueryEpochProvisionsRequest): _48.QueryEpochProvisionsRequestAminoMsg;
                fromProtoMsg(message: _48.QueryEpochProvisionsRequestProtoMsg): _48.QueryEpochProvisionsRequest;
                toProto(message: _48.QueryEpochProvisionsRequest): Uint8Array;
                toProtoMsg(message: _48.QueryEpochProvisionsRequest): _48.QueryEpochProvisionsRequestProtoMsg;
            };
            QueryEpochProvisionsResponse: {
                typeUrl: string;
                encode(message: _48.QueryEpochProvisionsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _48.QueryEpochProvisionsResponse;
                fromPartial(object: Partial<_48.QueryEpochProvisionsResponse>): _48.QueryEpochProvisionsResponse;
                fromAmino(object: _48.QueryEpochProvisionsResponseAmino): _48.QueryEpochProvisionsResponse;
                toAmino(message: _48.QueryEpochProvisionsResponse): _48.QueryEpochProvisionsResponseAmino;
                fromAminoMsg(object: _48.QueryEpochProvisionsResponseAminoMsg): _48.QueryEpochProvisionsResponse;
                toAminoMsg(message: _48.QueryEpochProvisionsResponse): _48.QueryEpochProvisionsResponseAminoMsg;
                fromProtoMsg(message: _48.QueryEpochProvisionsResponseProtoMsg): _48.QueryEpochProvisionsResponse;
                toProto(message: _48.QueryEpochProvisionsResponse): Uint8Array;
                toProtoMsg(message: _48.QueryEpochProvisionsResponse): _48.QueryEpochProvisionsResponseProtoMsg;
            };
            Minter: {
                typeUrl: string;
                encode(message: _47.Minter, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _47.Minter;
                fromPartial(object: Partial<_47.Minter>): _47.Minter;
                fromAmino(object: _47.MinterAmino): _47.Minter;
                toAmino(message: _47.Minter): _47.MinterAmino;
                fromAminoMsg(object: _47.MinterAminoMsg): _47.Minter;
                toAminoMsg(message: _47.Minter): _47.MinterAminoMsg;
                fromProtoMsg(message: _47.MinterProtoMsg): _47.Minter;
                toProto(message: _47.Minter): Uint8Array;
                toProtoMsg(message: _47.Minter): _47.MinterProtoMsg;
            };
            WeightedAddress: {
                typeUrl: string;
                encode(message: _47.WeightedAddress, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _47.WeightedAddress;
                fromPartial(object: Partial<_47.WeightedAddress>): _47.WeightedAddress;
                fromAmino(object: _47.WeightedAddressAmino): _47.WeightedAddress;
                toAmino(message: _47.WeightedAddress): _47.WeightedAddressAmino;
                fromAminoMsg(object: _47.WeightedAddressAminoMsg): _47.WeightedAddress;
                toAminoMsg(message: _47.WeightedAddress): _47.WeightedAddressAminoMsg;
                fromProtoMsg(message: _47.WeightedAddressProtoMsg): _47.WeightedAddress;
                toProto(message: _47.WeightedAddress): Uint8Array;
                toProtoMsg(message: _47.WeightedAddress): _47.WeightedAddressProtoMsg;
            };
            DistributionProportions: {
                typeUrl: string;
                encode(message: _47.DistributionProportions, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _47.DistributionProportions;
                fromPartial(object: Partial<_47.DistributionProportions>): _47.DistributionProportions;
                fromAmino(object: _47.DistributionProportionsAmino): _47.DistributionProportions;
                toAmino(message: _47.DistributionProportions): _47.DistributionProportionsAmino;
                fromAminoMsg(object: _47.DistributionProportionsAminoMsg): _47.DistributionProportions;
                toAminoMsg(message: _47.DistributionProportions): _47.DistributionProportionsAminoMsg;
                fromProtoMsg(message: _47.DistributionProportionsProtoMsg): _47.DistributionProportions;
                toProto(message: _47.DistributionProportions): Uint8Array;
                toProtoMsg(message: _47.DistributionProportions): _47.DistributionProportionsProtoMsg;
            };
            Params: {
                typeUrl: string;
                encode(message: _47.Params, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _47.Params;
                fromPartial(object: Partial<_47.Params>): _47.Params;
                fromAmino(object: _47.ParamsAmino): _47.Params;
                toAmino(message: _47.Params): _47.ParamsAmino;
                fromAminoMsg(object: _47.ParamsAminoMsg): _47.Params;
                toAminoMsg(message: _47.Params): _47.ParamsAminoMsg;
                fromProtoMsg(message: _47.ParamsProtoMsg): _47.Params;
                toProto(message: _47.Params): Uint8Array;
                toProtoMsg(message: _47.Params): _47.ParamsProtoMsg;
            };
            GenesisState: {
                typeUrl: string;
                encode(message: _46.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _46.GenesisState;
                fromPartial(object: Partial<_46.GenesisState>): _46.GenesisState;
                fromAmino(object: _46.GenesisStateAmino): _46.GenesisState;
                toAmino(message: _46.GenesisState): _46.GenesisStateAmino;
                fromAminoMsg(object: _46.GenesisStateAminoMsg): _46.GenesisState;
                toAminoMsg(message: _46.GenesisState): _46.GenesisStateAminoMsg;
                fromProtoMsg(message: _46.GenesisStateProtoMsg): _46.GenesisState;
                toProto(message: _46.GenesisState): Uint8Array;
                toProtoMsg(message: _46.GenesisState): _46.GenesisStateProtoMsg;
            };
        };
    }
    namespace poolincentives {
        const v1beta1: {
            QueryClientImpl: typeof _243.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                gaugeIds(request: _52.QueryGaugeIdsRequest): Promise<_52.QueryGaugeIdsResponse>;
                distrInfo(request?: _52.QueryDistrInfoRequest): Promise<_52.QueryDistrInfoResponse>;
                params(request?: _52.QueryParamsRequest): Promise<_52.QueryParamsResponse>;
                lockableDurations(request?: _52.QueryLockableDurationsRequest): Promise<_52.QueryLockableDurationsResponse>;
                incentivizedPools(request?: _52.QueryIncentivizedPoolsRequest): Promise<_52.QueryIncentivizedPoolsResponse>;
                externalIncentiveGauges(request?: _52.QueryExternalIncentiveGaugesRequest): Promise<_52.QueryExternalIncentiveGaugesResponse>;
            };
            LCDQueryClient: typeof _225.LCDQueryClient;
            MigrationRecords: {
                typeUrl: string;
                encode(message: _53.MigrationRecords, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _53.MigrationRecords;
                fromPartial(object: Partial<_53.MigrationRecords>): _53.MigrationRecords;
                fromAmino(object: _53.MigrationRecordsAmino): _53.MigrationRecords;
                toAmino(message: _53.MigrationRecords): _53.MigrationRecordsAmino;
                fromAminoMsg(object: _53.MigrationRecordsAminoMsg): _53.MigrationRecords;
                toAminoMsg(message: _53.MigrationRecords): _53.MigrationRecordsAminoMsg;
                fromProtoMsg(message: _53.MigrationRecordsProtoMsg): _53.MigrationRecords;
                toProto(message: _53.MigrationRecords): Uint8Array;
                toProtoMsg(message: _53.MigrationRecords): _53.MigrationRecordsProtoMsg;
            };
            BalancerToConcentratedPoolLink: {
                typeUrl: string;
                encode(message: _53.BalancerToConcentratedPoolLink, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _53.BalancerToConcentratedPoolLink;
                fromPartial(object: Partial<_53.BalancerToConcentratedPoolLink>): _53.BalancerToConcentratedPoolLink;
                fromAmino(object: _53.BalancerToConcentratedPoolLinkAmino): _53.BalancerToConcentratedPoolLink;
                toAmino(message: _53.BalancerToConcentratedPoolLink): _53.BalancerToConcentratedPoolLinkAmino;
                fromAminoMsg(object: _53.BalancerToConcentratedPoolLinkAminoMsg): _53.BalancerToConcentratedPoolLink;
                toAminoMsg(message: _53.BalancerToConcentratedPoolLink): _53.BalancerToConcentratedPoolLinkAminoMsg;
                fromProtoMsg(message: _53.BalancerToConcentratedPoolLinkProtoMsg): _53.BalancerToConcentratedPoolLink;
                toProto(message: _53.BalancerToConcentratedPoolLink): Uint8Array;
                toProtoMsg(message: _53.BalancerToConcentratedPoolLink): _53.BalancerToConcentratedPoolLinkProtoMsg;
            };
            QueryGaugeIdsRequest: {
                typeUrl: string;
                encode(message: _52.QueryGaugeIdsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _52.QueryGaugeIdsRequest;
                fromPartial(object: Partial<_52.QueryGaugeIdsRequest>): _52.QueryGaugeIdsRequest;
                fromAmino(object: _52.QueryGaugeIdsRequestAmino): _52.QueryGaugeIdsRequest;
                toAmino(message: _52.QueryGaugeIdsRequest): _52.QueryGaugeIdsRequestAmino;
                fromAminoMsg(object: _52.QueryGaugeIdsRequestAminoMsg): _52.QueryGaugeIdsRequest;
                toAminoMsg(message: _52.QueryGaugeIdsRequest): _52.QueryGaugeIdsRequestAminoMsg;
                fromProtoMsg(message: _52.QueryGaugeIdsRequestProtoMsg): _52.QueryGaugeIdsRequest;
                toProto(message: _52.QueryGaugeIdsRequest): Uint8Array;
                toProtoMsg(message: _52.QueryGaugeIdsRequest): _52.QueryGaugeIdsRequestProtoMsg;
            };
            QueryGaugeIdsResponse: {
                typeUrl: string;
                encode(message: _52.QueryGaugeIdsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _52.QueryGaugeIdsResponse;
                fromPartial(object: Partial<_52.QueryGaugeIdsResponse>): _52.QueryGaugeIdsResponse;
                fromAmino(object: _52.QueryGaugeIdsResponseAmino): _52.QueryGaugeIdsResponse;
                toAmino(message: _52.QueryGaugeIdsResponse): _52.QueryGaugeIdsResponseAmino;
                fromAminoMsg(object: _52.QueryGaugeIdsResponseAminoMsg): _52.QueryGaugeIdsResponse;
                toAminoMsg(message: _52.QueryGaugeIdsResponse): _52.QueryGaugeIdsResponseAminoMsg;
                fromProtoMsg(message: _52.QueryGaugeIdsResponseProtoMsg): _52.QueryGaugeIdsResponse;
                toProto(message: _52.QueryGaugeIdsResponse): Uint8Array;
                toProtoMsg(message: _52.QueryGaugeIdsResponse): _52.QueryGaugeIdsResponseProtoMsg;
            };
            QueryGaugeIdsResponse_GaugeIdWithDuration: {
                typeUrl: string;
                encode(message: _52.QueryGaugeIdsResponse_GaugeIdWithDuration, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _52.QueryGaugeIdsResponse_GaugeIdWithDuration;
                fromPartial(object: Partial<_52.QueryGaugeIdsResponse_GaugeIdWithDuration>): _52.QueryGaugeIdsResponse_GaugeIdWithDuration;
                fromAmino(object: _52.QueryGaugeIdsResponse_GaugeIdWithDurationAmino): _52.QueryGaugeIdsResponse_GaugeIdWithDuration;
                toAmino(message: _52.QueryGaugeIdsResponse_GaugeIdWithDuration): _52.QueryGaugeIdsResponse_GaugeIdWithDurationAmino;
                fromAminoMsg(object: _52.QueryGaugeIdsResponse_GaugeIdWithDurationAminoMsg): _52.QueryGaugeIdsResponse_GaugeIdWithDuration;
                toAminoMsg(message: _52.QueryGaugeIdsResponse_GaugeIdWithDuration): _52.QueryGaugeIdsResponse_GaugeIdWithDurationAminoMsg;
                fromProtoMsg(message: _52.QueryGaugeIdsResponse_GaugeIdWithDurationProtoMsg): _52.QueryGaugeIdsResponse_GaugeIdWithDuration;
                toProto(message: _52.QueryGaugeIdsResponse_GaugeIdWithDuration): Uint8Array;
                toProtoMsg(message: _52.QueryGaugeIdsResponse_GaugeIdWithDuration): _52.QueryGaugeIdsResponse_GaugeIdWithDurationProtoMsg;
            };
            QueryDistrInfoRequest: {
                typeUrl: string;
                encode(_: _52.QueryDistrInfoRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _52.QueryDistrInfoRequest;
                fromPartial(_: Partial<_52.QueryDistrInfoRequest>): _52.QueryDistrInfoRequest;
                fromAmino(_: _52.QueryDistrInfoRequestAmino): _52.QueryDistrInfoRequest;
                toAmino(_: _52.QueryDistrInfoRequest): _52.QueryDistrInfoRequestAmino;
                fromAminoMsg(object: _52.QueryDistrInfoRequestAminoMsg): _52.QueryDistrInfoRequest;
                toAminoMsg(message: _52.QueryDistrInfoRequest): _52.QueryDistrInfoRequestAminoMsg;
                fromProtoMsg(message: _52.QueryDistrInfoRequestProtoMsg): _52.QueryDistrInfoRequest;
                toProto(message: _52.QueryDistrInfoRequest): Uint8Array;
                toProtoMsg(message: _52.QueryDistrInfoRequest): _52.QueryDistrInfoRequestProtoMsg;
            };
            QueryDistrInfoResponse: {
                typeUrl: string;
                encode(message: _52.QueryDistrInfoResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _52.QueryDistrInfoResponse;
                fromPartial(object: Partial<_52.QueryDistrInfoResponse>): _52.QueryDistrInfoResponse;
                fromAmino(object: _52.QueryDistrInfoResponseAmino): _52.QueryDistrInfoResponse;
                toAmino(message: _52.QueryDistrInfoResponse): _52.QueryDistrInfoResponseAmino;
                fromAminoMsg(object: _52.QueryDistrInfoResponseAminoMsg): _52.QueryDistrInfoResponse;
                toAminoMsg(message: _52.QueryDistrInfoResponse): _52.QueryDistrInfoResponseAminoMsg;
                fromProtoMsg(message: _52.QueryDistrInfoResponseProtoMsg): _52.QueryDistrInfoResponse;
                toProto(message: _52.QueryDistrInfoResponse): Uint8Array;
                toProtoMsg(message: _52.QueryDistrInfoResponse): _52.QueryDistrInfoResponseProtoMsg;
            };
            QueryParamsRequest: {
                typeUrl: string;
                encode(_: _52.QueryParamsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _52.QueryParamsRequest;
                fromPartial(_: Partial<_52.QueryParamsRequest>): _52.QueryParamsRequest;
                fromAmino(_: _52.QueryParamsRequestAmino): _52.QueryParamsRequest;
                toAmino(_: _52.QueryParamsRequest): _52.QueryParamsRequestAmino;
                fromAminoMsg(object: _52.QueryParamsRequestAminoMsg): _52.QueryParamsRequest;
                toAminoMsg(message: _52.QueryParamsRequest): _52.QueryParamsRequestAminoMsg;
                fromProtoMsg(message: _52.QueryParamsRequestProtoMsg): _52.QueryParamsRequest;
                toProto(message: _52.QueryParamsRequest): Uint8Array;
                toProtoMsg(message: _52.QueryParamsRequest): _52.QueryParamsRequestProtoMsg;
            };
            QueryParamsResponse: {
                typeUrl: string;
                encode(message: _52.QueryParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _52.QueryParamsResponse;
                fromPartial(object: Partial<_52.QueryParamsResponse>): _52.QueryParamsResponse;
                fromAmino(object: _52.QueryParamsResponseAmino): _52.QueryParamsResponse;
                toAmino(message: _52.QueryParamsResponse): _52.QueryParamsResponseAmino;
                fromAminoMsg(object: _52.QueryParamsResponseAminoMsg): _52.QueryParamsResponse;
                toAminoMsg(message: _52.QueryParamsResponse): _52.QueryParamsResponseAminoMsg;
                fromProtoMsg(message: _52.QueryParamsResponseProtoMsg): _52.QueryParamsResponse;
                toProto(message: _52.QueryParamsResponse): Uint8Array;
                toProtoMsg(message: _52.QueryParamsResponse): _52.QueryParamsResponseProtoMsg;
            };
            QueryLockableDurationsRequest: {
                typeUrl: string;
                encode(_: _52.QueryLockableDurationsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _52.QueryLockableDurationsRequest;
                fromPartial(_: Partial<_52.QueryLockableDurationsRequest>): _52.QueryLockableDurationsRequest;
                fromAmino(_: _52.QueryLockableDurationsRequestAmino): _52.QueryLockableDurationsRequest;
                toAmino(_: _52.QueryLockableDurationsRequest): _52.QueryLockableDurationsRequestAmino;
                fromAminoMsg(object: _52.QueryLockableDurationsRequestAminoMsg): _52.QueryLockableDurationsRequest;
                toAminoMsg(message: _52.QueryLockableDurationsRequest): _52.QueryLockableDurationsRequestAminoMsg;
                fromProtoMsg(message: _52.QueryLockableDurationsRequestProtoMsg): _52.QueryLockableDurationsRequest;
                toProto(message: _52.QueryLockableDurationsRequest): Uint8Array;
                toProtoMsg(message: _52.QueryLockableDurationsRequest): _52.QueryLockableDurationsRequestProtoMsg;
            };
            QueryLockableDurationsResponse: {
                typeUrl: string;
                encode(message: _52.QueryLockableDurationsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _52.QueryLockableDurationsResponse;
                fromPartial(object: Partial<_52.QueryLockableDurationsResponse>): _52.QueryLockableDurationsResponse;
                fromAmino(object: _52.QueryLockableDurationsResponseAmino): _52.QueryLockableDurationsResponse;
                toAmino(message: _52.QueryLockableDurationsResponse): _52.QueryLockableDurationsResponseAmino;
                fromAminoMsg(object: _52.QueryLockableDurationsResponseAminoMsg): _52.QueryLockableDurationsResponse;
                toAminoMsg(message: _52.QueryLockableDurationsResponse): _52.QueryLockableDurationsResponseAminoMsg;
                fromProtoMsg(message: _52.QueryLockableDurationsResponseProtoMsg): _52.QueryLockableDurationsResponse;
                toProto(message: _52.QueryLockableDurationsResponse): Uint8Array;
                toProtoMsg(message: _52.QueryLockableDurationsResponse): _52.QueryLockableDurationsResponseProtoMsg;
            };
            QueryIncentivizedPoolsRequest: {
                typeUrl: string;
                encode(_: _52.QueryIncentivizedPoolsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _52.QueryIncentivizedPoolsRequest;
                fromPartial(_: Partial<_52.QueryIncentivizedPoolsRequest>): _52.QueryIncentivizedPoolsRequest;
                fromAmino(_: _52.QueryIncentivizedPoolsRequestAmino): _52.QueryIncentivizedPoolsRequest;
                toAmino(_: _52.QueryIncentivizedPoolsRequest): _52.QueryIncentivizedPoolsRequestAmino;
                fromAminoMsg(object: _52.QueryIncentivizedPoolsRequestAminoMsg): _52.QueryIncentivizedPoolsRequest;
                toAminoMsg(message: _52.QueryIncentivizedPoolsRequest): _52.QueryIncentivizedPoolsRequestAminoMsg;
                fromProtoMsg(message: _52.QueryIncentivizedPoolsRequestProtoMsg): _52.QueryIncentivizedPoolsRequest;
                toProto(message: _52.QueryIncentivizedPoolsRequest): Uint8Array;
                toProtoMsg(message: _52.QueryIncentivizedPoolsRequest): _52.QueryIncentivizedPoolsRequestProtoMsg;
            };
            IncentivizedPool: {
                typeUrl: string;
                encode(message: _52.IncentivizedPool, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _52.IncentivizedPool;
                fromPartial(object: Partial<_52.IncentivizedPool>): _52.IncentivizedPool;
                fromAmino(object: _52.IncentivizedPoolAmino): _52.IncentivizedPool;
                toAmino(message: _52.IncentivizedPool): _52.IncentivizedPoolAmino;
                fromAminoMsg(object: _52.IncentivizedPoolAminoMsg): _52.IncentivizedPool;
                toAminoMsg(message: _52.IncentivizedPool): _52.IncentivizedPoolAminoMsg;
                fromProtoMsg(message: _52.IncentivizedPoolProtoMsg): _52.IncentivizedPool;
                toProto(message: _52.IncentivizedPool): Uint8Array;
                toProtoMsg(message: _52.IncentivizedPool): _52.IncentivizedPoolProtoMsg;
            };
            QueryIncentivizedPoolsResponse: {
                typeUrl: string;
                encode(message: _52.QueryIncentivizedPoolsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _52.QueryIncentivizedPoolsResponse;
                fromPartial(object: Partial<_52.QueryIncentivizedPoolsResponse>): _52.QueryIncentivizedPoolsResponse;
                fromAmino(object: _52.QueryIncentivizedPoolsResponseAmino): _52.QueryIncentivizedPoolsResponse;
                toAmino(message: _52.QueryIncentivizedPoolsResponse): _52.QueryIncentivizedPoolsResponseAmino;
                fromAminoMsg(object: _52.QueryIncentivizedPoolsResponseAminoMsg): _52.QueryIncentivizedPoolsResponse;
                toAminoMsg(message: _52.QueryIncentivizedPoolsResponse): _52.QueryIncentivizedPoolsResponseAminoMsg;
                fromProtoMsg(message: _52.QueryIncentivizedPoolsResponseProtoMsg): _52.QueryIncentivizedPoolsResponse;
                toProto(message: _52.QueryIncentivizedPoolsResponse): Uint8Array;
                toProtoMsg(message: _52.QueryIncentivizedPoolsResponse): _52.QueryIncentivizedPoolsResponseProtoMsg;
            };
            QueryExternalIncentiveGaugesRequest: {
                typeUrl: string;
                encode(_: _52.QueryExternalIncentiveGaugesRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _52.QueryExternalIncentiveGaugesRequest;
                fromPartial(_: Partial<_52.QueryExternalIncentiveGaugesRequest>): _52.QueryExternalIncentiveGaugesRequest;
                fromAmino(_: _52.QueryExternalIncentiveGaugesRequestAmino): _52.QueryExternalIncentiveGaugesRequest;
                toAmino(_: _52.QueryExternalIncentiveGaugesRequest): _52.QueryExternalIncentiveGaugesRequestAmino;
                fromAminoMsg(object: _52.QueryExternalIncentiveGaugesRequestAminoMsg): _52.QueryExternalIncentiveGaugesRequest;
                toAminoMsg(message: _52.QueryExternalIncentiveGaugesRequest): _52.QueryExternalIncentiveGaugesRequestAminoMsg;
                fromProtoMsg(message: _52.QueryExternalIncentiveGaugesRequestProtoMsg): _52.QueryExternalIncentiveGaugesRequest;
                toProto(message: _52.QueryExternalIncentiveGaugesRequest): Uint8Array;
                toProtoMsg(message: _52.QueryExternalIncentiveGaugesRequest): _52.QueryExternalIncentiveGaugesRequestProtoMsg;
            };
            QueryExternalIncentiveGaugesResponse: {
                typeUrl: string;
                encode(message: _52.QueryExternalIncentiveGaugesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _52.QueryExternalIncentiveGaugesResponse;
                fromPartial(object: Partial<_52.QueryExternalIncentiveGaugesResponse>): _52.QueryExternalIncentiveGaugesResponse;
                fromAmino(object: _52.QueryExternalIncentiveGaugesResponseAmino): _52.QueryExternalIncentiveGaugesResponse;
                toAmino(message: _52.QueryExternalIncentiveGaugesResponse): _52.QueryExternalIncentiveGaugesResponseAmino;
                fromAminoMsg(object: _52.QueryExternalIncentiveGaugesResponseAminoMsg): _52.QueryExternalIncentiveGaugesResponse;
                toAminoMsg(message: _52.QueryExternalIncentiveGaugesResponse): _52.QueryExternalIncentiveGaugesResponseAminoMsg;
                fromProtoMsg(message: _52.QueryExternalIncentiveGaugesResponseProtoMsg): _52.QueryExternalIncentiveGaugesResponse;
                toProto(message: _52.QueryExternalIncentiveGaugesResponse): Uint8Array;
                toProtoMsg(message: _52.QueryExternalIncentiveGaugesResponse): _52.QueryExternalIncentiveGaugesResponseProtoMsg;
            };
            Params: {
                typeUrl: string;
                encode(message: _51.Params, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _51.Params;
                fromPartial(object: Partial<_51.Params>): _51.Params;
                fromAmino(object: _51.ParamsAmino): _51.Params;
                toAmino(message: _51.Params): _51.ParamsAmino;
                fromAminoMsg(object: _51.ParamsAminoMsg): _51.Params;
                toAminoMsg(message: _51.Params): _51.ParamsAminoMsg;
                fromProtoMsg(message: _51.ParamsProtoMsg): _51.Params;
                toProto(message: _51.Params): Uint8Array;
                toProtoMsg(message: _51.Params): _51.ParamsProtoMsg;
            };
            LockableDurationsInfo: {
                typeUrl: string;
                encode(message: _51.LockableDurationsInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _51.LockableDurationsInfo;
                fromPartial(object: Partial<_51.LockableDurationsInfo>): _51.LockableDurationsInfo;
                fromAmino(object: _51.LockableDurationsInfoAmino): _51.LockableDurationsInfo;
                toAmino(message: _51.LockableDurationsInfo): _51.LockableDurationsInfoAmino;
                fromAminoMsg(object: _51.LockableDurationsInfoAminoMsg): _51.LockableDurationsInfo;
                toAminoMsg(message: _51.LockableDurationsInfo): _51.LockableDurationsInfoAminoMsg;
                fromProtoMsg(message: _51.LockableDurationsInfoProtoMsg): _51.LockableDurationsInfo;
                toProto(message: _51.LockableDurationsInfo): Uint8Array;
                toProtoMsg(message: _51.LockableDurationsInfo): _51.LockableDurationsInfoProtoMsg;
            };
            DistrInfo: {
                typeUrl: string;
                encode(message: _51.DistrInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _51.DistrInfo;
                fromPartial(object: Partial<_51.DistrInfo>): _51.DistrInfo;
                fromAmino(object: _51.DistrInfoAmino): _51.DistrInfo;
                toAmino(message: _51.DistrInfo): _51.DistrInfoAmino;
                fromAminoMsg(object: _51.DistrInfoAminoMsg): _51.DistrInfo;
                toAminoMsg(message: _51.DistrInfo): _51.DistrInfoAminoMsg;
                fromProtoMsg(message: _51.DistrInfoProtoMsg): _51.DistrInfo;
                toProto(message: _51.DistrInfo): Uint8Array;
                toProtoMsg(message: _51.DistrInfo): _51.DistrInfoProtoMsg;
            };
            DistrRecord: {
                typeUrl: string;
                encode(message: _51.DistrRecord, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _51.DistrRecord;
                fromPartial(object: Partial<_51.DistrRecord>): _51.DistrRecord;
                fromAmino(object: _51.DistrRecordAmino): _51.DistrRecord;
                toAmino(message: _51.DistrRecord): _51.DistrRecordAmino;
                fromAminoMsg(object: _51.DistrRecordAminoMsg): _51.DistrRecord;
                toAminoMsg(message: _51.DistrRecord): _51.DistrRecordAminoMsg;
                fromProtoMsg(message: _51.DistrRecordProtoMsg): _51.DistrRecord;
                toProto(message: _51.DistrRecord): Uint8Array;
                toProtoMsg(message: _51.DistrRecord): _51.DistrRecordProtoMsg;
            };
            PoolToGauge: {
                typeUrl: string;
                encode(message: _51.PoolToGauge, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _51.PoolToGauge;
                fromPartial(object: Partial<_51.PoolToGauge>): _51.PoolToGauge;
                fromAmino(object: _51.PoolToGaugeAmino): _51.PoolToGauge;
                toAmino(message: _51.PoolToGauge): _51.PoolToGaugeAmino;
                fromAminoMsg(object: _51.PoolToGaugeAminoMsg): _51.PoolToGauge;
                toAminoMsg(message: _51.PoolToGauge): _51.PoolToGaugeAminoMsg;
                fromProtoMsg(message: _51.PoolToGaugeProtoMsg): _51.PoolToGauge;
                toProto(message: _51.PoolToGauge): Uint8Array;
                toProtoMsg(message: _51.PoolToGauge): _51.PoolToGaugeProtoMsg;
            };
            PoolToGauges: {
                typeUrl: string;
                encode(message: _51.PoolToGauges, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _51.PoolToGauges;
                fromPartial(object: Partial<_51.PoolToGauges>): _51.PoolToGauges;
                fromAmino(object: _51.PoolToGaugesAmino): _51.PoolToGauges;
                toAmino(message: _51.PoolToGauges): _51.PoolToGaugesAmino;
                fromAminoMsg(object: _51.PoolToGaugesAminoMsg): _51.PoolToGauges;
                toAminoMsg(message: _51.PoolToGauges): _51.PoolToGaugesAminoMsg;
                fromProtoMsg(message: _51.PoolToGaugesProtoMsg): _51.PoolToGauges;
                toProto(message: _51.PoolToGauges): Uint8Array;
                toProtoMsg(message: _51.PoolToGauges): _51.PoolToGaugesProtoMsg;
            };
            ReplacePoolIncentivesProposal: {
                typeUrl: string;
                encode(message: _50.ReplacePoolIncentivesProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _50.ReplacePoolIncentivesProposal;
                fromPartial(object: Partial<_50.ReplacePoolIncentivesProposal>): _50.ReplacePoolIncentivesProposal;
                fromAmino(object: _50.ReplacePoolIncentivesProposalAmino): _50.ReplacePoolIncentivesProposal;
                toAmino(message: _50.ReplacePoolIncentivesProposal): _50.ReplacePoolIncentivesProposalAmino;
                fromAminoMsg(object: _50.ReplacePoolIncentivesProposalAminoMsg): _50.ReplacePoolIncentivesProposal;
                toAminoMsg(message: _50.ReplacePoolIncentivesProposal): _50.ReplacePoolIncentivesProposalAminoMsg;
                fromProtoMsg(message: _50.ReplacePoolIncentivesProposalProtoMsg): _50.ReplacePoolIncentivesProposal;
                toProto(message: _50.ReplacePoolIncentivesProposal): Uint8Array;
                toProtoMsg(message: _50.ReplacePoolIncentivesProposal): _50.ReplacePoolIncentivesProposalProtoMsg;
            };
            UpdatePoolIncentivesProposal: {
                typeUrl: string;
                encode(message: _50.UpdatePoolIncentivesProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _50.UpdatePoolIncentivesProposal;
                fromPartial(object: Partial<_50.UpdatePoolIncentivesProposal>): _50.UpdatePoolIncentivesProposal;
                fromAmino(object: _50.UpdatePoolIncentivesProposalAmino): _50.UpdatePoolIncentivesProposal;
                toAmino(message: _50.UpdatePoolIncentivesProposal): _50.UpdatePoolIncentivesProposalAmino;
                fromAminoMsg(object: _50.UpdatePoolIncentivesProposalAminoMsg): _50.UpdatePoolIncentivesProposal;
                toAminoMsg(message: _50.UpdatePoolIncentivesProposal): _50.UpdatePoolIncentivesProposalAminoMsg;
                fromProtoMsg(message: _50.UpdatePoolIncentivesProposalProtoMsg): _50.UpdatePoolIncentivesProposal;
                toProto(message: _50.UpdatePoolIncentivesProposal): Uint8Array;
                toProtoMsg(message: _50.UpdatePoolIncentivesProposal): _50.UpdatePoolIncentivesProposalProtoMsg;
            };
            GenesisState: {
                typeUrl: string;
                encode(message: _49.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _49.GenesisState;
                fromPartial(object: Partial<_49.GenesisState>): _49.GenesisState;
                fromAmino(object: _49.GenesisStateAmino): _49.GenesisState;
                toAmino(message: _49.GenesisState): _49.GenesisStateAmino;
                fromAminoMsg(object: _49.GenesisStateAminoMsg): _49.GenesisState;
                toAminoMsg(message: _49.GenesisState): _49.GenesisStateAminoMsg;
                fromProtoMsg(message: _49.GenesisStateProtoMsg): _49.GenesisState;
                toProto(message: _49.GenesisState): Uint8Array;
                toProtoMsg(message: _49.GenesisState): _49.GenesisStateProtoMsg;
            };
        };
    }
    namespace poolmanager {
        const v1beta1: {
            MsgClientImpl: typeof _259.MsgClientImpl;
            QueryClientImpl: typeof _244.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                params(request?: _57.ParamsRequest): Promise<_57.ParamsResponse>;
                estimateSwapExactAmountIn(request: _57.EstimateSwapExactAmountInRequest): Promise<_57.EstimateSwapExactAmountInResponse>;
                estimateSwapExactAmountInWithPrimitiveTypes(request: _57.EstimateSwapExactAmountInWithPrimitiveTypesRequest): Promise<_57.EstimateSwapExactAmountInResponse>;
                estimateSinglePoolSwapExactAmountIn(request: _57.EstimateSinglePoolSwapExactAmountInRequest): Promise<_57.EstimateSwapExactAmountInResponse>;
                estimateSwapExactAmountOut(request: _57.EstimateSwapExactAmountOutRequest): Promise<_57.EstimateSwapExactAmountOutResponse>;
                estimateSwapExactAmountOutWithPrimitiveTypes(request: _57.EstimateSwapExactAmountOutWithPrimitiveTypesRequest): Promise<_57.EstimateSwapExactAmountOutResponse>;
                estimateSinglePoolSwapExactAmountOut(request: _57.EstimateSinglePoolSwapExactAmountOutRequest): Promise<_57.EstimateSwapExactAmountOutResponse>;
                numPools(request?: _57.NumPoolsRequest): Promise<_57.NumPoolsResponse>;
                pool(request: _57.PoolRequest): Promise<_57.PoolResponse>;
                allPools(request?: _57.AllPoolsRequest): Promise<_57.AllPoolsResponse>;
                spotPrice(request: _57.SpotPriceRequest): Promise<_57.SpotPriceResponse>;
                totalPoolLiquidity(request: _57.TotalPoolLiquidityRequest): Promise<_57.TotalPoolLiquidityResponse>;
                totalLiquidity(request?: _57.TotalLiquidityRequest): Promise<_57.TotalLiquidityResponse>;
            };
            LCDQueryClient: typeof _226.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    swapExactAmountIn(value: _59.MsgSwapExactAmountIn): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    swapExactAmountOut(value: _59.MsgSwapExactAmountOut): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    splitRouteSwapExactAmountIn(value: _59.MsgSplitRouteSwapExactAmountIn): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    splitRouteSwapExactAmountOut(value: _59.MsgSplitRouteSwapExactAmountOut): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    setDenomPairTakerFee(value: _59.MsgSetDenomPairTakerFee): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    swapExactAmountIn(value: _59.MsgSwapExactAmountIn): {
                        typeUrl: string;
                        value: _59.MsgSwapExactAmountIn;
                    };
                    swapExactAmountOut(value: _59.MsgSwapExactAmountOut): {
                        typeUrl: string;
                        value: _59.MsgSwapExactAmountOut;
                    };
                    splitRouteSwapExactAmountIn(value: _59.MsgSplitRouteSwapExactAmountIn): {
                        typeUrl: string;
                        value: _59.MsgSplitRouteSwapExactAmountIn;
                    };
                    splitRouteSwapExactAmountOut(value: _59.MsgSplitRouteSwapExactAmountOut): {
                        typeUrl: string;
                        value: _59.MsgSplitRouteSwapExactAmountOut;
                    };
                    setDenomPairTakerFee(value: _59.MsgSetDenomPairTakerFee): {
                        typeUrl: string;
                        value: _59.MsgSetDenomPairTakerFee;
                    };
                };
                fromJSON: {
                    swapExactAmountIn(value: any): {
                        typeUrl: string;
                        value: _59.MsgSwapExactAmountIn;
                    };
                    swapExactAmountOut(value: any): {
                        typeUrl: string;
                        value: _59.MsgSwapExactAmountOut;
                    };
                    splitRouteSwapExactAmountIn(value: any): {
                        typeUrl: string;
                        value: _59.MsgSplitRouteSwapExactAmountIn;
                    };
                    splitRouteSwapExactAmountOut(value: any): {
                        typeUrl: string;
                        value: _59.MsgSplitRouteSwapExactAmountOut;
                    };
                    setDenomPairTakerFee(value: any): {
                        typeUrl: string;
                        value: _59.MsgSetDenomPairTakerFee;
                    };
                };
                fromPartial: {
                    swapExactAmountIn(value: _59.MsgSwapExactAmountIn): {
                        typeUrl: string;
                        value: _59.MsgSwapExactAmountIn;
                    };
                    swapExactAmountOut(value: _59.MsgSwapExactAmountOut): {
                        typeUrl: string;
                        value: _59.MsgSwapExactAmountOut;
                    };
                    splitRouteSwapExactAmountIn(value: _59.MsgSplitRouteSwapExactAmountIn): {
                        typeUrl: string;
                        value: _59.MsgSplitRouteSwapExactAmountIn;
                    };
                    splitRouteSwapExactAmountOut(value: _59.MsgSplitRouteSwapExactAmountOut): {
                        typeUrl: string;
                        value: _59.MsgSplitRouteSwapExactAmountOut;
                    };
                    setDenomPairTakerFee(value: _59.MsgSetDenomPairTakerFee): {
                        typeUrl: string;
                        value: _59.MsgSetDenomPairTakerFee;
                    };
                };
            };
            AminoConverter: {
                "/osmosis.poolmanager.v1beta1.MsgSwapExactAmountIn": {
                    aminoType: string;
                    toAmino: (message: _59.MsgSwapExactAmountIn) => _59.MsgSwapExactAmountInAmino;
                    fromAmino: (object: _59.MsgSwapExactAmountInAmino) => _59.MsgSwapExactAmountIn;
                };
                "/osmosis.poolmanager.v1beta1.MsgSwapExactAmountOut": {
                    aminoType: string;
                    toAmino: (message: _59.MsgSwapExactAmountOut) => _59.MsgSwapExactAmountOutAmino;
                    fromAmino: (object: _59.MsgSwapExactAmountOutAmino) => _59.MsgSwapExactAmountOut;
                };
                "/osmosis.poolmanager.v1beta1.MsgSplitRouteSwapExactAmountIn": {
                    aminoType: string;
                    toAmino: (message: _59.MsgSplitRouteSwapExactAmountIn) => _59.MsgSplitRouteSwapExactAmountInAmino;
                    fromAmino: (object: _59.MsgSplitRouteSwapExactAmountInAmino) => _59.MsgSplitRouteSwapExactAmountIn;
                };
                "/osmosis.poolmanager.v1beta1.MsgSplitRouteSwapExactAmountOut": {
                    aminoType: string;
                    toAmino: (message: _59.MsgSplitRouteSwapExactAmountOut) => _59.MsgSplitRouteSwapExactAmountOutAmino;
                    fromAmino: (object: _59.MsgSplitRouteSwapExactAmountOutAmino) => _59.MsgSplitRouteSwapExactAmountOut;
                };
                "/osmosis.poolmanager.v1beta1.MsgSetDenomPairTakerFee": {
                    aminoType: string;
                    toAmino: (message: _59.MsgSetDenomPairTakerFee) => _59.MsgSetDenomPairTakerFeeAmino;
                    fromAmino: (object: _59.MsgSetDenomPairTakerFeeAmino) => _59.MsgSetDenomPairTakerFee;
                };
            };
            MsgSwapExactAmountIn: {
                typeUrl: string;
                encode(message: _59.MsgSwapExactAmountIn, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _59.MsgSwapExactAmountIn;
                fromPartial(object: Partial<_59.MsgSwapExactAmountIn>): _59.MsgSwapExactAmountIn;
                fromAmino(object: _59.MsgSwapExactAmountInAmino): _59.MsgSwapExactAmountIn;
                toAmino(message: _59.MsgSwapExactAmountIn): _59.MsgSwapExactAmountInAmino;
                fromAminoMsg(object: _59.MsgSwapExactAmountInAminoMsg): _59.MsgSwapExactAmountIn;
                toAminoMsg(message: _59.MsgSwapExactAmountIn): _59.MsgSwapExactAmountInAminoMsg;
                fromProtoMsg(message: _59.MsgSwapExactAmountInProtoMsg): _59.MsgSwapExactAmountIn;
                toProto(message: _59.MsgSwapExactAmountIn): Uint8Array;
                toProtoMsg(message: _59.MsgSwapExactAmountIn): _59.MsgSwapExactAmountInProtoMsg;
            };
            MsgSwapExactAmountInResponse: {
                typeUrl: string;
                encode(message: _59.MsgSwapExactAmountInResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _59.MsgSwapExactAmountInResponse;
                fromPartial(object: Partial<_59.MsgSwapExactAmountInResponse>): _59.MsgSwapExactAmountInResponse;
                fromAmino(object: _59.MsgSwapExactAmountInResponseAmino): _59.MsgSwapExactAmountInResponse;
                toAmino(message: _59.MsgSwapExactAmountInResponse): _59.MsgSwapExactAmountInResponseAmino;
                fromAminoMsg(object: _59.MsgSwapExactAmountInResponseAminoMsg): _59.MsgSwapExactAmountInResponse;
                toAminoMsg(message: _59.MsgSwapExactAmountInResponse): _59.MsgSwapExactAmountInResponseAminoMsg;
                fromProtoMsg(message: _59.MsgSwapExactAmountInResponseProtoMsg): _59.MsgSwapExactAmountInResponse;
                toProto(message: _59.MsgSwapExactAmountInResponse): Uint8Array;
                toProtoMsg(message: _59.MsgSwapExactAmountInResponse): _59.MsgSwapExactAmountInResponseProtoMsg;
            };
            MsgSplitRouteSwapExactAmountIn: {
                typeUrl: string;
                encode(message: _59.MsgSplitRouteSwapExactAmountIn, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _59.MsgSplitRouteSwapExactAmountIn;
                fromPartial(object: Partial<_59.MsgSplitRouteSwapExactAmountIn>): _59.MsgSplitRouteSwapExactAmountIn;
                fromAmino(object: _59.MsgSplitRouteSwapExactAmountInAmino): _59.MsgSplitRouteSwapExactAmountIn;
                toAmino(message: _59.MsgSplitRouteSwapExactAmountIn): _59.MsgSplitRouteSwapExactAmountInAmino;
                fromAminoMsg(object: _59.MsgSplitRouteSwapExactAmountInAminoMsg): _59.MsgSplitRouteSwapExactAmountIn;
                toAminoMsg(message: _59.MsgSplitRouteSwapExactAmountIn): _59.MsgSplitRouteSwapExactAmountInAminoMsg;
                fromProtoMsg(message: _59.MsgSplitRouteSwapExactAmountInProtoMsg): _59.MsgSplitRouteSwapExactAmountIn;
                toProto(message: _59.MsgSplitRouteSwapExactAmountIn): Uint8Array;
                toProtoMsg(message: _59.MsgSplitRouteSwapExactAmountIn): _59.MsgSplitRouteSwapExactAmountInProtoMsg;
            };
            MsgSplitRouteSwapExactAmountInResponse: {
                typeUrl: string;
                encode(message: _59.MsgSplitRouteSwapExactAmountInResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _59.MsgSplitRouteSwapExactAmountInResponse;
                fromPartial(object: Partial<_59.MsgSplitRouteSwapExactAmountInResponse>): _59.MsgSplitRouteSwapExactAmountInResponse;
                fromAmino(object: _59.MsgSplitRouteSwapExactAmountInResponseAmino): _59.MsgSplitRouteSwapExactAmountInResponse;
                toAmino(message: _59.MsgSplitRouteSwapExactAmountInResponse): _59.MsgSplitRouteSwapExactAmountInResponseAmino;
                fromAminoMsg(object: _59.MsgSplitRouteSwapExactAmountInResponseAminoMsg): _59.MsgSplitRouteSwapExactAmountInResponse;
                toAminoMsg(message: _59.MsgSplitRouteSwapExactAmountInResponse): _59.MsgSplitRouteSwapExactAmountInResponseAminoMsg;
                fromProtoMsg(message: _59.MsgSplitRouteSwapExactAmountInResponseProtoMsg): _59.MsgSplitRouteSwapExactAmountInResponse;
                toProto(message: _59.MsgSplitRouteSwapExactAmountInResponse): Uint8Array;
                toProtoMsg(message: _59.MsgSplitRouteSwapExactAmountInResponse): _59.MsgSplitRouteSwapExactAmountInResponseProtoMsg;
            };
            MsgSwapExactAmountOut: {
                typeUrl: string;
                encode(message: _59.MsgSwapExactAmountOut, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _59.MsgSwapExactAmountOut;
                fromPartial(object: Partial<_59.MsgSwapExactAmountOut>): _59.MsgSwapExactAmountOut;
                fromAmino(object: _59.MsgSwapExactAmountOutAmino): _59.MsgSwapExactAmountOut;
                toAmino(message: _59.MsgSwapExactAmountOut): _59.MsgSwapExactAmountOutAmino;
                fromAminoMsg(object: _59.MsgSwapExactAmountOutAminoMsg): _59.MsgSwapExactAmountOut;
                toAminoMsg(message: _59.MsgSwapExactAmountOut): _59.MsgSwapExactAmountOutAminoMsg;
                fromProtoMsg(message: _59.MsgSwapExactAmountOutProtoMsg): _59.MsgSwapExactAmountOut;
                toProto(message: _59.MsgSwapExactAmountOut): Uint8Array;
                toProtoMsg(message: _59.MsgSwapExactAmountOut): _59.MsgSwapExactAmountOutProtoMsg;
            };
            MsgSwapExactAmountOutResponse: {
                typeUrl: string;
                encode(message: _59.MsgSwapExactAmountOutResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _59.MsgSwapExactAmountOutResponse;
                fromPartial(object: Partial<_59.MsgSwapExactAmountOutResponse>): _59.MsgSwapExactAmountOutResponse;
                fromAmino(object: _59.MsgSwapExactAmountOutResponseAmino): _59.MsgSwapExactAmountOutResponse;
                toAmino(message: _59.MsgSwapExactAmountOutResponse): _59.MsgSwapExactAmountOutResponseAmino;
                fromAminoMsg(object: _59.MsgSwapExactAmountOutResponseAminoMsg): _59.MsgSwapExactAmountOutResponse;
                toAminoMsg(message: _59.MsgSwapExactAmountOutResponse): _59.MsgSwapExactAmountOutResponseAminoMsg;
                fromProtoMsg(message: _59.MsgSwapExactAmountOutResponseProtoMsg): _59.MsgSwapExactAmountOutResponse;
                toProto(message: _59.MsgSwapExactAmountOutResponse): Uint8Array;
                toProtoMsg(message: _59.MsgSwapExactAmountOutResponse): _59.MsgSwapExactAmountOutResponseProtoMsg;
            };
            MsgSplitRouteSwapExactAmountOut: {
                typeUrl: string;
                encode(message: _59.MsgSplitRouteSwapExactAmountOut, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _59.MsgSplitRouteSwapExactAmountOut;
                fromPartial(object: Partial<_59.MsgSplitRouteSwapExactAmountOut>): _59.MsgSplitRouteSwapExactAmountOut;
                fromAmino(object: _59.MsgSplitRouteSwapExactAmountOutAmino): _59.MsgSplitRouteSwapExactAmountOut;
                toAmino(message: _59.MsgSplitRouteSwapExactAmountOut): _59.MsgSplitRouteSwapExactAmountOutAmino;
                fromAminoMsg(object: _59.MsgSplitRouteSwapExactAmountOutAminoMsg): _59.MsgSplitRouteSwapExactAmountOut;
                toAminoMsg(message: _59.MsgSplitRouteSwapExactAmountOut): _59.MsgSplitRouteSwapExactAmountOutAminoMsg;
                fromProtoMsg(message: _59.MsgSplitRouteSwapExactAmountOutProtoMsg): _59.MsgSplitRouteSwapExactAmountOut;
                toProto(message: _59.MsgSplitRouteSwapExactAmountOut): Uint8Array;
                toProtoMsg(message: _59.MsgSplitRouteSwapExactAmountOut): _59.MsgSplitRouteSwapExactAmountOutProtoMsg;
            };
            MsgSplitRouteSwapExactAmountOutResponse: {
                typeUrl: string;
                encode(message: _59.MsgSplitRouteSwapExactAmountOutResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _59.MsgSplitRouteSwapExactAmountOutResponse;
                fromPartial(object: Partial<_59.MsgSplitRouteSwapExactAmountOutResponse>): _59.MsgSplitRouteSwapExactAmountOutResponse;
                fromAmino(object: _59.MsgSplitRouteSwapExactAmountOutResponseAmino): _59.MsgSplitRouteSwapExactAmountOutResponse;
                toAmino(message: _59.MsgSplitRouteSwapExactAmountOutResponse): _59.MsgSplitRouteSwapExactAmountOutResponseAmino;
                fromAminoMsg(object: _59.MsgSplitRouteSwapExactAmountOutResponseAminoMsg): _59.MsgSplitRouteSwapExactAmountOutResponse;
                toAminoMsg(message: _59.MsgSplitRouteSwapExactAmountOutResponse): _59.MsgSplitRouteSwapExactAmountOutResponseAminoMsg;
                fromProtoMsg(message: _59.MsgSplitRouteSwapExactAmountOutResponseProtoMsg): _59.MsgSplitRouteSwapExactAmountOutResponse;
                toProto(message: _59.MsgSplitRouteSwapExactAmountOutResponse): Uint8Array;
                toProtoMsg(message: _59.MsgSplitRouteSwapExactAmountOutResponse): _59.MsgSplitRouteSwapExactAmountOutResponseProtoMsg;
            };
            MsgSetDenomPairTakerFee: {
                typeUrl: string;
                encode(message: _59.MsgSetDenomPairTakerFee, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _59.MsgSetDenomPairTakerFee;
                fromPartial(object: Partial<_59.MsgSetDenomPairTakerFee>): _59.MsgSetDenomPairTakerFee;
                fromAmino(object: _59.MsgSetDenomPairTakerFeeAmino): _59.MsgSetDenomPairTakerFee;
                toAmino(message: _59.MsgSetDenomPairTakerFee): _59.MsgSetDenomPairTakerFeeAmino;
                fromAminoMsg(object: _59.MsgSetDenomPairTakerFeeAminoMsg): _59.MsgSetDenomPairTakerFee;
                toAminoMsg(message: _59.MsgSetDenomPairTakerFee): _59.MsgSetDenomPairTakerFeeAminoMsg;
                fromProtoMsg(message: _59.MsgSetDenomPairTakerFeeProtoMsg): _59.MsgSetDenomPairTakerFee;
                toProto(message: _59.MsgSetDenomPairTakerFee): Uint8Array;
                toProtoMsg(message: _59.MsgSetDenomPairTakerFee): _59.MsgSetDenomPairTakerFeeProtoMsg;
            };
            MsgSetDenomPairTakerFeeResponse: {
                typeUrl: string;
                encode(message: _59.MsgSetDenomPairTakerFeeResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _59.MsgSetDenomPairTakerFeeResponse;
                fromPartial(object: Partial<_59.MsgSetDenomPairTakerFeeResponse>): _59.MsgSetDenomPairTakerFeeResponse;
                fromAmino(object: _59.MsgSetDenomPairTakerFeeResponseAmino): _59.MsgSetDenomPairTakerFeeResponse;
                toAmino(message: _59.MsgSetDenomPairTakerFeeResponse): _59.MsgSetDenomPairTakerFeeResponseAmino;
                fromAminoMsg(object: _59.MsgSetDenomPairTakerFeeResponseAminoMsg): _59.MsgSetDenomPairTakerFeeResponse;
                toAminoMsg(message: _59.MsgSetDenomPairTakerFeeResponse): _59.MsgSetDenomPairTakerFeeResponseAminoMsg;
                fromProtoMsg(message: _59.MsgSetDenomPairTakerFeeResponseProtoMsg): _59.MsgSetDenomPairTakerFeeResponse;
                toProto(message: _59.MsgSetDenomPairTakerFeeResponse): Uint8Array;
                toProtoMsg(message: _59.MsgSetDenomPairTakerFeeResponse): _59.MsgSetDenomPairTakerFeeResponseProtoMsg;
            };
            DenomPairTakerFee: {
                typeUrl: string;
                encode(message: _59.DenomPairTakerFee, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _59.DenomPairTakerFee;
                fromPartial(object: Partial<_59.DenomPairTakerFee>): _59.DenomPairTakerFee;
                fromAmino(object: _59.DenomPairTakerFeeAmino): _59.DenomPairTakerFee;
                toAmino(message: _59.DenomPairTakerFee): _59.DenomPairTakerFeeAmino;
                fromAminoMsg(object: _59.DenomPairTakerFeeAminoMsg): _59.DenomPairTakerFee;
                toAminoMsg(message: _59.DenomPairTakerFee): _59.DenomPairTakerFeeAminoMsg;
                fromProtoMsg(message: _59.DenomPairTakerFeeProtoMsg): _59.DenomPairTakerFee;
                toProto(message: _59.DenomPairTakerFee): Uint8Array;
                toProtoMsg(message: _59.DenomPairTakerFee): _59.DenomPairTakerFeeProtoMsg;
            };
            SwapAmountInRoute: {
                typeUrl: string;
                encode(message: _58.SwapAmountInRoute, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _58.SwapAmountInRoute;
                fromPartial(object: Partial<_58.SwapAmountInRoute>): _58.SwapAmountInRoute;
                fromAmino(object: _58.SwapAmountInRouteAmino): _58.SwapAmountInRoute;
                toAmino(message: _58.SwapAmountInRoute): _58.SwapAmountInRouteAmino;
                fromAminoMsg(object: _58.SwapAmountInRouteAminoMsg): _58.SwapAmountInRoute;
                toAminoMsg(message: _58.SwapAmountInRoute): _58.SwapAmountInRouteAminoMsg;
                fromProtoMsg(message: _58.SwapAmountInRouteProtoMsg): _58.SwapAmountInRoute;
                toProto(message: _58.SwapAmountInRoute): Uint8Array;
                toProtoMsg(message: _58.SwapAmountInRoute): _58.SwapAmountInRouteProtoMsg;
            };
            SwapAmountOutRoute: {
                typeUrl: string;
                encode(message: _58.SwapAmountOutRoute, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _58.SwapAmountOutRoute;
                fromPartial(object: Partial<_58.SwapAmountOutRoute>): _58.SwapAmountOutRoute;
                fromAmino(object: _58.SwapAmountOutRouteAmino): _58.SwapAmountOutRoute;
                toAmino(message: _58.SwapAmountOutRoute): _58.SwapAmountOutRouteAmino;
                fromAminoMsg(object: _58.SwapAmountOutRouteAminoMsg): _58.SwapAmountOutRoute;
                toAminoMsg(message: _58.SwapAmountOutRoute): _58.SwapAmountOutRouteAminoMsg;
                fromProtoMsg(message: _58.SwapAmountOutRouteProtoMsg): _58.SwapAmountOutRoute;
                toProto(message: _58.SwapAmountOutRoute): Uint8Array;
                toProtoMsg(message: _58.SwapAmountOutRoute): _58.SwapAmountOutRouteProtoMsg;
            };
            SwapAmountInSplitRoute: {
                typeUrl: string;
                encode(message: _58.SwapAmountInSplitRoute, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _58.SwapAmountInSplitRoute;
                fromPartial(object: Partial<_58.SwapAmountInSplitRoute>): _58.SwapAmountInSplitRoute;
                fromAmino(object: _58.SwapAmountInSplitRouteAmino): _58.SwapAmountInSplitRoute;
                toAmino(message: _58.SwapAmountInSplitRoute): _58.SwapAmountInSplitRouteAmino;
                fromAminoMsg(object: _58.SwapAmountInSplitRouteAminoMsg): _58.SwapAmountInSplitRoute;
                toAminoMsg(message: _58.SwapAmountInSplitRoute): _58.SwapAmountInSplitRouteAminoMsg;
                fromProtoMsg(message: _58.SwapAmountInSplitRouteProtoMsg): _58.SwapAmountInSplitRoute;
                toProto(message: _58.SwapAmountInSplitRoute): Uint8Array;
                toProtoMsg(message: _58.SwapAmountInSplitRoute): _58.SwapAmountInSplitRouteProtoMsg;
            };
            SwapAmountOutSplitRoute: {
                typeUrl: string;
                encode(message: _58.SwapAmountOutSplitRoute, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _58.SwapAmountOutSplitRoute;
                fromPartial(object: Partial<_58.SwapAmountOutSplitRoute>): _58.SwapAmountOutSplitRoute;
                fromAmino(object: _58.SwapAmountOutSplitRouteAmino): _58.SwapAmountOutSplitRoute;
                toAmino(message: _58.SwapAmountOutSplitRoute): _58.SwapAmountOutSplitRouteAmino;
                fromAminoMsg(object: _58.SwapAmountOutSplitRouteAminoMsg): _58.SwapAmountOutSplitRoute;
                toAminoMsg(message: _58.SwapAmountOutSplitRoute): _58.SwapAmountOutSplitRouteAminoMsg;
                fromProtoMsg(message: _58.SwapAmountOutSplitRouteProtoMsg): _58.SwapAmountOutSplitRoute;
                toProto(message: _58.SwapAmountOutSplitRoute): Uint8Array;
                toProtoMsg(message: _58.SwapAmountOutSplitRoute): _58.SwapAmountOutSplitRouteProtoMsg;
            };
            ParamsRequest: {
                typeUrl: string;
                encode(_: _57.ParamsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _57.ParamsRequest;
                fromPartial(_: Partial<_57.ParamsRequest>): _57.ParamsRequest;
                fromAmino(_: _57.ParamsRequestAmino): _57.ParamsRequest;
                toAmino(_: _57.ParamsRequest): _57.ParamsRequestAmino;
                fromAminoMsg(object: _57.ParamsRequestAminoMsg): _57.ParamsRequest;
                toAminoMsg(message: _57.ParamsRequest): _57.ParamsRequestAminoMsg;
                fromProtoMsg(message: _57.ParamsRequestProtoMsg): _57.ParamsRequest;
                toProto(message: _57.ParamsRequest): Uint8Array;
                toProtoMsg(message: _57.ParamsRequest): _57.ParamsRequestProtoMsg;
            };
            ParamsResponse: {
                typeUrl: string;
                encode(message: _57.ParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _57.ParamsResponse;
                fromPartial(object: Partial<_57.ParamsResponse>): _57.ParamsResponse;
                fromAmino(object: _57.ParamsResponseAmino): _57.ParamsResponse;
                toAmino(message: _57.ParamsResponse): _57.ParamsResponseAmino;
                fromAminoMsg(object: _57.ParamsResponseAminoMsg): _57.ParamsResponse;
                toAminoMsg(message: _57.ParamsResponse): _57.ParamsResponseAminoMsg;
                fromProtoMsg(message: _57.ParamsResponseProtoMsg): _57.ParamsResponse;
                toProto(message: _57.ParamsResponse): Uint8Array;
                toProtoMsg(message: _57.ParamsResponse): _57.ParamsResponseProtoMsg;
            };
            EstimateSwapExactAmountInRequest: {
                typeUrl: string;
                encode(message: _57.EstimateSwapExactAmountInRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _57.EstimateSwapExactAmountInRequest;
                fromPartial(object: Partial<_57.EstimateSwapExactAmountInRequest>): _57.EstimateSwapExactAmountInRequest;
                fromAmino(object: _57.EstimateSwapExactAmountInRequestAmino): _57.EstimateSwapExactAmountInRequest;
                toAmino(message: _57.EstimateSwapExactAmountInRequest): _57.EstimateSwapExactAmountInRequestAmino;
                fromAminoMsg(object: _57.EstimateSwapExactAmountInRequestAminoMsg): _57.EstimateSwapExactAmountInRequest;
                toAminoMsg(message: _57.EstimateSwapExactAmountInRequest): _57.EstimateSwapExactAmountInRequestAminoMsg;
                fromProtoMsg(message: _57.EstimateSwapExactAmountInRequestProtoMsg): _57.EstimateSwapExactAmountInRequest;
                toProto(message: _57.EstimateSwapExactAmountInRequest): Uint8Array;
                toProtoMsg(message: _57.EstimateSwapExactAmountInRequest): _57.EstimateSwapExactAmountInRequestProtoMsg;
            };
            EstimateSwapExactAmountInWithPrimitiveTypesRequest: {
                typeUrl: string;
                encode(message: _57.EstimateSwapExactAmountInWithPrimitiveTypesRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _57.EstimateSwapExactAmountInWithPrimitiveTypesRequest;
                fromPartial(object: Partial<_57.EstimateSwapExactAmountInWithPrimitiveTypesRequest>): _57.EstimateSwapExactAmountInWithPrimitiveTypesRequest;
                fromAmino(object: _57.EstimateSwapExactAmountInWithPrimitiveTypesRequestAmino): _57.EstimateSwapExactAmountInWithPrimitiveTypesRequest;
                toAmino(message: _57.EstimateSwapExactAmountInWithPrimitiveTypesRequest): _57.EstimateSwapExactAmountInWithPrimitiveTypesRequestAmino;
                fromAminoMsg(object: _57.EstimateSwapExactAmountInWithPrimitiveTypesRequestAminoMsg): _57.EstimateSwapExactAmountInWithPrimitiveTypesRequest;
                toAminoMsg(message: _57.EstimateSwapExactAmountInWithPrimitiveTypesRequest): _57.EstimateSwapExactAmountInWithPrimitiveTypesRequestAminoMsg;
                fromProtoMsg(message: _57.EstimateSwapExactAmountInWithPrimitiveTypesRequestProtoMsg): _57.EstimateSwapExactAmountInWithPrimitiveTypesRequest;
                toProto(message: _57.EstimateSwapExactAmountInWithPrimitiveTypesRequest): Uint8Array;
                toProtoMsg(message: _57.EstimateSwapExactAmountInWithPrimitiveTypesRequest): _57.EstimateSwapExactAmountInWithPrimitiveTypesRequestProtoMsg;
            };
            EstimateSinglePoolSwapExactAmountInRequest: {
                typeUrl: string;
                encode(message: _57.EstimateSinglePoolSwapExactAmountInRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _57.EstimateSinglePoolSwapExactAmountInRequest;
                fromPartial(object: Partial<_57.EstimateSinglePoolSwapExactAmountInRequest>): _57.EstimateSinglePoolSwapExactAmountInRequest;
                fromAmino(object: _57.EstimateSinglePoolSwapExactAmountInRequestAmino): _57.EstimateSinglePoolSwapExactAmountInRequest;
                toAmino(message: _57.EstimateSinglePoolSwapExactAmountInRequest): _57.EstimateSinglePoolSwapExactAmountInRequestAmino;
                fromAminoMsg(object: _57.EstimateSinglePoolSwapExactAmountInRequestAminoMsg): _57.EstimateSinglePoolSwapExactAmountInRequest;
                toAminoMsg(message: _57.EstimateSinglePoolSwapExactAmountInRequest): _57.EstimateSinglePoolSwapExactAmountInRequestAminoMsg;
                fromProtoMsg(message: _57.EstimateSinglePoolSwapExactAmountInRequestProtoMsg): _57.EstimateSinglePoolSwapExactAmountInRequest;
                toProto(message: _57.EstimateSinglePoolSwapExactAmountInRequest): Uint8Array;
                toProtoMsg(message: _57.EstimateSinglePoolSwapExactAmountInRequest): _57.EstimateSinglePoolSwapExactAmountInRequestProtoMsg;
            };
            EstimateSwapExactAmountInResponse: {
                typeUrl: string;
                encode(message: _57.EstimateSwapExactAmountInResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _57.EstimateSwapExactAmountInResponse;
                fromPartial(object: Partial<_57.EstimateSwapExactAmountInResponse>): _57.EstimateSwapExactAmountInResponse;
                fromAmino(object: _57.EstimateSwapExactAmountInResponseAmino): _57.EstimateSwapExactAmountInResponse;
                toAmino(message: _57.EstimateSwapExactAmountInResponse): _57.EstimateSwapExactAmountInResponseAmino;
                fromAminoMsg(object: _57.EstimateSwapExactAmountInResponseAminoMsg): _57.EstimateSwapExactAmountInResponse;
                toAminoMsg(message: _57.EstimateSwapExactAmountInResponse): _57.EstimateSwapExactAmountInResponseAminoMsg;
                fromProtoMsg(message: _57.EstimateSwapExactAmountInResponseProtoMsg): _57.EstimateSwapExactAmountInResponse;
                toProto(message: _57.EstimateSwapExactAmountInResponse): Uint8Array;
                toProtoMsg(message: _57.EstimateSwapExactAmountInResponse): _57.EstimateSwapExactAmountInResponseProtoMsg;
            };
            EstimateSwapExactAmountOutRequest: {
                typeUrl: string;
                encode(message: _57.EstimateSwapExactAmountOutRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _57.EstimateSwapExactAmountOutRequest;
                fromPartial(object: Partial<_57.EstimateSwapExactAmountOutRequest>): _57.EstimateSwapExactAmountOutRequest;
                fromAmino(object: _57.EstimateSwapExactAmountOutRequestAmino): _57.EstimateSwapExactAmountOutRequest;
                toAmino(message: _57.EstimateSwapExactAmountOutRequest): _57.EstimateSwapExactAmountOutRequestAmino;
                fromAminoMsg(object: _57.EstimateSwapExactAmountOutRequestAminoMsg): _57.EstimateSwapExactAmountOutRequest;
                toAminoMsg(message: _57.EstimateSwapExactAmountOutRequest): _57.EstimateSwapExactAmountOutRequestAminoMsg;
                fromProtoMsg(message: _57.EstimateSwapExactAmountOutRequestProtoMsg): _57.EstimateSwapExactAmountOutRequest;
                toProto(message: _57.EstimateSwapExactAmountOutRequest): Uint8Array;
                toProtoMsg(message: _57.EstimateSwapExactAmountOutRequest): _57.EstimateSwapExactAmountOutRequestProtoMsg;
            };
            EstimateSwapExactAmountOutWithPrimitiveTypesRequest: {
                typeUrl: string;
                encode(message: _57.EstimateSwapExactAmountOutWithPrimitiveTypesRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _57.EstimateSwapExactAmountOutWithPrimitiveTypesRequest;
                fromPartial(object: Partial<_57.EstimateSwapExactAmountOutWithPrimitiveTypesRequest>): _57.EstimateSwapExactAmountOutWithPrimitiveTypesRequest;
                fromAmino(object: _57.EstimateSwapExactAmountOutWithPrimitiveTypesRequestAmino): _57.EstimateSwapExactAmountOutWithPrimitiveTypesRequest;
                toAmino(message: _57.EstimateSwapExactAmountOutWithPrimitiveTypesRequest): _57.EstimateSwapExactAmountOutWithPrimitiveTypesRequestAmino;
                fromAminoMsg(object: _57.EstimateSwapExactAmountOutWithPrimitiveTypesRequestAminoMsg): _57.EstimateSwapExactAmountOutWithPrimitiveTypesRequest;
                toAminoMsg(message: _57.EstimateSwapExactAmountOutWithPrimitiveTypesRequest): _57.EstimateSwapExactAmountOutWithPrimitiveTypesRequestAminoMsg;
                fromProtoMsg(message: _57.EstimateSwapExactAmountOutWithPrimitiveTypesRequestProtoMsg): _57.EstimateSwapExactAmountOutWithPrimitiveTypesRequest;
                toProto(message: _57.EstimateSwapExactAmountOutWithPrimitiveTypesRequest): Uint8Array;
                toProtoMsg(message: _57.EstimateSwapExactAmountOutWithPrimitiveTypesRequest): _57.EstimateSwapExactAmountOutWithPrimitiveTypesRequestProtoMsg;
            };
            EstimateSinglePoolSwapExactAmountOutRequest: {
                typeUrl: string;
                encode(message: _57.EstimateSinglePoolSwapExactAmountOutRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _57.EstimateSinglePoolSwapExactAmountOutRequest;
                fromPartial(object: Partial<_57.EstimateSinglePoolSwapExactAmountOutRequest>): _57.EstimateSinglePoolSwapExactAmountOutRequest;
                fromAmino(object: _57.EstimateSinglePoolSwapExactAmountOutRequestAmino): _57.EstimateSinglePoolSwapExactAmountOutRequest;
                toAmino(message: _57.EstimateSinglePoolSwapExactAmountOutRequest): _57.EstimateSinglePoolSwapExactAmountOutRequestAmino;
                fromAminoMsg(object: _57.EstimateSinglePoolSwapExactAmountOutRequestAminoMsg): _57.EstimateSinglePoolSwapExactAmountOutRequest;
                toAminoMsg(message: _57.EstimateSinglePoolSwapExactAmountOutRequest): _57.EstimateSinglePoolSwapExactAmountOutRequestAminoMsg;
                fromProtoMsg(message: _57.EstimateSinglePoolSwapExactAmountOutRequestProtoMsg): _57.EstimateSinglePoolSwapExactAmountOutRequest;
                toProto(message: _57.EstimateSinglePoolSwapExactAmountOutRequest): Uint8Array;
                toProtoMsg(message: _57.EstimateSinglePoolSwapExactAmountOutRequest): _57.EstimateSinglePoolSwapExactAmountOutRequestProtoMsg;
            };
            EstimateSwapExactAmountOutResponse: {
                typeUrl: string;
                encode(message: _57.EstimateSwapExactAmountOutResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _57.EstimateSwapExactAmountOutResponse;
                fromPartial(object: Partial<_57.EstimateSwapExactAmountOutResponse>): _57.EstimateSwapExactAmountOutResponse;
                fromAmino(object: _57.EstimateSwapExactAmountOutResponseAmino): _57.EstimateSwapExactAmountOutResponse;
                toAmino(message: _57.EstimateSwapExactAmountOutResponse): _57.EstimateSwapExactAmountOutResponseAmino;
                fromAminoMsg(object: _57.EstimateSwapExactAmountOutResponseAminoMsg): _57.EstimateSwapExactAmountOutResponse;
                toAminoMsg(message: _57.EstimateSwapExactAmountOutResponse): _57.EstimateSwapExactAmountOutResponseAminoMsg;
                fromProtoMsg(message: _57.EstimateSwapExactAmountOutResponseProtoMsg): _57.EstimateSwapExactAmountOutResponse;
                toProto(message: _57.EstimateSwapExactAmountOutResponse): Uint8Array;
                toProtoMsg(message: _57.EstimateSwapExactAmountOutResponse): _57.EstimateSwapExactAmountOutResponseProtoMsg;
            };
            NumPoolsRequest: {
                typeUrl: string;
                encode(_: _57.NumPoolsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _57.NumPoolsRequest;
                fromPartial(_: Partial<_57.NumPoolsRequest>): _57.NumPoolsRequest;
                fromAmino(_: _57.NumPoolsRequestAmino): _57.NumPoolsRequest;
                toAmino(_: _57.NumPoolsRequest): _57.NumPoolsRequestAmino;
                fromAminoMsg(object: _57.NumPoolsRequestAminoMsg): _57.NumPoolsRequest;
                toAminoMsg(message: _57.NumPoolsRequest): _57.NumPoolsRequestAminoMsg;
                fromProtoMsg(message: _57.NumPoolsRequestProtoMsg): _57.NumPoolsRequest;
                toProto(message: _57.NumPoolsRequest): Uint8Array;
                toProtoMsg(message: _57.NumPoolsRequest): _57.NumPoolsRequestProtoMsg;
            };
            NumPoolsResponse: {
                typeUrl: string;
                encode(message: _57.NumPoolsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _57.NumPoolsResponse;
                fromPartial(object: Partial<_57.NumPoolsResponse>): _57.NumPoolsResponse;
                fromAmino(object: _57.NumPoolsResponseAmino): _57.NumPoolsResponse;
                toAmino(message: _57.NumPoolsResponse): _57.NumPoolsResponseAmino;
                fromAminoMsg(object: _57.NumPoolsResponseAminoMsg): _57.NumPoolsResponse;
                toAminoMsg(message: _57.NumPoolsResponse): _57.NumPoolsResponseAminoMsg;
                fromProtoMsg(message: _57.NumPoolsResponseProtoMsg): _57.NumPoolsResponse;
                toProto(message: _57.NumPoolsResponse): Uint8Array;
                toProtoMsg(message: _57.NumPoolsResponse): _57.NumPoolsResponseProtoMsg;
            };
            PoolRequest: {
                typeUrl: string;
                encode(message: _57.PoolRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _57.PoolRequest;
                fromPartial(object: Partial<_57.PoolRequest>): _57.PoolRequest;
                fromAmino(object: _57.PoolRequestAmino): _57.PoolRequest;
                toAmino(message: _57.PoolRequest): _57.PoolRequestAmino;
                fromAminoMsg(object: _57.PoolRequestAminoMsg): _57.PoolRequest;
                toAminoMsg(message: _57.PoolRequest): _57.PoolRequestAminoMsg;
                fromProtoMsg(message: _57.PoolRequestProtoMsg): _57.PoolRequest;
                toProto(message: _57.PoolRequest): Uint8Array;
                toProtoMsg(message: _57.PoolRequest): _57.PoolRequestProtoMsg;
            };
            PoolResponse: {
                typeUrl: string;
                encode(message: _57.PoolResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _57.PoolResponse;
                fromPartial(object: Partial<_57.PoolResponse>): _57.PoolResponse;
                fromAmino(object: _57.PoolResponseAmino): _57.PoolResponse;
                toAmino(message: _57.PoolResponse): _57.PoolResponseAmino;
                fromAminoMsg(object: _57.PoolResponseAminoMsg): _57.PoolResponse;
                toAminoMsg(message: _57.PoolResponse): _57.PoolResponseAminoMsg;
                fromProtoMsg(message: _57.PoolResponseProtoMsg): _57.PoolResponse;
                toProto(message: _57.PoolResponse): Uint8Array;
                toProtoMsg(message: _57.PoolResponse): _57.PoolResponseProtoMsg;
            };
            AllPoolsRequest: {
                typeUrl: string;
                encode(_: _57.AllPoolsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _57.AllPoolsRequest;
                fromPartial(_: Partial<_57.AllPoolsRequest>): _57.AllPoolsRequest;
                fromAmino(_: _57.AllPoolsRequestAmino): _57.AllPoolsRequest;
                toAmino(_: _57.AllPoolsRequest): _57.AllPoolsRequestAmino;
                fromAminoMsg(object: _57.AllPoolsRequestAminoMsg): _57.AllPoolsRequest;
                toAminoMsg(message: _57.AllPoolsRequest): _57.AllPoolsRequestAminoMsg;
                fromProtoMsg(message: _57.AllPoolsRequestProtoMsg): _57.AllPoolsRequest;
                toProto(message: _57.AllPoolsRequest): Uint8Array;
                toProtoMsg(message: _57.AllPoolsRequest): _57.AllPoolsRequestProtoMsg;
            };
            AllPoolsResponse: {
                typeUrl: string;
                encode(message: _57.AllPoolsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _57.AllPoolsResponse;
                fromPartial(object: Partial<_57.AllPoolsResponse>): _57.AllPoolsResponse;
                fromAmino(object: _57.AllPoolsResponseAmino): _57.AllPoolsResponse;
                toAmino(message: _57.AllPoolsResponse): _57.AllPoolsResponseAmino;
                fromAminoMsg(object: _57.AllPoolsResponseAminoMsg): _57.AllPoolsResponse;
                toAminoMsg(message: _57.AllPoolsResponse): _57.AllPoolsResponseAminoMsg;
                fromProtoMsg(message: _57.AllPoolsResponseProtoMsg): _57.AllPoolsResponse;
                toProto(message: _57.AllPoolsResponse): Uint8Array;
                toProtoMsg(message: _57.AllPoolsResponse): _57.AllPoolsResponseProtoMsg;
            };
            SpotPriceRequest: {
                typeUrl: string;
                encode(message: _57.SpotPriceRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _57.SpotPriceRequest;
                fromPartial(object: Partial<_57.SpotPriceRequest>): _57.SpotPriceRequest;
                fromAmino(object: _57.SpotPriceRequestAmino): _57.SpotPriceRequest;
                toAmino(message: _57.SpotPriceRequest): _57.SpotPriceRequestAmino;
                fromAminoMsg(object: _57.SpotPriceRequestAminoMsg): _57.SpotPriceRequest;
                toAminoMsg(message: _57.SpotPriceRequest): _57.SpotPriceRequestAminoMsg;
                fromProtoMsg(message: _57.SpotPriceRequestProtoMsg): _57.SpotPriceRequest;
                toProto(message: _57.SpotPriceRequest): Uint8Array;
                toProtoMsg(message: _57.SpotPriceRequest): _57.SpotPriceRequestProtoMsg;
            };
            SpotPriceResponse: {
                typeUrl: string;
                encode(message: _57.SpotPriceResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _57.SpotPriceResponse;
                fromPartial(object: Partial<_57.SpotPriceResponse>): _57.SpotPriceResponse;
                fromAmino(object: _57.SpotPriceResponseAmino): _57.SpotPriceResponse;
                toAmino(message: _57.SpotPriceResponse): _57.SpotPriceResponseAmino;
                fromAminoMsg(object: _57.SpotPriceResponseAminoMsg): _57.SpotPriceResponse;
                toAminoMsg(message: _57.SpotPriceResponse): _57.SpotPriceResponseAminoMsg;
                fromProtoMsg(message: _57.SpotPriceResponseProtoMsg): _57.SpotPriceResponse;
                toProto(message: _57.SpotPriceResponse): Uint8Array;
                toProtoMsg(message: _57.SpotPriceResponse): _57.SpotPriceResponseProtoMsg;
            };
            TotalPoolLiquidityRequest: {
                typeUrl: string;
                encode(message: _57.TotalPoolLiquidityRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _57.TotalPoolLiquidityRequest;
                fromPartial(object: Partial<_57.TotalPoolLiquidityRequest>): _57.TotalPoolLiquidityRequest;
                fromAmino(object: _57.TotalPoolLiquidityRequestAmino): _57.TotalPoolLiquidityRequest;
                toAmino(message: _57.TotalPoolLiquidityRequest): _57.TotalPoolLiquidityRequestAmino;
                fromAminoMsg(object: _57.TotalPoolLiquidityRequestAminoMsg): _57.TotalPoolLiquidityRequest;
                toAminoMsg(message: _57.TotalPoolLiquidityRequest): _57.TotalPoolLiquidityRequestAminoMsg;
                fromProtoMsg(message: _57.TotalPoolLiquidityRequestProtoMsg): _57.TotalPoolLiquidityRequest;
                toProto(message: _57.TotalPoolLiquidityRequest): Uint8Array;
                toProtoMsg(message: _57.TotalPoolLiquidityRequest): _57.TotalPoolLiquidityRequestProtoMsg;
            };
            TotalPoolLiquidityResponse: {
                typeUrl: string;
                encode(message: _57.TotalPoolLiquidityResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _57.TotalPoolLiquidityResponse;
                fromPartial(object: Partial<_57.TotalPoolLiquidityResponse>): _57.TotalPoolLiquidityResponse;
                fromAmino(object: _57.TotalPoolLiquidityResponseAmino): _57.TotalPoolLiquidityResponse;
                toAmino(message: _57.TotalPoolLiquidityResponse): _57.TotalPoolLiquidityResponseAmino;
                fromAminoMsg(object: _57.TotalPoolLiquidityResponseAminoMsg): _57.TotalPoolLiquidityResponse;
                toAminoMsg(message: _57.TotalPoolLiquidityResponse): _57.TotalPoolLiquidityResponseAminoMsg;
                fromProtoMsg(message: _57.TotalPoolLiquidityResponseProtoMsg): _57.TotalPoolLiquidityResponse;
                toProto(message: _57.TotalPoolLiquidityResponse): Uint8Array;
                toProtoMsg(message: _57.TotalPoolLiquidityResponse): _57.TotalPoolLiquidityResponseProtoMsg;
            };
            TotalLiquidityRequest: {
                typeUrl: string;
                encode(_: _57.TotalLiquidityRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _57.TotalLiquidityRequest;
                fromPartial(_: Partial<_57.TotalLiquidityRequest>): _57.TotalLiquidityRequest;
                fromAmino(_: _57.TotalLiquidityRequestAmino): _57.TotalLiquidityRequest;
                toAmino(_: _57.TotalLiquidityRequest): _57.TotalLiquidityRequestAmino;
                fromAminoMsg(object: _57.TotalLiquidityRequestAminoMsg): _57.TotalLiquidityRequest;
                toAminoMsg(message: _57.TotalLiquidityRequest): _57.TotalLiquidityRequestAminoMsg;
                fromProtoMsg(message: _57.TotalLiquidityRequestProtoMsg): _57.TotalLiquidityRequest;
                toProto(message: _57.TotalLiquidityRequest): Uint8Array;
                toProtoMsg(message: _57.TotalLiquidityRequest): _57.TotalLiquidityRequestProtoMsg;
            };
            TotalLiquidityResponse: {
                typeUrl: string;
                encode(message: _57.TotalLiquidityResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _57.TotalLiquidityResponse;
                fromPartial(object: Partial<_57.TotalLiquidityResponse>): _57.TotalLiquidityResponse;
                fromAmino(object: _57.TotalLiquidityResponseAmino): _57.TotalLiquidityResponse;
                toAmino(message: _57.TotalLiquidityResponse): _57.TotalLiquidityResponseAmino;
                fromAminoMsg(object: _57.TotalLiquidityResponseAminoMsg): _57.TotalLiquidityResponse;
                toAminoMsg(message: _57.TotalLiquidityResponse): _57.TotalLiquidityResponseAminoMsg;
                fromProtoMsg(message: _57.TotalLiquidityResponseProtoMsg): _57.TotalLiquidityResponse;
                toProto(message: _57.TotalLiquidityResponse): Uint8Array;
                toProtoMsg(message: _57.TotalLiquidityResponse): _57.TotalLiquidityResponseProtoMsg;
            };
            PoolI_InterfaceDecoder: (input: Uint8Array | import("..").BinaryReader) => import("../google/protobuf/any").Any | import("./concentrated-liquidity/pool").Pool | _9.CosmWasmPool | _20.Pool | _27.Pool;
            PoolI_FromAmino: (content: import("../google/protobuf/any").AnyAmino) => import("../google/protobuf/any").Any;
            PoolI_ToAmino: (content: import("../google/protobuf/any").Any) => import("../google/protobuf/any").AnyAmino;
            poolTypeFromJSON(object: any): _56.PoolType;
            poolTypeToJSON(object: _56.PoolType): string;
            PoolType: typeof _56.PoolType;
            PoolTypeSDKType: typeof _56.PoolType;
            PoolTypeAmino: typeof _56.PoolType;
            ModuleRoute: {
                typeUrl: string;
                encode(message: _56.ModuleRoute, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _56.ModuleRoute;
                fromPartial(object: Partial<_56.ModuleRoute>): _56.ModuleRoute;
                fromAmino(object: _56.ModuleRouteAmino): _56.ModuleRoute;
                toAmino(message: _56.ModuleRoute): _56.ModuleRouteAmino;
                fromAminoMsg(object: _56.ModuleRouteAminoMsg): _56.ModuleRoute;
                toAminoMsg(message: _56.ModuleRoute): _56.ModuleRouteAminoMsg;
                fromProtoMsg(message: _56.ModuleRouteProtoMsg): _56.ModuleRoute;
                toProto(message: _56.ModuleRoute): Uint8Array;
                toProtoMsg(message: _56.ModuleRoute): _56.ModuleRouteProtoMsg;
            };
            DenomPairTakerFeeProposal: {
                typeUrl: string;
                encode(message: _55.DenomPairTakerFeeProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _55.DenomPairTakerFeeProposal;
                fromPartial(object: Partial<_55.DenomPairTakerFeeProposal>): _55.DenomPairTakerFeeProposal;
                fromAmino(object: _55.DenomPairTakerFeeProposalAmino): _55.DenomPairTakerFeeProposal;
                toAmino(message: _55.DenomPairTakerFeeProposal): _55.DenomPairTakerFeeProposalAmino;
                fromAminoMsg(object: _55.DenomPairTakerFeeProposalAminoMsg): _55.DenomPairTakerFeeProposal;
                toAminoMsg(message: _55.DenomPairTakerFeeProposal): _55.DenomPairTakerFeeProposalAminoMsg;
                fromProtoMsg(message: _55.DenomPairTakerFeeProposalProtoMsg): _55.DenomPairTakerFeeProposal;
                toProto(message: _55.DenomPairTakerFeeProposal): Uint8Array;
                toProtoMsg(message: _55.DenomPairTakerFeeProposal): _55.DenomPairTakerFeeProposalProtoMsg;
            };
            Params: {
                typeUrl: string;
                encode(message: _54.Params, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _54.Params;
                fromPartial(object: Partial<_54.Params>): _54.Params;
                fromAmino(object: _54.ParamsAmino): _54.Params;
                toAmino(message: _54.Params): _54.ParamsAmino;
                fromAminoMsg(object: _54.ParamsAminoMsg): _54.Params;
                toAminoMsg(message: _54.Params): _54.ParamsAminoMsg;
                fromProtoMsg(message: _54.ParamsProtoMsg): _54.Params;
                toProto(message: _54.Params): Uint8Array;
                toProtoMsg(message: _54.Params): _54.ParamsProtoMsg;
            };
            GenesisState: {
                typeUrl: string;
                encode(message: _54.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _54.GenesisState;
                fromPartial(object: Partial<_54.GenesisState>): _54.GenesisState;
                fromAmino(object: _54.GenesisStateAmino): _54.GenesisState;
                toAmino(message: _54.GenesisState): _54.GenesisStateAmino;
                fromAminoMsg(object: _54.GenesisStateAminoMsg): _54.GenesisState;
                toAminoMsg(message: _54.GenesisState): _54.GenesisStateAminoMsg;
                fromProtoMsg(message: _54.GenesisStateProtoMsg): _54.GenesisState;
                toProto(message: _54.GenesisState): Uint8Array;
                toProtoMsg(message: _54.GenesisState): _54.GenesisStateProtoMsg;
            };
            TakerFeeParams: {
                typeUrl: string;
                encode(message: _54.TakerFeeParams, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _54.TakerFeeParams;
                fromPartial(object: Partial<_54.TakerFeeParams>): _54.TakerFeeParams;
                fromAmino(object: _54.TakerFeeParamsAmino): _54.TakerFeeParams;
                toAmino(message: _54.TakerFeeParams): _54.TakerFeeParamsAmino;
                fromAminoMsg(object: _54.TakerFeeParamsAminoMsg): _54.TakerFeeParams;
                toAminoMsg(message: _54.TakerFeeParams): _54.TakerFeeParamsAminoMsg;
                fromProtoMsg(message: _54.TakerFeeParamsProtoMsg): _54.TakerFeeParams;
                toProto(message: _54.TakerFeeParams): Uint8Array;
                toProtoMsg(message: _54.TakerFeeParams): _54.TakerFeeParamsProtoMsg;
            };
            TakerFeeDistributionPercentage: {
                typeUrl: string;
                encode(message: _54.TakerFeeDistributionPercentage, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _54.TakerFeeDistributionPercentage;
                fromPartial(object: Partial<_54.TakerFeeDistributionPercentage>): _54.TakerFeeDistributionPercentage;
                fromAmino(object: _54.TakerFeeDistributionPercentageAmino): _54.TakerFeeDistributionPercentage;
                toAmino(message: _54.TakerFeeDistributionPercentage): _54.TakerFeeDistributionPercentageAmino;
                fromAminoMsg(object: _54.TakerFeeDistributionPercentageAminoMsg): _54.TakerFeeDistributionPercentage;
                toAminoMsg(message: _54.TakerFeeDistributionPercentage): _54.TakerFeeDistributionPercentageAminoMsg;
                fromProtoMsg(message: _54.TakerFeeDistributionPercentageProtoMsg): _54.TakerFeeDistributionPercentage;
                toProto(message: _54.TakerFeeDistributionPercentage): Uint8Array;
                toProtoMsg(message: _54.TakerFeeDistributionPercentage): _54.TakerFeeDistributionPercentageProtoMsg;
            };
        };
    }
    namespace protorev {
        const v1beta1: {
            MsgClientImpl: typeof _260.MsgClientImpl;
            QueryClientImpl: typeof _245.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                params(request?: _64.QueryParamsRequest): Promise<_64.QueryParamsResponse>;
                getProtoRevNumberOfTrades(request?: _64.QueryGetProtoRevNumberOfTradesRequest): Promise<_64.QueryGetProtoRevNumberOfTradesResponse>;
                getProtoRevProfitsByDenom(request: _64.QueryGetProtoRevProfitsByDenomRequest): Promise<_64.QueryGetProtoRevProfitsByDenomResponse>;
                getProtoRevAllProfits(request?: _64.QueryGetProtoRevAllProfitsRequest): Promise<_64.QueryGetProtoRevAllProfitsResponse>;
                getProtoRevStatisticsByRoute(request: _64.QueryGetProtoRevStatisticsByRouteRequest): Promise<_64.QueryGetProtoRevStatisticsByRouteResponse>;
                getProtoRevAllRouteStatistics(request?: _64.QueryGetProtoRevAllRouteStatisticsRequest): Promise<_64.QueryGetProtoRevAllRouteStatisticsResponse>;
                getProtoRevTokenPairArbRoutes(request?: _64.QueryGetProtoRevTokenPairArbRoutesRequest): Promise<_64.QueryGetProtoRevTokenPairArbRoutesResponse>;
                getProtoRevAdminAccount(request?: _64.QueryGetProtoRevAdminAccountRequest): Promise<_64.QueryGetProtoRevAdminAccountResponse>;
                getProtoRevDeveloperAccount(request?: _64.QueryGetProtoRevDeveloperAccountRequest): Promise<_64.QueryGetProtoRevDeveloperAccountResponse>;
                getProtoRevInfoByPoolType(request?: _64.QueryGetProtoRevInfoByPoolTypeRequest): Promise<_64.QueryGetProtoRevInfoByPoolTypeResponse>;
                getProtoRevMaxPoolPointsPerTx(request?: _64.QueryGetProtoRevMaxPoolPointsPerTxRequest): Promise<_64.QueryGetProtoRevMaxPoolPointsPerTxResponse>;
                getProtoRevMaxPoolPointsPerBlock(request?: _64.QueryGetProtoRevMaxPoolPointsPerBlockRequest): Promise<_64.QueryGetProtoRevMaxPoolPointsPerBlockResponse>;
                getProtoRevBaseDenoms(request?: _64.QueryGetProtoRevBaseDenomsRequest): Promise<_64.QueryGetProtoRevBaseDenomsResponse>;
                getProtoRevEnabled(request?: _64.QueryGetProtoRevEnabledRequest): Promise<_64.QueryGetProtoRevEnabledResponse>;
                getProtoRevPool(request: _64.QueryGetProtoRevPoolRequest): Promise<_64.QueryGetProtoRevPoolResponse>;
            };
            LCDQueryClient: typeof _227.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    setHotRoutes(value: _65.MsgSetHotRoutes): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    setDeveloperAccount(value: _65.MsgSetDeveloperAccount): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    setMaxPoolPointsPerTx(value: _65.MsgSetMaxPoolPointsPerTx): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    setMaxPoolPointsPerBlock(value: _65.MsgSetMaxPoolPointsPerBlock): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    setInfoByPoolType(value: _65.MsgSetInfoByPoolType): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    setBaseDenoms(value: _65.MsgSetBaseDenoms): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    setHotRoutes(value: _65.MsgSetHotRoutes): {
                        typeUrl: string;
                        value: _65.MsgSetHotRoutes;
                    };
                    setDeveloperAccount(value: _65.MsgSetDeveloperAccount): {
                        typeUrl: string;
                        value: _65.MsgSetDeveloperAccount;
                    };
                    setMaxPoolPointsPerTx(value: _65.MsgSetMaxPoolPointsPerTx): {
                        typeUrl: string;
                        value: _65.MsgSetMaxPoolPointsPerTx;
                    };
                    setMaxPoolPointsPerBlock(value: _65.MsgSetMaxPoolPointsPerBlock): {
                        typeUrl: string;
                        value: _65.MsgSetMaxPoolPointsPerBlock;
                    };
                    setInfoByPoolType(value: _65.MsgSetInfoByPoolType): {
                        typeUrl: string;
                        value: _65.MsgSetInfoByPoolType;
                    };
                    setBaseDenoms(value: _65.MsgSetBaseDenoms): {
                        typeUrl: string;
                        value: _65.MsgSetBaseDenoms;
                    };
                };
                fromJSON: {
                    setHotRoutes(value: any): {
                        typeUrl: string;
                        value: _65.MsgSetHotRoutes;
                    };
                    setDeveloperAccount(value: any): {
                        typeUrl: string;
                        value: _65.MsgSetDeveloperAccount;
                    };
                    setMaxPoolPointsPerTx(value: any): {
                        typeUrl: string;
                        value: _65.MsgSetMaxPoolPointsPerTx;
                    };
                    setMaxPoolPointsPerBlock(value: any): {
                        typeUrl: string;
                        value: _65.MsgSetMaxPoolPointsPerBlock;
                    };
                    setInfoByPoolType(value: any): {
                        typeUrl: string;
                        value: _65.MsgSetInfoByPoolType;
                    };
                    setBaseDenoms(value: any): {
                        typeUrl: string;
                        value: _65.MsgSetBaseDenoms;
                    };
                };
                fromPartial: {
                    setHotRoutes(value: _65.MsgSetHotRoutes): {
                        typeUrl: string;
                        value: _65.MsgSetHotRoutes;
                    };
                    setDeveloperAccount(value: _65.MsgSetDeveloperAccount): {
                        typeUrl: string;
                        value: _65.MsgSetDeveloperAccount;
                    };
                    setMaxPoolPointsPerTx(value: _65.MsgSetMaxPoolPointsPerTx): {
                        typeUrl: string;
                        value: _65.MsgSetMaxPoolPointsPerTx;
                    };
                    setMaxPoolPointsPerBlock(value: _65.MsgSetMaxPoolPointsPerBlock): {
                        typeUrl: string;
                        value: _65.MsgSetMaxPoolPointsPerBlock;
                    };
                    setInfoByPoolType(value: _65.MsgSetInfoByPoolType): {
                        typeUrl: string;
                        value: _65.MsgSetInfoByPoolType;
                    };
                    setBaseDenoms(value: _65.MsgSetBaseDenoms): {
                        typeUrl: string;
                        value: _65.MsgSetBaseDenoms;
                    };
                };
            };
            AminoConverter: {
                "/osmosis.protorev.v1beta1.MsgSetHotRoutes": {
                    aminoType: string;
                    toAmino: (message: _65.MsgSetHotRoutes) => _65.MsgSetHotRoutesAmino;
                    fromAmino: (object: _65.MsgSetHotRoutesAmino) => _65.MsgSetHotRoutes;
                };
                "/osmosis.protorev.v1beta1.MsgSetDeveloperAccount": {
                    aminoType: string;
                    toAmino: (message: _65.MsgSetDeveloperAccount) => _65.MsgSetDeveloperAccountAmino;
                    fromAmino: (object: _65.MsgSetDeveloperAccountAmino) => _65.MsgSetDeveloperAccount;
                };
                "/osmosis.protorev.v1beta1.MsgSetMaxPoolPointsPerTx": {
                    aminoType: string;
                    toAmino: (message: _65.MsgSetMaxPoolPointsPerTx) => _65.MsgSetMaxPoolPointsPerTxAmino;
                    fromAmino: (object: _65.MsgSetMaxPoolPointsPerTxAmino) => _65.MsgSetMaxPoolPointsPerTx;
                };
                "/osmosis.protorev.v1beta1.MsgSetMaxPoolPointsPerBlock": {
                    aminoType: string;
                    toAmino: (message: _65.MsgSetMaxPoolPointsPerBlock) => _65.MsgSetMaxPoolPointsPerBlockAmino;
                    fromAmino: (object: _65.MsgSetMaxPoolPointsPerBlockAmino) => _65.MsgSetMaxPoolPointsPerBlock;
                };
                "/osmosis.protorev.v1beta1.MsgSetInfoByPoolType": {
                    aminoType: string;
                    toAmino: (message: _65.MsgSetInfoByPoolType) => _65.MsgSetInfoByPoolTypeAmino;
                    fromAmino: (object: _65.MsgSetInfoByPoolTypeAmino) => _65.MsgSetInfoByPoolType;
                };
                "/osmosis.protorev.v1beta1.MsgSetBaseDenoms": {
                    aminoType: string;
                    toAmino: (message: _65.MsgSetBaseDenoms) => _65.MsgSetBaseDenomsAmino;
                    fromAmino: (object: _65.MsgSetBaseDenomsAmino) => _65.MsgSetBaseDenoms;
                };
            };
            MsgSetHotRoutes: {
                typeUrl: string;
                encode(message: _65.MsgSetHotRoutes, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _65.MsgSetHotRoutes;
                fromPartial(object: Partial<_65.MsgSetHotRoutes>): _65.MsgSetHotRoutes;
                fromAmino(object: _65.MsgSetHotRoutesAmino): _65.MsgSetHotRoutes;
                toAmino(message: _65.MsgSetHotRoutes): _65.MsgSetHotRoutesAmino;
                fromAminoMsg(object: _65.MsgSetHotRoutesAminoMsg): _65.MsgSetHotRoutes;
                toAminoMsg(message: _65.MsgSetHotRoutes): _65.MsgSetHotRoutesAminoMsg;
                fromProtoMsg(message: _65.MsgSetHotRoutesProtoMsg): _65.MsgSetHotRoutes;
                toProto(message: _65.MsgSetHotRoutes): Uint8Array;
                toProtoMsg(message: _65.MsgSetHotRoutes): _65.MsgSetHotRoutesProtoMsg;
            };
            MsgSetHotRoutesResponse: {
                typeUrl: string;
                encode(_: _65.MsgSetHotRoutesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _65.MsgSetHotRoutesResponse;
                fromPartial(_: Partial<_65.MsgSetHotRoutesResponse>): _65.MsgSetHotRoutesResponse;
                fromAmino(_: _65.MsgSetHotRoutesResponseAmino): _65.MsgSetHotRoutesResponse;
                toAmino(_: _65.MsgSetHotRoutesResponse): _65.MsgSetHotRoutesResponseAmino;
                fromAminoMsg(object: _65.MsgSetHotRoutesResponseAminoMsg): _65.MsgSetHotRoutesResponse;
                toAminoMsg(message: _65.MsgSetHotRoutesResponse): _65.MsgSetHotRoutesResponseAminoMsg;
                fromProtoMsg(message: _65.MsgSetHotRoutesResponseProtoMsg): _65.MsgSetHotRoutesResponse;
                toProto(message: _65.MsgSetHotRoutesResponse): Uint8Array;
                toProtoMsg(message: _65.MsgSetHotRoutesResponse): _65.MsgSetHotRoutesResponseProtoMsg;
            };
            MsgSetDeveloperAccount: {
                typeUrl: string;
                encode(message: _65.MsgSetDeveloperAccount, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _65.MsgSetDeveloperAccount;
                fromPartial(object: Partial<_65.MsgSetDeveloperAccount>): _65.MsgSetDeveloperAccount;
                fromAmino(object: _65.MsgSetDeveloperAccountAmino): _65.MsgSetDeveloperAccount;
                toAmino(message: _65.MsgSetDeveloperAccount): _65.MsgSetDeveloperAccountAmino;
                fromAminoMsg(object: _65.MsgSetDeveloperAccountAminoMsg): _65.MsgSetDeveloperAccount;
                toAminoMsg(message: _65.MsgSetDeveloperAccount): _65.MsgSetDeveloperAccountAminoMsg;
                fromProtoMsg(message: _65.MsgSetDeveloperAccountProtoMsg): _65.MsgSetDeveloperAccount;
                toProto(message: _65.MsgSetDeveloperAccount): Uint8Array;
                toProtoMsg(message: _65.MsgSetDeveloperAccount): _65.MsgSetDeveloperAccountProtoMsg;
            };
            MsgSetDeveloperAccountResponse: {
                typeUrl: string;
                encode(_: _65.MsgSetDeveloperAccountResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _65.MsgSetDeveloperAccountResponse;
                fromPartial(_: Partial<_65.MsgSetDeveloperAccountResponse>): _65.MsgSetDeveloperAccountResponse;
                fromAmino(_: _65.MsgSetDeveloperAccountResponseAmino): _65.MsgSetDeveloperAccountResponse;
                toAmino(_: _65.MsgSetDeveloperAccountResponse): _65.MsgSetDeveloperAccountResponseAmino;
                fromAminoMsg(object: _65.MsgSetDeveloperAccountResponseAminoMsg): _65.MsgSetDeveloperAccountResponse;
                toAminoMsg(message: _65.MsgSetDeveloperAccountResponse): _65.MsgSetDeveloperAccountResponseAminoMsg;
                fromProtoMsg(message: _65.MsgSetDeveloperAccountResponseProtoMsg): _65.MsgSetDeveloperAccountResponse;
                toProto(message: _65.MsgSetDeveloperAccountResponse): Uint8Array;
                toProtoMsg(message: _65.MsgSetDeveloperAccountResponse): _65.MsgSetDeveloperAccountResponseProtoMsg;
            };
            MsgSetInfoByPoolType: {
                typeUrl: string;
                encode(message: _65.MsgSetInfoByPoolType, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _65.MsgSetInfoByPoolType;
                fromPartial(object: Partial<_65.MsgSetInfoByPoolType>): _65.MsgSetInfoByPoolType;
                fromAmino(object: _65.MsgSetInfoByPoolTypeAmino): _65.MsgSetInfoByPoolType;
                toAmino(message: _65.MsgSetInfoByPoolType): _65.MsgSetInfoByPoolTypeAmino;
                fromAminoMsg(object: _65.MsgSetInfoByPoolTypeAminoMsg): _65.MsgSetInfoByPoolType;
                toAminoMsg(message: _65.MsgSetInfoByPoolType): _65.MsgSetInfoByPoolTypeAminoMsg;
                fromProtoMsg(message: _65.MsgSetInfoByPoolTypeProtoMsg): _65.MsgSetInfoByPoolType;
                toProto(message: _65.MsgSetInfoByPoolType): Uint8Array;
                toProtoMsg(message: _65.MsgSetInfoByPoolType): _65.MsgSetInfoByPoolTypeProtoMsg;
            };
            MsgSetInfoByPoolTypeResponse: {
                typeUrl: string;
                encode(_: _65.MsgSetInfoByPoolTypeResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _65.MsgSetInfoByPoolTypeResponse;
                fromPartial(_: Partial<_65.MsgSetInfoByPoolTypeResponse>): _65.MsgSetInfoByPoolTypeResponse;
                fromAmino(_: _65.MsgSetInfoByPoolTypeResponseAmino): _65.MsgSetInfoByPoolTypeResponse;
                toAmino(_: _65.MsgSetInfoByPoolTypeResponse): _65.MsgSetInfoByPoolTypeResponseAmino;
                fromAminoMsg(object: _65.MsgSetInfoByPoolTypeResponseAminoMsg): _65.MsgSetInfoByPoolTypeResponse;
                toAminoMsg(message: _65.MsgSetInfoByPoolTypeResponse): _65.MsgSetInfoByPoolTypeResponseAminoMsg;
                fromProtoMsg(message: _65.MsgSetInfoByPoolTypeResponseProtoMsg): _65.MsgSetInfoByPoolTypeResponse;
                toProto(message: _65.MsgSetInfoByPoolTypeResponse): Uint8Array;
                toProtoMsg(message: _65.MsgSetInfoByPoolTypeResponse): _65.MsgSetInfoByPoolTypeResponseProtoMsg;
            };
            MsgSetMaxPoolPointsPerTx: {
                typeUrl: string;
                encode(message: _65.MsgSetMaxPoolPointsPerTx, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _65.MsgSetMaxPoolPointsPerTx;
                fromPartial(object: Partial<_65.MsgSetMaxPoolPointsPerTx>): _65.MsgSetMaxPoolPointsPerTx;
                fromAmino(object: _65.MsgSetMaxPoolPointsPerTxAmino): _65.MsgSetMaxPoolPointsPerTx;
                toAmino(message: _65.MsgSetMaxPoolPointsPerTx): _65.MsgSetMaxPoolPointsPerTxAmino;
                fromAminoMsg(object: _65.MsgSetMaxPoolPointsPerTxAminoMsg): _65.MsgSetMaxPoolPointsPerTx;
                toAminoMsg(message: _65.MsgSetMaxPoolPointsPerTx): _65.MsgSetMaxPoolPointsPerTxAminoMsg;
                fromProtoMsg(message: _65.MsgSetMaxPoolPointsPerTxProtoMsg): _65.MsgSetMaxPoolPointsPerTx;
                toProto(message: _65.MsgSetMaxPoolPointsPerTx): Uint8Array;
                toProtoMsg(message: _65.MsgSetMaxPoolPointsPerTx): _65.MsgSetMaxPoolPointsPerTxProtoMsg;
            };
            MsgSetMaxPoolPointsPerTxResponse: {
                typeUrl: string;
                encode(_: _65.MsgSetMaxPoolPointsPerTxResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _65.MsgSetMaxPoolPointsPerTxResponse;
                fromPartial(_: Partial<_65.MsgSetMaxPoolPointsPerTxResponse>): _65.MsgSetMaxPoolPointsPerTxResponse;
                fromAmino(_: _65.MsgSetMaxPoolPointsPerTxResponseAmino): _65.MsgSetMaxPoolPointsPerTxResponse;
                toAmino(_: _65.MsgSetMaxPoolPointsPerTxResponse): _65.MsgSetMaxPoolPointsPerTxResponseAmino;
                fromAminoMsg(object: _65.MsgSetMaxPoolPointsPerTxResponseAminoMsg): _65.MsgSetMaxPoolPointsPerTxResponse;
                toAminoMsg(message: _65.MsgSetMaxPoolPointsPerTxResponse): _65.MsgSetMaxPoolPointsPerTxResponseAminoMsg;
                fromProtoMsg(message: _65.MsgSetMaxPoolPointsPerTxResponseProtoMsg): _65.MsgSetMaxPoolPointsPerTxResponse;
                toProto(message: _65.MsgSetMaxPoolPointsPerTxResponse): Uint8Array;
                toProtoMsg(message: _65.MsgSetMaxPoolPointsPerTxResponse): _65.MsgSetMaxPoolPointsPerTxResponseProtoMsg;
            };
            MsgSetMaxPoolPointsPerBlock: {
                typeUrl: string;
                encode(message: _65.MsgSetMaxPoolPointsPerBlock, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _65.MsgSetMaxPoolPointsPerBlock;
                fromPartial(object: Partial<_65.MsgSetMaxPoolPointsPerBlock>): _65.MsgSetMaxPoolPointsPerBlock;
                fromAmino(object: _65.MsgSetMaxPoolPointsPerBlockAmino): _65.MsgSetMaxPoolPointsPerBlock;
                toAmino(message: _65.MsgSetMaxPoolPointsPerBlock): _65.MsgSetMaxPoolPointsPerBlockAmino;
                fromAminoMsg(object: _65.MsgSetMaxPoolPointsPerBlockAminoMsg): _65.MsgSetMaxPoolPointsPerBlock;
                toAminoMsg(message: _65.MsgSetMaxPoolPointsPerBlock): _65.MsgSetMaxPoolPointsPerBlockAminoMsg;
                fromProtoMsg(message: _65.MsgSetMaxPoolPointsPerBlockProtoMsg): _65.MsgSetMaxPoolPointsPerBlock;
                toProto(message: _65.MsgSetMaxPoolPointsPerBlock): Uint8Array;
                toProtoMsg(message: _65.MsgSetMaxPoolPointsPerBlock): _65.MsgSetMaxPoolPointsPerBlockProtoMsg;
            };
            MsgSetMaxPoolPointsPerBlockResponse: {
                typeUrl: string;
                encode(_: _65.MsgSetMaxPoolPointsPerBlockResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _65.MsgSetMaxPoolPointsPerBlockResponse;
                fromPartial(_: Partial<_65.MsgSetMaxPoolPointsPerBlockResponse>): _65.MsgSetMaxPoolPointsPerBlockResponse;
                fromAmino(_: _65.MsgSetMaxPoolPointsPerBlockResponseAmino): _65.MsgSetMaxPoolPointsPerBlockResponse;
                toAmino(_: _65.MsgSetMaxPoolPointsPerBlockResponse): _65.MsgSetMaxPoolPointsPerBlockResponseAmino;
                fromAminoMsg(object: _65.MsgSetMaxPoolPointsPerBlockResponseAminoMsg): _65.MsgSetMaxPoolPointsPerBlockResponse;
                toAminoMsg(message: _65.MsgSetMaxPoolPointsPerBlockResponse): _65.MsgSetMaxPoolPointsPerBlockResponseAminoMsg;
                fromProtoMsg(message: _65.MsgSetMaxPoolPointsPerBlockResponseProtoMsg): _65.MsgSetMaxPoolPointsPerBlockResponse;
                toProto(message: _65.MsgSetMaxPoolPointsPerBlockResponse): Uint8Array;
                toProtoMsg(message: _65.MsgSetMaxPoolPointsPerBlockResponse): _65.MsgSetMaxPoolPointsPerBlockResponseProtoMsg;
            };
            MsgSetBaseDenoms: {
                typeUrl: string;
                encode(message: _65.MsgSetBaseDenoms, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _65.MsgSetBaseDenoms;
                fromPartial(object: Partial<_65.MsgSetBaseDenoms>): _65.MsgSetBaseDenoms;
                fromAmino(object: _65.MsgSetBaseDenomsAmino): _65.MsgSetBaseDenoms;
                toAmino(message: _65.MsgSetBaseDenoms): _65.MsgSetBaseDenomsAmino;
                fromAminoMsg(object: _65.MsgSetBaseDenomsAminoMsg): _65.MsgSetBaseDenoms;
                toAminoMsg(message: _65.MsgSetBaseDenoms): _65.MsgSetBaseDenomsAminoMsg;
                fromProtoMsg(message: _65.MsgSetBaseDenomsProtoMsg): _65.MsgSetBaseDenoms;
                toProto(message: _65.MsgSetBaseDenoms): Uint8Array;
                toProtoMsg(message: _65.MsgSetBaseDenoms): _65.MsgSetBaseDenomsProtoMsg;
            };
            MsgSetBaseDenomsResponse: {
                typeUrl: string;
                encode(_: _65.MsgSetBaseDenomsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _65.MsgSetBaseDenomsResponse;
                fromPartial(_: Partial<_65.MsgSetBaseDenomsResponse>): _65.MsgSetBaseDenomsResponse;
                fromAmino(_: _65.MsgSetBaseDenomsResponseAmino): _65.MsgSetBaseDenomsResponse;
                toAmino(_: _65.MsgSetBaseDenomsResponse): _65.MsgSetBaseDenomsResponseAmino;
                fromAminoMsg(object: _65.MsgSetBaseDenomsResponseAminoMsg): _65.MsgSetBaseDenomsResponse;
                toAminoMsg(message: _65.MsgSetBaseDenomsResponse): _65.MsgSetBaseDenomsResponseAminoMsg;
                fromProtoMsg(message: _65.MsgSetBaseDenomsResponseProtoMsg): _65.MsgSetBaseDenomsResponse;
                toProto(message: _65.MsgSetBaseDenomsResponse): Uint8Array;
                toProtoMsg(message: _65.MsgSetBaseDenomsResponse): _65.MsgSetBaseDenomsResponseProtoMsg;
            };
            QueryParamsRequest: {
                typeUrl: string;
                encode(_: _64.QueryParamsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _64.QueryParamsRequest;
                fromPartial(_: Partial<_64.QueryParamsRequest>): _64.QueryParamsRequest;
                fromAmino(_: _64.QueryParamsRequestAmino): _64.QueryParamsRequest;
                toAmino(_: _64.QueryParamsRequest): _64.QueryParamsRequestAmino;
                fromAminoMsg(object: _64.QueryParamsRequestAminoMsg): _64.QueryParamsRequest;
                toAminoMsg(message: _64.QueryParamsRequest): _64.QueryParamsRequestAminoMsg;
                fromProtoMsg(message: _64.QueryParamsRequestProtoMsg): _64.QueryParamsRequest;
                toProto(message: _64.QueryParamsRequest): Uint8Array;
                toProtoMsg(message: _64.QueryParamsRequest): _64.QueryParamsRequestProtoMsg;
            };
            QueryParamsResponse: {
                typeUrl: string;
                encode(message: _64.QueryParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _64.QueryParamsResponse;
                fromPartial(object: Partial<_64.QueryParamsResponse>): _64.QueryParamsResponse;
                fromAmino(object: _64.QueryParamsResponseAmino): _64.QueryParamsResponse;
                toAmino(message: _64.QueryParamsResponse): _64.QueryParamsResponseAmino;
                fromAminoMsg(object: _64.QueryParamsResponseAminoMsg): _64.QueryParamsResponse;
                toAminoMsg(message: _64.QueryParamsResponse): _64.QueryParamsResponseAminoMsg;
                fromProtoMsg(message: _64.QueryParamsResponseProtoMsg): _64.QueryParamsResponse;
                toProto(message: _64.QueryParamsResponse): Uint8Array;
                toProtoMsg(message: _64.QueryParamsResponse): _64.QueryParamsResponseProtoMsg;
            };
            QueryGetProtoRevNumberOfTradesRequest: {
                typeUrl: string;
                encode(_: _64.QueryGetProtoRevNumberOfTradesRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _64.QueryGetProtoRevNumberOfTradesRequest;
                fromPartial(_: Partial<_64.QueryGetProtoRevNumberOfTradesRequest>): _64.QueryGetProtoRevNumberOfTradesRequest;
                fromAmino(_: _64.QueryGetProtoRevNumberOfTradesRequestAmino): _64.QueryGetProtoRevNumberOfTradesRequest;
                toAmino(_: _64.QueryGetProtoRevNumberOfTradesRequest): _64.QueryGetProtoRevNumberOfTradesRequestAmino;
                fromAminoMsg(object: _64.QueryGetProtoRevNumberOfTradesRequestAminoMsg): _64.QueryGetProtoRevNumberOfTradesRequest;
                toAminoMsg(message: _64.QueryGetProtoRevNumberOfTradesRequest): _64.QueryGetProtoRevNumberOfTradesRequestAminoMsg;
                fromProtoMsg(message: _64.QueryGetProtoRevNumberOfTradesRequestProtoMsg): _64.QueryGetProtoRevNumberOfTradesRequest;
                toProto(message: _64.QueryGetProtoRevNumberOfTradesRequest): Uint8Array;
                toProtoMsg(message: _64.QueryGetProtoRevNumberOfTradesRequest): _64.QueryGetProtoRevNumberOfTradesRequestProtoMsg;
            };
            QueryGetProtoRevNumberOfTradesResponse: {
                typeUrl: string;
                encode(message: _64.QueryGetProtoRevNumberOfTradesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _64.QueryGetProtoRevNumberOfTradesResponse;
                fromPartial(object: Partial<_64.QueryGetProtoRevNumberOfTradesResponse>): _64.QueryGetProtoRevNumberOfTradesResponse;
                fromAmino(object: _64.QueryGetProtoRevNumberOfTradesResponseAmino): _64.QueryGetProtoRevNumberOfTradesResponse;
                toAmino(message: _64.QueryGetProtoRevNumberOfTradesResponse): _64.QueryGetProtoRevNumberOfTradesResponseAmino;
                fromAminoMsg(object: _64.QueryGetProtoRevNumberOfTradesResponseAminoMsg): _64.QueryGetProtoRevNumberOfTradesResponse;
                toAminoMsg(message: _64.QueryGetProtoRevNumberOfTradesResponse): _64.QueryGetProtoRevNumberOfTradesResponseAminoMsg;
                fromProtoMsg(message: _64.QueryGetProtoRevNumberOfTradesResponseProtoMsg): _64.QueryGetProtoRevNumberOfTradesResponse;
                toProto(message: _64.QueryGetProtoRevNumberOfTradesResponse): Uint8Array;
                toProtoMsg(message: _64.QueryGetProtoRevNumberOfTradesResponse): _64.QueryGetProtoRevNumberOfTradesResponseProtoMsg;
            };
            QueryGetProtoRevProfitsByDenomRequest: {
                typeUrl: string;
                encode(message: _64.QueryGetProtoRevProfitsByDenomRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _64.QueryGetProtoRevProfitsByDenomRequest;
                fromPartial(object: Partial<_64.QueryGetProtoRevProfitsByDenomRequest>): _64.QueryGetProtoRevProfitsByDenomRequest;
                fromAmino(object: _64.QueryGetProtoRevProfitsByDenomRequestAmino): _64.QueryGetProtoRevProfitsByDenomRequest;
                toAmino(message: _64.QueryGetProtoRevProfitsByDenomRequest): _64.QueryGetProtoRevProfitsByDenomRequestAmino;
                fromAminoMsg(object: _64.QueryGetProtoRevProfitsByDenomRequestAminoMsg): _64.QueryGetProtoRevProfitsByDenomRequest;
                toAminoMsg(message: _64.QueryGetProtoRevProfitsByDenomRequest): _64.QueryGetProtoRevProfitsByDenomRequestAminoMsg;
                fromProtoMsg(message: _64.QueryGetProtoRevProfitsByDenomRequestProtoMsg): _64.QueryGetProtoRevProfitsByDenomRequest;
                toProto(message: _64.QueryGetProtoRevProfitsByDenomRequest): Uint8Array;
                toProtoMsg(message: _64.QueryGetProtoRevProfitsByDenomRequest): _64.QueryGetProtoRevProfitsByDenomRequestProtoMsg;
            };
            QueryGetProtoRevProfitsByDenomResponse: {
                typeUrl: string;
                encode(message: _64.QueryGetProtoRevProfitsByDenomResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _64.QueryGetProtoRevProfitsByDenomResponse;
                fromPartial(object: Partial<_64.QueryGetProtoRevProfitsByDenomResponse>): _64.QueryGetProtoRevProfitsByDenomResponse;
                fromAmino(object: _64.QueryGetProtoRevProfitsByDenomResponseAmino): _64.QueryGetProtoRevProfitsByDenomResponse;
                toAmino(message: _64.QueryGetProtoRevProfitsByDenomResponse): _64.QueryGetProtoRevProfitsByDenomResponseAmino;
                fromAminoMsg(object: _64.QueryGetProtoRevProfitsByDenomResponseAminoMsg): _64.QueryGetProtoRevProfitsByDenomResponse;
                toAminoMsg(message: _64.QueryGetProtoRevProfitsByDenomResponse): _64.QueryGetProtoRevProfitsByDenomResponseAminoMsg;
                fromProtoMsg(message: _64.QueryGetProtoRevProfitsByDenomResponseProtoMsg): _64.QueryGetProtoRevProfitsByDenomResponse;
                toProto(message: _64.QueryGetProtoRevProfitsByDenomResponse): Uint8Array;
                toProtoMsg(message: _64.QueryGetProtoRevProfitsByDenomResponse): _64.QueryGetProtoRevProfitsByDenomResponseProtoMsg;
            };
            QueryGetProtoRevAllProfitsRequest: {
                typeUrl: string;
                encode(_: _64.QueryGetProtoRevAllProfitsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _64.QueryGetProtoRevAllProfitsRequest;
                fromPartial(_: Partial<_64.QueryGetProtoRevAllProfitsRequest>): _64.QueryGetProtoRevAllProfitsRequest;
                fromAmino(_: _64.QueryGetProtoRevAllProfitsRequestAmino): _64.QueryGetProtoRevAllProfitsRequest;
                toAmino(_: _64.QueryGetProtoRevAllProfitsRequest): _64.QueryGetProtoRevAllProfitsRequestAmino;
                fromAminoMsg(object: _64.QueryGetProtoRevAllProfitsRequestAminoMsg): _64.QueryGetProtoRevAllProfitsRequest;
                toAminoMsg(message: _64.QueryGetProtoRevAllProfitsRequest): _64.QueryGetProtoRevAllProfitsRequestAminoMsg;
                fromProtoMsg(message: _64.QueryGetProtoRevAllProfitsRequestProtoMsg): _64.QueryGetProtoRevAllProfitsRequest;
                toProto(message: _64.QueryGetProtoRevAllProfitsRequest): Uint8Array;
                toProtoMsg(message: _64.QueryGetProtoRevAllProfitsRequest): _64.QueryGetProtoRevAllProfitsRequestProtoMsg;
            };
            QueryGetProtoRevAllProfitsResponse: {
                typeUrl: string;
                encode(message: _64.QueryGetProtoRevAllProfitsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _64.QueryGetProtoRevAllProfitsResponse;
                fromPartial(object: Partial<_64.QueryGetProtoRevAllProfitsResponse>): _64.QueryGetProtoRevAllProfitsResponse;
                fromAmino(object: _64.QueryGetProtoRevAllProfitsResponseAmino): _64.QueryGetProtoRevAllProfitsResponse;
                toAmino(message: _64.QueryGetProtoRevAllProfitsResponse): _64.QueryGetProtoRevAllProfitsResponseAmino;
                fromAminoMsg(object: _64.QueryGetProtoRevAllProfitsResponseAminoMsg): _64.QueryGetProtoRevAllProfitsResponse;
                toAminoMsg(message: _64.QueryGetProtoRevAllProfitsResponse): _64.QueryGetProtoRevAllProfitsResponseAminoMsg;
                fromProtoMsg(message: _64.QueryGetProtoRevAllProfitsResponseProtoMsg): _64.QueryGetProtoRevAllProfitsResponse;
                toProto(message: _64.QueryGetProtoRevAllProfitsResponse): Uint8Array;
                toProtoMsg(message: _64.QueryGetProtoRevAllProfitsResponse): _64.QueryGetProtoRevAllProfitsResponseProtoMsg;
            };
            QueryGetProtoRevStatisticsByRouteRequest: {
                typeUrl: string;
                encode(message: _64.QueryGetProtoRevStatisticsByRouteRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _64.QueryGetProtoRevStatisticsByRouteRequest;
                fromPartial(object: Partial<_64.QueryGetProtoRevStatisticsByRouteRequest>): _64.QueryGetProtoRevStatisticsByRouteRequest;
                fromAmino(object: _64.QueryGetProtoRevStatisticsByRouteRequestAmino): _64.QueryGetProtoRevStatisticsByRouteRequest;
                toAmino(message: _64.QueryGetProtoRevStatisticsByRouteRequest): _64.QueryGetProtoRevStatisticsByRouteRequestAmino;
                fromAminoMsg(object: _64.QueryGetProtoRevStatisticsByRouteRequestAminoMsg): _64.QueryGetProtoRevStatisticsByRouteRequest;
                toAminoMsg(message: _64.QueryGetProtoRevStatisticsByRouteRequest): _64.QueryGetProtoRevStatisticsByRouteRequestAminoMsg;
                fromProtoMsg(message: _64.QueryGetProtoRevStatisticsByRouteRequestProtoMsg): _64.QueryGetProtoRevStatisticsByRouteRequest;
                toProto(message: _64.QueryGetProtoRevStatisticsByRouteRequest): Uint8Array;
                toProtoMsg(message: _64.QueryGetProtoRevStatisticsByRouteRequest): _64.QueryGetProtoRevStatisticsByRouteRequestProtoMsg;
            };
            QueryGetProtoRevStatisticsByRouteResponse: {
                typeUrl: string;
                encode(message: _64.QueryGetProtoRevStatisticsByRouteResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _64.QueryGetProtoRevStatisticsByRouteResponse;
                fromPartial(object: Partial<_64.QueryGetProtoRevStatisticsByRouteResponse>): _64.QueryGetProtoRevStatisticsByRouteResponse;
                fromAmino(object: _64.QueryGetProtoRevStatisticsByRouteResponseAmino): _64.QueryGetProtoRevStatisticsByRouteResponse;
                toAmino(message: _64.QueryGetProtoRevStatisticsByRouteResponse): _64.QueryGetProtoRevStatisticsByRouteResponseAmino;
                fromAminoMsg(object: _64.QueryGetProtoRevStatisticsByRouteResponseAminoMsg): _64.QueryGetProtoRevStatisticsByRouteResponse;
                toAminoMsg(message: _64.QueryGetProtoRevStatisticsByRouteResponse): _64.QueryGetProtoRevStatisticsByRouteResponseAminoMsg;
                fromProtoMsg(message: _64.QueryGetProtoRevStatisticsByRouteResponseProtoMsg): _64.QueryGetProtoRevStatisticsByRouteResponse;
                toProto(message: _64.QueryGetProtoRevStatisticsByRouteResponse): Uint8Array;
                toProtoMsg(message: _64.QueryGetProtoRevStatisticsByRouteResponse): _64.QueryGetProtoRevStatisticsByRouteResponseProtoMsg;
            };
            QueryGetProtoRevAllRouteStatisticsRequest: {
                typeUrl: string;
                encode(_: _64.QueryGetProtoRevAllRouteStatisticsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _64.QueryGetProtoRevAllRouteStatisticsRequest;
                fromPartial(_: Partial<_64.QueryGetProtoRevAllRouteStatisticsRequest>): _64.QueryGetProtoRevAllRouteStatisticsRequest;
                fromAmino(_: _64.QueryGetProtoRevAllRouteStatisticsRequestAmino): _64.QueryGetProtoRevAllRouteStatisticsRequest;
                toAmino(_: _64.QueryGetProtoRevAllRouteStatisticsRequest): _64.QueryGetProtoRevAllRouteStatisticsRequestAmino;
                fromAminoMsg(object: _64.QueryGetProtoRevAllRouteStatisticsRequestAminoMsg): _64.QueryGetProtoRevAllRouteStatisticsRequest;
                toAminoMsg(message: _64.QueryGetProtoRevAllRouteStatisticsRequest): _64.QueryGetProtoRevAllRouteStatisticsRequestAminoMsg;
                fromProtoMsg(message: _64.QueryGetProtoRevAllRouteStatisticsRequestProtoMsg): _64.QueryGetProtoRevAllRouteStatisticsRequest;
                toProto(message: _64.QueryGetProtoRevAllRouteStatisticsRequest): Uint8Array;
                toProtoMsg(message: _64.QueryGetProtoRevAllRouteStatisticsRequest): _64.QueryGetProtoRevAllRouteStatisticsRequestProtoMsg;
            };
            QueryGetProtoRevAllRouteStatisticsResponse: {
                typeUrl: string;
                encode(message: _64.QueryGetProtoRevAllRouteStatisticsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _64.QueryGetProtoRevAllRouteStatisticsResponse;
                fromPartial(object: Partial<_64.QueryGetProtoRevAllRouteStatisticsResponse>): _64.QueryGetProtoRevAllRouteStatisticsResponse;
                fromAmino(object: _64.QueryGetProtoRevAllRouteStatisticsResponseAmino): _64.QueryGetProtoRevAllRouteStatisticsResponse;
                toAmino(message: _64.QueryGetProtoRevAllRouteStatisticsResponse): _64.QueryGetProtoRevAllRouteStatisticsResponseAmino;
                fromAminoMsg(object: _64.QueryGetProtoRevAllRouteStatisticsResponseAminoMsg): _64.QueryGetProtoRevAllRouteStatisticsResponse;
                toAminoMsg(message: _64.QueryGetProtoRevAllRouteStatisticsResponse): _64.QueryGetProtoRevAllRouteStatisticsResponseAminoMsg;
                fromProtoMsg(message: _64.QueryGetProtoRevAllRouteStatisticsResponseProtoMsg): _64.QueryGetProtoRevAllRouteStatisticsResponse;
                toProto(message: _64.QueryGetProtoRevAllRouteStatisticsResponse): Uint8Array;
                toProtoMsg(message: _64.QueryGetProtoRevAllRouteStatisticsResponse): _64.QueryGetProtoRevAllRouteStatisticsResponseProtoMsg;
            };
            QueryGetProtoRevTokenPairArbRoutesRequest: {
                typeUrl: string;
                encode(_: _64.QueryGetProtoRevTokenPairArbRoutesRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _64.QueryGetProtoRevTokenPairArbRoutesRequest;
                fromPartial(_: Partial<_64.QueryGetProtoRevTokenPairArbRoutesRequest>): _64.QueryGetProtoRevTokenPairArbRoutesRequest;
                fromAmino(_: _64.QueryGetProtoRevTokenPairArbRoutesRequestAmino): _64.QueryGetProtoRevTokenPairArbRoutesRequest;
                toAmino(_: _64.QueryGetProtoRevTokenPairArbRoutesRequest): _64.QueryGetProtoRevTokenPairArbRoutesRequestAmino;
                fromAminoMsg(object: _64.QueryGetProtoRevTokenPairArbRoutesRequestAminoMsg): _64.QueryGetProtoRevTokenPairArbRoutesRequest;
                toAminoMsg(message: _64.QueryGetProtoRevTokenPairArbRoutesRequest): _64.QueryGetProtoRevTokenPairArbRoutesRequestAminoMsg;
                fromProtoMsg(message: _64.QueryGetProtoRevTokenPairArbRoutesRequestProtoMsg): _64.QueryGetProtoRevTokenPairArbRoutesRequest;
                toProto(message: _64.QueryGetProtoRevTokenPairArbRoutesRequest): Uint8Array;
                toProtoMsg(message: _64.QueryGetProtoRevTokenPairArbRoutesRequest): _64.QueryGetProtoRevTokenPairArbRoutesRequestProtoMsg;
            };
            QueryGetProtoRevTokenPairArbRoutesResponse: {
                typeUrl: string;
                encode(message: _64.QueryGetProtoRevTokenPairArbRoutesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _64.QueryGetProtoRevTokenPairArbRoutesResponse;
                fromPartial(object: Partial<_64.QueryGetProtoRevTokenPairArbRoutesResponse>): _64.QueryGetProtoRevTokenPairArbRoutesResponse;
                fromAmino(object: _64.QueryGetProtoRevTokenPairArbRoutesResponseAmino): _64.QueryGetProtoRevTokenPairArbRoutesResponse;
                toAmino(message: _64.QueryGetProtoRevTokenPairArbRoutesResponse): _64.QueryGetProtoRevTokenPairArbRoutesResponseAmino;
                fromAminoMsg(object: _64.QueryGetProtoRevTokenPairArbRoutesResponseAminoMsg): _64.QueryGetProtoRevTokenPairArbRoutesResponse;
                toAminoMsg(message: _64.QueryGetProtoRevTokenPairArbRoutesResponse): _64.QueryGetProtoRevTokenPairArbRoutesResponseAminoMsg;
                fromProtoMsg(message: _64.QueryGetProtoRevTokenPairArbRoutesResponseProtoMsg): _64.QueryGetProtoRevTokenPairArbRoutesResponse;
                toProto(message: _64.QueryGetProtoRevTokenPairArbRoutesResponse): Uint8Array;
                toProtoMsg(message: _64.QueryGetProtoRevTokenPairArbRoutesResponse): _64.QueryGetProtoRevTokenPairArbRoutesResponseProtoMsg;
            };
            QueryGetProtoRevAdminAccountRequest: {
                typeUrl: string;
                encode(_: _64.QueryGetProtoRevAdminAccountRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _64.QueryGetProtoRevAdminAccountRequest;
                fromPartial(_: Partial<_64.QueryGetProtoRevAdminAccountRequest>): _64.QueryGetProtoRevAdminAccountRequest;
                fromAmino(_: _64.QueryGetProtoRevAdminAccountRequestAmino): _64.QueryGetProtoRevAdminAccountRequest;
                toAmino(_: _64.QueryGetProtoRevAdminAccountRequest): _64.QueryGetProtoRevAdminAccountRequestAmino;
                fromAminoMsg(object: _64.QueryGetProtoRevAdminAccountRequestAminoMsg): _64.QueryGetProtoRevAdminAccountRequest;
                toAminoMsg(message: _64.QueryGetProtoRevAdminAccountRequest): _64.QueryGetProtoRevAdminAccountRequestAminoMsg;
                fromProtoMsg(message: _64.QueryGetProtoRevAdminAccountRequestProtoMsg): _64.QueryGetProtoRevAdminAccountRequest;
                toProto(message: _64.QueryGetProtoRevAdminAccountRequest): Uint8Array;
                toProtoMsg(message: _64.QueryGetProtoRevAdminAccountRequest): _64.QueryGetProtoRevAdminAccountRequestProtoMsg;
            };
            QueryGetProtoRevAdminAccountResponse: {
                typeUrl: string;
                encode(message: _64.QueryGetProtoRevAdminAccountResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _64.QueryGetProtoRevAdminAccountResponse;
                fromPartial(object: Partial<_64.QueryGetProtoRevAdminAccountResponse>): _64.QueryGetProtoRevAdminAccountResponse;
                fromAmino(object: _64.QueryGetProtoRevAdminAccountResponseAmino): _64.QueryGetProtoRevAdminAccountResponse;
                toAmino(message: _64.QueryGetProtoRevAdminAccountResponse): _64.QueryGetProtoRevAdminAccountResponseAmino;
                fromAminoMsg(object: _64.QueryGetProtoRevAdminAccountResponseAminoMsg): _64.QueryGetProtoRevAdminAccountResponse;
                toAminoMsg(message: _64.QueryGetProtoRevAdminAccountResponse): _64.QueryGetProtoRevAdminAccountResponseAminoMsg;
                fromProtoMsg(message: _64.QueryGetProtoRevAdminAccountResponseProtoMsg): _64.QueryGetProtoRevAdminAccountResponse;
                toProto(message: _64.QueryGetProtoRevAdminAccountResponse): Uint8Array;
                toProtoMsg(message: _64.QueryGetProtoRevAdminAccountResponse): _64.QueryGetProtoRevAdminAccountResponseProtoMsg;
            };
            QueryGetProtoRevDeveloperAccountRequest: {
                typeUrl: string;
                encode(_: _64.QueryGetProtoRevDeveloperAccountRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _64.QueryGetProtoRevDeveloperAccountRequest;
                fromPartial(_: Partial<_64.QueryGetProtoRevDeveloperAccountRequest>): _64.QueryGetProtoRevDeveloperAccountRequest;
                fromAmino(_: _64.QueryGetProtoRevDeveloperAccountRequestAmino): _64.QueryGetProtoRevDeveloperAccountRequest;
                toAmino(_: _64.QueryGetProtoRevDeveloperAccountRequest): _64.QueryGetProtoRevDeveloperAccountRequestAmino;
                fromAminoMsg(object: _64.QueryGetProtoRevDeveloperAccountRequestAminoMsg): _64.QueryGetProtoRevDeveloperAccountRequest;
                toAminoMsg(message: _64.QueryGetProtoRevDeveloperAccountRequest): _64.QueryGetProtoRevDeveloperAccountRequestAminoMsg;
                fromProtoMsg(message: _64.QueryGetProtoRevDeveloperAccountRequestProtoMsg): _64.QueryGetProtoRevDeveloperAccountRequest;
                toProto(message: _64.QueryGetProtoRevDeveloperAccountRequest): Uint8Array;
                toProtoMsg(message: _64.QueryGetProtoRevDeveloperAccountRequest): _64.QueryGetProtoRevDeveloperAccountRequestProtoMsg;
            };
            QueryGetProtoRevDeveloperAccountResponse: {
                typeUrl: string;
                encode(message: _64.QueryGetProtoRevDeveloperAccountResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _64.QueryGetProtoRevDeveloperAccountResponse;
                fromPartial(object: Partial<_64.QueryGetProtoRevDeveloperAccountResponse>): _64.QueryGetProtoRevDeveloperAccountResponse;
                fromAmino(object: _64.QueryGetProtoRevDeveloperAccountResponseAmino): _64.QueryGetProtoRevDeveloperAccountResponse;
                toAmino(message: _64.QueryGetProtoRevDeveloperAccountResponse): _64.QueryGetProtoRevDeveloperAccountResponseAmino;
                fromAminoMsg(object: _64.QueryGetProtoRevDeveloperAccountResponseAminoMsg): _64.QueryGetProtoRevDeveloperAccountResponse;
                toAminoMsg(message: _64.QueryGetProtoRevDeveloperAccountResponse): _64.QueryGetProtoRevDeveloperAccountResponseAminoMsg;
                fromProtoMsg(message: _64.QueryGetProtoRevDeveloperAccountResponseProtoMsg): _64.QueryGetProtoRevDeveloperAccountResponse;
                toProto(message: _64.QueryGetProtoRevDeveloperAccountResponse): Uint8Array;
                toProtoMsg(message: _64.QueryGetProtoRevDeveloperAccountResponse): _64.QueryGetProtoRevDeveloperAccountResponseProtoMsg;
            };
            QueryGetProtoRevInfoByPoolTypeRequest: {
                typeUrl: string;
                encode(_: _64.QueryGetProtoRevInfoByPoolTypeRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _64.QueryGetProtoRevInfoByPoolTypeRequest;
                fromPartial(_: Partial<_64.QueryGetProtoRevInfoByPoolTypeRequest>): _64.QueryGetProtoRevInfoByPoolTypeRequest;
                fromAmino(_: _64.QueryGetProtoRevInfoByPoolTypeRequestAmino): _64.QueryGetProtoRevInfoByPoolTypeRequest;
                toAmino(_: _64.QueryGetProtoRevInfoByPoolTypeRequest): _64.QueryGetProtoRevInfoByPoolTypeRequestAmino;
                fromAminoMsg(object: _64.QueryGetProtoRevInfoByPoolTypeRequestAminoMsg): _64.QueryGetProtoRevInfoByPoolTypeRequest;
                toAminoMsg(message: _64.QueryGetProtoRevInfoByPoolTypeRequest): _64.QueryGetProtoRevInfoByPoolTypeRequestAminoMsg;
                fromProtoMsg(message: _64.QueryGetProtoRevInfoByPoolTypeRequestProtoMsg): _64.QueryGetProtoRevInfoByPoolTypeRequest;
                toProto(message: _64.QueryGetProtoRevInfoByPoolTypeRequest): Uint8Array;
                toProtoMsg(message: _64.QueryGetProtoRevInfoByPoolTypeRequest): _64.QueryGetProtoRevInfoByPoolTypeRequestProtoMsg;
            };
            QueryGetProtoRevInfoByPoolTypeResponse: {
                typeUrl: string;
                encode(message: _64.QueryGetProtoRevInfoByPoolTypeResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _64.QueryGetProtoRevInfoByPoolTypeResponse;
                fromPartial(object: Partial<_64.QueryGetProtoRevInfoByPoolTypeResponse>): _64.QueryGetProtoRevInfoByPoolTypeResponse;
                fromAmino(object: _64.QueryGetProtoRevInfoByPoolTypeResponseAmino): _64.QueryGetProtoRevInfoByPoolTypeResponse;
                toAmino(message: _64.QueryGetProtoRevInfoByPoolTypeResponse): _64.QueryGetProtoRevInfoByPoolTypeResponseAmino;
                fromAminoMsg(object: _64.QueryGetProtoRevInfoByPoolTypeResponseAminoMsg): _64.QueryGetProtoRevInfoByPoolTypeResponse;
                toAminoMsg(message: _64.QueryGetProtoRevInfoByPoolTypeResponse): _64.QueryGetProtoRevInfoByPoolTypeResponseAminoMsg;
                fromProtoMsg(message: _64.QueryGetProtoRevInfoByPoolTypeResponseProtoMsg): _64.QueryGetProtoRevInfoByPoolTypeResponse;
                toProto(message: _64.QueryGetProtoRevInfoByPoolTypeResponse): Uint8Array;
                toProtoMsg(message: _64.QueryGetProtoRevInfoByPoolTypeResponse): _64.QueryGetProtoRevInfoByPoolTypeResponseProtoMsg;
            };
            QueryGetProtoRevMaxPoolPointsPerBlockRequest: {
                typeUrl: string;
                encode(_: _64.QueryGetProtoRevMaxPoolPointsPerBlockRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _64.QueryGetProtoRevMaxPoolPointsPerBlockRequest;
                fromPartial(_: Partial<_64.QueryGetProtoRevMaxPoolPointsPerBlockRequest>): _64.QueryGetProtoRevMaxPoolPointsPerBlockRequest;
                fromAmino(_: _64.QueryGetProtoRevMaxPoolPointsPerBlockRequestAmino): _64.QueryGetProtoRevMaxPoolPointsPerBlockRequest;
                toAmino(_: _64.QueryGetProtoRevMaxPoolPointsPerBlockRequest): _64.QueryGetProtoRevMaxPoolPointsPerBlockRequestAmino;
                fromAminoMsg(object: _64.QueryGetProtoRevMaxPoolPointsPerBlockRequestAminoMsg): _64.QueryGetProtoRevMaxPoolPointsPerBlockRequest;
                toAminoMsg(message: _64.QueryGetProtoRevMaxPoolPointsPerBlockRequest): _64.QueryGetProtoRevMaxPoolPointsPerBlockRequestAminoMsg;
                fromProtoMsg(message: _64.QueryGetProtoRevMaxPoolPointsPerBlockRequestProtoMsg): _64.QueryGetProtoRevMaxPoolPointsPerBlockRequest;
                toProto(message: _64.QueryGetProtoRevMaxPoolPointsPerBlockRequest): Uint8Array;
                toProtoMsg(message: _64.QueryGetProtoRevMaxPoolPointsPerBlockRequest): _64.QueryGetProtoRevMaxPoolPointsPerBlockRequestProtoMsg;
            };
            QueryGetProtoRevMaxPoolPointsPerBlockResponse: {
                typeUrl: string;
                encode(message: _64.QueryGetProtoRevMaxPoolPointsPerBlockResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _64.QueryGetProtoRevMaxPoolPointsPerBlockResponse;
                fromPartial(object: Partial<_64.QueryGetProtoRevMaxPoolPointsPerBlockResponse>): _64.QueryGetProtoRevMaxPoolPointsPerBlockResponse;
                fromAmino(object: _64.QueryGetProtoRevMaxPoolPointsPerBlockResponseAmino): _64.QueryGetProtoRevMaxPoolPointsPerBlockResponse;
                toAmino(message: _64.QueryGetProtoRevMaxPoolPointsPerBlockResponse): _64.QueryGetProtoRevMaxPoolPointsPerBlockResponseAmino;
                fromAminoMsg(object: _64.QueryGetProtoRevMaxPoolPointsPerBlockResponseAminoMsg): _64.QueryGetProtoRevMaxPoolPointsPerBlockResponse;
                toAminoMsg(message: _64.QueryGetProtoRevMaxPoolPointsPerBlockResponse): _64.QueryGetProtoRevMaxPoolPointsPerBlockResponseAminoMsg;
                fromProtoMsg(message: _64.QueryGetProtoRevMaxPoolPointsPerBlockResponseProtoMsg): _64.QueryGetProtoRevMaxPoolPointsPerBlockResponse;
                toProto(message: _64.QueryGetProtoRevMaxPoolPointsPerBlockResponse): Uint8Array;
                toProtoMsg(message: _64.QueryGetProtoRevMaxPoolPointsPerBlockResponse): _64.QueryGetProtoRevMaxPoolPointsPerBlockResponseProtoMsg;
            };
            QueryGetProtoRevMaxPoolPointsPerTxRequest: {
                typeUrl: string;
                encode(_: _64.QueryGetProtoRevMaxPoolPointsPerTxRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _64.QueryGetProtoRevMaxPoolPointsPerTxRequest;
                fromPartial(_: Partial<_64.QueryGetProtoRevMaxPoolPointsPerTxRequest>): _64.QueryGetProtoRevMaxPoolPointsPerTxRequest;
                fromAmino(_: _64.QueryGetProtoRevMaxPoolPointsPerTxRequestAmino): _64.QueryGetProtoRevMaxPoolPointsPerTxRequest;
                toAmino(_: _64.QueryGetProtoRevMaxPoolPointsPerTxRequest): _64.QueryGetProtoRevMaxPoolPointsPerTxRequestAmino;
                fromAminoMsg(object: _64.QueryGetProtoRevMaxPoolPointsPerTxRequestAminoMsg): _64.QueryGetProtoRevMaxPoolPointsPerTxRequest;
                toAminoMsg(message: _64.QueryGetProtoRevMaxPoolPointsPerTxRequest): _64.QueryGetProtoRevMaxPoolPointsPerTxRequestAminoMsg;
                fromProtoMsg(message: _64.QueryGetProtoRevMaxPoolPointsPerTxRequestProtoMsg): _64.QueryGetProtoRevMaxPoolPointsPerTxRequest;
                toProto(message: _64.QueryGetProtoRevMaxPoolPointsPerTxRequest): Uint8Array;
                toProtoMsg(message: _64.QueryGetProtoRevMaxPoolPointsPerTxRequest): _64.QueryGetProtoRevMaxPoolPointsPerTxRequestProtoMsg;
            };
            QueryGetProtoRevMaxPoolPointsPerTxResponse: {
                typeUrl: string;
                encode(message: _64.QueryGetProtoRevMaxPoolPointsPerTxResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _64.QueryGetProtoRevMaxPoolPointsPerTxResponse;
                fromPartial(object: Partial<_64.QueryGetProtoRevMaxPoolPointsPerTxResponse>): _64.QueryGetProtoRevMaxPoolPointsPerTxResponse;
                fromAmino(object: _64.QueryGetProtoRevMaxPoolPointsPerTxResponseAmino): _64.QueryGetProtoRevMaxPoolPointsPerTxResponse;
                toAmino(message: _64.QueryGetProtoRevMaxPoolPointsPerTxResponse): _64.QueryGetProtoRevMaxPoolPointsPerTxResponseAmino;
                fromAminoMsg(object: _64.QueryGetProtoRevMaxPoolPointsPerTxResponseAminoMsg): _64.QueryGetProtoRevMaxPoolPointsPerTxResponse;
                toAminoMsg(message: _64.QueryGetProtoRevMaxPoolPointsPerTxResponse): _64.QueryGetProtoRevMaxPoolPointsPerTxResponseAminoMsg;
                fromProtoMsg(message: _64.QueryGetProtoRevMaxPoolPointsPerTxResponseProtoMsg): _64.QueryGetProtoRevMaxPoolPointsPerTxResponse;
                toProto(message: _64.QueryGetProtoRevMaxPoolPointsPerTxResponse): Uint8Array;
                toProtoMsg(message: _64.QueryGetProtoRevMaxPoolPointsPerTxResponse): _64.QueryGetProtoRevMaxPoolPointsPerTxResponseProtoMsg;
            };
            QueryGetProtoRevBaseDenomsRequest: {
                typeUrl: string;
                encode(_: _64.QueryGetProtoRevBaseDenomsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _64.QueryGetProtoRevBaseDenomsRequest;
                fromPartial(_: Partial<_64.QueryGetProtoRevBaseDenomsRequest>): _64.QueryGetProtoRevBaseDenomsRequest;
                fromAmino(_: _64.QueryGetProtoRevBaseDenomsRequestAmino): _64.QueryGetProtoRevBaseDenomsRequest;
                toAmino(_: _64.QueryGetProtoRevBaseDenomsRequest): _64.QueryGetProtoRevBaseDenomsRequestAmino;
                fromAminoMsg(object: _64.QueryGetProtoRevBaseDenomsRequestAminoMsg): _64.QueryGetProtoRevBaseDenomsRequest;
                toAminoMsg(message: _64.QueryGetProtoRevBaseDenomsRequest): _64.QueryGetProtoRevBaseDenomsRequestAminoMsg;
                fromProtoMsg(message: _64.QueryGetProtoRevBaseDenomsRequestProtoMsg): _64.QueryGetProtoRevBaseDenomsRequest;
                toProto(message: _64.QueryGetProtoRevBaseDenomsRequest): Uint8Array;
                toProtoMsg(message: _64.QueryGetProtoRevBaseDenomsRequest): _64.QueryGetProtoRevBaseDenomsRequestProtoMsg;
            };
            QueryGetProtoRevBaseDenomsResponse: {
                typeUrl: string;
                encode(message: _64.QueryGetProtoRevBaseDenomsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _64.QueryGetProtoRevBaseDenomsResponse;
                fromPartial(object: Partial<_64.QueryGetProtoRevBaseDenomsResponse>): _64.QueryGetProtoRevBaseDenomsResponse;
                fromAmino(object: _64.QueryGetProtoRevBaseDenomsResponseAmino): _64.QueryGetProtoRevBaseDenomsResponse;
                toAmino(message: _64.QueryGetProtoRevBaseDenomsResponse): _64.QueryGetProtoRevBaseDenomsResponseAmino;
                fromAminoMsg(object: _64.QueryGetProtoRevBaseDenomsResponseAminoMsg): _64.QueryGetProtoRevBaseDenomsResponse;
                toAminoMsg(message: _64.QueryGetProtoRevBaseDenomsResponse): _64.QueryGetProtoRevBaseDenomsResponseAminoMsg;
                fromProtoMsg(message: _64.QueryGetProtoRevBaseDenomsResponseProtoMsg): _64.QueryGetProtoRevBaseDenomsResponse;
                toProto(message: _64.QueryGetProtoRevBaseDenomsResponse): Uint8Array;
                toProtoMsg(message: _64.QueryGetProtoRevBaseDenomsResponse): _64.QueryGetProtoRevBaseDenomsResponseProtoMsg;
            };
            QueryGetProtoRevEnabledRequest: {
                typeUrl: string;
                encode(_: _64.QueryGetProtoRevEnabledRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _64.QueryGetProtoRevEnabledRequest;
                fromPartial(_: Partial<_64.QueryGetProtoRevEnabledRequest>): _64.QueryGetProtoRevEnabledRequest;
                fromAmino(_: _64.QueryGetProtoRevEnabledRequestAmino): _64.QueryGetProtoRevEnabledRequest;
                toAmino(_: _64.QueryGetProtoRevEnabledRequest): _64.QueryGetProtoRevEnabledRequestAmino;
                fromAminoMsg(object: _64.QueryGetProtoRevEnabledRequestAminoMsg): _64.QueryGetProtoRevEnabledRequest;
                toAminoMsg(message: _64.QueryGetProtoRevEnabledRequest): _64.QueryGetProtoRevEnabledRequestAminoMsg;
                fromProtoMsg(message: _64.QueryGetProtoRevEnabledRequestProtoMsg): _64.QueryGetProtoRevEnabledRequest;
                toProto(message: _64.QueryGetProtoRevEnabledRequest): Uint8Array;
                toProtoMsg(message: _64.QueryGetProtoRevEnabledRequest): _64.QueryGetProtoRevEnabledRequestProtoMsg;
            };
            QueryGetProtoRevEnabledResponse: {
                typeUrl: string;
                encode(message: _64.QueryGetProtoRevEnabledResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _64.QueryGetProtoRevEnabledResponse;
                fromPartial(object: Partial<_64.QueryGetProtoRevEnabledResponse>): _64.QueryGetProtoRevEnabledResponse;
                fromAmino(object: _64.QueryGetProtoRevEnabledResponseAmino): _64.QueryGetProtoRevEnabledResponse;
                toAmino(message: _64.QueryGetProtoRevEnabledResponse): _64.QueryGetProtoRevEnabledResponseAmino;
                fromAminoMsg(object: _64.QueryGetProtoRevEnabledResponseAminoMsg): _64.QueryGetProtoRevEnabledResponse;
                toAminoMsg(message: _64.QueryGetProtoRevEnabledResponse): _64.QueryGetProtoRevEnabledResponseAminoMsg;
                fromProtoMsg(message: _64.QueryGetProtoRevEnabledResponseProtoMsg): _64.QueryGetProtoRevEnabledResponse;
                toProto(message: _64.QueryGetProtoRevEnabledResponse): Uint8Array;
                toProtoMsg(message: _64.QueryGetProtoRevEnabledResponse): _64.QueryGetProtoRevEnabledResponseProtoMsg;
            };
            QueryGetProtoRevPoolRequest: {
                typeUrl: string;
                encode(message: _64.QueryGetProtoRevPoolRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _64.QueryGetProtoRevPoolRequest;
                fromPartial(object: Partial<_64.QueryGetProtoRevPoolRequest>): _64.QueryGetProtoRevPoolRequest;
                fromAmino(object: _64.QueryGetProtoRevPoolRequestAmino): _64.QueryGetProtoRevPoolRequest;
                toAmino(message: _64.QueryGetProtoRevPoolRequest): _64.QueryGetProtoRevPoolRequestAmino;
                fromAminoMsg(object: _64.QueryGetProtoRevPoolRequestAminoMsg): _64.QueryGetProtoRevPoolRequest;
                toAminoMsg(message: _64.QueryGetProtoRevPoolRequest): _64.QueryGetProtoRevPoolRequestAminoMsg;
                fromProtoMsg(message: _64.QueryGetProtoRevPoolRequestProtoMsg): _64.QueryGetProtoRevPoolRequest;
                toProto(message: _64.QueryGetProtoRevPoolRequest): Uint8Array;
                toProtoMsg(message: _64.QueryGetProtoRevPoolRequest): _64.QueryGetProtoRevPoolRequestProtoMsg;
            };
            QueryGetProtoRevPoolResponse: {
                typeUrl: string;
                encode(message: _64.QueryGetProtoRevPoolResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _64.QueryGetProtoRevPoolResponse;
                fromPartial(object: Partial<_64.QueryGetProtoRevPoolResponse>): _64.QueryGetProtoRevPoolResponse;
                fromAmino(object: _64.QueryGetProtoRevPoolResponseAmino): _64.QueryGetProtoRevPoolResponse;
                toAmino(message: _64.QueryGetProtoRevPoolResponse): _64.QueryGetProtoRevPoolResponseAmino;
                fromAminoMsg(object: _64.QueryGetProtoRevPoolResponseAminoMsg): _64.QueryGetProtoRevPoolResponse;
                toAminoMsg(message: _64.QueryGetProtoRevPoolResponse): _64.QueryGetProtoRevPoolResponseAminoMsg;
                fromProtoMsg(message: _64.QueryGetProtoRevPoolResponseProtoMsg): _64.QueryGetProtoRevPoolResponse;
                toProto(message: _64.QueryGetProtoRevPoolResponse): Uint8Array;
                toProtoMsg(message: _64.QueryGetProtoRevPoolResponse): _64.QueryGetProtoRevPoolResponseProtoMsg;
            };
            TokenPairArbRoutes: {
                typeUrl: string;
                encode(message: _63.TokenPairArbRoutes, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _63.TokenPairArbRoutes;
                fromPartial(object: Partial<_63.TokenPairArbRoutes>): _63.TokenPairArbRoutes;
                fromAmino(object: _63.TokenPairArbRoutesAmino): _63.TokenPairArbRoutes;
                toAmino(message: _63.TokenPairArbRoutes): _63.TokenPairArbRoutesAmino;
                fromAminoMsg(object: _63.TokenPairArbRoutesAminoMsg): _63.TokenPairArbRoutes;
                toAminoMsg(message: _63.TokenPairArbRoutes): _63.TokenPairArbRoutesAminoMsg;
                fromProtoMsg(message: _63.TokenPairArbRoutesProtoMsg): _63.TokenPairArbRoutes;
                toProto(message: _63.TokenPairArbRoutes): Uint8Array;
                toProtoMsg(message: _63.TokenPairArbRoutes): _63.TokenPairArbRoutesProtoMsg;
            };
            Route: {
                typeUrl: string;
                encode(message: _63.Route, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _63.Route;
                fromPartial(object: Partial<_63.Route>): _63.Route;
                fromAmino(object: _63.RouteAmino): _63.Route;
                toAmino(message: _63.Route): _63.RouteAmino;
                fromAminoMsg(object: _63.RouteAminoMsg): _63.Route;
                toAminoMsg(message: _63.Route): _63.RouteAminoMsg;
                fromProtoMsg(message: _63.RouteProtoMsg): _63.Route;
                toProto(message: _63.Route): Uint8Array;
                toProtoMsg(message: _63.Route): _63.RouteProtoMsg;
            };
            Trade: {
                typeUrl: string;
                encode(message: _63.Trade, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _63.Trade;
                fromPartial(object: Partial<_63.Trade>): _63.Trade;
                fromAmino(object: _63.TradeAmino): _63.Trade;
                toAmino(message: _63.Trade): _63.TradeAmino;
                fromAminoMsg(object: _63.TradeAminoMsg): _63.Trade;
                toAminoMsg(message: _63.Trade): _63.TradeAminoMsg;
                fromProtoMsg(message: _63.TradeProtoMsg): _63.Trade;
                toProto(message: _63.Trade): Uint8Array;
                toProtoMsg(message: _63.Trade): _63.TradeProtoMsg;
            };
            RouteStatistics: {
                typeUrl: string;
                encode(message: _63.RouteStatistics, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _63.RouteStatistics;
                fromPartial(object: Partial<_63.RouteStatistics>): _63.RouteStatistics;
                fromAmino(object: _63.RouteStatisticsAmino): _63.RouteStatistics;
                toAmino(message: _63.RouteStatistics): _63.RouteStatisticsAmino;
                fromAminoMsg(object: _63.RouteStatisticsAminoMsg): _63.RouteStatistics;
                toAminoMsg(message: _63.RouteStatistics): _63.RouteStatisticsAminoMsg;
                fromProtoMsg(message: _63.RouteStatisticsProtoMsg): _63.RouteStatistics;
                toProto(message: _63.RouteStatistics): Uint8Array;
                toProtoMsg(message: _63.RouteStatistics): _63.RouteStatisticsProtoMsg;
            };
            PoolWeights: {
                typeUrl: string;
                encode(message: _63.PoolWeights, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _63.PoolWeights;
                fromPartial(object: Partial<_63.PoolWeights>): _63.PoolWeights;
                fromAmino(object: _63.PoolWeightsAmino): _63.PoolWeights;
                toAmino(message: _63.PoolWeights): _63.PoolWeightsAmino;
                fromAminoMsg(object: _63.PoolWeightsAminoMsg): _63.PoolWeights;
                toAminoMsg(message: _63.PoolWeights): _63.PoolWeightsAminoMsg;
                fromProtoMsg(message: _63.PoolWeightsProtoMsg): _63.PoolWeights;
                toProto(message: _63.PoolWeights): Uint8Array;
                toProtoMsg(message: _63.PoolWeights): _63.PoolWeightsProtoMsg;
            };
            InfoByPoolType: {
                typeUrl: string;
                encode(message: _63.InfoByPoolType, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _63.InfoByPoolType;
                fromPartial(object: Partial<_63.InfoByPoolType>): _63.InfoByPoolType;
                fromAmino(object: _63.InfoByPoolTypeAmino): _63.InfoByPoolType;
                toAmino(message: _63.InfoByPoolType): _63.InfoByPoolTypeAmino;
                fromAminoMsg(object: _63.InfoByPoolTypeAminoMsg): _63.InfoByPoolType;
                toAminoMsg(message: _63.InfoByPoolType): _63.InfoByPoolTypeAminoMsg;
                fromProtoMsg(message: _63.InfoByPoolTypeProtoMsg): _63.InfoByPoolType;
                toProto(message: _63.InfoByPoolType): Uint8Array;
                toProtoMsg(message: _63.InfoByPoolType): _63.InfoByPoolTypeProtoMsg;
            };
            StablePoolInfo: {
                typeUrl: string;
                encode(message: _63.StablePoolInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _63.StablePoolInfo;
                fromPartial(object: Partial<_63.StablePoolInfo>): _63.StablePoolInfo;
                fromAmino(object: _63.StablePoolInfoAmino): _63.StablePoolInfo;
                toAmino(message: _63.StablePoolInfo): _63.StablePoolInfoAmino;
                fromAminoMsg(object: _63.StablePoolInfoAminoMsg): _63.StablePoolInfo;
                toAminoMsg(message: _63.StablePoolInfo): _63.StablePoolInfoAminoMsg;
                fromProtoMsg(message: _63.StablePoolInfoProtoMsg): _63.StablePoolInfo;
                toProto(message: _63.StablePoolInfo): Uint8Array;
                toProtoMsg(message: _63.StablePoolInfo): _63.StablePoolInfoProtoMsg;
            };
            BalancerPoolInfo: {
                typeUrl: string;
                encode(message: _63.BalancerPoolInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _63.BalancerPoolInfo;
                fromPartial(object: Partial<_63.BalancerPoolInfo>): _63.BalancerPoolInfo;
                fromAmino(object: _63.BalancerPoolInfoAmino): _63.BalancerPoolInfo;
                toAmino(message: _63.BalancerPoolInfo): _63.BalancerPoolInfoAmino;
                fromAminoMsg(object: _63.BalancerPoolInfoAminoMsg): _63.BalancerPoolInfo;
                toAminoMsg(message: _63.BalancerPoolInfo): _63.BalancerPoolInfoAminoMsg;
                fromProtoMsg(message: _63.BalancerPoolInfoProtoMsg): _63.BalancerPoolInfo;
                toProto(message: _63.BalancerPoolInfo): Uint8Array;
                toProtoMsg(message: _63.BalancerPoolInfo): _63.BalancerPoolInfoProtoMsg;
            };
            ConcentratedPoolInfo: {
                typeUrl: string;
                encode(message: _63.ConcentratedPoolInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _63.ConcentratedPoolInfo;
                fromPartial(object: Partial<_63.ConcentratedPoolInfo>): _63.ConcentratedPoolInfo;
                fromAmino(object: _63.ConcentratedPoolInfoAmino): _63.ConcentratedPoolInfo;
                toAmino(message: _63.ConcentratedPoolInfo): _63.ConcentratedPoolInfoAmino;
                fromAminoMsg(object: _63.ConcentratedPoolInfoAminoMsg): _63.ConcentratedPoolInfo;
                toAminoMsg(message: _63.ConcentratedPoolInfo): _63.ConcentratedPoolInfoAminoMsg;
                fromProtoMsg(message: _63.ConcentratedPoolInfoProtoMsg): _63.ConcentratedPoolInfo;
                toProto(message: _63.ConcentratedPoolInfo): Uint8Array;
                toProtoMsg(message: _63.ConcentratedPoolInfo): _63.ConcentratedPoolInfoProtoMsg;
            };
            CosmwasmPoolInfo: {
                typeUrl: string;
                encode(message: _63.CosmwasmPoolInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _63.CosmwasmPoolInfo;
                fromPartial(object: Partial<_63.CosmwasmPoolInfo>): _63.CosmwasmPoolInfo;
                fromAmino(object: _63.CosmwasmPoolInfoAmino): _63.CosmwasmPoolInfo;
                toAmino(message: _63.CosmwasmPoolInfo): _63.CosmwasmPoolInfoAmino;
                fromAminoMsg(object: _63.CosmwasmPoolInfoAminoMsg): _63.CosmwasmPoolInfo;
                toAminoMsg(message: _63.CosmwasmPoolInfo): _63.CosmwasmPoolInfoAminoMsg;
                fromProtoMsg(message: _63.CosmwasmPoolInfoProtoMsg): _63.CosmwasmPoolInfo;
                toProto(message: _63.CosmwasmPoolInfo): Uint8Array;
                toProtoMsg(message: _63.CosmwasmPoolInfo): _63.CosmwasmPoolInfoProtoMsg;
            };
            WeightMap: {
                typeUrl: string;
                encode(message: _63.WeightMap, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _63.WeightMap;
                fromPartial(object: Partial<_63.WeightMap>): _63.WeightMap;
                fromAmino(object: _63.WeightMapAmino): _63.WeightMap;
                toAmino(message: _63.WeightMap): _63.WeightMapAmino;
                fromAminoMsg(object: _63.WeightMapAminoMsg): _63.WeightMap;
                toAminoMsg(message: _63.WeightMap): _63.WeightMapAminoMsg;
                fromProtoMsg(message: _63.WeightMapProtoMsg): _63.WeightMap;
                toProto(message: _63.WeightMap): Uint8Array;
                toProtoMsg(message: _63.WeightMap): _63.WeightMapProtoMsg;
            };
            BaseDenom: {
                typeUrl: string;
                encode(message: _63.BaseDenom, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _63.BaseDenom;
                fromPartial(object: Partial<_63.BaseDenom>): _63.BaseDenom;
                fromAmino(object: _63.BaseDenomAmino): _63.BaseDenom;
                toAmino(message: _63.BaseDenom): _63.BaseDenomAmino;
                fromAminoMsg(object: _63.BaseDenomAminoMsg): _63.BaseDenom;
                toAminoMsg(message: _63.BaseDenom): _63.BaseDenomAminoMsg;
                fromProtoMsg(message: _63.BaseDenomProtoMsg): _63.BaseDenom;
                toProto(message: _63.BaseDenom): Uint8Array;
                toProtoMsg(message: _63.BaseDenom): _63.BaseDenomProtoMsg;
            };
            Params: {
                typeUrl: string;
                encode(message: _62.Params, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _62.Params;
                fromPartial(object: Partial<_62.Params>): _62.Params;
                fromAmino(object: _62.ParamsAmino): _62.Params;
                toAmino(message: _62.Params): _62.ParamsAmino;
                fromAminoMsg(object: _62.ParamsAminoMsg): _62.Params;
                toAminoMsg(message: _62.Params): _62.ParamsAminoMsg;
                fromProtoMsg(message: _62.ParamsProtoMsg): _62.Params;
                toProto(message: _62.Params): Uint8Array;
                toProtoMsg(message: _62.Params): _62.ParamsProtoMsg;
            };
            SetProtoRevEnabledProposal: {
                typeUrl: string;
                encode(message: _61.SetProtoRevEnabledProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _61.SetProtoRevEnabledProposal;
                fromPartial(object: Partial<_61.SetProtoRevEnabledProposal>): _61.SetProtoRevEnabledProposal;
                fromAmino(object: _61.SetProtoRevEnabledProposalAmino): _61.SetProtoRevEnabledProposal;
                toAmino(message: _61.SetProtoRevEnabledProposal): _61.SetProtoRevEnabledProposalAmino;
                fromAminoMsg(object: _61.SetProtoRevEnabledProposalAminoMsg): _61.SetProtoRevEnabledProposal;
                toAminoMsg(message: _61.SetProtoRevEnabledProposal): _61.SetProtoRevEnabledProposalAminoMsg;
                fromProtoMsg(message: _61.SetProtoRevEnabledProposalProtoMsg): _61.SetProtoRevEnabledProposal;
                toProto(message: _61.SetProtoRevEnabledProposal): Uint8Array;
                toProtoMsg(message: _61.SetProtoRevEnabledProposal): _61.SetProtoRevEnabledProposalProtoMsg;
            };
            SetProtoRevAdminAccountProposal: {
                typeUrl: string;
                encode(message: _61.SetProtoRevAdminAccountProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _61.SetProtoRevAdminAccountProposal;
                fromPartial(object: Partial<_61.SetProtoRevAdminAccountProposal>): _61.SetProtoRevAdminAccountProposal;
                fromAmino(object: _61.SetProtoRevAdminAccountProposalAmino): _61.SetProtoRevAdminAccountProposal;
                toAmino(message: _61.SetProtoRevAdminAccountProposal): _61.SetProtoRevAdminAccountProposalAmino;
                fromAminoMsg(object: _61.SetProtoRevAdminAccountProposalAminoMsg): _61.SetProtoRevAdminAccountProposal;
                toAminoMsg(message: _61.SetProtoRevAdminAccountProposal): _61.SetProtoRevAdminAccountProposalAminoMsg;
                fromProtoMsg(message: _61.SetProtoRevAdminAccountProposalProtoMsg): _61.SetProtoRevAdminAccountProposal;
                toProto(message: _61.SetProtoRevAdminAccountProposal): Uint8Array;
                toProtoMsg(message: _61.SetProtoRevAdminAccountProposal): _61.SetProtoRevAdminAccountProposalProtoMsg;
            };
            GenesisState: {
                typeUrl: string;
                encode(message: _60.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _60.GenesisState;
                fromPartial(object: Partial<_60.GenesisState>): _60.GenesisState;
                fromAmino(object: _60.GenesisStateAmino): _60.GenesisState;
                toAmino(message: _60.GenesisState): _60.GenesisStateAmino;
                fromAminoMsg(object: _60.GenesisStateAminoMsg): _60.GenesisState;
                toAminoMsg(message: _60.GenesisState): _60.GenesisStateAminoMsg;
                fromProtoMsg(message: _60.GenesisStateProtoMsg): _60.GenesisState;
                toProto(message: _60.GenesisState): Uint8Array;
                toProtoMsg(message: _60.GenesisState): _60.GenesisStateProtoMsg;
            };
        };
    }
    namespace store {
        const v1beta1: {
            Node: {
                typeUrl: string;
                encode(message: _66.Node, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _66.Node;
                fromPartial(object: Partial<_66.Node>): _66.Node;
                fromAmino(object: _66.NodeAmino): _66.Node;
                toAmino(message: _66.Node): _66.NodeAmino;
                fromAminoMsg(object: _66.NodeAminoMsg): _66.Node;
                toAminoMsg(message: _66.Node): _66.NodeAminoMsg;
                fromProtoMsg(message: _66.NodeProtoMsg): _66.Node;
                toProto(message: _66.Node): Uint8Array;
                toProtoMsg(message: _66.Node): _66.NodeProtoMsg;
            };
            Child: {
                typeUrl: string;
                encode(message: _66.Child, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _66.Child;
                fromPartial(object: Partial<_66.Child>): _66.Child;
                fromAmino(object: _66.ChildAmino): _66.Child;
                toAmino(message: _66.Child): _66.ChildAmino;
                fromAminoMsg(object: _66.ChildAminoMsg): _66.Child;
                toAminoMsg(message: _66.Child): _66.ChildAminoMsg;
                fromProtoMsg(message: _66.ChildProtoMsg): _66.Child;
                toProto(message: _66.Child): Uint8Array;
                toProtoMsg(message: _66.Child): _66.ChildProtoMsg;
            };
            Leaf: {
                typeUrl: string;
                encode(message: _66.Leaf, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _66.Leaf;
                fromPartial(object: Partial<_66.Leaf>): _66.Leaf;
                fromAmino(object: _66.LeafAmino): _66.Leaf;
                toAmino(message: _66.Leaf): _66.LeafAmino;
                fromAminoMsg(object: _66.LeafAminoMsg): _66.Leaf;
                toAminoMsg(message: _66.Leaf): _66.LeafAminoMsg;
                fromProtoMsg(message: _66.LeafProtoMsg): _66.Leaf;
                toProto(message: _66.Leaf): Uint8Array;
                toProtoMsg(message: _66.Leaf): _66.LeafProtoMsg;
            };
        };
    }
    const superfluid: {
        MsgClientImpl: typeof _261.MsgClientImpl;
        QueryClientImpl: typeof _246.QueryClientImpl;
        createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
            params(request?: _69.QueryParamsRequest): Promise<_69.QueryParamsResponse>;
            assetType(request: _69.AssetTypeRequest): Promise<_69.AssetTypeResponse>;
            allAssets(request?: _69.AllAssetsRequest): Promise<_69.AllAssetsResponse>;
            assetMultiplier(request: _69.AssetMultiplierRequest): Promise<_69.AssetMultiplierResponse>;
            allIntermediaryAccounts(request?: _69.AllIntermediaryAccountsRequest): Promise<_69.AllIntermediaryAccountsResponse>;
            connectedIntermediaryAccount(request: _69.ConnectedIntermediaryAccountRequest): Promise<_69.ConnectedIntermediaryAccountResponse>;
            totalDelegationByValidatorForDenom(request: _69.QueryTotalDelegationByValidatorForDenomRequest): Promise<_69.QueryTotalDelegationByValidatorForDenomResponse>;
            totalSuperfluidDelegations(request?: _69.TotalSuperfluidDelegationsRequest): Promise<_69.TotalSuperfluidDelegationsResponse>;
            superfluidDelegationAmount(request: _69.SuperfluidDelegationAmountRequest): Promise<_69.SuperfluidDelegationAmountResponse>;
            superfluidDelegationsByDelegator(request: _69.SuperfluidDelegationsByDelegatorRequest): Promise<_69.SuperfluidDelegationsByDelegatorResponse>;
            superfluidUndelegationsByDelegator(request: _69.SuperfluidUndelegationsByDelegatorRequest): Promise<_69.SuperfluidUndelegationsByDelegatorResponse>;
            superfluidDelegationsByValidatorDenom(request: _69.SuperfluidDelegationsByValidatorDenomRequest): Promise<_69.SuperfluidDelegationsByValidatorDenomResponse>;
            estimateSuperfluidDelegatedAmountByValidatorDenom(request: _69.EstimateSuperfluidDelegatedAmountByValidatorDenomRequest): Promise<_69.EstimateSuperfluidDelegatedAmountByValidatorDenomResponse>;
            totalDelegationByDelegator(request: _69.QueryTotalDelegationByDelegatorRequest): Promise<_69.QueryTotalDelegationByDelegatorResponse>;
            unpoolWhitelist(request?: _69.QueryUnpoolWhitelistRequest): Promise<_69.QueryUnpoolWhitelistResponse>;
            userConcentratedSuperfluidPositionsDelegated(request: _69.UserConcentratedSuperfluidPositionsDelegatedRequest): Promise<_69.UserConcentratedSuperfluidPositionsDelegatedResponse>;
            userConcentratedSuperfluidPositionsUndelegating(request: _69.UserConcentratedSuperfluidPositionsUndelegatingRequest): Promise<_69.UserConcentratedSuperfluidPositionsUndelegatingResponse>;
        };
        LCDQueryClient: typeof _228.LCDQueryClient;
        registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
        load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
        MessageComposer: {
            encoded: {
                superfluidDelegate(value: _71.MsgSuperfluidDelegate): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                superfluidUndelegate(value: _71.MsgSuperfluidUndelegate): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                superfluidUnbondLock(value: _71.MsgSuperfluidUnbondLock): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                superfluidUndelegateAndUnbondLock(value: _71.MsgSuperfluidUndelegateAndUnbondLock): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                lockAndSuperfluidDelegate(value: _71.MsgLockAndSuperfluidDelegate): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                createFullRangePositionAndSuperfluidDelegate(value: _71.MsgCreateFullRangePositionAndSuperfluidDelegate): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                unPoolWhitelistedPool(value: _71.MsgUnPoolWhitelistedPool): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                unlockAndMigrateSharesToFullRangeConcentratedPosition(value: _71.MsgUnlockAndMigrateSharesToFullRangeConcentratedPosition): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                addToConcentratedLiquiditySuperfluidPosition(value: _71.MsgAddToConcentratedLiquiditySuperfluidPosition): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                unbondConvertAndStake(value: _71.MsgUnbondConvertAndStake): {
                    typeUrl: string;
                    value: Uint8Array;
                };
            };
            withTypeUrl: {
                superfluidDelegate(value: _71.MsgSuperfluidDelegate): {
                    typeUrl: string;
                    value: _71.MsgSuperfluidDelegate;
                };
                superfluidUndelegate(value: _71.MsgSuperfluidUndelegate): {
                    typeUrl: string;
                    value: _71.MsgSuperfluidUndelegate;
                };
                superfluidUnbondLock(value: _71.MsgSuperfluidUnbondLock): {
                    typeUrl: string;
                    value: _71.MsgSuperfluidUnbondLock;
                };
                superfluidUndelegateAndUnbondLock(value: _71.MsgSuperfluidUndelegateAndUnbondLock): {
                    typeUrl: string;
                    value: _71.MsgSuperfluidUndelegateAndUnbondLock;
                };
                lockAndSuperfluidDelegate(value: _71.MsgLockAndSuperfluidDelegate): {
                    typeUrl: string;
                    value: _71.MsgLockAndSuperfluidDelegate;
                };
                createFullRangePositionAndSuperfluidDelegate(value: _71.MsgCreateFullRangePositionAndSuperfluidDelegate): {
                    typeUrl: string;
                    value: _71.MsgCreateFullRangePositionAndSuperfluidDelegate;
                };
                unPoolWhitelistedPool(value: _71.MsgUnPoolWhitelistedPool): {
                    typeUrl: string;
                    value: _71.MsgUnPoolWhitelistedPool;
                };
                unlockAndMigrateSharesToFullRangeConcentratedPosition(value: _71.MsgUnlockAndMigrateSharesToFullRangeConcentratedPosition): {
                    typeUrl: string;
                    value: _71.MsgUnlockAndMigrateSharesToFullRangeConcentratedPosition;
                };
                addToConcentratedLiquiditySuperfluidPosition(value: _71.MsgAddToConcentratedLiquiditySuperfluidPosition): {
                    typeUrl: string;
                    value: _71.MsgAddToConcentratedLiquiditySuperfluidPosition;
                };
                unbondConvertAndStake(value: _71.MsgUnbondConvertAndStake): {
                    typeUrl: string;
                    value: _71.MsgUnbondConvertAndStake;
                };
            };
            fromJSON: {
                superfluidDelegate(value: any): {
                    typeUrl: string;
                    value: _71.MsgSuperfluidDelegate;
                };
                superfluidUndelegate(value: any): {
                    typeUrl: string;
                    value: _71.MsgSuperfluidUndelegate;
                };
                superfluidUnbondLock(value: any): {
                    typeUrl: string;
                    value: _71.MsgSuperfluidUnbondLock;
                };
                superfluidUndelegateAndUnbondLock(value: any): {
                    typeUrl: string;
                    value: _71.MsgSuperfluidUndelegateAndUnbondLock;
                };
                lockAndSuperfluidDelegate(value: any): {
                    typeUrl: string;
                    value: _71.MsgLockAndSuperfluidDelegate;
                };
                createFullRangePositionAndSuperfluidDelegate(value: any): {
                    typeUrl: string;
                    value: _71.MsgCreateFullRangePositionAndSuperfluidDelegate;
                };
                unPoolWhitelistedPool(value: any): {
                    typeUrl: string;
                    value: _71.MsgUnPoolWhitelistedPool;
                };
                unlockAndMigrateSharesToFullRangeConcentratedPosition(value: any): {
                    typeUrl: string;
                    value: _71.MsgUnlockAndMigrateSharesToFullRangeConcentratedPosition;
                };
                addToConcentratedLiquiditySuperfluidPosition(value: any): {
                    typeUrl: string;
                    value: _71.MsgAddToConcentratedLiquiditySuperfluidPosition;
                };
                unbondConvertAndStake(value: any): {
                    typeUrl: string;
                    value: _71.MsgUnbondConvertAndStake;
                };
            };
            fromPartial: {
                superfluidDelegate(value: _71.MsgSuperfluidDelegate): {
                    typeUrl: string;
                    value: _71.MsgSuperfluidDelegate;
                };
                superfluidUndelegate(value: _71.MsgSuperfluidUndelegate): {
                    typeUrl: string;
                    value: _71.MsgSuperfluidUndelegate;
                };
                superfluidUnbondLock(value: _71.MsgSuperfluidUnbondLock): {
                    typeUrl: string;
                    value: _71.MsgSuperfluidUnbondLock;
                };
                superfluidUndelegateAndUnbondLock(value: _71.MsgSuperfluidUndelegateAndUnbondLock): {
                    typeUrl: string;
                    value: _71.MsgSuperfluidUndelegateAndUnbondLock;
                };
                lockAndSuperfluidDelegate(value: _71.MsgLockAndSuperfluidDelegate): {
                    typeUrl: string;
                    value: _71.MsgLockAndSuperfluidDelegate;
                };
                createFullRangePositionAndSuperfluidDelegate(value: _71.MsgCreateFullRangePositionAndSuperfluidDelegate): {
                    typeUrl: string;
                    value: _71.MsgCreateFullRangePositionAndSuperfluidDelegate;
                };
                unPoolWhitelistedPool(value: _71.MsgUnPoolWhitelistedPool): {
                    typeUrl: string;
                    value: _71.MsgUnPoolWhitelistedPool;
                };
                unlockAndMigrateSharesToFullRangeConcentratedPosition(value: _71.MsgUnlockAndMigrateSharesToFullRangeConcentratedPosition): {
                    typeUrl: string;
                    value: _71.MsgUnlockAndMigrateSharesToFullRangeConcentratedPosition;
                };
                addToConcentratedLiquiditySuperfluidPosition(value: _71.MsgAddToConcentratedLiquiditySuperfluidPosition): {
                    typeUrl: string;
                    value: _71.MsgAddToConcentratedLiquiditySuperfluidPosition;
                };
                unbondConvertAndStake(value: _71.MsgUnbondConvertAndStake): {
                    typeUrl: string;
                    value: _71.MsgUnbondConvertAndStake;
                };
            };
        };
        AminoConverter: {
            "/osmosis.superfluid.MsgSuperfluidDelegate": {
                aminoType: string;
                toAmino: (message: _71.MsgSuperfluidDelegate) => _71.MsgSuperfluidDelegateAmino;
                fromAmino: (object: _71.MsgSuperfluidDelegateAmino) => _71.MsgSuperfluidDelegate;
            };
            "/osmosis.superfluid.MsgSuperfluidUndelegate": {
                aminoType: string;
                toAmino: (message: _71.MsgSuperfluidUndelegate) => _71.MsgSuperfluidUndelegateAmino;
                fromAmino: (object: _71.MsgSuperfluidUndelegateAmino) => _71.MsgSuperfluidUndelegate;
            };
            "/osmosis.superfluid.MsgSuperfluidUnbondLock": {
                aminoType: string;
                toAmino: (message: _71.MsgSuperfluidUnbondLock) => _71.MsgSuperfluidUnbondLockAmino;
                fromAmino: (object: _71.MsgSuperfluidUnbondLockAmino) => _71.MsgSuperfluidUnbondLock;
            };
            "/osmosis.superfluid.MsgSuperfluidUndelegateAndUnbondLock": {
                aminoType: string;
                toAmino: (message: _71.MsgSuperfluidUndelegateAndUnbondLock) => _71.MsgSuperfluidUndelegateAndUnbondLockAmino;
                fromAmino: (object: _71.MsgSuperfluidUndelegateAndUnbondLockAmino) => _71.MsgSuperfluidUndelegateAndUnbondLock;
            };
            "/osmosis.superfluid.MsgLockAndSuperfluidDelegate": {
                aminoType: string;
                toAmino: (message: _71.MsgLockAndSuperfluidDelegate) => _71.MsgLockAndSuperfluidDelegateAmino;
                fromAmino: (object: _71.MsgLockAndSuperfluidDelegateAmino) => _71.MsgLockAndSuperfluidDelegate;
            };
            "/osmosis.superfluid.MsgCreateFullRangePositionAndSuperfluidDelegate": {
                aminoType: string;
                toAmino: (message: _71.MsgCreateFullRangePositionAndSuperfluidDelegate) => _71.MsgCreateFullRangePositionAndSuperfluidDelegateAmino;
                fromAmino: (object: _71.MsgCreateFullRangePositionAndSuperfluidDelegateAmino) => _71.MsgCreateFullRangePositionAndSuperfluidDelegate;
            };
            "/osmosis.superfluid.MsgUnPoolWhitelistedPool": {
                aminoType: string;
                toAmino: (message: _71.MsgUnPoolWhitelistedPool) => _71.MsgUnPoolWhitelistedPoolAmino;
                fromAmino: (object: _71.MsgUnPoolWhitelistedPoolAmino) => _71.MsgUnPoolWhitelistedPool;
            };
            "/osmosis.superfluid.MsgUnlockAndMigrateSharesToFullRangeConcentratedPosition": {
                aminoType: string;
                toAmino: (message: _71.MsgUnlockAndMigrateSharesToFullRangeConcentratedPosition) => _71.MsgUnlockAndMigrateSharesToFullRangeConcentratedPositionAmino;
                fromAmino: (object: _71.MsgUnlockAndMigrateSharesToFullRangeConcentratedPositionAmino) => _71.MsgUnlockAndMigrateSharesToFullRangeConcentratedPosition;
            };
            "/osmosis.superfluid.MsgAddToConcentratedLiquiditySuperfluidPosition": {
                aminoType: string;
                toAmino: (message: _71.MsgAddToConcentratedLiquiditySuperfluidPosition) => _71.MsgAddToConcentratedLiquiditySuperfluidPositionAmino;
                fromAmino: (object: _71.MsgAddToConcentratedLiquiditySuperfluidPositionAmino) => _71.MsgAddToConcentratedLiquiditySuperfluidPosition;
            };
            "/osmosis.superfluid.MsgUnbondConvertAndStake": {
                aminoType: string;
                toAmino: (message: _71.MsgUnbondConvertAndStake) => _71.MsgUnbondConvertAndStakeAmino;
                fromAmino: (object: _71.MsgUnbondConvertAndStakeAmino) => _71.MsgUnbondConvertAndStake;
            };
        };
        MsgSuperfluidDelegate: {
            typeUrl: string;
            encode(message: _71.MsgSuperfluidDelegate, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _71.MsgSuperfluidDelegate;
            fromPartial(object: Partial<_71.MsgSuperfluidDelegate>): _71.MsgSuperfluidDelegate;
            fromAmino(object: _71.MsgSuperfluidDelegateAmino): _71.MsgSuperfluidDelegate;
            toAmino(message: _71.MsgSuperfluidDelegate): _71.MsgSuperfluidDelegateAmino;
            fromAminoMsg(object: _71.MsgSuperfluidDelegateAminoMsg): _71.MsgSuperfluidDelegate;
            toAminoMsg(message: _71.MsgSuperfluidDelegate): _71.MsgSuperfluidDelegateAminoMsg;
            fromProtoMsg(message: _71.MsgSuperfluidDelegateProtoMsg): _71.MsgSuperfluidDelegate;
            toProto(message: _71.MsgSuperfluidDelegate): Uint8Array;
            toProtoMsg(message: _71.MsgSuperfluidDelegate): _71.MsgSuperfluidDelegateProtoMsg;
        };
        MsgSuperfluidDelegateResponse: {
            typeUrl: string;
            encode(_: _71.MsgSuperfluidDelegateResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(_: any): _71.MsgSuperfluidDelegateResponse;
            fromPartial(_: Partial<_71.MsgSuperfluidDelegateResponse>): _71.MsgSuperfluidDelegateResponse;
            fromAmino(_: _71.MsgSuperfluidDelegateResponseAmino): _71.MsgSuperfluidDelegateResponse;
            toAmino(_: _71.MsgSuperfluidDelegateResponse): _71.MsgSuperfluidDelegateResponseAmino;
            fromAminoMsg(object: _71.MsgSuperfluidDelegateResponseAminoMsg): _71.MsgSuperfluidDelegateResponse;
            toAminoMsg(message: _71.MsgSuperfluidDelegateResponse): _71.MsgSuperfluidDelegateResponseAminoMsg;
            fromProtoMsg(message: _71.MsgSuperfluidDelegateResponseProtoMsg): _71.MsgSuperfluidDelegateResponse;
            toProto(message: _71.MsgSuperfluidDelegateResponse): Uint8Array;
            toProtoMsg(message: _71.MsgSuperfluidDelegateResponse): _71.MsgSuperfluidDelegateResponseProtoMsg;
        };
        MsgSuperfluidUndelegate: {
            typeUrl: string;
            encode(message: _71.MsgSuperfluidUndelegate, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _71.MsgSuperfluidUndelegate;
            fromPartial(object: Partial<_71.MsgSuperfluidUndelegate>): _71.MsgSuperfluidUndelegate;
            fromAmino(object: _71.MsgSuperfluidUndelegateAmino): _71.MsgSuperfluidUndelegate;
            toAmino(message: _71.MsgSuperfluidUndelegate): _71.MsgSuperfluidUndelegateAmino;
            fromAminoMsg(object: _71.MsgSuperfluidUndelegateAminoMsg): _71.MsgSuperfluidUndelegate;
            toAminoMsg(message: _71.MsgSuperfluidUndelegate): _71.MsgSuperfluidUndelegateAminoMsg;
            fromProtoMsg(message: _71.MsgSuperfluidUndelegateProtoMsg): _71.MsgSuperfluidUndelegate;
            toProto(message: _71.MsgSuperfluidUndelegate): Uint8Array;
            toProtoMsg(message: _71.MsgSuperfluidUndelegate): _71.MsgSuperfluidUndelegateProtoMsg;
        };
        MsgSuperfluidUndelegateResponse: {
            typeUrl: string;
            encode(_: _71.MsgSuperfluidUndelegateResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(_: any): _71.MsgSuperfluidUndelegateResponse;
            fromPartial(_: Partial<_71.MsgSuperfluidUndelegateResponse>): _71.MsgSuperfluidUndelegateResponse;
            fromAmino(_: _71.MsgSuperfluidUndelegateResponseAmino): _71.MsgSuperfluidUndelegateResponse;
            toAmino(_: _71.MsgSuperfluidUndelegateResponse): _71.MsgSuperfluidUndelegateResponseAmino;
            fromAminoMsg(object: _71.MsgSuperfluidUndelegateResponseAminoMsg): _71.MsgSuperfluidUndelegateResponse;
            toAminoMsg(message: _71.MsgSuperfluidUndelegateResponse): _71.MsgSuperfluidUndelegateResponseAminoMsg;
            fromProtoMsg(message: _71.MsgSuperfluidUndelegateResponseProtoMsg): _71.MsgSuperfluidUndelegateResponse;
            toProto(message: _71.MsgSuperfluidUndelegateResponse): Uint8Array;
            toProtoMsg(message: _71.MsgSuperfluidUndelegateResponse): _71.MsgSuperfluidUndelegateResponseProtoMsg;
        };
        MsgSuperfluidUnbondLock: {
            typeUrl: string;
            encode(message: _71.MsgSuperfluidUnbondLock, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _71.MsgSuperfluidUnbondLock;
            fromPartial(object: Partial<_71.MsgSuperfluidUnbondLock>): _71.MsgSuperfluidUnbondLock;
            fromAmino(object: _71.MsgSuperfluidUnbondLockAmino): _71.MsgSuperfluidUnbondLock;
            toAmino(message: _71.MsgSuperfluidUnbondLock): _71.MsgSuperfluidUnbondLockAmino;
            fromAminoMsg(object: _71.MsgSuperfluidUnbondLockAminoMsg): _71.MsgSuperfluidUnbondLock;
            toAminoMsg(message: _71.MsgSuperfluidUnbondLock): _71.MsgSuperfluidUnbondLockAminoMsg;
            fromProtoMsg(message: _71.MsgSuperfluidUnbondLockProtoMsg): _71.MsgSuperfluidUnbondLock;
            toProto(message: _71.MsgSuperfluidUnbondLock): Uint8Array;
            toProtoMsg(message: _71.MsgSuperfluidUnbondLock): _71.MsgSuperfluidUnbondLockProtoMsg;
        };
        MsgSuperfluidUnbondLockResponse: {
            typeUrl: string;
            encode(_: _71.MsgSuperfluidUnbondLockResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(_: any): _71.MsgSuperfluidUnbondLockResponse;
            fromPartial(_: Partial<_71.MsgSuperfluidUnbondLockResponse>): _71.MsgSuperfluidUnbondLockResponse;
            fromAmino(_: _71.MsgSuperfluidUnbondLockResponseAmino): _71.MsgSuperfluidUnbondLockResponse;
            toAmino(_: _71.MsgSuperfluidUnbondLockResponse): _71.MsgSuperfluidUnbondLockResponseAmino;
            fromAminoMsg(object: _71.MsgSuperfluidUnbondLockResponseAminoMsg): _71.MsgSuperfluidUnbondLockResponse;
            toAminoMsg(message: _71.MsgSuperfluidUnbondLockResponse): _71.MsgSuperfluidUnbondLockResponseAminoMsg;
            fromProtoMsg(message: _71.MsgSuperfluidUnbondLockResponseProtoMsg): _71.MsgSuperfluidUnbondLockResponse;
            toProto(message: _71.MsgSuperfluidUnbondLockResponse): Uint8Array;
            toProtoMsg(message: _71.MsgSuperfluidUnbondLockResponse): _71.MsgSuperfluidUnbondLockResponseProtoMsg;
        };
        MsgSuperfluidUndelegateAndUnbondLock: {
            typeUrl: string;
            encode(message: _71.MsgSuperfluidUndelegateAndUnbondLock, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _71.MsgSuperfluidUndelegateAndUnbondLock;
            fromPartial(object: Partial<_71.MsgSuperfluidUndelegateAndUnbondLock>): _71.MsgSuperfluidUndelegateAndUnbondLock;
            fromAmino(object: _71.MsgSuperfluidUndelegateAndUnbondLockAmino): _71.MsgSuperfluidUndelegateAndUnbondLock;
            toAmino(message: _71.MsgSuperfluidUndelegateAndUnbondLock): _71.MsgSuperfluidUndelegateAndUnbondLockAmino;
            fromAminoMsg(object: _71.MsgSuperfluidUndelegateAndUnbondLockAminoMsg): _71.MsgSuperfluidUndelegateAndUnbondLock;
            toAminoMsg(message: _71.MsgSuperfluidUndelegateAndUnbondLock): _71.MsgSuperfluidUndelegateAndUnbondLockAminoMsg;
            fromProtoMsg(message: _71.MsgSuperfluidUndelegateAndUnbondLockProtoMsg): _71.MsgSuperfluidUndelegateAndUnbondLock;
            toProto(message: _71.MsgSuperfluidUndelegateAndUnbondLock): Uint8Array;
            toProtoMsg(message: _71.MsgSuperfluidUndelegateAndUnbondLock): _71.MsgSuperfluidUndelegateAndUnbondLockProtoMsg;
        };
        MsgSuperfluidUndelegateAndUnbondLockResponse: {
            typeUrl: string;
            encode(message: _71.MsgSuperfluidUndelegateAndUnbondLockResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _71.MsgSuperfluidUndelegateAndUnbondLockResponse;
            fromPartial(object: Partial<_71.MsgSuperfluidUndelegateAndUnbondLockResponse>): _71.MsgSuperfluidUndelegateAndUnbondLockResponse;
            fromAmino(object: _71.MsgSuperfluidUndelegateAndUnbondLockResponseAmino): _71.MsgSuperfluidUndelegateAndUnbondLockResponse;
            toAmino(message: _71.MsgSuperfluidUndelegateAndUnbondLockResponse): _71.MsgSuperfluidUndelegateAndUnbondLockResponseAmino;
            fromAminoMsg(object: _71.MsgSuperfluidUndelegateAndUnbondLockResponseAminoMsg): _71.MsgSuperfluidUndelegateAndUnbondLockResponse;
            toAminoMsg(message: _71.MsgSuperfluidUndelegateAndUnbondLockResponse): _71.MsgSuperfluidUndelegateAndUnbondLockResponseAminoMsg;
            fromProtoMsg(message: _71.MsgSuperfluidUndelegateAndUnbondLockResponseProtoMsg): _71.MsgSuperfluidUndelegateAndUnbondLockResponse;
            toProto(message: _71.MsgSuperfluidUndelegateAndUnbondLockResponse): Uint8Array;
            toProtoMsg(message: _71.MsgSuperfluidUndelegateAndUnbondLockResponse): _71.MsgSuperfluidUndelegateAndUnbondLockResponseProtoMsg;
        };
        MsgLockAndSuperfluidDelegate: {
            typeUrl: string;
            encode(message: _71.MsgLockAndSuperfluidDelegate, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _71.MsgLockAndSuperfluidDelegate;
            fromPartial(object: Partial<_71.MsgLockAndSuperfluidDelegate>): _71.MsgLockAndSuperfluidDelegate;
            fromAmino(object: _71.MsgLockAndSuperfluidDelegateAmino): _71.MsgLockAndSuperfluidDelegate;
            toAmino(message: _71.MsgLockAndSuperfluidDelegate): _71.MsgLockAndSuperfluidDelegateAmino;
            fromAminoMsg(object: _71.MsgLockAndSuperfluidDelegateAminoMsg): _71.MsgLockAndSuperfluidDelegate;
            toAminoMsg(message: _71.MsgLockAndSuperfluidDelegate): _71.MsgLockAndSuperfluidDelegateAminoMsg;
            fromProtoMsg(message: _71.MsgLockAndSuperfluidDelegateProtoMsg): _71.MsgLockAndSuperfluidDelegate;
            toProto(message: _71.MsgLockAndSuperfluidDelegate): Uint8Array;
            toProtoMsg(message: _71.MsgLockAndSuperfluidDelegate): _71.MsgLockAndSuperfluidDelegateProtoMsg;
        };
        MsgLockAndSuperfluidDelegateResponse: {
            typeUrl: string;
            encode(message: _71.MsgLockAndSuperfluidDelegateResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _71.MsgLockAndSuperfluidDelegateResponse;
            fromPartial(object: Partial<_71.MsgLockAndSuperfluidDelegateResponse>): _71.MsgLockAndSuperfluidDelegateResponse;
            fromAmino(object: _71.MsgLockAndSuperfluidDelegateResponseAmino): _71.MsgLockAndSuperfluidDelegateResponse;
            toAmino(message: _71.MsgLockAndSuperfluidDelegateResponse): _71.MsgLockAndSuperfluidDelegateResponseAmino;
            fromAminoMsg(object: _71.MsgLockAndSuperfluidDelegateResponseAminoMsg): _71.MsgLockAndSuperfluidDelegateResponse;
            toAminoMsg(message: _71.MsgLockAndSuperfluidDelegateResponse): _71.MsgLockAndSuperfluidDelegateResponseAminoMsg;
            fromProtoMsg(message: _71.MsgLockAndSuperfluidDelegateResponseProtoMsg): _71.MsgLockAndSuperfluidDelegateResponse;
            toProto(message: _71.MsgLockAndSuperfluidDelegateResponse): Uint8Array;
            toProtoMsg(message: _71.MsgLockAndSuperfluidDelegateResponse): _71.MsgLockAndSuperfluidDelegateResponseProtoMsg;
        };
        MsgCreateFullRangePositionAndSuperfluidDelegate: {
            typeUrl: string;
            encode(message: _71.MsgCreateFullRangePositionAndSuperfluidDelegate, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _71.MsgCreateFullRangePositionAndSuperfluidDelegate;
            fromPartial(object: Partial<_71.MsgCreateFullRangePositionAndSuperfluidDelegate>): _71.MsgCreateFullRangePositionAndSuperfluidDelegate;
            fromAmino(object: _71.MsgCreateFullRangePositionAndSuperfluidDelegateAmino): _71.MsgCreateFullRangePositionAndSuperfluidDelegate;
            toAmino(message: _71.MsgCreateFullRangePositionAndSuperfluidDelegate): _71.MsgCreateFullRangePositionAndSuperfluidDelegateAmino;
            fromAminoMsg(object: _71.MsgCreateFullRangePositionAndSuperfluidDelegateAminoMsg): _71.MsgCreateFullRangePositionAndSuperfluidDelegate;
            toAminoMsg(message: _71.MsgCreateFullRangePositionAndSuperfluidDelegate): _71.MsgCreateFullRangePositionAndSuperfluidDelegateAminoMsg;
            fromProtoMsg(message: _71.MsgCreateFullRangePositionAndSuperfluidDelegateProtoMsg): _71.MsgCreateFullRangePositionAndSuperfluidDelegate;
            toProto(message: _71.MsgCreateFullRangePositionAndSuperfluidDelegate): Uint8Array;
            toProtoMsg(message: _71.MsgCreateFullRangePositionAndSuperfluidDelegate): _71.MsgCreateFullRangePositionAndSuperfluidDelegateProtoMsg;
        };
        MsgCreateFullRangePositionAndSuperfluidDelegateResponse: {
            typeUrl: string;
            encode(message: _71.MsgCreateFullRangePositionAndSuperfluidDelegateResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _71.MsgCreateFullRangePositionAndSuperfluidDelegateResponse;
            fromPartial(object: Partial<_71.MsgCreateFullRangePositionAndSuperfluidDelegateResponse>): _71.MsgCreateFullRangePositionAndSuperfluidDelegateResponse;
            fromAmino(object: _71.MsgCreateFullRangePositionAndSuperfluidDelegateResponseAmino): _71.MsgCreateFullRangePositionAndSuperfluidDelegateResponse;
            toAmino(message: _71.MsgCreateFullRangePositionAndSuperfluidDelegateResponse): _71.MsgCreateFullRangePositionAndSuperfluidDelegateResponseAmino;
            fromAminoMsg(object: _71.MsgCreateFullRangePositionAndSuperfluidDelegateResponseAminoMsg): _71.MsgCreateFullRangePositionAndSuperfluidDelegateResponse;
            toAminoMsg(message: _71.MsgCreateFullRangePositionAndSuperfluidDelegateResponse): _71.MsgCreateFullRangePositionAndSuperfluidDelegateResponseAminoMsg;
            fromProtoMsg(message: _71.MsgCreateFullRangePositionAndSuperfluidDelegateResponseProtoMsg): _71.MsgCreateFullRangePositionAndSuperfluidDelegateResponse;
            toProto(message: _71.MsgCreateFullRangePositionAndSuperfluidDelegateResponse): Uint8Array;
            toProtoMsg(message: _71.MsgCreateFullRangePositionAndSuperfluidDelegateResponse): _71.MsgCreateFullRangePositionAndSuperfluidDelegateResponseProtoMsg;
        };
        MsgUnPoolWhitelistedPool: {
            typeUrl: string;
            encode(message: _71.MsgUnPoolWhitelistedPool, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _71.MsgUnPoolWhitelistedPool;
            fromPartial(object: Partial<_71.MsgUnPoolWhitelistedPool>): _71.MsgUnPoolWhitelistedPool;
            fromAmino(object: _71.MsgUnPoolWhitelistedPoolAmino): _71.MsgUnPoolWhitelistedPool;
            toAmino(message: _71.MsgUnPoolWhitelistedPool): _71.MsgUnPoolWhitelistedPoolAmino;
            fromAminoMsg(object: _71.MsgUnPoolWhitelistedPoolAminoMsg): _71.MsgUnPoolWhitelistedPool;
            toAminoMsg(message: _71.MsgUnPoolWhitelistedPool): _71.MsgUnPoolWhitelistedPoolAminoMsg;
            fromProtoMsg(message: _71.MsgUnPoolWhitelistedPoolProtoMsg): _71.MsgUnPoolWhitelistedPool;
            toProto(message: _71.MsgUnPoolWhitelistedPool): Uint8Array;
            toProtoMsg(message: _71.MsgUnPoolWhitelistedPool): _71.MsgUnPoolWhitelistedPoolProtoMsg;
        };
        MsgUnPoolWhitelistedPoolResponse: {
            typeUrl: string;
            encode(message: _71.MsgUnPoolWhitelistedPoolResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _71.MsgUnPoolWhitelistedPoolResponse;
            fromPartial(object: Partial<_71.MsgUnPoolWhitelistedPoolResponse>): _71.MsgUnPoolWhitelistedPoolResponse;
            fromAmino(object: _71.MsgUnPoolWhitelistedPoolResponseAmino): _71.MsgUnPoolWhitelistedPoolResponse;
            toAmino(message: _71.MsgUnPoolWhitelistedPoolResponse): _71.MsgUnPoolWhitelistedPoolResponseAmino;
            fromAminoMsg(object: _71.MsgUnPoolWhitelistedPoolResponseAminoMsg): _71.MsgUnPoolWhitelistedPoolResponse;
            toAminoMsg(message: _71.MsgUnPoolWhitelistedPoolResponse): _71.MsgUnPoolWhitelistedPoolResponseAminoMsg;
            fromProtoMsg(message: _71.MsgUnPoolWhitelistedPoolResponseProtoMsg): _71.MsgUnPoolWhitelistedPoolResponse;
            toProto(message: _71.MsgUnPoolWhitelistedPoolResponse): Uint8Array;
            toProtoMsg(message: _71.MsgUnPoolWhitelistedPoolResponse): _71.MsgUnPoolWhitelistedPoolResponseProtoMsg;
        };
        MsgUnlockAndMigrateSharesToFullRangeConcentratedPosition: {
            typeUrl: string;
            encode(message: _71.MsgUnlockAndMigrateSharesToFullRangeConcentratedPosition, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _71.MsgUnlockAndMigrateSharesToFullRangeConcentratedPosition;
            fromPartial(object: Partial<_71.MsgUnlockAndMigrateSharesToFullRangeConcentratedPosition>): _71.MsgUnlockAndMigrateSharesToFullRangeConcentratedPosition;
            fromAmino(object: _71.MsgUnlockAndMigrateSharesToFullRangeConcentratedPositionAmino): _71.MsgUnlockAndMigrateSharesToFullRangeConcentratedPosition;
            toAmino(message: _71.MsgUnlockAndMigrateSharesToFullRangeConcentratedPosition): _71.MsgUnlockAndMigrateSharesToFullRangeConcentratedPositionAmino;
            fromAminoMsg(object: _71.MsgUnlockAndMigrateSharesToFullRangeConcentratedPositionAminoMsg): _71.MsgUnlockAndMigrateSharesToFullRangeConcentratedPosition;
            toAminoMsg(message: _71.MsgUnlockAndMigrateSharesToFullRangeConcentratedPosition): _71.MsgUnlockAndMigrateSharesToFullRangeConcentratedPositionAminoMsg;
            fromProtoMsg(message: _71.MsgUnlockAndMigrateSharesToFullRangeConcentratedPositionProtoMsg): _71.MsgUnlockAndMigrateSharesToFullRangeConcentratedPosition;
            toProto(message: _71.MsgUnlockAndMigrateSharesToFullRangeConcentratedPosition): Uint8Array;
            toProtoMsg(message: _71.MsgUnlockAndMigrateSharesToFullRangeConcentratedPosition): _71.MsgUnlockAndMigrateSharesToFullRangeConcentratedPositionProtoMsg;
        };
        MsgUnlockAndMigrateSharesToFullRangeConcentratedPositionResponse: {
            typeUrl: string;
            encode(message: _71.MsgUnlockAndMigrateSharesToFullRangeConcentratedPositionResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _71.MsgUnlockAndMigrateSharesToFullRangeConcentratedPositionResponse;
            fromPartial(object: Partial<_71.MsgUnlockAndMigrateSharesToFullRangeConcentratedPositionResponse>): _71.MsgUnlockAndMigrateSharesToFullRangeConcentratedPositionResponse;
            fromAmino(object: _71.MsgUnlockAndMigrateSharesToFullRangeConcentratedPositionResponseAmino): _71.MsgUnlockAndMigrateSharesToFullRangeConcentratedPositionResponse;
            toAmino(message: _71.MsgUnlockAndMigrateSharesToFullRangeConcentratedPositionResponse): _71.MsgUnlockAndMigrateSharesToFullRangeConcentratedPositionResponseAmino;
            fromAminoMsg(object: _71.MsgUnlockAndMigrateSharesToFullRangeConcentratedPositionResponseAminoMsg): _71.MsgUnlockAndMigrateSharesToFullRangeConcentratedPositionResponse;
            toAminoMsg(message: _71.MsgUnlockAndMigrateSharesToFullRangeConcentratedPositionResponse): _71.MsgUnlockAndMigrateSharesToFullRangeConcentratedPositionResponseAminoMsg;
            fromProtoMsg(message: _71.MsgUnlockAndMigrateSharesToFullRangeConcentratedPositionResponseProtoMsg): _71.MsgUnlockAndMigrateSharesToFullRangeConcentratedPositionResponse;
            toProto(message: _71.MsgUnlockAndMigrateSharesToFullRangeConcentratedPositionResponse): Uint8Array;
            toProtoMsg(message: _71.MsgUnlockAndMigrateSharesToFullRangeConcentratedPositionResponse): _71.MsgUnlockAndMigrateSharesToFullRangeConcentratedPositionResponseProtoMsg;
        };
        MsgAddToConcentratedLiquiditySuperfluidPosition: {
            typeUrl: string;
            encode(message: _71.MsgAddToConcentratedLiquiditySuperfluidPosition, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _71.MsgAddToConcentratedLiquiditySuperfluidPosition;
            fromPartial(object: Partial<_71.MsgAddToConcentratedLiquiditySuperfluidPosition>): _71.MsgAddToConcentratedLiquiditySuperfluidPosition;
            fromAmino(object: _71.MsgAddToConcentratedLiquiditySuperfluidPositionAmino): _71.MsgAddToConcentratedLiquiditySuperfluidPosition;
            toAmino(message: _71.MsgAddToConcentratedLiquiditySuperfluidPosition): _71.MsgAddToConcentratedLiquiditySuperfluidPositionAmino;
            fromAminoMsg(object: _71.MsgAddToConcentratedLiquiditySuperfluidPositionAminoMsg): _71.MsgAddToConcentratedLiquiditySuperfluidPosition;
            toAminoMsg(message: _71.MsgAddToConcentratedLiquiditySuperfluidPosition): _71.MsgAddToConcentratedLiquiditySuperfluidPositionAminoMsg;
            fromProtoMsg(message: _71.MsgAddToConcentratedLiquiditySuperfluidPositionProtoMsg): _71.MsgAddToConcentratedLiquiditySuperfluidPosition;
            toProto(message: _71.MsgAddToConcentratedLiquiditySuperfluidPosition): Uint8Array;
            toProtoMsg(message: _71.MsgAddToConcentratedLiquiditySuperfluidPosition): _71.MsgAddToConcentratedLiquiditySuperfluidPositionProtoMsg;
        };
        MsgAddToConcentratedLiquiditySuperfluidPositionResponse: {
            typeUrl: string;
            encode(message: _71.MsgAddToConcentratedLiquiditySuperfluidPositionResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _71.MsgAddToConcentratedLiquiditySuperfluidPositionResponse;
            fromPartial(object: Partial<_71.MsgAddToConcentratedLiquiditySuperfluidPositionResponse>): _71.MsgAddToConcentratedLiquiditySuperfluidPositionResponse;
            fromAmino(object: _71.MsgAddToConcentratedLiquiditySuperfluidPositionResponseAmino): _71.MsgAddToConcentratedLiquiditySuperfluidPositionResponse;
            toAmino(message: _71.MsgAddToConcentratedLiquiditySuperfluidPositionResponse): _71.MsgAddToConcentratedLiquiditySuperfluidPositionResponseAmino;
            fromAminoMsg(object: _71.MsgAddToConcentratedLiquiditySuperfluidPositionResponseAminoMsg): _71.MsgAddToConcentratedLiquiditySuperfluidPositionResponse;
            toAminoMsg(message: _71.MsgAddToConcentratedLiquiditySuperfluidPositionResponse): _71.MsgAddToConcentratedLiquiditySuperfluidPositionResponseAminoMsg;
            fromProtoMsg(message: _71.MsgAddToConcentratedLiquiditySuperfluidPositionResponseProtoMsg): _71.MsgAddToConcentratedLiquiditySuperfluidPositionResponse;
            toProto(message: _71.MsgAddToConcentratedLiquiditySuperfluidPositionResponse): Uint8Array;
            toProtoMsg(message: _71.MsgAddToConcentratedLiquiditySuperfluidPositionResponse): _71.MsgAddToConcentratedLiquiditySuperfluidPositionResponseProtoMsg;
        };
        MsgUnbondConvertAndStake: {
            typeUrl: string;
            encode(message: _71.MsgUnbondConvertAndStake, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _71.MsgUnbondConvertAndStake;
            fromPartial(object: Partial<_71.MsgUnbondConvertAndStake>): _71.MsgUnbondConvertAndStake;
            fromAmino(object: _71.MsgUnbondConvertAndStakeAmino): _71.MsgUnbondConvertAndStake;
            toAmino(message: _71.MsgUnbondConvertAndStake): _71.MsgUnbondConvertAndStakeAmino;
            fromAminoMsg(object: _71.MsgUnbondConvertAndStakeAminoMsg): _71.MsgUnbondConvertAndStake;
            toAminoMsg(message: _71.MsgUnbondConvertAndStake): _71.MsgUnbondConvertAndStakeAminoMsg;
            fromProtoMsg(message: _71.MsgUnbondConvertAndStakeProtoMsg): _71.MsgUnbondConvertAndStake;
            toProto(message: _71.MsgUnbondConvertAndStake): Uint8Array;
            toProtoMsg(message: _71.MsgUnbondConvertAndStake): _71.MsgUnbondConvertAndStakeProtoMsg;
        };
        MsgUnbondConvertAndStakeResponse: {
            typeUrl: string;
            encode(message: _71.MsgUnbondConvertAndStakeResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _71.MsgUnbondConvertAndStakeResponse;
            fromPartial(object: Partial<_71.MsgUnbondConvertAndStakeResponse>): _71.MsgUnbondConvertAndStakeResponse;
            fromAmino(object: _71.MsgUnbondConvertAndStakeResponseAmino): _71.MsgUnbondConvertAndStakeResponse;
            toAmino(message: _71.MsgUnbondConvertAndStakeResponse): _71.MsgUnbondConvertAndStakeResponseAmino;
            fromAminoMsg(object: _71.MsgUnbondConvertAndStakeResponseAminoMsg): _71.MsgUnbondConvertAndStakeResponse;
            toAminoMsg(message: _71.MsgUnbondConvertAndStakeResponse): _71.MsgUnbondConvertAndStakeResponseAminoMsg;
            fromProtoMsg(message: _71.MsgUnbondConvertAndStakeResponseProtoMsg): _71.MsgUnbondConvertAndStakeResponse;
            toProto(message: _71.MsgUnbondConvertAndStakeResponse): Uint8Array;
            toProtoMsg(message: _71.MsgUnbondConvertAndStakeResponse): _71.MsgUnbondConvertAndStakeResponseProtoMsg;
        };
        superfluidAssetTypeFromJSON(object: any): _70.SuperfluidAssetType;
        superfluidAssetTypeToJSON(object: _70.SuperfluidAssetType): string;
        SuperfluidAssetType: typeof _70.SuperfluidAssetType;
        SuperfluidAssetTypeSDKType: typeof _70.SuperfluidAssetType;
        SuperfluidAssetTypeAmino: typeof _70.SuperfluidAssetType;
        SuperfluidAsset: {
            typeUrl: string;
            encode(message: _70.SuperfluidAsset, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _70.SuperfluidAsset;
            fromPartial(object: Partial<_70.SuperfluidAsset>): _70.SuperfluidAsset;
            fromAmino(object: _70.SuperfluidAssetAmino): _70.SuperfluidAsset;
            toAmino(message: _70.SuperfluidAsset): _70.SuperfluidAssetAmino;
            fromAminoMsg(object: _70.SuperfluidAssetAminoMsg): _70.SuperfluidAsset;
            toAminoMsg(message: _70.SuperfluidAsset): _70.SuperfluidAssetAminoMsg;
            fromProtoMsg(message: _70.SuperfluidAssetProtoMsg): _70.SuperfluidAsset;
            toProto(message: _70.SuperfluidAsset): Uint8Array;
            toProtoMsg(message: _70.SuperfluidAsset): _70.SuperfluidAssetProtoMsg;
        };
        SuperfluidIntermediaryAccount: {
            typeUrl: string;
            encode(message: _70.SuperfluidIntermediaryAccount, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _70.SuperfluidIntermediaryAccount;
            fromPartial(object: Partial<_70.SuperfluidIntermediaryAccount>): _70.SuperfluidIntermediaryAccount;
            fromAmino(object: _70.SuperfluidIntermediaryAccountAmino): _70.SuperfluidIntermediaryAccount;
            toAmino(message: _70.SuperfluidIntermediaryAccount): _70.SuperfluidIntermediaryAccountAmino;
            fromAminoMsg(object: _70.SuperfluidIntermediaryAccountAminoMsg): _70.SuperfluidIntermediaryAccount;
            toAminoMsg(message: _70.SuperfluidIntermediaryAccount): _70.SuperfluidIntermediaryAccountAminoMsg;
            fromProtoMsg(message: _70.SuperfluidIntermediaryAccountProtoMsg): _70.SuperfluidIntermediaryAccount;
            toProto(message: _70.SuperfluidIntermediaryAccount): Uint8Array;
            toProtoMsg(message: _70.SuperfluidIntermediaryAccount): _70.SuperfluidIntermediaryAccountProtoMsg;
        };
        OsmoEquivalentMultiplierRecord: {
            typeUrl: string;
            encode(message: _70.OsmoEquivalentMultiplierRecord, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _70.OsmoEquivalentMultiplierRecord;
            fromPartial(object: Partial<_70.OsmoEquivalentMultiplierRecord>): _70.OsmoEquivalentMultiplierRecord;
            fromAmino(object: _70.OsmoEquivalentMultiplierRecordAmino): _70.OsmoEquivalentMultiplierRecord;
            toAmino(message: _70.OsmoEquivalentMultiplierRecord): _70.OsmoEquivalentMultiplierRecordAmino;
            fromAminoMsg(object: _70.OsmoEquivalentMultiplierRecordAminoMsg): _70.OsmoEquivalentMultiplierRecord;
            toAminoMsg(message: _70.OsmoEquivalentMultiplierRecord): _70.OsmoEquivalentMultiplierRecordAminoMsg;
            fromProtoMsg(message: _70.OsmoEquivalentMultiplierRecordProtoMsg): _70.OsmoEquivalentMultiplierRecord;
            toProto(message: _70.OsmoEquivalentMultiplierRecord): Uint8Array;
            toProtoMsg(message: _70.OsmoEquivalentMultiplierRecord): _70.OsmoEquivalentMultiplierRecordProtoMsg;
        };
        SuperfluidDelegationRecord: {
            typeUrl: string;
            encode(message: _70.SuperfluidDelegationRecord, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _70.SuperfluidDelegationRecord;
            fromPartial(object: Partial<_70.SuperfluidDelegationRecord>): _70.SuperfluidDelegationRecord;
            fromAmino(object: _70.SuperfluidDelegationRecordAmino): _70.SuperfluidDelegationRecord;
            toAmino(message: _70.SuperfluidDelegationRecord): _70.SuperfluidDelegationRecordAmino;
            fromAminoMsg(object: _70.SuperfluidDelegationRecordAminoMsg): _70.SuperfluidDelegationRecord;
            toAminoMsg(message: _70.SuperfluidDelegationRecord): _70.SuperfluidDelegationRecordAminoMsg;
            fromProtoMsg(message: _70.SuperfluidDelegationRecordProtoMsg): _70.SuperfluidDelegationRecord;
            toProto(message: _70.SuperfluidDelegationRecord): Uint8Array;
            toProtoMsg(message: _70.SuperfluidDelegationRecord): _70.SuperfluidDelegationRecordProtoMsg;
        };
        LockIdIntermediaryAccountConnection: {
            typeUrl: string;
            encode(message: _70.LockIdIntermediaryAccountConnection, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _70.LockIdIntermediaryAccountConnection;
            fromPartial(object: Partial<_70.LockIdIntermediaryAccountConnection>): _70.LockIdIntermediaryAccountConnection;
            fromAmino(object: _70.LockIdIntermediaryAccountConnectionAmino): _70.LockIdIntermediaryAccountConnection;
            toAmino(message: _70.LockIdIntermediaryAccountConnection): _70.LockIdIntermediaryAccountConnectionAmino;
            fromAminoMsg(object: _70.LockIdIntermediaryAccountConnectionAminoMsg): _70.LockIdIntermediaryAccountConnection;
            toAminoMsg(message: _70.LockIdIntermediaryAccountConnection): _70.LockIdIntermediaryAccountConnectionAminoMsg;
            fromProtoMsg(message: _70.LockIdIntermediaryAccountConnectionProtoMsg): _70.LockIdIntermediaryAccountConnection;
            toProto(message: _70.LockIdIntermediaryAccountConnection): Uint8Array;
            toProtoMsg(message: _70.LockIdIntermediaryAccountConnection): _70.LockIdIntermediaryAccountConnectionProtoMsg;
        };
        UnpoolWhitelistedPools: {
            typeUrl: string;
            encode(message: _70.UnpoolWhitelistedPools, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _70.UnpoolWhitelistedPools;
            fromPartial(object: Partial<_70.UnpoolWhitelistedPools>): _70.UnpoolWhitelistedPools;
            fromAmino(object: _70.UnpoolWhitelistedPoolsAmino): _70.UnpoolWhitelistedPools;
            toAmino(message: _70.UnpoolWhitelistedPools): _70.UnpoolWhitelistedPoolsAmino;
            fromAminoMsg(object: _70.UnpoolWhitelistedPoolsAminoMsg): _70.UnpoolWhitelistedPools;
            toAminoMsg(message: _70.UnpoolWhitelistedPools): _70.UnpoolWhitelistedPoolsAminoMsg;
            fromProtoMsg(message: _70.UnpoolWhitelistedPoolsProtoMsg): _70.UnpoolWhitelistedPools;
            toProto(message: _70.UnpoolWhitelistedPools): Uint8Array;
            toProtoMsg(message: _70.UnpoolWhitelistedPools): _70.UnpoolWhitelistedPoolsProtoMsg;
        };
        ConcentratedPoolUserPositionRecord: {
            typeUrl: string;
            encode(message: _70.ConcentratedPoolUserPositionRecord, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _70.ConcentratedPoolUserPositionRecord;
            fromPartial(object: Partial<_70.ConcentratedPoolUserPositionRecord>): _70.ConcentratedPoolUserPositionRecord;
            fromAmino(object: _70.ConcentratedPoolUserPositionRecordAmino): _70.ConcentratedPoolUserPositionRecord;
            toAmino(message: _70.ConcentratedPoolUserPositionRecord): _70.ConcentratedPoolUserPositionRecordAmino;
            fromAminoMsg(object: _70.ConcentratedPoolUserPositionRecordAminoMsg): _70.ConcentratedPoolUserPositionRecord;
            toAminoMsg(message: _70.ConcentratedPoolUserPositionRecord): _70.ConcentratedPoolUserPositionRecordAminoMsg;
            fromProtoMsg(message: _70.ConcentratedPoolUserPositionRecordProtoMsg): _70.ConcentratedPoolUserPositionRecord;
            toProto(message: _70.ConcentratedPoolUserPositionRecord): Uint8Array;
            toProtoMsg(message: _70.ConcentratedPoolUserPositionRecord): _70.ConcentratedPoolUserPositionRecordProtoMsg;
        };
        QueryParamsRequest: {
            typeUrl: string;
            encode(_: _69.QueryParamsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(_: any): _69.QueryParamsRequest;
            fromPartial(_: Partial<_69.QueryParamsRequest>): _69.QueryParamsRequest;
            fromAmino(_: _69.QueryParamsRequestAmino): _69.QueryParamsRequest;
            toAmino(_: _69.QueryParamsRequest): _69.QueryParamsRequestAmino;
            fromAminoMsg(object: _69.QueryParamsRequestAminoMsg): _69.QueryParamsRequest;
            toAminoMsg(message: _69.QueryParamsRequest): _69.QueryParamsRequestAminoMsg;
            fromProtoMsg(message: _69.QueryParamsRequestProtoMsg): _69.QueryParamsRequest;
            toProto(message: _69.QueryParamsRequest): Uint8Array;
            toProtoMsg(message: _69.QueryParamsRequest): _69.QueryParamsRequestProtoMsg;
        };
        QueryParamsResponse: {
            typeUrl: string;
            encode(message: _69.QueryParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _69.QueryParamsResponse;
            fromPartial(object: Partial<_69.QueryParamsResponse>): _69.QueryParamsResponse;
            fromAmino(object: _69.QueryParamsResponseAmino): _69.QueryParamsResponse;
            toAmino(message: _69.QueryParamsResponse): _69.QueryParamsResponseAmino;
            fromAminoMsg(object: _69.QueryParamsResponseAminoMsg): _69.QueryParamsResponse;
            toAminoMsg(message: _69.QueryParamsResponse): _69.QueryParamsResponseAminoMsg;
            fromProtoMsg(message: _69.QueryParamsResponseProtoMsg): _69.QueryParamsResponse;
            toProto(message: _69.QueryParamsResponse): Uint8Array;
            toProtoMsg(message: _69.QueryParamsResponse): _69.QueryParamsResponseProtoMsg;
        };
        AssetTypeRequest: {
            typeUrl: string;
            encode(message: _69.AssetTypeRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _69.AssetTypeRequest;
            fromPartial(object: Partial<_69.AssetTypeRequest>): _69.AssetTypeRequest;
            fromAmino(object: _69.AssetTypeRequestAmino): _69.AssetTypeRequest;
            toAmino(message: _69.AssetTypeRequest): _69.AssetTypeRequestAmino;
            fromAminoMsg(object: _69.AssetTypeRequestAminoMsg): _69.AssetTypeRequest;
            toAminoMsg(message: _69.AssetTypeRequest): _69.AssetTypeRequestAminoMsg;
            fromProtoMsg(message: _69.AssetTypeRequestProtoMsg): _69.AssetTypeRequest;
            toProto(message: _69.AssetTypeRequest): Uint8Array;
            toProtoMsg(message: _69.AssetTypeRequest): _69.AssetTypeRequestProtoMsg;
        };
        AssetTypeResponse: {
            typeUrl: string;
            encode(message: _69.AssetTypeResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _69.AssetTypeResponse;
            fromPartial(object: Partial<_69.AssetTypeResponse>): _69.AssetTypeResponse;
            fromAmino(object: _69.AssetTypeResponseAmino): _69.AssetTypeResponse;
            toAmino(message: _69.AssetTypeResponse): _69.AssetTypeResponseAmino;
            fromAminoMsg(object: _69.AssetTypeResponseAminoMsg): _69.AssetTypeResponse;
            toAminoMsg(message: _69.AssetTypeResponse): _69.AssetTypeResponseAminoMsg;
            fromProtoMsg(message: _69.AssetTypeResponseProtoMsg): _69.AssetTypeResponse;
            toProto(message: _69.AssetTypeResponse): Uint8Array;
            toProtoMsg(message: _69.AssetTypeResponse): _69.AssetTypeResponseProtoMsg;
        };
        AllAssetsRequest: {
            typeUrl: string;
            encode(_: _69.AllAssetsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(_: any): _69.AllAssetsRequest;
            fromPartial(_: Partial<_69.AllAssetsRequest>): _69.AllAssetsRequest;
            fromAmino(_: _69.AllAssetsRequestAmino): _69.AllAssetsRequest;
            toAmino(_: _69.AllAssetsRequest): _69.AllAssetsRequestAmino;
            fromAminoMsg(object: _69.AllAssetsRequestAminoMsg): _69.AllAssetsRequest;
            toAminoMsg(message: _69.AllAssetsRequest): _69.AllAssetsRequestAminoMsg;
            fromProtoMsg(message: _69.AllAssetsRequestProtoMsg): _69.AllAssetsRequest;
            toProto(message: _69.AllAssetsRequest): Uint8Array;
            toProtoMsg(message: _69.AllAssetsRequest): _69.AllAssetsRequestProtoMsg;
        };
        AllAssetsResponse: {
            typeUrl: string;
            encode(message: _69.AllAssetsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _69.AllAssetsResponse;
            fromPartial(object: Partial<_69.AllAssetsResponse>): _69.AllAssetsResponse;
            fromAmino(object: _69.AllAssetsResponseAmino): _69.AllAssetsResponse;
            toAmino(message: _69.AllAssetsResponse): _69.AllAssetsResponseAmino;
            fromAminoMsg(object: _69.AllAssetsResponseAminoMsg): _69.AllAssetsResponse;
            toAminoMsg(message: _69.AllAssetsResponse): _69.AllAssetsResponseAminoMsg;
            fromProtoMsg(message: _69.AllAssetsResponseProtoMsg): _69.AllAssetsResponse;
            toProto(message: _69.AllAssetsResponse): Uint8Array;
            toProtoMsg(message: _69.AllAssetsResponse): _69.AllAssetsResponseProtoMsg;
        };
        AssetMultiplierRequest: {
            typeUrl: string;
            encode(message: _69.AssetMultiplierRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _69.AssetMultiplierRequest;
            fromPartial(object: Partial<_69.AssetMultiplierRequest>): _69.AssetMultiplierRequest;
            fromAmino(object: _69.AssetMultiplierRequestAmino): _69.AssetMultiplierRequest;
            toAmino(message: _69.AssetMultiplierRequest): _69.AssetMultiplierRequestAmino;
            fromAminoMsg(object: _69.AssetMultiplierRequestAminoMsg): _69.AssetMultiplierRequest;
            toAminoMsg(message: _69.AssetMultiplierRequest): _69.AssetMultiplierRequestAminoMsg;
            fromProtoMsg(message: _69.AssetMultiplierRequestProtoMsg): _69.AssetMultiplierRequest;
            toProto(message: _69.AssetMultiplierRequest): Uint8Array;
            toProtoMsg(message: _69.AssetMultiplierRequest): _69.AssetMultiplierRequestProtoMsg;
        };
        AssetMultiplierResponse: {
            typeUrl: string;
            encode(message: _69.AssetMultiplierResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _69.AssetMultiplierResponse;
            fromPartial(object: Partial<_69.AssetMultiplierResponse>): _69.AssetMultiplierResponse;
            fromAmino(object: _69.AssetMultiplierResponseAmino): _69.AssetMultiplierResponse;
            toAmino(message: _69.AssetMultiplierResponse): _69.AssetMultiplierResponseAmino;
            fromAminoMsg(object: _69.AssetMultiplierResponseAminoMsg): _69.AssetMultiplierResponse;
            toAminoMsg(message: _69.AssetMultiplierResponse): _69.AssetMultiplierResponseAminoMsg;
            fromProtoMsg(message: _69.AssetMultiplierResponseProtoMsg): _69.AssetMultiplierResponse;
            toProto(message: _69.AssetMultiplierResponse): Uint8Array;
            toProtoMsg(message: _69.AssetMultiplierResponse): _69.AssetMultiplierResponseProtoMsg;
        };
        SuperfluidIntermediaryAccountInfo: {
            typeUrl: string;
            encode(message: _69.SuperfluidIntermediaryAccountInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _69.SuperfluidIntermediaryAccountInfo;
            fromPartial(object: Partial<_69.SuperfluidIntermediaryAccountInfo>): _69.SuperfluidIntermediaryAccountInfo;
            fromAmino(object: _69.SuperfluidIntermediaryAccountInfoAmino): _69.SuperfluidIntermediaryAccountInfo;
            toAmino(message: _69.SuperfluidIntermediaryAccountInfo): _69.SuperfluidIntermediaryAccountInfoAmino;
            fromAminoMsg(object: _69.SuperfluidIntermediaryAccountInfoAminoMsg): _69.SuperfluidIntermediaryAccountInfo;
            toAminoMsg(message: _69.SuperfluidIntermediaryAccountInfo): _69.SuperfluidIntermediaryAccountInfoAminoMsg;
            fromProtoMsg(message: _69.SuperfluidIntermediaryAccountInfoProtoMsg): _69.SuperfluidIntermediaryAccountInfo;
            toProto(message: _69.SuperfluidIntermediaryAccountInfo): Uint8Array;
            toProtoMsg(message: _69.SuperfluidIntermediaryAccountInfo): _69.SuperfluidIntermediaryAccountInfoProtoMsg;
        };
        AllIntermediaryAccountsRequest: {
            typeUrl: string;
            encode(message: _69.AllIntermediaryAccountsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _69.AllIntermediaryAccountsRequest;
            fromPartial(object: Partial<_69.AllIntermediaryAccountsRequest>): _69.AllIntermediaryAccountsRequest;
            fromAmino(object: _69.AllIntermediaryAccountsRequestAmino): _69.AllIntermediaryAccountsRequest;
            toAmino(message: _69.AllIntermediaryAccountsRequest): _69.AllIntermediaryAccountsRequestAmino;
            fromAminoMsg(object: _69.AllIntermediaryAccountsRequestAminoMsg): _69.AllIntermediaryAccountsRequest;
            toAminoMsg(message: _69.AllIntermediaryAccountsRequest): _69.AllIntermediaryAccountsRequestAminoMsg;
            fromProtoMsg(message: _69.AllIntermediaryAccountsRequestProtoMsg): _69.AllIntermediaryAccountsRequest;
            toProto(message: _69.AllIntermediaryAccountsRequest): Uint8Array;
            toProtoMsg(message: _69.AllIntermediaryAccountsRequest): _69.AllIntermediaryAccountsRequestProtoMsg;
        };
        AllIntermediaryAccountsResponse: {
            typeUrl: string;
            encode(message: _69.AllIntermediaryAccountsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _69.AllIntermediaryAccountsResponse;
            fromPartial(object: Partial<_69.AllIntermediaryAccountsResponse>): _69.AllIntermediaryAccountsResponse;
            fromAmino(object: _69.AllIntermediaryAccountsResponseAmino): _69.AllIntermediaryAccountsResponse;
            toAmino(message: _69.AllIntermediaryAccountsResponse): _69.AllIntermediaryAccountsResponseAmino;
            fromAminoMsg(object: _69.AllIntermediaryAccountsResponseAminoMsg): _69.AllIntermediaryAccountsResponse;
            toAminoMsg(message: _69.AllIntermediaryAccountsResponse): _69.AllIntermediaryAccountsResponseAminoMsg;
            fromProtoMsg(message: _69.AllIntermediaryAccountsResponseProtoMsg): _69.AllIntermediaryAccountsResponse;
            toProto(message: _69.AllIntermediaryAccountsResponse): Uint8Array;
            toProtoMsg(message: _69.AllIntermediaryAccountsResponse): _69.AllIntermediaryAccountsResponseProtoMsg;
        };
        ConnectedIntermediaryAccountRequest: {
            typeUrl: string;
            encode(message: _69.ConnectedIntermediaryAccountRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _69.ConnectedIntermediaryAccountRequest;
            fromPartial(object: Partial<_69.ConnectedIntermediaryAccountRequest>): _69.ConnectedIntermediaryAccountRequest;
            fromAmino(object: _69.ConnectedIntermediaryAccountRequestAmino): _69.ConnectedIntermediaryAccountRequest;
            toAmino(message: _69.ConnectedIntermediaryAccountRequest): _69.ConnectedIntermediaryAccountRequestAmino;
            fromAminoMsg(object: _69.ConnectedIntermediaryAccountRequestAminoMsg): _69.ConnectedIntermediaryAccountRequest;
            toAminoMsg(message: _69.ConnectedIntermediaryAccountRequest): _69.ConnectedIntermediaryAccountRequestAminoMsg;
            fromProtoMsg(message: _69.ConnectedIntermediaryAccountRequestProtoMsg): _69.ConnectedIntermediaryAccountRequest;
            toProto(message: _69.ConnectedIntermediaryAccountRequest): Uint8Array;
            toProtoMsg(message: _69.ConnectedIntermediaryAccountRequest): _69.ConnectedIntermediaryAccountRequestProtoMsg;
        };
        ConnectedIntermediaryAccountResponse: {
            typeUrl: string;
            encode(message: _69.ConnectedIntermediaryAccountResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _69.ConnectedIntermediaryAccountResponse;
            fromPartial(object: Partial<_69.ConnectedIntermediaryAccountResponse>): _69.ConnectedIntermediaryAccountResponse;
            fromAmino(object: _69.ConnectedIntermediaryAccountResponseAmino): _69.ConnectedIntermediaryAccountResponse;
            toAmino(message: _69.ConnectedIntermediaryAccountResponse): _69.ConnectedIntermediaryAccountResponseAmino;
            fromAminoMsg(object: _69.ConnectedIntermediaryAccountResponseAminoMsg): _69.ConnectedIntermediaryAccountResponse;
            toAminoMsg(message: _69.ConnectedIntermediaryAccountResponse): _69.ConnectedIntermediaryAccountResponseAminoMsg;
            fromProtoMsg(message: _69.ConnectedIntermediaryAccountResponseProtoMsg): _69.ConnectedIntermediaryAccountResponse;
            toProto(message: _69.ConnectedIntermediaryAccountResponse): Uint8Array;
            toProtoMsg(message: _69.ConnectedIntermediaryAccountResponse): _69.ConnectedIntermediaryAccountResponseProtoMsg;
        };
        QueryTotalDelegationByValidatorForDenomRequest: {
            typeUrl: string;
            encode(message: _69.QueryTotalDelegationByValidatorForDenomRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _69.QueryTotalDelegationByValidatorForDenomRequest;
            fromPartial(object: Partial<_69.QueryTotalDelegationByValidatorForDenomRequest>): _69.QueryTotalDelegationByValidatorForDenomRequest;
            fromAmino(object: _69.QueryTotalDelegationByValidatorForDenomRequestAmino): _69.QueryTotalDelegationByValidatorForDenomRequest;
            toAmino(message: _69.QueryTotalDelegationByValidatorForDenomRequest): _69.QueryTotalDelegationByValidatorForDenomRequestAmino;
            fromAminoMsg(object: _69.QueryTotalDelegationByValidatorForDenomRequestAminoMsg): _69.QueryTotalDelegationByValidatorForDenomRequest;
            toAminoMsg(message: _69.QueryTotalDelegationByValidatorForDenomRequest): _69.QueryTotalDelegationByValidatorForDenomRequestAminoMsg;
            fromProtoMsg(message: _69.QueryTotalDelegationByValidatorForDenomRequestProtoMsg): _69.QueryTotalDelegationByValidatorForDenomRequest;
            toProto(message: _69.QueryTotalDelegationByValidatorForDenomRequest): Uint8Array;
            toProtoMsg(message: _69.QueryTotalDelegationByValidatorForDenomRequest): _69.QueryTotalDelegationByValidatorForDenomRequestProtoMsg;
        };
        QueryTotalDelegationByValidatorForDenomResponse: {
            typeUrl: string;
            encode(message: _69.QueryTotalDelegationByValidatorForDenomResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _69.QueryTotalDelegationByValidatorForDenomResponse;
            fromPartial(object: Partial<_69.QueryTotalDelegationByValidatorForDenomResponse>): _69.QueryTotalDelegationByValidatorForDenomResponse;
            fromAmino(object: _69.QueryTotalDelegationByValidatorForDenomResponseAmino): _69.QueryTotalDelegationByValidatorForDenomResponse;
            toAmino(message: _69.QueryTotalDelegationByValidatorForDenomResponse): _69.QueryTotalDelegationByValidatorForDenomResponseAmino;
            fromAminoMsg(object: _69.QueryTotalDelegationByValidatorForDenomResponseAminoMsg): _69.QueryTotalDelegationByValidatorForDenomResponse;
            toAminoMsg(message: _69.QueryTotalDelegationByValidatorForDenomResponse): _69.QueryTotalDelegationByValidatorForDenomResponseAminoMsg;
            fromProtoMsg(message: _69.QueryTotalDelegationByValidatorForDenomResponseProtoMsg): _69.QueryTotalDelegationByValidatorForDenomResponse;
            toProto(message: _69.QueryTotalDelegationByValidatorForDenomResponse): Uint8Array;
            toProtoMsg(message: _69.QueryTotalDelegationByValidatorForDenomResponse): _69.QueryTotalDelegationByValidatorForDenomResponseProtoMsg;
        };
        Delegations: {
            typeUrl: string;
            encode(message: _69.Delegations, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _69.Delegations;
            fromPartial(object: Partial<_69.Delegations>): _69.Delegations;
            fromAmino(object: _69.DelegationsAmino): _69.Delegations;
            toAmino(message: _69.Delegations): _69.DelegationsAmino;
            fromAminoMsg(object: _69.DelegationsAminoMsg): _69.Delegations;
            toAminoMsg(message: _69.Delegations): _69.DelegationsAminoMsg;
            fromProtoMsg(message: _69.DelegationsProtoMsg): _69.Delegations;
            toProto(message: _69.Delegations): Uint8Array;
            toProtoMsg(message: _69.Delegations): _69.DelegationsProtoMsg;
        };
        TotalSuperfluidDelegationsRequest: {
            typeUrl: string;
            encode(_: _69.TotalSuperfluidDelegationsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(_: any): _69.TotalSuperfluidDelegationsRequest;
            fromPartial(_: Partial<_69.TotalSuperfluidDelegationsRequest>): _69.TotalSuperfluidDelegationsRequest;
            fromAmino(_: _69.TotalSuperfluidDelegationsRequestAmino): _69.TotalSuperfluidDelegationsRequest;
            toAmino(_: _69.TotalSuperfluidDelegationsRequest): _69.TotalSuperfluidDelegationsRequestAmino;
            fromAminoMsg(object: _69.TotalSuperfluidDelegationsRequestAminoMsg): _69.TotalSuperfluidDelegationsRequest;
            toAminoMsg(message: _69.TotalSuperfluidDelegationsRequest): _69.TotalSuperfluidDelegationsRequestAminoMsg;
            fromProtoMsg(message: _69.TotalSuperfluidDelegationsRequestProtoMsg): _69.TotalSuperfluidDelegationsRequest;
            toProto(message: _69.TotalSuperfluidDelegationsRequest): Uint8Array;
            toProtoMsg(message: _69.TotalSuperfluidDelegationsRequest): _69.TotalSuperfluidDelegationsRequestProtoMsg;
        };
        TotalSuperfluidDelegationsResponse: {
            typeUrl: string;
            encode(message: _69.TotalSuperfluidDelegationsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _69.TotalSuperfluidDelegationsResponse;
            fromPartial(object: Partial<_69.TotalSuperfluidDelegationsResponse>): _69.TotalSuperfluidDelegationsResponse;
            fromAmino(object: _69.TotalSuperfluidDelegationsResponseAmino): _69.TotalSuperfluidDelegationsResponse;
            toAmino(message: _69.TotalSuperfluidDelegationsResponse): _69.TotalSuperfluidDelegationsResponseAmino;
            fromAminoMsg(object: _69.TotalSuperfluidDelegationsResponseAminoMsg): _69.TotalSuperfluidDelegationsResponse;
            toAminoMsg(message: _69.TotalSuperfluidDelegationsResponse): _69.TotalSuperfluidDelegationsResponseAminoMsg;
            fromProtoMsg(message: _69.TotalSuperfluidDelegationsResponseProtoMsg): _69.TotalSuperfluidDelegationsResponse;
            toProto(message: _69.TotalSuperfluidDelegationsResponse): Uint8Array;
            toProtoMsg(message: _69.TotalSuperfluidDelegationsResponse): _69.TotalSuperfluidDelegationsResponseProtoMsg;
        };
        SuperfluidDelegationAmountRequest: {
            typeUrl: string;
            encode(message: _69.SuperfluidDelegationAmountRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _69.SuperfluidDelegationAmountRequest;
            fromPartial(object: Partial<_69.SuperfluidDelegationAmountRequest>): _69.SuperfluidDelegationAmountRequest;
            fromAmino(object: _69.SuperfluidDelegationAmountRequestAmino): _69.SuperfluidDelegationAmountRequest;
            toAmino(message: _69.SuperfluidDelegationAmountRequest): _69.SuperfluidDelegationAmountRequestAmino;
            fromAminoMsg(object: _69.SuperfluidDelegationAmountRequestAminoMsg): _69.SuperfluidDelegationAmountRequest;
            toAminoMsg(message: _69.SuperfluidDelegationAmountRequest): _69.SuperfluidDelegationAmountRequestAminoMsg;
            fromProtoMsg(message: _69.SuperfluidDelegationAmountRequestProtoMsg): _69.SuperfluidDelegationAmountRequest;
            toProto(message: _69.SuperfluidDelegationAmountRequest): Uint8Array;
            toProtoMsg(message: _69.SuperfluidDelegationAmountRequest): _69.SuperfluidDelegationAmountRequestProtoMsg;
        };
        SuperfluidDelegationAmountResponse: {
            typeUrl: string;
            encode(message: _69.SuperfluidDelegationAmountResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _69.SuperfluidDelegationAmountResponse;
            fromPartial(object: Partial<_69.SuperfluidDelegationAmountResponse>): _69.SuperfluidDelegationAmountResponse;
            fromAmino(object: _69.SuperfluidDelegationAmountResponseAmino): _69.SuperfluidDelegationAmountResponse;
            toAmino(message: _69.SuperfluidDelegationAmountResponse): _69.SuperfluidDelegationAmountResponseAmino;
            fromAminoMsg(object: _69.SuperfluidDelegationAmountResponseAminoMsg): _69.SuperfluidDelegationAmountResponse;
            toAminoMsg(message: _69.SuperfluidDelegationAmountResponse): _69.SuperfluidDelegationAmountResponseAminoMsg;
            fromProtoMsg(message: _69.SuperfluidDelegationAmountResponseProtoMsg): _69.SuperfluidDelegationAmountResponse;
            toProto(message: _69.SuperfluidDelegationAmountResponse): Uint8Array;
            toProtoMsg(message: _69.SuperfluidDelegationAmountResponse): _69.SuperfluidDelegationAmountResponseProtoMsg;
        };
        SuperfluidDelegationsByDelegatorRequest: {
            typeUrl: string;
            encode(message: _69.SuperfluidDelegationsByDelegatorRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _69.SuperfluidDelegationsByDelegatorRequest;
            fromPartial(object: Partial<_69.SuperfluidDelegationsByDelegatorRequest>): _69.SuperfluidDelegationsByDelegatorRequest;
            fromAmino(object: _69.SuperfluidDelegationsByDelegatorRequestAmino): _69.SuperfluidDelegationsByDelegatorRequest;
            toAmino(message: _69.SuperfluidDelegationsByDelegatorRequest): _69.SuperfluidDelegationsByDelegatorRequestAmino;
            fromAminoMsg(object: _69.SuperfluidDelegationsByDelegatorRequestAminoMsg): _69.SuperfluidDelegationsByDelegatorRequest;
            toAminoMsg(message: _69.SuperfluidDelegationsByDelegatorRequest): _69.SuperfluidDelegationsByDelegatorRequestAminoMsg;
            fromProtoMsg(message: _69.SuperfluidDelegationsByDelegatorRequestProtoMsg): _69.SuperfluidDelegationsByDelegatorRequest;
            toProto(message: _69.SuperfluidDelegationsByDelegatorRequest): Uint8Array;
            toProtoMsg(message: _69.SuperfluidDelegationsByDelegatorRequest): _69.SuperfluidDelegationsByDelegatorRequestProtoMsg;
        };
        SuperfluidDelegationsByDelegatorResponse: {
            typeUrl: string;
            encode(message: _69.SuperfluidDelegationsByDelegatorResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _69.SuperfluidDelegationsByDelegatorResponse;
            fromPartial(object: Partial<_69.SuperfluidDelegationsByDelegatorResponse>): _69.SuperfluidDelegationsByDelegatorResponse;
            fromAmino(object: _69.SuperfluidDelegationsByDelegatorResponseAmino): _69.SuperfluidDelegationsByDelegatorResponse;
            toAmino(message: _69.SuperfluidDelegationsByDelegatorResponse): _69.SuperfluidDelegationsByDelegatorResponseAmino;
            fromAminoMsg(object: _69.SuperfluidDelegationsByDelegatorResponseAminoMsg): _69.SuperfluidDelegationsByDelegatorResponse;
            toAminoMsg(message: _69.SuperfluidDelegationsByDelegatorResponse): _69.SuperfluidDelegationsByDelegatorResponseAminoMsg;
            fromProtoMsg(message: _69.SuperfluidDelegationsByDelegatorResponseProtoMsg): _69.SuperfluidDelegationsByDelegatorResponse;
            toProto(message: _69.SuperfluidDelegationsByDelegatorResponse): Uint8Array;
            toProtoMsg(message: _69.SuperfluidDelegationsByDelegatorResponse): _69.SuperfluidDelegationsByDelegatorResponseProtoMsg;
        };
        SuperfluidUndelegationsByDelegatorRequest: {
            typeUrl: string;
            encode(message: _69.SuperfluidUndelegationsByDelegatorRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _69.SuperfluidUndelegationsByDelegatorRequest;
            fromPartial(object: Partial<_69.SuperfluidUndelegationsByDelegatorRequest>): _69.SuperfluidUndelegationsByDelegatorRequest;
            fromAmino(object: _69.SuperfluidUndelegationsByDelegatorRequestAmino): _69.SuperfluidUndelegationsByDelegatorRequest;
            toAmino(message: _69.SuperfluidUndelegationsByDelegatorRequest): _69.SuperfluidUndelegationsByDelegatorRequestAmino;
            fromAminoMsg(object: _69.SuperfluidUndelegationsByDelegatorRequestAminoMsg): _69.SuperfluidUndelegationsByDelegatorRequest;
            toAminoMsg(message: _69.SuperfluidUndelegationsByDelegatorRequest): _69.SuperfluidUndelegationsByDelegatorRequestAminoMsg;
            fromProtoMsg(message: _69.SuperfluidUndelegationsByDelegatorRequestProtoMsg): _69.SuperfluidUndelegationsByDelegatorRequest;
            toProto(message: _69.SuperfluidUndelegationsByDelegatorRequest): Uint8Array;
            toProtoMsg(message: _69.SuperfluidUndelegationsByDelegatorRequest): _69.SuperfluidUndelegationsByDelegatorRequestProtoMsg;
        };
        SuperfluidUndelegationsByDelegatorResponse: {
            typeUrl: string;
            encode(message: _69.SuperfluidUndelegationsByDelegatorResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _69.SuperfluidUndelegationsByDelegatorResponse;
            fromPartial(object: Partial<_69.SuperfluidUndelegationsByDelegatorResponse>): _69.SuperfluidUndelegationsByDelegatorResponse;
            fromAmino(object: _69.SuperfluidUndelegationsByDelegatorResponseAmino): _69.SuperfluidUndelegationsByDelegatorResponse;
            toAmino(message: _69.SuperfluidUndelegationsByDelegatorResponse): _69.SuperfluidUndelegationsByDelegatorResponseAmino;
            fromAminoMsg(object: _69.SuperfluidUndelegationsByDelegatorResponseAminoMsg): _69.SuperfluidUndelegationsByDelegatorResponse;
            toAminoMsg(message: _69.SuperfluidUndelegationsByDelegatorResponse): _69.SuperfluidUndelegationsByDelegatorResponseAminoMsg;
            fromProtoMsg(message: _69.SuperfluidUndelegationsByDelegatorResponseProtoMsg): _69.SuperfluidUndelegationsByDelegatorResponse;
            toProto(message: _69.SuperfluidUndelegationsByDelegatorResponse): Uint8Array;
            toProtoMsg(message: _69.SuperfluidUndelegationsByDelegatorResponse): _69.SuperfluidUndelegationsByDelegatorResponseProtoMsg;
        };
        SuperfluidDelegationsByValidatorDenomRequest: {
            typeUrl: string;
            encode(message: _69.SuperfluidDelegationsByValidatorDenomRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _69.SuperfluidDelegationsByValidatorDenomRequest;
            fromPartial(object: Partial<_69.SuperfluidDelegationsByValidatorDenomRequest>): _69.SuperfluidDelegationsByValidatorDenomRequest;
            fromAmino(object: _69.SuperfluidDelegationsByValidatorDenomRequestAmino): _69.SuperfluidDelegationsByValidatorDenomRequest;
            toAmino(message: _69.SuperfluidDelegationsByValidatorDenomRequest): _69.SuperfluidDelegationsByValidatorDenomRequestAmino;
            fromAminoMsg(object: _69.SuperfluidDelegationsByValidatorDenomRequestAminoMsg): _69.SuperfluidDelegationsByValidatorDenomRequest;
            toAminoMsg(message: _69.SuperfluidDelegationsByValidatorDenomRequest): _69.SuperfluidDelegationsByValidatorDenomRequestAminoMsg;
            fromProtoMsg(message: _69.SuperfluidDelegationsByValidatorDenomRequestProtoMsg): _69.SuperfluidDelegationsByValidatorDenomRequest;
            toProto(message: _69.SuperfluidDelegationsByValidatorDenomRequest): Uint8Array;
            toProtoMsg(message: _69.SuperfluidDelegationsByValidatorDenomRequest): _69.SuperfluidDelegationsByValidatorDenomRequestProtoMsg;
        };
        SuperfluidDelegationsByValidatorDenomResponse: {
            typeUrl: string;
            encode(message: _69.SuperfluidDelegationsByValidatorDenomResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _69.SuperfluidDelegationsByValidatorDenomResponse;
            fromPartial(object: Partial<_69.SuperfluidDelegationsByValidatorDenomResponse>): _69.SuperfluidDelegationsByValidatorDenomResponse;
            fromAmino(object: _69.SuperfluidDelegationsByValidatorDenomResponseAmino): _69.SuperfluidDelegationsByValidatorDenomResponse;
            toAmino(message: _69.SuperfluidDelegationsByValidatorDenomResponse): _69.SuperfluidDelegationsByValidatorDenomResponseAmino;
            fromAminoMsg(object: _69.SuperfluidDelegationsByValidatorDenomResponseAminoMsg): _69.SuperfluidDelegationsByValidatorDenomResponse;
            toAminoMsg(message: _69.SuperfluidDelegationsByValidatorDenomResponse): _69.SuperfluidDelegationsByValidatorDenomResponseAminoMsg;
            fromProtoMsg(message: _69.SuperfluidDelegationsByValidatorDenomResponseProtoMsg): _69.SuperfluidDelegationsByValidatorDenomResponse;
            toProto(message: _69.SuperfluidDelegationsByValidatorDenomResponse): Uint8Array;
            toProtoMsg(message: _69.SuperfluidDelegationsByValidatorDenomResponse): _69.SuperfluidDelegationsByValidatorDenomResponseProtoMsg;
        };
        EstimateSuperfluidDelegatedAmountByValidatorDenomRequest: {
            typeUrl: string;
            encode(message: _69.EstimateSuperfluidDelegatedAmountByValidatorDenomRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _69.EstimateSuperfluidDelegatedAmountByValidatorDenomRequest;
            fromPartial(object: Partial<_69.EstimateSuperfluidDelegatedAmountByValidatorDenomRequest>): _69.EstimateSuperfluidDelegatedAmountByValidatorDenomRequest;
            fromAmino(object: _69.EstimateSuperfluidDelegatedAmountByValidatorDenomRequestAmino): _69.EstimateSuperfluidDelegatedAmountByValidatorDenomRequest;
            toAmino(message: _69.EstimateSuperfluidDelegatedAmountByValidatorDenomRequest): _69.EstimateSuperfluidDelegatedAmountByValidatorDenomRequestAmino;
            fromAminoMsg(object: _69.EstimateSuperfluidDelegatedAmountByValidatorDenomRequestAminoMsg): _69.EstimateSuperfluidDelegatedAmountByValidatorDenomRequest;
            toAminoMsg(message: _69.EstimateSuperfluidDelegatedAmountByValidatorDenomRequest): _69.EstimateSuperfluidDelegatedAmountByValidatorDenomRequestAminoMsg;
            fromProtoMsg(message: _69.EstimateSuperfluidDelegatedAmountByValidatorDenomRequestProtoMsg): _69.EstimateSuperfluidDelegatedAmountByValidatorDenomRequest;
            toProto(message: _69.EstimateSuperfluidDelegatedAmountByValidatorDenomRequest): Uint8Array;
            toProtoMsg(message: _69.EstimateSuperfluidDelegatedAmountByValidatorDenomRequest): _69.EstimateSuperfluidDelegatedAmountByValidatorDenomRequestProtoMsg;
        };
        EstimateSuperfluidDelegatedAmountByValidatorDenomResponse: {
            typeUrl: string;
            encode(message: _69.EstimateSuperfluidDelegatedAmountByValidatorDenomResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _69.EstimateSuperfluidDelegatedAmountByValidatorDenomResponse;
            fromPartial(object: Partial<_69.EstimateSuperfluidDelegatedAmountByValidatorDenomResponse>): _69.EstimateSuperfluidDelegatedAmountByValidatorDenomResponse;
            fromAmino(object: _69.EstimateSuperfluidDelegatedAmountByValidatorDenomResponseAmino): _69.EstimateSuperfluidDelegatedAmountByValidatorDenomResponse;
            toAmino(message: _69.EstimateSuperfluidDelegatedAmountByValidatorDenomResponse): _69.EstimateSuperfluidDelegatedAmountByValidatorDenomResponseAmino;
            fromAminoMsg(object: _69.EstimateSuperfluidDelegatedAmountByValidatorDenomResponseAminoMsg): _69.EstimateSuperfluidDelegatedAmountByValidatorDenomResponse;
            toAminoMsg(message: _69.EstimateSuperfluidDelegatedAmountByValidatorDenomResponse): _69.EstimateSuperfluidDelegatedAmountByValidatorDenomResponseAminoMsg;
            fromProtoMsg(message: _69.EstimateSuperfluidDelegatedAmountByValidatorDenomResponseProtoMsg): _69.EstimateSuperfluidDelegatedAmountByValidatorDenomResponse;
            toProto(message: _69.EstimateSuperfluidDelegatedAmountByValidatorDenomResponse): Uint8Array;
            toProtoMsg(message: _69.EstimateSuperfluidDelegatedAmountByValidatorDenomResponse): _69.EstimateSuperfluidDelegatedAmountByValidatorDenomResponseProtoMsg;
        };
        QueryTotalDelegationByDelegatorRequest: {
            typeUrl: string;
            encode(message: _69.QueryTotalDelegationByDelegatorRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _69.QueryTotalDelegationByDelegatorRequest;
            fromPartial(object: Partial<_69.QueryTotalDelegationByDelegatorRequest>): _69.QueryTotalDelegationByDelegatorRequest;
            fromAmino(object: _69.QueryTotalDelegationByDelegatorRequestAmino): _69.QueryTotalDelegationByDelegatorRequest;
            toAmino(message: _69.QueryTotalDelegationByDelegatorRequest): _69.QueryTotalDelegationByDelegatorRequestAmino;
            fromAminoMsg(object: _69.QueryTotalDelegationByDelegatorRequestAminoMsg): _69.QueryTotalDelegationByDelegatorRequest;
            toAminoMsg(message: _69.QueryTotalDelegationByDelegatorRequest): _69.QueryTotalDelegationByDelegatorRequestAminoMsg;
            fromProtoMsg(message: _69.QueryTotalDelegationByDelegatorRequestProtoMsg): _69.QueryTotalDelegationByDelegatorRequest;
            toProto(message: _69.QueryTotalDelegationByDelegatorRequest): Uint8Array;
            toProtoMsg(message: _69.QueryTotalDelegationByDelegatorRequest): _69.QueryTotalDelegationByDelegatorRequestProtoMsg;
        };
        QueryTotalDelegationByDelegatorResponse: {
            typeUrl: string;
            encode(message: _69.QueryTotalDelegationByDelegatorResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _69.QueryTotalDelegationByDelegatorResponse;
            fromPartial(object: Partial<_69.QueryTotalDelegationByDelegatorResponse>): _69.QueryTotalDelegationByDelegatorResponse;
            fromAmino(object: _69.QueryTotalDelegationByDelegatorResponseAmino): _69.QueryTotalDelegationByDelegatorResponse;
            toAmino(message: _69.QueryTotalDelegationByDelegatorResponse): _69.QueryTotalDelegationByDelegatorResponseAmino;
            fromAminoMsg(object: _69.QueryTotalDelegationByDelegatorResponseAminoMsg): _69.QueryTotalDelegationByDelegatorResponse;
            toAminoMsg(message: _69.QueryTotalDelegationByDelegatorResponse): _69.QueryTotalDelegationByDelegatorResponseAminoMsg;
            fromProtoMsg(message: _69.QueryTotalDelegationByDelegatorResponseProtoMsg): _69.QueryTotalDelegationByDelegatorResponse;
            toProto(message: _69.QueryTotalDelegationByDelegatorResponse): Uint8Array;
            toProtoMsg(message: _69.QueryTotalDelegationByDelegatorResponse): _69.QueryTotalDelegationByDelegatorResponseProtoMsg;
        };
        QueryUnpoolWhitelistRequest: {
            typeUrl: string;
            encode(_: _69.QueryUnpoolWhitelistRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(_: any): _69.QueryUnpoolWhitelistRequest;
            fromPartial(_: Partial<_69.QueryUnpoolWhitelistRequest>): _69.QueryUnpoolWhitelistRequest;
            fromAmino(_: _69.QueryUnpoolWhitelistRequestAmino): _69.QueryUnpoolWhitelistRequest;
            toAmino(_: _69.QueryUnpoolWhitelistRequest): _69.QueryUnpoolWhitelistRequestAmino;
            fromAminoMsg(object: _69.QueryUnpoolWhitelistRequestAminoMsg): _69.QueryUnpoolWhitelistRequest;
            toAminoMsg(message: _69.QueryUnpoolWhitelistRequest): _69.QueryUnpoolWhitelistRequestAminoMsg;
            fromProtoMsg(message: _69.QueryUnpoolWhitelistRequestProtoMsg): _69.QueryUnpoolWhitelistRequest;
            toProto(message: _69.QueryUnpoolWhitelistRequest): Uint8Array;
            toProtoMsg(message: _69.QueryUnpoolWhitelistRequest): _69.QueryUnpoolWhitelistRequestProtoMsg;
        };
        QueryUnpoolWhitelistResponse: {
            typeUrl: string;
            encode(message: _69.QueryUnpoolWhitelistResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _69.QueryUnpoolWhitelistResponse;
            fromPartial(object: Partial<_69.QueryUnpoolWhitelistResponse>): _69.QueryUnpoolWhitelistResponse;
            fromAmino(object: _69.QueryUnpoolWhitelistResponseAmino): _69.QueryUnpoolWhitelistResponse;
            toAmino(message: _69.QueryUnpoolWhitelistResponse): _69.QueryUnpoolWhitelistResponseAmino;
            fromAminoMsg(object: _69.QueryUnpoolWhitelistResponseAminoMsg): _69.QueryUnpoolWhitelistResponse;
            toAminoMsg(message: _69.QueryUnpoolWhitelistResponse): _69.QueryUnpoolWhitelistResponseAminoMsg;
            fromProtoMsg(message: _69.QueryUnpoolWhitelistResponseProtoMsg): _69.QueryUnpoolWhitelistResponse;
            toProto(message: _69.QueryUnpoolWhitelistResponse): Uint8Array;
            toProtoMsg(message: _69.QueryUnpoolWhitelistResponse): _69.QueryUnpoolWhitelistResponseProtoMsg;
        };
        UserConcentratedSuperfluidPositionsDelegatedRequest: {
            typeUrl: string;
            encode(message: _69.UserConcentratedSuperfluidPositionsDelegatedRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _69.UserConcentratedSuperfluidPositionsDelegatedRequest;
            fromPartial(object: Partial<_69.UserConcentratedSuperfluidPositionsDelegatedRequest>): _69.UserConcentratedSuperfluidPositionsDelegatedRequest;
            fromAmino(object: _69.UserConcentratedSuperfluidPositionsDelegatedRequestAmino): _69.UserConcentratedSuperfluidPositionsDelegatedRequest;
            toAmino(message: _69.UserConcentratedSuperfluidPositionsDelegatedRequest): _69.UserConcentratedSuperfluidPositionsDelegatedRequestAmino;
            fromAminoMsg(object: _69.UserConcentratedSuperfluidPositionsDelegatedRequestAminoMsg): _69.UserConcentratedSuperfluidPositionsDelegatedRequest;
            toAminoMsg(message: _69.UserConcentratedSuperfluidPositionsDelegatedRequest): _69.UserConcentratedSuperfluidPositionsDelegatedRequestAminoMsg;
            fromProtoMsg(message: _69.UserConcentratedSuperfluidPositionsDelegatedRequestProtoMsg): _69.UserConcentratedSuperfluidPositionsDelegatedRequest;
            toProto(message: _69.UserConcentratedSuperfluidPositionsDelegatedRequest): Uint8Array;
            toProtoMsg(message: _69.UserConcentratedSuperfluidPositionsDelegatedRequest): _69.UserConcentratedSuperfluidPositionsDelegatedRequestProtoMsg;
        };
        UserConcentratedSuperfluidPositionsDelegatedResponse: {
            typeUrl: string;
            encode(message: _69.UserConcentratedSuperfluidPositionsDelegatedResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _69.UserConcentratedSuperfluidPositionsDelegatedResponse;
            fromPartial(object: Partial<_69.UserConcentratedSuperfluidPositionsDelegatedResponse>): _69.UserConcentratedSuperfluidPositionsDelegatedResponse;
            fromAmino(object: _69.UserConcentratedSuperfluidPositionsDelegatedResponseAmino): _69.UserConcentratedSuperfluidPositionsDelegatedResponse;
            toAmino(message: _69.UserConcentratedSuperfluidPositionsDelegatedResponse): _69.UserConcentratedSuperfluidPositionsDelegatedResponseAmino;
            fromAminoMsg(object: _69.UserConcentratedSuperfluidPositionsDelegatedResponseAminoMsg): _69.UserConcentratedSuperfluidPositionsDelegatedResponse;
            toAminoMsg(message: _69.UserConcentratedSuperfluidPositionsDelegatedResponse): _69.UserConcentratedSuperfluidPositionsDelegatedResponseAminoMsg;
            fromProtoMsg(message: _69.UserConcentratedSuperfluidPositionsDelegatedResponseProtoMsg): _69.UserConcentratedSuperfluidPositionsDelegatedResponse;
            toProto(message: _69.UserConcentratedSuperfluidPositionsDelegatedResponse): Uint8Array;
            toProtoMsg(message: _69.UserConcentratedSuperfluidPositionsDelegatedResponse): _69.UserConcentratedSuperfluidPositionsDelegatedResponseProtoMsg;
        };
        UserConcentratedSuperfluidPositionsUndelegatingRequest: {
            typeUrl: string;
            encode(message: _69.UserConcentratedSuperfluidPositionsUndelegatingRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _69.UserConcentratedSuperfluidPositionsUndelegatingRequest;
            fromPartial(object: Partial<_69.UserConcentratedSuperfluidPositionsUndelegatingRequest>): _69.UserConcentratedSuperfluidPositionsUndelegatingRequest;
            fromAmino(object: _69.UserConcentratedSuperfluidPositionsUndelegatingRequestAmino): _69.UserConcentratedSuperfluidPositionsUndelegatingRequest;
            toAmino(message: _69.UserConcentratedSuperfluidPositionsUndelegatingRequest): _69.UserConcentratedSuperfluidPositionsUndelegatingRequestAmino;
            fromAminoMsg(object: _69.UserConcentratedSuperfluidPositionsUndelegatingRequestAminoMsg): _69.UserConcentratedSuperfluidPositionsUndelegatingRequest;
            toAminoMsg(message: _69.UserConcentratedSuperfluidPositionsUndelegatingRequest): _69.UserConcentratedSuperfluidPositionsUndelegatingRequestAminoMsg;
            fromProtoMsg(message: _69.UserConcentratedSuperfluidPositionsUndelegatingRequestProtoMsg): _69.UserConcentratedSuperfluidPositionsUndelegatingRequest;
            toProto(message: _69.UserConcentratedSuperfluidPositionsUndelegatingRequest): Uint8Array;
            toProtoMsg(message: _69.UserConcentratedSuperfluidPositionsUndelegatingRequest): _69.UserConcentratedSuperfluidPositionsUndelegatingRequestProtoMsg;
        };
        UserConcentratedSuperfluidPositionsUndelegatingResponse: {
            typeUrl: string;
            encode(message: _69.UserConcentratedSuperfluidPositionsUndelegatingResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _69.UserConcentratedSuperfluidPositionsUndelegatingResponse;
            fromPartial(object: Partial<_69.UserConcentratedSuperfluidPositionsUndelegatingResponse>): _69.UserConcentratedSuperfluidPositionsUndelegatingResponse;
            fromAmino(object: _69.UserConcentratedSuperfluidPositionsUndelegatingResponseAmino): _69.UserConcentratedSuperfluidPositionsUndelegatingResponse;
            toAmino(message: _69.UserConcentratedSuperfluidPositionsUndelegatingResponse): _69.UserConcentratedSuperfluidPositionsUndelegatingResponseAmino;
            fromAminoMsg(object: _69.UserConcentratedSuperfluidPositionsUndelegatingResponseAminoMsg): _69.UserConcentratedSuperfluidPositionsUndelegatingResponse;
            toAminoMsg(message: _69.UserConcentratedSuperfluidPositionsUndelegatingResponse): _69.UserConcentratedSuperfluidPositionsUndelegatingResponseAminoMsg;
            fromProtoMsg(message: _69.UserConcentratedSuperfluidPositionsUndelegatingResponseProtoMsg): _69.UserConcentratedSuperfluidPositionsUndelegatingResponse;
            toProto(message: _69.UserConcentratedSuperfluidPositionsUndelegatingResponse): Uint8Array;
            toProtoMsg(message: _69.UserConcentratedSuperfluidPositionsUndelegatingResponse): _69.UserConcentratedSuperfluidPositionsUndelegatingResponseProtoMsg;
        };
        Params: {
            typeUrl: string;
            encode(message: _68.Params, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _68.Params;
            fromPartial(object: Partial<_68.Params>): _68.Params;
            fromAmino(object: _68.ParamsAmino): _68.Params;
            toAmino(message: _68.Params): _68.ParamsAmino;
            fromAminoMsg(object: _68.ParamsAminoMsg): _68.Params;
            toAminoMsg(message: _68.Params): _68.ParamsAminoMsg;
            fromProtoMsg(message: _68.ParamsProtoMsg): _68.Params;
            toProto(message: _68.Params): Uint8Array;
            toProtoMsg(message: _68.Params): _68.ParamsProtoMsg;
        };
        GenesisState: {
            typeUrl: string;
            encode(message: _67.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _67.GenesisState;
            fromPartial(object: Partial<_67.GenesisState>): _67.GenesisState;
            fromAmino(object: _67.GenesisStateAmino): _67.GenesisState;
            toAmino(message: _67.GenesisState): _67.GenesisStateAmino;
            fromAminoMsg(object: _67.GenesisStateAminoMsg): _67.GenesisState;
            toAminoMsg(message: _67.GenesisState): _67.GenesisStateAminoMsg;
            fromProtoMsg(message: _67.GenesisStateProtoMsg): _67.GenesisState;
            toProto(message: _67.GenesisState): Uint8Array;
            toProtoMsg(message: _67.GenesisState): _67.GenesisStateProtoMsg;
        };
    };
    namespace tokenfactory {
        const v1beta1: {
            MsgClientImpl: typeof _262.MsgClientImpl;
            QueryClientImpl: typeof _247.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                params(request?: _75.QueryParamsRequest): Promise<_75.QueryParamsResponse>;
                denomAuthorityMetadata(request: _75.QueryDenomAuthorityMetadataRequest): Promise<_75.QueryDenomAuthorityMetadataResponse>;
                denomsFromCreator(request: _75.QueryDenomsFromCreatorRequest): Promise<_75.QueryDenomsFromCreatorResponse>;
                beforeSendHookAddress(request: _75.QueryBeforeSendHookAddressRequest): Promise<_75.QueryBeforeSendHookAddressResponse>;
            };
            LCDQueryClient: typeof _229.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    createDenom(value: _76.MsgCreateDenom): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    mint(value: _76.MsgMint): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    burn(value: _76.MsgBurn): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    changeAdmin(value: _76.MsgChangeAdmin): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    setDenomMetadata(value: _76.MsgSetDenomMetadata): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    setBeforeSendHook(value: _76.MsgSetBeforeSendHook): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    forceTransfer(value: _76.MsgForceTransfer): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    createDenom(value: _76.MsgCreateDenom): {
                        typeUrl: string;
                        value: _76.MsgCreateDenom;
                    };
                    mint(value: _76.MsgMint): {
                        typeUrl: string;
                        value: _76.MsgMint;
                    };
                    burn(value: _76.MsgBurn): {
                        typeUrl: string;
                        value: _76.MsgBurn;
                    };
                    changeAdmin(value: _76.MsgChangeAdmin): {
                        typeUrl: string;
                        value: _76.MsgChangeAdmin;
                    };
                    setDenomMetadata(value: _76.MsgSetDenomMetadata): {
                        typeUrl: string;
                        value: _76.MsgSetDenomMetadata;
                    };
                    setBeforeSendHook(value: _76.MsgSetBeforeSendHook): {
                        typeUrl: string;
                        value: _76.MsgSetBeforeSendHook;
                    };
                    forceTransfer(value: _76.MsgForceTransfer): {
                        typeUrl: string;
                        value: _76.MsgForceTransfer;
                    };
                };
                fromJSON: {
                    createDenom(value: any): {
                        typeUrl: string;
                        value: _76.MsgCreateDenom;
                    };
                    mint(value: any): {
                        typeUrl: string;
                        value: _76.MsgMint;
                    };
                    burn(value: any): {
                        typeUrl: string;
                        value: _76.MsgBurn;
                    };
                    changeAdmin(value: any): {
                        typeUrl: string;
                        value: _76.MsgChangeAdmin;
                    };
                    setDenomMetadata(value: any): {
                        typeUrl: string;
                        value: _76.MsgSetDenomMetadata;
                    };
                    setBeforeSendHook(value: any): {
                        typeUrl: string;
                        value: _76.MsgSetBeforeSendHook;
                    };
                    forceTransfer(value: any): {
                        typeUrl: string;
                        value: _76.MsgForceTransfer;
                    };
                };
                fromPartial: {
                    createDenom(value: _76.MsgCreateDenom): {
                        typeUrl: string;
                        value: _76.MsgCreateDenom;
                    };
                    mint(value: _76.MsgMint): {
                        typeUrl: string;
                        value: _76.MsgMint;
                    };
                    burn(value: _76.MsgBurn): {
                        typeUrl: string;
                        value: _76.MsgBurn;
                    };
                    changeAdmin(value: _76.MsgChangeAdmin): {
                        typeUrl: string;
                        value: _76.MsgChangeAdmin;
                    };
                    setDenomMetadata(value: _76.MsgSetDenomMetadata): {
                        typeUrl: string;
                        value: _76.MsgSetDenomMetadata;
                    };
                    setBeforeSendHook(value: _76.MsgSetBeforeSendHook): {
                        typeUrl: string;
                        value: _76.MsgSetBeforeSendHook;
                    };
                    forceTransfer(value: _76.MsgForceTransfer): {
                        typeUrl: string;
                        value: _76.MsgForceTransfer;
                    };
                };
            };
            AminoConverter: {
                "/osmosis.tokenfactory.v1beta1.MsgCreateDenom": {
                    aminoType: string;
                    toAmino: (message: _76.MsgCreateDenom) => _76.MsgCreateDenomAmino;
                    fromAmino: (object: _76.MsgCreateDenomAmino) => _76.MsgCreateDenom;
                };
                "/osmosis.tokenfactory.v1beta1.MsgMint": {
                    aminoType: string;
                    toAmino: (message: _76.MsgMint) => _76.MsgMintAmino;
                    fromAmino: (object: _76.MsgMintAmino) => _76.MsgMint;
                };
                "/osmosis.tokenfactory.v1beta1.MsgBurn": {
                    aminoType: string;
                    toAmino: (message: _76.MsgBurn) => _76.MsgBurnAmino;
                    fromAmino: (object: _76.MsgBurnAmino) => _76.MsgBurn;
                };
                "/osmosis.tokenfactory.v1beta1.MsgChangeAdmin": {
                    aminoType: string;
                    toAmino: (message: _76.MsgChangeAdmin) => _76.MsgChangeAdminAmino;
                    fromAmino: (object: _76.MsgChangeAdminAmino) => _76.MsgChangeAdmin;
                };
                "/osmosis.tokenfactory.v1beta1.MsgSetDenomMetadata": {
                    aminoType: string;
                    toAmino: (message: _76.MsgSetDenomMetadata) => _76.MsgSetDenomMetadataAmino;
                    fromAmino: (object: _76.MsgSetDenomMetadataAmino) => _76.MsgSetDenomMetadata;
                };
                "/osmosis.tokenfactory.v1beta1.MsgSetBeforeSendHook": {
                    aminoType: string;
                    toAmino: (message: _76.MsgSetBeforeSendHook) => _76.MsgSetBeforeSendHookAmino;
                    fromAmino: (object: _76.MsgSetBeforeSendHookAmino) => _76.MsgSetBeforeSendHook;
                };
                "/osmosis.tokenfactory.v1beta1.MsgForceTransfer": {
                    aminoType: string;
                    toAmino: (message: _76.MsgForceTransfer) => _76.MsgForceTransferAmino;
                    fromAmino: (object: _76.MsgForceTransferAmino) => _76.MsgForceTransfer;
                };
            };
            MsgCreateDenom: {
                typeUrl: string;
                encode(message: _76.MsgCreateDenom, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _76.MsgCreateDenom;
                fromPartial(object: Partial<_76.MsgCreateDenom>): _76.MsgCreateDenom;
                fromAmino(object: _76.MsgCreateDenomAmino): _76.MsgCreateDenom;
                toAmino(message: _76.MsgCreateDenom): _76.MsgCreateDenomAmino;
                fromAminoMsg(object: _76.MsgCreateDenomAminoMsg): _76.MsgCreateDenom;
                toAminoMsg(message: _76.MsgCreateDenom): _76.MsgCreateDenomAminoMsg;
                fromProtoMsg(message: _76.MsgCreateDenomProtoMsg): _76.MsgCreateDenom;
                toProto(message: _76.MsgCreateDenom): Uint8Array;
                toProtoMsg(message: _76.MsgCreateDenom): _76.MsgCreateDenomProtoMsg;
            };
            MsgCreateDenomResponse: {
                typeUrl: string;
                encode(message: _76.MsgCreateDenomResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _76.MsgCreateDenomResponse;
                fromPartial(object: Partial<_76.MsgCreateDenomResponse>): _76.MsgCreateDenomResponse;
                fromAmino(object: _76.MsgCreateDenomResponseAmino): _76.MsgCreateDenomResponse;
                toAmino(message: _76.MsgCreateDenomResponse): _76.MsgCreateDenomResponseAmino;
                fromAminoMsg(object: _76.MsgCreateDenomResponseAminoMsg): _76.MsgCreateDenomResponse;
                toAminoMsg(message: _76.MsgCreateDenomResponse): _76.MsgCreateDenomResponseAminoMsg;
                fromProtoMsg(message: _76.MsgCreateDenomResponseProtoMsg): _76.MsgCreateDenomResponse;
                toProto(message: _76.MsgCreateDenomResponse): Uint8Array;
                toProtoMsg(message: _76.MsgCreateDenomResponse): _76.MsgCreateDenomResponseProtoMsg;
            };
            MsgMint: {
                typeUrl: string;
                encode(message: _76.MsgMint, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _76.MsgMint;
                fromPartial(object: Partial<_76.MsgMint>): _76.MsgMint;
                fromAmino(object: _76.MsgMintAmino): _76.MsgMint;
                toAmino(message: _76.MsgMint): _76.MsgMintAmino;
                fromAminoMsg(object: _76.MsgMintAminoMsg): _76.MsgMint;
                toAminoMsg(message: _76.MsgMint): _76.MsgMintAminoMsg;
                fromProtoMsg(message: _76.MsgMintProtoMsg): _76.MsgMint;
                toProto(message: _76.MsgMint): Uint8Array;
                toProtoMsg(message: _76.MsgMint): _76.MsgMintProtoMsg;
            };
            MsgMintResponse: {
                typeUrl: string;
                encode(_: _76.MsgMintResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _76.MsgMintResponse;
                fromPartial(_: Partial<_76.MsgMintResponse>): _76.MsgMintResponse;
                fromAmino(_: _76.MsgMintResponseAmino): _76.MsgMintResponse;
                toAmino(_: _76.MsgMintResponse): _76.MsgMintResponseAmino;
                fromAminoMsg(object: _76.MsgMintResponseAminoMsg): _76.MsgMintResponse;
                toAminoMsg(message: _76.MsgMintResponse): _76.MsgMintResponseAminoMsg;
                fromProtoMsg(message: _76.MsgMintResponseProtoMsg): _76.MsgMintResponse;
                toProto(message: _76.MsgMintResponse): Uint8Array;
                toProtoMsg(message: _76.MsgMintResponse): _76.MsgMintResponseProtoMsg;
            };
            MsgBurn: {
                typeUrl: string;
                encode(message: _76.MsgBurn, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _76.MsgBurn;
                fromPartial(object: Partial<_76.MsgBurn>): _76.MsgBurn;
                fromAmino(object: _76.MsgBurnAmino): _76.MsgBurn;
                toAmino(message: _76.MsgBurn): _76.MsgBurnAmino;
                fromAminoMsg(object: _76.MsgBurnAminoMsg): _76.MsgBurn;
                toAminoMsg(message: _76.MsgBurn): _76.MsgBurnAminoMsg;
                fromProtoMsg(message: _76.MsgBurnProtoMsg): _76.MsgBurn;
                toProto(message: _76.MsgBurn): Uint8Array;
                toProtoMsg(message: _76.MsgBurn): _76.MsgBurnProtoMsg;
            };
            MsgBurnResponse: {
                typeUrl: string;
                encode(_: _76.MsgBurnResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _76.MsgBurnResponse;
                fromPartial(_: Partial<_76.MsgBurnResponse>): _76.MsgBurnResponse;
                fromAmino(_: _76.MsgBurnResponseAmino): _76.MsgBurnResponse;
                toAmino(_: _76.MsgBurnResponse): _76.MsgBurnResponseAmino;
                fromAminoMsg(object: _76.MsgBurnResponseAminoMsg): _76.MsgBurnResponse;
                toAminoMsg(message: _76.MsgBurnResponse): _76.MsgBurnResponseAminoMsg;
                fromProtoMsg(message: _76.MsgBurnResponseProtoMsg): _76.MsgBurnResponse;
                toProto(message: _76.MsgBurnResponse): Uint8Array;
                toProtoMsg(message: _76.MsgBurnResponse): _76.MsgBurnResponseProtoMsg;
            };
            MsgChangeAdmin: {
                typeUrl: string;
                encode(message: _76.MsgChangeAdmin, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _76.MsgChangeAdmin;
                fromPartial(object: Partial<_76.MsgChangeAdmin>): _76.MsgChangeAdmin;
                fromAmino(object: _76.MsgChangeAdminAmino): _76.MsgChangeAdmin;
                toAmino(message: _76.MsgChangeAdmin): _76.MsgChangeAdminAmino;
                fromAminoMsg(object: _76.MsgChangeAdminAminoMsg): _76.MsgChangeAdmin;
                toAminoMsg(message: _76.MsgChangeAdmin): _76.MsgChangeAdminAminoMsg;
                fromProtoMsg(message: _76.MsgChangeAdminProtoMsg): _76.MsgChangeAdmin;
                toProto(message: _76.MsgChangeAdmin): Uint8Array;
                toProtoMsg(message: _76.MsgChangeAdmin): _76.MsgChangeAdminProtoMsg;
            };
            MsgChangeAdminResponse: {
                typeUrl: string;
                encode(_: _76.MsgChangeAdminResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _76.MsgChangeAdminResponse;
                fromPartial(_: Partial<_76.MsgChangeAdminResponse>): _76.MsgChangeAdminResponse;
                fromAmino(_: _76.MsgChangeAdminResponseAmino): _76.MsgChangeAdminResponse;
                toAmino(_: _76.MsgChangeAdminResponse): _76.MsgChangeAdminResponseAmino;
                fromAminoMsg(object: _76.MsgChangeAdminResponseAminoMsg): _76.MsgChangeAdminResponse;
                toAminoMsg(message: _76.MsgChangeAdminResponse): _76.MsgChangeAdminResponseAminoMsg;
                fromProtoMsg(message: _76.MsgChangeAdminResponseProtoMsg): _76.MsgChangeAdminResponse;
                toProto(message: _76.MsgChangeAdminResponse): Uint8Array;
                toProtoMsg(message: _76.MsgChangeAdminResponse): _76.MsgChangeAdminResponseProtoMsg;
            };
            MsgSetBeforeSendHook: {
                typeUrl: string;
                encode(message: _76.MsgSetBeforeSendHook, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _76.MsgSetBeforeSendHook;
                fromPartial(object: Partial<_76.MsgSetBeforeSendHook>): _76.MsgSetBeforeSendHook;
                fromAmino(object: _76.MsgSetBeforeSendHookAmino): _76.MsgSetBeforeSendHook;
                toAmino(message: _76.MsgSetBeforeSendHook): _76.MsgSetBeforeSendHookAmino;
                fromAminoMsg(object: _76.MsgSetBeforeSendHookAminoMsg): _76.MsgSetBeforeSendHook;
                toAminoMsg(message: _76.MsgSetBeforeSendHook): _76.MsgSetBeforeSendHookAminoMsg;
                fromProtoMsg(message: _76.MsgSetBeforeSendHookProtoMsg): _76.MsgSetBeforeSendHook;
                toProto(message: _76.MsgSetBeforeSendHook): Uint8Array;
                toProtoMsg(message: _76.MsgSetBeforeSendHook): _76.MsgSetBeforeSendHookProtoMsg;
            };
            MsgSetBeforeSendHookResponse: {
                typeUrl: string;
                encode(_: _76.MsgSetBeforeSendHookResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _76.MsgSetBeforeSendHookResponse;
                fromPartial(_: Partial<_76.MsgSetBeforeSendHookResponse>): _76.MsgSetBeforeSendHookResponse;
                fromAmino(_: _76.MsgSetBeforeSendHookResponseAmino): _76.MsgSetBeforeSendHookResponse;
                toAmino(_: _76.MsgSetBeforeSendHookResponse): _76.MsgSetBeforeSendHookResponseAmino;
                fromAminoMsg(object: _76.MsgSetBeforeSendHookResponseAminoMsg): _76.MsgSetBeforeSendHookResponse;
                toAminoMsg(message: _76.MsgSetBeforeSendHookResponse): _76.MsgSetBeforeSendHookResponseAminoMsg;
                fromProtoMsg(message: _76.MsgSetBeforeSendHookResponseProtoMsg): _76.MsgSetBeforeSendHookResponse;
                toProto(message: _76.MsgSetBeforeSendHookResponse): Uint8Array;
                toProtoMsg(message: _76.MsgSetBeforeSendHookResponse): _76.MsgSetBeforeSendHookResponseProtoMsg;
            };
            MsgSetDenomMetadata: {
                typeUrl: string;
                encode(message: _76.MsgSetDenomMetadata, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _76.MsgSetDenomMetadata;
                fromPartial(object: Partial<_76.MsgSetDenomMetadata>): _76.MsgSetDenomMetadata;
                fromAmino(object: _76.MsgSetDenomMetadataAmino): _76.MsgSetDenomMetadata;
                toAmino(message: _76.MsgSetDenomMetadata): _76.MsgSetDenomMetadataAmino;
                fromAminoMsg(object: _76.MsgSetDenomMetadataAminoMsg): _76.MsgSetDenomMetadata;
                toAminoMsg(message: _76.MsgSetDenomMetadata): _76.MsgSetDenomMetadataAminoMsg;
                fromProtoMsg(message: _76.MsgSetDenomMetadataProtoMsg): _76.MsgSetDenomMetadata;
                toProto(message: _76.MsgSetDenomMetadata): Uint8Array;
                toProtoMsg(message: _76.MsgSetDenomMetadata): _76.MsgSetDenomMetadataProtoMsg;
            };
            MsgSetDenomMetadataResponse: {
                typeUrl: string;
                encode(_: _76.MsgSetDenomMetadataResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _76.MsgSetDenomMetadataResponse;
                fromPartial(_: Partial<_76.MsgSetDenomMetadataResponse>): _76.MsgSetDenomMetadataResponse;
                fromAmino(_: _76.MsgSetDenomMetadataResponseAmino): _76.MsgSetDenomMetadataResponse;
                toAmino(_: _76.MsgSetDenomMetadataResponse): _76.MsgSetDenomMetadataResponseAmino;
                fromAminoMsg(object: _76.MsgSetDenomMetadataResponseAminoMsg): _76.MsgSetDenomMetadataResponse;
                toAminoMsg(message: _76.MsgSetDenomMetadataResponse): _76.MsgSetDenomMetadataResponseAminoMsg;
                fromProtoMsg(message: _76.MsgSetDenomMetadataResponseProtoMsg): _76.MsgSetDenomMetadataResponse;
                toProto(message: _76.MsgSetDenomMetadataResponse): Uint8Array;
                toProtoMsg(message: _76.MsgSetDenomMetadataResponse): _76.MsgSetDenomMetadataResponseProtoMsg;
            };
            MsgForceTransfer: {
                typeUrl: string;
                encode(message: _76.MsgForceTransfer, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _76.MsgForceTransfer;
                fromPartial(object: Partial<_76.MsgForceTransfer>): _76.MsgForceTransfer;
                fromAmino(object: _76.MsgForceTransferAmino): _76.MsgForceTransfer;
                toAmino(message: _76.MsgForceTransfer): _76.MsgForceTransferAmino;
                fromAminoMsg(object: _76.MsgForceTransferAminoMsg): _76.MsgForceTransfer;
                toAminoMsg(message: _76.MsgForceTransfer): _76.MsgForceTransferAminoMsg;
                fromProtoMsg(message: _76.MsgForceTransferProtoMsg): _76.MsgForceTransfer;
                toProto(message: _76.MsgForceTransfer): Uint8Array;
                toProtoMsg(message: _76.MsgForceTransfer): _76.MsgForceTransferProtoMsg;
            };
            MsgForceTransferResponse: {
                typeUrl: string;
                encode(_: _76.MsgForceTransferResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _76.MsgForceTransferResponse;
                fromPartial(_: Partial<_76.MsgForceTransferResponse>): _76.MsgForceTransferResponse;
                fromAmino(_: _76.MsgForceTransferResponseAmino): _76.MsgForceTransferResponse;
                toAmino(_: _76.MsgForceTransferResponse): _76.MsgForceTransferResponseAmino;
                fromAminoMsg(object: _76.MsgForceTransferResponseAminoMsg): _76.MsgForceTransferResponse;
                toAminoMsg(message: _76.MsgForceTransferResponse): _76.MsgForceTransferResponseAminoMsg;
                fromProtoMsg(message: _76.MsgForceTransferResponseProtoMsg): _76.MsgForceTransferResponse;
                toProto(message: _76.MsgForceTransferResponse): Uint8Array;
                toProtoMsg(message: _76.MsgForceTransferResponse): _76.MsgForceTransferResponseProtoMsg;
            };
            QueryParamsRequest: {
                typeUrl: string;
                encode(_: _75.QueryParamsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _75.QueryParamsRequest;
                fromPartial(_: Partial<_75.QueryParamsRequest>): _75.QueryParamsRequest;
                fromAmino(_: _75.QueryParamsRequestAmino): _75.QueryParamsRequest;
                toAmino(_: _75.QueryParamsRequest): _75.QueryParamsRequestAmino;
                fromAminoMsg(object: _75.QueryParamsRequestAminoMsg): _75.QueryParamsRequest;
                toAminoMsg(message: _75.QueryParamsRequest): _75.QueryParamsRequestAminoMsg;
                fromProtoMsg(message: _75.QueryParamsRequestProtoMsg): _75.QueryParamsRequest;
                toProto(message: _75.QueryParamsRequest): Uint8Array;
                toProtoMsg(message: _75.QueryParamsRequest): _75.QueryParamsRequestProtoMsg;
            };
            QueryParamsResponse: {
                typeUrl: string;
                encode(message: _75.QueryParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _75.QueryParamsResponse;
                fromPartial(object: Partial<_75.QueryParamsResponse>): _75.QueryParamsResponse;
                fromAmino(object: _75.QueryParamsResponseAmino): _75.QueryParamsResponse;
                toAmino(message: _75.QueryParamsResponse): _75.QueryParamsResponseAmino;
                fromAminoMsg(object: _75.QueryParamsResponseAminoMsg): _75.QueryParamsResponse;
                toAminoMsg(message: _75.QueryParamsResponse): _75.QueryParamsResponseAminoMsg;
                fromProtoMsg(message: _75.QueryParamsResponseProtoMsg): _75.QueryParamsResponse;
                toProto(message: _75.QueryParamsResponse): Uint8Array;
                toProtoMsg(message: _75.QueryParamsResponse): _75.QueryParamsResponseProtoMsg;
            };
            QueryDenomAuthorityMetadataRequest: {
                typeUrl: string;
                encode(message: _75.QueryDenomAuthorityMetadataRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _75.QueryDenomAuthorityMetadataRequest;
                fromPartial(object: Partial<_75.QueryDenomAuthorityMetadataRequest>): _75.QueryDenomAuthorityMetadataRequest;
                fromAmino(object: _75.QueryDenomAuthorityMetadataRequestAmino): _75.QueryDenomAuthorityMetadataRequest;
                toAmino(message: _75.QueryDenomAuthorityMetadataRequest): _75.QueryDenomAuthorityMetadataRequestAmino;
                fromAminoMsg(object: _75.QueryDenomAuthorityMetadataRequestAminoMsg): _75.QueryDenomAuthorityMetadataRequest;
                toAminoMsg(message: _75.QueryDenomAuthorityMetadataRequest): _75.QueryDenomAuthorityMetadataRequestAminoMsg;
                fromProtoMsg(message: _75.QueryDenomAuthorityMetadataRequestProtoMsg): _75.QueryDenomAuthorityMetadataRequest;
                toProto(message: _75.QueryDenomAuthorityMetadataRequest): Uint8Array;
                toProtoMsg(message: _75.QueryDenomAuthorityMetadataRequest): _75.QueryDenomAuthorityMetadataRequestProtoMsg;
            };
            QueryDenomAuthorityMetadataResponse: {
                typeUrl: string;
                encode(message: _75.QueryDenomAuthorityMetadataResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _75.QueryDenomAuthorityMetadataResponse;
                fromPartial(object: Partial<_75.QueryDenomAuthorityMetadataResponse>): _75.QueryDenomAuthorityMetadataResponse;
                fromAmino(object: _75.QueryDenomAuthorityMetadataResponseAmino): _75.QueryDenomAuthorityMetadataResponse;
                toAmino(message: _75.QueryDenomAuthorityMetadataResponse): _75.QueryDenomAuthorityMetadataResponseAmino;
                fromAminoMsg(object: _75.QueryDenomAuthorityMetadataResponseAminoMsg): _75.QueryDenomAuthorityMetadataResponse;
                toAminoMsg(message: _75.QueryDenomAuthorityMetadataResponse): _75.QueryDenomAuthorityMetadataResponseAminoMsg;
                fromProtoMsg(message: _75.QueryDenomAuthorityMetadataResponseProtoMsg): _75.QueryDenomAuthorityMetadataResponse;
                toProto(message: _75.QueryDenomAuthorityMetadataResponse): Uint8Array;
                toProtoMsg(message: _75.QueryDenomAuthorityMetadataResponse): _75.QueryDenomAuthorityMetadataResponseProtoMsg;
            };
            QueryDenomsFromCreatorRequest: {
                typeUrl: string;
                encode(message: _75.QueryDenomsFromCreatorRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _75.QueryDenomsFromCreatorRequest;
                fromPartial(object: Partial<_75.QueryDenomsFromCreatorRequest>): _75.QueryDenomsFromCreatorRequest;
                fromAmino(object: _75.QueryDenomsFromCreatorRequestAmino): _75.QueryDenomsFromCreatorRequest;
                toAmino(message: _75.QueryDenomsFromCreatorRequest): _75.QueryDenomsFromCreatorRequestAmino;
                fromAminoMsg(object: _75.QueryDenomsFromCreatorRequestAminoMsg): _75.QueryDenomsFromCreatorRequest;
                toAminoMsg(message: _75.QueryDenomsFromCreatorRequest): _75.QueryDenomsFromCreatorRequestAminoMsg;
                fromProtoMsg(message: _75.QueryDenomsFromCreatorRequestProtoMsg): _75.QueryDenomsFromCreatorRequest;
                toProto(message: _75.QueryDenomsFromCreatorRequest): Uint8Array;
                toProtoMsg(message: _75.QueryDenomsFromCreatorRequest): _75.QueryDenomsFromCreatorRequestProtoMsg;
            };
            QueryDenomsFromCreatorResponse: {
                typeUrl: string;
                encode(message: _75.QueryDenomsFromCreatorResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _75.QueryDenomsFromCreatorResponse;
                fromPartial(object: Partial<_75.QueryDenomsFromCreatorResponse>): _75.QueryDenomsFromCreatorResponse;
                fromAmino(object: _75.QueryDenomsFromCreatorResponseAmino): _75.QueryDenomsFromCreatorResponse;
                toAmino(message: _75.QueryDenomsFromCreatorResponse): _75.QueryDenomsFromCreatorResponseAmino;
                fromAminoMsg(object: _75.QueryDenomsFromCreatorResponseAminoMsg): _75.QueryDenomsFromCreatorResponse;
                toAminoMsg(message: _75.QueryDenomsFromCreatorResponse): _75.QueryDenomsFromCreatorResponseAminoMsg;
                fromProtoMsg(message: _75.QueryDenomsFromCreatorResponseProtoMsg): _75.QueryDenomsFromCreatorResponse;
                toProto(message: _75.QueryDenomsFromCreatorResponse): Uint8Array;
                toProtoMsg(message: _75.QueryDenomsFromCreatorResponse): _75.QueryDenomsFromCreatorResponseProtoMsg;
            };
            QueryBeforeSendHookAddressRequest: {
                typeUrl: string;
                encode(message: _75.QueryBeforeSendHookAddressRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _75.QueryBeforeSendHookAddressRequest;
                fromPartial(object: Partial<_75.QueryBeforeSendHookAddressRequest>): _75.QueryBeforeSendHookAddressRequest;
                fromAmino(object: _75.QueryBeforeSendHookAddressRequestAmino): _75.QueryBeforeSendHookAddressRequest;
                toAmino(message: _75.QueryBeforeSendHookAddressRequest): _75.QueryBeforeSendHookAddressRequestAmino;
                fromAminoMsg(object: _75.QueryBeforeSendHookAddressRequestAminoMsg): _75.QueryBeforeSendHookAddressRequest;
                toAminoMsg(message: _75.QueryBeforeSendHookAddressRequest): _75.QueryBeforeSendHookAddressRequestAminoMsg;
                fromProtoMsg(message: _75.QueryBeforeSendHookAddressRequestProtoMsg): _75.QueryBeforeSendHookAddressRequest;
                toProto(message: _75.QueryBeforeSendHookAddressRequest): Uint8Array;
                toProtoMsg(message: _75.QueryBeforeSendHookAddressRequest): _75.QueryBeforeSendHookAddressRequestProtoMsg;
            };
            QueryBeforeSendHookAddressResponse: {
                typeUrl: string;
                encode(message: _75.QueryBeforeSendHookAddressResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _75.QueryBeforeSendHookAddressResponse;
                fromPartial(object: Partial<_75.QueryBeforeSendHookAddressResponse>): _75.QueryBeforeSendHookAddressResponse;
                fromAmino(object: _75.QueryBeforeSendHookAddressResponseAmino): _75.QueryBeforeSendHookAddressResponse;
                toAmino(message: _75.QueryBeforeSendHookAddressResponse): _75.QueryBeforeSendHookAddressResponseAmino;
                fromAminoMsg(object: _75.QueryBeforeSendHookAddressResponseAminoMsg): _75.QueryBeforeSendHookAddressResponse;
                toAminoMsg(message: _75.QueryBeforeSendHookAddressResponse): _75.QueryBeforeSendHookAddressResponseAminoMsg;
                fromProtoMsg(message: _75.QueryBeforeSendHookAddressResponseProtoMsg): _75.QueryBeforeSendHookAddressResponse;
                toProto(message: _75.QueryBeforeSendHookAddressResponse): Uint8Array;
                toProtoMsg(message: _75.QueryBeforeSendHookAddressResponse): _75.QueryBeforeSendHookAddressResponseProtoMsg;
            };
            Params: {
                typeUrl: string;
                encode(message: _74.Params, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _74.Params;
                fromPartial(object: Partial<_74.Params>): _74.Params;
                fromAmino(object: _74.ParamsAmino): _74.Params;
                toAmino(message: _74.Params): _74.ParamsAmino;
                fromAminoMsg(object: _74.ParamsAminoMsg): _74.Params;
                toAminoMsg(message: _74.Params): _74.ParamsAminoMsg;
                fromProtoMsg(message: _74.ParamsProtoMsg): _74.Params;
                toProto(message: _74.Params): Uint8Array;
                toProtoMsg(message: _74.Params): _74.ParamsProtoMsg;
            };
            GenesisState: {
                typeUrl: string;
                encode(message: _73.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _73.GenesisState;
                fromPartial(object: Partial<_73.GenesisState>): _73.GenesisState;
                fromAmino(object: _73.GenesisStateAmino): _73.GenesisState;
                toAmino(message: _73.GenesisState): _73.GenesisStateAmino;
                fromAminoMsg(object: _73.GenesisStateAminoMsg): _73.GenesisState;
                toAminoMsg(message: _73.GenesisState): _73.GenesisStateAminoMsg;
                fromProtoMsg(message: _73.GenesisStateProtoMsg): _73.GenesisState;
                toProto(message: _73.GenesisState): Uint8Array;
                toProtoMsg(message: _73.GenesisState): _73.GenesisStateProtoMsg;
            };
            GenesisDenom: {
                typeUrl: string;
                encode(message: _73.GenesisDenom, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _73.GenesisDenom;
                fromPartial(object: Partial<_73.GenesisDenom>): _73.GenesisDenom;
                fromAmino(object: _73.GenesisDenomAmino): _73.GenesisDenom;
                toAmino(message: _73.GenesisDenom): _73.GenesisDenomAmino;
                fromAminoMsg(object: _73.GenesisDenomAminoMsg): _73.GenesisDenom;
                toAminoMsg(message: _73.GenesisDenom): _73.GenesisDenomAminoMsg;
                fromProtoMsg(message: _73.GenesisDenomProtoMsg): _73.GenesisDenom;
                toProto(message: _73.GenesisDenom): Uint8Array;
                toProtoMsg(message: _73.GenesisDenom): _73.GenesisDenomProtoMsg;
            };
            DenomAuthorityMetadata: {
                typeUrl: string;
                encode(message: _72.DenomAuthorityMetadata, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _72.DenomAuthorityMetadata;
                fromPartial(object: Partial<_72.DenomAuthorityMetadata>): _72.DenomAuthorityMetadata;
                fromAmino(object: _72.DenomAuthorityMetadataAmino): _72.DenomAuthorityMetadata;
                toAmino(message: _72.DenomAuthorityMetadata): _72.DenomAuthorityMetadataAmino;
                fromAminoMsg(object: _72.DenomAuthorityMetadataAminoMsg): _72.DenomAuthorityMetadata;
                toAminoMsg(message: _72.DenomAuthorityMetadata): _72.DenomAuthorityMetadataAminoMsg;
                fromProtoMsg(message: _72.DenomAuthorityMetadataProtoMsg): _72.DenomAuthorityMetadata;
                toProto(message: _72.DenomAuthorityMetadata): Uint8Array;
                toProtoMsg(message: _72.DenomAuthorityMetadata): _72.DenomAuthorityMetadataProtoMsg;
            };
        };
    }
    namespace twap {
        const v1beta1: {
            QueryClientImpl: typeof _248.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                params(request?: _78.ParamsRequest): Promise<_78.ParamsResponse>;
                arithmeticTwap(request: _78.ArithmeticTwapRequest): Promise<_78.ArithmeticTwapResponse>;
                arithmeticTwapToNow(request: _78.ArithmeticTwapToNowRequest): Promise<_78.ArithmeticTwapToNowResponse>;
                geometricTwap(request: _78.GeometricTwapRequest): Promise<_78.GeometricTwapResponse>;
                geometricTwapToNow(request: _78.GeometricTwapToNowRequest): Promise<_78.GeometricTwapToNowResponse>;
            };
            LCDQueryClient: typeof _230.LCDQueryClient;
            TwapRecord: {
                typeUrl: string;
                encode(message: _79.TwapRecord, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _79.TwapRecord;
                fromPartial(object: Partial<_79.TwapRecord>): _79.TwapRecord;
                fromAmino(object: _79.TwapRecordAmino): _79.TwapRecord;
                toAmino(message: _79.TwapRecord): _79.TwapRecordAmino;
                fromAminoMsg(object: _79.TwapRecordAminoMsg): _79.TwapRecord;
                toAminoMsg(message: _79.TwapRecord): _79.TwapRecordAminoMsg;
                fromProtoMsg(message: _79.TwapRecordProtoMsg): _79.TwapRecord;
                toProto(message: _79.TwapRecord): Uint8Array;
                toProtoMsg(message: _79.TwapRecord): _79.TwapRecordProtoMsg;
            };
            ArithmeticTwapRequest: {
                typeUrl: string;
                encode(message: _78.ArithmeticTwapRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _78.ArithmeticTwapRequest;
                fromPartial(object: Partial<_78.ArithmeticTwapRequest>): _78.ArithmeticTwapRequest;
                fromAmino(object: _78.ArithmeticTwapRequestAmino): _78.ArithmeticTwapRequest;
                toAmino(message: _78.ArithmeticTwapRequest): _78.ArithmeticTwapRequestAmino;
                fromAminoMsg(object: _78.ArithmeticTwapRequestAminoMsg): _78.ArithmeticTwapRequest;
                toAminoMsg(message: _78.ArithmeticTwapRequest): _78.ArithmeticTwapRequestAminoMsg;
                fromProtoMsg(message: _78.ArithmeticTwapRequestProtoMsg): _78.ArithmeticTwapRequest;
                toProto(message: _78.ArithmeticTwapRequest): Uint8Array;
                toProtoMsg(message: _78.ArithmeticTwapRequest): _78.ArithmeticTwapRequestProtoMsg;
            };
            ArithmeticTwapResponse: {
                typeUrl: string;
                encode(message: _78.ArithmeticTwapResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _78.ArithmeticTwapResponse;
                fromPartial(object: Partial<_78.ArithmeticTwapResponse>): _78.ArithmeticTwapResponse;
                fromAmino(object: _78.ArithmeticTwapResponseAmino): _78.ArithmeticTwapResponse;
                toAmino(message: _78.ArithmeticTwapResponse): _78.ArithmeticTwapResponseAmino;
                fromAminoMsg(object: _78.ArithmeticTwapResponseAminoMsg): _78.ArithmeticTwapResponse;
                toAminoMsg(message: _78.ArithmeticTwapResponse): _78.ArithmeticTwapResponseAminoMsg;
                fromProtoMsg(message: _78.ArithmeticTwapResponseProtoMsg): _78.ArithmeticTwapResponse;
                toProto(message: _78.ArithmeticTwapResponse): Uint8Array;
                toProtoMsg(message: _78.ArithmeticTwapResponse): _78.ArithmeticTwapResponseProtoMsg;
            };
            ArithmeticTwapToNowRequest: {
                typeUrl: string;
                encode(message: _78.ArithmeticTwapToNowRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _78.ArithmeticTwapToNowRequest;
                fromPartial(object: Partial<_78.ArithmeticTwapToNowRequest>): _78.ArithmeticTwapToNowRequest;
                fromAmino(object: _78.ArithmeticTwapToNowRequestAmino): _78.ArithmeticTwapToNowRequest;
                toAmino(message: _78.ArithmeticTwapToNowRequest): _78.ArithmeticTwapToNowRequestAmino;
                fromAminoMsg(object: _78.ArithmeticTwapToNowRequestAminoMsg): _78.ArithmeticTwapToNowRequest;
                toAminoMsg(message: _78.ArithmeticTwapToNowRequest): _78.ArithmeticTwapToNowRequestAminoMsg;
                fromProtoMsg(message: _78.ArithmeticTwapToNowRequestProtoMsg): _78.ArithmeticTwapToNowRequest;
                toProto(message: _78.ArithmeticTwapToNowRequest): Uint8Array;
                toProtoMsg(message: _78.ArithmeticTwapToNowRequest): _78.ArithmeticTwapToNowRequestProtoMsg;
            };
            ArithmeticTwapToNowResponse: {
                typeUrl: string;
                encode(message: _78.ArithmeticTwapToNowResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _78.ArithmeticTwapToNowResponse;
                fromPartial(object: Partial<_78.ArithmeticTwapToNowResponse>): _78.ArithmeticTwapToNowResponse;
                fromAmino(object: _78.ArithmeticTwapToNowResponseAmino): _78.ArithmeticTwapToNowResponse;
                toAmino(message: _78.ArithmeticTwapToNowResponse): _78.ArithmeticTwapToNowResponseAmino;
                fromAminoMsg(object: _78.ArithmeticTwapToNowResponseAminoMsg): _78.ArithmeticTwapToNowResponse;
                toAminoMsg(message: _78.ArithmeticTwapToNowResponse): _78.ArithmeticTwapToNowResponseAminoMsg;
                fromProtoMsg(message: _78.ArithmeticTwapToNowResponseProtoMsg): _78.ArithmeticTwapToNowResponse;
                toProto(message: _78.ArithmeticTwapToNowResponse): Uint8Array;
                toProtoMsg(message: _78.ArithmeticTwapToNowResponse): _78.ArithmeticTwapToNowResponseProtoMsg;
            };
            GeometricTwapRequest: {
                typeUrl: string;
                encode(message: _78.GeometricTwapRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _78.GeometricTwapRequest;
                fromPartial(object: Partial<_78.GeometricTwapRequest>): _78.GeometricTwapRequest;
                fromAmino(object: _78.GeometricTwapRequestAmino): _78.GeometricTwapRequest;
                toAmino(message: _78.GeometricTwapRequest): _78.GeometricTwapRequestAmino;
                fromAminoMsg(object: _78.GeometricTwapRequestAminoMsg): _78.GeometricTwapRequest;
                toAminoMsg(message: _78.GeometricTwapRequest): _78.GeometricTwapRequestAminoMsg;
                fromProtoMsg(message: _78.GeometricTwapRequestProtoMsg): _78.GeometricTwapRequest;
                toProto(message: _78.GeometricTwapRequest): Uint8Array;
                toProtoMsg(message: _78.GeometricTwapRequest): _78.GeometricTwapRequestProtoMsg;
            };
            GeometricTwapResponse: {
                typeUrl: string;
                encode(message: _78.GeometricTwapResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _78.GeometricTwapResponse;
                fromPartial(object: Partial<_78.GeometricTwapResponse>): _78.GeometricTwapResponse;
                fromAmino(object: _78.GeometricTwapResponseAmino): _78.GeometricTwapResponse;
                toAmino(message: _78.GeometricTwapResponse): _78.GeometricTwapResponseAmino;
                fromAminoMsg(object: _78.GeometricTwapResponseAminoMsg): _78.GeometricTwapResponse;
                toAminoMsg(message: _78.GeometricTwapResponse): _78.GeometricTwapResponseAminoMsg;
                fromProtoMsg(message: _78.GeometricTwapResponseProtoMsg): _78.GeometricTwapResponse;
                toProto(message: _78.GeometricTwapResponse): Uint8Array;
                toProtoMsg(message: _78.GeometricTwapResponse): _78.GeometricTwapResponseProtoMsg;
            };
            GeometricTwapToNowRequest: {
                typeUrl: string;
                encode(message: _78.GeometricTwapToNowRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _78.GeometricTwapToNowRequest;
                fromPartial(object: Partial<_78.GeometricTwapToNowRequest>): _78.GeometricTwapToNowRequest;
                fromAmino(object: _78.GeometricTwapToNowRequestAmino): _78.GeometricTwapToNowRequest;
                toAmino(message: _78.GeometricTwapToNowRequest): _78.GeometricTwapToNowRequestAmino;
                fromAminoMsg(object: _78.GeometricTwapToNowRequestAminoMsg): _78.GeometricTwapToNowRequest;
                toAminoMsg(message: _78.GeometricTwapToNowRequest): _78.GeometricTwapToNowRequestAminoMsg;
                fromProtoMsg(message: _78.GeometricTwapToNowRequestProtoMsg): _78.GeometricTwapToNowRequest;
                toProto(message: _78.GeometricTwapToNowRequest): Uint8Array;
                toProtoMsg(message: _78.GeometricTwapToNowRequest): _78.GeometricTwapToNowRequestProtoMsg;
            };
            GeometricTwapToNowResponse: {
                typeUrl: string;
                encode(message: _78.GeometricTwapToNowResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _78.GeometricTwapToNowResponse;
                fromPartial(object: Partial<_78.GeometricTwapToNowResponse>): _78.GeometricTwapToNowResponse;
                fromAmino(object: _78.GeometricTwapToNowResponseAmino): _78.GeometricTwapToNowResponse;
                toAmino(message: _78.GeometricTwapToNowResponse): _78.GeometricTwapToNowResponseAmino;
                fromAminoMsg(object: _78.GeometricTwapToNowResponseAminoMsg): _78.GeometricTwapToNowResponse;
                toAminoMsg(message: _78.GeometricTwapToNowResponse): _78.GeometricTwapToNowResponseAminoMsg;
                fromProtoMsg(message: _78.GeometricTwapToNowResponseProtoMsg): _78.GeometricTwapToNowResponse;
                toProto(message: _78.GeometricTwapToNowResponse): Uint8Array;
                toProtoMsg(message: _78.GeometricTwapToNowResponse): _78.GeometricTwapToNowResponseProtoMsg;
            };
            ParamsRequest: {
                typeUrl: string;
                encode(_: _78.ParamsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _78.ParamsRequest;
                fromPartial(_: Partial<_78.ParamsRequest>): _78.ParamsRequest;
                fromAmino(_: _78.ParamsRequestAmino): _78.ParamsRequest;
                toAmino(_: _78.ParamsRequest): _78.ParamsRequestAmino;
                fromAminoMsg(object: _78.ParamsRequestAminoMsg): _78.ParamsRequest;
                toAminoMsg(message: _78.ParamsRequest): _78.ParamsRequestAminoMsg;
                fromProtoMsg(message: _78.ParamsRequestProtoMsg): _78.ParamsRequest;
                toProto(message: _78.ParamsRequest): Uint8Array;
                toProtoMsg(message: _78.ParamsRequest): _78.ParamsRequestProtoMsg;
            };
            ParamsResponse: {
                typeUrl: string;
                encode(message: _78.ParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _78.ParamsResponse;
                fromPartial(object: Partial<_78.ParamsResponse>): _78.ParamsResponse;
                fromAmino(object: _78.ParamsResponseAmino): _78.ParamsResponse;
                toAmino(message: _78.ParamsResponse): _78.ParamsResponseAmino;
                fromAminoMsg(object: _78.ParamsResponseAminoMsg): _78.ParamsResponse;
                toAminoMsg(message: _78.ParamsResponse): _78.ParamsResponseAminoMsg;
                fromProtoMsg(message: _78.ParamsResponseProtoMsg): _78.ParamsResponse;
                toProto(message: _78.ParamsResponse): Uint8Array;
                toProtoMsg(message: _78.ParamsResponse): _78.ParamsResponseProtoMsg;
            };
            Params: {
                typeUrl: string;
                encode(message: _77.Params, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _77.Params;
                fromPartial(object: Partial<_77.Params>): _77.Params;
                fromAmino(object: _77.ParamsAmino): _77.Params;
                toAmino(message: _77.Params): _77.ParamsAmino;
                fromAminoMsg(object: _77.ParamsAminoMsg): _77.Params;
                toAminoMsg(message: _77.Params): _77.ParamsAminoMsg;
                fromProtoMsg(message: _77.ParamsProtoMsg): _77.Params;
                toProto(message: _77.Params): Uint8Array;
                toProtoMsg(message: _77.Params): _77.ParamsProtoMsg;
            };
            GenesisState: {
                typeUrl: string;
                encode(message: _77.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _77.GenesisState;
                fromPartial(object: Partial<_77.GenesisState>): _77.GenesisState;
                fromAmino(object: _77.GenesisStateAmino): _77.GenesisState;
                toAmino(message: _77.GenesisState): _77.GenesisStateAmino;
                fromAminoMsg(object: _77.GenesisStateAminoMsg): _77.GenesisState;
                toAminoMsg(message: _77.GenesisState): _77.GenesisStateAminoMsg;
                fromProtoMsg(message: _77.GenesisStateProtoMsg): _77.GenesisState;
                toProto(message: _77.GenesisState): Uint8Array;
                toProtoMsg(message: _77.GenesisState): _77.GenesisStateProtoMsg;
            };
        };
    }
    namespace txfees {
        const v1beta1: {
            QueryClientImpl: typeof _249.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                feeTokens(request?: _83.QueryFeeTokensRequest): Promise<_83.QueryFeeTokensResponse>;
                denomSpotPrice(request: _83.QueryDenomSpotPriceRequest): Promise<_83.QueryDenomSpotPriceResponse>;
                denomPoolId(request: _83.QueryDenomPoolIdRequest): Promise<_83.QueryDenomPoolIdResponse>;
                baseDenom(request?: _83.QueryBaseDenomRequest): Promise<_83.QueryBaseDenomResponse>;
            };
            LCDQueryClient: typeof _231.LCDQueryClient;
            QueryFeeTokensRequest: {
                typeUrl: string;
                encode(_: _83.QueryFeeTokensRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _83.QueryFeeTokensRequest;
                fromPartial(_: Partial<_83.QueryFeeTokensRequest>): _83.QueryFeeTokensRequest;
                fromAmino(_: _83.QueryFeeTokensRequestAmino): _83.QueryFeeTokensRequest;
                toAmino(_: _83.QueryFeeTokensRequest): _83.QueryFeeTokensRequestAmino;
                fromAminoMsg(object: _83.QueryFeeTokensRequestAminoMsg): _83.QueryFeeTokensRequest;
                toAminoMsg(message: _83.QueryFeeTokensRequest): _83.QueryFeeTokensRequestAminoMsg;
                fromProtoMsg(message: _83.QueryFeeTokensRequestProtoMsg): _83.QueryFeeTokensRequest;
                toProto(message: _83.QueryFeeTokensRequest): Uint8Array;
                toProtoMsg(message: _83.QueryFeeTokensRequest): _83.QueryFeeTokensRequestProtoMsg;
            };
            QueryFeeTokensResponse: {
                typeUrl: string;
                encode(message: _83.QueryFeeTokensResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _83.QueryFeeTokensResponse;
                fromPartial(object: Partial<_83.QueryFeeTokensResponse>): _83.QueryFeeTokensResponse;
                fromAmino(object: _83.QueryFeeTokensResponseAmino): _83.QueryFeeTokensResponse;
                toAmino(message: _83.QueryFeeTokensResponse): _83.QueryFeeTokensResponseAmino;
                fromAminoMsg(object: _83.QueryFeeTokensResponseAminoMsg): _83.QueryFeeTokensResponse;
                toAminoMsg(message: _83.QueryFeeTokensResponse): _83.QueryFeeTokensResponseAminoMsg;
                fromProtoMsg(message: _83.QueryFeeTokensResponseProtoMsg): _83.QueryFeeTokensResponse;
                toProto(message: _83.QueryFeeTokensResponse): Uint8Array;
                toProtoMsg(message: _83.QueryFeeTokensResponse): _83.QueryFeeTokensResponseProtoMsg;
            };
            QueryDenomSpotPriceRequest: {
                typeUrl: string;
                encode(message: _83.QueryDenomSpotPriceRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _83.QueryDenomSpotPriceRequest;
                fromPartial(object: Partial<_83.QueryDenomSpotPriceRequest>): _83.QueryDenomSpotPriceRequest;
                fromAmino(object: _83.QueryDenomSpotPriceRequestAmino): _83.QueryDenomSpotPriceRequest;
                toAmino(message: _83.QueryDenomSpotPriceRequest): _83.QueryDenomSpotPriceRequestAmino;
                fromAminoMsg(object: _83.QueryDenomSpotPriceRequestAminoMsg): _83.QueryDenomSpotPriceRequest;
                toAminoMsg(message: _83.QueryDenomSpotPriceRequest): _83.QueryDenomSpotPriceRequestAminoMsg;
                fromProtoMsg(message: _83.QueryDenomSpotPriceRequestProtoMsg): _83.QueryDenomSpotPriceRequest;
                toProto(message: _83.QueryDenomSpotPriceRequest): Uint8Array;
                toProtoMsg(message: _83.QueryDenomSpotPriceRequest): _83.QueryDenomSpotPriceRequestProtoMsg;
            };
            QueryDenomSpotPriceResponse: {
                typeUrl: string;
                encode(message: _83.QueryDenomSpotPriceResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _83.QueryDenomSpotPriceResponse;
                fromPartial(object: Partial<_83.QueryDenomSpotPriceResponse>): _83.QueryDenomSpotPriceResponse;
                fromAmino(object: _83.QueryDenomSpotPriceResponseAmino): _83.QueryDenomSpotPriceResponse;
                toAmino(message: _83.QueryDenomSpotPriceResponse): _83.QueryDenomSpotPriceResponseAmino;
                fromAminoMsg(object: _83.QueryDenomSpotPriceResponseAminoMsg): _83.QueryDenomSpotPriceResponse;
                toAminoMsg(message: _83.QueryDenomSpotPriceResponse): _83.QueryDenomSpotPriceResponseAminoMsg;
                fromProtoMsg(message: _83.QueryDenomSpotPriceResponseProtoMsg): _83.QueryDenomSpotPriceResponse;
                toProto(message: _83.QueryDenomSpotPriceResponse): Uint8Array;
                toProtoMsg(message: _83.QueryDenomSpotPriceResponse): _83.QueryDenomSpotPriceResponseProtoMsg;
            };
            QueryDenomPoolIdRequest: {
                typeUrl: string;
                encode(message: _83.QueryDenomPoolIdRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _83.QueryDenomPoolIdRequest;
                fromPartial(object: Partial<_83.QueryDenomPoolIdRequest>): _83.QueryDenomPoolIdRequest;
                fromAmino(object: _83.QueryDenomPoolIdRequestAmino): _83.QueryDenomPoolIdRequest;
                toAmino(message: _83.QueryDenomPoolIdRequest): _83.QueryDenomPoolIdRequestAmino;
                fromAminoMsg(object: _83.QueryDenomPoolIdRequestAminoMsg): _83.QueryDenomPoolIdRequest;
                toAminoMsg(message: _83.QueryDenomPoolIdRequest): _83.QueryDenomPoolIdRequestAminoMsg;
                fromProtoMsg(message: _83.QueryDenomPoolIdRequestProtoMsg): _83.QueryDenomPoolIdRequest;
                toProto(message: _83.QueryDenomPoolIdRequest): Uint8Array;
                toProtoMsg(message: _83.QueryDenomPoolIdRequest): _83.QueryDenomPoolIdRequestProtoMsg;
            };
            QueryDenomPoolIdResponse: {
                typeUrl: string;
                encode(message: _83.QueryDenomPoolIdResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _83.QueryDenomPoolIdResponse;
                fromPartial(object: Partial<_83.QueryDenomPoolIdResponse>): _83.QueryDenomPoolIdResponse;
                fromAmino(object: _83.QueryDenomPoolIdResponseAmino): _83.QueryDenomPoolIdResponse;
                toAmino(message: _83.QueryDenomPoolIdResponse): _83.QueryDenomPoolIdResponseAmino;
                fromAminoMsg(object: _83.QueryDenomPoolIdResponseAminoMsg): _83.QueryDenomPoolIdResponse;
                toAminoMsg(message: _83.QueryDenomPoolIdResponse): _83.QueryDenomPoolIdResponseAminoMsg;
                fromProtoMsg(message: _83.QueryDenomPoolIdResponseProtoMsg): _83.QueryDenomPoolIdResponse;
                toProto(message: _83.QueryDenomPoolIdResponse): Uint8Array;
                toProtoMsg(message: _83.QueryDenomPoolIdResponse): _83.QueryDenomPoolIdResponseProtoMsg;
            };
            QueryBaseDenomRequest: {
                typeUrl: string;
                encode(_: _83.QueryBaseDenomRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _83.QueryBaseDenomRequest;
                fromPartial(_: Partial<_83.QueryBaseDenomRequest>): _83.QueryBaseDenomRequest;
                fromAmino(_: _83.QueryBaseDenomRequestAmino): _83.QueryBaseDenomRequest;
                toAmino(_: _83.QueryBaseDenomRequest): _83.QueryBaseDenomRequestAmino;
                fromAminoMsg(object: _83.QueryBaseDenomRequestAminoMsg): _83.QueryBaseDenomRequest;
                toAminoMsg(message: _83.QueryBaseDenomRequest): _83.QueryBaseDenomRequestAminoMsg;
                fromProtoMsg(message: _83.QueryBaseDenomRequestProtoMsg): _83.QueryBaseDenomRequest;
                toProto(message: _83.QueryBaseDenomRequest): Uint8Array;
                toProtoMsg(message: _83.QueryBaseDenomRequest): _83.QueryBaseDenomRequestProtoMsg;
            };
            QueryBaseDenomResponse: {
                typeUrl: string;
                encode(message: _83.QueryBaseDenomResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _83.QueryBaseDenomResponse;
                fromPartial(object: Partial<_83.QueryBaseDenomResponse>): _83.QueryBaseDenomResponse;
                fromAmino(object: _83.QueryBaseDenomResponseAmino): _83.QueryBaseDenomResponse;
                toAmino(message: _83.QueryBaseDenomResponse): _83.QueryBaseDenomResponseAmino;
                fromAminoMsg(object: _83.QueryBaseDenomResponseAminoMsg): _83.QueryBaseDenomResponse;
                toAminoMsg(message: _83.QueryBaseDenomResponse): _83.QueryBaseDenomResponseAminoMsg;
                fromProtoMsg(message: _83.QueryBaseDenomResponseProtoMsg): _83.QueryBaseDenomResponse;
                toProto(message: _83.QueryBaseDenomResponse): Uint8Array;
                toProtoMsg(message: _83.QueryBaseDenomResponse): _83.QueryBaseDenomResponseProtoMsg;
            };
            UpdateFeeTokenProposal: {
                typeUrl: string;
                encode(message: _82.UpdateFeeTokenProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _82.UpdateFeeTokenProposal;
                fromPartial(object: Partial<_82.UpdateFeeTokenProposal>): _82.UpdateFeeTokenProposal;
                fromAmino(object: _82.UpdateFeeTokenProposalAmino): _82.UpdateFeeTokenProposal;
                toAmino(message: _82.UpdateFeeTokenProposal): _82.UpdateFeeTokenProposalAmino;
                fromAminoMsg(object: _82.UpdateFeeTokenProposalAminoMsg): _82.UpdateFeeTokenProposal;
                toAminoMsg(message: _82.UpdateFeeTokenProposal): _82.UpdateFeeTokenProposalAminoMsg;
                fromProtoMsg(message: _82.UpdateFeeTokenProposalProtoMsg): _82.UpdateFeeTokenProposal;
                toProto(message: _82.UpdateFeeTokenProposal): Uint8Array;
                toProtoMsg(message: _82.UpdateFeeTokenProposal): _82.UpdateFeeTokenProposalProtoMsg;
            };
            GenesisState: {
                typeUrl: string;
                encode(message: _81.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _81.GenesisState;
                fromPartial(object: Partial<_81.GenesisState>): _81.GenesisState;
                fromAmino(object: _81.GenesisStateAmino): _81.GenesisState;
                toAmino(message: _81.GenesisState): _81.GenesisStateAmino;
                fromAminoMsg(object: _81.GenesisStateAminoMsg): _81.GenesisState;
                toAminoMsg(message: _81.GenesisState): _81.GenesisStateAminoMsg;
                fromProtoMsg(message: _81.GenesisStateProtoMsg): _81.GenesisState;
                toProto(message: _81.GenesisState): Uint8Array;
                toProtoMsg(message: _81.GenesisState): _81.GenesisStateProtoMsg;
            };
            FeeToken: {
                typeUrl: string;
                encode(message: _80.FeeToken, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _80.FeeToken;
                fromPartial(object: Partial<_80.FeeToken>): _80.FeeToken;
                fromAmino(object: _80.FeeTokenAmino): _80.FeeToken;
                toAmino(message: _80.FeeToken): _80.FeeTokenAmino;
                fromAminoMsg(object: _80.FeeTokenAminoMsg): _80.FeeToken;
                toAminoMsg(message: _80.FeeToken): _80.FeeTokenAminoMsg;
                fromProtoMsg(message: _80.FeeTokenProtoMsg): _80.FeeToken;
                toProto(message: _80.FeeToken): Uint8Array;
                toProtoMsg(message: _80.FeeToken): _80.FeeTokenProtoMsg;
            };
        };
    }
    namespace valsetpref {
        const v1beta1: {
            MsgClientImpl: typeof _263.MsgClientImpl;
            QueryClientImpl: typeof _250.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                userValidatorPreferences(request: _84.UserValidatorPreferencesRequest): Promise<_84.UserValidatorPreferencesResponse>;
            };
            LCDQueryClient: typeof _232.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    setValidatorSetPreference(value: _86.MsgSetValidatorSetPreference): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    delegateToValidatorSet(value: _86.MsgDelegateToValidatorSet): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    undelegateFromValidatorSet(value: _86.MsgUndelegateFromValidatorSet): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    redelegateValidatorSet(value: _86.MsgRedelegateValidatorSet): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    withdrawDelegationRewards(value: _86.MsgWithdrawDelegationRewards): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    delegateBondedTokens(value: _86.MsgDelegateBondedTokens): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    setValidatorSetPreference(value: _86.MsgSetValidatorSetPreference): {
                        typeUrl: string;
                        value: _86.MsgSetValidatorSetPreference;
                    };
                    delegateToValidatorSet(value: _86.MsgDelegateToValidatorSet): {
                        typeUrl: string;
                        value: _86.MsgDelegateToValidatorSet;
                    };
                    undelegateFromValidatorSet(value: _86.MsgUndelegateFromValidatorSet): {
                        typeUrl: string;
                        value: _86.MsgUndelegateFromValidatorSet;
                    };
                    redelegateValidatorSet(value: _86.MsgRedelegateValidatorSet): {
                        typeUrl: string;
                        value: _86.MsgRedelegateValidatorSet;
                    };
                    withdrawDelegationRewards(value: _86.MsgWithdrawDelegationRewards): {
                        typeUrl: string;
                        value: _86.MsgWithdrawDelegationRewards;
                    };
                    delegateBondedTokens(value: _86.MsgDelegateBondedTokens): {
                        typeUrl: string;
                        value: _86.MsgDelegateBondedTokens;
                    };
                };
                fromJSON: {
                    setValidatorSetPreference(value: any): {
                        typeUrl: string;
                        value: _86.MsgSetValidatorSetPreference;
                    };
                    delegateToValidatorSet(value: any): {
                        typeUrl: string;
                        value: _86.MsgDelegateToValidatorSet;
                    };
                    undelegateFromValidatorSet(value: any): {
                        typeUrl: string;
                        value: _86.MsgUndelegateFromValidatorSet;
                    };
                    redelegateValidatorSet(value: any): {
                        typeUrl: string;
                        value: _86.MsgRedelegateValidatorSet;
                    };
                    withdrawDelegationRewards(value: any): {
                        typeUrl: string;
                        value: _86.MsgWithdrawDelegationRewards;
                    };
                    delegateBondedTokens(value: any): {
                        typeUrl: string;
                        value: _86.MsgDelegateBondedTokens;
                    };
                };
                fromPartial: {
                    setValidatorSetPreference(value: _86.MsgSetValidatorSetPreference): {
                        typeUrl: string;
                        value: _86.MsgSetValidatorSetPreference;
                    };
                    delegateToValidatorSet(value: _86.MsgDelegateToValidatorSet): {
                        typeUrl: string;
                        value: _86.MsgDelegateToValidatorSet;
                    };
                    undelegateFromValidatorSet(value: _86.MsgUndelegateFromValidatorSet): {
                        typeUrl: string;
                        value: _86.MsgUndelegateFromValidatorSet;
                    };
                    redelegateValidatorSet(value: _86.MsgRedelegateValidatorSet): {
                        typeUrl: string;
                        value: _86.MsgRedelegateValidatorSet;
                    };
                    withdrawDelegationRewards(value: _86.MsgWithdrawDelegationRewards): {
                        typeUrl: string;
                        value: _86.MsgWithdrawDelegationRewards;
                    };
                    delegateBondedTokens(value: _86.MsgDelegateBondedTokens): {
                        typeUrl: string;
                        value: _86.MsgDelegateBondedTokens;
                    };
                };
            };
            AminoConverter: {
                "/osmosis.valsetpref.v1beta1.MsgSetValidatorSetPreference": {
                    aminoType: string;
                    toAmino: (message: _86.MsgSetValidatorSetPreference) => _86.MsgSetValidatorSetPreferenceAmino;
                    fromAmino: (object: _86.MsgSetValidatorSetPreferenceAmino) => _86.MsgSetValidatorSetPreference;
                };
                "/osmosis.valsetpref.v1beta1.MsgDelegateToValidatorSet": {
                    aminoType: string;
                    toAmino: (message: _86.MsgDelegateToValidatorSet) => _86.MsgDelegateToValidatorSetAmino;
                    fromAmino: (object: _86.MsgDelegateToValidatorSetAmino) => _86.MsgDelegateToValidatorSet;
                };
                "/osmosis.valsetpref.v1beta1.MsgUndelegateFromValidatorSet": {
                    aminoType: string;
                    toAmino: (message: _86.MsgUndelegateFromValidatorSet) => _86.MsgUndelegateFromValidatorSetAmino;
                    fromAmino: (object: _86.MsgUndelegateFromValidatorSetAmino) => _86.MsgUndelegateFromValidatorSet;
                };
                "/osmosis.valsetpref.v1beta1.MsgRedelegateValidatorSet": {
                    aminoType: string;
                    toAmino: (message: _86.MsgRedelegateValidatorSet) => _86.MsgRedelegateValidatorSetAmino;
                    fromAmino: (object: _86.MsgRedelegateValidatorSetAmino) => _86.MsgRedelegateValidatorSet;
                };
                "/osmosis.valsetpref.v1beta1.MsgWithdrawDelegationRewards": {
                    aminoType: string;
                    toAmino: (message: _86.MsgWithdrawDelegationRewards) => _86.MsgWithdrawDelegationRewardsAmino;
                    fromAmino: (object: _86.MsgWithdrawDelegationRewardsAmino) => _86.MsgWithdrawDelegationRewards;
                };
                "/osmosis.valsetpref.v1beta1.MsgDelegateBondedTokens": {
                    aminoType: string;
                    toAmino: (message: _86.MsgDelegateBondedTokens) => _86.MsgDelegateBondedTokensAmino;
                    fromAmino: (object: _86.MsgDelegateBondedTokensAmino) => _86.MsgDelegateBondedTokens;
                };
            };
            MsgSetValidatorSetPreference: {
                typeUrl: string;
                encode(message: _86.MsgSetValidatorSetPreference, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _86.MsgSetValidatorSetPreference;
                fromPartial(object: Partial<_86.MsgSetValidatorSetPreference>): _86.MsgSetValidatorSetPreference;
                fromAmino(object: _86.MsgSetValidatorSetPreferenceAmino): _86.MsgSetValidatorSetPreference;
                toAmino(message: _86.MsgSetValidatorSetPreference): _86.MsgSetValidatorSetPreferenceAmino;
                fromAminoMsg(object: _86.MsgSetValidatorSetPreferenceAminoMsg): _86.MsgSetValidatorSetPreference;
                toAminoMsg(message: _86.MsgSetValidatorSetPreference): _86.MsgSetValidatorSetPreferenceAminoMsg;
                fromProtoMsg(message: _86.MsgSetValidatorSetPreferenceProtoMsg): _86.MsgSetValidatorSetPreference;
                toProto(message: _86.MsgSetValidatorSetPreference): Uint8Array;
                toProtoMsg(message: _86.MsgSetValidatorSetPreference): _86.MsgSetValidatorSetPreferenceProtoMsg;
            };
            MsgSetValidatorSetPreferenceResponse: {
                typeUrl: string;
                encode(_: _86.MsgSetValidatorSetPreferenceResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _86.MsgSetValidatorSetPreferenceResponse;
                fromPartial(_: Partial<_86.MsgSetValidatorSetPreferenceResponse>): _86.MsgSetValidatorSetPreferenceResponse;
                fromAmino(_: _86.MsgSetValidatorSetPreferenceResponseAmino): _86.MsgSetValidatorSetPreferenceResponse;
                toAmino(_: _86.MsgSetValidatorSetPreferenceResponse): _86.MsgSetValidatorSetPreferenceResponseAmino;
                fromAminoMsg(object: _86.MsgSetValidatorSetPreferenceResponseAminoMsg): _86.MsgSetValidatorSetPreferenceResponse;
                toAminoMsg(message: _86.MsgSetValidatorSetPreferenceResponse): _86.MsgSetValidatorSetPreferenceResponseAminoMsg;
                fromProtoMsg(message: _86.MsgSetValidatorSetPreferenceResponseProtoMsg): _86.MsgSetValidatorSetPreferenceResponse;
                toProto(message: _86.MsgSetValidatorSetPreferenceResponse): Uint8Array;
                toProtoMsg(message: _86.MsgSetValidatorSetPreferenceResponse): _86.MsgSetValidatorSetPreferenceResponseProtoMsg;
            };
            MsgDelegateToValidatorSet: {
                typeUrl: string;
                encode(message: _86.MsgDelegateToValidatorSet, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _86.MsgDelegateToValidatorSet;
                fromPartial(object: Partial<_86.MsgDelegateToValidatorSet>): _86.MsgDelegateToValidatorSet;
                fromAmino(object: _86.MsgDelegateToValidatorSetAmino): _86.MsgDelegateToValidatorSet;
                toAmino(message: _86.MsgDelegateToValidatorSet): _86.MsgDelegateToValidatorSetAmino;
                fromAminoMsg(object: _86.MsgDelegateToValidatorSetAminoMsg): _86.MsgDelegateToValidatorSet;
                toAminoMsg(message: _86.MsgDelegateToValidatorSet): _86.MsgDelegateToValidatorSetAminoMsg;
                fromProtoMsg(message: _86.MsgDelegateToValidatorSetProtoMsg): _86.MsgDelegateToValidatorSet;
                toProto(message: _86.MsgDelegateToValidatorSet): Uint8Array;
                toProtoMsg(message: _86.MsgDelegateToValidatorSet): _86.MsgDelegateToValidatorSetProtoMsg;
            };
            MsgDelegateToValidatorSetResponse: {
                typeUrl: string;
                encode(_: _86.MsgDelegateToValidatorSetResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _86.MsgDelegateToValidatorSetResponse;
                fromPartial(_: Partial<_86.MsgDelegateToValidatorSetResponse>): _86.MsgDelegateToValidatorSetResponse;
                fromAmino(_: _86.MsgDelegateToValidatorSetResponseAmino): _86.MsgDelegateToValidatorSetResponse;
                toAmino(_: _86.MsgDelegateToValidatorSetResponse): _86.MsgDelegateToValidatorSetResponseAmino;
                fromAminoMsg(object: _86.MsgDelegateToValidatorSetResponseAminoMsg): _86.MsgDelegateToValidatorSetResponse;
                toAminoMsg(message: _86.MsgDelegateToValidatorSetResponse): _86.MsgDelegateToValidatorSetResponseAminoMsg;
                fromProtoMsg(message: _86.MsgDelegateToValidatorSetResponseProtoMsg): _86.MsgDelegateToValidatorSetResponse;
                toProto(message: _86.MsgDelegateToValidatorSetResponse): Uint8Array;
                toProtoMsg(message: _86.MsgDelegateToValidatorSetResponse): _86.MsgDelegateToValidatorSetResponseProtoMsg;
            };
            MsgUndelegateFromValidatorSet: {
                typeUrl: string;
                encode(message: _86.MsgUndelegateFromValidatorSet, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _86.MsgUndelegateFromValidatorSet;
                fromPartial(object: Partial<_86.MsgUndelegateFromValidatorSet>): _86.MsgUndelegateFromValidatorSet;
                fromAmino(object: _86.MsgUndelegateFromValidatorSetAmino): _86.MsgUndelegateFromValidatorSet;
                toAmino(message: _86.MsgUndelegateFromValidatorSet): _86.MsgUndelegateFromValidatorSetAmino;
                fromAminoMsg(object: _86.MsgUndelegateFromValidatorSetAminoMsg): _86.MsgUndelegateFromValidatorSet;
                toAminoMsg(message: _86.MsgUndelegateFromValidatorSet): _86.MsgUndelegateFromValidatorSetAminoMsg;
                fromProtoMsg(message: _86.MsgUndelegateFromValidatorSetProtoMsg): _86.MsgUndelegateFromValidatorSet;
                toProto(message: _86.MsgUndelegateFromValidatorSet): Uint8Array;
                toProtoMsg(message: _86.MsgUndelegateFromValidatorSet): _86.MsgUndelegateFromValidatorSetProtoMsg;
            };
            MsgUndelegateFromValidatorSetResponse: {
                typeUrl: string;
                encode(_: _86.MsgUndelegateFromValidatorSetResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _86.MsgUndelegateFromValidatorSetResponse;
                fromPartial(_: Partial<_86.MsgUndelegateFromValidatorSetResponse>): _86.MsgUndelegateFromValidatorSetResponse;
                fromAmino(_: _86.MsgUndelegateFromValidatorSetResponseAmino): _86.MsgUndelegateFromValidatorSetResponse;
                toAmino(_: _86.MsgUndelegateFromValidatorSetResponse): _86.MsgUndelegateFromValidatorSetResponseAmino;
                fromAminoMsg(object: _86.MsgUndelegateFromValidatorSetResponseAminoMsg): _86.MsgUndelegateFromValidatorSetResponse;
                toAminoMsg(message: _86.MsgUndelegateFromValidatorSetResponse): _86.MsgUndelegateFromValidatorSetResponseAminoMsg;
                fromProtoMsg(message: _86.MsgUndelegateFromValidatorSetResponseProtoMsg): _86.MsgUndelegateFromValidatorSetResponse;
                toProto(message: _86.MsgUndelegateFromValidatorSetResponse): Uint8Array;
                toProtoMsg(message: _86.MsgUndelegateFromValidatorSetResponse): _86.MsgUndelegateFromValidatorSetResponseProtoMsg;
            };
            MsgRedelegateValidatorSet: {
                typeUrl: string;
                encode(message: _86.MsgRedelegateValidatorSet, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _86.MsgRedelegateValidatorSet;
                fromPartial(object: Partial<_86.MsgRedelegateValidatorSet>): _86.MsgRedelegateValidatorSet;
                fromAmino(object: _86.MsgRedelegateValidatorSetAmino): _86.MsgRedelegateValidatorSet;
                toAmino(message: _86.MsgRedelegateValidatorSet): _86.MsgRedelegateValidatorSetAmino;
                fromAminoMsg(object: _86.MsgRedelegateValidatorSetAminoMsg): _86.MsgRedelegateValidatorSet;
                toAminoMsg(message: _86.MsgRedelegateValidatorSet): _86.MsgRedelegateValidatorSetAminoMsg;
                fromProtoMsg(message: _86.MsgRedelegateValidatorSetProtoMsg): _86.MsgRedelegateValidatorSet;
                toProto(message: _86.MsgRedelegateValidatorSet): Uint8Array;
                toProtoMsg(message: _86.MsgRedelegateValidatorSet): _86.MsgRedelegateValidatorSetProtoMsg;
            };
            MsgRedelegateValidatorSetResponse: {
                typeUrl: string;
                encode(_: _86.MsgRedelegateValidatorSetResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _86.MsgRedelegateValidatorSetResponse;
                fromPartial(_: Partial<_86.MsgRedelegateValidatorSetResponse>): _86.MsgRedelegateValidatorSetResponse;
                fromAmino(_: _86.MsgRedelegateValidatorSetResponseAmino): _86.MsgRedelegateValidatorSetResponse;
                toAmino(_: _86.MsgRedelegateValidatorSetResponse): _86.MsgRedelegateValidatorSetResponseAmino;
                fromAminoMsg(object: _86.MsgRedelegateValidatorSetResponseAminoMsg): _86.MsgRedelegateValidatorSetResponse;
                toAminoMsg(message: _86.MsgRedelegateValidatorSetResponse): _86.MsgRedelegateValidatorSetResponseAminoMsg;
                fromProtoMsg(message: _86.MsgRedelegateValidatorSetResponseProtoMsg): _86.MsgRedelegateValidatorSetResponse;
                toProto(message: _86.MsgRedelegateValidatorSetResponse): Uint8Array;
                toProtoMsg(message: _86.MsgRedelegateValidatorSetResponse): _86.MsgRedelegateValidatorSetResponseProtoMsg;
            };
            MsgWithdrawDelegationRewards: {
                typeUrl: string;
                encode(message: _86.MsgWithdrawDelegationRewards, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _86.MsgWithdrawDelegationRewards;
                fromPartial(object: Partial<_86.MsgWithdrawDelegationRewards>): _86.MsgWithdrawDelegationRewards;
                fromAmino(object: _86.MsgWithdrawDelegationRewardsAmino): _86.MsgWithdrawDelegationRewards;
                toAmino(message: _86.MsgWithdrawDelegationRewards): _86.MsgWithdrawDelegationRewardsAmino;
                fromAminoMsg(object: _86.MsgWithdrawDelegationRewardsAminoMsg): _86.MsgWithdrawDelegationRewards;
                toAminoMsg(message: _86.MsgWithdrawDelegationRewards): _86.MsgWithdrawDelegationRewardsAminoMsg;
                fromProtoMsg(message: _86.MsgWithdrawDelegationRewardsProtoMsg): _86.MsgWithdrawDelegationRewards;
                toProto(message: _86.MsgWithdrawDelegationRewards): Uint8Array;
                toProtoMsg(message: _86.MsgWithdrawDelegationRewards): _86.MsgWithdrawDelegationRewardsProtoMsg;
            };
            MsgWithdrawDelegationRewardsResponse: {
                typeUrl: string;
                encode(_: _86.MsgWithdrawDelegationRewardsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _86.MsgWithdrawDelegationRewardsResponse;
                fromPartial(_: Partial<_86.MsgWithdrawDelegationRewardsResponse>): _86.MsgWithdrawDelegationRewardsResponse;
                fromAmino(_: _86.MsgWithdrawDelegationRewardsResponseAmino): _86.MsgWithdrawDelegationRewardsResponse;
                toAmino(_: _86.MsgWithdrawDelegationRewardsResponse): _86.MsgWithdrawDelegationRewardsResponseAmino;
                fromAminoMsg(object: _86.MsgWithdrawDelegationRewardsResponseAminoMsg): _86.MsgWithdrawDelegationRewardsResponse;
                toAminoMsg(message: _86.MsgWithdrawDelegationRewardsResponse): _86.MsgWithdrawDelegationRewardsResponseAminoMsg;
                fromProtoMsg(message: _86.MsgWithdrawDelegationRewardsResponseProtoMsg): _86.MsgWithdrawDelegationRewardsResponse;
                toProto(message: _86.MsgWithdrawDelegationRewardsResponse): Uint8Array;
                toProtoMsg(message: _86.MsgWithdrawDelegationRewardsResponse): _86.MsgWithdrawDelegationRewardsResponseProtoMsg;
            };
            MsgDelegateBondedTokens: {
                typeUrl: string;
                encode(message: _86.MsgDelegateBondedTokens, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _86.MsgDelegateBondedTokens;
                fromPartial(object: Partial<_86.MsgDelegateBondedTokens>): _86.MsgDelegateBondedTokens;
                fromAmino(object: _86.MsgDelegateBondedTokensAmino): _86.MsgDelegateBondedTokens;
                toAmino(message: _86.MsgDelegateBondedTokens): _86.MsgDelegateBondedTokensAmino;
                fromAminoMsg(object: _86.MsgDelegateBondedTokensAminoMsg): _86.MsgDelegateBondedTokens;
                toAminoMsg(message: _86.MsgDelegateBondedTokens): _86.MsgDelegateBondedTokensAminoMsg;
                fromProtoMsg(message: _86.MsgDelegateBondedTokensProtoMsg): _86.MsgDelegateBondedTokens;
                toProto(message: _86.MsgDelegateBondedTokens): Uint8Array;
                toProtoMsg(message: _86.MsgDelegateBondedTokens): _86.MsgDelegateBondedTokensProtoMsg;
            };
            MsgDelegateBondedTokensResponse: {
                typeUrl: string;
                encode(_: _86.MsgDelegateBondedTokensResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _86.MsgDelegateBondedTokensResponse;
                fromPartial(_: Partial<_86.MsgDelegateBondedTokensResponse>): _86.MsgDelegateBondedTokensResponse;
                fromAmino(_: _86.MsgDelegateBondedTokensResponseAmino): _86.MsgDelegateBondedTokensResponse;
                toAmino(_: _86.MsgDelegateBondedTokensResponse): _86.MsgDelegateBondedTokensResponseAmino;
                fromAminoMsg(object: _86.MsgDelegateBondedTokensResponseAminoMsg): _86.MsgDelegateBondedTokensResponse;
                toAminoMsg(message: _86.MsgDelegateBondedTokensResponse): _86.MsgDelegateBondedTokensResponseAminoMsg;
                fromProtoMsg(message: _86.MsgDelegateBondedTokensResponseProtoMsg): _86.MsgDelegateBondedTokensResponse;
                toProto(message: _86.MsgDelegateBondedTokensResponse): Uint8Array;
                toProtoMsg(message: _86.MsgDelegateBondedTokensResponse): _86.MsgDelegateBondedTokensResponseProtoMsg;
            };
            ValidatorPreference: {
                typeUrl: string;
                encode(message: _85.ValidatorPreference, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _85.ValidatorPreference;
                fromPartial(object: Partial<_85.ValidatorPreference>): _85.ValidatorPreference;
                fromAmino(object: _85.ValidatorPreferenceAmino): _85.ValidatorPreference;
                toAmino(message: _85.ValidatorPreference): _85.ValidatorPreferenceAmino;
                fromAminoMsg(object: _85.ValidatorPreferenceAminoMsg): _85.ValidatorPreference;
                toAminoMsg(message: _85.ValidatorPreference): _85.ValidatorPreferenceAminoMsg;
                fromProtoMsg(message: _85.ValidatorPreferenceProtoMsg): _85.ValidatorPreference;
                toProto(message: _85.ValidatorPreference): Uint8Array;
                toProtoMsg(message: _85.ValidatorPreference): _85.ValidatorPreferenceProtoMsg;
            };
            ValidatorSetPreferences: {
                typeUrl: string;
                encode(message: _85.ValidatorSetPreferences, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _85.ValidatorSetPreferences;
                fromPartial(object: Partial<_85.ValidatorSetPreferences>): _85.ValidatorSetPreferences;
                fromAmino(object: _85.ValidatorSetPreferencesAmino): _85.ValidatorSetPreferences;
                toAmino(message: _85.ValidatorSetPreferences): _85.ValidatorSetPreferencesAmino;
                fromAminoMsg(object: _85.ValidatorSetPreferencesAminoMsg): _85.ValidatorSetPreferences;
                toAminoMsg(message: _85.ValidatorSetPreferences): _85.ValidatorSetPreferencesAminoMsg;
                fromProtoMsg(message: _85.ValidatorSetPreferencesProtoMsg): _85.ValidatorSetPreferences;
                toProto(message: _85.ValidatorSetPreferences): Uint8Array;
                toProtoMsg(message: _85.ValidatorSetPreferences): _85.ValidatorSetPreferencesProtoMsg;
            };
            UserValidatorPreferencesRequest: {
                typeUrl: string;
                encode(message: _84.UserValidatorPreferencesRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _84.UserValidatorPreferencesRequest;
                fromPartial(object: Partial<_84.UserValidatorPreferencesRequest>): _84.UserValidatorPreferencesRequest;
                fromAmino(object: _84.UserValidatorPreferencesRequestAmino): _84.UserValidatorPreferencesRequest;
                toAmino(message: _84.UserValidatorPreferencesRequest): _84.UserValidatorPreferencesRequestAmino;
                fromAminoMsg(object: _84.UserValidatorPreferencesRequestAminoMsg): _84.UserValidatorPreferencesRequest;
                toAminoMsg(message: _84.UserValidatorPreferencesRequest): _84.UserValidatorPreferencesRequestAminoMsg;
                fromProtoMsg(message: _84.UserValidatorPreferencesRequestProtoMsg): _84.UserValidatorPreferencesRequest;
                toProto(message: _84.UserValidatorPreferencesRequest): Uint8Array;
                toProtoMsg(message: _84.UserValidatorPreferencesRequest): _84.UserValidatorPreferencesRequestProtoMsg;
            };
            UserValidatorPreferencesResponse: {
                typeUrl: string;
                encode(message: _84.UserValidatorPreferencesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _84.UserValidatorPreferencesResponse;
                fromPartial(object: Partial<_84.UserValidatorPreferencesResponse>): _84.UserValidatorPreferencesResponse;
                fromAmino(object: _84.UserValidatorPreferencesResponseAmino): _84.UserValidatorPreferencesResponse;
                toAmino(message: _84.UserValidatorPreferencesResponse): _84.UserValidatorPreferencesResponseAmino;
                fromAminoMsg(object: _84.UserValidatorPreferencesResponseAminoMsg): _84.UserValidatorPreferencesResponse;
                toAminoMsg(message: _84.UserValidatorPreferencesResponse): _84.UserValidatorPreferencesResponseAminoMsg;
                fromProtoMsg(message: _84.UserValidatorPreferencesResponseProtoMsg): _84.UserValidatorPreferencesResponse;
                toProto(message: _84.UserValidatorPreferencesResponse): Uint8Array;
                toProtoMsg(message: _84.UserValidatorPreferencesResponse): _84.UserValidatorPreferencesResponseProtoMsg;
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
                            v1beta1: _251.MsgClientImpl;
                        };
                    };
                    v1beta1: _252.MsgClientImpl;
                };
                gamm: {
                    poolmodels: {
                        balancer: {
                            v1beta1: _253.MsgClientImpl;
                        };
                        stableswap: {
                            v1beta1: _254.MsgClientImpl;
                        };
                    };
                    v1beta1: _255.MsgClientImpl;
                };
                ibchooks: _256.MsgClientImpl;
                incentives: _257.MsgClientImpl;
                lockup: _258.MsgClientImpl;
                poolmanager: {
                    v1beta1: _259.MsgClientImpl;
                };
                protorev: {
                    v1beta1: _260.MsgClientImpl;
                };
                superfluid: _261.MsgClientImpl;
                tokenfactory: {
                    v1beta1: _262.MsgClientImpl;
                };
                valsetpref: {
                    v1beta1: _263.MsgClientImpl;
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
                        cFMMConcentratedPoolLinks(request?: _23.QueryCFMMConcentratedPoolLinksRequest): Promise<_23.QueryCFMMConcentratedPoolLinksResponse>;
                    };
                    v2: {
                        spotPrice(request: _29.QuerySpotPriceRequest): Promise<_29.QuerySpotPriceResponse>;
                    };
                };
                ibcratelimit: {
                    v1beta1: {
                        params(request?: _35.ParamsRequest): Promise<_35.ParamsResponse>;
                    };
                };
                incentives: {
                    moduleToDistributeCoins(request?: _39.ModuleToDistributeCoinsRequest): Promise<_39.ModuleToDistributeCoinsResponse>;
                    gaugeByID(request: _39.GaugeByIDRequest): Promise<_39.GaugeByIDResponse>;
                    gauges(request?: _39.GaugesRequest): Promise<_39.GaugesResponse>;
                    activeGauges(request?: _39.ActiveGaugesRequest): Promise<_39.ActiveGaugesResponse>;
                    activeGaugesPerDenom(request: _39.ActiveGaugesPerDenomRequest): Promise<_39.ActiveGaugesPerDenomResponse>;
                    upcomingGauges(request?: _39.UpcomingGaugesRequest): Promise<_39.UpcomingGaugesResponse>;
                    upcomingGaugesPerDenom(request: _39.UpcomingGaugesPerDenomRequest): Promise<_39.UpcomingGaugesPerDenomResponse>;
                    rewardsEst(request: _39.RewardsEstRequest): Promise<_39.RewardsEstResponse>;
                    lockableDurations(request?: _39.QueryLockableDurationsRequest): Promise<_39.QueryLockableDurationsResponse>;
                };
                lockup: {
                    moduleBalance(request?: _44.ModuleBalanceRequest): Promise<_44.ModuleBalanceResponse>;
                    moduleLockedAmount(request?: _44.ModuleLockedAmountRequest): Promise<_44.ModuleLockedAmountResponse>;
                    accountUnlockableCoins(request: _44.AccountUnlockableCoinsRequest): Promise<_44.AccountUnlockableCoinsResponse>;
                    accountUnlockingCoins(request: _44.AccountUnlockingCoinsRequest): Promise<_44.AccountUnlockingCoinsResponse>;
                    accountLockedCoins(request: _44.AccountLockedCoinsRequest): Promise<_44.AccountLockedCoinsResponse>;
                    accountLockedPastTime(request: _44.AccountLockedPastTimeRequest): Promise<_44.AccountLockedPastTimeResponse>;
                    accountLockedPastTimeNotUnlockingOnly(request: _44.AccountLockedPastTimeNotUnlockingOnlyRequest): Promise<_44.AccountLockedPastTimeNotUnlockingOnlyResponse>;
                    accountUnlockedBeforeTime(request: _44.AccountUnlockedBeforeTimeRequest): Promise<_44.AccountUnlockedBeforeTimeResponse>;
                    accountLockedPastTimeDenom(request: _44.AccountLockedPastTimeDenomRequest): Promise<_44.AccountLockedPastTimeDenomResponse>;
                    lockedDenom(request: _44.LockedDenomRequest): Promise<_44.LockedDenomResponse>;
                    lockedByID(request: _44.LockedRequest): Promise<_44.LockedResponse>;
                    lockRewardReceiver(request: _44.LockRewardReceiverRequest): Promise<_44.LockRewardReceiverResponse>;
                    nextLockID(request?: _44.NextLockIDRequest): Promise<_44.NextLockIDResponse>;
                    syntheticLockupsByLockupID(request: _44.SyntheticLockupsByLockupIDRequest): Promise<_44.SyntheticLockupsByLockupIDResponse>;
                    syntheticLockupByLockupID(request: _44.SyntheticLockupByLockupIDRequest): Promise<_44.SyntheticLockupByLockupIDResponse>;
                    accountLockedLongerDuration(request: _44.AccountLockedLongerDurationRequest): Promise<_44.AccountLockedLongerDurationResponse>;
                    accountLockedDuration(request: _44.AccountLockedDurationRequest): Promise<_44.AccountLockedDurationResponse>;
                    accountLockedLongerDurationNotUnlockingOnly(request: _44.AccountLockedLongerDurationNotUnlockingOnlyRequest): Promise<_44.AccountLockedLongerDurationNotUnlockingOnlyResponse>;
                    accountLockedLongerDurationDenom(request: _44.AccountLockedLongerDurationDenomRequest): Promise<_44.AccountLockedLongerDurationDenomResponse>;
                    params(request?: _44.QueryParamsRequest): Promise<_44.QueryParamsResponse>;
                };
                mint: {
                    v1beta1: {
                        params(request?: _48.QueryParamsRequest): Promise<_48.QueryParamsResponse>;
                        epochProvisions(request?: _48.QueryEpochProvisionsRequest): Promise<_48.QueryEpochProvisionsResponse>;
                    };
                };
                poolincentives: {
                    v1beta1: {
                        gaugeIds(request: _52.QueryGaugeIdsRequest): Promise<_52.QueryGaugeIdsResponse>;
                        distrInfo(request?: _52.QueryDistrInfoRequest): Promise<_52.QueryDistrInfoResponse>;
                        params(request?: _52.QueryParamsRequest): Promise<_52.QueryParamsResponse>;
                        lockableDurations(request?: _52.QueryLockableDurationsRequest): Promise<_52.QueryLockableDurationsResponse>;
                        incentivizedPools(request?: _52.QueryIncentivizedPoolsRequest): Promise<_52.QueryIncentivizedPoolsResponse>;
                        externalIncentiveGauges(request?: _52.QueryExternalIncentiveGaugesRequest): Promise<_52.QueryExternalIncentiveGaugesResponse>;
                    };
                };
                poolmanager: {
                    v1beta1: {
                        params(request?: _57.ParamsRequest): Promise<_57.ParamsResponse>;
                        estimateSwapExactAmountIn(request: _57.EstimateSwapExactAmountInRequest): Promise<_57.EstimateSwapExactAmountInResponse>;
                        estimateSwapExactAmountInWithPrimitiveTypes(request: _57.EstimateSwapExactAmountInWithPrimitiveTypesRequest): Promise<_57.EstimateSwapExactAmountInResponse>;
                        estimateSinglePoolSwapExactAmountIn(request: _57.EstimateSinglePoolSwapExactAmountInRequest): Promise<_57.EstimateSwapExactAmountInResponse>;
                        estimateSwapExactAmountOut(request: _57.EstimateSwapExactAmountOutRequest): Promise<_57.EstimateSwapExactAmountOutResponse>;
                        estimateSwapExactAmountOutWithPrimitiveTypes(request: _57.EstimateSwapExactAmountOutWithPrimitiveTypesRequest): Promise<_57.EstimateSwapExactAmountOutResponse>;
                        estimateSinglePoolSwapExactAmountOut(request: _57.EstimateSinglePoolSwapExactAmountOutRequest): Promise<_57.EstimateSwapExactAmountOutResponse>;
                        numPools(request?: _57.NumPoolsRequest): Promise<_57.NumPoolsResponse>;
                        pool(request: _57.PoolRequest): Promise<_57.PoolResponse>;
                        allPools(request?: _57.AllPoolsRequest): Promise<_57.AllPoolsResponse>;
                        spotPrice(request: _57.SpotPriceRequest): Promise<_57.SpotPriceResponse>;
                        totalPoolLiquidity(request: _57.TotalPoolLiquidityRequest): Promise<_57.TotalPoolLiquidityResponse>;
                        totalLiquidity(request?: _57.TotalLiquidityRequest): Promise<_57.TotalLiquidityResponse>;
                    };
                };
                protorev: {
                    v1beta1: {
                        params(request?: _64.QueryParamsRequest): Promise<_64.QueryParamsResponse>;
                        getProtoRevNumberOfTrades(request?: _64.QueryGetProtoRevNumberOfTradesRequest): Promise<_64.QueryGetProtoRevNumberOfTradesResponse>;
                        getProtoRevProfitsByDenom(request: _64.QueryGetProtoRevProfitsByDenomRequest): Promise<_64.QueryGetProtoRevProfitsByDenomResponse>;
                        getProtoRevAllProfits(request?: _64.QueryGetProtoRevAllProfitsRequest): Promise<_64.QueryGetProtoRevAllProfitsResponse>;
                        getProtoRevStatisticsByRoute(request: _64.QueryGetProtoRevStatisticsByRouteRequest): Promise<_64.QueryGetProtoRevStatisticsByRouteResponse>;
                        getProtoRevAllRouteStatistics(request?: _64.QueryGetProtoRevAllRouteStatisticsRequest): Promise<_64.QueryGetProtoRevAllRouteStatisticsResponse>;
                        getProtoRevTokenPairArbRoutes(request?: _64.QueryGetProtoRevTokenPairArbRoutesRequest): Promise<_64.QueryGetProtoRevTokenPairArbRoutesResponse>;
                        getProtoRevAdminAccount(request?: _64.QueryGetProtoRevAdminAccountRequest): Promise<_64.QueryGetProtoRevAdminAccountResponse>;
                        getProtoRevDeveloperAccount(request?: _64.QueryGetProtoRevDeveloperAccountRequest): Promise<_64.QueryGetProtoRevDeveloperAccountResponse>;
                        getProtoRevInfoByPoolType(request?: _64.QueryGetProtoRevInfoByPoolTypeRequest): Promise<_64.QueryGetProtoRevInfoByPoolTypeResponse>;
                        getProtoRevMaxPoolPointsPerTx(request?: _64.QueryGetProtoRevMaxPoolPointsPerTxRequest): Promise<_64.QueryGetProtoRevMaxPoolPointsPerTxResponse>;
                        getProtoRevMaxPoolPointsPerBlock(request?: _64.QueryGetProtoRevMaxPoolPointsPerBlockRequest): Promise<_64.QueryGetProtoRevMaxPoolPointsPerBlockResponse>;
                        getProtoRevBaseDenoms(request?: _64.QueryGetProtoRevBaseDenomsRequest): Promise<_64.QueryGetProtoRevBaseDenomsResponse>;
                        getProtoRevEnabled(request?: _64.QueryGetProtoRevEnabledRequest): Promise<_64.QueryGetProtoRevEnabledResponse>;
                        getProtoRevPool(request: _64.QueryGetProtoRevPoolRequest): Promise<_64.QueryGetProtoRevPoolResponse>;
                    };
                };
                superfluid: {
                    params(request?: _69.QueryParamsRequest): Promise<_69.QueryParamsResponse>;
                    assetType(request: _69.AssetTypeRequest): Promise<_69.AssetTypeResponse>;
                    allAssets(request?: _69.AllAssetsRequest): Promise<_69.AllAssetsResponse>;
                    assetMultiplier(request: _69.AssetMultiplierRequest): Promise<_69.AssetMultiplierResponse>;
                    allIntermediaryAccounts(request?: _69.AllIntermediaryAccountsRequest): Promise<_69.AllIntermediaryAccountsResponse>;
                    connectedIntermediaryAccount(request: _69.ConnectedIntermediaryAccountRequest): Promise<_69.ConnectedIntermediaryAccountResponse>;
                    totalDelegationByValidatorForDenom(request: _69.QueryTotalDelegationByValidatorForDenomRequest): Promise<_69.QueryTotalDelegationByValidatorForDenomResponse>;
                    totalSuperfluidDelegations(request?: _69.TotalSuperfluidDelegationsRequest): Promise<_69.TotalSuperfluidDelegationsResponse>;
                    superfluidDelegationAmount(request: _69.SuperfluidDelegationAmountRequest): Promise<_69.SuperfluidDelegationAmountResponse>;
                    superfluidDelegationsByDelegator(request: _69.SuperfluidDelegationsByDelegatorRequest): Promise<_69.SuperfluidDelegationsByDelegatorResponse>;
                    superfluidUndelegationsByDelegator(request: _69.SuperfluidUndelegationsByDelegatorRequest): Promise<_69.SuperfluidUndelegationsByDelegatorResponse>;
                    superfluidDelegationsByValidatorDenom(request: _69.SuperfluidDelegationsByValidatorDenomRequest): Promise<_69.SuperfluidDelegationsByValidatorDenomResponse>;
                    estimateSuperfluidDelegatedAmountByValidatorDenom(request: _69.EstimateSuperfluidDelegatedAmountByValidatorDenomRequest): Promise<_69.EstimateSuperfluidDelegatedAmountByValidatorDenomResponse>;
                    totalDelegationByDelegator(request: _69.QueryTotalDelegationByDelegatorRequest): Promise<_69.QueryTotalDelegationByDelegatorResponse>;
                    unpoolWhitelist(request?: _69.QueryUnpoolWhitelistRequest): Promise<_69.QueryUnpoolWhitelistResponse>;
                    userConcentratedSuperfluidPositionsDelegated(request: _69.UserConcentratedSuperfluidPositionsDelegatedRequest): Promise<_69.UserConcentratedSuperfluidPositionsDelegatedResponse>;
                    userConcentratedSuperfluidPositionsUndelegating(request: _69.UserConcentratedSuperfluidPositionsUndelegatingRequest): Promise<_69.UserConcentratedSuperfluidPositionsUndelegatingResponse>;
                };
                tokenfactory: {
                    v1beta1: {
                        params(request?: _75.QueryParamsRequest): Promise<_75.QueryParamsResponse>;
                        denomAuthorityMetadata(request: _75.QueryDenomAuthorityMetadataRequest): Promise<_75.QueryDenomAuthorityMetadataResponse>;
                        denomsFromCreator(request: _75.QueryDenomsFromCreatorRequest): Promise<_75.QueryDenomsFromCreatorResponse>;
                        beforeSendHookAddress(request: _75.QueryBeforeSendHookAddressRequest): Promise<_75.QueryBeforeSendHookAddressResponse>;
                    };
                };
                twap: {
                    v1beta1: {
                        params(request?: _78.ParamsRequest): Promise<_78.ParamsResponse>;
                        arithmeticTwap(request: _78.ArithmeticTwapRequest): Promise<_78.ArithmeticTwapResponse>;
                        arithmeticTwapToNow(request: _78.ArithmeticTwapToNowRequest): Promise<_78.ArithmeticTwapToNowResponse>;
                        geometricTwap(request: _78.GeometricTwapRequest): Promise<_78.GeometricTwapResponse>;
                        geometricTwapToNow(request: _78.GeometricTwapToNowRequest): Promise<_78.GeometricTwapToNowResponse>;
                    };
                };
                txfees: {
                    v1beta1: {
                        feeTokens(request?: _83.QueryFeeTokensRequest): Promise<_83.QueryFeeTokensResponse>;
                        denomSpotPrice(request: _83.QueryDenomSpotPriceRequest): Promise<_83.QueryDenomSpotPriceResponse>;
                        denomPoolId(request: _83.QueryDenomPoolIdRequest): Promise<_83.QueryDenomPoolIdResponse>;
                        baseDenom(request?: _83.QueryBaseDenomRequest): Promise<_83.QueryBaseDenomResponse>;
                    };
                };
                valsetpref: {
                    v1beta1: {
                        userValidatorPreferences(request: _84.UserValidatorPreferencesRequest): Promise<_84.UserValidatorPreferencesResponse>;
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
        createLCDClient: ({ restEndpoint }: {
            restEndpoint: string;
        }) => Promise<{
            osmosis: {
                concentratedliquidity: {
                    v1beta1: _215.LCDQueryClient;
                };
                cosmwasmpool: {
                    v1beta1: _216.LCDQueryClient;
                };
                downtimedetector: {
                    v1beta1: _217.LCDQueryClient;
                };
                epochs: {
                    v1beta1: _218.LCDQueryClient;
                };
                gamm: {
                    v1beta1: _219.LCDQueryClient;
                    v2: _220.LCDQueryClient;
                };
                ibcratelimit: {
                    v1beta1: _221.LCDQueryClient;
                };
                incentives: _222.LCDQueryClient;
                lockup: _223.LCDQueryClient;
                mint: {
                    v1beta1: _224.LCDQueryClient;
                };
                poolincentives: {
                    v1beta1: _225.LCDQueryClient;
                };
                poolmanager: {
                    v1beta1: _226.LCDQueryClient;
                };
                protorev: {
                    v1beta1: _227.LCDQueryClient;
                };
                superfluid: _228.LCDQueryClient;
                tokenfactory: {
                    v1beta1: _229.LCDQueryClient;
                };
                twap: {
                    v1beta1: _230.LCDQueryClient;
                };
                txfees: {
                    v1beta1: _231.LCDQueryClient;
                };
                valsetpref: {
                    v1beta1: _232.LCDQueryClient;
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
