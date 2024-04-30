import * as _0 from "./epochs/v1beta1/genesis";
import * as _1 from "./epochs/v1beta1/query";
import * as _2 from "./halving/v1beta1/genesis";
import * as _3 from "./halving/v1beta1/halving";
import * as _4 from "./halving/v1beta1/query";
import * as _5 from "./interchainquery/v1beta1/genesis";
import * as _6 from "./interchainquery/v1beta1/messages";
import * as _7 from "./interchainquery/v1beta1/query";
import * as _8 from "./oracle/v1beta1/genesis";
import * as _9 from "./oracle/v1beta1/oracle";
import * as _10 from "./oracle/v1beta1/query";
import * as _11 from "./oracle/v1beta1/tx";
import * as _202 from "./epochs/v1beta1/query.lcd";
import * as _203 from "./halving/v1beta1/query.lcd";
import * as _204 from "./oracle/v1beta1/query.lcd";
import * as _205 from "./epochs/v1beta1/query.rpc.Query";
import * as _206 from "./halving/v1beta1/query.rpc.Query";
import * as _207 from "./oracle/v1beta1/query.rpc.Query";
import * as _208 from "./interchainquery/v1beta1/messages.rpc.msg";
import * as _209 from "./oracle/v1beta1/tx.rpc.msg";
export declare namespace persistence {
    namespace epochs {
        const v1beta1: {
            QueryClientImpl: typeof _205.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                epochInfos(request?: _1.QueryEpochsInfoRequest): Promise<_1.QueryEpochsInfoResponse>;
                currentEpoch(request: _1.QueryCurrentEpochRequest): Promise<_1.QueryCurrentEpochResponse>;
            };
            LCDQueryClient: typeof _202.LCDQueryClient;
            QueryEpochsInfoRequest: {
                typeUrl: string;
                encode(_: _1.QueryEpochsInfoRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _1.QueryEpochsInfoRequest;
                fromPartial(_: Partial<_1.QueryEpochsInfoRequest>): _1.QueryEpochsInfoRequest;
                fromAmino(_: _1.QueryEpochsInfoRequestAmino): _1.QueryEpochsInfoRequest;
                toAmino(_: _1.QueryEpochsInfoRequest): _1.QueryEpochsInfoRequestAmino;
                fromAminoMsg(object: _1.QueryEpochsInfoRequestAminoMsg): _1.QueryEpochsInfoRequest;
                fromProtoMsg(message: _1.QueryEpochsInfoRequestProtoMsg): _1.QueryEpochsInfoRequest;
                toProto(message: _1.QueryEpochsInfoRequest): Uint8Array;
                toProtoMsg(message: _1.QueryEpochsInfoRequest): _1.QueryEpochsInfoRequestProtoMsg;
            };
            QueryEpochsInfoResponse: {
                typeUrl: string;
                encode(message: _1.QueryEpochsInfoResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _1.QueryEpochsInfoResponse;
                fromPartial(object: Partial<_1.QueryEpochsInfoResponse>): _1.QueryEpochsInfoResponse;
                fromAmino(object: _1.QueryEpochsInfoResponseAmino): _1.QueryEpochsInfoResponse;
                toAmino(message: _1.QueryEpochsInfoResponse): _1.QueryEpochsInfoResponseAmino;
                fromAminoMsg(object: _1.QueryEpochsInfoResponseAminoMsg): _1.QueryEpochsInfoResponse;
                fromProtoMsg(message: _1.QueryEpochsInfoResponseProtoMsg): _1.QueryEpochsInfoResponse;
                toProto(message: _1.QueryEpochsInfoResponse): Uint8Array;
                toProtoMsg(message: _1.QueryEpochsInfoResponse): _1.QueryEpochsInfoResponseProtoMsg;
            };
            QueryCurrentEpochRequest: {
                typeUrl: string;
                encode(message: _1.QueryCurrentEpochRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _1.QueryCurrentEpochRequest;
                fromPartial(object: Partial<_1.QueryCurrentEpochRequest>): _1.QueryCurrentEpochRequest;
                fromAmino(object: _1.QueryCurrentEpochRequestAmino): _1.QueryCurrentEpochRequest;
                toAmino(message: _1.QueryCurrentEpochRequest): _1.QueryCurrentEpochRequestAmino;
                fromAminoMsg(object: _1.QueryCurrentEpochRequestAminoMsg): _1.QueryCurrentEpochRequest;
                fromProtoMsg(message: _1.QueryCurrentEpochRequestProtoMsg): _1.QueryCurrentEpochRequest;
                toProto(message: _1.QueryCurrentEpochRequest): Uint8Array;
                toProtoMsg(message: _1.QueryCurrentEpochRequest): _1.QueryCurrentEpochRequestProtoMsg;
            };
            QueryCurrentEpochResponse: {
                typeUrl: string;
                encode(message: _1.QueryCurrentEpochResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _1.QueryCurrentEpochResponse;
                fromPartial(object: Partial<_1.QueryCurrentEpochResponse>): _1.QueryCurrentEpochResponse;
                fromAmino(object: _1.QueryCurrentEpochResponseAmino): _1.QueryCurrentEpochResponse;
                toAmino(message: _1.QueryCurrentEpochResponse): _1.QueryCurrentEpochResponseAmino;
                fromAminoMsg(object: _1.QueryCurrentEpochResponseAminoMsg): _1.QueryCurrentEpochResponse;
                fromProtoMsg(message: _1.QueryCurrentEpochResponseProtoMsg): _1.QueryCurrentEpochResponse;
                toProto(message: _1.QueryCurrentEpochResponse): Uint8Array;
                toProtoMsg(message: _1.QueryCurrentEpochResponse): _1.QueryCurrentEpochResponseProtoMsg;
            };
            EpochInfo: {
                typeUrl: string;
                encode(message: _0.EpochInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _0.EpochInfo;
                fromPartial(object: Partial<_0.EpochInfo>): _0.EpochInfo;
                fromAmino(object: _0.EpochInfoAmino): _0.EpochInfo;
                toAmino(message: _0.EpochInfo): _0.EpochInfoAmino;
                fromAminoMsg(object: _0.EpochInfoAminoMsg): _0.EpochInfo;
                fromProtoMsg(message: _0.EpochInfoProtoMsg): _0.EpochInfo;
                toProto(message: _0.EpochInfo): Uint8Array;
                toProtoMsg(message: _0.EpochInfo): _0.EpochInfoProtoMsg;
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
    namespace halving {
        const v1beta1: {
            QueryClientImpl: typeof _206.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                params(request?: _4.QueryParamsRequest): Promise<_4.QueryParamsResponse>;
            };
            LCDQueryClient: typeof _203.LCDQueryClient;
            QueryParamsRequest: {
                typeUrl: string;
                encode(_: _4.QueryParamsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _4.QueryParamsRequest;
                fromPartial(_: Partial<_4.QueryParamsRequest>): _4.QueryParamsRequest;
                fromAmino(_: _4.QueryParamsRequestAmino): _4.QueryParamsRequest;
                toAmino(_: _4.QueryParamsRequest): _4.QueryParamsRequestAmino;
                fromAminoMsg(object: _4.QueryParamsRequestAminoMsg): _4.QueryParamsRequest;
                fromProtoMsg(message: _4.QueryParamsRequestProtoMsg): _4.QueryParamsRequest;
                toProto(message: _4.QueryParamsRequest): Uint8Array;
                toProtoMsg(message: _4.QueryParamsRequest): _4.QueryParamsRequestProtoMsg;
            };
            QueryParamsResponse: {
                typeUrl: string;
                encode(message: _4.QueryParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _4.QueryParamsResponse;
                fromPartial(object: Partial<_4.QueryParamsResponse>): _4.QueryParamsResponse;
                fromAmino(object: _4.QueryParamsResponseAmino): _4.QueryParamsResponse;
                toAmino(message: _4.QueryParamsResponse): _4.QueryParamsResponseAmino;
                fromAminoMsg(object: _4.QueryParamsResponseAminoMsg): _4.QueryParamsResponse;
                fromProtoMsg(message: _4.QueryParamsResponseProtoMsg): _4.QueryParamsResponse;
                toProto(message: _4.QueryParamsResponse): Uint8Array;
                toProtoMsg(message: _4.QueryParamsResponse): _4.QueryParamsResponseProtoMsg;
            };
            Params: {
                typeUrl: string;
                encode(message: _3.Params, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _3.Params;
                fromPartial(object: Partial<_3.Params>): _3.Params;
                fromAmino(object: _3.ParamsAmino): _3.Params;
                toAmino(message: _3.Params): _3.ParamsAmino;
                fromAminoMsg(object: _3.ParamsAminoMsg): _3.Params;
                fromProtoMsg(message: _3.ParamsProtoMsg): _3.Params;
                toProto(message: _3.Params): Uint8Array;
                toProtoMsg(message: _3.Params): _3.ParamsProtoMsg;
            };
            GenesisState: {
                typeUrl: string;
                encode(message: _2.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _2.GenesisState;
                fromPartial(object: Partial<_2.GenesisState>): _2.GenesisState;
                fromAmino(object: _2.GenesisStateAmino): _2.GenesisState;
                toAmino(message: _2.GenesisState): _2.GenesisStateAmino;
                fromAminoMsg(object: _2.GenesisStateAminoMsg): _2.GenesisState;
                fromProtoMsg(message: _2.GenesisStateProtoMsg): _2.GenesisState;
                toProto(message: _2.GenesisState): Uint8Array;
                toProtoMsg(message: _2.GenesisState): _2.GenesisStateProtoMsg;
            };
        };
    }
    namespace interchainquery {
        const v1beta1: {
            MsgClientImpl: typeof _208.MsgClientImpl;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    submitQueryResponse(value: _6.MsgSubmitQueryResponse): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    submitQueryResponse(value: _6.MsgSubmitQueryResponse): {
                        typeUrl: string;
                        value: _6.MsgSubmitQueryResponse;
                    };
                };
                fromJSON: {
                    submitQueryResponse(value: any): {
                        typeUrl: string;
                        value: _6.MsgSubmitQueryResponse;
                    };
                };
                fromPartial: {
                    submitQueryResponse(value: _6.MsgSubmitQueryResponse): {
                        typeUrl: string;
                        value: _6.MsgSubmitQueryResponse;
                    };
                };
            };
            AminoConverter: {
                "/persistence.interchainquery.v1beta1.MsgSubmitQueryResponse": {
                    aminoType: string;
                    toAmino: (message: _6.MsgSubmitQueryResponse) => _6.MsgSubmitQueryResponseAmino;
                    fromAmino: (object: _6.MsgSubmitQueryResponseAmino) => _6.MsgSubmitQueryResponse;
                };
            };
            QueryRequestsRequest: {
                typeUrl: string;
                encode(message: _7.QueryRequestsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _7.QueryRequestsRequest;
                fromPartial(object: Partial<_7.QueryRequestsRequest>): _7.QueryRequestsRequest;
                fromAmino(object: _7.QueryRequestsRequestAmino): _7.QueryRequestsRequest;
                toAmino(message: _7.QueryRequestsRequest): _7.QueryRequestsRequestAmino;
                fromAminoMsg(object: _7.QueryRequestsRequestAminoMsg): _7.QueryRequestsRequest;
                fromProtoMsg(message: _7.QueryRequestsRequestProtoMsg): _7.QueryRequestsRequest;
                toProto(message: _7.QueryRequestsRequest): Uint8Array;
                toProtoMsg(message: _7.QueryRequestsRequest): _7.QueryRequestsRequestProtoMsg;
            };
            QueryRequestsResponse: {
                typeUrl: string;
                encode(message: _7.QueryRequestsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _7.QueryRequestsResponse;
                fromPartial(object: Partial<_7.QueryRequestsResponse>): _7.QueryRequestsResponse;
                fromAmino(object: _7.QueryRequestsResponseAmino): _7.QueryRequestsResponse;
                toAmino(message: _7.QueryRequestsResponse): _7.QueryRequestsResponseAmino;
                fromAminoMsg(object: _7.QueryRequestsResponseAminoMsg): _7.QueryRequestsResponse;
                fromProtoMsg(message: _7.QueryRequestsResponseProtoMsg): _7.QueryRequestsResponse;
                toProto(message: _7.QueryRequestsResponse): Uint8Array;
                toProtoMsg(message: _7.QueryRequestsResponse): _7.QueryRequestsResponseProtoMsg;
            };
            GetTxWithProofResponse: {
                typeUrl: string;
                encode(message: _7.GetTxWithProofResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _7.GetTxWithProofResponse;
                fromPartial(object: Partial<_7.GetTxWithProofResponse>): _7.GetTxWithProofResponse;
                fromAmino(object: _7.GetTxWithProofResponseAmino): _7.GetTxWithProofResponse;
                toAmino(message: _7.GetTxWithProofResponse): _7.GetTxWithProofResponseAmino;
                fromAminoMsg(object: _7.GetTxWithProofResponseAminoMsg): _7.GetTxWithProofResponse;
                fromProtoMsg(message: _7.GetTxWithProofResponseProtoMsg): _7.GetTxWithProofResponse;
                toProto(message: _7.GetTxWithProofResponse): Uint8Array;
                toProtoMsg(message: _7.GetTxWithProofResponse): _7.GetTxWithProofResponseProtoMsg;
            };
            MsgSubmitQueryResponse: {
                typeUrl: string;
                encode(message: _6.MsgSubmitQueryResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _6.MsgSubmitQueryResponse;
                fromPartial(object: Partial<_6.MsgSubmitQueryResponse>): _6.MsgSubmitQueryResponse;
                fromAmino(object: _6.MsgSubmitQueryResponseAmino): _6.MsgSubmitQueryResponse;
                toAmino(message: _6.MsgSubmitQueryResponse): _6.MsgSubmitQueryResponseAmino;
                fromAminoMsg(object: _6.MsgSubmitQueryResponseAminoMsg): _6.MsgSubmitQueryResponse;
                fromProtoMsg(message: _6.MsgSubmitQueryResponseProtoMsg): _6.MsgSubmitQueryResponse;
                toProto(message: _6.MsgSubmitQueryResponse): Uint8Array;
                toProtoMsg(message: _6.MsgSubmitQueryResponse): _6.MsgSubmitQueryResponseProtoMsg;
            };
            MsgSubmitQueryResponseResponse: {
                typeUrl: string;
                encode(_: _6.MsgSubmitQueryResponseResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _6.MsgSubmitQueryResponseResponse;
                fromPartial(_: Partial<_6.MsgSubmitQueryResponseResponse>): _6.MsgSubmitQueryResponseResponse;
                fromAmino(_: _6.MsgSubmitQueryResponseResponseAmino): _6.MsgSubmitQueryResponseResponse;
                toAmino(_: _6.MsgSubmitQueryResponseResponse): _6.MsgSubmitQueryResponseResponseAmino;
                fromAminoMsg(object: _6.MsgSubmitQueryResponseResponseAminoMsg): _6.MsgSubmitQueryResponseResponse;
                fromProtoMsg(message: _6.MsgSubmitQueryResponseResponseProtoMsg): _6.MsgSubmitQueryResponseResponse;
                toProto(message: _6.MsgSubmitQueryResponseResponse): Uint8Array;
                toProtoMsg(message: _6.MsgSubmitQueryResponseResponse): _6.MsgSubmitQueryResponseResponseProtoMsg;
            };
            Query: {
                typeUrl: string;
                encode(message: _5.Query, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _5.Query;
                fromPartial(object: Partial<_5.Query>): _5.Query;
                fromAmino(object: _5.QueryAmino): _5.Query;
                toAmino(message: _5.Query): _5.QueryAmino;
                fromAminoMsg(object: _5.QueryAminoMsg): _5.Query;
                fromProtoMsg(message: _5.QueryProtoMsg): _5.Query;
                toProto(message: _5.Query): Uint8Array;
                toProtoMsg(message: _5.Query): _5.QueryProtoMsg;
            };
            DataPoint: {
                typeUrl: string;
                encode(message: _5.DataPoint, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _5.DataPoint;
                fromPartial(object: Partial<_5.DataPoint>): _5.DataPoint;
                fromAmino(object: _5.DataPointAmino): _5.DataPoint;
                toAmino(message: _5.DataPoint): _5.DataPointAmino;
                fromAminoMsg(object: _5.DataPointAminoMsg): _5.DataPoint;
                fromProtoMsg(message: _5.DataPointProtoMsg): _5.DataPoint;
                toProto(message: _5.DataPoint): Uint8Array;
                toProtoMsg(message: _5.DataPoint): _5.DataPointProtoMsg;
            };
            GenesisState: {
                typeUrl: string;
                encode(message: _5.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _5.GenesisState;
                fromPartial(object: Partial<_5.GenesisState>): _5.GenesisState;
                fromAmino(object: _5.GenesisStateAmino): _5.GenesisState;
                toAmino(message: _5.GenesisState): _5.GenesisStateAmino;
                fromAminoMsg(object: _5.GenesisStateAminoMsg): _5.GenesisState;
                fromProtoMsg(message: _5.GenesisStateProtoMsg): _5.GenesisState;
                toProto(message: _5.GenesisState): Uint8Array;
                toProtoMsg(message: _5.GenesisState): _5.GenesisStateProtoMsg;
            };
        };
    }
    namespace oracle {
        const v1beta1: {
            MsgClientImpl: typeof _209.MsgClientImpl;
            QueryClientImpl: typeof _207.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                allExchangeRates(request?: _10.QueryAllExchangeRatesRequest): Promise<_10.QueryAllExchangeRatesResponse>;
                exchangeRate(request: _10.QueryExchangeRateRequest): Promise<_10.QueryExchangeRateResponse>;
                activeExchangeRates(request?: _10.QueryActiveExchangeRatesRequest): Promise<_10.QueryActiveExchangeRatesResponse>;
                feederDelegation(request: _10.QueryFeederDelegationRequest): Promise<_10.QueryFeederDelegationResponse>;
                missCounter(request: _10.QueryMissCounterRequest): Promise<_10.QueryMissCounterResponse>;
                aggregatePrevote(request: _10.QueryAggregatePrevoteRequest): Promise<_10.QueryAggregatePrevoteResponse>;
                aggregatePrevotes(request?: _10.QueryAggregatePrevotesRequest): Promise<_10.QueryAggregatePrevotesResponse>;
                aggregateVote(request: _10.QueryAggregateVoteRequest): Promise<_10.QueryAggregateVoteResponse>;
                aggregateVotes(request?: _10.QueryAggregateVotesRequest): Promise<_10.QueryAggregateVotesResponse>;
                params(request?: _10.QueryParamsRequest): Promise<_10.QueryParamsResponse>;
                queryRewardPoolBalance(request?: _10.QueryRewardPoolBalanceRequest): Promise<_10.QueryRewardPoolBalanceResponse>;
            };
            LCDQueryClient: typeof _204.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    aggregateExchangeRatePrevote(value: _11.MsgAggregateExchangeRatePrevote): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    aggregateExchangeRateVote(value: _11.MsgAggregateExchangeRateVote): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    delegateFeedConsent(value: _11.MsgDelegateFeedConsent): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    addFundsToRewardPool(value: _11.MsgAddFundsToRewardPool): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    aggregateExchangeRatePrevote(value: _11.MsgAggregateExchangeRatePrevote): {
                        typeUrl: string;
                        value: _11.MsgAggregateExchangeRatePrevote;
                    };
                    aggregateExchangeRateVote(value: _11.MsgAggregateExchangeRateVote): {
                        typeUrl: string;
                        value: _11.MsgAggregateExchangeRateVote;
                    };
                    delegateFeedConsent(value: _11.MsgDelegateFeedConsent): {
                        typeUrl: string;
                        value: _11.MsgDelegateFeedConsent;
                    };
                    addFundsToRewardPool(value: _11.MsgAddFundsToRewardPool): {
                        typeUrl: string;
                        value: _11.MsgAddFundsToRewardPool;
                    };
                };
                fromJSON: {
                    aggregateExchangeRatePrevote(value: any): {
                        typeUrl: string;
                        value: _11.MsgAggregateExchangeRatePrevote;
                    };
                    aggregateExchangeRateVote(value: any): {
                        typeUrl: string;
                        value: _11.MsgAggregateExchangeRateVote;
                    };
                    delegateFeedConsent(value: any): {
                        typeUrl: string;
                        value: _11.MsgDelegateFeedConsent;
                    };
                    addFundsToRewardPool(value: any): {
                        typeUrl: string;
                        value: _11.MsgAddFundsToRewardPool;
                    };
                };
                fromPartial: {
                    aggregateExchangeRatePrevote(value: _11.MsgAggregateExchangeRatePrevote): {
                        typeUrl: string;
                        value: _11.MsgAggregateExchangeRatePrevote;
                    };
                    aggregateExchangeRateVote(value: _11.MsgAggregateExchangeRateVote): {
                        typeUrl: string;
                        value: _11.MsgAggregateExchangeRateVote;
                    };
                    delegateFeedConsent(value: _11.MsgDelegateFeedConsent): {
                        typeUrl: string;
                        value: _11.MsgDelegateFeedConsent;
                    };
                    addFundsToRewardPool(value: _11.MsgAddFundsToRewardPool): {
                        typeUrl: string;
                        value: _11.MsgAddFundsToRewardPool;
                    };
                };
            };
            AminoConverter: {
                "/persistence.oracle.v1beta1.MsgAggregateExchangeRatePrevote": {
                    aminoType: string;
                    toAmino: (message: _11.MsgAggregateExchangeRatePrevote) => _11.MsgAggregateExchangeRatePrevoteAmino;
                    fromAmino: (object: _11.MsgAggregateExchangeRatePrevoteAmino) => _11.MsgAggregateExchangeRatePrevote;
                };
                "/persistence.oracle.v1beta1.MsgAggregateExchangeRateVote": {
                    aminoType: string;
                    toAmino: (message: _11.MsgAggregateExchangeRateVote) => _11.MsgAggregateExchangeRateVoteAmino;
                    fromAmino: (object: _11.MsgAggregateExchangeRateVoteAmino) => _11.MsgAggregateExchangeRateVote;
                };
                "/persistence.oracle.v1beta1.MsgDelegateFeedConsent": {
                    aminoType: string;
                    toAmino: (message: _11.MsgDelegateFeedConsent) => _11.MsgDelegateFeedConsentAmino;
                    fromAmino: (object: _11.MsgDelegateFeedConsentAmino) => _11.MsgDelegateFeedConsent;
                };
                "/persistence.oracle.v1beta1.MsgAddFundsToRewardPool": {
                    aminoType: string;
                    toAmino: (message: _11.MsgAddFundsToRewardPool) => _11.MsgAddFundsToRewardPoolAmino;
                    fromAmino: (object: _11.MsgAddFundsToRewardPoolAmino) => _11.MsgAddFundsToRewardPool;
                };
            };
            MsgAggregateExchangeRatePrevote: {
                typeUrl: string;
                encode(message: _11.MsgAggregateExchangeRatePrevote, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _11.MsgAggregateExchangeRatePrevote;
                fromPartial(object: Partial<_11.MsgAggregateExchangeRatePrevote>): _11.MsgAggregateExchangeRatePrevote;
                fromAmino(object: _11.MsgAggregateExchangeRatePrevoteAmino): _11.MsgAggregateExchangeRatePrevote;
                toAmino(message: _11.MsgAggregateExchangeRatePrevote): _11.MsgAggregateExchangeRatePrevoteAmino;
                fromAminoMsg(object: _11.MsgAggregateExchangeRatePrevoteAminoMsg): _11.MsgAggregateExchangeRatePrevote;
                fromProtoMsg(message: _11.MsgAggregateExchangeRatePrevoteProtoMsg): _11.MsgAggregateExchangeRatePrevote;
                toProto(message: _11.MsgAggregateExchangeRatePrevote): Uint8Array;
                toProtoMsg(message: _11.MsgAggregateExchangeRatePrevote): _11.MsgAggregateExchangeRatePrevoteProtoMsg;
            };
            MsgAggregateExchangeRatePrevoteResponse: {
                typeUrl: string;
                encode(_: _11.MsgAggregateExchangeRatePrevoteResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _11.MsgAggregateExchangeRatePrevoteResponse;
                fromPartial(_: Partial<_11.MsgAggregateExchangeRatePrevoteResponse>): _11.MsgAggregateExchangeRatePrevoteResponse;
                fromAmino(_: _11.MsgAggregateExchangeRatePrevoteResponseAmino): _11.MsgAggregateExchangeRatePrevoteResponse;
                toAmino(_: _11.MsgAggregateExchangeRatePrevoteResponse): _11.MsgAggregateExchangeRatePrevoteResponseAmino;
                fromAminoMsg(object: _11.MsgAggregateExchangeRatePrevoteResponseAminoMsg): _11.MsgAggregateExchangeRatePrevoteResponse;
                fromProtoMsg(message: _11.MsgAggregateExchangeRatePrevoteResponseProtoMsg): _11.MsgAggregateExchangeRatePrevoteResponse;
                toProto(message: _11.MsgAggregateExchangeRatePrevoteResponse): Uint8Array;
                toProtoMsg(message: _11.MsgAggregateExchangeRatePrevoteResponse): _11.MsgAggregateExchangeRatePrevoteResponseProtoMsg;
            };
            MsgAggregateExchangeRateVote: {
                typeUrl: string;
                encode(message: _11.MsgAggregateExchangeRateVote, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _11.MsgAggregateExchangeRateVote;
                fromPartial(object: Partial<_11.MsgAggregateExchangeRateVote>): _11.MsgAggregateExchangeRateVote;
                fromAmino(object: _11.MsgAggregateExchangeRateVoteAmino): _11.MsgAggregateExchangeRateVote;
                toAmino(message: _11.MsgAggregateExchangeRateVote): _11.MsgAggregateExchangeRateVoteAmino;
                fromAminoMsg(object: _11.MsgAggregateExchangeRateVoteAminoMsg): _11.MsgAggregateExchangeRateVote;
                fromProtoMsg(message: _11.MsgAggregateExchangeRateVoteProtoMsg): _11.MsgAggregateExchangeRateVote;
                toProto(message: _11.MsgAggregateExchangeRateVote): Uint8Array;
                toProtoMsg(message: _11.MsgAggregateExchangeRateVote): _11.MsgAggregateExchangeRateVoteProtoMsg;
            };
            MsgAggregateExchangeRateVoteResponse: {
                typeUrl: string;
                encode(_: _11.MsgAggregateExchangeRateVoteResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _11.MsgAggregateExchangeRateVoteResponse;
                fromPartial(_: Partial<_11.MsgAggregateExchangeRateVoteResponse>): _11.MsgAggregateExchangeRateVoteResponse;
                fromAmino(_: _11.MsgAggregateExchangeRateVoteResponseAmino): _11.MsgAggregateExchangeRateVoteResponse;
                toAmino(_: _11.MsgAggregateExchangeRateVoteResponse): _11.MsgAggregateExchangeRateVoteResponseAmino;
                fromAminoMsg(object: _11.MsgAggregateExchangeRateVoteResponseAminoMsg): _11.MsgAggregateExchangeRateVoteResponse;
                fromProtoMsg(message: _11.MsgAggregateExchangeRateVoteResponseProtoMsg): _11.MsgAggregateExchangeRateVoteResponse;
                toProto(message: _11.MsgAggregateExchangeRateVoteResponse): Uint8Array;
                toProtoMsg(message: _11.MsgAggregateExchangeRateVoteResponse): _11.MsgAggregateExchangeRateVoteResponseProtoMsg;
            };
            MsgDelegateFeedConsent: {
                typeUrl: string;
                encode(message: _11.MsgDelegateFeedConsent, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _11.MsgDelegateFeedConsent;
                fromPartial(object: Partial<_11.MsgDelegateFeedConsent>): _11.MsgDelegateFeedConsent;
                fromAmino(object: _11.MsgDelegateFeedConsentAmino): _11.MsgDelegateFeedConsent;
                toAmino(message: _11.MsgDelegateFeedConsent): _11.MsgDelegateFeedConsentAmino;
                fromAminoMsg(object: _11.MsgDelegateFeedConsentAminoMsg): _11.MsgDelegateFeedConsent;
                fromProtoMsg(message: _11.MsgDelegateFeedConsentProtoMsg): _11.MsgDelegateFeedConsent;
                toProto(message: _11.MsgDelegateFeedConsent): Uint8Array;
                toProtoMsg(message: _11.MsgDelegateFeedConsent): _11.MsgDelegateFeedConsentProtoMsg;
            };
            MsgDelegateFeedConsentResponse: {
                typeUrl: string;
                encode(_: _11.MsgDelegateFeedConsentResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _11.MsgDelegateFeedConsentResponse;
                fromPartial(_: Partial<_11.MsgDelegateFeedConsentResponse>): _11.MsgDelegateFeedConsentResponse;
                fromAmino(_: _11.MsgDelegateFeedConsentResponseAmino): _11.MsgDelegateFeedConsentResponse;
                toAmino(_: _11.MsgDelegateFeedConsentResponse): _11.MsgDelegateFeedConsentResponseAmino;
                fromAminoMsg(object: _11.MsgDelegateFeedConsentResponseAminoMsg): _11.MsgDelegateFeedConsentResponse;
                fromProtoMsg(message: _11.MsgDelegateFeedConsentResponseProtoMsg): _11.MsgDelegateFeedConsentResponse;
                toProto(message: _11.MsgDelegateFeedConsentResponse): Uint8Array;
                toProtoMsg(message: _11.MsgDelegateFeedConsentResponse): _11.MsgDelegateFeedConsentResponseProtoMsg;
            };
            MsgAddFundsToRewardPool: {
                typeUrl: string;
                encode(message: _11.MsgAddFundsToRewardPool, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _11.MsgAddFundsToRewardPool;
                fromPartial(object: Partial<_11.MsgAddFundsToRewardPool>): _11.MsgAddFundsToRewardPool;
                fromAmino(object: _11.MsgAddFundsToRewardPoolAmino): _11.MsgAddFundsToRewardPool;
                toAmino(message: _11.MsgAddFundsToRewardPool): _11.MsgAddFundsToRewardPoolAmino;
                fromAminoMsg(object: _11.MsgAddFundsToRewardPoolAminoMsg): _11.MsgAddFundsToRewardPool;
                fromProtoMsg(message: _11.MsgAddFundsToRewardPoolProtoMsg): _11.MsgAddFundsToRewardPool;
                toProto(message: _11.MsgAddFundsToRewardPool): Uint8Array;
                toProtoMsg(message: _11.MsgAddFundsToRewardPool): _11.MsgAddFundsToRewardPoolProtoMsg;
            };
            MsgAddFundsToRewardPoolResponse: {
                typeUrl: string;
                encode(_: _11.MsgAddFundsToRewardPoolResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _11.MsgAddFundsToRewardPoolResponse;
                fromPartial(_: Partial<_11.MsgAddFundsToRewardPoolResponse>): _11.MsgAddFundsToRewardPoolResponse;
                fromAmino(_: _11.MsgAddFundsToRewardPoolResponseAmino): _11.MsgAddFundsToRewardPoolResponse;
                toAmino(_: _11.MsgAddFundsToRewardPoolResponse): _11.MsgAddFundsToRewardPoolResponseAmino;
                fromAminoMsg(object: _11.MsgAddFundsToRewardPoolResponseAminoMsg): _11.MsgAddFundsToRewardPoolResponse;
                fromProtoMsg(message: _11.MsgAddFundsToRewardPoolResponseProtoMsg): _11.MsgAddFundsToRewardPoolResponse;
                toProto(message: _11.MsgAddFundsToRewardPoolResponse): Uint8Array;
                toProtoMsg(message: _11.MsgAddFundsToRewardPoolResponse): _11.MsgAddFundsToRewardPoolResponseProtoMsg;
            };
            QueryExchangeRateRequest: {
                typeUrl: string;
                encode(message: _10.QueryExchangeRateRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _10.QueryExchangeRateRequest;
                fromPartial(object: Partial<_10.QueryExchangeRateRequest>): _10.QueryExchangeRateRequest;
                fromAmino(object: _10.QueryExchangeRateRequestAmino): _10.QueryExchangeRateRequest;
                toAmino(message: _10.QueryExchangeRateRequest): _10.QueryExchangeRateRequestAmino;
                fromAminoMsg(object: _10.QueryExchangeRateRequestAminoMsg): _10.QueryExchangeRateRequest;
                fromProtoMsg(message: _10.QueryExchangeRateRequestProtoMsg): _10.QueryExchangeRateRequest;
                toProto(message: _10.QueryExchangeRateRequest): Uint8Array;
                toProtoMsg(message: _10.QueryExchangeRateRequest): _10.QueryExchangeRateRequestProtoMsg;
            };
            QueryExchangeRateResponse: {
                typeUrl: string;
                encode(message: _10.QueryExchangeRateResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _10.QueryExchangeRateResponse;
                fromPartial(object: Partial<_10.QueryExchangeRateResponse>): _10.QueryExchangeRateResponse;
                fromAmino(object: _10.QueryExchangeRateResponseAmino): _10.QueryExchangeRateResponse;
                toAmino(message: _10.QueryExchangeRateResponse): _10.QueryExchangeRateResponseAmino;
                fromAminoMsg(object: _10.QueryExchangeRateResponseAminoMsg): _10.QueryExchangeRateResponse;
                fromProtoMsg(message: _10.QueryExchangeRateResponseProtoMsg): _10.QueryExchangeRateResponse;
                toProto(message: _10.QueryExchangeRateResponse): Uint8Array;
                toProtoMsg(message: _10.QueryExchangeRateResponse): _10.QueryExchangeRateResponseProtoMsg;
            };
            QueryAllExchangeRatesRequest: {
                typeUrl: string;
                encode(_: _10.QueryAllExchangeRatesRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _10.QueryAllExchangeRatesRequest;
                fromPartial(_: Partial<_10.QueryAllExchangeRatesRequest>): _10.QueryAllExchangeRatesRequest;
                fromAmino(_: _10.QueryAllExchangeRatesRequestAmino): _10.QueryAllExchangeRatesRequest;
                toAmino(_: _10.QueryAllExchangeRatesRequest): _10.QueryAllExchangeRatesRequestAmino;
                fromAminoMsg(object: _10.QueryAllExchangeRatesRequestAminoMsg): _10.QueryAllExchangeRatesRequest;
                fromProtoMsg(message: _10.QueryAllExchangeRatesRequestProtoMsg): _10.QueryAllExchangeRatesRequest;
                toProto(message: _10.QueryAllExchangeRatesRequest): Uint8Array;
                toProtoMsg(message: _10.QueryAllExchangeRatesRequest): _10.QueryAllExchangeRatesRequestProtoMsg;
            };
            QueryAllExchangeRatesResponse: {
                typeUrl: string;
                encode(message: _10.QueryAllExchangeRatesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _10.QueryAllExchangeRatesResponse;
                fromPartial(object: Partial<_10.QueryAllExchangeRatesResponse>): _10.QueryAllExchangeRatesResponse;
                fromAmino(object: _10.QueryAllExchangeRatesResponseAmino): _10.QueryAllExchangeRatesResponse;
                toAmino(message: _10.QueryAllExchangeRatesResponse): _10.QueryAllExchangeRatesResponseAmino;
                fromAminoMsg(object: _10.QueryAllExchangeRatesResponseAminoMsg): _10.QueryAllExchangeRatesResponse;
                fromProtoMsg(message: _10.QueryAllExchangeRatesResponseProtoMsg): _10.QueryAllExchangeRatesResponse;
                toProto(message: _10.QueryAllExchangeRatesResponse): Uint8Array;
                toProtoMsg(message: _10.QueryAllExchangeRatesResponse): _10.QueryAllExchangeRatesResponseProtoMsg;
            };
            QueryActiveExchangeRatesRequest: {
                typeUrl: string;
                encode(_: _10.QueryActiveExchangeRatesRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _10.QueryActiveExchangeRatesRequest;
                fromPartial(_: Partial<_10.QueryActiveExchangeRatesRequest>): _10.QueryActiveExchangeRatesRequest;
                fromAmino(_: _10.QueryActiveExchangeRatesRequestAmino): _10.QueryActiveExchangeRatesRequest;
                toAmino(_: _10.QueryActiveExchangeRatesRequest): _10.QueryActiveExchangeRatesRequestAmino;
                fromAminoMsg(object: _10.QueryActiveExchangeRatesRequestAminoMsg): _10.QueryActiveExchangeRatesRequest;
                fromProtoMsg(message: _10.QueryActiveExchangeRatesRequestProtoMsg): _10.QueryActiveExchangeRatesRequest;
                toProto(message: _10.QueryActiveExchangeRatesRequest): Uint8Array;
                toProtoMsg(message: _10.QueryActiveExchangeRatesRequest): _10.QueryActiveExchangeRatesRequestProtoMsg;
            };
            QueryActiveExchangeRatesResponse: {
                typeUrl: string;
                encode(message: _10.QueryActiveExchangeRatesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _10.QueryActiveExchangeRatesResponse;
                fromPartial(object: Partial<_10.QueryActiveExchangeRatesResponse>): _10.QueryActiveExchangeRatesResponse;
                fromAmino(object: _10.QueryActiveExchangeRatesResponseAmino): _10.QueryActiveExchangeRatesResponse;
                toAmino(message: _10.QueryActiveExchangeRatesResponse): _10.QueryActiveExchangeRatesResponseAmino;
                fromAminoMsg(object: _10.QueryActiveExchangeRatesResponseAminoMsg): _10.QueryActiveExchangeRatesResponse;
                fromProtoMsg(message: _10.QueryActiveExchangeRatesResponseProtoMsg): _10.QueryActiveExchangeRatesResponse;
                toProto(message: _10.QueryActiveExchangeRatesResponse): Uint8Array;
                toProtoMsg(message: _10.QueryActiveExchangeRatesResponse): _10.QueryActiveExchangeRatesResponseProtoMsg;
            };
            QueryFeederDelegationRequest: {
                typeUrl: string;
                encode(message: _10.QueryFeederDelegationRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _10.QueryFeederDelegationRequest;
                fromPartial(object: Partial<_10.QueryFeederDelegationRequest>): _10.QueryFeederDelegationRequest;
                fromAmino(object: _10.QueryFeederDelegationRequestAmino): _10.QueryFeederDelegationRequest;
                toAmino(message: _10.QueryFeederDelegationRequest): _10.QueryFeederDelegationRequestAmino;
                fromAminoMsg(object: _10.QueryFeederDelegationRequestAminoMsg): _10.QueryFeederDelegationRequest;
                fromProtoMsg(message: _10.QueryFeederDelegationRequestProtoMsg): _10.QueryFeederDelegationRequest;
                toProto(message: _10.QueryFeederDelegationRequest): Uint8Array;
                toProtoMsg(message: _10.QueryFeederDelegationRequest): _10.QueryFeederDelegationRequestProtoMsg;
            };
            QueryFeederDelegationResponse: {
                typeUrl: string;
                encode(message: _10.QueryFeederDelegationResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _10.QueryFeederDelegationResponse;
                fromPartial(object: Partial<_10.QueryFeederDelegationResponse>): _10.QueryFeederDelegationResponse;
                fromAmino(object: _10.QueryFeederDelegationResponseAmino): _10.QueryFeederDelegationResponse;
                toAmino(message: _10.QueryFeederDelegationResponse): _10.QueryFeederDelegationResponseAmino;
                fromAminoMsg(object: _10.QueryFeederDelegationResponseAminoMsg): _10.QueryFeederDelegationResponse;
                fromProtoMsg(message: _10.QueryFeederDelegationResponseProtoMsg): _10.QueryFeederDelegationResponse;
                toProto(message: _10.QueryFeederDelegationResponse): Uint8Array;
                toProtoMsg(message: _10.QueryFeederDelegationResponse): _10.QueryFeederDelegationResponseProtoMsg;
            };
            QueryMissCounterRequest: {
                typeUrl: string;
                encode(message: _10.QueryMissCounterRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _10.QueryMissCounterRequest;
                fromPartial(object: Partial<_10.QueryMissCounterRequest>): _10.QueryMissCounterRequest;
                fromAmino(object: _10.QueryMissCounterRequestAmino): _10.QueryMissCounterRequest;
                toAmino(message: _10.QueryMissCounterRequest): _10.QueryMissCounterRequestAmino;
                fromAminoMsg(object: _10.QueryMissCounterRequestAminoMsg): _10.QueryMissCounterRequest;
                fromProtoMsg(message: _10.QueryMissCounterRequestProtoMsg): _10.QueryMissCounterRequest;
                toProto(message: _10.QueryMissCounterRequest): Uint8Array;
                toProtoMsg(message: _10.QueryMissCounterRequest): _10.QueryMissCounterRequestProtoMsg;
            };
            QueryMissCounterResponse: {
                typeUrl: string;
                encode(message: _10.QueryMissCounterResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _10.QueryMissCounterResponse;
                fromPartial(object: Partial<_10.QueryMissCounterResponse>): _10.QueryMissCounterResponse;
                fromAmino(object: _10.QueryMissCounterResponseAmino): _10.QueryMissCounterResponse;
                toAmino(message: _10.QueryMissCounterResponse): _10.QueryMissCounterResponseAmino;
                fromAminoMsg(object: _10.QueryMissCounterResponseAminoMsg): _10.QueryMissCounterResponse;
                fromProtoMsg(message: _10.QueryMissCounterResponseProtoMsg): _10.QueryMissCounterResponse;
                toProto(message: _10.QueryMissCounterResponse): Uint8Array;
                toProtoMsg(message: _10.QueryMissCounterResponse): _10.QueryMissCounterResponseProtoMsg;
            };
            QueryAggregatePrevoteRequest: {
                typeUrl: string;
                encode(message: _10.QueryAggregatePrevoteRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _10.QueryAggregatePrevoteRequest;
                fromPartial(object: Partial<_10.QueryAggregatePrevoteRequest>): _10.QueryAggregatePrevoteRequest;
                fromAmino(object: _10.QueryAggregatePrevoteRequestAmino): _10.QueryAggregatePrevoteRequest;
                toAmino(message: _10.QueryAggregatePrevoteRequest): _10.QueryAggregatePrevoteRequestAmino;
                fromAminoMsg(object: _10.QueryAggregatePrevoteRequestAminoMsg): _10.QueryAggregatePrevoteRequest;
                fromProtoMsg(message: _10.QueryAggregatePrevoteRequestProtoMsg): _10.QueryAggregatePrevoteRequest;
                toProto(message: _10.QueryAggregatePrevoteRequest): Uint8Array;
                toProtoMsg(message: _10.QueryAggregatePrevoteRequest): _10.QueryAggregatePrevoteRequestProtoMsg;
            };
            QueryAggregatePrevoteResponse: {
                typeUrl: string;
                encode(message: _10.QueryAggregatePrevoteResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _10.QueryAggregatePrevoteResponse;
                fromPartial(object: Partial<_10.QueryAggregatePrevoteResponse>): _10.QueryAggregatePrevoteResponse;
                fromAmino(object: _10.QueryAggregatePrevoteResponseAmino): _10.QueryAggregatePrevoteResponse;
                toAmino(message: _10.QueryAggregatePrevoteResponse): _10.QueryAggregatePrevoteResponseAmino;
                fromAminoMsg(object: _10.QueryAggregatePrevoteResponseAminoMsg): _10.QueryAggregatePrevoteResponse;
                fromProtoMsg(message: _10.QueryAggregatePrevoteResponseProtoMsg): _10.QueryAggregatePrevoteResponse;
                toProto(message: _10.QueryAggregatePrevoteResponse): Uint8Array;
                toProtoMsg(message: _10.QueryAggregatePrevoteResponse): _10.QueryAggregatePrevoteResponseProtoMsg;
            };
            QueryAggregatePrevotesRequest: {
                typeUrl: string;
                encode(_: _10.QueryAggregatePrevotesRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _10.QueryAggregatePrevotesRequest;
                fromPartial(_: Partial<_10.QueryAggregatePrevotesRequest>): _10.QueryAggregatePrevotesRequest;
                fromAmino(_: _10.QueryAggregatePrevotesRequestAmino): _10.QueryAggregatePrevotesRequest;
                toAmino(_: _10.QueryAggregatePrevotesRequest): _10.QueryAggregatePrevotesRequestAmino;
                fromAminoMsg(object: _10.QueryAggregatePrevotesRequestAminoMsg): _10.QueryAggregatePrevotesRequest;
                fromProtoMsg(message: _10.QueryAggregatePrevotesRequestProtoMsg): _10.QueryAggregatePrevotesRequest;
                toProto(message: _10.QueryAggregatePrevotesRequest): Uint8Array;
                toProtoMsg(message: _10.QueryAggregatePrevotesRequest): _10.QueryAggregatePrevotesRequestProtoMsg;
            };
            QueryAggregatePrevotesResponse: {
                typeUrl: string;
                encode(message: _10.QueryAggregatePrevotesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _10.QueryAggregatePrevotesResponse;
                fromPartial(object: Partial<_10.QueryAggregatePrevotesResponse>): _10.QueryAggregatePrevotesResponse;
                fromAmino(object: _10.QueryAggregatePrevotesResponseAmino): _10.QueryAggregatePrevotesResponse;
                toAmino(message: _10.QueryAggregatePrevotesResponse): _10.QueryAggregatePrevotesResponseAmino;
                fromAminoMsg(object: _10.QueryAggregatePrevotesResponseAminoMsg): _10.QueryAggregatePrevotesResponse;
                fromProtoMsg(message: _10.QueryAggregatePrevotesResponseProtoMsg): _10.QueryAggregatePrevotesResponse;
                toProto(message: _10.QueryAggregatePrevotesResponse): Uint8Array;
                toProtoMsg(message: _10.QueryAggregatePrevotesResponse): _10.QueryAggregatePrevotesResponseProtoMsg;
            };
            QueryAggregateVoteRequest: {
                typeUrl: string;
                encode(message: _10.QueryAggregateVoteRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _10.QueryAggregateVoteRequest;
                fromPartial(object: Partial<_10.QueryAggregateVoteRequest>): _10.QueryAggregateVoteRequest;
                fromAmino(object: _10.QueryAggregateVoteRequestAmino): _10.QueryAggregateVoteRequest;
                toAmino(message: _10.QueryAggregateVoteRequest): _10.QueryAggregateVoteRequestAmino;
                fromAminoMsg(object: _10.QueryAggregateVoteRequestAminoMsg): _10.QueryAggregateVoteRequest;
                fromProtoMsg(message: _10.QueryAggregateVoteRequestProtoMsg): _10.QueryAggregateVoteRequest;
                toProto(message: _10.QueryAggregateVoteRequest): Uint8Array;
                toProtoMsg(message: _10.QueryAggregateVoteRequest): _10.QueryAggregateVoteRequestProtoMsg;
            };
            QueryAggregateVoteResponse: {
                typeUrl: string;
                encode(message: _10.QueryAggregateVoteResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _10.QueryAggregateVoteResponse;
                fromPartial(object: Partial<_10.QueryAggregateVoteResponse>): _10.QueryAggregateVoteResponse;
                fromAmino(object: _10.QueryAggregateVoteResponseAmino): _10.QueryAggregateVoteResponse;
                toAmino(message: _10.QueryAggregateVoteResponse): _10.QueryAggregateVoteResponseAmino;
                fromAminoMsg(object: _10.QueryAggregateVoteResponseAminoMsg): _10.QueryAggregateVoteResponse;
                fromProtoMsg(message: _10.QueryAggregateVoteResponseProtoMsg): _10.QueryAggregateVoteResponse;
                toProto(message: _10.QueryAggregateVoteResponse): Uint8Array;
                toProtoMsg(message: _10.QueryAggregateVoteResponse): _10.QueryAggregateVoteResponseProtoMsg;
            };
            QueryAggregateVotesRequest: {
                typeUrl: string;
                encode(_: _10.QueryAggregateVotesRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _10.QueryAggregateVotesRequest;
                fromPartial(_: Partial<_10.QueryAggregateVotesRequest>): _10.QueryAggregateVotesRequest;
                fromAmino(_: _10.QueryAggregateVotesRequestAmino): _10.QueryAggregateVotesRequest;
                toAmino(_: _10.QueryAggregateVotesRequest): _10.QueryAggregateVotesRequestAmino;
                fromAminoMsg(object: _10.QueryAggregateVotesRequestAminoMsg): _10.QueryAggregateVotesRequest;
                fromProtoMsg(message: _10.QueryAggregateVotesRequestProtoMsg): _10.QueryAggregateVotesRequest;
                toProto(message: _10.QueryAggregateVotesRequest): Uint8Array;
                toProtoMsg(message: _10.QueryAggregateVotesRequest): _10.QueryAggregateVotesRequestProtoMsg;
            };
            QueryAggregateVotesResponse: {
                typeUrl: string;
                encode(message: _10.QueryAggregateVotesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _10.QueryAggregateVotesResponse;
                fromPartial(object: Partial<_10.QueryAggregateVotesResponse>): _10.QueryAggregateVotesResponse;
                fromAmino(object: _10.QueryAggregateVotesResponseAmino): _10.QueryAggregateVotesResponse;
                toAmino(message: _10.QueryAggregateVotesResponse): _10.QueryAggregateVotesResponseAmino;
                fromAminoMsg(object: _10.QueryAggregateVotesResponseAminoMsg): _10.QueryAggregateVotesResponse;
                fromProtoMsg(message: _10.QueryAggregateVotesResponseProtoMsg): _10.QueryAggregateVotesResponse;
                toProto(message: _10.QueryAggregateVotesResponse): Uint8Array;
                toProtoMsg(message: _10.QueryAggregateVotesResponse): _10.QueryAggregateVotesResponseProtoMsg;
            };
            QueryParamsRequest: {
                typeUrl: string;
                encode(_: _10.QueryParamsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _10.QueryParamsRequest;
                fromPartial(_: Partial<_10.QueryParamsRequest>): _10.QueryParamsRequest;
                fromAmino(_: _10.QueryParamsRequestAmino): _10.QueryParamsRequest;
                toAmino(_: _10.QueryParamsRequest): _10.QueryParamsRequestAmino;
                fromAminoMsg(object: _10.QueryParamsRequestAminoMsg): _10.QueryParamsRequest;
                fromProtoMsg(message: _10.QueryParamsRequestProtoMsg): _10.QueryParamsRequest;
                toProto(message: _10.QueryParamsRequest): Uint8Array;
                toProtoMsg(message: _10.QueryParamsRequest): _10.QueryParamsRequestProtoMsg;
            };
            QueryParamsResponse: {
                typeUrl: string;
                encode(message: _10.QueryParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _10.QueryParamsResponse;
                fromPartial(object: Partial<_10.QueryParamsResponse>): _10.QueryParamsResponse;
                fromAmino(object: _10.QueryParamsResponseAmino): _10.QueryParamsResponse;
                toAmino(message: _10.QueryParamsResponse): _10.QueryParamsResponseAmino;
                fromAminoMsg(object: _10.QueryParamsResponseAminoMsg): _10.QueryParamsResponse;
                fromProtoMsg(message: _10.QueryParamsResponseProtoMsg): _10.QueryParamsResponse;
                toProto(message: _10.QueryParamsResponse): Uint8Array;
                toProtoMsg(message: _10.QueryParamsResponse): _10.QueryParamsResponseProtoMsg;
            };
            QueryRewardPoolBalanceRequest: {
                typeUrl: string;
                encode(_: _10.QueryRewardPoolBalanceRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _10.QueryRewardPoolBalanceRequest;
                fromPartial(_: Partial<_10.QueryRewardPoolBalanceRequest>): _10.QueryRewardPoolBalanceRequest;
                fromAmino(_: _10.QueryRewardPoolBalanceRequestAmino): _10.QueryRewardPoolBalanceRequest;
                toAmino(_: _10.QueryRewardPoolBalanceRequest): _10.QueryRewardPoolBalanceRequestAmino;
                fromAminoMsg(object: _10.QueryRewardPoolBalanceRequestAminoMsg): _10.QueryRewardPoolBalanceRequest;
                fromProtoMsg(message: _10.QueryRewardPoolBalanceRequestProtoMsg): _10.QueryRewardPoolBalanceRequest;
                toProto(message: _10.QueryRewardPoolBalanceRequest): Uint8Array;
                toProtoMsg(message: _10.QueryRewardPoolBalanceRequest): _10.QueryRewardPoolBalanceRequestProtoMsg;
            };
            QueryRewardPoolBalanceResponse: {
                typeUrl: string;
                encode(message: _10.QueryRewardPoolBalanceResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _10.QueryRewardPoolBalanceResponse;
                fromPartial(object: Partial<_10.QueryRewardPoolBalanceResponse>): _10.QueryRewardPoolBalanceResponse;
                fromAmino(object: _10.QueryRewardPoolBalanceResponseAmino): _10.QueryRewardPoolBalanceResponse;
                toAmino(message: _10.QueryRewardPoolBalanceResponse): _10.QueryRewardPoolBalanceResponseAmino;
                fromAminoMsg(object: _10.QueryRewardPoolBalanceResponseAminoMsg): _10.QueryRewardPoolBalanceResponse;
                fromProtoMsg(message: _10.QueryRewardPoolBalanceResponseProtoMsg): _10.QueryRewardPoolBalanceResponse;
                toProto(message: _10.QueryRewardPoolBalanceResponse): Uint8Array;
                toProtoMsg(message: _10.QueryRewardPoolBalanceResponse): _10.QueryRewardPoolBalanceResponseProtoMsg;
            };
            Params: {
                typeUrl: string;
                encode(message: _9.Params, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _9.Params;
                fromPartial(object: Partial<_9.Params>): _9.Params;
                fromAmino(object: _9.ParamsAmino): _9.Params;
                toAmino(message: _9.Params): _9.ParamsAmino;
                fromAminoMsg(object: _9.ParamsAminoMsg): _9.Params;
                fromProtoMsg(message: _9.ParamsProtoMsg): _9.Params;
                toProto(message: _9.Params): Uint8Array;
                toProtoMsg(message: _9.Params): _9.ParamsProtoMsg;
            };
            Denom: {
                typeUrl: string;
                encode(message: _9.Denom, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _9.Denom;
                fromPartial(object: Partial<_9.Denom>): _9.Denom;
                fromAmino(object: _9.DenomAmino): _9.Denom;
                toAmino(message: _9.Denom): _9.DenomAmino;
                fromAminoMsg(object: _9.DenomAminoMsg): _9.Denom;
                fromProtoMsg(message: _9.DenomProtoMsg): _9.Denom;
                toProto(message: _9.Denom): Uint8Array;
                toProtoMsg(message: _9.Denom): _9.DenomProtoMsg;
            };
            AggregateExchangeRatePrevote: {
                typeUrl: string;
                encode(message: _9.AggregateExchangeRatePrevote, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _9.AggregateExchangeRatePrevote;
                fromPartial(object: Partial<_9.AggregateExchangeRatePrevote>): _9.AggregateExchangeRatePrevote;
                fromAmino(object: _9.AggregateExchangeRatePrevoteAmino): _9.AggregateExchangeRatePrevote;
                toAmino(message: _9.AggregateExchangeRatePrevote): _9.AggregateExchangeRatePrevoteAmino;
                fromAminoMsg(object: _9.AggregateExchangeRatePrevoteAminoMsg): _9.AggregateExchangeRatePrevote;
                fromProtoMsg(message: _9.AggregateExchangeRatePrevoteProtoMsg): _9.AggregateExchangeRatePrevote;
                toProto(message: _9.AggregateExchangeRatePrevote): Uint8Array;
                toProtoMsg(message: _9.AggregateExchangeRatePrevote): _9.AggregateExchangeRatePrevoteProtoMsg;
            };
            AggregateExchangeRateVote: {
                typeUrl: string;
                encode(message: _9.AggregateExchangeRateVote, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _9.AggregateExchangeRateVote;
                fromPartial(object: Partial<_9.AggregateExchangeRateVote>): _9.AggregateExchangeRateVote;
                fromAmino(object: _9.AggregateExchangeRateVoteAmino): _9.AggregateExchangeRateVote;
                toAmino(message: _9.AggregateExchangeRateVote): _9.AggregateExchangeRateVoteAmino;
                fromAminoMsg(object: _9.AggregateExchangeRateVoteAminoMsg): _9.AggregateExchangeRateVote;
                fromProtoMsg(message: _9.AggregateExchangeRateVoteProtoMsg): _9.AggregateExchangeRateVote;
                toProto(message: _9.AggregateExchangeRateVote): Uint8Array;
                toProtoMsg(message: _9.AggregateExchangeRateVote): _9.AggregateExchangeRateVoteProtoMsg;
            };
            ExchangeRateTuple: {
                typeUrl: string;
                encode(message: _9.ExchangeRateTuple, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _9.ExchangeRateTuple;
                fromPartial(object: Partial<_9.ExchangeRateTuple>): _9.ExchangeRateTuple;
                fromAmino(object: _9.ExchangeRateTupleAmino): _9.ExchangeRateTuple;
                toAmino(message: _9.ExchangeRateTuple): _9.ExchangeRateTupleAmino;
                fromAminoMsg(object: _9.ExchangeRateTupleAminoMsg): _9.ExchangeRateTuple;
                fromProtoMsg(message: _9.ExchangeRateTupleProtoMsg): _9.ExchangeRateTuple;
                toProto(message: _9.ExchangeRateTuple): Uint8Array;
                toProtoMsg(message: _9.ExchangeRateTuple): _9.ExchangeRateTupleProtoMsg;
            };
            GenesisState: {
                typeUrl: string;
                encode(message: _8.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _8.GenesisState;
                fromPartial(object: Partial<_8.GenesisState>): _8.GenesisState;
                fromAmino(object: _8.GenesisStateAmino): _8.GenesisState;
                toAmino(message: _8.GenesisState): _8.GenesisStateAmino;
                fromAminoMsg(object: _8.GenesisStateAminoMsg): _8.GenesisState;
                fromProtoMsg(message: _8.GenesisStateProtoMsg): _8.GenesisState;
                toProto(message: _8.GenesisState): Uint8Array;
                toProtoMsg(message: _8.GenesisState): _8.GenesisStateProtoMsg;
            };
            FeederDelegation: {
                typeUrl: string;
                encode(message: _8.FeederDelegation, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _8.FeederDelegation;
                fromPartial(object: Partial<_8.FeederDelegation>): _8.FeederDelegation;
                fromAmino(object: _8.FeederDelegationAmino): _8.FeederDelegation;
                toAmino(message: _8.FeederDelegation): _8.FeederDelegationAmino;
                fromAminoMsg(object: _8.FeederDelegationAminoMsg): _8.FeederDelegation;
                fromProtoMsg(message: _8.FeederDelegationProtoMsg): _8.FeederDelegation;
                toProto(message: _8.FeederDelegation): Uint8Array;
                toProtoMsg(message: _8.FeederDelegation): _8.FeederDelegationProtoMsg;
            };
            MissCounter: {
                typeUrl: string;
                encode(message: _8.MissCounter, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _8.MissCounter;
                fromPartial(object: Partial<_8.MissCounter>): _8.MissCounter;
                fromAmino(object: _8.MissCounterAmino): _8.MissCounter;
                toAmino(message: _8.MissCounter): _8.MissCounterAmino;
                fromAminoMsg(object: _8.MissCounterAminoMsg): _8.MissCounter;
                fromProtoMsg(message: _8.MissCounterProtoMsg): _8.MissCounter;
                toProto(message: _8.MissCounter): Uint8Array;
                toProtoMsg(message: _8.MissCounter): _8.MissCounterProtoMsg;
            };
        };
    }
    const ClientFactory: {
        createRPCMsgClient: ({ rpc }: {
            rpc: import("../helpers").Rpc;
        }) => Promise<{
            persistence: {
                interchainquery: {
                    v1beta1: _208.MsgClientImpl;
                };
                oracle: {
                    v1beta1: _209.MsgClientImpl;
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
            persistence: {
                epochs: {
                    v1beta1: {
                        epochInfos(request?: _1.QueryEpochsInfoRequest): Promise<_1.QueryEpochsInfoResponse>;
                        currentEpoch(request: _1.QueryCurrentEpochRequest): Promise<_1.QueryCurrentEpochResponse>;
                    };
                };
                halving: {
                    v1beta1: {
                        params(request?: _4.QueryParamsRequest): Promise<_4.QueryParamsResponse>;
                    };
                };
                oracle: {
                    v1beta1: {
                        allExchangeRates(request?: _10.QueryAllExchangeRatesRequest): Promise<_10.QueryAllExchangeRatesResponse>;
                        exchangeRate(request: _10.QueryExchangeRateRequest): Promise<_10.QueryExchangeRateResponse>;
                        activeExchangeRates(request?: _10.QueryActiveExchangeRatesRequest): Promise<_10.QueryActiveExchangeRatesResponse>;
                        feederDelegation(request: _10.QueryFeederDelegationRequest): Promise<_10.QueryFeederDelegationResponse>;
                        missCounter(request: _10.QueryMissCounterRequest): Promise<_10.QueryMissCounterResponse>;
                        aggregatePrevote(request: _10.QueryAggregatePrevoteRequest): Promise<_10.QueryAggregatePrevoteResponse>;
                        aggregatePrevotes(request?: _10.QueryAggregatePrevotesRequest): Promise<_10.QueryAggregatePrevotesResponse>;
                        aggregateVote(request: _10.QueryAggregateVoteRequest): Promise<_10.QueryAggregateVoteResponse>;
                        aggregateVotes(request?: _10.QueryAggregateVotesRequest): Promise<_10.QueryAggregateVotesResponse>;
                        params(request?: _10.QueryParamsRequest): Promise<_10.QueryParamsResponse>;
                        queryRewardPoolBalance(request?: _10.QueryRewardPoolBalanceRequest): Promise<_10.QueryRewardPoolBalanceResponse>;
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
                        tokenizeShareRecordReward(request: import("../cosmos/distribution/v1beta1/query").QueryTokenizeShareRecordRewardRequest): Promise<import("../cosmos/distribution/v1beta1/query").QueryTokenizeShareRecordRewardResponse>;
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
                        tokenizeShareRecordById(request: import("../cosmos/staking/v1beta1/query").QueryTokenizeShareRecordByIdRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryTokenizeShareRecordByIdResponse>;
                        tokenizeShareRecordByDenom(request: import("../cosmos/staking/v1beta1/query").QueryTokenizeShareRecordByDenomRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryTokenizeShareRecordByDenomResponse>;
                        tokenizeShareRecordsOwned(request: import("../cosmos/staking/v1beta1/query").QueryTokenizeShareRecordsOwnedRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryTokenizeShareRecordsOwnedResponse>;
                        allTokenizeShareRecords(request?: import("../cosmos/staking/v1beta1/query").QueryAllTokenizeShareRecordsRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryAllTokenizeShareRecordsResponse>;
                        lastTokenizeShareRecordId(request?: import("../cosmos/staking/v1beta1/query").QueryLastTokenizeShareRecordIdRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryLastTokenizeShareRecordIdResponse>;
                        totalTokenizeSharedAssets(request?: import("../cosmos/staking/v1beta1/query").QueryTotalTokenizeSharedAssetsRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryTotalTokenizeSharedAssetsResponse>;
                        totalLiquidStaked(request?: import("../cosmos/staking/v1beta1/query").QueryTotalLiquidStaked): Promise<import("../cosmos/staking/v1beta1/query").QueryTotalLiquidStakedResponse>;
                        tokenizeShareLockInfo(request: import("../cosmos/staking/v1beta1/query").QueryTokenizeShareLockInfo): Promise<import("../cosmos/staking/v1beta1/query").QueryTokenizeShareLockInfoResponse>;
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
            persistence: {
                epochs: {
                    v1beta1: _202.LCDQueryClient;
                };
                halving: {
                    v1beta1: _203.LCDQueryClient;
                };
                oracle: {
                    v1beta1: _204.LCDQueryClient;
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
