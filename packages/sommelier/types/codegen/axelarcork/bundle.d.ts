import * as _5 from "./v1/axelarcork";
import * as _6 from "./v1/event";
import * as _7 from "./v1/genesis";
import * as _8 from "./v1/proposal";
import * as _9 from "./v1/query";
import * as _10 from "./v1/tx";
import * as _150 from "./v1/query.lcd";
import * as _151 from "./v1/query.rpc.Query";
import * as _152 from "./v1/tx.rpc.msg";
export declare namespace axelarcork {
    const v1: {
        MsgClientImpl: typeof _152.MsgClientImpl;
        QueryClientImpl: typeof _151.QueryClientImpl;
        createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
            queryParams(request?: _9.QueryParamsRequest): Promise<_9.QueryParamsResponse>;
            queryCellarIDs(request?: _9.QueryCellarIDsRequest): Promise<_9.QueryCellarIDsResponse>;
            queryCellarIDsByChainID(request: _9.QueryCellarIDsByChainIDRequest): Promise<_9.QueryCellarIDsByChainIDResponse>;
            queryScheduledCorks(request: _9.QueryScheduledCorksRequest): Promise<_9.QueryScheduledCorksResponse>;
            queryScheduledBlockHeights(request: _9.QueryScheduledBlockHeightsRequest): Promise<_9.QueryScheduledBlockHeightsResponse>;
            queryScheduledCorksByBlockHeight(request: _9.QueryScheduledCorksByBlockHeightRequest): Promise<_9.QueryScheduledCorksByBlockHeightResponse>;
            queryScheduledCorksByID(request: _9.QueryScheduledCorksByIDRequest): Promise<_9.QueryScheduledCorksByIDResponse>;
            queryCorkResult(request: _9.QueryCorkResultRequest): Promise<_9.QueryCorkResultResponse>;
            queryCorkResults(request: _9.QueryCorkResultsRequest): Promise<_9.QueryCorkResultsResponse>;
            queryChainConfigurations(request?: _9.QueryChainConfigurationsRequest): Promise<_9.QueryChainConfigurationsResponse>;
            queryAxelarContractCallNonces(request?: _9.QueryAxelarContractCallNoncesRequest): Promise<_9.QueryAxelarContractCallNoncesResponse>;
            queryAxelarProxyUpgradeData(request?: _9.QueryAxelarProxyUpgradeDataRequest): Promise<_9.QueryAxelarProxyUpgradeDataResponse>;
            queryWinningAxelarCork(request: _9.QueryWinningAxelarCorkRequest): Promise<_9.QueryWinningAxelarCorkResponse>;
            queryWinningAxelarCorks(request: _9.QueryWinningAxelarCorksRequest): Promise<_9.QueryWinningAxelarCorksResponse>;
        };
        LCDQueryClient: typeof _150.LCDQueryClient;
        registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
        load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
        MessageComposer: {
            encoded: {
                scheduleCork(value: _10.MsgScheduleAxelarCorkRequest): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                relayCork(value: _10.MsgRelayAxelarCorkRequest): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                bumpCorkGas(value: _10.MsgBumpAxelarCorkGasRequest): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                cancelScheduledCork(value: _10.MsgCancelAxelarCorkRequest): {
                    typeUrl: string;
                    value: Uint8Array;
                };
            };
            withTypeUrl: {
                scheduleCork(value: _10.MsgScheduleAxelarCorkRequest): {
                    typeUrl: string;
                    value: _10.MsgScheduleAxelarCorkRequest;
                };
                relayCork(value: _10.MsgRelayAxelarCorkRequest): {
                    typeUrl: string;
                    value: _10.MsgRelayAxelarCorkRequest;
                };
                bumpCorkGas(value: _10.MsgBumpAxelarCorkGasRequest): {
                    typeUrl: string;
                    value: _10.MsgBumpAxelarCorkGasRequest;
                };
                cancelScheduledCork(value: _10.MsgCancelAxelarCorkRequest): {
                    typeUrl: string;
                    value: _10.MsgCancelAxelarCorkRequest;
                };
            };
            fromJSON: {
                scheduleCork(value: any): {
                    typeUrl: string;
                    value: _10.MsgScheduleAxelarCorkRequest;
                };
                relayCork(value: any): {
                    typeUrl: string;
                    value: _10.MsgRelayAxelarCorkRequest;
                };
                bumpCorkGas(value: any): {
                    typeUrl: string;
                    value: _10.MsgBumpAxelarCorkGasRequest;
                };
                cancelScheduledCork(value: any): {
                    typeUrl: string;
                    value: _10.MsgCancelAxelarCorkRequest;
                };
            };
            fromPartial: {
                scheduleCork(value: _10.MsgScheduleAxelarCorkRequest): {
                    typeUrl: string;
                    value: _10.MsgScheduleAxelarCorkRequest;
                };
                relayCork(value: _10.MsgRelayAxelarCorkRequest): {
                    typeUrl: string;
                    value: _10.MsgRelayAxelarCorkRequest;
                };
                bumpCorkGas(value: _10.MsgBumpAxelarCorkGasRequest): {
                    typeUrl: string;
                    value: _10.MsgBumpAxelarCorkGasRequest;
                };
                cancelScheduledCork(value: _10.MsgCancelAxelarCorkRequest): {
                    typeUrl: string;
                    value: _10.MsgCancelAxelarCorkRequest;
                };
            };
        };
        AminoConverter: {
            "/axelarcork.v1.MsgScheduleAxelarCorkRequest": {
                aminoType: string;
                toAmino: (message: _10.MsgScheduleAxelarCorkRequest) => _10.MsgScheduleAxelarCorkRequestAmino;
                fromAmino: (object: _10.MsgScheduleAxelarCorkRequestAmino) => _10.MsgScheduleAxelarCorkRequest;
            };
            "/axelarcork.v1.MsgRelayAxelarCorkRequest": {
                aminoType: string;
                toAmino: (message: _10.MsgRelayAxelarCorkRequest) => _10.MsgRelayAxelarCorkRequestAmino;
                fromAmino: (object: _10.MsgRelayAxelarCorkRequestAmino) => _10.MsgRelayAxelarCorkRequest;
            };
            "/axelarcork.v1.MsgBumpAxelarCorkGasRequest": {
                aminoType: string;
                toAmino: (message: _10.MsgBumpAxelarCorkGasRequest) => _10.MsgBumpAxelarCorkGasRequestAmino;
                fromAmino: (object: _10.MsgBumpAxelarCorkGasRequestAmino) => _10.MsgBumpAxelarCorkGasRequest;
            };
            "/axelarcork.v1.MsgCancelAxelarCorkRequest": {
                aminoType: string;
                toAmino: (message: _10.MsgCancelAxelarCorkRequest) => _10.MsgCancelAxelarCorkRequestAmino;
                fromAmino: (object: _10.MsgCancelAxelarCorkRequestAmino) => _10.MsgCancelAxelarCorkRequest;
            };
        };
        MsgScheduleAxelarCorkRequest: {
            typeUrl: string;
            encode(message: _10.MsgScheduleAxelarCorkRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _10.MsgScheduleAxelarCorkRequest;
            fromPartial(object: Partial<_10.MsgScheduleAxelarCorkRequest>): _10.MsgScheduleAxelarCorkRequest;
            fromAmino(object: _10.MsgScheduleAxelarCorkRequestAmino): _10.MsgScheduleAxelarCorkRequest;
            toAmino(message: _10.MsgScheduleAxelarCorkRequest): _10.MsgScheduleAxelarCorkRequestAmino;
            fromAminoMsg(object: _10.MsgScheduleAxelarCorkRequestAminoMsg): _10.MsgScheduleAxelarCorkRequest;
            fromProtoMsg(message: _10.MsgScheduleAxelarCorkRequestProtoMsg): _10.MsgScheduleAxelarCorkRequest;
            toProto(message: _10.MsgScheduleAxelarCorkRequest): Uint8Array;
            toProtoMsg(message: _10.MsgScheduleAxelarCorkRequest): _10.MsgScheduleAxelarCorkRequestProtoMsg;
        };
        MsgScheduleAxelarCorkResponse: {
            typeUrl: string;
            encode(message: _10.MsgScheduleAxelarCorkResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _10.MsgScheduleAxelarCorkResponse;
            fromPartial(object: Partial<_10.MsgScheduleAxelarCorkResponse>): _10.MsgScheduleAxelarCorkResponse;
            fromAmino(object: _10.MsgScheduleAxelarCorkResponseAmino): _10.MsgScheduleAxelarCorkResponse;
            toAmino(message: _10.MsgScheduleAxelarCorkResponse): _10.MsgScheduleAxelarCorkResponseAmino;
            fromAminoMsg(object: _10.MsgScheduleAxelarCorkResponseAminoMsg): _10.MsgScheduleAxelarCorkResponse;
            fromProtoMsg(message: _10.MsgScheduleAxelarCorkResponseProtoMsg): _10.MsgScheduleAxelarCorkResponse;
            toProto(message: _10.MsgScheduleAxelarCorkResponse): Uint8Array;
            toProtoMsg(message: _10.MsgScheduleAxelarCorkResponse): _10.MsgScheduleAxelarCorkResponseProtoMsg;
        };
        MsgRelayAxelarCorkRequest: {
            typeUrl: string;
            encode(message: _10.MsgRelayAxelarCorkRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _10.MsgRelayAxelarCorkRequest;
            fromPartial(object: Partial<_10.MsgRelayAxelarCorkRequest>): _10.MsgRelayAxelarCorkRequest;
            fromAmino(object: _10.MsgRelayAxelarCorkRequestAmino): _10.MsgRelayAxelarCorkRequest;
            toAmino(message: _10.MsgRelayAxelarCorkRequest): _10.MsgRelayAxelarCorkRequestAmino;
            fromAminoMsg(object: _10.MsgRelayAxelarCorkRequestAminoMsg): _10.MsgRelayAxelarCorkRequest;
            fromProtoMsg(message: _10.MsgRelayAxelarCorkRequestProtoMsg): _10.MsgRelayAxelarCorkRequest;
            toProto(message: _10.MsgRelayAxelarCorkRequest): Uint8Array;
            toProtoMsg(message: _10.MsgRelayAxelarCorkRequest): _10.MsgRelayAxelarCorkRequestProtoMsg;
        };
        MsgRelayAxelarCorkResponse: {
            typeUrl: string;
            encode(_: _10.MsgRelayAxelarCorkResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(_: any): _10.MsgRelayAxelarCorkResponse;
            fromPartial(_: Partial<_10.MsgRelayAxelarCorkResponse>): _10.MsgRelayAxelarCorkResponse;
            fromAmino(_: _10.MsgRelayAxelarCorkResponseAmino): _10.MsgRelayAxelarCorkResponse;
            toAmino(_: _10.MsgRelayAxelarCorkResponse): _10.MsgRelayAxelarCorkResponseAmino;
            fromAminoMsg(object: _10.MsgRelayAxelarCorkResponseAminoMsg): _10.MsgRelayAxelarCorkResponse;
            fromProtoMsg(message: _10.MsgRelayAxelarCorkResponseProtoMsg): _10.MsgRelayAxelarCorkResponse;
            toProto(message: _10.MsgRelayAxelarCorkResponse): Uint8Array;
            toProtoMsg(message: _10.MsgRelayAxelarCorkResponse): _10.MsgRelayAxelarCorkResponseProtoMsg;
        };
        MsgRelayAxelarProxyUpgradeRequest: {
            typeUrl: string;
            encode(message: _10.MsgRelayAxelarProxyUpgradeRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _10.MsgRelayAxelarProxyUpgradeRequest;
            fromPartial(object: Partial<_10.MsgRelayAxelarProxyUpgradeRequest>): _10.MsgRelayAxelarProxyUpgradeRequest;
            fromAmino(object: _10.MsgRelayAxelarProxyUpgradeRequestAmino): _10.MsgRelayAxelarProxyUpgradeRequest;
            toAmino(message: _10.MsgRelayAxelarProxyUpgradeRequest): _10.MsgRelayAxelarProxyUpgradeRequestAmino;
            fromAminoMsg(object: _10.MsgRelayAxelarProxyUpgradeRequestAminoMsg): _10.MsgRelayAxelarProxyUpgradeRequest;
            fromProtoMsg(message: _10.MsgRelayAxelarProxyUpgradeRequestProtoMsg): _10.MsgRelayAxelarProxyUpgradeRequest;
            toProto(message: _10.MsgRelayAxelarProxyUpgradeRequest): Uint8Array;
            toProtoMsg(message: _10.MsgRelayAxelarProxyUpgradeRequest): _10.MsgRelayAxelarProxyUpgradeRequestProtoMsg;
        };
        MsgRelayAxelarProxyUpgradeResponse: {
            typeUrl: string;
            encode(_: _10.MsgRelayAxelarProxyUpgradeResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(_: any): _10.MsgRelayAxelarProxyUpgradeResponse;
            fromPartial(_: Partial<_10.MsgRelayAxelarProxyUpgradeResponse>): _10.MsgRelayAxelarProxyUpgradeResponse;
            fromAmino(_: _10.MsgRelayAxelarProxyUpgradeResponseAmino): _10.MsgRelayAxelarProxyUpgradeResponse;
            toAmino(_: _10.MsgRelayAxelarProxyUpgradeResponse): _10.MsgRelayAxelarProxyUpgradeResponseAmino;
            fromAminoMsg(object: _10.MsgRelayAxelarProxyUpgradeResponseAminoMsg): _10.MsgRelayAxelarProxyUpgradeResponse;
            fromProtoMsg(message: _10.MsgRelayAxelarProxyUpgradeResponseProtoMsg): _10.MsgRelayAxelarProxyUpgradeResponse;
            toProto(message: _10.MsgRelayAxelarProxyUpgradeResponse): Uint8Array;
            toProtoMsg(message: _10.MsgRelayAxelarProxyUpgradeResponse): _10.MsgRelayAxelarProxyUpgradeResponseProtoMsg;
        };
        MsgBumpAxelarCorkGasRequest: {
            typeUrl: string;
            encode(message: _10.MsgBumpAxelarCorkGasRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _10.MsgBumpAxelarCorkGasRequest;
            fromPartial(object: Partial<_10.MsgBumpAxelarCorkGasRequest>): _10.MsgBumpAxelarCorkGasRequest;
            fromAmino(object: _10.MsgBumpAxelarCorkGasRequestAmino): _10.MsgBumpAxelarCorkGasRequest;
            toAmino(message: _10.MsgBumpAxelarCorkGasRequest): _10.MsgBumpAxelarCorkGasRequestAmino;
            fromAminoMsg(object: _10.MsgBumpAxelarCorkGasRequestAminoMsg): _10.MsgBumpAxelarCorkGasRequest;
            fromProtoMsg(message: _10.MsgBumpAxelarCorkGasRequestProtoMsg): _10.MsgBumpAxelarCorkGasRequest;
            toProto(message: _10.MsgBumpAxelarCorkGasRequest): Uint8Array;
            toProtoMsg(message: _10.MsgBumpAxelarCorkGasRequest): _10.MsgBumpAxelarCorkGasRequestProtoMsg;
        };
        MsgBumpAxelarCorkGasResponse: {
            typeUrl: string;
            encode(_: _10.MsgBumpAxelarCorkGasResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(_: any): _10.MsgBumpAxelarCorkGasResponse;
            fromPartial(_: Partial<_10.MsgBumpAxelarCorkGasResponse>): _10.MsgBumpAxelarCorkGasResponse;
            fromAmino(_: _10.MsgBumpAxelarCorkGasResponseAmino): _10.MsgBumpAxelarCorkGasResponse;
            toAmino(_: _10.MsgBumpAxelarCorkGasResponse): _10.MsgBumpAxelarCorkGasResponseAmino;
            fromAminoMsg(object: _10.MsgBumpAxelarCorkGasResponseAminoMsg): _10.MsgBumpAxelarCorkGasResponse;
            fromProtoMsg(message: _10.MsgBumpAxelarCorkGasResponseProtoMsg): _10.MsgBumpAxelarCorkGasResponse;
            toProto(message: _10.MsgBumpAxelarCorkGasResponse): Uint8Array;
            toProtoMsg(message: _10.MsgBumpAxelarCorkGasResponse): _10.MsgBumpAxelarCorkGasResponseProtoMsg;
        };
        MsgCancelAxelarCorkRequest: {
            typeUrl: string;
            encode(message: _10.MsgCancelAxelarCorkRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _10.MsgCancelAxelarCorkRequest;
            fromPartial(object: Partial<_10.MsgCancelAxelarCorkRequest>): _10.MsgCancelAxelarCorkRequest;
            fromAmino(object: _10.MsgCancelAxelarCorkRequestAmino): _10.MsgCancelAxelarCorkRequest;
            toAmino(message: _10.MsgCancelAxelarCorkRequest): _10.MsgCancelAxelarCorkRequestAmino;
            fromAminoMsg(object: _10.MsgCancelAxelarCorkRequestAminoMsg): _10.MsgCancelAxelarCorkRequest;
            fromProtoMsg(message: _10.MsgCancelAxelarCorkRequestProtoMsg): _10.MsgCancelAxelarCorkRequest;
            toProto(message: _10.MsgCancelAxelarCorkRequest): Uint8Array;
            toProtoMsg(message: _10.MsgCancelAxelarCorkRequest): _10.MsgCancelAxelarCorkRequestProtoMsg;
        };
        MsgCancelAxelarCorkResponse: {
            typeUrl: string;
            encode(_: _10.MsgCancelAxelarCorkResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(_: any): _10.MsgCancelAxelarCorkResponse;
            fromPartial(_: Partial<_10.MsgCancelAxelarCorkResponse>): _10.MsgCancelAxelarCorkResponse;
            fromAmino(_: _10.MsgCancelAxelarCorkResponseAmino): _10.MsgCancelAxelarCorkResponse;
            toAmino(_: _10.MsgCancelAxelarCorkResponse): _10.MsgCancelAxelarCorkResponseAmino;
            fromAminoMsg(object: _10.MsgCancelAxelarCorkResponseAminoMsg): _10.MsgCancelAxelarCorkResponse;
            fromProtoMsg(message: _10.MsgCancelAxelarCorkResponseProtoMsg): _10.MsgCancelAxelarCorkResponse;
            toProto(message: _10.MsgCancelAxelarCorkResponse): Uint8Array;
            toProtoMsg(message: _10.MsgCancelAxelarCorkResponse): _10.MsgCancelAxelarCorkResponseProtoMsg;
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
        QueryCellarIDsRequest: {
            typeUrl: string;
            encode(_: _9.QueryCellarIDsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(_: any): _9.QueryCellarIDsRequest;
            fromPartial(_: Partial<_9.QueryCellarIDsRequest>): _9.QueryCellarIDsRequest;
            fromAmino(_: _9.QueryCellarIDsRequestAmino): _9.QueryCellarIDsRequest;
            toAmino(_: _9.QueryCellarIDsRequest): _9.QueryCellarIDsRequestAmino;
            fromAminoMsg(object: _9.QueryCellarIDsRequestAminoMsg): _9.QueryCellarIDsRequest;
            fromProtoMsg(message: _9.QueryCellarIDsRequestProtoMsg): _9.QueryCellarIDsRequest;
            toProto(message: _9.QueryCellarIDsRequest): Uint8Array;
            toProtoMsg(message: _9.QueryCellarIDsRequest): _9.QueryCellarIDsRequestProtoMsg;
        };
        QueryCellarIDsResponse: {
            typeUrl: string;
            encode(message: _9.QueryCellarIDsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _9.QueryCellarIDsResponse;
            fromPartial(object: Partial<_9.QueryCellarIDsResponse>): _9.QueryCellarIDsResponse;
            fromAmino(object: _9.QueryCellarIDsResponseAmino): _9.QueryCellarIDsResponse;
            toAmino(message: _9.QueryCellarIDsResponse): _9.QueryCellarIDsResponseAmino;
            fromAminoMsg(object: _9.QueryCellarIDsResponseAminoMsg): _9.QueryCellarIDsResponse;
            fromProtoMsg(message: _9.QueryCellarIDsResponseProtoMsg): _9.QueryCellarIDsResponse;
            toProto(message: _9.QueryCellarIDsResponse): Uint8Array;
            toProtoMsg(message: _9.QueryCellarIDsResponse): _9.QueryCellarIDsResponseProtoMsg;
        };
        QueryCellarIDsByChainIDRequest: {
            typeUrl: string;
            encode(message: _9.QueryCellarIDsByChainIDRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _9.QueryCellarIDsByChainIDRequest;
            fromPartial(object: Partial<_9.QueryCellarIDsByChainIDRequest>): _9.QueryCellarIDsByChainIDRequest;
            fromAmino(object: _9.QueryCellarIDsByChainIDRequestAmino): _9.QueryCellarIDsByChainIDRequest;
            toAmino(message: _9.QueryCellarIDsByChainIDRequest): _9.QueryCellarIDsByChainIDRequestAmino;
            fromAminoMsg(object: _9.QueryCellarIDsByChainIDRequestAminoMsg): _9.QueryCellarIDsByChainIDRequest;
            fromProtoMsg(message: _9.QueryCellarIDsByChainIDRequestProtoMsg): _9.QueryCellarIDsByChainIDRequest;
            toProto(message: _9.QueryCellarIDsByChainIDRequest): Uint8Array;
            toProtoMsg(message: _9.QueryCellarIDsByChainIDRequest): _9.QueryCellarIDsByChainIDRequestProtoMsg;
        };
        QueryCellarIDsByChainIDResponse: {
            typeUrl: string;
            encode(message: _9.QueryCellarIDsByChainIDResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _9.QueryCellarIDsByChainIDResponse;
            fromPartial(object: Partial<_9.QueryCellarIDsByChainIDResponse>): _9.QueryCellarIDsByChainIDResponse;
            fromAmino(object: _9.QueryCellarIDsByChainIDResponseAmino): _9.QueryCellarIDsByChainIDResponse;
            toAmino(message: _9.QueryCellarIDsByChainIDResponse): _9.QueryCellarIDsByChainIDResponseAmino;
            fromAminoMsg(object: _9.QueryCellarIDsByChainIDResponseAminoMsg): _9.QueryCellarIDsByChainIDResponse;
            fromProtoMsg(message: _9.QueryCellarIDsByChainIDResponseProtoMsg): _9.QueryCellarIDsByChainIDResponse;
            toProto(message: _9.QueryCellarIDsByChainIDResponse): Uint8Array;
            toProtoMsg(message: _9.QueryCellarIDsByChainIDResponse): _9.QueryCellarIDsByChainIDResponseProtoMsg;
        };
        QueryScheduledCorksRequest: {
            typeUrl: string;
            encode(message: _9.QueryScheduledCorksRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _9.QueryScheduledCorksRequest;
            fromPartial(object: Partial<_9.QueryScheduledCorksRequest>): _9.QueryScheduledCorksRequest;
            fromAmino(object: _9.QueryScheduledCorksRequestAmino): _9.QueryScheduledCorksRequest;
            toAmino(message: _9.QueryScheduledCorksRequest): _9.QueryScheduledCorksRequestAmino;
            fromAminoMsg(object: _9.QueryScheduledCorksRequestAminoMsg): _9.QueryScheduledCorksRequest;
            fromProtoMsg(message: _9.QueryScheduledCorksRequestProtoMsg): _9.QueryScheduledCorksRequest;
            toProto(message: _9.QueryScheduledCorksRequest): Uint8Array;
            toProtoMsg(message: _9.QueryScheduledCorksRequest): _9.QueryScheduledCorksRequestProtoMsg;
        };
        QueryScheduledCorksResponse: {
            typeUrl: string;
            encode(message: _9.QueryScheduledCorksResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _9.QueryScheduledCorksResponse;
            fromPartial(object: Partial<_9.QueryScheduledCorksResponse>): _9.QueryScheduledCorksResponse;
            fromAmino(object: _9.QueryScheduledCorksResponseAmino): _9.QueryScheduledCorksResponse;
            toAmino(message: _9.QueryScheduledCorksResponse): _9.QueryScheduledCorksResponseAmino;
            fromAminoMsg(object: _9.QueryScheduledCorksResponseAminoMsg): _9.QueryScheduledCorksResponse;
            fromProtoMsg(message: _9.QueryScheduledCorksResponseProtoMsg): _9.QueryScheduledCorksResponse;
            toProto(message: _9.QueryScheduledCorksResponse): Uint8Array;
            toProtoMsg(message: _9.QueryScheduledCorksResponse): _9.QueryScheduledCorksResponseProtoMsg;
        };
        QueryScheduledBlockHeightsRequest: {
            typeUrl: string;
            encode(message: _9.QueryScheduledBlockHeightsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _9.QueryScheduledBlockHeightsRequest;
            fromPartial(object: Partial<_9.QueryScheduledBlockHeightsRequest>): _9.QueryScheduledBlockHeightsRequest;
            fromAmino(object: _9.QueryScheduledBlockHeightsRequestAmino): _9.QueryScheduledBlockHeightsRequest;
            toAmino(message: _9.QueryScheduledBlockHeightsRequest): _9.QueryScheduledBlockHeightsRequestAmino;
            fromAminoMsg(object: _9.QueryScheduledBlockHeightsRequestAminoMsg): _9.QueryScheduledBlockHeightsRequest;
            fromProtoMsg(message: _9.QueryScheduledBlockHeightsRequestProtoMsg): _9.QueryScheduledBlockHeightsRequest;
            toProto(message: _9.QueryScheduledBlockHeightsRequest): Uint8Array;
            toProtoMsg(message: _9.QueryScheduledBlockHeightsRequest): _9.QueryScheduledBlockHeightsRequestProtoMsg;
        };
        QueryScheduledBlockHeightsResponse: {
            typeUrl: string;
            encode(message: _9.QueryScheduledBlockHeightsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _9.QueryScheduledBlockHeightsResponse;
            fromPartial(object: Partial<_9.QueryScheduledBlockHeightsResponse>): _9.QueryScheduledBlockHeightsResponse;
            fromAmino(object: _9.QueryScheduledBlockHeightsResponseAmino): _9.QueryScheduledBlockHeightsResponse;
            toAmino(message: _9.QueryScheduledBlockHeightsResponse): _9.QueryScheduledBlockHeightsResponseAmino;
            fromAminoMsg(object: _9.QueryScheduledBlockHeightsResponseAminoMsg): _9.QueryScheduledBlockHeightsResponse;
            fromProtoMsg(message: _9.QueryScheduledBlockHeightsResponseProtoMsg): _9.QueryScheduledBlockHeightsResponse;
            toProto(message: _9.QueryScheduledBlockHeightsResponse): Uint8Array;
            toProtoMsg(message: _9.QueryScheduledBlockHeightsResponse): _9.QueryScheduledBlockHeightsResponseProtoMsg;
        };
        QueryScheduledCorksByBlockHeightRequest: {
            typeUrl: string;
            encode(message: _9.QueryScheduledCorksByBlockHeightRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _9.QueryScheduledCorksByBlockHeightRequest;
            fromPartial(object: Partial<_9.QueryScheduledCorksByBlockHeightRequest>): _9.QueryScheduledCorksByBlockHeightRequest;
            fromAmino(object: _9.QueryScheduledCorksByBlockHeightRequestAmino): _9.QueryScheduledCorksByBlockHeightRequest;
            toAmino(message: _9.QueryScheduledCorksByBlockHeightRequest): _9.QueryScheduledCorksByBlockHeightRequestAmino;
            fromAminoMsg(object: _9.QueryScheduledCorksByBlockHeightRequestAminoMsg): _9.QueryScheduledCorksByBlockHeightRequest;
            fromProtoMsg(message: _9.QueryScheduledCorksByBlockHeightRequestProtoMsg): _9.QueryScheduledCorksByBlockHeightRequest;
            toProto(message: _9.QueryScheduledCorksByBlockHeightRequest): Uint8Array;
            toProtoMsg(message: _9.QueryScheduledCorksByBlockHeightRequest): _9.QueryScheduledCorksByBlockHeightRequestProtoMsg;
        };
        QueryScheduledCorksByBlockHeightResponse: {
            typeUrl: string;
            encode(message: _9.QueryScheduledCorksByBlockHeightResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _9.QueryScheduledCorksByBlockHeightResponse;
            fromPartial(object: Partial<_9.QueryScheduledCorksByBlockHeightResponse>): _9.QueryScheduledCorksByBlockHeightResponse;
            fromAmino(object: _9.QueryScheduledCorksByBlockHeightResponseAmino): _9.QueryScheduledCorksByBlockHeightResponse;
            toAmino(message: _9.QueryScheduledCorksByBlockHeightResponse): _9.QueryScheduledCorksByBlockHeightResponseAmino;
            fromAminoMsg(object: _9.QueryScheduledCorksByBlockHeightResponseAminoMsg): _9.QueryScheduledCorksByBlockHeightResponse;
            fromProtoMsg(message: _9.QueryScheduledCorksByBlockHeightResponseProtoMsg): _9.QueryScheduledCorksByBlockHeightResponse;
            toProto(message: _9.QueryScheduledCorksByBlockHeightResponse): Uint8Array;
            toProtoMsg(message: _9.QueryScheduledCorksByBlockHeightResponse): _9.QueryScheduledCorksByBlockHeightResponseProtoMsg;
        };
        QueryScheduledCorksByIDRequest: {
            typeUrl: string;
            encode(message: _9.QueryScheduledCorksByIDRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _9.QueryScheduledCorksByIDRequest;
            fromPartial(object: Partial<_9.QueryScheduledCorksByIDRequest>): _9.QueryScheduledCorksByIDRequest;
            fromAmino(object: _9.QueryScheduledCorksByIDRequestAmino): _9.QueryScheduledCorksByIDRequest;
            toAmino(message: _9.QueryScheduledCorksByIDRequest): _9.QueryScheduledCorksByIDRequestAmino;
            fromAminoMsg(object: _9.QueryScheduledCorksByIDRequestAminoMsg): _9.QueryScheduledCorksByIDRequest;
            fromProtoMsg(message: _9.QueryScheduledCorksByIDRequestProtoMsg): _9.QueryScheduledCorksByIDRequest;
            toProto(message: _9.QueryScheduledCorksByIDRequest): Uint8Array;
            toProtoMsg(message: _9.QueryScheduledCorksByIDRequest): _9.QueryScheduledCorksByIDRequestProtoMsg;
        };
        QueryScheduledCorksByIDResponse: {
            typeUrl: string;
            encode(message: _9.QueryScheduledCorksByIDResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _9.QueryScheduledCorksByIDResponse;
            fromPartial(object: Partial<_9.QueryScheduledCorksByIDResponse>): _9.QueryScheduledCorksByIDResponse;
            fromAmino(object: _9.QueryScheduledCorksByIDResponseAmino): _9.QueryScheduledCorksByIDResponse;
            toAmino(message: _9.QueryScheduledCorksByIDResponse): _9.QueryScheduledCorksByIDResponseAmino;
            fromAminoMsg(object: _9.QueryScheduledCorksByIDResponseAminoMsg): _9.QueryScheduledCorksByIDResponse;
            fromProtoMsg(message: _9.QueryScheduledCorksByIDResponseProtoMsg): _9.QueryScheduledCorksByIDResponse;
            toProto(message: _9.QueryScheduledCorksByIDResponse): Uint8Array;
            toProtoMsg(message: _9.QueryScheduledCorksByIDResponse): _9.QueryScheduledCorksByIDResponseProtoMsg;
        };
        QueryCorkResultRequest: {
            typeUrl: string;
            encode(message: _9.QueryCorkResultRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _9.QueryCorkResultRequest;
            fromPartial(object: Partial<_9.QueryCorkResultRequest>): _9.QueryCorkResultRequest;
            fromAmino(object: _9.QueryCorkResultRequestAmino): _9.QueryCorkResultRequest;
            toAmino(message: _9.QueryCorkResultRequest): _9.QueryCorkResultRequestAmino;
            fromAminoMsg(object: _9.QueryCorkResultRequestAminoMsg): _9.QueryCorkResultRequest;
            fromProtoMsg(message: _9.QueryCorkResultRequestProtoMsg): _9.QueryCorkResultRequest;
            toProto(message: _9.QueryCorkResultRequest): Uint8Array;
            toProtoMsg(message: _9.QueryCorkResultRequest): _9.QueryCorkResultRequestProtoMsg;
        };
        QueryCorkResultResponse: {
            typeUrl: string;
            encode(message: _9.QueryCorkResultResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _9.QueryCorkResultResponse;
            fromPartial(object: Partial<_9.QueryCorkResultResponse>): _9.QueryCorkResultResponse;
            fromAmino(object: _9.QueryCorkResultResponseAmino): _9.QueryCorkResultResponse;
            toAmino(message: _9.QueryCorkResultResponse): _9.QueryCorkResultResponseAmino;
            fromAminoMsg(object: _9.QueryCorkResultResponseAminoMsg): _9.QueryCorkResultResponse;
            fromProtoMsg(message: _9.QueryCorkResultResponseProtoMsg): _9.QueryCorkResultResponse;
            toProto(message: _9.QueryCorkResultResponse): Uint8Array;
            toProtoMsg(message: _9.QueryCorkResultResponse): _9.QueryCorkResultResponseProtoMsg;
        };
        QueryCorkResultsRequest: {
            typeUrl: string;
            encode(message: _9.QueryCorkResultsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _9.QueryCorkResultsRequest;
            fromPartial(object: Partial<_9.QueryCorkResultsRequest>): _9.QueryCorkResultsRequest;
            fromAmino(object: _9.QueryCorkResultsRequestAmino): _9.QueryCorkResultsRequest;
            toAmino(message: _9.QueryCorkResultsRequest): _9.QueryCorkResultsRequestAmino;
            fromAminoMsg(object: _9.QueryCorkResultsRequestAminoMsg): _9.QueryCorkResultsRequest;
            fromProtoMsg(message: _9.QueryCorkResultsRequestProtoMsg): _9.QueryCorkResultsRequest;
            toProto(message: _9.QueryCorkResultsRequest): Uint8Array;
            toProtoMsg(message: _9.QueryCorkResultsRequest): _9.QueryCorkResultsRequestProtoMsg;
        };
        QueryCorkResultsResponse: {
            typeUrl: string;
            encode(message: _9.QueryCorkResultsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _9.QueryCorkResultsResponse;
            fromPartial(object: Partial<_9.QueryCorkResultsResponse>): _9.QueryCorkResultsResponse;
            fromAmino(object: _9.QueryCorkResultsResponseAmino): _9.QueryCorkResultsResponse;
            toAmino(message: _9.QueryCorkResultsResponse): _9.QueryCorkResultsResponseAmino;
            fromAminoMsg(object: _9.QueryCorkResultsResponseAminoMsg): _9.QueryCorkResultsResponse;
            fromProtoMsg(message: _9.QueryCorkResultsResponseProtoMsg): _9.QueryCorkResultsResponse;
            toProto(message: _9.QueryCorkResultsResponse): Uint8Array;
            toProtoMsg(message: _9.QueryCorkResultsResponse): _9.QueryCorkResultsResponseProtoMsg;
        };
        QueryChainConfigurationsRequest: {
            typeUrl: string;
            encode(_: _9.QueryChainConfigurationsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(_: any): _9.QueryChainConfigurationsRequest;
            fromPartial(_: Partial<_9.QueryChainConfigurationsRequest>): _9.QueryChainConfigurationsRequest;
            fromAmino(_: _9.QueryChainConfigurationsRequestAmino): _9.QueryChainConfigurationsRequest;
            toAmino(_: _9.QueryChainConfigurationsRequest): _9.QueryChainConfigurationsRequestAmino;
            fromAminoMsg(object: _9.QueryChainConfigurationsRequestAminoMsg): _9.QueryChainConfigurationsRequest;
            fromProtoMsg(message: _9.QueryChainConfigurationsRequestProtoMsg): _9.QueryChainConfigurationsRequest;
            toProto(message: _9.QueryChainConfigurationsRequest): Uint8Array;
            toProtoMsg(message: _9.QueryChainConfigurationsRequest): _9.QueryChainConfigurationsRequestProtoMsg;
        };
        QueryChainConfigurationsResponse: {
            typeUrl: string;
            encode(message: _9.QueryChainConfigurationsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _9.QueryChainConfigurationsResponse;
            fromPartial(object: Partial<_9.QueryChainConfigurationsResponse>): _9.QueryChainConfigurationsResponse;
            fromAmino(object: _9.QueryChainConfigurationsResponseAmino): _9.QueryChainConfigurationsResponse;
            toAmino(message: _9.QueryChainConfigurationsResponse): _9.QueryChainConfigurationsResponseAmino;
            fromAminoMsg(object: _9.QueryChainConfigurationsResponseAminoMsg): _9.QueryChainConfigurationsResponse;
            fromProtoMsg(message: _9.QueryChainConfigurationsResponseProtoMsg): _9.QueryChainConfigurationsResponse;
            toProto(message: _9.QueryChainConfigurationsResponse): Uint8Array;
            toProtoMsg(message: _9.QueryChainConfigurationsResponse): _9.QueryChainConfigurationsResponseProtoMsg;
        };
        QueryAxelarContractCallNoncesRequest: {
            typeUrl: string;
            encode(_: _9.QueryAxelarContractCallNoncesRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(_: any): _9.QueryAxelarContractCallNoncesRequest;
            fromPartial(_: Partial<_9.QueryAxelarContractCallNoncesRequest>): _9.QueryAxelarContractCallNoncesRequest;
            fromAmino(_: _9.QueryAxelarContractCallNoncesRequestAmino): _9.QueryAxelarContractCallNoncesRequest;
            toAmino(_: _9.QueryAxelarContractCallNoncesRequest): _9.QueryAxelarContractCallNoncesRequestAmino;
            fromAminoMsg(object: _9.QueryAxelarContractCallNoncesRequestAminoMsg): _9.QueryAxelarContractCallNoncesRequest;
            fromProtoMsg(message: _9.QueryAxelarContractCallNoncesRequestProtoMsg): _9.QueryAxelarContractCallNoncesRequest;
            toProto(message: _9.QueryAxelarContractCallNoncesRequest): Uint8Array;
            toProtoMsg(message: _9.QueryAxelarContractCallNoncesRequest): _9.QueryAxelarContractCallNoncesRequestProtoMsg;
        };
        QueryAxelarContractCallNoncesResponse: {
            typeUrl: string;
            encode(message: _9.QueryAxelarContractCallNoncesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _9.QueryAxelarContractCallNoncesResponse;
            fromPartial(object: Partial<_9.QueryAxelarContractCallNoncesResponse>): _9.QueryAxelarContractCallNoncesResponse;
            fromAmino(object: _9.QueryAxelarContractCallNoncesResponseAmino): _9.QueryAxelarContractCallNoncesResponse;
            toAmino(message: _9.QueryAxelarContractCallNoncesResponse): _9.QueryAxelarContractCallNoncesResponseAmino;
            fromAminoMsg(object: _9.QueryAxelarContractCallNoncesResponseAminoMsg): _9.QueryAxelarContractCallNoncesResponse;
            fromProtoMsg(message: _9.QueryAxelarContractCallNoncesResponseProtoMsg): _9.QueryAxelarContractCallNoncesResponse;
            toProto(message: _9.QueryAxelarContractCallNoncesResponse): Uint8Array;
            toProtoMsg(message: _9.QueryAxelarContractCallNoncesResponse): _9.QueryAxelarContractCallNoncesResponseProtoMsg;
        };
        QueryAxelarProxyUpgradeDataRequest: {
            typeUrl: string;
            encode(_: _9.QueryAxelarProxyUpgradeDataRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(_: any): _9.QueryAxelarProxyUpgradeDataRequest;
            fromPartial(_: Partial<_9.QueryAxelarProxyUpgradeDataRequest>): _9.QueryAxelarProxyUpgradeDataRequest;
            fromAmino(_: _9.QueryAxelarProxyUpgradeDataRequestAmino): _9.QueryAxelarProxyUpgradeDataRequest;
            toAmino(_: _9.QueryAxelarProxyUpgradeDataRequest): _9.QueryAxelarProxyUpgradeDataRequestAmino;
            fromAminoMsg(object: _9.QueryAxelarProxyUpgradeDataRequestAminoMsg): _9.QueryAxelarProxyUpgradeDataRequest;
            fromProtoMsg(message: _9.QueryAxelarProxyUpgradeDataRequestProtoMsg): _9.QueryAxelarProxyUpgradeDataRequest;
            toProto(message: _9.QueryAxelarProxyUpgradeDataRequest): Uint8Array;
            toProtoMsg(message: _9.QueryAxelarProxyUpgradeDataRequest): _9.QueryAxelarProxyUpgradeDataRequestProtoMsg;
        };
        QueryAxelarProxyUpgradeDataResponse: {
            typeUrl: string;
            encode(message: _9.QueryAxelarProxyUpgradeDataResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _9.QueryAxelarProxyUpgradeDataResponse;
            fromPartial(object: Partial<_9.QueryAxelarProxyUpgradeDataResponse>): _9.QueryAxelarProxyUpgradeDataResponse;
            fromAmino(object: _9.QueryAxelarProxyUpgradeDataResponseAmino): _9.QueryAxelarProxyUpgradeDataResponse;
            toAmino(message: _9.QueryAxelarProxyUpgradeDataResponse): _9.QueryAxelarProxyUpgradeDataResponseAmino;
            fromAminoMsg(object: _9.QueryAxelarProxyUpgradeDataResponseAminoMsg): _9.QueryAxelarProxyUpgradeDataResponse;
            fromProtoMsg(message: _9.QueryAxelarProxyUpgradeDataResponseProtoMsg): _9.QueryAxelarProxyUpgradeDataResponse;
            toProto(message: _9.QueryAxelarProxyUpgradeDataResponse): Uint8Array;
            toProtoMsg(message: _9.QueryAxelarProxyUpgradeDataResponse): _9.QueryAxelarProxyUpgradeDataResponseProtoMsg;
        };
        QueryWinningAxelarCorkRequest: {
            typeUrl: string;
            encode(message: _9.QueryWinningAxelarCorkRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _9.QueryWinningAxelarCorkRequest;
            fromPartial(object: Partial<_9.QueryWinningAxelarCorkRequest>): _9.QueryWinningAxelarCorkRequest;
            fromAmino(object: _9.QueryWinningAxelarCorkRequestAmino): _9.QueryWinningAxelarCorkRequest;
            toAmino(message: _9.QueryWinningAxelarCorkRequest): _9.QueryWinningAxelarCorkRequestAmino;
            fromAminoMsg(object: _9.QueryWinningAxelarCorkRequestAminoMsg): _9.QueryWinningAxelarCorkRequest;
            fromProtoMsg(message: _9.QueryWinningAxelarCorkRequestProtoMsg): _9.QueryWinningAxelarCorkRequest;
            toProto(message: _9.QueryWinningAxelarCorkRequest): Uint8Array;
            toProtoMsg(message: _9.QueryWinningAxelarCorkRequest): _9.QueryWinningAxelarCorkRequestProtoMsg;
        };
        QueryWinningAxelarCorkResponse: {
            typeUrl: string;
            encode(message: _9.QueryWinningAxelarCorkResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _9.QueryWinningAxelarCorkResponse;
            fromPartial(object: Partial<_9.QueryWinningAxelarCorkResponse>): _9.QueryWinningAxelarCorkResponse;
            fromAmino(object: _9.QueryWinningAxelarCorkResponseAmino): _9.QueryWinningAxelarCorkResponse;
            toAmino(message: _9.QueryWinningAxelarCorkResponse): _9.QueryWinningAxelarCorkResponseAmino;
            fromAminoMsg(object: _9.QueryWinningAxelarCorkResponseAminoMsg): _9.QueryWinningAxelarCorkResponse;
            fromProtoMsg(message: _9.QueryWinningAxelarCorkResponseProtoMsg): _9.QueryWinningAxelarCorkResponse;
            toProto(message: _9.QueryWinningAxelarCorkResponse): Uint8Array;
            toProtoMsg(message: _9.QueryWinningAxelarCorkResponse): _9.QueryWinningAxelarCorkResponseProtoMsg;
        };
        QueryWinningAxelarCorksRequest: {
            typeUrl: string;
            encode(message: _9.QueryWinningAxelarCorksRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _9.QueryWinningAxelarCorksRequest;
            fromPartial(object: Partial<_9.QueryWinningAxelarCorksRequest>): _9.QueryWinningAxelarCorksRequest;
            fromAmino(object: _9.QueryWinningAxelarCorksRequestAmino): _9.QueryWinningAxelarCorksRequest;
            toAmino(message: _9.QueryWinningAxelarCorksRequest): _9.QueryWinningAxelarCorksRequestAmino;
            fromAminoMsg(object: _9.QueryWinningAxelarCorksRequestAminoMsg): _9.QueryWinningAxelarCorksRequest;
            fromProtoMsg(message: _9.QueryWinningAxelarCorksRequestProtoMsg): _9.QueryWinningAxelarCorksRequest;
            toProto(message: _9.QueryWinningAxelarCorksRequest): Uint8Array;
            toProtoMsg(message: _9.QueryWinningAxelarCorksRequest): _9.QueryWinningAxelarCorksRequestProtoMsg;
        };
        QueryWinningAxelarCorksResponse: {
            typeUrl: string;
            encode(message: _9.QueryWinningAxelarCorksResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _9.QueryWinningAxelarCorksResponse;
            fromPartial(object: Partial<_9.QueryWinningAxelarCorksResponse>): _9.QueryWinningAxelarCorksResponse;
            fromAmino(object: _9.QueryWinningAxelarCorksResponseAmino): _9.QueryWinningAxelarCorksResponse;
            toAmino(message: _9.QueryWinningAxelarCorksResponse): _9.QueryWinningAxelarCorksResponseAmino;
            fromAminoMsg(object: _9.QueryWinningAxelarCorksResponseAminoMsg): _9.QueryWinningAxelarCorksResponse;
            fromProtoMsg(message: _9.QueryWinningAxelarCorksResponseProtoMsg): _9.QueryWinningAxelarCorksResponse;
            toProto(message: _9.QueryWinningAxelarCorksResponse): Uint8Array;
            toProtoMsg(message: _9.QueryWinningAxelarCorksResponse): _9.QueryWinningAxelarCorksResponseProtoMsg;
        };
        AddAxelarManagedCellarIDsProposal: {
            typeUrl: string;
            encode(message: _8.AddAxelarManagedCellarIDsProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _8.AddAxelarManagedCellarIDsProposal;
            fromPartial(object: Partial<_8.AddAxelarManagedCellarIDsProposal>): _8.AddAxelarManagedCellarIDsProposal;
            fromAmino(object: _8.AddAxelarManagedCellarIDsProposalAmino): _8.AddAxelarManagedCellarIDsProposal;
            toAmino(message: _8.AddAxelarManagedCellarIDsProposal): _8.AddAxelarManagedCellarIDsProposalAmino;
            fromAminoMsg(object: _8.AddAxelarManagedCellarIDsProposalAminoMsg): _8.AddAxelarManagedCellarIDsProposal;
            fromProtoMsg(message: _8.AddAxelarManagedCellarIDsProposalProtoMsg): _8.AddAxelarManagedCellarIDsProposal;
            toProto(message: _8.AddAxelarManagedCellarIDsProposal): Uint8Array;
            toProtoMsg(message: _8.AddAxelarManagedCellarIDsProposal): _8.AddAxelarManagedCellarIDsProposalProtoMsg;
        };
        AddAxelarManagedCellarIDsProposalWithDeposit: {
            typeUrl: string;
            encode(message: _8.AddAxelarManagedCellarIDsProposalWithDeposit, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _8.AddAxelarManagedCellarIDsProposalWithDeposit;
            fromPartial(object: Partial<_8.AddAxelarManagedCellarIDsProposalWithDeposit>): _8.AddAxelarManagedCellarIDsProposalWithDeposit;
            fromAmino(object: _8.AddAxelarManagedCellarIDsProposalWithDepositAmino): _8.AddAxelarManagedCellarIDsProposalWithDeposit;
            toAmino(message: _8.AddAxelarManagedCellarIDsProposalWithDeposit): _8.AddAxelarManagedCellarIDsProposalWithDepositAmino;
            fromAminoMsg(object: _8.AddAxelarManagedCellarIDsProposalWithDepositAminoMsg): _8.AddAxelarManagedCellarIDsProposalWithDeposit;
            fromProtoMsg(message: _8.AddAxelarManagedCellarIDsProposalWithDepositProtoMsg): _8.AddAxelarManagedCellarIDsProposalWithDeposit;
            toProto(message: _8.AddAxelarManagedCellarIDsProposalWithDeposit): Uint8Array;
            toProtoMsg(message: _8.AddAxelarManagedCellarIDsProposalWithDeposit): _8.AddAxelarManagedCellarIDsProposalWithDepositProtoMsg;
        };
        RemoveAxelarManagedCellarIDsProposal: {
            typeUrl: string;
            encode(message: _8.RemoveAxelarManagedCellarIDsProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _8.RemoveAxelarManagedCellarIDsProposal;
            fromPartial(object: Partial<_8.RemoveAxelarManagedCellarIDsProposal>): _8.RemoveAxelarManagedCellarIDsProposal;
            fromAmino(object: _8.RemoveAxelarManagedCellarIDsProposalAmino): _8.RemoveAxelarManagedCellarIDsProposal;
            toAmino(message: _8.RemoveAxelarManagedCellarIDsProposal): _8.RemoveAxelarManagedCellarIDsProposalAmino;
            fromAminoMsg(object: _8.RemoveAxelarManagedCellarIDsProposalAminoMsg): _8.RemoveAxelarManagedCellarIDsProposal;
            fromProtoMsg(message: _8.RemoveAxelarManagedCellarIDsProposalProtoMsg): _8.RemoveAxelarManagedCellarIDsProposal;
            toProto(message: _8.RemoveAxelarManagedCellarIDsProposal): Uint8Array;
            toProtoMsg(message: _8.RemoveAxelarManagedCellarIDsProposal): _8.RemoveAxelarManagedCellarIDsProposalProtoMsg;
        };
        RemoveAxelarManagedCellarIDsProposalWithDeposit: {
            typeUrl: string;
            encode(message: _8.RemoveAxelarManagedCellarIDsProposalWithDeposit, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _8.RemoveAxelarManagedCellarIDsProposalWithDeposit;
            fromPartial(object: Partial<_8.RemoveAxelarManagedCellarIDsProposalWithDeposit>): _8.RemoveAxelarManagedCellarIDsProposalWithDeposit;
            fromAmino(object: _8.RemoveAxelarManagedCellarIDsProposalWithDepositAmino): _8.RemoveAxelarManagedCellarIDsProposalWithDeposit;
            toAmino(message: _8.RemoveAxelarManagedCellarIDsProposalWithDeposit): _8.RemoveAxelarManagedCellarIDsProposalWithDepositAmino;
            fromAminoMsg(object: _8.RemoveAxelarManagedCellarIDsProposalWithDepositAminoMsg): _8.RemoveAxelarManagedCellarIDsProposalWithDeposit;
            fromProtoMsg(message: _8.RemoveAxelarManagedCellarIDsProposalWithDepositProtoMsg): _8.RemoveAxelarManagedCellarIDsProposalWithDeposit;
            toProto(message: _8.RemoveAxelarManagedCellarIDsProposalWithDeposit): Uint8Array;
            toProtoMsg(message: _8.RemoveAxelarManagedCellarIDsProposalWithDeposit): _8.RemoveAxelarManagedCellarIDsProposalWithDepositProtoMsg;
        };
        AxelarScheduledCorkProposal: {
            typeUrl: string;
            encode(message: _8.AxelarScheduledCorkProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _8.AxelarScheduledCorkProposal;
            fromPartial(object: Partial<_8.AxelarScheduledCorkProposal>): _8.AxelarScheduledCorkProposal;
            fromAmino(object: _8.AxelarScheduledCorkProposalAmino): _8.AxelarScheduledCorkProposal;
            toAmino(message: _8.AxelarScheduledCorkProposal): _8.AxelarScheduledCorkProposalAmino;
            fromAminoMsg(object: _8.AxelarScheduledCorkProposalAminoMsg): _8.AxelarScheduledCorkProposal;
            fromProtoMsg(message: _8.AxelarScheduledCorkProposalProtoMsg): _8.AxelarScheduledCorkProposal;
            toProto(message: _8.AxelarScheduledCorkProposal): Uint8Array;
            toProtoMsg(message: _8.AxelarScheduledCorkProposal): _8.AxelarScheduledCorkProposalProtoMsg;
        };
        AxelarScheduledCorkProposalWithDeposit: {
            typeUrl: string;
            encode(message: _8.AxelarScheduledCorkProposalWithDeposit, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _8.AxelarScheduledCorkProposalWithDeposit;
            fromPartial(object: Partial<_8.AxelarScheduledCorkProposalWithDeposit>): _8.AxelarScheduledCorkProposalWithDeposit;
            fromAmino(object: _8.AxelarScheduledCorkProposalWithDepositAmino): _8.AxelarScheduledCorkProposalWithDeposit;
            toAmino(message: _8.AxelarScheduledCorkProposalWithDeposit): _8.AxelarScheduledCorkProposalWithDepositAmino;
            fromAminoMsg(object: _8.AxelarScheduledCorkProposalWithDepositAminoMsg): _8.AxelarScheduledCorkProposalWithDeposit;
            fromProtoMsg(message: _8.AxelarScheduledCorkProposalWithDepositProtoMsg): _8.AxelarScheduledCorkProposalWithDeposit;
            toProto(message: _8.AxelarScheduledCorkProposalWithDeposit): Uint8Array;
            toProtoMsg(message: _8.AxelarScheduledCorkProposalWithDeposit): _8.AxelarScheduledCorkProposalWithDepositProtoMsg;
        };
        AxelarCommunityPoolSpendProposal: {
            typeUrl: string;
            encode(message: _8.AxelarCommunityPoolSpendProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _8.AxelarCommunityPoolSpendProposal;
            fromPartial(object: Partial<_8.AxelarCommunityPoolSpendProposal>): _8.AxelarCommunityPoolSpendProposal;
            fromAmino(object: _8.AxelarCommunityPoolSpendProposalAmino): _8.AxelarCommunityPoolSpendProposal;
            toAmino(message: _8.AxelarCommunityPoolSpendProposal): _8.AxelarCommunityPoolSpendProposalAmino;
            fromAminoMsg(object: _8.AxelarCommunityPoolSpendProposalAminoMsg): _8.AxelarCommunityPoolSpendProposal;
            fromProtoMsg(message: _8.AxelarCommunityPoolSpendProposalProtoMsg): _8.AxelarCommunityPoolSpendProposal;
            toProto(message: _8.AxelarCommunityPoolSpendProposal): Uint8Array;
            toProtoMsg(message: _8.AxelarCommunityPoolSpendProposal): _8.AxelarCommunityPoolSpendProposalProtoMsg;
        };
        AxelarCommunityPoolSpendProposalForCLI: {
            typeUrl: string;
            encode(message: _8.AxelarCommunityPoolSpendProposalForCLI, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _8.AxelarCommunityPoolSpendProposalForCLI;
            fromPartial(object: Partial<_8.AxelarCommunityPoolSpendProposalForCLI>): _8.AxelarCommunityPoolSpendProposalForCLI;
            fromAmino(object: _8.AxelarCommunityPoolSpendProposalForCLIAmino): _8.AxelarCommunityPoolSpendProposalForCLI;
            toAmino(message: _8.AxelarCommunityPoolSpendProposalForCLI): _8.AxelarCommunityPoolSpendProposalForCLIAmino;
            fromAminoMsg(object: _8.AxelarCommunityPoolSpendProposalForCLIAminoMsg): _8.AxelarCommunityPoolSpendProposalForCLI;
            fromProtoMsg(message: _8.AxelarCommunityPoolSpendProposalForCLIProtoMsg): _8.AxelarCommunityPoolSpendProposalForCLI;
            toProto(message: _8.AxelarCommunityPoolSpendProposalForCLI): Uint8Array;
            toProtoMsg(message: _8.AxelarCommunityPoolSpendProposalForCLI): _8.AxelarCommunityPoolSpendProposalForCLIProtoMsg;
        };
        AddChainConfigurationProposal: {
            typeUrl: string;
            encode(message: _8.AddChainConfigurationProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _8.AddChainConfigurationProposal;
            fromPartial(object: Partial<_8.AddChainConfigurationProposal>): _8.AddChainConfigurationProposal;
            fromAmino(object: _8.AddChainConfigurationProposalAmino): _8.AddChainConfigurationProposal;
            toAmino(message: _8.AddChainConfigurationProposal): _8.AddChainConfigurationProposalAmino;
            fromAminoMsg(object: _8.AddChainConfigurationProposalAminoMsg): _8.AddChainConfigurationProposal;
            fromProtoMsg(message: _8.AddChainConfigurationProposalProtoMsg): _8.AddChainConfigurationProposal;
            toProto(message: _8.AddChainConfigurationProposal): Uint8Array;
            toProtoMsg(message: _8.AddChainConfigurationProposal): _8.AddChainConfigurationProposalProtoMsg;
        };
        AddChainConfigurationProposalWithDeposit: {
            typeUrl: string;
            encode(message: _8.AddChainConfigurationProposalWithDeposit, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _8.AddChainConfigurationProposalWithDeposit;
            fromPartial(object: Partial<_8.AddChainConfigurationProposalWithDeposit>): _8.AddChainConfigurationProposalWithDeposit;
            fromAmino(object: _8.AddChainConfigurationProposalWithDepositAmino): _8.AddChainConfigurationProposalWithDeposit;
            toAmino(message: _8.AddChainConfigurationProposalWithDeposit): _8.AddChainConfigurationProposalWithDepositAmino;
            fromAminoMsg(object: _8.AddChainConfigurationProposalWithDepositAminoMsg): _8.AddChainConfigurationProposalWithDeposit;
            fromProtoMsg(message: _8.AddChainConfigurationProposalWithDepositProtoMsg): _8.AddChainConfigurationProposalWithDeposit;
            toProto(message: _8.AddChainConfigurationProposalWithDeposit): Uint8Array;
            toProtoMsg(message: _8.AddChainConfigurationProposalWithDeposit): _8.AddChainConfigurationProposalWithDepositProtoMsg;
        };
        RemoveChainConfigurationProposal: {
            typeUrl: string;
            encode(message: _8.RemoveChainConfigurationProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _8.RemoveChainConfigurationProposal;
            fromPartial(object: Partial<_8.RemoveChainConfigurationProposal>): _8.RemoveChainConfigurationProposal;
            fromAmino(object: _8.RemoveChainConfigurationProposalAmino): _8.RemoveChainConfigurationProposal;
            toAmino(message: _8.RemoveChainConfigurationProposal): _8.RemoveChainConfigurationProposalAmino;
            fromAminoMsg(object: _8.RemoveChainConfigurationProposalAminoMsg): _8.RemoveChainConfigurationProposal;
            fromProtoMsg(message: _8.RemoveChainConfigurationProposalProtoMsg): _8.RemoveChainConfigurationProposal;
            toProto(message: _8.RemoveChainConfigurationProposal): Uint8Array;
            toProtoMsg(message: _8.RemoveChainConfigurationProposal): _8.RemoveChainConfigurationProposalProtoMsg;
        };
        RemoveChainConfigurationProposalWithDeposit: {
            typeUrl: string;
            encode(message: _8.RemoveChainConfigurationProposalWithDeposit, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _8.RemoveChainConfigurationProposalWithDeposit;
            fromPartial(object: Partial<_8.RemoveChainConfigurationProposalWithDeposit>): _8.RemoveChainConfigurationProposalWithDeposit;
            fromAmino(object: _8.RemoveChainConfigurationProposalWithDepositAmino): _8.RemoveChainConfigurationProposalWithDeposit;
            toAmino(message: _8.RemoveChainConfigurationProposalWithDeposit): _8.RemoveChainConfigurationProposalWithDepositAmino;
            fromAminoMsg(object: _8.RemoveChainConfigurationProposalWithDepositAminoMsg): _8.RemoveChainConfigurationProposalWithDeposit;
            fromProtoMsg(message: _8.RemoveChainConfigurationProposalWithDepositProtoMsg): _8.RemoveChainConfigurationProposalWithDeposit;
            toProto(message: _8.RemoveChainConfigurationProposalWithDeposit): Uint8Array;
            toProtoMsg(message: _8.RemoveChainConfigurationProposalWithDeposit): _8.RemoveChainConfigurationProposalWithDepositProtoMsg;
        };
        UpgradeAxelarProxyContractProposal: {
            typeUrl: string;
            encode(message: _8.UpgradeAxelarProxyContractProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _8.UpgradeAxelarProxyContractProposal;
            fromPartial(object: Partial<_8.UpgradeAxelarProxyContractProposal>): _8.UpgradeAxelarProxyContractProposal;
            fromAmino(object: _8.UpgradeAxelarProxyContractProposalAmino): _8.UpgradeAxelarProxyContractProposal;
            toAmino(message: _8.UpgradeAxelarProxyContractProposal): _8.UpgradeAxelarProxyContractProposalAmino;
            fromAminoMsg(object: _8.UpgradeAxelarProxyContractProposalAminoMsg): _8.UpgradeAxelarProxyContractProposal;
            fromProtoMsg(message: _8.UpgradeAxelarProxyContractProposalProtoMsg): _8.UpgradeAxelarProxyContractProposal;
            toProto(message: _8.UpgradeAxelarProxyContractProposal): Uint8Array;
            toProtoMsg(message: _8.UpgradeAxelarProxyContractProposal): _8.UpgradeAxelarProxyContractProposalProtoMsg;
        };
        UpgradeAxelarProxyContractProposalWithDeposit: {
            typeUrl: string;
            encode(message: _8.UpgradeAxelarProxyContractProposalWithDeposit, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _8.UpgradeAxelarProxyContractProposalWithDeposit;
            fromPartial(object: Partial<_8.UpgradeAxelarProxyContractProposalWithDeposit>): _8.UpgradeAxelarProxyContractProposalWithDeposit;
            fromAmino(object: _8.UpgradeAxelarProxyContractProposalWithDepositAmino): _8.UpgradeAxelarProxyContractProposalWithDeposit;
            toAmino(message: _8.UpgradeAxelarProxyContractProposalWithDeposit): _8.UpgradeAxelarProxyContractProposalWithDepositAmino;
            fromAminoMsg(object: _8.UpgradeAxelarProxyContractProposalWithDepositAminoMsg): _8.UpgradeAxelarProxyContractProposalWithDeposit;
            fromProtoMsg(message: _8.UpgradeAxelarProxyContractProposalWithDepositProtoMsg): _8.UpgradeAxelarProxyContractProposalWithDeposit;
            toProto(message: _8.UpgradeAxelarProxyContractProposalWithDeposit): Uint8Array;
            toProtoMsg(message: _8.UpgradeAxelarProxyContractProposalWithDeposit): _8.UpgradeAxelarProxyContractProposalWithDepositProtoMsg;
        };
        CancelAxelarProxyContractUpgradeProposal: {
            typeUrl: string;
            encode(message: _8.CancelAxelarProxyContractUpgradeProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _8.CancelAxelarProxyContractUpgradeProposal;
            fromPartial(object: Partial<_8.CancelAxelarProxyContractUpgradeProposal>): _8.CancelAxelarProxyContractUpgradeProposal;
            fromAmino(object: _8.CancelAxelarProxyContractUpgradeProposalAmino): _8.CancelAxelarProxyContractUpgradeProposal;
            toAmino(message: _8.CancelAxelarProxyContractUpgradeProposal): _8.CancelAxelarProxyContractUpgradeProposalAmino;
            fromAminoMsg(object: _8.CancelAxelarProxyContractUpgradeProposalAminoMsg): _8.CancelAxelarProxyContractUpgradeProposal;
            fromProtoMsg(message: _8.CancelAxelarProxyContractUpgradeProposalProtoMsg): _8.CancelAxelarProxyContractUpgradeProposal;
            toProto(message: _8.CancelAxelarProxyContractUpgradeProposal): Uint8Array;
            toProtoMsg(message: _8.CancelAxelarProxyContractUpgradeProposal): _8.CancelAxelarProxyContractUpgradeProposalProtoMsg;
        };
        CancelAxelarProxyContractUpgradeProposalWithDeposit: {
            typeUrl: string;
            encode(message: _8.CancelAxelarProxyContractUpgradeProposalWithDeposit, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _8.CancelAxelarProxyContractUpgradeProposalWithDeposit;
            fromPartial(object: Partial<_8.CancelAxelarProxyContractUpgradeProposalWithDeposit>): _8.CancelAxelarProxyContractUpgradeProposalWithDeposit;
            fromAmino(object: _8.CancelAxelarProxyContractUpgradeProposalWithDepositAmino): _8.CancelAxelarProxyContractUpgradeProposalWithDeposit;
            toAmino(message: _8.CancelAxelarProxyContractUpgradeProposalWithDeposit): _8.CancelAxelarProxyContractUpgradeProposalWithDepositAmino;
            fromAminoMsg(object: _8.CancelAxelarProxyContractUpgradeProposalWithDepositAminoMsg): _8.CancelAxelarProxyContractUpgradeProposalWithDeposit;
            fromProtoMsg(message: _8.CancelAxelarProxyContractUpgradeProposalWithDepositProtoMsg): _8.CancelAxelarProxyContractUpgradeProposalWithDeposit;
            toProto(message: _8.CancelAxelarProxyContractUpgradeProposalWithDeposit): Uint8Array;
            toProtoMsg(message: _8.CancelAxelarProxyContractUpgradeProposalWithDeposit): _8.CancelAxelarProxyContractUpgradeProposalWithDepositProtoMsg;
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
        ScheduleCorkEvent: {
            typeUrl: string;
            encode(message: _6.ScheduleCorkEvent, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _6.ScheduleCorkEvent;
            fromPartial(object: Partial<_6.ScheduleCorkEvent>): _6.ScheduleCorkEvent;
            fromAmino(object: _6.ScheduleCorkEventAmino): _6.ScheduleCorkEvent;
            toAmino(message: _6.ScheduleCorkEvent): _6.ScheduleCorkEventAmino;
            fromAminoMsg(object: _6.ScheduleCorkEventAminoMsg): _6.ScheduleCorkEvent;
            fromProtoMsg(message: _6.ScheduleCorkEventProtoMsg): _6.ScheduleCorkEvent;
            toProto(message: _6.ScheduleCorkEvent): Uint8Array;
            toProtoMsg(message: _6.ScheduleCorkEvent): _6.ScheduleCorkEventProtoMsg;
        };
        AxelarCork: {
            typeUrl: string;
            encode(message: _5.AxelarCork, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _5.AxelarCork;
            fromPartial(object: Partial<_5.AxelarCork>): _5.AxelarCork;
            fromAmino(object: _5.AxelarCorkAmino): _5.AxelarCork;
            toAmino(message: _5.AxelarCork): _5.AxelarCorkAmino;
            fromAminoMsg(object: _5.AxelarCorkAminoMsg): _5.AxelarCork;
            fromProtoMsg(message: _5.AxelarCorkProtoMsg): _5.AxelarCork;
            toProto(message: _5.AxelarCork): Uint8Array;
            toProtoMsg(message: _5.AxelarCork): _5.AxelarCorkProtoMsg;
        };
        ScheduledAxelarCork: {
            typeUrl: string;
            encode(message: _5.ScheduledAxelarCork, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _5.ScheduledAxelarCork;
            fromPartial(object: Partial<_5.ScheduledAxelarCork>): _5.ScheduledAxelarCork;
            fromAmino(object: _5.ScheduledAxelarCorkAmino): _5.ScheduledAxelarCork;
            toAmino(message: _5.ScheduledAxelarCork): _5.ScheduledAxelarCorkAmino;
            fromAminoMsg(object: _5.ScheduledAxelarCorkAminoMsg): _5.ScheduledAxelarCork;
            fromProtoMsg(message: _5.ScheduledAxelarCorkProtoMsg): _5.ScheduledAxelarCork;
            toProto(message: _5.ScheduledAxelarCork): Uint8Array;
            toProtoMsg(message: _5.ScheduledAxelarCork): _5.ScheduledAxelarCorkProtoMsg;
        };
        ScheduledAxelarCorks: {
            typeUrl: string;
            encode(message: _5.ScheduledAxelarCorks, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _5.ScheduledAxelarCorks;
            fromPartial(object: Partial<_5.ScheduledAxelarCorks>): _5.ScheduledAxelarCorks;
            fromAmino(object: _5.ScheduledAxelarCorksAmino): _5.ScheduledAxelarCorks;
            toAmino(message: _5.ScheduledAxelarCorks): _5.ScheduledAxelarCorksAmino;
            fromAminoMsg(object: _5.ScheduledAxelarCorksAminoMsg): _5.ScheduledAxelarCorks;
            fromProtoMsg(message: _5.ScheduledAxelarCorksProtoMsg): _5.ScheduledAxelarCorks;
            toProto(message: _5.ScheduledAxelarCorks): Uint8Array;
            toProtoMsg(message: _5.ScheduledAxelarCorks): _5.ScheduledAxelarCorksProtoMsg;
        };
        AxelarCorkResult: {
            typeUrl: string;
            encode(message: _5.AxelarCorkResult, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _5.AxelarCorkResult;
            fromPartial(object: Partial<_5.AxelarCorkResult>): _5.AxelarCorkResult;
            fromAmino(object: _5.AxelarCorkResultAmino): _5.AxelarCorkResult;
            toAmino(message: _5.AxelarCorkResult): _5.AxelarCorkResultAmino;
            fromAminoMsg(object: _5.AxelarCorkResultAminoMsg): _5.AxelarCorkResult;
            fromProtoMsg(message: _5.AxelarCorkResultProtoMsg): _5.AxelarCorkResult;
            toProto(message: _5.AxelarCorkResult): Uint8Array;
            toProtoMsg(message: _5.AxelarCorkResult): _5.AxelarCorkResultProtoMsg;
        };
        AxelarCorkResults: {
            typeUrl: string;
            encode(message: _5.AxelarCorkResults, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _5.AxelarCorkResults;
            fromPartial(object: Partial<_5.AxelarCorkResults>): _5.AxelarCorkResults;
            fromAmino(object: _5.AxelarCorkResultsAmino): _5.AxelarCorkResults;
            toAmino(message: _5.AxelarCorkResults): _5.AxelarCorkResultsAmino;
            fromAminoMsg(object: _5.AxelarCorkResultsAminoMsg): _5.AxelarCorkResults;
            fromProtoMsg(message: _5.AxelarCorkResultsProtoMsg): _5.AxelarCorkResults;
            toProto(message: _5.AxelarCorkResults): Uint8Array;
            toProtoMsg(message: _5.AxelarCorkResults): _5.AxelarCorkResultsProtoMsg;
        };
        CellarIDSet: {
            typeUrl: string;
            encode(message: _5.CellarIDSet, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _5.CellarIDSet;
            fromPartial(object: Partial<_5.CellarIDSet>): _5.CellarIDSet;
            fromAmino(object: _5.CellarIDSetAmino): _5.CellarIDSet;
            toAmino(message: _5.CellarIDSet): _5.CellarIDSetAmino;
            fromAminoMsg(object: _5.CellarIDSetAminoMsg): _5.CellarIDSet;
            fromProtoMsg(message: _5.CellarIDSetProtoMsg): _5.CellarIDSet;
            toProto(message: _5.CellarIDSet): Uint8Array;
            toProtoMsg(message: _5.CellarIDSet): _5.CellarIDSetProtoMsg;
        };
        ChainConfiguration: {
            typeUrl: string;
            encode(message: _5.ChainConfiguration, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _5.ChainConfiguration;
            fromPartial(object: Partial<_5.ChainConfiguration>): _5.ChainConfiguration;
            fromAmino(object: _5.ChainConfigurationAmino): _5.ChainConfiguration;
            toAmino(message: _5.ChainConfiguration): _5.ChainConfigurationAmino;
            fromAminoMsg(object: _5.ChainConfigurationAminoMsg): _5.ChainConfiguration;
            fromProtoMsg(message: _5.ChainConfigurationProtoMsg): _5.ChainConfiguration;
            toProto(message: _5.ChainConfiguration): Uint8Array;
            toProtoMsg(message: _5.ChainConfiguration): _5.ChainConfigurationProtoMsg;
        };
        ChainConfigurations: {
            typeUrl: string;
            encode(message: _5.ChainConfigurations, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _5.ChainConfigurations;
            fromPartial(object: Partial<_5.ChainConfigurations>): _5.ChainConfigurations;
            fromAmino(object: _5.ChainConfigurationsAmino): _5.ChainConfigurations;
            toAmino(message: _5.ChainConfigurations): _5.ChainConfigurationsAmino;
            fromAminoMsg(object: _5.ChainConfigurationsAminoMsg): _5.ChainConfigurations;
            fromProtoMsg(message: _5.ChainConfigurationsProtoMsg): _5.ChainConfigurations;
            toProto(message: _5.ChainConfigurations): Uint8Array;
            toProtoMsg(message: _5.ChainConfigurations): _5.ChainConfigurationsProtoMsg;
        };
        AxelarContractCallNonce: {
            typeUrl: string;
            encode(message: _5.AxelarContractCallNonce, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _5.AxelarContractCallNonce;
            fromPartial(object: Partial<_5.AxelarContractCallNonce>): _5.AxelarContractCallNonce;
            fromAmino(object: _5.AxelarContractCallNonceAmino): _5.AxelarContractCallNonce;
            toAmino(message: _5.AxelarContractCallNonce): _5.AxelarContractCallNonceAmino;
            fromAminoMsg(object: _5.AxelarContractCallNonceAminoMsg): _5.AxelarContractCallNonce;
            fromProtoMsg(message: _5.AxelarContractCallNonceProtoMsg): _5.AxelarContractCallNonce;
            toProto(message: _5.AxelarContractCallNonce): Uint8Array;
            toProtoMsg(message: _5.AxelarContractCallNonce): _5.AxelarContractCallNonceProtoMsg;
        };
        AxelarUpgradeData: {
            typeUrl: string;
            encode(message: _5.AxelarUpgradeData, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _5.AxelarUpgradeData;
            fromPartial(object: Partial<_5.AxelarUpgradeData>): _5.AxelarUpgradeData;
            fromAmino(object: _5.AxelarUpgradeDataAmino): _5.AxelarUpgradeData;
            toAmino(message: _5.AxelarUpgradeData): _5.AxelarUpgradeDataAmino;
            fromAminoMsg(object: _5.AxelarUpgradeDataAminoMsg): _5.AxelarUpgradeData;
            fromProtoMsg(message: _5.AxelarUpgradeDataProtoMsg): _5.AxelarUpgradeData;
            toProto(message: _5.AxelarUpgradeData): Uint8Array;
            toProtoMsg(message: _5.AxelarUpgradeData): _5.AxelarUpgradeDataProtoMsg;
        };
        WinningAxelarCork: {
            typeUrl: string;
            encode(message: _5.WinningAxelarCork, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _5.WinningAxelarCork;
            fromPartial(object: Partial<_5.WinningAxelarCork>): _5.WinningAxelarCork;
            fromAmino(object: _5.WinningAxelarCorkAmino): _5.WinningAxelarCork;
            toAmino(message: _5.WinningAxelarCork): _5.WinningAxelarCorkAmino;
            fromAminoMsg(object: _5.WinningAxelarCorkAminoMsg): _5.WinningAxelarCork;
            fromProtoMsg(message: _5.WinningAxelarCorkProtoMsg): _5.WinningAxelarCork;
            toProto(message: _5.WinningAxelarCork): Uint8Array;
            toProtoMsg(message: _5.WinningAxelarCork): _5.WinningAxelarCorkProtoMsg;
        };
    };
    const ClientFactory: {
        createRPCMsgClient: ({ rpc }: {
            rpc: import("../helpers").Rpc;
        }) => Promise<{
            axelarcork: {
                v1: _152.MsgClientImpl;
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
            rpcEndpoint: string | import("@cosmjs/tendermint-rpc").HttpEndpoint;
        }) => Promise<{
            axelarcork: {
                v1: {
                    queryParams(request?: _9.QueryParamsRequest): Promise<_9.QueryParamsResponse>;
                    queryCellarIDs(request?: _9.QueryCellarIDsRequest): Promise<_9.QueryCellarIDsResponse>;
                    queryCellarIDsByChainID(request: _9.QueryCellarIDsByChainIDRequest): Promise<_9.QueryCellarIDsByChainIDResponse>;
                    queryScheduledCorks(request: _9.QueryScheduledCorksRequest): Promise<_9.QueryScheduledCorksResponse>;
                    queryScheduledBlockHeights(request: _9.QueryScheduledBlockHeightsRequest): Promise<_9.QueryScheduledBlockHeightsResponse>;
                    queryScheduledCorksByBlockHeight(request: _9.QueryScheduledCorksByBlockHeightRequest): Promise<_9.QueryScheduledCorksByBlockHeightResponse>;
                    queryScheduledCorksByID(request: _9.QueryScheduledCorksByIDRequest): Promise<_9.QueryScheduledCorksByIDResponse>;
                    queryCorkResult(request: _9.QueryCorkResultRequest): Promise<_9.QueryCorkResultResponse>;
                    queryCorkResults(request: _9.QueryCorkResultsRequest): Promise<_9.QueryCorkResultsResponse>;
                    queryChainConfigurations(request?: _9.QueryChainConfigurationsRequest): Promise<_9.QueryChainConfigurationsResponse>;
                    queryAxelarContractCallNonces(request?: _9.QueryAxelarContractCallNoncesRequest): Promise<_9.QueryAxelarContractCallNoncesResponse>;
                    queryAxelarProxyUpgradeData(request?: _9.QueryAxelarProxyUpgradeDataRequest): Promise<_9.QueryAxelarProxyUpgradeDataResponse>;
                    queryWinningAxelarCork(request: _9.QueryWinningAxelarCorkRequest): Promise<_9.QueryWinningAxelarCorkResponse>;
                    queryWinningAxelarCorks(request: _9.QueryWinningAxelarCorksRequest): Promise<_9.QueryWinningAxelarCorksResponse>;
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
            axelarcork: {
                v1: _150.LCDQueryClient;
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
