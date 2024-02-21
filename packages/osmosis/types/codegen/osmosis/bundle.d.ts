import * as _0 from "./accum/v1beta1/accum";
import * as _1 from "./concentratedliquidity/params";
import * as _2 from "./cosmwasmpool/v1beta1/genesis";
import * as _3 from "./cosmwasmpool/v1beta1/gov";
import * as _4 from "./cosmwasmpool/v1beta1/model/instantiate_msg";
import * as _5 from "./cosmwasmpool/v1beta1/model/module_query_msg";
import * as _6 from "./cosmwasmpool/v1beta1/model/module_sudo_msg";
import * as _7 from "./cosmwasmpool/v1beta1/model/pool_query_msg";
import * as _8 from "./cosmwasmpool/v1beta1/model/pool";
import * as _9 from "./cosmwasmpool/v1beta1/model/transmuter_msgs";
import * as _10 from "./cosmwasmpool/v1beta1/model/tx";
import * as _11 from "./cosmwasmpool/v1beta1/params";
import * as _12 from "./cosmwasmpool/v1beta1/query";
import * as _14 from "./downtimedetector/v1beta1/downtime_duration";
import * as _15 from "./downtimedetector/v1beta1/genesis";
import * as _16 from "./downtimedetector/v1beta1/query";
import * as _17 from "./epochs/v1beta1/genesis";
import * as _18 from "./epochs/v1beta1/query";
import * as _19 from "./gamm/poolmodels/balancer/v1beta1/tx";
import * as _20 from "./gamm/poolmodels/stableswap/v1beta1/stableswap_pool";
import * as _21 from "./gamm/poolmodels/stableswap/v1beta1/tx";
import * as _22 from "./gamm/v1beta1/balancerPool";
import * as _23 from "./gamm/v1beta1/genesis";
import * as _24 from "./gamm/v1beta1/gov";
import * as _25 from "./gamm/v1beta1/query";
import * as _26 from "./gamm/v1beta1/shared";
import * as _27 from "./gamm/v1beta1/tx";
import * as _28 from "./gamm/v2/query";
import * as _29 from "./ibchooks/genesis";
import * as _30 from "./ibchooks/params";
import * as _31 from "./ibchooks/tx";
import * as _32 from "./ibcratelimit/v1beta1/genesis";
import * as _33 from "./ibcratelimit/v1beta1/params";
import * as _34 from "./ibcratelimit/v1beta1/query";
import * as _35 from "./incentives/gauge";
import * as _36 from "./incentives/genesis";
import * as _37 from "./incentives/gov";
import * as _38 from "./incentives/group";
import * as _39 from "./incentives/params";
import * as _40 from "./incentives/query";
import * as _41 from "./incentives/tx";
import * as _42 from "./lockup/genesis";
import * as _43 from "./lockup/lock";
import * as _44 from "./lockup/params";
import * as _45 from "./lockup/query";
import * as _46 from "./lockup/tx";
import * as _47 from "./mint/v1beta1/genesis";
import * as _48 from "./mint/v1beta1/mint";
import * as _49 from "./mint/v1beta1/query";
import * as _50 from "./poolincentives/v1beta1/genesis";
import * as _51 from "./poolincentives/v1beta1/gov";
import * as _52 from "./poolincentives/v1beta1/incentives";
import * as _53 from "./poolincentives/v1beta1/query";
import * as _54 from "./poolincentives/v1beta1/shared";
import * as _55 from "./poolmanager/v1beta1/genesis";
import * as _56 from "./poolmanager/v1beta1/gov";
import * as _57 from "./poolmanager/v1beta1/module_route";
import * as _58 from "./poolmanager/v1beta1/query";
import * as _59 from "./poolmanager/v1beta1/swap_route";
import * as _60 from "./poolmanager/v1beta1/tracked_volume";
import * as _61 from "./poolmanager/v1beta1/tx";
import * as _62 from "./poolmanager/v2/query";
import * as _63 from "./protorev/v1beta1/genesis";
import * as _64 from "./protorev/v1beta1/gov";
import * as _65 from "./protorev/v1beta1/params";
import * as _66 from "./protorev/v1beta1/protorev";
import * as _67 from "./protorev/v1beta1/query";
import * as _68 from "./protorev/v1beta1/tx";
import * as _69 from "./store/v1beta1/tree";
import * as _70 from "./superfluid/genesis";
import * as _71 from "./superfluid/params";
import * as _72 from "./superfluid/query";
import * as _73 from "./superfluid/superfluid";
import * as _74 from "./superfluid/tx";
import * as _75 from "./tokenfactory/v1beta1/authorityMetadata";
import * as _76 from "./tokenfactory/v1beta1/genesis";
import * as _77 from "./tokenfactory/v1beta1/params";
import * as _78 from "./tokenfactory/v1beta1/query";
import * as _79 from "./tokenfactory/v1beta1/tx";
import * as _80 from "./twap/v1beta1/genesis";
import * as _81 from "./twap/v1beta1/query";
import * as _82 from "./twap/v1beta1/twap_record";
import * as _83 from "./txfees/v1beta1/feetoken";
import * as _84 from "./txfees/v1beta1/genesis";
import * as _85 from "./txfees/v1beta1/gov";
import * as _86 from "./txfees/v1beta1/query";
import * as _87 from "./valsetpref/v1beta1/query";
import * as _88 from "./valsetpref/v1beta1/state";
import * as _89 from "./valsetpref/v1beta1/tx";
import * as _281 from "./concentratedliquidity/v1beta1/query.lcd";
import * as _282 from "./cosmwasmpool/v1beta1/query.lcd";
import * as _283 from "./downtimedetector/v1beta1/query.lcd";
import * as _284 from "./epochs/v1beta1/query.lcd";
import * as _285 from "./gamm/v1beta1/query.lcd";
import * as _286 from "./gamm/v2/query.lcd";
import * as _287 from "./ibcratelimit/v1beta1/query.lcd";
import * as _288 from "./incentives/query.lcd";
import * as _289 from "./lockup/query.lcd";
import * as _290 from "./mint/v1beta1/query.lcd";
import * as _291 from "./poolincentives/v1beta1/query.lcd";
import * as _292 from "./poolmanager/v1beta1/query.lcd";
import * as _293 from "./poolmanager/v2/query.lcd";
import * as _294 from "./protorev/v1beta1/query.lcd";
import * as _295 from "./superfluid/query.lcd";
import * as _296 from "./tokenfactory/v1beta1/query.lcd";
import * as _297 from "./twap/v1beta1/query.lcd";
import * as _298 from "./txfees/v1beta1/query.lcd";
import * as _299 from "./valsetpref/v1beta1/query.lcd";
import * as _300 from "./concentratedliquidity/v1beta1/query.rpc.Query";
import * as _301 from "./cosmwasmpool/v1beta1/query.rpc.Query";
import * as _302 from "./downtimedetector/v1beta1/query.rpc.Query";
import * as _303 from "./epochs/v1beta1/query.rpc.Query";
import * as _304 from "./gamm/v1beta1/query.rpc.Query";
import * as _305 from "./gamm/v2/query.rpc.Query";
import * as _306 from "./ibcratelimit/v1beta1/query.rpc.Query";
import * as _307 from "./incentives/query.rpc.Query";
import * as _308 from "./lockup/query.rpc.Query";
import * as _309 from "./mint/v1beta1/query.rpc.Query";
import * as _310 from "./poolincentives/v1beta1/query.rpc.Query";
import * as _311 from "./poolmanager/v1beta1/query.rpc.Query";
import * as _312 from "./poolmanager/v2/query.rpc.Query";
import * as _313 from "./protorev/v1beta1/query.rpc.Query";
import * as _314 from "./superfluid/query.rpc.Query";
import * as _315 from "./tokenfactory/v1beta1/query.rpc.Query";
import * as _316 from "./twap/v1beta1/query.rpc.Query";
import * as _317 from "./txfees/v1beta1/query.rpc.Query";
import * as _318 from "./valsetpref/v1beta1/query.rpc.Query";
import * as _319 from "./concentratedliquidity/poolmodel/concentrated/v1beta1/tx.rpc.msg";
import * as _320 from "./concentratedliquidity/v1beta1/tx.rpc.msg";
import * as _321 from "./gamm/poolmodels/balancer/v1beta1/tx.rpc.msg";
import * as _322 from "./gamm/poolmodels/stableswap/v1beta1/tx.rpc.msg";
import * as _323 from "./gamm/v1beta1/tx.rpc.msg";
import * as _324 from "./ibchooks/tx.rpc.msg";
import * as _325 from "./incentives/tx.rpc.msg";
import * as _326 from "./lockup/tx.rpc.msg";
import * as _327 from "./poolmanager/v1beta1/tx.rpc.msg";
import * as _328 from "./protorev/v1beta1/tx.rpc.msg";
import * as _329 from "./superfluid/tx.rpc.msg";
import * as _330 from "./tokenfactory/v1beta1/tx.rpc.msg";
import * as _331 from "./valsetpref/v1beta1/tx.rpc.msg";
export declare namespace osmosis {
    namespace accum {
        const v1beta1: {
            AccumulatorContent: {
                typeUrl: string;
                encode(message: _0.AccumulatorContent, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _0.AccumulatorContent;
                fromPartial(object: Partial<_0.AccumulatorContent>): _0.AccumulatorContent;
                fromAmino(object: _0.AccumulatorContentAmino): _0.AccumulatorContent;
                toAmino(message: _0.AccumulatorContent): _0.AccumulatorContentAmino;
                fromAminoMsg(object: _0.AccumulatorContentAminoMsg): _0.AccumulatorContent;
                toAminoMsg(message: _0.AccumulatorContent): _0.AccumulatorContentAminoMsg;
                fromProtoMsg(message: _0.AccumulatorContentProtoMsg): _0.AccumulatorContent;
                toProto(message: _0.AccumulatorContent): Uint8Array;
                toProtoMsg(message: _0.AccumulatorContent): _0.AccumulatorContentProtoMsg;
            };
            Options: {
                typeUrl: string;
                encode(_: _0.Options, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _0.Options;
                fromPartial(_: Partial<_0.Options>): _0.Options;
                fromAmino(_: _0.OptionsAmino): _0.Options;
                toAmino(_: _0.Options): _0.OptionsAmino;
                fromAminoMsg(object: _0.OptionsAminoMsg): _0.Options;
                toAminoMsg(message: _0.Options): _0.OptionsAminoMsg;
                fromProtoMsg(message: _0.OptionsProtoMsg): _0.Options;
                toProto(message: _0.Options): Uint8Array;
                toProtoMsg(message: _0.Options): _0.OptionsProtoMsg;
            };
            Record: {
                typeUrl: string;
                encode(message: _0.Record, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _0.Record;
                fromPartial(object: Partial<_0.Record>): _0.Record;
                fromAmino(object: _0.RecordAmino): _0.Record;
                toAmino(message: _0.Record): _0.RecordAmino;
                fromAminoMsg(object: _0.RecordAminoMsg): _0.Record;
                toAminoMsg(message: _0.Record): _0.RecordAminoMsg;
                fromProtoMsg(message: _0.RecordProtoMsg): _0.Record;
                toProto(message: _0.Record): Uint8Array;
                toProtoMsg(message: _0.Record): _0.RecordProtoMsg;
            };
        };
    }
    const concentratedliquidity: {
        poolmodel: {
            concentrated: {
                v1beta1: {
                    MsgClientImpl: typeof _319.MsgClientImpl;
                    registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
                    load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
                    MessageComposer: {
                        encoded: {
                            createConcentratedPool(value: import("./concentratedliquidity/poolmodel/concentrated/v1beta1/tx").MsgCreateConcentratedPool): {
                                typeUrl: string;
                                value: Uint8Array;
                            };
                        };
                        withTypeUrl: {
                            createConcentratedPool(value: import("./concentratedliquidity/poolmodel/concentrated/v1beta1/tx").MsgCreateConcentratedPool): {
                                typeUrl: string;
                                value: import("./concentratedliquidity/poolmodel/concentrated/v1beta1/tx").MsgCreateConcentratedPool;
                            };
                        };
                        fromJSON: {
                            createConcentratedPool(value: any): {
                                typeUrl: string;
                                value: import("./concentratedliquidity/poolmodel/concentrated/v1beta1/tx").MsgCreateConcentratedPool;
                            };
                        };
                        fromPartial: {
                            createConcentratedPool(value: import("./concentratedliquidity/poolmodel/concentrated/v1beta1/tx").MsgCreateConcentratedPool): {
                                typeUrl: string;
                                value: import("./concentratedliquidity/poolmodel/concentrated/v1beta1/tx").MsgCreateConcentratedPool;
                            };
                        };
                    };
                    AminoConverter: {
                        "/osmosis.concentratedliquidity.poolmodel.concentrated.v1beta1.MsgCreateConcentratedPool": {
                            aminoType: string;
                            toAmino: (message: import("./concentratedliquidity/poolmodel/concentrated/v1beta1/tx").MsgCreateConcentratedPool) => import("./concentratedliquidity/poolmodel/concentrated/v1beta1/tx").MsgCreateConcentratedPoolAmino;
                            fromAmino: (object: import("./concentratedliquidity/poolmodel/concentrated/v1beta1/tx").MsgCreateConcentratedPoolAmino) => import("./concentratedliquidity/poolmodel/concentrated/v1beta1/tx").MsgCreateConcentratedPool;
                        };
                    };
                };
            };
        };
        v1beta1: {
            MsgClientImpl: typeof _320.MsgClientImpl;
            QueryClientImpl: typeof _300.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                pools(request?: import("./concentratedliquidity/v1beta1/query").PoolsRequest): Promise<import("./concentratedliquidity/v1beta1/query").PoolsResponse>;
                params(request?: import("./concentratedliquidity/v1beta1/query").ParamsRequest): Promise<import("./concentratedliquidity/v1beta1/query").ParamsResponse>;
                userPositions(request: import("./concentratedliquidity/v1beta1/query").UserPositionsRequest): Promise<import("./concentratedliquidity/v1beta1/query").UserPositionsResponse>;
                liquidityPerTickRange(request: import("./concentratedliquidity/v1beta1/query").LiquidityPerTickRangeRequest): Promise<import("./concentratedliquidity/v1beta1/query").LiquidityPerTickRangeResponse>;
                liquidityNetInDirection(request: import("./concentratedliquidity/v1beta1/query").LiquidityNetInDirectionRequest): Promise<import("./concentratedliquidity/v1beta1/query").LiquidityNetInDirectionResponse>;
                claimableSpreadRewards(request: import("./concentratedliquidity/v1beta1/query").ClaimableSpreadRewardsRequest): Promise<import("./concentratedliquidity/v1beta1/query").ClaimableSpreadRewardsResponse>;
                claimableIncentives(request: import("./concentratedliquidity/v1beta1/query").ClaimableIncentivesRequest): Promise<import("./concentratedliquidity/v1beta1/query").ClaimableIncentivesResponse>;
                positionById(request: import("./concentratedliquidity/v1beta1/query").PositionByIdRequest): Promise<import("./concentratedliquidity/v1beta1/query").PositionByIdResponse>;
                poolAccumulatorRewards(request: import("./concentratedliquidity/v1beta1/query").PoolAccumulatorRewardsRequest): Promise<import("./concentratedliquidity/v1beta1/query").PoolAccumulatorRewardsResponse>;
                incentiveRecords(request: import("./concentratedliquidity/v1beta1/query").IncentiveRecordsRequest): Promise<import("./concentratedliquidity/v1beta1/query").IncentiveRecordsResponse>;
                tickAccumulatorTrackers(request: import("./concentratedliquidity/v1beta1/query").TickAccumulatorTrackersRequest): Promise<import("./concentratedliquidity/v1beta1/query").TickAccumulatorTrackersResponse>;
                cFMMPoolIdLinkFromConcentratedPoolId(request: import("./concentratedliquidity/v1beta1/query").CFMMPoolIdLinkFromConcentratedPoolIdRequest): Promise<import("./concentratedliquidity/v1beta1/query").CFMMPoolIdLinkFromConcentratedPoolIdResponse>;
                userUnbondingPositions(request: import("./concentratedliquidity/v1beta1/query").UserUnbondingPositionsRequest): Promise<import("./concentratedliquidity/v1beta1/query").UserUnbondingPositionsResponse>;
                getTotalLiquidity(request?: import("./concentratedliquidity/v1beta1/query").GetTotalLiquidityRequest): Promise<import("./concentratedliquidity/v1beta1/query").GetTotalLiquidityResponse>;
                numNextInitializedTicks(request: import("./concentratedliquidity/v1beta1/query").NumNextInitializedTicksRequest): Promise<import("./concentratedliquidity/v1beta1/query").NumNextInitializedTicksResponse>;
            };
            LCDQueryClient: typeof _281.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    createPosition(value: import("./concentratedliquidity/v1beta1/tx").MsgCreatePosition): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    withdrawPosition(value: import("./concentratedliquidity/v1beta1/tx").MsgWithdrawPosition): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    addToPosition(value: import("./concentratedliquidity/v1beta1/tx").MsgAddToPosition): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    collectSpreadRewards(value: import("./concentratedliquidity/v1beta1/tx").MsgCollectSpreadRewards): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    collectIncentives(value: import("./concentratedliquidity/v1beta1/tx").MsgCollectIncentives): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    transferPositions(value: import("./concentratedliquidity/v1beta1/tx").MsgTransferPositions): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    createPosition(value: import("./concentratedliquidity/v1beta1/tx").MsgCreatePosition): {
                        typeUrl: string;
                        value: import("./concentratedliquidity/v1beta1/tx").MsgCreatePosition;
                    };
                    withdrawPosition(value: import("./concentratedliquidity/v1beta1/tx").MsgWithdrawPosition): {
                        typeUrl: string;
                        value: import("./concentratedliquidity/v1beta1/tx").MsgWithdrawPosition;
                    };
                    addToPosition(value: import("./concentratedliquidity/v1beta1/tx").MsgAddToPosition): {
                        typeUrl: string;
                        value: import("./concentratedliquidity/v1beta1/tx").MsgAddToPosition;
                    };
                    collectSpreadRewards(value: import("./concentratedliquidity/v1beta1/tx").MsgCollectSpreadRewards): {
                        typeUrl: string;
                        value: import("./concentratedliquidity/v1beta1/tx").MsgCollectSpreadRewards;
                    };
                    collectIncentives(value: import("./concentratedliquidity/v1beta1/tx").MsgCollectIncentives): {
                        typeUrl: string;
                        value: import("./concentratedliquidity/v1beta1/tx").MsgCollectIncentives;
                    };
                    transferPositions(value: import("./concentratedliquidity/v1beta1/tx").MsgTransferPositions): {
                        typeUrl: string;
                        value: import("./concentratedliquidity/v1beta1/tx").MsgTransferPositions;
                    };
                };
                fromJSON: {
                    createPosition(value: any): {
                        typeUrl: string;
                        value: import("./concentratedliquidity/v1beta1/tx").MsgCreatePosition;
                    };
                    withdrawPosition(value: any): {
                        typeUrl: string;
                        value: import("./concentratedliquidity/v1beta1/tx").MsgWithdrawPosition;
                    };
                    addToPosition(value: any): {
                        typeUrl: string;
                        value: import("./concentratedliquidity/v1beta1/tx").MsgAddToPosition;
                    };
                    collectSpreadRewards(value: any): {
                        typeUrl: string;
                        value: import("./concentratedliquidity/v1beta1/tx").MsgCollectSpreadRewards;
                    };
                    collectIncentives(value: any): {
                        typeUrl: string;
                        value: import("./concentratedliquidity/v1beta1/tx").MsgCollectIncentives;
                    };
                    transferPositions(value: any): {
                        typeUrl: string;
                        value: import("./concentratedliquidity/v1beta1/tx").MsgTransferPositions;
                    };
                };
                fromPartial: {
                    createPosition(value: import("./concentratedliquidity/v1beta1/tx").MsgCreatePosition): {
                        typeUrl: string;
                        value: import("./concentratedliquidity/v1beta1/tx").MsgCreatePosition;
                    };
                    withdrawPosition(value: import("./concentratedliquidity/v1beta1/tx").MsgWithdrawPosition): {
                        typeUrl: string;
                        value: import("./concentratedliquidity/v1beta1/tx").MsgWithdrawPosition;
                    };
                    addToPosition(value: import("./concentratedliquidity/v1beta1/tx").MsgAddToPosition): {
                        typeUrl: string;
                        value: import("./concentratedliquidity/v1beta1/tx").MsgAddToPosition;
                    };
                    collectSpreadRewards(value: import("./concentratedliquidity/v1beta1/tx").MsgCollectSpreadRewards): {
                        typeUrl: string;
                        value: import("./concentratedliquidity/v1beta1/tx").MsgCollectSpreadRewards;
                    };
                    collectIncentives(value: import("./concentratedliquidity/v1beta1/tx").MsgCollectIncentives): {
                        typeUrl: string;
                        value: import("./concentratedliquidity/v1beta1/tx").MsgCollectIncentives;
                    };
                    transferPositions(value: import("./concentratedliquidity/v1beta1/tx").MsgTransferPositions): {
                        typeUrl: string;
                        value: import("./concentratedliquidity/v1beta1/tx").MsgTransferPositions;
                    };
                };
            };
            AminoConverter: {
                "/osmosis.concentratedliquidity.v1beta1.MsgCreatePosition": {
                    aminoType: string;
                    toAmino: (message: import("./concentratedliquidity/v1beta1/tx").MsgCreatePosition) => import("./concentratedliquidity/v1beta1/tx").MsgCreatePositionAmino;
                    fromAmino: (object: import("./concentratedliquidity/v1beta1/tx").MsgCreatePositionAmino) => import("./concentratedliquidity/v1beta1/tx").MsgCreatePosition;
                };
                "/osmosis.concentratedliquidity.v1beta1.MsgWithdrawPosition": {
                    aminoType: string;
                    toAmino: (message: import("./concentratedliquidity/v1beta1/tx").MsgWithdrawPosition) => import("./concentratedliquidity/v1beta1/tx").MsgWithdrawPositionAmino;
                    fromAmino: (object: import("./concentratedliquidity/v1beta1/tx").MsgWithdrawPositionAmino) => import("./concentratedliquidity/v1beta1/tx").MsgWithdrawPosition;
                };
                "/osmosis.concentratedliquidity.v1beta1.MsgAddToPosition": {
                    aminoType: string;
                    toAmino: (message: import("./concentratedliquidity/v1beta1/tx").MsgAddToPosition) => import("./concentratedliquidity/v1beta1/tx").MsgAddToPositionAmino;
                    fromAmino: (object: import("./concentratedliquidity/v1beta1/tx").MsgAddToPositionAmino) => import("./concentratedliquidity/v1beta1/tx").MsgAddToPosition;
                };
                "/osmosis.concentratedliquidity.v1beta1.MsgCollectSpreadRewards": {
                    aminoType: string;
                    toAmino: (message: import("./concentratedliquidity/v1beta1/tx").MsgCollectSpreadRewards) => import("./concentratedliquidity/v1beta1/tx").MsgCollectSpreadRewardsAmino;
                    fromAmino: (object: import("./concentratedliquidity/v1beta1/tx").MsgCollectSpreadRewardsAmino) => import("./concentratedliquidity/v1beta1/tx").MsgCollectSpreadRewards;
                };
                "/osmosis.concentratedliquidity.v1beta1.MsgCollectIncentives": {
                    aminoType: string;
                    toAmino: (message: import("./concentratedliquidity/v1beta1/tx").MsgCollectIncentives) => import("./concentratedliquidity/v1beta1/tx").MsgCollectIncentivesAmino;
                    fromAmino: (object: import("./concentratedliquidity/v1beta1/tx").MsgCollectIncentivesAmino) => import("./concentratedliquidity/v1beta1/tx").MsgCollectIncentives;
                };
                "/osmosis.concentratedliquidity.v1beta1.MsgTransferPositions": {
                    aminoType: string;
                    toAmino: (message: import("./concentratedliquidity/v1beta1/tx").MsgTransferPositions) => import("./concentratedliquidity/v1beta1/tx").MsgTransferPositionsAmino;
                    fromAmino: (object: import("./concentratedliquidity/v1beta1/tx").MsgTransferPositionsAmino) => import("./concentratedliquidity/v1beta1/tx").MsgTransferPositions;
                };
            };
        };
        Params: {
            typeUrl: string;
            encode(message: _1.Params, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _1.Params;
            fromPartial(object: Partial<_1.Params>): _1.Params;
            fromAmino(object: _1.ParamsAmino): _1.Params;
            toAmino(message: _1.Params): _1.ParamsAmino;
            fromAminoMsg(object: _1.ParamsAminoMsg): _1.Params;
            toAminoMsg(message: _1.Params): _1.ParamsAminoMsg;
            fromProtoMsg(message: _1.ParamsProtoMsg): _1.Params;
            toProto(message: _1.Params): Uint8Array;
            toProtoMsg(message: _1.Params): _1.ParamsProtoMsg;
        };
    };
    namespace cosmwasmpool {
        const v1beta1: {
            QueryClientImpl: typeof _301.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                pools(request?: _12.PoolsRequest): Promise<_12.PoolsResponse>;
                params(request?: _12.ParamsRequest): Promise<_12.ParamsResponse>;
                contractInfoByPoolId(request: _12.ContractInfoByPoolIdRequest): Promise<_12.ContractInfoByPoolIdResponse>;
            };
            LCDQueryClient: typeof _282.LCDQueryClient;
            ParamsRequest: {
                typeUrl: string;
                encode(_: _12.ParamsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _12.ParamsRequest;
                fromPartial(_: Partial<_12.ParamsRequest>): _12.ParamsRequest;
                fromAmino(_: _12.ParamsRequestAmino): _12.ParamsRequest;
                toAmino(_: _12.ParamsRequest): _12.ParamsRequestAmino;
                fromAminoMsg(object: _12.ParamsRequestAminoMsg): _12.ParamsRequest;
                toAminoMsg(message: _12.ParamsRequest): _12.ParamsRequestAminoMsg;
                fromProtoMsg(message: _12.ParamsRequestProtoMsg): _12.ParamsRequest;
                toProto(message: _12.ParamsRequest): Uint8Array;
                toProtoMsg(message: _12.ParamsRequest): _12.ParamsRequestProtoMsg;
            };
            ParamsResponse: {
                typeUrl: string;
                encode(message: _12.ParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _12.ParamsResponse;
                fromPartial(object: Partial<_12.ParamsResponse>): _12.ParamsResponse;
                fromAmino(object: _12.ParamsResponseAmino): _12.ParamsResponse;
                toAmino(message: _12.ParamsResponse): _12.ParamsResponseAmino;
                fromAminoMsg(object: _12.ParamsResponseAminoMsg): _12.ParamsResponse;
                toAminoMsg(message: _12.ParamsResponse): _12.ParamsResponseAminoMsg;
                fromProtoMsg(message: _12.ParamsResponseProtoMsg): _12.ParamsResponse;
                toProto(message: _12.ParamsResponse): Uint8Array;
                toProtoMsg(message: _12.ParamsResponse): _12.ParamsResponseProtoMsg;
            };
            PoolsRequest: {
                typeUrl: string;
                encode(message: _12.PoolsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _12.PoolsRequest;
                fromPartial(object: Partial<_12.PoolsRequest>): _12.PoolsRequest;
                fromAmino(object: _12.PoolsRequestAmino): _12.PoolsRequest;
                toAmino(message: _12.PoolsRequest): _12.PoolsRequestAmino;
                fromAminoMsg(object: _12.PoolsRequestAminoMsg): _12.PoolsRequest;
                toAminoMsg(message: _12.PoolsRequest): _12.PoolsRequestAminoMsg;
                fromProtoMsg(message: _12.PoolsRequestProtoMsg): _12.PoolsRequest;
                toProto(message: _12.PoolsRequest): Uint8Array;
                toProtoMsg(message: _12.PoolsRequest): _12.PoolsRequestProtoMsg;
            };
            PoolsResponse: {
                typeUrl: string;
                encode(message: _12.PoolsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _12.PoolsResponse;
                fromPartial(object: Partial<_12.PoolsResponse>): _12.PoolsResponse;
                fromAmino(object: _12.PoolsResponseAmino): _12.PoolsResponse;
                toAmino(message: _12.PoolsResponse): _12.PoolsResponseAmino;
                fromAminoMsg(object: _12.PoolsResponseAminoMsg): _12.PoolsResponse;
                toAminoMsg(message: _12.PoolsResponse): _12.PoolsResponseAminoMsg;
                fromProtoMsg(message: _12.PoolsResponseProtoMsg): _12.PoolsResponse;
                toProto(message: _12.PoolsResponse): Uint8Array;
                toProtoMsg(message: _12.PoolsResponse): _12.PoolsResponseProtoMsg;
            };
            ContractInfoByPoolIdRequest: {
                typeUrl: string;
                encode(message: _12.ContractInfoByPoolIdRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _12.ContractInfoByPoolIdRequest;
                fromPartial(object: Partial<_12.ContractInfoByPoolIdRequest>): _12.ContractInfoByPoolIdRequest;
                fromAmino(object: _12.ContractInfoByPoolIdRequestAmino): _12.ContractInfoByPoolIdRequest;
                toAmino(message: _12.ContractInfoByPoolIdRequest): _12.ContractInfoByPoolIdRequestAmino;
                fromAminoMsg(object: _12.ContractInfoByPoolIdRequestAminoMsg): _12.ContractInfoByPoolIdRequest;
                toAminoMsg(message: _12.ContractInfoByPoolIdRequest): _12.ContractInfoByPoolIdRequestAminoMsg;
                fromProtoMsg(message: _12.ContractInfoByPoolIdRequestProtoMsg): _12.ContractInfoByPoolIdRequest;
                toProto(message: _12.ContractInfoByPoolIdRequest): Uint8Array;
                toProtoMsg(message: _12.ContractInfoByPoolIdRequest): _12.ContractInfoByPoolIdRequestProtoMsg;
            };
            ContractInfoByPoolIdResponse: {
                typeUrl: string;
                encode(message: _12.ContractInfoByPoolIdResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _12.ContractInfoByPoolIdResponse;
                fromPartial(object: Partial<_12.ContractInfoByPoolIdResponse>): _12.ContractInfoByPoolIdResponse;
                fromAmino(object: _12.ContractInfoByPoolIdResponseAmino): _12.ContractInfoByPoolIdResponse;
                toAmino(message: _12.ContractInfoByPoolIdResponse): _12.ContractInfoByPoolIdResponseAmino;
                fromAminoMsg(object: _12.ContractInfoByPoolIdResponseAminoMsg): _12.ContractInfoByPoolIdResponse;
                toAminoMsg(message: _12.ContractInfoByPoolIdResponse): _12.ContractInfoByPoolIdResponseAminoMsg;
                fromProtoMsg(message: _12.ContractInfoByPoolIdResponseProtoMsg): _12.ContractInfoByPoolIdResponse;
                toProto(message: _12.ContractInfoByPoolIdResponse): Uint8Array;
                toProtoMsg(message: _12.ContractInfoByPoolIdResponse): _12.ContractInfoByPoolIdResponseProtoMsg;
            };
            PoolI_InterfaceDecoder: (input: Uint8Array | import("..").BinaryReader) => import("../google/protobuf/any").Any | import("./concentratedliquidity/v1beta1/pool").Pool | _8.CosmWasmPool | _20.Pool | _22.Pool;
            PoolI_FromAmino: (content: import("../google/protobuf/any").AnyAmino) => import("../google/protobuf/any").Any;
            PoolI_ToAmino: (content: import("../google/protobuf/any").Any) => import("../google/protobuf/any").AnyAmino;
            Params: {
                typeUrl: string;
                encode(message: _11.Params, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _11.Params;
                fromPartial(object: Partial<_11.Params>): _11.Params;
                fromAmino(object: _11.ParamsAmino): _11.Params;
                toAmino(message: _11.Params): _11.ParamsAmino;
                fromAminoMsg(object: _11.ParamsAminoMsg): _11.Params;
                toAminoMsg(message: _11.Params): _11.ParamsAminoMsg;
                fromProtoMsg(message: _11.ParamsProtoMsg): _11.Params;
                toProto(message: _11.Params): Uint8Array;
                toProtoMsg(message: _11.Params): _11.ParamsProtoMsg;
            };
            MsgCreateCosmWasmPool: {
                typeUrl: string;
                encode(message: _10.MsgCreateCosmWasmPool, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _10.MsgCreateCosmWasmPool;
                fromPartial(object: Partial<_10.MsgCreateCosmWasmPool>): _10.MsgCreateCosmWasmPool;
                fromAmino(object: _10.MsgCreateCosmWasmPoolAmino): _10.MsgCreateCosmWasmPool;
                toAmino(message: _10.MsgCreateCosmWasmPool): _10.MsgCreateCosmWasmPoolAmino;
                fromAminoMsg(object: _10.MsgCreateCosmWasmPoolAminoMsg): _10.MsgCreateCosmWasmPool;
                toAminoMsg(message: _10.MsgCreateCosmWasmPool): _10.MsgCreateCosmWasmPoolAminoMsg;
                fromProtoMsg(message: _10.MsgCreateCosmWasmPoolProtoMsg): _10.MsgCreateCosmWasmPool;
                toProto(message: _10.MsgCreateCosmWasmPool): Uint8Array;
                toProtoMsg(message: _10.MsgCreateCosmWasmPool): _10.MsgCreateCosmWasmPoolProtoMsg;
            };
            MsgCreateCosmWasmPoolResponse: {
                typeUrl: string;
                encode(message: _10.MsgCreateCosmWasmPoolResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _10.MsgCreateCosmWasmPoolResponse;
                fromPartial(object: Partial<_10.MsgCreateCosmWasmPoolResponse>): _10.MsgCreateCosmWasmPoolResponse;
                fromAmino(object: _10.MsgCreateCosmWasmPoolResponseAmino): _10.MsgCreateCosmWasmPoolResponse;
                toAmino(message: _10.MsgCreateCosmWasmPoolResponse): _10.MsgCreateCosmWasmPoolResponseAmino;
                fromAminoMsg(object: _10.MsgCreateCosmWasmPoolResponseAminoMsg): _10.MsgCreateCosmWasmPoolResponse;
                toAminoMsg(message: _10.MsgCreateCosmWasmPoolResponse): _10.MsgCreateCosmWasmPoolResponseAminoMsg;
                fromProtoMsg(message: _10.MsgCreateCosmWasmPoolResponseProtoMsg): _10.MsgCreateCosmWasmPoolResponse;
                toProto(message: _10.MsgCreateCosmWasmPoolResponse): Uint8Array;
                toProtoMsg(message: _10.MsgCreateCosmWasmPoolResponse): _10.MsgCreateCosmWasmPoolResponseProtoMsg;
            };
            EmptyRequest: {
                typeUrl: string;
                encode(_: _9.EmptyRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _9.EmptyRequest;
                fromPartial(_: Partial<_9.EmptyRequest>): _9.EmptyRequest;
                fromAmino(_: _9.EmptyRequestAmino): _9.EmptyRequest;
                toAmino(_: _9.EmptyRequest): _9.EmptyRequestAmino;
                fromAminoMsg(object: _9.EmptyRequestAminoMsg): _9.EmptyRequest;
                toAminoMsg(message: _9.EmptyRequest): _9.EmptyRequestAminoMsg;
                fromProtoMsg(message: _9.EmptyRequestProtoMsg): _9.EmptyRequest;
                toProto(message: _9.EmptyRequest): Uint8Array;
                toProtoMsg(message: _9.EmptyRequest): _9.EmptyRequestProtoMsg;
            };
            JoinPoolExecuteMsgRequest: {
                typeUrl: string;
                encode(message: _9.JoinPoolExecuteMsgRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _9.JoinPoolExecuteMsgRequest;
                fromPartial(object: Partial<_9.JoinPoolExecuteMsgRequest>): _9.JoinPoolExecuteMsgRequest;
                fromAmino(object: _9.JoinPoolExecuteMsgRequestAmino): _9.JoinPoolExecuteMsgRequest;
                toAmino(message: _9.JoinPoolExecuteMsgRequest): _9.JoinPoolExecuteMsgRequestAmino;
                fromAminoMsg(object: _9.JoinPoolExecuteMsgRequestAminoMsg): _9.JoinPoolExecuteMsgRequest;
                toAminoMsg(message: _9.JoinPoolExecuteMsgRequest): _9.JoinPoolExecuteMsgRequestAminoMsg;
                fromProtoMsg(message: _9.JoinPoolExecuteMsgRequestProtoMsg): _9.JoinPoolExecuteMsgRequest;
                toProto(message: _9.JoinPoolExecuteMsgRequest): Uint8Array;
                toProtoMsg(message: _9.JoinPoolExecuteMsgRequest): _9.JoinPoolExecuteMsgRequestProtoMsg;
            };
            JoinPoolExecuteMsgResponse: {
                typeUrl: string;
                encode(_: _9.JoinPoolExecuteMsgResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _9.JoinPoolExecuteMsgResponse;
                fromPartial(_: Partial<_9.JoinPoolExecuteMsgResponse>): _9.JoinPoolExecuteMsgResponse;
                fromAmino(_: _9.JoinPoolExecuteMsgResponseAmino): _9.JoinPoolExecuteMsgResponse;
                toAmino(_: _9.JoinPoolExecuteMsgResponse): _9.JoinPoolExecuteMsgResponseAmino;
                fromAminoMsg(object: _9.JoinPoolExecuteMsgResponseAminoMsg): _9.JoinPoolExecuteMsgResponse;
                toAminoMsg(message: _9.JoinPoolExecuteMsgResponse): _9.JoinPoolExecuteMsgResponseAminoMsg;
                fromProtoMsg(message: _9.JoinPoolExecuteMsgResponseProtoMsg): _9.JoinPoolExecuteMsgResponse;
                toProto(message: _9.JoinPoolExecuteMsgResponse): Uint8Array;
                toProtoMsg(message: _9.JoinPoolExecuteMsgResponse): _9.JoinPoolExecuteMsgResponseProtoMsg;
            };
            ExitPoolExecuteMsgRequest: {
                typeUrl: string;
                encode(message: _9.ExitPoolExecuteMsgRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _9.ExitPoolExecuteMsgRequest;
                fromPartial(object: Partial<_9.ExitPoolExecuteMsgRequest>): _9.ExitPoolExecuteMsgRequest;
                fromAmino(object: _9.ExitPoolExecuteMsgRequestAmino): _9.ExitPoolExecuteMsgRequest;
                toAmino(message: _9.ExitPoolExecuteMsgRequest): _9.ExitPoolExecuteMsgRequestAmino;
                fromAminoMsg(object: _9.ExitPoolExecuteMsgRequestAminoMsg): _9.ExitPoolExecuteMsgRequest;
                toAminoMsg(message: _9.ExitPoolExecuteMsgRequest): _9.ExitPoolExecuteMsgRequestAminoMsg;
                fromProtoMsg(message: _9.ExitPoolExecuteMsgRequestProtoMsg): _9.ExitPoolExecuteMsgRequest;
                toProto(message: _9.ExitPoolExecuteMsgRequest): Uint8Array;
                toProtoMsg(message: _9.ExitPoolExecuteMsgRequest): _9.ExitPoolExecuteMsgRequestProtoMsg;
            };
            ExitPoolExecuteMsgResponse: {
                typeUrl: string;
                encode(_: _9.ExitPoolExecuteMsgResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _9.ExitPoolExecuteMsgResponse;
                fromPartial(_: Partial<_9.ExitPoolExecuteMsgResponse>): _9.ExitPoolExecuteMsgResponse;
                fromAmino(_: _9.ExitPoolExecuteMsgResponseAmino): _9.ExitPoolExecuteMsgResponse;
                toAmino(_: _9.ExitPoolExecuteMsgResponse): _9.ExitPoolExecuteMsgResponseAmino;
                fromAminoMsg(object: _9.ExitPoolExecuteMsgResponseAminoMsg): _9.ExitPoolExecuteMsgResponse;
                toAminoMsg(message: _9.ExitPoolExecuteMsgResponse): _9.ExitPoolExecuteMsgResponseAminoMsg;
                fromProtoMsg(message: _9.ExitPoolExecuteMsgResponseProtoMsg): _9.ExitPoolExecuteMsgResponse;
                toProto(message: _9.ExitPoolExecuteMsgResponse): Uint8Array;
                toProtoMsg(message: _9.ExitPoolExecuteMsgResponse): _9.ExitPoolExecuteMsgResponseProtoMsg;
            };
            CosmWasmPool: {
                typeUrl: string;
                encode(message: _8.CosmWasmPool, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _8.CosmWasmPool;
                fromPartial(object: Partial<_8.CosmWasmPool>): _8.CosmWasmPool;
                fromAmino(object: _8.CosmWasmPoolAmino): _8.CosmWasmPool;
                toAmino(message: _8.CosmWasmPool): _8.CosmWasmPoolAmino;
                fromAminoMsg(object: _8.CosmWasmPoolAminoMsg): _8.CosmWasmPool;
                toAminoMsg(message: _8.CosmWasmPool): _8.CosmWasmPoolAminoMsg;
                fromProtoMsg(message: _8.CosmWasmPoolProtoMsg): _8.CosmWasmPool;
                toProto(message: _8.CosmWasmPool): Uint8Array;
                toProtoMsg(message: _8.CosmWasmPool): _8.CosmWasmPoolProtoMsg;
            };
            GetSwapFeeQueryMsg: {
                typeUrl: string;
                encode(message: _7.GetSwapFeeQueryMsg, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _7.GetSwapFeeQueryMsg;
                fromPartial(object: Partial<_7.GetSwapFeeQueryMsg>): _7.GetSwapFeeQueryMsg;
                fromAmino(object: _7.GetSwapFeeQueryMsgAmino): _7.GetSwapFeeQueryMsg;
                toAmino(message: _7.GetSwapFeeQueryMsg): _7.GetSwapFeeQueryMsgAmino;
                fromAminoMsg(object: _7.GetSwapFeeQueryMsgAminoMsg): _7.GetSwapFeeQueryMsg;
                toAminoMsg(message: _7.GetSwapFeeQueryMsg): _7.GetSwapFeeQueryMsgAminoMsg;
                fromProtoMsg(message: _7.GetSwapFeeQueryMsgProtoMsg): _7.GetSwapFeeQueryMsg;
                toProto(message: _7.GetSwapFeeQueryMsg): Uint8Array;
                toProtoMsg(message: _7.GetSwapFeeQueryMsg): _7.GetSwapFeeQueryMsgProtoMsg;
            };
            GetSwapFeeQueryMsgResponse: {
                typeUrl: string;
                encode(message: _7.GetSwapFeeQueryMsgResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _7.GetSwapFeeQueryMsgResponse;
                fromPartial(object: Partial<_7.GetSwapFeeQueryMsgResponse>): _7.GetSwapFeeQueryMsgResponse;
                fromAmino(object: _7.GetSwapFeeQueryMsgResponseAmino): _7.GetSwapFeeQueryMsgResponse;
                toAmino(message: _7.GetSwapFeeQueryMsgResponse): _7.GetSwapFeeQueryMsgResponseAmino;
                fromAminoMsg(object: _7.GetSwapFeeQueryMsgResponseAminoMsg): _7.GetSwapFeeQueryMsgResponse;
                toAminoMsg(message: _7.GetSwapFeeQueryMsgResponse): _7.GetSwapFeeQueryMsgResponseAminoMsg;
                fromProtoMsg(message: _7.GetSwapFeeQueryMsgResponseProtoMsg): _7.GetSwapFeeQueryMsgResponse;
                toProto(message: _7.GetSwapFeeQueryMsgResponse): Uint8Array;
                toProtoMsg(message: _7.GetSwapFeeQueryMsgResponse): _7.GetSwapFeeQueryMsgResponseProtoMsg;
            };
            SpotPrice: {
                typeUrl: string;
                encode(message: _7.SpotPrice, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _7.SpotPrice;
                fromPartial(object: Partial<_7.SpotPrice>): _7.SpotPrice;
                fromAmino(object: _7.SpotPriceAmino): _7.SpotPrice;
                toAmino(message: _7.SpotPrice): _7.SpotPriceAmino;
                fromAminoMsg(object: _7.SpotPriceAminoMsg): _7.SpotPrice;
                toAminoMsg(message: _7.SpotPrice): _7.SpotPriceAminoMsg;
                fromProtoMsg(message: _7.SpotPriceProtoMsg): _7.SpotPrice;
                toProto(message: _7.SpotPrice): Uint8Array;
                toProtoMsg(message: _7.SpotPrice): _7.SpotPriceProtoMsg;
            };
            SpotPriceQueryMsg: {
                typeUrl: string;
                encode(message: _7.SpotPriceQueryMsg, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _7.SpotPriceQueryMsg;
                fromPartial(object: Partial<_7.SpotPriceQueryMsg>): _7.SpotPriceQueryMsg;
                fromAmino(object: _7.SpotPriceQueryMsgAmino): _7.SpotPriceQueryMsg;
                toAmino(message: _7.SpotPriceQueryMsg): _7.SpotPriceQueryMsgAmino;
                fromAminoMsg(object: _7.SpotPriceQueryMsgAminoMsg): _7.SpotPriceQueryMsg;
                toAminoMsg(message: _7.SpotPriceQueryMsg): _7.SpotPriceQueryMsgAminoMsg;
                fromProtoMsg(message: _7.SpotPriceQueryMsgProtoMsg): _7.SpotPriceQueryMsg;
                toProto(message: _7.SpotPriceQueryMsg): Uint8Array;
                toProtoMsg(message: _7.SpotPriceQueryMsg): _7.SpotPriceQueryMsgProtoMsg;
            };
            SpotPriceQueryMsgResponse: {
                typeUrl: string;
                encode(message: _7.SpotPriceQueryMsgResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _7.SpotPriceQueryMsgResponse;
                fromPartial(object: Partial<_7.SpotPriceQueryMsgResponse>): _7.SpotPriceQueryMsgResponse;
                fromAmino(object: _7.SpotPriceQueryMsgResponseAmino): _7.SpotPriceQueryMsgResponse;
                toAmino(message: _7.SpotPriceQueryMsgResponse): _7.SpotPriceQueryMsgResponseAmino;
                fromAminoMsg(object: _7.SpotPriceQueryMsgResponseAminoMsg): _7.SpotPriceQueryMsgResponse;
                toAminoMsg(message: _7.SpotPriceQueryMsgResponse): _7.SpotPriceQueryMsgResponseAminoMsg;
                fromProtoMsg(message: _7.SpotPriceQueryMsgResponseProtoMsg): _7.SpotPriceQueryMsgResponse;
                toProto(message: _7.SpotPriceQueryMsgResponse): Uint8Array;
                toProtoMsg(message: _7.SpotPriceQueryMsgResponse): _7.SpotPriceQueryMsgResponseProtoMsg;
            };
            EmptyStruct: {
                typeUrl: string;
                encode(_: _7.EmptyStruct, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _7.EmptyStruct;
                fromPartial(_: Partial<_7.EmptyStruct>): _7.EmptyStruct;
                fromAmino(_: _7.EmptyStructAmino): _7.EmptyStruct;
                toAmino(_: _7.EmptyStruct): _7.EmptyStructAmino;
                fromAminoMsg(object: _7.EmptyStructAminoMsg): _7.EmptyStruct;
                toAminoMsg(message: _7.EmptyStruct): _7.EmptyStructAminoMsg;
                fromProtoMsg(message: _7.EmptyStructProtoMsg): _7.EmptyStruct;
                toProto(message: _7.EmptyStruct): Uint8Array;
                toProtoMsg(message: _7.EmptyStruct): _7.EmptyStructProtoMsg;
            };
            GetTotalPoolLiquidityQueryMsg: {
                typeUrl: string;
                encode(message: _7.GetTotalPoolLiquidityQueryMsg, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _7.GetTotalPoolLiquidityQueryMsg;
                fromPartial(object: Partial<_7.GetTotalPoolLiquidityQueryMsg>): _7.GetTotalPoolLiquidityQueryMsg;
                fromAmino(object: _7.GetTotalPoolLiquidityQueryMsgAmino): _7.GetTotalPoolLiquidityQueryMsg;
                toAmino(message: _7.GetTotalPoolLiquidityQueryMsg): _7.GetTotalPoolLiquidityQueryMsgAmino;
                fromAminoMsg(object: _7.GetTotalPoolLiquidityQueryMsgAminoMsg): _7.GetTotalPoolLiquidityQueryMsg;
                toAminoMsg(message: _7.GetTotalPoolLiquidityQueryMsg): _7.GetTotalPoolLiquidityQueryMsgAminoMsg;
                fromProtoMsg(message: _7.GetTotalPoolLiquidityQueryMsgProtoMsg): _7.GetTotalPoolLiquidityQueryMsg;
                toProto(message: _7.GetTotalPoolLiquidityQueryMsg): Uint8Array;
                toProtoMsg(message: _7.GetTotalPoolLiquidityQueryMsg): _7.GetTotalPoolLiquidityQueryMsgProtoMsg;
            };
            GetTotalPoolLiquidityQueryMsgResponse: {
                typeUrl: string;
                encode(message: _7.GetTotalPoolLiquidityQueryMsgResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _7.GetTotalPoolLiquidityQueryMsgResponse;
                fromPartial(object: Partial<_7.GetTotalPoolLiquidityQueryMsgResponse>): _7.GetTotalPoolLiquidityQueryMsgResponse;
                fromAmino(object: _7.GetTotalPoolLiquidityQueryMsgResponseAmino): _7.GetTotalPoolLiquidityQueryMsgResponse;
                toAmino(message: _7.GetTotalPoolLiquidityQueryMsgResponse): _7.GetTotalPoolLiquidityQueryMsgResponseAmino;
                fromAminoMsg(object: _7.GetTotalPoolLiquidityQueryMsgResponseAminoMsg): _7.GetTotalPoolLiquidityQueryMsgResponse;
                toAminoMsg(message: _7.GetTotalPoolLiquidityQueryMsgResponse): _7.GetTotalPoolLiquidityQueryMsgResponseAminoMsg;
                fromProtoMsg(message: _7.GetTotalPoolLiquidityQueryMsgResponseProtoMsg): _7.GetTotalPoolLiquidityQueryMsgResponse;
                toProto(message: _7.GetTotalPoolLiquidityQueryMsgResponse): Uint8Array;
                toProtoMsg(message: _7.GetTotalPoolLiquidityQueryMsgResponse): _7.GetTotalPoolLiquidityQueryMsgResponseProtoMsg;
            };
            GetTotalSharesQueryMsg: {
                typeUrl: string;
                encode(message: _7.GetTotalSharesQueryMsg, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _7.GetTotalSharesQueryMsg;
                fromPartial(object: Partial<_7.GetTotalSharesQueryMsg>): _7.GetTotalSharesQueryMsg;
                fromAmino(object: _7.GetTotalSharesQueryMsgAmino): _7.GetTotalSharesQueryMsg;
                toAmino(message: _7.GetTotalSharesQueryMsg): _7.GetTotalSharesQueryMsgAmino;
                fromAminoMsg(object: _7.GetTotalSharesQueryMsgAminoMsg): _7.GetTotalSharesQueryMsg;
                toAminoMsg(message: _7.GetTotalSharesQueryMsg): _7.GetTotalSharesQueryMsgAminoMsg;
                fromProtoMsg(message: _7.GetTotalSharesQueryMsgProtoMsg): _7.GetTotalSharesQueryMsg;
                toProto(message: _7.GetTotalSharesQueryMsg): Uint8Array;
                toProtoMsg(message: _7.GetTotalSharesQueryMsg): _7.GetTotalSharesQueryMsgProtoMsg;
            };
            GetTotalSharesQueryMsgResponse: {
                typeUrl: string;
                encode(message: _7.GetTotalSharesQueryMsgResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _7.GetTotalSharesQueryMsgResponse;
                fromPartial(object: Partial<_7.GetTotalSharesQueryMsgResponse>): _7.GetTotalSharesQueryMsgResponse;
                fromAmino(object: _7.GetTotalSharesQueryMsgResponseAmino): _7.GetTotalSharesQueryMsgResponse;
                toAmino(message: _7.GetTotalSharesQueryMsgResponse): _7.GetTotalSharesQueryMsgResponseAmino;
                fromAminoMsg(object: _7.GetTotalSharesQueryMsgResponseAminoMsg): _7.GetTotalSharesQueryMsgResponse;
                toAminoMsg(message: _7.GetTotalSharesQueryMsgResponse): _7.GetTotalSharesQueryMsgResponseAminoMsg;
                fromProtoMsg(message: _7.GetTotalSharesQueryMsgResponseProtoMsg): _7.GetTotalSharesQueryMsgResponse;
                toProto(message: _7.GetTotalSharesQueryMsgResponse): Uint8Array;
                toProtoMsg(message: _7.GetTotalSharesQueryMsgResponse): _7.GetTotalSharesQueryMsgResponseProtoMsg;
            };
            SwapExactAmountIn: {
                typeUrl: string;
                encode(message: _6.SwapExactAmountIn, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _6.SwapExactAmountIn;
                fromPartial(object: Partial<_6.SwapExactAmountIn>): _6.SwapExactAmountIn;
                fromAmino(object: _6.SwapExactAmountInAmino): _6.SwapExactAmountIn;
                toAmino(message: _6.SwapExactAmountIn): _6.SwapExactAmountInAmino;
                fromAminoMsg(object: _6.SwapExactAmountInAminoMsg): _6.SwapExactAmountIn;
                toAminoMsg(message: _6.SwapExactAmountIn): _6.SwapExactAmountInAminoMsg;
                fromProtoMsg(message: _6.SwapExactAmountInProtoMsg): _6.SwapExactAmountIn;
                toProto(message: _6.SwapExactAmountIn): Uint8Array;
                toProtoMsg(message: _6.SwapExactAmountIn): _6.SwapExactAmountInProtoMsg;
            };
            SwapExactAmountInSudoMsg: {
                typeUrl: string;
                encode(message: _6.SwapExactAmountInSudoMsg, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _6.SwapExactAmountInSudoMsg;
                fromPartial(object: Partial<_6.SwapExactAmountInSudoMsg>): _6.SwapExactAmountInSudoMsg;
                fromAmino(object: _6.SwapExactAmountInSudoMsgAmino): _6.SwapExactAmountInSudoMsg;
                toAmino(message: _6.SwapExactAmountInSudoMsg): _6.SwapExactAmountInSudoMsgAmino;
                fromAminoMsg(object: _6.SwapExactAmountInSudoMsgAminoMsg): _6.SwapExactAmountInSudoMsg;
                toAminoMsg(message: _6.SwapExactAmountInSudoMsg): _6.SwapExactAmountInSudoMsgAminoMsg;
                fromProtoMsg(message: _6.SwapExactAmountInSudoMsgProtoMsg): _6.SwapExactAmountInSudoMsg;
                toProto(message: _6.SwapExactAmountInSudoMsg): Uint8Array;
                toProtoMsg(message: _6.SwapExactAmountInSudoMsg): _6.SwapExactAmountInSudoMsgProtoMsg;
            };
            SwapExactAmountInSudoMsgResponse: {
                typeUrl: string;
                encode(message: _6.SwapExactAmountInSudoMsgResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _6.SwapExactAmountInSudoMsgResponse;
                fromPartial(object: Partial<_6.SwapExactAmountInSudoMsgResponse>): _6.SwapExactAmountInSudoMsgResponse;
                fromAmino(object: _6.SwapExactAmountInSudoMsgResponseAmino): _6.SwapExactAmountInSudoMsgResponse;
                toAmino(message: _6.SwapExactAmountInSudoMsgResponse): _6.SwapExactAmountInSudoMsgResponseAmino;
                fromAminoMsg(object: _6.SwapExactAmountInSudoMsgResponseAminoMsg): _6.SwapExactAmountInSudoMsgResponse;
                toAminoMsg(message: _6.SwapExactAmountInSudoMsgResponse): _6.SwapExactAmountInSudoMsgResponseAminoMsg;
                fromProtoMsg(message: _6.SwapExactAmountInSudoMsgResponseProtoMsg): _6.SwapExactAmountInSudoMsgResponse;
                toProto(message: _6.SwapExactAmountInSudoMsgResponse): Uint8Array;
                toProtoMsg(message: _6.SwapExactAmountInSudoMsgResponse): _6.SwapExactAmountInSudoMsgResponseProtoMsg;
            };
            SwapExactAmountOut: {
                typeUrl: string;
                encode(message: _6.SwapExactAmountOut, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _6.SwapExactAmountOut;
                fromPartial(object: Partial<_6.SwapExactAmountOut>): _6.SwapExactAmountOut;
                fromAmino(object: _6.SwapExactAmountOutAmino): _6.SwapExactAmountOut;
                toAmino(message: _6.SwapExactAmountOut): _6.SwapExactAmountOutAmino;
                fromAminoMsg(object: _6.SwapExactAmountOutAminoMsg): _6.SwapExactAmountOut;
                toAminoMsg(message: _6.SwapExactAmountOut): _6.SwapExactAmountOutAminoMsg;
                fromProtoMsg(message: _6.SwapExactAmountOutProtoMsg): _6.SwapExactAmountOut;
                toProto(message: _6.SwapExactAmountOut): Uint8Array;
                toProtoMsg(message: _6.SwapExactAmountOut): _6.SwapExactAmountOutProtoMsg;
            };
            SwapExactAmountOutSudoMsg: {
                typeUrl: string;
                encode(message: _6.SwapExactAmountOutSudoMsg, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _6.SwapExactAmountOutSudoMsg;
                fromPartial(object: Partial<_6.SwapExactAmountOutSudoMsg>): _6.SwapExactAmountOutSudoMsg;
                fromAmino(object: _6.SwapExactAmountOutSudoMsgAmino): _6.SwapExactAmountOutSudoMsg;
                toAmino(message: _6.SwapExactAmountOutSudoMsg): _6.SwapExactAmountOutSudoMsgAmino;
                fromAminoMsg(object: _6.SwapExactAmountOutSudoMsgAminoMsg): _6.SwapExactAmountOutSudoMsg;
                toAminoMsg(message: _6.SwapExactAmountOutSudoMsg): _6.SwapExactAmountOutSudoMsgAminoMsg;
                fromProtoMsg(message: _6.SwapExactAmountOutSudoMsgProtoMsg): _6.SwapExactAmountOutSudoMsg;
                toProto(message: _6.SwapExactAmountOutSudoMsg): Uint8Array;
                toProtoMsg(message: _6.SwapExactAmountOutSudoMsg): _6.SwapExactAmountOutSudoMsgProtoMsg;
            };
            SwapExactAmountOutSudoMsgResponse: {
                typeUrl: string;
                encode(message: _6.SwapExactAmountOutSudoMsgResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _6.SwapExactAmountOutSudoMsgResponse;
                fromPartial(object: Partial<_6.SwapExactAmountOutSudoMsgResponse>): _6.SwapExactAmountOutSudoMsgResponse;
                fromAmino(object: _6.SwapExactAmountOutSudoMsgResponseAmino): _6.SwapExactAmountOutSudoMsgResponse;
                toAmino(message: _6.SwapExactAmountOutSudoMsgResponse): _6.SwapExactAmountOutSudoMsgResponseAmino;
                fromAminoMsg(object: _6.SwapExactAmountOutSudoMsgResponseAminoMsg): _6.SwapExactAmountOutSudoMsgResponse;
                toAminoMsg(message: _6.SwapExactAmountOutSudoMsgResponse): _6.SwapExactAmountOutSudoMsgResponseAminoMsg;
                fromProtoMsg(message: _6.SwapExactAmountOutSudoMsgResponseProtoMsg): _6.SwapExactAmountOutSudoMsgResponse;
                toProto(message: _6.SwapExactAmountOutSudoMsgResponse): Uint8Array;
                toProtoMsg(message: _6.SwapExactAmountOutSudoMsgResponse): _6.SwapExactAmountOutSudoMsgResponseProtoMsg;
            };
            CalcOutAmtGivenIn: {
                typeUrl: string;
                encode(message: _5.CalcOutAmtGivenIn, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _5.CalcOutAmtGivenIn;
                fromPartial(object: Partial<_5.CalcOutAmtGivenIn>): _5.CalcOutAmtGivenIn;
                fromAmino(object: _5.CalcOutAmtGivenInAmino): _5.CalcOutAmtGivenIn;
                toAmino(message: _5.CalcOutAmtGivenIn): _5.CalcOutAmtGivenInAmino;
                fromAminoMsg(object: _5.CalcOutAmtGivenInAminoMsg): _5.CalcOutAmtGivenIn;
                toAminoMsg(message: _5.CalcOutAmtGivenIn): _5.CalcOutAmtGivenInAminoMsg;
                fromProtoMsg(message: _5.CalcOutAmtGivenInProtoMsg): _5.CalcOutAmtGivenIn;
                toProto(message: _5.CalcOutAmtGivenIn): Uint8Array;
                toProtoMsg(message: _5.CalcOutAmtGivenIn): _5.CalcOutAmtGivenInProtoMsg;
            };
            CalcOutAmtGivenInRequest: {
                typeUrl: string;
                encode(message: _5.CalcOutAmtGivenInRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _5.CalcOutAmtGivenInRequest;
                fromPartial(object: Partial<_5.CalcOutAmtGivenInRequest>): _5.CalcOutAmtGivenInRequest;
                fromAmino(object: _5.CalcOutAmtGivenInRequestAmino): _5.CalcOutAmtGivenInRequest;
                toAmino(message: _5.CalcOutAmtGivenInRequest): _5.CalcOutAmtGivenInRequestAmino;
                fromAminoMsg(object: _5.CalcOutAmtGivenInRequestAminoMsg): _5.CalcOutAmtGivenInRequest;
                toAminoMsg(message: _5.CalcOutAmtGivenInRequest): _5.CalcOutAmtGivenInRequestAminoMsg;
                fromProtoMsg(message: _5.CalcOutAmtGivenInRequestProtoMsg): _5.CalcOutAmtGivenInRequest;
                toProto(message: _5.CalcOutAmtGivenInRequest): Uint8Array;
                toProtoMsg(message: _5.CalcOutAmtGivenInRequest): _5.CalcOutAmtGivenInRequestProtoMsg;
            };
            CalcOutAmtGivenInResponse: {
                typeUrl: string;
                encode(message: _5.CalcOutAmtGivenInResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _5.CalcOutAmtGivenInResponse;
                fromPartial(object: Partial<_5.CalcOutAmtGivenInResponse>): _5.CalcOutAmtGivenInResponse;
                fromAmino(object: _5.CalcOutAmtGivenInResponseAmino): _5.CalcOutAmtGivenInResponse;
                toAmino(message: _5.CalcOutAmtGivenInResponse): _5.CalcOutAmtGivenInResponseAmino;
                fromAminoMsg(object: _5.CalcOutAmtGivenInResponseAminoMsg): _5.CalcOutAmtGivenInResponse;
                toAminoMsg(message: _5.CalcOutAmtGivenInResponse): _5.CalcOutAmtGivenInResponseAminoMsg;
                fromProtoMsg(message: _5.CalcOutAmtGivenInResponseProtoMsg): _5.CalcOutAmtGivenInResponse;
                toProto(message: _5.CalcOutAmtGivenInResponse): Uint8Array;
                toProtoMsg(message: _5.CalcOutAmtGivenInResponse): _5.CalcOutAmtGivenInResponseProtoMsg;
            };
            CalcInAmtGivenOut: {
                typeUrl: string;
                encode(message: _5.CalcInAmtGivenOut, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _5.CalcInAmtGivenOut;
                fromPartial(object: Partial<_5.CalcInAmtGivenOut>): _5.CalcInAmtGivenOut;
                fromAmino(object: _5.CalcInAmtGivenOutAmino): _5.CalcInAmtGivenOut;
                toAmino(message: _5.CalcInAmtGivenOut): _5.CalcInAmtGivenOutAmino;
                fromAminoMsg(object: _5.CalcInAmtGivenOutAminoMsg): _5.CalcInAmtGivenOut;
                toAminoMsg(message: _5.CalcInAmtGivenOut): _5.CalcInAmtGivenOutAminoMsg;
                fromProtoMsg(message: _5.CalcInAmtGivenOutProtoMsg): _5.CalcInAmtGivenOut;
                toProto(message: _5.CalcInAmtGivenOut): Uint8Array;
                toProtoMsg(message: _5.CalcInAmtGivenOut): _5.CalcInAmtGivenOutProtoMsg;
            };
            CalcInAmtGivenOutRequest: {
                typeUrl: string;
                encode(message: _5.CalcInAmtGivenOutRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _5.CalcInAmtGivenOutRequest;
                fromPartial(object: Partial<_5.CalcInAmtGivenOutRequest>): _5.CalcInAmtGivenOutRequest;
                fromAmino(object: _5.CalcInAmtGivenOutRequestAmino): _5.CalcInAmtGivenOutRequest;
                toAmino(message: _5.CalcInAmtGivenOutRequest): _5.CalcInAmtGivenOutRequestAmino;
                fromAminoMsg(object: _5.CalcInAmtGivenOutRequestAminoMsg): _5.CalcInAmtGivenOutRequest;
                toAminoMsg(message: _5.CalcInAmtGivenOutRequest): _5.CalcInAmtGivenOutRequestAminoMsg;
                fromProtoMsg(message: _5.CalcInAmtGivenOutRequestProtoMsg): _5.CalcInAmtGivenOutRequest;
                toProto(message: _5.CalcInAmtGivenOutRequest): Uint8Array;
                toProtoMsg(message: _5.CalcInAmtGivenOutRequest): _5.CalcInAmtGivenOutRequestProtoMsg;
            };
            CalcInAmtGivenOutResponse: {
                typeUrl: string;
                encode(message: _5.CalcInAmtGivenOutResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _5.CalcInAmtGivenOutResponse;
                fromPartial(object: Partial<_5.CalcInAmtGivenOutResponse>): _5.CalcInAmtGivenOutResponse;
                fromAmino(object: _5.CalcInAmtGivenOutResponseAmino): _5.CalcInAmtGivenOutResponse;
                toAmino(message: _5.CalcInAmtGivenOutResponse): _5.CalcInAmtGivenOutResponseAmino;
                fromAminoMsg(object: _5.CalcInAmtGivenOutResponseAminoMsg): _5.CalcInAmtGivenOutResponse;
                toAminoMsg(message: _5.CalcInAmtGivenOutResponse): _5.CalcInAmtGivenOutResponseAminoMsg;
                fromProtoMsg(message: _5.CalcInAmtGivenOutResponseProtoMsg): _5.CalcInAmtGivenOutResponse;
                toProto(message: _5.CalcInAmtGivenOutResponse): Uint8Array;
                toProtoMsg(message: _5.CalcInAmtGivenOutResponse): _5.CalcInAmtGivenOutResponseProtoMsg;
            };
            InstantiateMsg: {
                typeUrl: string;
                encode(message: _4.InstantiateMsg, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _4.InstantiateMsg;
                fromPartial(object: Partial<_4.InstantiateMsg>): _4.InstantiateMsg;
                fromAmino(object: _4.InstantiateMsgAmino): _4.InstantiateMsg;
                toAmino(message: _4.InstantiateMsg): _4.InstantiateMsgAmino;
                fromAminoMsg(object: _4.InstantiateMsgAminoMsg): _4.InstantiateMsg;
                toAminoMsg(message: _4.InstantiateMsg): _4.InstantiateMsgAminoMsg;
                fromProtoMsg(message: _4.InstantiateMsgProtoMsg): _4.InstantiateMsg;
                toProto(message: _4.InstantiateMsg): Uint8Array;
                toProtoMsg(message: _4.InstantiateMsg): _4.InstantiateMsgProtoMsg;
            };
            UploadCosmWasmPoolCodeAndWhiteListProposal: {
                typeUrl: string;
                encode(message: _3.UploadCosmWasmPoolCodeAndWhiteListProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _3.UploadCosmWasmPoolCodeAndWhiteListProposal;
                fromPartial(object: Partial<_3.UploadCosmWasmPoolCodeAndWhiteListProposal>): _3.UploadCosmWasmPoolCodeAndWhiteListProposal;
                fromAmino(object: _3.UploadCosmWasmPoolCodeAndWhiteListProposalAmino): _3.UploadCosmWasmPoolCodeAndWhiteListProposal;
                toAmino(message: _3.UploadCosmWasmPoolCodeAndWhiteListProposal): _3.UploadCosmWasmPoolCodeAndWhiteListProposalAmino;
                fromAminoMsg(object: _3.UploadCosmWasmPoolCodeAndWhiteListProposalAminoMsg): _3.UploadCosmWasmPoolCodeAndWhiteListProposal;
                toAminoMsg(message: _3.UploadCosmWasmPoolCodeAndWhiteListProposal): _3.UploadCosmWasmPoolCodeAndWhiteListProposalAminoMsg;
                fromProtoMsg(message: _3.UploadCosmWasmPoolCodeAndWhiteListProposalProtoMsg): _3.UploadCosmWasmPoolCodeAndWhiteListProposal;
                toProto(message: _3.UploadCosmWasmPoolCodeAndWhiteListProposal): Uint8Array;
                toProtoMsg(message: _3.UploadCosmWasmPoolCodeAndWhiteListProposal): _3.UploadCosmWasmPoolCodeAndWhiteListProposalProtoMsg;
            };
            MigratePoolContractsProposal: {
                typeUrl: string;
                encode(message: _3.MigratePoolContractsProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _3.MigratePoolContractsProposal;
                fromPartial(object: Partial<_3.MigratePoolContractsProposal>): _3.MigratePoolContractsProposal;
                fromAmino(object: _3.MigratePoolContractsProposalAmino): _3.MigratePoolContractsProposal;
                toAmino(message: _3.MigratePoolContractsProposal): _3.MigratePoolContractsProposalAmino;
                fromAminoMsg(object: _3.MigratePoolContractsProposalAminoMsg): _3.MigratePoolContractsProposal;
                toAminoMsg(message: _3.MigratePoolContractsProposal): _3.MigratePoolContractsProposalAminoMsg;
                fromProtoMsg(message: _3.MigratePoolContractsProposalProtoMsg): _3.MigratePoolContractsProposal;
                toProto(message: _3.MigratePoolContractsProposal): Uint8Array;
                toProtoMsg(message: _3.MigratePoolContractsProposal): _3.MigratePoolContractsProposalProtoMsg;
            };
            GenesisState: {
                typeUrl: string;
                encode(message: _2.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _2.GenesisState;
                fromPartial(object: Partial<_2.GenesisState>): _2.GenesisState;
                fromAmino(object: _2.GenesisStateAmino): _2.GenesisState;
                toAmino(message: _2.GenesisState): _2.GenesisStateAmino;
                fromAminoMsg(object: _2.GenesisStateAminoMsg): _2.GenesisState;
                toAminoMsg(message: _2.GenesisState): _2.GenesisStateAminoMsg;
                fromProtoMsg(message: _2.GenesisStateProtoMsg): _2.GenesisState;
                toProto(message: _2.GenesisState): Uint8Array;
                toProtoMsg(message: _2.GenesisState): _2.GenesisStateProtoMsg;
            };
        };
    }
    namespace downtimedetector {
        const v1beta1: {
            QueryClientImpl: typeof _302.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                recoveredSinceDowntimeOfLength(request: _16.RecoveredSinceDowntimeOfLengthRequest): Promise<_16.RecoveredSinceDowntimeOfLengthResponse>;
            };
            LCDQueryClient: typeof _283.LCDQueryClient;
            RecoveredSinceDowntimeOfLengthRequest: {
                typeUrl: string;
                encode(message: _16.RecoveredSinceDowntimeOfLengthRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _16.RecoveredSinceDowntimeOfLengthRequest;
                fromPartial(object: Partial<_16.RecoveredSinceDowntimeOfLengthRequest>): _16.RecoveredSinceDowntimeOfLengthRequest;
                fromAmino(object: _16.RecoveredSinceDowntimeOfLengthRequestAmino): _16.RecoveredSinceDowntimeOfLengthRequest;
                toAmino(message: _16.RecoveredSinceDowntimeOfLengthRequest): _16.RecoveredSinceDowntimeOfLengthRequestAmino;
                fromAminoMsg(object: _16.RecoveredSinceDowntimeOfLengthRequestAminoMsg): _16.RecoveredSinceDowntimeOfLengthRequest;
                toAminoMsg(message: _16.RecoveredSinceDowntimeOfLengthRequest): _16.RecoveredSinceDowntimeOfLengthRequestAminoMsg;
                fromProtoMsg(message: _16.RecoveredSinceDowntimeOfLengthRequestProtoMsg): _16.RecoveredSinceDowntimeOfLengthRequest;
                toProto(message: _16.RecoveredSinceDowntimeOfLengthRequest): Uint8Array;
                toProtoMsg(message: _16.RecoveredSinceDowntimeOfLengthRequest): _16.RecoveredSinceDowntimeOfLengthRequestProtoMsg;
            };
            RecoveredSinceDowntimeOfLengthResponse: {
                typeUrl: string;
                encode(message: _16.RecoveredSinceDowntimeOfLengthResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _16.RecoveredSinceDowntimeOfLengthResponse;
                fromPartial(object: Partial<_16.RecoveredSinceDowntimeOfLengthResponse>): _16.RecoveredSinceDowntimeOfLengthResponse;
                fromAmino(object: _16.RecoveredSinceDowntimeOfLengthResponseAmino): _16.RecoveredSinceDowntimeOfLengthResponse;
                toAmino(message: _16.RecoveredSinceDowntimeOfLengthResponse): _16.RecoveredSinceDowntimeOfLengthResponseAmino;
                fromAminoMsg(object: _16.RecoveredSinceDowntimeOfLengthResponseAminoMsg): _16.RecoveredSinceDowntimeOfLengthResponse;
                toAminoMsg(message: _16.RecoveredSinceDowntimeOfLengthResponse): _16.RecoveredSinceDowntimeOfLengthResponseAminoMsg;
                fromProtoMsg(message: _16.RecoveredSinceDowntimeOfLengthResponseProtoMsg): _16.RecoveredSinceDowntimeOfLengthResponse;
                toProto(message: _16.RecoveredSinceDowntimeOfLengthResponse): Uint8Array;
                toProtoMsg(message: _16.RecoveredSinceDowntimeOfLengthResponse): _16.RecoveredSinceDowntimeOfLengthResponseProtoMsg;
            };
            GenesisDowntimeEntry: {
                typeUrl: string;
                encode(message: _15.GenesisDowntimeEntry, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _15.GenesisDowntimeEntry;
                fromPartial(object: Partial<_15.GenesisDowntimeEntry>): _15.GenesisDowntimeEntry;
                fromAmino(object: _15.GenesisDowntimeEntryAmino): _15.GenesisDowntimeEntry;
                toAmino(message: _15.GenesisDowntimeEntry): _15.GenesisDowntimeEntryAmino;
                fromAminoMsg(object: _15.GenesisDowntimeEntryAminoMsg): _15.GenesisDowntimeEntry;
                toAminoMsg(message: _15.GenesisDowntimeEntry): _15.GenesisDowntimeEntryAminoMsg;
                fromProtoMsg(message: _15.GenesisDowntimeEntryProtoMsg): _15.GenesisDowntimeEntry;
                toProto(message: _15.GenesisDowntimeEntry): Uint8Array;
                toProtoMsg(message: _15.GenesisDowntimeEntry): _15.GenesisDowntimeEntryProtoMsg;
            };
            GenesisState: {
                typeUrl: string;
                encode(message: _15.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _15.GenesisState;
                fromPartial(object: Partial<_15.GenesisState>): _15.GenesisState;
                fromAmino(object: _15.GenesisStateAmino): _15.GenesisState;
                toAmino(message: _15.GenesisState): _15.GenesisStateAmino;
                fromAminoMsg(object: _15.GenesisStateAminoMsg): _15.GenesisState;
                toAminoMsg(message: _15.GenesisState): _15.GenesisStateAminoMsg;
                fromProtoMsg(message: _15.GenesisStateProtoMsg): _15.GenesisState;
                toProto(message: _15.GenesisState): Uint8Array;
                toProtoMsg(message: _15.GenesisState): _15.GenesisStateProtoMsg;
            };
            downtimeFromJSON(object: any): _14.Downtime;
            downtimeToJSON(object: _14.Downtime): string;
            Downtime: typeof _14.Downtime;
            DowntimeSDKType: typeof _14.Downtime;
            DowntimeAmino: typeof _14.Downtime;
        };
    }
    namespace epochs {
        const v1beta1: {
            QueryClientImpl: typeof _303.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                epochInfos(request?: _18.QueryEpochsInfoRequest): Promise<_18.QueryEpochsInfoResponse>;
                currentEpoch(request: _18.QueryCurrentEpochRequest): Promise<_18.QueryCurrentEpochResponse>;
            };
            LCDQueryClient: typeof _284.LCDQueryClient;
            QueryEpochsInfoRequest: {
                typeUrl: string;
                encode(_: _18.QueryEpochsInfoRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _18.QueryEpochsInfoRequest;
                fromPartial(_: Partial<_18.QueryEpochsInfoRequest>): _18.QueryEpochsInfoRequest;
                fromAmino(_: _18.QueryEpochsInfoRequestAmino): _18.QueryEpochsInfoRequest;
                toAmino(_: _18.QueryEpochsInfoRequest): _18.QueryEpochsInfoRequestAmino;
                fromAminoMsg(object: _18.QueryEpochsInfoRequestAminoMsg): _18.QueryEpochsInfoRequest;
                toAminoMsg(message: _18.QueryEpochsInfoRequest): _18.QueryEpochsInfoRequestAminoMsg;
                fromProtoMsg(message: _18.QueryEpochsInfoRequestProtoMsg): _18.QueryEpochsInfoRequest;
                toProto(message: _18.QueryEpochsInfoRequest): Uint8Array;
                toProtoMsg(message: _18.QueryEpochsInfoRequest): _18.QueryEpochsInfoRequestProtoMsg;
            };
            QueryEpochsInfoResponse: {
                typeUrl: string;
                encode(message: _18.QueryEpochsInfoResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _18.QueryEpochsInfoResponse;
                fromPartial(object: Partial<_18.QueryEpochsInfoResponse>): _18.QueryEpochsInfoResponse;
                fromAmino(object: _18.QueryEpochsInfoResponseAmino): _18.QueryEpochsInfoResponse;
                toAmino(message: _18.QueryEpochsInfoResponse): _18.QueryEpochsInfoResponseAmino;
                fromAminoMsg(object: _18.QueryEpochsInfoResponseAminoMsg): _18.QueryEpochsInfoResponse;
                toAminoMsg(message: _18.QueryEpochsInfoResponse): _18.QueryEpochsInfoResponseAminoMsg;
                fromProtoMsg(message: _18.QueryEpochsInfoResponseProtoMsg): _18.QueryEpochsInfoResponse;
                toProto(message: _18.QueryEpochsInfoResponse): Uint8Array;
                toProtoMsg(message: _18.QueryEpochsInfoResponse): _18.QueryEpochsInfoResponseProtoMsg;
            };
            QueryCurrentEpochRequest: {
                typeUrl: string;
                encode(message: _18.QueryCurrentEpochRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _18.QueryCurrentEpochRequest;
                fromPartial(object: Partial<_18.QueryCurrentEpochRequest>): _18.QueryCurrentEpochRequest;
                fromAmino(object: _18.QueryCurrentEpochRequestAmino): _18.QueryCurrentEpochRequest;
                toAmino(message: _18.QueryCurrentEpochRequest): _18.QueryCurrentEpochRequestAmino;
                fromAminoMsg(object: _18.QueryCurrentEpochRequestAminoMsg): _18.QueryCurrentEpochRequest;
                toAminoMsg(message: _18.QueryCurrentEpochRequest): _18.QueryCurrentEpochRequestAminoMsg;
                fromProtoMsg(message: _18.QueryCurrentEpochRequestProtoMsg): _18.QueryCurrentEpochRequest;
                toProto(message: _18.QueryCurrentEpochRequest): Uint8Array;
                toProtoMsg(message: _18.QueryCurrentEpochRequest): _18.QueryCurrentEpochRequestProtoMsg;
            };
            QueryCurrentEpochResponse: {
                typeUrl: string;
                encode(message: _18.QueryCurrentEpochResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _18.QueryCurrentEpochResponse;
                fromPartial(object: Partial<_18.QueryCurrentEpochResponse>): _18.QueryCurrentEpochResponse;
                fromAmino(object: _18.QueryCurrentEpochResponseAmino): _18.QueryCurrentEpochResponse;
                toAmino(message: _18.QueryCurrentEpochResponse): _18.QueryCurrentEpochResponseAmino;
                fromAminoMsg(object: _18.QueryCurrentEpochResponseAminoMsg): _18.QueryCurrentEpochResponse;
                toAminoMsg(message: _18.QueryCurrentEpochResponse): _18.QueryCurrentEpochResponseAminoMsg;
                fromProtoMsg(message: _18.QueryCurrentEpochResponseProtoMsg): _18.QueryCurrentEpochResponse;
                toProto(message: _18.QueryCurrentEpochResponse): Uint8Array;
                toProtoMsg(message: _18.QueryCurrentEpochResponse): _18.QueryCurrentEpochResponseProtoMsg;
            };
            EpochInfo: {
                typeUrl: string;
                encode(message: _17.EpochInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _17.EpochInfo;
                fromPartial(object: Partial<_17.EpochInfo>): _17.EpochInfo;
                fromAmino(object: _17.EpochInfoAmino): _17.EpochInfo;
                toAmino(message: _17.EpochInfo): _17.EpochInfoAmino;
                fromAminoMsg(object: _17.EpochInfoAminoMsg): _17.EpochInfo;
                toAminoMsg(message: _17.EpochInfo): _17.EpochInfoAminoMsg;
                fromProtoMsg(message: _17.EpochInfoProtoMsg): _17.EpochInfo;
                toProto(message: _17.EpochInfo): Uint8Array;
                toProtoMsg(message: _17.EpochInfo): _17.EpochInfoProtoMsg;
            };
            GenesisState: {
                typeUrl: string;
                encode(message: _17.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _17.GenesisState;
                fromPartial(object: Partial<_17.GenesisState>): _17.GenesisState;
                fromAmino(object: _17.GenesisStateAmino): _17.GenesisState;
                toAmino(message: _17.GenesisState): _17.GenesisStateAmino;
                fromAminoMsg(object: _17.GenesisStateAminoMsg): _17.GenesisState;
                toAminoMsg(message: _17.GenesisState): _17.GenesisStateAminoMsg;
                fromProtoMsg(message: _17.GenesisStateProtoMsg): _17.GenesisState;
                toProto(message: _17.GenesisState): Uint8Array;
                toProtoMsg(message: _17.GenesisState): _17.GenesisStateProtoMsg;
            };
        };
    }
    namespace gamm {
        namespace poolmodels {
            namespace balancer {
                const v1beta1: {
                    MsgClientImpl: typeof _321.MsgClientImpl;
                    registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
                    load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
                    MessageComposer: {
                        encoded: {
                            createBalancerPool(value: _19.MsgCreateBalancerPool): {
                                typeUrl: string;
                                value: Uint8Array;
                            };
                        };
                        withTypeUrl: {
                            createBalancerPool(value: _19.MsgCreateBalancerPool): {
                                typeUrl: string;
                                value: _19.MsgCreateBalancerPool;
                            };
                        };
                        fromJSON: {
                            createBalancerPool(value: any): {
                                typeUrl: string;
                                value: _19.MsgCreateBalancerPool;
                            };
                        };
                        fromPartial: {
                            createBalancerPool(value: _19.MsgCreateBalancerPool): {
                                typeUrl: string;
                                value: _19.MsgCreateBalancerPool;
                            };
                        };
                    };
                    AminoConverter: {
                        "/osmosis.gamm.poolmodels.balancer.v1beta1.MsgCreateBalancerPool": {
                            aminoType: string;
                            toAmino: (message: _19.MsgCreateBalancerPool) => _19.MsgCreateBalancerPoolAmino;
                            fromAmino: (object: _19.MsgCreateBalancerPoolAmino) => _19.MsgCreateBalancerPool;
                        };
                    };
                    MsgCreateBalancerPool: {
                        typeUrl: string;
                        encode(message: _19.MsgCreateBalancerPool, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                        fromJSON(object: any): _19.MsgCreateBalancerPool;
                        fromPartial(object: Partial<_19.MsgCreateBalancerPool>): _19.MsgCreateBalancerPool;
                        fromAmino(object: _19.MsgCreateBalancerPoolAmino): _19.MsgCreateBalancerPool;
                        toAmino(message: _19.MsgCreateBalancerPool): _19.MsgCreateBalancerPoolAmino;
                        fromAminoMsg(object: _19.MsgCreateBalancerPoolAminoMsg): _19.MsgCreateBalancerPool;
                        toAminoMsg(message: _19.MsgCreateBalancerPool): _19.MsgCreateBalancerPoolAminoMsg;
                        fromProtoMsg(message: _19.MsgCreateBalancerPoolProtoMsg): _19.MsgCreateBalancerPool;
                        toProto(message: _19.MsgCreateBalancerPool): Uint8Array;
                        toProtoMsg(message: _19.MsgCreateBalancerPool): _19.MsgCreateBalancerPoolProtoMsg;
                    };
                    MsgCreateBalancerPoolResponse: {
                        typeUrl: string;
                        encode(message: _19.MsgCreateBalancerPoolResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                        fromJSON(object: any): _19.MsgCreateBalancerPoolResponse;
                        fromPartial(object: Partial<_19.MsgCreateBalancerPoolResponse>): _19.MsgCreateBalancerPoolResponse;
                        fromAmino(object: _19.MsgCreateBalancerPoolResponseAmino): _19.MsgCreateBalancerPoolResponse;
                        toAmino(message: _19.MsgCreateBalancerPoolResponse): _19.MsgCreateBalancerPoolResponseAmino;
                        fromAminoMsg(object: _19.MsgCreateBalancerPoolResponseAminoMsg): _19.MsgCreateBalancerPoolResponse;
                        toAminoMsg(message: _19.MsgCreateBalancerPoolResponse): _19.MsgCreateBalancerPoolResponseAminoMsg;
                        fromProtoMsg(message: _19.MsgCreateBalancerPoolResponseProtoMsg): _19.MsgCreateBalancerPoolResponse;
                        toProto(message: _19.MsgCreateBalancerPoolResponse): Uint8Array;
                        toProtoMsg(message: _19.MsgCreateBalancerPoolResponse): _19.MsgCreateBalancerPoolResponseProtoMsg;
                    };
                };
            }
            namespace stableswap {
                const v1beta1: {
                    MsgClientImpl: typeof _322.MsgClientImpl;
                    registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
                    load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
                    MessageComposer: {
                        encoded: {
                            createStableswapPool(value: _21.MsgCreateStableswapPool): {
                                typeUrl: string;
                                value: Uint8Array;
                            };
                            stableSwapAdjustScalingFactors(value: _21.MsgStableSwapAdjustScalingFactors): {
                                typeUrl: string;
                                value: Uint8Array;
                            };
                        };
                        withTypeUrl: {
                            createStableswapPool(value: _21.MsgCreateStableswapPool): {
                                typeUrl: string;
                                value: _21.MsgCreateStableswapPool;
                            };
                            stableSwapAdjustScalingFactors(value: _21.MsgStableSwapAdjustScalingFactors): {
                                typeUrl: string;
                                value: _21.MsgStableSwapAdjustScalingFactors;
                            };
                        };
                        fromJSON: {
                            createStableswapPool(value: any): {
                                typeUrl: string;
                                value: _21.MsgCreateStableswapPool;
                            };
                            stableSwapAdjustScalingFactors(value: any): {
                                typeUrl: string;
                                value: _21.MsgStableSwapAdjustScalingFactors;
                            };
                        };
                        fromPartial: {
                            createStableswapPool(value: _21.MsgCreateStableswapPool): {
                                typeUrl: string;
                                value: _21.MsgCreateStableswapPool;
                            };
                            stableSwapAdjustScalingFactors(value: _21.MsgStableSwapAdjustScalingFactors): {
                                typeUrl: string;
                                value: _21.MsgStableSwapAdjustScalingFactors;
                            };
                        };
                    };
                    AminoConverter: {
                        "/osmosis.gamm.poolmodels.stableswap.v1beta1.MsgCreateStableswapPool": {
                            aminoType: string;
                            toAmino: (message: _21.MsgCreateStableswapPool) => _21.MsgCreateStableswapPoolAmino;
                            fromAmino: (object: _21.MsgCreateStableswapPoolAmino) => _21.MsgCreateStableswapPool;
                        };
                        "/osmosis.gamm.poolmodels.stableswap.v1beta1.MsgStableSwapAdjustScalingFactors": {
                            aminoType: string;
                            toAmino: (message: _21.MsgStableSwapAdjustScalingFactors) => _21.MsgStableSwapAdjustScalingFactorsAmino;
                            fromAmino: (object: _21.MsgStableSwapAdjustScalingFactorsAmino) => _21.MsgStableSwapAdjustScalingFactors;
                        };
                    };
                    MsgCreateStableswapPool: {
                        typeUrl: string;
                        encode(message: _21.MsgCreateStableswapPool, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                        fromJSON(object: any): _21.MsgCreateStableswapPool;
                        fromPartial(object: Partial<_21.MsgCreateStableswapPool>): _21.MsgCreateStableswapPool;
                        fromAmino(object: _21.MsgCreateStableswapPoolAmino): _21.MsgCreateStableswapPool;
                        toAmino(message: _21.MsgCreateStableswapPool): _21.MsgCreateStableswapPoolAmino;
                        fromAminoMsg(object: _21.MsgCreateStableswapPoolAminoMsg): _21.MsgCreateStableswapPool;
                        toAminoMsg(message: _21.MsgCreateStableswapPool): _21.MsgCreateStableswapPoolAminoMsg;
                        fromProtoMsg(message: _21.MsgCreateStableswapPoolProtoMsg): _21.MsgCreateStableswapPool;
                        toProto(message: _21.MsgCreateStableswapPool): Uint8Array;
                        toProtoMsg(message: _21.MsgCreateStableswapPool): _21.MsgCreateStableswapPoolProtoMsg;
                    };
                    MsgCreateStableswapPoolResponse: {
                        typeUrl: string;
                        encode(message: _21.MsgCreateStableswapPoolResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                        fromJSON(object: any): _21.MsgCreateStableswapPoolResponse;
                        fromPartial(object: Partial<_21.MsgCreateStableswapPoolResponse>): _21.MsgCreateStableswapPoolResponse;
                        fromAmino(object: _21.MsgCreateStableswapPoolResponseAmino): _21.MsgCreateStableswapPoolResponse;
                        toAmino(message: _21.MsgCreateStableswapPoolResponse): _21.MsgCreateStableswapPoolResponseAmino;
                        fromAminoMsg(object: _21.MsgCreateStableswapPoolResponseAminoMsg): _21.MsgCreateStableswapPoolResponse;
                        toAminoMsg(message: _21.MsgCreateStableswapPoolResponse): _21.MsgCreateStableswapPoolResponseAminoMsg;
                        fromProtoMsg(message: _21.MsgCreateStableswapPoolResponseProtoMsg): _21.MsgCreateStableswapPoolResponse;
                        toProto(message: _21.MsgCreateStableswapPoolResponse): Uint8Array;
                        toProtoMsg(message: _21.MsgCreateStableswapPoolResponse): _21.MsgCreateStableswapPoolResponseProtoMsg;
                    };
                    MsgStableSwapAdjustScalingFactors: {
                        typeUrl: string;
                        encode(message: _21.MsgStableSwapAdjustScalingFactors, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                        fromJSON(object: any): _21.MsgStableSwapAdjustScalingFactors;
                        fromPartial(object: Partial<_21.MsgStableSwapAdjustScalingFactors>): _21.MsgStableSwapAdjustScalingFactors;
                        fromAmino(object: _21.MsgStableSwapAdjustScalingFactorsAmino): _21.MsgStableSwapAdjustScalingFactors;
                        toAmino(message: _21.MsgStableSwapAdjustScalingFactors): _21.MsgStableSwapAdjustScalingFactorsAmino;
                        fromAminoMsg(object: _21.MsgStableSwapAdjustScalingFactorsAminoMsg): _21.MsgStableSwapAdjustScalingFactors;
                        toAminoMsg(message: _21.MsgStableSwapAdjustScalingFactors): _21.MsgStableSwapAdjustScalingFactorsAminoMsg;
                        fromProtoMsg(message: _21.MsgStableSwapAdjustScalingFactorsProtoMsg): _21.MsgStableSwapAdjustScalingFactors;
                        toProto(message: _21.MsgStableSwapAdjustScalingFactors): Uint8Array;
                        toProtoMsg(message: _21.MsgStableSwapAdjustScalingFactors): _21.MsgStableSwapAdjustScalingFactorsProtoMsg;
                    };
                    MsgStableSwapAdjustScalingFactorsResponse: {
                        typeUrl: string;
                        encode(_: _21.MsgStableSwapAdjustScalingFactorsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                        fromJSON(_: any): _21.MsgStableSwapAdjustScalingFactorsResponse;
                        fromPartial(_: Partial<_21.MsgStableSwapAdjustScalingFactorsResponse>): _21.MsgStableSwapAdjustScalingFactorsResponse;
                        fromAmino(_: _21.MsgStableSwapAdjustScalingFactorsResponseAmino): _21.MsgStableSwapAdjustScalingFactorsResponse;
                        toAmino(_: _21.MsgStableSwapAdjustScalingFactorsResponse): _21.MsgStableSwapAdjustScalingFactorsResponseAmino;
                        fromAminoMsg(object: _21.MsgStableSwapAdjustScalingFactorsResponseAminoMsg): _21.MsgStableSwapAdjustScalingFactorsResponse;
                        toAminoMsg(message: _21.MsgStableSwapAdjustScalingFactorsResponse): _21.MsgStableSwapAdjustScalingFactorsResponseAminoMsg;
                        fromProtoMsg(message: _21.MsgStableSwapAdjustScalingFactorsResponseProtoMsg): _21.MsgStableSwapAdjustScalingFactorsResponse;
                        toProto(message: _21.MsgStableSwapAdjustScalingFactorsResponse): Uint8Array;
                        toProtoMsg(message: _21.MsgStableSwapAdjustScalingFactorsResponse): _21.MsgStableSwapAdjustScalingFactorsResponseProtoMsg;
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
            }
        }
        const v1beta1: {
            MsgClientImpl: typeof _323.MsgClientImpl;
            QueryClientImpl: typeof _304.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                pools(request?: _25.QueryPoolsRequest): Promise<_25.QueryPoolsResponse>;
                numPools(request?: _25.QueryNumPoolsRequest): Promise<_25.QueryNumPoolsResponse>;
                totalLiquidity(request?: _25.QueryTotalLiquidityRequest): Promise<_25.QueryTotalLiquidityResponse>;
                poolsWithFilter(request: _25.QueryPoolsWithFilterRequest): Promise<_25.QueryPoolsWithFilterResponse>;
                pool(request: _25.QueryPoolRequest): Promise<_25.QueryPoolResponse>;
                poolType(request: _25.QueryPoolTypeRequest): Promise<_25.QueryPoolTypeResponse>;
                calcJoinPoolNoSwapShares(request: _25.QueryCalcJoinPoolNoSwapSharesRequest): Promise<_25.QueryCalcJoinPoolNoSwapSharesResponse>;
                calcJoinPoolShares(request: _25.QueryCalcJoinPoolSharesRequest): Promise<_25.QueryCalcJoinPoolSharesResponse>;
                calcExitPoolCoinsFromShares(request: _25.QueryCalcExitPoolCoinsFromSharesRequest): Promise<_25.QueryCalcExitPoolCoinsFromSharesResponse>;
                poolParams(request: _25.QueryPoolParamsRequest): Promise<_25.QueryPoolParamsResponse>;
                totalPoolLiquidity(request: _25.QueryTotalPoolLiquidityRequest): Promise<_25.QueryTotalPoolLiquidityResponse>;
                totalShares(request: _25.QueryTotalSharesRequest): Promise<_25.QueryTotalSharesResponse>;
                spotPrice(request: _25.QuerySpotPriceRequest): Promise<_25.QuerySpotPriceResponse>;
                estimateSwapExactAmountIn(request: _25.QuerySwapExactAmountInRequest): Promise<_25.QuerySwapExactAmountInResponse>;
                estimateSwapExactAmountOut(request: _25.QuerySwapExactAmountOutRequest): Promise<_25.QuerySwapExactAmountOutResponse>;
                concentratedPoolIdLinkFromCFMM(request: _25.QueryConcentratedPoolIdLinkFromCFMMRequest): Promise<_25.QueryConcentratedPoolIdLinkFromCFMMResponse>;
                cFMMConcentratedPoolLinks(request?: _25.QueryCFMMConcentratedPoolLinksRequest): Promise<_25.QueryCFMMConcentratedPoolLinksResponse>;
            };
            LCDQueryClient: typeof _285.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    joinPool(value: _27.MsgJoinPool): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    exitPool(value: _27.MsgExitPool): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    swapExactAmountIn(value: _27.MsgSwapExactAmountIn): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    swapExactAmountOut(value: _27.MsgSwapExactAmountOut): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    joinSwapExternAmountIn(value: _27.MsgJoinSwapExternAmountIn): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    joinSwapShareAmountOut(value: _27.MsgJoinSwapShareAmountOut): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    exitSwapExternAmountOut(value: _27.MsgExitSwapExternAmountOut): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    exitSwapShareAmountIn(value: _27.MsgExitSwapShareAmountIn): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    joinPool(value: _27.MsgJoinPool): {
                        typeUrl: string;
                        value: _27.MsgJoinPool;
                    };
                    exitPool(value: _27.MsgExitPool): {
                        typeUrl: string;
                        value: _27.MsgExitPool;
                    };
                    swapExactAmountIn(value: _27.MsgSwapExactAmountIn): {
                        typeUrl: string;
                        value: _27.MsgSwapExactAmountIn;
                    };
                    swapExactAmountOut(value: _27.MsgSwapExactAmountOut): {
                        typeUrl: string;
                        value: _27.MsgSwapExactAmountOut;
                    };
                    joinSwapExternAmountIn(value: _27.MsgJoinSwapExternAmountIn): {
                        typeUrl: string;
                        value: _27.MsgJoinSwapExternAmountIn;
                    };
                    joinSwapShareAmountOut(value: _27.MsgJoinSwapShareAmountOut): {
                        typeUrl: string;
                        value: _27.MsgJoinSwapShareAmountOut;
                    };
                    exitSwapExternAmountOut(value: _27.MsgExitSwapExternAmountOut): {
                        typeUrl: string;
                        value: _27.MsgExitSwapExternAmountOut;
                    };
                    exitSwapShareAmountIn(value: _27.MsgExitSwapShareAmountIn): {
                        typeUrl: string;
                        value: _27.MsgExitSwapShareAmountIn;
                    };
                };
                fromJSON: {
                    joinPool(value: any): {
                        typeUrl: string;
                        value: _27.MsgJoinPool;
                    };
                    exitPool(value: any): {
                        typeUrl: string;
                        value: _27.MsgExitPool;
                    };
                    swapExactAmountIn(value: any): {
                        typeUrl: string;
                        value: _27.MsgSwapExactAmountIn;
                    };
                    swapExactAmountOut(value: any): {
                        typeUrl: string;
                        value: _27.MsgSwapExactAmountOut;
                    };
                    joinSwapExternAmountIn(value: any): {
                        typeUrl: string;
                        value: _27.MsgJoinSwapExternAmountIn;
                    };
                    joinSwapShareAmountOut(value: any): {
                        typeUrl: string;
                        value: _27.MsgJoinSwapShareAmountOut;
                    };
                    exitSwapExternAmountOut(value: any): {
                        typeUrl: string;
                        value: _27.MsgExitSwapExternAmountOut;
                    };
                    exitSwapShareAmountIn(value: any): {
                        typeUrl: string;
                        value: _27.MsgExitSwapShareAmountIn;
                    };
                };
                fromPartial: {
                    joinPool(value: _27.MsgJoinPool): {
                        typeUrl: string;
                        value: _27.MsgJoinPool;
                    };
                    exitPool(value: _27.MsgExitPool): {
                        typeUrl: string;
                        value: _27.MsgExitPool;
                    };
                    swapExactAmountIn(value: _27.MsgSwapExactAmountIn): {
                        typeUrl: string;
                        value: _27.MsgSwapExactAmountIn;
                    };
                    swapExactAmountOut(value: _27.MsgSwapExactAmountOut): {
                        typeUrl: string;
                        value: _27.MsgSwapExactAmountOut;
                    };
                    joinSwapExternAmountIn(value: _27.MsgJoinSwapExternAmountIn): {
                        typeUrl: string;
                        value: _27.MsgJoinSwapExternAmountIn;
                    };
                    joinSwapShareAmountOut(value: _27.MsgJoinSwapShareAmountOut): {
                        typeUrl: string;
                        value: _27.MsgJoinSwapShareAmountOut;
                    };
                    exitSwapExternAmountOut(value: _27.MsgExitSwapExternAmountOut): {
                        typeUrl: string;
                        value: _27.MsgExitSwapExternAmountOut;
                    };
                    exitSwapShareAmountIn(value: _27.MsgExitSwapShareAmountIn): {
                        typeUrl: string;
                        value: _27.MsgExitSwapShareAmountIn;
                    };
                };
            };
            AminoConverter: {
                "/osmosis.gamm.v1beta1.MsgJoinPool": {
                    aminoType: string;
                    toAmino: (message: _27.MsgJoinPool) => _27.MsgJoinPoolAmino;
                    fromAmino: (object: _27.MsgJoinPoolAmino) => _27.MsgJoinPool;
                };
                "/osmosis.gamm.v1beta1.MsgExitPool": {
                    aminoType: string;
                    toAmino: (message: _27.MsgExitPool) => _27.MsgExitPoolAmino;
                    fromAmino: (object: _27.MsgExitPoolAmino) => _27.MsgExitPool;
                };
                "/osmosis.gamm.v1beta1.MsgSwapExactAmountIn": {
                    aminoType: string;
                    toAmino: (message: _27.MsgSwapExactAmountIn) => _27.MsgSwapExactAmountInAmino;
                    fromAmino: (object: _27.MsgSwapExactAmountInAmino) => _27.MsgSwapExactAmountIn;
                };
                "/osmosis.gamm.v1beta1.MsgSwapExactAmountOut": {
                    aminoType: string;
                    toAmino: (message: _27.MsgSwapExactAmountOut) => _27.MsgSwapExactAmountOutAmino;
                    fromAmino: (object: _27.MsgSwapExactAmountOutAmino) => _27.MsgSwapExactAmountOut;
                };
                "/osmosis.gamm.v1beta1.MsgJoinSwapExternAmountIn": {
                    aminoType: string;
                    toAmino: (message: _27.MsgJoinSwapExternAmountIn) => _27.MsgJoinSwapExternAmountInAmino;
                    fromAmino: (object: _27.MsgJoinSwapExternAmountInAmino) => _27.MsgJoinSwapExternAmountIn;
                };
                "/osmosis.gamm.v1beta1.MsgJoinSwapShareAmountOut": {
                    aminoType: string;
                    toAmino: (message: _27.MsgJoinSwapShareAmountOut) => _27.MsgJoinSwapShareAmountOutAmino;
                    fromAmino: (object: _27.MsgJoinSwapShareAmountOutAmino) => _27.MsgJoinSwapShareAmountOut;
                };
                "/osmosis.gamm.v1beta1.MsgExitSwapExternAmountOut": {
                    aminoType: string;
                    toAmino: (message: _27.MsgExitSwapExternAmountOut) => _27.MsgExitSwapExternAmountOutAmino;
                    fromAmino: (object: _27.MsgExitSwapExternAmountOutAmino) => _27.MsgExitSwapExternAmountOut;
                };
                "/osmosis.gamm.v1beta1.MsgExitSwapShareAmountIn": {
                    aminoType: string;
                    toAmino: (message: _27.MsgExitSwapShareAmountIn) => _27.MsgExitSwapShareAmountInAmino;
                    fromAmino: (object: _27.MsgExitSwapShareAmountInAmino) => _27.MsgExitSwapShareAmountIn;
                };
            };
            MsgJoinPool: {
                typeUrl: string;
                encode(message: _27.MsgJoinPool, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _27.MsgJoinPool;
                fromPartial(object: Partial<_27.MsgJoinPool>): _27.MsgJoinPool;
                fromAmino(object: _27.MsgJoinPoolAmino): _27.MsgJoinPool;
                toAmino(message: _27.MsgJoinPool): _27.MsgJoinPoolAmino;
                fromAminoMsg(object: _27.MsgJoinPoolAminoMsg): _27.MsgJoinPool;
                toAminoMsg(message: _27.MsgJoinPool): _27.MsgJoinPoolAminoMsg;
                fromProtoMsg(message: _27.MsgJoinPoolProtoMsg): _27.MsgJoinPool;
                toProto(message: _27.MsgJoinPool): Uint8Array;
                toProtoMsg(message: _27.MsgJoinPool): _27.MsgJoinPoolProtoMsg;
            };
            MsgJoinPoolResponse: {
                typeUrl: string;
                encode(message: _27.MsgJoinPoolResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _27.MsgJoinPoolResponse;
                fromPartial(object: Partial<_27.MsgJoinPoolResponse>): _27.MsgJoinPoolResponse;
                fromAmino(object: _27.MsgJoinPoolResponseAmino): _27.MsgJoinPoolResponse;
                toAmino(message: _27.MsgJoinPoolResponse): _27.MsgJoinPoolResponseAmino;
                fromAminoMsg(object: _27.MsgJoinPoolResponseAminoMsg): _27.MsgJoinPoolResponse;
                toAminoMsg(message: _27.MsgJoinPoolResponse): _27.MsgJoinPoolResponseAminoMsg;
                fromProtoMsg(message: _27.MsgJoinPoolResponseProtoMsg): _27.MsgJoinPoolResponse;
                toProto(message: _27.MsgJoinPoolResponse): Uint8Array;
                toProtoMsg(message: _27.MsgJoinPoolResponse): _27.MsgJoinPoolResponseProtoMsg;
            };
            MsgExitPool: {
                typeUrl: string;
                encode(message: _27.MsgExitPool, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _27.MsgExitPool;
                fromPartial(object: Partial<_27.MsgExitPool>): _27.MsgExitPool;
                fromAmino(object: _27.MsgExitPoolAmino): _27.MsgExitPool;
                toAmino(message: _27.MsgExitPool): _27.MsgExitPoolAmino;
                fromAminoMsg(object: _27.MsgExitPoolAminoMsg): _27.MsgExitPool;
                toAminoMsg(message: _27.MsgExitPool): _27.MsgExitPoolAminoMsg;
                fromProtoMsg(message: _27.MsgExitPoolProtoMsg): _27.MsgExitPool;
                toProto(message: _27.MsgExitPool): Uint8Array;
                toProtoMsg(message: _27.MsgExitPool): _27.MsgExitPoolProtoMsg;
            };
            MsgExitPoolResponse: {
                typeUrl: string;
                encode(message: _27.MsgExitPoolResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _27.MsgExitPoolResponse;
                fromPartial(object: Partial<_27.MsgExitPoolResponse>): _27.MsgExitPoolResponse;
                fromAmino(object: _27.MsgExitPoolResponseAmino): _27.MsgExitPoolResponse;
                toAmino(message: _27.MsgExitPoolResponse): _27.MsgExitPoolResponseAmino;
                fromAminoMsg(object: _27.MsgExitPoolResponseAminoMsg): _27.MsgExitPoolResponse;
                toAminoMsg(message: _27.MsgExitPoolResponse): _27.MsgExitPoolResponseAminoMsg;
                fromProtoMsg(message: _27.MsgExitPoolResponseProtoMsg): _27.MsgExitPoolResponse;
                toProto(message: _27.MsgExitPoolResponse): Uint8Array;
                toProtoMsg(message: _27.MsgExitPoolResponse): _27.MsgExitPoolResponseProtoMsg;
            };
            MsgSwapExactAmountIn: {
                typeUrl: string;
                encode(message: _27.MsgSwapExactAmountIn, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _27.MsgSwapExactAmountIn;
                fromPartial(object: Partial<_27.MsgSwapExactAmountIn>): _27.MsgSwapExactAmountIn;
                fromAmino(object: _27.MsgSwapExactAmountInAmino): _27.MsgSwapExactAmountIn;
                toAmino(message: _27.MsgSwapExactAmountIn): _27.MsgSwapExactAmountInAmino;
                fromAminoMsg(object: _27.MsgSwapExactAmountInAminoMsg): _27.MsgSwapExactAmountIn;
                toAminoMsg(message: _27.MsgSwapExactAmountIn): _27.MsgSwapExactAmountInAminoMsg;
                fromProtoMsg(message: _27.MsgSwapExactAmountInProtoMsg): _27.MsgSwapExactAmountIn;
                toProto(message: _27.MsgSwapExactAmountIn): Uint8Array;
                toProtoMsg(message: _27.MsgSwapExactAmountIn): _27.MsgSwapExactAmountInProtoMsg;
            };
            MsgSwapExactAmountInResponse: {
                typeUrl: string;
                encode(message: _27.MsgSwapExactAmountInResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _27.MsgSwapExactAmountInResponse;
                fromPartial(object: Partial<_27.MsgSwapExactAmountInResponse>): _27.MsgSwapExactAmountInResponse;
                fromAmino(object: _27.MsgSwapExactAmountInResponseAmino): _27.MsgSwapExactAmountInResponse;
                toAmino(message: _27.MsgSwapExactAmountInResponse): _27.MsgSwapExactAmountInResponseAmino;
                fromAminoMsg(object: _27.MsgSwapExactAmountInResponseAminoMsg): _27.MsgSwapExactAmountInResponse;
                toAminoMsg(message: _27.MsgSwapExactAmountInResponse): _27.MsgSwapExactAmountInResponseAminoMsg;
                fromProtoMsg(message: _27.MsgSwapExactAmountInResponseProtoMsg): _27.MsgSwapExactAmountInResponse;
                toProto(message: _27.MsgSwapExactAmountInResponse): Uint8Array;
                toProtoMsg(message: _27.MsgSwapExactAmountInResponse): _27.MsgSwapExactAmountInResponseProtoMsg;
            };
            MsgSwapExactAmountOut: {
                typeUrl: string;
                encode(message: _27.MsgSwapExactAmountOut, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _27.MsgSwapExactAmountOut;
                fromPartial(object: Partial<_27.MsgSwapExactAmountOut>): _27.MsgSwapExactAmountOut;
                fromAmino(object: _27.MsgSwapExactAmountOutAmino): _27.MsgSwapExactAmountOut;
                toAmino(message: _27.MsgSwapExactAmountOut): _27.MsgSwapExactAmountOutAmino;
                fromAminoMsg(object: _27.MsgSwapExactAmountOutAminoMsg): _27.MsgSwapExactAmountOut;
                toAminoMsg(message: _27.MsgSwapExactAmountOut): _27.MsgSwapExactAmountOutAminoMsg;
                fromProtoMsg(message: _27.MsgSwapExactAmountOutProtoMsg): _27.MsgSwapExactAmountOut;
                toProto(message: _27.MsgSwapExactAmountOut): Uint8Array;
                toProtoMsg(message: _27.MsgSwapExactAmountOut): _27.MsgSwapExactAmountOutProtoMsg;
            };
            MsgSwapExactAmountOutResponse: {
                typeUrl: string;
                encode(message: _27.MsgSwapExactAmountOutResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _27.MsgSwapExactAmountOutResponse;
                fromPartial(object: Partial<_27.MsgSwapExactAmountOutResponse>): _27.MsgSwapExactAmountOutResponse;
                fromAmino(object: _27.MsgSwapExactAmountOutResponseAmino): _27.MsgSwapExactAmountOutResponse;
                toAmino(message: _27.MsgSwapExactAmountOutResponse): _27.MsgSwapExactAmountOutResponseAmino;
                fromAminoMsg(object: _27.MsgSwapExactAmountOutResponseAminoMsg): _27.MsgSwapExactAmountOutResponse;
                toAminoMsg(message: _27.MsgSwapExactAmountOutResponse): _27.MsgSwapExactAmountOutResponseAminoMsg;
                fromProtoMsg(message: _27.MsgSwapExactAmountOutResponseProtoMsg): _27.MsgSwapExactAmountOutResponse;
                toProto(message: _27.MsgSwapExactAmountOutResponse): Uint8Array;
                toProtoMsg(message: _27.MsgSwapExactAmountOutResponse): _27.MsgSwapExactAmountOutResponseProtoMsg;
            };
            MsgJoinSwapExternAmountIn: {
                typeUrl: string;
                encode(message: _27.MsgJoinSwapExternAmountIn, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _27.MsgJoinSwapExternAmountIn;
                fromPartial(object: Partial<_27.MsgJoinSwapExternAmountIn>): _27.MsgJoinSwapExternAmountIn;
                fromAmino(object: _27.MsgJoinSwapExternAmountInAmino): _27.MsgJoinSwapExternAmountIn;
                toAmino(message: _27.MsgJoinSwapExternAmountIn): _27.MsgJoinSwapExternAmountInAmino;
                fromAminoMsg(object: _27.MsgJoinSwapExternAmountInAminoMsg): _27.MsgJoinSwapExternAmountIn;
                toAminoMsg(message: _27.MsgJoinSwapExternAmountIn): _27.MsgJoinSwapExternAmountInAminoMsg;
                fromProtoMsg(message: _27.MsgJoinSwapExternAmountInProtoMsg): _27.MsgJoinSwapExternAmountIn;
                toProto(message: _27.MsgJoinSwapExternAmountIn): Uint8Array;
                toProtoMsg(message: _27.MsgJoinSwapExternAmountIn): _27.MsgJoinSwapExternAmountInProtoMsg;
            };
            MsgJoinSwapExternAmountInResponse: {
                typeUrl: string;
                encode(message: _27.MsgJoinSwapExternAmountInResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _27.MsgJoinSwapExternAmountInResponse;
                fromPartial(object: Partial<_27.MsgJoinSwapExternAmountInResponse>): _27.MsgJoinSwapExternAmountInResponse;
                fromAmino(object: _27.MsgJoinSwapExternAmountInResponseAmino): _27.MsgJoinSwapExternAmountInResponse;
                toAmino(message: _27.MsgJoinSwapExternAmountInResponse): _27.MsgJoinSwapExternAmountInResponseAmino;
                fromAminoMsg(object: _27.MsgJoinSwapExternAmountInResponseAminoMsg): _27.MsgJoinSwapExternAmountInResponse;
                toAminoMsg(message: _27.MsgJoinSwapExternAmountInResponse): _27.MsgJoinSwapExternAmountInResponseAminoMsg;
                fromProtoMsg(message: _27.MsgJoinSwapExternAmountInResponseProtoMsg): _27.MsgJoinSwapExternAmountInResponse;
                toProto(message: _27.MsgJoinSwapExternAmountInResponse): Uint8Array;
                toProtoMsg(message: _27.MsgJoinSwapExternAmountInResponse): _27.MsgJoinSwapExternAmountInResponseProtoMsg;
            };
            MsgJoinSwapShareAmountOut: {
                typeUrl: string;
                encode(message: _27.MsgJoinSwapShareAmountOut, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _27.MsgJoinSwapShareAmountOut;
                fromPartial(object: Partial<_27.MsgJoinSwapShareAmountOut>): _27.MsgJoinSwapShareAmountOut;
                fromAmino(object: _27.MsgJoinSwapShareAmountOutAmino): _27.MsgJoinSwapShareAmountOut;
                toAmino(message: _27.MsgJoinSwapShareAmountOut): _27.MsgJoinSwapShareAmountOutAmino;
                fromAminoMsg(object: _27.MsgJoinSwapShareAmountOutAminoMsg): _27.MsgJoinSwapShareAmountOut;
                toAminoMsg(message: _27.MsgJoinSwapShareAmountOut): _27.MsgJoinSwapShareAmountOutAminoMsg;
                fromProtoMsg(message: _27.MsgJoinSwapShareAmountOutProtoMsg): _27.MsgJoinSwapShareAmountOut;
                toProto(message: _27.MsgJoinSwapShareAmountOut): Uint8Array;
                toProtoMsg(message: _27.MsgJoinSwapShareAmountOut): _27.MsgJoinSwapShareAmountOutProtoMsg;
            };
            MsgJoinSwapShareAmountOutResponse: {
                typeUrl: string;
                encode(message: _27.MsgJoinSwapShareAmountOutResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _27.MsgJoinSwapShareAmountOutResponse;
                fromPartial(object: Partial<_27.MsgJoinSwapShareAmountOutResponse>): _27.MsgJoinSwapShareAmountOutResponse;
                fromAmino(object: _27.MsgJoinSwapShareAmountOutResponseAmino): _27.MsgJoinSwapShareAmountOutResponse;
                toAmino(message: _27.MsgJoinSwapShareAmountOutResponse): _27.MsgJoinSwapShareAmountOutResponseAmino;
                fromAminoMsg(object: _27.MsgJoinSwapShareAmountOutResponseAminoMsg): _27.MsgJoinSwapShareAmountOutResponse;
                toAminoMsg(message: _27.MsgJoinSwapShareAmountOutResponse): _27.MsgJoinSwapShareAmountOutResponseAminoMsg;
                fromProtoMsg(message: _27.MsgJoinSwapShareAmountOutResponseProtoMsg): _27.MsgJoinSwapShareAmountOutResponse;
                toProto(message: _27.MsgJoinSwapShareAmountOutResponse): Uint8Array;
                toProtoMsg(message: _27.MsgJoinSwapShareAmountOutResponse): _27.MsgJoinSwapShareAmountOutResponseProtoMsg;
            };
            MsgExitSwapShareAmountIn: {
                typeUrl: string;
                encode(message: _27.MsgExitSwapShareAmountIn, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _27.MsgExitSwapShareAmountIn;
                fromPartial(object: Partial<_27.MsgExitSwapShareAmountIn>): _27.MsgExitSwapShareAmountIn;
                fromAmino(object: _27.MsgExitSwapShareAmountInAmino): _27.MsgExitSwapShareAmountIn;
                toAmino(message: _27.MsgExitSwapShareAmountIn): _27.MsgExitSwapShareAmountInAmino;
                fromAminoMsg(object: _27.MsgExitSwapShareAmountInAminoMsg): _27.MsgExitSwapShareAmountIn;
                toAminoMsg(message: _27.MsgExitSwapShareAmountIn): _27.MsgExitSwapShareAmountInAminoMsg;
                fromProtoMsg(message: _27.MsgExitSwapShareAmountInProtoMsg): _27.MsgExitSwapShareAmountIn;
                toProto(message: _27.MsgExitSwapShareAmountIn): Uint8Array;
                toProtoMsg(message: _27.MsgExitSwapShareAmountIn): _27.MsgExitSwapShareAmountInProtoMsg;
            };
            MsgExitSwapShareAmountInResponse: {
                typeUrl: string;
                encode(message: _27.MsgExitSwapShareAmountInResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _27.MsgExitSwapShareAmountInResponse;
                fromPartial(object: Partial<_27.MsgExitSwapShareAmountInResponse>): _27.MsgExitSwapShareAmountInResponse;
                fromAmino(object: _27.MsgExitSwapShareAmountInResponseAmino): _27.MsgExitSwapShareAmountInResponse;
                toAmino(message: _27.MsgExitSwapShareAmountInResponse): _27.MsgExitSwapShareAmountInResponseAmino;
                fromAminoMsg(object: _27.MsgExitSwapShareAmountInResponseAminoMsg): _27.MsgExitSwapShareAmountInResponse;
                toAminoMsg(message: _27.MsgExitSwapShareAmountInResponse): _27.MsgExitSwapShareAmountInResponseAminoMsg;
                fromProtoMsg(message: _27.MsgExitSwapShareAmountInResponseProtoMsg): _27.MsgExitSwapShareAmountInResponse;
                toProto(message: _27.MsgExitSwapShareAmountInResponse): Uint8Array;
                toProtoMsg(message: _27.MsgExitSwapShareAmountInResponse): _27.MsgExitSwapShareAmountInResponseProtoMsg;
            };
            MsgExitSwapExternAmountOut: {
                typeUrl: string;
                encode(message: _27.MsgExitSwapExternAmountOut, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _27.MsgExitSwapExternAmountOut;
                fromPartial(object: Partial<_27.MsgExitSwapExternAmountOut>): _27.MsgExitSwapExternAmountOut;
                fromAmino(object: _27.MsgExitSwapExternAmountOutAmino): _27.MsgExitSwapExternAmountOut;
                toAmino(message: _27.MsgExitSwapExternAmountOut): _27.MsgExitSwapExternAmountOutAmino;
                fromAminoMsg(object: _27.MsgExitSwapExternAmountOutAminoMsg): _27.MsgExitSwapExternAmountOut;
                toAminoMsg(message: _27.MsgExitSwapExternAmountOut): _27.MsgExitSwapExternAmountOutAminoMsg;
                fromProtoMsg(message: _27.MsgExitSwapExternAmountOutProtoMsg): _27.MsgExitSwapExternAmountOut;
                toProto(message: _27.MsgExitSwapExternAmountOut): Uint8Array;
                toProtoMsg(message: _27.MsgExitSwapExternAmountOut): _27.MsgExitSwapExternAmountOutProtoMsg;
            };
            MsgExitSwapExternAmountOutResponse: {
                typeUrl: string;
                encode(message: _27.MsgExitSwapExternAmountOutResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _27.MsgExitSwapExternAmountOutResponse;
                fromPartial(object: Partial<_27.MsgExitSwapExternAmountOutResponse>): _27.MsgExitSwapExternAmountOutResponse;
                fromAmino(object: _27.MsgExitSwapExternAmountOutResponseAmino): _27.MsgExitSwapExternAmountOutResponse;
                toAmino(message: _27.MsgExitSwapExternAmountOutResponse): _27.MsgExitSwapExternAmountOutResponseAmino;
                fromAminoMsg(object: _27.MsgExitSwapExternAmountOutResponseAminoMsg): _27.MsgExitSwapExternAmountOutResponse;
                toAminoMsg(message: _27.MsgExitSwapExternAmountOutResponse): _27.MsgExitSwapExternAmountOutResponseAminoMsg;
                fromProtoMsg(message: _27.MsgExitSwapExternAmountOutResponseProtoMsg): _27.MsgExitSwapExternAmountOutResponse;
                toProto(message: _27.MsgExitSwapExternAmountOutResponse): Uint8Array;
                toProtoMsg(message: _27.MsgExitSwapExternAmountOutResponse): _27.MsgExitSwapExternAmountOutResponseProtoMsg;
            };
            MigrationRecords: {
                typeUrl: string;
                encode(message: _26.MigrationRecords, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _26.MigrationRecords;
                fromPartial(object: Partial<_26.MigrationRecords>): _26.MigrationRecords;
                fromAmino(object: _26.MigrationRecordsAmino): _26.MigrationRecords;
                toAmino(message: _26.MigrationRecords): _26.MigrationRecordsAmino;
                fromAminoMsg(object: _26.MigrationRecordsAminoMsg): _26.MigrationRecords;
                toAminoMsg(message: _26.MigrationRecords): _26.MigrationRecordsAminoMsg;
                fromProtoMsg(message: _26.MigrationRecordsProtoMsg): _26.MigrationRecords;
                toProto(message: _26.MigrationRecords): Uint8Array;
                toProtoMsg(message: _26.MigrationRecords): _26.MigrationRecordsProtoMsg;
            };
            BalancerToConcentratedPoolLink: {
                typeUrl: string;
                encode(message: _26.BalancerToConcentratedPoolLink, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _26.BalancerToConcentratedPoolLink;
                fromPartial(object: Partial<_26.BalancerToConcentratedPoolLink>): _26.BalancerToConcentratedPoolLink;
                fromAmino(object: _26.BalancerToConcentratedPoolLinkAmino): _26.BalancerToConcentratedPoolLink;
                toAmino(message: _26.BalancerToConcentratedPoolLink): _26.BalancerToConcentratedPoolLinkAmino;
                fromAminoMsg(object: _26.BalancerToConcentratedPoolLinkAminoMsg): _26.BalancerToConcentratedPoolLink;
                toAminoMsg(message: _26.BalancerToConcentratedPoolLink): _26.BalancerToConcentratedPoolLinkAminoMsg;
                fromProtoMsg(message: _26.BalancerToConcentratedPoolLinkProtoMsg): _26.BalancerToConcentratedPoolLink;
                toProto(message: _26.BalancerToConcentratedPoolLink): Uint8Array;
                toProtoMsg(message: _26.BalancerToConcentratedPoolLink): _26.BalancerToConcentratedPoolLinkProtoMsg;
            };
            QueryPoolRequest: {
                typeUrl: string;
                encode(message: _25.QueryPoolRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _25.QueryPoolRequest;
                fromPartial(object: Partial<_25.QueryPoolRequest>): _25.QueryPoolRequest;
                fromAmino(object: _25.QueryPoolRequestAmino): _25.QueryPoolRequest;
                toAmino(message: _25.QueryPoolRequest): _25.QueryPoolRequestAmino;
                fromAminoMsg(object: _25.QueryPoolRequestAminoMsg): _25.QueryPoolRequest;
                toAminoMsg(message: _25.QueryPoolRequest): _25.QueryPoolRequestAminoMsg;
                fromProtoMsg(message: _25.QueryPoolRequestProtoMsg): _25.QueryPoolRequest;
                toProto(message: _25.QueryPoolRequest): Uint8Array;
                toProtoMsg(message: _25.QueryPoolRequest): _25.QueryPoolRequestProtoMsg;
            };
            QueryPoolResponse: {
                typeUrl: string;
                encode(message: _25.QueryPoolResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _25.QueryPoolResponse;
                fromPartial(object: Partial<_25.QueryPoolResponse>): _25.QueryPoolResponse;
                fromAmino(object: _25.QueryPoolResponseAmino): _25.QueryPoolResponse;
                toAmino(message: _25.QueryPoolResponse): _25.QueryPoolResponseAmino;
                fromAminoMsg(object: _25.QueryPoolResponseAminoMsg): _25.QueryPoolResponse;
                toAminoMsg(message: _25.QueryPoolResponse): _25.QueryPoolResponseAminoMsg;
                fromProtoMsg(message: _25.QueryPoolResponseProtoMsg): _25.QueryPoolResponse;
                toProto(message: _25.QueryPoolResponse): Uint8Array;
                toProtoMsg(message: _25.QueryPoolResponse): _25.QueryPoolResponseProtoMsg;
            };
            QueryPoolsRequest: {
                typeUrl: string;
                encode(message: _25.QueryPoolsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _25.QueryPoolsRequest;
                fromPartial(object: Partial<_25.QueryPoolsRequest>): _25.QueryPoolsRequest;
                fromAmino(object: _25.QueryPoolsRequestAmino): _25.QueryPoolsRequest;
                toAmino(message: _25.QueryPoolsRequest): _25.QueryPoolsRequestAmino;
                fromAminoMsg(object: _25.QueryPoolsRequestAminoMsg): _25.QueryPoolsRequest;
                toAminoMsg(message: _25.QueryPoolsRequest): _25.QueryPoolsRequestAminoMsg;
                fromProtoMsg(message: _25.QueryPoolsRequestProtoMsg): _25.QueryPoolsRequest;
                toProto(message: _25.QueryPoolsRequest): Uint8Array;
                toProtoMsg(message: _25.QueryPoolsRequest): _25.QueryPoolsRequestProtoMsg;
            };
            QueryPoolsResponse: {
                typeUrl: string;
                encode(message: _25.QueryPoolsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _25.QueryPoolsResponse;
                fromPartial(object: Partial<_25.QueryPoolsResponse>): _25.QueryPoolsResponse;
                fromAmino(object: _25.QueryPoolsResponseAmino): _25.QueryPoolsResponse;
                toAmino(message: _25.QueryPoolsResponse): _25.QueryPoolsResponseAmino;
                fromAminoMsg(object: _25.QueryPoolsResponseAminoMsg): _25.QueryPoolsResponse;
                toAminoMsg(message: _25.QueryPoolsResponse): _25.QueryPoolsResponseAminoMsg;
                fromProtoMsg(message: _25.QueryPoolsResponseProtoMsg): _25.QueryPoolsResponse;
                toProto(message: _25.QueryPoolsResponse): Uint8Array;
                toProtoMsg(message: _25.QueryPoolsResponse): _25.QueryPoolsResponseProtoMsg;
            };
            QueryNumPoolsRequest: {
                typeUrl: string;
                encode(_: _25.QueryNumPoolsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _25.QueryNumPoolsRequest;
                fromPartial(_: Partial<_25.QueryNumPoolsRequest>): _25.QueryNumPoolsRequest;
                fromAmino(_: _25.QueryNumPoolsRequestAmino): _25.QueryNumPoolsRequest;
                toAmino(_: _25.QueryNumPoolsRequest): _25.QueryNumPoolsRequestAmino;
                fromAminoMsg(object: _25.QueryNumPoolsRequestAminoMsg): _25.QueryNumPoolsRequest;
                toAminoMsg(message: _25.QueryNumPoolsRequest): _25.QueryNumPoolsRequestAminoMsg;
                fromProtoMsg(message: _25.QueryNumPoolsRequestProtoMsg): _25.QueryNumPoolsRequest;
                toProto(message: _25.QueryNumPoolsRequest): Uint8Array;
                toProtoMsg(message: _25.QueryNumPoolsRequest): _25.QueryNumPoolsRequestProtoMsg;
            };
            QueryNumPoolsResponse: {
                typeUrl: string;
                encode(message: _25.QueryNumPoolsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _25.QueryNumPoolsResponse;
                fromPartial(object: Partial<_25.QueryNumPoolsResponse>): _25.QueryNumPoolsResponse;
                fromAmino(object: _25.QueryNumPoolsResponseAmino): _25.QueryNumPoolsResponse;
                toAmino(message: _25.QueryNumPoolsResponse): _25.QueryNumPoolsResponseAmino;
                fromAminoMsg(object: _25.QueryNumPoolsResponseAminoMsg): _25.QueryNumPoolsResponse;
                toAminoMsg(message: _25.QueryNumPoolsResponse): _25.QueryNumPoolsResponseAminoMsg;
                fromProtoMsg(message: _25.QueryNumPoolsResponseProtoMsg): _25.QueryNumPoolsResponse;
                toProto(message: _25.QueryNumPoolsResponse): Uint8Array;
                toProtoMsg(message: _25.QueryNumPoolsResponse): _25.QueryNumPoolsResponseProtoMsg;
            };
            QueryPoolTypeRequest: {
                typeUrl: string;
                encode(message: _25.QueryPoolTypeRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _25.QueryPoolTypeRequest;
                fromPartial(object: Partial<_25.QueryPoolTypeRequest>): _25.QueryPoolTypeRequest;
                fromAmino(object: _25.QueryPoolTypeRequestAmino): _25.QueryPoolTypeRequest;
                toAmino(message: _25.QueryPoolTypeRequest): _25.QueryPoolTypeRequestAmino;
                fromAminoMsg(object: _25.QueryPoolTypeRequestAminoMsg): _25.QueryPoolTypeRequest;
                toAminoMsg(message: _25.QueryPoolTypeRequest): _25.QueryPoolTypeRequestAminoMsg;
                fromProtoMsg(message: _25.QueryPoolTypeRequestProtoMsg): _25.QueryPoolTypeRequest;
                toProto(message: _25.QueryPoolTypeRequest): Uint8Array;
                toProtoMsg(message: _25.QueryPoolTypeRequest): _25.QueryPoolTypeRequestProtoMsg;
            };
            QueryPoolTypeResponse: {
                typeUrl: string;
                encode(message: _25.QueryPoolTypeResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _25.QueryPoolTypeResponse;
                fromPartial(object: Partial<_25.QueryPoolTypeResponse>): _25.QueryPoolTypeResponse;
                fromAmino(object: _25.QueryPoolTypeResponseAmino): _25.QueryPoolTypeResponse;
                toAmino(message: _25.QueryPoolTypeResponse): _25.QueryPoolTypeResponseAmino;
                fromAminoMsg(object: _25.QueryPoolTypeResponseAminoMsg): _25.QueryPoolTypeResponse;
                toAminoMsg(message: _25.QueryPoolTypeResponse): _25.QueryPoolTypeResponseAminoMsg;
                fromProtoMsg(message: _25.QueryPoolTypeResponseProtoMsg): _25.QueryPoolTypeResponse;
                toProto(message: _25.QueryPoolTypeResponse): Uint8Array;
                toProtoMsg(message: _25.QueryPoolTypeResponse): _25.QueryPoolTypeResponseProtoMsg;
            };
            QueryCalcJoinPoolSharesRequest: {
                typeUrl: string;
                encode(message: _25.QueryCalcJoinPoolSharesRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _25.QueryCalcJoinPoolSharesRequest;
                fromPartial(object: Partial<_25.QueryCalcJoinPoolSharesRequest>): _25.QueryCalcJoinPoolSharesRequest;
                fromAmino(object: _25.QueryCalcJoinPoolSharesRequestAmino): _25.QueryCalcJoinPoolSharesRequest;
                toAmino(message: _25.QueryCalcJoinPoolSharesRequest): _25.QueryCalcJoinPoolSharesRequestAmino;
                fromAminoMsg(object: _25.QueryCalcJoinPoolSharesRequestAminoMsg): _25.QueryCalcJoinPoolSharesRequest;
                toAminoMsg(message: _25.QueryCalcJoinPoolSharesRequest): _25.QueryCalcJoinPoolSharesRequestAminoMsg;
                fromProtoMsg(message: _25.QueryCalcJoinPoolSharesRequestProtoMsg): _25.QueryCalcJoinPoolSharesRequest;
                toProto(message: _25.QueryCalcJoinPoolSharesRequest): Uint8Array;
                toProtoMsg(message: _25.QueryCalcJoinPoolSharesRequest): _25.QueryCalcJoinPoolSharesRequestProtoMsg;
            };
            QueryCalcJoinPoolSharesResponse: {
                typeUrl: string;
                encode(message: _25.QueryCalcJoinPoolSharesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _25.QueryCalcJoinPoolSharesResponse;
                fromPartial(object: Partial<_25.QueryCalcJoinPoolSharesResponse>): _25.QueryCalcJoinPoolSharesResponse;
                fromAmino(object: _25.QueryCalcJoinPoolSharesResponseAmino): _25.QueryCalcJoinPoolSharesResponse;
                toAmino(message: _25.QueryCalcJoinPoolSharesResponse): _25.QueryCalcJoinPoolSharesResponseAmino;
                fromAminoMsg(object: _25.QueryCalcJoinPoolSharesResponseAminoMsg): _25.QueryCalcJoinPoolSharesResponse;
                toAminoMsg(message: _25.QueryCalcJoinPoolSharesResponse): _25.QueryCalcJoinPoolSharesResponseAminoMsg;
                fromProtoMsg(message: _25.QueryCalcJoinPoolSharesResponseProtoMsg): _25.QueryCalcJoinPoolSharesResponse;
                toProto(message: _25.QueryCalcJoinPoolSharesResponse): Uint8Array;
                toProtoMsg(message: _25.QueryCalcJoinPoolSharesResponse): _25.QueryCalcJoinPoolSharesResponseProtoMsg;
            };
            QueryCalcExitPoolCoinsFromSharesRequest: {
                typeUrl: string;
                encode(message: _25.QueryCalcExitPoolCoinsFromSharesRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _25.QueryCalcExitPoolCoinsFromSharesRequest;
                fromPartial(object: Partial<_25.QueryCalcExitPoolCoinsFromSharesRequest>): _25.QueryCalcExitPoolCoinsFromSharesRequest;
                fromAmino(object: _25.QueryCalcExitPoolCoinsFromSharesRequestAmino): _25.QueryCalcExitPoolCoinsFromSharesRequest;
                toAmino(message: _25.QueryCalcExitPoolCoinsFromSharesRequest): _25.QueryCalcExitPoolCoinsFromSharesRequestAmino;
                fromAminoMsg(object: _25.QueryCalcExitPoolCoinsFromSharesRequestAminoMsg): _25.QueryCalcExitPoolCoinsFromSharesRequest;
                toAminoMsg(message: _25.QueryCalcExitPoolCoinsFromSharesRequest): _25.QueryCalcExitPoolCoinsFromSharesRequestAminoMsg;
                fromProtoMsg(message: _25.QueryCalcExitPoolCoinsFromSharesRequestProtoMsg): _25.QueryCalcExitPoolCoinsFromSharesRequest;
                toProto(message: _25.QueryCalcExitPoolCoinsFromSharesRequest): Uint8Array;
                toProtoMsg(message: _25.QueryCalcExitPoolCoinsFromSharesRequest): _25.QueryCalcExitPoolCoinsFromSharesRequestProtoMsg;
            };
            QueryCalcExitPoolCoinsFromSharesResponse: {
                typeUrl: string;
                encode(message: _25.QueryCalcExitPoolCoinsFromSharesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _25.QueryCalcExitPoolCoinsFromSharesResponse;
                fromPartial(object: Partial<_25.QueryCalcExitPoolCoinsFromSharesResponse>): _25.QueryCalcExitPoolCoinsFromSharesResponse;
                fromAmino(object: _25.QueryCalcExitPoolCoinsFromSharesResponseAmino): _25.QueryCalcExitPoolCoinsFromSharesResponse;
                toAmino(message: _25.QueryCalcExitPoolCoinsFromSharesResponse): _25.QueryCalcExitPoolCoinsFromSharesResponseAmino;
                fromAminoMsg(object: _25.QueryCalcExitPoolCoinsFromSharesResponseAminoMsg): _25.QueryCalcExitPoolCoinsFromSharesResponse;
                toAminoMsg(message: _25.QueryCalcExitPoolCoinsFromSharesResponse): _25.QueryCalcExitPoolCoinsFromSharesResponseAminoMsg;
                fromProtoMsg(message: _25.QueryCalcExitPoolCoinsFromSharesResponseProtoMsg): _25.QueryCalcExitPoolCoinsFromSharesResponse;
                toProto(message: _25.QueryCalcExitPoolCoinsFromSharesResponse): Uint8Array;
                toProtoMsg(message: _25.QueryCalcExitPoolCoinsFromSharesResponse): _25.QueryCalcExitPoolCoinsFromSharesResponseProtoMsg;
            };
            QueryPoolParamsRequest: {
                typeUrl: string;
                encode(message: _25.QueryPoolParamsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _25.QueryPoolParamsRequest;
                fromPartial(object: Partial<_25.QueryPoolParamsRequest>): _25.QueryPoolParamsRequest;
                fromAmino(object: _25.QueryPoolParamsRequestAmino): _25.QueryPoolParamsRequest;
                toAmino(message: _25.QueryPoolParamsRequest): _25.QueryPoolParamsRequestAmino;
                fromAminoMsg(object: _25.QueryPoolParamsRequestAminoMsg): _25.QueryPoolParamsRequest;
                toAminoMsg(message: _25.QueryPoolParamsRequest): _25.QueryPoolParamsRequestAminoMsg;
                fromProtoMsg(message: _25.QueryPoolParamsRequestProtoMsg): _25.QueryPoolParamsRequest;
                toProto(message: _25.QueryPoolParamsRequest): Uint8Array;
                toProtoMsg(message: _25.QueryPoolParamsRequest): _25.QueryPoolParamsRequestProtoMsg;
            };
            QueryPoolParamsResponse: {
                typeUrl: string;
                encode(message: _25.QueryPoolParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _25.QueryPoolParamsResponse;
                fromPartial(object: Partial<_25.QueryPoolParamsResponse>): _25.QueryPoolParamsResponse;
                fromAmino(object: _25.QueryPoolParamsResponseAmino): _25.QueryPoolParamsResponse;
                toAmino(message: _25.QueryPoolParamsResponse): _25.QueryPoolParamsResponseAmino;
                fromAminoMsg(object: _25.QueryPoolParamsResponseAminoMsg): _25.QueryPoolParamsResponse;
                toAminoMsg(message: _25.QueryPoolParamsResponse): _25.QueryPoolParamsResponseAminoMsg;
                fromProtoMsg(message: _25.QueryPoolParamsResponseProtoMsg): _25.QueryPoolParamsResponse;
                toProto(message: _25.QueryPoolParamsResponse): Uint8Array;
                toProtoMsg(message: _25.QueryPoolParamsResponse): _25.QueryPoolParamsResponseProtoMsg;
            };
            QueryTotalPoolLiquidityRequest: {
                typeUrl: string;
                encode(message: _25.QueryTotalPoolLiquidityRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _25.QueryTotalPoolLiquidityRequest;
                fromPartial(object: Partial<_25.QueryTotalPoolLiquidityRequest>): _25.QueryTotalPoolLiquidityRequest;
                fromAmino(object: _25.QueryTotalPoolLiquidityRequestAmino): _25.QueryTotalPoolLiquidityRequest;
                toAmino(message: _25.QueryTotalPoolLiquidityRequest): _25.QueryTotalPoolLiquidityRequestAmino;
                fromAminoMsg(object: _25.QueryTotalPoolLiquidityRequestAminoMsg): _25.QueryTotalPoolLiquidityRequest;
                toAminoMsg(message: _25.QueryTotalPoolLiquidityRequest): _25.QueryTotalPoolLiquidityRequestAminoMsg;
                fromProtoMsg(message: _25.QueryTotalPoolLiquidityRequestProtoMsg): _25.QueryTotalPoolLiquidityRequest;
                toProto(message: _25.QueryTotalPoolLiquidityRequest): Uint8Array;
                toProtoMsg(message: _25.QueryTotalPoolLiquidityRequest): _25.QueryTotalPoolLiquidityRequestProtoMsg;
            };
            QueryTotalPoolLiquidityResponse: {
                typeUrl: string;
                encode(message: _25.QueryTotalPoolLiquidityResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _25.QueryTotalPoolLiquidityResponse;
                fromPartial(object: Partial<_25.QueryTotalPoolLiquidityResponse>): _25.QueryTotalPoolLiquidityResponse;
                fromAmino(object: _25.QueryTotalPoolLiquidityResponseAmino): _25.QueryTotalPoolLiquidityResponse;
                toAmino(message: _25.QueryTotalPoolLiquidityResponse): _25.QueryTotalPoolLiquidityResponseAmino;
                fromAminoMsg(object: _25.QueryTotalPoolLiquidityResponseAminoMsg): _25.QueryTotalPoolLiquidityResponse;
                toAminoMsg(message: _25.QueryTotalPoolLiquidityResponse): _25.QueryTotalPoolLiquidityResponseAminoMsg;
                fromProtoMsg(message: _25.QueryTotalPoolLiquidityResponseProtoMsg): _25.QueryTotalPoolLiquidityResponse;
                toProto(message: _25.QueryTotalPoolLiquidityResponse): Uint8Array;
                toProtoMsg(message: _25.QueryTotalPoolLiquidityResponse): _25.QueryTotalPoolLiquidityResponseProtoMsg;
            };
            QueryTotalSharesRequest: {
                typeUrl: string;
                encode(message: _25.QueryTotalSharesRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _25.QueryTotalSharesRequest;
                fromPartial(object: Partial<_25.QueryTotalSharesRequest>): _25.QueryTotalSharesRequest;
                fromAmino(object: _25.QueryTotalSharesRequestAmino): _25.QueryTotalSharesRequest;
                toAmino(message: _25.QueryTotalSharesRequest): _25.QueryTotalSharesRequestAmino;
                fromAminoMsg(object: _25.QueryTotalSharesRequestAminoMsg): _25.QueryTotalSharesRequest;
                toAminoMsg(message: _25.QueryTotalSharesRequest): _25.QueryTotalSharesRequestAminoMsg;
                fromProtoMsg(message: _25.QueryTotalSharesRequestProtoMsg): _25.QueryTotalSharesRequest;
                toProto(message: _25.QueryTotalSharesRequest): Uint8Array;
                toProtoMsg(message: _25.QueryTotalSharesRequest): _25.QueryTotalSharesRequestProtoMsg;
            };
            QueryTotalSharesResponse: {
                typeUrl: string;
                encode(message: _25.QueryTotalSharesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _25.QueryTotalSharesResponse;
                fromPartial(object: Partial<_25.QueryTotalSharesResponse>): _25.QueryTotalSharesResponse;
                fromAmino(object: _25.QueryTotalSharesResponseAmino): _25.QueryTotalSharesResponse;
                toAmino(message: _25.QueryTotalSharesResponse): _25.QueryTotalSharesResponseAmino;
                fromAminoMsg(object: _25.QueryTotalSharesResponseAminoMsg): _25.QueryTotalSharesResponse;
                toAminoMsg(message: _25.QueryTotalSharesResponse): _25.QueryTotalSharesResponseAminoMsg;
                fromProtoMsg(message: _25.QueryTotalSharesResponseProtoMsg): _25.QueryTotalSharesResponse;
                toProto(message: _25.QueryTotalSharesResponse): Uint8Array;
                toProtoMsg(message: _25.QueryTotalSharesResponse): _25.QueryTotalSharesResponseProtoMsg;
            };
            QueryCalcJoinPoolNoSwapSharesRequest: {
                typeUrl: string;
                encode(message: _25.QueryCalcJoinPoolNoSwapSharesRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _25.QueryCalcJoinPoolNoSwapSharesRequest;
                fromPartial(object: Partial<_25.QueryCalcJoinPoolNoSwapSharesRequest>): _25.QueryCalcJoinPoolNoSwapSharesRequest;
                fromAmino(object: _25.QueryCalcJoinPoolNoSwapSharesRequestAmino): _25.QueryCalcJoinPoolNoSwapSharesRequest;
                toAmino(message: _25.QueryCalcJoinPoolNoSwapSharesRequest): _25.QueryCalcJoinPoolNoSwapSharesRequestAmino;
                fromAminoMsg(object: _25.QueryCalcJoinPoolNoSwapSharesRequestAminoMsg): _25.QueryCalcJoinPoolNoSwapSharesRequest;
                toAminoMsg(message: _25.QueryCalcJoinPoolNoSwapSharesRequest): _25.QueryCalcJoinPoolNoSwapSharesRequestAminoMsg;
                fromProtoMsg(message: _25.QueryCalcJoinPoolNoSwapSharesRequestProtoMsg): _25.QueryCalcJoinPoolNoSwapSharesRequest;
                toProto(message: _25.QueryCalcJoinPoolNoSwapSharesRequest): Uint8Array;
                toProtoMsg(message: _25.QueryCalcJoinPoolNoSwapSharesRequest): _25.QueryCalcJoinPoolNoSwapSharesRequestProtoMsg;
            };
            QueryCalcJoinPoolNoSwapSharesResponse: {
                typeUrl: string;
                encode(message: _25.QueryCalcJoinPoolNoSwapSharesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _25.QueryCalcJoinPoolNoSwapSharesResponse;
                fromPartial(object: Partial<_25.QueryCalcJoinPoolNoSwapSharesResponse>): _25.QueryCalcJoinPoolNoSwapSharesResponse;
                fromAmino(object: _25.QueryCalcJoinPoolNoSwapSharesResponseAmino): _25.QueryCalcJoinPoolNoSwapSharesResponse;
                toAmino(message: _25.QueryCalcJoinPoolNoSwapSharesResponse): _25.QueryCalcJoinPoolNoSwapSharesResponseAmino;
                fromAminoMsg(object: _25.QueryCalcJoinPoolNoSwapSharesResponseAminoMsg): _25.QueryCalcJoinPoolNoSwapSharesResponse;
                toAminoMsg(message: _25.QueryCalcJoinPoolNoSwapSharesResponse): _25.QueryCalcJoinPoolNoSwapSharesResponseAminoMsg;
                fromProtoMsg(message: _25.QueryCalcJoinPoolNoSwapSharesResponseProtoMsg): _25.QueryCalcJoinPoolNoSwapSharesResponse;
                toProto(message: _25.QueryCalcJoinPoolNoSwapSharesResponse): Uint8Array;
                toProtoMsg(message: _25.QueryCalcJoinPoolNoSwapSharesResponse): _25.QueryCalcJoinPoolNoSwapSharesResponseProtoMsg;
            };
            QuerySpotPriceRequest: {
                typeUrl: string;
                encode(message: _25.QuerySpotPriceRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _25.QuerySpotPriceRequest;
                fromPartial(object: Partial<_25.QuerySpotPriceRequest>): _25.QuerySpotPriceRequest;
                fromAmino(object: _25.QuerySpotPriceRequestAmino): _25.QuerySpotPriceRequest;
                toAmino(message: _25.QuerySpotPriceRequest): _25.QuerySpotPriceRequestAmino;
                fromAminoMsg(object: _25.QuerySpotPriceRequestAminoMsg): _25.QuerySpotPriceRequest;
                toAminoMsg(message: _25.QuerySpotPriceRequest): _25.QuerySpotPriceRequestAminoMsg;
                fromProtoMsg(message: _25.QuerySpotPriceRequestProtoMsg): _25.QuerySpotPriceRequest;
                toProto(message: _25.QuerySpotPriceRequest): Uint8Array;
                toProtoMsg(message: _25.QuerySpotPriceRequest): _25.QuerySpotPriceRequestProtoMsg;
            };
            QueryPoolsWithFilterRequest: {
                typeUrl: string;
                encode(message: _25.QueryPoolsWithFilterRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _25.QueryPoolsWithFilterRequest;
                fromPartial(object: Partial<_25.QueryPoolsWithFilterRequest>): _25.QueryPoolsWithFilterRequest;
                fromAmino(object: _25.QueryPoolsWithFilterRequestAmino): _25.QueryPoolsWithFilterRequest;
                toAmino(message: _25.QueryPoolsWithFilterRequest): _25.QueryPoolsWithFilterRequestAmino;
                fromAminoMsg(object: _25.QueryPoolsWithFilterRequestAminoMsg): _25.QueryPoolsWithFilterRequest;
                toAminoMsg(message: _25.QueryPoolsWithFilterRequest): _25.QueryPoolsWithFilterRequestAminoMsg;
                fromProtoMsg(message: _25.QueryPoolsWithFilterRequestProtoMsg): _25.QueryPoolsWithFilterRequest;
                toProto(message: _25.QueryPoolsWithFilterRequest): Uint8Array;
                toProtoMsg(message: _25.QueryPoolsWithFilterRequest): _25.QueryPoolsWithFilterRequestProtoMsg;
            };
            QueryPoolsWithFilterResponse: {
                typeUrl: string;
                encode(message: _25.QueryPoolsWithFilterResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _25.QueryPoolsWithFilterResponse;
                fromPartial(object: Partial<_25.QueryPoolsWithFilterResponse>): _25.QueryPoolsWithFilterResponse;
                fromAmino(object: _25.QueryPoolsWithFilterResponseAmino): _25.QueryPoolsWithFilterResponse;
                toAmino(message: _25.QueryPoolsWithFilterResponse): _25.QueryPoolsWithFilterResponseAmino;
                fromAminoMsg(object: _25.QueryPoolsWithFilterResponseAminoMsg): _25.QueryPoolsWithFilterResponse;
                toAminoMsg(message: _25.QueryPoolsWithFilterResponse): _25.QueryPoolsWithFilterResponseAminoMsg;
                fromProtoMsg(message: _25.QueryPoolsWithFilterResponseProtoMsg): _25.QueryPoolsWithFilterResponse;
                toProto(message: _25.QueryPoolsWithFilterResponse): Uint8Array;
                toProtoMsg(message: _25.QueryPoolsWithFilterResponse): _25.QueryPoolsWithFilterResponseProtoMsg;
            };
            QuerySpotPriceResponse: {
                typeUrl: string;
                encode(message: _25.QuerySpotPriceResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _25.QuerySpotPriceResponse;
                fromPartial(object: Partial<_25.QuerySpotPriceResponse>): _25.QuerySpotPriceResponse;
                fromAmino(object: _25.QuerySpotPriceResponseAmino): _25.QuerySpotPriceResponse;
                toAmino(message: _25.QuerySpotPriceResponse): _25.QuerySpotPriceResponseAmino;
                fromAminoMsg(object: _25.QuerySpotPriceResponseAminoMsg): _25.QuerySpotPriceResponse;
                toAminoMsg(message: _25.QuerySpotPriceResponse): _25.QuerySpotPriceResponseAminoMsg;
                fromProtoMsg(message: _25.QuerySpotPriceResponseProtoMsg): _25.QuerySpotPriceResponse;
                toProto(message: _25.QuerySpotPriceResponse): Uint8Array;
                toProtoMsg(message: _25.QuerySpotPriceResponse): _25.QuerySpotPriceResponseProtoMsg;
            };
            QuerySwapExactAmountInRequest: {
                typeUrl: string;
                encode(message: _25.QuerySwapExactAmountInRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _25.QuerySwapExactAmountInRequest;
                fromPartial(object: Partial<_25.QuerySwapExactAmountInRequest>): _25.QuerySwapExactAmountInRequest;
                fromAmino(object: _25.QuerySwapExactAmountInRequestAmino): _25.QuerySwapExactAmountInRequest;
                toAmino(message: _25.QuerySwapExactAmountInRequest): _25.QuerySwapExactAmountInRequestAmino;
                fromAminoMsg(object: _25.QuerySwapExactAmountInRequestAminoMsg): _25.QuerySwapExactAmountInRequest;
                toAminoMsg(message: _25.QuerySwapExactAmountInRequest): _25.QuerySwapExactAmountInRequestAminoMsg;
                fromProtoMsg(message: _25.QuerySwapExactAmountInRequestProtoMsg): _25.QuerySwapExactAmountInRequest;
                toProto(message: _25.QuerySwapExactAmountInRequest): Uint8Array;
                toProtoMsg(message: _25.QuerySwapExactAmountInRequest): _25.QuerySwapExactAmountInRequestProtoMsg;
            };
            QuerySwapExactAmountInResponse: {
                typeUrl: string;
                encode(message: _25.QuerySwapExactAmountInResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _25.QuerySwapExactAmountInResponse;
                fromPartial(object: Partial<_25.QuerySwapExactAmountInResponse>): _25.QuerySwapExactAmountInResponse;
                fromAmino(object: _25.QuerySwapExactAmountInResponseAmino): _25.QuerySwapExactAmountInResponse;
                toAmino(message: _25.QuerySwapExactAmountInResponse): _25.QuerySwapExactAmountInResponseAmino;
                fromAminoMsg(object: _25.QuerySwapExactAmountInResponseAminoMsg): _25.QuerySwapExactAmountInResponse;
                toAminoMsg(message: _25.QuerySwapExactAmountInResponse): _25.QuerySwapExactAmountInResponseAminoMsg;
                fromProtoMsg(message: _25.QuerySwapExactAmountInResponseProtoMsg): _25.QuerySwapExactAmountInResponse;
                toProto(message: _25.QuerySwapExactAmountInResponse): Uint8Array;
                toProtoMsg(message: _25.QuerySwapExactAmountInResponse): _25.QuerySwapExactAmountInResponseProtoMsg;
            };
            QuerySwapExactAmountOutRequest: {
                typeUrl: string;
                encode(message: _25.QuerySwapExactAmountOutRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _25.QuerySwapExactAmountOutRequest;
                fromPartial(object: Partial<_25.QuerySwapExactAmountOutRequest>): _25.QuerySwapExactAmountOutRequest;
                fromAmino(object: _25.QuerySwapExactAmountOutRequestAmino): _25.QuerySwapExactAmountOutRequest;
                toAmino(message: _25.QuerySwapExactAmountOutRequest): _25.QuerySwapExactAmountOutRequestAmino;
                fromAminoMsg(object: _25.QuerySwapExactAmountOutRequestAminoMsg): _25.QuerySwapExactAmountOutRequest;
                toAminoMsg(message: _25.QuerySwapExactAmountOutRequest): _25.QuerySwapExactAmountOutRequestAminoMsg;
                fromProtoMsg(message: _25.QuerySwapExactAmountOutRequestProtoMsg): _25.QuerySwapExactAmountOutRequest;
                toProto(message: _25.QuerySwapExactAmountOutRequest): Uint8Array;
                toProtoMsg(message: _25.QuerySwapExactAmountOutRequest): _25.QuerySwapExactAmountOutRequestProtoMsg;
            };
            QuerySwapExactAmountOutResponse: {
                typeUrl: string;
                encode(message: _25.QuerySwapExactAmountOutResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _25.QuerySwapExactAmountOutResponse;
                fromPartial(object: Partial<_25.QuerySwapExactAmountOutResponse>): _25.QuerySwapExactAmountOutResponse;
                fromAmino(object: _25.QuerySwapExactAmountOutResponseAmino): _25.QuerySwapExactAmountOutResponse;
                toAmino(message: _25.QuerySwapExactAmountOutResponse): _25.QuerySwapExactAmountOutResponseAmino;
                fromAminoMsg(object: _25.QuerySwapExactAmountOutResponseAminoMsg): _25.QuerySwapExactAmountOutResponse;
                toAminoMsg(message: _25.QuerySwapExactAmountOutResponse): _25.QuerySwapExactAmountOutResponseAminoMsg;
                fromProtoMsg(message: _25.QuerySwapExactAmountOutResponseProtoMsg): _25.QuerySwapExactAmountOutResponse;
                toProto(message: _25.QuerySwapExactAmountOutResponse): Uint8Array;
                toProtoMsg(message: _25.QuerySwapExactAmountOutResponse): _25.QuerySwapExactAmountOutResponseProtoMsg;
            };
            QueryTotalLiquidityRequest: {
                typeUrl: string;
                encode(_: _25.QueryTotalLiquidityRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _25.QueryTotalLiquidityRequest;
                fromPartial(_: Partial<_25.QueryTotalLiquidityRequest>): _25.QueryTotalLiquidityRequest;
                fromAmino(_: _25.QueryTotalLiquidityRequestAmino): _25.QueryTotalLiquidityRequest;
                toAmino(_: _25.QueryTotalLiquidityRequest): _25.QueryTotalLiquidityRequestAmino;
                fromAminoMsg(object: _25.QueryTotalLiquidityRequestAminoMsg): _25.QueryTotalLiquidityRequest;
                toAminoMsg(message: _25.QueryTotalLiquidityRequest): _25.QueryTotalLiquidityRequestAminoMsg;
                fromProtoMsg(message: _25.QueryTotalLiquidityRequestProtoMsg): _25.QueryTotalLiquidityRequest;
                toProto(message: _25.QueryTotalLiquidityRequest): Uint8Array;
                toProtoMsg(message: _25.QueryTotalLiquidityRequest): _25.QueryTotalLiquidityRequestProtoMsg;
            };
            QueryTotalLiquidityResponse: {
                typeUrl: string;
                encode(message: _25.QueryTotalLiquidityResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _25.QueryTotalLiquidityResponse;
                fromPartial(object: Partial<_25.QueryTotalLiquidityResponse>): _25.QueryTotalLiquidityResponse;
                fromAmino(object: _25.QueryTotalLiquidityResponseAmino): _25.QueryTotalLiquidityResponse;
                toAmino(message: _25.QueryTotalLiquidityResponse): _25.QueryTotalLiquidityResponseAmino;
                fromAminoMsg(object: _25.QueryTotalLiquidityResponseAminoMsg): _25.QueryTotalLiquidityResponse;
                toAminoMsg(message: _25.QueryTotalLiquidityResponse): _25.QueryTotalLiquidityResponseAminoMsg;
                fromProtoMsg(message: _25.QueryTotalLiquidityResponseProtoMsg): _25.QueryTotalLiquidityResponse;
                toProto(message: _25.QueryTotalLiquidityResponse): Uint8Array;
                toProtoMsg(message: _25.QueryTotalLiquidityResponse): _25.QueryTotalLiquidityResponseProtoMsg;
            };
            QueryConcentratedPoolIdLinkFromCFMMRequest: {
                typeUrl: string;
                encode(message: _25.QueryConcentratedPoolIdLinkFromCFMMRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _25.QueryConcentratedPoolIdLinkFromCFMMRequest;
                fromPartial(object: Partial<_25.QueryConcentratedPoolIdLinkFromCFMMRequest>): _25.QueryConcentratedPoolIdLinkFromCFMMRequest;
                fromAmino(object: _25.QueryConcentratedPoolIdLinkFromCFMMRequestAmino): _25.QueryConcentratedPoolIdLinkFromCFMMRequest;
                toAmino(message: _25.QueryConcentratedPoolIdLinkFromCFMMRequest): _25.QueryConcentratedPoolIdLinkFromCFMMRequestAmino;
                fromAminoMsg(object: _25.QueryConcentratedPoolIdLinkFromCFMMRequestAminoMsg): _25.QueryConcentratedPoolIdLinkFromCFMMRequest;
                toAminoMsg(message: _25.QueryConcentratedPoolIdLinkFromCFMMRequest): _25.QueryConcentratedPoolIdLinkFromCFMMRequestAminoMsg;
                fromProtoMsg(message: _25.QueryConcentratedPoolIdLinkFromCFMMRequestProtoMsg): _25.QueryConcentratedPoolIdLinkFromCFMMRequest;
                toProto(message: _25.QueryConcentratedPoolIdLinkFromCFMMRequest): Uint8Array;
                toProtoMsg(message: _25.QueryConcentratedPoolIdLinkFromCFMMRequest): _25.QueryConcentratedPoolIdLinkFromCFMMRequestProtoMsg;
            };
            QueryConcentratedPoolIdLinkFromCFMMResponse: {
                typeUrl: string;
                encode(message: _25.QueryConcentratedPoolIdLinkFromCFMMResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _25.QueryConcentratedPoolIdLinkFromCFMMResponse;
                fromPartial(object: Partial<_25.QueryConcentratedPoolIdLinkFromCFMMResponse>): _25.QueryConcentratedPoolIdLinkFromCFMMResponse;
                fromAmino(object: _25.QueryConcentratedPoolIdLinkFromCFMMResponseAmino): _25.QueryConcentratedPoolIdLinkFromCFMMResponse;
                toAmino(message: _25.QueryConcentratedPoolIdLinkFromCFMMResponse): _25.QueryConcentratedPoolIdLinkFromCFMMResponseAmino;
                fromAminoMsg(object: _25.QueryConcentratedPoolIdLinkFromCFMMResponseAminoMsg): _25.QueryConcentratedPoolIdLinkFromCFMMResponse;
                toAminoMsg(message: _25.QueryConcentratedPoolIdLinkFromCFMMResponse): _25.QueryConcentratedPoolIdLinkFromCFMMResponseAminoMsg;
                fromProtoMsg(message: _25.QueryConcentratedPoolIdLinkFromCFMMResponseProtoMsg): _25.QueryConcentratedPoolIdLinkFromCFMMResponse;
                toProto(message: _25.QueryConcentratedPoolIdLinkFromCFMMResponse): Uint8Array;
                toProtoMsg(message: _25.QueryConcentratedPoolIdLinkFromCFMMResponse): _25.QueryConcentratedPoolIdLinkFromCFMMResponseProtoMsg;
            };
            QueryCFMMConcentratedPoolLinksRequest: {
                typeUrl: string;
                encode(_: _25.QueryCFMMConcentratedPoolLinksRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _25.QueryCFMMConcentratedPoolLinksRequest;
                fromPartial(_: Partial<_25.QueryCFMMConcentratedPoolLinksRequest>): _25.QueryCFMMConcentratedPoolLinksRequest;
                fromAmino(_: _25.QueryCFMMConcentratedPoolLinksRequestAmino): _25.QueryCFMMConcentratedPoolLinksRequest;
                toAmino(_: _25.QueryCFMMConcentratedPoolLinksRequest): _25.QueryCFMMConcentratedPoolLinksRequestAmino;
                fromAminoMsg(object: _25.QueryCFMMConcentratedPoolLinksRequestAminoMsg): _25.QueryCFMMConcentratedPoolLinksRequest;
                toAminoMsg(message: _25.QueryCFMMConcentratedPoolLinksRequest): _25.QueryCFMMConcentratedPoolLinksRequestAminoMsg;
                fromProtoMsg(message: _25.QueryCFMMConcentratedPoolLinksRequestProtoMsg): _25.QueryCFMMConcentratedPoolLinksRequest;
                toProto(message: _25.QueryCFMMConcentratedPoolLinksRequest): Uint8Array;
                toProtoMsg(message: _25.QueryCFMMConcentratedPoolLinksRequest): _25.QueryCFMMConcentratedPoolLinksRequestProtoMsg;
            };
            QueryCFMMConcentratedPoolLinksResponse: {
                typeUrl: string;
                encode(message: _25.QueryCFMMConcentratedPoolLinksResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _25.QueryCFMMConcentratedPoolLinksResponse;
                fromPartial(object: Partial<_25.QueryCFMMConcentratedPoolLinksResponse>): _25.QueryCFMMConcentratedPoolLinksResponse;
                fromAmino(object: _25.QueryCFMMConcentratedPoolLinksResponseAmino): _25.QueryCFMMConcentratedPoolLinksResponse;
                toAmino(message: _25.QueryCFMMConcentratedPoolLinksResponse): _25.QueryCFMMConcentratedPoolLinksResponseAmino;
                fromAminoMsg(object: _25.QueryCFMMConcentratedPoolLinksResponseAminoMsg): _25.QueryCFMMConcentratedPoolLinksResponse;
                toAminoMsg(message: _25.QueryCFMMConcentratedPoolLinksResponse): _25.QueryCFMMConcentratedPoolLinksResponseAminoMsg;
                fromProtoMsg(message: _25.QueryCFMMConcentratedPoolLinksResponseProtoMsg): _25.QueryCFMMConcentratedPoolLinksResponse;
                toProto(message: _25.QueryCFMMConcentratedPoolLinksResponse): Uint8Array;
                toProtoMsg(message: _25.QueryCFMMConcentratedPoolLinksResponse): _25.QueryCFMMConcentratedPoolLinksResponseProtoMsg;
            };
            PoolI_InterfaceDecoder: (input: Uint8Array | import("..").BinaryReader) => import("../google/protobuf/any").Any | import("./concentratedliquidity/v1beta1/pool").Pool | _8.CosmWasmPool | _20.Pool | _22.Pool;
            PoolI_FromAmino: (content: import("../google/protobuf/any").AnyAmino) => import("../google/protobuf/any").Any;
            PoolI_ToAmino: (content: import("../google/protobuf/any").Any) => import("../google/protobuf/any").AnyAmino;
            ReplaceMigrationRecordsProposal: {
                typeUrl: string;
                encode(message: _24.ReplaceMigrationRecordsProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _24.ReplaceMigrationRecordsProposal;
                fromPartial(object: Partial<_24.ReplaceMigrationRecordsProposal>): _24.ReplaceMigrationRecordsProposal;
                fromAmino(object: _24.ReplaceMigrationRecordsProposalAmino): _24.ReplaceMigrationRecordsProposal;
                toAmino(message: _24.ReplaceMigrationRecordsProposal): _24.ReplaceMigrationRecordsProposalAmino;
                fromAminoMsg(object: _24.ReplaceMigrationRecordsProposalAminoMsg): _24.ReplaceMigrationRecordsProposal;
                toAminoMsg(message: _24.ReplaceMigrationRecordsProposal): _24.ReplaceMigrationRecordsProposalAminoMsg;
                fromProtoMsg(message: _24.ReplaceMigrationRecordsProposalProtoMsg): _24.ReplaceMigrationRecordsProposal;
                toProto(message: _24.ReplaceMigrationRecordsProposal): Uint8Array;
                toProtoMsg(message: _24.ReplaceMigrationRecordsProposal): _24.ReplaceMigrationRecordsProposalProtoMsg;
            };
            UpdateMigrationRecordsProposal: {
                typeUrl: string;
                encode(message: _24.UpdateMigrationRecordsProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _24.UpdateMigrationRecordsProposal;
                fromPartial(object: Partial<_24.UpdateMigrationRecordsProposal>): _24.UpdateMigrationRecordsProposal;
                fromAmino(object: _24.UpdateMigrationRecordsProposalAmino): _24.UpdateMigrationRecordsProposal;
                toAmino(message: _24.UpdateMigrationRecordsProposal): _24.UpdateMigrationRecordsProposalAmino;
                fromAminoMsg(object: _24.UpdateMigrationRecordsProposalAminoMsg): _24.UpdateMigrationRecordsProposal;
                toAminoMsg(message: _24.UpdateMigrationRecordsProposal): _24.UpdateMigrationRecordsProposalAminoMsg;
                fromProtoMsg(message: _24.UpdateMigrationRecordsProposalProtoMsg): _24.UpdateMigrationRecordsProposal;
                toProto(message: _24.UpdateMigrationRecordsProposal): Uint8Array;
                toProtoMsg(message: _24.UpdateMigrationRecordsProposal): _24.UpdateMigrationRecordsProposalProtoMsg;
            };
            PoolRecordWithCFMMLink: {
                typeUrl: string;
                encode(message: _24.PoolRecordWithCFMMLink, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _24.PoolRecordWithCFMMLink;
                fromPartial(object: Partial<_24.PoolRecordWithCFMMLink>): _24.PoolRecordWithCFMMLink;
                fromAmino(object: _24.PoolRecordWithCFMMLinkAmino): _24.PoolRecordWithCFMMLink;
                toAmino(message: _24.PoolRecordWithCFMMLink): _24.PoolRecordWithCFMMLinkAmino;
                fromAminoMsg(object: _24.PoolRecordWithCFMMLinkAminoMsg): _24.PoolRecordWithCFMMLink;
                toAminoMsg(message: _24.PoolRecordWithCFMMLink): _24.PoolRecordWithCFMMLinkAminoMsg;
                fromProtoMsg(message: _24.PoolRecordWithCFMMLinkProtoMsg): _24.PoolRecordWithCFMMLink;
                toProto(message: _24.PoolRecordWithCFMMLink): Uint8Array;
                toProtoMsg(message: _24.PoolRecordWithCFMMLink): _24.PoolRecordWithCFMMLinkProtoMsg;
            };
            CreateConcentratedLiquidityPoolsAndLinktoCFMMProposal: {
                typeUrl: string;
                encode(message: _24.CreateConcentratedLiquidityPoolsAndLinktoCFMMProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _24.CreateConcentratedLiquidityPoolsAndLinktoCFMMProposal;
                fromPartial(object: Partial<_24.CreateConcentratedLiquidityPoolsAndLinktoCFMMProposal>): _24.CreateConcentratedLiquidityPoolsAndLinktoCFMMProposal;
                fromAmino(object: _24.CreateConcentratedLiquidityPoolsAndLinktoCFMMProposalAmino): _24.CreateConcentratedLiquidityPoolsAndLinktoCFMMProposal;
                toAmino(message: _24.CreateConcentratedLiquidityPoolsAndLinktoCFMMProposal): _24.CreateConcentratedLiquidityPoolsAndLinktoCFMMProposalAmino;
                fromAminoMsg(object: _24.CreateConcentratedLiquidityPoolsAndLinktoCFMMProposalAminoMsg): _24.CreateConcentratedLiquidityPoolsAndLinktoCFMMProposal;
                toAminoMsg(message: _24.CreateConcentratedLiquidityPoolsAndLinktoCFMMProposal): _24.CreateConcentratedLiquidityPoolsAndLinktoCFMMProposalAminoMsg;
                fromProtoMsg(message: _24.CreateConcentratedLiquidityPoolsAndLinktoCFMMProposalProtoMsg): _24.CreateConcentratedLiquidityPoolsAndLinktoCFMMProposal;
                toProto(message: _24.CreateConcentratedLiquidityPoolsAndLinktoCFMMProposal): Uint8Array;
                toProtoMsg(message: _24.CreateConcentratedLiquidityPoolsAndLinktoCFMMProposal): _24.CreateConcentratedLiquidityPoolsAndLinktoCFMMProposalProtoMsg;
            };
            SetScalingFactorControllerProposal: {
                typeUrl: string;
                encode(message: _24.SetScalingFactorControllerProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _24.SetScalingFactorControllerProposal;
                fromPartial(object: Partial<_24.SetScalingFactorControllerProposal>): _24.SetScalingFactorControllerProposal;
                fromAmino(object: _24.SetScalingFactorControllerProposalAmino): _24.SetScalingFactorControllerProposal;
                toAmino(message: _24.SetScalingFactorControllerProposal): _24.SetScalingFactorControllerProposalAmino;
                fromAminoMsg(object: _24.SetScalingFactorControllerProposalAminoMsg): _24.SetScalingFactorControllerProposal;
                toAminoMsg(message: _24.SetScalingFactorControllerProposal): _24.SetScalingFactorControllerProposalAminoMsg;
                fromProtoMsg(message: _24.SetScalingFactorControllerProposalProtoMsg): _24.SetScalingFactorControllerProposal;
                toProto(message: _24.SetScalingFactorControllerProposal): Uint8Array;
                toProtoMsg(message: _24.SetScalingFactorControllerProposal): _24.SetScalingFactorControllerProposalProtoMsg;
            };
            Params: {
                typeUrl: string;
                encode(message: _23.Params, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _23.Params;
                fromPartial(object: Partial<_23.Params>): _23.Params;
                fromAmino(object: _23.ParamsAmino): _23.Params;
                toAmino(message: _23.Params): _23.ParamsAmino;
                fromAminoMsg(object: _23.ParamsAminoMsg): _23.Params;
                toAminoMsg(message: _23.Params): _23.ParamsAminoMsg;
                fromProtoMsg(message: _23.ParamsProtoMsg): _23.Params;
                toProto(message: _23.Params): Uint8Array;
                toProtoMsg(message: _23.Params): _23.ParamsProtoMsg;
            };
            GenesisState: {
                typeUrl: string;
                encode(message: _23.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _23.GenesisState;
                fromPartial(object: Partial<_23.GenesisState>): _23.GenesisState;
                fromAmino(object: _23.GenesisStateAmino): _23.GenesisState;
                toAmino(message: _23.GenesisState): _23.GenesisStateAmino;
                fromAminoMsg(object: _23.GenesisStateAminoMsg): _23.GenesisState;
                toAminoMsg(message: _23.GenesisState): _23.GenesisStateAminoMsg;
                fromProtoMsg(message: _23.GenesisStateProtoMsg): _23.GenesisState;
                toProto(message: _23.GenesisState): Uint8Array;
                toProtoMsg(message: _23.GenesisState): _23.GenesisStateProtoMsg;
            };
            SmoothWeightChangeParams: {
                typeUrl: string;
                encode(message: _22.SmoothWeightChangeParams, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _22.SmoothWeightChangeParams;
                fromPartial(object: Partial<_22.SmoothWeightChangeParams>): _22.SmoothWeightChangeParams;
                fromAmino(object: _22.SmoothWeightChangeParamsAmino): _22.SmoothWeightChangeParams;
                toAmino(message: _22.SmoothWeightChangeParams): _22.SmoothWeightChangeParamsAmino;
                fromAminoMsg(object: _22.SmoothWeightChangeParamsAminoMsg): _22.SmoothWeightChangeParams;
                toAminoMsg(message: _22.SmoothWeightChangeParams): _22.SmoothWeightChangeParamsAminoMsg;
                fromProtoMsg(message: _22.SmoothWeightChangeParamsProtoMsg): _22.SmoothWeightChangeParams;
                toProto(message: _22.SmoothWeightChangeParams): Uint8Array;
                toProtoMsg(message: _22.SmoothWeightChangeParams): _22.SmoothWeightChangeParamsProtoMsg;
            };
            PoolParams: {
                typeUrl: string;
                encode(message: _22.PoolParams, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _22.PoolParams;
                fromPartial(object: Partial<_22.PoolParams>): _22.PoolParams;
                fromAmino(object: _22.PoolParamsAmino): _22.PoolParams;
                toAmino(message: _22.PoolParams): _22.PoolParamsAmino;
                fromAminoMsg(object: _22.PoolParamsAminoMsg): _22.PoolParams;
                toAminoMsg(message: _22.PoolParams): _22.PoolParamsAminoMsg;
                fromProtoMsg(message: _22.PoolParamsProtoMsg): _22.PoolParams;
                toProto(message: _22.PoolParams): Uint8Array;
                toProtoMsg(message: _22.PoolParams): _22.PoolParamsProtoMsg;
            };
            PoolAsset: {
                typeUrl: string;
                encode(message: _22.PoolAsset, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _22.PoolAsset;
                fromPartial(object: Partial<_22.PoolAsset>): _22.PoolAsset;
                fromAmino(object: _22.PoolAssetAmino): _22.PoolAsset;
                toAmino(message: _22.PoolAsset): _22.PoolAssetAmino;
                fromAminoMsg(object: _22.PoolAssetAminoMsg): _22.PoolAsset;
                toAminoMsg(message: _22.PoolAsset): _22.PoolAssetAminoMsg;
                fromProtoMsg(message: _22.PoolAssetProtoMsg): _22.PoolAsset;
                toProto(message: _22.PoolAsset): Uint8Array;
                toProtoMsg(message: _22.PoolAsset): _22.PoolAssetProtoMsg;
            };
            Pool: {
                typeUrl: string;
                encode(message: _22.Pool, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _22.Pool;
                fromPartial(object: Partial<_22.Pool>): _22.Pool;
                fromAmino(object: _22.PoolAmino): _22.Pool;
                toAmino(message: _22.Pool): _22.PoolAmino;
                fromAminoMsg(object: _22.PoolAminoMsg): _22.Pool;
                toAminoMsg(message: _22.Pool): _22.PoolAminoMsg;
                fromProtoMsg(message: _22.PoolProtoMsg): _22.Pool;
                toProto(message: _22.Pool): Uint8Array;
                toProtoMsg(message: _22.Pool): _22.PoolProtoMsg;
            };
        };
        const v2: {
            QueryClientImpl: typeof _305.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                spotPrice(request: _28.QuerySpotPriceRequest): Promise<_28.QuerySpotPriceResponse>;
            };
            LCDQueryClient: typeof _286.LCDQueryClient;
            QuerySpotPriceRequest: {
                typeUrl: string;
                encode(message: _28.QuerySpotPriceRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _28.QuerySpotPriceRequest;
                fromPartial(object: Partial<_28.QuerySpotPriceRequest>): _28.QuerySpotPriceRequest;
                fromAmino(object: _28.QuerySpotPriceRequestAmino): _28.QuerySpotPriceRequest;
                toAmino(message: _28.QuerySpotPriceRequest): _28.QuerySpotPriceRequestAmino;
                fromAminoMsg(object: _28.QuerySpotPriceRequestAminoMsg): _28.QuerySpotPriceRequest;
                toAminoMsg(message: _28.QuerySpotPriceRequest): _28.QuerySpotPriceRequestAminoMsg;
                fromProtoMsg(message: _28.QuerySpotPriceRequestProtoMsg): _28.QuerySpotPriceRequest;
                toProto(message: _28.QuerySpotPriceRequest): Uint8Array;
                toProtoMsg(message: _28.QuerySpotPriceRequest): _28.QuerySpotPriceRequestProtoMsg;
            };
            QuerySpotPriceResponse: {
                typeUrl: string;
                encode(message: _28.QuerySpotPriceResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _28.QuerySpotPriceResponse;
                fromPartial(object: Partial<_28.QuerySpotPriceResponse>): _28.QuerySpotPriceResponse;
                fromAmino(object: _28.QuerySpotPriceResponseAmino): _28.QuerySpotPriceResponse;
                toAmino(message: _28.QuerySpotPriceResponse): _28.QuerySpotPriceResponseAmino;
                fromAminoMsg(object: _28.QuerySpotPriceResponseAminoMsg): _28.QuerySpotPriceResponse;
                toAminoMsg(message: _28.QuerySpotPriceResponse): _28.QuerySpotPriceResponseAminoMsg;
                fromProtoMsg(message: _28.QuerySpotPriceResponseProtoMsg): _28.QuerySpotPriceResponse;
                toProto(message: _28.QuerySpotPriceResponse): Uint8Array;
                toProtoMsg(message: _28.QuerySpotPriceResponse): _28.QuerySpotPriceResponseProtoMsg;
            };
        };
    }
    const ibchooks: {
        MsgClientImpl: typeof _324.MsgClientImpl;
        registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
        load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
        MessageComposer: {
            encoded: {
                emitIBCAck(value: _31.MsgEmitIBCAck): {
                    typeUrl: string;
                    value: Uint8Array;
                };
            };
            withTypeUrl: {
                emitIBCAck(value: _31.MsgEmitIBCAck): {
                    typeUrl: string;
                    value: _31.MsgEmitIBCAck;
                };
            };
            fromJSON: {
                emitIBCAck(value: any): {
                    typeUrl: string;
                    value: _31.MsgEmitIBCAck;
                };
            };
            fromPartial: {
                emitIBCAck(value: _31.MsgEmitIBCAck): {
                    typeUrl: string;
                    value: _31.MsgEmitIBCAck;
                };
            };
        };
        AminoConverter: {
            "/osmosis.ibchooks.MsgEmitIBCAck": {
                aminoType: string;
                toAmino: (message: _31.MsgEmitIBCAck) => _31.MsgEmitIBCAckAmino;
                fromAmino: (object: _31.MsgEmitIBCAckAmino) => _31.MsgEmitIBCAck;
            };
        };
        MsgEmitIBCAck: {
            typeUrl: string;
            encode(message: _31.MsgEmitIBCAck, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _31.MsgEmitIBCAck;
            fromPartial(object: Partial<_31.MsgEmitIBCAck>): _31.MsgEmitIBCAck;
            fromAmino(object: _31.MsgEmitIBCAckAmino): _31.MsgEmitIBCAck;
            toAmino(message: _31.MsgEmitIBCAck): _31.MsgEmitIBCAckAmino;
            fromAminoMsg(object: _31.MsgEmitIBCAckAminoMsg): _31.MsgEmitIBCAck;
            toAminoMsg(message: _31.MsgEmitIBCAck): _31.MsgEmitIBCAckAminoMsg;
            fromProtoMsg(message: _31.MsgEmitIBCAckProtoMsg): _31.MsgEmitIBCAck;
            toProto(message: _31.MsgEmitIBCAck): Uint8Array;
            toProtoMsg(message: _31.MsgEmitIBCAck): _31.MsgEmitIBCAckProtoMsg;
        };
        MsgEmitIBCAckResponse: {
            typeUrl: string;
            encode(message: _31.MsgEmitIBCAckResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _31.MsgEmitIBCAckResponse;
            fromPartial(object: Partial<_31.MsgEmitIBCAckResponse>): _31.MsgEmitIBCAckResponse;
            fromAmino(object: _31.MsgEmitIBCAckResponseAmino): _31.MsgEmitIBCAckResponse;
            toAmino(message: _31.MsgEmitIBCAckResponse): _31.MsgEmitIBCAckResponseAmino;
            fromAminoMsg(object: _31.MsgEmitIBCAckResponseAminoMsg): _31.MsgEmitIBCAckResponse;
            toAminoMsg(message: _31.MsgEmitIBCAckResponse): _31.MsgEmitIBCAckResponseAminoMsg;
            fromProtoMsg(message: _31.MsgEmitIBCAckResponseProtoMsg): _31.MsgEmitIBCAckResponse;
            toProto(message: _31.MsgEmitIBCAckResponse): Uint8Array;
            toProtoMsg(message: _31.MsgEmitIBCAckResponse): _31.MsgEmitIBCAckResponseProtoMsg;
        };
        Params: {
            typeUrl: string;
            encode(message: _30.Params, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _30.Params;
            fromPartial(object: Partial<_30.Params>): _30.Params;
            fromAmino(object: _30.ParamsAmino): _30.Params;
            toAmino(message: _30.Params): _30.ParamsAmino;
            fromAminoMsg(object: _30.ParamsAminoMsg): _30.Params;
            toAminoMsg(message: _30.Params): _30.ParamsAminoMsg;
            fromProtoMsg(message: _30.ParamsProtoMsg): _30.Params;
            toProto(message: _30.Params): Uint8Array;
            toProtoMsg(message: _30.Params): _30.ParamsProtoMsg;
        };
        GenesisState: {
            typeUrl: string;
            encode(message: _29.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _29.GenesisState;
            fromPartial(object: Partial<_29.GenesisState>): _29.GenesisState;
            fromAmino(object: _29.GenesisStateAmino): _29.GenesisState;
            toAmino(message: _29.GenesisState): _29.GenesisStateAmino;
            fromAminoMsg(object: _29.GenesisStateAminoMsg): _29.GenesisState;
            toAminoMsg(message: _29.GenesisState): _29.GenesisStateAminoMsg;
            fromProtoMsg(message: _29.GenesisStateProtoMsg): _29.GenesisState;
            toProto(message: _29.GenesisState): Uint8Array;
            toProtoMsg(message: _29.GenesisState): _29.GenesisStateProtoMsg;
        };
    };
    namespace ibcratelimit {
        const v1beta1: {
            QueryClientImpl: typeof _306.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                params(request?: _34.ParamsRequest): Promise<_34.ParamsResponse>;
            };
            LCDQueryClient: typeof _287.LCDQueryClient;
            ParamsRequest: {
                typeUrl: string;
                encode(_: _34.ParamsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _34.ParamsRequest;
                fromPartial(_: Partial<_34.ParamsRequest>): _34.ParamsRequest;
                fromAmino(_: _34.ParamsRequestAmino): _34.ParamsRequest;
                toAmino(_: _34.ParamsRequest): _34.ParamsRequestAmino;
                fromAminoMsg(object: _34.ParamsRequestAminoMsg): _34.ParamsRequest;
                toAminoMsg(message: _34.ParamsRequest): _34.ParamsRequestAminoMsg;
                fromProtoMsg(message: _34.ParamsRequestProtoMsg): _34.ParamsRequest;
                toProto(message: _34.ParamsRequest): Uint8Array;
                toProtoMsg(message: _34.ParamsRequest): _34.ParamsRequestProtoMsg;
            };
            ParamsResponse: {
                typeUrl: string;
                encode(message: _34.ParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _34.ParamsResponse;
                fromPartial(object: Partial<_34.ParamsResponse>): _34.ParamsResponse;
                fromAmino(object: _34.ParamsResponseAmino): _34.ParamsResponse;
                toAmino(message: _34.ParamsResponse): _34.ParamsResponseAmino;
                fromAminoMsg(object: _34.ParamsResponseAminoMsg): _34.ParamsResponse;
                toAminoMsg(message: _34.ParamsResponse): _34.ParamsResponseAminoMsg;
                fromProtoMsg(message: _34.ParamsResponseProtoMsg): _34.ParamsResponse;
                toProto(message: _34.ParamsResponse): Uint8Array;
                toProtoMsg(message: _34.ParamsResponse): _34.ParamsResponseProtoMsg;
            };
            Params: {
                typeUrl: string;
                encode(message: _33.Params, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _33.Params;
                fromPartial(object: Partial<_33.Params>): _33.Params;
                fromAmino(object: _33.ParamsAmino): _33.Params;
                toAmino(message: _33.Params): _33.ParamsAmino;
                fromAminoMsg(object: _33.ParamsAminoMsg): _33.Params;
                toAminoMsg(message: _33.Params): _33.ParamsAminoMsg;
                fromProtoMsg(message: _33.ParamsProtoMsg): _33.Params;
                toProto(message: _33.Params): Uint8Array;
                toProtoMsg(message: _33.Params): _33.ParamsProtoMsg;
            };
            GenesisState: {
                typeUrl: string;
                encode(message: _32.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _32.GenesisState;
                fromPartial(object: Partial<_32.GenesisState>): _32.GenesisState;
                fromAmino(object: _32.GenesisStateAmino): _32.GenesisState;
                toAmino(message: _32.GenesisState): _32.GenesisStateAmino;
                fromAminoMsg(object: _32.GenesisStateAminoMsg): _32.GenesisState;
                toAminoMsg(message: _32.GenesisState): _32.GenesisStateAminoMsg;
                fromProtoMsg(message: _32.GenesisStateProtoMsg): _32.GenesisState;
                toProto(message: _32.GenesisState): Uint8Array;
                toProtoMsg(message: _32.GenesisState): _32.GenesisStateProtoMsg;
            };
        };
    }
    const incentives: {
        MsgClientImpl: typeof _325.MsgClientImpl;
        QueryClientImpl: typeof _307.QueryClientImpl;
        createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
            moduleToDistributeCoins(request?: _40.ModuleToDistributeCoinsRequest): Promise<_40.ModuleToDistributeCoinsResponse>;
            gaugeByID(request: _40.GaugeByIDRequest): Promise<_40.GaugeByIDResponse>;
            gauges(request?: _40.GaugesRequest): Promise<_40.GaugesResponse>;
            activeGauges(request?: _40.ActiveGaugesRequest): Promise<_40.ActiveGaugesResponse>;
            activeGaugesPerDenom(request: _40.ActiveGaugesPerDenomRequest): Promise<_40.ActiveGaugesPerDenomResponse>;
            upcomingGauges(request?: _40.UpcomingGaugesRequest): Promise<_40.UpcomingGaugesResponse>;
            upcomingGaugesPerDenom(request: _40.UpcomingGaugesPerDenomRequest): Promise<_40.UpcomingGaugesPerDenomResponse>;
            rewardsEst(request: _40.RewardsEstRequest): Promise<_40.RewardsEstResponse>;
            lockableDurations(request?: _40.QueryLockableDurationsRequest): Promise<_40.QueryLockableDurationsResponse>;
            allGroups(request?: _40.QueryAllGroupsRequest): Promise<_40.QueryAllGroupsResponse>;
            allGroupsGauges(request?: _40.QueryAllGroupsGaugesRequest): Promise<_40.QueryAllGroupsGaugesResponse>;
            allGroupsWithGauge(request?: _40.QueryAllGroupsWithGaugeRequest): Promise<_40.QueryAllGroupsWithGaugeResponse>;
            groupByGroupGaugeID(request: _40.QueryGroupByGroupGaugeIDRequest): Promise<_40.QueryGroupByGroupGaugeIDResponse>;
            currentWeightByGroupGaugeID(request: _40.QueryCurrentWeightByGroupGaugeIDRequest): Promise<_40.QueryCurrentWeightByGroupGaugeIDResponse>;
        };
        LCDQueryClient: typeof _288.LCDQueryClient;
        registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
        load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
        MessageComposer: {
            encoded: {
                createGauge(value: _41.MsgCreateGauge): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                addToGauge(value: _41.MsgAddToGauge): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                createGroup(value: _41.MsgCreateGroup): {
                    typeUrl: string;
                    value: Uint8Array;
                };
            };
            withTypeUrl: {
                createGauge(value: _41.MsgCreateGauge): {
                    typeUrl: string;
                    value: _41.MsgCreateGauge;
                };
                addToGauge(value: _41.MsgAddToGauge): {
                    typeUrl: string;
                    value: _41.MsgAddToGauge;
                };
                createGroup(value: _41.MsgCreateGroup): {
                    typeUrl: string;
                    value: _41.MsgCreateGroup;
                };
            };
            fromJSON: {
                createGauge(value: any): {
                    typeUrl: string;
                    value: _41.MsgCreateGauge;
                };
                addToGauge(value: any): {
                    typeUrl: string;
                    value: _41.MsgAddToGauge;
                };
                createGroup(value: any): {
                    typeUrl: string;
                    value: _41.MsgCreateGroup;
                };
            };
            fromPartial: {
                createGauge(value: _41.MsgCreateGauge): {
                    typeUrl: string;
                    value: _41.MsgCreateGauge;
                };
                addToGauge(value: _41.MsgAddToGauge): {
                    typeUrl: string;
                    value: _41.MsgAddToGauge;
                };
                createGroup(value: _41.MsgCreateGroup): {
                    typeUrl: string;
                    value: _41.MsgCreateGroup;
                };
            };
        };
        AminoConverter: {
            "/osmosis.incentives.MsgCreateGauge": {
                aminoType: string;
                toAmino: (message: _41.MsgCreateGauge) => _41.MsgCreateGaugeAmino;
                fromAmino: (object: _41.MsgCreateGaugeAmino) => _41.MsgCreateGauge;
            };
            "/osmosis.incentives.MsgAddToGauge": {
                aminoType: string;
                toAmino: (message: _41.MsgAddToGauge) => _41.MsgAddToGaugeAmino;
                fromAmino: (object: _41.MsgAddToGaugeAmino) => _41.MsgAddToGauge;
            };
            "/osmosis.incentives.MsgCreateGroup": {
                aminoType: string;
                toAmino: (message: _41.MsgCreateGroup) => _41.MsgCreateGroupAmino;
                fromAmino: (object: _41.MsgCreateGroupAmino) => _41.MsgCreateGroup;
            };
        };
        MsgCreateGauge: {
            typeUrl: string;
            encode(message: _41.MsgCreateGauge, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _41.MsgCreateGauge;
            fromPartial(object: Partial<_41.MsgCreateGauge>): _41.MsgCreateGauge;
            fromAmino(object: _41.MsgCreateGaugeAmino): _41.MsgCreateGauge;
            toAmino(message: _41.MsgCreateGauge): _41.MsgCreateGaugeAmino;
            fromAminoMsg(object: _41.MsgCreateGaugeAminoMsg): _41.MsgCreateGauge;
            toAminoMsg(message: _41.MsgCreateGauge): _41.MsgCreateGaugeAminoMsg;
            fromProtoMsg(message: _41.MsgCreateGaugeProtoMsg): _41.MsgCreateGauge;
            toProto(message: _41.MsgCreateGauge): Uint8Array;
            toProtoMsg(message: _41.MsgCreateGauge): _41.MsgCreateGaugeProtoMsg;
        };
        MsgCreateGaugeResponse: {
            typeUrl: string;
            encode(_: _41.MsgCreateGaugeResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(_: any): _41.MsgCreateGaugeResponse;
            fromPartial(_: Partial<_41.MsgCreateGaugeResponse>): _41.MsgCreateGaugeResponse;
            fromAmino(_: _41.MsgCreateGaugeResponseAmino): _41.MsgCreateGaugeResponse;
            toAmino(_: _41.MsgCreateGaugeResponse): _41.MsgCreateGaugeResponseAmino;
            fromAminoMsg(object: _41.MsgCreateGaugeResponseAminoMsg): _41.MsgCreateGaugeResponse;
            toAminoMsg(message: _41.MsgCreateGaugeResponse): _41.MsgCreateGaugeResponseAminoMsg;
            fromProtoMsg(message: _41.MsgCreateGaugeResponseProtoMsg): _41.MsgCreateGaugeResponse;
            toProto(message: _41.MsgCreateGaugeResponse): Uint8Array;
            toProtoMsg(message: _41.MsgCreateGaugeResponse): _41.MsgCreateGaugeResponseProtoMsg;
        };
        MsgAddToGauge: {
            typeUrl: string;
            encode(message: _41.MsgAddToGauge, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _41.MsgAddToGauge;
            fromPartial(object: Partial<_41.MsgAddToGauge>): _41.MsgAddToGauge;
            fromAmino(object: _41.MsgAddToGaugeAmino): _41.MsgAddToGauge;
            toAmino(message: _41.MsgAddToGauge): _41.MsgAddToGaugeAmino;
            fromAminoMsg(object: _41.MsgAddToGaugeAminoMsg): _41.MsgAddToGauge;
            toAminoMsg(message: _41.MsgAddToGauge): _41.MsgAddToGaugeAminoMsg;
            fromProtoMsg(message: _41.MsgAddToGaugeProtoMsg): _41.MsgAddToGauge;
            toProto(message: _41.MsgAddToGauge): Uint8Array;
            toProtoMsg(message: _41.MsgAddToGauge): _41.MsgAddToGaugeProtoMsg;
        };
        MsgAddToGaugeResponse: {
            typeUrl: string;
            encode(_: _41.MsgAddToGaugeResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(_: any): _41.MsgAddToGaugeResponse;
            fromPartial(_: Partial<_41.MsgAddToGaugeResponse>): _41.MsgAddToGaugeResponse;
            fromAmino(_: _41.MsgAddToGaugeResponseAmino): _41.MsgAddToGaugeResponse;
            toAmino(_: _41.MsgAddToGaugeResponse): _41.MsgAddToGaugeResponseAmino;
            fromAminoMsg(object: _41.MsgAddToGaugeResponseAminoMsg): _41.MsgAddToGaugeResponse;
            toAminoMsg(message: _41.MsgAddToGaugeResponse): _41.MsgAddToGaugeResponseAminoMsg;
            fromProtoMsg(message: _41.MsgAddToGaugeResponseProtoMsg): _41.MsgAddToGaugeResponse;
            toProto(message: _41.MsgAddToGaugeResponse): Uint8Array;
            toProtoMsg(message: _41.MsgAddToGaugeResponse): _41.MsgAddToGaugeResponseProtoMsg;
        };
        MsgCreateGroup: {
            typeUrl: string;
            encode(message: _41.MsgCreateGroup, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _41.MsgCreateGroup;
            fromPartial(object: Partial<_41.MsgCreateGroup>): _41.MsgCreateGroup;
            fromAmino(object: _41.MsgCreateGroupAmino): _41.MsgCreateGroup;
            toAmino(message: _41.MsgCreateGroup): _41.MsgCreateGroupAmino;
            fromAminoMsg(object: _41.MsgCreateGroupAminoMsg): _41.MsgCreateGroup;
            toAminoMsg(message: _41.MsgCreateGroup): _41.MsgCreateGroupAminoMsg;
            fromProtoMsg(message: _41.MsgCreateGroupProtoMsg): _41.MsgCreateGroup;
            toProto(message: _41.MsgCreateGroup): Uint8Array;
            toProtoMsg(message: _41.MsgCreateGroup): _41.MsgCreateGroupProtoMsg;
        };
        MsgCreateGroupResponse: {
            typeUrl: string;
            encode(message: _41.MsgCreateGroupResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _41.MsgCreateGroupResponse;
            fromPartial(object: Partial<_41.MsgCreateGroupResponse>): _41.MsgCreateGroupResponse;
            fromAmino(object: _41.MsgCreateGroupResponseAmino): _41.MsgCreateGroupResponse;
            toAmino(message: _41.MsgCreateGroupResponse): _41.MsgCreateGroupResponseAmino;
            fromAminoMsg(object: _41.MsgCreateGroupResponseAminoMsg): _41.MsgCreateGroupResponse;
            toAminoMsg(message: _41.MsgCreateGroupResponse): _41.MsgCreateGroupResponseAminoMsg;
            fromProtoMsg(message: _41.MsgCreateGroupResponseProtoMsg): _41.MsgCreateGroupResponse;
            toProto(message: _41.MsgCreateGroupResponse): Uint8Array;
            toProtoMsg(message: _41.MsgCreateGroupResponse): _41.MsgCreateGroupResponseProtoMsg;
        };
        ModuleToDistributeCoinsRequest: {
            typeUrl: string;
            encode(_: _40.ModuleToDistributeCoinsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(_: any): _40.ModuleToDistributeCoinsRequest;
            fromPartial(_: Partial<_40.ModuleToDistributeCoinsRequest>): _40.ModuleToDistributeCoinsRequest;
            fromAmino(_: _40.ModuleToDistributeCoinsRequestAmino): _40.ModuleToDistributeCoinsRequest;
            toAmino(_: _40.ModuleToDistributeCoinsRequest): _40.ModuleToDistributeCoinsRequestAmino;
            fromAminoMsg(object: _40.ModuleToDistributeCoinsRequestAminoMsg): _40.ModuleToDistributeCoinsRequest;
            toAminoMsg(message: _40.ModuleToDistributeCoinsRequest): _40.ModuleToDistributeCoinsRequestAminoMsg;
            fromProtoMsg(message: _40.ModuleToDistributeCoinsRequestProtoMsg): _40.ModuleToDistributeCoinsRequest;
            toProto(message: _40.ModuleToDistributeCoinsRequest): Uint8Array;
            toProtoMsg(message: _40.ModuleToDistributeCoinsRequest): _40.ModuleToDistributeCoinsRequestProtoMsg;
        };
        ModuleToDistributeCoinsResponse: {
            typeUrl: string;
            encode(message: _40.ModuleToDistributeCoinsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _40.ModuleToDistributeCoinsResponse;
            fromPartial(object: Partial<_40.ModuleToDistributeCoinsResponse>): _40.ModuleToDistributeCoinsResponse;
            fromAmino(object: _40.ModuleToDistributeCoinsResponseAmino): _40.ModuleToDistributeCoinsResponse;
            toAmino(message: _40.ModuleToDistributeCoinsResponse): _40.ModuleToDistributeCoinsResponseAmino;
            fromAminoMsg(object: _40.ModuleToDistributeCoinsResponseAminoMsg): _40.ModuleToDistributeCoinsResponse;
            toAminoMsg(message: _40.ModuleToDistributeCoinsResponse): _40.ModuleToDistributeCoinsResponseAminoMsg;
            fromProtoMsg(message: _40.ModuleToDistributeCoinsResponseProtoMsg): _40.ModuleToDistributeCoinsResponse;
            toProto(message: _40.ModuleToDistributeCoinsResponse): Uint8Array;
            toProtoMsg(message: _40.ModuleToDistributeCoinsResponse): _40.ModuleToDistributeCoinsResponseProtoMsg;
        };
        GaugeByIDRequest: {
            typeUrl: string;
            encode(message: _40.GaugeByIDRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _40.GaugeByIDRequest;
            fromPartial(object: Partial<_40.GaugeByIDRequest>): _40.GaugeByIDRequest;
            fromAmino(object: _40.GaugeByIDRequestAmino): _40.GaugeByIDRequest;
            toAmino(message: _40.GaugeByIDRequest): _40.GaugeByIDRequestAmino;
            fromAminoMsg(object: _40.GaugeByIDRequestAminoMsg): _40.GaugeByIDRequest;
            toAminoMsg(message: _40.GaugeByIDRequest): _40.GaugeByIDRequestAminoMsg;
            fromProtoMsg(message: _40.GaugeByIDRequestProtoMsg): _40.GaugeByIDRequest;
            toProto(message: _40.GaugeByIDRequest): Uint8Array;
            toProtoMsg(message: _40.GaugeByIDRequest): _40.GaugeByIDRequestProtoMsg;
        };
        GaugeByIDResponse: {
            typeUrl: string;
            encode(message: _40.GaugeByIDResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _40.GaugeByIDResponse;
            fromPartial(object: Partial<_40.GaugeByIDResponse>): _40.GaugeByIDResponse;
            fromAmino(object: _40.GaugeByIDResponseAmino): _40.GaugeByIDResponse;
            toAmino(message: _40.GaugeByIDResponse): _40.GaugeByIDResponseAmino;
            fromAminoMsg(object: _40.GaugeByIDResponseAminoMsg): _40.GaugeByIDResponse;
            toAminoMsg(message: _40.GaugeByIDResponse): _40.GaugeByIDResponseAminoMsg;
            fromProtoMsg(message: _40.GaugeByIDResponseProtoMsg): _40.GaugeByIDResponse;
            toProto(message: _40.GaugeByIDResponse): Uint8Array;
            toProtoMsg(message: _40.GaugeByIDResponse): _40.GaugeByIDResponseProtoMsg;
        };
        GaugesRequest: {
            typeUrl: string;
            encode(message: _40.GaugesRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _40.GaugesRequest;
            fromPartial(object: Partial<_40.GaugesRequest>): _40.GaugesRequest;
            fromAmino(object: _40.GaugesRequestAmino): _40.GaugesRequest;
            toAmino(message: _40.GaugesRequest): _40.GaugesRequestAmino;
            fromAminoMsg(object: _40.GaugesRequestAminoMsg): _40.GaugesRequest;
            toAminoMsg(message: _40.GaugesRequest): _40.GaugesRequestAminoMsg;
            fromProtoMsg(message: _40.GaugesRequestProtoMsg): _40.GaugesRequest;
            toProto(message: _40.GaugesRequest): Uint8Array;
            toProtoMsg(message: _40.GaugesRequest): _40.GaugesRequestProtoMsg;
        };
        GaugesResponse: {
            typeUrl: string;
            encode(message: _40.GaugesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _40.GaugesResponse;
            fromPartial(object: Partial<_40.GaugesResponse>): _40.GaugesResponse;
            fromAmino(object: _40.GaugesResponseAmino): _40.GaugesResponse;
            toAmino(message: _40.GaugesResponse): _40.GaugesResponseAmino;
            fromAminoMsg(object: _40.GaugesResponseAminoMsg): _40.GaugesResponse;
            toAminoMsg(message: _40.GaugesResponse): _40.GaugesResponseAminoMsg;
            fromProtoMsg(message: _40.GaugesResponseProtoMsg): _40.GaugesResponse;
            toProto(message: _40.GaugesResponse): Uint8Array;
            toProtoMsg(message: _40.GaugesResponse): _40.GaugesResponseProtoMsg;
        };
        ActiveGaugesRequest: {
            typeUrl: string;
            encode(message: _40.ActiveGaugesRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _40.ActiveGaugesRequest;
            fromPartial(object: Partial<_40.ActiveGaugesRequest>): _40.ActiveGaugesRequest;
            fromAmino(object: _40.ActiveGaugesRequestAmino): _40.ActiveGaugesRequest;
            toAmino(message: _40.ActiveGaugesRequest): _40.ActiveGaugesRequestAmino;
            fromAminoMsg(object: _40.ActiveGaugesRequestAminoMsg): _40.ActiveGaugesRequest;
            toAminoMsg(message: _40.ActiveGaugesRequest): _40.ActiveGaugesRequestAminoMsg;
            fromProtoMsg(message: _40.ActiveGaugesRequestProtoMsg): _40.ActiveGaugesRequest;
            toProto(message: _40.ActiveGaugesRequest): Uint8Array;
            toProtoMsg(message: _40.ActiveGaugesRequest): _40.ActiveGaugesRequestProtoMsg;
        };
        ActiveGaugesResponse: {
            typeUrl: string;
            encode(message: _40.ActiveGaugesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _40.ActiveGaugesResponse;
            fromPartial(object: Partial<_40.ActiveGaugesResponse>): _40.ActiveGaugesResponse;
            fromAmino(object: _40.ActiveGaugesResponseAmino): _40.ActiveGaugesResponse;
            toAmino(message: _40.ActiveGaugesResponse): _40.ActiveGaugesResponseAmino;
            fromAminoMsg(object: _40.ActiveGaugesResponseAminoMsg): _40.ActiveGaugesResponse;
            toAminoMsg(message: _40.ActiveGaugesResponse): _40.ActiveGaugesResponseAminoMsg;
            fromProtoMsg(message: _40.ActiveGaugesResponseProtoMsg): _40.ActiveGaugesResponse;
            toProto(message: _40.ActiveGaugesResponse): Uint8Array;
            toProtoMsg(message: _40.ActiveGaugesResponse): _40.ActiveGaugesResponseProtoMsg;
        };
        ActiveGaugesPerDenomRequest: {
            typeUrl: string;
            encode(message: _40.ActiveGaugesPerDenomRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _40.ActiveGaugesPerDenomRequest;
            fromPartial(object: Partial<_40.ActiveGaugesPerDenomRequest>): _40.ActiveGaugesPerDenomRequest;
            fromAmino(object: _40.ActiveGaugesPerDenomRequestAmino): _40.ActiveGaugesPerDenomRequest;
            toAmino(message: _40.ActiveGaugesPerDenomRequest): _40.ActiveGaugesPerDenomRequestAmino;
            fromAminoMsg(object: _40.ActiveGaugesPerDenomRequestAminoMsg): _40.ActiveGaugesPerDenomRequest;
            toAminoMsg(message: _40.ActiveGaugesPerDenomRequest): _40.ActiveGaugesPerDenomRequestAminoMsg;
            fromProtoMsg(message: _40.ActiveGaugesPerDenomRequestProtoMsg): _40.ActiveGaugesPerDenomRequest;
            toProto(message: _40.ActiveGaugesPerDenomRequest): Uint8Array;
            toProtoMsg(message: _40.ActiveGaugesPerDenomRequest): _40.ActiveGaugesPerDenomRequestProtoMsg;
        };
        ActiveGaugesPerDenomResponse: {
            typeUrl: string;
            encode(message: _40.ActiveGaugesPerDenomResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _40.ActiveGaugesPerDenomResponse;
            fromPartial(object: Partial<_40.ActiveGaugesPerDenomResponse>): _40.ActiveGaugesPerDenomResponse;
            fromAmino(object: _40.ActiveGaugesPerDenomResponseAmino): _40.ActiveGaugesPerDenomResponse;
            toAmino(message: _40.ActiveGaugesPerDenomResponse): _40.ActiveGaugesPerDenomResponseAmino;
            fromAminoMsg(object: _40.ActiveGaugesPerDenomResponseAminoMsg): _40.ActiveGaugesPerDenomResponse;
            toAminoMsg(message: _40.ActiveGaugesPerDenomResponse): _40.ActiveGaugesPerDenomResponseAminoMsg;
            fromProtoMsg(message: _40.ActiveGaugesPerDenomResponseProtoMsg): _40.ActiveGaugesPerDenomResponse;
            toProto(message: _40.ActiveGaugesPerDenomResponse): Uint8Array;
            toProtoMsg(message: _40.ActiveGaugesPerDenomResponse): _40.ActiveGaugesPerDenomResponseProtoMsg;
        };
        UpcomingGaugesRequest: {
            typeUrl: string;
            encode(message: _40.UpcomingGaugesRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _40.UpcomingGaugesRequest;
            fromPartial(object: Partial<_40.UpcomingGaugesRequest>): _40.UpcomingGaugesRequest;
            fromAmino(object: _40.UpcomingGaugesRequestAmino): _40.UpcomingGaugesRequest;
            toAmino(message: _40.UpcomingGaugesRequest): _40.UpcomingGaugesRequestAmino;
            fromAminoMsg(object: _40.UpcomingGaugesRequestAminoMsg): _40.UpcomingGaugesRequest;
            toAminoMsg(message: _40.UpcomingGaugesRequest): _40.UpcomingGaugesRequestAminoMsg;
            fromProtoMsg(message: _40.UpcomingGaugesRequestProtoMsg): _40.UpcomingGaugesRequest;
            toProto(message: _40.UpcomingGaugesRequest): Uint8Array;
            toProtoMsg(message: _40.UpcomingGaugesRequest): _40.UpcomingGaugesRequestProtoMsg;
        };
        UpcomingGaugesResponse: {
            typeUrl: string;
            encode(message: _40.UpcomingGaugesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _40.UpcomingGaugesResponse;
            fromPartial(object: Partial<_40.UpcomingGaugesResponse>): _40.UpcomingGaugesResponse;
            fromAmino(object: _40.UpcomingGaugesResponseAmino): _40.UpcomingGaugesResponse;
            toAmino(message: _40.UpcomingGaugesResponse): _40.UpcomingGaugesResponseAmino;
            fromAminoMsg(object: _40.UpcomingGaugesResponseAminoMsg): _40.UpcomingGaugesResponse;
            toAminoMsg(message: _40.UpcomingGaugesResponse): _40.UpcomingGaugesResponseAminoMsg;
            fromProtoMsg(message: _40.UpcomingGaugesResponseProtoMsg): _40.UpcomingGaugesResponse;
            toProto(message: _40.UpcomingGaugesResponse): Uint8Array;
            toProtoMsg(message: _40.UpcomingGaugesResponse): _40.UpcomingGaugesResponseProtoMsg;
        };
        UpcomingGaugesPerDenomRequest: {
            typeUrl: string;
            encode(message: _40.UpcomingGaugesPerDenomRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _40.UpcomingGaugesPerDenomRequest;
            fromPartial(object: Partial<_40.UpcomingGaugesPerDenomRequest>): _40.UpcomingGaugesPerDenomRequest;
            fromAmino(object: _40.UpcomingGaugesPerDenomRequestAmino): _40.UpcomingGaugesPerDenomRequest;
            toAmino(message: _40.UpcomingGaugesPerDenomRequest): _40.UpcomingGaugesPerDenomRequestAmino;
            fromAminoMsg(object: _40.UpcomingGaugesPerDenomRequestAminoMsg): _40.UpcomingGaugesPerDenomRequest;
            toAminoMsg(message: _40.UpcomingGaugesPerDenomRequest): _40.UpcomingGaugesPerDenomRequestAminoMsg;
            fromProtoMsg(message: _40.UpcomingGaugesPerDenomRequestProtoMsg): _40.UpcomingGaugesPerDenomRequest;
            toProto(message: _40.UpcomingGaugesPerDenomRequest): Uint8Array;
            toProtoMsg(message: _40.UpcomingGaugesPerDenomRequest): _40.UpcomingGaugesPerDenomRequestProtoMsg;
        };
        UpcomingGaugesPerDenomResponse: {
            typeUrl: string;
            encode(message: _40.UpcomingGaugesPerDenomResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _40.UpcomingGaugesPerDenomResponse;
            fromPartial(object: Partial<_40.UpcomingGaugesPerDenomResponse>): _40.UpcomingGaugesPerDenomResponse;
            fromAmino(object: _40.UpcomingGaugesPerDenomResponseAmino): _40.UpcomingGaugesPerDenomResponse;
            toAmino(message: _40.UpcomingGaugesPerDenomResponse): _40.UpcomingGaugesPerDenomResponseAmino;
            fromAminoMsg(object: _40.UpcomingGaugesPerDenomResponseAminoMsg): _40.UpcomingGaugesPerDenomResponse;
            toAminoMsg(message: _40.UpcomingGaugesPerDenomResponse): _40.UpcomingGaugesPerDenomResponseAminoMsg;
            fromProtoMsg(message: _40.UpcomingGaugesPerDenomResponseProtoMsg): _40.UpcomingGaugesPerDenomResponse;
            toProto(message: _40.UpcomingGaugesPerDenomResponse): Uint8Array;
            toProtoMsg(message: _40.UpcomingGaugesPerDenomResponse): _40.UpcomingGaugesPerDenomResponseProtoMsg;
        };
        RewardsEstRequest: {
            typeUrl: string;
            encode(message: _40.RewardsEstRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _40.RewardsEstRequest;
            fromPartial(object: Partial<_40.RewardsEstRequest>): _40.RewardsEstRequest;
            fromAmino(object: _40.RewardsEstRequestAmino): _40.RewardsEstRequest;
            toAmino(message: _40.RewardsEstRequest): _40.RewardsEstRequestAmino;
            fromAminoMsg(object: _40.RewardsEstRequestAminoMsg): _40.RewardsEstRequest;
            toAminoMsg(message: _40.RewardsEstRequest): _40.RewardsEstRequestAminoMsg;
            fromProtoMsg(message: _40.RewardsEstRequestProtoMsg): _40.RewardsEstRequest;
            toProto(message: _40.RewardsEstRequest): Uint8Array;
            toProtoMsg(message: _40.RewardsEstRequest): _40.RewardsEstRequestProtoMsg;
        };
        RewardsEstResponse: {
            typeUrl: string;
            encode(message: _40.RewardsEstResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _40.RewardsEstResponse;
            fromPartial(object: Partial<_40.RewardsEstResponse>): _40.RewardsEstResponse;
            fromAmino(object: _40.RewardsEstResponseAmino): _40.RewardsEstResponse;
            toAmino(message: _40.RewardsEstResponse): _40.RewardsEstResponseAmino;
            fromAminoMsg(object: _40.RewardsEstResponseAminoMsg): _40.RewardsEstResponse;
            toAminoMsg(message: _40.RewardsEstResponse): _40.RewardsEstResponseAminoMsg;
            fromProtoMsg(message: _40.RewardsEstResponseProtoMsg): _40.RewardsEstResponse;
            toProto(message: _40.RewardsEstResponse): Uint8Array;
            toProtoMsg(message: _40.RewardsEstResponse): _40.RewardsEstResponseProtoMsg;
        };
        QueryLockableDurationsRequest: {
            typeUrl: string;
            encode(_: _40.QueryLockableDurationsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(_: any): _40.QueryLockableDurationsRequest;
            fromPartial(_: Partial<_40.QueryLockableDurationsRequest>): _40.QueryLockableDurationsRequest;
            fromAmino(_: _40.QueryLockableDurationsRequestAmino): _40.QueryLockableDurationsRequest;
            toAmino(_: _40.QueryLockableDurationsRequest): _40.QueryLockableDurationsRequestAmino;
            fromAminoMsg(object: _40.QueryLockableDurationsRequestAminoMsg): _40.QueryLockableDurationsRequest;
            toAminoMsg(message: _40.QueryLockableDurationsRequest): _40.QueryLockableDurationsRequestAminoMsg;
            fromProtoMsg(message: _40.QueryLockableDurationsRequestProtoMsg): _40.QueryLockableDurationsRequest;
            toProto(message: _40.QueryLockableDurationsRequest): Uint8Array;
            toProtoMsg(message: _40.QueryLockableDurationsRequest): _40.QueryLockableDurationsRequestProtoMsg;
        };
        QueryLockableDurationsResponse: {
            typeUrl: string;
            encode(message: _40.QueryLockableDurationsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _40.QueryLockableDurationsResponse;
            fromPartial(object: Partial<_40.QueryLockableDurationsResponse>): _40.QueryLockableDurationsResponse;
            fromAmino(object: _40.QueryLockableDurationsResponseAmino): _40.QueryLockableDurationsResponse;
            toAmino(message: _40.QueryLockableDurationsResponse): _40.QueryLockableDurationsResponseAmino;
            fromAminoMsg(object: _40.QueryLockableDurationsResponseAminoMsg): _40.QueryLockableDurationsResponse;
            toAminoMsg(message: _40.QueryLockableDurationsResponse): _40.QueryLockableDurationsResponseAminoMsg;
            fromProtoMsg(message: _40.QueryLockableDurationsResponseProtoMsg): _40.QueryLockableDurationsResponse;
            toProto(message: _40.QueryLockableDurationsResponse): Uint8Array;
            toProtoMsg(message: _40.QueryLockableDurationsResponse): _40.QueryLockableDurationsResponseProtoMsg;
        };
        QueryAllGroupsRequest: {
            typeUrl: string;
            encode(_: _40.QueryAllGroupsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(_: any): _40.QueryAllGroupsRequest;
            fromPartial(_: Partial<_40.QueryAllGroupsRequest>): _40.QueryAllGroupsRequest;
            fromAmino(_: _40.QueryAllGroupsRequestAmino): _40.QueryAllGroupsRequest;
            toAmino(_: _40.QueryAllGroupsRequest): _40.QueryAllGroupsRequestAmino;
            fromAminoMsg(object: _40.QueryAllGroupsRequestAminoMsg): _40.QueryAllGroupsRequest;
            toAminoMsg(message: _40.QueryAllGroupsRequest): _40.QueryAllGroupsRequestAminoMsg;
            fromProtoMsg(message: _40.QueryAllGroupsRequestProtoMsg): _40.QueryAllGroupsRequest;
            toProto(message: _40.QueryAllGroupsRequest): Uint8Array;
            toProtoMsg(message: _40.QueryAllGroupsRequest): _40.QueryAllGroupsRequestProtoMsg;
        };
        QueryAllGroupsResponse: {
            typeUrl: string;
            encode(message: _40.QueryAllGroupsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _40.QueryAllGroupsResponse;
            fromPartial(object: Partial<_40.QueryAllGroupsResponse>): _40.QueryAllGroupsResponse;
            fromAmino(object: _40.QueryAllGroupsResponseAmino): _40.QueryAllGroupsResponse;
            toAmino(message: _40.QueryAllGroupsResponse): _40.QueryAllGroupsResponseAmino;
            fromAminoMsg(object: _40.QueryAllGroupsResponseAminoMsg): _40.QueryAllGroupsResponse;
            toAminoMsg(message: _40.QueryAllGroupsResponse): _40.QueryAllGroupsResponseAminoMsg;
            fromProtoMsg(message: _40.QueryAllGroupsResponseProtoMsg): _40.QueryAllGroupsResponse;
            toProto(message: _40.QueryAllGroupsResponse): Uint8Array;
            toProtoMsg(message: _40.QueryAllGroupsResponse): _40.QueryAllGroupsResponseProtoMsg;
        };
        QueryAllGroupsGaugesRequest: {
            typeUrl: string;
            encode(_: _40.QueryAllGroupsGaugesRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(_: any): _40.QueryAllGroupsGaugesRequest;
            fromPartial(_: Partial<_40.QueryAllGroupsGaugesRequest>): _40.QueryAllGroupsGaugesRequest;
            fromAmino(_: _40.QueryAllGroupsGaugesRequestAmino): _40.QueryAllGroupsGaugesRequest;
            toAmino(_: _40.QueryAllGroupsGaugesRequest): _40.QueryAllGroupsGaugesRequestAmino;
            fromAminoMsg(object: _40.QueryAllGroupsGaugesRequestAminoMsg): _40.QueryAllGroupsGaugesRequest;
            toAminoMsg(message: _40.QueryAllGroupsGaugesRequest): _40.QueryAllGroupsGaugesRequestAminoMsg;
            fromProtoMsg(message: _40.QueryAllGroupsGaugesRequestProtoMsg): _40.QueryAllGroupsGaugesRequest;
            toProto(message: _40.QueryAllGroupsGaugesRequest): Uint8Array;
            toProtoMsg(message: _40.QueryAllGroupsGaugesRequest): _40.QueryAllGroupsGaugesRequestProtoMsg;
        };
        QueryAllGroupsGaugesResponse: {
            typeUrl: string;
            encode(message: _40.QueryAllGroupsGaugesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _40.QueryAllGroupsGaugesResponse;
            fromPartial(object: Partial<_40.QueryAllGroupsGaugesResponse>): _40.QueryAllGroupsGaugesResponse;
            fromAmino(object: _40.QueryAllGroupsGaugesResponseAmino): _40.QueryAllGroupsGaugesResponse;
            toAmino(message: _40.QueryAllGroupsGaugesResponse): _40.QueryAllGroupsGaugesResponseAmino;
            fromAminoMsg(object: _40.QueryAllGroupsGaugesResponseAminoMsg): _40.QueryAllGroupsGaugesResponse;
            toAminoMsg(message: _40.QueryAllGroupsGaugesResponse): _40.QueryAllGroupsGaugesResponseAminoMsg;
            fromProtoMsg(message: _40.QueryAllGroupsGaugesResponseProtoMsg): _40.QueryAllGroupsGaugesResponse;
            toProto(message: _40.QueryAllGroupsGaugesResponse): Uint8Array;
            toProtoMsg(message: _40.QueryAllGroupsGaugesResponse): _40.QueryAllGroupsGaugesResponseProtoMsg;
        };
        QueryAllGroupsWithGaugeRequest: {
            typeUrl: string;
            encode(_: _40.QueryAllGroupsWithGaugeRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(_: any): _40.QueryAllGroupsWithGaugeRequest;
            fromPartial(_: Partial<_40.QueryAllGroupsWithGaugeRequest>): _40.QueryAllGroupsWithGaugeRequest;
            fromAmino(_: _40.QueryAllGroupsWithGaugeRequestAmino): _40.QueryAllGroupsWithGaugeRequest;
            toAmino(_: _40.QueryAllGroupsWithGaugeRequest): _40.QueryAllGroupsWithGaugeRequestAmino;
            fromAminoMsg(object: _40.QueryAllGroupsWithGaugeRequestAminoMsg): _40.QueryAllGroupsWithGaugeRequest;
            toAminoMsg(message: _40.QueryAllGroupsWithGaugeRequest): _40.QueryAllGroupsWithGaugeRequestAminoMsg;
            fromProtoMsg(message: _40.QueryAllGroupsWithGaugeRequestProtoMsg): _40.QueryAllGroupsWithGaugeRequest;
            toProto(message: _40.QueryAllGroupsWithGaugeRequest): Uint8Array;
            toProtoMsg(message: _40.QueryAllGroupsWithGaugeRequest): _40.QueryAllGroupsWithGaugeRequestProtoMsg;
        };
        QueryAllGroupsWithGaugeResponse: {
            typeUrl: string;
            encode(message: _40.QueryAllGroupsWithGaugeResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _40.QueryAllGroupsWithGaugeResponse;
            fromPartial(object: Partial<_40.QueryAllGroupsWithGaugeResponse>): _40.QueryAllGroupsWithGaugeResponse;
            fromAmino(object: _40.QueryAllGroupsWithGaugeResponseAmino): _40.QueryAllGroupsWithGaugeResponse;
            toAmino(message: _40.QueryAllGroupsWithGaugeResponse): _40.QueryAllGroupsWithGaugeResponseAmino;
            fromAminoMsg(object: _40.QueryAllGroupsWithGaugeResponseAminoMsg): _40.QueryAllGroupsWithGaugeResponse;
            toAminoMsg(message: _40.QueryAllGroupsWithGaugeResponse): _40.QueryAllGroupsWithGaugeResponseAminoMsg;
            fromProtoMsg(message: _40.QueryAllGroupsWithGaugeResponseProtoMsg): _40.QueryAllGroupsWithGaugeResponse;
            toProto(message: _40.QueryAllGroupsWithGaugeResponse): Uint8Array;
            toProtoMsg(message: _40.QueryAllGroupsWithGaugeResponse): _40.QueryAllGroupsWithGaugeResponseProtoMsg;
        };
        QueryGroupByGroupGaugeIDRequest: {
            typeUrl: string;
            encode(message: _40.QueryGroupByGroupGaugeIDRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _40.QueryGroupByGroupGaugeIDRequest;
            fromPartial(object: Partial<_40.QueryGroupByGroupGaugeIDRequest>): _40.QueryGroupByGroupGaugeIDRequest;
            fromAmino(object: _40.QueryGroupByGroupGaugeIDRequestAmino): _40.QueryGroupByGroupGaugeIDRequest;
            toAmino(message: _40.QueryGroupByGroupGaugeIDRequest): _40.QueryGroupByGroupGaugeIDRequestAmino;
            fromAminoMsg(object: _40.QueryGroupByGroupGaugeIDRequestAminoMsg): _40.QueryGroupByGroupGaugeIDRequest;
            toAminoMsg(message: _40.QueryGroupByGroupGaugeIDRequest): _40.QueryGroupByGroupGaugeIDRequestAminoMsg;
            fromProtoMsg(message: _40.QueryGroupByGroupGaugeIDRequestProtoMsg): _40.QueryGroupByGroupGaugeIDRequest;
            toProto(message: _40.QueryGroupByGroupGaugeIDRequest): Uint8Array;
            toProtoMsg(message: _40.QueryGroupByGroupGaugeIDRequest): _40.QueryGroupByGroupGaugeIDRequestProtoMsg;
        };
        QueryGroupByGroupGaugeIDResponse: {
            typeUrl: string;
            encode(message: _40.QueryGroupByGroupGaugeIDResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _40.QueryGroupByGroupGaugeIDResponse;
            fromPartial(object: Partial<_40.QueryGroupByGroupGaugeIDResponse>): _40.QueryGroupByGroupGaugeIDResponse;
            fromAmino(object: _40.QueryGroupByGroupGaugeIDResponseAmino): _40.QueryGroupByGroupGaugeIDResponse;
            toAmino(message: _40.QueryGroupByGroupGaugeIDResponse): _40.QueryGroupByGroupGaugeIDResponseAmino;
            fromAminoMsg(object: _40.QueryGroupByGroupGaugeIDResponseAminoMsg): _40.QueryGroupByGroupGaugeIDResponse;
            toAminoMsg(message: _40.QueryGroupByGroupGaugeIDResponse): _40.QueryGroupByGroupGaugeIDResponseAminoMsg;
            fromProtoMsg(message: _40.QueryGroupByGroupGaugeIDResponseProtoMsg): _40.QueryGroupByGroupGaugeIDResponse;
            toProto(message: _40.QueryGroupByGroupGaugeIDResponse): Uint8Array;
            toProtoMsg(message: _40.QueryGroupByGroupGaugeIDResponse): _40.QueryGroupByGroupGaugeIDResponseProtoMsg;
        };
        QueryCurrentWeightByGroupGaugeIDRequest: {
            typeUrl: string;
            encode(message: _40.QueryCurrentWeightByGroupGaugeIDRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _40.QueryCurrentWeightByGroupGaugeIDRequest;
            fromPartial(object: Partial<_40.QueryCurrentWeightByGroupGaugeIDRequest>): _40.QueryCurrentWeightByGroupGaugeIDRequest;
            fromAmino(object: _40.QueryCurrentWeightByGroupGaugeIDRequestAmino): _40.QueryCurrentWeightByGroupGaugeIDRequest;
            toAmino(message: _40.QueryCurrentWeightByGroupGaugeIDRequest): _40.QueryCurrentWeightByGroupGaugeIDRequestAmino;
            fromAminoMsg(object: _40.QueryCurrentWeightByGroupGaugeIDRequestAminoMsg): _40.QueryCurrentWeightByGroupGaugeIDRequest;
            toAminoMsg(message: _40.QueryCurrentWeightByGroupGaugeIDRequest): _40.QueryCurrentWeightByGroupGaugeIDRequestAminoMsg;
            fromProtoMsg(message: _40.QueryCurrentWeightByGroupGaugeIDRequestProtoMsg): _40.QueryCurrentWeightByGroupGaugeIDRequest;
            toProto(message: _40.QueryCurrentWeightByGroupGaugeIDRequest): Uint8Array;
            toProtoMsg(message: _40.QueryCurrentWeightByGroupGaugeIDRequest): _40.QueryCurrentWeightByGroupGaugeIDRequestProtoMsg;
        };
        QueryCurrentWeightByGroupGaugeIDResponse: {
            typeUrl: string;
            encode(message: _40.QueryCurrentWeightByGroupGaugeIDResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _40.QueryCurrentWeightByGroupGaugeIDResponse;
            fromPartial(object: Partial<_40.QueryCurrentWeightByGroupGaugeIDResponse>): _40.QueryCurrentWeightByGroupGaugeIDResponse;
            fromAmino(object: _40.QueryCurrentWeightByGroupGaugeIDResponseAmino): _40.QueryCurrentWeightByGroupGaugeIDResponse;
            toAmino(message: _40.QueryCurrentWeightByGroupGaugeIDResponse): _40.QueryCurrentWeightByGroupGaugeIDResponseAmino;
            fromAminoMsg(object: _40.QueryCurrentWeightByGroupGaugeIDResponseAminoMsg): _40.QueryCurrentWeightByGroupGaugeIDResponse;
            toAminoMsg(message: _40.QueryCurrentWeightByGroupGaugeIDResponse): _40.QueryCurrentWeightByGroupGaugeIDResponseAminoMsg;
            fromProtoMsg(message: _40.QueryCurrentWeightByGroupGaugeIDResponseProtoMsg): _40.QueryCurrentWeightByGroupGaugeIDResponse;
            toProto(message: _40.QueryCurrentWeightByGroupGaugeIDResponse): Uint8Array;
            toProtoMsg(message: _40.QueryCurrentWeightByGroupGaugeIDResponse): _40.QueryCurrentWeightByGroupGaugeIDResponseProtoMsg;
        };
        GaugeWeight: {
            typeUrl: string;
            encode(message: _40.GaugeWeight, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _40.GaugeWeight;
            fromPartial(object: Partial<_40.GaugeWeight>): _40.GaugeWeight;
            fromAmino(object: _40.GaugeWeightAmino): _40.GaugeWeight;
            toAmino(message: _40.GaugeWeight): _40.GaugeWeightAmino;
            fromAminoMsg(object: _40.GaugeWeightAminoMsg): _40.GaugeWeight;
            toAminoMsg(message: _40.GaugeWeight): _40.GaugeWeightAminoMsg;
            fromProtoMsg(message: _40.GaugeWeightProtoMsg): _40.GaugeWeight;
            toProto(message: _40.GaugeWeight): Uint8Array;
            toProtoMsg(message: _40.GaugeWeight): _40.GaugeWeightProtoMsg;
        };
        Params: {
            typeUrl: string;
            encode(message: _39.Params, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _39.Params;
            fromPartial(object: Partial<_39.Params>): _39.Params;
            fromAmino(object: _39.ParamsAmino): _39.Params;
            toAmino(message: _39.Params): _39.ParamsAmino;
            fromAminoMsg(object: _39.ParamsAminoMsg): _39.Params;
            toAminoMsg(message: _39.Params): _39.ParamsAminoMsg;
            fromProtoMsg(message: _39.ParamsProtoMsg): _39.Params;
            toProto(message: _39.Params): Uint8Array;
            toProtoMsg(message: _39.Params): _39.ParamsProtoMsg;
        };
        splittingPolicyFromJSON(object: any): _38.SplittingPolicy;
        splittingPolicyToJSON(object: _38.SplittingPolicy): string;
        SplittingPolicy: typeof _38.SplittingPolicy;
        SplittingPolicySDKType: typeof _38.SplittingPolicy;
        SplittingPolicyAmino: typeof _38.SplittingPolicy;
        InternalGaugeInfo: {
            typeUrl: string;
            encode(message: _38.InternalGaugeInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _38.InternalGaugeInfo;
            fromPartial(object: Partial<_38.InternalGaugeInfo>): _38.InternalGaugeInfo;
            fromAmino(object: _38.InternalGaugeInfoAmino): _38.InternalGaugeInfo;
            toAmino(message: _38.InternalGaugeInfo): _38.InternalGaugeInfoAmino;
            fromAminoMsg(object: _38.InternalGaugeInfoAminoMsg): _38.InternalGaugeInfo;
            toAminoMsg(message: _38.InternalGaugeInfo): _38.InternalGaugeInfoAminoMsg;
            fromProtoMsg(message: _38.InternalGaugeInfoProtoMsg): _38.InternalGaugeInfo;
            toProto(message: _38.InternalGaugeInfo): Uint8Array;
            toProtoMsg(message: _38.InternalGaugeInfo): _38.InternalGaugeInfoProtoMsg;
        };
        InternalGaugeRecord: {
            typeUrl: string;
            encode(message: _38.InternalGaugeRecord, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _38.InternalGaugeRecord;
            fromPartial(object: Partial<_38.InternalGaugeRecord>): _38.InternalGaugeRecord;
            fromAmino(object: _38.InternalGaugeRecordAmino): _38.InternalGaugeRecord;
            toAmino(message: _38.InternalGaugeRecord): _38.InternalGaugeRecordAmino;
            fromAminoMsg(object: _38.InternalGaugeRecordAminoMsg): _38.InternalGaugeRecord;
            toAminoMsg(message: _38.InternalGaugeRecord): _38.InternalGaugeRecordAminoMsg;
            fromProtoMsg(message: _38.InternalGaugeRecordProtoMsg): _38.InternalGaugeRecord;
            toProto(message: _38.InternalGaugeRecord): Uint8Array;
            toProtoMsg(message: _38.InternalGaugeRecord): _38.InternalGaugeRecordProtoMsg;
        };
        Group: {
            typeUrl: string;
            encode(message: _38.Group, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _38.Group;
            fromPartial(object: Partial<_38.Group>): _38.Group;
            fromAmino(object: _38.GroupAmino): _38.Group;
            toAmino(message: _38.Group): _38.GroupAmino;
            fromAminoMsg(object: _38.GroupAminoMsg): _38.Group;
            toAminoMsg(message: _38.Group): _38.GroupAminoMsg;
            fromProtoMsg(message: _38.GroupProtoMsg): _38.Group;
            toProto(message: _38.Group): Uint8Array;
            toProtoMsg(message: _38.Group): _38.GroupProtoMsg;
        };
        CreateGroup: {
            typeUrl: string;
            encode(message: _38.CreateGroup, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _38.CreateGroup;
            fromPartial(object: Partial<_38.CreateGroup>): _38.CreateGroup;
            fromAmino(object: _38.CreateGroupAmino): _38.CreateGroup;
            toAmino(message: _38.CreateGroup): _38.CreateGroupAmino;
            fromAminoMsg(object: _38.CreateGroupAminoMsg): _38.CreateGroup;
            toAminoMsg(message: _38.CreateGroup): _38.CreateGroupAminoMsg;
            fromProtoMsg(message: _38.CreateGroupProtoMsg): _38.CreateGroup;
            toProto(message: _38.CreateGroup): Uint8Array;
            toProtoMsg(message: _38.CreateGroup): _38.CreateGroupProtoMsg;
        };
        GroupsWithGauge: {
            typeUrl: string;
            encode(message: _38.GroupsWithGauge, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _38.GroupsWithGauge;
            fromPartial(object: Partial<_38.GroupsWithGauge>): _38.GroupsWithGauge;
            fromAmino(object: _38.GroupsWithGaugeAmino): _38.GroupsWithGauge;
            toAmino(message: _38.GroupsWithGauge): _38.GroupsWithGaugeAmino;
            fromAminoMsg(object: _38.GroupsWithGaugeAminoMsg): _38.GroupsWithGauge;
            toAminoMsg(message: _38.GroupsWithGauge): _38.GroupsWithGaugeAminoMsg;
            fromProtoMsg(message: _38.GroupsWithGaugeProtoMsg): _38.GroupsWithGauge;
            toProto(message: _38.GroupsWithGauge): Uint8Array;
            toProtoMsg(message: _38.GroupsWithGauge): _38.GroupsWithGaugeProtoMsg;
        };
        CreateGroupsProposal: {
            typeUrl: string;
            encode(message: _37.CreateGroupsProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _37.CreateGroupsProposal;
            fromPartial(object: Partial<_37.CreateGroupsProposal>): _37.CreateGroupsProposal;
            fromAmino(object: _37.CreateGroupsProposalAmino): _37.CreateGroupsProposal;
            toAmino(message: _37.CreateGroupsProposal): _37.CreateGroupsProposalAmino;
            fromAminoMsg(object: _37.CreateGroupsProposalAminoMsg): _37.CreateGroupsProposal;
            toAminoMsg(message: _37.CreateGroupsProposal): _37.CreateGroupsProposalAminoMsg;
            fromProtoMsg(message: _37.CreateGroupsProposalProtoMsg): _37.CreateGroupsProposal;
            toProto(message: _37.CreateGroupsProposal): Uint8Array;
            toProtoMsg(message: _37.CreateGroupsProposal): _37.CreateGroupsProposalProtoMsg;
        };
        GenesisState: {
            typeUrl: string;
            encode(message: _36.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _36.GenesisState;
            fromPartial(object: Partial<_36.GenesisState>): _36.GenesisState;
            fromAmino(object: _36.GenesisStateAmino): _36.GenesisState;
            toAmino(message: _36.GenesisState): _36.GenesisStateAmino;
            fromAminoMsg(object: _36.GenesisStateAminoMsg): _36.GenesisState;
            toAminoMsg(message: _36.GenesisState): _36.GenesisStateAminoMsg;
            fromProtoMsg(message: _36.GenesisStateProtoMsg): _36.GenesisState;
            toProto(message: _36.GenesisState): Uint8Array;
            toProtoMsg(message: _36.GenesisState): _36.GenesisStateProtoMsg;
        };
        Gauge: {
            typeUrl: string;
            encode(message: _35.Gauge, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _35.Gauge;
            fromPartial(object: Partial<_35.Gauge>): _35.Gauge;
            fromAmino(object: _35.GaugeAmino): _35.Gauge;
            toAmino(message: _35.Gauge): _35.GaugeAmino;
            fromAminoMsg(object: _35.GaugeAminoMsg): _35.Gauge;
            toAminoMsg(message: _35.Gauge): _35.GaugeAminoMsg;
            fromProtoMsg(message: _35.GaugeProtoMsg): _35.Gauge;
            toProto(message: _35.Gauge): Uint8Array;
            toProtoMsg(message: _35.Gauge): _35.GaugeProtoMsg;
        };
        LockableDurationsInfo: {
            typeUrl: string;
            encode(message: _35.LockableDurationsInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _35.LockableDurationsInfo;
            fromPartial(object: Partial<_35.LockableDurationsInfo>): _35.LockableDurationsInfo;
            fromAmino(object: _35.LockableDurationsInfoAmino): _35.LockableDurationsInfo;
            toAmino(message: _35.LockableDurationsInfo): _35.LockableDurationsInfoAmino;
            fromAminoMsg(object: _35.LockableDurationsInfoAminoMsg): _35.LockableDurationsInfo;
            toAminoMsg(message: _35.LockableDurationsInfo): _35.LockableDurationsInfoAminoMsg;
            fromProtoMsg(message: _35.LockableDurationsInfoProtoMsg): _35.LockableDurationsInfo;
            toProto(message: _35.LockableDurationsInfo): Uint8Array;
            toProtoMsg(message: _35.LockableDurationsInfo): _35.LockableDurationsInfoProtoMsg;
        };
    };
    const lockup: {
        MsgClientImpl: typeof _326.MsgClientImpl;
        QueryClientImpl: typeof _308.QueryClientImpl;
        createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
            moduleBalance(request?: _45.ModuleBalanceRequest): Promise<_45.ModuleBalanceResponse>;
            moduleLockedAmount(request?: _45.ModuleLockedAmountRequest): Promise<_45.ModuleLockedAmountResponse>;
            accountUnlockableCoins(request: _45.AccountUnlockableCoinsRequest): Promise<_45.AccountUnlockableCoinsResponse>;
            accountUnlockingCoins(request: _45.AccountUnlockingCoinsRequest): Promise<_45.AccountUnlockingCoinsResponse>;
            accountLockedCoins(request: _45.AccountLockedCoinsRequest): Promise<_45.AccountLockedCoinsResponse>;
            accountLockedPastTime(request: _45.AccountLockedPastTimeRequest): Promise<_45.AccountLockedPastTimeResponse>;
            accountLockedPastTimeNotUnlockingOnly(request: _45.AccountLockedPastTimeNotUnlockingOnlyRequest): Promise<_45.AccountLockedPastTimeNotUnlockingOnlyResponse>;
            accountUnlockedBeforeTime(request: _45.AccountUnlockedBeforeTimeRequest): Promise<_45.AccountUnlockedBeforeTimeResponse>;
            accountLockedPastTimeDenom(request: _45.AccountLockedPastTimeDenomRequest): Promise<_45.AccountLockedPastTimeDenomResponse>;
            lockedDenom(request: _45.LockedDenomRequest): Promise<_45.LockedDenomResponse>;
            lockedByID(request: _45.LockedRequest): Promise<_45.LockedResponse>;
            lockRewardReceiver(request: _45.LockRewardReceiverRequest): Promise<_45.LockRewardReceiverResponse>;
            nextLockID(request?: _45.NextLockIDRequest): Promise<_45.NextLockIDResponse>;
            syntheticLockupsByLockupID(request: _45.SyntheticLockupsByLockupIDRequest): Promise<_45.SyntheticLockupsByLockupIDResponse>;
            syntheticLockupByLockupID(request: _45.SyntheticLockupByLockupIDRequest): Promise<_45.SyntheticLockupByLockupIDResponse>;
            accountLockedLongerDuration(request: _45.AccountLockedLongerDurationRequest): Promise<_45.AccountLockedLongerDurationResponse>;
            accountLockedDuration(request: _45.AccountLockedDurationRequest): Promise<_45.AccountLockedDurationResponse>;
            accountLockedLongerDurationNotUnlockingOnly(request: _45.AccountLockedLongerDurationNotUnlockingOnlyRequest): Promise<_45.AccountLockedLongerDurationNotUnlockingOnlyResponse>;
            accountLockedLongerDurationDenom(request: _45.AccountLockedLongerDurationDenomRequest): Promise<_45.AccountLockedLongerDurationDenomResponse>;
            params(request?: _45.QueryParamsRequest): Promise<_45.QueryParamsResponse>;
        };
        LCDQueryClient: typeof _289.LCDQueryClient;
        registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
        load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
        MessageComposer: {
            encoded: {
                lockTokens(value: _46.MsgLockTokens): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                beginUnlockingAll(value: _46.MsgBeginUnlockingAll): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                beginUnlocking(value: _46.MsgBeginUnlocking): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                extendLockup(value: _46.MsgExtendLockup): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                forceUnlock(value: _46.MsgForceUnlock): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                setRewardReceiverAddress(value: _46.MsgSetRewardReceiverAddress): {
                    typeUrl: string;
                    value: Uint8Array;
                };
            };
            withTypeUrl: {
                lockTokens(value: _46.MsgLockTokens): {
                    typeUrl: string;
                    value: _46.MsgLockTokens;
                };
                beginUnlockingAll(value: _46.MsgBeginUnlockingAll): {
                    typeUrl: string;
                    value: _46.MsgBeginUnlockingAll;
                };
                beginUnlocking(value: _46.MsgBeginUnlocking): {
                    typeUrl: string;
                    value: _46.MsgBeginUnlocking;
                };
                extendLockup(value: _46.MsgExtendLockup): {
                    typeUrl: string;
                    value: _46.MsgExtendLockup;
                };
                forceUnlock(value: _46.MsgForceUnlock): {
                    typeUrl: string;
                    value: _46.MsgForceUnlock;
                };
                setRewardReceiverAddress(value: _46.MsgSetRewardReceiverAddress): {
                    typeUrl: string;
                    value: _46.MsgSetRewardReceiverAddress;
                };
            };
            fromJSON: {
                lockTokens(value: any): {
                    typeUrl: string;
                    value: _46.MsgLockTokens;
                };
                beginUnlockingAll(value: any): {
                    typeUrl: string;
                    value: _46.MsgBeginUnlockingAll;
                };
                beginUnlocking(value: any): {
                    typeUrl: string;
                    value: _46.MsgBeginUnlocking;
                };
                extendLockup(value: any): {
                    typeUrl: string;
                    value: _46.MsgExtendLockup;
                };
                forceUnlock(value: any): {
                    typeUrl: string;
                    value: _46.MsgForceUnlock;
                };
                setRewardReceiverAddress(value: any): {
                    typeUrl: string;
                    value: _46.MsgSetRewardReceiverAddress;
                };
            };
            fromPartial: {
                lockTokens(value: _46.MsgLockTokens): {
                    typeUrl: string;
                    value: _46.MsgLockTokens;
                };
                beginUnlockingAll(value: _46.MsgBeginUnlockingAll): {
                    typeUrl: string;
                    value: _46.MsgBeginUnlockingAll;
                };
                beginUnlocking(value: _46.MsgBeginUnlocking): {
                    typeUrl: string;
                    value: _46.MsgBeginUnlocking;
                };
                extendLockup(value: _46.MsgExtendLockup): {
                    typeUrl: string;
                    value: _46.MsgExtendLockup;
                };
                forceUnlock(value: _46.MsgForceUnlock): {
                    typeUrl: string;
                    value: _46.MsgForceUnlock;
                };
                setRewardReceiverAddress(value: _46.MsgSetRewardReceiverAddress): {
                    typeUrl: string;
                    value: _46.MsgSetRewardReceiverAddress;
                };
            };
        };
        AminoConverter: {
            "/osmosis.lockup.MsgLockTokens": {
                aminoType: string;
                toAmino: (message: _46.MsgLockTokens) => _46.MsgLockTokensAmino;
                fromAmino: (object: _46.MsgLockTokensAmino) => _46.MsgLockTokens;
            };
            "/osmosis.lockup.MsgBeginUnlockingAll": {
                aminoType: string;
                toAmino: (message: _46.MsgBeginUnlockingAll) => _46.MsgBeginUnlockingAllAmino;
                fromAmino: (object: _46.MsgBeginUnlockingAllAmino) => _46.MsgBeginUnlockingAll;
            };
            "/osmosis.lockup.MsgBeginUnlocking": {
                aminoType: string;
                toAmino: (message: _46.MsgBeginUnlocking) => _46.MsgBeginUnlockingAmino;
                fromAmino: (object: _46.MsgBeginUnlockingAmino) => _46.MsgBeginUnlocking;
            };
            "/osmosis.lockup.MsgExtendLockup": {
                aminoType: string;
                toAmino: (message: _46.MsgExtendLockup) => _46.MsgExtendLockupAmino;
                fromAmino: (object: _46.MsgExtendLockupAmino) => _46.MsgExtendLockup;
            };
            "/osmosis.lockup.MsgForceUnlock": {
                aminoType: string;
                toAmino: (message: _46.MsgForceUnlock) => _46.MsgForceUnlockAmino;
                fromAmino: (object: _46.MsgForceUnlockAmino) => _46.MsgForceUnlock;
            };
            "/osmosis.lockup.MsgSetRewardReceiverAddress": {
                aminoType: string;
                toAmino: (message: _46.MsgSetRewardReceiverAddress) => _46.MsgSetRewardReceiverAddressAmino;
                fromAmino: (object: _46.MsgSetRewardReceiverAddressAmino) => _46.MsgSetRewardReceiverAddress;
            };
        };
        MsgLockTokens: {
            typeUrl: string;
            encode(message: _46.MsgLockTokens, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _46.MsgLockTokens;
            fromPartial(object: Partial<_46.MsgLockTokens>): _46.MsgLockTokens;
            fromAmino(object: _46.MsgLockTokensAmino): _46.MsgLockTokens;
            toAmino(message: _46.MsgLockTokens): _46.MsgLockTokensAmino;
            fromAminoMsg(object: _46.MsgLockTokensAminoMsg): _46.MsgLockTokens;
            toAminoMsg(message: _46.MsgLockTokens): _46.MsgLockTokensAminoMsg;
            fromProtoMsg(message: _46.MsgLockTokensProtoMsg): _46.MsgLockTokens;
            toProto(message: _46.MsgLockTokens): Uint8Array;
            toProtoMsg(message: _46.MsgLockTokens): _46.MsgLockTokensProtoMsg;
        };
        MsgLockTokensResponse: {
            typeUrl: string;
            encode(message: _46.MsgLockTokensResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _46.MsgLockTokensResponse;
            fromPartial(object: Partial<_46.MsgLockTokensResponse>): _46.MsgLockTokensResponse;
            fromAmino(object: _46.MsgLockTokensResponseAmino): _46.MsgLockTokensResponse;
            toAmino(message: _46.MsgLockTokensResponse): _46.MsgLockTokensResponseAmino;
            fromAminoMsg(object: _46.MsgLockTokensResponseAminoMsg): _46.MsgLockTokensResponse;
            toAminoMsg(message: _46.MsgLockTokensResponse): _46.MsgLockTokensResponseAminoMsg;
            fromProtoMsg(message: _46.MsgLockTokensResponseProtoMsg): _46.MsgLockTokensResponse;
            toProto(message: _46.MsgLockTokensResponse): Uint8Array;
            toProtoMsg(message: _46.MsgLockTokensResponse): _46.MsgLockTokensResponseProtoMsg;
        };
        MsgBeginUnlockingAll: {
            typeUrl: string;
            encode(message: _46.MsgBeginUnlockingAll, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _46.MsgBeginUnlockingAll;
            fromPartial(object: Partial<_46.MsgBeginUnlockingAll>): _46.MsgBeginUnlockingAll;
            fromAmino(object: _46.MsgBeginUnlockingAllAmino): _46.MsgBeginUnlockingAll;
            toAmino(message: _46.MsgBeginUnlockingAll): _46.MsgBeginUnlockingAllAmino;
            fromAminoMsg(object: _46.MsgBeginUnlockingAllAminoMsg): _46.MsgBeginUnlockingAll;
            toAminoMsg(message: _46.MsgBeginUnlockingAll): _46.MsgBeginUnlockingAllAminoMsg;
            fromProtoMsg(message: _46.MsgBeginUnlockingAllProtoMsg): _46.MsgBeginUnlockingAll;
            toProto(message: _46.MsgBeginUnlockingAll): Uint8Array;
            toProtoMsg(message: _46.MsgBeginUnlockingAll): _46.MsgBeginUnlockingAllProtoMsg;
        };
        MsgBeginUnlockingAllResponse: {
            typeUrl: string;
            encode(message: _46.MsgBeginUnlockingAllResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _46.MsgBeginUnlockingAllResponse;
            fromPartial(object: Partial<_46.MsgBeginUnlockingAllResponse>): _46.MsgBeginUnlockingAllResponse;
            fromAmino(object: _46.MsgBeginUnlockingAllResponseAmino): _46.MsgBeginUnlockingAllResponse;
            toAmino(message: _46.MsgBeginUnlockingAllResponse): _46.MsgBeginUnlockingAllResponseAmino;
            fromAminoMsg(object: _46.MsgBeginUnlockingAllResponseAminoMsg): _46.MsgBeginUnlockingAllResponse;
            toAminoMsg(message: _46.MsgBeginUnlockingAllResponse): _46.MsgBeginUnlockingAllResponseAminoMsg;
            fromProtoMsg(message: _46.MsgBeginUnlockingAllResponseProtoMsg): _46.MsgBeginUnlockingAllResponse;
            toProto(message: _46.MsgBeginUnlockingAllResponse): Uint8Array;
            toProtoMsg(message: _46.MsgBeginUnlockingAllResponse): _46.MsgBeginUnlockingAllResponseProtoMsg;
        };
        MsgBeginUnlocking: {
            typeUrl: string;
            encode(message: _46.MsgBeginUnlocking, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _46.MsgBeginUnlocking;
            fromPartial(object: Partial<_46.MsgBeginUnlocking>): _46.MsgBeginUnlocking;
            fromAmino(object: _46.MsgBeginUnlockingAmino): _46.MsgBeginUnlocking;
            toAmino(message: _46.MsgBeginUnlocking): _46.MsgBeginUnlockingAmino;
            fromAminoMsg(object: _46.MsgBeginUnlockingAminoMsg): _46.MsgBeginUnlocking;
            toAminoMsg(message: _46.MsgBeginUnlocking): _46.MsgBeginUnlockingAminoMsg;
            fromProtoMsg(message: _46.MsgBeginUnlockingProtoMsg): _46.MsgBeginUnlocking;
            toProto(message: _46.MsgBeginUnlocking): Uint8Array;
            toProtoMsg(message: _46.MsgBeginUnlocking): _46.MsgBeginUnlockingProtoMsg;
        };
        MsgBeginUnlockingResponse: {
            typeUrl: string;
            encode(message: _46.MsgBeginUnlockingResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _46.MsgBeginUnlockingResponse;
            fromPartial(object: Partial<_46.MsgBeginUnlockingResponse>): _46.MsgBeginUnlockingResponse;
            fromAmino(object: _46.MsgBeginUnlockingResponseAmino): _46.MsgBeginUnlockingResponse;
            toAmino(message: _46.MsgBeginUnlockingResponse): _46.MsgBeginUnlockingResponseAmino;
            fromAminoMsg(object: _46.MsgBeginUnlockingResponseAminoMsg): _46.MsgBeginUnlockingResponse;
            toAminoMsg(message: _46.MsgBeginUnlockingResponse): _46.MsgBeginUnlockingResponseAminoMsg;
            fromProtoMsg(message: _46.MsgBeginUnlockingResponseProtoMsg): _46.MsgBeginUnlockingResponse;
            toProto(message: _46.MsgBeginUnlockingResponse): Uint8Array;
            toProtoMsg(message: _46.MsgBeginUnlockingResponse): _46.MsgBeginUnlockingResponseProtoMsg;
        };
        MsgExtendLockup: {
            typeUrl: string;
            encode(message: _46.MsgExtendLockup, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _46.MsgExtendLockup;
            fromPartial(object: Partial<_46.MsgExtendLockup>): _46.MsgExtendLockup;
            fromAmino(object: _46.MsgExtendLockupAmino): _46.MsgExtendLockup;
            toAmino(message: _46.MsgExtendLockup): _46.MsgExtendLockupAmino;
            fromAminoMsg(object: _46.MsgExtendLockupAminoMsg): _46.MsgExtendLockup;
            toAminoMsg(message: _46.MsgExtendLockup): _46.MsgExtendLockupAminoMsg;
            fromProtoMsg(message: _46.MsgExtendLockupProtoMsg): _46.MsgExtendLockup;
            toProto(message: _46.MsgExtendLockup): Uint8Array;
            toProtoMsg(message: _46.MsgExtendLockup): _46.MsgExtendLockupProtoMsg;
        };
        MsgExtendLockupResponse: {
            typeUrl: string;
            encode(message: _46.MsgExtendLockupResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _46.MsgExtendLockupResponse;
            fromPartial(object: Partial<_46.MsgExtendLockupResponse>): _46.MsgExtendLockupResponse;
            fromAmino(object: _46.MsgExtendLockupResponseAmino): _46.MsgExtendLockupResponse;
            toAmino(message: _46.MsgExtendLockupResponse): _46.MsgExtendLockupResponseAmino;
            fromAminoMsg(object: _46.MsgExtendLockupResponseAminoMsg): _46.MsgExtendLockupResponse;
            toAminoMsg(message: _46.MsgExtendLockupResponse): _46.MsgExtendLockupResponseAminoMsg;
            fromProtoMsg(message: _46.MsgExtendLockupResponseProtoMsg): _46.MsgExtendLockupResponse;
            toProto(message: _46.MsgExtendLockupResponse): Uint8Array;
            toProtoMsg(message: _46.MsgExtendLockupResponse): _46.MsgExtendLockupResponseProtoMsg;
        };
        MsgForceUnlock: {
            typeUrl: string;
            encode(message: _46.MsgForceUnlock, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _46.MsgForceUnlock;
            fromPartial(object: Partial<_46.MsgForceUnlock>): _46.MsgForceUnlock;
            fromAmino(object: _46.MsgForceUnlockAmino): _46.MsgForceUnlock;
            toAmino(message: _46.MsgForceUnlock): _46.MsgForceUnlockAmino;
            fromAminoMsg(object: _46.MsgForceUnlockAminoMsg): _46.MsgForceUnlock;
            toAminoMsg(message: _46.MsgForceUnlock): _46.MsgForceUnlockAminoMsg;
            fromProtoMsg(message: _46.MsgForceUnlockProtoMsg): _46.MsgForceUnlock;
            toProto(message: _46.MsgForceUnlock): Uint8Array;
            toProtoMsg(message: _46.MsgForceUnlock): _46.MsgForceUnlockProtoMsg;
        };
        MsgForceUnlockResponse: {
            typeUrl: string;
            encode(message: _46.MsgForceUnlockResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _46.MsgForceUnlockResponse;
            fromPartial(object: Partial<_46.MsgForceUnlockResponse>): _46.MsgForceUnlockResponse;
            fromAmino(object: _46.MsgForceUnlockResponseAmino): _46.MsgForceUnlockResponse;
            toAmino(message: _46.MsgForceUnlockResponse): _46.MsgForceUnlockResponseAmino;
            fromAminoMsg(object: _46.MsgForceUnlockResponseAminoMsg): _46.MsgForceUnlockResponse;
            toAminoMsg(message: _46.MsgForceUnlockResponse): _46.MsgForceUnlockResponseAminoMsg;
            fromProtoMsg(message: _46.MsgForceUnlockResponseProtoMsg): _46.MsgForceUnlockResponse;
            toProto(message: _46.MsgForceUnlockResponse): Uint8Array;
            toProtoMsg(message: _46.MsgForceUnlockResponse): _46.MsgForceUnlockResponseProtoMsg;
        };
        MsgSetRewardReceiverAddress: {
            typeUrl: string;
            encode(message: _46.MsgSetRewardReceiverAddress, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _46.MsgSetRewardReceiverAddress;
            fromPartial(object: Partial<_46.MsgSetRewardReceiverAddress>): _46.MsgSetRewardReceiverAddress;
            fromAmino(object: _46.MsgSetRewardReceiverAddressAmino): _46.MsgSetRewardReceiverAddress;
            toAmino(message: _46.MsgSetRewardReceiverAddress): _46.MsgSetRewardReceiverAddressAmino;
            fromAminoMsg(object: _46.MsgSetRewardReceiverAddressAminoMsg): _46.MsgSetRewardReceiverAddress;
            toAminoMsg(message: _46.MsgSetRewardReceiverAddress): _46.MsgSetRewardReceiverAddressAminoMsg;
            fromProtoMsg(message: _46.MsgSetRewardReceiverAddressProtoMsg): _46.MsgSetRewardReceiverAddress;
            toProto(message: _46.MsgSetRewardReceiverAddress): Uint8Array;
            toProtoMsg(message: _46.MsgSetRewardReceiverAddress): _46.MsgSetRewardReceiverAddressProtoMsg;
        };
        MsgSetRewardReceiverAddressResponse: {
            typeUrl: string;
            encode(message: _46.MsgSetRewardReceiverAddressResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _46.MsgSetRewardReceiverAddressResponse;
            fromPartial(object: Partial<_46.MsgSetRewardReceiverAddressResponse>): _46.MsgSetRewardReceiverAddressResponse;
            fromAmino(object: _46.MsgSetRewardReceiverAddressResponseAmino): _46.MsgSetRewardReceiverAddressResponse;
            toAmino(message: _46.MsgSetRewardReceiverAddressResponse): _46.MsgSetRewardReceiverAddressResponseAmino;
            fromAminoMsg(object: _46.MsgSetRewardReceiverAddressResponseAminoMsg): _46.MsgSetRewardReceiverAddressResponse;
            toAminoMsg(message: _46.MsgSetRewardReceiverAddressResponse): _46.MsgSetRewardReceiverAddressResponseAminoMsg;
            fromProtoMsg(message: _46.MsgSetRewardReceiverAddressResponseProtoMsg): _46.MsgSetRewardReceiverAddressResponse;
            toProto(message: _46.MsgSetRewardReceiverAddressResponse): Uint8Array;
            toProtoMsg(message: _46.MsgSetRewardReceiverAddressResponse): _46.MsgSetRewardReceiverAddressResponseProtoMsg;
        };
        ModuleBalanceRequest: {
            typeUrl: string;
            encode(_: _45.ModuleBalanceRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(_: any): _45.ModuleBalanceRequest;
            fromPartial(_: Partial<_45.ModuleBalanceRequest>): _45.ModuleBalanceRequest;
            fromAmino(_: _45.ModuleBalanceRequestAmino): _45.ModuleBalanceRequest;
            toAmino(_: _45.ModuleBalanceRequest): _45.ModuleBalanceRequestAmino;
            fromAminoMsg(object: _45.ModuleBalanceRequestAminoMsg): _45.ModuleBalanceRequest;
            toAminoMsg(message: _45.ModuleBalanceRequest): _45.ModuleBalanceRequestAminoMsg;
            fromProtoMsg(message: _45.ModuleBalanceRequestProtoMsg): _45.ModuleBalanceRequest;
            toProto(message: _45.ModuleBalanceRequest): Uint8Array;
            toProtoMsg(message: _45.ModuleBalanceRequest): _45.ModuleBalanceRequestProtoMsg;
        };
        ModuleBalanceResponse: {
            typeUrl: string;
            encode(message: _45.ModuleBalanceResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _45.ModuleBalanceResponse;
            fromPartial(object: Partial<_45.ModuleBalanceResponse>): _45.ModuleBalanceResponse;
            fromAmino(object: _45.ModuleBalanceResponseAmino): _45.ModuleBalanceResponse;
            toAmino(message: _45.ModuleBalanceResponse): _45.ModuleBalanceResponseAmino;
            fromAminoMsg(object: _45.ModuleBalanceResponseAminoMsg): _45.ModuleBalanceResponse;
            toAminoMsg(message: _45.ModuleBalanceResponse): _45.ModuleBalanceResponseAminoMsg;
            fromProtoMsg(message: _45.ModuleBalanceResponseProtoMsg): _45.ModuleBalanceResponse;
            toProto(message: _45.ModuleBalanceResponse): Uint8Array;
            toProtoMsg(message: _45.ModuleBalanceResponse): _45.ModuleBalanceResponseProtoMsg;
        };
        ModuleLockedAmountRequest: {
            typeUrl: string;
            encode(_: _45.ModuleLockedAmountRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(_: any): _45.ModuleLockedAmountRequest;
            fromPartial(_: Partial<_45.ModuleLockedAmountRequest>): _45.ModuleLockedAmountRequest;
            fromAmino(_: _45.ModuleLockedAmountRequestAmino): _45.ModuleLockedAmountRequest;
            toAmino(_: _45.ModuleLockedAmountRequest): _45.ModuleLockedAmountRequestAmino;
            fromAminoMsg(object: _45.ModuleLockedAmountRequestAminoMsg): _45.ModuleLockedAmountRequest;
            toAminoMsg(message: _45.ModuleLockedAmountRequest): _45.ModuleLockedAmountRequestAminoMsg;
            fromProtoMsg(message: _45.ModuleLockedAmountRequestProtoMsg): _45.ModuleLockedAmountRequest;
            toProto(message: _45.ModuleLockedAmountRequest): Uint8Array;
            toProtoMsg(message: _45.ModuleLockedAmountRequest): _45.ModuleLockedAmountRequestProtoMsg;
        };
        ModuleLockedAmountResponse: {
            typeUrl: string;
            encode(message: _45.ModuleLockedAmountResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _45.ModuleLockedAmountResponse;
            fromPartial(object: Partial<_45.ModuleLockedAmountResponse>): _45.ModuleLockedAmountResponse;
            fromAmino(object: _45.ModuleLockedAmountResponseAmino): _45.ModuleLockedAmountResponse;
            toAmino(message: _45.ModuleLockedAmountResponse): _45.ModuleLockedAmountResponseAmino;
            fromAminoMsg(object: _45.ModuleLockedAmountResponseAminoMsg): _45.ModuleLockedAmountResponse;
            toAminoMsg(message: _45.ModuleLockedAmountResponse): _45.ModuleLockedAmountResponseAminoMsg;
            fromProtoMsg(message: _45.ModuleLockedAmountResponseProtoMsg): _45.ModuleLockedAmountResponse;
            toProto(message: _45.ModuleLockedAmountResponse): Uint8Array;
            toProtoMsg(message: _45.ModuleLockedAmountResponse): _45.ModuleLockedAmountResponseProtoMsg;
        };
        AccountUnlockableCoinsRequest: {
            typeUrl: string;
            encode(message: _45.AccountUnlockableCoinsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _45.AccountUnlockableCoinsRequest;
            fromPartial(object: Partial<_45.AccountUnlockableCoinsRequest>): _45.AccountUnlockableCoinsRequest;
            fromAmino(object: _45.AccountUnlockableCoinsRequestAmino): _45.AccountUnlockableCoinsRequest;
            toAmino(message: _45.AccountUnlockableCoinsRequest): _45.AccountUnlockableCoinsRequestAmino;
            fromAminoMsg(object: _45.AccountUnlockableCoinsRequestAminoMsg): _45.AccountUnlockableCoinsRequest;
            toAminoMsg(message: _45.AccountUnlockableCoinsRequest): _45.AccountUnlockableCoinsRequestAminoMsg;
            fromProtoMsg(message: _45.AccountUnlockableCoinsRequestProtoMsg): _45.AccountUnlockableCoinsRequest;
            toProto(message: _45.AccountUnlockableCoinsRequest): Uint8Array;
            toProtoMsg(message: _45.AccountUnlockableCoinsRequest): _45.AccountUnlockableCoinsRequestProtoMsg;
        };
        AccountUnlockableCoinsResponse: {
            typeUrl: string;
            encode(message: _45.AccountUnlockableCoinsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _45.AccountUnlockableCoinsResponse;
            fromPartial(object: Partial<_45.AccountUnlockableCoinsResponse>): _45.AccountUnlockableCoinsResponse;
            fromAmino(object: _45.AccountUnlockableCoinsResponseAmino): _45.AccountUnlockableCoinsResponse;
            toAmino(message: _45.AccountUnlockableCoinsResponse): _45.AccountUnlockableCoinsResponseAmino;
            fromAminoMsg(object: _45.AccountUnlockableCoinsResponseAminoMsg): _45.AccountUnlockableCoinsResponse;
            toAminoMsg(message: _45.AccountUnlockableCoinsResponse): _45.AccountUnlockableCoinsResponseAminoMsg;
            fromProtoMsg(message: _45.AccountUnlockableCoinsResponseProtoMsg): _45.AccountUnlockableCoinsResponse;
            toProto(message: _45.AccountUnlockableCoinsResponse): Uint8Array;
            toProtoMsg(message: _45.AccountUnlockableCoinsResponse): _45.AccountUnlockableCoinsResponseProtoMsg;
        };
        AccountUnlockingCoinsRequest: {
            typeUrl: string;
            encode(message: _45.AccountUnlockingCoinsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _45.AccountUnlockingCoinsRequest;
            fromPartial(object: Partial<_45.AccountUnlockingCoinsRequest>): _45.AccountUnlockingCoinsRequest;
            fromAmino(object: _45.AccountUnlockingCoinsRequestAmino): _45.AccountUnlockingCoinsRequest;
            toAmino(message: _45.AccountUnlockingCoinsRequest): _45.AccountUnlockingCoinsRequestAmino;
            fromAminoMsg(object: _45.AccountUnlockingCoinsRequestAminoMsg): _45.AccountUnlockingCoinsRequest;
            toAminoMsg(message: _45.AccountUnlockingCoinsRequest): _45.AccountUnlockingCoinsRequestAminoMsg;
            fromProtoMsg(message: _45.AccountUnlockingCoinsRequestProtoMsg): _45.AccountUnlockingCoinsRequest;
            toProto(message: _45.AccountUnlockingCoinsRequest): Uint8Array;
            toProtoMsg(message: _45.AccountUnlockingCoinsRequest): _45.AccountUnlockingCoinsRequestProtoMsg;
        };
        AccountUnlockingCoinsResponse: {
            typeUrl: string;
            encode(message: _45.AccountUnlockingCoinsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _45.AccountUnlockingCoinsResponse;
            fromPartial(object: Partial<_45.AccountUnlockingCoinsResponse>): _45.AccountUnlockingCoinsResponse;
            fromAmino(object: _45.AccountUnlockingCoinsResponseAmino): _45.AccountUnlockingCoinsResponse;
            toAmino(message: _45.AccountUnlockingCoinsResponse): _45.AccountUnlockingCoinsResponseAmino;
            fromAminoMsg(object: _45.AccountUnlockingCoinsResponseAminoMsg): _45.AccountUnlockingCoinsResponse;
            toAminoMsg(message: _45.AccountUnlockingCoinsResponse): _45.AccountUnlockingCoinsResponseAminoMsg;
            fromProtoMsg(message: _45.AccountUnlockingCoinsResponseProtoMsg): _45.AccountUnlockingCoinsResponse;
            toProto(message: _45.AccountUnlockingCoinsResponse): Uint8Array;
            toProtoMsg(message: _45.AccountUnlockingCoinsResponse): _45.AccountUnlockingCoinsResponseProtoMsg;
        };
        AccountLockedCoinsRequest: {
            typeUrl: string;
            encode(message: _45.AccountLockedCoinsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _45.AccountLockedCoinsRequest;
            fromPartial(object: Partial<_45.AccountLockedCoinsRequest>): _45.AccountLockedCoinsRequest;
            fromAmino(object: _45.AccountLockedCoinsRequestAmino): _45.AccountLockedCoinsRequest;
            toAmino(message: _45.AccountLockedCoinsRequest): _45.AccountLockedCoinsRequestAmino;
            fromAminoMsg(object: _45.AccountLockedCoinsRequestAminoMsg): _45.AccountLockedCoinsRequest;
            toAminoMsg(message: _45.AccountLockedCoinsRequest): _45.AccountLockedCoinsRequestAminoMsg;
            fromProtoMsg(message: _45.AccountLockedCoinsRequestProtoMsg): _45.AccountLockedCoinsRequest;
            toProto(message: _45.AccountLockedCoinsRequest): Uint8Array;
            toProtoMsg(message: _45.AccountLockedCoinsRequest): _45.AccountLockedCoinsRequestProtoMsg;
        };
        AccountLockedCoinsResponse: {
            typeUrl: string;
            encode(message: _45.AccountLockedCoinsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _45.AccountLockedCoinsResponse;
            fromPartial(object: Partial<_45.AccountLockedCoinsResponse>): _45.AccountLockedCoinsResponse;
            fromAmino(object: _45.AccountLockedCoinsResponseAmino): _45.AccountLockedCoinsResponse;
            toAmino(message: _45.AccountLockedCoinsResponse): _45.AccountLockedCoinsResponseAmino;
            fromAminoMsg(object: _45.AccountLockedCoinsResponseAminoMsg): _45.AccountLockedCoinsResponse;
            toAminoMsg(message: _45.AccountLockedCoinsResponse): _45.AccountLockedCoinsResponseAminoMsg;
            fromProtoMsg(message: _45.AccountLockedCoinsResponseProtoMsg): _45.AccountLockedCoinsResponse;
            toProto(message: _45.AccountLockedCoinsResponse): Uint8Array;
            toProtoMsg(message: _45.AccountLockedCoinsResponse): _45.AccountLockedCoinsResponseProtoMsg;
        };
        AccountLockedPastTimeRequest: {
            typeUrl: string;
            encode(message: _45.AccountLockedPastTimeRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _45.AccountLockedPastTimeRequest;
            fromPartial(object: Partial<_45.AccountLockedPastTimeRequest>): _45.AccountLockedPastTimeRequest;
            fromAmino(object: _45.AccountLockedPastTimeRequestAmino): _45.AccountLockedPastTimeRequest;
            toAmino(message: _45.AccountLockedPastTimeRequest): _45.AccountLockedPastTimeRequestAmino;
            fromAminoMsg(object: _45.AccountLockedPastTimeRequestAminoMsg): _45.AccountLockedPastTimeRequest;
            toAminoMsg(message: _45.AccountLockedPastTimeRequest): _45.AccountLockedPastTimeRequestAminoMsg;
            fromProtoMsg(message: _45.AccountLockedPastTimeRequestProtoMsg): _45.AccountLockedPastTimeRequest;
            toProto(message: _45.AccountLockedPastTimeRequest): Uint8Array;
            toProtoMsg(message: _45.AccountLockedPastTimeRequest): _45.AccountLockedPastTimeRequestProtoMsg;
        };
        AccountLockedPastTimeResponse: {
            typeUrl: string;
            encode(message: _45.AccountLockedPastTimeResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _45.AccountLockedPastTimeResponse;
            fromPartial(object: Partial<_45.AccountLockedPastTimeResponse>): _45.AccountLockedPastTimeResponse;
            fromAmino(object: _45.AccountLockedPastTimeResponseAmino): _45.AccountLockedPastTimeResponse;
            toAmino(message: _45.AccountLockedPastTimeResponse): _45.AccountLockedPastTimeResponseAmino;
            fromAminoMsg(object: _45.AccountLockedPastTimeResponseAminoMsg): _45.AccountLockedPastTimeResponse;
            toAminoMsg(message: _45.AccountLockedPastTimeResponse): _45.AccountLockedPastTimeResponseAminoMsg;
            fromProtoMsg(message: _45.AccountLockedPastTimeResponseProtoMsg): _45.AccountLockedPastTimeResponse;
            toProto(message: _45.AccountLockedPastTimeResponse): Uint8Array;
            toProtoMsg(message: _45.AccountLockedPastTimeResponse): _45.AccountLockedPastTimeResponseProtoMsg;
        };
        AccountLockedPastTimeNotUnlockingOnlyRequest: {
            typeUrl: string;
            encode(message: _45.AccountLockedPastTimeNotUnlockingOnlyRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _45.AccountLockedPastTimeNotUnlockingOnlyRequest;
            fromPartial(object: Partial<_45.AccountLockedPastTimeNotUnlockingOnlyRequest>): _45.AccountLockedPastTimeNotUnlockingOnlyRequest;
            fromAmino(object: _45.AccountLockedPastTimeNotUnlockingOnlyRequestAmino): _45.AccountLockedPastTimeNotUnlockingOnlyRequest;
            toAmino(message: _45.AccountLockedPastTimeNotUnlockingOnlyRequest): _45.AccountLockedPastTimeNotUnlockingOnlyRequestAmino;
            fromAminoMsg(object: _45.AccountLockedPastTimeNotUnlockingOnlyRequestAminoMsg): _45.AccountLockedPastTimeNotUnlockingOnlyRequest;
            toAminoMsg(message: _45.AccountLockedPastTimeNotUnlockingOnlyRequest): _45.AccountLockedPastTimeNotUnlockingOnlyRequestAminoMsg;
            fromProtoMsg(message: _45.AccountLockedPastTimeNotUnlockingOnlyRequestProtoMsg): _45.AccountLockedPastTimeNotUnlockingOnlyRequest;
            toProto(message: _45.AccountLockedPastTimeNotUnlockingOnlyRequest): Uint8Array;
            toProtoMsg(message: _45.AccountLockedPastTimeNotUnlockingOnlyRequest): _45.AccountLockedPastTimeNotUnlockingOnlyRequestProtoMsg;
        };
        AccountLockedPastTimeNotUnlockingOnlyResponse: {
            typeUrl: string;
            encode(message: _45.AccountLockedPastTimeNotUnlockingOnlyResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _45.AccountLockedPastTimeNotUnlockingOnlyResponse;
            fromPartial(object: Partial<_45.AccountLockedPastTimeNotUnlockingOnlyResponse>): _45.AccountLockedPastTimeNotUnlockingOnlyResponse;
            fromAmino(object: _45.AccountLockedPastTimeNotUnlockingOnlyResponseAmino): _45.AccountLockedPastTimeNotUnlockingOnlyResponse;
            toAmino(message: _45.AccountLockedPastTimeNotUnlockingOnlyResponse): _45.AccountLockedPastTimeNotUnlockingOnlyResponseAmino;
            fromAminoMsg(object: _45.AccountLockedPastTimeNotUnlockingOnlyResponseAminoMsg): _45.AccountLockedPastTimeNotUnlockingOnlyResponse;
            toAminoMsg(message: _45.AccountLockedPastTimeNotUnlockingOnlyResponse): _45.AccountLockedPastTimeNotUnlockingOnlyResponseAminoMsg;
            fromProtoMsg(message: _45.AccountLockedPastTimeNotUnlockingOnlyResponseProtoMsg): _45.AccountLockedPastTimeNotUnlockingOnlyResponse;
            toProto(message: _45.AccountLockedPastTimeNotUnlockingOnlyResponse): Uint8Array;
            toProtoMsg(message: _45.AccountLockedPastTimeNotUnlockingOnlyResponse): _45.AccountLockedPastTimeNotUnlockingOnlyResponseProtoMsg;
        };
        AccountUnlockedBeforeTimeRequest: {
            typeUrl: string;
            encode(message: _45.AccountUnlockedBeforeTimeRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _45.AccountUnlockedBeforeTimeRequest;
            fromPartial(object: Partial<_45.AccountUnlockedBeforeTimeRequest>): _45.AccountUnlockedBeforeTimeRequest;
            fromAmino(object: _45.AccountUnlockedBeforeTimeRequestAmino): _45.AccountUnlockedBeforeTimeRequest;
            toAmino(message: _45.AccountUnlockedBeforeTimeRequest): _45.AccountUnlockedBeforeTimeRequestAmino;
            fromAminoMsg(object: _45.AccountUnlockedBeforeTimeRequestAminoMsg): _45.AccountUnlockedBeforeTimeRequest;
            toAminoMsg(message: _45.AccountUnlockedBeforeTimeRequest): _45.AccountUnlockedBeforeTimeRequestAminoMsg;
            fromProtoMsg(message: _45.AccountUnlockedBeforeTimeRequestProtoMsg): _45.AccountUnlockedBeforeTimeRequest;
            toProto(message: _45.AccountUnlockedBeforeTimeRequest): Uint8Array;
            toProtoMsg(message: _45.AccountUnlockedBeforeTimeRequest): _45.AccountUnlockedBeforeTimeRequestProtoMsg;
        };
        AccountUnlockedBeforeTimeResponse: {
            typeUrl: string;
            encode(message: _45.AccountUnlockedBeforeTimeResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _45.AccountUnlockedBeforeTimeResponse;
            fromPartial(object: Partial<_45.AccountUnlockedBeforeTimeResponse>): _45.AccountUnlockedBeforeTimeResponse;
            fromAmino(object: _45.AccountUnlockedBeforeTimeResponseAmino): _45.AccountUnlockedBeforeTimeResponse;
            toAmino(message: _45.AccountUnlockedBeforeTimeResponse): _45.AccountUnlockedBeforeTimeResponseAmino;
            fromAminoMsg(object: _45.AccountUnlockedBeforeTimeResponseAminoMsg): _45.AccountUnlockedBeforeTimeResponse;
            toAminoMsg(message: _45.AccountUnlockedBeforeTimeResponse): _45.AccountUnlockedBeforeTimeResponseAminoMsg;
            fromProtoMsg(message: _45.AccountUnlockedBeforeTimeResponseProtoMsg): _45.AccountUnlockedBeforeTimeResponse;
            toProto(message: _45.AccountUnlockedBeforeTimeResponse): Uint8Array;
            toProtoMsg(message: _45.AccountUnlockedBeforeTimeResponse): _45.AccountUnlockedBeforeTimeResponseProtoMsg;
        };
        AccountLockedPastTimeDenomRequest: {
            typeUrl: string;
            encode(message: _45.AccountLockedPastTimeDenomRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _45.AccountLockedPastTimeDenomRequest;
            fromPartial(object: Partial<_45.AccountLockedPastTimeDenomRequest>): _45.AccountLockedPastTimeDenomRequest;
            fromAmino(object: _45.AccountLockedPastTimeDenomRequestAmino): _45.AccountLockedPastTimeDenomRequest;
            toAmino(message: _45.AccountLockedPastTimeDenomRequest): _45.AccountLockedPastTimeDenomRequestAmino;
            fromAminoMsg(object: _45.AccountLockedPastTimeDenomRequestAminoMsg): _45.AccountLockedPastTimeDenomRequest;
            toAminoMsg(message: _45.AccountLockedPastTimeDenomRequest): _45.AccountLockedPastTimeDenomRequestAminoMsg;
            fromProtoMsg(message: _45.AccountLockedPastTimeDenomRequestProtoMsg): _45.AccountLockedPastTimeDenomRequest;
            toProto(message: _45.AccountLockedPastTimeDenomRequest): Uint8Array;
            toProtoMsg(message: _45.AccountLockedPastTimeDenomRequest): _45.AccountLockedPastTimeDenomRequestProtoMsg;
        };
        AccountLockedPastTimeDenomResponse: {
            typeUrl: string;
            encode(message: _45.AccountLockedPastTimeDenomResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _45.AccountLockedPastTimeDenomResponse;
            fromPartial(object: Partial<_45.AccountLockedPastTimeDenomResponse>): _45.AccountLockedPastTimeDenomResponse;
            fromAmino(object: _45.AccountLockedPastTimeDenomResponseAmino): _45.AccountLockedPastTimeDenomResponse;
            toAmino(message: _45.AccountLockedPastTimeDenomResponse): _45.AccountLockedPastTimeDenomResponseAmino;
            fromAminoMsg(object: _45.AccountLockedPastTimeDenomResponseAminoMsg): _45.AccountLockedPastTimeDenomResponse;
            toAminoMsg(message: _45.AccountLockedPastTimeDenomResponse): _45.AccountLockedPastTimeDenomResponseAminoMsg;
            fromProtoMsg(message: _45.AccountLockedPastTimeDenomResponseProtoMsg): _45.AccountLockedPastTimeDenomResponse;
            toProto(message: _45.AccountLockedPastTimeDenomResponse): Uint8Array;
            toProtoMsg(message: _45.AccountLockedPastTimeDenomResponse): _45.AccountLockedPastTimeDenomResponseProtoMsg;
        };
        LockedDenomRequest: {
            typeUrl: string;
            encode(message: _45.LockedDenomRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _45.LockedDenomRequest;
            fromPartial(object: Partial<_45.LockedDenomRequest>): _45.LockedDenomRequest;
            fromAmino(object: _45.LockedDenomRequestAmino): _45.LockedDenomRequest;
            toAmino(message: _45.LockedDenomRequest): _45.LockedDenomRequestAmino;
            fromAminoMsg(object: _45.LockedDenomRequestAminoMsg): _45.LockedDenomRequest;
            toAminoMsg(message: _45.LockedDenomRequest): _45.LockedDenomRequestAminoMsg;
            fromProtoMsg(message: _45.LockedDenomRequestProtoMsg): _45.LockedDenomRequest;
            toProto(message: _45.LockedDenomRequest): Uint8Array;
            toProtoMsg(message: _45.LockedDenomRequest): _45.LockedDenomRequestProtoMsg;
        };
        LockedDenomResponse: {
            typeUrl: string;
            encode(message: _45.LockedDenomResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _45.LockedDenomResponse;
            fromPartial(object: Partial<_45.LockedDenomResponse>): _45.LockedDenomResponse;
            fromAmino(object: _45.LockedDenomResponseAmino): _45.LockedDenomResponse;
            toAmino(message: _45.LockedDenomResponse): _45.LockedDenomResponseAmino;
            fromAminoMsg(object: _45.LockedDenomResponseAminoMsg): _45.LockedDenomResponse;
            toAminoMsg(message: _45.LockedDenomResponse): _45.LockedDenomResponseAminoMsg;
            fromProtoMsg(message: _45.LockedDenomResponseProtoMsg): _45.LockedDenomResponse;
            toProto(message: _45.LockedDenomResponse): Uint8Array;
            toProtoMsg(message: _45.LockedDenomResponse): _45.LockedDenomResponseProtoMsg;
        };
        LockedRequest: {
            typeUrl: string;
            encode(message: _45.LockedRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _45.LockedRequest;
            fromPartial(object: Partial<_45.LockedRequest>): _45.LockedRequest;
            fromAmino(object: _45.LockedRequestAmino): _45.LockedRequest;
            toAmino(message: _45.LockedRequest): _45.LockedRequestAmino;
            fromAminoMsg(object: _45.LockedRequestAminoMsg): _45.LockedRequest;
            toAminoMsg(message: _45.LockedRequest): _45.LockedRequestAminoMsg;
            fromProtoMsg(message: _45.LockedRequestProtoMsg): _45.LockedRequest;
            toProto(message: _45.LockedRequest): Uint8Array;
            toProtoMsg(message: _45.LockedRequest): _45.LockedRequestProtoMsg;
        };
        LockedResponse: {
            typeUrl: string;
            encode(message: _45.LockedResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _45.LockedResponse;
            fromPartial(object: Partial<_45.LockedResponse>): _45.LockedResponse;
            fromAmino(object: _45.LockedResponseAmino): _45.LockedResponse;
            toAmino(message: _45.LockedResponse): _45.LockedResponseAmino;
            fromAminoMsg(object: _45.LockedResponseAminoMsg): _45.LockedResponse;
            toAminoMsg(message: _45.LockedResponse): _45.LockedResponseAminoMsg;
            fromProtoMsg(message: _45.LockedResponseProtoMsg): _45.LockedResponse;
            toProto(message: _45.LockedResponse): Uint8Array;
            toProtoMsg(message: _45.LockedResponse): _45.LockedResponseProtoMsg;
        };
        LockRewardReceiverRequest: {
            typeUrl: string;
            encode(message: _45.LockRewardReceiverRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _45.LockRewardReceiverRequest;
            fromPartial(object: Partial<_45.LockRewardReceiverRequest>): _45.LockRewardReceiverRequest;
            fromAmino(object: _45.LockRewardReceiverRequestAmino): _45.LockRewardReceiverRequest;
            toAmino(message: _45.LockRewardReceiverRequest): _45.LockRewardReceiverRequestAmino;
            fromAminoMsg(object: _45.LockRewardReceiverRequestAminoMsg): _45.LockRewardReceiverRequest;
            toAminoMsg(message: _45.LockRewardReceiverRequest): _45.LockRewardReceiverRequestAminoMsg;
            fromProtoMsg(message: _45.LockRewardReceiverRequestProtoMsg): _45.LockRewardReceiverRequest;
            toProto(message: _45.LockRewardReceiverRequest): Uint8Array;
            toProtoMsg(message: _45.LockRewardReceiverRequest): _45.LockRewardReceiverRequestProtoMsg;
        };
        LockRewardReceiverResponse: {
            typeUrl: string;
            encode(message: _45.LockRewardReceiverResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _45.LockRewardReceiverResponse;
            fromPartial(object: Partial<_45.LockRewardReceiverResponse>): _45.LockRewardReceiverResponse;
            fromAmino(object: _45.LockRewardReceiverResponseAmino): _45.LockRewardReceiverResponse;
            toAmino(message: _45.LockRewardReceiverResponse): _45.LockRewardReceiverResponseAmino;
            fromAminoMsg(object: _45.LockRewardReceiverResponseAminoMsg): _45.LockRewardReceiverResponse;
            toAminoMsg(message: _45.LockRewardReceiverResponse): _45.LockRewardReceiverResponseAminoMsg;
            fromProtoMsg(message: _45.LockRewardReceiverResponseProtoMsg): _45.LockRewardReceiverResponse;
            toProto(message: _45.LockRewardReceiverResponse): Uint8Array;
            toProtoMsg(message: _45.LockRewardReceiverResponse): _45.LockRewardReceiverResponseProtoMsg;
        };
        NextLockIDRequest: {
            typeUrl: string;
            encode(_: _45.NextLockIDRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(_: any): _45.NextLockIDRequest;
            fromPartial(_: Partial<_45.NextLockIDRequest>): _45.NextLockIDRequest;
            fromAmino(_: _45.NextLockIDRequestAmino): _45.NextLockIDRequest;
            toAmino(_: _45.NextLockIDRequest): _45.NextLockIDRequestAmino;
            fromAminoMsg(object: _45.NextLockIDRequestAminoMsg): _45.NextLockIDRequest;
            toAminoMsg(message: _45.NextLockIDRequest): _45.NextLockIDRequestAminoMsg;
            fromProtoMsg(message: _45.NextLockIDRequestProtoMsg): _45.NextLockIDRequest;
            toProto(message: _45.NextLockIDRequest): Uint8Array;
            toProtoMsg(message: _45.NextLockIDRequest): _45.NextLockIDRequestProtoMsg;
        };
        NextLockIDResponse: {
            typeUrl: string;
            encode(message: _45.NextLockIDResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _45.NextLockIDResponse;
            fromPartial(object: Partial<_45.NextLockIDResponse>): _45.NextLockIDResponse;
            fromAmino(object: _45.NextLockIDResponseAmino): _45.NextLockIDResponse;
            toAmino(message: _45.NextLockIDResponse): _45.NextLockIDResponseAmino;
            fromAminoMsg(object: _45.NextLockIDResponseAminoMsg): _45.NextLockIDResponse;
            toAminoMsg(message: _45.NextLockIDResponse): _45.NextLockIDResponseAminoMsg;
            fromProtoMsg(message: _45.NextLockIDResponseProtoMsg): _45.NextLockIDResponse;
            toProto(message: _45.NextLockIDResponse): Uint8Array;
            toProtoMsg(message: _45.NextLockIDResponse): _45.NextLockIDResponseProtoMsg;
        };
        SyntheticLockupsByLockupIDRequest: {
            typeUrl: string;
            encode(message: _45.SyntheticLockupsByLockupIDRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _45.SyntheticLockupsByLockupIDRequest;
            fromPartial(object: Partial<_45.SyntheticLockupsByLockupIDRequest>): _45.SyntheticLockupsByLockupIDRequest;
            fromAmino(object: _45.SyntheticLockupsByLockupIDRequestAmino): _45.SyntheticLockupsByLockupIDRequest;
            toAmino(message: _45.SyntheticLockupsByLockupIDRequest): _45.SyntheticLockupsByLockupIDRequestAmino;
            fromAminoMsg(object: _45.SyntheticLockupsByLockupIDRequestAminoMsg): _45.SyntheticLockupsByLockupIDRequest;
            toAminoMsg(message: _45.SyntheticLockupsByLockupIDRequest): _45.SyntheticLockupsByLockupIDRequestAminoMsg;
            fromProtoMsg(message: _45.SyntheticLockupsByLockupIDRequestProtoMsg): _45.SyntheticLockupsByLockupIDRequest;
            toProto(message: _45.SyntheticLockupsByLockupIDRequest): Uint8Array;
            toProtoMsg(message: _45.SyntheticLockupsByLockupIDRequest): _45.SyntheticLockupsByLockupIDRequestProtoMsg;
        };
        SyntheticLockupsByLockupIDResponse: {
            typeUrl: string;
            encode(message: _45.SyntheticLockupsByLockupIDResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _45.SyntheticLockupsByLockupIDResponse;
            fromPartial(object: Partial<_45.SyntheticLockupsByLockupIDResponse>): _45.SyntheticLockupsByLockupIDResponse;
            fromAmino(object: _45.SyntheticLockupsByLockupIDResponseAmino): _45.SyntheticLockupsByLockupIDResponse;
            toAmino(message: _45.SyntheticLockupsByLockupIDResponse): _45.SyntheticLockupsByLockupIDResponseAmino;
            fromAminoMsg(object: _45.SyntheticLockupsByLockupIDResponseAminoMsg): _45.SyntheticLockupsByLockupIDResponse;
            toAminoMsg(message: _45.SyntheticLockupsByLockupIDResponse): _45.SyntheticLockupsByLockupIDResponseAminoMsg;
            fromProtoMsg(message: _45.SyntheticLockupsByLockupIDResponseProtoMsg): _45.SyntheticLockupsByLockupIDResponse;
            toProto(message: _45.SyntheticLockupsByLockupIDResponse): Uint8Array;
            toProtoMsg(message: _45.SyntheticLockupsByLockupIDResponse): _45.SyntheticLockupsByLockupIDResponseProtoMsg;
        };
        SyntheticLockupByLockupIDRequest: {
            typeUrl: string;
            encode(message: _45.SyntheticLockupByLockupIDRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _45.SyntheticLockupByLockupIDRequest;
            fromPartial(object: Partial<_45.SyntheticLockupByLockupIDRequest>): _45.SyntheticLockupByLockupIDRequest;
            fromAmino(object: _45.SyntheticLockupByLockupIDRequestAmino): _45.SyntheticLockupByLockupIDRequest;
            toAmino(message: _45.SyntheticLockupByLockupIDRequest): _45.SyntheticLockupByLockupIDRequestAmino;
            fromAminoMsg(object: _45.SyntheticLockupByLockupIDRequestAminoMsg): _45.SyntheticLockupByLockupIDRequest;
            toAminoMsg(message: _45.SyntheticLockupByLockupIDRequest): _45.SyntheticLockupByLockupIDRequestAminoMsg;
            fromProtoMsg(message: _45.SyntheticLockupByLockupIDRequestProtoMsg): _45.SyntheticLockupByLockupIDRequest;
            toProto(message: _45.SyntheticLockupByLockupIDRequest): Uint8Array;
            toProtoMsg(message: _45.SyntheticLockupByLockupIDRequest): _45.SyntheticLockupByLockupIDRequestProtoMsg;
        };
        SyntheticLockupByLockupIDResponse: {
            typeUrl: string;
            encode(message: _45.SyntheticLockupByLockupIDResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _45.SyntheticLockupByLockupIDResponse;
            fromPartial(object: Partial<_45.SyntheticLockupByLockupIDResponse>): _45.SyntheticLockupByLockupIDResponse;
            fromAmino(object: _45.SyntheticLockupByLockupIDResponseAmino): _45.SyntheticLockupByLockupIDResponse;
            toAmino(message: _45.SyntheticLockupByLockupIDResponse): _45.SyntheticLockupByLockupIDResponseAmino;
            fromAminoMsg(object: _45.SyntheticLockupByLockupIDResponseAminoMsg): _45.SyntheticLockupByLockupIDResponse;
            toAminoMsg(message: _45.SyntheticLockupByLockupIDResponse): _45.SyntheticLockupByLockupIDResponseAminoMsg;
            fromProtoMsg(message: _45.SyntheticLockupByLockupIDResponseProtoMsg): _45.SyntheticLockupByLockupIDResponse;
            toProto(message: _45.SyntheticLockupByLockupIDResponse): Uint8Array;
            toProtoMsg(message: _45.SyntheticLockupByLockupIDResponse): _45.SyntheticLockupByLockupIDResponseProtoMsg;
        };
        AccountLockedLongerDurationRequest: {
            typeUrl: string;
            encode(message: _45.AccountLockedLongerDurationRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _45.AccountLockedLongerDurationRequest;
            fromPartial(object: Partial<_45.AccountLockedLongerDurationRequest>): _45.AccountLockedLongerDurationRequest;
            fromAmino(object: _45.AccountLockedLongerDurationRequestAmino): _45.AccountLockedLongerDurationRequest;
            toAmino(message: _45.AccountLockedLongerDurationRequest): _45.AccountLockedLongerDurationRequestAmino;
            fromAminoMsg(object: _45.AccountLockedLongerDurationRequestAminoMsg): _45.AccountLockedLongerDurationRequest;
            toAminoMsg(message: _45.AccountLockedLongerDurationRequest): _45.AccountLockedLongerDurationRequestAminoMsg;
            fromProtoMsg(message: _45.AccountLockedLongerDurationRequestProtoMsg): _45.AccountLockedLongerDurationRequest;
            toProto(message: _45.AccountLockedLongerDurationRequest): Uint8Array;
            toProtoMsg(message: _45.AccountLockedLongerDurationRequest): _45.AccountLockedLongerDurationRequestProtoMsg;
        };
        AccountLockedLongerDurationResponse: {
            typeUrl: string;
            encode(message: _45.AccountLockedLongerDurationResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _45.AccountLockedLongerDurationResponse;
            fromPartial(object: Partial<_45.AccountLockedLongerDurationResponse>): _45.AccountLockedLongerDurationResponse;
            fromAmino(object: _45.AccountLockedLongerDurationResponseAmino): _45.AccountLockedLongerDurationResponse;
            toAmino(message: _45.AccountLockedLongerDurationResponse): _45.AccountLockedLongerDurationResponseAmino;
            fromAminoMsg(object: _45.AccountLockedLongerDurationResponseAminoMsg): _45.AccountLockedLongerDurationResponse;
            toAminoMsg(message: _45.AccountLockedLongerDurationResponse): _45.AccountLockedLongerDurationResponseAminoMsg;
            fromProtoMsg(message: _45.AccountLockedLongerDurationResponseProtoMsg): _45.AccountLockedLongerDurationResponse;
            toProto(message: _45.AccountLockedLongerDurationResponse): Uint8Array;
            toProtoMsg(message: _45.AccountLockedLongerDurationResponse): _45.AccountLockedLongerDurationResponseProtoMsg;
        };
        AccountLockedDurationRequest: {
            typeUrl: string;
            encode(message: _45.AccountLockedDurationRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _45.AccountLockedDurationRequest;
            fromPartial(object: Partial<_45.AccountLockedDurationRequest>): _45.AccountLockedDurationRequest;
            fromAmino(object: _45.AccountLockedDurationRequestAmino): _45.AccountLockedDurationRequest;
            toAmino(message: _45.AccountLockedDurationRequest): _45.AccountLockedDurationRequestAmino;
            fromAminoMsg(object: _45.AccountLockedDurationRequestAminoMsg): _45.AccountLockedDurationRequest;
            toAminoMsg(message: _45.AccountLockedDurationRequest): _45.AccountLockedDurationRequestAminoMsg;
            fromProtoMsg(message: _45.AccountLockedDurationRequestProtoMsg): _45.AccountLockedDurationRequest;
            toProto(message: _45.AccountLockedDurationRequest): Uint8Array;
            toProtoMsg(message: _45.AccountLockedDurationRequest): _45.AccountLockedDurationRequestProtoMsg;
        };
        AccountLockedDurationResponse: {
            typeUrl: string;
            encode(message: _45.AccountLockedDurationResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _45.AccountLockedDurationResponse;
            fromPartial(object: Partial<_45.AccountLockedDurationResponse>): _45.AccountLockedDurationResponse;
            fromAmino(object: _45.AccountLockedDurationResponseAmino): _45.AccountLockedDurationResponse;
            toAmino(message: _45.AccountLockedDurationResponse): _45.AccountLockedDurationResponseAmino;
            fromAminoMsg(object: _45.AccountLockedDurationResponseAminoMsg): _45.AccountLockedDurationResponse;
            toAminoMsg(message: _45.AccountLockedDurationResponse): _45.AccountLockedDurationResponseAminoMsg;
            fromProtoMsg(message: _45.AccountLockedDurationResponseProtoMsg): _45.AccountLockedDurationResponse;
            toProto(message: _45.AccountLockedDurationResponse): Uint8Array;
            toProtoMsg(message: _45.AccountLockedDurationResponse): _45.AccountLockedDurationResponseProtoMsg;
        };
        AccountLockedLongerDurationNotUnlockingOnlyRequest: {
            typeUrl: string;
            encode(message: _45.AccountLockedLongerDurationNotUnlockingOnlyRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _45.AccountLockedLongerDurationNotUnlockingOnlyRequest;
            fromPartial(object: Partial<_45.AccountLockedLongerDurationNotUnlockingOnlyRequest>): _45.AccountLockedLongerDurationNotUnlockingOnlyRequest;
            fromAmino(object: _45.AccountLockedLongerDurationNotUnlockingOnlyRequestAmino): _45.AccountLockedLongerDurationNotUnlockingOnlyRequest;
            toAmino(message: _45.AccountLockedLongerDurationNotUnlockingOnlyRequest): _45.AccountLockedLongerDurationNotUnlockingOnlyRequestAmino;
            fromAminoMsg(object: _45.AccountLockedLongerDurationNotUnlockingOnlyRequestAminoMsg): _45.AccountLockedLongerDurationNotUnlockingOnlyRequest;
            toAminoMsg(message: _45.AccountLockedLongerDurationNotUnlockingOnlyRequest): _45.AccountLockedLongerDurationNotUnlockingOnlyRequestAminoMsg;
            fromProtoMsg(message: _45.AccountLockedLongerDurationNotUnlockingOnlyRequestProtoMsg): _45.AccountLockedLongerDurationNotUnlockingOnlyRequest;
            toProto(message: _45.AccountLockedLongerDurationNotUnlockingOnlyRequest): Uint8Array;
            toProtoMsg(message: _45.AccountLockedLongerDurationNotUnlockingOnlyRequest): _45.AccountLockedLongerDurationNotUnlockingOnlyRequestProtoMsg;
        };
        AccountLockedLongerDurationNotUnlockingOnlyResponse: {
            typeUrl: string;
            encode(message: _45.AccountLockedLongerDurationNotUnlockingOnlyResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _45.AccountLockedLongerDurationNotUnlockingOnlyResponse;
            fromPartial(object: Partial<_45.AccountLockedLongerDurationNotUnlockingOnlyResponse>): _45.AccountLockedLongerDurationNotUnlockingOnlyResponse;
            fromAmino(object: _45.AccountLockedLongerDurationNotUnlockingOnlyResponseAmino): _45.AccountLockedLongerDurationNotUnlockingOnlyResponse;
            toAmino(message: _45.AccountLockedLongerDurationNotUnlockingOnlyResponse): _45.AccountLockedLongerDurationNotUnlockingOnlyResponseAmino;
            fromAminoMsg(object: _45.AccountLockedLongerDurationNotUnlockingOnlyResponseAminoMsg): _45.AccountLockedLongerDurationNotUnlockingOnlyResponse;
            toAminoMsg(message: _45.AccountLockedLongerDurationNotUnlockingOnlyResponse): _45.AccountLockedLongerDurationNotUnlockingOnlyResponseAminoMsg;
            fromProtoMsg(message: _45.AccountLockedLongerDurationNotUnlockingOnlyResponseProtoMsg): _45.AccountLockedLongerDurationNotUnlockingOnlyResponse;
            toProto(message: _45.AccountLockedLongerDurationNotUnlockingOnlyResponse): Uint8Array;
            toProtoMsg(message: _45.AccountLockedLongerDurationNotUnlockingOnlyResponse): _45.AccountLockedLongerDurationNotUnlockingOnlyResponseProtoMsg;
        };
        AccountLockedLongerDurationDenomRequest: {
            typeUrl: string;
            encode(message: _45.AccountLockedLongerDurationDenomRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _45.AccountLockedLongerDurationDenomRequest;
            fromPartial(object: Partial<_45.AccountLockedLongerDurationDenomRequest>): _45.AccountLockedLongerDurationDenomRequest;
            fromAmino(object: _45.AccountLockedLongerDurationDenomRequestAmino): _45.AccountLockedLongerDurationDenomRequest;
            toAmino(message: _45.AccountLockedLongerDurationDenomRequest): _45.AccountLockedLongerDurationDenomRequestAmino;
            fromAminoMsg(object: _45.AccountLockedLongerDurationDenomRequestAminoMsg): _45.AccountLockedLongerDurationDenomRequest;
            toAminoMsg(message: _45.AccountLockedLongerDurationDenomRequest): _45.AccountLockedLongerDurationDenomRequestAminoMsg;
            fromProtoMsg(message: _45.AccountLockedLongerDurationDenomRequestProtoMsg): _45.AccountLockedLongerDurationDenomRequest;
            toProto(message: _45.AccountLockedLongerDurationDenomRequest): Uint8Array;
            toProtoMsg(message: _45.AccountLockedLongerDurationDenomRequest): _45.AccountLockedLongerDurationDenomRequestProtoMsg;
        };
        AccountLockedLongerDurationDenomResponse: {
            typeUrl: string;
            encode(message: _45.AccountLockedLongerDurationDenomResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _45.AccountLockedLongerDurationDenomResponse;
            fromPartial(object: Partial<_45.AccountLockedLongerDurationDenomResponse>): _45.AccountLockedLongerDurationDenomResponse;
            fromAmino(object: _45.AccountLockedLongerDurationDenomResponseAmino): _45.AccountLockedLongerDurationDenomResponse;
            toAmino(message: _45.AccountLockedLongerDurationDenomResponse): _45.AccountLockedLongerDurationDenomResponseAmino;
            fromAminoMsg(object: _45.AccountLockedLongerDurationDenomResponseAminoMsg): _45.AccountLockedLongerDurationDenomResponse;
            toAminoMsg(message: _45.AccountLockedLongerDurationDenomResponse): _45.AccountLockedLongerDurationDenomResponseAminoMsg;
            fromProtoMsg(message: _45.AccountLockedLongerDurationDenomResponseProtoMsg): _45.AccountLockedLongerDurationDenomResponse;
            toProto(message: _45.AccountLockedLongerDurationDenomResponse): Uint8Array;
            toProtoMsg(message: _45.AccountLockedLongerDurationDenomResponse): _45.AccountLockedLongerDurationDenomResponseProtoMsg;
        };
        QueryParamsRequest: {
            typeUrl: string;
            encode(_: _45.QueryParamsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(_: any): _45.QueryParamsRequest;
            fromPartial(_: Partial<_45.QueryParamsRequest>): _45.QueryParamsRequest;
            fromAmino(_: _45.QueryParamsRequestAmino): _45.QueryParamsRequest;
            toAmino(_: _45.QueryParamsRequest): _45.QueryParamsRequestAmino;
            fromAminoMsg(object: _45.QueryParamsRequestAminoMsg): _45.QueryParamsRequest;
            toAminoMsg(message: _45.QueryParamsRequest): _45.QueryParamsRequestAminoMsg;
            fromProtoMsg(message: _45.QueryParamsRequestProtoMsg): _45.QueryParamsRequest;
            toProto(message: _45.QueryParamsRequest): Uint8Array;
            toProtoMsg(message: _45.QueryParamsRequest): _45.QueryParamsRequestProtoMsg;
        };
        QueryParamsResponse: {
            typeUrl: string;
            encode(message: _45.QueryParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _45.QueryParamsResponse;
            fromPartial(object: Partial<_45.QueryParamsResponse>): _45.QueryParamsResponse;
            fromAmino(object: _45.QueryParamsResponseAmino): _45.QueryParamsResponse;
            toAmino(message: _45.QueryParamsResponse): _45.QueryParamsResponseAmino;
            fromAminoMsg(object: _45.QueryParamsResponseAminoMsg): _45.QueryParamsResponse;
            toAminoMsg(message: _45.QueryParamsResponse): _45.QueryParamsResponseAminoMsg;
            fromProtoMsg(message: _45.QueryParamsResponseProtoMsg): _45.QueryParamsResponse;
            toProto(message: _45.QueryParamsResponse): Uint8Array;
            toProtoMsg(message: _45.QueryParamsResponse): _45.QueryParamsResponseProtoMsg;
        };
        Params: {
            typeUrl: string;
            encode(message: _44.Params, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _44.Params;
            fromPartial(object: Partial<_44.Params>): _44.Params;
            fromAmino(object: _44.ParamsAmino): _44.Params;
            toAmino(message: _44.Params): _44.ParamsAmino;
            fromAminoMsg(object: _44.ParamsAminoMsg): _44.Params;
            toAminoMsg(message: _44.Params): _44.ParamsAminoMsg;
            fromProtoMsg(message: _44.ParamsProtoMsg): _44.Params;
            toProto(message: _44.Params): Uint8Array;
            toProtoMsg(message: _44.Params): _44.ParamsProtoMsg;
        };
        lockQueryTypeFromJSON(object: any): _43.LockQueryType;
        lockQueryTypeToJSON(object: _43.LockQueryType): string;
        LockQueryType: typeof _43.LockQueryType;
        LockQueryTypeSDKType: typeof _43.LockQueryType;
        LockQueryTypeAmino: typeof _43.LockQueryType;
        PeriodLock: {
            typeUrl: string;
            encode(message: _43.PeriodLock, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _43.PeriodLock;
            fromPartial(object: Partial<_43.PeriodLock>): _43.PeriodLock;
            fromAmino(object: _43.PeriodLockAmino): _43.PeriodLock;
            toAmino(message: _43.PeriodLock): _43.PeriodLockAmino;
            fromAminoMsg(object: _43.PeriodLockAminoMsg): _43.PeriodLock;
            toAminoMsg(message: _43.PeriodLock): _43.PeriodLockAminoMsg;
            fromProtoMsg(message: _43.PeriodLockProtoMsg): _43.PeriodLock;
            toProto(message: _43.PeriodLock): Uint8Array;
            toProtoMsg(message: _43.PeriodLock): _43.PeriodLockProtoMsg;
        };
        QueryCondition: {
            typeUrl: string;
            encode(message: _43.QueryCondition, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _43.QueryCondition;
            fromPartial(object: Partial<_43.QueryCondition>): _43.QueryCondition;
            fromAmino(object: _43.QueryConditionAmino): _43.QueryCondition;
            toAmino(message: _43.QueryCondition): _43.QueryConditionAmino;
            fromAminoMsg(object: _43.QueryConditionAminoMsg): _43.QueryCondition;
            toAminoMsg(message: _43.QueryCondition): _43.QueryConditionAminoMsg;
            fromProtoMsg(message: _43.QueryConditionProtoMsg): _43.QueryCondition;
            toProto(message: _43.QueryCondition): Uint8Array;
            toProtoMsg(message: _43.QueryCondition): _43.QueryConditionProtoMsg;
        };
        SyntheticLock: {
            typeUrl: string;
            encode(message: _43.SyntheticLock, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _43.SyntheticLock;
            fromPartial(object: Partial<_43.SyntheticLock>): _43.SyntheticLock;
            fromAmino(object: _43.SyntheticLockAmino): _43.SyntheticLock;
            toAmino(message: _43.SyntheticLock): _43.SyntheticLockAmino;
            fromAminoMsg(object: _43.SyntheticLockAminoMsg): _43.SyntheticLock;
            toAminoMsg(message: _43.SyntheticLock): _43.SyntheticLockAminoMsg;
            fromProtoMsg(message: _43.SyntheticLockProtoMsg): _43.SyntheticLock;
            toProto(message: _43.SyntheticLock): Uint8Array;
            toProtoMsg(message: _43.SyntheticLock): _43.SyntheticLockProtoMsg;
        };
        GenesisState: {
            typeUrl: string;
            encode(message: _42.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _42.GenesisState;
            fromPartial(object: Partial<_42.GenesisState>): _42.GenesisState;
            fromAmino(object: _42.GenesisStateAmino): _42.GenesisState;
            toAmino(message: _42.GenesisState): _42.GenesisStateAmino;
            fromAminoMsg(object: _42.GenesisStateAminoMsg): _42.GenesisState;
            toAminoMsg(message: _42.GenesisState): _42.GenesisStateAminoMsg;
            fromProtoMsg(message: _42.GenesisStateProtoMsg): _42.GenesisState;
            toProto(message: _42.GenesisState): Uint8Array;
            toProtoMsg(message: _42.GenesisState): _42.GenesisStateProtoMsg;
        };
    };
    namespace mint {
        const v1beta1: {
            QueryClientImpl: typeof _309.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                params(request?: _49.QueryParamsRequest): Promise<_49.QueryParamsResponse>;
                epochProvisions(request?: _49.QueryEpochProvisionsRequest): Promise<_49.QueryEpochProvisionsResponse>;
            };
            LCDQueryClient: typeof _290.LCDQueryClient;
            QueryParamsRequest: {
                typeUrl: string;
                encode(_: _49.QueryParamsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _49.QueryParamsRequest;
                fromPartial(_: Partial<_49.QueryParamsRequest>): _49.QueryParamsRequest;
                fromAmino(_: _49.QueryParamsRequestAmino): _49.QueryParamsRequest;
                toAmino(_: _49.QueryParamsRequest): _49.QueryParamsRequestAmino;
                fromAminoMsg(object: _49.QueryParamsRequestAminoMsg): _49.QueryParamsRequest;
                toAminoMsg(message: _49.QueryParamsRequest): _49.QueryParamsRequestAminoMsg;
                fromProtoMsg(message: _49.QueryParamsRequestProtoMsg): _49.QueryParamsRequest;
                toProto(message: _49.QueryParamsRequest): Uint8Array;
                toProtoMsg(message: _49.QueryParamsRequest): _49.QueryParamsRequestProtoMsg;
            };
            QueryParamsResponse: {
                typeUrl: string;
                encode(message: _49.QueryParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _49.QueryParamsResponse;
                fromPartial(object: Partial<_49.QueryParamsResponse>): _49.QueryParamsResponse;
                fromAmino(object: _49.QueryParamsResponseAmino): _49.QueryParamsResponse;
                toAmino(message: _49.QueryParamsResponse): _49.QueryParamsResponseAmino;
                fromAminoMsg(object: _49.QueryParamsResponseAminoMsg): _49.QueryParamsResponse;
                toAminoMsg(message: _49.QueryParamsResponse): _49.QueryParamsResponseAminoMsg;
                fromProtoMsg(message: _49.QueryParamsResponseProtoMsg): _49.QueryParamsResponse;
                toProto(message: _49.QueryParamsResponse): Uint8Array;
                toProtoMsg(message: _49.QueryParamsResponse): _49.QueryParamsResponseProtoMsg;
            };
            QueryEpochProvisionsRequest: {
                typeUrl: string;
                encode(_: _49.QueryEpochProvisionsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _49.QueryEpochProvisionsRequest;
                fromPartial(_: Partial<_49.QueryEpochProvisionsRequest>): _49.QueryEpochProvisionsRequest;
                fromAmino(_: _49.QueryEpochProvisionsRequestAmino): _49.QueryEpochProvisionsRequest;
                toAmino(_: _49.QueryEpochProvisionsRequest): _49.QueryEpochProvisionsRequestAmino;
                fromAminoMsg(object: _49.QueryEpochProvisionsRequestAminoMsg): _49.QueryEpochProvisionsRequest;
                toAminoMsg(message: _49.QueryEpochProvisionsRequest): _49.QueryEpochProvisionsRequestAminoMsg;
                fromProtoMsg(message: _49.QueryEpochProvisionsRequestProtoMsg): _49.QueryEpochProvisionsRequest;
                toProto(message: _49.QueryEpochProvisionsRequest): Uint8Array;
                toProtoMsg(message: _49.QueryEpochProvisionsRequest): _49.QueryEpochProvisionsRequestProtoMsg;
            };
            QueryEpochProvisionsResponse: {
                typeUrl: string;
                encode(message: _49.QueryEpochProvisionsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _49.QueryEpochProvisionsResponse;
                fromPartial(object: Partial<_49.QueryEpochProvisionsResponse>): _49.QueryEpochProvisionsResponse;
                fromAmino(object: _49.QueryEpochProvisionsResponseAmino): _49.QueryEpochProvisionsResponse;
                toAmino(message: _49.QueryEpochProvisionsResponse): _49.QueryEpochProvisionsResponseAmino;
                fromAminoMsg(object: _49.QueryEpochProvisionsResponseAminoMsg): _49.QueryEpochProvisionsResponse;
                toAminoMsg(message: _49.QueryEpochProvisionsResponse): _49.QueryEpochProvisionsResponseAminoMsg;
                fromProtoMsg(message: _49.QueryEpochProvisionsResponseProtoMsg): _49.QueryEpochProvisionsResponse;
                toProto(message: _49.QueryEpochProvisionsResponse): Uint8Array;
                toProtoMsg(message: _49.QueryEpochProvisionsResponse): _49.QueryEpochProvisionsResponseProtoMsg;
            };
            Minter: {
                typeUrl: string;
                encode(message: _48.Minter, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _48.Minter;
                fromPartial(object: Partial<_48.Minter>): _48.Minter;
                fromAmino(object: _48.MinterAmino): _48.Minter;
                toAmino(message: _48.Minter): _48.MinterAmino;
                fromAminoMsg(object: _48.MinterAminoMsg): _48.Minter;
                toAminoMsg(message: _48.Minter): _48.MinterAminoMsg;
                fromProtoMsg(message: _48.MinterProtoMsg): _48.Minter;
                toProto(message: _48.Minter): Uint8Array;
                toProtoMsg(message: _48.Minter): _48.MinterProtoMsg;
            };
            WeightedAddress: {
                typeUrl: string;
                encode(message: _48.WeightedAddress, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _48.WeightedAddress;
                fromPartial(object: Partial<_48.WeightedAddress>): _48.WeightedAddress;
                fromAmino(object: _48.WeightedAddressAmino): _48.WeightedAddress;
                toAmino(message: _48.WeightedAddress): _48.WeightedAddressAmino;
                fromAminoMsg(object: _48.WeightedAddressAminoMsg): _48.WeightedAddress;
                toAminoMsg(message: _48.WeightedAddress): _48.WeightedAddressAminoMsg;
                fromProtoMsg(message: _48.WeightedAddressProtoMsg): _48.WeightedAddress;
                toProto(message: _48.WeightedAddress): Uint8Array;
                toProtoMsg(message: _48.WeightedAddress): _48.WeightedAddressProtoMsg;
            };
            DistributionProportions: {
                typeUrl: string;
                encode(message: _48.DistributionProportions, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _48.DistributionProportions;
                fromPartial(object: Partial<_48.DistributionProportions>): _48.DistributionProportions;
                fromAmino(object: _48.DistributionProportionsAmino): _48.DistributionProportions;
                toAmino(message: _48.DistributionProportions): _48.DistributionProportionsAmino;
                fromAminoMsg(object: _48.DistributionProportionsAminoMsg): _48.DistributionProportions;
                toAminoMsg(message: _48.DistributionProportions): _48.DistributionProportionsAminoMsg;
                fromProtoMsg(message: _48.DistributionProportionsProtoMsg): _48.DistributionProportions;
                toProto(message: _48.DistributionProportions): Uint8Array;
                toProtoMsg(message: _48.DistributionProportions): _48.DistributionProportionsProtoMsg;
            };
            Params: {
                typeUrl: string;
                encode(message: _48.Params, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _48.Params;
                fromPartial(object: Partial<_48.Params>): _48.Params;
                fromAmino(object: _48.ParamsAmino): _48.Params;
                toAmino(message: _48.Params): _48.ParamsAmino;
                fromAminoMsg(object: _48.ParamsAminoMsg): _48.Params;
                toAminoMsg(message: _48.Params): _48.ParamsAminoMsg;
                fromProtoMsg(message: _48.ParamsProtoMsg): _48.Params;
                toProto(message: _48.Params): Uint8Array;
                toProtoMsg(message: _48.Params): _48.ParamsProtoMsg;
            };
            GenesisState: {
                typeUrl: string;
                encode(message: _47.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _47.GenesisState;
                fromPartial(object: Partial<_47.GenesisState>): _47.GenesisState;
                fromAmino(object: _47.GenesisStateAmino): _47.GenesisState;
                toAmino(message: _47.GenesisState): _47.GenesisStateAmino;
                fromAminoMsg(object: _47.GenesisStateAminoMsg): _47.GenesisState;
                toAminoMsg(message: _47.GenesisState): _47.GenesisStateAminoMsg;
                fromProtoMsg(message: _47.GenesisStateProtoMsg): _47.GenesisState;
                toProto(message: _47.GenesisState): Uint8Array;
                toProtoMsg(message: _47.GenesisState): _47.GenesisStateProtoMsg;
            };
        };
    }
    namespace poolincentives {
        const v1beta1: {
            QueryClientImpl: typeof _310.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                gaugeIds(request: _53.QueryGaugeIdsRequest): Promise<_53.QueryGaugeIdsResponse>;
                distrInfo(request?: _53.QueryDistrInfoRequest): Promise<_53.QueryDistrInfoResponse>;
                params(request?: _53.QueryParamsRequest): Promise<_53.QueryParamsResponse>;
                lockableDurations(request?: _53.QueryLockableDurationsRequest): Promise<_53.QueryLockableDurationsResponse>;
                incentivizedPools(request?: _53.QueryIncentivizedPoolsRequest): Promise<_53.QueryIncentivizedPoolsResponse>;
                externalIncentiveGauges(request?: _53.QueryExternalIncentiveGaugesRequest): Promise<_53.QueryExternalIncentiveGaugesResponse>;
            };
            LCDQueryClient: typeof _291.LCDQueryClient;
            MigrationRecords: {
                typeUrl: string;
                encode(message: _54.MigrationRecords, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _54.MigrationRecords;
                fromPartial(object: Partial<_54.MigrationRecords>): _54.MigrationRecords;
                fromAmino(object: _54.MigrationRecordsAmino): _54.MigrationRecords;
                toAmino(message: _54.MigrationRecords): _54.MigrationRecordsAmino;
                fromAminoMsg(object: _54.MigrationRecordsAminoMsg): _54.MigrationRecords;
                toAminoMsg(message: _54.MigrationRecords): _54.MigrationRecordsAminoMsg;
                fromProtoMsg(message: _54.MigrationRecordsProtoMsg): _54.MigrationRecords;
                toProto(message: _54.MigrationRecords): Uint8Array;
                toProtoMsg(message: _54.MigrationRecords): _54.MigrationRecordsProtoMsg;
            };
            BalancerToConcentratedPoolLink: {
                typeUrl: string;
                encode(message: _54.BalancerToConcentratedPoolLink, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _54.BalancerToConcentratedPoolLink;
                fromPartial(object: Partial<_54.BalancerToConcentratedPoolLink>): _54.BalancerToConcentratedPoolLink;
                fromAmino(object: _54.BalancerToConcentratedPoolLinkAmino): _54.BalancerToConcentratedPoolLink;
                toAmino(message: _54.BalancerToConcentratedPoolLink): _54.BalancerToConcentratedPoolLinkAmino;
                fromAminoMsg(object: _54.BalancerToConcentratedPoolLinkAminoMsg): _54.BalancerToConcentratedPoolLink;
                toAminoMsg(message: _54.BalancerToConcentratedPoolLink): _54.BalancerToConcentratedPoolLinkAminoMsg;
                fromProtoMsg(message: _54.BalancerToConcentratedPoolLinkProtoMsg): _54.BalancerToConcentratedPoolLink;
                toProto(message: _54.BalancerToConcentratedPoolLink): Uint8Array;
                toProtoMsg(message: _54.BalancerToConcentratedPoolLink): _54.BalancerToConcentratedPoolLinkProtoMsg;
            };
            QueryGaugeIdsRequest: {
                typeUrl: string;
                encode(message: _53.QueryGaugeIdsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _53.QueryGaugeIdsRequest;
                fromPartial(object: Partial<_53.QueryGaugeIdsRequest>): _53.QueryGaugeIdsRequest;
                fromAmino(object: _53.QueryGaugeIdsRequestAmino): _53.QueryGaugeIdsRequest;
                toAmino(message: _53.QueryGaugeIdsRequest): _53.QueryGaugeIdsRequestAmino;
                fromAminoMsg(object: _53.QueryGaugeIdsRequestAminoMsg): _53.QueryGaugeIdsRequest;
                toAminoMsg(message: _53.QueryGaugeIdsRequest): _53.QueryGaugeIdsRequestAminoMsg;
                fromProtoMsg(message: _53.QueryGaugeIdsRequestProtoMsg): _53.QueryGaugeIdsRequest;
                toProto(message: _53.QueryGaugeIdsRequest): Uint8Array;
                toProtoMsg(message: _53.QueryGaugeIdsRequest): _53.QueryGaugeIdsRequestProtoMsg;
            };
            QueryGaugeIdsResponse: {
                typeUrl: string;
                encode(message: _53.QueryGaugeIdsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _53.QueryGaugeIdsResponse;
                fromPartial(object: Partial<_53.QueryGaugeIdsResponse>): _53.QueryGaugeIdsResponse;
                fromAmino(object: _53.QueryGaugeIdsResponseAmino): _53.QueryGaugeIdsResponse;
                toAmino(message: _53.QueryGaugeIdsResponse): _53.QueryGaugeIdsResponseAmino;
                fromAminoMsg(object: _53.QueryGaugeIdsResponseAminoMsg): _53.QueryGaugeIdsResponse;
                toAminoMsg(message: _53.QueryGaugeIdsResponse): _53.QueryGaugeIdsResponseAminoMsg;
                fromProtoMsg(message: _53.QueryGaugeIdsResponseProtoMsg): _53.QueryGaugeIdsResponse;
                toProto(message: _53.QueryGaugeIdsResponse): Uint8Array;
                toProtoMsg(message: _53.QueryGaugeIdsResponse): _53.QueryGaugeIdsResponseProtoMsg;
            };
            QueryGaugeIdsResponse_GaugeIdWithDuration: {
                typeUrl: string;
                encode(message: _53.QueryGaugeIdsResponse_GaugeIdWithDuration, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _53.QueryGaugeIdsResponse_GaugeIdWithDuration;
                fromPartial(object: Partial<_53.QueryGaugeIdsResponse_GaugeIdWithDuration>): _53.QueryGaugeIdsResponse_GaugeIdWithDuration;
                fromAmino(object: _53.QueryGaugeIdsResponse_GaugeIdWithDurationAmino): _53.QueryGaugeIdsResponse_GaugeIdWithDuration;
                toAmino(message: _53.QueryGaugeIdsResponse_GaugeIdWithDuration): _53.QueryGaugeIdsResponse_GaugeIdWithDurationAmino;
                fromAminoMsg(object: _53.QueryGaugeIdsResponse_GaugeIdWithDurationAminoMsg): _53.QueryGaugeIdsResponse_GaugeIdWithDuration;
                toAminoMsg(message: _53.QueryGaugeIdsResponse_GaugeIdWithDuration): _53.QueryGaugeIdsResponse_GaugeIdWithDurationAminoMsg;
                fromProtoMsg(message: _53.QueryGaugeIdsResponse_GaugeIdWithDurationProtoMsg): _53.QueryGaugeIdsResponse_GaugeIdWithDuration;
                toProto(message: _53.QueryGaugeIdsResponse_GaugeIdWithDuration): Uint8Array;
                toProtoMsg(message: _53.QueryGaugeIdsResponse_GaugeIdWithDuration): _53.QueryGaugeIdsResponse_GaugeIdWithDurationProtoMsg;
            };
            QueryDistrInfoRequest: {
                typeUrl: string;
                encode(_: _53.QueryDistrInfoRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _53.QueryDistrInfoRequest;
                fromPartial(_: Partial<_53.QueryDistrInfoRequest>): _53.QueryDistrInfoRequest;
                fromAmino(_: _53.QueryDistrInfoRequestAmino): _53.QueryDistrInfoRequest;
                toAmino(_: _53.QueryDistrInfoRequest): _53.QueryDistrInfoRequestAmino;
                fromAminoMsg(object: _53.QueryDistrInfoRequestAminoMsg): _53.QueryDistrInfoRequest;
                toAminoMsg(message: _53.QueryDistrInfoRequest): _53.QueryDistrInfoRequestAminoMsg;
                fromProtoMsg(message: _53.QueryDistrInfoRequestProtoMsg): _53.QueryDistrInfoRequest;
                toProto(message: _53.QueryDistrInfoRequest): Uint8Array;
                toProtoMsg(message: _53.QueryDistrInfoRequest): _53.QueryDistrInfoRequestProtoMsg;
            };
            QueryDistrInfoResponse: {
                typeUrl: string;
                encode(message: _53.QueryDistrInfoResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _53.QueryDistrInfoResponse;
                fromPartial(object: Partial<_53.QueryDistrInfoResponse>): _53.QueryDistrInfoResponse;
                fromAmino(object: _53.QueryDistrInfoResponseAmino): _53.QueryDistrInfoResponse;
                toAmino(message: _53.QueryDistrInfoResponse): _53.QueryDistrInfoResponseAmino;
                fromAminoMsg(object: _53.QueryDistrInfoResponseAminoMsg): _53.QueryDistrInfoResponse;
                toAminoMsg(message: _53.QueryDistrInfoResponse): _53.QueryDistrInfoResponseAminoMsg;
                fromProtoMsg(message: _53.QueryDistrInfoResponseProtoMsg): _53.QueryDistrInfoResponse;
                toProto(message: _53.QueryDistrInfoResponse): Uint8Array;
                toProtoMsg(message: _53.QueryDistrInfoResponse): _53.QueryDistrInfoResponseProtoMsg;
            };
            QueryParamsRequest: {
                typeUrl: string;
                encode(_: _53.QueryParamsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _53.QueryParamsRequest;
                fromPartial(_: Partial<_53.QueryParamsRequest>): _53.QueryParamsRequest;
                fromAmino(_: _53.QueryParamsRequestAmino): _53.QueryParamsRequest;
                toAmino(_: _53.QueryParamsRequest): _53.QueryParamsRequestAmino;
                fromAminoMsg(object: _53.QueryParamsRequestAminoMsg): _53.QueryParamsRequest;
                toAminoMsg(message: _53.QueryParamsRequest): _53.QueryParamsRequestAminoMsg;
                fromProtoMsg(message: _53.QueryParamsRequestProtoMsg): _53.QueryParamsRequest;
                toProto(message: _53.QueryParamsRequest): Uint8Array;
                toProtoMsg(message: _53.QueryParamsRequest): _53.QueryParamsRequestProtoMsg;
            };
            QueryParamsResponse: {
                typeUrl: string;
                encode(message: _53.QueryParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _53.QueryParamsResponse;
                fromPartial(object: Partial<_53.QueryParamsResponse>): _53.QueryParamsResponse;
                fromAmino(object: _53.QueryParamsResponseAmino): _53.QueryParamsResponse;
                toAmino(message: _53.QueryParamsResponse): _53.QueryParamsResponseAmino;
                fromAminoMsg(object: _53.QueryParamsResponseAminoMsg): _53.QueryParamsResponse;
                toAminoMsg(message: _53.QueryParamsResponse): _53.QueryParamsResponseAminoMsg;
                fromProtoMsg(message: _53.QueryParamsResponseProtoMsg): _53.QueryParamsResponse;
                toProto(message: _53.QueryParamsResponse): Uint8Array;
                toProtoMsg(message: _53.QueryParamsResponse): _53.QueryParamsResponseProtoMsg;
            };
            QueryLockableDurationsRequest: {
                typeUrl: string;
                encode(_: _53.QueryLockableDurationsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _53.QueryLockableDurationsRequest;
                fromPartial(_: Partial<_53.QueryLockableDurationsRequest>): _53.QueryLockableDurationsRequest;
                fromAmino(_: _53.QueryLockableDurationsRequestAmino): _53.QueryLockableDurationsRequest;
                toAmino(_: _53.QueryLockableDurationsRequest): _53.QueryLockableDurationsRequestAmino;
                fromAminoMsg(object: _53.QueryLockableDurationsRequestAminoMsg): _53.QueryLockableDurationsRequest;
                toAminoMsg(message: _53.QueryLockableDurationsRequest): _53.QueryLockableDurationsRequestAminoMsg;
                fromProtoMsg(message: _53.QueryLockableDurationsRequestProtoMsg): _53.QueryLockableDurationsRequest;
                toProto(message: _53.QueryLockableDurationsRequest): Uint8Array;
                toProtoMsg(message: _53.QueryLockableDurationsRequest): _53.QueryLockableDurationsRequestProtoMsg;
            };
            QueryLockableDurationsResponse: {
                typeUrl: string;
                encode(message: _53.QueryLockableDurationsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _53.QueryLockableDurationsResponse;
                fromPartial(object: Partial<_53.QueryLockableDurationsResponse>): _53.QueryLockableDurationsResponse;
                fromAmino(object: _53.QueryLockableDurationsResponseAmino): _53.QueryLockableDurationsResponse;
                toAmino(message: _53.QueryLockableDurationsResponse): _53.QueryLockableDurationsResponseAmino;
                fromAminoMsg(object: _53.QueryLockableDurationsResponseAminoMsg): _53.QueryLockableDurationsResponse;
                toAminoMsg(message: _53.QueryLockableDurationsResponse): _53.QueryLockableDurationsResponseAminoMsg;
                fromProtoMsg(message: _53.QueryLockableDurationsResponseProtoMsg): _53.QueryLockableDurationsResponse;
                toProto(message: _53.QueryLockableDurationsResponse): Uint8Array;
                toProtoMsg(message: _53.QueryLockableDurationsResponse): _53.QueryLockableDurationsResponseProtoMsg;
            };
            QueryIncentivizedPoolsRequest: {
                typeUrl: string;
                encode(_: _53.QueryIncentivizedPoolsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _53.QueryIncentivizedPoolsRequest;
                fromPartial(_: Partial<_53.QueryIncentivizedPoolsRequest>): _53.QueryIncentivizedPoolsRequest;
                fromAmino(_: _53.QueryIncentivizedPoolsRequestAmino): _53.QueryIncentivizedPoolsRequest;
                toAmino(_: _53.QueryIncentivizedPoolsRequest): _53.QueryIncentivizedPoolsRequestAmino;
                fromAminoMsg(object: _53.QueryIncentivizedPoolsRequestAminoMsg): _53.QueryIncentivizedPoolsRequest;
                toAminoMsg(message: _53.QueryIncentivizedPoolsRequest): _53.QueryIncentivizedPoolsRequestAminoMsg;
                fromProtoMsg(message: _53.QueryIncentivizedPoolsRequestProtoMsg): _53.QueryIncentivizedPoolsRequest;
                toProto(message: _53.QueryIncentivizedPoolsRequest): Uint8Array;
                toProtoMsg(message: _53.QueryIncentivizedPoolsRequest): _53.QueryIncentivizedPoolsRequestProtoMsg;
            };
            IncentivizedPool: {
                typeUrl: string;
                encode(message: _53.IncentivizedPool, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _53.IncentivizedPool;
                fromPartial(object: Partial<_53.IncentivizedPool>): _53.IncentivizedPool;
                fromAmino(object: _53.IncentivizedPoolAmino): _53.IncentivizedPool;
                toAmino(message: _53.IncentivizedPool): _53.IncentivizedPoolAmino;
                fromAminoMsg(object: _53.IncentivizedPoolAminoMsg): _53.IncentivizedPool;
                toAminoMsg(message: _53.IncentivizedPool): _53.IncentivizedPoolAminoMsg;
                fromProtoMsg(message: _53.IncentivizedPoolProtoMsg): _53.IncentivizedPool;
                toProto(message: _53.IncentivizedPool): Uint8Array;
                toProtoMsg(message: _53.IncentivizedPool): _53.IncentivizedPoolProtoMsg;
            };
            QueryIncentivizedPoolsResponse: {
                typeUrl: string;
                encode(message: _53.QueryIncentivizedPoolsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _53.QueryIncentivizedPoolsResponse;
                fromPartial(object: Partial<_53.QueryIncentivizedPoolsResponse>): _53.QueryIncentivizedPoolsResponse;
                fromAmino(object: _53.QueryIncentivizedPoolsResponseAmino): _53.QueryIncentivizedPoolsResponse;
                toAmino(message: _53.QueryIncentivizedPoolsResponse): _53.QueryIncentivizedPoolsResponseAmino;
                fromAminoMsg(object: _53.QueryIncentivizedPoolsResponseAminoMsg): _53.QueryIncentivizedPoolsResponse;
                toAminoMsg(message: _53.QueryIncentivizedPoolsResponse): _53.QueryIncentivizedPoolsResponseAminoMsg;
                fromProtoMsg(message: _53.QueryIncentivizedPoolsResponseProtoMsg): _53.QueryIncentivizedPoolsResponse;
                toProto(message: _53.QueryIncentivizedPoolsResponse): Uint8Array;
                toProtoMsg(message: _53.QueryIncentivizedPoolsResponse): _53.QueryIncentivizedPoolsResponseProtoMsg;
            };
            QueryExternalIncentiveGaugesRequest: {
                typeUrl: string;
                encode(_: _53.QueryExternalIncentiveGaugesRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _53.QueryExternalIncentiveGaugesRequest;
                fromPartial(_: Partial<_53.QueryExternalIncentiveGaugesRequest>): _53.QueryExternalIncentiveGaugesRequest;
                fromAmino(_: _53.QueryExternalIncentiveGaugesRequestAmino): _53.QueryExternalIncentiveGaugesRequest;
                toAmino(_: _53.QueryExternalIncentiveGaugesRequest): _53.QueryExternalIncentiveGaugesRequestAmino;
                fromAminoMsg(object: _53.QueryExternalIncentiveGaugesRequestAminoMsg): _53.QueryExternalIncentiveGaugesRequest;
                toAminoMsg(message: _53.QueryExternalIncentiveGaugesRequest): _53.QueryExternalIncentiveGaugesRequestAminoMsg;
                fromProtoMsg(message: _53.QueryExternalIncentiveGaugesRequestProtoMsg): _53.QueryExternalIncentiveGaugesRequest;
                toProto(message: _53.QueryExternalIncentiveGaugesRequest): Uint8Array;
                toProtoMsg(message: _53.QueryExternalIncentiveGaugesRequest): _53.QueryExternalIncentiveGaugesRequestProtoMsg;
            };
            QueryExternalIncentiveGaugesResponse: {
                typeUrl: string;
                encode(message: _53.QueryExternalIncentiveGaugesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _53.QueryExternalIncentiveGaugesResponse;
                fromPartial(object: Partial<_53.QueryExternalIncentiveGaugesResponse>): _53.QueryExternalIncentiveGaugesResponse;
                fromAmino(object: _53.QueryExternalIncentiveGaugesResponseAmino): _53.QueryExternalIncentiveGaugesResponse;
                toAmino(message: _53.QueryExternalIncentiveGaugesResponse): _53.QueryExternalIncentiveGaugesResponseAmino;
                fromAminoMsg(object: _53.QueryExternalIncentiveGaugesResponseAminoMsg): _53.QueryExternalIncentiveGaugesResponse;
                toAminoMsg(message: _53.QueryExternalIncentiveGaugesResponse): _53.QueryExternalIncentiveGaugesResponseAminoMsg;
                fromProtoMsg(message: _53.QueryExternalIncentiveGaugesResponseProtoMsg): _53.QueryExternalIncentiveGaugesResponse;
                toProto(message: _53.QueryExternalIncentiveGaugesResponse): Uint8Array;
                toProtoMsg(message: _53.QueryExternalIncentiveGaugesResponse): _53.QueryExternalIncentiveGaugesResponseProtoMsg;
            };
            Params: {
                typeUrl: string;
                encode(message: _52.Params, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _52.Params;
                fromPartial(object: Partial<_52.Params>): _52.Params;
                fromAmino(object: _52.ParamsAmino): _52.Params;
                toAmino(message: _52.Params): _52.ParamsAmino;
                fromAminoMsg(object: _52.ParamsAminoMsg): _52.Params;
                toAminoMsg(message: _52.Params): _52.ParamsAminoMsg;
                fromProtoMsg(message: _52.ParamsProtoMsg): _52.Params;
                toProto(message: _52.Params): Uint8Array;
                toProtoMsg(message: _52.Params): _52.ParamsProtoMsg;
            };
            LockableDurationsInfo: {
                typeUrl: string;
                encode(message: _52.LockableDurationsInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _52.LockableDurationsInfo;
                fromPartial(object: Partial<_52.LockableDurationsInfo>): _52.LockableDurationsInfo;
                fromAmino(object: _52.LockableDurationsInfoAmino): _52.LockableDurationsInfo;
                toAmino(message: _52.LockableDurationsInfo): _52.LockableDurationsInfoAmino;
                fromAminoMsg(object: _52.LockableDurationsInfoAminoMsg): _52.LockableDurationsInfo;
                toAminoMsg(message: _52.LockableDurationsInfo): _52.LockableDurationsInfoAminoMsg;
                fromProtoMsg(message: _52.LockableDurationsInfoProtoMsg): _52.LockableDurationsInfo;
                toProto(message: _52.LockableDurationsInfo): Uint8Array;
                toProtoMsg(message: _52.LockableDurationsInfo): _52.LockableDurationsInfoProtoMsg;
            };
            DistrInfo: {
                typeUrl: string;
                encode(message: _52.DistrInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _52.DistrInfo;
                fromPartial(object: Partial<_52.DistrInfo>): _52.DistrInfo;
                fromAmino(object: _52.DistrInfoAmino): _52.DistrInfo;
                toAmino(message: _52.DistrInfo): _52.DistrInfoAmino;
                fromAminoMsg(object: _52.DistrInfoAminoMsg): _52.DistrInfo;
                toAminoMsg(message: _52.DistrInfo): _52.DistrInfoAminoMsg;
                fromProtoMsg(message: _52.DistrInfoProtoMsg): _52.DistrInfo;
                toProto(message: _52.DistrInfo): Uint8Array;
                toProtoMsg(message: _52.DistrInfo): _52.DistrInfoProtoMsg;
            };
            DistrRecord: {
                typeUrl: string;
                encode(message: _52.DistrRecord, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _52.DistrRecord;
                fromPartial(object: Partial<_52.DistrRecord>): _52.DistrRecord;
                fromAmino(object: _52.DistrRecordAmino): _52.DistrRecord;
                toAmino(message: _52.DistrRecord): _52.DistrRecordAmino;
                fromAminoMsg(object: _52.DistrRecordAminoMsg): _52.DistrRecord;
                toAminoMsg(message: _52.DistrRecord): _52.DistrRecordAminoMsg;
                fromProtoMsg(message: _52.DistrRecordProtoMsg): _52.DistrRecord;
                toProto(message: _52.DistrRecord): Uint8Array;
                toProtoMsg(message: _52.DistrRecord): _52.DistrRecordProtoMsg;
            };
            PoolToGauge: {
                typeUrl: string;
                encode(message: _52.PoolToGauge, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _52.PoolToGauge;
                fromPartial(object: Partial<_52.PoolToGauge>): _52.PoolToGauge;
                fromAmino(object: _52.PoolToGaugeAmino): _52.PoolToGauge;
                toAmino(message: _52.PoolToGauge): _52.PoolToGaugeAmino;
                fromAminoMsg(object: _52.PoolToGaugeAminoMsg): _52.PoolToGauge;
                toAminoMsg(message: _52.PoolToGauge): _52.PoolToGaugeAminoMsg;
                fromProtoMsg(message: _52.PoolToGaugeProtoMsg): _52.PoolToGauge;
                toProto(message: _52.PoolToGauge): Uint8Array;
                toProtoMsg(message: _52.PoolToGauge): _52.PoolToGaugeProtoMsg;
            };
            AnyPoolToInternalGauges: {
                typeUrl: string;
                encode(message: _52.AnyPoolToInternalGauges, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _52.AnyPoolToInternalGauges;
                fromPartial(object: Partial<_52.AnyPoolToInternalGauges>): _52.AnyPoolToInternalGauges;
                fromAmino(object: _52.AnyPoolToInternalGaugesAmino): _52.AnyPoolToInternalGauges;
                toAmino(message: _52.AnyPoolToInternalGauges): _52.AnyPoolToInternalGaugesAmino;
                fromAminoMsg(object: _52.AnyPoolToInternalGaugesAminoMsg): _52.AnyPoolToInternalGauges;
                toAminoMsg(message: _52.AnyPoolToInternalGauges): _52.AnyPoolToInternalGaugesAminoMsg;
                fromProtoMsg(message: _52.AnyPoolToInternalGaugesProtoMsg): _52.AnyPoolToInternalGauges;
                toProto(message: _52.AnyPoolToInternalGauges): Uint8Array;
                toProtoMsg(message: _52.AnyPoolToInternalGauges): _52.AnyPoolToInternalGaugesProtoMsg;
            };
            ConcentratedPoolToNoLockGauges: {
                typeUrl: string;
                encode(message: _52.ConcentratedPoolToNoLockGauges, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _52.ConcentratedPoolToNoLockGauges;
                fromPartial(object: Partial<_52.ConcentratedPoolToNoLockGauges>): _52.ConcentratedPoolToNoLockGauges;
                fromAmino(object: _52.ConcentratedPoolToNoLockGaugesAmino): _52.ConcentratedPoolToNoLockGauges;
                toAmino(message: _52.ConcentratedPoolToNoLockGauges): _52.ConcentratedPoolToNoLockGaugesAmino;
                fromAminoMsg(object: _52.ConcentratedPoolToNoLockGaugesAminoMsg): _52.ConcentratedPoolToNoLockGauges;
                toAminoMsg(message: _52.ConcentratedPoolToNoLockGauges): _52.ConcentratedPoolToNoLockGaugesAminoMsg;
                fromProtoMsg(message: _52.ConcentratedPoolToNoLockGaugesProtoMsg): _52.ConcentratedPoolToNoLockGauges;
                toProto(message: _52.ConcentratedPoolToNoLockGauges): Uint8Array;
                toProtoMsg(message: _52.ConcentratedPoolToNoLockGauges): _52.ConcentratedPoolToNoLockGaugesProtoMsg;
            };
            ReplacePoolIncentivesProposal: {
                typeUrl: string;
                encode(message: _51.ReplacePoolIncentivesProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _51.ReplacePoolIncentivesProposal;
                fromPartial(object: Partial<_51.ReplacePoolIncentivesProposal>): _51.ReplacePoolIncentivesProposal;
                fromAmino(object: _51.ReplacePoolIncentivesProposalAmino): _51.ReplacePoolIncentivesProposal;
                toAmino(message: _51.ReplacePoolIncentivesProposal): _51.ReplacePoolIncentivesProposalAmino;
                fromAminoMsg(object: _51.ReplacePoolIncentivesProposalAminoMsg): _51.ReplacePoolIncentivesProposal;
                toAminoMsg(message: _51.ReplacePoolIncentivesProposal): _51.ReplacePoolIncentivesProposalAminoMsg;
                fromProtoMsg(message: _51.ReplacePoolIncentivesProposalProtoMsg): _51.ReplacePoolIncentivesProposal;
                toProto(message: _51.ReplacePoolIncentivesProposal): Uint8Array;
                toProtoMsg(message: _51.ReplacePoolIncentivesProposal): _51.ReplacePoolIncentivesProposalProtoMsg;
            };
            UpdatePoolIncentivesProposal: {
                typeUrl: string;
                encode(message: _51.UpdatePoolIncentivesProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _51.UpdatePoolIncentivesProposal;
                fromPartial(object: Partial<_51.UpdatePoolIncentivesProposal>): _51.UpdatePoolIncentivesProposal;
                fromAmino(object: _51.UpdatePoolIncentivesProposalAmino): _51.UpdatePoolIncentivesProposal;
                toAmino(message: _51.UpdatePoolIncentivesProposal): _51.UpdatePoolIncentivesProposalAmino;
                fromAminoMsg(object: _51.UpdatePoolIncentivesProposalAminoMsg): _51.UpdatePoolIncentivesProposal;
                toAminoMsg(message: _51.UpdatePoolIncentivesProposal): _51.UpdatePoolIncentivesProposalAminoMsg;
                fromProtoMsg(message: _51.UpdatePoolIncentivesProposalProtoMsg): _51.UpdatePoolIncentivesProposal;
                toProto(message: _51.UpdatePoolIncentivesProposal): Uint8Array;
                toProtoMsg(message: _51.UpdatePoolIncentivesProposal): _51.UpdatePoolIncentivesProposalProtoMsg;
            };
            GenesisState: {
                typeUrl: string;
                encode(message: _50.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _50.GenesisState;
                fromPartial(object: Partial<_50.GenesisState>): _50.GenesisState;
                fromAmino(object: _50.GenesisStateAmino): _50.GenesisState;
                toAmino(message: _50.GenesisState): _50.GenesisStateAmino;
                fromAminoMsg(object: _50.GenesisStateAminoMsg): _50.GenesisState;
                toAminoMsg(message: _50.GenesisState): _50.GenesisStateAminoMsg;
                fromProtoMsg(message: _50.GenesisStateProtoMsg): _50.GenesisState;
                toProto(message: _50.GenesisState): Uint8Array;
                toProtoMsg(message: _50.GenesisState): _50.GenesisStateProtoMsg;
            };
        };
    }
    namespace poolmanager {
        const v1beta1: {
            MsgClientImpl: typeof _327.MsgClientImpl;
            QueryClientImpl: typeof _311.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                params(request?: _58.ParamsRequest): Promise<_58.ParamsResponse>;
                estimateSwapExactAmountIn(request: _58.EstimateSwapExactAmountInRequest): Promise<_58.EstimateSwapExactAmountInResponse>;
                estimateSwapExactAmountInWithPrimitiveTypes(request: _58.EstimateSwapExactAmountInWithPrimitiveTypesRequest): Promise<_58.EstimateSwapExactAmountInResponse>;
                estimateSinglePoolSwapExactAmountIn(request: _58.EstimateSinglePoolSwapExactAmountInRequest): Promise<_58.EstimateSwapExactAmountInResponse>;
                estimateSwapExactAmountOut(request: _58.EstimateSwapExactAmountOutRequest): Promise<_58.EstimateSwapExactAmountOutResponse>;
                estimateSwapExactAmountOutWithPrimitiveTypes(request: _58.EstimateSwapExactAmountOutWithPrimitiveTypesRequest): Promise<_58.EstimateSwapExactAmountOutResponse>;
                estimateSinglePoolSwapExactAmountOut(request: _58.EstimateSinglePoolSwapExactAmountOutRequest): Promise<_58.EstimateSwapExactAmountOutResponse>;
                numPools(request?: _58.NumPoolsRequest): Promise<_58.NumPoolsResponse>;
                pool(request: _58.PoolRequest): Promise<_58.PoolResponse>;
                allPools(request?: _58.AllPoolsRequest): Promise<_58.AllPoolsResponse>;
                listPoolsByDenom(request: _58.ListPoolsByDenomRequest): Promise<_58.ListPoolsByDenomResponse>;
                spotPrice(request: _58.SpotPriceRequest): Promise<_58.SpotPriceResponse>;
                totalPoolLiquidity(request: _58.TotalPoolLiquidityRequest): Promise<_58.TotalPoolLiquidityResponse>;
                totalLiquidity(request?: _58.TotalLiquidityRequest): Promise<_58.TotalLiquidityResponse>;
                totalVolumeForPool(request: _58.TotalVolumeForPoolRequest): Promise<_58.TotalVolumeForPoolResponse>;
                tradingPairTakerFee(request: _58.TradingPairTakerFeeRequest): Promise<_58.TradingPairTakerFeeResponse>;
                estimateTradeBasedOnPriceImpact(request: _58.EstimateTradeBasedOnPriceImpactRequest): Promise<_58.EstimateTradeBasedOnPriceImpactResponse>;
            };
            LCDQueryClient: typeof _292.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    swapExactAmountIn(value: _61.MsgSwapExactAmountIn): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    swapExactAmountOut(value: _61.MsgSwapExactAmountOut): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    splitRouteSwapExactAmountIn(value: _61.MsgSplitRouteSwapExactAmountIn): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    splitRouteSwapExactAmountOut(value: _61.MsgSplitRouteSwapExactAmountOut): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    setDenomPairTakerFee(value: _61.MsgSetDenomPairTakerFee): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    swapExactAmountIn(value: _61.MsgSwapExactAmountIn): {
                        typeUrl: string;
                        value: _61.MsgSwapExactAmountIn;
                    };
                    swapExactAmountOut(value: _61.MsgSwapExactAmountOut): {
                        typeUrl: string;
                        value: _61.MsgSwapExactAmountOut;
                    };
                    splitRouteSwapExactAmountIn(value: _61.MsgSplitRouteSwapExactAmountIn): {
                        typeUrl: string;
                        value: _61.MsgSplitRouteSwapExactAmountIn;
                    };
                    splitRouteSwapExactAmountOut(value: _61.MsgSplitRouteSwapExactAmountOut): {
                        typeUrl: string;
                        value: _61.MsgSplitRouteSwapExactAmountOut;
                    };
                    setDenomPairTakerFee(value: _61.MsgSetDenomPairTakerFee): {
                        typeUrl: string;
                        value: _61.MsgSetDenomPairTakerFee;
                    };
                };
                fromJSON: {
                    swapExactAmountIn(value: any): {
                        typeUrl: string;
                        value: _61.MsgSwapExactAmountIn;
                    };
                    swapExactAmountOut(value: any): {
                        typeUrl: string;
                        value: _61.MsgSwapExactAmountOut;
                    };
                    splitRouteSwapExactAmountIn(value: any): {
                        typeUrl: string;
                        value: _61.MsgSplitRouteSwapExactAmountIn;
                    };
                    splitRouteSwapExactAmountOut(value: any): {
                        typeUrl: string;
                        value: _61.MsgSplitRouteSwapExactAmountOut;
                    };
                    setDenomPairTakerFee(value: any): {
                        typeUrl: string;
                        value: _61.MsgSetDenomPairTakerFee;
                    };
                };
                fromPartial: {
                    swapExactAmountIn(value: _61.MsgSwapExactAmountIn): {
                        typeUrl: string;
                        value: _61.MsgSwapExactAmountIn;
                    };
                    swapExactAmountOut(value: _61.MsgSwapExactAmountOut): {
                        typeUrl: string;
                        value: _61.MsgSwapExactAmountOut;
                    };
                    splitRouteSwapExactAmountIn(value: _61.MsgSplitRouteSwapExactAmountIn): {
                        typeUrl: string;
                        value: _61.MsgSplitRouteSwapExactAmountIn;
                    };
                    splitRouteSwapExactAmountOut(value: _61.MsgSplitRouteSwapExactAmountOut): {
                        typeUrl: string;
                        value: _61.MsgSplitRouteSwapExactAmountOut;
                    };
                    setDenomPairTakerFee(value: _61.MsgSetDenomPairTakerFee): {
                        typeUrl: string;
                        value: _61.MsgSetDenomPairTakerFee;
                    };
                };
            };
            AminoConverter: {
                "/osmosis.poolmanager.v1beta1.MsgSwapExactAmountIn": {
                    aminoType: string;
                    toAmino: (message: _61.MsgSwapExactAmountIn) => _61.MsgSwapExactAmountInAmino;
                    fromAmino: (object: _61.MsgSwapExactAmountInAmino) => _61.MsgSwapExactAmountIn;
                };
                "/osmosis.poolmanager.v1beta1.MsgSwapExactAmountOut": {
                    aminoType: string;
                    toAmino: (message: _61.MsgSwapExactAmountOut) => _61.MsgSwapExactAmountOutAmino;
                    fromAmino: (object: _61.MsgSwapExactAmountOutAmino) => _61.MsgSwapExactAmountOut;
                };
                "/osmosis.poolmanager.v1beta1.MsgSplitRouteSwapExactAmountIn": {
                    aminoType: string;
                    toAmino: (message: _61.MsgSplitRouteSwapExactAmountIn) => _61.MsgSplitRouteSwapExactAmountInAmino;
                    fromAmino: (object: _61.MsgSplitRouteSwapExactAmountInAmino) => _61.MsgSplitRouteSwapExactAmountIn;
                };
                "/osmosis.poolmanager.v1beta1.MsgSplitRouteSwapExactAmountOut": {
                    aminoType: string;
                    toAmino: (message: _61.MsgSplitRouteSwapExactAmountOut) => _61.MsgSplitRouteSwapExactAmountOutAmino;
                    fromAmino: (object: _61.MsgSplitRouteSwapExactAmountOutAmino) => _61.MsgSplitRouteSwapExactAmountOut;
                };
                "/osmosis.poolmanager.v1beta1.MsgSetDenomPairTakerFee": {
                    aminoType: string;
                    toAmino: (message: _61.MsgSetDenomPairTakerFee) => _61.MsgSetDenomPairTakerFeeAmino;
                    fromAmino: (object: _61.MsgSetDenomPairTakerFeeAmino) => _61.MsgSetDenomPairTakerFee;
                };
            };
            MsgSwapExactAmountIn: {
                typeUrl: string;
                encode(message: _61.MsgSwapExactAmountIn, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _61.MsgSwapExactAmountIn;
                fromPartial(object: Partial<_61.MsgSwapExactAmountIn>): _61.MsgSwapExactAmountIn;
                fromAmino(object: _61.MsgSwapExactAmountInAmino): _61.MsgSwapExactAmountIn;
                toAmino(message: _61.MsgSwapExactAmountIn): _61.MsgSwapExactAmountInAmino;
                fromAminoMsg(object: _61.MsgSwapExactAmountInAminoMsg): _61.MsgSwapExactAmountIn;
                toAminoMsg(message: _61.MsgSwapExactAmountIn): _61.MsgSwapExactAmountInAminoMsg;
                fromProtoMsg(message: _61.MsgSwapExactAmountInProtoMsg): _61.MsgSwapExactAmountIn;
                toProto(message: _61.MsgSwapExactAmountIn): Uint8Array;
                toProtoMsg(message: _61.MsgSwapExactAmountIn): _61.MsgSwapExactAmountInProtoMsg;
            };
            MsgSwapExactAmountInResponse: {
                typeUrl: string;
                encode(message: _61.MsgSwapExactAmountInResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _61.MsgSwapExactAmountInResponse;
                fromPartial(object: Partial<_61.MsgSwapExactAmountInResponse>): _61.MsgSwapExactAmountInResponse;
                fromAmino(object: _61.MsgSwapExactAmountInResponseAmino): _61.MsgSwapExactAmountInResponse;
                toAmino(message: _61.MsgSwapExactAmountInResponse): _61.MsgSwapExactAmountInResponseAmino;
                fromAminoMsg(object: _61.MsgSwapExactAmountInResponseAminoMsg): _61.MsgSwapExactAmountInResponse;
                toAminoMsg(message: _61.MsgSwapExactAmountInResponse): _61.MsgSwapExactAmountInResponseAminoMsg;
                fromProtoMsg(message: _61.MsgSwapExactAmountInResponseProtoMsg): _61.MsgSwapExactAmountInResponse;
                toProto(message: _61.MsgSwapExactAmountInResponse): Uint8Array;
                toProtoMsg(message: _61.MsgSwapExactAmountInResponse): _61.MsgSwapExactAmountInResponseProtoMsg;
            };
            MsgSplitRouteSwapExactAmountIn: {
                typeUrl: string;
                encode(message: _61.MsgSplitRouteSwapExactAmountIn, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _61.MsgSplitRouteSwapExactAmountIn;
                fromPartial(object: Partial<_61.MsgSplitRouteSwapExactAmountIn>): _61.MsgSplitRouteSwapExactAmountIn;
                fromAmino(object: _61.MsgSplitRouteSwapExactAmountInAmino): _61.MsgSplitRouteSwapExactAmountIn;
                toAmino(message: _61.MsgSplitRouteSwapExactAmountIn): _61.MsgSplitRouteSwapExactAmountInAmino;
                fromAminoMsg(object: _61.MsgSplitRouteSwapExactAmountInAminoMsg): _61.MsgSplitRouteSwapExactAmountIn;
                toAminoMsg(message: _61.MsgSplitRouteSwapExactAmountIn): _61.MsgSplitRouteSwapExactAmountInAminoMsg;
                fromProtoMsg(message: _61.MsgSplitRouteSwapExactAmountInProtoMsg): _61.MsgSplitRouteSwapExactAmountIn;
                toProto(message: _61.MsgSplitRouteSwapExactAmountIn): Uint8Array;
                toProtoMsg(message: _61.MsgSplitRouteSwapExactAmountIn): _61.MsgSplitRouteSwapExactAmountInProtoMsg;
            };
            MsgSplitRouteSwapExactAmountInResponse: {
                typeUrl: string;
                encode(message: _61.MsgSplitRouteSwapExactAmountInResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _61.MsgSplitRouteSwapExactAmountInResponse;
                fromPartial(object: Partial<_61.MsgSplitRouteSwapExactAmountInResponse>): _61.MsgSplitRouteSwapExactAmountInResponse;
                fromAmino(object: _61.MsgSplitRouteSwapExactAmountInResponseAmino): _61.MsgSplitRouteSwapExactAmountInResponse;
                toAmino(message: _61.MsgSplitRouteSwapExactAmountInResponse): _61.MsgSplitRouteSwapExactAmountInResponseAmino;
                fromAminoMsg(object: _61.MsgSplitRouteSwapExactAmountInResponseAminoMsg): _61.MsgSplitRouteSwapExactAmountInResponse;
                toAminoMsg(message: _61.MsgSplitRouteSwapExactAmountInResponse): _61.MsgSplitRouteSwapExactAmountInResponseAminoMsg;
                fromProtoMsg(message: _61.MsgSplitRouteSwapExactAmountInResponseProtoMsg): _61.MsgSplitRouteSwapExactAmountInResponse;
                toProto(message: _61.MsgSplitRouteSwapExactAmountInResponse): Uint8Array;
                toProtoMsg(message: _61.MsgSplitRouteSwapExactAmountInResponse): _61.MsgSplitRouteSwapExactAmountInResponseProtoMsg;
            };
            MsgSwapExactAmountOut: {
                typeUrl: string;
                encode(message: _61.MsgSwapExactAmountOut, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _61.MsgSwapExactAmountOut;
                fromPartial(object: Partial<_61.MsgSwapExactAmountOut>): _61.MsgSwapExactAmountOut;
                fromAmino(object: _61.MsgSwapExactAmountOutAmino): _61.MsgSwapExactAmountOut;
                toAmino(message: _61.MsgSwapExactAmountOut): _61.MsgSwapExactAmountOutAmino;
                fromAminoMsg(object: _61.MsgSwapExactAmountOutAminoMsg): _61.MsgSwapExactAmountOut;
                toAminoMsg(message: _61.MsgSwapExactAmountOut): _61.MsgSwapExactAmountOutAminoMsg;
                fromProtoMsg(message: _61.MsgSwapExactAmountOutProtoMsg): _61.MsgSwapExactAmountOut;
                toProto(message: _61.MsgSwapExactAmountOut): Uint8Array;
                toProtoMsg(message: _61.MsgSwapExactAmountOut): _61.MsgSwapExactAmountOutProtoMsg;
            };
            MsgSwapExactAmountOutResponse: {
                typeUrl: string;
                encode(message: _61.MsgSwapExactAmountOutResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _61.MsgSwapExactAmountOutResponse;
                fromPartial(object: Partial<_61.MsgSwapExactAmountOutResponse>): _61.MsgSwapExactAmountOutResponse;
                fromAmino(object: _61.MsgSwapExactAmountOutResponseAmino): _61.MsgSwapExactAmountOutResponse;
                toAmino(message: _61.MsgSwapExactAmountOutResponse): _61.MsgSwapExactAmountOutResponseAmino;
                fromAminoMsg(object: _61.MsgSwapExactAmountOutResponseAminoMsg): _61.MsgSwapExactAmountOutResponse;
                toAminoMsg(message: _61.MsgSwapExactAmountOutResponse): _61.MsgSwapExactAmountOutResponseAminoMsg;
                fromProtoMsg(message: _61.MsgSwapExactAmountOutResponseProtoMsg): _61.MsgSwapExactAmountOutResponse;
                toProto(message: _61.MsgSwapExactAmountOutResponse): Uint8Array;
                toProtoMsg(message: _61.MsgSwapExactAmountOutResponse): _61.MsgSwapExactAmountOutResponseProtoMsg;
            };
            MsgSplitRouteSwapExactAmountOut: {
                typeUrl: string;
                encode(message: _61.MsgSplitRouteSwapExactAmountOut, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _61.MsgSplitRouteSwapExactAmountOut;
                fromPartial(object: Partial<_61.MsgSplitRouteSwapExactAmountOut>): _61.MsgSplitRouteSwapExactAmountOut;
                fromAmino(object: _61.MsgSplitRouteSwapExactAmountOutAmino): _61.MsgSplitRouteSwapExactAmountOut;
                toAmino(message: _61.MsgSplitRouteSwapExactAmountOut): _61.MsgSplitRouteSwapExactAmountOutAmino;
                fromAminoMsg(object: _61.MsgSplitRouteSwapExactAmountOutAminoMsg): _61.MsgSplitRouteSwapExactAmountOut;
                toAminoMsg(message: _61.MsgSplitRouteSwapExactAmountOut): _61.MsgSplitRouteSwapExactAmountOutAminoMsg;
                fromProtoMsg(message: _61.MsgSplitRouteSwapExactAmountOutProtoMsg): _61.MsgSplitRouteSwapExactAmountOut;
                toProto(message: _61.MsgSplitRouteSwapExactAmountOut): Uint8Array;
                toProtoMsg(message: _61.MsgSplitRouteSwapExactAmountOut): _61.MsgSplitRouteSwapExactAmountOutProtoMsg;
            };
            MsgSplitRouteSwapExactAmountOutResponse: {
                typeUrl: string;
                encode(message: _61.MsgSplitRouteSwapExactAmountOutResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _61.MsgSplitRouteSwapExactAmountOutResponse;
                fromPartial(object: Partial<_61.MsgSplitRouteSwapExactAmountOutResponse>): _61.MsgSplitRouteSwapExactAmountOutResponse;
                fromAmino(object: _61.MsgSplitRouteSwapExactAmountOutResponseAmino): _61.MsgSplitRouteSwapExactAmountOutResponse;
                toAmino(message: _61.MsgSplitRouteSwapExactAmountOutResponse): _61.MsgSplitRouteSwapExactAmountOutResponseAmino;
                fromAminoMsg(object: _61.MsgSplitRouteSwapExactAmountOutResponseAminoMsg): _61.MsgSplitRouteSwapExactAmountOutResponse;
                toAminoMsg(message: _61.MsgSplitRouteSwapExactAmountOutResponse): _61.MsgSplitRouteSwapExactAmountOutResponseAminoMsg;
                fromProtoMsg(message: _61.MsgSplitRouteSwapExactAmountOutResponseProtoMsg): _61.MsgSplitRouteSwapExactAmountOutResponse;
                toProto(message: _61.MsgSplitRouteSwapExactAmountOutResponse): Uint8Array;
                toProtoMsg(message: _61.MsgSplitRouteSwapExactAmountOutResponse): _61.MsgSplitRouteSwapExactAmountOutResponseProtoMsg;
            };
            MsgSetDenomPairTakerFee: {
                typeUrl: string;
                encode(message: _61.MsgSetDenomPairTakerFee, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _61.MsgSetDenomPairTakerFee;
                fromPartial(object: Partial<_61.MsgSetDenomPairTakerFee>): _61.MsgSetDenomPairTakerFee;
                fromAmino(object: _61.MsgSetDenomPairTakerFeeAmino): _61.MsgSetDenomPairTakerFee;
                toAmino(message: _61.MsgSetDenomPairTakerFee): _61.MsgSetDenomPairTakerFeeAmino;
                fromAminoMsg(object: _61.MsgSetDenomPairTakerFeeAminoMsg): _61.MsgSetDenomPairTakerFee;
                toAminoMsg(message: _61.MsgSetDenomPairTakerFee): _61.MsgSetDenomPairTakerFeeAminoMsg;
                fromProtoMsg(message: _61.MsgSetDenomPairTakerFeeProtoMsg): _61.MsgSetDenomPairTakerFee;
                toProto(message: _61.MsgSetDenomPairTakerFee): Uint8Array;
                toProtoMsg(message: _61.MsgSetDenomPairTakerFee): _61.MsgSetDenomPairTakerFeeProtoMsg;
            };
            MsgSetDenomPairTakerFeeResponse: {
                typeUrl: string;
                encode(message: _61.MsgSetDenomPairTakerFeeResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _61.MsgSetDenomPairTakerFeeResponse;
                fromPartial(object: Partial<_61.MsgSetDenomPairTakerFeeResponse>): _61.MsgSetDenomPairTakerFeeResponse;
                fromAmino(object: _61.MsgSetDenomPairTakerFeeResponseAmino): _61.MsgSetDenomPairTakerFeeResponse;
                toAmino(message: _61.MsgSetDenomPairTakerFeeResponse): _61.MsgSetDenomPairTakerFeeResponseAmino;
                fromAminoMsg(object: _61.MsgSetDenomPairTakerFeeResponseAminoMsg): _61.MsgSetDenomPairTakerFeeResponse;
                toAminoMsg(message: _61.MsgSetDenomPairTakerFeeResponse): _61.MsgSetDenomPairTakerFeeResponseAminoMsg;
                fromProtoMsg(message: _61.MsgSetDenomPairTakerFeeResponseProtoMsg): _61.MsgSetDenomPairTakerFeeResponse;
                toProto(message: _61.MsgSetDenomPairTakerFeeResponse): Uint8Array;
                toProtoMsg(message: _61.MsgSetDenomPairTakerFeeResponse): _61.MsgSetDenomPairTakerFeeResponseProtoMsg;
            };
            DenomPairTakerFee: {
                typeUrl: string;
                encode(message: _61.DenomPairTakerFee, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _61.DenomPairTakerFee;
                fromPartial(object: Partial<_61.DenomPairTakerFee>): _61.DenomPairTakerFee;
                fromAmino(object: _61.DenomPairTakerFeeAmino): _61.DenomPairTakerFee;
                toAmino(message: _61.DenomPairTakerFee): _61.DenomPairTakerFeeAmino;
                fromAminoMsg(object: _61.DenomPairTakerFeeAminoMsg): _61.DenomPairTakerFee;
                toAminoMsg(message: _61.DenomPairTakerFee): _61.DenomPairTakerFeeAminoMsg;
                fromProtoMsg(message: _61.DenomPairTakerFeeProtoMsg): _61.DenomPairTakerFee;
                toProto(message: _61.DenomPairTakerFee): Uint8Array;
                toProtoMsg(message: _61.DenomPairTakerFee): _61.DenomPairTakerFeeProtoMsg;
            };
            TrackedVolume: {
                typeUrl: string;
                encode(message: _60.TrackedVolume, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _60.TrackedVolume;
                fromPartial(object: Partial<_60.TrackedVolume>): _60.TrackedVolume;
                fromAmino(object: _60.TrackedVolumeAmino): _60.TrackedVolume;
                toAmino(message: _60.TrackedVolume): _60.TrackedVolumeAmino;
                fromAminoMsg(object: _60.TrackedVolumeAminoMsg): _60.TrackedVolume;
                toAminoMsg(message: _60.TrackedVolume): _60.TrackedVolumeAminoMsg;
                fromProtoMsg(message: _60.TrackedVolumeProtoMsg): _60.TrackedVolume;
                toProto(message: _60.TrackedVolume): Uint8Array;
                toProtoMsg(message: _60.TrackedVolume): _60.TrackedVolumeProtoMsg;
            };
            SwapAmountInRoute: {
                typeUrl: string;
                encode(message: _59.SwapAmountInRoute, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _59.SwapAmountInRoute;
                fromPartial(object: Partial<_59.SwapAmountInRoute>): _59.SwapAmountInRoute;
                fromAmino(object: _59.SwapAmountInRouteAmino): _59.SwapAmountInRoute;
                toAmino(message: _59.SwapAmountInRoute): _59.SwapAmountInRouteAmino;
                fromAminoMsg(object: _59.SwapAmountInRouteAminoMsg): _59.SwapAmountInRoute;
                toAminoMsg(message: _59.SwapAmountInRoute): _59.SwapAmountInRouteAminoMsg;
                fromProtoMsg(message: _59.SwapAmountInRouteProtoMsg): _59.SwapAmountInRoute;
                toProto(message: _59.SwapAmountInRoute): Uint8Array;
                toProtoMsg(message: _59.SwapAmountInRoute): _59.SwapAmountInRouteProtoMsg;
            };
            SwapAmountOutRoute: {
                typeUrl: string;
                encode(message: _59.SwapAmountOutRoute, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _59.SwapAmountOutRoute;
                fromPartial(object: Partial<_59.SwapAmountOutRoute>): _59.SwapAmountOutRoute;
                fromAmino(object: _59.SwapAmountOutRouteAmino): _59.SwapAmountOutRoute;
                toAmino(message: _59.SwapAmountOutRoute): _59.SwapAmountOutRouteAmino;
                fromAminoMsg(object: _59.SwapAmountOutRouteAminoMsg): _59.SwapAmountOutRoute;
                toAminoMsg(message: _59.SwapAmountOutRoute): _59.SwapAmountOutRouteAminoMsg;
                fromProtoMsg(message: _59.SwapAmountOutRouteProtoMsg): _59.SwapAmountOutRoute;
                toProto(message: _59.SwapAmountOutRoute): Uint8Array;
                toProtoMsg(message: _59.SwapAmountOutRoute): _59.SwapAmountOutRouteProtoMsg;
            };
            SwapAmountInSplitRoute: {
                typeUrl: string;
                encode(message: _59.SwapAmountInSplitRoute, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _59.SwapAmountInSplitRoute;
                fromPartial(object: Partial<_59.SwapAmountInSplitRoute>): _59.SwapAmountInSplitRoute;
                fromAmino(object: _59.SwapAmountInSplitRouteAmino): _59.SwapAmountInSplitRoute;
                toAmino(message: _59.SwapAmountInSplitRoute): _59.SwapAmountInSplitRouteAmino;
                fromAminoMsg(object: _59.SwapAmountInSplitRouteAminoMsg): _59.SwapAmountInSplitRoute;
                toAminoMsg(message: _59.SwapAmountInSplitRoute): _59.SwapAmountInSplitRouteAminoMsg;
                fromProtoMsg(message: _59.SwapAmountInSplitRouteProtoMsg): _59.SwapAmountInSplitRoute;
                toProto(message: _59.SwapAmountInSplitRoute): Uint8Array;
                toProtoMsg(message: _59.SwapAmountInSplitRoute): _59.SwapAmountInSplitRouteProtoMsg;
            };
            SwapAmountOutSplitRoute: {
                typeUrl: string;
                encode(message: _59.SwapAmountOutSplitRoute, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _59.SwapAmountOutSplitRoute;
                fromPartial(object: Partial<_59.SwapAmountOutSplitRoute>): _59.SwapAmountOutSplitRoute;
                fromAmino(object: _59.SwapAmountOutSplitRouteAmino): _59.SwapAmountOutSplitRoute;
                toAmino(message: _59.SwapAmountOutSplitRoute): _59.SwapAmountOutSplitRouteAmino;
                fromAminoMsg(object: _59.SwapAmountOutSplitRouteAminoMsg): _59.SwapAmountOutSplitRoute;
                toAminoMsg(message: _59.SwapAmountOutSplitRoute): _59.SwapAmountOutSplitRouteAminoMsg;
                fromProtoMsg(message: _59.SwapAmountOutSplitRouteProtoMsg): _59.SwapAmountOutSplitRoute;
                toProto(message: _59.SwapAmountOutSplitRoute): Uint8Array;
                toProtoMsg(message: _59.SwapAmountOutSplitRoute): _59.SwapAmountOutSplitRouteProtoMsg;
            };
            ParamsRequest: {
                typeUrl: string;
                encode(_: _58.ParamsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _58.ParamsRequest;
                fromPartial(_: Partial<_58.ParamsRequest>): _58.ParamsRequest;
                fromAmino(_: _58.ParamsRequestAmino): _58.ParamsRequest;
                toAmino(_: _58.ParamsRequest): _58.ParamsRequestAmino;
                fromAminoMsg(object: _58.ParamsRequestAminoMsg): _58.ParamsRequest;
                toAminoMsg(message: _58.ParamsRequest): _58.ParamsRequestAminoMsg;
                fromProtoMsg(message: _58.ParamsRequestProtoMsg): _58.ParamsRequest;
                toProto(message: _58.ParamsRequest): Uint8Array;
                toProtoMsg(message: _58.ParamsRequest): _58.ParamsRequestProtoMsg;
            };
            ParamsResponse: {
                typeUrl: string;
                encode(message: _58.ParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _58.ParamsResponse;
                fromPartial(object: Partial<_58.ParamsResponse>): _58.ParamsResponse;
                fromAmino(object: _58.ParamsResponseAmino): _58.ParamsResponse;
                toAmino(message: _58.ParamsResponse): _58.ParamsResponseAmino;
                fromAminoMsg(object: _58.ParamsResponseAminoMsg): _58.ParamsResponse;
                toAminoMsg(message: _58.ParamsResponse): _58.ParamsResponseAminoMsg;
                fromProtoMsg(message: _58.ParamsResponseProtoMsg): _58.ParamsResponse;
                toProto(message: _58.ParamsResponse): Uint8Array;
                toProtoMsg(message: _58.ParamsResponse): _58.ParamsResponseProtoMsg;
            };
            EstimateSwapExactAmountInRequest: {
                typeUrl: string;
                encode(message: _58.EstimateSwapExactAmountInRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _58.EstimateSwapExactAmountInRequest;
                fromPartial(object: Partial<_58.EstimateSwapExactAmountInRequest>): _58.EstimateSwapExactAmountInRequest;
                fromAmino(object: _58.EstimateSwapExactAmountInRequestAmino): _58.EstimateSwapExactAmountInRequest;
                toAmino(message: _58.EstimateSwapExactAmountInRequest): _58.EstimateSwapExactAmountInRequestAmino;
                fromAminoMsg(object: _58.EstimateSwapExactAmountInRequestAminoMsg): _58.EstimateSwapExactAmountInRequest;
                toAminoMsg(message: _58.EstimateSwapExactAmountInRequest): _58.EstimateSwapExactAmountInRequestAminoMsg;
                fromProtoMsg(message: _58.EstimateSwapExactAmountInRequestProtoMsg): _58.EstimateSwapExactAmountInRequest;
                toProto(message: _58.EstimateSwapExactAmountInRequest): Uint8Array;
                toProtoMsg(message: _58.EstimateSwapExactAmountInRequest): _58.EstimateSwapExactAmountInRequestProtoMsg;
            };
            EstimateSwapExactAmountInWithPrimitiveTypesRequest: {
                typeUrl: string;
                encode(message: _58.EstimateSwapExactAmountInWithPrimitiveTypesRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _58.EstimateSwapExactAmountInWithPrimitiveTypesRequest;
                fromPartial(object: Partial<_58.EstimateSwapExactAmountInWithPrimitiveTypesRequest>): _58.EstimateSwapExactAmountInWithPrimitiveTypesRequest;
                fromAmino(object: _58.EstimateSwapExactAmountInWithPrimitiveTypesRequestAmino): _58.EstimateSwapExactAmountInWithPrimitiveTypesRequest;
                toAmino(message: _58.EstimateSwapExactAmountInWithPrimitiveTypesRequest): _58.EstimateSwapExactAmountInWithPrimitiveTypesRequestAmino;
                fromAminoMsg(object: _58.EstimateSwapExactAmountInWithPrimitiveTypesRequestAminoMsg): _58.EstimateSwapExactAmountInWithPrimitiveTypesRequest;
                toAminoMsg(message: _58.EstimateSwapExactAmountInWithPrimitiveTypesRequest): _58.EstimateSwapExactAmountInWithPrimitiveTypesRequestAminoMsg;
                fromProtoMsg(message: _58.EstimateSwapExactAmountInWithPrimitiveTypesRequestProtoMsg): _58.EstimateSwapExactAmountInWithPrimitiveTypesRequest;
                toProto(message: _58.EstimateSwapExactAmountInWithPrimitiveTypesRequest): Uint8Array;
                toProtoMsg(message: _58.EstimateSwapExactAmountInWithPrimitiveTypesRequest): _58.EstimateSwapExactAmountInWithPrimitiveTypesRequestProtoMsg;
            };
            EstimateSinglePoolSwapExactAmountInRequest: {
                typeUrl: string;
                encode(message: _58.EstimateSinglePoolSwapExactAmountInRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _58.EstimateSinglePoolSwapExactAmountInRequest;
                fromPartial(object: Partial<_58.EstimateSinglePoolSwapExactAmountInRequest>): _58.EstimateSinglePoolSwapExactAmountInRequest;
                fromAmino(object: _58.EstimateSinglePoolSwapExactAmountInRequestAmino): _58.EstimateSinglePoolSwapExactAmountInRequest;
                toAmino(message: _58.EstimateSinglePoolSwapExactAmountInRequest): _58.EstimateSinglePoolSwapExactAmountInRequestAmino;
                fromAminoMsg(object: _58.EstimateSinglePoolSwapExactAmountInRequestAminoMsg): _58.EstimateSinglePoolSwapExactAmountInRequest;
                toAminoMsg(message: _58.EstimateSinglePoolSwapExactAmountInRequest): _58.EstimateSinglePoolSwapExactAmountInRequestAminoMsg;
                fromProtoMsg(message: _58.EstimateSinglePoolSwapExactAmountInRequestProtoMsg): _58.EstimateSinglePoolSwapExactAmountInRequest;
                toProto(message: _58.EstimateSinglePoolSwapExactAmountInRequest): Uint8Array;
                toProtoMsg(message: _58.EstimateSinglePoolSwapExactAmountInRequest): _58.EstimateSinglePoolSwapExactAmountInRequestProtoMsg;
            };
            EstimateSwapExactAmountInResponse: {
                typeUrl: string;
                encode(message: _58.EstimateSwapExactAmountInResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _58.EstimateSwapExactAmountInResponse;
                fromPartial(object: Partial<_58.EstimateSwapExactAmountInResponse>): _58.EstimateSwapExactAmountInResponse;
                fromAmino(object: _58.EstimateSwapExactAmountInResponseAmino): _58.EstimateSwapExactAmountInResponse;
                toAmino(message: _58.EstimateSwapExactAmountInResponse): _58.EstimateSwapExactAmountInResponseAmino;
                fromAminoMsg(object: _58.EstimateSwapExactAmountInResponseAminoMsg): _58.EstimateSwapExactAmountInResponse;
                toAminoMsg(message: _58.EstimateSwapExactAmountInResponse): _58.EstimateSwapExactAmountInResponseAminoMsg;
                fromProtoMsg(message: _58.EstimateSwapExactAmountInResponseProtoMsg): _58.EstimateSwapExactAmountInResponse;
                toProto(message: _58.EstimateSwapExactAmountInResponse): Uint8Array;
                toProtoMsg(message: _58.EstimateSwapExactAmountInResponse): _58.EstimateSwapExactAmountInResponseProtoMsg;
            };
            EstimateSwapExactAmountOutRequest: {
                typeUrl: string;
                encode(message: _58.EstimateSwapExactAmountOutRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _58.EstimateSwapExactAmountOutRequest;
                fromPartial(object: Partial<_58.EstimateSwapExactAmountOutRequest>): _58.EstimateSwapExactAmountOutRequest;
                fromAmino(object: _58.EstimateSwapExactAmountOutRequestAmino): _58.EstimateSwapExactAmountOutRequest;
                toAmino(message: _58.EstimateSwapExactAmountOutRequest): _58.EstimateSwapExactAmountOutRequestAmino;
                fromAminoMsg(object: _58.EstimateSwapExactAmountOutRequestAminoMsg): _58.EstimateSwapExactAmountOutRequest;
                toAminoMsg(message: _58.EstimateSwapExactAmountOutRequest): _58.EstimateSwapExactAmountOutRequestAminoMsg;
                fromProtoMsg(message: _58.EstimateSwapExactAmountOutRequestProtoMsg): _58.EstimateSwapExactAmountOutRequest;
                toProto(message: _58.EstimateSwapExactAmountOutRequest): Uint8Array;
                toProtoMsg(message: _58.EstimateSwapExactAmountOutRequest): _58.EstimateSwapExactAmountOutRequestProtoMsg;
            };
            EstimateSwapExactAmountOutWithPrimitiveTypesRequest: {
                typeUrl: string;
                encode(message: _58.EstimateSwapExactAmountOutWithPrimitiveTypesRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _58.EstimateSwapExactAmountOutWithPrimitiveTypesRequest;
                fromPartial(object: Partial<_58.EstimateSwapExactAmountOutWithPrimitiveTypesRequest>): _58.EstimateSwapExactAmountOutWithPrimitiveTypesRequest;
                fromAmino(object: _58.EstimateSwapExactAmountOutWithPrimitiveTypesRequestAmino): _58.EstimateSwapExactAmountOutWithPrimitiveTypesRequest;
                toAmino(message: _58.EstimateSwapExactAmountOutWithPrimitiveTypesRequest): _58.EstimateSwapExactAmountOutWithPrimitiveTypesRequestAmino;
                fromAminoMsg(object: _58.EstimateSwapExactAmountOutWithPrimitiveTypesRequestAminoMsg): _58.EstimateSwapExactAmountOutWithPrimitiveTypesRequest;
                toAminoMsg(message: _58.EstimateSwapExactAmountOutWithPrimitiveTypesRequest): _58.EstimateSwapExactAmountOutWithPrimitiveTypesRequestAminoMsg;
                fromProtoMsg(message: _58.EstimateSwapExactAmountOutWithPrimitiveTypesRequestProtoMsg): _58.EstimateSwapExactAmountOutWithPrimitiveTypesRequest;
                toProto(message: _58.EstimateSwapExactAmountOutWithPrimitiveTypesRequest): Uint8Array;
                toProtoMsg(message: _58.EstimateSwapExactAmountOutWithPrimitiveTypesRequest): _58.EstimateSwapExactAmountOutWithPrimitiveTypesRequestProtoMsg;
            };
            EstimateSinglePoolSwapExactAmountOutRequest: {
                typeUrl: string;
                encode(message: _58.EstimateSinglePoolSwapExactAmountOutRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _58.EstimateSinglePoolSwapExactAmountOutRequest;
                fromPartial(object: Partial<_58.EstimateSinglePoolSwapExactAmountOutRequest>): _58.EstimateSinglePoolSwapExactAmountOutRequest;
                fromAmino(object: _58.EstimateSinglePoolSwapExactAmountOutRequestAmino): _58.EstimateSinglePoolSwapExactAmountOutRequest;
                toAmino(message: _58.EstimateSinglePoolSwapExactAmountOutRequest): _58.EstimateSinglePoolSwapExactAmountOutRequestAmino;
                fromAminoMsg(object: _58.EstimateSinglePoolSwapExactAmountOutRequestAminoMsg): _58.EstimateSinglePoolSwapExactAmountOutRequest;
                toAminoMsg(message: _58.EstimateSinglePoolSwapExactAmountOutRequest): _58.EstimateSinglePoolSwapExactAmountOutRequestAminoMsg;
                fromProtoMsg(message: _58.EstimateSinglePoolSwapExactAmountOutRequestProtoMsg): _58.EstimateSinglePoolSwapExactAmountOutRequest;
                toProto(message: _58.EstimateSinglePoolSwapExactAmountOutRequest): Uint8Array;
                toProtoMsg(message: _58.EstimateSinglePoolSwapExactAmountOutRequest): _58.EstimateSinglePoolSwapExactAmountOutRequestProtoMsg;
            };
            EstimateSwapExactAmountOutResponse: {
                typeUrl: string;
                encode(message: _58.EstimateSwapExactAmountOutResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _58.EstimateSwapExactAmountOutResponse;
                fromPartial(object: Partial<_58.EstimateSwapExactAmountOutResponse>): _58.EstimateSwapExactAmountOutResponse;
                fromAmino(object: _58.EstimateSwapExactAmountOutResponseAmino): _58.EstimateSwapExactAmountOutResponse;
                toAmino(message: _58.EstimateSwapExactAmountOutResponse): _58.EstimateSwapExactAmountOutResponseAmino;
                fromAminoMsg(object: _58.EstimateSwapExactAmountOutResponseAminoMsg): _58.EstimateSwapExactAmountOutResponse;
                toAminoMsg(message: _58.EstimateSwapExactAmountOutResponse): _58.EstimateSwapExactAmountOutResponseAminoMsg;
                fromProtoMsg(message: _58.EstimateSwapExactAmountOutResponseProtoMsg): _58.EstimateSwapExactAmountOutResponse;
                toProto(message: _58.EstimateSwapExactAmountOutResponse): Uint8Array;
                toProtoMsg(message: _58.EstimateSwapExactAmountOutResponse): _58.EstimateSwapExactAmountOutResponseProtoMsg;
            };
            NumPoolsRequest: {
                typeUrl: string;
                encode(_: _58.NumPoolsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _58.NumPoolsRequest;
                fromPartial(_: Partial<_58.NumPoolsRequest>): _58.NumPoolsRequest;
                fromAmino(_: _58.NumPoolsRequestAmino): _58.NumPoolsRequest;
                toAmino(_: _58.NumPoolsRequest): _58.NumPoolsRequestAmino;
                fromAminoMsg(object: _58.NumPoolsRequestAminoMsg): _58.NumPoolsRequest;
                toAminoMsg(message: _58.NumPoolsRequest): _58.NumPoolsRequestAminoMsg;
                fromProtoMsg(message: _58.NumPoolsRequestProtoMsg): _58.NumPoolsRequest;
                toProto(message: _58.NumPoolsRequest): Uint8Array;
                toProtoMsg(message: _58.NumPoolsRequest): _58.NumPoolsRequestProtoMsg;
            };
            NumPoolsResponse: {
                typeUrl: string;
                encode(message: _58.NumPoolsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _58.NumPoolsResponse;
                fromPartial(object: Partial<_58.NumPoolsResponse>): _58.NumPoolsResponse;
                fromAmino(object: _58.NumPoolsResponseAmino): _58.NumPoolsResponse;
                toAmino(message: _58.NumPoolsResponse): _58.NumPoolsResponseAmino;
                fromAminoMsg(object: _58.NumPoolsResponseAminoMsg): _58.NumPoolsResponse;
                toAminoMsg(message: _58.NumPoolsResponse): _58.NumPoolsResponseAminoMsg;
                fromProtoMsg(message: _58.NumPoolsResponseProtoMsg): _58.NumPoolsResponse;
                toProto(message: _58.NumPoolsResponse): Uint8Array;
                toProtoMsg(message: _58.NumPoolsResponse): _58.NumPoolsResponseProtoMsg;
            };
            PoolRequest: {
                typeUrl: string;
                encode(message: _58.PoolRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _58.PoolRequest;
                fromPartial(object: Partial<_58.PoolRequest>): _58.PoolRequest;
                fromAmino(object: _58.PoolRequestAmino): _58.PoolRequest;
                toAmino(message: _58.PoolRequest): _58.PoolRequestAmino;
                fromAminoMsg(object: _58.PoolRequestAminoMsg): _58.PoolRequest;
                toAminoMsg(message: _58.PoolRequest): _58.PoolRequestAminoMsg;
                fromProtoMsg(message: _58.PoolRequestProtoMsg): _58.PoolRequest;
                toProto(message: _58.PoolRequest): Uint8Array;
                toProtoMsg(message: _58.PoolRequest): _58.PoolRequestProtoMsg;
            };
            PoolResponse: {
                typeUrl: string;
                encode(message: _58.PoolResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _58.PoolResponse;
                fromPartial(object: Partial<_58.PoolResponse>): _58.PoolResponse;
                fromAmino(object: _58.PoolResponseAmino): _58.PoolResponse;
                toAmino(message: _58.PoolResponse): _58.PoolResponseAmino;
                fromAminoMsg(object: _58.PoolResponseAminoMsg): _58.PoolResponse;
                toAminoMsg(message: _58.PoolResponse): _58.PoolResponseAminoMsg;
                fromProtoMsg(message: _58.PoolResponseProtoMsg): _58.PoolResponse;
                toProto(message: _58.PoolResponse): Uint8Array;
                toProtoMsg(message: _58.PoolResponse): _58.PoolResponseProtoMsg;
            };
            AllPoolsRequest: {
                typeUrl: string;
                encode(_: _58.AllPoolsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _58.AllPoolsRequest;
                fromPartial(_: Partial<_58.AllPoolsRequest>): _58.AllPoolsRequest;
                fromAmino(_: _58.AllPoolsRequestAmino): _58.AllPoolsRequest;
                toAmino(_: _58.AllPoolsRequest): _58.AllPoolsRequestAmino;
                fromAminoMsg(object: _58.AllPoolsRequestAminoMsg): _58.AllPoolsRequest;
                toAminoMsg(message: _58.AllPoolsRequest): _58.AllPoolsRequestAminoMsg;
                fromProtoMsg(message: _58.AllPoolsRequestProtoMsg): _58.AllPoolsRequest;
                toProto(message: _58.AllPoolsRequest): Uint8Array;
                toProtoMsg(message: _58.AllPoolsRequest): _58.AllPoolsRequestProtoMsg;
            };
            AllPoolsResponse: {
                typeUrl: string;
                encode(message: _58.AllPoolsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _58.AllPoolsResponse;
                fromPartial(object: Partial<_58.AllPoolsResponse>): _58.AllPoolsResponse;
                fromAmino(object: _58.AllPoolsResponseAmino): _58.AllPoolsResponse;
                toAmino(message: _58.AllPoolsResponse): _58.AllPoolsResponseAmino;
                fromAminoMsg(object: _58.AllPoolsResponseAminoMsg): _58.AllPoolsResponse;
                toAminoMsg(message: _58.AllPoolsResponse): _58.AllPoolsResponseAminoMsg;
                fromProtoMsg(message: _58.AllPoolsResponseProtoMsg): _58.AllPoolsResponse;
                toProto(message: _58.AllPoolsResponse): Uint8Array;
                toProtoMsg(message: _58.AllPoolsResponse): _58.AllPoolsResponseProtoMsg;
            };
            ListPoolsByDenomRequest: {
                typeUrl: string;
                encode(message: _58.ListPoolsByDenomRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _58.ListPoolsByDenomRequest;
                fromPartial(object: Partial<_58.ListPoolsByDenomRequest>): _58.ListPoolsByDenomRequest;
                fromAmino(object: _58.ListPoolsByDenomRequestAmino): _58.ListPoolsByDenomRequest;
                toAmino(message: _58.ListPoolsByDenomRequest): _58.ListPoolsByDenomRequestAmino;
                fromAminoMsg(object: _58.ListPoolsByDenomRequestAminoMsg): _58.ListPoolsByDenomRequest;
                toAminoMsg(message: _58.ListPoolsByDenomRequest): _58.ListPoolsByDenomRequestAminoMsg;
                fromProtoMsg(message: _58.ListPoolsByDenomRequestProtoMsg): _58.ListPoolsByDenomRequest;
                toProto(message: _58.ListPoolsByDenomRequest): Uint8Array;
                toProtoMsg(message: _58.ListPoolsByDenomRequest): _58.ListPoolsByDenomRequestProtoMsg;
            };
            ListPoolsByDenomResponse: {
                typeUrl: string;
                encode(message: _58.ListPoolsByDenomResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _58.ListPoolsByDenomResponse;
                fromPartial(object: Partial<_58.ListPoolsByDenomResponse>): _58.ListPoolsByDenomResponse;
                fromAmino(object: _58.ListPoolsByDenomResponseAmino): _58.ListPoolsByDenomResponse;
                toAmino(message: _58.ListPoolsByDenomResponse): _58.ListPoolsByDenomResponseAmino;
                fromAminoMsg(object: _58.ListPoolsByDenomResponseAminoMsg): _58.ListPoolsByDenomResponse;
                toAminoMsg(message: _58.ListPoolsByDenomResponse): _58.ListPoolsByDenomResponseAminoMsg;
                fromProtoMsg(message: _58.ListPoolsByDenomResponseProtoMsg): _58.ListPoolsByDenomResponse;
                toProto(message: _58.ListPoolsByDenomResponse): Uint8Array;
                toProtoMsg(message: _58.ListPoolsByDenomResponse): _58.ListPoolsByDenomResponseProtoMsg;
            };
            SpotPriceRequest: {
                typeUrl: string;
                encode(message: _58.SpotPriceRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _58.SpotPriceRequest;
                fromPartial(object: Partial<_58.SpotPriceRequest>): _58.SpotPriceRequest;
                fromAmino(object: _58.SpotPriceRequestAmino): _58.SpotPriceRequest;
                toAmino(message: _58.SpotPriceRequest): _58.SpotPriceRequestAmino;
                fromAminoMsg(object: _58.SpotPriceRequestAminoMsg): _58.SpotPriceRequest;
                toAminoMsg(message: _58.SpotPriceRequest): _58.SpotPriceRequestAminoMsg;
                fromProtoMsg(message: _58.SpotPriceRequestProtoMsg): _58.SpotPriceRequest;
                toProto(message: _58.SpotPriceRequest): Uint8Array;
                toProtoMsg(message: _58.SpotPriceRequest): _58.SpotPriceRequestProtoMsg;
            };
            SpotPriceResponse: {
                typeUrl: string;
                encode(message: _58.SpotPriceResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _58.SpotPriceResponse;
                fromPartial(object: Partial<_58.SpotPriceResponse>): _58.SpotPriceResponse;
                fromAmino(object: _58.SpotPriceResponseAmino): _58.SpotPriceResponse;
                toAmino(message: _58.SpotPriceResponse): _58.SpotPriceResponseAmino;
                fromAminoMsg(object: _58.SpotPriceResponseAminoMsg): _58.SpotPriceResponse;
                toAminoMsg(message: _58.SpotPriceResponse): _58.SpotPriceResponseAminoMsg;
                fromProtoMsg(message: _58.SpotPriceResponseProtoMsg): _58.SpotPriceResponse;
                toProto(message: _58.SpotPriceResponse): Uint8Array;
                toProtoMsg(message: _58.SpotPriceResponse): _58.SpotPriceResponseProtoMsg;
            };
            TotalPoolLiquidityRequest: {
                typeUrl: string;
                encode(message: _58.TotalPoolLiquidityRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _58.TotalPoolLiquidityRequest;
                fromPartial(object: Partial<_58.TotalPoolLiquidityRequest>): _58.TotalPoolLiquidityRequest;
                fromAmino(object: _58.TotalPoolLiquidityRequestAmino): _58.TotalPoolLiquidityRequest;
                toAmino(message: _58.TotalPoolLiquidityRequest): _58.TotalPoolLiquidityRequestAmino;
                fromAminoMsg(object: _58.TotalPoolLiquidityRequestAminoMsg): _58.TotalPoolLiquidityRequest;
                toAminoMsg(message: _58.TotalPoolLiquidityRequest): _58.TotalPoolLiquidityRequestAminoMsg;
                fromProtoMsg(message: _58.TotalPoolLiquidityRequestProtoMsg): _58.TotalPoolLiquidityRequest;
                toProto(message: _58.TotalPoolLiquidityRequest): Uint8Array;
                toProtoMsg(message: _58.TotalPoolLiquidityRequest): _58.TotalPoolLiquidityRequestProtoMsg;
            };
            TotalPoolLiquidityResponse: {
                typeUrl: string;
                encode(message: _58.TotalPoolLiquidityResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _58.TotalPoolLiquidityResponse;
                fromPartial(object: Partial<_58.TotalPoolLiquidityResponse>): _58.TotalPoolLiquidityResponse;
                fromAmino(object: _58.TotalPoolLiquidityResponseAmino): _58.TotalPoolLiquidityResponse;
                toAmino(message: _58.TotalPoolLiquidityResponse): _58.TotalPoolLiquidityResponseAmino;
                fromAminoMsg(object: _58.TotalPoolLiquidityResponseAminoMsg): _58.TotalPoolLiquidityResponse;
                toAminoMsg(message: _58.TotalPoolLiquidityResponse): _58.TotalPoolLiquidityResponseAminoMsg;
                fromProtoMsg(message: _58.TotalPoolLiquidityResponseProtoMsg): _58.TotalPoolLiquidityResponse;
                toProto(message: _58.TotalPoolLiquidityResponse): Uint8Array;
                toProtoMsg(message: _58.TotalPoolLiquidityResponse): _58.TotalPoolLiquidityResponseProtoMsg;
            };
            TotalLiquidityRequest: {
                typeUrl: string;
                encode(_: _58.TotalLiquidityRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _58.TotalLiquidityRequest;
                fromPartial(_: Partial<_58.TotalLiquidityRequest>): _58.TotalLiquidityRequest;
                fromAmino(_: _58.TotalLiquidityRequestAmino): _58.TotalLiquidityRequest;
                toAmino(_: _58.TotalLiquidityRequest): _58.TotalLiquidityRequestAmino;
                fromAminoMsg(object: _58.TotalLiquidityRequestAminoMsg): _58.TotalLiquidityRequest;
                toAminoMsg(message: _58.TotalLiquidityRequest): _58.TotalLiquidityRequestAminoMsg;
                fromProtoMsg(message: _58.TotalLiquidityRequestProtoMsg): _58.TotalLiquidityRequest;
                toProto(message: _58.TotalLiquidityRequest): Uint8Array;
                toProtoMsg(message: _58.TotalLiquidityRequest): _58.TotalLiquidityRequestProtoMsg;
            };
            TotalLiquidityResponse: {
                typeUrl: string;
                encode(message: _58.TotalLiquidityResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _58.TotalLiquidityResponse;
                fromPartial(object: Partial<_58.TotalLiquidityResponse>): _58.TotalLiquidityResponse;
                fromAmino(object: _58.TotalLiquidityResponseAmino): _58.TotalLiquidityResponse;
                toAmino(message: _58.TotalLiquidityResponse): _58.TotalLiquidityResponseAmino;
                fromAminoMsg(object: _58.TotalLiquidityResponseAminoMsg): _58.TotalLiquidityResponse;
                toAminoMsg(message: _58.TotalLiquidityResponse): _58.TotalLiquidityResponseAminoMsg;
                fromProtoMsg(message: _58.TotalLiquidityResponseProtoMsg): _58.TotalLiquidityResponse;
                toProto(message: _58.TotalLiquidityResponse): Uint8Array;
                toProtoMsg(message: _58.TotalLiquidityResponse): _58.TotalLiquidityResponseProtoMsg;
            };
            TotalVolumeForPoolRequest: {
                typeUrl: string;
                encode(message: _58.TotalVolumeForPoolRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _58.TotalVolumeForPoolRequest;
                fromPartial(object: Partial<_58.TotalVolumeForPoolRequest>): _58.TotalVolumeForPoolRequest;
                fromAmino(object: _58.TotalVolumeForPoolRequestAmino): _58.TotalVolumeForPoolRequest;
                toAmino(message: _58.TotalVolumeForPoolRequest): _58.TotalVolumeForPoolRequestAmino;
                fromAminoMsg(object: _58.TotalVolumeForPoolRequestAminoMsg): _58.TotalVolumeForPoolRequest;
                toAminoMsg(message: _58.TotalVolumeForPoolRequest): _58.TotalVolumeForPoolRequestAminoMsg;
                fromProtoMsg(message: _58.TotalVolumeForPoolRequestProtoMsg): _58.TotalVolumeForPoolRequest;
                toProto(message: _58.TotalVolumeForPoolRequest): Uint8Array;
                toProtoMsg(message: _58.TotalVolumeForPoolRequest): _58.TotalVolumeForPoolRequestProtoMsg;
            };
            TotalVolumeForPoolResponse: {
                typeUrl: string;
                encode(message: _58.TotalVolumeForPoolResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _58.TotalVolumeForPoolResponse;
                fromPartial(object: Partial<_58.TotalVolumeForPoolResponse>): _58.TotalVolumeForPoolResponse;
                fromAmino(object: _58.TotalVolumeForPoolResponseAmino): _58.TotalVolumeForPoolResponse;
                toAmino(message: _58.TotalVolumeForPoolResponse): _58.TotalVolumeForPoolResponseAmino;
                fromAminoMsg(object: _58.TotalVolumeForPoolResponseAminoMsg): _58.TotalVolumeForPoolResponse;
                toAminoMsg(message: _58.TotalVolumeForPoolResponse): _58.TotalVolumeForPoolResponseAminoMsg;
                fromProtoMsg(message: _58.TotalVolumeForPoolResponseProtoMsg): _58.TotalVolumeForPoolResponse;
                toProto(message: _58.TotalVolumeForPoolResponse): Uint8Array;
                toProtoMsg(message: _58.TotalVolumeForPoolResponse): _58.TotalVolumeForPoolResponseProtoMsg;
            };
            TradingPairTakerFeeRequest: {
                typeUrl: string;
                encode(message: _58.TradingPairTakerFeeRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _58.TradingPairTakerFeeRequest;
                fromPartial(object: Partial<_58.TradingPairTakerFeeRequest>): _58.TradingPairTakerFeeRequest;
                fromAmino(object: _58.TradingPairTakerFeeRequestAmino): _58.TradingPairTakerFeeRequest;
                toAmino(message: _58.TradingPairTakerFeeRequest): _58.TradingPairTakerFeeRequestAmino;
                fromAminoMsg(object: _58.TradingPairTakerFeeRequestAminoMsg): _58.TradingPairTakerFeeRequest;
                toAminoMsg(message: _58.TradingPairTakerFeeRequest): _58.TradingPairTakerFeeRequestAminoMsg;
                fromProtoMsg(message: _58.TradingPairTakerFeeRequestProtoMsg): _58.TradingPairTakerFeeRequest;
                toProto(message: _58.TradingPairTakerFeeRequest): Uint8Array;
                toProtoMsg(message: _58.TradingPairTakerFeeRequest): _58.TradingPairTakerFeeRequestProtoMsg;
            };
            TradingPairTakerFeeResponse: {
                typeUrl: string;
                encode(message: _58.TradingPairTakerFeeResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _58.TradingPairTakerFeeResponse;
                fromPartial(object: Partial<_58.TradingPairTakerFeeResponse>): _58.TradingPairTakerFeeResponse;
                fromAmino(object: _58.TradingPairTakerFeeResponseAmino): _58.TradingPairTakerFeeResponse;
                toAmino(message: _58.TradingPairTakerFeeResponse): _58.TradingPairTakerFeeResponseAmino;
                fromAminoMsg(object: _58.TradingPairTakerFeeResponseAminoMsg): _58.TradingPairTakerFeeResponse;
                toAminoMsg(message: _58.TradingPairTakerFeeResponse): _58.TradingPairTakerFeeResponseAminoMsg;
                fromProtoMsg(message: _58.TradingPairTakerFeeResponseProtoMsg): _58.TradingPairTakerFeeResponse;
                toProto(message: _58.TradingPairTakerFeeResponse): Uint8Array;
                toProtoMsg(message: _58.TradingPairTakerFeeResponse): _58.TradingPairTakerFeeResponseProtoMsg;
            };
            EstimateTradeBasedOnPriceImpactRequest: {
                typeUrl: string;
                encode(message: _58.EstimateTradeBasedOnPriceImpactRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _58.EstimateTradeBasedOnPriceImpactRequest;
                fromPartial(object: Partial<_58.EstimateTradeBasedOnPriceImpactRequest>): _58.EstimateTradeBasedOnPriceImpactRequest;
                fromAmino(object: _58.EstimateTradeBasedOnPriceImpactRequestAmino): _58.EstimateTradeBasedOnPriceImpactRequest;
                toAmino(message: _58.EstimateTradeBasedOnPriceImpactRequest): _58.EstimateTradeBasedOnPriceImpactRequestAmino;
                fromAminoMsg(object: _58.EstimateTradeBasedOnPriceImpactRequestAminoMsg): _58.EstimateTradeBasedOnPriceImpactRequest;
                toAminoMsg(message: _58.EstimateTradeBasedOnPriceImpactRequest): _58.EstimateTradeBasedOnPriceImpactRequestAminoMsg;
                fromProtoMsg(message: _58.EstimateTradeBasedOnPriceImpactRequestProtoMsg): _58.EstimateTradeBasedOnPriceImpactRequest;
                toProto(message: _58.EstimateTradeBasedOnPriceImpactRequest): Uint8Array;
                toProtoMsg(message: _58.EstimateTradeBasedOnPriceImpactRequest): _58.EstimateTradeBasedOnPriceImpactRequestProtoMsg;
            };
            EstimateTradeBasedOnPriceImpactResponse: {
                typeUrl: string;
                encode(message: _58.EstimateTradeBasedOnPriceImpactResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _58.EstimateTradeBasedOnPriceImpactResponse;
                fromPartial(object: Partial<_58.EstimateTradeBasedOnPriceImpactResponse>): _58.EstimateTradeBasedOnPriceImpactResponse;
                fromAmino(object: _58.EstimateTradeBasedOnPriceImpactResponseAmino): _58.EstimateTradeBasedOnPriceImpactResponse;
                toAmino(message: _58.EstimateTradeBasedOnPriceImpactResponse): _58.EstimateTradeBasedOnPriceImpactResponseAmino;
                fromAminoMsg(object: _58.EstimateTradeBasedOnPriceImpactResponseAminoMsg): _58.EstimateTradeBasedOnPriceImpactResponse;
                toAminoMsg(message: _58.EstimateTradeBasedOnPriceImpactResponse): _58.EstimateTradeBasedOnPriceImpactResponseAminoMsg;
                fromProtoMsg(message: _58.EstimateTradeBasedOnPriceImpactResponseProtoMsg): _58.EstimateTradeBasedOnPriceImpactResponse;
                toProto(message: _58.EstimateTradeBasedOnPriceImpactResponse): Uint8Array;
                toProtoMsg(message: _58.EstimateTradeBasedOnPriceImpactResponse): _58.EstimateTradeBasedOnPriceImpactResponseProtoMsg;
            };
            PoolI_InterfaceDecoder: (input: Uint8Array | import("..").BinaryReader) => import("../google/protobuf/any").Any | import("./concentratedliquidity/v1beta1/pool").Pool | _8.CosmWasmPool | _20.Pool | _22.Pool;
            PoolI_FromAmino: (content: import("../google/protobuf/any").AnyAmino) => import("../google/protobuf/any").Any;
            PoolI_ToAmino: (content: import("../google/protobuf/any").Any) => import("../google/protobuf/any").AnyAmino;
            poolTypeFromJSON(object: any): _57.PoolType;
            poolTypeToJSON(object: _57.PoolType): string;
            PoolType: typeof _57.PoolType;
            PoolTypeSDKType: typeof _57.PoolType;
            PoolTypeAmino: typeof _57.PoolType;
            ModuleRoute: {
                typeUrl: string;
                encode(message: _57.ModuleRoute, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _57.ModuleRoute;
                fromPartial(object: Partial<_57.ModuleRoute>): _57.ModuleRoute;
                fromAmino(object: _57.ModuleRouteAmino): _57.ModuleRoute;
                toAmino(message: _57.ModuleRoute): _57.ModuleRouteAmino;
                fromAminoMsg(object: _57.ModuleRouteAminoMsg): _57.ModuleRoute;
                toAminoMsg(message: _57.ModuleRoute): _57.ModuleRouteAminoMsg;
                fromProtoMsg(message: _57.ModuleRouteProtoMsg): _57.ModuleRoute;
                toProto(message: _57.ModuleRoute): Uint8Array;
                toProtoMsg(message: _57.ModuleRoute): _57.ModuleRouteProtoMsg;
            };
            DenomPairTakerFeeProposal: {
                typeUrl: string;
                encode(message: _56.DenomPairTakerFeeProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _56.DenomPairTakerFeeProposal;
                fromPartial(object: Partial<_56.DenomPairTakerFeeProposal>): _56.DenomPairTakerFeeProposal;
                fromAmino(object: _56.DenomPairTakerFeeProposalAmino): _56.DenomPairTakerFeeProposal;
                toAmino(message: _56.DenomPairTakerFeeProposal): _56.DenomPairTakerFeeProposalAmino;
                fromAminoMsg(object: _56.DenomPairTakerFeeProposalAminoMsg): _56.DenomPairTakerFeeProposal;
                toAminoMsg(message: _56.DenomPairTakerFeeProposal): _56.DenomPairTakerFeeProposalAminoMsg;
                fromProtoMsg(message: _56.DenomPairTakerFeeProposalProtoMsg): _56.DenomPairTakerFeeProposal;
                toProto(message: _56.DenomPairTakerFeeProposal): Uint8Array;
                toProtoMsg(message: _56.DenomPairTakerFeeProposal): _56.DenomPairTakerFeeProposalProtoMsg;
            };
            Params: {
                typeUrl: string;
                encode(message: _55.Params, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _55.Params;
                fromPartial(object: Partial<_55.Params>): _55.Params;
                fromAmino(object: _55.ParamsAmino): _55.Params;
                toAmino(message: _55.Params): _55.ParamsAmino;
                fromAminoMsg(object: _55.ParamsAminoMsg): _55.Params;
                toAminoMsg(message: _55.Params): _55.ParamsAminoMsg;
                fromProtoMsg(message: _55.ParamsProtoMsg): _55.Params;
                toProto(message: _55.Params): Uint8Array;
                toProtoMsg(message: _55.Params): _55.ParamsProtoMsg;
            };
            GenesisState: {
                typeUrl: string;
                encode(message: _55.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _55.GenesisState;
                fromPartial(object: Partial<_55.GenesisState>): _55.GenesisState;
                fromAmino(object: _55.GenesisStateAmino): _55.GenesisState;
                toAmino(message: _55.GenesisState): _55.GenesisStateAmino;
                fromAminoMsg(object: _55.GenesisStateAminoMsg): _55.GenesisState;
                toAminoMsg(message: _55.GenesisState): _55.GenesisStateAminoMsg;
                fromProtoMsg(message: _55.GenesisStateProtoMsg): _55.GenesisState;
                toProto(message: _55.GenesisState): Uint8Array;
                toProtoMsg(message: _55.GenesisState): _55.GenesisStateProtoMsg;
            };
            TakerFeeParams: {
                typeUrl: string;
                encode(message: _55.TakerFeeParams, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _55.TakerFeeParams;
                fromPartial(object: Partial<_55.TakerFeeParams>): _55.TakerFeeParams;
                fromAmino(object: _55.TakerFeeParamsAmino): _55.TakerFeeParams;
                toAmino(message: _55.TakerFeeParams): _55.TakerFeeParamsAmino;
                fromAminoMsg(object: _55.TakerFeeParamsAminoMsg): _55.TakerFeeParams;
                toAminoMsg(message: _55.TakerFeeParams): _55.TakerFeeParamsAminoMsg;
                fromProtoMsg(message: _55.TakerFeeParamsProtoMsg): _55.TakerFeeParams;
                toProto(message: _55.TakerFeeParams): Uint8Array;
                toProtoMsg(message: _55.TakerFeeParams): _55.TakerFeeParamsProtoMsg;
            };
            TakerFeeDistributionPercentage: {
                typeUrl: string;
                encode(message: _55.TakerFeeDistributionPercentage, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _55.TakerFeeDistributionPercentage;
                fromPartial(object: Partial<_55.TakerFeeDistributionPercentage>): _55.TakerFeeDistributionPercentage;
                fromAmino(object: _55.TakerFeeDistributionPercentageAmino): _55.TakerFeeDistributionPercentage;
                toAmino(message: _55.TakerFeeDistributionPercentage): _55.TakerFeeDistributionPercentageAmino;
                fromAminoMsg(object: _55.TakerFeeDistributionPercentageAminoMsg): _55.TakerFeeDistributionPercentage;
                toAminoMsg(message: _55.TakerFeeDistributionPercentage): _55.TakerFeeDistributionPercentageAminoMsg;
                fromProtoMsg(message: _55.TakerFeeDistributionPercentageProtoMsg): _55.TakerFeeDistributionPercentage;
                toProto(message: _55.TakerFeeDistributionPercentage): Uint8Array;
                toProtoMsg(message: _55.TakerFeeDistributionPercentage): _55.TakerFeeDistributionPercentageProtoMsg;
            };
            TakerFeesTracker: {
                typeUrl: string;
                encode(message: _55.TakerFeesTracker, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _55.TakerFeesTracker;
                fromPartial(object: Partial<_55.TakerFeesTracker>): _55.TakerFeesTracker;
                fromAmino(object: _55.TakerFeesTrackerAmino): _55.TakerFeesTracker;
                toAmino(message: _55.TakerFeesTracker): _55.TakerFeesTrackerAmino;
                fromAminoMsg(object: _55.TakerFeesTrackerAminoMsg): _55.TakerFeesTracker;
                toAminoMsg(message: _55.TakerFeesTracker): _55.TakerFeesTrackerAminoMsg;
                fromProtoMsg(message: _55.TakerFeesTrackerProtoMsg): _55.TakerFeesTracker;
                toProto(message: _55.TakerFeesTracker): Uint8Array;
                toProtoMsg(message: _55.TakerFeesTracker): _55.TakerFeesTrackerProtoMsg;
            };
            PoolVolume: {
                typeUrl: string;
                encode(message: _55.PoolVolume, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _55.PoolVolume;
                fromPartial(object: Partial<_55.PoolVolume>): _55.PoolVolume;
                fromAmino(object: _55.PoolVolumeAmino): _55.PoolVolume;
                toAmino(message: _55.PoolVolume): _55.PoolVolumeAmino;
                fromAminoMsg(object: _55.PoolVolumeAminoMsg): _55.PoolVolume;
                toAminoMsg(message: _55.PoolVolume): _55.PoolVolumeAminoMsg;
                fromProtoMsg(message: _55.PoolVolumeProtoMsg): _55.PoolVolume;
                toProto(message: _55.PoolVolume): Uint8Array;
                toProtoMsg(message: _55.PoolVolume): _55.PoolVolumeProtoMsg;
            };
        };
        const v2: {
            QueryClientImpl: typeof _312.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                spotPriceV2(request: _62.SpotPriceRequest): Promise<_62.SpotPriceResponse>;
            };
            LCDQueryClient: typeof _293.LCDQueryClient;
            SpotPriceRequest: {
                typeUrl: string;
                encode(message: _62.SpotPriceRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _62.SpotPriceRequest;
                fromPartial(object: Partial<_62.SpotPriceRequest>): _62.SpotPriceRequest;
                fromAmino(object: _62.SpotPriceRequestAmino): _62.SpotPriceRequest;
                toAmino(message: _62.SpotPriceRequest): _62.SpotPriceRequestAmino;
                fromAminoMsg(object: _62.SpotPriceRequestAminoMsg): _62.SpotPriceRequest;
                toAminoMsg(message: _62.SpotPriceRequest): _62.SpotPriceRequestAminoMsg;
                fromProtoMsg(message: _62.SpotPriceRequestProtoMsg): _62.SpotPriceRequest;
                toProto(message: _62.SpotPriceRequest): Uint8Array;
                toProtoMsg(message: _62.SpotPriceRequest): _62.SpotPriceRequestProtoMsg;
            };
            SpotPriceResponse: {
                typeUrl: string;
                encode(message: _62.SpotPriceResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _62.SpotPriceResponse;
                fromPartial(object: Partial<_62.SpotPriceResponse>): _62.SpotPriceResponse;
                fromAmino(object: _62.SpotPriceResponseAmino): _62.SpotPriceResponse;
                toAmino(message: _62.SpotPriceResponse): _62.SpotPriceResponseAmino;
                fromAminoMsg(object: _62.SpotPriceResponseAminoMsg): _62.SpotPriceResponse;
                toAminoMsg(message: _62.SpotPriceResponse): _62.SpotPriceResponseAminoMsg;
                fromProtoMsg(message: _62.SpotPriceResponseProtoMsg): _62.SpotPriceResponse;
                toProto(message: _62.SpotPriceResponse): Uint8Array;
                toProtoMsg(message: _62.SpotPriceResponse): _62.SpotPriceResponseProtoMsg;
            };
        };
    }
    namespace protorev {
        const v1beta1: {
            MsgClientImpl: typeof _328.MsgClientImpl;
            QueryClientImpl: typeof _313.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                params(request?: _67.QueryParamsRequest): Promise<_67.QueryParamsResponse>;
                getProtoRevNumberOfTrades(request?: _67.QueryGetProtoRevNumberOfTradesRequest): Promise<_67.QueryGetProtoRevNumberOfTradesResponse>;
                getProtoRevProfitsByDenom(request: _67.QueryGetProtoRevProfitsByDenomRequest): Promise<_67.QueryGetProtoRevProfitsByDenomResponse>;
                getProtoRevAllProfits(request?: _67.QueryGetProtoRevAllProfitsRequest): Promise<_67.QueryGetProtoRevAllProfitsResponse>;
                getProtoRevStatisticsByRoute(request: _67.QueryGetProtoRevStatisticsByRouteRequest): Promise<_67.QueryGetProtoRevStatisticsByRouteResponse>;
                getProtoRevAllRouteStatistics(request?: _67.QueryGetProtoRevAllRouteStatisticsRequest): Promise<_67.QueryGetProtoRevAllRouteStatisticsResponse>;
                getProtoRevTokenPairArbRoutes(request?: _67.QueryGetProtoRevTokenPairArbRoutesRequest): Promise<_67.QueryGetProtoRevTokenPairArbRoutesResponse>;
                getProtoRevAdminAccount(request?: _67.QueryGetProtoRevAdminAccountRequest): Promise<_67.QueryGetProtoRevAdminAccountResponse>;
                getProtoRevDeveloperAccount(request?: _67.QueryGetProtoRevDeveloperAccountRequest): Promise<_67.QueryGetProtoRevDeveloperAccountResponse>;
                getProtoRevInfoByPoolType(request?: _67.QueryGetProtoRevInfoByPoolTypeRequest): Promise<_67.QueryGetProtoRevInfoByPoolTypeResponse>;
                getProtoRevMaxPoolPointsPerTx(request?: _67.QueryGetProtoRevMaxPoolPointsPerTxRequest): Promise<_67.QueryGetProtoRevMaxPoolPointsPerTxResponse>;
                getProtoRevMaxPoolPointsPerBlock(request?: _67.QueryGetProtoRevMaxPoolPointsPerBlockRequest): Promise<_67.QueryGetProtoRevMaxPoolPointsPerBlockResponse>;
                getProtoRevBaseDenoms(request?: _67.QueryGetProtoRevBaseDenomsRequest): Promise<_67.QueryGetProtoRevBaseDenomsResponse>;
                getProtoRevEnabled(request?: _67.QueryGetProtoRevEnabledRequest): Promise<_67.QueryGetProtoRevEnabledResponse>;
                getProtoRevPool(request: _67.QueryGetProtoRevPoolRequest): Promise<_67.QueryGetProtoRevPoolResponse>;
                getAllProtocolRevenue(request?: _67.QueryGetAllProtocolRevenueRequest): Promise<_67.QueryGetAllProtocolRevenueResponse>;
            };
            LCDQueryClient: typeof _294.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    setHotRoutes(value: _68.MsgSetHotRoutes): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    setDeveloperAccount(value: _68.MsgSetDeveloperAccount): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    setMaxPoolPointsPerTx(value: _68.MsgSetMaxPoolPointsPerTx): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    setMaxPoolPointsPerBlock(value: _68.MsgSetMaxPoolPointsPerBlock): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    setInfoByPoolType(value: _68.MsgSetInfoByPoolType): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    setBaseDenoms(value: _68.MsgSetBaseDenoms): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    setHotRoutes(value: _68.MsgSetHotRoutes): {
                        typeUrl: string;
                        value: _68.MsgSetHotRoutes;
                    };
                    setDeveloperAccount(value: _68.MsgSetDeveloperAccount): {
                        typeUrl: string;
                        value: _68.MsgSetDeveloperAccount;
                    };
                    setMaxPoolPointsPerTx(value: _68.MsgSetMaxPoolPointsPerTx): {
                        typeUrl: string;
                        value: _68.MsgSetMaxPoolPointsPerTx;
                    };
                    setMaxPoolPointsPerBlock(value: _68.MsgSetMaxPoolPointsPerBlock): {
                        typeUrl: string;
                        value: _68.MsgSetMaxPoolPointsPerBlock;
                    };
                    setInfoByPoolType(value: _68.MsgSetInfoByPoolType): {
                        typeUrl: string;
                        value: _68.MsgSetInfoByPoolType;
                    };
                    setBaseDenoms(value: _68.MsgSetBaseDenoms): {
                        typeUrl: string;
                        value: _68.MsgSetBaseDenoms;
                    };
                };
                fromJSON: {
                    setHotRoutes(value: any): {
                        typeUrl: string;
                        value: _68.MsgSetHotRoutes;
                    };
                    setDeveloperAccount(value: any): {
                        typeUrl: string;
                        value: _68.MsgSetDeveloperAccount;
                    };
                    setMaxPoolPointsPerTx(value: any): {
                        typeUrl: string;
                        value: _68.MsgSetMaxPoolPointsPerTx;
                    };
                    setMaxPoolPointsPerBlock(value: any): {
                        typeUrl: string;
                        value: _68.MsgSetMaxPoolPointsPerBlock;
                    };
                    setInfoByPoolType(value: any): {
                        typeUrl: string;
                        value: _68.MsgSetInfoByPoolType;
                    };
                    setBaseDenoms(value: any): {
                        typeUrl: string;
                        value: _68.MsgSetBaseDenoms;
                    };
                };
                fromPartial: {
                    setHotRoutes(value: _68.MsgSetHotRoutes): {
                        typeUrl: string;
                        value: _68.MsgSetHotRoutes;
                    };
                    setDeveloperAccount(value: _68.MsgSetDeveloperAccount): {
                        typeUrl: string;
                        value: _68.MsgSetDeveloperAccount;
                    };
                    setMaxPoolPointsPerTx(value: _68.MsgSetMaxPoolPointsPerTx): {
                        typeUrl: string;
                        value: _68.MsgSetMaxPoolPointsPerTx;
                    };
                    setMaxPoolPointsPerBlock(value: _68.MsgSetMaxPoolPointsPerBlock): {
                        typeUrl: string;
                        value: _68.MsgSetMaxPoolPointsPerBlock;
                    };
                    setInfoByPoolType(value: _68.MsgSetInfoByPoolType): {
                        typeUrl: string;
                        value: _68.MsgSetInfoByPoolType;
                    };
                    setBaseDenoms(value: _68.MsgSetBaseDenoms): {
                        typeUrl: string;
                        value: _68.MsgSetBaseDenoms;
                    };
                };
            };
            AminoConverter: {
                "/osmosis.protorev.v1beta1.MsgSetHotRoutes": {
                    aminoType: string;
                    toAmino: (message: _68.MsgSetHotRoutes) => _68.MsgSetHotRoutesAmino;
                    fromAmino: (object: _68.MsgSetHotRoutesAmino) => _68.MsgSetHotRoutes;
                };
                "/osmosis.protorev.v1beta1.MsgSetDeveloperAccount": {
                    aminoType: string;
                    toAmino: (message: _68.MsgSetDeveloperAccount) => _68.MsgSetDeveloperAccountAmino;
                    fromAmino: (object: _68.MsgSetDeveloperAccountAmino) => _68.MsgSetDeveloperAccount;
                };
                "/osmosis.protorev.v1beta1.MsgSetMaxPoolPointsPerTx": {
                    aminoType: string;
                    toAmino: (message: _68.MsgSetMaxPoolPointsPerTx) => _68.MsgSetMaxPoolPointsPerTxAmino;
                    fromAmino: (object: _68.MsgSetMaxPoolPointsPerTxAmino) => _68.MsgSetMaxPoolPointsPerTx;
                };
                "/osmosis.protorev.v1beta1.MsgSetMaxPoolPointsPerBlock": {
                    aminoType: string;
                    toAmino: (message: _68.MsgSetMaxPoolPointsPerBlock) => _68.MsgSetMaxPoolPointsPerBlockAmino;
                    fromAmino: (object: _68.MsgSetMaxPoolPointsPerBlockAmino) => _68.MsgSetMaxPoolPointsPerBlock;
                };
                "/osmosis.protorev.v1beta1.MsgSetInfoByPoolType": {
                    aminoType: string;
                    toAmino: (message: _68.MsgSetInfoByPoolType) => _68.MsgSetInfoByPoolTypeAmino;
                    fromAmino: (object: _68.MsgSetInfoByPoolTypeAmino) => _68.MsgSetInfoByPoolType;
                };
                "/osmosis.protorev.v1beta1.MsgSetBaseDenoms": {
                    aminoType: string;
                    toAmino: (message: _68.MsgSetBaseDenoms) => _68.MsgSetBaseDenomsAmino;
                    fromAmino: (object: _68.MsgSetBaseDenomsAmino) => _68.MsgSetBaseDenoms;
                };
            };
            MsgSetHotRoutes: {
                typeUrl: string;
                encode(message: _68.MsgSetHotRoutes, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _68.MsgSetHotRoutes;
                fromPartial(object: Partial<_68.MsgSetHotRoutes>): _68.MsgSetHotRoutes;
                fromAmino(object: _68.MsgSetHotRoutesAmino): _68.MsgSetHotRoutes;
                toAmino(message: _68.MsgSetHotRoutes): _68.MsgSetHotRoutesAmino;
                fromAminoMsg(object: _68.MsgSetHotRoutesAminoMsg): _68.MsgSetHotRoutes;
                toAminoMsg(message: _68.MsgSetHotRoutes): _68.MsgSetHotRoutesAminoMsg;
                fromProtoMsg(message: _68.MsgSetHotRoutesProtoMsg): _68.MsgSetHotRoutes;
                toProto(message: _68.MsgSetHotRoutes): Uint8Array;
                toProtoMsg(message: _68.MsgSetHotRoutes): _68.MsgSetHotRoutesProtoMsg;
            };
            MsgSetHotRoutesResponse: {
                typeUrl: string;
                encode(_: _68.MsgSetHotRoutesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _68.MsgSetHotRoutesResponse;
                fromPartial(_: Partial<_68.MsgSetHotRoutesResponse>): _68.MsgSetHotRoutesResponse;
                fromAmino(_: _68.MsgSetHotRoutesResponseAmino): _68.MsgSetHotRoutesResponse;
                toAmino(_: _68.MsgSetHotRoutesResponse): _68.MsgSetHotRoutesResponseAmino;
                fromAminoMsg(object: _68.MsgSetHotRoutesResponseAminoMsg): _68.MsgSetHotRoutesResponse;
                toAminoMsg(message: _68.MsgSetHotRoutesResponse): _68.MsgSetHotRoutesResponseAminoMsg;
                fromProtoMsg(message: _68.MsgSetHotRoutesResponseProtoMsg): _68.MsgSetHotRoutesResponse;
                toProto(message: _68.MsgSetHotRoutesResponse): Uint8Array;
                toProtoMsg(message: _68.MsgSetHotRoutesResponse): _68.MsgSetHotRoutesResponseProtoMsg;
            };
            MsgSetDeveloperAccount: {
                typeUrl: string;
                encode(message: _68.MsgSetDeveloperAccount, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _68.MsgSetDeveloperAccount;
                fromPartial(object: Partial<_68.MsgSetDeveloperAccount>): _68.MsgSetDeveloperAccount;
                fromAmino(object: _68.MsgSetDeveloperAccountAmino): _68.MsgSetDeveloperAccount;
                toAmino(message: _68.MsgSetDeveloperAccount): _68.MsgSetDeveloperAccountAmino;
                fromAminoMsg(object: _68.MsgSetDeveloperAccountAminoMsg): _68.MsgSetDeveloperAccount;
                toAminoMsg(message: _68.MsgSetDeveloperAccount): _68.MsgSetDeveloperAccountAminoMsg;
                fromProtoMsg(message: _68.MsgSetDeveloperAccountProtoMsg): _68.MsgSetDeveloperAccount;
                toProto(message: _68.MsgSetDeveloperAccount): Uint8Array;
                toProtoMsg(message: _68.MsgSetDeveloperAccount): _68.MsgSetDeveloperAccountProtoMsg;
            };
            MsgSetDeveloperAccountResponse: {
                typeUrl: string;
                encode(_: _68.MsgSetDeveloperAccountResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _68.MsgSetDeveloperAccountResponse;
                fromPartial(_: Partial<_68.MsgSetDeveloperAccountResponse>): _68.MsgSetDeveloperAccountResponse;
                fromAmino(_: _68.MsgSetDeveloperAccountResponseAmino): _68.MsgSetDeveloperAccountResponse;
                toAmino(_: _68.MsgSetDeveloperAccountResponse): _68.MsgSetDeveloperAccountResponseAmino;
                fromAminoMsg(object: _68.MsgSetDeveloperAccountResponseAminoMsg): _68.MsgSetDeveloperAccountResponse;
                toAminoMsg(message: _68.MsgSetDeveloperAccountResponse): _68.MsgSetDeveloperAccountResponseAminoMsg;
                fromProtoMsg(message: _68.MsgSetDeveloperAccountResponseProtoMsg): _68.MsgSetDeveloperAccountResponse;
                toProto(message: _68.MsgSetDeveloperAccountResponse): Uint8Array;
                toProtoMsg(message: _68.MsgSetDeveloperAccountResponse): _68.MsgSetDeveloperAccountResponseProtoMsg;
            };
            MsgSetInfoByPoolType: {
                typeUrl: string;
                encode(message: _68.MsgSetInfoByPoolType, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _68.MsgSetInfoByPoolType;
                fromPartial(object: Partial<_68.MsgSetInfoByPoolType>): _68.MsgSetInfoByPoolType;
                fromAmino(object: _68.MsgSetInfoByPoolTypeAmino): _68.MsgSetInfoByPoolType;
                toAmino(message: _68.MsgSetInfoByPoolType): _68.MsgSetInfoByPoolTypeAmino;
                fromAminoMsg(object: _68.MsgSetInfoByPoolTypeAminoMsg): _68.MsgSetInfoByPoolType;
                toAminoMsg(message: _68.MsgSetInfoByPoolType): _68.MsgSetInfoByPoolTypeAminoMsg;
                fromProtoMsg(message: _68.MsgSetInfoByPoolTypeProtoMsg): _68.MsgSetInfoByPoolType;
                toProto(message: _68.MsgSetInfoByPoolType): Uint8Array;
                toProtoMsg(message: _68.MsgSetInfoByPoolType): _68.MsgSetInfoByPoolTypeProtoMsg;
            };
            MsgSetInfoByPoolTypeResponse: {
                typeUrl: string;
                encode(_: _68.MsgSetInfoByPoolTypeResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _68.MsgSetInfoByPoolTypeResponse;
                fromPartial(_: Partial<_68.MsgSetInfoByPoolTypeResponse>): _68.MsgSetInfoByPoolTypeResponse;
                fromAmino(_: _68.MsgSetInfoByPoolTypeResponseAmino): _68.MsgSetInfoByPoolTypeResponse;
                toAmino(_: _68.MsgSetInfoByPoolTypeResponse): _68.MsgSetInfoByPoolTypeResponseAmino;
                fromAminoMsg(object: _68.MsgSetInfoByPoolTypeResponseAminoMsg): _68.MsgSetInfoByPoolTypeResponse;
                toAminoMsg(message: _68.MsgSetInfoByPoolTypeResponse): _68.MsgSetInfoByPoolTypeResponseAminoMsg;
                fromProtoMsg(message: _68.MsgSetInfoByPoolTypeResponseProtoMsg): _68.MsgSetInfoByPoolTypeResponse;
                toProto(message: _68.MsgSetInfoByPoolTypeResponse): Uint8Array;
                toProtoMsg(message: _68.MsgSetInfoByPoolTypeResponse): _68.MsgSetInfoByPoolTypeResponseProtoMsg;
            };
            MsgSetMaxPoolPointsPerTx: {
                typeUrl: string;
                encode(message: _68.MsgSetMaxPoolPointsPerTx, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _68.MsgSetMaxPoolPointsPerTx;
                fromPartial(object: Partial<_68.MsgSetMaxPoolPointsPerTx>): _68.MsgSetMaxPoolPointsPerTx;
                fromAmino(object: _68.MsgSetMaxPoolPointsPerTxAmino): _68.MsgSetMaxPoolPointsPerTx;
                toAmino(message: _68.MsgSetMaxPoolPointsPerTx): _68.MsgSetMaxPoolPointsPerTxAmino;
                fromAminoMsg(object: _68.MsgSetMaxPoolPointsPerTxAminoMsg): _68.MsgSetMaxPoolPointsPerTx;
                toAminoMsg(message: _68.MsgSetMaxPoolPointsPerTx): _68.MsgSetMaxPoolPointsPerTxAminoMsg;
                fromProtoMsg(message: _68.MsgSetMaxPoolPointsPerTxProtoMsg): _68.MsgSetMaxPoolPointsPerTx;
                toProto(message: _68.MsgSetMaxPoolPointsPerTx): Uint8Array;
                toProtoMsg(message: _68.MsgSetMaxPoolPointsPerTx): _68.MsgSetMaxPoolPointsPerTxProtoMsg;
            };
            MsgSetMaxPoolPointsPerTxResponse: {
                typeUrl: string;
                encode(_: _68.MsgSetMaxPoolPointsPerTxResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _68.MsgSetMaxPoolPointsPerTxResponse;
                fromPartial(_: Partial<_68.MsgSetMaxPoolPointsPerTxResponse>): _68.MsgSetMaxPoolPointsPerTxResponse;
                fromAmino(_: _68.MsgSetMaxPoolPointsPerTxResponseAmino): _68.MsgSetMaxPoolPointsPerTxResponse;
                toAmino(_: _68.MsgSetMaxPoolPointsPerTxResponse): _68.MsgSetMaxPoolPointsPerTxResponseAmino;
                fromAminoMsg(object: _68.MsgSetMaxPoolPointsPerTxResponseAminoMsg): _68.MsgSetMaxPoolPointsPerTxResponse;
                toAminoMsg(message: _68.MsgSetMaxPoolPointsPerTxResponse): _68.MsgSetMaxPoolPointsPerTxResponseAminoMsg;
                fromProtoMsg(message: _68.MsgSetMaxPoolPointsPerTxResponseProtoMsg): _68.MsgSetMaxPoolPointsPerTxResponse;
                toProto(message: _68.MsgSetMaxPoolPointsPerTxResponse): Uint8Array;
                toProtoMsg(message: _68.MsgSetMaxPoolPointsPerTxResponse): _68.MsgSetMaxPoolPointsPerTxResponseProtoMsg;
            };
            MsgSetMaxPoolPointsPerBlock: {
                typeUrl: string;
                encode(message: _68.MsgSetMaxPoolPointsPerBlock, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _68.MsgSetMaxPoolPointsPerBlock;
                fromPartial(object: Partial<_68.MsgSetMaxPoolPointsPerBlock>): _68.MsgSetMaxPoolPointsPerBlock;
                fromAmino(object: _68.MsgSetMaxPoolPointsPerBlockAmino): _68.MsgSetMaxPoolPointsPerBlock;
                toAmino(message: _68.MsgSetMaxPoolPointsPerBlock): _68.MsgSetMaxPoolPointsPerBlockAmino;
                fromAminoMsg(object: _68.MsgSetMaxPoolPointsPerBlockAminoMsg): _68.MsgSetMaxPoolPointsPerBlock;
                toAminoMsg(message: _68.MsgSetMaxPoolPointsPerBlock): _68.MsgSetMaxPoolPointsPerBlockAminoMsg;
                fromProtoMsg(message: _68.MsgSetMaxPoolPointsPerBlockProtoMsg): _68.MsgSetMaxPoolPointsPerBlock;
                toProto(message: _68.MsgSetMaxPoolPointsPerBlock): Uint8Array;
                toProtoMsg(message: _68.MsgSetMaxPoolPointsPerBlock): _68.MsgSetMaxPoolPointsPerBlockProtoMsg;
            };
            MsgSetMaxPoolPointsPerBlockResponse: {
                typeUrl: string;
                encode(_: _68.MsgSetMaxPoolPointsPerBlockResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _68.MsgSetMaxPoolPointsPerBlockResponse;
                fromPartial(_: Partial<_68.MsgSetMaxPoolPointsPerBlockResponse>): _68.MsgSetMaxPoolPointsPerBlockResponse;
                fromAmino(_: _68.MsgSetMaxPoolPointsPerBlockResponseAmino): _68.MsgSetMaxPoolPointsPerBlockResponse;
                toAmino(_: _68.MsgSetMaxPoolPointsPerBlockResponse): _68.MsgSetMaxPoolPointsPerBlockResponseAmino;
                fromAminoMsg(object: _68.MsgSetMaxPoolPointsPerBlockResponseAminoMsg): _68.MsgSetMaxPoolPointsPerBlockResponse;
                toAminoMsg(message: _68.MsgSetMaxPoolPointsPerBlockResponse): _68.MsgSetMaxPoolPointsPerBlockResponseAminoMsg;
                fromProtoMsg(message: _68.MsgSetMaxPoolPointsPerBlockResponseProtoMsg): _68.MsgSetMaxPoolPointsPerBlockResponse;
                toProto(message: _68.MsgSetMaxPoolPointsPerBlockResponse): Uint8Array;
                toProtoMsg(message: _68.MsgSetMaxPoolPointsPerBlockResponse): _68.MsgSetMaxPoolPointsPerBlockResponseProtoMsg;
            };
            MsgSetBaseDenoms: {
                typeUrl: string;
                encode(message: _68.MsgSetBaseDenoms, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _68.MsgSetBaseDenoms;
                fromPartial(object: Partial<_68.MsgSetBaseDenoms>): _68.MsgSetBaseDenoms;
                fromAmino(object: _68.MsgSetBaseDenomsAmino): _68.MsgSetBaseDenoms;
                toAmino(message: _68.MsgSetBaseDenoms): _68.MsgSetBaseDenomsAmino;
                fromAminoMsg(object: _68.MsgSetBaseDenomsAminoMsg): _68.MsgSetBaseDenoms;
                toAminoMsg(message: _68.MsgSetBaseDenoms): _68.MsgSetBaseDenomsAminoMsg;
                fromProtoMsg(message: _68.MsgSetBaseDenomsProtoMsg): _68.MsgSetBaseDenoms;
                toProto(message: _68.MsgSetBaseDenoms): Uint8Array;
                toProtoMsg(message: _68.MsgSetBaseDenoms): _68.MsgSetBaseDenomsProtoMsg;
            };
            MsgSetBaseDenomsResponse: {
                typeUrl: string;
                encode(_: _68.MsgSetBaseDenomsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _68.MsgSetBaseDenomsResponse;
                fromPartial(_: Partial<_68.MsgSetBaseDenomsResponse>): _68.MsgSetBaseDenomsResponse;
                fromAmino(_: _68.MsgSetBaseDenomsResponseAmino): _68.MsgSetBaseDenomsResponse;
                toAmino(_: _68.MsgSetBaseDenomsResponse): _68.MsgSetBaseDenomsResponseAmino;
                fromAminoMsg(object: _68.MsgSetBaseDenomsResponseAminoMsg): _68.MsgSetBaseDenomsResponse;
                toAminoMsg(message: _68.MsgSetBaseDenomsResponse): _68.MsgSetBaseDenomsResponseAminoMsg;
                fromProtoMsg(message: _68.MsgSetBaseDenomsResponseProtoMsg): _68.MsgSetBaseDenomsResponse;
                toProto(message: _68.MsgSetBaseDenomsResponse): Uint8Array;
                toProtoMsg(message: _68.MsgSetBaseDenomsResponse): _68.MsgSetBaseDenomsResponseProtoMsg;
            };
            QueryParamsRequest: {
                typeUrl: string;
                encode(_: _67.QueryParamsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _67.QueryParamsRequest;
                fromPartial(_: Partial<_67.QueryParamsRequest>): _67.QueryParamsRequest;
                fromAmino(_: _67.QueryParamsRequestAmino): _67.QueryParamsRequest;
                toAmino(_: _67.QueryParamsRequest): _67.QueryParamsRequestAmino;
                fromAminoMsg(object: _67.QueryParamsRequestAminoMsg): _67.QueryParamsRequest;
                toAminoMsg(message: _67.QueryParamsRequest): _67.QueryParamsRequestAminoMsg;
                fromProtoMsg(message: _67.QueryParamsRequestProtoMsg): _67.QueryParamsRequest;
                toProto(message: _67.QueryParamsRequest): Uint8Array;
                toProtoMsg(message: _67.QueryParamsRequest): _67.QueryParamsRequestProtoMsg;
            };
            QueryParamsResponse: {
                typeUrl: string;
                encode(message: _67.QueryParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _67.QueryParamsResponse;
                fromPartial(object: Partial<_67.QueryParamsResponse>): _67.QueryParamsResponse;
                fromAmino(object: _67.QueryParamsResponseAmino): _67.QueryParamsResponse;
                toAmino(message: _67.QueryParamsResponse): _67.QueryParamsResponseAmino;
                fromAminoMsg(object: _67.QueryParamsResponseAminoMsg): _67.QueryParamsResponse;
                toAminoMsg(message: _67.QueryParamsResponse): _67.QueryParamsResponseAminoMsg;
                fromProtoMsg(message: _67.QueryParamsResponseProtoMsg): _67.QueryParamsResponse;
                toProto(message: _67.QueryParamsResponse): Uint8Array;
                toProtoMsg(message: _67.QueryParamsResponse): _67.QueryParamsResponseProtoMsg;
            };
            QueryGetProtoRevNumberOfTradesRequest: {
                typeUrl: string;
                encode(_: _67.QueryGetProtoRevNumberOfTradesRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _67.QueryGetProtoRevNumberOfTradesRequest;
                fromPartial(_: Partial<_67.QueryGetProtoRevNumberOfTradesRequest>): _67.QueryGetProtoRevNumberOfTradesRequest;
                fromAmino(_: _67.QueryGetProtoRevNumberOfTradesRequestAmino): _67.QueryGetProtoRevNumberOfTradesRequest;
                toAmino(_: _67.QueryGetProtoRevNumberOfTradesRequest): _67.QueryGetProtoRevNumberOfTradesRequestAmino;
                fromAminoMsg(object: _67.QueryGetProtoRevNumberOfTradesRequestAminoMsg): _67.QueryGetProtoRevNumberOfTradesRequest;
                toAminoMsg(message: _67.QueryGetProtoRevNumberOfTradesRequest): _67.QueryGetProtoRevNumberOfTradesRequestAminoMsg;
                fromProtoMsg(message: _67.QueryGetProtoRevNumberOfTradesRequestProtoMsg): _67.QueryGetProtoRevNumberOfTradesRequest;
                toProto(message: _67.QueryGetProtoRevNumberOfTradesRequest): Uint8Array;
                toProtoMsg(message: _67.QueryGetProtoRevNumberOfTradesRequest): _67.QueryGetProtoRevNumberOfTradesRequestProtoMsg;
            };
            QueryGetProtoRevNumberOfTradesResponse: {
                typeUrl: string;
                encode(message: _67.QueryGetProtoRevNumberOfTradesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _67.QueryGetProtoRevNumberOfTradesResponse;
                fromPartial(object: Partial<_67.QueryGetProtoRevNumberOfTradesResponse>): _67.QueryGetProtoRevNumberOfTradesResponse;
                fromAmino(object: _67.QueryGetProtoRevNumberOfTradesResponseAmino): _67.QueryGetProtoRevNumberOfTradesResponse;
                toAmino(message: _67.QueryGetProtoRevNumberOfTradesResponse): _67.QueryGetProtoRevNumberOfTradesResponseAmino;
                fromAminoMsg(object: _67.QueryGetProtoRevNumberOfTradesResponseAminoMsg): _67.QueryGetProtoRevNumberOfTradesResponse;
                toAminoMsg(message: _67.QueryGetProtoRevNumberOfTradesResponse): _67.QueryGetProtoRevNumberOfTradesResponseAminoMsg;
                fromProtoMsg(message: _67.QueryGetProtoRevNumberOfTradesResponseProtoMsg): _67.QueryGetProtoRevNumberOfTradesResponse;
                toProto(message: _67.QueryGetProtoRevNumberOfTradesResponse): Uint8Array;
                toProtoMsg(message: _67.QueryGetProtoRevNumberOfTradesResponse): _67.QueryGetProtoRevNumberOfTradesResponseProtoMsg;
            };
            QueryGetProtoRevProfitsByDenomRequest: {
                typeUrl: string;
                encode(message: _67.QueryGetProtoRevProfitsByDenomRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _67.QueryGetProtoRevProfitsByDenomRequest;
                fromPartial(object: Partial<_67.QueryGetProtoRevProfitsByDenomRequest>): _67.QueryGetProtoRevProfitsByDenomRequest;
                fromAmino(object: _67.QueryGetProtoRevProfitsByDenomRequestAmino): _67.QueryGetProtoRevProfitsByDenomRequest;
                toAmino(message: _67.QueryGetProtoRevProfitsByDenomRequest): _67.QueryGetProtoRevProfitsByDenomRequestAmino;
                fromAminoMsg(object: _67.QueryGetProtoRevProfitsByDenomRequestAminoMsg): _67.QueryGetProtoRevProfitsByDenomRequest;
                toAminoMsg(message: _67.QueryGetProtoRevProfitsByDenomRequest): _67.QueryGetProtoRevProfitsByDenomRequestAminoMsg;
                fromProtoMsg(message: _67.QueryGetProtoRevProfitsByDenomRequestProtoMsg): _67.QueryGetProtoRevProfitsByDenomRequest;
                toProto(message: _67.QueryGetProtoRevProfitsByDenomRequest): Uint8Array;
                toProtoMsg(message: _67.QueryGetProtoRevProfitsByDenomRequest): _67.QueryGetProtoRevProfitsByDenomRequestProtoMsg;
            };
            QueryGetProtoRevProfitsByDenomResponse: {
                typeUrl: string;
                encode(message: _67.QueryGetProtoRevProfitsByDenomResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _67.QueryGetProtoRevProfitsByDenomResponse;
                fromPartial(object: Partial<_67.QueryGetProtoRevProfitsByDenomResponse>): _67.QueryGetProtoRevProfitsByDenomResponse;
                fromAmino(object: _67.QueryGetProtoRevProfitsByDenomResponseAmino): _67.QueryGetProtoRevProfitsByDenomResponse;
                toAmino(message: _67.QueryGetProtoRevProfitsByDenomResponse): _67.QueryGetProtoRevProfitsByDenomResponseAmino;
                fromAminoMsg(object: _67.QueryGetProtoRevProfitsByDenomResponseAminoMsg): _67.QueryGetProtoRevProfitsByDenomResponse;
                toAminoMsg(message: _67.QueryGetProtoRevProfitsByDenomResponse): _67.QueryGetProtoRevProfitsByDenomResponseAminoMsg;
                fromProtoMsg(message: _67.QueryGetProtoRevProfitsByDenomResponseProtoMsg): _67.QueryGetProtoRevProfitsByDenomResponse;
                toProto(message: _67.QueryGetProtoRevProfitsByDenomResponse): Uint8Array;
                toProtoMsg(message: _67.QueryGetProtoRevProfitsByDenomResponse): _67.QueryGetProtoRevProfitsByDenomResponseProtoMsg;
            };
            QueryGetProtoRevAllProfitsRequest: {
                typeUrl: string;
                encode(_: _67.QueryGetProtoRevAllProfitsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _67.QueryGetProtoRevAllProfitsRequest;
                fromPartial(_: Partial<_67.QueryGetProtoRevAllProfitsRequest>): _67.QueryGetProtoRevAllProfitsRequest;
                fromAmino(_: _67.QueryGetProtoRevAllProfitsRequestAmino): _67.QueryGetProtoRevAllProfitsRequest;
                toAmino(_: _67.QueryGetProtoRevAllProfitsRequest): _67.QueryGetProtoRevAllProfitsRequestAmino;
                fromAminoMsg(object: _67.QueryGetProtoRevAllProfitsRequestAminoMsg): _67.QueryGetProtoRevAllProfitsRequest;
                toAminoMsg(message: _67.QueryGetProtoRevAllProfitsRequest): _67.QueryGetProtoRevAllProfitsRequestAminoMsg;
                fromProtoMsg(message: _67.QueryGetProtoRevAllProfitsRequestProtoMsg): _67.QueryGetProtoRevAllProfitsRequest;
                toProto(message: _67.QueryGetProtoRevAllProfitsRequest): Uint8Array;
                toProtoMsg(message: _67.QueryGetProtoRevAllProfitsRequest): _67.QueryGetProtoRevAllProfitsRequestProtoMsg;
            };
            QueryGetProtoRevAllProfitsResponse: {
                typeUrl: string;
                encode(message: _67.QueryGetProtoRevAllProfitsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _67.QueryGetProtoRevAllProfitsResponse;
                fromPartial(object: Partial<_67.QueryGetProtoRevAllProfitsResponse>): _67.QueryGetProtoRevAllProfitsResponse;
                fromAmino(object: _67.QueryGetProtoRevAllProfitsResponseAmino): _67.QueryGetProtoRevAllProfitsResponse;
                toAmino(message: _67.QueryGetProtoRevAllProfitsResponse): _67.QueryGetProtoRevAllProfitsResponseAmino;
                fromAminoMsg(object: _67.QueryGetProtoRevAllProfitsResponseAminoMsg): _67.QueryGetProtoRevAllProfitsResponse;
                toAminoMsg(message: _67.QueryGetProtoRevAllProfitsResponse): _67.QueryGetProtoRevAllProfitsResponseAminoMsg;
                fromProtoMsg(message: _67.QueryGetProtoRevAllProfitsResponseProtoMsg): _67.QueryGetProtoRevAllProfitsResponse;
                toProto(message: _67.QueryGetProtoRevAllProfitsResponse): Uint8Array;
                toProtoMsg(message: _67.QueryGetProtoRevAllProfitsResponse): _67.QueryGetProtoRevAllProfitsResponseProtoMsg;
            };
            QueryGetProtoRevStatisticsByRouteRequest: {
                typeUrl: string;
                encode(message: _67.QueryGetProtoRevStatisticsByRouteRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _67.QueryGetProtoRevStatisticsByRouteRequest;
                fromPartial(object: Partial<_67.QueryGetProtoRevStatisticsByRouteRequest>): _67.QueryGetProtoRevStatisticsByRouteRequest;
                fromAmino(object: _67.QueryGetProtoRevStatisticsByRouteRequestAmino): _67.QueryGetProtoRevStatisticsByRouteRequest;
                toAmino(message: _67.QueryGetProtoRevStatisticsByRouteRequest): _67.QueryGetProtoRevStatisticsByRouteRequestAmino;
                fromAminoMsg(object: _67.QueryGetProtoRevStatisticsByRouteRequestAminoMsg): _67.QueryGetProtoRevStatisticsByRouteRequest;
                toAminoMsg(message: _67.QueryGetProtoRevStatisticsByRouteRequest): _67.QueryGetProtoRevStatisticsByRouteRequestAminoMsg;
                fromProtoMsg(message: _67.QueryGetProtoRevStatisticsByRouteRequestProtoMsg): _67.QueryGetProtoRevStatisticsByRouteRequest;
                toProto(message: _67.QueryGetProtoRevStatisticsByRouteRequest): Uint8Array;
                toProtoMsg(message: _67.QueryGetProtoRevStatisticsByRouteRequest): _67.QueryGetProtoRevStatisticsByRouteRequestProtoMsg;
            };
            QueryGetProtoRevStatisticsByRouteResponse: {
                typeUrl: string;
                encode(message: _67.QueryGetProtoRevStatisticsByRouteResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _67.QueryGetProtoRevStatisticsByRouteResponse;
                fromPartial(object: Partial<_67.QueryGetProtoRevStatisticsByRouteResponse>): _67.QueryGetProtoRevStatisticsByRouteResponse;
                fromAmino(object: _67.QueryGetProtoRevStatisticsByRouteResponseAmino): _67.QueryGetProtoRevStatisticsByRouteResponse;
                toAmino(message: _67.QueryGetProtoRevStatisticsByRouteResponse): _67.QueryGetProtoRevStatisticsByRouteResponseAmino;
                fromAminoMsg(object: _67.QueryGetProtoRevStatisticsByRouteResponseAminoMsg): _67.QueryGetProtoRevStatisticsByRouteResponse;
                toAminoMsg(message: _67.QueryGetProtoRevStatisticsByRouteResponse): _67.QueryGetProtoRevStatisticsByRouteResponseAminoMsg;
                fromProtoMsg(message: _67.QueryGetProtoRevStatisticsByRouteResponseProtoMsg): _67.QueryGetProtoRevStatisticsByRouteResponse;
                toProto(message: _67.QueryGetProtoRevStatisticsByRouteResponse): Uint8Array;
                toProtoMsg(message: _67.QueryGetProtoRevStatisticsByRouteResponse): _67.QueryGetProtoRevStatisticsByRouteResponseProtoMsg;
            };
            QueryGetProtoRevAllRouteStatisticsRequest: {
                typeUrl: string;
                encode(_: _67.QueryGetProtoRevAllRouteStatisticsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _67.QueryGetProtoRevAllRouteStatisticsRequest;
                fromPartial(_: Partial<_67.QueryGetProtoRevAllRouteStatisticsRequest>): _67.QueryGetProtoRevAllRouteStatisticsRequest;
                fromAmino(_: _67.QueryGetProtoRevAllRouteStatisticsRequestAmino): _67.QueryGetProtoRevAllRouteStatisticsRequest;
                toAmino(_: _67.QueryGetProtoRevAllRouteStatisticsRequest): _67.QueryGetProtoRevAllRouteStatisticsRequestAmino;
                fromAminoMsg(object: _67.QueryGetProtoRevAllRouteStatisticsRequestAminoMsg): _67.QueryGetProtoRevAllRouteStatisticsRequest;
                toAminoMsg(message: _67.QueryGetProtoRevAllRouteStatisticsRequest): _67.QueryGetProtoRevAllRouteStatisticsRequestAminoMsg;
                fromProtoMsg(message: _67.QueryGetProtoRevAllRouteStatisticsRequestProtoMsg): _67.QueryGetProtoRevAllRouteStatisticsRequest;
                toProto(message: _67.QueryGetProtoRevAllRouteStatisticsRequest): Uint8Array;
                toProtoMsg(message: _67.QueryGetProtoRevAllRouteStatisticsRequest): _67.QueryGetProtoRevAllRouteStatisticsRequestProtoMsg;
            };
            QueryGetProtoRevAllRouteStatisticsResponse: {
                typeUrl: string;
                encode(message: _67.QueryGetProtoRevAllRouteStatisticsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _67.QueryGetProtoRevAllRouteStatisticsResponse;
                fromPartial(object: Partial<_67.QueryGetProtoRevAllRouteStatisticsResponse>): _67.QueryGetProtoRevAllRouteStatisticsResponse;
                fromAmino(object: _67.QueryGetProtoRevAllRouteStatisticsResponseAmino): _67.QueryGetProtoRevAllRouteStatisticsResponse;
                toAmino(message: _67.QueryGetProtoRevAllRouteStatisticsResponse): _67.QueryGetProtoRevAllRouteStatisticsResponseAmino;
                fromAminoMsg(object: _67.QueryGetProtoRevAllRouteStatisticsResponseAminoMsg): _67.QueryGetProtoRevAllRouteStatisticsResponse;
                toAminoMsg(message: _67.QueryGetProtoRevAllRouteStatisticsResponse): _67.QueryGetProtoRevAllRouteStatisticsResponseAminoMsg;
                fromProtoMsg(message: _67.QueryGetProtoRevAllRouteStatisticsResponseProtoMsg): _67.QueryGetProtoRevAllRouteStatisticsResponse;
                toProto(message: _67.QueryGetProtoRevAllRouteStatisticsResponse): Uint8Array;
                toProtoMsg(message: _67.QueryGetProtoRevAllRouteStatisticsResponse): _67.QueryGetProtoRevAllRouteStatisticsResponseProtoMsg;
            };
            QueryGetProtoRevTokenPairArbRoutesRequest: {
                typeUrl: string;
                encode(_: _67.QueryGetProtoRevTokenPairArbRoutesRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _67.QueryGetProtoRevTokenPairArbRoutesRequest;
                fromPartial(_: Partial<_67.QueryGetProtoRevTokenPairArbRoutesRequest>): _67.QueryGetProtoRevTokenPairArbRoutesRequest;
                fromAmino(_: _67.QueryGetProtoRevTokenPairArbRoutesRequestAmino): _67.QueryGetProtoRevTokenPairArbRoutesRequest;
                toAmino(_: _67.QueryGetProtoRevTokenPairArbRoutesRequest): _67.QueryGetProtoRevTokenPairArbRoutesRequestAmino;
                fromAminoMsg(object: _67.QueryGetProtoRevTokenPairArbRoutesRequestAminoMsg): _67.QueryGetProtoRevTokenPairArbRoutesRequest;
                toAminoMsg(message: _67.QueryGetProtoRevTokenPairArbRoutesRequest): _67.QueryGetProtoRevTokenPairArbRoutesRequestAminoMsg;
                fromProtoMsg(message: _67.QueryGetProtoRevTokenPairArbRoutesRequestProtoMsg): _67.QueryGetProtoRevTokenPairArbRoutesRequest;
                toProto(message: _67.QueryGetProtoRevTokenPairArbRoutesRequest): Uint8Array;
                toProtoMsg(message: _67.QueryGetProtoRevTokenPairArbRoutesRequest): _67.QueryGetProtoRevTokenPairArbRoutesRequestProtoMsg;
            };
            QueryGetProtoRevTokenPairArbRoutesResponse: {
                typeUrl: string;
                encode(message: _67.QueryGetProtoRevTokenPairArbRoutesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _67.QueryGetProtoRevTokenPairArbRoutesResponse;
                fromPartial(object: Partial<_67.QueryGetProtoRevTokenPairArbRoutesResponse>): _67.QueryGetProtoRevTokenPairArbRoutesResponse;
                fromAmino(object: _67.QueryGetProtoRevTokenPairArbRoutesResponseAmino): _67.QueryGetProtoRevTokenPairArbRoutesResponse;
                toAmino(message: _67.QueryGetProtoRevTokenPairArbRoutesResponse): _67.QueryGetProtoRevTokenPairArbRoutesResponseAmino;
                fromAminoMsg(object: _67.QueryGetProtoRevTokenPairArbRoutesResponseAminoMsg): _67.QueryGetProtoRevTokenPairArbRoutesResponse;
                toAminoMsg(message: _67.QueryGetProtoRevTokenPairArbRoutesResponse): _67.QueryGetProtoRevTokenPairArbRoutesResponseAminoMsg;
                fromProtoMsg(message: _67.QueryGetProtoRevTokenPairArbRoutesResponseProtoMsg): _67.QueryGetProtoRevTokenPairArbRoutesResponse;
                toProto(message: _67.QueryGetProtoRevTokenPairArbRoutesResponse): Uint8Array;
                toProtoMsg(message: _67.QueryGetProtoRevTokenPairArbRoutesResponse): _67.QueryGetProtoRevTokenPairArbRoutesResponseProtoMsg;
            };
            QueryGetProtoRevAdminAccountRequest: {
                typeUrl: string;
                encode(_: _67.QueryGetProtoRevAdminAccountRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _67.QueryGetProtoRevAdminAccountRequest;
                fromPartial(_: Partial<_67.QueryGetProtoRevAdminAccountRequest>): _67.QueryGetProtoRevAdminAccountRequest;
                fromAmino(_: _67.QueryGetProtoRevAdminAccountRequestAmino): _67.QueryGetProtoRevAdminAccountRequest;
                toAmino(_: _67.QueryGetProtoRevAdminAccountRequest): _67.QueryGetProtoRevAdminAccountRequestAmino;
                fromAminoMsg(object: _67.QueryGetProtoRevAdminAccountRequestAminoMsg): _67.QueryGetProtoRevAdminAccountRequest;
                toAminoMsg(message: _67.QueryGetProtoRevAdminAccountRequest): _67.QueryGetProtoRevAdminAccountRequestAminoMsg;
                fromProtoMsg(message: _67.QueryGetProtoRevAdminAccountRequestProtoMsg): _67.QueryGetProtoRevAdminAccountRequest;
                toProto(message: _67.QueryGetProtoRevAdminAccountRequest): Uint8Array;
                toProtoMsg(message: _67.QueryGetProtoRevAdminAccountRequest): _67.QueryGetProtoRevAdminAccountRequestProtoMsg;
            };
            QueryGetProtoRevAdminAccountResponse: {
                typeUrl: string;
                encode(message: _67.QueryGetProtoRevAdminAccountResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _67.QueryGetProtoRevAdminAccountResponse;
                fromPartial(object: Partial<_67.QueryGetProtoRevAdminAccountResponse>): _67.QueryGetProtoRevAdminAccountResponse;
                fromAmino(object: _67.QueryGetProtoRevAdminAccountResponseAmino): _67.QueryGetProtoRevAdminAccountResponse;
                toAmino(message: _67.QueryGetProtoRevAdminAccountResponse): _67.QueryGetProtoRevAdminAccountResponseAmino;
                fromAminoMsg(object: _67.QueryGetProtoRevAdminAccountResponseAminoMsg): _67.QueryGetProtoRevAdminAccountResponse;
                toAminoMsg(message: _67.QueryGetProtoRevAdminAccountResponse): _67.QueryGetProtoRevAdminAccountResponseAminoMsg;
                fromProtoMsg(message: _67.QueryGetProtoRevAdminAccountResponseProtoMsg): _67.QueryGetProtoRevAdminAccountResponse;
                toProto(message: _67.QueryGetProtoRevAdminAccountResponse): Uint8Array;
                toProtoMsg(message: _67.QueryGetProtoRevAdminAccountResponse): _67.QueryGetProtoRevAdminAccountResponseProtoMsg;
            };
            QueryGetProtoRevDeveloperAccountRequest: {
                typeUrl: string;
                encode(_: _67.QueryGetProtoRevDeveloperAccountRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _67.QueryGetProtoRevDeveloperAccountRequest;
                fromPartial(_: Partial<_67.QueryGetProtoRevDeveloperAccountRequest>): _67.QueryGetProtoRevDeveloperAccountRequest;
                fromAmino(_: _67.QueryGetProtoRevDeveloperAccountRequestAmino): _67.QueryGetProtoRevDeveloperAccountRequest;
                toAmino(_: _67.QueryGetProtoRevDeveloperAccountRequest): _67.QueryGetProtoRevDeveloperAccountRequestAmino;
                fromAminoMsg(object: _67.QueryGetProtoRevDeveloperAccountRequestAminoMsg): _67.QueryGetProtoRevDeveloperAccountRequest;
                toAminoMsg(message: _67.QueryGetProtoRevDeveloperAccountRequest): _67.QueryGetProtoRevDeveloperAccountRequestAminoMsg;
                fromProtoMsg(message: _67.QueryGetProtoRevDeveloperAccountRequestProtoMsg): _67.QueryGetProtoRevDeveloperAccountRequest;
                toProto(message: _67.QueryGetProtoRevDeveloperAccountRequest): Uint8Array;
                toProtoMsg(message: _67.QueryGetProtoRevDeveloperAccountRequest): _67.QueryGetProtoRevDeveloperAccountRequestProtoMsg;
            };
            QueryGetProtoRevDeveloperAccountResponse: {
                typeUrl: string;
                encode(message: _67.QueryGetProtoRevDeveloperAccountResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _67.QueryGetProtoRevDeveloperAccountResponse;
                fromPartial(object: Partial<_67.QueryGetProtoRevDeveloperAccountResponse>): _67.QueryGetProtoRevDeveloperAccountResponse;
                fromAmino(object: _67.QueryGetProtoRevDeveloperAccountResponseAmino): _67.QueryGetProtoRevDeveloperAccountResponse;
                toAmino(message: _67.QueryGetProtoRevDeveloperAccountResponse): _67.QueryGetProtoRevDeveloperAccountResponseAmino;
                fromAminoMsg(object: _67.QueryGetProtoRevDeveloperAccountResponseAminoMsg): _67.QueryGetProtoRevDeveloperAccountResponse;
                toAminoMsg(message: _67.QueryGetProtoRevDeveloperAccountResponse): _67.QueryGetProtoRevDeveloperAccountResponseAminoMsg;
                fromProtoMsg(message: _67.QueryGetProtoRevDeveloperAccountResponseProtoMsg): _67.QueryGetProtoRevDeveloperAccountResponse;
                toProto(message: _67.QueryGetProtoRevDeveloperAccountResponse): Uint8Array;
                toProtoMsg(message: _67.QueryGetProtoRevDeveloperAccountResponse): _67.QueryGetProtoRevDeveloperAccountResponseProtoMsg;
            };
            QueryGetProtoRevInfoByPoolTypeRequest: {
                typeUrl: string;
                encode(_: _67.QueryGetProtoRevInfoByPoolTypeRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _67.QueryGetProtoRevInfoByPoolTypeRequest;
                fromPartial(_: Partial<_67.QueryGetProtoRevInfoByPoolTypeRequest>): _67.QueryGetProtoRevInfoByPoolTypeRequest;
                fromAmino(_: _67.QueryGetProtoRevInfoByPoolTypeRequestAmino): _67.QueryGetProtoRevInfoByPoolTypeRequest;
                toAmino(_: _67.QueryGetProtoRevInfoByPoolTypeRequest): _67.QueryGetProtoRevInfoByPoolTypeRequestAmino;
                fromAminoMsg(object: _67.QueryGetProtoRevInfoByPoolTypeRequestAminoMsg): _67.QueryGetProtoRevInfoByPoolTypeRequest;
                toAminoMsg(message: _67.QueryGetProtoRevInfoByPoolTypeRequest): _67.QueryGetProtoRevInfoByPoolTypeRequestAminoMsg;
                fromProtoMsg(message: _67.QueryGetProtoRevInfoByPoolTypeRequestProtoMsg): _67.QueryGetProtoRevInfoByPoolTypeRequest;
                toProto(message: _67.QueryGetProtoRevInfoByPoolTypeRequest): Uint8Array;
                toProtoMsg(message: _67.QueryGetProtoRevInfoByPoolTypeRequest): _67.QueryGetProtoRevInfoByPoolTypeRequestProtoMsg;
            };
            QueryGetProtoRevInfoByPoolTypeResponse: {
                typeUrl: string;
                encode(message: _67.QueryGetProtoRevInfoByPoolTypeResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _67.QueryGetProtoRevInfoByPoolTypeResponse;
                fromPartial(object: Partial<_67.QueryGetProtoRevInfoByPoolTypeResponse>): _67.QueryGetProtoRevInfoByPoolTypeResponse;
                fromAmino(object: _67.QueryGetProtoRevInfoByPoolTypeResponseAmino): _67.QueryGetProtoRevInfoByPoolTypeResponse;
                toAmino(message: _67.QueryGetProtoRevInfoByPoolTypeResponse): _67.QueryGetProtoRevInfoByPoolTypeResponseAmino;
                fromAminoMsg(object: _67.QueryGetProtoRevInfoByPoolTypeResponseAminoMsg): _67.QueryGetProtoRevInfoByPoolTypeResponse;
                toAminoMsg(message: _67.QueryGetProtoRevInfoByPoolTypeResponse): _67.QueryGetProtoRevInfoByPoolTypeResponseAminoMsg;
                fromProtoMsg(message: _67.QueryGetProtoRevInfoByPoolTypeResponseProtoMsg): _67.QueryGetProtoRevInfoByPoolTypeResponse;
                toProto(message: _67.QueryGetProtoRevInfoByPoolTypeResponse): Uint8Array;
                toProtoMsg(message: _67.QueryGetProtoRevInfoByPoolTypeResponse): _67.QueryGetProtoRevInfoByPoolTypeResponseProtoMsg;
            };
            QueryGetProtoRevMaxPoolPointsPerBlockRequest: {
                typeUrl: string;
                encode(_: _67.QueryGetProtoRevMaxPoolPointsPerBlockRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _67.QueryGetProtoRevMaxPoolPointsPerBlockRequest;
                fromPartial(_: Partial<_67.QueryGetProtoRevMaxPoolPointsPerBlockRequest>): _67.QueryGetProtoRevMaxPoolPointsPerBlockRequest;
                fromAmino(_: _67.QueryGetProtoRevMaxPoolPointsPerBlockRequestAmino): _67.QueryGetProtoRevMaxPoolPointsPerBlockRequest;
                toAmino(_: _67.QueryGetProtoRevMaxPoolPointsPerBlockRequest): _67.QueryGetProtoRevMaxPoolPointsPerBlockRequestAmino;
                fromAminoMsg(object: _67.QueryGetProtoRevMaxPoolPointsPerBlockRequestAminoMsg): _67.QueryGetProtoRevMaxPoolPointsPerBlockRequest;
                toAminoMsg(message: _67.QueryGetProtoRevMaxPoolPointsPerBlockRequest): _67.QueryGetProtoRevMaxPoolPointsPerBlockRequestAminoMsg;
                fromProtoMsg(message: _67.QueryGetProtoRevMaxPoolPointsPerBlockRequestProtoMsg): _67.QueryGetProtoRevMaxPoolPointsPerBlockRequest;
                toProto(message: _67.QueryGetProtoRevMaxPoolPointsPerBlockRequest): Uint8Array;
                toProtoMsg(message: _67.QueryGetProtoRevMaxPoolPointsPerBlockRequest): _67.QueryGetProtoRevMaxPoolPointsPerBlockRequestProtoMsg;
            };
            QueryGetProtoRevMaxPoolPointsPerBlockResponse: {
                typeUrl: string;
                encode(message: _67.QueryGetProtoRevMaxPoolPointsPerBlockResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _67.QueryGetProtoRevMaxPoolPointsPerBlockResponse;
                fromPartial(object: Partial<_67.QueryGetProtoRevMaxPoolPointsPerBlockResponse>): _67.QueryGetProtoRevMaxPoolPointsPerBlockResponse;
                fromAmino(object: _67.QueryGetProtoRevMaxPoolPointsPerBlockResponseAmino): _67.QueryGetProtoRevMaxPoolPointsPerBlockResponse;
                toAmino(message: _67.QueryGetProtoRevMaxPoolPointsPerBlockResponse): _67.QueryGetProtoRevMaxPoolPointsPerBlockResponseAmino;
                fromAminoMsg(object: _67.QueryGetProtoRevMaxPoolPointsPerBlockResponseAminoMsg): _67.QueryGetProtoRevMaxPoolPointsPerBlockResponse;
                toAminoMsg(message: _67.QueryGetProtoRevMaxPoolPointsPerBlockResponse): _67.QueryGetProtoRevMaxPoolPointsPerBlockResponseAminoMsg;
                fromProtoMsg(message: _67.QueryGetProtoRevMaxPoolPointsPerBlockResponseProtoMsg): _67.QueryGetProtoRevMaxPoolPointsPerBlockResponse;
                toProto(message: _67.QueryGetProtoRevMaxPoolPointsPerBlockResponse): Uint8Array;
                toProtoMsg(message: _67.QueryGetProtoRevMaxPoolPointsPerBlockResponse): _67.QueryGetProtoRevMaxPoolPointsPerBlockResponseProtoMsg;
            };
            QueryGetProtoRevMaxPoolPointsPerTxRequest: {
                typeUrl: string;
                encode(_: _67.QueryGetProtoRevMaxPoolPointsPerTxRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _67.QueryGetProtoRevMaxPoolPointsPerTxRequest;
                fromPartial(_: Partial<_67.QueryGetProtoRevMaxPoolPointsPerTxRequest>): _67.QueryGetProtoRevMaxPoolPointsPerTxRequest;
                fromAmino(_: _67.QueryGetProtoRevMaxPoolPointsPerTxRequestAmino): _67.QueryGetProtoRevMaxPoolPointsPerTxRequest;
                toAmino(_: _67.QueryGetProtoRevMaxPoolPointsPerTxRequest): _67.QueryGetProtoRevMaxPoolPointsPerTxRequestAmino;
                fromAminoMsg(object: _67.QueryGetProtoRevMaxPoolPointsPerTxRequestAminoMsg): _67.QueryGetProtoRevMaxPoolPointsPerTxRequest;
                toAminoMsg(message: _67.QueryGetProtoRevMaxPoolPointsPerTxRequest): _67.QueryGetProtoRevMaxPoolPointsPerTxRequestAminoMsg;
                fromProtoMsg(message: _67.QueryGetProtoRevMaxPoolPointsPerTxRequestProtoMsg): _67.QueryGetProtoRevMaxPoolPointsPerTxRequest;
                toProto(message: _67.QueryGetProtoRevMaxPoolPointsPerTxRequest): Uint8Array;
                toProtoMsg(message: _67.QueryGetProtoRevMaxPoolPointsPerTxRequest): _67.QueryGetProtoRevMaxPoolPointsPerTxRequestProtoMsg;
            };
            QueryGetProtoRevMaxPoolPointsPerTxResponse: {
                typeUrl: string;
                encode(message: _67.QueryGetProtoRevMaxPoolPointsPerTxResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _67.QueryGetProtoRevMaxPoolPointsPerTxResponse;
                fromPartial(object: Partial<_67.QueryGetProtoRevMaxPoolPointsPerTxResponse>): _67.QueryGetProtoRevMaxPoolPointsPerTxResponse;
                fromAmino(object: _67.QueryGetProtoRevMaxPoolPointsPerTxResponseAmino): _67.QueryGetProtoRevMaxPoolPointsPerTxResponse;
                toAmino(message: _67.QueryGetProtoRevMaxPoolPointsPerTxResponse): _67.QueryGetProtoRevMaxPoolPointsPerTxResponseAmino;
                fromAminoMsg(object: _67.QueryGetProtoRevMaxPoolPointsPerTxResponseAminoMsg): _67.QueryGetProtoRevMaxPoolPointsPerTxResponse;
                toAminoMsg(message: _67.QueryGetProtoRevMaxPoolPointsPerTxResponse): _67.QueryGetProtoRevMaxPoolPointsPerTxResponseAminoMsg;
                fromProtoMsg(message: _67.QueryGetProtoRevMaxPoolPointsPerTxResponseProtoMsg): _67.QueryGetProtoRevMaxPoolPointsPerTxResponse;
                toProto(message: _67.QueryGetProtoRevMaxPoolPointsPerTxResponse): Uint8Array;
                toProtoMsg(message: _67.QueryGetProtoRevMaxPoolPointsPerTxResponse): _67.QueryGetProtoRevMaxPoolPointsPerTxResponseProtoMsg;
            };
            QueryGetProtoRevBaseDenomsRequest: {
                typeUrl: string;
                encode(_: _67.QueryGetProtoRevBaseDenomsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _67.QueryGetProtoRevBaseDenomsRequest;
                fromPartial(_: Partial<_67.QueryGetProtoRevBaseDenomsRequest>): _67.QueryGetProtoRevBaseDenomsRequest;
                fromAmino(_: _67.QueryGetProtoRevBaseDenomsRequestAmino): _67.QueryGetProtoRevBaseDenomsRequest;
                toAmino(_: _67.QueryGetProtoRevBaseDenomsRequest): _67.QueryGetProtoRevBaseDenomsRequestAmino;
                fromAminoMsg(object: _67.QueryGetProtoRevBaseDenomsRequestAminoMsg): _67.QueryGetProtoRevBaseDenomsRequest;
                toAminoMsg(message: _67.QueryGetProtoRevBaseDenomsRequest): _67.QueryGetProtoRevBaseDenomsRequestAminoMsg;
                fromProtoMsg(message: _67.QueryGetProtoRevBaseDenomsRequestProtoMsg): _67.QueryGetProtoRevBaseDenomsRequest;
                toProto(message: _67.QueryGetProtoRevBaseDenomsRequest): Uint8Array;
                toProtoMsg(message: _67.QueryGetProtoRevBaseDenomsRequest): _67.QueryGetProtoRevBaseDenomsRequestProtoMsg;
            };
            QueryGetProtoRevBaseDenomsResponse: {
                typeUrl: string;
                encode(message: _67.QueryGetProtoRevBaseDenomsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _67.QueryGetProtoRevBaseDenomsResponse;
                fromPartial(object: Partial<_67.QueryGetProtoRevBaseDenomsResponse>): _67.QueryGetProtoRevBaseDenomsResponse;
                fromAmino(object: _67.QueryGetProtoRevBaseDenomsResponseAmino): _67.QueryGetProtoRevBaseDenomsResponse;
                toAmino(message: _67.QueryGetProtoRevBaseDenomsResponse): _67.QueryGetProtoRevBaseDenomsResponseAmino;
                fromAminoMsg(object: _67.QueryGetProtoRevBaseDenomsResponseAminoMsg): _67.QueryGetProtoRevBaseDenomsResponse;
                toAminoMsg(message: _67.QueryGetProtoRevBaseDenomsResponse): _67.QueryGetProtoRevBaseDenomsResponseAminoMsg;
                fromProtoMsg(message: _67.QueryGetProtoRevBaseDenomsResponseProtoMsg): _67.QueryGetProtoRevBaseDenomsResponse;
                toProto(message: _67.QueryGetProtoRevBaseDenomsResponse): Uint8Array;
                toProtoMsg(message: _67.QueryGetProtoRevBaseDenomsResponse): _67.QueryGetProtoRevBaseDenomsResponseProtoMsg;
            };
            QueryGetProtoRevEnabledRequest: {
                typeUrl: string;
                encode(_: _67.QueryGetProtoRevEnabledRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _67.QueryGetProtoRevEnabledRequest;
                fromPartial(_: Partial<_67.QueryGetProtoRevEnabledRequest>): _67.QueryGetProtoRevEnabledRequest;
                fromAmino(_: _67.QueryGetProtoRevEnabledRequestAmino): _67.QueryGetProtoRevEnabledRequest;
                toAmino(_: _67.QueryGetProtoRevEnabledRequest): _67.QueryGetProtoRevEnabledRequestAmino;
                fromAminoMsg(object: _67.QueryGetProtoRevEnabledRequestAminoMsg): _67.QueryGetProtoRevEnabledRequest;
                toAminoMsg(message: _67.QueryGetProtoRevEnabledRequest): _67.QueryGetProtoRevEnabledRequestAminoMsg;
                fromProtoMsg(message: _67.QueryGetProtoRevEnabledRequestProtoMsg): _67.QueryGetProtoRevEnabledRequest;
                toProto(message: _67.QueryGetProtoRevEnabledRequest): Uint8Array;
                toProtoMsg(message: _67.QueryGetProtoRevEnabledRequest): _67.QueryGetProtoRevEnabledRequestProtoMsg;
            };
            QueryGetProtoRevEnabledResponse: {
                typeUrl: string;
                encode(message: _67.QueryGetProtoRevEnabledResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _67.QueryGetProtoRevEnabledResponse;
                fromPartial(object: Partial<_67.QueryGetProtoRevEnabledResponse>): _67.QueryGetProtoRevEnabledResponse;
                fromAmino(object: _67.QueryGetProtoRevEnabledResponseAmino): _67.QueryGetProtoRevEnabledResponse;
                toAmino(message: _67.QueryGetProtoRevEnabledResponse): _67.QueryGetProtoRevEnabledResponseAmino;
                fromAminoMsg(object: _67.QueryGetProtoRevEnabledResponseAminoMsg): _67.QueryGetProtoRevEnabledResponse;
                toAminoMsg(message: _67.QueryGetProtoRevEnabledResponse): _67.QueryGetProtoRevEnabledResponseAminoMsg;
                fromProtoMsg(message: _67.QueryGetProtoRevEnabledResponseProtoMsg): _67.QueryGetProtoRevEnabledResponse;
                toProto(message: _67.QueryGetProtoRevEnabledResponse): Uint8Array;
                toProtoMsg(message: _67.QueryGetProtoRevEnabledResponse): _67.QueryGetProtoRevEnabledResponseProtoMsg;
            };
            QueryGetProtoRevPoolRequest: {
                typeUrl: string;
                encode(message: _67.QueryGetProtoRevPoolRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _67.QueryGetProtoRevPoolRequest;
                fromPartial(object: Partial<_67.QueryGetProtoRevPoolRequest>): _67.QueryGetProtoRevPoolRequest;
                fromAmino(object: _67.QueryGetProtoRevPoolRequestAmino): _67.QueryGetProtoRevPoolRequest;
                toAmino(message: _67.QueryGetProtoRevPoolRequest): _67.QueryGetProtoRevPoolRequestAmino;
                fromAminoMsg(object: _67.QueryGetProtoRevPoolRequestAminoMsg): _67.QueryGetProtoRevPoolRequest;
                toAminoMsg(message: _67.QueryGetProtoRevPoolRequest): _67.QueryGetProtoRevPoolRequestAminoMsg;
                fromProtoMsg(message: _67.QueryGetProtoRevPoolRequestProtoMsg): _67.QueryGetProtoRevPoolRequest;
                toProto(message: _67.QueryGetProtoRevPoolRequest): Uint8Array;
                toProtoMsg(message: _67.QueryGetProtoRevPoolRequest): _67.QueryGetProtoRevPoolRequestProtoMsg;
            };
            QueryGetProtoRevPoolResponse: {
                typeUrl: string;
                encode(message: _67.QueryGetProtoRevPoolResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _67.QueryGetProtoRevPoolResponse;
                fromPartial(object: Partial<_67.QueryGetProtoRevPoolResponse>): _67.QueryGetProtoRevPoolResponse;
                fromAmino(object: _67.QueryGetProtoRevPoolResponseAmino): _67.QueryGetProtoRevPoolResponse;
                toAmino(message: _67.QueryGetProtoRevPoolResponse): _67.QueryGetProtoRevPoolResponseAmino;
                fromAminoMsg(object: _67.QueryGetProtoRevPoolResponseAminoMsg): _67.QueryGetProtoRevPoolResponse;
                toAminoMsg(message: _67.QueryGetProtoRevPoolResponse): _67.QueryGetProtoRevPoolResponseAminoMsg;
                fromProtoMsg(message: _67.QueryGetProtoRevPoolResponseProtoMsg): _67.QueryGetProtoRevPoolResponse;
                toProto(message: _67.QueryGetProtoRevPoolResponse): Uint8Array;
                toProtoMsg(message: _67.QueryGetProtoRevPoolResponse): _67.QueryGetProtoRevPoolResponseProtoMsg;
            };
            QueryGetAllProtocolRevenueRequest: {
                typeUrl: string;
                encode(_: _67.QueryGetAllProtocolRevenueRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _67.QueryGetAllProtocolRevenueRequest;
                fromPartial(_: Partial<_67.QueryGetAllProtocolRevenueRequest>): _67.QueryGetAllProtocolRevenueRequest;
                fromAmino(_: _67.QueryGetAllProtocolRevenueRequestAmino): _67.QueryGetAllProtocolRevenueRequest;
                toAmino(_: _67.QueryGetAllProtocolRevenueRequest): _67.QueryGetAllProtocolRevenueRequestAmino;
                fromAminoMsg(object: _67.QueryGetAllProtocolRevenueRequestAminoMsg): _67.QueryGetAllProtocolRevenueRequest;
                toAminoMsg(message: _67.QueryGetAllProtocolRevenueRequest): _67.QueryGetAllProtocolRevenueRequestAminoMsg;
                fromProtoMsg(message: _67.QueryGetAllProtocolRevenueRequestProtoMsg): _67.QueryGetAllProtocolRevenueRequest;
                toProto(message: _67.QueryGetAllProtocolRevenueRequest): Uint8Array;
                toProtoMsg(message: _67.QueryGetAllProtocolRevenueRequest): _67.QueryGetAllProtocolRevenueRequestProtoMsg;
            };
            QueryGetAllProtocolRevenueResponse: {
                typeUrl: string;
                encode(message: _67.QueryGetAllProtocolRevenueResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _67.QueryGetAllProtocolRevenueResponse;
                fromPartial(object: Partial<_67.QueryGetAllProtocolRevenueResponse>): _67.QueryGetAllProtocolRevenueResponse;
                fromAmino(object: _67.QueryGetAllProtocolRevenueResponseAmino): _67.QueryGetAllProtocolRevenueResponse;
                toAmino(message: _67.QueryGetAllProtocolRevenueResponse): _67.QueryGetAllProtocolRevenueResponseAmino;
                fromAminoMsg(object: _67.QueryGetAllProtocolRevenueResponseAminoMsg): _67.QueryGetAllProtocolRevenueResponse;
                toAminoMsg(message: _67.QueryGetAllProtocolRevenueResponse): _67.QueryGetAllProtocolRevenueResponseAminoMsg;
                fromProtoMsg(message: _67.QueryGetAllProtocolRevenueResponseProtoMsg): _67.QueryGetAllProtocolRevenueResponse;
                toProto(message: _67.QueryGetAllProtocolRevenueResponse): Uint8Array;
                toProtoMsg(message: _67.QueryGetAllProtocolRevenueResponse): _67.QueryGetAllProtocolRevenueResponseProtoMsg;
            };
            TokenPairArbRoutes: {
                typeUrl: string;
                encode(message: _66.TokenPairArbRoutes, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _66.TokenPairArbRoutes;
                fromPartial(object: Partial<_66.TokenPairArbRoutes>): _66.TokenPairArbRoutes;
                fromAmino(object: _66.TokenPairArbRoutesAmino): _66.TokenPairArbRoutes;
                toAmino(message: _66.TokenPairArbRoutes): _66.TokenPairArbRoutesAmino;
                fromAminoMsg(object: _66.TokenPairArbRoutesAminoMsg): _66.TokenPairArbRoutes;
                toAminoMsg(message: _66.TokenPairArbRoutes): _66.TokenPairArbRoutesAminoMsg;
                fromProtoMsg(message: _66.TokenPairArbRoutesProtoMsg): _66.TokenPairArbRoutes;
                toProto(message: _66.TokenPairArbRoutes): Uint8Array;
                toProtoMsg(message: _66.TokenPairArbRoutes): _66.TokenPairArbRoutesProtoMsg;
            };
            Route: {
                typeUrl: string;
                encode(message: _66.Route, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _66.Route;
                fromPartial(object: Partial<_66.Route>): _66.Route;
                fromAmino(object: _66.RouteAmino): _66.Route;
                toAmino(message: _66.Route): _66.RouteAmino;
                fromAminoMsg(object: _66.RouteAminoMsg): _66.Route;
                toAminoMsg(message: _66.Route): _66.RouteAminoMsg;
                fromProtoMsg(message: _66.RouteProtoMsg): _66.Route;
                toProto(message: _66.Route): Uint8Array;
                toProtoMsg(message: _66.Route): _66.RouteProtoMsg;
            };
            Trade: {
                typeUrl: string;
                encode(message: _66.Trade, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _66.Trade;
                fromPartial(object: Partial<_66.Trade>): _66.Trade;
                fromAmino(object: _66.TradeAmino): _66.Trade;
                toAmino(message: _66.Trade): _66.TradeAmino;
                fromAminoMsg(object: _66.TradeAminoMsg): _66.Trade;
                toAminoMsg(message: _66.Trade): _66.TradeAminoMsg;
                fromProtoMsg(message: _66.TradeProtoMsg): _66.Trade;
                toProto(message: _66.Trade): Uint8Array;
                toProtoMsg(message: _66.Trade): _66.TradeProtoMsg;
            };
            RouteStatistics: {
                typeUrl: string;
                encode(message: _66.RouteStatistics, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _66.RouteStatistics;
                fromPartial(object: Partial<_66.RouteStatistics>): _66.RouteStatistics;
                fromAmino(object: _66.RouteStatisticsAmino): _66.RouteStatistics;
                toAmino(message: _66.RouteStatistics): _66.RouteStatisticsAmino;
                fromAminoMsg(object: _66.RouteStatisticsAminoMsg): _66.RouteStatistics;
                toAminoMsg(message: _66.RouteStatistics): _66.RouteStatisticsAminoMsg;
                fromProtoMsg(message: _66.RouteStatisticsProtoMsg): _66.RouteStatistics;
                toProto(message: _66.RouteStatistics): Uint8Array;
                toProtoMsg(message: _66.RouteStatistics): _66.RouteStatisticsProtoMsg;
            };
            PoolWeights: {
                typeUrl: string;
                encode(message: _66.PoolWeights, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _66.PoolWeights;
                fromPartial(object: Partial<_66.PoolWeights>): _66.PoolWeights;
                fromAmino(object: _66.PoolWeightsAmino): _66.PoolWeights;
                toAmino(message: _66.PoolWeights): _66.PoolWeightsAmino;
                fromAminoMsg(object: _66.PoolWeightsAminoMsg): _66.PoolWeights;
                toAminoMsg(message: _66.PoolWeights): _66.PoolWeightsAminoMsg;
                fromProtoMsg(message: _66.PoolWeightsProtoMsg): _66.PoolWeights;
                toProto(message: _66.PoolWeights): Uint8Array;
                toProtoMsg(message: _66.PoolWeights): _66.PoolWeightsProtoMsg;
            };
            InfoByPoolType: {
                typeUrl: string;
                encode(message: _66.InfoByPoolType, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _66.InfoByPoolType;
                fromPartial(object: Partial<_66.InfoByPoolType>): _66.InfoByPoolType;
                fromAmino(object: _66.InfoByPoolTypeAmino): _66.InfoByPoolType;
                toAmino(message: _66.InfoByPoolType): _66.InfoByPoolTypeAmino;
                fromAminoMsg(object: _66.InfoByPoolTypeAminoMsg): _66.InfoByPoolType;
                toAminoMsg(message: _66.InfoByPoolType): _66.InfoByPoolTypeAminoMsg;
                fromProtoMsg(message: _66.InfoByPoolTypeProtoMsg): _66.InfoByPoolType;
                toProto(message: _66.InfoByPoolType): Uint8Array;
                toProtoMsg(message: _66.InfoByPoolType): _66.InfoByPoolTypeProtoMsg;
            };
            StablePoolInfo: {
                typeUrl: string;
                encode(message: _66.StablePoolInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _66.StablePoolInfo;
                fromPartial(object: Partial<_66.StablePoolInfo>): _66.StablePoolInfo;
                fromAmino(object: _66.StablePoolInfoAmino): _66.StablePoolInfo;
                toAmino(message: _66.StablePoolInfo): _66.StablePoolInfoAmino;
                fromAminoMsg(object: _66.StablePoolInfoAminoMsg): _66.StablePoolInfo;
                toAminoMsg(message: _66.StablePoolInfo): _66.StablePoolInfoAminoMsg;
                fromProtoMsg(message: _66.StablePoolInfoProtoMsg): _66.StablePoolInfo;
                toProto(message: _66.StablePoolInfo): Uint8Array;
                toProtoMsg(message: _66.StablePoolInfo): _66.StablePoolInfoProtoMsg;
            };
            BalancerPoolInfo: {
                typeUrl: string;
                encode(message: _66.BalancerPoolInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _66.BalancerPoolInfo;
                fromPartial(object: Partial<_66.BalancerPoolInfo>): _66.BalancerPoolInfo;
                fromAmino(object: _66.BalancerPoolInfoAmino): _66.BalancerPoolInfo;
                toAmino(message: _66.BalancerPoolInfo): _66.BalancerPoolInfoAmino;
                fromAminoMsg(object: _66.BalancerPoolInfoAminoMsg): _66.BalancerPoolInfo;
                toAminoMsg(message: _66.BalancerPoolInfo): _66.BalancerPoolInfoAminoMsg;
                fromProtoMsg(message: _66.BalancerPoolInfoProtoMsg): _66.BalancerPoolInfo;
                toProto(message: _66.BalancerPoolInfo): Uint8Array;
                toProtoMsg(message: _66.BalancerPoolInfo): _66.BalancerPoolInfoProtoMsg;
            };
            ConcentratedPoolInfo: {
                typeUrl: string;
                encode(message: _66.ConcentratedPoolInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _66.ConcentratedPoolInfo;
                fromPartial(object: Partial<_66.ConcentratedPoolInfo>): _66.ConcentratedPoolInfo;
                fromAmino(object: _66.ConcentratedPoolInfoAmino): _66.ConcentratedPoolInfo;
                toAmino(message: _66.ConcentratedPoolInfo): _66.ConcentratedPoolInfoAmino;
                fromAminoMsg(object: _66.ConcentratedPoolInfoAminoMsg): _66.ConcentratedPoolInfo;
                toAminoMsg(message: _66.ConcentratedPoolInfo): _66.ConcentratedPoolInfoAminoMsg;
                fromProtoMsg(message: _66.ConcentratedPoolInfoProtoMsg): _66.ConcentratedPoolInfo;
                toProto(message: _66.ConcentratedPoolInfo): Uint8Array;
                toProtoMsg(message: _66.ConcentratedPoolInfo): _66.ConcentratedPoolInfoProtoMsg;
            };
            CosmwasmPoolInfo: {
                typeUrl: string;
                encode(message: _66.CosmwasmPoolInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _66.CosmwasmPoolInfo;
                fromPartial(object: Partial<_66.CosmwasmPoolInfo>): _66.CosmwasmPoolInfo;
                fromAmino(object: _66.CosmwasmPoolInfoAmino): _66.CosmwasmPoolInfo;
                toAmino(message: _66.CosmwasmPoolInfo): _66.CosmwasmPoolInfoAmino;
                fromAminoMsg(object: _66.CosmwasmPoolInfoAminoMsg): _66.CosmwasmPoolInfo;
                toAminoMsg(message: _66.CosmwasmPoolInfo): _66.CosmwasmPoolInfoAminoMsg;
                fromProtoMsg(message: _66.CosmwasmPoolInfoProtoMsg): _66.CosmwasmPoolInfo;
                toProto(message: _66.CosmwasmPoolInfo): Uint8Array;
                toProtoMsg(message: _66.CosmwasmPoolInfo): _66.CosmwasmPoolInfoProtoMsg;
            };
            WeightMap: {
                typeUrl: string;
                encode(message: _66.WeightMap, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _66.WeightMap;
                fromPartial(object: Partial<_66.WeightMap>): _66.WeightMap;
                fromAmino(object: _66.WeightMapAmino): _66.WeightMap;
                toAmino(message: _66.WeightMap): _66.WeightMapAmino;
                fromAminoMsg(object: _66.WeightMapAminoMsg): _66.WeightMap;
                toAminoMsg(message: _66.WeightMap): _66.WeightMapAminoMsg;
                fromProtoMsg(message: _66.WeightMapProtoMsg): _66.WeightMap;
                toProto(message: _66.WeightMap): Uint8Array;
                toProtoMsg(message: _66.WeightMap): _66.WeightMapProtoMsg;
            };
            BaseDenom: {
                typeUrl: string;
                encode(message: _66.BaseDenom, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _66.BaseDenom;
                fromPartial(object: Partial<_66.BaseDenom>): _66.BaseDenom;
                fromAmino(object: _66.BaseDenomAmino): _66.BaseDenom;
                toAmino(message: _66.BaseDenom): _66.BaseDenomAmino;
                fromAminoMsg(object: _66.BaseDenomAminoMsg): _66.BaseDenom;
                toAminoMsg(message: _66.BaseDenom): _66.BaseDenomAminoMsg;
                fromProtoMsg(message: _66.BaseDenomProtoMsg): _66.BaseDenom;
                toProto(message: _66.BaseDenom): Uint8Array;
                toProtoMsg(message: _66.BaseDenom): _66.BaseDenomProtoMsg;
            };
            AllProtocolRevenue: {
                typeUrl: string;
                encode(message: _66.AllProtocolRevenue, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _66.AllProtocolRevenue;
                fromPartial(object: Partial<_66.AllProtocolRevenue>): _66.AllProtocolRevenue;
                fromAmino(object: _66.AllProtocolRevenueAmino): _66.AllProtocolRevenue;
                toAmino(message: _66.AllProtocolRevenue): _66.AllProtocolRevenueAmino;
                fromAminoMsg(object: _66.AllProtocolRevenueAminoMsg): _66.AllProtocolRevenue;
                toAminoMsg(message: _66.AllProtocolRevenue): _66.AllProtocolRevenueAminoMsg;
                fromProtoMsg(message: _66.AllProtocolRevenueProtoMsg): _66.AllProtocolRevenue;
                toProto(message: _66.AllProtocolRevenue): Uint8Array;
                toProtoMsg(message: _66.AllProtocolRevenue): _66.AllProtocolRevenueProtoMsg;
            };
            CyclicArbTracker: {
                typeUrl: string;
                encode(message: _66.CyclicArbTracker, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _66.CyclicArbTracker;
                fromPartial(object: Partial<_66.CyclicArbTracker>): _66.CyclicArbTracker;
                fromAmino(object: _66.CyclicArbTrackerAmino): _66.CyclicArbTracker;
                toAmino(message: _66.CyclicArbTracker): _66.CyclicArbTrackerAmino;
                fromAminoMsg(object: _66.CyclicArbTrackerAminoMsg): _66.CyclicArbTracker;
                toAminoMsg(message: _66.CyclicArbTracker): _66.CyclicArbTrackerAminoMsg;
                fromProtoMsg(message: _66.CyclicArbTrackerProtoMsg): _66.CyclicArbTracker;
                toProto(message: _66.CyclicArbTracker): Uint8Array;
                toProtoMsg(message: _66.CyclicArbTracker): _66.CyclicArbTrackerProtoMsg;
            };
            Params: {
                typeUrl: string;
                encode(message: _65.Params, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _65.Params;
                fromPartial(object: Partial<_65.Params>): _65.Params;
                fromAmino(object: _65.ParamsAmino): _65.Params;
                toAmino(message: _65.Params): _65.ParamsAmino;
                fromAminoMsg(object: _65.ParamsAminoMsg): _65.Params;
                toAminoMsg(message: _65.Params): _65.ParamsAminoMsg;
                fromProtoMsg(message: _65.ParamsProtoMsg): _65.Params;
                toProto(message: _65.Params): Uint8Array;
                toProtoMsg(message: _65.Params): _65.ParamsProtoMsg;
            };
            SetProtoRevEnabledProposal: {
                typeUrl: string;
                encode(message: _64.SetProtoRevEnabledProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _64.SetProtoRevEnabledProposal;
                fromPartial(object: Partial<_64.SetProtoRevEnabledProposal>): _64.SetProtoRevEnabledProposal;
                fromAmino(object: _64.SetProtoRevEnabledProposalAmino): _64.SetProtoRevEnabledProposal;
                toAmino(message: _64.SetProtoRevEnabledProposal): _64.SetProtoRevEnabledProposalAmino;
                fromAminoMsg(object: _64.SetProtoRevEnabledProposalAminoMsg): _64.SetProtoRevEnabledProposal;
                toAminoMsg(message: _64.SetProtoRevEnabledProposal): _64.SetProtoRevEnabledProposalAminoMsg;
                fromProtoMsg(message: _64.SetProtoRevEnabledProposalProtoMsg): _64.SetProtoRevEnabledProposal;
                toProto(message: _64.SetProtoRevEnabledProposal): Uint8Array;
                toProtoMsg(message: _64.SetProtoRevEnabledProposal): _64.SetProtoRevEnabledProposalProtoMsg;
            };
            SetProtoRevAdminAccountProposal: {
                typeUrl: string;
                encode(message: _64.SetProtoRevAdminAccountProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _64.SetProtoRevAdminAccountProposal;
                fromPartial(object: Partial<_64.SetProtoRevAdminAccountProposal>): _64.SetProtoRevAdminAccountProposal;
                fromAmino(object: _64.SetProtoRevAdminAccountProposalAmino): _64.SetProtoRevAdminAccountProposal;
                toAmino(message: _64.SetProtoRevAdminAccountProposal): _64.SetProtoRevAdminAccountProposalAmino;
                fromAminoMsg(object: _64.SetProtoRevAdminAccountProposalAminoMsg): _64.SetProtoRevAdminAccountProposal;
                toAminoMsg(message: _64.SetProtoRevAdminAccountProposal): _64.SetProtoRevAdminAccountProposalAminoMsg;
                fromProtoMsg(message: _64.SetProtoRevAdminAccountProposalProtoMsg): _64.SetProtoRevAdminAccountProposal;
                toProto(message: _64.SetProtoRevAdminAccountProposal): Uint8Array;
                toProtoMsg(message: _64.SetProtoRevAdminAccountProposal): _64.SetProtoRevAdminAccountProposalProtoMsg;
            };
            GenesisState: {
                typeUrl: string;
                encode(message: _63.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _63.GenesisState;
                fromPartial(object: Partial<_63.GenesisState>): _63.GenesisState;
                fromAmino(object: _63.GenesisStateAmino): _63.GenesisState;
                toAmino(message: _63.GenesisState): _63.GenesisStateAmino;
                fromAminoMsg(object: _63.GenesisStateAminoMsg): _63.GenesisState;
                toAminoMsg(message: _63.GenesisState): _63.GenesisStateAminoMsg;
                fromProtoMsg(message: _63.GenesisStateProtoMsg): _63.GenesisState;
                toProto(message: _63.GenesisState): Uint8Array;
                toProtoMsg(message: _63.GenesisState): _63.GenesisStateProtoMsg;
            };
        };
    }
    namespace store {
        const v1beta1: {
            Node: {
                typeUrl: string;
                encode(message: _69.Node, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _69.Node;
                fromPartial(object: Partial<_69.Node>): _69.Node;
                fromAmino(object: _69.NodeAmino): _69.Node;
                toAmino(message: _69.Node): _69.NodeAmino;
                fromAminoMsg(object: _69.NodeAminoMsg): _69.Node;
                toAminoMsg(message: _69.Node): _69.NodeAminoMsg;
                fromProtoMsg(message: _69.NodeProtoMsg): _69.Node;
                toProto(message: _69.Node): Uint8Array;
                toProtoMsg(message: _69.Node): _69.NodeProtoMsg;
            };
            Child: {
                typeUrl: string;
                encode(message: _69.Child, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _69.Child;
                fromPartial(object: Partial<_69.Child>): _69.Child;
                fromAmino(object: _69.ChildAmino): _69.Child;
                toAmino(message: _69.Child): _69.ChildAmino;
                fromAminoMsg(object: _69.ChildAminoMsg): _69.Child;
                toAminoMsg(message: _69.Child): _69.ChildAminoMsg;
                fromProtoMsg(message: _69.ChildProtoMsg): _69.Child;
                toProto(message: _69.Child): Uint8Array;
                toProtoMsg(message: _69.Child): _69.ChildProtoMsg;
            };
            Leaf: {
                typeUrl: string;
                encode(message: _69.Leaf, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _69.Leaf;
                fromPartial(object: Partial<_69.Leaf>): _69.Leaf;
                fromAmino(object: _69.LeafAmino): _69.Leaf;
                toAmino(message: _69.Leaf): _69.LeafAmino;
                fromAminoMsg(object: _69.LeafAminoMsg): _69.Leaf;
                toAminoMsg(message: _69.Leaf): _69.LeafAminoMsg;
                fromProtoMsg(message: _69.LeafProtoMsg): _69.Leaf;
                toProto(message: _69.Leaf): Uint8Array;
                toProtoMsg(message: _69.Leaf): _69.LeafProtoMsg;
            };
        };
    }
    const superfluid: {
        MsgClientImpl: typeof _329.MsgClientImpl;
        QueryClientImpl: typeof _314.QueryClientImpl;
        createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
            params(request?: _72.QueryParamsRequest): Promise<_72.QueryParamsResponse>;
            assetType(request: _72.AssetTypeRequest): Promise<_72.AssetTypeResponse>;
            allAssets(request?: _72.AllAssetsRequest): Promise<_72.AllAssetsResponse>;
            assetMultiplier(request: _72.AssetMultiplierRequest): Promise<_72.AssetMultiplierResponse>;
            allIntermediaryAccounts(request?: _72.AllIntermediaryAccountsRequest): Promise<_72.AllIntermediaryAccountsResponse>;
            connectedIntermediaryAccount(request: _72.ConnectedIntermediaryAccountRequest): Promise<_72.ConnectedIntermediaryAccountResponse>;
            totalDelegationByValidatorForDenom(request: _72.QueryTotalDelegationByValidatorForDenomRequest): Promise<_72.QueryTotalDelegationByValidatorForDenomResponse>;
            totalSuperfluidDelegations(request?: _72.TotalSuperfluidDelegationsRequest): Promise<_72.TotalSuperfluidDelegationsResponse>;
            superfluidDelegationAmount(request: _72.SuperfluidDelegationAmountRequest): Promise<_72.SuperfluidDelegationAmountResponse>;
            superfluidDelegationsByDelegator(request: _72.SuperfluidDelegationsByDelegatorRequest): Promise<_72.SuperfluidDelegationsByDelegatorResponse>;
            superfluidUndelegationsByDelegator(request: _72.SuperfluidUndelegationsByDelegatorRequest): Promise<_72.SuperfluidUndelegationsByDelegatorResponse>;
            superfluidDelegationsByValidatorDenom(request: _72.SuperfluidDelegationsByValidatorDenomRequest): Promise<_72.SuperfluidDelegationsByValidatorDenomResponse>;
            estimateSuperfluidDelegatedAmountByValidatorDenom(request: _72.EstimateSuperfluidDelegatedAmountByValidatorDenomRequest): Promise<_72.EstimateSuperfluidDelegatedAmountByValidatorDenomResponse>;
            totalDelegationByDelegator(request: _72.QueryTotalDelegationByDelegatorRequest): Promise<_72.QueryTotalDelegationByDelegatorResponse>;
            unpoolWhitelist(request?: _72.QueryUnpoolWhitelistRequest): Promise<_72.QueryUnpoolWhitelistResponse>;
            userConcentratedSuperfluidPositionsDelegated(request: _72.UserConcentratedSuperfluidPositionsDelegatedRequest): Promise<_72.UserConcentratedSuperfluidPositionsDelegatedResponse>;
            userConcentratedSuperfluidPositionsUndelegating(request: _72.UserConcentratedSuperfluidPositionsUndelegatingRequest): Promise<_72.UserConcentratedSuperfluidPositionsUndelegatingResponse>;
            restSupply(request: _72.QueryRestSupplyRequest): Promise<_72.QueryRestSupplyResponse>;
        };
        LCDQueryClient: typeof _295.LCDQueryClient;
        registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
        load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
        MessageComposer: {
            encoded: {
                superfluidDelegate(value: _74.MsgSuperfluidDelegate): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                superfluidUndelegate(value: _74.MsgSuperfluidUndelegate): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                superfluidUnbondLock(value: _74.MsgSuperfluidUnbondLock): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                superfluidUndelegateAndUnbondLock(value: _74.MsgSuperfluidUndelegateAndUnbondLock): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                lockAndSuperfluidDelegate(value: _74.MsgLockAndSuperfluidDelegate): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                createFullRangePositionAndSuperfluidDelegate(value: _74.MsgCreateFullRangePositionAndSuperfluidDelegate): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                unPoolWhitelistedPool(value: _74.MsgUnPoolWhitelistedPool): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                unlockAndMigrateSharesToFullRangeConcentratedPosition(value: _74.MsgUnlockAndMigrateSharesToFullRangeConcentratedPosition): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                addToConcentratedLiquiditySuperfluidPosition(value: _74.MsgAddToConcentratedLiquiditySuperfluidPosition): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                unbondConvertAndStake(value: _74.MsgUnbondConvertAndStake): {
                    typeUrl: string;
                    value: Uint8Array;
                };
            };
            withTypeUrl: {
                superfluidDelegate(value: _74.MsgSuperfluidDelegate): {
                    typeUrl: string;
                    value: _74.MsgSuperfluidDelegate;
                };
                superfluidUndelegate(value: _74.MsgSuperfluidUndelegate): {
                    typeUrl: string;
                    value: _74.MsgSuperfluidUndelegate;
                };
                superfluidUnbondLock(value: _74.MsgSuperfluidUnbondLock): {
                    typeUrl: string;
                    value: _74.MsgSuperfluidUnbondLock;
                };
                superfluidUndelegateAndUnbondLock(value: _74.MsgSuperfluidUndelegateAndUnbondLock): {
                    typeUrl: string;
                    value: _74.MsgSuperfluidUndelegateAndUnbondLock;
                };
                lockAndSuperfluidDelegate(value: _74.MsgLockAndSuperfluidDelegate): {
                    typeUrl: string;
                    value: _74.MsgLockAndSuperfluidDelegate;
                };
                createFullRangePositionAndSuperfluidDelegate(value: _74.MsgCreateFullRangePositionAndSuperfluidDelegate): {
                    typeUrl: string;
                    value: _74.MsgCreateFullRangePositionAndSuperfluidDelegate;
                };
                unPoolWhitelistedPool(value: _74.MsgUnPoolWhitelistedPool): {
                    typeUrl: string;
                    value: _74.MsgUnPoolWhitelistedPool;
                };
                unlockAndMigrateSharesToFullRangeConcentratedPosition(value: _74.MsgUnlockAndMigrateSharesToFullRangeConcentratedPosition): {
                    typeUrl: string;
                    value: _74.MsgUnlockAndMigrateSharesToFullRangeConcentratedPosition;
                };
                addToConcentratedLiquiditySuperfluidPosition(value: _74.MsgAddToConcentratedLiquiditySuperfluidPosition): {
                    typeUrl: string;
                    value: _74.MsgAddToConcentratedLiquiditySuperfluidPosition;
                };
                unbondConvertAndStake(value: _74.MsgUnbondConvertAndStake): {
                    typeUrl: string;
                    value: _74.MsgUnbondConvertAndStake;
                };
            };
            fromJSON: {
                superfluidDelegate(value: any): {
                    typeUrl: string;
                    value: _74.MsgSuperfluidDelegate;
                };
                superfluidUndelegate(value: any): {
                    typeUrl: string;
                    value: _74.MsgSuperfluidUndelegate;
                };
                superfluidUnbondLock(value: any): {
                    typeUrl: string;
                    value: _74.MsgSuperfluidUnbondLock;
                };
                superfluidUndelegateAndUnbondLock(value: any): {
                    typeUrl: string;
                    value: _74.MsgSuperfluidUndelegateAndUnbondLock;
                };
                lockAndSuperfluidDelegate(value: any): {
                    typeUrl: string;
                    value: _74.MsgLockAndSuperfluidDelegate;
                };
                createFullRangePositionAndSuperfluidDelegate(value: any): {
                    typeUrl: string;
                    value: _74.MsgCreateFullRangePositionAndSuperfluidDelegate;
                };
                unPoolWhitelistedPool(value: any): {
                    typeUrl: string;
                    value: _74.MsgUnPoolWhitelistedPool;
                };
                unlockAndMigrateSharesToFullRangeConcentratedPosition(value: any): {
                    typeUrl: string;
                    value: _74.MsgUnlockAndMigrateSharesToFullRangeConcentratedPosition;
                };
                addToConcentratedLiquiditySuperfluidPosition(value: any): {
                    typeUrl: string;
                    value: _74.MsgAddToConcentratedLiquiditySuperfluidPosition;
                };
                unbondConvertAndStake(value: any): {
                    typeUrl: string;
                    value: _74.MsgUnbondConvertAndStake;
                };
            };
            fromPartial: {
                superfluidDelegate(value: _74.MsgSuperfluidDelegate): {
                    typeUrl: string;
                    value: _74.MsgSuperfluidDelegate;
                };
                superfluidUndelegate(value: _74.MsgSuperfluidUndelegate): {
                    typeUrl: string;
                    value: _74.MsgSuperfluidUndelegate;
                };
                superfluidUnbondLock(value: _74.MsgSuperfluidUnbondLock): {
                    typeUrl: string;
                    value: _74.MsgSuperfluidUnbondLock;
                };
                superfluidUndelegateAndUnbondLock(value: _74.MsgSuperfluidUndelegateAndUnbondLock): {
                    typeUrl: string;
                    value: _74.MsgSuperfluidUndelegateAndUnbondLock;
                };
                lockAndSuperfluidDelegate(value: _74.MsgLockAndSuperfluidDelegate): {
                    typeUrl: string;
                    value: _74.MsgLockAndSuperfluidDelegate;
                };
                createFullRangePositionAndSuperfluidDelegate(value: _74.MsgCreateFullRangePositionAndSuperfluidDelegate): {
                    typeUrl: string;
                    value: _74.MsgCreateFullRangePositionAndSuperfluidDelegate;
                };
                unPoolWhitelistedPool(value: _74.MsgUnPoolWhitelistedPool): {
                    typeUrl: string;
                    value: _74.MsgUnPoolWhitelistedPool;
                };
                unlockAndMigrateSharesToFullRangeConcentratedPosition(value: _74.MsgUnlockAndMigrateSharesToFullRangeConcentratedPosition): {
                    typeUrl: string;
                    value: _74.MsgUnlockAndMigrateSharesToFullRangeConcentratedPosition;
                };
                addToConcentratedLiquiditySuperfluidPosition(value: _74.MsgAddToConcentratedLiquiditySuperfluidPosition): {
                    typeUrl: string;
                    value: _74.MsgAddToConcentratedLiquiditySuperfluidPosition;
                };
                unbondConvertAndStake(value: _74.MsgUnbondConvertAndStake): {
                    typeUrl: string;
                    value: _74.MsgUnbondConvertAndStake;
                };
            };
        };
        AminoConverter: {
            "/osmosis.superfluid.MsgSuperfluidDelegate": {
                aminoType: string;
                toAmino: (message: _74.MsgSuperfluidDelegate) => _74.MsgSuperfluidDelegateAmino;
                fromAmino: (object: _74.MsgSuperfluidDelegateAmino) => _74.MsgSuperfluidDelegate;
            };
            "/osmosis.superfluid.MsgSuperfluidUndelegate": {
                aminoType: string;
                toAmino: (message: _74.MsgSuperfluidUndelegate) => _74.MsgSuperfluidUndelegateAmino;
                fromAmino: (object: _74.MsgSuperfluidUndelegateAmino) => _74.MsgSuperfluidUndelegate;
            };
            "/osmosis.superfluid.MsgSuperfluidUnbondLock": {
                aminoType: string;
                toAmino: (message: _74.MsgSuperfluidUnbondLock) => _74.MsgSuperfluidUnbondLockAmino;
                fromAmino: (object: _74.MsgSuperfluidUnbondLockAmino) => _74.MsgSuperfluidUnbondLock;
            };
            "/osmosis.superfluid.MsgSuperfluidUndelegateAndUnbondLock": {
                aminoType: string;
                toAmino: (message: _74.MsgSuperfluidUndelegateAndUnbondLock) => _74.MsgSuperfluidUndelegateAndUnbondLockAmino;
                fromAmino: (object: _74.MsgSuperfluidUndelegateAndUnbondLockAmino) => _74.MsgSuperfluidUndelegateAndUnbondLock;
            };
            "/osmosis.superfluid.MsgLockAndSuperfluidDelegate": {
                aminoType: string;
                toAmino: (message: _74.MsgLockAndSuperfluidDelegate) => _74.MsgLockAndSuperfluidDelegateAmino;
                fromAmino: (object: _74.MsgLockAndSuperfluidDelegateAmino) => _74.MsgLockAndSuperfluidDelegate;
            };
            "/osmosis.superfluid.MsgCreateFullRangePositionAndSuperfluidDelegate": {
                aminoType: string;
                toAmino: (message: _74.MsgCreateFullRangePositionAndSuperfluidDelegate) => _74.MsgCreateFullRangePositionAndSuperfluidDelegateAmino;
                fromAmino: (object: _74.MsgCreateFullRangePositionAndSuperfluidDelegateAmino) => _74.MsgCreateFullRangePositionAndSuperfluidDelegate;
            };
            "/osmosis.superfluid.MsgUnPoolWhitelistedPool": {
                aminoType: string;
                toAmino: (message: _74.MsgUnPoolWhitelistedPool) => _74.MsgUnPoolWhitelistedPoolAmino;
                fromAmino: (object: _74.MsgUnPoolWhitelistedPoolAmino) => _74.MsgUnPoolWhitelistedPool;
            };
            "/osmosis.superfluid.MsgUnlockAndMigrateSharesToFullRangeConcentratedPosition": {
                aminoType: string;
                toAmino: (message: _74.MsgUnlockAndMigrateSharesToFullRangeConcentratedPosition) => _74.MsgUnlockAndMigrateSharesToFullRangeConcentratedPositionAmino;
                fromAmino: (object: _74.MsgUnlockAndMigrateSharesToFullRangeConcentratedPositionAmino) => _74.MsgUnlockAndMigrateSharesToFullRangeConcentratedPosition;
            };
            "/osmosis.superfluid.MsgAddToConcentratedLiquiditySuperfluidPosition": {
                aminoType: string;
                toAmino: (message: _74.MsgAddToConcentratedLiquiditySuperfluidPosition) => _74.MsgAddToConcentratedLiquiditySuperfluidPositionAmino;
                fromAmino: (object: _74.MsgAddToConcentratedLiquiditySuperfluidPositionAmino) => _74.MsgAddToConcentratedLiquiditySuperfluidPosition;
            };
            "/osmosis.superfluid.MsgUnbondConvertAndStake": {
                aminoType: string;
                toAmino: (message: _74.MsgUnbondConvertAndStake) => _74.MsgUnbondConvertAndStakeAmino;
                fromAmino: (object: _74.MsgUnbondConvertAndStakeAmino) => _74.MsgUnbondConvertAndStake;
            };
        };
        MsgSuperfluidDelegate: {
            typeUrl: string;
            encode(message: _74.MsgSuperfluidDelegate, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _74.MsgSuperfluidDelegate;
            fromPartial(object: Partial<_74.MsgSuperfluidDelegate>): _74.MsgSuperfluidDelegate;
            fromAmino(object: _74.MsgSuperfluidDelegateAmino): _74.MsgSuperfluidDelegate;
            toAmino(message: _74.MsgSuperfluidDelegate): _74.MsgSuperfluidDelegateAmino;
            fromAminoMsg(object: _74.MsgSuperfluidDelegateAminoMsg): _74.MsgSuperfluidDelegate;
            toAminoMsg(message: _74.MsgSuperfluidDelegate): _74.MsgSuperfluidDelegateAminoMsg;
            fromProtoMsg(message: _74.MsgSuperfluidDelegateProtoMsg): _74.MsgSuperfluidDelegate;
            toProto(message: _74.MsgSuperfluidDelegate): Uint8Array;
            toProtoMsg(message: _74.MsgSuperfluidDelegate): _74.MsgSuperfluidDelegateProtoMsg;
        };
        MsgSuperfluidDelegateResponse: {
            typeUrl: string;
            encode(_: _74.MsgSuperfluidDelegateResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(_: any): _74.MsgSuperfluidDelegateResponse;
            fromPartial(_: Partial<_74.MsgSuperfluidDelegateResponse>): _74.MsgSuperfluidDelegateResponse;
            fromAmino(_: _74.MsgSuperfluidDelegateResponseAmino): _74.MsgSuperfluidDelegateResponse;
            toAmino(_: _74.MsgSuperfluidDelegateResponse): _74.MsgSuperfluidDelegateResponseAmino;
            fromAminoMsg(object: _74.MsgSuperfluidDelegateResponseAminoMsg): _74.MsgSuperfluidDelegateResponse;
            toAminoMsg(message: _74.MsgSuperfluidDelegateResponse): _74.MsgSuperfluidDelegateResponseAminoMsg;
            fromProtoMsg(message: _74.MsgSuperfluidDelegateResponseProtoMsg): _74.MsgSuperfluidDelegateResponse;
            toProto(message: _74.MsgSuperfluidDelegateResponse): Uint8Array;
            toProtoMsg(message: _74.MsgSuperfluidDelegateResponse): _74.MsgSuperfluidDelegateResponseProtoMsg;
        };
        MsgSuperfluidUndelegate: {
            typeUrl: string;
            encode(message: _74.MsgSuperfluidUndelegate, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _74.MsgSuperfluidUndelegate;
            fromPartial(object: Partial<_74.MsgSuperfluidUndelegate>): _74.MsgSuperfluidUndelegate;
            fromAmino(object: _74.MsgSuperfluidUndelegateAmino): _74.MsgSuperfluidUndelegate;
            toAmino(message: _74.MsgSuperfluidUndelegate): _74.MsgSuperfluidUndelegateAmino;
            fromAminoMsg(object: _74.MsgSuperfluidUndelegateAminoMsg): _74.MsgSuperfluidUndelegate;
            toAminoMsg(message: _74.MsgSuperfluidUndelegate): _74.MsgSuperfluidUndelegateAminoMsg;
            fromProtoMsg(message: _74.MsgSuperfluidUndelegateProtoMsg): _74.MsgSuperfluidUndelegate;
            toProto(message: _74.MsgSuperfluidUndelegate): Uint8Array;
            toProtoMsg(message: _74.MsgSuperfluidUndelegate): _74.MsgSuperfluidUndelegateProtoMsg;
        };
        MsgSuperfluidUndelegateResponse: {
            typeUrl: string;
            encode(_: _74.MsgSuperfluidUndelegateResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(_: any): _74.MsgSuperfluidUndelegateResponse;
            fromPartial(_: Partial<_74.MsgSuperfluidUndelegateResponse>): _74.MsgSuperfluidUndelegateResponse;
            fromAmino(_: _74.MsgSuperfluidUndelegateResponseAmino): _74.MsgSuperfluidUndelegateResponse;
            toAmino(_: _74.MsgSuperfluidUndelegateResponse): _74.MsgSuperfluidUndelegateResponseAmino;
            fromAminoMsg(object: _74.MsgSuperfluidUndelegateResponseAminoMsg): _74.MsgSuperfluidUndelegateResponse;
            toAminoMsg(message: _74.MsgSuperfluidUndelegateResponse): _74.MsgSuperfluidUndelegateResponseAminoMsg;
            fromProtoMsg(message: _74.MsgSuperfluidUndelegateResponseProtoMsg): _74.MsgSuperfluidUndelegateResponse;
            toProto(message: _74.MsgSuperfluidUndelegateResponse): Uint8Array;
            toProtoMsg(message: _74.MsgSuperfluidUndelegateResponse): _74.MsgSuperfluidUndelegateResponseProtoMsg;
        };
        MsgSuperfluidUnbondLock: {
            typeUrl: string;
            encode(message: _74.MsgSuperfluidUnbondLock, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _74.MsgSuperfluidUnbondLock;
            fromPartial(object: Partial<_74.MsgSuperfluidUnbondLock>): _74.MsgSuperfluidUnbondLock;
            fromAmino(object: _74.MsgSuperfluidUnbondLockAmino): _74.MsgSuperfluidUnbondLock;
            toAmino(message: _74.MsgSuperfluidUnbondLock): _74.MsgSuperfluidUnbondLockAmino;
            fromAminoMsg(object: _74.MsgSuperfluidUnbondLockAminoMsg): _74.MsgSuperfluidUnbondLock;
            toAminoMsg(message: _74.MsgSuperfluidUnbondLock): _74.MsgSuperfluidUnbondLockAminoMsg;
            fromProtoMsg(message: _74.MsgSuperfluidUnbondLockProtoMsg): _74.MsgSuperfluidUnbondLock;
            toProto(message: _74.MsgSuperfluidUnbondLock): Uint8Array;
            toProtoMsg(message: _74.MsgSuperfluidUnbondLock): _74.MsgSuperfluidUnbondLockProtoMsg;
        };
        MsgSuperfluidUnbondLockResponse: {
            typeUrl: string;
            encode(_: _74.MsgSuperfluidUnbondLockResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(_: any): _74.MsgSuperfluidUnbondLockResponse;
            fromPartial(_: Partial<_74.MsgSuperfluidUnbondLockResponse>): _74.MsgSuperfluidUnbondLockResponse;
            fromAmino(_: _74.MsgSuperfluidUnbondLockResponseAmino): _74.MsgSuperfluidUnbondLockResponse;
            toAmino(_: _74.MsgSuperfluidUnbondLockResponse): _74.MsgSuperfluidUnbondLockResponseAmino;
            fromAminoMsg(object: _74.MsgSuperfluidUnbondLockResponseAminoMsg): _74.MsgSuperfluidUnbondLockResponse;
            toAminoMsg(message: _74.MsgSuperfluidUnbondLockResponse): _74.MsgSuperfluidUnbondLockResponseAminoMsg;
            fromProtoMsg(message: _74.MsgSuperfluidUnbondLockResponseProtoMsg): _74.MsgSuperfluidUnbondLockResponse;
            toProto(message: _74.MsgSuperfluidUnbondLockResponse): Uint8Array;
            toProtoMsg(message: _74.MsgSuperfluidUnbondLockResponse): _74.MsgSuperfluidUnbondLockResponseProtoMsg;
        };
        MsgSuperfluidUndelegateAndUnbondLock: {
            typeUrl: string;
            encode(message: _74.MsgSuperfluidUndelegateAndUnbondLock, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _74.MsgSuperfluidUndelegateAndUnbondLock;
            fromPartial(object: Partial<_74.MsgSuperfluidUndelegateAndUnbondLock>): _74.MsgSuperfluidUndelegateAndUnbondLock;
            fromAmino(object: _74.MsgSuperfluidUndelegateAndUnbondLockAmino): _74.MsgSuperfluidUndelegateAndUnbondLock;
            toAmino(message: _74.MsgSuperfluidUndelegateAndUnbondLock): _74.MsgSuperfluidUndelegateAndUnbondLockAmino;
            fromAminoMsg(object: _74.MsgSuperfluidUndelegateAndUnbondLockAminoMsg): _74.MsgSuperfluidUndelegateAndUnbondLock;
            toAminoMsg(message: _74.MsgSuperfluidUndelegateAndUnbondLock): _74.MsgSuperfluidUndelegateAndUnbondLockAminoMsg;
            fromProtoMsg(message: _74.MsgSuperfluidUndelegateAndUnbondLockProtoMsg): _74.MsgSuperfluidUndelegateAndUnbondLock;
            toProto(message: _74.MsgSuperfluidUndelegateAndUnbondLock): Uint8Array;
            toProtoMsg(message: _74.MsgSuperfluidUndelegateAndUnbondLock): _74.MsgSuperfluidUndelegateAndUnbondLockProtoMsg;
        };
        MsgSuperfluidUndelegateAndUnbondLockResponse: {
            typeUrl: string;
            encode(message: _74.MsgSuperfluidUndelegateAndUnbondLockResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _74.MsgSuperfluidUndelegateAndUnbondLockResponse;
            fromPartial(object: Partial<_74.MsgSuperfluidUndelegateAndUnbondLockResponse>): _74.MsgSuperfluidUndelegateAndUnbondLockResponse;
            fromAmino(object: _74.MsgSuperfluidUndelegateAndUnbondLockResponseAmino): _74.MsgSuperfluidUndelegateAndUnbondLockResponse;
            toAmino(message: _74.MsgSuperfluidUndelegateAndUnbondLockResponse): _74.MsgSuperfluidUndelegateAndUnbondLockResponseAmino;
            fromAminoMsg(object: _74.MsgSuperfluidUndelegateAndUnbondLockResponseAminoMsg): _74.MsgSuperfluidUndelegateAndUnbondLockResponse;
            toAminoMsg(message: _74.MsgSuperfluidUndelegateAndUnbondLockResponse): _74.MsgSuperfluidUndelegateAndUnbondLockResponseAminoMsg;
            fromProtoMsg(message: _74.MsgSuperfluidUndelegateAndUnbondLockResponseProtoMsg): _74.MsgSuperfluidUndelegateAndUnbondLockResponse;
            toProto(message: _74.MsgSuperfluidUndelegateAndUnbondLockResponse): Uint8Array;
            toProtoMsg(message: _74.MsgSuperfluidUndelegateAndUnbondLockResponse): _74.MsgSuperfluidUndelegateAndUnbondLockResponseProtoMsg;
        };
        MsgLockAndSuperfluidDelegate: {
            typeUrl: string;
            encode(message: _74.MsgLockAndSuperfluidDelegate, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _74.MsgLockAndSuperfluidDelegate;
            fromPartial(object: Partial<_74.MsgLockAndSuperfluidDelegate>): _74.MsgLockAndSuperfluidDelegate;
            fromAmino(object: _74.MsgLockAndSuperfluidDelegateAmino): _74.MsgLockAndSuperfluidDelegate;
            toAmino(message: _74.MsgLockAndSuperfluidDelegate): _74.MsgLockAndSuperfluidDelegateAmino;
            fromAminoMsg(object: _74.MsgLockAndSuperfluidDelegateAminoMsg): _74.MsgLockAndSuperfluidDelegate;
            toAminoMsg(message: _74.MsgLockAndSuperfluidDelegate): _74.MsgLockAndSuperfluidDelegateAminoMsg;
            fromProtoMsg(message: _74.MsgLockAndSuperfluidDelegateProtoMsg): _74.MsgLockAndSuperfluidDelegate;
            toProto(message: _74.MsgLockAndSuperfluidDelegate): Uint8Array;
            toProtoMsg(message: _74.MsgLockAndSuperfluidDelegate): _74.MsgLockAndSuperfluidDelegateProtoMsg;
        };
        MsgLockAndSuperfluidDelegateResponse: {
            typeUrl: string;
            encode(message: _74.MsgLockAndSuperfluidDelegateResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _74.MsgLockAndSuperfluidDelegateResponse;
            fromPartial(object: Partial<_74.MsgLockAndSuperfluidDelegateResponse>): _74.MsgLockAndSuperfluidDelegateResponse;
            fromAmino(object: _74.MsgLockAndSuperfluidDelegateResponseAmino): _74.MsgLockAndSuperfluidDelegateResponse;
            toAmino(message: _74.MsgLockAndSuperfluidDelegateResponse): _74.MsgLockAndSuperfluidDelegateResponseAmino;
            fromAminoMsg(object: _74.MsgLockAndSuperfluidDelegateResponseAminoMsg): _74.MsgLockAndSuperfluidDelegateResponse;
            toAminoMsg(message: _74.MsgLockAndSuperfluidDelegateResponse): _74.MsgLockAndSuperfluidDelegateResponseAminoMsg;
            fromProtoMsg(message: _74.MsgLockAndSuperfluidDelegateResponseProtoMsg): _74.MsgLockAndSuperfluidDelegateResponse;
            toProto(message: _74.MsgLockAndSuperfluidDelegateResponse): Uint8Array;
            toProtoMsg(message: _74.MsgLockAndSuperfluidDelegateResponse): _74.MsgLockAndSuperfluidDelegateResponseProtoMsg;
        };
        MsgCreateFullRangePositionAndSuperfluidDelegate: {
            typeUrl: string;
            encode(message: _74.MsgCreateFullRangePositionAndSuperfluidDelegate, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _74.MsgCreateFullRangePositionAndSuperfluidDelegate;
            fromPartial(object: Partial<_74.MsgCreateFullRangePositionAndSuperfluidDelegate>): _74.MsgCreateFullRangePositionAndSuperfluidDelegate;
            fromAmino(object: _74.MsgCreateFullRangePositionAndSuperfluidDelegateAmino): _74.MsgCreateFullRangePositionAndSuperfluidDelegate;
            toAmino(message: _74.MsgCreateFullRangePositionAndSuperfluidDelegate): _74.MsgCreateFullRangePositionAndSuperfluidDelegateAmino;
            fromAminoMsg(object: _74.MsgCreateFullRangePositionAndSuperfluidDelegateAminoMsg): _74.MsgCreateFullRangePositionAndSuperfluidDelegate;
            toAminoMsg(message: _74.MsgCreateFullRangePositionAndSuperfluidDelegate): _74.MsgCreateFullRangePositionAndSuperfluidDelegateAminoMsg;
            fromProtoMsg(message: _74.MsgCreateFullRangePositionAndSuperfluidDelegateProtoMsg): _74.MsgCreateFullRangePositionAndSuperfluidDelegate;
            toProto(message: _74.MsgCreateFullRangePositionAndSuperfluidDelegate): Uint8Array;
            toProtoMsg(message: _74.MsgCreateFullRangePositionAndSuperfluidDelegate): _74.MsgCreateFullRangePositionAndSuperfluidDelegateProtoMsg;
        };
        MsgCreateFullRangePositionAndSuperfluidDelegateResponse: {
            typeUrl: string;
            encode(message: _74.MsgCreateFullRangePositionAndSuperfluidDelegateResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _74.MsgCreateFullRangePositionAndSuperfluidDelegateResponse;
            fromPartial(object: Partial<_74.MsgCreateFullRangePositionAndSuperfluidDelegateResponse>): _74.MsgCreateFullRangePositionAndSuperfluidDelegateResponse;
            fromAmino(object: _74.MsgCreateFullRangePositionAndSuperfluidDelegateResponseAmino): _74.MsgCreateFullRangePositionAndSuperfluidDelegateResponse;
            toAmino(message: _74.MsgCreateFullRangePositionAndSuperfluidDelegateResponse): _74.MsgCreateFullRangePositionAndSuperfluidDelegateResponseAmino;
            fromAminoMsg(object: _74.MsgCreateFullRangePositionAndSuperfluidDelegateResponseAminoMsg): _74.MsgCreateFullRangePositionAndSuperfluidDelegateResponse;
            toAminoMsg(message: _74.MsgCreateFullRangePositionAndSuperfluidDelegateResponse): _74.MsgCreateFullRangePositionAndSuperfluidDelegateResponseAminoMsg;
            fromProtoMsg(message: _74.MsgCreateFullRangePositionAndSuperfluidDelegateResponseProtoMsg): _74.MsgCreateFullRangePositionAndSuperfluidDelegateResponse;
            toProto(message: _74.MsgCreateFullRangePositionAndSuperfluidDelegateResponse): Uint8Array;
            toProtoMsg(message: _74.MsgCreateFullRangePositionAndSuperfluidDelegateResponse): _74.MsgCreateFullRangePositionAndSuperfluidDelegateResponseProtoMsg;
        };
        MsgUnPoolWhitelistedPool: {
            typeUrl: string;
            encode(message: _74.MsgUnPoolWhitelistedPool, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _74.MsgUnPoolWhitelistedPool;
            fromPartial(object: Partial<_74.MsgUnPoolWhitelistedPool>): _74.MsgUnPoolWhitelistedPool;
            fromAmino(object: _74.MsgUnPoolWhitelistedPoolAmino): _74.MsgUnPoolWhitelistedPool;
            toAmino(message: _74.MsgUnPoolWhitelistedPool): _74.MsgUnPoolWhitelistedPoolAmino;
            fromAminoMsg(object: _74.MsgUnPoolWhitelistedPoolAminoMsg): _74.MsgUnPoolWhitelistedPool;
            toAminoMsg(message: _74.MsgUnPoolWhitelistedPool): _74.MsgUnPoolWhitelistedPoolAminoMsg;
            fromProtoMsg(message: _74.MsgUnPoolWhitelistedPoolProtoMsg): _74.MsgUnPoolWhitelistedPool;
            toProto(message: _74.MsgUnPoolWhitelistedPool): Uint8Array;
            toProtoMsg(message: _74.MsgUnPoolWhitelistedPool): _74.MsgUnPoolWhitelistedPoolProtoMsg;
        };
        MsgUnPoolWhitelistedPoolResponse: {
            typeUrl: string;
            encode(message: _74.MsgUnPoolWhitelistedPoolResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _74.MsgUnPoolWhitelistedPoolResponse;
            fromPartial(object: Partial<_74.MsgUnPoolWhitelistedPoolResponse>): _74.MsgUnPoolWhitelistedPoolResponse;
            fromAmino(object: _74.MsgUnPoolWhitelistedPoolResponseAmino): _74.MsgUnPoolWhitelistedPoolResponse;
            toAmino(message: _74.MsgUnPoolWhitelistedPoolResponse): _74.MsgUnPoolWhitelistedPoolResponseAmino;
            fromAminoMsg(object: _74.MsgUnPoolWhitelistedPoolResponseAminoMsg): _74.MsgUnPoolWhitelistedPoolResponse;
            toAminoMsg(message: _74.MsgUnPoolWhitelistedPoolResponse): _74.MsgUnPoolWhitelistedPoolResponseAminoMsg;
            fromProtoMsg(message: _74.MsgUnPoolWhitelistedPoolResponseProtoMsg): _74.MsgUnPoolWhitelistedPoolResponse;
            toProto(message: _74.MsgUnPoolWhitelistedPoolResponse): Uint8Array;
            toProtoMsg(message: _74.MsgUnPoolWhitelistedPoolResponse): _74.MsgUnPoolWhitelistedPoolResponseProtoMsg;
        };
        MsgUnlockAndMigrateSharesToFullRangeConcentratedPosition: {
            typeUrl: string;
            encode(message: _74.MsgUnlockAndMigrateSharesToFullRangeConcentratedPosition, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _74.MsgUnlockAndMigrateSharesToFullRangeConcentratedPosition;
            fromPartial(object: Partial<_74.MsgUnlockAndMigrateSharesToFullRangeConcentratedPosition>): _74.MsgUnlockAndMigrateSharesToFullRangeConcentratedPosition;
            fromAmino(object: _74.MsgUnlockAndMigrateSharesToFullRangeConcentratedPositionAmino): _74.MsgUnlockAndMigrateSharesToFullRangeConcentratedPosition;
            toAmino(message: _74.MsgUnlockAndMigrateSharesToFullRangeConcentratedPosition): _74.MsgUnlockAndMigrateSharesToFullRangeConcentratedPositionAmino;
            fromAminoMsg(object: _74.MsgUnlockAndMigrateSharesToFullRangeConcentratedPositionAminoMsg): _74.MsgUnlockAndMigrateSharesToFullRangeConcentratedPosition;
            toAminoMsg(message: _74.MsgUnlockAndMigrateSharesToFullRangeConcentratedPosition): _74.MsgUnlockAndMigrateSharesToFullRangeConcentratedPositionAminoMsg;
            fromProtoMsg(message: _74.MsgUnlockAndMigrateSharesToFullRangeConcentratedPositionProtoMsg): _74.MsgUnlockAndMigrateSharesToFullRangeConcentratedPosition;
            toProto(message: _74.MsgUnlockAndMigrateSharesToFullRangeConcentratedPosition): Uint8Array;
            toProtoMsg(message: _74.MsgUnlockAndMigrateSharesToFullRangeConcentratedPosition): _74.MsgUnlockAndMigrateSharesToFullRangeConcentratedPositionProtoMsg;
        };
        MsgUnlockAndMigrateSharesToFullRangeConcentratedPositionResponse: {
            typeUrl: string;
            encode(message: _74.MsgUnlockAndMigrateSharesToFullRangeConcentratedPositionResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _74.MsgUnlockAndMigrateSharesToFullRangeConcentratedPositionResponse;
            fromPartial(object: Partial<_74.MsgUnlockAndMigrateSharesToFullRangeConcentratedPositionResponse>): _74.MsgUnlockAndMigrateSharesToFullRangeConcentratedPositionResponse;
            fromAmino(object: _74.MsgUnlockAndMigrateSharesToFullRangeConcentratedPositionResponseAmino): _74.MsgUnlockAndMigrateSharesToFullRangeConcentratedPositionResponse;
            toAmino(message: _74.MsgUnlockAndMigrateSharesToFullRangeConcentratedPositionResponse): _74.MsgUnlockAndMigrateSharesToFullRangeConcentratedPositionResponseAmino;
            fromAminoMsg(object: _74.MsgUnlockAndMigrateSharesToFullRangeConcentratedPositionResponseAminoMsg): _74.MsgUnlockAndMigrateSharesToFullRangeConcentratedPositionResponse;
            toAminoMsg(message: _74.MsgUnlockAndMigrateSharesToFullRangeConcentratedPositionResponse): _74.MsgUnlockAndMigrateSharesToFullRangeConcentratedPositionResponseAminoMsg;
            fromProtoMsg(message: _74.MsgUnlockAndMigrateSharesToFullRangeConcentratedPositionResponseProtoMsg): _74.MsgUnlockAndMigrateSharesToFullRangeConcentratedPositionResponse;
            toProto(message: _74.MsgUnlockAndMigrateSharesToFullRangeConcentratedPositionResponse): Uint8Array;
            toProtoMsg(message: _74.MsgUnlockAndMigrateSharesToFullRangeConcentratedPositionResponse): _74.MsgUnlockAndMigrateSharesToFullRangeConcentratedPositionResponseProtoMsg;
        };
        MsgAddToConcentratedLiquiditySuperfluidPosition: {
            typeUrl: string;
            encode(message: _74.MsgAddToConcentratedLiquiditySuperfluidPosition, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _74.MsgAddToConcentratedLiquiditySuperfluidPosition;
            fromPartial(object: Partial<_74.MsgAddToConcentratedLiquiditySuperfluidPosition>): _74.MsgAddToConcentratedLiquiditySuperfluidPosition;
            fromAmino(object: _74.MsgAddToConcentratedLiquiditySuperfluidPositionAmino): _74.MsgAddToConcentratedLiquiditySuperfluidPosition;
            toAmino(message: _74.MsgAddToConcentratedLiquiditySuperfluidPosition): _74.MsgAddToConcentratedLiquiditySuperfluidPositionAmino;
            fromAminoMsg(object: _74.MsgAddToConcentratedLiquiditySuperfluidPositionAminoMsg): _74.MsgAddToConcentratedLiquiditySuperfluidPosition;
            toAminoMsg(message: _74.MsgAddToConcentratedLiquiditySuperfluidPosition): _74.MsgAddToConcentratedLiquiditySuperfluidPositionAminoMsg;
            fromProtoMsg(message: _74.MsgAddToConcentratedLiquiditySuperfluidPositionProtoMsg): _74.MsgAddToConcentratedLiquiditySuperfluidPosition;
            toProto(message: _74.MsgAddToConcentratedLiquiditySuperfluidPosition): Uint8Array;
            toProtoMsg(message: _74.MsgAddToConcentratedLiquiditySuperfluidPosition): _74.MsgAddToConcentratedLiquiditySuperfluidPositionProtoMsg;
        };
        MsgAddToConcentratedLiquiditySuperfluidPositionResponse: {
            typeUrl: string;
            encode(message: _74.MsgAddToConcentratedLiquiditySuperfluidPositionResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _74.MsgAddToConcentratedLiquiditySuperfluidPositionResponse;
            fromPartial(object: Partial<_74.MsgAddToConcentratedLiquiditySuperfluidPositionResponse>): _74.MsgAddToConcentratedLiquiditySuperfluidPositionResponse;
            fromAmino(object: _74.MsgAddToConcentratedLiquiditySuperfluidPositionResponseAmino): _74.MsgAddToConcentratedLiquiditySuperfluidPositionResponse;
            toAmino(message: _74.MsgAddToConcentratedLiquiditySuperfluidPositionResponse): _74.MsgAddToConcentratedLiquiditySuperfluidPositionResponseAmino;
            fromAminoMsg(object: _74.MsgAddToConcentratedLiquiditySuperfluidPositionResponseAminoMsg): _74.MsgAddToConcentratedLiquiditySuperfluidPositionResponse;
            toAminoMsg(message: _74.MsgAddToConcentratedLiquiditySuperfluidPositionResponse): _74.MsgAddToConcentratedLiquiditySuperfluidPositionResponseAminoMsg;
            fromProtoMsg(message: _74.MsgAddToConcentratedLiquiditySuperfluidPositionResponseProtoMsg): _74.MsgAddToConcentratedLiquiditySuperfluidPositionResponse;
            toProto(message: _74.MsgAddToConcentratedLiquiditySuperfluidPositionResponse): Uint8Array;
            toProtoMsg(message: _74.MsgAddToConcentratedLiquiditySuperfluidPositionResponse): _74.MsgAddToConcentratedLiquiditySuperfluidPositionResponseProtoMsg;
        };
        MsgUnbondConvertAndStake: {
            typeUrl: string;
            encode(message: _74.MsgUnbondConvertAndStake, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _74.MsgUnbondConvertAndStake;
            fromPartial(object: Partial<_74.MsgUnbondConvertAndStake>): _74.MsgUnbondConvertAndStake;
            fromAmino(object: _74.MsgUnbondConvertAndStakeAmino): _74.MsgUnbondConvertAndStake;
            toAmino(message: _74.MsgUnbondConvertAndStake): _74.MsgUnbondConvertAndStakeAmino;
            fromAminoMsg(object: _74.MsgUnbondConvertAndStakeAminoMsg): _74.MsgUnbondConvertAndStake;
            toAminoMsg(message: _74.MsgUnbondConvertAndStake): _74.MsgUnbondConvertAndStakeAminoMsg;
            fromProtoMsg(message: _74.MsgUnbondConvertAndStakeProtoMsg): _74.MsgUnbondConvertAndStake;
            toProto(message: _74.MsgUnbondConvertAndStake): Uint8Array;
            toProtoMsg(message: _74.MsgUnbondConvertAndStake): _74.MsgUnbondConvertAndStakeProtoMsg;
        };
        MsgUnbondConvertAndStakeResponse: {
            typeUrl: string;
            encode(message: _74.MsgUnbondConvertAndStakeResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _74.MsgUnbondConvertAndStakeResponse;
            fromPartial(object: Partial<_74.MsgUnbondConvertAndStakeResponse>): _74.MsgUnbondConvertAndStakeResponse;
            fromAmino(object: _74.MsgUnbondConvertAndStakeResponseAmino): _74.MsgUnbondConvertAndStakeResponse;
            toAmino(message: _74.MsgUnbondConvertAndStakeResponse): _74.MsgUnbondConvertAndStakeResponseAmino;
            fromAminoMsg(object: _74.MsgUnbondConvertAndStakeResponseAminoMsg): _74.MsgUnbondConvertAndStakeResponse;
            toAminoMsg(message: _74.MsgUnbondConvertAndStakeResponse): _74.MsgUnbondConvertAndStakeResponseAminoMsg;
            fromProtoMsg(message: _74.MsgUnbondConvertAndStakeResponseProtoMsg): _74.MsgUnbondConvertAndStakeResponse;
            toProto(message: _74.MsgUnbondConvertAndStakeResponse): Uint8Array;
            toProtoMsg(message: _74.MsgUnbondConvertAndStakeResponse): _74.MsgUnbondConvertAndStakeResponseProtoMsg;
        };
        superfluidAssetTypeFromJSON(object: any): _73.SuperfluidAssetType;
        superfluidAssetTypeToJSON(object: _73.SuperfluidAssetType): string;
        SuperfluidAssetType: typeof _73.SuperfluidAssetType;
        SuperfluidAssetTypeSDKType: typeof _73.SuperfluidAssetType;
        SuperfluidAssetTypeAmino: typeof _73.SuperfluidAssetType;
        SuperfluidAsset: {
            typeUrl: string;
            encode(message: _73.SuperfluidAsset, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _73.SuperfluidAsset;
            fromPartial(object: Partial<_73.SuperfluidAsset>): _73.SuperfluidAsset;
            fromAmino(object: _73.SuperfluidAssetAmino): _73.SuperfluidAsset;
            toAmino(message: _73.SuperfluidAsset): _73.SuperfluidAssetAmino;
            fromAminoMsg(object: _73.SuperfluidAssetAminoMsg): _73.SuperfluidAsset;
            toAminoMsg(message: _73.SuperfluidAsset): _73.SuperfluidAssetAminoMsg;
            fromProtoMsg(message: _73.SuperfluidAssetProtoMsg): _73.SuperfluidAsset;
            toProto(message: _73.SuperfluidAsset): Uint8Array;
            toProtoMsg(message: _73.SuperfluidAsset): _73.SuperfluidAssetProtoMsg;
        };
        SuperfluidIntermediaryAccount: {
            typeUrl: string;
            encode(message: _73.SuperfluidIntermediaryAccount, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _73.SuperfluidIntermediaryAccount;
            fromPartial(object: Partial<_73.SuperfluidIntermediaryAccount>): _73.SuperfluidIntermediaryAccount;
            fromAmino(object: _73.SuperfluidIntermediaryAccountAmino): _73.SuperfluidIntermediaryAccount;
            toAmino(message: _73.SuperfluidIntermediaryAccount): _73.SuperfluidIntermediaryAccountAmino;
            fromAminoMsg(object: _73.SuperfluidIntermediaryAccountAminoMsg): _73.SuperfluidIntermediaryAccount;
            toAminoMsg(message: _73.SuperfluidIntermediaryAccount): _73.SuperfluidIntermediaryAccountAminoMsg;
            fromProtoMsg(message: _73.SuperfluidIntermediaryAccountProtoMsg): _73.SuperfluidIntermediaryAccount;
            toProto(message: _73.SuperfluidIntermediaryAccount): Uint8Array;
            toProtoMsg(message: _73.SuperfluidIntermediaryAccount): _73.SuperfluidIntermediaryAccountProtoMsg;
        };
        OsmoEquivalentMultiplierRecord: {
            typeUrl: string;
            encode(message: _73.OsmoEquivalentMultiplierRecord, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _73.OsmoEquivalentMultiplierRecord;
            fromPartial(object: Partial<_73.OsmoEquivalentMultiplierRecord>): _73.OsmoEquivalentMultiplierRecord;
            fromAmino(object: _73.OsmoEquivalentMultiplierRecordAmino): _73.OsmoEquivalentMultiplierRecord;
            toAmino(message: _73.OsmoEquivalentMultiplierRecord): _73.OsmoEquivalentMultiplierRecordAmino;
            fromAminoMsg(object: _73.OsmoEquivalentMultiplierRecordAminoMsg): _73.OsmoEquivalentMultiplierRecord;
            toAminoMsg(message: _73.OsmoEquivalentMultiplierRecord): _73.OsmoEquivalentMultiplierRecordAminoMsg;
            fromProtoMsg(message: _73.OsmoEquivalentMultiplierRecordProtoMsg): _73.OsmoEquivalentMultiplierRecord;
            toProto(message: _73.OsmoEquivalentMultiplierRecord): Uint8Array;
            toProtoMsg(message: _73.OsmoEquivalentMultiplierRecord): _73.OsmoEquivalentMultiplierRecordProtoMsg;
        };
        SuperfluidDelegationRecord: {
            typeUrl: string;
            encode(message: _73.SuperfluidDelegationRecord, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _73.SuperfluidDelegationRecord;
            fromPartial(object: Partial<_73.SuperfluidDelegationRecord>): _73.SuperfluidDelegationRecord;
            fromAmino(object: _73.SuperfluidDelegationRecordAmino): _73.SuperfluidDelegationRecord;
            toAmino(message: _73.SuperfluidDelegationRecord): _73.SuperfluidDelegationRecordAmino;
            fromAminoMsg(object: _73.SuperfluidDelegationRecordAminoMsg): _73.SuperfluidDelegationRecord;
            toAminoMsg(message: _73.SuperfluidDelegationRecord): _73.SuperfluidDelegationRecordAminoMsg;
            fromProtoMsg(message: _73.SuperfluidDelegationRecordProtoMsg): _73.SuperfluidDelegationRecord;
            toProto(message: _73.SuperfluidDelegationRecord): Uint8Array;
            toProtoMsg(message: _73.SuperfluidDelegationRecord): _73.SuperfluidDelegationRecordProtoMsg;
        };
        LockIdIntermediaryAccountConnection: {
            typeUrl: string;
            encode(message: _73.LockIdIntermediaryAccountConnection, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _73.LockIdIntermediaryAccountConnection;
            fromPartial(object: Partial<_73.LockIdIntermediaryAccountConnection>): _73.LockIdIntermediaryAccountConnection;
            fromAmino(object: _73.LockIdIntermediaryAccountConnectionAmino): _73.LockIdIntermediaryAccountConnection;
            toAmino(message: _73.LockIdIntermediaryAccountConnection): _73.LockIdIntermediaryAccountConnectionAmino;
            fromAminoMsg(object: _73.LockIdIntermediaryAccountConnectionAminoMsg): _73.LockIdIntermediaryAccountConnection;
            toAminoMsg(message: _73.LockIdIntermediaryAccountConnection): _73.LockIdIntermediaryAccountConnectionAminoMsg;
            fromProtoMsg(message: _73.LockIdIntermediaryAccountConnectionProtoMsg): _73.LockIdIntermediaryAccountConnection;
            toProto(message: _73.LockIdIntermediaryAccountConnection): Uint8Array;
            toProtoMsg(message: _73.LockIdIntermediaryAccountConnection): _73.LockIdIntermediaryAccountConnectionProtoMsg;
        };
        UnpoolWhitelistedPools: {
            typeUrl: string;
            encode(message: _73.UnpoolWhitelistedPools, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _73.UnpoolWhitelistedPools;
            fromPartial(object: Partial<_73.UnpoolWhitelistedPools>): _73.UnpoolWhitelistedPools;
            fromAmino(object: _73.UnpoolWhitelistedPoolsAmino): _73.UnpoolWhitelistedPools;
            toAmino(message: _73.UnpoolWhitelistedPools): _73.UnpoolWhitelistedPoolsAmino;
            fromAminoMsg(object: _73.UnpoolWhitelistedPoolsAminoMsg): _73.UnpoolWhitelistedPools;
            toAminoMsg(message: _73.UnpoolWhitelistedPools): _73.UnpoolWhitelistedPoolsAminoMsg;
            fromProtoMsg(message: _73.UnpoolWhitelistedPoolsProtoMsg): _73.UnpoolWhitelistedPools;
            toProto(message: _73.UnpoolWhitelistedPools): Uint8Array;
            toProtoMsg(message: _73.UnpoolWhitelistedPools): _73.UnpoolWhitelistedPoolsProtoMsg;
        };
        ConcentratedPoolUserPositionRecord: {
            typeUrl: string;
            encode(message: _73.ConcentratedPoolUserPositionRecord, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _73.ConcentratedPoolUserPositionRecord;
            fromPartial(object: Partial<_73.ConcentratedPoolUserPositionRecord>): _73.ConcentratedPoolUserPositionRecord;
            fromAmino(object: _73.ConcentratedPoolUserPositionRecordAmino): _73.ConcentratedPoolUserPositionRecord;
            toAmino(message: _73.ConcentratedPoolUserPositionRecord): _73.ConcentratedPoolUserPositionRecordAmino;
            fromAminoMsg(object: _73.ConcentratedPoolUserPositionRecordAminoMsg): _73.ConcentratedPoolUserPositionRecord;
            toAminoMsg(message: _73.ConcentratedPoolUserPositionRecord): _73.ConcentratedPoolUserPositionRecordAminoMsg;
            fromProtoMsg(message: _73.ConcentratedPoolUserPositionRecordProtoMsg): _73.ConcentratedPoolUserPositionRecord;
            toProto(message: _73.ConcentratedPoolUserPositionRecord): Uint8Array;
            toProtoMsg(message: _73.ConcentratedPoolUserPositionRecord): _73.ConcentratedPoolUserPositionRecordProtoMsg;
        };
        QueryParamsRequest: {
            typeUrl: string;
            encode(_: _72.QueryParamsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(_: any): _72.QueryParamsRequest;
            fromPartial(_: Partial<_72.QueryParamsRequest>): _72.QueryParamsRequest;
            fromAmino(_: _72.QueryParamsRequestAmino): _72.QueryParamsRequest;
            toAmino(_: _72.QueryParamsRequest): _72.QueryParamsRequestAmino;
            fromAminoMsg(object: _72.QueryParamsRequestAminoMsg): _72.QueryParamsRequest;
            toAminoMsg(message: _72.QueryParamsRequest): _72.QueryParamsRequestAminoMsg;
            fromProtoMsg(message: _72.QueryParamsRequestProtoMsg): _72.QueryParamsRequest;
            toProto(message: _72.QueryParamsRequest): Uint8Array;
            toProtoMsg(message: _72.QueryParamsRequest): _72.QueryParamsRequestProtoMsg;
        };
        QueryParamsResponse: {
            typeUrl: string;
            encode(message: _72.QueryParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _72.QueryParamsResponse;
            fromPartial(object: Partial<_72.QueryParamsResponse>): _72.QueryParamsResponse;
            fromAmino(object: _72.QueryParamsResponseAmino): _72.QueryParamsResponse;
            toAmino(message: _72.QueryParamsResponse): _72.QueryParamsResponseAmino;
            fromAminoMsg(object: _72.QueryParamsResponseAminoMsg): _72.QueryParamsResponse;
            toAminoMsg(message: _72.QueryParamsResponse): _72.QueryParamsResponseAminoMsg;
            fromProtoMsg(message: _72.QueryParamsResponseProtoMsg): _72.QueryParamsResponse;
            toProto(message: _72.QueryParamsResponse): Uint8Array;
            toProtoMsg(message: _72.QueryParamsResponse): _72.QueryParamsResponseProtoMsg;
        };
        AssetTypeRequest: {
            typeUrl: string;
            encode(message: _72.AssetTypeRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _72.AssetTypeRequest;
            fromPartial(object: Partial<_72.AssetTypeRequest>): _72.AssetTypeRequest;
            fromAmino(object: _72.AssetTypeRequestAmino): _72.AssetTypeRequest;
            toAmino(message: _72.AssetTypeRequest): _72.AssetTypeRequestAmino;
            fromAminoMsg(object: _72.AssetTypeRequestAminoMsg): _72.AssetTypeRequest;
            toAminoMsg(message: _72.AssetTypeRequest): _72.AssetTypeRequestAminoMsg;
            fromProtoMsg(message: _72.AssetTypeRequestProtoMsg): _72.AssetTypeRequest;
            toProto(message: _72.AssetTypeRequest): Uint8Array;
            toProtoMsg(message: _72.AssetTypeRequest): _72.AssetTypeRequestProtoMsg;
        };
        AssetTypeResponse: {
            typeUrl: string;
            encode(message: _72.AssetTypeResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _72.AssetTypeResponse;
            fromPartial(object: Partial<_72.AssetTypeResponse>): _72.AssetTypeResponse;
            fromAmino(object: _72.AssetTypeResponseAmino): _72.AssetTypeResponse;
            toAmino(message: _72.AssetTypeResponse): _72.AssetTypeResponseAmino;
            fromAminoMsg(object: _72.AssetTypeResponseAminoMsg): _72.AssetTypeResponse;
            toAminoMsg(message: _72.AssetTypeResponse): _72.AssetTypeResponseAminoMsg;
            fromProtoMsg(message: _72.AssetTypeResponseProtoMsg): _72.AssetTypeResponse;
            toProto(message: _72.AssetTypeResponse): Uint8Array;
            toProtoMsg(message: _72.AssetTypeResponse): _72.AssetTypeResponseProtoMsg;
        };
        AllAssetsRequest: {
            typeUrl: string;
            encode(_: _72.AllAssetsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(_: any): _72.AllAssetsRequest;
            fromPartial(_: Partial<_72.AllAssetsRequest>): _72.AllAssetsRequest;
            fromAmino(_: _72.AllAssetsRequestAmino): _72.AllAssetsRequest;
            toAmino(_: _72.AllAssetsRequest): _72.AllAssetsRequestAmino;
            fromAminoMsg(object: _72.AllAssetsRequestAminoMsg): _72.AllAssetsRequest;
            toAminoMsg(message: _72.AllAssetsRequest): _72.AllAssetsRequestAminoMsg;
            fromProtoMsg(message: _72.AllAssetsRequestProtoMsg): _72.AllAssetsRequest;
            toProto(message: _72.AllAssetsRequest): Uint8Array;
            toProtoMsg(message: _72.AllAssetsRequest): _72.AllAssetsRequestProtoMsg;
        };
        AllAssetsResponse: {
            typeUrl: string;
            encode(message: _72.AllAssetsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _72.AllAssetsResponse;
            fromPartial(object: Partial<_72.AllAssetsResponse>): _72.AllAssetsResponse;
            fromAmino(object: _72.AllAssetsResponseAmino): _72.AllAssetsResponse;
            toAmino(message: _72.AllAssetsResponse): _72.AllAssetsResponseAmino;
            fromAminoMsg(object: _72.AllAssetsResponseAminoMsg): _72.AllAssetsResponse;
            toAminoMsg(message: _72.AllAssetsResponse): _72.AllAssetsResponseAminoMsg;
            fromProtoMsg(message: _72.AllAssetsResponseProtoMsg): _72.AllAssetsResponse;
            toProto(message: _72.AllAssetsResponse): Uint8Array;
            toProtoMsg(message: _72.AllAssetsResponse): _72.AllAssetsResponseProtoMsg;
        };
        AssetMultiplierRequest: {
            typeUrl: string;
            encode(message: _72.AssetMultiplierRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _72.AssetMultiplierRequest;
            fromPartial(object: Partial<_72.AssetMultiplierRequest>): _72.AssetMultiplierRequest;
            fromAmino(object: _72.AssetMultiplierRequestAmino): _72.AssetMultiplierRequest;
            toAmino(message: _72.AssetMultiplierRequest): _72.AssetMultiplierRequestAmino;
            fromAminoMsg(object: _72.AssetMultiplierRequestAminoMsg): _72.AssetMultiplierRequest;
            toAminoMsg(message: _72.AssetMultiplierRequest): _72.AssetMultiplierRequestAminoMsg;
            fromProtoMsg(message: _72.AssetMultiplierRequestProtoMsg): _72.AssetMultiplierRequest;
            toProto(message: _72.AssetMultiplierRequest): Uint8Array;
            toProtoMsg(message: _72.AssetMultiplierRequest): _72.AssetMultiplierRequestProtoMsg;
        };
        AssetMultiplierResponse: {
            typeUrl: string;
            encode(message: _72.AssetMultiplierResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _72.AssetMultiplierResponse;
            fromPartial(object: Partial<_72.AssetMultiplierResponse>): _72.AssetMultiplierResponse;
            fromAmino(object: _72.AssetMultiplierResponseAmino): _72.AssetMultiplierResponse;
            toAmino(message: _72.AssetMultiplierResponse): _72.AssetMultiplierResponseAmino;
            fromAminoMsg(object: _72.AssetMultiplierResponseAminoMsg): _72.AssetMultiplierResponse;
            toAminoMsg(message: _72.AssetMultiplierResponse): _72.AssetMultiplierResponseAminoMsg;
            fromProtoMsg(message: _72.AssetMultiplierResponseProtoMsg): _72.AssetMultiplierResponse;
            toProto(message: _72.AssetMultiplierResponse): Uint8Array;
            toProtoMsg(message: _72.AssetMultiplierResponse): _72.AssetMultiplierResponseProtoMsg;
        };
        SuperfluidIntermediaryAccountInfo: {
            typeUrl: string;
            encode(message: _72.SuperfluidIntermediaryAccountInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _72.SuperfluidIntermediaryAccountInfo;
            fromPartial(object: Partial<_72.SuperfluidIntermediaryAccountInfo>): _72.SuperfluidIntermediaryAccountInfo;
            fromAmino(object: _72.SuperfluidIntermediaryAccountInfoAmino): _72.SuperfluidIntermediaryAccountInfo;
            toAmino(message: _72.SuperfluidIntermediaryAccountInfo): _72.SuperfluidIntermediaryAccountInfoAmino;
            fromAminoMsg(object: _72.SuperfluidIntermediaryAccountInfoAminoMsg): _72.SuperfluidIntermediaryAccountInfo;
            toAminoMsg(message: _72.SuperfluidIntermediaryAccountInfo): _72.SuperfluidIntermediaryAccountInfoAminoMsg;
            fromProtoMsg(message: _72.SuperfluidIntermediaryAccountInfoProtoMsg): _72.SuperfluidIntermediaryAccountInfo;
            toProto(message: _72.SuperfluidIntermediaryAccountInfo): Uint8Array;
            toProtoMsg(message: _72.SuperfluidIntermediaryAccountInfo): _72.SuperfluidIntermediaryAccountInfoProtoMsg;
        };
        AllIntermediaryAccountsRequest: {
            typeUrl: string;
            encode(message: _72.AllIntermediaryAccountsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _72.AllIntermediaryAccountsRequest;
            fromPartial(object: Partial<_72.AllIntermediaryAccountsRequest>): _72.AllIntermediaryAccountsRequest;
            fromAmino(object: _72.AllIntermediaryAccountsRequestAmino): _72.AllIntermediaryAccountsRequest;
            toAmino(message: _72.AllIntermediaryAccountsRequest): _72.AllIntermediaryAccountsRequestAmino;
            fromAminoMsg(object: _72.AllIntermediaryAccountsRequestAminoMsg): _72.AllIntermediaryAccountsRequest;
            toAminoMsg(message: _72.AllIntermediaryAccountsRequest): _72.AllIntermediaryAccountsRequestAminoMsg;
            fromProtoMsg(message: _72.AllIntermediaryAccountsRequestProtoMsg): _72.AllIntermediaryAccountsRequest;
            toProto(message: _72.AllIntermediaryAccountsRequest): Uint8Array;
            toProtoMsg(message: _72.AllIntermediaryAccountsRequest): _72.AllIntermediaryAccountsRequestProtoMsg;
        };
        AllIntermediaryAccountsResponse: {
            typeUrl: string;
            encode(message: _72.AllIntermediaryAccountsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _72.AllIntermediaryAccountsResponse;
            fromPartial(object: Partial<_72.AllIntermediaryAccountsResponse>): _72.AllIntermediaryAccountsResponse;
            fromAmino(object: _72.AllIntermediaryAccountsResponseAmino): _72.AllIntermediaryAccountsResponse;
            toAmino(message: _72.AllIntermediaryAccountsResponse): _72.AllIntermediaryAccountsResponseAmino;
            fromAminoMsg(object: _72.AllIntermediaryAccountsResponseAminoMsg): _72.AllIntermediaryAccountsResponse;
            toAminoMsg(message: _72.AllIntermediaryAccountsResponse): _72.AllIntermediaryAccountsResponseAminoMsg;
            fromProtoMsg(message: _72.AllIntermediaryAccountsResponseProtoMsg): _72.AllIntermediaryAccountsResponse;
            toProto(message: _72.AllIntermediaryAccountsResponse): Uint8Array;
            toProtoMsg(message: _72.AllIntermediaryAccountsResponse): _72.AllIntermediaryAccountsResponseProtoMsg;
        };
        ConnectedIntermediaryAccountRequest: {
            typeUrl: string;
            encode(message: _72.ConnectedIntermediaryAccountRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _72.ConnectedIntermediaryAccountRequest;
            fromPartial(object: Partial<_72.ConnectedIntermediaryAccountRequest>): _72.ConnectedIntermediaryAccountRequest;
            fromAmino(object: _72.ConnectedIntermediaryAccountRequestAmino): _72.ConnectedIntermediaryAccountRequest;
            toAmino(message: _72.ConnectedIntermediaryAccountRequest): _72.ConnectedIntermediaryAccountRequestAmino;
            fromAminoMsg(object: _72.ConnectedIntermediaryAccountRequestAminoMsg): _72.ConnectedIntermediaryAccountRequest;
            toAminoMsg(message: _72.ConnectedIntermediaryAccountRequest): _72.ConnectedIntermediaryAccountRequestAminoMsg;
            fromProtoMsg(message: _72.ConnectedIntermediaryAccountRequestProtoMsg): _72.ConnectedIntermediaryAccountRequest;
            toProto(message: _72.ConnectedIntermediaryAccountRequest): Uint8Array;
            toProtoMsg(message: _72.ConnectedIntermediaryAccountRequest): _72.ConnectedIntermediaryAccountRequestProtoMsg;
        };
        ConnectedIntermediaryAccountResponse: {
            typeUrl: string;
            encode(message: _72.ConnectedIntermediaryAccountResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _72.ConnectedIntermediaryAccountResponse;
            fromPartial(object: Partial<_72.ConnectedIntermediaryAccountResponse>): _72.ConnectedIntermediaryAccountResponse;
            fromAmino(object: _72.ConnectedIntermediaryAccountResponseAmino): _72.ConnectedIntermediaryAccountResponse;
            toAmino(message: _72.ConnectedIntermediaryAccountResponse): _72.ConnectedIntermediaryAccountResponseAmino;
            fromAminoMsg(object: _72.ConnectedIntermediaryAccountResponseAminoMsg): _72.ConnectedIntermediaryAccountResponse;
            toAminoMsg(message: _72.ConnectedIntermediaryAccountResponse): _72.ConnectedIntermediaryAccountResponseAminoMsg;
            fromProtoMsg(message: _72.ConnectedIntermediaryAccountResponseProtoMsg): _72.ConnectedIntermediaryAccountResponse;
            toProto(message: _72.ConnectedIntermediaryAccountResponse): Uint8Array;
            toProtoMsg(message: _72.ConnectedIntermediaryAccountResponse): _72.ConnectedIntermediaryAccountResponseProtoMsg;
        };
        QueryTotalDelegationByValidatorForDenomRequest: {
            typeUrl: string;
            encode(message: _72.QueryTotalDelegationByValidatorForDenomRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _72.QueryTotalDelegationByValidatorForDenomRequest;
            fromPartial(object: Partial<_72.QueryTotalDelegationByValidatorForDenomRequest>): _72.QueryTotalDelegationByValidatorForDenomRequest;
            fromAmino(object: _72.QueryTotalDelegationByValidatorForDenomRequestAmino): _72.QueryTotalDelegationByValidatorForDenomRequest;
            toAmino(message: _72.QueryTotalDelegationByValidatorForDenomRequest): _72.QueryTotalDelegationByValidatorForDenomRequestAmino;
            fromAminoMsg(object: _72.QueryTotalDelegationByValidatorForDenomRequestAminoMsg): _72.QueryTotalDelegationByValidatorForDenomRequest;
            toAminoMsg(message: _72.QueryTotalDelegationByValidatorForDenomRequest): _72.QueryTotalDelegationByValidatorForDenomRequestAminoMsg;
            fromProtoMsg(message: _72.QueryTotalDelegationByValidatorForDenomRequestProtoMsg): _72.QueryTotalDelegationByValidatorForDenomRequest;
            toProto(message: _72.QueryTotalDelegationByValidatorForDenomRequest): Uint8Array;
            toProtoMsg(message: _72.QueryTotalDelegationByValidatorForDenomRequest): _72.QueryTotalDelegationByValidatorForDenomRequestProtoMsg;
        };
        QueryTotalDelegationByValidatorForDenomResponse: {
            typeUrl: string;
            encode(message: _72.QueryTotalDelegationByValidatorForDenomResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _72.QueryTotalDelegationByValidatorForDenomResponse;
            fromPartial(object: Partial<_72.QueryTotalDelegationByValidatorForDenomResponse>): _72.QueryTotalDelegationByValidatorForDenomResponse;
            fromAmino(object: _72.QueryTotalDelegationByValidatorForDenomResponseAmino): _72.QueryTotalDelegationByValidatorForDenomResponse;
            toAmino(message: _72.QueryTotalDelegationByValidatorForDenomResponse): _72.QueryTotalDelegationByValidatorForDenomResponseAmino;
            fromAminoMsg(object: _72.QueryTotalDelegationByValidatorForDenomResponseAminoMsg): _72.QueryTotalDelegationByValidatorForDenomResponse;
            toAminoMsg(message: _72.QueryTotalDelegationByValidatorForDenomResponse): _72.QueryTotalDelegationByValidatorForDenomResponseAminoMsg;
            fromProtoMsg(message: _72.QueryTotalDelegationByValidatorForDenomResponseProtoMsg): _72.QueryTotalDelegationByValidatorForDenomResponse;
            toProto(message: _72.QueryTotalDelegationByValidatorForDenomResponse): Uint8Array;
            toProtoMsg(message: _72.QueryTotalDelegationByValidatorForDenomResponse): _72.QueryTotalDelegationByValidatorForDenomResponseProtoMsg;
        };
        Delegations: {
            typeUrl: string;
            encode(message: _72.Delegations, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _72.Delegations;
            fromPartial(object: Partial<_72.Delegations>): _72.Delegations;
            fromAmino(object: _72.DelegationsAmino): _72.Delegations;
            toAmino(message: _72.Delegations): _72.DelegationsAmino;
            fromAminoMsg(object: _72.DelegationsAminoMsg): _72.Delegations;
            toAminoMsg(message: _72.Delegations): _72.DelegationsAminoMsg;
            fromProtoMsg(message: _72.DelegationsProtoMsg): _72.Delegations;
            toProto(message: _72.Delegations): Uint8Array;
            toProtoMsg(message: _72.Delegations): _72.DelegationsProtoMsg;
        };
        TotalSuperfluidDelegationsRequest: {
            typeUrl: string;
            encode(_: _72.TotalSuperfluidDelegationsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(_: any): _72.TotalSuperfluidDelegationsRequest;
            fromPartial(_: Partial<_72.TotalSuperfluidDelegationsRequest>): _72.TotalSuperfluidDelegationsRequest;
            fromAmino(_: _72.TotalSuperfluidDelegationsRequestAmino): _72.TotalSuperfluidDelegationsRequest;
            toAmino(_: _72.TotalSuperfluidDelegationsRequest): _72.TotalSuperfluidDelegationsRequestAmino;
            fromAminoMsg(object: _72.TotalSuperfluidDelegationsRequestAminoMsg): _72.TotalSuperfluidDelegationsRequest;
            toAminoMsg(message: _72.TotalSuperfluidDelegationsRequest): _72.TotalSuperfluidDelegationsRequestAminoMsg;
            fromProtoMsg(message: _72.TotalSuperfluidDelegationsRequestProtoMsg): _72.TotalSuperfluidDelegationsRequest;
            toProto(message: _72.TotalSuperfluidDelegationsRequest): Uint8Array;
            toProtoMsg(message: _72.TotalSuperfluidDelegationsRequest): _72.TotalSuperfluidDelegationsRequestProtoMsg;
        };
        TotalSuperfluidDelegationsResponse: {
            typeUrl: string;
            encode(message: _72.TotalSuperfluidDelegationsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _72.TotalSuperfluidDelegationsResponse;
            fromPartial(object: Partial<_72.TotalSuperfluidDelegationsResponse>): _72.TotalSuperfluidDelegationsResponse;
            fromAmino(object: _72.TotalSuperfluidDelegationsResponseAmino): _72.TotalSuperfluidDelegationsResponse;
            toAmino(message: _72.TotalSuperfluidDelegationsResponse): _72.TotalSuperfluidDelegationsResponseAmino;
            fromAminoMsg(object: _72.TotalSuperfluidDelegationsResponseAminoMsg): _72.TotalSuperfluidDelegationsResponse;
            toAminoMsg(message: _72.TotalSuperfluidDelegationsResponse): _72.TotalSuperfluidDelegationsResponseAminoMsg;
            fromProtoMsg(message: _72.TotalSuperfluidDelegationsResponseProtoMsg): _72.TotalSuperfluidDelegationsResponse;
            toProto(message: _72.TotalSuperfluidDelegationsResponse): Uint8Array;
            toProtoMsg(message: _72.TotalSuperfluidDelegationsResponse): _72.TotalSuperfluidDelegationsResponseProtoMsg;
        };
        SuperfluidDelegationAmountRequest: {
            typeUrl: string;
            encode(message: _72.SuperfluidDelegationAmountRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _72.SuperfluidDelegationAmountRequest;
            fromPartial(object: Partial<_72.SuperfluidDelegationAmountRequest>): _72.SuperfluidDelegationAmountRequest;
            fromAmino(object: _72.SuperfluidDelegationAmountRequestAmino): _72.SuperfluidDelegationAmountRequest;
            toAmino(message: _72.SuperfluidDelegationAmountRequest): _72.SuperfluidDelegationAmountRequestAmino;
            fromAminoMsg(object: _72.SuperfluidDelegationAmountRequestAminoMsg): _72.SuperfluidDelegationAmountRequest;
            toAminoMsg(message: _72.SuperfluidDelegationAmountRequest): _72.SuperfluidDelegationAmountRequestAminoMsg;
            fromProtoMsg(message: _72.SuperfluidDelegationAmountRequestProtoMsg): _72.SuperfluidDelegationAmountRequest;
            toProto(message: _72.SuperfluidDelegationAmountRequest): Uint8Array;
            toProtoMsg(message: _72.SuperfluidDelegationAmountRequest): _72.SuperfluidDelegationAmountRequestProtoMsg;
        };
        SuperfluidDelegationAmountResponse: {
            typeUrl: string;
            encode(message: _72.SuperfluidDelegationAmountResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _72.SuperfluidDelegationAmountResponse;
            fromPartial(object: Partial<_72.SuperfluidDelegationAmountResponse>): _72.SuperfluidDelegationAmountResponse;
            fromAmino(object: _72.SuperfluidDelegationAmountResponseAmino): _72.SuperfluidDelegationAmountResponse;
            toAmino(message: _72.SuperfluidDelegationAmountResponse): _72.SuperfluidDelegationAmountResponseAmino;
            fromAminoMsg(object: _72.SuperfluidDelegationAmountResponseAminoMsg): _72.SuperfluidDelegationAmountResponse;
            toAminoMsg(message: _72.SuperfluidDelegationAmountResponse): _72.SuperfluidDelegationAmountResponseAminoMsg;
            fromProtoMsg(message: _72.SuperfluidDelegationAmountResponseProtoMsg): _72.SuperfluidDelegationAmountResponse;
            toProto(message: _72.SuperfluidDelegationAmountResponse): Uint8Array;
            toProtoMsg(message: _72.SuperfluidDelegationAmountResponse): _72.SuperfluidDelegationAmountResponseProtoMsg;
        };
        SuperfluidDelegationsByDelegatorRequest: {
            typeUrl: string;
            encode(message: _72.SuperfluidDelegationsByDelegatorRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _72.SuperfluidDelegationsByDelegatorRequest;
            fromPartial(object: Partial<_72.SuperfluidDelegationsByDelegatorRequest>): _72.SuperfluidDelegationsByDelegatorRequest;
            fromAmino(object: _72.SuperfluidDelegationsByDelegatorRequestAmino): _72.SuperfluidDelegationsByDelegatorRequest;
            toAmino(message: _72.SuperfluidDelegationsByDelegatorRequest): _72.SuperfluidDelegationsByDelegatorRequestAmino;
            fromAminoMsg(object: _72.SuperfluidDelegationsByDelegatorRequestAminoMsg): _72.SuperfluidDelegationsByDelegatorRequest;
            toAminoMsg(message: _72.SuperfluidDelegationsByDelegatorRequest): _72.SuperfluidDelegationsByDelegatorRequestAminoMsg;
            fromProtoMsg(message: _72.SuperfluidDelegationsByDelegatorRequestProtoMsg): _72.SuperfluidDelegationsByDelegatorRequest;
            toProto(message: _72.SuperfluidDelegationsByDelegatorRequest): Uint8Array;
            toProtoMsg(message: _72.SuperfluidDelegationsByDelegatorRequest): _72.SuperfluidDelegationsByDelegatorRequestProtoMsg;
        };
        SuperfluidDelegationsByDelegatorResponse: {
            typeUrl: string;
            encode(message: _72.SuperfluidDelegationsByDelegatorResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _72.SuperfluidDelegationsByDelegatorResponse;
            fromPartial(object: Partial<_72.SuperfluidDelegationsByDelegatorResponse>): _72.SuperfluidDelegationsByDelegatorResponse;
            fromAmino(object: _72.SuperfluidDelegationsByDelegatorResponseAmino): _72.SuperfluidDelegationsByDelegatorResponse;
            toAmino(message: _72.SuperfluidDelegationsByDelegatorResponse): _72.SuperfluidDelegationsByDelegatorResponseAmino;
            fromAminoMsg(object: _72.SuperfluidDelegationsByDelegatorResponseAminoMsg): _72.SuperfluidDelegationsByDelegatorResponse;
            toAminoMsg(message: _72.SuperfluidDelegationsByDelegatorResponse): _72.SuperfluidDelegationsByDelegatorResponseAminoMsg;
            fromProtoMsg(message: _72.SuperfluidDelegationsByDelegatorResponseProtoMsg): _72.SuperfluidDelegationsByDelegatorResponse;
            toProto(message: _72.SuperfluidDelegationsByDelegatorResponse): Uint8Array;
            toProtoMsg(message: _72.SuperfluidDelegationsByDelegatorResponse): _72.SuperfluidDelegationsByDelegatorResponseProtoMsg;
        };
        SuperfluidUndelegationsByDelegatorRequest: {
            typeUrl: string;
            encode(message: _72.SuperfluidUndelegationsByDelegatorRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _72.SuperfluidUndelegationsByDelegatorRequest;
            fromPartial(object: Partial<_72.SuperfluidUndelegationsByDelegatorRequest>): _72.SuperfluidUndelegationsByDelegatorRequest;
            fromAmino(object: _72.SuperfluidUndelegationsByDelegatorRequestAmino): _72.SuperfluidUndelegationsByDelegatorRequest;
            toAmino(message: _72.SuperfluidUndelegationsByDelegatorRequest): _72.SuperfluidUndelegationsByDelegatorRequestAmino;
            fromAminoMsg(object: _72.SuperfluidUndelegationsByDelegatorRequestAminoMsg): _72.SuperfluidUndelegationsByDelegatorRequest;
            toAminoMsg(message: _72.SuperfluidUndelegationsByDelegatorRequest): _72.SuperfluidUndelegationsByDelegatorRequestAminoMsg;
            fromProtoMsg(message: _72.SuperfluidUndelegationsByDelegatorRequestProtoMsg): _72.SuperfluidUndelegationsByDelegatorRequest;
            toProto(message: _72.SuperfluidUndelegationsByDelegatorRequest): Uint8Array;
            toProtoMsg(message: _72.SuperfluidUndelegationsByDelegatorRequest): _72.SuperfluidUndelegationsByDelegatorRequestProtoMsg;
        };
        SuperfluidUndelegationsByDelegatorResponse: {
            typeUrl: string;
            encode(message: _72.SuperfluidUndelegationsByDelegatorResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _72.SuperfluidUndelegationsByDelegatorResponse;
            fromPartial(object: Partial<_72.SuperfluidUndelegationsByDelegatorResponse>): _72.SuperfluidUndelegationsByDelegatorResponse;
            fromAmino(object: _72.SuperfluidUndelegationsByDelegatorResponseAmino): _72.SuperfluidUndelegationsByDelegatorResponse;
            toAmino(message: _72.SuperfluidUndelegationsByDelegatorResponse): _72.SuperfluidUndelegationsByDelegatorResponseAmino;
            fromAminoMsg(object: _72.SuperfluidUndelegationsByDelegatorResponseAminoMsg): _72.SuperfluidUndelegationsByDelegatorResponse;
            toAminoMsg(message: _72.SuperfluidUndelegationsByDelegatorResponse): _72.SuperfluidUndelegationsByDelegatorResponseAminoMsg;
            fromProtoMsg(message: _72.SuperfluidUndelegationsByDelegatorResponseProtoMsg): _72.SuperfluidUndelegationsByDelegatorResponse;
            toProto(message: _72.SuperfluidUndelegationsByDelegatorResponse): Uint8Array;
            toProtoMsg(message: _72.SuperfluidUndelegationsByDelegatorResponse): _72.SuperfluidUndelegationsByDelegatorResponseProtoMsg;
        };
        SuperfluidDelegationsByValidatorDenomRequest: {
            typeUrl: string;
            encode(message: _72.SuperfluidDelegationsByValidatorDenomRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _72.SuperfluidDelegationsByValidatorDenomRequest;
            fromPartial(object: Partial<_72.SuperfluidDelegationsByValidatorDenomRequest>): _72.SuperfluidDelegationsByValidatorDenomRequest;
            fromAmino(object: _72.SuperfluidDelegationsByValidatorDenomRequestAmino): _72.SuperfluidDelegationsByValidatorDenomRequest;
            toAmino(message: _72.SuperfluidDelegationsByValidatorDenomRequest): _72.SuperfluidDelegationsByValidatorDenomRequestAmino;
            fromAminoMsg(object: _72.SuperfluidDelegationsByValidatorDenomRequestAminoMsg): _72.SuperfluidDelegationsByValidatorDenomRequest;
            toAminoMsg(message: _72.SuperfluidDelegationsByValidatorDenomRequest): _72.SuperfluidDelegationsByValidatorDenomRequestAminoMsg;
            fromProtoMsg(message: _72.SuperfluidDelegationsByValidatorDenomRequestProtoMsg): _72.SuperfluidDelegationsByValidatorDenomRequest;
            toProto(message: _72.SuperfluidDelegationsByValidatorDenomRequest): Uint8Array;
            toProtoMsg(message: _72.SuperfluidDelegationsByValidatorDenomRequest): _72.SuperfluidDelegationsByValidatorDenomRequestProtoMsg;
        };
        SuperfluidDelegationsByValidatorDenomResponse: {
            typeUrl: string;
            encode(message: _72.SuperfluidDelegationsByValidatorDenomResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _72.SuperfluidDelegationsByValidatorDenomResponse;
            fromPartial(object: Partial<_72.SuperfluidDelegationsByValidatorDenomResponse>): _72.SuperfluidDelegationsByValidatorDenomResponse;
            fromAmino(object: _72.SuperfluidDelegationsByValidatorDenomResponseAmino): _72.SuperfluidDelegationsByValidatorDenomResponse;
            toAmino(message: _72.SuperfluidDelegationsByValidatorDenomResponse): _72.SuperfluidDelegationsByValidatorDenomResponseAmino;
            fromAminoMsg(object: _72.SuperfluidDelegationsByValidatorDenomResponseAminoMsg): _72.SuperfluidDelegationsByValidatorDenomResponse;
            toAminoMsg(message: _72.SuperfluidDelegationsByValidatorDenomResponse): _72.SuperfluidDelegationsByValidatorDenomResponseAminoMsg;
            fromProtoMsg(message: _72.SuperfluidDelegationsByValidatorDenomResponseProtoMsg): _72.SuperfluidDelegationsByValidatorDenomResponse;
            toProto(message: _72.SuperfluidDelegationsByValidatorDenomResponse): Uint8Array;
            toProtoMsg(message: _72.SuperfluidDelegationsByValidatorDenomResponse): _72.SuperfluidDelegationsByValidatorDenomResponseProtoMsg;
        };
        EstimateSuperfluidDelegatedAmountByValidatorDenomRequest: {
            typeUrl: string;
            encode(message: _72.EstimateSuperfluidDelegatedAmountByValidatorDenomRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _72.EstimateSuperfluidDelegatedAmountByValidatorDenomRequest;
            fromPartial(object: Partial<_72.EstimateSuperfluidDelegatedAmountByValidatorDenomRequest>): _72.EstimateSuperfluidDelegatedAmountByValidatorDenomRequest;
            fromAmino(object: _72.EstimateSuperfluidDelegatedAmountByValidatorDenomRequestAmino): _72.EstimateSuperfluidDelegatedAmountByValidatorDenomRequest;
            toAmino(message: _72.EstimateSuperfluidDelegatedAmountByValidatorDenomRequest): _72.EstimateSuperfluidDelegatedAmountByValidatorDenomRequestAmino;
            fromAminoMsg(object: _72.EstimateSuperfluidDelegatedAmountByValidatorDenomRequestAminoMsg): _72.EstimateSuperfluidDelegatedAmountByValidatorDenomRequest;
            toAminoMsg(message: _72.EstimateSuperfluidDelegatedAmountByValidatorDenomRequest): _72.EstimateSuperfluidDelegatedAmountByValidatorDenomRequestAminoMsg;
            fromProtoMsg(message: _72.EstimateSuperfluidDelegatedAmountByValidatorDenomRequestProtoMsg): _72.EstimateSuperfluidDelegatedAmountByValidatorDenomRequest;
            toProto(message: _72.EstimateSuperfluidDelegatedAmountByValidatorDenomRequest): Uint8Array;
            toProtoMsg(message: _72.EstimateSuperfluidDelegatedAmountByValidatorDenomRequest): _72.EstimateSuperfluidDelegatedAmountByValidatorDenomRequestProtoMsg;
        };
        EstimateSuperfluidDelegatedAmountByValidatorDenomResponse: {
            typeUrl: string;
            encode(message: _72.EstimateSuperfluidDelegatedAmountByValidatorDenomResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _72.EstimateSuperfluidDelegatedAmountByValidatorDenomResponse;
            fromPartial(object: Partial<_72.EstimateSuperfluidDelegatedAmountByValidatorDenomResponse>): _72.EstimateSuperfluidDelegatedAmountByValidatorDenomResponse;
            fromAmino(object: _72.EstimateSuperfluidDelegatedAmountByValidatorDenomResponseAmino): _72.EstimateSuperfluidDelegatedAmountByValidatorDenomResponse;
            toAmino(message: _72.EstimateSuperfluidDelegatedAmountByValidatorDenomResponse): _72.EstimateSuperfluidDelegatedAmountByValidatorDenomResponseAmino;
            fromAminoMsg(object: _72.EstimateSuperfluidDelegatedAmountByValidatorDenomResponseAminoMsg): _72.EstimateSuperfluidDelegatedAmountByValidatorDenomResponse;
            toAminoMsg(message: _72.EstimateSuperfluidDelegatedAmountByValidatorDenomResponse): _72.EstimateSuperfluidDelegatedAmountByValidatorDenomResponseAminoMsg;
            fromProtoMsg(message: _72.EstimateSuperfluidDelegatedAmountByValidatorDenomResponseProtoMsg): _72.EstimateSuperfluidDelegatedAmountByValidatorDenomResponse;
            toProto(message: _72.EstimateSuperfluidDelegatedAmountByValidatorDenomResponse): Uint8Array;
            toProtoMsg(message: _72.EstimateSuperfluidDelegatedAmountByValidatorDenomResponse): _72.EstimateSuperfluidDelegatedAmountByValidatorDenomResponseProtoMsg;
        };
        QueryTotalDelegationByDelegatorRequest: {
            typeUrl: string;
            encode(message: _72.QueryTotalDelegationByDelegatorRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _72.QueryTotalDelegationByDelegatorRequest;
            fromPartial(object: Partial<_72.QueryTotalDelegationByDelegatorRequest>): _72.QueryTotalDelegationByDelegatorRequest;
            fromAmino(object: _72.QueryTotalDelegationByDelegatorRequestAmino): _72.QueryTotalDelegationByDelegatorRequest;
            toAmino(message: _72.QueryTotalDelegationByDelegatorRequest): _72.QueryTotalDelegationByDelegatorRequestAmino;
            fromAminoMsg(object: _72.QueryTotalDelegationByDelegatorRequestAminoMsg): _72.QueryTotalDelegationByDelegatorRequest;
            toAminoMsg(message: _72.QueryTotalDelegationByDelegatorRequest): _72.QueryTotalDelegationByDelegatorRequestAminoMsg;
            fromProtoMsg(message: _72.QueryTotalDelegationByDelegatorRequestProtoMsg): _72.QueryTotalDelegationByDelegatorRequest;
            toProto(message: _72.QueryTotalDelegationByDelegatorRequest): Uint8Array;
            toProtoMsg(message: _72.QueryTotalDelegationByDelegatorRequest): _72.QueryTotalDelegationByDelegatorRequestProtoMsg;
        };
        QueryTotalDelegationByDelegatorResponse: {
            typeUrl: string;
            encode(message: _72.QueryTotalDelegationByDelegatorResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _72.QueryTotalDelegationByDelegatorResponse;
            fromPartial(object: Partial<_72.QueryTotalDelegationByDelegatorResponse>): _72.QueryTotalDelegationByDelegatorResponse;
            fromAmino(object: _72.QueryTotalDelegationByDelegatorResponseAmino): _72.QueryTotalDelegationByDelegatorResponse;
            toAmino(message: _72.QueryTotalDelegationByDelegatorResponse): _72.QueryTotalDelegationByDelegatorResponseAmino;
            fromAminoMsg(object: _72.QueryTotalDelegationByDelegatorResponseAminoMsg): _72.QueryTotalDelegationByDelegatorResponse;
            toAminoMsg(message: _72.QueryTotalDelegationByDelegatorResponse): _72.QueryTotalDelegationByDelegatorResponseAminoMsg;
            fromProtoMsg(message: _72.QueryTotalDelegationByDelegatorResponseProtoMsg): _72.QueryTotalDelegationByDelegatorResponse;
            toProto(message: _72.QueryTotalDelegationByDelegatorResponse): Uint8Array;
            toProtoMsg(message: _72.QueryTotalDelegationByDelegatorResponse): _72.QueryTotalDelegationByDelegatorResponseProtoMsg;
        };
        QueryUnpoolWhitelistRequest: {
            typeUrl: string;
            encode(_: _72.QueryUnpoolWhitelistRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(_: any): _72.QueryUnpoolWhitelistRequest;
            fromPartial(_: Partial<_72.QueryUnpoolWhitelistRequest>): _72.QueryUnpoolWhitelistRequest;
            fromAmino(_: _72.QueryUnpoolWhitelistRequestAmino): _72.QueryUnpoolWhitelistRequest;
            toAmino(_: _72.QueryUnpoolWhitelistRequest): _72.QueryUnpoolWhitelistRequestAmino;
            fromAminoMsg(object: _72.QueryUnpoolWhitelistRequestAminoMsg): _72.QueryUnpoolWhitelistRequest;
            toAminoMsg(message: _72.QueryUnpoolWhitelistRequest): _72.QueryUnpoolWhitelistRequestAminoMsg;
            fromProtoMsg(message: _72.QueryUnpoolWhitelistRequestProtoMsg): _72.QueryUnpoolWhitelistRequest;
            toProto(message: _72.QueryUnpoolWhitelistRequest): Uint8Array;
            toProtoMsg(message: _72.QueryUnpoolWhitelistRequest): _72.QueryUnpoolWhitelistRequestProtoMsg;
        };
        QueryUnpoolWhitelistResponse: {
            typeUrl: string;
            encode(message: _72.QueryUnpoolWhitelistResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _72.QueryUnpoolWhitelistResponse;
            fromPartial(object: Partial<_72.QueryUnpoolWhitelistResponse>): _72.QueryUnpoolWhitelistResponse;
            fromAmino(object: _72.QueryUnpoolWhitelistResponseAmino): _72.QueryUnpoolWhitelistResponse;
            toAmino(message: _72.QueryUnpoolWhitelistResponse): _72.QueryUnpoolWhitelistResponseAmino;
            fromAminoMsg(object: _72.QueryUnpoolWhitelistResponseAminoMsg): _72.QueryUnpoolWhitelistResponse;
            toAminoMsg(message: _72.QueryUnpoolWhitelistResponse): _72.QueryUnpoolWhitelistResponseAminoMsg;
            fromProtoMsg(message: _72.QueryUnpoolWhitelistResponseProtoMsg): _72.QueryUnpoolWhitelistResponse;
            toProto(message: _72.QueryUnpoolWhitelistResponse): Uint8Array;
            toProtoMsg(message: _72.QueryUnpoolWhitelistResponse): _72.QueryUnpoolWhitelistResponseProtoMsg;
        };
        UserConcentratedSuperfluidPositionsDelegatedRequest: {
            typeUrl: string;
            encode(message: _72.UserConcentratedSuperfluidPositionsDelegatedRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _72.UserConcentratedSuperfluidPositionsDelegatedRequest;
            fromPartial(object: Partial<_72.UserConcentratedSuperfluidPositionsDelegatedRequest>): _72.UserConcentratedSuperfluidPositionsDelegatedRequest;
            fromAmino(object: _72.UserConcentratedSuperfluidPositionsDelegatedRequestAmino): _72.UserConcentratedSuperfluidPositionsDelegatedRequest;
            toAmino(message: _72.UserConcentratedSuperfluidPositionsDelegatedRequest): _72.UserConcentratedSuperfluidPositionsDelegatedRequestAmino;
            fromAminoMsg(object: _72.UserConcentratedSuperfluidPositionsDelegatedRequestAminoMsg): _72.UserConcentratedSuperfluidPositionsDelegatedRequest;
            toAminoMsg(message: _72.UserConcentratedSuperfluidPositionsDelegatedRequest): _72.UserConcentratedSuperfluidPositionsDelegatedRequestAminoMsg;
            fromProtoMsg(message: _72.UserConcentratedSuperfluidPositionsDelegatedRequestProtoMsg): _72.UserConcentratedSuperfluidPositionsDelegatedRequest;
            toProto(message: _72.UserConcentratedSuperfluidPositionsDelegatedRequest): Uint8Array;
            toProtoMsg(message: _72.UserConcentratedSuperfluidPositionsDelegatedRequest): _72.UserConcentratedSuperfluidPositionsDelegatedRequestProtoMsg;
        };
        UserConcentratedSuperfluidPositionsDelegatedResponse: {
            typeUrl: string;
            encode(message: _72.UserConcentratedSuperfluidPositionsDelegatedResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _72.UserConcentratedSuperfluidPositionsDelegatedResponse;
            fromPartial(object: Partial<_72.UserConcentratedSuperfluidPositionsDelegatedResponse>): _72.UserConcentratedSuperfluidPositionsDelegatedResponse;
            fromAmino(object: _72.UserConcentratedSuperfluidPositionsDelegatedResponseAmino): _72.UserConcentratedSuperfluidPositionsDelegatedResponse;
            toAmino(message: _72.UserConcentratedSuperfluidPositionsDelegatedResponse): _72.UserConcentratedSuperfluidPositionsDelegatedResponseAmino;
            fromAminoMsg(object: _72.UserConcentratedSuperfluidPositionsDelegatedResponseAminoMsg): _72.UserConcentratedSuperfluidPositionsDelegatedResponse;
            toAminoMsg(message: _72.UserConcentratedSuperfluidPositionsDelegatedResponse): _72.UserConcentratedSuperfluidPositionsDelegatedResponseAminoMsg;
            fromProtoMsg(message: _72.UserConcentratedSuperfluidPositionsDelegatedResponseProtoMsg): _72.UserConcentratedSuperfluidPositionsDelegatedResponse;
            toProto(message: _72.UserConcentratedSuperfluidPositionsDelegatedResponse): Uint8Array;
            toProtoMsg(message: _72.UserConcentratedSuperfluidPositionsDelegatedResponse): _72.UserConcentratedSuperfluidPositionsDelegatedResponseProtoMsg;
        };
        UserConcentratedSuperfluidPositionsUndelegatingRequest: {
            typeUrl: string;
            encode(message: _72.UserConcentratedSuperfluidPositionsUndelegatingRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _72.UserConcentratedSuperfluidPositionsUndelegatingRequest;
            fromPartial(object: Partial<_72.UserConcentratedSuperfluidPositionsUndelegatingRequest>): _72.UserConcentratedSuperfluidPositionsUndelegatingRequest;
            fromAmino(object: _72.UserConcentratedSuperfluidPositionsUndelegatingRequestAmino): _72.UserConcentratedSuperfluidPositionsUndelegatingRequest;
            toAmino(message: _72.UserConcentratedSuperfluidPositionsUndelegatingRequest): _72.UserConcentratedSuperfluidPositionsUndelegatingRequestAmino;
            fromAminoMsg(object: _72.UserConcentratedSuperfluidPositionsUndelegatingRequestAminoMsg): _72.UserConcentratedSuperfluidPositionsUndelegatingRequest;
            toAminoMsg(message: _72.UserConcentratedSuperfluidPositionsUndelegatingRequest): _72.UserConcentratedSuperfluidPositionsUndelegatingRequestAminoMsg;
            fromProtoMsg(message: _72.UserConcentratedSuperfluidPositionsUndelegatingRequestProtoMsg): _72.UserConcentratedSuperfluidPositionsUndelegatingRequest;
            toProto(message: _72.UserConcentratedSuperfluidPositionsUndelegatingRequest): Uint8Array;
            toProtoMsg(message: _72.UserConcentratedSuperfluidPositionsUndelegatingRequest): _72.UserConcentratedSuperfluidPositionsUndelegatingRequestProtoMsg;
        };
        UserConcentratedSuperfluidPositionsUndelegatingResponse: {
            typeUrl: string;
            encode(message: _72.UserConcentratedSuperfluidPositionsUndelegatingResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _72.UserConcentratedSuperfluidPositionsUndelegatingResponse;
            fromPartial(object: Partial<_72.UserConcentratedSuperfluidPositionsUndelegatingResponse>): _72.UserConcentratedSuperfluidPositionsUndelegatingResponse;
            fromAmino(object: _72.UserConcentratedSuperfluidPositionsUndelegatingResponseAmino): _72.UserConcentratedSuperfluidPositionsUndelegatingResponse;
            toAmino(message: _72.UserConcentratedSuperfluidPositionsUndelegatingResponse): _72.UserConcentratedSuperfluidPositionsUndelegatingResponseAmino;
            fromAminoMsg(object: _72.UserConcentratedSuperfluidPositionsUndelegatingResponseAminoMsg): _72.UserConcentratedSuperfluidPositionsUndelegatingResponse;
            toAminoMsg(message: _72.UserConcentratedSuperfluidPositionsUndelegatingResponse): _72.UserConcentratedSuperfluidPositionsUndelegatingResponseAminoMsg;
            fromProtoMsg(message: _72.UserConcentratedSuperfluidPositionsUndelegatingResponseProtoMsg): _72.UserConcentratedSuperfluidPositionsUndelegatingResponse;
            toProto(message: _72.UserConcentratedSuperfluidPositionsUndelegatingResponse): Uint8Array;
            toProtoMsg(message: _72.UserConcentratedSuperfluidPositionsUndelegatingResponse): _72.UserConcentratedSuperfluidPositionsUndelegatingResponseProtoMsg;
        };
        QueryRestSupplyRequest: {
            typeUrl: string;
            encode(message: _72.QueryRestSupplyRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _72.QueryRestSupplyRequest;
            fromPartial(object: Partial<_72.QueryRestSupplyRequest>): _72.QueryRestSupplyRequest;
            fromAmino(object: _72.QueryRestSupplyRequestAmino): _72.QueryRestSupplyRequest;
            toAmino(message: _72.QueryRestSupplyRequest): _72.QueryRestSupplyRequestAmino;
            fromAminoMsg(object: _72.QueryRestSupplyRequestAminoMsg): _72.QueryRestSupplyRequest;
            toAminoMsg(message: _72.QueryRestSupplyRequest): _72.QueryRestSupplyRequestAminoMsg;
            fromProtoMsg(message: _72.QueryRestSupplyRequestProtoMsg): _72.QueryRestSupplyRequest;
            toProto(message: _72.QueryRestSupplyRequest): Uint8Array;
            toProtoMsg(message: _72.QueryRestSupplyRequest): _72.QueryRestSupplyRequestProtoMsg;
        };
        QueryRestSupplyResponse: {
            typeUrl: string;
            encode(message: _72.QueryRestSupplyResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _72.QueryRestSupplyResponse;
            fromPartial(object: Partial<_72.QueryRestSupplyResponse>): _72.QueryRestSupplyResponse;
            fromAmino(object: _72.QueryRestSupplyResponseAmino): _72.QueryRestSupplyResponse;
            toAmino(message: _72.QueryRestSupplyResponse): _72.QueryRestSupplyResponseAmino;
            fromAminoMsg(object: _72.QueryRestSupplyResponseAminoMsg): _72.QueryRestSupplyResponse;
            toAminoMsg(message: _72.QueryRestSupplyResponse): _72.QueryRestSupplyResponseAminoMsg;
            fromProtoMsg(message: _72.QueryRestSupplyResponseProtoMsg): _72.QueryRestSupplyResponse;
            toProto(message: _72.QueryRestSupplyResponse): Uint8Array;
            toProtoMsg(message: _72.QueryRestSupplyResponse): _72.QueryRestSupplyResponseProtoMsg;
        };
        Params: {
            typeUrl: string;
            encode(message: _71.Params, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _71.Params;
            fromPartial(object: Partial<_71.Params>): _71.Params;
            fromAmino(object: _71.ParamsAmino): _71.Params;
            toAmino(message: _71.Params): _71.ParamsAmino;
            fromAminoMsg(object: _71.ParamsAminoMsg): _71.Params;
            toAminoMsg(message: _71.Params): _71.ParamsAminoMsg;
            fromProtoMsg(message: _71.ParamsProtoMsg): _71.Params;
            toProto(message: _71.Params): Uint8Array;
            toProtoMsg(message: _71.Params): _71.ParamsProtoMsg;
        };
        GenesisState: {
            typeUrl: string;
            encode(message: _70.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _70.GenesisState;
            fromPartial(object: Partial<_70.GenesisState>): _70.GenesisState;
            fromAmino(object: _70.GenesisStateAmino): _70.GenesisState;
            toAmino(message: _70.GenesisState): _70.GenesisStateAmino;
            fromAminoMsg(object: _70.GenesisStateAminoMsg): _70.GenesisState;
            toAminoMsg(message: _70.GenesisState): _70.GenesisStateAminoMsg;
            fromProtoMsg(message: _70.GenesisStateProtoMsg): _70.GenesisState;
            toProto(message: _70.GenesisState): Uint8Array;
            toProtoMsg(message: _70.GenesisState): _70.GenesisStateProtoMsg;
        };
    };
    namespace tokenfactory {
        const v1beta1: {
            MsgClientImpl: typeof _330.MsgClientImpl;
            QueryClientImpl: typeof _315.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                params(request?: _78.QueryParamsRequest): Promise<_78.QueryParamsResponse>;
                denomAuthorityMetadata(request: _78.QueryDenomAuthorityMetadataRequest): Promise<_78.QueryDenomAuthorityMetadataResponse>;
                denomsFromCreator(request: _78.QueryDenomsFromCreatorRequest): Promise<_78.QueryDenomsFromCreatorResponse>;
                beforeSendHookAddress(request: _78.QueryBeforeSendHookAddressRequest): Promise<_78.QueryBeforeSendHookAddressResponse>;
            };
            LCDQueryClient: typeof _296.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    createDenom(value: _79.MsgCreateDenom): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    mint(value: _79.MsgMint): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    burn(value: _79.MsgBurn): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    changeAdmin(value: _79.MsgChangeAdmin): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    setDenomMetadata(value: _79.MsgSetDenomMetadata): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    setBeforeSendHook(value: _79.MsgSetBeforeSendHook): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    forceTransfer(value: _79.MsgForceTransfer): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    createDenom(value: _79.MsgCreateDenom): {
                        typeUrl: string;
                        value: _79.MsgCreateDenom;
                    };
                    mint(value: _79.MsgMint): {
                        typeUrl: string;
                        value: _79.MsgMint;
                    };
                    burn(value: _79.MsgBurn): {
                        typeUrl: string;
                        value: _79.MsgBurn;
                    };
                    changeAdmin(value: _79.MsgChangeAdmin): {
                        typeUrl: string;
                        value: _79.MsgChangeAdmin;
                    };
                    setDenomMetadata(value: _79.MsgSetDenomMetadata): {
                        typeUrl: string;
                        value: _79.MsgSetDenomMetadata;
                    };
                    setBeforeSendHook(value: _79.MsgSetBeforeSendHook): {
                        typeUrl: string;
                        value: _79.MsgSetBeforeSendHook;
                    };
                    forceTransfer(value: _79.MsgForceTransfer): {
                        typeUrl: string;
                        value: _79.MsgForceTransfer;
                    };
                };
                fromJSON: {
                    createDenom(value: any): {
                        typeUrl: string;
                        value: _79.MsgCreateDenom;
                    };
                    mint(value: any): {
                        typeUrl: string;
                        value: _79.MsgMint;
                    };
                    burn(value: any): {
                        typeUrl: string;
                        value: _79.MsgBurn;
                    };
                    changeAdmin(value: any): {
                        typeUrl: string;
                        value: _79.MsgChangeAdmin;
                    };
                    setDenomMetadata(value: any): {
                        typeUrl: string;
                        value: _79.MsgSetDenomMetadata;
                    };
                    setBeforeSendHook(value: any): {
                        typeUrl: string;
                        value: _79.MsgSetBeforeSendHook;
                    };
                    forceTransfer(value: any): {
                        typeUrl: string;
                        value: _79.MsgForceTransfer;
                    };
                };
                fromPartial: {
                    createDenom(value: _79.MsgCreateDenom): {
                        typeUrl: string;
                        value: _79.MsgCreateDenom;
                    };
                    mint(value: _79.MsgMint): {
                        typeUrl: string;
                        value: _79.MsgMint;
                    };
                    burn(value: _79.MsgBurn): {
                        typeUrl: string;
                        value: _79.MsgBurn;
                    };
                    changeAdmin(value: _79.MsgChangeAdmin): {
                        typeUrl: string;
                        value: _79.MsgChangeAdmin;
                    };
                    setDenomMetadata(value: _79.MsgSetDenomMetadata): {
                        typeUrl: string;
                        value: _79.MsgSetDenomMetadata;
                    };
                    setBeforeSendHook(value: _79.MsgSetBeforeSendHook): {
                        typeUrl: string;
                        value: _79.MsgSetBeforeSendHook;
                    };
                    forceTransfer(value: _79.MsgForceTransfer): {
                        typeUrl: string;
                        value: _79.MsgForceTransfer;
                    };
                };
            };
            AminoConverter: {
                "/osmosis.tokenfactory.v1beta1.MsgCreateDenom": {
                    aminoType: string;
                    toAmino: (message: _79.MsgCreateDenom) => _79.MsgCreateDenomAmino;
                    fromAmino: (object: _79.MsgCreateDenomAmino) => _79.MsgCreateDenom;
                };
                "/osmosis.tokenfactory.v1beta1.MsgMint": {
                    aminoType: string;
                    toAmino: (message: _79.MsgMint) => _79.MsgMintAmino;
                    fromAmino: (object: _79.MsgMintAmino) => _79.MsgMint;
                };
                "/osmosis.tokenfactory.v1beta1.MsgBurn": {
                    aminoType: string;
                    toAmino: (message: _79.MsgBurn) => _79.MsgBurnAmino;
                    fromAmino: (object: _79.MsgBurnAmino) => _79.MsgBurn;
                };
                "/osmosis.tokenfactory.v1beta1.MsgChangeAdmin": {
                    aminoType: string;
                    toAmino: (message: _79.MsgChangeAdmin) => _79.MsgChangeAdminAmino;
                    fromAmino: (object: _79.MsgChangeAdminAmino) => _79.MsgChangeAdmin;
                };
                "/osmosis.tokenfactory.v1beta1.MsgSetDenomMetadata": {
                    aminoType: string;
                    toAmino: (message: _79.MsgSetDenomMetadata) => _79.MsgSetDenomMetadataAmino;
                    fromAmino: (object: _79.MsgSetDenomMetadataAmino) => _79.MsgSetDenomMetadata;
                };
                "/osmosis.tokenfactory.v1beta1.MsgSetBeforeSendHook": {
                    aminoType: string;
                    toAmino: (message: _79.MsgSetBeforeSendHook) => _79.MsgSetBeforeSendHookAmino;
                    fromAmino: (object: _79.MsgSetBeforeSendHookAmino) => _79.MsgSetBeforeSendHook;
                };
                "/osmosis.tokenfactory.v1beta1.MsgForceTransfer": {
                    aminoType: string;
                    toAmino: (message: _79.MsgForceTransfer) => _79.MsgForceTransferAmino;
                    fromAmino: (object: _79.MsgForceTransferAmino) => _79.MsgForceTransfer;
                };
            };
            MsgCreateDenom: {
                typeUrl: string;
                encode(message: _79.MsgCreateDenom, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _79.MsgCreateDenom;
                fromPartial(object: Partial<_79.MsgCreateDenom>): _79.MsgCreateDenom;
                fromAmino(object: _79.MsgCreateDenomAmino): _79.MsgCreateDenom;
                toAmino(message: _79.MsgCreateDenom): _79.MsgCreateDenomAmino;
                fromAminoMsg(object: _79.MsgCreateDenomAminoMsg): _79.MsgCreateDenom;
                toAminoMsg(message: _79.MsgCreateDenom): _79.MsgCreateDenomAminoMsg;
                fromProtoMsg(message: _79.MsgCreateDenomProtoMsg): _79.MsgCreateDenom;
                toProto(message: _79.MsgCreateDenom): Uint8Array;
                toProtoMsg(message: _79.MsgCreateDenom): _79.MsgCreateDenomProtoMsg;
            };
            MsgCreateDenomResponse: {
                typeUrl: string;
                encode(message: _79.MsgCreateDenomResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _79.MsgCreateDenomResponse;
                fromPartial(object: Partial<_79.MsgCreateDenomResponse>): _79.MsgCreateDenomResponse;
                fromAmino(object: _79.MsgCreateDenomResponseAmino): _79.MsgCreateDenomResponse;
                toAmino(message: _79.MsgCreateDenomResponse): _79.MsgCreateDenomResponseAmino;
                fromAminoMsg(object: _79.MsgCreateDenomResponseAminoMsg): _79.MsgCreateDenomResponse;
                toAminoMsg(message: _79.MsgCreateDenomResponse): _79.MsgCreateDenomResponseAminoMsg;
                fromProtoMsg(message: _79.MsgCreateDenomResponseProtoMsg): _79.MsgCreateDenomResponse;
                toProto(message: _79.MsgCreateDenomResponse): Uint8Array;
                toProtoMsg(message: _79.MsgCreateDenomResponse): _79.MsgCreateDenomResponseProtoMsg;
            };
            MsgMint: {
                typeUrl: string;
                encode(message: _79.MsgMint, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _79.MsgMint;
                fromPartial(object: Partial<_79.MsgMint>): _79.MsgMint;
                fromAmino(object: _79.MsgMintAmino): _79.MsgMint;
                toAmino(message: _79.MsgMint): _79.MsgMintAmino;
                fromAminoMsg(object: _79.MsgMintAminoMsg): _79.MsgMint;
                toAminoMsg(message: _79.MsgMint): _79.MsgMintAminoMsg;
                fromProtoMsg(message: _79.MsgMintProtoMsg): _79.MsgMint;
                toProto(message: _79.MsgMint): Uint8Array;
                toProtoMsg(message: _79.MsgMint): _79.MsgMintProtoMsg;
            };
            MsgMintResponse: {
                typeUrl: string;
                encode(_: _79.MsgMintResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _79.MsgMintResponse;
                fromPartial(_: Partial<_79.MsgMintResponse>): _79.MsgMintResponse;
                fromAmino(_: _79.MsgMintResponseAmino): _79.MsgMintResponse;
                toAmino(_: _79.MsgMintResponse): _79.MsgMintResponseAmino;
                fromAminoMsg(object: _79.MsgMintResponseAminoMsg): _79.MsgMintResponse;
                toAminoMsg(message: _79.MsgMintResponse): _79.MsgMintResponseAminoMsg;
                fromProtoMsg(message: _79.MsgMintResponseProtoMsg): _79.MsgMintResponse;
                toProto(message: _79.MsgMintResponse): Uint8Array;
                toProtoMsg(message: _79.MsgMintResponse): _79.MsgMintResponseProtoMsg;
            };
            MsgBurn: {
                typeUrl: string;
                encode(message: _79.MsgBurn, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _79.MsgBurn;
                fromPartial(object: Partial<_79.MsgBurn>): _79.MsgBurn;
                fromAmino(object: _79.MsgBurnAmino): _79.MsgBurn;
                toAmino(message: _79.MsgBurn): _79.MsgBurnAmino;
                fromAminoMsg(object: _79.MsgBurnAminoMsg): _79.MsgBurn;
                toAminoMsg(message: _79.MsgBurn): _79.MsgBurnAminoMsg;
                fromProtoMsg(message: _79.MsgBurnProtoMsg): _79.MsgBurn;
                toProto(message: _79.MsgBurn): Uint8Array;
                toProtoMsg(message: _79.MsgBurn): _79.MsgBurnProtoMsg;
            };
            MsgBurnResponse: {
                typeUrl: string;
                encode(_: _79.MsgBurnResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _79.MsgBurnResponse;
                fromPartial(_: Partial<_79.MsgBurnResponse>): _79.MsgBurnResponse;
                fromAmino(_: _79.MsgBurnResponseAmino): _79.MsgBurnResponse;
                toAmino(_: _79.MsgBurnResponse): _79.MsgBurnResponseAmino;
                fromAminoMsg(object: _79.MsgBurnResponseAminoMsg): _79.MsgBurnResponse;
                toAminoMsg(message: _79.MsgBurnResponse): _79.MsgBurnResponseAminoMsg;
                fromProtoMsg(message: _79.MsgBurnResponseProtoMsg): _79.MsgBurnResponse;
                toProto(message: _79.MsgBurnResponse): Uint8Array;
                toProtoMsg(message: _79.MsgBurnResponse): _79.MsgBurnResponseProtoMsg;
            };
            MsgChangeAdmin: {
                typeUrl: string;
                encode(message: _79.MsgChangeAdmin, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _79.MsgChangeAdmin;
                fromPartial(object: Partial<_79.MsgChangeAdmin>): _79.MsgChangeAdmin;
                fromAmino(object: _79.MsgChangeAdminAmino): _79.MsgChangeAdmin;
                toAmino(message: _79.MsgChangeAdmin): _79.MsgChangeAdminAmino;
                fromAminoMsg(object: _79.MsgChangeAdminAminoMsg): _79.MsgChangeAdmin;
                toAminoMsg(message: _79.MsgChangeAdmin): _79.MsgChangeAdminAminoMsg;
                fromProtoMsg(message: _79.MsgChangeAdminProtoMsg): _79.MsgChangeAdmin;
                toProto(message: _79.MsgChangeAdmin): Uint8Array;
                toProtoMsg(message: _79.MsgChangeAdmin): _79.MsgChangeAdminProtoMsg;
            };
            MsgChangeAdminResponse: {
                typeUrl: string;
                encode(_: _79.MsgChangeAdminResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _79.MsgChangeAdminResponse;
                fromPartial(_: Partial<_79.MsgChangeAdminResponse>): _79.MsgChangeAdminResponse;
                fromAmino(_: _79.MsgChangeAdminResponseAmino): _79.MsgChangeAdminResponse;
                toAmino(_: _79.MsgChangeAdminResponse): _79.MsgChangeAdminResponseAmino;
                fromAminoMsg(object: _79.MsgChangeAdminResponseAminoMsg): _79.MsgChangeAdminResponse;
                toAminoMsg(message: _79.MsgChangeAdminResponse): _79.MsgChangeAdminResponseAminoMsg;
                fromProtoMsg(message: _79.MsgChangeAdminResponseProtoMsg): _79.MsgChangeAdminResponse;
                toProto(message: _79.MsgChangeAdminResponse): Uint8Array;
                toProtoMsg(message: _79.MsgChangeAdminResponse): _79.MsgChangeAdminResponseProtoMsg;
            };
            MsgSetBeforeSendHook: {
                typeUrl: string;
                encode(message: _79.MsgSetBeforeSendHook, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _79.MsgSetBeforeSendHook;
                fromPartial(object: Partial<_79.MsgSetBeforeSendHook>): _79.MsgSetBeforeSendHook;
                fromAmino(object: _79.MsgSetBeforeSendHookAmino): _79.MsgSetBeforeSendHook;
                toAmino(message: _79.MsgSetBeforeSendHook): _79.MsgSetBeforeSendHookAmino;
                fromAminoMsg(object: _79.MsgSetBeforeSendHookAminoMsg): _79.MsgSetBeforeSendHook;
                toAminoMsg(message: _79.MsgSetBeforeSendHook): _79.MsgSetBeforeSendHookAminoMsg;
                fromProtoMsg(message: _79.MsgSetBeforeSendHookProtoMsg): _79.MsgSetBeforeSendHook;
                toProto(message: _79.MsgSetBeforeSendHook): Uint8Array;
                toProtoMsg(message: _79.MsgSetBeforeSendHook): _79.MsgSetBeforeSendHookProtoMsg;
            };
            MsgSetBeforeSendHookResponse: {
                typeUrl: string;
                encode(_: _79.MsgSetBeforeSendHookResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _79.MsgSetBeforeSendHookResponse;
                fromPartial(_: Partial<_79.MsgSetBeforeSendHookResponse>): _79.MsgSetBeforeSendHookResponse;
                fromAmino(_: _79.MsgSetBeforeSendHookResponseAmino): _79.MsgSetBeforeSendHookResponse;
                toAmino(_: _79.MsgSetBeforeSendHookResponse): _79.MsgSetBeforeSendHookResponseAmino;
                fromAminoMsg(object: _79.MsgSetBeforeSendHookResponseAminoMsg): _79.MsgSetBeforeSendHookResponse;
                toAminoMsg(message: _79.MsgSetBeforeSendHookResponse): _79.MsgSetBeforeSendHookResponseAminoMsg;
                fromProtoMsg(message: _79.MsgSetBeforeSendHookResponseProtoMsg): _79.MsgSetBeforeSendHookResponse;
                toProto(message: _79.MsgSetBeforeSendHookResponse): Uint8Array;
                toProtoMsg(message: _79.MsgSetBeforeSendHookResponse): _79.MsgSetBeforeSendHookResponseProtoMsg;
            };
            MsgSetDenomMetadata: {
                typeUrl: string;
                encode(message: _79.MsgSetDenomMetadata, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _79.MsgSetDenomMetadata;
                fromPartial(object: Partial<_79.MsgSetDenomMetadata>): _79.MsgSetDenomMetadata;
                fromAmino(object: _79.MsgSetDenomMetadataAmino): _79.MsgSetDenomMetadata;
                toAmino(message: _79.MsgSetDenomMetadata): _79.MsgSetDenomMetadataAmino;
                fromAminoMsg(object: _79.MsgSetDenomMetadataAminoMsg): _79.MsgSetDenomMetadata;
                toAminoMsg(message: _79.MsgSetDenomMetadata): _79.MsgSetDenomMetadataAminoMsg;
                fromProtoMsg(message: _79.MsgSetDenomMetadataProtoMsg): _79.MsgSetDenomMetadata;
                toProto(message: _79.MsgSetDenomMetadata): Uint8Array;
                toProtoMsg(message: _79.MsgSetDenomMetadata): _79.MsgSetDenomMetadataProtoMsg;
            };
            MsgSetDenomMetadataResponse: {
                typeUrl: string;
                encode(_: _79.MsgSetDenomMetadataResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _79.MsgSetDenomMetadataResponse;
                fromPartial(_: Partial<_79.MsgSetDenomMetadataResponse>): _79.MsgSetDenomMetadataResponse;
                fromAmino(_: _79.MsgSetDenomMetadataResponseAmino): _79.MsgSetDenomMetadataResponse;
                toAmino(_: _79.MsgSetDenomMetadataResponse): _79.MsgSetDenomMetadataResponseAmino;
                fromAminoMsg(object: _79.MsgSetDenomMetadataResponseAminoMsg): _79.MsgSetDenomMetadataResponse;
                toAminoMsg(message: _79.MsgSetDenomMetadataResponse): _79.MsgSetDenomMetadataResponseAminoMsg;
                fromProtoMsg(message: _79.MsgSetDenomMetadataResponseProtoMsg): _79.MsgSetDenomMetadataResponse;
                toProto(message: _79.MsgSetDenomMetadataResponse): Uint8Array;
                toProtoMsg(message: _79.MsgSetDenomMetadataResponse): _79.MsgSetDenomMetadataResponseProtoMsg;
            };
            MsgForceTransfer: {
                typeUrl: string;
                encode(message: _79.MsgForceTransfer, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _79.MsgForceTransfer;
                fromPartial(object: Partial<_79.MsgForceTransfer>): _79.MsgForceTransfer;
                fromAmino(object: _79.MsgForceTransferAmino): _79.MsgForceTransfer;
                toAmino(message: _79.MsgForceTransfer): _79.MsgForceTransferAmino;
                fromAminoMsg(object: _79.MsgForceTransferAminoMsg): _79.MsgForceTransfer;
                toAminoMsg(message: _79.MsgForceTransfer): _79.MsgForceTransferAminoMsg;
                fromProtoMsg(message: _79.MsgForceTransferProtoMsg): _79.MsgForceTransfer;
                toProto(message: _79.MsgForceTransfer): Uint8Array;
                toProtoMsg(message: _79.MsgForceTransfer): _79.MsgForceTransferProtoMsg;
            };
            MsgForceTransferResponse: {
                typeUrl: string;
                encode(_: _79.MsgForceTransferResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _79.MsgForceTransferResponse;
                fromPartial(_: Partial<_79.MsgForceTransferResponse>): _79.MsgForceTransferResponse;
                fromAmino(_: _79.MsgForceTransferResponseAmino): _79.MsgForceTransferResponse;
                toAmino(_: _79.MsgForceTransferResponse): _79.MsgForceTransferResponseAmino;
                fromAminoMsg(object: _79.MsgForceTransferResponseAminoMsg): _79.MsgForceTransferResponse;
                toAminoMsg(message: _79.MsgForceTransferResponse): _79.MsgForceTransferResponseAminoMsg;
                fromProtoMsg(message: _79.MsgForceTransferResponseProtoMsg): _79.MsgForceTransferResponse;
                toProto(message: _79.MsgForceTransferResponse): Uint8Array;
                toProtoMsg(message: _79.MsgForceTransferResponse): _79.MsgForceTransferResponseProtoMsg;
            };
            QueryParamsRequest: {
                typeUrl: string;
                encode(_: _78.QueryParamsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _78.QueryParamsRequest;
                fromPartial(_: Partial<_78.QueryParamsRequest>): _78.QueryParamsRequest;
                fromAmino(_: _78.QueryParamsRequestAmino): _78.QueryParamsRequest;
                toAmino(_: _78.QueryParamsRequest): _78.QueryParamsRequestAmino;
                fromAminoMsg(object: _78.QueryParamsRequestAminoMsg): _78.QueryParamsRequest;
                toAminoMsg(message: _78.QueryParamsRequest): _78.QueryParamsRequestAminoMsg;
                fromProtoMsg(message: _78.QueryParamsRequestProtoMsg): _78.QueryParamsRequest;
                toProto(message: _78.QueryParamsRequest): Uint8Array;
                toProtoMsg(message: _78.QueryParamsRequest): _78.QueryParamsRequestProtoMsg;
            };
            QueryParamsResponse: {
                typeUrl: string;
                encode(message: _78.QueryParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _78.QueryParamsResponse;
                fromPartial(object: Partial<_78.QueryParamsResponse>): _78.QueryParamsResponse;
                fromAmino(object: _78.QueryParamsResponseAmino): _78.QueryParamsResponse;
                toAmino(message: _78.QueryParamsResponse): _78.QueryParamsResponseAmino;
                fromAminoMsg(object: _78.QueryParamsResponseAminoMsg): _78.QueryParamsResponse;
                toAminoMsg(message: _78.QueryParamsResponse): _78.QueryParamsResponseAminoMsg;
                fromProtoMsg(message: _78.QueryParamsResponseProtoMsg): _78.QueryParamsResponse;
                toProto(message: _78.QueryParamsResponse): Uint8Array;
                toProtoMsg(message: _78.QueryParamsResponse): _78.QueryParamsResponseProtoMsg;
            };
            QueryDenomAuthorityMetadataRequest: {
                typeUrl: string;
                encode(message: _78.QueryDenomAuthorityMetadataRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _78.QueryDenomAuthorityMetadataRequest;
                fromPartial(object: Partial<_78.QueryDenomAuthorityMetadataRequest>): _78.QueryDenomAuthorityMetadataRequest;
                fromAmino(object: _78.QueryDenomAuthorityMetadataRequestAmino): _78.QueryDenomAuthorityMetadataRequest;
                toAmino(message: _78.QueryDenomAuthorityMetadataRequest): _78.QueryDenomAuthorityMetadataRequestAmino;
                fromAminoMsg(object: _78.QueryDenomAuthorityMetadataRequestAminoMsg): _78.QueryDenomAuthorityMetadataRequest;
                toAminoMsg(message: _78.QueryDenomAuthorityMetadataRequest): _78.QueryDenomAuthorityMetadataRequestAminoMsg;
                fromProtoMsg(message: _78.QueryDenomAuthorityMetadataRequestProtoMsg): _78.QueryDenomAuthorityMetadataRequest;
                toProto(message: _78.QueryDenomAuthorityMetadataRequest): Uint8Array;
                toProtoMsg(message: _78.QueryDenomAuthorityMetadataRequest): _78.QueryDenomAuthorityMetadataRequestProtoMsg;
            };
            QueryDenomAuthorityMetadataResponse: {
                typeUrl: string;
                encode(message: _78.QueryDenomAuthorityMetadataResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _78.QueryDenomAuthorityMetadataResponse;
                fromPartial(object: Partial<_78.QueryDenomAuthorityMetadataResponse>): _78.QueryDenomAuthorityMetadataResponse;
                fromAmino(object: _78.QueryDenomAuthorityMetadataResponseAmino): _78.QueryDenomAuthorityMetadataResponse;
                toAmino(message: _78.QueryDenomAuthorityMetadataResponse): _78.QueryDenomAuthorityMetadataResponseAmino;
                fromAminoMsg(object: _78.QueryDenomAuthorityMetadataResponseAminoMsg): _78.QueryDenomAuthorityMetadataResponse;
                toAminoMsg(message: _78.QueryDenomAuthorityMetadataResponse): _78.QueryDenomAuthorityMetadataResponseAminoMsg;
                fromProtoMsg(message: _78.QueryDenomAuthorityMetadataResponseProtoMsg): _78.QueryDenomAuthorityMetadataResponse;
                toProto(message: _78.QueryDenomAuthorityMetadataResponse): Uint8Array;
                toProtoMsg(message: _78.QueryDenomAuthorityMetadataResponse): _78.QueryDenomAuthorityMetadataResponseProtoMsg;
            };
            QueryDenomsFromCreatorRequest: {
                typeUrl: string;
                encode(message: _78.QueryDenomsFromCreatorRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _78.QueryDenomsFromCreatorRequest;
                fromPartial(object: Partial<_78.QueryDenomsFromCreatorRequest>): _78.QueryDenomsFromCreatorRequest;
                fromAmino(object: _78.QueryDenomsFromCreatorRequestAmino): _78.QueryDenomsFromCreatorRequest;
                toAmino(message: _78.QueryDenomsFromCreatorRequest): _78.QueryDenomsFromCreatorRequestAmino;
                fromAminoMsg(object: _78.QueryDenomsFromCreatorRequestAminoMsg): _78.QueryDenomsFromCreatorRequest;
                toAminoMsg(message: _78.QueryDenomsFromCreatorRequest): _78.QueryDenomsFromCreatorRequestAminoMsg;
                fromProtoMsg(message: _78.QueryDenomsFromCreatorRequestProtoMsg): _78.QueryDenomsFromCreatorRequest;
                toProto(message: _78.QueryDenomsFromCreatorRequest): Uint8Array;
                toProtoMsg(message: _78.QueryDenomsFromCreatorRequest): _78.QueryDenomsFromCreatorRequestProtoMsg;
            };
            QueryDenomsFromCreatorResponse: {
                typeUrl: string;
                encode(message: _78.QueryDenomsFromCreatorResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _78.QueryDenomsFromCreatorResponse;
                fromPartial(object: Partial<_78.QueryDenomsFromCreatorResponse>): _78.QueryDenomsFromCreatorResponse;
                fromAmino(object: _78.QueryDenomsFromCreatorResponseAmino): _78.QueryDenomsFromCreatorResponse;
                toAmino(message: _78.QueryDenomsFromCreatorResponse): _78.QueryDenomsFromCreatorResponseAmino;
                fromAminoMsg(object: _78.QueryDenomsFromCreatorResponseAminoMsg): _78.QueryDenomsFromCreatorResponse;
                toAminoMsg(message: _78.QueryDenomsFromCreatorResponse): _78.QueryDenomsFromCreatorResponseAminoMsg;
                fromProtoMsg(message: _78.QueryDenomsFromCreatorResponseProtoMsg): _78.QueryDenomsFromCreatorResponse;
                toProto(message: _78.QueryDenomsFromCreatorResponse): Uint8Array;
                toProtoMsg(message: _78.QueryDenomsFromCreatorResponse): _78.QueryDenomsFromCreatorResponseProtoMsg;
            };
            QueryBeforeSendHookAddressRequest: {
                typeUrl: string;
                encode(message: _78.QueryBeforeSendHookAddressRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _78.QueryBeforeSendHookAddressRequest;
                fromPartial(object: Partial<_78.QueryBeforeSendHookAddressRequest>): _78.QueryBeforeSendHookAddressRequest;
                fromAmino(object: _78.QueryBeforeSendHookAddressRequestAmino): _78.QueryBeforeSendHookAddressRequest;
                toAmino(message: _78.QueryBeforeSendHookAddressRequest): _78.QueryBeforeSendHookAddressRequestAmino;
                fromAminoMsg(object: _78.QueryBeforeSendHookAddressRequestAminoMsg): _78.QueryBeforeSendHookAddressRequest;
                toAminoMsg(message: _78.QueryBeforeSendHookAddressRequest): _78.QueryBeforeSendHookAddressRequestAminoMsg;
                fromProtoMsg(message: _78.QueryBeforeSendHookAddressRequestProtoMsg): _78.QueryBeforeSendHookAddressRequest;
                toProto(message: _78.QueryBeforeSendHookAddressRequest): Uint8Array;
                toProtoMsg(message: _78.QueryBeforeSendHookAddressRequest): _78.QueryBeforeSendHookAddressRequestProtoMsg;
            };
            QueryBeforeSendHookAddressResponse: {
                typeUrl: string;
                encode(message: _78.QueryBeforeSendHookAddressResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _78.QueryBeforeSendHookAddressResponse;
                fromPartial(object: Partial<_78.QueryBeforeSendHookAddressResponse>): _78.QueryBeforeSendHookAddressResponse;
                fromAmino(object: _78.QueryBeforeSendHookAddressResponseAmino): _78.QueryBeforeSendHookAddressResponse;
                toAmino(message: _78.QueryBeforeSendHookAddressResponse): _78.QueryBeforeSendHookAddressResponseAmino;
                fromAminoMsg(object: _78.QueryBeforeSendHookAddressResponseAminoMsg): _78.QueryBeforeSendHookAddressResponse;
                toAminoMsg(message: _78.QueryBeforeSendHookAddressResponse): _78.QueryBeforeSendHookAddressResponseAminoMsg;
                fromProtoMsg(message: _78.QueryBeforeSendHookAddressResponseProtoMsg): _78.QueryBeforeSendHookAddressResponse;
                toProto(message: _78.QueryBeforeSendHookAddressResponse): Uint8Array;
                toProtoMsg(message: _78.QueryBeforeSendHookAddressResponse): _78.QueryBeforeSendHookAddressResponseProtoMsg;
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
                encode(message: _76.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _76.GenesisState;
                fromPartial(object: Partial<_76.GenesisState>): _76.GenesisState;
                fromAmino(object: _76.GenesisStateAmino): _76.GenesisState;
                toAmino(message: _76.GenesisState): _76.GenesisStateAmino;
                fromAminoMsg(object: _76.GenesisStateAminoMsg): _76.GenesisState;
                toAminoMsg(message: _76.GenesisState): _76.GenesisStateAminoMsg;
                fromProtoMsg(message: _76.GenesisStateProtoMsg): _76.GenesisState;
                toProto(message: _76.GenesisState): Uint8Array;
                toProtoMsg(message: _76.GenesisState): _76.GenesisStateProtoMsg;
            };
            GenesisDenom: {
                typeUrl: string;
                encode(message: _76.GenesisDenom, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _76.GenesisDenom;
                fromPartial(object: Partial<_76.GenesisDenom>): _76.GenesisDenom;
                fromAmino(object: _76.GenesisDenomAmino): _76.GenesisDenom;
                toAmino(message: _76.GenesisDenom): _76.GenesisDenomAmino;
                fromAminoMsg(object: _76.GenesisDenomAminoMsg): _76.GenesisDenom;
                toAminoMsg(message: _76.GenesisDenom): _76.GenesisDenomAminoMsg;
                fromProtoMsg(message: _76.GenesisDenomProtoMsg): _76.GenesisDenom;
                toProto(message: _76.GenesisDenom): Uint8Array;
                toProtoMsg(message: _76.GenesisDenom): _76.GenesisDenomProtoMsg;
            };
            DenomAuthorityMetadata: {
                typeUrl: string;
                encode(message: _75.DenomAuthorityMetadata, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _75.DenomAuthorityMetadata;
                fromPartial(object: Partial<_75.DenomAuthorityMetadata>): _75.DenomAuthorityMetadata;
                fromAmino(object: _75.DenomAuthorityMetadataAmino): _75.DenomAuthorityMetadata;
                toAmino(message: _75.DenomAuthorityMetadata): _75.DenomAuthorityMetadataAmino;
                fromAminoMsg(object: _75.DenomAuthorityMetadataAminoMsg): _75.DenomAuthorityMetadata;
                toAminoMsg(message: _75.DenomAuthorityMetadata): _75.DenomAuthorityMetadataAminoMsg;
                fromProtoMsg(message: _75.DenomAuthorityMetadataProtoMsg): _75.DenomAuthorityMetadata;
                toProto(message: _75.DenomAuthorityMetadata): Uint8Array;
                toProtoMsg(message: _75.DenomAuthorityMetadata): _75.DenomAuthorityMetadataProtoMsg;
            };
        };
    }
    namespace twap {
        const v1beta1: {
            QueryClientImpl: typeof _316.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                params(request?: _81.ParamsRequest): Promise<_81.ParamsResponse>;
                arithmeticTwap(request: _81.ArithmeticTwapRequest): Promise<_81.ArithmeticTwapResponse>;
                arithmeticTwapToNow(request: _81.ArithmeticTwapToNowRequest): Promise<_81.ArithmeticTwapToNowResponse>;
                geometricTwap(request: _81.GeometricTwapRequest): Promise<_81.GeometricTwapResponse>;
                geometricTwapToNow(request: _81.GeometricTwapToNowRequest): Promise<_81.GeometricTwapToNowResponse>;
            };
            LCDQueryClient: typeof _297.LCDQueryClient;
            TwapRecord: {
                typeUrl: string;
                encode(message: _82.TwapRecord, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _82.TwapRecord;
                fromPartial(object: Partial<_82.TwapRecord>): _82.TwapRecord;
                fromAmino(object: _82.TwapRecordAmino): _82.TwapRecord;
                toAmino(message: _82.TwapRecord): _82.TwapRecordAmino;
                fromAminoMsg(object: _82.TwapRecordAminoMsg): _82.TwapRecord;
                toAminoMsg(message: _82.TwapRecord): _82.TwapRecordAminoMsg;
                fromProtoMsg(message: _82.TwapRecordProtoMsg): _82.TwapRecord;
                toProto(message: _82.TwapRecord): Uint8Array;
                toProtoMsg(message: _82.TwapRecord): _82.TwapRecordProtoMsg;
            };
            ArithmeticTwapRequest: {
                typeUrl: string;
                encode(message: _81.ArithmeticTwapRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _81.ArithmeticTwapRequest;
                fromPartial(object: Partial<_81.ArithmeticTwapRequest>): _81.ArithmeticTwapRequest;
                fromAmino(object: _81.ArithmeticTwapRequestAmino): _81.ArithmeticTwapRequest;
                toAmino(message: _81.ArithmeticTwapRequest): _81.ArithmeticTwapRequestAmino;
                fromAminoMsg(object: _81.ArithmeticTwapRequestAminoMsg): _81.ArithmeticTwapRequest;
                toAminoMsg(message: _81.ArithmeticTwapRequest): _81.ArithmeticTwapRequestAminoMsg;
                fromProtoMsg(message: _81.ArithmeticTwapRequestProtoMsg): _81.ArithmeticTwapRequest;
                toProto(message: _81.ArithmeticTwapRequest): Uint8Array;
                toProtoMsg(message: _81.ArithmeticTwapRequest): _81.ArithmeticTwapRequestProtoMsg;
            };
            ArithmeticTwapResponse: {
                typeUrl: string;
                encode(message: _81.ArithmeticTwapResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _81.ArithmeticTwapResponse;
                fromPartial(object: Partial<_81.ArithmeticTwapResponse>): _81.ArithmeticTwapResponse;
                fromAmino(object: _81.ArithmeticTwapResponseAmino): _81.ArithmeticTwapResponse;
                toAmino(message: _81.ArithmeticTwapResponse): _81.ArithmeticTwapResponseAmino;
                fromAminoMsg(object: _81.ArithmeticTwapResponseAminoMsg): _81.ArithmeticTwapResponse;
                toAminoMsg(message: _81.ArithmeticTwapResponse): _81.ArithmeticTwapResponseAminoMsg;
                fromProtoMsg(message: _81.ArithmeticTwapResponseProtoMsg): _81.ArithmeticTwapResponse;
                toProto(message: _81.ArithmeticTwapResponse): Uint8Array;
                toProtoMsg(message: _81.ArithmeticTwapResponse): _81.ArithmeticTwapResponseProtoMsg;
            };
            ArithmeticTwapToNowRequest: {
                typeUrl: string;
                encode(message: _81.ArithmeticTwapToNowRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _81.ArithmeticTwapToNowRequest;
                fromPartial(object: Partial<_81.ArithmeticTwapToNowRequest>): _81.ArithmeticTwapToNowRequest;
                fromAmino(object: _81.ArithmeticTwapToNowRequestAmino): _81.ArithmeticTwapToNowRequest;
                toAmino(message: _81.ArithmeticTwapToNowRequest): _81.ArithmeticTwapToNowRequestAmino;
                fromAminoMsg(object: _81.ArithmeticTwapToNowRequestAminoMsg): _81.ArithmeticTwapToNowRequest;
                toAminoMsg(message: _81.ArithmeticTwapToNowRequest): _81.ArithmeticTwapToNowRequestAminoMsg;
                fromProtoMsg(message: _81.ArithmeticTwapToNowRequestProtoMsg): _81.ArithmeticTwapToNowRequest;
                toProto(message: _81.ArithmeticTwapToNowRequest): Uint8Array;
                toProtoMsg(message: _81.ArithmeticTwapToNowRequest): _81.ArithmeticTwapToNowRequestProtoMsg;
            };
            ArithmeticTwapToNowResponse: {
                typeUrl: string;
                encode(message: _81.ArithmeticTwapToNowResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _81.ArithmeticTwapToNowResponse;
                fromPartial(object: Partial<_81.ArithmeticTwapToNowResponse>): _81.ArithmeticTwapToNowResponse;
                fromAmino(object: _81.ArithmeticTwapToNowResponseAmino): _81.ArithmeticTwapToNowResponse;
                toAmino(message: _81.ArithmeticTwapToNowResponse): _81.ArithmeticTwapToNowResponseAmino;
                fromAminoMsg(object: _81.ArithmeticTwapToNowResponseAminoMsg): _81.ArithmeticTwapToNowResponse;
                toAminoMsg(message: _81.ArithmeticTwapToNowResponse): _81.ArithmeticTwapToNowResponseAminoMsg;
                fromProtoMsg(message: _81.ArithmeticTwapToNowResponseProtoMsg): _81.ArithmeticTwapToNowResponse;
                toProto(message: _81.ArithmeticTwapToNowResponse): Uint8Array;
                toProtoMsg(message: _81.ArithmeticTwapToNowResponse): _81.ArithmeticTwapToNowResponseProtoMsg;
            };
            GeometricTwapRequest: {
                typeUrl: string;
                encode(message: _81.GeometricTwapRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _81.GeometricTwapRequest;
                fromPartial(object: Partial<_81.GeometricTwapRequest>): _81.GeometricTwapRequest;
                fromAmino(object: _81.GeometricTwapRequestAmino): _81.GeometricTwapRequest;
                toAmino(message: _81.GeometricTwapRequest): _81.GeometricTwapRequestAmino;
                fromAminoMsg(object: _81.GeometricTwapRequestAminoMsg): _81.GeometricTwapRequest;
                toAminoMsg(message: _81.GeometricTwapRequest): _81.GeometricTwapRequestAminoMsg;
                fromProtoMsg(message: _81.GeometricTwapRequestProtoMsg): _81.GeometricTwapRequest;
                toProto(message: _81.GeometricTwapRequest): Uint8Array;
                toProtoMsg(message: _81.GeometricTwapRequest): _81.GeometricTwapRequestProtoMsg;
            };
            GeometricTwapResponse: {
                typeUrl: string;
                encode(message: _81.GeometricTwapResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _81.GeometricTwapResponse;
                fromPartial(object: Partial<_81.GeometricTwapResponse>): _81.GeometricTwapResponse;
                fromAmino(object: _81.GeometricTwapResponseAmino): _81.GeometricTwapResponse;
                toAmino(message: _81.GeometricTwapResponse): _81.GeometricTwapResponseAmino;
                fromAminoMsg(object: _81.GeometricTwapResponseAminoMsg): _81.GeometricTwapResponse;
                toAminoMsg(message: _81.GeometricTwapResponse): _81.GeometricTwapResponseAminoMsg;
                fromProtoMsg(message: _81.GeometricTwapResponseProtoMsg): _81.GeometricTwapResponse;
                toProto(message: _81.GeometricTwapResponse): Uint8Array;
                toProtoMsg(message: _81.GeometricTwapResponse): _81.GeometricTwapResponseProtoMsg;
            };
            GeometricTwapToNowRequest: {
                typeUrl: string;
                encode(message: _81.GeometricTwapToNowRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _81.GeometricTwapToNowRequest;
                fromPartial(object: Partial<_81.GeometricTwapToNowRequest>): _81.GeometricTwapToNowRequest;
                fromAmino(object: _81.GeometricTwapToNowRequestAmino): _81.GeometricTwapToNowRequest;
                toAmino(message: _81.GeometricTwapToNowRequest): _81.GeometricTwapToNowRequestAmino;
                fromAminoMsg(object: _81.GeometricTwapToNowRequestAminoMsg): _81.GeometricTwapToNowRequest;
                toAminoMsg(message: _81.GeometricTwapToNowRequest): _81.GeometricTwapToNowRequestAminoMsg;
                fromProtoMsg(message: _81.GeometricTwapToNowRequestProtoMsg): _81.GeometricTwapToNowRequest;
                toProto(message: _81.GeometricTwapToNowRequest): Uint8Array;
                toProtoMsg(message: _81.GeometricTwapToNowRequest): _81.GeometricTwapToNowRequestProtoMsg;
            };
            GeometricTwapToNowResponse: {
                typeUrl: string;
                encode(message: _81.GeometricTwapToNowResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _81.GeometricTwapToNowResponse;
                fromPartial(object: Partial<_81.GeometricTwapToNowResponse>): _81.GeometricTwapToNowResponse;
                fromAmino(object: _81.GeometricTwapToNowResponseAmino): _81.GeometricTwapToNowResponse;
                toAmino(message: _81.GeometricTwapToNowResponse): _81.GeometricTwapToNowResponseAmino;
                fromAminoMsg(object: _81.GeometricTwapToNowResponseAminoMsg): _81.GeometricTwapToNowResponse;
                toAminoMsg(message: _81.GeometricTwapToNowResponse): _81.GeometricTwapToNowResponseAminoMsg;
                fromProtoMsg(message: _81.GeometricTwapToNowResponseProtoMsg): _81.GeometricTwapToNowResponse;
                toProto(message: _81.GeometricTwapToNowResponse): Uint8Array;
                toProtoMsg(message: _81.GeometricTwapToNowResponse): _81.GeometricTwapToNowResponseProtoMsg;
            };
            ParamsRequest: {
                typeUrl: string;
                encode(_: _81.ParamsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _81.ParamsRequest;
                fromPartial(_: Partial<_81.ParamsRequest>): _81.ParamsRequest;
                fromAmino(_: _81.ParamsRequestAmino): _81.ParamsRequest;
                toAmino(_: _81.ParamsRequest): _81.ParamsRequestAmino;
                fromAminoMsg(object: _81.ParamsRequestAminoMsg): _81.ParamsRequest;
                toAminoMsg(message: _81.ParamsRequest): _81.ParamsRequestAminoMsg;
                fromProtoMsg(message: _81.ParamsRequestProtoMsg): _81.ParamsRequest;
                toProto(message: _81.ParamsRequest): Uint8Array;
                toProtoMsg(message: _81.ParamsRequest): _81.ParamsRequestProtoMsg;
            };
            ParamsResponse: {
                typeUrl: string;
                encode(message: _81.ParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _81.ParamsResponse;
                fromPartial(object: Partial<_81.ParamsResponse>): _81.ParamsResponse;
                fromAmino(object: _81.ParamsResponseAmino): _81.ParamsResponse;
                toAmino(message: _81.ParamsResponse): _81.ParamsResponseAmino;
                fromAminoMsg(object: _81.ParamsResponseAminoMsg): _81.ParamsResponse;
                toAminoMsg(message: _81.ParamsResponse): _81.ParamsResponseAminoMsg;
                fromProtoMsg(message: _81.ParamsResponseProtoMsg): _81.ParamsResponse;
                toProto(message: _81.ParamsResponse): Uint8Array;
                toProtoMsg(message: _81.ParamsResponse): _81.ParamsResponseProtoMsg;
            };
            Params: {
                typeUrl: string;
                encode(message: _80.Params, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _80.Params;
                fromPartial(object: Partial<_80.Params>): _80.Params;
                fromAmino(object: _80.ParamsAmino): _80.Params;
                toAmino(message: _80.Params): _80.ParamsAmino;
                fromAminoMsg(object: _80.ParamsAminoMsg): _80.Params;
                toAminoMsg(message: _80.Params): _80.ParamsAminoMsg;
                fromProtoMsg(message: _80.ParamsProtoMsg): _80.Params;
                toProto(message: _80.Params): Uint8Array;
                toProtoMsg(message: _80.Params): _80.ParamsProtoMsg;
            };
            GenesisState: {
                typeUrl: string;
                encode(message: _80.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _80.GenesisState;
                fromPartial(object: Partial<_80.GenesisState>): _80.GenesisState;
                fromAmino(object: _80.GenesisStateAmino): _80.GenesisState;
                toAmino(message: _80.GenesisState): _80.GenesisStateAmino;
                fromAminoMsg(object: _80.GenesisStateAminoMsg): _80.GenesisState;
                toAminoMsg(message: _80.GenesisState): _80.GenesisStateAminoMsg;
                fromProtoMsg(message: _80.GenesisStateProtoMsg): _80.GenesisState;
                toProto(message: _80.GenesisState): Uint8Array;
                toProtoMsg(message: _80.GenesisState): _80.GenesisStateProtoMsg;
            };
        };
    }
    namespace txfees {
        const v1beta1: {
            QueryClientImpl: typeof _317.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                feeTokens(request?: _86.QueryFeeTokensRequest): Promise<_86.QueryFeeTokensResponse>;
                denomSpotPrice(request: _86.QueryDenomSpotPriceRequest): Promise<_86.QueryDenomSpotPriceResponse>;
                denomPoolId(request: _86.QueryDenomPoolIdRequest): Promise<_86.QueryDenomPoolIdResponse>;
                baseDenom(request?: _86.QueryBaseDenomRequest): Promise<_86.QueryBaseDenomResponse>;
                getEipBaseFee(request?: _86.QueryEipBaseFeeRequest): Promise<_86.QueryEipBaseFeeResponse>;
            };
            LCDQueryClient: typeof _298.LCDQueryClient;
            QueryFeeTokensRequest: {
                typeUrl: string;
                encode(_: _86.QueryFeeTokensRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _86.QueryFeeTokensRequest;
                fromPartial(_: Partial<_86.QueryFeeTokensRequest>): _86.QueryFeeTokensRequest;
                fromAmino(_: _86.QueryFeeTokensRequestAmino): _86.QueryFeeTokensRequest;
                toAmino(_: _86.QueryFeeTokensRequest): _86.QueryFeeTokensRequestAmino;
                fromAminoMsg(object: _86.QueryFeeTokensRequestAminoMsg): _86.QueryFeeTokensRequest;
                toAminoMsg(message: _86.QueryFeeTokensRequest): _86.QueryFeeTokensRequestAminoMsg;
                fromProtoMsg(message: _86.QueryFeeTokensRequestProtoMsg): _86.QueryFeeTokensRequest;
                toProto(message: _86.QueryFeeTokensRequest): Uint8Array;
                toProtoMsg(message: _86.QueryFeeTokensRequest): _86.QueryFeeTokensRequestProtoMsg;
            };
            QueryFeeTokensResponse: {
                typeUrl: string;
                encode(message: _86.QueryFeeTokensResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _86.QueryFeeTokensResponse;
                fromPartial(object: Partial<_86.QueryFeeTokensResponse>): _86.QueryFeeTokensResponse;
                fromAmino(object: _86.QueryFeeTokensResponseAmino): _86.QueryFeeTokensResponse;
                toAmino(message: _86.QueryFeeTokensResponse): _86.QueryFeeTokensResponseAmino;
                fromAminoMsg(object: _86.QueryFeeTokensResponseAminoMsg): _86.QueryFeeTokensResponse;
                toAminoMsg(message: _86.QueryFeeTokensResponse): _86.QueryFeeTokensResponseAminoMsg;
                fromProtoMsg(message: _86.QueryFeeTokensResponseProtoMsg): _86.QueryFeeTokensResponse;
                toProto(message: _86.QueryFeeTokensResponse): Uint8Array;
                toProtoMsg(message: _86.QueryFeeTokensResponse): _86.QueryFeeTokensResponseProtoMsg;
            };
            QueryDenomSpotPriceRequest: {
                typeUrl: string;
                encode(message: _86.QueryDenomSpotPriceRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _86.QueryDenomSpotPriceRequest;
                fromPartial(object: Partial<_86.QueryDenomSpotPriceRequest>): _86.QueryDenomSpotPriceRequest;
                fromAmino(object: _86.QueryDenomSpotPriceRequestAmino): _86.QueryDenomSpotPriceRequest;
                toAmino(message: _86.QueryDenomSpotPriceRequest): _86.QueryDenomSpotPriceRequestAmino;
                fromAminoMsg(object: _86.QueryDenomSpotPriceRequestAminoMsg): _86.QueryDenomSpotPriceRequest;
                toAminoMsg(message: _86.QueryDenomSpotPriceRequest): _86.QueryDenomSpotPriceRequestAminoMsg;
                fromProtoMsg(message: _86.QueryDenomSpotPriceRequestProtoMsg): _86.QueryDenomSpotPriceRequest;
                toProto(message: _86.QueryDenomSpotPriceRequest): Uint8Array;
                toProtoMsg(message: _86.QueryDenomSpotPriceRequest): _86.QueryDenomSpotPriceRequestProtoMsg;
            };
            QueryDenomSpotPriceResponse: {
                typeUrl: string;
                encode(message: _86.QueryDenomSpotPriceResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _86.QueryDenomSpotPriceResponse;
                fromPartial(object: Partial<_86.QueryDenomSpotPriceResponse>): _86.QueryDenomSpotPriceResponse;
                fromAmino(object: _86.QueryDenomSpotPriceResponseAmino): _86.QueryDenomSpotPriceResponse;
                toAmino(message: _86.QueryDenomSpotPriceResponse): _86.QueryDenomSpotPriceResponseAmino;
                fromAminoMsg(object: _86.QueryDenomSpotPriceResponseAminoMsg): _86.QueryDenomSpotPriceResponse;
                toAminoMsg(message: _86.QueryDenomSpotPriceResponse): _86.QueryDenomSpotPriceResponseAminoMsg;
                fromProtoMsg(message: _86.QueryDenomSpotPriceResponseProtoMsg): _86.QueryDenomSpotPriceResponse;
                toProto(message: _86.QueryDenomSpotPriceResponse): Uint8Array;
                toProtoMsg(message: _86.QueryDenomSpotPriceResponse): _86.QueryDenomSpotPriceResponseProtoMsg;
            };
            QueryDenomPoolIdRequest: {
                typeUrl: string;
                encode(message: _86.QueryDenomPoolIdRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _86.QueryDenomPoolIdRequest;
                fromPartial(object: Partial<_86.QueryDenomPoolIdRequest>): _86.QueryDenomPoolIdRequest;
                fromAmino(object: _86.QueryDenomPoolIdRequestAmino): _86.QueryDenomPoolIdRequest;
                toAmino(message: _86.QueryDenomPoolIdRequest): _86.QueryDenomPoolIdRequestAmino;
                fromAminoMsg(object: _86.QueryDenomPoolIdRequestAminoMsg): _86.QueryDenomPoolIdRequest;
                toAminoMsg(message: _86.QueryDenomPoolIdRequest): _86.QueryDenomPoolIdRequestAminoMsg;
                fromProtoMsg(message: _86.QueryDenomPoolIdRequestProtoMsg): _86.QueryDenomPoolIdRequest;
                toProto(message: _86.QueryDenomPoolIdRequest): Uint8Array;
                toProtoMsg(message: _86.QueryDenomPoolIdRequest): _86.QueryDenomPoolIdRequestProtoMsg;
            };
            QueryDenomPoolIdResponse: {
                typeUrl: string;
                encode(message: _86.QueryDenomPoolIdResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _86.QueryDenomPoolIdResponse;
                fromPartial(object: Partial<_86.QueryDenomPoolIdResponse>): _86.QueryDenomPoolIdResponse;
                fromAmino(object: _86.QueryDenomPoolIdResponseAmino): _86.QueryDenomPoolIdResponse;
                toAmino(message: _86.QueryDenomPoolIdResponse): _86.QueryDenomPoolIdResponseAmino;
                fromAminoMsg(object: _86.QueryDenomPoolIdResponseAminoMsg): _86.QueryDenomPoolIdResponse;
                toAminoMsg(message: _86.QueryDenomPoolIdResponse): _86.QueryDenomPoolIdResponseAminoMsg;
                fromProtoMsg(message: _86.QueryDenomPoolIdResponseProtoMsg): _86.QueryDenomPoolIdResponse;
                toProto(message: _86.QueryDenomPoolIdResponse): Uint8Array;
                toProtoMsg(message: _86.QueryDenomPoolIdResponse): _86.QueryDenomPoolIdResponseProtoMsg;
            };
            QueryBaseDenomRequest: {
                typeUrl: string;
                encode(_: _86.QueryBaseDenomRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _86.QueryBaseDenomRequest;
                fromPartial(_: Partial<_86.QueryBaseDenomRequest>): _86.QueryBaseDenomRequest;
                fromAmino(_: _86.QueryBaseDenomRequestAmino): _86.QueryBaseDenomRequest;
                toAmino(_: _86.QueryBaseDenomRequest): _86.QueryBaseDenomRequestAmino;
                fromAminoMsg(object: _86.QueryBaseDenomRequestAminoMsg): _86.QueryBaseDenomRequest;
                toAminoMsg(message: _86.QueryBaseDenomRequest): _86.QueryBaseDenomRequestAminoMsg;
                fromProtoMsg(message: _86.QueryBaseDenomRequestProtoMsg): _86.QueryBaseDenomRequest;
                toProto(message: _86.QueryBaseDenomRequest): Uint8Array;
                toProtoMsg(message: _86.QueryBaseDenomRequest): _86.QueryBaseDenomRequestProtoMsg;
            };
            QueryBaseDenomResponse: {
                typeUrl: string;
                encode(message: _86.QueryBaseDenomResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _86.QueryBaseDenomResponse;
                fromPartial(object: Partial<_86.QueryBaseDenomResponse>): _86.QueryBaseDenomResponse;
                fromAmino(object: _86.QueryBaseDenomResponseAmino): _86.QueryBaseDenomResponse;
                toAmino(message: _86.QueryBaseDenomResponse): _86.QueryBaseDenomResponseAmino;
                fromAminoMsg(object: _86.QueryBaseDenomResponseAminoMsg): _86.QueryBaseDenomResponse;
                toAminoMsg(message: _86.QueryBaseDenomResponse): _86.QueryBaseDenomResponseAminoMsg;
                fromProtoMsg(message: _86.QueryBaseDenomResponseProtoMsg): _86.QueryBaseDenomResponse;
                toProto(message: _86.QueryBaseDenomResponse): Uint8Array;
                toProtoMsg(message: _86.QueryBaseDenomResponse): _86.QueryBaseDenomResponseProtoMsg;
            };
            QueryEipBaseFeeRequest: {
                typeUrl: string;
                encode(_: _86.QueryEipBaseFeeRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _86.QueryEipBaseFeeRequest;
                fromPartial(_: Partial<_86.QueryEipBaseFeeRequest>): _86.QueryEipBaseFeeRequest;
                fromAmino(_: _86.QueryEipBaseFeeRequestAmino): _86.QueryEipBaseFeeRequest;
                toAmino(_: _86.QueryEipBaseFeeRequest): _86.QueryEipBaseFeeRequestAmino;
                fromAminoMsg(object: _86.QueryEipBaseFeeRequestAminoMsg): _86.QueryEipBaseFeeRequest;
                toAminoMsg(message: _86.QueryEipBaseFeeRequest): _86.QueryEipBaseFeeRequestAminoMsg;
                fromProtoMsg(message: _86.QueryEipBaseFeeRequestProtoMsg): _86.QueryEipBaseFeeRequest;
                toProto(message: _86.QueryEipBaseFeeRequest): Uint8Array;
                toProtoMsg(message: _86.QueryEipBaseFeeRequest): _86.QueryEipBaseFeeRequestProtoMsg;
            };
            QueryEipBaseFeeResponse: {
                typeUrl: string;
                encode(message: _86.QueryEipBaseFeeResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _86.QueryEipBaseFeeResponse;
                fromPartial(object: Partial<_86.QueryEipBaseFeeResponse>): _86.QueryEipBaseFeeResponse;
                fromAmino(object: _86.QueryEipBaseFeeResponseAmino): _86.QueryEipBaseFeeResponse;
                toAmino(message: _86.QueryEipBaseFeeResponse): _86.QueryEipBaseFeeResponseAmino;
                fromAminoMsg(object: _86.QueryEipBaseFeeResponseAminoMsg): _86.QueryEipBaseFeeResponse;
                toAminoMsg(message: _86.QueryEipBaseFeeResponse): _86.QueryEipBaseFeeResponseAminoMsg;
                fromProtoMsg(message: _86.QueryEipBaseFeeResponseProtoMsg): _86.QueryEipBaseFeeResponse;
                toProto(message: _86.QueryEipBaseFeeResponse): Uint8Array;
                toProtoMsg(message: _86.QueryEipBaseFeeResponse): _86.QueryEipBaseFeeResponseProtoMsg;
            };
            UpdateFeeTokenProposal: {
                typeUrl: string;
                encode(message: _85.UpdateFeeTokenProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _85.UpdateFeeTokenProposal;
                fromPartial(object: Partial<_85.UpdateFeeTokenProposal>): _85.UpdateFeeTokenProposal;
                fromAmino(object: _85.UpdateFeeTokenProposalAmino): _85.UpdateFeeTokenProposal;
                toAmino(message: _85.UpdateFeeTokenProposal): _85.UpdateFeeTokenProposalAmino;
                fromAminoMsg(object: _85.UpdateFeeTokenProposalAminoMsg): _85.UpdateFeeTokenProposal;
                toAminoMsg(message: _85.UpdateFeeTokenProposal): _85.UpdateFeeTokenProposalAminoMsg;
                fromProtoMsg(message: _85.UpdateFeeTokenProposalProtoMsg): _85.UpdateFeeTokenProposal;
                toProto(message: _85.UpdateFeeTokenProposal): Uint8Array;
                toProtoMsg(message: _85.UpdateFeeTokenProposal): _85.UpdateFeeTokenProposalProtoMsg;
            };
            GenesisState: {
                typeUrl: string;
                encode(message: _84.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _84.GenesisState;
                fromPartial(object: Partial<_84.GenesisState>): _84.GenesisState;
                fromAmino(object: _84.GenesisStateAmino): _84.GenesisState;
                toAmino(message: _84.GenesisState): _84.GenesisStateAmino;
                fromAminoMsg(object: _84.GenesisStateAminoMsg): _84.GenesisState;
                toAminoMsg(message: _84.GenesisState): _84.GenesisStateAminoMsg;
                fromProtoMsg(message: _84.GenesisStateProtoMsg): _84.GenesisState;
                toProto(message: _84.GenesisState): Uint8Array;
                toProtoMsg(message: _84.GenesisState): _84.GenesisStateProtoMsg;
            };
            FeeToken: {
                typeUrl: string;
                encode(message: _83.FeeToken, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _83.FeeToken;
                fromPartial(object: Partial<_83.FeeToken>): _83.FeeToken;
                fromAmino(object: _83.FeeTokenAmino): _83.FeeToken;
                toAmino(message: _83.FeeToken): _83.FeeTokenAmino;
                fromAminoMsg(object: _83.FeeTokenAminoMsg): _83.FeeToken;
                toAminoMsg(message: _83.FeeToken): _83.FeeTokenAminoMsg;
                fromProtoMsg(message: _83.FeeTokenProtoMsg): _83.FeeToken;
                toProto(message: _83.FeeToken): Uint8Array;
                toProtoMsg(message: _83.FeeToken): _83.FeeTokenProtoMsg;
            };
        };
    }
    namespace valsetpref {
        const v1beta1: {
            MsgClientImpl: typeof _331.MsgClientImpl;
            QueryClientImpl: typeof _318.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                userValidatorPreferences(request: _87.UserValidatorPreferencesRequest): Promise<_87.UserValidatorPreferencesResponse>;
            };
            LCDQueryClient: typeof _299.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    setValidatorSetPreference(value: _89.MsgSetValidatorSetPreference): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    delegateToValidatorSet(value: _89.MsgDelegateToValidatorSet): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    undelegateFromValidatorSet(value: _89.MsgUndelegateFromValidatorSet): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    undelegateFromRebalancedValidatorSet(value: _89.MsgUndelegateFromRebalancedValidatorSet): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    redelegateValidatorSet(value: _89.MsgRedelegateValidatorSet): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    withdrawDelegationRewards(value: _89.MsgWithdrawDelegationRewards): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    delegateBondedTokens(value: _89.MsgDelegateBondedTokens): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    setValidatorSetPreference(value: _89.MsgSetValidatorSetPreference): {
                        typeUrl: string;
                        value: _89.MsgSetValidatorSetPreference;
                    };
                    delegateToValidatorSet(value: _89.MsgDelegateToValidatorSet): {
                        typeUrl: string;
                        value: _89.MsgDelegateToValidatorSet;
                    };
                    undelegateFromValidatorSet(value: _89.MsgUndelegateFromValidatorSet): {
                        typeUrl: string;
                        value: _89.MsgUndelegateFromValidatorSet;
                    };
                    undelegateFromRebalancedValidatorSet(value: _89.MsgUndelegateFromRebalancedValidatorSet): {
                        typeUrl: string;
                        value: _89.MsgUndelegateFromRebalancedValidatorSet;
                    };
                    redelegateValidatorSet(value: _89.MsgRedelegateValidatorSet): {
                        typeUrl: string;
                        value: _89.MsgRedelegateValidatorSet;
                    };
                    withdrawDelegationRewards(value: _89.MsgWithdrawDelegationRewards): {
                        typeUrl: string;
                        value: _89.MsgWithdrawDelegationRewards;
                    };
                    delegateBondedTokens(value: _89.MsgDelegateBondedTokens): {
                        typeUrl: string;
                        value: _89.MsgDelegateBondedTokens;
                    };
                };
                fromJSON: {
                    setValidatorSetPreference(value: any): {
                        typeUrl: string;
                        value: _89.MsgSetValidatorSetPreference;
                    };
                    delegateToValidatorSet(value: any): {
                        typeUrl: string;
                        value: _89.MsgDelegateToValidatorSet;
                    };
                    undelegateFromValidatorSet(value: any): {
                        typeUrl: string;
                        value: _89.MsgUndelegateFromValidatorSet;
                    };
                    undelegateFromRebalancedValidatorSet(value: any): {
                        typeUrl: string;
                        value: _89.MsgUndelegateFromRebalancedValidatorSet;
                    };
                    redelegateValidatorSet(value: any): {
                        typeUrl: string;
                        value: _89.MsgRedelegateValidatorSet;
                    };
                    withdrawDelegationRewards(value: any): {
                        typeUrl: string;
                        value: _89.MsgWithdrawDelegationRewards;
                    };
                    delegateBondedTokens(value: any): {
                        typeUrl: string;
                        value: _89.MsgDelegateBondedTokens;
                    };
                };
                fromPartial: {
                    setValidatorSetPreference(value: _89.MsgSetValidatorSetPreference): {
                        typeUrl: string;
                        value: _89.MsgSetValidatorSetPreference;
                    };
                    delegateToValidatorSet(value: _89.MsgDelegateToValidatorSet): {
                        typeUrl: string;
                        value: _89.MsgDelegateToValidatorSet;
                    };
                    undelegateFromValidatorSet(value: _89.MsgUndelegateFromValidatorSet): {
                        typeUrl: string;
                        value: _89.MsgUndelegateFromValidatorSet;
                    };
                    undelegateFromRebalancedValidatorSet(value: _89.MsgUndelegateFromRebalancedValidatorSet): {
                        typeUrl: string;
                        value: _89.MsgUndelegateFromRebalancedValidatorSet;
                    };
                    redelegateValidatorSet(value: _89.MsgRedelegateValidatorSet): {
                        typeUrl: string;
                        value: _89.MsgRedelegateValidatorSet;
                    };
                    withdrawDelegationRewards(value: _89.MsgWithdrawDelegationRewards): {
                        typeUrl: string;
                        value: _89.MsgWithdrawDelegationRewards;
                    };
                    delegateBondedTokens(value: _89.MsgDelegateBondedTokens): {
                        typeUrl: string;
                        value: _89.MsgDelegateBondedTokens;
                    };
                };
            };
            AminoConverter: {
                "/osmosis.valsetpref.v1beta1.MsgSetValidatorSetPreference": {
                    aminoType: string;
                    toAmino: (message: _89.MsgSetValidatorSetPreference) => _89.MsgSetValidatorSetPreferenceAmino;
                    fromAmino: (object: _89.MsgSetValidatorSetPreferenceAmino) => _89.MsgSetValidatorSetPreference;
                };
                "/osmosis.valsetpref.v1beta1.MsgDelegateToValidatorSet": {
                    aminoType: string;
                    toAmino: (message: _89.MsgDelegateToValidatorSet) => _89.MsgDelegateToValidatorSetAmino;
                    fromAmino: (object: _89.MsgDelegateToValidatorSetAmino) => _89.MsgDelegateToValidatorSet;
                };
                "/osmosis.valsetpref.v1beta1.MsgUndelegateFromValidatorSet": {
                    aminoType: string;
                    toAmino: (message: _89.MsgUndelegateFromValidatorSet) => _89.MsgUndelegateFromValidatorSetAmino;
                    fromAmino: (object: _89.MsgUndelegateFromValidatorSetAmino) => _89.MsgUndelegateFromValidatorSet;
                };
                "/osmosis.valsetpref.v1beta1.MsgUndelegateFromRebalancedValidatorSet": {
                    aminoType: string;
                    toAmino: (message: _89.MsgUndelegateFromRebalancedValidatorSet) => _89.MsgUndelegateFromRebalancedValidatorSetAmino;
                    fromAmino: (object: _89.MsgUndelegateFromRebalancedValidatorSetAmino) => _89.MsgUndelegateFromRebalancedValidatorSet;
                };
                "/osmosis.valsetpref.v1beta1.MsgRedelegateValidatorSet": {
                    aminoType: string;
                    toAmino: (message: _89.MsgRedelegateValidatorSet) => _89.MsgRedelegateValidatorSetAmino;
                    fromAmino: (object: _89.MsgRedelegateValidatorSetAmino) => _89.MsgRedelegateValidatorSet;
                };
                "/osmosis.valsetpref.v1beta1.MsgWithdrawDelegationRewards": {
                    aminoType: string;
                    toAmino: (message: _89.MsgWithdrawDelegationRewards) => _89.MsgWithdrawDelegationRewardsAmino;
                    fromAmino: (object: _89.MsgWithdrawDelegationRewardsAmino) => _89.MsgWithdrawDelegationRewards;
                };
                "/osmosis.valsetpref.v1beta1.MsgDelegateBondedTokens": {
                    aminoType: string;
                    toAmino: (message: _89.MsgDelegateBondedTokens) => _89.MsgDelegateBondedTokensAmino;
                    fromAmino: (object: _89.MsgDelegateBondedTokensAmino) => _89.MsgDelegateBondedTokens;
                };
            };
            MsgSetValidatorSetPreference: {
                typeUrl: string;
                encode(message: _89.MsgSetValidatorSetPreference, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _89.MsgSetValidatorSetPreference;
                fromPartial(object: Partial<_89.MsgSetValidatorSetPreference>): _89.MsgSetValidatorSetPreference;
                fromAmino(object: _89.MsgSetValidatorSetPreferenceAmino): _89.MsgSetValidatorSetPreference;
                toAmino(message: _89.MsgSetValidatorSetPreference): _89.MsgSetValidatorSetPreferenceAmino;
                fromAminoMsg(object: _89.MsgSetValidatorSetPreferenceAminoMsg): _89.MsgSetValidatorSetPreference;
                toAminoMsg(message: _89.MsgSetValidatorSetPreference): _89.MsgSetValidatorSetPreferenceAminoMsg;
                fromProtoMsg(message: _89.MsgSetValidatorSetPreferenceProtoMsg): _89.MsgSetValidatorSetPreference;
                toProto(message: _89.MsgSetValidatorSetPreference): Uint8Array;
                toProtoMsg(message: _89.MsgSetValidatorSetPreference): _89.MsgSetValidatorSetPreferenceProtoMsg;
            };
            MsgSetValidatorSetPreferenceResponse: {
                typeUrl: string;
                encode(_: _89.MsgSetValidatorSetPreferenceResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _89.MsgSetValidatorSetPreferenceResponse;
                fromPartial(_: Partial<_89.MsgSetValidatorSetPreferenceResponse>): _89.MsgSetValidatorSetPreferenceResponse;
                fromAmino(_: _89.MsgSetValidatorSetPreferenceResponseAmino): _89.MsgSetValidatorSetPreferenceResponse;
                toAmino(_: _89.MsgSetValidatorSetPreferenceResponse): _89.MsgSetValidatorSetPreferenceResponseAmino;
                fromAminoMsg(object: _89.MsgSetValidatorSetPreferenceResponseAminoMsg): _89.MsgSetValidatorSetPreferenceResponse;
                toAminoMsg(message: _89.MsgSetValidatorSetPreferenceResponse): _89.MsgSetValidatorSetPreferenceResponseAminoMsg;
                fromProtoMsg(message: _89.MsgSetValidatorSetPreferenceResponseProtoMsg): _89.MsgSetValidatorSetPreferenceResponse;
                toProto(message: _89.MsgSetValidatorSetPreferenceResponse): Uint8Array;
                toProtoMsg(message: _89.MsgSetValidatorSetPreferenceResponse): _89.MsgSetValidatorSetPreferenceResponseProtoMsg;
            };
            MsgDelegateToValidatorSet: {
                typeUrl: string;
                encode(message: _89.MsgDelegateToValidatorSet, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _89.MsgDelegateToValidatorSet;
                fromPartial(object: Partial<_89.MsgDelegateToValidatorSet>): _89.MsgDelegateToValidatorSet;
                fromAmino(object: _89.MsgDelegateToValidatorSetAmino): _89.MsgDelegateToValidatorSet;
                toAmino(message: _89.MsgDelegateToValidatorSet): _89.MsgDelegateToValidatorSetAmino;
                fromAminoMsg(object: _89.MsgDelegateToValidatorSetAminoMsg): _89.MsgDelegateToValidatorSet;
                toAminoMsg(message: _89.MsgDelegateToValidatorSet): _89.MsgDelegateToValidatorSetAminoMsg;
                fromProtoMsg(message: _89.MsgDelegateToValidatorSetProtoMsg): _89.MsgDelegateToValidatorSet;
                toProto(message: _89.MsgDelegateToValidatorSet): Uint8Array;
                toProtoMsg(message: _89.MsgDelegateToValidatorSet): _89.MsgDelegateToValidatorSetProtoMsg;
            };
            MsgDelegateToValidatorSetResponse: {
                typeUrl: string;
                encode(_: _89.MsgDelegateToValidatorSetResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _89.MsgDelegateToValidatorSetResponse;
                fromPartial(_: Partial<_89.MsgDelegateToValidatorSetResponse>): _89.MsgDelegateToValidatorSetResponse;
                fromAmino(_: _89.MsgDelegateToValidatorSetResponseAmino): _89.MsgDelegateToValidatorSetResponse;
                toAmino(_: _89.MsgDelegateToValidatorSetResponse): _89.MsgDelegateToValidatorSetResponseAmino;
                fromAminoMsg(object: _89.MsgDelegateToValidatorSetResponseAminoMsg): _89.MsgDelegateToValidatorSetResponse;
                toAminoMsg(message: _89.MsgDelegateToValidatorSetResponse): _89.MsgDelegateToValidatorSetResponseAminoMsg;
                fromProtoMsg(message: _89.MsgDelegateToValidatorSetResponseProtoMsg): _89.MsgDelegateToValidatorSetResponse;
                toProto(message: _89.MsgDelegateToValidatorSetResponse): Uint8Array;
                toProtoMsg(message: _89.MsgDelegateToValidatorSetResponse): _89.MsgDelegateToValidatorSetResponseProtoMsg;
            };
            MsgUndelegateFromValidatorSet: {
                typeUrl: string;
                encode(message: _89.MsgUndelegateFromValidatorSet, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _89.MsgUndelegateFromValidatorSet;
                fromPartial(object: Partial<_89.MsgUndelegateFromValidatorSet>): _89.MsgUndelegateFromValidatorSet;
                fromAmino(object: _89.MsgUndelegateFromValidatorSetAmino): _89.MsgUndelegateFromValidatorSet;
                toAmino(message: _89.MsgUndelegateFromValidatorSet): _89.MsgUndelegateFromValidatorSetAmino;
                fromAminoMsg(object: _89.MsgUndelegateFromValidatorSetAminoMsg): _89.MsgUndelegateFromValidatorSet;
                toAminoMsg(message: _89.MsgUndelegateFromValidatorSet): _89.MsgUndelegateFromValidatorSetAminoMsg;
                fromProtoMsg(message: _89.MsgUndelegateFromValidatorSetProtoMsg): _89.MsgUndelegateFromValidatorSet;
                toProto(message: _89.MsgUndelegateFromValidatorSet): Uint8Array;
                toProtoMsg(message: _89.MsgUndelegateFromValidatorSet): _89.MsgUndelegateFromValidatorSetProtoMsg;
            };
            MsgUndelegateFromValidatorSetResponse: {
                typeUrl: string;
                encode(_: _89.MsgUndelegateFromValidatorSetResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _89.MsgUndelegateFromValidatorSetResponse;
                fromPartial(_: Partial<_89.MsgUndelegateFromValidatorSetResponse>): _89.MsgUndelegateFromValidatorSetResponse;
                fromAmino(_: _89.MsgUndelegateFromValidatorSetResponseAmino): _89.MsgUndelegateFromValidatorSetResponse;
                toAmino(_: _89.MsgUndelegateFromValidatorSetResponse): _89.MsgUndelegateFromValidatorSetResponseAmino;
                fromAminoMsg(object: _89.MsgUndelegateFromValidatorSetResponseAminoMsg): _89.MsgUndelegateFromValidatorSetResponse;
                toAminoMsg(message: _89.MsgUndelegateFromValidatorSetResponse): _89.MsgUndelegateFromValidatorSetResponseAminoMsg;
                fromProtoMsg(message: _89.MsgUndelegateFromValidatorSetResponseProtoMsg): _89.MsgUndelegateFromValidatorSetResponse;
                toProto(message: _89.MsgUndelegateFromValidatorSetResponse): Uint8Array;
                toProtoMsg(message: _89.MsgUndelegateFromValidatorSetResponse): _89.MsgUndelegateFromValidatorSetResponseProtoMsg;
            };
            MsgUndelegateFromRebalancedValidatorSet: {
                typeUrl: string;
                encode(message: _89.MsgUndelegateFromRebalancedValidatorSet, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _89.MsgUndelegateFromRebalancedValidatorSet;
                fromPartial(object: Partial<_89.MsgUndelegateFromRebalancedValidatorSet>): _89.MsgUndelegateFromRebalancedValidatorSet;
                fromAmino(object: _89.MsgUndelegateFromRebalancedValidatorSetAmino): _89.MsgUndelegateFromRebalancedValidatorSet;
                toAmino(message: _89.MsgUndelegateFromRebalancedValidatorSet): _89.MsgUndelegateFromRebalancedValidatorSetAmino;
                fromAminoMsg(object: _89.MsgUndelegateFromRebalancedValidatorSetAminoMsg): _89.MsgUndelegateFromRebalancedValidatorSet;
                toAminoMsg(message: _89.MsgUndelegateFromRebalancedValidatorSet): _89.MsgUndelegateFromRebalancedValidatorSetAminoMsg;
                fromProtoMsg(message: _89.MsgUndelegateFromRebalancedValidatorSetProtoMsg): _89.MsgUndelegateFromRebalancedValidatorSet;
                toProto(message: _89.MsgUndelegateFromRebalancedValidatorSet): Uint8Array;
                toProtoMsg(message: _89.MsgUndelegateFromRebalancedValidatorSet): _89.MsgUndelegateFromRebalancedValidatorSetProtoMsg;
            };
            MsgUndelegateFromRebalancedValidatorSetResponse: {
                typeUrl: string;
                encode(_: _89.MsgUndelegateFromRebalancedValidatorSetResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _89.MsgUndelegateFromRebalancedValidatorSetResponse;
                fromPartial(_: Partial<_89.MsgUndelegateFromRebalancedValidatorSetResponse>): _89.MsgUndelegateFromRebalancedValidatorSetResponse;
                fromAmino(_: _89.MsgUndelegateFromRebalancedValidatorSetResponseAmino): _89.MsgUndelegateFromRebalancedValidatorSetResponse;
                toAmino(_: _89.MsgUndelegateFromRebalancedValidatorSetResponse): _89.MsgUndelegateFromRebalancedValidatorSetResponseAmino;
                fromAminoMsg(object: _89.MsgUndelegateFromRebalancedValidatorSetResponseAminoMsg): _89.MsgUndelegateFromRebalancedValidatorSetResponse;
                toAminoMsg(message: _89.MsgUndelegateFromRebalancedValidatorSetResponse): _89.MsgUndelegateFromRebalancedValidatorSetResponseAminoMsg;
                fromProtoMsg(message: _89.MsgUndelegateFromRebalancedValidatorSetResponseProtoMsg): _89.MsgUndelegateFromRebalancedValidatorSetResponse;
                toProto(message: _89.MsgUndelegateFromRebalancedValidatorSetResponse): Uint8Array;
                toProtoMsg(message: _89.MsgUndelegateFromRebalancedValidatorSetResponse): _89.MsgUndelegateFromRebalancedValidatorSetResponseProtoMsg;
            };
            MsgRedelegateValidatorSet: {
                typeUrl: string;
                encode(message: _89.MsgRedelegateValidatorSet, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _89.MsgRedelegateValidatorSet;
                fromPartial(object: Partial<_89.MsgRedelegateValidatorSet>): _89.MsgRedelegateValidatorSet;
                fromAmino(object: _89.MsgRedelegateValidatorSetAmino): _89.MsgRedelegateValidatorSet;
                toAmino(message: _89.MsgRedelegateValidatorSet): _89.MsgRedelegateValidatorSetAmino;
                fromAminoMsg(object: _89.MsgRedelegateValidatorSetAminoMsg): _89.MsgRedelegateValidatorSet;
                toAminoMsg(message: _89.MsgRedelegateValidatorSet): _89.MsgRedelegateValidatorSetAminoMsg;
                fromProtoMsg(message: _89.MsgRedelegateValidatorSetProtoMsg): _89.MsgRedelegateValidatorSet;
                toProto(message: _89.MsgRedelegateValidatorSet): Uint8Array;
                toProtoMsg(message: _89.MsgRedelegateValidatorSet): _89.MsgRedelegateValidatorSetProtoMsg;
            };
            MsgRedelegateValidatorSetResponse: {
                typeUrl: string;
                encode(_: _89.MsgRedelegateValidatorSetResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _89.MsgRedelegateValidatorSetResponse;
                fromPartial(_: Partial<_89.MsgRedelegateValidatorSetResponse>): _89.MsgRedelegateValidatorSetResponse;
                fromAmino(_: _89.MsgRedelegateValidatorSetResponseAmino): _89.MsgRedelegateValidatorSetResponse;
                toAmino(_: _89.MsgRedelegateValidatorSetResponse): _89.MsgRedelegateValidatorSetResponseAmino;
                fromAminoMsg(object: _89.MsgRedelegateValidatorSetResponseAminoMsg): _89.MsgRedelegateValidatorSetResponse;
                toAminoMsg(message: _89.MsgRedelegateValidatorSetResponse): _89.MsgRedelegateValidatorSetResponseAminoMsg;
                fromProtoMsg(message: _89.MsgRedelegateValidatorSetResponseProtoMsg): _89.MsgRedelegateValidatorSetResponse;
                toProto(message: _89.MsgRedelegateValidatorSetResponse): Uint8Array;
                toProtoMsg(message: _89.MsgRedelegateValidatorSetResponse): _89.MsgRedelegateValidatorSetResponseProtoMsg;
            };
            MsgWithdrawDelegationRewards: {
                typeUrl: string;
                encode(message: _89.MsgWithdrawDelegationRewards, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _89.MsgWithdrawDelegationRewards;
                fromPartial(object: Partial<_89.MsgWithdrawDelegationRewards>): _89.MsgWithdrawDelegationRewards;
                fromAmino(object: _89.MsgWithdrawDelegationRewardsAmino): _89.MsgWithdrawDelegationRewards;
                toAmino(message: _89.MsgWithdrawDelegationRewards): _89.MsgWithdrawDelegationRewardsAmino;
                fromAminoMsg(object: _89.MsgWithdrawDelegationRewardsAminoMsg): _89.MsgWithdrawDelegationRewards;
                toAminoMsg(message: _89.MsgWithdrawDelegationRewards): _89.MsgWithdrawDelegationRewardsAminoMsg;
                fromProtoMsg(message: _89.MsgWithdrawDelegationRewardsProtoMsg): _89.MsgWithdrawDelegationRewards;
                toProto(message: _89.MsgWithdrawDelegationRewards): Uint8Array;
                toProtoMsg(message: _89.MsgWithdrawDelegationRewards): _89.MsgWithdrawDelegationRewardsProtoMsg;
            };
            MsgWithdrawDelegationRewardsResponse: {
                typeUrl: string;
                encode(_: _89.MsgWithdrawDelegationRewardsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _89.MsgWithdrawDelegationRewardsResponse;
                fromPartial(_: Partial<_89.MsgWithdrawDelegationRewardsResponse>): _89.MsgWithdrawDelegationRewardsResponse;
                fromAmino(_: _89.MsgWithdrawDelegationRewardsResponseAmino): _89.MsgWithdrawDelegationRewardsResponse;
                toAmino(_: _89.MsgWithdrawDelegationRewardsResponse): _89.MsgWithdrawDelegationRewardsResponseAmino;
                fromAminoMsg(object: _89.MsgWithdrawDelegationRewardsResponseAminoMsg): _89.MsgWithdrawDelegationRewardsResponse;
                toAminoMsg(message: _89.MsgWithdrawDelegationRewardsResponse): _89.MsgWithdrawDelegationRewardsResponseAminoMsg;
                fromProtoMsg(message: _89.MsgWithdrawDelegationRewardsResponseProtoMsg): _89.MsgWithdrawDelegationRewardsResponse;
                toProto(message: _89.MsgWithdrawDelegationRewardsResponse): Uint8Array;
                toProtoMsg(message: _89.MsgWithdrawDelegationRewardsResponse): _89.MsgWithdrawDelegationRewardsResponseProtoMsg;
            };
            MsgDelegateBondedTokens: {
                typeUrl: string;
                encode(message: _89.MsgDelegateBondedTokens, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _89.MsgDelegateBondedTokens;
                fromPartial(object: Partial<_89.MsgDelegateBondedTokens>): _89.MsgDelegateBondedTokens;
                fromAmino(object: _89.MsgDelegateBondedTokensAmino): _89.MsgDelegateBondedTokens;
                toAmino(message: _89.MsgDelegateBondedTokens): _89.MsgDelegateBondedTokensAmino;
                fromAminoMsg(object: _89.MsgDelegateBondedTokensAminoMsg): _89.MsgDelegateBondedTokens;
                toAminoMsg(message: _89.MsgDelegateBondedTokens): _89.MsgDelegateBondedTokensAminoMsg;
                fromProtoMsg(message: _89.MsgDelegateBondedTokensProtoMsg): _89.MsgDelegateBondedTokens;
                toProto(message: _89.MsgDelegateBondedTokens): Uint8Array;
                toProtoMsg(message: _89.MsgDelegateBondedTokens): _89.MsgDelegateBondedTokensProtoMsg;
            };
            MsgDelegateBondedTokensResponse: {
                typeUrl: string;
                encode(_: _89.MsgDelegateBondedTokensResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _89.MsgDelegateBondedTokensResponse;
                fromPartial(_: Partial<_89.MsgDelegateBondedTokensResponse>): _89.MsgDelegateBondedTokensResponse;
                fromAmino(_: _89.MsgDelegateBondedTokensResponseAmino): _89.MsgDelegateBondedTokensResponse;
                toAmino(_: _89.MsgDelegateBondedTokensResponse): _89.MsgDelegateBondedTokensResponseAmino;
                fromAminoMsg(object: _89.MsgDelegateBondedTokensResponseAminoMsg): _89.MsgDelegateBondedTokensResponse;
                toAminoMsg(message: _89.MsgDelegateBondedTokensResponse): _89.MsgDelegateBondedTokensResponseAminoMsg;
                fromProtoMsg(message: _89.MsgDelegateBondedTokensResponseProtoMsg): _89.MsgDelegateBondedTokensResponse;
                toProto(message: _89.MsgDelegateBondedTokensResponse): Uint8Array;
                toProtoMsg(message: _89.MsgDelegateBondedTokensResponse): _89.MsgDelegateBondedTokensResponseProtoMsg;
            };
            ValidatorPreference: {
                typeUrl: string;
                encode(message: _88.ValidatorPreference, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _88.ValidatorPreference;
                fromPartial(object: Partial<_88.ValidatorPreference>): _88.ValidatorPreference;
                fromAmino(object: _88.ValidatorPreferenceAmino): _88.ValidatorPreference;
                toAmino(message: _88.ValidatorPreference): _88.ValidatorPreferenceAmino;
                fromAminoMsg(object: _88.ValidatorPreferenceAminoMsg): _88.ValidatorPreference;
                toAminoMsg(message: _88.ValidatorPreference): _88.ValidatorPreferenceAminoMsg;
                fromProtoMsg(message: _88.ValidatorPreferenceProtoMsg): _88.ValidatorPreference;
                toProto(message: _88.ValidatorPreference): Uint8Array;
                toProtoMsg(message: _88.ValidatorPreference): _88.ValidatorPreferenceProtoMsg;
            };
            ValidatorSetPreferences: {
                typeUrl: string;
                encode(message: _88.ValidatorSetPreferences, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _88.ValidatorSetPreferences;
                fromPartial(object: Partial<_88.ValidatorSetPreferences>): _88.ValidatorSetPreferences;
                fromAmino(object: _88.ValidatorSetPreferencesAmino): _88.ValidatorSetPreferences;
                toAmino(message: _88.ValidatorSetPreferences): _88.ValidatorSetPreferencesAmino;
                fromAminoMsg(object: _88.ValidatorSetPreferencesAminoMsg): _88.ValidatorSetPreferences;
                toAminoMsg(message: _88.ValidatorSetPreferences): _88.ValidatorSetPreferencesAminoMsg;
                fromProtoMsg(message: _88.ValidatorSetPreferencesProtoMsg): _88.ValidatorSetPreferences;
                toProto(message: _88.ValidatorSetPreferences): Uint8Array;
                toProtoMsg(message: _88.ValidatorSetPreferences): _88.ValidatorSetPreferencesProtoMsg;
            };
            UserValidatorPreferencesRequest: {
                typeUrl: string;
                encode(message: _87.UserValidatorPreferencesRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _87.UserValidatorPreferencesRequest;
                fromPartial(object: Partial<_87.UserValidatorPreferencesRequest>): _87.UserValidatorPreferencesRequest;
                fromAmino(object: _87.UserValidatorPreferencesRequestAmino): _87.UserValidatorPreferencesRequest;
                toAmino(message: _87.UserValidatorPreferencesRequest): _87.UserValidatorPreferencesRequestAmino;
                fromAminoMsg(object: _87.UserValidatorPreferencesRequestAminoMsg): _87.UserValidatorPreferencesRequest;
                toAminoMsg(message: _87.UserValidatorPreferencesRequest): _87.UserValidatorPreferencesRequestAminoMsg;
                fromProtoMsg(message: _87.UserValidatorPreferencesRequestProtoMsg): _87.UserValidatorPreferencesRequest;
                toProto(message: _87.UserValidatorPreferencesRequest): Uint8Array;
                toProtoMsg(message: _87.UserValidatorPreferencesRequest): _87.UserValidatorPreferencesRequestProtoMsg;
            };
            UserValidatorPreferencesResponse: {
                typeUrl: string;
                encode(message: _87.UserValidatorPreferencesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _87.UserValidatorPreferencesResponse;
                fromPartial(object: Partial<_87.UserValidatorPreferencesResponse>): _87.UserValidatorPreferencesResponse;
                fromAmino(object: _87.UserValidatorPreferencesResponseAmino): _87.UserValidatorPreferencesResponse;
                toAmino(message: _87.UserValidatorPreferencesResponse): _87.UserValidatorPreferencesResponseAmino;
                fromAminoMsg(object: _87.UserValidatorPreferencesResponseAminoMsg): _87.UserValidatorPreferencesResponse;
                toAminoMsg(message: _87.UserValidatorPreferencesResponse): _87.UserValidatorPreferencesResponseAminoMsg;
                fromProtoMsg(message: _87.UserValidatorPreferencesResponseProtoMsg): _87.UserValidatorPreferencesResponse;
                toProto(message: _87.UserValidatorPreferencesResponse): Uint8Array;
                toProtoMsg(message: _87.UserValidatorPreferencesResponse): _87.UserValidatorPreferencesResponseProtoMsg;
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
                            v1beta1: _319.MsgClientImpl;
                        };
                    };
                    v1beta1: _320.MsgClientImpl;
                };
                gamm: {
                    poolmodels: {
                        balancer: {
                            v1beta1: _321.MsgClientImpl;
                        };
                        stableswap: {
                            v1beta1: _322.MsgClientImpl;
                        };
                    };
                    v1beta1: _323.MsgClientImpl;
                };
                ibchooks: _324.MsgClientImpl;
                incentives: _325.MsgClientImpl;
                lockup: _326.MsgClientImpl;
                poolmanager: {
                    v1beta1: _327.MsgClientImpl;
                };
                protorev: {
                    v1beta1: _328.MsgClientImpl;
                };
                superfluid: _329.MsgClientImpl;
                tokenfactory: {
                    v1beta1: _330.MsgClientImpl;
                };
                valsetpref: {
                    v1beta1: _331.MsgClientImpl;
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
            osmosis: {
                concentratedliquidity: {
                    v1beta1: {
                        pools(request?: import("./concentratedliquidity/v1beta1/query").PoolsRequest): Promise<import("./concentratedliquidity/v1beta1/query").PoolsResponse>;
                        params(request?: import("./concentratedliquidity/v1beta1/query").ParamsRequest): Promise<import("./concentratedliquidity/v1beta1/query").ParamsResponse>;
                        userPositions(request: import("./concentratedliquidity/v1beta1/query").UserPositionsRequest): Promise<import("./concentratedliquidity/v1beta1/query").UserPositionsResponse>;
                        liquidityPerTickRange(request: import("./concentratedliquidity/v1beta1/query").LiquidityPerTickRangeRequest): Promise<import("./concentratedliquidity/v1beta1/query").LiquidityPerTickRangeResponse>;
                        liquidityNetInDirection(request: import("./concentratedliquidity/v1beta1/query").LiquidityNetInDirectionRequest): Promise<import("./concentratedliquidity/v1beta1/query").LiquidityNetInDirectionResponse>;
                        claimableSpreadRewards(request: import("./concentratedliquidity/v1beta1/query").ClaimableSpreadRewardsRequest): Promise<import("./concentratedliquidity/v1beta1/query").ClaimableSpreadRewardsResponse>;
                        claimableIncentives(request: import("./concentratedliquidity/v1beta1/query").ClaimableIncentivesRequest): Promise<import("./concentratedliquidity/v1beta1/query").ClaimableIncentivesResponse>;
                        positionById(request: import("./concentratedliquidity/v1beta1/query").PositionByIdRequest): Promise<import("./concentratedliquidity/v1beta1/query").PositionByIdResponse>;
                        poolAccumulatorRewards(request: import("./concentratedliquidity/v1beta1/query").PoolAccumulatorRewardsRequest): Promise<import("./concentratedliquidity/v1beta1/query").PoolAccumulatorRewardsResponse>;
                        incentiveRecords(request: import("./concentratedliquidity/v1beta1/query").IncentiveRecordsRequest): Promise<import("./concentratedliquidity/v1beta1/query").IncentiveRecordsResponse>;
                        tickAccumulatorTrackers(request: import("./concentratedliquidity/v1beta1/query").TickAccumulatorTrackersRequest): Promise<import("./concentratedliquidity/v1beta1/query").TickAccumulatorTrackersResponse>;
                        cFMMPoolIdLinkFromConcentratedPoolId(request: import("./concentratedliquidity/v1beta1/query").CFMMPoolIdLinkFromConcentratedPoolIdRequest): Promise<import("./concentratedliquidity/v1beta1/query").CFMMPoolIdLinkFromConcentratedPoolIdResponse>;
                        userUnbondingPositions(request: import("./concentratedliquidity/v1beta1/query").UserUnbondingPositionsRequest): Promise<import("./concentratedliquidity/v1beta1/query").UserUnbondingPositionsResponse>;
                        getTotalLiquidity(request?: import("./concentratedliquidity/v1beta1/query").GetTotalLiquidityRequest): Promise<import("./concentratedliquidity/v1beta1/query").GetTotalLiquidityResponse>;
                        numNextInitializedTicks(request: import("./concentratedliquidity/v1beta1/query").NumNextInitializedTicksRequest): Promise<import("./concentratedliquidity/v1beta1/query").NumNextInitializedTicksResponse>;
                    };
                };
                cosmwasmpool: {
                    v1beta1: {
                        pools(request?: _12.PoolsRequest): Promise<_12.PoolsResponse>;
                        params(request?: _12.ParamsRequest): Promise<_12.ParamsResponse>;
                        contractInfoByPoolId(request: _12.ContractInfoByPoolIdRequest): Promise<_12.ContractInfoByPoolIdResponse>;
                    };
                };
                downtimedetector: {
                    v1beta1: {
                        recoveredSinceDowntimeOfLength(request: _16.RecoveredSinceDowntimeOfLengthRequest): Promise<_16.RecoveredSinceDowntimeOfLengthResponse>;
                    };
                };
                epochs: {
                    v1beta1: {
                        epochInfos(request?: _18.QueryEpochsInfoRequest): Promise<_18.QueryEpochsInfoResponse>;
                        currentEpoch(request: _18.QueryCurrentEpochRequest): Promise<_18.QueryCurrentEpochResponse>;
                    };
                };
                gamm: {
                    v1beta1: {
                        pools(request?: _25.QueryPoolsRequest): Promise<_25.QueryPoolsResponse>;
                        numPools(request?: _25.QueryNumPoolsRequest): Promise<_25.QueryNumPoolsResponse>;
                        totalLiquidity(request?: _25.QueryTotalLiquidityRequest): Promise<_25.QueryTotalLiquidityResponse>;
                        poolsWithFilter(request: _25.QueryPoolsWithFilterRequest): Promise<_25.QueryPoolsWithFilterResponse>;
                        pool(request: _25.QueryPoolRequest): Promise<_25.QueryPoolResponse>;
                        poolType(request: _25.QueryPoolTypeRequest): Promise<_25.QueryPoolTypeResponse>;
                        calcJoinPoolNoSwapShares(request: _25.QueryCalcJoinPoolNoSwapSharesRequest): Promise<_25.QueryCalcJoinPoolNoSwapSharesResponse>;
                        calcJoinPoolShares(request: _25.QueryCalcJoinPoolSharesRequest): Promise<_25.QueryCalcJoinPoolSharesResponse>;
                        calcExitPoolCoinsFromShares(request: _25.QueryCalcExitPoolCoinsFromSharesRequest): Promise<_25.QueryCalcExitPoolCoinsFromSharesResponse>;
                        poolParams(request: _25.QueryPoolParamsRequest): Promise<_25.QueryPoolParamsResponse>;
                        totalPoolLiquidity(request: _25.QueryTotalPoolLiquidityRequest): Promise<_25.QueryTotalPoolLiquidityResponse>;
                        totalShares(request: _25.QueryTotalSharesRequest): Promise<_25.QueryTotalSharesResponse>;
                        spotPrice(request: _25.QuerySpotPriceRequest): Promise<_25.QuerySpotPriceResponse>;
                        estimateSwapExactAmountIn(request: _25.QuerySwapExactAmountInRequest): Promise<_25.QuerySwapExactAmountInResponse>;
                        estimateSwapExactAmountOut(request: _25.QuerySwapExactAmountOutRequest): Promise<_25.QuerySwapExactAmountOutResponse>;
                        concentratedPoolIdLinkFromCFMM(request: _25.QueryConcentratedPoolIdLinkFromCFMMRequest): Promise<_25.QueryConcentratedPoolIdLinkFromCFMMResponse>;
                        cFMMConcentratedPoolLinks(request?: _25.QueryCFMMConcentratedPoolLinksRequest): Promise<_25.QueryCFMMConcentratedPoolLinksResponse>;
                    };
                    v2: {
                        spotPrice(request: _28.QuerySpotPriceRequest): Promise<_28.QuerySpotPriceResponse>;
                    };
                };
                ibcratelimit: {
                    v1beta1: {
                        params(request?: _34.ParamsRequest): Promise<_34.ParamsResponse>;
                    };
                };
                incentives: {
                    moduleToDistributeCoins(request?: _40.ModuleToDistributeCoinsRequest): Promise<_40.ModuleToDistributeCoinsResponse>;
                    gaugeByID(request: _40.GaugeByIDRequest): Promise<_40.GaugeByIDResponse>;
                    gauges(request?: _40.GaugesRequest): Promise<_40.GaugesResponse>;
                    activeGauges(request?: _40.ActiveGaugesRequest): Promise<_40.ActiveGaugesResponse>;
                    activeGaugesPerDenom(request: _40.ActiveGaugesPerDenomRequest): Promise<_40.ActiveGaugesPerDenomResponse>;
                    upcomingGauges(request?: _40.UpcomingGaugesRequest): Promise<_40.UpcomingGaugesResponse>;
                    upcomingGaugesPerDenom(request: _40.UpcomingGaugesPerDenomRequest): Promise<_40.UpcomingGaugesPerDenomResponse>;
                    rewardsEst(request: _40.RewardsEstRequest): Promise<_40.RewardsEstResponse>;
                    lockableDurations(request?: _40.QueryLockableDurationsRequest): Promise<_40.QueryLockableDurationsResponse>;
                    allGroups(request?: _40.QueryAllGroupsRequest): Promise<_40.QueryAllGroupsResponse>;
                    allGroupsGauges(request?: _40.QueryAllGroupsGaugesRequest): Promise<_40.QueryAllGroupsGaugesResponse>;
                    allGroupsWithGauge(request?: _40.QueryAllGroupsWithGaugeRequest): Promise<_40.QueryAllGroupsWithGaugeResponse>;
                    groupByGroupGaugeID(request: _40.QueryGroupByGroupGaugeIDRequest): Promise<_40.QueryGroupByGroupGaugeIDResponse>;
                    currentWeightByGroupGaugeID(request: _40.QueryCurrentWeightByGroupGaugeIDRequest): Promise<_40.QueryCurrentWeightByGroupGaugeIDResponse>;
                };
                lockup: {
                    moduleBalance(request?: _45.ModuleBalanceRequest): Promise<_45.ModuleBalanceResponse>;
                    moduleLockedAmount(request?: _45.ModuleLockedAmountRequest): Promise<_45.ModuleLockedAmountResponse>;
                    accountUnlockableCoins(request: _45.AccountUnlockableCoinsRequest): Promise<_45.AccountUnlockableCoinsResponse>;
                    accountUnlockingCoins(request: _45.AccountUnlockingCoinsRequest): Promise<_45.AccountUnlockingCoinsResponse>;
                    accountLockedCoins(request: _45.AccountLockedCoinsRequest): Promise<_45.AccountLockedCoinsResponse>;
                    accountLockedPastTime(request: _45.AccountLockedPastTimeRequest): Promise<_45.AccountLockedPastTimeResponse>;
                    accountLockedPastTimeNotUnlockingOnly(request: _45.AccountLockedPastTimeNotUnlockingOnlyRequest): Promise<_45.AccountLockedPastTimeNotUnlockingOnlyResponse>;
                    accountUnlockedBeforeTime(request: _45.AccountUnlockedBeforeTimeRequest): Promise<_45.AccountUnlockedBeforeTimeResponse>;
                    accountLockedPastTimeDenom(request: _45.AccountLockedPastTimeDenomRequest): Promise<_45.AccountLockedPastTimeDenomResponse>;
                    lockedDenom(request: _45.LockedDenomRequest): Promise<_45.LockedDenomResponse>;
                    lockedByID(request: _45.LockedRequest): Promise<_45.LockedResponse>;
                    lockRewardReceiver(request: _45.LockRewardReceiverRequest): Promise<_45.LockRewardReceiverResponse>;
                    nextLockID(request?: _45.NextLockIDRequest): Promise<_45.NextLockIDResponse>;
                    syntheticLockupsByLockupID(request: _45.SyntheticLockupsByLockupIDRequest): Promise<_45.SyntheticLockupsByLockupIDResponse>;
                    syntheticLockupByLockupID(request: _45.SyntheticLockupByLockupIDRequest): Promise<_45.SyntheticLockupByLockupIDResponse>;
                    accountLockedLongerDuration(request: _45.AccountLockedLongerDurationRequest): Promise<_45.AccountLockedLongerDurationResponse>;
                    accountLockedDuration(request: _45.AccountLockedDurationRequest): Promise<_45.AccountLockedDurationResponse>;
                    accountLockedLongerDurationNotUnlockingOnly(request: _45.AccountLockedLongerDurationNotUnlockingOnlyRequest): Promise<_45.AccountLockedLongerDurationNotUnlockingOnlyResponse>;
                    accountLockedLongerDurationDenom(request: _45.AccountLockedLongerDurationDenomRequest): Promise<_45.AccountLockedLongerDurationDenomResponse>;
                    params(request?: _45.QueryParamsRequest): Promise<_45.QueryParamsResponse>;
                };
                mint: {
                    v1beta1: {
                        params(request?: _49.QueryParamsRequest): Promise<_49.QueryParamsResponse>;
                        epochProvisions(request?: _49.QueryEpochProvisionsRequest): Promise<_49.QueryEpochProvisionsResponse>;
                    };
                };
                poolincentives: {
                    v1beta1: {
                        gaugeIds(request: _53.QueryGaugeIdsRequest): Promise<_53.QueryGaugeIdsResponse>;
                        distrInfo(request?: _53.QueryDistrInfoRequest): Promise<_53.QueryDistrInfoResponse>;
                        params(request?: _53.QueryParamsRequest): Promise<_53.QueryParamsResponse>;
                        lockableDurations(request?: _53.QueryLockableDurationsRequest): Promise<_53.QueryLockableDurationsResponse>;
                        incentivizedPools(request?: _53.QueryIncentivizedPoolsRequest): Promise<_53.QueryIncentivizedPoolsResponse>;
                        externalIncentiveGauges(request?: _53.QueryExternalIncentiveGaugesRequest): Promise<_53.QueryExternalIncentiveGaugesResponse>;
                    };
                };
                poolmanager: {
                    v1beta1: {
                        params(request?: _58.ParamsRequest): Promise<_58.ParamsResponse>;
                        estimateSwapExactAmountIn(request: _58.EstimateSwapExactAmountInRequest): Promise<_58.EstimateSwapExactAmountInResponse>;
                        estimateSwapExactAmountInWithPrimitiveTypes(request: _58.EstimateSwapExactAmountInWithPrimitiveTypesRequest): Promise<_58.EstimateSwapExactAmountInResponse>;
                        estimateSinglePoolSwapExactAmountIn(request: _58.EstimateSinglePoolSwapExactAmountInRequest): Promise<_58.EstimateSwapExactAmountInResponse>;
                        estimateSwapExactAmountOut(request: _58.EstimateSwapExactAmountOutRequest): Promise<_58.EstimateSwapExactAmountOutResponse>;
                        estimateSwapExactAmountOutWithPrimitiveTypes(request: _58.EstimateSwapExactAmountOutWithPrimitiveTypesRequest): Promise<_58.EstimateSwapExactAmountOutResponse>;
                        estimateSinglePoolSwapExactAmountOut(request: _58.EstimateSinglePoolSwapExactAmountOutRequest): Promise<_58.EstimateSwapExactAmountOutResponse>;
                        numPools(request?: _58.NumPoolsRequest): Promise<_58.NumPoolsResponse>;
                        pool(request: _58.PoolRequest): Promise<_58.PoolResponse>;
                        allPools(request?: _58.AllPoolsRequest): Promise<_58.AllPoolsResponse>;
                        listPoolsByDenom(request: _58.ListPoolsByDenomRequest): Promise<_58.ListPoolsByDenomResponse>;
                        spotPrice(request: _58.SpotPriceRequest): Promise<_58.SpotPriceResponse>;
                        totalPoolLiquidity(request: _58.TotalPoolLiquidityRequest): Promise<_58.TotalPoolLiquidityResponse>;
                        totalLiquidity(request?: _58.TotalLiquidityRequest): Promise<_58.TotalLiquidityResponse>;
                        totalVolumeForPool(request: _58.TotalVolumeForPoolRequest): Promise<_58.TotalVolumeForPoolResponse>;
                        tradingPairTakerFee(request: _58.TradingPairTakerFeeRequest): Promise<_58.TradingPairTakerFeeResponse>;
                        estimateTradeBasedOnPriceImpact(request: _58.EstimateTradeBasedOnPriceImpactRequest): Promise<_58.EstimateTradeBasedOnPriceImpactResponse>;
                    };
                    v2: {
                        spotPriceV2(request: _62.SpotPriceRequest): Promise<_62.SpotPriceResponse>;
                    };
                };
                protorev: {
                    v1beta1: {
                        params(request?: _67.QueryParamsRequest): Promise<_67.QueryParamsResponse>;
                        getProtoRevNumberOfTrades(request?: _67.QueryGetProtoRevNumberOfTradesRequest): Promise<_67.QueryGetProtoRevNumberOfTradesResponse>;
                        getProtoRevProfitsByDenom(request: _67.QueryGetProtoRevProfitsByDenomRequest): Promise<_67.QueryGetProtoRevProfitsByDenomResponse>;
                        getProtoRevAllProfits(request?: _67.QueryGetProtoRevAllProfitsRequest): Promise<_67.QueryGetProtoRevAllProfitsResponse>;
                        getProtoRevStatisticsByRoute(request: _67.QueryGetProtoRevStatisticsByRouteRequest): Promise<_67.QueryGetProtoRevStatisticsByRouteResponse>;
                        getProtoRevAllRouteStatistics(request?: _67.QueryGetProtoRevAllRouteStatisticsRequest): Promise<_67.QueryGetProtoRevAllRouteStatisticsResponse>;
                        getProtoRevTokenPairArbRoutes(request?: _67.QueryGetProtoRevTokenPairArbRoutesRequest): Promise<_67.QueryGetProtoRevTokenPairArbRoutesResponse>;
                        getProtoRevAdminAccount(request?: _67.QueryGetProtoRevAdminAccountRequest): Promise<_67.QueryGetProtoRevAdminAccountResponse>;
                        getProtoRevDeveloperAccount(request?: _67.QueryGetProtoRevDeveloperAccountRequest): Promise<_67.QueryGetProtoRevDeveloperAccountResponse>;
                        getProtoRevInfoByPoolType(request?: _67.QueryGetProtoRevInfoByPoolTypeRequest): Promise<_67.QueryGetProtoRevInfoByPoolTypeResponse>;
                        getProtoRevMaxPoolPointsPerTx(request?: _67.QueryGetProtoRevMaxPoolPointsPerTxRequest): Promise<_67.QueryGetProtoRevMaxPoolPointsPerTxResponse>;
                        getProtoRevMaxPoolPointsPerBlock(request?: _67.QueryGetProtoRevMaxPoolPointsPerBlockRequest): Promise<_67.QueryGetProtoRevMaxPoolPointsPerBlockResponse>;
                        getProtoRevBaseDenoms(request?: _67.QueryGetProtoRevBaseDenomsRequest): Promise<_67.QueryGetProtoRevBaseDenomsResponse>;
                        getProtoRevEnabled(request?: _67.QueryGetProtoRevEnabledRequest): Promise<_67.QueryGetProtoRevEnabledResponse>;
                        getProtoRevPool(request: _67.QueryGetProtoRevPoolRequest): Promise<_67.QueryGetProtoRevPoolResponse>;
                        getAllProtocolRevenue(request?: _67.QueryGetAllProtocolRevenueRequest): Promise<_67.QueryGetAllProtocolRevenueResponse>;
                    };
                };
                superfluid: {
                    params(request?: _72.QueryParamsRequest): Promise<_72.QueryParamsResponse>;
                    assetType(request: _72.AssetTypeRequest): Promise<_72.AssetTypeResponse>;
                    allAssets(request?: _72.AllAssetsRequest): Promise<_72.AllAssetsResponse>;
                    assetMultiplier(request: _72.AssetMultiplierRequest): Promise<_72.AssetMultiplierResponse>;
                    allIntermediaryAccounts(request?: _72.AllIntermediaryAccountsRequest): Promise<_72.AllIntermediaryAccountsResponse>;
                    connectedIntermediaryAccount(request: _72.ConnectedIntermediaryAccountRequest): Promise<_72.ConnectedIntermediaryAccountResponse>;
                    totalDelegationByValidatorForDenom(request: _72.QueryTotalDelegationByValidatorForDenomRequest): Promise<_72.QueryTotalDelegationByValidatorForDenomResponse>;
                    totalSuperfluidDelegations(request?: _72.TotalSuperfluidDelegationsRequest): Promise<_72.TotalSuperfluidDelegationsResponse>;
                    superfluidDelegationAmount(request: _72.SuperfluidDelegationAmountRequest): Promise<_72.SuperfluidDelegationAmountResponse>;
                    superfluidDelegationsByDelegator(request: _72.SuperfluidDelegationsByDelegatorRequest): Promise<_72.SuperfluidDelegationsByDelegatorResponse>;
                    superfluidUndelegationsByDelegator(request: _72.SuperfluidUndelegationsByDelegatorRequest): Promise<_72.SuperfluidUndelegationsByDelegatorResponse>;
                    superfluidDelegationsByValidatorDenom(request: _72.SuperfluidDelegationsByValidatorDenomRequest): Promise<_72.SuperfluidDelegationsByValidatorDenomResponse>;
                    estimateSuperfluidDelegatedAmountByValidatorDenom(request: _72.EstimateSuperfluidDelegatedAmountByValidatorDenomRequest): Promise<_72.EstimateSuperfluidDelegatedAmountByValidatorDenomResponse>;
                    totalDelegationByDelegator(request: _72.QueryTotalDelegationByDelegatorRequest): Promise<_72.QueryTotalDelegationByDelegatorResponse>;
                    unpoolWhitelist(request?: _72.QueryUnpoolWhitelistRequest): Promise<_72.QueryUnpoolWhitelistResponse>;
                    userConcentratedSuperfluidPositionsDelegated(request: _72.UserConcentratedSuperfluidPositionsDelegatedRequest): Promise<_72.UserConcentratedSuperfluidPositionsDelegatedResponse>;
                    userConcentratedSuperfluidPositionsUndelegating(request: _72.UserConcentratedSuperfluidPositionsUndelegatingRequest): Promise<_72.UserConcentratedSuperfluidPositionsUndelegatingResponse>;
                    restSupply(request: _72.QueryRestSupplyRequest): Promise<_72.QueryRestSupplyResponse>;
                };
                tokenfactory: {
                    v1beta1: {
                        params(request?: _78.QueryParamsRequest): Promise<_78.QueryParamsResponse>;
                        denomAuthorityMetadata(request: _78.QueryDenomAuthorityMetadataRequest): Promise<_78.QueryDenomAuthorityMetadataResponse>;
                        denomsFromCreator(request: _78.QueryDenomsFromCreatorRequest): Promise<_78.QueryDenomsFromCreatorResponse>;
                        beforeSendHookAddress(request: _78.QueryBeforeSendHookAddressRequest): Promise<_78.QueryBeforeSendHookAddressResponse>;
                    };
                };
                twap: {
                    v1beta1: {
                        params(request?: _81.ParamsRequest): Promise<_81.ParamsResponse>;
                        arithmeticTwap(request: _81.ArithmeticTwapRequest): Promise<_81.ArithmeticTwapResponse>;
                        arithmeticTwapToNow(request: _81.ArithmeticTwapToNowRequest): Promise<_81.ArithmeticTwapToNowResponse>;
                        geometricTwap(request: _81.GeometricTwapRequest): Promise<_81.GeometricTwapResponse>;
                        geometricTwapToNow(request: _81.GeometricTwapToNowRequest): Promise<_81.GeometricTwapToNowResponse>;
                    };
                };
                txfees: {
                    v1beta1: {
                        feeTokens(request?: _86.QueryFeeTokensRequest): Promise<_86.QueryFeeTokensResponse>;
                        denomSpotPrice(request: _86.QueryDenomSpotPriceRequest): Promise<_86.QueryDenomSpotPriceResponse>;
                        denomPoolId(request: _86.QueryDenomPoolIdRequest): Promise<_86.QueryDenomPoolIdResponse>;
                        baseDenom(request?: _86.QueryBaseDenomRequest): Promise<_86.QueryBaseDenomResponse>;
                        getEipBaseFee(request?: _86.QueryEipBaseFeeRequest): Promise<_86.QueryEipBaseFeeResponse>;
                    };
                };
                valsetpref: {
                    v1beta1: {
                        userValidatorPreferences(request: _87.UserValidatorPreferencesRequest): Promise<_87.UserValidatorPreferencesResponse>;
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
                        totalSupplyWithoutOffset(request?: import("../cosmos/bank/v1beta1/query").QueryTotalSupplyWithoutOffsetRequest): Promise<import("../cosmos/bank/v1beta1/query").QueryTotalSupplyWithoutOffsetResponse>;
                        supplyOfWithoutOffset(request: import("../cosmos/bank/v1beta1/query").QuerySupplyOfWithoutOffsetRequest): Promise<import("../cosmos/bank/v1beta1/query").QuerySupplyOfWithoutOffsetResponse>;
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
            osmosis: {
                concentratedliquidity: {
                    v1beta1: _281.LCDQueryClient;
                };
                cosmwasmpool: {
                    v1beta1: _282.LCDQueryClient;
                };
                downtimedetector: {
                    v1beta1: _283.LCDQueryClient;
                };
                epochs: {
                    v1beta1: _284.LCDQueryClient;
                };
                gamm: {
                    v1beta1: _285.LCDQueryClient;
                    v2: _286.LCDQueryClient;
                };
                ibcratelimit: {
                    v1beta1: _287.LCDQueryClient;
                };
                incentives: _288.LCDQueryClient;
                lockup: _289.LCDQueryClient;
                mint: {
                    v1beta1: _290.LCDQueryClient;
                };
                poolincentives: {
                    v1beta1: _291.LCDQueryClient;
                };
                poolmanager: {
                    v1beta1: _292.LCDQueryClient;
                    v2: _293.LCDQueryClient;
                };
                protorev: {
                    v1beta1: _294.LCDQueryClient;
                };
                superfluid: _295.LCDQueryClient;
                tokenfactory: {
                    v1beta1: _296.LCDQueryClient;
                };
                twap: {
                    v1beta1: _297.LCDQueryClient;
                };
                txfees: {
                    v1beta1: _298.LCDQueryClient;
                };
                valsetpref: {
                    v1beta1: _299.LCDQueryClient;
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
