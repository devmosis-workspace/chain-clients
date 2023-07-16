import * as _0 from "../contractmanager/genesis";
import * as _1 from "../contractmanager/params";
import * as _2 from "../contractmanager/query";
import * as _3 from "../cron/genesis";
import * as _4 from "../cron/params";
import * as _5 from "../cron/query";
import * as _6 from "../cron/schedule";
import * as _8 from "../feeburner/genesis";
import * as _9 from "../feeburner/params";
import * as _10 from "../feeburner/query";
import * as _11 from "../feeburner/total_burned_neutrons_amount";
import * as _12 from "../feerefunder/fee";
import * as _13 from "../feerefunder/genesis";
import * as _14 from "../feerefunder/params";
import * as _15 from "../feerefunder/query";
import * as _16 from "../interchainqueries/genesis";
import * as _17 from "../interchainqueries/params";
import * as _18 from "../interchainqueries/query";
import * as _19 from "../interchainqueries/tx";
import * as _20 from "../interchaintxs/v1/genesis";
import * as _21 from "../interchaintxs/v1/params";
import * as _22 from "../interchaintxs/v1/query";
import * as _24 from "../transfer/v1/tx";
import * as _176 from "../contractmanager/query.rpc.Query";
import * as _177 from "../cron/query.rpc.Query";
import * as _178 from "../feeburner/query.rpc.Query";
import * as _179 from "../feerefunder/query.rpc.Query";
import * as _180 from "../interchainqueries/query.rpc.Query";
import * as _181 from "../interchaintxs/v1/query.rpc.Query";
import * as _182 from "../transfer/v1/query.rpc.Query";
import * as _183 from "../interchainqueries/tx.rpc.msg";
import * as _184 from "../interchaintxs/v1/tx.rpc.msg";
import * as _185 from "../transfer/v1/tx.rpc.msg";
export declare namespace neutron {
    const contractmanager: {
        QueryClientImpl: typeof _176.QueryClientImpl;
        createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
            params(request?: _2.QueryParamsRequest): Promise<_2.QueryParamsResponse>;
            addressFailures(request: _2.QueryFailuresRequest): Promise<_2.QueryFailuresResponse>;
            failures(request: _2.QueryFailuresRequest): Promise<_2.QueryFailuresResponse>;
        };
        QueryParamsRequest: {
            encode(_: _2.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(_: any): _2.QueryParamsRequest;
            fromPartial(_: Partial<_2.QueryParamsRequest>): _2.QueryParamsRequest;
        };
        QueryParamsResponse: {
            encode(message: _2.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _2.QueryParamsResponse;
            fromPartial(object: Partial<_2.QueryParamsResponse>): _2.QueryParamsResponse;
        };
        QueryFailuresRequest: {
            encode(message: _2.QueryFailuresRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _2.QueryFailuresRequest;
            fromPartial(object: Partial<_2.QueryFailuresRequest>): _2.QueryFailuresRequest;
        };
        QueryFailuresResponse: {
            encode(message: _2.QueryFailuresResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _2.QueryFailuresResponse;
            fromPartial(object: Partial<_2.QueryFailuresResponse>): _2.QueryFailuresResponse;
        };
        Params: {
            encode(_: _1.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(_: any): _1.Params;
            fromPartial(_: Partial<_1.Params>): _1.Params;
        };
        Failure: {
            encode(message: _0.Failure, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _0.Failure;
            fromPartial(object: Partial<_0.Failure>): _0.Failure;
        };
        GenesisState: {
            encode(message: _0.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _0.GenesisState;
            fromPartial(object: Partial<_0.GenesisState>): _0.GenesisState;
        };
    };
    const cron: {
        QueryClientImpl: typeof _177.QueryClientImpl;
        createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
            params(request?: _5.QueryParamsRequest): Promise<_5.QueryParamsResponse>;
            schedule(request: _5.QueryGetScheduleRequest): Promise<_5.QueryGetScheduleResponse>;
            schedules(request?: _5.QuerySchedulesRequest): Promise<_5.QuerySchedulesResponse>;
        };
        Schedule: {
            encode(message: _6.Schedule, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _6.Schedule;
            fromPartial(object: Partial<_6.Schedule>): _6.Schedule;
        };
        MsgExecuteContract: {
            encode(message: _6.MsgExecuteContract, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _6.MsgExecuteContract;
            fromPartial(object: Partial<_6.MsgExecuteContract>): _6.MsgExecuteContract;
        };
        ScheduleCount: {
            encode(message: _6.ScheduleCount, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _6.ScheduleCount;
            fromPartial(object: Partial<_6.ScheduleCount>): _6.ScheduleCount;
        };
        QueryParamsRequest: {
            encode(_: _5.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(_: any): _5.QueryParamsRequest;
            fromPartial(_: Partial<_5.QueryParamsRequest>): _5.QueryParamsRequest;
        };
        QueryParamsResponse: {
            encode(message: _5.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _5.QueryParamsResponse;
            fromPartial(object: Partial<_5.QueryParamsResponse>): _5.QueryParamsResponse;
        };
        QueryGetScheduleRequest: {
            encode(message: _5.QueryGetScheduleRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _5.QueryGetScheduleRequest;
            fromPartial(object: Partial<_5.QueryGetScheduleRequest>): _5.QueryGetScheduleRequest;
        };
        QueryGetScheduleResponse: {
            encode(message: _5.QueryGetScheduleResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _5.QueryGetScheduleResponse;
            fromPartial(object: Partial<_5.QueryGetScheduleResponse>): _5.QueryGetScheduleResponse;
        };
        QuerySchedulesRequest: {
            encode(message: _5.QuerySchedulesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _5.QuerySchedulesRequest;
            fromPartial(object: Partial<_5.QuerySchedulesRequest>): _5.QuerySchedulesRequest;
        };
        QuerySchedulesResponse: {
            encode(message: _5.QuerySchedulesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _5.QuerySchedulesResponse;
            fromPartial(object: Partial<_5.QuerySchedulesResponse>): _5.QuerySchedulesResponse;
        };
        Params: {
            encode(message: _4.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _4.Params;
            fromPartial(object: Partial<_4.Params>): _4.Params;
        };
        GenesisState: {
            encode(message: _3.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _3.GenesisState;
            fromPartial(object: Partial<_3.GenesisState>): _3.GenesisState;
        };
    };
    const feeburner: {
        QueryClientImpl: typeof _178.QueryClientImpl;
        createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
            params(request?: _10.QueryParamsRequest): Promise<_10.QueryParamsResponse>;
            totalBurnedNeutronsAmount(request?: _10.QueryTotalBurnedNeutronsAmountRequest): Promise<_10.QueryTotalBurnedNeutronsAmountResponse>;
        };
        TotalBurnedNeutronsAmount: {
            encode(message: _11.TotalBurnedNeutronsAmount, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _11.TotalBurnedNeutronsAmount;
            fromPartial(object: Partial<_11.TotalBurnedNeutronsAmount>): _11.TotalBurnedNeutronsAmount;
        };
        QueryParamsRequest: {
            encode(_: _10.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(_: any): _10.QueryParamsRequest;
            fromPartial(_: Partial<_10.QueryParamsRequest>): _10.QueryParamsRequest;
        };
        QueryParamsResponse: {
            encode(message: _10.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _10.QueryParamsResponse;
            fromPartial(object: Partial<_10.QueryParamsResponse>): _10.QueryParamsResponse;
        };
        QueryTotalBurnedNeutronsAmountRequest: {
            encode(_: _10.QueryTotalBurnedNeutronsAmountRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(_: any): _10.QueryTotalBurnedNeutronsAmountRequest;
            fromPartial(_: Partial<_10.QueryTotalBurnedNeutronsAmountRequest>): _10.QueryTotalBurnedNeutronsAmountRequest;
        };
        QueryTotalBurnedNeutronsAmountResponse: {
            encode(message: _10.QueryTotalBurnedNeutronsAmountResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _10.QueryTotalBurnedNeutronsAmountResponse;
            fromPartial(object: Partial<_10.QueryTotalBurnedNeutronsAmountResponse>): _10.QueryTotalBurnedNeutronsAmountResponse;
        };
        Params: {
            encode(message: _9.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _9.Params;
            fromPartial(object: Partial<_9.Params>): _9.Params;
        };
        GenesisState: {
            encode(message: _8.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _8.GenesisState;
            fromPartial(object: Partial<_8.GenesisState>): _8.GenesisState;
        };
    };
    const feerefunder: {
        QueryClientImpl: typeof _179.QueryClientImpl;
        createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
            params(request?: _15.QueryParamsRequest): Promise<_15.QueryParamsResponse>;
            feeInfo(request: _15.FeeInfoRequest): Promise<_15.FeeInfoResponse>;
        };
        QueryParamsRequest: {
            encode(_: _15.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(_: any): _15.QueryParamsRequest;
            fromPartial(_: Partial<_15.QueryParamsRequest>): _15.QueryParamsRequest;
        };
        QueryParamsResponse: {
            encode(message: _15.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _15.QueryParamsResponse;
            fromPartial(object: Partial<_15.QueryParamsResponse>): _15.QueryParamsResponse;
        };
        FeeInfoRequest: {
            encode(message: _15.FeeInfoRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _15.FeeInfoRequest;
            fromPartial(object: Partial<_15.FeeInfoRequest>): _15.FeeInfoRequest;
        };
        FeeInfoResponse: {
            encode(message: _15.FeeInfoResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _15.FeeInfoResponse;
            fromPartial(object: Partial<_15.FeeInfoResponse>): _15.FeeInfoResponse;
        };
        Params: {
            encode(message: _14.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _14.Params;
            fromPartial(object: Partial<_14.Params>): _14.Params;
        };
        GenesisState: {
            encode(message: _13.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _13.GenesisState;
            fromPartial(object: Partial<_13.GenesisState>): _13.GenesisState;
        };
        FeeInfo: {
            encode(message: _13.FeeInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _13.FeeInfo;
            fromPartial(object: Partial<_13.FeeInfo>): _13.FeeInfo;
        };
        Fee: {
            encode(message: _12.Fee, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _12.Fee;
            fromPartial(object: Partial<_12.Fee>): _12.Fee;
        };
        PacketID: {
            encode(message: _12.PacketID, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _12.PacketID;
            fromPartial(object: Partial<_12.PacketID>): _12.PacketID;
        };
    };
    const interchainqueries: {
        MsgClientImpl: typeof _183.MsgClientImpl;
        QueryClientImpl: typeof _180.QueryClientImpl;
        createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
            params(request?: _18.QueryParamsRequest): Promise<_18.QueryParamsResponse>;
            registeredQueries(request: _18.QueryRegisteredQueriesRequest): Promise<_18.QueryRegisteredQueriesResponse>;
            registeredQuery(request: _18.QueryRegisteredQueryRequest): Promise<_18.QueryRegisteredQueryResponse>;
            queryResult(request: _18.QueryRegisteredQueryResultRequest): Promise<_18.QueryRegisteredQueryResultResponse>;
            lastRemoteHeight(request: _18.QueryLastRemoteHeight): Promise<_18.QueryLastRemoteHeightResponse>;
        };
        registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
        load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
        MessageComposer: {
            encoded: {
                registerInterchainQuery(value: _19.MsgRegisterInterchainQuery): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                submitQueryResult(value: _19.MsgSubmitQueryResult): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                removeInterchainQuery(value: _19.MsgRemoveInterchainQueryRequest): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                updateInterchainQuery(value: _19.MsgUpdateInterchainQueryRequest): {
                    typeUrl: string;
                    value: Uint8Array;
                };
            };
            withTypeUrl: {
                registerInterchainQuery(value: _19.MsgRegisterInterchainQuery): {
                    typeUrl: string;
                    value: _19.MsgRegisterInterchainQuery;
                };
                submitQueryResult(value: _19.MsgSubmitQueryResult): {
                    typeUrl: string;
                    value: _19.MsgSubmitQueryResult;
                };
                removeInterchainQuery(value: _19.MsgRemoveInterchainQueryRequest): {
                    typeUrl: string;
                    value: _19.MsgRemoveInterchainQueryRequest;
                };
                updateInterchainQuery(value: _19.MsgUpdateInterchainQueryRequest): {
                    typeUrl: string;
                    value: _19.MsgUpdateInterchainQueryRequest;
                };
            };
            fromJSON: {
                registerInterchainQuery(value: any): {
                    typeUrl: string;
                    value: _19.MsgRegisterInterchainQuery;
                };
                submitQueryResult(value: any): {
                    typeUrl: string;
                    value: _19.MsgSubmitQueryResult;
                };
                removeInterchainQuery(value: any): {
                    typeUrl: string;
                    value: _19.MsgRemoveInterchainQueryRequest;
                };
                updateInterchainQuery(value: any): {
                    typeUrl: string;
                    value: _19.MsgUpdateInterchainQueryRequest;
                };
            };
            fromPartial: {
                registerInterchainQuery(value: _19.MsgRegisterInterchainQuery): {
                    typeUrl: string;
                    value: _19.MsgRegisterInterchainQuery;
                };
                submitQueryResult(value: _19.MsgSubmitQueryResult): {
                    typeUrl: string;
                    value: _19.MsgSubmitQueryResult;
                };
                removeInterchainQuery(value: _19.MsgRemoveInterchainQueryRequest): {
                    typeUrl: string;
                    value: _19.MsgRemoveInterchainQueryRequest;
                };
                updateInterchainQuery(value: _19.MsgUpdateInterchainQueryRequest): {
                    typeUrl: string;
                    value: _19.MsgUpdateInterchainQueryRequest;
                };
            };
        };
        AminoConverter: {
            "/neutron.interchainqueries.MsgRegisterInterchainQuery": {
                aminoType: string;
                toAmino: ({ queryType, keys, transactionsFilter, connectionId, updatePeriod, sender }: _19.MsgRegisterInterchainQuery) => {
                    query_type: string;
                    keys: {
                        path: string;
                        key: Uint8Array;
                    }[];
                    transactions_filter: string;
                    connection_id: string;
                    update_period: string;
                    sender: string;
                };
                fromAmino: ({ query_type, keys, transactions_filter, connection_id, update_period, sender }: {
                    query_type: string;
                    keys: {
                        path: string;
                        key: Uint8Array;
                    }[];
                    transactions_filter: string;
                    connection_id: string;
                    update_period: string;
                    sender: string;
                }) => _19.MsgRegisterInterchainQuery;
            };
            "/neutron.interchainqueries.MsgSubmitQueryResult": {
                aminoType: string;
                toAmino: ({ queryId, sender, clientId, result }: _19.MsgSubmitQueryResult) => {
                    query_id: string;
                    sender: string;
                    client_id: string;
                    result: {
                        kv_results: {
                            storage_prefix: string;
                            key: Uint8Array;
                            value: Uint8Array;
                            Proof: {
                                ops: {
                                    type: string;
                                    key: Uint8Array;
                                    data: Uint8Array;
                                }[];
                            };
                        }[];
                        block: {
                            next_block_header: {
                                type_url: string;
                                value: Uint8Array;
                            };
                            header: {
                                type_url: string;
                                value: Uint8Array;
                            };
                            tx: {
                                response: {
                                    code: number;
                                    data: Uint8Array;
                                    log: string;
                                    info: string;
                                    gas_wanted: string;
                                    gas_used: string;
                                    events: {
                                        type: string;
                                        attributes: {
                                            key: Uint8Array;
                                            value: Uint8Array;
                                            index: boolean;
                                        }[];
                                    }[];
                                    codespace: string;
                                };
                                delivery_proof: {
                                    total: string;
                                    index: string;
                                    leaf_hash: Uint8Array;
                                    aunts: Uint8Array[];
                                };
                                inclusion_proof: {
                                    total: string;
                                    index: string;
                                    leaf_hash: Uint8Array;
                                    aunts: Uint8Array[];
                                };
                                data: Uint8Array;
                            };
                        };
                        height: string;
                        revision: string;
                        allow_kv_callbacks: boolean;
                    };
                };
                fromAmino: ({ query_id, sender, client_id, result }: {
                    query_id: string;
                    sender: string;
                    client_id: string;
                    result: {
                        kv_results: {
                            storage_prefix: string;
                            key: Uint8Array;
                            value: Uint8Array;
                            Proof: {
                                ops: {
                                    type: string;
                                    key: Uint8Array;
                                    data: Uint8Array;
                                }[];
                            };
                        }[];
                        block: {
                            next_block_header: {
                                type_url: string;
                                value: Uint8Array;
                            };
                            header: {
                                type_url: string;
                                value: Uint8Array;
                            };
                            tx: {
                                response: {
                                    code: number;
                                    data: Uint8Array;
                                    log: string;
                                    info: string;
                                    gas_wanted: string;
                                    gas_used: string;
                                    events: {
                                        type: string;
                                        attributes: {
                                            key: Uint8Array;
                                            value: Uint8Array;
                                            index: boolean;
                                        }[];
                                    }[];
                                    codespace: string;
                                };
                                delivery_proof: {
                                    total: string;
                                    index: string;
                                    leaf_hash: Uint8Array;
                                    aunts: Uint8Array[];
                                };
                                inclusion_proof: {
                                    total: string;
                                    index: string;
                                    leaf_hash: Uint8Array;
                                    aunts: Uint8Array[];
                                };
                                data: Uint8Array;
                            };
                        };
                        height: string;
                        revision: string;
                        allow_kv_callbacks: boolean;
                    };
                }) => _19.MsgSubmitQueryResult;
            };
            "/neutron.interchainqueries.MsgRemoveInterchainQueryRequest": {
                aminoType: string;
                toAmino: ({ queryId, sender }: _19.MsgRemoveInterchainQueryRequest) => {
                    query_id: string;
                    sender: string;
                };
                fromAmino: ({ query_id, sender }: {
                    query_id: string;
                    sender: string;
                }) => _19.MsgRemoveInterchainQueryRequest;
            };
            "/neutron.interchainqueries.MsgUpdateInterchainQueryRequest": {
                aminoType: string;
                toAmino: ({ queryId, newKeys, newUpdatePeriod, newTransactionsFilter, sender }: _19.MsgUpdateInterchainQueryRequest) => {
                    query_id: string;
                    new_keys: {
                        path: string;
                        key: Uint8Array;
                    }[];
                    new_update_period: string;
                    new_transactions_filter: string;
                    sender: string;
                };
                fromAmino: ({ query_id, new_keys, new_update_period, new_transactions_filter, sender }: {
                    query_id: string;
                    new_keys: {
                        path: string;
                        key: Uint8Array;
                    }[];
                    new_update_period: string;
                    new_transactions_filter: string;
                    sender: string;
                }) => _19.MsgUpdateInterchainQueryRequest;
            };
        };
        MsgRegisterInterchainQuery: {
            encode(message: _19.MsgRegisterInterchainQuery, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _19.MsgRegisterInterchainQuery;
            fromPartial(object: Partial<_19.MsgRegisterInterchainQuery>): _19.MsgRegisterInterchainQuery;
        };
        MsgRegisterInterchainQueryResponse: {
            encode(message: _19.MsgRegisterInterchainQueryResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _19.MsgRegisterInterchainQueryResponse;
            fromPartial(object: Partial<_19.MsgRegisterInterchainQueryResponse>): _19.MsgRegisterInterchainQueryResponse;
        };
        MsgSubmitQueryResult: {
            encode(message: _19.MsgSubmitQueryResult, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _19.MsgSubmitQueryResult;
            fromPartial(object: Partial<_19.MsgSubmitQueryResult>): _19.MsgSubmitQueryResult;
        };
        QueryResult: {
            encode(message: _19.QueryResult, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _19.QueryResult;
            fromPartial(object: Partial<_19.QueryResult>): _19.QueryResult;
        };
        StorageValue: {
            encode(message: _19.StorageValue, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _19.StorageValue;
            fromPartial(object: Partial<_19.StorageValue>): _19.StorageValue;
        };
        Block: {
            encode(message: _19.Block, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _19.Block;
            fromPartial(object: Partial<_19.Block>): _19.Block;
        };
        TxValue: {
            encode(message: _19.TxValue, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _19.TxValue;
            fromPartial(object: Partial<_19.TxValue>): _19.TxValue;
        };
        MsgSubmitQueryResultResponse: {
            encode(_: _19.MsgSubmitQueryResultResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(_: any): _19.MsgSubmitQueryResultResponse;
            fromPartial(_: Partial<_19.MsgSubmitQueryResultResponse>): _19.MsgSubmitQueryResultResponse;
        };
        MsgRemoveInterchainQueryRequest: {
            encode(message: _19.MsgRemoveInterchainQueryRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _19.MsgRemoveInterchainQueryRequest;
            fromPartial(object: Partial<_19.MsgRemoveInterchainQueryRequest>): _19.MsgRemoveInterchainQueryRequest;
        };
        MsgRemoveInterchainQueryResponse: {
            encode(_: _19.MsgRemoveInterchainQueryResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(_: any): _19.MsgRemoveInterchainQueryResponse;
            fromPartial(_: Partial<_19.MsgRemoveInterchainQueryResponse>): _19.MsgRemoveInterchainQueryResponse;
        };
        MsgUpdateInterchainQueryRequest: {
            encode(message: _19.MsgUpdateInterchainQueryRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _19.MsgUpdateInterchainQueryRequest;
            fromPartial(object: Partial<_19.MsgUpdateInterchainQueryRequest>): _19.MsgUpdateInterchainQueryRequest;
        };
        MsgUpdateInterchainQueryResponse: {
            encode(_: _19.MsgUpdateInterchainQueryResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(_: any): _19.MsgUpdateInterchainQueryResponse;
            fromPartial(_: Partial<_19.MsgUpdateInterchainQueryResponse>): _19.MsgUpdateInterchainQueryResponse;
        };
        QueryParamsRequest: {
            encode(_: _18.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(_: any): _18.QueryParamsRequest;
            fromPartial(_: Partial<_18.QueryParamsRequest>): _18.QueryParamsRequest;
        };
        QueryParamsResponse: {
            encode(message: _18.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _18.QueryParamsResponse;
            fromPartial(object: Partial<_18.QueryParamsResponse>): _18.QueryParamsResponse;
        };
        QueryRegisteredQueriesRequest: {
            encode(message: _18.QueryRegisteredQueriesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _18.QueryRegisteredQueriesRequest;
            fromPartial(object: Partial<_18.QueryRegisteredQueriesRequest>): _18.QueryRegisteredQueriesRequest;
        };
        QueryRegisteredQueriesResponse: {
            encode(message: _18.QueryRegisteredQueriesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _18.QueryRegisteredQueriesResponse;
            fromPartial(object: Partial<_18.QueryRegisteredQueriesResponse>): _18.QueryRegisteredQueriesResponse;
        };
        QueryRegisteredQueryRequest: {
            encode(message: _18.QueryRegisteredQueryRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _18.QueryRegisteredQueryRequest;
            fromPartial(object: Partial<_18.QueryRegisteredQueryRequest>): _18.QueryRegisteredQueryRequest;
        };
        QueryRegisteredQueryResponse: {
            encode(message: _18.QueryRegisteredQueryResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _18.QueryRegisteredQueryResponse;
            fromPartial(object: Partial<_18.QueryRegisteredQueryResponse>): _18.QueryRegisteredQueryResponse;
        };
        QueryRegisteredQueryResultRequest: {
            encode(message: _18.QueryRegisteredQueryResultRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _18.QueryRegisteredQueryResultRequest;
            fromPartial(object: Partial<_18.QueryRegisteredQueryResultRequest>): _18.QueryRegisteredQueryResultRequest;
        };
        QueryRegisteredQueryResultResponse: {
            encode(message: _18.QueryRegisteredQueryResultResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _18.QueryRegisteredQueryResultResponse;
            fromPartial(object: Partial<_18.QueryRegisteredQueryResultResponse>): _18.QueryRegisteredQueryResultResponse;
        };
        Transaction: {
            encode(message: _18.Transaction, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _18.Transaction;
            fromPartial(object: Partial<_18.Transaction>): _18.Transaction;
        };
        QueryLastRemoteHeight: {
            encode(message: _18.QueryLastRemoteHeight, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _18.QueryLastRemoteHeight;
            fromPartial(object: Partial<_18.QueryLastRemoteHeight>): _18.QueryLastRemoteHeight;
        };
        QueryLastRemoteHeightResponse: {
            encode(message: _18.QueryLastRemoteHeightResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _18.QueryLastRemoteHeightResponse;
            fromPartial(object: Partial<_18.QueryLastRemoteHeightResponse>): _18.QueryLastRemoteHeightResponse;
        };
        Params: {
            encode(message: _17.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _17.Params;
            fromPartial(object: Partial<_17.Params>): _17.Params;
        };
        RegisteredQuery: {
            encode(message: _16.RegisteredQuery, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _16.RegisteredQuery;
            fromPartial(object: Partial<_16.RegisteredQuery>): _16.RegisteredQuery;
        };
        KVKey: {
            encode(message: _16.KVKey, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _16.KVKey;
            fromPartial(object: Partial<_16.KVKey>): _16.KVKey;
        };
        GenesisState: {
            encode(message: _16.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _16.GenesisState;
            fromPartial(object: Partial<_16.GenesisState>): _16.GenesisState;
        };
    };
    const interchaintxs: {
        v1: {
            MsgClientImpl: typeof _184.MsgClientImpl;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    registerInterchainAccount(value: import("../interchaintxs/v1/tx").MsgRegisterInterchainAccount): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    submitTx(value: import("../interchaintxs/v1/tx").MsgSubmitTx): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    registerInterchainAccount(value: import("../interchaintxs/v1/tx").MsgRegisterInterchainAccount): {
                        typeUrl: string;
                        value: import("../interchaintxs/v1/tx").MsgRegisterInterchainAccount;
                    };
                    submitTx(value: import("../interchaintxs/v1/tx").MsgSubmitTx): {
                        typeUrl: string;
                        value: import("../interchaintxs/v1/tx").MsgSubmitTx;
                    };
                };
                fromJSON: {
                    registerInterchainAccount(value: any): {
                        typeUrl: string;
                        value: import("../interchaintxs/v1/tx").MsgRegisterInterchainAccount;
                    };
                    submitTx(value: any): {
                        typeUrl: string;
                        value: import("../interchaintxs/v1/tx").MsgSubmitTx;
                    };
                };
                fromPartial: {
                    registerInterchainAccount(value: import("../interchaintxs/v1/tx").MsgRegisterInterchainAccount): {
                        typeUrl: string;
                        value: import("../interchaintxs/v1/tx").MsgRegisterInterchainAccount;
                    };
                    submitTx(value: import("../interchaintxs/v1/tx").MsgSubmitTx): {
                        typeUrl: string;
                        value: import("../interchaintxs/v1/tx").MsgSubmitTx;
                    };
                };
            };
            AminoConverter: {
                "/neutron.interchaintxs.v1.MsgRegisterInterchainAccount": {
                    aminoType: string;
                    toAmino: ({ fromAddress, connectionId, interchainAccountId }: import("../interchaintxs/v1/tx").MsgRegisterInterchainAccount) => {
                        from_address: string;
                        connection_id: string;
                        interchain_account_id: string;
                    };
                    fromAmino: ({ from_address, connection_id, interchain_account_id }: {
                        from_address: string;
                        connection_id: string;
                        interchain_account_id: string;
                    }) => import("../interchaintxs/v1/tx").MsgRegisterInterchainAccount;
                };
                "/neutron.interchaintxs.v1.MsgSubmitTx": {
                    aminoType: string;
                    toAmino: ({ fromAddress, interchainAccountId, connectionId, msgs, memo, timeout, fee }: import("../interchaintxs/v1/tx").MsgSubmitTx) => {
                        from_address: string;
                        interchain_account_id: string;
                        connection_id: string;
                        msgs: {
                            type_url: string;
                            value: Uint8Array;
                        }[];
                        memo: string;
                        timeout: string;
                        fee: {
                            recv_fee: {
                                denom: string;
                                amount: string;
                            }[];
                            ack_fee: {
                                denom: string;
                                amount: string;
                            }[];
                            timeout_fee: {
                                denom: string;
                                amount: string;
                            }[];
                        };
                    };
                    fromAmino: ({ from_address, interchain_account_id, connection_id, msgs, memo, timeout, fee }: {
                        from_address: string;
                        interchain_account_id: string;
                        connection_id: string;
                        msgs: {
                            type_url: string;
                            value: Uint8Array;
                        }[];
                        memo: string;
                        timeout: string;
                        fee: {
                            recv_fee: {
                                denom: string;
                                amount: string;
                            }[];
                            ack_fee: {
                                denom: string;
                                amount: string;
                            }[];
                            timeout_fee: {
                                denom: string;
                                amount: string;
                            }[];
                        };
                    }) => import("../interchaintxs/v1/tx").MsgSubmitTx;
                };
            };
        };
        QueryClientImpl: typeof _181.QueryClientImpl;
        createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
            params(request?: _22.QueryParamsRequest): Promise<_22.QueryParamsResponse>;
            interchainAccountAddress(request: _22.QueryInterchainAccountAddressRequest): Promise<_22.QueryInterchainAccountAddressResponse>;
        };
        QueryParamsRequest: {
            encode(_: _22.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(_: any): _22.QueryParamsRequest;
            fromPartial(_: Partial<_22.QueryParamsRequest>): _22.QueryParamsRequest;
        };
        QueryParamsResponse: {
            encode(message: _22.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _22.QueryParamsResponse;
            fromPartial(object: Partial<_22.QueryParamsResponse>): _22.QueryParamsResponse;
        };
        QueryInterchainAccountAddressRequest: {
            encode(message: _22.QueryInterchainAccountAddressRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _22.QueryInterchainAccountAddressRequest;
            fromPartial(object: Partial<_22.QueryInterchainAccountAddressRequest>): _22.QueryInterchainAccountAddressRequest;
        };
        QueryInterchainAccountAddressResponse: {
            encode(message: _22.QueryInterchainAccountAddressResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _22.QueryInterchainAccountAddressResponse;
            fromPartial(object: Partial<_22.QueryInterchainAccountAddressResponse>): _22.QueryInterchainAccountAddressResponse;
        };
        Params: {
            encode(message: _21.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _21.Params;
            fromPartial(object: Partial<_21.Params>): _21.Params;
        };
        GenesisState: {
            encode(message: _20.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _20.GenesisState;
            fromPartial(object: Partial<_20.GenesisState>): _20.GenesisState;
        };
    };
    const transfer: {
        MsgClientImpl: typeof _185.MsgClientImpl;
        QueryClientImpl: typeof _182.QueryClientImpl;
        createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
            denomTrace(request: ibc.applications.transfer.v1.QueryDenomTraceRequest): Promise<ibc.applications.transfer.v1.QueryDenomTraceResponse>;
            denomTraces(request?: ibc.applications.transfer.v1.QueryDenomTracesRequest): Promise<ibc.applications.transfer.v1.QueryDenomTracesResponse>;
            params(request?: ibc.applications.transfer.v1.QueryParamsRequest): Promise<ibc.applications.transfer.v1.QueryParamsResponse>;
            denomHash(request: ibc.applications.transfer.v1.QueryDenomHashRequest): Promise<ibc.applications.transfer.v1.QueryDenomHashResponse>;
        };
        registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
        load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
        MessageComposer: {
            encoded: {
                transfer(value: _24.MsgTransfer): {
                    typeUrl: string;
                    value: Uint8Array;
                };
            };
            withTypeUrl: {
                transfer(value: _24.MsgTransfer): {
                    typeUrl: string;
                    value: _24.MsgTransfer;
                };
            };
            fromJSON: {
                transfer(value: any): {
                    typeUrl: string;
                    value: _24.MsgTransfer;
                };
            };
            fromPartial: {
                transfer(value: _24.MsgTransfer): {
                    typeUrl: string;
                    value: _24.MsgTransfer;
                };
            };
        };
        AminoConverter: {
            "/neutron.transfer.MsgTransfer": {
                aminoType: string;
                toAmino: ({ sourcePort, sourceChannel, token, sender, receiver, timeoutHeight, timeoutTimestamp, memo, fee }: _24.MsgTransfer) => {
                    source_port: string;
                    source_channel: string;
                    token: {
                        denom: string;
                        amount: string;
                    };
                    sender: string;
                    receiver: string;
                    timeout_height: import("../helpers").AminoHeight;
                    timeout_timestamp: string;
                    memo: string;
                    fee: {
                        recv_fee: {
                            denom: string;
                            amount: string;
                        }[];
                        ack_fee: {
                            denom: string;
                            amount: string;
                        }[];
                        timeout_fee: {
                            denom: string;
                            amount: string;
                        }[];
                    };
                };
                fromAmino: ({ source_port, source_channel, token, sender, receiver, timeout_height, timeout_timestamp, memo, fee }: {
                    source_port: string;
                    source_channel: string;
                    token: {
                        denom: string;
                        amount: string;
                    };
                    sender: string;
                    receiver: string;
                    timeout_height: import("../helpers").AminoHeight;
                    timeout_timestamp: string;
                    memo: string;
                    fee: {
                        recv_fee: {
                            denom: string;
                            amount: string;
                        }[];
                        ack_fee: {
                            denom: string;
                            amount: string;
                        }[];
                        timeout_fee: {
                            denom: string;
                            amount: string;
                        }[];
                    };
                }) => _24.MsgTransfer;
            };
        };
        MsgTransfer: {
            encode(message: _24.MsgTransfer, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _24.MsgTransfer;
            fromPartial(object: Partial<_24.MsgTransfer>): _24.MsgTransfer;
        };
        MsgTransferResponse: {
            encode(message: _24.MsgTransferResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _24.MsgTransferResponse;
            fromPartial(object: Partial<_24.MsgTransferResponse>): _24.MsgTransferResponse;
        };
    };
    const ClientFactory: {
        createRPCMsgClient: ({ rpc }: {
            rpc: import("../helpers").Rpc;
        }) => Promise<{
            neutron: {
                interchainqueries: _183.MsgClientImpl;
                interchaintxs: {
                    v1: _184.MsgClientImpl;
                };
                transfer: _185.MsgClientImpl;
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
            neutron: {
                contractmanager: {
                    params(request?: _2.QueryParamsRequest): Promise<_2.QueryParamsResponse>;
                    addressFailures(request: _2.QueryFailuresRequest): Promise<_2.QueryFailuresResponse>;
                    failures(request: _2.QueryFailuresRequest): Promise<_2.QueryFailuresResponse>;
                };
                cron: {
                    params(request?: _5.QueryParamsRequest): Promise<_5.QueryParamsResponse>;
                    schedule(request: _5.QueryGetScheduleRequest): Promise<_5.QueryGetScheduleResponse>;
                    schedules(request?: _5.QuerySchedulesRequest): Promise<_5.QuerySchedulesResponse>;
                };
                feeburner: {
                    params(request?: _10.QueryParamsRequest): Promise<_10.QueryParamsResponse>;
                    totalBurnedNeutronsAmount(request?: _10.QueryTotalBurnedNeutronsAmountRequest): Promise<_10.QueryTotalBurnedNeutronsAmountResponse>;
                };
                feerefunder: {
                    params(request?: _15.QueryParamsRequest): Promise<_15.QueryParamsResponse>;
                    feeInfo(request: _15.FeeInfoRequest): Promise<_15.FeeInfoResponse>;
                };
                interchainqueries: {
                    params(request?: _18.QueryParamsRequest): Promise<_18.QueryParamsResponse>;
                    registeredQueries(request: _18.QueryRegisteredQueriesRequest): Promise<_18.QueryRegisteredQueriesResponse>;
                    registeredQuery(request: _18.QueryRegisteredQueryRequest): Promise<_18.QueryRegisteredQueryResponse>;
                    queryResult(request: _18.QueryRegisteredQueryResultRequest): Promise<_18.QueryRegisteredQueryResultResponse>;
                    lastRemoteHeight(request: _18.QueryLastRemoteHeight): Promise<_18.QueryLastRemoteHeightResponse>;
                };
                interchaintxs: {
                    params(request?: _22.QueryParamsRequest): Promise<_22.QueryParamsResponse>;
                    interchainAccountAddress(request: _22.QueryInterchainAccountAddressRequest): Promise<_22.QueryInterchainAccountAddressResponse>;
                };
                transfer: {
                    denomTrace(request: ibc.applications.transfer.v1.QueryDenomTraceRequest): Promise<ibc.applications.transfer.v1.QueryDenomTraceResponse>;
                    denomTraces(request?: ibc.applications.transfer.v1.QueryDenomTracesRequest): Promise<ibc.applications.transfer.v1.QueryDenomTracesResponse>;
                    params(request?: ibc.applications.transfer.v1.QueryParamsRequest): Promise<ibc.applications.transfer.v1.QueryParamsResponse>;
                    denomHash(request: ibc.applications.transfer.v1.QueryDenomHashRequest): Promise<ibc.applications.transfer.v1.QueryDenomHashResponse>;
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
    };
}
