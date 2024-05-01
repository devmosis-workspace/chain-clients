import * as _0 from "./bandwidth/v1beta1/genesis";
import * as _1 from "./bandwidth/v1beta1/query";
import * as _2 from "./bandwidth/v1beta1/types";
import * as _3 from "./base/query/v1beta1/pagination";
import * as _4 from "./dmn/v1beta1/genesis";
import * as _5 from "./dmn/v1beta1/query";
import * as _6 from "./dmn/v1beta1/tx";
import * as _7 from "./dmn/v1beta1/types";
import * as _8 from "./graph/v1beta1/query";
import * as _9 from "./graph/v1beta1/tx";
import * as _10 from "./graph/v1beta1/types";
import * as _11 from "./grid/v1beta1/genesis";
import * as _12 from "./grid/v1beta1/query";
import * as _13 from "./grid/v1beta1/tx";
import * as _14 from "./grid/v1beta1/types";
import * as _15 from "./rank/v1beta1/genesis";
import * as _16 from "./rank/v1beta1/query";
import * as _17 from "./rank/v1beta1/types";
import * as _18 from "./resources/v1beta1/genesis";
import * as _19 from "./resources/v1beta1/query";
import * as _20 from "./resources/v1beta1/tx";
import * as _21 from "./resources/v1beta1/types";
import * as _126 from "./bandwidth/v1beta1/query.lcd";
import * as _127 from "./dmn/v1beta1/query.lcd";
import * as _128 from "./graph/v1beta1/query.lcd";
import * as _129 from "./grid/v1beta1/query.lcd";
import * as _130 from "./rank/v1beta1/query.lcd";
import * as _131 from "./resources/v1beta1/query.lcd";
import * as _132 from "./bandwidth/v1beta1/query.rpc.Query";
import * as _133 from "./dmn/v1beta1/query.rpc.Query";
import * as _134 from "./graph/v1beta1/query.rpc.Query";
import * as _135 from "./grid/v1beta1/query.rpc.Query";
import * as _136 from "./rank/v1beta1/query.rpc.Query";
import * as _137 from "./resources/v1beta1/query.rpc.Query";
import * as _138 from "./dmn/v1beta1/tx.rpc.msg";
import * as _139 from "./graph/v1beta1/tx.rpc.msg";
import * as _140 from "./grid/v1beta1/tx.rpc.msg";
import * as _141 from "./resources/v1beta1/tx.rpc.msg";
export declare namespace cyber {
    namespace bandwidth {
        const v1beta1: {
            QueryClientImpl: typeof _132.QueryClientImpl;
            createRpcQueryExtension: (base: QueryClient) => {
                load(request?: _1.QueryLoadRequest): Promise<_1.QueryLoadResponse>;
                price(request?: _1.QueryPriceRequest): Promise<_1.QueryPriceResponse>;
                totalBandwidth(request?: _1.QueryTotalBandwidthRequest): Promise<_1.QueryTotalBandwidthResponse>;
                neuronBandwidth(request: _1.QueryNeuronBandwidthRequest): Promise<_1.QueryNeuronBandwidthResponse>;
                params(request?: _1.QueryParamsRequest): Promise<_1.QueryParamsResponse>;
            };
            LCDQueryClient: typeof _126.LCDQueryClient;
            Params: {
                typeUrl: string;
                encode(message: _2.Params, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _2.Params;
                fromPartial(object: Partial<_2.Params>): _2.Params;
                fromAmino(object: _2.ParamsAmino): _2.Params;
                toAmino(message: _2.Params): _2.ParamsAmino;
                fromAminoMsg(object: _2.ParamsAminoMsg): _2.Params;
                fromProtoMsg(message: _2.ParamsProtoMsg): _2.Params;
                toProto(message: _2.Params): Uint8Array;
                toProtoMsg(message: _2.Params): _2.ParamsProtoMsg;
            };
            NeuronBandwidth: {
                typeUrl: string;
                encode(message: _2.NeuronBandwidth, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _2.NeuronBandwidth;
                fromPartial(object: Partial<_2.NeuronBandwidth>): _2.NeuronBandwidth;
                fromAmino(object: _2.NeuronBandwidthAmino): _2.NeuronBandwidth;
                toAmino(message: _2.NeuronBandwidth): _2.NeuronBandwidthAmino;
                fromAminoMsg(object: _2.NeuronBandwidthAminoMsg): _2.NeuronBandwidth;
                fromProtoMsg(message: _2.NeuronBandwidthProtoMsg): _2.NeuronBandwidth;
                toProto(message: _2.NeuronBandwidth): Uint8Array;
                toProtoMsg(message: _2.NeuronBandwidth): _2.NeuronBandwidthProtoMsg;
            };
            Price: {
                typeUrl: string;
                encode(message: _2.Price, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _2.Price;
                fromPartial(object: Partial<_2.Price>): _2.Price;
                fromAmino(object: _2.PriceAmino): _2.Price;
                toAmino(message: _2.Price): _2.PriceAmino;
                fromAminoMsg(object: _2.PriceAminoMsg): _2.Price;
                fromProtoMsg(message: _2.PriceProtoMsg): _2.Price;
                toProto(message: _2.Price): Uint8Array;
                toProtoMsg(message: _2.Price): _2.PriceProtoMsg;
            };
            QueryLoadRequest: {
                typeUrl: string;
                encode(_: _1.QueryLoadRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _1.QueryLoadRequest;
                fromPartial(_: Partial<_1.QueryLoadRequest>): _1.QueryLoadRequest;
                fromAmino(_: _1.QueryLoadRequestAmino): _1.QueryLoadRequest;
                toAmino(_: _1.QueryLoadRequest): _1.QueryLoadRequestAmino;
                fromAminoMsg(object: _1.QueryLoadRequestAminoMsg): _1.QueryLoadRequest;
                fromProtoMsg(message: _1.QueryLoadRequestProtoMsg): _1.QueryLoadRequest;
                toProto(message: _1.QueryLoadRequest): Uint8Array;
                toProtoMsg(message: _1.QueryLoadRequest): _1.QueryLoadRequestProtoMsg;
            };
            QueryLoadResponse: {
                typeUrl: string;
                encode(message: _1.QueryLoadResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _1.QueryLoadResponse;
                fromPartial(object: Partial<_1.QueryLoadResponse>): _1.QueryLoadResponse;
                fromAmino(object: _1.QueryLoadResponseAmino): _1.QueryLoadResponse;
                toAmino(message: _1.QueryLoadResponse): _1.QueryLoadResponseAmino;
                fromAminoMsg(object: _1.QueryLoadResponseAminoMsg): _1.QueryLoadResponse;
                fromProtoMsg(message: _1.QueryLoadResponseProtoMsg): _1.QueryLoadResponse;
                toProto(message: _1.QueryLoadResponse): Uint8Array;
                toProtoMsg(message: _1.QueryLoadResponse): _1.QueryLoadResponseProtoMsg;
            };
            QueryPriceRequest: {
                typeUrl: string;
                encode(_: _1.QueryPriceRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _1.QueryPriceRequest;
                fromPartial(_: Partial<_1.QueryPriceRequest>): _1.QueryPriceRequest;
                fromAmino(_: _1.QueryPriceRequestAmino): _1.QueryPriceRequest;
                toAmino(_: _1.QueryPriceRequest): _1.QueryPriceRequestAmino;
                fromAminoMsg(object: _1.QueryPriceRequestAminoMsg): _1.QueryPriceRequest;
                fromProtoMsg(message: _1.QueryPriceRequestProtoMsg): _1.QueryPriceRequest;
                toProto(message: _1.QueryPriceRequest): Uint8Array;
                toProtoMsg(message: _1.QueryPriceRequest): _1.QueryPriceRequestProtoMsg;
            };
            QueryPriceResponse: {
                typeUrl: string;
                encode(message: _1.QueryPriceResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _1.QueryPriceResponse;
                fromPartial(object: Partial<_1.QueryPriceResponse>): _1.QueryPriceResponse;
                fromAmino(object: _1.QueryPriceResponseAmino): _1.QueryPriceResponse;
                toAmino(message: _1.QueryPriceResponse): _1.QueryPriceResponseAmino;
                fromAminoMsg(object: _1.QueryPriceResponseAminoMsg): _1.QueryPriceResponse;
                fromProtoMsg(message: _1.QueryPriceResponseProtoMsg): _1.QueryPriceResponse;
                toProto(message: _1.QueryPriceResponse): Uint8Array;
                toProtoMsg(message: _1.QueryPriceResponse): _1.QueryPriceResponseProtoMsg;
            };
            QueryTotalBandwidthRequest: {
                typeUrl: string;
                encode(_: _1.QueryTotalBandwidthRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _1.QueryTotalBandwidthRequest;
                fromPartial(_: Partial<_1.QueryTotalBandwidthRequest>): _1.QueryTotalBandwidthRequest;
                fromAmino(_: _1.QueryTotalBandwidthRequestAmino): _1.QueryTotalBandwidthRequest;
                toAmino(_: _1.QueryTotalBandwidthRequest): _1.QueryTotalBandwidthRequestAmino;
                fromAminoMsg(object: _1.QueryTotalBandwidthRequestAminoMsg): _1.QueryTotalBandwidthRequest;
                fromProtoMsg(message: _1.QueryTotalBandwidthRequestProtoMsg): _1.QueryTotalBandwidthRequest;
                toProto(message: _1.QueryTotalBandwidthRequest): Uint8Array;
                toProtoMsg(message: _1.QueryTotalBandwidthRequest): _1.QueryTotalBandwidthRequestProtoMsg;
            };
            QueryTotalBandwidthResponse: {
                typeUrl: string;
                encode(message: _1.QueryTotalBandwidthResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _1.QueryTotalBandwidthResponse;
                fromPartial(object: Partial<_1.QueryTotalBandwidthResponse>): _1.QueryTotalBandwidthResponse;
                fromAmino(object: _1.QueryTotalBandwidthResponseAmino): _1.QueryTotalBandwidthResponse;
                toAmino(message: _1.QueryTotalBandwidthResponse): _1.QueryTotalBandwidthResponseAmino;
                fromAminoMsg(object: _1.QueryTotalBandwidthResponseAminoMsg): _1.QueryTotalBandwidthResponse;
                fromProtoMsg(message: _1.QueryTotalBandwidthResponseProtoMsg): _1.QueryTotalBandwidthResponse;
                toProto(message: _1.QueryTotalBandwidthResponse): Uint8Array;
                toProtoMsg(message: _1.QueryTotalBandwidthResponse): _1.QueryTotalBandwidthResponseProtoMsg;
            };
            QueryNeuronBandwidthRequest: {
                typeUrl: string;
                encode(message: _1.QueryNeuronBandwidthRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _1.QueryNeuronBandwidthRequest;
                fromPartial(object: Partial<_1.QueryNeuronBandwidthRequest>): _1.QueryNeuronBandwidthRequest;
                fromAmino(object: _1.QueryNeuronBandwidthRequestAmino): _1.QueryNeuronBandwidthRequest;
                toAmino(message: _1.QueryNeuronBandwidthRequest): _1.QueryNeuronBandwidthRequestAmino;
                fromAminoMsg(object: _1.QueryNeuronBandwidthRequestAminoMsg): _1.QueryNeuronBandwidthRequest;
                fromProtoMsg(message: _1.QueryNeuronBandwidthRequestProtoMsg): _1.QueryNeuronBandwidthRequest;
                toProto(message: _1.QueryNeuronBandwidthRequest): Uint8Array;
                toProtoMsg(message: _1.QueryNeuronBandwidthRequest): _1.QueryNeuronBandwidthRequestProtoMsg;
            };
            QueryNeuronBandwidthResponse: {
                typeUrl: string;
                encode(message: _1.QueryNeuronBandwidthResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _1.QueryNeuronBandwidthResponse;
                fromPartial(object: Partial<_1.QueryNeuronBandwidthResponse>): _1.QueryNeuronBandwidthResponse;
                fromAmino(object: _1.QueryNeuronBandwidthResponseAmino): _1.QueryNeuronBandwidthResponse;
                toAmino(message: _1.QueryNeuronBandwidthResponse): _1.QueryNeuronBandwidthResponseAmino;
                fromAminoMsg(object: _1.QueryNeuronBandwidthResponseAminoMsg): _1.QueryNeuronBandwidthResponse;
                fromProtoMsg(message: _1.QueryNeuronBandwidthResponseProtoMsg): _1.QueryNeuronBandwidthResponse;
                toProto(message: _1.QueryNeuronBandwidthResponse): Uint8Array;
                toProtoMsg(message: _1.QueryNeuronBandwidthResponse): _1.QueryNeuronBandwidthResponseProtoMsg;
            };
            QueryParamsRequest: {
                typeUrl: string;
                encode(_: _1.QueryParamsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _1.QueryParamsRequest;
                fromPartial(_: Partial<_1.QueryParamsRequest>): _1.QueryParamsRequest;
                fromAmino(_: _1.QueryParamsRequestAmino): _1.QueryParamsRequest;
                toAmino(_: _1.QueryParamsRequest): _1.QueryParamsRequestAmino;
                fromAminoMsg(object: _1.QueryParamsRequestAminoMsg): _1.QueryParamsRequest;
                fromProtoMsg(message: _1.QueryParamsRequestProtoMsg): _1.QueryParamsRequest;
                toProto(message: _1.QueryParamsRequest): Uint8Array;
                toProtoMsg(message: _1.QueryParamsRequest): _1.QueryParamsRequestProtoMsg;
            };
            QueryParamsResponse: {
                typeUrl: string;
                encode(message: _1.QueryParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _1.QueryParamsResponse;
                fromPartial(object: Partial<_1.QueryParamsResponse>): _1.QueryParamsResponse;
                fromAmino(object: _1.QueryParamsResponseAmino): _1.QueryParamsResponse;
                toAmino(message: _1.QueryParamsResponse): _1.QueryParamsResponseAmino;
                fromAminoMsg(object: _1.QueryParamsResponseAminoMsg): _1.QueryParamsResponse;
                fromProtoMsg(message: _1.QueryParamsResponseProtoMsg): _1.QueryParamsResponse;
                toProto(message: _1.QueryParamsResponse): Uint8Array;
                toProtoMsg(message: _1.QueryParamsResponse): _1.QueryParamsResponseProtoMsg;
            };
            GenesisState: {
                typeUrl: string;
                encode(message: _0.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _0.GenesisState;
                fromPartial(object: Partial<_0.GenesisState>): _0.GenesisState;
                fromAmino(object: _0.GenesisStateAmino): _0.GenesisState;
                toAmino(message: _0.GenesisState): _0.GenesisStateAmino;
                fromAminoMsg(object: _0.GenesisStateAminoMsg): _0.GenesisState;
                fromProtoMsg(message: _0.GenesisStateProtoMsg): _0.GenesisState;
                toProto(message: _0.GenesisState): Uint8Array;
                toProtoMsg(message: _0.GenesisState): _0.GenesisStateProtoMsg;
            };
        };
    }
    namespace base {
        namespace query {
            const v1beta1: {
                PageRequest: {
                    typeUrl: string;
                    encode(message: _3.PageRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _3.PageRequest;
                    fromPartial(object: Partial<_3.PageRequest>): _3.PageRequest;
                    fromAmino(object: _3.PageRequestAmino): _3.PageRequest;
                    toAmino(message: _3.PageRequest): _3.PageRequestAmino;
                    fromAminoMsg(object: _3.PageRequestAminoMsg): _3.PageRequest;
                    fromProtoMsg(message: _3.PageRequestProtoMsg): _3.PageRequest;
                    toProto(message: _3.PageRequest): Uint8Array;
                    toProtoMsg(message: _3.PageRequest): _3.PageRequestProtoMsg;
                };
                PageResponse: {
                    typeUrl: string;
                    encode(message: _3.PageResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _3.PageResponse;
                    fromPartial(object: Partial<_3.PageResponse>): _3.PageResponse;
                    fromAmino(object: _3.PageResponseAmino): _3.PageResponse;
                    toAmino(message: _3.PageResponse): _3.PageResponseAmino;
                    fromAminoMsg(object: _3.PageResponseAminoMsg): _3.PageResponse;
                    fromProtoMsg(message: _3.PageResponseProtoMsg): _3.PageResponse;
                    toProto(message: _3.PageResponse): Uint8Array;
                    toProtoMsg(message: _3.PageResponse): _3.PageResponseProtoMsg;
                };
            };
        }
    }
    namespace dmn {
        const v1beta1: {
            MsgClientImpl: typeof _138.MsgClientImpl;
            QueryClientImpl: typeof _133.QueryClientImpl;
            createRpcQueryExtension: (base: QueryClient) => {
                params(request?: _5.QueryParamsRequest): Promise<_5.QueryParamsResponse>;
                thought(request: _5.QueryThoughtParamsRequest): Promise<_5.QueryThoughtResponse>;
                thoughtStats(request: _5.QueryThoughtParamsRequest): Promise<_5.QueryThoughtStatsResponse>;
                thoughts(request?: _5.QueryThoughtsRequest): Promise<_5.QueryThoughtsResponse>;
                thoughtsStats(request?: _5.QueryThoughtsStatsRequest): Promise<_5.QueryThoughtsStatsResponse>;
            };
            LCDQueryClient: typeof _127.LCDQueryClient;
            registry: readonly [string, GeneratedType][];
            load: (protoRegistry: Registry) => void;
            MessageComposer: {
                encoded: {
                    createThought(value: _6.MsgCreateThought): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    forgetThought(value: _6.MsgForgetThought): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    changeThoughtParticle(value: _6.MsgChangeThoughtParticle): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    changeThoughtName(value: _6.MsgChangeThoughtName): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    changeThoughtInput(value: _6.MsgChangeThoughtInput): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    changeThoughtGasPrice(value: _6.MsgChangeThoughtGasPrice): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    changeThoughtPeriod(value: _6.MsgChangeThoughtPeriod): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    changeThoughtBlock(value: _6.MsgChangeThoughtBlock): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    createThought(value: _6.MsgCreateThought): {
                        typeUrl: string;
                        value: _6.MsgCreateThought;
                    };
                    forgetThought(value: _6.MsgForgetThought): {
                        typeUrl: string;
                        value: _6.MsgForgetThought;
                    };
                    changeThoughtParticle(value: _6.MsgChangeThoughtParticle): {
                        typeUrl: string;
                        value: _6.MsgChangeThoughtParticle;
                    };
                    changeThoughtName(value: _6.MsgChangeThoughtName): {
                        typeUrl: string;
                        value: _6.MsgChangeThoughtName;
                    };
                    changeThoughtInput(value: _6.MsgChangeThoughtInput): {
                        typeUrl: string;
                        value: _6.MsgChangeThoughtInput;
                    };
                    changeThoughtGasPrice(value: _6.MsgChangeThoughtGasPrice): {
                        typeUrl: string;
                        value: _6.MsgChangeThoughtGasPrice;
                    };
                    changeThoughtPeriod(value: _6.MsgChangeThoughtPeriod): {
                        typeUrl: string;
                        value: _6.MsgChangeThoughtPeriod;
                    };
                    changeThoughtBlock(value: _6.MsgChangeThoughtBlock): {
                        typeUrl: string;
                        value: _6.MsgChangeThoughtBlock;
                    };
                };
                fromJSON: {
                    createThought(value: any): {
                        typeUrl: string;
                        value: _6.MsgCreateThought;
                    };
                    forgetThought(value: any): {
                        typeUrl: string;
                        value: _6.MsgForgetThought;
                    };
                    changeThoughtParticle(value: any): {
                        typeUrl: string;
                        value: _6.MsgChangeThoughtParticle;
                    };
                    changeThoughtName(value: any): {
                        typeUrl: string;
                        value: _6.MsgChangeThoughtName;
                    };
                    changeThoughtInput(value: any): {
                        typeUrl: string;
                        value: _6.MsgChangeThoughtInput;
                    };
                    changeThoughtGasPrice(value: any): {
                        typeUrl: string;
                        value: _6.MsgChangeThoughtGasPrice;
                    };
                    changeThoughtPeriod(value: any): {
                        typeUrl: string;
                        value: _6.MsgChangeThoughtPeriod;
                    };
                    changeThoughtBlock(value: any): {
                        typeUrl: string;
                        value: _6.MsgChangeThoughtBlock;
                    };
                };
                fromPartial: {
                    createThought(value: _6.MsgCreateThought): {
                        typeUrl: string;
                        value: _6.MsgCreateThought;
                    };
                    forgetThought(value: _6.MsgForgetThought): {
                        typeUrl: string;
                        value: _6.MsgForgetThought;
                    };
                    changeThoughtParticle(value: _6.MsgChangeThoughtParticle): {
                        typeUrl: string;
                        value: _6.MsgChangeThoughtParticle;
                    };
                    changeThoughtName(value: _6.MsgChangeThoughtName): {
                        typeUrl: string;
                        value: _6.MsgChangeThoughtName;
                    };
                    changeThoughtInput(value: _6.MsgChangeThoughtInput): {
                        typeUrl: string;
                        value: _6.MsgChangeThoughtInput;
                    };
                    changeThoughtGasPrice(value: _6.MsgChangeThoughtGasPrice): {
                        typeUrl: string;
                        value: _6.MsgChangeThoughtGasPrice;
                    };
                    changeThoughtPeriod(value: _6.MsgChangeThoughtPeriod): {
                        typeUrl: string;
                        value: _6.MsgChangeThoughtPeriod;
                    };
                    changeThoughtBlock(value: _6.MsgChangeThoughtBlock): {
                        typeUrl: string;
                        value: _6.MsgChangeThoughtBlock;
                    };
                };
            };
            AminoConverter: {
                "/cyber.dmn.v1beta1.MsgCreateThought": {
                    aminoType: string;
                    toAmino: (message: _6.MsgCreateThought) => _6.MsgCreateThoughtAmino;
                    fromAmino: (object: _6.MsgCreateThoughtAmino) => _6.MsgCreateThought;
                };
                "/cyber.dmn.v1beta1.MsgForgetThought": {
                    aminoType: string;
                    toAmino: (message: _6.MsgForgetThought) => _6.MsgForgetThoughtAmino;
                    fromAmino: (object: _6.MsgForgetThoughtAmino) => _6.MsgForgetThought;
                };
                "/cyber.dmn.v1beta1.MsgChangeThoughtParticle": {
                    aminoType: string;
                    toAmino: (message: _6.MsgChangeThoughtParticle) => _6.MsgChangeThoughtParticleAmino;
                    fromAmino: (object: _6.MsgChangeThoughtParticleAmino) => _6.MsgChangeThoughtParticle;
                };
                "/cyber.dmn.v1beta1.MsgChangeThoughtName": {
                    aminoType: string;
                    toAmino: (message: _6.MsgChangeThoughtName) => _6.MsgChangeThoughtNameAmino;
                    fromAmino: (object: _6.MsgChangeThoughtNameAmino) => _6.MsgChangeThoughtName;
                };
                "/cyber.dmn.v1beta1.MsgChangeThoughtInput": {
                    aminoType: string;
                    toAmino: (message: _6.MsgChangeThoughtInput) => _6.MsgChangeThoughtInputAmino;
                    fromAmino: (object: _6.MsgChangeThoughtInputAmino) => _6.MsgChangeThoughtInput;
                };
                "/cyber.dmn.v1beta1.MsgChangeThoughtGasPrice": {
                    aminoType: string;
                    toAmino: (message: _6.MsgChangeThoughtGasPrice) => _6.MsgChangeThoughtGasPriceAmino;
                    fromAmino: (object: _6.MsgChangeThoughtGasPriceAmino) => _6.MsgChangeThoughtGasPrice;
                };
                "/cyber.dmn.v1beta1.MsgChangeThoughtPeriod": {
                    aminoType: string;
                    toAmino: (message: _6.MsgChangeThoughtPeriod) => _6.MsgChangeThoughtPeriodAmino;
                    fromAmino: (object: _6.MsgChangeThoughtPeriodAmino) => _6.MsgChangeThoughtPeriod;
                };
                "/cyber.dmn.v1beta1.MsgChangeThoughtBlock": {
                    aminoType: string;
                    toAmino: (message: _6.MsgChangeThoughtBlock) => _6.MsgChangeThoughtBlockAmino;
                    fromAmino: (object: _6.MsgChangeThoughtBlockAmino) => _6.MsgChangeThoughtBlock;
                };
            };
            Params: {
                typeUrl: string;
                encode(message: _7.Params, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _7.Params;
                fromPartial(object: Partial<_7.Params>): _7.Params;
                fromAmino(object: _7.ParamsAmino): _7.Params;
                toAmino(message: _7.Params): _7.ParamsAmino;
                fromAminoMsg(object: _7.ParamsAminoMsg): _7.Params;
                fromProtoMsg(message: _7.ParamsProtoMsg): _7.Params;
                toProto(message: _7.Params): Uint8Array;
                toProtoMsg(message: _7.Params): _7.ParamsProtoMsg;
            };
            Thought: {
                typeUrl: string;
                encode(message: _7.Thought, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _7.Thought;
                fromPartial(object: Partial<_7.Thought>): _7.Thought;
                fromAmino(object: _7.ThoughtAmino): _7.Thought;
                toAmino(message: _7.Thought): _7.ThoughtAmino;
                fromAminoMsg(object: _7.ThoughtAminoMsg): _7.Thought;
                fromProtoMsg(message: _7.ThoughtProtoMsg): _7.Thought;
                toProto(message: _7.Thought): Uint8Array;
                toProtoMsg(message: _7.Thought): _7.ThoughtProtoMsg;
            };
            Trigger: {
                typeUrl: string;
                encode(message: _7.Trigger, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _7.Trigger;
                fromPartial(object: Partial<_7.Trigger>): _7.Trigger;
                fromAmino(object: _7.TriggerAmino): _7.Trigger;
                toAmino(message: _7.Trigger): _7.TriggerAmino;
                fromAminoMsg(object: _7.TriggerAminoMsg): _7.Trigger;
                fromProtoMsg(message: _7.TriggerProtoMsg): _7.Trigger;
                toProto(message: _7.Trigger): Uint8Array;
                toProtoMsg(message: _7.Trigger): _7.TriggerProtoMsg;
            };
            Load: {
                typeUrl: string;
                encode(message: _7.Load, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _7.Load;
                fromPartial(object: Partial<_7.Load>): _7.Load;
                fromAmino(object: _7.LoadAmino): _7.Load;
                toAmino(message: _7.Load): _7.LoadAmino;
                fromAminoMsg(object: _7.LoadAminoMsg): _7.Load;
                fromProtoMsg(message: _7.LoadProtoMsg): _7.Load;
                toProto(message: _7.Load): Uint8Array;
                toProtoMsg(message: _7.Load): _7.LoadProtoMsg;
            };
            ThoughtStats: {
                typeUrl: string;
                encode(message: _7.ThoughtStats, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _7.ThoughtStats;
                fromPartial(object: Partial<_7.ThoughtStats>): _7.ThoughtStats;
                fromAmino(object: _7.ThoughtStatsAmino): _7.ThoughtStats;
                toAmino(message: _7.ThoughtStats): _7.ThoughtStatsAmino;
                fromAminoMsg(object: _7.ThoughtStatsAminoMsg): _7.ThoughtStats;
                fromProtoMsg(message: _7.ThoughtStatsProtoMsg): _7.ThoughtStats;
                toProto(message: _7.ThoughtStats): Uint8Array;
                toProtoMsg(message: _7.ThoughtStats): _7.ThoughtStatsProtoMsg;
            };
            MsgCreateThought: {
                typeUrl: string;
                encode(message: _6.MsgCreateThought, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _6.MsgCreateThought;
                fromPartial(object: Partial<_6.MsgCreateThought>): _6.MsgCreateThought;
                fromAmino(object: _6.MsgCreateThoughtAmino): _6.MsgCreateThought;
                toAmino(message: _6.MsgCreateThought): _6.MsgCreateThoughtAmino;
                fromAminoMsg(object: _6.MsgCreateThoughtAminoMsg): _6.MsgCreateThought;
                fromProtoMsg(message: _6.MsgCreateThoughtProtoMsg): _6.MsgCreateThought;
                toProto(message: _6.MsgCreateThought): Uint8Array;
                toProtoMsg(message: _6.MsgCreateThought): _6.MsgCreateThoughtProtoMsg;
            };
            MsgForgetThought: {
                typeUrl: string;
                encode(message: _6.MsgForgetThought, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _6.MsgForgetThought;
                fromPartial(object: Partial<_6.MsgForgetThought>): _6.MsgForgetThought;
                fromAmino(object: _6.MsgForgetThoughtAmino): _6.MsgForgetThought;
                toAmino(message: _6.MsgForgetThought): _6.MsgForgetThoughtAmino;
                fromAminoMsg(object: _6.MsgForgetThoughtAminoMsg): _6.MsgForgetThought;
                fromProtoMsg(message: _6.MsgForgetThoughtProtoMsg): _6.MsgForgetThought;
                toProto(message: _6.MsgForgetThought): Uint8Array;
                toProtoMsg(message: _6.MsgForgetThought): _6.MsgForgetThoughtProtoMsg;
            };
            MsgChangeThoughtParticle: {
                typeUrl: string;
                encode(message: _6.MsgChangeThoughtParticle, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _6.MsgChangeThoughtParticle;
                fromPartial(object: Partial<_6.MsgChangeThoughtParticle>): _6.MsgChangeThoughtParticle;
                fromAmino(object: _6.MsgChangeThoughtParticleAmino): _6.MsgChangeThoughtParticle;
                toAmino(message: _6.MsgChangeThoughtParticle): _6.MsgChangeThoughtParticleAmino;
                fromAminoMsg(object: _6.MsgChangeThoughtParticleAminoMsg): _6.MsgChangeThoughtParticle;
                fromProtoMsg(message: _6.MsgChangeThoughtParticleProtoMsg): _6.MsgChangeThoughtParticle;
                toProto(message: _6.MsgChangeThoughtParticle): Uint8Array;
                toProtoMsg(message: _6.MsgChangeThoughtParticle): _6.MsgChangeThoughtParticleProtoMsg;
            };
            MsgChangeThoughtName: {
                typeUrl: string;
                encode(message: _6.MsgChangeThoughtName, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _6.MsgChangeThoughtName;
                fromPartial(object: Partial<_6.MsgChangeThoughtName>): _6.MsgChangeThoughtName;
                fromAmino(object: _6.MsgChangeThoughtNameAmino): _6.MsgChangeThoughtName;
                toAmino(message: _6.MsgChangeThoughtName): _6.MsgChangeThoughtNameAmino;
                fromAminoMsg(object: _6.MsgChangeThoughtNameAminoMsg): _6.MsgChangeThoughtName;
                fromProtoMsg(message: _6.MsgChangeThoughtNameProtoMsg): _6.MsgChangeThoughtName;
                toProto(message: _6.MsgChangeThoughtName): Uint8Array;
                toProtoMsg(message: _6.MsgChangeThoughtName): _6.MsgChangeThoughtNameProtoMsg;
            };
            MsgChangeThoughtInput: {
                typeUrl: string;
                encode(message: _6.MsgChangeThoughtInput, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _6.MsgChangeThoughtInput;
                fromPartial(object: Partial<_6.MsgChangeThoughtInput>): _6.MsgChangeThoughtInput;
                fromAmino(object: _6.MsgChangeThoughtInputAmino): _6.MsgChangeThoughtInput;
                toAmino(message: _6.MsgChangeThoughtInput): _6.MsgChangeThoughtInputAmino;
                fromAminoMsg(object: _6.MsgChangeThoughtInputAminoMsg): _6.MsgChangeThoughtInput;
                fromProtoMsg(message: _6.MsgChangeThoughtInputProtoMsg): _6.MsgChangeThoughtInput;
                toProto(message: _6.MsgChangeThoughtInput): Uint8Array;
                toProtoMsg(message: _6.MsgChangeThoughtInput): _6.MsgChangeThoughtInputProtoMsg;
            };
            MsgChangeThoughtGasPrice: {
                typeUrl: string;
                encode(message: _6.MsgChangeThoughtGasPrice, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _6.MsgChangeThoughtGasPrice;
                fromPartial(object: Partial<_6.MsgChangeThoughtGasPrice>): _6.MsgChangeThoughtGasPrice;
                fromAmino(object: _6.MsgChangeThoughtGasPriceAmino): _6.MsgChangeThoughtGasPrice;
                toAmino(message: _6.MsgChangeThoughtGasPrice): _6.MsgChangeThoughtGasPriceAmino;
                fromAminoMsg(object: _6.MsgChangeThoughtGasPriceAminoMsg): _6.MsgChangeThoughtGasPrice;
                fromProtoMsg(message: _6.MsgChangeThoughtGasPriceProtoMsg): _6.MsgChangeThoughtGasPrice;
                toProto(message: _6.MsgChangeThoughtGasPrice): Uint8Array;
                toProtoMsg(message: _6.MsgChangeThoughtGasPrice): _6.MsgChangeThoughtGasPriceProtoMsg;
            };
            MsgChangeThoughtPeriod: {
                typeUrl: string;
                encode(message: _6.MsgChangeThoughtPeriod, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _6.MsgChangeThoughtPeriod;
                fromPartial(object: Partial<_6.MsgChangeThoughtPeriod>): _6.MsgChangeThoughtPeriod;
                fromAmino(object: _6.MsgChangeThoughtPeriodAmino): _6.MsgChangeThoughtPeriod;
                toAmino(message: _6.MsgChangeThoughtPeriod): _6.MsgChangeThoughtPeriodAmino;
                fromAminoMsg(object: _6.MsgChangeThoughtPeriodAminoMsg): _6.MsgChangeThoughtPeriod;
                fromProtoMsg(message: _6.MsgChangeThoughtPeriodProtoMsg): _6.MsgChangeThoughtPeriod;
                toProto(message: _6.MsgChangeThoughtPeriod): Uint8Array;
                toProtoMsg(message: _6.MsgChangeThoughtPeriod): _6.MsgChangeThoughtPeriodProtoMsg;
            };
            MsgChangeThoughtBlock: {
                typeUrl: string;
                encode(message: _6.MsgChangeThoughtBlock, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _6.MsgChangeThoughtBlock;
                fromPartial(object: Partial<_6.MsgChangeThoughtBlock>): _6.MsgChangeThoughtBlock;
                fromAmino(object: _6.MsgChangeThoughtBlockAmino): _6.MsgChangeThoughtBlock;
                toAmino(message: _6.MsgChangeThoughtBlock): _6.MsgChangeThoughtBlockAmino;
                fromAminoMsg(object: _6.MsgChangeThoughtBlockAminoMsg): _6.MsgChangeThoughtBlock;
                fromProtoMsg(message: _6.MsgChangeThoughtBlockProtoMsg): _6.MsgChangeThoughtBlock;
                toProto(message: _6.MsgChangeThoughtBlock): Uint8Array;
                toProtoMsg(message: _6.MsgChangeThoughtBlock): _6.MsgChangeThoughtBlockProtoMsg;
            };
            MsgCreateThoughtResponse: {
                typeUrl: string;
                encode(_: _6.MsgCreateThoughtResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _6.MsgCreateThoughtResponse;
                fromPartial(_: Partial<_6.MsgCreateThoughtResponse>): _6.MsgCreateThoughtResponse;
                fromAmino(_: _6.MsgCreateThoughtResponseAmino): _6.MsgCreateThoughtResponse;
                toAmino(_: _6.MsgCreateThoughtResponse): _6.MsgCreateThoughtResponseAmino;
                fromAminoMsg(object: _6.MsgCreateThoughtResponseAminoMsg): _6.MsgCreateThoughtResponse;
                fromProtoMsg(message: _6.MsgCreateThoughtResponseProtoMsg): _6.MsgCreateThoughtResponse;
                toProto(message: _6.MsgCreateThoughtResponse): Uint8Array;
                toProtoMsg(message: _6.MsgCreateThoughtResponse): _6.MsgCreateThoughtResponseProtoMsg;
            };
            MsgForgetThoughtResponse: {
                typeUrl: string;
                encode(_: _6.MsgForgetThoughtResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _6.MsgForgetThoughtResponse;
                fromPartial(_: Partial<_6.MsgForgetThoughtResponse>): _6.MsgForgetThoughtResponse;
                fromAmino(_: _6.MsgForgetThoughtResponseAmino): _6.MsgForgetThoughtResponse;
                toAmino(_: _6.MsgForgetThoughtResponse): _6.MsgForgetThoughtResponseAmino;
                fromAminoMsg(object: _6.MsgForgetThoughtResponseAminoMsg): _6.MsgForgetThoughtResponse;
                fromProtoMsg(message: _6.MsgForgetThoughtResponseProtoMsg): _6.MsgForgetThoughtResponse;
                toProto(message: _6.MsgForgetThoughtResponse): Uint8Array;
                toProtoMsg(message: _6.MsgForgetThoughtResponse): _6.MsgForgetThoughtResponseProtoMsg;
            };
            MsgChangeThoughtParticleResponse: {
                typeUrl: string;
                encode(_: _6.MsgChangeThoughtParticleResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _6.MsgChangeThoughtParticleResponse;
                fromPartial(_: Partial<_6.MsgChangeThoughtParticleResponse>): _6.MsgChangeThoughtParticleResponse;
                fromAmino(_: _6.MsgChangeThoughtParticleResponseAmino): _6.MsgChangeThoughtParticleResponse;
                toAmino(_: _6.MsgChangeThoughtParticleResponse): _6.MsgChangeThoughtParticleResponseAmino;
                fromAminoMsg(object: _6.MsgChangeThoughtParticleResponseAminoMsg): _6.MsgChangeThoughtParticleResponse;
                fromProtoMsg(message: _6.MsgChangeThoughtParticleResponseProtoMsg): _6.MsgChangeThoughtParticleResponse;
                toProto(message: _6.MsgChangeThoughtParticleResponse): Uint8Array;
                toProtoMsg(message: _6.MsgChangeThoughtParticleResponse): _6.MsgChangeThoughtParticleResponseProtoMsg;
            };
            MsgChangeThoughtNameResponse: {
                typeUrl: string;
                encode(_: _6.MsgChangeThoughtNameResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _6.MsgChangeThoughtNameResponse;
                fromPartial(_: Partial<_6.MsgChangeThoughtNameResponse>): _6.MsgChangeThoughtNameResponse;
                fromAmino(_: _6.MsgChangeThoughtNameResponseAmino): _6.MsgChangeThoughtNameResponse;
                toAmino(_: _6.MsgChangeThoughtNameResponse): _6.MsgChangeThoughtNameResponseAmino;
                fromAminoMsg(object: _6.MsgChangeThoughtNameResponseAminoMsg): _6.MsgChangeThoughtNameResponse;
                fromProtoMsg(message: _6.MsgChangeThoughtNameResponseProtoMsg): _6.MsgChangeThoughtNameResponse;
                toProto(message: _6.MsgChangeThoughtNameResponse): Uint8Array;
                toProtoMsg(message: _6.MsgChangeThoughtNameResponse): _6.MsgChangeThoughtNameResponseProtoMsg;
            };
            MsgChangeThoughtInputResponse: {
                typeUrl: string;
                encode(_: _6.MsgChangeThoughtInputResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _6.MsgChangeThoughtInputResponse;
                fromPartial(_: Partial<_6.MsgChangeThoughtInputResponse>): _6.MsgChangeThoughtInputResponse;
                fromAmino(_: _6.MsgChangeThoughtInputResponseAmino): _6.MsgChangeThoughtInputResponse;
                toAmino(_: _6.MsgChangeThoughtInputResponse): _6.MsgChangeThoughtInputResponseAmino;
                fromAminoMsg(object: _6.MsgChangeThoughtInputResponseAminoMsg): _6.MsgChangeThoughtInputResponse;
                fromProtoMsg(message: _6.MsgChangeThoughtInputResponseProtoMsg): _6.MsgChangeThoughtInputResponse;
                toProto(message: _6.MsgChangeThoughtInputResponse): Uint8Array;
                toProtoMsg(message: _6.MsgChangeThoughtInputResponse): _6.MsgChangeThoughtInputResponseProtoMsg;
            };
            MsgChangeThoughtGasPriceResponse: {
                typeUrl: string;
                encode(_: _6.MsgChangeThoughtGasPriceResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _6.MsgChangeThoughtGasPriceResponse;
                fromPartial(_: Partial<_6.MsgChangeThoughtGasPriceResponse>): _6.MsgChangeThoughtGasPriceResponse;
                fromAmino(_: _6.MsgChangeThoughtGasPriceResponseAmino): _6.MsgChangeThoughtGasPriceResponse;
                toAmino(_: _6.MsgChangeThoughtGasPriceResponse): _6.MsgChangeThoughtGasPriceResponseAmino;
                fromAminoMsg(object: _6.MsgChangeThoughtGasPriceResponseAminoMsg): _6.MsgChangeThoughtGasPriceResponse;
                fromProtoMsg(message: _6.MsgChangeThoughtGasPriceResponseProtoMsg): _6.MsgChangeThoughtGasPriceResponse;
                toProto(message: _6.MsgChangeThoughtGasPriceResponse): Uint8Array;
                toProtoMsg(message: _6.MsgChangeThoughtGasPriceResponse): _6.MsgChangeThoughtGasPriceResponseProtoMsg;
            };
            MsgChangeThoughtPeriodResponse: {
                typeUrl: string;
                encode(_: _6.MsgChangeThoughtPeriodResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _6.MsgChangeThoughtPeriodResponse;
                fromPartial(_: Partial<_6.MsgChangeThoughtPeriodResponse>): _6.MsgChangeThoughtPeriodResponse;
                fromAmino(_: _6.MsgChangeThoughtPeriodResponseAmino): _6.MsgChangeThoughtPeriodResponse;
                toAmino(_: _6.MsgChangeThoughtPeriodResponse): _6.MsgChangeThoughtPeriodResponseAmino;
                fromAminoMsg(object: _6.MsgChangeThoughtPeriodResponseAminoMsg): _6.MsgChangeThoughtPeriodResponse;
                fromProtoMsg(message: _6.MsgChangeThoughtPeriodResponseProtoMsg): _6.MsgChangeThoughtPeriodResponse;
                toProto(message: _6.MsgChangeThoughtPeriodResponse): Uint8Array;
                toProtoMsg(message: _6.MsgChangeThoughtPeriodResponse): _6.MsgChangeThoughtPeriodResponseProtoMsg;
            };
            MsgChangeThoughtBlockResponse: {
                typeUrl: string;
                encode(_: _6.MsgChangeThoughtBlockResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _6.MsgChangeThoughtBlockResponse;
                fromPartial(_: Partial<_6.MsgChangeThoughtBlockResponse>): _6.MsgChangeThoughtBlockResponse;
                fromAmino(_: _6.MsgChangeThoughtBlockResponseAmino): _6.MsgChangeThoughtBlockResponse;
                toAmino(_: _6.MsgChangeThoughtBlockResponse): _6.MsgChangeThoughtBlockResponseAmino;
                fromAminoMsg(object: _6.MsgChangeThoughtBlockResponseAminoMsg): _6.MsgChangeThoughtBlockResponse;
                fromProtoMsg(message: _6.MsgChangeThoughtBlockResponseProtoMsg): _6.MsgChangeThoughtBlockResponse;
                toProto(message: _6.MsgChangeThoughtBlockResponse): Uint8Array;
                toProtoMsg(message: _6.MsgChangeThoughtBlockResponse): _6.MsgChangeThoughtBlockResponseProtoMsg;
            };
            QueryParamsRequest: {
                typeUrl: string;
                encode(_: _5.QueryParamsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _5.QueryParamsRequest;
                fromPartial(_: Partial<_5.QueryParamsRequest>): _5.QueryParamsRequest;
                fromAmino(_: _5.QueryParamsRequestAmino): _5.QueryParamsRequest;
                toAmino(_: _5.QueryParamsRequest): _5.QueryParamsRequestAmino;
                fromAminoMsg(object: _5.QueryParamsRequestAminoMsg): _5.QueryParamsRequest;
                fromProtoMsg(message: _5.QueryParamsRequestProtoMsg): _5.QueryParamsRequest;
                toProto(message: _5.QueryParamsRequest): Uint8Array;
                toProtoMsg(message: _5.QueryParamsRequest): _5.QueryParamsRequestProtoMsg;
            };
            QueryParamsResponse: {
                typeUrl: string;
                encode(message: _5.QueryParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _5.QueryParamsResponse;
                fromPartial(object: Partial<_5.QueryParamsResponse>): _5.QueryParamsResponse;
                fromAmino(object: _5.QueryParamsResponseAmino): _5.QueryParamsResponse;
                toAmino(message: _5.QueryParamsResponse): _5.QueryParamsResponseAmino;
                fromAminoMsg(object: _5.QueryParamsResponseAminoMsg): _5.QueryParamsResponse;
                fromProtoMsg(message: _5.QueryParamsResponseProtoMsg): _5.QueryParamsResponse;
                toProto(message: _5.QueryParamsResponse): Uint8Array;
                toProtoMsg(message: _5.QueryParamsResponse): _5.QueryParamsResponseProtoMsg;
            };
            QueryThoughtParamsRequest: {
                typeUrl: string;
                encode(message: _5.QueryThoughtParamsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _5.QueryThoughtParamsRequest;
                fromPartial(object: Partial<_5.QueryThoughtParamsRequest>): _5.QueryThoughtParamsRequest;
                fromAmino(object: _5.QueryThoughtParamsRequestAmino): _5.QueryThoughtParamsRequest;
                toAmino(message: _5.QueryThoughtParamsRequest): _5.QueryThoughtParamsRequestAmino;
                fromAminoMsg(object: _5.QueryThoughtParamsRequestAminoMsg): _5.QueryThoughtParamsRequest;
                fromProtoMsg(message: _5.QueryThoughtParamsRequestProtoMsg): _5.QueryThoughtParamsRequest;
                toProto(message: _5.QueryThoughtParamsRequest): Uint8Array;
                toProtoMsg(message: _5.QueryThoughtParamsRequest): _5.QueryThoughtParamsRequestProtoMsg;
            };
            QueryThoughtResponse: {
                typeUrl: string;
                encode(message: _5.QueryThoughtResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _5.QueryThoughtResponse;
                fromPartial(object: Partial<_5.QueryThoughtResponse>): _5.QueryThoughtResponse;
                fromAmino(object: _5.QueryThoughtResponseAmino): _5.QueryThoughtResponse;
                toAmino(message: _5.QueryThoughtResponse): _5.QueryThoughtResponseAmino;
                fromAminoMsg(object: _5.QueryThoughtResponseAminoMsg): _5.QueryThoughtResponse;
                fromProtoMsg(message: _5.QueryThoughtResponseProtoMsg): _5.QueryThoughtResponse;
                toProto(message: _5.QueryThoughtResponse): Uint8Array;
                toProtoMsg(message: _5.QueryThoughtResponse): _5.QueryThoughtResponseProtoMsg;
            };
            QueryThoughtStatsResponse: {
                typeUrl: string;
                encode(message: _5.QueryThoughtStatsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _5.QueryThoughtStatsResponse;
                fromPartial(object: Partial<_5.QueryThoughtStatsResponse>): _5.QueryThoughtStatsResponse;
                fromAmino(object: _5.QueryThoughtStatsResponseAmino): _5.QueryThoughtStatsResponse;
                toAmino(message: _5.QueryThoughtStatsResponse): _5.QueryThoughtStatsResponseAmino;
                fromAminoMsg(object: _5.QueryThoughtStatsResponseAminoMsg): _5.QueryThoughtStatsResponse;
                fromProtoMsg(message: _5.QueryThoughtStatsResponseProtoMsg): _5.QueryThoughtStatsResponse;
                toProto(message: _5.QueryThoughtStatsResponse): Uint8Array;
                toProtoMsg(message: _5.QueryThoughtStatsResponse): _5.QueryThoughtStatsResponseProtoMsg;
            };
            QueryThoughtsRequest: {
                typeUrl: string;
                encode(_: _5.QueryThoughtsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _5.QueryThoughtsRequest;
                fromPartial(_: Partial<_5.QueryThoughtsRequest>): _5.QueryThoughtsRequest;
                fromAmino(_: _5.QueryThoughtsRequestAmino): _5.QueryThoughtsRequest;
                toAmino(_: _5.QueryThoughtsRequest): _5.QueryThoughtsRequestAmino;
                fromAminoMsg(object: _5.QueryThoughtsRequestAminoMsg): _5.QueryThoughtsRequest;
                fromProtoMsg(message: _5.QueryThoughtsRequestProtoMsg): _5.QueryThoughtsRequest;
                toProto(message: _5.QueryThoughtsRequest): Uint8Array;
                toProtoMsg(message: _5.QueryThoughtsRequest): _5.QueryThoughtsRequestProtoMsg;
            };
            QueryThoughtsResponse: {
                typeUrl: string;
                encode(message: _5.QueryThoughtsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _5.QueryThoughtsResponse;
                fromPartial(object: Partial<_5.QueryThoughtsResponse>): _5.QueryThoughtsResponse;
                fromAmino(object: _5.QueryThoughtsResponseAmino): _5.QueryThoughtsResponse;
                toAmino(message: _5.QueryThoughtsResponse): _5.QueryThoughtsResponseAmino;
                fromAminoMsg(object: _5.QueryThoughtsResponseAminoMsg): _5.QueryThoughtsResponse;
                fromProtoMsg(message: _5.QueryThoughtsResponseProtoMsg): _5.QueryThoughtsResponse;
                toProto(message: _5.QueryThoughtsResponse): Uint8Array;
                toProtoMsg(message: _5.QueryThoughtsResponse): _5.QueryThoughtsResponseProtoMsg;
            };
            QueryThoughtsStatsRequest: {
                typeUrl: string;
                encode(_: _5.QueryThoughtsStatsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _5.QueryThoughtsStatsRequest;
                fromPartial(_: Partial<_5.QueryThoughtsStatsRequest>): _5.QueryThoughtsStatsRequest;
                fromAmino(_: _5.QueryThoughtsStatsRequestAmino): _5.QueryThoughtsStatsRequest;
                toAmino(_: _5.QueryThoughtsStatsRequest): _5.QueryThoughtsStatsRequestAmino;
                fromAminoMsg(object: _5.QueryThoughtsStatsRequestAminoMsg): _5.QueryThoughtsStatsRequest;
                fromProtoMsg(message: _5.QueryThoughtsStatsRequestProtoMsg): _5.QueryThoughtsStatsRequest;
                toProto(message: _5.QueryThoughtsStatsRequest): Uint8Array;
                toProtoMsg(message: _5.QueryThoughtsStatsRequest): _5.QueryThoughtsStatsRequestProtoMsg;
            };
            QueryThoughtsStatsResponse: {
                typeUrl: string;
                encode(message: _5.QueryThoughtsStatsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _5.QueryThoughtsStatsResponse;
                fromPartial(object: Partial<_5.QueryThoughtsStatsResponse>): _5.QueryThoughtsStatsResponse;
                fromAmino(object: _5.QueryThoughtsStatsResponseAmino): _5.QueryThoughtsStatsResponse;
                toAmino(message: _5.QueryThoughtsStatsResponse): _5.QueryThoughtsStatsResponseAmino;
                fromAminoMsg(object: _5.QueryThoughtsStatsResponseAminoMsg): _5.QueryThoughtsStatsResponse;
                fromProtoMsg(message: _5.QueryThoughtsStatsResponseProtoMsg): _5.QueryThoughtsStatsResponse;
                toProto(message: _5.QueryThoughtsStatsResponse): Uint8Array;
                toProtoMsg(message: _5.QueryThoughtsStatsResponse): _5.QueryThoughtsStatsResponseProtoMsg;
            };
            GenesisState: {
                typeUrl: string;
                encode(message: _4.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _4.GenesisState;
                fromPartial(object: Partial<_4.GenesisState>): _4.GenesisState;
                fromAmino(object: _4.GenesisStateAmino): _4.GenesisState;
                toAmino(message: _4.GenesisState): _4.GenesisStateAmino;
                fromAminoMsg(object: _4.GenesisStateAminoMsg): _4.GenesisState;
                fromProtoMsg(message: _4.GenesisStateProtoMsg): _4.GenesisState;
                toProto(message: _4.GenesisState): Uint8Array;
                toProtoMsg(message: _4.GenesisState): _4.GenesisStateProtoMsg;
            };
        };
    }
    namespace graph {
        const v1beta1: {
            MsgClientImpl: typeof _139.MsgClientImpl;
            QueryClientImpl: typeof _134.QueryClientImpl;
            createRpcQueryExtension: (base: QueryClient) => {
                graphStats(request?: _8.QueryGraphStatsRequest): Promise<_8.QueryGraphStatsResponse>;
            };
            LCDQueryClient: typeof _128.LCDQueryClient;
            registry: readonly [string, GeneratedType][];
            load: (protoRegistry: Registry) => void;
            MessageComposer: {
                encoded: {
                    cyberlink(value: _9.MsgCyberlink): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    cyberlink(value: _9.MsgCyberlink): {
                        typeUrl: string;
                        value: _9.MsgCyberlink;
                    };
                };
                fromJSON: {
                    cyberlink(value: any): {
                        typeUrl: string;
                        value: _9.MsgCyberlink;
                    };
                };
                fromPartial: {
                    cyberlink(value: _9.MsgCyberlink): {
                        typeUrl: string;
                        value: _9.MsgCyberlink;
                    };
                };
            };
            AminoConverter: {
                "/cyber.graph.v1beta1.MsgCyberlink": {
                    aminoType: string;
                    toAmino: (message: _9.MsgCyberlink) => _9.MsgCyberlinkAmino;
                    fromAmino: (object: _9.MsgCyberlinkAmino) => _9.MsgCyberlink;
                };
            };
            Link: {
                typeUrl: string;
                encode(message: _10.Link, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _10.Link;
                fromPartial(object: Partial<_10.Link>): _10.Link;
                fromAmino(object: _10.LinkAmino): _10.Link;
                toAmino(message: _10.Link): _10.LinkAmino;
                fromAminoMsg(object: _10.LinkAminoMsg): _10.Link;
                fromProtoMsg(message: _10.LinkProtoMsg): _10.Link;
                toProto(message: _10.Link): Uint8Array;
                toProtoMsg(message: _10.Link): _10.LinkProtoMsg;
            };
            MsgCyberlink: {
                typeUrl: string;
                encode(message: _9.MsgCyberlink, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _9.MsgCyberlink;
                fromPartial(object: Partial<_9.MsgCyberlink>): _9.MsgCyberlink;
                fromAmino(object: _9.MsgCyberlinkAmino): _9.MsgCyberlink;
                toAmino(message: _9.MsgCyberlink): _9.MsgCyberlinkAmino;
                fromAminoMsg(object: _9.MsgCyberlinkAminoMsg): _9.MsgCyberlink;
                fromProtoMsg(message: _9.MsgCyberlinkProtoMsg): _9.MsgCyberlink;
                toProto(message: _9.MsgCyberlink): Uint8Array;
                toProtoMsg(message: _9.MsgCyberlink): _9.MsgCyberlinkProtoMsg;
            };
            MsgCyberlinkResponse: {
                typeUrl: string;
                encode(_: _9.MsgCyberlinkResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _9.MsgCyberlinkResponse;
                fromPartial(_: Partial<_9.MsgCyberlinkResponse>): _9.MsgCyberlinkResponse;
                fromAmino(_: _9.MsgCyberlinkResponseAmino): _9.MsgCyberlinkResponse;
                toAmino(_: _9.MsgCyberlinkResponse): _9.MsgCyberlinkResponseAmino;
                fromAminoMsg(object: _9.MsgCyberlinkResponseAminoMsg): _9.MsgCyberlinkResponse;
                fromProtoMsg(message: _9.MsgCyberlinkResponseProtoMsg): _9.MsgCyberlinkResponse;
                toProto(message: _9.MsgCyberlinkResponse): Uint8Array;
                toProtoMsg(message: _9.MsgCyberlinkResponse): _9.MsgCyberlinkResponseProtoMsg;
            };
            QueryGraphStatsRequest: {
                typeUrl: string;
                encode(_: _8.QueryGraphStatsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _8.QueryGraphStatsRequest;
                fromPartial(_: Partial<_8.QueryGraphStatsRequest>): _8.QueryGraphStatsRequest;
                fromAmino(_: _8.QueryGraphStatsRequestAmino): _8.QueryGraphStatsRequest;
                toAmino(_: _8.QueryGraphStatsRequest): _8.QueryGraphStatsRequestAmino;
                fromAminoMsg(object: _8.QueryGraphStatsRequestAminoMsg): _8.QueryGraphStatsRequest;
                fromProtoMsg(message: _8.QueryGraphStatsRequestProtoMsg): _8.QueryGraphStatsRequest;
                toProto(message: _8.QueryGraphStatsRequest): Uint8Array;
                toProtoMsg(message: _8.QueryGraphStatsRequest): _8.QueryGraphStatsRequestProtoMsg;
            };
            QueryGraphStatsResponse: {
                typeUrl: string;
                encode(message: _8.QueryGraphStatsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _8.QueryGraphStatsResponse;
                fromPartial(object: Partial<_8.QueryGraphStatsResponse>): _8.QueryGraphStatsResponse;
                fromAmino(object: _8.QueryGraphStatsResponseAmino): _8.QueryGraphStatsResponse;
                toAmino(message: _8.QueryGraphStatsResponse): _8.QueryGraphStatsResponseAmino;
                fromAminoMsg(object: _8.QueryGraphStatsResponseAminoMsg): _8.QueryGraphStatsResponse;
                fromProtoMsg(message: _8.QueryGraphStatsResponseProtoMsg): _8.QueryGraphStatsResponse;
                toProto(message: _8.QueryGraphStatsResponse): Uint8Array;
                toProtoMsg(message: _8.QueryGraphStatsResponse): _8.QueryGraphStatsResponseProtoMsg;
            };
        };
    }
    namespace grid {
        const v1beta1: {
            MsgClientImpl: typeof _140.MsgClientImpl;
            QueryClientImpl: typeof _135.QueryClientImpl;
            createRpcQueryExtension: (base: QueryClient) => {
                params(request?: _12.QueryParamsRequest): Promise<_12.QueryParamsResponse>;
                sourceRoutes(request: _12.QuerySourceRequest): Promise<_12.QueryRoutesResponse>;
                destinationRoutes(request: _12.QueryDestinationRequest): Promise<_12.QueryRoutesResponse>;
                destinationRoutedEnergy(request: _12.QueryDestinationRequest): Promise<_12.QueryRoutedEnergyResponse>;
                sourceRoutedEnergy(request: _12.QuerySourceRequest): Promise<_12.QueryRoutedEnergyResponse>;
                route(request: _12.QueryRouteRequest): Promise<_12.QueryRouteResponse>;
                routes(request?: _12.QueryRoutesRequest): Promise<_12.QueryRoutesResponse>;
            };
            LCDQueryClient: typeof _129.LCDQueryClient;
            registry: readonly [string, GeneratedType][];
            load: (protoRegistry: Registry) => void;
            MessageComposer: {
                encoded: {
                    createRoute(value: _13.MsgCreateRoute): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    editRoute(value: _13.MsgEditRoute): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    deleteRoute(value: _13.MsgDeleteRoute): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    editRouteName(value: _13.MsgEditRouteName): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    createRoute(value: _13.MsgCreateRoute): {
                        typeUrl: string;
                        value: _13.MsgCreateRoute;
                    };
                    editRoute(value: _13.MsgEditRoute): {
                        typeUrl: string;
                        value: _13.MsgEditRoute;
                    };
                    deleteRoute(value: _13.MsgDeleteRoute): {
                        typeUrl: string;
                        value: _13.MsgDeleteRoute;
                    };
                    editRouteName(value: _13.MsgEditRouteName): {
                        typeUrl: string;
                        value: _13.MsgEditRouteName;
                    };
                };
                fromJSON: {
                    createRoute(value: any): {
                        typeUrl: string;
                        value: _13.MsgCreateRoute;
                    };
                    editRoute(value: any): {
                        typeUrl: string;
                        value: _13.MsgEditRoute;
                    };
                    deleteRoute(value: any): {
                        typeUrl: string;
                        value: _13.MsgDeleteRoute;
                    };
                    editRouteName(value: any): {
                        typeUrl: string;
                        value: _13.MsgEditRouteName;
                    };
                };
                fromPartial: {
                    createRoute(value: _13.MsgCreateRoute): {
                        typeUrl: string;
                        value: _13.MsgCreateRoute;
                    };
                    editRoute(value: _13.MsgEditRoute): {
                        typeUrl: string;
                        value: _13.MsgEditRoute;
                    };
                    deleteRoute(value: _13.MsgDeleteRoute): {
                        typeUrl: string;
                        value: _13.MsgDeleteRoute;
                    };
                    editRouteName(value: _13.MsgEditRouteName): {
                        typeUrl: string;
                        value: _13.MsgEditRouteName;
                    };
                };
            };
            AminoConverter: {
                "/cyber.grid.v1beta1.MsgCreateRoute": {
                    aminoType: string;
                    toAmino: (message: _13.MsgCreateRoute) => _13.MsgCreateRouteAmino;
                    fromAmino: (object: _13.MsgCreateRouteAmino) => _13.MsgCreateRoute;
                };
                "/cyber.grid.v1beta1.MsgEditRoute": {
                    aminoType: string;
                    toAmino: (message: _13.MsgEditRoute) => _13.MsgEditRouteAmino;
                    fromAmino: (object: _13.MsgEditRouteAmino) => _13.MsgEditRoute;
                };
                "/cyber.grid.v1beta1.MsgDeleteRoute": {
                    aminoType: string;
                    toAmino: (message: _13.MsgDeleteRoute) => _13.MsgDeleteRouteAmino;
                    fromAmino: (object: _13.MsgDeleteRouteAmino) => _13.MsgDeleteRoute;
                };
                "/cyber.grid.v1beta1.MsgEditRouteName": {
                    aminoType: string;
                    toAmino: (message: _13.MsgEditRouteName) => _13.MsgEditRouteNameAmino;
                    fromAmino: (object: _13.MsgEditRouteNameAmino) => _13.MsgEditRouteName;
                };
            };
            Params: {
                typeUrl: string;
                encode(message: _14.Params, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _14.Params;
                fromPartial(object: Partial<_14.Params>): _14.Params;
                fromAmino(object: _14.ParamsAmino): _14.Params;
                toAmino(message: _14.Params): _14.ParamsAmino;
                fromAminoMsg(object: _14.ParamsAminoMsg): _14.Params;
                fromProtoMsg(message: _14.ParamsProtoMsg): _14.Params;
                toProto(message: _14.Params): Uint8Array;
                toProtoMsg(message: _14.Params): _14.ParamsProtoMsg;
            };
            Route: {
                typeUrl: string;
                encode(message: _14.Route, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _14.Route;
                fromPartial(object: Partial<_14.Route>): _14.Route;
                fromAmino(object: _14.RouteAmino): _14.Route;
                toAmino(message: _14.Route): _14.RouteAmino;
                fromAminoMsg(object: _14.RouteAminoMsg): _14.Route;
                fromProtoMsg(message: _14.RouteProtoMsg): _14.Route;
                toProto(message: _14.Route): Uint8Array;
                toProtoMsg(message: _14.Route): _14.RouteProtoMsg;
            };
            Value: {
                typeUrl: string;
                encode(message: _14.Value, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _14.Value;
                fromPartial(object: Partial<_14.Value>): _14.Value;
                fromAmino(object: _14.ValueAmino): _14.Value;
                toAmino(message: _14.Value): _14.ValueAmino;
                fromAminoMsg(object: _14.ValueAminoMsg): _14.Value;
                fromProtoMsg(message: _14.ValueProtoMsg): _14.Value;
                toProto(message: _14.Value): Uint8Array;
                toProtoMsg(message: _14.Value): _14.ValueProtoMsg;
            };
            MsgCreateRoute: {
                typeUrl: string;
                encode(message: _13.MsgCreateRoute, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _13.MsgCreateRoute;
                fromPartial(object: Partial<_13.MsgCreateRoute>): _13.MsgCreateRoute;
                fromAmino(object: _13.MsgCreateRouteAmino): _13.MsgCreateRoute;
                toAmino(message: _13.MsgCreateRoute): _13.MsgCreateRouteAmino;
                fromAminoMsg(object: _13.MsgCreateRouteAminoMsg): _13.MsgCreateRoute;
                fromProtoMsg(message: _13.MsgCreateRouteProtoMsg): _13.MsgCreateRoute;
                toProto(message: _13.MsgCreateRoute): Uint8Array;
                toProtoMsg(message: _13.MsgCreateRoute): _13.MsgCreateRouteProtoMsg;
            };
            MsgEditRoute: {
                typeUrl: string;
                encode(message: _13.MsgEditRoute, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _13.MsgEditRoute;
                fromPartial(object: Partial<_13.MsgEditRoute>): _13.MsgEditRoute;
                fromAmino(object: _13.MsgEditRouteAmino): _13.MsgEditRoute;
                toAmino(message: _13.MsgEditRoute): _13.MsgEditRouteAmino;
                fromAminoMsg(object: _13.MsgEditRouteAminoMsg): _13.MsgEditRoute;
                fromProtoMsg(message: _13.MsgEditRouteProtoMsg): _13.MsgEditRoute;
                toProto(message: _13.MsgEditRoute): Uint8Array;
                toProtoMsg(message: _13.MsgEditRoute): _13.MsgEditRouteProtoMsg;
            };
            MsgDeleteRoute: {
                typeUrl: string;
                encode(message: _13.MsgDeleteRoute, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _13.MsgDeleteRoute;
                fromPartial(object: Partial<_13.MsgDeleteRoute>): _13.MsgDeleteRoute;
                fromAmino(object: _13.MsgDeleteRouteAmino): _13.MsgDeleteRoute;
                toAmino(message: _13.MsgDeleteRoute): _13.MsgDeleteRouteAmino;
                fromAminoMsg(object: _13.MsgDeleteRouteAminoMsg): _13.MsgDeleteRoute;
                fromProtoMsg(message: _13.MsgDeleteRouteProtoMsg): _13.MsgDeleteRoute;
                toProto(message: _13.MsgDeleteRoute): Uint8Array;
                toProtoMsg(message: _13.MsgDeleteRoute): _13.MsgDeleteRouteProtoMsg;
            };
            MsgEditRouteName: {
                typeUrl: string;
                encode(message: _13.MsgEditRouteName, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _13.MsgEditRouteName;
                fromPartial(object: Partial<_13.MsgEditRouteName>): _13.MsgEditRouteName;
                fromAmino(object: _13.MsgEditRouteNameAmino): _13.MsgEditRouteName;
                toAmino(message: _13.MsgEditRouteName): _13.MsgEditRouteNameAmino;
                fromAminoMsg(object: _13.MsgEditRouteNameAminoMsg): _13.MsgEditRouteName;
                fromProtoMsg(message: _13.MsgEditRouteNameProtoMsg): _13.MsgEditRouteName;
                toProto(message: _13.MsgEditRouteName): Uint8Array;
                toProtoMsg(message: _13.MsgEditRouteName): _13.MsgEditRouteNameProtoMsg;
            };
            MsgCreateRouteResponse: {
                typeUrl: string;
                encode(_: _13.MsgCreateRouteResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _13.MsgCreateRouteResponse;
                fromPartial(_: Partial<_13.MsgCreateRouteResponse>): _13.MsgCreateRouteResponse;
                fromAmino(_: _13.MsgCreateRouteResponseAmino): _13.MsgCreateRouteResponse;
                toAmino(_: _13.MsgCreateRouteResponse): _13.MsgCreateRouteResponseAmino;
                fromAminoMsg(object: _13.MsgCreateRouteResponseAminoMsg): _13.MsgCreateRouteResponse;
                fromProtoMsg(message: _13.MsgCreateRouteResponseProtoMsg): _13.MsgCreateRouteResponse;
                toProto(message: _13.MsgCreateRouteResponse): Uint8Array;
                toProtoMsg(message: _13.MsgCreateRouteResponse): _13.MsgCreateRouteResponseProtoMsg;
            };
            MsgEditRouteResponse: {
                typeUrl: string;
                encode(_: _13.MsgEditRouteResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _13.MsgEditRouteResponse;
                fromPartial(_: Partial<_13.MsgEditRouteResponse>): _13.MsgEditRouteResponse;
                fromAmino(_: _13.MsgEditRouteResponseAmino): _13.MsgEditRouteResponse;
                toAmino(_: _13.MsgEditRouteResponse): _13.MsgEditRouteResponseAmino;
                fromAminoMsg(object: _13.MsgEditRouteResponseAminoMsg): _13.MsgEditRouteResponse;
                fromProtoMsg(message: _13.MsgEditRouteResponseProtoMsg): _13.MsgEditRouteResponse;
                toProto(message: _13.MsgEditRouteResponse): Uint8Array;
                toProtoMsg(message: _13.MsgEditRouteResponse): _13.MsgEditRouteResponseProtoMsg;
            };
            MsgDeleteRouteResponse: {
                typeUrl: string;
                encode(_: _13.MsgDeleteRouteResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _13.MsgDeleteRouteResponse;
                fromPartial(_: Partial<_13.MsgDeleteRouteResponse>): _13.MsgDeleteRouteResponse;
                fromAmino(_: _13.MsgDeleteRouteResponseAmino): _13.MsgDeleteRouteResponse;
                toAmino(_: _13.MsgDeleteRouteResponse): _13.MsgDeleteRouteResponseAmino;
                fromAminoMsg(object: _13.MsgDeleteRouteResponseAminoMsg): _13.MsgDeleteRouteResponse;
                fromProtoMsg(message: _13.MsgDeleteRouteResponseProtoMsg): _13.MsgDeleteRouteResponse;
                toProto(message: _13.MsgDeleteRouteResponse): Uint8Array;
                toProtoMsg(message: _13.MsgDeleteRouteResponse): _13.MsgDeleteRouteResponseProtoMsg;
            };
            MsgEditRouteNameResponse: {
                typeUrl: string;
                encode(_: _13.MsgEditRouteNameResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _13.MsgEditRouteNameResponse;
                fromPartial(_: Partial<_13.MsgEditRouteNameResponse>): _13.MsgEditRouteNameResponse;
                fromAmino(_: _13.MsgEditRouteNameResponseAmino): _13.MsgEditRouteNameResponse;
                toAmino(_: _13.MsgEditRouteNameResponse): _13.MsgEditRouteNameResponseAmino;
                fromAminoMsg(object: _13.MsgEditRouteNameResponseAminoMsg): _13.MsgEditRouteNameResponse;
                fromProtoMsg(message: _13.MsgEditRouteNameResponseProtoMsg): _13.MsgEditRouteNameResponse;
                toProto(message: _13.MsgEditRouteNameResponse): Uint8Array;
                toProtoMsg(message: _13.MsgEditRouteNameResponse): _13.MsgEditRouteNameResponseProtoMsg;
            };
            QueryParamsRequest: {
                typeUrl: string;
                encode(_: _12.QueryParamsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _12.QueryParamsRequest;
                fromPartial(_: Partial<_12.QueryParamsRequest>): _12.QueryParamsRequest;
                fromAmino(_: _12.QueryParamsRequestAmino): _12.QueryParamsRequest;
                toAmino(_: _12.QueryParamsRequest): _12.QueryParamsRequestAmino;
                fromAminoMsg(object: _12.QueryParamsRequestAminoMsg): _12.QueryParamsRequest;
                fromProtoMsg(message: _12.QueryParamsRequestProtoMsg): _12.QueryParamsRequest;
                toProto(message: _12.QueryParamsRequest): Uint8Array;
                toProtoMsg(message: _12.QueryParamsRequest): _12.QueryParamsRequestProtoMsg;
            };
            QueryParamsResponse: {
                typeUrl: string;
                encode(message: _12.QueryParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _12.QueryParamsResponse;
                fromPartial(object: Partial<_12.QueryParamsResponse>): _12.QueryParamsResponse;
                fromAmino(object: _12.QueryParamsResponseAmino): _12.QueryParamsResponse;
                toAmino(message: _12.QueryParamsResponse): _12.QueryParamsResponseAmino;
                fromAminoMsg(object: _12.QueryParamsResponseAminoMsg): _12.QueryParamsResponse;
                fromProtoMsg(message: _12.QueryParamsResponseProtoMsg): _12.QueryParamsResponse;
                toProto(message: _12.QueryParamsResponse): Uint8Array;
                toProtoMsg(message: _12.QueryParamsResponse): _12.QueryParamsResponseProtoMsg;
            };
            QuerySourceRequest: {
                typeUrl: string;
                encode(message: _12.QuerySourceRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _12.QuerySourceRequest;
                fromPartial(object: Partial<_12.QuerySourceRequest>): _12.QuerySourceRequest;
                fromAmino(object: _12.QuerySourceRequestAmino): _12.QuerySourceRequest;
                toAmino(message: _12.QuerySourceRequest): _12.QuerySourceRequestAmino;
                fromAminoMsg(object: _12.QuerySourceRequestAminoMsg): _12.QuerySourceRequest;
                fromProtoMsg(message: _12.QuerySourceRequestProtoMsg): _12.QuerySourceRequest;
                toProto(message: _12.QuerySourceRequest): Uint8Array;
                toProtoMsg(message: _12.QuerySourceRequest): _12.QuerySourceRequestProtoMsg;
            };
            QueryDestinationRequest: {
                typeUrl: string;
                encode(message: _12.QueryDestinationRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _12.QueryDestinationRequest;
                fromPartial(object: Partial<_12.QueryDestinationRequest>): _12.QueryDestinationRequest;
                fromAmino(object: _12.QueryDestinationRequestAmino): _12.QueryDestinationRequest;
                toAmino(message: _12.QueryDestinationRequest): _12.QueryDestinationRequestAmino;
                fromAminoMsg(object: _12.QueryDestinationRequestAminoMsg): _12.QueryDestinationRequest;
                fromProtoMsg(message: _12.QueryDestinationRequestProtoMsg): _12.QueryDestinationRequest;
                toProto(message: _12.QueryDestinationRequest): Uint8Array;
                toProtoMsg(message: _12.QueryDestinationRequest): _12.QueryDestinationRequestProtoMsg;
            };
            QueryRoutedEnergyResponse: {
                typeUrl: string;
                encode(message: _12.QueryRoutedEnergyResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _12.QueryRoutedEnergyResponse;
                fromPartial(object: Partial<_12.QueryRoutedEnergyResponse>): _12.QueryRoutedEnergyResponse;
                fromAmino(object: _12.QueryRoutedEnergyResponseAmino): _12.QueryRoutedEnergyResponse;
                toAmino(message: _12.QueryRoutedEnergyResponse): _12.QueryRoutedEnergyResponseAmino;
                fromAminoMsg(object: _12.QueryRoutedEnergyResponseAminoMsg): _12.QueryRoutedEnergyResponse;
                fromProtoMsg(message: _12.QueryRoutedEnergyResponseProtoMsg): _12.QueryRoutedEnergyResponse;
                toProto(message: _12.QueryRoutedEnergyResponse): Uint8Array;
                toProtoMsg(message: _12.QueryRoutedEnergyResponse): _12.QueryRoutedEnergyResponseProtoMsg;
            };
            QueryRouteRequest: {
                typeUrl: string;
                encode(message: _12.QueryRouteRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _12.QueryRouteRequest;
                fromPartial(object: Partial<_12.QueryRouteRequest>): _12.QueryRouteRequest;
                fromAmino(object: _12.QueryRouteRequestAmino): _12.QueryRouteRequest;
                toAmino(message: _12.QueryRouteRequest): _12.QueryRouteRequestAmino;
                fromAminoMsg(object: _12.QueryRouteRequestAminoMsg): _12.QueryRouteRequest;
                fromProtoMsg(message: _12.QueryRouteRequestProtoMsg): _12.QueryRouteRequest;
                toProto(message: _12.QueryRouteRequest): Uint8Array;
                toProtoMsg(message: _12.QueryRouteRequest): _12.QueryRouteRequestProtoMsg;
            };
            QueryRouteResponse: {
                typeUrl: string;
                encode(message: _12.QueryRouteResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _12.QueryRouteResponse;
                fromPartial(object: Partial<_12.QueryRouteResponse>): _12.QueryRouteResponse;
                fromAmino(object: _12.QueryRouteResponseAmino): _12.QueryRouteResponse;
                toAmino(message: _12.QueryRouteResponse): _12.QueryRouteResponseAmino;
                fromAminoMsg(object: _12.QueryRouteResponseAminoMsg): _12.QueryRouteResponse;
                fromProtoMsg(message: _12.QueryRouteResponseProtoMsg): _12.QueryRouteResponse;
                toProto(message: _12.QueryRouteResponse): Uint8Array;
                toProtoMsg(message: _12.QueryRouteResponse): _12.QueryRouteResponseProtoMsg;
            };
            QueryRoutesRequest: {
                typeUrl: string;
                encode(message: _12.QueryRoutesRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _12.QueryRoutesRequest;
                fromPartial(object: Partial<_12.QueryRoutesRequest>): _12.QueryRoutesRequest;
                fromAmino(object: _12.QueryRoutesRequestAmino): _12.QueryRoutesRequest;
                toAmino(message: _12.QueryRoutesRequest): _12.QueryRoutesRequestAmino;
                fromAminoMsg(object: _12.QueryRoutesRequestAminoMsg): _12.QueryRoutesRequest;
                fromProtoMsg(message: _12.QueryRoutesRequestProtoMsg): _12.QueryRoutesRequest;
                toProto(message: _12.QueryRoutesRequest): Uint8Array;
                toProtoMsg(message: _12.QueryRoutesRequest): _12.QueryRoutesRequestProtoMsg;
            };
            QueryRoutesResponse: {
                typeUrl: string;
                encode(message: _12.QueryRoutesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _12.QueryRoutesResponse;
                fromPartial(object: Partial<_12.QueryRoutesResponse>): _12.QueryRoutesResponse;
                fromAmino(object: _12.QueryRoutesResponseAmino): _12.QueryRoutesResponse;
                toAmino(message: _12.QueryRoutesResponse): _12.QueryRoutesResponseAmino;
                fromAminoMsg(object: _12.QueryRoutesResponseAminoMsg): _12.QueryRoutesResponse;
                fromProtoMsg(message: _12.QueryRoutesResponseProtoMsg): _12.QueryRoutesResponse;
                toProto(message: _12.QueryRoutesResponse): Uint8Array;
                toProtoMsg(message: _12.QueryRoutesResponse): _12.QueryRoutesResponseProtoMsg;
            };
            GenesisState: {
                typeUrl: string;
                encode(message: _11.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _11.GenesisState;
                fromPartial(object: Partial<_11.GenesisState>): _11.GenesisState;
                fromAmino(object: _11.GenesisStateAmino): _11.GenesisState;
                toAmino(message: _11.GenesisState): _11.GenesisStateAmino;
                fromAminoMsg(object: _11.GenesisStateAminoMsg): _11.GenesisState;
                fromProtoMsg(message: _11.GenesisStateProtoMsg): _11.GenesisState;
                toProto(message: _11.GenesisState): Uint8Array;
                toProtoMsg(message: _11.GenesisState): _11.GenesisStateProtoMsg;
            };
        };
    }
    namespace rank {
        const v1beta1: {
            QueryClientImpl: typeof _136.QueryClientImpl;
            createRpcQueryExtension: (base: QueryClient) => {
                params(request?: _16.QueryParamsRequest): Promise<_16.QueryParamsResponse>;
                rank(request: _16.QueryRankRequest): Promise<_16.QueryRankResponse>;
                search(request: _16.QuerySearchRequest): Promise<_16.QuerySearchResponse>;
                backlinks(request: _16.QuerySearchRequest): Promise<_16.QuerySearchResponse>;
                top(request: _3.PageRequest): Promise<_16.QuerySearchResponse>;
                isLinkExist(request: _16.QueryIsLinkExistRequest): Promise<_16.QueryLinkExistResponse>;
                isAnyLinkExist(request: _16.QueryIsAnyLinkExistRequest): Promise<_16.QueryLinkExistResponse>;
                particleNegentropy(request: _16.QueryNegentropyPartilceRequest): Promise<_16.QueryNegentropyParticleResponse>;
                negentropy(request?: _16.QueryNegentropyRequest): Promise<_16.QueryNegentropyResponse>;
                karma(request: _16.QueryKarmaRequest): Promise<_16.QueryKarmaResponse>;
            };
            LCDQueryClient: typeof _130.LCDQueryClient;
            Params: {
                typeUrl: string;
                encode(message: _17.Params, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _17.Params;
                fromPartial(object: Partial<_17.Params>): _17.Params;
                fromAmino(object: _17.ParamsAmino): _17.Params;
                toAmino(message: _17.Params): _17.ParamsAmino;
                fromAminoMsg(object: _17.ParamsAminoMsg): _17.Params;
                fromProtoMsg(message: _17.ParamsProtoMsg): _17.Params;
                toProto(message: _17.Params): Uint8Array;
                toProtoMsg(message: _17.Params): _17.ParamsProtoMsg;
            };
            RankedParticle: {
                typeUrl: string;
                encode(message: _17.RankedParticle, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _17.RankedParticle;
                fromPartial(object: Partial<_17.RankedParticle>): _17.RankedParticle;
                fromAmino(object: _17.RankedParticleAmino): _17.RankedParticle;
                toAmino(message: _17.RankedParticle): _17.RankedParticleAmino;
                fromAminoMsg(object: _17.RankedParticleAminoMsg): _17.RankedParticle;
                fromProtoMsg(message: _17.RankedParticleProtoMsg): _17.RankedParticle;
                toProto(message: _17.RankedParticle): Uint8Array;
                toProtoMsg(message: _17.RankedParticle): _17.RankedParticleProtoMsg;
            };
            QueryParamsRequest: {
                typeUrl: string;
                encode(_: _16.QueryParamsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _16.QueryParamsRequest;
                fromPartial(_: Partial<_16.QueryParamsRequest>): _16.QueryParamsRequest;
                fromAmino(_: _16.QueryParamsRequestAmino): _16.QueryParamsRequest;
                toAmino(_: _16.QueryParamsRequest): _16.QueryParamsRequestAmino;
                fromAminoMsg(object: _16.QueryParamsRequestAminoMsg): _16.QueryParamsRequest;
                fromProtoMsg(message: _16.QueryParamsRequestProtoMsg): _16.QueryParamsRequest;
                toProto(message: _16.QueryParamsRequest): Uint8Array;
                toProtoMsg(message: _16.QueryParamsRequest): _16.QueryParamsRequestProtoMsg;
            };
            QueryParamsResponse: {
                typeUrl: string;
                encode(message: _16.QueryParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _16.QueryParamsResponse;
                fromPartial(object: Partial<_16.QueryParamsResponse>): _16.QueryParamsResponse;
                fromAmino(object: _16.QueryParamsResponseAmino): _16.QueryParamsResponse;
                toAmino(message: _16.QueryParamsResponse): _16.QueryParamsResponseAmino;
                fromAminoMsg(object: _16.QueryParamsResponseAminoMsg): _16.QueryParamsResponse;
                fromProtoMsg(message: _16.QueryParamsResponseProtoMsg): _16.QueryParamsResponse;
                toProto(message: _16.QueryParamsResponse): Uint8Array;
                toProtoMsg(message: _16.QueryParamsResponse): _16.QueryParamsResponseProtoMsg;
            };
            QueryRankRequest: {
                typeUrl: string;
                encode(message: _16.QueryRankRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _16.QueryRankRequest;
                fromPartial(object: Partial<_16.QueryRankRequest>): _16.QueryRankRequest;
                fromAmino(object: _16.QueryRankRequestAmino): _16.QueryRankRequest;
                toAmino(message: _16.QueryRankRequest): _16.QueryRankRequestAmino;
                fromAminoMsg(object: _16.QueryRankRequestAminoMsg): _16.QueryRankRequest;
                fromProtoMsg(message: _16.QueryRankRequestProtoMsg): _16.QueryRankRequest;
                toProto(message: _16.QueryRankRequest): Uint8Array;
                toProtoMsg(message: _16.QueryRankRequest): _16.QueryRankRequestProtoMsg;
            };
            QueryRankResponse: {
                typeUrl: string;
                encode(message: _16.QueryRankResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _16.QueryRankResponse;
                fromPartial(object: Partial<_16.QueryRankResponse>): _16.QueryRankResponse;
                fromAmino(object: _16.QueryRankResponseAmino): _16.QueryRankResponse;
                toAmino(message: _16.QueryRankResponse): _16.QueryRankResponseAmino;
                fromAminoMsg(object: _16.QueryRankResponseAminoMsg): _16.QueryRankResponse;
                fromProtoMsg(message: _16.QueryRankResponseProtoMsg): _16.QueryRankResponse;
                toProto(message: _16.QueryRankResponse): Uint8Array;
                toProtoMsg(message: _16.QueryRankResponse): _16.QueryRankResponseProtoMsg;
            };
            QuerySearchRequest: {
                typeUrl: string;
                encode(message: _16.QuerySearchRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _16.QuerySearchRequest;
                fromPartial(object: Partial<_16.QuerySearchRequest>): _16.QuerySearchRequest;
                fromAmino(object: _16.QuerySearchRequestAmino): _16.QuerySearchRequest;
                toAmino(message: _16.QuerySearchRequest): _16.QuerySearchRequestAmino;
                fromAminoMsg(object: _16.QuerySearchRequestAminoMsg): _16.QuerySearchRequest;
                fromProtoMsg(message: _16.QuerySearchRequestProtoMsg): _16.QuerySearchRequest;
                toProto(message: _16.QuerySearchRequest): Uint8Array;
                toProtoMsg(message: _16.QuerySearchRequest): _16.QuerySearchRequestProtoMsg;
            };
            QuerySearchResponse: {
                typeUrl: string;
                encode(message: _16.QuerySearchResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _16.QuerySearchResponse;
                fromPartial(object: Partial<_16.QuerySearchResponse>): _16.QuerySearchResponse;
                fromAmino(object: _16.QuerySearchResponseAmino): _16.QuerySearchResponse;
                toAmino(message: _16.QuerySearchResponse): _16.QuerySearchResponseAmino;
                fromAminoMsg(object: _16.QuerySearchResponseAminoMsg): _16.QuerySearchResponse;
                fromProtoMsg(message: _16.QuerySearchResponseProtoMsg): _16.QuerySearchResponse;
                toProto(message: _16.QuerySearchResponse): Uint8Array;
                toProtoMsg(message: _16.QuerySearchResponse): _16.QuerySearchResponseProtoMsg;
            };
            QueryTopRequest: {
                typeUrl: string;
                encode(_: _16.QueryTopRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _16.QueryTopRequest;
                fromPartial(_: Partial<_16.QueryTopRequest>): _16.QueryTopRequest;
                fromAmino(_: _16.QueryTopRequestAmino): _16.QueryTopRequest;
                toAmino(_: _16.QueryTopRequest): _16.QueryTopRequestAmino;
                fromAminoMsg(object: _16.QueryTopRequestAminoMsg): _16.QueryTopRequest;
                fromProtoMsg(message: _16.QueryTopRequestProtoMsg): _16.QueryTopRequest;
                toProto(message: _16.QueryTopRequest): Uint8Array;
                toProtoMsg(message: _16.QueryTopRequest): _16.QueryTopRequestProtoMsg;
            };
            QueryIsLinkExistRequest: {
                typeUrl: string;
                encode(message: _16.QueryIsLinkExistRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _16.QueryIsLinkExistRequest;
                fromPartial(object: Partial<_16.QueryIsLinkExistRequest>): _16.QueryIsLinkExistRequest;
                fromAmino(object: _16.QueryIsLinkExistRequestAmino): _16.QueryIsLinkExistRequest;
                toAmino(message: _16.QueryIsLinkExistRequest): _16.QueryIsLinkExistRequestAmino;
                fromAminoMsg(object: _16.QueryIsLinkExistRequestAminoMsg): _16.QueryIsLinkExistRequest;
                fromProtoMsg(message: _16.QueryIsLinkExistRequestProtoMsg): _16.QueryIsLinkExistRequest;
                toProto(message: _16.QueryIsLinkExistRequest): Uint8Array;
                toProtoMsg(message: _16.QueryIsLinkExistRequest): _16.QueryIsLinkExistRequestProtoMsg;
            };
            QueryIsAnyLinkExistRequest: {
                typeUrl: string;
                encode(message: _16.QueryIsAnyLinkExistRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _16.QueryIsAnyLinkExistRequest;
                fromPartial(object: Partial<_16.QueryIsAnyLinkExistRequest>): _16.QueryIsAnyLinkExistRequest;
                fromAmino(object: _16.QueryIsAnyLinkExistRequestAmino): _16.QueryIsAnyLinkExistRequest;
                toAmino(message: _16.QueryIsAnyLinkExistRequest): _16.QueryIsAnyLinkExistRequestAmino;
                fromAminoMsg(object: _16.QueryIsAnyLinkExistRequestAminoMsg): _16.QueryIsAnyLinkExistRequest;
                fromProtoMsg(message: _16.QueryIsAnyLinkExistRequestProtoMsg): _16.QueryIsAnyLinkExistRequest;
                toProto(message: _16.QueryIsAnyLinkExistRequest): Uint8Array;
                toProtoMsg(message: _16.QueryIsAnyLinkExistRequest): _16.QueryIsAnyLinkExistRequestProtoMsg;
            };
            QueryLinkExistResponse: {
                typeUrl: string;
                encode(message: _16.QueryLinkExistResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _16.QueryLinkExistResponse;
                fromPartial(object: Partial<_16.QueryLinkExistResponse>): _16.QueryLinkExistResponse;
                fromAmino(object: _16.QueryLinkExistResponseAmino): _16.QueryLinkExistResponse;
                toAmino(message: _16.QueryLinkExistResponse): _16.QueryLinkExistResponseAmino;
                fromAminoMsg(object: _16.QueryLinkExistResponseAminoMsg): _16.QueryLinkExistResponse;
                fromProtoMsg(message: _16.QueryLinkExistResponseProtoMsg): _16.QueryLinkExistResponse;
                toProto(message: _16.QueryLinkExistResponse): Uint8Array;
                toProtoMsg(message: _16.QueryLinkExistResponse): _16.QueryLinkExistResponseProtoMsg;
            };
            QueryNegentropyPartilceRequest: {
                typeUrl: string;
                encode(message: _16.QueryNegentropyPartilceRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _16.QueryNegentropyPartilceRequest;
                fromPartial(object: Partial<_16.QueryNegentropyPartilceRequest>): _16.QueryNegentropyPartilceRequest;
                fromAmino(object: _16.QueryNegentropyPartilceRequestAmino): _16.QueryNegentropyPartilceRequest;
                toAmino(message: _16.QueryNegentropyPartilceRequest): _16.QueryNegentropyPartilceRequestAmino;
                fromAminoMsg(object: _16.QueryNegentropyPartilceRequestAminoMsg): _16.QueryNegentropyPartilceRequest;
                fromProtoMsg(message: _16.QueryNegentropyPartilceRequestProtoMsg): _16.QueryNegentropyPartilceRequest;
                toProto(message: _16.QueryNegentropyPartilceRequest): Uint8Array;
                toProtoMsg(message: _16.QueryNegentropyPartilceRequest): _16.QueryNegentropyPartilceRequestProtoMsg;
            };
            QueryNegentropyParticleResponse: {
                typeUrl: string;
                encode(message: _16.QueryNegentropyParticleResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _16.QueryNegentropyParticleResponse;
                fromPartial(object: Partial<_16.QueryNegentropyParticleResponse>): _16.QueryNegentropyParticleResponse;
                fromAmino(object: _16.QueryNegentropyParticleResponseAmino): _16.QueryNegentropyParticleResponse;
                toAmino(message: _16.QueryNegentropyParticleResponse): _16.QueryNegentropyParticleResponseAmino;
                fromAminoMsg(object: _16.QueryNegentropyParticleResponseAminoMsg): _16.QueryNegentropyParticleResponse;
                fromProtoMsg(message: _16.QueryNegentropyParticleResponseProtoMsg): _16.QueryNegentropyParticleResponse;
                toProto(message: _16.QueryNegentropyParticleResponse): Uint8Array;
                toProtoMsg(message: _16.QueryNegentropyParticleResponse): _16.QueryNegentropyParticleResponseProtoMsg;
            };
            QueryNegentropyRequest: {
                typeUrl: string;
                encode(_: _16.QueryNegentropyRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _16.QueryNegentropyRequest;
                fromPartial(_: Partial<_16.QueryNegentropyRequest>): _16.QueryNegentropyRequest;
                fromAmino(_: _16.QueryNegentropyRequestAmino): _16.QueryNegentropyRequest;
                toAmino(_: _16.QueryNegentropyRequest): _16.QueryNegentropyRequestAmino;
                fromAminoMsg(object: _16.QueryNegentropyRequestAminoMsg): _16.QueryNegentropyRequest;
                fromProtoMsg(message: _16.QueryNegentropyRequestProtoMsg): _16.QueryNegentropyRequest;
                toProto(message: _16.QueryNegentropyRequest): Uint8Array;
                toProtoMsg(message: _16.QueryNegentropyRequest): _16.QueryNegentropyRequestProtoMsg;
            };
            QueryNegentropyResponse: {
                typeUrl: string;
                encode(message: _16.QueryNegentropyResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _16.QueryNegentropyResponse;
                fromPartial(object: Partial<_16.QueryNegentropyResponse>): _16.QueryNegentropyResponse;
                fromAmino(object: _16.QueryNegentropyResponseAmino): _16.QueryNegentropyResponse;
                toAmino(message: _16.QueryNegentropyResponse): _16.QueryNegentropyResponseAmino;
                fromAminoMsg(object: _16.QueryNegentropyResponseAminoMsg): _16.QueryNegentropyResponse;
                fromProtoMsg(message: _16.QueryNegentropyResponseProtoMsg): _16.QueryNegentropyResponse;
                toProto(message: _16.QueryNegentropyResponse): Uint8Array;
                toProtoMsg(message: _16.QueryNegentropyResponse): _16.QueryNegentropyResponseProtoMsg;
            };
            QueryKarmaRequest: {
                typeUrl: string;
                encode(message: _16.QueryKarmaRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _16.QueryKarmaRequest;
                fromPartial(object: Partial<_16.QueryKarmaRequest>): _16.QueryKarmaRequest;
                fromAmino(object: _16.QueryKarmaRequestAmino): _16.QueryKarmaRequest;
                toAmino(message: _16.QueryKarmaRequest): _16.QueryKarmaRequestAmino;
                fromAminoMsg(object: _16.QueryKarmaRequestAminoMsg): _16.QueryKarmaRequest;
                fromProtoMsg(message: _16.QueryKarmaRequestProtoMsg): _16.QueryKarmaRequest;
                toProto(message: _16.QueryKarmaRequest): Uint8Array;
                toProtoMsg(message: _16.QueryKarmaRequest): _16.QueryKarmaRequestProtoMsg;
            };
            QueryKarmaResponse: {
                typeUrl: string;
                encode(message: _16.QueryKarmaResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _16.QueryKarmaResponse;
                fromPartial(object: Partial<_16.QueryKarmaResponse>): _16.QueryKarmaResponse;
                fromAmino(object: _16.QueryKarmaResponseAmino): _16.QueryKarmaResponse;
                toAmino(message: _16.QueryKarmaResponse): _16.QueryKarmaResponseAmino;
                fromAminoMsg(object: _16.QueryKarmaResponseAminoMsg): _16.QueryKarmaResponse;
                fromProtoMsg(message: _16.QueryKarmaResponseProtoMsg): _16.QueryKarmaResponse;
                toProto(message: _16.QueryKarmaResponse): Uint8Array;
                toProtoMsg(message: _16.QueryKarmaResponse): _16.QueryKarmaResponseProtoMsg;
            };
            GenesisState: {
                typeUrl: string;
                encode(message: _15.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _15.GenesisState;
                fromPartial(object: Partial<_15.GenesisState>): _15.GenesisState;
                fromAmino(object: _15.GenesisStateAmino): _15.GenesisState;
                toAmino(message: _15.GenesisState): _15.GenesisStateAmino;
                fromAminoMsg(object: _15.GenesisStateAminoMsg): _15.GenesisState;
                fromProtoMsg(message: _15.GenesisStateProtoMsg): _15.GenesisState;
                toProto(message: _15.GenesisState): Uint8Array;
                toProtoMsg(message: _15.GenesisState): _15.GenesisStateProtoMsg;
            };
        };
    }
    namespace resources {
        const v1beta1: {
            MsgClientImpl: typeof _141.MsgClientImpl;
            QueryClientImpl: typeof _137.QueryClientImpl;
            createRpcQueryExtension: (base: QueryClient) => {
                params(request?: _19.QueryParamsRequest): Promise<_19.QueryParamsResponse>;
                investmint(request: _19.QueryInvestmintRequest): Promise<_19.QueryInvestmintResponse>;
            };
            LCDQueryClient: typeof _131.LCDQueryClient;
            registry: readonly [string, GeneratedType][];
            load: (protoRegistry: Registry) => void;
            MessageComposer: {
                encoded: {
                    investmint(value: _20.MsgInvestmint): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    investmint(value: _20.MsgInvestmint): {
                        typeUrl: string;
                        value: _20.MsgInvestmint;
                    };
                };
                fromJSON: {
                    investmint(value: any): {
                        typeUrl: string;
                        value: _20.MsgInvestmint;
                    };
                };
                fromPartial: {
                    investmint(value: _20.MsgInvestmint): {
                        typeUrl: string;
                        value: _20.MsgInvestmint;
                    };
                };
            };
            AminoConverter: {
                "/cyber.resources.v1beta1.MsgInvestmint": {
                    aminoType: string;
                    toAmino: (message: _20.MsgInvestmint) => _20.MsgInvestmintAmino;
                    fromAmino: (object: _20.MsgInvestmintAmino) => _20.MsgInvestmint;
                };
            };
            Params: {
                typeUrl: string;
                encode(message: _21.Params, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _21.Params;
                fromPartial(object: Partial<_21.Params>): _21.Params;
                fromAmino(object: _21.ParamsAmino): _21.Params;
                toAmino(message: _21.Params): _21.ParamsAmino;
                fromAminoMsg(object: _21.ParamsAminoMsg): _21.Params;
                fromProtoMsg(message: _21.ParamsProtoMsg): _21.Params;
                toProto(message: _21.Params): Uint8Array;
                toProtoMsg(message: _21.Params): _21.ParamsProtoMsg;
            };
            MsgInvestmint: {
                typeUrl: string;
                encode(message: _20.MsgInvestmint, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _20.MsgInvestmint;
                fromPartial(object: Partial<_20.MsgInvestmint>): _20.MsgInvestmint;
                fromAmino(object: _20.MsgInvestmintAmino): _20.MsgInvestmint;
                toAmino(message: _20.MsgInvestmint): _20.MsgInvestmintAmino;
                fromAminoMsg(object: _20.MsgInvestmintAminoMsg): _20.MsgInvestmint;
                fromProtoMsg(message: _20.MsgInvestmintProtoMsg): _20.MsgInvestmint;
                toProto(message: _20.MsgInvestmint): Uint8Array;
                toProtoMsg(message: _20.MsgInvestmint): _20.MsgInvestmintProtoMsg;
            };
            MsgInvestmintResponse: {
                typeUrl: string;
                encode(_: _20.MsgInvestmintResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _20.MsgInvestmintResponse;
                fromPartial(_: Partial<_20.MsgInvestmintResponse>): _20.MsgInvestmintResponse;
                fromAmino(_: _20.MsgInvestmintResponseAmino): _20.MsgInvestmintResponse;
                toAmino(_: _20.MsgInvestmintResponse): _20.MsgInvestmintResponseAmino;
                fromAminoMsg(object: _20.MsgInvestmintResponseAminoMsg): _20.MsgInvestmintResponse;
                fromProtoMsg(message: _20.MsgInvestmintResponseProtoMsg): _20.MsgInvestmintResponse;
                toProto(message: _20.MsgInvestmintResponse): Uint8Array;
                toProtoMsg(message: _20.MsgInvestmintResponse): _20.MsgInvestmintResponseProtoMsg;
            };
            QueryParamsRequest: {
                typeUrl: string;
                encode(_: _19.QueryParamsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _19.QueryParamsRequest;
                fromPartial(_: Partial<_19.QueryParamsRequest>): _19.QueryParamsRequest;
                fromAmino(_: _19.QueryParamsRequestAmino): _19.QueryParamsRequest;
                toAmino(_: _19.QueryParamsRequest): _19.QueryParamsRequestAmino;
                fromAminoMsg(object: _19.QueryParamsRequestAminoMsg): _19.QueryParamsRequest;
                fromProtoMsg(message: _19.QueryParamsRequestProtoMsg): _19.QueryParamsRequest;
                toProto(message: _19.QueryParamsRequest): Uint8Array;
                toProtoMsg(message: _19.QueryParamsRequest): _19.QueryParamsRequestProtoMsg;
            };
            QueryParamsResponse: {
                typeUrl: string;
                encode(message: _19.QueryParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _19.QueryParamsResponse;
                fromPartial(object: Partial<_19.QueryParamsResponse>): _19.QueryParamsResponse;
                fromAmino(object: _19.QueryParamsResponseAmino): _19.QueryParamsResponse;
                toAmino(message: _19.QueryParamsResponse): _19.QueryParamsResponseAmino;
                fromAminoMsg(object: _19.QueryParamsResponseAminoMsg): _19.QueryParamsResponse;
                fromProtoMsg(message: _19.QueryParamsResponseProtoMsg): _19.QueryParamsResponse;
                toProto(message: _19.QueryParamsResponse): Uint8Array;
                toProtoMsg(message: _19.QueryParamsResponse): _19.QueryParamsResponseProtoMsg;
            };
            QueryInvestmintRequest: {
                typeUrl: string;
                encode(message: _19.QueryInvestmintRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _19.QueryInvestmintRequest;
                fromPartial(object: Partial<_19.QueryInvestmintRequest>): _19.QueryInvestmintRequest;
                fromAmino(object: _19.QueryInvestmintRequestAmino): _19.QueryInvestmintRequest;
                toAmino(message: _19.QueryInvestmintRequest): _19.QueryInvestmintRequestAmino;
                fromAminoMsg(object: _19.QueryInvestmintRequestAminoMsg): _19.QueryInvestmintRequest;
                fromProtoMsg(message: _19.QueryInvestmintRequestProtoMsg): _19.QueryInvestmintRequest;
                toProto(message: _19.QueryInvestmintRequest): Uint8Array;
                toProtoMsg(message: _19.QueryInvestmintRequest): _19.QueryInvestmintRequestProtoMsg;
            };
            QueryInvestmintResponse: {
                typeUrl: string;
                encode(message: _19.QueryInvestmintResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _19.QueryInvestmintResponse;
                fromPartial(object: Partial<_19.QueryInvestmintResponse>): _19.QueryInvestmintResponse;
                fromAmino(object: _19.QueryInvestmintResponseAmino): _19.QueryInvestmintResponse;
                toAmino(message: _19.QueryInvestmintResponse): _19.QueryInvestmintResponseAmino;
                fromAminoMsg(object: _19.QueryInvestmintResponseAminoMsg): _19.QueryInvestmintResponse;
                fromProtoMsg(message: _19.QueryInvestmintResponseProtoMsg): _19.QueryInvestmintResponse;
                toProto(message: _19.QueryInvestmintResponse): Uint8Array;
                toProtoMsg(message: _19.QueryInvestmintResponse): _19.QueryInvestmintResponseProtoMsg;
            };
            GenesisState: {
                typeUrl: string;
                encode(message: _18.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _18.GenesisState;
                fromPartial(object: Partial<_18.GenesisState>): _18.GenesisState;
                fromAmino(object: _18.GenesisStateAmino): _18.GenesisState;
                toAmino(message: _18.GenesisState): _18.GenesisStateAmino;
                fromAminoMsg(object: _18.GenesisStateAminoMsg): _18.GenesisState;
                fromProtoMsg(message: _18.GenesisStateProtoMsg): _18.GenesisState;
                toProto(message: _18.GenesisState): Uint8Array;
                toProtoMsg(message: _18.GenesisState): _18.GenesisStateProtoMsg;
            };
        };
    }
    const ClientFactory: {
        createRPCMsgClient: ({ rpc }: {
            rpc: import("../helpers").Rpc;
        }) => Promise<{
            cyber: {
                dmn: {
                    v1beta1: _138.MsgClientImpl;
                };
                graph: {
                    v1beta1: _139.MsgClientImpl;
                };
                grid: {
                    v1beta1: _140.MsgClientImpl;
                };
                resources: {
                    v1beta1: _141.MsgClientImpl;
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
            rpcEndpoint: any;
        }) => Promise<{
            cyber: {
                bandwidth: {
                    v1beta1: {
                        load(request?: _1.QueryLoadRequest): Promise<_1.QueryLoadResponse>;
                        price(request?: _1.QueryPriceRequest): Promise<_1.QueryPriceResponse>;
                        totalBandwidth(request?: _1.QueryTotalBandwidthRequest): Promise<_1.QueryTotalBandwidthResponse>;
                        neuronBandwidth(request: _1.QueryNeuronBandwidthRequest): Promise<_1.QueryNeuronBandwidthResponse>;
                        params(request?: _1.QueryParamsRequest): Promise<_1.QueryParamsResponse>;
                    };
                };
                dmn: {
                    v1beta1: {
                        params(request?: _5.QueryParamsRequest): Promise<_5.QueryParamsResponse>;
                        thought(request: _5.QueryThoughtParamsRequest): Promise<_5.QueryThoughtResponse>;
                        thoughtStats(request: _5.QueryThoughtParamsRequest): Promise<_5.QueryThoughtStatsResponse>;
                        thoughts(request?: _5.QueryThoughtsRequest): Promise<_5.QueryThoughtsResponse>;
                        thoughtsStats(request?: _5.QueryThoughtsStatsRequest): Promise<_5.QueryThoughtsStatsResponse>;
                    };
                };
                graph: {
                    v1beta1: {
                        graphStats(request?: _8.QueryGraphStatsRequest): Promise<_8.QueryGraphStatsResponse>;
                    };
                };
                grid: {
                    v1beta1: {
                        params(request?: _12.QueryParamsRequest): Promise<_12.QueryParamsResponse>;
                        sourceRoutes(request: _12.QuerySourceRequest): Promise<_12.QueryRoutesResponse>;
                        destinationRoutes(request: _12.QueryDestinationRequest): Promise<_12.QueryRoutesResponse>;
                        destinationRoutedEnergy(request: _12.QueryDestinationRequest): Promise<_12.QueryRoutedEnergyResponse>;
                        sourceRoutedEnergy(request: _12.QuerySourceRequest): Promise<_12.QueryRoutedEnergyResponse>;
                        route(request: _12.QueryRouteRequest): Promise<_12.QueryRouteResponse>;
                        routes(request?: _12.QueryRoutesRequest): Promise<_12.QueryRoutesResponse>;
                    };
                };
                rank: {
                    v1beta1: {
                        params(request?: _16.QueryParamsRequest): Promise<_16.QueryParamsResponse>;
                        rank(request: _16.QueryRankRequest): Promise<_16.QueryRankResponse>;
                        search(request: _16.QuerySearchRequest): Promise<_16.QuerySearchResponse>;
                        backlinks(request: _16.QuerySearchRequest): Promise<_16.QuerySearchResponse>;
                        top(request: _3.PageRequest): Promise<_16.QuerySearchResponse>;
                        isLinkExist(request: _16.QueryIsLinkExistRequest): Promise<_16.QueryLinkExistResponse>;
                        isAnyLinkExist(request: _16.QueryIsAnyLinkExistRequest): Promise<_16.QueryLinkExistResponse>;
                        particleNegentropy(request: _16.QueryNegentropyPartilceRequest): Promise<_16.QueryNegentropyParticleResponse>;
                        negentropy(request?: _16.QueryNegentropyRequest): Promise<_16.QueryNegentropyResponse>;
                        karma(request: _16.QueryKarmaRequest): Promise<_16.QueryKarmaResponse>;
                    };
                };
                resources: {
                    v1beta1: {
                        params(request?: _19.QueryParamsRequest): Promise<_19.QueryParamsResponse>;
                        investmint(request: _19.QueryInvestmintRequest): Promise<_19.QueryInvestmintResponse>;
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
            cyber: {
                bandwidth: {
                    v1beta1: _126.LCDQueryClient;
                };
                dmn: {
                    v1beta1: _127.LCDQueryClient;
                };
                graph: {
                    v1beta1: _128.LCDQueryClient;
                };
                grid: {
                    v1beta1: _129.LCDQueryClient;
                };
                rank: {
                    v1beta1: _130.LCDQueryClient;
                };
                resources: {
                    v1beta1: _131.LCDQueryClient;
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
