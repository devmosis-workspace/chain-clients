import * as _19 from "./epochs/genesis";
import * as _20 from "./epochs/query";
import * as _21 from "./gamm/pool-models/balancer/balancerPool";
import * as _22 from "./gamm/v1beta1/query";
import * as _23 from "./gamm/v1beta1/tx";
import * as _24 from "./gamm/pool-models/balancer/tx/tx";
import * as _25 from "./incentives/gauge";
import * as _26 from "./lockup/lock";
import * as _27 from "./lockup/tx";
import * as _28 from "./mint/v1beta1/mint";
import * as _29 from "./mint/v1beta1/query";
import * as _30 from "./pool-incentives/v1beta1/incentives";
import * as _31 from "./pool-incentives/v1beta1/query";
import * as _187 from "./epochs/query.lcd";
import * as _188 from "./gamm/v1beta1/query.lcd";
import * as _189 from "./mint/v1beta1/query.lcd";
import * as _190 from "./pool-incentives/v1beta1/query.lcd";
import * as _191 from "./epochs/query.rpc.Query";
import * as _192 from "./gamm/v1beta1/query.rpc.Query";
import * as _193 from "./mint/v1beta1/query.rpc.Query";
import * as _194 from "./pool-incentives/v1beta1/query.rpc.Query";
import * as _195 from "./gamm/pool-models/balancer/tx/tx.rpc.msg";
import * as _196 from "./gamm/v1beta1/tx.rpc.msg";
import * as _197 from "./lockup/tx.rpc.msg";
export declare namespace osmosis {
    namespace epochs {
        const v1beta1: {
            QueryClientImpl: typeof _191.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                epochInfos(request?: _20.QueryEpochsInfoRequest): Promise<_20.QueryEpochsInfoResponse>;
                currentEpoch(request: _20.QueryCurrentEpochRequest): Promise<_20.QueryCurrentEpochResponse>;
            };
            LCDQueryClient: typeof _187.LCDQueryClient;
            QueryEpochsInfoRequest: {
                typeUrl: string;
                encode(_: _20.QueryEpochsInfoRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _20.QueryEpochsInfoRequest;
                fromPartial(_: Partial<_20.QueryEpochsInfoRequest>): _20.QueryEpochsInfoRequest;
                fromAmino(_: _20.QueryEpochsInfoRequestAmino): _20.QueryEpochsInfoRequest;
                toAmino(_: _20.QueryEpochsInfoRequest): _20.QueryEpochsInfoRequestAmino;
                fromAminoMsg(object: _20.QueryEpochsInfoRequestAminoMsg): _20.QueryEpochsInfoRequest;
                toAminoMsg(message: _20.QueryEpochsInfoRequest): _20.QueryEpochsInfoRequestAminoMsg;
                fromProtoMsg(message: _20.QueryEpochsInfoRequestProtoMsg): _20.QueryEpochsInfoRequest;
                toProto(message: _20.QueryEpochsInfoRequest): Uint8Array;
                toProtoMsg(message: _20.QueryEpochsInfoRequest): _20.QueryEpochsInfoRequestProtoMsg;
            };
            QueryEpochsInfoResponse: {
                typeUrl: string;
                encode(message: _20.QueryEpochsInfoResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _20.QueryEpochsInfoResponse;
                fromPartial(object: Partial<_20.QueryEpochsInfoResponse>): _20.QueryEpochsInfoResponse;
                fromAmino(object: _20.QueryEpochsInfoResponseAmino): _20.QueryEpochsInfoResponse;
                toAmino(message: _20.QueryEpochsInfoResponse): _20.QueryEpochsInfoResponseAmino;
                fromAminoMsg(object: _20.QueryEpochsInfoResponseAminoMsg): _20.QueryEpochsInfoResponse;
                toAminoMsg(message: _20.QueryEpochsInfoResponse): _20.QueryEpochsInfoResponseAminoMsg;
                fromProtoMsg(message: _20.QueryEpochsInfoResponseProtoMsg): _20.QueryEpochsInfoResponse;
                toProto(message: _20.QueryEpochsInfoResponse): Uint8Array;
                toProtoMsg(message: _20.QueryEpochsInfoResponse): _20.QueryEpochsInfoResponseProtoMsg;
            };
            QueryCurrentEpochRequest: {
                typeUrl: string;
                encode(message: _20.QueryCurrentEpochRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _20.QueryCurrentEpochRequest;
                fromPartial(object: Partial<_20.QueryCurrentEpochRequest>): _20.QueryCurrentEpochRequest;
                fromAmino(object: _20.QueryCurrentEpochRequestAmino): _20.QueryCurrentEpochRequest;
                toAmino(message: _20.QueryCurrentEpochRequest): _20.QueryCurrentEpochRequestAmino;
                fromAminoMsg(object: _20.QueryCurrentEpochRequestAminoMsg): _20.QueryCurrentEpochRequest;
                toAminoMsg(message: _20.QueryCurrentEpochRequest): _20.QueryCurrentEpochRequestAminoMsg;
                fromProtoMsg(message: _20.QueryCurrentEpochRequestProtoMsg): _20.QueryCurrentEpochRequest;
                toProto(message: _20.QueryCurrentEpochRequest): Uint8Array;
                toProtoMsg(message: _20.QueryCurrentEpochRequest): _20.QueryCurrentEpochRequestProtoMsg;
            };
            QueryCurrentEpochResponse: {
                typeUrl: string;
                encode(message: _20.QueryCurrentEpochResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _20.QueryCurrentEpochResponse;
                fromPartial(object: Partial<_20.QueryCurrentEpochResponse>): _20.QueryCurrentEpochResponse;
                fromAmino(object: _20.QueryCurrentEpochResponseAmino): _20.QueryCurrentEpochResponse;
                toAmino(message: _20.QueryCurrentEpochResponse): _20.QueryCurrentEpochResponseAmino;
                fromAminoMsg(object: _20.QueryCurrentEpochResponseAminoMsg): _20.QueryCurrentEpochResponse;
                toAminoMsg(message: _20.QueryCurrentEpochResponse): _20.QueryCurrentEpochResponseAminoMsg;
                fromProtoMsg(message: _20.QueryCurrentEpochResponseProtoMsg): _20.QueryCurrentEpochResponse;
                toProto(message: _20.QueryCurrentEpochResponse): Uint8Array;
                toProtoMsg(message: _20.QueryCurrentEpochResponse): _20.QueryCurrentEpochResponseProtoMsg;
            };
            EpochInfo: {
                typeUrl: string;
                encode(message: _19.EpochInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _19.EpochInfo;
                fromPartial(object: Partial<_19.EpochInfo>): _19.EpochInfo;
                fromAmino(object: _19.EpochInfoAmino): _19.EpochInfo;
                toAmino(message: _19.EpochInfo): _19.EpochInfoAmino;
                fromAminoMsg(object: _19.EpochInfoAminoMsg): _19.EpochInfo;
                toAminoMsg(message: _19.EpochInfo): _19.EpochInfoAminoMsg;
                fromProtoMsg(message: _19.EpochInfoProtoMsg): _19.EpochInfo;
                toProto(message: _19.EpochInfo): Uint8Array;
                toProtoMsg(message: _19.EpochInfo): _19.EpochInfoProtoMsg;
            };
            GenesisState: {
                typeUrl: string;
                encode(message: _19.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _19.GenesisState;
                fromPartial(object: Partial<_19.GenesisState>): _19.GenesisState;
                fromAmino(object: _19.GenesisStateAmino): _19.GenesisState;
                toAmino(message: _19.GenesisState): _19.GenesisStateAmino;
                fromAminoMsg(object: _19.GenesisStateAminoMsg): _19.GenesisState;
                toAminoMsg(message: _19.GenesisState): _19.GenesisStateAminoMsg;
                fromProtoMsg(message: _19.GenesisStateProtoMsg): _19.GenesisState;
                toProto(message: _19.GenesisState): Uint8Array;
                toProtoMsg(message: _19.GenesisState): _19.GenesisStateProtoMsg;
            };
        };
    }
    namespace gamm {
        const v1beta1: {
            MsgClientImpl: typeof _196.MsgClientImpl;
            QueryClientImpl: typeof _192.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                pools(request?: _22.QueryPoolsRequest): Promise<_22.QueryPoolsResponse>;
                numPools(request?: _22.QueryNumPoolsRequest): Promise<_22.QueryNumPoolsResponse>;
                totalLiquidity(request?: _22.QueryTotalLiquidityRequest): Promise<_22.QueryTotalLiquidityResponse>;
                pool(request: _22.QueryPoolRequest): Promise<_22.QueryPoolResponse>;
                poolParams(request: _22.QueryPoolParamsRequest): Promise<_22.QueryPoolParamsResponse>;
                totalPoolLiquidity(request: _22.QueryTotalPoolLiquidityRequest): Promise<_22.QueryTotalPoolLiquidityResponse>;
                totalShares(request: _22.QueryTotalSharesRequest): Promise<_22.QueryTotalSharesResponse>;
                spotPrice(request: _22.QuerySpotPriceRequest): Promise<_22.QuerySpotPriceResponse>;
                estimateSwapExactAmountIn(request: _22.QuerySwapExactAmountInRequest): Promise<_22.QuerySwapExactAmountInResponse>;
                estimateSwapExactAmountOut(request: _22.QuerySwapExactAmountOutRequest): Promise<_22.QuerySwapExactAmountOutResponse>;
            };
            LCDQueryClient: typeof _188.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    joinPool(value: _23.MsgJoinPool): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    exitPool(value: _23.MsgExitPool): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    swapExactAmountIn(value: _23.MsgSwapExactAmountIn): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    swapExactAmountOut(value: _23.MsgSwapExactAmountOut): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    joinSwapExternAmountIn(value: _23.MsgJoinSwapExternAmountIn): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    joinSwapShareAmountOut(value: _23.MsgJoinSwapShareAmountOut): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    exitSwapExternAmountOut(value: _23.MsgExitSwapExternAmountOut): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    exitSwapShareAmountIn(value: _23.MsgExitSwapShareAmountIn): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    joinPool(value: _23.MsgJoinPool): {
                        typeUrl: string;
                        value: _23.MsgJoinPool;
                    };
                    exitPool(value: _23.MsgExitPool): {
                        typeUrl: string;
                        value: _23.MsgExitPool;
                    };
                    swapExactAmountIn(value: _23.MsgSwapExactAmountIn): {
                        typeUrl: string;
                        value: _23.MsgSwapExactAmountIn;
                    };
                    swapExactAmountOut(value: _23.MsgSwapExactAmountOut): {
                        typeUrl: string;
                        value: _23.MsgSwapExactAmountOut;
                    };
                    joinSwapExternAmountIn(value: _23.MsgJoinSwapExternAmountIn): {
                        typeUrl: string;
                        value: _23.MsgJoinSwapExternAmountIn;
                    };
                    joinSwapShareAmountOut(value: _23.MsgJoinSwapShareAmountOut): {
                        typeUrl: string;
                        value: _23.MsgJoinSwapShareAmountOut;
                    };
                    exitSwapExternAmountOut(value: _23.MsgExitSwapExternAmountOut): {
                        typeUrl: string;
                        value: _23.MsgExitSwapExternAmountOut;
                    };
                    exitSwapShareAmountIn(value: _23.MsgExitSwapShareAmountIn): {
                        typeUrl: string;
                        value: _23.MsgExitSwapShareAmountIn;
                    };
                };
                fromJSON: {
                    joinPool(value: any): {
                        typeUrl: string;
                        value: _23.MsgJoinPool;
                    };
                    exitPool(value: any): {
                        typeUrl: string;
                        value: _23.MsgExitPool;
                    };
                    swapExactAmountIn(value: any): {
                        typeUrl: string;
                        value: _23.MsgSwapExactAmountIn;
                    };
                    swapExactAmountOut(value: any): {
                        typeUrl: string;
                        value: _23.MsgSwapExactAmountOut;
                    };
                    joinSwapExternAmountIn(value: any): {
                        typeUrl: string;
                        value: _23.MsgJoinSwapExternAmountIn;
                    };
                    joinSwapShareAmountOut(value: any): {
                        typeUrl: string;
                        value: _23.MsgJoinSwapShareAmountOut;
                    };
                    exitSwapExternAmountOut(value: any): {
                        typeUrl: string;
                        value: _23.MsgExitSwapExternAmountOut;
                    };
                    exitSwapShareAmountIn(value: any): {
                        typeUrl: string;
                        value: _23.MsgExitSwapShareAmountIn;
                    };
                };
                fromPartial: {
                    joinPool(value: _23.MsgJoinPool): {
                        typeUrl: string;
                        value: _23.MsgJoinPool;
                    };
                    exitPool(value: _23.MsgExitPool): {
                        typeUrl: string;
                        value: _23.MsgExitPool;
                    };
                    swapExactAmountIn(value: _23.MsgSwapExactAmountIn): {
                        typeUrl: string;
                        value: _23.MsgSwapExactAmountIn;
                    };
                    swapExactAmountOut(value: _23.MsgSwapExactAmountOut): {
                        typeUrl: string;
                        value: _23.MsgSwapExactAmountOut;
                    };
                    joinSwapExternAmountIn(value: _23.MsgJoinSwapExternAmountIn): {
                        typeUrl: string;
                        value: _23.MsgJoinSwapExternAmountIn;
                    };
                    joinSwapShareAmountOut(value: _23.MsgJoinSwapShareAmountOut): {
                        typeUrl: string;
                        value: _23.MsgJoinSwapShareAmountOut;
                    };
                    exitSwapExternAmountOut(value: _23.MsgExitSwapExternAmountOut): {
                        typeUrl: string;
                        value: _23.MsgExitSwapExternAmountOut;
                    };
                    exitSwapShareAmountIn(value: _23.MsgExitSwapShareAmountIn): {
                        typeUrl: string;
                        value: _23.MsgExitSwapShareAmountIn;
                    };
                };
            };
            AminoConverter: {
                "/osmosis.gamm.v1beta1.MsgJoinPool": {
                    aminoType: string;
                    toAmino: (message: _23.MsgJoinPool) => _23.MsgJoinPoolAmino;
                    fromAmino: (object: _23.MsgJoinPoolAmino) => _23.MsgJoinPool;
                };
                "/osmosis.gamm.v1beta1.MsgExitPool": {
                    aminoType: string;
                    toAmino: (message: _23.MsgExitPool) => _23.MsgExitPoolAmino;
                    fromAmino: (object: _23.MsgExitPoolAmino) => _23.MsgExitPool;
                };
                "/osmosis.gamm.v1beta1.MsgSwapExactAmountIn": {
                    aminoType: string;
                    toAmino: (message: _23.MsgSwapExactAmountIn) => _23.MsgSwapExactAmountInAmino;
                    fromAmino: (object: _23.MsgSwapExactAmountInAmino) => _23.MsgSwapExactAmountIn;
                };
                "/osmosis.gamm.v1beta1.MsgSwapExactAmountOut": {
                    aminoType: string;
                    toAmino: (message: _23.MsgSwapExactAmountOut) => _23.MsgSwapExactAmountOutAmino;
                    fromAmino: (object: _23.MsgSwapExactAmountOutAmino) => _23.MsgSwapExactAmountOut;
                };
                "/osmosis.gamm.v1beta1.MsgJoinSwapExternAmountIn": {
                    aminoType: string;
                    toAmino: (message: _23.MsgJoinSwapExternAmountIn) => _23.MsgJoinSwapExternAmountInAmino;
                    fromAmino: (object: _23.MsgJoinSwapExternAmountInAmino) => _23.MsgJoinSwapExternAmountIn;
                };
                "/osmosis.gamm.v1beta1.MsgJoinSwapShareAmountOut": {
                    aminoType: string;
                    toAmino: (message: _23.MsgJoinSwapShareAmountOut) => _23.MsgJoinSwapShareAmountOutAmino;
                    fromAmino: (object: _23.MsgJoinSwapShareAmountOutAmino) => _23.MsgJoinSwapShareAmountOut;
                };
                "/osmosis.gamm.v1beta1.MsgExitSwapExternAmountOut": {
                    aminoType: string;
                    toAmino: (message: _23.MsgExitSwapExternAmountOut) => _23.MsgExitSwapExternAmountOutAmino;
                    fromAmino: (object: _23.MsgExitSwapExternAmountOutAmino) => _23.MsgExitSwapExternAmountOut;
                };
                "/osmosis.gamm.v1beta1.MsgExitSwapShareAmountIn": {
                    aminoType: string;
                    toAmino: (message: _23.MsgExitSwapShareAmountIn) => _23.MsgExitSwapShareAmountInAmino;
                    fromAmino: (object: _23.MsgExitSwapShareAmountInAmino) => _23.MsgExitSwapShareAmountIn;
                };
            };
            MsgJoinPool: {
                typeUrl: string;
                encode(message: _23.MsgJoinPool, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _23.MsgJoinPool;
                fromPartial(object: Partial<_23.MsgJoinPool>): _23.MsgJoinPool;
                fromAmino(object: _23.MsgJoinPoolAmino): _23.MsgJoinPool;
                toAmino(message: _23.MsgJoinPool): _23.MsgJoinPoolAmino;
                fromAminoMsg(object: _23.MsgJoinPoolAminoMsg): _23.MsgJoinPool;
                toAminoMsg(message: _23.MsgJoinPool): _23.MsgJoinPoolAminoMsg;
                fromProtoMsg(message: _23.MsgJoinPoolProtoMsg): _23.MsgJoinPool;
                toProto(message: _23.MsgJoinPool): Uint8Array;
                toProtoMsg(message: _23.MsgJoinPool): _23.MsgJoinPoolProtoMsg;
            };
            MsgJoinPoolResponse: {
                typeUrl: string;
                encode(message: _23.MsgJoinPoolResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _23.MsgJoinPoolResponse;
                fromPartial(object: Partial<_23.MsgJoinPoolResponse>): _23.MsgJoinPoolResponse;
                fromAmino(object: _23.MsgJoinPoolResponseAmino): _23.MsgJoinPoolResponse;
                toAmino(message: _23.MsgJoinPoolResponse): _23.MsgJoinPoolResponseAmino;
                fromAminoMsg(object: _23.MsgJoinPoolResponseAminoMsg): _23.MsgJoinPoolResponse;
                toAminoMsg(message: _23.MsgJoinPoolResponse): _23.MsgJoinPoolResponseAminoMsg;
                fromProtoMsg(message: _23.MsgJoinPoolResponseProtoMsg): _23.MsgJoinPoolResponse;
                toProto(message: _23.MsgJoinPoolResponse): Uint8Array;
                toProtoMsg(message: _23.MsgJoinPoolResponse): _23.MsgJoinPoolResponseProtoMsg;
            };
            MsgExitPool: {
                typeUrl: string;
                encode(message: _23.MsgExitPool, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _23.MsgExitPool;
                fromPartial(object: Partial<_23.MsgExitPool>): _23.MsgExitPool;
                fromAmino(object: _23.MsgExitPoolAmino): _23.MsgExitPool;
                toAmino(message: _23.MsgExitPool): _23.MsgExitPoolAmino;
                fromAminoMsg(object: _23.MsgExitPoolAminoMsg): _23.MsgExitPool;
                toAminoMsg(message: _23.MsgExitPool): _23.MsgExitPoolAminoMsg;
                fromProtoMsg(message: _23.MsgExitPoolProtoMsg): _23.MsgExitPool;
                toProto(message: _23.MsgExitPool): Uint8Array;
                toProtoMsg(message: _23.MsgExitPool): _23.MsgExitPoolProtoMsg;
            };
            MsgExitPoolResponse: {
                typeUrl: string;
                encode(message: _23.MsgExitPoolResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _23.MsgExitPoolResponse;
                fromPartial(object: Partial<_23.MsgExitPoolResponse>): _23.MsgExitPoolResponse;
                fromAmino(object: _23.MsgExitPoolResponseAmino): _23.MsgExitPoolResponse;
                toAmino(message: _23.MsgExitPoolResponse): _23.MsgExitPoolResponseAmino;
                fromAminoMsg(object: _23.MsgExitPoolResponseAminoMsg): _23.MsgExitPoolResponse;
                toAminoMsg(message: _23.MsgExitPoolResponse): _23.MsgExitPoolResponseAminoMsg;
                fromProtoMsg(message: _23.MsgExitPoolResponseProtoMsg): _23.MsgExitPoolResponse;
                toProto(message: _23.MsgExitPoolResponse): Uint8Array;
                toProtoMsg(message: _23.MsgExitPoolResponse): _23.MsgExitPoolResponseProtoMsg;
            };
            SwapAmountInRoute: {
                typeUrl: string;
                encode(message: _23.SwapAmountInRoute, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _23.SwapAmountInRoute;
                fromPartial(object: Partial<_23.SwapAmountInRoute>): _23.SwapAmountInRoute;
                fromAmino(object: _23.SwapAmountInRouteAmino): _23.SwapAmountInRoute;
                toAmino(message: _23.SwapAmountInRoute): _23.SwapAmountInRouteAmino;
                fromAminoMsg(object: _23.SwapAmountInRouteAminoMsg): _23.SwapAmountInRoute;
                toAminoMsg(message: _23.SwapAmountInRoute): _23.SwapAmountInRouteAminoMsg;
                fromProtoMsg(message: _23.SwapAmountInRouteProtoMsg): _23.SwapAmountInRoute;
                toProto(message: _23.SwapAmountInRoute): Uint8Array;
                toProtoMsg(message: _23.SwapAmountInRoute): _23.SwapAmountInRouteProtoMsg;
            };
            MsgSwapExactAmountIn: {
                typeUrl: string;
                encode(message: _23.MsgSwapExactAmountIn, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _23.MsgSwapExactAmountIn;
                fromPartial(object: Partial<_23.MsgSwapExactAmountIn>): _23.MsgSwapExactAmountIn;
                fromAmino(object: _23.MsgSwapExactAmountInAmino): _23.MsgSwapExactAmountIn;
                toAmino(message: _23.MsgSwapExactAmountIn): _23.MsgSwapExactAmountInAmino;
                fromAminoMsg(object: _23.MsgSwapExactAmountInAminoMsg): _23.MsgSwapExactAmountIn;
                toAminoMsg(message: _23.MsgSwapExactAmountIn): _23.MsgSwapExactAmountInAminoMsg;
                fromProtoMsg(message: _23.MsgSwapExactAmountInProtoMsg): _23.MsgSwapExactAmountIn;
                toProto(message: _23.MsgSwapExactAmountIn): Uint8Array;
                toProtoMsg(message: _23.MsgSwapExactAmountIn): _23.MsgSwapExactAmountInProtoMsg;
            };
            MsgSwapExactAmountInResponse: {
                typeUrl: string;
                encode(message: _23.MsgSwapExactAmountInResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _23.MsgSwapExactAmountInResponse;
                fromPartial(object: Partial<_23.MsgSwapExactAmountInResponse>): _23.MsgSwapExactAmountInResponse;
                fromAmino(object: _23.MsgSwapExactAmountInResponseAmino): _23.MsgSwapExactAmountInResponse;
                toAmino(message: _23.MsgSwapExactAmountInResponse): _23.MsgSwapExactAmountInResponseAmino;
                fromAminoMsg(object: _23.MsgSwapExactAmountInResponseAminoMsg): _23.MsgSwapExactAmountInResponse;
                toAminoMsg(message: _23.MsgSwapExactAmountInResponse): _23.MsgSwapExactAmountInResponseAminoMsg;
                fromProtoMsg(message: _23.MsgSwapExactAmountInResponseProtoMsg): _23.MsgSwapExactAmountInResponse;
                toProto(message: _23.MsgSwapExactAmountInResponse): Uint8Array;
                toProtoMsg(message: _23.MsgSwapExactAmountInResponse): _23.MsgSwapExactAmountInResponseProtoMsg;
            };
            SwapAmountOutRoute: {
                typeUrl: string;
                encode(message: _23.SwapAmountOutRoute, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _23.SwapAmountOutRoute;
                fromPartial(object: Partial<_23.SwapAmountOutRoute>): _23.SwapAmountOutRoute;
                fromAmino(object: _23.SwapAmountOutRouteAmino): _23.SwapAmountOutRoute;
                toAmino(message: _23.SwapAmountOutRoute): _23.SwapAmountOutRouteAmino;
                fromAminoMsg(object: _23.SwapAmountOutRouteAminoMsg): _23.SwapAmountOutRoute;
                toAminoMsg(message: _23.SwapAmountOutRoute): _23.SwapAmountOutRouteAminoMsg;
                fromProtoMsg(message: _23.SwapAmountOutRouteProtoMsg): _23.SwapAmountOutRoute;
                toProto(message: _23.SwapAmountOutRoute): Uint8Array;
                toProtoMsg(message: _23.SwapAmountOutRoute): _23.SwapAmountOutRouteProtoMsg;
            };
            MsgSwapExactAmountOut: {
                typeUrl: string;
                encode(message: _23.MsgSwapExactAmountOut, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _23.MsgSwapExactAmountOut;
                fromPartial(object: Partial<_23.MsgSwapExactAmountOut>): _23.MsgSwapExactAmountOut;
                fromAmino(object: _23.MsgSwapExactAmountOutAmino): _23.MsgSwapExactAmountOut;
                toAmino(message: _23.MsgSwapExactAmountOut): _23.MsgSwapExactAmountOutAmino;
                fromAminoMsg(object: _23.MsgSwapExactAmountOutAminoMsg): _23.MsgSwapExactAmountOut;
                toAminoMsg(message: _23.MsgSwapExactAmountOut): _23.MsgSwapExactAmountOutAminoMsg;
                fromProtoMsg(message: _23.MsgSwapExactAmountOutProtoMsg): _23.MsgSwapExactAmountOut;
                toProto(message: _23.MsgSwapExactAmountOut): Uint8Array;
                toProtoMsg(message: _23.MsgSwapExactAmountOut): _23.MsgSwapExactAmountOutProtoMsg;
            };
            MsgSwapExactAmountOutResponse: {
                typeUrl: string;
                encode(message: _23.MsgSwapExactAmountOutResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _23.MsgSwapExactAmountOutResponse;
                fromPartial(object: Partial<_23.MsgSwapExactAmountOutResponse>): _23.MsgSwapExactAmountOutResponse;
                fromAmino(object: _23.MsgSwapExactAmountOutResponseAmino): _23.MsgSwapExactAmountOutResponse;
                toAmino(message: _23.MsgSwapExactAmountOutResponse): _23.MsgSwapExactAmountOutResponseAmino;
                fromAminoMsg(object: _23.MsgSwapExactAmountOutResponseAminoMsg): _23.MsgSwapExactAmountOutResponse;
                toAminoMsg(message: _23.MsgSwapExactAmountOutResponse): _23.MsgSwapExactAmountOutResponseAminoMsg;
                fromProtoMsg(message: _23.MsgSwapExactAmountOutResponseProtoMsg): _23.MsgSwapExactAmountOutResponse;
                toProto(message: _23.MsgSwapExactAmountOutResponse): Uint8Array;
                toProtoMsg(message: _23.MsgSwapExactAmountOutResponse): _23.MsgSwapExactAmountOutResponseProtoMsg;
            };
            MsgJoinSwapExternAmountIn: {
                typeUrl: string;
                encode(message: _23.MsgJoinSwapExternAmountIn, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _23.MsgJoinSwapExternAmountIn;
                fromPartial(object: Partial<_23.MsgJoinSwapExternAmountIn>): _23.MsgJoinSwapExternAmountIn;
                fromAmino(object: _23.MsgJoinSwapExternAmountInAmino): _23.MsgJoinSwapExternAmountIn;
                toAmino(message: _23.MsgJoinSwapExternAmountIn): _23.MsgJoinSwapExternAmountInAmino;
                fromAminoMsg(object: _23.MsgJoinSwapExternAmountInAminoMsg): _23.MsgJoinSwapExternAmountIn;
                toAminoMsg(message: _23.MsgJoinSwapExternAmountIn): _23.MsgJoinSwapExternAmountInAminoMsg;
                fromProtoMsg(message: _23.MsgJoinSwapExternAmountInProtoMsg): _23.MsgJoinSwapExternAmountIn;
                toProto(message: _23.MsgJoinSwapExternAmountIn): Uint8Array;
                toProtoMsg(message: _23.MsgJoinSwapExternAmountIn): _23.MsgJoinSwapExternAmountInProtoMsg;
            };
            MsgJoinSwapExternAmountInResponse: {
                typeUrl: string;
                encode(message: _23.MsgJoinSwapExternAmountInResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _23.MsgJoinSwapExternAmountInResponse;
                fromPartial(object: Partial<_23.MsgJoinSwapExternAmountInResponse>): _23.MsgJoinSwapExternAmountInResponse;
                fromAmino(object: _23.MsgJoinSwapExternAmountInResponseAmino): _23.MsgJoinSwapExternAmountInResponse;
                toAmino(message: _23.MsgJoinSwapExternAmountInResponse): _23.MsgJoinSwapExternAmountInResponseAmino;
                fromAminoMsg(object: _23.MsgJoinSwapExternAmountInResponseAminoMsg): _23.MsgJoinSwapExternAmountInResponse;
                toAminoMsg(message: _23.MsgJoinSwapExternAmountInResponse): _23.MsgJoinSwapExternAmountInResponseAminoMsg;
                fromProtoMsg(message: _23.MsgJoinSwapExternAmountInResponseProtoMsg): _23.MsgJoinSwapExternAmountInResponse;
                toProto(message: _23.MsgJoinSwapExternAmountInResponse): Uint8Array;
                toProtoMsg(message: _23.MsgJoinSwapExternAmountInResponse): _23.MsgJoinSwapExternAmountInResponseProtoMsg;
            };
            MsgJoinSwapShareAmountOut: {
                typeUrl: string;
                encode(message: _23.MsgJoinSwapShareAmountOut, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _23.MsgJoinSwapShareAmountOut;
                fromPartial(object: Partial<_23.MsgJoinSwapShareAmountOut>): _23.MsgJoinSwapShareAmountOut;
                fromAmino(object: _23.MsgJoinSwapShareAmountOutAmino): _23.MsgJoinSwapShareAmountOut;
                toAmino(message: _23.MsgJoinSwapShareAmountOut): _23.MsgJoinSwapShareAmountOutAmino;
                fromAminoMsg(object: _23.MsgJoinSwapShareAmountOutAminoMsg): _23.MsgJoinSwapShareAmountOut;
                toAminoMsg(message: _23.MsgJoinSwapShareAmountOut): _23.MsgJoinSwapShareAmountOutAminoMsg;
                fromProtoMsg(message: _23.MsgJoinSwapShareAmountOutProtoMsg): _23.MsgJoinSwapShareAmountOut;
                toProto(message: _23.MsgJoinSwapShareAmountOut): Uint8Array;
                toProtoMsg(message: _23.MsgJoinSwapShareAmountOut): _23.MsgJoinSwapShareAmountOutProtoMsg;
            };
            MsgJoinSwapShareAmountOutResponse: {
                typeUrl: string;
                encode(message: _23.MsgJoinSwapShareAmountOutResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _23.MsgJoinSwapShareAmountOutResponse;
                fromPartial(object: Partial<_23.MsgJoinSwapShareAmountOutResponse>): _23.MsgJoinSwapShareAmountOutResponse;
                fromAmino(object: _23.MsgJoinSwapShareAmountOutResponseAmino): _23.MsgJoinSwapShareAmountOutResponse;
                toAmino(message: _23.MsgJoinSwapShareAmountOutResponse): _23.MsgJoinSwapShareAmountOutResponseAmino;
                fromAminoMsg(object: _23.MsgJoinSwapShareAmountOutResponseAminoMsg): _23.MsgJoinSwapShareAmountOutResponse;
                toAminoMsg(message: _23.MsgJoinSwapShareAmountOutResponse): _23.MsgJoinSwapShareAmountOutResponseAminoMsg;
                fromProtoMsg(message: _23.MsgJoinSwapShareAmountOutResponseProtoMsg): _23.MsgJoinSwapShareAmountOutResponse;
                toProto(message: _23.MsgJoinSwapShareAmountOutResponse): Uint8Array;
                toProtoMsg(message: _23.MsgJoinSwapShareAmountOutResponse): _23.MsgJoinSwapShareAmountOutResponseProtoMsg;
            };
            MsgExitSwapShareAmountIn: {
                typeUrl: string;
                encode(message: _23.MsgExitSwapShareAmountIn, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _23.MsgExitSwapShareAmountIn;
                fromPartial(object: Partial<_23.MsgExitSwapShareAmountIn>): _23.MsgExitSwapShareAmountIn;
                fromAmino(object: _23.MsgExitSwapShareAmountInAmino): _23.MsgExitSwapShareAmountIn;
                toAmino(message: _23.MsgExitSwapShareAmountIn): _23.MsgExitSwapShareAmountInAmino;
                fromAminoMsg(object: _23.MsgExitSwapShareAmountInAminoMsg): _23.MsgExitSwapShareAmountIn;
                toAminoMsg(message: _23.MsgExitSwapShareAmountIn): _23.MsgExitSwapShareAmountInAminoMsg;
                fromProtoMsg(message: _23.MsgExitSwapShareAmountInProtoMsg): _23.MsgExitSwapShareAmountIn;
                toProto(message: _23.MsgExitSwapShareAmountIn): Uint8Array;
                toProtoMsg(message: _23.MsgExitSwapShareAmountIn): _23.MsgExitSwapShareAmountInProtoMsg;
            };
            MsgExitSwapShareAmountInResponse: {
                typeUrl: string;
                encode(message: _23.MsgExitSwapShareAmountInResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _23.MsgExitSwapShareAmountInResponse;
                fromPartial(object: Partial<_23.MsgExitSwapShareAmountInResponse>): _23.MsgExitSwapShareAmountInResponse;
                fromAmino(object: _23.MsgExitSwapShareAmountInResponseAmino): _23.MsgExitSwapShareAmountInResponse;
                toAmino(message: _23.MsgExitSwapShareAmountInResponse): _23.MsgExitSwapShareAmountInResponseAmino;
                fromAminoMsg(object: _23.MsgExitSwapShareAmountInResponseAminoMsg): _23.MsgExitSwapShareAmountInResponse;
                toAminoMsg(message: _23.MsgExitSwapShareAmountInResponse): _23.MsgExitSwapShareAmountInResponseAminoMsg;
                fromProtoMsg(message: _23.MsgExitSwapShareAmountInResponseProtoMsg): _23.MsgExitSwapShareAmountInResponse;
                toProto(message: _23.MsgExitSwapShareAmountInResponse): Uint8Array;
                toProtoMsg(message: _23.MsgExitSwapShareAmountInResponse): _23.MsgExitSwapShareAmountInResponseProtoMsg;
            };
            MsgExitSwapExternAmountOut: {
                typeUrl: string;
                encode(message: _23.MsgExitSwapExternAmountOut, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _23.MsgExitSwapExternAmountOut;
                fromPartial(object: Partial<_23.MsgExitSwapExternAmountOut>): _23.MsgExitSwapExternAmountOut;
                fromAmino(object: _23.MsgExitSwapExternAmountOutAmino): _23.MsgExitSwapExternAmountOut;
                toAmino(message: _23.MsgExitSwapExternAmountOut): _23.MsgExitSwapExternAmountOutAmino;
                fromAminoMsg(object: _23.MsgExitSwapExternAmountOutAminoMsg): _23.MsgExitSwapExternAmountOut;
                toAminoMsg(message: _23.MsgExitSwapExternAmountOut): _23.MsgExitSwapExternAmountOutAminoMsg;
                fromProtoMsg(message: _23.MsgExitSwapExternAmountOutProtoMsg): _23.MsgExitSwapExternAmountOut;
                toProto(message: _23.MsgExitSwapExternAmountOut): Uint8Array;
                toProtoMsg(message: _23.MsgExitSwapExternAmountOut): _23.MsgExitSwapExternAmountOutProtoMsg;
            };
            MsgExitSwapExternAmountOutResponse: {
                typeUrl: string;
                encode(message: _23.MsgExitSwapExternAmountOutResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _23.MsgExitSwapExternAmountOutResponse;
                fromPartial(object: Partial<_23.MsgExitSwapExternAmountOutResponse>): _23.MsgExitSwapExternAmountOutResponse;
                fromAmino(object: _23.MsgExitSwapExternAmountOutResponseAmino): _23.MsgExitSwapExternAmountOutResponse;
                toAmino(message: _23.MsgExitSwapExternAmountOutResponse): _23.MsgExitSwapExternAmountOutResponseAmino;
                fromAminoMsg(object: _23.MsgExitSwapExternAmountOutResponseAminoMsg): _23.MsgExitSwapExternAmountOutResponse;
                toAminoMsg(message: _23.MsgExitSwapExternAmountOutResponse): _23.MsgExitSwapExternAmountOutResponseAminoMsg;
                fromProtoMsg(message: _23.MsgExitSwapExternAmountOutResponseProtoMsg): _23.MsgExitSwapExternAmountOutResponse;
                toProto(message: _23.MsgExitSwapExternAmountOutResponse): Uint8Array;
                toProtoMsg(message: _23.MsgExitSwapExternAmountOutResponse): _23.MsgExitSwapExternAmountOutResponseProtoMsg;
            };
            QueryPoolRequest: {
                typeUrl: string;
                encode(message: _22.QueryPoolRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _22.QueryPoolRequest;
                fromPartial(object: Partial<_22.QueryPoolRequest>): _22.QueryPoolRequest;
                fromAmino(object: _22.QueryPoolRequestAmino): _22.QueryPoolRequest;
                toAmino(message: _22.QueryPoolRequest): _22.QueryPoolRequestAmino;
                fromAminoMsg(object: _22.QueryPoolRequestAminoMsg): _22.QueryPoolRequest;
                toAminoMsg(message: _22.QueryPoolRequest): _22.QueryPoolRequestAminoMsg;
                fromProtoMsg(message: _22.QueryPoolRequestProtoMsg): _22.QueryPoolRequest;
                toProto(message: _22.QueryPoolRequest): Uint8Array;
                toProtoMsg(message: _22.QueryPoolRequest): _22.QueryPoolRequestProtoMsg;
            };
            QueryPoolResponse: {
                typeUrl: string;
                encode(message: _22.QueryPoolResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _22.QueryPoolResponse;
                fromPartial(object: Partial<_22.QueryPoolResponse>): _22.QueryPoolResponse;
                fromAmino(object: _22.QueryPoolResponseAmino): _22.QueryPoolResponse;
                toAmino(message: _22.QueryPoolResponse): _22.QueryPoolResponseAmino;
                fromAminoMsg(object: _22.QueryPoolResponseAminoMsg): _22.QueryPoolResponse;
                toAminoMsg(message: _22.QueryPoolResponse): _22.QueryPoolResponseAminoMsg;
                fromProtoMsg(message: _22.QueryPoolResponseProtoMsg): _22.QueryPoolResponse;
                toProto(message: _22.QueryPoolResponse): Uint8Array;
                toProtoMsg(message: _22.QueryPoolResponse): _22.QueryPoolResponseProtoMsg;
            };
            QueryPoolsRequest: {
                typeUrl: string;
                encode(message: _22.QueryPoolsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _22.QueryPoolsRequest;
                fromPartial(object: Partial<_22.QueryPoolsRequest>): _22.QueryPoolsRequest;
                fromAmino(object: _22.QueryPoolsRequestAmino): _22.QueryPoolsRequest;
                toAmino(message: _22.QueryPoolsRequest): _22.QueryPoolsRequestAmino;
                fromAminoMsg(object: _22.QueryPoolsRequestAminoMsg): _22.QueryPoolsRequest;
                toAminoMsg(message: _22.QueryPoolsRequest): _22.QueryPoolsRequestAminoMsg;
                fromProtoMsg(message: _22.QueryPoolsRequestProtoMsg): _22.QueryPoolsRequest;
                toProto(message: _22.QueryPoolsRequest): Uint8Array;
                toProtoMsg(message: _22.QueryPoolsRequest): _22.QueryPoolsRequestProtoMsg;
            };
            QueryPoolsResponse: {
                typeUrl: string;
                encode(message: _22.QueryPoolsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _22.QueryPoolsResponse;
                fromPartial(object: Partial<_22.QueryPoolsResponse>): _22.QueryPoolsResponse;
                fromAmino(object: _22.QueryPoolsResponseAmino): _22.QueryPoolsResponse;
                toAmino(message: _22.QueryPoolsResponse): _22.QueryPoolsResponseAmino;
                fromAminoMsg(object: _22.QueryPoolsResponseAminoMsg): _22.QueryPoolsResponse;
                toAminoMsg(message: _22.QueryPoolsResponse): _22.QueryPoolsResponseAminoMsg;
                fromProtoMsg(message: _22.QueryPoolsResponseProtoMsg): _22.QueryPoolsResponse;
                toProto(message: _22.QueryPoolsResponse): Uint8Array;
                toProtoMsg(message: _22.QueryPoolsResponse): _22.QueryPoolsResponseProtoMsg;
            };
            QueryNumPoolsRequest: {
                typeUrl: string;
                encode(_: _22.QueryNumPoolsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _22.QueryNumPoolsRequest;
                fromPartial(_: Partial<_22.QueryNumPoolsRequest>): _22.QueryNumPoolsRequest;
                fromAmino(_: _22.QueryNumPoolsRequestAmino): _22.QueryNumPoolsRequest;
                toAmino(_: _22.QueryNumPoolsRequest): _22.QueryNumPoolsRequestAmino;
                fromAminoMsg(object: _22.QueryNumPoolsRequestAminoMsg): _22.QueryNumPoolsRequest;
                toAminoMsg(message: _22.QueryNumPoolsRequest): _22.QueryNumPoolsRequestAminoMsg;
                fromProtoMsg(message: _22.QueryNumPoolsRequestProtoMsg): _22.QueryNumPoolsRequest;
                toProto(message: _22.QueryNumPoolsRequest): Uint8Array;
                toProtoMsg(message: _22.QueryNumPoolsRequest): _22.QueryNumPoolsRequestProtoMsg;
            };
            QueryNumPoolsResponse: {
                typeUrl: string;
                encode(message: _22.QueryNumPoolsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _22.QueryNumPoolsResponse;
                fromPartial(object: Partial<_22.QueryNumPoolsResponse>): _22.QueryNumPoolsResponse;
                fromAmino(object: _22.QueryNumPoolsResponseAmino): _22.QueryNumPoolsResponse;
                toAmino(message: _22.QueryNumPoolsResponse): _22.QueryNumPoolsResponseAmino;
                fromAminoMsg(object: _22.QueryNumPoolsResponseAminoMsg): _22.QueryNumPoolsResponse;
                toAminoMsg(message: _22.QueryNumPoolsResponse): _22.QueryNumPoolsResponseAminoMsg;
                fromProtoMsg(message: _22.QueryNumPoolsResponseProtoMsg): _22.QueryNumPoolsResponse;
                toProto(message: _22.QueryNumPoolsResponse): Uint8Array;
                toProtoMsg(message: _22.QueryNumPoolsResponse): _22.QueryNumPoolsResponseProtoMsg;
            };
            QueryPoolParamsRequest: {
                typeUrl: string;
                encode(message: _22.QueryPoolParamsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _22.QueryPoolParamsRequest;
                fromPartial(object: Partial<_22.QueryPoolParamsRequest>): _22.QueryPoolParamsRequest;
                fromAmino(object: _22.QueryPoolParamsRequestAmino): _22.QueryPoolParamsRequest;
                toAmino(message: _22.QueryPoolParamsRequest): _22.QueryPoolParamsRequestAmino;
                fromAminoMsg(object: _22.QueryPoolParamsRequestAminoMsg): _22.QueryPoolParamsRequest;
                toAminoMsg(message: _22.QueryPoolParamsRequest): _22.QueryPoolParamsRequestAminoMsg;
                fromProtoMsg(message: _22.QueryPoolParamsRequestProtoMsg): _22.QueryPoolParamsRequest;
                toProto(message: _22.QueryPoolParamsRequest): Uint8Array;
                toProtoMsg(message: _22.QueryPoolParamsRequest): _22.QueryPoolParamsRequestProtoMsg;
            };
            QueryPoolParamsResponse: {
                typeUrl: string;
                encode(message: _22.QueryPoolParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _22.QueryPoolParamsResponse;
                fromPartial(object: Partial<_22.QueryPoolParamsResponse>): _22.QueryPoolParamsResponse;
                fromAmino(object: _22.QueryPoolParamsResponseAmino): _22.QueryPoolParamsResponse;
                toAmino(message: _22.QueryPoolParamsResponse): _22.QueryPoolParamsResponseAmino;
                fromAminoMsg(object: _22.QueryPoolParamsResponseAminoMsg): _22.QueryPoolParamsResponse;
                toAminoMsg(message: _22.QueryPoolParamsResponse): _22.QueryPoolParamsResponseAminoMsg;
                fromProtoMsg(message: _22.QueryPoolParamsResponseProtoMsg): _22.QueryPoolParamsResponse;
                toProto(message: _22.QueryPoolParamsResponse): Uint8Array;
                toProtoMsg(message: _22.QueryPoolParamsResponse): _22.QueryPoolParamsResponseProtoMsg;
            };
            QueryTotalPoolLiquidityRequest: {
                typeUrl: string;
                encode(message: _22.QueryTotalPoolLiquidityRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _22.QueryTotalPoolLiquidityRequest;
                fromPartial(object: Partial<_22.QueryTotalPoolLiquidityRequest>): _22.QueryTotalPoolLiquidityRequest;
                fromAmino(object: _22.QueryTotalPoolLiquidityRequestAmino): _22.QueryTotalPoolLiquidityRequest;
                toAmino(message: _22.QueryTotalPoolLiquidityRequest): _22.QueryTotalPoolLiquidityRequestAmino;
                fromAminoMsg(object: _22.QueryTotalPoolLiquidityRequestAminoMsg): _22.QueryTotalPoolLiquidityRequest;
                toAminoMsg(message: _22.QueryTotalPoolLiquidityRequest): _22.QueryTotalPoolLiquidityRequestAminoMsg;
                fromProtoMsg(message: _22.QueryTotalPoolLiquidityRequestProtoMsg): _22.QueryTotalPoolLiquidityRequest;
                toProto(message: _22.QueryTotalPoolLiquidityRequest): Uint8Array;
                toProtoMsg(message: _22.QueryTotalPoolLiquidityRequest): _22.QueryTotalPoolLiquidityRequestProtoMsg;
            };
            QueryTotalPoolLiquidityResponse: {
                typeUrl: string;
                encode(message: _22.QueryTotalPoolLiquidityResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _22.QueryTotalPoolLiquidityResponse;
                fromPartial(object: Partial<_22.QueryTotalPoolLiquidityResponse>): _22.QueryTotalPoolLiquidityResponse;
                fromAmino(object: _22.QueryTotalPoolLiquidityResponseAmino): _22.QueryTotalPoolLiquidityResponse;
                toAmino(message: _22.QueryTotalPoolLiquidityResponse): _22.QueryTotalPoolLiquidityResponseAmino;
                fromAminoMsg(object: _22.QueryTotalPoolLiquidityResponseAminoMsg): _22.QueryTotalPoolLiquidityResponse;
                toAminoMsg(message: _22.QueryTotalPoolLiquidityResponse): _22.QueryTotalPoolLiquidityResponseAminoMsg;
                fromProtoMsg(message: _22.QueryTotalPoolLiquidityResponseProtoMsg): _22.QueryTotalPoolLiquidityResponse;
                toProto(message: _22.QueryTotalPoolLiquidityResponse): Uint8Array;
                toProtoMsg(message: _22.QueryTotalPoolLiquidityResponse): _22.QueryTotalPoolLiquidityResponseProtoMsg;
            };
            QueryTotalSharesRequest: {
                typeUrl: string;
                encode(message: _22.QueryTotalSharesRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _22.QueryTotalSharesRequest;
                fromPartial(object: Partial<_22.QueryTotalSharesRequest>): _22.QueryTotalSharesRequest;
                fromAmino(object: _22.QueryTotalSharesRequestAmino): _22.QueryTotalSharesRequest;
                toAmino(message: _22.QueryTotalSharesRequest): _22.QueryTotalSharesRequestAmino;
                fromAminoMsg(object: _22.QueryTotalSharesRequestAminoMsg): _22.QueryTotalSharesRequest;
                toAminoMsg(message: _22.QueryTotalSharesRequest): _22.QueryTotalSharesRequestAminoMsg;
                fromProtoMsg(message: _22.QueryTotalSharesRequestProtoMsg): _22.QueryTotalSharesRequest;
                toProto(message: _22.QueryTotalSharesRequest): Uint8Array;
                toProtoMsg(message: _22.QueryTotalSharesRequest): _22.QueryTotalSharesRequestProtoMsg;
            };
            QueryTotalSharesResponse: {
                typeUrl: string;
                encode(message: _22.QueryTotalSharesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _22.QueryTotalSharesResponse;
                fromPartial(object: Partial<_22.QueryTotalSharesResponse>): _22.QueryTotalSharesResponse;
                fromAmino(object: _22.QueryTotalSharesResponseAmino): _22.QueryTotalSharesResponse;
                toAmino(message: _22.QueryTotalSharesResponse): _22.QueryTotalSharesResponseAmino;
                fromAminoMsg(object: _22.QueryTotalSharesResponseAminoMsg): _22.QueryTotalSharesResponse;
                toAminoMsg(message: _22.QueryTotalSharesResponse): _22.QueryTotalSharesResponseAminoMsg;
                fromProtoMsg(message: _22.QueryTotalSharesResponseProtoMsg): _22.QueryTotalSharesResponse;
                toProto(message: _22.QueryTotalSharesResponse): Uint8Array;
                toProtoMsg(message: _22.QueryTotalSharesResponse): _22.QueryTotalSharesResponseProtoMsg;
            };
            QuerySpotPriceRequest: {
                typeUrl: string;
                encode(message: _22.QuerySpotPriceRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _22.QuerySpotPriceRequest;
                fromPartial(object: Partial<_22.QuerySpotPriceRequest>): _22.QuerySpotPriceRequest;
                fromAmino(object: _22.QuerySpotPriceRequestAmino): _22.QuerySpotPriceRequest;
                toAmino(message: _22.QuerySpotPriceRequest): _22.QuerySpotPriceRequestAmino;
                fromAminoMsg(object: _22.QuerySpotPriceRequestAminoMsg): _22.QuerySpotPriceRequest;
                toAminoMsg(message: _22.QuerySpotPriceRequest): _22.QuerySpotPriceRequestAminoMsg;
                fromProtoMsg(message: _22.QuerySpotPriceRequestProtoMsg): _22.QuerySpotPriceRequest;
                toProto(message: _22.QuerySpotPriceRequest): Uint8Array;
                toProtoMsg(message: _22.QuerySpotPriceRequest): _22.QuerySpotPriceRequestProtoMsg;
            };
            QuerySpotPriceResponse: {
                typeUrl: string;
                encode(message: _22.QuerySpotPriceResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _22.QuerySpotPriceResponse;
                fromPartial(object: Partial<_22.QuerySpotPriceResponse>): _22.QuerySpotPriceResponse;
                fromAmino(object: _22.QuerySpotPriceResponseAmino): _22.QuerySpotPriceResponse;
                toAmino(message: _22.QuerySpotPriceResponse): _22.QuerySpotPriceResponseAmino;
                fromAminoMsg(object: _22.QuerySpotPriceResponseAminoMsg): _22.QuerySpotPriceResponse;
                toAminoMsg(message: _22.QuerySpotPriceResponse): _22.QuerySpotPriceResponseAminoMsg;
                fromProtoMsg(message: _22.QuerySpotPriceResponseProtoMsg): _22.QuerySpotPriceResponse;
                toProto(message: _22.QuerySpotPriceResponse): Uint8Array;
                toProtoMsg(message: _22.QuerySpotPriceResponse): _22.QuerySpotPriceResponseProtoMsg;
            };
            QuerySwapExactAmountInRequest: {
                typeUrl: string;
                encode(message: _22.QuerySwapExactAmountInRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _22.QuerySwapExactAmountInRequest;
                fromPartial(object: Partial<_22.QuerySwapExactAmountInRequest>): _22.QuerySwapExactAmountInRequest;
                fromAmino(object: _22.QuerySwapExactAmountInRequestAmino): _22.QuerySwapExactAmountInRequest;
                toAmino(message: _22.QuerySwapExactAmountInRequest): _22.QuerySwapExactAmountInRequestAmino;
                fromAminoMsg(object: _22.QuerySwapExactAmountInRequestAminoMsg): _22.QuerySwapExactAmountInRequest;
                toAminoMsg(message: _22.QuerySwapExactAmountInRequest): _22.QuerySwapExactAmountInRequestAminoMsg;
                fromProtoMsg(message: _22.QuerySwapExactAmountInRequestProtoMsg): _22.QuerySwapExactAmountInRequest;
                toProto(message: _22.QuerySwapExactAmountInRequest): Uint8Array;
                toProtoMsg(message: _22.QuerySwapExactAmountInRequest): _22.QuerySwapExactAmountInRequestProtoMsg;
            };
            QuerySwapExactAmountInResponse: {
                typeUrl: string;
                encode(message: _22.QuerySwapExactAmountInResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _22.QuerySwapExactAmountInResponse;
                fromPartial(object: Partial<_22.QuerySwapExactAmountInResponse>): _22.QuerySwapExactAmountInResponse;
                fromAmino(object: _22.QuerySwapExactAmountInResponseAmino): _22.QuerySwapExactAmountInResponse;
                toAmino(message: _22.QuerySwapExactAmountInResponse): _22.QuerySwapExactAmountInResponseAmino;
                fromAminoMsg(object: _22.QuerySwapExactAmountInResponseAminoMsg): _22.QuerySwapExactAmountInResponse;
                toAminoMsg(message: _22.QuerySwapExactAmountInResponse): _22.QuerySwapExactAmountInResponseAminoMsg;
                fromProtoMsg(message: _22.QuerySwapExactAmountInResponseProtoMsg): _22.QuerySwapExactAmountInResponse;
                toProto(message: _22.QuerySwapExactAmountInResponse): Uint8Array;
                toProtoMsg(message: _22.QuerySwapExactAmountInResponse): _22.QuerySwapExactAmountInResponseProtoMsg;
            };
            QuerySwapExactAmountOutRequest: {
                typeUrl: string;
                encode(message: _22.QuerySwapExactAmountOutRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _22.QuerySwapExactAmountOutRequest;
                fromPartial(object: Partial<_22.QuerySwapExactAmountOutRequest>): _22.QuerySwapExactAmountOutRequest;
                fromAmino(object: _22.QuerySwapExactAmountOutRequestAmino): _22.QuerySwapExactAmountOutRequest;
                toAmino(message: _22.QuerySwapExactAmountOutRequest): _22.QuerySwapExactAmountOutRequestAmino;
                fromAminoMsg(object: _22.QuerySwapExactAmountOutRequestAminoMsg): _22.QuerySwapExactAmountOutRequest;
                toAminoMsg(message: _22.QuerySwapExactAmountOutRequest): _22.QuerySwapExactAmountOutRequestAminoMsg;
                fromProtoMsg(message: _22.QuerySwapExactAmountOutRequestProtoMsg): _22.QuerySwapExactAmountOutRequest;
                toProto(message: _22.QuerySwapExactAmountOutRequest): Uint8Array;
                toProtoMsg(message: _22.QuerySwapExactAmountOutRequest): _22.QuerySwapExactAmountOutRequestProtoMsg;
            };
            QuerySwapExactAmountOutResponse: {
                typeUrl: string;
                encode(message: _22.QuerySwapExactAmountOutResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _22.QuerySwapExactAmountOutResponse;
                fromPartial(object: Partial<_22.QuerySwapExactAmountOutResponse>): _22.QuerySwapExactAmountOutResponse;
                fromAmino(object: _22.QuerySwapExactAmountOutResponseAmino): _22.QuerySwapExactAmountOutResponse;
                toAmino(message: _22.QuerySwapExactAmountOutResponse): _22.QuerySwapExactAmountOutResponseAmino;
                fromAminoMsg(object: _22.QuerySwapExactAmountOutResponseAminoMsg): _22.QuerySwapExactAmountOutResponse;
                toAminoMsg(message: _22.QuerySwapExactAmountOutResponse): _22.QuerySwapExactAmountOutResponseAminoMsg;
                fromProtoMsg(message: _22.QuerySwapExactAmountOutResponseProtoMsg): _22.QuerySwapExactAmountOutResponse;
                toProto(message: _22.QuerySwapExactAmountOutResponse): Uint8Array;
                toProtoMsg(message: _22.QuerySwapExactAmountOutResponse): _22.QuerySwapExactAmountOutResponseProtoMsg;
            };
            QueryTotalLiquidityRequest: {
                typeUrl: string;
                encode(_: _22.QueryTotalLiquidityRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _22.QueryTotalLiquidityRequest;
                fromPartial(_: Partial<_22.QueryTotalLiquidityRequest>): _22.QueryTotalLiquidityRequest;
                fromAmino(_: _22.QueryTotalLiquidityRequestAmino): _22.QueryTotalLiquidityRequest;
                toAmino(_: _22.QueryTotalLiquidityRequest): _22.QueryTotalLiquidityRequestAmino;
                fromAminoMsg(object: _22.QueryTotalLiquidityRequestAminoMsg): _22.QueryTotalLiquidityRequest;
                toAminoMsg(message: _22.QueryTotalLiquidityRequest): _22.QueryTotalLiquidityRequestAminoMsg;
                fromProtoMsg(message: _22.QueryTotalLiquidityRequestProtoMsg): _22.QueryTotalLiquidityRequest;
                toProto(message: _22.QueryTotalLiquidityRequest): Uint8Array;
                toProtoMsg(message: _22.QueryTotalLiquidityRequest): _22.QueryTotalLiquidityRequestProtoMsg;
            };
            QueryTotalLiquidityResponse: {
                typeUrl: string;
                encode(message: _22.QueryTotalLiquidityResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _22.QueryTotalLiquidityResponse;
                fromPartial(object: Partial<_22.QueryTotalLiquidityResponse>): _22.QueryTotalLiquidityResponse;
                fromAmino(object: _22.QueryTotalLiquidityResponseAmino): _22.QueryTotalLiquidityResponse;
                toAmino(message: _22.QueryTotalLiquidityResponse): _22.QueryTotalLiquidityResponseAmino;
                fromAminoMsg(object: _22.QueryTotalLiquidityResponseAminoMsg): _22.QueryTotalLiquidityResponse;
                toAminoMsg(message: _22.QueryTotalLiquidityResponse): _22.QueryTotalLiquidityResponseAminoMsg;
                fromProtoMsg(message: _22.QueryTotalLiquidityResponseProtoMsg): _22.QueryTotalLiquidityResponse;
                toProto(message: _22.QueryTotalLiquidityResponse): Uint8Array;
                toProtoMsg(message: _22.QueryTotalLiquidityResponse): _22.QueryTotalLiquidityResponseProtoMsg;
            };
            PoolI_InterfaceDecoder: (input: Uint8Array | import("..").BinaryReader) => import("../google/protobuf/any").Any | _21.Pool;
            PoolI_FromAmino: (content: import("../google/protobuf/any").AnyAmino) => import("../google/protobuf/any").Any;
            PoolI_ToAmino: (content: import("../google/protobuf/any").Any) => import("../google/protobuf/any").AnyAmino;
            SmoothWeightChangeParams: {
                typeUrl: string;
                encode(message: _21.SmoothWeightChangeParams, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _21.SmoothWeightChangeParams;
                fromPartial(object: Partial<_21.SmoothWeightChangeParams>): _21.SmoothWeightChangeParams;
                fromAmino(object: _21.SmoothWeightChangeParamsAmino): _21.SmoothWeightChangeParams;
                toAmino(message: _21.SmoothWeightChangeParams): _21.SmoothWeightChangeParamsAmino;
                fromAminoMsg(object: _21.SmoothWeightChangeParamsAminoMsg): _21.SmoothWeightChangeParams;
                toAminoMsg(message: _21.SmoothWeightChangeParams): _21.SmoothWeightChangeParamsAminoMsg;
                fromProtoMsg(message: _21.SmoothWeightChangeParamsProtoMsg): _21.SmoothWeightChangeParams;
                toProto(message: _21.SmoothWeightChangeParams): Uint8Array;
                toProtoMsg(message: _21.SmoothWeightChangeParams): _21.SmoothWeightChangeParamsProtoMsg;
            };
            PoolParams: {
                typeUrl: string;
                encode(message: _21.PoolParams, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _21.PoolParams;
                fromPartial(object: Partial<_21.PoolParams>): _21.PoolParams;
                fromAmino(object: _21.PoolParamsAmino): _21.PoolParams;
                toAmino(message: _21.PoolParams): _21.PoolParamsAmino;
                fromAminoMsg(object: _21.PoolParamsAminoMsg): _21.PoolParams;
                toAminoMsg(message: _21.PoolParams): _21.PoolParamsAminoMsg;
                fromProtoMsg(message: _21.PoolParamsProtoMsg): _21.PoolParams;
                toProto(message: _21.PoolParams): Uint8Array;
                toProtoMsg(message: _21.PoolParams): _21.PoolParamsProtoMsg;
            };
            PoolAsset: {
                typeUrl: string;
                encode(message: _21.PoolAsset, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _21.PoolAsset;
                fromPartial(object: Partial<_21.PoolAsset>): _21.PoolAsset;
                fromAmino(object: _21.PoolAssetAmino): _21.PoolAsset;
                toAmino(message: _21.PoolAsset): _21.PoolAssetAmino;
                fromAminoMsg(object: _21.PoolAssetAminoMsg): _21.PoolAsset;
                toAminoMsg(message: _21.PoolAsset): _21.PoolAssetAminoMsg;
                fromProtoMsg(message: _21.PoolAssetProtoMsg): _21.PoolAsset;
                toProto(message: _21.PoolAsset): Uint8Array;
                toProtoMsg(message: _21.PoolAsset): _21.PoolAssetProtoMsg;
            };
            Pool: {
                typeUrl: string;
                encode(message: _21.Pool, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _21.Pool;
                fromPartial(object: Partial<_21.Pool>): _21.Pool;
                fromAmino(object: _21.PoolAmino): _21.Pool;
                toAmino(message: _21.Pool): _21.PoolAmino;
                fromAminoMsg(object: _21.PoolAminoMsg): _21.Pool;
                toAminoMsg(message: _21.Pool): _21.PoolAminoMsg;
                fromProtoMsg(message: _21.PoolProtoMsg): _21.Pool;
                toProto(message: _21.Pool): Uint8Array;
                toProtoMsg(message: _21.Pool): _21.PoolProtoMsg;
            };
        };
        namespace poolmodels {
            namespace balancer {
                const v1beta1: {
                    MsgClientImpl: typeof _195.MsgClientImpl;
                    registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
                    load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
                    MessageComposer: {
                        encoded: {
                            createBalancerPool(value: _24.MsgCreateBalancerPool): {
                                typeUrl: string;
                                value: Uint8Array;
                            };
                        };
                        withTypeUrl: {
                            createBalancerPool(value: _24.MsgCreateBalancerPool): {
                                typeUrl: string;
                                value: _24.MsgCreateBalancerPool;
                            };
                        };
                        fromJSON: {
                            createBalancerPool(value: any): {
                                typeUrl: string;
                                value: _24.MsgCreateBalancerPool;
                            };
                        };
                        fromPartial: {
                            createBalancerPool(value: _24.MsgCreateBalancerPool): {
                                typeUrl: string;
                                value: _24.MsgCreateBalancerPool;
                            };
                        };
                    };
                    AminoConverter: {
                        "/osmosis.gamm.poolmodels.balancer.v1beta1.MsgCreateBalancerPool": {
                            aminoType: string;
                            toAmino: (message: _24.MsgCreateBalancerPool) => _24.MsgCreateBalancerPoolAmino;
                            fromAmino: (object: _24.MsgCreateBalancerPoolAmino) => _24.MsgCreateBalancerPool;
                        };
                    };
                    MsgCreateBalancerPool: {
                        typeUrl: string;
                        encode(message: _24.MsgCreateBalancerPool, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                        fromJSON(object: any): _24.MsgCreateBalancerPool;
                        fromPartial(object: Partial<_24.MsgCreateBalancerPool>): _24.MsgCreateBalancerPool;
                        fromAmino(object: _24.MsgCreateBalancerPoolAmino): _24.MsgCreateBalancerPool;
                        toAmino(message: _24.MsgCreateBalancerPool): _24.MsgCreateBalancerPoolAmino;
                        fromAminoMsg(object: _24.MsgCreateBalancerPoolAminoMsg): _24.MsgCreateBalancerPool;
                        toAminoMsg(message: _24.MsgCreateBalancerPool): _24.MsgCreateBalancerPoolAminoMsg;
                        fromProtoMsg(message: _24.MsgCreateBalancerPoolProtoMsg): _24.MsgCreateBalancerPool;
                        toProto(message: _24.MsgCreateBalancerPool): Uint8Array;
                        toProtoMsg(message: _24.MsgCreateBalancerPool): _24.MsgCreateBalancerPoolProtoMsg;
                    };
                    MsgCreateBalancerPoolResponse: {
                        typeUrl: string;
                        encode(message: _24.MsgCreateBalancerPoolResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                        fromJSON(object: any): _24.MsgCreateBalancerPoolResponse;
                        fromPartial(object: Partial<_24.MsgCreateBalancerPoolResponse>): _24.MsgCreateBalancerPoolResponse;
                        fromAmino(object: _24.MsgCreateBalancerPoolResponseAmino): _24.MsgCreateBalancerPoolResponse;
                        toAmino(message: _24.MsgCreateBalancerPoolResponse): _24.MsgCreateBalancerPoolResponseAmino;
                        fromAminoMsg(object: _24.MsgCreateBalancerPoolResponseAminoMsg): _24.MsgCreateBalancerPoolResponse;
                        toAminoMsg(message: _24.MsgCreateBalancerPoolResponse): _24.MsgCreateBalancerPoolResponseAminoMsg;
                        fromProtoMsg(message: _24.MsgCreateBalancerPoolResponseProtoMsg): _24.MsgCreateBalancerPoolResponse;
                        toProto(message: _24.MsgCreateBalancerPoolResponse): Uint8Array;
                        toProtoMsg(message: _24.MsgCreateBalancerPoolResponse): _24.MsgCreateBalancerPoolResponseProtoMsg;
                    };
                };
            }
        }
    }
    const incentives: {
        Gauge: {
            typeUrl: string;
            encode(message: _25.Gauge, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _25.Gauge;
            fromPartial(object: Partial<_25.Gauge>): _25.Gauge;
            fromAmino(object: _25.GaugeAmino): _25.Gauge;
            toAmino(message: _25.Gauge): _25.GaugeAmino;
            fromAminoMsg(object: _25.GaugeAminoMsg): _25.Gauge;
            toAminoMsg(message: _25.Gauge): _25.GaugeAminoMsg;
            fromProtoMsg(message: _25.GaugeProtoMsg): _25.Gauge;
            toProto(message: _25.Gauge): Uint8Array;
            toProtoMsg(message: _25.Gauge): _25.GaugeProtoMsg;
        };
        LockableDurationsInfo: {
            typeUrl: string;
            encode(message: _25.LockableDurationsInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _25.LockableDurationsInfo;
            fromPartial(object: Partial<_25.LockableDurationsInfo>): _25.LockableDurationsInfo;
            fromAmino(object: _25.LockableDurationsInfoAmino): _25.LockableDurationsInfo;
            toAmino(message: _25.LockableDurationsInfo): _25.LockableDurationsInfoAmino;
            fromAminoMsg(object: _25.LockableDurationsInfoAminoMsg): _25.LockableDurationsInfo;
            toAminoMsg(message: _25.LockableDurationsInfo): _25.LockableDurationsInfoAminoMsg;
            fromProtoMsg(message: _25.LockableDurationsInfoProtoMsg): _25.LockableDurationsInfo;
            toProto(message: _25.LockableDurationsInfo): Uint8Array;
            toProtoMsg(message: _25.LockableDurationsInfo): _25.LockableDurationsInfoProtoMsg;
        };
    };
    const lockup: {
        MsgClientImpl: typeof _197.MsgClientImpl;
        registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
        load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
        MessageComposer: {
            encoded: {
                lockTokens(value: _27.MsgLockTokens): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                beginUnlockingAll(value: _27.MsgBeginUnlockingAll): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                beginUnlocking(value: _27.MsgBeginUnlocking): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                extendLockup(value: _27.MsgExtendLockup): {
                    typeUrl: string;
                    value: Uint8Array;
                };
            };
            withTypeUrl: {
                lockTokens(value: _27.MsgLockTokens): {
                    typeUrl: string;
                    value: _27.MsgLockTokens;
                };
                beginUnlockingAll(value: _27.MsgBeginUnlockingAll): {
                    typeUrl: string;
                    value: _27.MsgBeginUnlockingAll;
                };
                beginUnlocking(value: _27.MsgBeginUnlocking): {
                    typeUrl: string;
                    value: _27.MsgBeginUnlocking;
                };
                extendLockup(value: _27.MsgExtendLockup): {
                    typeUrl: string;
                    value: _27.MsgExtendLockup;
                };
            };
            fromJSON: {
                lockTokens(value: any): {
                    typeUrl: string;
                    value: _27.MsgLockTokens;
                };
                beginUnlockingAll(value: any): {
                    typeUrl: string;
                    value: _27.MsgBeginUnlockingAll;
                };
                beginUnlocking(value: any): {
                    typeUrl: string;
                    value: _27.MsgBeginUnlocking;
                };
                extendLockup(value: any): {
                    typeUrl: string;
                    value: _27.MsgExtendLockup;
                };
            };
            fromPartial: {
                lockTokens(value: _27.MsgLockTokens): {
                    typeUrl: string;
                    value: _27.MsgLockTokens;
                };
                beginUnlockingAll(value: _27.MsgBeginUnlockingAll): {
                    typeUrl: string;
                    value: _27.MsgBeginUnlockingAll;
                };
                beginUnlocking(value: _27.MsgBeginUnlocking): {
                    typeUrl: string;
                    value: _27.MsgBeginUnlocking;
                };
                extendLockup(value: _27.MsgExtendLockup): {
                    typeUrl: string;
                    value: _27.MsgExtendLockup;
                };
            };
        };
        AminoConverter: {
            "/osmosis.lockup.MsgLockTokens": {
                aminoType: string;
                toAmino: (message: _27.MsgLockTokens) => _27.MsgLockTokensAmino;
                fromAmino: (object: _27.MsgLockTokensAmino) => _27.MsgLockTokens;
            };
            "/osmosis.lockup.MsgBeginUnlockingAll": {
                aminoType: string;
                toAmino: (message: _27.MsgBeginUnlockingAll) => _27.MsgBeginUnlockingAllAmino;
                fromAmino: (object: _27.MsgBeginUnlockingAllAmino) => _27.MsgBeginUnlockingAll;
            };
            "/osmosis.lockup.MsgBeginUnlocking": {
                aminoType: string;
                toAmino: (message: _27.MsgBeginUnlocking) => _27.MsgBeginUnlockingAmino;
                fromAmino: (object: _27.MsgBeginUnlockingAmino) => _27.MsgBeginUnlocking;
            };
            "/osmosis.lockup.MsgExtendLockup": {
                aminoType: string;
                toAmino: (message: _27.MsgExtendLockup) => _27.MsgExtendLockupAmino;
                fromAmino: (object: _27.MsgExtendLockupAmino) => _27.MsgExtendLockup;
            };
        };
        MsgLockTokens: {
            typeUrl: string;
            encode(message: _27.MsgLockTokens, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _27.MsgLockTokens;
            fromPartial(object: Partial<_27.MsgLockTokens>): _27.MsgLockTokens;
            fromAmino(object: _27.MsgLockTokensAmino): _27.MsgLockTokens;
            toAmino(message: _27.MsgLockTokens): _27.MsgLockTokensAmino;
            fromAminoMsg(object: _27.MsgLockTokensAminoMsg): _27.MsgLockTokens;
            toAminoMsg(message: _27.MsgLockTokens): _27.MsgLockTokensAminoMsg;
            fromProtoMsg(message: _27.MsgLockTokensProtoMsg): _27.MsgLockTokens;
            toProto(message: _27.MsgLockTokens): Uint8Array;
            toProtoMsg(message: _27.MsgLockTokens): _27.MsgLockTokensProtoMsg;
        };
        MsgLockTokensResponse: {
            typeUrl: string;
            encode(message: _27.MsgLockTokensResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _27.MsgLockTokensResponse;
            fromPartial(object: Partial<_27.MsgLockTokensResponse>): _27.MsgLockTokensResponse;
            fromAmino(object: _27.MsgLockTokensResponseAmino): _27.MsgLockTokensResponse;
            toAmino(message: _27.MsgLockTokensResponse): _27.MsgLockTokensResponseAmino;
            fromAminoMsg(object: _27.MsgLockTokensResponseAminoMsg): _27.MsgLockTokensResponse;
            toAminoMsg(message: _27.MsgLockTokensResponse): _27.MsgLockTokensResponseAminoMsg;
            fromProtoMsg(message: _27.MsgLockTokensResponseProtoMsg): _27.MsgLockTokensResponse;
            toProto(message: _27.MsgLockTokensResponse): Uint8Array;
            toProtoMsg(message: _27.MsgLockTokensResponse): _27.MsgLockTokensResponseProtoMsg;
        };
        MsgBeginUnlockingAll: {
            typeUrl: string;
            encode(message: _27.MsgBeginUnlockingAll, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _27.MsgBeginUnlockingAll;
            fromPartial(object: Partial<_27.MsgBeginUnlockingAll>): _27.MsgBeginUnlockingAll;
            fromAmino(object: _27.MsgBeginUnlockingAllAmino): _27.MsgBeginUnlockingAll;
            toAmino(message: _27.MsgBeginUnlockingAll): _27.MsgBeginUnlockingAllAmino;
            fromAminoMsg(object: _27.MsgBeginUnlockingAllAminoMsg): _27.MsgBeginUnlockingAll;
            toAminoMsg(message: _27.MsgBeginUnlockingAll): _27.MsgBeginUnlockingAllAminoMsg;
            fromProtoMsg(message: _27.MsgBeginUnlockingAllProtoMsg): _27.MsgBeginUnlockingAll;
            toProto(message: _27.MsgBeginUnlockingAll): Uint8Array;
            toProtoMsg(message: _27.MsgBeginUnlockingAll): _27.MsgBeginUnlockingAllProtoMsg;
        };
        MsgBeginUnlockingAllResponse: {
            typeUrl: string;
            encode(message: _27.MsgBeginUnlockingAllResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _27.MsgBeginUnlockingAllResponse;
            fromPartial(object: Partial<_27.MsgBeginUnlockingAllResponse>): _27.MsgBeginUnlockingAllResponse;
            fromAmino(object: _27.MsgBeginUnlockingAllResponseAmino): _27.MsgBeginUnlockingAllResponse;
            toAmino(message: _27.MsgBeginUnlockingAllResponse): _27.MsgBeginUnlockingAllResponseAmino;
            fromAminoMsg(object: _27.MsgBeginUnlockingAllResponseAminoMsg): _27.MsgBeginUnlockingAllResponse;
            toAminoMsg(message: _27.MsgBeginUnlockingAllResponse): _27.MsgBeginUnlockingAllResponseAminoMsg;
            fromProtoMsg(message: _27.MsgBeginUnlockingAllResponseProtoMsg): _27.MsgBeginUnlockingAllResponse;
            toProto(message: _27.MsgBeginUnlockingAllResponse): Uint8Array;
            toProtoMsg(message: _27.MsgBeginUnlockingAllResponse): _27.MsgBeginUnlockingAllResponseProtoMsg;
        };
        MsgBeginUnlocking: {
            typeUrl: string;
            encode(message: _27.MsgBeginUnlocking, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _27.MsgBeginUnlocking;
            fromPartial(object: Partial<_27.MsgBeginUnlocking>): _27.MsgBeginUnlocking;
            fromAmino(object: _27.MsgBeginUnlockingAmino): _27.MsgBeginUnlocking;
            toAmino(message: _27.MsgBeginUnlocking): _27.MsgBeginUnlockingAmino;
            fromAminoMsg(object: _27.MsgBeginUnlockingAminoMsg): _27.MsgBeginUnlocking;
            toAminoMsg(message: _27.MsgBeginUnlocking): _27.MsgBeginUnlockingAminoMsg;
            fromProtoMsg(message: _27.MsgBeginUnlockingProtoMsg): _27.MsgBeginUnlocking;
            toProto(message: _27.MsgBeginUnlocking): Uint8Array;
            toProtoMsg(message: _27.MsgBeginUnlocking): _27.MsgBeginUnlockingProtoMsg;
        };
        MsgBeginUnlockingResponse: {
            typeUrl: string;
            encode(message: _27.MsgBeginUnlockingResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _27.MsgBeginUnlockingResponse;
            fromPartial(object: Partial<_27.MsgBeginUnlockingResponse>): _27.MsgBeginUnlockingResponse;
            fromAmino(object: _27.MsgBeginUnlockingResponseAmino): _27.MsgBeginUnlockingResponse;
            toAmino(message: _27.MsgBeginUnlockingResponse): _27.MsgBeginUnlockingResponseAmino;
            fromAminoMsg(object: _27.MsgBeginUnlockingResponseAminoMsg): _27.MsgBeginUnlockingResponse;
            toAminoMsg(message: _27.MsgBeginUnlockingResponse): _27.MsgBeginUnlockingResponseAminoMsg;
            fromProtoMsg(message: _27.MsgBeginUnlockingResponseProtoMsg): _27.MsgBeginUnlockingResponse;
            toProto(message: _27.MsgBeginUnlockingResponse): Uint8Array;
            toProtoMsg(message: _27.MsgBeginUnlockingResponse): _27.MsgBeginUnlockingResponseProtoMsg;
        };
        MsgExtendLockup: {
            typeUrl: string;
            encode(message: _27.MsgExtendLockup, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _27.MsgExtendLockup;
            fromPartial(object: Partial<_27.MsgExtendLockup>): _27.MsgExtendLockup;
            fromAmino(object: _27.MsgExtendLockupAmino): _27.MsgExtendLockup;
            toAmino(message: _27.MsgExtendLockup): _27.MsgExtendLockupAmino;
            fromAminoMsg(object: _27.MsgExtendLockupAminoMsg): _27.MsgExtendLockup;
            toAminoMsg(message: _27.MsgExtendLockup): _27.MsgExtendLockupAminoMsg;
            fromProtoMsg(message: _27.MsgExtendLockupProtoMsg): _27.MsgExtendLockup;
            toProto(message: _27.MsgExtendLockup): Uint8Array;
            toProtoMsg(message: _27.MsgExtendLockup): _27.MsgExtendLockupProtoMsg;
        };
        MsgExtendLockupResponse: {
            typeUrl: string;
            encode(message: _27.MsgExtendLockupResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _27.MsgExtendLockupResponse;
            fromPartial(object: Partial<_27.MsgExtendLockupResponse>): _27.MsgExtendLockupResponse;
            fromAmino(object: _27.MsgExtendLockupResponseAmino): _27.MsgExtendLockupResponse;
            toAmino(message: _27.MsgExtendLockupResponse): _27.MsgExtendLockupResponseAmino;
            fromAminoMsg(object: _27.MsgExtendLockupResponseAminoMsg): _27.MsgExtendLockupResponse;
            toAminoMsg(message: _27.MsgExtendLockupResponse): _27.MsgExtendLockupResponseAminoMsg;
            fromProtoMsg(message: _27.MsgExtendLockupResponseProtoMsg): _27.MsgExtendLockupResponse;
            toProto(message: _27.MsgExtendLockupResponse): Uint8Array;
            toProtoMsg(message: _27.MsgExtendLockupResponse): _27.MsgExtendLockupResponseProtoMsg;
        };
        lockQueryTypeFromJSON(object: any): _26.LockQueryType;
        lockQueryTypeToJSON(object: _26.LockQueryType): string;
        LockQueryType: typeof _26.LockQueryType;
        LockQueryTypeSDKType: typeof _26.LockQueryType;
        LockQueryTypeAmino: typeof _26.LockQueryType;
        PeriodLock: {
            typeUrl: string;
            encode(message: _26.PeriodLock, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _26.PeriodLock;
            fromPartial(object: Partial<_26.PeriodLock>): _26.PeriodLock;
            fromAmino(object: _26.PeriodLockAmino): _26.PeriodLock;
            toAmino(message: _26.PeriodLock): _26.PeriodLockAmino;
            fromAminoMsg(object: _26.PeriodLockAminoMsg): _26.PeriodLock;
            toAminoMsg(message: _26.PeriodLock): _26.PeriodLockAminoMsg;
            fromProtoMsg(message: _26.PeriodLockProtoMsg): _26.PeriodLock;
            toProto(message: _26.PeriodLock): Uint8Array;
            toProtoMsg(message: _26.PeriodLock): _26.PeriodLockProtoMsg;
        };
        QueryCondition: {
            typeUrl: string;
            encode(message: _26.QueryCondition, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _26.QueryCondition;
            fromPartial(object: Partial<_26.QueryCondition>): _26.QueryCondition;
            fromAmino(object: _26.QueryConditionAmino): _26.QueryCondition;
            toAmino(message: _26.QueryCondition): _26.QueryConditionAmino;
            fromAminoMsg(object: _26.QueryConditionAminoMsg): _26.QueryCondition;
            toAminoMsg(message: _26.QueryCondition): _26.QueryConditionAminoMsg;
            fromProtoMsg(message: _26.QueryConditionProtoMsg): _26.QueryCondition;
            toProto(message: _26.QueryCondition): Uint8Array;
            toProtoMsg(message: _26.QueryCondition): _26.QueryConditionProtoMsg;
        };
        SyntheticLock: {
            typeUrl: string;
            encode(message: _26.SyntheticLock, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _26.SyntheticLock;
            fromPartial(object: Partial<_26.SyntheticLock>): _26.SyntheticLock;
            fromAmino(object: _26.SyntheticLockAmino): _26.SyntheticLock;
            toAmino(message: _26.SyntheticLock): _26.SyntheticLockAmino;
            fromAminoMsg(object: _26.SyntheticLockAminoMsg): _26.SyntheticLock;
            toAminoMsg(message: _26.SyntheticLock): _26.SyntheticLockAminoMsg;
            fromProtoMsg(message: _26.SyntheticLockProtoMsg): _26.SyntheticLock;
            toProto(message: _26.SyntheticLock): Uint8Array;
            toProtoMsg(message: _26.SyntheticLock): _26.SyntheticLockProtoMsg;
        };
    };
    namespace mint {
        const v1beta1: {
            QueryClientImpl: typeof _193.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                params(request?: _29.QueryParamsRequest): Promise<_29.QueryParamsResponse>;
                epochProvisions(request?: _29.QueryEpochProvisionsRequest): Promise<_29.QueryEpochProvisionsResponse>;
            };
            LCDQueryClient: typeof _189.LCDQueryClient;
            QueryParamsRequest: {
                typeUrl: string;
                encode(_: _29.QueryParamsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _29.QueryParamsRequest;
                fromPartial(_: Partial<_29.QueryParamsRequest>): _29.QueryParamsRequest;
                fromAmino(_: _29.QueryParamsRequestAmino): _29.QueryParamsRequest;
                toAmino(_: _29.QueryParamsRequest): _29.QueryParamsRequestAmino;
                fromAminoMsg(object: _29.QueryParamsRequestAminoMsg): _29.QueryParamsRequest;
                toAminoMsg(message: _29.QueryParamsRequest): _29.QueryParamsRequestAminoMsg;
                fromProtoMsg(message: _29.QueryParamsRequestProtoMsg): _29.QueryParamsRequest;
                toProto(message: _29.QueryParamsRequest): Uint8Array;
                toProtoMsg(message: _29.QueryParamsRequest): _29.QueryParamsRequestProtoMsg;
            };
            QueryParamsResponse: {
                typeUrl: string;
                encode(message: _29.QueryParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _29.QueryParamsResponse;
                fromPartial(object: Partial<_29.QueryParamsResponse>): _29.QueryParamsResponse;
                fromAmino(object: _29.QueryParamsResponseAmino): _29.QueryParamsResponse;
                toAmino(message: _29.QueryParamsResponse): _29.QueryParamsResponseAmino;
                fromAminoMsg(object: _29.QueryParamsResponseAminoMsg): _29.QueryParamsResponse;
                toAminoMsg(message: _29.QueryParamsResponse): _29.QueryParamsResponseAminoMsg;
                fromProtoMsg(message: _29.QueryParamsResponseProtoMsg): _29.QueryParamsResponse;
                toProto(message: _29.QueryParamsResponse): Uint8Array;
                toProtoMsg(message: _29.QueryParamsResponse): _29.QueryParamsResponseProtoMsg;
            };
            QueryEpochProvisionsRequest: {
                typeUrl: string;
                encode(_: _29.QueryEpochProvisionsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _29.QueryEpochProvisionsRequest;
                fromPartial(_: Partial<_29.QueryEpochProvisionsRequest>): _29.QueryEpochProvisionsRequest;
                fromAmino(_: _29.QueryEpochProvisionsRequestAmino): _29.QueryEpochProvisionsRequest;
                toAmino(_: _29.QueryEpochProvisionsRequest): _29.QueryEpochProvisionsRequestAmino;
                fromAminoMsg(object: _29.QueryEpochProvisionsRequestAminoMsg): _29.QueryEpochProvisionsRequest;
                toAminoMsg(message: _29.QueryEpochProvisionsRequest): _29.QueryEpochProvisionsRequestAminoMsg;
                fromProtoMsg(message: _29.QueryEpochProvisionsRequestProtoMsg): _29.QueryEpochProvisionsRequest;
                toProto(message: _29.QueryEpochProvisionsRequest): Uint8Array;
                toProtoMsg(message: _29.QueryEpochProvisionsRequest): _29.QueryEpochProvisionsRequestProtoMsg;
            };
            QueryEpochProvisionsResponse: {
                typeUrl: string;
                encode(message: _29.QueryEpochProvisionsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _29.QueryEpochProvisionsResponse;
                fromPartial(object: Partial<_29.QueryEpochProvisionsResponse>): _29.QueryEpochProvisionsResponse;
                fromAmino(object: _29.QueryEpochProvisionsResponseAmino): _29.QueryEpochProvisionsResponse;
                toAmino(message: _29.QueryEpochProvisionsResponse): _29.QueryEpochProvisionsResponseAmino;
                fromAminoMsg(object: _29.QueryEpochProvisionsResponseAminoMsg): _29.QueryEpochProvisionsResponse;
                toAminoMsg(message: _29.QueryEpochProvisionsResponse): _29.QueryEpochProvisionsResponseAminoMsg;
                fromProtoMsg(message: _29.QueryEpochProvisionsResponseProtoMsg): _29.QueryEpochProvisionsResponse;
                toProto(message: _29.QueryEpochProvisionsResponse): Uint8Array;
                toProtoMsg(message: _29.QueryEpochProvisionsResponse): _29.QueryEpochProvisionsResponseProtoMsg;
            };
            Minter: {
                typeUrl: string;
                encode(message: _28.Minter, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _28.Minter;
                fromPartial(object: Partial<_28.Minter>): _28.Minter;
                fromAmino(object: _28.MinterAmino): _28.Minter;
                toAmino(message: _28.Minter): _28.MinterAmino;
                fromAminoMsg(object: _28.MinterAminoMsg): _28.Minter;
                toAminoMsg(message: _28.Minter): _28.MinterAminoMsg;
                fromProtoMsg(message: _28.MinterProtoMsg): _28.Minter;
                toProto(message: _28.Minter): Uint8Array;
                toProtoMsg(message: _28.Minter): _28.MinterProtoMsg;
            };
            WeightedAddress: {
                typeUrl: string;
                encode(message: _28.WeightedAddress, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _28.WeightedAddress;
                fromPartial(object: Partial<_28.WeightedAddress>): _28.WeightedAddress;
                fromAmino(object: _28.WeightedAddressAmino): _28.WeightedAddress;
                toAmino(message: _28.WeightedAddress): _28.WeightedAddressAmino;
                fromAminoMsg(object: _28.WeightedAddressAminoMsg): _28.WeightedAddress;
                toAminoMsg(message: _28.WeightedAddress): _28.WeightedAddressAminoMsg;
                fromProtoMsg(message: _28.WeightedAddressProtoMsg): _28.WeightedAddress;
                toProto(message: _28.WeightedAddress): Uint8Array;
                toProtoMsg(message: _28.WeightedAddress): _28.WeightedAddressProtoMsg;
            };
            DistributionProportions: {
                typeUrl: string;
                encode(message: _28.DistributionProportions, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _28.DistributionProportions;
                fromPartial(object: Partial<_28.DistributionProportions>): _28.DistributionProportions;
                fromAmino(object: _28.DistributionProportionsAmino): _28.DistributionProportions;
                toAmino(message: _28.DistributionProportions): _28.DistributionProportionsAmino;
                fromAminoMsg(object: _28.DistributionProportionsAminoMsg): _28.DistributionProportions;
                toAminoMsg(message: _28.DistributionProportions): _28.DistributionProportionsAminoMsg;
                fromProtoMsg(message: _28.DistributionProportionsProtoMsg): _28.DistributionProportions;
                toProto(message: _28.DistributionProportions): Uint8Array;
                toProtoMsg(message: _28.DistributionProportions): _28.DistributionProportionsProtoMsg;
            };
            Params: {
                typeUrl: string;
                encode(message: _28.Params, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _28.Params;
                fromPartial(object: Partial<_28.Params>): _28.Params;
                fromAmino(object: _28.ParamsAmino): _28.Params;
                toAmino(message: _28.Params): _28.ParamsAmino;
                fromAminoMsg(object: _28.ParamsAminoMsg): _28.Params;
                toAminoMsg(message: _28.Params): _28.ParamsAminoMsg;
                fromProtoMsg(message: _28.ParamsProtoMsg): _28.Params;
                toProto(message: _28.Params): Uint8Array;
                toProtoMsg(message: _28.Params): _28.ParamsProtoMsg;
            };
        };
    }
    namespace poolincentives {
        const v1beta1: {
            QueryClientImpl: typeof _194.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                gaugeIds(request: _31.QueryGaugeIdsRequest): Promise<_31.QueryGaugeIdsResponse>;
                distrInfo(request?: _31.QueryDistrInfoRequest): Promise<_31.QueryDistrInfoResponse>;
                params(request?: _31.QueryParamsRequest): Promise<_31.QueryParamsResponse>;
                lockableDurations(request?: _31.QueryLockableDurationsRequest): Promise<_31.QueryLockableDurationsResponse>;
                incentivizedPools(request?: _31.QueryIncentivizedPoolsRequest): Promise<_31.QueryIncentivizedPoolsResponse>;
                externalIncentiveGauges(request?: _31.QueryExternalIncentiveGaugesRequest): Promise<_31.QueryExternalIncentiveGaugesResponse>;
            };
            LCDQueryClient: typeof _190.LCDQueryClient;
            QueryGaugeIdsRequest: {
                typeUrl: string;
                encode(message: _31.QueryGaugeIdsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _31.QueryGaugeIdsRequest;
                fromPartial(object: Partial<_31.QueryGaugeIdsRequest>): _31.QueryGaugeIdsRequest;
                fromAmino(object: _31.QueryGaugeIdsRequestAmino): _31.QueryGaugeIdsRequest;
                toAmino(message: _31.QueryGaugeIdsRequest): _31.QueryGaugeIdsRequestAmino;
                fromAminoMsg(object: _31.QueryGaugeIdsRequestAminoMsg): _31.QueryGaugeIdsRequest;
                toAminoMsg(message: _31.QueryGaugeIdsRequest): _31.QueryGaugeIdsRequestAminoMsg;
                fromProtoMsg(message: _31.QueryGaugeIdsRequestProtoMsg): _31.QueryGaugeIdsRequest;
                toProto(message: _31.QueryGaugeIdsRequest): Uint8Array;
                toProtoMsg(message: _31.QueryGaugeIdsRequest): _31.QueryGaugeIdsRequestProtoMsg;
            };
            QueryGaugeIdsResponse: {
                typeUrl: string;
                encode(message: _31.QueryGaugeIdsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _31.QueryGaugeIdsResponse;
                fromPartial(object: Partial<_31.QueryGaugeIdsResponse>): _31.QueryGaugeIdsResponse;
                fromAmino(object: _31.QueryGaugeIdsResponseAmino): _31.QueryGaugeIdsResponse;
                toAmino(message: _31.QueryGaugeIdsResponse): _31.QueryGaugeIdsResponseAmino;
                fromAminoMsg(object: _31.QueryGaugeIdsResponseAminoMsg): _31.QueryGaugeIdsResponse;
                toAminoMsg(message: _31.QueryGaugeIdsResponse): _31.QueryGaugeIdsResponseAminoMsg;
                fromProtoMsg(message: _31.QueryGaugeIdsResponseProtoMsg): _31.QueryGaugeIdsResponse;
                toProto(message: _31.QueryGaugeIdsResponse): Uint8Array;
                toProtoMsg(message: _31.QueryGaugeIdsResponse): _31.QueryGaugeIdsResponseProtoMsg;
            };
            QueryGaugeIdsResponse_GaugeIdWithDuration: {
                typeUrl: string;
                encode(message: _31.QueryGaugeIdsResponse_GaugeIdWithDuration, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _31.QueryGaugeIdsResponse_GaugeIdWithDuration;
                fromPartial(object: Partial<_31.QueryGaugeIdsResponse_GaugeIdWithDuration>): _31.QueryGaugeIdsResponse_GaugeIdWithDuration;
                fromAmino(object: _31.QueryGaugeIdsResponse_GaugeIdWithDurationAmino): _31.QueryGaugeIdsResponse_GaugeIdWithDuration;
                toAmino(message: _31.QueryGaugeIdsResponse_GaugeIdWithDuration): _31.QueryGaugeIdsResponse_GaugeIdWithDurationAmino;
                fromAminoMsg(object: _31.QueryGaugeIdsResponse_GaugeIdWithDurationAminoMsg): _31.QueryGaugeIdsResponse_GaugeIdWithDuration;
                toAminoMsg(message: _31.QueryGaugeIdsResponse_GaugeIdWithDuration): _31.QueryGaugeIdsResponse_GaugeIdWithDurationAminoMsg;
                fromProtoMsg(message: _31.QueryGaugeIdsResponse_GaugeIdWithDurationProtoMsg): _31.QueryGaugeIdsResponse_GaugeIdWithDuration;
                toProto(message: _31.QueryGaugeIdsResponse_GaugeIdWithDuration): Uint8Array;
                toProtoMsg(message: _31.QueryGaugeIdsResponse_GaugeIdWithDuration): _31.QueryGaugeIdsResponse_GaugeIdWithDurationProtoMsg;
            };
            QueryDistrInfoRequest: {
                typeUrl: string;
                encode(_: _31.QueryDistrInfoRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _31.QueryDistrInfoRequest;
                fromPartial(_: Partial<_31.QueryDistrInfoRequest>): _31.QueryDistrInfoRequest;
                fromAmino(_: _31.QueryDistrInfoRequestAmino): _31.QueryDistrInfoRequest;
                toAmino(_: _31.QueryDistrInfoRequest): _31.QueryDistrInfoRequestAmino;
                fromAminoMsg(object: _31.QueryDistrInfoRequestAminoMsg): _31.QueryDistrInfoRequest;
                toAminoMsg(message: _31.QueryDistrInfoRequest): _31.QueryDistrInfoRequestAminoMsg;
                fromProtoMsg(message: _31.QueryDistrInfoRequestProtoMsg): _31.QueryDistrInfoRequest;
                toProto(message: _31.QueryDistrInfoRequest): Uint8Array;
                toProtoMsg(message: _31.QueryDistrInfoRequest): _31.QueryDistrInfoRequestProtoMsg;
            };
            QueryDistrInfoResponse: {
                typeUrl: string;
                encode(message: _31.QueryDistrInfoResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _31.QueryDistrInfoResponse;
                fromPartial(object: Partial<_31.QueryDistrInfoResponse>): _31.QueryDistrInfoResponse;
                fromAmino(object: _31.QueryDistrInfoResponseAmino): _31.QueryDistrInfoResponse;
                toAmino(message: _31.QueryDistrInfoResponse): _31.QueryDistrInfoResponseAmino;
                fromAminoMsg(object: _31.QueryDistrInfoResponseAminoMsg): _31.QueryDistrInfoResponse;
                toAminoMsg(message: _31.QueryDistrInfoResponse): _31.QueryDistrInfoResponseAminoMsg;
                fromProtoMsg(message: _31.QueryDistrInfoResponseProtoMsg): _31.QueryDistrInfoResponse;
                toProto(message: _31.QueryDistrInfoResponse): Uint8Array;
                toProtoMsg(message: _31.QueryDistrInfoResponse): _31.QueryDistrInfoResponseProtoMsg;
            };
            QueryParamsRequest: {
                typeUrl: string;
                encode(_: _31.QueryParamsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _31.QueryParamsRequest;
                fromPartial(_: Partial<_31.QueryParamsRequest>): _31.QueryParamsRequest;
                fromAmino(_: _31.QueryParamsRequestAmino): _31.QueryParamsRequest;
                toAmino(_: _31.QueryParamsRequest): _31.QueryParamsRequestAmino;
                fromAminoMsg(object: _31.QueryParamsRequestAminoMsg): _31.QueryParamsRequest;
                toAminoMsg(message: _31.QueryParamsRequest): _31.QueryParamsRequestAminoMsg;
                fromProtoMsg(message: _31.QueryParamsRequestProtoMsg): _31.QueryParamsRequest;
                toProto(message: _31.QueryParamsRequest): Uint8Array;
                toProtoMsg(message: _31.QueryParamsRequest): _31.QueryParamsRequestProtoMsg;
            };
            QueryParamsResponse: {
                typeUrl: string;
                encode(message: _31.QueryParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _31.QueryParamsResponse;
                fromPartial(object: Partial<_31.QueryParamsResponse>): _31.QueryParamsResponse;
                fromAmino(object: _31.QueryParamsResponseAmino): _31.QueryParamsResponse;
                toAmino(message: _31.QueryParamsResponse): _31.QueryParamsResponseAmino;
                fromAminoMsg(object: _31.QueryParamsResponseAminoMsg): _31.QueryParamsResponse;
                toAminoMsg(message: _31.QueryParamsResponse): _31.QueryParamsResponseAminoMsg;
                fromProtoMsg(message: _31.QueryParamsResponseProtoMsg): _31.QueryParamsResponse;
                toProto(message: _31.QueryParamsResponse): Uint8Array;
                toProtoMsg(message: _31.QueryParamsResponse): _31.QueryParamsResponseProtoMsg;
            };
            QueryLockableDurationsRequest: {
                typeUrl: string;
                encode(_: _31.QueryLockableDurationsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _31.QueryLockableDurationsRequest;
                fromPartial(_: Partial<_31.QueryLockableDurationsRequest>): _31.QueryLockableDurationsRequest;
                fromAmino(_: _31.QueryLockableDurationsRequestAmino): _31.QueryLockableDurationsRequest;
                toAmino(_: _31.QueryLockableDurationsRequest): _31.QueryLockableDurationsRequestAmino;
                fromAminoMsg(object: _31.QueryLockableDurationsRequestAminoMsg): _31.QueryLockableDurationsRequest;
                toAminoMsg(message: _31.QueryLockableDurationsRequest): _31.QueryLockableDurationsRequestAminoMsg;
                fromProtoMsg(message: _31.QueryLockableDurationsRequestProtoMsg): _31.QueryLockableDurationsRequest;
                toProto(message: _31.QueryLockableDurationsRequest): Uint8Array;
                toProtoMsg(message: _31.QueryLockableDurationsRequest): _31.QueryLockableDurationsRequestProtoMsg;
            };
            QueryLockableDurationsResponse: {
                typeUrl: string;
                encode(message: _31.QueryLockableDurationsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _31.QueryLockableDurationsResponse;
                fromPartial(object: Partial<_31.QueryLockableDurationsResponse>): _31.QueryLockableDurationsResponse;
                fromAmino(object: _31.QueryLockableDurationsResponseAmino): _31.QueryLockableDurationsResponse;
                toAmino(message: _31.QueryLockableDurationsResponse): _31.QueryLockableDurationsResponseAmino;
                fromAminoMsg(object: _31.QueryLockableDurationsResponseAminoMsg): _31.QueryLockableDurationsResponse;
                toAminoMsg(message: _31.QueryLockableDurationsResponse): _31.QueryLockableDurationsResponseAminoMsg;
                fromProtoMsg(message: _31.QueryLockableDurationsResponseProtoMsg): _31.QueryLockableDurationsResponse;
                toProto(message: _31.QueryLockableDurationsResponse): Uint8Array;
                toProtoMsg(message: _31.QueryLockableDurationsResponse): _31.QueryLockableDurationsResponseProtoMsg;
            };
            QueryIncentivizedPoolsRequest: {
                typeUrl: string;
                encode(_: _31.QueryIncentivizedPoolsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _31.QueryIncentivizedPoolsRequest;
                fromPartial(_: Partial<_31.QueryIncentivizedPoolsRequest>): _31.QueryIncentivizedPoolsRequest;
                fromAmino(_: _31.QueryIncentivizedPoolsRequestAmino): _31.QueryIncentivizedPoolsRequest;
                toAmino(_: _31.QueryIncentivizedPoolsRequest): _31.QueryIncentivizedPoolsRequestAmino;
                fromAminoMsg(object: _31.QueryIncentivizedPoolsRequestAminoMsg): _31.QueryIncentivizedPoolsRequest;
                toAminoMsg(message: _31.QueryIncentivizedPoolsRequest): _31.QueryIncentivizedPoolsRequestAminoMsg;
                fromProtoMsg(message: _31.QueryIncentivizedPoolsRequestProtoMsg): _31.QueryIncentivizedPoolsRequest;
                toProto(message: _31.QueryIncentivizedPoolsRequest): Uint8Array;
                toProtoMsg(message: _31.QueryIncentivizedPoolsRequest): _31.QueryIncentivizedPoolsRequestProtoMsg;
            };
            IncentivizedPool: {
                typeUrl: string;
                encode(message: _31.IncentivizedPool, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _31.IncentivizedPool;
                fromPartial(object: Partial<_31.IncentivizedPool>): _31.IncentivizedPool;
                fromAmino(object: _31.IncentivizedPoolAmino): _31.IncentivizedPool;
                toAmino(message: _31.IncentivizedPool): _31.IncentivizedPoolAmino;
                fromAminoMsg(object: _31.IncentivizedPoolAminoMsg): _31.IncentivizedPool;
                toAminoMsg(message: _31.IncentivizedPool): _31.IncentivizedPoolAminoMsg;
                fromProtoMsg(message: _31.IncentivizedPoolProtoMsg): _31.IncentivizedPool;
                toProto(message: _31.IncentivizedPool): Uint8Array;
                toProtoMsg(message: _31.IncentivizedPool): _31.IncentivizedPoolProtoMsg;
            };
            QueryIncentivizedPoolsResponse: {
                typeUrl: string;
                encode(message: _31.QueryIncentivizedPoolsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _31.QueryIncentivizedPoolsResponse;
                fromPartial(object: Partial<_31.QueryIncentivizedPoolsResponse>): _31.QueryIncentivizedPoolsResponse;
                fromAmino(object: _31.QueryIncentivizedPoolsResponseAmino): _31.QueryIncentivizedPoolsResponse;
                toAmino(message: _31.QueryIncentivizedPoolsResponse): _31.QueryIncentivizedPoolsResponseAmino;
                fromAminoMsg(object: _31.QueryIncentivizedPoolsResponseAminoMsg): _31.QueryIncentivizedPoolsResponse;
                toAminoMsg(message: _31.QueryIncentivizedPoolsResponse): _31.QueryIncentivizedPoolsResponseAminoMsg;
                fromProtoMsg(message: _31.QueryIncentivizedPoolsResponseProtoMsg): _31.QueryIncentivizedPoolsResponse;
                toProto(message: _31.QueryIncentivizedPoolsResponse): Uint8Array;
                toProtoMsg(message: _31.QueryIncentivizedPoolsResponse): _31.QueryIncentivizedPoolsResponseProtoMsg;
            };
            QueryExternalIncentiveGaugesRequest: {
                typeUrl: string;
                encode(_: _31.QueryExternalIncentiveGaugesRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _31.QueryExternalIncentiveGaugesRequest;
                fromPartial(_: Partial<_31.QueryExternalIncentiveGaugesRequest>): _31.QueryExternalIncentiveGaugesRequest;
                fromAmino(_: _31.QueryExternalIncentiveGaugesRequestAmino): _31.QueryExternalIncentiveGaugesRequest;
                toAmino(_: _31.QueryExternalIncentiveGaugesRequest): _31.QueryExternalIncentiveGaugesRequestAmino;
                fromAminoMsg(object: _31.QueryExternalIncentiveGaugesRequestAminoMsg): _31.QueryExternalIncentiveGaugesRequest;
                toAminoMsg(message: _31.QueryExternalIncentiveGaugesRequest): _31.QueryExternalIncentiveGaugesRequestAminoMsg;
                fromProtoMsg(message: _31.QueryExternalIncentiveGaugesRequestProtoMsg): _31.QueryExternalIncentiveGaugesRequest;
                toProto(message: _31.QueryExternalIncentiveGaugesRequest): Uint8Array;
                toProtoMsg(message: _31.QueryExternalIncentiveGaugesRequest): _31.QueryExternalIncentiveGaugesRequestProtoMsg;
            };
            QueryExternalIncentiveGaugesResponse: {
                typeUrl: string;
                encode(message: _31.QueryExternalIncentiveGaugesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _31.QueryExternalIncentiveGaugesResponse;
                fromPartial(object: Partial<_31.QueryExternalIncentiveGaugesResponse>): _31.QueryExternalIncentiveGaugesResponse;
                fromAmino(object: _31.QueryExternalIncentiveGaugesResponseAmino): _31.QueryExternalIncentiveGaugesResponse;
                toAmino(message: _31.QueryExternalIncentiveGaugesResponse): _31.QueryExternalIncentiveGaugesResponseAmino;
                fromAminoMsg(object: _31.QueryExternalIncentiveGaugesResponseAminoMsg): _31.QueryExternalIncentiveGaugesResponse;
                toAminoMsg(message: _31.QueryExternalIncentiveGaugesResponse): _31.QueryExternalIncentiveGaugesResponseAminoMsg;
                fromProtoMsg(message: _31.QueryExternalIncentiveGaugesResponseProtoMsg): _31.QueryExternalIncentiveGaugesResponse;
                toProto(message: _31.QueryExternalIncentiveGaugesResponse): Uint8Array;
                toProtoMsg(message: _31.QueryExternalIncentiveGaugesResponse): _31.QueryExternalIncentiveGaugesResponseProtoMsg;
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
            LockableDurationsInfo: {
                typeUrl: string;
                encode(message: _30.LockableDurationsInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _30.LockableDurationsInfo;
                fromPartial(object: Partial<_30.LockableDurationsInfo>): _30.LockableDurationsInfo;
                fromAmino(object: _30.LockableDurationsInfoAmino): _30.LockableDurationsInfo;
                toAmino(message: _30.LockableDurationsInfo): _30.LockableDurationsInfoAmino;
                fromAminoMsg(object: _30.LockableDurationsInfoAminoMsg): _30.LockableDurationsInfo;
                toAminoMsg(message: _30.LockableDurationsInfo): _30.LockableDurationsInfoAminoMsg;
                fromProtoMsg(message: _30.LockableDurationsInfoProtoMsg): _30.LockableDurationsInfo;
                toProto(message: _30.LockableDurationsInfo): Uint8Array;
                toProtoMsg(message: _30.LockableDurationsInfo): _30.LockableDurationsInfoProtoMsg;
            };
            DistrInfo: {
                typeUrl: string;
                encode(message: _30.DistrInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _30.DistrInfo;
                fromPartial(object: Partial<_30.DistrInfo>): _30.DistrInfo;
                fromAmino(object: _30.DistrInfoAmino): _30.DistrInfo;
                toAmino(message: _30.DistrInfo): _30.DistrInfoAmino;
                fromAminoMsg(object: _30.DistrInfoAminoMsg): _30.DistrInfo;
                toAminoMsg(message: _30.DistrInfo): _30.DistrInfoAminoMsg;
                fromProtoMsg(message: _30.DistrInfoProtoMsg): _30.DistrInfo;
                toProto(message: _30.DistrInfo): Uint8Array;
                toProtoMsg(message: _30.DistrInfo): _30.DistrInfoProtoMsg;
            };
            DistrRecord: {
                typeUrl: string;
                encode(message: _30.DistrRecord, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _30.DistrRecord;
                fromPartial(object: Partial<_30.DistrRecord>): _30.DistrRecord;
                fromAmino(object: _30.DistrRecordAmino): _30.DistrRecord;
                toAmino(message: _30.DistrRecord): _30.DistrRecordAmino;
                fromAminoMsg(object: _30.DistrRecordAminoMsg): _30.DistrRecord;
                toAminoMsg(message: _30.DistrRecord): _30.DistrRecordAminoMsg;
                fromProtoMsg(message: _30.DistrRecordProtoMsg): _30.DistrRecord;
                toProto(message: _30.DistrRecord): Uint8Array;
                toProtoMsg(message: _30.DistrRecord): _30.DistrRecordProtoMsg;
            };
            PoolToGauge: {
                typeUrl: string;
                encode(message: _30.PoolToGauge, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _30.PoolToGauge;
                fromPartial(object: Partial<_30.PoolToGauge>): _30.PoolToGauge;
                fromAmino(object: _30.PoolToGaugeAmino): _30.PoolToGauge;
                toAmino(message: _30.PoolToGauge): _30.PoolToGaugeAmino;
                fromAminoMsg(object: _30.PoolToGaugeAminoMsg): _30.PoolToGauge;
                toAminoMsg(message: _30.PoolToGauge): _30.PoolToGaugeAminoMsg;
                fromProtoMsg(message: _30.PoolToGaugeProtoMsg): _30.PoolToGauge;
                toProto(message: _30.PoolToGauge): Uint8Array;
                toProtoMsg(message: _30.PoolToGauge): _30.PoolToGaugeProtoMsg;
            };
            PoolToGauges: {
                typeUrl: string;
                encode(message: _30.PoolToGauges, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _30.PoolToGauges;
                fromPartial(object: Partial<_30.PoolToGauges>): _30.PoolToGauges;
                fromAmino(object: _30.PoolToGaugesAmino): _30.PoolToGauges;
                toAmino(message: _30.PoolToGauges): _30.PoolToGaugesAmino;
                fromAminoMsg(object: _30.PoolToGaugesAminoMsg): _30.PoolToGauges;
                toAminoMsg(message: _30.PoolToGauges): _30.PoolToGaugesAminoMsg;
                fromProtoMsg(message: _30.PoolToGaugesProtoMsg): _30.PoolToGauges;
                toProto(message: _30.PoolToGauges): Uint8Array;
                toProtoMsg(message: _30.PoolToGauges): _30.PoolToGaugesProtoMsg;
            };
        };
    }
    const ClientFactory: {
        createRPCMsgClient: ({ rpc }: {
            rpc: import("../helpers").Rpc;
        }) => Promise<{
            osmosis: {
                gamm: {
                    poolmodels: {
                        balancer: {
                            v1beta1: _195.MsgClientImpl;
                        };
                    };
                    v1beta1: _196.MsgClientImpl;
                };
                lockup: _197.MsgClientImpl;
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
                epochs: {
                    v1beta1: {
                        epochInfos(request?: _20.QueryEpochsInfoRequest): Promise<_20.QueryEpochsInfoResponse>;
                        currentEpoch(request: _20.QueryCurrentEpochRequest): Promise<_20.QueryCurrentEpochResponse>;
                    };
                };
                gamm: {
                    v1beta1: {
                        pools(request?: _22.QueryPoolsRequest): Promise<_22.QueryPoolsResponse>;
                        numPools(request?: _22.QueryNumPoolsRequest): Promise<_22.QueryNumPoolsResponse>;
                        totalLiquidity(request?: _22.QueryTotalLiquidityRequest): Promise<_22.QueryTotalLiquidityResponse>;
                        pool(request: _22.QueryPoolRequest): Promise<_22.QueryPoolResponse>;
                        poolParams(request: _22.QueryPoolParamsRequest): Promise<_22.QueryPoolParamsResponse>;
                        totalPoolLiquidity(request: _22.QueryTotalPoolLiquidityRequest): Promise<_22.QueryTotalPoolLiquidityResponse>;
                        totalShares(request: _22.QueryTotalSharesRequest): Promise<_22.QueryTotalSharesResponse>;
                        spotPrice(request: _22.QuerySpotPriceRequest): Promise<_22.QuerySpotPriceResponse>;
                        estimateSwapExactAmountIn(request: _22.QuerySwapExactAmountInRequest): Promise<_22.QuerySwapExactAmountInResponse>;
                        estimateSwapExactAmountOut(request: _22.QuerySwapExactAmountOutRequest): Promise<_22.QuerySwapExactAmountOutResponse>;
                    };
                };
                mint: {
                    v1beta1: {
                        params(request?: _29.QueryParamsRequest): Promise<_29.QueryParamsResponse>;
                        epochProvisions(request?: _29.QueryEpochProvisionsRequest): Promise<_29.QueryEpochProvisionsResponse>;
                    };
                };
                poolincentives: {
                    v1beta1: {
                        gaugeIds(request: _31.QueryGaugeIdsRequest): Promise<_31.QueryGaugeIdsResponse>;
                        distrInfo(request?: _31.QueryDistrInfoRequest): Promise<_31.QueryDistrInfoResponse>;
                        params(request?: _31.QueryParamsRequest): Promise<_31.QueryParamsResponse>;
                        lockableDurations(request?: _31.QueryLockableDurationsRequest): Promise<_31.QueryLockableDurationsResponse>;
                        incentivizedPools(request?: _31.QueryIncentivizedPoolsRequest): Promise<_31.QueryIncentivizedPoolsResponse>;
                        externalIncentiveGauges(request?: _31.QueryExternalIncentiveGaugesRequest): Promise<_31.QueryExternalIncentiveGaugesResponse>;
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
        createLCDClient: ({ restEndpoint }: {
            restEndpoint: string;
        }) => Promise<{
            osmosis: {
                epochs: {
                    v1beta1: _187.LCDQueryClient;
                };
                gamm: {
                    v1beta1: _188.LCDQueryClient;
                };
                mint: {
                    v1beta1: _189.LCDQueryClient;
                };
                poolincentives: {
                    v1beta1: _190.LCDQueryClient;
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
