import * as _0 from "./dyncomm/v1beta1/dyncomm";
import * as _1 from "./dyncomm/v1beta1/genesis";
import * as _2 from "./dyncomm/v1beta1/query";
import * as _3 from "./market/v1beta1/genesis";
import * as _4 from "./market/v1beta1/market";
import * as _5 from "./market/v1beta1/query";
import * as _6 from "./market/v1beta1/tx";
import * as _7 from "./oracle/v1beta1/genesis";
import * as _8 from "./oracle/v1beta1/oracle";
import * as _9 from "./oracle/v1beta1/query";
import * as _10 from "./oracle/v1beta1/tx";
import * as _11 from "./treasury/v1beta1/genesis";
import * as _12 from "./treasury/v1beta1/gov";
import * as _13 from "./treasury/v1beta1/query";
import * as _14 from "./treasury/v1beta1/treasury";
import * as _15 from "./tx/v1beta1/service";
import * as _16 from "./vesting/v1beta1/vesting";
import * as _17 from "./wasm/v1beta1/genesis";
import * as _18 from "./wasm/v1beta1/tx";
import * as _19 from "./wasm/v1beta1/wasm";
import * as _148 from "./dyncomm/v1beta1/query.lcd";
import * as _149 from "./market/v1beta1/query.lcd";
import * as _150 from "./oracle/v1beta1/query.lcd";
import * as _151 from "./treasury/v1beta1/query.lcd";
import * as _152 from "./dyncomm/v1beta1/query.rpc.Query";
import * as _153 from "./market/v1beta1/query.rpc.Query";
import * as _154 from "./oracle/v1beta1/query.rpc.Query";
import * as _155 from "./treasury/v1beta1/query.rpc.Query";
import * as _156 from "./tx/v1beta1/service.rpc.Service";
import * as _157 from "./market/v1beta1/tx.rpc.msg";
import * as _158 from "./oracle/v1beta1/tx.rpc.msg";
import * as _159 from "./wasm/v1beta1/tx.rpc.msg";
export declare namespace terra {
    namespace dyncomm {
        const v1beta1: {
            QueryClientImpl: typeof _152.QueryClientImpl;
            createRpcQueryExtension: (base: QueryClient) => {
                params(request?: _2.QueryParamsRequest): Promise<_2.QueryParamsResponse>;
                rate(request: _2.QueryRateRequest): Promise<_2.QueryRateResponse>;
            };
            LCDQueryClient: typeof _148.LCDQueryClient;
            QueryParamsRequest: {
                typeUrl: string;
                encode(_: _2.QueryParamsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _2.QueryParamsRequest;
                fromPartial(_: Partial<_2.QueryParamsRequest>): _2.QueryParamsRequest;
                fromAmino(_: _2.QueryParamsRequestAmino): _2.QueryParamsRequest;
                toAmino(_: _2.QueryParamsRequest): _2.QueryParamsRequestAmino;
                fromAminoMsg(object: _2.QueryParamsRequestAminoMsg): _2.QueryParamsRequest;
                fromProtoMsg(message: _2.QueryParamsRequestProtoMsg): _2.QueryParamsRequest;
                toProto(message: _2.QueryParamsRequest): Uint8Array;
                toProtoMsg(message: _2.QueryParamsRequest): _2.QueryParamsRequestProtoMsg;
            };
            QueryParamsResponse: {
                typeUrl: string;
                encode(message: _2.QueryParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _2.QueryParamsResponse;
                fromPartial(object: Partial<_2.QueryParamsResponse>): _2.QueryParamsResponse;
                fromAmino(object: _2.QueryParamsResponseAmino): _2.QueryParamsResponse;
                toAmino(message: _2.QueryParamsResponse): _2.QueryParamsResponseAmino;
                fromAminoMsg(object: _2.QueryParamsResponseAminoMsg): _2.QueryParamsResponse;
                fromProtoMsg(message: _2.QueryParamsResponseProtoMsg): _2.QueryParamsResponse;
                toProto(message: _2.QueryParamsResponse): Uint8Array;
                toProtoMsg(message: _2.QueryParamsResponse): _2.QueryParamsResponseProtoMsg;
            };
            QueryRateRequest: {
                typeUrl: string;
                encode(message: _2.QueryRateRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _2.QueryRateRequest;
                fromPartial(object: Partial<_2.QueryRateRequest>): _2.QueryRateRequest;
                fromAmino(object: _2.QueryRateRequestAmino): _2.QueryRateRequest;
                toAmino(message: _2.QueryRateRequest): _2.QueryRateRequestAmino;
                fromAminoMsg(object: _2.QueryRateRequestAminoMsg): _2.QueryRateRequest;
                fromProtoMsg(message: _2.QueryRateRequestProtoMsg): _2.QueryRateRequest;
                toProto(message: _2.QueryRateRequest): Uint8Array;
                toProtoMsg(message: _2.QueryRateRequest): _2.QueryRateRequestProtoMsg;
            };
            QueryRateResponse: {
                typeUrl: string;
                encode(message: _2.QueryRateResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _2.QueryRateResponse;
                fromPartial(object: Partial<_2.QueryRateResponse>): _2.QueryRateResponse;
                fromAmino(object: _2.QueryRateResponseAmino): _2.QueryRateResponse;
                toAmino(message: _2.QueryRateResponse): _2.QueryRateResponseAmino;
                fromAminoMsg(object: _2.QueryRateResponseAminoMsg): _2.QueryRateResponse;
                fromProtoMsg(message: _2.QueryRateResponseProtoMsg): _2.QueryRateResponse;
                toProto(message: _2.QueryRateResponse): Uint8Array;
                toProtoMsg(message: _2.QueryRateResponse): _2.QueryRateResponseProtoMsg;
            };
            GenesisState: {
                typeUrl: string;
                encode(message: _1.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _1.GenesisState;
                fromPartial(object: Partial<_1.GenesisState>): _1.GenesisState;
                fromAmino(object: _1.GenesisStateAmino): _1.GenesisState;
                toAmino(message: _1.GenesisState): _1.GenesisStateAmino;
                fromAminoMsg(object: _1.GenesisStateAminoMsg): _1.GenesisState;
                fromProtoMsg(message: _1.GenesisStateProtoMsg): _1.GenesisState;
                toProto(message: _1.GenesisState): Uint8Array;
                toProtoMsg(message: _1.GenesisState): _1.GenesisStateProtoMsg;
            };
            ValidatorCommissionRate: {
                typeUrl: string;
                encode(message: _1.ValidatorCommissionRate, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _1.ValidatorCommissionRate;
                fromPartial(object: Partial<_1.ValidatorCommissionRate>): _1.ValidatorCommissionRate;
                fromAmino(object: _1.ValidatorCommissionRateAmino): _1.ValidatorCommissionRate;
                toAmino(message: _1.ValidatorCommissionRate): _1.ValidatorCommissionRateAmino;
                fromAminoMsg(object: _1.ValidatorCommissionRateAminoMsg): _1.ValidatorCommissionRate;
                fromProtoMsg(message: _1.ValidatorCommissionRateProtoMsg): _1.ValidatorCommissionRate;
                toProto(message: _1.ValidatorCommissionRate): Uint8Array;
                toProtoMsg(message: _1.ValidatorCommissionRate): _1.ValidatorCommissionRateProtoMsg;
            };
            Params: {
                typeUrl: string;
                encode(message: _0.Params, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _0.Params;
                fromPartial(object: Partial<_0.Params>): _0.Params;
                fromAmino(object: _0.ParamsAmino): _0.Params;
                toAmino(message: _0.Params): _0.ParamsAmino;
                fromAminoMsg(object: _0.ParamsAminoMsg): _0.Params;
                fromProtoMsg(message: _0.ParamsProtoMsg): _0.Params;
                toProto(message: _0.Params): Uint8Array;
                toProtoMsg(message: _0.Params): _0.ParamsProtoMsg;
            };
        };
    }
    namespace market {
        const v1beta1: {
            MsgClientImpl: typeof _157.MsgClientImpl;
            QueryClientImpl: typeof _153.QueryClientImpl;
            createRpcQueryExtension: (base: QueryClient) => {
                swap(request: _5.QuerySwapRequest): Promise<_5.QuerySwapResponse>;
                terraPoolDelta(request?: _5.QueryTerraPoolDeltaRequest): Promise<_5.QueryTerraPoolDeltaResponse>;
                params(request?: _5.QueryParamsRequest): Promise<_5.QueryParamsResponse>;
            };
            LCDQueryClient: typeof _149.LCDQueryClient;
            registry: readonly [string, GeneratedType][];
            load: (protoRegistry: Registry) => void;
            MessageComposer: {
                encoded: {
                    swap(value: _6.MsgSwap): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    swapSend(value: _6.MsgSwapSend): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    swap(value: _6.MsgSwap): {
                        typeUrl: string;
                        value: _6.MsgSwap;
                    };
                    swapSend(value: _6.MsgSwapSend): {
                        typeUrl: string;
                        value: _6.MsgSwapSend;
                    };
                };
                fromJSON: {
                    swap(value: any): {
                        typeUrl: string;
                        value: _6.MsgSwap;
                    };
                    swapSend(value: any): {
                        typeUrl: string;
                        value: _6.MsgSwapSend;
                    };
                };
                fromPartial: {
                    swap(value: _6.MsgSwap): {
                        typeUrl: string;
                        value: _6.MsgSwap;
                    };
                    swapSend(value: _6.MsgSwapSend): {
                        typeUrl: string;
                        value: _6.MsgSwapSend;
                    };
                };
            };
            AminoConverter: {
                "/terra.market.v1beta1.MsgSwap": {
                    aminoType: string;
                    toAmino: (message: _6.MsgSwap) => _6.MsgSwapAmino;
                    fromAmino: (object: _6.MsgSwapAmino) => _6.MsgSwap;
                };
                "/terra.market.v1beta1.MsgSwapSend": {
                    aminoType: string;
                    toAmino: (message: _6.MsgSwapSend) => _6.MsgSwapSendAmino;
                    fromAmino: (object: _6.MsgSwapSendAmino) => _6.MsgSwapSend;
                };
            };
            MsgSwap: {
                typeUrl: string;
                encode(message: _6.MsgSwap, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _6.MsgSwap;
                fromPartial(object: Partial<_6.MsgSwap>): _6.MsgSwap;
                fromAmino(object: _6.MsgSwapAmino): _6.MsgSwap;
                toAmino(message: _6.MsgSwap): _6.MsgSwapAmino;
                fromAminoMsg(object: _6.MsgSwapAminoMsg): _6.MsgSwap;
                fromProtoMsg(message: _6.MsgSwapProtoMsg): _6.MsgSwap;
                toProto(message: _6.MsgSwap): Uint8Array;
                toProtoMsg(message: _6.MsgSwap): _6.MsgSwapProtoMsg;
            };
            MsgSwapResponse: {
                typeUrl: string;
                encode(message: _6.MsgSwapResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _6.MsgSwapResponse;
                fromPartial(object: Partial<_6.MsgSwapResponse>): _6.MsgSwapResponse;
                fromAmino(object: _6.MsgSwapResponseAmino): _6.MsgSwapResponse;
                toAmino(message: _6.MsgSwapResponse): _6.MsgSwapResponseAmino;
                fromAminoMsg(object: _6.MsgSwapResponseAminoMsg): _6.MsgSwapResponse;
                fromProtoMsg(message: _6.MsgSwapResponseProtoMsg): _6.MsgSwapResponse;
                toProto(message: _6.MsgSwapResponse): Uint8Array;
                toProtoMsg(message: _6.MsgSwapResponse): _6.MsgSwapResponseProtoMsg;
            };
            MsgSwapSend: {
                typeUrl: string;
                encode(message: _6.MsgSwapSend, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _6.MsgSwapSend;
                fromPartial(object: Partial<_6.MsgSwapSend>): _6.MsgSwapSend;
                fromAmino(object: _6.MsgSwapSendAmino): _6.MsgSwapSend;
                toAmino(message: _6.MsgSwapSend): _6.MsgSwapSendAmino;
                fromAminoMsg(object: _6.MsgSwapSendAminoMsg): _6.MsgSwapSend;
                fromProtoMsg(message: _6.MsgSwapSendProtoMsg): _6.MsgSwapSend;
                toProto(message: _6.MsgSwapSend): Uint8Array;
                toProtoMsg(message: _6.MsgSwapSend): _6.MsgSwapSendProtoMsg;
            };
            MsgSwapSendResponse: {
                typeUrl: string;
                encode(message: _6.MsgSwapSendResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _6.MsgSwapSendResponse;
                fromPartial(object: Partial<_6.MsgSwapSendResponse>): _6.MsgSwapSendResponse;
                fromAmino(object: _6.MsgSwapSendResponseAmino): _6.MsgSwapSendResponse;
                toAmino(message: _6.MsgSwapSendResponse): _6.MsgSwapSendResponseAmino;
                fromAminoMsg(object: _6.MsgSwapSendResponseAminoMsg): _6.MsgSwapSendResponse;
                fromProtoMsg(message: _6.MsgSwapSendResponseProtoMsg): _6.MsgSwapSendResponse;
                toProto(message: _6.MsgSwapSendResponse): Uint8Array;
                toProtoMsg(message: _6.MsgSwapSendResponse): _6.MsgSwapSendResponseProtoMsg;
            };
            QuerySwapRequest: {
                typeUrl: string;
                encode(message: _5.QuerySwapRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _5.QuerySwapRequest;
                fromPartial(object: Partial<_5.QuerySwapRequest>): _5.QuerySwapRequest;
                fromAmino(object: _5.QuerySwapRequestAmino): _5.QuerySwapRequest;
                toAmino(message: _5.QuerySwapRequest): _5.QuerySwapRequestAmino;
                fromAminoMsg(object: _5.QuerySwapRequestAminoMsg): _5.QuerySwapRequest;
                fromProtoMsg(message: _5.QuerySwapRequestProtoMsg): _5.QuerySwapRequest;
                toProto(message: _5.QuerySwapRequest): Uint8Array;
                toProtoMsg(message: _5.QuerySwapRequest): _5.QuerySwapRequestProtoMsg;
            };
            QuerySwapResponse: {
                typeUrl: string;
                encode(message: _5.QuerySwapResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _5.QuerySwapResponse;
                fromPartial(object: Partial<_5.QuerySwapResponse>): _5.QuerySwapResponse;
                fromAmino(object: _5.QuerySwapResponseAmino): _5.QuerySwapResponse;
                toAmino(message: _5.QuerySwapResponse): _5.QuerySwapResponseAmino;
                fromAminoMsg(object: _5.QuerySwapResponseAminoMsg): _5.QuerySwapResponse;
                fromProtoMsg(message: _5.QuerySwapResponseProtoMsg): _5.QuerySwapResponse;
                toProto(message: _5.QuerySwapResponse): Uint8Array;
                toProtoMsg(message: _5.QuerySwapResponse): _5.QuerySwapResponseProtoMsg;
            };
            QueryTerraPoolDeltaRequest: {
                typeUrl: string;
                encode(_: _5.QueryTerraPoolDeltaRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _5.QueryTerraPoolDeltaRequest;
                fromPartial(_: Partial<_5.QueryTerraPoolDeltaRequest>): _5.QueryTerraPoolDeltaRequest;
                fromAmino(_: _5.QueryTerraPoolDeltaRequestAmino): _5.QueryTerraPoolDeltaRequest;
                toAmino(_: _5.QueryTerraPoolDeltaRequest): _5.QueryTerraPoolDeltaRequestAmino;
                fromAminoMsg(object: _5.QueryTerraPoolDeltaRequestAminoMsg): _5.QueryTerraPoolDeltaRequest;
                fromProtoMsg(message: _5.QueryTerraPoolDeltaRequestProtoMsg): _5.QueryTerraPoolDeltaRequest;
                toProto(message: _5.QueryTerraPoolDeltaRequest): Uint8Array;
                toProtoMsg(message: _5.QueryTerraPoolDeltaRequest): _5.QueryTerraPoolDeltaRequestProtoMsg;
            };
            QueryTerraPoolDeltaResponse: {
                typeUrl: string;
                encode(message: _5.QueryTerraPoolDeltaResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _5.QueryTerraPoolDeltaResponse;
                fromPartial(object: Partial<_5.QueryTerraPoolDeltaResponse>): _5.QueryTerraPoolDeltaResponse;
                fromAmino(object: _5.QueryTerraPoolDeltaResponseAmino): _5.QueryTerraPoolDeltaResponse;
                toAmino(message: _5.QueryTerraPoolDeltaResponse): _5.QueryTerraPoolDeltaResponseAmino;
                fromAminoMsg(object: _5.QueryTerraPoolDeltaResponseAminoMsg): _5.QueryTerraPoolDeltaResponse;
                fromProtoMsg(message: _5.QueryTerraPoolDeltaResponseProtoMsg): _5.QueryTerraPoolDeltaResponse;
                toProto(message: _5.QueryTerraPoolDeltaResponse): Uint8Array;
                toProtoMsg(message: _5.QueryTerraPoolDeltaResponse): _5.QueryTerraPoolDeltaResponseProtoMsg;
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
            Params: {
                typeUrl: string;
                encode(message: _4.Params, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _4.Params;
                fromPartial(object: Partial<_4.Params>): _4.Params;
                fromAmino(object: _4.ParamsAmino): _4.Params;
                toAmino(message: _4.Params): _4.ParamsAmino;
                fromAminoMsg(object: _4.ParamsAminoMsg): _4.Params;
                fromProtoMsg(message: _4.ParamsProtoMsg): _4.Params;
                toProto(message: _4.Params): Uint8Array;
                toProtoMsg(message: _4.Params): _4.ParamsProtoMsg;
            };
            GenesisState: {
                typeUrl: string;
                encode(message: _3.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _3.GenesisState;
                fromPartial(object: Partial<_3.GenesisState>): _3.GenesisState;
                fromAmino(object: _3.GenesisStateAmino): _3.GenesisState;
                toAmino(message: _3.GenesisState): _3.GenesisStateAmino;
                fromAminoMsg(object: _3.GenesisStateAminoMsg): _3.GenesisState;
                fromProtoMsg(message: _3.GenesisStateProtoMsg): _3.GenesisState;
                toProto(message: _3.GenesisState): Uint8Array;
                toProtoMsg(message: _3.GenesisState): _3.GenesisStateProtoMsg;
            };
        };
    }
    namespace oracle {
        const v1beta1: {
            MsgClientImpl: typeof _158.MsgClientImpl;
            QueryClientImpl: typeof _154.QueryClientImpl;
            createRpcQueryExtension: (base: QueryClient) => {
                exchangeRate(request: _9.QueryExchangeRateRequest): Promise<_9.QueryExchangeRateResponse>;
                exchangeRates(request?: _9.QueryExchangeRatesRequest): Promise<_9.QueryExchangeRatesResponse>;
                tobinTax(request: _9.QueryTobinTaxRequest): Promise<_9.QueryTobinTaxResponse>;
                tobinTaxes(request?: _9.QueryTobinTaxesRequest): Promise<_9.QueryTobinTaxesResponse>;
                actives(request?: _9.QueryActivesRequest): Promise<_9.QueryActivesResponse>;
                voteTargets(request?: _9.QueryVoteTargetsRequest): Promise<_9.QueryVoteTargetsResponse>;
                feederDelegation(request: _9.QueryFeederDelegationRequest): Promise<_9.QueryFeederDelegationResponse>;
                missCounter(request: _9.QueryMissCounterRequest): Promise<_9.QueryMissCounterResponse>;
                aggregatePrevote(request: _9.QueryAggregatePrevoteRequest): Promise<_9.QueryAggregatePrevoteResponse>;
                aggregatePrevotes(request?: _9.QueryAggregatePrevotesRequest): Promise<_9.QueryAggregatePrevotesResponse>;
                aggregateVote(request: _9.QueryAggregateVoteRequest): Promise<_9.QueryAggregateVoteResponse>;
                aggregateVotes(request?: _9.QueryAggregateVotesRequest): Promise<_9.QueryAggregateVotesResponse>;
                params(request?: _9.QueryParamsRequest): Promise<_9.QueryParamsResponse>;
            };
            LCDQueryClient: typeof _150.LCDQueryClient;
            registry: readonly [string, GeneratedType][];
            load: (protoRegistry: Registry) => void;
            MessageComposer: {
                encoded: {
                    aggregateExchangeRatePrevote(value: _10.MsgAggregateExchangeRatePrevote): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    aggregateExchangeRateVote(value: _10.MsgAggregateExchangeRateVote): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    delegateFeedConsent(value: _10.MsgDelegateFeedConsent): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    aggregateExchangeRatePrevote(value: _10.MsgAggregateExchangeRatePrevote): {
                        typeUrl: string;
                        value: _10.MsgAggregateExchangeRatePrevote;
                    };
                    aggregateExchangeRateVote(value: _10.MsgAggregateExchangeRateVote): {
                        typeUrl: string;
                        value: _10.MsgAggregateExchangeRateVote;
                    };
                    delegateFeedConsent(value: _10.MsgDelegateFeedConsent): {
                        typeUrl: string;
                        value: _10.MsgDelegateFeedConsent;
                    };
                };
                fromJSON: {
                    aggregateExchangeRatePrevote(value: any): {
                        typeUrl: string;
                        value: _10.MsgAggregateExchangeRatePrevote;
                    };
                    aggregateExchangeRateVote(value: any): {
                        typeUrl: string;
                        value: _10.MsgAggregateExchangeRateVote;
                    };
                    delegateFeedConsent(value: any): {
                        typeUrl: string;
                        value: _10.MsgDelegateFeedConsent;
                    };
                };
                fromPartial: {
                    aggregateExchangeRatePrevote(value: _10.MsgAggregateExchangeRatePrevote): {
                        typeUrl: string;
                        value: _10.MsgAggregateExchangeRatePrevote;
                    };
                    aggregateExchangeRateVote(value: _10.MsgAggregateExchangeRateVote): {
                        typeUrl: string;
                        value: _10.MsgAggregateExchangeRateVote;
                    };
                    delegateFeedConsent(value: _10.MsgDelegateFeedConsent): {
                        typeUrl: string;
                        value: _10.MsgDelegateFeedConsent;
                    };
                };
            };
            AminoConverter: {
                "/terra.oracle.v1beta1.MsgAggregateExchangeRatePrevote": {
                    aminoType: string;
                    toAmino: (message: _10.MsgAggregateExchangeRatePrevote) => _10.MsgAggregateExchangeRatePrevoteAmino;
                    fromAmino: (object: _10.MsgAggregateExchangeRatePrevoteAmino) => _10.MsgAggregateExchangeRatePrevote;
                };
                "/terra.oracle.v1beta1.MsgAggregateExchangeRateVote": {
                    aminoType: string;
                    toAmino: (message: _10.MsgAggregateExchangeRateVote) => _10.MsgAggregateExchangeRateVoteAmino;
                    fromAmino: (object: _10.MsgAggregateExchangeRateVoteAmino) => _10.MsgAggregateExchangeRateVote;
                };
                "/terra.oracle.v1beta1.MsgDelegateFeedConsent": {
                    aminoType: string;
                    toAmino: (message: _10.MsgDelegateFeedConsent) => _10.MsgDelegateFeedConsentAmino;
                    fromAmino: (object: _10.MsgDelegateFeedConsentAmino) => _10.MsgDelegateFeedConsent;
                };
            };
            MsgAggregateExchangeRatePrevote: {
                typeUrl: string;
                encode(message: _10.MsgAggregateExchangeRatePrevote, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _10.MsgAggregateExchangeRatePrevote;
                fromPartial(object: Partial<_10.MsgAggregateExchangeRatePrevote>): _10.MsgAggregateExchangeRatePrevote;
                fromAmino(object: _10.MsgAggregateExchangeRatePrevoteAmino): _10.MsgAggregateExchangeRatePrevote;
                toAmino(message: _10.MsgAggregateExchangeRatePrevote): _10.MsgAggregateExchangeRatePrevoteAmino;
                fromAminoMsg(object: _10.MsgAggregateExchangeRatePrevoteAminoMsg): _10.MsgAggregateExchangeRatePrevote;
                fromProtoMsg(message: _10.MsgAggregateExchangeRatePrevoteProtoMsg): _10.MsgAggregateExchangeRatePrevote;
                toProto(message: _10.MsgAggregateExchangeRatePrevote): Uint8Array;
                toProtoMsg(message: _10.MsgAggregateExchangeRatePrevote): _10.MsgAggregateExchangeRatePrevoteProtoMsg;
            };
            MsgAggregateExchangeRatePrevoteResponse: {
                typeUrl: string;
                encode(_: _10.MsgAggregateExchangeRatePrevoteResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _10.MsgAggregateExchangeRatePrevoteResponse;
                fromPartial(_: Partial<_10.MsgAggregateExchangeRatePrevoteResponse>): _10.MsgAggregateExchangeRatePrevoteResponse;
                fromAmino(_: _10.MsgAggregateExchangeRatePrevoteResponseAmino): _10.MsgAggregateExchangeRatePrevoteResponse;
                toAmino(_: _10.MsgAggregateExchangeRatePrevoteResponse): _10.MsgAggregateExchangeRatePrevoteResponseAmino;
                fromAminoMsg(object: _10.MsgAggregateExchangeRatePrevoteResponseAminoMsg): _10.MsgAggregateExchangeRatePrevoteResponse;
                fromProtoMsg(message: _10.MsgAggregateExchangeRatePrevoteResponseProtoMsg): _10.MsgAggregateExchangeRatePrevoteResponse;
                toProto(message: _10.MsgAggregateExchangeRatePrevoteResponse): Uint8Array;
                toProtoMsg(message: _10.MsgAggregateExchangeRatePrevoteResponse): _10.MsgAggregateExchangeRatePrevoteResponseProtoMsg;
            };
            MsgAggregateExchangeRateVote: {
                typeUrl: string;
                encode(message: _10.MsgAggregateExchangeRateVote, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _10.MsgAggregateExchangeRateVote;
                fromPartial(object: Partial<_10.MsgAggregateExchangeRateVote>): _10.MsgAggregateExchangeRateVote;
                fromAmino(object: _10.MsgAggregateExchangeRateVoteAmino): _10.MsgAggregateExchangeRateVote;
                toAmino(message: _10.MsgAggregateExchangeRateVote): _10.MsgAggregateExchangeRateVoteAmino;
                fromAminoMsg(object: _10.MsgAggregateExchangeRateVoteAminoMsg): _10.MsgAggregateExchangeRateVote;
                fromProtoMsg(message: _10.MsgAggregateExchangeRateVoteProtoMsg): _10.MsgAggregateExchangeRateVote;
                toProto(message: _10.MsgAggregateExchangeRateVote): Uint8Array;
                toProtoMsg(message: _10.MsgAggregateExchangeRateVote): _10.MsgAggregateExchangeRateVoteProtoMsg;
            };
            MsgAggregateExchangeRateVoteResponse: {
                typeUrl: string;
                encode(_: _10.MsgAggregateExchangeRateVoteResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _10.MsgAggregateExchangeRateVoteResponse;
                fromPartial(_: Partial<_10.MsgAggregateExchangeRateVoteResponse>): _10.MsgAggregateExchangeRateVoteResponse;
                fromAmino(_: _10.MsgAggregateExchangeRateVoteResponseAmino): _10.MsgAggregateExchangeRateVoteResponse;
                toAmino(_: _10.MsgAggregateExchangeRateVoteResponse): _10.MsgAggregateExchangeRateVoteResponseAmino;
                fromAminoMsg(object: _10.MsgAggregateExchangeRateVoteResponseAminoMsg): _10.MsgAggregateExchangeRateVoteResponse;
                fromProtoMsg(message: _10.MsgAggregateExchangeRateVoteResponseProtoMsg): _10.MsgAggregateExchangeRateVoteResponse;
                toProto(message: _10.MsgAggregateExchangeRateVoteResponse): Uint8Array;
                toProtoMsg(message: _10.MsgAggregateExchangeRateVoteResponse): _10.MsgAggregateExchangeRateVoteResponseProtoMsg;
            };
            MsgDelegateFeedConsent: {
                typeUrl: string;
                encode(message: _10.MsgDelegateFeedConsent, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _10.MsgDelegateFeedConsent;
                fromPartial(object: Partial<_10.MsgDelegateFeedConsent>): _10.MsgDelegateFeedConsent;
                fromAmino(object: _10.MsgDelegateFeedConsentAmino): _10.MsgDelegateFeedConsent;
                toAmino(message: _10.MsgDelegateFeedConsent): _10.MsgDelegateFeedConsentAmino;
                fromAminoMsg(object: _10.MsgDelegateFeedConsentAminoMsg): _10.MsgDelegateFeedConsent;
                fromProtoMsg(message: _10.MsgDelegateFeedConsentProtoMsg): _10.MsgDelegateFeedConsent;
                toProto(message: _10.MsgDelegateFeedConsent): Uint8Array;
                toProtoMsg(message: _10.MsgDelegateFeedConsent): _10.MsgDelegateFeedConsentProtoMsg;
            };
            MsgDelegateFeedConsentResponse: {
                typeUrl: string;
                encode(_: _10.MsgDelegateFeedConsentResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _10.MsgDelegateFeedConsentResponse;
                fromPartial(_: Partial<_10.MsgDelegateFeedConsentResponse>): _10.MsgDelegateFeedConsentResponse;
                fromAmino(_: _10.MsgDelegateFeedConsentResponseAmino): _10.MsgDelegateFeedConsentResponse;
                toAmino(_: _10.MsgDelegateFeedConsentResponse): _10.MsgDelegateFeedConsentResponseAmino;
                fromAminoMsg(object: _10.MsgDelegateFeedConsentResponseAminoMsg): _10.MsgDelegateFeedConsentResponse;
                fromProtoMsg(message: _10.MsgDelegateFeedConsentResponseProtoMsg): _10.MsgDelegateFeedConsentResponse;
                toProto(message: _10.MsgDelegateFeedConsentResponse): Uint8Array;
                toProtoMsg(message: _10.MsgDelegateFeedConsentResponse): _10.MsgDelegateFeedConsentResponseProtoMsg;
            };
            QueryExchangeRateRequest: {
                typeUrl: string;
                encode(message: _9.QueryExchangeRateRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _9.QueryExchangeRateRequest;
                fromPartial(object: Partial<_9.QueryExchangeRateRequest>): _9.QueryExchangeRateRequest;
                fromAmino(object: _9.QueryExchangeRateRequestAmino): _9.QueryExchangeRateRequest;
                toAmino(message: _9.QueryExchangeRateRequest): _9.QueryExchangeRateRequestAmino;
                fromAminoMsg(object: _9.QueryExchangeRateRequestAminoMsg): _9.QueryExchangeRateRequest;
                fromProtoMsg(message: _9.QueryExchangeRateRequestProtoMsg): _9.QueryExchangeRateRequest;
                toProto(message: _9.QueryExchangeRateRequest): Uint8Array;
                toProtoMsg(message: _9.QueryExchangeRateRequest): _9.QueryExchangeRateRequestProtoMsg;
            };
            QueryExchangeRateResponse: {
                typeUrl: string;
                encode(message: _9.QueryExchangeRateResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _9.QueryExchangeRateResponse;
                fromPartial(object: Partial<_9.QueryExchangeRateResponse>): _9.QueryExchangeRateResponse;
                fromAmino(object: _9.QueryExchangeRateResponseAmino): _9.QueryExchangeRateResponse;
                toAmino(message: _9.QueryExchangeRateResponse): _9.QueryExchangeRateResponseAmino;
                fromAminoMsg(object: _9.QueryExchangeRateResponseAminoMsg): _9.QueryExchangeRateResponse;
                fromProtoMsg(message: _9.QueryExchangeRateResponseProtoMsg): _9.QueryExchangeRateResponse;
                toProto(message: _9.QueryExchangeRateResponse): Uint8Array;
                toProtoMsg(message: _9.QueryExchangeRateResponse): _9.QueryExchangeRateResponseProtoMsg;
            };
            QueryExchangeRatesRequest: {
                typeUrl: string;
                encode(_: _9.QueryExchangeRatesRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _9.QueryExchangeRatesRequest;
                fromPartial(_: Partial<_9.QueryExchangeRatesRequest>): _9.QueryExchangeRatesRequest;
                fromAmino(_: _9.QueryExchangeRatesRequestAmino): _9.QueryExchangeRatesRequest;
                toAmino(_: _9.QueryExchangeRatesRequest): _9.QueryExchangeRatesRequestAmino;
                fromAminoMsg(object: _9.QueryExchangeRatesRequestAminoMsg): _9.QueryExchangeRatesRequest;
                fromProtoMsg(message: _9.QueryExchangeRatesRequestProtoMsg): _9.QueryExchangeRatesRequest;
                toProto(message: _9.QueryExchangeRatesRequest): Uint8Array;
                toProtoMsg(message: _9.QueryExchangeRatesRequest): _9.QueryExchangeRatesRequestProtoMsg;
            };
            QueryExchangeRatesResponse: {
                typeUrl: string;
                encode(message: _9.QueryExchangeRatesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _9.QueryExchangeRatesResponse;
                fromPartial(object: Partial<_9.QueryExchangeRatesResponse>): _9.QueryExchangeRatesResponse;
                fromAmino(object: _9.QueryExchangeRatesResponseAmino): _9.QueryExchangeRatesResponse;
                toAmino(message: _9.QueryExchangeRatesResponse): _9.QueryExchangeRatesResponseAmino;
                fromAminoMsg(object: _9.QueryExchangeRatesResponseAminoMsg): _9.QueryExchangeRatesResponse;
                fromProtoMsg(message: _9.QueryExchangeRatesResponseProtoMsg): _9.QueryExchangeRatesResponse;
                toProto(message: _9.QueryExchangeRatesResponse): Uint8Array;
                toProtoMsg(message: _9.QueryExchangeRatesResponse): _9.QueryExchangeRatesResponseProtoMsg;
            };
            QueryTobinTaxRequest: {
                typeUrl: string;
                encode(message: _9.QueryTobinTaxRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _9.QueryTobinTaxRequest;
                fromPartial(object: Partial<_9.QueryTobinTaxRequest>): _9.QueryTobinTaxRequest;
                fromAmino(object: _9.QueryTobinTaxRequestAmino): _9.QueryTobinTaxRequest;
                toAmino(message: _9.QueryTobinTaxRequest): _9.QueryTobinTaxRequestAmino;
                fromAminoMsg(object: _9.QueryTobinTaxRequestAminoMsg): _9.QueryTobinTaxRequest;
                fromProtoMsg(message: _9.QueryTobinTaxRequestProtoMsg): _9.QueryTobinTaxRequest;
                toProto(message: _9.QueryTobinTaxRequest): Uint8Array;
                toProtoMsg(message: _9.QueryTobinTaxRequest): _9.QueryTobinTaxRequestProtoMsg;
            };
            QueryTobinTaxResponse: {
                typeUrl: string;
                encode(message: _9.QueryTobinTaxResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _9.QueryTobinTaxResponse;
                fromPartial(object: Partial<_9.QueryTobinTaxResponse>): _9.QueryTobinTaxResponse;
                fromAmino(object: _9.QueryTobinTaxResponseAmino): _9.QueryTobinTaxResponse;
                toAmino(message: _9.QueryTobinTaxResponse): _9.QueryTobinTaxResponseAmino;
                fromAminoMsg(object: _9.QueryTobinTaxResponseAminoMsg): _9.QueryTobinTaxResponse;
                fromProtoMsg(message: _9.QueryTobinTaxResponseProtoMsg): _9.QueryTobinTaxResponse;
                toProto(message: _9.QueryTobinTaxResponse): Uint8Array;
                toProtoMsg(message: _9.QueryTobinTaxResponse): _9.QueryTobinTaxResponseProtoMsg;
            };
            QueryTobinTaxesRequest: {
                typeUrl: string;
                encode(_: _9.QueryTobinTaxesRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _9.QueryTobinTaxesRequest;
                fromPartial(_: Partial<_9.QueryTobinTaxesRequest>): _9.QueryTobinTaxesRequest;
                fromAmino(_: _9.QueryTobinTaxesRequestAmino): _9.QueryTobinTaxesRequest;
                toAmino(_: _9.QueryTobinTaxesRequest): _9.QueryTobinTaxesRequestAmino;
                fromAminoMsg(object: _9.QueryTobinTaxesRequestAminoMsg): _9.QueryTobinTaxesRequest;
                fromProtoMsg(message: _9.QueryTobinTaxesRequestProtoMsg): _9.QueryTobinTaxesRequest;
                toProto(message: _9.QueryTobinTaxesRequest): Uint8Array;
                toProtoMsg(message: _9.QueryTobinTaxesRequest): _9.QueryTobinTaxesRequestProtoMsg;
            };
            QueryTobinTaxesResponse: {
                typeUrl: string;
                encode(message: _9.QueryTobinTaxesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _9.QueryTobinTaxesResponse;
                fromPartial(object: Partial<_9.QueryTobinTaxesResponse>): _9.QueryTobinTaxesResponse;
                fromAmino(object: _9.QueryTobinTaxesResponseAmino): _9.QueryTobinTaxesResponse;
                toAmino(message: _9.QueryTobinTaxesResponse): _9.QueryTobinTaxesResponseAmino;
                fromAminoMsg(object: _9.QueryTobinTaxesResponseAminoMsg): _9.QueryTobinTaxesResponse;
                fromProtoMsg(message: _9.QueryTobinTaxesResponseProtoMsg): _9.QueryTobinTaxesResponse;
                toProto(message: _9.QueryTobinTaxesResponse): Uint8Array;
                toProtoMsg(message: _9.QueryTobinTaxesResponse): _9.QueryTobinTaxesResponseProtoMsg;
            };
            QueryActivesRequest: {
                typeUrl: string;
                encode(_: _9.QueryActivesRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _9.QueryActivesRequest;
                fromPartial(_: Partial<_9.QueryActivesRequest>): _9.QueryActivesRequest;
                fromAmino(_: _9.QueryActivesRequestAmino): _9.QueryActivesRequest;
                toAmino(_: _9.QueryActivesRequest): _9.QueryActivesRequestAmino;
                fromAminoMsg(object: _9.QueryActivesRequestAminoMsg): _9.QueryActivesRequest;
                fromProtoMsg(message: _9.QueryActivesRequestProtoMsg): _9.QueryActivesRequest;
                toProto(message: _9.QueryActivesRequest): Uint8Array;
                toProtoMsg(message: _9.QueryActivesRequest): _9.QueryActivesRequestProtoMsg;
            };
            QueryActivesResponse: {
                typeUrl: string;
                encode(message: _9.QueryActivesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _9.QueryActivesResponse;
                fromPartial(object: Partial<_9.QueryActivesResponse>): _9.QueryActivesResponse;
                fromAmino(object: _9.QueryActivesResponseAmino): _9.QueryActivesResponse;
                toAmino(message: _9.QueryActivesResponse): _9.QueryActivesResponseAmino;
                fromAminoMsg(object: _9.QueryActivesResponseAminoMsg): _9.QueryActivesResponse;
                fromProtoMsg(message: _9.QueryActivesResponseProtoMsg): _9.QueryActivesResponse;
                toProto(message: _9.QueryActivesResponse): Uint8Array;
                toProtoMsg(message: _9.QueryActivesResponse): _9.QueryActivesResponseProtoMsg;
            };
            QueryVoteTargetsRequest: {
                typeUrl: string;
                encode(_: _9.QueryVoteTargetsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _9.QueryVoteTargetsRequest;
                fromPartial(_: Partial<_9.QueryVoteTargetsRequest>): _9.QueryVoteTargetsRequest;
                fromAmino(_: _9.QueryVoteTargetsRequestAmino): _9.QueryVoteTargetsRequest;
                toAmino(_: _9.QueryVoteTargetsRequest): _9.QueryVoteTargetsRequestAmino;
                fromAminoMsg(object: _9.QueryVoteTargetsRequestAminoMsg): _9.QueryVoteTargetsRequest;
                fromProtoMsg(message: _9.QueryVoteTargetsRequestProtoMsg): _9.QueryVoteTargetsRequest;
                toProto(message: _9.QueryVoteTargetsRequest): Uint8Array;
                toProtoMsg(message: _9.QueryVoteTargetsRequest): _9.QueryVoteTargetsRequestProtoMsg;
            };
            QueryVoteTargetsResponse: {
                typeUrl: string;
                encode(message: _9.QueryVoteTargetsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _9.QueryVoteTargetsResponse;
                fromPartial(object: Partial<_9.QueryVoteTargetsResponse>): _9.QueryVoteTargetsResponse;
                fromAmino(object: _9.QueryVoteTargetsResponseAmino): _9.QueryVoteTargetsResponse;
                toAmino(message: _9.QueryVoteTargetsResponse): _9.QueryVoteTargetsResponseAmino;
                fromAminoMsg(object: _9.QueryVoteTargetsResponseAminoMsg): _9.QueryVoteTargetsResponse;
                fromProtoMsg(message: _9.QueryVoteTargetsResponseProtoMsg): _9.QueryVoteTargetsResponse;
                toProto(message: _9.QueryVoteTargetsResponse): Uint8Array;
                toProtoMsg(message: _9.QueryVoteTargetsResponse): _9.QueryVoteTargetsResponseProtoMsg;
            };
            QueryFeederDelegationRequest: {
                typeUrl: string;
                encode(message: _9.QueryFeederDelegationRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _9.QueryFeederDelegationRequest;
                fromPartial(object: Partial<_9.QueryFeederDelegationRequest>): _9.QueryFeederDelegationRequest;
                fromAmino(object: _9.QueryFeederDelegationRequestAmino): _9.QueryFeederDelegationRequest;
                toAmino(message: _9.QueryFeederDelegationRequest): _9.QueryFeederDelegationRequestAmino;
                fromAminoMsg(object: _9.QueryFeederDelegationRequestAminoMsg): _9.QueryFeederDelegationRequest;
                fromProtoMsg(message: _9.QueryFeederDelegationRequestProtoMsg): _9.QueryFeederDelegationRequest;
                toProto(message: _9.QueryFeederDelegationRequest): Uint8Array;
                toProtoMsg(message: _9.QueryFeederDelegationRequest): _9.QueryFeederDelegationRequestProtoMsg;
            };
            QueryFeederDelegationResponse: {
                typeUrl: string;
                encode(message: _9.QueryFeederDelegationResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _9.QueryFeederDelegationResponse;
                fromPartial(object: Partial<_9.QueryFeederDelegationResponse>): _9.QueryFeederDelegationResponse;
                fromAmino(object: _9.QueryFeederDelegationResponseAmino): _9.QueryFeederDelegationResponse;
                toAmino(message: _9.QueryFeederDelegationResponse): _9.QueryFeederDelegationResponseAmino;
                fromAminoMsg(object: _9.QueryFeederDelegationResponseAminoMsg): _9.QueryFeederDelegationResponse;
                fromProtoMsg(message: _9.QueryFeederDelegationResponseProtoMsg): _9.QueryFeederDelegationResponse;
                toProto(message: _9.QueryFeederDelegationResponse): Uint8Array;
                toProtoMsg(message: _9.QueryFeederDelegationResponse): _9.QueryFeederDelegationResponseProtoMsg;
            };
            QueryMissCounterRequest: {
                typeUrl: string;
                encode(message: _9.QueryMissCounterRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _9.QueryMissCounterRequest;
                fromPartial(object: Partial<_9.QueryMissCounterRequest>): _9.QueryMissCounterRequest;
                fromAmino(object: _9.QueryMissCounterRequestAmino): _9.QueryMissCounterRequest;
                toAmino(message: _9.QueryMissCounterRequest): _9.QueryMissCounterRequestAmino;
                fromAminoMsg(object: _9.QueryMissCounterRequestAminoMsg): _9.QueryMissCounterRequest;
                fromProtoMsg(message: _9.QueryMissCounterRequestProtoMsg): _9.QueryMissCounterRequest;
                toProto(message: _9.QueryMissCounterRequest): Uint8Array;
                toProtoMsg(message: _9.QueryMissCounterRequest): _9.QueryMissCounterRequestProtoMsg;
            };
            QueryMissCounterResponse: {
                typeUrl: string;
                encode(message: _9.QueryMissCounterResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _9.QueryMissCounterResponse;
                fromPartial(object: Partial<_9.QueryMissCounterResponse>): _9.QueryMissCounterResponse;
                fromAmino(object: _9.QueryMissCounterResponseAmino): _9.QueryMissCounterResponse;
                toAmino(message: _9.QueryMissCounterResponse): _9.QueryMissCounterResponseAmino;
                fromAminoMsg(object: _9.QueryMissCounterResponseAminoMsg): _9.QueryMissCounterResponse;
                fromProtoMsg(message: _9.QueryMissCounterResponseProtoMsg): _9.QueryMissCounterResponse;
                toProto(message: _9.QueryMissCounterResponse): Uint8Array;
                toProtoMsg(message: _9.QueryMissCounterResponse): _9.QueryMissCounterResponseProtoMsg;
            };
            QueryAggregatePrevoteRequest: {
                typeUrl: string;
                encode(message: _9.QueryAggregatePrevoteRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _9.QueryAggregatePrevoteRequest;
                fromPartial(object: Partial<_9.QueryAggregatePrevoteRequest>): _9.QueryAggregatePrevoteRequest;
                fromAmino(object: _9.QueryAggregatePrevoteRequestAmino): _9.QueryAggregatePrevoteRequest;
                toAmino(message: _9.QueryAggregatePrevoteRequest): _9.QueryAggregatePrevoteRequestAmino;
                fromAminoMsg(object: _9.QueryAggregatePrevoteRequestAminoMsg): _9.QueryAggregatePrevoteRequest;
                fromProtoMsg(message: _9.QueryAggregatePrevoteRequestProtoMsg): _9.QueryAggregatePrevoteRequest;
                toProto(message: _9.QueryAggregatePrevoteRequest): Uint8Array;
                toProtoMsg(message: _9.QueryAggregatePrevoteRequest): _9.QueryAggregatePrevoteRequestProtoMsg;
            };
            QueryAggregatePrevoteResponse: {
                typeUrl: string;
                encode(message: _9.QueryAggregatePrevoteResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _9.QueryAggregatePrevoteResponse;
                fromPartial(object: Partial<_9.QueryAggregatePrevoteResponse>): _9.QueryAggregatePrevoteResponse;
                fromAmino(object: _9.QueryAggregatePrevoteResponseAmino): _9.QueryAggregatePrevoteResponse;
                toAmino(message: _9.QueryAggregatePrevoteResponse): _9.QueryAggregatePrevoteResponseAmino;
                fromAminoMsg(object: _9.QueryAggregatePrevoteResponseAminoMsg): _9.QueryAggregatePrevoteResponse;
                fromProtoMsg(message: _9.QueryAggregatePrevoteResponseProtoMsg): _9.QueryAggregatePrevoteResponse;
                toProto(message: _9.QueryAggregatePrevoteResponse): Uint8Array;
                toProtoMsg(message: _9.QueryAggregatePrevoteResponse): _9.QueryAggregatePrevoteResponseProtoMsg;
            };
            QueryAggregatePrevotesRequest: {
                typeUrl: string;
                encode(_: _9.QueryAggregatePrevotesRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _9.QueryAggregatePrevotesRequest;
                fromPartial(_: Partial<_9.QueryAggregatePrevotesRequest>): _9.QueryAggregatePrevotesRequest;
                fromAmino(_: _9.QueryAggregatePrevotesRequestAmino): _9.QueryAggregatePrevotesRequest;
                toAmino(_: _9.QueryAggregatePrevotesRequest): _9.QueryAggregatePrevotesRequestAmino;
                fromAminoMsg(object: _9.QueryAggregatePrevotesRequestAminoMsg): _9.QueryAggregatePrevotesRequest;
                fromProtoMsg(message: _9.QueryAggregatePrevotesRequestProtoMsg): _9.QueryAggregatePrevotesRequest;
                toProto(message: _9.QueryAggregatePrevotesRequest): Uint8Array;
                toProtoMsg(message: _9.QueryAggregatePrevotesRequest): _9.QueryAggregatePrevotesRequestProtoMsg;
            };
            QueryAggregatePrevotesResponse: {
                typeUrl: string;
                encode(message: _9.QueryAggregatePrevotesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _9.QueryAggregatePrevotesResponse;
                fromPartial(object: Partial<_9.QueryAggregatePrevotesResponse>): _9.QueryAggregatePrevotesResponse;
                fromAmino(object: _9.QueryAggregatePrevotesResponseAmino): _9.QueryAggregatePrevotesResponse;
                toAmino(message: _9.QueryAggregatePrevotesResponse): _9.QueryAggregatePrevotesResponseAmino;
                fromAminoMsg(object: _9.QueryAggregatePrevotesResponseAminoMsg): _9.QueryAggregatePrevotesResponse;
                fromProtoMsg(message: _9.QueryAggregatePrevotesResponseProtoMsg): _9.QueryAggregatePrevotesResponse;
                toProto(message: _9.QueryAggregatePrevotesResponse): Uint8Array;
                toProtoMsg(message: _9.QueryAggregatePrevotesResponse): _9.QueryAggregatePrevotesResponseProtoMsg;
            };
            QueryAggregateVoteRequest: {
                typeUrl: string;
                encode(message: _9.QueryAggregateVoteRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _9.QueryAggregateVoteRequest;
                fromPartial(object: Partial<_9.QueryAggregateVoteRequest>): _9.QueryAggregateVoteRequest;
                fromAmino(object: _9.QueryAggregateVoteRequestAmino): _9.QueryAggregateVoteRequest;
                toAmino(message: _9.QueryAggregateVoteRequest): _9.QueryAggregateVoteRequestAmino;
                fromAminoMsg(object: _9.QueryAggregateVoteRequestAminoMsg): _9.QueryAggregateVoteRequest;
                fromProtoMsg(message: _9.QueryAggregateVoteRequestProtoMsg): _9.QueryAggregateVoteRequest;
                toProto(message: _9.QueryAggregateVoteRequest): Uint8Array;
                toProtoMsg(message: _9.QueryAggregateVoteRequest): _9.QueryAggregateVoteRequestProtoMsg;
            };
            QueryAggregateVoteResponse: {
                typeUrl: string;
                encode(message: _9.QueryAggregateVoteResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _9.QueryAggregateVoteResponse;
                fromPartial(object: Partial<_9.QueryAggregateVoteResponse>): _9.QueryAggregateVoteResponse;
                fromAmino(object: _9.QueryAggregateVoteResponseAmino): _9.QueryAggregateVoteResponse;
                toAmino(message: _9.QueryAggregateVoteResponse): _9.QueryAggregateVoteResponseAmino;
                fromAminoMsg(object: _9.QueryAggregateVoteResponseAminoMsg): _9.QueryAggregateVoteResponse;
                fromProtoMsg(message: _9.QueryAggregateVoteResponseProtoMsg): _9.QueryAggregateVoteResponse;
                toProto(message: _9.QueryAggregateVoteResponse): Uint8Array;
                toProtoMsg(message: _9.QueryAggregateVoteResponse): _9.QueryAggregateVoteResponseProtoMsg;
            };
            QueryAggregateVotesRequest: {
                typeUrl: string;
                encode(_: _9.QueryAggregateVotesRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _9.QueryAggregateVotesRequest;
                fromPartial(_: Partial<_9.QueryAggregateVotesRequest>): _9.QueryAggregateVotesRequest;
                fromAmino(_: _9.QueryAggregateVotesRequestAmino): _9.QueryAggregateVotesRequest;
                toAmino(_: _9.QueryAggregateVotesRequest): _9.QueryAggregateVotesRequestAmino;
                fromAminoMsg(object: _9.QueryAggregateVotesRequestAminoMsg): _9.QueryAggregateVotesRequest;
                fromProtoMsg(message: _9.QueryAggregateVotesRequestProtoMsg): _9.QueryAggregateVotesRequest;
                toProto(message: _9.QueryAggregateVotesRequest): Uint8Array;
                toProtoMsg(message: _9.QueryAggregateVotesRequest): _9.QueryAggregateVotesRequestProtoMsg;
            };
            QueryAggregateVotesResponse: {
                typeUrl: string;
                encode(message: _9.QueryAggregateVotesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _9.QueryAggregateVotesResponse;
                fromPartial(object: Partial<_9.QueryAggregateVotesResponse>): _9.QueryAggregateVotesResponse;
                fromAmino(object: _9.QueryAggregateVotesResponseAmino): _9.QueryAggregateVotesResponse;
                toAmino(message: _9.QueryAggregateVotesResponse): _9.QueryAggregateVotesResponseAmino;
                fromAminoMsg(object: _9.QueryAggregateVotesResponseAminoMsg): _9.QueryAggregateVotesResponse;
                fromProtoMsg(message: _9.QueryAggregateVotesResponseProtoMsg): _9.QueryAggregateVotesResponse;
                toProto(message: _9.QueryAggregateVotesResponse): Uint8Array;
                toProtoMsg(message: _9.QueryAggregateVotesResponse): _9.QueryAggregateVotesResponseProtoMsg;
            };
            QueryParamsRequest: {
                typeUrl: string;
                encode(_: _9.QueryParamsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _9.QueryParamsRequest;
                fromPartial(_: Partial<_9.QueryParamsRequest>): _9.QueryParamsRequest;
                fromAmino(_: _9.QueryParamsRequestAmino): _9.QueryParamsRequest;
                toAmino(_: _9.QueryParamsRequest): _9.QueryParamsRequestAmino;
                fromAminoMsg(object: _9.QueryParamsRequestAminoMsg): _9.QueryParamsRequest;
                fromProtoMsg(message: _9.QueryParamsRequestProtoMsg): _9.QueryParamsRequest;
                toProto(message: _9.QueryParamsRequest): Uint8Array;
                toProtoMsg(message: _9.QueryParamsRequest): _9.QueryParamsRequestProtoMsg;
            };
            QueryParamsResponse: {
                typeUrl: string;
                encode(message: _9.QueryParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _9.QueryParamsResponse;
                fromPartial(object: Partial<_9.QueryParamsResponse>): _9.QueryParamsResponse;
                fromAmino(object: _9.QueryParamsResponseAmino): _9.QueryParamsResponse;
                toAmino(message: _9.QueryParamsResponse): _9.QueryParamsResponseAmino;
                fromAminoMsg(object: _9.QueryParamsResponseAminoMsg): _9.QueryParamsResponse;
                fromProtoMsg(message: _9.QueryParamsResponseProtoMsg): _9.QueryParamsResponse;
                toProto(message: _9.QueryParamsResponse): Uint8Array;
                toProtoMsg(message: _9.QueryParamsResponse): _9.QueryParamsResponseProtoMsg;
            };
            Params: {
                typeUrl: string;
                encode(message: _8.Params, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _8.Params;
                fromPartial(object: Partial<_8.Params>): _8.Params;
                fromAmino(object: _8.ParamsAmino): _8.Params;
                toAmino(message: _8.Params): _8.ParamsAmino;
                fromAminoMsg(object: _8.ParamsAminoMsg): _8.Params;
                fromProtoMsg(message: _8.ParamsProtoMsg): _8.Params;
                toProto(message: _8.Params): Uint8Array;
                toProtoMsg(message: _8.Params): _8.ParamsProtoMsg;
            };
            Denom: {
                typeUrl: string;
                encode(message: _8.Denom, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _8.Denom;
                fromPartial(object: Partial<_8.Denom>): _8.Denom;
                fromAmino(object: _8.DenomAmino): _8.Denom;
                toAmino(message: _8.Denom): _8.DenomAmino;
                fromAminoMsg(object: _8.DenomAminoMsg): _8.Denom;
                fromProtoMsg(message: _8.DenomProtoMsg): _8.Denom;
                toProto(message: _8.Denom): Uint8Array;
                toProtoMsg(message: _8.Denom): _8.DenomProtoMsg;
            };
            AggregateExchangeRatePrevote: {
                typeUrl: string;
                encode(message: _8.AggregateExchangeRatePrevote, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _8.AggregateExchangeRatePrevote;
                fromPartial(object: Partial<_8.AggregateExchangeRatePrevote>): _8.AggregateExchangeRatePrevote;
                fromAmino(object: _8.AggregateExchangeRatePrevoteAmino): _8.AggregateExchangeRatePrevote;
                toAmino(message: _8.AggregateExchangeRatePrevote): _8.AggregateExchangeRatePrevoteAmino;
                fromAminoMsg(object: _8.AggregateExchangeRatePrevoteAminoMsg): _8.AggregateExchangeRatePrevote;
                fromProtoMsg(message: _8.AggregateExchangeRatePrevoteProtoMsg): _8.AggregateExchangeRatePrevote;
                toProto(message: _8.AggregateExchangeRatePrevote): Uint8Array;
                toProtoMsg(message: _8.AggregateExchangeRatePrevote): _8.AggregateExchangeRatePrevoteProtoMsg;
            };
            AggregateExchangeRateVote: {
                typeUrl: string;
                encode(message: _8.AggregateExchangeRateVote, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _8.AggregateExchangeRateVote;
                fromPartial(object: Partial<_8.AggregateExchangeRateVote>): _8.AggregateExchangeRateVote;
                fromAmino(object: _8.AggregateExchangeRateVoteAmino): _8.AggregateExchangeRateVote;
                toAmino(message: _8.AggregateExchangeRateVote): _8.AggregateExchangeRateVoteAmino;
                fromAminoMsg(object: _8.AggregateExchangeRateVoteAminoMsg): _8.AggregateExchangeRateVote;
                fromProtoMsg(message: _8.AggregateExchangeRateVoteProtoMsg): _8.AggregateExchangeRateVote;
                toProto(message: _8.AggregateExchangeRateVote): Uint8Array;
                toProtoMsg(message: _8.AggregateExchangeRateVote): _8.AggregateExchangeRateVoteProtoMsg;
            };
            ExchangeRateTuple: {
                typeUrl: string;
                encode(message: _8.ExchangeRateTuple, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _8.ExchangeRateTuple;
                fromPartial(object: Partial<_8.ExchangeRateTuple>): _8.ExchangeRateTuple;
                fromAmino(object: _8.ExchangeRateTupleAmino): _8.ExchangeRateTuple;
                toAmino(message: _8.ExchangeRateTuple): _8.ExchangeRateTupleAmino;
                fromAminoMsg(object: _8.ExchangeRateTupleAminoMsg): _8.ExchangeRateTuple;
                fromProtoMsg(message: _8.ExchangeRateTupleProtoMsg): _8.ExchangeRateTuple;
                toProto(message: _8.ExchangeRateTuple): Uint8Array;
                toProtoMsg(message: _8.ExchangeRateTuple): _8.ExchangeRateTupleProtoMsg;
            };
            GenesisState: {
                typeUrl: string;
                encode(message: _7.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _7.GenesisState;
                fromPartial(object: Partial<_7.GenesisState>): _7.GenesisState;
                fromAmino(object: _7.GenesisStateAmino): _7.GenesisState;
                toAmino(message: _7.GenesisState): _7.GenesisStateAmino;
                fromAminoMsg(object: _7.GenesisStateAminoMsg): _7.GenesisState;
                fromProtoMsg(message: _7.GenesisStateProtoMsg): _7.GenesisState;
                toProto(message: _7.GenesisState): Uint8Array;
                toProtoMsg(message: _7.GenesisState): _7.GenesisStateProtoMsg;
            };
            FeederDelegation: {
                typeUrl: string;
                encode(message: _7.FeederDelegation, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _7.FeederDelegation;
                fromPartial(object: Partial<_7.FeederDelegation>): _7.FeederDelegation;
                fromAmino(object: _7.FeederDelegationAmino): _7.FeederDelegation;
                toAmino(message: _7.FeederDelegation): _7.FeederDelegationAmino;
                fromAminoMsg(object: _7.FeederDelegationAminoMsg): _7.FeederDelegation;
                fromProtoMsg(message: _7.FeederDelegationProtoMsg): _7.FeederDelegation;
                toProto(message: _7.FeederDelegation): Uint8Array;
                toProtoMsg(message: _7.FeederDelegation): _7.FeederDelegationProtoMsg;
            };
            MissCounter: {
                typeUrl: string;
                encode(message: _7.MissCounter, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _7.MissCounter;
                fromPartial(object: Partial<_7.MissCounter>): _7.MissCounter;
                fromAmino(object: _7.MissCounterAmino): _7.MissCounter;
                toAmino(message: _7.MissCounter): _7.MissCounterAmino;
                fromAminoMsg(object: _7.MissCounterAminoMsg): _7.MissCounter;
                fromProtoMsg(message: _7.MissCounterProtoMsg): _7.MissCounter;
                toProto(message: _7.MissCounter): Uint8Array;
                toProtoMsg(message: _7.MissCounter): _7.MissCounterProtoMsg;
            };
            TobinTax: {
                typeUrl: string;
                encode(message: _7.TobinTax, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _7.TobinTax;
                fromPartial(object: Partial<_7.TobinTax>): _7.TobinTax;
                fromAmino(object: _7.TobinTaxAmino): _7.TobinTax;
                toAmino(message: _7.TobinTax): _7.TobinTaxAmino;
                fromAminoMsg(object: _7.TobinTaxAminoMsg): _7.TobinTax;
                fromProtoMsg(message: _7.TobinTaxProtoMsg): _7.TobinTax;
                toProto(message: _7.TobinTax): Uint8Array;
                toProtoMsg(message: _7.TobinTax): _7.TobinTaxProtoMsg;
            };
        };
    }
    namespace treasury {
        const v1beta1: {
            QueryClientImpl: typeof _155.QueryClientImpl;
            createRpcQueryExtension: (base: QueryClient) => {
                taxRate(request?: _13.QueryTaxRateRequest): Promise<_13.QueryTaxRateResponse>;
                taxCap(request: _13.QueryTaxCapRequest): Promise<_13.QueryTaxCapResponse>;
                taxCaps(request?: _13.QueryTaxCapsRequest): Promise<_13.QueryTaxCapsResponse>;
                rewardWeight(request?: _13.QueryRewardWeightRequest): Promise<_13.QueryRewardWeightResponse>;
                seigniorageProceeds(request?: _13.QuerySeigniorageProceedsRequest): Promise<_13.QuerySeigniorageProceedsResponse>;
                taxProceeds(request?: _13.QueryTaxProceedsRequest): Promise<_13.QueryTaxProceedsResponse>;
                indicators(request?: _13.QueryIndicatorsRequest): Promise<_13.QueryIndicatorsResponse>;
                burnTaxExemptionList(request?: _13.QueryBurnTaxExemptionListRequest): Promise<_13.QueryBurnTaxExemptionListResponse>;
                params(request?: _13.QueryParamsRequest): Promise<_13.QueryParamsResponse>;
            };
            LCDQueryClient: typeof _151.LCDQueryClient;
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
            PolicyConstraints: {
                typeUrl: string;
                encode(message: _14.PolicyConstraints, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _14.PolicyConstraints;
                fromPartial(object: Partial<_14.PolicyConstraints>): _14.PolicyConstraints;
                fromAmino(object: _14.PolicyConstraintsAmino): _14.PolicyConstraints;
                toAmino(message: _14.PolicyConstraints): _14.PolicyConstraintsAmino;
                fromAminoMsg(object: _14.PolicyConstraintsAminoMsg): _14.PolicyConstraints;
                fromProtoMsg(message: _14.PolicyConstraintsProtoMsg): _14.PolicyConstraints;
                toProto(message: _14.PolicyConstraints): Uint8Array;
                toProtoMsg(message: _14.PolicyConstraints): _14.PolicyConstraintsProtoMsg;
            };
            EpochTaxProceeds: {
                typeUrl: string;
                encode(message: _14.EpochTaxProceeds, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _14.EpochTaxProceeds;
                fromPartial(object: Partial<_14.EpochTaxProceeds>): _14.EpochTaxProceeds;
                fromAmino(object: _14.EpochTaxProceedsAmino): _14.EpochTaxProceeds;
                toAmino(message: _14.EpochTaxProceeds): _14.EpochTaxProceedsAmino;
                fromAminoMsg(object: _14.EpochTaxProceedsAminoMsg): _14.EpochTaxProceeds;
                fromProtoMsg(message: _14.EpochTaxProceedsProtoMsg): _14.EpochTaxProceeds;
                toProto(message: _14.EpochTaxProceeds): Uint8Array;
                toProtoMsg(message: _14.EpochTaxProceeds): _14.EpochTaxProceedsProtoMsg;
            };
            EpochInitialIssuance: {
                typeUrl: string;
                encode(message: _14.EpochInitialIssuance, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _14.EpochInitialIssuance;
                fromPartial(object: Partial<_14.EpochInitialIssuance>): _14.EpochInitialIssuance;
                fromAmino(object: _14.EpochInitialIssuanceAmino): _14.EpochInitialIssuance;
                toAmino(message: _14.EpochInitialIssuance): _14.EpochInitialIssuanceAmino;
                fromAminoMsg(object: _14.EpochInitialIssuanceAminoMsg): _14.EpochInitialIssuance;
                fromProtoMsg(message: _14.EpochInitialIssuanceProtoMsg): _14.EpochInitialIssuance;
                toProto(message: _14.EpochInitialIssuance): Uint8Array;
                toProtoMsg(message: _14.EpochInitialIssuance): _14.EpochInitialIssuanceProtoMsg;
            };
            QueryTaxRateRequest: {
                typeUrl: string;
                encode(_: _13.QueryTaxRateRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _13.QueryTaxRateRequest;
                fromPartial(_: Partial<_13.QueryTaxRateRequest>): _13.QueryTaxRateRequest;
                fromAmino(_: _13.QueryTaxRateRequestAmino): _13.QueryTaxRateRequest;
                toAmino(_: _13.QueryTaxRateRequest): _13.QueryTaxRateRequestAmino;
                fromAminoMsg(object: _13.QueryTaxRateRequestAminoMsg): _13.QueryTaxRateRequest;
                fromProtoMsg(message: _13.QueryTaxRateRequestProtoMsg): _13.QueryTaxRateRequest;
                toProto(message: _13.QueryTaxRateRequest): Uint8Array;
                toProtoMsg(message: _13.QueryTaxRateRequest): _13.QueryTaxRateRequestProtoMsg;
            };
            QueryTaxRateResponse: {
                typeUrl: string;
                encode(message: _13.QueryTaxRateResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _13.QueryTaxRateResponse;
                fromPartial(object: Partial<_13.QueryTaxRateResponse>): _13.QueryTaxRateResponse;
                fromAmino(object: _13.QueryTaxRateResponseAmino): _13.QueryTaxRateResponse;
                toAmino(message: _13.QueryTaxRateResponse): _13.QueryTaxRateResponseAmino;
                fromAminoMsg(object: _13.QueryTaxRateResponseAminoMsg): _13.QueryTaxRateResponse;
                fromProtoMsg(message: _13.QueryTaxRateResponseProtoMsg): _13.QueryTaxRateResponse;
                toProto(message: _13.QueryTaxRateResponse): Uint8Array;
                toProtoMsg(message: _13.QueryTaxRateResponse): _13.QueryTaxRateResponseProtoMsg;
            };
            QueryTaxCapRequest: {
                typeUrl: string;
                encode(message: _13.QueryTaxCapRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _13.QueryTaxCapRequest;
                fromPartial(object: Partial<_13.QueryTaxCapRequest>): _13.QueryTaxCapRequest;
                fromAmino(object: _13.QueryTaxCapRequestAmino): _13.QueryTaxCapRequest;
                toAmino(message: _13.QueryTaxCapRequest): _13.QueryTaxCapRequestAmino;
                fromAminoMsg(object: _13.QueryTaxCapRequestAminoMsg): _13.QueryTaxCapRequest;
                fromProtoMsg(message: _13.QueryTaxCapRequestProtoMsg): _13.QueryTaxCapRequest;
                toProto(message: _13.QueryTaxCapRequest): Uint8Array;
                toProtoMsg(message: _13.QueryTaxCapRequest): _13.QueryTaxCapRequestProtoMsg;
            };
            QueryTaxCapResponse: {
                typeUrl: string;
                encode(message: _13.QueryTaxCapResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _13.QueryTaxCapResponse;
                fromPartial(object: Partial<_13.QueryTaxCapResponse>): _13.QueryTaxCapResponse;
                fromAmino(object: _13.QueryTaxCapResponseAmino): _13.QueryTaxCapResponse;
                toAmino(message: _13.QueryTaxCapResponse): _13.QueryTaxCapResponseAmino;
                fromAminoMsg(object: _13.QueryTaxCapResponseAminoMsg): _13.QueryTaxCapResponse;
                fromProtoMsg(message: _13.QueryTaxCapResponseProtoMsg): _13.QueryTaxCapResponse;
                toProto(message: _13.QueryTaxCapResponse): Uint8Array;
                toProtoMsg(message: _13.QueryTaxCapResponse): _13.QueryTaxCapResponseProtoMsg;
            };
            QueryTaxCapsRequest: {
                typeUrl: string;
                encode(_: _13.QueryTaxCapsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _13.QueryTaxCapsRequest;
                fromPartial(_: Partial<_13.QueryTaxCapsRequest>): _13.QueryTaxCapsRequest;
                fromAmino(_: _13.QueryTaxCapsRequestAmino): _13.QueryTaxCapsRequest;
                toAmino(_: _13.QueryTaxCapsRequest): _13.QueryTaxCapsRequestAmino;
                fromAminoMsg(object: _13.QueryTaxCapsRequestAminoMsg): _13.QueryTaxCapsRequest;
                fromProtoMsg(message: _13.QueryTaxCapsRequestProtoMsg): _13.QueryTaxCapsRequest;
                toProto(message: _13.QueryTaxCapsRequest): Uint8Array;
                toProtoMsg(message: _13.QueryTaxCapsRequest): _13.QueryTaxCapsRequestProtoMsg;
            };
            QueryTaxCapsResponseItem: {
                typeUrl: string;
                encode(message: _13.QueryTaxCapsResponseItem, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _13.QueryTaxCapsResponseItem;
                fromPartial(object: Partial<_13.QueryTaxCapsResponseItem>): _13.QueryTaxCapsResponseItem;
                fromAmino(object: _13.QueryTaxCapsResponseItemAmino): _13.QueryTaxCapsResponseItem;
                toAmino(message: _13.QueryTaxCapsResponseItem): _13.QueryTaxCapsResponseItemAmino;
                fromAminoMsg(object: _13.QueryTaxCapsResponseItemAminoMsg): _13.QueryTaxCapsResponseItem;
                fromProtoMsg(message: _13.QueryTaxCapsResponseItemProtoMsg): _13.QueryTaxCapsResponseItem;
                toProto(message: _13.QueryTaxCapsResponseItem): Uint8Array;
                toProtoMsg(message: _13.QueryTaxCapsResponseItem): _13.QueryTaxCapsResponseItemProtoMsg;
            };
            QueryTaxCapsResponse: {
                typeUrl: string;
                encode(message: _13.QueryTaxCapsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _13.QueryTaxCapsResponse;
                fromPartial(object: Partial<_13.QueryTaxCapsResponse>): _13.QueryTaxCapsResponse;
                fromAmino(object: _13.QueryTaxCapsResponseAmino): _13.QueryTaxCapsResponse;
                toAmino(message: _13.QueryTaxCapsResponse): _13.QueryTaxCapsResponseAmino;
                fromAminoMsg(object: _13.QueryTaxCapsResponseAminoMsg): _13.QueryTaxCapsResponse;
                fromProtoMsg(message: _13.QueryTaxCapsResponseProtoMsg): _13.QueryTaxCapsResponse;
                toProto(message: _13.QueryTaxCapsResponse): Uint8Array;
                toProtoMsg(message: _13.QueryTaxCapsResponse): _13.QueryTaxCapsResponseProtoMsg;
            };
            QueryRewardWeightRequest: {
                typeUrl: string;
                encode(_: _13.QueryRewardWeightRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _13.QueryRewardWeightRequest;
                fromPartial(_: Partial<_13.QueryRewardWeightRequest>): _13.QueryRewardWeightRequest;
                fromAmino(_: _13.QueryRewardWeightRequestAmino): _13.QueryRewardWeightRequest;
                toAmino(_: _13.QueryRewardWeightRequest): _13.QueryRewardWeightRequestAmino;
                fromAminoMsg(object: _13.QueryRewardWeightRequestAminoMsg): _13.QueryRewardWeightRequest;
                fromProtoMsg(message: _13.QueryRewardWeightRequestProtoMsg): _13.QueryRewardWeightRequest;
                toProto(message: _13.QueryRewardWeightRequest): Uint8Array;
                toProtoMsg(message: _13.QueryRewardWeightRequest): _13.QueryRewardWeightRequestProtoMsg;
            };
            QueryRewardWeightResponse: {
                typeUrl: string;
                encode(message: _13.QueryRewardWeightResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _13.QueryRewardWeightResponse;
                fromPartial(object: Partial<_13.QueryRewardWeightResponse>): _13.QueryRewardWeightResponse;
                fromAmino(object: _13.QueryRewardWeightResponseAmino): _13.QueryRewardWeightResponse;
                toAmino(message: _13.QueryRewardWeightResponse): _13.QueryRewardWeightResponseAmino;
                fromAminoMsg(object: _13.QueryRewardWeightResponseAminoMsg): _13.QueryRewardWeightResponse;
                fromProtoMsg(message: _13.QueryRewardWeightResponseProtoMsg): _13.QueryRewardWeightResponse;
                toProto(message: _13.QueryRewardWeightResponse): Uint8Array;
                toProtoMsg(message: _13.QueryRewardWeightResponse): _13.QueryRewardWeightResponseProtoMsg;
            };
            QueryTaxProceedsRequest: {
                typeUrl: string;
                encode(_: _13.QueryTaxProceedsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _13.QueryTaxProceedsRequest;
                fromPartial(_: Partial<_13.QueryTaxProceedsRequest>): _13.QueryTaxProceedsRequest;
                fromAmino(_: _13.QueryTaxProceedsRequestAmino): _13.QueryTaxProceedsRequest;
                toAmino(_: _13.QueryTaxProceedsRequest): _13.QueryTaxProceedsRequestAmino;
                fromAminoMsg(object: _13.QueryTaxProceedsRequestAminoMsg): _13.QueryTaxProceedsRequest;
                fromProtoMsg(message: _13.QueryTaxProceedsRequestProtoMsg): _13.QueryTaxProceedsRequest;
                toProto(message: _13.QueryTaxProceedsRequest): Uint8Array;
                toProtoMsg(message: _13.QueryTaxProceedsRequest): _13.QueryTaxProceedsRequestProtoMsg;
            };
            QueryTaxProceedsResponse: {
                typeUrl: string;
                encode(message: _13.QueryTaxProceedsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _13.QueryTaxProceedsResponse;
                fromPartial(object: Partial<_13.QueryTaxProceedsResponse>): _13.QueryTaxProceedsResponse;
                fromAmino(object: _13.QueryTaxProceedsResponseAmino): _13.QueryTaxProceedsResponse;
                toAmino(message: _13.QueryTaxProceedsResponse): _13.QueryTaxProceedsResponseAmino;
                fromAminoMsg(object: _13.QueryTaxProceedsResponseAminoMsg): _13.QueryTaxProceedsResponse;
                fromProtoMsg(message: _13.QueryTaxProceedsResponseProtoMsg): _13.QueryTaxProceedsResponse;
                toProto(message: _13.QueryTaxProceedsResponse): Uint8Array;
                toProtoMsg(message: _13.QueryTaxProceedsResponse): _13.QueryTaxProceedsResponseProtoMsg;
            };
            QuerySeigniorageProceedsRequest: {
                typeUrl: string;
                encode(_: _13.QuerySeigniorageProceedsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _13.QuerySeigniorageProceedsRequest;
                fromPartial(_: Partial<_13.QuerySeigniorageProceedsRequest>): _13.QuerySeigniorageProceedsRequest;
                fromAmino(_: _13.QuerySeigniorageProceedsRequestAmino): _13.QuerySeigniorageProceedsRequest;
                toAmino(_: _13.QuerySeigniorageProceedsRequest): _13.QuerySeigniorageProceedsRequestAmino;
                fromAminoMsg(object: _13.QuerySeigniorageProceedsRequestAminoMsg): _13.QuerySeigniorageProceedsRequest;
                fromProtoMsg(message: _13.QuerySeigniorageProceedsRequestProtoMsg): _13.QuerySeigniorageProceedsRequest;
                toProto(message: _13.QuerySeigniorageProceedsRequest): Uint8Array;
                toProtoMsg(message: _13.QuerySeigniorageProceedsRequest): _13.QuerySeigniorageProceedsRequestProtoMsg;
            };
            QuerySeigniorageProceedsResponse: {
                typeUrl: string;
                encode(message: _13.QuerySeigniorageProceedsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _13.QuerySeigniorageProceedsResponse;
                fromPartial(object: Partial<_13.QuerySeigniorageProceedsResponse>): _13.QuerySeigniorageProceedsResponse;
                fromAmino(object: _13.QuerySeigniorageProceedsResponseAmino): _13.QuerySeigniorageProceedsResponse;
                toAmino(message: _13.QuerySeigniorageProceedsResponse): _13.QuerySeigniorageProceedsResponseAmino;
                fromAminoMsg(object: _13.QuerySeigniorageProceedsResponseAminoMsg): _13.QuerySeigniorageProceedsResponse;
                fromProtoMsg(message: _13.QuerySeigniorageProceedsResponseProtoMsg): _13.QuerySeigniorageProceedsResponse;
                toProto(message: _13.QuerySeigniorageProceedsResponse): Uint8Array;
                toProtoMsg(message: _13.QuerySeigniorageProceedsResponse): _13.QuerySeigniorageProceedsResponseProtoMsg;
            };
            QueryIndicatorsRequest: {
                typeUrl: string;
                encode(_: _13.QueryIndicatorsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _13.QueryIndicatorsRequest;
                fromPartial(_: Partial<_13.QueryIndicatorsRequest>): _13.QueryIndicatorsRequest;
                fromAmino(_: _13.QueryIndicatorsRequestAmino): _13.QueryIndicatorsRequest;
                toAmino(_: _13.QueryIndicatorsRequest): _13.QueryIndicatorsRequestAmino;
                fromAminoMsg(object: _13.QueryIndicatorsRequestAminoMsg): _13.QueryIndicatorsRequest;
                fromProtoMsg(message: _13.QueryIndicatorsRequestProtoMsg): _13.QueryIndicatorsRequest;
                toProto(message: _13.QueryIndicatorsRequest): Uint8Array;
                toProtoMsg(message: _13.QueryIndicatorsRequest): _13.QueryIndicatorsRequestProtoMsg;
            };
            QueryIndicatorsResponse: {
                typeUrl: string;
                encode(message: _13.QueryIndicatorsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _13.QueryIndicatorsResponse;
                fromPartial(object: Partial<_13.QueryIndicatorsResponse>): _13.QueryIndicatorsResponse;
                fromAmino(object: _13.QueryIndicatorsResponseAmino): _13.QueryIndicatorsResponse;
                toAmino(message: _13.QueryIndicatorsResponse): _13.QueryIndicatorsResponseAmino;
                fromAminoMsg(object: _13.QueryIndicatorsResponseAminoMsg): _13.QueryIndicatorsResponse;
                fromProtoMsg(message: _13.QueryIndicatorsResponseProtoMsg): _13.QueryIndicatorsResponse;
                toProto(message: _13.QueryIndicatorsResponse): Uint8Array;
                toProtoMsg(message: _13.QueryIndicatorsResponse): _13.QueryIndicatorsResponseProtoMsg;
            };
            QueryParamsRequest: {
                typeUrl: string;
                encode(_: _13.QueryParamsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _13.QueryParamsRequest;
                fromPartial(_: Partial<_13.QueryParamsRequest>): _13.QueryParamsRequest;
                fromAmino(_: _13.QueryParamsRequestAmino): _13.QueryParamsRequest;
                toAmino(_: _13.QueryParamsRequest): _13.QueryParamsRequestAmino;
                fromAminoMsg(object: _13.QueryParamsRequestAminoMsg): _13.QueryParamsRequest;
                fromProtoMsg(message: _13.QueryParamsRequestProtoMsg): _13.QueryParamsRequest;
                toProto(message: _13.QueryParamsRequest): Uint8Array;
                toProtoMsg(message: _13.QueryParamsRequest): _13.QueryParamsRequestProtoMsg;
            };
            QueryParamsResponse: {
                typeUrl: string;
                encode(message: _13.QueryParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _13.QueryParamsResponse;
                fromPartial(object: Partial<_13.QueryParamsResponse>): _13.QueryParamsResponse;
                fromAmino(object: _13.QueryParamsResponseAmino): _13.QueryParamsResponse;
                toAmino(message: _13.QueryParamsResponse): _13.QueryParamsResponseAmino;
                fromAminoMsg(object: _13.QueryParamsResponseAminoMsg): _13.QueryParamsResponse;
                fromProtoMsg(message: _13.QueryParamsResponseProtoMsg): _13.QueryParamsResponse;
                toProto(message: _13.QueryParamsResponse): Uint8Array;
                toProtoMsg(message: _13.QueryParamsResponse): _13.QueryParamsResponseProtoMsg;
            };
            QueryBurnTaxExemptionListRequest: {
                typeUrl: string;
                encode(message: _13.QueryBurnTaxExemptionListRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _13.QueryBurnTaxExemptionListRequest;
                fromPartial(object: Partial<_13.QueryBurnTaxExemptionListRequest>): _13.QueryBurnTaxExemptionListRequest;
                fromAmino(object: _13.QueryBurnTaxExemptionListRequestAmino): _13.QueryBurnTaxExemptionListRequest;
                toAmino(message: _13.QueryBurnTaxExemptionListRequest): _13.QueryBurnTaxExemptionListRequestAmino;
                fromAminoMsg(object: _13.QueryBurnTaxExemptionListRequestAminoMsg): _13.QueryBurnTaxExemptionListRequest;
                fromProtoMsg(message: _13.QueryBurnTaxExemptionListRequestProtoMsg): _13.QueryBurnTaxExemptionListRequest;
                toProto(message: _13.QueryBurnTaxExemptionListRequest): Uint8Array;
                toProtoMsg(message: _13.QueryBurnTaxExemptionListRequest): _13.QueryBurnTaxExemptionListRequestProtoMsg;
            };
            QueryBurnTaxExemptionListResponse: {
                typeUrl: string;
                encode(message: _13.QueryBurnTaxExemptionListResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _13.QueryBurnTaxExemptionListResponse;
                fromPartial(object: Partial<_13.QueryBurnTaxExemptionListResponse>): _13.QueryBurnTaxExemptionListResponse;
                fromAmino(object: _13.QueryBurnTaxExemptionListResponseAmino): _13.QueryBurnTaxExemptionListResponse;
                toAmino(message: _13.QueryBurnTaxExemptionListResponse): _13.QueryBurnTaxExemptionListResponseAmino;
                fromAminoMsg(object: _13.QueryBurnTaxExemptionListResponseAminoMsg): _13.QueryBurnTaxExemptionListResponse;
                fromProtoMsg(message: _13.QueryBurnTaxExemptionListResponseProtoMsg): _13.QueryBurnTaxExemptionListResponse;
                toProto(message: _13.QueryBurnTaxExemptionListResponse): Uint8Array;
                toProtoMsg(message: _13.QueryBurnTaxExemptionListResponse): _13.QueryBurnTaxExemptionListResponseProtoMsg;
            };
            AddBurnTaxExemptionAddressProposal: {
                typeUrl: string;
                encode(message: _12.AddBurnTaxExemptionAddressProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _12.AddBurnTaxExemptionAddressProposal;
                fromPartial(object: Partial<_12.AddBurnTaxExemptionAddressProposal>): _12.AddBurnTaxExemptionAddressProposal;
                fromAmino(object: _12.AddBurnTaxExemptionAddressProposalAmino): _12.AddBurnTaxExemptionAddressProposal;
                toAmino(message: _12.AddBurnTaxExemptionAddressProposal): _12.AddBurnTaxExemptionAddressProposalAmino;
                fromAminoMsg(object: _12.AddBurnTaxExemptionAddressProposalAminoMsg): _12.AddBurnTaxExemptionAddressProposal;
                fromProtoMsg(message: _12.AddBurnTaxExemptionAddressProposalProtoMsg): _12.AddBurnTaxExemptionAddressProposal;
                toProto(message: _12.AddBurnTaxExemptionAddressProposal): Uint8Array;
                toProtoMsg(message: _12.AddBurnTaxExemptionAddressProposal): _12.AddBurnTaxExemptionAddressProposalProtoMsg;
            };
            RemoveBurnTaxExemptionAddressProposal: {
                typeUrl: string;
                encode(message: _12.RemoveBurnTaxExemptionAddressProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _12.RemoveBurnTaxExemptionAddressProposal;
                fromPartial(object: Partial<_12.RemoveBurnTaxExemptionAddressProposal>): _12.RemoveBurnTaxExemptionAddressProposal;
                fromAmino(object: _12.RemoveBurnTaxExemptionAddressProposalAmino): _12.RemoveBurnTaxExemptionAddressProposal;
                toAmino(message: _12.RemoveBurnTaxExemptionAddressProposal): _12.RemoveBurnTaxExemptionAddressProposalAmino;
                fromAminoMsg(object: _12.RemoveBurnTaxExemptionAddressProposalAminoMsg): _12.RemoveBurnTaxExemptionAddressProposal;
                fromProtoMsg(message: _12.RemoveBurnTaxExemptionAddressProposalProtoMsg): _12.RemoveBurnTaxExemptionAddressProposal;
                toProto(message: _12.RemoveBurnTaxExemptionAddressProposal): Uint8Array;
                toProtoMsg(message: _12.RemoveBurnTaxExemptionAddressProposal): _12.RemoveBurnTaxExemptionAddressProposalProtoMsg;
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
            TaxCap: {
                typeUrl: string;
                encode(message: _11.TaxCap, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _11.TaxCap;
                fromPartial(object: Partial<_11.TaxCap>): _11.TaxCap;
                fromAmino(object: _11.TaxCapAmino): _11.TaxCap;
                toAmino(message: _11.TaxCap): _11.TaxCapAmino;
                fromAminoMsg(object: _11.TaxCapAminoMsg): _11.TaxCap;
                fromProtoMsg(message: _11.TaxCapProtoMsg): _11.TaxCap;
                toProto(message: _11.TaxCap): Uint8Array;
                toProtoMsg(message: _11.TaxCap): _11.TaxCapProtoMsg;
            };
            EpochState: {
                typeUrl: string;
                encode(message: _11.EpochState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _11.EpochState;
                fromPartial(object: Partial<_11.EpochState>): _11.EpochState;
                fromAmino(object: _11.EpochStateAmino): _11.EpochState;
                toAmino(message: _11.EpochState): _11.EpochStateAmino;
                fromAminoMsg(object: _11.EpochStateAminoMsg): _11.EpochState;
                fromProtoMsg(message: _11.EpochStateProtoMsg): _11.EpochState;
                toProto(message: _11.EpochState): Uint8Array;
                toProtoMsg(message: _11.EpochState): _11.EpochStateProtoMsg;
            };
        };
    }
    namespace tx {
        const v1beta1: {
            ServiceClientImpl: typeof _156.ServiceClientImpl;
            createRpcQueryExtension: (base: QueryClient) => {
                computeTax(request: _15.ComputeTaxRequest): Promise<_15.ComputeTaxResponse>;
            };
            ComputeTaxRequest: {
                typeUrl: string;
                encode(message: _15.ComputeTaxRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _15.ComputeTaxRequest;
                fromPartial(object: Partial<_15.ComputeTaxRequest>): _15.ComputeTaxRequest;
                fromAmino(object: _15.ComputeTaxRequestAmino): _15.ComputeTaxRequest;
                toAmino(message: _15.ComputeTaxRequest): _15.ComputeTaxRequestAmino;
                fromAminoMsg(object: _15.ComputeTaxRequestAminoMsg): _15.ComputeTaxRequest;
                fromProtoMsg(message: _15.ComputeTaxRequestProtoMsg): _15.ComputeTaxRequest;
                toProto(message: _15.ComputeTaxRequest): Uint8Array;
                toProtoMsg(message: _15.ComputeTaxRequest): _15.ComputeTaxRequestProtoMsg;
            };
            ComputeTaxResponse: {
                typeUrl: string;
                encode(message: _15.ComputeTaxResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _15.ComputeTaxResponse;
                fromPartial(object: Partial<_15.ComputeTaxResponse>): _15.ComputeTaxResponse;
                fromAmino(object: _15.ComputeTaxResponseAmino): _15.ComputeTaxResponse;
                toAmino(message: _15.ComputeTaxResponse): _15.ComputeTaxResponseAmino;
                fromAminoMsg(object: _15.ComputeTaxResponseAminoMsg): _15.ComputeTaxResponse;
                fromProtoMsg(message: _15.ComputeTaxResponseProtoMsg): _15.ComputeTaxResponse;
                toProto(message: _15.ComputeTaxResponse): Uint8Array;
                toProtoMsg(message: _15.ComputeTaxResponse): _15.ComputeTaxResponseProtoMsg;
            };
        };
    }
    namespace vesting {
        const v1beta1: {
            LazyGradedVestingAccount: {
                typeUrl: string;
                encode(message: _16.LazyGradedVestingAccount, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _16.LazyGradedVestingAccount;
                fromPartial(object: Partial<_16.LazyGradedVestingAccount>): _16.LazyGradedVestingAccount;
                fromAmino(object: _16.LazyGradedVestingAccountAmino): _16.LazyGradedVestingAccount;
                toAmino(message: _16.LazyGradedVestingAccount): _16.LazyGradedVestingAccountAmino;
                fromAminoMsg(object: _16.LazyGradedVestingAccountAminoMsg): _16.LazyGradedVestingAccount;
                fromProtoMsg(message: _16.LazyGradedVestingAccountProtoMsg): _16.LazyGradedVestingAccount;
                toProto(message: _16.LazyGradedVestingAccount): Uint8Array;
                toProtoMsg(message: _16.LazyGradedVestingAccount): _16.LazyGradedVestingAccountProtoMsg;
            };
            Schedule: {
                typeUrl: string;
                encode(message: _16.Schedule, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _16.Schedule;
                fromPartial(object: Partial<_16.Schedule>): _16.Schedule;
                fromAmino(object: _16.ScheduleAmino): _16.Schedule;
                toAmino(message: _16.Schedule): _16.ScheduleAmino;
                fromAminoMsg(object: _16.ScheduleAminoMsg): _16.Schedule;
                fromProtoMsg(message: _16.ScheduleProtoMsg): _16.Schedule;
                toProto(message: _16.Schedule): Uint8Array;
                toProtoMsg(message: _16.Schedule): _16.ScheduleProtoMsg;
            };
            VestingSchedule: {
                typeUrl: string;
                encode(message: _16.VestingSchedule, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _16.VestingSchedule;
                fromPartial(object: Partial<_16.VestingSchedule>): _16.VestingSchedule;
                fromAmino(object: _16.VestingScheduleAmino): _16.VestingSchedule;
                toAmino(message: _16.VestingSchedule): _16.VestingScheduleAmino;
                fromAminoMsg(object: _16.VestingScheduleAminoMsg): _16.VestingSchedule;
                fromProtoMsg(message: _16.VestingScheduleProtoMsg): _16.VestingSchedule;
                toProto(message: _16.VestingSchedule): Uint8Array;
                toProtoMsg(message: _16.VestingSchedule): _16.VestingScheduleProtoMsg;
            };
        };
    }
    namespace wasm {
        const v1beta1: {
            MsgClientImpl: typeof _159.MsgClientImpl;
            registry: readonly [string, GeneratedType][];
            load: (protoRegistry: Registry) => void;
            MessageComposer: {
                encoded: {
                    storeCode(value: _18.MsgStoreCode): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    migrateCode(value: _18.MsgMigrateCode): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    instantiateContract(value: _18.MsgInstantiateContract): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    executeContract(value: _18.MsgExecuteContract): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    migrateContract(value: _18.MsgMigrateContract): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    updateContractAdmin(value: _18.MsgUpdateContractAdmin): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    clearContractAdmin(value: _18.MsgClearContractAdmin): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    storeCode(value: _18.MsgStoreCode): {
                        typeUrl: string;
                        value: _18.MsgStoreCode;
                    };
                    migrateCode(value: _18.MsgMigrateCode): {
                        typeUrl: string;
                        value: _18.MsgMigrateCode;
                    };
                    instantiateContract(value: _18.MsgInstantiateContract): {
                        typeUrl: string;
                        value: _18.MsgInstantiateContract;
                    };
                    executeContract(value: _18.MsgExecuteContract): {
                        typeUrl: string;
                        value: _18.MsgExecuteContract;
                    };
                    migrateContract(value: _18.MsgMigrateContract): {
                        typeUrl: string;
                        value: _18.MsgMigrateContract;
                    };
                    updateContractAdmin(value: _18.MsgUpdateContractAdmin): {
                        typeUrl: string;
                        value: _18.MsgUpdateContractAdmin;
                    };
                    clearContractAdmin(value: _18.MsgClearContractAdmin): {
                        typeUrl: string;
                        value: _18.MsgClearContractAdmin;
                    };
                };
                fromJSON: {
                    storeCode(value: any): {
                        typeUrl: string;
                        value: _18.MsgStoreCode;
                    };
                    migrateCode(value: any): {
                        typeUrl: string;
                        value: _18.MsgMigrateCode;
                    };
                    instantiateContract(value: any): {
                        typeUrl: string;
                        value: _18.MsgInstantiateContract;
                    };
                    executeContract(value: any): {
                        typeUrl: string;
                        value: _18.MsgExecuteContract;
                    };
                    migrateContract(value: any): {
                        typeUrl: string;
                        value: _18.MsgMigrateContract;
                    };
                    updateContractAdmin(value: any): {
                        typeUrl: string;
                        value: _18.MsgUpdateContractAdmin;
                    };
                    clearContractAdmin(value: any): {
                        typeUrl: string;
                        value: _18.MsgClearContractAdmin;
                    };
                };
                fromPartial: {
                    storeCode(value: _18.MsgStoreCode): {
                        typeUrl: string;
                        value: _18.MsgStoreCode;
                    };
                    migrateCode(value: _18.MsgMigrateCode): {
                        typeUrl: string;
                        value: _18.MsgMigrateCode;
                    };
                    instantiateContract(value: _18.MsgInstantiateContract): {
                        typeUrl: string;
                        value: _18.MsgInstantiateContract;
                    };
                    executeContract(value: _18.MsgExecuteContract): {
                        typeUrl: string;
                        value: _18.MsgExecuteContract;
                    };
                    migrateContract(value: _18.MsgMigrateContract): {
                        typeUrl: string;
                        value: _18.MsgMigrateContract;
                    };
                    updateContractAdmin(value: _18.MsgUpdateContractAdmin): {
                        typeUrl: string;
                        value: _18.MsgUpdateContractAdmin;
                    };
                    clearContractAdmin(value: _18.MsgClearContractAdmin): {
                        typeUrl: string;
                        value: _18.MsgClearContractAdmin;
                    };
                };
            };
            AminoConverter: {
                "/terra.wasm.v1beta1.MsgStoreCode": {
                    aminoType: string;
                    toAmino: (message: _18.MsgStoreCode) => _18.MsgStoreCodeAmino;
                    fromAmino: (object: _18.MsgStoreCodeAmino) => _18.MsgStoreCode;
                };
                "/terra.wasm.v1beta1.MsgMigrateCode": {
                    aminoType: string;
                    toAmino: (message: _18.MsgMigrateCode) => _18.MsgMigrateCodeAmino;
                    fromAmino: (object: _18.MsgMigrateCodeAmino) => _18.MsgMigrateCode;
                };
                "/terra.wasm.v1beta1.MsgInstantiateContract": {
                    aminoType: string;
                    toAmino: (message: _18.MsgInstantiateContract) => _18.MsgInstantiateContractAmino;
                    fromAmino: (object: _18.MsgInstantiateContractAmino) => _18.MsgInstantiateContract;
                };
                "/terra.wasm.v1beta1.MsgExecuteContract": {
                    aminoType: string;
                    toAmino: (message: _18.MsgExecuteContract) => _18.MsgExecuteContractAmino;
                    fromAmino: (object: _18.MsgExecuteContractAmino) => _18.MsgExecuteContract;
                };
                "/terra.wasm.v1beta1.MsgMigrateContract": {
                    aminoType: string;
                    toAmino: (message: _18.MsgMigrateContract) => _18.MsgMigrateContractAmino;
                    fromAmino: (object: _18.MsgMigrateContractAmino) => _18.MsgMigrateContract;
                };
                "/terra.wasm.v1beta1.MsgUpdateContractAdmin": {
                    aminoType: string;
                    toAmino: (message: _18.MsgUpdateContractAdmin) => _18.MsgUpdateContractAdminAmino;
                    fromAmino: (object: _18.MsgUpdateContractAdminAmino) => _18.MsgUpdateContractAdmin;
                };
                "/terra.wasm.v1beta1.MsgClearContractAdmin": {
                    aminoType: string;
                    toAmino: (message: _18.MsgClearContractAdmin) => _18.MsgClearContractAdminAmino;
                    fromAmino: (object: _18.MsgClearContractAdminAmino) => _18.MsgClearContractAdmin;
                };
            };
            LegacyCodeInfo: {
                typeUrl: string;
                encode(message: _19.LegacyCodeInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _19.LegacyCodeInfo;
                fromPartial(object: Partial<_19.LegacyCodeInfo>): _19.LegacyCodeInfo;
                fromAmino(object: _19.LegacyCodeInfoAmino): _19.LegacyCodeInfo;
                toAmino(message: _19.LegacyCodeInfo): _19.LegacyCodeInfoAmino;
                fromAminoMsg(object: _19.LegacyCodeInfoAminoMsg): _19.LegacyCodeInfo;
                fromProtoMsg(message: _19.LegacyCodeInfoProtoMsg): _19.LegacyCodeInfo;
                toProto(message: _19.LegacyCodeInfo): Uint8Array;
                toProtoMsg(message: _19.LegacyCodeInfo): _19.LegacyCodeInfoProtoMsg;
            };
            LegacyContractInfo: {
                typeUrl: string;
                encode(message: _19.LegacyContractInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _19.LegacyContractInfo;
                fromPartial(object: Partial<_19.LegacyContractInfo>): _19.LegacyContractInfo;
                fromAmino(object: _19.LegacyContractInfoAmino): _19.LegacyContractInfo;
                toAmino(message: _19.LegacyContractInfo): _19.LegacyContractInfoAmino;
                fromAminoMsg(object: _19.LegacyContractInfoAminoMsg): _19.LegacyContractInfo;
                fromProtoMsg(message: _19.LegacyContractInfoProtoMsg): _19.LegacyContractInfo;
                toProto(message: _19.LegacyContractInfo): Uint8Array;
                toProtoMsg(message: _19.LegacyContractInfo): _19.LegacyContractInfoProtoMsg;
            };
            MsgStoreCode: {
                typeUrl: string;
                encode(message: _18.MsgStoreCode, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _18.MsgStoreCode;
                fromPartial(object: Partial<_18.MsgStoreCode>): _18.MsgStoreCode;
                fromAmino(object: _18.MsgStoreCodeAmino): _18.MsgStoreCode;
                toAmino(message: _18.MsgStoreCode): _18.MsgStoreCodeAmino;
                fromAminoMsg(object: _18.MsgStoreCodeAminoMsg): _18.MsgStoreCode;
                fromProtoMsg(message: _18.MsgStoreCodeProtoMsg): _18.MsgStoreCode;
                toProto(message: _18.MsgStoreCode): Uint8Array;
                toProtoMsg(message: _18.MsgStoreCode): _18.MsgStoreCodeProtoMsg;
            };
            MsgStoreCodeResponse: {
                typeUrl: string;
                encode(message: _18.MsgStoreCodeResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _18.MsgStoreCodeResponse;
                fromPartial(object: Partial<_18.MsgStoreCodeResponse>): _18.MsgStoreCodeResponse;
                fromAmino(object: _18.MsgStoreCodeResponseAmino): _18.MsgStoreCodeResponse;
                toAmino(message: _18.MsgStoreCodeResponse): _18.MsgStoreCodeResponseAmino;
                fromAminoMsg(object: _18.MsgStoreCodeResponseAminoMsg): _18.MsgStoreCodeResponse;
                fromProtoMsg(message: _18.MsgStoreCodeResponseProtoMsg): _18.MsgStoreCodeResponse;
                toProto(message: _18.MsgStoreCodeResponse): Uint8Array;
                toProtoMsg(message: _18.MsgStoreCodeResponse): _18.MsgStoreCodeResponseProtoMsg;
            };
            MsgMigrateCode: {
                typeUrl: string;
                encode(message: _18.MsgMigrateCode, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _18.MsgMigrateCode;
                fromPartial(object: Partial<_18.MsgMigrateCode>): _18.MsgMigrateCode;
                fromAmino(object: _18.MsgMigrateCodeAmino): _18.MsgMigrateCode;
                toAmino(message: _18.MsgMigrateCode): _18.MsgMigrateCodeAmino;
                fromAminoMsg(object: _18.MsgMigrateCodeAminoMsg): _18.MsgMigrateCode;
                fromProtoMsg(message: _18.MsgMigrateCodeProtoMsg): _18.MsgMigrateCode;
                toProto(message: _18.MsgMigrateCode): Uint8Array;
                toProtoMsg(message: _18.MsgMigrateCode): _18.MsgMigrateCodeProtoMsg;
            };
            MsgMigrateCodeResponse: {
                typeUrl: string;
                encode(_: _18.MsgMigrateCodeResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _18.MsgMigrateCodeResponse;
                fromPartial(_: Partial<_18.MsgMigrateCodeResponse>): _18.MsgMigrateCodeResponse;
                fromAmino(_: _18.MsgMigrateCodeResponseAmino): _18.MsgMigrateCodeResponse;
                toAmino(_: _18.MsgMigrateCodeResponse): _18.MsgMigrateCodeResponseAmino;
                fromAminoMsg(object: _18.MsgMigrateCodeResponseAminoMsg): _18.MsgMigrateCodeResponse;
                fromProtoMsg(message: _18.MsgMigrateCodeResponseProtoMsg): _18.MsgMigrateCodeResponse;
                toProto(message: _18.MsgMigrateCodeResponse): Uint8Array;
                toProtoMsg(message: _18.MsgMigrateCodeResponse): _18.MsgMigrateCodeResponseProtoMsg;
            };
            MsgInstantiateContract: {
                typeUrl: string;
                encode(message: _18.MsgInstantiateContract, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _18.MsgInstantiateContract;
                fromPartial(object: Partial<_18.MsgInstantiateContract>): _18.MsgInstantiateContract;
                fromAmino(object: _18.MsgInstantiateContractAmino): _18.MsgInstantiateContract;
                toAmino(message: _18.MsgInstantiateContract): _18.MsgInstantiateContractAmino;
                fromAminoMsg(object: _18.MsgInstantiateContractAminoMsg): _18.MsgInstantiateContract;
                fromProtoMsg(message: _18.MsgInstantiateContractProtoMsg): _18.MsgInstantiateContract;
                toProto(message: _18.MsgInstantiateContract): Uint8Array;
                toProtoMsg(message: _18.MsgInstantiateContract): _18.MsgInstantiateContractProtoMsg;
            };
            MsgInstantiateContractResponse: {
                typeUrl: string;
                encode(message: _18.MsgInstantiateContractResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _18.MsgInstantiateContractResponse;
                fromPartial(object: Partial<_18.MsgInstantiateContractResponse>): _18.MsgInstantiateContractResponse;
                fromAmino(object: _18.MsgInstantiateContractResponseAmino): _18.MsgInstantiateContractResponse;
                toAmino(message: _18.MsgInstantiateContractResponse): _18.MsgInstantiateContractResponseAmino;
                fromAminoMsg(object: _18.MsgInstantiateContractResponseAminoMsg): _18.MsgInstantiateContractResponse;
                fromProtoMsg(message: _18.MsgInstantiateContractResponseProtoMsg): _18.MsgInstantiateContractResponse;
                toProto(message: _18.MsgInstantiateContractResponse): Uint8Array;
                toProtoMsg(message: _18.MsgInstantiateContractResponse): _18.MsgInstantiateContractResponseProtoMsg;
            };
            MsgExecuteContract: {
                typeUrl: string;
                encode(message: _18.MsgExecuteContract, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _18.MsgExecuteContract;
                fromPartial(object: Partial<_18.MsgExecuteContract>): _18.MsgExecuteContract;
                fromAmino(object: _18.MsgExecuteContractAmino): _18.MsgExecuteContract;
                toAmino(message: _18.MsgExecuteContract): _18.MsgExecuteContractAmino;
                fromAminoMsg(object: _18.MsgExecuteContractAminoMsg): _18.MsgExecuteContract;
                fromProtoMsg(message: _18.MsgExecuteContractProtoMsg): _18.MsgExecuteContract;
                toProto(message: _18.MsgExecuteContract): Uint8Array;
                toProtoMsg(message: _18.MsgExecuteContract): _18.MsgExecuteContractProtoMsg;
            };
            MsgExecuteContractResponse: {
                typeUrl: string;
                encode(message: _18.MsgExecuteContractResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _18.MsgExecuteContractResponse;
                fromPartial(object: Partial<_18.MsgExecuteContractResponse>): _18.MsgExecuteContractResponse;
                fromAmino(object: _18.MsgExecuteContractResponseAmino): _18.MsgExecuteContractResponse;
                toAmino(message: _18.MsgExecuteContractResponse): _18.MsgExecuteContractResponseAmino;
                fromAminoMsg(object: _18.MsgExecuteContractResponseAminoMsg): _18.MsgExecuteContractResponse;
                fromProtoMsg(message: _18.MsgExecuteContractResponseProtoMsg): _18.MsgExecuteContractResponse;
                toProto(message: _18.MsgExecuteContractResponse): Uint8Array;
                toProtoMsg(message: _18.MsgExecuteContractResponse): _18.MsgExecuteContractResponseProtoMsg;
            };
            MsgMigrateContract: {
                typeUrl: string;
                encode(message: _18.MsgMigrateContract, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _18.MsgMigrateContract;
                fromPartial(object: Partial<_18.MsgMigrateContract>): _18.MsgMigrateContract;
                fromAmino(object: _18.MsgMigrateContractAmino): _18.MsgMigrateContract;
                toAmino(message: _18.MsgMigrateContract): _18.MsgMigrateContractAmino;
                fromAminoMsg(object: _18.MsgMigrateContractAminoMsg): _18.MsgMigrateContract;
                fromProtoMsg(message: _18.MsgMigrateContractProtoMsg): _18.MsgMigrateContract;
                toProto(message: _18.MsgMigrateContract): Uint8Array;
                toProtoMsg(message: _18.MsgMigrateContract): _18.MsgMigrateContractProtoMsg;
            };
            MsgMigrateContractResponse: {
                typeUrl: string;
                encode(message: _18.MsgMigrateContractResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _18.MsgMigrateContractResponse;
                fromPartial(object: Partial<_18.MsgMigrateContractResponse>): _18.MsgMigrateContractResponse;
                fromAmino(object: _18.MsgMigrateContractResponseAmino): _18.MsgMigrateContractResponse;
                toAmino(message: _18.MsgMigrateContractResponse): _18.MsgMigrateContractResponseAmino;
                fromAminoMsg(object: _18.MsgMigrateContractResponseAminoMsg): _18.MsgMigrateContractResponse;
                fromProtoMsg(message: _18.MsgMigrateContractResponseProtoMsg): _18.MsgMigrateContractResponse;
                toProto(message: _18.MsgMigrateContractResponse): Uint8Array;
                toProtoMsg(message: _18.MsgMigrateContractResponse): _18.MsgMigrateContractResponseProtoMsg;
            };
            MsgUpdateContractAdmin: {
                typeUrl: string;
                encode(message: _18.MsgUpdateContractAdmin, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _18.MsgUpdateContractAdmin;
                fromPartial(object: Partial<_18.MsgUpdateContractAdmin>): _18.MsgUpdateContractAdmin;
                fromAmino(object: _18.MsgUpdateContractAdminAmino): _18.MsgUpdateContractAdmin;
                toAmino(message: _18.MsgUpdateContractAdmin): _18.MsgUpdateContractAdminAmino;
                fromAminoMsg(object: _18.MsgUpdateContractAdminAminoMsg): _18.MsgUpdateContractAdmin;
                fromProtoMsg(message: _18.MsgUpdateContractAdminProtoMsg): _18.MsgUpdateContractAdmin;
                toProto(message: _18.MsgUpdateContractAdmin): Uint8Array;
                toProtoMsg(message: _18.MsgUpdateContractAdmin): _18.MsgUpdateContractAdminProtoMsg;
            };
            MsgUpdateContractAdminResponse: {
                typeUrl: string;
                encode(_: _18.MsgUpdateContractAdminResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _18.MsgUpdateContractAdminResponse;
                fromPartial(_: Partial<_18.MsgUpdateContractAdminResponse>): _18.MsgUpdateContractAdminResponse;
                fromAmino(_: _18.MsgUpdateContractAdminResponseAmino): _18.MsgUpdateContractAdminResponse;
                toAmino(_: _18.MsgUpdateContractAdminResponse): _18.MsgUpdateContractAdminResponseAmino;
                fromAminoMsg(object: _18.MsgUpdateContractAdminResponseAminoMsg): _18.MsgUpdateContractAdminResponse;
                fromProtoMsg(message: _18.MsgUpdateContractAdminResponseProtoMsg): _18.MsgUpdateContractAdminResponse;
                toProto(message: _18.MsgUpdateContractAdminResponse): Uint8Array;
                toProtoMsg(message: _18.MsgUpdateContractAdminResponse): _18.MsgUpdateContractAdminResponseProtoMsg;
            };
            MsgClearContractAdmin: {
                typeUrl: string;
                encode(message: _18.MsgClearContractAdmin, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _18.MsgClearContractAdmin;
                fromPartial(object: Partial<_18.MsgClearContractAdmin>): _18.MsgClearContractAdmin;
                fromAmino(object: _18.MsgClearContractAdminAmino): _18.MsgClearContractAdmin;
                toAmino(message: _18.MsgClearContractAdmin): _18.MsgClearContractAdminAmino;
                fromAminoMsg(object: _18.MsgClearContractAdminAminoMsg): _18.MsgClearContractAdmin;
                fromProtoMsg(message: _18.MsgClearContractAdminProtoMsg): _18.MsgClearContractAdmin;
                toProto(message: _18.MsgClearContractAdmin): Uint8Array;
                toProtoMsg(message: _18.MsgClearContractAdmin): _18.MsgClearContractAdminProtoMsg;
            };
            MsgClearContractAdminResponse: {
                typeUrl: string;
                encode(_: _18.MsgClearContractAdminResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _18.MsgClearContractAdminResponse;
                fromPartial(_: Partial<_18.MsgClearContractAdminResponse>): _18.MsgClearContractAdminResponse;
                fromAmino(_: _18.MsgClearContractAdminResponseAmino): _18.MsgClearContractAdminResponse;
                toAmino(_: _18.MsgClearContractAdminResponse): _18.MsgClearContractAdminResponseAmino;
                fromAminoMsg(object: _18.MsgClearContractAdminResponseAminoMsg): _18.MsgClearContractAdminResponse;
                fromProtoMsg(message: _18.MsgClearContractAdminResponseProtoMsg): _18.MsgClearContractAdminResponse;
                toProto(message: _18.MsgClearContractAdminResponse): Uint8Array;
                toProtoMsg(message: _18.MsgClearContractAdminResponse): _18.MsgClearContractAdminResponseProtoMsg;
            };
            Model: {
                typeUrl: string;
                encode(message: _17.Model, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _17.Model;
                fromPartial(object: Partial<_17.Model>): _17.Model;
                fromAmino(object: _17.ModelAmino): _17.Model;
                toAmino(message: _17.Model): _17.ModelAmino;
                fromAminoMsg(object: _17.ModelAminoMsg): _17.Model;
                fromProtoMsg(message: _17.ModelProtoMsg): _17.Model;
                toProto(message: _17.Model): Uint8Array;
                toProtoMsg(message: _17.Model): _17.ModelProtoMsg;
            };
            Code: {
                typeUrl: string;
                encode(message: _17.Code, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _17.Code;
                fromPartial(object: Partial<_17.Code>): _17.Code;
                fromAmino(object: _17.CodeAmino): _17.Code;
                toAmino(message: _17.Code): _17.CodeAmino;
                fromAminoMsg(object: _17.CodeAminoMsg): _17.Code;
                fromProtoMsg(message: _17.CodeProtoMsg): _17.Code;
                toProto(message: _17.Code): Uint8Array;
                toProtoMsg(message: _17.Code): _17.CodeProtoMsg;
            };
            Contract: {
                typeUrl: string;
                encode(message: _17.Contract, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _17.Contract;
                fromPartial(object: Partial<_17.Contract>): _17.Contract;
                fromAmino(object: _17.ContractAmino): _17.Contract;
                toAmino(message: _17.Contract): _17.ContractAmino;
                fromAminoMsg(object: _17.ContractAminoMsg): _17.Contract;
                fromProtoMsg(message: _17.ContractProtoMsg): _17.Contract;
                toProto(message: _17.Contract): Uint8Array;
                toProtoMsg(message: _17.Contract): _17.ContractProtoMsg;
            };
        };
    }
    const ClientFactory: {
        createRPCMsgClient: ({ rpc }: {
            rpc: import("../helpers").Rpc;
        }) => Promise<{
            terra: {
                market: {
                    v1beta1: _157.MsgClientImpl;
                };
                oracle: {
                    v1beta1: _158.MsgClientImpl;
                };
                wasm: {
                    v1beta1: _159.MsgClientImpl;
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
                    v1: import("../cosmos/gov/v1/tx.rpc.msg").MsgClientImpl;
                    v1beta1: import("../cosmos/gov/v1beta1/tx.rpc.msg").MsgClientImpl;
                };
                group: {
                    v1: import("../cosmos/group/v1/tx.rpc.msg").MsgClientImpl;
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
            rpcEndpoint: any;
        }) => Promise<{
            terra: {
                dyncomm: {
                    v1beta1: {
                        params(request?: _2.QueryParamsRequest): Promise<_2.QueryParamsResponse>;
                        rate(request: _2.QueryRateRequest): Promise<_2.QueryRateResponse>;
                    };
                };
                market: {
                    v1beta1: {
                        swap(request: _5.QuerySwapRequest): Promise<_5.QuerySwapResponse>;
                        terraPoolDelta(request?: _5.QueryTerraPoolDeltaRequest): Promise<_5.QueryTerraPoolDeltaResponse>;
                        params(request?: _5.QueryParamsRequest): Promise<_5.QueryParamsResponse>;
                    };
                };
                oracle: {
                    v1beta1: {
                        exchangeRate(request: _9.QueryExchangeRateRequest): Promise<_9.QueryExchangeRateResponse>;
                        exchangeRates(request?: _9.QueryExchangeRatesRequest): Promise<_9.QueryExchangeRatesResponse>;
                        tobinTax(request: _9.QueryTobinTaxRequest): Promise<_9.QueryTobinTaxResponse>;
                        tobinTaxes(request?: _9.QueryTobinTaxesRequest): Promise<_9.QueryTobinTaxesResponse>;
                        actives(request?: _9.QueryActivesRequest): Promise<_9.QueryActivesResponse>;
                        voteTargets(request?: _9.QueryVoteTargetsRequest): Promise<_9.QueryVoteTargetsResponse>;
                        feederDelegation(request: _9.QueryFeederDelegationRequest): Promise<_9.QueryFeederDelegationResponse>;
                        missCounter(request: _9.QueryMissCounterRequest): Promise<_9.QueryMissCounterResponse>;
                        aggregatePrevote(request: _9.QueryAggregatePrevoteRequest): Promise<_9.QueryAggregatePrevoteResponse>;
                        aggregatePrevotes(request?: _9.QueryAggregatePrevotesRequest): Promise<_9.QueryAggregatePrevotesResponse>;
                        aggregateVote(request: _9.QueryAggregateVoteRequest): Promise<_9.QueryAggregateVoteResponse>;
                        aggregateVotes(request?: _9.QueryAggregateVotesRequest): Promise<_9.QueryAggregateVotesResponse>;
                        params(request?: _9.QueryParamsRequest): Promise<_9.QueryParamsResponse>;
                    };
                };
                treasury: {
                    v1beta1: {
                        taxRate(request?: _13.QueryTaxRateRequest): Promise<_13.QueryTaxRateResponse>;
                        taxCap(request: _13.QueryTaxCapRequest): Promise<_13.QueryTaxCapResponse>;
                        taxCaps(request?: _13.QueryTaxCapsRequest): Promise<_13.QueryTaxCapsResponse>;
                        rewardWeight(request?: _13.QueryRewardWeightRequest): Promise<_13.QueryRewardWeightResponse>;
                        seigniorageProceeds(request?: _13.QuerySeigniorageProceedsRequest): Promise<_13.QuerySeigniorageProceedsResponse>;
                        taxProceeds(request?: _13.QueryTaxProceedsRequest): Promise<_13.QueryTaxProceedsResponse>;
                        indicators(request?: _13.QueryIndicatorsRequest): Promise<_13.QueryIndicatorsResponse>;
                        burnTaxExemptionList(request?: _13.QueryBurnTaxExemptionListRequest): Promise<_13.QueryBurnTaxExemptionListResponse>;
                        params(request?: _13.QueryParamsRequest): Promise<_13.QueryParamsResponse>;
                    };
                };
                tx: {
                    v1beta1: {
                        computeTax(request: _15.ComputeTaxRequest): Promise<_15.ComputeTaxResponse>;
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
            terra: {
                dyncomm: {
                    v1beta1: _148.LCDQueryClient;
                };
                market: {
                    v1beta1: _149.LCDQueryClient;
                };
                oracle: {
                    v1beta1: _150.LCDQueryClient;
                };
                treasury: {
                    v1beta1: _151.LCDQueryClient;
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
