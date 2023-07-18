import * as _0 from "./crypto/v1/ethsecp256k1/keys";
import * as _1 from "./evm/v1/events";
import * as _2 from "./evm/v1/evm";
import * as _3 from "./evm/v1/genesis";
import * as _4 from "./evm/v1/query";
import * as _5 from "./evm/v1/tx";
import * as _6 from "./feemarket/v1/events";
import * as _7 from "./feemarket/v1/feemarket";
import * as _8 from "./feemarket/v1/genesis";
import * as _9 from "./feemarket/v1/query";
import * as _10 from "./feemarket/v1/tx";
import * as _11 from "./types/v1/account";
import * as _12 from "./types/v1/dynamic_fee";
import * as _13 from "./types/v1/indexer";
import * as _14 from "./types/v1/web3";
import * as _165 from "./evm/v1/query.lcd";
import * as _166 from "./feemarket/v1/query.lcd";
import * as _167 from "./evm/v1/query.rpc.Query";
import * as _168 from "./feemarket/v1/query.rpc.Query";
import * as _169 from "./evm/v1/tx.rpc.msg";
import * as _170 from "./feemarket/v1/tx.rpc.msg";
export declare namespace ethermint {
    namespace crypto {
        namespace v1 {
            const ethsecp256k1: {
                PubKey: {
                    encode(message: _0.PubKey, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _0.PubKey;
                    fromPartial(object: Partial<_0.PubKey>): _0.PubKey;
                };
                PrivKey: {
                    encode(message: _0.PrivKey, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _0.PrivKey;
                    fromPartial(object: Partial<_0.PrivKey>): _0.PrivKey;
                };
            };
        }
    }
    namespace evm {
        const v1: {
            MsgClientImpl: typeof _169.MsgClientImpl;
            QueryClientImpl: typeof _167.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                account(request: _4.QueryAccountRequest): Promise<_4.QueryAccountResponse>;
                cosmosAccount(request: _4.QueryCosmosAccountRequest): Promise<_4.QueryCosmosAccountResponse>;
                validatorAccount(request: _4.QueryValidatorAccountRequest): Promise<_4.QueryValidatorAccountResponse>;
                balance(request: _4.QueryBalanceRequest): Promise<_4.QueryBalanceResponse>;
                storage(request: _4.QueryStorageRequest): Promise<_4.QueryStorageResponse>;
                code(request: _4.QueryCodeRequest): Promise<_4.QueryCodeResponse>;
                params(request?: _4.QueryParamsRequest): Promise<_4.QueryParamsResponse>;
                ethCall(request: _4.EthCallRequest): Promise<_5.MsgEthereumTxResponse>;
                estimateGas(request: _4.EthCallRequest): Promise<_4.EstimateGasResponse>;
                traceTx(request: _4.QueryTraceTxRequest): Promise<_4.QueryTraceTxResponse>;
                traceBlock(request: _4.QueryTraceBlockRequest): Promise<_4.QueryTraceBlockResponse>;
                baseFee(request?: _4.QueryBaseFeeRequest): Promise<_4.QueryBaseFeeResponse>;
            };
            LCDQueryClient: typeof _165.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    ethereumTx(value: _5.MsgEthereumTx): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    updateParams(value: _5.MsgUpdateParams): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    ethereumTx(value: _5.MsgEthereumTx): {
                        typeUrl: string;
                        value: _5.MsgEthereumTx;
                    };
                    updateParams(value: _5.MsgUpdateParams): {
                        typeUrl: string;
                        value: _5.MsgUpdateParams;
                    };
                };
                fromJSON: {
                    ethereumTx(value: any): {
                        typeUrl: string;
                        value: _5.MsgEthereumTx;
                    };
                    updateParams(value: any): {
                        typeUrl: string;
                        value: _5.MsgUpdateParams;
                    };
                };
                fromPartial: {
                    ethereumTx(value: _5.MsgEthereumTx): {
                        typeUrl: string;
                        value: _5.MsgEthereumTx;
                    };
                    updateParams(value: _5.MsgUpdateParams): {
                        typeUrl: string;
                        value: _5.MsgUpdateParams;
                    };
                };
            };
            AminoConverter: {
                "/ethermint.evm.v1.MsgEthereumTx": {
                    aminoType: string;
                    toAmino: ({ data, size, hash, from }: _5.MsgEthereumTx) => {
                        data: {
                            type_url: string;
                            value: Uint8Array;
                        };
                        size: number;
                        hash: string;
                        from: string;
                    };
                    fromAmino: ({ data, size, hash, from }: {
                        data: {
                            type_url: string;
                            value: Uint8Array;
                        };
                        size: number;
                        hash: string;
                        from: string;
                    }) => _5.MsgEthereumTx;
                };
                "/ethermint.evm.v1.MsgUpdateParams": {
                    aminoType: string;
                    toAmino: ({ authority, params }: _5.MsgUpdateParams) => {
                        authority: string;
                        params: {
                            evm_denom: string;
                            enable_create: boolean;
                            enable_call: boolean;
                            extra_eips: string[];
                            chain_config: {
                                homestead_block: string;
                                dao_fork_block: string;
                                dao_fork_support: boolean;
                                eip150_block: string;
                                eip150_hash: string;
                                eip155_block: string;
                                eip158_block: string;
                                byzantium_block: string;
                                constantinople_block: string;
                                petersburg_block: string;
                                istanbul_block: string;
                                muir_glacier_block: string;
                                berlin_block: string;
                                london_block: string;
                                arrow_glacier_block: string;
                                gray_glacier_block: string;
                                merge_netsplit_block: string;
                                shanghai_block: string;
                                cancun_block: string;
                            };
                            allow_unprotected_txs: boolean;
                            active_precompiles: string[];
                        };
                    };
                    fromAmino: ({ authority, params }: {
                        authority: string;
                        params: {
                            evm_denom: string;
                            enable_create: boolean;
                            enable_call: boolean;
                            extra_eips: string[];
                            chain_config: {
                                homestead_block: string;
                                dao_fork_block: string;
                                dao_fork_support: boolean;
                                eip150_block: string;
                                eip150_hash: string;
                                eip155_block: string;
                                eip158_block: string;
                                byzantium_block: string;
                                constantinople_block: string;
                                petersburg_block: string;
                                istanbul_block: string;
                                muir_glacier_block: string;
                                berlin_block: string;
                                london_block: string;
                                arrow_glacier_block: string;
                                gray_glacier_block: string;
                                merge_netsplit_block: string;
                                shanghai_block: string;
                                cancun_block: string;
                            };
                            allow_unprotected_txs: boolean;
                            active_precompiles: string[];
                        };
                    }) => _5.MsgUpdateParams;
                };
            };
            MsgEthereumTx: {
                encode(message: _5.MsgEthereumTx, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _5.MsgEthereumTx;
                fromPartial(object: Partial<_5.MsgEthereumTx>): _5.MsgEthereumTx;
            };
            LegacyTx: {
                encode(message: _5.LegacyTx, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _5.LegacyTx;
                fromPartial(object: Partial<_5.LegacyTx>): _5.LegacyTx;
            };
            AccessListTx: {
                encode(message: _5.AccessListTx, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _5.AccessListTx;
                fromPartial(object: Partial<_5.AccessListTx>): _5.AccessListTx;
            };
            DynamicFeeTx: {
                encode(message: _5.DynamicFeeTx, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _5.DynamicFeeTx;
                fromPartial(object: Partial<_5.DynamicFeeTx>): _5.DynamicFeeTx;
            };
            ExtensionOptionsEthereumTx: {
                encode(_: _5.ExtensionOptionsEthereumTx, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _5.ExtensionOptionsEthereumTx;
                fromPartial(_: Partial<_5.ExtensionOptionsEthereumTx>): _5.ExtensionOptionsEthereumTx;
            };
            MsgEthereumTxResponse: {
                encode(message: _5.MsgEthereumTxResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _5.MsgEthereumTxResponse;
                fromPartial(object: Partial<_5.MsgEthereumTxResponse>): _5.MsgEthereumTxResponse;
            };
            MsgUpdateParams: {
                encode(message: _5.MsgUpdateParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _5.MsgUpdateParams;
                fromPartial(object: Partial<_5.MsgUpdateParams>): _5.MsgUpdateParams;
            };
            MsgUpdateParamsResponse: {
                encode(_: _5.MsgUpdateParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _5.MsgUpdateParamsResponse;
                fromPartial(_: Partial<_5.MsgUpdateParamsResponse>): _5.MsgUpdateParamsResponse;
            };
            QueryAccountRequest: {
                encode(message: _4.QueryAccountRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _4.QueryAccountRequest;
                fromPartial(object: Partial<_4.QueryAccountRequest>): _4.QueryAccountRequest;
            };
            QueryAccountResponse: {
                encode(message: _4.QueryAccountResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _4.QueryAccountResponse;
                fromPartial(object: Partial<_4.QueryAccountResponse>): _4.QueryAccountResponse;
            };
            QueryCosmosAccountRequest: {
                encode(message: _4.QueryCosmosAccountRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _4.QueryCosmosAccountRequest;
                fromPartial(object: Partial<_4.QueryCosmosAccountRequest>): _4.QueryCosmosAccountRequest;
            };
            QueryCosmosAccountResponse: {
                encode(message: _4.QueryCosmosAccountResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _4.QueryCosmosAccountResponse;
                fromPartial(object: Partial<_4.QueryCosmosAccountResponse>): _4.QueryCosmosAccountResponse;
            };
            QueryValidatorAccountRequest: {
                encode(message: _4.QueryValidatorAccountRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _4.QueryValidatorAccountRequest;
                fromPartial(object: Partial<_4.QueryValidatorAccountRequest>): _4.QueryValidatorAccountRequest;
            };
            QueryValidatorAccountResponse: {
                encode(message: _4.QueryValidatorAccountResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _4.QueryValidatorAccountResponse;
                fromPartial(object: Partial<_4.QueryValidatorAccountResponse>): _4.QueryValidatorAccountResponse;
            };
            QueryBalanceRequest: {
                encode(message: _4.QueryBalanceRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _4.QueryBalanceRequest;
                fromPartial(object: Partial<_4.QueryBalanceRequest>): _4.QueryBalanceRequest;
            };
            QueryBalanceResponse: {
                encode(message: _4.QueryBalanceResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _4.QueryBalanceResponse;
                fromPartial(object: Partial<_4.QueryBalanceResponse>): _4.QueryBalanceResponse;
            };
            QueryStorageRequest: {
                encode(message: _4.QueryStorageRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _4.QueryStorageRequest;
                fromPartial(object: Partial<_4.QueryStorageRequest>): _4.QueryStorageRequest;
            };
            QueryStorageResponse: {
                encode(message: _4.QueryStorageResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _4.QueryStorageResponse;
                fromPartial(object: Partial<_4.QueryStorageResponse>): _4.QueryStorageResponse;
            };
            QueryCodeRequest: {
                encode(message: _4.QueryCodeRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _4.QueryCodeRequest;
                fromPartial(object: Partial<_4.QueryCodeRequest>): _4.QueryCodeRequest;
            };
            QueryCodeResponse: {
                encode(message: _4.QueryCodeResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _4.QueryCodeResponse;
                fromPartial(object: Partial<_4.QueryCodeResponse>): _4.QueryCodeResponse;
            };
            QueryTxLogsRequest: {
                encode(message: _4.QueryTxLogsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _4.QueryTxLogsRequest;
                fromPartial(object: Partial<_4.QueryTxLogsRequest>): _4.QueryTxLogsRequest;
            };
            QueryTxLogsResponse: {
                encode(message: _4.QueryTxLogsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _4.QueryTxLogsResponse;
                fromPartial(object: Partial<_4.QueryTxLogsResponse>): _4.QueryTxLogsResponse;
            };
            QueryParamsRequest: {
                encode(_: _4.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _4.QueryParamsRequest;
                fromPartial(_: Partial<_4.QueryParamsRequest>): _4.QueryParamsRequest;
            };
            QueryParamsResponse: {
                encode(message: _4.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _4.QueryParamsResponse;
                fromPartial(object: Partial<_4.QueryParamsResponse>): _4.QueryParamsResponse;
            };
            EthCallRequest: {
                encode(message: _4.EthCallRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _4.EthCallRequest;
                fromPartial(object: Partial<_4.EthCallRequest>): _4.EthCallRequest;
            };
            EstimateGasResponse: {
                encode(message: _4.EstimateGasResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _4.EstimateGasResponse;
                fromPartial(object: Partial<_4.EstimateGasResponse>): _4.EstimateGasResponse;
            };
            QueryTraceTxRequest: {
                encode(message: _4.QueryTraceTxRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _4.QueryTraceTxRequest;
                fromPartial(object: Partial<_4.QueryTraceTxRequest>): _4.QueryTraceTxRequest;
            };
            QueryTraceTxResponse: {
                encode(message: _4.QueryTraceTxResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _4.QueryTraceTxResponse;
                fromPartial(object: Partial<_4.QueryTraceTxResponse>): _4.QueryTraceTxResponse;
            };
            QueryTraceBlockRequest: {
                encode(message: _4.QueryTraceBlockRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _4.QueryTraceBlockRequest;
                fromPartial(object: Partial<_4.QueryTraceBlockRequest>): _4.QueryTraceBlockRequest;
            };
            QueryTraceBlockResponse: {
                encode(message: _4.QueryTraceBlockResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _4.QueryTraceBlockResponse;
                fromPartial(object: Partial<_4.QueryTraceBlockResponse>): _4.QueryTraceBlockResponse;
            };
            QueryBaseFeeRequest: {
                encode(_: _4.QueryBaseFeeRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _4.QueryBaseFeeRequest;
                fromPartial(_: Partial<_4.QueryBaseFeeRequest>): _4.QueryBaseFeeRequest;
            };
            QueryBaseFeeResponse: {
                encode(message: _4.QueryBaseFeeResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _4.QueryBaseFeeResponse;
                fromPartial(object: Partial<_4.QueryBaseFeeResponse>): _4.QueryBaseFeeResponse;
            };
            GenesisState: {
                encode(message: _3.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _3.GenesisState;
                fromPartial(object: Partial<_3.GenesisState>): _3.GenesisState;
            };
            GenesisAccount: {
                encode(message: _3.GenesisAccount, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _3.GenesisAccount;
                fromPartial(object: Partial<_3.GenesisAccount>): _3.GenesisAccount;
            };
            Params: {
                encode(message: _2.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _2.Params;
                fromPartial(object: Partial<_2.Params>): _2.Params;
            };
            ChainConfig: {
                encode(message: _2.ChainConfig, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _2.ChainConfig;
                fromPartial(object: Partial<_2.ChainConfig>): _2.ChainConfig;
            };
            State: {
                encode(message: _2.State, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _2.State;
                fromPartial(object: Partial<_2.State>): _2.State;
            };
            TransactionLogs: {
                encode(message: _2.TransactionLogs, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _2.TransactionLogs;
                fromPartial(object: Partial<_2.TransactionLogs>): _2.TransactionLogs;
            };
            Log: {
                encode(message: _2.Log, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _2.Log;
                fromPartial(object: Partial<_2.Log>): _2.Log;
            };
            TxResult: {
                encode(message: _2.TxResult, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _2.TxResult;
                fromPartial(object: Partial<_2.TxResult>): _2.TxResult;
            };
            AccessTuple: {
                encode(message: _2.AccessTuple, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _2.AccessTuple;
                fromPartial(object: Partial<_2.AccessTuple>): _2.AccessTuple;
            };
            TraceConfig: {
                encode(message: _2.TraceConfig, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _2.TraceConfig;
                fromPartial(object: Partial<_2.TraceConfig>): _2.TraceConfig;
            };
            EventEthereumTx: {
                encode(message: _1.EventEthereumTx, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _1.EventEthereumTx;
                fromPartial(object: Partial<_1.EventEthereumTx>): _1.EventEthereumTx;
            };
            EventTxLog: {
                encode(message: _1.EventTxLog, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _1.EventTxLog;
                fromPartial(object: Partial<_1.EventTxLog>): _1.EventTxLog;
            };
            EventMessage: {
                encode(message: _1.EventMessage, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _1.EventMessage;
                fromPartial(object: Partial<_1.EventMessage>): _1.EventMessage;
            };
            EventBlockBloom: {
                encode(message: _1.EventBlockBloom, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _1.EventBlockBloom;
                fromPartial(object: Partial<_1.EventBlockBloom>): _1.EventBlockBloom;
            };
        };
    }
    namespace feemarket {
        const v1: {
            MsgClientImpl: typeof _170.MsgClientImpl;
            QueryClientImpl: typeof _168.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                params(request?: _9.QueryParamsRequest): Promise<_9.QueryParamsResponse>;
                baseFee(request?: _9.QueryBaseFeeRequest): Promise<_9.QueryBaseFeeResponse>;
                blockGas(request?: _9.QueryBlockGasRequest): Promise<_9.QueryBlockGasResponse>;
            };
            LCDQueryClient: typeof _166.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    updateParams(value: _10.MsgUpdateParams): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    updateParams(value: _10.MsgUpdateParams): {
                        typeUrl: string;
                        value: _10.MsgUpdateParams;
                    };
                };
                fromJSON: {
                    updateParams(value: any): {
                        typeUrl: string;
                        value: _10.MsgUpdateParams;
                    };
                };
                fromPartial: {
                    updateParams(value: _10.MsgUpdateParams): {
                        typeUrl: string;
                        value: _10.MsgUpdateParams;
                    };
                };
            };
            AminoConverter: {
                "/ethermint.feemarket.v1.MsgUpdateParams": {
                    aminoType: string;
                    toAmino: ({ authority, params }: _10.MsgUpdateParams) => {
                        authority: string;
                        params: {
                            no_base_fee: boolean;
                            base_fee_change_denominator: number;
                            elasticity_multiplier: number;
                            enable_height: string;
                            base_fee: string;
                            min_gas_price: string;
                            min_gas_multiplier: string;
                        };
                    };
                    fromAmino: ({ authority, params }: {
                        authority: string;
                        params: {
                            no_base_fee: boolean;
                            base_fee_change_denominator: number;
                            elasticity_multiplier: number;
                            enable_height: string;
                            base_fee: string;
                            min_gas_price: string;
                            min_gas_multiplier: string;
                        };
                    }) => _10.MsgUpdateParams;
                };
            };
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
            QueryParamsRequest: {
                encode(_: _9.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _9.QueryParamsRequest;
                fromPartial(_: Partial<_9.QueryParamsRequest>): _9.QueryParamsRequest;
            };
            QueryParamsResponse: {
                encode(message: _9.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _9.QueryParamsResponse;
                fromPartial(object: Partial<_9.QueryParamsResponse>): _9.QueryParamsResponse;
            };
            QueryBaseFeeRequest: {
                encode(_: _9.QueryBaseFeeRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _9.QueryBaseFeeRequest;
                fromPartial(_: Partial<_9.QueryBaseFeeRequest>): _9.QueryBaseFeeRequest;
            };
            QueryBaseFeeResponse: {
                encode(message: _9.QueryBaseFeeResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _9.QueryBaseFeeResponse;
                fromPartial(object: Partial<_9.QueryBaseFeeResponse>): _9.QueryBaseFeeResponse;
            };
            QueryBlockGasRequest: {
                encode(_: _9.QueryBlockGasRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _9.QueryBlockGasRequest;
                fromPartial(_: Partial<_9.QueryBlockGasRequest>): _9.QueryBlockGasRequest;
            };
            QueryBlockGasResponse: {
                encode(message: _9.QueryBlockGasResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _9.QueryBlockGasResponse;
                fromPartial(object: Partial<_9.QueryBlockGasResponse>): _9.QueryBlockGasResponse;
            };
            GenesisState: {
                encode(message: _8.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _8.GenesisState;
                fromPartial(object: Partial<_8.GenesisState>): _8.GenesisState;
            };
            Params: {
                encode(message: _7.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _7.Params;
                fromPartial(object: Partial<_7.Params>): _7.Params;
            };
            EventFeeMarket: {
                encode(message: _6.EventFeeMarket, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _6.EventFeeMarket;
                fromPartial(object: Partial<_6.EventFeeMarket>): _6.EventFeeMarket;
            };
            EventBlockGas: {
                encode(message: _6.EventBlockGas, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _6.EventBlockGas;
                fromPartial(object: Partial<_6.EventBlockGas>): _6.EventBlockGas;
            };
        };
    }
    namespace types {
        const v1: {
            ExtensionOptionsWeb3Tx: {
                encode(message: _14.ExtensionOptionsWeb3Tx, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _14.ExtensionOptionsWeb3Tx;
                fromPartial(object: Partial<_14.ExtensionOptionsWeb3Tx>): _14.ExtensionOptionsWeb3Tx;
            };
            TxResult: {
                encode(message: _13.TxResult, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _13.TxResult;
                fromPartial(object: Partial<_13.TxResult>): _13.TxResult;
            };
            ExtensionOptionDynamicFeeTx: {
                encode(message: _12.ExtensionOptionDynamicFeeTx, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _12.ExtensionOptionDynamicFeeTx;
                fromPartial(object: Partial<_12.ExtensionOptionDynamicFeeTx>): _12.ExtensionOptionDynamicFeeTx;
            };
            EthAccount: {
                encode(message: _11.EthAccount, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _11.EthAccount;
                fromPartial(object: Partial<_11.EthAccount>): _11.EthAccount;
            };
        };
    }
    const ClientFactory: {
        createRPCMsgClient: ({ rpc }: {
            rpc: import("../helpers").Rpc;
        }) => Promise<{
            ethermint: {
                evm: {
                    v1: _169.MsgClientImpl;
                };
                feemarket: {
                    v1: _170.MsgClientImpl;
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
            rpcEndpoint: string | import("@cosmjs/tendermint-rpc").HttpEndpoint;
        }) => Promise<{
            ethermint: {
                evm: {
                    v1: {
                        account(request: _4.QueryAccountRequest): Promise<_4.QueryAccountResponse>;
                        cosmosAccount(request: _4.QueryCosmosAccountRequest): Promise<_4.QueryCosmosAccountResponse>;
                        validatorAccount(request: _4.QueryValidatorAccountRequest): Promise<_4.QueryValidatorAccountResponse>;
                        balance(request: _4.QueryBalanceRequest): Promise<_4.QueryBalanceResponse>;
                        storage(request: _4.QueryStorageRequest): Promise<_4.QueryStorageResponse>;
                        code(request: _4.QueryCodeRequest): Promise<_4.QueryCodeResponse>;
                        params(request?: _4.QueryParamsRequest): Promise<_4.QueryParamsResponse>;
                        ethCall(request: _4.EthCallRequest): Promise<_5.MsgEthereumTxResponse>;
                        estimateGas(request: _4.EthCallRequest): Promise<_4.EstimateGasResponse>;
                        traceTx(request: _4.QueryTraceTxRequest): Promise<_4.QueryTraceTxResponse>;
                        traceBlock(request: _4.QueryTraceBlockRequest): Promise<_4.QueryTraceBlockResponse>;
                        baseFee(request?: _4.QueryBaseFeeRequest): Promise<_4.QueryBaseFeeResponse>;
                    };
                };
                feemarket: {
                    v1: {
                        params(request?: _9.QueryParamsRequest): Promise<_9.QueryParamsResponse>;
                        baseFee(request?: _9.QueryBaseFeeRequest): Promise<_9.QueryBaseFeeResponse>;
                        blockGas(request?: _9.QueryBlockGasRequest): Promise<_9.QueryBlockGasResponse>;
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
            ethermint: {
                evm: {
                    v1: _165.LCDQueryClient;
                };
                feemarket: {
                    v1: _166.LCDQueryClient;
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
